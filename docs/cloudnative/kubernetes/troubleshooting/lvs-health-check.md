---
category: 云原生
tag:
  - Kubernetes
---

# lvs 健康检查 k8s apiserver

apiserver前面如果有lvs做高可用，lvs对apiserver做健康检测要注意不能使用tcp check，否则会触发报错

![image-20220930112754483](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220930112754483.png)

改为SSL_GET

```
        SSL_GET {
          url {
          	path /healthz
          	status_code 200      
          }
          connect_timeout 3
          nb_get_retry 3
          delay_before_retry 3
          connect_port 6443
        }
```

