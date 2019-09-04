## Uninstall old versions

```
yum remove docker \
  docker-client \
  docker-client-latest \
  docker-common \
  docker-latest \
  docker-latest-logrotate \
  docker-logrotate \
  docker-engine
```

## Install Docker CE

### Install using the repository

1. Install required packages. `yum-utils` provides the `yum-config-manager` utility, and `device-mapper-persistent-data` and `lvm2`are required by the `devicemapper` storage driver.

```
yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

2. Use the following command to set up the **stable** repository.

```
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

#### INSTALL DOCKER CE

1. Install the *latest version* of Docker CE and containerd, or go to the next step to install a specific version:

```
yum -y install docker-ce docker-ce-cli containerd.io
```

2.Start Docker.

```
systemctl enable docker
systemctl start docker
```

## Configure the docker accelerator

* Docker中国区官方镜像

```
vim /etc/docker/daemon.json
```

加入下面的数据：

docker-cn镜像：

```
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

或者

* 阿里云容器  服务（推荐）

```
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://pclhthp0.mirror.aliyuncs.com"]
}
EOF
```

