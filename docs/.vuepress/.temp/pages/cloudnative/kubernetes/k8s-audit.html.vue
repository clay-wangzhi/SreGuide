<template><h1 id="k8s-开启审计日志" tabindex="-1"><a class="header-anchor" href="#k8s-开启审计日志" aria-hidden="true">#</a> k8s 开启审计日志</h1>
<h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h2>
<ul>
<li>应安全规范，对 apiserver 核心组件，需要记录，&quot;谁在什么时候操作了什么&quot;</li>
<li>方便故障排查</li>
</ul>
<h2 id="二、操作步骤" tabindex="-1"><a class="header-anchor" href="#二、操作步骤" aria-hidden="true">#</a> 二、操作步骤</h2>
<h3 id="apiserver-开启审计日志" tabindex="-1"><a class="header-anchor" href="#apiserver-开启审计日志" aria-hidden="true">#</a> apiserver 开启审计日志</h3>
<p>在所有 master 节点执行</p>
<ol>
<li>
<p>备份 配置文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p /home/clay/bak<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F<span class="token variable">)</span></span>
<span class="token function">cp</span> /etc/kubernetes/manifests/kube-apiserver.yaml /home/clay/bak<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>创建审计策略</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> /etc/kubernetes/audit/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>vim /etc/kubernetes/audit/audit-policy.yaml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> audit.k8s.io/v1beta1 <span class="token comment"># This is required.</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Policy
<span class="token key atrule">omitStages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">"RequestReceived"</span>
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:kube-proxy"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"watch"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"endpoints"</span><span class="token punctuation">,</span> <span class="token string">"services"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:unsecured"</span><span class="token punctuation">]</span>
    <span class="token key atrule">namespaces</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"kube-system"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"configmaps"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:serviceaccount:kube-system:calico-node"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">,</span><span class="token string">"list"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"kubelet"</span><span class="token punctuation">]</span> <span class="token comment"># legacy kubelet identity</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"nodes"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">userGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:nodes"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"nodes"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> system<span class="token punctuation">:</span>kube<span class="token punctuation">-</span>controller<span class="token punctuation">-</span>manager
      <span class="token punctuation">-</span> system<span class="token punctuation">:</span>kube<span class="token punctuation">-</span>scheduler
      <span class="token punctuation">-</span> system<span class="token punctuation">:</span>serviceaccount<span class="token punctuation">:</span>kube<span class="token punctuation">-</span>system<span class="token punctuation">:</span>endpoint<span class="token punctuation">-</span>controller
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">,</span> <span class="token string">"update"</span><span class="token punctuation">]</span>
    <span class="token key atrule">namespaces</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"kube-system"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"endpoints"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:apiserver"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"namespaces"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">nonResourceURLs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /healthz*
      <span class="token punctuation">-</span> /version
      <span class="token punctuation">-</span> /swagger*
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"events"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> Metadata
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"secrets"</span><span class="token punctuation">,</span> <span class="token string">"configmaps"</span><span class="token punctuation">]</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> authentication.k8s.io
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"tokenreviews"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> Metadata
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div></li>
<li>
<p>修改apiserver 配置文件
<code>vim /etc/kubernetes/manifests/kube-apiserver.yaml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 在spec.containers.command 最后新增</span>
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>audit<span class="token punctuation">-</span>policy<span class="token punctuation">-</span>file=/etc/kubernetes/audit/audit<span class="token punctuation">-</span>policy.yaml
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>audit<span class="token punctuation">-</span>log<span class="token punctuation">-</span>maxage=100
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>audit<span class="token punctuation">-</span>log<span class="token punctuation">-</span>maxsize=200
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>audit<span class="token punctuation">-</span>log<span class="token punctuation">-</span>path=/var/log/apiserver/audit.log
<span class="token comment"># 在spec.containers.volumeMounts 最后新增</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/kubernetes/audit
      <span class="token key atrule">name</span><span class="token punctuation">:</span> audit
      <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/log/apiserver/
      <span class="token key atrule">name</span><span class="token punctuation">:</span> log
<span class="token comment"># 在spec.volumes 最后新增</span>
  <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/kubernetes/audit
      <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate
    <span class="token key atrule">name</span><span class="token punctuation">:</span> audit
  <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /var/log/apiserver
      <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate
    <span class="token key atrule">name</span><span class="token punctuation">:</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></li>
</ol>
<h3 id="使用-filebeat-收集审计日志到-elk-中" tabindex="-1"><a class="header-anchor" href="#使用-filebeat-收集审计日志到-elk-中" aria-hidden="true">#</a> 使用 filebeat 收集审计日志到 elk 中</h3>
<p>编写 yaml 文件</p>
<p><code>vim filebeat-configmap.yaml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> filebeat<span class="token punctuation">-</span>config
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> audit
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> filebeat
    <span class="token key atrule">kubernetes.io/cluster-service</span><span class="token punctuation">:</span> <span class="token string">"true"</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> filebeat<span class="token punctuation">-</span>config
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">filebeat.yml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    filebeat.prospectors:
    - input_type: log
      enabled: true
      tail_files: true
      paths:
        - /var/log/apiserver/*.log</span>

    <span class="token key atrule">output.kafka</span><span class="token punctuation">:</span>
      <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"xxx:9092"</span><span class="token punctuation">]</span>
      <span class="token key atrule">topic</span><span class="token punctuation">:</span> <span class="token string">'test_k8s_audit_log'</span>
      <span class="token key atrule">required_acks</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">partition.round_robin</span><span class="token punctuation">:</span>
        <span class="token key atrule">reachable_only</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">compression</span><span class="token punctuation">:</span> gzip
      <span class="token key atrule">max_message_bytes</span><span class="token punctuation">:</span> <span class="token number">10000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><code>vim filebeat-ds.yaml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> filebeat
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> audit
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> filebeat
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> filebeat
      <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> filebeat
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> filebeat
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> filebeat
        <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> filebeat
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">effect</span><span class="token punctuation">:</span> NoSchedule
        <span class="token key atrule">key</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>role.kubernetes.io/master
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-role.kubernetes.io/master-select</span><span class="token punctuation">:</span> master
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.elastic.co/beats/filebeat<span class="token punctuation">:</span>6.4.0
        <span class="token key atrule">name</span><span class="token punctuation">:</span> filebeat
        <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token string">"-c"</span><span class="token punctuation">,</span> <span class="token string">"/home/filebeat-config/filebeat.yml"</span><span class="token punctuation">,</span>
            <span class="token string">"-e"</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
          <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> log
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/log/apiserver
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">"filebeat-volume"</span>
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> <span class="token string">"/home/filebeat-config"</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> filebeat<span class="token punctuation">-</span>volume
          <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> filebeat<span class="token punctuation">-</span>config
        <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /var/log/apiserver
            <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate
          <span class="token key atrule">name</span><span class="token punctuation">:</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>master 节点打标签，部署</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl label <span class="token function">node</span> masternamexxx node-role.kubernetes.io/master-select<span class="token operator">=</span>master
kubectl create ns audit
kubectl apply -f filebeat-configmap.yaml
kubectl apply -f filebeat-ds.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
