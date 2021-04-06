# Search API概览

## Search API

* URI Search
  * 在URL中使用查询参数
* Request Body Search
  * 使用Elasticsearch提供的，基于JSON格式的更加完备的Query Domain Specific Language （DSL）

### 指定查询的索引

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568097742808.png)

### URI查询

* 使用"q"，指定查询字符串
* "query string syntax"，KV键值对

举例

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568097928424.png)

### Request Body

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568098031540.png)

### 搜索Response字段说明

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568098178099.png)

## 衡量相关性

* Information Retrieval（检索）
  * Rrecision（查准率） - 尽可能返回较少的无关文档
  * Recall （查全率）- 尽量返回较多的相关文档
  * Ranking - 是否能够按照相关度进行排序

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1568098803331.png)