import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as o,a as n,b as s,d as e,e as i}from"./app-de4b287a.js";const c={},u=n("h1",{id:"_4-1-开始编写jenkinsfile",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-1-开始编写jenkinsfile","aria-hidden":"true"},"#"),s(" 4.1 开始编写Jenkinsfile")],-1),r={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter01/",target:"_blank",rel:"noopener noreferrer"},d=i('<p>您好，还在疑惑什么是流水线吗？ 本章我们将告诉您如何运行一条流水线 赶快学习吧！ 😀</p><hr><h2 id="为什么使用pipeline" tabindex="-1"><a class="header-anchor" href="#为什么使用pipeline" aria-hidden="true">#</a> 为什么使用pipeline?</h2><p>本质上，jenkins是一个自动化引擎，它支持许多自动模式。流水线向Jenkins添加了一组强大的工具，支持用例、简单的持续集成到全面的持续交付流水线。 通过对一系列的发布任务建立标准的模板，用户可以利用更多流水线的特性，比如：</p><ul><li>代码化: 流水线是在代码中实现的，通常会存放到源代码控制，使团队具有编辑、审查和更新他们项目的交付流水线的能力。</li><li>耐用性：流水线可以从Jenkins的master节点重启后继续运行。</li><li>可暂停的：流水线可以由人功输入或批准继续执行流水线。</li><li>解决复杂发布： 支持复杂的交付流程。例如循环、并行执行。</li><li>可扩展性： 支持扩展DSL和其他插件集成。</li></ul><p>构建一个可扩展是Jenkins的核心价值，流水线可以通过ShareLibrary的方式来扩展。</p><h2 id="pipeline定义" tabindex="-1"><a class="header-anchor" href="#pipeline定义" aria-hidden="true">#</a> pipeline定义</h2><p>关于Jenkins流水线的运行我们可以抽象一下，例如：可以把流水线(pipeline)想象成13号线地铁，把流水线的阶段(stage)想象成地铁的每一个站点，把流水线脚本(jenkinsfile)想象成地铁线路图。这就是流水线的多样性，每条线路都有不同的站点。</p>',8),k={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter01/images/01-subwaybeijing.jpg",target:"_blank",rel:"noopener noreferrer"},v=n("img",{src:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter01/images/01-subwaybeijing.jpg",alt:"images"},null,-1),m=i(`<p>现在地铁（Jenkins）已经有了，我们需要设计地铁的运行线路图（Jenkinsfile），在线路图中指定要经过的站点（stages）。这下你是否已经知道我们要运行一条流水线，需要先做什么呢？ –编写jenkinsfile</p><p>Pipeline</p><ul><li>Jenkins的Pipeline通过Jenkinsfile进行描述（类似于Dockerfile）</li><li>Jenkinsfile是Jenkins的特性（pipeline as code）</li><li>Pipeline是Jenkins的核心功能，提供一组可扩展的工具。</li><li>通过Pipeline 的DSL（Pipeline Domain Specific Language）语法可以完成从简单到复杂的交付流水线实现。</li></ul><p>Jenkinsfile</p><ul><li>Jenkinsfile使用两种语法进行编写，分别是声明式和脚本式。</li><li>声明式和脚本式的流水线从根本上是不同的。</li><li>声明式是jenkins流水线更友好的特性。</li><li>脚本式的流水线语法，提供更丰富的语法特性。</li><li>声明式流水线使编写和读取流水线代码更容易设计。</li></ul><h2 id="pipeline演示" tabindex="-1"><a class="header-anchor" href="#pipeline演示" aria-hidden="true">#</a> pipeline演示</h2><p>来我们一起看下这里的配置，看下Jenkinsfile的组成及每个部分的功能含义。</p><ul><li>使用agent{}，指定node节点/workspace（定义好此流水线在某节点运行）</li><li>指定options{}运行选项（定义好此流水线运行时的一些选项，例如输出日志的时间）</li><li>指定stages{}（stages包含多个stage，stage包含steps。是流水线的每个步骤)</li><li>指定post{}（定义好此流水线运行成功或者失败后，根据状态做一些任务）</li></ul><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>pipeline<span class="token punctuation">{</span>
    <span class="token comment">//指定运行此流水线的节点</span>
    agent <span class="token punctuation">{</span> node <span class="token punctuation">{</span> label <span class="token interpolation-string"><span class="token string">&quot;build&quot;</span></span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    

    <span class="token comment">//流水线的阶段</span>
    stages<span class="token punctuation">{</span>

        <span class="token comment">//阶段1 获取代码</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;CheckOut&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps<span class="token punctuation">{</span>
                script<span class="token punctuation">{</span>
                    <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;获取代码&quot;</span></span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;Build&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps<span class="token punctuation">{</span>
                script<span class="token punctuation">{</span>
                    <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;运行构建&quot;</span></span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    post <span class="token punctuation">{</span>
        always<span class="token punctuation">{</span>
            script<span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;流水线结束后，经常做的事情&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        success<span class="token punctuation">{</span>
            script<span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;流水线成功后，要做的事情&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        
        <span class="token punctuation">}</span>
        failure<span class="token punctuation">{</span>
            script<span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;流水线失败后，要做的事情&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        aborted<span class="token punctuation">{</span>
            script<span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;流水线取消后，要做的事情&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证流水线效果" tabindex="-1"><a class="header-anchor" href="#验证流水线效果" aria-hidden="true">#</a> 验证流水线效果</h2>`,10),b={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter01/images/03-jenkinslog.png",target:"_blank",rel:"noopener noreferrer"},h=n("img",{src:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter01/images/03-jenkinslog.png",alt:"images"},null,-1),g={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter01/images/02-blueocean.png",target:"_blank",rel:"noopener noreferrer"},f=n("img",{src:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter01/images/02-blueocean.png",alt:"images"},null,-1),_=n("p",null,"到此一个简单的Jenkinfile完成了！ 后面我们来详细分析每个步骤的作用。",-1);function j(q,x){const a=p("ExternalLinkIcon");return l(),o("div",null,[u,n("blockquote",null,[n("p",null,[s("本文转自："),n("a",r,[s("开始编写 Jenkinsfile | 泽阳"),e(a)])])]),d,n("p",null,[n("a",k,[v,e(a)])]),m,n("p",null,[s("查看Jenkins构建日志（正确效果）"),n("a",b,[h,e(a)])]),n("p",null,[s("通过BlueOcean查看（如果没有BlueOcean图标，需要自行在插件中心安装插件）"),n("a",g,[f,e(a)])]),_])}const B=t(c,[["render",j],["__file","start-jenkinsfile.html.vue"]]);export{B as default};
