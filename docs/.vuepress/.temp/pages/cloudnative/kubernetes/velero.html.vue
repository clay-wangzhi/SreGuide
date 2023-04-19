<template><h1 id="velero-备份恢复" tabindex="-1"><a class="header-anchor" href="#velero-备份恢复" aria-hidden="true">#</a> velero 备份恢复</h1>
<h2 id="方案制定" tabindex="-1"><a class="header-anchor" href="#方案制定" aria-hidden="true">#</a> 方案制定</h2>
<ol>
<li>物理备份：etcd 备份，保存某一个时刻的快照，快捷方便。</li>
<li>逻辑备份：velero 备份 ，允许用户自己选择备份的内容，比如单个 namespace、指定资源类型等</li>
</ol>
<p>物理备份的优点是速度快，无论是备份还是回恢复，但缺点是元数据不可读，只能全部恢复。而逻辑备份正好相反，因此两者可以结合使用，既能快，又能有细粒度控制的能力。</p>
<blockquote>
<p>etcd 备份恢复见<RouterLink to="/cloudnative/kubernetes/etcd-backup-restore.html">上文</RouterLink></p>
</blockquote>
<h2 id="备份信息" tabindex="-1"><a class="header-anchor" href="#备份信息" aria-hidden="true">#</a> 备份信息</h2>
<p>volumes 建议有 csi 进行备份，耗时较长，容易失败</p>
<p>备份策略如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 备份</span>
velero backup create offline-k8s-work --include-namespaces<span class="token operator">=</span>work --snapshot-volumes<span class="token operator">=</span>false --default-volumes-to-restic<span class="token operator">=</span>false
<span class="token comment">## 周期备份</span>
velero create schedule offline-k8s-work --schedule<span class="token operator">=</span><span class="token string">"30 23 * * *"</span> --include-namespaces<span class="token operator">=</span>work --snapshot-volumes<span class="token operator">=</span>false --default-volumes-to-restic<span class="token operator">=</span>false --ttl<span class="token operator">=</span>168h
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="velero-备份恢复操作步骤" tabindex="-1"><a class="header-anchor" href="#velero-备份恢复操作步骤" aria-hidden="true">#</a> velero 备份恢复操作步骤</h2>
<h3 id="velero-备份" tabindex="-1"><a class="header-anchor" href="#velero-备份" aria-hidden="true">#</a> velero 备份</h3>
<ol>
<li>
<p>配置 COS 对象存储
参考：<a href="https://cloud.tencent.com/document/product/457/50122" target="_blank" rel="noopener noreferrer">使用对象存储 COS 作为 Velero 存储实现集群资源备份和还原<ExternalLinkIcon/></a></p>
</li>
<li>
<p>安装 velero</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载版本：https://github.com/vmware-tanzu/velero/releases 最新稳定版，注意k8s版本兼容性，1.8.1版本要求k8s版本至少1.16</span>
<span class="token function">wget</span> https://github.com/vmware-tanzu/velero/releases/download/v1.8.1/velero-v1.8.1-linux-amd64.tar.gz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> -xvf velero-v1.8.1-linux-amd64.tar.gz
<span class="token comment"># 加入环境变量</span>
<span class="token function">cp</span> velero-v1.8.1-linux-amd64/velero /usr/bin/
<span class="token comment"># 设置补全命令</span>
velero completion <span class="token function">bash</span> <span class="token operator">></span> /etc/bash_completion.d/velero.sh
<span class="token builtin class-name">source</span> /etc/bash_completion.d/velero.sh
<span class="token comment"># 安装</span>
velero <span class="token function">install</span>  --provider aws --plugins velero/velero-plugin-for-aws:v1.1.0 --bucket  velero-xxx --secret-file ./credentials-velero --use-volume-snapshots<span class="token operator">=</span>false --use-restic --default-volumes-to-restic --backup-location-config <span class="token assign-left variable">region</span><span class="token operator">=</span>ap-shanghai,s3ForcePathStyle<span class="token operator">=</span><span class="token string">"true"</span>,s3Url<span class="token operator">=</span>https://cos.ap-shanghai.myqcloud.com --restic-pod-cpu-request<span class="token operator">=</span>1000m --restic-pod-cpu-limit<span class="token operator">=</span>2000m --restic-pod-mem-request<span class="token operator">=</span>1024Mi --restic-pod-mem-limit<span class="token operator">=</span>4096Mi  --velero-pod-cpu-request<span class="token operator">=</span>1000m --velero-pod-cpu-limit<span class="token operator">=</span>2000m --velero-pod-mem-request<span class="token operator">=</span>1024Mi --velero-pod-mem-limit<span class="token operator">=</span>4096Mi
<span class="token comment"># 查看配置的存储位置是否可用</span>
velero backup-location get
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li>
<li>
<p>备份
根据实际情况备份指定namespace 或 指定资源类型</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>velero backup create test-backup 一次性备份
velero create schedule NAME --schedule<span class="token operator">=</span><span class="token string">"0 */6 * * *”
velero create schedule NAME --schedule="</span>@every 6h<span class="token string">" 定时备份
velero create schedule NAME --schedule="</span>@every 6h<span class="token string">" --exclude-resources persistentvolumeclaims,persistentvolumes
velero create schedule NAME --schedule="</span>@every 24h<span class="token string">" --include-namespaces web
velero create schedule NAME --schedule="</span>@every 168h" --ttl 2160h0m0s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ol>
<h3 id="velero-恢复" tabindex="-1"><a class="header-anchor" href="#velero-恢复" aria-hidden="true">#</a> velero 恢复</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>velero restore create restore-1 --from-backup backup-1
velero restore create --from-backup backup-1
velero restore create --from-schedule NAME 或通过namespace和type指定恢复的内容
velero restore create --from-schedule schedule-1 --allow-partially-failed
velero restore create --from-backup backup-2 --include-resources persistentvolumeclaims,persistentvolumes
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3>
<ul>
<li>
<p>velero 备份删除</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>velero backup delete test-backup
velero schedule delete test-schedule
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>velero 卸载</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl delete namespace/velero clusterrolebinding/velero
kubectl delete crds -l <span class="token assign-left variable">component</span><span class="token operator">=</span>velero
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
</template>
