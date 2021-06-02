---
category: 自动化工具
tags:
  - Jenkins
---

# 2.4 使用docker安装jenkins

## 安装配置docker

1. 更换yum源，如果本来就是国内源，无需更换

   ```sh
   curl -fsSL "https://gitee.com/clay-wangzhi/shell/raw/master/repo_replace.sh" | bash
   ```

2. 安装配置Docker

   使用官方脚本安装 Docker

   ```sh
   curl -fsSL "https://get.docker.com/" | bash -s -- --mirror Aliyun
   ```

   加载br_netfilter

   ```sh
   modprobe br_netfilter
   ```

   设置下系统内核参数

   ```sh
   cat<<EOF > /etc/sysctl.d/docker.conf
   # 要求iptables不对bridge的数据进行处理
   net.bridge.bridge-nf-call-ip6tables = 1
   net.bridge.bridge-nf-call-iptables = 1
   net.bridge.bridge-nf-call-arptables = 1
   # 开启转发
   net.ipv4.ip_forward = 1
   EOF
   sysctl -p /etc/sysctl.d/docker.conf
   ```

   > ⚠️ 慎用`sysctl --system`命令，如果参数在不同文件中设置，会有优先级问题，目前看来`/etc/sysctl.conf`的优先级最高

   配置docker镜像加速器

   ```sh
   curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://f1361db2.m.daocloud.io
   ```

   启动docker服务并加入开机自启

   ```sh
   systemctl enable docker && systemctl start docker
   ```

## 安装配置nginx

1. 新增nginx yum源

   To set up the yum repository, create the file named `/etc/yum.repos.d/nginx.repo` with the following contents:

   ```
   [nginx-stable]
   name=nginx stable repo
   baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
   gpgcheck=1
   enabled=1
   gpgkey=https://nginx.org/keys/nginx_signing.key
   module_hotfixes=true
   
   [nginx-mainline]
   name=nginx mainline repo
   baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
   gpgcheck=1
   enabled=0
   gpgkey=https://nginx.org/keys/nginx_signing.key
   module_hotfixes=true
   ```

2. 安装&&启动nginx

   ```sh
   yum -y install nginx
   nginx
   ```

3. 配置hosts解析

   ```sh
   echo "127.0.0.1 www.google.com" >> /etc/hosts
   ```

## 安装配置jenkins

> ⚠️ 执行此步骤前，需要先安装配置nginx，在container启动时network设置为host时，我更新主机的hosts文件后，发现容器内的hosts文件没有更新，当前docker版本为20.10.6

1. 下载jenkins镜像

   ```sh
   docker pull jenkinsci/blueocean:1.24.6
   ```

2. 创建挂载目录

   ```sh
   mkdir -p /opt/jenkins-data
   ```

3. 创建并启动jenkins

   ```sh
   docker run -u root --rm -d -e JAVA_OPTS=-Duser.timezone=Asia/Shanghai --mount type=bind,source=/opt/jenkins-data,target=/var/jenkins_home --network=host --name jenkins jenkinsci/blueocean:1.24.6
   ```

4. 剩下的步骤按着提示完成就行，安装配置nginx的原因如下：

   输入密码后第二步报”该Jenkins实例似乎已离线“，网上搜方案有两种：

   1）更改插件下载源，具体步骤如下：

   ```sh
   # 进入http://ip:8080/jenkins/pluginManager/advanced
   # 将最下面的 Update Site 的 URL 地址替换成：http://mirror.esuni.jp/jenkins/updates/update-center.json
   # 点“submit”按钮，然后点右下角角 “check now”
   # 然后输入地址 http://ip:8080/jenkins/restart 重启 jenkins 后再重新安装插件
   ```

   2）修改 /var/lib/jenkins/updates/default.json 文件中的 connectionCheckUrl 项值为国内可访问的地址。

   经实验，两种方式都不能保证100% 初始化成功

   方法一更新的是插件的下载源，但是我还没开始下载插件，只是下载插件前的检查网络；

   方法二重启jenkins又被重置为谷歌域名。

   考虑connectionCheckUrl 只是用来安装插件时检查网络是否ping通，因此直接在本机上给www.google.com 指向到本地，再给配一个nginx 响应即可

