import{_ as n,e as s}from"./app.4908d213.js";const a={},e=s(`<h1 id="docker-\u5B89\u88C5rabbitmq\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#docker-\u5B89\u88C5rabbitmq\u96C6\u7FA4" aria-hidden="true">#</a> docker \u5B89\u88C5rabbitmq\u96C6\u7FA4</h1><h2 id="rabbitmq-\u9AD8\u53EF\u7528\u96C6\u7FA4\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#rabbitmq-\u9AD8\u53EF\u7528\u96C6\u7FA4\u67B6\u6784" aria-hidden="true">#</a> RabbitMQ \u9AD8\u53EF\u7528\u96C6\u7FA4\u67B6\u6784</h2><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/rabbitmq_ha.png" alt="img" loading="lazy"></p><p>\u5C06\u4E24\u4E2A RabbitMQ \u78C1\u76D8\u8282\u70B9\u548C\u4E00\u4E2A RabbitMQ \u5185\u5B58\u8282\u70B9\u7EC4\u6210\u4E00\u4E2A\u5185\u5EFA\u96C6\u7FA4\uFF0C\u4E4B\u6240\u4EE5\u8981\u7528\u4E24\u4E2A\u78C1\u76D8\u8282\u70B9\u662F\u9632\u6B62\uFF0C\u552F\u4E00\u7684\u78C1\u76D8\u8282\u70B9\u6302\u6389\u540E\uFF0C\u4E0D\u80FD\u91CD\u5EFA\u961F\u5217\uFF0C\u4EA4\u6362\u5668\u3002\u7528 HAProxy \u4F5C\u4E3A RabbitMQ \u96C6\u7FA4\u7684\u8D1F\u8F7D\u5747\u8861\u3002\u4E3A\u4E86\u9632\u6B62 HAProxy \u5355\u70B9\u6545\u969C\uFF0C\u7528 Keepalived \u5C06\u4E24\u4E2A HAProxy \u8282\u70B9\u505A\u6210\u4E00\u4E3B\u4E00\u5907\u3002\u5E94\u7528\u4F7F\u7528 VIP\uFF08\u865A\u62DFIP\uFF09 \u8BBF\u95EE HAProxy \u670D\u52A1\u65F6\uFF0C\u9ED8\u8BA4\u8FDE\u63A5\u4E3B\u673A\uFF08Master\uFF09\u7684 HAProxy\uFF0C\u5F53\u4E3B\u673A\uFF08Master\uFF09\u4E0A\u7684 HAProxy \u6545\u969C\u65F6\uFF0CVIP \u4F1A\u6F02\u79FB\u5230\u5907\u673A\uFF08Backup\uFF09\u4E0A\uFF0C\u5C31\u4F1A\u8FDE\u63A5\u5907\u673A\uFF08Backup\uFF09\u4E0A\u7684 HAProxy \u670D\u52A1\u3002</p><h2 id="\u670D\u52A1\u5668\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u89C4\u5212" aria-hidden="true">#</a> \u670D\u52A1\u5668\u89C4\u5212</h2><table><thead><tr><th>\u89D2\u8272</th><th>\u6570\u91CF</th><th>ip\u5730\u5740</th></tr></thead><tbody><tr><td>RabbitMQ Disc Node</td><td>2</td><td>192.168.125.26\uFF0C192.168.125.190</td></tr><tr><td>RabbitMQ RAM Node</td><td>1</td><td>192.168.125.176</td></tr><tr><td>HAProxy</td><td>2</td><td>192.168.125.222\uFF0C192.168.125.168</td></tr><tr><td>\u865A\u62DFip</td><td>1</td><td>192.168.125.245</td></tr></tbody></table><h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h2><h3 id="\u5B89\u88C5docker\u548Cdocker-compose" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker\u548Cdocker-compose" aria-hidden="true">#</a> \u5B89\u88C5Docker\u548CDocker Compose</h3><ol><li><p>\u5B89\u88C5\u914D\u7F6EDocker</p><p>\u4F7F\u7528\u5B98\u65B9\u811A\u672C\u5B89\u88C5 Docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -fsSL <span class="token string">&quot;https://get.docker.com/&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> -s -- --mirror Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u52A0\u8F7Dbr_netfilter</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>modprobe br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8BBE\u7F6E\u4E0B\u7CFB\u7EDF\u5185\u6838\u53C2\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cat<span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/docker.conf</span>
# \u8981\u6C42iptables\u4E0D\u5BF9bridge\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-arptables = 1
# \u5F00\u542F\u8F6C\u53D1
net.ipv4.ip_forward = 1
EOF</span>
sysctl -p /etc/sysctl.d/docker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>\u26A0\uFE0F \u614E\u7528<code>sysctl --system</code>\u547D\u4EE4\uFF0C\u5982\u679C\u53C2\u6570\u5728\u4E0D\u540C\u6587\u4EF6\u4E2D\u8BBE\u7F6E\uFF0C\u4F1A\u6709\u4F18\u5148\u7EA7\u95EE\u9898\uFF0C\u76EE\u524D\u770B\u6765<code>/etc/sysctl.conf</code>\u7684\u4F18\u5148\u7EA7\u6700\u9AD8</p></blockquote><p>\u914D\u7F6Edocker\u955C\u50CF\u7AD9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -sSL https://get.daocloud.io/daotools/set_mirror.sh <span class="token operator">|</span> <span class="token function">sh</span> -s http://f1361db2.m.daocloud.io
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u542F\u52A8docker\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u5B89\u88C5\u914D\u7F6EDocker Compose</p><p>\u4E8C\u8FDB\u5236\u65B9\u5F0F \u5B89\u88C5Docker Compose</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -s<span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m<span class="token variable">)</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u914D\u7F6Ebash\u8865\u5168\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -L https://raw.githubusercontent.com/docker/compose/1.27.4/contrib/completion/bash/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u5982\u679C\u7F51\u7EDC\u4E0D\u53EF\u8FBE\uFF0C\u53EF\u5148\u4E0B\u8F7D\u5230\u672C\u5730\uFF0C\u7136\u540E\u4E0A\u4F20\u5230\u5185\u7F51ftp\u670D\u52A1\u5668\u4E0A\uFF0C\u8FDB\u884C\u4E0B\u8F7D\uFF0C\u4EE5\u4E0B\u662F\u7B14\u8005\u81EA\u5DF1\u7684\u5185\u7F51ftp\u4E0B\u8F7D\u5730\u5740</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -L ftp://192.168.166.21/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><h3 id="\u4E0B\u8F7Drabbitmq\u548Chaproxy\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7Drabbitmq\u548Chaproxy\u955C\u50CF" aria-hidden="true">#</a> \u4E0B\u8F7Drabbitmq\u548Chaproxy\u955C\u50CF</h3><p>\u4E0B\u8F7D\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull rabbitmq:3.8.9-management
<span class="token function">docker</span> pull haproxy:2.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u90E8\u7F72rabbitmq\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72rabbitmq\u96C6\u7FA4" aria-hidden="true">#</a> \u90E8\u7F72rabbitmq\u96C6\u7FA4</h2><h3 id="\u90E8\u7F72192-168-125-26\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72192-168-125-26\u8282\u70B9" aria-hidden="true">#</a> \u90E8\u7F72<code>192.168.125.26</code>\u8282\u70B9</h3><p>\u521B\u5EFA\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /app/clay/rabbitmq
<span class="token builtin class-name">cd</span> /app/clay/rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u67E5\u770B\u670D\u52A1\u7F16\u6392\u6587\u4EF6<code>clay-rabbitmq-node1.yaml</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> clay<span class="token punctuation">-</span>rabbitmq
    <span class="token key atrule">image</span><span class="token punctuation">:</span> rabbitmq<span class="token punctuation">:</span>3.8.9<span class="token punctuation">-</span>management
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 4369<span class="token punctuation">:</span><span class="token number">4369</span>
      <span class="token punctuation">-</span> 5671<span class="token punctuation">:</span><span class="token number">5671</span>
      <span class="token punctuation">-</span> 5672<span class="token punctuation">:</span><span class="token number">5672</span>
      <span class="token punctuation">-</span> 15672<span class="token punctuation">:</span><span class="token number">15672</span>
      <span class="token punctuation">-</span> 25672<span class="token punctuation">:</span><span class="token number">25672</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> RABBITMQ_ERLANG_COOKIE=iweru238roseire
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_USER=clay_admin
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_PASS=clay_admin_123
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_VHOST=clay_vhost
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> rabbitmq1
    <span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> rabbitmq1<span class="token punctuation">:</span>192.168.125.26
      <span class="token punctuation">-</span> rabbitmq2<span class="token punctuation">:</span>192.168.125.190
      <span class="token punctuation">-</span> rabbitmq3<span class="token punctuation">:</span>192.168.125.176
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/var/lib/rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u90E8\u7F72</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> -f clay-rabbitmq-node1.yaml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u26A0\uFE0F \u4E09\u4E2A\u8282\u70B9 RABBITMQ_ERLANG_COOKIE \u4FDD\u6301\u4E00\u81F4\u3002\u4E00\u5B9A\u8981\u6709 extra_hosts \u914D\u7F6E\uFF0C\u5426\u5219\u5728\u642D\u5EFA\u96C6\u7FA4\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u8FDE\u63A5\u4E0D\u5230\u5176\u4ED6 rabbitmq \u8282\u70B9\u670D\u52A1\u3002\u6B64\u8282\u70B9</p><p>\u4F5C\u4E3A\u96C6\u7FA4\u6839\u8282\u70B9\u3002</p></blockquote><h3 id="\u90E8\u7F72192-168-125-190\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72192-168-125-190\u8282\u70B9" aria-hidden="true">#</a> \u90E8\u7F72<code>192.168.125.190</code>\u8282\u70B9</h3><p>\u521B\u5EFA\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /app/clay/rabbitmq
<span class="token builtin class-name">cd</span> /app/clay/rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7F16\u5199<code>rabbitmq.sh</code>\u542F\u52A8\u811A\u672C\uFF08\u78C1\u76D8\u8282\u70B9\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> rabbitmq.sh <span class="token operator">&lt;&lt;</span><span class="token string">EOF
rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl join_cluster rabbit@rabbitmq1
rabbitmqctl start_app
EOF</span>
<span class="token function">chmod</span> +x rabbitmq.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u67E5\u770B\u670D\u52A1\u7F16\u6392\u6587\u4EF6<code>clay-rabbitmq-node2.yaml</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> clay<span class="token punctuation">-</span>rabbitmq
    <span class="token key atrule">image</span><span class="token punctuation">:</span> rabbitmq<span class="token punctuation">:</span>3.8.9<span class="token punctuation">-</span>management
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 4369<span class="token punctuation">:</span><span class="token number">4369</span>
      <span class="token punctuation">-</span> 5671<span class="token punctuation">:</span><span class="token number">5671</span>
      <span class="token punctuation">-</span> 5672<span class="token punctuation">:</span><span class="token number">5672</span>
      <span class="token punctuation">-</span> 15672<span class="token punctuation">:</span><span class="token number">15672</span>
      <span class="token punctuation">-</span> 25672<span class="token punctuation">:</span><span class="token number">25672</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> RABBITMQ_ERLANG_COOKIE=iweru238roseire
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_USER=clay_admin
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_PASS=clay_admin_123
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_VHOST=clay_vhost
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> rabbitmq2
    <span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> rabbitmq1<span class="token punctuation">:</span>192.168.125.26
      <span class="token punctuation">-</span> rabbitmq2<span class="token punctuation">:</span>192.168.125.190
      <span class="token punctuation">-</span> rabbitmq3<span class="token punctuation">:</span>192.168.125.176
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./rabbitmq.sh<span class="token punctuation">:</span>/home/rabbitmq.sh
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/var/lib/rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u90E8\u7F72</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> -f clay-rabbitmq-node2.yaml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8282\u70B9\u542F\u52A8\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7\u547D\u4EE4\u8FDB\u5165<code>rabbitmq2</code>\u8282\u70B9\u7684\u5BB9\u5668\u4E2D\uFF0C\u6267\u884C<code>/home/rabbitmq.sh</code>\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> container <span class="token builtin class-name">exec</span> -it clay-rabbitmq /bin/bash
./home/rabbitmq.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u90E8\u7F72192-168-125-176\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72192-168-125-176\u8282\u70B9" aria-hidden="true">#</a> \u90E8\u7F72<code>192.168.125.176</code>\u8282\u70B9</h3><p>\u521B\u5EFA\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /app/clay/rabbitmq
<span class="token builtin class-name">cd</span> /app/clay/rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7F16\u5199<code>rabbitmq-ram.sh</code>\u542F\u52A8\u811A\u672C\uFF08\u5185\u5B58\u8282\u70B9\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> rabbitmq-ram.sh <span class="token operator">&lt;&lt;</span><span class="token string">EOF
rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl join_cluster --ram rabbit@rabbitmq1
rabbitmqctl start_app
EOF</span>
<span class="token function">chmod</span> +x rabbitmq-ram.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u67E5\u770B\u670D\u52A1\u7F16\u6392\u6587\u4EF6<code>clay-rabbitmq-node3.yaml</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> clay<span class="token punctuation">-</span>rabbitmq
    <span class="token key atrule">image</span><span class="token punctuation">:</span> rabbitmq<span class="token punctuation">:</span>3.8.9<span class="token punctuation">-</span>management
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 4369<span class="token punctuation">:</span><span class="token number">4369</span>
      <span class="token punctuation">-</span> 5671<span class="token punctuation">:</span><span class="token number">5671</span>
      <span class="token punctuation">-</span> 5672<span class="token punctuation">:</span><span class="token number">5672</span>
      <span class="token punctuation">-</span> 15672<span class="token punctuation">:</span><span class="token number">15672</span>
      <span class="token punctuation">-</span> 25672<span class="token punctuation">:</span><span class="token number">25672</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> RABBITMQ_ERLANG_COOKIE=iweru238roseire
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_USER=clay_admin
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_PASS=clay_admin_123
      <span class="token punctuation">-</span> RABBITMQ_DEFAULT_VHOST=clay_vhost
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> rabbitmq3
    <span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> rabbitmq1<span class="token punctuation">:</span>192.168.125.26
      <span class="token punctuation">-</span> rabbitmq2<span class="token punctuation">:</span>192.168.125.190
      <span class="token punctuation">-</span> rabbitmq3<span class="token punctuation">:</span>192.168.125.176
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./rabbitmq<span class="token punctuation">-</span>ram.sh<span class="token punctuation">:</span>/home/rabbitmq<span class="token punctuation">-</span>ram.sh
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/var/lib/rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u90E8\u7F72</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> -f clay-rabbitmq-node3.yaml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728\u542F\u52A8<code>rabbitmq3</code>\u8282\u70B9\uFF0C\u542F\u52A8\u540E\uFF0C\u8FDB\u5165\u5BB9\u5668\u5185\u90E8\uFF0C\u6267\u884C <code>/home/rabbitmq-ram.sh</code> \u811A\u672C\u6DFB\u52A0\u5185\u5B58\u8282\u70B9\u5230\u96C6\u7FA4\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> container <span class="token builtin class-name">exec</span> -it clay-rabbitmq /bin/bash
./home/rabbitmq-ram.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u5BB9\u5668\u5185\u90E8\u4F7F\u7528<code>rabbitmqctl cluster_status</code>\u547D\u4EE4\u67E5\u770B\u96C6\u7FA4\u72B6\u6001\uFF0C\u4EE5\u4E0B\u662F\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Basics

Cluster name: rabbit@rabbitmq3

Disk Nodes

rabbit@rabbitmq1
rabbit@rabbitmq2

RAM Nodes

rabbit@rabbitmq3

Running Nodes

rabbit@rabbitmq1
rabbit@rabbitmq2
rabbit@rabbitmq3

Versions

rabbit@rabbitmq1: RabbitMQ 3.8.9 on Erlang 23.1.1
rabbit@rabbitmq2: RabbitMQ 3.8.9 on Erlang 23.1.1
rabbit@rabbitmq3: RabbitMQ 3.8.9 on Erlang 23.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7 http://192.168.125.26:15672/ \u8FDB\u5165\u7BA1\u7406\u7AEF\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/rabbitmqclay.png" alt="rabbitmq_ha" loading="lazy"></p><h2 id="haproxy-\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#haproxy-\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> HaProxy \u8D1F\u8F7D\u5747\u8861</h2><p>\u5728<code>192.168.125.222</code>\uFF0C<code>192.168.125.168</code>\u4E24\u4E2A\u8282\u70B9\u540C\u65F6\u64CD\u4F5C</p><p>\u521B\u5EFA\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /app/clay/haproxy
<span class="token builtin class-name">cd</span> /app/clay/haproxy
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u67E5\u770B\u670D\u52A1\u7F16\u6392\u6587\u4EF6<code>clay-haproxy.yaml</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">haproxy</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> clay<span class="token punctuation">-</span>haproxy
    <span class="token key atrule">image</span><span class="token punctuation">:</span> haproxy<span class="token punctuation">:</span><span class="token number">2.1</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8100<span class="token punctuation">:</span><span class="token number">8100</span>
      <span class="token punctuation">-</span> 15670<span class="token punctuation">:</span><span class="token number">5670</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> rabbitmq1<span class="token punctuation">:</span>192.168.125.26
      <span class="token punctuation">-</span> rabbitmq2<span class="token punctuation">:</span>192.168.125.190
      <span class="token punctuation">-</span> rabbitmq3<span class="token punctuation">:</span>192.168.125.176
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./haproxy.cfg<span class="token punctuation">:</span>/usr/local/etc/haproxy/haproxy.cfg<span class="token punctuation">:</span>ro
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>\u91CD\u70B9\u662F\u8BBE\u7F6E extra_hosts\uFF08rabbitmq \u96C6\u7FA4\u8282\u70B9 ip\uFF09 \u548C volumes\uFF08\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u914D\u7F6E\u6587\u4EF6\uFF09</p></blockquote><p>haproxy \u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>global
    log 127.0.0.1 local0 info
    maxconn 4096

defaults
    log     global
    mode    tcp
    option  tcplog
    retries 3
    option  redispatch
    maxconn 2000
    timeout connect 5s
    timeout client 120s
    timeout server 120s

# ssl for rabbitmq
# frontend ssl_rabbitmq
    # bind *:5673 ssl crt /root/rmqha_proxy/rmqha.pem
    # mode tcp
    # default_backend rabbitmq

# web \u7BA1\u7406\u754C\u9762
listen stats
    bind *:8100
    mode http
    stats enable
    stats realm Haproxy\\ Statistics
    stats uri /
    stats auth admin:admin123
# \u914D\u7F6E\u8D1F\u8F7D\u5747\u8861
listen rabbitmq
    bind *:5670
    mode tcp
    balance roundrobin
    server  rabbitmq1 rabbitmq1:5672  check inter 5s rise 2 fall 3
    server  rabbitmq2 rabbitmq2:5672  check inter 5s rise 2 fall 3
    server  rabbitmq3 rabbitmq3:5672  check inter 5s rise 2 fall 3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u90E8\u7F72</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> -f clay-haproxy.yaml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u767B\u5F55 HAProxy \u7684\u7BA1\u7406\u7AEF\u67E5\u770B\u96C6\u7FA4\u72B6\u6001\uFF1Ahttp://192.168.125.222:8100/</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/haproxyauth.png" alt="haproxyauth" loading="lazy"></p><h2 id="\u4F7F\u7528-keepalived-\u7ED9-haproxy-\u505A\u4E3B\u5907" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-keepalived-\u7ED9-haproxy-\u505A\u4E3B\u5907" aria-hidden="true">#</a> \u4F7F\u7528 Keepalived \u7ED9 HAProxy \u505A\u4E3B\u5907</h2><p>\u5728<code>192.168.125.222</code>\uFF0C<code>192.168.125.168</code>\u4E24\u4E2A\u8282\u70B9\u5B89\u88C5<code>keepalived</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> keepalived
<span class="token comment"># \u5B89\u88C5killall\u547D\u4EE4</span>
yum -y <span class="token function">install</span> psmisc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Master \u8282\u70B9\u914D\u7F6E\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vrrp_script chk_haproxy {
    script &quot;killall -0 haproxy&quot;  # verify haproxy&#39;s pid existance
    interval 5                   # check every 5 seconds
    weight -2                    # if check failed, priority will minus 2
}
vrrp_instance VI_1 {
    # \u4E3B\u673A: MASTER
    # \u5907\u673A: BACKUP
    state MASTER
    # \u5B9E\u4F8B\u7ED1\u5B9A\u7684\u7F51\u5361, \u7528ip a\u547D\u4EE4\u67E5\u770B\u7F51\u5361\u7F16\u53F7
    interface eth0
    # \u865A\u62DF\u8DEF\u7531\u6807\u8BC6\uFF0C\u8FD9\u4E2A\u6807\u8BC6\u662F\u4E00\u4E2A\u6570\u5B57(1-255)\uFF0C\u5728\u4E00\u4E2AVRRP\u5B9E\u4F8B\u4E2D\u4E3B\u5907\u670D\u52A1\u5668ID\u5FC5\u987B\u4E00\u6837
    virtual_router_id 51
    # \u4F18\u5148\u7EA7\uFF0C\u6570\u5B57\u8D8A\u5927\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF0C\u5728\u4E00\u4E2A\u5B9E\u4F8B\u4E2D\u4E3B\u670D\u52A1\u5668\u4F18\u5148\u7EA7\u8981\u9AD8\u4E8E\u5907\u670D\u52A1\u5668
    priority 101
    # \u865A\u62DFIP\u5730\u5740,\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u6BCF\u884C\u4E00\u4E2A
    virtual_ipaddress {
        192.168.125.245
    }
    track_script {               # Scripts state we monitor
        chk_haproxy
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><code>eth0</code>\u662F\u7F51\u5361\u540D\uFF0C<code>ifconfig</code> \u547D\u4EE4\u67E5\u770B\u670D\u52A1\u5668\u7F51\u5361\uFF0C\u627E\u5230\u548C\u672C\u673A\u670D\u52A1 ip \u5BF9\u5E94\u7684\u7F51\u5361\uFF0C<code>virtual_router_id</code> \u7684\u503C\u8981\u548C backup \u8282\u70B9\u4E0A\u7684\u914D\u7F6E\u4FDD\u6301\u4E00\u81F4\u3002</p><p><code>killall -0 haproxy</code> \u547D\u4EE4\u7684\u610F\u601D\u662F\uFF0C\u5982\u679C haproxy \u670D\u52A1\u5B58\u5728\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u4EC0\u4E48\u90FD\u4E0D\u4F1A\u53D1\u751F\uFF0C\u5982\u679C\u670D\u52A1\u4E0D\u5B58\u5728\uFF0C\u6267\u884C\u8BE5\u547D\u4EE4\u4F1A\u62A5\u627E\u4E0D\u5230\u8FDB\u7A0B <code>haproxy: no process found</code>\u3002</p><p>master \u8282\u70B9\u7684 priority \u5728\u51CF\u53BB weight \u540E\u8981\u6BD4 backup \u8282\u70B9\u7684 priority \u4F4E\u624D\u884C\uFF0C\u5426\u5219\u4E3B\u5907\u5207\u6362\u4E0D\u6210\u529F\u3002</p><p><strong>Backup\u8282\u70B9\u914D\u7F6E\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vrrp_script chk_haproxy {
    script &quot;killall -0 haproxy&quot;  # verify haproxy&#39;s pid existance
    interval 5                   # check every 5 seconds
    weight -2                    # if check failed, priority will minus 2
}
vrrp_instance VI_1 {
    # \u4E3B\u673A: MASTER
    # \u5907\u673A: BACKUP
    state BACKUP
    # \u5B9E\u4F8B\u7ED1\u5B9A\u7684\u7F51\u5361, \u7528ip a\u547D\u4EE4\u67E5\u770B\u7F51\u5361\u7F16\u53F7
    interface eth0
    # \u865A\u62DF\u8DEF\u7531\u6807\u8BC6\uFF0C\u8FD9\u4E2A\u6807\u8BC6\u662F\u4E00\u4E2A\u6570\u5B57(1-255)\uFF0C\u5728\u4E00\u4E2AVRRP\u5B9E\u4F8B\u4E2D\u4E3B\u5907\u670D\u52A1\u5668ID\u5FC5\u987B\u4E00\u6837
    virtual_router_id 51
    # \u4F18\u5148\u7EA7\uFF0C\u6570\u5B57\u8D8A\u5927\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF0C\u5728\u4E00\u4E2A\u5B9E\u4F8B\u4E2D\u4E3B\u670D\u52A1\u5668\u4F18\u5148\u7EA7\u8981\u9AD8\u4E8E\u5907\u670D\u52A1\u5668
    priority 100
    # \u865A\u62DFIP\u5730\u5740,\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u6BCF\u884C\u4E00\u4E2A
    virtual_ipaddress {
        192.168.125.245
    }
    track_script {               # Scripts state we monitor
        chk_haproxy
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u521B\u5EFA\u5B8C\u914D\u7F6E\uFF0C\u542F\u52A8 keepalived\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart keepalived.service 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u6D4B\u8BD5 Keepalived</strong></p><p>\u5728 Master\uFF0CBackup \u8282\u70B9\u4E0A\uFF0C\u4F7F\u7528 <code>ip addr</code> \u547D\u4EE4\u770B\u4E0B vip \u5728\u54EA\u53F0\u673A\u5668\u7684 eth0 \u7F51\u5361\u4E0A\u3002</p><p>\u9ED8\u8BA4\u5728 master \u4E3B\u673A\u4E0A\uFF0C\u505C\u6389 master \u4E3B\u673A\u7684 haproxy \u670D\u52A1\uFF0C\u7136\u540E\u5728\u7528 <code>ip addr</code> \u67E5\u770B\u865A\u62DF ip \u5728\u54EA\u4E2A\u673A\u5668\u4E0A\uFF0C\u5982\u679C\u6F02\u79FB\u5230\u5907\u4EFD\u4E3B\u673A\u4E0A\u5219\u4EE3\u8868\u70ED\u5907\u751F\u6548\u3002</p><p>\u5728\u5F00\u542F master \u4E3B\u673A\u7684 haproxy \u670D\u52A1\uFF0C<code>ip addr</code> \u67E5\u770B\u865A\u62DF ip \u5E94\u8BE5\u91CD\u65B0\u6F02\u79FB\u56DE master \u4E3B\u673A\u4E0A\u3002</p><p>\u6D4B\u8BD5\u670D\u52A1\uFF0C\u4F7F\u7528\u865A\u62DF ip \u52A0\u670D\u52A1\u7AEF\u53E3\u53F7\u8BBF\u95EE HAProxy \u670D\u52A1\u3002</p><p>\u81F3\u6B64\uFF0C\u9AD8\u53EF\u7528\u7684 rabbitmq \u96C6\u7FA4 \u548C haproxy \u8F6F\u8D1F\u8F7D\u5C31\u642D\u5EFA\u5B8C\u6210\u3002</p>`,78);function p(l,r){return e}var c=n(a,[["render",p],["__file","docker_rabbitmq.html.vue"]]);export{c as default};
