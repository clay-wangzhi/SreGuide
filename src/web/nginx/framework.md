---
date: 2020-03-20
category: web中间件
tag:
  - Nginx
---

# 2. nginx架构基础

## 1 Nginx请求处理流程

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310164648893.png)

## 2 Nginx进程结构

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310164732720.png)

## 3 Nginx进程管理：信号

### 3.1 Master进程

* 监控worker进程
  * CHLD
* 管理worker进程
* 接收信号
  * TERM，INT
  * QUIT
  * HUP
  * USR1
  * USR2
  * WINCH

### 3.2 Worker进程

* 接收信号
  * TERM，INT
  * QUIT
  * USR1
  * WINCH

### 3.3 nginx命令行

* reload：HUP
* reopen：USR1
* stop：TERM
* quit：QUIT

## 4 reload 流程

1）向master进程发送HUP信号（reload命令）

2）master进程校验配置语法是否正确

3）master进行打开新的监听端口

4）master进程用新配置启动新的worker子进程

5）master进程向老worker子进程发送QUIT信号

6）老worker进程关闭监听句柄，处理完当前连接后结束进程

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310170519124.png)

## 5 热升级流程

1）将旧Ningx文件换成新Nginx文件（注意备份）

2）向master进程发送USR2信号

3）master进程修改pid文件名，加后缀.oldbin（进程自动改的，不需要手动改）

4）master进程用新Nginx文件启动新master进程

5）向老master进程发送QUIT信号，关闭老master

6）回滚：向老master发送HUP，向新master发送QUIT

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310171424958.png)

## 6 worker进程：优雅的关闭

1）设置定时器`worker_shutdown_timeout`

2）关闭监听句柄

3）关闭空闲连接

4）在循环中等待全部连接关闭

5）退出进程

## 7 网络相关

### 7.1 网络传输

* 应用层
* 传输层
* 网络层
* 链路层
* 物理层

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310172023302.png)

### 7.2 TCP流与报文

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310172138764.png)

### 7.3 TCP协议与非阻塞接口

* 读事件
  * Accept建立连接
  * Read读消息
* 写事件
  * Write写信息

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310172800752.png)

## 8 Nginx事件循环

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310173131875.png)

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310173315213.png)

### 8.1 epoll

**前提**

高并发连接中，每次处理的活跃连接数量占比很小

**实现**

红黑树，链表

**使用**

创建，操作（添加/修改/删除），获取句柄，关闭

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310173757670.png)

## 9 模块分类

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310174353557.png)
