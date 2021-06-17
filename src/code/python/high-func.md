---
category: Python
---

# 5.1 高阶函数

**一等共民**

* 函数在Python是一等公民（First-Class Object）
* 函数也是对象，是可调用对象
* 函数可以作为普通变量，也可以作为函数的参数、返回值

**高级函数**

高阶函数（High-order Function）

* 数学概念 y = f(g(x))
* 在数学和计算机科学中，高阶函数应当是至少满足下面一个条件的函数
  * 接受一个或多个函数作为参数
  * 输出一个函数

```python
def counter(base):
    def inc(step=1): # 有没有闭包？
        nonlocal base # 形参base也是外部函数counter的local变量
        base += step
        return base
    return inc
c1 = counter(5)
print(c1())
print(c1())
print(c1())
c2 = counter(5)
print(c2())
print(c1 == c2) # 相等吗？ 不相等，两个不同的实例
```

## 柯里化

* 指的是将原来接受两个参数的函数变成新的接受一个参数的函数的过程。新的函数返回一个以原有第二个参数为参数的函数
* z = f(x, y) 转换成 z = f(x)(y) 的形式

例如

```python
def add(x, y):
    return x + y
```

原来函数调用为 add(4, 5) ，柯里化目标是 add(4)(5) 。如何实现？

每一次括号说明是函数调用，说明 add(4)(5) 是2次函数调用。

```
add(4)(5)
等价于
t = add(4)
t(5)
```

也就是说add(4)应该返回函数

```python
def add(x):
    def _add(y):
        return x + y
    return _add
print(add(100)(200))
```

通过嵌套函数就可以把函数转成柯里化函数。

## 内建函数

### 排序 sorted

定义 `sorted(iterable, *, key=None, reverse=False) ->list `

key 需要为 可调用的，如函数

```python
sorted(lst, key=lambda x:6-x) # 返回新列表
list.sort(key=lambda x: 6-x) # 就地修改
```

### 过滤 filter

* 定义 filter(function, iterable)
* 对可迭代对象进行遍历，返回一个迭代器
* function 参数是一个参数的函数，且返回值应当是 bool 类型，或其返回值等效布尔值。
* function 参数如果是 None，可迭代对象的每一个元素自身等效布尔值

```python
print(list(filter(lambda x: x%3==0, [1,9,55,150,-3,78,28,123])))
print(list(filter(None, range(5))))
print(list(filter(None, range(-5, 5))))
```

### 映射 map

* 定义 map(function, *iterables) -> map object
* 对多个可迭代对象的元素，按照指定的函数进行映射
* 返回一个迭代器

```python
print(list(map(lambda x: 2*x+1, range(10))))
print(dict(map(lambda x: (x%5, x), range(500))))
print(dict(map(lambda x,y: (x,y), 'abcde', range(10))))
```

### 拉链函数 zip

* zip(*iterables)
* 像拉链一样，把多个可迭代对象合并在一起，返回一个迭代器
* 将每次从不同对象中取到的元素合并成一个元组

```python
print(list(zip(range(10),range(10))))
print(list(zip(range(10),range(10),range(5),range(10))))
print(dict(zip(range(10),range(10))))

d1 = {str(x):y for x,y in zip(range(10),range(10))} # 字典解析式
print(d1)
```
