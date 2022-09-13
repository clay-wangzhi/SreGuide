import{_ as n,e as s}from"./app.4908d213.js";const a={},e=s(`<p>chown\u5C06\u6307\u5B9A\u6587\u4EF6\u7684\u62E5\u6709\u8005\u6539\u4E3A\u6307\u5B9A\u7684\u7528\u6237\u6216\u7EC4\uFF0C\u7528\u6237\u53EF\u4EE5\u662F\u7528\u6237\u540D\u6216\u8005\u7528\u6237ID\uFF1B\u7EC4\u53EF\u4EE5\u662F\u7EC4\u540D\u6216\u8005\u7EC4ID\uFF1B\u6587\u4EF6\u662F\u4EE5\u7A7A\u683C\u5206\u5F00\u7684\u8981\u6539\u53D8\u6743\u9650\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u652F\u6301\u901A\u914D\u7B26\u3002\u7CFB\u7EDF\u7BA1\u7406\u5458\u7ECF\u5E38\u4F7F\u7528chown\u547D\u4EE4\uFF0C\u5728\u5C06\u6587\u4EF6\u62F7\u8D1D\u5230\u53E6\u4E00\u4E2A\u7528\u6237\u7684\u540D\u5F55\u4E0B\u4E4B\u540E\uFF0C\u8BA9\u7528\u6237\u62E5\u6709\u4F7F\u7528\u8BE5\u6587\u4EF6\u7684\u6743\u9650\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>chown(\u9009\u9879)(\u53C2\u6570)</code></p><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-c\u6216\u2014\u2014changes\uFF1A\u6548\u679C\u7C7B\u4F3C\u201C-v\u201D\u53C2\u6570\uFF0C\u4F46\u4EC5\u56DE\u62A5\u66F4\u6539\u7684\u90E8\u5206\uFF1B
-f\u6216--quite\u6216\u2014\u2014silent\uFF1A\u4E0D\u663E\u793A\u9519\u8BEF\u4FE1\u606F\uFF1B
-h\u6216--no-dereference\uFF1A\u53EA\u5BF9\u7B26\u53F7\u8FDE\u63A5\u7684\u6587\u4EF6\u4F5C\u4FEE\u6539\uFF0C\u800C\u4E0D\u66F4\u6539\u5176\u4ED6\u4EFB\u4F55\u76F8\u5173\u6587\u4EF6\uFF1B
-R\u6216\u2014\u2014recursive\uFF1A\u9012\u5F52\u5904\u7406\uFF0C\u5C06\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u53CA\u5B50\u76EE\u5F55\u4E00\u5E76\u5904\u7406\uFF1B
-v\u6216\u2014\u2014version\uFF1A\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF1B
--dereference\uFF1A\u6548\u679C\u548C\u201C-h\u201D\u53C2\u6570\u76F8\u540C\uFF1B
--help\uFF1A\u5728\u7EBF\u5E2E\u52A9\uFF1B
--reference=&lt;\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55&gt;\uFF1A\u628A\u6307\u5B9A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u62E5\u6709\u8005\u4E0E\u6240\u5C5E\u7FA4\u7EC4\u5168\u90E8\u8BBE\u6210\u548C\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u62E5\u6709\u8005\u4E0E\u6240\u5C5E\u7FA4\u7EC4\u76F8\u540C\uFF1B
--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>\u7528\u6237\uFF1A\u7EC4\uFF1A\u6307\u5B9A\u6240\u6709\u8005\u548C\u6240\u5C5E\u5DE5\u4F5C\u7EC4\u3002\u5F53\u7701\u7565\u201C\uFF1A\u7EC4\u201D\uFF0C\u4EC5\u6539\u53D8\u6587\u4EF6\u6240\u6709\u8005\uFF1B \u6587\u4EF6\uFF1A\u6307\u5B9A\u8981\u6539\u53D8\u6240\u6709\u8005\u548C\u5DE5\u4F5C\u7EC4\u7684\u6587\u4EF6\u5217\u8868\u3002\u652F\u6301\u591A\u4E2A\u6587\u4EF6\u548C\u76EE\u6807\uFF0C\u652F\u6301shell\u901A\u914D\u7B26\u3002</p><h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><p>\u901A\u8FC7chown\u6539\u53D8\u6587\u4EF6\u7684\u62E5\u6709\u8005\u548C\u7FA4\u7EC4\u3002\u5728\u66F4\u6539\u6587\u4EF6\u7684\u6240\u6709\u8005\u6216\u6240\u5C5E\u7FA4\u7EC4\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7528\u6237\u540D\u79F0\u548C\u7528\u6237\u8BC6\u522B\u7801\u8BBE\u7F6E\u3002\u666E\u901A\u7528\u6237\u4E0D\u80FD\u5C06\u81EA\u5DF1\u7684\u6587\u4EF6\u6539\u53D8\u6210\u5176\u4ED6\u7684\u62E5\u6709\u8005\u3002\u5176\u64CD\u4F5C\u6743\u9650\u4E00\u822C\u4E3A\u7BA1\u7406\u5458\u3002</p><h2 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h2><p>1\uFF09<strong>\u6539\u53D8\u62E5\u6709\u8005\u548C\u7FA4\u7EC4</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 root users 302108 11-30 08:39 log2012.log
# chown mail:mail log2012.log 
# ll
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 mail mail  302108 11-30 08:39 log2012.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>2\uFF09<strong>\u6539\u53D8\u6587\u4EF6\u62E5\u6709\u8005</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ll
\u603B\u8BA1 604
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 mail mail  302108 11-30 08:39 log2012.log
# chown root: log2012.log 
# ll
\u603B\u8BA1 604
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 root mail  302108 11-30 08:39 log2012.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>3\uFF09<strong>\u6539\u53D8\u6587\u4EF6\u7FA4\u7EC4</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
\u603B\u8BA1 604
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 root root  302108 11-30 08:39 log2012.log
# chown :mail log2012.log 
# ll
\u603B\u8BA1 604
---xr--r-- 1 root users 302108 11-30 08:39 linklog.log
---xr--r-- 1 root mail  302108 11-30 08:39 log2012.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>4\uFF09**\u6539\u53D8\u6307\u5B9A\u76EE\u5F55\u4EE5\u53CA\u5176\u5B50\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u7684\u62E5\u6709\u8005\u548C\u7FA4\u7EC4 **</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ll
drwxr-xr-x 2 root users   4096 11-30 08:39 test6
# chown -R -v root:mail test6
\u201Ctest6/log2014.log\u201D \u7684\u6240\u6709\u8005\u5DF2\u66F4\u6539\u4E3A root:mail
\u201Ctest6/linklog.log\u201D \u7684\u6240\u6709\u8005\u5DF2\u66F4\u6539\u4E3A root:mail
\u201Ctest6/log2015.log\u201D \u7684\u6240\u6709\u8005\u5DF2\u66F4\u6539\u4E3A root:mail
\u201Ctest6/log2013.log\u201D \u7684\u6240\u6709\u8005\u5DF2\u66F4\u6539\u4E3A root:mail
\u201Ctest6/log2012.log\u201D \u7684\u6240\u6709\u8005\u5DF2\u4FDD\u7559\u4E3A root:mail
\u201Ctest6/log2017.log\u201D \u7684\u6240\u6709\u8005\u5DF2\u66F4\u6539\u4E3A root:mail
\u201Ctest6/log2016.log\u201D \u7684\u6240\u6709\u8005\u5DF2\u66F4\u6539\u4E3A root:mail
\u201Ctest6\u201D \u7684\u6240\u6709\u8005\u5DF2\u66F4\u6539\u4E3A root:mail
# ll
drwxr-xr-x 2 root mail   4096 11-30 08:39 test6
# cd test6
# ll
\u603B\u8BA1 604
---xr--r-- 1 root mail 302108 11-30 08:39 linklog.log
---xr--r-- 1 root mail 302108 11-30 08:39 log2012.log
-rw-r--r-- 1 root mail     61 11-30 08:39 log2013.log
-rw-r--r-- 1 root mail      0 11-30 08:39 log2014.log
-rw-r--r-- 1 root mail      0 11-30 08:39 log2015.log
-rw-r--r-- 1 root mail      0 11-30 08:39 log2016.log
-rw-r--r-- 1 root mail      0 11-30 08:39 log2017.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>http://www.cnblogs.com/peida/archive/2012/12/04/2800684.html</p><p>http://man.linuxde.net/chown</p>`,21);function r(l,o){return e}var p=n(a,[["render",r],["__file","\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0829\uFF09-chown.html.vue"]]);export{p as default};
