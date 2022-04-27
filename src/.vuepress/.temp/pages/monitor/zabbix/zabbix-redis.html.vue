<template><h1 id="_5-redis监控模块" tabindex="-1"><a class="header-anchor" href="#_5-redis监控模块" aria-hidden="true">#</a> 5 Redis监控模块</h1>
<blockquote>
<p>zabbix旧版本可以用，新版本建议用官方模板</p>
</blockquote>
<h2 id="模板导入" tabindex="-1"><a class="header-anchor" href="#模板导入" aria-hidden="true">#</a> 模板导入</h2>
<p>打开“配置”--&gt;“模板”--&gt;&quot;导入&quot;</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/redis_daoru.png" alt="" loading="lazy"></p>
<p>导入<code>zax_redis</code>文件夹下的<code>redis_templates_for_zbx_3.4.xml</code>文件</p>
<h2 id="配置文件导入" tabindex="-1"><a class="header-anchor" href="#配置文件导入" aria-hidden="true">#</a> 配置文件导入</h2>
<p>将<code>zax_redis</code>文件夹下的<code>userparameter_redis.conf</code>文件上传到redis服务器的<code>/etc/zabbix/zabbix_agentd.d</code>文件夹下，并根据实际情况修改<code>$HostIP</code>和<code>$Pass</code>。</p>
<h2 id="增加ss命令权限" tabindex="-1"><a class="header-anchor" href="#增加ss命令权限" aria-hidden="true">#</a> 增加ss命令权限</h2>
<p>因为zabbix-server端不是通过root用户进行获取数据，所以给ss命令提权</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chmod +s /usr/sbin/ss
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="重启zabbix客户端" tabindex="-1"><a class="header-anchor" href="#重启zabbix客户端" aria-hidden="true">#</a> 重启zabbix客户端</h2>
<p>修改完成后，重新启动zabbix客户端</p>
<p>centos7下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart zabbix-agent.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
