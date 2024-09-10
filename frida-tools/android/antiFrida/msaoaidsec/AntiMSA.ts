
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

export namespace AntiMSA {

    export let nop_thread_func = msa_nop_thread_func
    export let nop_thread_funcV2 = msa_nop_thread_funcV2
    export let replace_pthread_create = msa_replace_pthread_create
    export let unopen_msaoaidsec = msa_unopen_msaoaidsec

}


