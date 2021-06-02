---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# 1.2 Jenkins简介

## 简单介绍

[Jenkins](https://jenkins.io/)前身是Hudson，Jenkins是一款开源 CI&CD 软件，基于Java开发，用于自动化各种任务，包括构建、测试和部署软件。
Jenkins 支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。

Jenkins 项目产生两个发行线, 长期支持版本 (LTS) 和每周更新版本， 两个版本都以 .war 文件, 原生包, 安装程序, 和 Docker 容器的形式分发。

官网：https://jenkins.io/

代码仓库：https://github.com/jenkinsci/jenkins

## 发展历史

- Jenkins的前身是Hudson，采用JAVA编写的持续集成开源工具。
- Hudson由Sun公司在2004年启动，第一个版本于2005年在java.net发布。
- 2007年开始Hudson逐渐取代CruiseControl和其他的开源构建工具的江湖地位。
- 在2008年的JavaOne大会上在开发者解决方案中获得杜克选择大奖（Duke’s Choice Award）。
- 在2010年11月期间，因为Oracle对Sun的收购带来了Hudson的所有权问题。主要的项目贡献者和Oracle之间， 尽管达成了很多协议，但有个关键问题就是商标名称“Hudson”。
- 甲骨文在2010年12月声明拥有该名称并申请商标的权利。因此，2011年1月11日，有人要求投票将项目名称从“Hudson”改为“Jenkins”。
- 2011年1月29日，该建议得到社区投票的批准，创建了Jenkins项目。
- 2011年2月1日，甲骨文表示，他们打算继续开发Hudson，并认为Jenkins只是一个分支，而不是重命名。因此，Jenkins和Hudson继续作为两个独立的项目，每个都认为对方是自己的分支。
- 到2013年12月，GitHub上的Jenkins拥有567个项目成员和约1,100个公共仓库，与此相对的Hudson有32个项目成员和17个公共仓库。到现在两者的差异更多，应该说Jenkins已经全面超越了Hudson。此外，大家可能是出于讨厌Oracle的情绪，作为Java开发者天然地应该支持和使用Jenkins。

## 特点

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-91830c936e5fa651.webp)

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-0fa91d8b2c207c35.webp)

- 易于安装，只要把jenkins.war部署到servlet容器，不需要数据库支持
- 易于配置，所有配置都是通过其提供的web界面实现
- 集成RSS/E-mail通过RSS发布构建结果或当构建完成时通过e-mail通知
- 生成JUnit/TestNG测试报告
- 分布式构建支持Jenkins能够让多台计算机一起构建/测试
- 支持多种扩展插件，你可以开发适合自己团队使用的工具
- 支持pipeline流水线，可以用代码描述配置过程，方便使用

### 应用场景

- 集成svn/git客户端实现源代码下载检出
- 集成maven/ant/gradle/npm等构建工具实现源码编译打包单元测试
- 集成sonarqube对源代码进行质量检查（坏味道、复杂度、新增bug等）
- 集成SaltStack/Ansible实现自动化部署发布
- 集成Jmeter/Soar/Kubernetes/…..
- 可以自定义插件或者脚本通过jenkins传参运行
- 可以说Jenkins比较灵活插件资源丰富，日常运维工作都可以自动化

## 三种构建方式

* jenkins 触发式构建：用于开发环境部署，开发人员push代码或者合并代码到gitlab项目的master分支，jenkins就部署代码到对应服务器。

* jenkins 参数化构建：用于测试环境预上线环境部署，开发push代码或者合并代码到gitlab项目的master分支之后，并不会部署代码，而是需要登录到jenkins的web界面，点击构建按钮，传入对应的参数（比如参数需要构建的tag，需要部署的分支）然后才会部署。

* jenkins 定时构建：用于APP自动打包，定时构建是在参数化构建的基础上添加的，开发人员可以登录jenkins手动传入tag进行打包，如果不手动打包，那么jenkins就每天凌晨从gitlab拉取最新的APP代码打包。

## 参考链接

[jenkins 简介与应用 | 泽阳](http://docs.idevops.site/jenkins/basics/introduction/)

[jenkins 简介 | willseecloud | 看云](https://www.kancloud.cn/willseecloud/jenkins/1860518)

[jenkins pipeline基础语法与示例 | MR_Hanjc](https://www.jianshu.com/p/f1167e8850cd)



