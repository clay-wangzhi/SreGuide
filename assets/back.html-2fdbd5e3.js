import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as a}from"./app-bdb4dd27.js";const d={},s=a(`<h1 id="_7-备份恢复" tabindex="-1"><a class="header-anchor" href="#_7-备份恢复" aria-hidden="true">#</a> 7 备份恢复</h1><p>对于任何数据库来说，备份都是非常重要的</p><p><strong>数据库复制不能取代备份的作用</strong></p><p>比如我们由于误操作，在主数据库上删除了一些数据，由于主从复制的时间很短，在发现时，从数据库上的数据可能也已经被删除了， 我们不能使用从数据库上的数据来恢复主数据库上的数据，只能通过备份进行误删除数据的恢复</p><h2 id="_1-备份的分类" tabindex="-1"><a class="header-anchor" href="#_1-备份的分类" aria-hidden="true">#</a> 1 备份的分类</h2><h3 id="_1-1-按备份的结果来分" tabindex="-1"><a class="header-anchor" href="#_1-1-按备份的结果来分" aria-hidden="true">#</a> 1.1 按备份的结果来分</h3><h4 id="_1-1-1-逻辑备份" tabindex="-1"><a class="header-anchor" href="#_1-1-1-逻辑备份" aria-hidden="true">#</a> 1.1.1 逻辑备份</h4><p>其备份结果为SQL语句，适合于所有存储引擎，恢复时需要较多时间，逻辑备份时，对于MyISAM存储引擎是需要进行锁表操作的，通过使用的mysqldump就是一种逻辑备份工具</p><h4 id="_1-1-2-物理备份" tabindex="-1"><a class="header-anchor" href="#_1-1-2-物理备份" aria-hidden="true">#</a> 1.1.2 物理备份</h4><p>是对数据库目录的拷贝，其备份结果的大小通常也与备份数据的数据目录大小相同，物理备份和恢复通常比逻辑备份要快，因为只需要对mysql数据目录拷贝即可，也正是因为这点，对于内存表只能备份其结构，无法备份数据(因为其数据存储在内存中，没有实际的物理数据文件)</p><p><strong>物理备份的方式</strong></p><p>进行物理备份，我们可以采用离线备份和在线备份的方式进行备份</p><ul><li>离线备份：需要对数据库进行停机，或对整个数据库进行锁定的情况下进行</li><li>在线备份：需要使用第三方工具，如 XtraBackup</li></ul><h3 id="_1-2-按备份的数据库的内容来分" tabindex="-1"><a class="header-anchor" href="#_1-2-按备份的数据库的内容来分" aria-hidden="true">#</a> 1.2 按备份的数据库的内容来分</h3><h4 id="_1-2-1-全量备份" tabindex="-1"><a class="header-anchor" href="#_1-2-1-全量备份" aria-hidden="true">#</a> 1.2.1 全量备份</h4><p>是对整个数据库的一个完整备份</p><h4 id="_1-2-2-增量备份" tabindex="-1"><a class="header-anchor" href="#_1-2-2-增量备份" aria-hidden="true">#</a> 1.2.2 增量备份</h4><p>是在上次全量或增量备份的基础上，对更改过的数据进行的备份</p><blockquote><p>注意：</p><p><strong>Mysql官方提供的mysqldump命令并不支持增量备份</strong></p><p>通常情况要使用mysqldump来进行增量备份的话，增量备份只能通过备份Mysql的二进制日志来实现</p><p>XtraBackup本身就提供了增量备份的功能，所以对于Innodb来说，使用XtraBackup进行备份更加安全高效</p><p>无论是使用XtraBackup还是Mysqldump 进行备份，要进行基于时间点的恢复时都需要利用Mysql的二进制日志，所以通常情况下我们需要对Mysql的二进制日志也进行备份</p></blockquote><h2 id="_2-使用mysqldump进行备份" tabindex="-1"><a class="header-anchor" href="#_2-使用mysqldump进行备份" aria-hidden="true">#</a> 2 使用mysqldump进行备份</h2><p>mysqldump 是mysql官方提供的逻辑备份工具，其备份结果是可读的SQL文件</p><p>mysqldump 支持多种语法</p><h3 id="_2-1-常用语法" tabindex="-1"><a class="header-anchor" href="#_2-1-常用语法" aria-hidden="true">#</a> 2.1 常用语法</h3><h4 id="_2-1-1-对一个数据库下的一个或多个表进行备份" tabindex="-1"><a class="header-anchor" href="#_2-1-1-对一个数据库下的一个或多个表进行备份" aria-hidden="true">#</a> 2.1.1 对一个数据库下的一个或多个表进行备份</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysqldump [OPTIONS] database [tables]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>备份多个表时，table直接用空格进行分隔</p><h4 id="_2-1-2-对指定的多个数据库进行备份" tabindex="-1"><a class="header-anchor" href="#_2-1-2-对指定的多个数据库进行备份" aria-hidden="true">#</a> 2.1.2 对指定的多个数据库进行备份</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysqldump [OPTIONS] --database [OPTIONS] DB1 [DB2..]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-1-3-对整个mysql实例下的所有数据库进行备份" tabindex="-1"><a class="header-anchor" href="#_2-1-3-对整个mysql实例下的所有数据库进行备份" aria-hidden="true">#</a> 2.1.3 对整个mysql实例下的所有数据库进行备份</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysqldump [OPTIONS] --all-database [OPTIONS]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-常用参数" tabindex="-1"><a class="header-anchor" href="#_2-2-常用参数" aria-hidden="true">#</a> 2.2 常用参数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-u，--user = name    #  指定备份时所使用的数据库账号
-p. --password [=name]    # 指定账号的密码
--single-transaction  # 使用此参数会在备份前先执行start transaction命令启动一个事务，以此来获得数据库备份时的数据的一致性，由于是通过事务保证数据的一致性，所以此参数只对Innodb存储引擎有效；当使用此参数进行备份时，要确保没有任何DDL语句在执行，因为Innodb的数据一致性的隔离级别并不能隔离DDL操作

-l, --lock-tables  # 如果没有使用非事务存储引擎，使用此参数保证备份时数据的一致性，在备份时会依次锁住每个数据库下的所有表，一般用于MyISAM存储引擎的备份，使用了此参数，在数据库备份时，只能进行读操作，由于此参数是锁住一个数据库下的所有表，备份时可以保证一个数据库下的所有表的数据一致性，但不能保证整个Mysql实例下的所有数据库的所有表的数据一致性，这也是为什么推荐使用Innodb引擎的一个原因

lock-tables 与 single-transaction 参数是互斥的，不能同时使用，所以数据库中如果混合使用了Innodb表和MyISAM表就只能使用lock-tables来进行备份了

-x, --lock-all-tables  # 此参数可以对整个Mysql实例下的所有数据库进行加锁，可以避免lock-tables不能保证整个Mysql实例下的所有数据库的所有表的数据一致性的问题，备份时同样会将数据库变为只读的状态

--master-data = [1/2]    # 无论是时间恢复还是新建slave实例都要用到这个参数，此参数有两个可选值，当值为1时，备份中只记录change_master语句，当值为2时，change_master语句会以注释的形式出现在备份文件中；默认值为1，且当使用了此参数时会忽略lock-tables参数，在备份时如果使用了此参数，但是没有使用single-transaction参数，则会自动使用lock-all-tables参数

如果我们要备份的数据库中包含了存储过程，触发器，数据库调度事件时，要备份这些数据库对象时，必须指定以下参数才能对相应数据库进行备份

-R, --routines     # 指定要备份的数据库中存在的的存储过程
--triggers     # 指定要备份的数据库中存在的的触发器
-E,--events      # 指定要备份的数据库中存在的的调度事件

除了以上参数，还有一些参数在备份时也会用到

--hex-blob    # 因为mysqldump备份导出的是文本文件，如果导出的数据中含有以上类型，在文本格式下，有些字符是不可见的，如果使用了此参数使，将会对数据库中所存在binary、varbinary、blob类型的数据以16进制的形式保存，就不会出现有些字符不可见的情况了
--tab =path    # 使用了此参数会在指定的路径下对数据库的每个表生成两个文件，一个文件用于存储表结构，另一个用于存储表中的数据
-w, --where = &#39;过滤条件&#39;    # 导出指定条件的数据（只支持单表数据条件导出）


 备份账号所需要的权限 ： SELECT, RELOAD, LOCK TABLES, REPLICATION CLIENT, SHOW VIEW, PROCESS
如果使用--tab参数则还需要：FILE权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-演示" tabindex="-1"><a class="header-anchor" href="#_2-3-演示" aria-hidden="true">#</a> 2.3 演示</h3><h4 id="_2-3-1-创建备份用户" tabindex="-1"><a class="header-anchor" href="#_2-3-1-创建备份用户" aria-hidden="true">#</a> 2.3.1 创建备份用户</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create user &#39;backup&#39;@&#39;localhost&#39; identified by &#39;123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-2-赋予用户备份权限" tabindex="-1"><a class="header-anchor" href="#_2-3-2-赋予用户备份权限" aria-hidden="true">#</a> 2.3.2 赋予用户备份权限</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grant select,reload,lock tables,replication client,show view,event,process on *.*  to &#39;backup&#39;@&#39;localhost&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-3-使用mysqldump进行全量备份" tabindex="-1"><a class="header-anchor" href="#_2-3-3-使用mysqldump进行全量备份" aria-hidden="true">#</a> 2.3.3 使用mysqldump进行全量备份</h4><h5 id="_2-3-3-1-备份某个数据库" tabindex="-1"><a class="header-anchor" href="#_2-3-3-1-备份某个数据库" aria-hidden="true">#</a> 2.3.3.1 备份某个数据库</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# mysqldump -ubackup -p --master-data=2 --single-transaction --routines --triggers --events mc_orderdb &gt; mc_orderdb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="如果遇到以下问题" tabindex="-1"><a class="header-anchor" href="#如果遇到以下问题" aria-hidden="true">#</a> 如果遇到以下问题</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysqldump: Error: Binlogging on server not active
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MySQL中二进制日志功能默认是关闭，去/etc/my.cnf 文件中加入下面配置，开启log_bin(数据库的操作日志)功能，然后重启mysql即可解决问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log_bin=mysql-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后使用 “systemctl start mysql” 重启服务器，报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Job for mysql.service failed because the control process exited with error code. See &quot;systemctl status mysql.service&quot; and &quot;journalctl -xe&quot; for details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h6><p>在设置 log-bin 的时候同时需要设置 server-id 变量，即在配置文件中添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]  
log-bin=mysql  
server-id=1  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再次重启即可</p><h6 id="补充知识" tabindex="-1"><a class="header-anchor" href="#补充知识" aria-hidden="true">#</a> 补充知识</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>装mysql,运行一段时间后，在mysql目录下出现一堆类似mysql-bin.000***，从mysql-bin.000001开始一直排列下来，而且占用了大量硬盘空间，高达几十个G. 对于这些超大空间占用量的文件我们应该怎么办呢?

那么mysql数据库文件夹中的mysql-bin.00001是什么文件？
mysql-bin.000001、mysql-bin.000002等文件是数据库的操作日志，例如UPDATE一个表，或者DELETE一些数据，即使该语句没有匹配的数据，这个命令也会存储到日志文件中，还包括每个语句执行的时间，也会记录进去的。

这些形如mysql-bin.00001的文件主要是用来做什么的呢?
1：数据恢复
如果你的数据库出问题了，而你之前有过备份，那么可以看日志文件，找出是哪个命令导致你的数据库出问题了，想办法挽回损失。

2：主从服务器之间同步数据 
主服务器上所有的操作都在记录日志中，从服务器可以根据该日志来进行，以确保两个同步。

如果不想要这些文件应该怎么做呢?
1：只有一个mysql服务器，那么可以简单的注释掉这个选项就行了。
vi /etc/my.cnf把里面的 log-bin 这一行注释掉，重启mysql服务即可。

2：如果你的环境是主从服务器，那么就需要做以下操作了。 
A：在每个从属服务器上，使用SHOW SLAVE STATUS来检查它正在读取哪个日志。
B：使用SHOW MASTER LOGS获得主服务器上的一系列日志。
C：在所有的从属服务器中判定最早的日志，这个是目标日志，如果所有的从属服务器是更新的，就是清单上的最后一个日志。
D：清理所有的日志，但是不包括目标日志，因为从服务器还要跟它同步。

简单地说,这些MySQL目录下的形如mysql-bin.000***的文件时MySQL的事务日志。

删除复制服务器已经拿走的binlog是安全的，一般来说网络状况好的时候，保留最新的那一个足以。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次执行之前的备份命令，即可成功被封mc_orderdb数据库下的所有表，我们可以查询一下备份的SQL文件中是否包含所有表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# grep &quot;CREATE TABLE&quot; mc_orderdb.sql
CREATE TABLE \`order_cart\` (
CREATE TABLE \`order_customer_addr\` (
CREATE TABLE \`order_detail\` (
CREATE TABLE \`order_master\` (
CREATE TABLE \`region_info\` (
CREATE TABLE \`shipping_info\` (
CREATE TABLE \`warehouse_info\` (
CREATE TABLE \`warehouse_proudct\` (
[root@localhost db_backup]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面结果可以看出我们的几个表都在其中</p><h5 id="_2-3-3-2-备份某个数据库下的某个表" tabindex="-1"><a class="header-anchor" href="#_2-3-3-2-备份某个数据库下的某个表" aria-hidden="true">#</a> 2.3.3.2 备份某个数据库下的某个表</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]#  mysqldump -ubackup -p --master-data=2 --single-transaction --routines --triggers --events mc_orderdb order_master &gt; order_master.sql
Enter password: 
[root@localhost db_backup]# ls
mc_orderdb.sql  order_master.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-3-3-3-备份mysql实例下的所有数据库" tabindex="-1"><a class="header-anchor" href="#_2-3-3-3-备份mysql实例下的所有数据库" aria-hidden="true">#</a> 2.3.3.3 备份MySQL实例下的所有数据库</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]#  mysqldump -ubackup -p --master-data=1 --single-transaction --routines --triggers --events  --all-databases &gt; mc.sql
Enter password: 
[root@localhost db_backup]# ls
mc_orderdb.sql  mc.sql  order_master.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于master-data的值设置为1，change master命令并没有被注释掉，如果我们使用这个命令进行恢复，change master命令就会被执行，在一些情况下可能会造成一些错误，所以建议使用时最好还是设置为2</p><p>可以通过下面的命令查看，备份文件中包含哪些数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# grep &quot;Current Database&quot; mc.sql
-- Current Database: \`mc_orderdb\`
-- Current Database: \`mc_productdb\`
-- Current Database: \`mc_userdb\`
-- Current Database: \`mysql\`
[root@localhost db_backup]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-4-使用-tab参数指定备份文件的位置" tabindex="-1"><a class="header-anchor" href="#_2-3-4-使用-tab参数指定备份文件的位置" aria-hidden="true">#</a> 2.3.4 使用-tab参数指定备份文件的位置</h4><p>首先在/tmp 目录下建立一个mc_orderdb目录用来存放指定的备份文件，之所以使用在此目录下建立目录，是因为使用--tab参数时，用户必须对目标目录有可写权限，而tmp目录对任何用户都有可写权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]#  mkdir -p /tmp/mc_orderdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在我们可以使用--tab参数指定备份路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# mysqldump -ubackup -p --master-data=2 --single-transaction --routines --triggers --events --tab=&quot;/tmp/mc_orderdb&quot; mc_orderdb 
Enter password: 

--
-- Position to start replication or point-in-time recovery from
--

-- CHANGE MASTER TO MASTER_LOG_FILE=&#39;mysql-bin.000001&#39;, MASTER_LOG_POS=154;
mysqldump: Got error: 1045: Access denied for user &#39;backup&#39;@&#39;localhost&#39; (using password: YES) when executing &#39;SELECT INTO OUTFILE&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，报错了，其实我们在这之前还缺少一步，由于用户需要有写文件的权限，所以我们还需要对备份用户赋予file权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; grant file on *.*  to &#39;backup&#39;@&#39;localhost&#39;;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再次执行上面的备份命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# mysqldump -ubackup -p --master-data=2 --single-transaction --routines --triggers --events --tab=&quot;/tmp/mc_orderdb&quot; mc_orderdb 
Enter password: 

--
-- Position to start replication or point-in-time recovery from
--

-- CHANGE MASTER TO MASTER_LOG_FILE=&#39;mysql-bin.000001&#39;, MASTER_LOG_POS=347;
mysqldump: Got error: 1290: The MySQL server is running with the --secure-file-priv option so it cannot execute this statement when executing &#39;SELECT INTO OUTFILE&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以很清楚地从提示看到是因为mysql服务启用了–secure-file-priv，所以才无法执行。 那么–secure-file-priv又是什么呢，应该如何解决才能是它可以备份呢？ --secure-file-priv=name ： Limit LOAD DATA, SELECT ... OUTFILE, and LOAD_FILE() to files within specified directory</p><p>可以看到secure-file-priv参数是用来限制LOAD DATA, SELECT … OUTFILE, and LOAD_FILE()传到哪个指定目录的。</p><p>当secure_file_priv的值为null ，表示限制mysqld 不允许导入|导出</p><p>当secure_file_priv的值为/tmp/ ，表示限制mysqld 的导入|导出只能发生在/tmp/目录下</p><p>当secure_file_priv的值没有具体值时，表示不对mysqld 的导入|导出做限制</p><p>查看数据库当前该参数的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; show global variables like &#39;%secure%&#39;; 
+--------------------------+-----------------------+
| Variable_name            | Value                 |
+--------------------------+-----------------------+
| require_secure_transport | OFF                   |
| secure_auth              | ON                    |
| secure_file_priv         | /var/lib/mysql-files/ |
+--------------------------+-----------------------+
3 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>清楚地看到secure_file_priv 的值是NULL，说明此时限制导入导出的 所以应该改变该参数 可是查看了mysql.cnf中居然没有对这个参数进行设定，就说明这个参数默认便是null 所以再mysql.cnf中的[mysqld]加入secure_file_priv =</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/home/mysql/data    # mysql数据存放的目录
socket=/var/lib/mysql/mysql.sock

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

log_bin=mysql-bin
server-id=1  
secure_file_priv =
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再重启mysql服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost tmp]# systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再查一下此时参数的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; show global variables like &#39;%secure%&#39;;
+--------------------------+-------+
| Variable_name            | Value |
+--------------------------+-------+
| require_secure_transport | OFF   |
| secure_auth              | ON    |
| secure_file_priv         |       |
+--------------------------+-------+
3 rows in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已经是我们要的结果 ，现在我们再次执行备份命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost tmp]# mysqldump -ubackup -p --master-data=2 --single-transaction --routines --triggers --events --tab=&quot;/tmp/mc_orderdb&quot; mc_orderdb 
Enter password: 

--
-- Position to start replication or point-in-time recovery from
--

-- CHANGE MASTER TO MASTER_LOG_FILE=&#39;mysql-bin.000002&#39;, MASTER_LOG_POS=154;
mysqldump: Got error: 1: Can&#39;t create/write to file &#39;/tmp/mc_orderdb/order_cart.txt&#39; (Errcode: 13 - Permission denied) when executing &#39;SELECT INTO OUTFILE&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果还是权限被拒绝，无法写入，我们可以查询一下目录mc_orderdb的权限，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost tmp]# ls -lh mc_orderdb/
total 4.0K
-rw-r--r-- 1 root root 1.9K Jan 10 10:51 order_cart.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，是root用户建立的目录，我们需要修改其所属用户为mysql用户，然后再次执行备份命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost tmp]#  chown mysql:mysql  mc_orderdb
[root@localhost tmp]# mysqldump -ubackup -p --master-data=2 --single-transaction --routines --triggers --events --tab=&quot;/tmp/mc_orderdb&quot; mc_orderdb 
Enter password: 

--
-- Position to start replication or point-in-time recovery from
--

-- CHANGE MASTER TO MASTER_LOG_FILE=&#39;mysql-bin.000002&#39;, MASTER_LOG_POS=154;

--
-- Dumping events for database &#39;mc_orderdb&#39;
--

--
-- Dumping routines for database &#39;mc_orderdb&#39;
--
[root@localhost tmp]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，修改成功后即可备份成功</p><p>进入该目录下会发现mc_orderdb数据库下的每个表都有两种文件，一种.sql结尾记录是表结构，一种是.txt结尾的表数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost tmp]# cd mc_orderdb/
[root@localhost mc_orderdb]# ls
order_cart.sql  order_customer_addr.sql  order_detail.sql  order_master.sql  region_info.sql  shipping_info.sql  warehouse_info.sql  warehouse_proudct.sql
order_cart.txt  order_customer_addr.txt  order_detail.txt  order_master.txt  region_info.txt  shipping_info.txt  warehouse_info.txt  warehouse_proudct.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-5-mysqldump如何使用全备where参数" tabindex="-1"><a class="header-anchor" href="#_2-3-5-mysqldump如何使用全备where参数" aria-hidden="true">#</a> 2.3.5 mysqldump如何使用全备where参数</h4><p><strong>使用场景</strong></p><p>假设我们要对订单id为1000到1050的主表进行修改，修改之前，我们需要先对数据进行备份，这里我们就可以使用where参数来完成此需求</p><p><strong>执行命令进行备份</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# mysqldump -ubackup -p --master-data=2 --single-transaction  --where &quot;order_id&gt;1000 and order_id&lt;1050&quot; mc_orderdb  order_master &gt; order_master_1000_1050.sql
Enter password: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看备份文件可以发现，订单id是从1001开始的</p><h3 id="_2-4-定义备份脚本" tabindex="-1"><a class="header-anchor" href="#_2-4-定义备份脚本" aria-hidden="true">#</a> 2.4 定义备份脚本</h3><p>在日程工作中我们不可能一直手工备份，所以我们需要将备份进行脚本话，然后使用计划任务去执行脚本</p><h4 id="_2-4-1-脚本文件" tabindex="-1"><a class="header-anchor" href="#_2-4-1-脚本文件" aria-hidden="true">#</a> 2.4.1 脚本文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
###############Basic parameters##########################
DAY=\`date +%Y%m%d\`    # 记录发生备份的当前日期
Environment=$(/sbin/ifconfig | grep &quot;inet&quot; | head -1 |grep -v &quot;127.0.0.1&quot; | awk &#39;{print $2;}&#39; )    # 当前主机的IP
USER=&quot;backup&quot;
PASSWD=&quot;123456&quot;
HostPort=&quot;3306&quot;
MYSQLBASE=&quot;/home/mysql/&quot;
DATADIR=&quot;/home/db_backup/\${DAY}&quot;    # 备份存放的目录（/home/db_backup目录下的以日期命名的子目录中）
MYSQL=\`/usr/bin/which mysql\`    # 定义mysql命令的目录
MYSQLDUMP=\`/usr/bin/which mysqldump\`    # 定义mysqldump命令的目录
mkdir -p \${DATADIR}    # 创建存储目录

# 定义备份函数，使用到上面定义的变量

Dump(){
 \${MYSQLDUMP} --master-data=2 --single-transaction  --routines --triggers --events -u\${USER} -p\${PASSWD} -P\${HostPort} \${database}  &gt; \${DATADIR}/\${Environment}-\${database}.sql
 cd \${DATADIR}
 gzip \${Environment}-\${database}.sql    # 对文件进行了压缩
}

# 利用for循环对当前服务器下的每一个数据库（排除了一些系统视图所在的数据库）分别来调用上面的Dump函数来进行备份

for db in \`echo &quot;SELECT schema_name FROM information_schema.schemata where schema_name not in (&#39;information_schema&#39;,&#39;sys&#39;,&#39;performance_schema&#39;)&quot; | \${MYSQL} -u\${USER} -p\${PASSWD} --skip-column-names\`
do
   database=\${db}
   Dump
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-执行脚本文件" tabindex="-1"><a class="header-anchor" href="#_2-4-2-执行脚本文件" aria-hidden="true">#</a> 2.4.2 执行脚本文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost home]# bash backup.sh 
mysql: [Warning] Using a password on the command line interface can be insecure.
mysqldump: [Warning] Using a password on the command line interface can be insecure.
mysqldump: [Warning] Using a password on the command line interface can be insecure.
mysqldump: [Warning] Using a password on the command line interface can be insecure.
mysqldump: [Warning] Using a password on the command line interface can be insecure.
[root@localhost home]# cd db_backup/
[root@localhost db_backup]# ls
20190110  mc_orderdb.sql  mc.sql  order_master_1000_1050.sql  order_master.sql
[root@localhost db_backup]# cd 20190110/
[root@localhost 20190110]# ls
172.17.0.1-mc_orderdb.sql.gz  172.17.0.1-mc_productdb.sql.gz  172.17.0.1-mc_userdb.sql.gz  172.17.0.1-mysql.sql.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到结果已备份，可以使用crontab命令定时执行此脚本</p><h2 id="_3-如何恢复mysqldump备份的数据库" tabindex="-1"><a class="header-anchor" href="#_3-如何恢复mysqldump备份的数据库" aria-hidden="true">#</a> 3 如何恢复mysqldump备份的数据库</h2><h3 id="_3-1-方法一" tabindex="-1"><a class="header-anchor" href="#_3-1-方法一" aria-hidden="true">#</a> 3.1 方法一</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql -u -p dbname &lt; backup.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-方法二" tabindex="-1"><a class="header-anchor" href="#_3-2-方法二" aria-hidden="true">#</a> 3.2 方法二</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt;  source /tmp/backup.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用mysqldump备份时，恢复的速度完全取决于MySQL实例执行SQL的速度和服务器的IO性能，并且恢复过程是单线程的，所以对于非常大的数据集来说，要恢复的话可能需要很长的时间</p><blockquote><p>备份恢复时，要先创建数据库</p></blockquote><h3 id="_3-3-演示" tabindex="-1"><a class="header-anchor" href="#_3-3-演示" aria-hidden="true">#</a> 3.3 演示：</h3><p>把刚才的全备数据恢复到bak数据库中</p><p>创建bak_orderdb数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# mysql -uroot -p -e&quot;create database bak_orderdb&quot;
Enter password: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将mc_orderdb备份的数据恢复到bak数据库中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]#  mysql -uroot -p bak_orderdb &lt; mc_orderdb.sql
Enter password: 
[root@localhost db_backup]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检验恢复结果的正确性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; SELECT COUNT(*) FROM mc_orderdb.order_master;
+----------+
| COUNT(*) |
+----------+
|    10010 |
+----------+
1 row in set (0.00 sec)

mysql&gt; SELECT COUNT(*) FROM bak_orderdb.order_master;
+----------+
| COUNT(*) |
+----------+
|    10010 |
+----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-1-模拟误操作并恢复数据" tabindex="-1"><a class="header-anchor" href="#_3-3-1-模拟误操作并恢复数据" aria-hidden="true">#</a> 3.3.1 模拟误操作并恢复数据</h4><p>假设我们现在不小心删除了mc_orderdb下的order_master中的10条数据，我们现在需要通过刚刚恢复的备份数据库把这10条数据恢复回来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; DELETE FROM mc_orderdb.order_master LIMIT 10;
Query OK, 10 rows affected (0.01 sec)

mysql&gt;  SELECT COUNT(*) FROM mc_orderdb.order_master;
+----------+
| COUNT(*) |
+----------+
|    10000 |
+----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先查出被误删的数据 <code>SELECT a.* FROM bak_orderdb.order_master a LEFT JOIN mc_orderdb.order_master b ON a.order_id=b.order_id WHERE b.order_id IS NULL;</code> 然后执行insert语句将查出的数据插入回去</p><p>完整语句为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO mc_orderdb.order_master(
order_id,order_sn,customer_id,shipping_user,province,city,district,address,
payment_method,order_money,district_money,shipping_money,payment_money,
shipping_comp_name,shipping_sn,create_time,shipping_time,pay_time,receive_time,
order_status,order_point,invoice_title,modified_time)
SELECT a.* FROM bak_orderdb.order_master a 
LEFT JOIN mc_orderdb.order_master b ON a.order_id=b.order_id
WHERE b.order_id IS NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; INSERT INTO mc_orderdb.order_master(
    -&gt; order_id,order_sn,customer_id,shipping_user,province,city,district,address,
    -&gt; payment_method,order_money,district_money,shipping_money,payment_money,
    -&gt; shipping_comp_name,shipping_sn,create_time,shipping_time,pay_time,receive_time,
    -&gt; order_status,order_point,invoice_title,modified_time)
    -&gt; SELECT a.* FROM bak_orderdb.order_master a 
    -&gt; LEFT JOIN mc_orderdb.order_master b ON a.order_id=b.order_id
    -&gt; WHERE b.order_id IS NULL;
Query OK, 10 rows affected (0.03 sec)
Records: 10  Duplicates: 0  Warnings: 0

mysql&gt; SELECT COUNT(*) FROM mc_orderdb.order_master;
+----------+
| COUNT(*) |
+----------+
|    10010 |
+----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于一些静态型数据我们可以这样进行，但是对于一些时刻有数据在往表里写的数据还原，就不能使用这种方式了</p><p>对于生产环境中，时刻有数据写入的表如何进行数据恢复呢？</p><h4 id="_3-3-2-mysqldump单表备份恢复-使用了-tab参数备份的结果集" tabindex="-1"><a class="header-anchor" href="#_3-3-2-mysqldump单表备份恢复-使用了-tab参数备份的结果集" aria-hidden="true">#</a> 3.3.2 mysqldump单表备份恢复（使用了--tab参数备份的结果集）</h4><p>需要进入mysql客户端中</p><p>先恢复表结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt;  source /tmp/mc_orderdb/region_info.sql;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再导入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; load data infile &#39;/tmp/mc_orderdb/region_info.txt&#39; info table region_info;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-如何进行指定时间点的恢复" tabindex="-1"><a class="header-anchor" href="#_3-4-如何进行指定时间点的恢复" aria-hidden="true">#</a> 3.4 如何进行指定时间点的恢复</h3><p>进行某一时间点的数据恢复，恢复到误操作的时间</p><h4 id="_3-4-1-先决条件" tabindex="-1"><a class="header-anchor" href="#_3-4-1-先决条件" aria-hidden="true">#</a> 3.4.1 先决条件</h4><p>具有指定时间点前的mysqldump的全备 具有全备到指定时间点的mysql二进制日志</p><h4 id="_3-4-2-演示" tabindex="-1"><a class="header-anchor" href="#_3-4-2-演示" aria-hidden="true">#</a> 3.4.2 演示</h4><p>首先我们需要有个数据库的全备，此处我们对mc_orderdb 数据库进行全备</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# mysqldump -ubackup -p --master-data=2 --single-transaction --routines --triggers --events mc_orderdb &gt; mc_orderdb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们模拟一下生产环境中对数据库的操作，这样才能看到时间点恢复的效果</p><p>我们到mc_orderdb数据库中新建一个统计表 t, uid列是用户id,cnt 是用户的总消费金额，将统计结果插入表t中后，模拟误操作，删除表t中的100行数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; use mc_orderdb
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql&gt; create table t(id int auto_increment not null,uid int,cnt decimal(8,2),primary key (id));
Query OK, 0 rows affected (0.02 sec)

mysql&gt; insert into t(uid,cnt) select customer_id,sum(order_money) from order_master group by customer_id;
Query OK, 6314 rows affected (0.05 sec)
Records: 6314  Duplicates: 0  Warnings: 0

mysql&gt; select count(*) from t;
+----------+
| count(*) |
+----------+
|     6314 |
+----------+
1 row in set (0.00 sec)

mysql&gt; delete from t limit 100;
Query OK, 100 rows affected (0.01 sec)

mysql&gt; select count(*) from t;
+----------+
| count(*) |
+----------+
|     6214 |
+----------+
1 row in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先恢复一个最近的全备，进行全量数据恢复</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# mysql -uroot -p mc_orderdb &lt; mc_orderdb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后查看mc_orderdb.sql文件中change master命令中</p><p>在进行这个全备时Mysql二进制日志的文件名（MASTER_LOG_FILE），以及时间点（MASTER_LOG_POS）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CHANGE MASTER TO MASTER_LOG_FILE=&#39;mysql-bin.000001&#39;, MASTER_LOG_POS=154;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此处文件名为mysql-bin.000001，日志时间点为154;</p><p>下面我们要恢复这个时间点（154）之后到第一次删除数据之前的数据</p><p>要找到这个时间点（154）之后到第一次删除数据之前的数据</p><p>查看二进制日志，进行分析</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# cd /home/mysql
[root@localhost mysql]# mysqlbinlog --base64-output=decode-rows -vv --start-position=154 --database=mc_orderdb mysql-bin.000001| grep -B3 DELETE | more
#190110 13:44:54 server id 1  end_log_pos 83285 CRC32 0xf679d195    Table_map: \`mc_orderdb\`.\`t\` mapped to number 119
# at 83285
#190110 13:44:54 server id 1  end_log_pos 84620 CRC32 0xa3408e6c    Delete_rows: table id 119 flags: STMT_END_F
### DELETE FROM \`mc_orderdb\`.\`t\`
--
###   @1=1 /* INT meta=0 nullable=0 is_null=0 */
###   @2=1 /* INT meta=0 nullable=1 is_null=0 */
###   @3=1042.34 /* DECIMAL(8,2) meta=2050 nullable=1 is_null=0 */
### DELETE FROM \`mc_orderdb\`.\`t\`
--
###   @1=2 /* INT meta=0 nullable=0 is_null=0 */
###   @2=3 /* INT meta=0 nullable=1 is_null=0 */
###   @3=803.37 /* DECIMAL(8,2) meta=2050 nullable=1 is_null=0 */

...省略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从中可以看到刚刚的二进制日志中的第一个DELETE，在它之前的日志结束点为84620</p><p>所以我们需要恢复的是154 到84620 之间，且数据库为mc_orderdb ，日志所在文件名 为mysql-bin.000001的数据</p><p>我们通过mysqlbinlog 将这些数据导出来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost mysql]# mysqlbinlog --start-position=154 --stop-position=84620 --database=mc_orderdb mysql-bin.000001 &gt; mc_order_diff.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将数据导入恢复</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost mysql]# mysql -uroot -p mc_orderdb &lt; mc_order_diff.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-实时二进制日志备份" tabindex="-1"><a class="header-anchor" href="#_4-实时二进制日志备份" aria-hidden="true">#</a> 4 实时二进制日志备份</h2><p>Mysql5.6版本之后，可以实时备份Binlog(二进制日志)</p><p>要使用这个功能，我们需要进行以下配置 首先新建一个用户，这个用户要有replication slave 权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt;  grant replication slave on *.* to &#39;repl&#39;@&#39;localhost&#39; identified by &#39;123456&#39;;
Query OK, 0 rows affected, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>建立一个存储备份的二进制日志文件的目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p binlog_backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后在这个目录下，执行以下命令，就可以实时的进行二进制日志的备份了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost binlog_bak]# mysqlbinlog --raw --read-from-remote-server --stop-never --host localhost --port 3306 -u repl -p123456 mysql-bin.000001
mysqlbinlog: [Warning] Using a password on the command line interface can be insecure.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>raw：代表这个命令是输出的是raw格式的二进制日志 read-from-remote-server： 从mysql服务器上读取这个日志 stop-never：备份的这个进程会持续在后台运行 最后的是指定要备份的二进制文件的名称</p><blockquote><p>备份的二进制文件的名称，必须为最新的二进制备份文件</p></blockquote><p>此命令执行后这个终端会一直执行这个命令 现在打开另外一个终端，进入备份的目录进行查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost mysql]# cd /home/binlog_bak/
[root@localhost binlog_bak]# ls
mysql-bin.000001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到日志已经备份成功 进入mysql命令行，刷新日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; flush logs;
Query OK, 0 rows affected (0.01 sec)

mysql&gt; show binary logs;
+------------------+-----------+
| Log_name         | File_size |
+------------------+-----------+
| mysql-bin.000001 |   3560467 |
| mysql-bin.000002 |       154 |
+------------------+-----------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在有两个日志，我们再回到备份目录进行查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost binlog_bak]# ls
mysql-bin.000001  mysql-bin.000002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到最新的日志也已实时备份</p><h2 id="_5-xtrabackup" tabindex="-1"><a class="header-anchor" href="#_5-xtrabackup" aria-hidden="true">#</a> 5 xtrabackup</h2><h3 id="_5-1-xtrabackup介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-xtrabackup介绍" aria-hidden="true">#</a> 5.1 xtrabackup介绍</h3><p>xtrabackup 物理备份工具，用于在线备份innodb存储引擎的表</p><p>在所有表全是innodb存储引擎表的情况下： xtrabackup 可以保证在备份过程中，不影响表的读写操作 在最初的时候，xtrabackup 本身只支持对innodb存储引擎表的备份，且只会备份数据文件，不会备份表的结构 innobackupex 是对xtrabackup 的插件，提供了备份表结构及其他配置信息的功能，并支持MyISAM表的备份，但也会锁表</p><p>因为在当前的mysql版本下，还有一些系统表使用的是MyISAM存储引擎，所以一般情况下使用的是innobackupex 脚本进行备份的</p><h3 id="_5-2-安装xtrabackup" tabindex="-1"><a class="header-anchor" href="#_5-2-安装xtrabackup" aria-hidden="true">#</a> 5.2 安装xtrabackup</h3><p>下载地址：https://www.percona.com/downloads/XtraBackup/ 可以在该网址下载源码包或者rpm包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install libev
yum -y install perl-Digest-*
wget https://www.percona.com/downloads/Percona-XtraBackup-LATEST/Percona-XtraBackup-8.0.9/binary/redhat/7/x86_64/percona-xtrabackup-80-8.0.9-1.el7.x86_64.rpm
rpm -ivh percona-xtrabackup-80-8.0.9-1.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-利用innobackupex-进行全备" tabindex="-1"><a class="header-anchor" href="#_5-3-利用innobackupex-进行全备" aria-hidden="true">#</a> 5.3 利用innobackupex 进行全备</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex --user=backup --password=123456 --parallel=2 /home/db_backup/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost home]# innobackupex --user=backup --password=123456 --parallel=2 /home/db_backup/
xtrabackup: recognized server arguments: --datadir=/home/mysql --log_bin=mysql-bin --server-id=1 --parallel=2 
xtrabackup: recognized client arguments: --datadir=home/mysql --log_bin=mysql-bin --server-id=1 --parallel=2 
190110 15:15:30 innobackupex: Starting the backup operation

IMPORTANT: Please check that the backup run completes successfully.
           At the end of a successful backup run innobackupex
           prints &quot;completed OK!&quot;.

... 省略

190110 15:15:37 [00] Writing /home/db_backup/2019-01-10_15-15-30/xtrabackup_info
190110 15:15:37 [00]        ...done
xtrabackup: Transaction log of lsn (79088947) to (79088956) was copied.
190110 15:15:37 completed OK!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当看到completed OK!代表备份已完成</p><p>和mysqldump单线程备份不同，我们可以通过parallel参数指定备份的线程数 /home/db_backup/ 是我们指定的备份文件的存储目录</p><p>xtrabackup 会已当前时间在目标目录中生成一个子目录用来存放当前的备份文件</p><p>我们进入目录中查看一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# ls
20190110  2019-01-10_15-15-30  mc_orderdb.sql  mc.sql  order_master_1000_1050.sql  order_master.sql
[root@localhost db_backup]# cd 2019-01-10_15-15-30/
[root@localhost 2019-01-10_15-15-30]# ls
backup-my.cnf  ib_buffer_pool  mc_orderdb    mc_userdb  performance_schema  xtrabackup_binlog_info  xtrabackup_info
bak_orderdb    ibdata1         mc_productdb  mysql      sys                 xtrabackup_checkpoints  xtrabackup_logfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>xtrabackup_checkpoints ：备份类型（如完全或增量）、备份状态（如是否已经为prepared状态）和LSN(日志序列号)范围信息；</p><p>每个InnoDB页(通常为16k大小)都会包含一个日志序列号，即LSN。LSN是整个数据库系统的系统版本号，每个页面相关的LSN能够表明此页面最近是如何发生改变的。</p></li><li><p>xtrabackup_binlog_info： mysql服务器当前正在使用的二进制日志文件及至备份这一刻为止二进制日志事件的位置。</p></li><li><p>xtrabackup_info： xtrabackup工具在备份时记录的使用工具及数据库信息</p></li><li><p>backup-my.cnf —— 备份命令用到的配置选项信息；</p></li><li><p>xtrabackup_logfile —— xtrabackup记录innodb事物日志的信息</p></li></ul><p>与原数据文件目录相比，少了ib_logfile0等日志文件</p><p>xtrabackup_binlog_info 比较重要，其中记录了备份的日志名和日志点，相当于mysqldump中设置master-data参数的作用</p><p>如果我们不想以时间戳的形式自动生成子目录，我们可以通过指定--no-timestamp参数来实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex --user=backup --password=123456 --parallel=2  /home/db_backup/2019-01-10 --no-timestamp
[root@localhost db_backup]#  innobackupex --user=backup --password=123456 --parallel=2  /home/db_backup/2019-01-10 --no-timestamp
[root@localhost db_backup]# ls
20190110  2019-01-10  2019-01-10_15-15-30  mc_orderdb.sql  mc.sql  order_master_1000_1050.sql  order_master.sql
[root@localhost db_backup]# cd 2019-01-10
[root@localhost 2019-01-10]# ls
backup-my.cnf  ib_buffer_pool  mc_orderdb    mc_userdb  performance_schema  xtrabackup_binlog_info  xtrabackup_info
bak_orderdb    ibdata1         mc_productdb  mysql      sys                 xtrabackup_checkpoints  xtrabackup_logfile
[root@localhost 2019-01-10]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-利用innobackupex-进行全备的恢复" tabindex="-1"><a class="header-anchor" href="#_5-4-利用innobackupex-进行全备的恢复" aria-hidden="true">#</a> 5.4 利用innobackupex 进行全备的恢复</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex  --apply-log /path/to/BACKUP-DIR
mv /path/to/BACKUP-DIR /home/mysql/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>准备完全备份</strong></p><pre><code>     一般情况下，在备份完成后，数据尚且不能用于恢复操作，因为备份的数据中可能会包含尚未提交的事务或已经提交但尚未同步至数据文件中的事务。因此，此时数据文件仍处于不一致状态。“准备”的主要作用正是通过回滚未提交的事务及同步已经提交的事务至数据文件也使得数据文件处于一致性状态。
</code></pre><p>innobakupex命令的--apply-log选项可用于实现上述功能。如下面的命令：</p><p>进行数据库恢复之前，我们必须把备份中产生的备份集 进行应用，此处我们使用的是备份文件的目录伪2019-01-10</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]# innobackupex --apply-log /home/db_backup/2019-01-10
[root@localhost db_backup]# cd 2019-01-10
[root@localhost 2019-01-10]# ls
backup-my.cnf   ib_logfile0  mc_productdb        sys                           xtrabackup_info
bak_orderdb     ib_logfile1  mc_userdb           xtrabackup_binlog_info        xtrabackup_logfile
ib_buffer_pool  ibtmp1       mysql               xtrabackup_binlog_pos_innodb  xtrabackup_master_key_id
ibdata1         mc_orderdb   performance_schema  xtrabackup_checkpoints
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，使用了上面的命令后，备份集中多出了之前缺少的ib_logfile0等文件。</p><p>​ 在实现“准备”的过程中，innobackupex通常还可以使用--use-memory选项来指定其可以使用的内存的大小，默认通常为100M。如果有足够的内存可用，可以多划分一些内存给prepare的过程，以提高其完成速度。</p><p>使用xtrabackup进行数据库恢复时，我们必须对数据库实例进行重启 先停用mysql服务</p><p>然后将原数据库文件所在的文件夹重命名为data_bak,然后将此时的 2019-01-10文件夹移动到data_bak所在的文件夹，并重命名为data，即覆盖了原来的文件</p><p>然后 chown -R mysql:mysql data 对文件夹修改所属用户</p><p>最后重启mysql服务即可</p><h3 id="_5-5-利用innobackupex-进行增量备份" tabindex="-1"><a class="header-anchor" href="#_5-5-利用innobackupex-进行增量备份" aria-hidden="true">#</a> 5.5 利用innobackupex 进行增量备份</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex --user=backup --password=123456 /home/db_backup    # 先进行全备

innobackupex --user=backup --password=123456 --incremental  /home/db_backup/  --incremental-basedir=/home/db_backup/2019-01-10/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>incremental ：表示我们要进行的是一个全备， 指定全备的目录 incremental-basedir ：指定增量备份所依赖的数据基础的备份目录，这个增量备份所依赖的上一个全备</p><h4 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h4><p>先进行全备</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex --user=backup --password=123456 /home/db_backup  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 /home/db_backup 目录下生产了一个新的全备子目录 2019-01-10_16-19-37</p><p>再依赖上个全量备份进行增量备份</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex --user=backup --password=123456 --incremental  /home/db_backup/  --incremental-basedir=/home/db_backup/2019-01-10_16-19-37/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时在 /home/db_backup 目录下生产了一个增量备分的子目录2019-01-10_16-22-09 增量备份会把自上一个全备后的数据变更记录下来</p><p>然后再进行一次增量备份，此时的命令和前面基本相同，只是所基于的增量备份的数据目录要变成上次增量备份生成的目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex --user=backup --password=123456 --incremental  /home/db_backup/  --incremental-basedir=/home/db_backup/2019-01-10_16-22-09/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，第二次增量备份的生成的目录名为2019-01-10_16-24-09</p><h3 id="_5-6-利用innobackupex-进行增量恢复" tabindex="-1"><a class="header-anchor" href="#_5-6-利用innobackupex-进行增量恢复" aria-hidden="true">#</a> 5.6 利用innobackupex 进行增量恢复</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex  --apply-log  --redo-only 全备目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们要循环的在多次增量备份中应用上面步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> innobackupex  --apply-log  --redo-only 全备目录  --incremental-dir=第一次增量目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所有增量备份的都应有了上面的命令后，就可以像全备一样，在全备目录上再进行崩溃恢复的过程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    innobackupex  --apply-log /path/to/BACKUP-DIR
    mv /path/to/BACKUP-DIR /home/mysql/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后和全备一样，要用全备目录替换mysql数据库目录</p><h4 id="演示-1" tabindex="-1"><a class="header-anchor" href="#演示-1" aria-hidden="true">#</a> 演示</h4><p>下面演示只恢复到第一次备份</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost db_backup]#   innobackupex  --apply-log  --redo-only    /home/db_backup/2019-01-10_16-19-37

[root@localhost db_backup]#   innobackupex  --apply-log  --redo-only    /home/db_backup/2019-01-10_16-19-37  --incremental-basedir=/home/db_backup/2019-01-10_16-22-09

[root@localhost db_backup]#   innobackupex  --apply-log   /home/db_backup/2019-01-10_16-19-37 

[root@localhost db_backup]#  mv 2019-01-10_16-19-37  /home/mysql

[root@localhost db_backup]#  cd  /home/mysql

[root@localhost mysql]#  systemctl stop  mysqld

[root@localhost mysql]#  mv 2019-01-10_16-19-37 data

[root@localhost mysql]# chown -R mysql:mysql data

[root@localhost mysql]#  systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-备份压缩和流" tabindex="-1"><a class="header-anchor" href="#_5-7-备份压缩和流" aria-hidden="true">#</a> 5.7 备份压缩和流</h3><p>Stream模式下，Xtrabackup的STDOUT可以指定tar或者xbstream格式输出。 &#39; 流允许，其他程序过滤备份输出，提供更大的灵活存储backup。 使用流特性，需要指--stream选项 $ innobackupex --stream=tar /tmp innobackupex会用子程序启动xtrabackup --log-stream 定向到临时文件，然后使用tar把所有数据文件steam到STDOUT。<br> 当压缩启动，xtrabackup压缩所有输出数据，但是元数据和非innodb文件不能被压缩。现在唯一支持的压缩算法是quicklz。会生产qpress归档格式的文件。</p><h4 id="演示-2" tabindex="-1"><a class="header-anchor" href="#演示-2" aria-hidden="true">#</a> 演示</h4><p>使用tar备份</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex --user=root --password=123 --stream=tar /backup/ &gt; /backup/out.tar

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用tar备份到其他服务器： 依赖密钥传输数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex --user=root --password=123 --stream=tar ./ | ssh root@192.168.10.200 &quot;cat - &gt; /tmp/backup.tar&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提取tar流，需要加i参数，否则容易数据丢失</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -xizf backup.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以压缩流：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>innobackupex --user=root --password=123 --socket=/tmp/mysql.sock --stream=tar ./ | gzip - &gt; /backup/back.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>xtrabckup还有部分备份和窄备份功能 略</em></p><blockquote><p>参考文章：</p><p>https://www.cnblogs.com/huchong/p/10238515.html#_label1</p><p>https://www.linuxidc.com/Linux/2019-01/156363.htm</p></blockquote>`,250),l=[s];function r(t,c){return i(),n("div",null,l)}const m=e(d,[["render",r],["__file","back.html.vue"]]);export{m as default};
