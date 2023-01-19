import{_ as r,r as l,c as i,a as e,b as n,F as t,e as c,d as a,o as p}from"./app.be088d1f.js";const d={},b=c(`<h1 id="redis5-0-4\u96C6\u7FA4\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#redis5-0-4\u96C6\u7FA4\u642D\u5EFA" aria-hidden="true">#</a> redis5.0.4\u96C6\u7FA4\u642D\u5EFA</h1><h3 id="redis5-0\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#redis5-0\u65B0\u7279\u6027" aria-hidden="true">#</a> redis5.0\u65B0\u7279\u6027</h3><p>Redis 5\u4E3B\u8981\u4E13\u6CE8\u4E8E\u51E0\u4E2A\u91CD\u8981\u529F\u80FD\u3002\u76F8\u6BD4\u4E4B\u4E0BRedis 4\u975E\u5E38\u975E\u5E38\u4E13\u6CE8\u4E8E\u64CD\u4F5C\u7C7B\u578B\uFF0CRedis 5\u7684\u53D8\u5316\u5927\u591A\u662F\u9762\u5411\u7528\u6237\u7684\u3002\u5373\u5728\u73B0\u6709\u7684\u57FA\u7840\u4E0A\u589E\u52A0\u65B0\u7684\u6570\u636E\u7C7B\u578B\u548C\u64CD\u4F5C\u7C7B\u578B\u3002\u4EE5\u4E0B\u662F\u6B64\u7248\u672C\u7684\u4E3B\u8981\u529F\u80FD\uFF1A</p><ol><li>\u65B0\u7684Stream\u6570\u636E\u7C7B\u578B\u3002[1]</li><li>\u65B0\u7684Redis\u6A21\u5757API\uFF1ATimers and Cluster API\u3002</li><li>RDB\u73B0\u5728\u5B58\u50A8LFU\u548CLRU\u4FE1\u606F\u3002</li><li>\u96C6\u7FA4\u7BA1\u7406\u5668\u4ECERuby\uFF08redis-trib.rb\uFF09\u79FB\u690D\u5230C\u4EE3\u7801\u3002\u53EF\u4EE5\u5728redis-cli\u4E2D\u3002\u67E5\u770Bredis-cli \u2014cluster help\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002</li><li>\u65B0sorted set\u547D\u4EE4\uFF1AZPOPMIN / MAX\u548C\u963B\u585E\u53D8\u91CF\u3002</li><li>\u4E3B\u52A8\u788E\u7247\u6574\u7406V2\u3002</li><li>\u589E\u5F3AHyperLogLog\u5B9E\u73B0\u3002</li><li>\u66F4\u597D\u7684\u5185\u5B58\u7EDF\u8BA1\u62A5\u544A\u3002</li><li>\u8BB8\u591A\u5E26\u6709\u5B50\u547D\u4EE4\u7684\u547D\u4EE4\u73B0\u5728\u90FD\u6709\u4E00\u4E2AHELP\u5B50\u547D\u4EE4\u3002</li><li>\u5BA2\u6237\u7ECF\u5E38\u8FDE\u63A5\u548C\u65AD\u5F00\u8FDE\u63A5\u65F6\u6027\u80FD\u66F4\u597D\u3002</li><li>\u9519\u8BEF\u4FEE\u590D\u548C\u6539\u8FDB\u3002</li><li>Jemalloc\u5347\u7EA7\u52305.1\u7248</li></ol><p>Redis 4.0\u5927\u591A\u662F5.0\u7684\u4E25\u683C\u5B50\u96C6\uFF0C\u5E94\u7528\u7A0B\u5E8F\u4ECE4.0\u5347\u7EA7\u52305.0\u901A\u5E38\u4E0D\u4F1A\u78B0\u89C1\u95EE\u9898</p><h3 id="\u96C6\u7FA4\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u5B89\u88C5" aria-hidden="true">#</a> \u96C6\u7FA4\u5B89\u88C5</h3><h4 id="\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a> \u4E0B\u8F7D</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -pv /usr/local/software
cd /usr/local/software
wget http://download.redis.io/releases/redis-5.0.4.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u89E3\u538B\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u89E3\u538B\u7F16\u8BD1" aria-hidden="true">#</a> \u89E3\u538B\u7F16\u8BD1</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -xvf redis-5.0.4.tar.gz -C /usr/local/
cd /usr/local/redis-5.0.4/
make -j 4 &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u4FEE\u6539\u76F8\u5173\u5185\u6838\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u76F8\u5173\u5185\u6838\u53C2\u6570" aria-hidden="true">#</a> \u4FEE\u6539\u76F8\u5173\u5185\u6838\u53C2\u6570</h4><p>\u63D0\u524D\u505A\u597D\u4E0B\u9762\u7684\u51C6\u5907\u64CD\u4F5C\uFF0C\u5426\u5219redis\u65E5\u5FD7\u91CC\u4F1A\u6709\u76F8\u5E94\u62A5\u9519</p><p>\u6253\u5F00<code>/etc/sysctl.conf</code>\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FFD\u52A0\u4E00\u4E0B\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>net.core.somaxconn = 10240
vm.overcommit_memory = 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5237\u65B0\u5185\u53C2\u53C2\u6570\uFF0C\u4F7F\u5176\u751F\u6548</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># echo never &gt; /sys/kernel/mm/transparent_hugepage/enabled
# vim /etc/rc.local
echo never &gt; /sys/kernel/mm/transparent_hugepage/enabled
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># tail -10 /etc/security/limits.conf 
#@faculty        soft    nproc           20
#@faculty        hard    nproc           50
#ftp             hard    nproc           0
#@student        -       maxlogins       4

# End of file
* hard nofile 65535
* soft nofile 65535
* soft nproc 65535
* hard nproc 65535

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h4><p>\u5C06\u914D\u7F6E\u6587\u4EF6\u4FEE\u6539\u4E3A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># egrep -v &quot;^#|^$&quot; /usr/local/redis-5.0.4/redis.conf 
bind 0.0.0.0  #\u5B89\u5168\u8D77\u89C1\uFF0C\u5C3D\u91CF\u7528\u672C\u673Aip\u5730\u5740
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><blockquote><p>\u7EBF\u4E0A\u6700\u597D\u5F00\u542F\u5BC6\u7801\u8BA4\u8BC1</p><p>databases \u6700\u597D\u6539\u4E00\u4E0B</p></blockquote><h4 id="\u5F00\u542F\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u9632\u706B\u5899" aria-hidden="true">#</a> \u5F00\u542F\u9632\u706B\u5899</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /etc/sysconfig/iptables
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><hr><p>\u4EE5\u4E0A\u6B65\u9AA4\u5747\u57286\u53F0\u4E3B\u673A\u4E0A\u6267\u884C</p><h4 id="\u521D\u59CB\u5316redis\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316redis\u96C6\u7FA4" aria-hidden="true">#</a> \u521D\u59CB\u5316redis\u96C6\u7FA4</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster create 192.168.165.23:6379 192.168.165.24:6379 192.168.165.25:6379 192.168.165.26:6379 192.168.165.27:6379 192.168.165.28:6379 --cluster-replicas 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770Bredis\u96C6\u7FA4\u72B6\u6001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># redis-cli 
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u76F8\u5173\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u64CD\u4F5C" aria-hidden="true">#</a> \u76F8\u5173\u64CD\u4F5C</h3><h4 id="\u68C0\u67E5\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u96C6\u7FA4" aria-hidden="true">#</a> \u68C0\u67E5\u96C6\u7FA4</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster check 192.168.165.23:6379
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u96C6\u7FA4key\u3001slot\u3001slave\u5206\u5E03\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster info 192.168.165.23:6379
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u5728\u7EBF\u8FC1\u79FB\u69FD" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EBF\u8FC1\u79FB\u69FD" aria-hidden="true">#</a> \u5728\u7EBF\u8FC1\u79FB\u69FD</h4><ul><li>\u65B9\u5F0F1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster reshard 192.168.165.23:6379
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9009\u62E9\u4E00\u4E2A\u76EE\u6807\u8282\u70B9\u7684id</p><p>\u6E90\u9009\u62E9all</p><ul><li>\u65B9\u5F0F2</li></ul><p><strong>\u5C06\u6240\u6709master\u4E0A\u7684slot\u91CD\u65B0\u5206\u914D\u5230\u4E00\u4E2Amaster\u4E0A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster reshard --cluster-from 3a32aec6092e6a22a45c64fa8281e3893e1175a2 --cluster-to f760e5d366738b28df034512faf1f5ac4466b09e --cluster-slots 5461 --cluster-yes 192.168.165.24:6379
redis-cli --cluster reshard --cluster-from 9fa3ee8869d2d21258e0f2d2b705b787d0342d74 --cluster-to f760e5d366738b28df034512faf1f5ac4466b09e --cluster-slots 5462 --cluster-yes 192.168.165.24:6379
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u5E73\u8861\u5404\u8282\u70B9\u69FD\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E73\u8861\u5404\u8282\u70B9\u69FD\u6570\u91CF" aria-hidden="true">#</a> \u5E73\u8861\u5404\u8282\u70B9\u69FD\u6570\u91CF</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster rebalance --cluster-threshold 192.168.165.24:6379
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u5220\u9664\u96C6\u7FA4\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u96C6\u7FA4\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u96C6\u7FA4\u8282\u70B9</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster del-node 192.168.165.24:6379 f760e5d366738b28df034512faf1f5ac4466b09e
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\u5FC5\u987B\u662F\u6CA1\u6709\u69FD\u7684\u8282\u70B9\uFF0C\u6240\u4EE5\u5FC5\u987B\u5148\u79FB\u9664\u69FD\uFF0C\u5426\u5219\u62A5\u9519 \u88AB\u5220\u9664\u7684node\u91CD\u542F\u540E\uFF0C\u4F9D\u7136\u8BB0\u5F97\u96C6\u7FA4\u4E2D\u7684\u5176\u5B83\u8282\u70B9\uFF0C\u8FD9\u662F\u9700\u8981\u6267\u884Ccluster forget nodeid\u6765\u5FD8\u8BB0\u5176\u5B83\u8282\u70B9</p><h4 id="\u6DFB\u52A0\u96C6\u7FA4\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u96C6\u7FA4\u8282\u70B9" aria-hidden="true">#</a> \u6DFB\u52A0\u96C6\u7FA4\u8282\u70B9</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster add-node 192.168.165.30:6379 192.168.165.31:6379
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u5C06\u96C6\u7FA4\u5916\u90E8redis\u5B9E\u4F8B\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u96C6\u7FA4\u4E2D\u53BB" tabindex="-1"><a class="header-anchor" href="#\u5C06\u96C6\u7FA4\u5916\u90E8redis\u5B9E\u4F8B\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u96C6\u7FA4\u4E2D\u53BB" aria-hidden="true">#</a> \u5C06\u96C6\u7FA4\u5916\u90E8redis\u5B9E\u4F8B\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u96C6\u7FA4\u4E2D\u53BB</h4><blockquote><p>\u5728redis5\u4E2D redis-cli\u5DF2\u7ECF\u96C6\u6210\u96C6\u7FA4\u64CD\u4F5C\u7684\u547D\u4EE4\uFF0C \u6839\u672C\u4E0D\u7528\u628A\u5206\u7247\u8FC1\u79FB\u5230\u4E00\u4E2A\u8282\u70B9\u518D\u64CD\u4F5C</p></blockquote><ol><li>\u628A\u5355\u5B9E\u4F8B\u7684\u5BC6\u7801\u6E05\u9664</li></ol><p>\u628ARedis\u5355\u5B9E\u4F8B\u53CA\u96C6\u7FA4\u6240\u6709\u8282\u70B9\u7684\u5BC6\u7801\u6E05\u7406\u6389\uFF0C\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli -h [ip] -p [port] -a [pwd]
config set requirepass &quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u6267\u884C\u96C6\u7FA4\u5BFC\u5165\u547D\u4EE4\u3010redis-cli -- cluster import\u3011</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli -h 192.168.165.23 -p 6379 --cluster import 192.168.165.23:6379 --cluster-from 192.168.1.46:6379 --cluster-copy --cluster-replace
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Cluster-from\u540E\u9762\u8DDF\u5916\u90E8redis\u7684ip\u548Cport \u5982\u679C\u53EA\u4F7F\u7528cluster-copy\uFF0C\u5219\u8981\u5BFC\u5165\u96C6\u7FA4\u4E2D\u7684key\u4E0D\u80FD\u5728\uFF0C\u5426\u5219\u5982\u4E0B\uFF1A \u5982\u679C\u96C6\u7FA4\u4E2D\u5DF2\u6709\u540C\u6837\u7684key\uFF0C\u5982\u679C\u9700\u8981\u66FF\u6362\uFF0C\u53EF\u4EE5cluster-copy\u548Ccluster-replace\u8054\u7528\uFF0C\u8FD9\u6837\u96C6\u7FA4\u4E2D\u7684key\u5C31\u4F1A\u88AB\u66FF\u6362\u4E3A\u5916\u90E8\u7684</p><ol start="3"><li>\u8BBE\u7F6E\u56DE\u539F\u6765\u7684\u5BC6\u7801</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>config set requirepass \u539F\u5BC6\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6CE8\u610F\uFF0C\u5982\u679C\u4E0D\u6E05\u695A\u5BC6\u7801\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A ERR Target instance replied with error: NOAUTH Authentication required.</li></ul><h4 id="\u6E05\u7A7A\u96C6\u7FA4\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7A7A\u96C6\u7FA4\u6570\u636E" aria-hidden="true">#</a> \u6E05\u7A7A\u96C6\u7FA4\u6570\u636E</h4><p>redis\u4E2D\u6570\u636E\u5B58\u50A8\u6BD4\u8F83\u591A\uFF0C\u9700\u8981\u8FDB\u884C\u6E05\u7406\u3002\u6211\u4EEC\u9996\u5148\u7528\u547D\u4EE4\u67E5\u770B\u96C6\u7FA4\u7684\u4E3B\u4ECE\u60C5\u51B5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli --cluster check 192.168.165.23:6379
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FDE\u63A5\u5230\u6BCF\u4E2Amaster \u8282\u70B9\u4E0A\u8FDB\u884C\u6570\u636E\u5220\u9664</p><p>\u8FDE\u63A5\u5230\u6570\u636E\u5E93\u4E2D\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flushall
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p>`,68),u={href:"https://yangxx.net/?p=3453",target:"_blank",rel:"noopener noreferrer"},o=a("https://yangxx.net/?p=3453"),m={href:"https://www.jianshu.com/p/7a28d3c92dce",target:"_blank",rel:"noopener noreferrer"},h=a("https://www.jianshu.com/p/7a28d3c92dce"),g={href:"https://blog.csdn.net/luoww1/article/details/88425263",target:"_blank",rel:"noopener noreferrer"},x=a("https://blog.csdn.net/luoww1/article/details/88425263"),v={href:"https://www.cnblogs.com/kevingrace/p/9844310.html",target:"_blank",rel:"noopener noreferrer"},f=a("https://www.cnblogs.com/kevingrace/p/9844310.html");function _(y,k){const s=l("ExternalLinkIcon");return p(),i(t,null,[b,e("blockquote",null,[e("p",null,[e("a",u,[o,n(s)])]),e("p",null,[e("a",m,[h,n(s)])]),e("p",null,[e("a",g,[x,n(s)])]),e("p",null,[e("a",v,[f,n(s)])])])],64)}var T=r(d,[["render",_],["__file","index.html.vue"]]);export{T as default};
