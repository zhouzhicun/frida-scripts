//App模板

import { AntiJavaDebug } from "../../android/AntiJavaDebug.js";
import { AntiNativeDebug } from "../../android/AntiNativeDebug.js";
import { AndEncrypt } from "../../android/AndEncrypt.js";
import { AndHttps } from "../../android/network/AndHttps.js";
import { AndSocket } from "../../android/network/AndSocket.js";
import { AndUI } from "../../android/utils/AndUI.js";
import { AndSo } from "../../android/utils/AndSo.js";
import { Base } from "../../base/zzBase.js";


//见圳v3.7.5:com.sznews; 应用宝下载
export function main() {

    let targetSoName = "libxloader.so"

    AndSo.hook_linker_call_constructor(targetSoName, function() {
        
        let targetModule = Process.getModuleByName(targetSoName)
        console.log("libtongdun.base = " + targetModule.base)

        // Base.zzPatch.nopInsn64_batch_by_offset(targetSoName, [0xD9730, 0xD98CC, 0xD96A4])
        // Base.zzPatch.nopFunc64_batch_by_offset(targetSoName, [0xD9224])

        //Base.zzStalkerTrace.traceFunction(targetSoName, 0xD9098)

        //Base.zzStalkerTrace.traceInsn(targetSoName, 0xD9108)

    })


}