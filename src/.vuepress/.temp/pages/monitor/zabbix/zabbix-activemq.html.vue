<template><h1 id="_8-activemq监控" tabindex="-1"><a class="header-anchor" href="#_8-activemq监控" aria-hidden="true">#</a> 8 activemq监控</h1>
<blockquote>
<p>zabbix旧版本可以用，新版本建议用官方模板</p>
</blockquote>
<h2 id="关闭被监控端的防火墙" tabindex="-1"><a class="header-anchor" href="#关闭被监控端的防火墙" aria-hidden="true">#</a> 关闭被监控端的防火墙</h2>
<p>activemq  防火墙的添加还是有问题，先把防火墙给关了，它好像是后续会再产生一个随机端口，进行数据的传输</p>
<h2 id="zabbix-proxy安装java-gateway" tabindex="-1"><a class="header-anchor" href="#zabbix-proxy安装java-gateway" aria-hidden="true">#</a> zabbix_proxy安装java_gateway，</h2>
<p>因为是基于JMX进行监控的</p>
<h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2>
<p>配置<code>./apache-activemq-5.11.1/conf/activemq.xml</code></p>
<p>修改broker字段： 增加useJmx=&quot;true&quot;</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;broker useJmx="true" xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}"> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改broken字段内的managementContext节点：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;managementContext>
            &lt;managementContext createConnector="true" connectorPort="11099"/>
&lt;/managementContext> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>配置./apache-activemq-5.11.1/bin/activemq</p>
<p>在脚本最后添加：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ACTIVEMQ_SUNJMX_START="-Dcom.sun.management.jmxremote.port=11099 "
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_CONF}/jmx.password"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_CONF}/jmx.access"
ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.ssl=false"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>然后重启activemq</p>
<blockquote>
<p>增加的方式不对，添加上以后密码还是为空，后续有空查一下原因</p>
</blockquote>
<h2 id="导入模板" tabindex="-1"><a class="header-anchor" href="#导入模板" aria-hidden="true">#</a> 导入模板</h2>
<p>在zabbix_web中导入zbx_activemq目录下的xml文件</p>
<p>在被监控主机上增加宏设置
加入{<span class='katex-error' title='ParseError: KaTeX parse error: Expected &#039;EOF&#039;, got &#039;}&#039; at position 13: JMX_PASSWORD}̲，和{'>JMX_PASSWORD}，和{</span>JMX_USERNAME}，user为admin，pass为activemq</p>
</template>
