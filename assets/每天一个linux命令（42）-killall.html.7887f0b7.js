import{_ as n,e as s}from"./app.958f2970.js";const a={},e=s(`<p>Linux\u7CFB\u7EDF\u4E2D\u7684killall\u547D\u4EE4\u7528\u4E8E\u6740\u6B7B\u6307\u5B9A\u540D\u5B57\u7684\u8FDB\u7A0B\uFF08kill processes by name\uFF09\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528kill\u547D\u4EE4\u6740\u6B7B\u6307\u5B9A\u8FDB\u7A0BPID\u7684\u8FDB\u7A0B\uFF0C\u5982\u679C\u8981\u627E\u5230\u6211\u4EEC\u9700\u8981\u6740\u6B7B\u7684\u8FDB\u7A0B\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5728\u4E4B\u524D\u4F7F\u7528ps\u7B49\u547D\u4EE4\u518D\u914D\u5408grep\u6765\u67E5\u627E\u8FDB\u7A0B\uFF0C\u800Ckillall\u628A\u8FD9\u4E24\u4E2A\u8FC7\u7A0B\u5408\u4E8C\u4E3A\u4E00\uFF0C\u662F\u4E00\u4E2A\u5F88\u597D\u7528\u7684\u547D\u4EE4\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>killall(\u9009\u9879)(\u53C2\u6570)</code></p><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-Z \u53EA\u6740\u6B7B\u62E5\u6709scontext \u7684\u8FDB\u7A0B
-e \u8981\u6C42\u5339\u914D\u8FDB\u7A0B\u540D\u79F0
-I \u5FFD\u7565\u5C0F\u5199
-g \u6740\u6B7B\u8FDB\u7A0B\u7EC4\u800C\u4E0D\u662F\u8FDB\u7A0B
-i \u4EA4\u4E92\u6A21\u5F0F\uFF0C\u6740\u6B7B\u8FDB\u7A0B\u524D\u5148\u8BE2\u95EE\u7528\u6237
-l \u5217\u51FA\u6240\u6709\u7684\u5DF2\u77E5\u4FE1\u53F7\u540D\u79F0
-q \u4E0D\u8F93\u51FA\u8B66\u544A\u4FE1\u606F
-s \u53D1\u9001\u6307\u5B9A\u7684\u4FE1\u53F7
-v \u62A5\u544A\u4FE1\u53F7\u662F\u5426\u6210\u529F\u53D1\u9001
-w \u7B49\u5F85\u8FDB\u7A0B\u6B7B\u4EA1
--help \u663E\u793A\u5E2E\u52A9\u4FE1\u606F
--version \u663E\u793A\u7248\u672C\u663E\u793A
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>\u8FDB\u7A0B\u540D\u79F0\uFF1A\u6307\u5B9A\u8981\u6740\u6B7B\u7684\u8FDB\u7A0B\u540D\u79F0</p><h2 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h2><p>1\uFF09\u6740\u6B7B\u6240\u6709\u540C\u540D\u8FDB\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ps -ef|grep vi
root     17581 17398  0 17:51 pts/0    00:00:00 vi test.txt
root     17640 17612  0 17:51 pts/2    00:00:00 vi test.log
root     17642 17582  0 17:51 pts/1    00:00:00 grep vi
# killall vi
# ps -ef|grep vi
root     17645 17582  0 17:52 pts/1    00:00:00 grep vi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>2\uFF09\u5411\u8FDB\u7A0B\u53D1\u9001\u6307\u5B9A\u4FE1\u53F7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vi &amp; 
[1] 17646[root@localhost ~]# killall -TERM vi
[1]+  Stopped                 vi
# vi &amp; 
[2] 17648
# ps -ef|grep vi
root     17646 17582  0 17:54 pts/1    00:00:00 vi
root     17648 17582  0 17:54 pts/1    00:00:00 vi
root     17650 17582  0 17:55 pts/1    00:00:00 grep vi
[2]+  Stopped                 vi
# killall -TERM vi
# ps -ef|grep vi
root     17646 17582  0 17:54 pts/1    00:00:00 vi
root     17648 17582  0 17:54 pts/1    00:00:00 vi
root     17653 17582  0 17:55 pts/1    00:00:00 grep vi
# killall -KILL vi
[1]-  \u5DF2\u6740\u6B7B               vi
[2]+  \u5DF2\u6740\u6B7B               vi
# ps -ef|grep vi
root     17656 17582  0 17:56 pts/1    00:00:00 grep vi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>3\uFF09\u628A\u6240\u6709\u7684\u767B\u5F55\u540E\u7684shell\u7ED9\u6740\u6389</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># w
 18:01:03 up 41 days, 18:53,  3 users,  load average: 0.00, 0.00, 0.00USER     TTY      FROM              LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    10.2.0.68        14:58    9:52   0.10s  0.10s -bash
root     pts/1    10.2.0.68        17:51    0.00s  0.02s  0.00s w
root     pts/2    10.2.0.68        17:51    9:24   0.01s  0.01s -bash
# killall -9 bash
# w
 18:01:48 up 41 days, 18:54,  1 user,  load average: 0.07, 0.02, 0.00USER     TTY      FROM              LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    10.2.0.68        18:01    0.00s  0.01s  0.00s w
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u8FD0\u884C\u547D\u4EE4\uFF1Akillall -9 bash \u540E\uFF0C\u6240\u6709bash\u90FD\u4F1A\u88AB\u5361\u6389\u4E86\uFF0C\u6240\u4EE5\u5F53\u524D\u6240\u6709\u8FDE\u63A5\u4E22\u5931\u4E86\u3002\u9700\u8981\u91CD\u65B0\u8FDE\u63A5\u5E76\u767B\u5F55\u3002</p><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>http://www.cnblogs.com/peida/archive/2012/12/21/2827366.html</p><p>http://man.linuxde.net/killall</p>`,19);function l(r,p){return e}var b=n(a,[["render",l],["__file","\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0842\uFF09-killall.html.vue"]]);export{b as default};
