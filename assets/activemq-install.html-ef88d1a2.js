import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,e as a}from"./app-10bfa633.js";const d={},s=a(`<h1 id="activemq5-15-9集群搭建步骤" tabindex="-1"><a class="header-anchor" href="#activemq5-15-9集群搭建步骤" aria-hidden="true">#</a> activemq5.15.9集群搭建步骤</h1><h3 id="下载解压软件" tabindex="-1"><a class="header-anchor" href="#下载解压软件" aria-hidden="true">#</a> 下载解压软件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
wget https://www-eu.apache.org/dist/activemq/5.15.9/apache-activemq-5.15.9-bin.tar.gz
tar -xvf apache-activemq-5.15.9-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改主机名" tabindex="-1"><a class="header-anchor" href="#修改主机名" aria-hidden="true">#</a> 修改主机名</h3><p>三台主机三分别操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hostnamectl set-hostname activemq01.csp
hostnamectl set-hostname activemq02.csp
hostnamectl set-hostname activemq03.csp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意主机名的设置，不能带下划线，否则会报错</p></blockquote><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/apache-activemq-5.15.9/conf/
vim activemq.xml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改以下文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brokerName=&quot;activemqCluster&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>brokaerName三台主机名称必须一致</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;persistenceAdapter&gt;
            &lt;!--&lt;kahaDB directory=&quot;\${activemq.data}/kahadb&quot;/&gt;--&gt;
            &lt;replicatedLevelDB
            directory=&quot;\${activemq.data}/leveldb&quot;
            replicas=&quot;3&quot;
            bind=&quot;tcp://0.0.0.0:62222&quot;
            zkAddress=&quot;192.168.165.29:2181,192.168.165.30:2181,192.168.165.31:2181&quot;
            hostname=&quot;192.168.165.33&quot;
            zkPath=&quot;/activemq/leveldb-stores&quot;
            sync=&quot;local_disk&quot;/&gt;
        &lt;/persistenceAdapter&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释掉<code>&lt;kahaDB directory=&quot;\${activemq.data}/kahadb&quot;/&gt;</code>这一行</p><p>新增下面内容</p><p>directory=&quot;\${activemq.data}/leveldb&quot; 集群方式</p><p>replicas=&quot;3&quot; 集群结点个数</p><p>bind activemq集群通信端口</p><p>zkAddress zookeeper集群地址</p><p>hostname 本机IP</p><p>zkPath activemq集群在zookeeper集群交互文件存储位置</p><p>sync：在消息被消费完成前，同步信息所存贮的策略。如果有多种策略用逗号隔开，ActiveMQ会选择较强的策略。而如果有local_mem, local_disk这两种策略的话，那么ActiveMQ则优先选择local_disk策略，存储在本地硬盘。</p><h3 id="开放防火墙端口" tabindex="-1"><a class="header-anchor" href="#开放防火墙端口" aria-hidden="true">#</a> 开放防火墙端口</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat /etc/sysconfig/iptables
*filter
:INPUT ACCEPT [0systemctl restart iptables.service:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 8161 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 61616 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 62222 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT

# systemctl restart iptables.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-停止" tabindex="-1"><a class="header-anchor" href="#启动-停止" aria-hidden="true">#</a> 启动&amp;停止</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/opt/apache-activemq-5.15.9/bin/activemq start
/opt/apache-activemq-5.15.9/bin/activemq stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证activemq集群高可用" tabindex="-1"><a class="header-anchor" href="#验证activemq集群高可用" aria-hidden="true">#</a> 验证ActiveMQ集群高可用</h3><p>要验证ActiveMQ集群的高可用，我们只需要关闭能访问http://ip:8161/admin/的ActiveMQ服务，然后访问其他两个。</p><p>如果其中有一个能访问，那就说明ActiveMQ+ZooKeeper集群高可用已经配置成功</p><p>当一个ActiveMQ节点挂掉，或者一个ZooKeeper节点挂掉，ActiveMQ服务依然正常运转。如果仅剩一个ActiveMQ节点，因为不能选举Master，ActiveMQ不能正常运转；同样的，如果ZooKeeper仅剩一个节点活动，不管ActiveMQ各节点是否存活，ActiveMQ也不能正常提供服务。 （ActiveMQ集群的高可用，依赖于ZooKeeper集群的高可用。）</p>`,30),n=[s];function c(l,r){return i(),t("div",null,n)}const m=e(d,[["render",c],["__file","activemq-install.html.vue"]]);export{m as default};
