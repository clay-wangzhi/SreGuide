---
category: Linux
---
# 网络管理

# 网络基础

## 常见的网络接口
eth0			以太网接口
lo				本地环回接口     
br0			桥接接口 （虚拟交换机）
vnet0		    KVM虚拟机网卡接口
## 查看网络信息
```
ip addr //查看IP、掩码、MAC...
ip addr show eth0 //只显示eth0的信息
ip route //查看本机路由表
cat /etc/resolv.conf //查看DNS
```
