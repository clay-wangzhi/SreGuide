import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c,b as a,d as n,a as l,e as s}from"./app-1a5afd71.js";const o={},u=s('<h1 id="calico" tabindex="-1"><a class="header-anchor" href="#calico" aria-hidden="true">#</a> Calico</h1><h2 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h2><p>简单说一下 Calico 架构，Calico 是一个基于三层的数据中心网络方案，可作为 CNI 插件为运行于 Kubernetes 中的容器提供基于 TCP/IP 三层的网络通信方案，也可与 OpenStack 这种 IaaS 云架构集成，利用 BGP，IPIP 等协议为工作负载提供网络联通功能，能够提供高效可控的 VM、容器、物理机之间的通信。</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640.jpeg" alt="图片"></p><p>Calico的核心组件包括：</p><ul><li>Felix，Calico Agent，运行在每个容器宿主节点上，主要负责配置路由、ACL等信息来确保容器的联通状态；</li><li>Etcd ，分布式的 Key/Value 存储，负责网络元数据一致性，确保 Calico 网络状态的准确性；</li><li>BGP Client(Bird) ，主要把 Felix 写入 Kernel 的路由信息分发到 Calico 网络，保证容器间的通信有效性；</li><li>BGP Route Reflector (简称：RR )，路由反射器，默认 Calico 工作在 node-mesh 模式，所有节点互相连接， node-mesh 模式在小规模部署时工作是没有问题的，当大规模部署时，连接数会非常大，消耗过多资源，利用 BGP RR ，可以避免这种情况的发生，通过一个或者多个 BGP RR 来完成集中式的路由分发，减少对网络资源的消耗以及提高 Calico 工作效率、稳定性。</li></ul><p>其中名词概念：</p><ul><li>Endpoint <em># 接入到Calico网络中的网卡称为Endpoint (这里即POD)</em></li><li>AS <em># 网络自治系统，通过BGP协议与其它的AS交换路由信息 (自治网络拥有独立交换机、路由器等，可独立运转)</em></li><li>IBGP <em># AS内部的BGP_Speaker，与相同AS的ibgp、ebgp交换路由信息</em></li><li>EBGP <em># AS边界的BGP_Speaker，与相同AS的ibgp、以及不同AS的ebgp交换路由信息</em></li><li>BGP # 端口 179，BIRD 建立TCP/179的连接</li></ul>',8),r={href:"https://soha.moe/post/bird-bgp-kickstart.html",target:"_blank",rel:"noopener noreferrer"},d=s(`<h2 id="网络模式" tabindex="-1"><a class="header-anchor" href="#网络模式" aria-hidden="true">#</a> 网络模式</h2><h3 id="vxlan" tabindex="-1"><a class="header-anchor" href="#vxlan" aria-hidden="true">#</a> vxlan</h3><p>略，不走bgp</p><h3 id="ipip" tabindex="-1"><a class="header-anchor" href="#ipip" aria-hidden="true">#</a> IPIP</h3><p>也走 bgp</p><p>IPIP 需要内核模块 ipip.ko 使用命令查看内核是否加载IPIP模块lsmod | grep ipip ；使用命令modprobe ipip 加载</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/436EF78A6A0877DE5732F186CE1406A9.jpg" alt="img"></p><h3 id="bgp" tabindex="-1"><a class="header-anchor" href="#bgp" aria-hidden="true">#</a> BGP</h3><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/F94A48ADC2A1721363C79FB990B94A85.jpg" alt="img"></p><h2 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置" aria-hidden="true">#</a> 安装配置</h2><blockquote><p>选择与k8s 兼容的最新版本</p></blockquote><p>1）下载 yaml 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://docs.projectcalico.org/archive/v3.18/manifests/calico.yaml <span class="token parameter variable">-O</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）修改 yaml 文件</p><ul><li><p>修改镜像地址为 内部仓库地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/docker.io/xxx.xxx.xxx/g&#39;</span> calico.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>CALICO_IPV4POOL_CIDR 参数 为 实际 POD 的CIDR</p></li><li><p>在 value: &quot;autodetect 后新增以下两行参数</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> IP_AUTODETECTION_METHOD
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;interface=bond4,eth0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>3）apply yaml 文件进行安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> calico.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4）生产 yaml 文件</p><p><code>bgpconfig.yaml</code>, 关闭 fullmesh，LOCAL_AS、service cidr 根据实际情况修改</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> projectcalico.org/v3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> BGPConfiguration
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">logSeverityScreen</span><span class="token punctuation">:</span> Info
  <span class="token key atrule">nodeToNodeMeshEnabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">asNumber</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> LOCAL_AS <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">serviceClusterIPs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">cidr</span><span class="token punctuation">:</span> xx.xx.xx.xx/xx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>peer.yaml</code>,建立全局 bgppeer，和交互机建联，tor模式，PEER_IP，AS_NUMBER 根据实际情况修改</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> projectcalico.org/v3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> BGPPeer
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> peer
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">peerIP</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> PEER_IP <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">asNumber</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> AS_NUMBER <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>calico-nat</code>，指定 ippool，kube_pods_subnet 为 pod 的 CIDR</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> projectcalico.org/v3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> IPPool
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> default<span class="token punctuation">-</span>ipv4<span class="token punctuation">-</span>ippool
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">cidr</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> kube_pods_subnet <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">natOutgoing</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5） 下载 calicoctl 二进制文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/projectcalico/calicoctl/releases/download/v3.18.6/calicoctl <span class="token parameter variable">-o</span> /usr/bin/calicoctl
<span class="token function">chmod</span> +x /usr/bin/calicoctl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6） 生成 calicoclt 的配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/calico/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vim /etc/calico/calicoctl.cfg</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiVersion: projectcalico.org/v3
kind: CalicoAPIConfig
metadata:
spec:
  datastoreType: &quot;kubernetes&quot;
  kubeconfig: &quot;/root/.kube/config&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7）calicoctl apply 一些规则</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>calicoctl apply <span class="token parameter variable">-f</span> bgpconfig.yaml <span class="token operator">&amp;&amp;</span> calicoctl apply <span class="token parameter variable">-f</span> peer.yaml <span class="token operator">&amp;&amp;</span> calicoctl apply <span class="token parameter variable">-f</span> calico-nat.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="版本升级" tabindex="-1"><a class="header-anchor" href="#版本升级" aria-hidden="true">#</a> 版本升级</h2>`,33),k={href:"https://projectcalico.docs.tigera.io/archive/v3.18/maintenance/kubernetes-upgrade",target:"_blank",rel:"noopener noreferrer"},v=s(`<p>总共分三步，备份，下载新的yaml文件和calicoctl 二进制文件，按原来的安装方式进行修改，最后 apply 进行升级</p><p>tips：calico-node 可能会缺少权限，根据报错添加权限即可</p><h2 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h2><p>开启监控</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>calicoctl patch felixconfiguration default  <span class="token parameter variable">--patch</span> <span class="token string">&#39;{&quot;spec&quot;:{&quot;prometheusMetricsEnabled&quot;: true}}&#39;</span>
calicoctl get felixConfiguration default <span class="token parameter variable">-o</span> yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>新增 service 和 servicemonitor 用于 监控发现 <code>servicemonitor.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> felix<span class="token punctuation">-</span>metrics<span class="token punctuation">-</span>svc
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> calico
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> calico<span class="token punctuation">-</span>node
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> calico<span class="token punctuation">-</span>metrics
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9091</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">9091</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> monitoring.coreos.com/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceMonitor
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> calico<span class="token punctuation">-</span>prometheus<span class="token punctuation">-</span>servicemonitor
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> calico<span class="token punctuation">-</span>prometheus<span class="token punctuation">-</span>servicemonitor
    <span class="token key atrule">release</span><span class="token punctuation">:</span> monitoring
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> calico
  <span class="token key atrule">namespaceSelector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchNames</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> calico<span class="token punctuation">-</span>metrics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>apply</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> servicemonitor.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后 grafana dashboard 进行导入即可</p><h2 id="tor-模式-改为-rr-路由反射模式" tabindex="-1"><a class="header-anchor" href="#tor-模式-改为-rr-路由反射模式" aria-hidden="true">#</a> TOR 模式 改为 RR 路由反射模式</h2><p>减少交换机压力</p><p>删除旧的 BGPPeer ，建立新的 bgppeer 即可，拿一台 node 节点 和所有其他 node 建联，然后 这台 node 再和交互机建联即可</p><p>Node 跨网段时，调整 IPIP 封装策略为 <code>CrossSubnet</code>， 设置后发现 跨网段的node 中pod 到master 不通，ipip又改为 Never了</p><blockquote><p>⚠️ 同一组 rr 设置相同的 routeReflectorClusterID，要手动修改</p><p>tips: nat 和 ipip mode 的改变，最终生效 再 calicoctl get ippools 、可以kubectl edit ippools.crd.projectcalico.org</p></blockquote><p>参考：https://rainwu.cn/archives/calico-rr-guide</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><p><strong>路由黑洞问题</strong></p><p>要解决路由黑洞问题问题，首先，除了对整个Calico 的IP Pool总量进行监控外，还需要对可用的IP Block进行监控，确保不会出现IP Block不够分的情况，或者或者IP地址Block借用的情况；</p>`,19);function m(b,h){const e=i("ExternalLinkIcon");return p(),c("div",null,[u,a("blockquote",null,[a("p",null,[n("Bird 相关配置："),a("a",r,[n("BIRD 与 BGP 的新手开场"),l(e)])])]),d,a("p",null,[n("升级官方文档："),a("a",k,[n("Upgrade Calico on k8s"),l(e)])]),v])}const x=t(o,[["render",m],["__file","calico.html.vue"]]);export{x as default};
