import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as t,a as s,b as n,d as r,e}from"./app-db2140e1.js";const c={},d=e('<h1 id="kube-on-kube-实现思路分享" tabindex="-1"><a class="header-anchor" href="#kube-on-kube-实现思路分享" aria-hidden="true">#</a> kube on kube 实现思路分享</h1><p>这里的 kube on kube ， 是指建立 K8s 元集群，纳管其他业务 K8s 集群，<strong>通过声明式 API</strong> 管理集群的创建、增删节点等。</p><p>参考 https://github.com/kubean-io/kubean 源码进行编写，进行了裁剪。感谢 <strong>DaoCloud</strong> 开源！ 👍👍</p><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>随着容器化覆盖率的逐步增加，越来越多的业务迁移到 K8s 集群中， 考虑到同城双活、不同业务的复杂性以及耦合度，需要部署维护多套 K8s 集群，如何高效、可靠的在数据中心管理多个 k8s 集群是我们面临的关键挑战。</p><p>以前集群的部署和扩缩容主要通过<code>ansible</code>编排任务，黑屏化操作、配置集群的<code>inventory</code>和<code>vars</code>执行<code>ansible playbook</code>。</p><h2 id="kube-on-kube-整体架构" tabindex="-1"><a class="header-anchor" href="#kube-on-kube-整体架构" aria-hidden="true">#</a> Kube on kube 整体架构</h2><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/kubeonkube.png" alt=""></p><p>kubeonkube-controller 需要运行在一个已存在的 Kubernetes 集群，通过应用 kubeonkube-controller 提供的标准 CRD 资源和 Kubernetes 内建资源来控制和管理集群的生命周期（安装、卸载、升级、扩容、缩容等）。 kubeonkube-controller 采用 ansible-playbook 作为底层技术依赖，一方面简化了集群部署的操作流程，降低了用户的使用门槛。另一方面在 ansibel-playbook 能力基础上增加了集群操作记录等。</p><p>控制器介绍：</p>',10),p=s("li",null,[n("Cluster Controller: 监视 "),s("code",null,"Cluster Objects"),n("。唯一标识一个集群，拥有集群节点的访问信息、类型信息、部署参数信息，并且关联所有对此集群的操作（"),s("code",null,"ClusterOperation Objects"),n("）；")],-1),u=s("code",null,"ClusterOperation Objects",-1),m=s("code",null,"ClusterOperation Object",-1),v={href:"https://kubernetes.io/docs/concepts/workloads/controllers/job/",target:"_blank",rel:"noopener noreferrer"},b=e(`<h2 id="kubeonkube-controller-执行流程" tabindex="-1"><a class="header-anchor" href="#kubeonkube-controller-执行流程" aria-hidden="true">#</a> kubeonkube-controller 执行流程</h2><p>前置步骤说明：</p><p>需要提前创建好hosts-conf config（主机清单）、 vars-conf configmap（配置参数）、ssh-auth secret（SSH 私钥） 三个资源对象。</p><p><strong>Cluster Controller 执行流程分析：</strong></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/cluster-controller.png" alt=""></p><blockquote><ol><li>集群管理员或者容器平台触发创建Cluster 的CR，去定义当前集群的Spec。</li><li>Cluster Contorller 感知到变化进行调谐。 <ul><li>判断 Cluster 是否存在</li><li>判断是否有多余的 Cluster Operation 对象需要清理</li><li>更行 Cluster 状态，记录 Cluster Operator 的执行情况</li><li>更新 hosts-conf / vars-conf / ssh-auth 的 ownerReferences 变为当前 Cluster 信息</li><li>循环监听，当有新的 ClusterOps 任务进来后，继续记录 Cluster Operator 的执行情况等</li></ul></li></ol></blockquote><p><strong>ClusterOperation Controller 执行流程分析：</strong></p><p>ClusterOperation 对象由 ClusterOps 别名。</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/clusteroperation-controller.png" alt=""></p><blockquote><ol><li>集群管理员或者容器平台触发创建ClusterOperation 的CR，去定义当前 ClusterOperation 的Spec。</li><li>ClusterOperation Contorller 感知到变化进行调谐（看图吧，太多了，看后面源码也行）。 https://github.com/clay-wangzhi/kube-on-kube/blob/master/internal/controller/kubeonkube/clusteroperation_controller.go#L75</li><li>Job Pod 创建，执行具体的 创建集群、增加节点等任务。</li><li>执行完成，返回状态，确定成功或失败，Cluster 和 ClusterOperation 都会记录状态及开始结束时间。</li></ol></blockquote><h2 id="源码编写过程" tabindex="-1"><a class="header-anchor" href="#源码编写过程" aria-hidden="true">#</a> 源码编写过程</h2><p>环境说明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubebuilder 3.10.0
go 1.20.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>初始化</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubebuilder init <span class="token parameter variable">--domain</span> clay.io <span class="token parameter variable">--owner</span> Clay <span class="token parameter variable">--repo</span> kube-on-kube
kubebuilder edit <span class="token parameter variable">--multigroup</span><span class="token operator">=</span>true
kubebuilder create api <span class="token parameter variable">--group</span> kubeonkube <span class="token parameter variable">--version</span> v1alpha1 <span class="token parameter variable">--kind</span> Cluster
Create Resource <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>
y
Create Controller <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>
y
kubebuilder create api <span class="token parameter variable">--group</span> kubeonkube <span class="token parameter variable">--version</span> v1alpha1 <span class="token parameter variable">--kind</span> ClusterOperation
Create Resource <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>
y
Create Controller <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>
y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>改配置 Makefile 中 k8s 版本改为<code>ENVTEST_K8S_VERSION = 1.18.10</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> manifests
go mod vendor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>定义 CRD 结构体，改完 make</li><li>新增 clientset,informer,lister</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 新增 hack/tools.go 文件，安装依赖包，参考 https://github.com/kubernetes/sample-controller/blob/master/hack/tools.go</span>
go get k8s.io/code-generator@v0.26.1
go mod vendor
<span class="token function">chmod</span> +x vendor/k8s.io/code-generator/generate-groups.sh
<span class="token comment"># 2. 新增hack/update-codegen.sh，参考 https://github.com/kubernetes/sample-controller/blob/master/hack/update-codegen.sh</span>
注意修改几个变量：

MODULE和go.mod保持一致
<span class="token assign-left variable">API_PKG</span><span class="token operator">=</span>api <span class="token comment">#和api目录保持一致</span>
<span class="token assign-left variable">OUTPUT_PKG</span><span class="token operator">=</span>generated <span class="token comment">#和生成Resource时指定的group一样</span>
<span class="token assign-left variable">GROUP_VERSION</span><span class="token operator">=</span>kubeonkube:v1alpha1 <span class="token comment">#和生成Resource时指定的group version对应</span>

<span class="token comment"># 3. 新增 hack/verify-codegen.sh , 参考 https://github.com/kubernetes/sample-controller/blob/master/hack/verify-codegen.sh</span>

<span class="token comment"># 4. 改type</span>
添加上tag // +genclient
新增 doc.go
新增 register.go

 <span class="token function">chmod</span> +x  ./hack/update-codegen.sh
 ./hack/update-codegen.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>编写调谐代码，改完，make install, 安装 crd</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 需要再本地配置 kubeconfig </span>
<span class="token function">make</span> <span class="token function">install</span> 
<span class="token comment"># 实际执行的是, 可以导出 crd 文件，在其他集群上 apply</span>
kustomize build config/crd <span class="token operator">|</span> kubectl apply <span class="token parameter variable">-f</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>make run 临时测试，安装 controller</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>将 controller 封装成镜像，并进行镜像上传 Dockerfile 如下</li></ol><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># Build the manager binary</span>
<span class="token instruction"><span class="token keyword">FROM</span> golang:1.20 <span class="token keyword">as</span> builder</span>
<span class="token instruction"><span class="token keyword">ARG</span> TARGETOS</span>
<span class="token instruction"><span class="token keyword">ARG</span> TARGETARCH</span>
<span class="token instruction"><span class="token keyword">ENV</span> GOPROXY=<span class="token string">&quot;https://goproxy.cn&quot;</span></span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /workspace</span>
<span class="token comment"># Copy the Go Modules manifests</span>
<span class="token instruction"><span class="token keyword">COPY</span> go.mod go.mod</span>
<span class="token instruction"><span class="token keyword">COPY</span> go.sum go.sum</span>
<span class="token comment"># cache deps before building and copying source so that we don&#39;t need to re-download as much</span>
<span class="token comment"># and so that source changes don&#39;t invalidate our downloaded layer</span>
<span class="token instruction"><span class="token keyword">RUN</span> go mod download</span>

<span class="token comment"># Copy the go source</span>
<span class="token instruction"><span class="token keyword">COPY</span> cmd/main.go cmd/main.go</span>
<span class="token instruction"><span class="token keyword">COPY</span> api/ api/</span>
<span class="token instruction"><span class="token keyword">COPY</span> pkg/ pkg/</span>
<span class="token instruction"><span class="token keyword">COPY</span> generated/ generated/</span>
<span class="token instruction"><span class="token keyword">COPY</span> internal/ internal/</span>
<span class="token instruction"><span class="token keyword">COPY</span> vendor/ vendor/</span>

<span class="token comment"># Build</span>
<span class="token comment"># the GOARCH has not a default value to allow the binary be built according to the host where the command</span>
<span class="token comment"># was called. For example, if we call make docker-build in a local env which has the Apple Silicon M1 SO</span>
<span class="token comment"># the docker BUILDPLATFORM arg will be linux/arm64 when for Apple x86 it will be linux/amd64. Therefore,</span>
<span class="token comment"># by leaving it empty we can ensure that the container and binary shipped on it will have the same platform.</span>
<span class="token instruction"><span class="token keyword">RUN</span> CGO_ENABLED=0 GOOS=<span class="token variable">\${TARGETOS:-linux}</span> GOARCH=<span class="token variable">\${TARGETARCH}</span> go build -a -o manager cmd/main.go</span>

<span class="token comment"># Use distroless as minimal base image to package the manager binary</span>
<span class="token comment"># Refer to https://github.com/GoogleContainerTools/distroless for more details</span>
<span class="token instruction"><span class="token keyword">FROM</span> gcr.io/distroless/static:nonroot</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /workspace/manager .</span>
<span class="token instruction"><span class="token keyword">USER</span> 65532:65532</span>

<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;/manager&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 镜像打包上传</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> wangzhichidocker/kubeonkube-controller:v0.1 <span class="token builtin class-name">.</span>
<span class="token function">docker</span> push wangzhichidocker/kubeonkube-controller:v0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>将 ansible-playbook 的运行环境封装成镜像，Dockerfile 如下</li></ol><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># syntax=docker/dockerfile:1</span>

<span class="token comment"># Use imutable image tags rather than mutable tags (like ubuntu:22.04)</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:22.04@sha256:149d67e29f765f4db62aa52161009e99e389544e25a8f43c8c89d4a445a7ca37</span>

<span class="token comment"># Some tools like yamllint need this</span>
<span class="token comment"># Pip needs this as well at the moment to install ansible</span>
<span class="token comment"># (and potentially other packages)</span>
<span class="token comment"># See: https://github.com/pypa/pip/issues/10219</span>
<span class="token instruction"><span class="token keyword">ENV</span> LANG=C.UTF-8 <span class="token operator">\\</span>
    DEBIAN_FRONTEND=noninteractive <span class="token operator">\\</span>
    PYTHONDONTWRITEBYTECODE=1</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /kubespray</span>

<span class="token comment"># hadolint ignore=DL3008</span>
<span class="token instruction"><span class="token keyword">RUN</span> <span class="token options"><span class="token property">--mount</span><span class="token punctuation">=</span><span class="token string">type=cache,target=/var/cache/apt,sharing=locked</span></span> <span class="token operator">\\</span>
    apt-get update -q <span class="token operator">\\</span>
    &amp;&amp; apt-get install -yq --no-install-recommends <span class="token operator">\\</span>
    curl <span class="token operator">\\</span>
    python3 <span class="token operator">\\</span>
    python3-pip <span class="token operator">\\</span>
    python3-dev <span class="token operator">\\</span>
    gcc <span class="token operator">\\</span>
    sshpass <span class="token operator">\\</span>
    vim <span class="token operator">\\</span>
    rsync <span class="token operator">\\</span>
    openssh-client <span class="token operator">\\</span>
    &amp;&amp; apt-get clean <span class="token operator">\\</span>
    &amp;&amp; rm -rf /var/lib/apt/lists/* /var/log/*</span>

<span class="token instruction"><span class="token keyword">RUN</span> <span class="token options"><span class="token property">--mount</span><span class="token punctuation">=</span><span class="token string">type=bind,source=requirements.txt,target=requirements.txt</span> <span class="token operator">\\</span>
    <span class="token property">--mount</span><span class="token punctuation">=</span><span class="token string">type=cache,sharing=locked,id=pipcache,mode=0777,target=/root/.cache/pip</span></span> <span class="token operator">\\</span>
    pip install --no-compile --no-cache-dir -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/ <span class="token operator">\\</span>
    &amp;&amp; find /usr -type d -name <span class="token string">&#39;*__pycache__&#39;</span> -prune -exec rm -rf {} \\;</span>

<span class="token instruction"><span class="token keyword">COPY</span> *.yml ./</span>
<span class="token instruction"><span class="token keyword">COPY</span> *.cfg ./</span>
<span class="token instruction"><span class="token keyword">COPY</span> roles ./roles</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 镜像打包上传</span>
 <span class="token function">docker</span> build <span class="token parameter variable">-t</span> wangzhichidocker/kubeonkube:v0.1 <span class="token builtin class-name">.</span>
 <span class="token function">docker</span> push wangzhichidocker/kubeonkube:v0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>在其他集群安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成 crd </span>
bin/kustomize build config/crd  <span class="token operator">&gt;</span> deploy/crd.yaml
<span class="token comment"># 生成 rbac, rbac 中roles 和 rolebing 没有指定 ns，需要修改, secrect、cm、job 权限需要添加</span>
bin/kustomize build config/rbac <span class="token operator">&gt;</span> deploy/rbac.yaml
<span class="token comment"># 生成 deployment，需要改镜像</span>
bin/kustomize build config/manager <span class="token operator">&gt;</span> deploy/deployment.yaml
<span class="token comment"># 部署</span>
kubectl apply <span class="token parameter variable">-f</span> crd.yaml
kubectl apply <span class="token parameter variable">-f</span> deployment.yaml
kubectl apply <span class="token parameter variable">-f</span> rbac.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>测试，安装 cluster yaml 和 clusterops yaml</li></ol><p>准备配置文件 SSHAuthSec.yml、HostsConfCM.yml、VarsConfCM.yml</p><p>SSHAuthSec.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl <span class="token parameter variable">-n</span> kubeonkube   create secret generic sample-ssh-auth  <span class="token parameter variable">--type</span><span class="token operator">=</span><span class="token string">&#39;kubernetes.io/ssh-auth&#39;</span>   --from-file<span class="token operator">=</span>ssh-privatekey<span class="token operator">=</span>/home/clay/.ssh/id_rsa   --dry-run<span class="token operator">=</span>client <span class="token parameter variable">-o</span> yaml <span class="token operator">&gt;</span> SSHAuthSec.yml  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HostsConfCM.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiVersion: v1
kind: ConfigMap
metadata:
  name: sample-hosts-conf
  namespace: kubeonkube
data:
  hosts.yml: |
    all:
      hosts:
        master01:
          ip: 10.100.xx.xx
          access_ip: 10.100.xx.xx
          ansible_host: 10.100.xx.xx
          ansible_user: root
        worker01:
          ip: 10.100.xx.xx
          access_ip: 10.100.xx.xx
          ansible_host: 10.100.xx.xx
          ansible_user: root
      children:
        kube_control_plane:
          hosts:
            master01:
        kube_node:
          hosts:
            worker01:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>准备 VarsConfCM.yml，根据实际情况，填写变量文件</p><p>准备 Cluster.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiVersion: kubeonkube.clay.io/v1alpha1
kind: Cluster
metadata:
  name: sample
  namespace: kubeonkube
spec:
  hostsConfRef:
    namespace: kubeonkube
    name: sample-hosts-conf
  varsConfRef:
    namespace: kubeonkube
    name: sample-vars-conf
  sshAuthRef:
    namespace: kubeonkube
    name: sample-ssh-auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>准备 ClusterOperation.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiVersion: kubeonkube.clay.io/v1alpha1
kind: ClusterOperation
metadata:
  name: sample-node-add
  namespace: kubeonkube
spec:
  cluster: sample
  image: wangzhichidocker/kubeonkube:v0.1
  actionType: playbook
  action: scale.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>将以上 Yaml 文件，apply 执行即可。</li></ol><blockquote><p>源码编写过程，可以参考 commit 进行串联： https://github.com/clay-wangzhi/kube-on-kube</p></blockquote><p>参考：</p><ul><li>kubean：https://github.com/kubean-io/kubean</li><li>vivo大规模 Kubernetes 集群自动化运维实践：https://mp.weixin.qq.com/s/L9z1xLXUnz52etw2jDkDkw</li></ul><p>我是 Clay，下期见 👋</p><hr><blockquote><ul><li><p>欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/wiki 查看最新文章</p></li><li><p>欢迎加我微信<code>sre-k8s-ai</code>，与我讨论云原生、稳定性相关内容</p></li></ul></blockquote><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240220180036567.png" alt="weixin" style="zoom:50%;">`,50);function k(h,g){const a=l("ExternalLinkIcon");return o(),t("div",null,[d,s("ul",null,[p,s("li",null,[n("ClusterOperation Controller: 监视 "),u,n("。当 "),m,n(" 被创建时，控制器会组装一个 "),s("a",v,[n("Job"),r(a)]),n(" 去执行 CRD 对象里定义的操作；")])]),b])}const C=i(c,[["render",k],["__file","kube-on-kube.html.vue"]]);export{C as default};
