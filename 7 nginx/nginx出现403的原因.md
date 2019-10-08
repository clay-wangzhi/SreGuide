## 由于启动用户和nginx工作用户不一致所致

查看nginx的启动用户，发现是nobody，而为是用root启动的

```
ps aux | grep "nginx: worker process" | awk'{print $1}'
```

将nginx.config的user改为和启动用户一致，

```
#vim nginx.conf
user root;
```

## 缺少index.html

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

## 权限问题

如果nginx没有web目录的操作权限，也会出现403错误。

解决办法：修改web目录的读写权限，或者是把nginx的启动用户改成目录的所属用户，重启Nginx即可解决

```
chmod -R 777 /data
chmod -R 777 /data/www/
```

## SELinux设置问题

设置为：`SELINUX=disabled`

>转载链接：https://blog.csdn.net/qq_35843543/article/details/81561240

