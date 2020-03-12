nginx指定文件路径有两种方式root和alias，

root与alias主要区别在于nginx如何解释location后面的uri，

这会使两者分别以不同的方式将请求映射到服务器文件上。



# 最基本的区别

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

> 转载链接：https://www.cnblogs.com/my_life/articles/7070805.html