---
category: Python
---

# 2.3 Python数据类型

## 内建常用数据类型

* 数值型
  * int、float、complex、bool
* 序列 sequence
  * 字符串 str、字节序列 bytes、bytearray
  * 列表 list、元组 tuple

* 键值对
  * 集合 set、字典 dict

## 类型转换

* int、float、complex、bool 也可以当做内建函数对数据进行类型转换
* int(x) 返回一个整数
* float(x) 返回一个浮点数
* complex(x)、complex(x,y) 返回一个复数
* bool(x) 返回布尔值，前面讲过False等价的对象

## 封装和解构

### 基本概念

```python
t1 = 1, 2
print(type(t1)) # 什么类型, tuple

t2 = (1, 2)
print(type(t2))
```

Python等式右侧出现逗号分隔的多值的时候，就会将这几个值封装到元组中。这种操作称为封装packing。

```python
x, y = (1, 2)
print(x) # 1
print(y) # 2
```

Python 中等式右侧是一个容器类型，左侧是逗号分隔的多个标识符，将右侧容器中数据的一个个和左侧
标识符一一对应。这种操作称为解构 unpacking。

从 Python3 开始，对解构做了很大的改进，现在用起来已经非常的方便快捷。

封装和解构是非常方便的提取数据的方法，在 Python、JavaScript 等语言中应用极广。

```python
# 交换数据
x = 4
y = 5
t = x
x = y
y = t

# 封装和解构，交换
x = 10
y = 11
x, y = y, x
```

### 简单解构

```python
# 左右个数相同  ,必须相等
a,b = 1,2
a,b = (1,2)
a,b = [1,2]
a,b = [10,20]
a,b = {10,20} # 非线性结构
a,b = {'a':10,'b':20} # 非线性结构也可以解构
[a,b] = (1,2)
[a,b] = 10,20
(a,b) = {30,40}
```

### 剩余变量解构

在 Python3.0 中增加了剩余变量解构（rest）。

```python
a, *rest, b = [1, 2, 3, 4, 5]
print(a, b)
print(type(rest), rest) # <class 'list'> [2, 3, 4]
```

标识符 rest 将尽可能收集剩余的数据组成一个列表。

```python
a, *_, b = [1, 2, 3, 4, 5]
print(_) # 在IPython中实验，_是最后一个输出值，这里将把它覆盖
_, *b, _ = [1, 2, 3]
print(_) # 第一个_是什么
print(b) # 是什么
print(_) # 第二个_是什么
```

_ 是合法的标识符，这里它没有什么可读性，它在这里的作用就是表示不关心这个变量的值，我不想要。有人把它称作 丢弃(Throwaway)变量。

## 线性数据结构

线性表

* 线性表（简称表），是一种抽象的数学概念，是一组元素的序列的抽象，它由有穷个元素组成（0
  个或任意个）
* 顺序表：使用一大块连续的内存顺序存储表中的元素，这样实现的表称为顺序表，或称连续表
  * 在顺序表中，元素的关系使用顺序表的存储顺序自然地表示
* 链接表：在存储空间中将分散存储的元素链接起来，这种实现称为链接表，简称链表

列表如同地铁站排好的队伍，有序，可以插队、离队，可以索引。

链表如同操场上手拉手的小朋友，有序但排列随意。或者可以想象成一串带线的珠子，随意盘放在桌上。也可以离队、插队，也可以索引。

## 线性结构

线性结构特征：

* 可迭代 for ... in
* 有长度，通过len(x)获取，容器
* 通过整数下标可以访问元素。正索引、负索引
  * 可以切片

已经学习过的线性结构：list、tuple、str、bytes、bytearray

### 切片

```python
sequence[start:stop]
sequence[start:stop:step]
```

* 通过给定的索引区间获得线性结构的一部分数据
* start、stop、step为整数，可以是正整数、负整数、零
* start为0时，可以省略
* stop为末尾时，可以省略
* step为1时，可以省略
* 切片时，索引超过上界（右边界），就取到末尾；超过下界（左边界），取到开头

```python
x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(x[:])
print(x[:-1]) #
print(x[0:])
print(x[3:])
print(x[3:-1]) #
print(x[9:])
print(x[:9])
print(x[9:-1])
print(x[:100])
print(x[-100:])
print(x[4:-2])
print(x[-4:-2])
print('0123456789'[-4:8])
print(b'0123456789'[-4:8])
print(bytearray(b'0123456789')[-10:5])

# 步长
x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(x[::])
print(x[::2])
print(x[2:8:3])
print(x[:9:3])
print(x[1::3])
print(x[-10:8:2])

# 起止和方向
x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(x[-10:])
print(x[-5:6])
print(x[-5:-6])
print(x[6:5])
print(x[5:5])
print(x[1:9:-2])
print(x[::-2])
print(x[8::-2])
print(x[8:2:-2])
print(x[8:-10:2])
print(x[8:-10:-2])
print(x[-5:4:-1])
print(x[-5:5:-1])
```

在序列上使用切片[start:stop]，子区间索引范围[start, stop)，相当于从start开始指向stop的方向上获
取数据

默认step为1，表示向右；步长为负数，表示向左

如果子区间方向和步长方向不一致，直接返回当前类型的"空对象"

如果子区间方向和步长方向一致，则从起点间隔步长取值

| 内建函数 | 函数签名   | 说明                                                         |
| -------- | ---------- | ------------------------------------------------------------ |
| id       | id(object) | CPython中返回对象的内存地址<br/>可以用来判断是不是同一个对象 |

```python
# 使用id看地址，要注意地址回收复用问题
print(id([1,2,3]))
print(id([4,5,6,7]))
# 上下两句可能内存地址一样，但是上面那个[1,2,3]没有意义，因为它用完之后，引用计数为0了，没人能再次访问到，释放了内存
# 如果2个存在在内存中的对象，地址一样一定是同一个对象
```

```python
x = [0, 1, 2]
y = x[:]
print(x, y)
print(id(x), id(y))
x[0] = 100
print(x, y)

x = [[1]]
y = x[:]
print(x, y)
print(x == y) # True
print(id(x), id(y), x is y) # False
x[0][0] = 100
print(x, y)
print(x == y) # True
print(x is y) # False
x[0] = 200
print(x == y) # False
print(x, y)
```

上例可知，实际上切片后得到一个全新的对象。 [:] 或 [::] 相当于copy方法。

### 切片赋值

* 切片操作写在了等号左边
* 被插入的可迭代对象写在等号右边

```python
x = [0, 1, 2]
z = None
z = 1
z[:] = x # 可以吗 不可以 TypeError: 'int' object does not support item assignment
```

```python
x = [0, 1, 2, 3, 4]
z = list()
z[:] = x
z[1:2] = 10 # 可以吗？ 不可以 TypeError: can only assign an iterable
z[1:2] = (10,)
z[3:] = (20,)
z[1:] = (40, 50 ,60, 70)
z[1:-1] = ()
x = [0, 1, 2, 3, 4]
y = []
y[:] = x
print(x == y)
print(id(x), id(y), x is y)
m = x # 这一句有什么用？y[:] = x有什么用？
```

m 和 x它们两个变量指向同一个对象。

y=[]、y[:]=x 等价于  z=x[:] ，都是创建x的副本。

切片赋值用作初始化相当于copy，还可以使用。如果用在替换、插入元素，看似语法比较简洁，但是由
于列表是顺序表结构，将会引起数据的挪动，这非常影响性能，应当尽量避免使用。
