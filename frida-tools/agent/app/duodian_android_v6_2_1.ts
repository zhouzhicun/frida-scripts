



//App模板

import { AntiJavaDebug } from "../../android/AntiJavaDebug.js";
import { AntiNativeDebug } from "../../android/AntiNativeDebug.js";
import { AndEncrypt } from "../../android/AndEncrypt.js";
import { AndHttps } from "../../android/network/AndHttps.js";
import { AndSocket } from "../../android/network/AndSocket.js";
import { AndUI } from "../../android/utils/AndUI.js";
import { AndSo } from "../../android/utils/AndSo.js";
import { Base } from "../../base/zzBase.js";


// 多点V6.2.1:com.wm.dmall; 应用宝下载
// 参考：https://bbs.kanxue.com/thread-281761.htm

export function main() {

    //1.定位frida检测的so库
    //AndSo.location_anti_frida()

    let targetSoName = "libshell-super.com.wm.dmall.so";
    let svc_addrs = [0x4826c,0x487bc,0x48dc4,0x496d4,0x49880,0x499d0,0x4b200,0x4bf40,0x51578,0x51598,0x516fc,0x51984,0x519bc,0x51a34,0x51b24,0x51b9c,0x51e98]

    AndSo.hook_linker_call_constructor(targetSoName, function(){
        AndSo.print_soinfo(targetSoName)

        //2.定位检测位置
        //SOUtils.watch_svc_points(targetSoName, svc_addrs);

        //3.Patch sub_515C4调用
        let base = Module.findBaseAddress(targetSoName)
        Base.zzPatch.patchCode64_with_codeHex(base.add(0x5157C), "000080D2")

    });




    AndUI.hook_ui()
    // AndHttps.hook_https()
    // AndSocket.hook_socket()
    // AndEncrypt.hook_encrypt()

}