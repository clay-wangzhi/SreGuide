---
category: Python
---
# 10.1 多进程

## GIL

CPython 在解释器进程级别有一把锁，叫做GIL，即全局解释器锁。

GIL 保证CPython进程中，只有一个线程执行字节码。甚至是在多核CPU的情况下，也只允许同时只能有一个CPU核心上运行该进程的一个线程。

CPython中

* IO密集型，某个线程阻塞，GIL会释放，就会调度其他就绪线程
* CPU密集型，当前线程可能会连续的获得GIL，导致其它线程几乎无法使用CPU
* 在CPython中由于有GIL存在，IO密集型，使用多线程较为合算；CPU密集型，使用多进程，要绕开GIL

新版CPython正在努力优化GIL的问题，但不是移除。
如果在意多线程的效率问题，请绕行，选择其它语言erlang、Go等。

> Python中绝大多数内置数据结构的读、写操作都是原子操作。
> 由于GIL的存在，Python的内置数据类型在多线程编程的时候就变成了安全的了，但是实际上它们本身 不是线程安全类型。

保留GIL的原因：
GvR坚持的简单哲学，对于初学者门槛低，不需要高深的系统知识也能安全、简单的使用Python。
而且移除GIL，会降低CPython单线程的执行效率。
测试下面2个程序，请问下面的程序是计算密集型还是IO密集型？

```python
import logging
import datetime

logging.basicConfig(level=logging.INFO, format="%(thread)s %(message)s")
start = datetime.datetime.now()
# 计算
def calc():
    sum = 0
    for _ in range(10000000):
        sum += 1

calc()
calc()
calc()
calc()
delta = (datetime.datetime.now() - start).total_seconds()
logging.info(delta)
```

```python
import threading
import logging
import datetime

logging.basicConfig(level=logging.INFO, format="%(thread)s %(message)s")
start = datetime.datetime.now()
# 计算
def calc():
    sum = 0
    for _ in range(10000000):
        sum += 1

t1 = threading.Thread(target=calc)
t2 = threading.Thread(target=calc)
t3 = threading.Thread(target=calc)
t4 = threading.Thread(target=calc)
t1.start()
t2.start()
t3.start()
t4.start()
t1.join()
t2.join()
t3.join()
t4.join()
delta = (datetime.datetime.now() - start).total_seconds()
logging.info(delta)
```

注意，不要在代码中出现print等访问IO的语句。访问IO，线程阻塞，会释放GIL锁，其他线程被调度。

程序1是单线程程序，所有calc()依次执行，根本就不是并发。在主线程内，函数串行执行。
程序2是多线程程序，calc()执行在不同的线程中，但是由于GIL的存在，线程的执行变成了假并发。但是这些线程可以被调度到不同的CPU核心上执行，只不过GIL让同一时间该进程只有一个线程被执行。

从两段程序测试的结果来看，CPython中多线程根本没有任何优势，和一个线程执行时间相当。因为GIL的存在，尤其是像上面的计算密集型程序，和单线程串行效果相当。这样，实际上就没有用上CPU多核心的优势。

## 多进程

由于Python的GIL全局解释器锁存在，多线程未必是CPU密集型程序的好的选择。
多进程可以完全独立的进程环境中运行程序，可以较充分地利用多处理器。
但是进程本身的隔离带来的数据不共享也是一个问题。而且线程比进程轻量级。

### multiprocessing

**Process类**

Process类遵循了Thread类的API，减少了学习难度。

先看一个例子，前面介绍的单线程、多线程比较的例子的多进程版本

```python
import multiprocessing
import datetime


# 计算
def calc(i):
    sum = 0
    for _ in range(10000000):
        sum += 1
    return i, sum

if __name__ == '__main__':
    start = datetime.datetime.now()

    ps = []
    for i in range(4):
        p = multiprocessing.Process(target=calc, args=(i, ), name='calc-{}'.format(i))
        ps.append(p)
        p.start()

    for p in ps:
        p.join()
        print(p.name, p.exitcode)

    delta = (datetime.datetime.now() - start).total_seconds()
    print(delta)
    for p in ps:
        print(p.name, p.exitcode)
    print('===end===')
```

对于上面这个程序，在同一主上运行时长的对比

* 使用单线程、多线程跑了4分钟多
* 多进程用了1分半

看到了多个进程都在使用CPU，这是真并行，而且进程库几乎没有什么学习难度

注意：多进程代码一定要放在 `__name__ == '__main__'` 下面执行。

| 名称        | 说明             |
| ----------- | ---------------- |
| pid         | 进程 id          |
| exitcode    | 进程的退出状态码 |
| terminate() | 终止指定的进程   |

### 进程间同步

Python 在进程间同步提供了和线程同步一样的类，使用的方法一样，使用的效果也类似。
不过，进程间代价要高于线程间，而且系统底层实现是不同的，只不过 Python 屏蔽了这些不同之处，让用户简单使用多进程。
multiprocessing 还提供共享内存、服务器进程来共享数据，还提供了用于进程间通讯的 Queue队列、Pipe 管道。

通信方式不同

1. 多进程就是启动多个解释器进程，进程间通信必须序列化、反序列化
2. 数据的线程安全性问题
如果每个进程中没有实现多线程，GIL可以说没什么用了

### 多进程、多线程的选择

1、CPU密集型
CPython中使用到了GIL，多线程的时候锁相互竞争，且多核优势不能发挥，选用Python多进程效率更
高。

2、IO密集型
在Python中适合是用多线程，可以减少多进程间IO的序列化开销。且在IO等待的时候，切换到其他线程继续执行，效率不错。

**应用**

请求/应答模型：WEB应用中常见的处理模型

master启动多个worker工作进程，一般和CPU数目相同。发挥多核优势。
worker工作进程中，往往需要操作网络IO和磁盘IO，启动多线程，提高并发处理能力。worker处理用户的请求，往往需要等待数据，处理完请求还要通过网络IO返回响应。
这就是nginx工作模式。

## concurrent.futures包

3.2版本引入的模块。

异步并行任务编程模块，提供一个高级的异步可执行的便利接口。

提供了2个池执行器：

* ThreadPoolExecutor 异步调用的线程池的 Executor
* ProcessPoolExecutor 异步调用的进程池的Executor

### ThreadPoolExecutor对象

首先需要定义一个池的执行器对象，Executor类的子类实例。

| 方法                              | 含义                                                         |
| --------------------------------- | ------------------------------------------------------------ |
| ThreadPoolExecutor(max_workers=1) | 池中至多创建max_workers个线程的池来同时异步执行，返回Executor实例<br/>支持上下文，进入时返回自己，退出时调用shutdown(wait=True) |
| submit(fn, *args, **kwargs)       | 提交执行的函数及其参数，如有空闲开启daemon线程，返回Future类的实例 |
| shutdown(wait=True)               | 清理池，wait 表示是否等待到任务线程完成                      |

Future 类

| 方法                    | 含义                                                         |
| ----------------------- | ------------------------------------------------------------ |
| done()                  | 如果调用被成功的取消或者执行完成，返回True                   |
| cancelled()             | 如果调用被成功的取消，返回True                               |
| running()               | 如果正在运行且不能被取消，返回True                           |
| cancel()                | 尝试取消调用。如果已经执行且不能取消返回False，否则返回True  |
| result(timeout=None)    | 取返回的结果，timeout为None，一直等待返回；timeout设置到期，抛出<br/>concurrent.futures.TimeoutError 异常 |
| exception(timeout=None) | 取返回的异常，timeout为None，一直等待返回；timeout设置到期，抛出<br/>concurrent.futures.TimeoutError 异常 |

```python
from concurrent.futures import ThreadPoolExecutor, wait
import datetime
import logging

FORMAT = "%(asctime)s [%(processName)s %(threadName)s] %(message)s"
logging.basicConfig(format=FORMAT, level=logging.INFO)

def calc(base):
    sum = base
    for i in range(1000000):
        sum += 1
    logging.info(sum)
    return sum

start = datetime.datetime.now()
executor = ThreadPoolExecutor(3)
with executor: # 默认shutdown阻塞
    fs = []
    for i in range(3):
        future = executor.submit(calc, i*100)
        fs.append(future)

    #wait(fs) # 阻塞
    print('-' * 30)

for f in fs:
    print(f, f.done(), f.result()) # done不阻塞，result阻塞
print('=' * 30)

delta = (datetime.datetime.now() - start).total_seconds()

print(delta)

```

### ProcessPoolExecutor对象

方法一样。就是使用多进程完成。

```python
from concurrent.futures import ProcessPoolExecutor, wait
import datetime
import logging

FORMAT = "%(asctime)s [%(processName)s %(threadName)s] %(message)s"
logging.basicConfig(format=FORMAT, level=logging.INFO)

def calc(base):
    sum = base
    for i in range(10000000):
        sum += 1
    logging.info(sum)
    return sum

if __name__ == '__main__':
    start = datetime.datetime.now()
    executor = ProcessPoolExecutor(3)
    with executor: # 默认shutdown阻塞
        fs = []
        for i in range(3):
            future = executor.submit(calc, i*100)
            fs.append(future)

        #wait(fs) # 阻塞
        print('-' * 30)

    for f in fs:
        print(f, f.done(), f.result()) # done不阻塞，result阻塞
    print('=' * 30)

    delta = (datetime.datetime.now() - start).total_seconds()
    print(delta)
```

**总结**

该库统一了线程池、进程池调用，简化了编程。
是Python简单的思想哲学的体现。

唯一的缺点：无法设置线程名称。但这都不值一提。