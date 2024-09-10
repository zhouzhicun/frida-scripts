
import { AndSo } from "../../android/utils/AndSo.js";
import { UEGame } from "../../games/UEGame.js";


export function main() {

    //3s后执行
    setImmediate(function () {
        //延迟1秒调用Hook方法
        setTimeout(aaa, 3000)
    });

}



function aaa() {

    //方式3：
    var libName = "libUE4.so"
    var GWorld_Offset = 0x0B32D8A8
    var GName_Offset = 0x0B171CC0
    var GUObjectArray_Offset = 0xB1B5F98

    let ueconfig = new UEGame.UEGameConfig(libName, GWorld_Offset, GName_Offset, GUObjectArray_Offset)
    UEGame.init(ueconfig)
    //let allActors = UEGame.getAllActor()

    //生命值属性的偏移
    let playerName = 'FirstPersonCharacter_C'
    let playerAddr = UEGame.getActorAddr(playerName)

    playerAddr.add(0x510).writeFloat(1000000);//通过偏移定位到生命值的变量并写入值
    UEGame.getActorLocation(playerAddr)
}


function setPlayerHP(hp: number = 1000000) {
    //生命值属性的偏移
    let playerName = 'FirstPersonCharacter_C'
    let playerAddr = UEGame.getActorAddr(playerName)

    playerAddr.add(0x510).writeFloat(hp);//通过偏移定位到生命值的变量并写入值

}






