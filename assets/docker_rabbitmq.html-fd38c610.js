import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as e}from"./app-08ceb845.js";const i={},l=e(`<h1 id="docker-安装rabbitmq集群" tabindex="-1"><a class="header-anchor" href="#docker-安装rabbitmq集群" aria-hidden="true">#</a> docker 安装rabbitmq集群</h1><h2 id="rabbitmq-高可用集群架构" tabindex="-1"><a class="header-anchor" href="#rabbitmq-高可用集群架构" aria-hidden="true">#</a> RabbitMQ 高可用集群架构</h2><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/rabbitmq_ha.png" alt="img"></p><p>将两个 RabbitMQ 磁盘节点和一个 RabbitMQ 内存节点组成一个内建集群，之所以要用两个磁盘节点是防止，唯一的磁盘节点挂掉后，不能重建队列，交换器。用 HAProxy 作为 RabbitMQ 集群的负载均衡。为了防止 HAProxy 单点故障，用 Keepalived 将两个 HAProxy 节点做成一主一备。应用使用 VIP（虚拟IP） 访问 HAProxy 服务时，默认连接主机（Master）的 HAProxy，当主机（Master）上的 HAProxy 故障时，VIP 会漂移到备机（Backup）上，就会连接备机（Backup）上的 HAProxy 服务。</p><h2 id="服务器规划" tabindex="-1"><a class="header-anchor" href="#服务器规划" aria-hidden="true">#</a> 服务器规划</h2><table><thead><tr><th>角色</th><th>数量</th><th>ip地址</th></tr></thead><tbody><tr><td>RabbitMQ Disc Node</td><td>2</td><td>192.168.125.26，192.168.125.190</td></tr><tr><td>RabbitMQ RAM Node</td><td>1</td><td>192.168.125.176</td></tr><tr><td>HAProxy</td><td>2</td><td>192.168.125.222，192.168.125.168</td></tr><tr><td>虚拟ip</td><td>1</td><td>192.168.125.245</td></tr></tbody></table><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><h3 id="安装docker和docker-compose" tabindex="-1"><a class="header-anchor" href="#安装docker和docker-compose" aria-hidden="true">#</a> 安装Docker和Docker Compose</h3><ol><li><p>安装配置Docker</p><p>使用官方脚本安装 Docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://get.docker.com/&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加载br_netfilter</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>modprobe br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置下系统内核参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cat<span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/docker.conf</span>
# 要求iptables不对bridge的数据进行处理
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-arptables = 1
# 开启转发
net.ipv4.ip_forward = 1
EOF</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/docker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>⚠️ 慎用<code>sysctl --system</code>命令，如果参数在不同文件中设置，会有优先级问题，目前看来<code>/etc/sysctl.conf</code>的优先级最高</p></blockquote><p>配置docker镜像站</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.daocloud.io/daotools/set_mirror.sh <span class="token operator">|</span> <span class="token function">sh</span> <span class="token parameter variable">-s</span> http://f1361db2.m.daocloud.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动docker服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装配置Docker Compose</p><p>二进制方式 安装Docker Compose</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.27.4/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置bash补全命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://raw.githubusercontent.com/docker/compose/1.27.4/contrib/completion/bash/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>如果网络不可达，可先下载到本地，然后上传到内网ftp服务器上，进行下载，以下是笔者自己的内网ftp下载地址</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> ftp://192.168.166.21/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="下载rabbitmq和haproxy镜像" tabindex="-1"><a class="header-anchor" href="#下载rabbitmq和haproxy镜像" aria-hidden="true">#</a> 下载rabbitmq和haproxy镜像</h3><p>下载镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull rabbitmq:3.8.9-management
<span class="token function">docker</span> pull haproxy:2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署rabbitmq集群" tabindex="-1"><a class="header-anchor" href="#部署rabbitmq集群" aria-hidden="true">#</a> 部署rabbitmq集群</h2><h3 id="部署192-168-125-26节点" tabindex="-1"><a class="header-anchor" href="#部署192-168-125-26节点" aria-hidden="true">#</a> 部署<code>192.168.125.26</code>节点</h3><p>创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /app/clay/rabbitmq
<span class="token builtin class-name">cd</span> /app/clay/rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看服务编排文件<code>clay-rabbitmq-node1.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> clay-rabbitmq-node1.yaml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>⚠️ 三个节点 RABBITMQ_ERLANG_COOKIE 保持一致。一定要有 extra_hosts 配置，否则在搭建集群的过程中会连接不到其他 rabbitmq 节点服务。此节点</p><p>作为集群根节点。</p></blockquote><h3 id="部署192-168-125-190节点" tabindex="-1"><a class="header-anchor" href="#部署192-168-125-190节点" aria-hidden="true">#</a> 部署<code>192.168.125.190</code>节点</h3><p>创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /app/clay/rabbitmq
<span class="token builtin class-name">cd</span> /app/clay/rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编写<code>rabbitmq.sh</code>启动脚本（磁盘节点）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> rabbitmq.sh <span class="token operator">&lt;&lt;</span><span class="token string">EOF
rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl join_cluster rabbit@rabbitmq1
rabbitmqctl start_app
EOF</span>
<span class="token function">chmod</span> +x rabbitmq.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看服务编排文件<code>clay-rabbitmq-node2.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> clay-rabbitmq-node2.yaml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>节点启动完成后，通过命令进入<code>rabbitmq2</code>节点的容器中，执行<code>/home/rabbitmq.sh</code>脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> clay-rabbitmq /bin/bash
./home/rabbitmq.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署192-168-125-176节点" tabindex="-1"><a class="header-anchor" href="#部署192-168-125-176节点" aria-hidden="true">#</a> 部署<code>192.168.125.176</code>节点</h3><p>创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /app/clay/rabbitmq
<span class="token builtin class-name">cd</span> /app/clay/rabbitmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编写<code>rabbitmq-ram.sh</code>启动脚本（内存节点）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> rabbitmq-ram.sh <span class="token operator">&lt;&lt;</span><span class="token string">EOF
rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl join_cluster --ram rabbit@rabbitmq1
rabbitmqctl start_app
EOF</span>
<span class="token function">chmod</span> +x rabbitmq-ram.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看服务编排文件<code>clay-rabbitmq-node3.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> clay-rabbitmq-node3.yaml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在启动<code>rabbitmq3</code>节点，启动后，进入容器内部，执行 <code>/home/rabbitmq-ram.sh</code> 脚本添加内存节点到集群中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> clay-rabbitmq /bin/bash
./home/rabbitmq-ram.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在容器内部使用<code>rabbitmqctl cluster_status</code>命令查看集群状态，以下是输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Basics

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过 http://192.168.125.26:15672/ 进入管理端查看集群状态</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/rabbitmqclay.png" alt="rabbitmq_ha"></p><h2 id="haproxy-负载均衡" tabindex="-1"><a class="header-anchor" href="#haproxy-负载均衡" aria-hidden="true">#</a> HaProxy 负载均衡</h2><p>在<code>192.168.125.222</code>，<code>192.168.125.168</code>两个节点同时操作</p><p>创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /app/clay/haproxy
<span class="token builtin class-name">cd</span> /app/clay/haproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看服务编排文件<code>clay-haproxy.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>重点是设置 extra_hosts（rabbitmq 集群节点 ip） 和 volumes（使用自定义的配置文件）</p></blockquote><p>haproxy 配置文件内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>global
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

# web 管理界面
listen stats
    bind *:8100
    mode http
    stats enable
    stats realm Haproxy\\ Statistics
    stats uri /
    stats auth admin:admin123
# 配置负载均衡
listen rabbitmq
    bind *:5670
    mode tcp
    balance roundrobin
    server  rabbitmq1 rabbitmq1:5672  check inter 5s rise 2 fall 3
    server  rabbitmq2 rabbitmq2:5672  check inter 5s rise 2 fall 3
    server  rabbitmq3 rabbitmq3:5672  check inter 5s rise 2 fall 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> clay-haproxy.yaml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登录 HAProxy 的管理端查看集群状态：http://192.168.125.222:8100/</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/haproxyauth.png" alt="haproxyauth"></p><h2 id="使用-keepalived-给-haproxy-做主备" tabindex="-1"><a class="header-anchor" href="#使用-keepalived-给-haproxy-做主备" aria-hidden="true">#</a> 使用 Keepalived 给 HAProxy 做主备</h2><p>在<code>192.168.125.222</code>，<code>192.168.125.168</code>两个节点安装<code>keepalived</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> keepalived
<span class="token comment"># 安装killall命令</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> psmisc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Master 节点配置：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vrrp_script chk_haproxy {
    script &quot;killall -0 haproxy&quot;  # verify haproxy&#39;s pid existance
    interval 5                   # check every 5 seconds
    weight -2                    # if check failed, priority will minus 2
}
vrrp_instance VI_1 {
    # 主机: MASTER
    # 备机: BACKUP
    state MASTER
    # 实例绑定的网卡, 用ip a命令查看网卡编号
    interface eth0
    # 虚拟路由标识，这个标识是一个数字(1-255)，在一个VRRP实例中主备服务器ID必须一样
    virtual_router_id 51
    # 优先级，数字越大优先级越高，在一个实例中主服务器优先级要高于备服务器
    priority 101
    # 虚拟IP地址,可以有多个，每行一个
    virtual_ipaddress {
        192.168.125.245
    }
    track_script {               # Scripts state we monitor
        chk_haproxy
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>eth0</code>是网卡名，<code>ifconfig</code> 命令查看服务器网卡，找到和本机服务 ip 对应的网卡，<code>virtual_router_id</code> 的值要和 backup 节点上的配置保持一致。</p><p><code>killall -0 haproxy</code> 命令的意思是，如果 haproxy 服务存在执行该命令，什么都不会发生，如果服务不存在，执行该命令会报找不到进程 <code>haproxy: no process found</code>。</p><p>master 节点的 priority 在减去 weight 后要比 backup 节点的 priority 低才行，否则主备切换不成功。</p><p><strong>Backup节点配置：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vrrp_script chk_haproxy {
    script &quot;killall -0 haproxy&quot;  # verify haproxy&#39;s pid existance
    interval 5                   # check every 5 seconds
    weight -2                    # if check failed, priority will minus 2
}
vrrp_instance VI_1 {
    # 主机: MASTER
    # 备机: BACKUP
    state BACKUP
    # 实例绑定的网卡, 用ip a命令查看网卡编号
    interface eth0
    # 虚拟路由标识，这个标识是一个数字(1-255)，在一个VRRP实例中主备服务器ID必须一样
    virtual_router_id 51
    # 优先级，数字越大优先级越高，在一个实例中主服务器优先级要高于备服务器
    priority 100
    # 虚拟IP地址,可以有多个，每行一个
    virtual_ipaddress {
        192.168.125.245
    }
    track_script {               # Scripts state we monitor
        chk_haproxy
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建完配置，启动 keepalived。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart keepalived.service 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>测试 Keepalived</strong></p><p>在 Master，Backup 节点上，使用 <code>ip addr</code> 命令看下 vip 在哪台机器的 eth0 网卡上。</p><p>默认在 master 主机上，停掉 master 主机的 haproxy 服务，然后在用 <code>ip addr</code> 查看虚拟 ip 在哪个机器上，如果漂移到备份主机上则代表热备生效。</p><p>在开启 master 主机的 haproxy 服务，<code>ip addr</code> 查看虚拟 ip 应该重新漂移回 master 主机上。</p><p>测试服务，使用虚拟 ip 加服务端口号访问 HAProxy 服务。</p><p>至此，高可用的 rabbitmq 集群 和 haproxy 软负载就搭建完成。</p>`,78),t=[l];function c(p,r){return a(),s("div",null,t)}const u=n(i,[["render",c],["__file","docker_rabbitmq.html.vue"]]);export{u as default};
