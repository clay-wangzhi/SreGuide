import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as i,a as n,b as a,d as e,e as o}from"./app-ff59e76a.js";const c={},u=o(`<h1 id="kubernetes-master-基准测试" tabindex="-1"><a class="header-anchor" href="#kubernetes-master-基准测试" aria-hidden="true">#</a> Kubernetes-Master 基准测试</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>Kubernetes是容器集群管理系统，为容器化的应用提供资源调度、部署运行、滚动升级、扩容缩容等功能。容器集群管理给业务带来了便利，但是随着业务的不断增长，应用数量可能会发生爆发式的增长。那在这种情况下，Kubernetes能否快速地完成扩容、扩容到大规模时Kubernetes管理能力是否稳定成了挑战。</p><p>提前测试目前 Kubernetes 能承载的最大 Node、Pod 数量。</p><h2 id="sli-slo" tabindex="-1"><a class="header-anchor" href="#sli-slo" aria-hidden="true">#</a> SLI &amp; SLO</h2><p>SLI（Service Level Indicator）：服务等级指标，其实就是我们选择哪些指标来衡量我们的稳定性。</p><p>SLO（Service Level Objective）：服务等级目标，指的就是我们设定的稳定性目标，比如“几个 9”这样的目标。</p><p><strong>SLO 是 SLI 要达成的目标，我们需要选择合适的 SLI，设定对应的 SLO。</strong></p><p>官方提供了三个指标，如下</p><table><thead><tr><th>SLI</th><th>SLO</th><th>测试方法</th></tr></thead><tbody><tr><td>Latency of processing mutating API calls for single objects for every (resource, verb) pair, measured as 99th percentile over last 5 minutes</td><td>99Line &lt;= 1s</td><td>官方 Kubemark + perf-test</td></tr><tr><td>Latency of processing non-streaming read-only API calls for every (resource, scope) pair, measured as 99th percentile over last 5 minutes</td><td>(a) &lt;= 1s if <code>scope=resource</code> (b) &lt;= 30s otherwise (if <code>scope=namespace</code> or <code>scope=cluster</code>)</td><td>官方 Kubemark + perf-test</td></tr><tr><td>Startup latency of schedulable stateless pods, excluding time to pull images and run init containers, measured from pod creation timestamp to when all its containers are reported as started and observed via watch, measured as 99th percentile over last 5 minutes</td><td>99Line &lt;= 5s</td><td>官方 Kubemark + perf-test</td></tr></tbody></table><p>上面我们有了“性能指标”，以及这些性能指标的“判断条件”。那么怎么测试？</p><p>Kubernetes开源了Clusterloader2性能测试框架，帮助我们完成上面的测试过程，并且统计测试结果。</p><p>Clusterloader2主要提供了两个测试用例：</p><p>（1）密度测试：该测试用例主要用来测试节点规模和容器规模的性能指标。它的大致思路是：在一个有N个节点的集群中，连续创建30*N个Pod，然后再删除这些Pod，然后跟踪这个过程中，上面的三个SLO是否满足。</p><p>（2）负载测试：该测试用例的主要思路是，向K8S进行大量的各种类型的资源创建、删除、LIST以及其他操作，然后跟踪这个过程中，上面的三个SLO是否满足。</p><p>另外，由于在大多数场景中，无法真实创建5000个节点，Kubernetes开源了一个kubemark项目，用来模拟真实节点。</p><h2 id="使用-kubemark-模拟100个-node-节点" tabindex="-1"><a class="header-anchor" href="#使用-kubemark-模拟100个-node-节点" aria-hidden="true">#</a> 使用 kubemark 模拟100个 Node 节点</h2><p>环境说明：</p><ul><li>work 环境作为 性能测试环境</li><li>test 环境节点，作为 node 提供方</li></ul><h3 id="kubemark项目编译及镜像制作" tabindex="-1"><a class="header-anchor" href="#kubemark项目编译及镜像制作" aria-hidden="true">#</a> kubemark项目编译及镜像制作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载指定版本源码</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> v1.18.10 https://github.com/kubernetes/kubernetes.git
<span class="token builtin class-name">cd</span> kubernetes/

./hack/build-go.sh cmd/kubemark/
<span class="token function">cp</span> _output/bin/kubemark cluster/images/kubemark/
<span class="token builtin class-name">cd</span> cluster/images/kubemark/
<span class="token comment"># 修改 Dockerfile 中镜像为 centos:7</span>
<span class="token function">make</span> build
<span class="token comment"># 改镜像仓库，改tag，push,方便其他节点使用</span>
<span class="token function">docker</span> tag staging-k8s.gcr.io/kubemark:latest wangzhichidocker/kubemark:0.1
<span class="token function">docker</span> push wangzhichidocker/kubemark:0.1

<span class="token comment"># test master 操作</span>
kubectl create ns kubemark
kubectl create configmap node-configmap <span class="token parameter variable">-n</span> kubemark --from-literal<span class="token operator">=</span>content.type<span class="token operator">=</span><span class="token string">&quot;test-cluster&quot;</span>
<span class="token comment"># 将 work 环境master 节点的 /root/.kube/config 拷贝过来</span>
kubectl create secret generic kubeconfig <span class="token parameter variable">--type</span><span class="token operator">=</span>Opaque <span class="token parameter variable">--namespace</span><span class="token operator">=</span>kubemark --from-file<span class="token operator">=</span>kubelet.kubeconfig<span class="token operator">=</span>config --from-file<span class="token operator">=</span>kubeproxy.kubeconfig<span class="token operator">=</span>config

<span class="token comment"># 打标签</span>
kubectl  label <span class="token function">node</span> <span class="token variable">$NodeName</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>hollow-node

<span class="token comment"># NodeName  修改maxPods值 2000</span>
kubectl  apply <span class="token parameter variable">-f</span> deploy.yaml
<span class="token comment"># deploy.yaml 内容如下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kubemark-虚化建立-100-个-node" tabindex="-1"><a class="header-anchor" href="#kubemark-虚化建立-100-个-node" aria-hidden="true">#</a> kubemark 虚化建立 100 个 node</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> hollow<span class="token punctuation">-</span>node
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubemark
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> hollow<span class="token punctuation">-</span>node
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">100</span>       <span class="token comment">###启动的虚拟节点的数量</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> hollow<span class="token punctuation">-</span>node
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> hollow<span class="token punctuation">-</span>node
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> hollow<span class="token punctuation">-</span>node
      <span class="token key atrule">initContainers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> init<span class="token punctuation">-</span>inotify<span class="token punctuation">-</span>limit
        <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sysctl&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-w&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fs.inotify.max_user_instances=524288&#39;</span><span class="token punctuation">]</span>
        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
          <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kubeconfig<span class="token punctuation">-</span>volume
        <span class="token key atrule">secret</span><span class="token punctuation">:</span>
          <span class="token key atrule">secretName</span><span class="token punctuation">:</span> kubeconfig
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> hollow<span class="token punctuation">-</span>kubelet
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wangzhichidocker/kubemark<span class="token punctuation">:</span><span class="token number">0.1</span>
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">4194</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">10250</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">10255</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CONTENT_TYPE
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>configmap
              <span class="token key atrule">key</span><span class="token punctuation">:</span> content.type
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NODE_NAME
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">fieldRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">fieldPath</span><span class="token punctuation">:</span> metadata.name
        <span class="token key atrule">command</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> /bin/sh
        <span class="token punctuation">-</span> <span class="token punctuation">-</span>c
        <span class="token punctuation">-</span> /kubemark <span class="token punctuation">-</span><span class="token punctuation">-</span>morph=kubelet <span class="token punctuation">-</span><span class="token punctuation">-</span>name=$(NODE_NAME) <span class="token punctuation">-</span><span class="token punctuation">-</span>kubeconfig=/kubeconfig/kubelet.kubeconfig $(CONTENT_TYPE) <span class="token punctuation">-</span><span class="token punctuation">-</span>alsologtostderr <span class="token punctuation">-</span><span class="token punctuation">-</span>v=2
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kubeconfig<span class="token punctuation">-</span>volume
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /kubeconfig
          <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
          <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> hollow<span class="token punctuation">-</span>proxy
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wangzhichidocker/kubemark<span class="token punctuation">:</span><span class="token number">0.1</span>
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CONTENT_TYPE
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>configmap
              <span class="token key atrule">key</span><span class="token punctuation">:</span> content.type
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NODE_NAME
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">fieldRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">fieldPath</span><span class="token punctuation">:</span> metadata.name
        <span class="token key atrule">command</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> /bin/sh
        <span class="token punctuation">-</span> <span class="token punctuation">-</span>c
        <span class="token punctuation">-</span> /kubemark <span class="token punctuation">-</span><span class="token punctuation">-</span>morph=proxy <span class="token punctuation">-</span><span class="token punctuation">-</span>name=$(NODE_NAME) <span class="token punctuation">-</span><span class="token punctuation">-</span>use<span class="token punctuation">-</span>real<span class="token punctuation">-</span>proxier=false <span class="token punctuation">-</span><span class="token punctuation">-</span>kubeconfig=/kubeconfig/kubeproxy.kubeconfig $(CONTENT_TYPE) <span class="token punctuation">-</span><span class="token punctuation">-</span>alsologtostderr <span class="token punctuation">-</span><span class="token punctuation">-</span>v=2
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kubeconfig<span class="token punctuation">-</span>volume
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /kubeconfig
          <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">&quot;Exists&quot;</span>
      <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
        <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span>
          <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>  <span class="token comment"># 硬策略</span>
            <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> name
                <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
                <span class="token key atrule">values</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> hollow<span class="token punctuation">-</span>node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-clusterloader2-进行性能测试" tabindex="-1"><a class="header-anchor" href="#使用-clusterloader2-进行性能测试" aria-hidden="true">#</a> 使用 Clusterloader2 进行性能测试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/go/src/k8s.io
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> release-1.18  https://github.com/kubernetes/perf-tests.git <span class="token parameter variable">--depth</span> <span class="token number">1</span>
<span class="token builtin class-name">cd</span> perf-tests/clusterloader2/
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>off
go build <span class="token parameter variable">-o</span> clusterloader <span class="token string">&#39;./cmd/&#39;</span>

<span class="token comment"># 找到测试目录</span>
<span class="token builtin class-name">cd</span> testing/density/
<span class="token function">cp</span> config.yaml config.yaml.bak
<span class="token comment"># 修改 config.yaml 中的变量</span>
NODES_PER_NAMESPACE 改为 <span class="token number">10</span>
<span class="token comment"># pkg/execservice/manifest/exec_deployment.yaml 和 testing/density/deployment.yaml 镜像地址</span>

<span class="token comment"># 安装配置 Prometheus 抓取指标</span>
<span class="token function">git</span> clone https://github.com/prometheus-operator/kube-prometheus.git <span class="token parameter variable">--depth</span> <span class="token number">1</span>
kubectl create <span class="token parameter variable">-f</span> manifests/setup
kubectl create <span class="token parameter variable">-f</span> manifests/
<span class="token comment"># 删除 Prometheus 的网络策略 和不必要的 target</span>
<span class="token comment"># 否则网络不通，同时创建性能测试时会卡住</span>
kubectl <span class="token parameter variable">-n</span> monitoring delete  networkpolicies.networking.k8s.io prometheus-k8s
kubectl <span class="token parameter variable">-n</span> monitoring delete networkpolicies.networking.k8s.io grafana
kubectl <span class="token parameter variable">-n</span> monitoring delete servicemonitors.monitoring.coreos.com  kubelet
kubectl <span class="token parameter variable">-n</span> monitoring delete servicemonitors.monitoring.coreos.com node-exporter
kubectl <span class="token parameter variable">-n</span> monitoring  delete daemonsets.apps node-exporter
<span class="token comment"># 导入 SLO dashboard(pkg/prometheus/manifests/dashboards/slo.json)，更改规则，record metric</span>
kubectl apply <span class="token parameter variable">-f</span> pkg/prometheus/manifests/prometheus-rules.yaml
<span class="token comment"># 配置全局的变量</span>
<span class="token function">cp</span> /root/.ssh/id_rsa /root/.ssh/google_compute_engine <span class="token comment"># benchmark 需要</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>
<span class="token assign-left variable">KUBE_CONFIG</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/.kube/config
<span class="token assign-left variable">PROVIDER</span><span class="token operator">=</span><span class="token string">&#39;kubemark&#39;</span>
<span class="token assign-left variable">MASTER_SSH_IP</span><span class="token operator">=</span><span class="token variable">$MASTER_SSH_IP</span>
<span class="token assign-left variable">KUBE_SSH_KEY_PATH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/.ssh/id_rsa
<span class="token assign-left variable">MASTER_SSH_USER_NAME</span><span class="token operator">=</span>root
<span class="token assign-left variable">TEST_CONFIG</span><span class="token operator">=</span><span class="token string">&#39;./testing/density/config.yaml&#39;</span>
./clusterloader <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span><span class="token variable">$KUBE_CONFIG</span> <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token variable">$PROVIDER</span> <span class="token parameter variable">--masterip</span><span class="token operator">=</span><span class="token variable">$MASTER_SSH_IP</span> <span class="token parameter variable">--testconfig</span><span class="token operator">=</span><span class="token variable">$TEST_CONFIG</span> --report-dir<span class="token operator">=</span><span class="token string">&quot;./reports&quot;</span> <span class="token parameter variable">--alsologtostderr</span> --enable-prometheus-server<span class="token operator">=</span>true --tear-down-prometheus-server<span class="token operator">=</span>false --kubemark-root-kubeconfig<span class="token operator">=</span><span class="token variable">$KUBE_CONFIG</span>  <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">tee</span> test.log

<span class="token comment"># 此工具会先启动三个名为exec-pod的pod，之后通过配置的depolyment启动pod</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析报告</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># APIResponsivenessPrometheus</span>
<span class="token function">cat</span> APIResponsivenessPrometheus_density_2023-06-25T15<span class="token punctuation">\\</span>:25<span class="token punctuation">\\</span>:39+08<span class="token punctuation">\\</span>:00.json  <span class="token operator">|</span> <span class="token function">grep</span> Perc99 <span class="token operator">|</span> <span class="token function">grep</span>  <span class="token parameter variable">-v</span> <span class="token string">&#39;&quot;Perc99&quot;: 0&#39;</span>
<span class="token comment"># 找到耗时较高的数值进行分析, Pod List 和 Node List 耗时较高</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Perc50&quot;</span><span class="token builtin class-name">:</span> <span class="token number">34.481725</span>,
        <span class="token string">&quot;Perc90&quot;</span><span class="token builtin class-name">:</span> <span class="token number">95.6625</span>,
        <span class="token string">&quot;Perc99&quot;</span><span class="token builtin class-name">:</span> <span class="token number">14323</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;unit&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ms&quot;</span>,
      <span class="token string">&quot;labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Count&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1493&quot;</span>,
        <span class="token string">&quot;Resource&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pods&quot;</span>,
        <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cluster&quot;</span>,
        <span class="token string">&quot;SlowCount&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1490&quot;</span>,
        <span class="token string">&quot;Subresource&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;Verb&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;LIST&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Perc50&quot;</span><span class="token builtin class-name">:</span> <span class="token number">35.494424</span>,
        <span class="token string">&quot;Perc90&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1844.541666</span>,
        <span class="token string">&quot;Perc99&quot;</span><span class="token builtin class-name">:</span> <span class="token number">4349</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;unit&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ms&quot;</span>,
      <span class="token string">&quot;labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Count&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4634&quot;</span>,
        <span class="token string">&quot;Resource&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;nodes&quot;</span>,
        <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cluster&quot;</span>,
        <span class="token string">&quot;SlowCount&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4629&quot;</span>,
        <span class="token string">&quot;Subresource&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;Verb&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;LIST&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
<span class="token comment"># vim PodStartupLatency_SaturationPodStartupLatency_density_2023-06-21T18\\:01\\:47+08\\:00.json</span>
<span class="token comment"># 分析调度延迟</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0&quot;</span>,
  <span class="token string">&quot;dataItems&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Perc50&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;Perc90&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;Perc99&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1000</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;unit&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ms&quot;</span>,
      <span class="token string">&quot;labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Metric&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;create_to_schedule&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Perc50&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;Perc90&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1000</span>,
        <span class="token string">&quot;Perc99&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3000</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;unit&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ms&quot;</span>,
      <span class="token string">&quot;labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Metric&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;schedule_to_run&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Perc50&quot;</span><span class="token builtin class-name">:</span> <span class="token number">212966.461221</span>,
        <span class="token string">&quot;Perc90&quot;</span><span class="token builtin class-name">:</span> <span class="token number">396976.212344</span>,
        <span class="token string">&quot;Perc99&quot;</span><span class="token builtin class-name">:</span> <span class="token number">445981.781733</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;unit&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ms&quot;</span>,
      <span class="token string">&quot;labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Metric&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;run_to_watch&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Perc50&quot;</span><span class="token builtin class-name">:</span> <span class="token number">212973.348171</span>,
        <span class="token string">&quot;Perc90&quot;</span><span class="token builtin class-name">:</span> <span class="token number">396985.062556</span>,
        <span class="token string">&quot;Perc99&quot;</span><span class="token builtin class-name">:</span> <span class="token number">446977.294416</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;unit&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ms&quot;</span>,
      <span class="token string">&quot;labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Metric&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;schedule_to_watch&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Perc50&quot;</span><span class="token builtin class-name">:</span> <span class="token number">212975.328713</span>,
        <span class="token string">&quot;Perc90&quot;</span><span class="token builtin class-name">:</span> <span class="token number">396985.234373</span>,
        <span class="token string">&quot;Perc99&quot;</span><span class="token builtin class-name">:</span> <span class="token number">446979.922275</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;unit&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ms&quot;</span>,
      <span class="token string">&quot;labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Metric&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pod_startup&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20230625174155318.png" alt="image-20230625174155318"></p><p>参考链接：</p>`,29),r={href:"https://github.com/kubernetes/community/blob/master/sig-scalability/slos/slos.md",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/kubernetes/perf-tests/blob/release-1.18/clusterloader2/README.md",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/kubernetes/community/blob/master/contributors/devel/sig-scalability/kubemark-setup-guide.md",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.kancloud.cn/pshizhsysu/kubernetes/2505908",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.kancloud.cn/pshizhsysu/kubernetes/3045177",target:"_blank",rel:"noopener noreferrer"};function b(g,q){const s=l("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[n("a",r,[a("Kubernetes 官方 slos"),e(s)])]),n("p",null,[n("a",k,[a("clusterloader2 测试使用文档"),e(s)])]),n("p",null,[n("a",d,[a("kubemark 设置文档"),e(s)])]),n("p",null,[n("a",m,[a("性能测试简介"),e(s)])]),n("p",null,[n("a",v,[a("运行density测试"),e(s)])])])}const f=t(c,[["render",b],["__file","k8s-benchmark.html.vue"]]);export{f as default};
