<template><h1 id="使用-kubeadm-手动更新证书" tabindex="-1"><a class="header-anchor" href="#使用-kubeadm-手动更新证书" aria-hidden="true">#</a> 使用 kubeadm 手动更新证书</h1>
<p>背景：K8S 各个组件需要与 api-server 进行通信，通信使用的证书都存放在 /etc/kubernetes/pki 路径下，kubeadm 生成的证书默认有效为 1 年，因此需要定时更新证书，否则证书到期会导致整个集群不可用。
自动更新证书，Kubenetes 在升级控制面板相关组件时会主动更新证书，因此如果保证 Kubernetes 能够定期（一年以内）升级的话，证书会自动更新。</p>
<p>环境说明：k8s 1.18.10</p>
<p>以下步骤，在所有 master 节点执行</p>
<p>具体操作步骤
1）检查证书是否过期，以下两个命令均可</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubeadm alpha certs check-expiration
openssl x509 -in /etc/kubernetes/pki/apiserver.crt -noout -text <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">' Not '</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2）证书、配置文件等备份</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> -rp /etc/kubernetes /etc/kubernetes.bak
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3）重新生成证书</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubeadm alpha certs renew all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4）重新生成配置文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> -f /etc/kubernetes/*.conf
kubeadm init phase kubeconfig all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>5）重启 kubelet、apiserver、scheduler、controller-manager、etcd</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl restart kubelet
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token string">"k8s_kube-apiserver|k8s_kube-scheduler|k8s_kube-controller-manager|k8s_etcd"</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $1}'</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>6）更新 admin 配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> /etc/kubernetes/admin.conf ~/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>7）检查证书过期时间</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubeadm alpha certs check-expiration
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>如果重新生成过程中有错误，就把旧文件删除</p>
</blockquote>
</template>
