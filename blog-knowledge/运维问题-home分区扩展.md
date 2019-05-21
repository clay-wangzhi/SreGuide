---
title: 从CentOS7默认安装的/home中转移空间到根目录/
tag: 运维常见问题
abbrlink: e540bc86
date: 2017-08-30 21:00:00
---

Cent0S 7默认启用LVM2（Logical Volume Manager），把机器的一块硬盘分为两个区sda1和sda2，其中分区sda1作为系统盘/boot挂载，少量空间；sda2作为一个物理卷并且完全作为逻辑卷组VG(Volume Group）centos，在这个逻辑卷组centos中建立三个逻辑卷LV（Logical Volume）root和home还有swap，分别挂载到根目录/和/home以及swap。而两个分区sda1和sda2上都建立了文件系统XFS，文件系统XFS作为RedHat的默认文件系统也有它的考虑，成为继ext3，ext4之后的主流文件系统。

<!--more-->

几个概念的关系：M个物理硬盘HD或者物理硬盘中的分区一起组建为一个逻辑卷组VG及存储池，在卷组VG中创建N个逻辑卷LV，在一个逻辑卷LV中创建文件系统比如xfs。物理硬盘/分区、逻辑卷有最小基本寻址单元，CentOS7默认的大小为4MB，二者一一对应，类似于链接或者变量引用，但是一个二者关系并非一直不变，因为物理硬盘可能发生变化而逻辑卷自动调整。创建卷组和逻辑卷，会类似于创建分区一样在磁盘开始位置写入卷的信息VGDA（卷组描述符区域，Volume Group Descriptor Area）用于识别。逻辑卷的好处在于屏蔽物理底层支撑，可自由扩展变更，而不用担心硬盘或者分区的物理空间局限，也就不会存在为了扩展分区大小而去备份/扩展分区重新格式化硬盘等问题。

 

HD/分区--通过pvcreate->PV--通过vgcreate(vgchange)/vgextend-->VG--通过lvcreate/lvextend-->LV--通过mkfs-->FS--通过xfs_growfs等-->df磁盘生效

 

但是关键点在于，CentOS 7默认安装时/home占用太多空间，根目录相较而言就小得多(只有50G)，而OpenStack安装以及存储的东西都在根目录下。上传几个镜像说不定就把你的根目录空间耗尽。不像其他文件系统ext3，ext4或者reiserfs等，有命令（resize2fs，resize_reiserfs）直接支持缩小文件系统的大小，默认安装的xfs支持扩展增大但是不支持缩小空间！

简单总结下，就是下面几条命令：

```
# mkdir /backup
# mv /home/* /backup/
# umount /home
# lvremove /dev/centos/home
# lvcreate -L 50G -n home cents
# mkfs -t xfs /dev/centos/home
# mv /backup/* /home/
# lvextend -L +xxxG /dev/centos/root
# xfs_growfs root
# rm -rf /backup
```