---
title: 使用Docker镜像
tag: Docker
categories: Linux
date: 2018-07-27 18:20:00
copyright: true
---

镜像（image）是Docker三大核心概念中最为重要的，自Docker诞生之日起“镜像”就是相关社区最为热门的关键词。

Docker运行容器前需要本地存在对应的镜像，如果镜像没保存在本地，Docker会尝试从默认镜像仓库下载（默认使用Docker Hub公共注册服务器中的仓库），用户也可以通过配置，使用自定义的镜像仓库。

<!--more-->

## 获取镜像

镜像是运行容器的前提，官方的Docker Hub网站已经提供了数十万个镜像供大家开放下载。

可以使用docker pull命令直接从Docker Hub镜像源来下载镜像。改命令的格式为docker pull NAME[:TAG]。其中，NAME是镜像仓库的名称（用来区分镜像），TAG是镜像的标签（往往用来表示版本信息）。通常情况下，描述一个镜像需要包括“名称+标签”信息。

例如，获取一个Ubuntu14.04系统的基础镜像可以使用如下的命令：

```
docker pull ubuntu:14.04
```

对于docker镜像来说，如果不显示指定TAG，则默认会选择latest标签，这会下载仓库中最新版本的镜像。

从稳定性上考虑，不要在生产环境中忽略镜像的标签信息或使用默认的latest标记的镜像。

### 使用images命令列出镜像

```
docker images 
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
docker.io/tomcat    latest              08f8166740f8        3 months ago        366.7 MB

```

### 使用tag命令添加镜像标签

```
docker tag docker.io/tomcat:latest mytomcat:latest
```

### 使用inspect命令查看详细信息

```
docker inspect docker.io/tomcat:latest 
[
    {
        "Id": "sha256:08f8166740f822b79f1306648591c1013105ccb5dca0a15320c54e991e0f9538",
        "RepoTags": [
            "docker.io/tomcat:latest"
        ],
        "RepoDigests": [],
        "Parent": "",
        "Comment": "",
        "Created": "2017-05-05T23:55:12.275453692Z",
        "Container": "172a4b1f8457373887172ff3f36c15708bbda7430c43963796ffd98f3dd6345e",
.....
```

返回的是一个JSON格式的信息，如果我们只要其中一项内容时，可以使用参数-f来指定，例如，获取镜像的Os

```
docker inspect -f {{".Architecture"}} docker.io/tomcat:latest 
amd64
```

## 删除镜像

使用标签删除镜像

使用docker rmi 命令可以删除镜像，命令格式为dockerrmi IMAGE [IMAGE...],其中IMAGE可以为标签或ID。

如果想强行删除镜像，可以使用-f参数。

## 创建镜像

创建镜像的方法主要有三种：基于已有镜像的容器创建、基于本地模板导入、基于Dockerfile创建。

### 基于已有镜像的容器创建

该方法主要是使用docker commit命令。命令格式为dockercommit [OPTIONS] CONTAINER [REPOSRITORY[:TAG]]，主要信息包括：

-a，--author=""：作者信息 -

-c，–change=[]：提交时执行Dockerfile指令，包括CMD|ENTERYPOINT|ENV|EXPOSE|LABEL|ONBUILD|USER|VOLUME|WORKDIR等；

-m，–message=“”：提交消息；

-p

，–pause=true：提交时暂停容器执行。

### 基于本地模板导入

略

## 搜索镜像

使用docker search命令可以搜索远端仓库中共享的镜像，默认搜索官方仓库中的镜像。用法为docker search TERM，支持的参数主要包括

--automated=true|false:仅显示自动创建的镜像，默认为否；

--no-trunc=true|false:输出信息不截断显示，默认为否；

-s，--stars=X:指定仅显示评价为指定星级以上的镜像，默认为0，即输出所有镜像。

## 存出和载入镜像

用户可以使用docker save和docker load命令来存出和载入镜像。

### 存出镜像

如果要导出镜像到本地，可以使用docker save名利，例如，导出本地的tomcat:latest镜像为tomcat.tart，如下所示：

```
docker save -o /images/tomcat.tart tomcat:latest
```

之后，用户就可以通过复制tomcat.tar文件将改镜像分享给他人。

### 载入镜像

可以使用docker load将导出的tar文件再导入本地镜像库，例如从tomcat.tar 导入镜像到本地镜像列表，如下所示：

```
docker load --input tomcat.tar 或
docker load < tomcat.tar
```

这将导入镜像及其相关的元数据信息（包括标签等）。导入成功后，可以使用docker images命令进行查看。

### 上传镜像

可以使用docker push 命令上传镜像到仓库，默认上传到DockerHub官方仓库（需要登录）。命令格式为：

docker push NAME[:TAG]

用户在Docker Hub网站注册后可以上传自制的镜像。例如用户user上传本地的test：latest镜像，可以先添加新的标签user/test:latest，然后用docker push命令上传镜像：

```
docker tag test:latest user/test:latest
docker push user/test:latest

```

第一次上传时，会提示输入登录信息或进行注册。



