---
category: 云原生
tag:
  - Kubernetes
---

# 快捷命令

* 快速查找 k8s pod 和 service 的 CIDR

  ```bash
  # Get Services IPs range
  kubectl cluster-info dump | grep -m 1 service-cluster-ip-range
  # Get Pods IPs range
  kubectl cluster-info dump | grep -m 1 cluster-cidr
  ```

  