##  Centos7系统配置国内yum源

### 备份

```
yum -y install wget
cd /etc/yum.repos.d/
mkdir repo_bak
mv *.repo repo_bak/
```

### 使用阿里的开源镜像

```
wget -O /etc/yum.repos.d/Centos-7.repo http://mirrors.aliyun.com/repo/Centos-7.repo
wget -O /etc/yum.repos.d/epel-7.repo http://mirrors.aliyun.com/repo/epel-7.repo
yum clean all
yum makecache
yum repolist
```
