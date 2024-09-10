

//dump_memory("libpdd_secure.so", 0x60000, 0x42E0)
function dump_memory(soName: string, startAddr: number, len: number) {
    var base_addr = Module.findBaseAddress(soName);
    var dump_addr = base_addr.add(startAddr);
    console.log(hexdump(dump_addr, {length: len}));
}


/**
 
import idaapi
hex_string = "0000000000000000"
barr = bytes.fromhex(hex_string)
idaapi.patch_bytes(0x60000, barr)

 */