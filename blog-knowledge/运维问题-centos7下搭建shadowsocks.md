---
title: centos7下搭建shadowsocks
tag: 运维常见问题
abbrlink: e80899e1
date: 2017-08-25 21:00:00
---

centos7下搭建shadowsocks

<!--more-->

## 安装pip

由于安装的是python 版本的 shadowsocks，所以首先安装pip

```
$ curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
$ python get-pip.py
```

## 安装shadowsocks

```
$ pip install --upgrade pip
$ pip install shadowsocks
```

## 创建配置文件

创建文件所在目录:/etc

```
#创建文件命令,
$ vi /etc/shadowsocks.json
#若进入了etc目录
$ vi shadowsocks.json
```

配置文件内容：

```
单端口：
 {
 "server":"0.0.0.0",            --服务器IP，直接用0.0.0.0也可
 "server_port":8888,            --端口端口
 "local_address": "127.0.0.1",  --本地地址，可省略
 "local_port":1080,             --本地端口，可省略
 "password":"password",         --密码
 "timeout":300,                 --超时时间，可省略
 "method":"aes-256-cfb",        --加密策略，有多重策略，具体自查
}
多端口：
{
    "server":"0.0.0.0",
    "local_address":"127.0.0.1",
    "local_port":1080,
    "port_password":{           --每个端口对应一个密码
        "1111":"password1",
        "1112":"password2",
        "1113":"password3"
    },
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open":false
}
```

## 启动shadowsocks

```
#启动
ssserver -c /etc/shadowsocks.json -d start
#停止
ssserver -c /etc/shadowsocks.json -d stop
#重启
ssserver -c /etc/shadowsocks.json -d restart
```

启动成功即可通过ss客户端使用。
在window端可以在控制台通过以下命令查看端口是否打开

```
telnet {ip} {potr}
```

## 配置自启动

新建启动脚本文件/etc/systemd/system/shadowsocks.service，内容如下：

```
[Unit]
Description=Shadowsocks

[Service]
TimeoutStartSec=0
ExecStart=/usr/bin/ssserver -c /etc/shadowsocks.json

[Install]
WantedBy=multi-user.target
```

通过以下命令注册，启动服务

```
$ systemctl enable shadowsocks
$ systemctl start shadowsocks
```

启动后可以查看服务状态

```
$ systemctl status shadowsocks -l
```

若启动成功：

```
● shadowsocks.service - Shadowsocks
   Loaded: loaded (/etc/systemd/system/shadowsocks.service; enabled; vendor preset: disabled)
   Active: active (running) since Sun 2017-08-13 18:03:41 CST; 1h 29min ago
 Main PID: 9567 (ssserver)
   CGroup: /system.slice/shadowsocks.service
           └─9567 /usr/bin/python2 /usr/bin/ssserver -c /etc/shadowsocks.json
```

## firewalld防火墙

centos7用的firewalld，若不进行设置，可能会导致SS无法使用
这部分规则可以通过阿里云安全组添加，也可以直接通过代码添加，这里介绍直接添加规则方法

```
# 开放端口
$ firewall-cmd --permanent --add-port=18381-18385/tcp 
# 修改规则后需要重启
$ firewall-cmd --reload 
```

转载链接：https://segmentfault.com/a/1190000010639190