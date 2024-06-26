# 参会感-SRE 精英联盟-线下 Meetup 

## 联盟介绍

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240415165422736.png)

- 2003年，Google 启动了一个全新的团队——“SRE 团队”，该团队旨在通过软件工程的方法提高应用系统的可靠性。
- 2016年，孙宇聪翻译出版了首部 SRE 著作《SRE：Google 运维解密》。
- 2020年，赵成在极客时间开设了课程《SRE 实战手册》，牵头成立SRE 研讨社区。
- 2022 年，由赵成等人牵头，首批来自于互联网、运营商、金融等行业领军企业的 SRE 团队负责人齐聚一堂，组织了SRE 研讨社区，定期开展社区分享活动，共同探讨 SRE 在各企业里的发展路径，分享各自的实战经验，并总结出了这份来自一线实战的、详实而持续更新的《SRE 实践白皮书》。
- 2023年11月，SRE 精英联盟正式成立。
- 2024年2月，《SRE 实践白皮书》首次正式发布，下载地址：https://sre-elite.com/notice/wp-v-1.0.2/
- 2024年2月29日，联盟首次直播。
- 2024年4月13日，联盟首次线下 Meetup。

活动的目的是为了促进 SRE 的发展，让更多的企业了解 SRE 的实际应用方式，以及SRE的最佳实践，每次活动结束后，会定期更新**《SRE 实践白皮书》**。

## 参会感

### 这里有一批对 SRE 充满热情的倡导者

会中与党受辉大佬聊了一会，期望能加入 SRE 精英联盟专家团队。当然我资格还不够😅，如果小伙伴也期望加入 专家团队，可以反问自己这些问题，是否有资格。

* 工作年限及履历，带领了多少人的团队
* 在 SRE 某个细分领域是否有突出贡献，做出一些业界常用的 SRE 平台或工具
* 维护物理机、虚拟机、容器的规模
* 有无为业界做过宣传、交流、分享，如在 xxx 运维大会分享过什么内容

无论加入与否，我们都可以通过，书籍、博客、公众号、线下 meetup 等， 站在巨人的肩膀上，学习 SRE 相关技术，进行有效产出，促进 SRE 在国内的发展。

### 发布二三事

有一点，笔者学习到比较好的规范是：核心系统，PRD 发布，必须上传性能测试报告和压力测试报过。

* 基础性能测试，能在上线后避免很多问题
* 有压力测试报告后，才方便做 HPA

### 新项目如何推进

在降本增效的浪潮下，基础架构开始发生变化：

虚拟机 ---> 容器

ELK ---> Clickhouse

OpenStack/Ovirt ---> kubevirt



如何才能更好的推进？

1）尽可能对用户产生价值。

用户价值 =  新体验 - 旧体验 - 替换成本



2）借助其他团队力量

比如已安全的 xx 项目的名义，强制接入自己的项目，属于依赖项



3）价值可视化



4）小步快走，切忌大包大揽



5）前期设置 绿色通道，方便各部门前期配合



6）尽可能让用户少改动，或接入方便

虚拟机---> 容器，比如开发习惯使用 自动化运维平台 操作虚拟机，那么前期也在 自动化运维平台 操作容器；在 Jumpserver 登录虚拟机，那么前期也在 Jumpserver 登录容器

ELK ---> Clickhouse， 开发习惯使用 Kibana 查日志，前期可以对 Kibana 二开或者 CK 语法转化为 ES 语法，设置代理层



### 虚心学习

发现来了好多大厂的大佬， 蚂蚁、字节、腾讯、B站、携程等 SRE负责人/专家 或更高 level 的大佬

大厂的技术是比较靠前的，比如 B站/蚂蚁 的 变更防控系统，已经落地了大部分，个人感觉挺有价值的，能规避很多产线故障，这属实 故障前的一个操作，之前我们更多关注的是故障中或故障后，很高效的形成了闭环，标准化/自动化 的规避了同类问题的再次发生。

携程的 Cilium 以及 Kubevirt 等落地，都是比较靠前的，值得学习。





参考：

https://sre-elite.com/

顾黄亮： 发布之二三事

刘浩：B站变更防控设计与实践

刘芽：携程云基础设施变更管理实践
