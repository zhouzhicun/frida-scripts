import { ZZCallStack } from "./zzCallStack.js";
import { ZZSyscallTable } from "./zzSyscallTable.js";



export namespace ZZNativeFunc {


    /*********************************** 函数处理 *********************************************/

    export function getFuncPtr(funcName: string) {
        const funcPtr = Module.findExportByName(null, funcName);
        console.log("getFuncPtr ==>" + funcName + " : " + funcPtr);
        return funcPtr;
    }

    export function replaceFunc(funcName: string, callBack: NativePointerValue) {
        let funcPtr = getFuncPtr(funcName);
        if (funcPtr) {
            Interceptor.replace(funcPtr, callBack);
        }
    }


    //创建一个假的函数, 该函数直接返回
    export function createFakeFunc() {
        const fake_func = Memory.alloc(4096)
        Memory.protect(fake_func, 4096, "rwx")
        Memory.patchCode(fake_func, 4096, code => {
            const cw = new Arm64Writer(code, { pc: fake_func })
            cw.putRet()
            cw.flush()
        })
        return fake_func
    }




    /************************* 内存读写/搜索 ******************************** */

    export function readMemory(startAddr: any, size: any) {
        Memory.protect(startAddr, size, 'rwx');
        var buffer = startAddr.readByteArray(size);
        return buffer
    }

    export function writeMemory(startAddr: any, str: any) {
        Memory.protect(startAddr, str.length, 'rwx');
        startAddr.writeAnsiString(str);
    }

    /**
     * 从内存中搜索特征数据, 例如：
     * arm64 svc 0 : 010000D4
     * arm64 svc 0x80: 011000D4
     * ssl_cronet(libsscronet.so): 参考 FridaContainer的 Anti.ts文件。
    */
    export function searchMemory(soName: string, hexStr: string) {

        // 获取模块基址和大小
        var module = Process.getModuleByName(soName);
        var base = module.base;
        var size = module.size;

        var matchedArr: NativePointer[]

        // 在模块地址范围内搜索特征数据
        var matches = Memory.scan(base, size, hexStr, {
            onMatch: function (address, size) {
                var offset = address.sub(base);
                matchedArr.push(offset)
            },
        });

        return matchedArr
    }


    //监控内存访问: 只会触发一次; 参考：https://blog.csdn.net/fenfei331/article/details/123523182
    export function accessMemoryMonitor(soName: string, offset: number, memSize: number) {
        var module = Process.getModuleByName(soName);
        var targetAddr = module.base.add(offset);
        MemoryAccessMonitor.enable({
            base: targetAddr,
            size: memSize,
        }, {
            onAccess: function(details) {
                console.log("access memory at: 0x" + details.address.sub(module.base).toString(16))
            },
        })
    }


    /******************************************* watch ***************************************************** */


    /**
     * 对对应的偏移地址下断点，并打印其堆栈。
     * 用途：比如通过IDA搜索 svc 0的机器码得到其指令的偏移地址，然后通过frida hook它，并打印堆栈。
     * 
     * @param soName so名称
     * @param points 待观察的指令偏移地址数组
     * 
     */
    export function watch_points(soName: string, points: number[]) {

        var base_addr = Module.findBaseAddress(soName);
        points.forEach((addr) => {
            Interceptor.attach(base_addr.add(addr), {
                onEnter: function () {
                    console.log("hit watch_point = " + addr);
                    ZZCallStack.printNativeCallstacks(this.context);
                }
            });
        })
    }

    export function watch_svc_points(soName: string, points: number[]) {

        var base_addr = Module.findBaseAddress(soName);
        points.forEach((addr) => {
            Interceptor.attach(base_addr.add(addr), {
                onEnter: function () {
                    console.log("hit svc watch_point = " + addr);

                    // var contextStr = JSON.stringify(this.context)
                    // console.log("context = \n" + contextStr);

                    let x8 = get_syscall_desc(this.context as Arm64CpuContext)
                    console.log("syscall = " + x8)
                    ZZCallStack.printNativeCallstacks(this.context);
                }
            });
        })

    }

    function get_syscall_desc(context: Arm64CpuContext) {
        let syscallNum = context.x8.toString(10) //转成10进制字符串
        return ZZSyscallTable.arm64.get(syscallNum)
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
    export function trace_instruction(soName: string, hook_addr: number, start_offset: number, end_offset: number, watch_points: number[]) {

        var base_addr = Module.findBaseAddress(soName);

        Interceptor.attach(base_addr.add(hook_addr), {
            onLeave: function (retval) {
                Stalker.unfollow(this.pid)
                console.log("stalker follow stop ==>")
            },
            onEnter: function (args) {

                console.log("stalker follow start ==>")
                this.pid = Process.getCurrentThreadId();
                Stalker.follow(this.pid, {
                    events: {
                        call: false,    // CALL instructions: yes please            
                        ret: false,     // RET instructions
                        exec: false,    // all instructions: not recommended as it's
                        block: false,   // block executed: coarse execution trace
                        compile: false  // block compiled: useful for coverage
                    },

                    // onReceive: Called with `events` containing a binary blob comprised of one or more GumEvent structs. 
                    // See `gumevent.h` for details about the format. Use `Stalker.parse()` to examine the data.
                    onReceive(events) {

                    },

                    transform: function (iterator: any) {

                        //iterator 对应一个基本块。基本块是一组连续的指令，没有分支。
                        var instruction = iterator.next();

                        //判断当前指令是不是原函数内的指令
                        const inst_addr = instruction.address;
                        var isModule = inst_addr.compare(base_addr.add(start_offset)) >= 0 && inst_addr.compare(base_addr.add(end_offset)) < 0;

                        //遍历执行该基本块的所有指令
                        do {
                            if (isModule) {

                                var inst_offset_addr = instruction.address.sub(base_addr)
                                console.log(inst_offset_addr + "\t:\t" + instruction);

                                if (watch_points.includes(inst_offset_addr)) {

                                    //命中时，打印上下文信息
                                    console.log("hit watch_point = " + inst_offset_addr);
                                    iterator.putCallout((context: any) => {
                                        var contextStr = JSON.stringify(context)
                                        console.log("context = \n" + contextStr);
                                    });

                                }

                            }
                            iterator.keep();
                        } while ((instruction = iterator.next()) !== null);

                    }
                });

            }
        })
    }

}