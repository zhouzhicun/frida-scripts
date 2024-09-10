import { ZZStringUtils } from "./zzStringUtils.js";


export namespace ZZPatch64 {


    function log(funcName: string, soName: string) {
        console.log("%s error ==> %s 模块不存在，请检查处理时机是否正确。", funcName, soName);
    }


    //======================================== NOP函数系列 =================================================

    /**
     * NOP函数，使其直接返回；支持arm64
     * @param funcBaseAddr 
     */
    export function nopFunc(funcBaseAddr: NativePointer) {
        Memory.patchCode(funcBaseAddr, 4, code => {
            const cw = new Arm64Writer(code, { pc: funcBaseAddr });
            cw.putRet();
            cw.flush();
        });
    }

    /**
     * 批量NOP函数
     * @param funcBaseAddrArr 
     */
    export function nopFunc_batch(funcBaseAddrArr: NativePointer[]) {
        for (let i = 0; i < funcBaseAddrArr.length; i++) {
            nopFunc(funcBaseAddrArr[i])
        }
    }

    /**
     * 批量NOP指定so中的指定函数
     * @param soName 
     * @param funcBaseOffsetAddrArr 
     * @returns 
     */
    export function nopFunc_batch_by_offset(soName: string, funcBaseOffsetAddrArr: number[]) {

        let targetModule = Process.findModuleByName(soName);
        if (!targetModule) {
            log('nopFunc_batch_by_offset', soName)
            return
        }

        for (let i = 0; i < funcBaseOffsetAddrArr.length; i++) {
            nopFunc(targetModule.base.add(funcBaseOffsetAddrArr[i]))
        }
    }


    //===================================== NOP指令处理 ================================================


    /**
     * NOP连续N条arm64指令，N默认为1
     * @param startAddr 起始地址
     * @param n         指令条数
     */
    export function nopInsn(startAddr: NativePointer, n: number = 1) {
        Memory.patchCode(startAddr, 4 * n, code => {
            const cw = new Arm64Writer(code, { pc: startAddr });
            for (let i = 0; i < n; i++) {
                cw.putNop();
            }
            cw.flush();
        });
    }

    /**
     * 批量NOP
     * @param startAddr 地址数组 
     */
    export function nopInsn_batch(addrs: NativePointer[]) {
        for (let i = 0; i < addrs.length; i++) {
            nopInsn(addrs[i])
        }
    }

    /**
     * 批量NOP
     * @param soName so名字
     * @param offsetAddrArr 偏移地址数组 
     * @returns 
     */
    export function nopInsn_batch_by_offset(soName: string, offsetAddrArr: number[]) {
        let targetModule = Process.findModuleByName(soName);
        if (!targetModule) {
            log('nop64_batch_by_offset', soName)
            return
        }
        for (let i = 0; i < offsetAddrArr.length; i++) {
            nopInsn(targetModule.base.add(offsetAddrArr[i]))
        }
    }


    
    /*********************************** Patch指令ARM64 ******************************************** */


    //patch
    export function patchCode_with_codeBytes(startAddr: NativePointer, codeBytes: number[]) {
        Memory.patchCode(startAddr, codeBytes.length, code => {
            const cw = new Arm64Writer(code, { pc: startAddr });
            cw.putBytes(codeBytes);
            cw.flush();
        });
    }

    
    //批量patch
    export function patchCode_batch_by_codeBytes(arr: [NativePointer, number[]][]) {

        for (let tuple of arr) {
            let addr = tuple[0]
            let codeBytes = tuple[1]
            patchCode_with_codeBytes(addr, codeBytes)
        }
    }


    /**
     * patch 连续N条指令
     * @param startAddr 其实地址
     * @param codehex  N条指令对应的机器码(16进制表示)，每条指令占8个字符，支持空格隔开，例如：
     * '9511168d393ceaeeefb4ed6c03c60941' 或者 '9511168d 393ceaee efb4ed6c 03c60941'
     */
    export function patchCode_with_codeHex(startAddr: NativePointer, codehex: string) {

        //1.替换指令代码中的空格
        codehex = codehex.replace(/\s/g, '');
        const bytes = ZZStringUtils.hexToBytes(codehex)
        patchCode_with_codeBytes(startAddr, bytes)

    }

    //批量patch
    export function patchCode_batch_by_codeHex(arr: [NativePointer, string][]) {

        for (let tuple of arr) {
            let addr = tuple[0]
            let hexcode = tuple[1]
            patchCode_with_codeHex(addr, hexcode)
        }
    }

}

