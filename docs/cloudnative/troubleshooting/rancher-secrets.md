---
isOriginal: true
category: 云原生
tag:
  - Kubernetes
  - 故障排查
---

# 镜像仓库凭证自动更新问题

问题：镜像仓库认证 secret 创建后，被 rancher 更新为 旧密码


解决方式：删除 项目id 相对应的namespace 下的 secret，停止自动同步更新


原因：之前 创建 镜像仓库凭证 是通过 rancher UI 创建，作用域为 项目下所有命令空间


排查思路：

1. 查看 secrets 更新的时间，确认更新 agent 是哪里，确认更新时间，从 elk 查询 apiserver 审计日志，查看上下文操作的api记录
2. 创建新的secret（作用域相同），进行复现，查看 apiserver审计日志，进行验证
