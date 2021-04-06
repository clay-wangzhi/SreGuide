---
category: Linux
---
# 用户管理

查看当前登录的用户信息：
```
id
uid=0(root) gid=0(root) groups=0(root)
```
系统约定： RHEL6
uid: 0     	    特权用户
uid: 1~499 	    系统用户
uid: 500+  	    普通用户
## 给普通用户提权
1.su
```
su -
```
2.添加用户至sudoers
```
vim /etc/sudoers
%wheel  ALL=(ALL)       NOPASSWD: ALL
useradd aa -G wheel
```
```
usermod aa -G wheel
```


