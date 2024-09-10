import { Base } from "../base/zzBase.js";

export namespace AntiJavaDebug {

    const antiDebugLogTip = "anti_java_debug ==>"

    export function anti_debug() {
        anti_isDebuggable();
        anti_isDebuggerConnected();
        anti_system_getProperty();
        anti_emulator();
        anti_strace();
    }

    function anti_isDebuggable() {

        Java.perform(function () {
            var Build = Java.use("android.os.Build");
            Build.isDebuggable.implementation = function () {
                console.log(antiDebugLogTip + "Build.isDebuggable() called");
                return false;
            };
        });
    }

    function anti_isDebuggerConnected() {

        Java.perform(function () {
            var Debug = Java.use("android.os.Debug");
            Debug.isDebuggerConnected.implementation = function () {
                console.log(antiDebugLogTip + "Debug.isDebuggerConnected() called");
                return false;
            };
        });
    }

    function anti_system_getProperty() {
        Java.perform(function () {
            var System = Java.use('java.lang.System');
            System.getProperty.overload('java.lang.String').implementation = function (name: string) {
                console.log(antiDebugLogTip + 'System.getProperty() called with name: ' + name);
                if (name === 'ro.secure') {
                    return '1'; // 1 for 安全, 0 for 不安全
                } else if (name === 'ro.debuggable') {
                    return '0'; // 0 for 非调试模式, 1 for 调试模式
                }
                return this.getProperty(name);
            };
        });
    }



    function anti_strace() {

    }

    function anti_emulator() {

        // Java.perform(function () {
        //     var Build = Java.use("android.os.Build");
        //     Build.FINGERPRINT.value = "generic";
        //     Build.HARDWARE.value = "goldfish";
        //     Build.PRODUCT.value = "sdk";
        //     Build.BOARD.value = "unknown";
        //     Build.BOOTLOADER.value = "unknown";
        //     Build.BRAND.value = "generic";
        //     Build.DEVICE.value = "generic";
        //     Build.MODEL.value = "sdk";
        //     Build.SERIAL.value = "unknown";
        //     Build.TAGS.value = "test-keys";
        //     Build.TYPE.value = "userdebug";
        //     Build.USER.value = "android-build";
        // });
    }


}
