---
title: Redis-集群
tag: redis
abbrlink: 7690f212
date: 2017-09-16 21:00:00
---

Redis Cluster是Redis的分布式解决方案，在3.0版本正式推出，有效地解决了Redis分布式方面的需求。当遇到单机内存、并发、流量等瓶颈时，可以采用Cluster架构方案达到负载均衡的目的。

<!--more-->

## 数据分布

### 数据分布理论

分布式数据库首先要解决把整个数据集按照分区规则映射到多个节点的问题，即把数据集划分到多个节点上，每个节点负责整体数据的一个子集。如下图

![avatar](/images/redis1.png)

### Redis数据分区

Redis Cluser采用虚拟槽分区，所有的键根据哈希函数映射到0~16383整数槽内，计算公式：slot=CRC16（key）&16383。每一个节点负责维护一部分槽以及槽所映射的键值数据，如下图

![avatar](/images/redis2.png)

### 集群功能限制

Redis集群相对单机在功能上存在一些限制，限制如下：

1）key批量操作支持有限。如mset、mget，目前只支持具有相同slot值的key执行批量操作。对于映射为不同slot值的key由于执行mget、mget等操作可能存在于多个节点上因此不被支持。
2）key事务操作支持有限。同理只支持多key在同一节点上的事务操作，当多个key分布在不同的节点上时无法使用事务功能。
3）key作为数据分区的最小粒度，因此不能将一个大的键值对象如hash、list等映射到不同的节点。
4）不支持多数据库空间。单机下的Redis可以支持16个数据库，集群模式下只能使用一个数据库空间，即db0。
5）复制结构只支持一层，从节点只能复制主节点，不支持嵌套树状复制结构。

## 搭建集群

### 准备节点

Redis集群一般由多个节点组成，节点数量至少为6个才能保证组成完整高可用的集群。每个节点需要开启配置cluster-enabled yes，让Redis运行在集群模式下。建议为集群内所有节点统一目录，一般划分三个目录：conf、data、log，分别存放配置、数据和日志相关文件。

```
# 节点端口
port 6379
#  开启集群模式
cluster-enabled yes
#  节点超时时间，单位毫秒
cluster-node-timeout 15000
#  集群内部配置文件
cluster-config-file "nodes-6379.conf"
```

其他配置和单机模式一致即可，配置文件命名规则redis-{port}.conf，准备好配置后启动所有节点，命令如下：

```
redis-server conf/redis-6379.conf
redis-server conf/redis-6380.conf
redis-server conf/redis-6381.conf
redis-server conf/redis-6382.conf
redis-server conf/redis-6383.conf
redis-server conf/redis-6384.conf
```

检查节点日志是否正确，日志内容如下：

```
cat log/redis-6379.log
* No cluster configuration found, I'm cfb28ef1deee4e0fa78da86abe5d24566744411e
# Server started, Redis version 3.0.7
* The server is now ready to accept connections on port 6379
```

6379节点启动成功，第一次启动时如果没有集群配置文件，它会自动创建一份，文件名称采用cluster-config-file参数项控制，建议采用node-{port}.conf格式定义，通过使用端口号区分不同节点，防止同一机器下多个节点彼此覆盖，造成集群信息异常。如果启动时存在集群配置文件，节点会使用配置文件内容初始化集群信息。启动过程如下图

![avator](/images/redis3.png)

集群模式的Redis除了原有的配置文件之外又加了一份集群配置文件。当集群内节点信息发生变化，如添加节点、节点下线、故障转移等。节点会自动保存集群状态到配置文件中。需要注意的是，Redis自动维护集群配置文件，不要手动修改，防止节点重启时产生集群信息错乱。如节点6379首次启动后生成集群配置如下：

```
#cat data/nodes-6379.conf
cfb28ef1deee4e0fa78da86abe5d24566744411e 127.0.0.1:6379 myself,master - 0 0 0 connected
vars currentEpoch 0 lastVoteEpoch 0
```

文件内容记录了集群初始状态，这里最重要的是节点ID，它是一个40位16进制字符串，用于唯一标识集群内一个节点，之后很多集群操作都要借助于节点ID来完成。需要注意是，节点ID不同于运行ID。节点ID在集群初始化时只创建一次，节点重启时会加载集群配置文件进行重用，而Redis的运行ID每次重启都会变化。在节点6380执行cluster nodes命令获取集群节点状态：

```
127.0.0.1:6380>cluster nodes
8e41673d59c9568aa9d29fb174ce733345b3e8f1 127.0.0.1:6380 myself,master - 0 0 0 connected
```

每个节点目前只能识别出自己的节点信息。我们启动6个节点，但每个节点彼此并不知道对方的存在，下面通过节点握手让6个节点彼此建立联系从而组成一个集群。

### 节点握手

节点握手是指一批运行在集群模式下的节点通过Gossip协议彼此通信，达到感知对方的过程。节点握手是集群彼此通信的第一步，由客户端发起命令：cluster meet{ip}{port}，如下图：

![avator](/images/redis4.png)

图中执行的命令是：cluster meet127.0.0.16380让节点6379和6380节点进行握手通信。cluster meet命令是一个异步命令，执行之后立刻返回。内部发起与目标节点进行握手通信，如下图：

![avator](/images/redis5.png)

1）节点6379本地创建6380节点信息对象，并发送meet消息。
2）节点6380接受到meet消息后，保存6379节点信息并回复pong消息。
3）之后节点6379和6380彼此定期通过ping/pong消息进行正常的节点通信。
这里的meet、ping、pong消息是Gossip协议通信的载体，之后的节点通信部分做进一步介绍，它的主要作用是节点彼此交换状态数据信息。6379和6380节点通过meet命令彼此建立通信之后，集群结构如下图：

![avator](/images/redis6.png)

对节点6379和6380分别执行cluster nodes命令，可以看到它们彼此已经感知到对方的存在。

```
127.0.0.1:6379> cluster nodes
cfb28ef1deee4e0fa78da86abe5d24566744411e 127.0.0.1:6379 myself,master - 0 0
0 connected
8e41673d59c9568aa9d29fb174ce733345b3e8f1 127.0.0.1:6380 master - 0 1468073534265
1 connected
127.0.0.1:6380> cluster nodes
cfb28ef1deee4e0fa78da86abe5d24566744411e 127.0.0.1:6379 master - 0 1468073571641
0 connected
8e41673d59c9568aa9d29fb174ce733345b3e8f1 127.0.0.1:6380 myself,master - 0 0
1 connected
```

下面分别执行meet命令让其他节点加入到集群中：

```
127.0.0.1:6379>cluster meet 127.0.0.1 6381
127.0.0.1:6379>cluster meet 127.0.0.1 6382
127.0.0.1:6379>cluster meet 127.0.0.1 6383
127.0.0.1:6379>cluster meet 127.0.0.1 6384
```

我们只需要在集群内任意节点上执行cluster meet命令加入新节点，握手状态会通过消息在集群内传播，这样其他节点会自动发现新节点并发起握手流程。最后执行cluster nodes命令确认6个节点都彼此感知并组成集群：

```
127.0.0.1:6379> cluster nodes
4fa7eac4080f0b667ffeab9b87841da49b84a6e4 127.0.0.1:6384 master - 0 1468073975551
5 connected
cfb28ef1deee4e0fa78da86abe5d24566744411e 127.0.0.1:6379 myself,master - 0 0 0 connected
be9485a6a729fc98c5151374bc30277e89a461d8 127.0.0.1:6383 master - 0 1468073978579
4 connected
40622f9e7adc8ebd77fca0de9edfe691cb8a74fb 127.0.0.1:6382 master - 0 1468073980598
3 connected
8e41673d59c9568aa9d29fb174ce733345b3e8f1 127.0.0.1:6380 master - 0 1468073974541
1 connected
40b8d09d44294d2e23c7c768efc8fcd153446746 127.0.0.1:6381 master - 0 1468073979589
2 connected
```

节点建立握手之后集群还不能正常工作，这时集群处于下线状态，所有的数据读写都被禁止。通过如下命令可以看到：

```
127.0.0.1:6379> set hello redis
(error) CLUSTERDOWN The cluster is down
```

通过cluster info命令可以获取集群当前状态：

```
127.0.0.1:6379> cluster info
cluster_state:fail
cluster_slots_assigned:0
cluster_slots_ok:0
cluster_slots_pfail:0
cluster_slots_fail:0
cluster_known_nodes:6
cluster_size:0
...
```

从输出内容可以看到，被分配的槽（cluster_slots_assigned）是0，由于目前所有的槽没有分配到节点，因此集群无法完成槽到节点的映射。只有当16384个槽全部分配给节点后，集群才进入在线状态。

### 分配槽

Redis集群把所有的数据映射到16384个槽中。每个key会映射为一个固定的槽，只有当节点分配了槽，才能响应和这些槽关联的键命令。通过cluster addslots命令为节点分配槽。这里利用bash特性批量设置槽（slots），命令如下：

```
redis-cli -h 127.0.0.1 -p 6379 cluster addslots {0...5461}
redis-cli -h 127.0.0.1 -p 6380 cluster addslots {5462...10922}
redis-cli -h 127.0.0.1 -p 6381 cluster addslots {10923...16383}
```

把16384个slot平均分配给6379、6380、6381三个节点。执行cluster info查看集群状态，如下所示：

```
127.0.0.1:6379> cluster info
cluster_state:ok
cluster_slots_assigned:16384
cluster_slots_ok:16384
cluster_slots_pfail:0
cluster_slots_fail:0
cluster_known_nodes:6
cluster_size:3
cluster_current_epoch:5
cluster_my_epoch:0
cluster_stats_messages_sent:4874
cluster_stats_messages_received:4726
```

当前集群状态是OK，集群进入在线状态。所有的槽都已经分配给节点，执行cluster nodes命令可以看到节点和槽的分配关系：

```
127.0.0.1:6379> cluster nodes
4fa7eac4080f0b667ffeab9b87841da49b84a6e4 127.0.0.1:6384 master - 0 1468076240123
5 connected
cfb28ef1deee4e0fa78da86abe5d24566744411e 127.0.0.1:6379 myself,master - 0 0 0 connected
0-5461
be9485a6a729fc98c5151374bc30277e89a461d8 127.0.0.1:6383 master - 0 1468076239622
4 connected
40622f9e7adc8ebd77fca0de9edfe691cb8a74fb 127.0.0.1:6382 master - 0 1468076240628
3 connected
8e41673d59c9568aa9d29fb174ce733345b3e8f1 127.0.0.1:6380 master - 0 1468076237606
1 connected
5462-10922
40b8d09d44294d2e23c7c768efc8fcd153446746 127.0.0.1:6381 master - 0 1468076238612
2 connected
10923-16383
```

目前还有三个节点没有使用，作为一个完整的集群，每个负责处理槽的节点应该具有从节点，保证当它出现故障时可以自动进行故障转移。集群模式下，Reids节点角色分为主节点和从节点。首次启动的节点和被分配槽的节点都是主节点，从节点负责复制主节点槽信息和相关的数据。使用cluster replicate {nodeId}命令让一个节点成为从节点。其中命令执行必须在对应的从节点上执行，nodeId是要复制主节点的节点ID，命令如下：

```
127.0.0.1:6382>cluster replicate cfb28ef1deee4e0fa78da86abe5d24566744411e
OK
127.0.0.1:6383>cluster replicate 8e41673d59c9568aa9d29fb174ce733345b3e8f1
OK
127.0.0.1:6384>cluster replicate 40b8d09d44294d2e23c7c768efc8fcd153446746
OK
```

Redis集群模式下的主从复制使用了之前介绍的Redis复制流程，依然支持全量和部分复制。复制（replication）完成后，整个集群的结构如下图：

![avator](/images/redis7.png)

通过cluster nodes命令查看集群状态和复制关系，如下所示：

```
127.0.0.1:6379> cluster nodes
4fa7eac4080f0b667ffeab9b87841da49b84a6e4 127.0.0.1:6384 slave 40b8d09d44294d2e2
3c7c768efc8fcd153446746 0 1468076865939 5 connected
cfb28ef1deee4e0fa78da86abe5d24566744411e 127.0.0.1:6379 myself,master - 0 0 0 connected
0-5461
be9485a6a729fc98c5151374bc30277e89a461d8 127.0.0.1:6383 slave 8e41673d59c9568aa
9d29fb174ce733345b3e8f1 0 1468076868966 4 connected
40622f9e7adc8ebd77fca0de9edfe691cb8a74fb 127.0.0.1:6382 slave cfb28ef1deee4e0fa
78da86abe5d24566744411e 0 1468076869976 3 connected
8e41673d59c9568aa9d29fb174ce733345b3e8f1 127.0.0.1:6380 master - 0 1468076870987 1
connected 5462-10922
40b8d09d44294d2e23c7c768efc8fcd153446746 127.0.0.1:6381 master - 0 1468076867957 2
connected 10923-16383
```

目前为止，我们依照Redis协议手动建立一个集群。它由6个节点构成，3个主节点负责处理槽和相关数据，3个从节点负责故障转移。手动搭建集群便于理解集群建立的流程和细节，不过读者也从中发现集群搭建需要很多步骤，当集群节点众多时，必然会加大搭建集群的复杂度和运维成本。因此Redis官方提供了redis-trib.rb工具方便我们快速搭建集群。

### 用redis-trib.rb搭建集群

redis-trib.rb是采用Ruby实现的Redis集群管理工具。内部通过Cluster相关命令帮我们简化集群创建、检查、槽迁移和均衡等常见运维操作，使用之前需要安装Ruby依赖环境。下面介绍搭建集群的详细步骤。

1.Ruby环境准备

安装Ruby：

```
--  下载 ruby
wget https:// cache.ruby-lang.org/pub/ruby/2.3/ruby-2.3.1.tar.gz
--  安装 ruby
tar xvf ruby-2.3.1.tar.gz
./configure -prefix=/usr/local/ruby
make
make install
cd /usr/local/ruby
sudo cp bin/ruby /usr/local/bin
sudo cp bin/gem /usr/local/bin
```

安装rubygem redis依赖：

```
wget http:// rubygems.org/downloads/redis-3.3.0.gem
gem install -l redis-3.3.0.gem
gem list --check redis gem
```

安装redis-trib.rb：

```
sudo cp /{redis_home}/src/redis-trib.rb /usr/local/bin
```

安装完Ruby环境后，执行redis-trib.rb命令确认环境是否正确，输出如下：

```
# redis-trib.rb
Usage: redis-trib <command> <options> <arguments ...>
create host1:port1 ... hostN:portN
--replicas <arg>
check host:port
info host:port
fix host:port
--timeout <arg>
reshard host:port
--from <arg>
--to <arg>
--slots <arg>
--yes
--timeout <arg>
--pipeline <arg>
... 忽略 ...
```

从redis-trib.rb的提示信息可以看出，它提供了集群创建、检查、修复、均衡等命令行工具。这里我们关注集群创建命令，使用redis-trib.rb create命令可快速搭建集群。

2.准备节点

首先我们跟之前内容一样准备好节点配置并启动：

```
redis-server conf/redis-6481.conf
redis-server conf/redis-6482.conf
redis-server conf/redis-6483.conf
redis-server conf/redis-6484.conf
redis-server conf/redis-6485.conf
redis-server conf/redis-6486.conf
```

3.创建集群

启动好6个节点之后，使用redis-trib.rb create命令完成节点握手和槽分配过程，命令如下：

```
redis-trib.rb create --replicas 1 127.0.0.1:6481 127.0.0.1:6482 127.0.0.1:6483 127.0.0.1:6484 127.0.0.1:6485 127.0.0.1:6486
```

--replicas参数指定集群中每个主节点配备几个从节点，这里设置为1。

我们出于测试目的使用本地IP地址127.0.0.1，如果部署节点使用不同的IP地址，redis-trib.rb会尽可能保证主从节点不分配在同一机器下，因此会重新排序节点列表顺序。节点列表顺序用于确定主从角色，先主节点之后是从节点。创建过程中首先会给出主从节点角色分配的计划，如下所示。

```
>>> Creating cluster
>>> Performing hash slots allocation on 6 nodes...
Using 3 masters:
127.0.0.1:6481
127.0.0.1:6482
127.0.0.1:6483
Adding replica 127.0.0.1:6484 to 127.0.0.1:6481
Adding replica 127.0.0.1:6485 to 127.0.0.1:6482
Adding replica 127.0.0.1:6486 to 127.0.0.1:6483
M: 869de192169c4607bb886944588bc358d6045afa 127.0.0.1:6481
slots:0-5460 (5461 slots) master
M: 6f9f24923eb37f1e4dce1c88430f6fc23ad4a47b 127.0.0.1:6482
slots:5461-10922 (5462 slots) master
M: 6228a1adb6c26139b0adbe81828f43a4ec196271 127.0.0.1:6483
slots:10923-16383 (5461 slots) master
S: 22451ea81fac73fe7a91cf051cd50b2bf308c3f3 127.0.0.1:6484
replicates 869de192169c4607bb886944588bc358d6045afa
S: 89158df8e62958848134d632e75d1a8d2518f07b 127.0.0.1:6485
replicates 6f9f24923eb37f1e4dce1c88430f6fc23ad4a47b
S: bcb394c48d50941f235cd6988a40e469530137af 127.0.0.1:6486
replicates 6228a1adb6c26139b0adbe81828f43a4ec196271
Can I set the above configuration (type 'yes' to accept):
```

当我们同意这份计划之后输入yes，redis-trib.rb开始执行节点握手和槽分配操作，输出如下：

```
>>> Nodes configuration updated
>>> Assign a different config epoch to each node
>>> Sending CLUSTER MEET messages to join the cluster
Waiting for the cluster to join..
>>> Performing Cluster Check (using node 127.0.0.1:6481)
... 忽略 ...
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
```

最后的输出报告说明：16384个槽全部被分配，集群创建成功。这里需要注意给redis-trib.rb的节点地址必须是不包含任何槽/数据的节点，否则会拒绝创建集群。

4.集群完整性检查

集群完整性指所有的槽都分配到存活的主节点上，只要16384个槽中有一个没有分配给节点则表示集群不完整。可以使用redis-trib.rb check命令检测之前创建的两个集群是否成功，check命令只需要给出集群中任意一个节点地址就可以完成整个集群的检查工作，命令如下：

```
redis-trib.rb check 127.0.0.1:6379
redis-trib.rb check 127.0.0.1:6481
```

当最后输出如下信息，提示集群所有的槽都已分配到节点：

```
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
```

## 节点通信

### 通信流程

在分布式存储中需要提供维护节点元数据信息的机制，所谓元数据是指：节点负责哪些数据，是否出现故障等状态信息。常见的元数据维护方式分为：集中式和P2P方式。Redis集群采用P2P的Gossip（流言）协议，Gossip协议工作原理就是节点彼此不断通信交换信息，一段时间后所有的节点都会知道集群完整的信息，这种方式类似流言传播，如下图：

![avator](/images/redis8.png)

通信过程说明：
1）集群中的每个节点都会单独开辟一个TCP通道，用于节点之间彼此通信，通信端口号在基础端口上加10000。

2）每个节点在固定周期内通过特定规则选择几个节点发送ping消息。

3）接收到ping消息的节点用pong消息作为响应。

集群中每个节点通过一定规则挑选要通信的节点，每个节点可能知道全部节点，也可能仅知道部分节点，只要这些节点彼此可以正常通信，最终它们会达到一致的状态。当节点出故障、新节点加入、主从角色变化、槽信息变更等事件发生时，通过不断的ping/pong消息通信，经过一段时间后所有的节点都会知道整个集群全部节点的最新状态，从而达到集群状态同步的目的。

### Gossip消息

Gossip协议的主要职责就是信息交换。信息交换的载体就是节点彼此发送的Gossip消息，了解这些消息有助于我们理解集群如何完成信息交换。

常用的Gossip消息可分为：ping消息、pong消息、meet消息、fail消息
等，它们的通信模式如下图：

![avator](/images/redis9.png)

​	·meet消息：用于通知新节点加入。消息发送者通知接收者加入到当前集群，meet消息通信正常完成后，接收节点会加入到集群中并进行周期性的ping、pong消息交换。

​	·ping消息：集群内交换最频繁的消息，集群内每个节点每秒向多个其他节点发送ping消息，用于检测节点是否在线和交换彼此状态信息。ping消息发送封装了自身节点和部分其他节点的状态数据。

​	·pong消息：当接收到ping、meet消息时，作为响应消息回复给发送方确认消息正常通信。pong消息内部封装了自身状态数据。节点也可以向集群内广播自身的pong消息来通知整个集群对自身状态进行更新。

​	·fail消息：当节点判定集群内另一个节点下线时，会向集群内广播一个fail消息，其他节点接收到fail消息之后把对应节点更新为下线状态。

所有的消息格式划分为：消息头和消息体。消息头包含发送节点自身状态数据，接收节点根据消息头就可以获取到发送节点的相关数据，结构如下：

```
typedef struct {
char sig[4]; /*  信号标示 */
uint32_t totlen; /*  消息总长度 */
uint16_t ver; /*  协议版本 */
uint16_t type; /*  消息类型 , 用于区分 meet,ping,pong 等消息 */
uint16_t count; /*  消息体包含的节点数量，仅用于 meet,ping,ping 消息类型 */
uint64_t currentEpoch; /*  当前发送节点的配置纪元 */
uint64_t configEpoch; /*  主节点 / 从节点的主节点配置纪元 */
uint64_t offset; /*  复制偏移量 */
char sender[CLUSTER_NAMELEN]; /*  发送节点的 nodeId */
unsigned char myslots[CLUSTER_SLOTS/8]; /*  发送节点负责的槽信息 */
char slaveof[CLUSTER_NAMELEN]; /*  如果发送节点是从节点，记录对应主节点的 nodeId */
uint16_t port; /*  端口号 */
uint16_t flags; /*  发送节点标识 , 区分主从角色，是否下线等 */
unsigned char state; /*  发送节点所处的集群状态 */
unsigned char mflags[3]; /*  消息标识 */
union clusterMsgData data /*  消息正文 */;
} clusterMsg;
```

集群内所有的消息都采用相同的消息头结构clusterMsg，它包含了发送节点关键信息，如节点id、槽映射、节点标识（主从角色，是否下线）等。消息体在Redis内部采用clusterMsgData结构声明，结构如下：

```
union clusterMsgData {
/* ping,meet,pong 消息体 */
struct {
/* gossip 消息结构数组 */
clusterMsgDataGossip gossip[1];
} ping;
/* FAIL  消息体 */
struct {
clusterMsgDataFail about;
} fail;
// ...
};
```

当接收到ping、meet消息时，接收节点会解析消息内容并根据自身的识
别情况做出相应处理，对应流程如下图：

![avator](/images/redis10.png)

![avator](/images/redis11.png)

接收节点收到ping/meet消息时，执行解析消息头和消息体流程：
​	·解析消息头过程：消息头包含了发送节点的信息，如果发送节点是新节点且消息是meet类型，则加入到本地节点列表；如果是已知节点，则尝试更新发送节点的状态，如槽映射关系、主从角色等状态。

​	·解析消息体过程：如果消息体的clusterMsgDataGossip数组包含的节点是新节点，则尝试发起与新节点的meet握手流程；如果是已知节点，则根据cluster MsgDataGossip中的flags字段判断该节点是否下线，用于故障转移。
​	消息处理完后回复pong消息，内容同样包含消息头和消息体，发送节点接收到回复的pong消息后，采用类似的流程解析处理消息并更新与接收节点最后通信时间，完成一次消息通信。

### 节点选择

虽然Gossip协议的信息交换机制具有天然的分布式特性，但它是有成本的。由于内部需要频繁地进行节点信息交换，而ping/pong消息会携带当前节点和部分其他节点的状态数据，势必会加重带宽和计算的负担。Redis集群内节点通信采用固定频率（定时任务每秒执行10次）。因此节点每次选择需要通信的节点列表变得非常重要。通信节点选择过多虽然可以做到信息及时交换但成本过高。节点选择过少会降低集群内所有节点彼此信息交换频率，从而影响故障判定、新节点发现等需求的速度。因此Redis集群的Gossip协议需要兼顾信息交换实时性和成本开销，通信节点选择的规则如下图：

![avator](/images/redis12.png)

​	根据通信节点选择的流程可以看出消息交换的成本主要体现在单位时间
选择发送消息的节点数量和每个消息携带的数据量。

1.选择发送消息的节点数量
​	集群内每个节点维护定时任务默认每秒执行10次，每秒会随机选取5个节点找出最久没有通信的节点发送ping消息，用于保证Gossip信息交换的随机性。每100毫秒都会扫描本地节点列表，如果发现节点最近一次接受pong消息的时间大于cluster_node_timeout/2，则立刻发送ping消息，防止该节点信息太长时间未更新。根据以上规则得出每个节点每秒需要发送ping消息的数量=1+10*num（node.pong_received>cluster_node_timeout/2），因此cluster_node_timeout参数对消息发送的节点数量影响非常大。当我们的带宽资源紧张时，可以适当调大这个参数，如从默认15秒改为30秒来降低带宽占用率。过度调大cluster_node_timeout会影响消息交换的频率从而影响故障转移、槽信息更新、新节点发现的速度。因此需要根据业务容忍度和资源消耗进行平衡。同时整个集群消息总交换量也跟节点数成正比。
2.消息数据量
​	每个ping消息的数据量体现在消息头和消息体中，其中消息头主要占用空间的字段是myslots[CLUSTER_SLOTS/8]，占用2KB，这块空间占用相对固定。消息体会携带一定数量的其他节点信息用于信息交换。具体数量见以下伪代码：

```
def get_wanted():
int total_size = size(cluster.nodes)
#  默认包含节点总量的 1/10
int wanted = floor(total_size/10);
if wanted < 3:
#  至少携带 3 个其他节点信息
wanted = 3;
if wanted > total_size -2 :
#  最多包含 total_size - 2 个
wanted = total_size - 2;
return wanted;
```

根据伪代码可以看出消息体携带数据量跟集群的节点数息息相关，更大的集群每次消息通信的成本也就更高，因此对于Redis集群来说并不是大而全的集群更好，对于集群规模控制的建议见后续集群详解。

## 集群伸缩

### 伸缩原理

Redis集群提供了灵活的节点扩容和收缩方案。在不影响集群对外服务的情况下，可以为集群添加节点进行扩容也可以下线部分节点进行缩容，如下图

![avator](/images/redis13.png)

从上图看出，Redis集群可以实现对节点的灵活上下线控制。其中原理可抽象为槽和对应数据在不同节点之间灵活移动。首先来看我们之前搭建的集群槽和数据与节点的对应关系，如下图：

![avator](/images/redis14.png)

![avator](/images/redis15.png)

三个主节点分别维护自己负责的槽和对应的数据，如果希望加入1个节点实现集群扩容时，需要通过相关命令把一部分槽和数据迁移给新节点，如下图：

![avator](/images/redis16.png)

图中每个节点把一部分槽和数据迁移到新的节点6385，每个节点负责的槽和数据相比之前变少了从而达到了集群扩容的目的。这里我们故意忽略了槽和数据在节点之间迁移的细节，目的是想让读者重点关注在上层槽和节点分配上来，理解集群的水平伸缩的上层原理：集群伸缩=槽和数据在节点之间的移动，下面将介绍集群扩容和收缩的细节。

### 扩容集群

​	扩容是分布式存储最常见的需求，Redis集群扩容操作可分为如下步
骤：
1）准备新节点。
2）加入集群。
3）迁移槽和数据。

1.准备新节点
需要提前准备好新节点并运行在集群模式下，新节点建议跟集群内的节点配置保持一致，便于管理统一。准备好配置后启动两个节点命令如下：

```
redis-server conf/redis-6385.conf
redis-server conf/redis-6386.conf
```

启动后的新节点作为孤儿节点运行，并没有其他节点与之通信.

2.加入集群
新节点依然采用cluster meet命令加入到现有集群中。在集群内任意节点
执行cluster meet命令让6385和6386节点加入进来，命令如下：

```
127.0.0.1:6379> cluster meet 127.0.0.1 6385
127.0.0.1:6379> cluster meet 127.0.0.1 6386
```

集群内新旧节点经过一段时间的ping/pong消息通信之后，所有节点会发现新节点并将它们的状态保存到本地。例如我们在6380节点上执行cluster nodes命令可以看到新节点信息，如下所示：

```
127.0.0.1:6380>cluster ndoes
1a205dd8b2819a00dd1e8b6be40a8e2abe77b756 127.0.0.1:6385 master - 0 1469347800759
7 connected
475528b1bcf8e74d227104a6cf1bf70f00c24aae 127.0.0.1:6386 master - 0 1469347798743
8 connected
...
```

​	新节点刚开始都是主节点状态，但是由于没有负责的槽，所以不能接受任何读写操作。对于新节点的后续操作我们一般有两种选择：
​	·为它迁移槽和数据实现扩容。
​	·作为其他主节点的从节点负责故障转移。

​	redis-trib.rb工具也实现了为现有集群添加新节点的命令，还实现了直接
添加为从节点的支持，命令如下：

```
redis-trib.rb add-node new_host:new_port existing_host:existing_port --slave
--master-id <arg>
```

​	内部同样采用cluster meet命令实现加入集群功能。对于之前的加入集群操作，我们可以采用如下命令实现新节点加入：

```
redis-trib.rb add-node 127.0.0.1:6385 127.0.0.1:6379
redis-trib.rb add-node 127.0.0.1:6386 127.0.0.1:6379
```

运维提示

​	正式环境建议使用redis-trib.rb add-node命令加入新节点，该命令内部会执行新节点状态检查，如果新节点已经加入其他集群或者包含数据，则放弃集群加入操作并打印如下信息：

```
[ERR] Node 127.0.0.1:6385 is not empty. Either the node already knows other
nodes (check with CLUSTER NODES) or contains some key in database 0.
```

如果我们手动执行cluster meet命令加入已经存在于其他集群的节点，会造成被加入节点的集群合并到现有集群的情况，从而造成数据丢失和错乱，后果非常严重，线上谨慎操作。

3.迁移槽和数据
​	加入集群后需要为新节点迁移槽和相关数据，槽在迁移过程中集群可以正常提供读写服务，迁移过程是集群扩容最核心的环节，下面详细讲解。
​	（1）槽迁移计划
​	槽是Redis集群管理数据的基本单位，首先需要为新节点制定槽的迁移计划，确定原有节点的哪些槽需要迁移到新节点。迁移计划需要确保每个节点负责相似数量的槽，从而保证各节点的数据均匀。例如，在集群中加入6385节点，如图10-21所示。加入6385节点后，原有节点负责的槽数量从6380变为4096个。

槽迁移计划确定后开始逐个把槽内数据从源节点迁移到目标节点，如下图：

![avator](/images/redis17.png)



