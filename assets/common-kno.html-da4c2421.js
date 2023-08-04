import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a}from"./app-08ceb845.js";const i={},r=a(`<h1 id="常用知识" tabindex="-1"><a class="header-anchor" href="#常用知识" aria-hidden="true">#</a> 常用知识</h1><p><strong>如何查看当前服务器内核的版本</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uname -r
cat /proc/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看当前服务器 cpu 的 core(核心)数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 总核数 = 物理CPU个数 X 每颗物理CPU的核数 
# 总逻辑CPU数 = 物理CPU个数 X 每颗物理CPU的核数 X 超线程数
# 查看物理CPU个数
cat /proc/cpuinfo| grep &quot;physical id&quot;| sort| uniq| wc -l
# 查看每个物理CPU中core的个数(即核数)
cat /proc/cpuinfo| grep &quot;cpu cores&quot;| uniq
# 查看逻辑CPU的个数
cat /proc/cpuinfo| grep &quot;processor&quot;| wc -l
查看CPU信息（型号）
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>判断当前机器是虚拟机还是物理机</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dmidecode <span class="token parameter variable">-s</span> system-product-name
VMware Virtual Platform  <span class="token comment"># 包含virtual字样，为虚拟机</span>

dmidecode <span class="token parameter variable">-s</span> system-product-name
PowerEdge R730  <span class="token comment"># 不包含virtual字样，为物理机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Linux删除软链接</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>unlink
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ./test_chk_ln
<span class="token comment"># 注意目录后面不要跟 / ，会把目录下面的文件删掉</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[r];function c(l,t){return n(),s("div",null,d)}const v=e(i,[["render",c],["__file","common-kno.html.vue"]]);export{v as default};
