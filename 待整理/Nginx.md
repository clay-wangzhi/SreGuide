一、Nginx的程序架构：
master：
一个master进程：负载加载和分析配置文件、管理worker进程、平滑升级

worker：
一个或多个worker进程处理并响应用户请求

缓存相关的进程：
cache loader：载入缓存对象
cache manager：管理缓存对象
nginx特性：
异步、事件驱动和非阻塞
并发请求处理：通过epoll/select
文件IO：高级IO sendfile，异步，mmap
nginx模块：高度模块化，但其模块早期不支持DSO机制；近期版本支持动态装载和卸载；
二、模块分类：
1、核心模块：core module
HTTP modules（http模块）：

Standard HTTP modules标准的http模块
Optional HTTP modules可选的http模块
Mail modules邮件模块
Stream modules：流模块，传输层代理，4层tcp和udp代理，传输层代理
3rd party modules第三方模块
三、nginx的功用：
1、静态的web资源服务器；(图片服务器，或js/css/html/txt等静态资源服务器)
2、结合FastCGI/uwSGI/SCGI等协议反代动态资源请求；
3、http/https协议的反向代理；
4、imap4/pop3协议的反向代理；
5、tcp/udp协议的请求转发；
四、nginx的安装配置：
官方版本：
官方的预制包地址：http://nginx.org/packages/centos/7/x86_64/RPMS/
Fedora版本：
Fedora-EPEL源：http://nginx.org/packages/centos/7/x86_64
编译安装：
            ~]# yum groupinstall "Development Tools" "Server Platform Development"#安装编译环境
            ~]# yum install pcre-devel openssl-devel zlib-devel #安装依赖的其他软件
            ~]# useradd -r nginx #创建一个nginx系统用户
            ~]#  ./configure --prefix=/usr/local/nginx --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --user=nginx --group=nginx --with-http_ssl_module --with-http_v2_module --with-http_dav_module --with-http_stub_status_module --with-threads --with-file-aio
            # make && make install
yum安装：

可以用epel源和官方下载地址

[root@C712 ~]# vim /etc/yum.repos.d/nginx.repo#创建设置Nginx仓库
[epel]#Fedora-EPEL源
name=epel repository
baseurl=https://mirrors.aliyun.com/epel/7Server/x86_64/#epel源地址gpgcheck=0

---------------------------------
或者           
---------------------------------
[nginx]#官方版本
name=nginx repository
baseurl=http://nginx.org/packages/centos/7/x86_64/#官方下载地址  
gpgcheck=0

[root@C712 ~]# yum repolist        #查询nginx仓库是否生效
[root@C712 ~]# yum install nginx#安装nginx
[root@C712 ~]# mkdir /data/nginx/vhost1 -pv#创建网页测试目录
mkdir: 已创建目录 "/data"
mkdir: 已创建目录 "/data/nginx"
mkdir: 已创建目录 "/data/nginx/vhost1"
[root@C712 ~]# vim /data/nginx/vhost1/index.html#创建测试页
<h1>this is nginx test<h1>
[root@C712 ~]# vim /etc/nginx/conf.d/vhost1.conf#创建一个server

server{
       listen 8080;  
       server_name www.ilinux.io;
       root /data/nginx/vhost1;
}

[root@C712~]# nginx -t       #语法检查
[root@C712 ~]# systemctl start nginx.service#启动nginx
[root@C712~]# ss -tnlp  #查看监听端口
State      Recv-Q Send-Q       Local Address:Port                      Peer Address:Port              
LISTEN     0      128                      *:80                                   *:*                   users:(("nginx",pid=1130,fd=6),("nginx",pid=1129,fd=6))

测试页
五、程序环境
配置文件的组成部分：
主配置文件：nginx.conf
include conf.d/*.conf
把这个目录下所有以.conf 都做为配置文件
此段在官方安装和epel安装时候所在位置不同，意义也不同

fastcgi， uwsgi，scgi等协议相关的配置文件
mime.types：支持的mime类型,多用途互联网拓展
主程序文件目录：/usr/sbin/nginx
Unit File：nginx.service
[root@C712 ~]# nginx -V #查看编译详细配置
[root@C712 ~]# nginx -t  #查看语法错误
[root@C712 ~]# nginx -s  reload#重新装载
六、 主配置文件的配置
1、 主配置文件的配置指令：
            directive value [value2 ...];
2、注意：
(1) 指令必须以分号结尾；
(2) 支持使用配置变量；
内建变量：由Nginx模块引入，可直接引用；
自定义变量：由用户使用set命令定义；
格式：set variable_name value;
引用变量：$variable_name
3、主配置文件结构：
                main block：#主配置段，也即全局配置段；
                    event {
                        ...
                    }：#事件驱动相关的配置；
                http {
                    ...
                }：#http/https 协议相关的配置段；
                mail {
                    ...
                }#邮件相关配置段；
                stream {
                    ...
                }#四层代理配置段；
其中最重要的是http：
http协议相关的配置结构
                http {
                    ...
                    ...：#各server的公共配置，对所有server都生效；
                    server {
                        ...
                    }：#每个server用于定义一个虚拟主机；
                    server {
                        ...
                        listen #监听端口
                        server_name#服务名
                        root #站点根目录
                        alias#别名
                        location [OPERATOR] URL {   #对某一个url访问的资源属性
                            ...
                            if CONDITION {
                                ...
                            }
                        }
                    }
                }
以epel源安装的nginx主配置文件为例：
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;
worker_processes auto;  #自动探测有几个cpu就启动几个进程
error_log /var/log/nginx/error.log;#错误日期目录
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf; #动态装载模块

events {
    worker_connections 1024;#单个进程响应1024个请求
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';#访问格式名称：地址；用户；本地时间；请求；响应码；字节数；引用；客户端代理；记录真正客户端地址；

    access_log  /var/log/nginx/access.log  main;#访问日志路径
    
    sendfile            on;#提升效能
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;#保持连接65秒
    types_hash_max_size 2048;#加入内存中匹配过的保存值大的hash值2048个类型
    
    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;默认识别8进制数据流
    
    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;
 server {
        listen       80 default_server;  #默认虚拟主机监听80端口
        listen       [::]:80 default_server;
        server_name  _;    #匹配所有主机
        root         /usr/share/nginx/html;#页面根目录

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;
    
        location / {
        }
    
        error_page 404 /404.html;#错误页面
            location = /40x.html {
        }
    
        error_page 500 502 503 504 /50x.html;错误页面
            location = /50x.html {
        }
    }
七、配置指令和相关配置
main配置段常见的配置指令：
分类：

正常运行必备的配置
优化性能相关的配置
用于调试及定位问题相关的配置
事件驱动相关的配置
1、正常运行必备的配置：
（1）、user
Syntax: user user [group];
Default: user nobody nobody;
Context: main
定义辅助进程使用的用户和组证书。

（2）、pid /PATH/TO/PID_FILE;
指定存储nginx主进程进程号码的文件路径；

（3）、include file | mask;
指明包含进来的其它配置文件片断；

（4）、load_module file;
指明要装载的动态模块；

2、性能优化相关的配置：
（1）、worker_processes number | auto;
worker进程的数量；通常应该等于小于当前主机的cpu的物理核心数；
auto：当前主机物理CPU核心数；

（2）、worker_cpu_affinity cpumask ...;
worker_cpu_affinity auto [cpumask];把nginx进程绑定到指定cpu
CPU MASK：cpu掩码

00000000：
00000001：0号CPU
00000010：1号CPU
00000100: 2号cpu
... ...

[root@C712 ~]# vim /etc/nginx/nginx.conf
.........
worker_processes auto;#自动启用所有   也可以指定数量worker_processes 2;
........
worker_cpu_affinity auto;#添加此段用来自动绑定cpu，提升nginx服务器性能#worker_cpu_affinity 1000 0100 0;#或者指明那个绑定cpu
[root@C712 ~]# ps axo comm,pid,psr | grep nginx #查询nginx运行在第几颗cpu上
nginx             1458   0
nginx             1459   0
[root@C712 ~]# wauch -n0.5 'ps axo comm,pid,psr | grep nginx' 
（3）、worker_priority number;
指定worker进程的nice值，设定worker进程优先级；[-20,20]
[root@C712 ~]# ps axo comm,pid,ni | grep nginx#查询nginx优先级
nginx             1458   0
nginx             1459   0

[root@C712 ~]# vim /etc/nginx/nginx.conf#编辑主配置文件
.........
worker_cpu_affinity auto;                       
worker_priority -5；#调整优先级为-5
.......
[root@C712 ~]# nginx -t #语法检查
[root@C712 ~]# nginx -s reload    #重载
[root@C712 ~]# ps axo comm,pid,ni | grep nginx   #查询nginx优先级
nginx             1458   0
nginx             1488  -5

（4）、worker_rlimit_nofile number;
worker进程所能够打开的文件数量上限；
[root@C712 ~]# vim /etc/nginx/nginx.conf#编辑主配置文件
.........
worker_cpu_affinity auto;                       
worker_priority -5；
worker_rlimit_nofile 65535；#进程所能够打开的文件数量为65535
.......

3、调试、定位问题：
（1）、daemon on|off;
是否以守护进程方式运行Nignx；

（2）、master_process on|off;
是否以master/worker模型运行nginx；默认为on；

（3）、error_log file [level];错误日志等级

4、事件驱动相关的配置:
                events {
                    ...
                }
（1）、worker_connections number;
每个worker进程所能够打开的最大并发连接数数量；
worker_processes * worker_connections
（2）、use method;
指明并发连接请求的处理方法；
use epoll;
（3）、accept_mutex on | off;
处理新的连接请求的方法；on意味着由各worker轮流处理新请求，Off意味着每个新请求的到达都会通知所有的worker进程；
-----------------------------------------与套接字相关的配置：---------------------------------

1、server { ... }
配置一个虚拟主机；

server {
listen address[:PORT]|PORT;监听地址端口
server_name SERVER_NAME;服务名
root /PATH/TO/DOCUMENT_ROOT;网页根目录地址
proxy_pass http://ip;#反向代理到指定ip的http服务器，此服务器变成代理服务器，上面的root网页根目录就没用了
}
2、监听listen PORT|address[:port]|unix:/PATH/TO/SOCKET_FILE
格式：listen address[:port] [default_server] [ssl] [http2 | spdy] [backlog=number] [rcvbuf=size] [sndbuf=size]

default_server：设定为默认虚拟主机；
ssl：限制仅能够通过ssl连接提供服务；
backlog=number：后援队列长度；
rcvbuf=size：接收缓冲区大小；
sndbuf=size：发送缓冲区大小；

3、server_name name ...;主机名
指明虚拟主机的主机名称；后可跟多个由空白字符分隔的字符串；
支持*通配任意长度的任意字符；server_name .magedu.com www.magedu.#左侧和右侧匹配
支持~起始的字符做正则表达式模式匹配；server_name ~^www\d+.magedu.com$#正则表达式匹配
匹配机制：
(1) 首先是字符串精确匹配;
(2) 左侧通配符；
(3) 右侧通配符；
(4) 正则表达式；

4、tcp_nodelay on | off;默认是on
在keepalived保持连接模式下的连接是否启用TCP_NODELAY合并选项#选项是数据包不会马上传送出去，等到数据包最大时，一次性的传输出去，这样有助于解决网络堵塞。

tcp_nopush on|off;默认是：on
在sendfile模式下，是否启用TCP_CORK选项；#是否等待应用层首部合并一起发布

5、sendfile on | off;默认是on
是否启用sendfile功能；

---------------------------------------定义路径相关的配置------------------------------------

6、root path;资源路径映射
设置web资源路径映射；用于指明用户请求的url所对应的本地文件系统上的文档所在目录路径；可用的位置：http, server, location, if in location；

7、location [ = | ~ | ~* | ^~ ] uri { ... }
根据请求URI设置配置.

在一个server中location配置段可存在多个，用于实现从uri到文件系统的路径映射；ngnix会根据用户请求的URI来检查定义的所有location，并找出一个最佳匹配，而后应用其配置；

[root@C712 ~]# vim /etc/nginx/conf.d/vhost1.conf#创建一个server

server{
       listen 8080;  
       server_name www.ilinux.io;
       root /data/nginx/vhost1;
location / {                        #匹配根，如果里面有root，则上面的root失效
# root /data/nginx/vhost1;
               allow all;
}
location ~*\.(jpg|png)${        #限制访问jpg和png文件，~号表明使用正则表达式
               deny 172.16.0.68;  #限制那台主机ip
               allow all;
}

}
=：对URI做精确匹配；例如, http://www.magedu.com/, http://www.magedu.com/index.html
location = / {
...
}
~：对URI做正则表达式模式匹配，区分字符大小写；
~*：对URI做正则表达式模式匹配，不区分字符大小写；
^~：对URI的左半部分做匹配检查，不区分字符大小写；
不带符号：匹配起始于此uri的所有的url；

匹配优先级：=, ^~, ～/～*，不带符号；

root /vhosts/www/htdocs/
http://www.magedu.com/index.html --> /vhosts/www/htdocs/index.html

server {
root /vhosts/www/htdocs/

location /admin/ {
root /webapps/app1/data/
}
}

8、alias path;
定义路径别名，文档映射的另一种机制；仅能用于location上下文；

注意：location中使用root指令和alias指令的意义不同；
(a) root，给定的路径对应于location中的/uri/左侧的/；
(b) alias，给定的路径对应于location中的/uri/右侧的/；

[root@C712 ~]# vim /etc/nginx/conf.d/vhost1.conf#创建一个server

server{
       listen 8080;  
       server_name www.ilinux.io;
location  ^~ /images/{           #^~优先级最高
                   root /data/pictures/;#匹配/data/pictures/目录里面的images目录里面的文件
                # alias /data/pictures/;#匹配/data/pictures/目录里面的文件
}
9、index file ...;
默认资源；http, server, location；

10、error_page code ... [=[response]] uri;
指定URL错误页

[root@C712 ~]# vim /etc/nginx/conf.d/vhost1.conf#创建一个server

server{
       listen 8080;  
       server_name www.ilinux.io;
......
error_page 404 /notfound.html;#也可修改error_page 404=200    页面上的报文显示status code变成了200
location = /notfound.html{
      root /data/nginx/error_pages;#定义错误页面路径
}
}
[root@C712 ~]# mkdir /data/nginx/error_pages#创建错误页目录
[root@C712 ~]# vim /data/nginx/error_pages/notfound.html#编辑错误页内容

<h2>404</h2>
[root@C712 ~]# nginx -s reload #重载nginx

11、try_files file ... url;
--------------------------------------定义客户端请求的相关配置--------------------------------

12、keepalive_timeout timeout [header_timeout];
设定保持连接的超时时长，0表示禁止长连接；默认为75s；

13、keepalive_requests number;
在一次长连接上所允许请求的资源的最大数量，默认为100;

14、keepalive_disable none | browser ...;
对哪种浏览器禁用长连接；

15、send_timeout time;
向客户端发送响应报文的超时时长，此处，是指两次写操作之间的间隔时长；

16、client_body_buffer_size size;
用于接收客户端请求报文的body部分的缓冲区大小；默认为16k；超出此大小时，其将被暂存到磁盘上的由client_body_temp_path指令所定义的位置；

17、client_body_temp_path path [level1 [level2 [level3]]];
设定用于存储客户端请求报文的body部分的临时存储路径及子目录结构和数量；

16进制的数字；

client_body_temp_path /var/tmp/client_body 2 1 1
1：表示用一位16进制数字表示一级子目录；0-f
2：表示用2位16进程数字表示二级子目录：00-ff
2：表示用2位16进程数字表示三级子目录：00-ff

---------------------------------------对客户端进行限制的相关配置-----------------------------------

18、limit_rate rate;
限制响应给客户端的传输速率，单位是bytes/second，0表示无限制；

19、limit_except method ... { ... }
限制对指定的请求方法之外的其它方法的使用客户端；

limit_except GET {
allow 192.168.1.0/24;
deny  all;
}
----------------------------------------------文件操作优化的配置----------------------------------------

20、aio on | off | threads[=pool];
是否启用aio功能；

21、directio size | off;
在Linux主机启用O_DIRECT标记，此处意味文件大于等于给定的大小时使用，例如directio 4m;

22、open_file_cache off;
open_file_cache max=N [inactive=time];
nginx可以缓存以下三种信息：

(1) 文件的描述符、文件大小和最近一次的修改时间；
(2) 打开的目录结构；
(3) 没有找到的或者没有权限访问的文件的相关信息；
max=N：可缓存的缓存项上限；达到上限后会使用LRU算法实现缓存管理；

inactive=time：缓存项的非活动时长，在此处指定的时长内未被命中的或命中的次数少于* * * open_file_cache_min_uses指令所指定的次数的缓存项即为非活动项；
23、open_file_cache_valid time;
缓存项有效性的检查频率；默认为60s;

24、open_file_cache_min_uses number;
在open_file_cache指令的inactive参数指定的时长内，至少应该被命中多少次方可被归类为活动项；

25、open_file_cache_errors on | off;
是否缓存查找时发生错误的文件一类的信息；

ngx_http_access_module模块：
实现基于ip的访问控制功能

26、allow address | CIDR | unix: | all;
27、deny address | CIDR | unix: | all;
http, server, location, limit_except

ngx_http_auth_basic_module模块
实现基于用户的访问控制，使用basic机制进行用户认证；

28、auth_basic string | off;
29、auth_basic_user_file file;
[root@C712 ~]# yum -y install httpd-tools #安装http工具
[root@C712 ~]# htpasswd -c -m /etc/nginx/.ngxpasswd tom #创建一个用户
New password: #输入密码
Re-type new password: 
Adding password for user tom
[root@C712 ~]# htpasswd -m /etc/nginx/.ngxpasswd jerry   #创建一个用户
New password: #输入密码
Re-type new password: 
Adding password for user jerry
[root@C712 ~]# cat /etc/nginx/.ngxpasswd #查看密码状态
tom:$apr1$wglyVLHX$Qv/ttSwO13iyWVBoUerPF/
jerry:$apr1$zHqX7iMf$lRidKTnlz3.HQC/MRUrTT0

[root@C712 ~]# vim /etc/nginx/conf.d/vhost1.conf 

server{
       listen 8080;
       server_name www.ilinux.io;
       root /data/nginx/vhost1;
location ~* ^/(admin|login){   #url以admin或login开头匹配
      auth_basic "admin area or login url";
      auth_basic_user_file /etc/nginx.ngxpasswd;
}
}

[root@C712 ~]# mkdir /data/nginx/vhost1/admin
[root@C712 ~]# vim /data/nginx/vhost1/admin/index.html

<h1>Admin Area</h1>
[root@C712 ~]# nginx -s reload

image.png

image.png
注意：htpasswd命令由httpd-tools所提供;

30、stub_status;
配置示例：
location /basic_status {
stub_status;
}

ngx_http_stub_status_module模块內建的状态页
用于输出nginx的基本状态信息；

server{
....
location /ngxstatus {
stub_status;
}
}
信息页返回数值：

Active connections: 291
server accepts handled requests
16630948 16630948 31070465
Reading: 6 Writing: 179 Waiting: 106
Active connections: 活动状态的连接数；
accepts：已经接受的客户端请求的总数；
handled：已经处理完成的客户端请求的总数；
requests：客户端发来的总的请求数；
Reading：处于读取客户端请求报文首部的连接的连接数；
Writing：处于向客户端发送响应报文过程中的连接数；
Waiting：处于等待客户端发出请求的空闲连接数；
八、常用模块的使用
1、日志模块
ngx_http_log_module
模块以指定的格式写入请求日志

（1）、log_format name string ...;
string可以使用nginx核心模块及其它模块内嵌的变量；

（2）、access_log path [format [buffer=size] [gzip[=level]] [flush=time] [if=condition]];
access_log off;#关闭日志记录

server{
.....
access_log /var/log/nginx/vhost1_access.log main;   # 自定义日志路径，格式为main
location /ngxstatus {
stub_status;
access_log off;#关闭访问信息页日志记录
}
}
访问日志文件路径，格式及相关的缓冲的配置；
buffer=size
flush=time

（3）、open_log_file_cache max=N [inactive=time] [min_uses=N] [valid=time];
open_log_file_cache off;
缓存各日志文件相关的元数据信息；

max：缓存的最大文件描述符数量；
min_uses：在inactive指定的时长内访问大于等于此值方可被当作活动项；
inactive：非活动时长；
valid：验正缓存中各缓存项是否为活动项的时间间隔；

2、压缩传输模块
ngx_http_gzip_module：
压缩传输模块

（1）、gzip on | off;
启用或禁用压缩响应

（2）、gzip_comp_level level;
设置响应的GZIP压缩级别。可接受的值在1到9的范围内。

（3）、 gzip_disable regex ...;
禁用与“用户代理”标题字段匹配的任何指定正则表达式的请求响应的GZIPIP。

（4）、 gzip_min_length length;
启用压缩功能的响应报文大小阈值；

（5）、gzip_buffers number size;
支持实现压缩功能时为其配置的缓冲区数量及每个缓存区的大小；

（6）、gzip_proxied off | expired | no-cache | no-store | private | no_last_modified | no_etag | auth | any ...;

nginx作为代理服务器接收到从被代理服务器发送的响应报文后，在何种条件下启用压缩功能的；
off：对代理的请求不启用
no-cache, no-store，private：表示从被代理服务器收到的响应报文首部的Cache-Control的值为此三者中任何一个，则启用压缩功能；

（7）、gzip_types mime-type ...;
压缩过滤器，仅对此处设定的MIME类型的内容启用压缩功能；
示例：
vim /etc/nginx/conf
http {
gzip  on;
gzip_comp_level 6;
gzip_min_length 64;
gzip_proxied any;
gzip_types text/xml text/css  application/javascript;
}
3、ssl安全套接字模块：
ngx_http_ssl_module
（1）、 ssl on | off;
是否启用ssl

（2）、ssl_certificate file;
当前虚拟主机使用PEM格式的证书文件；

（3）、ssl_certificate_key file;
当前虚拟主机上与其证书匹配的私钥文件；

在CA证书服务器生成自签证书
[root@C711 ~]# cd /etc/pki/CA/
[root@C711 CA]# ls
certs  crl  newcerts  private
[root@C711 CA]# (umask 077;openssl genrsa -out private/cakey.pem 2048)
Generating RSA private key, 2048 bit long modulus
...........+++
......+++
e is 65537 (0x10001)
[root@C711 CA]# ll private
总用量 4
-rw------- 1 root root 1675 7月   9 23:02 cakey.pem
[root@C711 CA]# openssl req -new -x509 -key private/cakey.pem -out cacert.pm
[root@C711 CA]# touch index.txt
[root@C711 CA]# echo 01 > serial

在nginx服务器上：
[root@C712 ~]# mkdir /etc/nginx/ssl  #创建ssl目录
[root@C712 ~]# cd /etc/nginx/ssl
[root@C712 ssl]# (umask 077; openssl genrsa -out nginx.key 2048)      #创建秘钥
[root@C712 ssl]# ll   #查询
总用量 4
-rw------- 1 root root 1679 7月   9 23:19 nginx.key
[root@C712 ssl]# openssl req -new -key nginx.key -out nginx.csr #创建私钥
[root@C712 ssl]# ll  #查询
总用量 8
-rw-r--r-- 1 root root  989 7月   9 23:22 nginx.csr
-rw------- 1 root root 1679 7月   9 23:19 nginx.key
[root@C712 ssl]# scp nginx.csr 192.168.1.11:/tmp/#传输到CA服务器上

在CA服务器上认证
[root@C711 CA]# openssl ca -in /tmp/nginx.csr -out /etc/pki/CA/certs/nginx.crt -days 365
[root@C711 CA]#scp certs/nginx.crt 192.168.1.12:/etc/nginx/ssl   #传送回nginx服务器

回到nginx服务器上
[root@C712 ~]# cd /etc/nginx
[root@C712 nginx]# cp conf.d/vhost1.conf  conf.d/vhost1_ssl.conf 
[root@C712 nginx]# vim conf.d/vhost1_ssl.conf 

server{
       listen 443 ssl;   #修改监听端口
       server_name www.ilinux.io;
       root /data/nginx/vhost1;
       access_log /var/log/nginx/vhost1_ssl_access.log main;

ssl on;                                              #开启ssl
ssl_certificate /etc/nginx/ssl/nginx.crt;
ssl_certificate_key /etc/nginx/ssl/nginx.key;
ssl_protocols sslv3 tlsv1 tlsv1.1 tlsv1.2;#支持哪些协议
ssl_session_cache shared:sslcache:20m;#指明缓存大小，1M能够缓存4000个会话

location ~* ^/(admin|login){
      auth_basic "admin area or login url";
      auth_basic_user_file /etc/nginx/.ngxpasswd;
}
}
[root@C712 ~]# nginx -s reload

（4）、ssl_protocols [SSLv2] [SSLv3] [TLSv1] [TLSv1.1] [TLSv1.2];
支持ssl协议版本，默认为后三个；

（5）、ssl_session_cache off | none | [builtin[:size]] [shared:name:size];

builtin[:size]：使用OpenSSL内建的缓存，此缓存为每worker进程私有；

[shared:name:size]：在各worker之间使用一个共享的缓存；

6、ssl_session_timeout time;
客户端一侧的连接可以复用ssl session cache中缓存 的ssl参数的有效时长；
4、URL重定向模块：
ngx_http_rewrite_module
URL重定向，URL重写查找替换

例如：
bbs.magedu.com/ --> www.magedu.com/bbs/, http://www.magedu.com/ --> https://www.magedu.com/
http://www.magedu.com/login.php;username=tom --> http://www.magedu.com/tom/
http://www.ilinux.io/bbs/ --> http://bbs.ilinux.io/

将用户请求的URI基于regex所描述的模式进行检查，而后完成替换；

（1）、rewrite regex replacement [flag]
将用户请求的URI基于regex所描述的模式进行检查，匹配到时将其替换为replacement指定的新的URI；
[root@C712 nginx]# vim /etc/nginx/conf.d/vhost1.conf 

server{
       listen 8080;
       server_name www.ilinux.io;
       root /data/nginx/vhost1;
       rewrite /(.*)\.png$ /$1.jpg;#请求png返回jpg
       rewrite  /(.*)$ https://www.ilinux.io/$1#URL的8080请求都要自动重定向到https上
注意：如果在同一级配置块中存在多个rewrite规则，那么会自下而下逐个检查；被某条件规则替换完成后，会重新一轮的替换检查，因此，隐含有循环机制；[flag]所表示的标志位用于控制此循环机制；

如果replacement是以http://或https://开头，则替换结果会直接以重向返回给客户端；

301：永久重定向；

[flag]标志位：

ast：（循环）
重写完成后停止对当前URI在当前location中后续的其它重写操作，而后对新的URI启动新一轮重写检查；提前重启新一轮循环；
break：（跳出循环）
重写完成后停止对当前URI在当前location中后续的其它重写操作，而后直接跳转至重写规则配置块之后的其它配置；结束循环；
redirect：
重写完成后以临时重定向方式直接返回重写后生成的新URI给客户端，由客户端重新发起请求；不能以http://或https://开头；
permanent:
重写完成后以永久重定向方式直接返回重写后生成的新URI给客户端，由客户端重新发起请求；

（2）、return返回
return code [text];
return code URL;
return URL;
停止处理并将指定的代码返回给客户端。

（3）、 rewrite_log on | off;
是否开启重写日志；

（4）、 if (condition) { ... }条件判断
引入一个新的配置上下文 ；条件满足时，执行配置块中的配置指令；server, location；

condition：
比较操作符：
==
!=
~：模式匹配，区分字符大小写；
~：模式匹配，不区分字符大小写；
!~：模式不匹配，区分字符大小写；
!~：模式不匹配，不区分字符大小写；
文件及目录存在性判断：
-e, !-e
-f, !-f
-d, !-d
-x, !-x

（5）、set $variable value;
用户自定义变量 ；
5、允许引用模块：
ngx_http_referer_module
网站的合法引用，防止盗链

格式：valid_referers none | blocked | server_names | string ...;
定义referer首部的合法可用值；
none：请求报文首部没有referer首部；
blocked：请求报文的referer首部没有值；
server_names：参数，其可以有值作为主机名或主机名模式；
arbitrary_string：直接字符串，但可使用作通配符；
regular expression：被指定的正则表达式模式匹配到的字符串；要使用~打头，例如 ~..magedu.com；

配置示例：
valid_referers none block server_names *.magedu.com *.mageedu.com magedu.* mageedu.* ~\.magedu\.;#匹配指定URL

if($invalid_referer) {
return http://www.magedu.com/invalid.jpg; #非法引用自动跳转到指定URl
}


转载链接：https://www.jianshu.com/p/193443c9d306