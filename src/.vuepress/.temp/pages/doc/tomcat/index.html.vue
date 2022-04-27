<template><h1 id="tomcat简介" tabindex="-1"><a class="header-anchor" href="#tomcat简介" aria-hidden="true">#</a> tomcat简介</h1>
<h2 id="tomcat学习笔记-一" tabindex="-1"><a class="header-anchor" href="#tomcat学习笔记-一" aria-hidden="true">#</a> Tomcat学习笔记（一）</h2>
<p>Hello everyone, let's learn tomcat together！</p>
<h3 id="tomcat的开幕式" tabindex="-1"><a class="header-anchor" href="#tomcat的开幕式" aria-hidden="true">#</a> Tomcat的开幕式</h3>
<p>Tomcat以Java编写</p>
<h4 id="安装tomcat" tabindex="-1"><a class="header-anchor" href="#安装tomcat" aria-hidden="true">#</a> 安装Tomcat</h4>
<p>官网地址为：https://tomcat.apache.org</p>
<p>各个版本的下载地址为：https://archive.apache.org/dist/tomcat/</p>
<p>安装方式</p>
<p>二进制文件（文件为tar.gz）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.23/bin/apache-tomcat-8.5.23.tar.gz
tar -xvf apache-tomcat-8.5.23.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>需提前配置好jdk的环境变量，jdk配置详见上一章节</p>
<h4 id="tomcat启动、停止、重启" tabindex="-1"><a class="header-anchor" href="#tomcat启动、停止、重启" aria-hidden="true">#</a> Tomcat启动、停止、重启</h4>
<p>主要用到的脚本有</p>
<p>catalina.sh、shutdown.sh、startup.sh、version.sh</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/tomcat1.png" alt="" loading="lazy"></p>
<p>catalina是tomcat的主要脚本，它会执行java命令以调用Tomcat的启动或停止等</p>
<p>shutdown是停止tomcat脚本</p>
<p>startup是启动tomcat脚本</p>
<p>version是查看tomcat的版本信息</p>
<ul>
<li>
<p>常用的catalina脚本启动参数</p>
<p>config [server.xml file]	  指定另一个server.xml配置文件。默认是使用驻留在$CATALINA_BASE/conf目录中的server.xml</p>
<p>help					输出命令行选项摘要表</p>
<p>ebug					以调试模式启动tomcat</p>
<p>tart					启动tomcat，并将标准输出与错误送至tomcat的日志文件</p>
<p>top					停止tomcat</p>
<p>ersion 					输出tomcat的版本信息</p>
</li>
</ul>
<h4 id="安装后的测试" tabindex="-1"><a class="header-anchor" href="#安装后的测试" aria-hidden="true">#</a> 安装后的测试</h4>
<p>当安装以及启动tomcat后，测试是否成功启动，可以访问网页进行测试，默认端口为8080</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/tomcat2.png" alt="" loading="lazy"></p>
<h3 id="配置tomcat" tabindex="-1"><a class="header-anchor" href="#配置tomcat" aria-hidden="true">#</a> 配置tomcat</h3>
<h4 id="从8080改变端口号" tabindex="-1"><a class="header-anchor" href="#从8080改变端口号" aria-hidden="true">#</a> 从8080改变端口号</h4>
<p>把机器上目的地为80端口的所有连接需重定向到8080端口的信息通知给内核。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080
iptables -t nat -I OUTPUT -p tcp --dport 80 -j REDIRECT --to-ports 8080
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
