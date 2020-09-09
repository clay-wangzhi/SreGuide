引起`nginx 403 forbidden`通常是三种情况：一是缺少主页文件，二是权限问题，三是`SELinux`状态。

## 缺少主页文件

```nginx
server {
    listen 80;
    server_name localhost;
    index index.php index.html;
    # index index.html index.htm;
    root /clay/clay1/clay2/;
}
```

如果在`/clay/clay1/clay2/`下面没有`index.php`或`index.html`的时候，直接文件，会报403 forbidden。

> 当index文件问`index.html`时，index指令可以省略不写

## 权限问题

主要原因是`nginx`启动用户没有，查看主页文件的权限

1）查看`nginx`启动用户

```shell
ps aux | grep "nginx: worker process" | grep -v "grep" | awk '{ print $1 }'
```

2）查看主页文件权限及递归查看主页文件所在目录权限

* 主页文件，`nginx`启动用户要有`r`权限，读取文件内容的权限

* 递归主页所在的目录，`nginx`启动用户要有`x`权限，可以访问目录的内容

  > 递归目录在上述配置文件中是指`/clay/`、`/clay/clay1/`、`/clay/clay1/clay2/`这三个目录

## `SELinux`为开启状态(enabled)

1）查看当前`selinux`的状态

```shell
/usr/sbin/sestatus 
```

2）将`SELINUX=enforcing` 修改为 `SELINUX=disabled` 状态

```shell
vi /etc/selinux/config

#SELINUX=enforcing
SELINUX=disabled
```

3）重启生效

```shell
reboot
```
