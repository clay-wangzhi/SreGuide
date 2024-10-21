import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as i,e as n}from"./app-4d4f7d7e.js";const l={},d=n(`<h1 id="_3-数据库设计与查询语句" tabindex="-1"><a class="header-anchor" href="#_3-数据库设计与查询语句" aria-hidden="true">#</a> 3 数据库设计与查询语句</h1><h2 id="_1-数据库基本概念" tabindex="-1"><a class="header-anchor" href="#_1-数据库基本概念" aria-hidden="true">#</a> 1 数据库基本概念</h2><p>1、关系：两个表的公共字段</p><p>2、行：也称记录，也称实体</p><p>3、列：也称字段，也称属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>就表结构而言，表分为行和列；
就表数据而言，分为记录和字段；
就面向对象而言，一个记录就是一个实体，一个字段就是一个属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、数据冗余：相同的数据存储在不同的地方</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>脚下留心：
1、冗余只能减少，不能杜绝。
2、减少冗余的方法是分表
3、为减少数据查找的麻烦，允许数据有一定的冗余
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、数据完整性：正确性+准确性=数据完整性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>正确性：数据类型正确
准确性：数据范围要准确
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>思考：学生的年龄是整型，输入1000岁，正确性和准确性如何？</p><p>答：正确的，但不准确的</p><p>思考：年龄是整形的，收入了字符串，正确性和准确性如何？</p><p>答：不正确</p><h2 id="_2-实体和实体之间的关系" tabindex="-1"><a class="header-anchor" href="#_2-实体和实体之间的关系" aria-hidden="true">#</a> 2 实体和实体之间的关系</h2><p>1、一对一</p><p>2、一对多 （多对一）</p><p>3、多对多 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536975724695.png" alt="1536975724695"></p><h3 id="_2-1-一对多-1-n" tabindex="-1"><a class="header-anchor" href="#_2-1-一对多-1-n" aria-hidden="true">#</a> 2.1 一对多 1：N</h3><p>1、主表中的一条记录对应从表中的多条记录。</p><p>2、一对多和多对一是一样的</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536976096582.png" alt="1536976096582"></p><hr><p>如何实现一对多？</p><p>答：主键和非主键建关系</p><p>问题：说出几个一对多的关系？</p><p>答：班级表和学生表、 班主表和学生表</p><h3 id="_2-2-一对一-1-1" tabindex="-1"><a class="header-anchor" href="#_2-2-一对一-1-1" aria-hidden="true">#</a> 2.2 一对一（1:1）</h3><p>1、主表中的一条记录对应从表中的一条记录</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536976513236.png" alt="1536976513236"></p><p>如何实现一对一？</p><p>主键和主键建关系就能实现一对一。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>思考：一对一两个表完全可以用一个表实现，为什么还要分成两个表？

答：在字段数量很多情况下，数据量也就很大，每次查询都需要检索大量数据，这样效率低下。我们可以将所有字段分成两个部分，“常用字段”和“不常用字段”，这样对大部分查询者来说效率提高了。【表的垂直分割】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-多对多-n-m" tabindex="-1"><a class="header-anchor" href="#_2-3-多对多-n-m" aria-hidden="true">#</a> 2.3 多对多（N：M）</h3><p>主表中的一条记录对应从表中的多条记录，从表中的一条记录对应主表中的多条记录</p><p>班级和讲师的关系</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536977577667.png" alt="1536977577667"></p><p>如何实现多对多？</p><p>答：建立第三张表来保存关系。</p><p>问题：说出几个多对多的关系？</p><p>1、科目表和学生表的关系 2、商品表和订单表 3、游戏目录表和玩家表</p><h2 id="_3-数据库设计的步骤" tabindex="-1"><a class="header-anchor" href="#_3-数据库设计的步骤" aria-hidden="true">#</a> 3 数据库设计的步骤</h2><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536977906540.png" alt="1536977906540"></p><h3 id="_3-1-数据库设计具体步骤" tabindex="-1"><a class="header-anchor" href="#_3-1-数据库设计具体步骤" aria-hidden="true">#</a> 3.1 数据库设计具体步骤</h3><p>1、 收集信息：与该系统有关人员进行交流、坐谈，充分理解数据库需要完成的任务</p><p>2、 标识对象（实体－Entity）标识数据库要管理的关键对象或实体</p><p>3、 标识每个实体的属性（Attribute）</p><p>4、 标识对象之间的关系（Relationship）</p><p>5、 将模型转换成数据库</p><p>6、 规范化</p><h3 id="_3-2-绘制e-r图" tabindex="-1"><a class="header-anchor" href="#_3-2-绘制e-r图" aria-hidden="true">#</a> 3.2 绘制E-R图</h3><p>E-R（Entity－Relationship）实体关系图</p><p>E-R图的语法</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536978470142.png" alt="1536978470142"></p><p>绘制E-R图</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536978565499.png" alt="1536978565499"></p><h3 id="_3-3-将e-r图转成表" tabindex="-1"><a class="header-anchor" href="#_3-3-将e-r图转成表" aria-hidden="true">#</a> 3.3 将E-R图转成表</h3><p>1、 实体转成表，属性转成字段</p><p>2、 如果没有合适的字段做主键，给表添加一个自动增长列做主键。</p><h3 id="_3-4-例题" tabindex="-1"><a class="header-anchor" href="#_3-4-例题" aria-hidden="true">#</a> 3.4 例题</h3><p>1、项目需求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BBS论坛的基本功能：
用户注册和登录，后台数据库需要存放用户的注册信息和在线状态信息；
用户发贴，后台数据库需要存放贴子相关信息，如贴子内容、标题等；
用户可以对发帖进行回复；
论坛版块管理：后台数据库需要存放各个版块信息，如版主、版块名称、贴子数等；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、标识对象</p><pre><code>参与的对象有：用户、发的帖子、跟帖、板块
</code></pre><p>3、标识对象的属性</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536978271446.png" alt="1536978271446"></p><p>4、建立关系，绘制E-R图</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536978734804.png" alt="1536978734804"></p><p>5、将E-R图转出表结构</p><h2 id="_4-数据规范化" tabindex="-1"><a class="header-anchor" href="#_4-数据规范化" aria-hidden="true">#</a> 4 数据规范化</h2><p>Codd博士定义了6个范式来规范化数据库，范式由小到大来约束，范式越高冗余越小，但表的个数也越多。实验证明，三范式是性价比最高的。</p><h3 id="_4-1-第一范式-确保每列原子性" tabindex="-1"><a class="header-anchor" href="#_4-1-第一范式-确保每列原子性" aria-hidden="true">#</a> 4.1 第一范式：确保每列原子性</h3><p>第一范式确保每个字段不可再分</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536979522448.png" alt="1536979522448"></p><p>思考：如下表设计是否合理？</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536979672041.png" alt="1536979672041"></p><p>不合理。不满足第一范式，上课时间可以再分</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536979718323.png" alt="1536979718323"></p><p>思考：地址包含省、市、县、地区是否需要拆分？</p><p>答：如果仅仅起地址的作用，不需要统计，可以不拆分；如果有按地区统计的功能需要拆分。</p><p>在实际项目中，建议拆分。</p><h3 id="_4-2-第二范式-非键字段必须依赖于键字段" tabindex="-1"><a class="header-anchor" href="#_4-2-第二范式-非键字段必须依赖于键字段" aria-hidden="true">#</a> 4.2 第二范式：非键字段必须依赖于键字段</h3><p>一个表只能描述一件事</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536980482113.png" alt="1536980482113"></p><p>思考：如下表设计是否合理？</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536980574792.png" alt="1536980574792"></p><h3 id="_4-3-第三范式-消除传递依赖" tabindex="-1"><a class="header-anchor" href="#_4-3-第三范式-消除传递依赖" aria-hidden="true">#</a> 4.3 第三范式：消除传递依赖</h3><p>在所有的非键字段中，不能有传递依赖</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536981861980.png" alt="1536981861980"></p><p>下列设计是否满足第三范式？</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536982061259.png" alt="1536982061259"></p><p>不满足，因为语文和数学确定了，总分就确定了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多学一招：上面的设计不满足第三范式，但是高考分数表就是这样设计的，为什么？

答：高考分数峰值访问量非常大，这时候就是性能更重要。当性能和规范化冲突的时候，我们首选性能。这就是“反三范式”。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-数据库设计的例题" tabindex="-1"><a class="header-anchor" href="#_4-4-数据库设计的例题" aria-hidden="true">#</a> 4.4 数据库设计的例题</h3><p>1、需求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>公司承担多个工程项目，每一项工程有：工程号、工程名称、施工人员等
公司有多名职工，每一名职工有：职工号、姓名、性别、职务（工程师、技术员）等
公司按照工时和小时工资率支付工资，小时工资率由职工的职务决定（例如，技术员的小时工资率与工程师不同）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、工资表</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536982976983.png" alt="1536982976983"></p><p>3、将工资表转成数据库表</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536983011535.png" alt="1536983011535"></p><p>4、这个表存在的问题</p><pre><code>A：新人入职需要虚拟一个项目

B：职务更改，小时工资率可能会忘记更改，造成数据不完整

C：有人离职，删除记录后，工程也没有了
</code></pre><p>5、规范化表</p><pre><code>第一步：这个表满足第一范式

第二步：这个表不是描述了一件事情
</code></pre><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536983332419.png" alt="1536983332419"></p><pre><code>第三步：是否满足第三范式
</code></pre><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536983422611.png" alt="1536983422611"></p><p>更改如下：</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536983406042.png" alt="1536983406042"></p><h2 id="_5-查询语句" tabindex="-1"><a class="header-anchor" href="#_5-查询语句" aria-hidden="true">#</a> 5 查询语句</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>语法：select [选项] 列名 [from 表名] [where 条件]  [group by 分组] [order by 排序][having 条件] [limit 限制]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-1-字段表达式" tabindex="-1"><a class="header-anchor" href="#_5-1-字段表达式" aria-hidden="true">#</a> 5.1 字段表达式</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select &#39;锄禾日当午&#39;;
+------------+
| 锄禾日当午          |
+------------+
| 锄禾日当午          |
+------------+

mysql&gt; select 10*10;
+-------+
| 10*10 |
+-------+
|   100 |
+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过as给字段取别名</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt;  select &#39;锄禾日当午&#39; as content;
+------------+
| content    |
+------------+
| 锄禾日当午          |
+------------+
1 row in set (0.00 sec)

mysql&gt; select 10*10 as result;
+--------+
| result |
+--------+
|    100 |
+--------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多学一招：as可以省略</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select 10*10  result;
+--------+
| result |
+--------+
|    100 |
+--------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-from子句" tabindex="-1"><a class="header-anchor" href="#_5-2-from子句" aria-hidden="true">#</a> 5.2 from子句</h3><p>from：来自，from后面跟的是数据源。数据源可以有多个。返回笛卡尔积。</p><p>插入测试表</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create table t1(
    -&gt; id int,
    -&gt; name varchar(10)
    -&gt; );
Query OK, 0 rows affected (0.05 sec)

mysql&gt; create table t2(
    -&gt; field1 varchar(10),
    -&gt; field2 varchar(10)
    -&gt; );
Query OK, 0 rows affected (0.00 sec)

mysql&gt; insert into t1 values (1,&#39;tom&#39;),(2,&#39;berry&#39;);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql&gt; insert into t2 values (&#39;333&#39;,&#39;333&#39;),(&#39;444&#39;,&#39;444&#39;);
Query OK, 2 rows affected (0.02 sec)
Records: 2  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试多个数据源</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from t1,t2;              # 返回笛卡尔积
+------+-------+--------+--------+
| id   | name  | field1 | field2 |
+------+-------+--------+--------+
|    1 | tom   | 333    | 333    |
|    2 | berry | 333    | 333    |
|    1 | tom   | 444    | 444    |
|    2 | berry | 444    | 444    |
+------+-------+--------+--------+
4 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-dual表" tabindex="-1"><a class="header-anchor" href="#_5-3-dual表" aria-hidden="true">#</a> 5.3 dual表</h3><p>dual表是一个伪表。在有些特定情况下，没有具体的表的参与，但是为了保证select语句的完整又必须要一个表名，这时候就使用伪表。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select 10*10 as result from dual;  #dual表是用来保证select语句的完整性。
+--------+
| result |
+--------+
|    100 |
+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-where子句" tabindex="-1"><a class="header-anchor" href="#_5-4-where子句" aria-hidden="true">#</a> 5.4 where子句</h3><p>where后面跟的是条件，在数据源中进行筛选。返回条件为真记录</p><p>MySQL支持的运算符</p><ol><li><code>&gt;</code> 大于</li><li><code>&lt;</code>小于</li><li><code>&gt;=</code></li><li><code>&lt;=</code></li><li><code>=</code></li><li><code>!=</code></li><li>and 与</li><li>or 或</li><li>not 非</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where stusex=&#39;男&#39;;		# 查找性别是男的记录
mysql&gt; select * from stu where stuage&gt;=20;		# 查找年龄不低于20的记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>思考：如下代码输出什么</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from stu where 1      # 返回所有数据库
select * from stu where 0		#返回空记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>思考：如何查找北京和上海的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where stuaddress=&#39;上海&#39; or stuaddress=&#39;北京&#39;;
+--------+---------+--------+--------+---------+------------+------+------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+---------+--------+--------+---------+------------+------+------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |   80 | NULL |
| s25302 | 李文才       | 男       |     31 |       3 | 上海          |   77 |   76 |
| s25303 | 李斯文       | 女      |     22 |       2 | 北京           |   55 |   82 |
| s25320 | Tom     | 男       |     24 |       8 | 北京           |   65 |   67 |
+--------+---------+--------+--------+---------+------------+------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-in-not-in" tabindex="-1"><a class="header-anchor" href="#_5-5-in-not-in" aria-hidden="true">#</a> 5.5 in | not in</h3><p>上面的查询上海和北京的学生的SQL可以通过in语句来实现</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where stuaddress in (&#39;北京&#39;,&#39;上海&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>练习：</p><p>1、查找学号是s25301,s25302,s25303的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where stuno in (&#39;s25301&#39;,&#39;s25302&#39;,&#39;s25303&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、查找年龄是18,19,20的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where stuage in(18,19,20);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、查找不是北京和上海的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where stuaddress not in (&#39;北京&#39;,&#39;上海&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-6-between-and-not-between-and" tabindex="-1"><a class="header-anchor" href="#_5-6-between-and-not-between-and" aria-hidden="true">#</a> 5.6 between…and|not between…and</h3><p>查找某个范围的记录</p><p>1、查找年龄在18~20之间的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where stuage&gt;=18 and stuage&lt;=20;   # 方法一

mysql&gt; select * from stu where stuage between 18 and 20;   # 方法二
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、查找年龄不在18~20之间的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where stuage&lt;18 or stuage&gt;20;		#方法一

mysql&gt; select * from stu where not (stuage&gt;=18 and stuage&lt;=20);

mysql&gt; select * from stu where stuage not between 18 and 20;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-is-null-is-not-null" tabindex="-1"><a class="header-anchor" href="#_5-7-is-null-is-not-null" aria-hidden="true">#</a> 5.7 is null | is not null</h3><p>脚下留心：查询一个为空的字段不能用等于，必须用is null</p><p>查找缺考的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where ch is null or math is null; # 查找缺考的人
+--------+----------+--------+--------+---------+------------+------+------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+----------+--------+--------+---------+------------+------+------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           |   80 | NULL |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           | NULL |   74 |
+--------+----------+--------+--------+---------+------------+------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找参加考试的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where ch is not null and math is not null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-8-聚合函数" tabindex="-1"><a class="header-anchor" href="#_5-8-聚合函数" aria-hidden="true">#</a> 5.8 聚合函数</h3><ol><li><p>sum() 求和</p></li><li><p>avg() 求平均值</p></li><li><p>max() 求最大值</p></li><li><p>min() 求最小值</p></li><li><p>count() 求记录数</p></li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#求语文总分、语文平均分、语文最高分、语文最低分、总人数

mysql&gt; select sum(ch) &#39;语文总分&#39;,avg(ch) &#39;语文平均分&#39;, max(ch) &#39;语文最高分&#39;,min(ch) &#39;语文最低分&#39;,count(*) &#39;总人数&#39; from stu;
+----------+------------+------------+------------+--------+
| 语文总分        | 语文平均分          | 语文最高分          | 语文最低分          | 总人数       |

+----------+------------+------------+------------+--------+
|      597 |    74.6250 |         88 |         55 |      9 |
+----------+------------+------------+------------+--------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-通配符" tabindex="-1"><a class="header-anchor" href="#_5-9-通配符" aria-hidden="true">#</a> 5.9 通配符</h3><ol><li><p>_ [下划线] 表示任意一个字符</p></li><li><p>% 表示任意字符</p></li></ol><p>练习</p><p>1、满足“T_m”的有（A、C）</p><p>A：Tom B：Toom C：Tam D：Tm E：Tmo</p><p>2、满足“T_m_”的有（B、C ）</p><p>A:Tmom B:Tmmm C:T1m2 D:Tmm E:Tm</p><p>3、满足“张%”的是（A、B、C、D）</p><p>A:张三 B：张三丰 C：张牙舞爪 D：张 E：小张</p><p>4、满足“%诺基亚%”的是（A、B、C、D）</p><p>A：诺基亚2100 B：2100诺基亚 C：把我的诺基亚拿过来 D：诺基亚</p><h3 id="_5-10-模糊查询-like" tabindex="-1"><a class="header-anchor" href="#_5-10-模糊查询-like" aria-hidden="true">#</a> 5.10 模糊查询（like）</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 查找姓张的同学
mysql&gt; select * from stu where stuname like &#39;张%&#39;;
+--------+---------+--------+--------+---------+------------+------+------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+---------+--------+--------+---------+------------+------+------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |   80 | NULL |
+--------+---------+--------+--------+---------+------------+------+------+
1 row in set (0.00 sec)
#例题
mysql&gt; select * from stu where stuname like &#39;T_m&#39;;
+--------+---------+--------+--------+---------+------------+------+------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+---------+--------+--------+---------+------------+------+------+
| s25320 | Tom     | 男       |     24 |       8 | 北京           |   65 |   67 |
+--------+---------+--------+--------+---------+------------+------+------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-11-order-by排序" tabindex="-1"><a class="header-anchor" href="#_5-11-order-by排序" aria-hidden="true">#</a> 5.11 order by排序</h3><p>asc：升序【默认】</p><p>desc：降序</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu order by ch desc;		# 语文成绩降序排列

mysql&gt; select * from stu order by math asc;     # 数学成绩升序排列

mysql&gt; select * from stu order by math;       # 默认升序排列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多列排序</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#年龄升序,成绩降序
mysql&gt; select *,(ch+math) as &#39;总分&#39; from stu order by stuage asc,(ch+math) desc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>思考如下代码表示什么含义</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from stu order by stuage desc,ch desc;     #年龄降序，语文降序
select * from stu order by stuage desc,ch asc;		#年龄降序，语文升序
select * from stu order by stuage,ch desc;          #年龄升序、语文降序
select * from stu order by stuage,ch; 				#年龄升序、语文升序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-12-group-by-【分组查询】" tabindex="-1"><a class="header-anchor" href="#_5-12-group-by-【分组查询】" aria-hidden="true">#</a> 5.12 group by 【分组查询】</h3><p>将查询的结果分组，分组查询目的在于统计数据。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 按性别分组，显示每组的平均年龄
mysql&gt; select avg(stuage) as &#39;年龄&#39;,stusex from stu group by stusex;
+---------+--------+
| 年龄        | stusex |
+---------+--------+
| 22.7500 | 女      |
| 25.4000 | 男       |
+---------+--------+
2 rows in set (0.00 sec)
# 按地区分组，每个地区的平均年龄
mysql&gt; select avg(stuage) as &#39;年龄&#39;,stuaddress from stu group by stuaddress;
+---------+------------+
| 年龄        | stuaddress |
+---------+------------+
| 31.0000 | 上海          |
| 21.3333 | 北京           |
| 27.0000 | 天津           |
| 23.0000 | 河北          |
| 23.0000 | 河南           |
+---------+------------+
5 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>脚下留心：
1、如果是分组查询，查询字段必须是分组字段和聚合函数。
2、查询字段是普通字段，只取第一个值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536999666442.png" alt="1536999666442"></p><p>通过group_concat()函数将同一组的值连接起来显示</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select group_concat(stuname),stusex from stu group by stusex;
+-------------------------------------+--------+
| group_concat(stuname)               | stusex |
+-------------------------------------+--------+
| 李斯文,诸葛丽丽,梅超风,Tabm                           | 女      |
| 张秋丽,李文才,欧阳俊雄,争青小子,Tom                          | 男       |
+-------------------------------------+--------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多学一招：【了解】
1、分组后的结果默认会按升序排列显示
2、也是可以使用desc实现分组后的降序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536999889281.png" alt="1536999889281"></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536999987356.png" alt="1536999987356"></p><p>多列分组</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select stuaddress,stusex,avg(stuage) from stu group by stuaddress,stusex;
+------------+--------+-------------+
| stuaddress | stusex | avg(stuage) |
+------------+--------+-------------+
| 上海          | 男       |     31.0000 |
| 北京           | 女      |     22.0000 |
| 北京           | 男       |     21.0000 |
| 天津           | 男       |     27.0000 |
| 河北          | 女      |     23.0000 |
| 河南           | 女      |     23.0000 |
+------------+--------+-------------+
6 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-13-having条件" tabindex="-1"><a class="header-anchor" href="#_5-13-having条件" aria-hidden="true">#</a> 5.13 having条件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>思考：数据库中的表是一个二维表，返回的结果是一张二维表，既然能在数据库的二维表中进行查询，能否在结果集的二维表上继续进行查询？

答：可以，having条件就是在结果集上继续进行筛选。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu where stusex=&#39;男&#39;;   # 从数据库中查找
+--------+----------+--------+--------+---------+------------+------+------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+----------+--------+--------+---------+------------+------+------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           |   80 | NULL |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |   77 |   76 |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           | NULL |   74 |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |   86 |   92 |
| s25320 | Tom      | 男       |     24 |       8 | 北京           |   65 |   67 |
+--------+----------+--------+--------+---------+------------+------+------+
5 rows in set (0.00 sec)

mysql&gt; select * from stu having stusex=&#39;男&#39;;   # 从结果集中查找
+--------+----------+--------+--------+---------+------------+------+------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+----------+--------+--------+---------+------------+------+------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           |   80 | NULL |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |   77 |   76 |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           | NULL |   74 |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |   86 |   92 |
| s25320 | Tom      | 男       |     24 |       8 | 北京           |   65 |   67 |
+--------+----------+--------+--------+---------+------------+------+------+
5 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考如下语句是否正确 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537001246956.png" alt="1537001246956"></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537001432304.png" alt="1537001432304"></p><p>having和where的区别：</p><p>where是对原始数据进行筛选，having是对记录集进行筛选。</p><h3 id="_5-14-limit" tabindex="-1"><a class="header-anchor" href="#_5-14-limit" aria-hidden="true">#</a> 5.14 limit</h3><p>语法：limit 起始位置，显示长度</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu limit 0,2;    # 从0的位置开始，取两条数据
+--------+---------+--------+--------+---------+------------+------+------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+---------+--------+--------+---------+------------+------+------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |   80 | NULL |
| s25302 | 李文才       | 男       |     31 |       3 | 上海          |   77 |   76 |
+--------+---------+--------+--------+---------+------------+------+------+
2 rows in set (0.00 sec)
 
mysql&gt; select * from stu limit 2,2;    # 从2的位置开始，取两条数据
+--------+----------+--------+--------+---------+------------+------+------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+----------+--------+--------+---------+------------+------+------+
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           |   55 |   82 |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           | NULL |   74 |
+--------+----------+--------+--------+---------+------------+------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>起始位置可以省略，默认是从0开始</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stu limit 2;
+--------+---------+--------+--------+---------+------------+------+------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+---------+--------+--------+---------+------------+------+------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |   80 | NULL |
| s25302 | 李文才       | 男       |     31 |       3 | 上海          |   77 |   76 |
+--------+---------+--------+--------+---------+------------+------+------+
2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：找出班级总分前三名</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select *,(ch+math) total from stu order by total desc limit 0,3;
+--------+----------+--------+--------+---------+------------+------+------+-------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | ch   | math | total |
+--------+----------+--------+--------+---------+------------+------+------+-------+
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |   86 |   92 |   178 |
| s25321 | Tabm     | 女      |     23 |       9 | 河北          |   88 |   77 |   165 |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |   77 |   76 |   153 |
+--------+----------+--------+--------+---------+------------+------+------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多学一招：limit在update和delete语句中也是可以使用的。</p><h3 id="_5-15-查询语句中的选项" tabindex="-1"><a class="header-anchor" href="#_5-15-查询语句中的选项" aria-hidden="true">#</a> 5.15 查询语句中的选项</h3><p>查询语句中的选项有两个：</p><p>1、 all：显示所有数据 【默认】</p><p>2、 distinct：去除结果集中重复的数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select distinct stuaddress from stu;
+------------+
| stuaddress |
+------------+
| 上海          |
| 天津           |
| 河南           |
| 河北          |
| 北京           |
+------------+
5 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-union-联合" tabindex="-1"><a class="header-anchor" href="#_6-union-联合" aria-hidden="true">#</a> 6 union（联合）</h2><p>插入测试数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create table GO1(
    -&gt; id int primary key,
    -&gt; name varchar(20));
Query OK, 0 rows affected (0.06 sec)

mysql&gt; insert into Go1 values (1,&#39;李白&#39;),(2,&#39;张秋丽&#39;);
Query OK, 2 rows affected (0.02 sec)
Records: 2  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-1-union的使用" tabindex="-1"><a class="header-anchor" href="#_6-1-union的使用" aria-hidden="true">#</a> 6.1 union的使用</h3><p>作用：将多个select语句结果集纵向联合起来</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select 语句 union [选项] select 语句 union [选项] select 语句;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select stuno,stuname from stu union select id,name from Go1;
+--------+----------+
| stuno  | stuname  |
+--------+----------+
| s25301 | 张秋丽         |
| s25302 | 李文才        |
| s25303 | 李斯文        |
| s25304 | 欧阳俊雄        |
| s25305 | 诸葛丽丽         |
| s25318 | 争青小子        |
| s25319 | 梅超风        |
| s25320 | Tom      |
| s25321 | Tabm     |
| 1      | 李白         |
| 2      | 张秋丽         |
+--------+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：查询上海的男生和北京的女生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select stuname,stuaddress,stusex from stu where (stuaddress=&#39;上海&#39; and stusex=&#39;男&#39;) or (stuaddress=&#39;北京&#39; and stusex=&#39;女&#39;);
+---------+------------+--------+
| stuname | stuaddress | stusex |
+---------+------------+--------+
| 张秋丽        | 上海          | 男       |
| 梅超风       | 北京           | 女      |
+---------+------------+--------+
2 rows in set (0.00 sec)

mysql&gt; select stuname,stuaddress,stusex from stu where stuaddress=&#39;上海&#39; and stusex=&#39;男&#39; union select stuname,stuaddress,stusex from stu where stuaddress=&#39;北京&#39; and stusex=&#39;女&#39;;
+---------+------------+--------+
| stuname | stuaddress | stusex |
+---------+------------+--------+
| 张秋丽        | 上海          | 男       |
| 梅超风       | 北京           | 女      |
+---------+------------+--------+
2 rows in set (0.02 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-union的选项" tabindex="-1"><a class="header-anchor" href="#_6-2-union的选项" aria-hidden="true">#</a> 6.2 union的选项</h3><p>union的选项有两个</p><p>1、 all：显示所有数据</p><p>2、 distinct：去除重复的数据【默认】</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select name from go1 union select stuname from stu;
+----------+
| name     |
+----------+
| 李白         |
| 张秋丽         |
| 李文才        |
| 李斯文        |
| 欧阳俊雄        |
| 诸葛丽丽         |
| 争青小子        |
| 梅超风        |
| Tom      |
| Tabm     |
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认是去重复的</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select name from go1 union all select stuname from stu;  # all不去重复记录
+----------+
| name     |
+----------+
| 李白         |
| 张秋丽         |
| 张秋丽         |
| 李文才        |
| 李斯文        |
| 欧阳俊雄        |
| 诸葛丽丽         |
| 争青小子        |
| 梅超风        |
| Tom      |
| Tabm     |
+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-union的注意事项" tabindex="-1"><a class="header-anchor" href="#_6-3-union的注意事项" aria-hidden="true">#</a> 6.3 union的注意事项</h3><p>1、 union两边的select语句的字段个数必须一致</p><p>2、 union两边的select语句的字段名可以不一致，最终按第一个select语句的字段名。</p><p>3、 union两边的select语句中的数据类型可以不一致。</p><h2 id="_7-多表查询分类" tabindex="-1"><a class="header-anchor" href="#_7-多表查询分类" aria-hidden="true">#</a> 7 多表查询分类</h2><p>将多个表的数据横向的联合起来。 1、 内连接 2、 外连接 a) 左外连接 b) 右外连接 3、 交叉连接 4、 自然连接</p><h3 id="_7-1-内连接【inner-join】" tabindex="-1"><a class="header-anchor" href="#_7-1-内连接【inner-join】" aria-hidden="true">#</a> 7.1 内连接【inner join】</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法一：select 列名 from 表1 inner join 表2 on 表1.公共字段=表2.公共字段

语法二：select 列名 from 表1,表2 where 表1.公共字段=表2.公共字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>方法一：
mysql&gt; select stuname,stusex,writtenexam,labexam from stuinfo inner join stumarks on stuinfo.stuno=stumarks.stuno;
+----------+--------+-------------+---------+
| stuname  | stusex | writtenexam | labexam |
+----------+--------+-------------+---------+
| 李斯文        | 女      |          80 |      58 |
| 李文才        | 男       |          50 |      90 |
| 欧阳俊雄        | 男       |          65 |      50 |
| 张秋丽         | 男       |          77 |      82 |
| 争青小子        | 男       |          56 |      48 |
+----------+--------+-------------+---------+

方法二：
mysql&gt; select stuinfo.stuno,stuname,stusex,writtenexam,labexam from stuinfo,stumarks where stuinfo.stuno=stumarks.stuno;
+--------+----------+--------+-------------+---------+
| stuno  | stuname  | stusex | writtenexam | labexam |
+--------+----------+--------+-------------+---------+
| s25303 | 李斯文        | 女      |          80 |      58 |
| s25302 | 李文才        | 男       |          50 |      90 |
| s25304 | 欧阳俊雄        | 男       |          65 |      50 |
| s25301 | 张秋丽         | 男       |          77 |      82 |
| s25318 | 争青小子        | 男       |          56 |      48 |
+--------+----------+--------+-------------+---------+

可以给表取别名
mysql&gt; select i.stuno,stuname,stusex,writtenexam,labexam from stuinfo i,stumarks s where i.stuno=s.stuno;
+--------+----------+--------+-------------+---------+
| stuno  | stuname  | stusex | writtenexam | labexam |
+--------+----------+--------+-------------+---------+
| s25303 | 李斯文        | 女      |          80 |      58 |
| s25302 | 李文才        | 男       |          50 |      90 |
| s25304 | 欧阳俊雄        | 男       |          65 |      50 |
| s25301 | 张秋丽         | 男       |          77 |      82 |
| s25318 | 争青小子        | 男       |          56 |      48 |
+--------+----------+--------+-------------+---------+
5 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚下留心：显示公共字段需要指定表名 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537061664763.png" alt="1537061664763"></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1537061715978.png" alt="1537061715978"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>思考：
select * from 表1 inner join 表2 on 表1.公共字段=表2.公共字段  和
select * from 表2 inner join 表1 on 表1.公共字段=表2.公共字段   结果是否一样？
答：一样的，因为内连接获取的是两个表的公共部分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多学一招：三个表的内连接如何实现？
select * from 表1 inner join 表2 on 表1.公共字段=表2.公共字段
inner join 表3 on 表2.公共字段=表3.公共字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-左外连接【left-join】" tabindex="-1"><a class="header-anchor" href="#_7-2-左外连接【left-join】" aria-hidden="true">#</a> 7.2 左外连接【left join】</h3><p>以左边的表为标准，如果右边的表没有对应的记录，用NULL填充。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：select 列名 from 表1 left join 表2 on 表1.公共字段=表2.公共字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select stuname,writtenexam,labexam from stuinfo left join stumarks on stuinfo.stuno=stumarks.stuno;
+----------+-------------+---------+
| stuname  | writtenexam | labexam |
+----------+-------------+---------+
| 张秋丽         |          77 |      82 |
| 李文才        |          50 |      90 |
| 李斯文        |          80 |      58 |
| 欧阳俊雄        |          65 |      50 |
| 诸葛丽丽         |        NULL |    NULL |
| 争青小子        |          56 |      48 |
| 梅超风        |        NULL |    NULL |
+----------+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>思考：
select * from 表1 left join 表2 on 表1.公共字段=表2.公共字段
和
select * from 表2 left join 表1 on 表1.公共字段=表2.公共字段   是否一样？
答：不一样，左连接以左边的表为准。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-右外连接【right-join】" tabindex="-1"><a class="header-anchor" href="#_7-3-右外连接【right-join】" aria-hidden="true">#</a> 7.3 右外连接【right join】</h3><p>以右边的表为标准，如果左边的表没有对应的记录，用NULL填充。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：select 列名 from 表1 right join 表2 on 表1.公共字段=表2.公共字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例题</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select stuname,writtenexam,labexam from stuinfo right join stumarks on stuinfo.stuno=stumarks.stuno;
+----------+-------------+---------+
| stuname  | writtenexam | labexam |
+----------+-------------+---------+
| 李斯文        |          80 |      58 |
| 李文才        |          50 |      90 |
| 欧阳俊雄        |          65 |      50 |
| 张秋丽         |          77 |      82 |
| 争青小子        |          56 |      48 |
| NULL     |          66 |      77 |
+----------+-------------+---------+
6 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>思考：
select * from 表1 left join 表2 on 表1.公共字段=表2.公共字段
和
select * from 表2 right join 表1 on 表1.公共字段=表2.公共字段  是否一样？

答：一样的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-交叉连接【cross-join】" tabindex="-1"><a class="header-anchor" href="#_7-4-交叉连接【cross-join】" aria-hidden="true">#</a> 7.4 交叉连接【cross join】</h3><p>插入测试数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; create table t1(
    -&gt; id int,
    -&gt; name varchar(10)
    -&gt; );
Query OK, 0 rows affected (0.06 sec)

mysql&gt; insert into t1 values (1,&#39;tom&#39;),(2,&#39;berry&#39;);
Query OK, 2 rows affected (0.00 sec)

mysql&gt; create table t2(
    -&gt; id int,
    -&gt; score int);
Query OK, 0 rows affected (0.02 sec)

mysql&gt; insert into t2 values (1,88),(2,99);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、如果没有连接表达式返回的是笛卡尔积</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from t1 cross join t2;   # 返回笛卡尔积
+------+-------+------+-------+
| id   | name  | id   | score |
+------+-------+------+-------+
|    1 | tom   |    1 |    88 |
|    2 | berry |    1 |    88 |
|    1 | tom   |    2 |    99 |
|    2 | berry |    2 |    99 |
+------+-------+------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、如果有连接表达式等价于内连接</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from t1 cross join t2 where t1.id=t2.id;
+------+-------+------+-------+
| id   | name  | id   | score |
+------+-------+------+-------+
|    1 | tom   |    1 |    88 |
|    2 | berry |    2 |    99 |
+------+-------+------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-自然连接【natural】" tabindex="-1"><a class="header-anchor" href="#_7-5-自然连接【natural】" aria-hidden="true">#</a> 7.5 自然连接【natural】</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>自动的判断连接条件，它是过同名字段来判断的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自然连接又分为：</p><ol><li>自然内连接 natural join . 自然左外连接 natural left join . 自然右外连接 natural right join</li></ol><p>例题：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 自然内连接
mysql&gt; select * from stuinfo natural join stumarks;
+--------+----------+--------+--------+---------+------------+---------+-------------+---------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | examNo  | writtenExam | labExam |
+--------+----------+--------+--------+---------+------------+---------+-------------+---------+
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           | s271811 |          80 |
  58 |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          | s271813 |          50 |
  90 |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           | s271815 |          65 |
     50 |
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           | s271816 |          77 |
    82 |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           | s271819 |          56 |
     48 |
+--------+----------+--------+--------+---------+------------+---------+-------------+---------+
5 rows in set (0.00 sec)

# 自然左外连接

mysql&gt; select * from stuinfo natural left join stumarks;
+--------+----------+--------+--------+---------+------------+---------+-------------+---------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | examNo  | writtenExam | labExam |
+--------+----------+--------+--------+---------+------------+---------+-------------+---------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           | s271816 |          77
    82 |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          | s271813 |          50 |
  90 |
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           | s271811 |          80 |
  58 |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           | s271815 |          65
     50 |
| s25305 | 诸葛丽丽         | 女      |     23 |       7 | 河南           | NULL    |        NULL
   NULL |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           | s271819 |          56
     48 |
| s25319 | 梅超风        | 女      |     23 |       5 | 河北          | NULL    |        NULL |
ULL |
+--------+----------+--------+--------+---------+------------+---------+-------------+---------+
7 rows in set (0.00 sec)

# 自然右外连接
mysql&gt; select * from stuinfo natural right join stumarks;
+--------+---------+-------------+---------+----------+--------+--------+---------+------------+
| stuNo  | examNo  | writtenExam | labExam | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+-------------+---------+----------+--------+--------+---------+------------+
| s25303 | s271811 |          80 |      58 | 李斯文        | 女      |     22 |       2 | 北京
     |
| s25302 | s271813 |          50 |      90 | 李文才        | 男       |     31 |       3 | 上海
     |
| s25304 | s271815 |          65 |      50 | 欧阳俊雄        | 男       |     28 |       4 | 天津
        |
| s25301 | s271816 |          77 |      82 | 张秋丽         | 男       |     18 |       1 | 北京
       |
| s25318 | s271819 |          56 |      48 | 争青小子        | 男       |     26 |       6 | 天津
        |
| s25320 | s271820 |          66 |      77 | NULL     | NULL   |   NULL |    NULL | NULL       |
+--------+---------+-------------+---------+----------+--------+--------+---------+------------+
6 rows in set (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自然连接结论：</p><ol><li><p>表连接通过同名的字段来连接的</p></li><li><p>如果没有同名的字段返回笛卡尔积</p></li><li><p>会对结果进行整理，整理的规则如下</p><p>a) 连接字段保留一个</p><p>b) 连接字段放在最前面</p><p>c) 左外连接左边在前，右外连接右表在前</p></li></ol><h3 id="_7-6-using" tabindex="-1"><a class="header-anchor" href="#_7-6-using" aria-hidden="true">#</a> 7.6 using()</h3><ol><li>用来指定连接字段。</li><li>using()也会对连接字段进行整理，整理方式和自然连接是一样的。</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stuinfo inner join stumarks using(stuno);   # using指定字段
+--------+----------+--------+--------+---------+------------+---------+-------------+---------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | examNo  | writtenExam | labExam |
+--------+----------+--------+--------+---------+------------+---------+-------------+---------+
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           | s271811 |          80 |
  58 |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          | s271813 |          50 |
  90 |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           | s271815 |          65 |
     50 |
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           | s271816 |          77 |
    82 |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           | s271819 |          56 |
     48 |
+--------+----------+--------+--------+---------+------------+---------+-------------+---------+
5 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-子查询" tabindex="-1"><a class="header-anchor" href="#_8-子查询" aria-hidden="true">#</a> 8 子查询</h2><p>语法</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>语法：select 语句 where 条件 (select … from 表)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>外面的查询称为父查询，括号中的查询称为子查询</li><li>子查询为父查询提供查询条件</li></ol><h3 id="_8-1-例题" tabindex="-1"><a class="header-anchor" href="#_8-1-例题" aria-hidden="true">#</a> 8.1 例题</h3><p>1、查找笔试80分的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stuinfo where stuno=(select stuno from stumarks where writtenexam=80);
+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25303 | 李斯文       | 女      |     22 |       2 | 北京           |
+--------+---------+--------+--------+---------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、查找笔试最高分的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 方法一：
mysql&gt; select * from stuinfo where stuno=(select stuno from stumarks order by writtenexam desc limit
 1);
+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25303 | 李斯文       | 女      |     22 |       2 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)

# 方法二：
mysql&gt; select * from stuinfo where stuno=(select stuno from stumarks where writtenexam=(select max(writtenexam) from stumarks));
+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25303 | 李斯文       | 女      |     22 |       2 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>脚下留心：上面的例题，子查询只能返回一个值。如果子查询返回多个值就不能用“=”了,需要用 in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-2-in-not-in子查询" tabindex="-1"><a class="header-anchor" href="#_8-2-in-not-in子查询" aria-hidden="true">#</a> 8.2 in|not in子查询</h3><p>用于子查询的返回结果多个值。</p><p>1、查找笔试成绩及格的同学</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stuinfo where stuno in (select stuno from stumarks where writtenexam&gt;=60);
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           |
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           |
+--------+----------+--------+--------+---------+------------+
3 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、查询不及格的同学</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stuinfo where stuno  in (select stuno from stumarks where writtenexam&lt;=60);
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |
+--------+----------+--------+--------+---------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、查询没有通过的同学（不及格，缺考）</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stuinfo where stuno  not in (select stuno from stumarks where writtenexam&gt;=60);
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |
| s25305 | 诸葛丽丽         | 女      |     23 |       7 | 河南           |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |
| s25319 | 梅超风        | 女      |     23 |       5 | 河北          |
+--------+----------+--------+--------+---------+------------+
4 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-exists和not-exists" tabindex="-1"><a class="header-anchor" href="#_8-3-exists和not-exists" aria-hidden="true">#</a> 8.3 exists和not exists</h3><p>1、 如果有人笔试超过80分就显示所有的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stuinfo where exists (select * from stumarks where writtenexam&gt;=80);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、 如果没有人超过80分就显示所有的学生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from stuinfo where not exists (select * from stumarks where writtenexam&gt;=80);
Empty set (0.02 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-子查询分类" tabindex="-1"><a class="header-anchor" href="#_8-4-子查询分类" aria-hidden="true">#</a> 8.4 子查询分类</h3><p>1、标量子查询：子查询返回的结果就一个</p><p>2、列子查询：子查询返回的结果是一个列表</p><p>3、行子查询：子查询返回的结果是一行</p><p>例题：查询成绩最高的男生和女生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select stuname,stusex,ch from stu where (stusex,ch) in (select stusex,max(ch) from stu group by stusex);
+----------+--------+------+
| stuname  | stusex | ch   |
+----------+--------+------+
| 争青小子        | 男       |   86 |
| Tabm     | 女      |   88 |
+----------+--------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、表子查询：子查询返回的结果当成一个表</p><p>例题：查询成绩最高的男生和女生</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select stuname,stusex,ch from (select * from stu order by ch desc) as t group by stusex;
+----------+--------+------+
| stuname  | stusex | ch   |
+----------+--------+------+
| Tabm     | 女      |   88 |
| 争青小子        | 男       |   86 |
+----------+--------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>脚下留心：from后面是一个表，如果子查询的结果当成表来看，必须将子查询的结果取别名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-补充技术" tabindex="-1"><a class="header-anchor" href="#_9-补充技术" aria-hidden="true">#</a> 9 补充技术</h2><h3 id="_9-1-insert-select" tabindex="-1"><a class="header-anchor" href="#_9-1-insert-select" aria-hidden="true">#</a> 9.1 insert…select…</h3><p>选择一个表的数据插入到另外的表中。</p><h3 id="_9-2-on-duplicate-key-update" tabindex="-1"><a class="header-anchor" href="#_9-2-on-duplicate-key-update" aria-hidden="true">#</a> 9.2 on duplicate key update</h3><p>在插入数据的时候，如果插入的数据不满足主键约束或唯一约束则执行更新操作。</p>`,312),a=[d];function r(v,u){return s(),i("div",null,a)}const t=e(l,[["render",r],["__file","des-select.html.vue"]]);export{t as default};
