---
category: Python
---
# 3.2 列表、集合、字典解析式

## 列表解析式

列表解析式 List Comprehension，也叫列表推导式。

```python
# 生成一个列表，元素0~9，将每一个元素加1后的平方值组成新的列表
x = []
for i in range(10):
    x.append((i+1)**2)
print(x)
```

```python
# 列表解析式
print([(i+1)**2 for i in range(10)])
```

语法

* [返回值 for 元素 in 可迭代对象 if 条件]
* 使用中括号[]，内部是 for 循环，if 条件语句可选
* 返回一个新的列表

列表解析式是一种语法糖

* 编译器会优化，不会因为简写而影响效率，反而因优化提高了效率
* 减少程序员工作量，减少出错
* 简化了代码，增强了可读性

```python
[expr for item in iterable if cond1 if cond2]
等价于
ret = []
for item in iterable:
    if cond1:
    	if cond2:
        	ret.append(expr)
#
[expr for i in iterable1 for j in iterable2 ]
等价于
ret = []
for i in iterable1:
    for j in iterable2:
        ret.append(expr)
```

```python
# 因为循环或判断只有一个，一斜到底，所以结果相同
[(i,j) for i in range(7) if i>4 for j in range(20,25) if j>23]
[(i,j) for i in range(7) for j in range(20,25) if i>4 if j>23]
[(i,j) for i in range(7) for j in range(20,25) if i>4 and j>23]
# 都是[(5, 24), (6, 24)]
```

## 集合解析式

语法

* {返回值 for 元素 in 可迭代对象 if 条件}
* 列表解析式的中括号换成大括号{}就变成了集合解析式
* 立即返回一个集合

```python
{(x, x+1) for x in range(10)}
{[x] for x in range(10)} # 可以吗？ 不可以 list是不可hash的
```

## 字典解析式

语法

* {key:value for 元素 in 可迭代对象 if 条件}
* 列表解析式的中括号换成大括号{}，元素的构造使用 key:value 形式
* 立即返回一个字典

```python
print({x:(x,x+1) for x in range(10)})
print({x:[x,x+1] for x in range(10)})
print({(x,):[x,x+1] for x in range(10)})
# print({[x]:[x,x+1] for x in range(10)}) # 错误 key要求 可hash
print({str(x):y for x in range(3) for y in range(4)}) # 输出多少个元素？ 返回三个元素，key值唯一，{'0': 3, '1': 3, '2': 3}
```

## 总结

* Python2 引入列表解析式
* Python2.4 引入生成器表达式
* Python3 引入集合、字典解析式，并迁移到了2.7

一般来说，应该多应用解析式，简短、高效。如果一个解析式非常复杂，难以读懂，要考虑拆解成for循环。

生成器和迭代器是不同的对象，但都是可迭代对象。

如果不需要立即获得所有可迭代对象的元素，在Python 3中，推荐使用惰性求值的迭代器。

| 内建函数 | 函数签名                          | 说明                                        |
| -------- | --------------------------------- | ------------------------------------------- |
| sorted   | sorted(iterable\[,key][,reverse]) | 默认升序，对可迭代对象排序<br/>立即返回列表 |

```python
# 排序一定是容器内全体参与
print(sorted([1,2,3,4,5]))
print(sorted(range(10, 20), reverse=True))
print(sorted({'a':100, 'b':'abc'}))
print(sorted({'a':100, 'b':'abc'}.items()))
print(sorted({'a':'ABC', 'b':'abc'}.values(), key=str, reverse=True))
```

