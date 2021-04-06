---
category: Redis
---

# 键命令

* 查找键
参数⽀持正则表达式
```
keys pattern
```
* 判断键是否存在，
如果存在返回1，不存在返回0
```
exists key
```
- 查看键对应的value的类型
```
type key
```

- 删除键
```
del key1 key2 ...
```
- 设置过期时间

以秒为单位，如果没有指定过期时间则⼀直存在，直到使⽤DEL移除
```
expire key seconds
```
- 查看有效时间

以秒为单位
```
ttl key
```
