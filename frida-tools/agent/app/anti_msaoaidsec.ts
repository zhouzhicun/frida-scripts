import { AntiMSA } from "../../android/antiFrida/msaoaidsec/AntiMSA.js";
import { AndUI } from "../../android/utils/AndUI.js";


export function main() {

    method1()


    function method1() {
        //方式1：
        console.log("方式1: nop_thread_func")
        AntiMSA.nop_thread_func()
    }

    function method2() {
        //方式1：
        console.log("方式2: nop_thread_funcV2")
        AntiMSA.nop_thread_funcV2()
    }

    function method3() {
        //方式1：
        console.log("方式3: replace_pthread_create")
        AntiMSA.replace_pthread_create()
    }

    function method4() {
        //方式1：
        console.log("方式4: unopen_msaoaidsec")
        AntiMSA.unopen_msaoaidsec()
    }


    // setTimeout(function() {
    //     AndUI.hook_ui()
    // }, 3000)

}

