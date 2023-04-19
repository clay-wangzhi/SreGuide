<template><h1 id="_4-6-流水线开发工具" tabindex="-1"><a class="header-anchor" href="#_4-6-流水线开发工具" aria-hidden="true">#</a> 4.6 流水线开发工具</h1>
<blockquote>
<p>转载自：<a href="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/" target="_blank" rel="noopener noreferrer">流水线开发工具 | 泽阳<ExternalLinkIcon/></a></p>
</blockquote>
<p>您好，本模块主要了解在流水线中常用的方法😀</p>
<hr>
<h2 id="片段生成器" tabindex="-1"><a class="header-anchor" href="#片段生成器" aria-hidden="true">#</a> 片段生成器</h2>
<p>使用片段生成器可以根据个人需要生成方法，有些方法来源于插件，则需要先安装相关的插件才能使用哦。</p>
<p><a href="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/01.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/01.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<p>填写好参数后，点击生成，然后复制粘贴到Jenkinsfile<a href="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/02.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/02.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h2 id="声明式语法生成器" tabindex="-1"><a class="header-anchor" href="#声明式语法生成器" aria-hidden="true">#</a> 声明式语法生成器</h2>
<p><a href="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/03.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/03.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h2 id="全局变量参考" tabindex="-1"><a class="header-anchor" href="#全局变量参考" aria-hidden="true">#</a> 全局变量参考</h2>
<p><a href="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/04.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/04.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="env变量" tabindex="-1"><a class="header-anchor" href="#env变量" aria-hidden="true">#</a> env变量</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>BUILD_NUMBER          //构建号
BUILD_ID              //构建号
BUILD_DISPLAY_NAME    //构建显示名称
JOB_NAME              //项目名称
              
EXECUTOR_NUMBER       //执行器数量
NODE_NAME             //构建节点名称
WORKSPACE             //工作目录
JENKINS_HOME          //Jenkins home
JENKINS_URL           //Jenkins地址
BUILD_URL             //构建地址
JOB_URL               //项目地址
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="currentbuild变量" tabindex="-1"><a class="header-anchor" href="#currentbuild变量" aria-hidden="true">#</a> currentbuild变量</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>result  currentResult   //构建结果
displayName      //构建名称  #111
description      //构建描述
duration         //持续时间
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="常用的方法" tabindex="-1"><a class="header-anchor" href="#常用的方法" aria-hidden="true">#</a> 常用的方法</h2>
<p><strong>json数据处理</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def response = readJSON text: "${scanResult}"
println(scanResult)

//原生方法
import groovy.json.*

@NonCPS
def GetJson(text){
    def prettyJson = JsonOutput.prettyPrint(text) 
    new JsonSlurperClassic().parseText(prettyJson)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>使用凭据</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>withCredentials([string(credentialsId: "xxxxx", variable: "sonarToken")]) {
    println(sonarToken)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>下载代码</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//Git
checkout([$class: 'GitSCM', branches: [[name: "brnachName"]], 
            doGenerateSubmoduleConfigurations: false, 
            extensions: [], submoduleCfg: [], 
            userRemoteConfigs: [[credentialsId: "${credentialsId}", 
            url: "${srcUrl}"]]])
//Svn
checkout([$class: 'SubversionSCM', additionalCredentials: [], 
            filterChangelog: false, ignoreDirPropChanges: false, 
            locations: [[credentialsId: "${credentialsId}", 
            depthOption: 'infinity', ignoreExternalsOption: true, 
            remote: "${svnUrl}"]], workspaceUpdater: [$class: 'CheckoutUpdater']]
)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>展示报告</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>publishHTML([allowMissing: false, 
        alwaysLinkToLastBuild: false, 
        keepAll: true, 
        reportDir: './report/', 
        reportFiles: "a.html, b.html", 
        reportName: 'InterfaceTestReport', 
        reportTitles: 'HTML'])
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>交互输入</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>def result = input  message: '选择xxxxx', 
                    ok: '提交',
                    parameters: [extendedChoice( description: 'xxxxx', 
                                                descriptionPropertyValue: '', 
                                                multiSelectDelimiter: ',', 
                                                name: 'failePositiveCases', 
                                                quoteValue: false, 
                                                saveJSONParameterToFile: false, 
                                                type: 'PT_CHECKBOX', 
                                                value: "1,2,3", 
                                                visibleItemCount: 99)]   
println(result)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>构建用户</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wrap([$class: 'BuildUser']){
            echo "full name is $BUILD_USER"
            echo "user id is $BUILD_USER_ID"
            echo "user email is $BUILD_USER_EMAIL"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>制品上传</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rtUpload (
        serverId: "artifactory01",
        spec:
            """{
            "files": [
                {
                "pattern": "report/a.html",
                "target": "${repoName}/a/b/v"
                }
            ]
            }"""
    )
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>发送http请求</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ApiUrl = "http://xxxxxx/api/project_branches/list?project=${projectName}"
Result = httpRequest authentication: 'xxxxxxxxx',
                         quiet: true, 
                         contentType: 'APPLICATION_JSON' ,  
                         url: "${ApiUrl}"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
