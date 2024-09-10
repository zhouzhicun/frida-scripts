/**
 * 原理：
 * dlopen加载so库的时候，直接过滤掉 libmsaoaidsec.so。
 * 这样就没有frida检测了，但是App后续获取oaid失败。
 
通杀使用libmsaoaidsec.so防护的所有App, 包括：
哔哩哔哩  tv.danmaku.bili
小红书    com.xingin.xhs
爱奇艺    com.qiyi.video
携程旅行  ctrip.android.view

 */

export function msa_unopen_msaoaidsec() {

    let targetSoName = 'libmsaoaidsec.so'
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {
            
            var pathPtr = args[0];
            if (pathPtr !== undefined && pathPtr != null) {
                var path = pathPtr.readCString();
                console.log('path: ',path)
                if(path.indexOf(targetSoName) >= 0){
                    pathPtr.writeUtf8String("");
                }
                
            }
        }
    });
}