---
category: 自动化工具
tags:
  - Jenkins
---

# 3.2 访问 API

> 转载自：[访问API | willseecloud | 看云](https://www.kancloud.cn/willseecloud/jenkins/1860660)

## 远程访问API

Jenkins为功能提供了机器消耗的远程访问API。目前，它具有三种风格：

1. XML
2. JSON with JSONP support
3. Python

远程访问API以类似REST的样式提供。也就是说，没有所有功能的单个入口点，而是在`".../api/"`URL下可用，这些`"..."`部分是作用于其上的数据。

例如，如果您的Jenkins安装位于https://ci.jenkins.io，则访问https://ci.jenkins.io/api/将仅显示可用的顶级API功能–主要是已配置作业的列表为此jenkins实例。或者，如果您想访问有关特定内部版本的信息，例如https://ci.jenkins.io/job/Infra/job/jenkins.io/job/master/lastSuccessfulBuild/，请转到https://ci.jenkins.io/job/Infra/job/jenkins.io/job/master/lastSuccessfulBuild/api/，您会看到该构建的功能列表。

## 你能做什么呢？

远程API可用于执行以下操作：

1. 从jenkins检索信息以进行程序化消费。
2. 触发新版本
3. 创建/复制作业

## 提交工作

**没有参数的作业**

您只需要在上执行HTTP POST`JENKINS_URL/job/JOBNAME/build`。

**带参数的作业**

简单示例-发送“字符串参数”：

```
curl JENKINS_URL/job/JOB_NAME/buildWithParameters \
  --user USER:TOKEN \
  --data id=123 --data verbosity=high
```

另一个示例-发送“文件参数”：

```
curl JENKINS_URL/job/JOB_NAME/buildWithParameters \
  --user USER:PASSWORD \
  --form FILE_LOCATION_AS_SET_IN_JENKINS=@PATH_TO_FILE
```

在此示例中，符号“ @”很重要。另外，文件的路径是绝对路径。为了使此命令生效，您需要配置Jenkins作业以使用文件参数，并使Jenkins作业配置中的“**文件位置”**字段与`--form`选项中的键匹配。

## 远程API和安全性

当您的Jenkins受保护时，您可以使用HTTP BASIC身份验证来认证远程API请求。有关更多详细信息，请参见[认证脚本客户端](https://wiki.jenkins.io/display/JENKINS/Authenticating+scripted+clients)。

## CSRF保护

**注意**：CSRF保护优选使用API令牌而不是碎屑。

## XPath选择

XML API通过使用查询参数“ xpath”来支持XPath的选择。这对于在XML操作繁琐的环境（例如shell脚本）中提取信息非常方便。有关如何使用此操作的示例，请参见[问题＃626](https://issues.jenkins-ci.org/browse/JENKINS-626)。请`.../api/`在您的Jenkins服务器上查看更多最新信息。

### XPath排除

与上面的“ xpath”查询参数相似，您可以使用（可能是多个）“排除”查询模式从生成的XML中排除节点。与指定XPath匹配的所有节点都将从XML中删除。请`.../api/`在您的Jenkins服务器上查看更多最新信息。

## 深度控制

有时，远程API在一次调用中无法为您提供足够的信息。例如，如果您想找到给定视图的最后成功构建，您将意识到对视图的远程API的调用不会为您提供此功能，因此您必须递归地调用远程每个项目的API。深度控制解决了这个问题。深度控制从根本上与Jenkins数据模型相关。

Jenkins内部维护的数据模型可以被认为是一个大树形结构，当您进行远程API调用时，您会得到一个小的子树。子树植根于您对其进行远程API调用的对象，并且将子树切成一定深度，以避免返回太多数据。您可以通过指定深度查询参数来调整此截止行为。当您指定一个正的depthvalue时，子树的截止发生得晚得多。

因此，最终结果是，如果您指定更大的深度值，您将看到远程API现在将返回更多数据。由于采用了该算法，因此以较大深度值返回的数据包括所有较小深度值返回的数据的方式工作。

请`.../api/`在您的Jenkins服务器上查看更多最新信息。

## Python API包装器

[JenkinsAPI](https://pypi.python.org/pypi/jenkinsapi)和[Python-Jenkins](https://pypi.python.org/pypi/python-jenkins/)是Python REST API的面向对象的python包装器，旨在提供一种更传统的pythonic方法来控制Jenkins服务器。它提供了一个包含许多便利功能的高级API。当前提供的服务包括：

- 查询已完成构建的测试结果
- 获取代表作业最新版本的对象
- 通过简单条件搜索工件
- 阻塞直到作业完成
- 将工件安装到自定义指定的目录结构
- 对Jenkins实例的身份验证支持
- 能够通过Subversion修订版搜索构建
- 能够添加/删除/查询Jenkins代理

## Ruby API包装器

[Jenkins API客户端](https://rubygems.org/gems/jenkins_api_client)是一个面向对象的ruby包装项目，使用了Jenkins的JSON API，旨在提供对Jenkins提供的所有远程API的访问。它可以作为Rubygem使用，并且可以与Job，Node，View，BuildQueue和System相关的功能进行交互。当前提供的服务包括：

- 通过发送xml文件或通过将params指定为具有更多自定义选项（包括源代码管理，通知等）的选项来创建作业。
- 构建作业（使用参数），停止构建，查询最近构建的详细信息，获取构建参数等。
- 使用工作名称过滤器，工作状态过滤器列出Jenkins中可用的工作。
- 添加/删除下游项目。
- 链接作业，即给定项目列表，每个项目都作为下游项目添加到上一个项目中。
- 获取渐进式控制台输出。
- 基于用户名/密码的身份验证。
- 命令行界面，库中提供了很多选项。
- 创建并列出视图。
- 向视图添加作业，并从视图中删除作业。
- 添加/删除Jenkins代理，查询代理详细信息。
- 获取构建队列中的任务，以及它们的年龄，原因，原因，预计到达时间，ID，参数等等。
- 安静下来，取消安静，安全重启，强制重启，然后等到重启后詹金斯可用。
- 能够列出已安装/可用的插件，获取有关插件的信息，安装/卸载插件以及其他更多功能。

项目源代码在[这里](https://github.com/arangamani/jenkins_api_client)。

## Java API包装器

该[詹金斯休息](https://github.com/cdancy/jenkins-rest)库是一个面向对象的Java项目以编程方式提供一些远程API詹金斯提供了访问詹金斯REST API。它是使用[jclouds工具包](https://jclouds.apache.org/)构建的，可以轻松扩展以支持更多REST端点。它的功能集不断发展，并邀请用户通过拉取请求贡献新的端点。在当前状态下，该库可以提交作业，在队列中跟踪其进度，监视其执行直到完成，并获得构建状态。当前提供的服务包括：

- 端点定义（属性或环境变量）
- 身份验证（通过属性或环境变量的基本和API令牌）
- 碎屑颁发者支持（自动检测碎屑）
- 资料夹支援
- Jobs API（构建，buildInfo，buildWithParameters，配置，创建，删除，描述，禁用，启用，jobInfo，lastBuildNumber，lastBuidTimestamp和ProgressiveText）
- 插件管理器API（installNecessaryPlugins，列出当前插件）
- 队列API（取消，列出队列项目，查询队列项目）
- 统计API（总负载）
- 系统API（systemInfo）

该项目可以快速发展，该列表仅在撰写本文时才是准确的。

## 检测 Jenkins 版本

要检查Jenkins的版本，请加载首页或任何`.../api/*`页面，然后检查`X-Jenkins`响应标题。它包含Jenkins的版本号，例如“ 1.404”。这也是检查URL是否为Jenkins URL的好方法。