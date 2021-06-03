---
category: 自动化工具
tags:
  - Jenkins
---

# 4.5 共享库之钉钉消息推送

起因：执行完流水线后进行一定程度的消息推送，所以选择钉钉进行`jenkins`构建结构的消息推送

## 下载配置相关依赖插件

相关环境：

* `Jenkins` 2.277.3，安装文档见上篇
* `DingTalk` 插件 2.4.3
* `build user vars plugin` 插件 1.7

1. 在Jenkins中安装钉钉插件[DingTalk](https://plugins.jenkins.io/dingding-notifications)

   > :warning: 请确保你的 Jenkins 版本 >= 2.176.4

2. 钉钉机器人配置，[说明文档](https://jenkinsci.github.io/dingtalk-plugin/)

   找到 Jenkins 首页 >> 系统管理 >> 钉钉，我的配置如下图

   ![image-20210426164341273](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210426164341273.png)

   

   > :warning: ​注意手动输入机器人的id，不要自动生成，否则重启后，robot的id将发生变化

3. 安装[build user vars plugin](https://plugins.jenkins.io/build-user-vars-plugin)插件，插件可能有相关版本依赖，需要重启一下 Jenkins 才能继续安装

   在流水线中，使用wrap，获取BUILD_USER变量

   ```groovy
   wrap([$class: 'BuildUser']) {
   }
   ```

## 创建配置共享库

### 编写Groovy脚本

项目目录结构如下：

```sh
$ tree jenkinslibrary
jenkinslibrary
├── README.md
└── src
    └── org
        └── devops
            └── dingmes.groovy

3 directories, 2 files
```

`dingme.groovy`文件内容如下

```groovy
package org.devops

def GetChangeString() {
    MAX_MSG_LEN = 100
    def changeString = ""
    def changeLogSets = currentBuild.changeSets
    for (int i = 0; i < changeLogSets.size(); i++) {
        def entries = changeLogSets[i].items
        for (int j = 0; j < entries.length; j++) {
            def entry = entries[j]
            truncated_msg = entry.msg.take(MAX_MSG_LEN)
            commitTime = new Date(entry.timestamp).format("yyyy-MM-dd HH:mm:ss")
            changeString += "> - ${truncated_msg} [${entry.author} ${commitTime}]\n"
        }
    }
    if (!changeString) {
        changeString = "> - No new changes"
    }
    return changeString
}

def DingdingReq(RobotID, Status) {
    wrap([$class: 'BuildUser']) {
        def changeString = GetChangeString()
        dingtalk (
            robot: RobotID,
            type: 'MARKDOWN',
            title: '你有新的消息，请注意查收',
            text: [
                "### 构建信息",
                "> - 应用名称：**${env.JOB_NAME}**",
                "> - 构建结果：**${Status}**",
                "> - 当前版本：**${env.BUILD_NUMBER}**",
                "> - 构建发起：**${env.BUILD_USER}**",
                "> - 持续时间：**${currentBuild.durationString}**",
                "> - 构建日志：[点击查看详情](${env.BUILD_URL}console)",
                "### 更新记录:",
                "${changeString}"
            ],
            at: [
                'xxxxxxxxxxx'
            ]
        )
    }
}
```

> 文本中`xxxxxxxxxxx`请根据实际情况更换为钉钉群组里面，具体人的手机号，可以添加多个

### 在 Jenkins 中配置将共享库

找到 Jenkins 首页 >> 系统管理 >> Global Pipeline Libraries，我的配置如下图

![image-20210426171913350](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210426171913350.png)



### 在流水线中导入共享库

导入方法`@Library('pipeline-library-demo')_`，这样就可以使用共享库中的代码了

具体的 pipeline 脚本如下：

```groovy
#!groovy

@Library('pipeline-library-demo')_

//func from shareibrary
def dingmes = new org.devops.dingmes()

//env
String branchName = "master"
String gitlabCredentialsId = "xxx"
String gitUrl = "http://xxx/xxx/jenkinslibrary.git"
String robotId = "2e0e11c4-2211-4687-b317-cacf58197288"

pipeline {
    agent any
    
    stages {
        stage('Git Clone') {
            steps {
                git branch: "${branchName}",
                credentialsId: "${gitlabCredentialsId}",
                url: "${gitUrl}"
            }
        }
    }
    post {
        success {
            script {
                dingmes.DingdingReq(robotId, "构建成功 ✅")
            }
        }
        failure {
            script {
                dingmes.DingdingReq(robotId, "构建失败 ❌")
            }
        }
    }
}
```

 至此完成，构建效果如下图：

![image-20210426172713667](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210426172713667.png)



## 遇到的问题

1. `currentBuild.durationString`的值传递不进去，一开始先用`withEnv`包裹一下

   后来找到原因 Groovy 在单引号的字符串里面是不支持插值的，所以要用双引号

   单引号中的`env.JOB_NAME`会引用失败，双引号则引用成功

   单、双引号引用`JOB_NAME`都引用成功

   > 推荐所有变量都用""双引号
   >
   > 三引号也是一样，''' 三单引号不支持插值，"""三双引号支持插值

参考链接：https://www.ssgeek.com/post/jenkinssharelibrary-shi-jian-zhi-zi-ding-yi-tong-zhi-qi/