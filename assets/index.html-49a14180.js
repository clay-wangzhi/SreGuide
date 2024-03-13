import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as r,a as e,b as s,d as n,e as t}from"./app-54f39dde.js";const c={},v=t(`<h1 id="redis5-0-4集群搭建" tabindex="-1"><a class="header-anchor" href="#redis5-0-4集群搭建" aria-hidden="true">#</a> redis5.0.4集群搭建</h1><h3 id="redis5-0新特性" tabindex="-1"><a class="header-anchor" href="#redis5-0新特性" aria-hidden="true">#</a> redis5.0新特性</h3><p>Redis 5主要专注于几个重要功能。相比之下Redis 4非常非常专注于操作类型，Redis 5的变化大多是面向用户的。即在现有的基础上增加新的数据类型和操作类型。以下是此版本的主要功能：</p><ol><li>新的Stream数据类型。[1]</li><li>新的Redis模块API：Timers and Cluster API。</li><li>RDB现在存储LFU和LRU信息。</li><li>集群管理器从Ruby（redis-trib.rb）移植到C代码。可以在redis-cli中。查看redis-cli —cluster help了解更多信息。</li><li>新sorted set命令：ZPOPMIN / MAX和阻塞变量。</li><li>主动碎片整理V2。</li><li>增强HyperLogLog实现。</li><li>更好的内存统计报告。</li><li>许多带有子命令的命令现在都有一个HELP子命令。</li><li>客户经常连接和断开连接时性能更好。</li><li>错误修复和改进。</li><li>Jemalloc升级到5.1版</li></ol><p>Redis 4.0大多是5.0的严格子集，应用程序从4.0升级到5.0通常不会碰见问题</p><h3 id="集群安装" tabindex="-1"><a class="header-anchor" href="#集群安装" aria-hidden="true">#</a> 集群安装</h3><h4 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -pv /usr/local/software
cd /usr/local/software
wget http://download.redis.io/releases/redis-5.0.4.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解压编译" tabindex="-1"><a class="header-anchor" href="#解压编译" aria-hidden="true">#</a> 解压编译</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -xvf redis-5.0.4.tar.gz -C /usr/local/
cd /usr/local/redis-5.0.4/
make -j 4 &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改相关内核参数" tabindex="-1"><a class="header-anchor" href="#修改相关内核参数" aria-hidden="true">#</a> 修改相关内核参数</h4><p>提前做好下面的准备操作，否则redis日志里会有相应报错</p><p>打开<code>/etc/sysctl.conf</code>配置文件，追加一下参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>net.core.somaxconn = 10240
vm.overcommit_memory = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新内参参数，使其生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># echo never &gt; /sys/kernel/mm/transparent_hugepage/enabled
# vim /etc/rc.local
echo never &gt; /sys/kernel/mm/transparent_hugepage/enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># tail -10 /etc/security/limits.conf 
#@faculty        soft    nproc           20
#@faculty        hard    nproc           50
#ftp             hard    nproc           0
#@student        -       maxlogins       4

# End of file
* hard nofile 65535
* soft nofile 65535
* soft nproc 65535
* hard nproc 65535

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h4><p>将配置文件修改为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># egrep -v &quot;^#|^$&quot; /usr/local/redis-5.0.4/redis.conf 
bind 0.0.0.0  #安全起见，尽量用本机ip地址
protected-mode yes
port 6379
tcp-backlog 511
timeout 0
tcp-keepalive 0
daemonize yes
supervised no
pidfile /var/run/redis_6379.pid
loglevel notice
logfile &quot;/usr/local/redis-5.0.4/log/redis.log&quot;
databases 16 
always-show-logo yes
save 900 1
save 300 10
save 60 10000
stop-writes-on-bgsave-error yes
rdbcompression yes
rdbchecksum yes
dbfilename dump.rdb
dir /usr/local/redis-5.0.4/data
replica-serve-stale-data yes
replica-read-only yes
repl-diskless-sync no
repl-diskless-sync-delay 5
repl-disable-tcp-nodelay no
replica-priority 100
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no
appendonly no
appendfilename &quot;appendonly.aof&quot;
appendfsync everysec
no-appendfsync-on-rewrite no
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb
aof-load-truncated yes
aof-use-rdb-preamble yes
lua-time-limit 5000
cluster-enabled yes
cluster-config-file nodes-6379.conf
slowlog-log-slower-than 10000
slowlog-max-len 128
latency-monitor-threshold 0
notify-keyspace-events Ex
hash-max-ziplist-entries 512
hash-max-ziplist-value 64
list-max-ziplist-size -2
list-compress-depth 0
set-max-intset-entries 512
zset-max-ziplist-entries 128
zset-max-ziplist-value 64
hll-sparse-max-bytes 3000
stream-node-max-bytes 4096
stream-node-max-entries 100
activerehashing yes
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit replica 256mb 64mb 60
client-output-buffer-limit pubsub 32mb 8mb 60
hz 10
dynamic-hz yes
aof-rewrite-incremental-fsync yes
rdb-save-incremental-fsync yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>线上最好开启密码认证</p><p>databases 最好改一下</p></blockquote><h4 id="开启防火墙" tabindex="-1"><a class="header-anchor" href="#开启防火墙" aria-hidden="true">#</a> 开启防火墙</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat /etc/sysconfig/iptables
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 6379 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 16379 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT

# systemctl restart iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>以上步骤均在6台主机上执行</p><h4 id="初始化redis集群" tabindex="-1"><a class="header-anchor" href="#初始化redis集群" aria-hidden="true">#</a> 初始化redis集群</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli --cluster create 192.168.165.23:6379 192.168.165.24:6379 192.168.165.25:6379 192.168.165.26:6379 192.168.165.27:6379 192.168.165.28:6379 --cluster-replicas 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看redis集群状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># redis-cli 
127.0.0.1:6379&gt; CLUSTER INFO
cluster_state:ok
cluster_slots_assigned:16384
cluster_slots_ok:16384
cluster_slots_pfail:0
cluster_slots_fail:0
cluster_known_nodes:6
cluster_size:3
cluster_current_epoch:6
cluster_my_epoch:1
cluster_stats_messages_ping_sent:1263
cluster_stats_messages_pong_sent:1190
cluster_stats_messages_sent:2453
cluster_stats_messages_ping_received:1185
cluster_stats_messages_pong_received:1263
cluster_stats_messages_meet_received:5
cluster_stats_messages_received:2453

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关操作" tabindex="-1"><a class="header-anchor" href="#相关操作" aria-hidden="true">#</a> 相关操作</h3><h4 id="检查集群" tabindex="-1"><a class="header-anchor" href="#检查集群" aria-hidden="true">#</a> 检查集群</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli --cluster check 192.168.165.23:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看集群key、slot、slave分布信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli --cluster info 192.168.165.23:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="在线迁移槽" tabindex="-1"><a class="header-anchor" href="#在线迁移槽" aria-hidden="true">#</a> 在线迁移槽</h4><ul><li>方式1</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli --cluster reshard 192.168.165.23:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选择一个目标节点的id</p><p>源选择all</p><ul><li>方式2</li></ul><p><strong>将所有master上的slot重新分配到一个master上</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli --cluster reshard --cluster-from 3a32aec6092e6a22a45c64fa8281e3893e1175a2 --cluster-to f760e5d366738b28df034512faf1f5ac4466b09e --cluster-slots 5461 --cluster-yes 192.168.165.24:6379
redis-cli --cluster reshard --cluster-from 9fa3ee8869d2d21258e0f2d2b705b787d0342d74 --cluster-to f760e5d366738b28df034512faf1f5ac4466b09e --cluster-slots 5462 --cluster-yes 192.168.165.24:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="平衡各节点槽数量" tabindex="-1"><a class="header-anchor" href="#平衡各节点槽数量" aria-hidden="true">#</a> 平衡各节点槽数量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli --cluster rebalance --cluster-threshold 192.168.165.24:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除集群节点" tabindex="-1"><a class="header-anchor" href="#删除集群节点" aria-hidden="true">#</a> 删除集群节点</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli --cluster del-node 192.168.165.24:6379 f760e5d366738b28df034512faf1f5ac4466b09e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里必须是没有槽的节点，所以必须先移除槽，否则报错 被删除的node重启后，依然记得集群中的其它节点，这是需要执行cluster forget nodeid来忘记其它节点</p><h4 id="添加集群节点" tabindex="-1"><a class="header-anchor" href="#添加集群节点" aria-hidden="true">#</a> 添加集群节点</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli --cluster add-node 192.168.165.30:6379 192.168.165.31:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="将集群外部redis实例中的数据导入到集群中去" tabindex="-1"><a class="header-anchor" href="#将集群外部redis实例中的数据导入到集群中去" aria-hidden="true">#</a> 将集群外部redis实例中的数据导入到集群中去</h4><blockquote><p>在redis5中 redis-cli已经集成集群操作的命令， 根本不用把分片迁移到一个节点再操作</p></blockquote><ol><li>把单实例的密码清除</li></ol><p>把Redis单实例及集群所有节点的密码清理掉，通过如下方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli -h [ip] -p [port] -a [pwd]
config set requirepass &quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>执行集群导入命令【redis-cli -- cluster import】</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli -h 192.168.165.23 -p 6379 --cluster import 192.168.165.23:6379 --cluster-from 192.168.1.46:6379 --cluster-copy --cluster-replace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Cluster-from后面跟外部redis的ip和port 如果只使用cluster-copy，则要导入集群中的key不能在，否则如下： 如果集群中已有同样的key，如果需要替换，可以cluster-copy和cluster-replace联用，这样集群中的key就会被替换为外部的</p><ol start="3"><li>设置回原来的密码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config set requirepass 原密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>注意，如果不清楚密码会报如下错误： ERR Target instance replied with error: NOAUTH Authentication required.</li></ul><h4 id="清空集群数据" tabindex="-1"><a class="header-anchor" href="#清空集群数据" aria-hidden="true">#</a> 清空集群数据</h4><p>redis中数据存储比较多，需要进行清理。我们首先用命令查看集群的主从情况。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli --cluster check 192.168.165.23:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>连接到每个master 节点上进行数据删除</p><p>连接到数据库中，执行如下命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flushall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考链接：</p>`,68),u={href:"https://yangxx.net/?p=3453",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.jianshu.com/p/7a28d3c92dce",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/luoww1/article/details/88425263",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.cnblogs.com/kevingrace/p/9844310.html",target:"_blank",rel:"noopener noreferrer"};function p(h,g){const i=d("ExternalLinkIcon");return l(),r("div",null,[v,e("blockquote",null,[e("p",null,[e("a",u,[s("https://yangxx.net/?p=3453"),n(i)])]),e("p",null,[e("a",o,[s("https://www.jianshu.com/p/7a28d3c92dce"),n(i)])]),e("p",null,[e("a",m,[s("https://blog.csdn.net/luoww1/article/details/88425263"),n(i)])]),e("p",null,[e("a",b,[s("https://www.cnblogs.com/kevingrace/p/9844310.html"),n(i)])])])])}const _=a(c,[["render",p],["__file","index.html.vue"]]);export{_ as default};
