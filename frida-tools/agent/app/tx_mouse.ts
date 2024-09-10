import { AndSo } from "../../android/utils/AndSo.js"

/**
 * 参考文档：https://bbs.kanxue.com/thread-276893.htm
 * 
 * 使用 florida(修改名字 + 指定端口启动) 即可过检测. florida仓库地址：https://github.com/Ylarod/Florida
 * 1.frida-server 改名；
 * 2.frida-server启动时指定端口。命令如下： ./vvda -l 0.0.0.0:1133 &
 * 
 * 3.运行 frida 脚本
 * adb forward tcp:1133 tcp:1133
 * frida -H 127.0.0.1:1133 -f com.com.sec2023.rocketmouse.mouse -l app.js
 */


export function main() {

    // let bundleName = "com.com.sec2023.rocketmouse.mouse"
    // let soName = "libil2cpp.so"

    // let android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    // if (android_dlopen_ext != null) {
    //     Interceptor.attach(android_dlopen_ext, {
    //         onEnter: function (args) {

    //         }, onLeave: function (retval) {
    //             let targetSo = Process.findModuleByName(soName)
    //             if(targetSo) {
    //                 //参数3 使用dumpMethod.frida会失败, 需改成 DumpMethod.fwrite
    //                 AndSo.dump_so(bundleName, soName, AndSo.DumpMethod.fwrite)
    //             }
    //         }
    //     });
    // }
}


function dumpSO() {

    let bundleName = "com.com.sec2023.rocketmouse.mouse"
    let soName = "libil2cpp.so"

    let android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    if (android_dlopen_ext != null) {
        Interceptor.attach(android_dlopen_ext, {
            onEnter: function (args) {

            }, onLeave: function (retval) {
                let targetSo = Process.findModuleByName(soName)
                if(targetSo) {
                    AndSo.dump_so(bundleName, soName, AndSo.DumpMethod.fwrite)
                }
            }
        });
    }
}