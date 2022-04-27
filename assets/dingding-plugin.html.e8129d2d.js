import{_ as e,r as o,c,a as n,b as p,F as i,e as t,d as s,o as l}from"./app.ac0f71d5.js";const u={},r=t('<h1 id="_4-5-\u5171\u4EAB\u5E93\u4E4B\u9489\u9489\u6D88\u606F\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#_4-5-\u5171\u4EAB\u5E93\u4E4B\u9489\u9489\u6D88\u606F\u63A8\u9001" aria-hidden="true">#</a> 4.5 \u5171\u4EAB\u5E93\u4E4B\u9489\u9489\u6D88\u606F\u63A8\u9001</h1><p>\u8D77\u56E0\uFF1A\u6267\u884C\u5B8C\u6D41\u6C34\u7EBF\u540E\u8FDB\u884C\u4E00\u5B9A\u7A0B\u5EA6\u7684\u6D88\u606F\u63A8\u9001\uFF0C\u6240\u4EE5\u9009\u62E9\u9489\u9489\u8FDB\u884C<code>jenkins</code>\u6784\u5EFA\u7ED3\u6784\u7684\u6D88\u606F\u63A8\u9001</p><h2 id="\u4E0B\u8F7D\u914D\u7F6E\u76F8\u5173\u4F9D\u8D56\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u914D\u7F6E\u76F8\u5173\u4F9D\u8D56\u63D2\u4EF6" aria-hidden="true">#</a> \u4E0B\u8F7D\u914D\u7F6E\u76F8\u5173\u4F9D\u8D56\u63D2\u4EF6</h2><p>\u76F8\u5173\u73AF\u5883\uFF1A</p><ul><li><code>Jenkins</code> 2.277.3\uFF0C\u5B89\u88C5\u6587\u6863\u89C1\u4E0A\u7BC7</li><li><code>DingTalk</code> \u63D2\u4EF6 2.4.3</li><li><code>build user vars plugin</code> \u63D2\u4EF6 1.7</li></ul>',5),k=s("\u5728Jenkins\u4E2D\u5B89\u88C5\u9489\u9489\u63D2\u4EF6"),b={href:"https://plugins.jenkins.io/dingding-notifications",target:"_blank",rel:"noopener noreferrer"},g=s("DingTalk"),d=n("blockquote",null,[n("p",null,"\u26A0\uFE0F \u8BF7\u786E\u4FDD\u4F60\u7684 Jenkins \u7248\u672C >= 2.176.4")],-1),m=s("\u9489\u9489\u673A\u5668\u4EBA\u914D\u7F6E\uFF0C"),h={href:"https://jenkinsci.github.io/dingtalk-plugin/",target:"_blank",rel:"noopener noreferrer"},_=s("\u8BF4\u660E\u6587\u6863"),y=n("p",null,"\u627E\u5230 Jenkins \u9996\u9875 >> \u7CFB\u7EDF\u7BA1\u7406 >> \u9489\u9489\uFF0C\u6211\u7684\u914D\u7F6E\u5982\u4E0B\u56FE",-1),x=n("p",null,[n("img",{src:"https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20210426164341273.png",alt:"image-20210426164341273",loading:"lazy"})],-1),q=n("blockquote",null,[n("p",null,"\u26A0\uFE0F \u200B\u6CE8\u610F\u624B\u52A8\u8F93\u5165\u673A\u5668\u4EBA\u7684id\uFF0C\u4E0D\u8981\u81EA\u52A8\u751F\u6210\uFF0C\u5426\u5219\u91CD\u542F\u540E\uFF0Crobot\u7684id\u5C06\u53D1\u751F\u53D8\u5316")],-1),f=s("\u5B89\u88C5"),v={href:"https://plugins.jenkins.io/build-user-vars-plugin",target:"_blank",rel:"noopener noreferrer"},w=s("build user vars plugin"),S=s("\u63D2\u4EF6\uFF0C\u63D2\u4EF6\u53EF\u80FD\u6709\u76F8\u5173\u7248\u672C\u4F9D\u8D56\uFF0C\u9700\u8981\u91CD\u542F\u4E00\u4E0B Jenkins \u624D\u80FD\u7EE7\u7EED\u5B89\u88C5"),B=t(`<p>\u5728\u6D41\u6C34\u7EBF\u4E2D\uFF0C\u4F7F\u7528wrap\uFF0C\u83B7\u53D6BUILD_USER\u53D8\u91CF</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">$</span><span class="token keyword">class</span><span class="token punctuation">:</span> <span class="token string">&#39;BuildUser&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,2),$=t(`<h2 id="\u521B\u5EFA\u914D\u7F6E\u5171\u4EAB\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u914D\u7F6E\u5171\u4EAB\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u914D\u7F6E\u5171\u4EAB\u5E93</h2><h3 id="\u7F16\u5199groovy\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199groovy\u811A\u672C" aria-hidden="true">#</a> \u7F16\u5199Groovy\u811A\u672C</h3><p>\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tree jenkinslibrary
jenkinslibrary
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 src
    \u2514\u2500\u2500 org
        \u2514\u2500\u2500 devops
            \u2514\u2500\u2500 dingmes.groovy

<span class="token number">3</span> directories, <span class="token number">2</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>dingme.groovy</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token keyword">package</span> org<span class="token punctuation">.</span>devops

<span class="token keyword">def</span> <span class="token function">GetChangeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MAX_MSG_LEN <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token keyword">def</span> changeString <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;&quot;</span></span>
    <span class="token keyword">def</span> changeLogSets <span class="token operator">=</span> currentBuild<span class="token punctuation">.</span>changeSets
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> changeLogSets<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">def</span> entries <span class="token operator">=</span> changeLogSets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>items
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> entries<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">def</span> entry <span class="token operator">=</span> entries<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
            truncated_msg <span class="token operator">=</span> entry<span class="token punctuation">.</span>msg<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span>MAX_MSG_LEN<span class="token punctuation">)</span>
            commitTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span></span><span class="token punctuation">)</span>
            changeString <span class="token operator">+=</span> <span class="token interpolation-string"><span class="token string">&quot;&gt; - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">truncated_msg</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> [</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">entry<span class="token punctuation">.</span>author</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">commitTime</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]\\n&quot;</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>changeString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        changeString <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;&gt; - No new changes&quot;</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> changeString
<span class="token punctuation">}</span>

<span class="token keyword">def</span> <span class="token function">DingdingReq</span><span class="token punctuation">(</span>RobotID<span class="token punctuation">,</span> Status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">wrap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">$</span><span class="token keyword">class</span><span class="token punctuation">:</span> <span class="token string">&#39;BuildUser&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">def</span> changeString <span class="token operator">=</span> <span class="token function">GetChangeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        dingtalk <span class="token punctuation">(</span>
            robot<span class="token punctuation">:</span> RobotID<span class="token punctuation">,</span>
            type<span class="token punctuation">:</span> <span class="token string">&#39;MARKDOWN&#39;</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">&#39;\u4F60\u6709\u65B0\u7684\u6D88\u606F\uFF0C\u8BF7\u6CE8\u610F\u67E5\u6536&#39;</span><span class="token punctuation">,</span>
            text<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token interpolation-string"><span class="token string">&quot;### \u6784\u5EFA\u4FE1\u606F&quot;</span></span><span class="token punctuation">,</span>
                <span class="token interpolation-string"><span class="token string">&quot;&gt; - \u5E94\u7528\u540D\u79F0\uFF1A**</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">**&quot;</span></span><span class="token punctuation">,</span>
                <span class="token interpolation-string"><span class="token string">&quot;&gt; - \u6784\u5EFA\u7ED3\u679C\uFF1A**</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">Status</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">**&quot;</span></span><span class="token punctuation">,</span>
                <span class="token interpolation-string"><span class="token string">&quot;&gt; - \u5F53\u524D\u7248\u672C\uFF1A**</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_NUMBER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">**&quot;</span></span><span class="token punctuation">,</span>
                <span class="token interpolation-string"><span class="token string">&quot;&gt; - \u6784\u5EFA\u53D1\u8D77\uFF1A**</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_USER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">**&quot;</span></span><span class="token punctuation">,</span>
                <span class="token interpolation-string"><span class="token string">&quot;&gt; - \u6301\u7EED\u65F6\u95F4\uFF1A**</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">currentBuild<span class="token punctuation">.</span>durationString</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">**&quot;</span></span><span class="token punctuation">,</span>
                <span class="token interpolation-string"><span class="token string">&quot;&gt; - \u6784\u5EFA\u65E5\u5FD7\uFF1A[\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5](</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">console)&quot;</span></span><span class="token punctuation">,</span>
                <span class="token interpolation-string"><span class="token string">&quot;### \u66F4\u65B0\u8BB0\u5F55:&quot;</span></span><span class="token punctuation">,</span>
                <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">changeString</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            at<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;xxxxxxxxxxx&#39;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><blockquote><p>\u6587\u672C\u4E2D<code>xxxxxxxxxxx</code>\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u66F4\u6362\u4E3A\u9489\u9489\u7FA4\u7EC4\u91CC\u9762\uFF0C\u5177\u4F53\u4EBA\u7684\u624B\u673A\u53F7\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A</p></blockquote><h3 id="\u5728-jenkins-\u4E2D\u914D\u7F6E\u5C06\u5171\u4EAB\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5728-jenkins-\u4E2D\u914D\u7F6E\u5C06\u5171\u4EAB\u5E93" aria-hidden="true">#</a> \u5728 Jenkins \u4E2D\u914D\u7F6E\u5C06\u5171\u4EAB\u5E93</h3><p>\u627E\u5230 Jenkins \u9996\u9875 &gt;&gt; \u7CFB\u7EDF\u7BA1\u7406 &gt;&gt; Global Pipeline Libraries\uFF0C\u6211\u7684\u914D\u7F6E\u5982\u4E0B\u56FE</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20210426171913350.png" alt="image-20210426171913350" loading="lazy"></p><h3 id="\u5728\u6D41\u6C34\u7EBF\u4E2D\u5BFC\u5165\u5171\u4EAB\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5728\u6D41\u6C34\u7EBF\u4E2D\u5BFC\u5165\u5171\u4EAB\u5E93" aria-hidden="true">#</a> \u5728\u6D41\u6C34\u7EBF\u4E2D\u5BFC\u5165\u5171\u4EAB\u5E93</h3><p>\u5BFC\u5165\u65B9\u6CD5<code>@Library(&#39;pipeline-library-demo&#39;)_</code>\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4F7F\u7528\u5171\u4EAB\u5E93\u4E2D\u7684\u4EE3\u7801\u4E86</p><p>\u5177\u4F53\u7684 pipeline \u811A\u672C\u5982\u4E0B\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token shebang comment">#!groovy</span>

<span class="token annotation punctuation">@Library</span><span class="token punctuation">(</span><span class="token string">&#39;pipeline-library-demo&#39;</span><span class="token punctuation">)</span><span class="token number">_</span>

<span class="token comment">//func from shareibrary</span>
<span class="token keyword">def</span> dingmes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">org<span class="token punctuation">.</span>devops<span class="token punctuation">.</span>dingmes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//env</span>
String branchName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;master&quot;</span></span>
String gitlabCredentialsId <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;xxx&quot;</span></span>
String gitUrl <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;http://xxx/xxx/jenkinslibrary.git&quot;</span></span>
String robotId <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;2e0e11c4-2211-4687-b317-cacf58197288&quot;</span></span>

pipeline <span class="token punctuation">{</span>
    agent any
    
    stages <span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Git Clone&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                git branch<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">branchName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
                credentialsId<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">gitlabCredentialsId</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
                url<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">gitUrl</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    post <span class="token punctuation">{</span>
        success <span class="token punctuation">{</span>
            script <span class="token punctuation">{</span>
                dingmes<span class="token punctuation">.</span><span class="token function">DingdingReq</span><span class="token punctuation">(</span>robotId<span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;\u6784\u5EFA\u6210\u529F \u2705&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        failure <span class="token punctuation">{</span>
            script <span class="token punctuation">{</span>
                dingmes<span class="token punctuation">.</span><span class="token function">DingdingReq</span><span class="token punctuation">(</span>robotId<span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;\u6784\u5EFA\u5931\u8D25 \u274C&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u81F3\u6B64\u5B8C\u6210\uFF0C\u6784\u5EFA\u6548\u679C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20210426172713667.png" alt="image-20210426172713667" loading="lazy"></p><h2 id="\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u7684\u95EE\u9898</h2><ol><li><p><code>currentBuild.durationString</code>\u7684\u503C\u4F20\u9012\u4E0D\u8FDB\u53BB\uFF0C\u4E00\u5F00\u59CB\u5148\u7528<code>withEnv</code>\u5305\u88F9\u4E00\u4E0B</p><p>\u540E\u6765\u627E\u5230\u539F\u56E0 Groovy \u5728\u5355\u5F15\u53F7\u7684\u5B57\u7B26\u4E32\u91CC\u9762\u662F\u4E0D\u652F\u6301\u63D2\u503C\u7684\uFF0C\u6240\u4EE5\u8981\u7528\u53CC\u5F15\u53F7</p><p>\u5355\u5F15\u53F7\u4E2D\u7684<code>env.JOB_NAME</code>\u4F1A\u5F15\u7528\u5931\u8D25\uFF0C\u53CC\u5F15\u53F7\u5219\u5F15\u7528\u6210\u529F</p><p>\u5355\u3001\u53CC\u5F15\u53F7\u5F15\u7528<code>JOB_NAME</code>\u90FD\u5F15\u7528\u6210\u529F</p><blockquote><p>\u63A8\u8350\u6240\u6709\u53D8\u91CF\u90FD\u7528&quot;&quot;\u53CC\u5F15\u53F7</p><p>\u4E09\u5F15\u53F7\u4E5F\u662F\u4E00\u6837\uFF0C&#39;&#39;&#39; \u4E09\u5355\u5F15\u53F7\u4E0D\u652F\u6301\u63D2\u503C\uFF0C&quot;&quot;&quot;\u4E09\u53CC\u5F15\u53F7\u652F\u6301\u63D2\u503C</p></blockquote></li></ol><p>\u53C2\u8003\u94FE\u63A5\uFF1Ahttps://www.ssgeek.com/post/jenkinssharelibrary-shi-jian-zhi-zi-ding-yi-tong-zhi-qi/</p>`,19);function j(L,D){const a=o("ExternalLinkIcon");return l(),c(i,null,[r,n("ol",null,[n("li",null,[n("p",null,[k,n("a",b,[g,p(a)])]),d]),n("li",null,[n("p",null,[m,n("a",h,[_,p(a)])]),y,x,q]),n("li",null,[n("p",null,[f,n("a",v,[w,p(a)]),S]),B])]),$],64)}var I=e(u,[["render",j],["__file","dingding-plugin.html.vue"]]);export{I as default};
