
import { Buffer } from "node:buffer";

/**
 * string, bytes, hex 三者之间互转操作
 * 
 */
export namespace ZZStringUtils {


    /******************* bytes 与 字符串 互转  ************************/

    //bytes转字符串
    export function bytesToString(bytes: number[]): string {
        let tempBytes = Buffer.from(bytes)
        var str = ''
        for (var i = 0; i < tempBytes.length; i++) {
            str += String.fromCharCode(tempBytes[i])
        }
        return str;
    }

    //字符串转bytes
    export function stringToBytes(str: string): number[] {
        return hexToBytes(stringToHex(str))
    }


    /******************* hex字符串 与 字符串 互转  ************************/


    //hex字符串转字符串
    export function hexToString(hexStr: string): string {
        let hex = hexStr.toString()
        let str = ''
        for (let i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
        return str
    }

    //字符串转hex
    export function stringToHex(str: string): string {
        return str
            .split('')
            .map(function (c) {
                return ('0' + c.charCodeAt(0).toString(16)).slice(-2)   // '0' 用于确保每个 Unicode 编码的十六进制表示都有两位。例如：'065' => '65', '06' => '06'
            })
            .join('')
    }



    /******************* hex字符串 与 bytes 互转  ************************/

    //hex字符串转bytes
    export function hexToBytes(hexStr: string): number[] {
        let bytes: number[] = [] 
        for (let c = 0; c < hexStr.length; c += 2) bytes.push(parseInt(hexStr.substr(c, 2), 16))
        return bytes
    }

    //bytes转hex字符串
    export function bytesToHex(bytes: number[]): string {
        let tempBytes = Buffer.from(bytes)
        var str = ''
        for (var i = 0; i < tempBytes.length; i++) {
            str += ('00' + (tempBytes[i] & 0xFF).toString(16)).slice(-2)
        }
        return str
    }

    /******************* string 与 bytes 互转  ************************/

    export function bytesToBase64(bytes: number[]): string {
        //bytes = Java.array('byte', bytes);
        return Buffer.from(bytes).toString('base64')
    }

    export function base64ToBytes(base64: string): number[] {
        return Array.from(Buffer.from(base64, 'base64'))
    }


}

