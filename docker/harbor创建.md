## 安装依赖软件

```
yum -y install openssl
```

## Installation Steps

1. Offline installer:

从github上下载官方最新包，然后上传到服务器上

2. 解压

```
tar xvf harbor-offline-installer-<version>.tgz  -C /usr/local/
```

3. 修改配置文件

```
# cd /usr/local/harbor
# vim harbor.yml
# 将hostname改为对应的本机地址（not localhost or 127.0.0.1）
# 修改harbor_admin_password管理用户密码，只能在这里改，改后不可再改
```

4. 安装启动

```
./install
```

5. 更新配置文件流程

```
docker-compose down -v
rm -rf /data/database
rm -rf /data/registry
vim harbor.yml #修改配置文件
./prepare #预编译
docker-compose -f ./docker-compose.yml up -d
docker-compose ps #查看启动情况
```

6. 添加--insecure-registry参数

```
# vim /etc/docker/daemon.json
# 添加下面一行
"insecure-registries": ["sdqcharbor.com"]
```

重启docker

```
systemctl daemon-reload
systemctl restart docker
```

