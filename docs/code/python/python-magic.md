---
category: Python
---
# 11 魔术方法

## 实例化

| 方法      | 意义                                                         |
| --------- | ------------------------------------------------------------ |
| `__new__` | 实例化一个对象<br/>该方法需要返回一个值，如果该值不是 cls 的实例，则不会调用 `__init__`<br/>该方法永远都是静态方法 |

```python
class A:
    def __new__(cls, *args, **kwargs):
        print(cls)
        print(args)
        print(kwargs)
        #return super().__new__(cls)
        #return 1
        return None

    def __init__(self, name):
        self.name = name
        
a = A()
print(a)
```

`__new__` 方法很少使用，即使创建了该方法，也会使用 `return super().__new__(cls)` 基类object的
`__new__` 方法来创建实例并返回。

## 可视化

| 方法        | 意义                                                         |
| ----------- | ------------------------------------------------------------ |
| `__str__`   | str()函数、format()函数、print()函数调用，需要返回对象的字符串表达。如果没<br/>有定义，就去调用`__repr__` 方法返回字符串表达，如果 `__repr__` 没有定义，就直接返回对象的内存地址信息 |
| `__repr__`  | 内建函数repr()对一个对象获取字符串表达。<br/>调用 `__repr__` 方法返回字符串表达，如果 `__repr__` 也没有定义，就直接返回 object 的定义就是显示内存地址信息 |
| `__bytes__` | bytes() 函数调用，返回一个对象的 bytes 表达，即返回 bytes 对象 |

```python
class A:
    def __init__(self, name, age=18):
        self.name = name
        self.age = age

    def __repr__(self):
        return 'repr: {},{}'.format(self.name, self.age)

    def __str__(self):
        return 'str: {},{}'.format(self.name, self.age)

    def __bytes__(self):
        #return "{} is {}".format(self.name, self.age).encode()
        import json
        return json.dumps(self.__dict__).encode()
    
print(A('tom')) # print函数使用__str__
print('{}'.format(A('tom')))
print([A('tom')]) # []使用__str__，但其内部使用__repr__
print([str(A('tom'))]) # []使用__str__，其中的元素使用str()函数也调用__str__
print(bytes(A('tom')))
```

## hash

| 方法       | 意义                                                         |
| ---------- | ------------------------------------------------------------ |
| `__hash__` | 内建函数 hash() 调用的返回值，返回一个整数。如果定义这个方法该类的实例就<br/>可hash。 |

```python
print(hash(1))
print(hash('tom'))
print(hash(('tom',)))
```

```python
class A:
    def __init__(self, name, age=18):
        self.name = name

    def __hash__(self):
        return 1

    def __repr__(self):
        return self.name

print(hash(A('tom'))) # 可hash 1
print((A('tom'), A('tom'))) # (tom, tom)
print([A('tom'), A('tom')]) # [tom, tom]
print('~~~~~~~~~~~~~~~~~~~~')
print({1, 1}) # {1}
print({'tom', 'tom'}) # {'tom'}
a1 = A('tom')
a2 = A('tom')
s = {a1, a2} # set
print(s) # 去重了吗 没有 {tom, tom}
print(hash(a1), hash(a2)) # 1, 1
t1 = ('tom',)
t2 = ('tom',)
print(t1 is t2) # 3.7+是True，3.6及以下是False
print(t1 == t2) # True
print({t1, t2}, hash(t1), hash(t2)) #(tom,)
print({('tom',), ('tom',)})
print({'tom', 'tom'})

```

上例中， A的实例放在set中，它们hash值是相同的，为什么不能去重？
hash值相同就会去重吗？

```python
class A:
    def __init__(self, name, age=18):
        self.name = name

    def __hash__(self):
        return 1

    def __eq__(self, other): # 这个函数作用？
        return self.name == other.name

    def __repr__(self):
        return self.name

print(hash(A('tom')))
print((A('tom'), A('tom')))
print([A('tom'), A('tom')])
print('~~~~~~~~~~~~~~~~~~~~')
s = {A('tom'), A('tom')} # set
print(s)
```

| 方法     | 意义                                                         |
| -------- | ------------------------------------------------------------ |
| `__eq__` | 对应==操作符，判断2个对象内容是否相等，返回bool值<br/>定义了这个方法，如果不提供 `__hash__` 方法，那么实例将不可hash了 |

`__hash__` 方法只是返回一个hash值作为set的key，但是 去重 ，还需要 `__eq__` 来判断2个对象是否相等。
hash值相等，只是hash冲突，不能说明两个对象是相等的。

因此，一般来说提供 `__hash__` 方法是为了作为set或者dict的key，如果 去重 要同时提供 `__eq__` 方法。

不可 hash 对象 isinstance(p1, collections.Hashable) 一定为 False。
去重 需要提供 `__eq__` 方法。

**思考：**
list类实例为什么不可hash？



源码中有一句 `__hash__ = None`，也就是如果调用 `__hash__ ()`相当于None()，一定报错。
所有类都继承object，而这个类是具有 `__hash__ ()`方法的，如果一个类不能被hash，就把 `__hash__` 设置为None。

## bool

| 方法       | 意义                                                         |
| ---------- | ------------------------------------------------------------ |
| `__bool__` | 内建函数bool()，或者对象放在逻辑表达式的位置，调用这个函数返回布尔值。<br/>没有定义 `__bool__` ()，就找 `__len__` ()返回长度，非0为真。<br/>如果 `__len__` ()也没有定义，那么所有实例都返回真 |

```python
class A: pass
a = A()

print(bool(A)) # True
print(bool(a)) #True

class B:
    def __bool__(self):
        return False

print(bool(B)) # True
print(bool(B())) # False

if B():
    print('Real B instance')

class C:
    def __len__(self):
        return 0

print(bool(C)) # True
print(bool(C())) # False

if C():
    print('Real C instance')
```

## 运算符重载

operator 模块提供以下的特殊方法，可以将类的实例使用下面的操作符来操作

| 运算符                                | 特殊方法                                                     | 含义                                             |
| ------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------ |
| <, <=, ==, >,<br/>>=, !=              | `__lt__`,`__le__`,`__eq__`,`__gt__`,`__ge__`,`__ne__`        | 比较运算符                                       |
| +, -, *, /, %,<br/>//, **,<br/>divmod | `__add__`,`__sub__`,`__mul__`,`__truediv__`,<br/>`__mod__`,`__floordiv__`,`__pow__`,`__divmod__` | 算数运算符，移位、<br/>位运算也有对应的方<br/>法 |
| +=, -=, *=,<br/>/=, %=, //=,<br/>**=  | `__iadd__`,`__isub__`,`__imul__`,`__itruediv__`,<br/>`__imod__`,`__ifloordiv__`,`__ipow__`, |                                                  |

实现自定义类的实例的大小比较（非常重要，排序时使用）

```python
class A:
    def __init__(self, name, age=18):
        self.name = name
        self.age = age

    def __eq__(self, other):
        return self.name == other.name and self.age == other.age

    def __gt__(self, other):
        return self.age > other.age

    def __ge__(self, other):
        return self.age >= other.age

tom = A('tom')
jerry = A('jerry', 16)
print(tom == jerry, tom != jerry)
print(tom > jerry, tom < jerry)
print(tom >= jerry, tom <= jerry)
```

`__eq__` 等于可以推断不等于
`__gt__` 大于可以推断小于
`__ge__` 大于等于可以推断小于等于
也就是用3个方法，就可以把所有比较解决了

实现两个学生的成绩差

```python
class A:
    def __init__(self, name, score):
        self.name = name
        self.score = score

tom = A('tom', 80)
jerry = A('jerry', 85)
print(tom.score - jerry.score)
```

```python
class A:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __sub__(self, other):
        return self.score - other.score

tom = A('tom', 80)
jerry = A('jerry', 85)
print(tom.score - jerry.score)

print(tom - jerry)
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
jerry -= tom # 调用什么
print(tom)
print(jerry) # 显示什么 5
```

```python
class A:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __sub__(self, other):
        return self.score - other.score

    def __isub__(self, other):
        #return A(self.name, self.score - other.score)
        self.score -= other.score
        return self
    
    def __repr__(self):
        return "<A name={}, score={}>".format(self.name, self.score)

tom = A('tom', 80)
jerry = A('jerry', 85)
print(tom.score - jerry.score)
print(tom - jerry)
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~')
jerry -= tom # 调用什么
print(tom)
print(jerry)
```

思考：list的+和+=的区别。tuple呢？

## 上下文管理

文件 IO 操作可以对文件对象使用上下文管理，使用 with...as 语法。

```python
with open('test') as f:
	pass
```

仿照上例写一个自己的类，实现上下文管理

```python
class Point:
	pass

with Point() as p: # AttributeError: __exit__
	pass
```

提示属性错误，没有 `__exit__` ，看了需要这个属性
某些版本会显示没有 `__enter__`

### 上下文管理对象

当一个对象同时实现了 `__enter__ `()和 `__exit__` ()方法，它就属于上下文管理的对象

| 方法        | 意义                                                         |
| ----------- | ------------------------------------------------------------ |
| `__enter__` | 进入与此对象相关的上下文。如果存在该方法，with 语法会把该方法的返回值作<br/>为绑定到 as 子句中指定的变量上 |
| `__exit__`  | 退出与此对象相关的上下文                                     |

```python
import time

class Point:
    def __init__(self):
        print('init ~~~~~~~~')
        time.sleep(1)
        print('init over')

    def __enter__(self):
        print('enter ~~~~~~~~')

    def __exit__(self, exc_type, exc_val, exc_tb):
        print('exit ============')

with Point() as p:
    print('in with-------------')

    time.sleep(2)
    print('with over')

print('=======end==========')

# 输出结果为
init ~~~~~~~~
init over
enter ~~~~~~~~
in with-------------
with over
exit ============
=======end==========
```

实例化对象的时候，并不会调用enter，进入with语句块调用 `__enter__` 方法，然后执行语句体，最后离开 with 语句块的时候，调用 `__exit__` 方法。

with 可以开启一个上下文运行环境，在执行前做一些准备工作，执行后做一些收尾工作。

注意，with并不开启一个新的作用域。

### 上下文管理的安全性

```python
import time

class Point:
    def __init__(self):
        print('init ~~~~~~~~')
        time.sleep(1)
        print('init over')

    def __enter__(self):
        print('enter ~~~~~~~~')

    def __exit__(self, exc_type, exc_val, exc_tb):
        print('exit ============')

with Point() as p:
    print('in with-------------')
    raise Exception('error')
    time.sleep(2)
    print('with over')
    
print('=======end==========')
```

可以看出在抛出异常的情况下，with的`__exit__`照样执行，**上下文管理是安全的**。

### with 语句

```python
# t3.py文件中写入下面代码
class Point:
    def __init__(self):
        print('init')

    def __enter__(self):
        print('enter')

    def __exit__(self, exc_type, exc_val, exc_tb):
        print('exit')

f = open('t3.py')
with f as p:
    print(f)
    print(p)
    print(f is p) # 打印什么 True
    print(f == p) # 打印什么 True

p = f = None
p = Point()
with p as f:
    print('in with-------------')
    print(p == f)
    print('with over')

print('=======end==========')
```

问题在于 `__enter__` 方法上，它将自己的返回值赋给f。修改上例

```python
# t3.py文件中写入下面代码
class Point:
    def __init__(self):
        print('init')

    def __enter__(self):
        print('enter')
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print('exit')
p = f = None
p = Point()
with p as f:
    print('in with-------------')
    print(p == f)
    print('with over')

print('=======end==========')
```

with 语法，会调用 with 后的对象的`__enter__`方法，如果有 as，则将该方法的返回值赋给 as 子句的变量

上例，可以等价为`f = p.__enter__()`

### 上下文应用场景

1. 增强功能
在代码执行的前后增加代码，以增强其功能。类似装饰器的功能。
2. 资源管理
打开了资源需要关闭，例如文件对象、网络连接、数据库连接等
3. 权限验证
在执行代码之前，做权限的验证，在` __enter__` 中处理

### contextlib.contextmanager

contextlib.contextmanager 它是一个装饰器实现上下文管理，装饰一个函数，而不用像类一样实现`__enter__` 和 `__exit__` 方法。

对下面的函数有要求：必须有yield，也就是这个函数必须返回一个生成器，且只有yield一个值。

也就是这个装饰器接收一个生成器对象作为参数。

```python
import contextlib

@contextlib.contextmanager
def foo(): #
    print('enter') # 相当于__enter__()
    yield # yield 5，yield的值只能有一个，相当于作为__enter__方法的返回值
    print('exit') # 相当于__exit__()

with foo() as f:
    #raise Exception()
    print(f)
```

f 接收 yield 语句的返回值。

上面的程序看似不错但是，增加一个异常试一试，发现不能保证 exit 的执行，怎么办？
增加 try finally。

```python
import contextlib

@contextlib.contextmanager
def foo(): #
    print('enter') # 相当于__enter__()
    try:
        yield # yield 5，yield的值只能有一个，相当于作为__enter__方法的返回值
    finally:
        print('exit') # 相当于__exit__()

with foo() as f:
    raise Exception()
    print(f)
```

上例这么做有什么意义呢？
当 yield 发生处为生成器函数增加了上下文管理。这是为函数增加上下文机制的方式。

* 把 yield 之前的当做`__enter__`方法执行
* 把 yield 之后的当做`__exit__`方法执行
* 把 yield 的值作为`__enter__`的返回值

练习：为add函数计时

```python
import contextlib
import datetime
import time

@contextlib.contextmanager
def timeit():
    print('enter')
    start = datetime.datetime.now()
    try:
        yield
    finally:
        print('exit')
        delta = (datetime.datetime.now() - start).total_seconds()
        print('delta = {}'.format(delta))

def add(x, y):
    time.sleep(2)
    return x + y

with timeit():
    print(add(4, 5))
```

**总结**

如果业务逻辑简单可以使用函数加 contextlib.contextmanager 装饰器方式，如果业务复杂，用类的方
式加 `__enter__` 和 `__exit__` 方法方便。

## 反射概念

概述

运行时，runtime，区别于编译时，指的是程序被加载到内存中执行的时候。
反射，reflection，指的是运行时获取类型定义信息。
一个对象能够在运行时，像照镜子一样，反射出其类型信息。
简单说，在Python中，能够通过一个对象，找出其type、class、attribute 或 method 的能力，称为反射或者自省。
具有反射能力的函数有 type()、isinstance()、callable()、dir()、getattr() 等

| 内建函数                         | 意义                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| getattr(object, name[, default]) | 通过name返回object的属性值。当属性不存在，将使用default返回，如果<br/>没有default，则抛出AttributeError。name必须为字符串 |
| setattr(object, name, value)     | object的属性存在，则覆盖，不存在，新增                       |
| hasattr(object, name)            | 判断对象是否有这个名字的属性，name必须为字符串               |

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p1 = Point(4, 5)
print(p1)
```

为上面 Point 类增加打印的方法

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p1 = Point(4, 5)
print(p1)
print(p1.x, p1.y)
print(getattr(p1, 'x'), getattr(p1, 'y'))
setattr(p1, 'x', 10)
setattr(Point, '__str__', lambda self: "<Point {},{}>".format(self.x, self.y))
print(p1)
```

反射相关的魔术方法
`__getattr__()` 、 `__setattr__()` 、 `__delattr__()` 这三个魔术方法，分别测试这三个方法

### `__getattr__()`

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __getattr__(self, item):
        print('getattr~~~')
        print(item)
        return 100

p1 = Point(4, 5)
print(p1.x)
print(p1.y)
print(p1.z)
```

实例属性查找顺序为：

`__instance.__dict__ --> instance.__class__.__dict__ --> 继承的祖先类（直到object）的__dict__ --> 找不到 --> 调用__getattr__()`

### `__setattr__()`

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __getattr__(self, item):
        print('getattr~~~')
        print(item)
        return 100

    def __setattr__(self, key, value):
        print('setattr~~~, {}={}'.format(key, value))

p1 = Point(4, 5)
print(p1.x)
print(p1.y)
print(p1.__dict__)
```

p1 的实例字典里面什么都没有，而且访问x和y属性的时候竟然访问到了` __getattr__() `，为什么？

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __getattr__(self, item):
        print('getattr~~~')
        print(item)
        return 100

    def __setattr__(self, key, value):
        print('setattr~~~, {}={}'.format(key, value))
        self.__dict__[key] = value
        # setattr(self, key, value) # 对吗 不对，self会产生递归

p1 = Point(4, 5)
print(p1.x)
print(p1.y)
print(p1.__dict__)
```

`__setattr__()` 方法，可以拦截对实例属性的增加、修改操作，如果要设置生效，需要自己操作实例
的 `__dict__` 。

### `__delattr__()`

```python
class Point:
    Z = 100
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __delattr__(self, item):
        print('delattr, {}'.format(item))

p1 = Point(4, 5)
del p1.x
del p1.y
del p1.Z
print(p1.__dict__)
print(Point.__dict__)
del Point.Z
print(Point.__dict__)
```

通过实例删除属性，就会尝试调用该魔术方法。

## `__getattribute__`

```python
class Point:
    Z = 100
    def __init__(self, x, y):
        self.x = x
        self.y = y


p1 = Point(4, 5)
print(p1.x, p1.y)
print(Point.Z, p1.Z)
print('-' * 30)

# 为Point类增加__getattribute__，观察变化
class Point:
    Z = 100
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __getattribute__(self, item):
        print(item)

p1 = Point(4, 5)
print(p1.x, p1.y)
print(Point.Z, p1.Z)
print(p1.__dict__)
```

实例的所有的属性访问，第一个都会调用 `__getattribute__` 方法，它阻止了属性的查找，该方法应该返回（计算后的）值或者抛出一个 AttributeError 异常。

* 它的return值将作为属性查找的结果。
* 如果抛出AttributeError异常，则会直接调用 `__getattr__ `方法，因为表示属性没有找到。

```python

class Point:
    Z = 100
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __getattr__(self, item):
        return 'missing {}'.format(item)

    def __getattribute__(self, item):
        # print(item)
        # raise AttributeError('Not Found')
        # return self.__dict__[item] # 不能用，会产生递归
        # pass
        # return object.__getattribute__(self, item)
        return super().__getattribute__(item)

p1 = Point(4, 5)
print(p1.x, p1.y)
print(Point.Z, p1.Z)
print(p1.__dict__)
```

`__getattribute__` 方法中为了避免在该方法中无限的递归，它的实现应该永远调用基类的同名方法以访问需要的任何属性，例如 `object.__getattribute__(self, name) `。

注意，除非你明确地知道 `__getattribute__` 方法用来做什么，否则不要使用它。

**总结**

| 魔术方法             | 意义                                                       |
| -------------------- | ---------------------------------------------------------- |
| `__getattr__()`      | 当通过搜索实例、实例的类及祖先类查不到属性，就会调用此方法 |
| `__setattr__()`      | 通过 ` . `访问实例属性，进行增加、修改都要调用它           |
| `__delattr__()`      | 当通过实例来删除属性时调用此方法                           |
| `__getattribute__()` | 实例所有的属性调用都从这个方法开始                         |

实例属性查找顺序：

`实例调用__getattribute__() --> instance.__dict__ --> instance.__class__.__dict__ --> 继承的祖先类（直到object）的__dict__ --> 调用__getattr__()`