import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c as d,a as e,b as n,d as s,e as r}from"./app-b4984da4.js";const o={},u=e("h1",{id:"_4-6-流水线开发工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-6-流水线开发工具","aria-hidden":"true"},"#"),n(" 4.6 流水线开发工具")],-1),c={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"您好，本模块主要了解在流水线中常用的方法😀",-1),m=e("hr",null,null,-1),p=e("h2",{id:"片段生成器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#片段生成器","aria-hidden":"true"},"#"),n(" 片段生成器")],-1),b=e("p",null,"使用片段生成器可以根据个人需要生成方法，有些方法来源于插件，则需要先安装相关的插件才能使用哦。",-1),h={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/01.png",target:"_blank",rel:"noopener noreferrer"},x=e("img",{src:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/01.png",alt:"images"},null,-1),g={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/02.png",target:"_blank",rel:"noopener noreferrer"},_=e("img",{src:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/02.png",alt:"images"},null,-1),q=e("h2",{id:"声明式语法生成器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#声明式语法生成器","aria-hidden":"true"},"#"),n(" 声明式语法生成器")],-1),f={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/03.png",target:"_blank",rel:"noopener noreferrer"},k=e("img",{src:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/03.png",alt:"images"},null,-1),I=e("h2",{id:"全局变量参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#全局变量参考","aria-hidden":"true"},"#"),n(" 全局变量参考")],-1),N={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/04.png",target:"_blank",rel:"noopener noreferrer"},U=e("img",{src:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/04.png",alt:"images"},null,-1),C=r(`<h3 id="env变量" tabindex="-1"><a class="header-anchor" href="#env变量" aria-hidden="true">#</a> env变量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BUILD_NUMBER          //构建号
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="currentbuild变量" tabindex="-1"><a class="header-anchor" href="#currentbuild变量" aria-hidden="true">#</a> currentbuild变量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>result  currentResult   //构建结果
displayName      //构建名称  #111
description      //构建描述
duration         //持续时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用的方法" tabindex="-1"><a class="header-anchor" href="#常用的方法" aria-hidden="true">#</a> 常用的方法</h2><p><strong>json数据处理</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def response = readJSON text: &quot;\${scanResult}&quot;
println(scanResult)

//原生方法
import groovy.json.*

@NonCPS
def GetJson(text){
    def prettyJson = JsonOutput.prettyPrint(text) 
    new JsonSlurperClassic().parseText(prettyJson)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用凭据</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>withCredentials([string(credentialsId: &quot;xxxxx&quot;, variable: &quot;sonarToken&quot;)]) {
    println(sonarToken)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下载代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Git
checkout([$class: &#39;GitSCM&#39;, branches: [[name: &quot;brnachName&quot;]], 
            doGenerateSubmoduleConfigurations: false, 
            extensions: [], submoduleCfg: [], 
            userRemoteConfigs: [[credentialsId: &quot;\${credentialsId}&quot;, 
            url: &quot;\${srcUrl}&quot;]]])
//Svn
checkout([$class: &#39;SubversionSCM&#39;, additionalCredentials: [], 
            filterChangelog: false, ignoreDirPropChanges: false, 
            locations: [[credentialsId: &quot;\${credentialsId}&quot;, 
            depthOption: &#39;infinity&#39;, ignoreExternalsOption: true, 
            remote: &quot;\${svnUrl}&quot;]], workspaceUpdater: [$class: &#39;CheckoutUpdater&#39;]]
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示报告</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>publishHTML([allowMissing: false, 
        alwaysLinkToLastBuild: false, 
        keepAll: true, 
        reportDir: &#39;./report/&#39;, 
        reportFiles: &quot;a.html, b.html&quot;, 
        reportName: &#39;InterfaceTestReport&#39;, 
        reportTitles: &#39;HTML&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>交互输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def result = input  message: &#39;选择xxxxx&#39;, 
                    ok: &#39;提交&#39;,
                    parameters: [extendedChoice( description: &#39;xxxxx&#39;, 
                                                descriptionPropertyValue: &#39;&#39;, 
                                                multiSelectDelimiter: &#39;,&#39;, 
                                                name: &#39;failePositiveCases&#39;, 
                                                quoteValue: false, 
                                                saveJSONParameterToFile: false, 
                                                type: &#39;PT_CHECKBOX&#39;, 
                                                value: &quot;1,2,3&quot;, 
                                                visibleItemCount: 99)]   
println(result)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>构建用户</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wrap([$class: &#39;BuildUser&#39;]){
            echo &quot;full name is $BUILD_USER&quot;
            echo &quot;user id is $BUILD_USER_ID&quot;
            echo &quot;user email is $BUILD_USER_EMAIL&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>制品上传</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rtUpload (
        serverId: &quot;artifactory01&quot;,
        spec:
            &quot;&quot;&quot;{
            &quot;files&quot;: [
                {
                &quot;pattern&quot;: &quot;report/a.html&quot;,
                &quot;target&quot;: &quot;\${repoName}/a/b/v&quot;
                }
            ]
            }&quot;&quot;&quot;
    )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>发送http请求</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ApiUrl = &quot;http://xxxxxx/api/project_branches/list?project=\${projectName}&quot;
Result = httpRequest authentication: &#39;xxxxxxxxx&#39;,
                         quiet: true, 
                         contentType: &#39;APPLICATION_JSON&#39; ,  
                         url: &quot;\${ApiUrl}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function E(y,L){const i=a("ExternalLinkIcon");return l(),d("div",null,[u,e("blockquote",null,[e("p",null,[n("转载自："),e("a",c,[n("流水线开发工具 | 泽阳"),s(i)])])]),v,m,p,b,e("p",null,[e("a",h,[x,s(i)])]),e("p",null,[n("填写好参数后，点击生成，然后复制粘贴到Jenkinsfile"),e("a",g,[_,s(i)])]),q,e("p",null,[e("a",f,[k,s(i)])]),I,e("p",null,[e("a",N,[U,s(i)])]),C])}const R=t(o,[["render",E],["__file","pipeline-dev-tools.html.vue"]]);export{R as default};
