

import { anti_jd_frida } from "../../android/antiFrida/other/anti_jd_frida.js";
import { AntiNativeDebug } from "../../android/AntiNativeDebug.js";
import { AndSo } from "../../android/utils/AndSo.js";
import { AndUI } from "../../android/utils/AndUI.js";
import { Base } from "../../base/zzBase.js";


/**
 * gonghang
 */
export function main() {

    let targetSoName = 'libtongdun.so'
    let bundleName = "com.icbc"

    AndSo.hook_linker_call_constructor(targetSoName, function() {
        
        let targetModule = Process.getModuleByName(targetSoName)

        //打印so的base地址
        console.log("libtongdun.base = " + targetModule.base)

        // //nop掉maps檢查
        // Base.zzPatch.nopInsn64_batch_by_offset(targetSoName, [0xD9730])

        // //hook .init_proc函數, 执行结束时 dump so文件
        // Interceptor.attach(targetModule.base.add(0xD9098), {
        //     onLeave: function() {
        //         AndSo.dump_so(targetSoName, bundleName)
        //         //AntiNativeDebug.anti_exit()
        //     }
        // })


        Base.zzStalkerTrace.traceInsn(targetSoName, 0xD90A0)

        
    })

}

