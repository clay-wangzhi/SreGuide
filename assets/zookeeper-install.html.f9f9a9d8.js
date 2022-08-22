import{_ as e,e as n}from"./app.200bae49.js";const s={},a=n(`<h1 id="zookeeper3-4-14\u96C6\u7FA4\u642D\u5EFA\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#zookeeper3-4-14\u96C6\u7FA4\u642D\u5EFA\u6B65\u9AA4" aria-hidden="true">#</a> zookeeper3.4.14\u96C6\u7FA4\u642D\u5EFA\u6B65\u9AA4</h1><h3 id="\u4E0B\u8F7D\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u89E3\u538B" aria-hidden="true">#</a> \u4E0B\u8F7D\u89E3\u538B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt
wget https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz
tar -xvf zookeeper-3.4.14.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u4FEE\u6539\u76F8\u5173\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u76F8\u5173\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /var/lib/zookeeper/data
mkdir -p /var/lib/zookeeper/log
mkdir -p /var/log/zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u751F\u4EA7myid\u6587\u4EF6\uFF08\u4E09\u53F0\u4E3B\u673A\u5206\u522B\u6267\u884C\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo 29 &gt; /var/lib/zookeeper/data/myid
echo 30 &gt; /var/lib/zookeeper/data/myid
echo 31 &gt; /var/lib/zookeeper/data/myid
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4FEE\u6539zoo.cfg\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/zookeeper-3.4.14/conf
cp zoo_sample.cfg zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># egrep -v &quot;^#|^$&quot; zoo.cfg 
tickTime=2000
initLimit=10
syncLimit=5
dataDir=/var/lib/zookeeper/data
dataLogDir=/var/lib/zookeeper/log
clientPort=2181
server.29=192.168.165.29:2888:3888
server.30=192.168.165.30:2888:3888
server.31=192.168.165.31:2888:3888
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4FEE\u6539/zkEnv.sh\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/zookeeper-3.4.14/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u627E\u5230 ZOO_LOG_DIR=&quot;.&quot; \u4E00\u884C\uFF0C\u6362\u6210\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vim zkEnv.sh
ZOO_LOG_DIR=&quot;/var/log/zookeeper&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4FEE\u6539\u9632\u706B\u5899\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u9632\u706B\u5899\u89C4\u5219" aria-hidden="true">#</a> \u4FEE\u6539\u9632\u706B\u5899\u89C4\u5219</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /etc/sysconfig/iptables
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 2181 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 2888 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 3888 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT

# systemctl restart iptables.service 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u542F\u52A8\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u96C6\u7FA4" aria-hidden="true">#</a> \u542F\u52A8\u96C6\u7FA4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/opt/zookeeper-3.4.14/bin/zkServer.sh start
/opt/zookeeper-3.4.14/bin/zkServer.sh status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u901A\u8FC7<code>nc</code>\u65B9\u5F0F\u9A8C\u8BC1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install nc
echo stat | nc 192.168.165.46 2181
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u901A\u8FC7\u56DB\u5B57\u547D\u4EE4<code>srvr</code>\u65B9\u5F0F\u9A8C\u8BC1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># telnet 192.168.165.45 2181
Trying 192.168.165.45...
Connected to 192.168.165.45.
Escape character is &#39;^]&#39;.
srvr
Zookeeper version: 3.4.14-4c25d480e66aadd371de8bd2fd8da255ac140bcf, built on 03/06/2019 16:18 GMT
Latency min/avg/max: 0/0/0
Received: 2
Sent: 1
Connections: 1
Outstanding: 0
Zxid: 0x0
Mode: follower
Node count: 4
Connection closed by foreign host.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,22);function r(l,i){return a}var p=e(s,[["render",r],["__file","zookeeper-install.html.vue"]]);export{p as default};
