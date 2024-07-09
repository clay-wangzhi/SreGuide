import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as l,a as n,b as s,d as i,e as o}from"./app-4bb5a871.js";const c={},u=n("h1",{id:"巧用-shell-operator-配置-k8s-pod-保护策略",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#巧用-shell-operator-配置-k8s-pod-保护策略","aria-hidden":"true"},"#"),s(" 巧用 shell-operator 配置 K8s Pod 保护策略")],-1),r=n("p",null,"保障 Pod 高可用分为以下几个方面",-1),d=n("li",null,"资源池划分 ：打污点、独占、隔离",-1),k=n("li",null,"Qos 分级 & 优先级：按应用等级保障稳定性",-1),v={href:"https://clay-wangzhi.com/cloudnative/best-practice/hpa.html",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,"Pod 干扰预算 PDB",-1),m=o(`<p>本篇主要介绍第四点： 巧用 Shell-operator 配置 K8s Pod 保护策略</p><h2 id="什么是-shell-operator" tabindex="-1"><a class="header-anchor" href="#什么是-shell-operator" aria-hidden="true">#</a> 什么是 Shell-operator ？</h2><p>Shell-operator 是一个在 Kubernetes 集群中运行事件驱动脚本的工具。</p><p>该操作器不是针对特定软件产品的操作器，例如 prometheus-operator 或 kafka-operator。Shell-operator 通过将脚本视为由事件触发的钩子，提供了 Kubernetes 集群事件和 Shell 脚本之间的集成层。您可以将其视为 operator-sdk，但用于脚本。</p><p>Shell-operator 用作更高级的 addon-operator 的基础，该 operator 支持 Helm charts 和值存储。</p><p>Shell-operator 提供了以下功能：</p><ul><li><p>Kubernetes 集群的简易管理：使用运维人员熟悉的工具。可以是 bash、python、kubectl 等，真是运维人的实用工具👍👍👍。</p></li><li><p>Kubernetes 对象事件：钩子可以由添加、更新或删除事件触发。</p></li><li><p>对象选择器和属性过滤器：shell-operator 可以监视特定的对象集，并检测其属性的更改。</p></li><li><p>简单的配置：钩子绑定定义是脚本的标准输出中的 JSON 或 YAML 文档。</p></li><li><p>验证 Webhook 机制：钩子可以处理 Kubernetes 资源的验证。</p></li><li><p>转换 Webhook 机制：钩子可以处理 Kubernetes 资源的版本转换。</p></li></ul><h2 id="借助-shell-operator-配置-pdb" tabindex="-1"><a class="header-anchor" href="#借助-shell-operator-配置-pdb" aria-hidden="true">#</a> 借助 Shell-operator 配置 PDB</h2><blockquote><p>👉 说明：以下是变量，可结合自身需要进行修改</p><p>配置 PDB 需要用到便签选择器 selector，示例中选择 AppID 作为标签匹配</p><p>Shell-operator 需要监控一个对象的时间，来更新 PDB 的状态，示例中选择 rollouts.argoproj.io 对象</p><p>namespace 选择 prod</p></blockquote><ol><li><p>创建基础模版 <code>pdb-init.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

<span class="token assign-left variable">NAMESPACE</span><span class="token operator">=</span><span class="token string">&quot;prod&quot;</span>

<span class="token function-name function">pdb_templates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: policy/v1beta1
kind: PodDisruptionBudget
metadata:
  name: clay-test
  namespace: <span class="token variable">\${NAMESPACE}</span>
spec:
  minAvailable: 1
  selector:
    matchLabels:
      appid: clay-test
EOF</span>
<span class="token punctuation">}</span>

<span class="token function-name function">replace_or_create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">object</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span><span class="token variable">)</span></span>

  <span class="token keyword">if</span> <span class="token operator">!</span> kubectl get <span class="token parameter variable">-f</span> - <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$object</span>&quot;</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    kubectl create <span class="token parameter variable">-f</span> - <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$object</span>&quot;</span> <span class="token operator">&gt;</span>/dev/null
  <span class="token keyword">else</span>
    kubectl replace <span class="token parameter variable">--force</span> <span class="token parameter variable">-f</span> - <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$object</span>&quot;</span> <span class="token operator">&gt;</span>/dev/null
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Init PDB templates&quot;</span>
  pdb_templates <span class="token operator">|</span> replace_or_create
  <span class="token keyword">for</span> <span class="token for-or-select variable">resourceName</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span>kubectl <span class="token parameter variable">-n</span> $<span class="token punctuation">{</span>NAMESPACE<span class="token punctuation">}</span> get rollouts.argoproj.io <span class="token operator">|</span> <span class="token function">grep</span> default <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">appid</span><span class="token operator">=</span><span class="token variable">\${resourceName<span class="token operator">%</span>-default}</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Init Add PDB &#39;<span class="token variable">\${appid}</span>&#39;&quot;</span>
    kubectl <span class="token parameter variable">-n</span> <span class="token variable">\${NAMESPACE}</span> get pdb clay-test <span class="token parameter variable">-o</span> json <span class="token operator">|</span> <span class="token punctuation">\\</span>
      jq <span class="token parameter variable">-r</span> <span class="token string">&quot;.metadata.name=<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${appid}</span><span class="token entity" title="\\&quot;">\\&quot;</span> | .spec.selector.matchLabels[<span class="token entity" title="\\&quot;">\\&quot;</span>appid<span class="token entity" title="\\&quot;">\\&quot;</span>]=<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${appid}</span><span class="token entity" title="\\&quot;">\\&quot;</span> |
              .metadata |= with_entries(select([.key] | inside([<span class="token entity" title="\\&quot;">\\&quot;</span>name<span class="token entity" title="\\&quot;">\\&quot;</span>, <span class="token entity" title="\\&quot;">\\&quot;</span>namespace<span class="token entity" title="\\&quot;">\\&quot;</span>, <span class="token entity" title="\\&quot;">\\&quot;</span>labels<span class="token entity" title="\\&quot;">\\&quot;</span>])))&quot;</span> <span class="token punctuation">\\</span>
      <span class="token operator">|</span> replace_or_create
  <span class="token keyword">done</span>
<span class="token punctuation">}</span>

init <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> pdb-init.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>编写钩子脚本<code>pdb-hooks.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

<span class="token assign-left variable">NAMESPACE</span><span class="token operator">=</span><span class="token string">&quot;prod&quot;</span>
<span class="token assign-left variable">ARRAY_COUNT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>jq <span class="token parameter variable">-r</span> <span class="token string">&#39;. | length-1&#39;</span> $BINDING_CONTEXT_PATH<span class="token variable">)</span></span>

<span class="token function-name function">run_hook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$1</span> <span class="token operator">==</span> <span class="token string">&quot;--config&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
    config
  <span class="token keyword">else</span>
    trigger
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
configVersion: v1
kubernetes:
- apiVersion: argoproj.io/v1alpha1
  kind: Rollout
  executeHookOnEvent:
  - Added
  - Deleted
  namespace:
    nameSelector:
      matchNames:
      - <span class="token variable">\${NAMESPACE}</span>
EOF</span>
<span class="token punctuation">}</span>

<span class="token function-name function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">IND</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">0</span> $ARRAY_COUNT<span class="token variable">\`</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">resourceEvent</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>jq <span class="token parameter variable">-r</span> <span class="token string">&quot;.[<span class="token variable">$IND</span>].watchEvent&quot;</span> $BINDING_CONTEXT_PATH<span class="token variable">)</span></span>
    <span class="token assign-left variable">resourceName</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>jq <span class="token parameter variable">-r</span> <span class="token string">&quot;.[<span class="token variable">$IND</span>].object.metadata.name&quot;</span> $BINDING_CONTEXT_PATH<span class="token variable">)</span></span>
    <span class="token assign-left variable">appid</span><span class="token operator">=</span><span class="token variable">\${resourceName<span class="token operator">%</span>-default}</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$resourceEvent</span> <span class="token operator">==</span> <span class="token string">&quot;Added&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Add PDB &#39;<span class="token variable">\${appid}</span>&#39;&quot;</span>
      kubectl <span class="token parameter variable">-n</span> <span class="token variable">\${NAMESPACE}</span> get pdb clay-test <span class="token parameter variable">-o</span> json <span class="token operator">|</span> <span class="token punctuation">\\</span>
        jq <span class="token parameter variable">-r</span> <span class="token string">&quot;.metadata.name=<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${appid}</span><span class="token entity" title="\\&quot;">\\&quot;</span> | .spec.selector.matchLabels[<span class="token entity" title="\\&quot;">\\&quot;</span>appid<span class="token entity" title="\\&quot;">\\&quot;</span>]=<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${appid}</span><span class="token entity" title="\\&quot;">\\&quot;</span> |
                .metadata |= with_entries(select([.key] | inside([<span class="token entity" title="\\&quot;">\\&quot;</span>name<span class="token entity" title="\\&quot;">\\&quot;</span>, <span class="token entity" title="\\&quot;">\\&quot;</span>namespace<span class="token entity" title="\\&quot;">\\&quot;</span>, <span class="token entity" title="\\&quot;">\\&quot;</span>labels<span class="token entity" title="\\&quot;">\\&quot;</span>])))&quot;</span> <span class="token punctuation">\\</span>
        <span class="token operator">|</span> replace_or_create
    <span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$resourceEvent</span> <span class="token operator">==</span> <span class="token string">&quot;Deleted&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Delete PDB &#39;<span class="token variable">\${appid}</span>&#39;&quot;</span>
      kubectl <span class="token parameter variable">-n</span> <span class="token variable">\${NAMESPACE}</span> delete pdb <span class="token variable">\${appid}</span>
    <span class="token keyword">else</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Do nothing&quot;</span>
    <span class="token keyword">fi</span>
  <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token function-name function">replace_or_create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">object</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span><span class="token variable">)</span></span>

  <span class="token keyword">if</span> <span class="token operator">!</span> kubectl get <span class="token parameter variable">-f</span> - <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$object</span>&quot;</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    kubectl create <span class="token parameter variable">-f</span> - <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$object</span>&quot;</span> <span class="token operator">&gt;</span>/dev/null
  <span class="token keyword">else</span>
    kubectl replace <span class="token parameter variable">--force</span> <span class="token parameter variable">-f</span> - <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$object</span>&quot;</span> <span class="token operator">&gt;</span>/dev/null
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

run_hook <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打包镜像，Dockerfile 如下</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ghcr.io/flant/shell-operator:latest</span>
<span class="token instruction"><span class="token keyword">ADD</span> pdb-hooks.sh /hooks</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打包上传镜像</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> wangzhichidocker/shell-operator-pdb:v1.0 <span class="token builtin class-name">.</span>
<span class="token function">docker</span> push wangzhichidocker/shell-operator-pdb:v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编写 RBAC、Deployment等<code>shell-operator-pdb.yaml</code>，部署到 K8s 集群中</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitor
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
    <span class="token key atrule">appid</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb


<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
    <span class="token key atrule">appid</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
  <span class="token key atrule">name</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> pods
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> watch
  <span class="token punctuation">-</span> list
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> argoproj.io
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;*&#39;</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> policy
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> poddisruptionbudgets
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> create
  <span class="token punctuation">-</span> patch
  <span class="token punctuation">-</span> update
  <span class="token punctuation">-</span> delete


<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
    <span class="token key atrule">appid</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitor


<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
    <span class="token key atrule">appid</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> monitor
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span>
      <span class="token key atrule">maxSurge</span><span class="token punctuation">:</span> 25%
      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
        <span class="token key atrule">appid</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> wangzhichidocker/shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb<span class="token punctuation">:</span>v1.0
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">name</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 500m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1000Mi
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 100m
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 200Mi
      <span class="token key atrule">dnsPolicy</span><span class="token punctuation">:</span> ClusterFirst
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">kubernetes.io/os</span><span class="token punctuation">:</span> linux
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> shell<span class="token punctuation">-</span>operator<span class="token punctuation">-</span>pdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 部署</span>
kubectl apply <span class="token parameter variable">-f</span> deploy/shell-operator-pdb.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>观察日志查看运行状态 <code>kubectl -n monitor logs -f shell-operator-pdb-xxx</code></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240318133056140.png" alt=""></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240318133226486.png" alt="image-20240318133226486"></p></li></ol><p>快捷体验：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/clay-wangzhi/shell-operator-pdb
<span class="token function">bash</span> pdb-init.sh
kubectl apply <span class="token parameter variable">-f</span> deploy/shell-operator-pdb.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详见：https://github.com/clay-wangzhi/shell-operator-pdb</p><p>参考链接：</p><ul><li>shell-operator：https://github.com/flant/shell-operator</li></ul><p>我是 Clay，下期见 👋</p><hr><blockquote><ul><li><p>欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/wiki 查看最新文章</p></li><li><p>欢迎加我微信<code>sre-k8s-ai</code>，与我讨论云原生、稳定性相关内容</p></li></ul></blockquote><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240220180036567.png" alt="weixin" style="zoom:50%;">`,19);function h(y,g){const a=t("ExternalLinkIcon");return p(),l("div",null,[u,r,n("ul",null,[d,k,n("li",null,[n("a",v,[s("自动弹性伸缩 HPA"),i(a)])]),b]),m])}const _=e(c,[["render",h],["__file","shell-operator-pdb.html.vue"]]);export{_ as default};
