<template><h1 id="kubernetes-污点-taint-和容忍-toleration" tabindex="-1"><a class="header-anchor" href="#kubernetes-污点-taint-和容忍-toleration" aria-hidden="true">#</a> Kubernetes 污点 Taint 和容忍 Toleration</h1>
<blockquote>
<p>转载自：<a href="http://www.mydlq.club/article/69/" target="_blank" rel="noopener noreferrer">Kubernetes 污点 Taint 和容忍 Toleration | 超级小豆丁<ExternalLinkIcon/></a></p>
</blockquote>
<p>参考地址：<a href="https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/" target="_blank" rel="noopener noreferrer">kubernetes 官方文档 Taint And Toleration<ExternalLinkIcon/></a></p>
<h2 id="一、介绍" tabindex="-1"><a class="header-anchor" href="#一、介绍" aria-hidden="true">#</a> 一、介绍</h2>
<p>​    在 Kubernetes 中，节点亲和性 <code>NodeAffinity</code> 是 Pod 上定义的一种属性，能够使 <code>Pod</code> 按我们的要求调度到某个节点上，而 <code>Taints</code>(污点) 则恰恰相反，它是 <code>Node</code> 上的一个属性，可以让 Pod 不能调度到带污点的节点上，甚至会对带污点节点上已有的 Pod 进行驱逐。当然，对应的 <code>Kubernetes</code> 可以给 <code>Pod</code> 设置 <code>Tolerations</code>(容忍) 属性来让 <code>Pod</code> 能够容忍节点上设置的污点，这样在调度时就会忽略节点上设置的污点，将 <code>Pod</code> 调度到该节点。一般时候 <code>Taints</code> 通常与 <code>Tolerations</code> 配合使用。</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/shuiyin.png" alt="img" loading="lazy"></p>
<h2 id="二、污点-taints" tabindex="-1"><a class="header-anchor" href="#二、污点-taints" aria-hidden="true">#</a> 二、污点 taints</h2>
<h3 id="_1、查看污点" tabindex="-1"><a class="header-anchor" href="#_1、查看污点" aria-hidden="true">#</a> 1、查看污点</h3>
<p>污点是设置在 <code>Node</code> 节点上，所以我们可以通过查看节点信息来查找该节点是否设置污点以及对污点的信息，首先使用 <code>kubectl get node</code> 命令查看节点列表：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl get <span class="token function">node</span>

NAME            STATUS   ROLES    AGE    VERSION
k8s-master      Ready    master   102d   v1.16.6
k8s-node-2-12   Ready    <span class="token operator">&lt;</span>none<span class="token operator">></span>   102d   v1.16.6
k8s-node-2-13   Ready    <span class="token operator">&lt;</span>none<span class="token operator">></span>   102d   v1.16.6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>污点信息可以通过 <code>kubectl describe nodes {Node名称}</code> 命令，查看输出节点描述信息一栏中 <code>Taints</code> 标题后面的内容，即是污点的信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl describe nodes k8s-master

<span class="token punctuation">..</span>.
CreationTimestamp:  Sat, <span class="token number">23</span> Nov <span class="token number">2019</span> 00:52:45 +0800
Taints:             node-role.kubernetes.io/master:PreferNoSchedule
Unschedulable:      <span class="token boolean">false</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>污点内容一般组成为 <code>key</code>、<code>value</code> 及一个 <code>effect</code> 三个元素，表现为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">&lt;</span>key<span class="token operator">>=</span><span class="token operator">&lt;</span>value<span class="token operator">></span>:<span class="token operator">&lt;</span>effect<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>上面 value 可以设置为空，那么组成形式为 :</p>
</blockquote>
<p>由上可以点到 <code>master</code> 节点的污点内容为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>node-role.kubernetes.io/master:PreferNoSchedule
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>key：node-role.kubernetes.io/master</li>
<li>value：空</li>
<li>effect：PreferNoSchedule</li>
</ul>
<h3 id="_2、设置污点" tabindex="-1"><a class="header-anchor" href="#_2、设置污点" aria-hidden="true">#</a> 2、设置污点</h3>
<p>一般我们需要想要设置某个节点只允许特定的 <code>Pod</code> 进行调度，这时候就得对节点设置污点，可以按 <code>kubectl taint node [node] key=value[effect]</code> 格式进行设置，其中 <code>effect</code> 可取值如下：</p>
<ul>
<li><strong>PreferNoSchedule：</strong> 尽量不要调度。</li>
<li><strong>NoSchedule：</strong> 一定不能被调度。</li>
<li><strong>NoExecute：</strong> 不仅不会调度, 还会驱逐 Node 上已有的 Pod。</li>
</ul>
<p>一般时候我们设置污点，就像下面例子一样对齐进行设置：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 设置污点并不允许 Pod 调度到该节点</span>
$ kubectl taint <span class="token function">node</span> k8s-master <span class="token assign-left variable">key1</span><span class="token operator">=</span>value1:NoSchedule

<span class="token comment">## 设置污点尽量阻止污点调度到该节点</span>
$ kubectl taint <span class="token function">node</span> k8s-master <span class="token assign-left variable">key2</span><span class="token operator">=</span>value2:PreferNoSchedule

<span class="token comment">## 设置污点，不允许普通 Pod 调度到该节点，且将该节点上已经存在的 Pod 进行驱逐</span>
$ kubectl taint <span class="token function">node</span> k8s-master <span class="token assign-left variable">key3</span><span class="token operator">=</span>value3:NoExecute
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_3、删除污点" tabindex="-1"><a class="header-anchor" href="#_3、删除污点" aria-hidden="true">#</a> 3、删除污点</h3>
<p>上面说明了如何对 <code>Node</code> 添加污点阻止 <code>Pod</code> 进行调度，下面再说一下如何删除节点上的污点，可以使用下面命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl taint <span class="token function">node</span> <span class="token punctuation">[</span>node<span class="token punctuation">]</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span>-
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面语法和创建污点类似，不过需要注意的是删除污点需要知道 key 和最后面设置一个 &quot;-&quot; 两项将污点删除，示例如下：</p>
<p>为了方便演示，先给节点设置污点：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 设置污点1</span>
$ kubectl taint <span class="token function">node</span> k8s-master <span class="token assign-left variable">key1</span><span class="token operator">=</span>value1:PreferNoSchedule
node/k8s-master tainted

<span class="token comment">## 设置污点2</span>
$ kubectl taint <span class="token function">node</span> k8s-master <span class="token assign-left variable">key2</span><span class="token operator">=</span>value2:NoSchedule
node/k8s-master tainted

<span class="token comment">## 设置污点3，并且不设置 value</span>
$ kubectl taint <span class="token function">node</span> k8s-master <span class="token assign-left variable">key2</span><span class="token operator">=</span>:PreferNoSchedule
node/k8s-master tainted
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>查看污点，可以看到上面设置的三个值：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl describe <span class="token function">node</span> k8s-master

<span class="token punctuation">..</span>.
Taints:     <span class="token assign-left variable">key1</span><span class="token operator">=</span>value1:PreferNoSchedule
            <span class="token assign-left variable">key2</span><span class="token operator">=</span>value2:NoSchedule
            key2:PreferNoSchedule
            node-role.kubernetes.io/master:PreferNoSchedule
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>然后再删除污点：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 删除污点，可以不指定 value，指定 [effect] 值就可删除该 ket:[effect] 的污点</span>
$ kubectl taint <span class="token function">node</span> k8s-master key1:PreferNoSchedule-

<span class="token comment">## 也可以根据 key 直接将该 key2 的所有 [effect] 都删除：</span>
$ kubectl taint <span class="token function">node</span> k8s-master key2-
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>再次查看污点，可以看到以上污点都被删除：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl describe <span class="token function">node</span> k8s-master

Taints:     node-role.kubernetes.io/master:PreferNoSchedule
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="三、容忍-tolerations" tabindex="-1"><a class="header-anchor" href="#三、容忍-tolerations" aria-hidden="true">#</a> 三、容忍 tolerations</h2>
<h3 id="_1、pod-设置容忍" tabindex="-1"><a class="header-anchor" href="#_1、pod-设置容忍" aria-hidden="true">#</a> 1、Pod 设置容忍</h3>
<p>为了使某些 <code>Pod</code> 禁止调度到某些特定节点上，就可以对节点设置污点 <code>taints</code>。当然，如果希望有些 <code>Pod</code> 能够忽略节点的污点，继续能够调度到该节点，就可以对 <code>Pod</code> 设置容忍，让 <code>Pod</code> 能够容忍节点上设置的污点，例如：</p>
<p><strong>对一个节点设置污点：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl taint <span class="token function">node</span> k8s-master <span class="token assign-left variable">key</span><span class="token operator">=</span>value:NoSchedule
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>对 Pod 设置容忍，以下两种方式都可：</strong></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment">## 容忍的 key、value 和对应 effect 也必须和污点 taints 保持一致</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
<span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"NoSchedule"</span>

<span class="token comment">## 容忍 tolerations 的 key 和要污点 taints 的 key 一致，且设置的 effect 也相同，不需要设置 value</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
<span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Exists"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"NoSchedule"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_2、node-和-pod-对于污点与容忍基本概念" tabindex="-1"><a class="header-anchor" href="#_2、node-和-pod-对于污点与容忍基本概念" aria-hidden="true">#</a> 2、Node 和 Pod 对于污点与容忍基本概念</h3>
<h4 id="_1-、概念" tabindex="-1"><a class="header-anchor" href="#_1-、概念" aria-hidden="true">#</a> (1)、概念</h4>
<ul>
<li>一个 Node 可以有多个污点。</li>
<li>一个 Pod 可以有多个容忍。</li>
<li>Kuberentes 执行多个污点和容忍方法类似于过滤器。</li>
</ul>
<p>如果一个 <code>Node</code> 有多个污点，且 <code>Pod</code> 上也有多个容忍，只要 <code>Pod</code> 中容忍能包含 <code>Node</code> 上设置的全部污点，就可以将 <code>Pod</code> 调度到该 <code>Node</code> 上。如果 <code>Pod</code> 上设置的容忍不能够包含 <code>Node</code> 上设置的全部污点，且 <code>Node</code> 上剩下不能被包含的污点 <code>effect</code> 为 <code>PreferNoSchedule</code>，那么也可能会被调度到该节点。</p>
<h4 id="_2-、注意" tabindex="-1"><a class="header-anchor" href="#_2-、注意" aria-hidden="true">#</a> (2)、注意</h4>
<ul>
<li>如果 Node 上带有污点 effect 为 NoSchedule，而 Node 上不带相应容忍，Kubernetes 就不会调度 Pod 到这台 Node 上。</li>
<li>如果 Node 上带有污点 effect 为 PreferNoShedule，这时候 Kubernetes 会努力不要调度这个 Pod 到这个 Node 上。</li>
<li>如果 Node 上带有污点 effect 为 NoExecute，这个已经在 Node 上运行的 Pod 会从 Node 上驱逐掉。没有运行在 Node 的 Pod 不能被调度到这个 Node 上。</li>
</ul>
<h3 id="_3、deployment-中设置容忍" tabindex="-1"><a class="header-anchor" href="#_3、deployment-中设置容忍" aria-hidden="true">#</a> 3、Deployment 中设置容忍</h3>
<p>在 <code>Kubernetes</code> 中 <code>Deployment</code> 设置容忍，示例如下：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/vl
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> example 
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">5</span> 
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span> 
      <span class="token punctuation">...</span><span class="token punctuation">...</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key"</span>
        <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
        <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value"</span>
        <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"NoSchedule"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_4、设置容忍时间" tabindex="-1"><a class="header-anchor" href="#_4、设置容忍时间" aria-hidden="true">#</a> 4、设置容忍时间</h3>
<p>正常情况下，如果一个污点带有 <code>effect=NoExecute</code> 被添加到了这个 <code>Node</code>。那么不能容忍这个污点的所有 <code>Pod</code> 就会立即被踢掉。而带有容忍标签的 <code>Pod</code> 就不会踢掉。然而，一个带有 <code>effect=Noexecute</code> 的容忍可以指定一个 <code>tolerationSeconds</code> 来指定当这个污点被添加的时候在多长时间内不被踢掉。例如：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"PreferNoSchedule"</span>
  <span class="token key atrule">tolerationSeconds</span><span class="token punctuation">:</span> <span class="token number">3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote>
<p>如果这个 Pod 已经在这个带污点且 effect 为 NoExecute 的 node 上。这个 pod 可以一直运行到 3600s 后再被踢掉。如果这时候 Node 的污点被移除了，这个 Pod 就不会被踢掉。</p>
</blockquote>
<h3 id="_5、容忍示例" tabindex="-1"><a class="header-anchor" href="#_5、容忍示例" aria-hidden="true">#</a> 5、容忍示例</h3>
<p><code>Operator</code> 默认是 <code>Equal</code>，可设置为 <code>Equal</code> 与 <code>Exists</code> 两种，按这两种进行示例：</p>
<h4 id="_1-、operator-是-exists" tabindex="-1"><a class="header-anchor" href="#_1-、operator-是-exists" aria-hidden="true">#</a> (1)、Operator 是 Exists</h4>
<p><strong>容忍任何污点</strong></p>
<p>例如一个空的key，将匹配所有的key、value、effect。即容忍任何污点。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Exists"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>容忍某 key 值的污点</strong></p>
<p>例如一个空的 effect，并且 key 不为空，那么将匹配所有与 key 相同的 effect：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Exists"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2-、operator-是-equal" tabindex="-1"><a class="header-anchor" href="#_2-、operator-是-equal" aria-hidden="true">#</a> (2)、operator 是 Equal</h4>
<p><strong>Node 上有一个污点</strong></p>
<p>Node 和 Pod 的 key 为 key1、value1 与 effect 相同则能调度：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment">#污点</span>
key1=value1<span class="token punctuation">:</span>NoSchedule

<span class="token comment">#Pod设置</span>
<span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key1"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value1"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"NoSchedule"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Node 上有多个污点</strong></p>
<p>Node 的污点的 key、value、effect 和 Pod 容忍都相同则能调度：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 设置污点</span>
key1=value1<span class="token punctuation">:</span>NoSchedule
key2=value2<span class="token punctuation">:</span>NoExecute

<span class="token comment"># Pod设置容忍</span>
<span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key1"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value1"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"NoSchedule"</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key2"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value2"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"NoExecute"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Node 的污点和 Pod 的大部分都相同，不同的是 Node 污点 effect 为 PreferNoSchedule 的，可能会调度：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 污点</span>
key1=value1<span class="token punctuation">:</span>NoSchedule
key2=value2<span class="token punctuation">:</span>NoExecute
key3=value3<span class="token punctuation">:</span>PreferNoSchedule

<span class="token comment"># Pod设置容忍</span>
<span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key1"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value1"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"NoSchedule"</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key2"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value2"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"NoExecute"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Node 的污点和 Pod 的大部分都相同，不同的是 Node 污点 effect 为 NoSchedule 和 NoExecute 的，不会被调度：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 污点</span>
key1=value1<span class="token punctuation">:</span>NoSchedule
key2=value2<span class="token punctuation">:</span>NoExecute
key3=value3<span class="token punctuation">:</span>PreferNoSchedule

<span class="token comment"># Pod设置容忍</span>
<span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key1"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value1"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"NoSchedule"</span>
<span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"key3"</span>
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">"Equal"</span>
  <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"value3"</span>
  <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">"PreferNoSchedule"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="四、其它" tabindex="-1"><a class="header-anchor" href="#四、其它" aria-hidden="true">#</a> 四、其它</h2>
<h3 id="_1、污点驱逐" tabindex="-1"><a class="header-anchor" href="#_1、污点驱逐" aria-hidden="true">#</a> 1、污点驱逐</h3>
<p>前面我们提到了污点的 <code>effect</code> 可以设置为 NoExecute，它会影响节点上已经运行的 Pod，如下所示：</p>
<ul>
<li>立即将没有配置容忍的 Pod 逐出。</li>
<li>设置容忍但是没有指定 tolerationSeconds 参数的，那么该容忍永久生效。</li>
<li>设置容忍但是有指定 tolerationSeconds 参数的，那么在指定的时间内容忍有效，超过指定时间后将被剔除。</li>
</ul>
<p>此外，当某些条件为 true 时，节点控制器会自动污染节点。内置以下污点：</p>
<ul>
<li>node.kubernetes.io/not-ready： 节点尚未准备好。这对应于 NodeCondition Ready 为 false。</li>
<li>node.kubernetes.io/unreachable： 无法从节点控制器访问节点。这对应于 NodeCondition Ready 为 Unknown。</li>
<li>node.kubernetes.io/out-of-disk： 节点磁盘不足。</li>
<li>node.kubernetes.io/memory-pressure： 节点有内存压力。</li>
<li>node.kubernetes.io/disk-pressure： 节点有磁盘压力。</li>
<li>node.kubernetes.io/network-unavailable： 节点的网络不可用。</li>
<li>node.kubernetes.io/unschedulable： 节点不可调度。</li>
<li>node.cloudprovider.kubernetes.io/uninitialized： 当 kubelet 从 &quot;外部&quot; 云提供程序开始时，此污点在节点上设置为将其标记为不可用。来自 cloud-controller-manager 的控制器初始化此节点后，kubelet 删除此污点。</li>
</ul>
<p>在版本 1.13 中，该 TaintBasedEvictions 功能提升为 beta 并默认情况下启用，因此 NodeController（或 kubelet）会自动添加污点，并且将禁用基于 Ready NodeCondition 从节点驱逐 Pod 的常规逻辑。</p>
<blockquote>
<p>注意：为了维护 由于节点问题而导致的现时豆荚逐出的限速行为，系统实际上会以限速的方式添加异味。这样可以防止在主机（例如，主机）与节点分离的情况下发生大规模的Pod逐出。</p>
</blockquote>
<h3 id="_2、设置节点失效后-pod-转移前等待时间" tabindex="-1"><a class="header-anchor" href="#_2、设置节点失效后-pod-转移前等待时间" aria-hidden="true">#</a> 2、设置节点失效后 Pod 转移前等待时间</h3>
<p>​    当某个 <code>Pod</code> 运行所在的 <code>Node</code> 变成 <code>unready</code> 或者 <code>unreachable</code> 不可用状态时，<code>Kubernetes</code> 可以等待该 <code>Pod</code> 被调度到其他节点的最长等待时间。 当发生该状况时，查看其中一个 <code>Pod</code> 的容忍度信息，你将看到两条内容，如以下代码清单所示:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token key atrule">NoExecutekey</span><span class="token punctuation">:</span> node.alpha.kubernetes.io/notReady
  <span class="token key atrule">operator</span><span class="token punctuation">:</span> Exists
  <span class="token key atrule">tolerationSeconds</span><span class="token punctuation">:</span> <span class="token number">300</span>
<span class="token punctuation">-</span> <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token key atrule">NoExecutekey</span><span class="token punctuation">:</span> node.alpha.kubernetes.io/unreachable 
  <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> Exists 
  <span class="token key atrule">tolerationSeconds</span><span class="token punctuation">:</span> <span class="token number">300</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这两个容忍度表示，该 <code>Pod</code> 将容忍所在节点处于 <code>notReady</code> 或者 <code>unreachable</code> 状态维持 <code>300</code> 秒。 当 <code>Kubernetes</code> 控制器检测到有节点处 <code>notReady</code> 或者 <code>unreachable</code> 状态时， 将会等待 <code>300</code> 秒，如果超过指定时间的话 <code>Kubernetes</code> 将会把该 <code>Pod</code> 重新调度到其他节点上。</p>
<h3 id="_3、daemonset-调度问题" tabindex="-1"><a class="header-anchor" href="#_3、daemonset-调度问题" aria-hidden="true">#</a> 3、Daemonset 调度问题</h3>
<blockquote>
<p>⚠️ 系统会自动添加 <code>node.kubernetes.io/unschedulable：NoSchedule</code> 容忍度到 DaemonSet Pods。在调度 DaemonSet Pod 时，默认调度器会忽略 <code>unschedulable</code> 节点。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 也就是说会自动忽略下面这个命令，禁止调度的节点</span>
kubectl cordon xxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote>
<h3 id="_4、设置允许pod调度到master节点" tabindex="-1"><a class="header-anchor" href="#_4、设置允许pod调度到master节点" aria-hidden="true">#</a> 4、设置允许Pod调度到Master节点</h3>
<p>查看污点</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># kubectl describe node st-kubernetes-master-3 | grep  Taints</span>
Taints:             node-role.kubernetes.io/master<span class="token operator">=</span>true:NoSchedule
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>设置允许Pod调度到Master节点</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># kubectl taint nodes st-kubernetes-master-3 node-role.kubernetes.io/master-</span>
node/st-kubernetes-master-3 untainted
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>禁止pod调度到master节点</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># kubectl taint nodes st-kubernetes-master-3 node-role.kubernetes.io/master=true:NoSchedule</span>
node/st-kubernetes-master-3 tainted
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
