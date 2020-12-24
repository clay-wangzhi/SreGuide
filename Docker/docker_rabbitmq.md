## RabbitMQ 高可用集群架构

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/rabbitmq_ha.png)

将两个 RabbitMQ 磁盘节点和一个 RabbitMQ 内存节点组成一个内建集群，之所以要用两个磁盘节点是防止，唯一的磁盘节点挂掉后，不能重建队列，交换器。用 HAProxy 作为 RabbitMQ 集群的负载均衡。为了防止 HAProxy 单点故障，用 Keepalived 将两个 HAProxy 节点做成一主一备。应用使用 VIP（虚拟IP） 访问 HAProxy 服务时，默认连接主机（Master）的 HAProxy，当主机（Master）上的 HAProxy 故障时，VIP 会漂移到备机（Backup）上，就会连接备机（Backup）上的 HAProxy 服务。

## 服务器规划

| 角色               | 数量 | ip地址                           |
| ------------------ | ---- | -------------------------------- |
| RabbitMQ Disc Node | 2    | 192.168.125.26，192.168.125.190  |
| RabbitMQ RAM Node  | 1    | 192.168.125.176                  |
| HAProxy            | 2    | 192.168.125.222，192.168.125.168 |
| 虚拟ip             | 1    | 192.168.125.245                  |

## 准备工作

### 安装Docker和Docker Compose

1. 安装配置Docker

   使用官方脚本安装 Docker

   ```bash
   curl -fsSL "https://get.docker.com/" | bash -s -- --mirror Aliyun
   ```

   加载br_netfilter

   ```bash
   modprobe br_netfilter
   ```

   设置下系统内核参数

   ```bash
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
   > :warning: 慎用`sysctl --system`命令，如果参数在不同文件中设置，会有优先级问题，目前看来`/etc/sysctl.conf`的优先级最高

   配置docker镜像站

   ```bash
   curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://f1361db2.m.daocloud.io
   ```

   启动docker服务

   ```bash
   systemctl enable docker && systemctl start docker
   ```

2. 安装配置Docker Compose

   二进制方式 安装Docker Compose
   
   ```bash
   curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m) > /usr/local/bin/docker-compose
   chmod +x /usr/local/bin/docker-compose
   ```

   
   配置bash补全命令
   
   ```bash
   curl -L https://raw.githubusercontent.com/docker/compose/1.27.4/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose
   ```
   
   > 如果网络不可达，可先下载到本地，然后上传到内网ftp服务器上，进行下载，以下是笔者自己的内网ftp下载地址
   
   ```bash
   curl -L ftp://192.168.166.21/docker-compose > /etc/bash_completion.d/docker-compose
   ```

### 下载rabbitmq和haproxy镜像

  下载镜像

```bash
docker pull rabbitmq:3.8.9-management
docker pull haproxy:2.1
```

## 部署rabbitmq集群

### 部署`192.168.125.26`节点

创建目录

```bash
mkdir -p /app/clay/rabbitmq
cd /app/clay/rabbitmq
```

查看服务编排文件`clay-rabbitmq-node1.yaml`

```yaml
version: '3'
services:
  rabbitmq:
    container_name: clay-rabbitmq
    image: rabbitmq:3.8.9-management
    restart: always
    ports:
      - 4369:4369
      - 5671:5671
      - 5672:5672
      - 15672:15672
      - 25672:25672
    environment:
      - TZ=Asia/Shanghai
      - RABBITMQ_ERLANG_COOKIE=iweru238roseire
      - RABBITMQ_DEFAULT_USER=clay_admin
      - RABBITMQ_DEFAULT_PASS=clay_admin_123
      - RABBITMQ_DEFAULT_VHOST=clay_vhost
    hostname: rabbitmq1
    extra_hosts:
      - rabbitmq1:192.168.125.26
      - rabbitmq2:192.168.125.190
      - rabbitmq3:192.168.125.176
    volumes:
      - ./data:/var/lib/rabbitmq
```

部署

```bash
docker-compose -f clay-rabbitmq-node1.yaml up -d
```

> :warning: 三个节点 RABBITMQ_ERLANG_COOKIE 保持一致。一定要有 extra_hosts 配置，否则在搭建集群的过程中会连接不到其他 rabbitmq 节点服务。此节点
>
> 作为集群根节点。

### 部署`192.168.125.190`节点

创建目录

```bash
mkdir -p /app/clay/rabbitmq
cd /app/clay/rabbitmq
```

编写`rabbitmq.sh`启动脚本（磁盘节点）

```bash
cat > rabbitmq.sh <<EOF
rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl join_cluster rabbit@rabbitmq1
rabbitmqctl start_app
EOF
chmod +x rabbitmq.sh 
```

查看服务编排文件`clay-rabbitmq-node2.yaml`

```yaml
version: '3'
services:
  rabbitmq:
    container_name: clay-rabbitmq
    image: rabbitmq:3.8.9-management
    restart: always
    ports:
      - 4369:4369
      - 5671:5671
      - 5672:5672
      - 15672:15672
      - 25672:25672
    environment:
      - TZ=Asia/Shanghai
      - RABBITMQ_ERLANG_COOKIE=iweru238roseire
      - RABBITMQ_DEFAULT_USER=clay_admin
      - RABBITMQ_DEFAULT_PASS=clay_admin_123
      - RABBITMQ_DEFAULT_VHOST=clay_vhost
    hostname: rabbitmq2
    extra_hosts:
      - rabbitmq1:192.168.125.26
      - rabbitmq2:192.168.125.190
      - rabbitmq3:192.168.125.176
    volumes:
      - ./rabbitmq.sh:/home/rabbitmq.sh
      - ./data:/var/lib/rabbitmq
```

部署

```bash
docker-compose -f clay-rabbitmq-node2.yaml up -d
```

节点启动完成后，通过命令进入`rabbitmq2`节点的容器中，执行`/home/rabbitmq.sh`脚本

```bash
docker container exec -it clay-rabbitmq /bin/bash
./home/rabbitmq.sh 
```

部署`192.168.125.176`节点

创建目录

```bash
mkdir -p /app/clay/rabbitmq
cd /app/clay/rabbitmq
```

编写`rabbitmq-ram.sh`启动脚本（内存节点）

```bash
cat > rabbitmq-ram.sh <<EOF
rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl join_cluster --ram rabbit@rabbitmq1
rabbitmqctl start_app
EOF
chmod +x rabbitmq-ram.sh
```

查看服务编排文件`clay-rabbitmq-node3.yaml`

```yaml
version: '3'
services:
  rabbitmq:
    container_name: clay-rabbitmq
    image: rabbitmq:3.8.9-management
    restart: always
    ports:
      - 4369:4369
      - 5671:5671
      - 5672:5672
      - 15672:15672
      - 25672:25672
    environment:
      - TZ=Asia/Shanghai
      - RABBITMQ_ERLANG_COOKIE=iweru238roseire
      - RABBITMQ_DEFAULT_USER=clay_admin
      - RABBITMQ_DEFAULT_PASS=clay_admin_123
      - RABBITMQ_DEFAULT_VHOST=clay_vhost
    hostname: rabbitmq3
    extra_hosts:
      - rabbitmq1:192.168.125.26
      - rabbitmq2:192.168.125.190
      - rabbitmq3:192.168.125.176
    volumes:
      - ./rabbitmq-ram.sh:/home/rabbitmq-ram.sh
      - ./data:/var/lib/rabbitmq
```

部署

```bash
docker-compose -f clay-rabbitmq-node3.yaml up -d
```

在启动`rabbitmq3`节点，启动后，进入容器内部，执行 `/home/rabbitmq-ram.sh` 脚本添加内存节点到集群中

```bash
docker container exec -it clay-rabbitmq /bin/bash
./home/rabbitmq-ram.sh 
```

在容器内部使用`rabbitmqctl cluster_status`命令查看集群状态，以下是输出

```
Basics

Cluster name: rabbit@rabbitmq3

Disk Nodes

rabbit@rabbitmq1
rabbit@rabbitmq2

RAM Nodes

rabbit@rabbitmq3

Running Nodes

rabbit@rabbitmq1
rabbit@rabbitmq2
rabbit@rabbitmq3

Versions

rabbit@rabbitmq1: RabbitMQ 3.8.9 on Erlang 23.1.1
rabbit@rabbitmq2: RabbitMQ 3.8.9 on Erlang 23.1.1
rabbit@rabbitmq3: RabbitMQ 3.8.9 on Erlang 23.1.1
```

也可以通过 http://192.168.125.26:15672/ 进入管理端查看集群状态

![rabbitmq_ha](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/rabbitmqclay.png)

## HaProxy 负载均衡

在`192.168.125.222`，`192.168.125.168`两个节点同时操作

创建目录

```bash
mkdir -p /app/clay/haproxy
cd /app/clay/haproxy
```

查看服务编排文件`clay-haproxy.yaml`

```yaml
version: '3'
services:
  haproxy:
    container_name: clay-haproxy
    image: haproxy:2.1
    restart: always
    ports:
      - 8100:8100
      - 15670:5670
    environment:
      - TZ=Asia/Shanghai
    extra_hosts:
      - rabbitmq1:192.168.125.26
      - rabbitmq2:192.168.125.190
      - rabbitmq3:192.168.125.176
    volumes:
      - ./haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg:ro
```

> 重点是设置 extra_hosts（rabbitmq 集群节点 ip） 和 volumes（使用自定义的配置文件）

haproxy 配置文件内容：

```
global
    log 127.0.0.1 local0 info
    maxconn 4096

defaults
    log     global
    mode    tcp
    option  tcplog
    retries 3
    option  redispatch
    maxconn 2000
    timeout connect 5s
    timeout client 120s
    timeout server 120s

# ssl for rabbitmq
# frontend ssl_rabbitmq
    # bind *:5673 ssl crt /root/rmqha_proxy/rmqha.pem
    # mode tcp
    # default_backend rabbitmq

# web 管理界面
listen stats
    bind *:8100
    mode http
    stats enable
    stats realm Haproxy\ Statistics
    stats uri /
    stats auth admin:admin123
# 配置负载均衡
listen rabbitmq
    bind *:5670
    mode tcp
    balance roundrobin
    server  rabbitmq1 rabbitmq1:5672  check inter 5s rise 2 fall 3
    server  rabbitmq2 rabbitmq2:5672  check inter 5s rise 2 fall 3
    server  rabbitmq3 rabbitmq3:5672  check inter 5s rise 2 fall 3
```

部署

```bash
docker-compose -f clay-haproxy.yaml up -d
```

登录 HAProxy 的管理端查看集群状态：http://192.168.125.222:8100/

![haproxyauth](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/haproxyauth.png)

## 使用 Keepalived 给 HAProxy 做主备

在`192.168.125.222`，`192.168.125.168`两个节点安装`keepalived`

```bash
yum -y install keepalived
# 安装killall命令
yum -y install psmisc
```

**Master 节点配置：**

```
vrrp_script chk_haproxy {
    script "killall -0 haproxy"  # verify haproxy's pid existance
    interval 5                   # check every 5 seconds
    weight -2                    # if check failed, priority will minus 2
}
vrrp_instance VI_1 {
    # 主机: MASTER
    # 备机: BACKUP
    state MASTER
    # 实例绑定的网卡, 用ip a命令查看网卡编号
    interface eth0
    # 虚拟路由标识，这个标识是一个数字(1-255)，在一个VRRP实例中主备服务器ID必须一样
    virtual_router_id 51
    # 优先级，数字越大优先级越高，在一个实例中主服务器优先级要高于备服务器
    priority 101
    # 虚拟IP地址,可以有多个，每行一个
    virtual_ipaddress {
        192.168.125.245
    }
    track_script {               # Scripts state we monitor
        chk_haproxy
    }
}
```

`eth0`是网卡名，`ifconfig` 命令查看服务器网卡，找到和本机服务 ip 对应的网卡，`virtual_router_id` 的值要和 backup 节点上的配置保持一致。

`killall -0 haproxy` 命令的意思是，如果 haproxy 服务存在执行该命令，什么都不会发生，如果服务不存在，执行该命令会报找不到进程 `haproxy: no process found`。

master 节点的 priority 在减去 weight 后要比 backup 节点的 priority 低才行，否则主备切换不成功。

**Backup节点配置：**

```
vrrp_script chk_haproxy {
    script "killall -0 haproxy"  # verify haproxy's pid existance
    interval 5                   # check every 5 seconds
    weight -2                    # if check failed, priority will minus 2
}
vrrp_instance VI_1 {
    # 主机: MASTER
    # 备机: BACKUP
    state BACKUP
    # 实例绑定的网卡, 用ip a命令查看网卡编号
    interface eth0
    # 虚拟路由标识，这个标识是一个数字(1-255)，在一个VRRP实例中主备服务器ID必须一样
    virtual_router_id 51
    # 优先级，数字越大优先级越高，在一个实例中主服务器优先级要高于备服务器
    priority 100
    # 虚拟IP地址,可以有多个，每行一个
    virtual_ipaddress {
        192.168.125.245
    }
    track_script {               # Scripts state we monitor
        chk_haproxy
    }
}
```

创建完配置，启动 keepalived。

```bash
systemctl restart keepalived.service 
```

**测试 Keepalived**

在 Master，Backup 节点上，使用 `ip addr` 命令看下 vip 在哪台机器的 eth0 网卡上。

默认在 master 主机上，停掉 master 主机的 haproxy 服务，然后在用 `ip addr` 查看虚拟 ip 在哪个机器上，如果漂移到备份主机上则代表热备生效。

在开启 master 主机的 haproxy 服务，`ip addr` 查看虚拟 ip 应该重新漂移回 master 主机上。

测试服务，使用虚拟 ip 加服务端口号访问 HAProxy 服务。

至此，高可用的 rabbitmq 集群 和 haproxy 软负载就搭建完成。