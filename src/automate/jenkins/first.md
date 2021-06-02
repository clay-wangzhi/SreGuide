---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

## 三种构建方式

* jenkins触发式构建：用于开发环境部署，开发人员push代码或者合并代码到gitlab项目的master分支，jenkins就部署代码到对应服务器。

* jenkins参数化构建：用于测试环境预上线环境部署，开发push代码或者合并代码到gitlab项目的master分支之后，并不会部署代码，而是需要登录到jenkins的web界面，点击构建按钮，传入对应的参数（比如参数需要构建的tag，需要部署的分支）然后才会部署。

* jenkins定时构建：用于APP自动打包，定时构建是在参数化构建的基础上添加的，开发人员可以登录jenkins手动传入tag进行打包，如果不手动打包，那么jenkins就每天凌晨从gitlab拉取最新的APP代码打包。