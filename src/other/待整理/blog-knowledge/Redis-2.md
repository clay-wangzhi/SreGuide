---
title: docker搭建redis集群
tag: redis
abbrlink: 1672ce0a
date: 2017-09-17 21:00:00
---

docker搭建redis集群

<!--more-->

## 下载镜像

```
docker pull redis
```

## 准备配置文件

```
mkdir /home/docker/redis/  
wget https://raw.githubusercontent.com/antirez/redis/3.0/redis.conf -O /home/docker/redis/redis.conf
cd /home/docker/redis/  
sed -i 's/# slaveof <masterip> <masterport>/slaveof redis-master 6379/g' redis.conf  
```

## 启动redis容器

```
docker run --name redis-master -p 6379:6379 -d redis
docker run --link redis-master:redis-master -v /home/docker/redis/redis.conf:/usr/local/etc/redis/redis.conf --name redis-slave1 -d redis redis-server /usr/local/etc/redis/redis.conf
docker run --link redis-master:redis-master -v /home/docker/redis/redis.conf:/usr/local/etc/redis/redis.conf --name redis-slave2 -d redis redis-server /usr/local/etc/redis/redis.conf
docker run --link redis-master:redis-master -v /home/docker/redis/redis.conf:/usr/local/etc/redis/redis.conf --name redis-slave3 -d redis redis-server /usr/local/etc/redis/redis.conf 
```

## 查看redis集群

```
redis-cli 
127.0.0.1:6379> info
# Server
redis_version:3.0.6
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:48bba53ba79f07ac
redis_mode:standalone
os:Linux 3.13.0-27-generic x86_64
arch_bits:64
multiplexing_api:epoll
gcc_version:4.9.2
process_id:1
run_id:6d552d47e50137b6ee40697d7254891aa5dbdb68
tcp_port:6379
uptime_in_seconds:21554
uptime_in_days:0
hz:10
lru_clock:10637013
config_file:

# Clients
connected_clients:1
client_longest_output_list:0
client_biggest_input_buf:0
blocked_clients:0

# Memory
used_memory:1926248
used_memory_human:1.84M
used_memory_rss:4419584
used_memory_peak:1963096
used_memory_peak_human:1.87M
used_memory_lua:36864
mem_fragmentation_ratio:2.29
mem_allocator:jemalloc-3.6.0

# Persistence
loading:0
rdb_changes_since_last_save:0
rdb_bgsave_in_progress:0
rdb_last_save_time:1453456066
rdb_last_bgsave_status:ok
rdb_last_bgsave_time_sec:0
rdb_current_bgsave_time_sec:-1
aof_enabled:0
aof_rewrite_in_progress:0
aof_rewrite_scheduled:0
aof_last_rewrite_time_sec:-1
aof_current_rewrite_time_sec:-1
aof_last_bgrewrite_status:ok
aof_last_write_status:ok

# Stats
total_connections_received:5
total_commands_processed:64476
instantaneous_ops_per_sec:3
total_net_input_bytes:2426080
total_net_output_bytes:92455
instantaneous_input_kbps:0.14
instantaneous_output_kbps:0.02
rejected_connections:0
sync_full:3
sync_partial_ok:0
sync_partial_err:0
expired_keys:0
evicted_keys:0
keyspace_hits:0
keyspace_misses:0
pubsub_channels:0
pubsub_patterns:0
latest_fork_usec:222
migrate_cached_sockets:0

# Replication
role:master
connected_slaves:3
slave0:ip=172.17.0.2,port=6379,state=online,offset=30087,lag=1
slave1:ip=172.17.0.3,port=6379,state=online,offset=30101,lag=0
slave2:ip=172.17.0.4,port=6379,state=online,offset=30087,lag=1
master_repl_offset:30101
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:2
repl_backlog_histlen:30100

# CPU
used_cpu_sys:7.37
used_cpu_user:5.34
used_cpu_sys_children:0.00
used_cpu_user_children:0.00

# Cluster
cluster_enabled:0

# Keyspace
```

转载链接：https://segmentfault.com/a/1190000004353368

