---
category: Python
---

# 5.2 匿名函数

Python 中，匿名函数也叫 lambda 表达式。

匿名：隐藏名字，即没有名称

匿名函数：没有名字的函数。

函数没有名字该如何定义？函数没有名字如何调用？

**Lambda 表达式**

Python中，使用 Lambda 表达式构建匿名函数。

```python
def foo(x):
    return x ** 2
lambda x: x ** 2 # 定义
a = (lambda x: x ** 2)(4) # 调用
print(a)
foo = lambda x,y: (x+y) ** 2 # 定义函数
print(foo(1, 2))
# 等价于
def foo(x,y):
    return (x+y) ** 2
```

* 使用 lambda 关键字定义匿名函数，格式为 lambda [参数列表]: 表达式
* 参数列表不需要小括号。无参就不写参数
* 冒号用来分割参数列表和表达式部分
* 不需要使用return。表达式的值，就是匿名函数的返回值。表达式中不能出现等号
* Python的lambda表达式（匿名函数）只能写在一行上，也称为单行函数

匿名函数往往用在为高阶函数传参时，使用 lambda 表达式，往往能简化代码

```python
# 返回常量的函数
print((lambda :3)())

# 加法匿名函数，带缺省值
print((lambda x, y=3: x + y)(5))
print((lambda x, y=3: x + y)(5, 6))

# keyword-only参数
print((lambda x, *, y=30: x + y)(5))
print((lambda x, *, y=30: x + y)(5, y=10))

# 可变参数
print((lambda *args: (x for x in args))(*range(5))) # 生成器
print((lambda *args: [x+1 for x in args])(*range(5))) # 列表
print((lambda *args: {x%2 for x in args})(*range(5))) # 集合
print((lambda *args: {str(x):x for x in args})(*range(5))) # 字典

print(dict(map(lambda x: (chr(65+x), 10-x), range(5)))) # 高阶函数，构建字典

d = dict(map(lambda x: (chr(65+x), 10-x), range(5))) # 高阶函数
a = sorted(d.items(), key=lambda x:x[1])
print(a)
```
