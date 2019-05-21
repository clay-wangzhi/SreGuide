---
title: vmware虚拟机/分区扩展
tag: vmware
abbrlink: '131e4263'
date: 2017-09-26 21:00:00
---

先fdisk做磁盘分区

然后partx -a /dev/sdb

<!--more-->

```
mkfs.xfs /dev/sdb
pvcreate /dev/sdb
vgcreate centos /dev/sdb
vgextend /dev/centos/root /dev/sdb
xfs_growfs /dev/centos/root
df -h
fdisk -l
```



参考链接

<http://blog.sina.com.cn/s/blog_56a70c0401018dlv.html>