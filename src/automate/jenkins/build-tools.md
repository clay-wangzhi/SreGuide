---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# 构建工具集成

安装完成后，配置管理工具

## 安装并配置git

```shell
yum -y install git
```


编辑git环境变量为/usr/bin/git

## 安装并配置maven

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

## 安装并配置ansible

```shell
yum -y install ansible
```

编辑ansible的环境变量为/usr/bin

