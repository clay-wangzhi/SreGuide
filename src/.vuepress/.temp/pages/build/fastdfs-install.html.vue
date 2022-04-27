<template><h1 id="分布式fastdfs-nginx缓存高可用集群构建" tabindex="-1"><a class="header-anchor" href="#分布式fastdfs-nginx缓存高可用集群构建" aria-hidden="true">#</a> 分布式FastDfs+nginx缓存高可用集群构建</h1>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>FastDFS：开源的高性能分布式文件系统；主要功能包括：文件存储，文件同步和文件访问，以及高容量和负载平衡</p>
<p>FastDFS：角色：跟踪服务器(Tracker Server)、存储服务器(Storage Server)和客户端(Client)</p>
<ol>
<li>Tracker Server: 跟踪服务器，主要做调度工作，起到均衡的作用；负责管理所有的storage server和group，每个storage在启动后会连接 Tracker，告知自己所属 group 等信息，并保持周期性心跳。多个Tracker之间是对等关系，不存在单点故障</li>
<li>Storage Server: 存储服务器，主要提供容量和备份服务；以 group 为单位，每个 group 内可以有多台 storage server（高可用），组内的storage server上的数据互为备份</li>
<li>Client:客户端，上传下载数据的服务器</li>
</ol>
<p><img src="images/fastdfs1.png" alt="" loading="lazy"></p>
<p><strong>FastDfs+nginx缓存高可用集群环境流程示意图：</strong></p>
<p><img src="images/fastdfs2.png" alt="" loading="lazy"></p>
<p>实验环境机器说明：</p>
<table>
<thead>
<tr>
<th>机器名称</th>
<th>IP地址</th>
<th>应用</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>tracker01.csp</td>
<td>192.168.165.36</td>
<td>FastDFS,libfastcommon,nginx,keepalived，ngx_cache_purge</td>
<td>CentOS Linux release 7.6.1810 (Core)</td>
</tr>
<tr>
<td>tracker02.csp</td>
<td>192.168.165.37</td>
<td>FastDFS,libfastcommon,nginx,keepalived，ngx_cache_purge</td>
<td>CentOS Linux release 7.6.1810 (Core)</td>
</tr>
<tr>
<td>storage01.csp</td>
<td>192.168.165.38</td>
<td>FastDFS,libfastcommon,nginx,fastdfs-nginx-module</td>
<td>CentOS Linux release 7.6.1810 (Core)</td>
</tr>
<tr>
<td>storage02.csp</td>
<td>192.168.165.39</td>
<td>FastDFS,libfastcommon,nginx,fastdfs-nginx-module</td>
<td>CentOS Linux release 7.6.1810 (Core)</td>
</tr>
<tr>
<td>storage03.csp</td>
<td>192.168.165.40</td>
<td>FastDFS,libfastcommon,nginx,fastdfs-nginx-module</td>
<td>CentOS Linux release 7.6.1810 (Core)</td>
</tr>
<tr>
<td>storage04.csp</td>
<td>192.168.165.41</td>
<td>FastDFS,libfastcommon,nginx,fastdfs-nginx-module</td>
<td>CentOS Linux release 7.6.1810 (Core)</td>
</tr>
<tr>
<td>VIP</td>
<td>192.168.165.42</td>
<td>无</td>
<td>无</td>
</tr>
</tbody>
</table>
<h3 id="fastdfs的安装" tabindex="-1"><a class="header-anchor" href="#fastdfs的安装" aria-hidden="true">#</a> fastdfs的安装</h3>
<p>6台主机同时进行</p>
<p>下载安装包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -p /usr/local/software
cd /usr/local/software
wget https://github.com/happyfish100/fastdfs/archive/V5.11.tar.gz
wget https://github.com/happyfish100/fastdfs-client-java/archive/master.zip
mv master.zip fastdfs-client-java.zip
wget https://github.com/happyfish100/fastdfs-nginx-module/archive/master.zip
mv master.zip fastdfs-nginx-module.zip
wget https://github.com/happyfish100/libfastcommon/archive/master.zip
mv master.zip libfastcommon.zip
wget http://nginx.org/download/nginx-1.16.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>安装相关依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install make cmake gcc gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装 libfastcommon</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>unzip libfastcommon.zip -d /usr/local/fast/
cd /usr/local/fast/libfastcommon-master
./make.sh 
./make.sh install
ln -s /usr/lib64/libfastcommon.so /usr/local/lib/libfastcommon.so
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>安装 FastDFS</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -zxf V5.11.tar.gz -C /usr/local/fast/
cd /usr/local/fast/fastdfs-5.11
./make.sh
./make.sh install
cp -f ./conf/client.conf /etc/fdfs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="tracker安装" tabindex="-1"><a class="header-anchor" href="#tracker安装" aria-hidden="true">#</a> tracker安装</h3>
<p>在两台tracker上执行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /etc/fdfs/
cp tracker.conf.sample tracker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>修改tracker配置文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># egrep -v "^$|^#" tracker.conf
disabled=false
bind_addr=0.0.0.0
port=22122
connect_timeout=30
network_timeout=60
base_path=/fastdfs/tracker
max_connections=256
accept_threads=1
work_threads=4
min_buff_size = 8KB
max_buff_size = 128KB
store_lookup=2
store_group=group2
store_server=0
store_path=0
download_server=0
reserved_storage_space = 10%
log_level=info
run_by_group=
run_by_user=
allow_hosts=*
sync_log_buff_interval = 10
check_active_interval = 120
thread_stack_size = 64KB
storage_ip_changed_auto_adjust = true
storage_sync_file_max_delay = 86400
storage_sync_file_max_time = 300
use_trunk_file = false 
slot_min_size = 256
slot_max_size = 16MB
trunk_file_size = 64MB
trunk_create_file_advance = false
trunk_create_file_time_base = 02:00
trunk_create_file_interval = 86400
trunk_create_file_space_threshold = 20G
trunk_init_check_occupying = false
trunk_init_reload_from_binlog = false
trunk_compress_binlog_min_interval = 0
use_storage_id = false
storage_ids_filename = storage_ids.conf
id_type_in_filename = ip
store_slave_file_use_link = false
rotate_error_log = false
error_log_rotate_time=00:00
rotate_error_log_size = 0
log_file_keep_days = 0
use_connection_pool = false
connection_pool_max_idle_time = 3600
http.server_port=8080
http.check_alive_interval=30
http.check_alive_type=tcp
http.check_alive_uri=/status.html
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>修改的内容为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bind_addr=0.0.0.0
base_path=/fastdfs/tracker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>创建工作目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -pv /fastdfs/tracker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动追踪器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/etc/init.d/fdfs_trackerd start
tail -f /fastdfs/tracker/logs/trackerd.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>开放防火墙端口</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cat /etc/sysconfig/iptables
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22122 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT

# systemctl restart iptables.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="storage安装" tabindex="-1"><a class="header-anchor" href="#storage安装" aria-hidden="true">#</a> storage安装</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /etc/fdfs/
cp storage.conf.sample storage.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>修改配置文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># egrep -v "^$|^#" storage.conf
disabled=false
group_name=group1
bind_addr=
client_bind=true
port=23000
connect_timeout=30
network_timeout=60
heart_beat_interval=30
stat_report_interval=60
base_path=/fastdfs/storage
max_connections=256
buff_size = 256KB
accept_threads=1
work_threads=4
disk_rw_separated = true
disk_reader_threads = 1
disk_writer_threads = 1
sync_wait_msec=50
sync_interval=0
sync_start_time=00:00
sync_end_time=23:59
write_mark_file_freq=500
store_path_count=1
store_path0=/fastdfs/storage
subdir_count_per_path=256
tracker_server=192.168.162.193:22122
tracker_server=192.168.162.194:22122
log_level=info
run_by_group=
run_by_user=
allow_hosts=*
file_distribute_path_mode=0
file_distribute_rotate_count=100
fsync_after_written_bytes=0
sync_log_buff_interval=10
sync_binlog_buff_interval=10
sync_stat_file_interval=300
thread_stack_size=512KB
upload_priority=10
if_alias_prefix=
check_file_duplicate=0
file_signature_method=hash
key_namespace=FastDFS
keep_alive=0
use_access_log = false
rotate_access_log = false
access_log_rotate_time=00:00
rotate_error_log = false
error_log_rotate_time=00:00
rotate_access_log_size = 0
rotate_error_log_size = 0
log_file_keep_days = 0
file_sync_skip_invalid_record=false
use_connection_pool = false
connection_pool_max_idle_time = 3600
http.domain_name=
http.server_port=8888
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>修改的文件内容为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>group_name=group1 #4台机器分成2组(group1:192.168.165.38,39和group2:192.168.165.40,41)
base_path=/fastdfs/storage #设置 storage 的日志目录
store_path_count=1 #默认就为1，（存储路径个数，需要和 store_path个数匹配）
store_path0=/fastdfs/storage #设置存储路径
tracker_server=192.168.162.193:22122
tracker_server=192.168.162.194:22122#tracker 服务的IP和端口，多个就添加多条记录
http.server_port=8888 #设置http端口号
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>创建目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -pv /fastdfs/storage
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动 storage：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/etc/init.d/fdfs_storaged start
tail -f /fastdfs/storage/logs/storaged.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>查看集群状态：</p>
<p>在任意一台storage主机即可</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/usr/bin/fdfs_monitor /etc/fdfs/storage.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>开放防火墙端口</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat /etc/sysconfig/iptables
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 8888 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 23000 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT

# systemctl restart iptables.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="客户端测试" tabindex="-1"><a class="header-anchor" href="#客户端测试" aria-hidden="true">#</a> 客户端测试</h3>
<p>tracker台中可以随意找一台做客户端测试下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># egrep -v "^$|^#" client.conf
connect_timeout=30
network_timeout=60
base_path=/fastdfs/tracker
tracker_server=192.168.165.36:22122
tracker_server=192.168.165.37:22122
log_level=info
use_connection_pool = false
connection_pool_max_idle_time = 3600
load_fdfs_parameters_from_tracker=false
use_storage_id = false
storage_ids_filename = storage_ids.conf
http.tracker_server_port=8888
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>修改文件的内容为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>base_path=/fastdfs/tracker #tracker服务器文件路径
tracker_server=192.168.165.36:22122
tracker_server=192.168.165.37:22122
http.tracker_server_port=8888 # tracker 服务器的 http端口号，必须和tracker的设置对应起来
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上传一张图片到服务器上</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/usr/bin/fdfs_upload_file /etc/fdfs/client.conf /home/111/1.jpg 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="配置fastdfs集群支持http" tabindex="-1"><a class="header-anchor" href="#配置fastdfs集群支持http" aria-hidden="true">#</a> 配置FastDFS集群支持http</h3>
<p>支持http请求，安装nginx（4个storage节点安装nginx,首先安装fastdfs-nginx-module,fastdfs与nginx集成模块）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /usr/local/software/
unzip fastdfs-nginx-module.zip -d /usr/local/fast/
cd /usr/local/fast/fastdfs-nginx-module-master/src
yum -y install pcre pcre-devel
yum -y install zlib zlib-devel
yum -y install openssl openssl-devel
cd /usr/local/software
tar -zxf nginx-1.9.9.tar.gz -C /usr/local/
cd /usr/local/nginx-1.9.9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>修改config编译文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># vim /usr/local/fast/fastdfs-nginx-module-master/src/config
ngx_addon_name=ngx_http_fastdfs_module

if test -n "${ngx_module_link}"; then
    ngx_module_type=HTTP
    ngx_module_name=$ngx_addon_name
    ngx_module_incs="/usr/include/fastdfs /usr/include/fastcommon"
    ngx_module_libs="-lfastcommon -lfdfsclient"
    ngx_module_srcs="$ngx_addon_dir/ngx_http_fastdfs_module.c"
    ngx_module_deps=
    CFLAGS="$CFLAGS -D_FILE_OFFSET_BITS=64 -DFDFS_OUTPUT_CHUNK_SIZE='256*1024' -DFDFS_MOD_CONF_FILENAME='\"/etc/fdfs/mod_fastdfs.conf\"'"
    . auto/module
else
    HTTP_MODULES="$HTTP_MODULES ngx_http_fastdfs_module"
    NGX_ADDON_SRCS="$NGX_ADDON_SRCS $ngx_addon_dir/ngx_http_fastdfs_module.c"
    CORE_INCS="$CORE_INCS /usr/include/fastdfs /usr/include/fastcommon"
    CORE_LIBS="$CORE_LIBS -lfastcommon -lfdfsclient"
    CFLAGS="$CFLAGS -D_FILE_OFFSET_BITS=64 -DFDFS_OUTPUT_CHUNK_SIZE='256*1024' -DFDFS_MOD_CONF_FILENAME='\"/etc/fdfs/mod_fastdfs.conf\"'"
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>编译安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./configure --add-module=/usr/local/fast/fastdfs-nginx-module-master/src/
make -j 4
make install
cd /usr/local/fast/fastdfs-nginx-module-master/src/
cp mod_fastdfs.conf /etc/fdfs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>修改mod_fastdfs.conf配置文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># egrep -v "^$|^#" /etc/fdfs/mod_fastdfs.conf
connect_timeout=20
network_timeout=30
base_path=/tmp
load_fdfs_parameters_from_tracker=true
storage_sync_file_max_delay = 86400
use_storage_id = false
storage_ids_filename = storage_ids.conf
tracker_server=192.168.165.36:22122
tracker_server=192.168.165.37:22122
storage_server_port=23000
group_name=group1
url_have_group_name = true
store_path_count=1
store_path0=/fastdfs/storage
log_level=info
log_filename=
response_mode=proxy
if_alias_prefix=
flv_support = true
flv_extension = flv
group_count = 2
[group1]
group_name=group1
storage_server_port=23000
store_path_count=1
store_path0=/fastdfs/storage
[group2]
group_name=group3
storage_server_port=23000
store_path_count=1
store_path0=/fastdfs/storage

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><blockquote>
<p>注意:group1:192.168.165.38,39和group2:192.168.165.40,41</p>
</blockquote>
<p>复制FastDFS(fastdfs-5.11)里的2个文件到/etc/fdfs/目录下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /usr/local/fast/fastdfs-5.11/conf/
cp http.conf mime.types /etc/fdfs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>创建一个软链接，在/fastdfs/storage 文件存储目录下创建软链接，将其链接到实际存放数据的目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ln -s /fastdfs/storage/data/ /fastdfs/storage/data/M00
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改nginx配置文件为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat /usr/local/nginx/conf/nginx.conf

#user  nobody;
worker_processes  4;
worker_cpu_affinity auto;
worker_rlimit_nofile 65535;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  65535;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       8888;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        #location / {
        #    root   html;
        #    index  index.html index.htm;
        #}
        location ~ /group([0-9])/M00 {
            ngx_fastdfs_module;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><p>启动nginx</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/usr/local/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上传图片，然后访问测试</p>
<h3 id="tracker-server-上安装-nginx缓存" tabindex="-1"><a class="header-anchor" href="#tracker-server-上安装-nginx缓存" aria-hidden="true">#</a> tracker server 上安装 nginx缓存</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tar -zxf ngx_cache_purge-2.3.tar.gz -C /usr/local/fast/
yum -y install pcre pcre-devel
yum -y install zlib zlib-devel
yum -y install openssl openssl-devel
cd /usr/local/software
tar -xvf nginx-1.16.0.tar.gz -C /usr/local/
cd /usr/local/nginx-1.16.0/
./configure --add-module=/usr/local/fast/ngx_cache_purge-2.3
make -j 4
make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>创建缓存目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -pv /fastdfs/cache/nginx/proxy_cache
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改nginx配置文件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cat /usr/local/nginx/conf/nginx.conf

#user  nobody;
worker_processes  4;
worker_cpu_affinity auto;
worker_rlimit_nofile 65535;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  65535;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    server_tokens off;
    gzip on;
    gzip_disable "MSIE [1-6]\.";
    gzip_min_length 1100;
    gzip_buffers 4 8k;
    gzip_comp_level 3;
    gzip_proxied any;
    gzip_types text/plain text/css application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json image/jpeg image/gif image/png image/jpg;

    large_client_header_buffers 4 8k;
    client_header_buffer_size 8k;
    tcp_nopush on;
    tcp_nodelay on;
    server_names_hash_bucket_size 128;
    client_max_body_size 300m;
    client_body_buffer_size 128k;

    proxy_redirect off;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_connect_timeout 90;
    proxy_send_timeout 90;
    proxy_read_timeout 90;
    proxy_buffer_size 16k;
    proxy_buffers 4 64k;
    proxy_busy_buffers_size 128k;
    proxy_temp_file_write_size 128k;
    proxy_cache_path /fastdfs/cache/nginx/proxy_cache levels=1:2 keys_zone=http-cache:200m max_size=1g inactive=30d;
    proxy_temp_path /fastdfs/cache/nginx/proxy_cache/tmp;

    upstream fdfs {
        server 192.168.165.38:8888 weight=1 max_fails=3 fail_timeout=30s;
        server 192.168.165.39:8888 weight=1 max_fails=3 fail_timeout=30s;
        server 192.168.165.40:8888 weight=1 max_fails=3 fail_timeout=30s;
        server 192.168.165.41:8888 weight=1 max_fails=3 fail_timeout=30s;
    }


    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        location ~/group([0-9])/M00 {
            proxy_next_upstream http_502 http_504 error timeout invalid_header;
            proxy_cache http-cache;
            proxy_cache_valid 200 304 12h;
            proxy_cache_key $uri$is_args$args;
            proxy_pass http://fdfs;
            expires 30d;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><p>启动nginx</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/usr/local/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上传图片，访问测试</p>
<h3 id="keepalived安装" tabindex="-1"><a class="header-anchor" href="#keepalived安装" aria-hidden="true">#</a> keepalived安装</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改配置文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cat /etc/keepalived/keepalived.conf 
! Configuration File for keepalived

global_defs {
    router_id LVS_DEVEL
}

vrrp_script chk_nginx {
    script "/etc/keepalived/chk_nginx.sh"
    interval 6
    weight -2
}

vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 51
    priority 100
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.165.42/24
    }
    track_script {
        chk_nginx
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><blockquote>
<p>准备：另一台的state改为BACKUP，priority改为小于100的值</p>
</blockquote>
<p>配置健康检查脚本：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cat /etc/keepalived/chk_nginx.sh 
#!/bin/bash
#
# check nginx status

A=$(ps -C nginx --no-header |wc -l)
if [[ ${A} -eq 0 ]];then
  /usr/local/nginx/sbin/nginx
  sleep 3
  if [ $(ps -C nginx --no-header |wc -l) -eq 0 ];then
    local message="$(date) ':nginx is not healthy, try to killall keepalived'"
    echo ${message} >> /etc/keepalived/keepalived.log
    systemctl stop keepalived.service
  fi
fi

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>赋予执行权限：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chomd +x /etc/keepalived/chk_nginx.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加防火墙规则</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cat /etc/sysconfig/iptables
*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [0:0]
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -p vrrp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 22122 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 10050 -j ACCEPT
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
COMMIT

#  systemctl restart iptables.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>启动服务</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl start keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>用vip访问测试</p>
<p>参考链接：</p>
<blockquote>
<p><a href="https://www.cnblogs.com/NGames/archive/2019/06/23/11065282.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/NGames/archive/2019/06/23/11065282.html<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
</template>
