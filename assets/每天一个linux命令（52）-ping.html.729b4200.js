import{_ as s,d as n}from"./app.e298a435.js";const e={},a=n(`<p>Linux\u7CFB\u7EDF\u7684ping\u547D\u4EE4\u662F\u5E38\u7528\u7684\u7F51\u7EDC\u547D\u4EE4\uFF0C\u5B83\u901A\u5E38\u7528\u6765\u6D4B\u8BD5\u4E0E\u76EE\u6807\u4E3B\u673A\u7684\u8FDE\u901A\u6027\uFF0C\u6211\u4EEC\u7ECF\u5E38\u4F1A\u8BF4\u201Cping\u4E00\u4E0B\u67D0\u673A\u5668\uFF0C\u770B\u662F\u4E0D\u662F\u5F00\u7740\u201D\u3001\u4E0D\u80FD\u6253\u5F00\u7F51\u9875\u65F6\u4F1A\u8BF4\u201C\u4F60\u5148ping\u7F51\u5173\u5730\u5740192.168.1.1\u8BD5\u8BD5\u201D\u3002\u5B83\u901A\u8FC7\u53D1\u9001ICMP ECHO_REQUEST\u6570\u636E\u5305\u5230\u7F51\u7EDC\u4E3B\u673A\uFF08send ICMP ECHO_REQUEST to network hosts\uFF09\uFF0C\u5E76\u663E\u793A\u54CD\u5E94\u60C5\u51B5\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u6839\u636E\u5B83\u8F93\u51FA\u7684\u4FE1\u606F\u6765\u786E\u5B9A\u76EE\u6807\u4E3B\u673A\u662F\u5426\u53EF\u8BBF\u95EE\uFF08\u4F46\u8FD9\u4E0D\u662F\u7EDD\u5BF9\u7684\uFF09\u3002\u6709\u4E9B\u670D\u52A1\u5668\u4E3A\u4E86\u9632\u6B62\u901A\u8FC7ping\u63A2\u6D4B\u5230\uFF0C\u901A\u8FC7\u9632\u706B\u5899\u8BBE\u7F6E\u4E86\u7981\u6B62ping\u6216\u8005\u5728\u5185\u6838\u53C2\u6570\u4E2D\u7981\u6B62ping\uFF0C\u8FD9\u6837\u5C31\u4E0D\u80FD\u901A\u8FC7ping\u786E\u5B9A\u8BE5\u4E3B\u673A\u662F\u5426\u8FD8\u5904\u4E8E\u5F00\u542F\u72B6\u6001\u3002</p><p>linux\u4E0B\u7684ping\u548Cwindows\u4E0B\u7684ping\u7A0D\u6709\u533A\u522B,linux\u4E0Bping\u4E0D\u4F1A\u81EA\u52A8\u7EC8\u6B62,\u9700\u8981\u6309ctrl+c\u7EC8\u6B62\u6216\u8005\u7528\u53C2\u6570-c\u6307\u5B9A\u8981\u6C42\u5B8C\u6210\u7684\u56DE\u5E94\u6B21\u6570\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>ping(\u9009\u9879)(\u53C2\u6570)</code></p><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-d\uFF1A\u4F7F\u7528Socket\u7684SO_DEBUG\u529F\u80FD\uFF1B
-c&lt;\u5B8C\u6210\u6B21\u6570&gt;\uFF1A\u8BBE\u7F6E\u5B8C\u6210\u8981\u6C42\u56DE\u5E94\u7684\u6B21\u6570\uFF1B
-f\uFF1A\u6781\u9650\u68C0\u6D4B\uFF1B
-i&lt;\u95F4\u9694\u79D2\u6570&gt;\uFF1A\u6307\u5B9A\u6536\u53D1\u4FE1\u606F\u7684\u95F4\u9694\u65F6\u95F4\uFF1B
-I&lt;\u7F51\u7EDC\u754C\u9762&gt;\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684\u7F51\u7EDC\u754C\u9762\u9001\u51FA\u6570\u636E\u5305\uFF1B
-l&lt;\u524D\u7F6E\u8F7D\u5165&gt;\uFF1A\u8BBE\u7F6E\u5728\u9001\u51FA\u8981\u6C42\u4FE1\u606F\u4E4B\u524D\uFF0C\u5148\u884C\u53D1\u51FA\u7684\u6570\u636E\u5305\uFF1B
-n\uFF1A\u53EA\u8F93\u51FA\u6570\u503C\uFF1B
-p&lt;\u8303\u672C\u6837\u5F0F&gt;\uFF1A\u8BBE\u7F6E\u586B\u6EE1\u6570\u636E\u5305\u7684\u8303\u672C\u6837\u5F0F\uFF1B
-q\uFF1A\u4E0D\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF0C\u5F00\u5934\u548C\u7ED3\u5C3E\u7684\u76F8\u5173\u4FE1\u606F\u9664\u5916\uFF1B
-r\uFF1A\u5FFD\u7565\u666E\u901A\u7684Routing Table\uFF0C\u76F4\u63A5\u5C06\u6570\u636E\u5305\u9001\u5230\u8FDC\u7AEF\u4E3B\u673A\u4E0A\uFF1B
-R\uFF1A\u8BB0\u5F55\u8DEF\u7531\u8FC7\u7A0B\uFF1B
-s&lt;\u6570\u636E\u5305\u5927\u5C0F&gt;\uFF1A\u8BBE\u7F6E\u6570\u636E\u5305\u7684\u5927\u5C0F\uFF1B
-t&lt;\u5B58\u6D3B\u6570\u503C&gt;\uFF1A\u8BBE\u7F6E\u5B58\u6D3B\u6570\u503CTTL\u7684\u5927\u5C0F\uFF1B
-v\uFF1A\u8BE6\u7EC6\u663E\u793A\u6307\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>\u76EE\u7684\u4E3B\u673A\uFF1A\u6307\u5B9A\u53D1\u9001ICMP\u62A5\u6587\u7684\u76EE\u7684\u4E3B\u673A\u3002</p><h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><p>ping\u547D\u4EE4\u7528\u4E8E\uFF1A\u786E\u5B9A\u7F51\u7EDC\u548C\u5404\u5916\u90E8\u4E3B\u673A\u7684\u72B6\u6001\uFF1B\u8DDF\u8E2A\u548C\u9694\u79BB\u786C\u4EF6\u548C\u8F6F\u4EF6\u95EE\u9898\uFF1B\u6D4B\u8BD5\u3001\u8BC4\u4F30\u548C\u7BA1\u7406\u7F51\u7EDC\u3002\u5982\u679C\u4E3B\u673A\u6B63\u5728\u8FD0\u884C\u5E76\u8FDE\u5728\u7F51\u4E0A\uFF0C\u5B83\u5C31\u5BF9\u56DE\u9001\u4FE1\u53F7\u8FDB\u884C\u54CD\u5E94\u3002\u6BCF\u4E2A\u56DE\u9001\u4FE1\u53F7\u8BF7\u6C42\u5305\u542B\u4E00\u4E2A\u7F51\u9645\u534F\u8BAE\uFF08IP\uFF09\u548C ICMP \u5934\uFF0C\u540E\u9762\u7D27\u8DDF\u4E00\u4E2A tim \u7ED3\u6784\uFF0C\u4EE5\u53CA\u6765\u586B\u5199\u8FD9\u4E2A\u4FE1\u606F\u5305\u7684\u8DB3\u591F\u7684\u5B57\u8282\u3002\u7F3A\u7701\u60C5\u51B5\u662F\u8FDE\u7EED\u53D1\u9001\u56DE\u9001\u4FE1\u53F7\u8BF7\u6C42\u76F4\u5230\u63A5\u6536\u5230\u4E2D\u65AD\u4FE1\u53F7\uFF08Ctrl-C\uFF09\u3002</p><p>ping \u547D\u4EE4\u6BCF\u79D2\u53D1\u9001\u4E00\u4E2A\u6570\u636E\u62A5\u5E76\u4E14\u4E3A\u6BCF\u4E2A\u63A5\u6536\u5230\u7684\u54CD\u5E94\u6253\u5370\u4E00\u884C\u8F93\u51FA\u3002ping \u547D\u4EE4\u8BA1\u7B97\u4FE1\u53F7\u5F80\u8FD4\u65F6\u95F4\u548C(\u4FE1\u606F)\u5305\u4E22\u5931\u60C5\u51B5\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u5E76\u4E14\u5728\u5B8C\u6210\u4E4B\u540E\u663E\u793A\u4E00\u4E2A\u7B80\u8981\u603B\u7ED3\u3002ping \u547D\u4EE4\u5728\u7A0B\u5E8F\u8D85\u65F6\u6216\u5F53\u63A5\u6536\u5230 SIGINT \u4FE1\u53F7\u65F6\u7ED3\u675F\u3002Host \u53C2\u6570\u6216\u8005\u662F\u4E00\u4E2A\u6709\u6548\u7684\u4E3B\u673A\u540D\u6216\u8005\u662F\u56E0\u7279\u7F51\u5730\u5740\u3002</p><h2 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h2><p>1\uFF09ping\u7684\u901A\u7684\u60C5\u51B5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ping 192.168.120.205
PING 192.168.120.205 (192.168.120.205) 56(84) bytes of data.
64 bytes from 192.168.120.205: icmp_seq=1 ttl=64 time=0.720 ms
64 bytes from 192.168.120.205: icmp_seq=2 ttl=64 time=0.181 ms
--- 192.168.120.205 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4000ms
rtt min/avg/max/mdev = 0.181/0.293/0.720/0.214 ms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>2\uFF09ping\u4E0D\u540C\u7684\u60C5\u51B5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ping 192.168.120.202
PING 192.168.120.202 (192.168.120.202) 56(84) bytes of data.
From 192.168.120.204 icmp_seq=1 Destination Host Unreachable
From 192.168.120.204 icmp_seq=2 Destination Host Unreachable
-- 192.168.120.202 ping statistics ---
8 packets transmitted, 0 received, +6 errors, 100% packet loss, time 7005ms
, pipe 4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>3\uFF09ping\u6307\u5B9A\u6B21\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ping -c 10 192.168.120.206
PING 192.168.120.206 (192.168.120.206) 56(84) bytes of data.
64 bytes from 192.168.120.206: icmp_seq=1 ttl=64 time=1.25 ms
64 bytes from 192.168.120.206: icmp_seq=2 ttl=64 time=0.260 ms
64 bytes from 192.168.120.206: icmp_seq=3 ttl=64 time=0.242 ms
64 bytes from 192.168.120.206: icmp_seq=4 ttl=64 time=0.271 ms
64 bytes from 192.168.120.206: icmp_seq=5 ttl=64 time=0.274 ms
64 bytes from 192.168.120.206: icmp_seq=6 ttl=64 time=0.295 ms
64 bytes from 192.168.120.206: icmp_seq=7 ttl=64 time=0.269 ms
64 bytes from 192.168.120.206: icmp_seq=8 ttl=64 time=0.270 ms
64 bytes from 192.168.120.206: icmp_seq=9 ttl=64 time=0.253 ms
64 bytes from 192.168.120.206: icmp_seq=10 ttl=64 time=0.289 ms

--- 192.168.120.206 ping statistics ---
10 packets transmitted, 10 received, 0% packet loss, time 9000ms
rtt min/avg/max/mdev = 0.242/0.367/1.251/0.295 ms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>4\uFF09\u65F6\u95F4\u95F4\u9694\u548C\u6B21\u6570\u9650\u5236\u7684ping</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ping -c 10 -i 0.5 192.168.120.206
PING 192.168.120.206 (192.168.120.206) 56(84) bytes of data.
64 bytes from 192.168.120.206: icmp_seq=1 ttl=64 time=1.24 ms
64 bytes from 192.168.120.206: icmp_seq=2 ttl=64 time=0.235 ms
64 bytes from 192.168.120.206: icmp_seq=3 ttl=64 time=0.244 ms
64 bytes from 192.168.120.206: icmp_seq=4 ttl=64 time=0.300 ms
64 bytes from 192.168.120.206: icmp_seq=5 ttl=64 time=0.255 ms
64 bytes from 192.168.120.206: icmp_seq=6 ttl=64 time=0.264 ms
64 bytes from 192.168.120.206: icmp_seq=7 ttl=64 time=0.263 ms
64 bytes from 192.168.120.206: icmp_seq=8 ttl=64 time=0.331 ms
64 bytes from 192.168.120.206: icmp_seq=9 ttl=64 time=0.247 ms
64 bytes from 192.168.120.206: icmp_seq=10 ttl=64 time=0.244 ms

--- 192.168.120.206 ping statistics ---
10 packets transmitted, 10 received, 0% packet loss, time 4499ms
rtt min/avg/max/mdev = 0.235/0.362/1.241/0.294 ms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>5\uFF09\u591A\u53C2\u6570\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ping -i 3 -s 1024 -t 255 192.168.120.206
PING 192.168.120.206 (192.168.120.206) 1024(1052) bytes of data.
1032 bytes from 192.168.120.206: icmp_seq=1 ttl=64 time=1.99 ms
1032 bytes from 192.168.120.206: icmp_seq=2 ttl=64 time=0.694 ms
1032 bytes from 192.168.120.206: icmp_seq=3 ttl=64 time=0.300 ms
1032 bytes from 192.168.120.206: icmp_seq=4 ttl=64 time=0.481 ms
1032 bytes from 192.168.120.206: icmp_seq=5 ttl=64 time=0.415 ms
1032 bytes from 192.168.120.206: icmp_seq=6 ttl=64 time=0.600 ms
1032 bytes from 192.168.120.206: icmp_seq=7 ttl=64 time=0.411 ms
1032 bytes from 192.168.120.206: icmp_seq=8 ttl=64 time=0.281 ms
1032 bytes from 192.168.120.206: icmp_seq=9 ttl=64 time=0.318 ms
1032 bytes from 192.168.120.206: icmp_seq=10 ttl=64 time=0.362 ms
1032 bytes from 192.168.120.206: icmp_seq=11 ttl=64 time=0.408 ms
1032 bytes from 192.168.120.206: icmp_seq=12 ttl=64 time=0.445 ms
1032 bytes from 192.168.120.206: icmp_seq=13 ttl=64 time=0.397 ms
1032 bytes from 192.168.120.206: icmp_seq=14 ttl=64 time=0.406 ms
1032 bytes from 192.168.120.206: icmp_seq=15 ttl=64 time=0.458 ms

--- 192.168.120.206 ping statistics ---
15 packets transmitted, 15 received, 0% packet loss, time 41999ms
rtt min/avg/max/mdev = 0.281/0.531/1.993/0.404 ms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>-i 3 \u53D1\u9001\u5468\u671F\u4E3A 3\u79D2 -s \u8BBE\u7F6E\u53D1\u9001\u5305\u7684\u5927\u5C0F\u4E3A1024 -t \u8BBE\u7F6ETTL\u503C\u4E3A 255</p><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>http://man.linuxde.net/ping</p><p>http://www.cnblogs.com/peida/archive/2013/03/06/2945407.html</p>`,27);function t(i,r){return a}var m=s(e,[["render",t],["__file","\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0852\uFF09-ping.html.vue"]]);export{m as default};
