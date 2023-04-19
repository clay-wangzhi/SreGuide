<template><h1 id="使用-ansible-快速搭建-k8s-集群" tabindex="-1"><a class="header-anchor" href="#使用-ansible-快速搭建-k8s-集群" aria-hidden="true">#</a> 使用 ansible 快速搭建 k8s 集群</h1>
<p>推荐：</p>
<ul>
<li>
<p>kubeadm 安装用：<a href="https://github.com/kubernetes-sigs/kubespray" target="_blank" rel="noopener noreferrer">kubespray<ExternalLinkIcon/></a></p>
</li>
<li>
<p>二进制安装用：<a href="https://github.com/easzlab/kubeasz" target="_blank" rel="noopener noreferrer">kubeasz<ExternalLinkIcon/></a></p>
</li>
</ul>
<blockquote>
<p>此安装方式参考上面两个项目创建，如果刚开始搭建，直接使用上面的安装方式即可，可根据实际情况微调</p>
</blockquote>
<p>项目地址：https://github.com/clay-wangzhi/ansible-collection-k8s</p>
<h2 id="相关支持" tabindex="-1"><a class="header-anchor" href="#相关支持" aria-hidden="true">#</a> 相关支持</h2>
<p><strong>支持 Linux 的版本</strong></p>
<ul>
<li><strong>CentOS/RHEL</strong> 7</li>
</ul>
<p><strong>支持的组件</strong></p>
<ul>
<li>Core
<ul>
<li><a href="https://github.com/kubernetes/kubernetes" target="_blank" rel="noopener noreferrer">kubernetes<ExternalLinkIcon/></a> v1.18.10</li>
<li><a href="https://github.com/coreos/etcd" target="_blank" rel="noopener noreferrer">etcd<ExternalLinkIcon/></a> v3.4.3</li>
<li><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">docker<ExternalLinkIcon/></a> v19.03.4</li>
</ul>
</li>
<li>Network Plugin
<ul>
<li><a href="https://github.com/projectcalico/calico" target="_blank" rel="noopener noreferrer">calico<ExternalLinkIcon/></a> v3.18.6</li>
</ul>
</li>
<li>Application
<ul>
<li><a href="https://github.com/coredns/coredns" target="_blank" rel="noopener noreferrer">coredns<ExternalLinkIcon/></a> v1.6.7</li>
</ul>
</li>
</ul>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 更换 yum 源，如果本来就是国内源，无需更换</span>
<span class="token function">curl</span> -fsSL <span class="token string">"https://gitee.com/clay-wangzhi/shell/raw/master/repo_replace.sh"</span> <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token comment"># 安装 python3</span>
yum -y <span class="token function">install</span> python3

<span class="token comment"># Install dependencies from ``requirements.txt``</span>
pip3 <span class="token function">install</span> -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/

<span class="token builtin class-name">cd</span> ansible-collection-k8s
<span class="token comment"># 根据实际情况修改 主机列表 ``inventory/hosts``、全局变量 ``group_vars/all.yml``</span>

<span class="token comment"># 依次执行 playbook</span>
ansible-playbook 01-preinstall.yml
ansible-playbook 02-docker.yml
ansible-playbook 03-ha.yml
ansible-playbook 04-master.yml
ansible-playbook 05-calico.yml
ansible-playbook 06-node.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="roles-介绍" tabindex="-1"><a class="header-anchor" href="#roles-介绍" aria-hidden="true">#</a> Roles 介绍</h2>
<h3 id="preinstall-安装前准备" tabindex="-1"><a class="header-anchor" href="#preinstall-安装前准备" aria-hidden="true">#</a> preinstall：安装前准备</h3>
<ul>
<li>关闭 swap 分区</li>
<li>更换 yum 源、安装 依赖包</li>
<li>更新 系统版本 到 centos 7.9、内核版本 到 长期支持版本 kernel-lt 5.4.196</li>
<li>如果硬件网卡驱动不支持新版本内核，升级 网卡驱动， 针对新内核重新编译</li>
<li><strong>调节 CPU 性能模式为高性能</strong></li>
<li>禁用防火墙、SELINUX</li>
<li>修改内核参数、加载 br_netfilter、ip_conntrack、ipvs 等 modules</li>
<li>配置时间同步</li>
<li>重启服务器，使用内核生效</li>
<li>检查 内核版本</li>
<li>检查 hostname 是否符合 DNS 规范</li>
<li>检查 kube_service_addresses 和 kube_pods_subnet 是否为正确的网络段</li>
<li>检查 kube_service_addresses 和 kube_pods_subnet 的网段是否冲突</li>
<li>检查时间是否同步</li>
<li>检查 访问外网的连通性（DNS配置是否正确）</li>
</ul>
<h3 id="docker-安装docker" tabindex="-1"><a class="header-anchor" href="#docker-安装docker" aria-hidden="true">#</a> docker：安装Docker</h3>
<ul>
<li>更换 yum 下载源</li>
<li>安装 docker 和相关依赖</li>
<li>新增配置目录，拷贝配置文件</li>
<li>启动并加入开机自启</li>
</ul>
<h3 id="master-安装-master" tabindex="-1"><a class="header-anchor" href="#master-安装-master" aria-hidden="true">#</a> master: 安装 master</h3>
<ul>
<li>更换 yum 下载源</li>
<li>下载 kubelet、kubeadm、kubectl 等</li>
<li>下载 kube-apiserver、kube-controller-manager、kube-scheduler、kube-proxy、pause、etcd、coredns 等镜像</li>
<li>启动 kubelet 服务</li>
<li>配置 kubeadm-config.yml 初始化配置文件</li>
<li>使用<code>kubeadm init</code> 进行初始化</li>
<li>master1 生产certificate key</li>
<li>其余master 使用 <code>kubeadm join</code> 加入master集群</li>
</ul>
<h3 id="ha-使用-haproxy-keepalived-实现master高可用-负载均衡" tabindex="-1"><a class="header-anchor" href="#ha-使用-haproxy-keepalived-实现master高可用-负载均衡" aria-hidden="true">#</a> ha：使用 <code>haproxy + keepalived</code> 实现master高可用，负载均衡</h3>
<blockquote>
<p>先申请vip</p>
</blockquote>
<ul>
<li>安装 keepalived 、 haproxy</li>
<li>重定向日志文件</li>
<li>keepalived 新增监控检查脚本</li>
<li>配置keepalived、haproxy</li>
<li>启动 keepalived、haproxy ，并配置开机自启</li>
</ul>
<h3 id="calico-安装配置-calico-bgp-rr模型" tabindex="-1"><a class="header-anchor" href="#calico-安装配置-calico-bgp-rr模型" aria-hidden="true">#</a> calico：安装配置 Calico BGP RR模型</h3>
<blockquote>
<p>提前设置好 LOCAL_AS、AS_NUMBER、PEER_IP，安装好后还需要网络设置一下，BGP做宣告加邻居等</p>
</blockquote>
<ul>
<li>拷贝官方 yaml 文件</li>
<li>替换 PODSUBNET</li>
<li>设置 NIC 为 bond4 或 eth0</li>
<li>apply calico yaml 文件</li>
<li>安装 并配置 calicoctl 工具</li>
<li>拷贝 设置 为 BGP RR 模式 的一些列 yaml 文件</li>
<li>使用 calicoctl apply 上面的yaml文件</li>
</ul>
<h3 id="node-安装-node" tabindex="-1"><a class="header-anchor" href="#node-安装-node" aria-hidden="true">#</a> node：安装 node</h3>
<ul>
<li>步骤和 master 2，3 安装类似，下镜像，生产凭证，<code>kubeadm join</code></li>
</ul>
</template>
