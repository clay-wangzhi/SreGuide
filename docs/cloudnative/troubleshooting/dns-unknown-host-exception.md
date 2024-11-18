---
isOriginal: true
category: 排障分析
tag:
  - Kubernetes
---

# 高并发下报错 "java.net.UnknownHostException" 案例分析

## 流量走向

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241118194858350.png)



## 错误日志

**Client 报错**

应用的报错日志为：`java.net.UnknownHostException:`



**代理服务报错**

查看 `Nginx` 的 `access` 、 `error` 日志

```bash
tail -f xxx_dns_error.log
```

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241118193148851.png)

```bash
tail -f stream-test-udp-dns_access.log | awk '$5!=200'
# 无异常
```



查看操作系统日志

```bash
journalctl -f
```

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241118193436883.png)









**DNS 服务端报错**： 无



## 分析

错误关键词 `Operation not permitted`、`nf_conntrack: table full, dropping packet`，问题出现在 代理层，`conntrack table`满了。

查看当前 `nf_conntrack_count` 和 `nf_conntrack_max` 值

```bash
sysctl net.netfilter.nf_conntrack_count
sysctl net.netfilter.nf_conntrack_max
```

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241118194015232.png)



确实满了， 调大呗，每次增加50% ，观察一下，直至有空闲

```bash
# 在 /etc/sysctl.conf 文件中新增一行
net.netfilter.nf_conntrack_max=[新的值]
# 应用
sysctl -p
```



调整完后，再次查看相关日志，发现系统日志无新报错，但是 `Nginx` 的 `access` 、 `error` 日志有新的报错，接着盘他，报错如下：

`error` 日志

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241118195505182.png)

`access` 日志

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241118195648741.png)



## 再分析

错误关键词`Resource temporarily unavailable`，给的不具体啊，一步步排查吧

**检查系统资源限制**：

```bash
# 文件描述符限制
ulimit -n
sysctl fs.file-max
# 查看已使用的文件描述符数量,这个文件显示了三个值：当前打开的文件描述符数、分配的文件描述符数（一般为0），以及系统允许的文件描述符最大值。
cat /proc/sys/fs/file-nr

# 检查进程或线程限制
ulimit -u
cat /etc/security/limits.conf
cat /etc/security/limits.d/20-nproc.conf
cat /proc/sys/kernel/pid_max
cat /proc/sys/kernel/threads-max

# 查看当前线程数
ps -eLf | wc -l
```

以上检查均正常。



**检查网络问题**

因为是 UDP 协议，所以 全连接（`net.core.somaxconn`）、半连接（`net.ipv4.tcp_max_syn_backlog`）、应用 backlog 可以忽略

查看 本地端口范围限制：

```bash
sysctl net.ipv4.ip_local_port_range
# 结果为默认配置：net.ipv4.ip_local_port_range = 32768	60999
```

查看观察当前 UDP 连接数：

```bash
watch -n 0.5 "ss -s | grep -i udp"
```

观察了一会，发现接近 28232 ，又满了，emo了

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241118202020493.png)

再调大呗。

```bash
# 在 /etc/sysctl.conf 文件中新增一行
net.ipv4.ip_local_port_range=1024 65535
# 应用
sysctl -p
```



调整完后，再次观察，应用日志、系统日志，网络均正常， 客户端访问不再报错。

Nice~~



## 总结：

本次高并发下，调整了两个内核参数：
`net.netfilter.nf_conntrack_max` 和 `net.ipv4.ip_local_port_range`



我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/SreGuide  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容

<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240615194414355.png" alt="weixin" style="zoom: 50%;" />