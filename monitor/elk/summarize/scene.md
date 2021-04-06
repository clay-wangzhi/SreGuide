# Elastic Stack 家族成员及其应用场景

## Elastic Stack 生态圈

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567739481410.png)

### Logstash： 数据处理管道

* 开源的服务端数据处理管道，支持从不同来源采集数据，转换数据，并将数据发送到不通的存储库中

* 发展
  * Logstash诞生于2009年，最初用来做日志的采集与处理
  * 2013年被Elasticsearch收购
* 特性
  * 实时解析和转换数据
    * 从IP地址破译出地理坐标
    * 将PII数据匿名化，完全排除敏感字段
  * 可扩展 - 200多个插件（日志/数据库/Acsigh/Netflow）
  * 可靠性安全
    * logstash会通过持久化队列来保证至少将运行中的事件送达一次
    * 数据传输加密

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567739654345.png)

### Kibana：可视化分析利器

* Kibana名字的含义：Kiwifruit + Banana
* 数据可视化工具，帮助用户解开对数据的任何疑问
* 基于logstash的工具，2013年加入Elastic公司

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567739969747.png)

### Beats：轻量级的数据采集器



![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567740031729.png)

### X-pack：商业化套件

* 6.3之前的版本，X-pack以插件方式安装
* X-pack开源之后，ElasticSearch & Kibana支持OSS版和Basic两种版本
  * 部分X-pack功能支持免费使用，6.8和7.1开始，Security功能免费
* OSS，Basic，黄金级，白金级

## ELK应用场景

* 网站搜索/垂直搜索/代码搜索
* 日志管理与分析/安全指标监控/应用性能监控/WEB支取舆情分

### 日志的重要性

* 为什么重要
  * 运维：医生给病人看病，日志就是病人对自己的陈述
  * 恶意攻击，恶意注册，刷单，恶意密码猜测
* 挑战
  * 关注点很多，任何一个点都有可能引起问题
  * 日志分散在很多机器，出了问题时，才发现日志被删了
  * 很多运维人员是消防员，哪里有问题去哪里

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567740850711.png)

### 日志管理流程

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567740876961.png)

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567740904642.png)