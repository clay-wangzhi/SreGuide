# 运维简介

## 什么是运维

​	**运维**，这里指互联网运维，通常属于技术部门，与研发、测试同为互联网产品技术支撑的3大部门，这个划分在国内和国外以及大小公司间都会多少有一些不同。

​	一个互联网产品的生成一般经历的过程是：项目立项、需求分析、研发部门开发、测试部门测试、运维部门部署发布以及长期的运行维护。

​	运维，本质上是对网络、服务器、服务的生命周期各个阶段的运营与维护，在成本、稳定性、效率上达成一致可接受的状态。

​	简单理解，研发、测试不干的活，小公司都可以归运维管。



## 运维组织架构及职责

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240824191520070.png)

**基础设施运维（INFR）**：负责IDC、网络、CDN 和 基础服务的建设（LVS/DPVS、NTP、DNS）；负责资产管理，服务器选型、交付和维修；负责内核选型和 OS 相关维护工作。

**应用运维（SRE）**：保障服务的稳定性，包括不限于云原生建设、高可用性建设、可观测性建设、容量规划、性能优化、故障排查与问题解决、预案和演练、备份与容灾恢复、安全和权限控制、设计评审、工具开发。

**运维开发（DevOps）**：建立面向资源的 CMDB、多云管理、资源管理；面向应用的 配置平台、作业平台、发布系统、调度编排；面向业务的数据运营、可视化分析、FinOps、流程系统等。

**数据运维（DBA）**：负责数据存储方案设计、数据库表结构设计、索引设计和 SQL 优化，对数据库进行变更、监控、备份、架构设计等工作。

**中间件运维**：负责各种中间件的维护、优化、治理、二开等，包括不限于Apollo、Nacos、Kafka、ES、HBase、Gateway。



## 分层图

### 运维监控对象分层

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240825200913578.png)

### High-Level 架构图

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240825201615234.png)

## 运维技能表

| 分类      | 技能列表                                                     |
| --------- | ------------------------------------------------------------ |
| 硬件&文件 | 机械硬盘、SSD、文件系统（ext4、xfs）、LVM、tmpfs、rsync、FTP、Raid |
| 网络      | 专线、防火墙、路由器、Ipsec VPN、OSPF、BGP、GRE、Vxlan、二层交换、三层交换 |
| 基建服务  | NTP、DNS、LVS/DPVS、CDN、Keepalived                          |
| 容器      | K8s、CRI、CNI、CSI                                           |
| 负载均衡  | Haproxy、Nginx、F5、WAF、SLB                                 |
| 数据库    | MySQL、PostgreSQL、SqlServer、Redis、Mongodb、TiDB、InfluxDB |
| 中间件    | Apollo、Nacos、Kafka、ES、HBase、Gateway、Ceph、Zookeeper、XXL-JOB、JumpServer |

SRE / DevOps 之前整理过，如下图

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240207104045420.png)



---

既然是给 HR 看的 

HR 问， 运维需要懂这么多东西啊，那工资是不是应该高一些

运维 答： 是的

enjoy~

---

你所了解的运维是干什么的？你们公司的运维组织架构是怎样的？

欢迎在留言区进行讨论



参考链接：

* 百度百科：https://baike.baidu.com/item/%E8%BF%90%E7%BB%B4/8253097
* 数字化运维：IT运维架构的数字化转型  |  嘉为科技
* SRE 实战手册 | 赵成
* 运维知识体系-v3.1 |赵舜东（赵班长）：https://www.unixhot.com





我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/SreGuide  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容

<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240615194414355-20240825204232885.png" alt="weixin" style="zoom: 50%;" />

