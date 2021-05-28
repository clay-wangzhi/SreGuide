---
time: 2020-03-20
category: web中间件
tags:
  - Nginx
---

> nginx的大部分笔记 整理自 陶辉的 Nginx 核心知识 100 讲

# 1. 初识Nginx

## 1 Nginx的三个主要应用场景

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200102212417067.png)

三个主要应用场景为：

* 静态资源服务（通过本地文件系统提供服务）
* 反向代理服务
* API服务（OpenRestydeng ）

### 1.1 反向代理服务

#### 1.1.1 负载均衡

负载均衡，一般包含两方面的含义。

* 一方面是，将单一的重负载分担到多个网络节点上做并行处理，每个节点处理结束后将结构汇总返回给用户，这样可以大幅提高网络系统的处理能力；

* 第二个方面的含义是，将大量的前段并发访问或数据流量分担到多个后端网络节点上分别处理，这样可以有效减少前端用户等待响应的时间。

Web服务器、FTP服务器、企业关键应用服务器等关键应用服务器等网络应用方面谈到的负载均衡问题，基本隶属于后一方面的含义。

因此，Nginx服务器的负载均衡主要是对大量前端访问和流量进行分流，以保证前端用户访问效率。可以说，在绝大多数的Nginx应用中，都会或多或少涉及它的负载均衡服务。

##### 复制均衡策略

即内置策略和扩展策略。

1. 内置策略主要包括轮询、加权轮询和IP hash三种；

2. 扩展策略主要通过第三方模块实现，种类比较丰富，常见的有url hash、fair等。

> 在默认情况下，内置策略会被编译进Nginx内核，使用时只需要在Nginx服务器配置中设置相关参数即可；
>
> 扩展策略不会编译进Nginx内核，需要手动将第三方模块编译到Nginx内核。

**轮询**

轮询策略比较简单，就是将前端请求按顺序（时间顺序或者排列次序）逐一分配到不同的后端节点上，对于出现问题的后端节点自动排除。

**加权轮询**

加权轮询策略，顾名思义，就是在基本的轮询策略上考虑各后端节点接受请求的权重，指定各后端节点被轮询到的几率。

加权轮询策略主要用于后端节点不均的情况。根据后端节点性能的实际情况，我们可以在Nginx服务器的配置文件中调整权值，使得整个网络对前端请求达到最佳的响应能力。

**IP hash**

`IP hash`策略，是将前端的访问`IP`进行`hash`操作，然后根据`hash`结果将请求分配给不同的后端节点。

事实上，这种策略可以看作是一种特殊的轮询策略。

通过Nginx的实现，每个前端访问IP会固定访问一个后端节点。这样做的好处是避免考虑前端用户的session在后端多个节点上共享的问题。

**url hash**

扩展策略中的`url hash`在形式上和`IP hash`相近，不同之处在于，`IP hash`策略是对前端访问IP进行了hash操作，而`url hash`策略是对前端请求的`url`进行了`hash`操作。`url hash`策略的优点在于，如果后端有缓存服务器，它能够高缓存效率，同时也解决了`session`的问题；但其缺点是，如果后端节点出现异常，它不能自动排除该节点。后端节点出现异常会导致Nginx服务器返回503错误。

**fair**

扩展的第三方模块`fair`则是从另一个角度来实现Nginx服务器负载均衡策略的。该模块将前端请求转发到一个最近负载最小的后台节点。Nginx通过后端节点对请求的响应时间来判断负载情况。响应时间短的节点负载相对就轻。得出判断结果后，Nginx就将前端请求转发到选中的负载最轻的节点。

#### 1.1.2 Web缓存

Squid在Web服务器领域中是一款相当流行的开源代理服务器和Web缓存服务器。作为网页服务器的前置缓存服务器，在很多优秀的站点中，它被用以缓存前端请求，从而提高Web服务器的性能；而且，它还可以缓存万维网、域名系统或者其他网络搜索等，为一个集体提供网路资源共享服务。

Nginx服务器从0.7.48版本开始，也支持了和Squid类似的缓存功能。

Nginx服务器的Web缓存服务主要由Proxy_Cache相关指令集和FastCGI_Cache相关指令集构成。

其中，Proxy_Cache主要用于在Nginx服务器提供反向代理服务时，对后端源服务器的返回内容进行URL缓存；

FastCGI_Cache主要用于对FastCGI的动态程序进行缓存。

另外还有一款常用的第三方模块ngx_cache_purge也是Nginx服务器Web缓存功能中经常用到的。它主要用于清除Nginx服务器上指定的URL缓存。

到Nginx 0.8.32版本，Proxy_Cache和FastCGI_Cache两部分的功能已经比较完善，再配合第三方的ngx_cache_purge模块，Nginx服务器已经具备了Squid所拥有的Web缓存加速功能和清除指定URL缓存的功能；

同时，Nginx服务器对多核CPU的调度比Squid更胜一筹，性能高于Squid，而在反向代理、负载均衡等其他方面，Nginx也不逊于Squid。这使得Nginx服务器可以同时作为负载均衡服务器和Web缓存服务器来使用，基本可以取代Squid。

## 2 Nginx的优点

**nginx的优点**

* 轻量级，同样起web服务比apache占用更少内存及资源；

* Nginx 异步非阻塞的方式处理高并发请求，能保持低资源、低消耗、高性能；

* 高度模块化设计，编写模块相对简单，生态圈强大。

* 核心优点：高并发、高性能、高可扩展、高可靠性、热部署、BSD许可证。

**Nginx为什么性能高、占用内存少？**

* Nginx采用多进程模式，对每个worker进程来说，独立的进程不需要加锁，互不影响；
* 一个进程退出后，其他进程继续工作，服务不会中断，master进程则很快启动新的worker进程；
* worker进程异常退出肯定是程序有bug导致，但也只会影响当前worker上的请求，不会影响到其他进程的请求，降低风险；
* Nginx采用异步非阻塞的方式去处理请求，更加高效。

## 3 Nginx的组成

1. Nginx二进制可执行文件
   * 由各模块源码编译出的一个文件
2. `nginx.conf`配置文件
   * 控制`nginx`的行为
3. `access.log`访问日志
   * 记录每一条http请求信息
4. `error.log`错误日志
   * 定位问题

## 4 编译安装Nginx

### 4.1 下载Nginx

> nginx下载地址：http://nginx.org/download/
>
> 在官网找最新稳定版使用：http://nginx.org/en/download.html

```
cd /opt
wget http://nginx.org/download/nginx-1.16.1.tar.gz
tar -xvf nginx-1.16.1.tar.gz
cd nginx-1.16.1/
```

### 4.2 介绍各目录

```shell
# ls
auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  man  README  src
```

- auto：包含了很多会在执行configure进行编译配置时调用的检测代码。

- CHANGES：Nginx的版本更新细节记录。英文版。

- CHANGES.ru：Nginx的版本更新细节记录。俄文版。

- conf：Nginx提供的一些默认配置文件。

- configure：根据系统环境设定Nginx编译选项的执行脚本。

- contrib：网友贡献的一些有用脚本（对我来说，里面的vim设置很有用，README中有使用方法）。

  - ```
    把contrib/vim下的文件移入~/.vim目录下，让vim识别nginx的配置文件节点；
    cp -r contrib/vim/* ~/.vim
    ```

- html：提供了两个默认html页面，比如index.html的Welcome to nginx!。

- LICENSE：声明的Nginx源码许可协议。

- man：Nginx的Man手册，本文文件，可直接用vi或记事本打开。

- README：读我文件，内容很简单，通告一下官网地址。

- src：Nginx源码，分门别类，比如实现事件的event等，很清晰。

### 4.3 Configure

先安装相关依赖

> gzip模块需要zlib库
>
> rewrite模块需要pcre库
>
> ssl功能需要openssl库

```
yum -y install gcc gcc-c++ make zlib-devel pcre-devel openssl-devel
```

然后运行`configure`文件

```
# ./configure --help
```

* --prefix ：指定安装目录
* --with：新增模块
* --without：删除默认模块

运行期中与路径相关的各种参数

```
--prefix=PATH                        #指向安装目录
--sbin-path=PATH                     #指向（执行）程序文件（nginx）
--conf-path=PATH                     #指向配置文件（nginx.conf）
--error-log-path=PATH                #指向错误日志目录
--http-log-path=PATH                 #指定访问日志目录
--pid-path=PATH                      #指向pid文件（nginx.pid）
--lock-path=PATH                     #指向lock文件（nginx.lock）（安装文件锁定，防止安装文件被别人利用，或自己误操作。）
--builddir=PATH                      #指向编译目录
--http-client-body-temp-path=PATH    #设定http客户端请求临时文件路径
--http-proxy-temp-path=PATH          #设定http代理临时文件路径
--http-fastcgi-temp-path=PATH        #设定http fastcgi临时文件路径
--http-uwsgi-temp-path=PATH          #设定http uwsgi临时文件路径
--http-scgi-temp-path=PATH           #设定http scgi临时文件路径

--user=USER                          #指定程序运行时的非特权用户
--group=USER                         #指定程序运行时的非特权用户组

--with-rtsig_module                  #启用rtsig模块支持（实时信号）
--with-file-aio                      #启用file aio支持（一种APL文件传输格式）
--with-ipv6                          #启用ipv6支持
--with-select_module                 #启用select模块支持（一种轮询模式,不推荐在高载环境下使用）禁用：--without-select_module
--with-poll_module                   #启用poll模块支持（功能与select相同，与select特性相同，为一种轮询模式,不推荐在高载环境下使用）
--with-http_ssl_module               #启用支持https请求，需已安装openssl
--with-http_realip_module            #启用ngx_http_realip_module支持（这个模块允许从请求标头更改客户端的IP地址值，默认为关）
--with-http_addition_module          #启用ngx_http_addition_module支持（作为一个输出过滤器，支持不完全缓冲，分部分响应请求）
--with-http_xslt_module              #启用ngx_http_xslt_module支持（过滤转换XML请求）
--with-http_image_filter_module      #启用支持传输JPEG/GIF/PNG 图片过滤，默认为不启用，gd库要用到
--with-http_sub_module               #启用ngx_http_sub_module支持（允许用一些其他文本替换nginx响应中的一些文本）
--with-http_dav_module               #启用ngx_http_dav_module支持（增加PUT,DELETE,MKCOL：创建集合,COPY和MOVE方法）
--with-http_flv_module               #启用ngx_http_flv_module支持（提供寻求内存使用基于时间的偏移量文件）
--with-http_gzip_static_module       #启用ngx_http_gzip_static_module支持（在线实时压缩输出数据流）
--with-http_random_index_module      #启用ngx_http_random_index_module支持（从目录中随机挑选一个目录索引）
--with-http_secure_link_module       #启用ngx_http_secure_link_module支持（计算和检查要求所需的安全链接网址）
--with-http_degradation_module       #启用ngx_http_degradation_module支持（允许在内存不足的情况下返回204或444码）
--with-http_stub_status_module       #启用ngx_http_stub_status_module支持（获取nginx自上次启动以来的工作状态）
--with-http_perl_module              #启用ngx_http_perl_module支持（该模块使nginx可以直接使用perl或通过ssi调用perl）

--with-mail                          #启用POP3/IMAP4/SMTP代理模块支持
--with-mail_ssl_module               #启用ngx_mail_ssl_module支持
--add-module=                        #启用外部模块支持
--with-cpu-opt=                      #指定编译的CPU，可用的值为: pentium,opteron, amd64, sparc32, sparc64, ppc64等
--with-pcre                          #启用pcre库（默认会自动去找rpm包安装的pcre库文件以及模块）
--with-pcre=                         #指向pcre库文件目录（如果是源码安装就需要指定，rpm包安装就不需要指定了）
--with-pcre-opt=                     #在编译时为pcre库设置附加参数
--with-perl_modules_path=            #设定perl模块路径
--with-perl=                         #设定perl库文件路径
--with-debug                         #启用debug日志
```

安装额外的echo模块

```
cd /opt
git clone https://github.com/openresty/echo-nginx-module
```

```
./configure \
--prefix=/etc/nginx \
--sbin-path=/usr/sbin/nginx \
--conf-path=/etc/nginx/nginx.conf \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--pid-path=/var/run/nginx.pid \
--lock-path=/var/run/nginx.lock \
--http-client-body-temp-path=/var/cache/nginx/client_temp \
--http-proxy-temp-path=/var/cache/nginx/proxy_temp \
--http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \
--http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \
--http-scgi-temp-path=/var/cache/nginx/scgi_temp \
--user=nginx \
--group=nginx \
--with-compat \
--with-file-aio \
--with-threads \
--with-http_addition_module \
--with-http_auth_request_module \
--with-http_dav_module \
--with-http_flv_module \
--with-http_gunzip_module \
--with-http_gzip_static_module \
--with-http_mp4_module \
--with-http_random_index_module \
--with-http_realip_module \
--with-http_secure_link_module \
--with-http_slice_module \
--with-http_ssl_module \
--with-http_stub_status_module \
--with-http_sub_module \
--with-http_v2_module \
--with-pcre \
--with-mail \
--with-mail_ssl_module \
--with-stream \
--with-stream_realip_module \
--with-stream_ssl_module \
--with-stream_ssl_preread_module \
--with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic -fPIC' \
--with-ld-opt='-Wl,-z,relro -Wl,-z,now -pie' \
--add-module=/opt/echo-nginx-module

```

执行完后，会生成`objs`目录

目录下的关键文件`ngx_modules.c`，它决定了我们编译nginx时，哪些模块会被编译进nginx

### 4.4 中间件介绍

中间件放在`objs/src`目下

### 4.5 编译

```
make -j 4
```

* -j 参数，指定编译时的CPU数量，可加快编译速度

执行完后，在`objs`目录下生成二进制可执行文件

> 注意：如何这时，我们是升级nginx，现在就不需要`make install`了

### 4.6 安装

```
make install
```

执行完成后，会在`--prefix`目录下生成四个目录，我这里是`/home/clay`目录下

* conf： 配置文件目录
* html：默认的静态页面存放目录
* logs：默认access和error  log存放目录
* sbin：二进制可执行文件`nginx`存放目录

> 安装nginx，个人还是推荐yum源安装（里面自动包含了日志切割等）
>
> 可以yum源安装完成之后，再定制化模块，二次编译

## 5 Nginx配置语法

1. 配置文件由指令与指令块构成
2. 每条指令以`;`分号结尾，指令与参数见以空格符号分隔
3. 指令块以`{ }`大括号将多条指令组织在一起
4. `include`语句允许组合多个配置文件以提升可维护性
5. 使用`#`符号添加注释，提高可读性
6. 使用`$`符号，使用变量
7. 部分指令的参数支持正则表达式

**Example**

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

### 5.1 配置参数

#### 5.1.1 时间单位

* ms：milliseconds
* s：seconds
* m：minutes
* h：hours
* d：days
* w：weeks
* M：months，30 days
* y：years，365 days

#### 5.1.2 空间单位

* b/B：bytes
* k/K：kilobytes
* m/M：megabytes
* g/G：gifabytes

## 6 Nginx配置文件结构

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

### 6.1 基本结构

1. 全局块
2. `events`块
3. `http`块

在http块中，又包含http全局块、多个server块。

每个server块中，可以包含server全局块和多个location块。

在同一配置块中嵌套的配置块，各个之间不存在次序关系。

配置文件支持大量可配置的指令，绝大多数指令不是特定属于某一个块的。同一个指令放在不同层级的块中，其作用域也不同，一般情况下，高一级块中的指令可以作用域自身所在的块和此块包含的所有低层级块。如果某个指令在两个不同层级的块中同时出现，则采用“就近原则”，即以较低层级块中的配置为准。

### 6.2 全局块

通常包括配置运行Nginx服务器的用户（组）、允许生成的worker process数、Nginx进程PID存放路径、日志的存放路径和类型以及配置文件引入等。

### 6.3 events块

events块涉及的指令主要影响Nginx服务器与用户的网络连接。常用到的设置包括是否开启对多worker process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个worker process可以同时支持的最大连接数等。

这一部分的指令对Nginx服务器的性能影响较大，在实际配置中应该根据实际情况灵活调整。

### 6.4 http块

http块是Nginx服务器配置中重要部分，代理、缓存和日志定义等绝大多数的功能和第三方模块可以放在这个模块中。

* http
* upstream
* server
* location

### 6.5 server块

server块和“虚拟主机”的概念密切联系。为了加深相关配置的理解，在介绍server块之前，简单了解一下虚拟主机的相关内容。

虚拟主机，又称虚拟服务器、主机空间或网页空间，它是一种技术。该技术是为了节省互联网服务器硬件成本而出现的。这里的“主机”或“空间”是由实体的服务器延伸而来，硬件系统可以基于服务器群，或者单个服务器等。对外表现为多个服务器，从而充分利用服务器硬件资源。从用户角度看，一台虚拟主机和一台独立的硬件主机是完全一样的。

 在使用Nginx服务器提供Web服务是，利用虚拟主机的技术就可以避免为每一个要运行的网站提供单独的Nginx服务器，也无需为每个网站对应运行一组Nginx进程。虚拟主机技术使得Nginx服务器可以在同一台服务器上只运行一组Nginx进程，就可以运行多个网站。

和http块相同，server块也可以包含自己的全局块，同时可以包含多个location块。在server全局块中，最常见的两个配置项是本虚拟主机的监听配置和本虚拟主机的名称或IP配置。

### 6.6 location块

每个server块中可以包含多个location块。从严格意义上说，location其实是server块的一个指令，只是由于其在整个Nginx配置文档中起着重要的作用，而且Nginx服务器在许多功能上的灵活性往往在location指令的配置中体现出来。

## 7 Nginx命令行

1. 格式：`nginx -s reload`
2. 帮助：`-?` `-h`
3. 使用指定的配置位置：`-c`
4. 指定配置指令：`-g`
5. 指定运行目录：`-p`
6. 发送信号：`-s`
   * 立刻停止服务：`stop`
   * 优雅的停止服务：`quit`
   * 重载配置文件：`reload`
   * 重新开始记录日志文件：`reopen`
7. 测试配置文件是否有语法错误：`-t` `-T`
8. 打印`nginx`的版本信息、编译信息：`-v` `-V`

### 7.1 重载配置文件

```shell
nginx -s reload
```

### 7.2  热部署

只是更换二进制文件

1) 备份旧的nginx文件

```
cd /home/clay/sbin/
cp nginx nginx.old
```

2）将新的编译好的二进制文件，替换掉现在正在运行的二进制文件

首先重新编译出一个`nginx`二进制可执行文件，`./configure`然后`make`，千万不要`make install`，执行那`make`就可以了

```
cd /opt/nginx-1.16.1/
cp -f objs/nginx /home/clay/sbin/
```

3）给master进程发送`USR2`信号

```
# ps -ef|grep nginx
root      6159 57006  0 11:18 pts/0    00:00:00 grep --color=auto nginx
root     63076     1  0 09:46 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody   63103 63076  0 09:46 ?        00:00:00 nginx: worker process
```

```
# kill -USR2 63076
```

```
# ps -ef|grep nginx
root      6216 63076  0 11:19 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody    6217  6216  0 11:19 ?        00:00:00 nginx: worker process
root      6225 57006  0 11:19 pts/0    00:00:00 grep --color=auto nginx
root     63076     1  0 09:46 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody   63103 63076  0 09:46 ?        00:00:00 nginx: worker process
```

```
# netstat -nplt| grep 80
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      6216/nginx: master  
```

4）关闭旧的woker进程，`kill -WINCH`旧的master进程号

```
# kill -WINCH 63076
# ps -ef|grep nginx
root      6216 63076  0 11:19 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody    6217  6216  0 11:19 ?        00:00:00 nginx: worker process
root      6842 57006  0 11:28 pts/0    00:00:00 grep --color=auto nginx
root     63076     1  0 09:46 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
```

5）关闭旧的master进程，`kill -QUIT`旧的master进程号

```
# kill -QUIT 63076
# ps -ef|grep nginx
root      6216     1  0 11:19 ?        00:00:00 nginx: master process /home/clay/sbin/nginx
nobody    6217  6216  0 11:19 ?        00:00:00 nginx: worker process
root      6947 57006  0 11:30 pts/0    00:00:00 grep --color=auto nginx
```

### 7.3 切割日志文件

1）mv掉原来的日志

```
mv access.log access.log.bak
```

2）重新打开日志文件

```
nginx -s reopen
```

**简单说明一下：**

1、在没有执行kill -USR1 `cat ${pid_path}`之前，即便已经对文件执行了mv命令也只是改变了文件的名称，nginx还是会向新命名的文件” access.log.20161024”中照常写入日志数据。原因在于linux系统中，内核是根据文件描述符来找文件的

2、USR1是自定义信号，也就是进程编写者自己确定收到这个信号该干什么。而在nginx中它自己编写了代码当接到USR1信号的时候让nginx重新打开日志文件（重新打开的日志就是配置文件中设置的位置和名称）。

