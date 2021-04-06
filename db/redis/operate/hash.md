---
category: Redis
---

# hash类型

hash⽤于存储对象
对象的结构为属性、值
 值的类型为string

## 增加、修改
* 设置单个属性
```
hset key field value
```
- 设置多个属性
```
hmset key field1 value1 field2 value2 ...
```

## 获取

- 获取指定键所有的属性
```
hkeys key
```

- 获取⼀个属性的值
```
hget key field
```

- 获取多个属性的值
```
hmget key field1 field2 ...
```

- 获取所有属性的值
```
hvals key
```
- 获取一个hash有多少个属性
```
hlen key
```

## 删除

- 删除整个hash键及值，使⽤del命令
- 删除属性，属性对应的值会被⼀起删除
```
hdel key field1 field2 ...
```
