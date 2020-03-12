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