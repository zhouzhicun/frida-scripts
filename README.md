### How to compile & load

```sh
$ git clone git://github.com/oleavr/frida-agent-example.git
$ cd frida-agent-example/
$ npm install
$ frida -U -f com.example.android --no-pause -l _agent.js
```

### Development workflow

To continuously recompile on change, keep this running in a terminal:

```sh
$ npm run watch
```

And use an editor like Visual Studio Code for code completion and instant
type-checking feedback.



### 注意事项

1.hook日志
运行的时候，建议在命令后面加上: -o xxx.log, 例如：
frida -U -f com.example.android --no-pause -l _agent.js -o xxx.log
原因:
将日志打印到 xxx.log文件中，因为直接打到控制台，可能日志顺序混乱，并且刷的太快导致没法看。

2.数据对比
比如如下数据：
digest结果 | str ==> 9<êîï´ílÆ	A
digest结果 | hex ==> 9511168d393ceaeeefb4ed6c03c60941
digest结果 | base64 ==> lREWjTk86u7vtO1sA8YJQQ==

我想验证 lREWjTk86u7vtO1sA8YJQQ== 是不是由 '9511168d393ceaeeefb4ed6c03c60941' base64得来的：
1）首先打开 CyberChef网站， 添加 From Base64， 再添加 To Hex，并修改 To Hex 打印设置。
2）然后在右侧上面输入lREWjTk86u7vtO1sA8YJQQ==， 右侧下方输出的就是 base64之前的 原始数据hex展示。

### 工程规范(待补充！！！)

1.每个App项目写在App目录下，命名规范： App名字 + 平台 + 版本， 例如：douyin_android_v28_1_1.ts

2.每个App项目的ts文件，主逻辑写在main函数中， 在index.ts中，只需导入app项目的ts文件，然后调用main()方法即可。
