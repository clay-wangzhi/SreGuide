---
category: Python
---

# 2.3.4 列表 list & 元组 tuple

## 列表 list

* 一个排列整齐的队伍，Python采用顺序表实现
* 列表内的个体称作元素，由若干元素组成列表
* 元素可以是任意对象（数字、字符串、对象、列表等）
* 列表内元素有顺序，可以使用索引
* 线性的数据结构
* 使用 [ ] 表示
* 列表是可变的

列表是非常重要的数据结构，对其内存结构和操作方法必须烂熟于心。

### 初始化

* list() -> new empty list
* list(iterable) ->  new list initialized from iterable's items
* []
* 列表不能一开始就定义大小

```python
ls1 = []
ls2 = list()
ls3 = [2, 'ab', [3, 'abc'], (5, 30, 50)] # 列表是一个容器，元素可以是其它类型
ls4 = list(range(5)) # 非常常用的构造方式，将一个可迭代对象转换为一个列表
```

### 索引

* 索引，也叫下标
* 正索引：从左至右，从0开始，为列表中每一个元素编号
  * 如果列表有元素，索引范围[0, 长度-1]
* 负索引：从右至左，从-1开始
  * 如果列表有元素，索引范围[-长度, -1]
* 正、负索引不可以超界，否则引发异常IndexError
* 为了理解方便，可以认为列表是从左至右排列的，左边是头部，右边是尾部，左边是下界，右边是
  上界
* 列表通过索引访问，list[index] ，index就是索引，使用中括号访问

使用索引定位访问元素的时间复杂度为O(1)，这是最快的方式，是列表最好的使用方式。

### 查询

* index(value,[start,[stop]])
  * 通过值value，从指定区间查找列表内的元素是否匹配
  * 匹配第一个就立即返回索引
  * 匹配不到，抛出异常ValueError
* count(value)
  * 返回列表中匹配value的次数
* 时间复杂度
  * index和count方法都是O(n)
  * 随着列表数据规模的增大，而效率下降
* len() 列表的长度

### 修改

索引定位元素，然后修改。注意索引不能超界

```python
ls1 = [1,2,3,4]
ls1[2] = 200
```

### 增加单个元素

* append(object) -> None
  * 列表尾部追加元素，返回None
  * 返回None就意味着没有新的列表产生，就地修改
  * 定位时间复杂度是O(1)
* insert(index, object) -> None
  * 在指定的索引index处插入元素object
  * 返回None就意味着没有新的列表产生，就地修改
  * 定位时间复杂度是O(1)
* 索引能超上下界吗？
  * 超越上界，尾部追加
  * 超越下界，头部追加

### 增加多个元素

* extend(iteratable) -> None
  * 将可迭代对象的元素追加进来，返回None
  * 就地修改，本列表自身扩展

* \+ -> list
  * 连接操作，将两个列表连接起来，产生新的列表，原列表不变
  * 本质上调用的是魔术方法__add__()方法
* \* -> list
  * 重复操作，将本列表元素重复n次，返回新的列表

在Python中一切皆对象，而对象都是引用类型，可以理解为一个地址指针指向这个对象。

但是，字面常量字符串、数值等表现却不像引用类型，暂时可以称为简单类型。

而列表、元组、字典，包括以后学习的类和实例都可以认为是引用类型。

你可以认为简单类型直接存在列表中，而引入类型只是把引用地址存在了列表中。

### 删除

* remove(value) -> None
  * 从左至右查找第一个匹配value的值，找到就移除该元素，并返回None，否则ValueError
  * 就地修改
* pop([index]) -> item
  * 不指定索引index，就从列表尾部弹出一个元素
  * 指定索引index，就从索引处弹出一个元素，索引超界抛出IndexError错误
* clear() -> None
  * 清除列表所有元素，剩下一个空列表

### in 成员操作

```python
'a' in ['a', 'b', 'c']
[3,4] in [1, 2, 3, [3,4]]
for x in [1,2,3,4]:
	pass
```

### 列表复制

```python
a = list(range(4))
b = list(range(4))
print(a == b)
c = a
c[2] = 10
print(a)
print(a == b) # 还相等吗？  不相等
print(a == c) # 相等吗？ 相等
```

```python
a = list(range(4))
b = a.copy()
print(a == b) # 相等
a[2] = 10
print(a == b) # 不相等
```

```python
a = [1, [2, 3, 4], 5]
b = a.copy()
print(a == b) # True
a[2] = 10
print(a == b) # False
a[2] = b[2]
print(a == b) # True
a[1][1] = 100
print(a == b) # True
print(a)
print(b)
```

**列表的内存模型和深浅拷贝**

* shadow copy
  * 影子拷贝，也叫浅拷贝。遇到引用类型数据，仅仅复制一个引用而已
* deep copy
  * 深拷贝，往往会递归复制一定深度

一般情况下，大多数语言提供的默认复制行为都是浅拷贝。

```python
import copy
a = [1, [2, 3], 4]
b = copy.deepcopy(a)
print(a == b)
a[1][1] = 100
print(a == b) # False
print(a)
print(b)
```

> Python内建数据类型，内部都实现了 == ，它的意思是内容比较

### Python 内存管理

后续补充

## 元组 tuple

* 一个有序的元素组成的集合
* 使用小括号 ( ) 表示
* 元组是不可变对象

### 初始化

* tuple() -> empty tuple
* tuple(iterable) -> tuple initialized from iterable's items

```python
t1 = () # 空元组
t2 = (1,) # 必须有这个逗号
t3 = (1,) * 5
t4 = (1, 2, 3)
t5 = 1, 'a'
t6 = (1, 2, 3, 1, 2, 3)
t7 = tuple() # 空元组
t8 = tuple(range(5))
t9 = tuple([1,2,3])
```

### 索引

索引和列表规则一样，不可以超界

### 查询

方法和列表一样，时间复杂度也一样。index、count、len等

### 增删改

元组元素的个数在初始化的时候已经定义好了，所以不能为元组增加元素、也不能从中删除元素、也不能修改元素的内容。
