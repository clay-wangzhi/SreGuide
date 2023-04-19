<template><h1 id="基于docker搭建confluence" tabindex="-1"><a class="header-anchor" href="#基于docker搭建confluence" aria-hidden="true">#</a> 基于docker搭建confluence</h1>
<p>系统版本：centos7</p>
<h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h2>
<ol>
<li>yum安装docker</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum update # 更新yum
yum install docker # yum安装docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li>
<p>开启镜像加速</p>
<p>由于国内网络问题拉取 Docker 镜像会十分缓慢，所以可以添加网易镜像地址：http://hub-mirror.c.163.com 加速。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vi /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将其中的内容替换为如下，当然你可以添加其它镜像地址。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>启动docker</p>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker --version # 查看docker版本
systemctl start docker # 启动docker
systemctl enable docker #设置开机自启
ps -ef | grep docker # 查看docker进程是否正常启动
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="安装数据库postgresql" tabindex="-1"><a class="header-anchor" href="#安装数据库postgresql" aria-hidden="true">#</a> 安装数据库PostgreSQL</h2>
<ol>
<li>安装PostgreSQL</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull postgres # 下拉镜像
docker run --name postgresdb -p 5432:5432 -e POSTGRES_PASSWORD=W*** -d docker.io/postgres:latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注意：</p>
<p>1）-p 5432:5432 选项是可选的，因为在后面启动Confluence容器的时候，postgresdb这个容器会以别名db连接到confluence容器，也就是说对confluence这个容器来说，可以通过db:5432的网络地址访问到postgresql服务，不需要在主机上开放5432端口。</p>
<p>2）W**** 是密码需要设置成你需要的密码。</p>
<ol start="2">
<li>进入docker容器并创建confluence数据库</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker exec -it postgresdb bash # 进入docker容器
psql -U postgres 
\l
CREATE DATABASE confluence WITH OWNER postgres; 
\q
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="安装wiki-confluence" tabindex="-1"><a class="header-anchor" href="#安装wiki-confluence" aria-hidden="true">#</a> 安装wiki Confluence</h2>
<ol>
<li>安装wiki Confluence</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull cptactionhank/atlassian-confluence #下拉镜像
docker run -d --name confluence -p 10080:8090 --link postgresdb:db --user root:root docker.io/cptactionhank/atlassian-confluence:latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li>检查confluence是否启动</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker ps # 列出运行的容器
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以看到 wiki confluence已经启动</p>
<ol start="3">
<li>访问http://IP:10080/ 就可以看到Confluence的配置页面</li>
</ol>
<h2 id="破解-wiki-confluence" tabindex="-1"><a class="header-anchor" href="#破解-wiki-confluence" aria-hidden="true">#</a> 破解 wiki Confluence</h2>
<ol>
<li>访问http://IP:10080/ 记录 Server ID</li>
<li>进入docker confluence 容器，查找decoder.jar文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker exec -it confluence /bin/bash # 进入docker容器 confluence
su - # 切换到root账户
find -name "*decoder*" # 查找名称中包括 decoder 的文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3">
<li>将decoder.jar文件从容器中复制出来，其中 “confluence:” 是Wiki confluence容器名称，atlassian-extras-decoder-v2-3.4.1.jar 是安装版本wiki的decode文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker cp confluence:/opt/atlassian/confluence/confluence/WEB-INF/lib/atlassian-extras-decoder-v2-3.4.1.jar .
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4">
<li>破解</li>
</ol>
<p>a) 下载 atlassian-extras-decoder-v2-3.4.1.jar 文件到windows上</p>
<p>b) 将文件名改为 “atlassian-extras-2.4.jar” 破解工具只识别这个文件名</p>
<p>c) 下载破解文件 <a href="https://raw.githubusercontent.com/clay-wangzhi/clay-wiki/master/utils/confluence5.1-crack.zip" target="_blank" rel="noopener noreferrer">https://raw.githubusercontent.com/clay-wangzhi/clay-wiki/master/utils/confluence5.1-crack.zip<ExternalLinkIcon/></a></p>
<p>d)解压并进入文件目录</p>
<p>e) 执行java -jar confluence_keygen.jar 运行破解文件</p>
<p>f）填入 name ，server id 处输入步骤1中得到的id，点击 “gen” 生成key</p>
<p>g）点击 patch，选择刚才改名为  “atlassian-extras-2.4.jar” 的jar包，显示 “jar success fully patched” 则破解成功</p>
<ul>
<li>注意：path前先删除atlassian-extras-2.4.bak文件否则path失败</li>
</ul>
<p>h）将 “atlassian-extras-2.4.jar” 文件名改回原来的 “atlassian-extras-decoder-v2-3.4.1.jar ”</p>
<p>i）复制key中的内容备用</p>
<p>j) 将”atlassian-extras-decoder-v2-3.4.1.jar “文件上传回服务器</p>
<ol start="5">
<li>将破解后的文件复制回 confluence 容器</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> docker cp atlassian-extras-decoder-v2-3.4.1.jar confluence:/opt/atlassian/confluence/confluence/WEB-INF/lib/atlassian-extras-decoder-v2-3.4.1.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6">
<li>重启confluence容器</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker restart confluence
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="7">
<li>再次访问页面,输入之前复制的key后点击下一步</li>
<li>点击 ”My own database“ 后点击 next</li>
<li>输入数据库连接信息，用户名密码是之前创建数据库中的用户名和密码</li>
</ol>
<p><img src="images/confluence.png" alt="" loading="lazy"></p>
<ol start="10">
<li>
<p>单击“Empty Site”</p>
</li>
<li>
<p>点击 “Manage users and groups within Confluence”</p>
</li>
<li>
<p>填入管理员信息后点击 “next”</p>
</li>
<li>
<p>点击 ”start“</p>
</li>
</ol>
<h2 id="解决慢时长gc的问题" tabindex="-1"><a class="header-anchor" href="#解决慢时长gc的问题" aria-hidden="true">#</a> 解决慢时长gc的问题</h2>
<p>默认java配置为1G内存使用一段时间后回经常gc造成卡顿，单击“系统信息”可以看到jvm使用情况</p>
<p>进入docker容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker exec -it confluence /bin/bash # 进入docker容器 confluence
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改java配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vi /opt/atlassian/confluence/bin/catalina.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 “cygwin=false” 上面添加如下内容，最大内存为2G</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>JAVA_OPTS="-Xms256m -Xmx2048m -XX:PermSize=128m -XX:MaxPermSize=512m"
或
CATALINA_OPTS="-Xms256m -Xmx2048m -XX:PermSize=128m -XX:MaxPermSize=512m"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>重启 wiki confluence</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker stop confluence # 停止
docker start confluence # 启动
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>参考文档：https://www.cnblogs.com/rslai/p/8845777.html</p>
</blockquote>
</template>
