---
category: 监控
tags:
  - ELK
---

# Elasticsearch 简介及其发展历史

## 从开源到上市

* 2018年10月纽交所上市，Elastic Inc -开源软件/上市公司
* 当前市值超过50亿美金，开盘当天涨幅达94%
* Elasticsearch软件下载量，超3.5亿次
* 10万+的社区成员
* 7200+订阅用户，分布在100+国家
* 云服务平台的接入- Elastic，Amazon，阿里巴巴，腾讯

## Elasticsearch的诞生

* 2004年Shay Banon基于Lucene开发了Compass
* 2010年Shay Banon重写了Compass，取名Elasticsearch

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567739412739.png)

### Lucene简介

* 基于Java语言开发的搜索引擎库类
* 创建于1999年，2005年成为Apache顶级开源项目
* Lucene具有高性能、易扩张的优点
* Lucene的局限性：
  * 只能基于Java语言开发
  * 类库的接口学习曲线陡峭
  * 原生并不支持水平扩展

### Elasticsearch的特性

* 近实时（Near Real Time）

* 分布式存储/搜索/分析引擎

* 支持多中方式集成接入
  * 多种编程语言的类库
  * RESTful API
  * JDBC & ODBC

### Elasticsearch的分布式架构

* 集群规模可以从单个扩展到数百个节点
* 高可用 & 水平扩展
  * 服务和数据的两个纬度
* 支持不同的节点类型
  * 支持 Hot & Warm架构

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567737803003.png)

### Elasticsearch版本与升级

* 0.4：2010年2月第一次发布
* 1.0：2014年1月
* 2.0：2015年10月
* 5.0：2016年10月
* 6.0：2017年10月
* 7.0：2019年4月

#### 新特性5.X

* Lucene6.x，性能提升，默认打分机制从TF-IDF改为BM25
* 支持Ingest节点/Painless Scripting/Compltion suggested支持/原生的Java REST客户端
* Type标记成deprecad，支持了Keyword的类型
* 性能优化
  * 内部引擎移除了避免同一文档并发更新的竞争锁，带来15%~20%的性能提升
  * Instant aggregation，支持分片上聚合的缓存
  * 新增了Profile API

#### 新特性6.X

* Lucene 7.X
* 新功能
  * 跨集群复制（CCR）
  * 索引生命周期管理
  * SQL的支持
* 更友好的升级及数据迁移
  * 在主要版本之间的迁移更为简化，体验升级
  * 全新的基于操作的数据复制框架，可加快数据恢复
* 性能优化
  * 有效存储稀疏字段的新方法，降低了存储成本
  * 在索引时进行排序，可加快排序的查询性能

#### 新特性7.X

* Lucene 8.0
* 重大改进 - 正式废除单个索引下多Type的支持
* 7.1 开始，Security功能免费使用
* ECK - Elasticsearch Operator on Kubernetes
* 新功能
  * New Cluster coordination
  * Feature - Complete High Level REST Client
  * Script Score Query
* 性能优化
  * 默认的Primary Shard数从5改为1，避免Over Sharding
  * 性能优化，更快的Top K