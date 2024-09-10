

//==========================================================
//
// 由于ts文件格式下 Java.classFactory.loader无法赋值，因此改为js文件。
//
//==========================================================


//
//get_self_process_name()获取当前运行进程包名
//参考：https://github.com/lasting-yang/frida_dump/blob/master/dump_dex_class.js
export function get_self_process_name() {
	var openPtr = Module.getExportByName('libc.so', 'open');
	var open = new NativeFunction(openPtr, 'int', ['pointer', 'int']);

	var readPtr = Module.getExportByName("libc.so", "read");
	var read = new NativeFunction(readPtr, "int", ["int", "pointer", "int"]);

	var closePtr = Module.getExportByName('libc.so', 'close');
	var close = new NativeFunction(closePtr, 'int', ['int']);

	var path = Memory.allocUtf8String("/proc/self/cmdline");
	var fd = open(path, 0);
	if (fd != -1) {
		var buffer = Memory.alloc(0x1000);
		var result = read(fd, buffer, 0x1000);
		close(fd);
		result = ptr(buffer).readCString();
		return result;
	}

	return "-1";
}




   //获取java对象的类名
export function get_class_name(object) {
    if (object !== null) {
        return object.getClass().getName();
    } else {
        return null;
    }
}


export function load_dex(path) {

    //例如动态加载 okhttp3logging.dex:  path = "/data/local/tmp/okhttp3logging.dex"
    Java.perform(function () {
        Java.openClassFile(path).load();
    });

}

/**
 * hook动态加载的Java类（确保已加载）; 具体hook操作在callback函数中实现。
 * 
 * @param {*} clsName 类名
 * @param {*} callback 回调函数
 */
export function hook_java_dynamic_loaded(clsName, callback) {

    Java.perform(function () {

        var oldLoader = null

        //1.枚举classLoader，找到加载指定class的classLoader
        Java.enumerateClassLoaders({
            onMatch: function (loader) {
                try {
                    if (loader.findClass(clsName)) {
                        //重置loader
                        oldLoader = Java.classFactory.loader;
                        Java.classFactory.loader = loader;
                        console.log(loader);
                    }
                } catch (error) { }

            }, onComplete: function () {

            }
        });

        //2.对指定class进行hook
        callback()

        //3.还原loader
        Java.classFactory.loader = oldLoader

    });
}


/**
 * hook InMemoryDexClassLoader的init时机; 具体hook操作在callback函数中实现。
 * 
 * @param {*} clsName 类名
 * @param {*} callback 回调函数
 */
export function hook_InMemoryDexClassLoader_init(callback) {

    const InMemoryDexClassLoader = Java.use('dalvik.system.InMemoryDexClassLoader');
    InMemoryDexClassLoader.$init.overload('java.nio.ByteBuffer', 'java.lang.ClassLoader').implementation = function (buff, loader) {

        this.$init(buff, loader);
        var oldLoader = Java.classFactory.loader;
        Java.classFactory.loader = this;
        callback();
        Java.classFactory.loader = oldLoader;
        return undefined;
    }
}
