`nginx`中`location`的匹配模式有以下几种：

* 精确匹配：以`=`开头，只有完全匹配才能生效，例子`location = /uri`
* 非正则匹配：以`^~`开头，`^`表示非、`~`表示正则，例子`location ^~ /uri`
* 正则匹配：
  * 以`~`开头，表示区分大小写的正则匹配，例子`location ~ pattern`
  * 以`!~`开头，表示区分大小写不匹配的正则，例子`location !~ pattern`
  * 以`~*`开头，表示不区分大小写的正则匹配，例子`location ~* pattern`
  * 以`!~*`开头，表示不区分大小写不匹配的正则，例子`location !~* pattern`

* 普通匹配：不带任何修饰符，例子`location /uri`、`location /`

> 我们暂且把非正则匹配和普通匹配称为前缀匹配

![nginx中location匹配流程图](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nginx中location匹配流程图.png)