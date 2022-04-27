<template><h1 id="node节点禁止调度-平滑维护-方式-cordon-drain-delete" tabindex="-1"><a class="header-anchor" href="#node节点禁止调度-平滑维护-方式-cordon-drain-delete" aria-hidden="true">#</a> Node节点禁止调度（平滑维护）方式 - cordon，drain，delete</h1>
<blockquote>
<p>转载自：<a href="https://cloud.tencent.com/developer/article/1796315" target="_blank" rel="noopener noreferrer">Node节点禁止调度（平滑维护）方式- cordon，drain，delete<ExternalLinkIcon/></a></p>
</blockquote>
<p>cordon、drain和delete三个命令都会使node停止被调度，后期创建的pod不会继续被调度到该节点上，但操作的暴力程度却不一样。</p>
<h2 id="一、cordon-停止调度-不可调度-临时从k8s集群隔离" tabindex="-1"><a class="header-anchor" href="#一、cordon-停止调度-不可调度-临时从k8s集群隔离" aria-hidden="true">#</a> 一、cordon 停止调度（不可调度，临时从K8S集群隔离）</h2>
<ul>
<li>影响最小，只会将node标识为SchedulingDisabled不可调度状态。</li>
<li>之后K8S再创建的pod资源，不会被调度到该节点。</li>
<li>旧有的pod不会受到影响，仍正常对外提供服务。</li>
<li>禁止调度命令&quot;kubectl cordon node_name&quot;。</li>
<li>恢复调度命令&quot;kubectl uncordon node_name&quot;。（恢复到K8S集群中，变回可调度状态）</li>
</ul>
<h2 id="二、drain-驱逐节点-先不可调度-然后排干" tabindex="-1"><a class="header-anchor" href="#二、drain-驱逐节点-先不可调度-然后排干" aria-hidden="true">#</a> 二、drain 驱逐节点（先不可调度，然后排干）</h2>
<ul>
<li>首先，驱逐Node上的pod资源到其他节点重新创建。</li>
<li>接着，将节点调为SchedulingDisabled不可调度状态。</li>
<li>禁止调度命令&quot;kubectl drain node_name --force --ignore-daemonsets --delete-local-data&quot;</li>
<li>恢复调度命令&quot;kubectl uncordon node_name&quot;。（恢复到K8S集群中，变回可调度状态）</li>
<li>drain方式是安全驱逐pod，会等到pod容器应用程序优雅停止后再删除该pod。</li>
<li>drain驱逐流程：先在Node节点删除pod，然后再在其他Node节点创建该pod。所以为了确保drain驱逐pod过程中不中断服务（即做到&quot;无感知&quot;地平滑驱逐），必须保证要驱逐的pod副本数大于1，并且采用了&quot;反亲和策略&quot;将这些pod调度到不同的Node节点上了！也就是说，在&quot;多个pod副本+反亲和策略&quot;的场景下，drain驱逐过程对<a href="https://cloud.tencent.com/product/tke?from=10680" target="_blank" rel="noopener noreferrer">容器服务<ExternalLinkIcon/></a>是没有影响的。</li>
</ul>
<p>需要注意：</p>
<ul>
<li>对节点执行维护操作之前（例如：内核升级，硬件维护等），您可以使用 kubectl drain 安全驱逐节点上面所有的 pod。</li>
<li>drain安全驱逐方式将会允许 pod 里面的容器遵循指定的 PodDisruptionBudgets 执行优雅中止。也就是说，drain安全驱逐可以做到：优雅地终止pod里的容器进程。</li>
<li>kubectl drain 返回成功表明所有的 pod （除了排除的那些）已经被安全驱逐（遵循期望优雅的中止期，并且没有违反任何应用程序级别的中断预算）。</li>
<li>然后，通过对物理机断电或者在云平台上删除节点所在的虚拟机，都能安全的将节点移除。</li>
</ul>
<p>一般线上K8S的PDB（PodDisruptionBudgets）配置的也是符合Pod驱逐的理想情况的，即maxUnavailable设置为0，maxSurge设置为1：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">replicas</span><span class="token operator">:</span> <span class="token number">3</span>
  <span class="token literal-property property">strategy</span><span class="token operator">:</span>
    <span class="token literal-property property">rollingUpdate</span><span class="token operator">:</span>
      <span class="token literal-property property">maxSurge</span><span class="token operator">:</span> <span class="token number">1</span>           
      <span class="token literal-property property">maxUnavailable</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> RollingUpdate
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>默认情况下，kubectl drain 会忽略那些不能杀死的系统类型的 pod。drain命令中需要添加三个参数：--force、--ignore-daemonsets、--delete-local-data</p>
<ul>
<li>--force 当一些pod不是经 ReplicationController, ReplicaSet, Job, DaemonSet 或者 StatefulSet 管理的时候就需要用--force来强制执行 (例如:kube-proxy)</li>
<li>--ignore-daemonsets 无视DaemonSet管理下的Pod。即--ignore-daemonsets往往需要指定的,这是因为deamonset会忽略unschedulable标签(使用kubectl drain时会自动给节点打上不可调度标签),因此deamonset控制器控制的pod被删除后可能马上又在此节点上启动起来,这样就会成为死循环.因此这里忽略daemonset。</li>
<li>--delete-local-data 如果有mount local volumn的pod，会强制杀掉该pod。</li>
</ul>
<p>drain禁止调度的操作步骤：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>确定要排空的节点的名称
# kubectl <span class="token keyword">get</span> nodes
 
查看pod
# kubectl <span class="token keyword">get</span> po 

命令node节点开始释放所有pod，并且不接收新的pod进程
# kubectl drain <span class="token punctuation">[</span>node<span class="token operator">-</span>name<span class="token punctuation">]</span> <span class="token operator">--</span>force <span class="token operator">--</span>ignore<span class="token operator">-</span>daemonsets <span class="token operator">--</span><span class="token keyword">delete</span><span class="token operator">-</span>local<span class="token operator">-</span>data 

此时可以对该node节点进行平滑维护，后续需要恢复到k8s集群中：
# kubectl uncordon <span class="token punctuation">[</span>node<span class="token operator">-</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="三、delete-删除节点" tabindex="-1"><a class="header-anchor" href="#三、delete-删除节点" aria-hidden="true">#</a> 三、delete 删除节点</h2>
<ul>
<li>首先，驱逐Node节点上的pod资源到其他节点重新创建。</li>
<li>驱逐流程：先在Node节点删除pod，然后再在其他Node节点上创建这些pod。</li>
<li>node节点删除，master失去对其控制，该节点从k8s集群摘除。</li>
<li>delete是一种暴力删除node的方式。在驱逐pod时是强制干掉容器进程，做不到优雅终止Pod。相比较而言，显然drain更安全。</li>
</ul>
<p>恢复调度（即重新加入到K8S集群中）</p>
<ul>
<li>delete删除后，后续如果需重新加入K8S集群。则需要重启node节点的kubelet服务，重启后，基于node的自注册功能，该节点才能重新加入到K8S集群，并且恢复使用（即恢复可调度的身份）。</li>
<li>另外：如果kubelet服务重启后，node节点系统时间跟其他节点不一致，则导致该节点证书会失效！kubelet注册后，还需要手动approve签发TLS认证操作了。如下示例：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>k8s<span class="token operator">-</span>vm02节点重启后，系统时间变了，跟其他node节点系统时间不一致，导致该节点的集群证书失效！
<span class="token punctuation">[</span>root@k8s<span class="token operator">-</span>vm01 ingress<span class="token punctuation">]</span># kubectl exec <span class="token operator">-</span>ti test<span class="token operator">-</span>finhub<span class="token operator">-</span>app<span class="token operator">-</span>56df548879<span class="token operator">-</span>ghlb2 <span class="token operator">-</span>n wiseco <span class="token operator">--</span> <span class="token operator">/</span>bin<span class="token operator">/</span>bash
Error from server<span class="token operator">:</span> error dialing backend<span class="token operator">:</span> x509<span class="token operator">:</span> certificate is valid <span class="token keyword">for</span> k8s<span class="token operator">-</span>vm01<span class="token punctuation">,</span> not k8s<span class="token operator">-</span>vm02

<span class="token punctuation">[</span>root@k8s<span class="token operator">-</span>vm01 ingress<span class="token punctuation">]</span># kubectl <span class="token keyword">get</span> csr 
<span class="token constant">NAME</span>        <span class="token constant">AGE</span>     <span class="token constant">REQUESTOR</span>              <span class="token constant">CONDITION</span>
csr<span class="token operator">-</span>7zt2w   50m     system<span class="token operator">:</span>node<span class="token operator">:</span>k8s<span class="token operator">-</span>vm02   Pending
csr<span class="token operator">-</span>8sw6k   36m     system<span class="token operator">:</span>node<span class="token operator">:</span>k8s<span class="token operator">-</span>vm02   Pending
csr<span class="token operator">-</span>9jv7z   21m     system<span class="token operator">:</span>node<span class="token operator">:</span>k8s<span class="token operator">-</span>vm02   Pending

需要手动approve签发<span class="token constant">TLS</span>认证
<span class="token punctuation">[</span>root@k8s<span class="token operator">-</span>vm01 ingress<span class="token punctuation">]</span># kubectl certificate approve csr<span class="token operator">-</span>7zt2w
<span class="token punctuation">[</span>root@k8s<span class="token operator">-</span>vm01 ingress<span class="token punctuation">]</span># kubectl certificate approve csr<span class="token operator">-</span>8sw6k
<span class="token punctuation">[</span>root@k8s<span class="token operator">-</span>vm01 ingress<span class="token punctuation">]</span># kubectl certificate approve csr<span class="token operator">-</span>9jv7z 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="四、node节点平滑维护" tabindex="-1"><a class="header-anchor" href="#四、node节点平滑维护" aria-hidden="true">#</a> 四、Node节点平滑维护</h2>
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
</template>
