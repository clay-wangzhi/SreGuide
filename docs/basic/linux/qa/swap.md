---
category: Linux
tag:
  - 常见问题
---

# linux下如何增加swap交换分区

swap即交换分区，类似于[windows](http://www.ttlsa.com/windows/)虚拟内存功能，就是在硬盘上分配出一块空间作为虚拟内存来使用.

通常swap都是在装系统硬盘分区时设定，这里只是探讨一下系统已经安装好后，扩展swap分区的方法.下面我们来将下如何在安装好的[linux](http://www.ttlsa.com/linux/)下增加swap交换分区.

可以有两种方法来增加swap分区，一种是将新的分区来作为swap，另一种是在磁盘中创建一个大的文件来作swap.

## 新分区扩展swap

假如有一个新的分区/dev/sda3,我们用它来作swap.

```
# swapon -s                --查看当前swap情况
# mkswap /dev/sda3
# swapon /dev/sda3
# swapon -s
# vi /etc/fstab
/dev/sda3   swap   swap  defaults  0  0    --添加开机自动挂载
```

## 大文件扩展swap

```
# cd /var
# dd if=/dev/zero of=file bs=1M count=1000       --生成1G的大文件
# mkswap file
# swapon file
# swapon -s
# vi /etc/fstab
/var/file   swap   swap   defaults  0   0
```

