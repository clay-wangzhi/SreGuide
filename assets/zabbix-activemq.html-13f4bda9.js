import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,e as n}from"./app-1a5afd71.js";const i={},o=n(`<h1 id="_8-activemq监控" tabindex="-1"><a class="header-anchor" href="#_8-activemq监控" aria-hidden="true">#</a> 8 activemq监控</h1><blockquote><p>zabbix旧版本可以用，新版本建议用官方模板</p></blockquote><h2 id="关闭被监控端的防火墙" tabindex="-1"><a class="header-anchor" href="#关闭被监控端的防火墙" aria-hidden="true">#</a> 关闭被监控端的防火墙</h2><p>activemq 防火墙的添加还是有问题，先把防火墙给关了，它好像是后续会再产生一个随机端口，进行数据的传输</p><h2 id="zabbix-proxy安装java-gateway" tabindex="-1"><a class="header-anchor" href="#zabbix-proxy安装java-gateway" aria-hidden="true">#</a> zabbix_proxy安装java_gateway，</h2><p>因为是基于JMX进行监控的</p><h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2><p>配置<code>./apache-activemq-5.11.1/conf/activemq.xml</code></p><p>修改broker字段： 增加useJmx=&quot;true&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;broker useJmx=&quot;true&quot; xmlns=&quot;http://activemq.apache.org/schema/core&quot; brokerName=&quot;localhost&quot; dataDirectory=&quot;\${activemq.data}&quot;&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改broken字段内的managementContext节点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;managementContext&gt;
            &lt;managementContext createConnector=&quot;true&quot; connectorPort=&quot;11099&quot;/&gt;
&lt;/managementContext&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置./apache-activemq-5.11.1/bin/activemq</p><p>在脚本最后添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ACTIVEMQ_SUNJMX_START=&quot;-Dcom.sun.management.jmxremote.port=11099 &quot;
ACTIVEMQ_SUNJMX_START=&quot;$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.password.file=\${ACTIVEMQ_CONF}/jmx.password&quot;
ACTIVEMQ_SUNJMX_START=&quot;$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.access.file=\${ACTIVEMQ_CONF}/jmx.access&quot;
ACTIVEMQ_SUNJMX_START=&quot;$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.ssl=false&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启activemq</p><blockquote><p>增加的方式不对，添加上以后密码还是为空，后续有空查一下原因</p></blockquote><h2 id="导入模板" tabindex="-1"><a class="header-anchor" href="#导入模板" aria-hidden="true">#</a> 导入模板</h2><p>在zabbix_web中导入zbx_activemq目录下的xml文件</p><p>在被监控主机上增加宏设置 加入{$JMX_PASSWORD}，和{$JMX_USERNAME}，user为admin，pass为activemq</p>`,20),r=[o];function c(s,d){return a(),t("div",null,r)}const l=e(i,[["render",c],["__file","zabbix-activemq.html.vue"]]);export{l as default};
