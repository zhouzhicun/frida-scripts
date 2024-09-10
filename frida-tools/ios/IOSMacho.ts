/** hook ios的_module_init_func (pokemongo NianticLabsPlugin分析)
 * 
 * 参考地址：
 * https://bbs.kanxue.com/thread-278803.htm
 * https://www.romainthomas.fr/post/21-07-pokemongo-anti-frida-jailbreak-bypass/
 * 
 * 原理：
 * 利用dyld在调用_mod_init_function区中的函数前会先使用containAddress函数校验一番，因此直接Hook containAddress函数即可。
 
void ImageLoaderMachO::doModInitFunctions(const LinkContext& context) {
  ...
  for (const struct macho_section* sect=sectionsStart; sect < sectionsEnd; ++sect) {
    const uint8_t type = sect->flags & SECTION_TYPE;
    if ( type == S_MOD_INIT_FUNC_POINTERS ) {
      Initializer* inits = (Initializer*)(sect->addr + fSlide);
      ...
      if (!this->containsAddress(stripPointer((void*)func)) ) {
        dyld::throwf("initializer function %p not in mapped image for %s\n", func, this->getPath());
      }
      ...
      func(context.argc, context.argv, context.envp, context.apple, &context.programVars);
    }
  }
  ...
}


 * 
 */



export namespace IOSMacho {


    //hook module init函数
    export function hook_mod_init_func(targetModuleName: string, callback: any) {

        // frida hook dyld的ImageLoader::containsAddress方法, 源码参考：
        // https://opensource.apple.com/source/dyld/dyld-239.3/src/ImageLoader.cpp.auto.html

        let dyld = Process.getModuleByName('dyld');
        if (dyld) {
            let symbols = dyld.enumerateSymbols()
            if (symbols) {

                //遍历符号表，找到ImageLoader::containsAddress符号，然后hook
                symbols.forEach((symbol) => {
                    if (symbol.name.indexOf('ImageLoader') >= 0 && symbol.name.indexOf('containsAddress') >= 0) {
                        console.log(`symbol name  = ${symbol.name}`)
                        inner_hook_mod_init_func(symbol.address, targetModuleName, callback)
                    }
                })
            }

        }

    }


    //hook containsAddress函数
    function inner_hook_mod_init_func(addr: NativePointer, targetModuleName: string, callback: any) {
        Interceptor.attach(addr, {
            onEnter: function () {
                let curContext = this.context as Arm64CpuContext
                var debugSymbol = DebugSymbol.fromAddress(curContext.x1)
                if (debugSymbol.moduleName == targetModuleName) {
                    let curAddr = debugSymbol.address
                    Interceptor.attach(curAddr, {
                        onEnter: function () {
                            console.log(`hook ==> ${targetModuleName} : ${curAddr}`)
                            callback(curAddr)
                        },
                        onLeave: function () {

                        }
                    })
                }

            }, onLeave: function () {

            }
        })
    }


}

