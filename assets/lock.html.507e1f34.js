import{_ as n,e as s}from"./app.958f2970.js";const e={},a=s(`<h1 id="_12-mysql\u9501\u7B49\u5F85" tabindex="-1"><a class="header-anchor" href="#_12-mysql\u9501\u7B49\u5F85" aria-hidden="true">#</a> 12 MySQL\u9501\u7B49\u5F85</h1><h2 id="_1-\u9501\u7B49\u5F85\u6A21\u62DF" tabindex="-1"><a class="header-anchor" href="#_1-\u9501\u7B49\u5F85\u6A21\u62DF" aria-hidden="true">#</a> 1 \u9501\u7B49\u5F85\u6A21\u62DF</h2><p>\u521B\u5EFA\u6570\u636E\u5E93</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create database clay_test default charset utf8 collate utf8_general_ci;
use clay_test
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u521B\u5EFA\u8868</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create table t1(id int, name varchar(20)) engine=innodb default charset=utf8;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u63D2\u5165\u6570\u636E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>insert into t1 values(1, &#39;clay&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53D6\u6D88\u81EA\u52A8\u63D0\u4EA4</p><p>\u5219\u5F53\u6267\u884C\u8BED\u53E5commit\u6216\u8005rollback\u6267\u884C\u63D0\u4EA4\u4E8B\u52A1\u6216\u8005\u56DE\u6EDA</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>set autocommit=0;
Query OK, 0 rows affected (0.00 sec)

mysql&gt; show variables like &#39;autocommit&#39;;
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | OFF   |
+---------------+-------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u66F4\u65B0\u7B2C\u4E00\u6761\u63D2\u5165\u7684\u6570\u636E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>update t1 set name=&#39;hello&#39; where id=1;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u65B0\u5F00\u4E00\u4E2A\u7EC8\u7AEF\uFF0C\u4E5F\u66F4\u65B0\u7B2C\u4E00\u6761\u6570\u636E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>update t1 set name=&#39;world&#39; where id=1;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-\u76D1\u63A7\u9501\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_2-\u76D1\u63A7\u9501\u72B6\u6001" aria-hidden="true">#</a> 2 \u76D1\u63A7\u9501\u72B6\u6001</h2><h3 id="_2-1-\u67E5\u770B\u6709\u65E0\u9501\u7B49\u5F85" tabindex="-1"><a class="header-anchor" href="#_2-1-\u67E5\u770B\u6709\u65E0\u9501\u7B49\u5F85" aria-hidden="true">#</a> 2.1 \u67E5\u770B\u6709\u65E0\u9501\u7B49\u5F85</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; show status like &#39;%innodb_row_lock%&#39;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>Innodb_row_lock_current_waits \u8868\u793A\u5F53\u524D\u6240\u7B49\u5F85\u7684\u6570\u91CF</li><li>Innodb_row_lock_waits \u8868\u793A\u5386\u53F2\u53D1\u751F\u9501\u7B49\u5F85\u7684\u6570\u91CF</li></ul><p>\u67E5\u770B\u54EA\u4E2A\u8868\u7684\u6253\u5F00\u6570\u91CF\u5927\u4E8E0</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show open tables where in_use&gt;0;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-2-\u67E5\u770B\u54EA\u4E2A\u4E8B\u52A1\u5728\u7B49\u5F85-\u88AB\u963B\u585E\u4E86" tabindex="-1"><a class="header-anchor" href="#_2-2-\u67E5\u770B\u54EA\u4E2A\u4E8B\u52A1\u5728\u7B49\u5F85-\u88AB\u963B\u585E\u4E86" aria-hidden="true">#</a> 2.2 \u67E5\u770B\u54EA\u4E2A\u4E8B\u52A1\u5728\u7B49\u5F85\uFF08\u88AB\u963B\u585E\u4E86\uFF09</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select * from information_schema.innodb_trx where trx_state=&#39;lock wait&#39; \\G;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_2-3-\u67E5\u770B\u7D22\u6E90" tabindex="-1"><a class="header-anchor" href="#_2-3-\u67E5\u770B\u7D22\u6E90" aria-hidden="true">#</a> 2.3 \u67E5\u770B\u7D22\u6E90</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select * from information_schema.innodb_lock_waits;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_2-4-\u627E\u5230\u9501\u6E90\u7684sql\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_2-4-\u627E\u5230\u9501\u6E90\u7684sql\u8BED\u53E5" aria-hidden="true">#</a> 2.4 \u627E\u5230\u9501\u6E90\u7684SQL\u8BED\u53E5</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select * from information_schema.innodb_trx where trx_id=&#39;2491&#39; \\G;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="_3-\u6740\u6389\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-\u6740\u6389\u8FDB\u7A0B" aria-hidden="true">#</a> 3 \u6740\u6389\u8FDB\u7A0B</h2><p>\u7EBF\u7A0BID\uFF08trx_mysql_thread_id\uFF09</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; kill 37;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,30);function r(l,i){return a}var t=n(e,[["render",r],["__file","lock.html.vue"]]);export{t as default};
