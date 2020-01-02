## Nginx的三个主要应用场景

1. 静态资源服务
   * 通过本地文件系统提供服务
2. 反向代理服务
   * Nginx的强大性能
   * 缓存
   * 负载均衡
3. API服务
   * OpenResty

![image-20200102212417067](images/image-20200102212417067.png)

## Nginx的优点

* 高并发，高性能
* 可扩展性好
* 高可靠性
* 热部署
* BSD许可证

## Nginx的组成

1. Nginx二进制可执行文件
   * 由各模块源码编译出的一个文件
2. `nginx.conf`配置文件
   * 控制`nginx`的行为
3. `access.log`访问日志
   * 记录每一条http请求信息
4. `error.log`错误日志
   * 定位问题

## 编译安装Nginx

### 下载Nginx

### 介绍各目录

### Configure

### 中间件介绍

### 编译

### 安装

## Nginx配置语法

1. 配置文件由指令与指令块构成
2. 每条指令以`;`分号结尾，指令与参数见以空格符号分隔
3. 指令块以`{ }`大括号将多条指令组织在一起
4. `include`语句允许组合多个配置文件以提升可维护性
5. 使用`#`符号添加注释，提高可读性
6. 使用`$`符号，使用变量
7. 部分指令的参数支持正则表达式

### Example

```nginx
http {
    include mime.types;
    upstream thwp {
        server 127.0.0.1:8080;
    }
    
    server {
        listen 443 http2;
        # Nginx配置语法
        limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
        location ~* \.(gif|jpg|jpeg)$ {
            proxy_cache my_cache;
            expires 3m;proxy_cache_key $host$uri$is_args$args;
            proxy_cache_valid 200 304 302 1d;
            proxy_pass http://thwp;
        }
    }
}
```

### 配置参数

#### 时间单位

* ms：milliseconds
* s：seconds
* m：minutes
* h：hours
* d：days
* w：weeks
* M：months，30 days
* y：years，365 days

#### 空间单位

* b/B：bytes
* k/K：kilobytes
* m/M：megabytes
* g/G：gifabytes

## Nginx配置文件结构

nginx配置文件如下：

```nginx
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;
include /usr/share/nginx/modules/\*.conf;
events {
    worker_connections 1024;
}
http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  /var/log/nginx/access.log  main;
    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;
    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;
    include /etc/nginx/conf.d/\*.conf;
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;
        include /etc/nginx/default.d/\*.conf;
        location / {
        }
        error_page 404 /404.html;
            location = /40x.html {
        }
        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
}
```

### 基本结构

1. 全局快
2. `events`块
3. `http`块

在http块中，又包含http全局块、多个server块。

每个server块中，可以包含server全局块和多个location块。

在同一配置块中嵌套的配置块，各个之间不存在次序关系。

配置文件支持大量可配置的指令，绝大多数指令不是特定属于某一个块的。同一个指令放在不同层级的块中，其作用域也不同，一般情况下，高一级块中的指令可以作用域自身所在的块和此块包含的所有低层级块。如果某个指令在两个不同层级的块中同时出现，则采用“就近原则”，即以较低层级块中的配置为准。

### 全局块

通常包括配置运行Nginx服务器的用户（组）、允许生成的worker process数、Nginx进程PID存放路径、日志的存放路径和类型以及配置文件引入等。

### events块

events块涉及的指令主要影响Nginx服务器与用户的网络连接。常用到的设置包括是否开启对多worker process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个worker process可以同时支持的最大连接数等。

这一部分的指令对Nginx服务器的性能影响较大，在实际配置中应该根据实际情况灵活调整。

### http块

http块是Nginx服务器配置中重要部分，代理、缓存和日志定义等绝大多数的功能和第三方模块可以放在这个模块中。

* http
* upstream
* server
* location

### server块

server块和“虚拟主机”的概念密切联系。为了加深相关配置的理解，在介绍server块之前，简单了解一下虚拟主机的相关内容。

虚拟主机，又称虚拟服务器、主机空间或网页空间，它是一种技术。该技术是为了节省互联网服务器硬件成本而出现的。这里的“主机”或“空间”是由实体的服务器延伸而来，硬件系统可以基于服务器群，或者单个服务器等。对外表现为多个服务器，从而充分利用服务器硬件资源。从用户角度看，一台虚拟主机和一台独立的硬件主机是完全一样的。

 在使用Nginx服务器提供Web服务是，利用虚拟主机的技术就可以避免为每一个要运行的网站提供单独的Nginx服务器，也无需为每个网站对应运行一组Nginx进程。虚拟主机技术使得Nginx服务器可以在同一台服务器上只运行一组Nginx进程，就可以运行多个网站。

和http块相同，server块也可以包含自己的全局块，同时可以包含多个location块。在server全局块中，最常见的两个配置项是本虚拟主机的监听配置和本虚拟主机的名称或IP配置。

### location块

每个server块中可以包含多个location块。从严格意义上说，location其实是server块的一个指令，只是由于其在整个Nginx配置文档中起着重要的作用，而且Nginx服务器在许多功能上的灵活性往往在location指令的配置中体现出来。

## Nginx命令行

1. 格式：`nginx -s reload`
2. 帮助：`-?` `-h`
3. 使用指定的配置温江：`-c`
4. 指定配置指令：`-g`
5. 指定运行目录：`-p`
6. 发送信号：`-s`
   * 立刻停止服务：`stop`
   * 优雅的停止服务：`quit`
   * 重载配置文件：`reload`
   * 重新开始记录日志文件：`reopen`
7. 测试配置文件是否有语法错误：`-t` `-T`
8. 打印`nginx`的版本信息、编译信息：`-v` `-V`

### 命令行演示

#### 重载配置文件

#### 热部署

#### 切割日志文件

## 静态资源服务演示

### http

### server

### location

### alias

### gzip

### threal pool

## Access日志演示

### Access format

### Go access

### Access log

## Todo

1.（必做）

编译安装Nginx写详细步骤

命令行演示写详细步骤

静态资源服务演示写详细步骤

Access日志演示写详细步骤

2.（可先不做）

TLS应用实践

OpenResty安装实践