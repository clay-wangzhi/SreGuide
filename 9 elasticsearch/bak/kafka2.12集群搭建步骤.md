## kafka2.12集群搭建步骤

### 下载解压

从官网下载最新的tgz包

下载地址为：

http://mirror.bit.edu.cn/apache/kafka/2.3.0/kafka_2.12-2.3.0.tgz

下载完成后上传到服务器

```
cd /opt/
scp 192.168.165.46:/opt/kafka_2.12-2.3.0.tgz  .
mv kafka_2.12-2.3.0.tgz /usr/local/
cd /usr/local/
tar -xvf kafka_2.12-2.3.0.tgz 
mv kafka_2.12-2.3.0 kafka
```

### 修改配置文件

```
# egrep -v "^$|^#" /usr/local/kafka/config/server.properties 
broker.id=45
listeners=PLAINTEXT://192.168.165.45:9092
num.network.threads=3
num.io.threads=8
socket.send.buffer.bytes=102400
socket.receive.buffer.bytes=102400
socket.request.max.bytes=104857600
log.dirs=/tmp/kafka-logs
num.partitions=1
num.recovery.threads.per.data.dir=1
offsets.topic.replication.factor=1
transaction.state.log.replication.factor=1
transaction.state.log.min.isr=1
log.retention.hours=168
log.segment.bytes=1073741824
log.retention.check.interval.ms=300000
zookeeper.connect=192.168.165.44:2181,192.168.165.45:2181,192.168.165.46:2181
zookeeper.connection.timeout.ms=6000
group.initial.rebalance.delay.ms=0
```

> 服务器标识不能相同 broker.id
>
> 不同服务器的ip不同 listeners=PLAINTEXT://192.168.165.45:9092
>
> 设置zookeeper的连接地址 zookeeper.connect=192.168.165.44:2181,192.168.165.45:2181,192.168.165.46:2181

### 启动服务

```
/usr/local/kafka/bin/kafka-server-start.sh -daemon /usr/local/kafka/config/server.properties

创建topic（其中一台执行）
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test


查看 Topic describe
bin/kafka-topics.sh --describe --zookeeper localhost:2181 --topic test

在其中一台服务器启动consumer
bin/kafka-console-consumer.sh --bootstrap-server 192.168.165.44:9092,192.168.165.45:9092,192.168.165.46:9092 --topic test --from-beginning

在任意议一台服务器启动producer
bin/kafka-console-producer.sh --broker-list 192.168.165.44:9092,192.168.165.45:9092,192.168.165.46:9092 --topic test
```

如果`consumer`服务器接收到`producer`服务器输入的内容，则启动集群成功.

参考链接：

> <https://blog.csdn.net/Cocktail_py/article/details/89877741>
>
> <https://www.jianshu.com/p/5297773fcc1b>、、