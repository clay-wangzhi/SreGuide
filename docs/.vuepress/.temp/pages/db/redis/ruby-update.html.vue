<template><h1 id="centos7安装升级ruby" tabindex="-1"><a class="header-anchor" href="#centos7安装升级ruby" aria-hidden="true">#</a> centos7安装升级ruby</h1>
<p>转载自：<a href="https://blog.csdn.net/qq_26440803/article/details/82717244" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_26440803/article/details/82717244<ExternalLinkIcon/></a></p>
<h3 id="在线安装ruby" tabindex="-1"><a class="header-anchor" href="#在线安装ruby" aria-hidden="true">#</a> 在线安装ruby</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install ruby
ruby -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="添加ruby仓库" tabindex="-1"><a class="header-anchor" href="#添加ruby仓库" aria-hidden="true">#</a> 添加ruby仓库</h3>
<p>添加aliyun镜像</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gem sources -a http://mirrors.aliyun.com/rubygems/ 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>删除原来的镜像</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gem sources --remove https://rubygems.org/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看当前镜像源</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gem sources -l
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="安装ram" tabindex="-1"><a class="header-anchor" href="#安装ram" aria-hidden="true">#</a> 安装RAM</h3>
<blockquote>
<p>RAM（<a href="https://rvm.io/" target="_blank" rel="noopener noreferrer">Ruby Version Manager<ExternalLinkIcon/></a> ）是一款RAM的命令行工具，可以使用RAM轻松安装，管理Ruby版本。RVM包含了Ruby的版本管理和Gem库管理(gemset)安装</p>
</blockquote>
<p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>更新配置文件，使其立马生效：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>source /etc/profile.d/rvm.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看RVM版本信息，如果可以代表安装成功。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rvm -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看Ruby版本</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rvm list known
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>选定版本进行安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rvm install 2.5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>验证版本</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ruby -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
