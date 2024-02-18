import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-f15250d3.js";const a={},d=s(`<p>由于我的<code>jenkins</code>和<code>ansible</code>没有安装在一台主机上，所以，现在利用<code>rsync+inotify</code>实现<code>jenkins</code>的工作目录，同步到<code>ansible</code>主机上</p><p>环境如下：</p><p>inotify-master IP :192.168.162.175</p><p>inotify-slave IP:192.168.162.119</p><h2 id="_1-inotify-slave部署" tabindex="-1"><a class="header-anchor" href="#_1-inotify-slave部署" aria-hidden="true">#</a> 1 inotify slave部署</h2><h3 id="_1-1-安装rsync" tabindex="-1"><a class="header-anchor" href="#_1-1-安装rsync" aria-hidden="true">#</a> 1.1 安装rsync</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install rsync –y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-添加用户和模块目录-并更改用户和组" tabindex="-1"><a class="header-anchor" href="#_1-2-添加用户和模块目录-并更改用户和组" aria-hidden="true">#</a> 1.2 添加用户和模块目录，并更改用户和组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd rsync –s /sbin/nologin –M
mkdir -p /var/lib/jenkins/workspace
chown rsync.rsync /var/lib/jenkins/workspace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-修改配置文件-etc-rsyncd-conf" tabindex="-1"><a class="header-anchor" href="#_1-3-修改配置文件-etc-rsyncd-conf" aria-hidden="true">#</a> 1.3 修改配置文件<code>/etc/rsyncd.conf</code></h3><p>内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># egrep -v &quot;^#|^$&quot; /etc/rsyncd.conf
uid = rsync
gid = rsync
use chroot = no
max connections = 200
timeout = 300
fake super = yes 
pid file = /var/run/rsyncd.pid
lock file = /var/run/rsync.lock
log file = /var/log/rsyncd.log
ignore errors
read only = false
list = false
hosts allow = 192.168.162.0/24
auth users = rsync_backup
secrets file = /etc/rsync.password
[jenkinsbackup]
comment = &quot;jenkinsbackup dir by clay&quot;
path = /var/lib/jenkins/workspace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-配置虚拟用户的密码文件" tabindex="-1"><a class="header-anchor" href="#_1-4-配置虚拟用户的密码文件" aria-hidden="true">#</a> 1.4 配置虚拟用户的密码文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat rsync.password 
rsync_backup:clay123
# chmod 600 /etc/rsync.password 
# rsync --daemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-inotify-master部署" tabindex="-1"><a class="header-anchor" href="#_2-inotify-master部署" aria-hidden="true">#</a> 2 inotify master部署</h2><h3 id="_2-1-安装inotify-3-14" tabindex="-1"><a class="header-anchor" href="#_2-1-安装inotify-3-14" aria-hidden="true">#</a> 2.1 安装inotify 3.14</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cd /opt
# wget http://github.com/downloads/rvoicilas/inotify-tools/inotify-tools-3.14.tar.gz
# tar zxf inotify-tools-3.14.tar.gz
# cd inotify-tools-3.14
# ./configure --prefix=/usr/local/inotify
# make &amp;&amp; sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-创建rsync服务的密码文件" tabindex="-1"><a class="header-anchor" href="#_2-2-创建rsync服务的密码文件" aria-hidden="true">#</a> 2.2 创建rsync服务的密码文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat /etc/rsync.password 
clay123
# chmod 600 /etc/rsync.password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-编写执行脚本" tabindex="-1"><a class="header-anchor" href="#_2-3-编写执行脚本" aria-hidden="true">#</a> 2.3 编写执行脚本</h3><p><code>vim /usr/local/inotify.sh</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
HOST=192.168.162.119
SRC=/var/lib/jenkins/workspace
DEST=jenkinsbackup
USER=rsync_backup
RSYNC_PASSFILE=/etc/rsync.password
INOTIFY_HMOE=/usr/local/inotify

if [ ! -e &quot;\${SRC}&quot; ] \\
  || [ ! -e &quot;\${RSYNC_PASSFILE}&quot; ] \\
  || [ ! -e &quot;\${INOTIFY_HMOE}/bin/inotifywait&quot; ] \\
  || [ ! -e &quot;/usr/bin/rsync&quot; ]; then
  echo &quot;Check File and Folder&quot;
  exit 1
fi

\${INOTIFY_HMOE}/bin/inotifywait -mrq --timefmt &#39;%d/%m/%y %H:%M&#39; \\
  --format &#39;%T %w%f&#39; -e close_write,delete,create,attrib \${SRC} \\
  | while read file; do
  cd \${SRC}
  rsync -aruz -R --delete ./  --timeout=100 \${USER}@\${HOST}::\${DEST} \\
    --password-file=\${RSYNC_PASSFILE} &gt;/dev/null 2&gt;&amp;1
done
exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-将脚本加入后台执行" tabindex="-1"><a class="header-anchor" href="#_2-4-将脚本加入后台执行" aria-hidden="true">#</a> 2.4 将脚本加入后台执行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># sh inotify.sh &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>主要参考链接：https://www.cnblogs.com/jefflee168/p/6795201.html</p><p>补充链接：https://www.cnblogs.com/clsn/p/7707822.html</p></blockquote>`,25),r=[d];function l(c,t){return i(),n("div",null,r)}const u=e(a,[["render",l],["__file","rsync_inotify实现实时同步.html.vue"]]);export{u as default};
