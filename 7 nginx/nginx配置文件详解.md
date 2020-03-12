

配置文件详解

```nginx
user nginx;
worker_processes  8;
worker_cpu_affinity auto;
#worker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000 10000000;
error_log  /var/log/nginx/error.log  error;
pid        /var/run/nginx.pid;
worker_rlimit_nofile 65535;

events {
    use epoll;
    worker_connections  20480;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr:$remote_port - $remote_user [$time_local]  $host "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    log_format  prod '$remote_addr|$remote_user|[$time_local]|$request|'
                     '$status|$body_bytes_sent|$http_referer|'
                     '$http_user_agent|$request_time|$host|$upstream_addr|$upstream_response_time';
    
    access_log  /var/log/nginx/access.log  prod;
    
    charset  utf-8;
    fastcgi_intercept_errors on;
    server_names_hash_bucket_size 256;
    client_header_buffer_size 32k;
    large_client_header_buffers 4 128k;

    server_tokens off;
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    #支持ssi包含文件
    ssi on;
    ssi_silent_errors on;
#   ssi_types text/html;

    keepalive_timeout  90;
    client_header_timeout 20;
    client_body_timeout 20;
    
    client_max_body_size 200m;
    client_body_buffer_size  128k;

    limit_req_zone $binary_remote_addr zone=one:10m rate=10000r/s;
    limit_conn_zone $binary_remote_addr zone=addr:10m;

    # include /etc/nginx/gzip.conf;
    gzip on;
	gzip_buffers 4 8k;
	gzip_comp_level 6;
	gzip_disable "MSIE [1-6]\.";
	gzip_http_version 1.1;
	gzip_min_length 1000;
	gzip_proxied any;
	gzip_vary on;
	gzip_types text/plain text/css application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json image/jpeg image/gif image/png image/jpg;
    

    # include /etc/nginx/proxy.conf;
    proxy_connect_timeout 90;
	proxy_read_timeout 90;
	proxy_send_timeout 90;
	proxy_buffer_size 32k;
	proxy_buffers 4 64k;
	proxy_busy_buffers_size 128k;
    
    
    # include /etc/nginx/backend.conf;
    upstream my_server_pool {
        server 192.168.1.109:80 weight=1 max_fails=2 fail_timeout=30;
        server 192.168.1.108:80 weight=2 max_fails=2 fail_timeout=30;
    }
    
    include /etc/nginx/conf.d/h5.conf;
}
```

## 1 样例文件解释

```nginx
# 运行Nginx进程的用户
user nginx;
# Nginx开启的进程数，通常设置成和cpu的数量相等
worker_processes  8;
worker_cpu_affinity auto;
# 也可以指定哪个cpu分配给哪个进程
# worker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000 10000000;

# 定义存储某类型的全局错误的日志位置
# nginx日志分为很多级别 [debug | info | notice | warn | error | crit | alert | emerg]
error_log  /var/log/nginx/error.log  error;
# 指定进程ID（pid）存放的路径 
pid        /var/run/nginx.pid;
# 一个nginx进程打开的最多文件描述符数目，理论值应该是系统的最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n的值保持一致。
worker_rlimit_nofile 65535;

#定义白名单ip列表变量
geo $whiteip_list {     
    default 1;
    127.0.0.1 0;
    192.168.0.167 0;
    192.168.0.48 0;
}

#用map指令映射将白名单列表中客户端请求ip为空串 
map $whiteip_list $limit {
    1 $binary_remote_addr;
    0 "";
}

#当某个IP访问example.com这个域名时，此IP得并发连接超过10，则会报503（Service Temporarily Unavailable），
#表示服务暂时不可用，此时会返回给用户我们事先定义好错误页面。由“limit_conn conn_ip 10;”实现。
limit_conn_zone $limit zone=conn_ip:10m;
#当访问example.com这个域名的连接总数超过1000时，同样会报503，返回定义好的错误页面。
#由“limit_conn conn_server 1000;”实现
limit_conn_zone $limit zone=conn_server:10m;
#当达到最大限制连接数后，记录日志的等级
limit_conn_log_level info;  #[info | notice | warn | error(默认)]
#当超过限制时，返回的状态码（默认是503），code值只能设置在400到599之间
limit_conn_status 503;

#利用令牌桶原理，来限制用户的连接频率
#rate每个IP平均处理的请求频率为每秒一次，此值可以设置成每秒处理请求数或者每分钟处理请求数，但必须是整数。
#所以如果你需要指定每秒处理少于1个的请求，2秒处理一个请求，可以使用 “30r/m”。
limit_req_zone  $limit zone=req_ip:10m rate=10r/s;


events {
    # 使用epoll的I/O模型，用这个模型来高效处理异步事件
    use epoll;
    # 每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为worker_processes*worker_connections。
    worker_connections  20480;
}



http {
    # 引入文件 mime.types，是一个文件扩展名与文件类型的映射表
    include       mime.types;
    # 指定默认MIME类型为二进制字节流(即下载文件)  
    default_type  application/octet-stream;
    # 定义输出日志的格式
    # 1.$remote_addr 与$http_x_forwarded_for(反向代理服务器) 用以记录客户端的ip地址；
    # 2.$remote_user ：用来记录客户端用户名称；
    # 3.$time_local ：用来记录访问时间与时区；
    # 4.$request  ：用来记录请求的url与http协议
    # 5.$status ：用来记录请求状态； 
    # 6.$body_bytes_sent ：记录发送给客户端文件主体内容大小；
    # 7.$http_referer ：用来记录从那个页面链接访问过来的；
    # 8.$http_user_agent ：记录客户端浏览器的相关信息
    # 9.$request_time ：整个请求的总时间
    # 10.$host变量的值按照如下优先级获得：请求行中的host.请求头中的Host头部.与一条请求匹配的server name.
    # 11.$upstream_addr ：后台upstream的地址，即真正提供服务的主机地址，如10.10.10.100:80
    # 12.$upstream_response_time ：请求过程中，upstream响应时间    
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    log_format  prod '$remote_addr|$remote_user|[$time_local]|$request|'
                     '$status|$body_bytes_sent|$http_referer|'
                     '$http_user_agent|$request_time|$host|$upstream_addr|$upstream_response_time';
    
    # 指定access_log的存放路径、格式和缓存大小
    access_log  /var/log/nginx/access.log  prod;
    
    # 指定编码格式，若网页格式与此不同，将被自动转码
    charset  utf-8;
    # 允许nginx使用error_page处理错误信息，传递4xx和5xx错误信息到客户端
    fastcgi_intercept_errors on;
    
    server_names_hash_bucket_size 256;
    client_header_buffer_size 32k;
    large_client_header_buffers 4 128k;

    # 用户认证
    # yum install httpd-tools               #适用centos
    # sudo apt-get install apache2-utils    #适用ubuntu
    # 生成用户密码文件
    # htpasswd -c /data/.htpasswd user1 
    auth_basic  "User Login";
    auth_basic_user_file  /data/.htpasswd;

    # 隐藏nginx版本号
    server_tokens off;
     # sendfile 指令用于指定 Nginx 是否调用Linux 的 sendfile 函数（zero copy 方式）来输出文件，提高文件传输效率 
    sendfile on;
    # 告诉nginx在一个数据包里发送所有头文件，而不一个接一个的发送。就是说数据包不会马上传送出去，等到数据包最大时，一次性的传输出去，这样有助于解决网络堵塞。
    tcp_nopush on;
    # 不缓存data-sends（关闭 Nagle 算法），这个能够提高高频发送小数据报文的实时性
    tcp_nodelay on;
    #支持ssi包含文件
    ssi on;
    ssi_silent_errors on;
#   ssi_types text/html;
    
    # 启用目录浏览
    # autoindex on;
    # 显示出文件的确切／大概大小：on确切大小，单位是bytes；off大概大小，单位是kB或者MB或者GB
    # autoindex_exact_size off;
    # off显示的文件时间为GMT时间，on显示的文件时间为文件的服务器时间
    # autoindex_localtime on; 

     # 指定客户端连接保持活动的超时时间（单位：秒），超过时间，服务器会关闭连接,太短或者太长都不一定合适，当然，最好是根据业务自身的情况来动态地调整该参数
    keepalive_timeout  90;
    client_header_timeout 20;
    client_body_timeout 20;

    # 客户端请求单个文件的最大字节数
    client_max_body_size 200m;
    # 当客户端以POST方法提交一些数据到服务端时，会先写入到client_body_buffer中，如果buffer写满会写到临时文件里，建议调整为128k
    client_body_buffer_size  128k;
    

    #利用令牌桶原理，来限制用户的连接频率
	#rate每个IP平均处理的请求频率为每秒一次，此值可以设置成每秒处理请求数或者每分钟处理请求数，但必须是整数。
	#所以如果你需要指定每秒处理少于1个的请求，2秒处理一个请求，可以使用 “30r/m”。
    limit_req_zone $binary_remote_addr zone=one:10m rate=10000r/s;
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    
    # include /etc/nginx/gzip.conf;
    gzip on;
	gzip_buffers 4 8k;
	gzip_comp_level 6;
	gzip_disable "MSIE [1-6]\.";
	gzip_http_version 1.1;
	gzip_min_length 1000;
	gzip_proxied any;
	gzip_vary on;
	gzip_types text/plain text/css application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json image/jpeg image/gif image/png image/jpg;

    #FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。
    fastcgi_connect_timeout 300;
    fastcgi_send_timeout 300;
    fastcgi_read_timeout 300;
    fastcgi_buffer_size 64k;
    fastcgi_buffers 4 64k;
    fastcgi_busy_buffers_size 128k;
    fastcgi_temp_file_write_size 128k;

    # include /etc/nginx/proxy.conf;
    #反向代理
    # nginx跟后端服务器连接超时时间(代理连接超时)
	proxy_connect_timeout 90;
    # 连接成功后，后端服务器响应时间(代理接收超时)
	proxy_read_timeout 90;
    # 后端服务器数据回传时间(代理发送超时)
	proxy_send_timeout 90;
    # 设置代理服务器（nginx）保存用户头信息的缓冲区大小
	proxy_buffer_size 32k;
    # proxy_buffers缓冲区
	proxy_buffers 4 64k;
    # 高负荷下缓冲大小（proxy_buffers*2）
	proxy_busy_buffers_size 128k;
    # 设定缓存文件夹大小，大于这个值，将从upstream服务器传
    proxy_temp_file_write_size 64k;
    
    
    #反向代理缓存目录
    proxy_cache_path /data/proxy/cache levels=1:2 keys_zone=cache_one:500m inactive=1d max_size=1g;
    #levels=1:2 设置目录深度，第一层目录是1个字符，第2层是2个字符
    #keys_zone:设置web缓存名称和内存缓存空间大小
    #inactive:自动清除缓存文件时间。
    #max_size:硬盘空间最大可使用值。
    #指定临时缓存文件的存储路径(路径需和上面路径在同一分区)
    proxy_temp_path /data/proxy/temp

    # include /etc/nginx/backend.conf;  
    # 负载均衡服务器池
    upstream my_server_pool {
        #调度算法
        #1.轮循（默认）（weight轮循权值）
        #2.ip_hash：根据每个请求访问IP的hash结果分配。（会话保持）
        #3.fair:根据后端服务器响应时间最短请求。（upstream_fair模块）
        #4.url_hash:根据访问的url的hash结果分配。（需hash软件包）
        #参数：
        #down：表示不参与负载均衡
        #backup:备份服务器
        #max_fails:允许最大请求错误次数
        #fail_timeout:请求失败后暂停服务时间。
        server 192.168.1.109:80 weight=1 max_fails=2 fail_timeout=30;
        server 192.168.1.108:80 weight=2 max_fails=2 fail_timeout=30;
    }
    
    include /etc/nginx/conf.d/h5.conf;
    # 虚拟主机定义
    server {
        # 监听端口
        listen       80; 
        #listen     443;
        # 访问域名
        server_name  example.com;

        # 编码格式，若网页格式与此不同，将被自动转码
        #charset utf-8;

        # 虚拟主机访问日志定义
        #access_log  logs/host.access.log  main;

        # 申请的证书zip包中一般含有如下三个文件：
        # SSL 凭证(例如: ssl_certificate.crt,或称最终实体凭证, 公钥凭证或身份验证凭证)
        # 中继CA凭证(例如: IntermediateCA.crt, 或称信任链凭证或SSL凭证的签名者/发行人)
        # 私钥文件(例如: private.key, 生成凭证签章要求(CSR)的时候建立的)
        #
        # nginx的配置特殊地方: 需要合并SSL凭证和中继CA凭证, 即:
        #   cat ssl_certificate.crt IntermediateCA.crt >> your_domain_name.crt
        # 注意：-----END CERTIFICATE----------BEGIN CERTIFICATE-----需要调整为：
        #   -----END CERTIFICATE-----
        #   -----BEGIN CERTIFICATE-----
        # 否则启动时出错，即SSL: error:0906D066:PEM routines:PEM_read_bio:bad end line
        #
        ssl on;  
        #虚拟主机的证书文件  
        ssl_certificate /etc/ssl/your_domain_name.crt; #合并SSL凭证和中继CA凭证的文件
        #虚拟主机私钥文件  
        ssl_certificate_key /etc/ssl/your_domain_name.key; #私钥文件

        # 匹配URL
        location / {
            # 定义默认网站根目录位置
            root   html;
            # 定义首页索引文件的名称，按以下顺序匹配
            index  index.html index.htm index.php;

            #反向代理缓存设置命令(proxy_cache zone|off,默认关闭所以要设置)
            proxy_cache cache_one;
            #对不同的状态码缓存不同时间
            proxy_cache_valid 200 304 12h;
            #设置以什么样参数获取缓存文件名
            proxy_cache_key $host$uri$is_args$args;
            #后7端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr; 
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            #nginx反向代理隐藏响应头，多个代理情况下也可以写到http段里面
            proxy_hide_header X-Application-Context;
            #代理设置
            proxy_pass   http://my_server_pool; 
            #文件过期时间控制
            expires    1d;

            #限制某个IP来源的连接并发数，此处为10个
            limit_conn conn_ip 10;
            #限制某个虚拟服务器的总连接数，此处为1000个
            limit_conn conn_server 1000;
            #限制带宽, 每个连接只允许最大5kb/s的速度进行下载
            limit_rate 5k;

            #burst=5这个配置的意思是设置一个大小为5的缓冲区，当有大量请求（爆发）过来时，
            #超过了访问频次限制的请求可以先放到这个缓冲区内，如果此缓冲区也满了则会返回503
            #nodelay 如果设置此参数，超过访问频次而且缓冲区也满了的时候就会直接返回503，如果没有设置，则所有请求会等待排队
            limit_req zone=req_ip burst=5;
            #limit_req zone=req_ip burst=5 nodelay;
        }

        location /download {
            #限制IP访问
            deny 192.168.0.2；
            allow 192.168.0.0/24;
            allow 192.168.1.1;
            deny all;
        }

        #静态文件，nginx自己处理
        location ~ ^/(images|javascript|js|css|flash|media|static)/ {
            access_log off;  #关闭access_log，即不记录访问日志
            #过期30天，静态文件不怎么更新，过期可以设大一点，
            #如果频繁更新，则可以设置得小一点。
            expires 30d;
        }

        # 发生 404 错误时返回 404.html页面
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        # 发生 50x 错误时使用 50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # 将 PHP 脚本请求全部转发给 FastCGI（127.0.0.1:9000）处理
        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        location ~ \.php$ {
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            # 引入文件，fastcgi的默认配置参数
            include        fastcgi_params;
        }
    }
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

## 3 Module ngx_http_gzip_module

该`ngx_http_gzip_module`模块是一个使用“gzip”方法压缩响应的过滤器。这通常有助于将传输数据的大小减少一半甚至更多。

> 使用SSL / TLS协议时，压缩的响应可能会受到 [BREACH](https://en.wikipedia.org/wiki/BREACH)攻击。

在实际的应用中我们发现压缩的比率往往在 3 到 10 倍，也就是本来 50k 大小的页面，采用压缩后实际传输的内容大小只有 5 至 15k 大小，这可以大大节省服务器的网络带宽，同时如果应用程序的响应足够快时，网站的速度瓶颈就转到了网络的传输速度上，因此内容压缩后就可以大大的提升页面的浏览速度。

### 3.1 Example Configuration

```
gzip on;
gzip_buffers 4 8k;
gzip_comp_level 6;
gzip_disable "MSIE [1-6]\.";
gzip_http_version 1.1;
gzip_min_length 1000;
gzip_proxied any;
gzip_vary on;
gzip_types text/plain text/css application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json image/jpeg image/gif image/png image/jpg;
```

### 3.2 Directives

**gzip**

```
Syntax:	gzip on | off;
Default: gzip off;
Context:	http, server, location, if in location
```

启用或禁用gzipping响应。

**gzip_buffers**

```
Syntax:	gzip_buffers number size;
Default: gzip_buffers 32 4k|16 8k;
Context:	http, server, location
```

设置用于压缩响应的缓冲区`*number*`和`*size*`。默认情况下，缓冲区大小等于一个内存页面。这是4K或8K，具体取决于平台。

**gzip_comp_level**

```
Syntax:	gzip_comp_level level;
Default: gzip_comp_level 1;
Context:	http, server, location
```

设置`level`响应的gzip压缩。可接受的值范围为1到9。

推荐6压缩级别(级别越高,压的越小,越浪费CPU计算资源)

**gzip_disable**

```
Syntax:	gzip_disable regex ...;
Default: —
Context:	http, server, location
```

对具有与任何指定正则表达式匹配的“User-Agent”标头字段的请求禁用gzipping响应。

特殊掩码“ `msie6`”（0.7.12）对应于正则表达式“ `MSIE [4-6]\.`”，但效果更快。

**gzip_http_version**

```
Syntax:	gzip_http_version 1.0 | 1.1;
Default: gzip_http_version 1.1;
Context:	http, server, location
```

设置压缩响应所需的最低HTTP请求版本。

99.99%的浏览器基本上都支持gzip解压了，所以可以不用设这个值,保持系统默认即可。

**gzip_min_length**

```
Syntax:	gzip_min_length length;
Default: gzip_min_length 20;
Context:	http, server, location
```

设置将被gzip压缩的响应的最小长度。长度仅由“Content-Length”响应头字段确定。

**gzip_proxied**

```
Syntax:	gzip_proxied off | expired | no-cache | no-store | private | no_last_modified | no_etag | auth | any ...;
Default: gzip_proxied off;
Context:	http, server, location
```

根据请求和响应启用或禁用对代理请求的响应的gzipping。请求被代理的事实由“Via”请求头字段的存在确定。该指令接受多个参数：

* `off`：禁用所有代理请求的压缩，忽略其他参数;
* `expired`：如果响应头包含“Expires”字段，其值为禁用缓存，则启用压缩;
* `no-cache`：如果响应头包含带有“ `no-cache`”参数的“Cache-Control”字段，则启用压缩;
* `no-store`：如果响应头包含带有“ `no-store`”参数的“Cache-Control”字段，则启用压缩;
* `private`：如果响应头包含带有“ `private`”参数的“Cache-Control”字段，则启用压缩;
* `no_last_modified`：如果响应头不包含“Last-Modified”字段，则启用压缩;
* `no_etag`：如果响应头不包含“ETag”字段，则启用压缩;
* `auth`：如果请求标头包含“授权”字段，则启用压缩;
* `any`：为所有代理请求启用压缩。

**gzip_types**

```
Syntax:	gzip_types mime-type ...;
Default:	
gzip_types text/html;
Context:	http, server, location
```

除了“ `text/html`” 之外，还允许对指定的MIME类型进行gzipping响应。特殊值“ `*`”匹配任何MIME类型。

> 图片类型的文件压缩比例很小，可以不忽略不计，所以图片不建议压缩

**gzip_vary**

```
Syntax:	gzip_vary on | off;
Default:	
gzip_vary off;
Context:	http, server, location
```

如果指令[gzip](http://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip)， [gzip_static](http://nginx.org/en/docs/http/ngx_http_gzip_static_module.html#gzip_static)或[gunzip](http://nginx.org/en/docs/http/ngx_http_gunzip_module.html#gunzip) 处于活动状态， 则启用或禁用插入“Vary：Accept-Encoding”响应头字段 。

### 3.3 常见问题

**调用接口时，返回json乱码的问题**

原因：

gzip是nginx的压缩格式。（gzip是浏览器可接受的压缩格式） 但是我们调用接口并没有通过浏览器。所以没有办法对返回的结果进行解压。

解决办法：

* 在响应的`location`中关闭gzip
* 或者让后端改代码，增加判断，然后用gzip流的方式进行解压读取

## 4 location模块

匹配模式及顺序

```
location = /uri 　　　=开头表示精确匹配，只有完全匹配上才能生效。
location ^~ /uri 　　^~ 开头对URL路径进行前缀匹配，并且在正则之前。非正则匹配
location ~ pattern 　~开头表示区分大小写的正则匹配。!~为区分大小写不匹配的正则
location ~* pattern 　~*开头表示不区分大小写的正则匹配。!~*为不区分大小写不匹配的正则
location /uri 　　　　不带任何修饰符，也表示前缀匹配，但是在正则匹配之后。
location / 　　　　　通用匹配，任何未匹配到其它location的请求都会匹配到，相当于switch中的default。
```

注意：
前缀匹配，如果有包含关系时，按最大匹配原则进行匹配。比如在前缀匹配：location /dir1与location /dir1/dir2，如有请求http://localhost/dir1/dir2/file将最终匹配到location /dir1/dir2

优先级：
(location =) > (location 完整路径) > (location ^~ 路径) > (location ~,~* 正则顺序) > (location 部分起始路径) > (/)

## 5 rewrite指令

rewrite功能就是，使用nginx提供的全局变量或自己设置的变量，结合正则表达式和标志位实现url重写以及重定向。
rewrite只能放在server{},location{},if{}中，并且只能对域名后边的除去传递的参数外的字符串起作用，
例如 http://seanlook.com/a/we/index.php?id=1&u=str 只对/a/we/index.php重写。
语法rewrite regex replacement [flag] 。执行顺序是：

```
1.执行server块的rewrite指令
2.执行location匹配
3.执行选定的location中的rewrite指令
```

rewrite指令的最后一项参数为flag标记，支持flag标记有：

```
1.last  相当于apache里面的[L]标记，浏览器地址栏URL地址不变。若不指明last或者break，默认是last。
    会转到匹配新的location，其他的rewrite语句和其他语句不会执行
2.break  本条规则匹配完成后，继续完成本location中非rewrite的语句，而不跳转到新的location，
    浏览器地址栏URL地址不变
3.redirect  返回302临时重定向，浏览器地址会显示跳转后的URL地址。
4.permanent  返回301永久重定向， 浏览器地址会显示跳转后的URL地址。
```

因为301和302不能简单的只返回状态码，还必须有重定向的URL，这就是return指令无法返回301, 302的原因了。
这里last和break区别有点难以理解：

```
last 一般写在server和if中，而break一般使用在location中
last 不终止重写后的url匹配，即新的url会再从server走一遍匹配流程，而break终止重写后的匹配
break和last 都能组织继续执行后面的rewrite指令
```

例如：

```
server {
   listen 80 default_server;
   server_name example.com;
   root www;

   location /break/ {
       rewrite ^/break/(.*) /test/$1 break;
       echo "break page";
   } 

   location /last/ {
        rewrite ^/last/(.*) /test/$1 last;
        echo "last page";
   }    

   location /test/ {
      echo "test page";
   }
}
```

请求1：http://example.com/break/***，输出"break page”
请求2：http://example.com/last/***，输出"test page”

## 6 if判断指令

语法为 if(condition) {…}，对给定的条件 condition 进行判断。如果为真，大括号内的 rewrite 指令将被执行，
if 条件(conditon)可以是如下任何内容：

```
当表达式只是一个变量时，如果值为空或任何以 0 开头的字符串都会当做 false
直接比较变量和内容时，使用 = 或 !=
~ 正则表达式匹配，~* 不区分大小写的匹配，!~ 区分大小写的不匹配
-f 和 !-f 用来判断是否存在文件
-d 和 !-d 用来判断是否存在目录
-e 和 !-e 用来判断是否存在文件或目录
-x 和 !-x 用来判断文件是否可执行
```

## 7 全局变量

```
$args ： #这个变量等于请求行中的参数，同$query_string
$content_length ： 请求头中的Content-length字段。
$content_type ： 请求头中的Content-Type字段。
$document_root ： 当前请求在root指令中指定的值。
$host ： 请求主机头字段，否则为服务器名称。
$http_user_agent ： 客户端agent信息
$http_cookie ： 客户端cookie信息
$limit_rate ： 这个变量可以限制连接速率。
$request_method ： 客户端请求的动作，通常为GET或POST。
$remote_addr ： 客户端的IP地址。
$remote_port ： 客户端的端口。
$remote_user ： 已经经过Auth Basic Module验证的用户名。
$request_filename ： 当前请求的文件路径，由root或alias指令与URI请求生成。
$scheme ： HTTP方法（如http，https）。
$server_protocol ： 请求使用的协议，通常是HTTP/1.0或HTTP/1.1。
$server_addr ： 服务器地址，在完成一次系统调用后可以确定这个值。
$server_name ： 服务器名称。
$server_port ： 请求到达服务器的端口号。
$request_uri ： 包含请求参数的原始URI，不包含主机名，如：”/foo/bar.php?arg=baz”。
$uri ： 不带请求参数的当前URI，$uri不包含主机名，如”/foo/bar.html”。
$document_uri ： 与$uri相同。
```