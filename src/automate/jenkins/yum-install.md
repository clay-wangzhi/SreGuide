---
category: 自动化工具
tags:
  - Jenkins
---

# 2.1 yum 安装 jenkins

> 转载自： [yum安装jenkins | willseecloud | 看云](https://www.kancloud.cn/willseecloud/jenkins/1860531)

## yum安装jenkins

官方文档：

https://pkg.jenkins.io/redhat-stable/

[http://mirrors.jenkins-ci.org/](http://mirrors.jenkins-ci.org/，)

可选择Jenkins长期支持版本或Jenkins每周版本进行安装。

**长期支持版本**

每12周从定期发布流中选择一个[LTS（长期支持）](https://www.jenkins.io/download/lts/)发布作为该时间段的稳定发布。可以从[`redhat-stable`](https://pkg.jenkins.io/redhat-stable/)yum存储库安装。

```
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
sudo yum upgrade -y
sudo yum install -y jenkins java-1.8.0-openjdk-devel
```

**每周发布版本**

每周都会产生一个新版本，以向用户和插件开发人员提供错误修复和功能。可以从[`redhat`](https://pkg.jenkins.io/redhat/)yum存储库安装。

```
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key
sudo yum upgrade
sudo yum install -y jenkins java-1.8.0-openjdk-devel
```

**使用国内rpm包安装**

```
yum install -y java-11-openjdk-devel
yum install -y https://mirrors.huaweicloud.com/jenkins/redhat-stable/jenkins-2.235.3-1.1.noarch.rpm
```

修改jenkins配置文件以自定义端口

```
[root@localhost ~]# cat /etc/sysconfig/jenkins | grep JENKINS_PORT
JENKINS_PORT="8080"
```

启动jenkins服务

```
systemctl enable --now jenkins
```

配置update center

```
export JENKINS_HOME=/var/lib/jenkins
mkdir $JENKINS_HOME/update-center-rootCAs
cat > $JENKINS_HOME/update-center-rootCAs/jenkins-update-center-cn-root-ca.crt <<END
-----BEGIN CERTIFICATE-----
MIICcTCCAdoCCQD/jZ7AgrzJKTANBgkqhkiG9w0BAQsFADB9MQswCQYDVQQGEwJD
TjELMAkGA1UECAwCR0QxCzAJBgNVBAcMAlNaMQ4wDAYDVQQKDAV2aWhvbzEMMAoG
A1UECwwDZGV2MREwDwYDVQQDDAhkZW1vLmNvbTEjMCEGCSqGSIb3DQEJARYUYWRt
aW5AamVua2lucy16aC5jb20wHhcNMTkxMTA5MTA0MDA5WhcNMjIxMTA4MTA0MDA5
WjB9MQswCQYDVQQGEwJDTjELMAkGA1UECAwCR0QxCzAJBgNVBAcMAlNaMQ4wDAYD
VQQKDAV2aWhvbzEMMAoGA1UECwwDZGV2MREwDwYDVQQDDAhkZW1vLmNvbTEjMCEG
CSqGSIb3DQEJARYUYWRtaW5AamVua2lucy16aC5jb20wgZ8wDQYJKoZIhvcNAQEB
BQADgY0AMIGJAoGBAN+6jN8rCIjVkQ0Q7ZbJLk4IdcHor2WdskOQMhlbR0gOyb4g
RX+CorjDRjDm6mj2OohqlrtRxLGYxBnXFeQGU7wWjQHyfKDghtP51G/672lXFtzB
KXukHByHjtzrDxAutKTdolyBCuIDDGJmRk+LavIBY3/Lxh6f0ZQSeCSJYiyxAgMB
AAEwDQYJKoZIhvcNAQELBQADgYEAD92l26PoJcbl9GojK2L3pyOQjeeDm/vV9e3R
EgwGmoIQzlubM0mjxpCz1J73nesoAcuplTEps/46L7yoMjptCA3TU9FZAHNQ8dbz
a0vm4CF9841/FIk8tsLtwCT6ivkAi0lXGwhX0FK7FaAyU0nNeo/EPvDwzTim4XDK
9j1WGpE=
-----END CERTIFICATE-----
END
```

修改update center地址

```
cp $JENKINS_HOME/hudson.model.UpdateCenter.xml $JENKINS_HOME/hudson.model.UpdateCenter.xml.back

sed -i 's#https://updates.jenkins.io/update-center.json#https://mirrors.huaweicloud.com/jenkins/updates/update-center.json#g' \
  $JENKINS_HOME/hudson.model.UpdateCenter.xml
```

重启jenkins服务

```
systemctl restart jenkins
```

输入初始化密码并进行配置

```
cat /var/lib/jenkins/secrets/initialAdminPassword
```

浏览器访问jenkins：[http://192.168.1.1:8080](http://192.168.1.1:8080/)

## jenkins配置文件

jenkins相关目录说明：

/usr/lib/jenkins/ jenkins安装目录，war包会放在这里。

```
# ls /usr/lib/jenkins/
jenkins.war
```

/var/lib/jenkins/

默认的JENKINS_HOME，其中存储了关于构建服务器的配置信息、构建作业、构建产物、插件和其它有用的信息。
这个目录将会占用大量的磁盘空间。

```
# ll /var/lib/jenkins/
total 60
-rw-r--r-- 1 jenkins jenkins 1640 Aug  1 12:56 config.xml
-rw-r--r-- 1 jenkins jenkins  156 Aug  1 12:56 hudson.model.UpdateCenter.xml
-rw------- 1 jenkins jenkins 1712 Aug  1 12:56 identity.key.enc
-rw-r--r-- 1 jenkins jenkins    7 Aug  1 12:56 jenkins.install.UpgradeWizard.state
-rw-r--r-- 1 jenkins jenkins  171 Aug  1 12:56 jenkins.telemetry.Correlator.xml
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 jobs
drwxr-xr-x 3 jenkins jenkins 4096 Aug  1 12:56 logs
-rw-r--r-- 1 jenkins jenkins  907 Aug  1 12:56 nodeMonitors.xml
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 nodes
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 plugins
-rw-r--r-- 1 jenkins jenkins   64 Aug  1 12:56 secret.key
-rw-r--r-- 1 jenkins jenkins    0 Aug  1 12:56 secret.key.not-so-secret
drwx------ 4 jenkins jenkins 4096 Aug  1 12:56 secrets
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 updates
drwxr-xr-x 2 jenkins jenkins 4096 Aug  1 12:56 userContent
drwxr-xr-x 3 jenkins jenkins 4096 Aug  1 12:56 users
```

目录文件说明：

- config.xml：jenkins 的核心配置文件
- xml： 其它各种工具的配置信息

fingerprints：跟踪人工操作的痕迹

- jobs：构建作业的配置细节，及构建产物和数据

workspace：jenkins 对当前作业进行构建的地方，
包含 jenkins 检验过的源码、构建本身生成的所有文件

- builds：包含当前作业的构建历史
- config.xml：存放当前作业的所有配置细节
- nextBuildNumber：下一次构建的 number
- lastStable：最后一个稳定构建的链接（成功的构建）
- lastSuccessful：最近成功的构建链接（没有任何编译错误）
- plugins：存放所有已安装的插件，更新 jenkins 不需要重新安装插件
- users：当使用 jenkins 本地用户数据库时，用户信息会存放在这个目录下
- updates：存放可用的插件更新
- userContent：存放用户自己为 jenkins 服务器定制化的一些内容
- war：存放扩展的 web 应用程序，当以单机应用程序的形式运行 jenkins 时，会把 web 应用程序解压到这个目录

/var/log/jenkins/jenkins.log jenkins日志文件。

```
tail -f /var/log/jenkins/jenkins.log
```

/etc/sysconfig/jenkins #配置文件，“端口”，“JENKINS_HOME”等都可以在这里配置。

```
cat /etc/sysconfig/jenkins
```

修改内存限制，编辑/etc/sysconfig/jenkins

```
vi /etc/sysconfig/jenkins
JENKINS_JAVA_OPTIONS="-Xmx2048m -Djava.awt.headless=true"
```