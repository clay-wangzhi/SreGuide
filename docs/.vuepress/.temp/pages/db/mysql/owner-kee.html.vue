<template><div><h1 id="_9-主主和keepalived" tabindex="-1"><a class="header-anchor" href="#_9-主主和keepalived" aria-hidden="true">#</a> 9 主主和keepalived</h1>
<h2 id="keepalived简介" tabindex="-1"><a class="header-anchor" href="#keepalived简介" aria-hidden="true">#</a> keepalived简介</h2>
<p>keepalived是vrrp协议的实现，原生设计目的是为了高可用ipvs服务，keepalived能够配置文件中的定义生成ipvs规则，并能够对各RS的健康状态进行检测；通过共用的虚拟IP地址对外提供服务；每个热备组内同一时刻只有一台主服务器提供服务，其他服务器处于冗余状态，若当前在线的服务器宕机，其虚拟IP地址将会被其他服务器接替（优先级决定接替顺序），实现高可用为后端主机提供服务。</p>
<p>VRRP全称Virtual Router Redundancy Protocol，即<a href="http://en.wikipedia.org/wiki/VRRP" target="_blank" rel="noopener noreferrer">虚拟路由冗余协议<ExternalLinkIcon/></a>。</p>
<p>虚拟路由冗余协议，可以认为是实现路由器高可用的协议，即将N台提供相同功能的路由器组成一个路由器组，这个组里面有一个master和多个backup，master上面有一个对外提供服务的vip（该路由器所在局域网内其他机器的默认路由为该vip），master会发组播，当backup收不到vrrp包时就认为master宕掉了，这时就需要根据<a href="http://tools.ietf.org/html/rfc5798#section-5.1" target="_blank" rel="noopener noreferrer">VRRP的优先级<ExternalLinkIcon/></a>来<a href="http://en.wikipedia.org/wiki/Virtual_Router_Redundancy_Protocol#Elections_of_master_routers" target="_blank" rel="noopener noreferrer">选举一个backup当master<ExternalLinkIcon/></a>。这样的话就可以保证路由器的高可用了。</p>
<h2 id="keepalived组件" tabindex="-1"><a class="header-anchor" href="#keepalived组件" aria-hidden="true">#</a> keepalived组件</h2>
<p>Keepalived组件介绍</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/wKiom1gVgVqxP0nVAADi2pjRuog301.png" alt="wKiom1gVgVqxP0nVAADi2pjRuog301.png"></p>
<ul>
<li>
<p>core：keepalived核心组件，主进程的启动和维护，全局配置等。</p>
</li>
<li>
<p>vrrp stack：keepalived是基于vrrp协议实现高可用vps服务，vrrp则为相关子进程为其提供服务</p>
</li>
<li>
<p>check：检测keepalived的健康状态相关进程</p>
</li>
<li>
<p>system call:系统调用</p>
<p>watch dog:监控check和vrrp进程的看管者，check负责检测器子进程的健康状态，当其检测到master上的服务不可用时则通告vrrp将其转移至backup服务器上。</p>
</li>
</ul>
<h2 id="mysql主主搭建" tabindex="-1"><a class="header-anchor" href="#mysql主主搭建" aria-hidden="true">#</a> mysql主主搭建</h2>
<ol>
<li>
<p>下载二进制bin文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://clay-wangzhi.com/mysql-download/mysql-boost-5.7.20-bin.tar.gz
<span class="token function">mv</span> mysql-boost-5.7.20-bin.tar.gz /opt/software/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>下载roles</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">-b</span> dev-clay https://github.com/clay-wangzhi/Ansible-roles.git
<span class="token function">cp</span> <span class="token parameter variable">-r</span> Ansible-roles/mysql57/ /etc/ansible/roles/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编写playbook执行</p>
<p><code v-pre>cat /etc/ansible/playbooks/mysql_replication_ga.yml</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 172.xx.xx.47
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> <span class="token string">'mysql57'</span>
    <span class="token key atrule">mysql57_port</span><span class="token punctuation">:</span> <span class="token string">'3306'</span>
    <span class="token key atrule">mysql57_replication_role</span><span class="token punctuation">:</span> <span class="token string">'master'</span>
    <span class="token key atrule">mysql57_replication_user</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">'rep_47'</span><span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">'123456'</span><span class="token punctuation">}</span>

<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 172.xx.xx.48
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> <span class="token string">'mysql57'</span>
    <span class="token key atrule">mysql57_port</span><span class="token punctuation">:</span> <span class="token string">'3306'</span>
    <span class="token key atrule">mysql57_replication_role</span><span class="token punctuation">:</span> <span class="token string">'master'</span>
    <span class="token key atrule">mysql57_replication_user</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">'rep_48'</span><span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">'123456'</span><span class="token punctuation">}</span>


<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 172.xx.xx.47
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> <span class="token string">'mysql57'</span>
    <span class="token key atrule">mysql57_port</span><span class="token punctuation">:</span> <span class="token string">'3306'</span>
    <span class="token key atrule">mysql57_auto_increment_offset</span><span class="token punctuation">:</span> <span class="token string">'1'</span>
    <span class="token key atrule">mysql57_auto_increment_increment</span><span class="token punctuation">:</span> <span class="token string">'2'</span>
    <span class="token key atrule">mysql57_replication_role</span><span class="token punctuation">:</span> <span class="token string">'slave'</span> <span class="token comment"># 指定为slave角色</span>
    <span class="token key atrule">mysql57_replication_master</span><span class="token punctuation">:</span> <span class="token string">'172.xx.xx.48'</span>
    <span class="token key atrule">mysql57_replication_master_port</span><span class="token punctuation">:</span> <span class="token string">'3306'</span>
    <span class="token key atrule">mysql57_replication_user</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">'rep_48'</span><span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">'123456'</span><span class="token punctuation">}</span>

<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 172.xx.xx.48
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> <span class="token string">'mysql57'</span>
    <span class="token key atrule">mysql57_port</span><span class="token punctuation">:</span> <span class="token string">'3306'</span>
    <span class="token key atrule">mysql57_auto_increment_offset</span><span class="token punctuation">:</span> <span class="token string">'2'</span>
    <span class="token key atrule">mysql57_auto_increment_increment</span><span class="token punctuation">:</span> <span class="token string">'2'</span>
    <span class="token key atrule">mysql57_replication_role</span><span class="token punctuation">:</span> <span class="token string">'slave'</span> <span class="token comment"># 指定为slave角色</span>
    <span class="token key atrule">mysql57_replication_master</span><span class="token punctuation">:</span> <span class="token string">'172.xx.xx.47'</span>
    <span class="token key atrule">mysql57_replication_master_port</span><span class="token punctuation">:</span> <span class="token string">'3306'</span>
    <span class="token key atrule">mysql57_replication_user</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">'rep_47'</span><span class="token punctuation">,</span> <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">'123456'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行playbook</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ansible-playbook mysql_replication_ga.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
</div></template>


