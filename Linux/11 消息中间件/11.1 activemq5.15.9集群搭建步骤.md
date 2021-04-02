## activemq5.15.9集群搭建步骤

### 下载解压软件

```
cd /opt
wget https://www-eu.apache.org/dist/activemq/5.15.9/apache-activemq-5.15.9-bin.tar.gz
tar -xvf apache-activemq-5.15.9-bin.tar.gz
```

### 修改主机名

三台主机三分别操作

```
hostnamectl set-hostname activemq01.csp
hostnamectl set-hostname activemq02.csp
hostnamectl set-hostname activemq03.csp
```

> 注意主机名的设置，不能带下划线，否则会报错

### 修改配置文件

```
cd /opt/apache-activemq-5.15.9/conf/
vim activemq.xml 
```

修改以下文件

```
brokerName="activemqCluster"
```

> brokaerName三台主机名称必须一致

```
        <persistenceAdapter>
            <!--<kahaDB directory="${activemq.data}/kahadb"/>-->
            <replicatedLevelDB
            directory="${activemq.data}/leveldb"
            replicas="3"
            bind="tcp://0.0.0.0:62222"
            zkAddress="192.168.165.29:2181,192.168.165.30:2181,192.168.165.31:2181"
            hostname="192.168.165.33"
            zkPath="/activemq/leveldb-stores"
            sync="local_disk"/>
        </persistenceAdapter>
```

注释掉`<kahaDB directory="${activemq.data}/kahadb"/>`这一行

新增下面内容

directory="${activemq.data}/leveldb" 集群方式

replicas="3" 集群结点个数

bind activemq集群通信端口

zkAddress zookeeper集群地址

hostname 本机IP

zkPath activemq集群在zookeeper集群交互文件存储位置

sync：在消息被消费完成前，同步信息所存贮的策略。如果有多种策略用逗号隔开，ActiveMQ会选择较强的策略。而如果有local_mem, local_disk这两种策略的话，那么ActiveMQ则优先选择local_disk策略，存储在本地硬盘。

### 开放防火墙端口

```
# cat /etc/sysconfig/iptables
*filter
:INPUT ACCEPT [0systemctl restart iptables.service:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 8161 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 61616 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 62222 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT

# systemctl restart iptables.service
```

### 启动&停止

```
/opt/apache-activemq-5.15.9/bin/activemq start
/opt/apache-activemq-5.15.9/bin/activemq stop
```

### 验证ActiveMQ集群高可用

要验证ActiveMQ集群的高可用，我们只需要关闭能访问http://ip:8161/admin/的ActiveMQ服务，然后访问其他两个。

如果其中有一个能访问，那就说明ActiveMQ+ZooKeeper集群高可用已经配置成功

当一个ActiveMQ节点挂掉，或者一个ZooKeeper节点挂掉，ActiveMQ服务依然正常运转。如果仅剩一个ActiveMQ节点，因为不能选举Master，ActiveMQ不能正常运转；同样的，如果ZooKeeper仅剩一个节点活动，不管ActiveMQ各节点是否存活，ActiveMQ也不能正常提供服务。
 （ActiveMQ集群的高可用，依赖于ZooKeeper集群的高可用。）



