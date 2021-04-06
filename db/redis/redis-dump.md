---
category: Redis
---

# redis-dump方式导入导出数据

### 安装redis-dump工具

安装ruby（略）,详见上一章节

```
gem install redis-dump -V
```

### 数据导出

示例

```
redis-dump -u 127.0.0.1:6379 -a 'zykjdr#558996' > test.json
```

### 数据导入

示例

```
< test.json redis-load -u 127.0.0.1:6379 -a 'zykjdr#558996'
```

导入本机的6379端口，没有密码时，可以写成下面这样

```
< test1.json redis-load
```

**如果报错，请使用-n选项，使用请参考官方，请谨慎使用**！

-n （以二进制形式导入）

```
< test.json redis-load -n 
```

