---
isOriginal: true
order: 2
category: 云原生
tag:
  - 容器
---

# 容器概述

## 什么是容器(以 Docker 为例)

### Docker 架构

![img](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/c8116066bdbf295a7c9fc25b87755dfe.jpg)

Docker 使用 C/S （客户端/服务器）体系的架构，Docker 客户端与 Docker 守护进程（Dockerd）通信，Docker 守护进程负责构建，运行和分发 Docker 容器。Docker 客户端和守护进程可以在同一个系统上运行，也可以将 Docker 客户端连接到远程 Docker 守护进程。Docker 客户端和守护进程使用 REST API 通过 UNIX 套接字或网络接口进行通信。

## 底层实现

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/docker-underly.png)

Docker 除了`容器镜像`是革命性的创新，其他的算是新瓶装旧酒

**Namespace 技术则是用来修改进程视图的主要方法**，保证A容器看不到B容器

**Cgroups 技术是用来制造约束的主要手段**，CPU,MEM 等

**UnionFS 技术是联合文件系统，分层镜像实现的基础**







### Namespace

Linux 的命名空间机制提供了以下几种不同的命名空间

| Namespace | Flag            | Page               | Isolates                                          |
| :-------- | :-------------- | :----------------- | :------------------------------------------------ |
| Cgroup    | CLONE_NEWCGROUP | cgroup_namespaces  | Cgroup root directory                             |
| IPC       | CLONE_NEWIPC    | ipc_namespaces     | System V IPC,POSIX message queues 隔离进程间通信  |
| Network   | CLONE_NEWNET    | network_namespaces | Network devices,stacks, ports, etc. 隔离网络资源  |
| Mount     | CLONE_NEWNS     | mount_namespaces   | Mount points 隔离文件系统挂载点                   |
| PID       | CLONE_NEWPID    | pid_namespaces     | Process IDs 隔离进程的ID                          |
| Time      | CLONE_NEWTIME   | time_namespaces    | Boot and monotonic clocks                         |
| User      | CLONE_NEWUSER   | user_namespaces    | User and group IDs 隔离用户和用户组的ID           |
| UTS       | CLONE_NEWUTS    | uts_namespaces     | Hostname and NIS domain name 隔离主机名和域名信息 |

### Cgroup

就是限制一个进程组能够使用的资源上限，包括 CPU、内存、磁盘、网络带宽等等。

在 Linux 中，Cgroups 给用户暴露出来的操作接口是文件系统，即它以文件和目录的方式组织在操作系统的 /sys/fs/cgroup 路径下，可以使用 mount 命令查看

```
# mount -t cgroup cgroup on /sys/fs/cgroup/systemd type cgroup (rw,nosuid,nodev,noexec,relatime,xattr,release_agent=/usr/lib/systemd/systemd-cgroups-agent,name=systemd) cgroup on /sys/fs/cgroup/blkio type cgroup (rw,nosuid,nodev,noexec,relatime,blkio) cgroup on /sys/fs/cgroup/cpu,cpuacct type cgroup (rw,nosuid,nodev,noexec,relatime,cpu,cpuacct) cgroup on /sys/fs/cgroup/devices type cgroup (rw,nosuid,nodev,noexec,relatime,devices) cgroup on /sys/fs/cgroup/freezer type cgroup (rw,nosuid,nodev,noexec,relatime,freezer) cgroup on /sys/fs/cgroup/pids type cgroup (rw,nosuid,nodev,noexec,relatime,pids) cgroup on /sys/fs/cgroup/cpuset type cgroup (rw,nosuid,nodev,noexec,relatime,cpuset) cgroup on /sys/fs/cgroup/net_cls,net_prio type cgroup (rw,nosuid,nodev,noexec,relatime,net_cls,net_prio) cgroup on /sys/fs/cgroup/hugetlb type cgroup (rw,nosuid,nodev,noexec,relatime,hugetlb) cgroup on /sys/fs/cgroup/memory type cgroup (rw,nosuid,nodev,noexec,relatime,memory) cgroup on /sys/fs/cgroup/perf_event type cgroup (rw,nosuid,nodev,noexec,relatime,perf_event)
```

### UnionFS

镜像就是由这些层一层一层堆叠起来的，镜像中的这些层都是只读的，当我们运行容器的时候，就可以在这些基础层之上添加新的可写层，也就是我们通常说的`容器层`，对于运行中的容器所做的所有更改（比如写入新文件、修改现有文件、删除文件）都将写入这个容器层。

![Layers of a container based on the Ubuntu image](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/container-layers.jpg)

Docker支持不同的存储驱动，包括 aufs、devicemapper、overlay2、zfs 和 vfs 等，目前在 Docker 中，overlay2 取代了 aufs 成为了推荐的存储驱动。

由于容器镜像的操作是增量式的，这样每次镜像拉取、推送的内容，比原本多个完整的操作系统的大小要小得多；而共享层的存在，可以使得所有这些容器镜像需要的总空间，也比每个镜像的总和要小。



核心原理可以总结为：

1. 启动 Linux Namespace 配置
2. 设置指定的 Cgroups 参数
3. 切换进程的根目录（Change Root）

Namespace构建了四周的围墙（进程隔离），Cgroups构建了受控的天空优先使用阳光雨露（资源限制），Mount namespace与rootfs构建了脚下的大地，这片土地是你熟悉和喜欢的，不管你走到哪里，都可以带着它，就好像你从未离开过家乡，没有丝毫的陌生感（容器的一致性）～

## 虚拟机与容器对比

### 部署方式的演进

![部署演进](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/container_evolution.svg)

首先，容器和虚拟机的目的都是隔离资源，保证系统安全，然后是尽量提高资源的利用率。

虚拟机部署，画出了虚拟机的工作原理。其中，名为 Hypervisor 的软件是虚拟机最主要的部分。它通过**硬件虚拟化功能**，模拟出了运行一个操作系统需要的各种硬件，比如 CPU、内存、I/O 设备等等。然后，它在这些虚拟的硬件上**安装了一个新的操作系统**。

容器部署，则用一个名为 Container Runtime 的软件替换了 Hypervisor。这也是为什么，很多人会把 Docker 项目称为“轻量级”虚拟化技术的原因，实际上就是把虚拟机的概念套在了容器上。

更准确的应该说，**容器是一种轻量级的资源隔离技术**，在理解了 Namespace 的工作方式之后，你就会明白，跟真实存在的虚拟机不同，在使用 Docker 的时候，并没有一个真正的“Docker 容器”运行在宿主机里面。Docker 项目帮助用户启动的，还是原来的应用进程，只不过在创建这些进程时，Docker 为它们加上了各种各样的 Namespace 参数。

这时，这些进程就会觉得自己是各自 **PID Namespace 里的第 1 号进程**，只能看到各自 Mount Namespace 里挂载的目录和文件，只能访问到各自 Network Namespace 里的网络设备，就仿佛运行在一个个“容器”里面，与世隔绝。



### 优劣势

由于架构的差异，所以在性能、隔离性、敏捷性上虚拟机与容器有较大的差异

|        | 容器                                                         | 虚拟机                                                       |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 性能   | **容器只是宿主机上一种特殊的进程**，所以**启动 耗时较短，仅需要 几秒钟**， **单机支持上百容器**， **性能接近原生** | 虚拟机多一层虚拟化，多了一个新的操作系统， 所以启动 耗时较长，需要 几分钟， 单机支持几十个， 性能弱于原生 |
| 敏捷   | **build once，run anywhere** 一致的运行环境 更轻松的迁移、维护和扩展 |                                                              |
| 隔离性 | 共享宿主机内核 /proc 文件系统不了解 Cgroups 限制的存在，容器内 top、free 等命令不能正确识别资源限制 k8s 容器编排 不支持 I/O 隔离限制 不支持时间调整 | 新的操作系统，可以有自己的内核版本 隔离性较强                |
