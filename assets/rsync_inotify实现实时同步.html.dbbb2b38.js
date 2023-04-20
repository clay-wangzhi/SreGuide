import{_ as n,e as s}from"./app.37ca1d6f.js";const e={},a=s(`<p>\u7531\u4E8E\u6211\u7684<code>jenkins</code>\u548C<code>ansible</code>\u6CA1\u6709\u5B89\u88C5\u5728\u4E00\u53F0\u4E3B\u673A\u4E0A\uFF0C\u6240\u4EE5\uFF0C\u73B0\u5728\u5229\u7528<code>rsync+inotify</code>\u5B9E\u73B0<code>jenkins</code>\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u540C\u6B65\u5230<code>ansible</code>\u4E3B\u673A\u4E0A</p><p>\u73AF\u5883\u5982\u4E0B\uFF1A</p><p>inotify-master IP :192.168.162.175</p><p>inotify-slave IP:192.168.162.119</p><h2 id="_1-inotify-slave\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_1-inotify-slave\u90E8\u7F72" aria-hidden="true">#</a> 1 inotify slave\u90E8\u7F72</h2><h3 id="_1-1-\u5B89\u88C5rsync" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B89\u88C5rsync" aria-hidden="true">#</a> 1.1 \u5B89\u88C5rsync</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install rsync \u2013y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-2-\u6DFB\u52A0\u7528\u6237\u548C\u6A21\u5757\u76EE\u5F55-\u5E76\u66F4\u6539\u7528\u6237\u548C\u7EC4" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6DFB\u52A0\u7528\u6237\u548C\u6A21\u5757\u76EE\u5F55-\u5E76\u66F4\u6539\u7528\u6237\u548C\u7EC4" aria-hidden="true">#</a> 1.2 \u6DFB\u52A0\u7528\u6237\u548C\u6A21\u5757\u76EE\u5F55\uFF0C\u5E76\u66F4\u6539\u7528\u6237\u548C\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>useradd rsync \u2013s /sbin/nologin \u2013M
mkdir -p /var/lib/jenkins/workspace
chown rsync.rsync /var/lib/jenkins/workspace
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-3-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6-etc-rsyncd-conf" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6-etc-rsyncd-conf" aria-hidden="true">#</a> 1.3 \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6<code>/etc/rsyncd.conf</code></h3><p>\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># egrep -v &quot;^#|^$&quot; /etc/rsyncd.conf
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_1-4-\u914D\u7F6E\u865A\u62DF\u7528\u6237\u7684\u5BC6\u7801\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-4-\u914D\u7F6E\u865A\u62DF\u7528\u6237\u7684\u5BC6\u7801\u6587\u4EF6" aria-hidden="true">#</a> 1.4 \u914D\u7F6E\u865A\u62DF\u7528\u6237\u7684\u5BC6\u7801\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat rsync.password 
rsync_backup:clay123
# chmod 600 /etc/rsync.password 
# rsync --daemon
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2-inotify-master\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_2-inotify-master\u90E8\u7F72" aria-hidden="true">#</a> 2 inotify master\u90E8\u7F72</h2><h3 id="_2-1-\u5B89\u88C5inotify-3-14" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B89\u88C5inotify-3-14" aria-hidden="true">#</a> 2.1 \u5B89\u88C5inotify 3.14</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cd /opt
# wget http://github.com/downloads/rvoicilas/inotify-tools/inotify-tools-3.14.tar.gz
# tar zxf inotify-tools-3.14.tar.gz
# cd inotify-tools-3.14
# ./configure --prefix=/usr/local/inotify
# make &amp;&amp; sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-2-\u521B\u5EFArsync\u670D\u52A1\u7684\u5BC6\u7801\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-\u521B\u5EFArsync\u670D\u52A1\u7684\u5BC6\u7801\u6587\u4EF6" aria-hidden="true">#</a> 2.2 \u521B\u5EFArsync\u670D\u52A1\u7684\u5BC6\u7801\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /etc/rsync.password 
clay123
# chmod 600 /etc/rsync.password
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-3-\u7F16\u5199\u6267\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_2-3-\u7F16\u5199\u6267\u884C\u811A\u672C" aria-hidden="true">#</a> 2.3 \u7F16\u5199\u6267\u884C\u811A\u672C</h3><p><code>vim /usr/local/inotify.sh</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_2-4-\u5C06\u811A\u672C\u52A0\u5165\u540E\u53F0\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5C06\u811A\u672C\u52A0\u5165\u540E\u53F0\u6267\u884C" aria-hidden="true">#</a> 2.4 \u5C06\u811A\u672C\u52A0\u5165\u540E\u53F0\u6267\u884C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># sh inotify.sh &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u4E3B\u8981\u53C2\u8003\u94FE\u63A5\uFF1Ahttps://www.cnblogs.com/jefflee168/p/6795201.html</p><p>\u8865\u5145\u94FE\u63A5\uFF1Ahttps://www.cnblogs.com/clsn/p/7707822.html</p></blockquote>`,25);function r(i,l){return a}var t=n(e,[["render",r],["__file","rsync+inotify\u5B9E\u73B0\u5B9E\u65F6\u540C\u6B65.html.vue"]]);export{t as default};
