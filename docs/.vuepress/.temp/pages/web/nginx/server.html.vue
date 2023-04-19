<template><h1 id="_3-3-nginxserver块配置" tabindex="-1"><a class="header-anchor" href="#_3-3-nginxserver块配置" aria-hidden="true">#</a> 3.3 nginxSERVER块配置</h1>
<h2 id="_1-listen-指令" tabindex="-1"><a class="header-anchor" href="#_1-listen-指令" aria-hidden="true">#</a> 1 Listen 指令</h2>
<p><strong>Example Configuration</strong></p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317093603705.png" alt="" loading="lazy"></p>
<p><strong>Directives</strong></p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317093633095.png" alt="" loading="lazy"></p>
<h2 id="_2-server-name指令" tabindex="-1"><a class="header-anchor" href="#_2-server-name指令" aria-hidden="true">#</a> 2 server_name指令</h2>
<h3 id="_2-1-规则" tabindex="-1"><a class="header-anchor" href="#_2-1-规则" aria-hidden="true">#</a> 2.1 规则</h3>
<ul>
<li>指令后可以跟多个域名，第一个是主域名</li>
<li>*泛域名：进支持在最前或最后（<code>server_name *.baiud.com;</code>）</li>
<li>正则表达式：加<code>~</code>前缀 (<code>server_name  www.taohui.tech ~^www\d+\.taohui\.tech$;</code>)</li>
</ul>
<p><strong>用正则表达式创建变量：用小括号()</strong></p>
<p>示例</p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server_name</span> ~^(www\.)?(.+)$</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /sites/<span class="token variable">$2</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server_name</span> ~^(www\.)?(?&lt;domain>.+)$</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">locatoin</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /sites/<span class="token variable">$domain</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>其他</strong></p>
<ul>
<li>.taohui.tech 可以匹配 taohui.tech *.taohui.tech</li>
<li>_ 匹配所有</li>
<li>“” 匹配没有传递Host头部</li>
</ul>
<h3 id="_2-2-匹配顺序" tabindex="-1"><a class="header-anchor" href="#_2-2-匹配顺序" aria-hidden="true">#</a> 2.2 匹配顺序</h3>
<p>1）精准匹配</p>
<p>2）*在前的泛域名</p>
<p>3）*在后的泛域名</p>
<p>4）按文件中的顺序匹配正则表达式域名</p>
<p>5）default server 匹配第1个，listen指定default</p>
</template>
