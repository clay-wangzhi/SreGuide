<template><h1 id="内核版本升级" tabindex="-1"><a class="header-anchor" href="#内核版本升级" aria-hidden="true">#</a> 内核版本升级</h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<p>k8s 目前使用的内核 版本为：4.9.220，存在以下bug：</p>
<ul>
<li><a href="https://mp.weixin.qq.com/s/AJJal8tbcUSbW_IYVA-sEw" target="_blank" rel="noopener noreferrer">CPU 限流<ExternalLinkIcon/></a></li>
<li>https://github.com/fho/docker-samba-loop</li>
<li><a href="https://github.com/moby/moby/issues/5618" target="_blank" rel="noopener noreferrer">moby/moby#5618<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/coreos/bugs/issues/254" target="_blank" rel="noopener noreferrer">coreos/bugs#254<ExternalLinkIcon/></a></li>
<li><a href="https://www.coolops.cn/archives/calico-xia-ru-he-qie-huan-shu-ju-mian-dao-ebpf" target="_blank" rel="noopener noreferrer">无法支持 calico eBPF<ExternalLinkIcon/></a></li>
</ul>
<p>现升级版本为：kernel-lt 5.4.196</p>
<h2 id="具体操作步骤" tabindex="-1"><a class="header-anchor" href="#具体操作步骤" aria-hidden="true">#</a> 具体操作步骤</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> https://mirrors.nju.edu.cn/elrepo/kernel/el7/x86_64/RPMS/kernel-lt-5.4.196-1.el7.elrepo.x86_64.rpm
<span class="token function">rpm</span> -ivh kernel-lt-5.4.196-1.el7.elrepo.x86_64.rpm
<span class="token comment"># 校验文件是否生成</span>
<span class="token function">ls</span> /boot/initramfs-5.4.196-1.el7.elrepo.x86_64.img
<span class="token function">awk</span> -F<span class="token punctuation">\</span>' <span class="token string">'$1=="menuentry " {print $2}'</span> /etc/grub2.cfg
grub2-set-default <span class="token string">'CentOS Linux (5.4.196-1.el7.elrepo.x86_64) 7 (Core)'</span>
grub2-editenv list
grub2-mkconfig -o /boot/grub2/grub.cfg
<span class="token function">shutdown</span> -r now
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote>
<p>⚠️  重新生成的 grub.cfg 文件，要看一下，是否是 /boot/efi/EFI/centos/grub.cfg</p>
</blockquote>
<h2 id="node节点平滑维护" tabindex="-1"><a class="header-anchor" href="#node节点平滑维护" aria-hidden="true">#</a> Node节点平滑维护</h2>
<p>通常情况下，如果要对K8S集群中的一台Node节点进行平滑维护，如升级或调整配置。正确的操作：</p>
<ul>
<li>cordon临时从K8S集群隔离出来，标识为SchedulingDisabled不可调度状态。</li>
<li>drain排干该节点上的pod资源到其他node节点上。</li>
<li>对该节点展开平滑维护操作，如升级或调整配置。</li>
<li>uncordon恢复，重新回到K8S集群，变回可调度状态。</li>
</ul>
<p>同时注意：为了确保drain驱逐pod的时候，容器应用服务不中断，必须满足：</p>
<ul>
<li>要驱逐的pod副本数量必须大于1</li>
<li>要配置&quot;反亲和策略&quot;，确保被驱逐的pod被调度到不同的Node节点上</li>
<li>deployment采用滚动更新，设置maxUnavailable为0，maxSurge为1</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 禁止调度</span>
kubectl cordon node-xxx
<span class="token comment"># 驱逐 pod</span>
kubectl drain node-xxx --ignore-daemonsets
<span class="token comment"># 升级完成后,恢复调度</span>
kubectl uncordon node-xxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>升级问到的问题</p>
<p>1）pstore: unknown compression: deflate</p>
<p><a href="https://so.csdn.net/so/search?q=vim&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">vim<ExternalLinkIcon/></a> /etc/default/grub
在 GRUB_CMDLINE_LINUX 最后添加 mgag200.modeset=0</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">GRUB_CMDLINE_LINUX</span><span class="token operator">=</span><span class="token string">"crashkernel=auto spectre_v2=retpoline rd.lvm.lv=centos/root rd.lvm.lv=centos/swap rhgb quiet mgag200.modeset=0"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后重新生成grub</p>
<p>grub2-mkconfig -o /boot/efi/EFI/centos/grub.cfg
2）rpm -ivh 安装某个包时，文件不全</p>
<p>如果安装过程中，安装被中断，要卸载重装，不然安装的一些文件很可能少安装（initramfs）</p>
</template>
