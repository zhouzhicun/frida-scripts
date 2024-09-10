## 简介
仓库地址：https://github.com/SeeFlowerX/jtrace

增加更详细的jni信息打印，以辅助unidbg补环境为主要目的。


## 使用：

```js
import * as jtrace from "../android/jtrace/jtrace.js"

jtrace.configShowCacheLog(false)
jtrace.hook_all_jni()
```