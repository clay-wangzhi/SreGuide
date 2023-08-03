---
order: 11
category: 云原生
tag:
  - Kubernetes
---

# k8s 适配 GPU

## GPU 安装步骤

```bash
# centos7 内核升级后   GPU 安装步骤

# 1.  加载 新 内核
# 查看内核列表
awk -F\' '$1=="menuentry " {print $2}' /etc/grub2.cfg
# 指定新内核启动
grub2-set-default 'CentOS Linux (5.4.186-1.el7.elrepo.x86_64) 7 (Core)'
reboot

# 2. 准备GPU驱动安装环境
# 卸载原有内核的header与devel模块
yum -y remove kernel-headers kernel-devel
# 安装现有内核headers和devel模块（必须，显卡编译需要）
yum --enablerepo=elrepo-kernel install -y kernel-lt-devel-$(uname -r) kernel-lt-headers-$(uname -r)
# 卸载旧的安装包 cd 目录防止 当前目录有相关安装包，卸载不干净
cd /opt
yum -y remove nvidia*
# 安装新版本 gcc ，并使用新版本gcc，注意需要当前会话操作，临时生效
yum install centos-release-scl -y
yum install devtoolset-8-gcc* -y
scl enable devtoolset-8 bash
# 安装相关依赖
yum -y install libglvnd*

# 3. 编译安装GPU驱动
# 从官网下载 .run 文件，我放在了xxx /home/clay/NVIDIA-Linux-x86_64-510.54.run , 可以直接去服务器拿
# 执行安装命令（/usr/src/kernels目录下文件需要安装kernel-devel包后才会出现），具体的安装包与内核路径根据实际情况填写
./NVIDIA-Linux-x86_64-510.54.run --kernel-source-path=/usr/src/kernels/5.4.186-1.el7.elrepo.x86_64 -k $(uname -r) -s
# 查看显卡驱动是否安装成功
nvidia-smi
```

## nvidia-docker 2.0 安装步骤

```bash
# nvidia-docker 2.0 安装步骤
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)    && curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.repo | sudo tee /etc/yum.repos.d/nvidia-container-toolkit.repo
yum-config-manager --enable libnvidia-container-experimental
sudo yum clean expire-cache
sudo yum install -y nvidia-docker2
sudo systemctl restart docker
sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi
```

