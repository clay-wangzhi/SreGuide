import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-1a5afd71.js";const l={},i=e(`<h1 id="k8s-适配-gpu" tabindex="-1"><a class="header-anchor" href="#k8s-适配-gpu" aria-hidden="true">#</a> k8s 适配 GPU</h1><h2 id="gpu-安装步骤" tabindex="-1"><a class="header-anchor" href="#gpu-安装步骤" aria-hidden="true">#</a> GPU 安装步骤</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># centos7 内核升级后   GPU 安装步骤</span>

<span class="token comment"># 1.  加载 新 内核</span>
<span class="token comment"># 查看内核列表</span>
<span class="token function">awk</span> -F<span class="token punctuation">\\</span>&#39; <span class="token string">&#39;$1==&quot;menuentry &quot; {print $2}&#39;</span> /etc/grub2.cfg
<span class="token comment"># 指定新内核启动</span>
grub2-set-default <span class="token string">&#39;CentOS Linux (5.4.186-1.el7.elrepo.x86_64) 7 (Core)&#39;</span>
<span class="token function">reboot</span>

<span class="token comment"># 2. 准备GPU驱动安装环境</span>
<span class="token comment"># 卸载原有内核的header与devel模块</span>
yum <span class="token parameter variable">-y</span> remove kernel-headers kernel-devel
<span class="token comment"># 安装现有内核headers和devel模块（必须，显卡编译需要）</span>
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>elrepo-kernel <span class="token function">install</span> <span class="token parameter variable">-y</span> kernel-lt-devel-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-r</span><span class="token variable">)</span></span> kernel-lt-headers-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-r</span><span class="token variable">)</span></span>
<span class="token comment"># 卸载旧的安装包 cd 目录防止 当前目录有相关安装包，卸载不干净</span>
<span class="token builtin class-name">cd</span> /opt
yum <span class="token parameter variable">-y</span> remove nvidia*
<span class="token comment"># 安装新版本 gcc ，并使用新版本gcc，注意需要当前会话操作，临时生效</span>
yum <span class="token function">install</span> centos-release-scl <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> devtoolset-8-gcc* <span class="token parameter variable">-y</span>
scl <span class="token builtin class-name">enable</span> devtoolset-8 <span class="token function">bash</span>
<span class="token comment"># 安装相关依赖</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> libglvnd*

<span class="token comment"># 3. 编译安装GPU驱动</span>
<span class="token comment"># 从官网下载 .run 文件，我放在了xxx /home/clay/NVIDIA-Linux-x86_64-510.54.run , 可以直接去服务器拿</span>
<span class="token comment"># 执行安装命令（/usr/src/kernels目录下文件需要安装kernel-devel包后才会出现），具体的安装包与内核路径根据实际情况填写</span>
./NVIDIA-Linux-x86_64-510.54.run --kernel-source-path<span class="token operator">=</span>/usr/src/kernels/5.4.186-1.el7.elrepo.x86_64 <span class="token parameter variable">-k</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-r</span><span class="token variable">)</span></span> <span class="token parameter variable">-s</span>
<span class="token comment"># 查看显卡驱动是否安装成功</span>
nvidia-smi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nvidia-docker-2-0-安装步骤" tabindex="-1"><a class="header-anchor" href="#nvidia-docker-2-0-安装步骤" aria-hidden="true">#</a> nvidia-docker 2.0 安装步骤</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nvidia-docker 2.0 安装步骤</span>
<span class="token assign-left variable">distribution</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> $ID$VERSION_ID<span class="token variable">)</span></span>    <span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-L</span> https://nvidia.github.io/libnvidia-container/<span class="token variable">$distribution</span>/libnvidia-container.repo <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/nvidia-container-toolkit.repo
yum-config-manager <span class="token parameter variable">--enable</span> libnvidia-container-experimental
<span class="token function">sudo</span> yum clean expire-cache
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nvidia-docker2
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">--gpus</span> all nvidia/cuda:11.0-base nvidia-smi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[i];function t(r,p){return a(),s("div",null,c)}const v=n(l,[["render",t],["__file","k8s-gpu.html.vue"]]);export{v as default};
