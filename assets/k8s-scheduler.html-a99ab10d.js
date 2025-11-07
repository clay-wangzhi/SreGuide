import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as o,a as n,b as e,d as c,e as s}from"./app-6b705441.js";const u={},p=s(`<h1 id="_6-张图带你深入了解-kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_6-张图带你深入了解-kube-scheduler" aria-hidden="true">#</a> 6 张图带你深入了解 kube-scheduler</h1><p>本文目录：</p><ul><li>kube-scheduler 用途</li><li>Scheduler Pod 调度流程</li><li>源码调用链路</li><li>Scheduler Framework</li><li>如何扩展</li></ul><h2 id="kube-scheduler-用途" tabindex="-1"><a class="header-anchor" href="#kube-scheduler-用途" aria-hidden="true">#</a> kube-scheduler 用途</h2><p>顾名思义：负责将 Pod <strong>调度</strong>到 Node 上。</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905145020692.png" alt=""></p><p>Pod 创建流程：</p><blockquote><p>说明： 所有的组件只与 Apiserver 做交互，Apiserver 再把信息更新的 Etcd 中。</p></blockquote><ol><li>用户向 Kubernetes API server 发送创建（create/apply）指令。</li><li>Apiserver 接收到配置文件，进行校验后，将配置数据存储到 etcd 中。</li><li>Controller-manager 监听 Apiserver 的变化，检测到有新的 Pod 对象时，控制器创建 Pod 并将其状态设为 Pending。</li><li><strong>Scheduler 也通过监听 Apiserver 的变化，发现有新的、尚未分配节点的 Pod。根据预选策略和优选策略，选择一个最适合的 Node 来运行新的 Pod。</strong></li><li>Pod 被调度到对应的 Node 后，该 Node 上的 kubelet 组件则开始根据 Pod 配置文件，拉镜像、启动 app、就绪探针探测。</li><li>Kubelet 向 Apiserver 上报状态为 Reday， Apiserver 写入到 etcd 中。</li></ol><h2 id="scheduler-调度流程" tabindex="-1"><a class="header-anchor" href="#scheduler-调度流程" aria-hidden="true">#</a> Scheduler 调度流程</h2><p>Scheduler 的作用是 负责将 Pod <strong>调度</strong>到 Node 上。</p><p>如果让你设计这个组件，你会如何设计，保证它稳定高效的运行。</p><p>1）需要能够<strong>实时监听</strong>到 有新的 Pod 待调度</p><p>2）同一时间如果有大量待调度的 Pod，如果处理，如果保证不能漏掉，应该先处理哪个 Pod，调度过程中，如果失败，如何处理， 所以得<strong>加个队列</strong>，有重试机制等</p><p>3）调度过程中依赖 Node、Pod 的实时信息，根据 Node、Pod 信息，决策 Pod 调度到哪个Node上合适，每次调度 调 Apiserver ，显然低效， 得在本地缓存一份数据，<strong>加个缓存</strong></p><p>4）调度选择过程中，考虑因素太多，很难周全，<strong>可扩展性</strong>一定要设计好</p><p>5）Pod 绑定过程中 可能依赖 pvc 绑定等，耗时较长， 所以绑定得是异步的， 但是匹配哪个Node合适的算法 需要同步执行，所<strong>以要有两个周期， 调度周期和绑定周期，调度周期串行，绑定周期并行</strong></p><p>duang，框架这不就出来的了</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905160718399.png" alt=""></p><h2 id="源码调用链路" tabindex="-1"><a class="header-anchor" href="#源码调用链路" aria-hidden="true">#</a> 源码调用链路</h2><blockquote><p>原图放到 Github 上了，需要的自取，图片使用 draw.io 画的，可打开后二次编辑</p><p>https://github.com/clay-wangzhi/draw/blob/main/k8s-scheduler.png</p></blockquote><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/k8s-scheduler2.png" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 42个序号对应的源码位置依次为：</span>
<span class="token number">1</span> 找到启动主函数
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/scheduler.go<span class="token comment">#L30</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go<span class="token comment">#L81</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/scheduler.go<span class="token comment">#L31</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go<span class="token comment">#L134</span>

<span class="token number">2</span> Setup 初始化
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go<span class="token comment">#L153</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go<span class="token comment">#L384</span>

<span class="token number">3</span>、16 初始化 scheduler 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go<span class="token comment">#L413</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go<span class="token comment">#L363</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go<span class="token comment">#L65</span>

<span class="token number">4</span>、5 初始化 snapshot 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go<span class="token comment">#L293</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/snapshot.go<span class="token comment">#L48</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/snapshot.go<span class="token comment">#L29</span>

<span class="token number">6</span>、7、8、9 初始化 profiles、fwk 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go<span class="token comment">#L304</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/profile/profile.go<span class="token comment">#L49</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/profile/profile.go<span class="token comment">#L38</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L260</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L53</span>

<span class="token number">10</span>、11、12 初始化 podQueue 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go<span class="token comment">#L340</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go<span class="token comment">#L134</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go<span class="token comment">#L372</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go<span class="token comment">#L155</span>

<span class="token number">13</span>、14、15 初始化 schedulerCache 实例
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go<span class="token comment">#L357</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/cache.go<span class="token comment">#L41</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/cache.go<span class="token comment">#L87</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/cache.go<span class="token comment">#L57</span>

<span class="token number">17</span>、18 运行 scheduler
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go<span class="token comment">#L159</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/cmd/kube-scheduler/app/server.go<span class="token comment">#L163</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go<span class="token comment">#L460</span>

<span class="token number">19</span>、运行 SchedulingQueue
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go<span class="token comment">#L462</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go<span class="token comment">#L417</span>

<span class="token number">20</span>、21 从队列中拿出 Pod 进行调度
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/scheduler.go<span class="token comment">#L470</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L65</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go<span class="token comment">#L944</span>

获取 fwk
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L85</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L368</span>

<span class="token number">22</span>、23、24、25、26、27、28、29、30、31、32、33、34、35 进入 调度周期
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L110</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L138</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L148</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L400</span>

更新 Snapshot
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L403</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/cache.go<span class="token comment">#L185</span>

https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L412</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/cache/snapshot.go<span class="token comment">#L173</span>

运行 PreFilterPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L463</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L698</span>

运行 FilterPlugin
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L507</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L582</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L616</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L649</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L973</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L861</span>

运行 PreScorePlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L435</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L754</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L777</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L1052</span>

运行 ScorePlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L783</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L1101</span>

运行 ReservePluginsReserve
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L208</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L1359</span>

运行 PermitPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L230</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L1443</span>

<span class="token number">36</span>、37、38、39、40、41 进入 绑定周期
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L124</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L264</span>

运行 WaitOnPermit
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L277</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L1503</span>

运行 PreBindPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L293</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L1232</span>

运行 BindPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L309</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L967</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L977</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L1275</span>

运行 PostBindPlugins
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L322</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/framework/runtime/framework.go<span class="token comment">#L1324</span>

<span class="token number">42</span> 标记 Pod 调度已完成，不要回队列
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/schedule_one.go<span class="token comment">#L131</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go<span class="token comment">#L981</span>
https://github.com/kubernetes/kubernetes/blob/v1.31.0/pkg/scheduler/internal/queue/scheduling_queue.go<span class="token comment">#L988</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体代码就不贴了，太多了，可以根据调用链路图，梳理下，看不懂的可以问 gpt。</p><h2 id="scheduler-framework-调度器" tabindex="-1"><a class="header-anchor" href="#scheduler-framework-调度器" aria-hidden="true">#</a> Scheduler Framework 调度器</h2><p>上面调度链路图，可以清晰的看出 <strong>Framework</strong> 调度算法的扩展点。</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905161641335.png" alt=""></p><p>具体每个扩展点包含哪些 plugin， 每个 plugin 可作用于那些扩展点，如下图：</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905161934852.png" alt=""></p><h2 id="如何扩展" tabindex="-1"><a class="header-anchor" href="#如何扩展" aria-hidden="true">#</a> 如何扩展</h2><p><strong>如果我们要实现自己的插件，必须向调度框架注册插件并完成配置，另外还必须实现扩展点接口。</strong></p><p>1）向调度框架注册插件 &amp; 扩展点实现接口如下：</p><p>out-of-tree 实现扩展示例</p><p><code>main.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token string">&quot;k8s.io/component-base/cli&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;k8s.io/component-base/metrics/prometheus/clientgo&quot;</span> <span class="token comment">// for rest client metric registration</span>
	<span class="token boolean">_</span> <span class="token string">&quot;k8s.io/component-base/metrics/prometheus/version&quot;</span>  <span class="token comment">// for version metric registration</span>
	<span class="token string">&quot;k8s.io/kubernetes/cmd/kube-scheduler/app&quot;</span>

	<span class="token string">&quot;xxx/pkg/example&quot;</span>

	<span class="token comment">// Ensure scheme package is initialized.</span>
	<span class="token boolean">_</span> <span class="token string">&quot;sigs.k8s.io/scheduler-plugins/apis/config/scheme&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Register custom plugins to the scheduler framework.</span>
	<span class="token comment">// Later they can consist of scheduler profile(s) and hence</span>
	<span class="token comment">// used by various kinds of workloads.</span>
	command <span class="token operator">:=</span> app<span class="token punctuation">.</span><span class="token function">NewSchedulerCommand</span><span class="token punctuation">(</span>
		app<span class="token punctuation">.</span><span class="token function">WithPlugin</span><span class="token punctuation">(</span>example<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> example<span class="token punctuation">.</span>New<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">)</span>

	code <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span>
	os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>example.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> example

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>

	v1 <span class="token string">&quot;k8s.io/api/core/v1&quot;</span>
	<span class="token string">&quot;k8s.io/apimachinery/pkg/runtime&quot;</span>
	<span class="token string">&quot;k8s.io/klog/v2&quot;</span>
	<span class="token string">&quot;k8s.io/kubernetes/pkg/scheduler/framework&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> Name <span class="token operator">=</span> <span class="token string">&quot;example&quot;</span>

<span class="token keyword">var</span> <span class="token boolean">_</span> framework<span class="token punctuation">.</span>FilterPlugin <span class="token operator">=</span> <span class="token operator">&amp;</span>ExamplePlugin<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> ExamplePlugin <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// NewExampleSchedPlugin initializes a new plugin and returns it.</span>
<span class="token keyword">func</span> <span class="token function">NewExamplePlugin</span><span class="token punctuation">(</span><span class="token boolean">_</span> runtime<span class="token punctuation">.</span>Object<span class="token punctuation">,</span> <span class="token boolean">_</span> framework<span class="token punctuation">.</span>Handle<span class="token punctuation">)</span> <span class="token punctuation">(</span>framework<span class="token punctuation">.</span>Plugin<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ExamplePlugin<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>ExamplePlugin<span class="token punctuation">)</span> <span class="token function">Filter</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> state <span class="token operator">*</span>framework<span class="token punctuation">.</span>CycleState<span class="token punctuation">,</span> pod <span class="token operator">*</span>v1<span class="token punctuation">.</span>Pod<span class="token punctuation">,</span> nodeInfo <span class="token operator">*</span>framework<span class="token punctuation">.</span>NodeInfo<span class="token punctuation">)</span> <span class="token operator">*</span>framework<span class="token punctuation">.</span>Status <span class="token punctuation">{</span>
	cpu <span class="token operator">:=</span> nodeInfo<span class="token punctuation">.</span>Allocatable<span class="token punctuation">.</span>MilliCPU
	memory <span class="token operator">:=</span> nodeInfo<span class="token punctuation">.</span>Allocatable<span class="token punctuation">.</span>Memory
	klog<span class="token punctuation">.</span><span class="token function">InfoS</span><span class="token punctuation">(</span><span class="token string">&quot;tanjunchen-scheduler Filter&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pod_name&quot;</span><span class="token punctuation">,</span> pod<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot;current node&quot;</span><span class="token punctuation">,</span> nodeInfo<span class="token punctuation">.</span><span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot;cpu&quot;</span><span class="token punctuation">,</span> cpu<span class="token punctuation">,</span> <span class="token string">&quot;memory&quot;</span><span class="token punctuation">,</span> memory<span class="token punctuation">)</span>
	<span class="token keyword">return</span> framework<span class="token punctuation">.</span><span class="token function">NewStatus</span><span class="token punctuation">(</span>framework<span class="token punctuation">.</span>Success<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>ExamplePlugin<span class="token punctuation">)</span> <span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> Name
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）进行配置， enable 插件</p><p>编写 kube-scheduler 启动命令配置文件 <code>example-cm.yaml</code></p>`,39),r={href:"https://kubernetes.io/docs/reference/scheduling/config/#multiple-profiles",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"pod 想用哪个 schduler，就填对应的 schdulerName。 如果没指定，就是 default-scheduler。",-1),b=n("p",null,"由于这个配置是给 kube-scheduler 的，而不是 kube-apiserver，",-1),m=n("p",null,[e("所以 "),n("code",null,"k api-resources"),e(" 或 "),n("code",null,"k get KubeSchedulerConfiguration"),e(" 都是找不到这个资源的。")],-1),k=s(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> example<span class="token punctuation">-</span>scheduler<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">scheduler-config.yaml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    apiVersion: kubescheduler.config.k8s.io/v1
    kind: KubeSchedulerConfiguration
    leaderElection:
      leaderElect: false
    clientConnection:
      acceptContentTypes: &quot;&quot;
      burst: 100
      contentType: application/vnd.kubernetes.protobuf
      qps: 100
    profiles:
    - schedulerName: example-scheduler
      plugins:
        filter:
          enabled:
          - name: &quot;example&quot; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240905182926497.png" alt=""></p><p>3） 使用自定义 scheduler</p><p>Pod yaml 文件中指定 <code>schedulerName: example-scheduler</code> 即可使用自定义 Scheduler 了</p><p>rbac授权 及 自定义 Scheduler 部署文件：略</p><p><strong>enjoy~</strong></p><p>参考链接：</p><ul><li>深入理解 Kubernetes Scheduler Framework 调度框架（Part 2）：https://tanjunchen.github.io/post/2024-04-07-scheduler-framework-02/</li><li>K8s 调度框架设计与 scheduler plugins 开发部署示例（2024）：https://arthurchiao.art/blog/k8s-scheduling-plugins-zh/</li></ul><p>下篇文章，我们分析 crane 和 koordinator 中负载感知调度中的插件。</p><p>我是 Clay，下期见 👋</p><hr><blockquote><ul><li><p>欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/SreGuide 查看最新文章</p></li><li><p>欢迎加我微信<code>sre-k8s-ai</code>，与我讨论云原生、稳定性相关内容</p></li></ul></blockquote><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240615194414355.png" alt="weixin" style="zoom:50%;">`,13);function v(h,g){const a=l("ExternalLinkIcon");return i(),o("div",null,[p,n("blockquote",null,[n("p",null,[e("一个 ksc 里面可以描述"),n("a",r,[e("多个 profile"),c(a)]),e("， 会启动多个独立 scheduler。")]),d,b,m]),k])}const w=t(u,[["render",v],["__file","k8s-scheduler.html.vue"]]);export{w as default};
