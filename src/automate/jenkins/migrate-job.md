---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# 7.1 Jenkins Job迁移

在工作中可能会遇到这样的场景，即需要把一个Jenkins Master上的job迁移到另外一台Jenkins Master上，那怎么做比较好呢？

如果只是单独的一个job且这个job的设置很简单，这种情况下当然可以直接在新的Jenkins Master上直接创建job然后从旧的job拷贝下配置即可。但如果job很多，或者job的配置项较多那手动复制配置肯定是比较傻的行为。那我们现在来介绍下这种配置项较多、job比较多的情况下怎么来迁移这些job。

现在我搭建了两台Jenkins来进行说明。IP分别为192.168.9.9和192.168.9.8，现在我在.10上创建一个job，如test，然后进行如下配置

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/g62phjjstk.jpeg)

现在具体来看下如何将上面的配置的job从192.168.9.10的Jenkins上迁移到192.168.9.8的机器上。

## **Job Import Plugin导入**

现在先介绍第一种方式，通过Job Import Plugin方式来进行job的迁移，这种方式比较方便，首先到新的Jenkins上，也就是192.168.9.8上，在192.168.9.8上插件管理里先安装下Job Import Plugin，如下所示：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/jf3clczyv2.jpeg)

安装完后进入“Manage Jenkins” -> "Configure System"下，找到Job Import Pluguin配置的地方，进行如下设置：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/eug932owyp.jpeg)

**name**: 这个可以任意命名，这里我命名成要拷贝的Jenkins的IP

**Url**: 指要从哪里拷贝的Jenkins的URL，现在我们要从192.168.9.10拷贝job，因此这里要设置成192.168.9.10的Jenkins的URL

**Credentials**：需要添加一个旧Jenkins的账号（也就是192.168.9.10的账号），没有添加的时候点击Add手动添加下，就可以像上面的截图一样下拉选择到这个账号了

设置完后点击保存下，回到Jenkins首页点击Job Import Plugin就可以进行Job的迁移了，如下所示：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/uov6bpo6hk.jpeg)

在Job Import Plugin界面，下拉选择刚才添加的配置，然后点击Query按钮就可以搜索出配置的Jenkins下的job了，然后选择需要的job进行迁移导入即可：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/v71i68ivlj.jpeg)

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/o6jxwkuuba.jpeg)

因为有时候旧的Jenkins上的插件新Jenkins上未必有，因此可以根据实际情况勾选是否需要安装必要的插件，如上面的截图所示，需不需要覆盖已有的job也根据实际情况勾选下。导入成功会有如下的提示：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/sqfvrcd932.jpeg)

有了上面的提示后就可以会到新的Jenkins的首页，查看Job有没有成功进入，并进入导入的job查看设置有没有成功的复制过来，如下所示：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/7j29p9rg9g.jpeg)

可以看到job及其设置成功的被导入到新的job了。

Job Import Pugin也支持多个job同时拷贝，如果旧的Job里有多个job，如上面的步骤里所示，query出来就有很多job可供选择，只需要勾选多个即可同时进行多个job的导入了。

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/dg1ouhsl9j.jpeg)

## **Jenkins CLI方式导入**

有时候在公司内部Jenkins部署到不同的网段里，不同网段间可能会限制无法相互访问，这种情况下通过Job Import Plugin进行job导入的方式就行不通了，这时候可以通过Jenkins CLI方式进行job配置导出，然后新Jenkins在根据导出的配置进行再导入操作，完成job的配置迁移 。下面我们来具体讲解下。

现到旧Jenkins下的Jenkins管理页面找到Jenkins CLI，如下所示：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2yywfzeqrj.jpeg)

点击进入Jenkins CLI，可以看到Jenkins命令行接口提供很多命令可以用来进行Jenkins的相关操作，可以看到有提供了get-job这样一个命令，这个命令可以将job的定义导出到xml的格式到输出流，这样我们可以通过这个命令将旧Jenkins上的job导出到外部文件，然后还可以看到有另外一个命令create-job，这个命令可以根据已有的xml配置文件进行job创建，那我们可以根据从旧job导出的job配置文件做为输入进行job的创建了。

首先在旧的Jenkins上的cli页面点击jenkins-cli.jar就可以下载这个jar到本地，如下所示：

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/g1ltwl2a3o.jpeg)

接着点击下Jenkins右上角的账号，选择Configure，然后点击Show API Token，拷贝token，这个token可以用来进行配置导出的时候做为认证使用

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/u30td2vuwj.jpeg)

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/yrwhwenjqe.jpeg)

在jenkins-cli.jar下载的根目录下执行如下命令进行job导出，这里我新建了个job，命名为test4，现在执行下如下命令进行test4这个job配置的导出：

```javascript
 java -jar jenkins-cli.jar -s http://192.168.9.10:8080/jenkins -auth admin:493375c06bc0006a455005804796c989 get-job "test4" > test4.xml
```

**http://192.168.9.10:8080/jenkins:** 就Job的Jenkins地址

**admin：** 上面截图获取Show API Token下的User ID

**493375c06bc0006a455005804796c989：**上面截图获取API Token的值

**test4:** 需要导出配置的job名

**test4.xml:** 导出的文件的名称，可任意

根据实际情况替换下上面的四个值即可

执行完上面的命令就可以看到test4.xml文件生成了

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/xf64g5cl00.jpeg)

接着在新的Jenkins下同样先下载下jenkins-cli.jar，然后将上面生成的test4.xml拷贝到新的Jenkins机器下，同样获取下新Jenkins登录账号的API Token和User ID，执行下如下命令就可以进行job导入了

```javascript
java -jar jenkins-cli.jar -s http://192.168.9.8:8080/jenkins -auth admin:51964e7b89a427be5dd2a28f38c86eff create-job test4 <  test4.xml
```

记得将URL替换成新Jenkins的URL，User ID和token也替换下

上面的命令执行完后，就可以看到在新的Jenkins下新job被成功导入了

> 转载链接：https://cloud.tencent.com/developer/article/1470433
