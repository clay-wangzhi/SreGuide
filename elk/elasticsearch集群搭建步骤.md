## elasticsearch7.2集群搭建步骤

### 环境准备

* 3台centos7.6主机（华云centos7.6_latest镜像）
* 4核8G,300G

主机名解析,三台主机分别操作

```
hostnamectl set-hostname elasticsearch01.csp
hostnamectl set-hostname elasticsearch02.csp
hostnamectl set-hostname elasticsearch03.csp
```

修改内核参数，在最后追加一行

```
# tail -1 /etc/sysctl.conf
vm.max_map_count = 655360
# systcl -p
```

从官网下载rpm软件包，然后分别传到三台主机上

```
mkdir -p /opt/software
cd /opt/software
scp 192.168.165.43:/opt/software/elasticsearch-7.2.0-x86_64.rpm .
```

### 安装

```
rpm -ivh elasticsearch-7.2.0-x86_64.rpm 
```

修改相关配置文件

1. 修改jvm.options文件的Xms和Xmx为4g

```
-Xms4g
-Xmx4g
```

2. 创建数据存放目录和日志文件目录

```
mkdir -p /opt/elasticsearch/data
mkdir -p /opt/elasticsearch/log
```

3. 修改目录的所有者

```
chown -R elasticsearch.elasticsearch elasticsearch/
```

4. 修改elasticsearch.yml配置文件

```
# egrep -v "^#|^$" /etc/elasticsearch/elasticsearch.yml 
cluster.name: es-cluster
node.name: elasticsearch02.csp
path.data: /opt/elasticsearch/data
path.logs: /opt/elasticsearch/log
network.host: 192.168.165.45
http.port: 9200
transport.tcp.port: 9300
discovery.zen.ping.unicast.hosts: ["192.168.165.44", "192.168.165.45", "192.168.165.46"]
discovery.zen.minimum_master_nodes: 2
transport.tcp.compress: true
cluster.initial_master_nodes: ["192.168.165.44", "192.168.165.45", "192.168.165.46"]
```

各个参数解释：

cluster.name:集群名称，三个节点必须相同

node.name:节点名称，三个节点必须不同，我以主机名作为节点名称

http.port:对外提供服务的端口

transport.tcp.port:集群服务的端口

discovery.zen.ping.unicast.hosts:集群个节点IP地址

cluster.initial_master_nodes: 未知

transport.tcp.compress: true 设置是否压缩tcp传输时的数据，默认为false，不压缩

discovery.zen.minimum_master_nodes: 2 为了避免脑裂，集群节点数最少为 半数+1

### 开放防火墙端口

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
-A INPUT -m state --state NEW -m tcp -p tcp --dport 9200 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 9300 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT

#  systemctl restart iptables
```

### 启动&检测集群状态

启动

```
systemctl start elasticsearch.service 
systemctl enable elasticsearch.service
systemctl status elasticsearch.service 
tail -f /opt/elasticsearch/log/es-cluster.log 
```

检测集群状态

在谷歌浏览器访问

<http://192.168.165.46:9200/_cat/health?v>

绿色——最健康的状态，代表所有的主分片shard和副本分片replica都可用。
黄色——所有的主分片shard可用，但是部分副本分片replica不可用。
红色——部分主分片shard不可用。（此时执行查询部分数据仍然可以查到，遇到这种情况，还是赶快解决比较好）。

参考链接：

><http://www.mamicode.com/info-detail-2689467.html>
>
><https://jingyan.baidu.com/article/870c6fc3b82202b03fe4bed0.html>
>
><http://www.matools.com/blog/190110165>
>
><https://www.jb51.net/article/147129.htm>
>
><https://blog.csdn.net/u012116196/article/details/86597245>

