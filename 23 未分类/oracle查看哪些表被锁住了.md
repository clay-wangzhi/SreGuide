## 查看哪些表被锁住了

```sql
select b.owner,b.object_name,a.session_id,a.locked_mode from v$locked_object a,dba_objects b where b.object_id = a.OBJECT_ID;
```

## 查询引起死锁的会话

```sql
select b.username,b.sid,b.serial#,logon_time from v$locked_object a , v$session b where a.session_id = b.sid order by b.LOGON_TIME;
```

## 查出sid和serial#

```sql
select sid,serial#,paddr from v$session where sid = 259;
```

## 查v$process视图,得到spid

```
select spid from v$process where addr= '00000003E32BDE28';
```

## 杀死进程(sid,serial#)

```sql
alter system kill session '259,37152';
```