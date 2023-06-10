import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,e as i}from"./app-1a5afd71.js";const s={},l=i(`<h1 id="_1-mysql基本操作" tabindex="-1"><a class="header-anchor" href="#_1-mysql基本操作" aria-hidden="true">#</a> 1 MySQL基本操作</h1><h2 id="_1-数据库相关概念" tabindex="-1"><a class="header-anchor" href="#_1-数据库相关概念" aria-hidden="true">#</a> 1 数据库相关概念</h2><h3 id="_1-1-什么是数据" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是数据" aria-hidden="true">#</a> 1.1 什么是数据？</h3><p>​ 数据（data）是事实或观察的结果，是对客观事物的逻辑归纳，是用于表示客观事物的未经加工的原始素材。数据是信息的表现形式和载体，可以是符号、文字、数字、语音、图像、视频等。数据和信息是不可分离的，数据是信息的表达，信息是数据的内涵。数据本身没有意义，数据只有对实体行为产生影响才成为信息。数据可以是连续的值，比如声音、图像，称为模拟数据。也可以是离散的，如符号、文字，称为数字数据。在计算机系统中，数据以二进制信息单元0,1的形式表示。</p><h3 id="_1-2-什么是数据库" tabindex="-1"><a class="header-anchor" href="#_1-2-什么是数据库" aria-hidden="true">#</a> 1.2 什么是数据库？</h3><p>​ 数据库（Database）：是按照数据结构来组织、存储和管理数据的仓库。</p><h3 id="_1-3-什么是数据库管理系统-dbms" tabindex="-1"><a class="header-anchor" href="#_1-3-什么是数据库管理系统-dbms" aria-hidden="true">#</a> 1.3 什么是数据库管理系统（DBMS）？</h3><p>​ 数据库管理系统：是由数据库及其管理软件组成的系统，它支持如下操作：</p><p>​ 1）提供数据持久性的存储，备份，恢复</p><p>​ 2）支持事务管理</p><p>​ 3）支持数据操作的并发</p><p>​ 4）支持独立的管理语言（sql语句）</p><h2 id="_2-数据库的发展史" tabindex="-1"><a class="header-anchor" href="#_2-数据库的发展史" aria-hidden="true">#</a> 2 数据库的发展史</h2><h3 id="_2-1-萌芽阶段-文件系统" tabindex="-1"><a class="header-anchor" href="#_2-1-萌芽阶段-文件系统" aria-hidden="true">#</a> 2.1 萌芽阶段：文件系统</h3><p>最初始的数据库是用磁盘来存储数据的。文件就是最早的数据库。</p><h3 id="_2-2-第一代数据库-层次模型、网状模型" tabindex="-1"><a class="header-anchor" href="#_2-2-第一代数据库-层次模型、网状模型" aria-hidden="true">#</a> 2.2 第一代数据库：层次模型、网状模型</h3><h4 id="_2-2-1-层次模型" tabindex="-1"><a class="header-anchor" href="#_2-2-1-层次模型" aria-hidden="true">#</a> 2.2.1 层次模型</h4><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536628336467.png" alt="1536628336467"></p><p>缺点：</p><ol><li><p>查找不同类的数据效率低了（导航的结构的缺点）</p></li><li><p>数据不完整（不能区分到底是一个李白还是两个李白）</p></li></ol><h4 id="_2-2-2-网状模型" tabindex="-1"><a class="header-anchor" href="#_2-2-2-网状模型" aria-hidden="true">#</a> 2.2.2 网状模型</h4><p>网状模型解决了层次数据的数据不完整的问题，但是没有解决层次模型的导航问题。</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536628485678.png" alt="1536628485678"></p><h3 id="_2-3-第二代数据库-关系型数据库" tabindex="-1"><a class="header-anchor" href="#_2-3-第二代数据库-关系型数据库" aria-hidden="true">#</a> 2.3 第二代数据库：关系型数据库</h3><p>特点：</p><ol><li><p>每个表都是独立的</p></li><li><p>表与表之间通过公共字段来建立关系</p></li></ol><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536628687644.png" alt="1536628687644"></p><p>优点：解决了导航问题，并且数据完整性得到解决</p><p>缺点：多表查询效率低了</p><p>提示：我们现在用的主流的数据库都是关系模型的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多学一招：NoSQL（非关系型数据库）解决关系型数据库多表查询效率的问题，常见的非关系型数据库有：Redis、mongodb。数据库中存储格式是键值对。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-数据库的分类" tabindex="-1"><a class="header-anchor" href="#_3-数据库的分类" aria-hidden="true">#</a> 3 数据库的分类</h2><h3 id="_3-1-关系型数据库" tabindex="-1"><a class="header-anchor" href="#_3-1-关系型数据库" aria-hidden="true">#</a> 3.1 关系型数据库</h3><p>​ 关系数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。现实世界中的各种实体以及实体之间的各种联系均用关系模型来表示。关系模型是由埃德加·科德于1970年首先提出的，并配合“科德十二定律”。现如今虽然对模型有一些批评意见，但它还是数据存储的传统标准。标准数据查询语言SQL就是一种基于关系数据库的语言，这种语言执行对关系数据库中数据的检索和操作。关系模型由关系数据结构、关系操作集合、关系完整性约束三部分组成。</p><h4 id="_3-1-2-常见的关系型数据库" tabindex="-1"><a class="header-anchor" href="#_3-1-2-常见的关系型数据库" aria-hidden="true">#</a> 3.1.2 常见的关系型数据库</h4><table><thead><tr><th>关系型数据库</th><th>开发公司</th><th>使用语言</th></tr></thead><tbody><tr><td>SQL Server</td><td>微软公司</td><td>T-SQL</td></tr><tr><td>Oracle</td><td>甲骨文公司</td><td>PL/SQL</td></tr><tr><td>MySQL</td><td>MySQL AB 公司开发——甲骨文公司收购</td><td>MySQL</td></tr></tbody></table><h3 id="_3-2-非关系型数据库" tabindex="-1"><a class="header-anchor" href="#_3-2-非关系型数据库" aria-hidden="true">#</a> 3.2 非关系型数据库</h3><h2 id="_4-mysql的安装" tabindex="-1"><a class="header-anchor" href="#_4-mysql的安装" aria-hidden="true">#</a> 4 Mysql的安装</h2><h2 id="_5-连接服务器" tabindex="-1"><a class="header-anchor" href="#_5-连接服务器" aria-hidden="true">#</a> 5 连接服务器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-h</span> 主机（host）
<span class="token parameter variable">-u</span> 用户名（username）
<span class="token parameter variable">-p</span> 密码（password）
<span class="token parameter variable">-P</span> 端口（port）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536633424017.png" alt="1536633424017"></p><hr><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536633591923.png" alt="1536633591923"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多学一招：如果MySQL服务器在本地，IP地址可以省略；如果MySQL服务器用的是3306端口，-P也是可以省略 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-sql介绍" tabindex="-1"><a class="header-anchor" href="#_6-sql介绍" aria-hidden="true">#</a> 6 SQL介绍</h2><h3 id="_6-1-sql是什么" tabindex="-1"><a class="header-anchor" href="#_6-1-sql是什么" aria-hidden="true">#</a> 6.1 SQL是什么</h3><p>Structured Query Language（结构化查询语言），是用来操作关系型数据库的一门语言。这是一个关系型数据库的通用操作语言，也成为标准SQL，也叫SQL-92。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>多学一招：数据库的生产厂商为了占有市场份额，都会在标准SQL的基础上扩展一些自己的东西以吸引用户。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**思考：**已知标准SQL可以在所有的关系型数据库上运行，在Oracle上编写的PL/SQL能否在MySQL上运行？</p><p>答：不能，只能运行标准SQL 。</p><h3 id="_6-2-sql的分类" tabindex="-1"><a class="header-anchor" href="#_6-2-sql的分类" aria-hidden="true">#</a> 6.2 SQL的分类</h3><ul><li>DDL（data definition language）数据库定义语言CREATE、ALTER、DROP、SHOW</li><li>DML（data manipulation language）数据操纵语言SELECT、UPDATE、INSERT、DELETE</li><li>DCL（data control language）数据库控制语言,是用来设置或更改数据库用户或角色权限的语句GRANT,REVOKE,COMMIT,ROLLBACK</li><li>DQL（data query language）：数据查询语言 SELECT</li></ul><h3 id="_6-3-注意事项" tabindex="-1"><a class="header-anchor" href="#_6-3-注意事项" aria-hidden="true">#</a> 6.3 注意事项</h3><ul><li><p>每条SQL语句结束时要以<code>;</code>做为结束符(除了use命令)</p></li><li><p>SQL语句的关键字不区分大小写(除了库名字和表名字)</p></li><li><p>在查询数据库信息或者表信息时,可以以\\G做为结束符,表示以文本模式输出</p></li><li><p>当你不需要一条语句输出的结果以\\c结束,不可以使用ctrl+c,否则登出mysql.</p></li><li><p>我们可以在命令行执行sql语句,要通过mysql -e参数</p><p><code>mysql -e &quot;show databases \\G</code>&quot;显示到shell上</p></li><li><p>如果需要获取SQL语句的帮助可以用help命令<code>help create</code> 如果需要进一步获取帮助,可以继续使用help命令<code>help create database</code></p></li></ul><h2 id="_7-数据库操作" tabindex="-1"><a class="header-anchor" href="#_7-数据库操作" aria-hidden="true">#</a> 7 数据库操作</h2><h3 id="_7-1-增" tabindex="-1"><a class="header-anchor" href="#_7-1-增" aria-hidden="true">#</a> 7.1 增</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create database [if not exists] \`数据库名\` [charset=utf8];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-2-删" tabindex="-1"><a class="header-anchor" href="#_7-2-删" aria-hidden="true">#</a> 7.2 删</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop database [if exists] 数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-3-改" tabindex="-1"><a class="header-anchor" href="#_7-3-改" aria-hidden="true">#</a> 7.3 改</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter database 数据库名 charset=字符编码;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-4-查" tabindex="-1"><a class="header-anchor" href="#_7-4-查" aria-hidden="true">#</a> 7.4 查</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show databases;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装MySQL后，MySQL自带了4个数据库</p><ol><li>information_schema：存储了MySQL服务器管理数据库的信息。</li><li>performance_schema：MySQL5.5新增的表，用来保存数据库服务器性能的参数</li><li>mysql：MySQL系统数据库，保存的登录用户名，密码，以及每个用户的权限等等</li><li>test：给用户学习和测试的数据库。</li></ol><p>显示创建数据库的SQL语句</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show create database 数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-5-选择数据库" tabindex="-1"><a class="header-anchor" href="#_7-5-选择数据库" aria-hidden="true">#</a> 7.5 选择数据库</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>use 数据库名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-表操作" tabindex="-1"><a class="header-anchor" href="#_8-表操作" aria-hidden="true">#</a> 8 表操作</h2><h3 id="_8-1-增" tabindex="-1"><a class="header-anchor" href="#_8-1-增" aria-hidden="true">#</a> 8.1 增</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table [if not exists] 表名（字段名 数据类型 [null|not null] [auto_increment] [primary key] [comment], 字段名 数据类型 [default]...）engine=存储引擎;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>单词</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>null | not null   	空|非空
default	          	默认值
auto_increment    	自动增长
primary key       	主键
comment           	备注
engine           	引擎   
innodb  myisam  memory  引擎是决定数据存储的方式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-删" tabindex="-1"><a class="header-anchor" href="#_8-2-删" aria-hidden="true">#</a> 8.2 删</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop table [if exists] 表1,表2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-3-改" tabindex="-1"><a class="header-anchor" href="#_8-3-改" aria-hidden="true">#</a> 8.3 改</h3><h4 id="_8-3-1-修改表名" tabindex="-1"><a class="header-anchor" href="#_8-3-1-修改表名" aria-hidden="true">#</a> 8.3.1 修改表名</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter table aa rename to bb;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-3-2-添加字段" tabindex="-1"><a class="header-anchor" href="#_8-3-2-添加字段" aria-hidden="true">#</a> 8.3.2 添加字段</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter table aa add age int;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在第一个位置上添加字段</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter table aa add email varchar(30) first;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在指定的字段后添加字段</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter table aa add age int(10) after name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-3-3-删除字段" tabindex="-1"><a class="header-anchor" href="#_8-3-3-删除字段" aria-hidden="true">#</a> 8.3.3 删除字段</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter table aa drop email;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-3-4-修改字段名和类型" tabindex="-1"><a class="header-anchor" href="#_8-3-4-修改字段名和类型" aria-hidden="true">#</a> 8.3.4 修改字段名和类型</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter table aa change sex xingbie int;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-3-5-修改字段类型" tabindex="-1"><a class="header-anchor" href="#_8-3-5-修改字段类型" aria-hidden="true">#</a> 8.3.5 修改字段类型</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter table aa modify xingbie varchar(2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-3-6-修改引擎" tabindex="-1"><a class="header-anchor" href="#_8-3-6-修改引擎" aria-hidden="true">#</a> 8.3.6 修改引擎</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter table aa engine=myisam;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-4-查" tabindex="-1"><a class="header-anchor" href="#_8-4-查" aria-hidden="true">#</a> 8.4 查</h3><h4 id="_8-4-1-显示所有表" tabindex="-1"><a class="header-anchor" href="#_8-4-1-显示所有表" aria-hidden="true">#</a> 8.4.1 显示所有表</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show tables;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-4-2-显示创建表的语句" tabindex="-1"><a class="header-anchor" href="#_8-4-2-显示创建表的语句" aria-hidden="true">#</a> 8.4.2 显示创建表的语句</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show create table 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-4-3-查看表结构" tabindex="-1"><a class="header-anchor" href="#_8-4-3-查看表结构" aria-hidden="true">#</a> 8.4.3 查看表结构</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>desc 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-5-复制表" tabindex="-1"><a class="header-anchor" href="#_8-5-复制表" aria-hidden="true">#</a> 8.5 复制表</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table 新表 select 字段 from 旧表;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-数据操作" tabindex="-1"><a class="header-anchor" href="#_9-数据操作" aria-hidden="true">#</a> 9 数据操作</h2><h3 id="_9-1-增" tabindex="-1"><a class="header-anchor" href="#_9-1-增" aria-hidden="true">#</a> 9.1 增</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>insert into 表名 (字段名，字段名，...) values (值1，值2，...);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-2-删" tabindex="-1"><a class="header-anchor" href="#_9-2-删" aria-hidden="true">#</a> 9.2 删</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>delete from 表名 [where 条件];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除表中所有记录</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>delete from aa;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-3-改" tabindex="-1"><a class="header-anchor" href="#_9-3-改" aria-hidden="true">#</a> 9.3 改</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>update 表名 set 字段=值 [where 条件];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-4-查" tabindex="-1"><a class="header-anchor" href="#_9-4-查" aria-hidden="true">#</a> 9.4 查</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select 列名 from 表;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-5-清空表数据" tabindex="-1"><a class="header-anchor" href="#_9-5-清空表数据" aria-hidden="true">#</a> 9.5 清空表数据</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>truncate table 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-数据表的文件介绍" tabindex="-1"><a class="header-anchor" href="#_10-数据表的文件介绍" aria-hidden="true">#</a> 10 数据表的文件介绍</h2><p>一个数据库对应一个文件夹</p><p>一个表对应一个或多个文件</p><p>引擎是myisam，一个表对应三个文件</p><ol><li>xx.frm 表结构</li><li>xx.MYD 数据</li><li>xx.MYI index信息</li></ol><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536654269605.png" alt="1536654269605"></p><p>引擎是innodb,一个表对应一个表结构文件</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1536654519700.png" alt="1536654519700"></p><p>go3.frm 表结构</p><p>所有的innodb引擎的数据统一的存放在data\\ibdata1文件中。如果数据量很大，MySQL会自动的创建ibdata2，ibdata3，…，目的就是为了便于管理。</p><p>引擎是memory，数据存储在内存中，重启服务数据丢失，但是读取速度非常快</p><h2 id="_11-字符集" tabindex="-1"><a class="header-anchor" href="#_11-字符集" aria-hidden="true">#</a> 11 字符集</h2><p>查看当前设置的字符编码集</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show variables like &#39;character_set_%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>客户端编码、character_set_client、character_set_results三个编码的值一致即可操作中文。</p><h2 id="_12-思维导图" tabindex="-1"><a class="header-anchor" href="#_12-思维导图" aria-hidden="true">#</a> 12 思维导图</h2><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/xmind.png" alt=""></p>`,132),n=[l];function r(t,c){return a(),d("div",null,n)}const u=e(s,[["render",r],["__file","index.html.vue"]]);export{u as default};
