---
category: Python
---

# 3.1 线性结构特征 可迭代 & 切片

线性结构特征：

* 可迭代 for ... in
* 有长度，通过len(x)获取，容器
* 通过整数下标可以访问元素。正索引、负索引
  * 可以切片

已经学习过的线性结构：list、tuple、str、bytes、bytearray

## 切片

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

## 切片赋值

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
