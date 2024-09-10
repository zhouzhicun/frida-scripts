import { Base } from "./zzBase.js";

export namespace ZZHookFuncHandler {

    export enum FuncPrintType {
        none,             //不打印
        func_name,         //函数名
        func_params,       //函数参数
        func_callstacks,   //函数调用栈
    }

    export const logTips = {
        funcName: "funcName ==> ",
        funcParams: "funcParams ==>\n",
        funcCallstacks: "funcCallstacks ==>\n",
    }


    /********************************************* hook函数打印处理  *********************************************** */

    type VoidCallback = () => void;

    class AbstractFuncHandler {

        printType: FuncPrintType;
        printFuncName: Function;
        printFuncParams: Function;
        printCallstacks: Function;

        constructor(printType: FuncPrintType, funcname: string, funcparams: VoidCallback, callstacks: VoidCallback) {
           
            this.printType = printType;
            this.printFuncName = function(){
                console.log(logTips.funcName + funcname)
            }
            this.printFuncParams = funcparams
            this.printCallstacks = function(){
                console.log(logTips.funcCallstacks)
                callstacks()
            }
        }

        print() {
            if (this.printType == FuncPrintType.func_callstacks) {
                this.printFuncName()
                this.printFuncParams()
                this.printCallstacks()
            } else if (this.printType == FuncPrintType.func_params) {
                this.printFuncName()
                this.printFuncParams()
            }  else if (this.printType == FuncPrintType.func_name) {
                this.printFuncName()
            }
        }

    }


    //Java函数hook处理类
    export class JavaFuncHandler extends AbstractFuncHandler {
        constructor(printType: number, funcname: string, funcparams: VoidCallback) {
            super(printType, funcname, funcparams, Base.zzCallStack.printJavaCallstacks)
        }
    }

    //native函数hook处理类
    export class NativeFuncHandler extends AbstractFuncHandler {
        constructor(printType: number, context: any, funcname: string, funcparams: VoidCallback) {
            let print_callstack = function(){
                Base.zzCallStack.printNativeCallstacks(context)
            }
            super(printType, funcname, funcparams, print_callstack)
        }
    }
}