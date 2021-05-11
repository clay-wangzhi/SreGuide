---
category: 常见服务的搭建
tags:
  - rabbitmq
---

# centos7安装rabbitmq-3.7.9

安装方式：rpm包安装

系统版本: centos7.x

## 安装erlang

安装[erlang-rpm](https://github.com/rabbitmq/erlang-rpm)包，该包经过RabbitMQ官方处理，去掉了一些无用的依赖，只保存运行RabbitMQ所需要的Erlang模块。

这里下载的版本为21.2

![](images/erlang.png)

下载完后上传到服务器上，安装

```
yum -y install erlang-21.2-1.el7.centos.x86_64.rpm
```

## 安装rabbitmq

从官网下载rpm包并上传到服务器上。[官方下载链接](http://www.rabbitmq.com/install-rpm.html#install-monolithic-from-esl-repository)

![](images/rabbitmq.png)

导入签名

```
rpm --import https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc
```

安装

```
yum install rabbitmq-server-3.7.9-1.el7.noarch.rpm -y
```

## 启动rabbitmq

设置开机启动

```
systemctl enable rabbitmq-server.service
```

启动rabbitmq

```
systemctl start rabbitmq-server.service
```

停止rabbitmq

```
systemctl stop rabbitmq-server.service
```

## 配置rabbitmq

拷贝默认配置文件

```
cp /usr/share/doc/rabbitmq-server-3.7.9/rabbitmq.config.example /etc/rabbitmq/rabbitmq.config
```

开启管理后台

```
rabbitmq-plugins enable rabbitmq_management
```

开放防火墙端口

` vim /etc/sysconfig/iptables`增加下面两行

```
-A INPUT -m state --state NEW -m tcp -p tcp --dport 5672 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 15672 -j ACCEPT
```

重启防火墙

```
systemctl restart iptables.service
```

配置用户权限，增加一个用户

```
systemctl start rabbitmq-server.service
rabbitmqctl add_user admin admin
```

赋予用户管理员角色

```
rabbitmqctl set_user_tags admin administrator
```

访问页面，http://ip:15672

![](images/rabbitmq_web.png)