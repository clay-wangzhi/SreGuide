import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e as a}from"./app-1a5afd71.js";const i={},l=a(`<h1 id="_2-4-使用docker安装jenkins" tabindex="-1"><a class="header-anchor" href="#_2-4-使用docker安装jenkins" aria-hidden="true">#</a> 2.4 使用docker安装jenkins</h1><h2 id="安装配置docker" tabindex="-1"><a class="header-anchor" href="#安装配置docker" aria-hidden="true">#</a> 安装配置docker</h2><ol><li><p>更换yum源，如果本来就是国内源，无需更换</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://gitee.com/clay-wangzhi/shell/raw/master/repo_replace.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装配置Docker</p><p>使用官方脚本安装 Docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://get.docker.com/&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加载br_netfilter</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>modprobe br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置下系统内核参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cat<span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/docker.conf</span>
# 要求iptables不对bridge的数据进行处理
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-arptables = 1
# 开启转发
net.ipv4.ip_forward = 1
EOF</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/docker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>⚠️ 慎用<code>sysctl --system</code>命令，如果参数在不同文件中设置，会有优先级问题，目前看来<code>/etc/sysctl.conf</code>的优先级最高</p></blockquote><p>配置docker镜像加速器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.daocloud.io/daotools/set_mirror.sh <span class="token operator">|</span> <span class="token function">sh</span> <span class="token parameter variable">-s</span> http://f1361db2.m.daocloud.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动docker服务并加入开机自启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="安装配置nginx" tabindex="-1"><a class="header-anchor" href="#安装配置nginx" aria-hidden="true">#</a> 安装配置nginx</h2><ol><li><p>新增nginx yum源</p><p>To set up the yum repository, create the file named <code>/etc/yum.repos.d/nginx.repo</code> with the following contents:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装&amp;&amp;启动nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置hosts解析</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;127.0.0.1 www.google.com&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="安装配置jenkins" tabindex="-1"><a class="header-anchor" href="#安装配置jenkins" aria-hidden="true">#</a> 安装配置jenkins</h2><blockquote><p>⚠️ 执行此步骤前，需要先安装配置nginx，在container启动时network设置为host时，我更新主机的hosts文件后，发现容器内的hosts文件没有更新，当前docker版本为20.10.6</p></blockquote><ol><li><p>下载jenkins镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull jenkinsci/blueocean:1.24.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建挂载目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/jenkins-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建并启动jenkins</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-u</span> root <span class="token parameter variable">--rm</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span>-Duser.timezone<span class="token operator">=</span>Asia/Shanghai <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/opt/jenkins-data,target<span class="token operator">=</span>/var/jenkins_home <span class="token parameter variable">--network</span><span class="token operator">=</span>host <span class="token parameter variable">--name</span> jenkins jenkinsci/blueocean:1.24.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>剩下的步骤按着提示完成就行，安装配置nginx的原因如下：</p><p>输入密码后第二步报”该Jenkins实例似乎已离线“，网上搜方案有两种：</p><p>1）更改插件下载源，具体步骤如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入http://ip:8080/jenkins/pluginManager/advanced</span>
<span class="token comment"># 将最下面的 Update Site 的 URL 地址替换成：http://mirror.esuni.jp/jenkins/updates/update-center.json</span>
<span class="token comment"># 点“submit”按钮，然后点右下角角 “check now”</span>
<span class="token comment"># 然后输入地址 http://ip:8080/jenkins/restart 重启 jenkins 后再重新安装插件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）修改 /var/lib/jenkins/updates/default.json 文件中的 connectionCheckUrl 项值为国内可访问的地址。</p><p>经实验，两种方式都不能保证100% 初始化成功</p><p>方法一更新的是插件的下载源，但是我还没开始下载插件，只是下载插件前的检查网络；</p><p>方法二重启jenkins又被重置为谷歌域名。</p><p>考虑connectionCheckUrl 只是用来安装插件时检查网络是否ping通，因此直接在本机上给www.google.com 指向到本地，再给配一个nginx 响应即可</p></li></ol>`,8),r=[l];function t(d,c){return n(),s("div",null,r)}const u=e(i,[["render",t],["__file","docker-install-jenkins.html.vue"]]);export{u as default};
