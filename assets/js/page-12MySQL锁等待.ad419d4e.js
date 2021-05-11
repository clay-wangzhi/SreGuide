(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1102:function(s,a,n){"use strict";n.r(a);var e=n(1),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_12-mysql锁等待"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-mysql锁等待"}},[s._v("#")]),s._v(" 12 MySQL锁等待")]),s._v(" "),n("h2",{attrs:{id:"_1-锁等待模拟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-锁等待模拟"}},[s._v("#")]),s._v(" 1 锁等待模拟")]),s._v(" "),n("p",[s._v("创建数据库")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("create database clay_test default charset utf8 collate utf8_general_ci;\nuse clay_test\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("创建表")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("create table t1(id int, name varchar(20)) engine=innodb default charset=utf8;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("插入数据")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("insert into t1 values(1, 'clay');\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("取消自动提交")]),s._v(" "),n("p",[s._v("则当执行语句commit或者rollback执行提交事务或者回滚")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("set autocommit=0;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> show variables like 'autocommit';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| autocommit    | OFF   |\n+---------------+-------+\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("更新第一条插入的数据")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("update t1 set name='hello' where id=1;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("新开一个终端，也更新第一条数据")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("update t1 set name='world' where id=1;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_2-监控锁状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-监控锁状态"}},[s._v("#")]),s._v(" 2 监控锁状态")]),s._v(" "),n("h3",{attrs:{id:"_2-1-查看有无锁等待"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-查看有无锁等待"}},[s._v("#")]),s._v(" 2.1 查看有无锁等待")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> show status like '%innodb_row_lock%';\n+-------------------------------+---------+\n| Variable_name                 | Value   |\n+-------------------------------+---------+\n| Innodb_row_lock_current_waits | 1       |\n| Innodb_row_lock_time          | 2270662 |\n| Innodb_row_lock_time_avg      | 44522   |\n| Innodb_row_lock_time_max      | 51599   |\n| Innodb_row_lock_waits         | 51      |\n+-------------------------------+---------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[s._v("Innodb_row_lock_current_waits 表示当前所等待的数量")]),s._v(" "),n("li",[s._v("Innodb_row_lock_waits 表示历史发生锁等待的数量")])]),s._v(" "),n("p",[s._v("查看哪个表的打开数量大于0")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("show open tables where in_use>0;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2-2-查看哪个事务在等待-被阻塞了"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-查看哪个事务在等待-被阻塞了"}},[s._v("#")]),s._v(" 2.2 查看哪个事务在等待（被阻塞了）")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from information_schema.innodb_trx where trx_state='lock wait' \\G;\n*************************** 1. row ***************************\n                    trx_id: 2502\n                 trx_state: LOCK WAIT\n               trx_started: 2020-02-15 17:19:37\n     trx_requested_lock_id: 2502:9:3:2\n          trx_wait_started: 2020-02-15 17:19:37\n                trx_weight: 2\n       trx_mysql_thread_id: 38\n                 trx_query: update t1 set name='world' where id=1\n       trx_operation_state: starting index read\n         trx_tables_in_use: 1\n         trx_tables_locked: 1\n          trx_lock_structs: 2\n     trx_lock_memory_bytes: 360\n           trx_rows_locked: 1\n         trx_rows_modified: 0\n   trx_concurrency_tickets: 0\n       trx_isolation_level: REPEATABLE READ\n         trx_unique_checks: 1\n    trx_foreign_key_checks: 1\ntrx_last_foreign_key_error: NULL\n trx_adaptive_hash_latched: 0\n trx_adaptive_hash_timeout: 10000\n          trx_is_read_only: 0\ntrx_autocommit_non_locking: 0\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("h3",{attrs:{id:"_2-3-查看索源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-查看索源"}},[s._v("#")]),s._v(" 2.3 查看索源")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from information_schema.innodb_lock_waits;\n+-------------------+-------------------+-----------------+------------------+\n| requesting_trx_id | requested_lock_id | blocking_trx_id | blocking_lock_id |\n+-------------------+-------------------+-----------------+------------------+\n| 2502              | 2500:9:3:2        | 2491            | 2491:9:3:2       |\n+-------------------+-------------------+-----------------+------------------+\n1 row in set (0.00 sec)\n\nselect * from information_schema.innodb_locks;\n+------------+-------------+-----------+-----------+------------------+-----------------+------------+-----------+----------+----------------+\n| lock_id    | lock_trx_id | lock_mode | lock_type | lock_table       | lock_index      | lock_space | lock_page | lock_rec | lock_data      |\n+------------+-------------+-----------+-----------+------------------+-----------------+------------+-----------+----------+----------------+\n| 2500:9:3:2 | 2502        | X         | RECORD    | `clay_test`.`t1` | GEN_CLUST_INDEX |          9 |         3 |        2 | 0x000000000212 |\n| 2491:9:3:2 | 2491        | X         | RECORD    | `clay_test`.`t1` | GEN_CLUST_INDEX |          9 |         3 |        2 | 0x000000000212 |\n+------------+-------------+-----------+-----------+------------------+-----------------+------------+-----------+----------+----------------+\n2 rows in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"_2-4-找到锁源的sql语句"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-找到锁源的sql语句"}},[s._v("#")]),s._v(" 2.4 找到锁源的SQL语句")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from information_schema.innodb_trx where trx_id='2491' \\G;\n*************************** 1. row ***************************\n                    trx_id: 2491\n                 trx_state: RUNNING\n               trx_started: 2020-02-15 17:01:28\n     trx_requested_lock_id: NULL\n          trx_wait_started: NULL\n                trx_weight: 5\n       trx_mysql_thread_id: 37\n                 trx_query: update t1 set name='hello' where id=1;\n       trx_operation_state: NULL\n         trx_tables_in_use: 0\n         trx_tables_locked: 0\n          trx_lock_structs: 2\n     trx_lock_memory_bytes: 360\n           trx_rows_locked: 2\n         trx_rows_modified: 3\n   trx_concurrency_tickets: 0\n       trx_isolation_level: REPEATABLE READ\n         trx_unique_checks: 1\n    trx_foreign_key_checks: 1\ntrx_last_foreign_key_error: NULL\n trx_adaptive_hash_latched: 0\n trx_adaptive_hash_timeout: 10000\n          trx_is_read_only: 0\ntrx_autocommit_non_locking: 0\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("h2",{attrs:{id:"_3-杀掉进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-杀掉进程"}},[s._v("#")]),s._v(" 3 杀掉进程")]),s._v(" "),n("p",[s._v("线程ID（trx_mysql_thread_id）")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> kill 37;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);