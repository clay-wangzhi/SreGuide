import{_ as n,e as s}from"./app.958f2970.js";const e={},a=s(`<h1 id="_4-\u89C6\u56FE\u3001\u4E8B\u52A1\u3001\u7D22\u5F15\u3001\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u89C6\u56FE\u3001\u4E8B\u52A1\u3001\u7D22\u5F15\u3001\u51FD\u6570" aria-hidden="true">#</a> 4 \u89C6\u56FE\u3001\u4E8B\u52A1\u3001\u7D22\u5F15\u3001\u51FD\u6570</h1><h2 id="_1-\u89C6\u56FE\u3010view\u3011" tabindex="-1"><a class="header-anchor" href="#_1-\u89C6\u56FE\u3010view\u3011" aria-hidden="true">#</a> 1 \u89C6\u56FE\u3010view\u3011</h2><p>1\u3001 \u89C6\u56FE\u662F\u4E00\u5F20\u865A\u62DF\u8868\uFF0C\u5B83\u8868\u793A\u4E00\u5F20\u8868\u7684\u90E8\u5206\u6216\u591A\u5F20\u8868\u7684\u7EFC\u5408\u7684\u7ED3\u6784\u3002</p><p>2\u3001 \u89C6\u56FE\u4EC5\u4EC5\u662F\u8868\u7ED3\u6784\uFF0C\u6CA1\u6709\u8868\u6570\u636E\u3002\u89C6\u56FE\u7684\u7ED3\u6784\u548C\u6570\u636E\u5EFA\u7ACB\u5728\u8868\u7684\u57FA\u7840\u4E0A\u3002</p><h3 id="_1-1-\u521B\u5EFA\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-1-\u521B\u5EFA\u89C6\u56FE" aria-hidden="true">#</a> 1.1 \u521B\u5EFA\u89C6\u56FE</h3><p>\u8BED\u6CD5</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create [or replace] view \u89C6\u56FE\u7684\u540D\u79F0
as
	select\u8BED\u53E5;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F8B\u9898\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create view vw_stu
    -&gt; as
    -&gt; select stuname,stusex,writtenexam,labexam from stuinfo inner join stumarks using(stuno);
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u591A\u5B66\u4E00\u62DB\uFF1A\u56E0\u4E3A\u89C6\u56FE\u662F\u4E00\u4E2A\u8868\u7ED3\u6784\uFF0C\u6240\u4EE5\u521B\u5EFA\u89C6\u56FE\u540E\uFF0C\u4F1A\u5728\u6570\u636E\u5E93\u6587\u4EF6\u5939\u4E2D\u591A\u4E00\u4E2A\u4E0E\u89C6\u56FE\u540D\u540C\u540D\u7684.frm\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-2-\u4F7F\u7528\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4F7F\u7528\u89C6\u56FE" aria-hidden="true">#</a> 1.2 \u4F7F\u7528\u89C6\u56FE</h3><p>\u89C6\u56FE\u662F\u4E00\u5F20\u865A\u62DF\u8868\uFF0C\u89C6\u56FE\u7684\u7528\u6CD5\u548C\u8868\u7684\u7528\u6CD5\u4E00\u6837\u7684</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select * from vw_stu;
+----------+--------+-------------+---------+
| stuname  | stusex | writtenexam | labexam |
+----------+--------+-------------+---------+
| \u674E\u65AF\u6587        | \u5973      |          80 |      58 |
| \u674E\u6587\u624D        | \u7537       |          50 |      90 |
| \u6B27\u9633\u4FCA\u96C4        | \u7537       |          65 |      50 |
| \u5F20\u79CB\u4E3D         | \u7537       |          77 |      82 |
| \u4E89\u9752\u5C0F\u5B50        | \u7537       |          56 |      48 |
+----------+--------+-------------+---------+

mysql&gt; update vw_stu set writtenexam=88 where stuname=&#39;\u674E\u65AF\u6587&#39;;
Query OK, 1 row affected (0.05 sec)
Rows matched: 1  Changed: 1  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_1-3-\u67E5\u770B\u89C6\u56FE\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-3-\u67E5\u770B\u89C6\u56FE\u7684\u7ED3\u6784" aria-hidden="true">#</a> 1.3 \u67E5\u770B\u89C6\u56FE\u7684\u7ED3\u6784</h3><p>\u8BED\u6CD5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>desc \u89C6\u56FE\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; desc vw_stu;
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| stuname     | varchar(10) | NO   |     | NULL    |       |
| stusex      | char(2)     | NO   |     | NULL    |       |
| writtenexam | int(11)     | YES  |     | NULL    |       |
| labexam     | int(11)     | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_1-4-\u67E5\u770B\u521B\u5EFA\u89C6\u56FE\u7684\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-4-\u67E5\u770B\u521B\u5EFA\u89C6\u56FE\u7684\u8BED\u6CD5" aria-hidden="true">#</a> 1.4 \u67E5\u770B\u521B\u5EFA\u89C6\u56FE\u7684\u8BED\u6CD5</h3><p>\u8BED\u6CD5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show create view \u89C6\u56FE\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537067071676.png" alt="1537067071676" loading="lazy"></p><h3 id="_1-5-\u663E\u793A\u6240\u6709\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-5-\u663E\u793A\u6240\u6709\u89C6\u56FE" aria-hidden="true">#</a> 1.5 \u663E\u793A\u6240\u6709\u89C6\u56FE</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code> #\u65B9\u6CD5\u4E00\uFF1A
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

# \u65B9\u6CD5\u4E8C
mysql&gt; select table_name from information_schema.views;
+------------+
| table_name |
+------------+
| vw_stu     |
+------------+
1 row in set (0.05 sec)
+------------------+

#\u65B9\u6CD5\u4E09
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h3 id="_1-6-\u66F4\u6539\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-6-\u66F4\u6539\u89C6\u56FE" aria-hidden="true">#</a> 1.6 \u66F4\u6539\u89C6\u56FE</h3><p>\u8BED\u6CD5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>alter view \u89C6\u56FE\u540D
as
	select \u8BED\u53E5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F8B\u9898\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; alter view vw_stu
    -&gt; as
    -&gt; select * from stuinfo;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-7-\u5220\u9664\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-7-\u5220\u9664\u89C6\u56FE" aria-hidden="true">#</a> 1.7 \u5220\u9664\u89C6\u56FE</h3><p>\u8BED\u6CD5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>drop view [if exists] \u89C6\u56FE1,\u89C6\u56FE2,\u2026
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; drop view vw_stu;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-8-\u89C6\u56FE\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-8-\u89C6\u56FE\u7684\u4F5C\u7528" aria-hidden="true">#</a> 1.8 \u89C6\u56FE\u7684\u4F5C\u7528</h3><ol><li><p>\u7B5B\u9009\u6570\u636E\uFF0C\u9632\u6B62\u672A\u7ECF\u8BB8\u53EF\u8BBF\u95EE\u654F\u611F\u6570\u636E</p></li><li><p>\u9690\u85CF\u8868\u7ED3\u6784</p></li><li><p>\u964D\u4F4ESQL\u8BED\u53E5\u7684\u590D\u6742\u5EA6</p></li></ol><h3 id="_1-9\u89C6\u56FE\u7684\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-9\u89C6\u56FE\u7684\u7B97\u6CD5" aria-hidden="true">#</a> 1.9 \u89C6\u56FE\u7684\u7B97\u6CD5</h3><p>\u573A\u666F\uFF1A\u627E\u51FA\u8BED\u6587\u6210\u7EE9\u6700\u9AD8\u7684\u7537\u751F\u548C\u5973\u751F</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select * from (select * from stu order by ch desc) as t group by stusex;
+--------+----------+--------+--------+---------+------------+------+------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+----------+--------+--------+---------+------------+------+------+
| s25321 | Tabm     | \u5973      |     23 |       9 | \u6CB3\u5317          |   88 |   77 |
| s25318 | \u4E89\u9752\u5C0F\u5B50        | \u7537       |     26 |       6 | \u5929\u6D25           |   86 |   92 |
+--------+----------+--------+--------+---------+------------+------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u5C06\u5B50\u67E5\u8BE2\u5C01\u88C5\u5230\u89C6\u56FE\u4E2D</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create view vw_stu
    -&gt; as
    -&gt; select * from stu order by ch desc;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u53EF\u4EE5\u5C06\u4E0A\u9762\u7684\u5B50\u67E5\u8BE2\u66F4\u6539\u6210\u89C6\u56FE\uFF0C\u4F46\u662F\uFF0C\u7ED3\u679C\u548C\u4E0A\u9762\u4E0D\u4E00\u6837</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select * from vw_stu group by stusex;
+--------+---------+--------+--------+---------+------------+------+------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+---------+--------+--------+---------+------------+------+------+
| s25301 | \u5F20\u79CB\u4E3D        | \u7537       |     18 |       1 | \u5317\u4EAC           |   80 | NULL |
| s25303 | \u674E\u65AF\u6587       | \u5973      |     22 |       2 | \u5317\u4EAC           |   55 |   82 |
+--------+---------+--------+--------+---------+------------+------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u539F\u56E0\uFF1A\u8FD9\u662F\u56E0\u4E3A\u89C6\u56FE\u7684\u7B97\u6CD5\u9020\u6210\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. merge\uFF1A\u5408\u5E76\u7B97\u6CD5\uFF0C\u5C06\u89C6\u56FE\u7684\u8BED\u53E5\u548C\u5916\u5C42\u7684\u8BED\u53E5\u5408\u5E76\u540E\u5728\u6267\u884C\u3002
2. temptable\uFF1A\u4E34\u65F6\u8868\u7B97\u6CD5\uFF0C\u5C06\u89C6\u56FE\u751F\u6210\u4E00\u4E2A\u4E34\u65F6\u8868\uFF0C\u518D\u6267\u884C\u5916\u5C42\u8BED\u53E5
3. undefined\uFF1A\u672A\u5B9A\u4E49\uFF0CMySQL\u5230\u5E95\u7528merge\u8FD8\u662F\u7528temptable\u7531MySQL\u51B3\u5B9A\uFF0C\u8FD9\u662F\u4E00\u4E2A\u9ED8\u8BA4\u7684\u7B97\u6CD5\uFF0C\u4E00\u822C\u89C6\u56FE\u90FD\u4F1A\u9009\u62E9merge\u7B97\u6CD5\uFF0C\u56E0\u4E3Amerge\u6548\u7387\u9AD8\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u89E3\u51B3\uFF1A\u5728\u521B\u5EFA\u89C6\u56FE\u7684\u65F6\u5019\u6307\u5B9A\u89C6\u56FE\u7684\u7B97\u6CD5</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create algorithm=temptable view \u89C6\u56FE\u540D
as
	select \u8BED\u53E5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6307\u5B9A\u7B97\u6CD5\u521B\u5EFA\u89C6\u56FE</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create algorithm=temptable view vw_stu
    -&gt; as
    -&gt;  select * from stu order by ch desc;
Query OK, 0 rows affected (0.00 sec)

mysql&gt; select * from vw_stu group by stusex;   # \u7ED3\u679C\u662F\u4E00\u81F4\u7684
+--------+----------+--------+--------+---------+------------+------+------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+----------+--------+--------+---------+------------+------+------+
| s25321 | Tabm     | \u5973      |     23 |       9 | \u6CB3\u5317          |   88 |   77 |
| s25318 | \u4E89\u9752\u5C0F\u5B50        | \u7537       |     26 |       6 | \u5929\u6D25           |   86 |   92 |
+--------+----------+--------+--------+---------+------------+------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_2-\u4E8B\u52A1\u3010transaction\u3011" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8B\u52A1\u3010transaction\u3011" aria-hidden="true">#</a> 2 \u4E8B\u52A1\u3010transaction\u3011</h2><ol><li>\u4E8B\u52A1\u662F\u4E00\u4E2A\u4E0D\u53EF\u5206\u5272\u7684\u6267\u884C\u5355\u5143</li><li>\u4E8B\u52A1\u4F5C\u4E3A\u4E00\u4E2A\u6574\u4F53\u8981\u4E48\u4E00\u8D77\u6267\u884C\uFF0C\u8981\u4E48\u4E00\u8D77\u56DE\u6EDA</li></ol><p>\u63D2\u5165\u6D4B\u8BD5\u6570\u636E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table bank(
    -&gt; cardid char(4) primary key,
    -&gt; money int
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into bank values (&#39;1001&#39;,1000),(&#39;1002&#39;,100);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_2-1-\u4E8B\u52A1\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4E8B\u52A1\u64CD\u4F5C" aria-hidden="true">#</a> 2.1 \u4E8B\u52A1\u64CD\u4F5C</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5F00\u542F\u4E8B\u52A1\uFF1Astart transaction\u6216begin [work]
\u63D0\u4EA4\u4E8B\u52A1\uFF1Acommit
\u56DE\u6EDA\u4E8B\u52A1\uFF1Arollback
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F8B\u9898\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; delimiter //            # \u66F4\u6539\u5B9A\u754C\u7B26

mysql&gt; start transaction;			# \u5F00\u542F\u4E8B\u52A1
    -&gt; update bank set money=money-100 where cardid=&#39;1001&#39;;
    -&gt; update bank set money=money+100 where cardid=&#39;1002&#39;  //
Query OK, 0 rows affected (0.00 sec)

mysql&gt; commit //   # \u63D0\u4EA4\u4E8B\u52A1

mysql&gt; rollback //  # \u56DE\u6EDA\u4E8B\u52A1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u601D\u8003\uFF1A\u4E8B\u52A1\u4EC0\u4E48\u65F6\u5019\u4EA7\u751F\uFF1F\u4EC0\u4E48\u65F6\u5019\u7ED3\u675F\uFF1F
\u7B54\uFF1A\u5F00\u542F\u7684\u65F6\u5019\u4EA7\u751F\uFF0C\u63D0\u4EA4\u4E8B\u52A1\u6216\u56DE\u6EDA\u4E8B\u52A1\u90FD\u7ED3\u675F

\u811A\u4E0B\u7559\u5FC3\uFF1A\u53EA\u6709innodb\u548CBDB\u624D\u652F\u6301\u4E8B\u52A1\uFF0Cmyisam\u4E0D\u652F\u6301\u4E8B\u52A1\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-2-\u8BBE\u7F6E\u4E8B\u52A1\u7684\u56DE\u6EDA\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8BBE\u7F6E\u4E8B\u52A1\u7684\u56DE\u6EDA\u70B9" aria-hidden="true">#</a> 2.2 \u8BBE\u7F6E\u4E8B\u52A1\u7684\u56DE\u6EDA\u70B9</h3><p>\u8BED\u6CD5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u8BBE\u7F6E\u56DE\u6EDA\u70B9\uFF1A savepoint \u56DE\u6EDA\u70B9\u540D
\u56DE\u6EDA\u5230\u56DE\u6EDA\u70B9\uFF1A rollback to \u56DE\u6EDA\u70B9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F8B\u9898\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt;  start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into bank values (&#39;1003&#39;,1000);
Query OK, 1 row affected (0.00 sec)

mysql&gt; savepoint aa;    # \u8BBE\u7F6E\u56DE\u6EDA\u70B9 aa
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into bank values (&#39;1004&#39;,500);
Query OK, 1 row affected (0.00 sec)
 
mysql&gt; savepoint bb;   # \u8BBE\u7F6E\u56DE\u6EDA\u70B9bb
Query OK, 0 rows affected (0.00 sec)
 
mysql&gt; rollback to aa;    # \u56DE\u6EDA\u5230aa\u70B9
Query OK, 0 rows affected (0.00 sec)

mysql&gt; commit;    # \u63D0\u4EA4\u4E8B\u52A1

mysql&gt; select * from bank ;
+--------+-------+
| cardid | money |
+--------+-------+
| 1001   |   800 |
| 1002   |   200 |
| 1003   |  1000 |
+--------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="_2-3-\u4E8B\u52A1\u7684\u7279\u6027-acid" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4E8B\u52A1\u7684\u7279\u6027-acid" aria-hidden="true">#</a> 2.3 \u4E8B\u52A1\u7684\u7279\u6027\uFF08ACID\uFF09</h3><ol><li>\u539F\u5B50\u6027\uFF08Atomicity\uFF09\uFF1A\u4E8B\u52A1\u662F\u4E00\u4E2A\u6574\u4F53\uFF0C\u4E0D\u53EF\u4EE5\u518D\u5206\uFF0C\u8981\u4E48\u4E00\u8D77\u6267\u884C\uFF0C\u8981\u4E48\u4E00\u8D77\u4E0D\u6267\u884C\u3002</li><li>\u4E00\u81F4\u6027\uFF08Consistency\uFF09\uFF1A\u4E8B\u52A1\u5B8C\u6210\u65F6\uFF0C\u6570\u636E\u5FC5\u987B\u5904\u4E8E\u4E00\u81F4\u7684\u72B6\u6001\u3002</li><li>\u9694\u79BB\u6027\uFF08Isolation\uFF09\uFF1A\u6BCF\u4E2A\u4E8B\u52A1\u90FD\u662F\u76F8\u4E92\u9694\u79BB\u7684</li><li>\u6C38\u4E45\u6027\uFF08Durability\uFF09\uFF1A\u4E8B\u52A1\u5B8C\u6210\u540E\uFF0C\u5BF9\u6570\u636E\u7684\u4FEE\u6539\u662F\u6C38\u4E45\u6027\u7684\u3002</li></ol><h2 id="_3-\u7D22\u5F15\u3010index\u3011" tabindex="-1"><a class="header-anchor" href="#_3-\u7D22\u5F15\u3010index\u3011" aria-hidden="true">#</a> 3 \u7D22\u5F15\u3010index\u3011</h2><p>\u7D22\u5F15\u7684\u4F18\u70B9\uFF1A\u67E5\u8BE2\u901F\u5EA6\u5FEB</p><p>\u7D22\u5F15\u7684\u7F3A\u70B9\uFF1A</p><ol><li>\u589E\u3001\u5220\u3001\u6539\uFF08\u6570\u636E\u64CD\u4F5C\u8BED\u53E5\uFF09\u6548\u7387\u4F4E\u4E86</li><li>\u7D22\u5F15\u5360\u7528\u7A7A\u95F4</li></ol><h3 id="_3-1\u7D22\u5F15\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3-1\u7D22\u5F15\u7684\u7C7B\u578B" aria-hidden="true">#</a> 3.1 \u7D22\u5F15\u7684\u7C7B\u578B</h3><ol><li><p>\u666E\u901A\u7D22\u5F15</p></li><li><p>\u552F\u4E00\u7D22\u5F15\uFF08\u552F\u4E00\u952E\uFF09</p></li><li><p>\u4E3B\u952E\u7D22\u5F15\uFF1A\u53EA\u8981\u4E3B\u952E\u5C31\u81EA\u52A8\u521B\u5EFA\u4E3B\u952E\u7D22\u5F15\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u521B\u5EFA\u3002</p></li><li><p>\u5168\u6587\u7D22\u5F15\uFF0C\u641C\u7D22\u5F15\u64CE\u4F7F\u7528\uFF0CMySQL\u4E0D\u652F\u6301\u4E2D\u6587\u7684\u5168\u6587\u7D22\u5F15\uFF0C\u6211\u4EEC\u901A\u8FC7sphinx\u53BB\u89E3\u51B3\u4E2D\u6587\u7684\u5168\u6587\u7D22\u5F15\u3002</p></li></ol><h3 id="_3-2\u521B\u5EFA\u666E\u901A\u7D22\u5F15\u3010create-index\u3011" tabindex="-1"><a class="header-anchor" href="#_3-2\u521B\u5EFA\u666E\u901A\u7D22\u5F15\u3010create-index\u3011" aria-hidden="true">#</a> 3.2 \u521B\u5EFA\u666E\u901A\u7D22\u5F15\u3010create index\u3011</h3><p>\u8BED\u6CD5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create index [\u7D22\u5F15\u540D] on \u8868\u540D \uFF08\u5B57\u6BB5\u540D\uFF09
alter table \u8868\u540D add index [\u7D22\u5F15\u7684\u540D\u79F0] \uFF08\u5217\u540D\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F8B\u9898\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u521B\u5EFA\u7D22\u5F15\u65B9\u6CD5\u4E00
mysql&gt; create index ix_stuname on stuinfo(stuname);
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

# \u521B\u5EFA\u7D22\u5F15\u65B9\u6CD5\u4E8C
mysql&gt; alter table stuinfo add index ix_address (stuaddress);
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

# \u521B\u5EFA\u8868\u7684\u65F6\u5019\u5C31\u6DFB\u52A0\u7D22\u5F15
mysql&gt; create table emp(
    -&gt; id int,
    -&gt; name varchar(10),
    -&gt; index ix_name (name)   # \u521B\u5EFA\u7D22\u5F15
    -&gt; );
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_3-3\u521B\u5EFA\u552F\u4E00\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3-3\u521B\u5EFA\u552F\u4E00\u7D22\u5F15" aria-hidden="true">#</a> 3.3 \u521B\u5EFA\u552F\u4E00\u7D22\u5F15</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u8BED\u6CD5\u4E00\uFF1Acreate unique index \u7D22\u5F15\u540D on \u8868\u540D \uFF08\u5B57\u6BB5\u540D\uFF09
\u8BED\u6CD5\u4E8C\uFF1Aalter table \u8868\u540D add unqiue [index] [\u7D22\u5F15\u7684\u540D\u79F0] \uFF08\u5217\u540D\uFF09
\u8BED\u6CD5\u4E09\uFF1A\u521B\u5EFA\u8868\u7684\u65F6\u5019\u6DFB\u52A0\u552F\u4E00\u7D22\u5F15\uFF0C\u548C\u521B\u5EFA\u552F\u4E00\u952E\u662F\u4E00\u6837\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F8B\u9898</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u65B9\u6CD5\u4E00\uFF1A
mysql&gt; create unique index UQ_stuname on stu(stuname);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

# \u65B9\u6CD5\u4E8C\uFF1A
mysql&gt; alter table stu add unique UQ_address (stuaddress);
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

# \u65B9\u6CD5\u4E09
mysql&gt; create table stu2(
    -&gt; id int,
    -&gt; name varchar(20),
    -&gt; unique UQ_name(name)
    -&gt; );
Query OK, 0 rows affected (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_3-4\u5220\u9664\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3-4\u5220\u9664\u7D22\u5F15" aria-hidden="true">#</a> 3.4 \u5220\u9664\u7D22\u5F15</h3><p>\u8BED\u6CD5</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>drop index \u7D22\u5F15\u540D on \u8868\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; drop index ix_stuname on stuinfo;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-5\u521B\u5EFA\u7D22\u5F15\u7684\u6307\u5BFC\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#_3-5\u521B\u5EFA\u7D22\u5F15\u7684\u6307\u5BFC\u539F\u5219" aria-hidden="true">#</a> 3.5 \u521B\u5EFA\u7D22\u5F15\u7684\u6307\u5BFC\u539F\u5219</h3><ol><li><p>\u8BE5\u5217\u7528\u4E8E\u9891\u7E41\u641C\u7D22</p></li><li><p>\u6539\u5217\u7528\u4E8E\u6392\u5E8F</p></li><li><p>\u516C\u5171\u5B57\u6BB5\u8981\u521B\u5EFA\u7D22\u5F15</p></li><li><p>\u5982\u679C\u8868\u4E2D\u7684\u6570\u636E\u5F88\u5C11\uFF0C\u4E0D\u9700\u8981\u521B\u5EFA\u7D22\u5F15\u3002MySQL\u641C\u7D22\u7D22\u5F15\u7684\u65F6\u95F4\u6BD4\u9010\u6761\u641C\u7D22\u6570\u636E\u7684\u65F6\u95F4\u8981\u957F\u3002</p></li><li><p>\u5982\u679C\u4E00\u4E2A\u5B57\u6BB5\u4E0A\u7684\u6570\u636E\u53EA\u6709\u51E0\u4E2A\u4E0D\u540C\u7684\u503C\uFF0C\u6539\u5B57\u6BB5\u4E0D\u9002\u5408\u505A\u7D22\u5F15\uFF0C\u6BD4\u5982\u6027\u522B\u3002</p></li></ol><h2 id="_4-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u51FD\u6570" aria-hidden="true">#</a> 4 \u51FD\u6570</h2><h3 id="_4-1-\u6570\u5B57\u7C7B" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6570\u5B57\u7C7B" aria-hidden="true">#</a> 4.1 \u6570\u5B57\u7C7B</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select rand();			# \u751F\u6210\u968F\u673A\u6570
+---------------------+
| rand()              |
+---------------------+
| 0.18474003969201822 |
+---------------------+
1 row in set (0.00 sec)

mysql&gt; select * from stuinfo order by rand();   # \u968F\u673A\u6392\u5E8F

mysql&gt; select * from stuinfo order by rand() limit 2;    # \u968F\u673A\u62BD\u4E24\u4E2A\u5B66\u751F
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25305 | \u8BF8\u845B\u4E3D\u4E3D         | \u5973      |     23 |       7 | \u6CB3\u5357           |
| s25304 | \u6B27\u9633\u4FCA\u96C4        | \u7537       |     28 |       4 | \u5929\u6D25           |
+--------+----------+--------+--------+---------+------------+
2 rows in set (0.00 sec)

mysql&gt; select round(3.5);     #\u56DB\u820D\u4E94\u5165
+------------+
| round(3.5) |
+------------+
|          4 |
+------------+
1 row in set (0.00 sec)

mysql&gt; select ceil(3.1);	# \u5411\u4E0A\u53D6\u6574
+-----------+
| ceil(3.1) |
+-----------+
|         4 |
+-----------+
1 row in set (0.00 sec)

mysql&gt; select floor(3.9);	# \u5411\u4E0B\u53D6\u6574
+------------+
| floor(3.9) |
+------------+
|          3 |
+------------+
1 row in set (0.00 sec)

mysql&gt; select truncate(3.1415926,3);	# \u622A\u53D6\u6570\u5B57
+-----------------------+
| truncate(3.1415926,3) |
+-----------------------+
|                 3.141 |
+-----------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h3 id="_4-2-\u5B57\u7B26\u4E32\u7C7B" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5B57\u7B26\u4E32\u7C7B" aria-hidden="true">#</a> 4.2 \u5B57\u7B26\u4E32\u7C7B</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select ucase(&#39;i am a boy!&#39;);		# \u8F6C\u6210\u5927\u5199
+----------------------+
| ucase(&#39;i am a boy!&#39;) |
+----------------------+
| I AM A BOY!          |
+----------------------+
1 row in set (0.00 sec)

mysql&gt; select lcase(&#39;I Am A Boy!&#39;);		#\u8F6C\u6210\u5C0F\u5199
+----------------------+
| lcase(&#39;I Am A Boy!&#39;) |
+----------------------+
| i am a boy!          |
+----------------------+
1 row in set (0.00 sec)

mysql&gt; select left(&#39;abcde&#39;,3);		# \u4ECE\u5DE6\u8FB9\u5F00\u59CB\u622A\u53D6\uFF0C\u622A\u53D63\u4E2A
+-----------------+
| left(&#39;abcde&#39;,3) |
+-----------------+
| abc             |
+-----------------+
1 row in set (0.00 sec)

mysql&gt; select right(&#39;abcde&#39;,3);		# \u4ECE\u53F3\u8FB9\u5F00\u59CB\u622A\u53D6\uFF0C\u622A\u53D63\u4E2A
+------------------+
| right(&#39;abcde&#39;,3) |
+------------------+
| cde              |
+------------------+
1 row in set (0.00 sec)

mysql&gt; select substring(&#39;abcde&#39;,2,3);	#\u4ECE\u7B2C2\u4E2A\u4F4D\u7F6E\u5F00\u59CB\u622A\u53D6\uFF0C\u622A\u53D63\u4E2A\u3010\u4F4D\u7F6E\u4ECE1\u5F00\u59CB\u3011
+------------------------+
| substring(&#39;abcde&#39;,2,3) |
+------------------------+
| bcd                    |
+------------------------+
1 row in set (0.00 sec)

mysql&gt; select concat(&#39;\u4E2D\u56FD&#39;,&#39;\u4E0A\u6D77&#39;);	# \u5B57\u7B26\u4E32\u76F8\u8FDE
+-----------------------+
| concat(&#39;\u4E2D\u56FD&#39;,&#39;\u4E0A\u6D77&#39;)       |
+-----------------------+
| \u4E2D\u56FD\u4E0A\u6D77                    |
+-----------------------+
1 row in set (0.00 sec)

mysql&gt; select concat(stuname,&#39;-&#39;,stusex) from stuinfo;  # \u5C06\u8868\u4E2D\u7684\u59D3\u540D\u548C\u6027\u522B\u8FDE\u63A5\u8D77\u6765
+----------------------------+
| concat(stuname,&#39;-&#39;,stusex) |
+----------------------------+
| \u5F20\u79CB\u4E3D-\u7537                          |
| \u674E\u6587\u624D-\u7537                         |
| \u674E\u65AF\u6587-\u5973                        |
| \u6B27\u9633\u4FCA\u96C4-\u7537                         |
| \u8BF8\u845B\u4E3D\u4E3D-\u5973                         |
| \u4E89\u9752\u5C0F\u5B50-\u7537                         |
| \u6885\u8D85\u98CE-\u5973                        |
+----------------------------+
7 rows in set (0.00 sec)

# coalesce(\u5B57\u6BB51\uFF0C\u5B57\u6BB52)  \u5982\u679C\u5B57\u6BB51\u4E0D\u4E3A\u7A7A\u5C31\u663E\u793A\u5B57\u6BB51\uFF0C\u5426\u5219\uFF0C\u663E\u793A\u5B57\u6BB52
mysql&gt; select stuname,coalesce(writtenexam,&#39;\u7F3A\u8003&#39;),coalesce(labexam,&#39;\u7F3A\u8003&#39;) from stuinfo natural left join stumarks;   # \u5C06\u8003\u8BD5\u6210\u7EE9\u4E3A\u7A7A\u7684\u663E\u793A\u4E3A\u7F3A\u8003
+----------+------------------------------+--------------------------+
| stuname  | coalesce(writtenexam,&#39;\u7F3A\u8003&#39;)    | coalesce(labexam,&#39;\u7F3A\u8003&#39;)    |
+----------+------------------------------+--------------------------+
| \u5F20\u79CB\u4E3D         | 77                           | 82                       |
| \u674E\u6587\u624D        | 50                           | 90                       |
| \u674E\u65AF\u6587        | 88                           | 58                       |
| \u6B27\u9633\u4FCA\u96C4        | 65                           | 50                       |
| \u8BF8\u845B\u4E3D\u4E3D         | \u7F3A\u8003                            | \u7F3A\u8003                        |
| \u4E89\u9752\u5C0F\u5B50        | 56                           | 48                       |
| \u6885\u8D85\u98CE        | \u7F3A\u8003                            | \u7F3A\u8003                        |
+----------+------------------------------+--------------------------+

mysql&gt; select length(&#39;\u9504\u79BE\u65E5\u5F53\u5348&#39;);		# \u5B57\u8282\u957F\u5EA6
+----------------------+
| length(&#39;\u9504\u79BE\u65E5\u5F53\u5348&#39;)          |
+----------------------+
|                   10 |
+----------------------+
1 row in set (0.00 sec)

mysql&gt; select char_length(&#39;\u9504\u79BE\u65E5\u5F53\u5348&#39;);		# \u5B57\u7B26\u4E2A\u6570
+---------------------------+
| char_length(&#39;\u9504\u79BE\u65E5\u5F53\u5348&#39;)          |
+---------------------------+
|                         5 |
+---------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h3 id="_4-3-\u65F6\u95F4\u7C7B" tabindex="-1"><a class="header-anchor" href="#_4-3-\u65F6\u95F4\u7C7B" aria-hidden="true">#</a> 4.3 \u65F6\u95F4\u7C7B</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select unix_timestamp();	#\u83B7\u53D6\u65F6\u95F4\u6233
+------------------+
| unix_timestamp() |
+------------------+
|       1537084508 |
+------------------+
1 row in set (0.00 sec)

mysql&gt; select from_unixtime(unix_timestamp());	# \u5C06\u65F6\u95F4\u6233\u8F6C\u6210\u5E74-\u6708-\u65E5 \u5C0F\u65F6:\u5206\u949F:\u79D2\u7684\u683C\u5F0F
+---------------------------------+
| from_unixtime(unix_timestamp()) |
+---------------------------------+
| 2018-09-16 15:55:56             |
+---------------------------------+
1 row in set (0.00 sec)

mysql&gt; select now();		# \u83B7\u53D6\u5F53\u524D\u65E5\u671F\u65F6\u95F4
+---------------------+
| now()               |
+---------------------+
| 2018-09-16 15:57:04 |
+---------------------+
1 row in set (0.00 sec)

mysql&gt; select year(now()) \u5E74,month(now()) \u6708, day(now()) \u65E5,hour(now()) \u5C0F,minute(now()) \u5206\u949F,second(now()) \u79D2;
+------+------+------+------+------+------+
| \u5E74     | \u6708     | \u65E5     | \u5C0F\u65F6   | \u5206\u949F     | \u79D2     |
+------+------+------+------+------+------+
| 2018 |    9 |   16 |   15 |   59 |   14 |
+------+------+------+------+------+------+
1 row in set (0.00 sec)

mysql&gt; select dayname(now()) \u661F\u671F,monthname(now()),dayofyear(now()) \u672C\u5E74\u7684\u7B2C\u51E0\u5929;
+--------+------------------+--------------+
| \u661F\u671F       | monthname(now()) | \u672C\u5E74\u7684\u7B2C\u51E0\u5929           |
+--------+------------------+--------------+
| Sunday | September        |          259 |
+--------+------------------+--------------+
1 row in set (0.00 sec)

mysql&gt; select datediff(now(),&#39;2008-8-8&#39;);	# \u65E5\u671F\u76F8\u51CF
+----------------------------+
| datediff(now(),&#39;2008-8-8&#39;) |
+----------------------------+
|                       3691 |
+----------------------------+
1 row in set (0.00 sec)

mysql&gt; select convert(now(),date),convert(now(),time);	# \u5C06now()\u8F6C\u6210\u65E5\u671F\u548C\u65F6\u95F4
+---------------------+---------------------+
| convert(now(),date) | convert(now(),time) |
+---------------------+---------------------+
| 2018-09-16          | 16:07:24            |
+---------------------+---------------------+

mysql&gt; select cast(now() as date),cast(now() as time);   # \u5C06now()\u8F6C\u6210\u65E5\u671F\u548C\u65F6\u95F4
+---------------------+---------------------+
| cast(now() as date) | cast(now() as time) |
+---------------------+---------------------+
| 2018-09-16          | 16:08:03            |
+---------------------+---------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><h3 id="_4-4-\u52A0\u5BC6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-4-\u52A0\u5BC6\u51FD\u6570" aria-hidden="true">#</a> 4.4 \u52A0\u5BC6\u51FD\u6570</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>+----------------------------------+------------------------------------------+
| md5(&#39;root&#39;)                      | sha(&#39;root&#39;)                              |
+----------------------------------+------------------------------------------+
| 63a9f0ea7bb98050796b649e85481845 | dc76e9f0c0006e8f919e0c515c66dbba3982f785 |
+----------------------------------+------------------------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-5-\u5224\u65AD\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-5-\u5224\u65AD\u51FD\u6570" aria-hidden="true">#</a> 4.5 \u5224\u65AD\u51FD\u6570</h3><p>\u8BED\u6CD5</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>if(\u8868\u8FBE\u5F0F,\u503C1,\u503C2)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select if(10%2=0,&#39;\u5076\u6570&#39;,&#39;\u5947\u6570&#39;);
+--------------------------+
| if(10%2=0,&#39;\u5076\u6570&#39;,&#39;\u5947\u6570&#39;)        |
+--------------------------+
| \u5076\u6570                        |
+--------------------------+
1 row in set (0.00 sec)

# \u8BED\u6587\u548C\u6570\u5B66\u90FD\u8D85\u8FC760\u5206\u624D\u901A\u8FC7
mysql&gt; select stuname,ch,math,if(ch&gt;=60 &amp;&amp; math&gt;=60,&#39;\u901A\u8FC7&#39;,&#39;\u4E0D\u901A\u8FC7&#39;) &#39;\u662F\u5426\u901A\u8FC7&#39; from stu;
+----------+------+------+----------+
| stuname  | ch   | math | \u662F\u5426\u901A\u8FC7       |
+----------+------+------+----------+
| \u5F20\u79CB\u4E3D         |   80 | NULL | \u4E0D\u901A\u8FC7        |
| \u674E\u6587\u624D        |   77 |   76 | \u901A\u8FC7        |
| \u674E\u65AF\u6587        |   55 |   82 | \u4E0D\u901A\u8FC7        |
| \u6B27\u9633\u4FCA\u96C4        | NULL |   74 | \u4E0D\u901A\u8FC7        |
| \u8BF8\u845B\u4E3D\u4E3D         |   72 |   56 | \u4E0D\u901A\u8FC7        |
| \u4E89\u9752\u5C0F\u5B50        |   86 |   92 | \u901A\u8FC7        |
| \u6885\u8D85\u98CE        |   74 |   67 | \u901A\u8FC7        |
| Tom      |   65 |   67 | \u901A\u8FC7        |
| Tabm     |   88 |   77 | \u901A\u8FC7        |
+----------+------+------+----------+
9 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="_5-\u9884\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_5-\u9884\u5904\u7406" aria-hidden="true">#</a> 5 \u9884\u5904\u7406</h2><p>\u9884\u7F16\u8BD1\u4E00\u6B21\uFF0C\u53EF\u4EE5\u591A\u6B21\u6267\u884C\u3002\u7528\u6765\u89E3\u51B3\u4E00\u6761SQL\u8BED\u53E5\u9891\u7E41\u6267\u884C\u7684\u95EE\u9898\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9884\u5904\u7406\u8BED\u53E5\uFF1Aprepare \u9884\u5904\u7406\u540D\u5B57 from \u2018sql\u8BED\u53E5\u2019
\u6267\u884C\u9884\u5904\u7406\uFF1Aexecute \u9884\u5904\u7406\u540D\u5B57 [using \u53D8\u91CF]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F8B\u9898\u4E00\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; prepare stmt from &#39;select * from stuinfo&#39;;	# \u521B\u5EFA\u9884\u5904\u7406
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql&gt; execute stmt;	# \u6267\u884C\u9884\u5904\u7406
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25301 | \u5F20\u79CB\u4E3D         | \u7537       |     18 |       1 | \u5317\u4EAC           |
| s25302 | \u674E\u6587\u624D        | \u7537       |     31 |       3 | \u4E0A\u6D77          |
| s25303 | \u674E\u65AF\u6587        | \u5973      |     22 |       2 | \u5317\u4EAC           |
| s25304 | \u6B27\u9633\u4FCA\u96C4        | \u7537       |     28 |       4 | \u5929\u6D25           |
| s25305 | \u8BF8\u845B\u4E3D\u4E3D         | \u5973      |     23 |       7 | \u6CB3\u5357           |
| s25318 | \u4E89\u9752\u5C0F\u5B50        | \u7537       |     26 |       6 | \u5929\u6D25           |
| s25319 | \u6885\u8D85\u98CE        | \u5973      |     23 |       5 | \u6CB3\u5317          |
+--------+----------+--------+--------+---------+------------+
7 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u4F8B\u9898\u4E8C\uFF1A\u4F20\u9012\u53C2\u6570</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; delimiter // 
mysql&gt; prepare stmt from &#39;select * from stuinfo where stuno=?&#39; // -- ?\u662F\u4F4D\u7F6E\u5360\u4F4D\u7B26
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql&gt; set @id=&#39;s25301&#39;;       -- \u53D8\u91CF\u4EE5@\u5F00\u5934\uFF0C\u901A\u8FC7set\u7ED9\u53D8\u91CF\u8D4B\u503C
    -&gt; execute stmt using @id //  -- \u6267\u884C\u9884\u5904\u7406\uFF0C\u4F20\u9012\u53C2\u6570
Query OK, 0 rows affected (0.00 sec)

+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25301 | \u5F20\u79CB\u4E3D        | \u7537       |     18 |       1 | \u5317\u4EAC           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u811A\u4E0B\u7559\u5FC3\uFF1A
1\u3001?\u662F\u4F4D\u7F6E\u5360\u4F4D\u7B26
2\u3001\u53D8\u91CF\u4EE5@\u5F00\u5934
3\u3001\u901A\u8FC7set\u7ED9\u53D8\u91CF\u8D4B\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F8B\u9898\u4E09\uFF1A\u4F20\u9012\u591A\u4E2A\u53C2\u6570</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; prepare stmt from &#39;select * from stuinfo where stusex=? and stuaddress=?&#39;  //
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql&gt; set @sex=&#39;\u7537&#39;;
    -&gt; set @addr=&#39;\u5317\u4EAC&#39;;
    -&gt; execute stmt using @sex,@addr //
Query OK, 0 rows affected (0.00 sec)

Query OK, 0 rows affected (0.00 sec)

+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25301 | \u5F20\u79CB\u4E3D        | \u7537       |     18 |       1 | \u5317\u4EAC           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_6-\u5B58\u50A8\u8FC7\u7A0B\u3010procedure\u3011" tabindex="-1"><a class="header-anchor" href="#_6-\u5B58\u50A8\u8FC7\u7A0B\u3010procedure\u3011" aria-hidden="true">#</a> 6 \u5B58\u50A8\u8FC7\u7A0B\u3010procedure\u3011</h2><h3 id="_6-1-\u5B58\u50A8\u8FC7\u7A0B\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_6-1-\u5B58\u50A8\u8FC7\u7A0B\u7684\u4F18\u70B9" aria-hidden="true">#</a> 6.1 \u5B58\u50A8\u8FC7\u7A0B\u7684\u4F18\u70B9</h3><ol><li>\u5B58\u50A8\u8FC7\u7A0B\u53EF\u4EE5\u51CF\u5C11\u7F51\u7EDC\u6D41\u91CF</li><li>\u5141\u8BB8\u6A21\u5757\u5316\u8BBE\u8BA1</li><li>\u652F\u6301\u4E8B\u52A1</li></ol><h3 id="_6-2\u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_6-2\u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B" aria-hidden="true">#</a> 6.2 \u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B</h3><p>\u8BED\u6CD5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create procedure \u5B58\u50A8\u8FC7\u7A0B\u540D(\u53C2\u6570)
begin
	//sql\u8BED\u53E5
end;

\u811A\u4E0B\u7559\u5FC3\uFF1A\u7531\u4E8E\u8FC7\u7A0B\u4E2D\u6709\u5F88\u591ASQL\u8BED\u53E5\uFF0C\u6BCF\u4E2A\u8BED\u53E5\u7684\u7ED3\u675F\u90FD\u8981\u7528\uFF08\uFF1B\uFF09\u7ED3\u675F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5206\u53F7\u65E2\u8868\u793A\u8BED\u53E5\u7ED3\u675F\uFF0C\u53C8\u8868\u793A\u5411\u670D\u52A1\u5668\u53D1\u9001SQL\u8BED\u53E5\u3002\u6211\u4EEC\u5E0C\u671B\u5206\u53F7\u4EC5\u8868\u793A\u8BED\u53E5\u7684\u7ED3\u675F\uFF0C\u4E0D\u8981\u5C06SQL\u8BED\u53E5\u53D1\u9001\u5230\u670D\u52A1\u5668\u6267\u884C\uFF0C\u901A\u8FC7delimiter\u6765\u66F4\u6539\u7ED3\u675F\u7B26\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F8B\u9898</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; delimiter //
mysql&gt; create procedure proc()     -- \u521B\u5EFA\u5B58\u50A8\u8FC7\u7A0B
    -&gt; begin
    -&gt; select * from stuinfo;
    -&gt; end //
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_6-3\u8C03\u7528\u5B58\u50A8\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_6-3\u8C03\u7528\u5B58\u50A8\u8FC7\u7A0B" aria-hidden="true">#</a> 6.3 \u8C03\u7528\u5B58\u50A8\u8FC7\u7A0B</h3><p>\u8BED\u6CD5\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>call \u5B58\u50A8\u8FC7\u7A0B\u540D()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; call proc() //     -- \u8C03\u7528\u5B58\u50A8\u8FC7\u7A0B
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25301 | \u5F20\u79CB\u4E3D         | \u7537       |     18 |       1 | \u5317\u4EAC           |
| s25302 | \u674E\u6587\u624D        | \u7537       |     31 |       3 | \u4E0A\u6D77          |
| s25303 | \u674E\u65AF\u6587        | \u5973      |     22 |       2 | \u5317\u4EAC           |
| s25304 | \u6B27\u9633\u4FCA\u96C4        | \u7537       |     28 |       4 | \u5929\u6D25           |
| s25305 | \u8BF8\u845B\u4E3D\u4E3D         | \u5973      |     23 |       7 | \u6CB3\u5357           |
| s25318 | \u4E89\u9752\u5C0F\u5B50        | \u7537       |     26 |       6 | \u5929\u6D25           |
| s25319 | \u6885\u8D85\u98CE        | \u5973      |     23 |       5 | \u6CB3\u5317          |
+--------+----------+--------+--------+---------+------------+
7 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_6-4\u5220\u9664\u5B58\u50A8\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_6-4\u5220\u9664\u5B58\u50A8\u8FC7\u7A0B" aria-hidden="true">#</a> 6.4 \u5220\u9664\u5B58\u50A8\u8FC7\u7A0B</h3><p>\u8BED\u6CD5</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>drop procedure [if exists] \u5B58\u50A8\u8FC7\u7A0B\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; drop procedure proc //    -- \u5220\u9664\u5B58\u50A8\u8FC7\u7A0B
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_6-5-\u67E5\u770B\u5B58\u50A8\u8FC7\u7A0B\u7684\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_6-5-\u67E5\u770B\u5B58\u50A8\u8FC7\u7A0B\u7684\u4FE1\u606F" aria-hidden="true">#</a> 6.5 \u67E5\u770B\u5B58\u50A8\u8FC7\u7A0B\u7684\u4FE1\u606F</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show create procedure \u5B58\u50A8\u8FC7\u7A0B\u540D\\G
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; show create procedure proc \\G
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_6-6-\u663E\u793A\u6240\u6709\u7684\u5B58\u50A8\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_6-6-\u663E\u793A\u6240\u6709\u7684\u5B58\u50A8\u8FC7\u7A0B" aria-hidden="true">#</a> 6.6 \u663E\u793A\u6240\u6709\u7684\u5B58\u50A8\u8FC7\u7A0B</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; show procedure status \\G
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_6-7\u5B58\u50A8\u8FC7\u7A0B\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_6-7\u5B58\u50A8\u8FC7\u7A0B\u7684\u53C2\u6570" aria-hidden="true">#</a> 6.7 \u5B58\u50A8\u8FC7\u7A0B\u7684\u53C2\u6570</h3><p>\u5B58\u50A8\u8FC7\u7A0B\u7684\u53C2\u6570\u5206\u4E3A\uFF1A\u8F93\u5165\u53C2\u6570\uFF08in\uFF09\u3010\u9ED8\u8BA4\u3011\uFF0C\u8F93\u51FA\u53C2\u6570\uFF08out\uFF09\uFF0C\u8F93\u5165\u8F93\u51FA\u53C2\u6570\uFF08inout\uFF09</p><p>\u5B58\u50A8\u8FC7\u7A0B\u4E0D\u80FD\u4F7F\u7528return\u8FD4\u56DE\u503C\uFF0C\u8981\u8FD4\u56DE\u503C\u53EA\u80FD\u901A\u8FC7\u201C\u8F93\u51FA\u53C2\u6570\u201D\u6765\u5411\u5916\u4F20\u9012\u503C\u3002</p><p>\u4F8B\u9898\u4E00\uFF1A\u4F20\u9012\u5B66\u53F7\uFF0C\u83B7\u53D6\u5BF9\u5E94\u7684\u4FE1\u606F</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create procedure proc(in param varchar(10))   -- \u8F93\u5165\u53C2\u6570
    -&gt; select * from stuinfo where stuno=param //
Query OK, 0 rows affected (0.00 sec)

mysql&gt; call proc(&#39;s25301&#39;) //
+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25301 | \u5F20\u79CB\u4E3D        | \u7537       |     18 |       1 | \u5317\u4EAC           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F8B\u9898\u4E8C\uFF1A\u67E5\u627E\u540C\u684C</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create procedure proc(name varchar(10))
    -&gt; begin
    -&gt; declare seat tinyint;   -- \u58F0\u660E\u5C40\u90E8\u53D8\u91CF
    -&gt; select stuseat into seat from stuinfo where stuname=name;  -- \u5C06\u5EA7\u4F4D\u53F7\u4FDD\u5B58\u5230\u53D8\u91CF\u4E2D
    -&gt; select * from stuinfo where stuseat=seat+1 or stuseat=seat-1;  -- \u67E5\u627E\u540C\u684C
    -&gt; end //
Query OK, 0 rows affected (0.00 sec)

mysql&gt; call proc(&#39;\u674E\u6587\u624D&#39;) //
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25303 | \u674E\u65AF\u6587        | \u5973      |     22 |       2 | \u5317\u4EAC           |
| s25304 | \u6B27\u9633\u4FCA\u96C4        | \u7537       |     28 |       4 | \u5929\u6D25           |
+--------+----------+--------+--------+---------+------------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5F3A\u8C03</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\u3001\u901A\u8FC7declare\u5173\u952E\u5B57\u58F0\u660E\u5C40\u90E8\u53D8\u91CF\uFF1B\u5168\u5C40\u53D8\u91CF@\u5F00\u5934\u5C31\u53EF\u4EE5\u4E86
2\u3001\u7ED9\u53D8\u91CF\u8D4B\u503C\u6709\u4E24\u79CD\u65B9\u6CD5
	\u65B9\u6CD5\u4E00\uFF1Aset \u53D8\u91CF\u540D=\u503C
	\u65B9\u6CD5\u4E8C\uFF1Aselect \u5B57\u6BB5 into \u53D8\u91CF from \u8868 where \u6761\u4EF6
3\u3001\u58F0\u660E\u7684\u53D8\u91CF\u4E0D\u80FD\u4E0E\u5217\u540D\u540C\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F8B\u9898\u4E09\uFF1A\u8F93\u51FA\u53C2\u6570</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create procedure proc(num int, out result int)  //out \u8868\u793A\u8F93\u51FA\u53C2\u6570
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4F8B\u9898\u56DB\uFF1A\u8F93\u5165\u8F93\u51FA\u53C2\u6570</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create procedure proc(inout num int)  #  inout \u8868\u793A\u662F\u8F93\u5165\u8F93\u51FA\u53C2\u6570
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_7-go\u8FDE\u63A5mysql" tabindex="-1"><a class="header-anchor" href="#_7-go\u8FDE\u63A5mysql" aria-hidden="true">#</a> 7 GO\u8FDE\u63A5MySQL</h2><ol><li>\u56E0\u4E3AGo\u8BED\u8A00\u6CA1\u6709\u63D0\u4F9B\u4EFB\u4F55\u5B98\u65B9\u6570\u636E\u5E93\u9A71\u52A8\uFF0C\u6240\u4EE5\u9700\u8981\u5B89\u88C5\u7B2C\u4E09\u65B9\u51FD\u6570\u5E93\u3002</li><li>\u7531\u4E8E\u5728github\u4E0A\u5B89\u88C5\uFF0C\u6240\u4EE5\u9700\u8981\u5B89\u88C5git\u8F6F\u4EF6\uFF0C\u5B89\u88C5\u8FC7\u7A0B\u4E00\u76F4\u70B9\u51FB\u4E0B\u4E00\u6B65\u5373\u53EF\u3002\u5B89\u88C5\u5B8C\u6210\u540E\u9700\u8981\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</li></ol><h3 id="_7-1-\u5B89\u88C5git" tabindex="-1"><a class="header-anchor" href="#_7-1-\u5B89\u88C5git" aria-hidden="true">#</a> 7.1 \u5B89\u88C5git</h3><p>git\u8F6F\u4EF6</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537011074242.png" alt="1537011074242" loading="lazy"></p><p>\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u914D\u7F6Egit\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4F7F\u7528<code>get</code>\u7684\u6307\u4EE4</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537094210154.png" alt="1537094210154" loading="lazy"></p><h3 id="_7-2-\u5B89\u88C5\u6570\u636E\u5E93\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#_7-2-\u5B89\u88C5\u6570\u636E\u5E93\u9A71\u52A8" aria-hidden="true">#</a> 7.2 \u5B89\u88C5\u6570\u636E\u5E93\u9A71\u52A8</h3><p>\u8BBE\u7F6EGOPATH\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u8FD9\u6837\u9A71\u52A8\u624D\u4F1A\u4E0B\u8F7D\u5230\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u3002</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537094342573.png" alt="1537094342573" loading="lazy">****</p><p>\u5728cmd\u547D\u4EE4\u7A97\u53E3\u4E2D\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\u5B89\u88C5\u9A71\u52A8</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>sql<span class="token operator">-</span>driver<span class="token operator">/</span>mysql

\u8FD9\u4E00\u547D\u4EE4\u4F1A\u4ECE\u4EE3\u7801\u4E2D\u83B7\u53D6\u9A71\u52A8\u7684\u5177\u4F53\u4EE3\u7801\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u4EE3\u7801\u653E\u7F6E\u5230\u5305\u5E93\u4E2D\uFF0C\u5F53\u9700\u8981\u7528\u5230\u9A71\u52A8\u7684\u65F6\u5019\uFF0C\u7F16\u8BD1\u5668\u4F1A\u628A\u9A71\u52A8\u4EE3\u7801\u4E0E\u7528\u6237\u7F16\u5199\u7684\u4EE3\u7801\u4E00\u540C\u7F16\u8BD1\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u4F1A\u5728GOPATH\u4E0B\u770B\u5230\u4E0B\u8F7D\u7684\u9A71\u52A8</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537011722807.png" alt="1537011722807" loading="lazy"></p><h3 id="_7-3-\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#_7-3-\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> 7.3 \u8FDE\u63A5\u6570\u636E\u5E93</h3><p>1\u3001\u5728src\u76EE\u5F55\u4E0B\u521B\u5EFAdemo.go\u6587\u4EF6\uFF0C\u5BFC\u5165\u6570\u636E\u5E93\u9A71\u52A8</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;database/sql&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="token punctuation">)</span>

\u6CE8\u610F\uFF1A\u7A0B\u5E8F\u5728\u64CD\u4F5C\u6570\u636E\u5E93\u7684\u65F6\u5019\u53EA\u9700\u8981\u7528\u5230database<span class="token operator">/</span>sql\uFF0C\u800C\u4E0D\u9700\u8981\u76F4\u63A5\u4F7F\u7528\u6570\u636E\u5E93\u9A71\u52A8\uFF0C\u6240\u4EE5\u7A0B\u5E8F\u5728\u5BFC\u5165\u6570\u636E\u5E93\u9A71\u52A8\u7684\u65F6\u5019\u5C06\u8FD9\u4E2A\u5305\u7684\u540D\u5B57\u8BBE\u7F6E\u6210\u4E0B\u5212\u7EBF\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>2\u3001\u901A\u8FC7sql.open()\u8FDE\u63A5\u6570\u636E\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sql.open(\u9A71\u52A8\u540D,\u6570\u636E\u6E90dsn)(*DB,err)

\u6570\u636E\u6E90\u8BED\u6CD5\uFF1A&quot;\u7528\u6237\u540D:\u5BC6\u7801@[\u8FDE\u63A5\u65B9\u5F0F](\u4E3B\u673A\u540D:\u7AEF\u53E3\u53F7)/\u6570\u636E\u5E93\u540D&quot;

\u6CE8\u610F\uFF1Aopen()\u5728\u6267\u884C\u65F6\u4E0D\u4F1A\u771F\u6B63\u7684\u4E0E\u6570\u636E\u5E93\u8FDB\u884C\u8FDE\u63A5\uFF0C\u53EA\u662F\u8BBE\u7F6E\u8FDE\u63A5\u6570\u636E\u5E93\u9700\u8981\u7684\u53C2\u6570
ping()\u65B9\u6CD5\u624D\u662F\u8FDE\u63A5\u6570\u636E\u5E93
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>3\u3001\u6267\u884CSQL\u8BED\u53E5</p><p>\u200B \u521B\u5EFA\u6D4B\u8BD5\u8868</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table stu(
    -&gt; id int primary key,
    -&gt; name varchar(10)
    -&gt; );
Query OK, 0 rows affected (0.02 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u64CD\u4F5C\u6570\u636E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>package main

import (
	&quot;database/sql&quot;
	_ &quot;github.com/go-sql-driver/mysql&quot;
	&quot;fmt&quot;
)

func main(){
	//&quot;\u7528\u6237\u540D:\u5BC6\u7801@[\u8FDE\u63A5\u65B9\u5F0F](\u4E3B\u673A\u540D:\u7AEF\u53E3\u53F7)/\u6570\u636E\u5E93\u540D&quot;
	db,_:=sql.Open(&quot;mysql&quot;,&quot;root:root@(127.0.0.1:3306)/itcast&quot;) // \u8BBE\u7F6E\u8FDE\u63A5\u6570\u636E\u5E93\u7684\u53C2\u6570
	defer db.Close()	//\u5173\u95ED\u6570\u636E\u5E93
	err:=db.Ping()		//\u8FDE\u63A5\u6570\u636E\u5E93
	if err!=nil{
		fmt.Println(&quot;\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25&quot;)
		return
	}

	//\u64CD\u4F5C\u4E00\uFF1A\u6267\u884C\u6570\u636E\u64CD\u4F5C\u8BED\u53E5
	/*
	sql:=&quot;insert into stu values (2,&#39;berry&#39;)&quot;
	result,_:=db.Exec(sql)		//\u6267\u884CSQL\u8BED\u53E5
	n,_:=result.RowsAffected();	//\u83B7\u53D6\u53D7\u5F71\u54CD\u7684\u8BB0\u5F55\u6570
	fmt.Println(&quot;\u53D7\u5F71\u54CD\u7684\u8BB0\u5F55\u6570\u662F&quot;,n)
	*/

	//\u64CD\u4F5C\u4E8C\uFF1A\u6267\u884C\u9884\u5904\u7406
	/*
	stu:=[2][2] string{{&quot;3&quot;,&quot;ketty&quot;},{&quot;4&quot;,&quot;rose&quot;}}
	stmt,_:=db.Prepare(&quot;insert into stu values (?,?)&quot;)		//\u83B7\u53D6\u9884\u5904\u7406\u8BED\u53E5\u5BF9\u8C61
	for _,s:=range stu{
		stmt.Exec(s[0],s[1])			//\u8C03\u7528\u9884\u5904\u7406\u8BED\u53E5
	}
	*/

	//\u64CD\u4F5C\u4E09\uFF1A\u5355\u884C\u67E5\u8BE2
	/*
	var id,name string
	rows:=db.QueryRow(&quot;select * from stu where id=4&quot;)   //\u83B7\u53D6\u4E00\u884C\u6570\u636E
	rows.Scan(&amp;id,&amp;name)		//\u5C06rows\u4E2D\u7684\u6570\u636E\u5B58\u5230id,name\u4E2D
	fmt.Println(id,&quot;--&quot;,name)
	*/

	//\u64CD\u4F5C\u56DB\uFF1A\u591A\u884C\u67E5\u8BE2
	rows,_:=db.Query(&quot;select * from stu&quot;)		//\u83B7\u53D6\u6240\u6709\u6570\u636E
	var id,name string
	for rows.Next(){		//\u5FAA\u73AF\u663E\u793A\u6240\u6709\u7684\u6570\u636E
		rows.Scan(&amp;id,&amp;name)
		fmt.Println(id,&quot;--&quot;,name)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="_8-\u4F8B\u9898" tabindex="-1"><a class="header-anchor" href="#_8-\u4F8B\u9898" aria-hidden="true">#</a> 8 \u4F8B\u9898</h2><p>1\u3001 \u663E\u793A\u5730\u533A\u53CA\u6BCF\u4E2A\u5730\u533A\u53C2\u52A0\u8003\u8BD5\u7684\u4EBA\u6570\uFF0C\u5E76\u6309\u4EBA\u6570\u964D\u5E8F\u6392\u5217\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select stuaddress,count(writtenexam) c from stuinfo left join stumarks using(stuno) group by stuaddress order by c desc;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2\u3001 \u663E\u793A\u6709\u5B66\u751F\u53C2\u52A0\u8003\u8BD5\u7684\u5730\u533A</p><p>\u65B9\u6CD5\u4E00\uFF1A\u8FC7\u6EE4</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select stuaddress,count(writtenexam) c from stuinfo left join stumarks using(stuno) group by stuaddress having c&gt;0;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A\u94FE\u63A5\u67E5\u8BE2</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select distinct stuaddress c from stuinfo right join stumarks using(stuno) ;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3\u3001 \u663E\u793A\u7537\u751F\u548C\u5973\u751F\u7684\u4EBA\u6570</p><p>\u65B9\u6CD5\u4E00\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select stusex,count() from stuinfo where stusex=&#39;\u7537&#39; union select stusex,count() from stuinfo where stusex=&#39;\u5973&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select sum(stusex=&#39;\u7537&#39;) \u7537,sum(stusex=&#39;\u5973&#39;) \u5973 from stuinfo;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4\u3001 \u663E\u793A\u6BCF\u4E2A\u5730\u533A\u7684\u7537\u751F\u548C\u5973\u751F\u548C\u603B\u4EBA\u6570</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select stuaddress,count(stusex) \u603B\u4EBA\u6570, sum(stusex=&#39;\u7537&#39;) \u7537,sum(stusex=&#39;\u5973&#39;) \u5973 from stuinfo group by stuaddress
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,188);function r(l,p){return a}var b=n(e,[["render",r],["__file","view-func.html.vue"]]);export{b as default};
