---
category: Python
---
# 9.1 类、实例和封装

## 封装

封装就是定义类，将属性和操作组织在类中

### Python 类定义

```python
class ClassName:
    语句块
```

1. 必须使用 class 关键字
2. 类名强烈建议使用**大驼峰**命名方式，即每个单词首字母大写。其本质就是一个标识符
3. 类定义完成后，就产生了一个**类对象**，绑定到了标识符 ClassName 上

举例

```python
class Person:
    """A Example Class"""
    x = 'abc' # 类属性
    
    def showme(self): # 方法，也是属性
        return __class__.__name__ # 返回类的名称
  
print(Person)
print(Person.__name__) # 类名字
print(Person.__doc__) # 类文档
print(Person.showme) # 类属性
```

### 类及类属性

* 类对象：类也是对象，类的定义执行后会生成一个类对象
* 类属性：类定义中的变量和类中定义的方法都是类的属性。上例中类 Person 的 x 和 showme
* 类变量：属性也是标识符，也是变量。上例中类 Person 的 x 和 showme

Person 中， x、foo 都是类的属性，`__name__`、`__doc__`是类的特殊属性

showme 方法是类的属性，如果吃是人类的方法，但是每一个具体的人才能吃东西，也就是说吃是人的实例能调用的方法。

showme 是方法method，本质上就是普通的函数对象 function，它一般要求至少有一个参数。第一个形式参数可以是 self（self 只是个惯用标识符，可以换名字），这个参数位置就留给了 self。

**self 指代当前实例本身**

## 实例化

```python
a = Person() # 实例化
```

使用上面的语法，在类对象名称后面加上一个括号，就调用类的实例化方法，完成实例化。
实例化就真正创建一个改类的对象（实例 instance）。例如

```python
tom = Person() # 不同的实例
jerry = Person() # 不用的实例
```

上面的 tom、jerry 都是 Person 类的实例，通过实例化生成了2个不同的实例。

通常，每次实例化后获得的实例，是不同的实例，即使是使用同样的参数实例化，也得到不一样的对象。

Python 类实例化后，会自动调用`__init__`方法。这个方式第一个形式参数必须留给 self, 其他形式参数随意。

**构造的2个阶段**

确切地讲，`tom = Person()`过程分为2个阶段：实例化和初始化。

**`__init__`方法**

有些人把 Python 的`__init__`方法称为构造方法或构造器。

Person() 实例化后，要初始化，要调用的是`__init__(self)`方法，可以不定义，如果没有定义会在实例化后**隐式**调用其父类的。

作用：对实例进行初始化

```python
class Person:
    def __init__(self):
        print('init~~~~')
     
print(Person) # 不会调用__init__
print(Person()) # 会调用__init__
tom = Person() # 会调用__init__
```

初始化函数可以多个参数，请注意第一位置必须是 self， 例如`__init__(self, name, age)`

```python
class Person:
    def __init__(self, name, age):
        print('init~~~~')
        self.name = name
        self.age = age
    
    def showage(self):
        print("{} is {}.".format(self.name, self.age))
       
   
tom = Person('Tom', 20) 
print(tom.name, tom.age)
tom.showage()
jerry = Person('Jerry', 18)
print(jerry.name, jerry.age)
jerry.age += 1
print(jerry.name, jerry.age)
jerry.showage()
```

> 注意： `__init__()`方法不能有返回值，也就是只能是 return None

**实例对象 instance**

上例中，类 Person 实例化后获得一个该类的实例，就是实例对象

`__init__`方法的第一参数 self 就是指代某一个实例自身。

执行`Person('Tom', 20)`时，调用`__init__()`方法。self.name 就是 tom 对象的 name，name 是保存在了 tom 对象上，而不是 Person 类上，称为 实例变量。

类实例化后，得到一个实例对象，调用方法时采用 tomc.showage() 的方式，但是 showage 方法的形参需要一个形参 self, 我们并没有提供，并没有报错，为什么？

**方法绑定**

采用 tom.showage() 的方式调用，实例对象会绑定到方法上。这个 self 就是 tom，指向 当前调用改方法的实例本身。

tom.showage() 调用时，会把方法的调用者 tom 实例作为第一参数 self 的实参输入`__init__()`方法。

**self**

```python
class Person:
    def __init__(self):
        print(1, 'self in init = {}'.format(id(self)))

    def showme(self):
        print(2, 'self in showme = {}'.format(id(self)))

tom = Person()
print(3, 'tom = {}'.format(id(tom)))
print('-' * 30)
tom.showme()

# 打印结果为
1 self in init = 2921507816448
3 tom = 2921507816448
------------------------------
2 self in showme = 2921507816448
```

上例说明，self 就是调用者， 就是 tom 对应的实例对象。

self 这个形参标识符的名字只是一个惯例，它可以修改，但是请不要修改，否则影响代码的可读性。

### 实例变量和类变量

```python
class Person:
    age = 3
    def __init__(self, name):
        self.name = name

tom = Person('tom')
jerry = Person('Jerry')
print(tom.name, tom.age)
print(jerry.name, jerry.age)
print(Person.age)

Person.age = 30
print(Person.age, tom.age, jerry.age)

# 运行结果
tom 3
Jerry 3
3
30 30 30
```

* 实例变量是每一个实例自己的变量，是自己独有的
* 类变量是类的变量，是类的所有实例共享的属性或方法

### 特殊属性

| 特殊属性       | 含义             |
| -------------- | ---------------- |
| `__name__`     | 对象名           |
| `__class__`    | 对象的类型       |
| `__dict__`     | 对象的属性的字典 |
| `__qualname__` | 类的限定名       |

> 注意：Python中每一种对象都拥有不同的属性。函数是对象，类是对象，类的实例也是对象。

### 属性本质

```python
class Person:
    age = 3
    def __init__(self, name):
        self.name = name

print('----类----')
print(Person.__class__,type(Person), Person.__class__ is type(Person)) # 类型
print(sorted(Person.__dict__.items()), end='\n\n') # 类字典

tom = Person('tom')
print('----通过实例访问类----')
print(tom.__class__, type(tom), tom.__class__ is type(tom))
print(tom.__class__.__name__, type(tom).__name__)
print(sorted(tom.__class__.__dict__.items()))
print('----实例自己的属性----')
print(sorted(tom.__dict__.items()))  # 实例的字典

# 结果为
----类----
<class 'type'> <class 'type'> True
[('__dict__', <attribute '__dict__' of 'Person' objects>), ('__doc__', None), ('__init__', <function Person.__init__ at 0x000001E279A8BB80>), ('__module__', '__main__'), ('__weakref__', <attribute '__weakref__' of 'Person' objects>), ('age', 3)]

----通过实例访问类----
<class '__main__.Person'> <class '__main__.Person'> True
Person Person
[('__dict__', <attribute '__dict__' of 'Person' objects>), ('__doc__', None), ('__init__', <function Person.__init__ at 0x000001E279A8BB80>), ('__module__', '__main__'), ('__weakref__', <attribute '__weakref__' of 'Person' objects>), ('age', 3)]
----实例自己的属性----
[('name', 'tom')]
```

上例中，可以看到类属性保存在类的`__dict__`中，实例属性保存在实例的`__dict__`中，如果从实例访问类的属性，也可以借助`__class__`找到所属的类，再通过类来访问类属性，例如`tom.__class__.age`

```python
class Person:
    age = 3
    height = 170
    def __init__(self, name, age=18):
        self.name = name
        self.age = age

tom = Person('Tom') # 实例化、初始化
jerry = Person('Jerry', 20)

Person.age = 30
print(1, Person.age, tom.age, jerry.age) # 3, 18, 20

print(2, Person.height, tom.height, jerry.height) # 170, 170, 170
jerry.height = 175
print(3, Person.height, tom.height, jerry.height) # 170, 170, 175

tom.height += 10
print(4, Person.height, tom.height, jerry.height) # 170, 180, 175

Person.height += 15
print(5, Person.height, tom.height, jerry.height) # 185, 180, 175

Person.weight = 70
print(6, Person.weight, tom.weight, jerry.weight) # 70, 70, 70

print(7, tom.__dict__['height']) # 180
print(8, tom.__dict__['weight']) # error
```

**总结**

* 是类的，也是这个类所有实例的，其 实例都可以访问到
* 是实例的，就是这个实例自己的，通过类访问不到
* 类变量是属于类的变量，这个类的所有实例可以共享这个变量

对象（实例或类）可以动态的给自己增加一个属性（赋值即定义一个新属性）。这也是动态语言的特性。

`实例.__dict__[变量名]`和`实例.变量`都可以访问到实例自己的属性（注意这两种访问是有本质区别的）

对实例访问来说，实例的同名变量会**隐藏**掉类变量，或者说是覆盖了这个类变量。但是注意类变量还在那里，并没有真正被覆盖。

**实例属性的查找顺序**

指的是实例使用`.点号`来访问属性，会先找自己的`__dict__`，如果没有，然后通过属性`__class__`找到自己的类，再去类的`__dict__`中找

> 注意：如果实例使用`__dict__[变量名]`访问变量，将不会按照上面的查找顺序找变量了，这是指明使用字典的 key 查找，不是属性查找

一般来说，**类变量可使用全大写来命名**

### 类方法和静态方法

前面的例子中定义的`__init__`等方法，这些方法本身都是类的属性，第一个参数必须是 self，而 self 必须指向一个对象，也就是类实例化之后，由实例来调用这个方法。

**普通函数**

```python
class Person:
    def normal_function():
        print('普通的函数')

    def method(self):
        print('方法')

# 调用
Person.normal_function() # 正常调用
print(Person().normal_function) # 可以， 没调用
# print(Person().normal_function()) # 不可以，多传了一个参数
print(Person.__dict__) # 
```

Person.normal_function()

可以放在类中定义，因为这个方法只是被 Person 这个类管理的一个普通的函数， normal_function 是 Person 的一个属性而已。

由于 normal_function 在定义的时候没有指定形参 self，不能用 Person().normal_method() 调用。
原因是，Person() 是实例，实例调用的时候，由于做了实例绑定，那么就需要 normal_method 的第一个形参来接受绑定的实例。

> 注意：虽然语法是对的，但是，没人会这么用，也就是**禁止**这么写

**类方法**

```python
class Person:
    @classmethod
    def class_method(cls):
        print('类方法')
        print("{0}'s name = {0.__name__}".format(cls))
        cls.HEIGHT = 170

# 调用
Person.class_method()
Person().class_method()
print(Person.__dict__)
```

* 在类定义中，使用 @classmethod 装饰器修饰的方法
* 必须至少有一个参数，且第一个参数留给了 cls, cls 指代调用者即类对象自身
* cls 这个标识符可以是任意合法名称，但是为了易读，请不要修改
* 通过 cls 可以直接操作类的属性

通过类、实例都可以非常方便地调用类方法。 classmethod 装饰器 内存 将类或提取实例的 类 注入到类方法的第一个参数中。

> 注意：无法通过 cls 操作类的实例

**静态方法**

```python
class Person:
    HEIGHT = 180

    @staticmethod
    def static_method():
        print('静态方法')
        print(Person.HEIGHT)

# 调用
Person.static_method()
Person().static_method()
print(Person.__dict__)
```

* 在类定义中，使用 @staticmethod 装饰器修饰的方法
* 调用时，不会隐式的传入参数

通过类、实例都可以调用静态方法，不会像普通方式、类方法那样注入参数。

静态方法，只表明这个方法属于这个名词空间。函数归在一起，方便组织管理

**方法的调用**

类可以定义这么多种方法，究竟如何调用他们？

类几乎可以调用所有内部定义的方法，但是调用普通的方法时会报错，原因是第一参数应该是累的实例。

实例也几乎可以调用所有的方法，普通的函数 的调用一般不可能出现，因为原则上不允许这么定义。

总结：

* 类除了普通方法都可以调用
* 普通方法需要对象的实例作为第一参数
* 实例可以调用所有类中定义的方法（包括类方法、静态方法），普通方法传入实例自身，静态方法和类方法内部都要使用实例的类

```python
class Person:
    def method(self):
        print("{}".format(self))
        print("{}".format(__class__))
        print("{}".format(__class__.__name__))
        print("{}".format(__name__))

tom = Person()
tom.method()
print('-' * 30)
Person.method(1)
print('-' * 30)

Person.method(tom)
print('-' * 30)

tom.__class__.method(tom)
```

tom.method() 调用的时候，会绑定实例，调用 method 方法是，实例 tom 会注入到 method 中，这样第一参数就满足了。

Person.method() ，使用类调用，不会有实例绑定，调用 method 方法时，就缺少了第一参数，可以手动的填入。

### 封装总结

面向对象的三要素之一，封装 Encapsulation

封装

* 将数据和操作组织到类中，即属性和方法
* 将数据隐藏起来，给使用者提供操作（方法）。使用者通过操作就可以获取或者修改数据。getter 和 setter
* 通过访问控制，暴露适当的数据和操作给用户，该隐藏的隐藏起来，例如保护成员和私有成员。