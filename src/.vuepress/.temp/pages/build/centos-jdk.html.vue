<template><h1 id="linux下配置jdk的环境变量" tabindex="-1"><a class="header-anchor" href="#linux下配置jdk的环境变量" aria-hidden="true">#</a> Linux下配置jdk的环境变量</h1>
<p>Hello everyone, let's learn jdk together！</p>
<h3 id="yum安装" tabindex="-1"><a class="header-anchor" href="#yum安装" aria-hidden="true">#</a> yum安装</h3>
<p>yum 查询可以安装的软件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum list | grep jdk
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/jdk1.png" alt="" loading="lazy"></p>
<p>根据需求选择版本进行安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install java-1.8.0-openjdk* 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="rpm安装" tabindex="-1"><a class="header-anchor" href="#rpm安装" aria-hidden="true">#</a> rpm安装</h3>
<p>jdk官网地址为：http://www.oracle.com</p>
<p>各个版本的下载地址为：http://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html   （网页会变，请自动百度，当前日期：2018-03-06）</p>
<p>根据需求下载rpm版本  （必须有oracle账号进行登录）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget http://download.oracle.com/otn/java/jdk/7u75-b13/jdk-7u75-linux-x64.rpm?AuthParam=1520474898_85357527f14068896db993a783a48e94
rpm -ivh jdk-7u75-linux-x64.rpm\?AuthParam\=1520474898_85357527f14068896db993a783a48e94 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="压缩包安装" tabindex="-1"><a class="header-anchor" href="#压缩包安装" aria-hidden="true">#</a> 压缩包安装</h3>
<p>我个人喜欢压缩包安装，灵活性较高</p>
<p>根据需求下载压缩包版本</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget http://download.oracle.com/otn/java/jdk/7u76-b13/jdk-7u76-linux-x64.tar.gz?AuthParam=1520475252_b3af0149915380bf1a4a0a8d962893ca
mv jdk-7u76-linux-x64.tar.gz\?AuthParam\=1520475252_b3af0149915380bf1a4a0a8d962893ca jdk-7u76-linux-x64.tar.gz
tar -xvf jdk-7u76-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>配置环境变量</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># vim /etc/profile
export JAVA_HOME=/opt/jdk1.7.0_76
export JRE_HOME=/opt/jdk1.7.0_76/jre
export CLASSPATH=.:$CLASSPATH:$JAVA_HOME/lib:$JRE_HOME/lib
export PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
# source /etc/profile
# java -version
java version "1.7.0_76"
Java(TM) SE Runtime Environment (build 1.7.0_76-b13)
Java HotSpot(TM) 64-Bit Server VM (build 24.76-b04, mixed mode)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
