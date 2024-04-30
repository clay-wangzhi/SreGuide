import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as i,e as s}from"./app-22100c49.js";const l={},t=s(`<h1 id="_13-mysql常见问题" tabindex="-1"><a class="header-anchor" href="#_13-mysql常见问题" aria-hidden="true">#</a> 13 MySQL常见问题</h1><h2 id="主库异常-从库手动切换为主库方案" tabindex="-1"><a class="header-anchor" href="#主库异常-从库手动切换为主库方案" aria-hidden="true">#</a> 主库异常，从库手动切换为主库方案</h2><p>1.登录从服务器，确认从服务器已经完成所有同步操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; stop slave io_thread  
mysql&gt; show processlist 
直到看到状态都为：xxx has read all relay log 表示更新都执行完毕
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.停止从服务器slave服务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; stop slave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.将从服务器切换为主服务器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; reset master 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完成切换</p><p>4.授权内网其他机器有写入等权限(如果没有权限的话)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; SELECT Host,User FROM mysql.user;
mysql&gt; GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;192.168.1.%&#39; IDENTIFIED BY &#39;123456&#39;  WITH GRANT OPTION;
mysql&gt; FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.修改其他机器hosts或应用内连接</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vi /etc/hosts
192.168.1.106 db-001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Mysql常见的几个错误问题及解决方法：</p>`,14),p=s(`<h2 id="mysql-dns反解-skip-name-resolve" tabindex="-1"><a class="header-anchor" href="#mysql-dns反解-skip-name-resolve" aria-hidden="true">#</a> mysql DNS反解：skip-name-resolve</h2><p>错误日志有类似警告：</p><ol><li><p>120119 16:26:04 [Warning] IP address &#39;192.168.1.10&#39; could not be resolved: Name or service not known</p></li><li><p>120119 16:26:04 [Warning] IP address &#39;192.168.1.14&#39; could not be resolved: Name or service not known</p></li><li><p>120119 16:26:04 [Warning] IP address &#39;192.168.1.17&#39; could not be resolved: Name or service not known</p></li></ol><p>通过show processlist发现大量类似如下的连接：</p><ol><li><p>|592|unauthenticated user|192.168.1.10:35320|NULL|Connect| |login|NULL|</p></li><li><p>|593|unauthenticated user|192.168.1.14:35321|NULL|Connect| |login|NULL|</p></li><li><p>|594|unauthenticated user|192.168.1.17:35322|NULL|Connect| |login|NULL|</p></li></ol><p>skip-name-resolve 参数的作用：不再进行反解析（ip不反解成域名），这样可以加快数据库的反应时间。 修改配置文件添加并需要重启：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld] 
skip-name-resolve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一键安装mysql脚本" tabindex="-1"><a class="header-anchor" href="#一键安装mysql脚本" aria-hidden="true">#</a> 一键安装mysql脚本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>


<span class="token comment"># Notes: install mysql5.6 on centos</span>
<span class="token comment">#</span>
<span class="token assign-left variable">mysql_install_dir</span><span class="token operator">=</span>/opt/mysql                 <span class="token comment">#程序目录</span>
<span class="token assign-left variable">mysql_data_dir</span><span class="token operator">=</span>/opt/mysql/data                           <span class="token comment">#数据目录</span>
<span class="token assign-left variable">mysql_6_version</span><span class="token operator">=</span><span class="token number">5.6</span>.36                                    <span class="token comment">#更改文件名</span>
<span class="token assign-left variable">dbrootpwd</span><span class="token operator">=</span>1qazxsw2                                              <span class="token comment">#mysql密码</span>

<span class="token assign-left variable">Mem</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/Mem:/{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">Swap</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/Swap:/{print $2}&#39;</span><span class="token variable">\`</span></span>

<span class="token function-name function">Install_MySQL</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">make</span> gcc-c++ cmake bison-devel  ncurses-devel autoconf
<span class="token function">wget</span> http://mirrors.sohu.com/mysql/MySQL-5.6/mysql-<span class="token variable">\${mysql_6_version}</span>.tar.gz

<span class="token function">id</span> <span class="token parameter variable">-u</span> mysql <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-s</span> /sbin/nologin mysql

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$mysql_data_dir</span><span class="token punctuation">;</span><span class="token function">chown</span> mysql.mysql <span class="token parameter variable">-R</span> <span class="token variable">$mysql_data_dir</span>
<span class="token function">tar</span> zxf mysql-<span class="token variable">\${mysql_6_version}</span>.tar.gz
<span class="token builtin class-name">cd</span> mysql-<span class="token variable">$mysql_6_version</span>
<span class="token function">make</span> clean
<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$mysql_install_dir</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$mysql_install_dir</span>
cmake <span class="token builtin class-name">.</span> <span class="token parameter variable">-DCMAKE_INSTALL_PREFIX</span><span class="token operator">=</span><span class="token variable">$mysql_install_dir</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DMYSQL_DATADIR</span><span class="token operator">=</span><span class="token variable">$mysql_data_dir</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DSYSCONFDIR</span><span class="token operator">=</span>/etc <span class="token punctuation">\\</span>
<span class="token parameter variable">-DWITH_INNOBASE_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DWITH_PARTITION_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DWITH_FEDERATED_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DWITH_BLACKHOLE_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DWITH_MYISAM_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DWITH_INNOBASE_STORAGE_ENGINE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DENABLED_LOCAL_INFILE</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DENABLE_DTRACE</span><span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-DEXTRA_CHARSETS</span><span class="token operator">=</span>all <span class="token punctuation">\\</span>
<span class="token parameter variable">-DDEFAULT_CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token punctuation">\\</span>
<span class="token parameter variable">-DDEFAULT_COLLATION</span><span class="token operator">=</span>utf8mb4_general_ci <span class="token punctuation">\\</span>
<span class="token parameter variable">-DWITH_EMBEDDED_SERVER</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>

<span class="token function">make</span> <span class="token parameter variable">-j</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> processor /proc/cpuinfo <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token function">make</span> <span class="token function">install</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$mysql_install_dir</span>/support-files&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${CSUCCESS}</span>MySQL install successfully! <span class="token variable">\${CEND}</span>&quot;</span>
    <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
    <span class="token function">rm</span> <span class="token parameter variable">-rf</span> mysql-<span class="token variable">$mysql_6_version</span>
<span class="token keyword">else</span>
    <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$mysql_install_dir</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${CFAILURE}</span>MySQL install failed, Please contact the author! <span class="token variable">\${CEND}</span>&quot;</span>
    <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$$</span>
<span class="token keyword">fi</span>

/bin/cp <span class="token variable">$mysql_install_dir</span>/support-files/mysql.server /etc/init.d/mysqld
<span class="token function">chmod</span> +x /etc/init.d/mysqld
<span class="token function">chkconfig</span> mysqld on
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token comment"># my.cf</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;/etc/mysql&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> /bin/mv /etc/mysql<span class="token punctuation">{</span>,_bk<span class="token punctuation">}</span>
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

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$Mem</span> <span class="token parameter variable">-gt</span> <span class="token number">1500</span> <span class="token parameter variable">-a</span> <span class="token variable">$Mem</span> <span class="token parameter variable">-le</span> <span class="token number">2500</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^thread_cache_size.*@thread_cache_size = 16@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^query_cache_size.*@query_cache_size = 16M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^myisam_sort_buffer_size.*@myisam_sort_buffer_size = 16M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^key_buffer_size.*@key_buffer_size = 16M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^innodb_buffer_pool_size.*@innodb_buffer_pool_size = 128M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^tmp_table_size.*@tmp_table_size = 32M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^table_open_cache.*@table_open_cache = 256@&#39;</span> /etc/my.cnf
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$Mem</span> <span class="token parameter variable">-gt</span> <span class="token number">2500</span> <span class="token parameter variable">-a</span> <span class="token variable">$Mem</span> <span class="token parameter variable">-le</span> <span class="token number">3500</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^thread_cache_size.*@thread_cache_size = 32@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^query_cache_size.*@query_cache_size = 32M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^myisam_sort_buffer_size.*@myisam_sort_buffer_size = 32M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^key_buffer_size.*@key_buffer_size = 64M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^innodb_buffer_pool_size.*@innodb_buffer_pool_size = 512M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^tmp_table_size.*@tmp_table_size = 64M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^table_open_cache.*@table_open_cache = 512@&#39;</span> /etc/my.cnf
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$Mem</span> <span class="token parameter variable">-gt</span> <span class="token number">3500</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^thread_cache_size.*@thread_cache_size = 64@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^query_cache_size.*@query_cache_size = 64M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^myisam_sort_buffer_size.*@myisam_sort_buffer_size = 64M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^key_buffer_size.*@key_buffer_size = 256M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^innodb_buffer_pool_size.*@innodb_buffer_pool_size = 1024M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^tmp_table_size.*@tmp_table_size = 128M@&#39;</span> /etc/my.cnf
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s@^table_open_cache.*@table_open_cache = 1024@&#39;</span> /etc/my.cnf
<span class="token keyword">fi</span>

<span class="token variable">$mysql_install_dir</span>/scripts/mysql_install_db <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token parameter variable">--basedir</span><span class="token operator">=</span><span class="token variable">$mysql_install_dir</span> <span class="token parameter variable">--datadir</span><span class="token operator">=</span><span class="token variable">$mysql_data_dir</span>

<span class="token function">chown</span> mysql.mysql <span class="token parameter variable">-R</span> <span class="token variable">$mysql_data_dir</span>
<span class="token function">service</span> mysqld start
<span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> ^<span class="token string">&#39;export PATH=&#39;</span> /etc/profile<span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=<span class="token variable">$mysql_install_dir</span>/bin:\\<span class="token environment constant">$PATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> ^<span class="token string">&#39;export PATH=&#39;</span> /etc/profile<span class="token variable">\`</span></span>&quot;</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> $mysql_install_dir /etc/profile<span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s@^export PATH=\\(.*\\)@export PATH=<span class="token variable">$mysql_install_dir</span>/bin:<span class="token entity" title="\\1">\\1</span>@&quot;</span> /etc/profile

<span class="token builtin class-name">.</span> /etc/profile

<span class="token variable">$mysql_install_dir</span>/bin/mysql <span class="token parameter variable">-e</span> <span class="token string">&quot;grant all privileges on *.* to root@&#39;127.0.0.1&#39; identified by <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$dbrootpwd</span><span class="token entity" title="\\&quot;">\\&quot;</span> with grant option;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql <span class="token parameter variable">-e</span> <span class="token string">&quot;grant all privileges on *.* to root@&#39;localhost&#39; identified by <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$dbrootpwd</span><span class="token entity" title="\\&quot;">\\&quot;</span> with grant option;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$dbrootpwd</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;delete from mysql.user where Password=&#39;&#39;;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$dbrootpwd</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;delete from mysql.db where User=&#39;&#39;;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$dbrootpwd</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;delete from mysql.proxies_priv where Host!=&#39;localhost&#39;;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$dbrootpwd</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;drop database test;&quot;</span>
<span class="token variable">$mysql_install_dir</span>/bin/mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$dbrootpwd</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;reset master;&quot;</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/ld.so.conf.d/<span class="token punctuation">{</span>mysql,mariadb,percona<span class="token punctuation">}</span>*.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$mysql_install_dir</span>/lib&quot;</span> <span class="token operator">&gt;</span> mysql.conf
/sbin/ldconfig
<span class="token function">service</span> mysqld stop
<span class="token punctuation">}</span>

Install_MySQL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function r(c,o){return a(),e("div",null,[t,i("more"),p])}const m=n(l,[["render",r],["__file","qa.html.vue"]]);export{m as default};
