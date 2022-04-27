<template><h1 id="使用-kubeasz-安装-kubernetes" tabindex="-1"><a class="header-anchor" href="#使用-kubeasz-安装-kubernetes" aria-hidden="true">#</a> 使用 kubeasz 安装 kubernetes</h1>
<blockquote>
<p>github 地址：https://github.com/easzlab/kubeasz</p>
</blockquote>
<p>项目致力于提供快速部署高可用<code>k8s</code>集群的工具, 同时也努力成为<code>k8s</code>实践、使用的参考书；基于二进制方式部署和利用<code>ansible-playbook</code>实现自动化；既提供一键安装脚本, 也可以根据<code>安装指南</code>分步执行安装各个组件。</p>
<ul>
<li><strong>集群特性</strong> <code>TLS</code>双向认证、<code>RBAC</code>授权、<a href="https://github.com/easzlab/kubeasz/blob/master/docs/setup/00-planning_and_overall_intro.md#ha-architecture" target="_blank" rel="noopener noreferrer">多Master高可用<ExternalLinkIcon/></a>、支持<code>Network Policy</code>、备份恢复、<a href="https://github.com/easzlab/kubeasz/blob/master/docs/setup/offline_install.md" target="_blank" rel="noopener noreferrer">离线安装<ExternalLinkIcon/></a></li>
<li><strong>集群版本</strong> kubernetes v1.18, v1.19, v1.20, v1.21</li>
<li><strong>操作系统</strong> CentOS/RedHat 7, Debian 9/10, Ubuntu 16.04/18.04/20.04</li>
<li><strong>运行时</strong> docker 19.03.x, 20.10.x <a href="https://github.com/easzlab/kubeasz/blob/master/docs/setup/containerd.md" target="_blank" rel="noopener noreferrer">containerd<ExternalLinkIcon/></a> v1.4.4</li>
<li><strong>网络</strong> <a href="https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/calico.md" target="_blank" rel="noopener noreferrer">calico<ExternalLinkIcon/></a>, <a href="https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/cilium.md" target="_blank" rel="noopener noreferrer">cilium<ExternalLinkIcon/></a>, <a href="https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/flannel.md" target="_blank" rel="noopener noreferrer">flannel<ExternalLinkIcon/></a>, <a href="https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/kube-ovn.md" target="_blank" rel="noopener noreferrer">kube-ovn<ExternalLinkIcon/></a>, <a href="https://github.com/easzlab/kubeasz/blob/master/docs/setup/network-plugin/kube-router.md" target="_blank" rel="noopener noreferrer">kube-router<ExternalLinkIcon/></a></li>
</ul>
<h2 id="集群规划和基础参数设定" tabindex="-1"><a class="header-anchor" href="#集群规划和基础参数设定" aria-hidden="true">#</a> 集群规划和基础参数设定</h2>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/ha-2x.gif" alt="" loading="lazy"></p>
<blockquote>
<p>⚠️ 注意：</p>
<ul>
<li>时间同步</li>
<li>系统干净</li>
<li>新的稳定内核</li>
<li>worker 节点 <code>/var/lib/docker/</code>、<code>/var/lib/kubelet</code> 目录磁盘空间要大一些</li>
</ul>
</blockquote>
<h2 id="部署步骤" tabindex="-1"><a class="header-anchor" href="#部署步骤" aria-hidden="true">#</a> 部署步骤</h2>
<h3 id="_1-在部署节点安装ansible及准备ssh免密登陆" tabindex="-1"><a class="header-anchor" href="#_1-在部署节点安装ansible及准备ssh免密登陆" aria-hidden="true">#</a> 1. 在部署节点安装ansible及准备ssh免密登陆</h3>
<ul>
<li>1.1 安装ansible</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 注意pip 21.0以后不再支持python2和python3.5，需要如下安装</span>
<span class="token comment"># To install pip for Python 2.7 install it from https://bootstrap.pypa.io/2.7/ :</span>
<span class="token function">curl</span> -O https://bootstrap.pypa.io/pip/2.7/get-pip.py
python get-pip.py
python -m pip <span class="token function">install</span> --upgrade <span class="token string">"pip &lt; 21.0"</span>
 
<span class="token comment"># pip安装ansible(国内如果安装太慢可以直接用pip阿里云加速)</span>
pip <span class="token function">install</span> ansible -i https://mirrors.aliyun.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>1.2 在ansible控制端配置免密码登录</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen -t rsa -b <span class="token number">2048</span> -N <span class="token string">''</span> -f ~/.ssh/id_rsa

ssh-copy-id <span class="token variable">$IPs</span> <span class="token comment">#$IPs为所有节点地址包括自身，按照提示输入yes 和root密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-在部署节点编排k8s安装" tabindex="-1"><a class="header-anchor" href="#_2-在部署节点编排k8s安装" aria-hidden="true">#</a> 2. 在部署节点编排k8s安装</h3>
<ul>
<li>2.1 下载项目源码、二进制及离线镜像</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载工具脚本ezdown</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">release</span><span class="token operator">=</span><span class="token number">3.0</span>.0
<span class="token function">curl</span> -C- -fLO --retry <span class="token number">3</span> https://github.com/easzlab/kubeasz/releases/download/<span class="token variable">${release}</span>/ezdown
<span class="token function">chmod</span> +x ./ezdown

<span class="token comment"># 使用工具脚本下载</span>
./ezdown -k v1.18.15 -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上述脚本运行成功后，所有文件（kubeasz代码、二进制、离线镜像）均已整理好放入目录<code>/etc/kubeasz</code></p>
<ul>
<li>2.2 创建集群配置实例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ln</span> -s /etc/kubeasz/ezctl /usr/bin/ezctl
ezctl new k8s-test
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后根据提示配置<code>/etc/kubeasz/clusters/k8s-test/hosts</code>和 <code>/etc/kubeasz/clusters/k8s-test/config.yml</code></p>
<p>根据前面节点规划修改hosts 文件和其他集群层面的主要配置选项；其他集群组件等配置项可以在<code>config.yml</code>文件中修改</p>
<ul>
<li>2.3 开始安装</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 一键安装</span>
ezctl setup k8s-test all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
