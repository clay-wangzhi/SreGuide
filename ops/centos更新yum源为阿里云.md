1. 安装wget

```
yum install wget -y
```

2. 备份yum源

```
cd /etc/yum.repos.d/
mkdir bak
mv *.repo bak/
```

3. 更新为阿里云的yum源

```
wget -O CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

4. 生成缓存，更新yum源

```
yum makecache
yum -y update
```
