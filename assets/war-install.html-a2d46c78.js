import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as r,a as e,b as n,d,e as l}from"./app-be40ec11.js";const c={},o=e("h1",{id:"_2-2-war-包安装-jenkins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-2-war-包安装-jenkins","aria-hidden":"true"},"#"),n(" 2.2 war 包安装 jenkins")],-1),v={href:"https://www.kancloud.cn/willseecloud/jenkins/1860603",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="war-包安装-jenkins" tabindex="-1"><a class="header-anchor" href="#war-包安装-jenkins" aria-hidden="true">#</a> war 包安装 jenkins</h2><p>参考：https://www.jenkins.io/doc/pipeline/tour/getting-started/</p><p>要求：java8或java11</p><p>下载jenkins</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
wget https://mirrors.huaweicloud.com/jenkins/war/2.250/jenkins.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行jenkins</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -jar jenkins.war --httpPort=8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>浏览器访问jenkins</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tomcat运行jenkins" tabindex="-1"><a class="header-anchor" href="#tomcat运行jenkins" aria-hidden="true">#</a> tomcat运行jenkins</h2><p>Tomcat 和 Jenkins 都是用 Java 语言开发的，因此，我们首先需要安装 Java 的运行环境（JRE，Java Runtime Environment）。</p><p>首先下载 Tomcat 和 Jenkins：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下载Tomcat并解压
wget https://mirror.bit.edu.cn/apache/tomcat/tomcat-7/v7.0.105/bin/apache-tomcat-7.0.105.tar.gz
tar xzvf apache-tomcat-7.0.105.tar.gz

# 下载jenkins并放入Tomcat中
wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/war/2.256/jenkins.war
mv jenkins.war apache-tomcat-7.0.105/webapps
# 下载Tomcat并解压
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 Tomcat 的根目录下启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动
./bin/catalina.sh start
# 停止
./bin/catalina.sh stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tomcat 默认的端口是 8080，如果你安装在本地的话，可以通过下面的方式来访问：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost:8080/jenkins/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你的 Jenkins 是首次启动访问的话，根据网络情况所等待的时间长短是不相同的。因为此时 Jenkins 需要从更新中心下载插件信息。当插件信息下载成功后，你需要输入初始 Token（初始密码）才可以进入到配置初始化界面。</p><p>Token（初始密码）的值会保存在该文件中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>~/.jenkins/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20);function m(p,h){const a=s("ExternalLinkIcon");return t(),r("div",null,[o,e("blockquote",null,[e("p",null,[n("转载自："),e("a",v,[n("war包安装jenkins | willseecloud | 看云"),d(a)])])]),u])}const g=i(c,[["render",m],["__file","war-install.html.vue"]]);export{g as default};
