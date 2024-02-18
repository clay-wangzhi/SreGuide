# 面试题

总结最近面试的 SRE、DevOps 真题，从经验方案、云原生、稳定性、可观测性、DevOps、K8s基础知识 几方面提问，然后我通过 ChatGPT 回答，不得不说，ChatGPT  回答的真好，内容较长，建议先收藏，回头需要面试时，再品一品~

## 经验方案

1. 微服务应用迁移到 Kubernetes ，流量如何接入切换？
    ![image-20240126104109418](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126104109418.png)

2. 微服务架构迁移 Kubernetes， 主要做了哪些工作， 中间有遇到什么难点？
    ![image-20240126104313642](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126104313642.png)

     ![image-20240126104353650](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126104353650.png)

3. 为什么要迁移 Kubernetes ？

     ![image-20240126104639738](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126104639738.png)
     ![image-20240126104700257](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126104700257.png)

4. 如果让你迁移百度的现有应用到K8S上面， 需要做哪些工作？
    ![image-20240126104841660](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126104841660.png)
    ![image-20240126105321849](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126105321849.png)

5. 如果让你改进你们公司现有的监控系统，你会从哪些方向改进优化?
    ![image-20240126105712788](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126105712788.png)
    ![image-20240126105732553](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126105732553.png)

6. 聊聊了成本优化的问题  
   ![image-20240126105950901](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126105950901.png) 
   ![image-20240126110003255](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126110003255.png)

7. Kubernetes 运维中经常遇到的问题是什么，讲讲实际案例？ 
   ![image-20240126110614148](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126110614148.png)
   ![image-20240126110651502](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126110651502.png)

8. 聊了聊现有公司的业务， Kubernetes 的架构，云架构
    ![image-20240126110744241](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126110744241.png)

   

9. 给客户的一批机器过保了，作为运维应该怎么处理？
    ![image-20240126111030616](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126111030616.png)
   ![image-20240126111112292](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126111112292.png)

## 稳定性

1. 系统架构高可用，应该怎么实现？
    ![image-20240126111330773](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126111330773.png)
    ![image-20240126111519344](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126111519344.png)
2. 容量规划怎么做的？（基于AWS 的auto scaling group机制的讨论）
   ![企业微信截图_89ef62dc-2f6c-4ae4-94c3-5019f611837f](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_89ef62dc-2f6c-4ae4-94c3-5019f611837f.png)
3. 让你做多活架构设计的话， 几个机房合适？
    ![image-20240126111808312](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126111808312.png)
4. 如何实现服务稳定性的保障？
   ![image-20240126111859597](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126111859597.png)
   ![image-20240126111914083](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126111914083.png)
5. 让你针对百度或者抖音等APP做性能测试报告，你会怎么出 ？
   ![image-20240126112035400](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112035400.png)
   ![image-20240126112052384](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112052384.png)
6. 对SRE的理解 ， SRE最重要的需要什么能力 ？
   ![image-20240126112243199](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112243199.png)
7. SRE 的关注点？ 
   ![image-20240126112329134](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112329134.png)
8. SLA SLO SLI 该怎么做？
   ![image-20240126112429589](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112429589.png)
   ![image-20240126112438867](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112438867.png)
9. On-Call 的流程？  incident management 流程的讨论
   ![image-20240126112523221](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112523221.png)
   ![image-20240126112534232](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112534232.png)
10. K8S 架构， 多少节点 ?  怎么管理的？ 
    ![image-20240126112619767](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112619767.png)
11. 论到多集群，Centralized cluster 怎么和其他 cluster交互 ？
    ![image-20240126112705359](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112705359.png)
12. 上云 网络架构的讨论 （VPC Peering）
    ![企业微信截图_d4a0c843-23cd-4a89-ad09-93daf983ebdb](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_d4a0c843-23cd-4a89-ad09-93daf983ebdb.png)



## 可观测性

1. 监控这块怎么做的 ？
   ![image-20240126112909631](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112909631.png)

2. 混沌工程  如何做的故障注入 ？
   ![image-20240126112945024](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126112945024.png)

3. 怎么推动该混沌工程的落地实施？
   ![image-20240126114502767](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126114502767.png)

4. 从传统监控迁移到Prometheus&thanos架构？ 有什么优势？

    ![image-20240126114703503](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126114703503.png)

13. 你们公司的系统监控metric的量级在多少  ？ 都监控了哪些指标 ?

15. ES 日志量多少 ？  ES 架构 ？

7. 搭建的可观测性平台， 怎么对业务做到可观测性的提高？
   ![image-20240126123606349](/Users/wangzhi4/Library/Application Support/typora-user-images/image-20240126123606349.png)
   ![image-20240126123700006](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126123700006.png)

   

8. 做SLO 的指标标准是怎么来的， 比如某个SLI 达到多少是异常 ， 大于500ms是异常，这个是怎么评估的 ？
   ![image-20240126123803723](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126123803723.png)
   ![image-20240126123818916](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126123818916.png)

9. 传统监控和 可观测性有什么区别？ 为什么要做可观测性？
   ![image-20240126123859391](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126123859391.png)

10. Prometheus 指标类型 
    ![image-20240126123955446](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126123955446.png)

11. 直方图 ，summary 有什么区别 ？（回答不太好，本质是 summary在客户端计算， histogram在服务端计算）
    ![image-20240126124057261](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126124057261.png)

12. rate 和 irate 有什么区别?

    （举个例子：最后两个采集点没有数据的话，rate 和 irate  分别的值怎么算的）
    ![image-20240126124503698](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126124503698.png)

28. Prometheus 写过exporter？  具体细节？  

14. Prometheus怎么自动发现mertic的 ？
    ![image-20240126124601547](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126124601547.png)

15. Prometheus性能调优？
    ![image-20240126124650573](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126124650573.png)
    ![image-20240126124705273](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126124705273.png)

31. tracing 怎么做的 ？（从opentelemetry&zipkin 到tempo再到cilium网络插件）
![image-20240126124826606](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126124826606.png)
    ![image-20240126124837164](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126124837164.png)

17. ebpf的probe有哪些？
    ![image-20240126124916707](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126124916707.png)

18. tracepoint了解吗，怎么用 ？
    ![image-20240126125002883](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125002883.png)
    ![image-20240126125016276](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125016276.png)

19. ebpf是怎么监控性能的？
    ![image-20240126125049114](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125049114.png)



## DevOps

1. 自动化做了哪些工作？  有涉及到 故障自愈 ，智能运维的级别吗 ？
   ![image-20240126125131880](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125131880.png)

2. terraform Dynamic block 怎么用
   ![image-20240126125206683](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125206683.png)
   ![image-20240126125218701](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125218701.png)

3. Count  语法、   for_each 语法 ？
   ![image-20240126125300325](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125300325.png)
   ![image-20240126125309730](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125309730.png)

4. terraform 文件结构 （best pratices）
   ![image-20240126125347092](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125347092.png)
   ![image-20240126125358177](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125358177.png)

5. Ansible 配置中， 怎么做并发执行同时跑更多任务？
   ![image-20240126125421503](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125421503.png)

6. 你们是怎么做CICD的 ， 构建CICD 过程中遇到哪些问题 ？

    ![image-20240126125715284](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125715284.png)

7. 可以再具体深入点， 怎么触发CD机制的？
   ![image-20240126125819790](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125819790.png)

   

8. 运维自动化你做过哪些，你觉得最有成就的 ？
   ![image-20240126125900031](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126125900031.png)

9. 发布版本的策略都有哪些？

    ![image-20240126130031656](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126130031656.png)

10. 蓝绿发布解释下 ？ 
    ![image-20240126130113427](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126130113427.png)

11. 详细描述一下之前工作中代码提交的这个过程？
    ![image-20240126130241295](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126130241295.png)
    ![image-20240126130319574](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126130319574.png)

12. git rebase和commit有什么区别
    ![image-20240126130447404](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126130447404.png)

13. 实现下字符串反转（分别按单字母以及word来反转)
    ![image-20240126130656159](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126130656159.png)

14. Shell $？ $0   代表什么 ？
    ![image-20240126130806437](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126130806437.png)

15. Shell  怎么查看 参数个数 ？
    ![image-20240126130831219](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126130831219.png)

16. 给定个字符串，怎么通过变量做字符串截取？
    ![image-20240126130939027](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126130939027.png)

17. shell中 怎么进行 数值计算？
    ![image-20240126131008234](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131008234.png)
    ![image-20240126131032917](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131032917.png)

18. Python的多进程和多线程
    ![image-20240126131105231](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131105231.png)

     ![image-20240126131142693](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131142693.png)

19. GIL解释器
    ![image-20240126131213471](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131213471.png)

## K8s 基础知识

1. 怎么查看 Node 上跑了哪些 Pod ？（Describe 更简单）
   ![image-20240126131305330](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131305330.png)

2. Pod 怎么跑到指定节点上 ？
   ![image-20240126131347994](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131347994.png)
   ![image-20240126131407218](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131407218.png)

3. 怎么限制某个特定 Pod 的的网络带宽？
   gpt 回答不准，calico 实现方式是通过如下注解

   ```yaml
         annotations:
           kubernetes.io/ingress-bandwidth: 10M
           kubernetes.io/egress-bandwidth: 10M
   ```

4. Pod 健康检查机制？  liveness 和 readiness的区别 ？
   ![image-20240126131548824](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131548824.png)

5. Pod 服务挂了，怎么排错？思路？
   ![image-20240126131647132](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131647132.png)
   ![image-20240126131657081](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131657081.png)

6. 怎么做到在多个容器的 Pod 里面，只重启某个容器 ?
   ![image-20240126131735359](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131735359.png)

7. Deployment 创建 Pod 的过程， 涉及到的K8S组件有哪些?
   ![image-20240126131837578](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131837578.png)
   ![image-20240126131848328](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131848328.png)

8. Deployment 升级策略 
   ![image-20240126131925160](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131925160.png)
   ![image-20240126131941083](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126131941083.png)

9. Deployment滚动更新过程
   ![image-20240126132102920](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126132102920.png)

10. 怎么控制滚动更新过程
    ![image-20240126132131459](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126132131459.png)

11. Kubernetes Replication Controller：负责执行控制什么 
    ![image-20240126132216323](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126132216323.png)

12. Deployment 更新过程 ，replicaset  正在更新过程中，新的replicaset提交，  会有什么效果？ 
    ![image-20240126132300429](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126132300429.png)

13. Service 有哪几种类型 ？ （还有 headless）
    ![image-20240126132421260](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126132421260.png)

14. Service 中 iptables 原理 （kube-proxy）
    ![image-20240126132544433](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126132544433.png)

15. Ingress是什么？‍‍
    ![image-20240126132717933](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126132717933.png)

16. 服务流量不通了，需要做故障排查，都会查哪些地方？排查思路 
    gpt 回答的不好，看我总结这个吧还是
    ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/troubleshooting-k8s.png)

17. Calico的网络模式 有哪些 ？IPIP, BGP 都怎么实现的 ？ 两种模式有什么区别 ？（回答的也不好）

     ![image-20240126133210932](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126133210932.png)

    

18. kube schedule的调度机制？
    ![image-20240126133418002](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126133418002.png)

19. kube schedule 坏了的话，还有其他什么方式去跑起来 Pod?
    回答的不好， 个人感觉方法是 静态Pod

20. Pod 经过scheduler，这一步之后Pod的会多出什么属性？
    ![image-20240126133612507](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126133612507.png)

21. kubectl apply 创建一个pod的过程，具体说说
    回答不好，看这个吧
     ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/20200510123137.png)

22. K8S QoS  
    ![image-20240126133758966](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126133758966.png)
    ![image-20240126133815450](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126133815450.png)

23. K8S怎么做升级的，升级需要考虑什么？‍‍
    ![image-20240126133902935](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126133902935.png)
    ![image-20240126133930639](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126133930639.png)

24. Dockerfile ADD和 COPY 有什么区别 ？
    ![image-20240126134027718](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134027718.png)

25. Docker 底层技术实现
    ![image-20240126134104236](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134104236.png)

26. Docker 网络模式
    ![image-20240126134229815](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134229815.png)
    ![image-20240126134242989](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134242989.png)

27. K8S node  not ready 不可用，该怎么排查原因？
    ![image-20240126134406684](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134406684.png)
    ![image-20240126134418432](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134418432.png)

28. docker run跑了一个容器，但发现这个容器啊没有运行成功，那可以通过什么方法去排查？
    ![image-20240126134458567](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134458567.png)
    ![image-20240126134514085](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134514085.png)

29. docker 常见错误码有哪些 ？ 退出码 137是什么 ？
    ![image-20240126134544980](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134544980.png)

30. cmd 和 entrypoint  有什么区别？
    ![image-20240126134631803](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134631803.png)

31. Docker 怎么实现资源隔离 ？
    ![image-20240126134702053](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134702053.png)

32. 容器想去访问主机上面的一些资源，要怎么打破这个隔离呢？
    ![image-20240126134750435](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134750435.png)

33. Dockerfile 的最佳实践，怎么写比较优雅？ 
    ![image-20240126134926374](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134926374.png)
    ![image-20240126134942913](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134942913.png)

     ![image-20240126134954814](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240126134954814.png)
