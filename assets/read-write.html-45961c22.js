import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as o,e as r}from"./app-6b705441.js";const n={},a=r(`<h1 id="_10-读写分离和amoeba" tabindex="-1"><a class="header-anchor" href="#_10-读写分离和amoeba" aria-hidden="true">#</a> 10 读写分离和Amoeba</h1><p>一、什么是 amoeba？</p><p>Amoeba(变形虫)项目，专注 分布式数据库 proxy 开发。座落与 Client、DB Server(s)之间。对客户端透明。具有负载均衡、高可用性、sql 过滤、读写分离、可路由相关的 query 到目标数据库、可并发请求多台数据库合并结果。</p><p>主要解决：</p><p>• 降低 数据切分带来的复杂多数据库结构</p><p>• 提供切分规则并降低 数据切分规则 给应用带来的影响</p><p>• 降低 db 与客户端的连接数</p><p>• 读写分离 二、为什么要用 Amoeba</p><p>目前要实现 mysql 的主从读写分离，主要有以下几种方案：</p><p>1、 通过程序实现，网上很多现成的代码，比较复杂，如果添加从服务器要更改多台服务器的代码。</p><p>2、 通过 mysql-proxy 来实现，由于 mysql-proxy 的主从读写分离是通过 lua 脚本来实现，目前 lua 的脚本的开发跟不上节奏，而写没有完美的现成的脚本，因此导致用于生产环境的话风险比较大，据网上很多人说 mysql-proxy 的性能不高。</p><p>3、 自己开发接口实现，这种方案门槛高，开发成本高，不是一般的小公司能承担得起。</p><p>4、 利用阿里巴巴的开源项目 Amoeba 来实现，具有负载均衡、高可用性、sql 过滤、读写分离、可路由相关的 query 到目标数据库，并且安装配置非常简单。</p><p>三、amoeba 安装</p><p>1、首先安装 jdk，直接使用 rpm 包安装即可 2、下载 amoeba 对应的版本https://sourceforge.net/projects/amoeba/，直接解压即可 3、配置 amoeba 的配置文件 dbServers.xml</p><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;gbk&quot;?&gt;
&lt;!DOCTYPE amoeba:dbServers SYSTEM &quot;dbserver.dtd&quot;&gt;
&lt;amoeba:dbServers xmlns:amoeba=&quot;http://amoeba.meidusa.com/&quot;&gt;
&lt;!--Each dbServer needs to be configured into a Pool,If you need to configure multiple dbServer with load balancing that can be simplified by the following configu ration:			 add attribute with name virtual = &quot;true&quot; in dbServer, but the configuration does not allow the element with name factoryConfig	 such as &#39;multiPool&#39; dbServer--&gt;
&lt;dbServer name=&quot;abstractServer&quot; abstractive=&quot;true&quot;&gt;
	&lt;factoryConfig class=&quot;com.meidusa.amoeba.mysql.net.MysqlServerConnectionFactory&quot;&gt;
		&lt;property name=&quot;connectionManager&quot;&gt;\${defaultManager}&lt;/property&gt;
		&lt;property name=&quot;sendBufferSize&quot;&gt;64&lt;/property&gt;
		&lt;property name=&quot;receiveBufferSize&quot;&gt;128&lt;/property&gt;
			
		&lt;!-- mysql port --&gt;
		&lt;property name=&quot;port&quot;&gt;3306&lt;/property&gt;
		
		&lt;!-- mysql schema --&gt;
		&lt;property name=&quot;schema&quot;&gt;msb&lt;/property&gt;
		
		&lt;!-- mysql user --&gt;
		&lt;property name=&quot;user&quot;&gt;root&lt;/property&gt;
		
		&lt;property name=&quot;password&quot;&gt;123&lt;/property&gt;
	&lt;/factoryConfig&gt;

	&lt;poolConfig class=&quot;com.meidusa.toolkit.common.poolable.PoolableObjectPool&quot;&gt;
		&lt;property name=&quot;maxActive&quot;&gt;500&lt;/property&gt;
		&lt;property name=&quot;maxIdle&quot;&gt;500&lt;/property&gt;
		&lt;property name=&quot;minIdle&quot;&gt;1&lt;/property&gt;
		&lt;property name=&quot;minEvictableIdleTimeMillis&quot;&gt;600000&lt;/property&gt;
		&lt;property name=&quot;timeBetweenEvictionRunsMillis&quot;&gt;600000&lt;/property&gt;
		&lt;property name=&quot;testOnBorrow&quot;&gt;true&lt;/property&gt;
		&lt;property name=&quot;testOnReturn&quot;&gt;true&lt;/property&gt;
		&lt;property name=&quot;testWhileIdle&quot;&gt;true&lt;/property&gt;
	&lt;/poolConfig&gt;
&lt;/dbServer&gt;

&lt;dbServer name=&quot;writedb&quot;  parent=&quot;abstractServer&quot;&gt;
	&lt;factoryConfig&gt;
		&lt;!-- mysql ip --&gt;
		&lt;property name=&quot;ipAddress&quot;&gt;192.168.85.11&lt;/property&gt;
	&lt;/factoryConfig&gt;
&lt;/dbServer&gt;

&lt;dbServer name=&quot;slave&quot;  parent=&quot;abstractServer&quot;&gt;
	&lt;factoryConfig&gt;
		&lt;!-- mysql ip --&gt;
		&lt;property name=&quot;ipAddress&quot;&gt;192.168.85.12&lt;/property&gt;
	&lt;/factoryConfig&gt;
&lt;/dbServer&gt;
&lt;dbServer name=&quot;myslave&quot; virtual=&quot;true&quot;&gt;
	&lt;poolConfig class=&quot;com.meidusa.amoeba.server.MultipleServerPool&quot;&gt;
		&lt;!-- Load balancing strategy: 1=ROUNDROBIN , 2=WEIGHTBASED , 3=HA--&gt;
		&lt;property name=&quot;loadbalance&quot;&gt;1&lt;/property&gt;
		
		&lt;!-- Separated by commas,such as: server1,server2,server1 --&gt;
		&lt;property name=&quot;poolNames&quot;&gt;slave&lt;/property&gt;
	&lt;/poolConfig&gt;
&lt;/dbServer&gt;
&lt;/amoeba:dbServers&gt;
</code></pre><p>amoeba.xml</p><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;gbk&quot;?&gt;
&lt;!DOCTYPE amoeba:configuration SYSTEM &quot;amoeba.dtd&quot;&gt;
&lt;amoeba:configuration xmlns:amoeba=&quot;http://amoeba.meidusa.com/&quot;&gt;

&lt;proxy&gt;

	&lt;!-- service class must implements com.meidusa.amoeba.service.Service --&gt;
	&lt;service name=&quot;Amoeba for Mysql&quot; class=&quot;com.meidusa.amoeba.mysql.server.MySQLService&quot;&gt;
		&lt;!-- port --&gt;
		&lt;property name=&quot;port&quot;&gt;8066&lt;/property&gt;
		
		&lt;!-- bind ipAddress --&gt;
		&lt;!-- 
		&lt;property name=&quot;ipAddress&quot;&gt;127.0.0.1&lt;/property&gt;
		 --&gt;
		
		&lt;property name=&quot;connectionFactory&quot;&gt;
			&lt;bean class=&quot;com.meidusa.amoeba.mysql.net.MysqlClientConnectionFactory&quot;&gt;
				&lt;property name=&quot;sendBufferSize&quot;&gt;128&lt;/property&gt;
				&lt;property name=&quot;receiveBufferSize&quot;&gt;64&lt;/property&gt;
			&lt;/bean&gt;
		&lt;/property&gt;
		
		&lt;property name=&quot;authenticateProvider&quot;&gt;
			&lt;bean class=&quot;com.meidusa.amoeba.mysql.server.MysqlClientAuthenticator&quot;&gt;
				
				&lt;property name=&quot;user&quot;&gt;root&lt;/property&gt;
				
				&lt;property name=&quot;password&quot;&gt;123&lt;/property&gt;
				
				&lt;property name=&quot;filter&quot;&gt;
					&lt;bean class=&quot;com.meidusa.toolkit.net.authenticate.server.IPAccessController&quot;&gt;
						&lt;property name=&quot;ipFile&quot;&gt;\${amoeba.home}/conf/access_list.conf&lt;/property&gt;
					&lt;/bean&gt;
				&lt;/property&gt;
			&lt;/bean&gt;
		&lt;/property&gt;
		
	&lt;/service&gt;
	
	&lt;runtime class=&quot;com.meidusa.amoeba.mysql.context.MysqlRuntimeContext&quot;&gt;
		
		&lt;!-- proxy server client process thread size --&gt;
		&lt;property name=&quot;executeThreadSize&quot;&gt;128&lt;/property&gt;
		
		&lt;!-- per connection cache prepared statement size  --&gt;
		&lt;property name=&quot;statementCacheSize&quot;&gt;500&lt;/property&gt;
		
		&lt;!-- default charset --&gt;
		&lt;property name=&quot;serverCharset&quot;&gt;utf8&lt;/property&gt;
		
		&lt;!-- query timeout( default: 60 second , TimeUnit:second) --&gt;
		&lt;property name=&quot;queryTimeout&quot;&gt;60&lt;/property&gt;
	&lt;/runtime&gt;
	
&lt;/proxy&gt;

&lt;!-- 
	Each ConnectionManager will start as thread
	manager responsible for the Connection IO read , Death Detection
--&gt;
&lt;connectionManagerList&gt;
	&lt;connectionManager name=&quot;defaultManager&quot; class=&quot;com.meidusa.toolkit.net.MultiConnectionManagerWrapper&quot;&gt;
		&lt;property name=&quot;subManagerClassName&quot;&gt;com.meidusa.toolkit.net.AuthingableConnectionManager&lt;/property&gt;
	&lt;/connectionManager&gt;
&lt;/connectionManagerList&gt;

	&lt;!-- default using file loader --&gt;
&lt;dbServerLoader class=&quot;com.meidusa.amoeba.context.DBServerConfigFileLoader&quot;&gt;
	&lt;property name=&quot;configFile&quot;&gt;\${amoeba.home}/conf/dbServers.xml&lt;/property&gt;
&lt;/dbServerLoader&gt;

&lt;queryRouter class=&quot;com.meidusa.amoeba.mysql.parser.MysqlQueryRouter&quot;&gt;
	&lt;property name=&quot;ruleLoader&quot;&gt;
		&lt;bean class=&quot;com.meidusa.amoeba.route.TableRuleFileLoader&quot;&gt;
			&lt;property name=&quot;ruleFile&quot;&gt;\${amoeba.home}/conf/rule.xml&lt;/property&gt;
			&lt;property name=&quot;functionFile&quot;&gt;\${amoeba.home}/conf/ruleFunctionMap.xml&lt;/property&gt;
		&lt;/bean&gt;
	&lt;/property&gt;
	&lt;property name=&quot;sqlFunctionFile&quot;&gt;\${amoeba.home}/conf/functionMap.xml&lt;/property&gt;
	&lt;property name=&quot;LRUMapSize&quot;&gt;1500&lt;/property&gt;
	&lt;property name=&quot;defaultPool&quot;&gt;writedb&lt;/property&gt;
	
	&lt;property name=&quot;writePool&quot;&gt;writedb&lt;/property&gt;
	&lt;property name=&quot;readPool&quot;&gt;myslave&lt;/property&gt;
	&lt;property name=&quot;needParse&quot;&gt;true&lt;/property&gt;
&lt;/queryRouter&gt;
&lt;/amoeba:configuration&gt;
</code></pre><p>4、启动 amoeba</p><pre><code>/root/amoeba-mysql-3.0.5-RC/bin/launcher
</code></pre><p>四、测试 amoeba</p><pre><code>--测试的sql
--在安装amoeba的服务器上登录mysql
mysql -h192.168.85.13 -uroot -p123 -P8066
--分别在master、slave、amoeba上登录mysql
use msb
select * from user;
--在amoeba上插入数据
insert into user values(2,2);
--在master和slave上分别查看表中的数据
select * from user;
--将master上的mysql服务停止，继续插入数据会发现插入不成功，但是能够查询
--将master上的msyql服务开启，停止slave上的mysql，发现插入成功，但是不能够查询
</code></pre>`,22),l=[a];function p(u,m){return e(),o("div",null,l)}const q=t(n,[["render",p],["__file","read-write.html.vue"]]);export{q as default};
