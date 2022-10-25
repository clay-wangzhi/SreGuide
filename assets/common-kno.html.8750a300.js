import{_ as n,e as s}from"./app.4792bd1f.js";const e={},a=s(`<h1 id="\u5E38\u7528\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u77E5\u8BC6" aria-hidden="true">#</a> \u5E38\u7528\u77E5\u8BC6</h1><p><strong>\u5982\u4F55\u67E5\u770B\u5F53\u524D\u670D\u52A1\u5668\u5185\u6838\u7684\u7248\u672C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>uname -r
cat /proc/version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u67E5\u770B\u5F53\u524D\u670D\u52A1\u5668 cpu \u7684 core(\u6838\u5FC3)\u6570</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u603B\u6838\u6570 = \u7269\u7406CPU\u4E2A\u6570 X \u6BCF\u9897\u7269\u7406CPU\u7684\u6838\u6570 
# \u603B\u903B\u8F91CPU\u6570 = \u7269\u7406CPU\u4E2A\u6570 X \u6BCF\u9897\u7269\u7406CPU\u7684\u6838\u6570 X \u8D85\u7EBF\u7A0B\u6570
# \u67E5\u770B\u7269\u7406CPU\u4E2A\u6570
cat /proc/cpuinfo| grep &quot;physical id&quot;| sort| uniq| wc -l
# \u67E5\u770B\u6BCF\u4E2A\u7269\u7406CPU\u4E2Dcore\u7684\u4E2A\u6570(\u5373\u6838\u6570)
cat /proc/cpuinfo| grep &quot;cpu cores&quot;| uniq
# \u67E5\u770B\u903B\u8F91CPU\u7684\u4E2A\u6570
cat /proc/cpuinfo| grep &quot;processor&quot;| wc -l
\u67E5\u770BCPU\u4FE1\u606F\uFF08\u578B\u53F7\uFF09
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u5224\u65AD\u5F53\u524D\u673A\u5668\u662F\u865A\u62DF\u673A\u8FD8\u662F\u7269\u7406\u673A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dmidecode -s system-product-name
VMware Virtual Platform  <span class="token comment"># \u5305\u542Bvirtual\u5B57\u6837\uFF0C\u4E3A\u865A\u62DF\u673A</span>

dmidecode -s system-product-name
PowerEdge R730  <span class="token comment"># \u4E0D\u5305\u542Bvirtual\u5B57\u6837\uFF0C\u4E3A\u7269\u7406\u673A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Linux\u5220\u9664\u8F6F\u94FE\u63A5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>unlink
<span class="token function">rm</span> -rf ./test_chk_ln
<span class="token comment"># \u6CE8\u610F\u76EE\u5F55\u540E\u9762\u4E0D\u8981\u8DDF / \uFF0C\u4F1A\u628A\u76EE\u5F55\u4E0B\u9762\u7684\u6587\u4EF6\u5220\u6389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9);function r(c,l){return a}var i=n(e,[["render",r],["__file","common-kno.html.vue"]]);export{i as default};
