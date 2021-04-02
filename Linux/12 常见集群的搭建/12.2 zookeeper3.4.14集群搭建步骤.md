## zookeeper3.4.14集群搭建步骤

### 下载解压

```
cd /opt
wget https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz
tar -xvf zookeeper-3.4.14.tar.gz 
```

### 修改相关配置

```
mkdir -p /var/lib/zookeeper/data
mkdir -p /var/lib/zookeeper/log
mkdir -p /var/log/zookeeper
```

生产myid文件（三台主机分别执行）

```
echo 29 > /var/lib/zookeeper/data/myid
echo 30 > /var/lib/zookeeper/data/myid
echo 31 > /var/lib/zookeeper/data/myid
```

修改zoo.cfg文件

```
cd /opt/zookeeper-3.4.14/conf
cp zoo_sample.cfg zoo.cfg
```

```
# egrep -v "^#|^$" zoo.cfg 
tickTime=2000
initLimit=10
syncLimit=5
dataDir=/var/lib/zookeeper/data
dataLogDir=/var/lib/zookeeper/log
clientPort=2181
server.29=192.168.165.29:2888:3888
server.30=192.168.165.30:2888:3888
server.31=192.168.165.31:2888:3888
```

修改/zkEnv.sh文件

```
cd /opt/zookeeper-3.4.14/bin
```

找到 ZOO_LOG_DIR="." 一行，换成如下

```
# vim zkEnv.sh
ZOO_LOG_DIR="/var/log/zookeeper"
```

### 修改防火墙规则

```
# cat /etc/sysconfig/iptables
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 2181 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 2888 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 3888 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT

# systemctl restart iptables.service 
```

### 启动集群

```
/opt/zookeeper-3.4.14/bin/zkServer.sh start
/opt/zookeeper-3.4.14/bin/zkServer.sh status
```

通过`nc`方式验证

```
yum -y install nc
echo stat | nc 192.168.165.46 2181
```

通过四字命令`srvr`方式验证

```
# telnet 192.168.165.45 2181
Trying 192.168.165.45...
Connected to 192.168.165.45.
Escape character is '^]'.
srvr
Zookeeper version: 3.4.14-4c25d480e66aadd371de8bd2fd8da255ac140bcf, built on 03/06/2019 16:18 GMT
Latency min/avg/max: 0/0/0
Received: 2
Sent: 1
Connections: 1
Outstanding: 0
Zxid: 0x0
Mode: follower
Node count: 4
Connection closed by foreign host.
```

