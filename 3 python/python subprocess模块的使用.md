subprocess模块允许你去创建一个新的进程让其执行另外的程序，并与它进行通信，获取标准的输入、标准输

出、标准错误以及返回码等。(使用这个模块之前先导入import subprocess)。

subprocess模块打算来替代几个过时的模块和函数，比如： os.system, os.spawn*, os.popen*, popen2.*命令。

让我们来看一下subprocess 有哪些不同的函数.

## subprocess.call(), subprocess.check_call(), subprocess.check_output()

执行由参数提供的命令.

我们可以用数组作为参数运行命令,也可以用字符串作为参数运行命令(通过设置参数shell=True)

注意,参数shell默认为False

我们用subprocess.call()来做一个查看文件的例子:

```python
subprocess.call(["ls", "-a"])
```

将上边的例子,把shell设置为True,就可以使用字符串了:

```python
subprocess.call("ls -a", shell=True)
```

### subprocess.call()

父进程等待子进程完成

返回退出信息(returncode，相当于Linux exit code)

### subprocess.check_call()

父进程等待子进程完成

返回0

检查退出信息，如果returncode不为0，则举出错误subprocess.CalledProcessError，该对象包含有returncode

属性，可用try…except…来检查。

### subprocess.check_output()

父进程等待子进程完成

返回子进程向标准输出的输出结果

检查退出信息，如果returncode不为0，则举出错误subprocess.CalledProcessError，该对象包含有returncode

属性和output属性，output属性为标准输出的输出结果，可用try…except…来检查。



这三个函数的使用方法相类似，下面来以subprocess.call()举例说明:

```python
import subprocess

def main():
    retcode = subprocess.call("df -h", shell=True)
    print("{0}".format(retcode)) #retcode = 0

if __name__ == "__main__":
    main()
```

## subprocess.Popen()

class Popen(args, bufsize=0, executable=None, stdin=None, stdout=None, stderr=None, preexec_fn=None, close_fds=False, shell=False, cwd=None, env=None, universal_newlines=False, startupinfo=None, creationflags=0)

实际上，上面的几个函数都是基于Popen()的封装(wrapper)。这些封装的目的在于让我们容易使用子进程。当我

们想要更个性化我们的需求的时候，就要转向Popen类，该类生成的对象用来代表子进程。

 

与上面的封装不同，Popen对象创建后，主程序不会自动等待子进程完成。我们必须调用对象的wait()方法，父进

程才会等待 (也就是阻塞block)，举例：

代码如下:

```
>>> import subprocess
>>> child = subprocess.Popen(['ping','-c','4','www.baidu.com'])
>>> print('parent process')
```

```
import subprocess
child = subprocess.Popen(['ping','-c','4','www.baidu.com'])
print('parent process')
```




从运行结果中看到，父进程在开启子进程之后并没有等待child的完成，而是直接运行print。

对比等待的情况:

代码如下:

```
>>> import subprocess
>>> child = subprocess.Popen('ping -c 4 www.baidu.com',shell=True)
>>> child.wait()
>>> print('parent process')
```

```
import subprocess
child = subprocess.Popen('ping -c 4 www.baidu.com',shell=True)
child.wait()
print('parent process')
```



从运行结果中看到，父进程在开启子进程之后并等待child的完成后，再运行print。

此外，你还可以在父进程中对子进程进行其它操作，比如我们上面例子中的child对象:代码如下:

* child.poll() # 检查子进程状态
* child.kill() # 终止子进程
* child.send_signal() # 向子进程发送信号
* child.terminate() # 终止子进程


子进程的PID存储在child.pid

## 子进程的文本流控制

子进程的标准输入、标准输出和标准错误如下属性分别表示:

代码如下:

* child.stdin
* child.stdout
* child.stderr

可以在Popen()建立子进程的时候改变标准输入、标准输出和标准错误，并可以利用subprocess.PIPE将多个子进

程的输入和输出连接在一起，构成管道(pipe)，如下2个例子：

代码如下:

```
>>> import subprocess
>>> child1 = subprocess.Popen(["ls","-l"], stdout=subprocess.PIPE)
>>> print child1.stdout.read(),
>>> #或者child1.communicate()
>>> import subprocess
>>> child1 = subprocess.Popen(["cat","/etc/passwd"], stdout=subprocess.PIPE)
>>> child2 = subprocess.Popen(["grep","0:0"],stdin=child1.stdout, stdout=subprocess.PIPE)
>>> out = child2.communicate()
>>> print(out)
```

subprocess.PIPE实际上为文本流提供一个缓存区。

child1的stdout将文本输出到缓存区，随后child2的stdin从该PIPE中将文本读取走。

child2的输出文本也被存放在PIPE中，直到communicate()方法从PIPE中读取出PIPE中的文本。

> 注意：communicate()是Popen对象的一个方法，该方法会阻塞父进程，直到子进程完成


wait()方法可能会造成死锁, 那死锁问题如何避免呢？

官方文档里推荐使用 Popen.communicate()。

这个方法会把输出放在内存，而不是管道里，所以这时候上限就和内存大小有关了，一般不会有问题。

而且如果要获得程序返回值，可以在调用 Popen.communicate() 之后取 Popen.returncode 的值。

> 结论：如果使用 subprocess.Popen，就不使用 Popen.wait()，而使用 Popen.communicate() 来等待外部程序执行结束



> 转载链接：https://blog.csdn.net/qq_34765864/article/details/91517246