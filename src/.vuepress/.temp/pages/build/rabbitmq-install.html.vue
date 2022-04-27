<template><h1 id="centos7安装rabbitmq-3-7-9" tabindex="-1"><a class="header-anchor" href="#centos7安装rabbitmq-3-7-9" aria-hidden="true">#</a> centos7安装rabbitmq-3.7.9</h1>
<p>安装方式：rpm包安装</p>
<p>系统版本: centos7.x</p>
<h2 id="安装erlang" tabindex="-1"><a class="header-anchor" href="#安装erlang" aria-hidden="true">#</a> 安装erlang</h2>
<p>安装<a href="https://github.com/rabbitmq/erlang-rpm" target="_blank" rel="noopener noreferrer">erlang-rpm<ExternalLinkIcon/></a>包，该包经过RabbitMQ官方处理，去掉了一些无用的依赖，只保存运行RabbitMQ所需要的Erlang模块。</p>
<p>这里下载的版本为21.2</p>
<p><img src="images/erlang.png" alt="" loading="lazy"></p>
<p>下载完后上传到服务器上，安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install erlang-21.2-1.el7.centos.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#安装rabbitmq" aria-hidden="true">#</a> 安装rabbitmq</h2>
<p>从官网下载rpm包并上传到服务器上。<a href="http://www.rabbitmq.com/install-rpm.html#install-monolithic-from-esl-repository" target="_blank" rel="noopener noreferrer">官方下载链接<ExternalLinkIcon/></a></p>
<p><img src="images/rabbitmq.png" alt="" loading="lazy"></p>
<p>导入签名</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rpm --import https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum install rabbitmq-server-3.7.9-1.el7.noarch.rpm -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="启动rabbitmq" tabindex="-1"><a class="header-anchor" href="#启动rabbitmq" aria-hidden="true">#</a> 启动rabbitmq</h2>
<p>设置开机启动</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl enable rabbitmq-server.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动rabbitmq</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl start rabbitmq-server.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>停止rabbitmq</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl stop rabbitmq-server.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="配置rabbitmq" tabindex="-1"><a class="header-anchor" href="#配置rabbitmq" aria-hidden="true">#</a> 配置rabbitmq</h2>
<p>拷贝默认配置文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cp /usr/share/doc/rabbitmq-server-3.7.9/rabbitmq.config.example /etc/rabbitmq/rabbitmq.config
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>开启管理后台</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rabbitmq-plugins enable rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>开放防火墙端口</p>
<p><code> vim /etc/sysconfig/iptables</code>增加下面两行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-A INPUT -m state --state NEW -m tcp -p tcp --dport 5672 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 15672 -j ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>重启防火墙</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart iptables.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置用户权限，增加一个用户</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl start rabbitmq-server.service
rabbitmqctl add_user admin admin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>赋予用户管理员角色</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rabbitmqctl set_user_tags admin administrator
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>访问页面，http://ip:15672</p>
<p><img src="images/rabbitmq_web.png" alt="" loading="lazy"></p>
</template>
