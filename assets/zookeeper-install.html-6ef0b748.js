import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as d}from"./app-de4b287a.js";const a={},s=d(`<h1 id="zookeeper3-4-14集群搭建步骤" tabindex="-1"><a class="header-anchor" href="#zookeeper3-4-14集群搭建步骤" aria-hidden="true">#</a> zookeeper3.4.14集群搭建步骤</h1><h3 id="下载解压" tabindex="-1"><a class="header-anchor" href="#下载解压" aria-hidden="true">#</a> 下载解压</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
wget https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz
tar -xvf zookeeper-3.4.14.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改相关配置" tabindex="-1"><a class="header-anchor" href="#修改相关配置" aria-hidden="true">#</a> 修改相关配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /var/lib/zookeeper/data
mkdir -p /var/lib/zookeeper/log
mkdir -p /var/log/zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生产myid文件（三台主机分别执行）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo 29 &gt; /var/lib/zookeeper/data/myid
echo 30 &gt; /var/lib/zookeeper/data/myid
echo 31 &gt; /var/lib/zookeeper/data/myid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改zoo.cfg文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/zookeeper-3.4.14/conf
cp zoo_sample.cfg zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># egrep -v &quot;^#|^$&quot; zoo.cfg 
tickTime=2000
initLimit=10
syncLimit=5
dataDir=/var/lib/zookeeper/data
dataLogDir=/var/lib/zookeeper/log
clientPort=2181
server.29=192.168.165.29:2888:3888
server.30=192.168.165.30:2888:3888
server.31=192.168.165.31:2888:3888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改/zkEnv.sh文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/zookeeper-3.4.14/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到 ZOO_LOG_DIR=&quot;.&quot; 一行，换成如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vim zkEnv.sh
ZOO_LOG_DIR=&quot;/var/log/zookeeper&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改防火墙规则" tabindex="-1"><a class="header-anchor" href="#修改防火墙规则" aria-hidden="true">#</a> 修改防火墙规则</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat /etc/sysconfig/iptables
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动集群" tabindex="-1"><a class="header-anchor" href="#启动集群" aria-hidden="true">#</a> 启动集群</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/opt/zookeeper-3.4.14/bin/zkServer.sh start
/opt/zookeeper-3.4.14/bin/zkServer.sh status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>nc</code>方式验证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install nc
echo stat | nc 192.168.165.46 2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过四字命令<code>srvr</code>方式验证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># telnet 192.168.165.45 2181
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),r=[s];function t(l,c){return i(),n("div",null,r)}const u=e(a,[["render",t],["__file","zookeeper-install.html.vue"]]);export{u as default};
