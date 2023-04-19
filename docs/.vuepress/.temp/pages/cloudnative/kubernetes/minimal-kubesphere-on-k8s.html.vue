<template><h1 id="在-kubernetes-上最小化安装-kubesphere" tabindex="-1"><a class="header-anchor" href="#在-kubernetes-上最小化安装-kubesphere" aria-hidden="true">#</a> 在 Kubernetes 上最小化安装 KubeSphere</h1>
<h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h2>
<ul>
<li>如需在 Kubernetes 上安装 KubeSphere v3.1.1，您的 Kubernetes 版本必须为：1.17.x、1.18.x、1.19.x 或 1.20.x。</li>
<li>确保您的机器满足最低硬件要求：CPU &gt; 1 核，内存 &gt; 2 GB。</li>
<li>在安装之前，需要配置 Kubernetes 集群中的<strong>默认</strong>存储类型。</li>
</ul>
<p><strong>改变默认 StorageClass</strong></p>
<p>存储我们选用ceph，安装详见 <a href="https://clay-wangzhi.com/cloudnative/kubernetes/deploy-ceph-cluster-with-rook/" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl patch storageclass rook-cephfs  -p <span class="token string">'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>不建议您在生产环境中使用 NFS 存储（尤其是在 Kubernetes 1.20 或以上版本），这可能会引起 <code>failed to obtain lock</code> 和 <code>input/output error</code> 等问题，从而导致 Pod <code>CrashLoopBackOff</code>。此外，部分应用不兼容 NFS，例如 <a href="https://github.com/prometheus/prometheus/blob/03b354d4d9386e4b3bfbcd45da4bb58b182051a5/docs/storage.md#operational-aspects" target="_blank" rel="noopener noreferrer">Prometheus<ExternalLinkIcon/></a> 等。</p>
</blockquote>
<h2 id="部署-kubesphere" tabindex="-1"><a class="header-anchor" href="#部署-kubesphere" aria-hidden="true">#</a> 部署 KubeSphere</h2>
<p>确保您的机器满足安装的前提条件之后，可以按照以下步骤安装 KubeSphere。</p>
<ol>
<li>
<p>执行以下命令开始安装：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/kubesphere-installer.yaml
   
kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/cluster-configuration.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>检查安装日志：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>使用 <code>kubectl get pod --all-namespaces</code> 查看所有 Pod 是否在 KubeSphere 的相关命名空间中正常运行。如果是，请通过以下命令检查控制台的端口（默认为 <code>30880</code>）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl get svc/ks-console -n kubesphere-system
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>确保在安全组中打开了端口 <code>30880</code>，并通过 NodePort <code>(IP:30880)</code> 使用默认帐户和密码 <code>(admin/P@88w0rd)</code> 访问 Web 控制台。</p>
</li>
<li>
<p>登录控制台后，您可以在<strong>服务组件</strong>中检查不同组件的状态。如果要使用相关服务，可能需要等待某些组件启动并运行。</p>
<p><img src="https://kubesphere.com.cn/images/docs/zh-cn/quickstart/minimal-kubesphere-on-k8s/kubesphere-components.png" alt="kubesphere-components" loading="lazy"></p>
</li>
</ol>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2>
<p>错误信息：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Error creating: pods “ks-console-5576fccbb8-” is forbidden: error looking up service account kubesphere-system/kubesphere: serviceaccount “kubesphere” not found
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>解决办法：</p>
<p>用https://github.com/kubesphere/ks-installer/blob/master/scripts/kubesphere-delete.sh 这个脚本卸载</p>
<p>不能直接 <code>delete -f</code></p>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>
<ul>
<li>
<p><a href="https://kubesphere.com.cn/docs/quick-start/minimal-kubesphere-on-k8s/" target="_blank" rel="noopener noreferrer">在 Kubernetes 上最小化安装 KubeSphere | KubeSphere官网<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://kubesphere.com.cn/forum/d/4519-kubesphere-ks-apiserver-rs" target="_blank" rel="noopener noreferrer">重现安装kubesphere 时候 ks-apiserver 的 rs 报错 | 开发者社区<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://kubernetes.io/zh/docs/tasks/administer-cluster/change-default-storage-class/" target="_blank" rel="noopener noreferrer">改变默认 StorageClass | kubernetes官网<ExternalLinkIcon/></a></p>
</li>
</ul>
</template>
