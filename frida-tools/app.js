📦
225 /agent/main.js.map
71 /agent/main.js
741 /agent/app/anti_msaoaidsec.js.map
754 /agent/app/anti_msaoaidsec.js
987 /agent/app/duodian_android_v6_2_1.js.map
1082 /agent/app/duodian_android_v6_2_1.js
733 /agent/app/gonghang_android_v13.1.2.js.map
927 /agent/app/gonghang_android_v13.1.2.js
332 /agent/app/jd_android_v13.1.2.js.map
555 /agent/app/jd_android_v13.1.2.js
542 /agent/app/jianshen_android_v3_7_5.js.map
677 /agent/app/jianshen_android_v3_7_5.js
1067 /agent/app/tx_ace.js.map
1094 /agent/app/tx_ace.js
749 /agent/app/tx_ace_final.js.map
684 /agent/app/tx_ace_final.js
721 /agent/app/tx_demo.js.map
663 /agent/app/tx_demo.js
926 /agent/app/tx_mouse.js.map
1814 /agent/app/tx_mouse.js
16423 /android/AndEncrypt.js.map
21098 /android/AndEncrypt.js
1676 /android/AntiJavaDebug.js.map
2477 /android/AntiJavaDebug.js
7117 /android/AntiNativeDebug.js.map
8614 /android/AntiNativeDebug.js
569 /android/antiFrida/msaoaidsec/AntiMSA.js.map
865 /android/antiFrida/msaoaidsec/AntiMSA.js
2399 /android/antiFrida/msaoaidsec/msa_nop_thread_func.js.map
4035 /android/antiFrida/msaoaidsec/msa_nop_thread_func.js
2523 /android/antiFrida/msaoaidsec/msa_nop_thread_funcV2.js.map
4280 /android/antiFrida/msaoaidsec/msa_nop_thread_funcV2.js
1774 /android/antiFrida/msaoaidsec/msa_replace_pthread_create.js.map
2599 /android/antiFrida/msaoaidsec/msa_replace_pthread_create.js
718 /android/antiFrida/msaoaidsec/msa_unopen_msaoaidsec.js.map
882 /android/antiFrida/msaoaidsec/msa_unopen_msaoaidsec.js
2556 /android/antiFrida/other/anti_jd_frida.js.map
3367 /android/antiFrida/other/anti_jd_frida.js
7142 /android/network/AndHttps.js.map
10548 /android/network/AndHttps.js
3806 /android/network/AndSocket.js.map
4802 /android/network/AndSocket.js
3061 /android/utils/AndDump.js.map
3847 /android/utils/AndDump.js
12112 /android/utils/AndSo.js.map
17043 /android/utils/AndSo.js
5453 /android/utils/AndUI.js.map
6651 /android/utils/AndUI.js
714 /base/zzBase.js.map
697 /base/zzBase.js
3262 /base/zzCallStack.js.map
4004 /base/zzCallStack.js
1788 /base/zzHookFuncHandler.js.map
2490 /base/zzHookFuncHandler.js
5423 /base/zzNativeFunc.js.map
8177 /base/zzNativeFunc.js
3646 /base/zzPatch.js.map
5178 /base/zzPatch.js
3412 /base/zzPatch64.js.map
4688 /base/zzPatch64.js
18026 /base/zzR0trace.js.map
22100 /base/zzR0trace.js
10403 /base/zzStalkerTrace.js.map
10331 /base/zzStalkerTrace.js
2451 /base/zzStringUtils.js.map
2638 /base/zzStringUtils.js
9428 /base/zzSyscallTable.js.map
8924 /base/zzSyscallTable.js
2663 /games/UEGame.js.map
9776 /games/UEGame.js
3818 /node_modules/@frida/base64-js/index.js
↻ base64-js
55789 /node_modules/@frida/buffer/index.js
↻ node:buffer
2221 /node_modules/@frida/ieee754/index.js
↻ ieee754
✄
{"version":3,"file":"main.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/main.ts"],"names":[],"mappings":"AAmBA,OAAO,KAAK,IAAI,MAAM,kBAAkB,CAAA;AAGxC,gBAAgB;AAEhB,IAAI,CAAC,IAAI,EAAE,CAAA"}
✄
import * as demo from "./app/tx_demo.js";
//antiMSA.main()
demo.main();
✄
{"version":3,"file":"anti_msaoaidsec.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/app/anti_msaoaidsec.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,OAAO,EAAE,MAAM,+CAA+C,CAAC;AAIxE,MAAM,UAAU,IAAI;IAEhB,OAAO,EAAE,CAAA;IAGT,SAAS,OAAO;QACZ,MAAM;QACN,OAAO,CAAC,GAAG,CAAC,sBAAsB,CAAC,CAAA;QACnC,OAAO,CAAC,eAAe,EAAE,CAAA;IAC7B,CAAC;IAED,SAAS,OAAO;QACZ,MAAM;QACN,OAAO,CAAC,GAAG,CAAC,wBAAwB,CAAC,CAAA;QACrC,OAAO,CAAC,iBAAiB,EAAE,CAAA;IAC/B,CAAC;IAED,SAAS,OAAO;QACZ,MAAM;QACN,OAAO,CAAC,GAAG,CAAC,6BAA6B,CAAC,CAAA;QAC1C,OAAO,CAAC,sBAAsB,EAAE,CAAA;IACpC,CAAC;IAED,SAAS,OAAO;QACZ,MAAM;QACN,OAAO,CAAC,GAAG,CAAC,wBAAwB,CAAC,CAAA;QACrC,OAAO,CAAC,iBAAiB,EAAE,CAAA;IAC/B,CAAC;IAGD,0BAA0B;IAC1B,sBAAsB;IACtB,WAAW;AAEf,CAAC"}
✄
import { AntiMSA } from "../../android/antiFrida/msaoaidsec/AntiMSA.js";
export function main() {
    method1();
    function method1() {
        //方式1：
        console.log("方式1: nop_thread_func");
        AntiMSA.nop_thread_func();
    }
    function method2() {
        //方式1：
        console.log("方式2: nop_thread_funcV2");
        AntiMSA.nop_thread_funcV2();
    }
    function method3() {
        //方式1：
        console.log("方式3: replace_pthread_create");
        AntiMSA.replace_pthread_create();
    }
    function method4() {
        //方式1：
        console.log("方式4: unopen_msaoaidsec");
        AntiMSA.unopen_msaoaidsec();
    }
    // setTimeout(function() {
    //     AndUI.hook_ui()
    // }, 3000)
}
✄
{"version":3,"file":"duodian_android_v6_2_1.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/app/duodian_android_v6_2_1.ts"],"names":[],"mappings":"AAIA,OAAO;AAOP,OAAO,EAAE,KAAK,EAAE,MAAM,8BAA8B,CAAC;AACrD,OAAO,EAAE,KAAK,EAAE,MAAM,8BAA8B,CAAC;AACrD,OAAO,EAAE,IAAI,EAAE,MAAM,sBAAsB,CAAC;AAG5C,+BAA+B;AAC/B,8CAA8C;AAE9C,MAAM,UAAU,IAAI;IAEhB,iBAAiB;IACjB,6BAA6B;IAE7B,IAAI,YAAY,GAAG,gCAAgC,CAAC;IACpD,IAAI,SAAS,GAAG,CAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,EAAC,OAAO,CAAC,CAAA;IAEzJ,KAAK,CAAC,4BAA4B,CAAC,YAAY,EAAE;QAC7C,KAAK,CAAC,YAAY,CAAC,YAAY,CAAC,CAAA;QAEhC,UAAU;QACV,oDAAoD;QAEpD,qBAAqB;QACrB,IAAI,IAAI,GAAG,MAAM,CAAC,eAAe,CAAC,YAAY,CAAC,CAAA;QAC/C,IAAI,CAAC,OAAO,CAAC,wBAAwB,CAAC,IAAI,CAAC,GAAG,CAAC,OAAO,CAAC,EAAE,UAAU,CAAC,CAAA;IAExE,CAAC,CAAC,CAAC;IAKH,KAAK,CAAC,OAAO,EAAE,CAAA;IACf,wBAAwB;IACxB,0BAA0B;IAC1B,4BAA4B;AAEhC,CAAC"}
✄
//App模板
import { AndUI } from "../../android/utils/AndUI.js";
import { AndSo } from "../../android/utils/AndSo.js";
import { Base } from "../../base/zzBase.js";
// 多点V6.2.1:com.wm.dmall; 应用宝下载
// 参考：https://bbs.kanxue.com/thread-281761.htm
export function main() {
    //1.定位frida检测的so库
    //AndSo.location_anti_frida()
    let targetSoName = "libshell-super.com.wm.dmall.so";
    let svc_addrs = [0x4826c, 0x487bc, 0x48dc4, 0x496d4, 0x49880, 0x499d0, 0x4b200, 0x4bf40, 0x51578, 0x51598, 0x516fc, 0x51984, 0x519bc, 0x51a34, 0x51b24, 0x51b9c, 0x51e98];
    AndSo.hook_linker_call_constructor(targetSoName, function () {
        AndSo.print_soinfo(targetSoName);
        //2.定位检测位置
        //SOUtils.watch_svc_points(targetSoName, svc_addrs);
        //3.Patch sub_515C4调用
        let base = Module.findBaseAddress(targetSoName);
        Base.zzPatch.patchCode64_with_codeHex(base.add(0x5157C), "000080D2");
    });
    AndUI.hook_ui();
    // AndHttps.hook_https()
    // AndSocket.hook_socket()
    // AndEncrypt.hook_encrypt()
}
✄
{"version":3,"file":"gonghang_android_v13.1.2.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/app/gonghang_android_v13.1.2.ts"],"names":[],"mappings":"AAIA,OAAO,EAAE,KAAK,EAAE,MAAM,8BAA8B,CAAC;AAErD,OAAO,EAAE,IAAI,EAAE,MAAM,sBAAsB,CAAC;AAG5C;;GAEG;AACH,MAAM,UAAU,IAAI;IAEhB,IAAI,YAAY,GAAG,eAAe,CAAA;IAClC,IAAI,UAAU,GAAG,UAAU,CAAA;IAE3B,KAAK,CAAC,4BAA4B,CAAC,YAAY,EAAE;QAE7C,IAAI,YAAY,GAAG,OAAO,CAAC,eAAe,CAAC,YAAY,CAAC,CAAA;QAExD,aAAa;QACb,OAAO,CAAC,GAAG,CAAC,oBAAoB,GAAG,YAAY,CAAC,IAAI,CAAC,CAAA;QAErD,eAAe;QACf,kEAAkE;QAElE,uCAAuC;QACvC,uDAAuD;QACvD,4BAA4B;QAC5B,kDAAkD;QAClD,wCAAwC;QACxC,QAAQ;QACR,KAAK;QAGL,IAAI,CAAC,cAAc,CAAC,SAAS,CAAC,YAAY,EAAE,OAAO,CAAC,CAAA;IAGxD,CAAC,CAAC,CAAA;AAEN,CAAC"}
✄
import { AndSo } from "../../android/utils/AndSo.js";
import { Base } from "../../base/zzBase.js";
/**
 * gonghang
 */
export function main() {
    let targetSoName = 'libtongdun.so';
    let bundleName = "com.icbc";
    AndSo.hook_linker_call_constructor(targetSoName, function () {
        let targetModule = Process.getModuleByName(targetSoName);
        //打印so的base地址
        console.log("libtongdun.base = " + targetModule.base);
        // //nop掉maps檢查
        // Base.zzPatch.nopInsn64_batch_by_offset(targetSoName, [0xD9730])
        // //hook .init_proc函數, 执行结束时 dump so文件
        // Interceptor.attach(targetModule.base.add(0xD9098), {
        //     onLeave: function() {
        //         AndSo.dump_so(targetSoName, bundleName)
        //         //AntiNativeDebug.anti_exit()
        //     }
        // })
        Base.zzStalkerTrace.traceInsn(targetSoName, 0xD90A0);
    });
}
✄
{"version":3,"file":"jd_android_v13.1.2.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/app/jd_android_v13.1.2.ts"],"names":[],"mappings":"AASA;;;GAGG;AACH,MAAM,UAAU,IAAI;IAEhB,iBAAiB;IAEjB,kBAAkB;IAElB,4BAA4B;IAC5B,mCAAmC;IACnC,yCAAyC;IACzC,uEAAuE;IACvE,4DAA4D;IAC5D,sCAAsC;IAEtC,MAAM;AACV,CAAC"}
✄
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
✄
{"version":3,"file":"jianshen_android_v3_7_5.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/app/jianshen_android_v3_7_5.ts"],"names":[],"mappings":"AAAA,OAAO;AAQP,OAAO,EAAE,KAAK,EAAE,MAAM,8BAA8B,CAAC;AAIrD,4BAA4B;AAC5B,MAAM,UAAU,IAAI;IAEhB,IAAI,YAAY,GAAG,eAAe,CAAA;IAElC,KAAK,CAAC,4BAA4B,CAAC,YAAY,EAAE;QAE7C,IAAI,YAAY,GAAG,OAAO,CAAC,eAAe,CAAC,YAAY,CAAC,CAAA;QACxD,OAAO,CAAC,GAAG,CAAC,oBAAoB,GAAG,YAAY,CAAC,IAAI,CAAC,CAAA;QAErD,oFAAoF;QACpF,kEAAkE;QAElE,0DAA0D;QAE1D,sDAAsD;IAE1D,CAAC,CAAC,CAAA;AAGN,CAAC"}
✄
//App模板
import { AndSo } from "../../android/utils/AndSo.js";
//见圳v3.7.5:com.sznews; 应用宝下载
export function main() {
    let targetSoName = "libxloader.so";
    AndSo.hook_linker_call_constructor(targetSoName, function () {
        let targetModule = Process.getModuleByName(targetSoName);
        console.log("libtongdun.base = " + targetModule.base);
        // Base.zzPatch.nopInsn64_batch_by_offset(targetSoName, [0xD9730, 0xD98CC, 0xD96A4])
        // Base.zzPatch.nopFunc64_batch_by_offset(targetSoName, [0xD9224])
        //Base.zzStalkerTrace.traceFunction(targetSoName, 0xD9098)
        //Base.zzStalkerTrace.traceInsn(targetSoName, 0xD9108)
    });
}
✄
{"version":3,"file":"tx_ace.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/app/tx_ace.ts"],"names":[],"mappings":"AAEA,OAAO,EAAE,MAAM,EAAE,MAAM,uBAAuB,CAAC;AAG/C,MAAM,UAAU,IAAI;IAEhB,OAAO;IACP,YAAY,CAAC;QACT,cAAc;QACd,UAAU,CAAC,GAAG,EAAE,IAAI,CAAC,CAAA;IACzB,CAAC,CAAC,CAAC;AAEP,CAAC;AAID,SAAS,GAAG;IAER,MAAM;IACN,IAAI,OAAO,GAAG,WAAW,CAAA;IACzB,IAAI,aAAa,GAAG,UAAU,CAAA;IAC9B,IAAI,YAAY,GAAG,UAAU,CAAA;IAC7B,IAAI,oBAAoB,GAAG,SAAS,CAAA;IAEpC,IAAI,QAAQ,GAAG,IAAI,MAAM,CAAC,YAAY,CAAC,OAAO,EAAE,aAAa,EAAE,YAAY,EAAE,oBAAoB,CAAC,CAAA;IAClG,MAAM,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAA;IACrB,sCAAsC;IAEtC,UAAU;IACV,IAAI,UAAU,GAAG,wBAAwB,CAAA;IACzC,IAAI,UAAU,GAAG,MAAM,CAAC,YAAY,CAAC,UAAU,CAAC,CAAA;IAEhD,UAAU,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,UAAU,CAAC,OAAO,CAAC,CAAC,CAAA,mBAAmB;IAC7D,MAAM,CAAC,gBAAgB,CAAC,UAAU,CAAC,CAAA;AACvC,CAAC;AAGD,SAAS,WAAW,CAAC,KAAa,OAAO;IACrC,UAAU;IACV,IAAI,UAAU,GAAG,wBAAwB,CAAA;IACzC,IAAI,UAAU,GAAG,MAAM,CAAC,YAAY,CAAC,UAAU,CAAC,CAAA;IAEhD,UAAU,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,UAAU,CAAC,EAAE,CAAC,CAAC,CAAA,mBAAmB;AAE5D,CAAC"}
✄
import { UEGame } from "../../games/UEGame.js";
export function main() {
    //3s后执行
    setImmediate(function () {
        //延迟1秒调用Hook方法
        setTimeout(aaa, 3000);
    });
}
function aaa() {
    //方式3：
    var libName = "libUE4.so";
    var GWorld_Offset = 0x0B32D8A8;
    var GName_Offset = 0x0B171CC0;
    var GUObjectArray_Offset = 0xB1B5F98;
    let ueconfig = new UEGame.UEGameConfig(libName, GWorld_Offset, GName_Offset, GUObjectArray_Offset);
    UEGame.init(ueconfig);
    //let allActors = UEGame.getAllActor()
    //生命值属性的偏移
    let playerName = 'FirstPersonCharacter_C';
    let playerAddr = UEGame.getActorAddr(playerName);
    playerAddr.add(0x510).writeFloat(1000000); //通过偏移定位到生命值的变量并写入值
    UEGame.getActorLocation(playerAddr);
}
function setPlayerHP(hp = 1000000) {
    //生命值属性的偏移
    let playerName = 'FirstPersonCharacter_C';
    let playerAddr = UEGame.getActorAddr(playerName);
    playerAddr.add(0x510).writeFloat(hp); //通过偏移定位到生命值的变量并写入值
}
✄
{"version":3,"file":"tx_ace_final.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/app/tx_ace_final.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,KAAK,EAAE,MAAM,8BAA8B,CAAC;AAIrD,MAAM,UAAU,IAAI;IAEhB,MAAM,EAAE,CAAA;AAEZ,CAAC;AAID,SAAS,MAAM;IAEX,IAAI,UAAU,GAAG,oCAAoC,CAAA;IACrD,IAAI,MAAM,GAAG,WAAW,CAAA;IAExB,IAAI,kBAAkB,GAAG,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,oBAAoB,CAAC,CAAC;IAC7E,IAAI,kBAAkB,IAAI,IAAI,EAAE;QAC5B,WAAW,CAAC,MAAM,CAAC,kBAAkB,EAAE;YACnC,OAAO,EAAE,UAAU,IAAI;YAEvB,CAAC,EAAE,OAAO,EAAE,UAAU,MAAM;gBACxB,IAAI,QAAQ,GAAG,OAAO,CAAC,gBAAgB,CAAC,MAAM,CAAC,CAAA;gBAC/C,IAAG,QAAQ,EAAE;oBACT,KAAK,CAAC,OAAO,CAAC,UAAU,EAAE,MAAM,EAAE,KAAK,CAAC,UAAU,CAAC,MAAM,CAAC,CAAA;iBAC7D;YACL,CAAC;SACJ,CAAC,CAAC;KACN;AACL,CAAC"}
✄
import { AndSo } from "../../android/utils/AndSo.js";
export function main() {
    dumpSO();
}
function dumpSO() {
    let bundleName = 'com.tencent.ace.gamematch2024final';
    let soName = 'libUE4.so';
    let android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    if (android_dlopen_ext != null) {
        Interceptor.attach(android_dlopen_ext, {
            onEnter: function (args) {
            }, onLeave: function (retval) {
                let targetSo = Process.findModuleByName(soName);
                if (targetSo) {
                    AndSo.dump_so(bundleName, soName, AndSo.DumpMethod.fwrite);
                }
            }
        });
    }
}
✄
{"version":3,"file":"tx_demo.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/app/tx_demo.ts"],"names":[],"mappings":"AACA,OAAO,EAAE,KAAK,EAAE,MAAM,8BAA8B,CAAA;AAEpD,MAAM,UAAU,IAAI;AAEpB,CAAC;AAGD,SAAS,MAAM;IAEX,IAAI,UAAU,GAAG,sBAAsB,CAAA;IACvC,IAAI,MAAM,GAAG,kBAAkB,CAAA;IAE/B,IAAI,kBAAkB,GAAG,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,oBAAoB,CAAC,CAAC;IAC7E,IAAI,kBAAkB,IAAI,IAAI,EAAE;QAC5B,WAAW,CAAC,MAAM,CAAC,kBAAkB,EAAE;YACnC,OAAO,EAAE,UAAU,IAAI;YAEvB,CAAC,EAAE,OAAO,EAAE,UAAU,MAAM;gBACxB,IAAI,QAAQ,GAAG,OAAO,CAAC,gBAAgB,CAAC,MAAM,CAAC,CAAA;gBAC/C,IAAG,QAAQ,EAAE;oBACT,KAAK,CAAC,OAAO,CAAC,UAAU,EAAE,MAAM,EAAE,KAAK,CAAC,UAAU,CAAC,MAAM,CAAC,CAAA;iBAC7D;YACL,CAAC;SACJ,CAAC,CAAC;KACN;AACL,CAAC"}
✄
import { AndSo } from "../../android/utils/AndSo.js";
export function main() {
}
function dumpSO() {
    let bundleName = "com.kanxue.ollvm_ndk";
    let soName = "libnative-lib.so";
    let android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    if (android_dlopen_ext != null) {
        Interceptor.attach(android_dlopen_ext, {
            onEnter: function (args) {
            }, onLeave: function (retval) {
                let targetSo = Process.findModuleByName(soName);
                if (targetSo) {
                    AndSo.dump_so(bundleName, soName, AndSo.DumpMethod.fwrite);
                }
            }
        });
    }
}
✄
{"version":3,"file":"tx_mouse.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["agent/app/tx_mouse.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,KAAK,EAAE,MAAM,8BAA8B,CAAA;AAEpD;;;;;;;;;;GAUG;AAGH,MAAM,UAAU,IAAI;IAEhB,uDAAuD;IACvD,8BAA8B;IAE9B,gFAAgF;IAChF,oCAAoC;IACpC,+CAA+C;IAC/C,qCAAqC;IAErC,0CAA0C;IAC1C,8DAA8D;IAC9D,6BAA6B;IAC7B,qEAAqE;IACrE,6EAA6E;IAC7E,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,IAAI;AACR,CAAC;AAGD,SAAS,MAAM;IAEX,IAAI,UAAU,GAAG,mCAAmC,CAAA;IACpD,IAAI,MAAM,GAAG,cAAc,CAAA;IAE3B,IAAI,kBAAkB,GAAG,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,oBAAoB,CAAC,CAAC;IAC7E,IAAI,kBAAkB,IAAI,IAAI,EAAE;QAC5B,WAAW,CAAC,MAAM,CAAC,kBAAkB,EAAE;YACnC,OAAO,EAAE,UAAU,IAAI;YAEvB,CAAC,EAAE,OAAO,EAAE,UAAU,MAAM;gBACxB,IAAI,QAAQ,GAAG,OAAO,CAAC,gBAAgB,CAAC,MAAM,CAAC,CAAA;gBAC/C,IAAG,QAAQ,EAAE;oBACT,KAAK,CAAC,OAAO,CAAC,UAAU,EAAE,MAAM,EAAE,KAAK,CAAC,UAAU,CAAC,MAAM,CAAC,CAAA;iBAC7D;YACL,CAAC;SACJ,CAAC,CAAC;KACN;AACL,CAAC"}
✄
import { AndSo } from "../../android/utils/AndSo.js";
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
    let bundleName = "com.com.sec2023.rocketmouse.mouse";
    let soName = "libil2cpp.so";
    let android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    if (android_dlopen_ext != null) {
        Interceptor.attach(android_dlopen_ext, {
            onEnter: function (args) {
            }, onLeave: function (retval) {
                let targetSo = Process.findModuleByName(soName);
                if (targetSo) {
                    AndSo.dump_so(bundleName, soName, AndSo.DumpMethod.fwrite);
                }
            }
        });
    }
}
✄
{"version":3,"file":"AndEncrypt.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/AndEncrypt.ts"],"names":[],"mappings":"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"}
✄
import { Base } from "../base/zzBase.js";
export var AndEncrypt;
(function (AndEncrypt) {
    /*--------------------------------------  config ---------------------------------------------- */
    AndEncrypt.print_config = Base.zzHookFuncHandler.FuncPrintType.func_params;
    /*--------------------------------------  private  ---------------------------------------------- */
    //加密模式
    const MODE_ENCRYPT = 1;
    const MODE_DECRYPT = 2;
    //参数打印方式
    const PRINT_MODE_STRING = 0x000001;
    const PRINT_MODE_HEX = 0x000010;
    const PRINT_MODE_BASE64 = 0x000100;
    //获取加密模式描述
    function getModeDesc(mode) {
        let desc = '';
        if (mode == MODE_ENCRYPT) {
            desc = "init | 加密模式\n";
        }
        else if (mode == MODE_DECRYPT) {
            desc = "init | 解密模式\n";
        }
        return desc;
    }
    //获取bytes打印描述
    function getParamsPrintDesc(bytes, tip, mode) {
        let desc = '';
        if (mode & PRINT_MODE_STRING) {
            desc += tip + " | str ==> " + Base.zzStringUtils.bytesToString(bytes) + "\n";
        }
        if (mode & PRINT_MODE_HEX) {
            desc += tip + " | hex ==> " + Base.zzStringUtils.bytesToHex(bytes) + "\n";
        }
        if (mode & PRINT_MODE_BASE64) {
            desc += tip + " | base64 ==> " + Base.zzStringUtils.bytesToBase64(bytes) + "\n";
        }
        return desc;
    }
    //获取key打印描述，传入的key是java.security.Key类型
    function getKeyDesc(key) {
        let desc = '';
        let reason = '';
        if (key) {
            var bytes_key = key.getEncoded();
            if (bytes_key) {
                desc += getParamsPrintDesc(bytes_key, "秘钥key", PRINT_MODE_STRING | PRINT_MODE_HEX);
                return desc;
            }
            else {
                reason = "bytes_key is null";
            }
        }
        else {
            reason = "key is null";
        }
        desc += `秘钥key为空， reason = ${reason} \n`;
        return desc;
    }
    function log(funcName, params) {
        new Base.zzHookFuncHandler.JavaFuncHandler(AndEncrypt.print_config, funcName, function () {
            console.log(Base.zzHookFuncHandler.logTips.funcParams + params);
        }).print();
    }
    /*--------------------------------------  public  ---------------------------------------------- */
    function hook_encrypt() {
        Java.perform(function () {
            /************************** javax.crypto.spec.SecretKeySpec ***************************** */
            var secretKeySpec = Java.use('javax.crypto.spec.SecretKeySpec');
            secretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (a, b) {
                var result = this.$init(a, b);
                let funcName = "javax.crypto.spec.SecretKeySpec.init([B, String)";
                let params = '';
                params += "算法名：" + b + "\n";
                params += getParamsPrintDesc(a, "密钥", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            /************************** javax.crypto.spec.DESKeySpec ***************************** */
            var DESKeySpec = Java.use('javax.crypto.spec.DESKeySpec');
            DESKeySpec.$init.overload('[B').implementation = function (a) {
                var result = this.$init(a);
                var bytes_key_des = this.getKey();
                let funcName = "javax.crypto.spec.DESKeySpec.init([B)";
                let params = '';
                params += getParamsPrintDesc(bytes_key_des, "des密钥", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            DESKeySpec.$init.overload('[B', 'int').implementation = function (a, b) {
                var result = this.$init(a, b);
                var bytes_key_des = this.getKey();
                let funcName = "javax.crypto.spec.DESKeySpec.init([B, int)";
                let params = '';
                params += getParamsPrintDesc(bytes_key_des, "des密钥", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            /************************** javax.crypto.Mac ***************************** */
            var mac = Java.use('javax.crypto.Mac');
            mac.getInstance.overload('java.lang.String').implementation = function (a) {
                var result = this.getInstance(a);
                let funcName = "javax.crypto.Mac.getInstance(string)";
                let params = '';
                params += "算法名：" + a + "\n";
                log(funcName, params);
                return result;
            };
            mac.update.overload('[B').implementation = function (a) {
                this.update(a);
                let funcName = "javax.crypto.Mac.update(byte[] input)";
                let params = '';
                params += getParamsPrintDesc(a, "update input", PRINT_MODE_STRING | PRINT_MODE_HEX);
                log(funcName, params);
            };
            mac.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
                this.update(a, b, c);
                let funcName = "javax.crypto.Mac.update(byte[] input, int offset, int len)";
                let params = '';
                params += getParamsPrintDesc(a, "input", PRINT_MODE_STRING | PRINT_MODE_HEX);
                params += "offset = " + b + "\n";
                params += "len = " + c + "\n";
                log(funcName, params);
            };
            mac.doFinal.overload().implementation = function () {
                var result = this.doFinal();
                let funcName = "javax.crypto.Mac.doFinal()";
                let params = '';
                params += getParamsPrintDesc(result, "doFinal结果", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            mac.doFinal.overload('[B').implementation = function (a) {
                var result = this.doFinal(a);
                let funcName = "javax.crypto.Mac.doFinal(byte[] input)";
                let params = '';
                params += getParamsPrintDesc(a, "input", PRINT_MODE_STRING | PRINT_MODE_HEX);
                params += getParamsPrintDesc(result, "doFinal结果", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            /**************************  java.security.MessageDigest  ****************************** */
            var md = Java.use('java.security.MessageDigest');
            md.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
                let funcName = "java.security.MessageDigest.getInstance(String algorithm, String provider)";
                let params = '';
                params += "算法名：" + a + "\n";
                log(funcName, params);
                return this.getInstance(a, b);
            };
            md.getInstance.overload('java.lang.String').implementation = function (a) {
                let funcName = "java.security.MessageDigest.getInstance(String algorithm)";
                let params = '';
                params += "算法名：" + a + "\n";
                log(funcName, params);
                return this.getInstance(a);
            };
            md.update.overload('[B').implementation = function (a) {
                let funcName = "java.security.MessageDigest.update(byte[] input) ";
                let params = '';
                params += getParamsPrintDesc(a, "input", PRINT_MODE_STRING | PRINT_MODE_HEX);
                log(funcName, params);
                return this.update(a);
            };
            md.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
                let funcName = "java.security.MessageDigest.update(byte[] input, int offset, int len) ";
                let params = '';
                params += getParamsPrintDesc(a, "input", PRINT_MODE_STRING | PRINT_MODE_HEX);
                params += "offset = " + b + "\n";
                params += "len = " + c + "\n";
                log(funcName, params);
                return this.update(a, b, c);
            };
            md.digest.overload().implementation = function () {
                var result = this.digest();
                let funcName = "java.security.MessageDigest.digest()";
                let params = '';
                params += getParamsPrintDesc(result, "digest结果", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            md.digest.overload('[B').implementation = function (a) {
                var result = this.digest(a);
                let funcName = "java.security.MessageDigest.digest(byte[] input)";
                let params = '';
                params += getParamsPrintDesc(a, "input", PRINT_MODE_STRING | PRINT_MODE_HEX);
                params += getParamsPrintDesc(result, "digest结果", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            /************************* javax.crypto.spec.IvParameterSpec ***************** */
            var ivParameterSpec = Java.use('javax.crypto.spec.IvParameterSpec');
            ivParameterSpec.$init.overload('[B').implementation = function (a) {
                var result = this.$init(a);
                let funcName = "javax.crypto.spec.IvParameterSpec.init(byte[])";
                let params = '';
                params += getParamsPrintDesc(a, "iv向量", PRINT_MODE_STRING | PRINT_MODE_HEX);
                log(funcName, params);
                return result;
            };
            /******************************* javax.crypto.Cipher ******************************** */
            var cipher = Java.use('javax.crypto.Cipher');
            cipher.getInstance.overload('java.lang.String').implementation = function (a) {
                var result = this.getInstance(a);
                let funcName = "javax.crypto.Cipher.getInstance(String transformation) ";
                let params = '';
                params += "模式填充:" + a + "\n";
                log(funcName, params);
                return result;
            };
            cipher.init.overload('int', 'java.security.Key').implementation = function (a, b) {
                var result = this.init(a, b);
                let funcName = "javax.crypto.Cipher.init(int operation_mode, Key security_key) ";
                let params = '';
                params += getModeDesc(a);
                params += getKeyDesc(b);
                log(funcName, params);
                return result;
            };
            cipher.init.overload('int', 'java.security.cert.Certificate').implementation = function (a, b) {
                var result = this.init(a, b);
                let funcName = "javax.crypto.Cipher.init(int operation_mode, Certificate certificate) ";
                let params = '';
                params += getModeDesc(a);
                log(funcName, params);
                return result;
            };
            cipher.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec').implementation = function (a, b, c) {
                var result = this.init(a, b, c);
                let funcName = "javax.crypto.Cipher.init(int operation_mode, Key, AlgorithmParameterSpec)";
                let params = '';
                params += getModeDesc(a);
                params += getKeyDesc(b);
                log(funcName, params);
                return result;
            };
            cipher.init.overload('int', 'java.security.cert.Certificate', 'java.security.SecureRandom').implementation = function (a, b, c) {
                var result = this.init(a, b, c);
                let funcName = "javax.crypto.Cipher.init(int operation_mode, Certificate certificate, SecureRandom secureRandom)";
                let params = '';
                params += getModeDesc(a);
                log(funcName, params);
                return result;
            };
            cipher.init.overload('int', 'java.security.Key', 'java.security.SecureRandom').implementation = function (a, b, c) {
                var result = this.init(a, b, c);
                let funcName = "javax.crypto.Cipher.init(int operation_mode, Key security_key, SecureRandom secureRandom) ";
                let params = '';
                params += getModeDesc(a);
                params += getKeyDesc(b);
                log(funcName, params);
                return result;
            };
            cipher.init.overload('int', 'java.security.Key', 'java.security.AlgorithmParameters').implementation = function (a, b, c) {
                var result = this.init(a, b, c);
                let funcName = "javax.crypto.Cipher.init(int operation_mode, Key security_key, AlgorithmParameters algorithmParameters) ";
                let params = '';
                params += getModeDesc(a);
                params += getKeyDesc(b);
                log(funcName, params);
                return result;
            };
            cipher.init.overload('int', 'java.security.Key', 'java.security.AlgorithmParameters', 'java.security.SecureRandom').implementation = function (a, b, c, d) {
                var result = this.init(a, b, c, d);
                let funcName = "javax.crypto.Cipher.init(int operation_mode, Key security_key, AlgorithmParameters, SecureRandom) ";
                let params = '';
                params += getModeDesc(a);
                params += getKeyDesc(b);
                log(funcName, params);
                return result;
            };
            cipher.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec', 'java.security.SecureRandom').implementation = function (a, b, c, d) {
                var result = this.init(a, b, c, d);
                let funcName = "javax.crypto.Cipher.init(int operation_mode, Key security_key, AlgorithmParameterSpec, SecureRandom) ";
                let params = '';
                params += getModeDesc(a);
                params += getKeyDesc(b);
                log(funcName, params);
                return result;
            };
            cipher.update.overload('[B').implementation = function (a) {
                var result = this.update(a);
                let funcName = "javax.crypto.Cipher.update(byte[] input) ";
                let params = '';
                params += getParamsPrintDesc(a, "input", PRINT_MODE_STRING | PRINT_MODE_HEX);
                log(funcName, params);
                return result;
            };
            cipher.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
                var result = this.update(a, b, c);
                let funcName = "javax.crypto.Cipher.update(byte[] input, int inputOffset, int inputLen)";
                let params = '';
                params += getParamsPrintDesc(a, "input", PRINT_MODE_STRING | PRINT_MODE_HEX);
                params += "offset = " + b + "\n";
                params += "len = " + c + "\n";
                log(funcName, params);
                return result;
            };
            cipher.doFinal.overload().implementation = function () {
                var result = this.doFinal();
                let funcName = "javax.crypto.Cipher.doFinal()";
                let params = '';
                params += getParamsPrintDesc(result, "doFinal结果", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            cipher.doFinal.overload('[B').implementation = function (a) {
                var result = this.doFinal(a);
                let funcName = "javax.crypto.Cipher.doFinal(byte[] input)";
                let params = '';
                params += getParamsPrintDesc(a, "input", PRINT_MODE_STRING | PRINT_MODE_HEX);
                params += getParamsPrintDesc(result, "doFinal结果", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            /***************************** java.security.spec.X509EncodedKeySpec ********************************* */
            var x509EncodedKeySpec = Java.use('java.security.spec.X509EncodedKeySpec');
            x509EncodedKeySpec.$init.overload('[B').implementation = function (a) {
                var result = this.$init(a);
                let funcName = "java.security.spec.X509EncodedKeySpec.init(byte[] encoded_key)";
                let params = '';
                params += getParamsPrintDesc(a, "RSA密钥", PRINT_MODE_STRING | PRINT_MODE_HEX | PRINT_MODE_BASE64);
                log(funcName, params);
                return result;
            };
            /********************************** java.security.spec.RSAPublicKeySpec ************************************ */
            var rSAPublicKeySpec = Java.use('java.security.spec.RSAPublicKeySpec');
            rSAPublicKeySpec.$init.overload('java.math.BigInteger', 'java.math.BigInteger').implementation = function (a, b) {
                var result = this.$init(a, b);
                let funcName = "java.security.spec.X509EncodedKeySpec.init(BigInteger modulus, BigInteger public_exponent) ";
                let params = '';
                params += "RSA密钥 modulus:" + a.toString(16) + "\n";
                params += "RSA密钥 public_exponent:" + b.toString(16) + "\n";
                log(funcName, params);
                return result;
            };
            /***********************************  java.security.KeyPairGenerator ********************************* */
            var KeyPairGenerator = Java.use('java.security.KeyPairGenerator');
            KeyPairGenerator.generateKeyPair.implementation = function () {
                var result = this.generateKeyPair();
                var bytes_private = result.getPrivate().getEncoded();
                var bytes_public = result.getPublic().getEncoded();
                let funcName = "java.security.KeyPairGenerator.generateKeyPair() ";
                let params = '';
                params += getParamsPrintDesc(bytes_public, "公钥", PRINT_MODE_STRING | PRINT_MODE_HEX);
                params += getParamsPrintDesc(bytes_private, "私钥", PRINT_MODE_STRING | PRINT_MODE_HEX);
                log(funcName, params);
                return result;
            };
            KeyPairGenerator.genKeyPair.implementation = function () {
                var result = this.genKeyPair();
                var bytes_private = result.getPrivate().getEncoded();
                var bytes_public = result.getPublic().getEncoded();
                let funcName = "java.security.KeyPairGenerator.genKeyPair() ";
                let params = '';
                params += getParamsPrintDesc(bytes_public, "公钥", PRINT_MODE_STRING | PRINT_MODE_HEX);
                params += getParamsPrintDesc(bytes_private, "私钥", PRINT_MODE_STRING | PRINT_MODE_HEX);
                log(funcName, params);
                return result;
            };
            var Signature = Java.use('java.security.Signature');
            {
                let overloads_update = Signature.update.overloads;
                for (const overload of overloads_update) {
                    overload.implementation = function () {
                        let algorithm = this.getAlgorithm();
                        this.update(...arguments);
                        let funcName = `java.security.Signature ${overload} `;
                        let params = '';
                        params += `algorithm = ${algorithm}\n`;
                        params += getParamsPrintDesc(arguments[0], "bytes", PRINT_MODE_STRING | PRINT_MODE_HEX);
                        log(funcName, params);
                    };
                }
                let overloads_sign = Signature.sign.overloads;
                for (const overload of overloads_sign) {
                    overload.implementation = function () {
                        const algorithm = this.getAlgorithm();
                        let result = this.sign(...arguments);
                        let funcName = `java.security.Signature ${overload} `;
                        let params = '';
                        params += `algorithm = ${algorithm}\n`;
                        params += getParamsPrintDesc(result, "result_sign", PRINT_MODE_STRING | PRINT_MODE_HEX);
                        log(funcName, params);
                    };
                }
            }
        });
    }
    AndEncrypt.hook_encrypt = hook_encrypt;
})(AndEncrypt || (AndEncrypt = {}));
✄
{"version":3,"file":"AntiJavaDebug.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/AntiJavaDebug.ts"],"names":[],"mappings":"AAEA,MAAM,KAAW,aAAa,CA2E7B;AA3ED,WAAiB,aAAa;IAE1B,MAAM,eAAe,GAAG,qBAAqB,CAAA;IAE7C,SAAgB,UAAU;QACtB,iBAAiB,EAAE,CAAC;QACpB,wBAAwB,EAAE,CAAC;QAC3B,uBAAuB,EAAE,CAAC;QAC1B,aAAa,EAAE,CAAC;QAChB,WAAW,EAAE,CAAC;IAClB,CAAC;IANe,wBAAU,aAMzB,CAAA;IAED,SAAS,iBAAiB;QAEtB,IAAI,CAAC,OAAO,CAAC;YACT,IAAI,KAAK,GAAG,IAAI,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;YACzC,KAAK,CAAC,YAAY,CAAC,cAAc,GAAG;gBAChC,OAAO,CAAC,GAAG,CAAC,eAAe,GAAG,6BAA6B,CAAC,CAAC;gBAC7D,OAAO,KAAK,CAAC;YACjB,CAAC,CAAC;QACN,CAAC,CAAC,CAAC;IACP,CAAC;IAED,SAAS,wBAAwB;QAE7B,IAAI,CAAC,OAAO,CAAC;YACT,IAAI,KAAK,GAAG,IAAI,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;YACzC,KAAK,CAAC,mBAAmB,CAAC,cAAc,GAAG;gBACvC,OAAO,CAAC,GAAG,CAAC,eAAe,GAAG,oCAAoC,CAAC,CAAC;gBACpE,OAAO,KAAK,CAAC;YACjB,CAAC,CAAC;QACN,CAAC,CAAC,CAAC;IACP,CAAC;IAED,SAAS,uBAAuB;QAC5B,IAAI,CAAC,OAAO,CAAC;YACT,IAAI,MAAM,GAAG,IAAI,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;YAC1C,MAAM,CAAC,WAAW,CAAC,QAAQ,CAAC,kBAAkB,CAAC,CAAC,cAAc,GAAG,UAAU,IAAY;gBACnF,OAAO,CAAC,GAAG,CAAC,eAAe,GAAG,yCAAyC,GAAG,IAAI,CAAC,CAAC;gBAChF,IAAI,IAAI,KAAK,WAAW,EAAE;oBACtB,OAAO,GAAG,CAAC,CAAC,sBAAsB;iBACrC;qBAAM,IAAI,IAAI,KAAK,eAAe,EAAE;oBACjC,OAAO,GAAG,CAAC,CAAC,0BAA0B;iBACzC;gBACD,OAAO,IAAI,CAAC,WAAW,CAAC,IAAI,CAAC,CAAC;YAClC,CAAC,CAAC;QACN,CAAC,CAAC,CAAC;IACP,CAAC;IAID,SAAS,WAAW;IAEpB,CAAC;IAED,SAAS,aAAa;QAElB,6BAA6B;QAC7B,gDAAgD;QAChD,2CAA2C;QAC3C,yCAAyC;QACzC,mCAAmC;QACnC,qCAAqC;QACrC,0CAA0C;QAC1C,qCAAqC;QACrC,sCAAsC;QACtC,iCAAiC;QACjC,sCAAsC;QACtC,sCAAsC;QACtC,sCAAsC;QACtC,0CAA0C;QAC1C,MAAM;IACV,CAAC;AAGL,CAAC,EA3EgB,aAAa,KAAb,aAAa,QA2E7B"}
✄
export var AntiJavaDebug;
(function (AntiJavaDebug) {
    const antiDebugLogTip = "anti_java_debug ==>";
    function anti_debug() {
        anti_isDebuggable();
        anti_isDebuggerConnected();
        anti_system_getProperty();
        anti_emulator();
        anti_strace();
    }
    AntiJavaDebug.anti_debug = anti_debug;
    function anti_isDebuggable() {
        Java.perform(function () {
            var Build = Java.use("android.os.Build");
            Build.isDebuggable.implementation = function () {
                console.log(antiDebugLogTip + "Build.isDebuggable() called");
                return false;
            };
        });
    }
    function anti_isDebuggerConnected() {
        Java.perform(function () {
            var Debug = Java.use("android.os.Debug");
            Debug.isDebuggerConnected.implementation = function () {
                console.log(antiDebugLogTip + "Debug.isDebuggerConnected() called");
                return false;
            };
        });
    }
    function anti_system_getProperty() {
        Java.perform(function () {
            var System = Java.use('java.lang.System');
            System.getProperty.overload('java.lang.String').implementation = function (name) {
                console.log(antiDebugLogTip + 'System.getProperty() called with name: ' + name);
                if (name === 'ro.secure') {
                    return '1'; // 1 for 安全, 0 for 不安全
                }
                else if (name === 'ro.debuggable') {
                    return '0'; // 0 for 非调试模式, 1 for 调试模式
                }
                return this.getProperty(name);
            };
        });
    }
    function anti_strace() {
    }
    function anti_emulator() {
        // Java.perform(function () {
        //     var Build = Java.use("android.os.Build");
        //     Build.FINGERPRINT.value = "generic";
        //     Build.HARDWARE.value = "goldfish";
        //     Build.PRODUCT.value = "sdk";
        //     Build.BOARD.value = "unknown";
        //     Build.BOOTLOADER.value = "unknown";
        //     Build.BRAND.value = "generic";
        //     Build.DEVICE.value = "generic";
        //     Build.MODEL.value = "sdk";
        //     Build.SERIAL.value = "unknown";
        //     Build.TAGS.value = "test-keys";
        //     Build.TYPE.value = "userdebug";
        //     Build.USER.value = "android-build";
        // });
    }
})(AntiJavaDebug || (AntiJavaDebug = {}));
✄
{"version":3,"file":"AntiNativeDebug.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/AntiNativeDebug.ts"],"names":[],"mappings":"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"}
✄
import { Base } from "../base/zzBase.js";
export var AntiNativeDebug;
(function (AntiNativeDebug) {
    AntiNativeDebug.print_config = Base.zzHookFuncHandler.FuncPrintType.func_callstacks;
    /************************** private ************************************ */
    const antiDebugLogTip = "anti_native_debug ==>";
    function log(context, funcName, params) {
        console.log(antiDebugLogTip);
        new Base.zzHookFuncHandler.NativeFuncHandler(AntiNativeDebug.print_config, context, funcName, function () {
            console.log(Base.zzHookFuncHandler.logTips.funcParams + params);
        }).print();
    }
    /************************** public ************************************ */
    function anti_debug() {
        anti_dlsym();
        anti_fork();
        anti_ptrace();
        anti_syscall();
        anti_fgets();
        anti_app_exit();
    }
    AntiNativeDebug.anti_debug = anti_debug;
    function anti_app_exit() {
        anti_abort();
        anti_exit();
        anti_kill();
        anti_raise();
    }
    AntiNativeDebug.anti_app_exit = anti_app_exit;
    function anti_dlsym() {
        let funcPtr = Base.zzNativeFunc.getFuncPtr("dlsym");
        let origin_func = new NativeFunction(funcPtr, 'pointer', ['pointer', 'pointer']);
        Interceptor.replace(funcPtr, new NativeCallback(function (handle, name) {
            let funcName = name.readCString();
            console.log(antiDebugLogTip + `dlsym(${funcName}) called\n`);
            if (funcName == "pthread_create") {
                log(this.context, 'dlsym', 'funcName: pthread_create');
            }
            return origin_func(handle, name);
        }, 'pointer', ['pointer', 'pointer']));
    }
    AntiNativeDebug.anti_dlsym = anti_dlsym;
    function anti_ptrace() {
        //long ptrace(enum __ptrace_request op, pid_t pid, void *addr, void *data);
        let funcPtr = Base.zzNativeFunc.getFuncPtr("ptrace");
        let origin_func = new NativeFunction(funcPtr, 'long', ['int', "int", 'pointer', 'pointer']);
        Interceptor.replace(funcPtr, new NativeCallback(function (request, pid, addr, data) {
            //PT_DENY_ATTACH 31
            if (request == 31) {
                log(this.context, 'ptrace', 'request: 31');
                return 0;
            }
            return origin_func(request, pid, addr, data);
        }, 'long', ['int', "int", 'pointer', 'pointer']));
    }
    AntiNativeDebug.anti_ptrace = anti_ptrace;
    function anti_syscall() {
        //long syscall(long number, ...);
        let funcPtr = Base.zzNativeFunc.getFuncPtr("syscall");
        let origin_func = new NativeFunction(funcPtr, 'long', ['long', 'pointer']);
        Interceptor.replace(funcPtr, new NativeCallback(function (code, args) {
            //ptrace 26
            if (code == 26) {
                let arg0 = args[0];
                if (arg0 == 31) {
                    log(this.context, 'syscall', 'syacallNumber: 31(ptrace)');
                    return 0;
                }
            }
            return origin_func(code, args);
        }, 'long', ['long', 'pointer']));
    }
    AntiNativeDebug.anti_syscall = anti_syscall;
    function anti_fork() {
        // pid_t fork(void);
        let funcPtr = Base.zzNativeFunc.getFuncPtr("fork");
        let origin_func = new NativeFunction(funcPtr, 'int', []);
        Base.zzNativeFunc.replaceFunc('fork', new NativeCallback(function () {
            log(this.context, 'fork', null);
            return origin_func();
        }, 'int', []));
    }
    AntiNativeDebug.anti_fork = anti_fork;
    function anti_abort() {
        //void abort(void);
        Base.zzNativeFunc.replaceFunc('abort', new NativeCallback(function () {
            log(this.context, 'abort', null);
            return 0;
        }, 'void', []));
    }
    AntiNativeDebug.anti_abort = anti_abort;
    function anti_exit() {
        //void _exit(int status);
        Base.zzNativeFunc.replaceFunc('_exit', new NativeCallback(function () {
            log(this.context, '_exit', null);
        }, 'void', ['int']));
        // //void _Exit(int status);
        // Base.zzNativeFunc.replaceFunc('_Exit', new NativeCallback(function () {
        //     print_callstacks('_Exit', this.context);
        // }, 'void', ['int']));
        //void exit(int status);
        Base.zzNativeFunc.replaceFunc('exit', new NativeCallback(function () {
            log(this.context, 'exit', null);
        }, 'void', ['int']));
        //void exit_group(int status);
        Base.zzNativeFunc.replaceFunc('exit_group', new NativeCallback(function () {
            log(this.context, 'exit_group', null);
        }, 'void', ['int']));
    }
    AntiNativeDebug.anti_exit = anti_exit;
    function anti_kill() {
        //int kill(pid_t pid, int sig);
        Base.zzNativeFunc.replaceFunc('kill', new NativeCallback(function () {
            log(this.context, 'kill', null);
            return 0;
        }, 'int', ['int', 'int']));
    }
    AntiNativeDebug.anti_kill = anti_kill;
    function anti_raise() {
        // int raise(int sig);
        Base.zzNativeFunc.replaceFunc('raise', new NativeCallback(function () {
            log(this.context, 'raise', null);
            return 0;
        }, 'int', ['int']));
    }
    AntiNativeDebug.anti_raise = anti_raise;
    /**
     * @state_name:
     * cat /proc/xxx/stat ==> ...(<state_name>) S...
     * cat /proc/xxx/status ==> ...(<state_name>) S...
     *
     * anti fgets function include :
     * status->TracerPid, SigBlk, S (sleeping)
     * State->(package) S
     * wchan->SyS_epoll_wait
     */
    function anti_fgets() {
        //char *fgets(char *restrict s, int n, FILE *restrict stream);
        var funcPtr = Base.zzNativeFunc.getFuncPtr("fgets");
        var origin_fgets = new NativeFunction(funcPtr, 'pointer', ['pointer', 'int', 'pointer']);
        Interceptor.replace(funcPtr, new NativeCallback(function (buffer, size, fp) {
            var retval = origin_fgets(buffer, size, fp);
            var bufstr = buffer.readCString();
            var logs = '';
            if (null != bufstr) {
                if (bufstr.indexOf("TracerPid:") > -1) {
                    buffer.writeUtf8String("TracerPid:\t0");
                    logs = "fgets(TracerPid)";
                }
                //State:	S (sleeping)
                else if (bufstr.indexOf("State:\tt (tracing stop)") > -1) {
                    buffer.writeUtf8String("State:\tS (sleeping)");
                    logs = "fgets(State)";
                }
                // ptrace_stop
                else if (bufstr.indexOf("ptrace_stop") > -1) {
                    buffer.writeUtf8String("sys_epoll_wait");
                    logs = "fgets(ptrace_stop)";
                }
                //(sankuai.meituan) t
                else if (bufstr.indexOf(") t") > -1) {
                    buffer.writeUtf8String(bufstr.replace(") t", ") S"));
                    logs = "fgets(stat_t)";
                }
                // SigBlk
                else if (bufstr.indexOf('SigBlk:') > -1) {
                    buffer.writeUtf8String('SigBlk:\t0000000000001204');
                    logs = "fgets(SigBlk)";
                }
                // frida
                else if (bufstr.indexOf('frida') > -1) {
                    buffer.writeUtf8String("zz");
                    logs = "fgets(frida)";
                }
                if (logs.length > 0) {
                    console.log(logs);
                    log(this.context, 'fgets', logs);
                }
            }
            return retval;
        }, 'pointer', ['pointer', 'int', 'pointer']));
    }
    AntiNativeDebug.anti_fgets = anti_fgets;
    function watch_dlsym(targetFuncName, callBack) {
        let funcPtr = Base.zzNativeFunc.getFuncPtr("dlsym");
        let origin_func = new NativeFunction(funcPtr, 'pointer', ['pointer', 'pointer']);
        Interceptor.replace(funcPtr, new NativeCallback(function (handle, name) {
            let curFuncName = name.readCString();
            let result = origin_func(handle, name);
            console.log(antiDebugLogTip + `dlsym(${curFuncName}) called\n`);
            if (curFuncName == targetFuncName) {
                console.log("--------------------------------- watch_dlsym ---------------------------------");
                console.log("func_addr = 0x" + result.toString(16));
                callBack(result);
            }
            return result;
        }, 'pointer', ['pointer', 'pointer']));
    }
    AntiNativeDebug.watch_dlsym = watch_dlsym;
})(AntiNativeDebug || (AntiNativeDebug = {}));
✄
{"version":3,"file":"AntiMSA.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/antiFrida/msaoaidsec/AntiMSA.ts"],"names":[],"mappings":"AACA,OAAO,EAAE,mBAAmB,EAAE,MAAM,0BAA0B,CAAC;AAC/D,OAAO,EAAE,qBAAqB,EAAE,MAAM,4BAA4B,CAAC;AACnE,OAAO,EAAE,0BAA0B,EAAE,MAAM,iCAAiC,CAAC;AAC7E,OAAO,EAAE,qBAAqB,EAAE,MAAM,4BAA4B,CAAC;AAGnE;;;;;;;;;;GAUG;AAEH,MAAM,KAAW,OAAO,CAOvB;AAPD,WAAiB,OAAO;IAET,uBAAe,GAAG,mBAAmB,CAAA;IACrC,yBAAiB,GAAG,qBAAqB,CAAA;IACzC,8BAAsB,GAAG,0BAA0B,CAAA;IACnD,yBAAiB,GAAG,qBAAqB,CAAA;AAExD,CAAC,EAPgB,OAAO,KAAP,OAAO,QAOvB"}
✄
import { msa_nop_thread_func } from "./msa_nop_thread_func.js";
import { msa_nop_thread_funcV2 } from "./msa_nop_thread_funcV2.js";
import { msa_replace_pthread_create } from "./msa_replace_pthread_create.js";
import { msa_unopen_msaoaidsec } from "./msa_unopen_msaoaidsec.js";
/**
 *
测试样本：(msaoaidsec版本：v8.83)
xhs, aiqiyi, bilibili, xiecheng;  anjuke是32位的so, 暂不考虑，原理一致。

如何查看msaoaidsec版本：
IDA打开so库，定位到JNI_Onload函数，找到下面代码：
_android_log_write(4, "NagaLinker", "v8.83");

 *
 */
export var AntiMSA;
(function (AntiMSA) {
    AntiMSA.nop_thread_func = msa_nop_thread_func;
    AntiMSA.nop_thread_funcV2 = msa_nop_thread_funcV2;
    AntiMSA.replace_pthread_create = msa_replace_pthread_create;
    AntiMSA.unopen_msaoaidsec = msa_unopen_msaoaidsec;
})(AntiMSA || (AntiMSA = {}));
✄
{"version":3,"file":"msa_nop_thread_func.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/antiFrida/msaoaidsec/msa_nop_thread_func.ts"],"names":[],"mappings":"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"}
✄
/**
 * 参考文档：https://bbs.kanxue.com/thread-277034.htm

原理：
第一步：hook dlopen函数，当加载libmsaoaidsec.so时，调用locate_init()函数，即hook __system_property_get函数。
第二步：调用__system_property_get函数获取ro.build.version.sdk属性时：
    1.定位检测线程：调用hook_pthread_create()函数，对pthread_create函数进行hook，并打印线程函数地址。
    2.bypass: 调用bypass()函数，该函数中nop或者patch掉三个地址，绕过检测。

表现：
哔哩哔哩  tv.danmaku.bili（通过）
小红书    com.xingin.xhs （通过）
爱奇艺    com.qiyi.video  （通过）
携程旅行  ctrip.android.view （通过）

 */
export function msa_nop_thread_func() {
    let targetSoName = 'libmsaoaidsec.so';
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {
            var pathPtr = args[0];
            if (pathPtr !== undefined && pathPtr != null) {
                var path = pathPtr.readCString();
                console.log("[LOAD]", path);
                if (path.indexOf(targetSoName) >= 0) {
                    locate_init();
                }
            }
        }
    });
    //定位检测
    var flag = 0;
    function locate_init() {
        //hook _system_property_get("ro.build.version.sdk", v1);
        Interceptor.attach(Module.findExportByName(null, "__system_property_get"), {
            onEnter: function (args) {
                var name = args[0];
                if (name != null) {
                    let nameStr = name.readCString();
                    if (nameStr.indexOf("ro.build.version.sdk") >= 0) {
                        if (flag == 0) {
                            flag = 1;
                            //1.定位线程函数
                            //hook_pthread_create()
                            //2.bypass
                            bypass();
                        }
                    }
                }
            }
        });
    }
    //定位线程函数
    function hook_pthread_create() {
        var base_addr = Process.findModuleByName(targetSoName).base;
        console.log(targetSoName + " --- " + base_addr);
        Interceptor.attach(Module.findExportByName("libc.so", "pthread_create"), {
            onEnter(args) {
                let func_addr = args[2];
                console.log("The thread function address is " + func_addr + ` [${func_addr.sub(base_addr)}]`);
            }
        });
    }
    function nop64(addr) {
        Memory.patchCode(addr, 4, code => {
            const cw = new Arm64Writer(code, { pc: addr });
            cw.putNop(); //ARM64只需执行一次putNop()即可。
            cw.flush();
        });
    }
    function bypass() {
        let module = Process.findModuleByName("libmsaoaidsec.so");
        // hook_pthread_create打印结果：
        // libmsaoaidsec.so --- 0x7401b53000
        // The thread function address is 0x751d86e2bc [0x11bd1b2bc]
        // The thread function address is 0x751d86e2bc [0x11bd1b2bc]
        // The thread function address is 0x7401b6f544 [0x1c544]
        // The thread function address is 0x7401b6e8d4 [0x1b8d4]
        // The thread function address is 0x7401b79e5c [0x26e5c]
        // 注意：
        // 下面NOP的这三个地址是调用pthread_create函数创建线程时的那条指令的地址，而不是那个函数的基地址，例如：
        // LOAD:000000000001D2F0     ADRP            X2, #loc_1C544@PAGE
        // LOAD:000000000001D2F4     ADD             X2, X2, #loc_1C544@PAGEOFF
        // LOAD:000000000001D2F8     MOV             X0, SP
        // LOAD:000000000001D2FC     MOV             X1, XZR
        // LOAD:000000000001D300     MOV             X3, X21
        // LOAD:000000000001D304     BLR             X19               <------  该地址才是我们要nop的地址
        nop64(module.base.add(0x1D304));
        nop64(module.base.add(0x1BE58));
        nop64(module.base.add(0x27718));
    }
}
✄
{"version":3,"file":"msa_nop_thread_funcV2.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/antiFrida/msaoaidsec/msa_nop_thread_funcV2.ts"],"names":[],"mappings":"AAEA;;;;;;;;;;;;;;;GAeG;AAEH,MAAM,UAAU,qBAAqB;IAEjC,IAAI,YAAY,GAAG,kBAAkB,CAAA;IACrC,WAAW,CAAC,MAAM,CAAC,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,oBAAoB,CAAC,EAAE;QACpE,OAAO,EAAE,UAAU,IAAI;YAEnB,IAAI,OAAO,GAAG,IAAI,CAAC,CAAC,CAAC,CAAC;YACtB,IAAI,OAAO,KAAK,SAAS,IAAI,OAAO,IAAI,IAAI,EAAE;gBAC1C,IAAI,IAAI,GAAG,OAAO,CAAC,WAAW,EAAE,CAAC;gBACjC,OAAO,CAAC,GAAG,CAAC,QAAQ,EAAE,IAAI,CAAC,CAAA;gBAC3B,IAAI,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,IAAI,CAAC,EAAE;oBACjC,WAAW,EAAE,CAAA;iBAChB;aACJ;QACL,CAAC;KACJ,CAAC,CAAC;IAEH,IAAI,IAAI,GAAG,CAAC,CAAA;IACZ,SAAS,WAAW;QAChB,WAAW,CAAC,MAAM,CAAC,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,eAAe,CAAC,EAAE;YAC/D,OAAO,EAAE,UAAU,IAAI;gBACnB,IAAI,IAAI,IAAI,CAAC,EAAE;oBACX,IAAI,GAAG,CAAC,CAAA;oBAER,MAAM;oBACN,uBAAuB;oBAEvB,UAAU;oBACV,MAAM,EAAE,CAAA;iBACX;YACL,CAAC;SACJ,CAAC,CAAC;IACP,CAAC;IAGD,SAAS,mBAAmB;QACxB,IAAI,SAAS,GAAG,OAAO,CAAC,gBAAgB,CAAC,YAAY,CAAC,CAAC,IAAI,CAAC;QAC5D,OAAO,CAAC,GAAG,CAAC,YAAY,GAAG,OAAO,GAAG,SAAS,CAAC,CAAA;QAC/C,WAAW,CAAC,MAAM,CAAC,MAAM,CAAC,gBAAgB,CAAC,SAAS,EAAE,gBAAgB,CAAC,EAAE;YACrE,OAAO,CAAC,IAAI;gBACR,IAAI,SAAS,GAAG,IAAI,CAAC,CAAC,CAAC,CAAA;gBACvB,OAAO,CAAC,GAAG,CAAC,iCAAiC,GAAG,SAAS,GAAG,KAAK,SAAS,CAAC,GAAG,CAAC,SAAS,CAAC,GAAG,CAAC,CAAA;YACjG,CAAC;SACJ,CAAC,CAAA;IACN,CAAC;IAGD,SAAS,WAAW,CAAC,IAAmB;QACpC,MAAM,CAAC,SAAS,CAAC,IAAI,EAAE,CAAC,EAAE,IAAI,CAAC,EAAE;YAC7B,MAAM,EAAE,GAAG,IAAI,WAAW,CAAC,IAAI,EAAE,EAAE,EAAE,EAAE,IAAI,EAAE,CAAC,CAAC;YAC/C,EAAE,CAAC,MAAM,EAAE,CAAC;YACZ,EAAE,CAAC,KAAK,EAAE,CAAC;QACf,CAAC,CAAC,CAAC;IACP,CAAC;IAED,SAAS,KAAK,CAAC,IAAmB;QAC9B,MAAM,CAAC,SAAS,CAAC,IAAI,EAAE,CAAC,EAAE,IAAI,CAAC,EAAE;YAC7B,MAAM,EAAE,GAAG,IAAI,WAAW,CAAC,IAAI,EAAE,EAAE,EAAE,EAAE,IAAI,EAAE,CAAC,CAAC;YAC/C,EAAE,CAAC,MAAM,EAAE,CAAC;YACZ,EAAE,CAAC,KAAK,EAAE,CAAC;QACf,CAAC,CAAC,CAAC;IACP,CAAC;IAED,SAAS,MAAM;QAEX,IAAI,MAAM,GAAG,OAAO,CAAC,gBAAgB,CAAC,YAAY,CAAC,CAAA;QAEnD,2BAA2B;QAC3B,oCAAoC;QACpC,4DAA4D;QAC5D,4DAA4D;QAC5D,wDAAwD;QACxD,wDAAwD;QACxD,wDAAwD;QAGxD,wDAAwD;QACxD,oCAAoC;QACpC,oCAAoC;QACpC,oCAAoC;QAEpC,gCAAgC;QAChC,oCAAoC;QACpC,oCAAoC;QACpC,oCAAoC;QAGpC,iDAAiD;QACjD,8DAA8D;QAC9D,gEAAgE;QAChE,uEAAuE;QACvE,mDAAmD;QACnD,oDAAoD;QACpD,oDAAoD;QACpD,sFAAsF;QACtF,KAAK,CAAC,MAAM,CAAC,IAAI,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC,CAAA;QAC/B,KAAK,CAAC,MAAM,CAAC,IAAI,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC,CAAA;QAC/B,KAAK,CAAC,MAAM,CAAC,IAAI,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC,CAAA;IAEnC,CAAC;AAEL,CAAC"}
✄
/**
 * 参考文档：https://bbs.kanxue.com/thread-277034.htm
 
原理：
第一步：hook dlopen函数，当加载libmsaoaidsec.so时，调用locate_init()函数，hook __sprintf_chk函数。
第二步：调用__sprintf_chk函数时：
    1.定位检测线程：调用hook_pthread_create()函数，对pthread_create函数进行hook，并打印线程函数地址。
    2.bypass: 调用bypass()函数，该函数中nop或者patch掉三个地址，绕过检测。

表现：
哔哩哔哩  tv.danmaku.bili（通过）
小红书    com.xingin.xhs （通过）
爱奇艺    com.qiyi.video  （通过）
携程旅行  ctrip.android.view （通过）

 */
export function msa_nop_thread_funcV2() {
    let targetSoName = 'libmsaoaidsec.so';
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {
            var pathPtr = args[0];
            if (pathPtr !== undefined && pathPtr != null) {
                var path = pathPtr.readCString();
                console.log("[LOAD]", path);
                if (path.indexOf(targetSoName) >= 0) {
                    locate_init();
                }
            }
        }
    });
    var flag = 0;
    function locate_init() {
        Interceptor.attach(Module.findExportByName(null, "__sprintf_chk"), {
            onEnter: function (args) {
                if (flag == 0) {
                    flag = 1;
                    //1.定位
                    //hook_pthread_create()
                    //2.bypass
                    bypass();
                }
            }
        });
    }
    function hook_pthread_create() {
        var base_addr = Process.findModuleByName(targetSoName).base;
        console.log(targetSoName + " --- " + base_addr);
        Interceptor.attach(Module.findExportByName("libc.so", "pthread_create"), {
            onEnter(args) {
                let func_addr = args[2];
                console.log("The thread function address is " + func_addr + ` [${func_addr.sub(base_addr)}]`);
            }
        });
    }
    function patchFunc64(addr) {
        Memory.patchCode(addr, 4, code => {
            const cw = new Arm64Writer(code, { pc: addr });
            cw.putRet();
            cw.flush();
        });
    }
    function nop64(addr) {
        Memory.patchCode(addr, 4, code => {
            const cw = new Arm64Writer(code, { pc: addr });
            cw.putNop();
            cw.flush();
        });
    }
    function bypass() {
        let module = Process.findModuleByName(targetSoName);
        // hook_pthread_create日志打印：
        // libmsaoaidsec.so --- 0x7401b53000
        // The thread function address is 0x751d86e2bc [0x11bd1b2bc]
        // The thread function address is 0x751d86e2bc [0x11bd1b2bc]
        // The thread function address is 0x7401b6f544 [0x1c544]
        // The thread function address is 0x7401b6e8d4 [0x1b8d4]
        // The thread function address is 0x7401b79e5c [0x26e5c]
        // 方式1：直接将三个线程函数(0x1c544, 0x1b8d4, 0x26e5c)的前4个字节改为ret指令
        // patch64(module.base.add(0x1c544))
        // patch64(module.base.add(0x1b8d4))
        // patch64(module.base.add(0x26e5c))
        //方式2：直接将创建线程的三个父函数的前4个字节改为ret指令
        // patch64(module.base.add(0x1CEF8))
        // patch64(module.base.add(0x1B924))
        // patch64(module.base.add(0x2701C))
        // 方式3：将创建线程的父函数调用pthread_create函数创建线程时的那条指令进行NOP
        // 下面NOP的这三个地址是调用pthread_create函数创建线程时的那条指令的地址，而不是那个函数的基地址，例如：
        // LOAD:000000000001D2F0     ADRP            X2, #loc_1C544@PAGE
        // LOAD:000000000001D2F4     ADD             X2, X2, #loc_1C544@PAGEOFF
        // LOAD:000000000001D2F8     MOV             X0, SP
        // LOAD:000000000001D2FC     MOV             X1, XZR
        // LOAD:000000000001D300     MOV             X3, X21
        // LOAD:000000000001D304     BLR             X19               <------  该地址才是我们要nop的地址
        nop64(module.base.add(0x1D304));
        nop64(module.base.add(0x1BE58));
        nop64(module.base.add(0x27718));
    }
}
✄
{"version":3,"file":"msa_replace_pthread_create.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/antiFrida/msaoaidsec/msa_replace_pthread_create.ts"],"names":[],"mappings":"AACA;;;;;;;;;;;;;;;;;;;;;;GAsBG;AAEH,MAAM,UAAU,0BAA0B;IAEtC,IAAI,YAAY,GAAG,kBAAkB,CAAA;IACrC,IAAI,mBAAmB,GAAG,0BAA0B,EAAE,CAAA;IAEtD,WAAW,CAAC,MAAM,CAAC,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,oBAAoB,CAAC,EAAE;QACpE,OAAO,EAAE,UAAU,IAAI;YAEnB,IAAI,OAAO,GAAG,IAAI,CAAC,CAAC,CAAC,CAAC;YACtB,IAAI,OAAO,KAAK,SAAS,IAAI,OAAO,IAAI,IAAI,EAAE;gBAC1C,IAAI,IAAI,GAAG,OAAO,CAAC,WAAW,EAAE,CAAC;gBACjC,OAAO,CAAC,GAAG,CAAC,QAAQ,EAAE,IAAI,CAAC,CAAA;gBAC3B,IAAI,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,IAAI,CAAC,EAAE;oBACjC,UAAU,EAAE,CAAA;iBACf;aACJ;QACL,CAAC;KACJ,CAAC,CAAC;IAOH,IAAI,KAAK,GAAG,CAAC,CAAA;IACb,SAAS,UAAU;QAEf,OAAO,CAAC,GAAG,CAAC,uBAAuB,CAAC,CAAA;QACpC,IAAI,WAAW,GAAG,WAAW,CAAC,MAAM,CAAC,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,OAAO,CAAC,EACvE;YACI,OAAO,EAAE,UAAU,IAAI;gBACnB,IAAI,QAAQ,GAAG,IAAI,CAAC,CAAC,CAAC,CAAC,WAAW,EAAE,CAAA;gBACpC,OAAO,CAAC,GAAG,CAAC,SAAS,EAAE,QAAQ,CAAC,CAAA;gBAChC,IAAI,QAAQ,IAAI,gBAAgB,EAAE;oBAC9B,KAAK,EAAE,CAAA;iBACV;YACL,CAAC;YACD,OAAO,EAAE,UAAU,MAAM;gBACrB,IAAI,KAAK,IAAI,CAAC,EAAE;oBACZ,MAAM,CAAC,OAAO,CAAC,mBAAmB,CAAC,CAAA;iBACtC;qBAAM,IAAI,KAAK,IAAI,CAAC,EAAE;oBACnB,MAAM,CAAC,OAAO,CAAC,mBAAmB,CAAC,CAAA;oBACnC,uBAAuB;oBACvB,WAAW,CAAC,MAAM,EAAE,CAAA;iBACvB;YACL,CAAC;SACJ,CACJ,CAAA;IACL,CAAC;IAGD,SAAS,0BAA0B;QAC/B,MAAM,OAAO,GAAG,MAAM,CAAC,KAAK,CAAC,IAAI,CAAC,CAAA;QAClC,MAAM,CAAC,OAAO,CAAC,OAAO,EAAE,IAAI,EAAE,KAAK,CAAC,CAAA;QACpC,MAAM,CAAC,SAAS,CAAC,OAAO,EAAE,IAAI,EAAE,IAAI,CAAC,EAAE;YACnC,MAAM,EAAE,GAAG,IAAI,WAAW,CAAC,IAAI,EAAE,EAAE,EAAE,EAAE,OAAO,EAAE,CAAC,CAAA;YACjD,EAAE,CAAC,MAAM,EAAE,CAAA;QACf,CAAC,CAAC,CAAA;QACF,OAAO,OAAO,CAAA;IAClB,CAAC;AAGL,CAAC"}
✄
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
    let targetSoName = 'libmsaoaidsec.so';
    var fake_pthread_create = create_fake_pthread_create();
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {
            var pathPtr = args[0];
            if (pathPtr !== undefined && pathPtr != null) {
                var path = pathPtr.readCString();
                console.log("[LOAD]", path);
                if (path.indexOf(targetSoName) >= 0) {
                    hook_dlsym();
                }
            }
        }
    });
    var count = 0;
    function hook_dlsym() {
        console.log("=== HOOKING dlsym ===");
        var interceptor = Interceptor.attach(Module.findExportByName(null, "dlsym"), {
            onEnter: function (args) {
                let funcName = args[1].readCString();
                console.log("[dlsym]", funcName);
                if (funcName == "pthread_create") {
                    count++;
                }
            },
            onLeave: function (retval) {
                if (count == 1) {
                    retval.replace(fake_pthread_create);
                }
                else if (count == 2) {
                    retval.replace(fake_pthread_create);
                    // 完成2次替换, 停止hook dlsym
                    interceptor.detach();
                }
            }
        });
    }
    function create_fake_pthread_create() {
        const funcPtr = Memory.alloc(4096);
        Memory.protect(funcPtr, 4096, "rwx");
        Memory.patchCode(funcPtr, 4096, code => {
            const cw = new Arm64Writer(code, { pc: funcPtr });
            cw.putRet();
        });
        return funcPtr;
    }
}
✄
{"version":3,"file":"msa_unopen_msaoaidsec.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/antiFrida/msaoaidsec/msa_unopen_msaoaidsec.ts"],"names":[],"mappings":"AAAA;;;;;;;;;;;GAWG;AAEH,MAAM,UAAU,qBAAqB;IAEjC,IAAI,YAAY,GAAG,kBAAkB,CAAA;IACrC,WAAW,CAAC,MAAM,CAAC,MAAM,CAAC,gBAAgB,CAAC,IAAI,EAAE,oBAAoB,CAAC,EAAE;QACpE,OAAO,EAAE,UAAU,IAAI;YAEnB,IAAI,OAAO,GAAG,IAAI,CAAC,CAAC,CAAC,CAAC;YACtB,IAAI,OAAO,KAAK,SAAS,IAAI,OAAO,IAAI,IAAI,EAAE;gBAC1C,IAAI,IAAI,GAAG,OAAO,CAAC,WAAW,EAAE,CAAC;gBACjC,OAAO,CAAC,GAAG,CAAC,QAAQ,EAAC,IAAI,CAAC,CAAA;gBAC1B,IAAG,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,IAAI,CAAC,EAAC;oBAC/B,OAAO,CAAC,eAAe,CAAC,EAAE,CAAC,CAAC;iBAC/B;aAEJ;QACL,CAAC;KACJ,CAAC,CAAC;AACP,CAAC"}
✄
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
    let targetSoName = 'libmsaoaidsec.so';
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {
            var pathPtr = args[0];
            if (pathPtr !== undefined && pathPtr != null) {
                var path = pathPtr.readCString();
                console.log('path: ', path);
                if (path.indexOf(targetSoName) >= 0) {
                    pathPtr.writeUtf8String("");
                }
            }
        }
    });
}
✄
{"version":3,"file":"anti_jd_frida.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/antiFrida/other/anti_jd_frida.ts"],"names":[],"mappings":"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"}
✄
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
    let targetSoName = 'libJDMobileSec.so';
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {
            var pathPtr = args[0];
            if (pathPtr !== undefined && pathPtr != null) {
                var path = pathPtr.readCString();
                console.log("[LOAD]", path);
                if (path.indexOf(targetSoName) >= 0) {
                    this.need_hook = true;
                }
            }
        },
        onLeave: function (args) {
            if (this.need_hook) {
                hook_JNI_OnLoad();
            }
        }
    });
    function hook_JNI_OnLoad() {
        let module = Process.findModuleByName(targetSoName);
        Interceptor.attach(module.base.add(0x82C8), {
            onEnter(args) {
                console.log("call JNI_OnLoad");
                //1.定位
                //hook_pthread_create 和 replace_str 均用于定位frida检测函数地址
                //hook_pthread_create()  
                //hook_strstr()
                //2.bypass
                bypass();
            }
        });
    }
    //通过hook pthread_create定位线程函数地址: 定位失败
    function hook_pthread_create() {
        var base = Process.findModuleByName(targetSoName).base;
        console.log(targetSoName + " --- " + base);
        Interceptor.attach(Module.findExportByName("libc.so", "pthread_create"), {
            onEnter(args) {
                let func_addr = args[2];
                console.log("The thread function address is " + func_addr + ` [${func_addr.sub(base)}]`);
            }
        });
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
    function patchFunc64(addr) {
        Memory.patchCode(addr, 4, code => {
            const cw = new Arm64Writer(code, { pc: addr });
            cw.putRet();
            cw.flush();
        });
    }
    function bypass() {
        //64位版本：
        let module = Process.findModuleByName(targetSoName);
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
        patchFunc64(module.base.add(0x1567C));
    }
}
✄
{"version":3,"file":"AndHttps.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/network/AndHttps.ts"],"names":[],"mappings":"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"}
✄
import { Base } from "../../base/zzBase.js";
export var AndHttps;
(function (AndHttps) {
    /*--------------------------------------  config ---------------------------------------------- */
    AndHttps.print_config = Base.zzHookFuncHandler.FuncPrintType.func_name;
    /*--------------------------------------  private ---------------------------------------------- */
    function log(funcName, params) {
        new Base.zzHookFuncHandler.JavaFuncHandler(AndHttps.print_config, funcName, function () {
            console.log(Base.zzHookFuncHandler.logTips.funcParams + params);
        }).print();
    }
    /*--------------------------------------  public ---------------------------------------------- */
    function hook_https() {
        hook_url_connection();
        hook_retrofit();
        hook_okhttp3_newcall();
    }
    AndHttps.hook_https = hook_https;
    /******************************************** URLConnection ***************************************************** */
    function hook_url_connection() {
        Java.perform(function () {
            //hook java.net.URL
            var URL = Java.use('java.net.URL');
            URL.$init.overload('java.lang.String').implementation = function (urlstr) {
                var result = this.$init(urlstr);
                let funcName = "java.net.URL.init()";
                let params = '';
                params += 'url = ' + urlstr;
                log(funcName, params);
                return result;
            };
            URL.openConnection.overload().implementation = function () {
                var result = this.openConnection();
                let funcName = "java.net.URL.openConnection()";
                let params = '';
                log(funcName, params);
                return result;
            };
            var HttpURLConnectionImpl = Java.use('com.android.okhttp.internal.huc.HttpURLConnectionImpl');
            HttpURLConnectionImpl.setRequestProperty.implementation = function (key, value) {
                var result = this.setRequestProperty(key, value);
                let funcName = "com.android.okhttp.internal.huc.HttpURLConnectionImpl.setRequestProperty(String field, String newValue)";
                let params = '';
                params += `key = ${key}, value = ${value}`;
                log(funcName, params);
                return result;
            };
        });
    }
    AndHttps.hook_url_connection = hook_url_connection;
    /******************************************** retrofit ***************************************************** */
    function hook_retrofit() {
        Java.perform(function () {
            var RetrofitBuilder = Java.use("retrofit2.Retrofit$Builder");
            RetrofitBuilder.baseUrl.overload('java.lang.String').implementation = function (url) {
                var result = this.baseUrl(url);
                let funcName = "retrofit2.Retrofit$Builder.baseUrl(String url)";
                let params = '';
                params += `url = ${url}`;
                log(funcName, params);
                return result;
            };
            RetrofitBuilder.baseUrl.overload('okhttp3.HttpUrl').implementation = function (url) {
                var result = this.baseUrl(url);
                let funcName = "retrofit2.Retrofit$Builder.baseUrl(HttpUrl url)";
                let params = '';
                params += `url = ${url}`;
                log(funcName, params);
                return result;
            };
        });
    }
    AndHttps.hook_retrofit = hook_retrofit;
    /******************************************** Okhttp3 ***************************************************** */
    function hook_okhttp3_interceptor() {
        Java.perform(function () {
            var ByteString = Java.use("com.android.okhttp.okio.ByteString");
            var Buffer = Java.use("com.android.okhttp.okio.Buffer");
            var Interceptor = Java.use("okhttp3.Interceptor");
            //新建一个Interceptor拦截器
            var MyInterceptor = Java.registerClass({
                name: "okhttp3.MyInterceptor",
                implements: [Interceptor],
                methods: {
                    intercept: function (chain) {
                        //1.获取request对象并打印
                        var request = chain.request();
                        try {
                            console.log("MyInterceptor.intercept onEnter:", request, "\nrequest headers:\n", request.headers());
                            var requestBody = request.body();
                            var contentLength = requestBody ? requestBody.contentLength() : 0;
                            if (contentLength > 0) {
                                var BufferObj = Buffer.$new();
                                requestBody.writeTo(BufferObj);
                                try {
                                    console.log("\nrequest body String:\n", BufferObj.readString(), "\n");
                                }
                                catch (error) {
                                    try {
                                        console.log("\nrequest body ByteString:\n", ByteString.of(BufferObj.readByteArray()).hex(), "\n");
                                    }
                                    catch (error) {
                                        console.log("error 1:", error);
                                    }
                                }
                            }
                        }
                        catch (error) {
                            console.log("error 2:", error);
                        }
                        //2.获取response对象并打印
                        var response = chain.proceed(request);
                        try {
                            console.log("MyInterceptor.intercept onLeave:", response, "\nresponse headers:\n", response.headers());
                            var responseBody = response.body();
                            var contentLength = responseBody ? responseBody.contentLength() : 0;
                            if (contentLength > 0) {
                                console.log("\nresponsecontentLength:", contentLength, "responseBody:", responseBody, "\n");
                                var ContentType = response.headers().get("Content-Type");
                                console.log("ContentType:", ContentType);
                                if (ContentType.indexOf("video") == -1) {
                                    if (ContentType.indexOf("application") == 0) {
                                        var source = responseBody.source();
                                        if (ContentType.indexOf("application/zip") != 0) {
                                            try {
                                                console.log("\nresponse.body StringClass\n", source.readUtf8(), "\n");
                                            }
                                            catch (error) {
                                                try {
                                                    console.log("\nresponse.body ByteString\n", source.readByteString().hex(), "\n");
                                                }
                                                catch (error) {
                                                    console.log("error 4:", error);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        catch (error) {
                            console.log("error 3:", error);
                        }
                        return response;
                    }
                }
            });
            var ArrayList = Java.use("java.util.ArrayList");
            var OkHttpClient = Java.use("okhttp3.OkHttpClient");
            console.log(OkHttpClient);
            OkHttpClient.$init.overload('okhttp3.OkHttpClient$Builder').implementation = function (Builder) {
                console.log("OkHttpClient.$init:", this, Java.cast(Builder.interceptors(), ArrayList));
                this.$init(Builder);
            };
            var MyInterceptorObj = MyInterceptor.$new();
            var Builder = Java.use("okhttp3.OkHttpClient$Builder");
            console.log(Builder);
            Builder.build.implementation = function () {
                this.interceptors().clear();
                //var MyInterceptorObj = MyInterceptor.$new();
                this.interceptors().add(MyInterceptorObj);
                var result = this.build();
                return result;
            };
            Builder.addInterceptor.implementation = function (interceptor) {
                this.interceptors().clear();
                //var MyInterceptorObj = MyInterceptor.$new();
                this.interceptors().add(MyInterceptorObj);
                return this;
                //return this.addInterceptor(interceptor);
            };
            console.log("hook_okhttp3...");
        });
    }
    AndHttps.hook_okhttp3_interceptor = hook_okhttp3_interceptor;
    function hook_okhttp3_interceptor_dex() {
        Java.perform(function () {
            //加载自己实现的dex, 里面有自定义的Interceptor
            Java.openClassFile("/data/local/tmp/okhttp3logging.dex").load();
            var MyInterceptor = Java.use("com.r0ysue.okhttp3demo.LoggingInterceptor");
            var MyInterceptorObj = MyInterceptor.$new();
            var Builder = Java.use("okhttp3.OkHttpClient$Builder");
            console.log(Builder);
            Builder.build.implementation = function () {
                this.networkInterceptors().add(MyInterceptorObj);
                return this.build();
            };
            console.log("hook_okhttp3...");
        });
    }
    AndHttps.hook_okhttp3_interceptor_dex = hook_okhttp3_interceptor_dex;
    function hook_okhttp3_newcall() {
        Java.perform(function () {
            var OkHttpClient = Java.use("okhttp3.OkHttpClient");
            OkHttpClient.newCall.implementation = function (request) {
                var result = this.newCall(request);
                console.log(request.toString());
                return result;
            };
        });
    }
    AndHttps.hook_okhttp3_newcall = hook_okhttp3_newcall;
})(AndHttps || (AndHttps = {}));
✄
{"version":3,"file":"AndSocket.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/network/AndSocket.ts"],"names":[],"mappings":"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"}
✄
import { Base } from "../../base/zzBase.js";
export var AndSocket;
(function (AndSocket) {
    /*--------------------------------------  config ---------------------------------------------- */
    AndSocket.print_config = Base.zzHookFuncHandler.FuncPrintType.func_name;
    /*--------------------------------------  private ---------------------------------------------- */
    function log(funcName, params) {
        new Base.zzHookFuncHandler.JavaFuncHandler(AndSocket.print_config, funcName, function () {
            console.log(Base.zzHookFuncHandler.logTips.funcParams + params);
        }).print();
    }
    function dumpByteArr(tip, array) {
        // var hexstr = StringUtils.bytesToHex(array)
        // console.log(hexstr)
        console.log(`---------------------------- dump ${tip} ---------------------------------`);
        var ptr = Memory.alloc(array.length);
        var temp = ptr;
        for (var i = 0; i < array.length; ++i) {
            temp.add(i);
            temp.writeS8(array[i]);
        }
        console.log(hexdump(ptr, { offset: 0, length: array.length, header: false, ansi: false }));
    }
    /*--------------------------------------  public ---------------------------------------------- */
    function hook_socket() {
        hook_socket_address();
        hook_socket_stream();
        hook_ssl_socket_android8();
    }
    AndSocket.hook_socket = hook_socket;
    function hook_socket_address() {
        Java.perform(function () {
            Java.use('java.net.InetSocketAddress').$init.overload('java.net.InetAddress', 'int').implementation = function (addr, port) {
                var result = this.$init(addr, port);
                let funcName = "java.net.InetSocketAddress.InetSocketAddress(java.net.InetAddress, int) ";
                let params = '';
                params += "addr =>", addr.toString(), "port =>", port;
                log(funcName, params);
                return result;
            };
        });
    }
    AndSocket.hook_socket_address = hook_socket_address;
    function hook_socket_stream() {
        Java.perform(function () {
            Java.use('java.net.SocketOutputStream').socketWrite.overload('[B', 'int', 'int').implementation = function (bytearray1, int1, int2) {
                var result = this.socketWrite(bytearray1, int1, int2);
                let funcName = "java.net.SocketOutputStream.socketWrite([B, int, int)";
                let params = `result = ${result}, bytearray1 = ${Base.zzStringUtils.bytesToHex(bytearray1)}, int1 = ${int1}, int2 = ${int2}`;
                log(funcName, params);
                //dumpByteArr("bytearray1", bytearray1)
                return result;
            };
            Java.use('java.net.SocketInputStream').read.overload('[B', 'int', 'int').implementation = function (bytearray1, int1, int2) {
                var result = this.read(bytearray1, int1, int2);
                let funcName = "java.net.SocketInputStream.socketRead0([B, int, int)";
                let params = `result = ${result}, bytearray1 = ${Base.zzStringUtils.bytesToHex(bytearray1)}, int1 = ${int1}, int2 = ${int2}`;
                log(funcName, params);
                //dumpByteArr("bytearray1", bytearray1)
                return result;
            };
        });
    }
    AndSocket.hook_socket_stream = hook_socket_stream;
    function hook_ssl_socket_android8() {
        Java.perform(function () {
            Java.use('com.android.org.conscrypt.ConscryptFileDescriptorSocket$SSLOutputStream').write.overload('[B', 'int', 'int').implementation = function (bytearray1, int1, int2) {
                var result = this.write(bytearray1, int1, int2);
                let funcName = "ConscryptFileDescriptorSocket$SSLOutputStream.write([B, int, int)";
                let params = `result = ${result}, bytearray1 = ${Base.zzStringUtils.bytesToHex(bytearray1)}, int1 = ${int1}, int2 = ${int2}`;
                log(funcName, params);
                //dumpByteArr("bytearray1", bytearray1)
                return result;
            };
            Java.use('com.android.org.conscrypt.ConscryptFileDescriptorSocket$SSLInputStream').read.overload('[B', 'int', 'int').implementation = function (bytearray1, int1, int2) {
                var result = this.read(bytearray1, int1, int2);
                let funcName = "ConscryptFileDescriptorSocket$SSLInputStream.read([B, int, int)";
                let params = `result = ${result}, bytearray1 = ${Base.zzStringUtils.bytesToHex(bytearray1)}, int1 = ${int1}, int2 = ${int2}`;
                log(funcName, params);
                //dumpByteArr("bytearray1", bytearray1)
                return result;
            };
        });
    }
    AndSocket.hook_ssl_socket_android8 = hook_ssl_socket_android8;
})(AndSocket || (AndSocket = {}));
✄
{"version":3,"file":"AndDump.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/utils/AndDump.js"],"names":[],"mappings":"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"}
✄
/**
 *
 * 由于syscall主动调用时不定参数传递暂无法用ts实现，因此将写文件的函数抽取出来，用js实现。
 *
 *
 */
/**
 * 调用frida提供的接口dump指定内存到指定文件中。
 */
export function write_mem_to_file(dump_file_path, base, size) {
    var file_handle = new File(dump_file_path, "wb");
    if (file_handle && file_handle != null) {
        console.log("------------------dump by frida api ---------------------");
        Memory.protect(base, size, 'rwx');
        var libso_buffer = base.readByteArray(size);
        file_handle.write(libso_buffer);
        file_handle.flush();
        file_handle.close();
        return true;
    }
    return false;
}
/**
 * 调用fwrite函数 dump指定内存到指定文件中。
 * 参考文档：https://bbs.kanxue.com/thread-276893.htm
 */
export function write_mem_to_file_by_fwrite(dump_file_path, base, size) {
    var fopen = Module.findExportByName('libc.so', 'fopen');
    var fwrite = Module.findExportByName('libc.so', 'fwrite');
    var fclose = Module.findExportByName('libc.so', 'fclose');
    var call_fopen = new NativeFunction(fopen, 'pointer', ['pointer', 'pointer']);
    var call_fwrite = new NativeFunction(fwrite, 'int', ['pointer', 'int', 'int', 'pointer']);
    var call_fclose = new NativeFunction(fclose, 'int', ['pointer']);
    var fp = call_fopen(Memory.allocUtf8String(dump_file_path), Memory.allocUtf8String('wb'));
    if (fp) {
        console.log("------------------dump by fwrite ---------------------");
        if (call_fwrite(base, 1, size, fp)) {
            console.log('[ dump ] Write file success, file path: ' + dump_file_path);
            call_fclose(fp);
            return true;
        }
        else {
            console.log('[ dump ] Write file failed');
            call_fclose(fp);
        }
    }
    else {
        console.log('[dump] fopen file failed');
        return false;
    }
}
/**
 * 调用syscall函数替代fwrite函数，dump指定内存到指定文件中。步骤如下：
 * 1.调用fopen打开文件，并返回FILE *
 * 2.调用fileno函数将FILE * 转换为句柄
 * 3.调用syscall(req_write, file_handle, base, size) 写入文件
 *
 * 原本使用syscall全部代替open, write, close；但是打开文件时flags传0x242(O_WRONLY | O_CREAT | O_TRUNC), 只能第一次打开文件，后续打开就报错，暂未找到原因因此放弃。
 */
export function write_mem_to_file_by_syscall(dump_file_path, base, size) {
    var fopen = Module.findExportByName('libc.so', 'fopen');
    var fclose = Module.findExportByName('libc.so', 'fclose');
    var fileno = Module.findExportByName('libc.so', 'fileno');
    var call_fopen = new NativeFunction(fopen, 'pointer', ['pointer', 'pointer']);
    var call_fclose = new NativeFunction(fclose, 'int', ['pointer']);
    var call_fileno = new NativeFunction(fileno, 'int', ['pointer']);
    //size_t write(int fildes,const void *buf,size_t nbytes);
    var syscall = Module.findExportByName('libc.so', 'syscall');
    var call_syscall_write = new NativeFunction(syscall, 'int', ['int', 'int', 'pointer', 'int']);
    let syscall_req_write = 64;
    var fp = call_fopen(Memory.allocUtf8String(dump_file_path), Memory.allocUtf8String('wb'));
    if (fp) {
        console.log("------------------dump by syscall ---------------------");
        let file_handle = call_fileno(fp);
        if (call_syscall_write(syscall_req_write, file_handle, base, size)) {
            console.log('[ dump ] Write file success, file path: ' + dump_file_path);
            call_fclose(fp);
            return true;
        }
        else {
            console.log('[ dump ] Write file failed');
            call_fclose(fp);
            return false;
        }
    }
    else {
        console.log('[dump] fopen file failed');
        return false;
    }
}
✄
{"version":3,"file":"AndSo.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/utils/AndSo.ts"],"names":[],"mappings":"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"}
✄
import * as Dump from "./AndDump.js";
export var AndSo;
(function (AndSo) {
    let DumpMethod;
    (function (DumpMethod) {
        DumpMethod[DumpMethod["frida"] = 0] = "frida";
        DumpMethod[DumpMethod["fwrite"] = 1] = "fwrite";
        DumpMethod[DumpMethod["syscall"] = 2] = "syscall";
    })(DumpMethod = AndSo.DumpMethod || (AndSo.DumpMethod = {}));
    /************************************** helper **************************************************** */
    function get_linker() {
        let linker = null;
        if (Process.pointerSize == 4) {
            linker = Process.findModuleByName("linker");
        }
        else {
            linker = Process.findModuleByName("linker64");
        }
        return linker;
    }
    AndSo.get_linker = get_linker;
    function print_soinfo(soName) {
        var targetModule = Process.findModuleByName(soName);
        console.log("get_soinfo ==>" + soName + " base = " + targetModule.base + "size = " + targetModule.size);
    }
    AndSo.print_soinfo = print_soinfo;
    //获取真实地址
    function get_addr(soName, offset) {
        const base = Module.findBaseAddress(soName);
        return base.add(offset);
    }
    AndSo.get_addr = get_addr;
    //获取jstring
    function get_jstring(jstrAddr) {
        var jStrCls = Java.use('java.lang.String');
        var str = Java.cast(jstrAddr, jStrCls);
        return str;
    }
    AndSo.get_jstring = get_jstring;
    /************************************** dump操作 **************************************************** */
    function get_dump_root_path(bundleName) {
        return "/data/data/" + bundleName + "/";
    }
    AndSo.get_dump_root_path = get_dump_root_path;
    function get_dump_file_path(bundleName, soName, base, size) {
        var savePath = get_dump_root_path(bundleName);
        var fileName = soName.replace(".so", "") + "_" + base + "_" + base.add(size) + ".bin";
        return savePath + fileName;
    }
    AndSo.get_dump_file_path = get_dump_file_path;
    //dump 指定so库, 并保存到/data/data/bundleName/目录下
    /**
     *
     * @param bundleName 包名
     * @param soName so名
     * @param dumpMethod dump方法：frida, fwrite, syscall
     */
    function dump_so(bundleName, soName, dumpMethod = DumpMethod.frida) {
        //写文件
        var targetModule = Process.getModuleByName(soName);
        var dump_file_path = get_dump_file_path(bundleName, soName, targetModule.base, targetModule.size);
        var success = false;
        switch (dumpMethod) {
            case DumpMethod.frida:
                success = Dump.write_mem_to_file(dump_file_path, targetModule.base, targetModule.size);
                break;
            case DumpMethod.fwrite:
                success = Dump.write_mem_to_file_by_fwrite(dump_file_path, targetModule.base, targetModule.size);
                break;
            case DumpMethod.syscall:
                success = Dump.write_mem_to_file_by_syscall(dump_file_path, targetModule.base, targetModule.size);
                break;
            default:
                break;
        }
        if (success) {
            console.log("[dump so]:", dump_file_path);
        }
        else {
            console.log("[dump so]:  dump failed");
        }
        return success;
    }
    AndSo.dump_so = dump_so;
    function dump_memory(bundleName, soName, offset, size, dumpMethod = DumpMethod.frida) {
        var base_addr = Module.findBaseAddress(soName);
        var dump_file_path = get_dump_file_path(bundleName, soName, base_addr.add(offset), size);
        var success = false;
        switch (dumpMethod) {
            case DumpMethod.frida:
                success = Dump.write_mem_to_file(dump_file_path, base_addr.add(offset), size);
                break;
            case DumpMethod.fwrite:
                success = Dump.write_mem_to_file_by_fwrite(dump_file_path, base_addr.add(offset), size);
                break;
            case DumpMethod.syscall:
                success = Dump.write_mem_to_file_by_syscall(dump_file_path, base_addr.add(offset), size);
                break;
            default:
                break;
        }
        if (success) {
            console.log("[dump memory]:", dump_file_path);
        }
        else {
            console.log("[dump memory]: dump failed");
        }
    }
    AndSo.dump_memory = dump_memory;
    //dump指定so的导出符号列表, 并保存到/data/data/bundleName/目录下
    function dump_so_export_symbols(bundleName, soName) {
        var targetModule = Process.findModuleByName(soName);
        var exportSymbols = targetModule.enumerateExports();
        //写文件
        var savePath = get_dump_root_path(bundleName);
        var fileName = soName.replace(".so", "") + "_symbols.log";
        var dump_file_path = savePath + fileName;
        console.log("dump_file_path = ", dump_file_path);
        var file_handle = new File(dump_file_path, "a+");
        for (var i = 0; i < exportSymbols.length; i++) {
            file_handle.write(exportSymbols[i].name + ": " + (exportSymbols[i].address) + "\n");
        }
        file_handle.flush();
        file_handle.close();
        console.log("[dump symbols]:", dump_file_path);
    }
    AndSo.dump_so_export_symbols = dump_so_export_symbols;
    /************************************************************************************** */
    /**
     * 定位frida防护的so库
     */
    function location_anti_frida() {
        let android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
        if (android_dlopen_ext != null) {
            Interceptor.attach(android_dlopen_ext, {
                onEnter: function (args) {
                    let so_name = args[0].readCString();
                    console.log("[LOAD] ==> " + so_name);
                }, onLeave: function (retval) {
                }
            });
        }
    }
    AndSo.location_anti_frida = location_anti_frida;
    /**
     * hook dlopen函数，可用于定位指定so的加载时机
     *
     * @param soName so的名字
     * @param enterFunc enter的回调函数, 无入参
     * @param leaveFunc leave的回调函数，无入参
     */
    function hook_dlopen(soName, enterFunc, leaveFunc) {
        let android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
        if (android_dlopen_ext != null) {
            Interceptor.attach(android_dlopen_ext, {
                onEnter: function (args) {
                    let so_name = args[0].readCString();
                    console.log("[LOAD] ==> " + so_name);
                    if (so_name.indexOf(soName) !== -1) {
                        this.hook = true;
                        enterFunc(); //进入指定so时，回调enterFunc()
                    }
                }, onLeave: function (retval) {
                    if (this.hook) {
                        this.hook = false;
                        leaveFunc(); //离开指定so时，回调leaveFunc()
                    }
                }
            });
        }
    }
    AndSo.hook_dlopen = hook_dlopen;
    /**
     * hook linker::CallConstructors函数，可用于定位so的初始化时机，比如hook so的 init函数.
     * 例如：
     * 1.打印init_array的所有函数地址：https://blog.seeflower.dev/archives/299/
     * 2.
     *
     * @param soName so的名字
     * @param initFunc 初始化函数，无入参
     */
    function hook_linker_call_constructor(soName, initFunc) {
        //1.找到Linker
        let already_hook = false;
        let get_soname = null;
        let call_constructor_addr = null;
        let linker = get_linker();
        //2.遍历符号列表，找到linker的 call_constructor和 get_soname 函数。
        let symbols = linker.enumerateSymbols();
        for (let i = 0; i < symbols.length; i++) {
            let symbol = symbols[i];
            if (symbol.name.indexOf("call_constructor") !== -1) { //或者：(symbol.name == "__dl__ZN6soinfo17call_constructorsEv")
                call_constructor_addr = symbol.address;
            }
            else if (symbol.name.indexOf("get_soname") !== -1) { //或者：(symbol.name == "__dl__ZNK6soinfo10get_sonameEv")
                get_soname = new NativeFunction(symbol.address, "pointer", ["pointer"]);
            }
        }
        //2. hook Linker::CallConstructors 函数
        if (call_constructor_addr != null) {
            Interceptor.attach(call_constructor_addr, {
                onEnter: function (args) {
                    let soinfo = args[0];
                    //打印当前INIT的so的名字
                    if (soinfo != null && get_soname != null) {
                        let soname = get_soname(soinfo).readCString();
                        console.log(`[INIT] ==> ${soname}`);
                    }
                    if (already_hook === false) {
                        const targetModule = Process.findModuleByName(soName);
                        if (targetModule !== null) {
                            already_hook = true;
                            initFunc();
                        }
                    }
                }
            });
        }
    }
    AndSo.hook_linker_call_constructor = hook_linker_call_constructor;
    /** hook 指定模块的 .init_proc 和 .init_array 函数
     * 参考文章：https://bbs.kanxue.com/thread-267430.htm
     * 原理：
     * 64位的linker没有call_function函数符号，因为它是一个内联函数。
     * 通过观察发现，.init_proc和.init_array函数调用前后，都会有一个log的判断，因此直接去hook这个_dl_async_safe_format_log函数即可。
     * 但是只有当_dl_g_ld_debug_verbosity这个值大于等于2该函数才会执行，
     * 因此使用frida获得这个变量的地址，然后修改这个变量的值使其达到_dl_async_safe_format_log函数会执行的条件即可。
     *
     *

dlopen调用过程:
//目录/bionic/linker/linker_soinfo.cpp
soinfo::call_constructors()
    call_function("DT_INIT", init_func_, get_realpath());
    call_array("DT_INIT_ARRAY", init_array_, init_array_count_, false, get_realpath());
            ------>循环调用了 call_function("function", functions[i], realpath);



     */
    function print_module_init_func(targetSoName) {
        //1.找到linker
        let linker = get_linker();
        //2.遍历符号列表，找到linker的 call_function和 async_safe_format_log函数。
        var addr_call_function = null;
        var addr_async_safe_format_log = null;
        if (linker) {
            var symbols = linker.enumerateSymbols();
            for (var i = 0; i < symbols.length; i++) {
                var name = symbols[i].name;
                if (name.indexOf("_dl__ZL13call_functionPKcPFviPPcS2_ES0_") >= 0) {
                    addr_call_function = symbols[i].address;
                }
                else if (name.indexOf("g_ld_debug_verbosity") >= 0) {
                    //修改g_ld_debug_verbosity的值
                    let addr_g_ld_debug_verbosity = symbols[i].address;
                    addr_g_ld_debug_verbosity.writeInt(2);
                }
                else if (name.indexOf("async_safe_format_log") >= 0 && name.indexOf('va_list') < 0) {
                    addr_async_safe_format_log = symbols[i].address;
                }
            }
        }
        if (addr_call_function) {
            //3.1 hook call_function函数
            Interceptor.attach(addr_call_function, {
                onEnter: function (args) {
                    //打印init函数
                    print_init_func(args[0], args[2], args[1], targetSoName);
                },
                onLeave: function (retval) {
                }
            });
        }
        else if (addr_async_safe_format_log) {
            //3. hook async_safe_format_log函数
            Interceptor.attach(addr_async_safe_format_log, {
                onEnter: function (args) {
                    this.log_level = args[0];
                    this.tag = args[1].readCString(); //linker
                    this.fmt = args[2].readCString(); //"[ calling c-tor %s @ %p for '%s']"
                    if (this.fmt.indexOf("c-tor") >= 0 && this.fmt.indexOf('Done') < 0) {
                        //打印Init函数
                        print_init_func(args[3], args[5], args[4], targetSoName);
                    }
                },
                onLeave: function (retval) {
                }
            });
        }
    }
    AndSo.print_module_init_func = print_module_init_func;
    function hook_module_init_func(targetSoName, enterFunc, leaveFunc) {
        let linker = get_linker();
        //2.遍历符号列表，找到linker的 call_function, async_safe_format_log函数。
        var addr_call_function = null;
        var addr_async_safe_format_log = null;
        if (linker) {
            var symbols = linker.enumerateSymbols();
            for (var i = 0; i < symbols.length; i++) {
                var name = symbols[i].name;
                if (name.indexOf("_dl__ZL13call_functionPKcPFviPPcS2_ES0_") >= 0) {
                    addr_call_function = symbols[i].address;
                }
                else if (name.indexOf("g_ld_debug_verbosity") >= 0) {
                    //g_ld_debug_verbosity
                    let addr_g_ld_debug_verbosity = symbols[i].address;
                    addr_g_ld_debug_verbosity.writeInt(2);
                }
                else if (name.indexOf("async_safe_format_log") >= 0 && name.indexOf('va_list') < 0) {
                    addr_async_safe_format_log = symbols[i].address;
                }
            }
        }
        if (addr_call_function) {
            //3.1 hook call_function函数
            Interceptor.attach(addr_call_function, {
                onEnter: function (args) {
                    hook_init_func(args[0], args[2], args[1], targetSoName, enterFunc, leaveFunc);
                },
                onLeave: function (retval) {
                }
            });
        }
        else if (addr_async_safe_format_log) {
            //3.2 hook async_safe_format_log函数
            Interceptor.attach(addr_async_safe_format_log, {
                onEnter: function (args) {
                    this.log_level = args[0];
                    this.tag = args[1].readCString(); //linker
                    this.fmt = args[2].readCString(); //"[ calling c-tor %s @ %p for '%s']"
                    if (this.fmt.indexOf("c-tor") >= 0 && this.fmt.indexOf('Done') < 0) {
                        hook_init_func(args[3], args[5], args[4], targetSoName, enterFunc, leaveFunc);
                    }
                },
                onLeave: function (retval) {
                }
            });
        }
    }
    AndSo.hook_module_init_func = hook_module_init_func;
    /**************************************** helper **************************************************** */
    function print_init_func(funcType, soPath, funcAddr, targetSoName) {
        let function_type = funcType.readCString(); // func_type
        let so_path = soPath.readCString(); // so_path
        var strs = so_path.split("/");
        let cur_so_name = strs.pop();
        //4.打印
        if (targetSoName == null || cur_so_name == targetSoName) {
            if (function_type.indexOf("function") >= 0) {
                let targetModule = Process.findModuleByName(cur_so_name);
                if (funcAddr > targetModule.base && funcAddr < targetModule.base.add(targetModule.size)) {
                    let func_offset = funcAddr.sub(targetModule.base);
                    console.log("func_type:", function_type, ' so_name:', cur_so_name, ' func_offset:', func_offset);
                }
            }
        }
    }
    function hook_init_func(funcType, soPath, funcAddr, targetSoName, enterFunc, leaveFunc) {
        let function_type = funcType.readCString(); // func_type
        let so_path = soPath.readCString(); // so_path
        var strs = so_path.split("/");
        let cur_so_name = strs.pop();
        if (cur_so_name != targetSoName) {
            return;
        }
        //hook
        if (function_type.indexOf("function") >= 0) {
            let targetModule = Process.findModuleByName(cur_so_name);
            let func_offset = funcAddr.sub(targetModule.base);
            if (funcAddr > targetModule.base && funcAddr < targetModule.base.add(targetModule.size)) {
                Interceptor.attach(funcAddr, {
                    onEnter: function (args) {
                        console.log(`hook enter ==> ${targetSoName} : ${func_offset}`);
                        enterFunc(func_offset);
                    },
                    onLeave: function (retval) {
                        console.log(`hook leave ==> ${targetSoName} : ${func_offset}`);
                        leaveFunc(func_offset);
                    }
                });
            }
        }
    }
})(AndSo || (AndSo = {}));
✄
{"version":3,"file":"AndUI.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["android/utils/AndUI.ts"],"names":[],"mappings":"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"}
✄
export var AndUI;
(function (AndUI) {
    /*--------------------------------------  public ---------------------------------------------- */
    function hook_ui() {
        hook_activity();
        hook_Dialog();
        hook_fragment();
        hook_AlertDialog();
        hook_PopupWindow();
        hook_toast();
        hook_onClick();
        hook_WebView();
    }
    AndUI.hook_ui = hook_ui;
    function get_class_name(obj) {
        return obj.getClass().getName();
    }
    function hook_activity() {
        Java.perform(function () {
            var Activity = Java.use("android.app.Activity");
            Activity.onCreate.overload('android.os.Bundle').implementation = function (bundle) {
                console.log("Activity.onCreate() called ==>" + get_class_name(this));
                this.onCreate(bundle);
            };
            Activity.onStart.implementation = function () {
                console.log("Activity.onStart() called ==>" + get_class_name(this));
                this.onStart();
            };
            Activity.onResume.implementation = function () {
                console.log("Activity.onResume() called ==>" + get_class_name(this));
                this.onResume();
            };
            Activity.onPause.implementation = function () {
                console.log("Activity.onPause() called ==>" + get_class_name(this));
                this.onPause();
            };
            Activity.onStop.implementation = function () {
                console.log("Activity.onStop() called ==>" + get_class_name(this));
                this.onStop();
            };
            Activity.onDestroy.implementation = function () {
                console.log("Activity.onDestroy() called ==>" + get_class_name(this));
                this.onDestroy();
            };
            Activity.onRestart.implementation = function () {
                console.log("Activity.onRestart() called ==>" + get_class_name(this));
                this.onRestart();
            };
        });
    }
    AndUI.hook_activity = hook_activity;
    function hook_Dialog() {
        Java.perform(function () {
            var Dialog = Java.use("android.app.Dialog");
            Dialog.show.implementation = function () {
                console.log("Dialog.show() called ==>" + get_class_name(this));
                this.show();
            };
            Dialog.dismiss.implementation = function () {
                console.log("Dialog.dismiss() called ==>" + get_class_name(this));
                this.dismiss();
            };
        });
    }
    AndUI.hook_Dialog = hook_Dialog;
    function hook_fragment() {
        Java.perform(function () {
            var Fragment = Java.use("android.app.Fragment");
            Fragment.onCreateView.overload('android.view.LayoutInflater', 'android.view.ViewGroup', 'android.os.Bundle').implementation = function (inflater, container, savedInstanceState) {
                console.log("Fragment.onCreateView() called ==>" + get_class_name(this));
                this.onCreateView(inflater, container, savedInstanceState);
            };
            Fragment.onStart.implementation = function () {
                console.log("Fragment.onStart() called ==>" + get_class_name(this));
                this.onStart();
            };
            Fragment.onResume.implementation = function () {
                console.log("Fragment.onResume() called ==>" + get_class_name(this));
                this.onResume();
            };
            Fragment.onPause.implementation = function () {
                console.log("Fragment.onPause() called ==>" + get_class_name(this));
                this.onPause();
            };
            Fragment.onStop.implementation = function () {
                console.log("Fragment.onStop() called ==>" + get_class_name(this));
                this.onStop();
            };
            Fragment.onDestroy.implementation = function () {
                console.log("Fragment.onDestroy() called ==>" + get_class_name(this));
                this.onDestroy();
            };
            Fragment.onRestart.implementation = function () {
                console.log("Fragment.onRestart() called ==>" + get_class_name(this));
                this.onRestart();
            };
        });
    }
    AndUI.hook_fragment = hook_fragment;
    function hook_AlertDialog() {
        Java.perform(function () {
            var AlertDialog = Java.use("android.app.AlertDialog");
            AlertDialog.show.implementation = function () {
                console.log("AlertDialog.show() called ==>" + get_class_name(this));
                this.show();
            };
            AlertDialog.dismiss.implementation = function () {
                console.log("AlertDialog.dismiss() called ==>" + get_class_name(this));
                this.dismiss();
            };
        });
    }
    AndUI.hook_AlertDialog = hook_AlertDialog;
    function hook_PopupWindow() {
        Java.perform(function () {
            var PopupWindow = Java.use("android.widget.PopupWindow");
            PopupWindow.showAsDropDown.overload('android.view.View').implementation = function (a) {
                console.log("PopupWindow.showAsDropDown() called ==>" + get_class_name(this));
                this.showAsDropDown();
            };
            PopupWindow.showAsDropDown.overload('android.view.View', 'int', 'int').implementation = function (a, b, c) {
                console.log("PopupWindow.showAsDropDown() called ==>" + get_class_name(this));
                this.showAsDropDown();
            };
            PopupWindow.showAsDropDown.overload('android.view.View', 'int', 'int', 'int').implementation = function (a, b, c, d) {
                console.log("PopupWindow.showAsDropDown() called ==>" + get_class_name(this));
                this.showAsDropDown();
            };
            PopupWindow.dismiss.implementation = function () {
                console.log("PopupWindow.dismiss() called ==>" + get_class_name(this));
                this.dismiss();
            };
        });
    }
    AndUI.hook_PopupWindow = hook_PopupWindow;
    function hook_toast() {
        Java.perform(function () {
            var Toast = Java.use("android.widget.Toast");
            Toast.show.implementation = function () {
                console.log("Toast.show() called ==>" + get_class_name(this));
                this.show();
            };
        });
    }
    AndUI.hook_toast = hook_toast;
    function hook_onClick() {
    }
    AndUI.hook_onClick = hook_onClick;
    function hook_WebView() {
    }
    AndUI.hook_WebView = hook_WebView;
})(AndUI || (AndUI = {}));
✄
{"version":3,"file":"zzBase.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzBase.ts"],"names":[],"mappings":"AAGA,OAAO,KAAK,cAAc,MAAM,qBAAqB,CAAA;AAErD,OAAO,EAAE,WAAW,EAAE,MAAM,kBAAkB,CAAC;AAC/C,OAAO,EAAE,iBAAiB,EAAE,MAAM,wBAAwB,CAAC;AAC3D,OAAO,EAAE,SAAS,EAAE,MAAM,gBAAgB,CAAC;AAC3C,OAAO,EAAE,aAAa,EAAE,MAAM,oBAAoB,CAAC;AACnD,OAAO,EAAE,YAAY,EAAE,MAAM,mBAAmB,CAAC;AACjD,OAAO,EAAE,cAAc,EAAE,MAAM,qBAAqB,CAAC;AAIrD,MAAM,KAAW,IAAI,CAWpB;AAXD,WAAiB,IAAI;IAEN,gBAAW,GAAG,WAAW,CAAC;IAC1B,mBAAc,GAAG,cAAc,CAAC;IAChC,sBAAiB,GAAG,iBAAiB,CAAA;IACrC,YAAO,GAAG,SAAS,CAAA;IACnB,kBAAa,GAAG,aAAa,CAAA;IAC7B,iBAAY,GAAG,YAAY,CAAA;IAC3B,iBAAY,GAAG,cAAc,CAAA;AAG5C,CAAC,EAXgB,IAAI,KAAJ,IAAI,QAWpB"}
✄
import * as ZZStalkerTrace from "./zzStalkerTrace.js";
import { ZZCallStack } from "./zzCallStack.js";
import { ZZHookFuncHandler } from "./zzHookFuncHandler.js";
import { ZZPatch64 } from "./zzPatch64.js";
import { ZZStringUtils } from "./zzStringUtils.js";
import { ZZNativeFunc } from "./zzNativeFunc.js";
import { ZZSyscallTable } from "./zzSyscallTable.js";
export var Base;
(function (Base) {
    Base.zzCallStack = ZZCallStack;
    Base.zzStalkerTrace = ZZStalkerTrace;
    Base.zzHookFuncHandler = ZZHookFuncHandler;
    Base.zzPatch = ZZPatch64;
    Base.zzStringUtils = ZZStringUtils;
    Base.zzNativeFunc = ZZNativeFunc;
    Base.syscallTable = ZZSyscallTable;
})(Base || (Base = {}));
✄
{"version":3,"file":"zzCallStack.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzCallStack.ts"],"names":[],"mappings":"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"}
✄
/**
 * 函数堆栈信息
 * 支持ARM64 android, iOS
 */
export var ZZCallStack;
(function (ZZCallStack) {
    //================================= 函数调用栈打印 =========================================
    //打印Java方法调用堆栈
    function printJavaCallstacks() {
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
    }
    ZZCallStack.printJavaCallstacks = printJavaCallstacks;
    //打印native函数调用堆栈
    function printNativeCallstacks(context) {
        console.log(' called from:\n' + Thread.backtrace(context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
    }
    ZZCallStack.printNativeCallstacks = printNativeCallstacks;
    //打印native函数调用堆栈(自实现栈回溯)
    function printNativeCallstacksV2(context) {
        let addrArr = [];
        if (Process.pointerSize == 8) {
            addrArr = stacktrace64(context, 30);
        }
        else {
            addrArr = stacktrace32(context, 30);
        }
        console.log(' called from:\n' + addrArr.map(DebugSymbol.fromAddress).join('\n') + '\n');
    }
    ZZCallStack.printNativeCallstacksV2 = printNativeCallstacksV2;
    //================================= 自回溯堆栈 =========================================
    function stacktrace64(context, number) {
        var fp = context.fp; //x29
        var sp = context.sp; //x31
        var pc = context.pc;
        console.log("sp = " + sp.toString() + ", fp = " + fp.toString() + ", pc = " + pc.toString() + "\n");
        let n = 0;
        let stack_arr = [];
        stack_arr[n++] = pc;
        let cur_fp = fp;
        while (n < number) {
            //判断栈的有效性
            if (parseInt(cur_fp.toString()) < parseInt(sp.toString())) {
                break;
            }
            //读取上一个栈帧, ARM堆栈特征：FP指向上一个栈帧的FP，且FP上面是LR。
            let pre_fp = cur_fp.readPointer();
            let lr = cur_fp.add(8).readPointer();
            console.log("pre_fp = " + pre_fp.toString() + ", lr = " + lr.toString() + "\n");
            if (lr.toInt32() == 0) {
                break;
            }
            cur_fp = pre_fp;
            stack_arr[n++] = lr;
        }
        console.log("addr = ", stack_arr);
        return stack_arr;
    }
    function stacktrace32(context, number) {
        console.log("ARM32 暂未实现，待补充!!!");
        return [];
    }
    //================================= 当前函数栈信息 =========================================
    /**
     * 获取当前上下文寄存器信息，返回JSON字符串
     * @param context
     * @returns
     */
    function getRegisterContext(context) {
        let regContext = JSON.stringify(context);
        return regContext;
    }
    ZZCallStack.getRegisterContext = getRegisterContext;
    /**
     * 打印函数栈信息（指定栈层数，8字节为一层），并输出 module 信息 (如果有）
     * @param {CpuContext} context
     * @param {number} number
     */
    function printStackInfo(context, number) {
        var sp = context.sp;
        for (var i = 0; i < number; i++) {
            var curSp = sp.add(Process.pointerSize * i);
            console.log('showStacksModInfo curSp: ' + curSp + ', val: ' + curSp.readPointer()
                + ', module: ' + getModuleInfo(curSp.readPointer()));
        }
    }
    ZZCallStack.printStackInfo = printStackInfo;
    /**
     * 根据地址获取模块信息
     * @param {NativePointer} addr
     * @returns {string}
     */
    function getModuleInfo(addr) {
        var result = null;
        Process.enumerateModules().forEach(function (module) {
            if (module.base <= addr && addr <= (module.base.add(module.size))) {
                result = JSON.stringify(module);
                return false; // 跳出循环
            }
        });
        return result;
    }
})(ZZCallStack || (ZZCallStack = {}));
✄
{"version":3,"file":"zzHookFuncHandler.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzHookFuncHandler.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,IAAI,EAAE,MAAM,aAAa,CAAC;AAEnC,MAAM,KAAW,iBAAiB,CAwEjC;AAxED,WAAiB,iBAAiB;IAE9B,IAAY,aAKX;IALD,WAAY,aAAa;QACrB,iDAAI,CAAA;QACJ,2DAAS,CAAA;QACT,+DAAW,CAAA;QACX,uEAAe,CAAA;IACnB,CAAC,EALW,aAAa,GAAb,+BAAa,KAAb,+BAAa,QAKxB;IAEY,yBAAO,GAAG;QACnB,QAAQ,EAAE,eAAe;QACzB,UAAU,EAAE,kBAAkB;QAC9B,cAAc,EAAE,sBAAsB;KACzC,CAAA;IAOD,MAAM,mBAAmB;QAOrB,YAAY,SAAwB,EAAE,QAAgB,EAAE,UAAwB,EAAE,UAAwB;YAEtG,IAAI,CAAC,SAAS,GAAG,SAAS,CAAC;YAC3B,IAAI,CAAC,aAAa,GAAG;gBACjB,OAAO,CAAC,GAAG,CAAC,kBAAA,OAAO,CAAC,QAAQ,GAAG,QAAQ,CAAC,CAAA;YAC5C,CAAC,CAAA;YACD,IAAI,CAAC,eAAe,GAAG,UAAU,CAAA;YACjC,IAAI,CAAC,eAAe,GAAG;gBACnB,OAAO,CAAC,GAAG,CAAC,kBAAA,OAAO,CAAC,cAAc,CAAC,CAAA;gBACnC,UAAU,EAAE,CAAA;YAChB,CAAC,CAAA;QACL,CAAC;QAED,KAAK;YACD,IAAI,IAAI,CAAC,SAAS,IAAI,aAAa,CAAC,eAAe,EAAE;gBACjD,IAAI,CAAC,aAAa,EAAE,CAAA;gBACpB,IAAI,CAAC,eAAe,EAAE,CAAA;gBACtB,IAAI,CAAC,eAAe,EAAE,CAAA;aACzB;iBAAM,IAAI,IAAI,CAAC,SAAS,IAAI,aAAa,CAAC,WAAW,EAAE;gBACpD,IAAI,CAAC,aAAa,EAAE,CAAA;gBACpB,IAAI,CAAC,eAAe,EAAE,CAAA;aACzB;iBAAO,IAAI,IAAI,CAAC,SAAS,IAAI,aAAa,CAAC,SAAS,EAAE;gBACnD,IAAI,CAAC,aAAa,EAAE,CAAA;aACvB;QACL,CAAC;KAEJ;IAGD,eAAe;IACf,MAAa,eAAgB,SAAQ,mBAAmB;QACpD,YAAY,SAAiB,EAAE,QAAgB,EAAE,UAAwB;YACrE,KAAK,CAAC,SAAS,EAAE,QAAQ,EAAE,UAAU,EAAE,IAAI,CAAC,WAAW,CAAC,mBAAmB,CAAC,CAAA;QAChF,CAAC;KACJ;IAJY,iCAAe,kBAI3B,CAAA;IAED,iBAAiB;IACjB,MAAa,iBAAkB,SAAQ,mBAAmB;QACtD,YAAY,SAAiB,EAAE,OAAY,EAAE,QAAgB,EAAE,UAAwB;YACnF,IAAI,eAAe,GAAG;gBAClB,IAAI,CAAC,WAAW,CAAC,qBAAqB,CAAC,OAAO,CAAC,CAAA;YACnD,CAAC,CAAA;YACD,KAAK,CAAC,SAAS,EAAE,QAAQ,EAAE,UAAU,EAAE,eAAe,CAAC,CAAA;QAC3D,CAAC;KACJ;IAPY,mCAAiB,oBAO7B,CAAA;AACL,CAAC,EAxEgB,iBAAiB,KAAjB,iBAAiB,QAwEjC"}
✄
import { Base } from "./zzBase.js";
export var ZZHookFuncHandler;
(function (ZZHookFuncHandler) {
    let FuncPrintType;
    (function (FuncPrintType) {
        FuncPrintType[FuncPrintType["none"] = 0] = "none";
        FuncPrintType[FuncPrintType["func_name"] = 1] = "func_name";
        FuncPrintType[FuncPrintType["func_params"] = 2] = "func_params";
        FuncPrintType[FuncPrintType["func_callstacks"] = 3] = "func_callstacks";
    })(FuncPrintType = ZZHookFuncHandler.FuncPrintType || (ZZHookFuncHandler.FuncPrintType = {}));
    ZZHookFuncHandler.logTips = {
        funcName: "funcName ==> ",
        funcParams: "funcParams ==>\n",
        funcCallstacks: "funcCallstacks ==>\n",
    };
    class AbstractFuncHandler {
        constructor(printType, funcname, funcparams, callstacks) {
            this.printType = printType;
            this.printFuncName = function () {
                console.log(ZZHookFuncHandler.logTips.funcName + funcname);
            };
            this.printFuncParams = funcparams;
            this.printCallstacks = function () {
                console.log(ZZHookFuncHandler.logTips.funcCallstacks);
                callstacks();
            };
        }
        print() {
            if (this.printType == FuncPrintType.func_callstacks) {
                this.printFuncName();
                this.printFuncParams();
                this.printCallstacks();
            }
            else if (this.printType == FuncPrintType.func_params) {
                this.printFuncName();
                this.printFuncParams();
            }
            else if (this.printType == FuncPrintType.func_name) {
                this.printFuncName();
            }
        }
    }
    //Java函数hook处理类
    class JavaFuncHandler extends AbstractFuncHandler {
        constructor(printType, funcname, funcparams) {
            super(printType, funcname, funcparams, Base.zzCallStack.printJavaCallstacks);
        }
    }
    ZZHookFuncHandler.JavaFuncHandler = JavaFuncHandler;
    //native函数hook处理类
    class NativeFuncHandler extends AbstractFuncHandler {
        constructor(printType, context, funcname, funcparams) {
            let print_callstack = function () {
                Base.zzCallStack.printNativeCallstacks(context);
            };
            super(printType, funcname, funcparams, print_callstack);
        }
    }
    ZZHookFuncHandler.NativeFuncHandler = NativeFuncHandler;
})(ZZHookFuncHandler || (ZZHookFuncHandler = {}));
✄
{"version":3,"file":"zzNativeFunc.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzNativeFunc.ts"],"names":[],"mappings":"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"}
✄
import { ZZCallStack } from "./zzCallStack.js";
import { ZZSyscallTable } from "./zzSyscallTable.js";
export var ZZNativeFunc;
(function (ZZNativeFunc) {
    /*********************************** 函数处理 *********************************************/
    function getFuncPtr(funcName) {
        const funcPtr = Module.findExportByName(null, funcName);
        console.log("getFuncPtr ==>" + funcName + " : " + funcPtr);
        return funcPtr;
    }
    ZZNativeFunc.getFuncPtr = getFuncPtr;
    function replaceFunc(funcName, callBack) {
        let funcPtr = getFuncPtr(funcName);
        if (funcPtr) {
            Interceptor.replace(funcPtr, callBack);
        }
    }
    ZZNativeFunc.replaceFunc = replaceFunc;
    //创建一个假的函数, 该函数直接返回
    function createFakeFunc() {
        const fake_func = Memory.alloc(4096);
        Memory.protect(fake_func, 4096, "rwx");
        Memory.patchCode(fake_func, 4096, code => {
            const cw = new Arm64Writer(code, { pc: fake_func });
            cw.putRet();
            cw.flush();
        });
        return fake_func;
    }
    ZZNativeFunc.createFakeFunc = createFakeFunc;
    /************************* 内存读写/搜索 ******************************** */
    function readMemory(startAddr, size) {
        Memory.protect(startAddr, size, 'rwx');
        var buffer = startAddr.readByteArray(size);
        return buffer;
    }
    ZZNativeFunc.readMemory = readMemory;
    function writeMemory(startAddr, str) {
        Memory.protect(startAddr, str.length, 'rwx');
        startAddr.writeAnsiString(str);
    }
    ZZNativeFunc.writeMemory = writeMemory;
    /**
     * 从内存中搜索特征数据, 例如：
     * arm64 svc 0 : 010000D4
     * arm64 svc 0x80: 011000D4
     * ssl_cronet(libsscronet.so): 参考 FridaContainer的 Anti.ts文件。
    */
    function searchMemory(soName, hexStr) {
        // 获取模块基址和大小
        var module = Process.getModuleByName(soName);
        var base = module.base;
        var size = module.size;
        var matchedArr;
        // 在模块地址范围内搜索特征数据
        var matches = Memory.scan(base, size, hexStr, {
            onMatch: function (address, size) {
                var offset = address.sub(base);
                matchedArr.push(offset);
            },
        });
        return matchedArr;
    }
    ZZNativeFunc.searchMemory = searchMemory;
    //监控内存访问: 只会触发一次; 参考：https://blog.csdn.net/fenfei331/article/details/123523182
    function accessMemoryMonitor(soName, offset, memSize) {
        var module = Process.getModuleByName(soName);
        var targetAddr = module.base.add(offset);
        MemoryAccessMonitor.enable({
            base: targetAddr,
            size: memSize,
        }, {
            onAccess: function (details) {
                console.log("access memory at: 0x" + details.address.sub(module.base).toString(16));
            },
        });
    }
    ZZNativeFunc.accessMemoryMonitor = accessMemoryMonitor;
    /******************************************* watch ***************************************************** */
    /**
     * 对对应的偏移地址下断点，并打印其堆栈。
     * 用途：比如通过IDA搜索 svc 0的机器码得到其指令的偏移地址，然后通过frida hook它，并打印堆栈。
     *
     * @param soName so名称
     * @param points 待观察的指令偏移地址数组
     *
     */
    function watch_points(soName, points) {
        var base_addr = Module.findBaseAddress(soName);
        points.forEach((addr) => {
            Interceptor.attach(base_addr.add(addr), {
                onEnter: function () {
                    console.log("hit watch_point = " + addr);
                    ZZCallStack.printNativeCallstacks(this.context);
                }
            });
        });
    }
    ZZNativeFunc.watch_points = watch_points;
    function watch_svc_points(soName, points) {
        var base_addr = Module.findBaseAddress(soName);
        points.forEach((addr) => {
            Interceptor.attach(base_addr.add(addr), {
                onEnter: function () {
                    console.log("hit svc watch_point = " + addr);
                    // var contextStr = JSON.stringify(this.context)
                    // console.log("context = \n" + contextStr);
                    let x8 = get_syscall_desc(this.context);
                    console.log("syscall = " + x8);
                    ZZCallStack.printNativeCallstacks(this.context);
                }
            });
        });
    }
    ZZNativeFunc.watch_svc_points = watch_svc_points;
    function get_syscall_desc(context) {
        let syscallNum = context.x8.toString(10); //转成10进制字符串
        return ZZSyscallTable.arm64.get(syscallNum);
    }
    /******************************************* Stalker trace ***************************************************** */
    /**
     * stalker trace 指定指令，并在命中观察点的时候打印context信息。
     *
     * @param soName so的名字
     * @param hook_addr hook的偏移地址，先进行Hook，在Hook的回调中再stalker
     * @param start_offset stalker的起始地址
     * @param end_offset   stalker的结束地址
     * @param watch_points 观察点：一组偏移地址
     */
    function trace_instruction(soName, hook_addr, start_offset, end_offset, watch_points) {
        var base_addr = Module.findBaseAddress(soName);
        Interceptor.attach(base_addr.add(hook_addr), {
            onLeave: function (retval) {
                Stalker.unfollow(this.pid);
                console.log("stalker follow stop ==>");
            },
            onEnter: function (args) {
                console.log("stalker follow start ==>");
                this.pid = Process.getCurrentThreadId();
                Stalker.follow(this.pid, {
                    events: {
                        call: false,
                        ret: false,
                        exec: false,
                        block: false,
                        compile: false // block compiled: useful for coverage
                    },
                    // onReceive: Called with `events` containing a binary blob comprised of one or more GumEvent structs. 
                    // See `gumevent.h` for details about the format. Use `Stalker.parse()` to examine the data.
                    onReceive(events) {
                    },
                    transform: function (iterator) {
                        //iterator 对应一个基本块。基本块是一组连续的指令，没有分支。
                        var instruction = iterator.next();
                        //判断当前指令是不是原函数内的指令
                        const inst_addr = instruction.address;
                        var isModule = inst_addr.compare(base_addr.add(start_offset)) >= 0 && inst_addr.compare(base_addr.add(end_offset)) < 0;
                        //遍历执行该基本块的所有指令
                        do {
                            if (isModule) {
                                var inst_offset_addr = instruction.address.sub(base_addr);
                                console.log(inst_offset_addr + "\t:\t" + instruction);
                                if (watch_points.includes(inst_offset_addr)) {
                                    //命中时，打印上下文信息
                                    console.log("hit watch_point = " + inst_offset_addr);
                                    iterator.putCallout((context) => {
                                        var contextStr = JSON.stringify(context);
                                        console.log("context = \n" + contextStr);
                                    });
                                }
                            }
                            iterator.keep();
                        } while ((instruction = iterator.next()) !== null);
                    }
                });
            }
        });
    }
    ZZNativeFunc.trace_instruction = trace_instruction;
})(ZZNativeFunc || (ZZNativeFunc = {}));
✄
{"version":3,"file":"zzPatch.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzPatch.ts"],"names":[],"mappings":"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"}
✄
import { ZZStringUtils } from "./zzStringUtils.js";
export var ZZPatch64;
(function (ZZPatch64) {
    //======================================== NOP函数系列 =================================================
    /**
     * NOP函数，使其直接返回；支持arm64
     * @param funcBaseAddr
     */
    function nopFunc64(funcBaseAddr) {
        Memory.patchCode(funcBaseAddr, 4, code => {
            const cw = new Arm64Writer(code, { pc: funcBaseAddr });
            cw.putRet();
            cw.flush();
        });
    }
    ZZPatch64.nopFunc64 = nopFunc64;
    /**
     * 批量NOP函数
     * @param funcBaseAddrArr
     */
    function nopFunc64_batch(funcBaseAddrArr) {
        for (let i = 0; i < funcBaseAddrArr.length; i++) {
            nopFunc64(funcBaseAddrArr[i]);
        }
    }
    ZZPatch64.nopFunc64_batch = nopFunc64_batch;
    /**
     * NOP指定so中的指定函数
     * @param soName
     * @param offset
     */
    function nopFunc64_by_offset(soName, funcBaseOffsetAddr) {
        let targetModule = Process.findModuleByName(soName);
        if (!targetModule) {
            console.log("nopFunc64_by_offset==> 模块不存在: " + soName);
            return;
        }
        let funcBaseAddr = targetModule.base.add(funcBaseOffsetAddr);
        nopFunc64(funcBaseAddr);
    }
    ZZPatch64.nopFunc64_by_offset = nopFunc64_by_offset;
    /**
     * 批量NOP指定so中的指定函数
     * @param soName
     * @param funcBaseOffsetAddrArr
     * @returns
     */
    function nopFunc64_batch_by_offset(soName, funcBaseOffsetAddrArr) {
        let targetModule = Process.findModuleByName(soName);
        if (!targetModule) {
            console.log("nopFunc64_batch_by_offset==> 模块不存在: " + soName);
            return;
        }
        for (let i = 0; i < funcBaseOffsetAddrArr.length; i++) {
            nopFunc64(targetModule.base.add(funcBaseOffsetAddrArr[i]));
        }
    }
    ZZPatch64.nopFunc64_batch_by_offset = nopFunc64_batch_by_offset;
    //===================================== NOP指令处理 ================================================
    /**
     * NOP连续N条arm64指令，N默认为1
     * @param startAddr 起始地址
     * @param n         指令条数
     */
    function nopInsn64(startAddr, n = 1) {
        Memory.patchCode(startAddr, 4 * n, code => {
            const cw = new Arm64Writer(code, { pc: startAddr });
            for (let i = 0; i < n; i++) {
                cw.putNop();
            }
            cw.flush();
        });
    }
    ZZPatch64.nopInsn64 = nopInsn64;
    /**
     * 批量NOP
     * @param startAddr 地址数组
     */
    function nopInsn64_batch(addrs) {
        for (let i = 0; i < addrs.length; i++) {
            nopInsn64(addrs[i]);
        }
    }
    ZZPatch64.nopInsn64_batch = nopInsn64_batch;
    /**
     * 批量NOP
     * @param soName so名字
     * @param offsetAddrArr 偏移地址数组
     * @returns
     */
    function nopInsn64_batch_by_offset(soName, offsetAddrArr) {
        let targetModule = Process.findModuleByName(soName);
        if (!targetModule) {
            console.log("nop64_batch_by_offset==> 模块不存在: " + soName);
            return;
        }
        for (let i = 0; i < offsetAddrArr.length; i++) {
            nopInsn64(targetModule.base.add(offsetAddrArr[i]));
        }
    }
    ZZPatch64.nopInsn64_batch_by_offset = nopInsn64_batch_by_offset;
    /*********************************** Patch指令ARM64 ******************************************** */
    /**
     * patch 连续N条指令
     * @param startAddr 其实地址
     * @param codehex  N条指令对应的机器码(16进制表示)，每条指令占8个字符，支持空格隔开，例如：
     * '9511168d393ceaeeefb4ed6c03c60941' 或者 '9511168d 393ceaee efb4ed6c 03c60941'
     */
    function patchCode64_with_codeHex(startAddr, codehex) {
        //1.替换指令代码中的空格
        codehex = codehex.replace(/\s/g, '');
        const bytes = ZZStringUtils.hexToBytes(codehex);
        patchCode64_with_codeBytes(startAddr, bytes);
    }
    ZZPatch64.patchCode64_with_codeHex = patchCode64_with_codeHex;
    function patchCode64_with_codeBytes(startAddr, codeBytes) {
        Memory.patchCode(startAddr, codeBytes.length, code => {
            const cw = new Arm64Writer(code, { pc: startAddr });
            cw.putBytes(codeBytes);
            cw.flush();
        });
    }
    ZZPatch64.patchCode64_with_codeBytes = patchCode64_with_codeBytes;
    //批量patch
    function patchCode64_batch_by_codeHex(arr) {
        for (let tuple of arr) {
            let addr = tuple[0];
            let hexcode = tuple[1];
            patchCode64_with_codeHex(addr, hexcode);
        }
    }
    ZZPatch64.patchCode64_batch_by_codeHex = patchCode64_batch_by_codeHex;
    //批量patch
    function patchCode64_batch_by_codeBytes(arr) {
        for (let tuple of arr) {
            let addr = tuple[0];
            let codeBytes = tuple[1];
            patchCode64_with_codeBytes(addr, codeBytes);
        }
    }
    ZZPatch64.patchCode64_batch_by_codeBytes = patchCode64_batch_by_codeBytes;
})(ZZPatch64 || (ZZPatch64 = {}));
✄
{"version":3,"file":"zzPatch64.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzPatch64.ts"],"names":[],"mappings":"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"}
✄
import { ZZStringUtils } from "./zzStringUtils.js";
export var ZZPatch64;
(function (ZZPatch64) {
    function log(funcName, soName) {
        console.log("%s error ==> %s 模块不存在，请检查处理时机是否正确。", funcName, soName);
    }
    //======================================== NOP函数系列 =================================================
    /**
     * NOP函数，使其直接返回；支持arm64
     * @param funcBaseAddr
     */
    function nopFunc(funcBaseAddr) {
        Memory.patchCode(funcBaseAddr, 4, code => {
            const cw = new Arm64Writer(code, { pc: funcBaseAddr });
            cw.putRet();
            cw.flush();
        });
    }
    ZZPatch64.nopFunc = nopFunc;
    /**
     * 批量NOP函数
     * @param funcBaseAddrArr
     */
    function nopFunc_batch(funcBaseAddrArr) {
        for (let i = 0; i < funcBaseAddrArr.length; i++) {
            nopFunc(funcBaseAddrArr[i]);
        }
    }
    ZZPatch64.nopFunc_batch = nopFunc_batch;
    /**
     * 批量NOP指定so中的指定函数
     * @param soName
     * @param funcBaseOffsetAddrArr
     * @returns
     */
    function nopFunc_batch_by_offset(soName, funcBaseOffsetAddrArr) {
        let targetModule = Process.findModuleByName(soName);
        if (!targetModule) {
            log('nopFunc_batch_by_offset', soName);
            return;
        }
        for (let i = 0; i < funcBaseOffsetAddrArr.length; i++) {
            nopFunc(targetModule.base.add(funcBaseOffsetAddrArr[i]));
        }
    }
    ZZPatch64.nopFunc_batch_by_offset = nopFunc_batch_by_offset;
    //===================================== NOP指令处理 ================================================
    /**
     * NOP连续N条arm64指令，N默认为1
     * @param startAddr 起始地址
     * @param n         指令条数
     */
    function nopInsn(startAddr, n = 1) {
        Memory.patchCode(startAddr, 4 * n, code => {
            const cw = new Arm64Writer(code, { pc: startAddr });
            for (let i = 0; i < n; i++) {
                cw.putNop();
            }
            cw.flush();
        });
    }
    ZZPatch64.nopInsn = nopInsn;
    /**
     * 批量NOP
     * @param startAddr 地址数组
     */
    function nopInsn_batch(addrs) {
        for (let i = 0; i < addrs.length; i++) {
            nopInsn(addrs[i]);
        }
    }
    ZZPatch64.nopInsn_batch = nopInsn_batch;
    /**
     * 批量NOP
     * @param soName so名字
     * @param offsetAddrArr 偏移地址数组
     * @returns
     */
    function nopInsn_batch_by_offset(soName, offsetAddrArr) {
        let targetModule = Process.findModuleByName(soName);
        if (!targetModule) {
            log('nop64_batch_by_offset', soName);
            return;
        }
        for (let i = 0; i < offsetAddrArr.length; i++) {
            nopInsn(targetModule.base.add(offsetAddrArr[i]));
        }
    }
    ZZPatch64.nopInsn_batch_by_offset = nopInsn_batch_by_offset;
    /*********************************** Patch指令ARM64 ******************************************** */
    //patch
    function patchCode_with_codeBytes(startAddr, codeBytes) {
        Memory.patchCode(startAddr, codeBytes.length, code => {
            const cw = new Arm64Writer(code, { pc: startAddr });
            cw.putBytes(codeBytes);
            cw.flush();
        });
    }
    ZZPatch64.patchCode_with_codeBytes = patchCode_with_codeBytes;
    //批量patch
    function patchCode_batch_by_codeBytes(arr) {
        for (let tuple of arr) {
            let addr = tuple[0];
            let codeBytes = tuple[1];
            patchCode_with_codeBytes(addr, codeBytes);
        }
    }
    ZZPatch64.patchCode_batch_by_codeBytes = patchCode_batch_by_codeBytes;
    /**
     * patch 连续N条指令
     * @param startAddr 其实地址
     * @param codehex  N条指令对应的机器码(16进制表示)，每条指令占8个字符，支持空格隔开，例如：
     * '9511168d393ceaeeefb4ed6c03c60941' 或者 '9511168d 393ceaee efb4ed6c 03c60941'
     */
    function patchCode_with_codeHex(startAddr, codehex) {
        //1.替换指令代码中的空格
        codehex = codehex.replace(/\s/g, '');
        const bytes = ZZStringUtils.hexToBytes(codehex);
        patchCode_with_codeBytes(startAddr, bytes);
    }
    ZZPatch64.patchCode_with_codeHex = patchCode_with_codeHex;
    //批量patch
    function patchCode_batch_by_codeHex(arr) {
        for (let tuple of arr) {
            let addr = tuple[0];
            let hexcode = tuple[1];
            patchCode_with_codeHex(addr, hexcode);
        }
    }
    ZZPatch64.patchCode_batch_by_codeHex = patchCode_batch_by_codeHex;
})(ZZPatch64 || (ZZPatch64 = {}));
✄
{"version":3,"file":"zzR0trace.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzR0trace.js"],"names":[],"mappings":"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"}
✄
/**
 * trace Class / Method
 * 仓库地址：https://github.com/r0ysue/r0tracer
 *
 
使用：

1.导入文件：
import * as r0tracer from "../base/r0tracer.js"

2.添加如下代码：
r0tracer.configLite(true);
r0tracer.hookALL();

 *
 */
var isLite = false;
export function configLite(tempIsLite) {
    isLite = tempIsLite;
}
/******************************************* helper method ************************************************ */
//输出日志颜色设置
(function () {
    let Color = { RESET: "\x1b[39;49;00m", Black: "0;01", Blue: "4;01", Cyan: "6;01", Gray: "7;11", "Green": "2;01", Purple: "5;01", Red: "1;01", Yellow: "3;01" };
    let LightColor = { RESET: "\x1b[39;49;00m", Black: "0;11", Blue: "4;11", Cyan: "6;11", Gray: "7;01", "Green": "2;11", Purple: "5;11", Red: "1;11", Yellow: "3;11" };
    var colorPrefix = '\x1b[3', colorSuffix = 'm';
    for (let c in Color) {
        if (c == "RESET")
            continue;
        console[c] = function (message) {
            console.log(colorPrefix + Color[c] + colorSuffix + message + Color.RESET);
        };
        console["Light" + c] = function (message) {
            console.log(colorPrefix + LightColor[c] + colorSuffix + message + Color.RESET);
        };
    }
})();
var ByPassTracerPid = function () {
    var fgetsPtr = Module.findExportByName("libc.so", "fgets");
    var fgets = new NativeFunction(fgetsPtr, 'pointer', ['pointer', 'int', 'pointer']);
    Interceptor.replace(fgetsPtr, new NativeCallback(function (buffer, size, fp) {
        var retval = fgets(buffer, size, fp);
        var bufstr = Memory.readUtf8String(buffer);
        if (bufstr.indexOf("TracerPid:") > -1) {
            Memory.writeUtf8String(buffer, "TracerPid:\t0");
            console.log("tracerpid replaced: " + Memory.readUtf8String(buffer));
        }
        return retval;
    }, 'pointer', ['pointer', 'int', 'pointer']));
};
// setImmediate(ByPassTracerPid);
function uniqBy(array, key) {
    var seen = {};
    return array.filter(function (item) {
        var k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
}
function hasOwnProperty(obj, name) {
    try {
        return obj.hasOwnProperty(name) || name in obj;
    }
    catch (e) {
        return obj.hasOwnProperty(name);
    }
}
function getHandle(object) {
    if (hasOwnProperty(object, '$handle')) {
        if (object.$handle != undefined) {
            return object.$handle;
        }
    }
    if (hasOwnProperty(object, '$h')) {
        if (object.$h != undefined) {
            return object.$h;
        }
    }
    return null;
}
//查看域值
function inspectObject(obj, input) {
    var isInstance = false;
    var obj_class = null;
    if (getHandle(obj) === null) {
        obj_class = obj.class;
    }
    else {
        var Class = Java.use("java.lang.Class");
        obj_class = Java.cast(obj.getClass(), Class);
        isInstance = true;
    }
    input = input.concat("Inspecting Fields: => ", isInstance, " => ", obj_class.toString());
    input = input.concat("\r\n");
    var fields = obj_class.getDeclaredFields();
    for (var i in fields) {
        if (isInstance || Boolean(fields[i].toString().indexOf("static ") >= 0)) {
            // output = output.concat("\t\t static static static " + fields[i].toString());
            var className = obj_class.toString().trim().split(" ")[1];
            // console.Red("className is => ",className);
            var fieldName = fields[i].toString().split(className.concat(".")).pop();
            var fieldType = fields[i].toString().split(" ").slice(-2)[0];
            var fieldValue = undefined;
            if (!(obj[fieldName] === undefined))
                fieldValue = obj[fieldName].value;
            input = input.concat(fieldType + " \t" + fieldName + " => ", fieldValue + " => ", JSON.stringify(fieldValue));
            input = input.concat("\r\n");
        }
    }
    return input;
}
/****************************************************  trace Method/Class  ******************************************************* */
export function traceClass(targetClass) {
    if (Java.available) {
        Java.perform(function () {
            JavaTraceClass(targetClass);
        });
    }
    else if (ObjC.available) {
        IosTraceClass(targetClass);
    }
    else {
        console.log("please connect to either iOS or Android device ...");
    }
}
// trace单个类的所有静态和实例方法包括构造方法 trace a specific Java Method
function traceJavaMethod(targetClassMethod) {
    var delim = targetClassMethod.lastIndexOf(".");
    if (delim === -1)
        return;
    var targetClass = targetClassMethod.slice(0, delim);
    var targetMethod = targetClassMethod.slice(delim + 1, targetClassMethod.length);
    var hook = Java.use(targetClass);
    if (!hook[targetMethod]) {
        return;
    }
    var overloadCount = hook[targetMethod].overloads.length;
    console.Red("Tracing Method : " + targetClassMethod + " [" + overloadCount + " overload(s)]");
    for (var i = 0; i < overloadCount; i++) {
        hook[targetMethod].overloads[i].implementation = function () {
            //初始化输出
            var output = "";
            //画个横线
            for (var p = 0; p < 100; p++) {
                output = output.concat("==");
            }
            //域值
            if (!isLite) {
                output = inspectObject(this, output);
            }
            //进入函数
            output = output.concat("\n*** entered " + targetClassMethod);
            output = output.concat("\r\n");
            // if (arguments.length) console.Black();
            //参数
            var retval = this[targetMethod].apply(this, arguments);
            if (!isLite) {
                for (var j = 0; j < arguments.length; j++) {
                    output = output.concat("arg[" + j + "]: " + arguments[j] + " => " + JSON.stringify(arguments[j]));
                    output = output.concat("\r\n");
                }
                //调用栈
                output = output.concat(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
                //返回值
                output = output.concat("\nretval: " + retval + " => " + JSON.stringify(retval));
            }
            // inspectObject(this)
            //离开函数
            output = output.concat("\n*** exiting " + targetClassMethod);
            //最终输出
            // console.Black(output);
            var r = parseInt((Math.random() * 7).toFixed(0));
            var i = r;
            var printOutput = null;
            switch (i) {
                case 1:
                    printOutput = console.Red;
                    break;
                case 2:
                    printOutput = console.Yellow;
                    break;
                case 3:
                    printOutput = console.Green;
                    break;
                case 4:
                    printOutput = console.Cyan;
                    break;
                case 5:
                    printOutput = console.Blue;
                    break;
                case 6:
                    printOutput = console.Gray;
                    break;
                default:
                    printOutput = console.Purple;
            }
            printOutput(output);
            return retval;
        };
    }
}
function JavaTraceClass(targetClass) {
    //Java.use是新建一个对象哈，大家还记得么？
    var hook = Java.use(targetClass);
    //利用反射的方式，拿到当前类的所有方法
    var methods = hook.class.getDeclaredMethods();
    //建完对象之后记得将对象释放掉哈
    hook.$dispose;
    //将方法名保存到数组中
    var parsedMethods = [];
    var output = "";
    output = output.concat("\tSpec: => \r\n");
    methods.forEach(function (method) {
        output = output.concat(method.toString());
        output = output.concat("\r\n");
        parsedMethods.push(method.toString().replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1]);
    });
    //去掉一些重复的值
    var Targets = uniqBy(parsedMethods, JSON.stringify);
    // targets = [];
    var constructors = hook.class.getDeclaredConstructors();
    if (constructors.length > 0) {
        constructors.forEach(function (constructor) {
            output = output.concat("Tracing ", constructor.toString());
            output = output.concat("\r\n");
        });
        Targets = Targets.concat("$init");
    }
    //对数组中所有的方法进行hook，
    Targets.forEach(function (targetMethod) {
        traceJavaMethod(targetClass + "." + targetMethod);
    });
    //画个横线
    for (var p = 0; p < 100; p++) {
        output = output.concat("+");
    }
    console.Green(output);
}
function print_arguments(args) {
    /*
    Frida's Interceptor has no information about the number of arguments, because there is no such
    information available at the ABI level (and we don't rely on debug symbols).
    
    I have implemented this function in order to try to determine how many arguments a method is using.
    It stops when:
        - The object is not nil
        - The argument is not the same as the one before
     */
    var n = 100;
    var last_arg = '';
    for (var i = 2; i < n; ++i) {
        var arg = (new ObjC.Object(args[i])).toString();
        if (arg == 'nil' || arg == last_arg) {
            break;
        }
        last_arg = arg;
        return ' args' + (i - 2) + ': ' + (new ObjC.Object(args[i])).toString();
    }
}
function IosTraceClass(targetClass) {
    console.log("Entering ios hooking => " + targetClass);
    if (ObjC.classes.hasOwnProperty(targetClass)) {
        //console.log("[+] Class: " + className);
        //var methods = ObjC.classes[className].$methods;
        var methods = ObjC.classes[targetClass].$ownMethods;
        methods.forEach(function (method) {
            console.log("hooking " + method);
            try {
                Interceptor.attach(ObjC.classes[targetClass][method].implementation, {
                    onEnter: function (args) {
                        this.output = "";
                        this.output = this.output.concat("[*] Detected call to: " + targetClass + " -> " + method);
                        this.output = this.output.concat("\r\n");
                        this.output = this.output.concat(print_arguments(args));
                        this.output = this.output.concat("\r\n");
                        this.output = this.output.concat(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n\t"));
                        // this.output = this.output.concat("\r\n")
                        // console.log(JSON.stringify(args))
                        // console.log(JSON.stringify(this.context, null, 4))
                        // console.log(ObjC.classes.NSThread.callStackSymbols().toString())
                    }, onLeave: function (ret) {
                        // console.log("ret value is => ",ret ,ObjC.object(ret).toString(), "=> ",JSON.stringify(ObjC.object(ret)))
                        this.output = this.output.concat("\r\nios return value => ", ret, ObjC.Object(ret).toString(), "\r\n");
                        this.output = this.output.concat("\r\n");
                        console.log(this.output);
                    }
                });
            }
            catch (error) {
                console.log("ios hooking failed error is => ", error);
            }
        });
    }
}
/****************************************************  hook  ******************************************************* */
export function hook(white, black, target = null) {
    if (Java.available) {
        Java.perform(function () {
            javahook(white, black, target);
        });
    }
    else if (ObjC.available) {
        ioshook(white, black);
    }
    else {
        console.log("please connect to either iOS or Android device ...");
    }
}
function javahook(white, black, target = null) {
    console.Red("start");
    if (!(target === null)) {
        console.LightGreen("Begin enumerateClassLoaders ...");
        Java.enumerateClassLoaders({
            onMatch: function (loader) {
                try {
                    if (loader.findClass(target)) {
                        console.Red("Successfully found loader");
                        console.Blue(loader);
                        Java.classFactory.loader = loader;
                        console.Red("Switch Classloader Successfully ! ");
                    }
                }
                catch (error) {
                    console.Red(" continuing :" + error);
                }
            },
            onComplete: function () {
                console.Red("EnumerateClassloader END");
            }
        });
    }
    console.Red("Begin Search Class...");
    var targetClasses = new Array();
    Java.enumerateLoadedClasses({
        onMatch: function (className) {
            if (className.toString().toLowerCase().indexOf(white.toLowerCase()) >= 0 &&
                (black == null || black == '' || className.toString().toLowerCase().indexOf(black.toLowerCase()) < 0)) {
                console.Black("Found Class => " + className);
                targetClasses.push(className);
                traceClass(className);
            }
        }, onComplete: function () {
            console.Black("Search Class Completed!");
        }
    });
    var output = "On Total Tracing :" + String(targetClasses.length) + " classes :\r\n";
    targetClasses.forEach(function (target) {
        output = output.concat(target);
        output = output.concat("\r\n");
    });
    console.Green(output + "Start Tracing ...");
}
function ioshook(white, black) {
    console.log("iOS begin search classed ...");
    const resolver = new ApiResolver('objc');
    var rule = '*[*' + white + '* *:*]';
    // var rule = '*[*' + white + '* *:*]';
    console.log("Search rule is => ", rule);
    const matches = resolver.enumerateMatches(rule);
    var targetClasses = new Set();
    matches.forEach((match) => {
        if (match.name.toString().toLowerCase().indexOf(String(black).toLowerCase()) < 0) {
            console.log(JSON.stringify(match) + "=>" + match["name"].toString().split('[')[1].toString().split(' ')[0]);
            targetClasses.add(match["name"].toString().split('[')[1].toString().split(' ')[0]);
            //     Interceptor.attach(match.address,{
            //         onEnter: function(args) {
            //         this.output = ""
            //         this.output = this.output.concat( "[*] Detected call to: " + match.name)
            //         this.output = this.output.concat(print_arguments(args))
            //         this.output = this.output.concat(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n\t"))
            //         // console.log(JSON.stringify(args))
            //         // console.log(JSON.stringify(this.context, null, 4))
            //         // console.log(ObjC.classes.NSThread.callStackSymbols().toString())
            //         } , onLeave:function(ret){
            //         // console.log("ret value is => ",ret ,ObjC.object(ret).toString(), "=> ",JSON.stringify(ObjC.object(ret)))
            //         this.output = this.output.concat("\r\nios return value => ",ret, ObjC.Object(ret).toString(),"\r\n")
            //         console.log(this.output)
            //     }
            // })
        }
    });
    targetClasses.forEach((className) => {
        console.log("ios final hooking => ", className);
        traceClass(className);
    });
}
/****************************************************  hookALL  ******************************************************* */
export function hookALL() {
    if (Java.available) {
        Java.perform(function () {
            JavahookALL();
        });
    }
    else if (ObjC.available) {
        ioshookALL();
    }
    else {
        console.log("please connect to either iOS or Android device ...");
    }
}
function ioshookALL() {
    console.log("[*] iOS Started: Hook all methods of all app only classes");
    var free = new NativeFunction(Module.findExportByName(null, 'free'), 'void', ['pointer']);
    var copyClassNamesForImage = new NativeFunction(Module.findExportByName(null, 'objc_copyClassNamesForImage'), 'pointer', ['pointer', 'pointer']);
    var p = Memory.alloc(Process.pointerSize);
    Memory.writeUInt(p, 0);
    var path = ObjC.classes.NSBundle.mainBundle().executablePath().UTF8String();
    var pPath = Memory.allocUtf8String(path);
    var pClasses = copyClassNamesForImage(pPath, p);
    var count = Memory.readUInt(p);
    var classesArray = new Array(count);
    for (var i = 0; i < count; i++) {
        var pClassName = Memory.readPointer(pClasses.add(i * Process.pointerSize));
        classesArray[i] = Memory.readUtf8String(pClassName);
        var className = classesArray[i];
        traceClass(className);
    }
    free(pClasses);
    console.log("[*] iOS Completed: Hook all methods of all app only classes");
}
function hookALLappClasses(loader) {
    if (loader.$className.toString().indexOf("java.lang.BootClassLoader") >= 0) {
        return;
    }
    var class_BaseDexClassLoader = Java.use("dalvik.system.BaseDexClassLoader");
    var pathcl = Java.cast(loader, class_BaseDexClassLoader);
    console.log("classloader pathList", pathcl.pathList.value);
    var class_DexPathList = Java.use("dalvik.system.DexPathList");
    var dexPathList = Java.cast(pathcl.pathList.value, class_DexPathList);
    console.log("classloader dexElements:", dexPathList.dexElements.value.length);
    var class_DexFile = Java.use("dalvik.system.DexFile");
    var class_DexPathList_Element = Java.use("dalvik.system.DexPathList$Element");
    for (var i = 0; i < dexPathList.dexElements.value.length; i++) {
        var dexPathList_Element = Java.cast(dexPathList.dexElements.value[i], class_DexPathList_Element);
        // console.log("classloader .dexFile:",dexPathList_Element.dexFile.value);
        //可能为空 为空跳过
        if (dexPathList_Element.dexFile.value) {
            var dexFile = Java.cast(dexPathList_Element.dexFile.value, class_DexFile);
            var mcookie = dexFile.mCookie.value;
            // console.log(".mCookie",dexFile.mCookie.value);
            if (dexFile.mInternalCookie.value) {
                mcookie = dexFile.mInternalCookie.value;
            }
            var classNameArr = dexPathList_Element.dexFile.value.getClassNameList(mcookie);
            console.log("dexFile.getClassNameList.length:", classNameArr.length);
            console.log("r0ysue-Enumerate ClassName Start");
            for (var i = 0; i < classNameArr.length; i++) {
                if (classNameArr[i].indexOf("android.") < 0 &&
                    classNameArr[i].indexOf("androidx.") < 0 &&
                    classNameArr[i].indexOf("java.") < 0 &&
                    classNameArr[i].indexOf("javax.") < 0) {
                    console.log("r0ysue  ", classNameArr[i]);
                    traceClass(classNameArr[i]);
                }
            }
            console.log("r0ysue-Enumerate ClassName End");
        }
    }
}
function JavahookALL() {
    console.log("Entering Android hookALL procedure ...");
    Java.enumerateClassLoaders({
        onMatch: function (loader) {
            try {
                if (loader.toString().indexOf("base.apk") >= 0 &&
                    loader.toString().indexOf(".jar") < 0) {
                    console.Red("Successfully found app specifec classloader");
                    console.Blue(loader);
                    Java.classFactory.loader = loader;
                    console.Red("Switch Classloader Successfully ! ");
                    hookALLappClasses(loader);
                }
            }
            catch (error) {
                console.Red(" continuing :" + error);
            }
        },
        onComplete: function () {
            console.Red("EnumerateClassloader END");
        }
    });
}
/****************************************************  main()  ******************************************************* */
function main() {
    console.Purple("r0tracer begin ... !");
    //0. 增加精简模式，就是以彩虹色只显示进出函数。默认是关闭的，注释此行打开精简模式。
    //isLite = true;
    /*
    //以下三种模式，取消注释某一行以开启
    */
    //A. 简易trace单个类
    // traceClass("ViewController")
    //B. 黑白名单trace多个函数，第一个参数是白名单(包含关键字)，第二个参数是黑名单(不包含的关键字)
    // hook("com.uzmap.pkg.EntranceActivity", "$");
    hook("ViewController", "UI");
    //C. 报某个类找不到时，将某个类名填写到第三个参数，比如找不到com.roysue.check类。（前两个参数依旧是黑白名单）
    // hook("com.roysue.check"," ","com.roysue.check");  
    //D. 新增hookALL() 打开这个模式的情况下，会hook属于app自己的所有业务类，小型app可用 ，中大型app几乎会崩溃，经不起
    // hookALL()
}
/*
//setImmediate是立即执行函数，setTimeout是等待毫秒后延迟执行函数
//二者在attach模式下没有区别
//在spawn模式下，hook系统API时如javax.crypto.Cipher建议使用setImmediate立即执行，不需要延时
//在spawn模式下，hook应用自己的函数或含壳时，建议使用setTimeout并给出适当的延时(500~5000)
*/
// setImmediate(main)
//
// setTimeout(main, 2000);
// 玄之又玄，众妙之门
// Frida的崩溃有时候真的是玄学，大项目一崩溃根本不知道是哪里出的问题，这也是小而专的项目也有一丝机会的原因
// Frida自身即会经常崩溃，建议多更换Frida(客/服要配套)版本/安卓版本，我自己常用的组合是两部手机，Frida12.8.0全家桶+安卓8.1.0，和Frida14.2.2全家桶+安卓10 
✄
{"version":3,"file":"zzStalkerTrace.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzStalkerTrace.js"],"names":[],"mappings":"AAEA;;;;;;;;;;;;;;;;;;;GAmBG;AAGH,IAAI,QAAQ,GAAG,EAAE,CAAC;AAClB,IAAI,OAAO,GAAG,IAAI,GAAG,EAAE,CAAC;AACxB,IAAI,YAAY,GAAG,IAAI,GAAG,EAAE,CAAC;AAC7B,IAAI,QAAQ,GAAG,IAAI,GAAG,EAAE,CAAC;AACzB,OAAO,CAAC,GAAG,CAAC,4DAA4D,CAAC,CAAA;AAEzE,SAAS,eAAe,CAAC,OAAO;IAC5B,IAAI,IAAI,GAAG,EAAE,CAAA;IACb,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;IACvB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IACtB,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,IAAI,EAAE,OAAO,CAAC,EAAE,CAAC,CAAC;IAC/B,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,CAAC;IACjC,QAAQ,CAAC,GAAG,CAAC,KAAK,EAAE,OAAO,CAAC,GAAG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"}
✄
/**
 * 指令trace
 * 仓库地址：https://github.com/Virenz/frida-js/
 *
 
如何使用：
1.导入文件：
import * as fridaTrace from "../base/FridaTrace.js"

2.添加trace代码：

SOUtils.hook_dlopen("libencrypt.so", function () {
    //onEnter
}, function() {
    //onLeave
    fridaTrace.traceInsn("libencrypt.so", 0x3D1A0)
});
 

 */
let pre_regs = [];
let infoMap = new Map();
let detailInsMap = new Map();
let regs_map = new Map();
console.log("-------------- frida stalkertrace 初始化 --------------------");
function formatArm64Regs(context) {
    let regs = [];
    regs.push(context.x0);
    regs.push(context.x1);
    regs.push(context.x2);
    regs.push(context.x3);
    regs.push(context.x4);
    regs.push(context.x5);
    regs.push(context.x6);
    regs.push(context.x7);
    regs.push(context.x8);
    regs.push(context.x9);
    regs.push(context.x10);
    regs.push(context.x11);
    regs.push(context.x12);
    regs.push(context.x13);
    regs.push(context.x14);
    regs.push(context.x15);
    regs.push(context.x16);
    regs.push(context.x17);
    regs.push(context.x18);
    regs.push(context.x19);
    regs.push(context.x20);
    regs.push(context.x21);
    regs.push(context.x22);
    regs.push(context.x23);
    regs.push(context.x24);
    regs.push(context.x25);
    regs.push(context.x26);
    regs.push(context.x27);
    regs.push(context.x28);
    regs.push(context.fp);
    regs.push(context.lr);
    regs.push(context.sp);
    regs.push(context.pc);
    regs_map.set('x0', context.x0);
    regs_map.set('x1', context.x1);
    regs_map.set('x2', context.x2);
    regs_map.set('x3', context.x3);
    regs_map.set('x4', context.x4);
    regs_map.set('x5', context.x5);
    regs_map.set('x6', context.x6);
    regs_map.set('x7', context.x7);
    regs_map.set('x8', context.x8);
    regs_map.set('x9', context.x9);
    regs_map.set('x10', context.x10);
    regs_map.set('x11', context.x11);
    regs_map.set('x12', context.x12);
    regs_map.set('x13', context.x13);
    regs_map.set('x14', context.x14);
    regs_map.set('x15', context.x15);
    regs_map.set('x16', context.x16);
    regs_map.set('x17', context.x17);
    regs_map.set('x18', context.x18);
    regs_map.set('x19', context.x19);
    regs_map.set('x20', context.x20);
    regs_map.set('x21', context.x21);
    regs_map.set('x22', context.x22);
    regs_map.set('x23', context.x23);
    regs_map.set('x24', context.x24);
    regs_map.set('x25', context.x25);
    regs_map.set('x26', context.x26);
    regs_map.set('x27', context.x27);
    regs_map.set('x28', context.x28);
    regs_map.set('fp', context.fp);
    regs_map.set('lr', context.lr);
    regs_map.set('sp', context.sp);
    regs_map.set('pc', context.pc);
    return regs;
}
function getRegsString(index) {
    let reg;
    if (index === 31) {
        reg = "sp";
    }
    else {
        reg = "x" + index;
    }
    return reg;
}
//判断寄存器是否发生变化
function isRegsChange(context, ins) {
    let currentRegs = formatArm64Regs(context);
    let entity = {};
    let logInfo = "";
    // 打印寄存器信息
    for (let i = 0; i < 32; i++) {
        if (i === 30) {
            continue;
        }
        let preReg = pre_regs[i] ? pre_regs[i] : 0x0;
        let currentReg = currentRegs[i];
        if (Number(preReg) !== Number(currentReg)) {
            if (logInfo === "") {
                //尝试读取string
                let changeString = "";
                try {
                    let nativePointer = new NativePointer(currentReg);
                    changeString = nativePointer.readCString();
                }
                catch (e) {
                    changeString = "";
                }
                if (changeString !== "") {
                    currentReg = currentReg + " (" + changeString + ")";
                }
                logInfo = " " + getRegsString(i) + ": " + preReg + " --> " + currentReg + ", ";
            }
            else {
                logInfo = logInfo + " " + getRegsString(i) + ": " + preReg + " --> " + currentReg + ", ";
            }
        }
    }
    entity.info = logInfo;
    pre_regs = currentRegs;
    return entity;
}
// -------------------------------------- Export -------------------------------------------------
/**
 * stalkerTraceRange
 * @param {*} tid 当前线程ID
 * @param {*} base module的基址
 * @param {*} size module的大小
 */
export function stalkerTraceRange(tid, base, size) {
    Stalker.follow(tid, {
        transform: (iterator) => {
            // 遍历每一条指令，判断当前指令是否在模块内
            const instruction = iterator.next();
            const startAddress = instruction.address;
            const isModuleCode = startAddress.compare(base) >= 0 && startAddress.compare(base.add(size)) < 0;
            do {
                iterator.keep();
                if (isModuleCode) {
                    let lastInfo = '[' + ptr(instruction["address"] - base) + ']' + '\t' + ptr(instruction["address"]) + '\t' + (instruction + ';').padEnd(30, ' ');
                    let address = instruction.address - base;
                    detailInsMap.set(String(address), JSON.stringify(instruction));
                    infoMap.set(String(address), lastInfo);
                    iterator.putCallout((context) => {
                        let offset = Number(context.pc) - base;
                        let detailIns = detailInsMap.get(String(offset));
                        let insinfo = infoMap.get(String(offset));
                        let entity = isRegsChange(context, detailIns);
                        let info = insinfo + '\t#' + entity.info;
                        let next_pc = context.pc.add(4);
                        let insn_next = Instruction.parse(next_pc);
                        insinfo = '[' + ptr(insn_next["address"] - base) + ']' + '\t' + ptr(insn_next["address"]) + '\t' + (insn_next + ';').padEnd(30, ' ');
                        let mnemonic = insn_next.mnemonic;
                        if (mnemonic.startsWith("b.") || mnemonic === "b" || mnemonic === "bl" || mnemonic === "br" || mnemonic === "bx" || mnemonic.startsWith("bl") || mnemonic.startsWith("bx")) {
                            info = info + '\n' + insinfo + '\t#';
                        }
                        console.log(info);
                    });
                }
            } while (iterator.next() !== null);
        }
    });
}
// ---------------------------------------------------------------------------------------
// traceInsn(soName, hook_offset_addr)
// ---------------------------------------------------------------------------------------
export function traceInsn(soName, hook_offset_addr, stopOnLeave = true) {
    //1.获取模块基址和大小
    let targetModule = Process.findModuleByName(soName);
    let base_addr = targetModule.base;
    let base_size = targetModule.size;
    let hook_addr = base_addr.add(hook_offset_addr);
    //2.开始hook并trace
    Interceptor.attach(hook_addr, {
        onEnter: function (args) {
            //开始trace
            this.tid = Process.getCurrentThreadId();
            stalkerTraceRange(this.tid, base_addr, base_size);
        },
        onLeave: function (ret) {
            if (stopOnLeave) {
                Stalker.unfollow(this.tid);
                Stalker.garbageCollect();
                console.log('ret: ' + ret);
                console.log('-----end trace------');
            }
        }
    });
}
// ---------------------------------------------------------------------------------------
// traceFunction(soName, hook_offset_addr)
// ---------------------------------------------------------------------------------------
// 打印调用堆栈
export function traceFunction(soName, hook_offset_addr, stopOnLeave = true) {
    console.log("-------------- traceFunction -------------------");
    //1.获取模块基址和大小
    let targetModule = Process.findModuleByName(soName);
    let base_addr = targetModule.base;
    let base_size = targetModule.size;
    let hook_addr = base_addr.add(hook_offset_addr);
    //2.开始hook并trace
    Interceptor.attach(hook_addr, {
        onEnter: function (args) {
            this.tid = Process.getCurrentThreadId();
            Stalker.follow(this.tid, {
                events: {
                    call: true
                },
                onReceive: function (events) {
                    let allEvents = Stalker.parse(events);
                    let first_depth = 0;
                    let is_first = true;
                    for (let i = 0; i < allEvents.length; i++) {
                        // 调用的流程, location是哪里发生的调用, target是调用到了哪里
                        if (allEvents[i][0] === "call") {
                            let location = allEvents[i][1]; // 调用地址
                            let target = allEvents[i][2]; // 目标地址
                            let depth = allEvents[i][3]; // depth
                            let description = '';
                            let space_num = '';
                            if (target.compare(base_addr) >= 0 && target.compare(base_addr.add(base_size)) < 0) {
                                if (is_first) {
                                    is_first = false;
                                    first_depth = depth;
                                }
                                let location_description = ' [' + ptr(location).sub(base_addr) + '] ';
                                let target_description = ' [' + ptr(target).sub(base_addr) + ']';
                                let length = (depth - first_depth);
                                for (let j = 0; j < length; j++) {
                                    space_num = space_num + ' ';
                                }
                                description = space_num + "call func: " + target_description + '( at offset: ' + location_description + ')' + ' -- ' + length;
                                console.log(description);
                            }
                        }
                    }
                }
            });
        }, onLeave: function (retval) {
            if (stopOnLeave) {
                Stalker.unfollow(this.tid);
            }
        }
    });
}
✄
{"version":3,"file":"zzStringUtils.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzStringUtils.ts"],"names":[],"mappings":"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"}
✄
import { Buffer } from "node:buffer";
/**
 * string, bytes, hex 三者之间互转操作
 *
 */
export var ZZStringUtils;
(function (ZZStringUtils) {
    /******************* bytes 与 字符串 互转  ************************/
    //bytes转字符串
    function bytesToString(bytes) {
        let tempBytes = Buffer.from(bytes);
        var str = '';
        for (var i = 0; i < tempBytes.length; i++) {
            str += String.fromCharCode(tempBytes[i]);
        }
        return str;
    }
    ZZStringUtils.bytesToString = bytesToString;
    //字符串转bytes
    function stringToBytes(str) {
        return hexToBytes(stringToHex(str));
    }
    ZZStringUtils.stringToBytes = stringToBytes;
    /******************* hex字符串 与 字符串 互转  ************************/
    //hex字符串转字符串
    function hexToString(hexStr) {
        let hex = hexStr.toString();
        let str = '';
        for (let i = 0; i < hex.length; i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    }
    ZZStringUtils.hexToString = hexToString;
    //字符串转hex
    function stringToHex(str) {
        return str
            .split('')
            .map(function (c) {
            return ('0' + c.charCodeAt(0).toString(16)).slice(-2); // '0' 用于确保每个 Unicode 编码的十六进制表示都有两位。例如：'065' => '65', '06' => '06'
        })
            .join('');
    }
    ZZStringUtils.stringToHex = stringToHex;
    /******************* hex字符串 与 bytes 互转  ************************/
    //hex字符串转bytes
    function hexToBytes(hexStr) {
        let bytes = [];
        for (let c = 0; c < hexStr.length; c += 2)
            bytes.push(parseInt(hexStr.substr(c, 2), 16));
        return bytes;
    }
    ZZStringUtils.hexToBytes = hexToBytes;
    //bytes转hex字符串
    function bytesToHex(bytes) {
        let tempBytes = Buffer.from(bytes);
        var str = '';
        for (var i = 0; i < tempBytes.length; i++) {
            str += ('00' + (tempBytes[i] & 0xFF).toString(16)).slice(-2);
        }
        return str;
    }
    ZZStringUtils.bytesToHex = bytesToHex;
    /******************* string 与 bytes 互转  ************************/
    function bytesToBase64(bytes) {
        //bytes = Java.array('byte', bytes);
        return Buffer.from(bytes).toString('base64');
    }
    ZZStringUtils.bytesToBase64 = bytesToBase64;
    function base64ToBytes(base64) {
        return Array.from(Buffer.from(base64, 'base64'));
    }
    ZZStringUtils.base64ToBytes = base64ToBytes;
})(ZZStringUtils || (ZZStringUtils = {}));
✄
{"version":3,"file":"zzSyscallTable.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["base/zzSyscallTable.ts"],"names":[],"mappings":"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"}
✄
export var ZZSyscallTable;
(function (ZZSyscallTable) {
    //arm64系统调用表
    ZZSyscallTable.arm64 = new Map([
        ['0', 'io_setup'],
        ['1', 'io_destroy'],
        ['2', 'io_submit'],
        ['3', 'io_cancel'],
        ['4', 'io_getevents'],
        ['5', 'setxattr'],
        ['6', 'lsetxattr'],
        ['7', 'fsetxattr'],
        ['8', 'getxattr'],
        ['9', 'lgetxattr'],
        ['10', 'fgetxattr'],
        ['11', 'listxattr'],
        ['12', 'llistxattr'],
        ['13', 'flistxattr'],
        ['14', 'removexattr'],
        ['15', 'lremovexattr'],
        ['16', 'fremovexattr'],
        ['17', 'getcwd'],
        ['18', 'lookup_dcookie'],
        ['19', 'eventfd2'],
        ['20', 'epoll_create1'],
        ['21', 'epoll_ctl'],
        ['22', 'epoll_pwait'],
        ['23', 'dup'],
        ['24', 'dup3'],
        ['25', 'fcntl'],
        ['26', 'inotify_init1'],
        ['27', 'inotify_add_watch'],
        ['28', 'inotify_rm_watch'],
        ['29', 'ioctl'],
        ['30', 'ioprio_set'],
        ['31', 'ioprio_get'],
        ['32', 'flock'],
        ['33', 'mknodat'],
        ['34', 'mkdirat'],
        ['35', 'unlinkat'],
        ['36', 'symlinkat'],
        ['37', 'linkat'],
        ['38', 'renameat'],
        ['39', 'umount2'],
        ['40', 'mount'],
        ['41', 'pivot_root'],
        ['42', 'nfsservctl'],
        ['43', 'statfs'],
        ['44', 'fstatfs'],
        ['45', 'truncate'],
        ['46', 'ftruncate'],
        ['47', 'fallocate'],
        ['48', 'faccessat'],
        ['49', 'chdir'],
        ['50', 'fchdir'],
        ['51', 'chroot'],
        ['52', 'fchmod'],
        ['53', 'fchmodat'],
        ['54', 'fchownat'],
        ['55', 'fchown'],
        ['56', 'openat'],
        ['57', 'close'],
        ['58', 'vhangup'],
        ['59', 'pipe2'],
        ['60', 'quotactl'],
        ['61', 'getdents64'],
        ['62', 'lseek'],
        ['63', 'read'],
        ['64', 'write'],
        ['65', 'readv'],
        ['66', 'writev'],
        ['67', 'pread64'],
        ['68', 'pwrite64'],
        ['69', 'preadv'],
        ['70', 'pwritev'],
        ['71', 'sendfile'],
        ['72', 'pselect6'],
        ['73', 'ppoll'],
        ['74', 'signalfd4'],
        ['75', 'vmsplice'],
        ['76', 'splice'],
        ['77', 'tee'],
        ['78', 'readlinkat'],
        ['79', 'newfstatat'],
        ['80', 'fstat'],
        ['81', 'sync'],
        ['82', 'fsync'],
        ['83', 'fdatasync'],
        ['84', 'sync_file_range'],
        ['85', 'timerfd_create'],
        ['86', 'timerfd_settime'],
        ['87', 'timerfd_gettime'],
        ['88', 'utimensat'],
        ['89', 'acct'],
        ['90', 'capget'],
        ['91', 'capset'],
        ['92', 'personality'],
        ['93', 'exit'],
        ['94', 'exit_group'],
        ['95', 'waitid'],
        ['96', 'set_tid_address'],
        ['97', 'unshare'],
        ['98', 'futex'],
        ['99', 'set_robust_list'],
        ['100', 'get_robust_list'],
        ['101', 'nanosleep'],
        ['102', 'getitimer'],
        ['103', 'setitimer'],
        ['104', 'kexec_load'],
        ['105', 'init_module'],
        ['106', 'delete_module'],
        ['107', 'timer_create'],
        ['108', 'timer_gettime'],
        ['109', 'timer_getoverrun'],
        ['110', 'timer_settime'],
        ['111', 'timer_delete'],
        ['112', 'clock_settime'],
        ['113', 'clock_gettime'],
        ['114', 'clock_getres'],
        ['115', 'clock_nanosleep'],
        ['116', 'syslog'],
        ['117', 'ptrace'],
        ['118', 'sched_setparam'],
        ['119', 'sched_setscheduler'],
        ['120', 'sched_getscheduler'],
        ['121', 'sched_getparam'],
        ['122', 'sched_setaffinity'],
        ['123', 'sched_getaffinity'],
        ['124', 'sched_yield'],
        ['125', 'sched_get_priority_max'],
        ['126', 'sched_get_priority_min'],
        ['127', 'sched_rr_get_interval'],
        ['128', 'restart_syscall'],
        ['129', 'kill'],
        ['130', 'tkill'],
        ['131', 'tgkill'],
        ['132', 'sigaltstack'],
        ['133', 'rt_sigsuspend'],
        ['134', 'rt_sigaction'],
        ['135', 'rt_sigprocmask'],
        ['136', 'rt_sigpending'],
        ['137', 'rt_sigtimedwait'],
        ['138', 'rt_sigqueueinfo'],
        ['139', 'rt_sigreturn'],
        ['140', 'setpriority'],
        ['141', 'getpriority'],
        ['142', 'reboot'],
        ['143', 'setregid'],
        ['144', 'setgid'],
        ['145', 'setreuid'],
        ['146', 'setuid'],
        ['147', 'setresuid'],
        ['148', 'getresuid'],
        ['149', 'setresgid'],
        ['150', 'getresgid'],
        ['151', 'setfsuid'],
        ['152', 'setfsgid'],
        ['153', 'times'],
        ['154', 'setpgid'],
        ['155', 'getpgid'],
        ['156', 'getsid'],
        ['157', 'setsid'],
        ['158', 'getgroups'],
        ['159', 'setgroups'],
        ['160', 'uname'],
        ['161', 'sethostname'],
        ['162', 'setdomainname'],
        ['163', 'getrlimit'],
        ['164', 'setrlimit'],
        ['165', 'getrusage'],
        ['166', 'umask'],
        ['167', 'prctl'],
        ['168', 'getcpu'],
        ['169', 'gettimeofday'],
        ['170', 'settimeofday'],
        ['171', 'adjtimex'],
        ['172', 'getpid'],
        ['173', 'getppid'],
        ['174', 'getuid'],
        ['175', 'geteuid'],
        ['176', 'getgid'],
        ['177', 'getegid'],
        ['178', 'gettid'],
        ['179', 'sysinfo'],
        ['180', 'mq_open'],
        ['181', 'mq_unlink'],
        ['182', 'mq_timedsend'],
        ['183', 'mq_timedreceive'],
        ['184', 'mq_notify'],
        ['185', 'mq_getsetattr'],
        ['186', 'msgget'],
        ['187', 'msgctl'],
        ['188', 'msgrcv'],
        ['189', 'msgsnd'],
        ['190', 'semget'],
        ['191', 'semctl'],
        ['192', 'semtimedop'],
        ['193', 'semop'],
        ['194', 'shmget'],
        ['195', 'shmctl'],
        ['196', 'shmat'],
        ['197', 'shmdt'],
        ['198', 'socket'],
        ['199', 'socketpair'],
        ['200', 'bind'],
        ['201', 'listen'],
        ['202', 'accept'],
        ['203', 'connect'],
        ['204', 'getsockname'],
        ['205', 'getpeername'],
        ['206', 'sendto'],
        ['207', 'recvfrom'],
        ['208', 'setsockopt'],
        ['209', 'getsockopt'],
        ['210', 'shutdown'],
        ['211', 'sendmsg'],
        ['212', 'recvmsg'],
        ['213', 'readahead'],
        ['214', 'brk'],
        ['215', 'munmap'],
        ['216', 'mremap'],
        ['217', 'add_key'],
        ['218', 'request_key'],
        ['219', 'keyctl'],
        ['220', 'clone'],
        ['221', 'execve'],
        ['222', 'mmap'],
        ['223', 'fadvise64'],
        ['224', 'swapon'],
        ['225', 'swapoff'],
        ['226', 'mprotect'],
        ['227', 'msync'],
        ['228', 'mlock'],
        ['229', 'munlock'],
        ['230', 'mlockall'],
        ['231', 'munlockall'],
        ['232', 'mincore'],
        ['233', 'madvise'],
        ['234', 'remap_file_pages'],
        ['235', 'mbind'],
        ['236', 'get_mempolicy'],
        ['237', 'set_mempolicy'],
        ['238', 'migrate_pages'],
        ['239', 'move_pages'],
        ['240', 'rt_tgsigqueueinfo'],
        ['241', 'perf_event_open'],
        ['242', 'accept4'],
        ['243', 'recvmmsg'],
        ['244', 'not implemented'],
        ['245', 'not implemented'],
        ['246', 'not implemented'],
        ['247', 'not implemented'],
        ['248', 'not implemented'],
        ['249', 'not implemented'],
        ['250', 'not implemented'],
        ['251', 'not implemented'],
        ['252', 'not implemented'],
        ['253', 'not implemented'],
        ['254', 'not implemented'],
        ['255', 'not implemented'],
        ['256', 'not implemented'],
        ['257', 'not implemented'],
        ['258', 'not implemented'],
        ['259', 'not implemented'],
        ['260', 'wait4'],
        ['261', 'prlimit64'],
        ['262', 'fanotify_init'],
        ['263', 'fanotify_mark'],
        ['264', 'name_to_handle_at'],
        ['265', 'open_by_handle_at'],
        ['266', 'clock_adjtime'],
        ['267', 'syncfs'],
        ['268', 'setns'],
        ['269', 'sendmmsg'],
        ['270', 'process_vm_readv'],
        ['271', 'process_vm_writev'],
        ['272', 'kcmp'],
        ['273', 'finit_module'],
        ['274', 'sched_setattr'],
        ['275', 'sched_getattr'],
        ['276', 'renameat2'],
        ['277', 'seccomp'],
        ['278', 'getrandom'],
        ['279', 'memfd_create'],
        ['280', 'bpf'],
        ['281', 'execveat'],
        ['282', 'userfaultfd'],
        ['283', 'membarrier'],
        ['284', 'mlock2'],
        ['285', 'copy_file_range'],
        ['286', 'preadv2'],
        ['287', 'pwritev2'],
        ['288', 'pkey_mprotect'],
        ['289', 'pkey_alloc'],
        ['290', 'pkey_free'],
        ['291', 'statx'],
    ]);
})(ZZSyscallTable || (ZZSyscallTable = {}));
✄
{"version":3,"file":"UEGame.js","sourceRoot":"C:/Users/zzc/Desktop/frida-tools/frida-tools/","sources":["games/UEGame.ts"],"names":[],"mappings":"AAEA,4BAA4B;AAE5B,kCAAkC;AAElC,sCAAsC;AAEtC,iBAAiB;AACjB,mCAAmC;AACnC,kCAAkC;AAClC,qCAAqC;AAErC,uBAAuB;AACvB,gFAAgF;AAChF,iFAAiF;AAEjF,oBAAoB;AACpB,+EAA+E;AAC/E,8EAA8E;AAC9E,iFAAiF;AAGjF,sBAAsB;AACtB,mDAAmD;AAGnD,2FAA2F;AAC3F,2CAA2C;AAC3C,0CAA0C;AAC1C,wCAAwC;AACxC,8CAA8C;AAC9C,YAAY;AAEZ,QAAQ;AAGR,mCAAmC;AAEnC,+BAA+B;AAC/B,0FAA0F;AAC1F,yFAAyF;AAEzF,+BAA+B;AAC/B,oFAAoF;AACpF,mFAAmF;AACnF,4EAA4E;AAE5E,wBAAwB;AACxB,2CAA2C;AAC3C,2CAA2C;AAE3C,qCAAqC;AAErC,QAAQ;AAGR,iCAAiC;AACjC,oCAAoC;AACpC,+BAA+B;AAC/B,gCAAgC;AAChC,uCAAuC;AAGvC,8EAA8E;AAC9E,mCAAmC;AACnC,8EAA8E;AAE9E,iDAAiD;AACjD,4FAA4F;AAC5F,8BAA8B;AAC9B,QAAQ;AAER,gDAAgD;AAChD,0GAA0G;AAC1G,yBAAyB;AACzB,QAAQ;AAIR,8EAA8E;AAC9E,kCAAkC;AAClC,8EAA8E;AAG9E,mDAAmD;AACnD,4BAA4B;AAC5B,qEAAqE;AAErE,wDAAwD;AACxD,wEAAwE;AACxE,wDAAwD;AACxD,mEAAmE;AAEnE,2CAA2C;AAC3C,yCAAyC;AACzC,yDAAyD;AAEzD,QAAQ;AAKR,+EAA+E;AAE/E,yDAAyD;AACzD,gBAAgB;AAChB,oFAAoF;AACpF,4BAA4B;AAC5B,4BAA4B;AAC5B,6CAA6C;AAC7C,wBAAwB;AACxB,YAAY;AACZ,QAAQ;AAER,uDAAuD;AAEvD,iCAAiC;AACjC,uDAAuD;AACvD,mBAAmB;AACnB,qDAAqD;AACrD,YAAY;AACZ,QAAQ;AAER,4DAA4D;AAC5D,iCAAiC;AACjC,kDAAkD;AAClD,2CAA2C;AAC3C,mBAAmB;AACnB,qDAAqD;AACrD,YAAY;AACZ,QAAQ;AAER,+DAA+D;AAC/D,8EAA8E;AAC9E,4EAA4E;AAC5E,sCAAsC;AACtC,QAAQ;AAER,uDAAuD;AAEvD,uFAAuF;AAEvF,8DAA8D;AAC9D,qEAAqE;AACrE,+FAA+F;AAC/F,2FAA2F;AAE3F,gCAAgC;AAChC,gBAAgB;AAChB,+BAA+B;AAC/B,kEAAkE;AAClE,oHAAoH;AACpH,uBAAuB;AACvB,kEAAkE;AAClE,gBAAgB;AAChB,4BAA4B;AAC5B,gEAAgE;AAChE,YAAY;AAEZ,qBAAqB;AACrB,2CAA2C;AAC3C,yCAAyC;AACzC,6BAA6B;AAE7B,2CAA2C;AAC3C,wHAAwH;AACxH,8BAA8B;AAC9B,uBAAuB;AACvB,8CAA8C;AAC9C,yDAAyD;AACzD,gBAAgB;AAEhB,mBAAmB;AACnB,+CAA+C;AAC/C,qDAAqD;AACrD,YAAY;AACZ,QAAQ;AAGR,wFAAwF;AAExF,0BAA0B;AAC1B,sCAAsC;AAGtC,6EAA6E;AAC7E,6EAA6E;AAE7E,kGAAkG;AAClG,wCAAwC;AACxC,2DAA2D;AAC3D,oFAAoF;AACpF,iDAAiD;AACjD,kEAAkE;AAClE,0DAA0D;AAC1D,gBAAgB;AAEhB,YAAY;AAEZ,sGAAsG;AACtG,uDAAuD;AACvD,qDAAqD;AACrD,iFAAiF;AACjF,eAAe;AAEf,8BAA8B;AAE9B,QAAQ;AAER,mDAAmD;AACnD,2CAA2C;AAC3C,wCAAwC;AACxC,QAAQ;AAGR,iGAAiG;AAEjG,6BAA6B;AAC7B,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;AACxB,gDAAgD;AAChD,0BAA0B;AAC1B,0BAA0B;AAC1B,0BAA0B;AAC1B,YAAY;AACZ,uBAAuB;AACvB,uBAAuB;AACvB,0DAA0D;AAC1D,YAAY;AACZ,QAAQ;AAER,uCAAuC;AAEvC,2BAA2B;AAC3B,6EAA6E;AAC7E,2CAA2C;AAE3C,iCAAiC;AACjC,kCAAkC;AAClC,8DAA8D;AAC9D,8DAA8D;AAC9D,8DAA8D;AAC9D,aAAa;AACb,0CAA0C;AAC1C,8CAA8C;AAC9C,QAAQ;AAER,yDAAyD;AAEzD,2CAA2C;AAC3C,yCAAyC;AAEzC,6DAA6D;AAC7D,2CAA2C;AAC3C,mDAAmD;AACnD,sGAAsG;AAEtG,+BAA+B;AAC/B,gBAAgB;AAChB,8CAA8C;AAC9C,oEAAoE;AACpE,+BAA+B;AAE/B,4FAA4F;AAC5F,wBAAwB;AACxB,qCAAqC;AACrC,YAAY;AAEZ,QAAQ;AAGR,IAAI"}
✄
// export namespace UEGame {
//     export class UEGameConfig {
//         public ueEngineName: string
//         //全局信息
//         public offset_gworld = 0
//         public offset_gname = 0
//         public offset_guobject = 0
//         //获取所有Actors
//         public offset_GWorld_Level = 0x30               //level字段在World对象中的偏移
//         public offset_Level_Actors = 0x98               //actors字段在Level对象中的偏移
//         //对象相关的偏移
//         public offset_UObject_ClassPrivate = 0x10       //指向描述对象类的 UClass 对象
//         public offset_UObject_FNameIndex = 0x18         //对象名称在 FName 表中的索引
//         public offset_UObject_OuterPrivate = 0x20       //指向包含该对象的外部对象，表示层次关系。
//         //fname偏移配置
//         public fnameConfig = new UEFNameConfig()
//         constructor(ueEngine: string, gworld: number, gname: number, guobject: number) {
//             this.ueEngineName = ueEngine
//             this.offset_gworld = gworld
//             this.offset_gname = gname
//             this.offset_guobject = guobject
//         }
//     }
//     export class UEFNameConfig {
//         // FNamePool相关偏移量和步长
//         public FNameStride = 0x2;                   // FNameEntry 的步长，每个FNameEntry占用2字节
//         public offset_FNamePool_Blocks = 0x40;      // GName(即FNamePool) 到 Blocks 的偏移量
//         // FNameEntry相关偏移量和位
//         public offset_FNameEntryHeader = 0;             // FNameEntry 到 Info 的偏移量
//         public offset_FNameEntry_ansiString = 0x2;      // FNameEntry 到字符串部分的偏移量
//         public FNameEntry_LenBit = 6;                   // FNameEntry 长度位
//         //block计算, 固定
//         public FNameBlockOffsetBits = 16
//         public FNameBlockOffsets = 65536
//         public FNAME_NONE = "None"
//     }
//     let ueConfig: UEGameConfig
//     let moduleBase: NativePointer
//     let GName: NativePointer
//     let GWorld: NativePointer
//     let GUObjectArray: NativePointer
//     //---------------------------------------------------------------------
//     //                  private 
//     //---------------------------------------------------------------------
//     function getClass(objPtr: NativePointer) {
//         var classPrivate = objPtr.add(ueConfig.offset_UObject_ClassPrivate).readPointer()
//         return classPrivate
//     }
//     function isValid(objPtr: NativePointer) {
//         var isValid = objPtr.toUInt32() > 0 && getClass(objPtr).toUInt32() > 0 && getNameId(objPtr) > 0
//         return isValid
//     }
//     //---------------------------------------------------------------------
//     //                  public 
//     //---------------------------------------------------------------------
//     export function init(config: UEGameConfig) {
//         ueConfig = config
//         moduleBase = Module.findBaseAddress(ueConfig.ueEngineName)
//         //gworld是将offset_gworld所在变量赋值给gworld，因此要读取指针值
//         GWorld = moduleBase.add(ueConfig.offset_gworld).readPointer()
//         GName = moduleBase.add(ueConfig.offset_gname)
//         GUObjectArray = moduleBase.add(ueConfig.offset_guobject)
//         console.log("GWorld: " + GWorld)
//         console.log("GName: " + GName)
//         console.log("GUObjectArray: " + GUObjectArray)
//     }
//     /****************************** getName ***************************** */
//     export function getNameId(objPtr: NativePointer) {
//         try {
//             let nameId = objPtr.add(ueConfig.offset_UObject_FNameIndex).readU32()
//             return nameId
//         } catch (error) {
//             console.log("getNameId error")
//             return -1
//         }
//     }
//     export function getName(objPtr: NativePointer) {
//         if (isValid(objPtr)) {
//             return getFNameFromID(getNameId(objPtr))
//         } else {
//             return ueConfig.fnameConfig.FNAME_NONE
//         }
//     }
//     export function getClassName(objPtr: NativePointer) {
//         if (isValid(objPtr)) {
//             var classPrivate = getClass(objPtr)
//             return getName(classPrivate)
//         } else {
//             return ueConfig.fnameConfig.FNAME_NONE
//         }
//     }
//     export function calcBlockIndexAndOffset(index: number) {
//         let blockIndex = index >> ueConfig.fnameConfig.FNameBlockOffsetBits
//         let offset = index & (ueConfig.fnameConfig.FNameBlockOffsets - 1)
//         return [blockIndex, offset]
//     }
//     export function getFNameFromID(nameId: number) {
//         let NamePoolBlocks = GName.add(ueConfig.fnameConfig.offset_FNamePool_Blocks)
//         //1.根据nameId计算blockIndex和offset, 并进一步获得对应的NameEntry
//         let [blockIndex, offset] = calcBlockIndexAndOffset(nameId)
//         var targetBlock = NamePoolBlocks.add(blockIndex * Process.pointerSize).readPointer()
//         var targetNameEntry = targetBlock.add(ueConfig.fnameConfig.FNameStride * offset)
//         //2.获取nameEntryHeader
//         try {
//             //判断是否有偏移，有则加上偏移
//             if (ueConfig.fnameConfig.offset_FNameEntryHeader) {
//                 var nameEntryHeader = targetNameEntry.add(ueConfig.fnameConfig.offset_FNameEntryHeader).readU16()
//             } else {
//                 var nameEntryHeader = targetNameEntry.readU16()
//             }
//         } catch (error) {
//             console.log("读取nameEntryHeader失败, error=", error)
//         }
//         //3.读取name
//         var isWide = nameEntryHeader & 1
//         var len = nameEntryHeader >> 6
//         if (0 == isWide) {
//             if (len > 0 && len <= 255) {
//                 var name = targetNameEntry.add(ueConfig.fnameConfig.offset_FNameEntry_ansiString).readUtf8String(len)
//                 return name
//             } else {
//                 console.log("长度不合理，返回None")
//                 return ueConfig.fnameConfig.FNAME_NONE
//             }
//         } else {
//             console.log("是wchar宽字符串，返回None")
//             return ueConfig.fnameConfig.FNAME_NONE
//         }
//     }
//     /********************************* 获取地址 ************************************** */
//     //返回actor的名称和地址dict
//     export function getAllActor() {
//         let Level = GWorld.add(ueConfig.offset_GWorld_Level).readPointer()
//         let Actors = Level.add(ueConfig.offset_Level_Actors).readPointer()
//         let actorNum = Level.add(ueConfig.offset_Level_Actors).add(0x8).readU32()  //获取Actor的数量
//         let actorAddrMap = new Map();
//         for (let index = 0; index < actorNum; index++) {
//             var actorAddr = Actors.add(index * Process.pointerSize).readPointer()
//             var actorName = getName(actorAddr)
//             if (actorName != ueConfig.fnameConfig.FNAME_NONE) {
//                 actorAddrMap.set(actorName, actorAddr);
//             }
//         }
//         // console.log("------------------------- print actorAddrMap ----------------------------")
//         // console.log("size = ", actorAddrMap.size)
//         // for (let name of actorAddrMap.keys()) {
//         //     console.log("name = ", name, "addr = ", actorAddrMap.get(name))
//         // }
//         return actorAddrMap
//     }
//     export function getActorAddr(name: string) {
//         let actorAddrMap = getAllActor()
//         return actorAddrMap.get(name)
//     }
//     /************************************ 获取角色位置 ****************************************** */
//     class Vector {//设置向量对象
//         public x: any
//         public y: any
//         public z: any
//         constructor(x: any, y: any, z: any) {
//             this.x = x;
//             this.y = y;
//             this.z = z;
//         }
//         // 将向量转换为字符串
//         toString() {
//             return `(${this.x}, ${this.y}, ${this.z})`;
//         }
//     }
//     function dumpVector(addr: any) {
//         // 从地址空间中读取三个浮点数
//         const values = addr.readByteArray(addr, 3 * 4);  // 3个float共占12个字节
//         console.log("values = ", values)
//         // 解析浮点数并初始化 Vector 对象
//         const vec = new Vector(
//             new Float32Array(values, 0, 1)[0],  // 读取第一个浮点数
//             new Float32Array(values, 4, 1)[0],  // 读取第二个浮点数
//             new Float32Array(values, 8, 1)[0]   // 读取第三个浮点数
//         );
//         console.log("3333333333333333")
//         console.log('[+] 坐标：', vec);//打出坐标。
//     }
//     export function getActorLocation(actorAddr: any) {
//         console.log("11111111111111111")
//         var buf = Memory.alloc(0x100);
//         //获取角色位置：Vector K2_GetActorLocation();// 0x965ddf8
//         //0x965ddf8 这个地址可在dump下的SDK文件里找到
//         var f_addr = moduleBase.add(0x965ddf8); 
//         var GetActorLocationFunc = new NativeFunction(f_addr, 'void', ['pointer','int','pointer']);
//         // 调用目标函数并传递内存地址作为参数
//         try {
//             console.log("2222222222222222")
//             GetActorLocationFunc(actorAddr, buf.toUInt32(), buf);
//             dumpVector(buf);
//             //info(ptr(actor_addr).add(0x130).readPointer().add(0x14c).readU8()&32 != 0);
//         } catch (e) {
//             console.log("e = ", e)
//         }
//     }
// }
✄
const lookup = []
const revLookup = []

const code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (let i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  const len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  let validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  const placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
export function byteLength (b64) {
  const lens = getLens(b64)
  const validLen = lens[0]
  const placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

export function toByteArray (b64) {
  const lens = getLens(b64)
  const validLen = lens[0]
  const placeHoldersLen = lens[1]

  const arr = new Uint8Array(_byteLength(b64, validLen, placeHoldersLen))

  let curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  const len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  let i
  for (i = 0; i < len; i += 4) {
    const tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    const tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    const tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  const output = []
  for (let i = start; i < end; i += 3) {
    const tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

export function fromByteArray (uint8) {
  const len = uint8.length
  const extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  const parts = []
  const maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (let i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    const tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    const tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

✄
/*!
 * The buffer module from node.js, for Frida.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

import * as base64 from 'base64-js'
import * as ieee754 from 'ieee754'

export const config = {
  INSPECT_MAX_BYTES: 50
}

const K_MAX_LENGTH = 0x7fffffff
export { K_MAX_LENGTH as kMaxLength }

Buffer.TYPED_ARRAY_SUPPORT = true

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

export function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (value instanceof ArrayBuffer ||
      (value && value.buffer instanceof ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (value instanceof SharedArrayBuffer ||
      (value && value.buffer instanceof SharedArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (arrayView instanceof Uint8Array) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || Number.isNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

export function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (a instanceof Uint8Array) a = Buffer.from(a, a.offset, a.byteLength)
  if (b instanceof Uint8Array) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (buf instanceof Uint8Array) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) {
          buf = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
        }
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || string instanceof ArrayBuffer) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a frida-compile context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = config.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
Buffer.prototype[Symbol.for('nodejs.util.inspect.custom')] = Buffer.prototype.inspect

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (target instanceof Uint8Array) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (Number.isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (Number.isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
}

Buffer.prototype.readBigUInt64BE = function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
}

Buffer.prototype.readBigInt64BE = function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
}

Buffer.prototype.writeBigUInt64BE = function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
}

Buffer.prototype.writeBigInt64BE = function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target) {
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

export default {
  config,
  kMaxLength: K_MAX_LENGTH,
  Buffer,
  SlowBuffer
}

✄
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

export function read (buffer, offset, isLE, mLen, nBytes) {
  let e, m
  const eLen = (nBytes * 8) - mLen - 1
  const eMax = (1 << eLen) - 1
  const eBias = eMax >> 1
  let nBits = -7
  let i = isLE ? (nBytes - 1) : 0
  const d = isLE ? -1 : 1
  let s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  while (nBits > 0) {
    e = (e * 256) + buffer[offset + i]
    i += d
    nBits -= 8
  }

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  while (nBits > 0) {
    m = (m * 256) + buffer[offset + i]
    i += d
    nBits -= 8
  }

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

export function write (buffer, value, offset, isLE, mLen, nBytes) {
  let e, m, c
  let eLen = (nBytes * 8) - mLen - 1
  const eMax = (1 << eLen) - 1
  const eBias = eMax >> 1
  const rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  let i = isLE ? 0 : (nBytes - 1)
  const d = isLE ? 1 : -1
  const s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  while (mLen >= 8) {
    buffer[offset + i] = m & 0xff
    i += d
    m /= 256
    mLen -= 8
  }

  e = (e << mLen) | m
  eLen += mLen
  while (eLen > 0) {
    buffer[offset + i] = e & 0xff
    i += d
    e /= 256
    eLen -= 8
  }

  buffer[offset + i - d] |= s * 128
}
