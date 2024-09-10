

import { anti_jd_frida } from "../../android/antiFrida/other/anti_jd_frida.js";
import { AntiNativeDebug } from "../../android/AntiNativeDebug.js";
import { AndSo } from "../../android/utils/AndSo.js";
import { AndUI } from "../../android/utils/AndUI.js";
import { Base } from "../../base/zzBase.js";


/**
 * jd, 使用Florida可直接过frida检测，仓库地址：https://github.com/Ylarod/Florida
 * 当前使用版本：florida-server-16.1.11-android-arm64
 */
export function main() {

    //anti_jd_frida()

    // AndUI.hook_ui()

    //mod_init_func hook和print测试
    // let soName = "libJDMobileSec.so"
    // //AndSo.print_module_init_func(soName)
    // AndSo.hook_module_init_func(soName, function (addr: NativePointer) {
    //     console.log(`aaaaaaaaaaaaaa ==> ${soName} : ${addr}`)
    // }, function (addr: NativePointer) {

    // });
}

