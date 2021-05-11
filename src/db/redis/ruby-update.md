---
category: Redis
---

# centos7安装升级ruby

转载自：<https://blog.csdn.net/qq_26440803/article/details/82717244>

### 在线安装ruby

```
yum -y install ruby
ruby -v
```

### 添加ruby仓库

添加aliyun镜像

```
gem sources -a http://mirrors.aliyun.com/rubygems/ 
```

删除原来的镜像

```
gem sources --remove https://rubygems.org/
```

查看当前镜像源

```
gem sources -l
```

### 安装RAM

> RAM（[Ruby Version Manager](https://rvm.io/) ）是一款RAM的命令行工具，可以使用RAM轻松安装，管理Ruby版本。RVM包含了Ruby的版本管理和Gem库管理(gemset)安装

安装

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable
```

更新配置文件，使其立马生效：

```
source /etc/profile.d/rvm.sh
```

查看RVM版本信息，如果可以代表安装成功。

```
rvm -v
```

查看Ruby版本

```
rvm list known
```

选定版本进行安装

```
rvm install 2.5
```

验证版本

```
ruby -v
```

