

// export namespace UEGame {

//     export class UEGameConfig {

//         public ueEngineName: string

//         //全局信息
//         public offset_gworld = 0
//         public offset_gname = 0
//         public offset_guobject = 0

//         //获取所有Actors
//         public offset_GWorld_Level = 0x30               //level字段在World对象中的偏移
//         public offset_Level_Actors = 0x98               //actors字段在Level对象中的偏移

//         //对象相关的偏移
//         public offset_UObject_ClassPrivate = 0x10       //指向描述对象类的 UClass 对象
//         public offset_UObject_FNameIndex = 0x18         //对象名称在 FName 表中的索引
//         public offset_UObject_OuterPrivate = 0x20       //指向包含该对象的外部对象，表示层次关系。


//         //fname偏移配置
//         public fnameConfig = new UEFNameConfig()


//         constructor(ueEngine: string, gworld: number, gname: number, guobject: number) {
//             this.ueEngineName = ueEngine
//             this.offset_gworld = gworld
//             this.offset_gname = gname
//             this.offset_guobject = guobject
//         }

//     }


//     export class UEFNameConfig {

//         // FNamePool相关偏移量和步长
//         public FNameStride = 0x2;                   // FNameEntry 的步长，每个FNameEntry占用2字节
//         public offset_FNamePool_Blocks = 0x40;      // GName(即FNamePool) 到 Blocks 的偏移量

//         // FNameEntry相关偏移量和位
//         public offset_FNameEntryHeader = 0;             // FNameEntry 到 Info 的偏移量
//         public offset_FNameEntry_ansiString = 0x2;      // FNameEntry 到字符串部分的偏移量
//         public FNameEntry_LenBit = 6;                   // FNameEntry 长度位

//         //block计算, 固定
//         public FNameBlockOffsetBits = 16
//         public FNameBlockOffsets = 65536

//         public FNAME_NONE = "None"

//     }


//     let ueConfig: UEGameConfig
//     let moduleBase: NativePointer
//     let GName: NativePointer
//     let GWorld: NativePointer
//     let GUObjectArray: NativePointer


//     //---------------------------------------------------------------------
//     //                  private 
//     //---------------------------------------------------------------------

//     function getClass(objPtr: NativePointer) {
//         var classPrivate = objPtr.add(ueConfig.offset_UObject_ClassPrivate).readPointer()
//         return classPrivate
//     }

//     function isValid(objPtr: NativePointer) {
//         var isValid = objPtr.toUInt32() > 0 && getClass(objPtr).toUInt32() > 0 && getNameId(objPtr) > 0
//         return isValid
//     }



//     //---------------------------------------------------------------------
//     //                  public 
//     //---------------------------------------------------------------------


//     export function init(config: UEGameConfig) {
//         ueConfig = config
//         moduleBase = Module.findBaseAddress(ueConfig.ueEngineName)

//         //gworld是将offset_gworld所在变量赋值给gworld，因此要读取指针值
//         GWorld = moduleBase.add(ueConfig.offset_gworld).readPointer()
//         GName = moduleBase.add(ueConfig.offset_gname)
//         GUObjectArray = moduleBase.add(ueConfig.offset_guobject)

//         console.log("GWorld: " + GWorld)
//         console.log("GName: " + GName)
//         console.log("GUObjectArray: " + GUObjectArray)

//     }




//     /****************************** getName ***************************** */

//     export function getNameId(objPtr: NativePointer) {
//         try {
//             let nameId = objPtr.add(ueConfig.offset_UObject_FNameIndex).readU32()
//             return nameId
//         } catch (error) {
//             console.log("getNameId error")
//             return -1
//         }
//     }

//     export function getName(objPtr: NativePointer) {

//         if (isValid(objPtr)) {
//             return getFNameFromID(getNameId(objPtr))
//         } else {
//             return ueConfig.fnameConfig.FNAME_NONE
//         }
//     }

//     export function getClassName(objPtr: NativePointer) {
//         if (isValid(objPtr)) {
//             var classPrivate = getClass(objPtr)
//             return getName(classPrivate)
//         } else {
//             return ueConfig.fnameConfig.FNAME_NONE
//         }
//     }

//     export function calcBlockIndexAndOffset(index: number) {
//         let blockIndex = index >> ueConfig.fnameConfig.FNameBlockOffsetBits
//         let offset = index & (ueConfig.fnameConfig.FNameBlockOffsets - 1)
//         return [blockIndex, offset]
//     }

//     export function getFNameFromID(nameId: number) {

//         let NamePoolBlocks = GName.add(ueConfig.fnameConfig.offset_FNamePool_Blocks)

//         //1.根据nameId计算blockIndex和offset, 并进一步获得对应的NameEntry
//         let [blockIndex, offset] = calcBlockIndexAndOffset(nameId)
//         var targetBlock = NamePoolBlocks.add(blockIndex * Process.pointerSize).readPointer()
//         var targetNameEntry = targetBlock.add(ueConfig.fnameConfig.FNameStride * offset)

//         //2.获取nameEntryHeader
//         try {
//             //判断是否有偏移，有则加上偏移
//             if (ueConfig.fnameConfig.offset_FNameEntryHeader) {
//                 var nameEntryHeader = targetNameEntry.add(ueConfig.fnameConfig.offset_FNameEntryHeader).readU16()
//             } else {
//                 var nameEntryHeader = targetNameEntry.readU16()
//             }
//         } catch (error) {
//             console.log("读取nameEntryHeader失败, error=", error)
//         }

//         //3.读取name
//         var isWide = nameEntryHeader & 1
//         var len = nameEntryHeader >> 6
//         if (0 == isWide) {

//             if (len > 0 && len <= 255) {
//                 var name = targetNameEntry.add(ueConfig.fnameConfig.offset_FNameEntry_ansiString).readUtf8String(len)
//                 return name
//             } else {
//                 console.log("长度不合理，返回None")
//                 return ueConfig.fnameConfig.FNAME_NONE
//             }

//         } else {
//             console.log("是wchar宽字符串，返回None")
//             return ueConfig.fnameConfig.FNAME_NONE
//         }
//     }


//     /********************************* 获取地址 ************************************** */

//     //返回actor的名称和地址dict
//     export function getAllActor() {


//         let Level = GWorld.add(ueConfig.offset_GWorld_Level).readPointer()
//         let Actors = Level.add(ueConfig.offset_Level_Actors).readPointer()

//         let actorNum = Level.add(ueConfig.offset_Level_Actors).add(0x8).readU32()  //获取Actor的数量
//         let actorAddrMap = new Map();
//         for (let index = 0; index < actorNum; index++) {
//             var actorAddr = Actors.add(index * Process.pointerSize).readPointer()
//             var actorName = getName(actorAddr)
//             if (actorName != ueConfig.fnameConfig.FNAME_NONE) {
//                 actorAddrMap.set(actorName, actorAddr);
//             }

//         }

//         // console.log("------------------------- print actorAddrMap ----------------------------")
//         // console.log("size = ", actorAddrMap.size)
//         // for (let name of actorAddrMap.keys()) {
//         //     console.log("name = ", name, "addr = ", actorAddrMap.get(name))
//         // }

//         return actorAddrMap

//     }

//     export function getActorAddr(name: string) {
//         let actorAddrMap = getAllActor()
//         return actorAddrMap.get(name)
//     }


//     /************************************ 获取角色位置 ****************************************** */

//     class Vector {//设置向量对象
//         public x: any
//         public y: any
//         public z: any
//         constructor(x: any, y: any, z: any) {
//             this.x = x;
//             this.y = y;
//             this.z = z;
//         }
//         // 将向量转换为字符串
//         toString() {
//             return `(${this.x}, ${this.y}, ${this.z})`;
//         }
//     }

//     function dumpVector(addr: any) {

//         // 从地址空间中读取三个浮点数
//         const values = addr.readByteArray(addr, 3 * 4);  // 3个float共占12个字节
//         console.log("values = ", values)

//         // 解析浮点数并初始化 Vector 对象
//         const vec = new Vector(
//             new Float32Array(values, 0, 1)[0],  // 读取第一个浮点数
//             new Float32Array(values, 4, 1)[0],  // 读取第二个浮点数
//             new Float32Array(values, 8, 1)[0]   // 读取第三个浮点数
//         );
//         console.log("3333333333333333")
//         console.log('[+] 坐标：', vec);//打出坐标。
//     }

//     export function getActorLocation(actorAddr: any) {

//         console.log("11111111111111111")
//         var buf = Memory.alloc(0x100);

//         //获取角色位置：Vector K2_GetActorLocation();// 0x965ddf8
//         //0x965ddf8 这个地址可在dump下的SDK文件里找到
//         var f_addr = moduleBase.add(0x965ddf8); 
//         var GetActorLocationFunc = new NativeFunction(f_addr, 'void', ['pointer','int','pointer']);

//         // 调用目标函数并传递内存地址作为参数
//         try {
//             console.log("2222222222222222")
//             GetActorLocationFunc(actorAddr, buf.toUInt32(), buf);
//             dumpVector(buf);

//             //info(ptr(actor_addr).add(0x130).readPointer().add(0x14c).readU8()&32 != 0);
//         } catch (e) {
//             console.log("e = ", e)
//         }

//     }


// }

