import { AndSo } from "../../android/utils/AndSo.js";



export function main() {

    dumpSO()

}



function dumpSO() {

    let bundleName = 'com.tencent.ace.gamematch2024final'
    let soName = 'libUE4.so'

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