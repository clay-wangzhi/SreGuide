<template><h1 id="_4-2-jenkins流水线语法" tabindex="-1"><a class="header-anchor" href="#_4-2-jenkins流水线语法" aria-hidden="true">#</a> 4.2 Jenkins流水线语法</h1>
<p>您好，本模块主要学习声明式流水线的核心语法，掌握核心语法便于编写Jenkinsfile 😀</p>
<hr>
<h2 id="声明式流水线" tabindex="-1"><a class="header-anchor" href="#声明式流水线" aria-hidden="true">#</a> 声明式流水线</h2>
<p>声明式Pipleine是官方推荐的语法，声明式语法更加简洁。所有的声明式Pipeline都必须包含一个 pipeline块中，比如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pipeline {
    //run
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在声明式Pipeline中的基本语句和表达式遵循Groovy的语法。但是有以下例外：</p>
<ul>
<li>流水线顶层必须是一个块，特别是pipeline{}。</li>
<li>不需要分号作为分割符，是按照行分割的。</li>
<li>语句块只能由阶段、指令、步骤、赋值语句组成。例如: input被视为input()。</li>
<li>不能直接使用groovy语句（例如循环判断等），需要被script {}包裹</li>
</ul>
<h2 id="声明式核心概念" tabindex="-1"><a class="header-anchor" href="#声明式核心概念" aria-hidden="true">#</a> 声明式核心概念</h2>
<p>核心概念用来组织pipeline的运行流程</p>
<blockquote>
<p>1.pipeline :声明其内容为一个声明式的pipeline脚本</p>
<p>2.agent:执行节点（job运行的slave或者master节点）</p>
<p>3.stages:阶段集合，包裹所有的阶段（例如：打包，部署等各个阶段）</p>
<p>4.stage:阶段，被stages包裹，一个stages可以有多个stage</p>
<p>5.steps:步骤,为每个阶段的最小执行单元,被stage包裹</p>
<p>6.post:执行构建后的操作，根据构建结果来执行对应的操作</p>
</blockquote>
<h3 id="agent代理" tabindex="-1"><a class="header-anchor" href="#agent代理" aria-hidden="true">#</a> agent代理</h3>
<p><code>agent</code>指定了流水线的执行节点。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//运行在任意的可用节点上
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>作用域：可用在全局与stage内</p>
<p>是否必须：是</p>
<p>参数：<code>any、none、node、label、docker、dockerfile</code></p>
<ul>
<li>any 在任何可用的节点上执行pipeline。none 没有指定agent的时候默认。</li>
<li>label 在指定标签上的节点上运行Pipeline。 node 允许额外的选项(自定义workspace)。</li>
</ul>
<h3 id="stages阶段集合" tabindex="-1"><a class="header-anchor" href="#stages阶段集合" aria-hidden="true">#</a> stages阶段集合</h3>
<p><code>stages</code>是流水线的整个运行阶段，包含一个或多个 <code>stage</code> , 建议 <code>stages</code> 至少包含一个 <code>stage</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pipeline{
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
# 看下运行结果,发现嵌套的stage也是能够展现在视图里面的
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>作用域：全局或者stage阶段内，每个作用域内只能使用一次</p>
<p>是否必须：全局必须</p>
<h3 id="stage阶段" tabindex="-1"><a class="header-anchor" href="#stage阶段" aria-hidden="true">#</a> stage阶段</h3>
<p>作用域：被stages包裹，作用在自己的stage包裹范围内</p>
<p>是否必须：必须</p>
<p>参数：需要一个string参数，表示此阶段的工作内容</p>
<p>备注：stage内部可以嵌套stages，内部可单独制定运行的agent</p>
<h3 id="steps步骤" tabindex="-1"><a class="header-anchor" href="#steps步骤" aria-hidden="true">#</a> steps步骤</h3>
<p>作用域：被stage包裹，作用在stage内部</p>
<p>是否必须：必须</p>
<p>参数：无</p>
<h3 id="post运行后处理" tabindex="-1"><a class="header-anchor" href="#post运行后处理" aria-hidden="true">#</a> post运行后处理</h3>
<p>当流水线完成后根据完成的状态做一些任务。例如：构建失败后邮件通知</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>post { 
    always { 
        echo 'I will always say Hello again!'
    }

    failure{
        email : xxxx@dxx.com
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>常用的状态：</p>
<ul>
<li>
<p>always 无论流水线或者阶段的完成状态。</p>
</li>
<li>
<p>changed 只有当流水线或者阶段完成状态与之前不同时。</p>
</li>
<li>
<p>failure 只有当流水线或者阶段状态为&quot;failure&quot;运行。</p>
</li>
<li>
<p>success 只有当流水线或者阶段状态为&quot;success&quot;运行。</p>
</li>
<li>
<p>unstable 只有当流水线或者阶段状态为&quot;unstable&quot;运行。例如：测试失败。</p>
</li>
<li>
<p>aborted 只有当流水线或者阶段状态为&quot;aborted “运行。例如：手动取消。</p>
</li>
</ul>
<h2 id="声明式指令" tabindex="-1"><a class="header-anchor" href="#声明式指令" aria-hidden="true">#</a> 声明式指令</h2>
<p>指令是帮助pipeline更容易的执行命令，可以理解为一个封装好的公共函数和方法，提供给pipeline使用</p>
<h3 id="environment环境变量" tabindex="-1"><a class="header-anchor" href="#environment环境变量" aria-hidden="true">#</a> environment环境变量</h3>
<p>定义流水线环境变量，可以定义在全局变量或者步骤中的局部变量。这取决于 environment 指令在流水线内的位置。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>agent any

//全局变量
environment { 
    activeEnv = 'dev'
}
stages {
    stage('Example') {

        //局部变量
        environment { 
            AN_ACCESS_KEY = credentials('my-prefined-secret-text') 
        }
        steps {
            sh 'printenv'
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="options运行选项" tabindex="-1"><a class="header-anchor" href="#options运行选项" aria-hidden="true">#</a> options运行选项</h3>
<p>定义流水线运行时的配置选项，流水线提供了许多选项, 比如buildDiscarder,但也可以由插件提供, 比如 timestamps。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>agent any
options {
    timeout(time: 1, unit: 'HOURS') 
}
stages {
    stage('Example') {
        steps {
            echo 'Hello World'
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其他部分参数：</p>
<ul>
<li>buildDiscarder: 为最近的流水线运行的特定数量保存组件和控制台输出。</li>
<li>disableConcurrentBuilds: 不允许同时执行流水线。 可被用来防止同时访问共享资源等。</li>
<li>overrideIndexTriggers: 允许覆盖分支索引触发器的默认处理。</li>
<li>skipDefaultCheckout: 在agent 指令中，跳过从源代码控制中检出代码的默认情况。</li>
<li>skipStagesAfterUnstable: 一旦构建状态变得UNSTABLE，跳过该阶段。</li>
<li>checkoutToSubdirectory: 在工作空间的子目录中自动地执行源代码控制检出。</li>
<li>timeout: 设置流水线运行的超时时间, 在此之后，Jenkins将中止流水线。</li>
<li>retry: 在失败时, 重新尝试整个流水线的指定次数。</li>
<li>timestamps 预测所有由流水线生成的控制台输出，与该流水线发出的时间一致。</li>
</ul>
<h3 id="parameters参数" tabindex="-1"><a class="header-anchor" href="#parameters参数" aria-hidden="true">#</a> parameters参数</h3>
<p>为流水线运行时设置项目相关的参数，就不用在UI界面上定义了，比较方便。</p>
<p>作用域：被最外层pipeline所包裹，并且只能出现一次，参数可被全局使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//string 字符串类型的参数, 例如:
parameters { string(name: 'DEPLOY_ENV', defaultValue: 'staging', description: '') }

//booleanParam 布尔参数, 例如:
parameters { booleanParam(name: 'DEBUG_BUILD', defaultValue: true, description: '') }
agent any
parameters {
    string(name: 'PERSON', defaultValue: 'Mr Jenkins', description: 'Who should I say hello to?')
}
stages {
    stage('Example') {
        steps {
            echo "Hello ${params.PERSON}"
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="trigger触发器" tabindex="-1"><a class="header-anchor" href="#trigger触发器" aria-hidden="true">#</a> trigger触发器</h3>
<p>构建触发器</p>
<p>作用域：被pipeline包裹，在符合条件下自动触发pipeline目前包含三种自动触发的方式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//cron 计划任务定期执行构建
triggers { cron('H */4 * * 1-5') }


//pollSCM 与cron定义类似，但是由jenkins定期检测源码变化。
triggers { pollSCM('H */4 * * 1-5') }

// upstream 可以利用上游Job的运行状态来进行触发
triggers { upstream(upstreamProjects: 'job1,job2', threshold: hudson.model.Result.SUCCESS) }

agent any
triggers {
    cron('H */4 * * 1-5')
}
stages {
    stage('Example') {
        steps {
            echo 'Hello World'
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="tool构建工具" tabindex="-1"><a class="header-anchor" href="#tool构建工具" aria-hidden="true">#</a> tool构建工具</h3>
<p>构建工具maven、ant、gradle,获取通过自动安装或手动放置工具的环境变量。支持maven/jdk/gradle。工具的名称必须在系统设置-&gt;全局工具配置中定义。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>agent any
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="input交互输入" tabindex="-1"><a class="header-anchor" href="#input交互输入" aria-hidden="true">#</a> input交互输入</h3>
<p>input用户在执行各个阶段的时候，由人工确认是否继续进行。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>agent any
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>参数解释：</p>
<ul>
<li>message 呈现给用户的提示信息。</li>
<li>id 可选，默认为stage名称。</li>
<li>ok 默认表单上的ok文本。</li>
<li>submitter 可选的,以逗号分隔的用户列表或允许提交的外部组名。默认允许任何用户。</li>
<li>submitterParameter 环境变量的可选名称。如果存在，用submitter 名称设置。</li>
<li>parameters 提示提交者提供的一个可选的参数列表。</li>
</ul>
<h3 id="when条件判断" tabindex="-1"><a class="header-anchor" href="#when条件判断" aria-hidden="true">#</a> when条件判断</h3>
<p>when 指令允许流水线根据给定的条件决定是否应该执行阶段。 when 指令必须包含至少一个条件。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//branch: 当正在构建的分支与模式给定的分支匹配时，执行这个阶段,这只适用于多分支流水线例如:
when { branch 'master' }


//environment: 当指定的环境变量是给定的值时，执行这个步骤,例如:
when { environment name: 'DEPLOY_TO', value: 'production' }

//expression 当指定的Groovy表达式评估为true时，执行这个阶段, 例如:
when { expression { return params.DEBUG_BUILD } }

//not 当嵌套条件是错误时，执行这个阶段,必须包含一个条件，例如:
when { not { branch 'master' } }

//allOf 当所有的嵌套条件都正确时，执行这个阶段,必须包含至少一个条件，例如:
when { allOf { branch 'master'; environment name: 'DEPLOY_TO', value: 'production' } }

//anyOf 当至少有一个嵌套条件为真时，执行这个阶段,必须包含至少一个条件，例如:
when { anyOf { branch 'master'; branch 'staging' } }


stage('Example Deploy') {
    when {
        branch 'production'
        environment name: 'DEPLOY_TO', value: 'production'
    }
    steps {
        echo 'Deploying'
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="parallel并行" tabindex="-1"><a class="header-anchor" href="#parallel并行" aria-hidden="true">#</a> parallel并行</h2>
<p>声明式流水线的阶段可以在他们内部声明多隔嵌套阶段, 它们将并行执行。 注意，一个阶段必须只有一个 steps 或 parallel的阶段。 嵌套阶段本身不能包含 进一步的 parallel 阶段, 但是其他的阶段的行为与任何其他 stageparallel 的阶段不能包含 agent 或 tools阶段, 因为他们没有相关 steps。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> stage('Parallel Stage') {
    when {
        branch 'master'
    }
    failFast true
    parallel {
        stage('Branch A') {
            agent {
                label "for-branch-a"
            }
            steps {
                echo "On Branch A"
            }
        }
        stage('Branch B') {
            agent {
                label "for-branch-b"
            }
            steps {
                echo "On Branch B"
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>failFast true 当其中一个进程失败时，强制所有的 parallel 阶段都被终止。</p>
<h2 id="script脚本标签" tabindex="-1"><a class="header-anchor" href="#script脚本标签" aria-hidden="true">#</a> script脚本标签</h2>
<p>在声明式的pipeline中默认无法使用脚本语法，但是pipeline提供了一个脚本环境入口：script{},通过使用script来包裹脚本语句，即可使用脚本语法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pipeline {
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<p><a href="http://docs.idevops.site/jenkins/pipelinesyntax/chapter02/" target="_blank" rel="noopener noreferrer">Jenkins 流水线语法 | 泽阳<ExternalLinkIcon/></a></p>
<p><a href="https://www.jianshu.com/p/f1167e8850cd" target="_blank" rel="noopener noreferrer">jenkins pipeline基础语法与示例 | MR_Hanjc | 简书<ExternalLinkIcon/></a></p>
</template>
