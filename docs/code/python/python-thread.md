---
category: Python
---
# 10.2 多线程

## 线程的状态

* 就绪（Ready）：线程能够运行，但在等待被调度。可能线程刚刚创建启动，或刚刚从阻塞中恢复，或者被其他线程抢占
* 运行（Running）：线程正在运行
* 阻塞（Blocked）：线程等待外部事件发生而无法运行，如 I/O 操作
* 终止（Terminated）：线程完成，或退出，或被取消



![thread](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/thread.png)

## Python的线程开发

Python 的线程开发使用标准库 threading。

进程靠线程执行代码，至少有一个**主线程**，其它线程是工作线程。
主线程是第一个启动的线程。

父线程：如果线程A中启动了一个线程B，A就是B的父线程。
子线程：B就是A的子线程。

### Thread类

```python
# 签名
def __init__(self, group=None, target=None, name=None, args=(), kwargs=None, *, daemon=None)
```

| 参数名 | 含义                         |
| ------ | ---------------------------- |
| target | 线程调用的对象，就是目标函数 |
| name   | 为线程起个名字               |
| args   | 为目标函数传递实参，元组     |
| kwargs | 为目标函数关键字传参，字典   |

### 线程启动

```python
import threading

# 最简单的线程程序
def worker():
	print("I'm working")
	print('Fineshed')
    
t = threading.Thread(target=worker, name='worker') # 线程对象
t.start() # 启动
```

通过threading.Thread创建一个线程对象，target是目标函数，可以使用name为线程指定名称。
但是线程没有启动，需要调用start方法。

线程之所以执行函数，是因为线程中就是要执行代码的，而最简单的代码封装就是函数，所以还是函数调用。
函数执行完，线程也就退出了。
那么，如果不让线程退出，或者让线程一直工作怎么办呢？

```python
import threading
import time

def worker():
    while True: # for i in range(10):
        time.sleep(0.5)
        print("I'm working")
    print('Fineshed')
    
t = threading.Thread(target=worker, name='worker') # 线程对象
t.start() # 启动
```

### 线程退出

Python没有提供线程退出的方法，线程在下面情况时退出
1、线程函数内语句执行完毕
2、线程函数中抛出未处理的异常

```python
import threading
import time

def worker():
    for i in range(10):
        time.sleep(0.5)
        if i > 5:
            #break # 终止循环
            #return # 函数返回
            raise RuntimeError # 抛异常
    	print('I am working')
    print('finished')
    
t = threading.Thread(target=worker, name='worker')
t.start()
print('=' * 30)
```

Python的线程没有优先级、没有线程组的概念，也不能被销毁、停止、挂起，那也就没有恢复、中断了。

### 线程的传参

```python
import threading
import time

def add(x, y):
	print('{} + {} = {}'.format(x, y, x + y, threading.current_thread().ident))
    
t1 = threading.Thread(target=add, name='add', args=(4, 5))
t1.start()
time.sleep(2)

t2 = threading.Thread(target=add, name='add', args=(6,), kwargs={'y':7})
t2.start()
time.sleep(2)

t3 = threading.Thread(target=add, name='add', kwargs={'x':8, 'y':9})
t3.start()
```

线程传参和函数传参没什么区别，本质上就是函数传参。

### threading 的属性和方法

| 名称             | 含义                                                         |
| ---------------- | ------------------------------------------------------------ |
| current_thread() | 返回当前线程对象                                             |
| main_thread()    | 返回主线程对象                                               |
| active_count()   | 当前处于alive状态的线程个数                                  |
| enumerate()      | 返回所有活着的线程的列表，不包括已经终止的线程和未开始的线程 |
| get_ident()      | 返回当前线程的ID，非0整数                                    |

active_count、enumerate 方法返回的值还包括主线程。

```python
import threading
import time

def showtreadinfo():
    print('current thread = {}\nmain thread = {}\nactive count = {}'.format(
    threading.current_thread(), threading.main_thread(), threading.active_count()
    ))
    
def worker():
    showtreadinfo()
    for i in range(5):
        time.sleep(1)
        print('i am working')
    print('finished')
    
t = threading.Thread(target=worker, name='worker') # 线程对象
showtreadinfo()
time.sleep(1)
t.start() # 启动
print('===end===')
```

### Thread 实例的属性和方法

| 名称       | 含义                                                         |
| ---------- | ------------------------------------------------------------ |
| name       | 只是一个名字，只是个标识，名称可以重名。getName()、setName() 获取、设置这个名词 |
| ident      | 线程ID，它是非0整数。线程启动后才会有ID，否则为None。线程退出，此ID依旧可以访问。此ID可以重复使用 |
| is_alive() | 返回线程是否活着                                             |

注意：线程的name这是一个名称，可以重复；ID必须唯一，但可以在线程退出后再利用。

```python
import threading
import time

def worker():
    for i in range(5):
        time.sleep(1)
        print('i am working')
    print('finished')

t = threading.Thread(target=worker, name='worker') # 线程对象
print(t.name, t.ident)
time.sleep(1)
t.start() # 启动

print('===end===')

while True:
    time.sleep(1)
    print('{} {} {}'.format(t.name, t.ident,
    'alive' if t.is_alive() else 'dead'))
    if not t.is_alive():
        print('{} restart'.format(t.name))
        t.start() # 线程重启？？ 报错 线程只可以启动一次
```

| 名称    | 含义                                         |
| ------- | -------------------------------------------- |
| start() | 启动线程。每一个线程必须且只能执行该方法一次 |
| run()   | 运行线程函数                                 |

为了演示，派生一个Thread的子类

**start  方法**

```python
import threading
import time

def worker():
    for i in range(5):
        time.sleep(1)
        print('i am working')
    print('finished')

class MyThread(threading.Thread):
    def start(self):
        print('start~~~~')
        super().start()
        
    def run(self):
        print('run~~~~~~')
        super().run()

t = MyThread(target=worker, name='worker')
t.start()

# 运行结果
start~~~~
run~~~~~~
i am working
i am working
i am working
i am working
i am working
finished
```

**run 方法**

```python
import threading
import time

def worker():
    for i in range(5):
        time.sleep(1)
        print('i am working')
    print('finished')

class MyThread(threading.Thread):
    def start(self):
        print('start~~~~')
        super().start()

    def run(self):
        print('run~~~~~~')
        super().run()

t = MyThread(target=worker, name='worker')
# t.start()
t.run() # 也不可执行多次

# 运行结果
run~~~~~~
i am working
i am working
i am working
i am working
i am working
finished
```

start() 方法会调用 run() 方法，而 run() 方法可以运行函数。
这两个方法看似功能重复了，这么看来留一个方法就可以了。是这样吗？

**start和run的区别**

在线程函数中，增加打印线程的名字的语句，看看能看到什么信息。

```python
import threading
import time

def worker():
    print(threading.enumerate())
    for i in range(5):
        time.sleep(1)
        print('i am working')
    print('finished')

class MyThread(threading.Thread):
    def start(self):
        print('start~~~~')
        super().start()

    def run(self):
        print('run~~~~~~')
        super().run()

t = MyThread(target=worker, name='worker')
t.start()
# t.run() # 分别执行start或者run方法
```

使用start方法启动线程，启动了一个新的线程，名字叫做worker运行。但是使用run方法的，并没有启动新的线程，就是在主线程中调用了一个普通的函数而已。

因此，启动线程请使用start方法，且对于这个线程来说，start方法只能调用一次。（设置_started属性实现）

## 多线程

顾名思义，多个线程，一个进程中如果有多个线程运行，就是多线程，实现一种并发。

```python
import threading
import time

def worker():
    t = threading.current_thread()
    for i in range(5):
        time.sleep(1)
        print('i am working', t.name, t.ident)
    print('finished')
    
class MyThread(threading.Thread):
    def start(self):
        print('start~~~~')
        super().start()
        
    def run(self):
        print('run~~~~~~')
        super().run()
    
t1 = MyThread(target=worker, name='worker1')
t2 = MyThread(target=worker, name='worker2')
t1.start()
t2.start()
```

可以看到 worker1 和 worker2 交替执行，改成 run 方法试试看

```python
import threading
import time

def worker():
    t = threading.current_thread()
    for i in range(5):
        time.sleep(1)
        print('i am working', t.name, t.ident)
    print('finished')
    
class MyThread(threading.Thread):
    def start(self):
        print('start~~~~')
        super().start()
        
    def run(self):
        print('run~~~~~~')
        super().run()
    
t1 = MyThread(target=worker, name='worker1')
t2 = MyThread(target=worker, name='worker2')
# t1.start()
# t2.start()
t1.run()
t2.run()
```

没有开新的线程，这就是普通函数调用，所以执行完 t1.run() ，然后执行 t2.run() ，这里就不是多线程。
当使用 start 方法启动线程后，进程内有多个活动的线程并行的工作，就是多线程。

一个进程中至少有一个线程，并作为程序的入口，这个线程就是主线程。
一个进程至少有一个主线程。
其他线程称为工作线程。

## 线程安全

多线程执行一段代码，不会产生不确定的结果，那这段代码就是线程安全的。

多线程在运行过程中，由于共享同一进程中的数据，多线程并发使用同一个数据，那么数据就有可能被相互修改，从而导致某些时刻无法确定这个数据的值，最终随着多线程运行，运行结果不可预期，这就是线程不安全。

## deamon 线程

注：有人翻译成后台线程，也有人翻译成守护线程。

Python中，构造线程的时候，可以设置daemon属性，这个属性必须在start方法前设置好。

```python
# 源码Thread的__init__方法中
if daemon is not None:
	self._daemonic = daemon # 用户设定bool值
else:
	self._daemonic = current_thread().daemon
```

线程daemon属性，如果设定就是用户的设置，否则就取当前线程的daemon值。
主线程是non-daemon线程，即daemon = False。

```python
class _MainThread(Thread):
    def __init__(self):
    	Thread.__init__(self, name="MainThread", daemon=False)
```

```python
import time
import threading

def foo():
    time.sleep(5)
    for i in range(20):
    	print(i)
        
# 主线程是non-daemon线程
t = threading.Thread(target=foo, daemon=False)
t.start()

print('Main Thread Exits')
```

发现线程t依然执行，主线程已经执行完，但是一直等着线程 t。
修改为  t = threading.Thread(target=foo, daemon=True)  试一试，结果程序立即结束了，进程根本没有等daemon 线程t。

| 名称        | 含义                                                         |
| ----------- | ------------------------------------------------------------ |
| daemon 属性 | 表示线程是否是daemon线程，这个值必须在start()之前设置，否则引发<br/>RuntimeError异常 |
| isDaemon()  | 是否是daemon线程                                             |
| setDaemon() | 设置为daemon线程，必须在start方法之前设置                    |

看一个例子，，看看主线程何时结束 daemon 线程

```python
import time
import threading

def worker(name, timeout):
    time.sleep(timeout)
    print('{} working'.format(name))
    
# 主线程 是non-daemon线程
t1 = threading.Thread(target=worker, args=('t1', 5), daemon=True) # 调换5和10看看效果
t1.start()

t2 = threading.Thread(target=worker, args=('t2', 10), daemon=False)
t2.start()

print('Main Thread Exits')
```

上例说明，如果除主线程之外还有 non-daemon 线程的时候，主线程退出时，进程也不会杀掉所有 daemon 线程，直到所有 non-daemon 线程全部结束，如果还有 daemon 线程，主线程需要退出（主线程退出也可以理解为最后一个non-daemon线程也要退出了），进程会结束所有 daemon 线程，程序退出。

**总结**

* 线程具有一个daemon属性，可以手动设置为True或False，也可以不设置，则取默认值None
* 如果不设置daemon，就取当前线程的daemon来设置它
* 主线程是non-daemon线程，即daemon = False
* 从主线程创建的所有线程的不设置daemon属性，则默认都是daemon = False，也就是non-daemon线程
* Python程序在没有活着的non-daemon线程运行时，程序退出，也就是除主线程之外剩下的只能都是daemon线程，主线程才能退出，否则主线程就只能等待

## join 方法

先看一个简单的例子，看看效果

```python
import time
import threading

def worker(name, timeout):
    time.sleep(timeout)
    print('{} working'.format(name))
    
t1 = threading.Thread(target=worker, args=('t1', 3), daemon=True)
t1.start()
t1.join()# 设置join，取消join对比一下

print('Main Thread Exits')
```

使用了 join 方法后，当前线程阻塞了，daemon 线程执行完了，主线程才退出了。

```python
import time
import threading

def worker(name, timeout):
    time.sleep(timeout)
    print('{} working'.format(name))
    
t1 = threading.Thread(target=worker, args=('t1', 10), daemon=True)
t1.start()
t1.join(2)
print('~~~~~~~~~~~')
t1.join(2)
print('~~~~~~~~~~~')

print('Main Thread Exits')
```

`join(timeout=None)`

* join 方法是线程的标准方法之一
* 一个线程中调用另一个线程的 join 方法，调用者将被阻塞，直到被调用线程终止，或阻塞超时
* 一个线程可以被 join 多次
* timeout 参数指定调用者等待多久，没有设置超时，就一直等到被调用线程结束
* 调用谁的 join 方法，就是 join 谁，就要等谁

## daemon线程应用场景

主要应用场景有：

1. 后台任务。如发送心跳包、监控，这种场景最多
2. 主线程工作才有用的线程。如主线程中维护这公共的资源，主线程已经清理了，准备退出，而工作线程使用这些资源工作也没有意义了，一起退出最合适
3. 随时可以被终止的线程

如果主线程退出，想所有其它工作线程一起退出，就使用daemon=True来创建工作线程。
比如，开启一个线程定时判断WEB服务是否正常工作，主线程退出，工作线程也没有必须存在了，应该随着主线程退出一起退出。这种daemon线程一旦创建，就可以忘记它了，只用关心主线程什么时候退出就行了。

daemon线程，简化了程序员手动关闭线程的工作。

## threading.local 类

```python
import threading
import time

def worker():
    x = 0
    for i in range(100):
        time.sleep(0.0001)
        x += 1
    print(threading.current_thread(), x)
    
for i in range(10):
	threading.Thread(target=worker).start()
```

上例使用多线程，每个线程完成不同的计算任务。
x是局部变量，可以看出每一个线程的x是独立的，互不干扰的，为什么？

能否改造成使用全局变量完成？

```python
import threading
import time

class A:
    def __init__(self):
        self.x = 0

# 全局对象
global_data = A()

def worker():
    global_data.x = 0
    for i in range(100):
        time.sleep(0.0001)
        global_data.x += 1
    print(threading.current_thread(), global_data.x)

for i in range(10):
    threading.Thread(target=worker).start()
```

上例虽然使用了全局对象，但是线程之间互相干扰，导致了不期望的结果。**线程不安全**。

能不能既使用全局对象，还能保持每个线程使用不同的数据呢？

python 提供 threading.local 类，将这个类实例化得到一个全局对象，但是不同的线程使用这个对象存储的数据其他线程看不见。

```python
import threading
import time

# 全局对象
global_data = threading.local()

def worker():
    global_data.x = 0
    for i in range(100):
        time.sleep(0.0001)
        global_data.x += 1
    print(threading.current_thread(), global_data.x)

for i in range(10):
    threading.Thread(target=worker).start()
```

结果显示和使用局部变量的效果一样。

再看 threading.local 的例子

```python
import threading

X = 'abc'
global_data = threading.local() # 注意这个对象所处的线程
global_data.x = 100

print(global_data, type(global_data), global_data.x)
def worker():
    print(X)
    print(global_data)
    print(global_data.x)
    print('in worker')
    
worker() # 普通函数调用
print('-' * 30)
threading.Thread(target=worker).start() # 启动一个线程
```

从运行结果来看，另起一个线程打印 global_data.x 出错了。

`AttributeError: '_thread._local' object has no attribute 'x'`

但是，global_data 打印没有出错，说明看到 global_data，但是 global_data 中的 x 看不到，这个 x 不能跨线程。
threading.local类构建了一个大字典，存放所有线程相关的字典，定义如下：
`{ id(Thread) -> (ref(Thread), thread-local dict) }`

每一线程实例的 id 为 key，元组为 value。

value中2部分为，线程对象引用，每个线程自己的字典。

> 本质
>
> 运行时，threading.local 实例处在不同的线程中，就从大字典中找到当前线程相关键值对中的字典，覆盖threading.local 实例的 `__dict__` 。
>
> 这样就可以在不同的线程中，安全地使用线程独有的数据，做到了线程间数据隔离，如同本地变量一样安全。

