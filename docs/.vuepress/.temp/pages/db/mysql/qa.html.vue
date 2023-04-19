<template><h1 id="_13-mysql常见问题" tabindex="-1"><a class="header-anchor" href="#_13-mysql常见问题" aria-hidden="true">#</a> 13 MySQL常见问题</h1>
<h2 id="主库异常-从库手动切换为主库方案" tabindex="-1"><a class="header-anchor" href="#主库异常-从库手动切换为主库方案" aria-hidden="true">#</a> 主库异常，从库手动切换为主库方案</h2>
<p>1.登录从服务器，确认从服务器已经完成所有同步操作：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql> stop slave io_thread  
mysql> show processlist 
直到看到状态都为：xxx has read all relay log 表示更新都执行完毕
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>2.停止从服务器slave服务：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql> stop slave
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.将从服务器切换为主服务器：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql> reset master 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>完成切换</p>
<p>4.授权内网其他机器有写入等权限(如果没有权限的话)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql> SELECT Host,User FROM mysql.user;
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.1.%' IDENTIFIED BY '123456'  WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>5.修改其他机器hosts或应用内连接</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># vi /etc/hosts
192.168.1.106 db-001
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Mysql常见的几个错误问题及解决方法：</p>
<!--more-->
<h2 id="mysql-dns反解-skip-name-resolve" tabindex="-1"><a class="header-anchor" href="#mysql-dns反解-skip-name-resolve" aria-hidden="true">#</a> mysql DNS反解：skip-name-resolve</h2>
<p>错误日志有类似警告：</p>
<ol>
<li>
<p>120119 16:26:04 [Warning] IP address '192.168.1.10' could not be resolved: Name or service not known</p>
</li>
<li>
<p>120119 16:26:04 [Warning] IP address '192.168.1.14' could not be resolved: Name or service not known</p>
</li>
<li>
<p>120119 16:26:04 [Warning] IP address '192.168.1.17' could not be resolved: Name or service not known</p>
</li>
</ol>
<p>通过show processlist发现大量类似如下的连接：</p>
<ol>
<li>
<p>|592|unauthenticated user|192.168.1.10:35320|NULL|Connect| |login|NULL|</p>
</li>
<li>
<p>|593|unauthenticated user|192.168.1.14:35321|NULL|Connect| |login|NULL|</p>
</li>
<li>
<p>|594|unauthenticated user|192.168.1.17:35322|NULL|Connect| |login|NULL|</p>
</li>
</ol>
<p>skip-name-resolve 参数的作用：不再进行反解析（ip不反解成域名），这样可以加快数据库的反应时间。 修改配置文件添加并需要重启：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[mysqld] 
skip-name-resolve
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="一键安装mysql脚本" tabindex="-1"><a class="header-anchor" href="#一键安装mysql脚本" aria-hidden="true">#</a> 一键安装mysql脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>


<span class="token comment"># Notes: install mysql5.6 on centos</span>
<span class="token comment">#</span>
<span class="token assign-left variable">mysql_install_dir</span><span class="token operator">=</span>/opt/mysql                 <span class="token comment">#程序目录</span>
<span class="token assign-left variable">mysql_data_dir</span><span class="token operator">=</span>/opt/mysql/data                           <span class="token comment">#数据目录</span>
<span class="token assign-left variable">mysql_6_version</span><span class="token operator">=</span><span class="token number">5.6</span>.36                                    <span class="token comment">#更改文件名</span>
<span class="token assign-left variable">dbrootpwd</span><span class="token operator">=</span>1qazxsw2                                              <span class="token comment">#mysql密码</span>

<span class="token assign-left variable">Mem</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">free</span> -m <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'/Mem:/{print $2}'</span><span class="token variable">`</span></span>
<span class="token assign-left variable">Swap</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">free</span> -m <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'/Swap:/{print $2}'</span><span class="token variable">`</span></span>

<span class="token function-name function">Install_MySQL</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
yum -y <span class="token function">install</span> <span class="token function">make</span> gcc-c++ cmake bison-devel  ncurses-devel autoconf
<span class="token function">wget</span> http://mirrors.sohu.com/mysql/MySQL-5.6/mysql-<span class="token variable">${mysql_6_version}</span>.tar.gz

<span class="token function">id</span> -u mysql <span class="token operator">></span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">[</span> <span class="token variable">$?</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> -M -s /sbin/nologin mysql

<span class="token function">mkdir</span> -p <span class="token variable">$mysql_data_dir</span><span class="token punctuation">;</span><span class="token function">chown</span> mysql.mysql -R <span class="token variable">$mysql_data_dir</span>
<span class="token function">tar</span> zxf mysql-<span class="token variable">${mysql_6_version}</span>.tar.gz
<span class="token builtin class-name">cd</span> mysql-<span class="token variable">$mysql_6_version</span>
<span class="token function">make</span> clean
<span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">"<span class="token variable">$mysql_install_dir</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$mysql_install_dir</span>
cmake <span class="token builtin class-name">.</span> -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$mysql_install_dir</span> <span class="token punctuation">\</span>
-DMYSQL_DATADIR<span class="token operator">=</span><span class="token variable">$mysql_data_dir</span> <span class="token punctuation">\</span>
-DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\</span>
-DWITH_INNOBASE_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
-DWITH_PARTITION_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
-DWITH_FEDERATED_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
-DWITH_BLACKHOLE_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
-DWITH_MYISAM_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
-DWITH_INNOBASE_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
-DENABLED_LOCAL_INFILE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>
-DENABLE_DTRACE<span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">\</span>
-DEXTRA_CHARSETS<span class="token operator">=</span>all <span class="token punctuation">\</span>
-DDEFAULT_CHARSET<span class="token operator">=</span>utf8mb4 <span class="token punctuation">\</span>
-DDEFAULT_COLLATION<span class="token operator">=</span>utf8mb4_general_ci <span class="token punctuation">\</span>
-DWITH_EMBEDDED_SERVER<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\</span>

<span class="token function">make</span> -j <span class="token variable"><span class="token variable">`</span><span class="token function">grep</span> processor /proc/cpuinfo <span class="token operator">|</span> <span class="token function">wc</span> -l<span class="token variable">`</span></span>
<span class="token function">make</span> <span class="token function">install</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -d <span class="token string">"<span class="token variable">$mysql_install_dir</span>/support-files"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${CSUCCESS}</span>MySQL install successfully! <span class="token variable">${CEND}</span>"</span>
    <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
    <span class="token function">rm</span> -rf mysql-<span class="token variable">$mysql_6_version</span>
<span class="token keyword">else</span>
    <span class="token function">rm</span> -rf <span class="token variable">$mysql_install_dir</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${CFAILURE}</span>MySQL install failed, Please contact the author! <span class="token variable">${CEND}</span>"</span>
    <span class="token function">kill</span> -9 <span class="token variable">$$</span>
<span class="token keyword">fi</span>

/bin/cp <span class="token variable">$mysql_install_dir</span>/support-files/mysql.server /etc/init.d/mysqld
<span class="token function">chmod</span> +x /etc/init.d/mysqld
<span class="token function">chkconfig</span> mysqld on
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token comment"># my.cf</span>
<span class="token punctuation">[</span> -d <span class="token string">"/etc/mysql"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> /bin/mv /etc/mysql<span class="token punctuation">{</span>,_bk<span class="token punctuation">}</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/my.cnf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[client]
port = 3306
socket = /tmp/mysql.sock
default-character-set = utf8

[mysqld]
port = 3306
socket = /tmp/mysql.sock

basedir = <span class="token variable">$mysql_install_dir</span>
datadir = <span class="token variable">$mysql_data_dir</span>
pid-file = <span class="token variable">$mysql_data_dir</span>/mysql.pid
user = mysql
bind-address = 0.0.0.0
server-id = 1

init-connect = 'SET NAMES utf8mb4'
character-set-server = utf8mb4

skip-name-resolve
skip-external-locking
#skip-networking
back_log = 300

max_connections = 1000
max_connect_errors = 6000
open_files_limit = 65535
table_open_cache = 128
max_allowed_packet = 4M
binlog_cache_size = 1M
max_heap_table_size = 8M
tmp_table_size = 16M

read_buffer_size = 2M
read_rnd_buffer_size = 8M
sort_buffer_size = 8M
join_buffer_size = 8M
key_buffer_size = 4M
thread_cache_size = 8
query_cache_type = 1
query_cache_size = 8M
query_cache_limit = 2M
ft_min_word_len = 4
log_bin = mysql-bin
binlog_format = mixed
expire_logs_days = 10
log_error = <span class="token variable">$mysql_data_dir</span>/mysql-error.log
slow_query_log = 1
long_query_time = 1
#slow_query_log_file = <span class="token variable">$mysql_data_dir</span>/mysql-slow.log
performance_schema = 0
explicit_defaults_for_timestamp

#lower_case_table_names = 1
default_storage_engine = InnoDB
#default-storage-engine = MyISAM
innodb_file_per_table = 1
innodb_open_files = 500
innodb_buffer_pool_size = 64M
innodb_write_io_threads = 4
innodb_read_io_threads = 4
innodb_thread_concurrency = 0
innodb_purge_threads = 1
innodb_flush_log_at_trx_commit = 2
innodb_log_buffer_size = 2M
innodb_log_file_size = 32M
innodb_log_files_in_group = 3
innodb_max_dirty_pages_pct = 90
innodb_lock_wait_timeout = 120

bulk_insert_buffer_size = 8M
myisam_sort_buffer_size = 8M
myisam_max_sort_file_size = 10G
myisam_repair_threads = 1

interactive_timeout = 28800
wait_timeout = 28800

[mysqldump]
quick
max_allowed_packet = 16M

[myisamchk]
key_buffer_size = 8M
sort_buffer_size = 8M
read_buffer = 4M
write_buffer = 4M

EOF</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$Mem</span> -gt <span class="token number">1500</span> -a <span class="token variable">$Mem</span> -le <span class="token number">2500</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">sed</span> -i <span class="token string">'s@^thread_cache_size.*@thread_cache_size = 16@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^query_cache_size.*@query_cache_size = 16M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^myisam_sort_buffer_size.*@myisam_sort_buffer_size = 16M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^key_buffer_size.*@key_buffer_size = 16M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^innodb_buffer_pool_size.*@innodb_buffer_pool_size = 128M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^tmp_table_size.*@tmp_table_size = 32M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^table_open_cache.*@table_open_cache = 256@'</span> /etc/my.cnf
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$Mem</span> -gt <span class="token number">2500</span> -a <span class="token variable">$Mem</span> -le <span class="token number">3500</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">sed</span> -i <span class="token string">'s@^thread_cache_size.*@thread_cache_size = 32@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^query_cache_size.*@query_cache_size = 32M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^myisam_sort_buffer_size.*@myisam_sort_buffer_size = 32M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^key_buffer_size.*@key_buffer_size = 64M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^innodb_buffer_pool_size.*@innodb_buffer_pool_size = 512M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^tmp_table_size.*@tmp_table_size = 64M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^table_open_cache.*@table_open_cache = 512@'</span> /etc/my.cnf
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$Mem</span> -gt <span class="token number">3500</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">sed</span> -i <span class="token string">'s@^thread_cache_size.*@thread_cache_size = 64@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^query_cache_size.*@query_cache_size = 64M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^myisam_sort_buffer_size.*@myisam_sort_buffer_size = 64M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^key_buffer_size.*@key_buffer_size = 256M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^innodb_buffer_pool_size.*@innodb_buffer_pool_size = 1024M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^tmp_table_size.*@tmp_table_size = 128M@'</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">'s@^table_open_cache.*@table_open_cache = 1024@'</span> /etc/my.cnf
<span class="token keyword">fi</span>

<span class="token variable">$mysql_install_dir</span>/scripts/mysql_install_db --user<span class="token operator">=</span>mysql --basedir<span class="token operator">=</span><span class="token variable">$mysql_install_dir</span> --datadir<span class="token operator">=</span><span class="token variable">$mysql_data_dir</span>

<span class="token function">chown</span> mysql.mysql -R <span class="token variable">$mysql_data_dir</span>
<span class="token function">service</span> mysqld start
<span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">grep</span> ^<span class="token string">'export PATH='</span> /etc/profile<span class="token variable">`</span></span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"export PATH=<span class="token variable">$mysql_install_dir</span>/bin:\<span class="token environment constant">$PATH</span>"</span> <span class="token operator">>></span> /etc/profile
<span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">grep</span> ^<span class="token string">'export PATH='</span> /etc/profile<span class="token variable">`</span></span>"</span> -a -z <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">grep</span> $mysql_install_dir /etc/profile<span class="token variable">`</span></span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sed</span> -i <span class="token string">"s@^export PATH=\(.*\)@export PATH=<span class="token variable">$mysql_install_dir</span>/bin:<span class="token entity" title="\1">\1</span>@"</span> /etc/profile

<span class="token builtin class-name">.</span> /etc/profile

<span class="token variable">$mysql_install_dir</span>/bin/mysql -e <span class="token string">"grant all privileges on *.* to root@'127.0.0.1' identified by <span class="token entity" title="\&quot;">\"</span><span class="token variable">$dbrootpwd</span><span class="token entity" title="\&quot;">\"</span> with grant option;"</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -e <span class="token string">"grant all privileges on *.* to root@'localhost' identified by <span class="token entity" title="\&quot;">\"</span><span class="token variable">$dbrootpwd</span><span class="token entity" title="\&quot;">\"</span> with grant option;"</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">"delete from mysql.user where Password='';"</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">"delete from mysql.db where User='';"</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">"delete from mysql.proxies_priv where Host!='localhost';"</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">"drop database test;"</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">"reset master;"</span>
<span class="token function">rm</span> -rf /etc/ld.so.conf.d/<span class="token punctuation">{</span>mysql,mariadb,percona<span class="token punctuation">}</span>*.conf
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$mysql_install_dir</span>/lib"</span> <span class="token operator">></span> mysql.conf
/sbin/ldconfig
<span class="token function">service</span> mysqld stop
<span class="token punctuation">}</span>

Install_MySQL
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br></div></div></template>
