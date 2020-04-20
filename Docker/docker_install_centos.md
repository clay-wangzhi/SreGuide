# CentOS 安装 Docker CE

>警告：切勿在没有配置 Docker YUM 源的情况下直接使用 yum 命令安装 Docker.

## 准备工作

### 系统要求

Docker CE 支持 64 位版本 CentOS 7，并且要求内核版本不低于 3.10。 CentOS 7 满足最低内核的要求，但由于内核版本比较低，部分功能（如 `overlay2` 存储层驱动）无法使用，并且部分功能可能不太稳定。

### 卸载旧版本

旧版本的 Docker 称为 `docker` 或者 `docker-engine`，使用以下命令卸载旧版本：

```bash
yum remove docker \
  docker-client \
  docker-client-latest \
  docker-common \
  docker-latest \
  docker-latest-logrotate \
  docker-logrotate \
  docker-engine
```

## 使用 yum 安装

执行以下命令安装依赖包：

```bash
yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。

执行下面的命令添加 `yum` 软件源：

```bash
wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O /etc/yum.repos.d/docker-ce.repo

# 官方源
# yum-config-manager \
#     --add-repo \
#     https://download.docker.com/linux/centos/docker-ce.repo
```

如果需要测试版本的 Docker CE 请使用以下命令：

```bash
$ sudo yum-config-manager --enable docker-ce-test
```

如果需要每日构建版本的 Docker CE 请使用以下命令：

```bash
$ sudo yum-config-manager --enable docker-ce-nightly
```

### 安装 Docker CE

更新 `yum` 软件源缓存，并安装 `docker-ce`。

```bash
yum makecache fast
yum -y install docker-ce
```

## 使用脚本自动安装

在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，CentOS 系统上可以使用这套脚本安装，另外可以通过 `--mirror` 选项使用国内源进行安装：

```bash
curl -fsSL get.docker.com -o get-docker.sh
sh get-docker.sh --mirror Aliyun
```

执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker CE 的稳定(stable)版本安装在系统中。

## 启动 Docker CE

```bash
systemctl enable docker && systemctl start docker
```

## 镜像加速

国内从 Docker Hub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。国内很多云服务商都提供了国内加速器服务，例如：

* [网易云加速器 `https://hub-mirror.c.163.com`](https://www.163yun.com/help/documents/56918246390157312)
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

* [阿里云加速器(需登录账号获取)](https://cr.console.aliyun.com/cn-hangzhou/mirrors)（推荐）

```
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://pclhthp0.mirror.aliyuncs.com"]
}
EOF
```

## 添加内核参数

如果在 CentOS 使用 Docker CE 看到下面的这些警告信息：

```bash
WARNING: bridge-nf-call-iptables is disabled
WARNING: bridge-nf-call-ip6tables is disabled
```

请添加内核配置参数以启用这些功能。

```bash
$ tee -a /etc/sysctl.conf <<-EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
```

然后重新加载 `sysctl.conf` 即可

```bash
sysctl -p
```

## 参考文档

* [Docker 官方 CentOS 安装文档](https://docs.docker.com/install/linux/docker-ce/centos/)。