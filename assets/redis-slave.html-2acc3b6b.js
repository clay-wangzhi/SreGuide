import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-4e885309.js";const d={},l=s(`<h1 id="centos7安装redis-5-0-0主从" tabindex="-1"><a class="header-anchor" href="#centos7安装redis-5-0-0主从" aria-hidden="true">#</a> centos7安装redis-5.0.0主从</h1><h2 id="下载redis-5-0-0安装包" tabindex="-1"><a class="header-anchor" href="#下载redis-5-0-0安装包" aria-hidden="true">#</a> 下载redis-5.0.0安装包</h2><p>从官网下载安装包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
wget http://download.redis.io/releases/redis-5.0.0.tar.gz
tar -xvf redis-5.0.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装" aria-hidden="true">#</a> 编译安装</h2><p>安装gcc依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install gcc
cd /opt/redis-5.0.0
make -j \`grep processor /proc/cpuinfo | wc -l\`
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑配置文件" tabindex="-1"><a class="header-anchor" href="#编辑配置文件" aria-hidden="true">#</a> 编辑配置文件</h2><h3 id="主服务器" tabindex="-1"><a class="header-anchor" href="#主服务器" aria-hidden="true">#</a> 主服务器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
mv redis-5.0.0 redis
cd redis
mkdir {conf,log,data}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vim conf/redis.conf</code>增加以下内容</p><p>bind 中的IP地址为服务器IP地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>################################## NETWORK #####################################
# 绑定IP地址
bind *.*.*.*

# 5.0新增保护模式
protected-mode yes

# 设置启动端口
port 6379

# tcp最大并发监听数
tcp-backlog 511

#客户端空闲N秒后关闭连接(0禁用)
timeout 0

#向客户机发送TCP ack的沟通，3.2.1以后默认使用300s
tcp-keepalive 300

################################# GENERAL #####################################
# 设置后台启动
daemonize yes

# 没有监督互动
supervised no

# pid文件位置
pidfile /var/run/redis_6379.pid

# 日志等级
loglevel notice

# 日志文件位置
logfile &quot;/opt/redis/log/redis.log&quot;

# 设置数据库的数量
databases 16

# 显示logo
always-show-logo yes

################################ SNAPSHOTTING  ################################
# rdb通过快照方式进行持久化，每个条件之间是“或”的关系
# 15分钟（900秒钟）内至少1个键被更改则进行快照
save 900 1
# 5分钟（300秒）内至少10个键被更改则进行快照
save 300 10
# 1分钟（60秒）内至少10000个键被更改则进行快照
save 60 10000

# 错误停止写入
stop-writes-on-bgsave-error yes

# 数据存储前设置开启压缩
rdbcompression yes

# 对rdb数据进行校验，耗费CPU资源，5.0版本以后可以禁用
rdbchecksum no

# rdb数据转存的文件名称
dbfilename dump.rdb

# 数据存储目录
dir &quot;/opt/redis/data&quot;

################################# REPLICATION #################################
# 设置同步的主节点地址
# replicaof IP 端口 

# 主从同步认证密码
masterauth &quot;&quot;

# 允许从节点正常响应用户的请求
replica-serve-stale-data yes

# 从节点设置为只读
replica-read-only yes

# 同步策略为磁盘方式
repl-diskless-sync no

# socket同步方式的延迟时间
repl-diskless-sync-delay 5

# 是否在slave套接字发送SYNC之后禁用 TCP_NODELAY,如果选择no，数据传输到salve的延迟将会减少但要使用更多的带宽
repl-disable-tcp-nodelay no

# 提升为主节点的优先级，数字越小，优先级越高
replica-priority 100

################################## SECURITY ###################################
# 客户端认证密码设置
requirepass &quot;&quot;

################################### CLIENTS ####################################
# 客户端最大连接数
maxclients 10000

############################## MEMORY MANAGEMENT ################################
# 指定Redis最大内存限制
# maxmemory &lt;bytes&gt;

# 最大内存逐出策略
# maxmemory-policy noeviction

# 用样本量做检测,设置样本量个数
# maxmemory-samples 5

# replica-ignore-maxmemory yes

############################# LAZY FREEING ####################################
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no

############################## APPEND ONLY MODE ###############################
# 是否开启AOF备份
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
# 略，后续补充

########################## CLUSTER DOCKER/NAT support  ########################
# 略，后续补充

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从服务器" tabindex="-1"><a class="header-anchor" href="#从服务器" aria-hidden="true">#</a> 从服务器</h3><p>和主服务器操作相同</p><p>改变<code>redis.conf</code>中bind地址</p><p>打开<code>replicaof</code>并改为<strong>主服务器地址</strong>即可</p><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/redis/src
./redis-server /opt/redis/conf/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19),a=[l];function v(r,c){return e(),n("div",null,a)}const b=i(d,[["render",v],["__file","redis-slave.html.vue"]]);export{b as default};
