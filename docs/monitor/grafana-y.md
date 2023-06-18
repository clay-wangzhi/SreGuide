---
category: 监控
date: 2020-06-02
tag:
  - grafana
---

# Grafana Y轴设置

Y**轴要有负数如何设置**

grafana网络总图中，Y轴要有负数的话，需要设置，`Series overrides` --> `alias or regex`，Outing 为 `Transform：negative-Y`

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200323205311303.png)