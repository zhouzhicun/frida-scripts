/**
 * 
 * 由于syscall主动调用时不定参数传递暂无法用ts实现，因此将写文件的函数抽取出来，用js实现。
 * 
 * 
 */




/** 
 * 调用frida提供的接口dump指定内存到指定文件中。
 */
export function write_mem_to_file(dump_file_path, base, size) {

    var file_handle = new File(dump_file_path, "wb");
    if (file_handle && file_handle != null) {
        console.log("------------------dump by frida api ---------------------")
        Memory.protect(base, size, 'rwx');
        var libso_buffer = base.readByteArray(size);
        file_handle.write(libso_buffer);
        file_handle.flush();
        file_handle.close();
        return true;
    }
    return false;

}


/** 
 * 调用fwrite函数 dump指定内存到指定文件中。
 * 参考文档：https://bbs.kanxue.com/thread-276893.htm 
 */
export function write_mem_to_file_by_fwrite(dump_file_path, base, size) {

    var fopen = Module.findExportByName('libc.so', 'fopen');
    var fwrite = Module.findExportByName('libc.so', 'fwrite');
    var fclose = Module.findExportByName('libc.so', 'fclose');

    var call_fopen = new NativeFunction(fopen, 'pointer', ['pointer', 'pointer']);
    var call_fwrite = new NativeFunction(fwrite, 'int', ['pointer', 'int', 'int', 'pointer']);
    var call_fclose = new NativeFunction(fclose, 'int', ['pointer']);

    var fp = call_fopen(Memory.allocUtf8String(dump_file_path), Memory.allocUtf8String('wb'));

    if (fp) {
        console.log("------------------dump by fwrite ---------------------")
        if (call_fwrite(base, 1, size, fp)) {
            console.log('[ dump ] Write file success, file path: ' + dump_file_path);
            call_fclose(fp);
            return true
        } else {
            console.log('[ dump ] Write file failed');
            call_fclose(fp);
        }
        
    } else {
        console.log('[dump] fopen file failed');
        return false
    }
   

}


/**
 * 调用syscall函数替代fwrite函数，dump指定内存到指定文件中。步骤如下：
 * 1.调用fopen打开文件，并返回FILE *
 * 2.调用fileno函数将FILE * 转换为句柄
 * 3.调用syscall(req_write, file_handle, base, size) 写入文件
 * 
 * 原本使用syscall全部代替open, write, close；但是打开文件时flags传0x242(O_WRONLY | O_CREAT | O_TRUNC), 只能第一次打开文件，后续打开就报错，暂未找到原因因此放弃。 
 */
export function write_mem_to_file_by_syscall(dump_file_path, base, size) {

    var fopen = Module.findExportByName('libc.so', 'fopen');
    var fclose = Module.findExportByName('libc.so', 'fclose');
    var fileno = Module.findExportByName('libc.so', 'fileno');

    var call_fopen = new NativeFunction(fopen, 'pointer', ['pointer', 'pointer']);
    var call_fclose = new NativeFunction(fclose, 'int', ['pointer']);
    var call_fileno = new NativeFunction(fileno, 'int', ['pointer']);

    //size_t write(int fildes,const void *buf,size_t nbytes);
    var syscall = Module.findExportByName('libc.so', 'syscall');
    var call_syscall_write = new NativeFunction(syscall, 'int', ['int', 'int', 'pointer', 'int']); 


    let syscall_req_write = 64;
    var fp = call_fopen(Memory.allocUtf8String(dump_file_path), Memory.allocUtf8String('wb'));
    if(fp) {
        console.log("------------------dump by syscall ---------------------")
        let file_handle = call_fileno(fp)
        if (call_syscall_write(syscall_req_write, file_handle, base, size)) {
            console.log('[ dump ] Write file success, file path: ' + dump_file_path);
            call_fclose(fp)
            return true
        } else {
            console.log('[ dump ] Write file failed');
            call_fclose(fp)
            return false
        }
        
    } else {
        console.log('[dump] fopen file failed');
        return false
    }
}

