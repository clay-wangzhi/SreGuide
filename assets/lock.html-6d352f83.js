import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-efb515d7.js";const l={},d=s(`<h1 id="_12-mysql锁等待" tabindex="-1"><a class="header-anchor" href="#_12-mysql锁等待" aria-hidden="true">#</a> 12 MySQL锁等待</h1><h2 id="_1-锁等待模拟" tabindex="-1"><a class="header-anchor" href="#_1-锁等待模拟" aria-hidden="true">#</a> 1 锁等待模拟</h2><p>创建数据库</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create database clay_test default charset utf8 collate utf8_general_ci;
use clay_test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建表</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table t1(id int, name varchar(20)) engine=innodb default charset=utf8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插入数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>insert into t1 values(1, &#39;clay&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取消自动提交</p><p>则当执行语句commit或者rollback执行提交事务或者回滚</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>set autocommit=0;
Query OK, 0 rows affected (0.00 sec)

mysql&gt; show variables like &#39;autocommit&#39;;
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | OFF   |
+---------------+-------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新第一条插入的数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>update t1 set name=&#39;hello&#39; where id=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新开一个终端，也更新第一条数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>update t1 set name=&#39;world&#39; where id=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-监控锁状态" tabindex="-1"><a class="header-anchor" href="#_2-监控锁状态" aria-hidden="true">#</a> 2 监控锁状态</h2><h3 id="_2-1-查看有无锁等待" tabindex="-1"><a class="header-anchor" href="#_2-1-查看有无锁等待" aria-hidden="true">#</a> 2.1 查看有无锁等待</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show status like &#39;%innodb_row_lock%&#39;;
+-------------------------------+---------+
| Variable_name                 | Value   |
+-------------------------------+---------+
| Innodb_row_lock_current_waits | 1       |
| Innodb_row_lock_time          | 2270662 |
| Innodb_row_lock_time_avg      | 44522   |
| Innodb_row_lock_time_max      | 51599   |
| Innodb_row_lock_waits         | 51      |
+-------------------------------+---------+
5 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Innodb_row_lock_current_waits 表示当前所等待的数量</li><li>Innodb_row_lock_waits 表示历史发生锁等待的数量</li></ul><p>查看哪个表的打开数量大于0</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show open tables where in_use&gt;0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-查看哪个事务在等待-被阻塞了" tabindex="-1"><a class="header-anchor" href="#_2-2-查看哪个事务在等待-被阻塞了" aria-hidden="true">#</a> 2.2 查看哪个事务在等待（被阻塞了）</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from information_schema.innodb_trx where trx_state=&#39;lock wait&#39; \\G;
*************************** 1. row ***************************
                    trx_id: 2502
                 trx_state: LOCK WAIT
               trx_started: 2020-02-15 17:19:37
     trx_requested_lock_id: 2502:9:3:2
          trx_wait_started: 2020-02-15 17:19:37
                trx_weight: 2
       trx_mysql_thread_id: 38
                 trx_query: update t1 set name=&#39;world&#39; where id=1
       trx_operation_state: starting index read
         trx_tables_in_use: 1
         trx_tables_locked: 1
          trx_lock_structs: 2
     trx_lock_memory_bytes: 360
           trx_rows_locked: 1
         trx_rows_modified: 0
   trx_concurrency_tickets: 0
       trx_isolation_level: REPEATABLE READ
         trx_unique_checks: 1
    trx_foreign_key_checks: 1
trx_last_foreign_key_error: NULL
 trx_adaptive_hash_latched: 0
 trx_adaptive_hash_timeout: 10000
          trx_is_read_only: 0
trx_autocommit_non_locking: 0
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-查看索源" tabindex="-1"><a class="header-anchor" href="#_2-3-查看索源" aria-hidden="true">#</a> 2.3 查看索源</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from information_schema.innodb_lock_waits;
+-------------------+-------------------+-----------------+------------------+
| requesting_trx_id | requested_lock_id | blocking_trx_id | blocking_lock_id |
+-------------------+-------------------+-----------------+------------------+
| 2502              | 2500:9:3:2        | 2491            | 2491:9:3:2       |
+-------------------+-------------------+-----------------+------------------+
1 row in set (0.00 sec)

select * from information_schema.innodb_locks;
+------------+-------------+-----------+-----------+------------------+-----------------+------------+-----------+----------+----------------+
| lock_id    | lock_trx_id | lock_mode | lock_type | lock_table       | lock_index      | lock_space | lock_page | lock_rec | lock_data      |
+------------+-------------+-----------+-----------+------------------+-----------------+------------+-----------+----------+----------------+
| 2500:9:3:2 | 2502        | X         | RECORD    | \`clay_test\`.\`t1\` | GEN_CLUST_INDEX |          9 |         3 |        2 | 0x000000000212 |
| 2491:9:3:2 | 2491        | X         | RECORD    | \`clay_test\`.\`t1\` | GEN_CLUST_INDEX |          9 |         3 |        2 | 0x000000000212 |
+------------+-------------+-----------+-----------+------------------+-----------------+------------+-----------+----------+----------------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-找到锁源的sql语句" tabindex="-1"><a class="header-anchor" href="#_2-4-找到锁源的sql语句" aria-hidden="true">#</a> 2.4 找到锁源的SQL语句</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from information_schema.innodb_trx where trx_id=&#39;2491&#39; \\G;
*************************** 1. row ***************************
                    trx_id: 2491
                 trx_state: RUNNING
               trx_started: 2020-02-15 17:01:28
     trx_requested_lock_id: NULL
          trx_wait_started: NULL
                trx_weight: 5
       trx_mysql_thread_id: 37
                 trx_query: update t1 set name=&#39;hello&#39; where id=1;
       trx_operation_state: NULL
         trx_tables_in_use: 0
         trx_tables_locked: 0
          trx_lock_structs: 2
     trx_lock_memory_bytes: 360
           trx_rows_locked: 2
         trx_rows_modified: 3
   trx_concurrency_tickets: 0
       trx_isolation_level: REPEATABLE READ
         trx_unique_checks: 1
    trx_foreign_key_checks: 1
trx_last_foreign_key_error: NULL
 trx_adaptive_hash_latched: 0
 trx_adaptive_hash_timeout: 10000
          trx_is_read_only: 0
trx_autocommit_non_locking: 0
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-杀掉进程" tabindex="-1"><a class="header-anchor" href="#_3-杀掉进程" aria-hidden="true">#</a> 3 杀掉进程</h2><p>线程ID（trx_mysql_thread_id）</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; kill 37;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),a=[d];function r(c,t){return i(),n("div",null,a)}const u=e(l,[["render",r],["__file","lock.html.vue"]]);export{u as default};
