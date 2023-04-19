<template><h1 id="_2-列表类型和数据完整性" tabindex="-1"><a class="header-anchor" href="#_2-列表类型和数据完整性" aria-hidden="true">#</a> 2 列表类型和数据完整性</h1>
<h2 id="_1-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-数据类型" aria-hidden="true">#</a> 1 数据类型</h2>
<h3 id="_1-1-值类型" tabindex="-1"><a class="header-anchor" href="#_1-1-值类型" aria-hidden="true">#</a> 1.1 值类型</h3>
<h4 id="_1-1-1-整型" tabindex="-1"><a class="header-anchor" href="#_1-1-1-整型" aria-hidden="true">#</a> 1.1.1   整型</h4>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">字节</th>
<th style="text-align:center">范围</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">tinyint</td>
<td style="text-align:center">1</td>
<td style="text-align:center">-128~127</td>
</tr>
<tr>
<td style="text-align:center">smallint</td>
<td style="text-align:center">2</td>
<td style="text-align:center">-32768~32767</td>
</tr>
<tr>
<td style="text-align:center">mediumint</td>
<td style="text-align:center">3</td>
<td style="text-align:center">-8388608~8388607</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center">4</td>
<td style="text-align:center">-2<sup>31</sup>~2<sup>31</sup>-1</td>
</tr>
<tr>
<td style="text-align:center">bigint</td>
<td style="text-align:center">8</td>
<td style="text-align:center">-2<sup>63</sup>~2<sup>63</sup>-1</td>
</tr>
</tbody>
</table>
<p>1、无符号整数（unsigned）：无符号数没有负数，正数部分是有符号的两倍。</p>
<p>例题</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table stu(
    -&gt; id smallint unsigned auto_increment primary key comment '主键',
    -&gt; age tinyint unsigned not null comment '年龄',
    -&gt; money bigint unsigned comment '存款'
    -&gt; );
Query OK, 0 rows affected (0.06 sec)

mysql&gt; desc stu;
+-------+----------------------+------+-----+---------+----------------+
| Field | Type                 | Null | Key | Default | Extra          |
+-------+----------------------+------+-----+---------+----------------+
| id    | smallint(5) unsigned | NO   | PRI | NULL    | auto_increment |
| age   | tinyint(3) unsigned  | NO   |     | NULL    |                |
| money | bigint(20) unsigned  | YES  |     | NULL    |                |
+-------+----------------------+------+-----+---------+----------------+
3 rows in set, 3 warnings (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>2、整型支持显示宽度（最小的显示位数）  比如int(5)，如果数值的位数小于5位，前面加上前导0。比如输入12，显示00012；大于5位就不添加前导0。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>脚下留心：必须结合zerofill才起作用
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table stu(
    -&gt; id int(5),
    -&gt; age int(5) zerofill   # 填充前导0
    -&gt; );
Query OK, 0 rows affected (0.02 sec)

mysql&gt; desc stu;
+-------+--------------------------+------+-----+---------+-------+
| Field | Type                     | Null | Key | Default | Extra |
+-------+--------------------------+------+-----+---------+-------+
| id    | int(5)                   | YES  |     | NULL    |       |
| age   | int(5) unsigned zerofill | YES  |     | NULL    |       |
+-------+--------------------------+------+-----+---------+-------+
2 rows in set (0.02 sec)

mysql&gt; insert into stu values (1,11);
mysql&gt; insert into stu values (1111111,2222222);
Query OK, 1 row affected (0.00 sec)

mysql&gt; select * from stu;
+---------+---------+
| id      | age     |
+---------+---------+
|       1 |   00011 |
| 1111111 | 2222222 |    # 注意：age填充了前导0
+---------+---------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="_1-1-2-浮点型-保存近似值小数" tabindex="-1"><a class="header-anchor" href="#_1-1-2-浮点型-保存近似值小数" aria-hidden="true">#</a> 1.1.2   浮点型（保存近似值小数）</h4>
<table>
<thead>
<tr>
<th style="text-align:center">浮点型</th>
<th style="text-align:center">占用字节</th>
<th style="text-align:center">范围</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">float（单精度）</td>
<td style="text-align:center">4</td>
<td style="text-align:center">-3.4E+38~3.4E+38</td>
</tr>
<tr>
<td style="text-align:center">double（双精度）</td>
<td style="text-align:center">8</td>
<td style="text-align:center">-1.8E+308~1.8E+308</td>
</tr>
</tbody>
</table>
<p>1、浮点数声明:  float(M,D)   double(M,D)</p>
<p>M：总位数</p>
<p>D：小数位数</p>
<p>例题；</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t1(
    -&gt; num1 float(5,2),   #总位数是5，小数位数是2，那么整数位数是3，
    -&gt; num2 double(4,1)
    -&gt; );
Query OK, 0 rows affected (0.08 sec)

mysql&gt; insert into t1 values (1.23,1.23); #如果精度超出了允许的范围，会四舍五入
Query OK, 1 row affected (0.00 sec)

mysql&gt; select * from t1;
+------+------+
| num1 | num2 |
+------+------+
| 1.23 |  1.2 |   #如果精度超出了允许的范围，会四舍五入
+------+------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>2、浮点的精度可能会丢失【精度指的是小数】</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536718268668.png" alt="1536718268668" loading="lazy"></p>
<h4 id="_1-1-3-定点数" tabindex="-1"><a class="header-anchor" href="#_1-1-3-定点数" aria-hidden="true">#</a> 1.1.3   定点数</h4>
<p>语法：<code>decimal(M,D)</code></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t4(
   -&gt; num decimal(20,19)
   -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t4 values (1.1234567890123456789);
Query OK, 1 row affected (0.01 sec)

mysql&gt; select * from t4;
+-----------------------+
| num                   |
+-----------------------+
| 1.1234567890123456789 |
+-----------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>多学一招：
1、定点数是变长的，大致每9个数字用4个字节来存储。定点数之所以能保存精确的小数，因为整数和小数是分开存储的。占用的资源比浮点数要多。
2、定点数和浮点数都支持显示宽度和无符号数。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-2-字符型" tabindex="-1"><a class="header-anchor" href="#_1-2-字符型" aria-hidden="true">#</a> 1.2 字符型</h3>
<table>
<thead>
<tr>
<th style="text-align:center">数据类型</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">长度</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">char(长度)</td>
<td style="text-align:center">定长</td>
<td style="text-align:center">最大255</td>
</tr>
<tr>
<td style="text-align:center">varchar(长度)</td>
<td style="text-align:center">变长</td>
<td style="text-align:center">最大65535</td>
</tr>
<tr>
<td style="text-align:center">tinytext</td>
<td style="text-align:center">大段文本</td>
<td style="text-align:center">2<sup>8</sup>-1=255</td>
</tr>
<tr>
<td style="text-align:center">text</td>
<td style="text-align:center">大段文本</td>
<td style="text-align:center">2<sup>16</sup>-1=65535</td>
</tr>
<tr>
<td style="text-align:center">mediumtext</td>
<td style="text-align:center">大段文本</td>
<td style="text-align:center">2<sup>24</sup>-1</td>
</tr>
<tr>
<td style="text-align:center">longtext</td>
<td style="text-align:center">大段文本</td>
<td style="text-align:center">2<sup>32</sup>-1</td>
</tr>
</tbody>
</table>
<p>1、char(10)和varchar(10)的区别？</p>
<p>答：相同点：它们最多只能保存10个字符；</p>
<pre><code>    不同点：char不回收多余的字符，varchar会回收多余的字符。

                    char效率高，浪费空间，varchar节省空间，效率比char低。
</code></pre>
<p>2、char的最大长度是255。  <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536719919287.png" alt="1536719919287" loading="lazy"></p>
<p>3、varchar理论长度是65535字节,实际根本达不到。具体长度与字符编码有关。 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536720096028.png" alt="1536720096028" loading="lazy"></p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536720113031.png" alt="1536720113031" loading="lazy"></p>
<p>4、一个记录的总长度不能超过65535个字节。</p>
<p>5、大块文本（text）不计算在总长度中,一个大块文本只占用10个字节来保存文本的地址。 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536720763914.png" alt="1536720763914" loading="lazy"></p>
<h3 id="_1-3-枚举-enum" tabindex="-1"><a class="header-anchor" href="#_1-3-枚举-enum" aria-hidden="true">#</a> 1.3 枚举（enum）</h3>
<p>1、从集合中选择一个数据（单选）</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t8(
   -&gt; name varchar(20),
   -&gt; sex enum('男','女','保密')   # 枚举
   -&gt; )charset=utf8;
Query OK, 0 rows affected (0.06 sec)

mysql&gt; insert into t8 values ('tom','男');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t8 values ('berry','女');
Query OK, 1 row affected (0.05 sec)

mysql&gt; insert into t8 values ('rose','未知');   # 报错，只能插入枚举值
ERROR 1265 (01000): Data truncated for column 'sex' at row 1
mysql&gt; select * from t8;
+-------+------+
| name  | sex  |
+-------+------+
| tom   | 男     |
| berry | 女    |
+-------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>2、MySQL的枚举类型是通过整数来管理的，第一个值是1，第二个值是2，以此类推。</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536721403493.png" alt="1536721403493" loading="lazy"></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; select sex+0 from t8;
+-------+
| sex+0 |
+-------+
|     1 |
|     2 |
+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>3、既然枚举在数据库内部存储的是整数，那么可以直接插入数字</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; insert into t8 values ('rose',3);  # 可以直接插入数字
Query OK, 1 row affected (0.00 sec)

mysql&gt; select * from t8;
+-------+------+
| name  | sex  |
+-------+------+
| tom   | 男     |
| berry | 女    |
| rose  | 保密     |
+-------+------+
3 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>枚举的优点：</p>
<p>1、     运行速度快（数字比字符串运算速度快）</p>
<p>2、     限制数据，保证数据完整性</p>
<p>3、     节省空间</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>思考：已知枚举占用2个字节，请问最多有多少个枚举值？

答：2个字节=16位，可以保存数字（0-65535），枚举是从1开始，所以枚举最多可以有65535个枚举值。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-4-集合-set" tabindex="-1"><a class="header-anchor" href="#_1-4-集合-set" aria-hidden="true">#</a> 1.4 集合（set）</h3>
<p>从集合中选择一些数据（多选）</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t9(
   -&gt; hobby set('爬山','读书','游泳','敲代码')
   -&gt; );
Query OK, 0 rows affected (0.08 sec)

mysql&gt; insert into t9 values ('爬山');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t9 values ('爬山,游泳');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t9 values ('游泳,爬山');  # 插入顺序不一样，但是显示的顺序是一样的
Query OK, 1 row affected (0.02 sec)

mysql&gt; insert into t9 values ('爬山,游泳,开车');  # 报错，插入集合中没有的选项会报错
ERROR 1265 (01000): Data truncated for column 'hobby' at row 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>每个集合的元素都分配一个固定的数字，分配的方式从左往右按2的0、1、2、…次方</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536723512843.png" alt="1536723512843" loading="lazy"></p>
<hr>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>思考：已知集合占用8个字节，最多可以表示几个选项？

答：8个字节=64位，一个位表示1个选项，最多可以表示64个选项。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-5-日期类型" tabindex="-1"><a class="header-anchor" href="#_1-5-日期类型" aria-hidden="true">#</a> 1.5 日期类型</h3>
<table>
<thead>
<tr>
<th style="text-align:center">数据类型</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">datetime</td>
<td style="text-align:center">日期时间，占用8个字节</td>
</tr>
<tr>
<td style="text-align:center">date</td>
<td style="text-align:center">日期 占用3个字节</td>
</tr>
<tr>
<td style="text-align:center">time</td>
<td style="text-align:center">时间 占用3个字节</td>
</tr>
<tr>
<td style="text-align:center">timestamp</td>
<td style="text-align:center">时间戳，占用4个字节</td>
</tr>
<tr>
<td style="text-align:center">year</td>
<td style="text-align:center">年份   占用1个字节</td>
</tr>
</tbody>
</table>
<h4 id="_1-5-1-datetime" tabindex="-1"><a class="header-anchor" href="#_1-5-1-datetime" aria-hidden="true">#</a> 1.5.1 datetime</h4>
<p>格式：年-月-日 小时:分钟:秒</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t10(
   -&gt; field datetime
   -&gt; );
Query OK, 0 rows affected (0.02 sec)

mysql&gt; insert into t10 values ('2025-10-12 10:12:36');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t10 values ('100-10-12 10:12:36');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t10 values ('10000-10-12 10:12:36');  #datetime保存范围是：1~9999年
ERROR 1292 (22007): Incorrect datetime value: '10000-10-12 10:12:36' for column 'field' at row 1

mysql&gt; select * from t10;
+---------------------+
| field               |
+---------------------+
| 2025-10-12 10:12:36 |
| 0100-10-12 10:12:36 |
+---------------------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="_1-5-2-date" tabindex="-1"><a class="header-anchor" href="#_1-5-2-date" aria-hidden="true">#</a> 1.5.2 date</h4>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t11(
    -&gt; field date
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t11 values ('2025-10-12');
Query OK, 1 row affected (0.00 sec)

mysql&gt; select * from t11;
+------------+
| field      |
+------------+
| 2025-10-12 |
+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="_1-5-3-timestamp" tabindex="-1"><a class="header-anchor" href="#_1-5-3-timestamp" aria-hidden="true">#</a> 1.5.3 timestamp</h4>
<p>时间戳</p>
<p>timestamp类型和 datetime类型在表现上是一样的。他们的区别：
datetime是从1到9999，而timestamp从1970年~2038年，2038年01月19日11:14:07秒以后就超出timestamp范围了。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t12(
    -&gt; field timestamp
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t12 values ('1975-5-5 12:12:12');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t12 values ('1969-5-5 12:12:12');   # 超出范围
ERROR 1292 (22007): Incorrect datetime value: '1969-5-5 12:12:12' for column 'field' at row 1
mysql&gt; insert into t12 values ('2038-1-19 11:14:07');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t12 values ('2038-1-19 11:14:08');  # 超出范围
ERROR 1292 (22007): Incorrect datetime value: '2038-1-19 11:14:08' for column 'field' at row 1

mysql&gt; select * from t12;
+---------------------+
| field               |
+---------------------+
| 1975-05-05 12:12:12 |
| 2038-01-19 11:14:07 |
+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="_1-5-4-year" tabindex="-1"><a class="header-anchor" href="#_1-5-4-year" aria-hidden="true">#</a> 1.5.4 year</h4>
<p>因为只占用1个字节，最多只能表示255个年份，范围是1901-2155之间的年份</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t13(
    -&gt; field year
    -&gt; );
Query OK, 0 rows affected (0.06 sec)

mysql&gt; insert into t13 values (2025);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t13 values (1900);   # 超出范围
ERROR 1264 (22003): Out of range value for column 'field' at row 1
mysql&gt; insert into t13 values (2155);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t13 values (2156);   # 超出范围
ERROR 1264 (22003): Out of range value for column 'field' at row 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="_1-5-5-time" tabindex="-1"><a class="header-anchor" href="#_1-5-5-time" aria-hidden="true">#</a> 1.5.5 time</h4>
<p>表示时间或时间间隔，范围是-838:59:59~838:59:59</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t14(
   -&gt; field time
   -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t14 values ('12:12:12');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t14 values ('212:12:12');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t14 values ('838:59:59');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t14 values ('839:00:00');  # 操作范围
ERROR 1292 (22007): Incorrect time value: '839:00:00' for column 'field' at row 1
mysql&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>多学一招：time支持以天的方式插入</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; insert into t14 values ('10 10:10:10');
Query OK, 1 row affected (0.02 sec)

mysql&gt; select * from t14;
+-----------+
| field     |
+-----------+
| 12:12:12  |
| 212:12:12 |
| 838:59:59 |
| 250:10:10 |
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_1-6-boolean" tabindex="-1"><a class="header-anchor" href="#_1-6-boolean" aria-hidden="true">#</a> 1.6 boolean</h3>
<p>MySQL不支持boolean类型，true和false在数据库中对应1和0。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t15(
   -&gt; field boolean
   -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t15 values (true),(false);   # true和false在数据库中对应1和0
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql&gt; select * from t15;
+-------+
| field |
+-------+
|     1 |
|     0 |
+-------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_1-7-关于数据类型的思考题" tabindex="-1"><a class="header-anchor" href="#_1-7-关于数据类型的思考题" aria-hidden="true">#</a> 1.7 关于数据类型的思考题</h3>
<ol>
<li>
<p>手机号码一般使用什么数据类型存储?               char</p>
</li>
<li>
<p>电话号码使用什么数据类型                                 varchar</p>
</li>
<li>
<p>性别一般使用什么数据类型存储?                      char      enum</p>
</li>
<li>
<p>学生年龄信息一般使用什么数据类型存储?               tinyint</p>
</li>
<li>
<p>照片信息一般使用什么数据类型存储?                      binary</p>
</li>
<li>
<p>薪水一般使用什么数据类型存储?                             decimal</p>
</li>
</ol>
<p>多学一招：一个字段到底选数字还是字符，取决于有没有计算的可能，如果没有计算的可能即使是数字也要用字符类型，比如手机号、QQ号，…</p>
<h2 id="_2-列属性" tabindex="-1"><a class="header-anchor" href="#_2-列属性" aria-hidden="true">#</a> 2 列属性</h2>
<h3 id="_2-1-是否为空-null-not-null" tabindex="-1"><a class="header-anchor" href="#_2-1-是否为空-null-not-null" aria-hidden="true">#</a> 2.1 是否为空(null | not null)</h3>
<p>null：可以为空</p>
<p>not null：不可以为空</p>
<p>思考题</p>
<ol>
<li>
<p>学员姓名允许为空吗?                  非空</p>
</li>
<li>
<p>家庭地址允许为空吗?                  非空</p>
</li>
<li>
<p>电子邮件信息允许为空吗?           可以为空</p>
</li>
<li>
<p>考试成绩允许为空吗?                  可以为空</p>
</li>
</ol>
<h3 id="_2-2-默认值-default" tabindex="-1"><a class="header-anchor" href="#_2-2-默认值-default" aria-hidden="true">#</a> 2.2 默认值（default）</h3>
<p>1、如果一个字段没有插入值，可以默认插入一个指定的值。</p>
<p>2、default关键字用来插入默认值</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t16(
   -&gt; id int unsigned,
   -&gt; addr varchar(20) not null default '地址不详'
   -&gt; );
Query OK, 0 rows affected (0.06 sec)

mysql&gt; insert into t16 values (1,'北京'),(2,default);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql&gt; select * from t16;
+------+----------+
| id   | addr     |
+------+----------+
|    1 | 北京         |
|    2 | 地址不详        |
+------+----------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_2-3-自动增长-auto-increment" tabindex="-1"><a class="header-anchor" href="#_2-3-自动增长-auto-increment" aria-hidden="true">#</a> 2.3 自动增长（auto_increment）</h3>
<p>1、字段的值从1开始，每次递增1，特点就在字段中的数据不可能重复，适合为记录生成唯一的id</p>
<p>2、自动增长都是无符号整数。</p>
<p>3、在MySQL中，auto_increment必须是主键。但是主键不一定是自动增长的。</p>
<p>4、如果要给自动增长列插入数据，使用null关键字。</p>
<p>5、自动增长列上的数据被删除，默认情况下此记录的编号不再使用。</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536737314504.png" alt="1536737314504" loading="lazy"></p>
<h3 id="_2-4-主键-primary-key" tabindex="-1"><a class="header-anchor" href="#_2-4-主键-primary-key" aria-hidden="true">#</a> 2.4 主键（primary key）</h3>
<p>主键：唯一标识表中记录的一个或一组列</p>
<p>主键的特点：不能重复，不能为空</p>
<p>一个表只能有一个主键，主键可以有多个字段组成。</p>
<p>主键的作用：</p>
<p>1、     保证数据完整性</p>
<p>2、     加快查询速度</p>
<h4 id="_2-4-1-添加主键" tabindex="-1"><a class="header-anchor" href="#_2-4-1-添加主键" aria-hidden="true">#</a> 2.4.1 添加主键</h4>
<p>方法一：创建表的时候添加主键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t17(
    -&gt; id varchar(5) primary key,   # 创建主键
    -&gt; name varchar(10) not null
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t17 values ('s2531','tom'),('s2532','berry');
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql&gt; select * from t17;
+-------+-------+
| id    | name  |
+-------+-------+
| s2531 | tom   |
| s2532 | berry |
+-------+-------+
2 rows in set (0.00 sec)

# 如果插入主键相同数据会报错
mysql&gt; insert into t17 values ('s2531','tom');
ERROR 1062 (23000): Duplicate entry 's2531' for key 'PRIMARY'

# 主键不能插入null值
mysql&gt; insert into t17 values (null,'tom');
ERROR 1048 (23000): Column 'id' cannot be null
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>方法二：创建表的时候添加主键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t18(
    -&gt; id int,
    -&gt; name varchar(10),
    -&gt; primary key(id)
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; desc t18;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   | PRI | 0       |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>方法三：更改表的时候添加主键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t20(
    -&gt; id int,
    -&gt; name varchar(10)
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; alter table t20 add primary key (id);   # 更改表添加主键
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql&gt; desc t20;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   | PRI | 0       |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="_2-4-2-创建组合键" tabindex="-1"><a class="header-anchor" href="#_2-4-2-创建组合键" aria-hidden="true">#</a> 2.4.2 创建组合键</h4>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536736467251.png" alt="1536736467251" loading="lazy"></p>
<h4 id="_2-4-3-查看主键" tabindex="-1"><a class="header-anchor" href="#_2-4-3-查看主键" aria-hidden="true">#</a> 2.4.3 查看主键</h4>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536736627655.png" alt="1536736627655" loading="lazy"></p>
<h4 id="_2-4-4-删除主键" tabindex="-1"><a class="header-anchor" href="#_2-4-4-删除主键" aria-hidden="true">#</a> 2.4.4 删除主键</h4>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536736700169.png" alt="1536736700169" loading="lazy"></p>
<h4 id="_2-4-5-选择主键的原则" tabindex="-1"><a class="header-anchor" href="#_2-4-5-选择主键的原则" aria-hidden="true">#</a> 2.4.5 选择主键的原则</h4>
<p>1、     最少性：尽量选择一个字段做主键</p>
<p>2、     稳定性：尽量选择更新少的列做主键</p>
<p>3、     尽量选择数字型的列做主键</p>
<h4 id="_2-4-6-主键思考题" tabindex="-1"><a class="header-anchor" href="#_2-4-6-主键思考题" aria-hidden="true">#</a> 2.4.6 主键思考题</h4>
<p>1、在主键列输入的数值，允许为空吗?       不可以</p>
<p>2、 一个表可以有多个主键吗?                     不可以</p>
<p>3、 在一个学校数据库中，如果一个学校内允许重名的学员，但是一个班级内不允许学员重名，可以组合班级和姓名两个字段一起来作为主键吗？                  可以</p>
<p>4、 标识列（自动增长列）允许为字符数据类型吗？     不可以</p>
<p>5、 表中没有合适的列作为主键怎么办？      添加自动增加列</p>
<p>6、  如果标识列A的初始值为1，增长量为1，则输入三行数据以后，再删除两行，下次再输入数据行的时候，标识值从多少开始？          从4开始</p>
<h3 id="_2-5-唯一键" tabindex="-1"><a class="header-anchor" href="#_2-5-唯一键" aria-hidden="true">#</a> 2.5 唯一键</h3>
<p>特点：</p>
<p>1、不能重复，可以为空</p>
<p>2、一个表可以有多个唯一键</p>
<p>作用：</p>
<p>1、     保证数据不能重复。保证数据完整性</p>
<p>2、     加快数据访问</p>
<h4 id="_2-5-1-添加唯一键" tabindex="-1"><a class="header-anchor" href="#_2-5-1-添加唯一键" aria-hidden="true">#</a> 2.5.1 添加唯一键</h4>
<p>方法一：创建表的时候添加唯一键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t22(
   -&gt; id int primary key,
   -&gt; name varchar(20) unique,    #通过unique添加唯一键
   -&gt; addr varchar(100) unique
   -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t22 values (1,'tom','上海');
Query OK, 1 row affected (0.05 sec)

mysql&gt; insert into t22 values (2,'tom','北京');    #  name重复了，报错
ERROR 1062 (23000): Duplicate entry 'tom' for key 'name'
mysql&gt; insert into t22 values (2,'berry','上海');   # addr重复了 
ERROR 1062 (23000): Duplicate entry '上海' for key 'addr'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>还有一种方法</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t26(
    -&gt; id int,
    -&gt; name varchar(20),
    -&gt; addr varchar(20),
    -&gt; primary key(id),
    -&gt; unique (name),     # 添加唯一键
    -&gt; unique (addr)
    -&gt; );
Query OK, 0 rows affected (0.06 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>方法二：修改表的时候添加唯一键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t23(
    -&gt; id int primary key,
    -&gt; name varchar(20)
    -&gt; );
Query OK, 0 rows affected (0.02 sec)

mysql&gt; alter table t23 add unique (name);    #  添加一个唯一键
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>一次添加多个唯一键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t24(
    -&gt; id int primary key,
    -&gt; name varchar(20),
    -&gt; addr varchar(20)
    -&gt; );
Query OK, 0 rows affected (0.06 sec)

mysql&gt; alter table t24 add unique(name),add unique(addr);  
Query OK, 0 rows affected (0.09 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>添加组合唯一键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t25(
    -&gt; id int primary key,
    -&gt; name varchar(20),
    -&gt; addr varchar(20)
    -&gt; );
Query OK, 0 rows affected (0.09 sec)

mysql&gt; alter table t25 add unique(name,addr);
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_2-5-2-查看唯一键" tabindex="-1"><a class="header-anchor" href="#_2-5-2-查看唯一键" aria-hidden="true">#</a> 2.5.2 查看唯一键</h4>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; show create table t26\G;
*************************** 1. row ***************************
      Table: t26
Create Table: CREATE TABLE `t26` (
 `id` int(11) NOT NULL DEFAULT '0',
 `name` varchar(20) DEFAULT NULL,
 `addr` varchar(20) DEFAULT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `name` (`name`),      # 唯一键
 UNIQUE KEY `addr` (`addr`)       # 唯一键
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)

mysql&gt; show create table t25\G;
*************************** 1. row ***************************
      Table: t25
Create Table: CREATE TABLE `t25` (
 `id` int(11) NOT NULL,
 `name` varchar(20) DEFAULT NULL,
 `addr` varchar(20) DEFAULT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `name` (`name`,`addr`)    # 组合唯一键
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>添加唯一键，给唯一键取名</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table t27(
    -&gt; name varchar(20)
    -&gt; );
Query OK, 0 rows affected (0.03 sec)

mysql&gt; alter table t27 add unique UQ_name(name);
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql&gt; show create table t27\G
*************************** 1. row ***************************
       Table: t27
Create Table: CREATE TABLE `t27` (
  `name` varchar(20) DEFAULT NULL,
  UNIQUE KEY `UQ_name` (`name`)    # 唯一键的名字是UQ_name
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="_2-5-3-删除唯一键" tabindex="-1"><a class="header-anchor" href="#_2-5-3-删除唯一键" aria-hidden="true">#</a> 2.5.3 删除唯一键</h4>
<p>通过唯一键的名字来删除唯一键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>alter table 表名 drop index 唯一键名称;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536739081697.png" alt="1536739081697" loading="lazy"></p>
<p>问题：主键和唯一键的区别？</p>
<p>1、主键不能重复，不能为空，唯一键不能重复，可以为空</p>
<p>2、主键只有一个，唯一键可以有多个。</p>
<h3 id="_2-6-备注-comment" tabindex="-1"><a class="header-anchor" href="#_2-6-备注-comment" aria-hidden="true">#</a> 2.6 备注（comment）</h3>
<p>为了程序员之间的相互交流  <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536739540981.png" alt="1536739540981" loading="lazy"></p>
<h2 id="_3-sql注释" tabindex="-1"><a class="header-anchor" href="#_3-sql注释" aria-hidden="true">#</a> 3 SQL注释</h2>
<p>单行注释：--或#</p>
<p>多行注释：/*    */</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536739661909.png" alt="1536739661909" loading="lazy"></p>
<h2 id="_4-数据完整性介绍" tabindex="-1"><a class="header-anchor" href="#_4-数据完整性介绍" aria-hidden="true">#</a> 4 数据完整性介绍</h2>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536739894901.png" alt="1536739894901" loading="lazy"></p>
<h3 id="_4-1-保证实体完整性" tabindex="-1"><a class="header-anchor" href="#_4-1-保证实体完整性" aria-hidden="true">#</a> 4.1 保证实体完整性</h3>
<p>1、     主键约束</p>
<p>2、     唯一约束</p>
<p>3、     自动增长列</p>
<h3 id="_4-2-保证域完整性" tabindex="-1"><a class="header-anchor" href="#_4-2-保证域完整性" aria-hidden="true">#</a> 4.2 保证域完整性</h3>
<p>1、     数据类型约束</p>
<p>2、     非空约束</p>
<p>3、     默认值约束</p>
<h3 id="_4-3-保证引用完整性" tabindex="-1"><a class="header-anchor" href="#_4-3-保证引用完整性" aria-hidden="true">#</a> 4.3 保证引用完整性</h3>
<p>1、外键约束：从表中的公共字段是主表的外键</p>
<h4 id="_4-3-1-主表和从表" tabindex="-1"><a class="header-anchor" href="#_4-3-1-主表和从表" aria-hidden="true">#</a> 4.3.1 主表和从表</h4>
<p>两个表建立关系（两个表只要有公共字段就有关系），一个表称为主表，一个表称为从表。</p>
<p>外键约束可以实现：</p>
<p>1、     主表中没有的从表中不允许插入</p>
<p>2、     从表中有的主表中不允许删除</p>
<p>3、     不能更改主表中的值而导致从表中的记录孤立存在。</p>
<p>4、     先删除从表，再删除主表</p>
<h4 id="_4-3-2-外键-foreign-key" tabindex="-1"><a class="header-anchor" href="#_4-3-2-外键-foreign-key" aria-hidden="true">#</a> 4.3.2    外键（foreign key）</h4>
<p>1、     外键：从表中的公共字段，公共字段的名字可以不一样，但是数据类型必须一样。</p>
<p>2、     外键约束用来保证引用完整性</p>
<h4 id="_4-3-3-添加外键" tabindex="-1"><a class="header-anchor" href="#_4-3-3-添加外键" aria-hidden="true">#</a> 4.3.3 添加外键</h4>
<p>方法一：创建表的时候添加外键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>create table stuinfo(
   stuno char(4) primary key,
   name varchar(10) not null
);

create table stumarks(
   stuid char(4) primary key,
   score tinyint unsigned,
   foreign key (stuid) references stuinfo(stuno)
);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>方法二：修改表的时候添加外键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table stuinfo(
    -&gt;  stuno char(4) primary key,
    -&gt;  name varchar(10) not null
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; create table stumarks(
    -&gt;  stuid char(4) primary key,
    -&gt;  score tinyint unsigned
    -&gt; );
Query OK, 0 rows affected (0.06 sec)

语法：  alter table 从表 add foreign key (从表的公共字段) references 主表(公共字段)

mysql&gt; alter table stumarks add foreign key (stuid) references stuinfo(stuno);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>脚下留心：要创建外键必须是innodb引擎，myisam不支持外键约束</p>
<h4 id="_4-3-4-查看外键" tabindex="-1"><a class="header-anchor" href="#_4-3-4-查看外键" aria-hidden="true">#</a> 4.3.4 查看外键</h4>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536742477588.png" alt="1536742477588" loading="lazy"></p>
<h4 id="_4-3-5-删除外键" tabindex="-1"><a class="header-anchor" href="#_4-3-5-删除外键" aria-hidden="true">#</a> 4.3.5 删除外键</h4>
<p>通过外键的名字删除外键</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>alter table 表名 drop foreign key 外键名;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例题</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; alter table stumarks drop foreign key stumarks_ibfk_1;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_5-外键操作" tabindex="-1"><a class="header-anchor" href="#_5-外键操作" aria-hidden="true">#</a> 5 外键操作</h2>
<p>1、     严格操作（前面讲的是严格操作）</p>
<p>2、     置空操作（set null）：如果主表记录删除或更新，从表置空</p>
<p>3、     级联操作（cascade）：如果主表记录删除或更新，从表级联</p>
<p>一般来说：主表删除的时候，从表置空操作，主表更新的时候，从表级联操作。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>foreign key(外键) references 主表(关键字段)[主表删除是的动作][主表更新时候的动作]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例题</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table stuinfo(
    -&gt; stuno char(4) primary key,
    -&gt; name varchar(10) not null
    -&gt; );
Query OK, 0 rows affected (0.02 sec)

mysql&gt; create table stumarks(
    -&gt; stuid int auto_increment primary key,
    -&gt; stuno char(4) ,
    -&gt; score tinyint unsigned,
    -&gt;  foreign key (stuno) references stuinfo(stuno) on delete set null on update cascade
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into stuinfo values ('s101','tom');
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into stumarks values (null,'s101',88);
Query OK, 1 row affected (0.00 sec)

mysql&gt; select * from stuinfo;
+-------+------+
| stuno | name |
+-------+------+
| s101  | tom  |
+-------+------+
1 row in set (0.00 sec)

mysql&gt; update stuinfo set stuno='s102' where stuno='s101';   # 更新时级联
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql&gt; select * from stumarks;
+-------+-------+-------+
| stuid | stuno | score |
+-------+-------+-------+
|     1 | s102  |    88 |
+-------+-------+-------+
1 row in set (0.00 sec)

mysql&gt; delete from stuinfo where stuno='s102';    # 删除时置空
Query OK, 1 row affected (0.02 sec)

mysql&gt; select * from stumarks;
+-------+-------+-------+
| stuid | stuno | score |
+-------+-------+-------+
|     1 | NULL  |    88 |
+-------+-------+-------+
1 row in set (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div></template>
