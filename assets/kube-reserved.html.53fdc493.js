import{_ as n,r,c as l,a as e,b as i,F as t,d as s,e as o,o as p}from"./app.ac0f71d5.js";const c={},b=e("h1",{id:"kubelet-\u914D\u7F6E\u8D44\u6E90\u9884\u7559\u7684\u59FF\u52BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kubelet-\u914D\u7F6E\u8D44\u6E90\u9884\u7559\u7684\u59FF\u52BF","aria-hidden":"true"},"#"),s(" kubelet \u914D\u7F6E\u8D44\u6E90\u9884\u7559\u7684\u59FF\u52BF")],-1),d=s("\u8F6C\u8F7D\u81EA\uFF1A"),u={href:"https://os.51cto.com/article/681036.html",target:"_blank",rel:"noopener noreferrer"},m=s("k8s \u6280\u672F\u5708 | \u9633\u660E"),v=o(`<p>Kubernetes \u7684\u8282\u70B9\u53EF\u4EE5\u6309\u7167\u8282\u70B9\u7684\u8D44\u6E90\u5BB9\u91CF\u8FDB\u884C\u8C03\u5EA6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B Pod \u80FD\u591F\u4F7F\u7528\u8282\u70B9\u5168\u90E8\u53EF\u7528\u5BB9\u91CF\u3002\u8FD9\u6837\u5C31\u4F1A\u9020\u6210\u4E00\u4E2A\u95EE\u9898\uFF0C\u56E0\u4E3A\u8282\u70B9\u81EA\u5DF1\u901A\u5E38\u8FD0\u884C\u4E86\u4E0D\u5C11\u9A71\u52A8 OS \u548C Kubernetes \u7684\u7CFB\u7EDF\u5B88\u62A4\u8FDB\u7A0B\u3002\u9664\u975E\u4E3A\u8FD9\u4E9B\u7CFB\u7EDF\u5B88\u62A4\u8FDB\u7A0B\u7559\u51FA\u8D44\u6E90\uFF0C\u5426\u5219\u5B83\u4EEC\u5C06\u4E0E Pod \u4E89\u593A\u8D44\u6E90\u5E76\u5BFC\u81F4\u8282\u70B9\u8D44\u6E90\u77ED\u7F3A\u95EE\u9898\u3002</p><p>\u5F53\u6211\u4EEC\u5728\u7EBF\u4E0A\u4F7F\u7528 Kubernetes \u96C6\u7FA4\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6CA1\u6709\u5BF9\u8282\u70B9\u914D\u7F6E\u6B63\u786E\u7684\u8D44\u6E90\u9884\u7559\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u4E00\u4E2A\u573A\u666F\uFF0C\u7531\u4E8E\u67D0\u4E2A\u5E94\u7528\u65E0\u9650\u5236\u7684\u4F7F\u7528\u8282\u70B9\u7684 CPU \u8D44\u6E90\uFF0C\u5BFC\u81F4\u8282\u70B9\u4E0A CPU \u4F7F\u7528\u6301\u7EED100%\u8FD0\u884C\uFF0C\u800C\u4E14\u538B\u69A8\u5230\u4E86 kubelet \u7EC4\u4EF6\u7684 CPU \u4F7F\u7528\uFF0C\u8FD9\u6837\u5C31\u4F1A\u5BFC\u81F4 kubelet \u548C apiserver \u7684\u5FC3\u8DF3\u51FA\u95EE\u9898\uFF0C\u8282\u70B9\u5C31\u4F1A\u51FA\u73B0 Not Ready \u72B6\u51B5\u4E86\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8282\u70B9 Not Ready \u8FC7\u540E\uFF0C5\u5206\u949F\u540E\u4F1A\u9A71\u9010\u5E94\u7528\u5230\u5176\u4ED6\u8282\u70B9\uFF0C\u5F53\u8FD9\u4E2A\u5E94\u7528\u8DD1\u5230\u5176\u4ED6\u8282\u70B9\u4E0A\u7684\u65F6\u5019\u540C\u6837100%\u7684\u4F7F\u7528 CPU\uFF0C\u662F\u4E0D\u662F\u4E5F\u4F1A\u628A\u8FD9\u4E2A\u8282\u70B9\u641E\u6302\u6389\uFF0C\u540C\u6837\u7684\u60C5\u51B5\u7EE7\u7EED\u4E0B\u53BB\uFF0C\u4E5F\u5C31\u5BFC\u81F4\u4E86\u6574\u4E2A\u96C6\u7FA4\u7684\u96EA\u5D29\uFF0C\u96C6\u7FA4\u5185\u7684\u8282\u70B9\u4E00\u4E2A\u4E00\u4E2A\u7684 Not Ready \u4E86\uFF0C\u540E\u679C\u662F\u975E\u5E38\u4E25\u91CD\u7684\uFF0C\u6216\u591A\u6216\u5C11\u7684\u4EBA\u9047\u5230\u8FC7 Kubernetes \u96C6\u7FA4\u96EA\u5D29\u7684\u60C5\u51B5\uFF0C\u8FD9\u4E2A\u95EE\u9898\u4E5F\u662F\u9762\u8BD5\u7684\u65F6\u5019\u955C\u50CF\u8BE2\u95EE\u7684\u95EE\u9898\u3002</p><p>\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5C31\u9700\u8981\u4E3A Kubernetes \u96C6\u7FA4\u914D\u7F6E\u8D44\u6E90\u9884\u7559\uFF0Ckubelet \u66B4\u9732\u4E86\u4E00\u4E2A\u540D\u4E3A Node Allocatable \u7684\u7279\u6027\uFF0C\u6709\u52A9\u4E8E\u4E3A\u7CFB\u7EDF\u5B88\u62A4\u8FDB\u7A0B\u9884\u7559\u8BA1\u7B97\u8D44\u6E90\uFF0CKubernetes \u4E5F\u662F\u63A8\u8350\u96C6\u7FA4\u7BA1\u7406\u5458\u6309\u7167\u6BCF\u4E2A\u8282\u70B9\u4E0A\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u6765\u914D\u7F6E Node Allocatable\u3002</p><p>\u672C\u6587\u7684\u64CD\u4F5C\u73AF\u5883\u4E3A Kubernetes v1.22.1 \u7248\u672C\uFF0C\u4F7F\u7528 Containerd \u7684\u5BB9\u5668\u8FD0\u884C\u65F6\uFF0CContainerd \u548C Kubelet \u91C7\u7528\u7684 cgroup \u9A71\u52A8\u4E3A systemd\u3002</p><h3 id="node-allocatable" tabindex="-1"><a class="header-anchor" href="#node-allocatable" aria-hidden="true">#</a> Node Allocatable</h3><p>Kubernetes \u8282\u70B9\u4E0A\u7684 Allocatable \u88AB\u5B9A\u4E49\u4E3A Pod \u53EF\u7528\u8BA1\u7B97\u8D44\u6E90\u91CF\uFF0C\u8C03\u5EA6\u5668\u4E0D\u4F1A\u8D85\u989D\u7533\u8BF7 Allocatable\uFF0C\u76EE\u524D\u652F\u6301 CPU, memory \u548C ephemeral-storage \u8FD9\u51E0\u4E2A\u53C2\u6570\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 kubectl describe node \u547D\u4EE4\u67E5\u770B\u8282\u70B9\u53EF\u5206\u914D\u8D44\u6E90\u7684\u6570\u636E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  ~ kubectl describe node node2 
...... 
Capacity: 
 cpu:                4 
 ephemeral-storage:  36678148Ki 
 hugepages-1Gi:      0 
 hugepages-2Mi:      0 
 memory:             7990056Ki 
 pods:               110 
Allocatable: 
 cpu:                4 
 ephemeral-storage:  33802581141 
 hugepages-1Gi:      0 
 hugepages-2Mi:      0 
 memory:             7887656Ki 
 pods:               110 
...... 
1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u5176\u4E2D\u6709 Capacity \u4E0E Allocatable \u4E24\u9879\u5185\u5BB9\uFF0C\u5176\u4E2D\u7684 Allocatable \u5C31\u662F\u8282\u70B9\u53EF\u88AB\u5206\u914D\u7684\u8D44\u6E90\uFF0C\u6211\u4EEC\u8FD9\u91CC\u6CA1\u6709\u914D\u7F6E\u8D44\u6E90\u9884\u7559\uFF0C\u6240\u4EE5\u9ED8\u8BA4\u60C5\u51B5\u4E0B Capacity \u4E0E Allocatable \u7684\u503C\u57FA\u672C\u4E0A\u662F\u4E00\u81F4\u7684\u3002\u4E0B\u56FE\u663E\u793A\u4E86\u53EF\u5206\u914D\u8D44\u6E90\u548C\u8D44\u6E90\u9884\u7559\u4E4B\u95F4\u7684\u5173\u7CFB\uFF1A</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20220126112900806.png" alt="image-20220126112900806" loading="lazy"></p><ul><li>Kubelet Node Allocatable \u7528\u6765\u4E3A Kube \u7EC4\u4EF6\u548C System \u8FDB\u7A0B\u9884\u7559\u8D44\u6E90\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u5F53\u8282\u70B9\u51FA\u73B0\u6EE1\u8D1F\u8377\u65F6\u4E5F\u80FD\u4FDD\u8BC1 Kube \u548C System \u8FDB\u7A0B\u6709\u8DB3\u591F\u7684\u8D44\u6E90\u3002</li><li>\u76EE\u524D\u652F\u6301 cpu, memory, ephemeral-storage \u4E09\u79CD\u8D44\u6E90\u9884\u7559\u3002</li><li>Node Capacity \u662F\u8282\u70B9\u7684\u6240\u6709\u786C\u4EF6\u8D44\u6E90\uFF0Ckube-reserved \u662F\u7ED9 kube \u7EC4\u4EF6\u9884\u7559\u7684\u8D44\u6E90\uFF0Csystem-reserved \u662F\u7ED9\u7CFB\u7EDF\u8FDB\u7A0B\u9884\u7559\u7684\u8D44\u6E90\uFF0Ceviction-threshold \u662F kubelet \u9A71\u9010\u7684\u9608\u503C\u8BBE\u5B9A\uFF0Callocatable \u624D\u662F\u771F\u6B63\u8C03\u5EA6\u5668\u8C03\u5EA6 Pod \u65F6\u7684\u53C2\u8003\u503C(\u4FDD\u8BC1\u8282\u70B9\u4E0A\u6240\u6709 Pods \u7684 request \u8D44\u6E90\u4E0D\u8D85\u8FC7 Allocatable)\u3002</li></ul><p>\u8282\u70B9\u53EF\u5206\u914D\u8D44\u6E90\u7684\u8BA1\u7B97\u65B9\u5F0F\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Node Allocatable Resource = Node Capacity - Kube-reserved - system-reserved - eviction-threshold 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8C03\u5EA6\u5230\u67D0\u4E2A\u8282\u70B9\u4E0A\u7684 Pod \u7684 requests \u603B\u548C\u4E0D\u80FD\u8D85\u8FC7\u8BE5\u8282\u70B9\u7684 allocatable\u3002</p><h3 id="\u914D\u7F6E\u8D44\u6E90\u9884\u7559" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8D44\u6E90\u9884\u7559" aria-hidden="true">#</a> \u914D\u7F6E\u8D44\u6E90\u9884\u7559</h3><p>\u6BD4\u5982\u6211\u4EEC\u73B0\u5728\u9700\u8981\u4E3A\u7CFB\u7EDF\u9884\u7559\u4E00\u5B9A\u7684\u8D44\u6E90\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u7684\u51E0\u4E2A kubelet \u53C2\u6570\u6765\u8FDB\u884C\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--enforce-node-allocatable=pods 
--kube-reserved=memory=... 
--system-reserved=memory=... 
--eviction-hard=... 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u6682\u65F6\u4E0D\u8BBE\u7F6E\u5BF9\u5E94\u7684 cgroup\uFF0C\u6BD4\u5982\u6211\u4EEC\u8FD9\u91CC\u5148\u53EA\u5BF9 node2 \u8282\u70B9\u6DFB\u52A0\u8D44\u6E90\u9884\u7559\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539 /var/lib/kubelet/config.yaml \u6587\u4EF6\u6765\u52A8\u6001\u914D\u7F6E kubelet\uFF0C\u6DFB\u52A0\u5982\u4E0B\u6240\u793A\u7684\u8D44\u6E90\u9884\u7559\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiVersion: kubelet.config.k8s.io/v1beta1 
...... 
enforceNodeAllocatable: 
- pods 
kubeReserved:  # \u914D\u7F6E kube \u8D44\u6E90\u9884\u7559 
  cpu: 500m 
  memory: 1Gi 
  ephemeral-storage: 1Gi 
systemReserved:  # \u914D\u7F6E\u7CFB\u7EDF\u8D44\u6E90\u9884\u7559 
  memory: 1Gi 
evictionHard:  # \u914D\u7F6E\u786C\u9A71\u9010\u9608\u503C 
  memory.available: &quot;300Mi&quot; 
  nodefs.available: &quot;10%&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4FEE\u6539\u5B8C\u6210\u540E\uFF0C\u91CD\u542F kubelet\uFF0C\u542F\u52A8\u5B8C\u6210\u540E\u91CD\u65B0\u5BF9\u6BD4 Capacity \u53CA Allocatable \u7684\u503C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  ~ kubectl describe node node2 
...... 
Capacity: 
  cpu:                4 
  ephemeral-storage:  36678148Ki 
  hugepages-1Gi:      0 
  hugepages-2Mi:      0 
  memory:             7990056Ki 
  pods:               110 
Allocatable: 
  cpu:                3500m 
  ephemeral-storage:  32728839317 
  hugepages-1Gi:      0 
  hugepages-2Mi:      0 
  memory:             5585704Ki 
  pods:               110 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4ED4\u7EC6\u5BF9\u6BD4\u53EF\u4EE5\u53D1\u73B0\u5176\u4E2D\u7684 Allocatable\u7684\u503C\u6070\u597D\u662F Capacity \u51CF\u53BB\u4E0A\u9762\u6211\u4EEC\u914D\u7F6E\u7684\u9884\u7559\u8D44\u6E90\u7684\u503C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>allocatale = capacity - kube_reserved - system_reserved - eviction_hard 
5585704Ki = 7990056Ki - 1*1024*1024Ki - 1*1024*1024Ki - 300*1024Ki 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u518D\u901A\u8FC7\u67E5\u770B kubepods.slice(systemd \u9A71\u52A8\u662F\u4EE5 .slice \u7ED3\u5C3E)cgroup \u4E2D\u5BF9\u8282\u70B9\u4E0A\u6240\u6709 Pod \u5185\u5B58\u7684\u9650\u5236\uFF0C\u8BE5\u503C\u51B3\u5B9A\u4E86 Node \u4E0A\u6240\u6709\u7684 Pod \u80FD\u4F7F\u7528\u7684\u8D44\u6E90\u4E0A\u9650\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  ~ cat /sys/fs/cgroup/memory/kubepods.slice/memory.limit_in_bytes 
6034333696 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5F97\u5230\u7684 Pod \u8D44\u6E90\u4F7F\u7528\u4E0A\u9650\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>6034333696Bytes = 5892904Ki = Allocatable(5585704Ki) + eviction_hard(300*1024Ki) 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BA1\u7B97\u9A8C\u8BC1\u6211\u4EEC\u7684\u914D\u7F6E\u662F\u6B63\u786E\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubepods.slice/memory.limit_in_bytes = capacity - kube_reserved - system_reserved 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="eviction-\u4E0E-oom" tabindex="-1"><a class="header-anchor" href="#eviction-\u4E0E-oom" aria-hidden="true">#</a> Eviction \u4E0E OOM</h3><p>1\u3001eviction \u662F\u6307 kubelet \u5BF9\u8BE5\u8282\u70B9\u4E0A\u7684 Pod \u8FDB\u884C\u9A71\u9010\uFF0COOM \u662F\u6307 cgroup \u5BF9\u8FDB\u7A0B\u8FDB\u884C kill</p><p>2\u3001kubelet \u5BF9 Pod \u8FDB\u884C\u9A71\u9010\u65F6\uFF0C\u662F\u6839\u636E --eviction-hard \u53C2\u6570\uFF0C\u6BD4\u5982\u8BE5\u53C2\u6570\u5982\u679C\u8BBE\u7F6E\u4E86 memory.available&lt;20%\uFF0C\u90A3\u4E48\u5F53\u4E3B\u673A\u7684\u5185\u5B58\u4F7F\u7528\u7387\u8FBE\u523080%\u65F6\uFF0Ckubelet \u4FBF\u4F1A\u5BF9Pod\u8FDB\u884C\u9A71\u9010\u3002\u4F46\u662F\uFF0C--eviction-hard=memory.available&lt;20% \u4E0D\u4F1A\u5BF9 /sys/fs/cgroup/memory/kubepods.slice/memory.limit_in_bytes \u7684\u503C\u4EA7\u751F\u5F71\u54CD\uFF0C\u56E0\u4E3A kubepods.slice/memory.limit_in_bytes = capacity - kube-reserved - system-reserved\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF0CPod \u7684\u5185\u5B58\u4F7F\u7528\u91CF\u603B\u548C\u662F\u53EF\u4EE5\u8D85\u8FC780%\u7684\uFF0C\u4E14\u4E0D\u4F1A\u88AB OOM-kill\uFF0C\u53EA\u4F1A\u88AB eviction\u3002</p><p>3\u3001kubernetes \u5BF9 Pod \u7684\u9A71\u9010\u673A\u5236\u5982\u4E0B(\u5176\u5B9E\u5C31\u662F QoS \u7AE0\u8282\u7684\u5B9A\u4E49)\uFF1A</p><ul><li>\u9996\u5148\u9A71\u9010\u6CA1\u6709\u8BBE\u7F6E\u8D44\u6E90\u9650\u5236\u7684 Pod</li><li>\u7136\u540E\u9A71\u9010\u8D44\u6E90\u4E0A\u9650\u548C\u8D44\u6E90\u4E0B\u9650\u4E0D\u4E00\u6837\u7684 Pod</li><li>\u6700\u540E\u9A71\u9010\u8D44\u6E90\u4E0A\u9650\u7B49\u8D44\u6E90\u4E0B\u9650\u7684Pod</li></ul><h3 id="\u53EF\u5206\u914D\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u53EF\u5206\u914D\u7EA6\u675F" aria-hidden="true">#</a> \u53EF\u5206\u914D\u7EA6\u675F</h3><p>\u524D\u9762\u6211\u4EEC\u5728\u914D\u7F6E\u8D44\u6E90\u9884\u7559\u7684\u65F6\u5019\u5176\u4E2D\u6709\u4E00\u4E2A enforceNodeAllocatable \u914D\u7F6E\u9879(--enforce-node-allocatable)\uFF0C\u8BE5\u914D\u7F6E\u9879\u7684\u5E2E\u52A9\u4FE1\u606F\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--enforce-node-allocatable strings                         A comma separated list of levels of node allocatable enforcement to be enforced by kubelet. Acceptable options are &#39;none&#39;, &#39;pods&#39;, &#39;system-reserved&#39;, and &#39;kube-reserved&#39;. If the latter two options are specified, &#39;--system-reserved-cgroup&#39; and &#39;--kube-reserved-cgroup&#39; must also be set, respectively. If &#39;none&#39; is specified, no additional options should be set. See https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/ for more details. (default [pods]) (DEPRECATED: This parameter should be set via the config file specified by the Kubelet&#39;s --config flag. See https://kubernetes.io/docs/tasks/administer-cluster/kubelet-config-file/ for more information.) 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>kubelet \u9ED8\u8BA4\u5BF9 Pod \u6267\u884C Allocatable \u53EF\u5206\u914D\u7EA6\u675F\uFF0C\u5982\u679C\u6240\u6709 Pod \u7684\u603B\u7528\u91CF\u8D85\u8FC7\u4E86 Allocatable\uFF0C\u90A3\u4E48\u9A71\u9010 Pod \u7684\u63AA\u65BD\u5C06\u88AB\u6267\u884C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53EF\u901A\u8FC7\u8BBE\u7F6E kubelet --enforce-node-allocatable \u6807\u5FD7\u503C\u4E3A pods \u63A7\u5236\u8FD9\u4E2A\u63AA\u65BD\u3002</p><p>\u6B64\u5916\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u8BE5\u6807\u5FD7\u6765\u540C\u65F6\u6307\u5B9A kube-reserved \u548C system-reserved \u503C\uFF0C\u53EF\u4EE5\u8BA9 kubelet \u5F3A\u5236\u5B9E\u65BD kube-reserved \u548C system-reserved \u7EA6\u675F\uFF0C\u4E0D\u8FC7\u9700\u8981\u6CE8\u610F\uFF0C\u5982\u679C\u914D\u7F6E\u4E86 kube-reserved \u6216\u8005 system-reserved \u7EA6\u675F\uFF0C\u90A3\u4E48\u9700\u8981\u5BF9\u5E94\u8BBE\u7F6E --kube-reserved-cgroup \u6216\u8005 --system-reserved-cgroup \u53C2\u6570\u3002</p><p>\u5982\u679C\u8BBE\u7F6E\u4E86\u5BF9\u5E94\u7684 --system-reserved-cgroup \u548C --kube-reserved-cgroup \u53C2\u6570\uFF0CPod \u80FD\u5B9E\u9645\u4F7F\u7528\u7684\u8D44\u6E90\u4E0A\u9650\u662F\u4E0D\u4F1A\u6539\u53D8\uFF0C\u4F46\u7CFB\u7EDF\u8FDB\u7A0B\u4E0E kube \u8FDB\u7A0B\u4E5F\u4F1A\u53D7\u5230\u8D44\u6E90\u4E0A\u9650\u7684\u9650\u5236\uFF0C\u5982\u679C\u7CFB\u7EDF\u8FDB\u7A0B\u8D85\u8FC7\u4E86\u9884\u7559\u8D44\u6E90\uFF0C\u90A3\u4E48\u7CFB\u7EDF\u8FDB\u7A0B\u4F1A\u88AB cgroup \u6740\u6389\u3002\u4F46\u662F\u5982\u679C\u4E0D\u8BBE\u8FD9\u4E24\u4E2A\u53C2\u6570\uFF0C\u90A3\u4E48\u7CFB\u7EDF\u8FDB\u7A0B\u5C31\u53EF\u4EE5\u4F7F\u7528\u8D85\u8FC7\u9884\u7559\u7684\u8D44\u6E90\u4E0A\u9650\u3002</p><p>\u6240\u4EE5\u5982\u679C\u8981\u4E3A\u7CFB\u7EDF\u9884\u7559\u548C kube \u9884\u7559\u914D\u7F6E cgroup\uFF0C\u5219\u9700\u8981\u975E\u5E38\u5C0F\u5FC3\uFF0C\u5982\u679C\u6267\u884C\u4E86 kube-reserved \u7EA6\u675F\uFF0C\u90A3\u4E48 kubelet \u5C31\u4E0D\u80FD\u51FA\u73B0\u7A81\u53D1\u8D1F\u8F7D\u7528\u5149\u6240\u6709\u53EF\u7528\u8D44\u6E90\uFF0C\u4E0D\u7136\u5C31\u4F1A\u88AB\u6740\u6389\u3002system-reserved \u53EF\u4EE5\u7528\u4E8E\u4E3A\u8BF8\u5982 sshd\u3001udev \u7B49\u7CFB\u7EDF\u5B88\u62A4\u8FDB\u7A0B\u4E89\u53D6\u8D44\u6E90\u9884\u7559\uFF0C\u4F46\u662F\u5982\u679C\u6267\u884C system-reserved \u7EA6\u675F\uFF0C\u90A3\u4E48\u53EF\u80FD\u56E0\u4E3A\u67D0\u4E9B\u539F\u56E0\u5BFC\u81F4\u8282\u70B9\u4E0A\u7684\u5173\u952E\u7CFB\u7EDF\u670D\u52A1 CPU \u8D44\u6E90\u77ED\u7F3A\u6216\u56E0\u4E3A\u5185\u5B58\u4E0D\u8DB3\u800C\u88AB\u7EC8\u6B62\uFF0C\u6240\u4EE5\u5982\u679C\u4E0D\u662F\u81EA\u5DF1\u975E\u5E38\u6E05\u695A\u5982\u4F55\u914D\u7F6E\uFF0C\u6700\u597D\u522B\u914D\u7F6E cgroup \u7EA6\u675F\uFF0C\u5982\u679C\u9700\u8981\u81EA\u884C\u914D\u7F6E\uFF0C\u53EF\u4EE5\u53C2\u8003\u7B2C\u4E00\u671F\u7684\u8D44\u6E90\u9884\u7559\u6587\u6863\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\u3002</p><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u5F3A\u70C8\u5EFA\u8BAE\u7528\u6237\u4F7F\u7528 enforce-node-allocatable \u9ED8\u8BA4\u914D\u7F6E\u7684 pods \u5373\u53EF\uFF0C\u5E76\u4E3A\u7CFB\u7EDF\u548C kube \u8FDB\u7A0B\u9884\u7559\u51FA\u9002\u5F53\u7684\u8D44\u6E90\uFF0C\u4EE5\u4FDD\u6301\u6574\u4F53\u8282\u70B9\u7684\u53EF\u9760\u6027\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C cgroup \u7EA6\u675F\uFF0C\u9664\u975E\u64CD\u4F5C\u4EBA\u5458\u5BF9\u7CFB\u7EDF\u975E\u5E38\u4E86\u89E3\u3002</p>`,42);function g(h,y){const a=r("ExternalLinkIcon");return p(),l(t,null,[b,e("blockquote",null,[e("p",null,[d,e("a",u,[m,i(a)])])]),v],64)}var x=n(c,[["render",g],["__file","kube-reserved.html.vue"]]);export{x as default};
