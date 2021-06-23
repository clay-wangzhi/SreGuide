---
category: Python
---
# 5.4 装饰器

## 由来

需求：为一个加法函数增加记录实参的功能

```python
def add(x, y):
    print('add called. x={}, y={}'.format(x, y)) # 增加的记录功能
    return x + y

add(4, 5)
```

上面的代码满足了需求，但有缺点：

记录信息的功能，可以是一个单独的功能。显然和add函数耦合太紧密。加法函数属于业务功能，输出信息属于非功能代码，不该放在add函数中

1、提供一个函数logger完成记录功能

```python
def add(x, y):
    return x + y

def logger(fn):
    print('调用前增强')
    ret = fn(4, 5)
    print('调用后增强')
    return ret

print(logger(add))
```

2、改进传参

```python
def add(x, y):
    return x + y

def logger(fn, *args, **kwargs):
    print('调用前增强')
    ret = fn(*args, **kwargs)
    print('调用后增强')
    return ret

print(logger(add, 4, 5))
```

3、柯里化

```python
def add(x, y):
    return x + y

def logger(fn):
    def wrapper( *args, **kwargs):
        print('调用前增强')
        ret = fn(*args, **kwargs)
        print('调用后增强')
        return ret
    return wrapper

inner = logger(add)
x = inner(4, 5)
print(x)
```

再进一步

```python
def add(x, y):
    return x + y

def logger(fn):
    def wrapper( *args, **kwargs):
        print('调用前增强')
        ret = fn(*args, **kwargs)
        print('调用后增强')
        return ret
    return wrapper

add = logger(add)
print(add(4, 5))
```

4、装饰器语法

```python
def logger(fn):
    def wrapper( *args, **kwargs):
        print('调用前增强')
        ret = fn(*args, **kwargs)
        print('调用后增强')
        return ret
    return wrapper

@logger # 等价于 add = wrapper <=> add = logger(add)
def add(x, y):
    return x + y

print(add(4, 5))
```

@logger就是装饰器语法

***等价式非常重要，如果你不能理解装饰器，开始的时候一定要把等价式写在后面***

## 无参装饰器

* 上例的装饰器语法，称为无参装饰器
* @符号后是一个函数
* 虽然是无参装饰器，但是@后的函数本质上是单参函数
* 上例的 logger 函数是一个高阶函数

## 日志记录装饰器实现

```python
import time
import datetime

def logger(fn):
    def wrapper(*args, **kwargs):
        print('调用前增强')
        start = datetime.datetime.now()
        ret = fn(*args, **kwargs) # 参数解构
        print('调用后增强')
        delta = (datetime.datetime.now() - start).total_seconds()
        print('Function {} took {}s.'.format(fn.__name__, delta))
        return ret
    return wrapper

@logger # 等价于 add = wrapper <=> add = logger(add)
def add(x, y):
    time.sleep(2)
    return x + y

print(add(100, 200))
```

## 文档字符串

* Python 文档字符串 Documentation Strings
* 在函数（类、模块）语句块的第一行，且习惯是多行的文本，所以多使用三引号
* 文档字符串也算是合法的一条语句
* 惯例是首字母大写，第一行写概述，空一行，第三行写详细描述
* 可以使用特殊属性\__doc__访问这个文档

```python
def add(x, y):
    """这是加法函数的文档"""
    return x + y

print("{}'s doc = {}".format(add.__name__ , add.__doc__))
```

```python
import time
import datetime

def logger(fn):
    def wrapper(*args, **kwargs):
        '''wrapper's doc'''
        print('调用前增强')
        start = datetime.datetime.now()
        ret = fn(*args, **kwargs) # 参数解构
        print('调用后增强')
        delta = (datetime.datetime.now() - start).total_seconds()
        print('Function {} took {}s.'.format(fn.__name__, delta))
        return ret
    return wrapper

@logger # 等价于 add = wrapper <=> add = logger(add)
def add(x, y):
    '''add's doc'''
    time.sleep(0.1)
    return x + y

print(add(100, 200))

print("name={}, doc={}".format(add.__name__, add.__doc__))
```

被装饰后，函数名和文档都不对了。如何解决？

**functools模块**提供了一个wraps装饰器函数，本质上调用的是update_wrapper，它就是一个属性复制函数。

wraps(wrapped, assigned=WRAPPER_ASSIGNMENTS, updated=WRAPPER_UPDATES)

* wrapped 就是被包装函数
* wrapper 就是包装函数
* 用被包装函数的属性覆盖包装函数的同名属性
* 元组 WRAPPER_ASSIGNMENTS 中是要被覆盖的属性
  * `__module__` ,  `__name__` ,  `__qualname__` ,  `__doc__` ,  `__annotations__`
  * 模块名、名称、限定名、文档、参数注解

```python
import time
import datetime
from functools import wraps

def logger(fn):
    @wraps(fn) # 用被包装函数fn的属性覆盖包装函数wrapper的同名属性
    def wrapper(*args, **kwargs):
        '''wrapper's doc'''
        print('调用前增强')
        start = datetime.datetime.now()
        ret = fn(*args, **kwargs) # 参数解构
        print('调用后增强')
        delta = (datetime.datetime.now() - start).total_seconds()
        print('Function {} took {}s.'.format(fn.__name__, delta))
        return ret
    return wrapper

@logger # 等价于 add = wrapper <=> add = logger(add)
def add(x, y):
    '''add's doc'''
    time.sleep(0.1)
    return x + y

print(add(100, 200))

print("name={}, doc={}".format(add.__name__, add.__doc__))
```

## 带参装饰器

* @之后不是一个单独的标识符，是一个函数调用
* 函数调用的返回值又是一个函数，此函数是一个无参装饰器
* 带参装饰器，可以有任意个参数
  * @func()
  * @func(1)
  * @func(1, 2)

## 进阶

```python
import datetime
from functools import wraps

def logger(fn):
    print('logger run')
    @wraps(fn) # 用被包装函数fn的属性覆盖包装函数wrapper的同名属性
    def wrapper(*args, **kwargs): # wrapper = wraps(fn)(wrapper)
        "wrapper's doc"
        print('wrapper run')
        start = datetime.datetime.now()
        ret = fn(*args, **kwargs) # 参数解构
        delta = (datetime.datetime.now() - start).total_seconds()
        print('Function {} took {}s.'.format(fn.__name__, delta))
        return ret
    return wrapper

@logger # 等价于 add = wrapper <=> add = logger(add)
def add(x, y):
    """add function"""

@logger
def sub(x, y):
    """sub function"""

print(add.__name__, sub.__name__)
```

* logger 什么时候执行？  从上到下执行
* logger 执行过几次？ 两次
* wraps 装饰器执行过几次？ 两次 ， 也是进入函数，从上到下依次执行，函数没调用前，跳过函数部分代码
* wrapper 的 `__name__` 等属性被覆盖过几次？ 两次
* `add.__name__` 打印什么名称？add
* `sub.__name__` 打印什么名称？sub



## 时间模块

### datetime 模块

datetime类

* 时间高级类
* 类方法，即使用类调用的方法，由类方法获得一个时间对象
  * now(tz=None) 返回当前时间的datetime对象，时间到微秒，如果tz为None，返回当前时区的不带时区信息的时间
  * utcnow() 不带时区的0时区时间
  * fromtimestamp(timestamp, tz=None) 从一个时间戳返回一个datetime对象
* 时间对象方法
  * timestamp() 返回一个到微秒的时间戳
    * 时间戳：格林威治时间1970年1月1日0点到现在的秒数
  * 构造方法 datetime.datetime(2016, 12, 6, 16, 29, 43, 79043)
  * year、month、day、hour、minute、second、microsecond，取datetime对象的年月日时分秒及微秒
  * weekday() 返回星期的天，周一0，周日6
  * isoweekday() 返回星期的天，周一1，周日7
  * date() 返回日期date对象
  * time() 返回时间time对象



```python
import datetime

# 类方法获得时间对象
print(datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8)))) # 时区时间
print(datetime.datetime.now()) # 无时区时间
print(datetime.datetime.utcnow()) # UTC时间，可以认为是GMT或0时区时间

# 时间戳操作
stamp = datetime.datetime.now().timestamp() # 获得时间戳
print(stamp)
dt = datetime.datetime.fromtimestamp(stamp) # 从时间戳获得时间对象
print(dt)

print(type(dt.date()), dt.date())
print(type(dt.time()), dt.time())
```

### 日期与格式化

* 类方法 strptime(date_string, format) ，返回datetime对象（时间字符串+格式化字符串 => 时间对象）
* 对象方法 strftime(format) ，返回字符串（时间对象通过格式字符串 => 时间字符串）
* 字符串format函数格式化（时间对象通过格式字符串 => 时间字符串）

```python
import datetime

datestr = '2018-01-10 17:16:08'
dt = datetime.datetime.strptime(datestr, '%Y-%m-%d %H:%M:%S') #由字符串到时间对象
print(type(dt), dt)
print(dt.strftime('%Y/%m/%d-%H:%M:%S')) # 输出为字符串
print("{:%Y/%m/%d %H:%M:%S}".format(dt)) # 输出为字符串
```

### timedelta 类

* datetime2 = datetime1 + timedelta
* datetime2 = datetime1 - timedelta
* timedelta = datetime1 - datetime2
* 构造方法
  * datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0,hours=0, weeks=0)
  * year = datetime.timedelta(days=365)
* timedelta对象有方法total_seconds()， 返回**时间差的总秒数**

### time 模块

* time.sleep(secs) 将调用线程挂起指定的秒数

