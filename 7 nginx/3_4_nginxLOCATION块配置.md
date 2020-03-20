## 1 匹配模式优先级

![](images/image-20200320195331145.png)

```
location = /uri 　　　=开头表示精确匹配，只有完全匹配上才能生效。
location ^~ /uri 　　^~ 开头对URL路径进行前缀匹配，并且在正则之前。无正则普通匹配（^ 表示“非”，~ 表示“正则”，字符意思是：不要继续匹配正则）
location ~ pattern 　~开头表示区分大小写的正则匹配。!~为区分大小写不匹配的正则
location ~* pattern 　~*开头表示不区分大小写的正则匹配。!~*为不区分大小写不匹配的正则
location /uri 　　　　不带任何修饰符，也表示前缀匹配，但是在正则匹配之后。
location / 　　　　　通用匹配，任何未匹配到其它location的请求都会匹配到，相当于switch中的default。
```

注意：
前缀匹配，如果有包含关系时，按最大匹配原则进行匹配。比如在前缀匹配：location /dir1与location /dir1/dir2，如有请求http://localhost/dir1/dir2/file将最终匹配到location /dir1/dir2

优先级：
(location =) > (location 完整路径) > (location ^~ 路径) > (location ~,~* 正则顺序) > (location 部分起始路径) > (/)

> 上述的优先级不完全正确

具体规则：

等号类型（=）的优先级最高。一旦匹配成功，则不再查找其他location的匹配项

剩下的几种匹配优先级略复杂，具体可以参考Nginx文档（http://nginx.org/en/docs/http/ngx_http_core_module.html#location）

* ^~和普通匹配。

  使用前缀匹配，不支持正则表达式，如果有多个location匹配成功的话，不会终止匹配过程，会记忆表达式最长的那个。

* 如果上一步得到的最长的location为^~类型，则表示阻断正则表达式，不再匹配正则表达式

* 如果上一步得到的最长的location不是^~类型，继续匹配正则表达式，只要有一个正则成功，则使用这个正则的location，立即返回结果，并结束解析过程

**“最长”命中**

^~和普通命中，都是优先使用匹配最长的结果，示例如下：

**例子1**

```nginx
location /test_1 {
    return 400;
}
location ^~ /test {
    return 401;
}
```

如上如果path为/test_1，返回的是400，说明^~优先级并不比普通匹配高

**例子2**

```nginx
location /test_1 {
    return 400;
}
location ^~ /test {
    return 401;
}
location ~ /test {
    return 402;
}
```

如上如果path为/test_1，返回的是402，此时^~和普通匹配只记住了最长一个location /test_1，不会阻止正则

如果path为/test，返回401，此时^~和普通匹配只记住了最长一个location ^~ /test，会阻止正则

## 2 路径替换

**规则**

配置proxy_pass时，可以实现URL路径的部分替换。

proxy_pass的目标地址，默认不带/，表示只代理域名，url和querystring部分不会变（把请求的path拼接到proxy_pass目标域名之后作为代理的URL）。

如果在目标地址后增加/，则表示把path中location匹配成功的部分剪切掉之后再拼接到proxy_pass目标地址。

比如请求 /a/b.html

```nginx
location /a {
    proxy_pass http://server;
}
```

```nginx
location /a/ {
    proxy_pass http://server/;
}
```

如上两个匹配成功后，实际代理的目标url分别是

http://server/a/b.html (把/a/b.html拼接到http://server之后)

http://server/b.html (把/a/b.html的/a/去掉之后，拼接到http://server/之后)

> 通过 Nginx Server 访问 `http://nginx/nginx_location/some/path`
>
> `proxy_pass`直接映射到主机的 `/test`
>
> 建议location和proxy_pass后面都加上/，否则容易引起混乱。
>
> | location           | proxy_pass            | 实际访问目标                   |
> | ------------------ | --------------------- | ------------------------------ |
> | `/nginx_location/` | `http://server/test/` | `http://server/test/some/path` |

**要求**

注意的是，对于location为正则表达式的匹配，proxy_pass的目标地址不可以带/

比如，如下配置会报错：

```nginx
location ~ /abc(.*) {
    proxy_pass   http://127.0.0.1/;
}
```

如果是正则表达式，想要实现proxy_pass的路径替换，可以使用如下方式：

```nginx
location ~ /abc(.*) {
    proxy_pass   http://127.0.0.1/$1;
}
```

## 3 root和alias的使用

nginx指定文件路径有两种方式root和alias，

root与alias主要区别在于nginx如何解释location后面的uri，

这会使两者分别以不同的方式将请求映射到服务器文件上。

### 3.1 最基本的区别

alias 指定的目录是准确的，给location指定一个目录。

root 指定目录的上级目录，并且该上级目录要含有locatoin指定名称的同名目录。

以root方式设置资源路径：

```
语法: root path;
配置块: http、server、location、if
```

以alias 方式设置资源路径

```
语法: alias path;
配置块: location
```

Example:

```
location /img/ {
	alias /var/www/image/;
}
#若按照上述配置的话，则访问/img/目录里面的文件时，ningx会自动去/var/www/image/目录找文件
location /img/ {
	root /var/www/image;
}
#若按照这种配置的话，则访问/img/目录下的文件时，nginx会去/var/www/image/img/目录下找文件
```


注意： 

```
1.使用alias时，目录名后面一定要加”/“。
2.使用alias标签的目录块中不能使用rewrite的break。
3.alias在使用正则匹配时，必须捕捉要匹配的内容并在指定的内容处使用。
4.alias只能位于location块中
```

所以使用nginx设置root时要注意一个问题，就是如果该root设置的前端目录不是根目录，那么在写root的绝对地址时，要把前端目录的部分省略掉。
我们用设置虚拟目录指向的alias来和root比较一下就非常明显了

```
location /abc/ {   alias /home/html/abc/; }  
```

在这段配置下，http://test/abc/a.html就指定的是 /home/html/abc/a.html。这段配置亦可改成

```
location /abc/ {   root /home/html/;} 
```

可以看到，使用root设置目录的绝对路径时，少了/abc,也就是说，使用root来设置前端非根目录时，nginx会组合root和location的路径,即 /home/html/abc/。

## 4 try_files指令

```
Syntax:	try_files file ... uri;
try_files file ... =code;
Default:	—
Context:	server, location
```

**示例**

```nginx
try_files $uri $uri/ /test/;
```

功能：依次试图访问多个url对应的文件（由root或者alias指令指定），当文件存在是直接返回文件内容，如果所有文件都不存在，则按最后一个URL结果或者code返回