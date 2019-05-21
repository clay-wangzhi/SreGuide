---
title: Centos7系统配置国内yum源和epel源
tag: linux
categories: Linux
date: 2019-05-13 18:11:00
copyright: true
---

centos7更换镜像源

<!--more-->

## 备份old源

```
cd /etc/yum.repos.d/
mkdir repo_bak
mv *.repo repo_bak/
```

## 使用阿里的开源镜像

```
wget http://mirrors.aliyun.com/repo/Centos-7.repo
yum clean all
yum makecache
```

## 安装阿里epel源

```
 wget -O /etc/yum.repos.d/epel-7.repo http://mirrors.aliyun.com/repo/epel-7.repo 
yum clean all
yum makecache
yum repolist
```

