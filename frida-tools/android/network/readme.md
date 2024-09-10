
网络相关的frida脚本来源于:
https://github.com/r0ysue/AndroidFridaBeginnersBook

## 注意事项
1.hook okhttp3的时候，如果调用 hook_okhttp3_interceptor_dex 进行hook，
需要先将 okhttplogging.dex 文件复制到手机的 /data/local/tmp/okhttp3logging.dex 目录。

2.objection批量hook：
objection -g com.jianshu.haruki explore -c "SocketInit.txt"



## 抓包问题
1.检查是否已配置好抓包环境，即安装好charles, 并将charles证书已安装到手机中；
2.直接用charles抓包，是否抓成功；
3.如果抓失败，调用sslUnpinning.droidSSLUnpinning() 去ssl证书校验，再看抓包是否成功；
4.如果抓失败，看错误信息，是否双向认证，是的话，调用 sslUnpinning.dump_ssl_cert() 导出证书，然后添加到charles中。
5.如果仍然失败，使用r0capture抓包，或者分析网络库是否被混淆或者使用cornet，以及其他什么网络库，进一步分析。