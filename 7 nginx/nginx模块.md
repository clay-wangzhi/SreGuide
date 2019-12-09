## ssl模块

## status模块

## autoindex模块

## limit_rate模块

## alias指令与server_tokens指令

## limit_conn_zone（限制单个IP最大连接数）

## 增加第三方模块

总结：

nginx安装第三方模块实际上是使用-add-module重新安装一次nginx，不要make install，而是直接把编译目录下objs/nginx文件