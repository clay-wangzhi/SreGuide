---
category: Redis
---

# set 类型


- ⽆序集合
- 元素为string类型
- 元素具有唯⼀性，不重复
- 说明：对于集合没有修改操作

增加

- 添加元素

```
sadd key member1 member2 ...
```

- 例1：向键'a3'的集合中添加元素'zhangsan'、'lisi'、'wangwu'

```
sadd a3 zhangsan sili wangwu
```

获取

- 返回所有的元素

```
smembers key
```

- 例2：获取键'a3'的集合中所有元素

```
smembers a3
```

删除

- 删除指定元素

```
srem key value
```

- 例3：删除键'a3'的集合中元素'wangwu'

```
srem a3 wangwu
```

