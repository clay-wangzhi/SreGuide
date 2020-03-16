## nginx解决跨域问题

在nginx.conf中编辑

```nginx
server {
        location / {
            root   html;
            index  index.html index.htm;
            //允许cros跨域访问
            add_header 'Access-Control-Allow-Origin' '*';
        }
 }
```

## 从http跳转到https

项目前期使用http，后期为了安全方面的考虑，启用了https。
项目架构：前端使用nginx作为多个tomcat实例的反向代理和负载均衡。
实际上只需要在nginx上启用https即可，使客户端与nginx之后使用https方式通信，而nginx与tomcat之间依然以http方式通信。

现在需要将之前客户端所有的http请求全部都自动重定向为https，只需要在nginx上添加相应配置即可。

### 使用rewrite指令

```nginx
server {
    listen 80;
    server_name domain.com;
    rewrite ^(.*) https://$server_name$1 permanent;
}
server {
    listen 443 ssl;
    server_name domain.com;
    ssl on;
    ssl_certificate     /etc/nginx/ssl/domain.com.crt;
    ssl_certificate_key /etc/nginx/ssl/domain.com.crt;
    # other
}
```

如果此时nginx作为Tomcat的前端反向代理的话，需要将相应配置放在配置ssl的server块中。

### 使用return指令

```nginx
server {
    listen 80;
    server_name domain.com;
    return 301 https://$server_name$request_uri;
}
server {
    listen 443 ssl;
    server_name domain.com;
    ssl on;
    ssl_certificate     /etc/nginx/ssl/domain.com.crt;
    ssl_certificate_key /etc/nginx/ssl/domain.com.crt;
    # other
}
```

如果此时nginx作为Tomcat的前端反向代理的话，需要将相应配置放在配置ssl的server块中。

### 使用error_page指令

只允许HTTP来访问时，用HTTP访问会让Nginx报497错误，然后利用error_page将链接重定向至HTTPS上。

```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name domain.com;
    ssl on;
    ssl_certificate     /etc/nginx/ssl/domain.com.crt; 
    ssl_certificate_key /etc/nginx/ssl/domain.com.crt;
    # other
    error_page 497 https://$server_name$request_uri;
}
```

使用error_page指令时，将http和https的监听配置写在同一个server块中，对应的其他配置也需要在该server配置块中完成。

需要注意的是，此时需要将`error_page`指令语句写在最后，否则不能生效。

## nginx出现403的原因

### 由于启动用户和nginx工作用户不一致所致

查看nginx的启动用户，发现是nobody，而为是用root启动的

```
ps aux | grep "nginx: worker process" | awk'{print $1}'
```

将nginx.config的user改为和启动用户一致，

```
#vim nginx.conf
user root;
```

### 缺少index.html

缺少index.html或者index.php文件，就是配置文件中index index.html index.htm这行中的指定的文件

```
server {  
      listen       80;  
      server_name  localhost;  
      index  index.php index.html;  
      root  /data/www/;
}
```

如果在/data/www/下面没有index.php,index.html的时候，直接文件，会报403 forbidden。

### 权限问题

如果nginx没有web目录的操作权限，也会出现403错误。

解决办法：修改web目录的读写权限，或者是把nginx的启动用户改成目录的所属用户，重启Nginx即可解决

```
chmod -R 777 /data
chmod -R 777 /data/www/
```

### SELinux设置问题

设置为：`SELINUX=disabled`

## nginx allow 多个ip & ipv4的网段表示方法解析

单看[nginx](http://www.ttlsa.com/nginx/)模块名`ngx_http_access_module`,很多人一定很陌生，但是deny和allow相比没一个人不知道的，实际上deny和allow指令属于ngx_http_access_module.我们想控制某个uri或者一个路径不让人访问，在nginx就得靠它了。

nginx的访问控制模块语法很简单，至少比apache好理解，apache的allow和deny的顺序让很多初学者抓头.好了具体看下这个插件的使用方法吧。

### 1、安装模块

这个模块内置在了nginx中，除非你安装中使用了--without-http_access_module。如果你还没安装过nginx，那么请参考下ttlsa之前写的[nginx安装](http://www.ttlsa.com/html/1548.html).

### 2、指令

allow
语法:    allow address | CIDR | unix: | all;
默认值:    —
配置段:    http, server, location, limit_except

允许某个ip或者一个ip段访问.如果指定unix:,那将允许socket的访问.注意：unix在1.5.1中新加入的功能，如果你的版本比这个低，请不要使用这个方法。

deny
语法:    deny address | CIDR | unix: | all;
默认值:    —
配置段:    http, server, location, limit_except

禁止某个ip或者一个ip段访问.如果指定unix:,那将禁止socket的访问.注意：unix在1.5.1中新加入的功能，如果你的版本比这个低，请不要使用这个方法。

### 3. allow、deny实例

location / {
deny 192.168.1.1;
allow 192.168.1.0/24;
allow 10.1.1.0/16;
allow 2001:0db8::/32;
deny all;
}

从上到下的顺序，类似iptables。匹配到了便跳出。如上的例子先禁止了192.16.1.1，接下来允许了3个网段，其中包含了一个ipv6，最后未匹配的IP全部禁止访问. 在实际生产环境中，我们也会使用nginx 的geo模块配合使用，有兴趣的请参考ttlsa相关文章[nginx geo使用方法](http://www.ttlsa.com/html/3203.html).

###  

nginx访问控制模块要数nginx里面最简单的指令，只要记住你想禁止谁访问就deny加上IP，想允许则加上allow ip，想禁止或者允许所有，那么allow all或者deny all即可.



但是具体的配置出现很多问题

简单一点举例说明：
ip段：10.0.0.1-10.0.0.255        的表示方法：10.0.0.0/24
ip段：10.0.0.1-10.0.255.255     的表示方法：10.0.0.0/16
ip段：10.0.0.1-10.255.255.255    的表示方法：10.0.0.0/8



利用主机数来计算

  1)将主机数目转化为二进制来表示

  2)如果主机数小于或等于254（注意去掉保留的两个IP地址），则取得该主机的二进制位数，为 N，这里肯定 N<8。如果大于254，则 N>8，这就是说主机地址将占据不止8位。

  3)使用255.255.255.255来将该类IP地址的主机地址位数全部置1，然后从后向前的将N位全部置为 0，即为子网掩码值。



  如欲将B类IP地址168.195.0.0划分成若干子网，每个子网内有主机700台：

  1) 700=1010111100 
  2) 该二进制为十位数，N = 10 
  3) 将该B类地址的子网掩码255.255.0.0的主机地址全部置 1，得到255.255.255.255 然后再从后向前将后 10位置0,即为： 11111111.11111111.11111100.00000000 即255.255.252.0。这就是该欲划分成主机为700台的B类IP地址 168.195.0.0的子网掩码。



二进制表（表1）

 

0  0  0  0   0  0  0 0

 

128 64 32 16  8  4   2 1

 



 

CIDR值（表2）

 

子网掩码           CIDR值

 

255.0.0.0           /8

 

255.128.0.0          /9

 

255.192.0.0          /10

 

255.224.0.0          /11

 

255.240.0.0          /12

 

255.248.0.0          /13

 

255.252.0.0          /14

 

255.254.0.0          /15

 

255.255.0.0          /16

 

255.255.128.0        /17

 

255.255.192.0        /18

 

255.255.224.0        /19

 

255.255.240.0        /20

 

255.255.248.0        /21

 

255.255.252.0        /22

 

255.255.254.0        /23

 

255.255.255.0        /24

 

255.255.255.128       /25

 

255.255.255.192       /26

 

255.255.255.224       /27

 

255.255.255.240       /28

 

255.255.255.248       /29

 

255.255.255.252       /30

> 参考链接：
>
> https://blog.csdn.net/qq_35843543/article/details/81561240