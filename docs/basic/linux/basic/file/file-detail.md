---
category: Linux
---
# 查看文件详细属性

### stat命令

```
# stat a.go 
  File: a.go
  Size: 63        	Blocks: 0          IO Block: 512    regular file
Device: 2h/2d	Inode: 19140298416386648  Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2018-10-09 12:42:07.978765400 +0800
Modify: 2018-10-09 12:42:07.980763600 +0800
Change: 2018-10-09 12:42:07.982774800 +0800
 Birth: -
```

访问时间：atime，查看内容                    
修改时间：mtime，修改内容
改变时间：ctime，文件属性，比如权限
删除时间：dtime，文件被删除的时间