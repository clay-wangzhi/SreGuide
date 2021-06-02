---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# 使用Jenkins Pipeline自动化构建发布

## 一、Jenkins介绍

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-91830c936e5fa651.webp)

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-0fa91d8b2c207c35.webp)

## 二、Jenkins Pipeline介绍

### Jenkins Pipeline总体介绍

> 1.Pipeline 是Jenkins 2.X核心特性，帮助Jenkins实现从CI到CD与DevOps的转变
>  2.Pipeline 简而言之，就是一套运行于Jenkins上的工作流框架，将原本独立
>  运行于单个或者多个节点的任务连接起来，实现单个任务难以完成的复杂流
>  程编排与可视化。

### 什么是Jenkins Pipeline

> 1.Jenkins Pipeline是一组插件，让Jenkins可以实现持续交付管道的落地和实施。
>  2.持续交付管道(CD Pipeline)是将软件从版本控制阶段到交付给用户或客户的完
>  整过程的自动化表现。
>  3.软件的每一次更改（提交到源代码管理系统）都要经过一个复杂的过程才能被发布。

1. Pipeline提供了一组可扩展的工具，通过Pipeline Domain Specific Language
    (DSL) syntax可以达到Pipeline as Code的目的
2. Pipeline as Code：Jenkinsfile 存储在项目的源代码库

### Why Pipeline?

本质上，Jenkins 是一个自动化引擎，它支持许多自动模式。 Pipeline向Jenkins中添加了一组强大的工具, 支持用例 简单的CI到全面的CD pipeline。通过对一系列的相关任务进行建模, 用户可以利用pipeline的很多特性:

• 代码：Pipeline以代码的形式实现，通常被检入源代码控制，使团队能够编辑，
 审查和迭代其CD流程。
 • 可持续性：Jenkins重启或者中断后都不会影响Pipeline Job。
 • 停顿：Pipeline可以选择停止并等待人工输入或批准，然后再继续Pipeline运行。
 • 多功能：Pipeline支持现实世界的复杂CD要求，包括fork/join子进程，循环和
 并行执行工作的能力。
 • 可扩展：Pipeline插件支持其DSL的自定义扩展以及与其他插件集成的多个选项。

### Pipeline与freestyle区别

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-40a98c55b7188ba8.webp)

1.Job调度方式
 pipeline：通过结构化pipeline 语法进行调度，易于理解与阅读
 freestyle：通过jenkins api或者cli进行调度

2.Job显示形式
 pipline:提供上帝视角（全局视图）
 freestyle：没有视图

## Jenkins Pipeline 基础语法

> 官网链接：[https://jenkins.io/doc/](https://links.jianshu.com/go?to=https%3A%2F%2Fjenkins.io%2Fdoc%2F)

### Pipeline 支持两种语法

1.声明式（jenkins2.x新加入的语法）

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-4e99cf386cd7bd51.webp)

> 特点：
>
> 1.最外层必须由pipline{ //do something }来进行包裹
>
> 2.不需要分号作为分隔符，每个语句必须在一行内
>
> 3.不能直接使用groovy语句（例如循环判断等），需要被script {}包裹

2.脚本式

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-0976ca380ccc0097.webp)

> 特点：
>
> 1.最外层有node{}包裹
>
> 2.可直接使用groovy语句

### Declarative Pipeline（声明式）核心概念

核心概念用来组织pipeline的运行流程

> 1.pipeline :声明其内容为一个声明式的pipeline脚本
>
> 2.agent:执行节点（job运行的slave或者master节点）
>
> 3.stages:阶段集合，包裹所有的阶段（例如：打包，部署等各个阶段）
>
> 4.stage:阶段，被stages包裹，一个stages可以有多个stage
>
> 5.steps:步骤,为每个阶段的最小执行单元,被stage包裹
>
> 6.post:执行构建后的操作，根据构建结果来执行对应的操作

根据上面几个概念就能够轻易的创建一个简单的pipeline



```bash
pipeline{
    agent any
    stages{
        stage("first stage"){
            steps("first steps"){
                echo "this is first step"
            }
        }
    }
    post{
        always{
            echo "this is ending..."
        }
    }
}
```

下面针对几个核心概念，逐一进行说明

#### 1.pipeline

> 作用域：应用于全局最外层，表明该脚本为声明式pipeline
>  是否必须：必须
>  参数：无

#### 2.agent

> 作用域：可用在全局与stage内
>  是否必须：是，
>  参数：any,none, label, node,docker,dockerfile



```php
pipeline{
    agent any  //全局必须带有agent表明此pipeline执行节点
    stages{
        stage("first stage"){
            agent { label 'master' }  //具体执行的步骤节点，非必须
            steps{
                echo "this is first step"
            }
        }
    }
}
```

参数示例：



```tsx
//运行在任意的可用节点上
agent any
//全局不指定运行节点，由各自stage来决定
agent none
//运行在指定标签的机器上,具体标签名称由agent配置决定
agent { label 'master' }
//node参数可以扩展节点信息
agent { 
     node {
         label 'master'
         customWorkspace 'xxx'
    } 
}
//使用指定运行的容器
agent { docker 'python'  }
```

#### 3.stages

> 作用域：全局或者stage阶段内，每个作用域内只能使用一次
>
> 是否必须：全局必须
>
> 参数：无



```php
pipeline{
    agent any
    stages{
        stage("first stage"){
            stages{  //嵌套在stage里
                stage("inside"){
                    steps{
                        echo "inside"
                    }
                }
            }
        }
        stage("stage2"){
            steps{
                echo "outside"
            }
        }
    }
}
```

看下运行结果,发现嵌套的stage也是能够展现在视图里面的

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-1c06fd744811b10b.webp)

#### 4.stage

> 作用域：被stages包裹，作用在自己的stage包裹范围内
>
> 是否必须：必须
>
> 参数：需要一个string参数，表示此阶段的工作内容
>
> 备注：stage内部可以嵌套stages，内部可单独制定运行的agent

#### 5.steps

作用域：被stage包裹，作用在stage内部
 是否必须：必须
 参数：无

#### 6.post

作用域：作用在pipeline结束后者stage结束后
 条件：always、changed、failure、success、unstable、aborted

### Declarative Pipeline（声明式）指令

指令是帮助pipeline更容易的执行命令，可以理解为一个封装好的公共函数和方法，提供给pipeline使用

#### 1.environment：声明一个全局变量或者步骤内部的局部变量



```bash
pipeline{
    agent any
    environment {
        P1="parameters 1"
    }
    stages{
        stage("stage2"){
            environment {
                P2="parameters 2"
            }
            steps{
                echo "$P1"
                echo "$P2"
            }
        }
    }
}
```

#### 2.options:options指令能够提供给脚本更多的选项

- buildDiscarder:指定build history与console的保存数量
   用法：options { buildDiscarder(logRotator(numToKeepStr: '1')) }
- disableConcurrentBuilds：设置job不能够同时运行
   用法：options { disableConcurrentBuilds() }
- skipDefaultCheckout：跳过默认设置的代码check out
   用法：options { skipDefaultCheckout() }
- skipStagesAfterUnstable:一旦构建状态变得UNSTABLE，跳过该阶段
   用法：options { skipStagesAfterUnstable() }
- checkoutToSubdirectory:在工作空间的子目录进行check out
   用法：options { checkoutToSubdirectory('children_path') }
- timeout:设置jenkins运行的超时时间，超过超时时间，job会自动被终止
   用法：options { timeout(time: 1, unit: 'MINUTES') }
- retry :设置retry作用域范围的重试次数
   用法：options { retry(3) }
- timestamps:为控制台输出增加时间戳
   用法：options { timestamps() }

备注：当options作用在stage内部的时候，可选的只能是跟stage相关的选项（skipDefaultCheckout、timeout、retry、timestamps)

以其中几个作为例子



```bash
pipeline{
    agent any
    options {
       timestamps() 
       disableConcurrentBuilds()
        
    }
    stages{
        
        stage("stage1"){
            options { timeout(time:1,unit:'MINUTES') 
                        retry(2)
            }
            steps{
                echo "beging===================="
                sh "xxx.sh"
            }
        }   
    }
}
```

#### 3.parameters：提供pipeline运行的参数

- 作用域：被最外层pipeline所包裹，并且只能出现一次，参数可被全局使用
- 好处：使用parameters好处是能够使参数也变成code,达到pipeline as code，pipeline中设置的参数会自动在job构建的时候生成，形成参数化构建
- 用法：



```bash
pipeline{
    agent any
    parameters {
        string(name: 'P1', defaultValue: 'it is p1', description: 'it is p1')
        booleanParam(name: 'P2', defaultValue: true, description: 'it is p2')
    }
    stages{
        stage("stage1"){
            steps{
                echo "$P1"
                echo "$P2"
            }
        }
    }
}
```

自动生成的构建参数

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-cdd0be1f6dcfea2e.webp)

#### 4.triggers:触发器是自动化运行pipeline的方法

- 作用域：被pipeline包裹，在符合条件下自动触发pipeline

目前包含三种自动触发的方式：
 第一种：cron

- 作用：以指定的时间来运行pipeline
- 用法：triggers { cron('*/1 * * * *') }

第二种：pollSCM

- 作用：以固定的时间检查代码仓库更新（或者当代码仓库有更新时）自动触发pipeline构建
- 用法：triggers { pollSCM('H */4 * * 1-5') }或者triggers { pollSCM() }（后者需要配置post-commit/post-receive钩子）

第三种：upstream

- 作用：可以利用上游Job的运行状态来进行触发
- 用法：triggers { upstream(upstreamProjects: 'job1,job2', threshold: hudson.model.Result.SUCCESS) }



```php
pipeline{
    agent any
    //说明：当test_8或者test_7运行成功的时候，自动触发
    triggers { upstream(upstreamProjects: 'test_8,test_7', threshold: hudson.model.Result.SUCCESS) }
    stages{
        stage("stage1"){
            steps{
                echo "hello"
            }
        }
    }
}
```

#### 5.tools:用于引用配置好的工具

引用的工具需要在管理页面的全局工具配置里配置过



```tsx
pipeline {
    agent any
    tools {
        maven 'apache-maven-3.0.1' 
    }
    stages {
        stage('Example') {
            steps {
                sh 'mvn --version'
            }
        }
    }
}
```

#### 6.input:input指令允许暂时中断pipeline执行，等待用户输入，根据用户输入进行下一步动作



```bash
pipeline {
    agent any
    stages {
        stage('Example') {
            input {
                message "Should we continue?"
                ok "Yes, we should."
                submitter "alice,bob"
                parameters {
                    string(name: 'PERSON', defaultValue: 'Mr Jenkins', description: 'Who should I say hello to?')
                }
            }
            steps {
                echo "Hello, ${PERSON}, nice to meet you."
            }
        }
    }
}
```

看下效果

![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/2399048-767303542aa7a1ee.webp)

#### 7.when：根据when指令的判断结果来决定是否执行后面的阶段

可选条件

- branch ：判断分支名称是否符合预期
   用法：when { branch 'master' }
- environment ： 判断环境变量是否符合预期
   用法：when { environment name: 'DEPLOY_TO', value: 'production' }
- expression：判断表达式是否符合预期
   用法：when { expression { return params.DEBUG_BUILD } }
- not : 判断条件是否为假
   用法：when { not { branch 'master' } }
- allOf：判断所有条件是不是都为真
   用法：when { allOf { branch 'master'; environment name: 'DEPLOY_TO', value: 'production' } }
- anyOf：判断是否有一个条件为真
   用法：when { anyOf { branch 'master'; branch 'staging' } }

特别的：如果我们想要在进入agent之前进行判断，需要将beforeAgent设置为true



```php
pipeline {
    agent none
    stages {
        stage('Example Build') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Example Deploy') {
            agent {
                label "some-label"
            }
            when {
                beforeAgent true //设置先对条件进行判断，符合预期才进入steps
                branch 'production'
            }
            steps {
                echo 'Deploying'
            }
        }
    }
}
```

### 并行执行

通过将阶段设置为parallel来表明该stage为并行运行，但是需要注意以下几点

- 一个stage只能有一个steps或者parallel
- 嵌套的stages里不能使用parallel
- parallel不能包含agent或者tools
- 通过设置failFast 为true表示：并行的job中如果其中的一个失败，则终止其他并行的stage



```bash
pipeline {
    agent any
    stages {
        stage('Non-Parallel Stage') {
            steps {
                echo 'Non-parallel'
            }
        }
        stage('Parallel Stage') {
            agent any
            failFast true
            parallel {
                stage('parallel 1') {
                    agent any
                    steps {
                        echo "parallel 1"
                    }
                }
                stage('parallel 2') {
                    steps {
                        echo "parallel 2"
                    }
                }
            }
        }
    }
}
```

### 脚本

> 在声明式的pipeline中默认无法使用脚本语法，但是pipeline提供了一个脚本环境入口：script{},通过使用script来包裹脚本语句，即可使用脚本语法

- 条件判断：



```bash
pipeline {
    agent any
    stages {
        stage('stage 1') {
            steps {
                script{
                    if ( "1" =="1" ) {
                        echo "lalala"
                    }else {
                        echo "oooo"
                    }
                }
            }
        }
    }
}
```

- 异常处理



```php
pipeline {
    agent any
    stages {
        stage('stage 1') {
            steps {
                script{
                    try {
                        sh 'exit 1'
                    }
                    catch (exc) {
                        echo 'Something failed'
                        
                    }
                }
            }
        }
    }
}
```





>参考链接
>https://www.jianshu.com/p/f1167e8850cd

