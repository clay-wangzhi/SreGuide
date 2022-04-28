import{_ as n,e as s}from"./app.af130410.js";const a={},e=s(`<h1 id="centos7\u5B89\u88C5redis-5-0-0\u4E3B\u4ECE" tabindex="-1"><a class="header-anchor" href="#centos7\u5B89\u88C5redis-5-0-0\u4E3B\u4ECE" aria-hidden="true">#</a> centos7\u5B89\u88C5redis-5.0.0\u4E3B\u4ECE</h1><h2 id="\u4E0B\u8F7Dredis-5-0-0\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7Dredis-5-0-0\u5B89\u88C5\u5305" aria-hidden="true">#</a> \u4E0B\u8F7Dredis-5.0.0\u5B89\u88C5\u5305</h2><p>\u4ECE\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt
wget http://download.redis.io/releases/redis-5.0.0.tar.gz
tar -xvf redis-5.0.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u7F16\u8BD1\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5</h2><p>\u5B89\u88C5gcc\u4F9D\u8D56</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install gcc
cd /opt/redis-5.0.0
make -j \`grep processor /proc/cpuinfo | wc -l\`
make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u8F91\u914D\u7F6E\u6587\u4EF6</h2><h3 id="\u4E3B\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u670D\u52A1\u5668" aria-hidden="true">#</a> \u4E3B\u670D\u52A1\u5668</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt
mv redis-5.0.0 redis
cd redis
mkdir {conf,log,data}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>vim conf/redis.conf</code>\u589E\u52A0\u4EE5\u4E0B\u5185\u5BB9</p><p>bind \u4E2D\u7684IP\u5730\u5740\u4E3A\u670D\u52A1\u5668IP\u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>################################## NETWORK #####################################
# \u7ED1\u5B9AIP\u5730\u5740
bind *.*.*.*

# 5.0\u65B0\u589E\u4FDD\u62A4\u6A21\u5F0F
protected-mode yes

# \u8BBE\u7F6E\u542F\u52A8\u7AEF\u53E3
port 6379

# tcp\u6700\u5927\u5E76\u53D1\u76D1\u542C\u6570
tcp-backlog 511

#\u5BA2\u6237\u7AEF\u7A7A\u95F2N\u79D2\u540E\u5173\u95ED\u8FDE\u63A5(0\u7981\u7528)
timeout 0

#\u5411\u5BA2\u6237\u673A\u53D1\u9001TCP ack\u7684\u6C9F\u901A\uFF0C3.2.1\u4EE5\u540E\u9ED8\u8BA4\u4F7F\u7528300s
tcp-keepalive 300

################################# GENERAL #####################################
# \u8BBE\u7F6E\u540E\u53F0\u542F\u52A8
daemonize yes

# \u6CA1\u6709\u76D1\u7763\u4E92\u52A8
supervised no

# pid\u6587\u4EF6\u4F4D\u7F6E
pidfile /var/run/redis_6379.pid

# \u65E5\u5FD7\u7B49\u7EA7
loglevel notice

# \u65E5\u5FD7\u6587\u4EF6\u4F4D\u7F6E
logfile &quot;/opt/redis/log/redis.log&quot;

# \u8BBE\u7F6E\u6570\u636E\u5E93\u7684\u6570\u91CF
databases 16

# \u663E\u793Alogo
always-show-logo yes

################################ SNAPSHOTTING  ################################
# rdb\u901A\u8FC7\u5FEB\u7167\u65B9\u5F0F\u8FDB\u884C\u6301\u4E45\u5316\uFF0C\u6BCF\u4E2A\u6761\u4EF6\u4E4B\u95F4\u662F\u201C\u6216\u201D\u7684\u5173\u7CFB
# 15\u5206\u949F\uFF08900\u79D2\u949F\uFF09\u5185\u81F3\u5C111\u4E2A\u952E\u88AB\u66F4\u6539\u5219\u8FDB\u884C\u5FEB\u7167
save 900 1
# 5\u5206\u949F\uFF08300\u79D2\uFF09\u5185\u81F3\u5C1110\u4E2A\u952E\u88AB\u66F4\u6539\u5219\u8FDB\u884C\u5FEB\u7167
save 300 10
# 1\u5206\u949F\uFF0860\u79D2\uFF09\u5185\u81F3\u5C1110000\u4E2A\u952E\u88AB\u66F4\u6539\u5219\u8FDB\u884C\u5FEB\u7167
save 60 10000

# \u9519\u8BEF\u505C\u6B62\u5199\u5165
stop-writes-on-bgsave-error yes

# \u6570\u636E\u5B58\u50A8\u524D\u8BBE\u7F6E\u5F00\u542F\u538B\u7F29
rdbcompression yes

# \u5BF9rdb\u6570\u636E\u8FDB\u884C\u6821\u9A8C\uFF0C\u8017\u8D39CPU\u8D44\u6E90\uFF0C5.0\u7248\u672C\u4EE5\u540E\u53EF\u4EE5\u7981\u7528
rdbchecksum no

# rdb\u6570\u636E\u8F6C\u5B58\u7684\u6587\u4EF6\u540D\u79F0
dbfilename dump.rdb

# \u6570\u636E\u5B58\u50A8\u76EE\u5F55
dir &quot;/opt/redis/data&quot;

################################# REPLICATION #################################
# \u8BBE\u7F6E\u540C\u6B65\u7684\u4E3B\u8282\u70B9\u5730\u5740
# replicaof IP \u7AEF\u53E3 

# \u4E3B\u4ECE\u540C\u6B65\u8BA4\u8BC1\u5BC6\u7801
masterauth &quot;&quot;

# \u5141\u8BB8\u4ECE\u8282\u70B9\u6B63\u5E38\u54CD\u5E94\u7528\u6237\u7684\u8BF7\u6C42
replica-serve-stale-data yes

# \u4ECE\u8282\u70B9\u8BBE\u7F6E\u4E3A\u53EA\u8BFB
replica-read-only yes

# \u540C\u6B65\u7B56\u7565\u4E3A\u78C1\u76D8\u65B9\u5F0F
repl-diskless-sync no

# socket\u540C\u6B65\u65B9\u5F0F\u7684\u5EF6\u8FDF\u65F6\u95F4
repl-diskless-sync-delay 5

# \u662F\u5426\u5728slave\u5957\u63A5\u5B57\u53D1\u9001SYNC\u4E4B\u540E\u7981\u7528 TCP_NODELAY,\u5982\u679C\u9009\u62E9no\uFF0C\u6570\u636E\u4F20\u8F93\u5230salve\u7684\u5EF6\u8FDF\u5C06\u4F1A\u51CF\u5C11\u4F46\u8981\u4F7F\u7528\u66F4\u591A\u7684\u5E26\u5BBD
repl-disable-tcp-nodelay no

# \u63D0\u5347\u4E3A\u4E3B\u8282\u70B9\u7684\u4F18\u5148\u7EA7\uFF0C\u6570\u5B57\u8D8A\u5C0F\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8
replica-priority 100

################################## SECURITY ###################################
# \u5BA2\u6237\u7AEF\u8BA4\u8BC1\u5BC6\u7801\u8BBE\u7F6E
requirepass &quot;&quot;

################################### CLIENTS ####################################
# \u5BA2\u6237\u7AEF\u6700\u5927\u8FDE\u63A5\u6570
maxclients 10000

############################## MEMORY MANAGEMENT ################################
# \u6307\u5B9ARedis\u6700\u5927\u5185\u5B58\u9650\u5236
# maxmemory &lt;bytes&gt;

# \u6700\u5927\u5185\u5B58\u9010\u51FA\u7B56\u7565
# maxmemory-policy noeviction

# \u7528\u6837\u672C\u91CF\u505A\u68C0\u6D4B,\u8BBE\u7F6E\u6837\u672C\u91CF\u4E2A\u6570
# maxmemory-samples 5

# replica-ignore-maxmemory yes

############################# LAZY FREEING ####################################
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no

############################## APPEND ONLY MODE ###############################
# \u662F\u5426\u5F00\u542FAOF\u5907\u4EFD
appendonly no
appendfilename &quot;appendonly.aof&quot;
appendfsync everysec
no-appendfsync-on-rewrite no
auto-aof-rewrite-percentage 100 
auto-aof-rewrite-min-size 64mb 
aof-load-truncated yes 
aof-use-rdb-preamble yes

################################ LUA SCRIPTING  ###############################
lua-time-limit 5000

################################ REDIS CLUSTER  ###############################
# \u7565\uFF0C\u540E\u7EED\u8865\u5145

########################## CLUSTER DOCKER/NAT support  ########################
# \u7565\uFF0C\u540E\u7EED\u8865\u5145

################################## SLOW LOG ###################################
slowlog-log-slower-than 10000
slowlog-max-len 128

################################ REMAINING PART ##############################
latency-monitor-threshold 0
notify-keyspace-events &quot;&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br></div></div><h3 id="\u4ECE\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u670D\u52A1\u5668" aria-hidden="true">#</a> \u4ECE\u670D\u52A1\u5668</h3><p>\u548C\u4E3B\u670D\u52A1\u5668\u64CD\u4F5C\u76F8\u540C</p><p>\u6539\u53D8<code>redis.conf</code>\u4E2Dbind\u5730\u5740</p><p>\u6253\u5F00<code>replicaof</code>\u5E76\u6539\u4E3A<strong>\u4E3B\u670D\u52A1\u5668\u5730\u5740</strong>\u5373\u53EF</p><h2 id="\u542F\u52A8\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8\u670D\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /opt/redis/src
./redis-server /opt/redis/conf/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,19);function r(l,p){return e}var i=n(a,[["render",r],["__file","redis-slave.html.vue"]]);export{i as default};
