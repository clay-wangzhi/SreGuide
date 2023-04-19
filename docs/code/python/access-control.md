---
category: Python
---

# 9.2 访问控制和属性装饰器

## 访问控制

**私有（Private） 成员**

在 Python 中，在类变量或实例变量前使用两个下划线的变量，称为私有成员，包括私有属性、私有方法。

```python
class Person:
    def __init__(self, name, age=18):
        self.a = '1'
        self.__name = name
        self.__age = age

    def __showage(self):
        print(self.__age)

print(Person.__name)  # 都不可以调用
print(Person.__showage)
tom = Person('tom')
print(tom.__name)
print(tom.__showage)
```

在类的定义范围内，使用前置双下划线的标识符，在类外部不能直接访问。

**私有成员本质**

```python
class Person:
    def __init__(self, name, age=18):
        self.__name = name
        self.__age = age

    def __showage(self):
        print(self.__age)

print(Person.__dict__)
tom = Person('tom')
print(tom.__dict__)
# 结果如下
{'__module__': '__main__', '__init__': <function Person.__init__ at 0x0000029B2B86BB80>, '_Person__showage': <function Person.__showage at 0x0000029B2B86BC10>, '__dict__': <attribute '__dict__' of 'Person' objects>, '__weakref__': <attribute '__weakref__' of 'Person' objects>, '__doc__': None}
{'_Person__name': 'tom', '_Person__age': 18}

```

打开类字典和实例字典，一目了然，都被悄悄的改了名称，所以使用定义的名字就访问不了了。

名称都被前置了`_类名`前缀。

如果知道了改后的名称，照样可以访问，就绕过了Python做的限制。

> Python就没有真正的私有成员！但是请遵守这个约定，不要在类外面访问类私有或者实例的私有成员。因为类的作用就是封装，私有成员就是要被隐藏的数据或方法。

**保护成员**

在类变量或实例变量前使用一个下划线的变量，称为保护成员。

```python
class Person:
    def __init__(self, name, age=18):
        self._name = name
        self._age = age

    def _showage(self):
        print(self._age)

print(Person.__dict__)
tom = Person('Tom')
print(tom.__dict__)
tom._showage()
print(tom._name, tom._age)
```

保护成员不是 Python 中定义的，是 Python 编程者自我约定俗称的，请遵守这个约定。

**总结**

在 Python 中使用 _单下划线或者__双下划线来表示一个成员被保护或者私有化隐藏起来。

但是，不管使用什么样的访问控制，都不能真正的阻止用户修改类的成员。Python 中没有绝对的安全的保护成员或者私有成员。

因此，前导的下划线只是一种警告或者提醒，请遵守这个约定。

在 Pycharm 中，已经对访问私有、保护成员访问的时候不会直接提示，就是一种善意的提醒。

## 属性装饰器

一般好的设计是：把实例的某些属性保护起来，不让外部直接访问，外部使用 getter 读取属性和 setter 方法设置属性。

```python
class Person:
    def __init__(self, name):
        self._name = name

    def name(self):
        return self._name

    def set_name(self,value):
        self._name = value

tom = Person('Tom')
print(tom.name())
tom.set_name('Jerry')
print(tom.name())
```

Python 提供了 property 装饰器，简化调用。

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self,value):
        self._name = value

    @name.deleter
    def name(self):
        print('del name')

tom = Person('Tom')
print(tom.name)
tom.name = 'Jerry'
print(tom.name)
del tom.name
```

特别注意：使用 property 装饰器的时候这三个方法同名

property 装饰器

* 后面跟的函数名就是以后的属性名。它就是getter。这个必须有，有了它至少是只读属性
* setter 装饰器
  * 与属性名同名，且接收2个参数，第一个是 self， 第二个是将要赋值的值。有了它，属性可写
* deleter 装饰器
  * 可以控制是否删除属性。很少用
* property 装饰器必须在前，setter、deleter 装饰器在后
* property 装饰器能通过简单的方式，把对方法的操作编程对属性的访问，并起到了一定隐藏效果

其他方法

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        return self._name

    def set_name(self, value):
        self._name = value

    def del_name(self):
        # del self._name
        print('del name')

    name = property(get_name, set_name, del_name)

tom = Person('Tom')
print(tom.name)
tom.name = 'Jerry'
print(tom.name)
del tom.name
```

这种定义方式，适合 get_name、set_name、del_name 还可以单独使用，即可以当方法使用。