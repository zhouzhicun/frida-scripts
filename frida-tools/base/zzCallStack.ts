


/**
 * 函数堆栈信息
 * 支持ARM64 android, iOS
 */
export namespace ZZCallStack {



    //================================= 函数调用栈打印 =========================================

    //打印Java方法调用堆栈
    export function printJavaCallstacks() {
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
    }

    //打印native函数调用堆栈
    export function printNativeCallstacks(context: any) {
        console.log(' called from:\n' + Thread.backtrace(context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
    }


     //打印native函数调用堆栈(自实现栈回溯)
    export function printNativeCallstacksV2(context: any) {

        let addrArr = []
        if(Process.pointerSize == 8) {
            addrArr = stacktrace64(context as Arm64CpuContext, 30)
        } else {
            addrArr = stacktrace32(context as ArmCpuContext, 30)
        }
        console.log(' called from:\n' + addrArr.map(DebugSymbol.fromAddress).join('\n') + '\n');
    }



    //================================= 自回溯堆栈 =========================================

    function stacktrace64(context: Arm64CpuContext, number: number): any[] {

        var fp: NativePointer = context.fp;  //x29
        var sp: NativePointer = context.sp;  //x31
        var pc: NativePointer = context.pc;  

        console.log("sp = " + sp.toString() + ", fp = " + fp.toString() + ", pc = " + pc.toString() + "\n")

        let n = 0
        let stack_arr: NativePointer[] = []
        stack_arr[n++] = pc;

        let cur_fp = fp
       
        while (n < number) {
            //判断栈的有效性
            if (parseInt(cur_fp.toString()) < parseInt(sp.toString())) {
                break
            }
            //读取上一个栈帧, ARM堆栈特征：FP指向上一个栈帧的FP，且FP上面是LR。
            let pre_fp = cur_fp.readPointer()
            let lr = cur_fp.add(8).readPointer()
    
            console.log("pre_fp = " + pre_fp.toString() + ", lr = " + lr.toString() +  "\n")
            if(lr.toInt32() == 0) {
                break
            }

            cur_fp = pre_fp
            stack_arr[n++] = lr
       
        }

        console.log("addr = ", stack_arr)
        return stack_arr;
    }


    function stacktrace32(context: ArmCpuContext, number: number): any[] {

        console.log("ARM32 暂未实现，待补充!!!")
        return [];
    }








    //================================= 当前函数栈信息 =========================================

    /**
     * 获取当前上下文寄存器信息，返回JSON字符串
     * @param context 
     * @returns 
     */
    export function getRegisterContext(context: CpuContext) {
        let regContext = JSON.stringify(context)
        return regContext
    }


    /**
     * 打印函数栈信息（指定栈层数，8字节为一层），并输出 module 信息 (如果有）
     * @param {CpuContext} context
     * @param {number} number
     */
    export function printStackInfo(context: CpuContext, number: number) {
        var sp: NativePointer = context.sp;

        for (var i = 0; i < number; i++) {
            var curSp = sp.add(Process.pointerSize * i);
            console.log('showStacksModInfo curSp: ' + curSp + ', val: ' + curSp.readPointer()
                + ', module: ' + getModuleInfo(curSp.readPointer()));
        }
    }

    /**
     * 根据地址获取模块信息
     * @param {NativePointer} addr
     * @returns {string}
     */
    function getModuleInfo(addr: NativePointer): Module | null {
        var result = null;
        Process.enumerateModules().forEach(function (module: Module) {
            if (module.base <= addr && addr <= (module.base.add(module.size))) {
                result = JSON.stringify(module);
                return false; // 跳出循环
            }
        });
        return result;
    }




}

