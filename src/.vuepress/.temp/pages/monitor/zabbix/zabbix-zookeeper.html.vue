<template><h1 id="_9-zookeeper集群监控" tabindex="-1"><a class="header-anchor" href="#_9-zookeeper集群监控" aria-hidden="true">#</a> 9 zookeeper集群监控</h1>
<blockquote>
<p>zabbix旧版本可以用，新版本建议用官方模板</p>
</blockquote>
<h1 id="zabbix-zookeper-template" tabindex="-1"><a class="header-anchor" href="#zabbix-zookeper-template" aria-hidden="true">#</a> Zabbix-Zookeper-Template</h1>
<h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a> System requirements</h2>
<ul>
<li><a href="http://www.zabbix.com/downloads/" target="_blank" rel="noopener noreferrer">zabbix<ExternalLinkIcon/></a> &gt;= 3.4 (preprocessing used by this template)</li>
<li><a href="https://zookeeper.apache.org/releases.html" target="_blank" rel="noopener noreferrer">zookeeper<ExternalLinkIcon/></a> &gt;= 3.4 (mntr stats)</li>
<li>netcat</li>
<li>zookeeper监控模板，被监控主机，记得添加nc命令</li>
</ul>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<ul>
<li>
<p>ruok check</p>
</li>
<li>
<p>mntr stats :</p>
<ul>
<li>zk_num_alive_connections</li>
<li>zk_approximate_data_size</li>
<li>zk_ephemerals_count</li>
<li>zk_min_latency</li>
<li>zk_avg_latency</li>
<li>zk_max_latency</li>
<li>zk_max_file_descriptor_count</li>
<li>zk_open_file_descriptor_count</li>
<li>zk_outstanding_requests</li>
<li>zk_packets_received</li>
<li>zk_packets_sent</li>
<li>zk_server_state</li>
<li>zk_version</li>
<li>zk_znode_count</li>
</ul>
</li>
<li>
<p>graphs</p>
</li>
<li>
<p>screen</p>
</li>
</ul>
<h2 id="zabbix-macros" tabindex="-1"><a class="header-anchor" href="#zabbix-macros" aria-hidden="true">#</a> Zabbix Macros</h2>
<ul>
<li>{$ZOO_IP} : IP of the Zookeeper Instance (default : 127.0.0.1)</li>
<li>{$ZOO_PORT} : Port of the Zookeeper Instance (default : 2181)</li>
</ul>
<h2 id="zabbix-configuration" tabindex="-1"><a class="header-anchor" href="#zabbix-configuration" aria-hidden="true">#</a> Zabbix Configuration</h2>
<ol>
<li>
<p>Copy <code>UserParameter_Zookeeper.conf</code> to <code>/etc/zabbix/zabbix_agentd.d</code> folder (or whatever is default and/or configured on your system).</p>
</li>
<li>
<p>Restart your Zabbix Agent</p>
</li>
<li>
<p>Import XML template file (<code>zookeeper.xml</code>) into Zabbix via Web GUI (Configuration -&gt; Templates -&gt; Import).</p>
</li>
<li>
<p>Assign the imported template to a host, change MACROS if needed in the host parameters and enjoy!</p>
</li>
</ol>
</template>
