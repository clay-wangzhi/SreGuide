## vmware虚拟机分区扩展

先fdisk做磁盘分区

然后partx -a /dev/sdb

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