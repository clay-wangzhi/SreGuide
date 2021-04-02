---
time: 2020-03-20
category: web中间件
tags:
  - Nginx
---

# 3.1 nginx全局块和events块配置

## 1 example

```nginx
# 运行Nginx进程的用户
user nginx;
worker_processes  8;
worker_cpu_affinity auto;

# 定义存储某类型的全局错误的日志位置
# nginx日志分为很多级别 [debug | info | notice | warn | error | crit | alert | emerg]
error_log  /var/log/nginx/error.log  error;
# 指定进程ID（pid）存放的路径 
pid        /var/run/nginx.pid;
# 一个nginx进程打开的最多文件描述符数目，理论值应该是系统的最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n的值保持一致。
worker_rlimit_nofile 65535;

events {
    # 使用epoll的I/O模型，用这个模型来高效处理异步事件
    use epoll;
    # 每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为worker_processes*worker_connections。
    worker_connections  20480;
}
```

## 2 配置CPU参数

Nginx默认没有开启利用多核cpu，我们可以通过增加worker_cpu_affinity配置参数来充分利用多核cpu的性能。cpu是任务处理，计算最关键的资源，cpu核越多，性能就越好。

### 2.1 nginx worker_processes

worker_processes最多开启8个，8个以上性能就不会再提升了，而且稳定性会变的更低，因此8个进程够用了；

### 2.2 nginx worker_cpu_affinity

cpu有多少个核？就有几位数，1代表内核开启，0代表内核关闭；

例如：我有一个服务器是最低配，8核CPU，nginx配置信息则如下：

```nginx
worker_processes 8;
worker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000 10000000;
```

上面的配置表示：8核CPU，开启8个进程。

> 我其实把`nginx worker_cpu_affinity`参数通常设置为`auto`

###  2.3 实例

**2核CPU，开启2个进程**

```nginx
worker_processes 2;
worker_cpu_affinity 01 10;
```

**2核CPU，开启4进程**

```nginx
worker_processes 4;
worker_cpu_affinity 01 10 01 10;
```

**2核CPU，开启8进程**

```nginx
worker_processes 8;
worker_cpu_affinity 01 10 01 10 01 10 01 10;
```

**8核CPU，开启2进程**

```nginx
worker_processes 2;
worker_cpu_affinity 10101010 01010101;
```

> 10101010表示开启了第2,4,6,8内核，01010101表示开始了1,3,5,7内核；
>
> 如果多个CPU内核的利用率都相差不多，证明nginx己经成功的利用了多核CPU。
>
> 测试结束后，CPU内核的负载应该都同时降低。
