<template><h2 id="elasticsearch基础概念" tabindex="-1"><a class="header-anchor" href="#elasticsearch基础概念" aria-hidden="true">#</a> Elasticsearch基础概念</h2>
<h3 id="elasticsearch关键概念" tabindex="-1"><a class="header-anchor" href="#elasticsearch关键概念" aria-hidden="true">#</a> Elasticsearch关键概念</h3>
<ul>
<li>Document（文档）：用户存储在es中的数据文档，它是以JSON格式定义的特定方式的字段集合。每个文档都属于一个类型，并驻留在一个索引中。每个文档都有一个唯一的标识符，称为UID。</li>
<li>Index（索引）：包含一堆有相似结构的文档数据，比如可以有一个客户索引，商品分类索引，订单索引，索引有一个名称。一个index包含很多document，一个index就代表了一类类似的或者相同的Document。比如说建立一个商品索引，里面可能就存放了所有的商品数据。</li>
<li>Type/Mapping（类型/映射）：它是共享同一索引中一组公共字段的文档集合。例如，索引包含社交网络应用程序的数据，然后可以有特定类型的用户简档数据、另一种类型的消息数据和另一种类型的评论数据。</li>
<li>Node（节点）：它指的是ElasticSearch的单个运行实例，是集群的构成单元。单个物理和虚拟服务器可容纳多个节点，具体取决于其物理资源(如内存、存储和处理能力)的能力。</li>
<li>Cluster（集群）：它是一个或多个节点组成的集合。集群为整个数据提供跨节点的索引和搜索功能。</li>
<li>Shard（分片）：单台机器无法存储大量数据，ElasticSearch可以将一个索引中的数据切分为多个Shard，分布在多台服务器上存储。有了Shard就可以横向扩展，存储更多数据，让搜索和分析等操作分布到多台服务器上去执行，提升吞吐量和性能。</li>
<li>Replicas(副本):服务器随时可能故障或宕机，此时Shard可能就会丢失，因此可以为每个Shard创建多个Replica副本。Replica可以在Shard故障时提供备用服务，保证数据不丢失，多个Replica还可以提升搜索操作的吞吐量和性能。</li>
</ul>
<h3 id="document-文档" tabindex="-1"><a class="header-anchor" href="#document-文档" aria-hidden="true">#</a> Document（文档）</h3>
<p>document其实就是json object 由字段（Field)组成，常见的类型：</p>
<ul>
<li>
<p>字符串：keyword（不分词）,text(分词)</p>
</li>
<li>
<p>数值型：long,integer,short,byte,double,float,half_float,scaled_float</p>
</li>
<li>
<p>布尔：boolean</p>
</li>
<li>
<p>日期：date</p>
</li>
<li>
<p>二进制：binary</p>
</li>
<li>
<p>范围类型：integer_range,float_range,long_range,double_range,date_range</p>
</li>
</ul>
<p>每一个文档有唯一的ID标识</p>
<ul>
<li>自行指定</li>
<li>es 自动生成</li>
</ul>
<p><img src="images/document01.png" alt="" loading="lazy"></p>
<ul>
<li>元数据，用于标注文档的相关信息
<ul>
<li>_index：文档所在的索引名</li>
<li>_type：文档所在的类型名</li>
<li>_id：文档唯一id</li>
<li>_uid：组合id，由_type和_id组成（6.x _type不再起作用，同id一样）</li>
<li>_source：文档的原始Json数据，可以从这里获取每个字段的内容</li>
<li>_all：整合所有字段内容到该字段，默认禁用</li>
</ul>
</li>
</ul>
<blockquote>
<p>注意：元数据不能删除</p>
</blockquote>
<h3 id="index-索引" tabindex="-1"><a class="header-anchor" href="#index-索引" aria-hidden="true">#</a> Index（索引）</h3>
<ul>
<li>索引中存储具有相同结构的文档（Document）
<ul>
<li>每个索引都有自己的mapping定义，用于定义字段名和类型</li>
</ul>
</li>
<li>一个集群可以有多个索引，比如：
<ul>
<li>nginx日志存储的时候可以按照日期每天生产一个索引来存储
<ul>
<li>nginx_log_2019-08-01</li>
<li>nginx_log_2019-08-02</li>
<li>nginx_log_2019-08-03</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping" aria-hidden="true">#</a> Mapping</h3>
<h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h4>
<ul>
<li>类似数据库中的表结构定义，主要作用如下：
<ul>
<li>定义Index下的字段名（Field Name）</li>
<li>定义字段的类型，比如数值型、字符串型、布尔型等</li>
<li>定义倒排索引相关的配置，比如是否索引、记录position等</li>
</ul>
</li>
</ul>
<p><img src="images/mapping01.png" alt="" loading="lazy"></p>
<p><img src="images/mapping02.png" alt="" loading="lazy"></p>
<blockquote>
<p>Mapping中的字段类型一旦设定后，禁止直接修改，原因如下：</p>
<p>​	Lucene实现的倒排索引生成后不允许修改</p>
</blockquote>
<h4 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数</h4>
<h5 id="dynamic" tabindex="-1"><a class="header-anchor" href="#dynamic" aria-hidden="true">#</a> Dynamic</h5>
<ul>
<li>允许新增字段，通过dynamic参数来控制字段的新增
<ul>
<li>true（默认）允许自动新增字段</li>
<li>false不允许自动新增字段，但是文档可以正常写入，但无法对字段进行查询等操作</li>
<li>strict文档不能写入，报错</li>
</ul>
</li>
</ul>
<h5 id="copy-to" tabindex="-1"><a class="header-anchor" href="#copy-to" aria-hidden="true">#</a> copy_to</h5>
<ul>
<li>将该字段的值复制到目标字段，实现类似_all的作用</li>
<li>不会出现在_source中，只用来搜索</li>
</ul>
<h5 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h5>
<ul>
<li>控制当前字段是否索引，默认为true，即记录索引，false不记录，即不可搜索</li>
</ul>
<h5 id="index-options" tabindex="-1"><a class="header-anchor" href="#index-options" aria-hidden="true">#</a> index_options</h5>
<ul>
<li>用于控制倒排索引记录的内容，有如下4种配置
<ul>
<li>docs：只记录doc id</li>
<li>freqs：记录doc id和term frequencies</li>
<li>positions：记录doc id、term frequencies和term position</li>
<li>offsets：记录doc id、term frequencies、term position和character offsets</li>
</ul>
</li>
<li>text类型默认配置为positions，其他默认为docs</li>
<li>记录内容越多，占用空间越大</li>
</ul>
<h5 id="null-value" tabindex="-1"><a class="header-anchor" href="#null-value" aria-hidden="true">#</a> null_value</h5>
<ul>
<li>当字段遇到null值时的处理策略，默认为null，即控制，此时es会忽略该值。可以通过设定该值设定字段的默认值</li>
</ul>
<h3 id="rest-api" tabindex="-1"><a class="header-anchor" href="#rest-api" aria-hidden="true">#</a> Rest API</h3>
<ul>
<li>
<p>Elasticsearch集群对外提供Restful API</p>
<ul>
<li>REST：REpresentational State Transfer</li>
<li>URL指定资源，如Index、Document等</li>
<li>Http Method指明资源操作类型，如GET、POST、PUT、DELETE等</li>
</ul>
</li>
</ul>
<p><img src="images/rest01.png" alt="" loading="lazy"></p>
<h4 id="创建文档" tabindex="-1"><a class="header-anchor" href="#创建文档" aria-hidden="true">#</a> 创建文档</h4>
<p><img src="images/create01.png" alt="" loading="lazy"></p>
<p><img src="images/create02.png" alt="" loading="lazy"></p>
<h4 id="查询文档" tabindex="-1"><a class="header-anchor" href="#查询文档" aria-hidden="true">#</a> 查询文档</h4>
<p><img src="images/select01.png" alt="" loading="lazy"></p>
<p><img src="images/select02.png" alt="" loading="lazy"></p>
<h4 id="批量创建" tabindex="-1"><a class="header-anchor" href="#批量创建" aria-hidden="true">#</a> 批量创建</h4>
<p><img src="images/create03.png" alt="" loading="lazy"></p>
<h4 id="批量查询" tabindex="-1"><a class="header-anchor" href="#批量查询" aria-hidden="true">#</a> 批量查询</h4>
<p><img src="images/select03.png" alt="" loading="lazy"></p>
</template>
