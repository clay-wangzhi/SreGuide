<template><h1 id="elasticsearch-简介及其发展历史" tabindex="-1"><a class="header-anchor" href="#elasticsearch-简介及其发展历史" aria-hidden="true">#</a> Elasticsearch 简介及其发展历史</h1>
<h2 id="从开源到上市" tabindex="-1"><a class="header-anchor" href="#从开源到上市" aria-hidden="true">#</a> 从开源到上市</h2>
<ul>
<li>2018年10月纽交所上市，Elastic Inc -开源软件/上市公司</li>
<li>当前市值超过50亿美金，开盘当天涨幅达94%</li>
<li>Elasticsearch软件下载量，超3.5亿次</li>
<li>10万+的社区成员</li>
<li>7200+订阅用户，分布在100+国家</li>
<li>云服务平台的接入- Elastic，Amazon，阿里巴巴，腾讯</li>
</ul>
<h2 id="elasticsearch的诞生" tabindex="-1"><a class="header-anchor" href="#elasticsearch的诞生" aria-hidden="true">#</a> Elasticsearch的诞生</h2>
<ul>
<li>2004年Shay Banon基于Lucene开发了Compass</li>
<li>2010年Shay Banon重写了Compass，取名Elasticsearch</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567739412739.png" alt="" loading="lazy"></p>
<h3 id="lucene简介" tabindex="-1"><a class="header-anchor" href="#lucene简介" aria-hidden="true">#</a> Lucene简介</h3>
<ul>
<li>基于Java语言开发的搜索引擎库类</li>
<li>创建于1999年，2005年成为Apache顶级开源项目</li>
<li>Lucene具有高性能、易扩张的优点</li>
<li>Lucene的局限性：
<ul>
<li>只能基于Java语言开发</li>
<li>类库的接口学习曲线陡峭</li>
<li>原生并不支持水平扩展</li>
</ul>
</li>
</ul>
<h3 id="elasticsearch的特性" tabindex="-1"><a class="header-anchor" href="#elasticsearch的特性" aria-hidden="true">#</a> Elasticsearch的特性</h3>
<ul>
<li>
<p>近实时（Near Real Time）</p>
</li>
<li>
<p>分布式存储/搜索/分析引擎</p>
</li>
<li>
<p>支持多中方式集成接入</p>
<ul>
<li>多种编程语言的类库</li>
<li>RESTful API</li>
<li>JDBC &amp; ODBC</li>
</ul>
</li>
</ul>
<h3 id="elasticsearch的分布式架构" tabindex="-1"><a class="header-anchor" href="#elasticsearch的分布式架构" aria-hidden="true">#</a> Elasticsearch的分布式架构</h3>
<ul>
<li>集群规模可以从单个扩展到数百个节点</li>
<li>高可用 &amp; 水平扩展
<ul>
<li>服务和数据的两个纬度</li>
</ul>
</li>
<li>支持不同的节点类型
<ul>
<li>支持 Hot &amp; Warm架构</li>
</ul>
</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567737803003.png" alt="" loading="lazy"></p>
<h3 id="elasticsearch版本与升级" tabindex="-1"><a class="header-anchor" href="#elasticsearch版本与升级" aria-hidden="true">#</a> Elasticsearch版本与升级</h3>
<ul>
<li>0.4：2010年2月第一次发布</li>
<li>1.0：2014年1月</li>
<li>2.0：2015年10月</li>
<li>5.0：2016年10月</li>
<li>6.0：2017年10月</li>
<li>7.0：2019年4月</li>
</ul>
<h4 id="新特性5-x" tabindex="-1"><a class="header-anchor" href="#新特性5-x" aria-hidden="true">#</a> 新特性5.X</h4>
<ul>
<li>Lucene6.x，性能提升，默认打分机制从TF-IDF改为BM25</li>
<li>支持Ingest节点/Painless Scripting/Compltion suggested支持/原生的Java REST客户端</li>
<li>Type标记成deprecad，支持了Keyword的类型</li>
<li>性能优化
<ul>
<li>内部引擎移除了避免同一文档并发更新的竞争锁，带来15%~20%的性能提升</li>
<li>Instant aggregation，支持分片上聚合的缓存</li>
<li>新增了Profile API</li>
</ul>
</li>
</ul>
<h4 id="新特性6-x" tabindex="-1"><a class="header-anchor" href="#新特性6-x" aria-hidden="true">#</a> 新特性6.X</h4>
<ul>
<li>Lucene 7.X</li>
<li>新功能
<ul>
<li>跨集群复制（CCR）</li>
<li>索引生命周期管理</li>
<li>SQL的支持</li>
</ul>
</li>
<li>更友好的升级及数据迁移
<ul>
<li>在主要版本之间的迁移更为简化，体验升级</li>
<li>全新的基于操作的数据复制框架，可加快数据恢复</li>
</ul>
</li>
<li>性能优化
<ul>
<li>有效存储稀疏字段的新方法，降低了存储成本</li>
<li>在索引时进行排序，可加快排序的查询性能</li>
</ul>
</li>
</ul>
<h4 id="新特性7-x" tabindex="-1"><a class="header-anchor" href="#新特性7-x" aria-hidden="true">#</a> 新特性7.X</h4>
<ul>
<li>Lucene 8.0</li>
<li>重大改进 - 正式废除单个索引下多Type的支持</li>
<li>7.1 开始，Security功能免费使用</li>
<li>ECK - Elasticsearch Operator on Kubernetes</li>
<li>新功能
<ul>
<li>New Cluster coordination</li>
<li>Feature - Complete High Level REST Client</li>
<li>Script Score Query</li>
</ul>
</li>
<li>性能优化
<ul>
<li>默认的Primary Shard数从5改为1，避免Over Sharding</li>
<li>性能优化，更快的Top K</li>
</ul>
</li>
</ul>
</template>
