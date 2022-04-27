<template><h1 id="_4-mysql监控模块" tabindex="-1"><a class="header-anchor" href="#_4-mysql监控模块" aria-hidden="true">#</a> 4 MySQL监控模块</h1>
<blockquote>
<p>zabbix旧版本可以用，新版本建议用官方模板</p>
</blockquote>
<h2 id="template-db-mysql简介" tabindex="-1"><a class="header-anchor" href="#template-db-mysql简介" aria-hidden="true">#</a> Template DB MySQL简介</h2>
<h3 id="应用集" tabindex="-1"><a class="header-anchor" href="#应用集" aria-hidden="true">#</a> 应用集</h3>
<p>MySQL</p>
<h3 id="监控项" tabindex="-1"><a class="header-anchor" href="#监控项" aria-hidden="true">#</a> 监控项</h3>
<ol>
<li>MySQL begin operations per second（MySQL每秒开始操作）</li>
<li>MySQL bytes received per second（从所有客户端接收的字节数）</li>
<li>MySQL bytes sent per second（发送到所有客户端的字节数）</li>
<li>MySQL commit operations per second（MySQL每秒提交操作）</li>
<li>MySQL delete operations per second（MySQL每秒删除操作）</li>
<li>MySQL insert operations per second（MySQL每秒插入操作）</li>
<li>MySQL queries per second（MySQL每秒查询）</li>
<li>MySQL rollback operations per second（MySQL每秒回滚操作）</li>
<li>MySQL select operations per second（MySQL每秒选择操作）</li>
<li>MySQL slow queries（MySQL慢查询）</li>
<li>MySQL status（MySQL的存活状态）</li>
<li>MySQL update operations per second（MySQL每秒更新操作）</li>
<li>MySQL uptime（MySQL正常运行时间）</li>
<li>MySQL version（MySQL的版本信息）</li>
</ol>
<h3 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器" aria-hidden="true">#</a> 触发器</h3>
<p>MySQL is down</p>
<p>表达式：{Template DB MySQL:mysql.ping.last(0)}=0</p>
<h3 id="图形" tabindex="-1"><a class="header-anchor" href="#图形" aria-hidden="true">#</a> 图形</h3>
<ol>
<li>MySQL operations（MySQL业务操作）</li>
</ol>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysql图形1.png" alt="" loading="lazy"></p>
<ol start="2">
<li>MySQL bandwidth（MySQL带宽）</li>
</ol>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysql图形2.png" alt="" loading="lazy"></p>
<h3 id="聚合图形" tabindex="-1"><a class="header-anchor" href="#聚合图形" aria-hidden="true">#</a> 聚合图形</h3>
<p>MySQL performance（MySQL性能）</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysql图形3.png" alt="" loading="lazy"></p>
<h2 id="实现mysql模板监控" tabindex="-1"><a class="header-anchor" href="#实现mysql模板监控" aria-hidden="true">#</a> 实现MySQL模板监控</h2>
<h3 id="mysql监控授权" tabindex="-1"><a class="header-anchor" href="#mysql监控授权" aria-hidden="true">#</a> MySQL监控授权</h3>
<p>配置mysql的客户端，创建一个用户来获取mysql的相关数据，使用mysql账号密码登陆数据库</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> grant all on *.* to monitor@'localhost' identified by 'W***';
> flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="修改zabbix-agent配置文件" tabindex="-1"><a class="header-anchor" href="#修改zabbix-agent配置文件" aria-hidden="true">#</a> 修改zabbix_agent配置文件</h3>
<ol>
<li>设置完帐户之后在被监控端新建/etc/zabbix/etc/.my.cnf以提供Zabbix Agent访问数据库，内容类似如下</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#vim /etc/zabbix/etc/.my.cnf
[mysql]
host=localhost
user=monitor
password=W***
socket=/var/lib/mysql/mysql.sock
[mysqladmin]
host=localhost
user=monitor
password=W***
socket=/var/lib/mysql/mysql.sock
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul>
<li>注意：agent安装路径/etc/zabbix/,etc目录若不存在，需要自已创建，创建.my.cnf,为隐藏文件。W***为mysql的密码。</li>
</ul>
<ol start="2">
<li>修改模板中的mysql路径/etc/zabbix/zabbix_agentd.d，将以下三个目录补全</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#vim userparameter_mysql.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysql配置.png" alt="" loading="lazy"></p>
<h3 id="重启agent服务" tabindex="-1"><a class="header-anchor" href="#重启agent服务" aria-hidden="true">#</a> 重启agent服务</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service zabbix_agentd restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="zabbix-web设置" tabindex="-1"><a class="header-anchor" href="#zabbix-web设置" aria-hidden="true">#</a> zabbix-web设置</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/mysqlweb.png" alt="" loading="lazy"></p>
<h2 id="修改模板添加主从和连接数监控" tabindex="-1"><a class="header-anchor" href="#修改模板添加主从和连接数监控" aria-hidden="true">#</a> 修改模板添加主从和连接数监控</h2>
<h3 id="主从状态监控" tabindex="-1"><a class="header-anchor" href="#主从状态监控" aria-hidden="true">#</a> 主从状态监控</h3>
<ol>
<li>在<code>/opt/monitor</code>目录下添加主从监控脚本</li>
</ol>
<p>vim mysql_slave.sh</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/usr/bin/env bash
user='monitor'
passwd=
# Seconds_Behind_Master 阈值
tho=1000

# rs为Yes成功数,sbr为同步时间差
rs=$(mysql -u"$user" -p"$passwd" -e "show slave status\G;" 2>/dev/null | grep Running | awk '{print $2}' | grep -c Yes)
sbr=$(mysql -u"$user" -p"$passwd" -e "show slave status\G;" 2>/dev/null | grep Seconds_Behind_Master | awk -F':' '{print $2}')

# 判断主从状态是否正常,0代表正常,1代表异常
if [ "$rs" -eq 2 -a "$sbr" -le "$tho" ];then
    echo 0
else
    echo $(date +"%Y-%m-%d %H:%M:%S") "Yes成功数为$rs" "延时时间为$sbr" >> /var/log/zabbix/mysql_slave.log
    echo 1
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="2">
<li>在zabbix_agentd.conf中添加自定义key</li>
</ol>
<p>在<code>etc/zabbix/zabbix_agentd.conf</code>中新加</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>UserParameter=mysql.replication,/opt/monitor/mysql_slave.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>重启agent服务</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service zabbix_agentd restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4">
<li>在mysql模板中新增监控项，新增触发器，返回值不是0时，报警。</li>
</ol>
<ul>
<li>注意：当监控非主从mysql时，把此项监控禁用掉</li>
</ul>
<h2 id="连接数监控" tabindex="-1"><a class="header-anchor" href="#连接数监控" aria-hidden="true">#</a> 连接数监控</h2>
<ol>
<li>在zabbix_agentd.conf中添加自定义key</li>
</ol>
<p>在<code>etc/zabbix/zabbix_agentd.conf</code>中新加</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>UserParameter=mysql.linknum, ss -an | grep 3306 | grep -c ESTAB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>重启agent服务</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service zabbix_agentd restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>添加监控项和触发器</li>
</ol>
</template>
