---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# jenkins的安装配置

> 经实验：ansible 2.7.10版本可以安装 jenkins 2.210版本
>
> 安装更高版本，请一并升级ansible，低版本ansible在安装插件时会报如下错误：
>
> > {"attempts": 5, "changed": false, "details": "HTTP Error 403: Forbidden", "item": "ansible", "msg": "Cannot install plugin."}

## ansible安装jenkins

```shell
ansible-galaxy install clay_wangzhi.jenkins
```

galaxy中有详细的文档说明：

> 链接地址：https://galaxy.ansible.com/clay_wangzhi/jenkins

额外注意一些插件的安装：

```
Role-based Authorization Strategy  #权限控制插件
git-parameter
Publish Over SSH
DIngDIng
git-parameter #选项参数增加，git-brach选项
```

## 配置管理工具

安装完成后，配置管理工具

### 安装并配置git

```shell
yum -y install git
```


编辑git环境变量为/usr/bin/git

### 安装并配置maven

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

### 安装并配置ansible

```shell
yum -y install ansible
```

编辑ansible的环境变量为/usr/bin

## jenkins集成openldap

参考图片

![jen_ld](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/jen_ld.png)

> 集成ldap参考链接：https://www.cnblogs.com/mascot1/p/10498513.html

## 三种构建方式

**jenkins触发式构建：**用于开发环境部署**，**开发人员push代码或者合并代码到gitlab项目的master分支，jenkins就部署代码到对应服务器。

**jenkins参数化构建：**用于测试环境预上线环境部署，开发push代码或者合并代码到gitlab项目的master分支之后，并不会部署代码，而是需要登录到jenkins的web界面，点击构建按钮，传入对应的参数（比如参数需要构建的tag，需要部署的分支）然后才会部署。

**jenkins定时构建**：用于APP自动打包，定时构建是在参数化构建的基础上添加的，开发人员可以登录jenkins手动传入tag进行打包，如果不手动打包，那么jenkins就每天凌晨从gitlab拉取最新的APP代码打包。
