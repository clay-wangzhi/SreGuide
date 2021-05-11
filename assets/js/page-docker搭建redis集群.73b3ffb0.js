(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1207:function(s,e,n){"use strict";n.r(e);var a=n(1),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("docker搭建redis集群")]),s._v(" "),n("h2",{attrs:{id:"下载镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[s._v("#")]),s._v(" 下载镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker pull redis\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"准备配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备配置文件"}},[s._v("#")]),s._v(" 准备配置文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir /home/docker/redis/  \nwget https://raw.githubusercontent.com/antirez/redis/3.0/redis.conf -O /home/docker/redis/redis.conf\ncd /home/docker/redis/  \nsed -i 's/# slaveof <masterip> <masterport>/slaveof redis-master 6379/g' redis.conf  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"启动redis容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动redis容器"}},[s._v("#")]),s._v(" 启动redis容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker run --name redis-master -p 6379:6379 -d redis\ndocker run --link redis-master:redis-master -v /home/docker/redis/redis.conf:/usr/local/etc/redis/redis.conf --name redis-slave1 -d redis redis-server /usr/local/etc/redis/redis.conf\ndocker run --link redis-master:redis-master -v /home/docker/redis/redis.conf:/usr/local/etc/redis/redis.conf --name redis-slave2 -d redis redis-server /usr/local/etc/redis/redis.conf\ndocker run --link redis-master:redis-master -v /home/docker/redis/redis.conf:/usr/local/etc/redis/redis.conf --name redis-slave3 -d redis redis-server /usr/local/etc/redis/redis.conf \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"查看redis集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看redis集群"}},[s._v("#")]),s._v(" 查看redis集群")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("redis-cli \n127.0.0.1:6379> info\n# Server\nredis_version:3.0.6\nredis_git_sha1:00000000\nredis_git_dirty:0\nredis_build_id:48bba53ba79f07ac\nredis_mode:standalone\nos:Linux 3.13.0-27-generic x86_64\narch_bits:64\nmultiplexing_api:epoll\ngcc_version:4.9.2\nprocess_id:1\nrun_id:6d552d47e50137b6ee40697d7254891aa5dbdb68\ntcp_port:6379\nuptime_in_seconds:21554\nuptime_in_days:0\nhz:10\nlru_clock:10637013\nconfig_file:\n\n# Clients\nconnected_clients:1\nclient_longest_output_list:0\nclient_biggest_input_buf:0\nblocked_clients:0\n\n# Memory\nused_memory:1926248\nused_memory_human:1.84M\nused_memory_rss:4419584\nused_memory_peak:1963096\nused_memory_peak_human:1.87M\nused_memory_lua:36864\nmem_fragmentation_ratio:2.29\nmem_allocator:jemalloc-3.6.0\n\n# Persistence\nloading:0\nrdb_changes_since_last_save:0\nrdb_bgsave_in_progress:0\nrdb_last_save_time:1453456066\nrdb_last_bgsave_status:ok\nrdb_last_bgsave_time_sec:0\nrdb_current_bgsave_time_sec:-1\naof_enabled:0\naof_rewrite_in_progress:0\naof_rewrite_scheduled:0\naof_last_rewrite_time_sec:-1\naof_current_rewrite_time_sec:-1\naof_last_bgrewrite_status:ok\naof_last_write_status:ok\n\n# Stats\ntotal_connections_received:5\ntotal_commands_processed:64476\ninstantaneous_ops_per_sec:3\ntotal_net_input_bytes:2426080\ntotal_net_output_bytes:92455\ninstantaneous_input_kbps:0.14\ninstantaneous_output_kbps:0.02\nrejected_connections:0\nsync_full:3\nsync_partial_ok:0\nsync_partial_err:0\nexpired_keys:0\nevicted_keys:0\nkeyspace_hits:0\nkeyspace_misses:0\npubsub_channels:0\npubsub_patterns:0\nlatest_fork_usec:222\nmigrate_cached_sockets:0\n\n# Replication\nrole:master\nconnected_slaves:3\nslave0:ip=172.17.0.2,port=6379,state=online,offset=30087,lag=1\nslave1:ip=172.17.0.3,port=6379,state=online,offset=30101,lag=0\nslave2:ip=172.17.0.4,port=6379,state=online,offset=30087,lag=1\nmaster_repl_offset:30101\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:2\nrepl_backlog_histlen:30100\n\n# CPU\nused_cpu_sys:7.37\nused_cpu_user:5.34\nused_cpu_sys_children:0.00\nused_cpu_user_children:0.00\n\n# Cluster\ncluster_enabled:0\n\n# Keyspace\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br")])]),n("p",[s._v("转载链接：https://segmentfault.com/a/1190000004353368")])])}),[],!1,null,null,null);e.default=r.exports}}]);