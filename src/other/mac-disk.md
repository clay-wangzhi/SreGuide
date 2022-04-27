---
tag:
  - Mac
---

# Mac上挂载移动硬盘出现"Read-only file system"问题

> 转载自：[Mac上挂载移动硬盘出现"Read-only file system"问题](https://blog.csdn.net/Beyond_TJU/article/details/88125617)

解决步骤如下

1. 确保移动硬盘链接，查看硬盘挂在的节点，操作如下

```
diskutil info /Volumes/YOUR_NTFS_DISK_NAME
```

找到 Device Node

```
Device Node:              /dev/disk1s1
```


比如我这里的硬盘默认挂在在/Volumes/Elements
我查看我的硬盘挂在节点信息如下

```
$ diskutil info /Volumes/Elements
   Device Identifier:        disk2s1
   Device Node:              /dev/disk2s1
   Whole:                    No
   Part of Whole:            disk2
 
   Volume Name:              Elements
   Mounted:                  Yes
   Mount Point:              /Volumes/Elements
 
   Partition Type:           Microsoft Basic Data
   File System Personality:  NTFS
   Type (Bundle):            ntfs
   Name (User Visible):      Windows NT File System (NTFS)
 
   OS Can Be Installed:      No
   Media Type:               Generic
   Protocol:                 USB
   SMART Status:             Not Supported
   Disk / Partition UUID:    F082E054-36E6-419F-A2CD-5B9A82576C4F
 
   Disk Size:                1.0 TB (1000168488960 Bytes) (exactly 1953454080 512-Byte-Units)
   Device Block Size:        512 Bytes
 
   Volume Total Space:       1.0 TB (1000168484864 Bytes) (exactly 1953454072 512-Byte-Units)
   Volume Used Space:        424.7 GB (424701173760 Bytes) (exactly 829494480 512-Byte-Units) (42.5%)
   Volume Available Space:   575.5 GB (575467311104 Bytes) (exactly 1123959592 512-Byte-Units) (57.5%)
   Allocation Block Size:    4096 Bytes
 
   Read-Only Media:          No
   Read-Only Volume:         Yes
 
   Device Location:          External
   Removable Media:          Fixed
```

找到

```
Device Node:              /dev/disk2s1
```

这个信息保留下来，后面会使用

2. 然后将硬盘弹出，但是不要拔掉移动硬盘连接，操作如下

```
hdiutil eject /Volumes/YOUR_NTFS_DISK_NAME
```

我这里的执行如下

```
$  hdiutil eject /Volumes/MYHD/
"disk2" unmounted.
"disk2" ejected.
```

3. 创建一个目录，稍后将mount到这个目录

```
sudo mkdir /Volumes/MYHD
```

4. 将NTFS硬盘 挂载 mount 到mac

```
sudo mount_ntfs -o rw,nobrowse /dev/disk2s1 /Volumes/MYHD/
```

5. 可以进行任意的写入操作了，比如我这里进行了copy操作

```
cp ~/Movies/小XXX黄XXX片.mp4 /Volumes/MYHD/xx/xxx/
```

6. 将NTFS硬盘从 mac 上卸载 umount

```
sudo umount /Volumes/MYHD/
```

链接：https://www.xiaorongmao.com/blog/49