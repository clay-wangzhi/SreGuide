import{_ as n,e as s}from"./app.4908d213.js";const e={},a=s(`<h1 id="\u5185\u6838\u53C2\u6570\u8C03\u4F18" tabindex="-1"><a class="header-anchor" href="#\u5185\u6838\u53C2\u6570\u8C03\u4F18" aria-hidden="true">#</a> \u5185\u6838\u53C2\u6570\u8C03\u4F18</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>TCP \u4E09\u6B21\u63E1\u624B\u4E2D\u9700\u8981\u8C03\u4F18\u7684\u5185\u6838\u53C2\u6570
	SYN \u534A\u8FDE\u63A5\u961F\u5217 							net.ipv4.tcp_max_syn_backlog
	\u534A\u8FDE\u63A5\u961F\u5217\u6EE1\u65F6 \u5F00\u542Fsyncookies 			net.ipv4.tcp_syncookies = 1

	\u5168\u8FDE\u63A5\u961F\u5217 \u5927\u5C0F\u53D6\u7684 min(somaxconn, backlog)\u6700\u5C0F\u503C\uFF0C\u6240\u4EE5\u8C03\u6574\u4E24\u4E2A\u53C2\u6570
	net.core.somaxconn net.core.somaxconn=65535
	nginx\u914D\u7F6E\u6587\u4EF6\u8C03\u6574 listen 80 backlog=8192

	tcp_synack_retries \u503C\u8C03\u5C0F
	\u5F00\u59CB TCP Fast Open,\u51CF\u5C11TCP\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u5EF6
	echo 3 &gt; /proc/sys/net/ipv4/tcp_fastopen

TCP \u56DB\u6B21\u6325\u624B\u4E2D\u9700\u8981\u8C03\u4F18\u7684\u5185\u6838\u53C2\u6570
	TIME_WAIT \u72B6\u6001\u7684\u8FDE\u63A5\u6570\u91CF\uFF0C\u4F1A\u5360\u7528\u4E00\u5B9A\u8D44\u6E90 net.ipv4.tcp_max_tw_buckets = 6000
	\u5F00\u542F\u7AEF\u53E3\u590D\u7528\uFF0C\u88AB TIME_WAIT \u72B6\u6001\u5360\u7528\u7684\u7AEF\u53E3\uFF0C\u8FD8\u80FD\u7528\u5230\u65B0\u5EFA\u7684\u8FDE\u63A5\u4E2D net.ipv4.tcp_tw_reuse=1
	\u51CF\u5C0FFIN_WAIT2 \u72B6\u6001\u7684\u53C2\u6570 net.ipv4.tcp_fin_timeout=15
	\u589E\u5927\u672C\u5730\u7AEF\u53E3\u7684\u8303\u56F4\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u652F\u6301\u66F4\u591A\u8FDE\u63A5\uFF0C\u63D0\u9AD8\u6574\u4F53\u7684\u5E76\u53D1\u80FD\u529B\u3002 net.ipv4.ip_local_port_range=&quot;1024 65535&quot;
	
\u6570\u636E\u4F20\u8F93\u4F18\u5316
	\u542F\u7528\u7A97\u53E3\u6269\u5927\u56E0\u5B50\u529F\u80FD\uFF0Cnet.ipv4.tcp_window_scaling = 1
	\u8C03\u6574\u53D1\u9001\u7F13\u51B2\u533A net.ipv4.tcp_rmem = 4096 87380 4194304
	\u8C03\u6574\u63A5\u6536\u7F13\u51B2\u533A net.ipv4.tcp_wmem = 4096 65536 4194304
	\u8C03\u6574\u5185\u5B58\u8303\u56F4 net.ipv4.tcp_mem = 524288 699050 1048576

	
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,2);function t(r,p){return a}var c=n(e,[["render",t],["__file","kernel-para-opt.html.vue"]]);export{c as default};
