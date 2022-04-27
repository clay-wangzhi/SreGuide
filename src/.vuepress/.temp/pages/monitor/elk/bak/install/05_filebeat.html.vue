<template><ol>
<li>
<p>下载rpm包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget http://mirrors.tuna.tsinghua.edu.cn/elasticstack/yum/elastic-7.x/7.8.0/filebeat-7.8.0-x86_64.rpm
rpm -ivh filebeat-7.8.0-x86_64.rpm 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ol>
<p>​	2. 修改启动项</p>
<p>​	centos7安装filebeat需要注意修改<code>/usr/lib/systemd/system/filebeat.service</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Unit]
Description=Filebeat sends log files to Logstash or directly to Elasticsearch.
Documentation=https://www.elastic.co/products/beats/filebeat
Wants=network-online.target
After=network-online.target

[Service]

Environment="BEAT_LOG_OPTS"
Environment="BEAT_CONFIG_OPTS=-c /etc/filebeat/filebeat.yml"
Environment="BEAT_PATH_OPTS=-path.home /usr/share/filebeat -path.config /etc/filebeat -path.data /var/lib/filebeat -path.logs /var/log/filebeat"
ExecStart=/usr/share/filebeat/bin/filebeat $BEAT_LOG_OPTS $BEAT_CONFIG_OPTS $BEAT_PATH_OPTS
Restart=always

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote>
<p>主要修改的地方为：</p>
<ul>
<li>Environment=&quot;BEAT_LOG_OPTS=-e&quot;  改为 Environment=&quot;BEAT_LOG_OPTS&quot;</li>
<li>ExecStart=/usr/share/filebeat/bin/filebeat $BEAT_LOG_OPTS $BEAT_CONFIG_OPTS $BEAT_PATH_OPTS 改为ExecStart=/usr/share/filebeat/bin/filebeat $BEAT_LOG_OPTS $BEAT_CONFIG_OPTS $BEAT_PATH_OPTS</li>
</ul>
</blockquote>
<ol start="3">
<li>修改配置文件</li>
<li>启动</li>
</ol>
<blockquote>
<p>es 的index名称 只能为小写字母</p>
<p>注意index命名规范</p>
</blockquote>
</template>
