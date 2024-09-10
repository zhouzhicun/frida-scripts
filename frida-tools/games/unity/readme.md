## dump SDK

### 情况1：global-metadata.dat未加密
global-metadata.dat未加密，直接使用il2cppDumper进行dump即可；


### 情况2：global-metadata.dat被整体加密
global-metadata.dat被加密，需要先dump得到解密的global-metadata.dat，然后使用il2cppDumper进行dump。
dump global-metadata.dat有两种方法：
#### 方式1：
来源：https://github.com/350030173/global-metadata_dump/blob/master/global-metadata_dump.js
原理：
直接搜索global-metadata.dat文件数据特征码(针对在内存中解密后 global-metadata.dat 头部特征不变的)：
sanity：AF 1B B1 FA (固定)
版本：  1D 00 00 00 (0x1D => 29)

010Editor有global-metadata.dat文件解析模板。

#### 方式2：
来源：https://raw.githubusercontent.com/IroniaTheMaster/Descrypt-global-metadata.dat/main/global-metadata-finder.js
原理：
1.IDA分析 MetadataLoader::LoadMetadataFile方法，得到该方法的偏移地址；
2.hook 该方法获取加载完 global-metadata.dat的内存返回值，然后再 dump下来。



### 情况3：global-metadata.dat被分块加密，分块加载，难以dump global-metadata.dat。
该情况，我们可利用下面脚本直接dump sdk.
仓库：https://github.com/AndroidReverser-Test/frida-find-il2cpp-api

原理：
脚本1：find_il2cpp.api.js，hook dlsym函数，并记录il2cpp开头的函数地址，并打印下来。
脚本2：find_il2cpp_api2.js，IDA打开libil2cpp.so文件，然后手动查找下面8个方法的偏移地址：
参考文档：https://github.com/AndroidReverser-Test/frida-find-il2cpp-api?tab=readme-ov-file
il2cpp_class_get_methods：搜索字符串 "InternalArray__";
il2cpp_method_get_name: 搜索字符串"Script error (%s): %s.\n"
il2cpp_class_get_name: 搜索字符串"%s%s%s must be instantiated using the ScriptableObject.CreateInstance method instead of new %s."
il2cpp_class_get_namespace: 搜索字符串"%s%s%s must be instantiated using the ScriptableObject.CreateInstance method instead of new %s."
il2cpp_class_from_type: 搜索字符串"Unsupported enum type '%s' used for field '%s' in class '%s'"
il2cpp_class_get_type: 搜索字符串"Unsupported enum type '%s' used for field '%s' in class '%s'"
il2cpp_method_get_param: 搜索字符串"Script error(%s): %s.\n"
il2cpp_method_get_param_count: 搜索字符串"Failed to call function %s of class %s\n"


### 情况4：魔改unity引擎
仓库：https://github.com/AndroidReverser-Test/il2cpp_class_dumper



资源提取
AssetStudioGUI