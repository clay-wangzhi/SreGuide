## 1 配置块的嵌套

```nginx
http {
    upstream {...}
    split_clients {...}
    map {...}
    geo {...}
    server {
        if () {...}
        location {
            limit_except {...}
        }
        location {
            location {
                
            }
        }
    }
    server {
    }
}
```

## 2 指令的合并

* 值指令：存储配置项的值
  * 可以合并
  * 示例：root，access_log，gzip
* 动作类指令：指定行为
  * 不可以合并
  * 示例：rewrite，proxy_pass
  * 生效阶段：server_rewrite阶段，rewrite阶段，content阶段

**存储值的指令继承规则：向上覆盖**

* 子配置不存在时，直接使用父配置块
* 子配置存在时，直接覆盖父配置块

```nginx
server {
    listen 8080;
    root /home/geek/nginx/html;
    access_log logs/geek.access.log main;
    location /test {
        root /home/geek/nginx/test;
        access_log logs/access.test.log main;
    }
    location /dlib {
        alias dlib/;
    }
    location / {
    }
}
```

## 3 HTTP请求处理时的11个阶段

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317095602291.png)

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317095641772.png)

## 4 正则表达式

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317093833697.png)

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317094000335.png)

## 5 提取用户真实ip

如何拿到真实的用户ip地址？

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317095930682.png)

拿到真实用户ip后如何使用？

基于变量：如binary_remote_addr、remote_addr这样的变量，其值就为真实的IP！这样做连接限制（limit_conn模块）才有意义！

**步骤**

1. 安装realip模块

   realip是Nginx内置模块，需要在编译Nginx时加上`--with-http_realip_module`参数来启用它。

2. 配置语法

   ```
   set_real_ip_from 192.168.1.0/24; #真实服务器上一级代理的IP地址或者IP段,可以写多行。
   set_real_ip_from 192.168.2.1;
   real_ip_header X-Forwarded-For;  #从哪个header头检索出要的IP地址。
   real_ip_recursive on; #递归的去除所配置中的可信IP。
   ```

   这里详细讲下`real_ip_recursive`的用途：递归的去除所配置中的可信IP，排除set_real_ip_from里面出现的IP。如果出现了未出现这些IP段的IP，那么这个IP将被认为是用户的IP。

3. 配置实例

   ```nginx
   location / {
       root html/;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       set_real_ip_from 192.168.1.0/24;
       set_real_ip_from 192.168.2.1;
       real_ip_header X-Forwarded-For;
       real_ip_recursive on;
   }
   ```

## 6 定义404错误页面

### 6.1 Nginx自己的错误页面

Nginx访问一个静态的html 页面，当这个页面没有的时候，Nginx抛出404，那么如何返回给客户端404呢？

看下面的配置，这种情况下不需要修改任何参数，就能实现这个功能。

```nginx
server {
    listen 80;
    server_name www.test.com;
    root /var/www/test;
    index index.html index.htm;
    location / {
        
    }
    # 定义错误页面码，如果出现相应的错误页面码，转发到那里。
    error_page 404 403 500 502 503 504 /404.html;
    # 承接上面的location
    location = /404.html {
        # 放错误页面的目录路径。
        root /usr/share/nginx/html;
    }
}
```

### 6.2 反向代理的错误页面

如果后台Tomcat处理报错抛出404，想把这个状态叫Nginx反馈给客户端或者重定向到某个连接，配置如下：

```nginx
upstream www {
    server 192.168.1.201:8080 weight=20 max_fails=2 fail_timeout=30s
        ip_hash;
}
server {
    listen 80;
    server_name www.test.com;
    root /var/www/test;
    index index.html;
    location / {
        if($request_uri ~* '^/$') {
            rewrite .* http://www.test2.com/index.html redirect;
        }
        # 关键参数：这个变量开启后，我们才能自定义错误页面，当后端返回404，nginx拦截错误，定义错误页面
        proxy_intercept_errors on;
        proxy_pass http://www;
        proxy_set_header HOST $host;
    }
    error_page 404 /404.html;
    location = /404.html {
        root /usr/share/nginx/html;
    }
}
```

### 6.3 Nginx解析php代码的错误页面

如果后端是php解析的，需要加一个变量

在http段中加一个变量

`fastcgi_intercept_errors on`就可以了。

>参考链接：
>
>https://www.hi-linux.com/posts/53006.html
>
>https://blog.csdn.net/lijunwyf/article/details/79611003