

/**
 * 参考文档：https://bbs.kanxue.com/thread-277034.htm
 
原理：
第一步：hook dlopen函数，当加载libmsaoaidsec.so时，调用locate_init()函数，hook __sprintf_chk函数。
第二步：调用__sprintf_chk函数时：
    1.定位检测线程：调用hook_pthread_create()函数，对pthread_create函数进行hook，并打印线程函数地址。
    2.bypass: 调用bypass()函数，该函数中nop或者patch掉三个地址，绕过检测。

表现：
哔哩哔哩  tv.danmaku.bili（通过）
小红书    com.xingin.xhs （通过）
爱奇艺    com.qiyi.video  （通过）
携程旅行  ctrip.android.view （通过）

 */

export function msa_nop_thread_funcV2() {

    let targetSoName = 'libmsaoaidsec.so'
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {

            var pathPtr = args[0];
            if (pathPtr !== undefined && pathPtr != null) {
                var path = pathPtr.readCString();
                console.log("[LOAD]", path)
                if (path.indexOf(targetSoName) >= 0) {
                    locate_init()
                }
            }
        }
    });

    var flag = 0
    function locate_init() {
        Interceptor.attach(Module.findExportByName(null, "__sprintf_chk"), {
            onEnter: function (args) {
                if (flag == 0) {
                    flag = 1

                    //1.定位
                    //hook_pthread_create()

                    //2.bypass
                    bypass()
                }
            }
        });
    }


    function hook_pthread_create() {
        var base_addr = Process.findModuleByName(targetSoName).base;
        console.log(targetSoName + " --- " + base_addr)
        Interceptor.attach(Module.findExportByName("libc.so", "pthread_create"), {
            onEnter(args) {
                let func_addr = args[2]
                console.log("The thread function address is " + func_addr + ` [${func_addr.sub(base_addr)}]`)
            }
        })
    }


    function patchFunc64(addr: NativePointer) {
        Memory.patchCode(addr, 4, code => {
            const cw = new Arm64Writer(code, { pc: addr });
            cw.putRet();
            cw.flush();
        });
    }

    function nop64(addr: NativePointer) {
        Memory.patchCode(addr, 4, code => {
            const cw = new Arm64Writer(code, { pc: addr });
            cw.putNop();
            cw.flush();
        });
    }

    function bypass() {

        let module = Process.findModuleByName(targetSoName)

        // hook_pthread_create日志打印：
        // libmsaoaidsec.so --- 0x7401b53000
        // The thread function address is 0x751d86e2bc [0x11bd1b2bc]
        // The thread function address is 0x751d86e2bc [0x11bd1b2bc]
        // The thread function address is 0x7401b6f544 [0x1c544]
        // The thread function address is 0x7401b6e8d4 [0x1b8d4]
        // The thread function address is 0x7401b79e5c [0x26e5c]


        // 方式1：直接将三个线程函数(0x1c544, 0x1b8d4, 0x26e5c)的前4个字节改为ret指令
        // patch64(module.base.add(0x1c544))
        // patch64(module.base.add(0x1b8d4))
        // patch64(module.base.add(0x26e5c))

        //方式2：直接将创建线程的三个父函数的前4个字节改为ret指令
        // patch64(module.base.add(0x1CEF8))
        // patch64(module.base.add(0x1B924))
        // patch64(module.base.add(0x2701C))


        // 方式3：将创建线程的父函数调用pthread_create函数创建线程时的那条指令进行NOP
        // 下面NOP的这三个地址是调用pthread_create函数创建线程时的那条指令的地址，而不是那个函数的基地址，例如：
        // LOAD:000000000001D2F0     ADRP            X2, #loc_1C544@PAGE
        // LOAD:000000000001D2F4     ADD             X2, X2, #loc_1C544@PAGEOFF
        // LOAD:000000000001D2F8     MOV             X0, SP
        // LOAD:000000000001D2FC     MOV             X1, XZR
        // LOAD:000000000001D300     MOV             X3, X21
        // LOAD:000000000001D304     BLR             X19               <------  该地址才是我们要nop的地址
        nop64(module.base.add(0x1D304))
        nop64(module.base.add(0x1BE58))
        nop64(module.base.add(0x27718))

    }

}



