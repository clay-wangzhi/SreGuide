---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# Jenkins 学习笔记

## 常用官网

[Jenkins](https://www.jenkins.io/zh/)



## 优秀教程

[Jenkins 实践 | 泽阳](http://docs.idevops.site/jenkins/)

[jenkins | willseecloud | 看云](https://www.kancloud.cn/willseecloud/jenkins/1860515)



## 推荐书籍

Jenkins 2.x 实践指南 | 翟之军



## Summary

* 1 Jenkins 简介
  * [1.1 DevOps、CI、CD都是什么鬼](cicd.md)
  * [ 1.2 Jenkins简介](first)
* 2 安装 Jenkins
  * [ 2.1 yum 安装 jenkins](yum-install.md)
  * [ 2.2 war 包安装 jenkins](war-install.md)
  * [ 2.3 使用 ansible 安装 jenkins](ansible-install.md)
  * [ 2.4 使用docker安装jenkins](docker-install-jenkins.md)
* 3 使用 Jenkins
  * [ 3.1 Jenkins用户权限管理](userandpermissions.md)
  * [ 3.2 访问 API](api.md)
* 4 流水线核心语法
  * [ 4.1 开始编写Jenkinsfile](start-jenkinsfile.md)
  * [ 4.2 Jenkins流水线语法](pipelinesyntax.md)
  * [ 4.3 Groovy 简明教程](groovy-simple-tutorial.md)
  * [ 4.4 Jenkins共享库应用](jenkins-shared-library.md)
  * [ 4.5 共享库之钉钉消息推送](dingding-plugin.md)
  * [4.6 流水线开发工具](pipeline-dev-tools.md)
  * [ 4.7 pipeline 生产配置实例](pipeline-example.md)
* 5 流水线集成篇
  * [ 5.1 构建发布工具集成](build-tools.md)
  * [ 5.2 用户认证系统集成](user-auth)
* 6 管理 jenkins
  * [ 6.1 Jenkins 关闭和重启的实现方式](restart.md)
* 7 日常维护
  * [ 7.1 Jenkins Job迁移](migrate-job.md)
* [ 8 Jenkins 常见问题](qa.md)

