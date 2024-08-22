import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-0514757a.js";const t={},i=e(`<h1 id="从0开始装一套-kubevirt-1-2-1" tabindex="-1"><a class="header-anchor" href="#从0开始装一套-kubevirt-1-2-1" aria-hidden="true">#</a> 从0开始装一套 KubeVirt 1.2.1</h1><h2 id="kubevirt-架构" tabindex="-1"><a class="header-anchor" href="#kubevirt-架构" aria-hidden="true">#</a> KubeVirt 架构</h2><p><strong>架构</strong></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/architecture.png" alt=""></p><ul><li>virt-api : 负责提供一些 KubeVirt 特有的 api，像是 console, vnc, startvm, stopvm 等。</li><li>virt-controller : 管理和监控 VMI 对象及其关联的 Pod，对其状态进行更新。</li><li>virt-hander : 以 DaemonSet 运行在每一个节点上，监听 VMI 的状态向上汇报，管理 VMI 的生命周期。</li><li>virt-launcher : 以 Pod 方式运行，每个 VMI Object 都会对应一个 virt-launcher Pod，容器内有单独的 libvirtd，用于启动和管理虚拟机。</li></ul><p><strong>网络和存储选型</strong></p><p>固定 IP 能力：网络需要支持具备固定 IP 的能力， 这里选用 Calico</p><p>数据持久化：dataVolume、hostDisk、PVC ，这里选用 dataVolume，可以动态创建 PVC， 并将镜像填充进去</p><p>SC 选用 local-storage，性能最好，灾备首先磁盘 RAID 做了冗余，其次在应用层实现高可用灾备</p><h2 id="kubernetes-安装" tabindex="-1"><a class="header-anchor" href="#kubernetes-安装" aria-hidden="true">#</a> Kubernetes 安装</h2><p>使用 kubespray 安装 K8s 1.28 集群（离线版）</p><p>搬运镜像和文件</p><blockquote><p>没有条件的，可以跳过这步，使用国内 daocloud 站点</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装 skopeo</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> update <span class="token comment"># Ubuntu Server 22.04 LTS </span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> skopeo
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> ansible
<span class="token function">git</span> clone https://github.com/kubernetes-sigs/kubespray.git <span class="token parameter variable">-b</span> v2.24.1 <span class="token parameter variable">--depth</span> <span class="token number">1</span>
<span class="token comment">## 生成搬运列表</span>
<span class="token builtin class-name">cd</span> kubespray/contrib/offline
<span class="token function">bash</span> generate_list.sh
<span class="token comment">## 搬运镜像，注意 {IMAGE-REPO} 为镜像仓库地址，根据实际情况修改</span>
skopeo login <span class="token punctuation">{</span>IMAGE-REPO<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">image</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> temp/images.list<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span> skopeo copy docker://<span class="token variable">\${image}</span> docker://<span class="token punctuation">{</span>IMAGE-REPO<span class="token punctuation">}</span>/k8s/<span class="token variable">\${image<span class="token operator">#</span>*<span class="token operator">/</span>}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
<span class="token comment">## 搬运文件</span>
<span class="token function">wget</span> <span class="token parameter variable">-x</span> <span class="token parameter variable">-P</span> temp/files <span class="token parameter variable">-i</span> temp/files.list
<span class="token comment">### 安装配置 Nginx， Centos7</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx
systemctl start nginx
<span class="token comment">#### nginx.conf 配置</span>
        location / <span class="token punctuation">{</span>
            root    /home/clay/kubespray/contrib/offline/temp/files<span class="token punctuation">;</span>
            autoindex on<span class="token punctuation">;</span>
            autoindex_exact_size off<span class="token punctuation">;</span>
            autoindex_localtime on<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装前准备</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 挂盘、升 kernel、升操作系统、配置时间同步、参数调优等</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载 kubespray，修改配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">git</span> clone https://github.com/kubernetes-sigs/kubespray.git <span class="token parameter variable">-b</span> v2.24.1 <span class="token parameter variable">--depth</span> <span class="token number">1</span>
<span class="token builtin class-name">cd</span> kubespray

<span class="token comment"># 修改配置文件</span>
<span class="token function">cp</span> <span class="token parameter variable">-rfp</span> inventory/sample inventory/kubevirt-test
<span class="token comment">## inventory/kubevirt-test/group_vars/k8s_cluster/k8s-cluster.yml 文件修改</span>
<span class="token comment">### 开启审计日志</span>
kubernetes_audit: <span class="token boolean">true</span>
<span class="token comment">### 自动重新生成证书</span>
auto_renew_certificates: <span class="token boolean">true</span>
<span class="token comment">### 开启资源预留，注意，下面具体的参数也要打开 ## The following two items need to be set when kube_reserved is true</span>
kube_reserved: <span class="token boolean">true</span>
system_reserved: <span class="token boolean">true</span>
<span class="token comment">### 修改 Pod 、 Service CIDR， 根据实际情况修改，不要冲突</span>
kube_pods_subnet:
kube_service_addresses:

<span class="token comment">## inventory/kubevirt-test/group_vars/all/offline.yml 文件修改，注意 {IMAGE-REPO} 、{FILE-REPO}，根据实际情况修改</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;/# .*\\{\\{ files_repo/s/^# //g&#39;</span> inventory/kubevirt-test/group_vars/all/offline.yml  <span class="token comment"># 命令需在 Linux 系统执行</span>
<span class="token function">tee</span> <span class="token parameter variable">-a</span> inventory/kubevirt-test/group_vars/all/offline.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
gcr_image_repo: &quot;{IMAGE-REPO}/k8s&quot;
kube_image_repo: &quot;{IMAGE-REPO}/k8s&quot;
docker_image_repo: &quot;{IMAGE-REPO}/k8s&quot;
quay_image_repo: &quot;{IMAGE-REPO}/k8s&quot;
github_image_repo: &quot;{IMAGE-REPO}/k8s&quot;
files_repo: &quot;{FILE-REPO}&quot;
EOF</span>

<span class="token comment">## inventory/kubevirt-test/group_vars/k8s_cluster/addons.yml 修改默认安装插件</span>
helm_enabled: <span class="token boolean">true</span>
metrics_server_enabled: <span class="token boolean">true</span>
csi_snapshot_controller_enabled: <span class="token boolean">true</span>
ingress_nginx_enabled: <span class="token boolean">true</span>

<span class="token comment">## 修改主机列表，注意{HOSTNAME1},{IP1} {HOSTNAME2},{IP2} {HOSTNAME3},{IP3}，根据实际情况修改</span>
pip3 <span class="token function">install</span> ruamel_yaml
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-a</span> <span class="token assign-left variable">IPS</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">{</span>HOSTNAME1<span class="token punctuation">}</span>,<span class="token punctuation">{</span>IP1<span class="token punctuation">}</span> <span class="token punctuation">{</span>HOSTNAME2<span class="token punctuation">}</span>,<span class="token punctuation">{</span>IP2<span class="token punctuation">}</span> <span class="token punctuation">{</span>HOSTNAME3<span class="token punctuation">}</span>,<span class="token punctuation">{</span>IP3<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token assign-left variable">CONFIG_FILE</span><span class="token operator">=</span>inventory/kubevirt-test/hosts.yaml python3 contrib/inventory_builder/inventory.py <span class="token variable">\${IPS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建集群</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 下拉封装好的镜像</span>
<span class="token function">docker</span> pull quay.io/kubespray/kubespray:v2.24.1

<span class="token comment">## 启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>&quot;</span>/inventory,dst<span class="token operator">=</span>/kubespray/inventory <span class="token punctuation">\\</span>
  <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">HOME</span>}</span>&quot;</span>/.ssh/id_rsa,dst<span class="token operator">=</span>/root/.ssh/id_rsa <span class="token punctuation">\\</span>
  quay.io/kubespray/kubespray:v2.24.1 <span class="token function">bash</span>
  
<span class="token comment">## 执行 playbook</span>
ansible-playbook <span class="token parameter variable">-i</span> inventory/kubevirt-test/hosts.yaml --private-key /root/.ssh/id_rsa cluster.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubevirt-安装" tabindex="-1"><a class="header-anchor" href="#kubevirt-安装" aria-hidden="true">#</a> KubeVirt 安装</h2><p>KubeVirt 是 Kubernetes 的虚拟化附加组件，本指南假定已经安装了 Kubernetes 群集。</p><h3 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h3><p>在开始之前需要满足一些要求</p><ul><li>Kubernetes 群集或衍生物（例如 OpenShift ），基于最新的三个 Kubernetes 发行版之一，该版本是在 KubeVirt 发布时发行的。 <ul><li>这里 KubeVirt 最新版是 1.2.1 ，K8s 选择 1.28.6</li></ul></li><li>Kubernetes apiserver 必须具有-allow-privileged = true，才能运行Kubevirt的特权守护程序。</li><li><code>kubectl</code> 客户端</li><li>推荐使用 containerd 或 crio (with runv) 容器运行时</li></ul><h3 id="验证硬件虚拟化支持" tabindex="-1"><a class="header-anchor" href="#验证硬件虚拟化支持" aria-hidden="true">#</a> 验证硬件虚拟化支持</h3><p>建议使用虚拟化支持的硬件。您可以使用 virt-host validate 来确保您的主机能够运行虚拟化工作负载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 virt-host-validate 命令，centos7</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> qemu-kvm libvirt virt-install bridge-utils
<span class="token comment"># 验证</span>
virt-host-validate qemu
  QEMU: Checking <span class="token keyword">for</span> hardware virtualization                                 <span class="token builtin class-name">:</span> PASS
  QEMU: Checking <span class="token keyword">if</span> device /dev/kvm exists                                   <span class="token builtin class-name">:</span> PASS
  QEMU: Checking <span class="token keyword">if</span> device /dev/kvm is accessible                            <span class="token builtin class-name">:</span> PASS
  QEMU: Checking <span class="token keyword">if</span> device /dev/vhost-net exists                             <span class="token builtin class-name">:</span> PASS
  QEMU: Checking <span class="token keyword">if</span> device /dev/net/tun exists                               <span class="token builtin class-name">:</span> PASS
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-kubernetes-上安装-kubevirt" tabindex="-1"><a class="header-anchor" href="#在-kubernetes-上安装-kubevirt" aria-hidden="true">#</a> 在 Kubernetes 上安装 KubeVirt</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定为 v1.2.1 版本</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">RELEASE</span><span class="token operator">=</span>v1.2.1
<span class="token comment"># 下载 KubeVirt operator Yaml，并安装</span>
<span class="token function">wget</span> https://github.com/kubevirt/kubevirt/releases/download/<span class="token variable">\${RELEASE}</span>/kubevirt-operator.yaml
kubectl apply <span class="token parameter variable">-f</span> kubevirt-operator.yaml
<span class="token comment"># 下载 KubeVirt CR， 创建 KubeVirt CR（实例部署请求），该 CR 触发实际安装</span>
<span class="token function">wget</span> https://github.com/kubevirt/kubevirt/releases/download/<span class="token variable">\${RELEASE}</span>/kubevirt-cr.yaml
kubectl apply <span class="token parameter variable">-f</span> kubevirt-cr.yaml
<span class="token comment"># 等待所有 KubeVirt 组件都启动</span>
kubectl <span class="token parameter variable">-n</span> kubevirt <span class="token function">wait</span> kv kubevirt <span class="token parameter variable">--for</span> <span class="token assign-left variable">condition</span><span class="token operator">=</span>Available
<span class="token comment"># 下载 virtctl client</span>
<span class="token function">wget</span> https://github.com/kubevirt/kubevirt/releases/download/<span class="token variable">\${RELEASE}</span>/virtctl-<span class="token variable">\${RELEASE}</span>-linux-amd64
<span class="token function">mv</span> virtctl-<span class="token variable">\${RELEASE}</span>-linux-amd64 /usr/local/bin/virtctl
<span class="token function">chmod</span> +x /usr/local/bin/virtctl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="containerized-data-importer" tabindex="-1"><a class="header-anchor" href="#containerized-data-importer" aria-hidden="true">#</a> Containerized Data Importer</h3><p>CDI (Containerized Data Importer)项目提供了一些功能，可以通过 DataVolumes 将 pvc (Persistent Volume Claims) 用作 KubeVirt 虚拟机的磁盘。三个主要的CDI 用例是：</p><ul><li>从 web 服务器或容器注册中心导入磁盘映像到 DataVolume</li><li>将现有的 PVC 克隆到数据卷</li><li>上传本地磁盘映像到数据卷</li></ul><p><strong>安装 CDI</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定 v1.59.0 版本</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VERSION</span><span class="token operator">=</span>v1.59.0
<span class="token comment"># 下载 Yaml 并创建</span>
<span class="token function">wget</span> https://github.com/kubevirt/containerized-data-importer/releases/download/<span class="token variable">$VERSION</span>/cdi-operator.yaml
<span class="token function">wget</span> https://github.com/kubevirt/containerized-data-importer/releases/download/<span class="token variable">$VERSION</span>/cdi-cr.yaml
kubectl create <span class="token parameter variable">-f</span> cdi-operator.yaml
kubectl create <span class="token parameter variable">-f</span> cdi-cr.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置启动-vm" tabindex="-1"><a class="header-anchor" href="#配置启动-vm" aria-hidden="true">#</a> 配置启动 VM</h2><p>vm 特性</p><ul><li>需要数据持久化，重启不丢数据</li><li>IP 固定不变</li></ul><p><strong>配置 sc、pv、pvc</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># local-sc-and-pv.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> storage.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> StorageClass
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> local<span class="token punctuation">-</span>storage
<span class="token key atrule">provisioner</span><span class="token punctuation">:</span> kubernetes.io/no<span class="token punctuation">-</span>provisioner
<span class="token key atrule">volumeBindingMode</span><span class="token punctuation">:</span> WaitForFirstConsumer
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> centos<span class="token punctuation">-</span>image
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 90Gi
  <span class="token key atrule">volumeMode</span><span class="token punctuation">:</span> Filesystem
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteOnce
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Delete
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> local<span class="token punctuation">-</span>storage
  <span class="token key atrule">local</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /data/centos<span class="token punctuation">-</span>image
  <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span>
    <span class="token key atrule">required</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> kubernetes.io/hostname
              <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
              <span class="token key atrule">values</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> sh1<span class="token punctuation">-</span>st<span class="token punctuation">-</span>int<span class="token punctuation">-</span>k8s<span class="token punctuation">-</span>ops<span class="token punctuation">-</span>kubevirt<span class="token punctuation">-</span><span class="token number">03</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> centos<span class="token punctuation">-</span>image<span class="token punctuation">-</span>scratch
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 90Gi
  <span class="token key atrule">volumeMode</span><span class="token punctuation">:</span> Filesystem
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteOnce
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Delete
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> local<span class="token punctuation">-</span>storage
  <span class="token key atrule">local</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /data/centos<span class="token punctuation">-</span>image<span class="token punctuation">-</span>scratch
  <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span>
    <span class="token key atrule">required</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> kubernetes.io/hostname
              <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
              <span class="token key atrule">values</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> sh1<span class="token punctuation">-</span>st<span class="token punctuation">-</span>int<span class="token punctuation">-</span>k8s<span class="token punctuation">-</span>ops<span class="token punctuation">-</span>kubevirt<span class="token punctuation">-</span><span class="token number">03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl  apply <span class="token parameter variable">-f</span> local-sc-and-pv.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将压缩好的镜像放到内部 文件服务器中， {source_url} ，根据实际情况修改，然后部署 vm</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># vm.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> kubevirt.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualMachine
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubevirt.io/vm</span><span class="token punctuation">:</span> vm<span class="token punctuation">-</span>centos<span class="token punctuation">-</span>test
  <span class="token key atrule">name</span><span class="token punctuation">:</span> vm<span class="token punctuation">-</span>centos<span class="token punctuation">-</span>test
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">running</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">kubevirt.io/vm</span><span class="token punctuation">:</span> vm<span class="token punctuation">-</span>centos<span class="token punctuation">-</span>test
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
        <span class="token key atrule">cni.projectcalico.org/ipAddrs</span><span class="token punctuation">:</span> <span class="token string">&#39;[&quot;10.70.73.9&quot;]&#39;</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">domain</span><span class="token punctuation">:</span>
        <span class="token key atrule">devices</span><span class="token punctuation">:</span>
          <span class="token key atrule">disks</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">disk</span><span class="token punctuation">:</span>
              <span class="token key atrule">bus</span><span class="token punctuation">:</span> virtio
            <span class="token key atrule">name</span><span class="token punctuation">:</span> datavolumedisk1
          <span class="token key atrule">interfaces</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> default
            <span class="token key atrule">bridge</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token number">4</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 8Gi
      <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> default
        <span class="token key atrule">pod</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">dataVolume</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> centos<span class="token punctuation">-</span>dv
        <span class="token key atrule">name</span><span class="token punctuation">:</span> datavolumedisk1
  <span class="token key atrule">dataVolumeTemplates</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> centos<span class="token punctuation">-</span>dv
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span>
        <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> local<span class="token punctuation">-</span>storage
        <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> ReadWriteOnce
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">storage</span><span class="token punctuation">:</span> 80Gi
      <span class="token key atrule">source</span><span class="token punctuation">:</span>
        <span class="token key atrule">http</span><span class="token punctuation">:</span>
          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>source_url<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 部署 vm</span>
kubectl  apply <span class="token parameter variable">-f</span> vm.yaml
<span class="token comment"># 启动 vm</span>
virtctl start vm-centos-test
<span class="token comment"># 进入 vmi</span>
virtctl console vm-centos-test
<span class="token comment"># 写文件，然后重启，然后数据持久化，和 IP 是否固定</span>
virtctl restart vm-centos-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>踩坑：</p><p>PVC 需要看镜像里面，实际的大小限制</p><p>CPU、MEM 不能太小，不然启动不起来</p></blockquote><p>Todo：</p><p>编写自动化工具实现</p><ul><li>自动按需创建 local-pv</li><li>纳管 calico-ipam， 实现 静态 IP 固定和分发。</li></ul><p>参考文档：</p><p>kubespray doc：https://github.com/kubernetes-sigs/kubespray/blob/master/docs/operations/mirror.md</p><p>kubespray 离线安装配置 | roc：https://imroc.cc/kubernetes/basics/deploy/kubespray/offline</p><p>Kubevirt doc：https://kubevirt.io/user-guide/architecture/</p><p>kubevirt doc：https://kubevirt.io/user-guide/cluster_admin/installation/</p><p>kubevirt doc：https://kubevirt.io/user-guide/storage/containerized_data_importer/</p><p>kubevirt k8s-support-matrix：https://github.com/kubevirt/sig-release/blob/main/releases/k8s-support-matrix.md</p><p>我是 Clay，下期见 👋</p><hr><blockquote><ul><li><p>欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/wiki 查看最新文章</p></li><li><p>欢迎加我微信<code>sre-k8s-ai</code>，与我讨论云原生、稳定性相关内容</p></li></ul></blockquote><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin.png" alt="weixin" style="zoom:50%;">`,59),l=[i];function p(c,o){return s(),a("div",null,l)}const d=n(t,[["render",p],["__file","kubevirt-install.html.vue"]]);export{d as default};
