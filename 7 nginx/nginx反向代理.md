编译添加模板

--with-http_sub_module

是一个过滤器，响应内容进行替换

--with-http_realip_module

获取真实ip

--with-pcre

rewrite支持正则表达式

ngx_cache_purge-master

nginx反向大力支持缓存

location中

```
proxy_redirect
proxy_set_header Host
proxy_set_header X-Real-IP
proxy_set_header X-Forwarded-For
expires
```

```
down
weight
max_fails
fail_timeout
backup
```

web应用压测