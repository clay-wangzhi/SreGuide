<template><h1 id="elasticsearch的安装和简单配置" tabindex="-1"><a class="header-anchor" href="#elasticsearch的安装和简单配置" aria-hidden="true">#</a> Elasticsearch的安装和简单配置</h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="安装java" tabindex="-1"><a class="header-anchor" href="#安装java" aria-hidden="true">#</a> 安装JAVA</h3>
<ul>
<li>运维Elasticsearch，需要安装并配置JDK，设置$JAVA_HOME</li>
<li>各个版本对Java的依赖
<ul>
<li>Elasticsearch 5 需要Java8以上的版本</li>
<li>Elasticsearch 从6.5开始支持Java11</li>
<li>7.0 开始，内置了Java环境</li>
</ul>
</li>
</ul>
<h3 id="安装elasticsearch" tabindex="-1"><a class="header-anchor" href="#安装elasticsearch" aria-hidden="true">#</a> 安装Elasticsearch</h3>
<ul>
<li>下载二进制文件</li>
</ul>
<blockquote>
<p>https://www.elastic.co/cn/downloads/elasticsearch</p>
</blockquote>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567741507169.png" alt="" loading="lazy"></p>
<p>安装并运维Elasticsearch</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567741543204.png" alt="" loading="lazy"></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<h3 id="elasticsearch的文件目录结构" tabindex="-1"><a class="header-anchor" href="#elasticsearch的文件目录结构" aria-hidden="true">#</a> Elasticsearch的文件目录结构</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567741696333.png" alt="" loading="lazy"></p>
<h3 id="jvm配置" tabindex="-1"><a class="header-anchor" href="#jvm配置" aria-hidden="true">#</a> JVM配置</h3>
<ul>
<li>修改JCM - config/jvm.options
<ul>
<li>7.3 下载的默认设置是1GB</li>
</ul>
</li>
<li>配置的建议
<ul>
<li>Xmx和Xms设置成一样</li>
<li>Xmx不要超过机器内存的50%</li>
<li>不要超过30GB</li>
</ul>
</li>
</ul>
<h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2>
<h3 id="运行单个实例" tabindex="-1"><a class="header-anchor" href="#运行单个实例" aria-hidden="true">#</a> 运行单个实例</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>bin/elasticsearch -E node.name<span class="token operator">=</span>node0 -E node.name<span class="token operator">=</span>node0 -E cluster.name<span class="token operator">=</span>geektime -E path.data<span class="token operator">=</span>node0_data
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="运行多个实例" tabindex="-1"><a class="header-anchor" href="#运行多个实例" aria-hidden="true">#</a> 运行多个实例</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>bin/elasticsearch -E node.name<span class="token operator">=</span>node1 -E cluster.name<span class="token operator">=</span>geektime -E path.data<span class="token operator">=</span>node1_data -d
bin/elasticsearch -E node.name<span class="token operator">=</span>node2 -E cluster.name<span class="token operator">=</span>geektime -E path.data<span class="token operator">=</span>node2_data -d
bin/elasticsearch -E node.name<span class="token operator">=</span>node2 -E cluster.name<span class="token operator">=</span>geektime -E path.data<span class="token operator">=</span>node2_data -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>访问 http://localhost:9200 check cluster health state</li>
<li>通过 http://localhost:9200_cat/nodes?v 查看节点</li>
</ul>
<h3 id="安装与查看插件" tabindex="-1"><a class="header-anchor" href="#安装与查看插件" aria-hidden="true">#</a> 安装与查看插件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>bin/elasticsearch-plugin <span class="token function">install</span> analysis-icu
bin/elasticsearch-plugin list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>Elasticsearch提供插件的机制对系统进行扩展
<ul>
<li>Discovery Plugin</li>
<li>Analysis Plugin</li>
<li>Security Plugin</li>
<li>Management Plugin</li>
<li>Ingest Plugin</li>
<li>Mapper Plugin</li>
<li>Backup Plugin</li>
</ul>
</li>
</ul>
</template>
