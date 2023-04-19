<template><h1 id="kibana的安装和界面快速浏览" tabindex="-1"><a class="header-anchor" href="#kibana的安装和界面快速浏览" aria-hidden="true">#</a> Kibana的安装和界面快速浏览</h1>
<h2 id="安装运行" tabindex="-1"><a class="header-anchor" href="#安装运行" aria-hidden="true">#</a> 安装运行</h2>
<p>下载地址：</p>
<blockquote>
<p>https://www.elastic.co/cn/downloads/kibana</p>
</blockquote>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567761679082.png" alt="" loading="lazy"></p>
<p>解压并安装运行</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567761719575.png" alt="" loading="lazy"></p>
<h2 id="kibana-console" tabindex="-1"><a class="header-anchor" href="#kibana-console" aria-hidden="true">#</a> Kibana Console</h2>
<ul>
<li>Dev Tool</li>
<li>Search Profiler</li>
<li>Help + 一些快捷键
<ul>
<li>cmd + / (查看API帮助文档)</li>
<li>cmd + option + I</li>
<li>cmd + option + 0</li>
<li>cmd + option + shift + 0</li>
</ul>
</li>
</ul>
<h2 id="kibana-pulgins" tabindex="-1"><a class="header-anchor" href="#kibana-pulgins" aria-hidden="true">#</a> Kibana Pulgins</h2>
<p>常用命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>bin/kibana-plugin <span class="token function">install</span> /usr/plugin_location
bin/kibana-plugin list
bin/kibana remove
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="用kibana解决日志时间乱序问题" tabindex="-1"><a class="header-anchor" href="#用kibana解决日志时间乱序问题" aria-hidden="true">#</a> 用Kibana解决日志时间乱序问题</h2>
<p>可以按照偏移量，和主机名进行排序</p>
</template>
