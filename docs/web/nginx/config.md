---
date: 2020-03-20
category: web中间件
tag:
  - Nginx
---

# 3. nginx配置文件详解

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
    client_header_timeout 10;
    client_body_timeout 20;
    
    client_max_body_size 200m;
    client_body_buffer_size  128k;

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
    # 客户端向服务端发送一个完整的 request header 的超时时间。如果客户端在指定时间内没有发送一个完整的 request header，Nginx 返回 HTTP 408（Request Timed Out）。
    client_header_timeout 10;
    # 指定客户端与服务端建立连接后发送 request body 的超时时间。如果客户端在指定时间内没有发送任何内容，Nginx 返回 HTTP 408（Request Timed Out）。
    client_body_timeout 20;

    # 客户端请求单个文件的最大字节数,这个参数的设置限制了上传文件的大小。
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
    
    # 指明包含进来的其他配置文件
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
        # 支持ssl协议版本
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        # 客户端一侧的连接可以复用ssl session cache中缓存 的ssl参数的有效时长；
		ssl_session_timeout 5m;
        # 指定支持加密算法；
        ssl_ciphers AESGCM:ALL:!DH:!EXPORT:!RC4:+HIGH:!MEDIUM:!LOW:!aNULL:!eNULL;
        # 服务端倾向使用的加密算法；
   		ssl_prefer_server_ciphers on;



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

## 2 全局变量

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



>  参考链接：
>
>  https://jasonhzy.github.io/2017/09/03/nginx/
>
>  https://blog.csdn.net/tzy233/article/details/79780444
>
>  https://blog.csdn.net/Powerful_Fy/article/details/102845921
>
>  https://www.linuxidc.com/Linux/2018-01/150100.htm
>
>  https://www.jianshu.com/p/73e2cd39722c
>
>  https://www.cnblogs.com/my_life/articles/7070805.html
>
>  https://www.jianshu.com/nb/27610173
>
>  http://nginx.org/en/docs/http/ngx_http_core_module.html#variables
>
>  http://nginx.org/en/docs/

