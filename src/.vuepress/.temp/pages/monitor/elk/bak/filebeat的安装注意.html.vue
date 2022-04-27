<template><h2 id="filebeat的安装注意" tabindex="-1"><a class="header-anchor" href="#filebeat的安装注意" aria-hidden="true">#</a> filebeat的安装注意</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># filebeat输出到kafka中时，需要指定topic
output.kafka:
  hosts: ["192.168.165.44:9092","192.168.165.45:9092","192.168.165.48:9092"]
  topic: 'credit'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>1.注意yaml文件的格式需要对齐</p>
<p>2.注意注释掉默认的#output.elasticsearch:</p>
</blockquote>
<p>filebeat.yml配置文件</p>
<p>改动地方</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>filebeat.inputs:

# Each - is an input. Most options can be set at the input level, so
# you can use different inputs for various configurations.
# Below are the input specific configurations.

- type: log

  # Change to true to enable this input configuration.
  enabled: true

  # Paths that should be crawled and fetched. Glob based paths.
  paths:
    - /var/log/aa.txt

# setup.kibana:
#output.elasticsearch:
  # Array of hosts to connect to.
  # hosts: ["localhost:9200"]

  # Optional protocol and basic auth credentials.
  #protocol: "https"
  #username: "elastic"

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>enabled 改为true</p>
<p>setup.kibana注释掉</p>
<p>output.elasticsearch:下面所有东西注释掉</p>
</template>
