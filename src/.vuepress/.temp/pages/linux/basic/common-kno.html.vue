<template><h1 id="常用知识" tabindex="-1"><a class="header-anchor" href="#常用知识" aria-hidden="true">#</a> 常用知识</h1>
<p><strong>如何查看当前服务器内核的版本</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>uname -r
cat /proc/version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>查看当前服务器 cpu 的 core(核心)数</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 总核数 = 物理CPU个数 X 每颗物理CPU的核数 
# 总逻辑CPU数 = 物理CPU个数 X 每颗物理CPU的核数 X 超线程数
# 查看物理CPU个数
cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l
# 查看每个物理CPU中core的个数(即核数)
cat /proc/cpuinfo| grep "cpu cores"| uniq
# 查看逻辑CPU的个数
cat /proc/cpuinfo| grep "processor"| wc -l
查看CPU信息（型号）
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>判断当前机器是虚拟机还是物理机</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>dmidecode -s system-product-name
VMware Virtual Platform  <span class="token comment"># 包含virtual字样，为虚拟机</span>

dmidecode -s system-product-name
PowerEdge R730  <span class="token comment"># 不包含virtual字样，为物理机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Linux删除软链接</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>unlink
<span class="token function">rm</span> -rf ./test_chk_ln
<span class="token comment"># 注意目录后面不要跟 / ，会把目录下面的文件删掉</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
