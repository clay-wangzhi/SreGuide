import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as n}from"./app-e91902ff.js";const i={},l=n(`<h1 id="利用-lxcfs-提升容器资源可见性" tabindex="-1"><a class="header-anchor" href="#利用-lxcfs-提升容器资源可见性" aria-hidden="true">#</a> 利用 LXCFS 提升容器资源可见性</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>解决应用无法识别容器资源限制的问题</p><h2 id="具体操作步骤" tabindex="-1"><a class="header-anchor" href="#具体操作步骤" aria-hidden="true">#</a> 具体操作步骤</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/clay-wangzhi/lxcfs-admission-webhook.git
kubectl create ns sre
<span class="token builtin class-name">cd</span> lxcfs-admission-webhook
kubectl apply <span class="token parameter variable">-f</span> deployment/lxcfs-daemonset.yaml
./deployment/install.sh
<span class="token comment"># 为注入启用命名空间</span>
kubectl label namespace xxx lxcfs-admission-webhook<span class="token operator">=</span>enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[l];function d(t,r){return a(),s("div",null,c)}const m=e(i,[["render",d],["__file","lxcfs.html.vue"]]);export{m as default};
