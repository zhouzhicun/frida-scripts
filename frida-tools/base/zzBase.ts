


import * as ZZStalkerTrace from "./zzStalkerTrace.js"

import { ZZCallStack } from "./zzCallStack.js";
import { ZZHookFuncHandler } from "./zzHookFuncHandler.js";
import { ZZPatch64 } from "./zzPatch64.js";
import { ZZStringUtils } from "./zzStringUtils.js";
import { ZZNativeFunc } from "./zzNativeFunc.js";
import { ZZSyscallTable } from "./zzSyscallTable.js";



export namespace Base {

    export let zzCallStack = ZZCallStack;
    export let zzStalkerTrace = ZZStalkerTrace;
    export let zzHookFuncHandler = ZZHookFuncHandler
    export let zzPatch = ZZPatch64
    export let zzStringUtils = ZZStringUtils
    export let zzNativeFunc = ZZNativeFunc
    export let syscallTable = ZZSyscallTable


}

