---
category: Python
---

# 3.3 作用域

一个标识符的可见范围，这就是标识符的作用域。一般常说的是变量的作用域

```python
def foo():
	x = 100
print(x) # 可以访问到吗
```

上例中x不可以访问到，会抛出异常（NameError: name 'x' is not defined），原因在于函数是一个封装，它会开辟一个作用域，x变量被限制在这个作用域中，所以在函数外部x变量不可见。

> 注意：每一个函数都会开辟一个作用域

## 作用域分类

* 全局作用域
  * 在整个程序运行环境中都可见
  * 全局作用域中的变量称为全局变量global
* 局部作用域
  * 在函数、类等内部可见
  * 局部作用域中的变量称为局部变量，其使用范围不能超过其所在局部作用域
  * 也称为本地作用域local

## 函数嵌套

在一个函数中定义了另外一个函数

```python
def outer():
	def inner():
		print("inner")
	inner()
	print("outer")
outer() # 可以吗？ 可以
inner() # 可以吗？ 不可以
```

内部函数inner不能在外部直接使用，会抛NameError异常，因为它在函数外部不可见。

其实，inner不过就是一个标识符，就是一个函数outer内部定义的变量而已。

**嵌套结构的作用域**

对比下面嵌套结构，代码执行的效果

```python
def outer1(): #
    o = 65
    def inner():
        print("inner {}".format(o))
        print(chr(o))

    inner()
    print("outer {}".format(o))

outer1() # 打印结果
#inner 65
#A
#outer 65

def outer2(): #
    o = 65
    def inner():
        o = 97
        print("inner {}".format(o))
        print(chr(o))

    inner()
    print("outer {}".format(o))

outer2() # 打印结果
#inner 97
#a
#outer 65
```

从执行的结果来看：

* 外层变量在内部作用域可见
* 内层作用域 inner 中，如果定义了 `o = 97` ，相当于在当前函数 inner 作用域中重新定义了一个新的变量o，但是，***这个 o 并不能覆盖掉外部作用域 outer2 中的变量 o***。只不过对于 inner 函数来说，其只能可见自己作用域中定义的变量 o 了

| 内建函数 | 函数签名 | 说明                        |
| -------- | -------- | --------------------------- |
| chr      | chr(i)   | 通过unicode编码返回对应字符 |
| ord      | ord(c)   | 获得字符对应的unicode       |

```python
print(ord('中'), hex(ord('中')), '中'.encode(), '中'.encode('gbk'))
print(chr(20013)) # '中'
print(chr(97))
```

**一个赋值语句的问题**

函数内，变量未定义，+= 1问题

略

## global 语句

```python
x = 5
def foo():
    global x # 全局变量
    x += 1
    print(x)
foo()
```

* 使用 global 关键字的变量，将 foo 内的 x 声明为使用外部的全局作用域中定义的 x
* 全局作用域中必须有 x 的定义
* 使用了global，foo中的x不再是局部变量了，它是全局变量。

**总结**

* `x+=1` 这种是特殊形式产生的错误的原因？先引用后赋值，而 python 动态语言是赋值才算定义，才能被引用。解决办法，在这条语句前增加 x=0 之类的赋值语句，或者使用global 告诉内部作用域，去全局作用域查找变量定义
* 内部作用域使用 `x = 10` 之类的赋值语句会重新定义局部作用域使用的变量x，但是，一旦这个作
  用域中使用 global 声明x为全局的，那么`x=10`相当于在为全局作用域的变量x赋值

**global使用原则**

* 外部作用域变量会在内部作用域可见，但也不要在这个内部的局部作用域中直接使用，因为函数的目的就是为了封装，尽量与外界隔离
* 如果函数需要使用外部全局变量，请尽量使用函数的形参定义，并在调用传实参解决
* 一句话：不用global。学习它就是为了深入理解变量作用域

## 闭包

**自由变量**：未在本地作用域中定义的变量。例如定义在内层函数外的外层函数的作用域中的变量

**闭包**：就是一个概念，出现在嵌套函数中，指的是**内层函数引用到了外层函数的自由变量**，就形成了闭包。很多语言都有这个概念，最熟悉就是JavaScript

```python
def counter():
    c = [0]
    def inc():
        c[0] += 1 # 报错吗？ 为什么 # line 4
        return c[0]
    return inc
foo = counter() # line 8
print(foo(), foo()) # line 9
c = 100
print(foo()) # line 11
```

代码分析

* 第8行会执行 counter 函数并返回 inc 对应的函数对象，注意这个函数对象并不释放，因为有 foo 记着
* 第4行会报错吗？为什么
  * 不会报错，c 已经在 counter 函数中定义过了。而且 inc 中的使用方式是为 c 的元素修改值，而不是重新定义 c 变量
* 第9行打印什么结果？
  * 打印 1 2
* 第11行打印什么结果？
  * 打印 3
  * 第9行的 c 和 counter 中的 c 不一样，而 inc 引用的是自由变量正是 counter 中的变量 c

这是 Python2 中实现闭包的方式，Python3 还可以使用 nonlocal 关键字

再看下面这段代码，会报错吗？使用 global 能解决吗？

```python
def counter():
    count = 0
    def inc():
        count += 1
        return count
    return inc

foo = counter()
print(foo(), foo())
```

上例一定出错，使用gobal可以解决

```python
def counter():
    global count
    count = 0
    def inc():
        global count
        count += 1
        return count
    return inc

foo = counter()
print(foo(), foo())
count = 100
print(foo()) # 打印几？ 101
```

上例使用 global 解决，这是全局变量的实现，而不是闭包了。

如果要对这个普通变量使用闭包，Python3中可以使用nonlocal关键字。

## nonlocal 语句

**nonlocal**：将变量标记为不在本地作用域定义，而是在**上级的某一级局部作用域**中定义，但**不能是全局**
**作用域中定义**。

```python
def counter():
    count = 0
    def inc():
        nonlocal count # 声明变量count不是本地变量
        count += 1
        return count
    return inc

foo = counter()
print(foo(), foo())
```

count 是外层函数的局部变量，被内部函数引用。

内部函数使用 nonlocal 关键字声明 count 变量在上级作用域而非本地作用域中定义。

代码中内层函数引用外部局部作用域中的自由变量，形成闭包。

```python
count = 10
def counter():
    nonlocal count
    count += 1
    return count

foo = counter()
print(foo(), foo())
```

上例是错误的，nonlocal 声明变量 a 不在当前作用域，但是往外就是全局作用域了，所以错误。

## 函数的销毁

定义一个函数就是生成一个函数对象，函数名指向的就是函数对象。

可以使用 del 语句删除函数，使其引用计数减1。

可以使用同名标识符覆盖原有定义，本质上也是使其引用计数减1。

Python 程序结束时，所有对象销毁。

函数也是对象，也不例外，是否销毁，还是看引用计数是否减为0。

## 变量名解析原则LEGB

* Local，本地作用域、局部作用域的 local 命名空间。函数调用时创建，调用结束消亡
* Enclosing，Python2.2 时引入了嵌套函数，实现了闭包，这个就是嵌套函数的外部函数的命名空间
* Global，全局作用域，即一个模块的命名空间。模块被 import 时创建，解释器退出时消亡
* Build-in，内置模块的命名空间，生命周期从 python 解释器启动时创建到解释器退出时消亡。例如print(open)，print 和 open 都是内置的变量

所以一个名词的查找顺序就是LEGB

![LEGB](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/LEGB.png)

| 内建函数  | 函数签名                 | 说明                                                         |
| --------- | ------------------------ | ------------------------------------------------------------ |
| iter      | iter(iterable)           | 把一个可迭代对象包装成迭代器                                 |
| next      | next(iterable[,default]) | 取迭代器下一个元素<br/>如果已经取完，继续取抛StopIteration异常 |
| reversed  | reversed(seq)            | 返回一个翻转元素的迭代器                                     |
| enumerate | enumerate(seq, start=0)  | 迭代一个可迭代对象，返回一个迭代器<br/>每一个元素都是数字和元素构成的二元组 |
