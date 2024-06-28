---
category: 云原生
tag:
  - Kubernetes
---

# 内核版本升级

## 背景

k8s 目前使用的内核 版本为：4.9.220，存在以下bug：

- [CPU 限流](https://mp.weixin.qq.com/s/AJJal8tbcUSbW_IYVA-sEw)
- https://github.com/fho/docker-samba-loop
- [moby/moby#5618](https://github.com/moby/moby/issues/5618)
- [coreos/bugs#254](https://github.com/coreos/bugs/issues/254)
- [无法支持 calico eBPF](https://www.coolops.cn/archives/calico-xia-ru-he-qie-huan-shu-ju-mian-dao-ebpf)

现升级版本为：kernel-lt 5.4.196

## 具体操作步骤

```bash
wget https://mirrors.nju.edu.cn/elrepo/kernel/el7/x86_64/RPMS/kernel-lt-5.4.196-1.el7.elrepo.x86_64.rpm
rpm -ivh kernel-lt-5.4.196-1.el7.elrepo.x86_64.rpm
# 校验文件是否生成
ls /boot/initramfs-5.4.196-1.el7.elrepo.x86_64.img
awk -F\' '$1=="menuentry " {print $2}' /etc/grub2.cfg
grub2-set-default 'CentOS Linux (5.4.196-1.el7.elrepo.x86_64) 7 (Core)'
grub2-editenv list
grub2-mkconfig -o /boot/grub2/grub.cfg
shutdown -r now
```

> :warning:  重新生成的 grub.cfg 文件，要看一下，是否是 /boot/efi/EFI/centos/grub.cfg

## Node节点平滑维护

通常情况下，如果要对K8S集群中的一台Node节点进行平滑维护，如升级或调整配置。正确的操作：

- cordon临时从K8S集群隔离出来，标识为SchedulingDisabled不可调度状态。
- drain排干该节点上的pod资源到其他node节点上。
- 对该节点展开平滑维护操作，如升级或调整配置。
- uncordon恢复，重新回到K8S集群，变回可调度状态。

同时注意：为了确保drain驱逐pod的时候，容器应用服务不中断，必须满足：

- 要驱逐的pod副本数量必须大于1
- 要配置"反亲和策略"，确保被驱逐的pod被调度到不同的Node节点上
- deployment采用滚动更新，设置maxUnavailable为0，maxSurge为1

```bash
# 禁止调度
kubectl cordon node-xxx
# 驱逐 pod
kubectl drain node-xxx --ignore-daemonsets
# 升级完成后,恢复调度
kubectl uncordon node-xxx
```

升级问到的问题

1）pstore: unknown compression: deflate

[vim](https://so.csdn.net/so/search?q=vim&spm=1001.2101.3001.7020) /etc/default/grub
在 GRUB_CMDLINE_LINUX 最后添加 mgag200.modeset=0

```bash
GRUB_CMDLINE_LINUX="crashkernel=auto spectre_v2=retpoline rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet mgag200.modeset=0"
```

然后重新生成grub

grub2-mkconfig -o /boot/efi/EFI/centos/grub.cfg 
2）rpm -ivh 安装某个包时，文件不全

如果安装过程中，安装被中断，要卸载重装，不然安装的一些文件很可能少安装（initramfs）





附录：

选择合适的内核版本取决于你的具体需求。如果你需要最新的功能和硬件支持，并且愿意接受一些实验性或不稳定的风险，可以选择Mainline内核。如果你更关注系统的稳定性和长期支持，并愿意牺牲一些新功能，那么Long-Term内核可能更适合你。无论选择哪个版本，都建议在测试环境中进行验证和评估，以确保满足你的要求。