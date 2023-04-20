import{_ as n,e as s}from"./app.37ca1d6f.js";const e={},a=s(`<h1 id="_2-\u5217\u8868\u7C7B\u578B\u548C\u6570\u636E\u5B8C\u6574\u6027" tabindex="-1"><a class="header-anchor" href="#_2-\u5217\u8868\u7C7B\u578B\u548C\u6570\u636E\u5B8C\u6574\u6027" aria-hidden="true">#</a> 2 \u5217\u8868\u7C7B\u578B\u548C\u6570\u636E\u5B8C\u6574\u6027</h1><h2 id="_1-\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 1 \u6570\u636E\u7C7B\u578B</h2><h3 id="_1-1-\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u503C\u7C7B\u578B" aria-hidden="true">#</a> 1.1 \u503C\u7C7B\u578B</h3><h4 id="_1-1-1-\u6574\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u6574\u578B" aria-hidden="true">#</a> 1.1.1 \u6574\u578B</h4><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u5B57\u8282</th><th style="text-align:center;">\u8303\u56F4</th></tr></thead><tbody><tr><td style="text-align:center;">tinyint</td><td style="text-align:center;">1</td><td style="text-align:center;">-128~127</td></tr><tr><td style="text-align:center;">smallint</td><td style="text-align:center;">2</td><td style="text-align:center;">-32768~32767</td></tr><tr><td style="text-align:center;">mediumint</td><td style="text-align:center;">3</td><td style="text-align:center;">-8388608~8388607</td></tr><tr><td style="text-align:center;">int</td><td style="text-align:center;">4</td><td style="text-align:center;">-2<sup>31</sup>~2<sup>31</sup>-1</td></tr><tr><td style="text-align:center;">bigint</td><td style="text-align:center;">8</td><td style="text-align:center;">-2<sup>63</sup>~2<sup>63</sup>-1</td></tr></tbody></table><p>1\u3001\u65E0\u7B26\u53F7\u6574\u6570\uFF08unsigned\uFF09\uFF1A\u65E0\u7B26\u53F7\u6570\u6CA1\u6709\u8D1F\u6570\uFF0C\u6B63\u6570\u90E8\u5206\u662F\u6709\u7B26\u53F7\u7684\u4E24\u500D\u3002</p><p>\u4F8B\u9898</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table stu(
    -&gt; id smallint unsigned auto_increment primary key comment &#39;\u4E3B\u952E&#39;,
    -&gt; age tinyint unsigned not null comment &#39;\u5E74\u9F84&#39;,
    -&gt; money bigint unsigned comment &#39;\u5B58\u6B3E&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>2\u3001\u6574\u578B\u652F\u6301\u663E\u793A\u5BBD\u5EA6\uFF08\u6700\u5C0F\u7684\u663E\u793A\u4F4D\u6570\uFF09 \u6BD4\u5982int(5)\uFF0C\u5982\u679C\u6570\u503C\u7684\u4F4D\u6570\u5C0F\u4E8E5\u4F4D\uFF0C\u524D\u9762\u52A0\u4E0A\u524D\u5BFC0\u3002\u6BD4\u5982\u8F93\u516512\uFF0C\u663E\u793A00012\uFF1B\u5927\u4E8E5\u4F4D\u5C31\u4E0D\u6DFB\u52A0\u524D\u5BFC0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u811A\u4E0B\u7559\u5FC3\uFF1A\u5FC5\u987B\u7ED3\u5408zerofill\u624D\u8D77\u4F5C\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table stu(
    -&gt; id int(5),
    -&gt; age int(5) zerofill   # \u586B\u5145\u524D\u5BFC0
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
| 1111111 | 2222222 |    # \u6CE8\u610F\uFF1Aage\u586B\u5145\u4E86\u524D\u5BFC0
+---------+---------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="_1-1-2-\u6D6E\u70B9\u578B-\u4FDD\u5B58\u8FD1\u4F3C\u503C\u5C0F\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u6D6E\u70B9\u578B-\u4FDD\u5B58\u8FD1\u4F3C\u503C\u5C0F\u6570" aria-hidden="true">#</a> 1.1.2 \u6D6E\u70B9\u578B\uFF08\u4FDD\u5B58\u8FD1\u4F3C\u503C\u5C0F\u6570\uFF09</h4><table><thead><tr><th style="text-align:center;">\u6D6E\u70B9\u578B</th><th style="text-align:center;">\u5360\u7528\u5B57\u8282</th><th style="text-align:center;">\u8303\u56F4</th></tr></thead><tbody><tr><td style="text-align:center;">float\uFF08\u5355\u7CBE\u5EA6\uFF09</td><td style="text-align:center;">4</td><td style="text-align:center;">-3.4E+38~3.4E+38</td></tr><tr><td style="text-align:center;">double\uFF08\u53CC\u7CBE\u5EA6\uFF09</td><td style="text-align:center;">8</td><td style="text-align:center;">-1.8E+308~1.8E+308</td></tr></tbody></table><p>1\u3001\u6D6E\u70B9\u6570\u58F0\u660E: float(M,D) double(M,D)</p><p>M\uFF1A\u603B\u4F4D\u6570</p><p>D\uFF1A\u5C0F\u6570\u4F4D\u6570</p><p>\u4F8B\u9898\uFF1B</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t1(
    -&gt; num1 float(5,2),   #\u603B\u4F4D\u6570\u662F5\uFF0C\u5C0F\u6570\u4F4D\u6570\u662F2\uFF0C\u90A3\u4E48\u6574\u6570\u4F4D\u6570\u662F3\uFF0C
    -&gt; num2 double(4,1)
    -&gt; );
Query OK, 0 rows affected (0.08 sec)

mysql&gt; insert into t1 values (1.23,1.23); #\u5982\u679C\u7CBE\u5EA6\u8D85\u51FA\u4E86\u5141\u8BB8\u7684\u8303\u56F4\uFF0C\u4F1A\u56DB\u820D\u4E94\u5165
Query OK, 1 row affected (0.00 sec)

mysql&gt; select * from t1;
+------+------+
| num1 | num2 |
+------+------+
| 1.23 |  1.2 |   #\u5982\u679C\u7CBE\u5EA6\u8D85\u51FA\u4E86\u5141\u8BB8\u7684\u8303\u56F4\uFF0C\u4F1A\u56DB\u820D\u4E94\u5165
+------+------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>2\u3001\u6D6E\u70B9\u7684\u7CBE\u5EA6\u53EF\u80FD\u4F1A\u4E22\u5931\u3010\u7CBE\u5EA6\u6307\u7684\u662F\u5C0F\u6570\u3011</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536718268668.png" alt="1536718268668" loading="lazy"></p><h4 id="_1-1-3-\u5B9A\u70B9\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u5B9A\u70B9\u6570" aria-hidden="true">#</a> 1.1.3 \u5B9A\u70B9\u6570</h4><p>\u8BED\u6CD5\uFF1A<code>decimal(M,D)</code></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t4(
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u591A\u5B66\u4E00\u62DB\uFF1A
1\u3001\u5B9A\u70B9\u6570\u662F\u53D8\u957F\u7684\uFF0C\u5927\u81F4\u6BCF9\u4E2A\u6570\u5B57\u75284\u4E2A\u5B57\u8282\u6765\u5B58\u50A8\u3002\u5B9A\u70B9\u6570\u4E4B\u6240\u4EE5\u80FD\u4FDD\u5B58\u7CBE\u786E\u7684\u5C0F\u6570\uFF0C\u56E0\u4E3A\u6574\u6570\u548C\u5C0F\u6570\u662F\u5206\u5F00\u5B58\u50A8\u7684\u3002\u5360\u7528\u7684\u8D44\u6E90\u6BD4\u6D6E\u70B9\u6570\u8981\u591A\u3002
2\u3001\u5B9A\u70B9\u6570\u548C\u6D6E\u70B9\u6570\u90FD\u652F\u6301\u663E\u793A\u5BBD\u5EA6\u548C\u65E0\u7B26\u53F7\u6570\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-2-\u5B57\u7B26\u578B" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5B57\u7B26\u578B" aria-hidden="true">#</a> 1.2 \u5B57\u7B26\u578B</h3><table><thead><tr><th style="text-align:center;">\u6570\u636E\u7C7B\u578B</th><th style="text-align:center;">\u63CF\u8FF0</th><th style="text-align:center;">\u957F\u5EA6</th></tr></thead><tbody><tr><td style="text-align:center;">char(\u957F\u5EA6)</td><td style="text-align:center;">\u5B9A\u957F</td><td style="text-align:center;">\u6700\u5927255</td></tr><tr><td style="text-align:center;">varchar(\u957F\u5EA6)</td><td style="text-align:center;">\u53D8\u957F</td><td style="text-align:center;">\u6700\u592765535</td></tr><tr><td style="text-align:center;">tinytext</td><td style="text-align:center;">\u5927\u6BB5\u6587\u672C</td><td style="text-align:center;">2<sup>8</sup>-1=255</td></tr><tr><td style="text-align:center;">text</td><td style="text-align:center;">\u5927\u6BB5\u6587\u672C</td><td style="text-align:center;">2<sup>16</sup>-1=65535</td></tr><tr><td style="text-align:center;">mediumtext</td><td style="text-align:center;">\u5927\u6BB5\u6587\u672C</td><td style="text-align:center;">2<sup>24</sup>-1</td></tr><tr><td style="text-align:center;">longtext</td><td style="text-align:center;">\u5927\u6BB5\u6587\u672C</td><td style="text-align:center;">2<sup>32</sup>-1</td></tr></tbody></table><p>1\u3001char(10)\u548Cvarchar(10)\u7684\u533A\u522B\uFF1F</p><p>\u7B54\uFF1A\u76F8\u540C\u70B9\uFF1A\u5B83\u4EEC\u6700\u591A\u53EA\u80FD\u4FDD\u5B5810\u4E2A\u5B57\u7B26\uFF1B</p><pre><code>    \u4E0D\u540C\u70B9\uFF1Achar\u4E0D\u56DE\u6536\u591A\u4F59\u7684\u5B57\u7B26\uFF0Cvarchar\u4F1A\u56DE\u6536\u591A\u4F59\u7684\u5B57\u7B26\u3002

                    char\u6548\u7387\u9AD8\uFF0C\u6D6A\u8D39\u7A7A\u95F4\uFF0Cvarchar\u8282\u7701\u7A7A\u95F4\uFF0C\u6548\u7387\u6BD4char\u4F4E\u3002
</code></pre><p>2\u3001char\u7684\u6700\u5927\u957F\u5EA6\u662F255\u3002 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536719919287.png" alt="1536719919287" loading="lazy"></p><p>3\u3001varchar\u7406\u8BBA\u957F\u5EA6\u662F65535\u5B57\u8282,\u5B9E\u9645\u6839\u672C\u8FBE\u4E0D\u5230\u3002\u5177\u4F53\u957F\u5EA6\u4E0E\u5B57\u7B26\u7F16\u7801\u6709\u5173\u3002 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536720096028.png" alt="1536720096028" loading="lazy"></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536720113031.png" alt="1536720113031" loading="lazy"></p><p>4\u3001\u4E00\u4E2A\u8BB0\u5F55\u7684\u603B\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC765535\u4E2A\u5B57\u8282\u3002</p><p>5\u3001\u5927\u5757\u6587\u672C\uFF08text\uFF09\u4E0D\u8BA1\u7B97\u5728\u603B\u957F\u5EA6\u4E2D,\u4E00\u4E2A\u5927\u5757\u6587\u672C\u53EA\u5360\u752810\u4E2A\u5B57\u8282\u6765\u4FDD\u5B58\u6587\u672C\u7684\u5730\u5740\u3002 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536720763914.png" alt="1536720763914" loading="lazy"></p><h3 id="_1-3-\u679A\u4E3E-enum" tabindex="-1"><a class="header-anchor" href="#_1-3-\u679A\u4E3E-enum" aria-hidden="true">#</a> 1.3 \u679A\u4E3E\uFF08enum\uFF09</h3><p>1\u3001\u4ECE\u96C6\u5408\u4E2D\u9009\u62E9\u4E00\u4E2A\u6570\u636E\uFF08\u5355\u9009\uFF09</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t8(
   -&gt; name varchar(20),
   -&gt; sex enum(&#39;\u7537&#39;,&#39;\u5973&#39;,&#39;\u4FDD\u5BC6&#39;)   # \u679A\u4E3E
   -&gt; )charset=utf8;
Query OK, 0 rows affected (0.06 sec)

mysql&gt; insert into t8 values (&#39;tom&#39;,&#39;\u7537&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t8 values (&#39;berry&#39;,&#39;\u5973&#39;);
Query OK, 1 row affected (0.05 sec)

mysql&gt; insert into t8 values (&#39;rose&#39;,&#39;\u672A\u77E5&#39;);   # \u62A5\u9519\uFF0C\u53EA\u80FD\u63D2\u5165\u679A\u4E3E\u503C
ERROR 1265 (01000): Data truncated for column &#39;sex&#39; at row 1
mysql&gt; select * from t8;
+-------+------+
| name  | sex  |
+-------+------+
| tom   | \u7537     |
| berry | \u5973    |
+-------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>2\u3001MySQL\u7684\u679A\u4E3E\u7C7B\u578B\u662F\u901A\u8FC7\u6574\u6570\u6765\u7BA1\u7406\u7684\uFF0C\u7B2C\u4E00\u4E2A\u503C\u662F1\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u662F2\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536721403493.png" alt="1536721403493" loading="lazy"></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; select sex+0 from t8;
+-------+
| sex+0 |
+-------+
|     1 |
|     2 |
+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>3\u3001\u65E2\u7136\u679A\u4E3E\u5728\u6570\u636E\u5E93\u5185\u90E8\u5B58\u50A8\u7684\u662F\u6574\u6570\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u63D2\u5165\u6570\u5B57</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; insert into t8 values (&#39;rose&#39;,3);  # \u53EF\u4EE5\u76F4\u63A5\u63D2\u5165\u6570\u5B57
Query OK, 1 row affected (0.00 sec)

mysql&gt; select * from t8;
+-------+------+
| name  | sex  |
+-------+------+
| tom   | \u7537     |
| berry | \u5973    |
| rose  | \u4FDD\u5BC6     |
+-------+------+
3 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u679A\u4E3E\u7684\u4F18\u70B9\uFF1A</p><p>1\u3001 \u8FD0\u884C\u901F\u5EA6\u5FEB\uFF08\u6570\u5B57\u6BD4\u5B57\u7B26\u4E32\u8FD0\u7B97\u901F\u5EA6\u5FEB\uFF09</p><p>2\u3001 \u9650\u5236\u6570\u636E\uFF0C\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u6027</p><p>3\u3001 \u8282\u7701\u7A7A\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u601D\u8003\uFF1A\u5DF2\u77E5\u679A\u4E3E\u5360\u75282\u4E2A\u5B57\u8282\uFF0C\u8BF7\u95EE\u6700\u591A\u6709\u591A\u5C11\u4E2A\u679A\u4E3E\u503C\uFF1F

\u7B54\uFF1A2\u4E2A\u5B57\u8282=16\u4F4D\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u6570\u5B57\uFF080-65535\uFF09\uFF0C\u679A\u4E3E\u662F\u4ECE1\u5F00\u59CB\uFF0C\u6240\u4EE5\u679A\u4E3E\u6700\u591A\u53EF\u4EE5\u670965535\u4E2A\u679A\u4E3E\u503C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-4-\u96C6\u5408-set" tabindex="-1"><a class="header-anchor" href="#_1-4-\u96C6\u5408-set" aria-hidden="true">#</a> 1.4 \u96C6\u5408\uFF08set\uFF09</h3><p>\u4ECE\u96C6\u5408\u4E2D\u9009\u62E9\u4E00\u4E9B\u6570\u636E\uFF08\u591A\u9009\uFF09</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t9(
   -&gt; hobby set(&#39;\u722C\u5C71&#39;,&#39;\u8BFB\u4E66&#39;,&#39;\u6E38\u6CF3&#39;,&#39;\u6572\u4EE3\u7801&#39;)
   -&gt; );
Query OK, 0 rows affected (0.08 sec)

mysql&gt; insert into t9 values (&#39;\u722C\u5C71&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t9 values (&#39;\u722C\u5C71,\u6E38\u6CF3&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t9 values (&#39;\u6E38\u6CF3,\u722C\u5C71&#39;);  # \u63D2\u5165\u987A\u5E8F\u4E0D\u4E00\u6837\uFF0C\u4F46\u662F\u663E\u793A\u7684\u987A\u5E8F\u662F\u4E00\u6837\u7684
Query OK, 1 row affected (0.02 sec)

mysql&gt; insert into t9 values (&#39;\u722C\u5C71,\u6E38\u6CF3,\u5F00\u8F66&#39;);  # \u62A5\u9519\uFF0C\u63D2\u5165\u96C6\u5408\u4E2D\u6CA1\u6709\u7684\u9009\u9879\u4F1A\u62A5\u9519
ERROR 1265 (01000): Data truncated for column &#39;hobby&#39; at row 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6BCF\u4E2A\u96C6\u5408\u7684\u5143\u7D20\u90FD\u5206\u914D\u4E00\u4E2A\u56FA\u5B9A\u7684\u6570\u5B57\uFF0C\u5206\u914D\u7684\u65B9\u5F0F\u4ECE\u5DE6\u5F80\u53F3\u63092\u76840\u30011\u30012\u3001\u2026\u6B21\u65B9</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536723512843.png" alt="1536723512843" loading="lazy"></p><hr><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u601D\u8003\uFF1A\u5DF2\u77E5\u96C6\u5408\u5360\u75288\u4E2A\u5B57\u8282\uFF0C\u6700\u591A\u53EF\u4EE5\u8868\u793A\u51E0\u4E2A\u9009\u9879\uFF1F

\u7B54\uFF1A8\u4E2A\u5B57\u8282=64\u4F4D\uFF0C\u4E00\u4E2A\u4F4D\u8868\u793A1\u4E2A\u9009\u9879\uFF0C\u6700\u591A\u53EF\u4EE5\u8868\u793A64\u4E2A\u9009\u9879\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-5-\u65E5\u671F\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-5-\u65E5\u671F\u7C7B\u578B" aria-hidden="true">#</a> 1.5 \u65E5\u671F\u7C7B\u578B</h3><table><thead><tr><th style="text-align:center;">\u6570\u636E\u7C7B\u578B</th><th style="text-align:center;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">\u65E5\u671F\u65F6\u95F4\uFF0C\u5360\u75288\u4E2A\u5B57\u8282</td></tr><tr><td style="text-align:center;">date</td><td style="text-align:center;">\u65E5\u671F \u5360\u75283\u4E2A\u5B57\u8282</td></tr><tr><td style="text-align:center;">time</td><td style="text-align:center;">\u65F6\u95F4 \u5360\u75283\u4E2A\u5B57\u8282</td></tr><tr><td style="text-align:center;">timestamp</td><td style="text-align:center;">\u65F6\u95F4\u6233\uFF0C\u5360\u75284\u4E2A\u5B57\u8282</td></tr><tr><td style="text-align:center;">year</td><td style="text-align:center;">\u5E74\u4EFD \u5360\u75281\u4E2A\u5B57\u8282</td></tr></tbody></table><h4 id="_1-5-1-datetime" tabindex="-1"><a class="header-anchor" href="#_1-5-1-datetime" aria-hidden="true">#</a> 1.5.1 datetime</h4><p>\u683C\u5F0F\uFF1A\u5E74-\u6708-\u65E5 \u5C0F\u65F6:\u5206\u949F:\u79D2</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t10(
   -&gt; field datetime
   -&gt; );
Query OK, 0 rows affected (0.02 sec)

mysql&gt; insert into t10 values (&#39;2025-10-12 10:12:36&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t10 values (&#39;100-10-12 10:12:36&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t10 values (&#39;10000-10-12 10:12:36&#39;);  #datetime\u4FDD\u5B58\u8303\u56F4\u662F\uFF1A1~9999\u5E74
ERROR 1292 (22007): Incorrect datetime value: &#39;10000-10-12 10:12:36&#39; for column &#39;field&#39; at row 1

mysql&gt; select * from t10;
+---------------------+
| field               |
+---------------------+
| 2025-10-12 10:12:36 |
| 0100-10-12 10:12:36 |
+---------------------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="_1-5-2-date" tabindex="-1"><a class="header-anchor" href="#_1-5-2-date" aria-hidden="true">#</a> 1.5.2 date</h4><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t11(
    -&gt; field date
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t11 values (&#39;2025-10-12&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; select * from t11;
+------------+
| field      |
+------------+
| 2025-10-12 |
+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="_1-5-3-timestamp" tabindex="-1"><a class="header-anchor" href="#_1-5-3-timestamp" aria-hidden="true">#</a> 1.5.3 timestamp</h4><p>\u65F6\u95F4\u6233</p><p>timestamp\u7C7B\u578B\u548C datetime\u7C7B\u578B\u5728\u8868\u73B0\u4E0A\u662F\u4E00\u6837\u7684\u3002\u4ED6\u4EEC\u7684\u533A\u522B\uFF1A datetime\u662F\u4ECE1\u52309999\uFF0C\u800Ctimestamp\u4ECE1970\u5E74~2038\u5E74\uFF0C2038\u5E7401\u670819\u65E511:14:07\u79D2\u4EE5\u540E\u5C31\u8D85\u51FAtimestamp\u8303\u56F4\u4E86\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t12(
    -&gt; field timestamp
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t12 values (&#39;1975-5-5 12:12:12&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t12 values (&#39;1969-5-5 12:12:12&#39;);   # \u8D85\u51FA\u8303\u56F4
ERROR 1292 (22007): Incorrect datetime value: &#39;1969-5-5 12:12:12&#39; for column &#39;field&#39; at row 1
mysql&gt; insert into t12 values (&#39;2038-1-19 11:14:07&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t12 values (&#39;2038-1-19 11:14:08&#39;);  # \u8D85\u51FA\u8303\u56F4
ERROR 1292 (22007): Incorrect datetime value: &#39;2038-1-19 11:14:08&#39; for column &#39;field&#39; at row 1

mysql&gt; select * from t12;
+---------------------+
| field               |
+---------------------+
| 1975-05-05 12:12:12 |
| 2038-01-19 11:14:07 |
+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="_1-5-4-year" tabindex="-1"><a class="header-anchor" href="#_1-5-4-year" aria-hidden="true">#</a> 1.5.4 year</h4><p>\u56E0\u4E3A\u53EA\u5360\u75281\u4E2A\u5B57\u8282\uFF0C\u6700\u591A\u53EA\u80FD\u8868\u793A255\u4E2A\u5E74\u4EFD\uFF0C\u8303\u56F4\u662F1901-2155\u4E4B\u95F4\u7684\u5E74\u4EFD</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t13(
    -&gt; field year
    -&gt; );
Query OK, 0 rows affected (0.06 sec)

mysql&gt; insert into t13 values (2025);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t13 values (1900);   # \u8D85\u51FA\u8303\u56F4
ERROR 1264 (22003): Out of range value for column &#39;field&#39; at row 1
mysql&gt; insert into t13 values (2155);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t13 values (2156);   # \u8D85\u51FA\u8303\u56F4
ERROR 1264 (22003): Out of range value for column &#39;field&#39; at row 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="_1-5-5-time" tabindex="-1"><a class="header-anchor" href="#_1-5-5-time" aria-hidden="true">#</a> 1.5.5 time</h4><p>\u8868\u793A\u65F6\u95F4\u6216\u65F6\u95F4\u95F4\u9694\uFF0C\u8303\u56F4\u662F-838:59:59~838:59:59</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t14(
   -&gt; field time
   -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t14 values (&#39;12:12:12&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t14 values (&#39;212:12:12&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t14 values (&#39;838:59:59&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into t14 values (&#39;839:00:00&#39;);  # \u64CD\u4F5C\u8303\u56F4
ERROR 1292 (22007): Incorrect time value: &#39;839:00:00&#39; for column &#39;field&#39; at row 1
mysql&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u591A\u5B66\u4E00\u62DB\uFF1Atime\u652F\u6301\u4EE5\u5929\u7684\u65B9\u5F0F\u63D2\u5165</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; insert into t14 values (&#39;10 10:10:10&#39;);
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_1-6-boolean" tabindex="-1"><a class="header-anchor" href="#_1-6-boolean" aria-hidden="true">#</a> 1.6 boolean</h3><p>MySQL\u4E0D\u652F\u6301boolean\u7C7B\u578B\uFF0Ctrue\u548Cfalse\u5728\u6570\u636E\u5E93\u4E2D\u5BF9\u5E941\u548C0\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t15(
   -&gt; field boolean
   -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t15 values (true),(false);   # true\u548Cfalse\u5728\u6570\u636E\u5E93\u4E2D\u5BF9\u5E941\u548C0
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_1-7-\u5173\u4E8E\u6570\u636E\u7C7B\u578B\u7684\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#_1-7-\u5173\u4E8E\u6570\u636E\u7C7B\u578B\u7684\u601D\u8003\u9898" aria-hidden="true">#</a> 1.7 \u5173\u4E8E\u6570\u636E\u7C7B\u578B\u7684\u601D\u8003\u9898</h3><ol><li><p>\u624B\u673A\u53F7\u7801\u4E00\u822C\u4F7F\u7528\u4EC0\u4E48\u6570\u636E\u7C7B\u578B\u5B58\u50A8? char</p></li><li><p>\u7535\u8BDD\u53F7\u7801\u4F7F\u7528\u4EC0\u4E48\u6570\u636E\u7C7B\u578B varchar</p></li><li><p>\u6027\u522B\u4E00\u822C\u4F7F\u7528\u4EC0\u4E48\u6570\u636E\u7C7B\u578B\u5B58\u50A8? char enum</p></li><li><p>\u5B66\u751F\u5E74\u9F84\u4FE1\u606F\u4E00\u822C\u4F7F\u7528\u4EC0\u4E48\u6570\u636E\u7C7B\u578B\u5B58\u50A8? tinyint</p></li><li><p>\u7167\u7247\u4FE1\u606F\u4E00\u822C\u4F7F\u7528\u4EC0\u4E48\u6570\u636E\u7C7B\u578B\u5B58\u50A8? binary</p></li><li><p>\u85AA\u6C34\u4E00\u822C\u4F7F\u7528\u4EC0\u4E48\u6570\u636E\u7C7B\u578B\u5B58\u50A8? decimal</p></li></ol><p>\u591A\u5B66\u4E00\u62DB\uFF1A\u4E00\u4E2A\u5B57\u6BB5\u5230\u5E95\u9009\u6570\u5B57\u8FD8\u662F\u5B57\u7B26\uFF0C\u53D6\u51B3\u4E8E\u6709\u6CA1\u6709\u8BA1\u7B97\u7684\u53EF\u80FD\uFF0C\u5982\u679C\u6CA1\u6709\u8BA1\u7B97\u7684\u53EF\u80FD\u5373\u4F7F\u662F\u6570\u5B57\u4E5F\u8981\u7528\u5B57\u7B26\u7C7B\u578B\uFF0C\u6BD4\u5982\u624B\u673A\u53F7\u3001QQ\u53F7\uFF0C\u2026</p><h2 id="_2-\u5217\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_2-\u5217\u5C5E\u6027" aria-hidden="true">#</a> 2 \u5217\u5C5E\u6027</h2><h3 id="_2-1-\u662F\u5426\u4E3A\u7A7A-null-not-null" tabindex="-1"><a class="header-anchor" href="#_2-1-\u662F\u5426\u4E3A\u7A7A-null-not-null" aria-hidden="true">#</a> 2.1 \u662F\u5426\u4E3A\u7A7A(null | not null)</h3><p>null\uFF1A\u53EF\u4EE5\u4E3A\u7A7A</p><p>not null\uFF1A\u4E0D\u53EF\u4EE5\u4E3A\u7A7A</p><p>\u601D\u8003\u9898</p><ol><li><p>\u5B66\u5458\u59D3\u540D\u5141\u8BB8\u4E3A\u7A7A\u5417? \u975E\u7A7A</p></li><li><p>\u5BB6\u5EAD\u5730\u5740\u5141\u8BB8\u4E3A\u7A7A\u5417? \u975E\u7A7A</p></li><li><p>\u7535\u5B50\u90AE\u4EF6\u4FE1\u606F\u5141\u8BB8\u4E3A\u7A7A\u5417? \u53EF\u4EE5\u4E3A\u7A7A</p></li><li><p>\u8003\u8BD5\u6210\u7EE9\u5141\u8BB8\u4E3A\u7A7A\u5417? \u53EF\u4EE5\u4E3A\u7A7A</p></li></ol><h3 id="_2-2-\u9ED8\u8BA4\u503C-default" tabindex="-1"><a class="header-anchor" href="#_2-2-\u9ED8\u8BA4\u503C-default" aria-hidden="true">#</a> 2.2 \u9ED8\u8BA4\u503C\uFF08default\uFF09</h3><p>1\u3001\u5982\u679C\u4E00\u4E2A\u5B57\u6BB5\u6CA1\u6709\u63D2\u5165\u503C\uFF0C\u53EF\u4EE5\u9ED8\u8BA4\u63D2\u5165\u4E00\u4E2A\u6307\u5B9A\u7684\u503C\u3002</p><p>2\u3001default\u5173\u952E\u5B57\u7528\u6765\u63D2\u5165\u9ED8\u8BA4\u503C</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t16(
   -&gt; id int unsigned,
   -&gt; addr varchar(20) not null default &#39;\u5730\u5740\u4E0D\u8BE6&#39;
   -&gt; );
Query OK, 0 rows affected (0.06 sec)

mysql&gt; insert into t16 values (1,&#39;\u5317\u4EAC&#39;),(2,default);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql&gt; select * from t16;
+------+----------+
| id   | addr     |
+------+----------+
|    1 | \u5317\u4EAC         |
|    2 | \u5730\u5740\u4E0D\u8BE6        |
+------+----------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_2-3-\u81EA\u52A8\u589E\u957F-auto-increment" tabindex="-1"><a class="header-anchor" href="#_2-3-\u81EA\u52A8\u589E\u957F-auto-increment" aria-hidden="true">#</a> 2.3 \u81EA\u52A8\u589E\u957F\uFF08auto_increment\uFF09</h3><p>1\u3001\u5B57\u6BB5\u7684\u503C\u4ECE1\u5F00\u59CB\uFF0C\u6BCF\u6B21\u9012\u589E1\uFF0C\u7279\u70B9\u5C31\u5728\u5B57\u6BB5\u4E2D\u7684\u6570\u636E\u4E0D\u53EF\u80FD\u91CD\u590D\uFF0C\u9002\u5408\u4E3A\u8BB0\u5F55\u751F\u6210\u552F\u4E00\u7684id</p><p>2\u3001\u81EA\u52A8\u589E\u957F\u90FD\u662F\u65E0\u7B26\u53F7\u6574\u6570\u3002</p><p>3\u3001\u5728MySQL\u4E2D\uFF0Cauto_increment\u5FC5\u987B\u662F\u4E3B\u952E\u3002\u4F46\u662F\u4E3B\u952E\u4E0D\u4E00\u5B9A\u662F\u81EA\u52A8\u589E\u957F\u7684\u3002</p><p>4\u3001\u5982\u679C\u8981\u7ED9\u81EA\u52A8\u589E\u957F\u5217\u63D2\u5165\u6570\u636E\uFF0C\u4F7F\u7528null\u5173\u952E\u5B57\u3002</p><p>5\u3001\u81EA\u52A8\u589E\u957F\u5217\u4E0A\u7684\u6570\u636E\u88AB\u5220\u9664\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6B64\u8BB0\u5F55\u7684\u7F16\u53F7\u4E0D\u518D\u4F7F\u7528\u3002</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536737314504.png" alt="1536737314504" loading="lazy"></p><h3 id="_2-4-\u4E3B\u952E-primary-key" tabindex="-1"><a class="header-anchor" href="#_2-4-\u4E3B\u952E-primary-key" aria-hidden="true">#</a> 2.4 \u4E3B\u952E\uFF08primary key\uFF09</h3><p>\u4E3B\u952E\uFF1A\u552F\u4E00\u6807\u8BC6\u8868\u4E2D\u8BB0\u5F55\u7684\u4E00\u4E2A\u6216\u4E00\u7EC4\u5217</p><p>\u4E3B\u952E\u7684\u7279\u70B9\uFF1A\u4E0D\u80FD\u91CD\u590D\uFF0C\u4E0D\u80FD\u4E3A\u7A7A</p><p>\u4E00\u4E2A\u8868\u53EA\u80FD\u6709\u4E00\u4E2A\u4E3B\u952E\uFF0C\u4E3B\u952E\u53EF\u4EE5\u6709\u591A\u4E2A\u5B57\u6BB5\u7EC4\u6210\u3002</p><p>\u4E3B\u952E\u7684\u4F5C\u7528\uFF1A</p><p>1\u3001 \u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u6027</p><p>2\u3001 \u52A0\u5FEB\u67E5\u8BE2\u901F\u5EA6</p><h4 id="_2-4-1-\u6DFB\u52A0\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#_2-4-1-\u6DFB\u52A0\u4E3B\u952E" aria-hidden="true">#</a> 2.4.1 \u6DFB\u52A0\u4E3B\u952E</h4><p>\u65B9\u6CD5\u4E00\uFF1A\u521B\u5EFA\u8868\u7684\u65F6\u5019\u6DFB\u52A0\u4E3B\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t17(
    -&gt; id varchar(5) primary key,   # \u521B\u5EFA\u4E3B\u952E
    -&gt; name varchar(10) not null
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t17 values (&#39;s2531&#39;,&#39;tom&#39;),(&#39;s2532&#39;,&#39;berry&#39;);
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

# \u5982\u679C\u63D2\u5165\u4E3B\u952E\u76F8\u540C\u6570\u636E\u4F1A\u62A5\u9519
mysql&gt; insert into t17 values (&#39;s2531&#39;,&#39;tom&#39;);
ERROR 1062 (23000): Duplicate entry &#39;s2531&#39; for key &#39;PRIMARY&#39;

# \u4E3B\u952E\u4E0D\u80FD\u63D2\u5165null\u503C
mysql&gt; insert into t17 values (null,&#39;tom&#39;);
ERROR 1048 (23000): Column &#39;id&#39; cannot be null
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A\u521B\u5EFA\u8868\u7684\u65F6\u5019\u6DFB\u52A0\u4E3B\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t18(
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u65B9\u6CD5\u4E09\uFF1A\u66F4\u6539\u8868\u7684\u65F6\u5019\u6DFB\u52A0\u4E3B\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t20(
    -&gt; id int,
    -&gt; name varchar(10)
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; alter table t20 add primary key (id);   # \u66F4\u6539\u8868\u6DFB\u52A0\u4E3B\u952E
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="_2-4-2-\u521B\u5EFA\u7EC4\u5408\u952E" tabindex="-1"><a class="header-anchor" href="#_2-4-2-\u521B\u5EFA\u7EC4\u5408\u952E" aria-hidden="true">#</a> 2.4.2 \u521B\u5EFA\u7EC4\u5408\u952E</h4><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536736467251.png" alt="1536736467251" loading="lazy"></p><h4 id="_2-4-3-\u67E5\u770B\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#_2-4-3-\u67E5\u770B\u4E3B\u952E" aria-hidden="true">#</a> 2.4.3 \u67E5\u770B\u4E3B\u952E</h4><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536736627655.png" alt="1536736627655" loading="lazy"></p><h4 id="_2-4-4-\u5220\u9664\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#_2-4-4-\u5220\u9664\u4E3B\u952E" aria-hidden="true">#</a> 2.4.4 \u5220\u9664\u4E3B\u952E</h4><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536736700169.png" alt="1536736700169" loading="lazy"></p><h4 id="_2-4-5-\u9009\u62E9\u4E3B\u952E\u7684\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#_2-4-5-\u9009\u62E9\u4E3B\u952E\u7684\u539F\u5219" aria-hidden="true">#</a> 2.4.5 \u9009\u62E9\u4E3B\u952E\u7684\u539F\u5219</h4><p>1\u3001 \u6700\u5C11\u6027\uFF1A\u5C3D\u91CF\u9009\u62E9\u4E00\u4E2A\u5B57\u6BB5\u505A\u4E3B\u952E</p><p>2\u3001 \u7A33\u5B9A\u6027\uFF1A\u5C3D\u91CF\u9009\u62E9\u66F4\u65B0\u5C11\u7684\u5217\u505A\u4E3B\u952E</p><p>3\u3001 \u5C3D\u91CF\u9009\u62E9\u6570\u5B57\u578B\u7684\u5217\u505A\u4E3B\u952E</p><h4 id="_2-4-6-\u4E3B\u952E\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#_2-4-6-\u4E3B\u952E\u601D\u8003\u9898" aria-hidden="true">#</a> 2.4.6 \u4E3B\u952E\u601D\u8003\u9898</h4><p>1\u3001\u5728\u4E3B\u952E\u5217\u8F93\u5165\u7684\u6570\u503C\uFF0C\u5141\u8BB8\u4E3A\u7A7A\u5417? \u4E0D\u53EF\u4EE5</p><p>2\u3001 \u4E00\u4E2A\u8868\u53EF\u4EE5\u6709\u591A\u4E2A\u4E3B\u952E\u5417? \u4E0D\u53EF\u4EE5</p><p>3\u3001 \u5728\u4E00\u4E2A\u5B66\u6821\u6570\u636E\u5E93\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u5B66\u6821\u5185\u5141\u8BB8\u91CD\u540D\u7684\u5B66\u5458\uFF0C\u4F46\u662F\u4E00\u4E2A\u73ED\u7EA7\u5185\u4E0D\u5141\u8BB8\u5B66\u5458\u91CD\u540D\uFF0C\u53EF\u4EE5\u7EC4\u5408\u73ED\u7EA7\u548C\u59D3\u540D\u4E24\u4E2A\u5B57\u6BB5\u4E00\u8D77\u6765\u4F5C\u4E3A\u4E3B\u952E\u5417\uFF1F \u53EF\u4EE5</p><p>4\u3001 \u6807\u8BC6\u5217\uFF08\u81EA\u52A8\u589E\u957F\u5217\uFF09\u5141\u8BB8\u4E3A\u5B57\u7B26\u6570\u636E\u7C7B\u578B\u5417\uFF1F \u4E0D\u53EF\u4EE5</p><p>5\u3001 \u8868\u4E2D\u6CA1\u6709\u5408\u9002\u7684\u5217\u4F5C\u4E3A\u4E3B\u952E\u600E\u4E48\u529E\uFF1F \u6DFB\u52A0\u81EA\u52A8\u589E\u52A0\u5217</p><p>6\u3001 \u5982\u679C\u6807\u8BC6\u5217A\u7684\u521D\u59CB\u503C\u4E3A1\uFF0C\u589E\u957F\u91CF\u4E3A1\uFF0C\u5219\u8F93\u5165\u4E09\u884C\u6570\u636E\u4EE5\u540E\uFF0C\u518D\u5220\u9664\u4E24\u884C\uFF0C\u4E0B\u6B21\u518D\u8F93\u5165\u6570\u636E\u884C\u7684\u65F6\u5019\uFF0C\u6807\u8BC6\u503C\u4ECE\u591A\u5C11\u5F00\u59CB\uFF1F \u4ECE4\u5F00\u59CB</p><h3 id="_2-5-\u552F\u4E00\u952E" tabindex="-1"><a class="header-anchor" href="#_2-5-\u552F\u4E00\u952E" aria-hidden="true">#</a> 2.5 \u552F\u4E00\u952E</h3><p>\u7279\u70B9\uFF1A</p><p>1\u3001\u4E0D\u80FD\u91CD\u590D\uFF0C\u53EF\u4EE5\u4E3A\u7A7A</p><p>2\u3001\u4E00\u4E2A\u8868\u53EF\u4EE5\u6709\u591A\u4E2A\u552F\u4E00\u952E</p><p>\u4F5C\u7528\uFF1A</p><p>1\u3001 \u4FDD\u8BC1\u6570\u636E\u4E0D\u80FD\u91CD\u590D\u3002\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u6027</p><p>2\u3001 \u52A0\u5FEB\u6570\u636E\u8BBF\u95EE</p><h4 id="_2-5-1-\u6DFB\u52A0\u552F\u4E00\u952E" tabindex="-1"><a class="header-anchor" href="#_2-5-1-\u6DFB\u52A0\u552F\u4E00\u952E" aria-hidden="true">#</a> 2.5.1 \u6DFB\u52A0\u552F\u4E00\u952E</h4><p>\u65B9\u6CD5\u4E00\uFF1A\u521B\u5EFA\u8868\u7684\u65F6\u5019\u6DFB\u52A0\u552F\u4E00\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t22(
   -&gt; id int primary key,
   -&gt; name varchar(20) unique,    #\u901A\u8FC7unique\u6DFB\u52A0\u552F\u4E00\u952E
   -&gt; addr varchar(100) unique
   -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t22 values (1,&#39;tom&#39;,&#39;\u4E0A\u6D77&#39;);
Query OK, 1 row affected (0.05 sec)

mysql&gt; insert into t22 values (2,&#39;tom&#39;,&#39;\u5317\u4EAC&#39;);    #  name\u91CD\u590D\u4E86\uFF0C\u62A5\u9519
ERROR 1062 (23000): Duplicate entry &#39;tom&#39; for key &#39;name&#39;
mysql&gt; insert into t22 values (2,&#39;berry&#39;,&#39;\u4E0A\u6D77&#39;);   # addr\u91CD\u590D\u4E86 
ERROR 1062 (23000): Duplicate entry &#39;\u4E0A\u6D77&#39; for key &#39;addr&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8FD8\u6709\u4E00\u79CD\u65B9\u6CD5</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t26(
    -&gt; id int,
    -&gt; name varchar(20),
    -&gt; addr varchar(20),
    -&gt; primary key(id),
    -&gt; unique (name),     # \u6DFB\u52A0\u552F\u4E00\u952E
    -&gt; unique (addr)
    -&gt; );
Query OK, 0 rows affected (0.06 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A\u4FEE\u6539\u8868\u7684\u65F6\u5019\u6DFB\u52A0\u552F\u4E00\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t23(
    -&gt; id int primary key,
    -&gt; name varchar(20)
    -&gt; );
Query OK, 0 rows affected (0.02 sec)

mysql&gt; alter table t23 add unique (name);    #  \u6DFB\u52A0\u4E00\u4E2A\u552F\u4E00\u952E
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E00\u6B21\u6DFB\u52A0\u591A\u4E2A\u552F\u4E00\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t24(
    -&gt; id int primary key,
    -&gt; name varchar(20),
    -&gt; addr varchar(20)
    -&gt; );
Query OK, 0 rows affected (0.06 sec)

mysql&gt; alter table t24 add unique(name),add unique(addr);  
Query OK, 0 rows affected (0.09 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6DFB\u52A0\u7EC4\u5408\u552F\u4E00\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t25(
    -&gt; id int primary key,
    -&gt; name varchar(20),
    -&gt; addr varchar(20)
    -&gt; );
Query OK, 0 rows affected (0.09 sec)

mysql&gt; alter table t25 add unique(name,addr);
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_2-5-2-\u67E5\u770B\u552F\u4E00\u952E" tabindex="-1"><a class="header-anchor" href="#_2-5-2-\u67E5\u770B\u552F\u4E00\u952E" aria-hidden="true">#</a> 2.5.2 \u67E5\u770B\u552F\u4E00\u952E</h4><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; show create table t26\\G;
*************************** 1. row ***************************
      Table: t26
Create Table: CREATE TABLE \`t26\` (
 \`id\` int(11) NOT NULL DEFAULT &#39;0&#39;,
 \`name\` varchar(20) DEFAULT NULL,
 \`addr\` varchar(20) DEFAULT NULL,
 PRIMARY KEY (\`id\`),
 UNIQUE KEY \`name\` (\`name\`),      # \u552F\u4E00\u952E
 UNIQUE KEY \`addr\` (\`addr\`)       # \u552F\u4E00\u952E
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)

mysql&gt; show create table t25\\G;
*************************** 1. row ***************************
      Table: t25
Create Table: CREATE TABLE \`t25\` (
 \`id\` int(11) NOT NULL,
 \`name\` varchar(20) DEFAULT NULL,
 \`addr\` varchar(20) DEFAULT NULL,
 PRIMARY KEY (\`id\`),
 UNIQUE KEY \`name\` (\`name\`,\`addr\`)    # \u7EC4\u5408\u552F\u4E00\u952E
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u6DFB\u52A0\u552F\u4E00\u952E\uFF0C\u7ED9\u552F\u4E00\u952E\u53D6\u540D</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table t27(
    -&gt; name varchar(20)
    -&gt; );
Query OK, 0 rows affected (0.03 sec)

mysql&gt; alter table t27 add unique UQ_name(name);
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql&gt; show create table t27\\G
*************************** 1. row ***************************
       Table: t27
Create Table: CREATE TABLE \`t27\` (
  \`name\` varchar(20) DEFAULT NULL,
  UNIQUE KEY \`UQ_name\` (\`name\`)    # \u552F\u4E00\u952E\u7684\u540D\u5B57\u662FUQ_name
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="_2-5-3-\u5220\u9664\u552F\u4E00\u952E" tabindex="-1"><a class="header-anchor" href="#_2-5-3-\u5220\u9664\u552F\u4E00\u952E" aria-hidden="true">#</a> 2.5.3 \u5220\u9664\u552F\u4E00\u952E</h4><p>\u901A\u8FC7\u552F\u4E00\u952E\u7684\u540D\u5B57\u6765\u5220\u9664\u552F\u4E00\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>alter table \u8868\u540D drop index \u552F\u4E00\u952E\u540D\u79F0;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536739081697.png" alt="1536739081697" loading="lazy"></p><p>\u95EE\u9898\uFF1A\u4E3B\u952E\u548C\u552F\u4E00\u952E\u7684\u533A\u522B\uFF1F</p><p>1\u3001\u4E3B\u952E\u4E0D\u80FD\u91CD\u590D\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u552F\u4E00\u952E\u4E0D\u80FD\u91CD\u590D\uFF0C\u53EF\u4EE5\u4E3A\u7A7A</p><p>2\u3001\u4E3B\u952E\u53EA\u6709\u4E00\u4E2A\uFF0C\u552F\u4E00\u952E\u53EF\u4EE5\u6709\u591A\u4E2A\u3002</p><h3 id="_2-6-\u5907\u6CE8-comment" tabindex="-1"><a class="header-anchor" href="#_2-6-\u5907\u6CE8-comment" aria-hidden="true">#</a> 2.6 \u5907\u6CE8\uFF08comment\uFF09</h3><p>\u4E3A\u4E86\u7A0B\u5E8F\u5458\u4E4B\u95F4\u7684\u76F8\u4E92\u4EA4\u6D41 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536739540981.png" alt="1536739540981" loading="lazy"></p><h2 id="_3-sql\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_3-sql\u6CE8\u91CA" aria-hidden="true">#</a> 3 SQL\u6CE8\u91CA</h2><p>\u5355\u884C\u6CE8\u91CA\uFF1A--\u6216#</p><p>\u591A\u884C\u6CE8\u91CA\uFF1A/* */</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536739661909.png" alt="1536739661909" loading="lazy"></p><h2 id="_4-\u6570\u636E\u5B8C\u6574\u6027\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_4-\u6570\u636E\u5B8C\u6574\u6027\u4ECB\u7ECD" aria-hidden="true">#</a> 4 \u6570\u636E\u5B8C\u6574\u6027\u4ECB\u7ECD</h2><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536739894901.png" alt="1536739894901" loading="lazy"></p><h3 id="_4-1-\u4FDD\u8BC1\u5B9E\u4F53\u5B8C\u6574\u6027" tabindex="-1"><a class="header-anchor" href="#_4-1-\u4FDD\u8BC1\u5B9E\u4F53\u5B8C\u6574\u6027" aria-hidden="true">#</a> 4.1 \u4FDD\u8BC1\u5B9E\u4F53\u5B8C\u6574\u6027</h3><p>1\u3001 \u4E3B\u952E\u7EA6\u675F</p><p>2\u3001 \u552F\u4E00\u7EA6\u675F</p><p>3\u3001 \u81EA\u52A8\u589E\u957F\u5217</p><h3 id="_4-2-\u4FDD\u8BC1\u57DF\u5B8C\u6574\u6027" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4FDD\u8BC1\u57DF\u5B8C\u6574\u6027" aria-hidden="true">#</a> 4.2 \u4FDD\u8BC1\u57DF\u5B8C\u6574\u6027</h3><p>1\u3001 \u6570\u636E\u7C7B\u578B\u7EA6\u675F</p><p>2\u3001 \u975E\u7A7A\u7EA6\u675F</p><p>3\u3001 \u9ED8\u8BA4\u503C\u7EA6\u675F</p><h3 id="_4-3-\u4FDD\u8BC1\u5F15\u7528\u5B8C\u6574\u6027" tabindex="-1"><a class="header-anchor" href="#_4-3-\u4FDD\u8BC1\u5F15\u7528\u5B8C\u6574\u6027" aria-hidden="true">#</a> 4.3 \u4FDD\u8BC1\u5F15\u7528\u5B8C\u6574\u6027</h3><p>1\u3001\u5916\u952E\u7EA6\u675F\uFF1A\u4ECE\u8868\u4E2D\u7684\u516C\u5171\u5B57\u6BB5\u662F\u4E3B\u8868\u7684\u5916\u952E</p><h4 id="_4-3-1-\u4E3B\u8868\u548C\u4ECE\u8868" tabindex="-1"><a class="header-anchor" href="#_4-3-1-\u4E3B\u8868\u548C\u4ECE\u8868" aria-hidden="true">#</a> 4.3.1 \u4E3B\u8868\u548C\u4ECE\u8868</h4><p>\u4E24\u4E2A\u8868\u5EFA\u7ACB\u5173\u7CFB\uFF08\u4E24\u4E2A\u8868\u53EA\u8981\u6709\u516C\u5171\u5B57\u6BB5\u5C31\u6709\u5173\u7CFB\uFF09\uFF0C\u4E00\u4E2A\u8868\u79F0\u4E3A\u4E3B\u8868\uFF0C\u4E00\u4E2A\u8868\u79F0\u4E3A\u4ECE\u8868\u3002</p><p>\u5916\u952E\u7EA6\u675F\u53EF\u4EE5\u5B9E\u73B0\uFF1A</p><p>1\u3001 \u4E3B\u8868\u4E2D\u6CA1\u6709\u7684\u4ECE\u8868\u4E2D\u4E0D\u5141\u8BB8\u63D2\u5165</p><p>2\u3001 \u4ECE\u8868\u4E2D\u6709\u7684\u4E3B\u8868\u4E2D\u4E0D\u5141\u8BB8\u5220\u9664</p><p>3\u3001 \u4E0D\u80FD\u66F4\u6539\u4E3B\u8868\u4E2D\u7684\u503C\u800C\u5BFC\u81F4\u4ECE\u8868\u4E2D\u7684\u8BB0\u5F55\u5B64\u7ACB\u5B58\u5728\u3002</p><p>4\u3001 \u5148\u5220\u9664\u4ECE\u8868\uFF0C\u518D\u5220\u9664\u4E3B\u8868</p><h4 id="_4-3-2-\u5916\u952E-foreign-key" tabindex="-1"><a class="header-anchor" href="#_4-3-2-\u5916\u952E-foreign-key" aria-hidden="true">#</a> 4.3.2 \u5916\u952E\uFF08foreign key\uFF09</h4><p>1\u3001 \u5916\u952E\uFF1A\u4ECE\u8868\u4E2D\u7684\u516C\u5171\u5B57\u6BB5\uFF0C\u516C\u5171\u5B57\u6BB5\u7684\u540D\u5B57\u53EF\u4EE5\u4E0D\u4E00\u6837\uFF0C\u4F46\u662F\u6570\u636E\u7C7B\u578B\u5FC5\u987B\u4E00\u6837\u3002</p><p>2\u3001 \u5916\u952E\u7EA6\u675F\u7528\u6765\u4FDD\u8BC1\u5F15\u7528\u5B8C\u6574\u6027</p><h4 id="_4-3-3-\u6DFB\u52A0\u5916\u952E" tabindex="-1"><a class="header-anchor" href="#_4-3-3-\u6DFB\u52A0\u5916\u952E" aria-hidden="true">#</a> 4.3.3 \u6DFB\u52A0\u5916\u952E</h4><p>\u65B9\u6CD5\u4E00\uFF1A\u521B\u5EFA\u8868\u7684\u65F6\u5019\u6DFB\u52A0\u5916\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create table stuinfo(
   stuno char(4) primary key,
   name varchar(10) not null
);

create table stumarks(
   stuid char(4) primary key,
   score tinyint unsigned,
   foreign key (stuid) references stuinfo(stuno)
);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A\u4FEE\u6539\u8868\u7684\u65F6\u5019\u6DFB\u52A0\u5916\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table stuinfo(
    -&gt;  stuno char(4) primary key,
    -&gt;  name varchar(10) not null
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; create table stumarks(
    -&gt;  stuid char(4) primary key,
    -&gt;  score tinyint unsigned
    -&gt; );
Query OK, 0 rows affected (0.06 sec)

\u8BED\u6CD5\uFF1A  alter table \u4ECE\u8868 add foreign key (\u4ECE\u8868\u7684\u516C\u5171\u5B57\u6BB5) references \u4E3B\u8868(\u516C\u5171\u5B57\u6BB5)

mysql&gt; alter table stumarks add foreign key (stuid) references stuinfo(stuno);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u811A\u4E0B\u7559\u5FC3\uFF1A\u8981\u521B\u5EFA\u5916\u952E\u5FC5\u987B\u662Finnodb\u5F15\u64CE\uFF0Cmyisam\u4E0D\u652F\u6301\u5916\u952E\u7EA6\u675F</p><h4 id="_4-3-4-\u67E5\u770B\u5916\u952E" tabindex="-1"><a class="header-anchor" href="#_4-3-4-\u67E5\u770B\u5916\u952E" aria-hidden="true">#</a> 4.3.4 \u67E5\u770B\u5916\u952E</h4><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536742477588.png" alt="1536742477588" loading="lazy"></p><h4 id="_4-3-5-\u5220\u9664\u5916\u952E" tabindex="-1"><a class="header-anchor" href="#_4-3-5-\u5220\u9664\u5916\u952E" aria-hidden="true">#</a> 4.3.5 \u5220\u9664\u5916\u952E</h4><p>\u901A\u8FC7\u5916\u952E\u7684\u540D\u5B57\u5220\u9664\u5916\u952E</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>alter table \u8868\u540D drop foreign key \u5916\u952E\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; alter table stumarks drop foreign key stumarks_ibfk_1;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_5-\u5916\u952E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_5-\u5916\u952E\u64CD\u4F5C" aria-hidden="true">#</a> 5 \u5916\u952E\u64CD\u4F5C</h2><p>1\u3001 \u4E25\u683C\u64CD\u4F5C\uFF08\u524D\u9762\u8BB2\u7684\u662F\u4E25\u683C\u64CD\u4F5C\uFF09</p><p>2\u3001 \u7F6E\u7A7A\u64CD\u4F5C\uFF08set null\uFF09\uFF1A\u5982\u679C\u4E3B\u8868\u8BB0\u5F55\u5220\u9664\u6216\u66F4\u65B0\uFF0C\u4ECE\u8868\u7F6E\u7A7A</p><p>3\u3001 \u7EA7\u8054\u64CD\u4F5C\uFF08cascade\uFF09\uFF1A\u5982\u679C\u4E3B\u8868\u8BB0\u5F55\u5220\u9664\u6216\u66F4\u65B0\uFF0C\u4ECE\u8868\u7EA7\u8054</p><p>\u4E00\u822C\u6765\u8BF4\uFF1A\u4E3B\u8868\u5220\u9664\u7684\u65F6\u5019\uFF0C\u4ECE\u8868\u7F6E\u7A7A\u64CD\u4F5C\uFF0C\u4E3B\u8868\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u4ECE\u8868\u7EA7\u8054\u64CD\u4F5C\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>foreign key(\u5916\u952E) references \u4E3B\u8868(\u5173\u952E\u5B57\u6BB5)[\u4E3B\u8868\u5220\u9664\u662F\u7684\u52A8\u4F5C][\u4E3B\u8868\u66F4\u65B0\u65F6\u5019\u7684\u52A8\u4F5C]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u9898</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; create table stuinfo(
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

mysql&gt; insert into stuinfo values (&#39;s101&#39;,&#39;tom&#39;);
Query OK, 1 row affected (0.00 sec)

mysql&gt; insert into stumarks values (null,&#39;s101&#39;,88);
Query OK, 1 row affected (0.00 sec)

mysql&gt; select * from stuinfo;
+-------+------+
| stuno | name |
+-------+------+
| s101  | tom  |
+-------+------+
1 row in set (0.00 sec)

mysql&gt; update stuinfo set stuno=&#39;s102&#39; where stuno=&#39;s101&#39;;   # \u66F4\u65B0\u65F6\u7EA7\u8054
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql&gt; select * from stumarks;
+-------+-------+-------+
| stuid | stuno | score |
+-------+-------+-------+
|     1 | s102  |    88 |
+-------+-------+-------+
1 row in set (0.00 sec)

mysql&gt; delete from stuinfo where stuno=&#39;s102&#39;;    # \u5220\u9664\u65F6\u7F6E\u7A7A
Query OK, 1 row affected (0.02 sec)

mysql&gt; select * from stumarks;
+-------+-------+-------+
| stuid | stuno | score |
+-------+-------+-------+
|     1 | NULL  |    88 |
+-------+-------+-------+
1 row in set (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>`,205);function r(l,i){return a}var t=n(e,[["render",r],["__file","list-com.html.vue"]]);export{t as default};
