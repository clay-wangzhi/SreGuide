---
category: Redis
---

# string类型

字符串类型是Redis中最为基础的数据存储类型，该类型可以接受任何格式的数据，如JPEG图像数据或Json对象描述信息等。在Redis中字符串类型的Value最多可以容纳的数据长度是512M。

## 保存
如果设置的键不存在则为添加，如果设置的键已经存在则修改
- 设置键值
```
set key value
```
- 设置键值及过期时间，以秒为单位
```
setex key seconds value
```

- 设置多个键值
```
mset key1 value1 key2 value2 ...
```
- 追加值
```
append key value
```

## 中文乱码问题的解决

a) 退出redis客户端
```
Exit
```
b) 再次进图redis客户端
```
Redis-cli --raw
```
## 获取

- 获取：根据键获取值，如果不存在此键则返回nil
```
get key
```
- 根据多个键获取多个值
```
mget key1 key2 ...
```

## 删除

详⻅下节键的操作，删除键时会将值删除
