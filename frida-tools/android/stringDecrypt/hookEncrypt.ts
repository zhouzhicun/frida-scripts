

//批量Hook字符串解密函数
function batchHookDecrypt(soName: string, funcAddr: number[]) {
    
    let moduleBase = Module.findBaseAddress(soName)
    for(let addr of funcAddr){
        Interceptor.attach(moduleBase.add(addr), {
            onEnter: function () {
            },
            onLeave: function (retval) {
                let str = retval.readCString()
                console.log("str = " + str + "; len = " + str.length);
            }
        });
    }

}