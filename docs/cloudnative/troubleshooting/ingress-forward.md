---
isOriginal: true
category: 云原生
tag:
  - Kubernetes
---

# 故障排查 之 单点登录跳转失败(Ingress 相关)

## 故障现象

单点登录失败，但是其他接口正常



## 根因分析

问题要点是：单点登录失败，看代码是 request 和 response 的 RedirectUri 不一样导致的。

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241106201212000.png)



目前的南北流量架构为：

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241106205830482.png)



**二分法排查问题**：去掉 外层 Nginx， 或者去掉 K8s Ingress , 故障均可恢复，那么问题就出现在转发过程。



**使用 arthas 排查问题**：

```bash
# 进入 Pod 执行如下命令：
curl -O https://arthas.aliyun.com/arthas-boot.jar
java -jar arthas-boot.jar
watch org.springframework.security.oauth2.client.authentication.OAuth2LoginAuthenticationProvider authenticate 'params[0]' -x 4
```

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241106203055523.png)

可以证实是 `redirectUri` 不一致导致的。



**抓包排查问题**：

```bash
# 登录 Pod 所在 Node 节点，抓包
podName=xxx
nsenter -t $(nerdctl ps | grep ${podName} |grep -v pause |awk '{print $1}' | xargs nerdctl inspect -f {{.State.Pid}}) -n tcpdump -i eth0 -nne -C 100 -W 30 -w /tmp/container.pcap
```

将包传到本地，通过 wireshark 进行分析

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241106200836425.png)

重点看 **X-Forwarded** 信息，发现 Scheme 是 http，Port 是 80 ， 拿的 K8s  Ingress 的值。

所以 K8s  Ingress 没有使用上层的 X-Forwarded 信息。

改进：如果 Nginx 在其他7层代理或负载均衡后面，当期望Nginx将 `X-Forwarded-*` 的头信息传递给后端服务时，则需要将此参数设为 true

```
  use-forwarded-headers: "true"
```

改完，再抓包验证：

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241106204434600.png)



发现还是不行，Scheme 是 https，对了，但是 Port 还是 80， 也就意味着，外层 Nginx，没有把 Port 传下来。

搜索 Ingress Issue ，发现有类似的问题：Problem with HTTPS, CloudFlare and X-Forwarded-Port header  https://github.com/kubernetes/ingress-nginx/issues/6358

他使用的是 CloudFlare 产品，不支持加 X-Forwarded-Port header ， 我们用的自建的，可以直接增加一个 header，在外层 Nginx 中新增

```bash
    proxy_set_header X-Forwarded-Port $server_port;
```

**问题解决， enjoy**







## 总结问题解决方法

解决方法一：如上过程

1）如果 Nginx 在其他7层代理或负载均衡后面，当期望Nginx将 `X-Forwarded-*` 的头信息传递给后端服务时，Ingress 新增参数，`use-forwarded-headers: "true"`。

2）外层 Nginx 也配置好 `X-Forwarded-Port`等。



解决方法二： 

  ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20241106205159434.png)

这里的 upstream 换成  https://$ip:443   和 外层保持一致即可



解决方法三：

如果像这个 issue https://github.com/kubernetes/ingress-nginx/issues/6358  这样， 外层 Nginx， 和 K8s Ingress 都不方便改的情况下，只能修改 Ingress 的模版了，修改模版`/etc/nginx/template` 后，重新打镜像使用。



我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/SreGuide  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容

<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240615194414355.png" alt="weixin" style="zoom: 50%;" />





