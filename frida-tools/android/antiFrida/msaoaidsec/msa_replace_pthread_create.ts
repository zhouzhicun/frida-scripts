
/**
参考文档：https://bbs.kanxue.com/thread-281584.htm

原理：
libmsaoaidsec.so创建frida检测线程时，其pthread_create函数是通过dlsym获取的，会调用两次；
因此hook dlsym函数，当调用dlsym函数获取pthread_create函数地址时，替换为fake_pthread_create函数，从而绕过检测。


可过frida检测，但是hook java层的函数，仍会被检测到，导致frida进程 Process terminated挂掉，
可能原因：
立即hook java会早于hook native，导致java层的hook函数被检测到，从而导致frida进程挂掉。

解决方案：
延迟几秒后，在Hook java层的函数。 例如 setTimeout(hook_activity, 3000)


通杀使用libmsaoaidsec.so防护的所有App, 包括：
哔哩哔哩  tv.danmaku.bili
小红书    com.xingin.xhs
爱奇艺    com.qiyi.video
携程旅行  ctrip.android.view

 */

export function msa_replace_pthread_create() {

    let targetSoName = 'libmsaoaidsec.so'
    var fake_pthread_create = create_fake_pthread_create()

    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {

            var pathPtr = args[0];
            if (pathPtr !== undefined && pathPtr != null) {
                var path = pathPtr.readCString();
                console.log("[LOAD]", path)
                if (path.indexOf(targetSoName) >= 0) {
                    hook_dlsym()
                }
            }
        }
    });






    var count = 0
    function hook_dlsym() {
        
        console.log("=== HOOKING dlsym ===")
        var interceptor = Interceptor.attach(Module.findExportByName(null, "dlsym"),
            {
                onEnter: function (args) {
                    let funcName = args[1].readCString()
                    console.log("[dlsym]", funcName)
                    if (funcName == "pthread_create") {
                        count++
                    }
                },
                onLeave: function (retval) {
                    if (count == 1) {
                        retval.replace(fake_pthread_create)
                    } else if (count == 2) {
                        retval.replace(fake_pthread_create)
                        // 完成2次替换, 停止hook dlsym
                        interceptor.detach()
                    }
                }
            }
        )
    }


    function create_fake_pthread_create() {
        const funcPtr = Memory.alloc(4096)
        Memory.protect(funcPtr, 4096, "rwx")
        Memory.patchCode(funcPtr, 4096, code => {
            const cw = new Arm64Writer(code, { pc: funcPtr })
            cw.putRet()
        })
        return funcPtr
    }


}



