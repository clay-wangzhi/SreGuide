---
category: Linux
---
# 软件包管理

## yum管理RPM包

清空缓存及其它文件
```
yum clean all
```
建立缓存数据库
```
yum makecache
```
查询可用的仓库
```
yum repolist
```
查询
```
yum list mysql-server
```
升级
```
yum -y update
```
查询指定的文件属于哪个包
```
yum provides */httpd
```
卸载
```
yum -y remove mysql-server
```
## 使用RPM工具管理RPM包
安装
```
rpm -ivh xxx.rpm
```
升级
```
rpm -Uvh xxx.rpm
```
查询
```
rpm -q xxx //查询指定包是否安装
rpm -ql xxx //查询xxx安装的文件
```
卸载
```
rpm -e xxx
```
