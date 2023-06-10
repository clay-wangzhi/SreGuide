<template><div><h1 id="longorn-安装配置" tabindex="-1"><a class="header-anchor" href="#longorn-安装配置" aria-hidden="true">#</a> Longorn 安装配置</h1>
<h2 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置" aria-hidden="true">#</a> 安装配置</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 检查相关依赖，如果没有，安装官方文档进行安装</span>
<span class="token function">curl</span> <span class="token parameter variable">-sSfL</span> https://raw.githubusercontent.com/longhorn/longhorn/v1.3.0/scripts/environment_check.sh <span class="token operator">|</span> <span class="token function">bash</span>
<span class="token comment"># helm 安装</span>
helm repo <span class="token function">add</span> longhorn https://charts.longhorn.io
helm pull longhorn/longhorn <span class="token parameter variable">--version</span> <span class="token number">1.3</span>.0
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> longhorn-1.3.0.tgz
<span class="token builtin class-name">cd</span> longhorn/
helm <span class="token function">install</span> longhorn <span class="token parameter variable">--namespace</span> longhorn-system --create-namespace ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="功能测试" tabindex="-1"><a class="header-anchor" href="#功能测试" aria-hidden="true">#</a> 功能测试</h2>
<h3 id="备份恢复" tabindex="-1"><a class="header-anchor" href="#备份恢复" aria-hidden="true">#</a> 备份恢复</h3>
<p>通过 Longhorn UI 进行配置，我这里使用 腾讯云的 COS 进行备份</p>
<p>首先要 在 rancher 上配置 secret</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220923155113113.png" alt="image-20220923155113113"></p>
<p>然后在 longhorn UI 的 settings 页面配置 Backup Target</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220923155225931.png" alt="image-20220923155225931"></p>
<blockquote>
<p>⚠️  注意格式，及得在 COS 上提前创建好目录</p>
</blockquote>
<p>校验是否创建成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl <span class="token parameter variable">-n</span> longhorn-system get backuptargets.longhorn.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="其他功能" tabindex="-1"><a class="header-anchor" href="#其他功能" aria-hidden="true">#</a> 其他功能</h3>
<p>创建应用测试，参考下方链接进行测试</p>
<ul>
<li>
<p>ReadWriteMany</p>
</li>
<li>
<p>CSI 卷快照</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/kubernetes-csi/external-snapshotter
<span class="token comment"># 根据支持的 k8s 兼容版本进行 apply</span>
<span class="token builtin class-name">cd</span> external-snapshotter <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> checkout v4.0.1
kubectl apply <span class="token parameter variable">-f</span> client/config/crd/
<span class="token comment"># 镜像拉不到可以找个dockerhub, liangjw/snapshot-controller:v4.0.0</span>
kubectl apply <span class="token parameter variable">-f</span> deploy/kubernetes/snapshot-controller/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>CSI 卷恢复</p>
</li>
<li>
<p>CSI 卷克隆</p>
<p>要求扩展的卷必须处于 <code v-pre>detached</code> 状态才能操作</p>
</li>
</ul>
<p>参考链接：</p>
<ul>
<li>https://longhorn.io/docs/1.3.1/deploy/install/install-with-rancher/</li>
<li>https://longhorn.io/docs/1.3.1/deploy/install/install-with-helm/</li>
<li><a href="https://kube100.com/d/6" target="_blank" rel="noopener noreferrer">云原生分布式块存储 Longhorn 初体验<ExternalLinkIcon/></a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzU4MjQ0MTU4Ng==&amp;mid=2247497465&amp;idx=1&amp;sn=0cd268d145f622b7fb5b35fa88d0abb4&amp;chksm=fdbaf9e4cacd70f2eb0695f565d10875d90f0b9857da3734a385a73579f97aeb8a0575a93958&amp;mpshare=1&amp;scene=1&amp;srcid=07214JQqcaJXHvh6PJfXlFkc&amp;sharer_sharetime=1658397389879&amp;sharer_shareid=35faa6bb6d10f874cf6f57390f055300&amp;version=4.0.0.70098&amp;platform=mac#rd" target="_blank" rel="noopener noreferrer">Longhorn 高级使用之备份恢复与 ReadWriteMany<ExternalLinkIcon/></a></li>
<li><a href="https://kube100.com/d/9" target="_blank" rel="noopener noreferrer">通过 Kubernetes CSI 实现 Longhorn 卷快照备份、恢复、克隆与扩容操作<ExternalLinkIcon/></a></li>
</ul>
</div></template>


