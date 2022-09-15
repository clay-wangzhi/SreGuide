import{_ as a,r as e,c as p,a as s,b as t,F as c,e as l,d as r,o}from"./app.99236824.js";const i={},u=l(`<h1 id="etcd-\u5907\u4EFD\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#etcd-\u5907\u4EFD\u6062\u590D" aria-hidden="true">#</a> etcd \u5907\u4EFD\u6062\u590D</h1><h2 id="etcd-\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#etcd-\u5907\u4EFD" aria-hidden="true">#</a> etcd \u5907\u4EFD</h2><ol><li><p>\u521B\u5EFA\u5907\u4EFD\u811A\u672C<code>/opt/etcd_backup.sh</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment">#</span>
<span class="token comment"># Etcd backup</span>
 
<span class="token builtin class-name">set</span> -e
 
<span class="token assign-left variable">ETCD_CA_CERT</span><span class="token operator">=</span><span class="token string">&quot;/etc/kubernetes/pki/etcd/ca.crt&quot;</span>
<span class="token assign-left variable">ETCD_CERT</span><span class="token operator">=</span><span class="token string">&quot;/etc/kubernetes/pki/etcd/server.crt&quot;</span>
<span class="token assign-left variable">ETCD_KEY</span><span class="token operator">=</span><span class="token string">&quot;/etc/kubernetes/pki/etcd/server.key&quot;</span>
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span><span class="token string">&quot;/var/lib/docker/etcd_backup&quot;</span>
<span class="token assign-left variable">DT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d.%H%M%S<span class="token variable">)</span></span>
 
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">\${BACKUP_DIR}</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">\${BACKUP_DIR}</span>
<span class="token function">find</span> <span class="token variable">\${BACKUP_DIR}</span> -name <span class="token string">&quot;*.db&quot;</span> -mtime +7 -exec <span class="token function">rm</span> -f <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
 
<span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> /usr/local/bin/etcdctl --endpoints<span class="token operator">=</span>https://127.0.0.1:2379 <span class="token punctuation">\\</span>
  --cacert<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${ETCD_CA_CERT}</span>&quot;</span> --cert<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${ETCD_CERT}</span>&quot;</span> --key<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${ETCD_KEY}</span>&quot;</span> <span class="token punctuation">\\</span>
  snapshot save <span class="token string">&quot;<span class="token variable">\${BACKUP_DIR}</span>/etcd-snapshot-<span class="token variable">\${DT}</span>.db&quot;</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Etcd backup success, backup file: <span class="token variable">\${BACKUP_DIR}</span>/etcd-snapshot-<span class="token variable">\${DT}</span>.db, \\
  file size: <span class="token variable"><span class="token variable">$(</span><span class="token function">du</span> -sh $<span class="token punctuation">{</span>BACKUP_DIR<span class="token punctuation">}</span>/etcd-snapshot-$<span class="token punctuation">{</span>DT<span class="token punctuation">}</span>.db <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li><li><p>\u6DFB\u52A0cron\u5B9A\u65F6\u4EFB\u52A1 <code>crontab -e</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">0</span> */1 * * * /bin/bash /opt/etcd_backup.sh <span class="token operator">&gt;&gt;</span>/opt/log-backup-etcd.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><h2 id="etcd-\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#etcd-\u6062\u590D" aria-hidden="true">#</a> etcd \u6062\u590D</h2><ol><li><p>\u521B\u5EFA\u5907\u4EFD\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /opt/k8s_manifests_backup
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u505C\u6B62\u6240\u6709 Master \u4E0A kube-apiserver \u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> /etc/kubernetes/manifests/kube-apiserver.yaml /opt/k8s_manifests_backup/
<span class="token comment"># \u68C0\u67E5\u670D\u52A1\u662F\u5426\u5DF2\u505C\u6B62</span>
kubectl get pod -n kube-system <span class="token operator">|</span> <span class="token function">grep</span> kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u505C\u6B62\u96C6\u7FA4\u4E2D\u6240\u6709 etcd \u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BB0\u5F55 etcd --name\u3001--initial-advertise-peer-urls\u3001--data-dir \u503C</span>
<span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> etcd
<span class="token comment"># \u505C\u6B62\u670D\u52A1</span>
<span class="token function">mv</span> /etc/kubernetes/manifests/etcd.yaml /opt/k8s_manifests_backup/
<span class="token comment"># \u68C0\u67E5\u670D\u52A1\u662F\u5426\u5DF2\u505C\u6B62</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> etcd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u79FB\u9664\u6240\u6709 etcd \u5B58\u50A8\u76EE\u5F55\u4E0B\u6570\u636E\uFF0C\u4E0D\u540C\u73AF\u5883\u4E0B\uFF0C\u5B58\u50A8\u76EE\u5F55\u53EF\u80FD\u4E0D\u4E00\u6837\uFF0C\u7EBF\u4E0A\u5B58\u50A8\u76EE\u5F55\u4E3A <code>/data/etcd</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> /data/etcd<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u62F7\u8D1D\u8981\u6062\u590D\u7684\u5FEB\u7167\u5230\u6240\u6709 etcd \u8282\u70B9\uFF0C\u8FDB\u884C\u5FEB\u7167\u6062\u590D \u6240\u6709 etcd \u8282\u70B9\u64CD\u4F5C\uFF0C\u4E0D\u540C\u8282\u70B9\uFF0C\u4F20\u5165\u4E0D\u540C\u7684 <code>--name\u3001--initial-advertise-peer-urls\u3001--data-dir</code>\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> /usr/local/bin/etcdctl snapshot restore /tmp/xxx.db <span class="token punctuation">\\</span>
  --name st-kubernetes-master-2 <span class="token punctuation">\\</span>
  --initial-cluster <span class="token string">&quot;st-kubernetes-master-3=https://10.100.142.165:2380,st-kubernetes-master-1=https://10.100.142.163:2380,st-kubernetes-master-2=https://10.100.142.164:2380&quot;</span> <span class="token punctuation">\\</span>
  --initial-cluster-token k8s_etcd <span class="token punctuation">\\</span>
  --initial-advertise-peer-urls https://10.100.142.164:2380 <span class="token punctuation">\\</span>
  --data-dir<span class="token operator">=</span>/data/etcd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u542F\u52A8\u96C6\u7FA4\u4E2D\u6240\u6709 etcd</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> /opt/k8s_manifests_backup/etcd.yaml /etc/kubernetes/manifests/
<span class="token comment"># \u68C0\u67E5\u96C6\u7FA4\u72B6\u6001</span>
<span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> /usr/local/bin/etcdctl  --cacert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/ca.crt <span class="token punctuation">\\</span>
  --cert<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.crt <span class="token punctuation">\\</span>
  --key<span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.key <span class="token punctuation">\\</span>
  --endpoints<span class="token operator">=</span>https://10.100.142.163:2379,https://10.100.142.164:2379,https://10.100.142.165:2379 <span class="token punctuation">\\</span>
  endpoint health
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>\u542F\u52A8\u6240\u6709 Master \u4E0A kube-apiserver \u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> /opt/k8s_manifests_backup/kube-apiserver.yaml /etc/kubernetes/manifests/
<span class="token comment"># \u68C0\u67E5\u670D\u52A1\u72B6\u6001</span>
kubectl get pod -n kube-system <span class="token operator">|</span> <span class="token function">grep</span> kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u68C0\u67E5\u662F\u5426\u5982\u671F\u6062\u590D</p></li></ol><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>Kubernetes \u96C6\u7FA4\u5907\u4EFD\u4E3B\u8981\u662F\u5907\u4EFDetcd\u96C6\u7FA4\u3002\u800C\u6062\u590D\u65F6\uFF0C\u4E3B\u8981\u8003\u8651\u6062\u590D\u6574\u4E2A\u987A\u5E8F\uFF1A</p><p>\u505C\u6B62Kube-apiserver\u2013&gt; \u505C\u6B62etcd\u2013&gt; \u6062\u590D\u6570\u636E\u2013&gt;\u542F\u52A8etcd\u2013&gt;\u542F\u52A8kube-apiserver</p><blockquote><p>\u6CE8\u610F\uFF1A\u5907\u4EFDetcd\u96C6\u7FA4\u65F6\uFF0C\u53EA\u9700\u8981\u5907\u4EFD\u4E00\u4E2Aetcd\u5C31\u884C\uFF0C\u6062\u590D\u65F6\uFF0C\u62FF\u540C\u4E00\u4EFD\u5907\u4EFD\u6570\u636E\u6062\u590D\u3002</p></blockquote><p>\u53C2\u8003\uFF1A</p>`,10),b={href:"https://kubesphere.com.cn/forum/d/3532-etcdkubernetes",target:"_blank",rel:"noopener noreferrer"},d=r("Etcd\u5907\u4EFD\u6570\u636E\u5982\u4F55\u505A\u5230\u5B8C\u7F8E\u6062\u590DKubernetes\u4E2D\u8BEF\u5220\u6570\u636E\u5462");function k(m,h){const n=e("ExternalLinkIcon");return o(),p(c,null,[u,s("ul",null,[s("li",null,[s("a",b,[d,t(n)])])])],64)}var g=a(i,[["render",k],["__file","etcd-backup-restore.html.vue"]]);export{g as default};
