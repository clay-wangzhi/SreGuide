import{_ as a,r as l,c as r,a as n,b as t,F as p,d as s,e as i,o as c}from"./app.250f2715.js";const b={},u=n("strong",null,"du\u547D\u4EE4",-1),d=s("\u4E5F\u662F\u67E5\u770B\u4F7F\u7528\u7A7A\u95F4\u7684\uFF0C\u4F46\u662F\u4E0E"),m={href:"http://man.linuxde.net/df",target:"_blank",rel:"noopener noreferrer"},o=s("df"),g=s("\u547D\u4EE4\u4E0D\u540C\u7684\u662FLinux du\u547D\u4EE4\u662F\u5BF9\u6587\u4EF6\u548C\u76EE\u5F55\u78C1\u76D8\u4F7F\u7528\u7684\u7A7A\u95F4\u7684\u67E5\u770B\uFF0C\u8FD8\u662F\u548Cdf\u547D\u4EE4\u6709\u4E00\u4E9B\u533A\u522B\u7684\u3002"),x=i(`<h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>du [\u9009\u9879][\u6587\u4EF6]</code></p><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-a\u6216-all \u663E\u793A\u76EE\u5F55\u4E2D\u4E2A\u522B\u6587\u4EF6\u7684\u5927\u5C0F\u3002
-b\u6216-bytes \u663E\u793A\u76EE\u5F55\u6216\u6587\u4EF6\u5927\u5C0F\u65F6\uFF0C\u4EE5byte\u4E3A\u5355\u4F4D\u3002
-c\u6216--total \u9664\u4E86\u663E\u793A\u4E2A\u522B\u76EE\u5F55\u6216\u6587\u4EF6\u7684\u5927\u5C0F\u5916\uFF0C\u540C\u65F6\u4E5F\u663E\u793A\u6240\u6709\u76EE\u5F55\u6216\u6587\u4EF6\u7684\u603B\u548C\u3002
-k\u6216--kilobytes \u4EE5KB(1024bytes)\u4E3A\u5355\u4F4D\u8F93\u51FA\u3002
-m\u6216--megabytes \u4EE5MB\u4E3A\u5355\u4F4D\u8F93\u51FA\u3002
-s\u6216--summarize \u4EC5\u663E\u793A\u603B\u8BA1\uFF0C\u53EA\u5217\u51FA\u6700\u540E\u52A0\u603B\u7684\u503C\u3002
-h\u6216--human-readable \u4EE5K\uFF0CM\uFF0CG\u4E3A\u5355\u4F4D\uFF0C\u63D0\u9AD8\u4FE1\u606F\u7684\u53EF\u8BFB\u6027\u3002
-x\u6216--one-file-xystem \u4EE5\u4E00\u5F00\u59CB\u5904\u7406\u65F6\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E3A\u51C6\uFF0C\u82E5\u9047\u4E0A\u5176\u5B83\u4E0D\u540C\u7684\u6587\u4EF6\u7CFB\u7EDF\u76EE\u5F55\u5219\u7565\u8FC7\u3002
-L&lt;\u7B26\u53F7\u94FE\u63A5&gt;\u6216--dereference&lt;\u7B26\u53F7\u94FE\u63A5&gt; \u663E\u793A\u9009\u9879\u4E2D\u6240\u6307\u5B9A\u7B26\u53F7\u94FE\u63A5\u7684\u6E90\u6587\u4EF6\u5927\u5C0F\u3002
-S\u6216--separate-dirs \u663E\u793A\u4E2A\u522B\u76EE\u5F55\u7684\u5927\u5C0F\u65F6\uFF0C\u5E76\u4E0D\u542B\u5176\u5B50\u76EE\u5F55\u7684\u5927\u5C0F\u3002
-X&lt;\u6587\u4EF6&gt;\u6216--exclude-from=&lt;\u6587\u4EF6&gt; \u5728&lt;\u6587\u4EF6&gt;\u6307\u5B9A\u76EE\u5F55\u6216\u6587\u4EF6\u3002
--exclude=&lt;\u76EE\u5F55\u6216\u6587\u4EF6&gt; \u7565\u8FC7\u6307\u5B9A\u7684\u76EE\u5F55\u6216\u6587\u4EF6\u3002
-D\u6216--dereference-args \u663E\u793A\u6307\u5B9A\u7B26\u53F7\u94FE\u63A5\u7684\u6E90\u6587\u4EF6\u5927\u5C0F\u3002
-H\u6216--si \u4E0E-h\u53C2\u6570\u76F8\u540C\uFF0C\u4F46\u662FK\uFF0CM\uFF0CG\u662F\u4EE51000\u4E3A\u6362\u7B97\u5355\u4F4D\u3002
-l\u6216--count-links \u91CD\u590D\u8BA1\u7B97\u786C\u4EF6\u94FE\u63A5\u7684\u6587\u4EF6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h2><p>1\uFF09\u663E\u793A\u76EE\u5F55\u6216\u8005\u6587\u4EF6\u6240\u5360\u7A7A\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du
608     ./test6
308     ./test4
4       ./scf/lib
4       ./scf/service/deploy/product
4       ./scf/service/deploy/info
12      ./scf/service/deploy
16      ./scf/service
4       ./scf/doc
4       ./scf/bin
32      ./scf
8       ./test3
1288    .
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u53EA\u663E\u793A\u5F53\u524D\u76EE\u5F55\u4E0B\u9762\u7684\u5B50\u76EE\u5F55\u7684\u76EE\u5F55\u5927\u5C0F\u548C\u5F53\u524D\u76EE\u5F55\u7684\u603B\u7684\u5927\u5C0F\uFF0C\u6700\u4E0B\u9762\u76841288\u4E3A\u5F53\u524D\u76EE\u5F55\u7684\u603B\u5927\u5C0F</p><p>2\uFF09\u663E\u793A\u6307\u5B9A\u6587\u4EF6\u6240\u5360\u7A7A\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du log2012.log 
300     log2012.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>3\uFF09\u67E5\u770B\u6307\u5B9A\u76EE\u5F55\u7684\u6240\u5360\u7A7A\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du scf
4       scf/lib
4       scf/service/deploy/product
4       scf/service/deploy/info
12      scf/service/deploy
16      scf/service
4       scf/doc
4       scf/bin
32      scf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>4\uFF09\u663E\u793A\u591A\u4E2A\u6587\u4EF6\u6240\u5360\u7A7A\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du log30.tar.gz log31.tar.gz 
4       log30.tar.gz
4       log31.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>5\uFF09\u53EA\u663E\u793A\u603B\u548C\u7684\u5927\u5C0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du -s
1288    .
# du -s scf
32      scf
# cd ..
# du -s test
1288    test
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>6\uFF09\u65B9\u4FBF\u9605\u8BFB\u7684\u683C\u5F0F\u663E\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du -h test
608K    test/test6
308K    test/test4
4.0K    test/scf/lib
4.0K    test/scf/service/deploy/product
4.0K    test/scf/service/deploy/info
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>7\uFF09\u6587\u4EF6\u548C\u76EE\u5F55\u90FD\u663E\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du -ah test
4.0K    test/log31.tar.gz
4.0K    test/test13.tar.gz
0       test/linklog.log
0       test/test6/log2014.log
300K    test/test6/linklog.log
0       test/test6/log2015.log
4.0K    test/test6/log2013.log
300K    test/test6/log2012.log
0       test/test6/log2017.log
0       test/test6/log2016.log
608K    test/test6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>8\uFF09\u663E\u793A\u51E0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55\u5404\u81EA\u5360\u7528\u78C1\u76D8\u7A7A\u95F4\u7684\u5927\u5C0F\uFF0C\u8FD8\u7EDF\u8BA1\u5B83\u4EEC\u7684\u603B\u548C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du -c log30.tar.gz log31.tar.gz 
4       log30.tar.gz
4       log31.tar.gz
8       \u603B\u8BA1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u52A0\u4E0A-c\u9009\u9879\u540E\uFF0Cdu\u4E0D\u4EC5\u663E\u793A\u4E24\u4E2A\u76EE\u5F55\u5404\u81EA\u5360\u7528\u78C1\u76D8\u7A7A\u95F4\u7684\u5927\u5C0F\uFF0C\u8FD8\u5728\u6700\u540E\u4E00\u884C\u7EDF\u8BA1\u5B83\u4EEC\u7684\u603B\u548C\u3002</p><p>9\uFF09\u6309\u7167\u7A7A\u95F4\u5927\u5C0F\u6392\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du|sort -nr|more
1288    .
608     ./test6
308     ./test4
32      ./scf
16      ./scf/service
12      ./scf/service/deploy
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>10\uFF09\u8F93\u51FA\u5F53\u524D\u76EE\u5F55\u4E0B\u5404\u4E2A\u5B50\u76EE\u5F55\u6240\u4F7F\u7528\u7684\u7A7A\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># du -h  --max-depth=1
608K    ./test6
308K    ./test4
32K     ./scf
8.0K    ./test3
1.3M    .
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>http://www.cnblogs.com/peida/archive/2012/12/10/2810755.html</p><p>http://man.linuxde.net/du</p>`,32);function v(h,f){const e=l("ExternalLinkIcon");return c(),r(p,null,[n("p",null,[u,d,n("a",m,[o,t(e)]),g]),x],64)}var K=a(b,[["render",v],["__file","\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0833\uFF09-du.html.vue"]]);export{K as default};
