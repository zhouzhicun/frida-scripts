
import * as AndDex from './andDex.js';

/**
方法1：根据global_metadata的数据特征进行dump
仓库地址：github:https://github.com/350030173/global-metadata_dump

用法：
frida -U -l global-metadata_dump.js packagename
导出的文件在/data/data/yourPackageName/global-metadata.dat

*/


/**
 * 方法2：hook MetadataLoader::LoadMetadataFile方法, 对global-metadata.dat进行dump
 * 来源：https://raw.githubusercontent.com/IroniaTheMaster/Descrypt-global-metadata.dat/main/global-metadata-finder.js
 * 
 * 原理：
 * 1.IDA分析 MetadataLoader::LoadMetadataFile方法，得到该方法的偏移地址；
 * 2.hook 该方法获取加载完 global-metadata.dat的内存返回值，然后再 dump下来。
 * 
 */



//方法1
export function dump_global_metadata_by_search(version) {

    //特征：santity + version(16进制) + "00 00 00",  
    //例如：v24版本：pattern = "AF 1B B1 FA 18 00 00 00" 
    var sanity = "AF 1B B1 FA"  //global-metadata.dat sanity
    var pattern = sanity
    if(version > 0) {
        pattern = sanity + " " + version.toString(16).toUpperCase() + " 00 00 00" 
    }

    Java.perform(function () {

        console.log("头部标识:" + pattern);
        var addrArray = Process.enumerateRanges("r--");
        for (var i = 0; i < addrArray.length; i++) {
            var addr = addrArray[i];
            Memory.scan(addr.base, addr.size, pattern, {
                onMatch: function (address, size) {
                    console.log('搜索到 ' + pattern + " 地址是:" + address.toString());
                    console.log(hexdump(address, {
                        offset: 0,
                        length: 0x110,
                        header: true,
                        ansi: true
                    }
                    ));

                    //1.首先从0x108，0x10C读取DefinitionsOffset，DefinitionsOffset_size
                    var DefinitionsOffset = parseInt(address, 16) + 0x108;
                    var DefinitionsOffset_size = Memory.readInt(ptr(DefinitionsOffset));

                    var DefinitionsCount = parseInt(address, 16) + 0x10C;
                    var DefinitionsCount_size = Memory.readInt(ptr(DefinitionsCount));

                    //2.如果0x108，0x10C如果不行，换 0x100，0x104读取DefinitionsOffset，DefinitionsOffset_size
                    if (DefinitionsCount_size < 10) {

                        DefinitionsOffset = parseInt(address, 16) + 0x100;
                        DefinitionsOffset_size = Memory.readInt(ptr(DefinitionsOffset));

                        DefinitionsCount = parseInt(address, 16) + 0x104;
                        DefinitionsCount_size = Memory.readInt(ptr(DefinitionsCount));
                    }

                    //根据两个偏移得出global-metadata大小
                    var global_metadata_size = DefinitionsOffset_size + DefinitionsCount_size
                    console.log("大小：", global_metadata_size);
                    var file = new File("/data/data/" + AndDex.get_self_process_name() + "/global-metadata.dat", "wb");
                    file.write(Memory.readByteArray(address, global_metadata_size));
                    file.flush();
                    file.close();
                    console.log('路径：' + "/data/data/" + AndDex.get_self_process_name() + "/global-metadata.dat");
                    console.log('导出完毕...');
                },
                onComplete: function () {
                    //console.log("搜索完毕")
                }
            }
            );
        }
    }
    );
}




//方法1
export function dump_global_metadata_by_hook(funcOffset) {

    Interceptor.attach(Module.findExportByName(null, 'dlopen'), {
        onEnter: function (args) {
            this.path = args[0].readUtf8String();
        },
        onLeave: function (retval) {
            if (this.path.indexOf('libil2cpp.so') !== -1) {
                var il2cpp = Module.findBaseAddress('libil2cpp.so');
                console.error('[!] il2cpp : ' + il2cpp);
                var LoadMetaDataFile = il2cpp.add(funcOffset);
                Interceptor.attach(LoadMetaDataFile, {
                    onLeave: function (retval) {
                        console.error('[!] LoadMetaDataFile retval : ' + retval);
                    }
                });
            }
        }
    });
}




