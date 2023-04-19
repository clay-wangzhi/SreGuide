import{_ as e,r as a,c as r,a as n,b as l,F as p,e as t,d as i,o as c}from"./app.958f2970.js";const b={},u=t(`<h1 id="\u5206\u5E03\u5F0Ffastdfs-nginx\u7F13\u5B58\u9AD8\u53EF\u7528\u96C6\u7FA4\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0Ffastdfs-nginx\u7F13\u5B58\u9AD8\u53EF\u7528\u96C6\u7FA4\u6784\u5EFA" aria-hidden="true">#</a> \u5206\u5E03\u5F0FFastDfs+nginx\u7F13\u5B58\u9AD8\u53EF\u7528\u96C6\u7FA4\u6784\u5EFA</h1><h3 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><p>FastDFS\uFF1A\u5F00\u6E90\u7684\u9AD8\u6027\u80FD\u5206\u5E03\u5F0F\u6587\u4EF6\u7CFB\u7EDF\uFF1B\u4E3B\u8981\u529F\u80FD\u5305\u62EC\uFF1A\u6587\u4EF6\u5B58\u50A8\uFF0C\u6587\u4EF6\u540C\u6B65\u548C\u6587\u4EF6\u8BBF\u95EE\uFF0C\u4EE5\u53CA\u9AD8\u5BB9\u91CF\u548C\u8D1F\u8F7D\u5E73\u8861</p><p>FastDFS\uFF1A\u89D2\u8272\uFF1A\u8DDF\u8E2A\u670D\u52A1\u5668(Tracker Server)\u3001\u5B58\u50A8\u670D\u52A1\u5668(Storage Server)\u548C\u5BA2\u6237\u7AEF(Client)</p><ol><li>Tracker Server: \u8DDF\u8E2A\u670D\u52A1\u5668\uFF0C\u4E3B\u8981\u505A\u8C03\u5EA6\u5DE5\u4F5C\uFF0C\u8D77\u5230\u5747\u8861\u7684\u4F5C\u7528\uFF1B\u8D1F\u8D23\u7BA1\u7406\u6240\u6709\u7684storage server\u548Cgroup\uFF0C\u6BCF\u4E2Astorage\u5728\u542F\u52A8\u540E\u4F1A\u8FDE\u63A5 Tracker\uFF0C\u544A\u77E5\u81EA\u5DF1\u6240\u5C5E group \u7B49\u4FE1\u606F\uFF0C\u5E76\u4FDD\u6301\u5468\u671F\u6027\u5FC3\u8DF3\u3002\u591A\u4E2ATracker\u4E4B\u95F4\u662F\u5BF9\u7B49\u5173\u7CFB\uFF0C\u4E0D\u5B58\u5728\u5355\u70B9\u6545\u969C</li><li>Storage Server: \u5B58\u50A8\u670D\u52A1\u5668\uFF0C\u4E3B\u8981\u63D0\u4F9B\u5BB9\u91CF\u548C\u5907\u4EFD\u670D\u52A1\uFF1B\u4EE5 group \u4E3A\u5355\u4F4D\uFF0C\u6BCF\u4E2A group \u5185\u53EF\u4EE5\u6709\u591A\u53F0 storage server\uFF08\u9AD8\u53EF\u7528\uFF09\uFF0C\u7EC4\u5185\u7684storage server\u4E0A\u7684\u6570\u636E\u4E92\u4E3A\u5907\u4EFD</li><li>Client:\u5BA2\u6237\u7AEF\uFF0C\u4E0A\u4F20\u4E0B\u8F7D\u6570\u636E\u7684\u670D\u52A1\u5668</li></ol><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/fastdfs1.png" alt="" loading="lazy"></p><p><strong>FastDfs+nginx\u7F13\u5B58\u9AD8\u53EF\u7528\u96C6\u7FA4\u73AF\u5883\u6D41\u7A0B\u793A\u610F\u56FE\uFF1A</strong></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/fastdfs2.png" alt="" loading="lazy"></p><p>\u5B9E\u9A8C\u73AF\u5883\u673A\u5668\u8BF4\u660E\uFF1A</p><table><thead><tr><th>\u673A\u5668\u540D\u79F0</th><th>IP\u5730\u5740</th><th>\u5E94\u7528</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tracker01.csp</td><td>192.168.165.36</td><td>FastDFS,libfastcommon,nginx,keepalived\uFF0Cngx_cache_purge</td><td>CentOS Linux release 7.6.1810 (Core)</td></tr><tr><td>tracker02.csp</td><td>192.168.165.37</td><td>FastDFS,libfastcommon,nginx,keepalived\uFF0Cngx_cache_purge</td><td>CentOS Linux release 7.6.1810 (Core)</td></tr><tr><td>storage01.csp</td><td>192.168.165.38</td><td>FastDFS,libfastcommon,nginx,fastdfs-nginx-module</td><td>CentOS Linux release 7.6.1810 (Core)</td></tr><tr><td>storage02.csp</td><td>192.168.165.39</td><td>FastDFS,libfastcommon,nginx,fastdfs-nginx-module</td><td>CentOS Linux release 7.6.1810 (Core)</td></tr><tr><td>storage03.csp</td><td>192.168.165.40</td><td>FastDFS,libfastcommon,nginx,fastdfs-nginx-module</td><td>CentOS Linux release 7.6.1810 (Core)</td></tr><tr><td>storage04.csp</td><td>192.168.165.41</td><td>FastDFS,libfastcommon,nginx,fastdfs-nginx-module</td><td>CentOS Linux release 7.6.1810 (Core)</td></tr><tr><td>VIP</td><td>192.168.165.42</td><td>\u65E0</td><td>\u65E0</td></tr></tbody></table><h3 id="fastdfs\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#fastdfs\u7684\u5B89\u88C5" aria-hidden="true">#</a> fastdfs\u7684\u5B89\u88C5</h3><p>6\u53F0\u4E3B\u673A\u540C\u65F6\u8FDB\u884C</p><p>\u4E0B\u8F7D\u5B89\u88C5\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /usr/local/software
cd /usr/local/software
wget https://github.com/happyfish100/fastdfs/archive/V5.11.tar.gz
wget https://github.com/happyfish100/fastdfs-client-java/archive/master.zip
mv master.zip fastdfs-client-java.zip
wget https://github.com/happyfish100/fastdfs-nginx-module/archive/master.zip
mv master.zip fastdfs-nginx-module.zip
wget https://github.com/happyfish100/libfastcommon/archive/master.zip
mv master.zip libfastcommon.zip
wget http://nginx.org/download/nginx-1.16.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5B89\u88C5\u76F8\u5173\u4F9D\u8D56</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install make cmake gcc gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5 libfastcommon</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>unzip libfastcommon.zip -d /usr/local/fast/
cd /usr/local/fast/libfastcommon-master
./make.sh 
./make.sh install
ln -s /usr/lib64/libfastcommon.so /usr/local/lib/libfastcommon.so
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B89\u88C5 FastDFS</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxf V5.11.tar.gz -C /usr/local/fast/
cd /usr/local/fast/fastdfs-5.11
./make.sh
./make.sh install
cp -f ./conf/client.conf /etc/fdfs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="tracker\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#tracker\u5B89\u88C5" aria-hidden="true">#</a> tracker\u5B89\u88C5</h3><p>\u5728\u4E24\u53F0tracker\u4E0A\u6267\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /etc/fdfs/
cp tracker.conf.sample tracker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4FEE\u6539tracker\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># egrep -v &quot;^$|^#&quot; tracker.conf
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>\u4FEE\u6539\u7684\u5185\u5BB9\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bind_addr=0.0.0.0
base_path=/fastdfs/tracker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -pv /fastdfs/tracker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u542F\u52A8\u8FFD\u8E2A\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/etc/init.d/fdfs_trackerd start
tail -f /fastdfs/tracker/logs/trackerd.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5F00\u653E\u9632\u706B\u5899\u7AEF\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /etc/sysconfig/iptables
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="storage\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#storage\u5B89\u88C5" aria-hidden="true">#</a> storage\u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /etc/fdfs/
cp storage.conf.sample storage.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># egrep -v &quot;^$|^#&quot; storage.conf
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>\u4FEE\u6539\u7684\u6587\u4EF6\u5185\u5BB9\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>group_name=group1 #4\u53F0\u673A\u5668\u5206\u62102\u7EC4(group1:192.168.165.38,39\u548Cgroup2:192.168.165.40,41)
base_path=/fastdfs/storage #\u8BBE\u7F6E storage \u7684\u65E5\u5FD7\u76EE\u5F55
store_path_count=1 #\u9ED8\u8BA4\u5C31\u4E3A1\uFF0C\uFF08\u5B58\u50A8\u8DEF\u5F84\u4E2A\u6570\uFF0C\u9700\u8981\u548C store_path\u4E2A\u6570\u5339\u914D\uFF09
store_path0=/fastdfs/storage #\u8BBE\u7F6E\u5B58\u50A8\u8DEF\u5F84
tracker_server=192.168.162.193:22122
tracker_server=192.168.162.194:22122#tracker \u670D\u52A1\u7684IP\u548C\u7AEF\u53E3\uFF0C\u591A\u4E2A\u5C31\u6DFB\u52A0\u591A\u6761\u8BB0\u5F55
http.server_port=8888 #\u8BBE\u7F6Ehttp\u7AEF\u53E3\u53F7
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u521B\u5EFA\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -pv /fastdfs/storage
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u542F\u52A8 storage\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/etc/init.d/fdfs_storaged start
tail -f /fastdfs/storage/logs/storaged.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u67E5\u770B\u96C6\u7FA4\u72B6\u6001\uFF1A</p><p>\u5728\u4EFB\u610F\u4E00\u53F0storage\u4E3B\u673A\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/bin/fdfs_monitor /etc/fdfs/storage.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F00\u653E\u9632\u706B\u5899\u7AEF\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /etc/sysconfig/iptables
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u5BA2\u6237\u7AEF\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u6D4B\u8BD5" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u6D4B\u8BD5</h3><p>tracker\u53F0\u4E2D\u53EF\u4EE5\u968F\u610F\u627E\u4E00\u53F0\u505A\u5BA2\u6237\u7AEF\u6D4B\u8BD5\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># egrep -v &quot;^$|^#&quot; client.conf
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4FEE\u6539\u6587\u4EF6\u7684\u5185\u5BB9\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>base_path=/fastdfs/tracker #tracker\u670D\u52A1\u5668\u6587\u4EF6\u8DEF\u5F84
tracker_server=192.168.165.36:22122
tracker_server=192.168.165.37:22122
http.tracker_server_port=8888 # tracker \u670D\u52A1\u5668\u7684 http\u7AEF\u53E3\u53F7\uFF0C\u5FC5\u987B\u548Ctracker\u7684\u8BBE\u7F6E\u5BF9\u5E94\u8D77\u6765
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247\u5230\u670D\u52A1\u5668\u4E0A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/bin/fdfs_upload_file /etc/fdfs/client.conf /home/111/1.jpg 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6Efastdfs\u96C6\u7FA4\u652F\u6301http" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Efastdfs\u96C6\u7FA4\u652F\u6301http" aria-hidden="true">#</a> \u914D\u7F6EFastDFS\u96C6\u7FA4\u652F\u6301http</h3><p>\u652F\u6301http\u8BF7\u6C42\uFF0C\u5B89\u88C5nginx\uFF084\u4E2Astorage\u8282\u70B9\u5B89\u88C5nginx,\u9996\u5148\u5B89\u88C5fastdfs-nginx-module,fastdfs\u4E0Enginx\u96C6\u6210\u6A21\u5757\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/software/
unzip fastdfs-nginx-module.zip -d /usr/local/fast/
cd /usr/local/fast/fastdfs-nginx-module-master/src
yum -y install pcre pcre-devel
yum -y install zlib zlib-devel
yum -y install openssl openssl-devel
cd /usr/local/software
tar -zxf nginx-1.9.9.tar.gz -C /usr/local/
cd /usr/local/nginx-1.9.9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4FEE\u6539config\u7F16\u8BD1\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vim /usr/local/fast/fastdfs-nginx-module-master/src/config
ngx_addon_name=ngx_http_fastdfs_module

if test -n &quot;\${ngx_module_link}&quot;; then
    ngx_module_type=HTTP
    ngx_module_name=$ngx_addon_name
    ngx_module_incs=&quot;/usr/include/fastdfs /usr/include/fastcommon&quot;
    ngx_module_libs=&quot;-lfastcommon -lfdfsclient&quot;
    ngx_module_srcs=&quot;$ngx_addon_dir/ngx_http_fastdfs_module.c&quot;
    ngx_module_deps=
    CFLAGS=&quot;$CFLAGS -D_FILE_OFFSET_BITS=64 -DFDFS_OUTPUT_CHUNK_SIZE=&#39;256*1024&#39; -DFDFS_MOD_CONF_FILENAME=&#39;\\&quot;/etc/fdfs/mod_fastdfs.conf\\&quot;&#39;&quot;
    . auto/module
else
    HTTP_MODULES=&quot;$HTTP_MODULES ngx_http_fastdfs_module&quot;
    NGX_ADDON_SRCS=&quot;$NGX_ADDON_SRCS $ngx_addon_dir/ngx_http_fastdfs_module.c&quot;
    CORE_INCS=&quot;$CORE_INCS /usr/include/fastdfs /usr/include/fastcommon&quot;
    CORE_LIBS=&quot;$CORE_LIBS -lfastcommon -lfdfsclient&quot;
    CFLAGS=&quot;$CFLAGS -D_FILE_OFFSET_BITS=64 -DFDFS_OUTPUT_CHUNK_SIZE=&#39;256*1024&#39; -DFDFS_MOD_CONF_FILENAME=&#39;\\&quot;/etc/fdfs/mod_fastdfs.conf\\&quot;&#39;&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u7F16\u8BD1\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./configure --add-module=/usr/local/fast/fastdfs-nginx-module-master/src/
make -j 4
make install
cd /usr/local/fast/fastdfs-nginx-module-master/src/
cp mod_fastdfs.conf /etc/fdfs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4FEE\u6539mod_fastdfs.conf\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># egrep -v &quot;^$|^#&quot; /etc/fdfs/mod_fastdfs.conf
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><blockquote><p>\u6CE8\u610F:group1:192.168.165.38,39\u548Cgroup2:192.168.165.40,41</p></blockquote><p>\u590D\u5236FastDFS(fastdfs-5.11)\u91CC\u76842\u4E2A\u6587\u4EF6\u5230/etc/fdfs/\u76EE\u5F55\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/fast/fastdfs-5.11/conf/
cp http.conf mime.types /etc/fdfs/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u521B\u5EFA\u4E00\u4E2A\u8F6F\u94FE\u63A5\uFF0C\u5728/fastdfs/storage \u6587\u4EF6\u5B58\u50A8\u76EE\u5F55\u4E0B\u521B\u5EFA\u8F6F\u94FE\u63A5\uFF0C\u5C06\u5176\u94FE\u63A5\u5230\u5B9E\u9645\u5B58\u653E\u6570\u636E\u7684\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ln -s /fastdfs/storage/data/ /fastdfs/storage/data/M00
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539nginx\u914D\u7F6E\u6587\u4EF6\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat /usr/local/nginx/conf/nginx.conf

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

    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><p>\u542F\u52A8nginx</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u4F20\u56FE\u7247\uFF0C\u7136\u540E\u8BBF\u95EE\u6D4B\u8BD5</p><h3 id="tracker-server-\u4E0A\u5B89\u88C5-nginx\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#tracker-server-\u4E0A\u5B89\u88C5-nginx\u7F13\u5B58" aria-hidden="true">#</a> tracker server \u4E0A\u5B89\u88C5 nginx\u7F13\u5B58</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxf ngx_cache_purge-2.3.tar.gz -C /usr/local/fast/
yum -y install pcre pcre-devel
yum -y install zlib zlib-devel
yum -y install openssl openssl-devel
cd /usr/local/software
tar -xvf nginx-1.16.0.tar.gz -C /usr/local/
cd /usr/local/nginx-1.16.0/
./configure --add-module=/usr/local/fast/ngx_cache_purge-2.3
make -j 4
make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u521B\u5EFA\u7F13\u5B58\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -pv /fastdfs/cache/nginx/proxy_cache
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539nginx\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /usr/local/nginx/conf/nginx.conf

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

    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    server_tokens off;
    gzip on;
    gzip_disable &quot;MSIE [1-6]\\.&quot;;
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><p>\u542F\u52A8nginx</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u4F20\u56FE\u7247\uFF0C\u8BBF\u95EE\u6D4B\u8BD5</p><h3 id="keepalived\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#keepalived\u5B89\u88C5" aria-hidden="true">#</a> keepalived\u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /etc/keepalived/keepalived.conf 
! Configuration File for keepalived

global_defs {
    router_id LVS_DEVEL
}

vrrp_script chk_nginx {
    script &quot;/etc/keepalived/chk_nginx.sh&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><blockquote><p>\u51C6\u5907\uFF1A\u53E6\u4E00\u53F0\u7684state\u6539\u4E3ABACKUP\uFF0Cpriority\u6539\u4E3A\u5C0F\u4E8E100\u7684\u503C</p></blockquote><p>\u914D\u7F6E\u5065\u5EB7\u68C0\u67E5\u811A\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /etc/keepalived/chk_nginx.sh 
#!/bin/bash
#
# check nginx status

A=$(ps -C nginx --no-header |wc -l)
if [[ \${A} -eq 0 ]];then
  /usr/local/nginx/sbin/nginx
  sleep 3
  if [ $(ps -C nginx --no-header |wc -l) -eq 0 ];then
    local message=&quot;$(date) &#39;:nginx is not healthy, try to killall keepalived&#39;&quot;
    echo \${message} &gt;&gt; /etc/keepalived/keepalived.log
    systemctl stop keepalived.service
  fi
fi

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8D4B\u4E88\u6267\u884C\u6743\u9650\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chomd +x /etc/keepalived/chk_nginx.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6DFB\u52A0\u9632\u706B\u5899\u89C4\u5219</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat /etc/sysconfig/iptables
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u542F\u52A8\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7528vip\u8BBF\u95EE\u6D4B\u8BD5</p><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p>`,98),m={href:"https://www.cnblogs.com/NGames/archive/2019/06/23/11065282.html",target:"_blank",rel:"noopener noreferrer"},o=i("https://www.cnblogs.com/NGames/archive/2019/06/23/11065282.html"),d=n("h3",{id:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1);function _(g,f){const s=a("ExternalLinkIcon");return c(),r(p,null,[u,n("blockquote",null,[n("p",null,[n("a",m,[o,l(s)])])]),d],64)}var x=e(b,[["render",_],["__file","fastdfs-install.html.vue"]]);export{x as default};
