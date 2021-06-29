---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# 5.1 构建发布工具集成

安装完成后，配置管理工具

## 安装并配置 git

```shell
yum -y install git
```


编辑git环境变量为/usr/bin/git

## 安装并配置 maven

```shell
wget https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz
tar -xvf apache-maven-3.6.3-bin.tar.gz
mv apache-maven-3.6.3 /usr/local/maven
```

`vim /etc/profile.d/maven.sh`

```shell
#!/bin/bash
export M2_HOME=/usr/local/maven
export PATH=$PATH:$M2_HOME/bin
```

```
source /etc/profile.d/maven.sh
mvn --version
```

编辑maven的环境变量为/usr/local/maven

## 安装并配置 ansible

```shell
yum -y install ansible
```

编辑ansible的环境变量为/usr/bin

## 安装并配置 node

参考官方说明：https://github.com/nodejs/help/wiki/Installation

有时候`npm install`是需要创建目录的权限，所以最后给 node 目录 root 权限
