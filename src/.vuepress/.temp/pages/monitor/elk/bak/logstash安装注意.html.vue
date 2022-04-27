<template><h2 id="logstash安装注意" tabindex="-1"><a class="header-anchor" href="#logstash安装注意" aria-hidden="true">#</a> logstash安装注意</h2>
<p>在 /etc/sysconfig/logstash中添加对JAVA_HOME的配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cat /etc/sysconfig/logstash 
JAVA_HOME=/opt/jdk1.8.0_144
# source /etc/sysconfig/logstash 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>文件权限所属组是不是logstash</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/usr/share/logstash/bin/logstash -e "input {stdin{}} output{stdout{codec=>rubydebug}}"
等价于：
/usr/share/logstash/bin/logstash -e ""
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> ansible logstash -m shell -a <span class="token string">"export JAVA_HOME=/opt/jdk1.8.0_144;rpm -ivh /opt/logstash-7.7.1.rpm"</span>
ansible logstash -m shell -a <span class="token string">'echo "JAVA_HOME=/opt/jdk1.8.0_144" > /etc/sysconfig/logstash '</span>
 ansible logstash -m shell -a <span class="token string">'sed -i "s#1g#4g#g" /etc/logstash/jvm.options'</span>
ansible logstash -m shell -a <span class="token string">"systemctl enable logstash;systemctl start logstash"</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
