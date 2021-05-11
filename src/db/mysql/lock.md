---
category: MySQL
---
# 12 MySQL锁等待

## 1 锁等待模拟

创建数据库

```mysql
create database clay_test default charset utf8 collate utf8_general_ci;
use clay_test
```

创建表

```mysql
create table t1(id int, name varchar(20)) engine=innodb default charset=utf8;
```

插入数据

```mysql
insert into t1 values(1, 'clay');
```

取消自动提交

则当执行语句commit或者rollback执行提交事务或者回滚

```mysql
set autocommit=0;
Query OK, 0 rows affected (0.00 sec)

mysql> show variables like 'autocommit';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | OFF   |
+---------------+-------+
1 row in set (0.00 sec)
```

更新第一条插入的数据

```mysql
update t1 set name='hello' where id=1;
```

新开一个终端，也更新第一条数据

```mysql
update t1 set name='world' where id=1;
```

## 2 监控锁状态

### 2.1 查看有无锁等待

```mysql
mysql> show status like '%innodb_row_lock%';
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
```

* Innodb_row_lock_current_waits 表示当前所等待的数量
* Innodb_row_lock_waits 表示历史发生锁等待的数量

查看哪个表的打开数量大于0

```mysql
show open tables where in_use>0;
```

### 2.2 查看哪个事务在等待（被阻塞了）

```mysql
mysql> select * from information_schema.innodb_trx where trx_state='lock wait' \G;
*************************** 1. row ***************************
                    trx_id: 2502
                 trx_state: LOCK WAIT
               trx_started: 2020-02-15 17:19:37
     trx_requested_lock_id: 2502:9:3:2
          trx_wait_started: 2020-02-15 17:19:37
                trx_weight: 2
       trx_mysql_thread_id: 38
                 trx_query: update t1 set name='world' where id=1
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
```

### 2.3 查看索源

```mysql
mysql> select * from information_schema.innodb_lock_waits;
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
| 2500:9:3:2 | 2502        | X         | RECORD    | `clay_test`.`t1` | GEN_CLUST_INDEX |          9 |         3 |        2 | 0x000000000212 |
| 2491:9:3:2 | 2491        | X         | RECORD    | `clay_test`.`t1` | GEN_CLUST_INDEX |          9 |         3 |        2 | 0x000000000212 |
+------------+-------------+-----------+-----------+------------------+-----------------+------------+-----------+----------+----------------+
2 rows in set (0.00 sec)
```

### 2.4 找到锁源的SQL语句

```mysql
mysql> select * from information_schema.innodb_trx where trx_id='2491' \G;
*************************** 1. row ***************************
                    trx_id: 2491
                 trx_state: RUNNING
               trx_started: 2020-02-15 17:01:28
     trx_requested_lock_id: NULL
          trx_wait_started: NULL
                trx_weight: 5
       trx_mysql_thread_id: 37
                 trx_query: update t1 set name='hello' where id=1;
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
```

## 3 杀掉进程

线程ID（trx_mysql_thread_id）

```mysql
mysql> kill 37;
```

