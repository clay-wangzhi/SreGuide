---
category: 常见服务的搭建
tag:
  - jdk
---

# Linux下配置jdk的环境变量

Hello everyone, let's learn jdk together！

### yum安装

yum 查询可以安装的软件

```
yum list | grep jdk
```

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/jdk1.png)

根据需求选择版本进行安装

```
yum -y install java-1.8.0-openjdk* 
```

### rpm安装

jdk官网地址为：http://www.oracle.com

各个版本的下载地址为：http://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html   （网页会变，请自动百度，当前日期：2018-03-06）

根据需求下载rpm版本  （必须有oracle账号进行登录）

```
wget http://download.oracle.com/otn/java/jdk/7u75-b13/jdk-7u75-linux-x64.rpm?AuthParam=1520474898_85357527f14068896db993a783a48e94
rpm -ivh jdk-7u75-linux-x64.rpm\?AuthParam\=1520474898_85357527f14068896db993a783a48e94 
```

### 压缩包安装

我个人喜欢压缩包安装，灵活性较高

根据需求下载压缩包版本

```
wget http://download.oracle.com/otn/java/jdk/7u76-b13/jdk-7u76-linux-x64.tar.gz?AuthParam=1520475252_b3af0149915380bf1a4a0a8d962893ca
mv jdk-7u76-linux-x64.tar.gz\?AuthParam\=1520475252_b3af0149915380bf1a4a0a8d962893ca jdk-7u76-linux-x64.tar.gz
tar -xvf jdk-7u76-linux-x64.tar.gz
```

配置环境变量

```
# vim /etc/profile
export JAVA_HOME=/opt/jdk1.7.0_76
export JRE_HOME=/opt/jdk1.7.0_76/jre
export CLASSPATH=.:$CLASSPATH:$JAVA_HOME/lib:$JRE_HOME/lib
export PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
# source /etc/profile
# java -version
java version "1.7.0_76"
Java(TM) SE Runtime Environment (build 1.7.0_76-b13)
Java HotSpot(TM) 64-Bit Server VM (build 24.76-b04, mixed mode)
```