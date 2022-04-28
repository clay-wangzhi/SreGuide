import{_ as r,r as l,c as p,a as n,e,F as i,d as b,b as a,o as t}from"./app.e298a435.js";const c={},u=b(`<h1 id="_4-2-jenkins\u6D41\u6C34\u7EBF\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-2-jenkins\u6D41\u6C34\u7EBF\u8BED\u6CD5" aria-hidden="true">#</a> 4.2 Jenkins\u6D41\u6C34\u7EBF\u8BED\u6CD5</h1><p>\u60A8\u597D\uFF0C\u672C\u6A21\u5757\u4E3B\u8981\u5B66\u4E60\u58F0\u660E\u5F0F\u6D41\u6C34\u7EBF\u7684\u6838\u5FC3\u8BED\u6CD5\uFF0C\u638C\u63E1\u6838\u5FC3\u8BED\u6CD5\u4FBF\u4E8E\u7F16\u5199Jenkinsfile \u{1F600}</p><hr><h2 id="\u58F0\u660E\u5F0F\u6D41\u6C34\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u6D41\u6C34\u7EBF" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u6D41\u6C34\u7EBF</h2><p>\u58F0\u660E\u5F0FPipleine\u662F\u5B98\u65B9\u63A8\u8350\u7684\u8BED\u6CD5\uFF0C\u58F0\u660E\u5F0F\u8BED\u6CD5\u66F4\u52A0\u7B80\u6D01\u3002\u6240\u6709\u7684\u58F0\u660E\u5F0FPipeline\u90FD\u5FC5\u987B\u5305\u542B\u4E00\u4E2A pipeline\u5757\u4E2D\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pipeline {
    //run
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728\u58F0\u660E\u5F0FPipeline\u4E2D\u7684\u57FA\u672C\u8BED\u53E5\u548C\u8868\u8FBE\u5F0F\u9075\u5FAAGroovy\u7684\u8BED\u6CD5\u3002\u4F46\u662F\u6709\u4EE5\u4E0B\u4F8B\u5916\uFF1A</p><ul><li>\u6D41\u6C34\u7EBF\u9876\u5C42\u5FC5\u987B\u662F\u4E00\u4E2A\u5757\uFF0C\u7279\u522B\u662Fpipeline{}\u3002</li><li>\u4E0D\u9700\u8981\u5206\u53F7\u4F5C\u4E3A\u5206\u5272\u7B26\uFF0C\u662F\u6309\u7167\u884C\u5206\u5272\u7684\u3002</li><li>\u8BED\u53E5\u5757\u53EA\u80FD\u7531\u9636\u6BB5\u3001\u6307\u4EE4\u3001\u6B65\u9AA4\u3001\u8D4B\u503C\u8BED\u53E5\u7EC4\u6210\u3002\u4F8B\u5982: input\u88AB\u89C6\u4E3Ainput()\u3002</li><li>\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528groovy\u8BED\u53E5\uFF08\u4F8B\u5982\u5FAA\u73AF\u5224\u65AD\u7B49\uFF09\uFF0C\u9700\u8981\u88ABscript {}\u5305\u88F9</li></ul><h2 id="\u58F0\u660E\u5F0F\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u6838\u5FC3\u6982\u5FF5</h2><p>\u6838\u5FC3\u6982\u5FF5\u7528\u6765\u7EC4\u7EC7pipeline\u7684\u8FD0\u884C\u6D41\u7A0B</p><blockquote><p>1.pipeline :\u58F0\u660E\u5176\u5185\u5BB9\u4E3A\u4E00\u4E2A\u58F0\u660E\u5F0F\u7684pipeline\u811A\u672C</p><p>2.agent:\u6267\u884C\u8282\u70B9\uFF08job\u8FD0\u884C\u7684slave\u6216\u8005master\u8282\u70B9\uFF09</p><p>3.stages:\u9636\u6BB5\u96C6\u5408\uFF0C\u5305\u88F9\u6240\u6709\u7684\u9636\u6BB5\uFF08\u4F8B\u5982\uFF1A\u6253\u5305\uFF0C\u90E8\u7F72\u7B49\u5404\u4E2A\u9636\u6BB5\uFF09</p><p>4.stage:\u9636\u6BB5\uFF0C\u88ABstages\u5305\u88F9\uFF0C\u4E00\u4E2Astages\u53EF\u4EE5\u6709\u591A\u4E2Astage</p><p>5.steps:\u6B65\u9AA4,\u4E3A\u6BCF\u4E2A\u9636\u6BB5\u7684\u6700\u5C0F\u6267\u884C\u5355\u5143,\u88ABstage\u5305\u88F9</p><p>6.post:\u6267\u884C\u6784\u5EFA\u540E\u7684\u64CD\u4F5C\uFF0C\u6839\u636E\u6784\u5EFA\u7ED3\u679C\u6765\u6267\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C</p></blockquote><h3 id="agent\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#agent\u4EE3\u7406" aria-hidden="true">#</a> agent\u4EE3\u7406</h3><p><code>agent</code>\u6307\u5B9A\u4E86\u6D41\u6C34\u7EBF\u7684\u6267\u884C\u8282\u70B9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u8FD0\u884C\u5728\u4EFB\u610F\u7684\u53EF\u7528\u8282\u70B9\u4E0A
agent any
//\u5168\u5C40\u4E0D\u6307\u5B9A\u8FD0\u884C\u8282\u70B9\uFF0C\u7531\u5404\u81EAstage\u6765\u51B3\u5B9A
agent none
//\u8FD0\u884C\u5728\u6307\u5B9A\u6807\u7B7E\u7684\u673A\u5668\u4E0A,\u5177\u4F53\u6807\u7B7E\u540D\u79F0\u7531agent\u914D\u7F6E\u51B3\u5B9A
agent { label &#39;master&#39; }
//node\u53C2\u6570\u53EF\u4EE5\u6269\u5C55\u8282\u70B9\u4FE1\u606F
agent { 
     node {
         label &#39;master&#39;
         customWorkspace &#39;xxx&#39;
    } 
}
//\u4F7F\u7528\u6307\u5B9A\u8FD0\u884C\u7684\u5BB9\u5668
agent { docker &#39;python&#39;  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4F5C\u7528\u57DF\uFF1A\u53EF\u7528\u5728\u5168\u5C40\u4E0Estage\u5185</p><p>\u662F\u5426\u5FC5\u987B\uFF1A\u662F</p><p>\u53C2\u6570\uFF1A<code>any\u3001none\u3001node\u3001label\u3001docker\u3001dockerfile</code></p><ul><li>any \u5728\u4EFB\u4F55\u53EF\u7528\u7684\u8282\u70B9\u4E0A\u6267\u884Cpipeline\u3002none \u6CA1\u6709\u6307\u5B9Aagent\u7684\u65F6\u5019\u9ED8\u8BA4\u3002</li><li>label \u5728\u6307\u5B9A\u6807\u7B7E\u4E0A\u7684\u8282\u70B9\u4E0A\u8FD0\u884CPipeline\u3002 node \u5141\u8BB8\u989D\u5916\u7684\u9009\u9879(\u81EA\u5B9A\u4E49workspace)\u3002</li></ul><h3 id="stages\u9636\u6BB5\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#stages\u9636\u6BB5\u96C6\u5408" aria-hidden="true">#</a> stages\u9636\u6BB5\u96C6\u5408</h3><p><code>stages</code>\u662F\u6D41\u6C34\u7EBF\u7684\u6574\u4E2A\u8FD0\u884C\u9636\u6BB5\uFF0C\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A <code>stage</code> , \u5EFA\u8BAE <code>stages</code> \u81F3\u5C11\u5305\u542B\u4E00\u4E2A <code>stage</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pipeline{
    agent any
    stages{
        stage(&quot;first stage&quot;){
            stages{  //\u5D4C\u5957\u5728stage\u91CC
                stage(&quot;inside&quot;){
                    steps{
                        echo &quot;inside&quot;
                    }
                }
            }
        }
        stage(&quot;stage2&quot;){
            steps{
                echo &quot;outside&quot;
            }
        }
    }
}
# \u770B\u4E0B\u8FD0\u884C\u7ED3\u679C,\u53D1\u73B0\u5D4C\u5957\u7684stage\u4E5F\u662F\u80FD\u591F\u5C55\u73B0\u5728\u89C6\u56FE\u91CC\u9762\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4F5C\u7528\u57DF\uFF1A\u5168\u5C40\u6216\u8005stage\u9636\u6BB5\u5185\uFF0C\u6BCF\u4E2A\u4F5C\u7528\u57DF\u5185\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21</p><p>\u662F\u5426\u5FC5\u987B\uFF1A\u5168\u5C40\u5FC5\u987B</p><h3 id="stage\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#stage\u9636\u6BB5" aria-hidden="true">#</a> stage\u9636\u6BB5</h3><p>\u4F5C\u7528\u57DF\uFF1A\u88ABstages\u5305\u88F9\uFF0C\u4F5C\u7528\u5728\u81EA\u5DF1\u7684stage\u5305\u88F9\u8303\u56F4\u5185</p><p>\u662F\u5426\u5FC5\u987B\uFF1A\u5FC5\u987B</p><p>\u53C2\u6570\uFF1A\u9700\u8981\u4E00\u4E2Astring\u53C2\u6570\uFF0C\u8868\u793A\u6B64\u9636\u6BB5\u7684\u5DE5\u4F5C\u5185\u5BB9</p><p>\u5907\u6CE8\uFF1Astage\u5185\u90E8\u53EF\u4EE5\u5D4C\u5957stages\uFF0C\u5185\u90E8\u53EF\u5355\u72EC\u5236\u5B9A\u8FD0\u884C\u7684agent</p><h3 id="steps\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#steps\u6B65\u9AA4" aria-hidden="true">#</a> steps\u6B65\u9AA4</h3><p>\u4F5C\u7528\u57DF\uFF1A\u88ABstage\u5305\u88F9\uFF0C\u4F5C\u7528\u5728stage\u5185\u90E8</p><p>\u662F\u5426\u5FC5\u987B\uFF1A\u5FC5\u987B</p><p>\u53C2\u6570\uFF1A\u65E0</p><h3 id="post\u8FD0\u884C\u540E\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#post\u8FD0\u884C\u540E\u5904\u7406" aria-hidden="true">#</a> post\u8FD0\u884C\u540E\u5904\u7406</h3><p>\u5F53\u6D41\u6C34\u7EBF\u5B8C\u6210\u540E\u6839\u636E\u5B8C\u6210\u7684\u72B6\u6001\u505A\u4E00\u4E9B\u4EFB\u52A1\u3002\u4F8B\u5982\uFF1A\u6784\u5EFA\u5931\u8D25\u540E\u90AE\u4EF6\u901A\u77E5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>post { 
    always { 
        echo &#39;I will always say Hello again!&#39;
    }

    failure{
        email : xxxx@dxx.com
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5E38\u7528\u7684\u72B6\u6001\uFF1A</p><ul><li><p>always \u65E0\u8BBA\u6D41\u6C34\u7EBF\u6216\u8005\u9636\u6BB5\u7684\u5B8C\u6210\u72B6\u6001\u3002</p></li><li><p>changed \u53EA\u6709\u5F53\u6D41\u6C34\u7EBF\u6216\u8005\u9636\u6BB5\u5B8C\u6210\u72B6\u6001\u4E0E\u4E4B\u524D\u4E0D\u540C\u65F6\u3002</p></li><li><p>failure \u53EA\u6709\u5F53\u6D41\u6C34\u7EBF\u6216\u8005\u9636\u6BB5\u72B6\u6001\u4E3A&quot;failure&quot;\u8FD0\u884C\u3002</p></li><li><p>success \u53EA\u6709\u5F53\u6D41\u6C34\u7EBF\u6216\u8005\u9636\u6BB5\u72B6\u6001\u4E3A&quot;success&quot;\u8FD0\u884C\u3002</p></li><li><p>unstable \u53EA\u6709\u5F53\u6D41\u6C34\u7EBF\u6216\u8005\u9636\u6BB5\u72B6\u6001\u4E3A&quot;unstable&quot;\u8FD0\u884C\u3002\u4F8B\u5982\uFF1A\u6D4B\u8BD5\u5931\u8D25\u3002</p></li><li><p>aborted \u53EA\u6709\u5F53\u6D41\u6C34\u7EBF\u6216\u8005\u9636\u6BB5\u72B6\u6001\u4E3A&quot;aborted \u201C\u8FD0\u884C\u3002\u4F8B\u5982\uFF1A\u624B\u52A8\u53D6\u6D88\u3002</p></li></ul><h2 id="\u58F0\u660E\u5F0F\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u6307\u4EE4" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u6307\u4EE4</h2><p>\u6307\u4EE4\u662F\u5E2E\u52A9pipeline\u66F4\u5BB9\u6613\u7684\u6267\u884C\u547D\u4EE4\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u5C01\u88C5\u597D\u7684\u516C\u5171\u51FD\u6570\u548C\u65B9\u6CD5\uFF0C\u63D0\u4F9B\u7ED9pipeline\u4F7F\u7528</p><h3 id="environment\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#environment\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> environment\u73AF\u5883\u53D8\u91CF</h3><p>\u5B9A\u4E49\u6D41\u6C34\u7EBF\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u5728\u5168\u5C40\u53D8\u91CF\u6216\u8005\u6B65\u9AA4\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u3002\u8FD9\u53D6\u51B3\u4E8E environment \u6307\u4EE4\u5728\u6D41\u6C34\u7EBF\u5185\u7684\u4F4D\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>agent any

//\u5168\u5C40\u53D8\u91CF
environment { 
    activeEnv = &#39;dev&#39;
}
stages {
    stage(&#39;Example&#39;) {

        //\u5C40\u90E8\u53D8\u91CF
        environment { 
            AN_ACCESS_KEY = credentials(&#39;my-prefined-secret-text&#39;) 
        }
        steps {
            sh &#39;printenv&#39;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="options\u8FD0\u884C\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#options\u8FD0\u884C\u9009\u9879" aria-hidden="true">#</a> options\u8FD0\u884C\u9009\u9879</h3><p>\u5B9A\u4E49\u6D41\u6C34\u7EBF\u8FD0\u884C\u65F6\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u6D41\u6C34\u7EBF\u63D0\u4F9B\u4E86\u8BB8\u591A\u9009\u9879, \u6BD4\u5982buildDiscarder,\u4F46\u4E5F\u53EF\u4EE5\u7531\u63D2\u4EF6\u63D0\u4F9B, \u6BD4\u5982 timestamps\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>agent any
options {
    timeout(time: 1, unit: &#39;HOURS&#39;) 
}
stages {
    stage(&#39;Example&#39;) {
        steps {
            echo &#39;Hello World&#39;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5176\u4ED6\u90E8\u5206\u53C2\u6570\uFF1A</p><ul><li>buildDiscarder: \u4E3A\u6700\u8FD1\u7684\u6D41\u6C34\u7EBF\u8FD0\u884C\u7684\u7279\u5B9A\u6570\u91CF\u4FDD\u5B58\u7EC4\u4EF6\u548C\u63A7\u5236\u53F0\u8F93\u51FA\u3002</li><li>disableConcurrentBuilds: \u4E0D\u5141\u8BB8\u540C\u65F6\u6267\u884C\u6D41\u6C34\u7EBF\u3002 \u53EF\u88AB\u7528\u6765\u9632\u6B62\u540C\u65F6\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90\u7B49\u3002</li><li>overrideIndexTriggers: \u5141\u8BB8\u8986\u76D6\u5206\u652F\u7D22\u5F15\u89E6\u53D1\u5668\u7684\u9ED8\u8BA4\u5904\u7406\u3002</li><li>skipDefaultCheckout: \u5728agent \u6307\u4EE4\u4E2D\uFF0C\u8DF3\u8FC7\u4ECE\u6E90\u4EE3\u7801\u63A7\u5236\u4E2D\u68C0\u51FA\u4EE3\u7801\u7684\u9ED8\u8BA4\u60C5\u51B5\u3002</li><li>skipStagesAfterUnstable: \u4E00\u65E6\u6784\u5EFA\u72B6\u6001\u53D8\u5F97UNSTABLE\uFF0C\u8DF3\u8FC7\u8BE5\u9636\u6BB5\u3002</li><li>checkoutToSubdirectory: \u5728\u5DE5\u4F5C\u7A7A\u95F4\u7684\u5B50\u76EE\u5F55\u4E2D\u81EA\u52A8\u5730\u6267\u884C\u6E90\u4EE3\u7801\u63A7\u5236\u68C0\u51FA\u3002</li><li>timeout: \u8BBE\u7F6E\u6D41\u6C34\u7EBF\u8FD0\u884C\u7684\u8D85\u65F6\u65F6\u95F4, \u5728\u6B64\u4E4B\u540E\uFF0CJenkins\u5C06\u4E2D\u6B62\u6D41\u6C34\u7EBF\u3002</li><li>retry: \u5728\u5931\u8D25\u65F6, \u91CD\u65B0\u5C1D\u8BD5\u6574\u4E2A\u6D41\u6C34\u7EBF\u7684\u6307\u5B9A\u6B21\u6570\u3002</li><li>timestamps \u9884\u6D4B\u6240\u6709\u7531\u6D41\u6C34\u7EBF\u751F\u6210\u7684\u63A7\u5236\u53F0\u8F93\u51FA\uFF0C\u4E0E\u8BE5\u6D41\u6C34\u7EBF\u53D1\u51FA\u7684\u65F6\u95F4\u4E00\u81F4\u3002</li></ul><h3 id="parameters\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#parameters\u53C2\u6570" aria-hidden="true">#</a> parameters\u53C2\u6570</h3><p>\u4E3A\u6D41\u6C34\u7EBF\u8FD0\u884C\u65F6\u8BBE\u7F6E\u9879\u76EE\u76F8\u5173\u7684\u53C2\u6570\uFF0C\u5C31\u4E0D\u7528\u5728UI\u754C\u9762\u4E0A\u5B9A\u4E49\u4E86\uFF0C\u6BD4\u8F83\u65B9\u4FBF\u3002</p><p>\u4F5C\u7528\u57DF\uFF1A\u88AB\u6700\u5916\u5C42pipeline\u6240\u5305\u88F9\uFF0C\u5E76\u4E14\u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\uFF0C\u53C2\u6570\u53EF\u88AB\u5168\u5C40\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//string \u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u53C2\u6570, \u4F8B\u5982:
parameters { string(name: &#39;DEPLOY_ENV&#39;, defaultValue: &#39;staging&#39;, description: &#39;&#39;) }

//booleanParam \u5E03\u5C14\u53C2\u6570, \u4F8B\u5982:
parameters { booleanParam(name: &#39;DEBUG_BUILD&#39;, defaultValue: true, description: &#39;&#39;) }
agent any
parameters {
    string(name: &#39;PERSON&#39;, defaultValue: &#39;Mr Jenkins&#39;, description: &#39;Who should I say hello to?&#39;)
}
stages {
    stage(&#39;Example&#39;) {
        steps {
            echo &quot;Hello \${params.PERSON}&quot;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="trigger\u89E6\u53D1\u5668" tabindex="-1"><a class="header-anchor" href="#trigger\u89E6\u53D1\u5668" aria-hidden="true">#</a> trigger\u89E6\u53D1\u5668</h3><p>\u6784\u5EFA\u89E6\u53D1\u5668</p><p>\u4F5C\u7528\u57DF\uFF1A\u88ABpipeline\u5305\u88F9\uFF0C\u5728\u7B26\u5408\u6761\u4EF6\u4E0B\u81EA\u52A8\u89E6\u53D1pipeline\u76EE\u524D\u5305\u542B\u4E09\u79CD\u81EA\u52A8\u89E6\u53D1\u7684\u65B9\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//cron \u8BA1\u5212\u4EFB\u52A1\u5B9A\u671F\u6267\u884C\u6784\u5EFA
triggers { cron(&#39;H */4 * * 1-5&#39;) }


//pollSCM \u4E0Ecron\u5B9A\u4E49\u7C7B\u4F3C\uFF0C\u4F46\u662F\u7531jenkins\u5B9A\u671F\u68C0\u6D4B\u6E90\u7801\u53D8\u5316\u3002
triggers { pollSCM(&#39;H */4 * * 1-5&#39;) }

// upstream \u53EF\u4EE5\u5229\u7528\u4E0A\u6E38Job\u7684\u8FD0\u884C\u72B6\u6001\u6765\u8FDB\u884C\u89E6\u53D1
triggers { upstream(upstreamProjects: &#39;job1,job2&#39;, threshold: hudson.model.Result.SUCCESS) }

agent any
triggers {
    cron(&#39;H */4 * * 1-5&#39;)
}
stages {
    stage(&#39;Example&#39;) {
        steps {
            echo &#39;Hello World&#39;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="tool\u6784\u5EFA\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#tool\u6784\u5EFA\u5DE5\u5177" aria-hidden="true">#</a> tool\u6784\u5EFA\u5DE5\u5177</h3><p>\u6784\u5EFA\u5DE5\u5177maven\u3001ant\u3001gradle,\u83B7\u53D6\u901A\u8FC7\u81EA\u52A8\u5B89\u88C5\u6216\u624B\u52A8\u653E\u7F6E\u5DE5\u5177\u7684\u73AF\u5883\u53D8\u91CF\u3002\u652F\u6301maven/jdk/gradle\u3002\u5DE5\u5177\u7684\u540D\u79F0\u5FC5\u987B\u5728\u7CFB\u7EDF\u8BBE\u7F6E-&gt;\u5168\u5C40\u5DE5\u5177\u914D\u7F6E\u4E2D\u5B9A\u4E49\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>agent any
tools {
    maven &#39;apache-maven-3.0.1&#39; 
}
stages {
    stage(&#39;Example&#39;) {
        steps {
            sh &#39;mvn --version&#39;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="input\u4EA4\u4E92\u8F93\u5165" tabindex="-1"><a class="header-anchor" href="#input\u4EA4\u4E92\u8F93\u5165" aria-hidden="true">#</a> input\u4EA4\u4E92\u8F93\u5165</h3><p>input\u7528\u6237\u5728\u6267\u884C\u5404\u4E2A\u9636\u6BB5\u7684\u65F6\u5019\uFF0C\u7531\u4EBA\u5DE5\u786E\u8BA4\u662F\u5426\u7EE7\u7EED\u8FDB\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>agent any
stages {
    stage(&#39;Example&#39;) {
        input {
            message &quot;Should we continue?&quot;
            ok &quot;Yes, we should.&quot;
            submitter &quot;alice,bob&quot;
            parameters {
                string(name: &#39;PERSON&#39;, defaultValue: &#39;Mr Jenkins&#39;, description: &#39;Who should I say hello to?&#39;)
            }
        }
        steps {
            echo &quot;Hello, \${PERSON}, nice to meet you.&quot;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u53C2\u6570\u89E3\u91CA\uFF1A</p><ul><li>message \u5448\u73B0\u7ED9\u7528\u6237\u7684\u63D0\u793A\u4FE1\u606F\u3002</li><li>id \u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3Astage\u540D\u79F0\u3002</li><li>ok \u9ED8\u8BA4\u8868\u5355\u4E0A\u7684ok\u6587\u672C\u3002</li><li>submitter \u53EF\u9009\u7684,\u4EE5\u9017\u53F7\u5206\u9694\u7684\u7528\u6237\u5217\u8868\u6216\u5141\u8BB8\u63D0\u4EA4\u7684\u5916\u90E8\u7EC4\u540D\u3002\u9ED8\u8BA4\u5141\u8BB8\u4EFB\u4F55\u7528\u6237\u3002</li><li>submitterParameter \u73AF\u5883\u53D8\u91CF\u7684\u53EF\u9009\u540D\u79F0\u3002\u5982\u679C\u5B58\u5728\uFF0C\u7528submitter \u540D\u79F0\u8BBE\u7F6E\u3002</li><li>parameters \u63D0\u793A\u63D0\u4EA4\u8005\u63D0\u4F9B\u7684\u4E00\u4E2A\u53EF\u9009\u7684\u53C2\u6570\u5217\u8868\u3002</li></ul><h3 id="when\u6761\u4EF6\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#when\u6761\u4EF6\u5224\u65AD" aria-hidden="true">#</a> when\u6761\u4EF6\u5224\u65AD</h3><p>when \u6307\u4EE4\u5141\u8BB8\u6D41\u6C34\u7EBF\u6839\u636E\u7ED9\u5B9A\u7684\u6761\u4EF6\u51B3\u5B9A\u662F\u5426\u5E94\u8BE5\u6267\u884C\u9636\u6BB5\u3002 when \u6307\u4EE4\u5FC5\u987B\u5305\u542B\u81F3\u5C11\u4E00\u4E2A\u6761\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//branch: \u5F53\u6B63\u5728\u6784\u5EFA\u7684\u5206\u652F\u4E0E\u6A21\u5F0F\u7ED9\u5B9A\u7684\u5206\u652F\u5339\u914D\u65F6\uFF0C\u6267\u884C\u8FD9\u4E2A\u9636\u6BB5,\u8FD9\u53EA\u9002\u7528\u4E8E\u591A\u5206\u652F\u6D41\u6C34\u7EBF\u4F8B\u5982:
when { branch &#39;master&#39; }


//environment: \u5F53\u6307\u5B9A\u7684\u73AF\u5883\u53D8\u91CF\u662F\u7ED9\u5B9A\u7684\u503C\u65F6\uFF0C\u6267\u884C\u8FD9\u4E2A\u6B65\u9AA4,\u4F8B\u5982:
when { environment name: &#39;DEPLOY_TO&#39;, value: &#39;production&#39; }

//expression \u5F53\u6307\u5B9A\u7684Groovy\u8868\u8FBE\u5F0F\u8BC4\u4F30\u4E3Atrue\u65F6\uFF0C\u6267\u884C\u8FD9\u4E2A\u9636\u6BB5, \u4F8B\u5982:
when { expression { return params.DEBUG_BUILD } }

//not \u5F53\u5D4C\u5957\u6761\u4EF6\u662F\u9519\u8BEF\u65F6\uFF0C\u6267\u884C\u8FD9\u4E2A\u9636\u6BB5,\u5FC5\u987B\u5305\u542B\u4E00\u4E2A\u6761\u4EF6\uFF0C\u4F8B\u5982:
when { not { branch &#39;master&#39; } }

//allOf \u5F53\u6240\u6709\u7684\u5D4C\u5957\u6761\u4EF6\u90FD\u6B63\u786E\u65F6\uFF0C\u6267\u884C\u8FD9\u4E2A\u9636\u6BB5,\u5FC5\u987B\u5305\u542B\u81F3\u5C11\u4E00\u4E2A\u6761\u4EF6\uFF0C\u4F8B\u5982:
when { allOf { branch &#39;master&#39;; environment name: &#39;DEPLOY_TO&#39;, value: &#39;production&#39; } }

//anyOf \u5F53\u81F3\u5C11\u6709\u4E00\u4E2A\u5D4C\u5957\u6761\u4EF6\u4E3A\u771F\u65F6\uFF0C\u6267\u884C\u8FD9\u4E2A\u9636\u6BB5,\u5FC5\u987B\u5305\u542B\u81F3\u5C11\u4E00\u4E2A\u6761\u4EF6\uFF0C\u4F8B\u5982:
when { anyOf { branch &#39;master&#39;; branch &#39;staging&#39; } }


stage(&#39;Example Deploy&#39;) {
    when {
        branch &#39;production&#39;
        environment name: &#39;DEPLOY_TO&#39;, value: &#39;production&#39;
    }
    steps {
        echo &#39;Deploying&#39;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="parallel\u5E76\u884C" tabindex="-1"><a class="header-anchor" href="#parallel\u5E76\u884C" aria-hidden="true">#</a> parallel\u5E76\u884C</h2><p>\u58F0\u660E\u5F0F\u6D41\u6C34\u7EBF\u7684\u9636\u6BB5\u53EF\u4EE5\u5728\u4ED6\u4EEC\u5185\u90E8\u58F0\u660E\u591A\u9694\u5D4C\u5957\u9636\u6BB5, \u5B83\u4EEC\u5C06\u5E76\u884C\u6267\u884C\u3002 \u6CE8\u610F\uFF0C\u4E00\u4E2A\u9636\u6BB5\u5FC5\u987B\u53EA\u6709\u4E00\u4E2A steps \u6216 parallel\u7684\u9636\u6BB5\u3002 \u5D4C\u5957\u9636\u6BB5\u672C\u8EAB\u4E0D\u80FD\u5305\u542B \u8FDB\u4E00\u6B65\u7684 parallel \u9636\u6BB5, \u4F46\u662F\u5176\u4ED6\u7684\u9636\u6BB5\u7684\u884C\u4E3A\u4E0E\u4EFB\u4F55\u5176\u4ED6 stageparallel \u7684\u9636\u6BB5\u4E0D\u80FD\u5305\u542B agent \u6216 tools\u9636\u6BB5, \u56E0\u4E3A\u4ED6\u4EEC\u6CA1\u6709\u76F8\u5173 steps\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> stage(&#39;Parallel Stage&#39;) {
    when {
        branch &#39;master&#39;
    }
    failFast true
    parallel {
        stage(&#39;Branch A&#39;) {
            agent {
                label &quot;for-branch-a&quot;
            }
            steps {
                echo &quot;On Branch A&quot;
            }
        }
        stage(&#39;Branch B&#39;) {
            agent {
                label &quot;for-branch-b&quot;
            }
            steps {
                echo &quot;On Branch B&quot;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>failFast true \u5F53\u5176\u4E2D\u4E00\u4E2A\u8FDB\u7A0B\u5931\u8D25\u65F6\uFF0C\u5F3A\u5236\u6240\u6709\u7684 parallel \u9636\u6BB5\u90FD\u88AB\u7EC8\u6B62\u3002</p><h2 id="script\u811A\u672C\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#script\u811A\u672C\u6807\u7B7E" aria-hidden="true">#</a> script\u811A\u672C\u6807\u7B7E</h2><p>\u5728\u58F0\u660E\u5F0F\u7684pipeline\u4E2D\u9ED8\u8BA4\u65E0\u6CD5\u4F7F\u7528\u811A\u672C\u8BED\u6CD5\uFF0C\u4F46\u662Fpipeline\u63D0\u4F9B\u4E86\u4E00\u4E2A\u811A\u672C\u73AF\u5883\u5165\u53E3\uFF1Ascript{},\u901A\u8FC7\u4F7F\u7528script\u6765\u5305\u88F9\u811A\u672C\u8BED\u53E5\uFF0C\u5373\u53EF\u4F7F\u7528\u811A\u672C\u8BED\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pipeline {
    agent any
    stages {
        stage(&#39;stage 1&#39;) {
            steps {
                script{
                    try {
                        sh &#39;exit 1&#39;
                    }
                    catch (exc) {
                        echo &#39;Something failed&#39;
                        
                    }
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,74),m={href:"http://docs.idevops.site/jenkins/pipelinesyntax/chapter02/",target:"_blank",rel:"noopener noreferrer"},d=a("Jenkins \u6D41\u6C34\u7EBF\u8BED\u6CD5 | \u6CFD\u9633"),o={href:"https://www.jianshu.com/p/f1167e8850cd",target:"_blank",rel:"noopener noreferrer"},h=a("jenkins pipeline\u57FA\u7840\u8BED\u6CD5\u4E0E\u793A\u4F8B | MR_Hanjc | \u7B80\u4E66");function g(x,v){const s=l("ExternalLinkIcon");return t(),p(i,null,[u,n("p",null,[n("a",m,[d,e(s)])]),n("p",null,[n("a",o,[h,e(s)])])],64)}var q=r(c,[["render",g],["__file","pipelinesyntax.html.vue"]]);export{q as default};
