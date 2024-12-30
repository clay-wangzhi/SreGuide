import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-5aac8996.js";const d={},l=s(`<h1 id="_4-视图、事务、索引、函数" tabindex="-1"><a class="header-anchor" href="#_4-视图、事务、索引、函数" aria-hidden="true">#</a> 4 视图、事务、索引、函数</h1><h2 id="_1-视图【view】" tabindex="-1"><a class="header-anchor" href="#_1-视图【view】" aria-hidden="true">#</a> 1 视图【view】</h2><p>1、 视图是一张虚拟表，它表示一张表的部分或多张表的综合的结构。</p><p>2、 视图仅仅是表结构，没有表数据。视图的结构和数据建立在表的基础上。</p><h3 id="_1-1-创建视图" tabindex="-1"><a class="header-anchor" href="#_1-1-创建视图" aria-hidden="true">#</a> 1.1 创建视图</h3><p>语法</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create [or replace] view 视图的名称
as
	select语句;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create view vw_stu
    -&gt; as
    -&gt; select stuname,stusex,writtenexam,labexam from stuinfo inner join stumarks using(stuno);
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多学一招：因为视图是一个表结构，所以创建视图后，会在数据库文件夹中多一个与视图名同名的.frm文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-使用视图" tabindex="-1"><a class="header-anchor" href="#_1-2-使用视图" aria-hidden="true">#</a> 1.2 使用视图</h3><p>视图是一张虚拟表，视图的用法和表的用法一样的</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from vw_stu;
+----------+--------+-------------+---------+
| stuname  | stusex | writtenexam | labexam |
+----------+--------+-------------+---------+
| 李斯文        | 女      |          80 |      58 |
| 李文才        | 男       |          50 |      90 |
| 欧阳俊雄        | 男       |          65 |      50 |
| 张秋丽         | 男       |          77 |      82 |
| 争青小子        | 男       |          56 |      48 |
+----------+--------+-------------+---------+

mysql&gt; update vw_stu set writtenexam=88 where stuname=&#39;李斯文&#39;;
Query OK, 1 row affected (0.05 sec)
Rows matched: 1  Changed: 1  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-查看视图的结构" tabindex="-1"><a class="header-anchor" href="#_1-3-查看视图的结构" aria-hidden="true">#</a> 1.3 查看视图的结构</h3><p>语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>desc 视图名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; desc vw_stu;
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| stuname     | varchar(10) | NO   |     | NULL    |       |
| stusex      | char(2)     | NO   |     | NULL    |       |
| writtenexam | int(11)     | YES  |     | NULL    |       |
| labexam     | int(11)     | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-查看创建视图的语法" tabindex="-1"><a class="header-anchor" href="#_1-4-查看创建视图的语法" aria-hidden="true">#</a> 1.4 查看创建视图的语法</h3><p>语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show create view 视图名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537067071676.png" alt="1537067071676"></p><h3 id="_1-5-显示所有视图" tabindex="-1"><a class="header-anchor" href="#_1-5-显示所有视图" aria-hidden="true">#</a> 1.5 显示所有视图</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code> #方法一：
mysql&gt; show tables;
+------------------+
| Tables_in_itcast |
+------------------+
| stu              |
| stuinfo          |
| stumarks         |
| t1               |
| t2               |
| vw_stu           |

# 方法二
mysql&gt; select table_name from information_schema.views;
+------------+
| table_name |
+------------+
| vw_stu     |
+------------+
1 row in set (0.05 sec)
+------------------+

#方法三
mysql&gt; show table status where comment=&#39;view&#39; \\G
*************************** 1. row ***************************
           Name: vw_stu
         Engine: NULL
        Version: NULL
     Row_format: NULL
           Rows: NULL
 Avg_row_length: NULL
    Data_length: NULL
Max_data_length: NULL
   Index_length: NULL
      Data_free: NULL
 Auto_increment: NULL
    Create_time: NULL
    Update_time: NULL
     Check_time: NULL
      Collation: NULL
       Checksum: NULL
 Create_options: NULL
        Comment: VIEW
1 row in set (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-更改视图" tabindex="-1"><a class="header-anchor" href="#_1-6-更改视图" aria-hidden="true">#</a> 1.6 更改视图</h3><p>语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter view 视图名
as
	select 语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; alter view vw_stu
    -&gt; as
    -&gt; select * from stuinfo;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-删除视图" tabindex="-1"><a class="header-anchor" href="#_1-7-删除视图" aria-hidden="true">#</a> 1.7 删除视图</h3><p>语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop view [if exists] 视图1,视图2,…
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; drop view vw_stu;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-8-视图的作用" tabindex="-1"><a class="header-anchor" href="#_1-8-视图的作用" aria-hidden="true">#</a> 1.8 视图的作用</h3><ol><li><p>筛选数据，防止未经许可访问敏感数据</p></li><li><p>隐藏表结构</p></li><li><p>降低SQL语句的复杂度</p></li></ol><h3 id="_1-9视图的算法" tabindex="-1"><a class="header-anchor" href="#_1-9视图的算法" aria-hidden="true">#</a> 1.9 视图的算法</h3><p>场景：找出语文成绩最高的男生和女生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from (select * from stu order by ch desc) as t group by stusex;
+--------+----------+--------+--------+---------+------------+------+------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+----------+--------+--------+---------+------------+------+------+
| s25321 | Tabm     | 女      |     23 |       9 | 河北          |   88 |   77 |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |   86 |   92 |
+--------+----------+--------+--------+---------+------------+------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以将子查询封装到视图中</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create view vw_stu
    -&gt; as
    -&gt; select * from stu order by ch desc;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以将上面的子查询更改成视图，但是，结果和上面不一样</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from vw_stu group by stusex;
+--------+---------+--------+--------+---------+------------+------+------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+---------+--------+--------+---------+------------+------+------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |   80 | NULL |
| s25303 | 李斯文       | 女      |     22 |       2 | 北京           |   55 |   82 |
+--------+---------+--------+--------+---------+------------+------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：这是因为视图的算法造成的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. merge：合并算法，将视图的语句和外层的语句合并后在执行。
2. temptable：临时表算法，将视图生成一个临时表，再执行外层语句
3. undefined：未定义，MySQL到底用merge还是用temptable由MySQL决定，这是一个默认的算法，一般视图都会选择merge算法，因为merge效率高。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决：在创建视图的时候指定视图的算法</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create algorithm=temptable view 视图名
as
	select 语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定算法创建视图</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create algorithm=temptable view vw_stu
    -&gt; as
    -&gt;  select * from stu order by ch desc;
Query OK, 0 rows affected (0.00 sec)

mysql&gt; select * from vw_stu group by stusex;   # 结果是一致的
+--------+----------+--------+--------+---------+------------+------+------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+----------+--------+--------+---------+------------+------+------+
| s25321 | Tabm     | 女      |     23 |       9 | 河北          |   88 |   77 |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |   86 |   92 |
+--------+----------+--------+--------+---------+------------+------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-事务【transaction】" tabindex="-1"><a class="header-anchor" href="#_2-事务【transaction】" aria-hidden="true">#</a> 2 事务【transaction】</h2><ol><li>事务是一个不可分割的执行单元</li><li>事务作为一个整体要么一起执行，要么一起回滚</li></ol><p>插入测试数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create table bank(
    -&gt; cardid char(4) primary key,
    -&gt; money int
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into bank values (&#39;1001&#39;,1000),(&#39;1002&#39;,100);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-事务操作" tabindex="-1"><a class="header-anchor" href="#_2-1-事务操作" aria-hidden="true">#</a> 2.1 事务操作</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>开启事务：start transaction或begin [work]
提交事务：commit
回滚事务：rollback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; delimiter //            # 更改定界符

mysql&gt; start transaction;			# 开启事务
    -&gt; update bank set money=money-100 where cardid=&#39;1001&#39;;
    -&gt; update bank set money=money+100 where cardid=&#39;1002&#39;  //
Query OK, 0 rows affected (0.00 sec)

mysql&gt; commit //   # 提交事务

mysql&gt; rollback //  # 回滚事务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>思考：事务什么时候产生？什么时候结束？
答：开启的时候产生，提交事务或回滚事务都结束

脚下留心：只有innodb和BDB才支持事务，myisam不支持事务。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-设置事务的回滚点" tabindex="-1"><a class="header-anchor" href="#_2-2-设置事务的回滚点" aria-hidden="true">#</a> 2.2 设置事务的回滚点</h3><p>语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>设置回滚点： savepoint 回滚点名
回滚到回滚点： rollback to 回滚点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt;  start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into bank values (&#39;1003&#39;,1000);
Query OK, 1 row affected (0.00 sec)

mysql&gt; savepoint aa;    # 设置回滚点 aa
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into bank values (&#39;1004&#39;,500);
Query OK, 1 row affected (0.00 sec)
 
mysql&gt; savepoint bb;   # 设置回滚点bb
Query OK, 0 rows affected (0.00 sec)
 
mysql&gt; rollback to aa;    # 回滚到aa点
Query OK, 0 rows affected (0.00 sec)

mysql&gt; commit;    # 提交事务

mysql&gt; select * from bank ;
+--------+-------+
| cardid | money |
+--------+-------+
| 1001   |   800 |
| 1002   |   200 |
| 1003   |  1000 |
+--------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-事务的特性-acid" tabindex="-1"><a class="header-anchor" href="#_2-3-事务的特性-acid" aria-hidden="true">#</a> 2.3 事务的特性（ACID）</h3><ol><li>原子性（Atomicity）：事务是一个整体，不可以再分，要么一起执行，要么一起不执行。</li><li>一致性（Consistency）：事务完成时，数据必须处于一致的状态。</li><li>隔离性（Isolation）：每个事务都是相互隔离的</li><li>永久性（Durability）：事务完成后，对数据的修改是永久性的。</li></ol><h2 id="_3-索引【index】" tabindex="-1"><a class="header-anchor" href="#_3-索引【index】" aria-hidden="true">#</a> 3 索引【index】</h2><p>索引的优点：查询速度快</p><p>索引的缺点：</p><ol><li>增、删、改（数据操作语句）效率低了</li><li>索引占用空间</li></ol><h3 id="_3-1索引的类型" tabindex="-1"><a class="header-anchor" href="#_3-1索引的类型" aria-hidden="true">#</a> 3.1 索引的类型</h3><ol><li><p>普通索引</p></li><li><p>唯一索引（唯一键）</p></li><li><p>主键索引：只要主键就自动创建主键索引，不需要手动创建。</p></li><li><p>全文索引，搜索引擎使用，MySQL不支持中文的全文索引，我们通过sphinx去解决中文的全文索引。</p></li></ol><h3 id="_3-2创建普通索引【create-index】" tabindex="-1"><a class="header-anchor" href="#_3-2创建普通索引【create-index】" aria-hidden="true">#</a> 3.2 创建普通索引【create index】</h3><p>语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create index [索引名] on 表名 （字段名）
alter table 表名 add index [索引的名称] （列名）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 创建索引方法一
mysql&gt; create index ix_stuname on stuinfo(stuname);
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 创建索引方法二
mysql&gt; alter table stuinfo add index ix_address (stuaddress);
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 创建表的时候就添加索引
mysql&gt; create table emp(
    -&gt; id int,
    -&gt; name varchar(10),
    -&gt; index ix_name (name)   # 创建索引
    -&gt; );
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3创建唯一索引" tabindex="-1"><a class="header-anchor" href="#_3-3创建唯一索引" aria-hidden="true">#</a> 3.3 创建唯一索引</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>语法一：create unique index 索引名 on 表名 （字段名）
语法二：alter table 表名 add unqiue [index] [索引的名称] （列名）
语法三：创建表的时候添加唯一索引，和创建唯一键是一样的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 方法一：
mysql&gt; create unique index UQ_stuname on stu(stuname);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 方法二：
mysql&gt; alter table stu add unique UQ_address (stuaddress);
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 方法三
mysql&gt; create table stu2(
    -&gt; id int,
    -&gt; name varchar(20),
    -&gt; unique UQ_name(name)
    -&gt; );
Query OK, 0 rows affected (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4删除索引" tabindex="-1"><a class="header-anchor" href="#_3-4删除索引" aria-hidden="true">#</a> 3.4 删除索引</h3><p>语法</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop index 索引名 on 表名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; drop index ix_stuname on stuinfo;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5创建索引的指导原则" tabindex="-1"><a class="header-anchor" href="#_3-5创建索引的指导原则" aria-hidden="true">#</a> 3.5 创建索引的指导原则</h3><ol><li><p>该列用于频繁搜索</p></li><li><p>改列用于排序</p></li><li><p>公共字段要创建索引</p></li><li><p>如果表中的数据很少，不需要创建索引。MySQL搜索索引的时间比逐条搜索数据的时间要长。</p></li><li><p>如果一个字段上的数据只有几个不同的值，改字段不适合做索引，比如性别。</p></li></ol><h2 id="_4-函数" tabindex="-1"><a class="header-anchor" href="#_4-函数" aria-hidden="true">#</a> 4 函数</h2><h3 id="_4-1-数字类" tabindex="-1"><a class="header-anchor" href="#_4-1-数字类" aria-hidden="true">#</a> 4.1 数字类</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select rand();			# 生成随机数
+---------------------+
| rand()              |
+---------------------+
| 0.18474003969201822 |
+---------------------+
1 row in set (0.00 sec)

mysql&gt; select * from stuinfo order by rand();   # 随机排序

mysql&gt; select * from stuinfo order by rand() limit 2;    # 随机抽两个学生
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25305 | 诸葛丽丽         | 女      |     23 |       7 | 河南           |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           |
+--------+----------+--------+--------+---------+------------+
2 rows in set (0.00 sec)

mysql&gt; select round(3.5);     #四舍五入
+------------+
| round(3.5) |
+------------+
|          4 |
+------------+
1 row in set (0.00 sec)

mysql&gt; select ceil(3.1);	# 向上取整
+-----------+
| ceil(3.1) |
+-----------+
|         4 |
+-----------+
1 row in set (0.00 sec)

mysql&gt; select floor(3.9);	# 向下取整
+------------+
| floor(3.9) |
+------------+
|          3 |
+------------+
1 row in set (0.00 sec)

mysql&gt; select truncate(3.1415926,3);	# 截取数字
+-----------------------+
| truncate(3.1415926,3) |
+-----------------------+
|                 3.141 |
+-----------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-字符串类" tabindex="-1"><a class="header-anchor" href="#_4-2-字符串类" aria-hidden="true">#</a> 4.2 字符串类</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select ucase(&#39;i am a boy!&#39;);		# 转成大写
+----------------------+
| ucase(&#39;i am a boy!&#39;) |
+----------------------+
| I AM A BOY!          |
+----------------------+
1 row in set (0.00 sec)

mysql&gt; select lcase(&#39;I Am A Boy!&#39;);		#转成小写
+----------------------+
| lcase(&#39;I Am A Boy!&#39;) |
+----------------------+
| i am a boy!          |
+----------------------+
1 row in set (0.00 sec)

mysql&gt; select left(&#39;abcde&#39;,3);		# 从左边开始截取，截取3个
+-----------------+
| left(&#39;abcde&#39;,3) |
+-----------------+
| abc             |
+-----------------+
1 row in set (0.00 sec)

mysql&gt; select right(&#39;abcde&#39;,3);		# 从右边开始截取，截取3个
+------------------+
| right(&#39;abcde&#39;,3) |
+------------------+
| cde              |
+------------------+
1 row in set (0.00 sec)

mysql&gt; select substring(&#39;abcde&#39;,2,3);	#从第2个位置开始截取，截取3个【位置从1开始】
+------------------------+
| substring(&#39;abcde&#39;,2,3) |
+------------------------+
| bcd                    |
+------------------------+
1 row in set (0.00 sec)

mysql&gt; select concat(&#39;中国&#39;,&#39;上海&#39;);	# 字符串相连
+-----------------------+
| concat(&#39;中国&#39;,&#39;上海&#39;)       |
+-----------------------+
| 中国上海                    |
+-----------------------+
1 row in set (0.00 sec)

mysql&gt; select concat(stuname,&#39;-&#39;,stusex) from stuinfo;  # 将表中的姓名和性别连接起来
+----------------------------+
| concat(stuname,&#39;-&#39;,stusex) |
+----------------------------+
| 张秋丽-男                          |
| 李文才-男                         |
| 李斯文-女                        |
| 欧阳俊雄-男                         |
| 诸葛丽丽-女                         |
| 争青小子-男                         |
| 梅超风-女                        |
+----------------------------+
7 rows in set (0.00 sec)

# coalesce(字段1，字段2)  如果字段1不为空就显示字段1，否则，显示字段2
mysql&gt; select stuname,coalesce(writtenexam,&#39;缺考&#39;),coalesce(labexam,&#39;缺考&#39;) from stuinfo natural left join stumarks;   # 将考试成绩为空的显示为缺考
+----------+------------------------------+--------------------------+
| stuname  | coalesce(writtenexam,&#39;缺考&#39;)    | coalesce(labexam,&#39;缺考&#39;)    |
+----------+------------------------------+--------------------------+
| 张秋丽         | 77                           | 82                       |
| 李文才        | 50                           | 90                       |
| 李斯文        | 88                           | 58                       |
| 欧阳俊雄        | 65                           | 50                       |
| 诸葛丽丽         | 缺考                            | 缺考                        |
| 争青小子        | 56                           | 48                       |
| 梅超风        | 缺考                            | 缺考                        |
+----------+------------------------------+--------------------------+

mysql&gt; select length(&#39;锄禾日当午&#39;);		# 字节长度
+----------------------+
| length(&#39;锄禾日当午&#39;)          |
+----------------------+
|                   10 |
+----------------------+
1 row in set (0.00 sec)

mysql&gt; select char_length(&#39;锄禾日当午&#39;);		# 字符个数
+---------------------------+
| char_length(&#39;锄禾日当午&#39;)          |
+---------------------------+
|                         5 |
+---------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-时间类" tabindex="-1"><a class="header-anchor" href="#_4-3-时间类" aria-hidden="true">#</a> 4.3 时间类</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select unix_timestamp();	#获取时间戳
+------------------+
| unix_timestamp() |
+------------------+
|       1537084508 |
+------------------+
1 row in set (0.00 sec)

mysql&gt; select from_unixtime(unix_timestamp());	# 将时间戳转成年-月-日 小时:分钟:秒的格式
+---------------------------------+
| from_unixtime(unix_timestamp()) |
+---------------------------------+
| 2018-09-16 15:55:56             |
+---------------------------------+
1 row in set (0.00 sec)

mysql&gt; select now();		# 获取当前日期时间
+---------------------+
| now()               |
+---------------------+
| 2018-09-16 15:57:04 |
+---------------------+
1 row in set (0.00 sec)

mysql&gt; select year(now()) 年,month(now()) 月, day(now()) 日,hour(now()) 小,minute(now()) 分钟,second(now()) 秒;
+------+------+------+------+------+------+
| 年     | 月     | 日     | 小时   | 分钟     | 秒     |
+------+------+------+------+------+------+
| 2018 |    9 |   16 |   15 |   59 |   14 |
+------+------+------+------+------+------+
1 row in set (0.00 sec)

mysql&gt; select dayname(now()) 星期,monthname(now()),dayofyear(now()) 本年的第几天;
+--------+------------------+--------------+
| 星期       | monthname(now()) | 本年的第几天           |
+--------+------------------+--------------+
| Sunday | September        |          259 |
+--------+------------------+--------------+
1 row in set (0.00 sec)

mysql&gt; select datediff(now(),&#39;2008-8-8&#39;);	# 日期相减
+----------------------------+
| datediff(now(),&#39;2008-8-8&#39;) |
+----------------------------+
|                       3691 |
+----------------------------+
1 row in set (0.00 sec)

mysql&gt; select convert(now(),date),convert(now(),time);	# 将now()转成日期和时间
+---------------------+---------------------+
| convert(now(),date) | convert(now(),time) |
+---------------------+---------------------+
| 2018-09-16          | 16:07:24            |
+---------------------+---------------------+

mysql&gt; select cast(now() as date),cast(now() as time);   # 将now()转成日期和时间
+---------------------+---------------------+
| cast(now() as date) | cast(now() as time) |
+---------------------+---------------------+
| 2018-09-16          | 16:08:03            |
+---------------------+---------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-加密函数" tabindex="-1"><a class="header-anchor" href="#_4-4-加密函数" aria-hidden="true">#</a> 4.4 加密函数</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>+----------------------------------+------------------------------------------+
| md5(&#39;root&#39;)                      | sha(&#39;root&#39;)                              |
+----------------------------------+------------------------------------------+
| 63a9f0ea7bb98050796b649e85481845 | dc76e9f0c0006e8f919e0c515c66dbba3982f785 |
+----------------------------------+------------------------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-判断函数" tabindex="-1"><a class="header-anchor" href="#_4-5-判断函数" aria-hidden="true">#</a> 4.5 判断函数</h3><p>语法</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>if(表达式,值1,值2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select if(10%2=0,&#39;偶数&#39;,&#39;奇数&#39;);
+--------------------------+
| if(10%2=0,&#39;偶数&#39;,&#39;奇数&#39;)        |
+--------------------------+
| 偶数                        |
+--------------------------+
1 row in set (0.00 sec)

# 语文和数学都超过60分才通过
mysql&gt; select stuname,ch,math,if(ch&gt;=60 &amp;&amp; math&gt;=60,&#39;通过&#39;,&#39;不通过&#39;) &#39;是否通过&#39; from stu;
+----------+------+------+----------+
| stuname  | ch   | math | 是否通过       |
+----------+------+------+----------+
| 张秋丽         |   80 | NULL | 不通过        |
| 李文才        |   77 |   76 | 通过        |
| 李斯文        |   55 |   82 | 不通过        |
| 欧阳俊雄        | NULL |   74 | 不通过        |
| 诸葛丽丽         |   72 |   56 | 不通过        |
| 争青小子        |   86 |   92 | 通过        |
| 梅超风        |   74 |   67 | 通过        |
| Tom      |   65 |   67 | 通过        |
| Tabm     |   88 |   77 | 通过        |
+----------+------+------+----------+
9 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-预处理" tabindex="-1"><a class="header-anchor" href="#_5-预处理" aria-hidden="true">#</a> 5 预处理</h2><p>预编译一次，可以多次执行。用来解决一条SQL语句频繁执行的问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>预处理语句：prepare 预处理名字 from ‘sql语句’
执行预处理：execute 预处理名字 [using 变量]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例题一：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; prepare stmt from &#39;select * from stuinfo&#39;;	# 创建预处理
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql&gt; execute stmt;	# 执行预处理
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           |
| s25305 | 诸葛丽丽         | 女      |     23 |       7 | 河南           |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |
| s25319 | 梅超风        | 女      |     23 |       5 | 河北          |
+--------+----------+--------+--------+---------+------------+
7 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题二：传递参数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; delimiter // 
mysql&gt; prepare stmt from &#39;select * from stuinfo where stuno=?&#39; // -- ?是位置占位符
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql&gt; set @id=&#39;s25301&#39;;       -- 变量以@开头，通过set给变量赋值
    -&gt; execute stmt using @id //  -- 执行预处理，传递参数
Query OK, 0 rows affected (0.00 sec)

+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>脚下留心：
1、?是位置占位符
2、变量以@开头
3、通过set给变量赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题三：传递多个参数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; prepare stmt from &#39;select * from stuinfo where stusex=? and stuaddress=?&#39;  //
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql&gt; set @sex=&#39;男&#39;;
    -&gt; set @addr=&#39;北京&#39;;
    -&gt; execute stmt using @sex,@addr //
Query OK, 0 rows affected (0.00 sec)

Query OK, 0 rows affected (0.00 sec)

+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-存储过程【procedure】" tabindex="-1"><a class="header-anchor" href="#_6-存储过程【procedure】" aria-hidden="true">#</a> 6 存储过程【procedure】</h2><h3 id="_6-1-存储过程的优点" tabindex="-1"><a class="header-anchor" href="#_6-1-存储过程的优点" aria-hidden="true">#</a> 6.1 存储过程的优点</h3><ol><li>存储过程可以减少网络流量</li><li>允许模块化设计</li><li>支持事务</li></ol><h3 id="_6-2创建存储过程" tabindex="-1"><a class="header-anchor" href="#_6-2创建存储过程" aria-hidden="true">#</a> 6.2 创建存储过程</h3><p>语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create procedure 存储过程名(参数)
begin
	//sql语句
end;

脚下留心：由于过程中有很多SQL语句，每个语句的结束都要用（；）结束。默认情况下，分号既表示语句结束，又表示向服务器发送SQL语句。我们希望分号仅表示语句的结束，不要将SQL语句发送到服务器执行，通过delimiter来更改结束符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; delimiter //
mysql&gt; create procedure proc()     -- 创建存储过程
    -&gt; begin
    -&gt; select * from stuinfo;
    -&gt; end //
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3调用存储过程" tabindex="-1"><a class="header-anchor" href="#_6-3调用存储过程" aria-hidden="true">#</a> 6.3 调用存储过程</h3><p>语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>call 存储过程名()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; call proc() //     -- 调用存储过程
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           |
| s25305 | 诸葛丽丽         | 女      |     23 |       7 | 河南           |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |
| s25319 | 梅超风        | 女      |     23 |       5 | 河北          |
+--------+----------+--------+--------+---------+------------+
7 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4删除存储过程" tabindex="-1"><a class="header-anchor" href="#_6-4删除存储过程" aria-hidden="true">#</a> 6.4 删除存储过程</h3><p>语法</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop procedure [if exists] 存储过程名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; drop procedure proc //    -- 删除存储过程
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-查看存储过程的信息" tabindex="-1"><a class="header-anchor" href="#_6-5-查看存储过程的信息" aria-hidden="true">#</a> 6.5 查看存储过程的信息</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show create procedure 存储过程名\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show create procedure proc \\G
*************************** 1. row ***************************
           Procedure: proc
            sql_mode: STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
    Create Procedure: CREATE DEFINER=\`root\`@\`localhost\` PROCEDURE \`proc\`()
begin
select * from stuinfo;
end
character_set_client: gbk
collation_connection: gbk_chinese_ci
  Database Collation: utf8_general_ci
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-显示所有的存储过程" tabindex="-1"><a class="header-anchor" href="#_6-6-显示所有的存储过程" aria-hidden="true">#</a> 6.6 显示所有的存储过程</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show procedure status \\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-7存储过程的参数" tabindex="-1"><a class="header-anchor" href="#_6-7存储过程的参数" aria-hidden="true">#</a> 6.7 存储过程的参数</h3><p>存储过程的参数分为：输入参数（in）【默认】，输出参数（out），输入输出参数（inout）</p><p>存储过程不能使用return返回值，要返回值只能通过“输出参数”来向外传递值。</p><p>例题一：传递学号，获取对应的信息</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create procedure proc(in param varchar(10))   -- 输入参数
    -&gt; select * from stuinfo where stuno=param //
Query OK, 0 rows affected (0.00 sec)

mysql&gt; call proc(&#39;s25301&#39;) //
+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题二：查找同桌</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create procedure proc(name varchar(10))
    -&gt; begin
    -&gt; declare seat tinyint;   -- 声明局部变量
    -&gt; select stuseat into seat from stuinfo where stuname=name;  -- 将座位号保存到变量中
    -&gt; select * from stuinfo where stuseat=seat+1 or stuseat=seat-1;  -- 查找同桌
    -&gt; end //
Query OK, 0 rows affected (0.00 sec)

mysql&gt; call proc(&#39;李文才&#39;) //
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           |
+--------+----------+--------+--------+---------+------------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>强调</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、通过declare关键字声明局部变量；全局变量@开头就可以了
2、给变量赋值有两种方法
	方法一：set 变量名=值
	方法二：select 字段 into 变量 from 表 where 条件
3、声明的变量不能与列名同名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题三：输出参数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create procedure proc(num int, out result int)  //out 表示输出参数
    -&gt; begin
    -&gt; set result=num*num;
    -&gt; end //
Query OK, 0 rows affected (0.00 sec)

mysql&gt; call proc(10,@result) //
Query OK, 0 rows affected (0.00 sec)

mysql&gt; select @result //
+---------+
| @result |
+---------+
|     100 |
+---------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题四：输入输出参数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create procedure proc(inout num int)  #  inout 表示是输入输出参数
    -&gt; begin
    -&gt; set num=num*num;
    -&gt; end //
Query OK, 0 rows affected (0.00 sec)

mysql&gt; set @num=10;
    -&gt; call proc(@num);
    -&gt; select @num //
Query OK, 0 rows affected (0.00 sec)

Query OK, 0 rows affected (0.00 sec)

+------+
| @num |
+------+
|  100 |
+------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-go连接mysql" tabindex="-1"><a class="header-anchor" href="#_7-go连接mysql" aria-hidden="true">#</a> 7 GO连接MySQL</h2><ol><li>因为Go语言没有提供任何官方数据库驱动，所以需要安装第三方函数库。</li><li>由于在github上安装，所以需要安装git软件，安装过程一直点击下一步即可。安装完成后需要配置环境变量</li></ol><h3 id="_7-1-安装git" tabindex="-1"><a class="header-anchor" href="#_7-1-安装git" aria-hidden="true">#</a> 7.1 安装git</h3><p>git软件</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537011074242.png" alt="1537011074242"></p><p>安装完毕后，配置git的环境变量，这样可以使用<code>get</code>的指令</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537094210154.png" alt="1537094210154"></p><h3 id="_7-2-安装数据库驱动" tabindex="-1"><a class="header-anchor" href="#_7-2-安装数据库驱动" aria-hidden="true">#</a> 7.2 安装数据库驱动</h3><p>设置GOPATH的环境变量，这样驱动才会下载到项目根目录中。</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537094342573.png" alt="1537094342573">****</p><p>在cmd命令窗口中输入如下命令安装驱动</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>sql<span class="token operator">-</span>driver<span class="token operator">/</span>mysql

这一命令会从代码中获取驱动的具体代码，并将这些代码放置到包库中，当需要用到驱动的时候，编译器会把驱动代码与用户编写的代码一同编译。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完毕后，会在GOPATH下看到下载的驱动</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537011722807.png" alt="1537011722807"></p><h3 id="_7-3-连接数据库" tabindex="-1"><a class="header-anchor" href="#_7-3-连接数据库" aria-hidden="true">#</a> 7.3 连接数据库</h3><p>1、在src目录下创建demo.go文件，导入数据库驱动</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;database/sql&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="token punctuation">)</span>

注意：程序在操作数据库的时候只需要用到database<span class="token operator">/</span>sql，而不需要直接使用数据库驱动，所以程序在导入数据库驱动的时候将这个包的名字设置成下划线。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、通过sql.open()连接数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sql.open(驱动名,数据源dsn)(*DB,err)

数据源语法：&quot;用户名:密码@[连接方式](主机名:端口号)/数据库名&quot;

注意：open()在执行时不会真正的与数据库进行连接，只是设置连接数据库需要的参数
ping()方法才是连接数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、执行SQL语句</p><p>​ 创建测试表</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create table stu(
    -&gt; id int primary key,
    -&gt; name varchar(10)
    -&gt; );
Query OK, 0 rows affected (0.02 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>package main

import (
	&quot;database/sql&quot;
	_ &quot;github.com/go-sql-driver/mysql&quot;
	&quot;fmt&quot;
)

func main(){
	//&quot;用户名:密码@[连接方式](主机名:端口号)/数据库名&quot;
	db,_:=sql.Open(&quot;mysql&quot;,&quot;root:root@(127.0.0.1:3306)/itcast&quot;) // 设置连接数据库的参数
	defer db.Close()	//关闭数据库
	err:=db.Ping()		//连接数据库
	if err!=nil{
		fmt.Println(&quot;数据库连接失败&quot;)
		return
	}

	//操作一：执行数据操作语句
	/*
	sql:=&quot;insert into stu values (2,&#39;berry&#39;)&quot;
	result,_:=db.Exec(sql)		//执行SQL语句
	n,_:=result.RowsAffected();	//获取受影响的记录数
	fmt.Println(&quot;受影响的记录数是&quot;,n)
	*/

	//操作二：执行预处理
	/*
	stu:=[2][2] string{{&quot;3&quot;,&quot;ketty&quot;},{&quot;4&quot;,&quot;rose&quot;}}
	stmt,_:=db.Prepare(&quot;insert into stu values (?,?)&quot;)		//获取预处理语句对象
	for _,s:=range stu{
		stmt.Exec(s[0],s[1])			//调用预处理语句
	}
	*/

	//操作三：单行查询
	/*
	var id,name string
	rows:=db.QueryRow(&quot;select * from stu where id=4&quot;)   //获取一行数据
	rows.Scan(&amp;id,&amp;name)		//将rows中的数据存到id,name中
	fmt.Println(id,&quot;--&quot;,name)
	*/

	//操作四：多行查询
	rows,_:=db.Query(&quot;select * from stu&quot;)		//获取所有数据
	var id,name string
	for rows.Next(){		//循环显示所有的数据
		rows.Scan(&amp;id,&amp;name)
		fmt.Println(id,&quot;--&quot;,name)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-例题" tabindex="-1"><a class="header-anchor" href="#_8-例题" aria-hidden="true">#</a> 8 例题</h2><p>1、 显示地区及每个地区参加考试的人数，并按人数降序排列。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select stuaddress,count(writtenexam) c from stuinfo left join stumarks using(stuno) group by stuaddress order by c desc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、 显示有学生参加考试的地区</p><p>方法一：过滤</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select stuaddress,count(writtenexam) c from stuinfo left join stumarks using(stuno) group by stuaddress having c&gt;0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方法二：链接查询</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select distinct stuaddress c from stuinfo right join stumarks using(stuno) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、 显示男生和女生的人数</p><p>方法一：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select stusex,count() from stuinfo where stusex=&#39;男&#39; union select stusex,count() from stuinfo where stusex=&#39;女&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方法二：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select sum(stusex=&#39;男&#39;) 男,sum(stusex=&#39;女&#39;) 女 from stuinfo;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、 显示每个地区的男生和女生和总人数</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select stuaddress,count(stusex) 总人数, sum(stusex=&#39;男&#39;) 男,sum(stusex=&#39;女&#39;) 女 from stuinfo group by stuaddress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,188),a=[l];function r(v,c){return i(),n("div",null,a)}const t=e(d,[["render",r],["__file","view-func.html.vue"]]);export{t as default};
