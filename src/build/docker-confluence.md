---
category: 常见服务的搭建
tag:
  - confluence
---

# 基于docker搭建confluence

系统版本：centos7

## 安装docker

1. yum安装docker

```
yum update # 更新yum
yum install docker # yum安装docker
```

2. 开启镜像加速

   　　由于国内网络问题拉取 Docker 镜像会十分缓慢，所以可以添加网易镜像地址：http://hub-mirror.c.163.com 加速。

   ```
   vi /etc/docker/daemon.json
   ```

   将其中的内容替换为如下，当然你可以添加其它镜像地址。

   ```
   {
     "registry-mirrors": ["http://hub-mirror.c.163.com"]
   }
   ```

3. 启动docker

```
docker --version # 查看docker版本
systemctl start docker # 启动docker
systemctl enable docker #设置开机自启
ps -ef | grep docker # 查看docker进程是否正常启动
```

## 安装数据库PostgreSQL

1. 安装PostgreSQL

```
docker pull postgres # 下拉镜像
docker run --name postgresdb -p 5432:5432 -e POSTGRES_PASSWORD=W*** -d docker.io/postgres:latest
```

注意：

1）-p 5432:5432 选项是可选的，因为在后面启动Confluence容器的时候，postgresdb这个容器会以别名db连接到confluence容器，也就是说对confluence这个容器来说，可以通过db:5432的网络地址访问到postgresql服务，不需要在主机上开放5432端口。

2）W\**** 是密码需要设置成你需要的密码。

2. 进入docker容器并创建confluence数据库

```
docker exec -it postgresdb bash # 进入docker容器
psql -U postgres 
\l
CREATE DATABASE confluence WITH OWNER postgres; 
\q
```

## 安装wiki Confluence

1. 安装wiki Confluence

```
docker pull cptactionhank/atlassian-confluence #下拉镜像
docker run -d --name confluence -p 10080:8090 --link postgresdb:db --user root:root docker.io/cptactionhank/atlassian-confluence:latest
```

2. 检查confluence是否启动

```
docker ps # 列出运行的容器
```

![](images/docker_ps.png)

可以看到 wiki confluence已经启动

3. 访问http://IP:10080/ 就可以看到Confluence的配置页面

## 破解 wiki Confluence

1. 访问http://IP:10080/ 记录 Server ID 
2. 进入docker confluence 容器，查找decoder.jar文件

```
docker exec -it confluence /bin/bash # 进入docker容器 confluence
su - # 切换到root账户
find -name "*decoder*" # 查找名称中包括 decoder 的文件
```

3. 将decoder.jar文件从容器中复制出来，其中 “confluence:” 是Wiki confluence容器名称，atlassian-extras-decoder-v2-3.4.1.jar 是安装版本wiki的decode文件

```
docker cp confluence:/opt/atlassian/confluence/confluence/WEB-INF/lib/atlassian-extras-decoder-v2-3.4.1.jar .
```

4. 破解

a) 下载 atlassian-extras-decoder-v2-3.4.1.jar 文件到windows上

b) 将文件名改为 “atlassian-extras-2.4.jar” 破解工具只识别这个文件名

c) 下载破解文件 <https://raw.githubusercontent.com/clay-wangzhi/clay-wiki/master/utils/confluence5.1-crack.zip>

d)解压并进入文件目录

e) 执行java -jar confluence_keygen.jar 运行破解文件

f）填入 name ，server id 处输入步骤1中得到的id，点击 “gen” 生成key

g）点击 patch，选择刚才改名为  “atlassian-extras-2.4.jar” 的jar包，显示 “jar success fully patched” 则破解成功

* 注意：path前先删除atlassian-extras-2.4.bak文件否则path失败

h）将 “atlassian-extras-2.4.jar” 文件名改回原来的 “atlassian-extras-decoder-v2-3.4.1.jar ”

i）复制key中的内容备用

j) 将”atlassian-extras-decoder-v2-3.4.1.jar “文件上传回服务器

5. 将破解后的文件复制回 confluence 容器

```
 docker cp atlassian-extras-decoder-v2-3.4.1.jar confluence:/opt/atlassian/confluence/confluence/WEB-INF/lib/atlassian-extras-decoder-v2-3.4.1.jar
```

6. 重启confluence容器

```
docker restart confluence
```

7. 再次访问页面,输入之前复制的key后点击下一步
8. 点击 ”My own database“ 后点击 next
9. 输入数据库连接信息，用户名密码是之前创建数据库中的用户名和密码

![](images/confluence.png)

10. 单击“Empty Site”

11. 点击 “Manage users and groups within Confluence”
12. 填入管理员信息后点击 “next”
13. 点击 ”start“

## 解决慢时长gc的问题

 　　默认java配置为1G内存使用一段时间后回经常gc造成卡顿，单击“系统信息”可以看到jvm使用情况

进入docker容器

```
docker exec -it confluence /bin/bash # 进入docker容器 confluence
```

修改java配置

```
vi /opt/atlassian/confluence/bin/catalina.sh
```

在 “cygwin=false” 上面添加如下内容，最大内存为2G

```
JAVA_OPTS="-Xms256m -Xmx2048m -XX:PermSize=128m -XX:MaxPermSize=512m"
或
CATALINA_OPTS="-Xms256m -Xmx2048m -XX:PermSize=128m -XX:MaxPermSize=512m"
```

重启 wiki confluence

```
docker stop confluence # 停止
docker start confluence # 启动
```

> 参考文档：https://www.cnblogs.com/rslai/p/8845777.html