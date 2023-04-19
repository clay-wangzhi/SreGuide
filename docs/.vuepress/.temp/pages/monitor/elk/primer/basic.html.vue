<template><h1 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h1>
<ul>
<li>Index索引
<ul>
<li>Type类型</li>
<li>Document文档</li>
</ul>
</li>
<li>Node节点
<ul>
<li>shard分片</li>
</ul>
</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567998428921.png" alt="1567998428921" loading="lazy"></p>
<h2 id="文档-document" tabindex="-1"><a class="header-anchor" href="#文档-document" aria-hidden="true">#</a> 文档（Document）</h2>
<ul>
<li>Elasticsearch是面向文档的，文档时所有可搜索数据的最小单位
<ul>
<li>日志文件中的日志项</li>
<li>一本电影的具体信息/一张唱片的详细信息</li>
<li>MP3播放器里的一首歌/一篇PDF文档中的具体内容</li>
</ul>
</li>
<li>文档会被序列化成JSON格式，保存在Elasticsearch中
<ul>
<li>JSON对象由字段组成</li>
<li>每个字段都有对应的字段类型（字符串/数值/布尔/日期/二进制/范围类型）</li>
</ul>
</li>
<li>每个文档都有一个Unique ID
<ul>
<li>你可以自己制定ID</li>
<li>或者通过Elasticsearch自动生成</li>
</ul>
</li>
</ul>
<h3 id="json文档" tabindex="-1"><a class="header-anchor" href="#json文档" aria-hidden="true">#</a> JSON文档</h3>
<ul>
<li>一篇文档包含了一系列的字段，类似数据库表中一条记录</li>
<li>JSON文档，格式灵活，不需要预先定义格式
<ul>
<li>字段的类型可以指定或通过Elasticsearch自动推算</li>
<li>支持数组/支持嵌套</li>
</ul>
</li>
</ul>
<h3 id="文档的元数据" tabindex="-1"><a class="header-anchor" href="#文档的元数据" aria-hidden="true">#</a> 文档的元数据</h3>
<ul>
<li>元数据，用于标注文档的相关信息
<ul>
<li>_index : 文档所属的索引名</li>
<li>_type：文档所属的类型名</li>
<li>_id：文档唯一id</li>
<li>_source：文档的原始JSON数据</li>
<li>_all：整合所有字段内容到该字段，已被废除</li>
<li>_version：文档的版本信息</li>
<li>_score：相关性打分</li>
</ul>
</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567998936909.png" alt="" loading="lazy"></p>
<h2 id="索引-index" tabindex="-1"><a class="header-anchor" href="#索引-index" aria-hidden="true">#</a> 索引（Index）</h2>
<ul>
<li>索引时文档的容器，是一类文档的结合
<ul>
<li>Index体现了逻辑空间的概念：每个索引都有自己的Mapping定义，用于定义包含的文档的字段名和字段类型</li>
<li>shard体现了物理空间的概念：索引中的数据分散在Shard上</li>
</ul>
</li>
<li>索引的Mapping与Settings
<ul>
<li>Mapping定义文档字段的类型</li>
<li>Setting定义不同的数据分布</li>
</ul>
</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567999265615.png" alt="" loading="lazy"></p>
<h3 id="索引的不通语意" tabindex="-1"><a class="header-anchor" href="#索引的不通语意" aria-hidden="true">#</a> 索引的不通语意</h3>
<ul>
<li>名词：一个Elasticsearch集群中，可以创建很多个不同的索引</li>
<li>动词：保存一个文档到Elasticsearch的过程也叫索引（Indexing）
<ul>
<li>ES中，创建一个倒排索引的过程</li>
</ul>
</li>
<li>在日常中的名词的含义：一个B树索引，一个倒排索引</li>
</ul>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h3>
<ul>
<li>在7.0之前，一个Index可以设置多个Types</li>
<li>6.0开始，Type已经被Deprecated。7.0开始，一个索引只能创建一个Type - &quot;_doc&quot;</li>
</ul>
<h2 id="与关系型数据库的类比" tabindex="-1"><a class="header-anchor" href="#与关系型数据库的类比" aria-hidden="true">#</a> 与关系型数据库的类比</h2>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567999614563.png" alt="" loading="lazy"></p>
<p>区别：</p>
<ul>
<li>Elasticsearch - Schemaless / 相关性（算分）/ 高性能全文检索</li>
<li>RDMS - 事务性 / Join</li>
</ul>
<h2 id="分布式相关概念" tabindex="-1"><a class="header-anchor" href="#分布式相关概念" aria-hidden="true">#</a> 分布式相关概念</h2>
<h3 id="可用性和扩展性" tabindex="-1"><a class="header-anchor" href="#可用性和扩展性" aria-hidden="true">#</a> 可用性和扩展性</h3>
<ul>
<li>高可用性
<ul>
<li>服务可用性 - 允许有节点停止服务</li>
<li>数据可用性 - 部分节点丢失，不会丢失数据</li>
</ul>
</li>
<li>可扩展性
<ul>
<li>请求量提升  / 数据的不断增长 （将数据分布到所有节点上）</li>
</ul>
</li>
</ul>
<h3 id="elasticsearch的分布式" tabindex="-1"><a class="header-anchor" href="#elasticsearch的分布式" aria-hidden="true">#</a> Elasticsearch的分布式</h3>
<ul>
<li>Elasticsearch的分布式架构的好处
<ul>
<li>存储的水平扩容</li>
<li>提高系统的可用性，部分节点停止服务，整个集群的服务不受影响</li>
</ul>
</li>
<li>Elasticsearch的分布式架构
<ul>
<li>不同的集群通过不同的名字来区分，默认名字&quot;Elasticsearch&quot;</li>
<li>通过配置文件修改，或者在命令行中 -E cluster.name=geektime 进行设定</li>
<li>一个集群可以有一个或者多个节点</li>
</ul>
</li>
</ul>
<h2 id="节点-node" tabindex="-1"><a class="header-anchor" href="#节点-node" aria-hidden="true">#</a> 节点（Node）</h2>
<ul>
<li>节点是一个Elasticsearch的实例
<ul>
<li>本质上就是一个JAVA进程</li>
<li>一台机器上可以运行多个Elasticsearch进程，但是生产环境一般建议一台机器上只运行一个Elasticsearch实例</li>
</ul>
</li>
<li>每一个节点都有名字，通过配置文件配置，或者启动时候指定 -E node.m=name=node1</li>
<li>每一个节点在启动之后，会分配一个UID，保存在data目录下</li>
</ul>
<h3 id="master-eligible-nodes-和-masternode" tabindex="-1"><a class="header-anchor" href="#master-eligible-nodes-和-masternode" aria-hidden="true">#</a> Master-eligible nodes 和 Masternode</h3>
<ul>
<li>每个节点启动后，默认就是一个Master eligible节点
<ul>
<li>可以设置node.master：false禁止</li>
</ul>
</li>
<li>Master-eligible节点可以参见选主流程，成为Master节点</li>
<li>当一个节点启动时候，它会将自己选举成Master节点</li>
<li>每个节点上都保存了集群的状态，只有Master节点才能修改集群的状态信息
<ul>
<li>集群状态（Cluster State），维护了一个集群中，必要的信息
<ul>
<li>所有的节点信息</li>
<li>所有的索引和其相关的Mapping与Setting信息</li>
<li>分片的路由信息</li>
</ul>
</li>
<li>任意节点都能修改信息会导致数据的不一致性</li>
</ul>
</li>
</ul>
<h3 id="data-node-coordinating-node" tabindex="-1"><a class="header-anchor" href="#data-node-coordinating-node" aria-hidden="true">#</a> Data node &amp; Coordinating Node</h3>
<ul>
<li>Data Node
<ul>
<li>可以保存数据的节点，叫做Data Node。负责保存分片数据，在数据扩展上起到了至关重要的作用</li>
</ul>
</li>
<li>Coordinating Node
<ul>
<li>负责接受Client的请求，将请求发到合适的节点，最终把结果汇集到一起</li>
<li>每个节点默认都起到了Coordinating Node的职责</li>
</ul>
</li>
</ul>
<h3 id="其他的节点类型" tabindex="-1"><a class="header-anchor" href="#其他的节点类型" aria-hidden="true">#</a> 其他的节点类型</h3>
<ul>
<li>Hot &amp; Warm Node
<ul>
<li>不通硬件配置的Data Node，用来实现Hot &amp; Warm架构，降低集群部署的成本</li>
</ul>
</li>
<li>Machine Learning Node
<ul>
<li>负责跑机器学习的Job，用来做异常检测</li>
</ul>
</li>
<li>Tribe Node
<ul>
<li>（5.3 开始使用Cross Cluster Search）Tribe Node连接到不同的Elasticsearch集群，并且支持将这些集群当成一个单独的集群处理</li>
</ul>
</li>
</ul>
<h3 id="配置节点类型" tabindex="-1"><a class="header-anchor" href="#配置节点类型" aria-hidden="true">#</a> 配置节点类型</h3>
<ul>
<li>开发环境中一个节点可以承担多种角色</li>
<li>生产环境中，应该设置单一的角色的节点（dedicated node）</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568006607109.png" alt="" loading="lazy"></p>
<h2 id="分片-shard" tabindex="-1"><a class="header-anchor" href="#分片-shard" aria-hidden="true">#</a> 分片（Shard）</h2>
<ul>
<li>主分片，用以解决数据水平扩展的问题。通过主分片，可以将数据分布到集群内的所有节点之上
<ul>
<li>一个分片是一个运行的Lucene的实例</li>
<li>主分片数在索引创建时指定，后续不允许修改，出发Reindex</li>
</ul>
</li>
<li>副本，用以解决数据高可用的问题。分布是主分片的拷贝
<ul>
<li>副本分片数，可以动态调整</li>
<li>增加副本数，还可以在一定程度上提高服务的可用性（读取的吞吐）</li>
</ul>
</li>
</ul>
<p>示例：一个三个节点的集群中，blogs索引的分片分布情况</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568007457411.png" alt="" loading="lazy"></p>
<h3 id="分片的设定" tabindex="-1"><a class="header-anchor" href="#分片的设定" aria-hidden="true">#</a> 分片的设定</h3>
<ul>
<li>
<p>对于生产环境中分片的设定，需要提前做好容量规划</p>
<ul>
<li>分片数设置过小
<ul>
<li>导致后续无法增加节点实现水平扩展</li>
<li>单个分片的数据量太大，导致数据重新分配耗时</li>
</ul>
</li>
<li>分片数设置过大，7.0开始，默认主分片设置成1，解决了over-sharding的问题
<ul>
<li>影响搜索结果的相关性打分，影响统计结果的准确性</li>
<li>单个节点上过多的分片，会导致资源浪费，同时也会影响性能</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="查看集群的健康状况" tabindex="-1"><a class="header-anchor" href="#查看集群的健康状况" aria-hidden="true">#</a> 查看集群的健康状况</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568009261188.png" alt="" loading="lazy"></p>
<ul>
<li>Green - 主分片与副本都正常分配</li>
<li>Yellow - 主分片全部正常分配，有副本分片未能正常分配</li>
<li>Red - 有主分片未能分配
<ul>
<li>例如，当服务器的磁盘容量超过85%时，去创建了一个新的索引</li>
</ul>
</li>
</ul>
</template>
