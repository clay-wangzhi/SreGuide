<template><div><h1 id="内核参数调优" tabindex="-1"><a class="header-anchor" href="#内核参数调优" aria-hidden="true">#</a> 内核参数调优</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>TCP 三次握手中需要调优的内核参数
	SYN 半连接队列 							net.ipv4.tcp_max_syn_backlog
	半连接队列满时 开启syncookies 			net.ipv4.tcp_syncookies = 1

	全连接队列 大小取的 min(somaxconn, backlog)最小值，所以调整两个参数
	net.core.somaxconn net.core.somaxconn=65535
	nginx配置文件调整 listen 80 backlog=8192

	tcp_synack_retries 值调小
	开始 TCP Fast Open,减少TCP建立连接的时延
	echo 3 > /proc/sys/net/ipv4/tcp_fastopen

TCP 四次挥手中需要调优的内核参数
	TIME_WAIT 状态的连接数量，会占用一定资源 net.ipv4.tcp_max_tw_buckets = 6000
	开启端口复用，被 TIME_WAIT 状态占用的端口，还能用到新建的连接中 net.ipv4.tcp_tw_reuse=1
	减小FIN_WAIT2 状态的参数 net.ipv4.tcp_fin_timeout=15
	增大本地端口的范围，这样就可以支持更多连接，提高整体的并发能力。 net.ipv4.ip_local_port_range="1024 65535"
	
数据传输优化
	启用窗口扩大因子功能，net.ipv4.tcp_window_scaling = 1
	调整发送缓冲区 net.ipv4.tcp_rmem = 4096 87380 4194304
	调整接收缓冲区 net.ipv4.tcp_wmem = 4096 65536 4194304
	调整内存范围 net.ipv4.tcp_mem = 524288 699050 1048576

	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


