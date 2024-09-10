
//以下偏移需要手动从IDA中定位
let offset_il2cpp_class_get_methods         = 0x44582C8
let offset_il2cpp_method_get_name           = 0x350C868
let offset_il2cpp_class_get_name            = 0x350C618
let offset_il2cpp_class_get_namespace       = 0x350C628
let offset_il2cpp_class_from_type           = 0x350C898
let offset_il2cpp_class_get_type            = 0x350C678
let offset_il2cpp_method_get_param          = 0x350C8A0
let offset_il2cpp_method_get_param_count    = 0x350C898


//===============================================================================

function find_il2cpp_api(){
    let unity_base = Process.findModuleByName("libunity.so").base;
    let il2cpp_base = Process.findModuleByName("libil2cpp.so").base;


    let fil2cpp_api = {"il2cpp_class_get_methods":ptr(offset_il2cpp_class_get_methods)};
    let il2cpp_method_get_name = unity_base.add(offset_il2cpp_method_get_name);
    let il2cpp_class_get_name = unity_base.add(offset_il2cpp_class_get_name);
    let il2cpp_class_get_namespace = unity_base.add(offset_il2cpp_class_get_namespace);
    let il2cpp_class_from_type = unity_base.add(offset_il2cpp_class_from_type);
    let il2cpp_class_get_type = unity_base.add(offset_il2cpp_class_get_type);
    let il2cpp_method_get_param = unity_base.add(offset_il2cpp_method_get_param);
    let il2cpp_method_get_param_count = unity_base.add(offset_il2cpp_method_get_param_count);
    

    fil2cpp_api["il2cpp_method_get_name"] = il2cpp_method_get_name.readPointer().sub(il2cpp_base);
    fil2cpp_api["il2cpp_class_get_name"] = il2cpp_class_get_name.readPointer().sub(il2cpp_base);
    fil2cpp_api["il2cpp_class_get_type"] = il2cpp_class_get_type.readPointer().sub(il2cpp_base);
    fil2cpp_api["il2cpp_class_get_namespace"] = il2cpp_class_get_namespace.readPointer().sub(il2cpp_base);
    fil2cpp_api["il2cpp_method_get_param"] = il2cpp_method_get_param.readPointer().sub(il2cpp_base);
    fil2cpp_api["il2cpp_method_get_param_count"] = il2cpp_method_get_param_count.readPointer().sub(il2cpp_base);
    fil2cpp_api["il2cpp_class_from_type"] = il2cpp_class_from_type.readPointer().sub(il2cpp_base);

    console.log("var il2cpp_api = {");
    for(let key in fil2cpp_api){
        console.log('"'+key+'"'+":"+fil2cpp_api[key]+",");
    }
    console.log("};");
}



