---
icon: tomcat
date: 2020-03-08
category: web中间件
tag:
  - Tomcat
---


# Tomcat 学习笔记



Hello everyone, let's learn tomcat together！

### Tomcat的开幕式

Tomcat以Java编写

#### 安装Tomcat

官网地址为：https://tomcat.apache.org

各个版本的下载地址为：https://archive.apache.org/dist/tomcat/

安装方式

二进制文件（文件为tar.gz）

```
wget https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.23/bin/apache-tomcat-8.5.23.tar.gz
tar -xvf apache-tomcat-8.5.23.tar.gz
```

需提前配置好jdk的环境变量，jdk配置详见上一章节

#### Tomcat启动、停止、重启

主要用到的脚本有

catalina.sh、shutdown.sh、startup.sh、version.sh

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/tomcat1.png)

catalina是tomcat的主要脚本，它会执行java命令以调用Tomcat的启动或停止等

shutdown是停止tomcat脚本

startup是启动tomcat脚本

version是查看tomcat的版本信息

- 常用的catalina脚本启动参数

	config [server.xml file]	  指定另一个server.xml配置文件。默认是使用驻留在$CATALINA_BASE/conf目录中的server.xml

	help					输出命令行选项摘要表

	ebug					以调试模式启动tomcat

	tart					启动tomcat，并将标准输出与错误送至tomcat的日志文件

	top					停止tomcat

	ersion 					输出tomcat的版本信息

#### 安装后的测试

当安装以及启动tomcat后，测试是否成功启动，可以访问网页进行测试，默认端口为8080

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/tomcat2.png)



### 配置tomcat

#### 从8080改变端口号

把机器上目的地为80端口的所有连接需重定向到8080端口的信息通知给内核。

```
iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080
iptables -t nat -I OUTPUT -p tcp --dport 80 -j REDIRECT --to-ports 8080
```

