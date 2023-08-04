import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,a}from"./app-08ceb845.js";const r={},o=a(`<h1 id="容器概述" tabindex="-1"><a class="header-anchor" href="#容器概述" aria-hidden="true">#</a> 容器概述</h1><h2 id="什么是容器-以-docker-为例" tabindex="-1"><a class="header-anchor" href="#什么是容器-以-docker-为例" aria-hidden="true">#</a> 什么是容器(以 Docker 为例)</h2><h3 id="docker-架构" tabindex="-1"><a class="header-anchor" href="#docker-架构" aria-hidden="true">#</a> Docker 架构</h3><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/c8116066bdbf295a7c9fc25b87755dfe.jpg" alt="img"></p><p>Docker 使用 C/S （客户端/服务器）体系的架构，Docker 客户端与 Docker 守护进程（Dockerd）通信，Docker 守护进程负责构建，运行和分发 Docker 容器。Docker 客户端和守护进程可以在同一个系统上运行，也可以将 Docker 客户端连接到远程 Docker 守护进程。Docker 客户端和守护进程使用 REST API 通过 UNIX 套接字或网络接口进行通信。</p><h2 id="底层实现" tabindex="-1"><a class="header-anchor" href="#底层实现" aria-hidden="true">#</a> 底层实现</h2><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/docker-underly.png" alt=""></p><p>Docker 除了<code>容器镜像</code>是革命性的创新，其他的算是新瓶装旧酒</p><p><strong>Namespace 技术则是用来修改进程视图的主要方法</strong>，保证A容器看不到B容器</p><p><strong>Cgroups 技术是用来制造约束的主要手段</strong>，CPU,MEM 等</p><p><strong>UnionFS 技术是联合文件系统，分层镜像实现的基础</strong></p><h3 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> Namespace</h3><p>Linux 的命名空间机制提供了以下几种不同的命名空间</p><table><thead><tr><th style="text-align:left;">Namespace</th><th style="text-align:left;">Flag</th><th style="text-align:left;">Page</th><th style="text-align:left;">Isolates</th></tr></thead><tbody><tr><td style="text-align:left;">Cgroup</td><td style="text-align:left;">CLONE_NEWCGROUP</td><td style="text-align:left;">cgroup_namespaces</td><td style="text-align:left;">Cgroup root directory</td></tr><tr><td style="text-align:left;">IPC</td><td style="text-align:left;">CLONE_NEWIPC</td><td style="text-align:left;">ipc_namespaces</td><td style="text-align:left;">System V IPC,POSIX message queues 隔离进程间通信</td></tr><tr><td style="text-align:left;">Network</td><td style="text-align:left;">CLONE_NEWNET</td><td style="text-align:left;">network_namespaces</td><td style="text-align:left;">Network devices,stacks, ports, etc. 隔离网络资源</td></tr><tr><td style="text-align:left;">Mount</td><td style="text-align:left;">CLONE_NEWNS</td><td style="text-align:left;">mount_namespaces</td><td style="text-align:left;">Mount points 隔离文件系统挂载点</td></tr><tr><td style="text-align:left;">PID</td><td style="text-align:left;">CLONE_NEWPID</td><td style="text-align:left;">pid_namespaces</td><td style="text-align:left;">Process IDs 隔离进程的ID</td></tr><tr><td style="text-align:left;">Time</td><td style="text-align:left;">CLONE_NEWTIME</td><td style="text-align:left;">time_namespaces</td><td style="text-align:left;">Boot and monotonic clocks</td></tr><tr><td style="text-align:left;">User</td><td style="text-align:left;">CLONE_NEWUSER</td><td style="text-align:left;">user_namespaces</td><td style="text-align:left;">User and group IDs 隔离用户和用户组的ID</td></tr><tr><td style="text-align:left;">UTS</td><td style="text-align:left;">CLONE_NEWUTS</td><td style="text-align:left;">uts_namespaces</td><td style="text-align:left;">Hostname and NIS domain name 隔离主机名和域名信息</td></tr></tbody></table><h3 id="cgroup" tabindex="-1"><a class="header-anchor" href="#cgroup" aria-hidden="true">#</a> Cgroup</h3><p>就是限制一个进程组能够使用的资源上限，包括 CPU、内存、磁盘、网络带宽等等。</p><p>在 Linux 中，Cgroups 给用户暴露出来的操作接口是文件系统，即它以文件和目录的方式组织在操作系统的 /sys/fs/cgroup 路径下，可以使用 mount 命令查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mount -t cgroup cgroup on /sys/fs/cgroup/systemd type cgroup (rw,nosuid,nodev,noexec,relatime,xattr,release_agent=/usr/lib/systemd/systemd-cgroups-agent,name=systemd) cgroup on /sys/fs/cgroup/blkio type cgroup (rw,nosuid,nodev,noexec,relatime,blkio) cgroup on /sys/fs/cgroup/cpu,cpuacct type cgroup (rw,nosuid,nodev,noexec,relatime,cpu,cpuacct) cgroup on /sys/fs/cgroup/devices type cgroup (rw,nosuid,nodev,noexec,relatime,devices) cgroup on /sys/fs/cgroup/freezer type cgroup (rw,nosuid,nodev,noexec,relatime,freezer) cgroup on /sys/fs/cgroup/pids type cgroup (rw,nosuid,nodev,noexec,relatime,pids) cgroup on /sys/fs/cgroup/cpuset type cgroup (rw,nosuid,nodev,noexec,relatime,cpuset) cgroup on /sys/fs/cgroup/net_cls,net_prio type cgroup (rw,nosuid,nodev,noexec,relatime,net_cls,net_prio) cgroup on /sys/fs/cgroup/hugetlb type cgroup (rw,nosuid,nodev,noexec,relatime,hugetlb) cgroup on /sys/fs/cgroup/memory type cgroup (rw,nosuid,nodev,noexec,relatime,memory) cgroup on /sys/fs/cgroup/perf_event type cgroup (rw,nosuid,nodev,noexec,relatime,perf_event)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="unionfs" tabindex="-1"><a class="header-anchor" href="#unionfs" aria-hidden="true">#</a> UnionFS</h3><p>镜像就是由这些层一层一层堆叠起来的，镜像中的这些层都是只读的，当我们运行容器的时候，就可以在这些基础层之上添加新的可写层，也就是我们通常说的<code>容器层</code>，对于运行中的容器所做的所有更改（比如写入新文件、修改现有文件、删除文件）都将写入这个容器层。</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/container-layers.jpg" alt="Layers of a container based on the Ubuntu image"></p><p>Docker支持不同的存储驱动，包括 aufs、devicemapper、overlay2、zfs 和 vfs 等，目前在 Docker 中，overlay2 取代了 aufs 成为了推荐的存储驱动。</p><p>由于容器镜像的操作是增量式的，这样每次镜像拉取、推送的内容，比原本多个完整的操作系统的大小要小得多；而共享层的存在，可以使得所有这些容器镜像需要的总空间，也比每个镜像的总和要小。</p><p>核心原理可以总结为：</p><ol><li>启动 Linux Namespace 配置</li><li>设置指定的 Cgroups 参数</li><li>切换进程的根目录（Change Root）</li></ol><p>Namespace构建了四周的围墙（进程隔离），Cgroups构建了受控的天空优先使用阳光雨露（资源限制），Mount namespace与rootfs构建了脚下的大地，这片土地是你熟悉和喜欢的，不管你走到哪里，都可以带着它，就好像你从未离开过家乡，没有丝毫的陌生感（容器的一致性）～</p><h2 id="虚拟机与容器对比" tabindex="-1"><a class="header-anchor" href="#虚拟机与容器对比" aria-hidden="true">#</a> 虚拟机与容器对比</h2><h3 id="部署方式的演进" tabindex="-1"><a class="header-anchor" href="#部署方式的演进" aria-hidden="true">#</a> 部署方式的演进</h3><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/container_evolution.svg" alt="部署演进"></p><p>首先，容器和虚拟机的目的都是隔离资源，保证系统安全，然后是尽量提高资源的利用率。</p><p>虚拟机部署，画出了虚拟机的工作原理。其中，名为 Hypervisor 的软件是虚拟机最主要的部分。它通过<strong>硬件虚拟化功能</strong>，模拟出了运行一个操作系统需要的各种硬件，比如 CPU、内存、I/O 设备等等。然后，它在这些虚拟的硬件上<strong>安装了一个新的操作系统</strong>。</p><p>容器部署，则用一个名为 Container Runtime 的软件替换了 Hypervisor。这也是为什么，很多人会把 Docker 项目称为“轻量级”虚拟化技术的原因，实际上就是把虚拟机的概念套在了容器上。</p><p>更准确的应该说，<strong>容器是一种轻量级的资源隔离技术</strong>，在理解了 Namespace 的工作方式之后，你就会明白，跟真实存在的虚拟机不同，在使用 Docker 的时候，并没有一个真正的“Docker 容器”运行在宿主机里面。Docker 项目帮助用户启动的，还是原来的应用进程，只不过在创建这些进程时，Docker 为它们加上了各种各样的 Namespace 参数。</p><p>这时，这些进程就会觉得自己是各自 <strong>PID Namespace 里的第 1 号进程</strong>，只能看到各自 Mount Namespace 里挂载的目录和文件，只能访问到各自 Network Namespace 里的网络设备，就仿佛运行在一个个“容器”里面，与世隔绝。</p><h3 id="优劣势" tabindex="-1"><a class="header-anchor" href="#优劣势" aria-hidden="true">#</a> 优劣势</h3><p>由于架构的差异，所以在性能、隔离性、敏捷性上虚拟机与容器有较大的差异</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">容器</th><th style="text-align:left;">虚拟机</th></tr></thead><tbody><tr><td style="text-align:left;">性能</td><td style="text-align:left;"><strong>容器只是宿主机上一种特殊的进程</strong>，所以<strong>启动 耗时较短，仅需要 几秒钟</strong>， <strong>单机支持上百容器</strong>， <strong>性能接近原生</strong></td><td style="text-align:left;">虚拟机多一层虚拟化，多了一个新的操作系统， 所以启动 耗时较长，需要 几分钟， 单机支持几十个， 性能弱于原生</td></tr><tr><td style="text-align:left;">敏捷</td><td style="text-align:left;"><strong>build once，run anywhere</strong> 一致的运行环境 更轻松的迁移、维护和扩展</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">隔离性</td><td style="text-align:left;">共享宿主机内核 /proc 文件系统不了解 Cgroups 限制的存在，容器内 top、free 等命令不能正确识别资源限制 k8s 容器编排 不支持 I/O 隔离限制 不支持时间调整</td><td style="text-align:left;">新的操作系统，可以有自己的内核版本 隔离性较强</td></tr></tbody></table>`,37),n=[o];function l(d,c){return e(),s("div",null,n)}const g=t(r,[["render",l],["__file","container-overview.html.vue"]]);export{g as default};
