
import { Base } from "../../base/zzBase.js";


export namespace AndHttps {


    /*--------------------------------------  config ---------------------------------------------- */

    export let print_config = Base.zzHookFuncHandler.FuncPrintType.func_name




    /*--------------------------------------  private ---------------------------------------------- */

    function log(funcName: any, params: any) {
        new Base.zzHookFuncHandler.JavaFuncHandler(print_config, funcName, function () {
            console.log(Base.zzHookFuncHandler.logTips.funcParams + params)
        }).print();
    }



    /*--------------------------------------  public ---------------------------------------------- */


    export function hook_https() {
        hook_url_connection()
        hook_retrofit()
        hook_okhttp3_newcall()

    }


    /******************************************** URLConnection ***************************************************** */

    export function hook_url_connection() {


        Java.perform(function () {

            //hook java.net.URL
            var URL = Java.use('java.net.URL')
            URL.$init.overload('java.lang.String').implementation = function (urlstr: any) {

                var result = this.$init(urlstr)

                let funcName = "java.net.URL.init()"
                let params = ''
                params += 'url = ' + urlstr

                log(funcName, params)
                return result
            }
            URL.openConnection.overload().implementation = function () {
                var result = this.openConnection()

                let funcName = "java.net.URL.openConnection()"
                let params = ''
                log(funcName, params)

                return result
            }

            var HttpURLConnectionImpl = Java.use('com.android.okhttp.internal.huc.HttpURLConnectionImpl')
            HttpURLConnectionImpl.setRequestProperty.implementation = function (key: any, value: any) {
                var result = this.setRequestProperty(key, value)


                let funcName = "com.android.okhttp.internal.huc.HttpURLConnectionImpl.setRequestProperty(String field, String newValue)"
                let params = ''
                params += `key = ${key}, value = ${value}`

                log(funcName, params)

                return result
            }
        })
    }

    /******************************************** retrofit ***************************************************** */

    export function hook_retrofit() {

        Java.perform(function () {
            var RetrofitBuilder = Java.use("retrofit2.Retrofit$Builder")
            RetrofitBuilder.baseUrl.overload('java.lang.String').implementation = function (url: string) {

                var result = this.baseUrl(url);
                let funcName = "retrofit2.Retrofit$Builder.baseUrl(String url)"
                let params = ''
                params += `url = ${url}`
                log(funcName, params)

                return result;
            }
            RetrofitBuilder.baseUrl.overload('okhttp3.HttpUrl').implementation = function (url: string) {

                var result = this.baseUrl(url);
                let funcName = "retrofit2.Retrofit$Builder.baseUrl(HttpUrl url)"
                let params = ''
                params += `url = ${url}`
                log(funcName, params)
                return result;
            }
        })
    }

    /******************************************** Okhttp3 ***************************************************** */

    export function hook_okhttp3_interceptor() {

        Java.perform(function () {

            var ByteString = Java.use("com.android.okhttp.okio.ByteString");
            var Buffer = Java.use("com.android.okhttp.okio.Buffer");
            var Interceptor = Java.use("okhttp3.Interceptor");

            //新建一个Interceptor拦截器
            var MyInterceptor = Java.registerClass({
                name: "okhttp3.MyInterceptor",
                implements: [Interceptor],
                methods: {
                    intercept: function (chain) {

                        //1.获取request对象并打印
                        var request = chain.request();
                        try {
                            console.log("MyInterceptor.intercept onEnter:", request, "\nrequest headers:\n", request.headers());
                            var requestBody = request.body();
                            var contentLength = requestBody ? requestBody.contentLength() : 0;
                            if (contentLength > 0) {
                                var BufferObj = Buffer.$new();
                                requestBody.writeTo(BufferObj);
                                try {
                                    console.log("\nrequest body String:\n", BufferObj.readString(), "\n");
                                } catch (error) {
                                    try {
                                        console.log("\nrequest body ByteString:\n", ByteString.of(BufferObj.readByteArray()).hex(), "\n");
                                    } catch (error) {
                                        console.log("error 1:", error);
                                    }
                                }
                            }
                        } catch (error) {
                            console.log("error 2:", error);
                        }

                        //2.获取response对象并打印
                        var response = chain.proceed(request);
                        try {
                            console.log("MyInterceptor.intercept onLeave:", response, "\nresponse headers:\n", response.headers());
                            var responseBody = response.body();
                            var contentLength = responseBody ? responseBody.contentLength() : 0;
                            if (contentLength > 0) {
                                console.log("\nresponsecontentLength:", contentLength, "responseBody:", responseBody, "\n");

                                var ContentType = response.headers().get("Content-Type");
                                console.log("ContentType:", ContentType);
                                if (ContentType.indexOf("video") == -1) {
                                    if (ContentType.indexOf("application") == 0) {
                                        var source = responseBody.source();
                                        if (ContentType.indexOf("application/zip") != 0) {
                                            try {
                                                console.log("\nresponse.body StringClass\n", source.readUtf8(), "\n");
                                            } catch (error) {
                                                try {
                                                    console.log("\nresponse.body ByteString\n", source.readByteString().hex(), "\n");
                                                } catch (error) {
                                                    console.log("error 4:", error);
                                                }
                                            }
                                        }
                                    }

                                }

                            }

                        } catch (error) {
                            console.log("error 3:", error);
                        }
                        return response;
                    }
                }
            });


            var ArrayList = Java.use("java.util.ArrayList");
            var OkHttpClient = Java.use("okhttp3.OkHttpClient");
            console.log(OkHttpClient);
            OkHttpClient.$init.overload('okhttp3.OkHttpClient$Builder').implementation = function (Builder) {
                console.log("OkHttpClient.$init:", this, Java.cast(Builder.interceptors(), ArrayList));
                this.$init(Builder);
            };

            var MyInterceptorObj = MyInterceptor.$new();
            var Builder = Java.use("okhttp3.OkHttpClient$Builder");
            console.log(Builder);
            Builder.build.implementation = function () {
                this.interceptors().clear();
                //var MyInterceptorObj = MyInterceptor.$new();
                this.interceptors().add(MyInterceptorObj);
                var result = this.build();
                return result;
            };

            Builder.addInterceptor.implementation = function (interceptor: any) {
                this.interceptors().clear();
                //var MyInterceptorObj = MyInterceptor.$new();
                this.interceptors().add(MyInterceptorObj);
                return this;
                //return this.addInterceptor(interceptor);
            };

            console.log("hook_okhttp3...");
        });
    }


    export function hook_okhttp3_interceptor_dex() {

        Java.perform(function () {

            //加载自己实现的dex, 里面有自定义的Interceptor
            Java.openClassFile("/data/local/tmp/okhttp3logging.dex").load();
            var MyInterceptor = Java.use("com.r0ysue.okhttp3demo.LoggingInterceptor");

            var MyInterceptorObj = MyInterceptor.$new();
            var Builder = Java.use("okhttp3.OkHttpClient$Builder");
            console.log(Builder);
            Builder.build.implementation = function () {
                this.networkInterceptors().add(MyInterceptorObj);
                return this.build();
            };
            console.log("hook_okhttp3...");
        });
    }


    export function hook_okhttp3_newcall() {

        Java.perform(function () {
            var OkHttpClient = Java.use("okhttp3.OkHttpClient")

            OkHttpClient.newCall.implementation = function (request: any) {
                var result = this.newCall(request)
                console.log(request.toString())
                return result
            };

        });
    }


}