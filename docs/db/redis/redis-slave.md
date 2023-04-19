---
category: Redis
---

# centos7安装redis-5.0.0主从

## 下载redis-5.0.0安装包

从官网下载安装包

```
cd /opt
wget http://download.redis.io/releases/redis-5.0.0.tar.gz
tar -xvf redis-5.0.0.tar.gz
```

## 编译安装

安装gcc依赖

```
yum -y install gcc
cd /opt/redis-5.0.0
make -j `grep processor /proc/cpuinfo | wc -l`
make install
```

## 编辑配置文件

### 主服务器

```
cd /opt
mv redis-5.0.0 redis
cd redis
mkdir {conf,log,data}
```

`vim conf/redis.conf`增加以下内容

bind 中的IP地址为服务器IP地址

```
################################## NETWORK #####################################
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
logfile "/opt/redis/log/redis.log"

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
dir "/opt/redis/data"

################################# REPLICATION #################################
# 设置同步的主节点地址
# replicaof IP 端口 

# 主从同步认证密码
masterauth ""

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
requirepass ""

################################### CLIENTS ####################################
# 客户端最大连接数
maxclients 10000

############################## MEMORY MANAGEMENT ################################
# 指定Redis最大内存限制
# maxmemory <bytes>

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
appendfilename "appendonly.aof"
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
notify-keyspace-events ""
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
```

### 从服务器

和主服务器操作相同

改变`redis.conf`中bind地址

打开`replicaof`并改为**主服务器地址**即可

## 启动服务

```
cd /opt/redis/src
./redis-server /opt/redis/conf/redis.conf
```

