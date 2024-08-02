import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as p,a as n,b as s,d as i,e as c}from"./app-20d624c9.js";const o={},u=n("h1",{id:"将-ovirt-虚拟机迁移到-kubevirt",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#将-ovirt-虚拟机迁移到-kubevirt","aria-hidden":"true"},"#"),s(" 将 oVirt 虚拟机迁移到 KubeVirt")],-1),r={href:"http://mp.weixin.qq.com/s?__biz=MzI4NzAxMjIzNw==&mid=2247484895&idx=1&sn=833c14f781e945bcaeac3175579b3fea&chksm=ebd5613ddca2e82bd7f0198735d7f082ea44883b236f62795d8b97c6becba8d1b20e211b1f35&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},d=c(`<p>本篇，我们将 oVirt 虚拟机迁移到 KubeVirt，分两步：</p><ol><li>oVirt 磁盘数据借助 CDI 导出</li><li>KubeVirt 使用 DataVolume 导入</li></ol><h2 id="ovirt-磁盘数据使用-cdi-导出" tabindex="-1"><a class="header-anchor" href="#ovirt-磁盘数据使用-cdi-导出" aria-hidden="true">#</a> Ovirt 磁盘数据使用 CDI 导出</h2><p>创建 <code>source</code> 为 <code>imageio</code> 的 <code>DataVolume</code> 对象，先创建依赖，<code>Secret</code> 认证信息、<code>tls-certs</code> 证书信息</p><p><code>endpoint-secret.yaml</code> 内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> endpoint<span class="token punctuation">-</span>secret
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> containerized<span class="token punctuation">-</span>data<span class="token punctuation">-</span>importer
<span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessKeyId</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>  <span class="token comment"># &lt;optional: your key or user name, base64 encoded&gt;</span>
  <span class="token key atrule">secretKey</span><span class="token punctuation">:</span>    <span class="token string">&quot;&quot;</span> <span class="token comment"># &lt;optional: your secret or password, base64 encoded&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>用户名、密码通过 base64 加密</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span>  <span class="token string">&quot;username&quot;</span><span class="token operator">|</span> base64
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span>  <span class="token string">&quot;password&quot;</span><span class="token operator">|</span> base64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><code>cert-configmap.yaml</code> 内容如下：</p><p>证书获取方式：</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240701192248980.png" alt=""></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tls<span class="token punctuation">-</span>certs
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">ca.pem</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    -----BEGIN CERTIFICATE-----
    ... &lt;base64 encoded cert&gt; ...
    -----END CERTIFICATE-----</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般虚拟机上，有两块盘，系统盘和数据盘，先准备 <code>PV</code> ，再创建 <code>DataVolume</code></p><p><code>test-pv.yaml</code> 内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ovirt<span class="token punctuation">-</span>test<span class="token punctuation">-</span>sys
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 90Gi
  <span class="token key atrule">volumeMode</span><span class="token punctuation">:</span> Filesystem
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteOnce
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Delete
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> local<span class="token punctuation">-</span>storage
  <span class="token key atrule">local</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /data/ovirt<span class="token punctuation">-</span>test<span class="token punctuation">-</span>sys
  <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span>
    <span class="token key atrule">required</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> kubernetes.io/hostname
              <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
              <span class="token key atrule">values</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> sh1<span class="token punctuation">-</span>st<span class="token punctuation">-</span>int<span class="token punctuation">-</span>k8s<span class="token punctuation">-</span>ops<span class="token punctuation">-</span>kubevirt<span class="token punctuation">-</span><span class="token number">03</span>

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ovirt<span class="token punctuation">-</span>test<span class="token punctuation">-</span>data
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 12Gi
  <span class="token key atrule">volumeMode</span><span class="token punctuation">:</span> Filesystem
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteOnce
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Delete
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> local<span class="token punctuation">-</span>storage
  <span class="token key atrule">local</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /data/ovirt<span class="token punctuation">-</span>test<span class="token punctuation">-</span>data
  <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span>
    <span class="token key atrule">required</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> kubernetes.io/hostname
              <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
              <span class="token key atrule">values</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> sh1<span class="token punctuation">-</span>st<span class="token punctuation">-</span>int<span class="token punctuation">-</span>k8s<span class="token punctuation">-</span>ops<span class="token punctuation">-</span>kubevirt<span class="token punctuation">-</span><span class="token number">03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>为了测试，所以数据盘较小一些</p><p>PV 中 spec.capacity.storage 要略大于 DataVolume 中的设置</p><p>local 类型的 path 需要在宿主机上提前创建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /data/ovirt-test-sys /data/ovirt-test-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>test-dv.yaml</code>内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> cdi.kubevirt.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DataVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">cdi.kubevirt.io/storage.bind.immediate.requested</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token key atrule">cdi.kubevirt.io/storage.usePopulator</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;test-dv-sys&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">source</span><span class="token punctuation">:</span>
      <span class="token key atrule">imageio</span><span class="token punctuation">:</span>
         <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://xxx/ovirt-engine/api&quot;</span>
         <span class="token key atrule">secretRef</span><span class="token punctuation">:</span> <span class="token string">&quot;endpoint-secret&quot;</span>
         <span class="token key atrule">certConfigMap</span><span class="token punctuation">:</span> <span class="token string">&quot;tls-certs&quot;</span>
         <span class="token key atrule">diskId</span><span class="token punctuation">:</span> <span class="token string">&quot;xxx&quot;</span>
  <span class="token key atrule">storage</span><span class="token punctuation">:</span>
    <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteOnce
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token key atrule">requests</span><span class="token punctuation">:</span>
        <span class="token key atrule">storage</span><span class="token punctuation">:</span> 80Gi
    <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> local<span class="token punctuation">-</span>storage

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> cdi.kubevirt.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DataVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">cdi.kubevirt.io/storage.bind.immediate.requested</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token key atrule">cdi.kubevirt.io/storage.usePopulator</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;test-dv-data&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">source</span><span class="token punctuation">:</span>
      <span class="token key atrule">imageio</span><span class="token punctuation">:</span>
         <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://xxx/ovirt-engine/api&quot;</span>
         <span class="token key atrule">secretRef</span><span class="token punctuation">:</span> <span class="token string">&quot;endpoint-secret&quot;</span>
         <span class="token key atrule">certConfigMap</span><span class="token punctuation">:</span> <span class="token string">&quot;tls-certs&quot;</span>
         <span class="token key atrule">diskId</span><span class="token punctuation">:</span> <span class="token string">&quot;xxx&quot;</span>
  <span class="token key atrule">storage</span><span class="token punctuation">:</span>
    <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteOnce
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token key atrule">requests</span><span class="token punctuation">:</span>
        <span class="token key atrule">storage</span><span class="token punctuation">:</span> 10Gi
    <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> local<span class="token punctuation">-</span>storage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Apply</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> endpoint-secret.yaml
kubectl apply <span class="token parameter variable">-f</span> cert-configmap.yaml
kubectl  apply <span class="token parameter variable">-f</span> test-pv.yaml
kubectl  apply <span class="token parameter variable">-f</span> test-dv.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>由于 ovirt 域名做的本地 hosts 解析，所以要在 Coredns 上加上，域名对应的解析记录，见附录一</p><p>要迁移的虚拟机，需要关机，使用离线迁移方式，否则会报错</p><p>Fault reason is &quot;Operation Failed&quot;. Fault detail is &quot;[Cannot transfer Virtual Disk. The disk xxx_Disk1 is plugged to non-Down VMs: ip-hostname]&quot;. HTTP response code is &quot;409&quot;. HTTP response message is &quot;409 Conflict&quot;.</p></blockquote><p>查看导入状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ kubectl get datavolumes.cdi.kubevirt.io
NAME           PHASE       PROGRESS   RESTARTS   AGE
test-dv-data   Succeeded   <span class="token number">100.0</span>%                13m
test-dv-sys    Succeeded   <span class="token number">100.0</span>%                13m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubevirt-使用-datavolume-导入" tabindex="-1"><a class="header-anchor" href="#kubevirt-使用-datavolume-导入" aria-hidden="true">#</a> KubeVirt 使用 DataVolume 导入</h2><p>创建 <code>VM</code>，<code>test-vm.yaml</code>内容如下</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> kubevirt.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualMachine
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubevirt.io/vm</span><span class="token punctuation">:</span> ovirt<span class="token punctuation">-</span>test
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ovirt<span class="token punctuation">-</span>test
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">running</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">kubevirt.io/vm</span><span class="token punctuation">:</span> ovirt<span class="token punctuation">-</span>test
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
        <span class="token key atrule">cni.projectcalico.org/ipAddrs</span><span class="token punctuation">:</span> <span class="token string">&#39;[&quot;10.70.73.10&quot;]&#39;</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">domain</span><span class="token punctuation">:</span>
        <span class="token key atrule">devices</span><span class="token punctuation">:</span>
          <span class="token key atrule">disks</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">disk</span><span class="token punctuation">:</span>
              <span class="token key atrule">bus</span><span class="token punctuation">:</span> virtio
            <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>dv<span class="token punctuation">-</span>sys
          <span class="token punctuation">-</span> <span class="token key atrule">disk</span><span class="token punctuation">:</span>
              <span class="token key atrule">bus</span><span class="token punctuation">:</span> virtio
            <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>dv<span class="token punctuation">-</span>data
          <span class="token key atrule">interfaces</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> default
            <span class="token key atrule">bridge</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token number">4</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 8Gi
      <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> default
        <span class="token key atrule">pod</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">dataVolume</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>dv<span class="token punctuation">-</span>sys
        <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>dv<span class="token punctuation">-</span>sys
      <span class="token punctuation">-</span> <span class="token key atrule">dataVolume</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>dv<span class="token punctuation">-</span>data
        <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>dv<span class="token punctuation">-</span>data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建、启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl  apply <span class="token parameter variable">-f</span> test-vm.yaml
virtctl start ovirt-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>连接服务查看系统是否正常</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240701200744420.png" alt=""></p><blockquote><p>在创建 VM 的过程中，使用 virtctl console ovirt-test , 终端无反应，且 <code>VM IP</code> Ping 不同，然后安装了 VNC 排查解决了 cloud-init 问题，见附录二</p><p>⚠️ 需要数据落盘的，不要直接删除 VM，要先 STOP，在 DELETE</p></blockquote><h2 id="附录一-k8s-新增自定义解析" tabindex="-1"><a class="header-anchor" href="#附录一-k8s-新增自定义解析" aria-hidden="true">#</a> 附录一：K8s 新增自定义解析</h2><p>本集群使用 Coredns + NodeLocalDNS 方案</p><p>首先在 Coredns 上修改配置文件，然后重启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ kubectl  <span class="token parameter variable">-n</span> kube-system edit cm coredns
        hosts <span class="token punctuation">{</span>
            ovirt-ip ovirt-domain
            fallthrough
        <span class="token punctuation">}</span>
$ kubectl  <span class="token parameter variable">-n</span> kube-system rollout restart deployment coredns        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 NodeLocalDNS 上修改配置文件 ，然后重启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ kubectl  <span class="token parameter variable">-n</span> kube-system edit cm nodelocaldns
<span class="token comment"># .53 下面的 forward 进行修改,此处为 CoreDNS 地址</span>
        forward <span class="token builtin class-name">.</span> <span class="token punctuation">{</span>CoreDNS_SERVICE_IP<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
            force_tcp
        <span class="token punctuation">}</span>
$ kubectl <span class="token parameter variable">-n</span> kube-system rollout restart ds nodelocaldns        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附录二-安装-vnc-排查网络不通-vm-连不上" tabindex="-1"><a class="header-anchor" href="#附录二-安装-vnc-排查网络不通-vm-连不上" aria-hidden="true">#</a> 附录二：安装 VNC 排查网络不通，VM 连不上</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Centos 安装可视化页面</span>
yum groupinstall <span class="token string">&quot;GNOME Desktop&quot;</span>
systemctl set-default graphical.target
systemctl start graphical.target

<span class="token comment"># 安装 vnc</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> tigervnc tigervnc-server

<span class="token comment"># vnc 进去排查</span>
virtctl vnc ovirt-test

<span class="token comment">## 排查发现，网络依然是 oVirt 旧虚拟机的网络，默认 cloud-init 服务会重置网络为 DHCP ，分配 IP 才对，这里没有生效</span>
<span class="token comment">## oVirt 虚拟机开机，发现停止且禁用了 cloud-init 服务，启动服务，关机，重启导入即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根因：oVirt 虚拟机停止禁用了 cloud-init 服务。所以 oVirt 迁移前，需要先启动 cloud-init 服务</p><p>参考链接：</p><p>从 oVirt 导入：https://github.com/kubevirt/containerized-data-importer/blob/main/doc/datavolumes.md#image-io-data-volume</p><p>文章如有错误，欢迎业界专家指正</p><p>我是 Clay，下期见 👋</p><hr><blockquote><ul><li><p>欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/SreGuide 查看最新文章</p></li><li><p>欢迎加我微信<code>sre-k8s-ai</code>，与我讨论云原生、稳定性相关内容</p></li></ul></blockquote><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240615194414355.png" alt="weixin" style="zoom:50%;">`,46);function k(v,m){const a=t("ExternalLinkIcon");return l(),p("div",null,[u,n("p",null,[s("上篇，我们 "),n("a",r,[s("从0开始装一套 KubeVirt 1.2.1"),i(a)])]),d])}const g=e(o,[["render",k],["__file","ovirt-to-kubevirt.html.vue"]]);export{g as default};
