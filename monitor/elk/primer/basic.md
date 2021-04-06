# 基本概念

* Index索引
  * Type类型
  * Document文档
* Node节点
  * shard分片

![1567998428921](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567998428921.png)

## 文档（Document）

* Elasticsearch是面向文档的，文档时所有可搜索数据的最小单位
  * 日志文件中的日志项
  * 一本电影的具体信息/一张唱片的详细信息
  * MP3播放器里的一首歌/一篇PDF文档中的具体内容
* 文档会被序列化成JSON格式，保存在Elasticsearch中
  * JSON对象由字段组成
  * 每个字段都有对应的字段类型（字符串/数值/布尔/日期/二进制/范围类型）
* 每个文档都有一个Unique ID
  * 你可以自己制定ID
  * 或者通过Elasticsearch自动生成

### JSON文档

* 一篇文档包含了一系列的字段，类似数据库表中一条记录
* JSON文档，格式灵活，不需要预先定义格式
  * 字段的类型可以指定或通过Elasticsearch自动推算
  * 支持数组/支持嵌套

### 文档的元数据

* 元数据，用于标注文档的相关信息
  * _index : 文档所属的索引名
  * _type：文档所属的类型名
  * _id：文档唯一id
  * _source：文档的原始JSON数据
  * _all：整合所有字段内容到该字段，已被废除
  * _version：文档的版本信息
  * _score：相关性打分

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567998936909.png)

## 索引（Index）

* 索引时文档的容器，是一类文档的结合
  * Index体现了逻辑空间的概念：每个索引都有自己的Mapping定义，用于定义包含的文档的字段名和字段类型
  * shard体现了物理空间的概念：索引中的数据分散在Shard上
* 索引的Mapping与Settings
  * Mapping定义文档字段的类型
  * Setting定义不同的数据分布

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567999265615.png)

### 索引的不通语意

* 名词：一个Elasticsearch集群中，可以创建很多个不同的索引
* 动词：保存一个文档到Elasticsearch的过程也叫索引（Indexing）
  * ES中，创建一个倒排索引的过程
* 在日常中的名词的含义：一个B树索引，一个倒排索引

### Type

* 在7.0之前，一个Index可以设置多个Types
* 6.0开始，Type已经被Deprecated。7.0开始，一个索引只能创建一个Type - "_doc"

## 与关系型数据库的类比

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567999614563.png)

区别：

* Elasticsearch - Schemaless / 相关性（算分）/ 高性能全文检索
* RDMS - 事务性 / Join

## 分布式相关概念

### 可用性和扩展性

* 高可用性
  * 服务可用性 - 允许有节点停止服务
  * 数据可用性 - 部分节点丢失，不会丢失数据
* 可扩展性
  * 请求量提升  / 数据的不断增长 （将数据分布到所有节点上）

### Elasticsearch的分布式

* Elasticsearch的分布式架构的好处
  * 存储的水平扩容
  * 提高系统的可用性，部分节点停止服务，整个集群的服务不受影响
* Elasticsearch的分布式架构
  * 不同的集群通过不同的名字来区分，默认名字"Elasticsearch"
  * 通过配置文件修改，或者在命令行中 -E cluster.name=geektime 进行设定
  * 一个集群可以有一个或者多个节点

## 节点（Node）

* 节点是一个Elasticsearch的实例
  * 本质上就是一个JAVA进程
  * 一台机器上可以运行多个Elasticsearch进程，但是生产环境一般建议一台机器上只运行一个Elasticsearch实例
* 每一个节点都有名字，通过配置文件配置，或者启动时候指定 -E node.m=name=node1
* 每一个节点在启动之后，会分配一个UID，保存在data目录下

### Master-eligible nodes 和 Masternode

* 每个节点启动后，默认就是一个Master eligible节点
  * 可以设置node.master：false禁止
* Master-eligible节点可以参见选主流程，成为Master节点
* 当一个节点启动时候，它会将自己选举成Master节点
* 每个节点上都保存了集群的状态，只有Master节点才能修改集群的状态信息
  * 集群状态（Cluster State），维护了一个集群中，必要的信息
    * 所有的节点信息
    * 所有的索引和其相关的Mapping与Setting信息
    * 分片的路由信息
  * 任意节点都能修改信息会导致数据的不一致性

### Data node & Coordinating Node

* Data Node
  * 可以保存数据的节点，叫做Data Node。负责保存分片数据，在数据扩展上起到了至关重要的作用
* Coordinating Node
  * 负责接受Client的请求，将请求发到合适的节点，最终把结果汇集到一起
  * 每个节点默认都起到了Coordinating Node的职责

### 其他的节点类型

* Hot & Warm Node
  * 不通硬件配置的Data Node，用来实现Hot & Warm架构，降低集群部署的成本
* Machine Learning Node
  * 负责跑机器学习的Job，用来做异常检测
* Tribe Node
  * （5.3 开始使用Cross Cluster Search）Tribe Node连接到不同的Elasticsearch集群，并且支持将这些集群当成一个单独的集群处理

### 配置节点类型

* 开发环境中一个节点可以承担多种角色
* 生产环境中，应该设置单一的角色的节点（dedicated node）

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568006607109.png)

## 分片（Shard）

* 主分片，用以解决数据水平扩展的问题。通过主分片，可以将数据分布到集群内的所有节点之上
  * 一个分片是一个运行的Lucene的实例
  * 主分片数在索引创建时指定，后续不允许修改，出发Reindex
* 副本，用以解决数据高可用的问题。分布是主分片的拷贝
  * 副本分片数，可以动态调整
  * 增加副本数，还可以在一定程度上提高服务的可用性（读取的吞吐）

示例：一个三个节点的集群中，blogs索引的分片分布情况

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568007457411.png)

### 分片的设定

* 对于生产环境中分片的设定，需要提前做好容量规划

  * 分片数设置过小
    * 导致后续无法增加节点实现水平扩展
    * 单个分片的数据量太大，导致数据重新分配耗时
  * 分片数设置过大，7.0开始，默认主分片设置成1，解决了over-sharding的问题
    * 影响搜索结果的相关性打分，影响统计结果的准确性
    * 单个节点上过多的分片，会导致资源浪费，同时也会影响性能

### 查看集群的健康状况

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568009261188.png)

* Green - 主分片与副本都正常分配
* Yellow - 主分片全部正常分配，有副本分片未能正常分配
* Red - 有主分片未能分配
  * 例如，当服务器的磁盘容量超过85%时，去创建了一个新的索引

