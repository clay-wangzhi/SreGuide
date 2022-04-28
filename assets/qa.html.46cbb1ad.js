import{_ as s,d as n}from"./app.e298a435.js";const a={},e=n(`<h1 id="_13-mysql\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_13-mysql\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 13 MySQL\u5E38\u89C1\u95EE\u9898</h1><h2 id="\u4E3B\u5E93\u5F02\u5E38-\u4ECE\u5E93\u624B\u52A8\u5207\u6362\u4E3A\u4E3B\u5E93\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u5E93\u5F02\u5E38-\u4ECE\u5E93\u624B\u52A8\u5207\u6362\u4E3A\u4E3B\u5E93\u65B9\u6848" aria-hidden="true">#</a> \u4E3B\u5E93\u5F02\u5E38\uFF0C\u4ECE\u5E93\u624B\u52A8\u5207\u6362\u4E3A\u4E3B\u5E93\u65B9\u6848</h2><p>1.\u767B\u5F55\u4ECE\u670D\u52A1\u5668\uFF0C\u786E\u8BA4\u4ECE\u670D\u52A1\u5668\u5DF2\u7ECF\u5B8C\u6210\u6240\u6709\u540C\u6B65\u64CD\u4F5C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; stop slave io_thread  
mysql&gt; show processlist 
\u76F4\u5230\u770B\u5230\u72B6\u6001\u90FD\u4E3A\uFF1Axxx has read all relay log \u8868\u793A\u66F4\u65B0\u90FD\u6267\u884C\u5B8C\u6BD5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>2.\u505C\u6B62\u4ECE\u670D\u52A1\u5668slave\u670D\u52A1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; stop slave
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.\u5C06\u4ECE\u670D\u52A1\u5668\u5207\u6362\u4E3A\u4E3B\u670D\u52A1\u5668\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; reset master 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B8C\u6210\u5207\u6362</p><p>4.\u6388\u6743\u5185\u7F51\u5176\u4ED6\u673A\u5668\u6709\u5199\u5165\u7B49\u6743\u9650(\u5982\u679C\u6CA1\u6709\u6743\u9650\u7684\u8BDD)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; SELECT Host,User FROM mysql.user;
mysql&gt; GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;192.168.1.%&#39; IDENTIFIED BY &#39;123456&#39;  WITH GRANT OPTION;
mysql&gt; FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>5.\u4FEE\u6539\u5176\u4ED6\u673A\u5668hosts\u6216\u5E94\u7528\u5185\u8FDE\u63A5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vi /etc/hosts
192.168.1.106 db-001
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Mysql\u5E38\u89C1\u7684\u51E0\u4E2A\u9519\u8BEF\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><h2 id="mysql-dns\u53CD\u89E3-skip-name-resolve" tabindex="-1"><a class="header-anchor" href="#mysql-dns\u53CD\u89E3-skip-name-resolve" aria-hidden="true">#</a> mysql DNS\u53CD\u89E3\uFF1Askip-name-resolve</h2><p>\u9519\u8BEF\u65E5\u5FD7\u6709\u7C7B\u4F3C\u8B66\u544A\uFF1A</p><ol><li><p>120119 16:26:04 [Warning] IP address &#39;192.168.1.10&#39; could not be resolved: Name or service not known</p></li><li><p>120119 16:26:04 [Warning] IP address &#39;192.168.1.14&#39; could not be resolved: Name or service not known</p></li><li><p>120119 16:26:04 [Warning] IP address &#39;192.168.1.17&#39; could not be resolved: Name or service not known</p></li></ol><p>\u901A\u8FC7show processlist\u53D1\u73B0\u5927\u91CF\u7C7B\u4F3C\u5982\u4E0B\u7684\u8FDE\u63A5\uFF1A</p><ol><li><p>|592|unauthenticated user|192.168.1.10:35320|NULL|Connect| |login|NULL|</p></li><li><p>|593|unauthenticated user|192.168.1.14:35321|NULL|Connect| |login|NULL|</p></li><li><p>|594|unauthenticated user|192.168.1.17:35322|NULL|Connect| |login|NULL|</p></li></ol><p>skip-name-resolve \u53C2\u6570\u7684\u4F5C\u7528\uFF1A\u4E0D\u518D\u8FDB\u884C\u53CD\u89E3\u6790\uFF08ip\u4E0D\u53CD\u89E3\u6210\u57DF\u540D\uFF09\uFF0C\u8FD9\u6837\u53EF\u4EE5\u52A0\u5FEB\u6570\u636E\u5E93\u7684\u53CD\u5E94\u65F6\u95F4\u3002 \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u6DFB\u52A0\u5E76\u9700\u8981\u91CD\u542F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[mysqld] 
skip-name-resolve
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E00\u952E\u5B89\u88C5mysql\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u952E\u5B89\u88C5mysql\u811A\u672C" aria-hidden="true">#</a> \u4E00\u952E\u5B89\u88C5mysql\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>


<span class="token comment"># Notes: install mysql5.6 on centos</span>
<span class="token comment">#</span>
<span class="token assign-left variable">mysql_install_dir</span><span class="token operator">=</span>/opt/mysql                 <span class="token comment">#\u7A0B\u5E8F\u76EE\u5F55</span>
<span class="token assign-left variable">mysql_data_dir</span><span class="token operator">=</span>/opt/mysql/data                           <span class="token comment">#\u6570\u636E\u76EE\u5F55</span>
<span class="token assign-left variable">mysql_6_version</span><span class="token operator">=</span><span class="token number">5.6</span>.36                                    <span class="token comment">#\u66F4\u6539\u6587\u4EF6\u540D</span>
<span class="token assign-left variable">dbrootpwd</span><span class="token operator">=</span>1qazxsw2                                              <span class="token comment">#mysql\u5BC6\u7801</span>

<span class="token assign-left variable">Mem</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> -m <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/Mem:/{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">Swap</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> -m <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/Swap:/{print $2}&#39;</span><span class="token variable">\`</span></span>

<span class="token function-name function">Install_MySQL</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
yum -y <span class="token function">install</span> <span class="token function">make</span> gcc-c++ cmake bison-devel  ncurses-devel autoconf
<span class="token function">wget</span> http://mirrors.sohu.com/mysql/MySQL-5.6/mysql-<span class="token variable">\${mysql_6_version}</span>.tar.gz

<span class="token function">id</span> -u mysql <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">[</span> <span class="token variable">$?</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> -M -s /sbin/nologin mysql

<span class="token function">mkdir</span> -p <span class="token variable">$mysql_data_dir</span><span class="token punctuation">;</span><span class="token function">chown</span> mysql.mysql -R <span class="token variable">$mysql_data_dir</span>
<span class="token function">tar</span> zxf mysql-<span class="token variable">\${mysql_6_version}</span>.tar.gz
<span class="token builtin class-name">cd</span> mysql-<span class="token variable">$mysql_6_version</span>
<span class="token function">make</span> clean
<span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">&quot;<span class="token variable">$mysql_install_dir</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$mysql_install_dir</span>
cmake <span class="token builtin class-name">.</span> -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$mysql_install_dir</span> <span class="token punctuation">\\</span>
-DMYSQL_DATADIR<span class="token operator">=</span><span class="token variable">$mysql_data_dir</span> <span class="token punctuation">\\</span>
-DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\\</span>
-DWITH_INNOBASE_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-DWITH_PARTITION_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-DWITH_FEDERATED_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-DWITH_BLACKHOLE_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-DWITH_MYISAM_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-DWITH_INNOBASE_STORAGE_ENGINE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-DENABLED_LOCAL_INFILE<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-DENABLE_DTRACE<span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">\\</span>
-DEXTRA_CHARSETS<span class="token operator">=</span>all <span class="token punctuation">\\</span>
-DDEFAULT_CHARSET<span class="token operator">=</span>utf8mb4 <span class="token punctuation">\\</span>
-DDEFAULT_COLLATION<span class="token operator">=</span>utf8mb4_general_ci <span class="token punctuation">\\</span>
-DWITH_EMBEDDED_SERVER<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>

<span class="token function">make</span> -j <span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> processor /proc/cpuinfo <span class="token operator">|</span> <span class="token function">wc</span> -l<span class="token variable">\`</span></span>
<span class="token function">make</span> <span class="token function">install</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -d <span class="token string">&quot;<span class="token variable">$mysql_install_dir</span>/support-files&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${CSUCCESS}</span>MySQL install successfully! <span class="token variable">\${CEND}</span>&quot;</span>
    <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
    <span class="token function">rm</span> -rf mysql-<span class="token variable">$mysql_6_version</span>
<span class="token keyword">else</span>
    <span class="token function">rm</span> -rf <span class="token variable">$mysql_install_dir</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${CFAILURE}</span>MySQL install failed, Please contact the author! <span class="token variable">\${CEND}</span>&quot;</span>
    <span class="token function">kill</span> -9 <span class="token variable">$$</span>
<span class="token keyword">fi</span>

/bin/cp <span class="token variable">$mysql_install_dir</span>/support-files/mysql.server /etc/init.d/mysqld
<span class="token function">chmod</span> +x /etc/init.d/mysqld
<span class="token function">chkconfig</span> mysqld on
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token comment"># my.cf</span>
<span class="token punctuation">[</span> -d <span class="token string">&quot;/etc/mysql&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> /bin/mv /etc/mysql<span class="token punctuation">{</span>,_bk<span class="token punctuation">}</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/my.cnf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
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

init-connect = &#39;SET NAMES utf8mb4&#39;
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
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^thread_cache_size.*@thread_cache_size = 16@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^query_cache_size.*@query_cache_size = 16M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^myisam_sort_buffer_size.*@myisam_sort_buffer_size = 16M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^key_buffer_size.*@key_buffer_size = 16M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^innodb_buffer_pool_size.*@innodb_buffer_pool_size = 128M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^tmp_table_size.*@tmp_table_size = 32M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^table_open_cache.*@table_open_cache = 256@&#39;</span> /etc/my.cnf
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$Mem</span> -gt <span class="token number">2500</span> -a <span class="token variable">$Mem</span> -le <span class="token number">3500</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^thread_cache_size.*@thread_cache_size = 32@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^query_cache_size.*@query_cache_size = 32M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^myisam_sort_buffer_size.*@myisam_sort_buffer_size = 32M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^key_buffer_size.*@key_buffer_size = 64M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^innodb_buffer_pool_size.*@innodb_buffer_pool_size = 512M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^tmp_table_size.*@tmp_table_size = 64M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^table_open_cache.*@table_open_cache = 512@&#39;</span> /etc/my.cnf
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$Mem</span> -gt <span class="token number">3500</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^thread_cache_size.*@thread_cache_size = 64@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^query_cache_size.*@query_cache_size = 64M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^myisam_sort_buffer_size.*@myisam_sort_buffer_size = 64M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^key_buffer_size.*@key_buffer_size = 256M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^innodb_buffer_pool_size.*@innodb_buffer_pool_size = 1024M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^tmp_table_size.*@tmp_table_size = 128M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> -i <span class="token string">&#39;s@^table_open_cache.*@table_open_cache = 1024@&#39;</span> /etc/my.cnf
<span class="token keyword">fi</span>

<span class="token variable">$mysql_install_dir</span>/scripts/mysql_install_db --user<span class="token operator">=</span>mysql --basedir<span class="token operator">=</span><span class="token variable">$mysql_install_dir</span> --datadir<span class="token operator">=</span><span class="token variable">$mysql_data_dir</span>

<span class="token function">chown</span> mysql.mysql -R <span class="token variable">$mysql_data_dir</span>
<span class="token function">service</span> mysqld start
<span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> ^<span class="token string">&#39;export PATH=&#39;</span> /etc/profile<span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=<span class="token variable">$mysql_install_dir</span>/bin:\\<span class="token environment constant">$PATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> ^<span class="token string">&#39;export PATH=&#39;</span> /etc/profile<span class="token variable">\`</span></span>&quot;</span> -a -z <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> $mysql_install_dir /etc/profile<span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sed</span> -i <span class="token string">&quot;s@^export PATH=\\(.*\\)@export PATH=<span class="token variable">$mysql_install_dir</span>/bin:<span class="token entity" title="\\1">\\1</span>@&quot;</span> /etc/profile

<span class="token builtin class-name">.</span> /etc/profile

<span class="token variable">$mysql_install_dir</span>/bin/mysql -e <span class="token string">&quot;grant all privileges on *.* to root@&#39;127.0.0.1&#39; identified by <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$dbrootpwd</span><span class="token entity" title="\\&quot;">\\&quot;</span> with grant option;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -e <span class="token string">&quot;grant all privileges on *.* to root@&#39;localhost&#39; identified by <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$dbrootpwd</span><span class="token entity" title="\\&quot;">\\&quot;</span> with grant option;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">&quot;delete from mysql.user where Password=&#39;&#39;;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">&quot;delete from mysql.db where User=&#39;&#39;;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">&quot;delete from mysql.proxies_priv where Host!=&#39;localhost&#39;;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">&quot;drop database test;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql -uroot -p<span class="token variable">$dbrootpwd</span> -e <span class="token string">&quot;reset master;&quot;</span>
<span class="token function">rm</span> -rf /etc/ld.so.conf.d/<span class="token punctuation">{</span>mysql,mariadb,percona<span class="token punctuation">}</span>*.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$mysql_install_dir</span>/lib&quot;</span> <span class="token operator">&gt;</span> mysql.conf
/sbin/ldconfig
<span class="token function">service</span> mysqld stop
<span class="token punctuation">}</span>

Install_MySQL
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br></div></div>`,23);function p(l,t){return e}var c=s(a,[["render",p],["__file","qa.html.vue"]]);export{c as default};
