<template><h1 id="etcd-磁盘空间爆满解决方案" tabindex="-1"><a class="header-anchor" href="#etcd-磁盘空间爆满解决方案" aria-hidden="true">#</a> ETCD 磁盘空间爆满解决方案</h1>
<blockquote>
<p>etcd默认的空间配额限制为2G，超出空间配额限制就会影响服务，所以需要定期清理</p>
</blockquote>
<h2 id="查看集群状态" tabindex="-1"><a class="header-anchor" href="#查看集群状态" aria-hidden="true">#</a> 查看集群状态</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl --cacert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/ca.crt --cert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.crt --key<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.key --endpoints<span class="token operator">=</span>https://10.100.142.163:2379 --write-out<span class="token operator">=</span>table endpoint status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看ETCD集群报警情况</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl --cacert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/ca.crt --cert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.crt --key<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.key --endpoints<span class="token operator">=</span>https://10.100.142.163:2379 alarm list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>meberID:XXXXXXXXXXXXXXX alarm:NOSPACE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>此处 <code>alarm</code> 提示 <code>NOSPACE</code>，需要升级 ETCD 集群的空间（默认为2G的磁盘使用空间），或者压缩老数据，升级空间后，需要使用 etcd命令，取消此报警信息，否则集群依旧无法使用</p>
</blockquote>
<h2 id="增加etcd的容量" tabindex="-1"><a class="header-anchor" href="#增加etcd的容量" aria-hidden="true">#</a> 增加etcd的容量</h2>
<p>修改 etcd.yaml 文件，由2G--&gt;8G,增加以下三个参数</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>- --auto-compaction-mode<span class="token operator">=</span>revision
- --auto-compaction-retention<span class="token operator">=</span><span class="token number">1000</span>
- --quota-backend-bytes<span class="token operator">=</span><span class="token number">8589934592</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>auto-compaction-mode=revision 按版本号压缩</p>
<p>auto-compaction-retention=1000 保留近1000个revision，每5分钟自动压缩 ”latest revision” - 1000</p>
<p>quota-backend-bytes 设置etcd最大容量为8G</p>
</blockquote>
<h2 id="压缩老数据" tabindex="-1"><a class="header-anchor" href="#压缩老数据" aria-hidden="true">#</a> 压缩老数据</h2>
<ul>
<li>获取当前etcd数据的修订版本(revision)</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">rev</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl  --cacert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/ca.crt --cert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.crt --key<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.key --endpoints<span class="token operator">=</span>https://10.100.142.163:2379 endpoint status --write-out<span class="token operator">=</span><span class="token string">"json"</span> <span class="token operator">|</span> <span class="token function">egrep</span> -o <span class="token string">'"revision":[0-9]*'</span> <span class="token operator">|</span> <span class="token function">egrep</span> -o <span class="token string">'[0-9].*'</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$rev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>整合压缩旧版本数据</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl --cacert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/ca.crt --cert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.crt --key<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.key --endpoints<span class="token operator">=</span>https://10.100.142.163:2379 compact <span class="token variable">$rev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>执行碎片整理</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl --cacert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/ca.crt --cert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.crt --key<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.key --endpoints<span class="token operator">=</span>https://10.100.142.163:2379 defrag
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="解除告警" tabindex="-1"><a class="header-anchor" href="#解除告警" aria-hidden="true">#</a> 解除告警</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl --cacert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/ca.crt --cert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.crt --key<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.key --endpoints<span class="token operator">=</span>https://10.100.142.163:2379 alarm disarm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="验证可以添加新数据" tabindex="-1"><a class="header-anchor" href="#验证可以添加新数据" aria-hidden="true">#</a> 验证可以添加新数据</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl --cacert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/ca.crt --cert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.crt --key<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.key --endpoints<span class="token operator">=</span>https://10.100.142.163:2379 put newkeytestfornospace <span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>⚠️ auto compact只会压缩key space，不会释放物理存储空间。所以需要定期的执行defrag</p>
</blockquote>
</template>
