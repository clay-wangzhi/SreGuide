<template><h1 id="k8s-适配-gpu" tabindex="-1"><a class="header-anchor" href="#k8s-适配-gpu" aria-hidden="true">#</a> k8s 适配 GPU</h1>
<h2 id="gpu-安装步骤" tabindex="-1"><a class="header-anchor" href="#gpu-安装步骤" aria-hidden="true">#</a> GPU 安装步骤</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># centos7 内核升级后   GPU 安装步骤</span>

<span class="token comment"># 1.  加载 新 内核</span>
<span class="token comment"># 查看内核列表</span>
<span class="token function">awk</span> -F<span class="token punctuation">\</span>' <span class="token string">'$1=="menuentry " {print $2}'</span> /etc/grub2.cfg
<span class="token comment"># 指定新内核启动</span>
grub2-set-default <span class="token string">'CentOS Linux (5.4.186-1.el7.elrepo.x86_64) 7 (Core)'</span>
<span class="token function">reboot</span>

<span class="token comment"># 2. 准备GPU驱动安装环境</span>
<span class="token comment"># 卸载原有内核的header与devel模块</span>
yum -y remove kernel-headers kernel-devel
<span class="token comment"># 安装现有内核headers和devel模块（必须，显卡编译需要）</span>
yum --enablerepo<span class="token operator">=</span>elrepo-kernel <span class="token function">install</span> -y kernel-lt-devel-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -r<span class="token variable">)</span></span> kernel-lt-headers-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -r<span class="token variable">)</span></span>
<span class="token comment"># 卸载旧的安装包 cd 目录防止 当前目录有相关安装包，卸载不干净</span>
<span class="token builtin class-name">cd</span> /opt
yum -y remove nvidia*
<span class="token comment"># 安装新版本 gcc ，并使用新版本gcc，注意需要当前会话操作，临时生效</span>
yum <span class="token function">install</span> centos-release-scl -y
yum <span class="token function">install</span> devtoolset-8-gcc* -y
scl <span class="token builtin class-name">enable</span> devtoolset-8 <span class="token function">bash</span>
<span class="token comment"># 安装相关依赖</span>
yum -y <span class="token function">install</span> libglvnd*

<span class="token comment"># 3. 编译安装GPU驱动</span>
<span class="token comment"># 从官网下载 .run 文件，我放在了xxx /home/clay/NVIDIA-Linux-x86_64-510.54.run , 可以直接去服务器拿</span>
<span class="token comment"># 执行安装命令（/usr/src/kernels目录下文件需要安装kernel-devel包后才会出现），具体的安装包与内核路径根据实际情况填写</span>
./NVIDIA-Linux-x86_64-510.54.run --kernel-source-path<span class="token operator">=</span>/usr/src/kernels/5.4.186-1.el7.elrepo.x86_64 -k <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -r<span class="token variable">)</span></span> -s
<span class="token comment"># 查看显卡驱动是否安装成功</span>
nvidia-smi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="nvidia-docker-2-0-安装步骤" tabindex="-1"><a class="header-anchor" href="#nvidia-docker-2-0-安装步骤" aria-hidden="true">#</a> nvidia-docker 2.0 安装步骤</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># nvidia-docker 2.0 安装步骤</span>
<span class="token assign-left variable">distribution</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> $ID$VERSION_ID<span class="token variable">)</span></span>    <span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> -s -L https://nvidia.github.io/libnvidia-container/<span class="token variable">$distribution</span>/libnvidia-container.repo <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/nvidia-container-toolkit.repo
yum-config-manager --enable libnvidia-container-experimental
<span class="token function">sudo</span> yum clean expire-cache
<span class="token function">sudo</span> yum <span class="token function">install</span> -y nvidia-docker2
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
