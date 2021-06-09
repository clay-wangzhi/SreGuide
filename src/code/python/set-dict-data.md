---
category: Python
---

# 2.3.5 集合 set & 字典 dict

## 集合 set

集合，简称集。由任意个元素构成的集体。高级语言都实现了这个非常重要的数据结构类型。

Python中，它是可变的、无序的、不重复的元素的集合。

### 初始化

* set() -> new empty set object
* set(iterable) -> new set object

```python
s1 = set()
s2 = set(range(5))
s3 = set([1, 2, 3])  # 报错
s4 = set('abcdabcd')
s5 = {} # 这是什么？  z字典
s6 = {1, 2, 3}
s7 = {1, (1,)}
s8 = {1, (1,), [1]} #  报错
```

### 元素性质

* 去重：在集合中，所有元素必须相异
* 无序：因为无序，所以不可索引
* 可哈希：Python集合中的元素必须可以hash，即元素都可以使用内建函数hash
  * 目前学过不可hash的类型有：list、set、bytearray
* 可迭代：set中虽然元素不一样，但元素都可以迭代出来

### 增加

* add(elem)
  * 增加一个元素到 set 中
  * 如果元素存在，什么都不做
* update(*others)
  * 合并其他元素到set集合中来
  * 参数others必须是可迭代对象
  * 就地修改

```python
s = set()
s.add(1)
s.update((1,2,3), [2,3,4])
```

### 删除

* remove(elem)
  * 从set中移除一个元素
  * 元素不存在，抛出KeyError异常。为什么是KeyError？
* discard(elem)
  * 从set中移除一个元素
  * 元素不存在，什么都不做

* pop() -> item
  * 移除并返回任意的元素。为什么是任意元素？ 因为是随机的，无序的
  * 空集返回KeyError异常
* clear()
  * 移除所有元素

```python
s = set(range(10))
s.remove(0)
#s.remove(11) # KeyError为什么
s.discard(11)
s.pop()
s.clear()
```

### 修改

集合类型没有修改。因为元素唯一。如果元素能够加入到集合中，说明它和别的元素不一样。

所谓修改，其实就是把当前元素改成一个完全不同的元素，就是删除加入新元素。

### 索引

非线性结构，不可索引。

### 遍历

只要是容器，都可以遍历元素。但是效率都是O(n)

### 成员运算符 in

```python
print(10 in [1, 2, 3])
print(10 in {1, 2, 3})
```

上面2句代码，分别在列表和集合中搜索元素。如果列表和集合的元素都有100万个，谁的效率高？ 集合效率高

set、dict 使用 hash 表实现，内部使用 hash 值作为 key，时间复杂度为 O(1)，查询时间和数据规模无关，不会随着数据规模增大而搜索性能下降。

### 集合概念

* 全集
  * 所有元素的集合。例如实数集，所有实数组成的集合就是全集
* 子集 bset 和超集 superset
  * 一个集合A所有元素都在另一个集合B内，A是B的子集，B是A的超集
* 真子集和真超集
  * A是B的子集，且A不等于B，A就是B的真子集，B是A的真超集
* 并集：多个集合合并的结果
* 交集：多个集合的公共部分
* 差集：集合中除去和其他集合公共部分

**并集**

将两个集合A和B的所有的元素合并到一起，组成的集合称作集合A与集合B的并集

* union(\*others) 返回和多个集合合并后的新的集合
* `|` 运算符重载，等同 union
* update(*others) 和多个集合合并，就地修改
* `|=` 等同update

**交集**

集合A和B，由所有属于A且属于B的元素组成的集合

* intersection(\*others) 返回和多个集合的交集
* `&` 等同 intersection
* `intersection_update(*others)` 获取和多个集合的交集，并就地修改
* `&=` 等同 intersection_update

**差集**

集合A和B，由所有属于A且不属于B的元素组成的集合

* `difference(*others)` 返回和多个集合的差集

* `-` 等同difference
* `difference_update(*others) `获取和多个集合的差集并就地修改
* `-=` 等同difference_update

**对称差集**

集合A和B，由所有不属于A和B的交集元素组成的集合，记作（A-B）∪（B-A）

* `symmetric_differece(other) `返回和另一个集合的对称差集
* `^` 等同symmetric_differece
* `symmetric_differece_update(other)` 获取和另一个集合的对称差集并就地修改
* `^=` 等同symmetric_differece_update

**其它集合运算**

* `issubset(other)、<=` 判断当前集合是否是另一个集合的子集
* `set1 < set2` 判断set1是否是set2的真子集
* `issuperset(other)、>=` 判断当前集合是否是other的超集
* `set1 > set2` 判断set1是否是set2的真超集
* `isdisjoint(other)` 当前集合和另一个集合没有交集，没有交集，返回True

## 字典 dict

Dict 即 Dictionary，也称为 mapping。

Python 中，字典由任意个元素构成的集合，每一个元素称为 Item，也称为 Entry。这个 Item 是由(key,
value)组成的二元组。

字典是可变的、无序的、key 不重复的 key-value 键值对集合。

### 初始化

* `dict(**kwargs)` 使用 name=value 对初始化一个字典
* `dict(iterable, **kwarg)` 使用可迭代对象和name=value对构造字典，不过可迭代对象的元素必须是一个二元结构
* `dict(mapping, **kwarg)` 使用一个字典构建另一个字典

字典的初始化方法都非常常用，都需要会用

```python
d1 = {}
d2 = dict()
d3 = dict(a=100, b=200)
d4 = dict(d3) # 构造另外一个字典
d5 = dict(d4, a=300, c=400)
d6 = dict([('a', 100), ['b', 200], (1, 'abc')], b=300, c=400)
```

```python
# 类方法dict.fromkeys(iterable, value)
d = dict.fromkeys(range(5))
d = dict.fromkeys(range(5), 0)
```

### 元素访问

* d[key]
  * 返回 key 对应的值 value
  * key 不存在抛出 KeyError 异常
* get(key[, default])
  * 返回 key 对应的值 value
  * key 不存在返回缺省值，如果没有设置缺省值就返回 None
* setdefault(key[, default])
  * 返回 key 对应的值 value
  * key 不存在，添加 kv 对，value 设置为 default，并返回 default，如果 default 没有设置，缺省
    为None

### 新增和修改

* d[key] = value
  * 将 key 对应的值修改为 value
  * key不存在添加新的kv对
* update([other]) -> None
  * 使用另一个字典的 kv 对更新本字典
  * key不存在，就添加
  * key存在，覆盖已经存在的key对应的值
  * 就地修改

```python
d = {}
d['a'] = 1
d.update(red=1)
d.update(['red', 2]) # 错误格式
d.update({'red':3})
```

### 删除

* pop(key[, default])
  * key存在，移除它，并返回它的value
  * key不存在，返回给定的default
  * default未设置，key不存在则抛出KeyError异常
* popitem()
  * 移除并返回一个任意的键值对
  * 字典为empty，抛出KeyError异常
* clear()
  * 清空字典

### 遍历

1、遍历 Key

```python
for k in d:
	print(k)
    
for k in d.keys():
	print(k)
```

2、遍历Value

```python
for v in d.values():
	print(v)
    
for k in d.keys():
	print(d[k])
	print(d.get(k))
```

3、遍历Item

```python
for item in d.items():
	print(item)
	print(item[0], item[1])
    
for k,v in d.items():
	print(k, v)
    
for k,_ in d.items():
	print(k)
    
for _,v in d.items():
	print(v)
```

Python3 中，keys、values、items方法返回一个类似一个生成器的可迭代对象

* Dictionary view对象，可以使用len()、iter()、in操作
* 字典的entry的动态的视图，字典变化，视图将反映出这些变化
* keys返回一个类set对象，也就是可以看做一个set集合。如果values都可以hash，那么items也可以看做是类set对象

Python2 中，上面的方法会返回一个新的列表，立即占据新的内存空间。所以 Python2 建议使用 iterkeys、itervalues、iteritems 版本，返回一个迭代器，而不是返回一个copy

### 遍历与删除

```python
# 错误的做法
d = dict(a=1, b=2, c=3)
for k,v in d.items():
	print(d.pop(k))
```

在使用keys、values、items方法遍历的时候，不可以改变字典的size

```python
while len(d):
	print(d.popitem())
    
while d:
	print(d.popitem())
```

上面的 while 循环虽然可以移除字典元素，但是很少使用，不如直接 clear。

```python
# for 循环正确删除
d = dict(a=1, b=2, c=3)
keys = []
for k,v in d.items():
	keys.append(k)
    
for k in keys:
	d.pop(k)
```

### key

字典的 key 和 set 的元素要求一致

* set 的元素可以就是看做 key，set 可以看做 dict 的简化版
* hashable 可哈希才可以作为 key，可以使用 hash() 测试
* 使用key访问，就如同列表使用index访问一样，时间复杂度都是O(1)，这也是最好的访问元素的方式

```python
d = {
    1 : 0,
    2.0 : 3,
    "abc" : None,
    ('hello', 'world', 'python') : "string",
    b'abc' : '135'
}

print(d)
```

### 有序性

后续补充