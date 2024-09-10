import { Base } from "../../base/zzBase.js";



export namespace AndUI {


    /*--------------------------------------  public ---------------------------------------------- */

    export function hook_ui() {
        hook_activity();
        hook_Dialog();
        hook_fragment();
        hook_AlertDialog();
        hook_PopupWindow();
        hook_toast();
        hook_onClick();
        hook_WebView();
    }

    function get_class_name(obj: any) {
        return obj.getClass().getName()
    }



    export function hook_activity() {

        Java.perform(function () {

            var Activity = Java.use("android.app.Activity");

            Activity.onCreate.overload('android.os.Bundle').implementation = function (bundle: any) {

                console.log("Activity.onCreate() called ==>" + get_class_name(this));
                this.onCreate(bundle);
            };

            Activity.onStart.implementation = function () {
                console.log("Activity.onStart() called ==>" + get_class_name(this));
                this.onStart();
            };

            Activity.onResume.implementation = function () {
                console.log("Activity.onResume() called ==>" + get_class_name(this));
                this.onResume();
            };

            Activity.onPause.implementation = function () {
                console.log("Activity.onPause() called ==>" + get_class_name(this));
                this.onPause();
            };

            Activity.onStop.implementation = function () {
                console.log("Activity.onStop() called ==>" + get_class_name(this));
                this.onStop();
            };

            Activity.onDestroy.implementation = function () {
                console.log("Activity.onDestroy() called ==>" + get_class_name(this));
                this.onDestroy();
            };

            Activity.onRestart.implementation = function () {
                console.log("Activity.onRestart() called ==>" + get_class_name(this));
                this.onRestart();
            };
        });
    }



    export function hook_Dialog() {

        Java.perform(function () {
            var Dialog = Java.use("android.app.Dialog");

            Dialog.show.implementation = function () {
                console.log("Dialog.show() called ==>" + get_class_name(this));
                this.show();
            };

            Dialog.dismiss.implementation = function () {
                console.log("Dialog.dismiss() called ==>" + get_class_name(this));
                this.dismiss();
            };

        });
    }


    export function hook_fragment() {

        Java.perform(function () {

            var Fragment = Java.use("android.app.Fragment");

            Fragment.onCreateView.overload('android.view.LayoutInflater', 'android.view.ViewGroup', 'android.os.Bundle').implementation = function (inflater: any, container: any, savedInstanceState: any) {
                console.log("Fragment.onCreateView() called ==>" + get_class_name(this));
                this.onCreateView(inflater, container, savedInstanceState);
            };

            Fragment.onStart.implementation = function () {
                console.log("Fragment.onStart() called ==>" + get_class_name(this));
                this.onStart();
            };

            Fragment.onResume.implementation = function () {
                console.log("Fragment.onResume() called ==>" + get_class_name(this));
                this.onResume();
            };

            Fragment.onPause.implementation = function () {
                console.log("Fragment.onPause() called ==>" + get_class_name(this));
                this.onPause();
            };

            Fragment.onStop.implementation = function () {
                console.log("Fragment.onStop() called ==>" + get_class_name(this));
                this.onStop();
            };

            Fragment.onDestroy.implementation = function () {
                console.log("Fragment.onDestroy() called ==>" + get_class_name(this));
                this.onDestroy();
            };

            Fragment.onRestart.implementation = function () {
                console.log("Fragment.onRestart() called ==>" + get_class_name(this));
                this.onRestart();
            };

        });
    }



    export function hook_AlertDialog() {

        Java.perform(function () {
            var AlertDialog = Java.use("android.app.AlertDialog");

            AlertDialog.show.implementation = function () {
                console.log("AlertDialog.show() called ==>" + get_class_name(this));
                this.show();
            };

            AlertDialog.dismiss.implementation = function () {
                console.log("AlertDialog.dismiss() called ==>" + get_class_name(this));
                this.dismiss();
            };

        });
    }


    export function hook_PopupWindow() {

        Java.perform(function () {
            var PopupWindow = Java.use("android.widget.PopupWindow");

            PopupWindow.showAsDropDown.overload('android.view.View').implementation = function (a: any) {
                console.log("PopupWindow.showAsDropDown() called ==>" + get_class_name(this));
                this.showAsDropDown();
            };

            PopupWindow.showAsDropDown.overload('android.view.View', 'int', 'int').implementation = function (a: any, b: any, c: any) {
                console.log("PopupWindow.showAsDropDown() called ==>" + get_class_name(this));
                this.showAsDropDown();
            };

            PopupWindow.showAsDropDown.overload('android.view.View', 'int', 'int', 'int').implementation = function (a: any, b: any, c: any, d: any) {
                console.log("PopupWindow.showAsDropDown() called ==>" + get_class_name(this));
                this.showAsDropDown();
            };

            PopupWindow.dismiss.implementation = function () {
                console.log("PopupWindow.dismiss() called ==>" + get_class_name(this));
                this.dismiss();
            };

        });
    }

    export function hook_toast() {

        Java.perform(function () {
            var Toast = Java.use("android.widget.Toast");
            Toast.show.implementation = function () {
                console.log("Toast.show() called ==>" + get_class_name(this));
                this.show();
            };

        });

    }


    export function hook_onClick() {

    }


    export function hook_WebView() {

    }

}

