

import { Base } from "../../base/zzBase.js";
import * as Dump from "./AndDump.js"

export namespace AndSo {

    export enum DumpMethod {
        frida,
        fwrite,
        syscall
    }


    /************************************** helper **************************************************** */

    export function get_linker() {

        let linker = null;
        if (Process.pointerSize == 4) {
            linker = Process.findModuleByName("linker");
        } else {
            linker = Process.findModuleByName("linker64");
        }
        return linker
    }

    export function print_soinfo(soName: string) {
        var targetModule = Process.findModuleByName(soName);
        console.log("get_soinfo ==>" + soName + " base = " + targetModule.base + "size = " + targetModule.size)
    }

    //获取真实地址
    export function get_addr(soName: string, offset: number) {
        const base = Module.findBaseAddress(soName);
        return base.add(offset);
    }

    //获取jstring
    export function get_jstring(jstrAddr: NativePointer) {
        var jStrCls = Java.use('java.lang.String');
        var str = Java.cast(jstrAddr, jStrCls);
        return str
    }

    /************************************** dump操作 **************************************************** */

    export function get_dump_root_path(bundleName: string) {
        return "/data/data/" + bundleName + "/"
    }

    export function get_dump_file_path(bundleName: string, soName: string, base: NativePointer, size: number) {
        var savePath = get_dump_root_path(bundleName)
        var fileName = soName.replace(".so", "") + "_" + base + "_" + base.add(size) + ".bin";
        return savePath + fileName
    }


    //dump 指定so库, 并保存到/data/data/bundleName/目录下
    /**
     * 
     * @param bundleName 包名
     * @param soName so名
     * @param dumpMethod dump方法：frida, fwrite, syscall
     */
    export function dump_so(bundleName: string, soName: string, dumpMethod: DumpMethod = DumpMethod.frida) {

        //写文件
        var targetModule = Process.getModuleByName(soName);
        var dump_file_path = get_dump_file_path(bundleName, soName, targetModule.base, targetModule.size);
    
        var success = false
        switch (dumpMethod) {
            case DumpMethod.frida:
                success = Dump.write_mem_to_file(dump_file_path, targetModule.base, targetModule.size);
                break;
            case DumpMethod.fwrite:
                success = Dump.write_mem_to_file_by_fwrite(dump_file_path, targetModule.base, targetModule.size);
                break;
            case DumpMethod.syscall:
                success = Dump.write_mem_to_file_by_syscall(dump_file_path, targetModule.base, targetModule.size)
                break;
            default:
                break;
        }

        if (success) {
            console.log("[dump so]:", dump_file_path);
        } else {
            console.log("[dump so]:  dump failed");
        }

        return success
    }


    export function dump_memory(bundleName: string, soName: string, offset: number, size: number, dumpMethod: DumpMethod = DumpMethod.frida) {

        var base_addr = Module.findBaseAddress(soName);
        var dump_file_path = get_dump_file_path(bundleName, soName, base_addr.add(offset), size);
   
        var success = false
        switch (dumpMethod) {
            case DumpMethod.frida:
                success = Dump.write_mem_to_file(dump_file_path, base_addr.add(offset), size);
                break;
            case DumpMethod.fwrite:
                success = Dump.write_mem_to_file_by_fwrite(dump_file_path, base_addr.add(offset), size);
                break;
            case DumpMethod.syscall:
                success = Dump.write_mem_to_file_by_syscall(dump_file_path, base_addr.add(offset), size)
                break;
            default:
                break;
        }

        if (success) {
            console.log("[dump memory]:", dump_file_path);
        } else {
            console.log("[dump memory]: dump failed");
        }
    }


    //dump指定so的导出符号列表, 并保存到/data/data/bundleName/目录下
    export function dump_so_export_symbols(bundleName: string, soName: string) {

        var targetModule = Process.findModuleByName(soName);
        var exportSymbols = targetModule.enumerateExports();


        //写文件
        var savePath = get_dump_root_path(bundleName)
        var fileName = soName.replace(".so", "") + "_symbols.log"
        var dump_file_path = savePath + fileName
        console.log("dump_file_path = ", dump_file_path);

        var file_handle = new File(dump_file_path, "a+");
        for (var i = 0; i < exportSymbols.length; i++) {
            file_handle.write(exportSymbols[i].name + ": " + (exportSymbols[i].address) + "\n");
        }

        file_handle.flush();
        file_handle.close();
        console.log("[dump symbols]:", dump_file_path);

    }


    /************************************************************************************** */

    /**
     * 定位frida防护的so库
     */
    export function location_anti_frida() {

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



    /**
     * hook dlopen函数，可用于定位指定so的加载时机
     * 
     * @param soName so的名字
     * @param enterFunc enter的回调函数, 无入参
     * @param leaveFunc leave的回调函数，无入参
     */
    export function hook_dlopen(soName: string, enterFunc: any, leaveFunc: any) {

        let android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
        if (android_dlopen_ext != null) {
            Interceptor.attach(android_dlopen_ext, {
                onEnter: function (args) {

                    let so_name = args[0].readCString();
                    console.log("[LOAD] ==> " + so_name);

                    if (so_name.indexOf(soName) !== -1) {
                        this.hook = true;
                        enterFunc();   //进入指定so时，回调enterFunc()
                    }
                }, onLeave: function (retval) {
                    if (this.hook) {
                        this.hook = false;
                        leaveFunc();  //离开指定so时，回调leaveFunc()
                    }
                }
            });
        }
    }



    /**
     * hook linker::CallConstructors函数，可用于定位so的初始化时机，比如hook so的 init函数.
     * 例如：
     * 1.打印init_array的所有函数地址：https://blog.seeflower.dev/archives/299/
     * 2.
     * 
     * @param soName so的名字
     * @param initFunc 初始化函数，无入参
     */
    export function hook_linker_call_constructor(soName: string, initFunc: any) {

        //1.找到Linker
        let already_hook = false;

        let get_soname: any = null;
        let call_constructor_addr = null;

        let linker = get_linker();

        //2.遍历符号列表，找到linker的 call_constructor和 get_soname 函数。
        let symbols = linker.enumerateSymbols();
        for (let i = 0; i < symbols.length; i++) {
            let symbol = symbols[i];
            if (symbol.name.indexOf("call_constructor") !== -1) {    //或者：(symbol.name == "__dl__ZN6soinfo17call_constructorsEv")
                call_constructor_addr = symbol.address;
            } else if (symbol.name.indexOf("get_soname") !== -1) {   //或者：(symbol.name == "__dl__ZNK6soinfo10get_sonameEv")
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

    export function print_module_init_func(targetSoName: string | null) {

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

                } else if (name.indexOf("async_safe_format_log") >= 0 && name.indexOf('va_list') < 0) {
                    addr_async_safe_format_log = symbols[i].address;

                }
            }
        }

        if (addr_call_function) {
            //3.1 hook call_function函数
            Interceptor.attach(addr_call_function, {
                onEnter: function (args) {

                    //打印init函数
                    print_init_func(args[0], args[2], args[1], targetSoName)

                },
                onLeave: function (retval) {

                }
            })

        } else if (addr_async_safe_format_log) {

            //3. hook async_safe_format_log函数
            Interceptor.attach(addr_async_safe_format_log, {
                onEnter: function (args) {

                    this.log_level = args[0];
                    this.tag = args[1].readCString()    //linker
                    this.fmt = args[2].readCString()    //"[ calling c-tor %s @ %p for '%s']"

                    if (this.fmt.indexOf("c-tor") >= 0 && this.fmt.indexOf('Done') < 0) {
                        //打印Init函数
                        print_init_func(args[3], args[5], args[4], targetSoName)
                    }
                },

                onLeave: function (retval) {

                }
            })
        }
    }


    export function hook_module_init_func(targetSoName: string, enterFunc: any, leaveFunc: any) {


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

                } else if (name.indexOf("async_safe_format_log") >= 0 && name.indexOf('va_list') < 0) {
                    addr_async_safe_format_log = symbols[i].address;
                }
            }
        }

        if (addr_call_function) {
            //3.1 hook call_function函数
            Interceptor.attach(addr_call_function, {
                onEnter: function (args) {

                    hook_init_func(args[0], args[2], args[1], targetSoName, enterFunc, leaveFunc)

                },
                onLeave: function (retval) {

                }
            })

        } else if (addr_async_safe_format_log) {
            //3.2 hook async_safe_format_log函数
            Interceptor.attach(addr_async_safe_format_log, {
                onEnter: function (args) {
                    this.log_level = args[0];
                    this.tag = args[1].readCString()    //linker
                    this.fmt = args[2].readCString()    //"[ calling c-tor %s @ %p for '%s']"
                    if (this.fmt.indexOf("c-tor") >= 0 && this.fmt.indexOf('Done') < 0) {

                        hook_init_func(args[3], args[5], args[4], targetSoName, enterFunc, leaveFunc)
                    }
                },

                onLeave: function (retval) {

                }
            })
        }
    }



    /**************************************** helper **************************************************** */

    
    function print_init_func(funcType: NativePointer, soPath: NativePointer, funcAddr: NativePointer, targetSoName: string | null) {
        let function_type = funcType.readCString()      // func_type
        let so_path = soPath.readCString();           // so_path

        var strs = so_path.split("/"); 
        let cur_so_name = strs.pop();

        //4.打印
        if (targetSoName == null || cur_so_name == targetSoName) {

            if (function_type.indexOf("function") >= 0) {
                let targetModule = Process.findModuleByName(cur_so_name)
                if (funcAddr > targetModule.base && funcAddr < targetModule.base.add(targetModule.size)) {
                    let func_offset = funcAddr.sub(targetModule.base)
                    console.log("func_type:", function_type, ' so_name:', cur_so_name, ' func_offset:', func_offset);
                }

            }

        }
    }


    
    function hook_init_func(funcType: NativePointer, soPath: NativePointer, funcAddr: NativePointer, targetSoName: string, enterFunc: any, leaveFunc: any) {
        let function_type = funcType.readCString();     // func_type
        let so_path = soPath.readCString();             // so_path

        var strs = so_path.split("/"); 
        let cur_so_name = strs.pop();

        
        if (cur_so_name != targetSoName) {
            return
        }

        //hook
        if (function_type.indexOf("function") >= 0) {
            let targetModule = Process.findModuleByName(cur_so_name)
            let func_offset = funcAddr.sub(targetModule.base)
            if (funcAddr > targetModule.base && funcAddr < targetModule.base.add(targetModule.size)) {
              
                Interceptor.attach(funcAddr, {
                    onEnter: function (args) {
                        console.log(`hook enter ==> ${targetSoName} : ${func_offset}`)
                        enterFunc(func_offset);
                    },
                    onLeave: function (retval) {
                        console.log(`hook leave ==> ${targetSoName} : ${func_offset}`)
                        leaveFunc(func_offset);
                    }
                });

            }

        }
    }

}



