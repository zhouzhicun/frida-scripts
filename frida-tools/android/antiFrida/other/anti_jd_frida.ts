


/**
 * 
 * 目标so: libJDMobileSec.so
 * 参考代码：https://github.com/tcc0lin/SecCase/blob/main/libJDMobileSec.js
 * 
 * 1.上述参考代码对应的是jd早期版本32位libJDMobileSec.so库，之前下载的jd V13.0.2版本，经验证是可以bypass的。
 * 
 * 2.目前jd最新版本是 v13.1.2, so库已经改为arm64，具体bypass代码如下。
 * 
 */


export function anti_jd_frida() {

    let targetSoName = 'libJDMobileSec.so'
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {

            var pathPtr = args[0];
            if (pathPtr !== undefined && pathPtr != null) {
                var path = pathPtr.readCString();
                console.log("[LOAD]", path)
                if (path.indexOf(targetSoName) >= 0) {
                    this.need_hook = true
                }
            }
        },
        onLeave: function (args) {
            if (this.need_hook) {
                hook_JNI_OnLoad()
            }
        }

    });


    function hook_JNI_OnLoad() {
        let module = Process.findModuleByName(targetSoName)
        Interceptor.attach(module.base.add(0x82C8), {
            onEnter(args) {
                console.log("call JNI_OnLoad")

                //1.定位
                //hook_pthread_create 和 replace_str 均用于定位frida检测函数地址
                //hook_pthread_create()  
                //hook_strstr()

                //2.bypass
                bypass()

            }
        })
    }

    //通过hook pthread_create定位线程函数地址: 定位失败
    function hook_pthread_create() {
        var base = Process.findModuleByName(targetSoName).base
        console.log(targetSoName + " --- " + base)
        Interceptor.attach(Module.findExportByName("libc.so", "pthread_create"), {
            onEnter(args) {
                let func_addr = args[2]
                console.log("The thread function address is " + func_addr + ` [${func_addr.sub(base)}]`)
            }
        })
    }

    //通过hook strstr函数获取frida检测的堆栈，并进一步分析，从而获得检测函数地址
    function hook_strstr() {
        var pt_strstr = Module.findExportByName("libc.so", 'strstr');
        Interceptor.attach(pt_strstr, {
            onEnter: function (args) {
                var str1 = args[0].readCString();
                var str2 = args[1].readCString();
                console.log("strstr-->", str1, str2);
                console.log('strstr called from:\\n' + Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
                // console.log('strstr called from:\\n' + Thread.backtrace(this.context, Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\\n') + '\\n');
            }
        });
    }



    function patchFunc64(addr: NativePointer) {
        Memory.patchCode(addr, 4, code => {
            const cw = new Arm64Writer(code, { pc: addr });
            cw.putRet();
            cw.flush();
        });
    }

    function bypass() {

        //64位版本：
        let module = Process.findModuleByName(targetSoName)


        /**
         
__int64 sub_1567C()
{
  unsigned int v0; // w0

  sleep(1u);
  v0 = getpid();
  return syscall(129LL, v0, 9LL);
}
         * 
         * 
         */
        patchFunc64(module.base.add(0x1567C))
    }


}





