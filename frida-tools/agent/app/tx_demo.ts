
import { AndSo } from "../../android/utils/AndSo.js"

export function main() {

}


function dumpSO() {

    let bundleName = "com.kanxue.ollvm_ndk"
    let soName = "libnative-lib.so"

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