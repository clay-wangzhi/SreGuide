---
date: 2020-03-20
category: web中间件
tag:
  - Nginx
---

# 4. 内核参数优化

## linux内核参数优化（网络模块）

在Linux下调整内核参数，可以直接编辑配置文件`/etc/sysctl.conf`，然后执行`sysctl -p`命令生效

文件内容如下：

```
net.ipv4.ip_forward = 1
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.default.accept_source_route = 0
kernel.sysrq = 0
kernel.core_uses_pid = 1
kernel.msgmnb = 65536
kernel.msgmax = 65536
kernel.shmmax = 68719476736
kernel.shmall = 268435456
net.core.wmem_default = 8388608
net.core.rmem_default = 8388608
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.core.somaxconn = 262144
net.core.netdev_max_backlog = 262144
net.ipv4.tcp_max_orphans = 262144
net.ipv4.tcp_max_tw_buckets = 6000
net.ipv4.tcp_tw_recycle = 0
net.ipv4.tcp_timestamps = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 30000
net.ipv4.tcp_syn_retries = 1
net.ipv4.tcp_synack_retries = 1
net.ipv4.ip_local_port_range = 1024 65000
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_keepalive_time = 30
net.ipv4.tcp_sack = 1
net.ipv4.tcp_window_scaling = 1
net.ipv4.tcp_rmem = 4096 87380 4194304
net.ipv4.tcp_wmem = 4096 65536 4194304
net.ipv4.tcp_mem = 524288 699050 1048576
vm.swappiness = 0
vm.min_free_kbytes = 65536
```

* net.core.somaxconn = 262144

  web应用中listen函数的backlog默认会给我们内核参数的net.core.somaxconn限制到128，而nginx定义的NGX_LISTEN_BACKLOG默认为511，所以有必要调整这个值。

* net.core.netdev_max_backlog = 262144

  每个网络接口接收数据包的速率比内核处理这些包的速率快时，允许送到队列的数据包的最大数目。

* net.ipv4.tcp_max_orphans = 262144

  系统中最多有多少个TCP套接字不被关联到任何一个用户文件句柄上。如果超过这个数字，孤儿连接将即刻被复位并打印出警告信息。这个限制仅仅是为了防止简单的DoS攻击，不能过分依靠它或者人为地减小这个值，更应该增加这个值(如果增加了内存之后)。

  

* net.ipv4.tcp_max_tw_buckets = 6000

  对于tcp连接，服务端和客户端通信完后状态变为timewait，假如某台服务器非常忙，连接数特别多的话，那么这个timewait数量就会越来越大。

  毕竟它也是会占用一定的资源，所以应该有一个最大值，当超过这个值，系统就会删除最早的连接，这样始终保持在一个数量级。
  这个数值就是由net.ipv4.tcp_max_tw_buckets这个参数来决定的。

  CentOS7.6版本，默认为16384，可以使用sysctl -a |grep tw_buckets来查看它的值，可以适当把它调低，比如调整到6000，毕竟这个状态的连接太多也是会消耗资源的。

  但不要把它调到几十、几百这样，因为这种状态的tcp连接也是有用的，如果同样的客户端再次和服务端通信，就不用再次建立新的连接了，用这个旧的通道，省时省力。

* net.ipv4.tcp_tw_recycle = 0

  启用TIME-WAIT状态sockets快速回收功能;用于快速减少在TIME-WAIT状态TCP连接数。1表示启用;0表示关闭。但是要特别留意的是：这个选项一般不推荐启用，因为在NAT(Network Address Translation)网络下，会导致大量的TCP连接建立错误，从而引起网站访问故障。

  实际上，net.ipv4.tcp_tw_recycle功能的开启，要需要net.ipv4.tcp_timestamps（一般系统默认是开启这个功能的）这个开关开启后才有效果；
  当tcp_tw_recycle 开启时（tcp_timestamps 同时开启，快速回收 socket 的效果达到），对于位于NAT设备后面的 Client来说，是一场灾难！
  会导致到NAT设备后面的Client连接Server不稳定（有的 Client 能连接 server，有的 Client 不能连接 server）。

* net.ipv4.tcp_tw_reuse = 1

  开启重用功能，允许将TIME-WAIT状态的sockets重新用于新的TCP连接。这个功能启用是安全的，一般不要去改动！

* net.ipv4.tcp_syncookies = 1

  tcp三次握手中，客户端向服务端发起syn请求，服务端收到后，也会向客户端发起syn请求同时连带ack确认，
  假如客户端发送请求后直接断开和服务端的连接，不接收服务端发起的这个请求，服务端会重试多次，
  这个重试的过程会持续一段时间（通常高于30s），当这种状态的连接数量非常大时，服务器会消耗很大的资源，从而造成瘫痪，
  正常的连接进不来，这种恶意的半连接行为其实叫做syn flood攻击。
  设置为1，是开启SYN Cookies，开启后可以避免发生上述的syn flood攻击。
  开启该参数后，服务端接收客户端的ack后，再向客户端发送ack+syn之前会要求client在短时间内回应一个序号，
  如果客户端不能提供序号或者提供的序号不对则认为该客户端不合法，于是不会发ack+syn给客户端，更涉及不到重试。

* net.ipv4.tcp_max_syn_backlog = 30000

  该参数定义系统能接受的最大半连接状态的tcp连接数。客户端向服务端发送了syn包，服务端收到后，会记录一下，
  该参数决定最多能记录几个这样的连接。在CentOS7，默认是256，当有syn flood攻击时，这个数值太小则很容易导致服务器瘫痪，
  实际上此时服务器并没有消耗太多资源（cpu、内存等），所以可以适当调大它，比如调整到30000。

* net.ipv4.tcp_syn_retries = 1

  该参数适用于客户端，它定义发起syn的最大重试次数，默认为6，建议改为1。

* net.ipv4.tcp_synack_retries = 1

  该参数适用于服务端，它定义发起syn+ack的最大重试次数，默认为5，建议改为1，可以适当预防syn flood攻击。

* net.ipv4.ip_local_port_range = 1024 65000

  该参数定义端口范围，系统默认保留端口为1024及以下，以上部分为自定义端口。这个参数适用于客户端，
  当客户端和服务端建立连接时，比如说访问服务端的80端口，客户端随机开启了一个端口和服务端发起连接，
  这个参数定义随机端口的范围。默认为32768 61000，建议调整为1025 65000。

* net.ipv4.tcp_fin_timeout = 30

  如果套接字由本端要求关闭，这个参数 决定了它保持在FIN-WAIT-2状态的时间。对端可以出错并永远不关闭连接，甚至意外当机。缺省值是60秒。2.2 内核的通常值是180秒，你可以按这个设置，但要记住的是，即使你的机器是一个轻载的WEB服务器，也有因为大量的死套接字而内存溢出的风险，FIN- WAIT-2的危险性比FIN-WAIT-1要小，因为它最多只能吃掉1.5K内存，但是它们的生存期长些。

* net.ipv4.tcp_keepalive_time = 30

  tcp连接状态里，有一个是established状态，只有在这个状态下，客户端和服务端才能通信。正常情况下，当通信完毕，
  客户端或服务端会告诉对方要关闭连接，此时状态就会变为timewait，如果客户端没有告诉服务端，
  并且服务端也没有告诉客户端关闭的话（例如，客户端那边断网了），此时需要该参数来判定。
  比如客户端已经断网了，但服务端上本次连接的状态依然是established，服务端为了确认客户端是否断网，
  就需要每隔一段时间去发一个探测包去确认一下看看对方是否在线。这个时间就由该参数决定。它的默认值为7200秒，建议设置为30秒。
