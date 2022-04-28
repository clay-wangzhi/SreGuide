import{_ as a,r,c as l,a as n,e as p,F as c,b as s,d as b,o as i}from"./app.e298a435.js";const t={},o=n("h1",{id:"coredns-nodelocaldns-cache\u89E3\u51B3coredns\u57DF\u540D\u89E3\u6790\u5EF6\u8FDF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#coredns-nodelocaldns-cache\u89E3\u51B3coredns\u57DF\u540D\u89E3\u6790\u5EF6\u8FDF","aria-hidden":"true"},"#"),s(" Coredns+Nodelocaldns cache\u89E3\u51B3Coredns\u57DF\u540D\u89E3\u6790\u5EF6\u8FDF")],-1),u=s("\u8F6C\u8F7D\u81EA\uFF1A"),m={href:"https://blog.51cto.com/u_14143894/2515451",target:"_blank",rel:"noopener noreferrer"},d=s("Coredns+Nodelocaldns cache\u89E3\u51B3Coredns\u57DF\u540D\u89E3\u6790\u5EF6\u8FDF"),g=b(`<p>\u76EE\u524D18.6\u7248\u672C\u548C\u4E4B\u524D\u7684coredns\u90FD\u4F1A\u51FA\u73B0\u8D85\u65F65s\u7684\u60C5\u51B5\uFF0C\u90A3\u4E48\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0coredns\u8D85\u65F6\u7684\u60C5\u51B5\u53D1\u751F\uFF1F</p><h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><p>\u5728Kubernetes\u4E2D\uFF0CPod\u8BBF\u95EEDNS\u670D\u52A1\u5668\uFF08kube-dns\uFF09\u7684\u6700\u5E38\u89C1\u65B9\u6CD5\u662F\u901A\u8FC7\u670D\u52A1\u62BD\u8C61\u3002 \u56E0\u6B64\uFF0C\u5728\u5C1D\u8BD5\u89E3\u91CA\u95EE\u9898\u4E4B\u524D\uFF0C\u4E86\u89E3\u670D\u52A1\u7684\u5DE5\u4F5C\u539F\u7406\u4EE5\u53CA\u56E0\u6B64\u5728Linux\u5185\u6838\u4E2D\u5982\u4F55\u5B9E\u73B0\u76EE\u6807\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\uFF08DNAT\uFF09\u81F3\u5173\u91CD\u8981\u3002</p><h2 id="\u670D\u52A1\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> \u670D\u52A1\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF1F</h2><p>\u5728iptables\u6A21\u5F0F\u4E0B\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF09\uFF0C\u6BCF\u4E2A\u670D\u52A1\u7684kube-proxy\u5728\u4E3B\u673A\u7F51\u7EDC\u540D\u79F0\u7A7A\u95F4\u7684nat\u8868\u4E2D\u521B\u5EFA\u4E00\u4E9Biptables\u89C4\u5219\u3002 \u8BA9\u6211\u4EEC\u8003\u8651\u5728\u96C6\u7FA4\u4E2D\u5177\u6709\u4E24\u4E2ADNS\u670D\u52A1\u5668\u5B9E\u4F8B\u7684kube-dns\u670D\u52A1\u3002 \u76F8\u5173\u89C4\u5219\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(1) -A PREROUTING -m comment --comment &quot;kubernetes service portals&quot; -j KUBE-SERVICES
&lt;...&gt;
(2) -A KUBE-SERVICES -d 10.96.0.10/32 -p udp -m comment --comment &quot;kube-system/kube-dns:dns cluster IP&quot; -m udp --dport 53 -j KUBE-SVC-TCOU7JCQXEZGVUNU
&lt;...&gt;
(3) -A KUBE-SVC-TCOU7JCQXEZGVUNU -m comment --comment &quot;kube-system/kube-dns:dns&quot; -m statistic --mode random --probability 0.50000000000 -j KUBE-SEP-LLLB6FGXBLX6PZF7
(4) -A KUBE-SVC-TCOU7JCQXEZGVUNU -m comment --comment &quot;kube-system/kube-dns:dns&quot; -j KUBE-SEP-LRVEW52VMYCOUSMZ
&lt;...&gt;
(5) -A KUBE-SEP-LLLB6FGXBLX6PZF7 -p udp -m comment --comment &quot;kube-system/kube-dns:dns&quot; -m udp -j DNAT --to-destination 10.32.0.6:53
&lt;...&gt;
(6) -A KUBE-SEP-LRVEW52VMYCOUSMZ -p udp -m comment --comment &quot;kube-system/kube-dns:dns&quot; -m udp -j DNAT --to-destination 10.32.0.7:53
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5728\u6211\u4EEC\u7684\u793A\u4F8B\u4E2D\uFF0C\u6BCF\u4E2APod\u7684/etc/resolv.conf\u4E2D\u90FD\u6709\u586B\u5145\u7684\u540D\u79F0\u670D\u52A1\u566810.96.0.10\u6761\u76EE\u3002 \u56E0\u6B64\uFF0C\u6765\u81EAPod\u7684DNS\u67E5\u627E\u8BF7\u6C42\u5C06\u53D1\u9001\u523010.96.0.10\uFF0C\u5B83\u662Fkube-dns\u670D\u52A1\u7684ClusterIP\uFF08\u865A\u62DFIP\uFF09\u3002 \u7531\u4E8E\uFF081\uFF09\uFF0C\u8BF7\u6C42\u8FDB\u5165KUBE-SERVICE\u94FE\uFF0C\u7136\u540E\u5339\u914D\u89C4\u5219\uFF082\uFF09\u6700\u540E\u6839\u636E\uFF083\uFF09\u968F\u673A\u503C\uFF0C\u8DF3\u8F6C\u5230\uFF085\uFF09\u6216\uFF086\uFF09\u6839\u636E\u89C4\u5219\uFF08 \u8D1F\u8F7D\u5E73\u8861\uFF09\uFF0C\u5C06\u8BF7\u6C42UDP\u6570\u636E\u5305\u7684\u76EE\u6807IPv4\u5730\u5740\u4FEE\u6539\u4E3ADNS\u670D\u52A1\u5668\u7684\u201C\u5B9E\u9645\u201D IPv4\u5730\u5740\u3002 \u8FD9\u79CD\u4FEE\u9970\u662F\u7531DNAT\u5B8C\u6210\u7684\u3002 10.32.0.6\u548C10.32.0.7\u662FWeave Net\u7F51\u7EDC\u4E2DKubernetes DNS\u670D\u52A1\u5668\u5BB9\u5668\u7684IPv4\u5730\u5740\u3002</p><h2 id="linux\u5185\u6838\u4E2D\u7684dnat" tabindex="-1"><a class="header-anchor" href="#linux\u5185\u6838\u4E2D\u7684dnat" aria-hidden="true">#</a> Linux\u5185\u6838\u4E2D\u7684DNAT</h2><p>\u5982\u4E0A\u6240\u793A\uFF0C\u670D\u52A1\uFF08\u5728iptables\u6A21\u5F0F\u4E0B\uFF09\u7684\u57FA\u7840\u662FDNAT\uFF0C\u5B83\u7531\u5185\u6838\u6267\u884C\u3002</p><p>DNAT\u7684\u4E3B\u8981\u804C\u8D23\u662F\u540C\u65F6\u66F4\u6539\u4F20\u51FA\u6570\u636E\u5305\u7684\u76EE\u7684\u5730\uFF0C\u7B54\u590D\u6570\u636E\u5305\u7684\u6E90\uFF0C\u5E76\u786E\u4FDD\u5BF9\u6240\u6709\u540E\u7EED\u6570\u636E\u5305\u8FDB\u884C\u76F8\u540C\u7684\u4FEE\u6539\u3002 \u540E\u8005\u4E25\u91CD\u4F9D\u8D56\u4E8E\u8FDE\u63A5\u8DDF\u8E2A\u673A\u5236\uFF0C\u4E5F\u79F0\u4E3Aconntrack\uFF0C\u5B83\u88AB\u5B9E\u73B0\u4E3A\u5185\u6838\u6A21\u5757\u3002\u987E\u540D\u601D\u4E49\uFF0Cconntrack\u4F1A\u8DDF\u8E2A\u7CFB\u7EDF\u4E2D\u6B63\u5728\u8FDB\u884C\u7684\u7F51\u7EDC\u8FDE\u63A5\u3002 \u4EE5\u4E00\u79CD\u7B80\u5316\u7684\u65B9\u5F0F\uFF0Cconntrack\u4E2D\u7684\u6BCF\u4E2A\u8FDE\u63A5\u90FD\u7531\u4E24\u4E2A\u5143\u7EC4\u8868\u793A-\u4E00\u4E2A\u5143\u7EC4\u7528\u4E8E\u539F\u59CB\u8BF7\u6C42\uFF08IP_CT_DIR_ORIGINAL\uFF09\uFF0C\u53E6\u4E00\u4E2A\u5143\u7EC4\u7528\u4E8E\u7B54\u590D\uFF08IP_CT_DIR_REPLY\uFF09\u3002\u5BF9\u4E8EUDP\uFF0C\u6BCF\u4E2A\u5143\u7EC4\u90FD\u7531\u6E90IP\u5730\u5740\uFF0C\u6E90\u7AEF\u53E3\u4EE5\u53CA\u76EE\u6807IP\u5730\u5740\u548C\u76EE\u6807\u7AEF\u53E3\u7EC4\u6210\u3002\u7B54\u590D\u5143\u7EC4\u5305\u542B\u5B58\u50A8\u5728src\u5B57\u6BB5\u4E2D\u7684\u76EE\u6807\u7684\u771F\u5B9E\u5730\u5740\u3002 \u4F8B\u5982\uFF0C\u5982\u679CIP\u5730\u5740\u4E3A10.40.0.17\u7684Pod\u5411kube-dns\u7684ClusterIP\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u8BE5\u8BF7\u6C42\u88AB\u8F6C\u6362\u4E3A10.32.0.6\uFF0C\u5219\u5C06\u521B\u5EFA\u4EE5\u4E0B\u5143\u7EC4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u539F\u59CB\uFF1Asrc = 10.40.0.17 dst = 10.96.0.10 sport = 53378 dport = 53
\u56DE\u590D\uFF1Asrc = 10.32.0.6 dst = 10.40.0.17 sport = 53 dport = 53378
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u901A\u8FC7\u5177\u6709\u8FD9\u4E9B\u6761\u76EE\uFF0C\u5185\u6838\u53EF\u4EE5\u76F8\u5E94\u5730\u4FEE\u6539\u4EFB\u4F55\u76F8\u5173\u6570\u636E\u5305\u7684\u76EE\u7684\u5730\u548C\u6E90\u5730\u5740\uFF0C\u800C\u65E0\u9700\u518D\u6B21\u904D\u5386DNAT\u89C4\u5219\u3002\u6B64\u5916\uFF0C\u5B83\u5C06\u77E5\u9053\u5982\u4F55\u4FEE\u6539\u56DE\u590D\u4EE5\u53CA\u5E94\u5C06\u56DE\u590D\u53D1\u9001\u7ED9\u8C01\u3002 \u521B\u5EFAconntrack\u6761\u76EE\u540E\uFF0C\u5C06\u9996\u5148\u5BF9\u5176\u8FDB\u884C\u786E\u8BA4\u3002\u7A0D\u540E\uFF0C\u5982\u679C\u6CA1\u6709\u5DF2\u786E\u8BA4\u7684conntrack\u6761\u76EE\u5177\u6709\u76F8\u540C\u7684\u539F\u59CB\u5143\u7EC4\u6216\u56DE\u590D\u5143\u7EC4\uFF0C\u5219\u5185\u6838\u5C06\u5C1D\u8BD5\u786E\u8BA4\u8BE5\u6761\u76EE\u3002 conntrack\u521B\u5EFA\u548CDNAT\u7684\u7B80\u5316\u6D41\u7A0B\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 
+---------------------------+     
|                                         |      \u4E3A\u4E00\u4E2A\u7ED9\u5B9A\u7684\u5305\u521B\u5EFA\u4E00\u4E2Aconntrack\uFF0C\u5982\u679C
|    1. nf_conntrack_in       |     \u5B83\u5E76\u4E0D\u5B58\u5728;IP_CT_DIR_REPLY\u662F
|                                        |      \u53CD\u5411\u7684IP_CT_DIR_ORIGINAL\u5143\u7EC4\uFF0C\u56E0\u6B64
+------------+--------------+    \u56DE\u590D\u5143\u7EC4\u7684src\u8FD8\u6CA1\u6709\u6539\u53D8\u3002
             |
             v
+---------------------------+
|                                          |
|     2. ipt_do_table             |     \u627E\u5230\u4E00\u4E2A\u5339\u914D\u7684DNAT\u89C4\u5219\u3002
|                                          |
+------------+--------------+
             |
             v
+---------------------------+
|                                        |      \u6839\u636EDNAT\u89C4\u5219\u66F4\u65B0\u56DE\u590D\u5143\u7EC4src\u90E8\u5206
|    3. get_unique_tuple    |     \u4F7F\u5176\u4E0D\u88AB\u4EFB\u4F55\u5DF2\u7ECF\u786E\u8BA4\u7684\u8FDE\u63A5\u4F7F\u7528\u3002
|                                        |     
+------------+--------------+
             |
             v
+---------------------------+
|                                        |     
|     4. nf_nat_packet        |      \u6839\u636E\u5E94\u7B54\u5143\u7EC4\u6253\u4E71\u6570\u636E\u5305\u7684\u76EE\u7684\u7AEF\u53E3\u548C\u5730\u5740\u3002
|                                       |
+------------+--------------+
             |
             v
+----------------------------+
|                                                |  \u5982\u679C\u6CA1\u6709\u4E0E\u76F8\u540C\u7684\u539F\u59CB\u5143\u7EC4\u6216\u5E94\u7B54\u5143\u7EC4\u786E\u8BA4\u7684\u8FDE
|  5. __nf_conntrack_confirm | \u5219\u786E\u8BA4\u8FDE\u63A5\u9053;
|                                                |     
+----------------------------+     \u9012\u589Einsert_failed\u8BA1\u6570\u5668\u5E76\u5220\u9664\u6570\u636E\u5305(\u5982\u679C\u5728)\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><p>\u5F53\u4ECE\u4E0D\u540C\u7EBF\u7A0B\u901A\u8FC7\u540C\u4E00\u5957\u63A5\u5B57\u540C\u65F6\u53D1\u9001\u4E24\u4E2AUDP\u6570\u636E\u5305\u65F6\uFF0C\u4F1A\u51FA\u73B0\u95EE\u9898\u3002 UDP\u662F\u65E0\u8FDE\u63A5\u534F\u8BAE\uFF0C\u56E0\u6B64connect\uFF082\uFF09syscall\uFF08\u4E0ETCP\u76F8\u53CD\uFF09\u4E0D\u4F1A\u53D1\u9001\u4EFB\u4F55\u6570\u636E\u5305\uFF0C\u56E0\u6B64\uFF0C\u5728\u8C03\u7528\u4E4B\u540E\u6CA1\u6709\u521B\u5EFAconntrack\u6761\u76EE\u3002 \u8BE5\u6761\u76EE\u4EC5\u5728\u53D1\u9001\u6570\u636E\u5305\u65F6\u521B\u5EFA\u3002\u8FD9\u5BFC\u81F4\u4EE5\u4E0B\u53EF\u80FD\uFF1A</p><p>1\u3001\u4E24\u4E2A\u5305\u90FD\u6CA1\u6709\u57281\u4E2D\u627E\u5230\u4E00\u4E2A\u786E\u8BA4\u7684conntrack\u3002nf_conntrack_in\u4E00\u6B65\u3002\u4E3A\u4E24\u4E2A\u5305\u521B\u5EFA\u5177\u6709\u76F8\u540C\u5143\u7EC4\u7684\u4E24\u4E2Aconntrack\u6761\u76EE\u3002 2\u3001\u4E0E\u4E0A\u9762\u7684\u60C5\u51B5\u76F8\u540C\uFF0C\u4F46\u4E00\u4E2A\u5305\u7684conntrack\u6761\u76EE\u5728\u53E6\u4E00\u4E2A\u5305\u8C03\u75283\u4E4B\u524D\u88AB\u786E\u8BA4\u3002get_unique_tuple\u3002\u53E6\u4E00\u4E2A\u5305\u901A\u5E38\u5728\u6E90\u7AEF\u53E3\u66F4\u6539\u540E\u5F97\u5230\u4E00\u4E2A\u4E0D\u540C\u7684\u5E94\u7B54\u5143\u7EC4\u3002 3\u3001\u4E0E\u7B2C\u4E00\u79CD\u60C5\u51B5\u76F8\u540C\uFF0C\u4F46\u662F\u5728\u6B65\u9AA42\u4E2D\u9009\u62E9\u4E86\u5177\u6709\u4E0D\u540C\u7AEF\u70B9\u7684\u4E24\u4E2A\u4E0D\u540C\u89C4\u5219\u3002ipt_do_table\u3002</p><p>\u7ADE\u4E89\u7684\u7ED3\u679C\u662F\u76F8\u540C\u7684\u2014\u5176\u4E2D\u4E00\u4E2A\u5305\u5728\u6B65\u9AA45\u4E2D\u88AB\u4E22\u5F03\u3002__nf_conntrack_confirm\u3002</p><p>\u8FD9\u6B63\u662F\u5728DNS\u60C5\u51B5\u4E0B\u53D1\u751F\u7684\u60C5\u51B5\u3002 GNU C\u5E93\u548Cmusl libc\u90FD\u5E76\u884C\u6267\u884CA\u548CAAAA DNS\u67E5\u627E\u3002\u7531\u4E8E\u7ADE\u4E89\uFF0C\u5185\u6838\u53EF\u80FD\u4F1A\u4E22\u5F03\u5176\u4E2D\u4E00\u4E2AUDP\u6570\u636E\u5305\uFF0C\u56E0\u6B64\u5BA2\u6237\u7AEF\u901A\u5E38\u4F1A\u57285\u79D2\u7684\u8D85\u65F6\u540E\u5C1D\u8BD5\u91CD\u65B0\u53D1\u9001\u5B83\u3002</p><p>\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u8FD9\u4E2A\u95EE\u9898\u4E0D\u4EC5\u662F\u9488\u5BF9Kubernetes\u7684-\u4EFB\u4F55\u5E76\u884C\u53D1\u9001UDP\u6570\u636E\u5305\u7684Linux\u591A\u7EBF\u7A0B\u8FDB\u7A0B\u90FD\u5BB9\u6613\u51FA\u73B0\u8FD9\u79CD\u7ADE\u4E89\u60C5\u51B5\u3002</p><p>\u53E6\u5916\uFF0C\u5373\u4F7F\u60A8\u6CA1\u6709\u4EFB\u4F55DNAT\u89C4\u5219\uFF0C\u7B2C\u4E8C\u573A\u7ADE\u4E89\u4E5F\u53EF\u80FD\u53D1\u751F-\u52A0\u8F7Dnf_nat\u5185\u6838\u6A21\u5757\u8DB3\u4EE5\u542F\u7528\u5BF9get_unique_tuple\u7684\u8C03\u7528\u5C31\u8DB3\u591F\u4E86\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528conntrack -S\u83B7\u5F97\u7684insert_failed\u8BA1\u6570\u5668\u53EF\u4EE5\u5F88\u597D\u5730\u6307\u793A\u60A8\u662F\u5426\u9047\u5230\u6B64\u95EE\u9898\u3002</p><h2 id="\u7F13\u89E3\u63AA\u65BD" tabindex="-1"><a class="header-anchor" href="#\u7F13\u89E3\u63AA\u65BD" aria-hidden="true">#</a> \u7F13\u89E3\u63AA\u65BD</h2><h2 id="\u610F\u89C1\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u610F\u89C1\u5EFA\u8BAE" aria-hidden="true">#</a> \u610F\u89C1\u5EFA\u8BAE</h2><p>\u5EFA\u8BAE\u91C7\u53D6\u591A\u79CD\u89E3\u51B3\u65B9\u6CD5\uFF1A\u7981\u7528\u5E76\u884C\u67E5\u627E\uFF0C\u7981\u7528IPv6\u4EE5\u907F\u514DAAAA\u67E5\u627E\uFF0C\u4F7F\u7528TCP\u8FDB\u884C\u67E5\u627E\uFF0C\u6539\u4E3A\u5728Pod\u7684\u89E3\u6790\u5668\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6EDNS\u670D\u52A1\u5668\u7684\u771F\u5B9EIP\u5730\u5740\uFF0C\u7B49\u7B49\u3002\u4E0D\u5E78\u7684\u662F\uFF0C\u7531\u4E8E\u5E38\u7528\u7684\u5BB9\u5668\u57FA\u7840\u6620\u50CFAlpine Linux\u4F7F\u7528musl libc\u7684\u9650\u5236\uFF0C\u5B83\u4EEC\u4E2D\u7684\u8BB8\u591A\u4E0D\u8D77\u4F5C\u7528\u3002 \u5BF9\u4E8EWeave Net\u7528\u6237\u6765\u8BF4\u4F3C\u4E4E\u53EF\u9760\u7684\u65B9\u6CD5\u662F\u4F7F\u7528tc\u5EF6\u8FDFDNS\u6570\u636E\u5305\u3002</p><p>\u53E6\u5916\uFF0C\u60A8\u53EF\u80FD\u60F3\u77E5\u9053\u5728ipvs\u6A21\u5F0F\u4E0B\u7684kube-proxy\u662F\u5426\u53EF\u4EE5\u7ED5\u8FC7\u8FD9\u4E2A\u95EE\u9898\u3002\u7B54\u6848\u662F\u5426\u5B9A\u7684\uFF0C\u56E0\u4E3Aconntrack\u4E5F\u662F\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\u542F\u7528\u7684\u3002\u6B64\u5916\uFF0C\u5728\u4F7F\u7528rr\u8C03\u5EA6\u7A0B\u5E8F\u65F6\uFF0C\u53EF\u4EE5\u5728DNS\u6D41\u91CF\u8F83\u9AD8\u7684\u96C6\u7FA4\u4E2D\u8F7B\u677E\u91CD\u73B0\u7B2C3\u6B21\u7ADE\u4E89\u3002</p><h2 id="\u5185\u6838\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u5185\u6838\u4FEE\u590D" aria-hidden="true">#</a> \u5185\u6838\u4FEE\u590D</h2><p>\u65E0\u8BBA\u91C7\u7528\u54EA\u79CD\u89E3\u51B3\u65B9\u6CD5\uFF0C\u90FD\u51B3\u5B9A\u5728\u5185\u6838\u4E2D\u4FEE\u590D\u6839\u672C\u539F\u56E0\u3002 \u7ED3\u679C\u662F\u4EE5\u4E0B\u5185\u6838\u8865\u4E01\uFF1A</p><p>1\u3001 \u201C netfilter\uFF1Anf_conntrack\uFF1A\u89E3\u51B3\u51B2\u7A81\u4EE5\u5339\u914Dconntracks\u201D\u4FEE\u590D\u4E86\u7B2C\u4E00\u573A\u6BD4\u8D5B\uFF08\u88AB\u63A5\u53D7\uFF09\u3002 2\u3001 \u201C netfilter\uFF1Anf_nat\uFF1A\u8FD4\u56DE\u76F8\u540C\u7684\u7B54\u590D\u5143\u7EC4\u4EE5\u5339\u914DCT\u201D\u4FEE\u590D\u4E86\u7B2C\u4E8C\u573A\u6BD4\u8D5B\uFF08\u7B49\u5F85\u590D\u5BA1\uFF09\u3002</p><p>\u8FD9\u4E24\u4E2A\u8865\u4E01\u89E3\u51B3\u4E86\u4EC5\u8FD0\u884C\u4E00\u4E2ADNS\u670D\u52A1\u5668\u5B9E\u4F8B\u7684\u7FA4\u96C6\u7684\u95EE\u9898\uFF0C\u540C\u65F6\u964D\u4F4E\u4E86\u5176\u4ED6\u5B9E\u4F8B\u7684\u8D85\u65F6\u547D\u4E2D\u7387\u3002 \u4E3A\u4E86\u5728\u6240\u6709\u60C5\u51B5\u4E0B\u5B8C\u5168\u6D88\u9664\u95EE\u9898\uFF0C\u9700\u8981\u89E3\u51B3\u7B2C\u4E09\u573A\u7ADE\u4E89\u3002\u4E00\u79CD\u53EF\u80FD\u7684\u89E3\u51B3\u65B9\u6CD5\u662F\u5728\u6B65\u9AA45\u4E2D\u5C06\u51B2\u7A81\u7684conntrack\u6761\u76EE\u4E0E\u6765\u81EA\u540C\u4E00\u5957\u63A5\u5B57\u7684\u4E0D\u540C\u76EE\u7684\u5730\u5408\u5E76\u3002__nf_conntrack_confirm\u3002\u4F46\u662F\uFF0C\u8FD9\u4F1A\u4F7F\u5728\u8BE5\u6B65\u9AA4\u4E2D\u66F4\u6539\u4E86\u76EE\u7684\u5730\u7684\u6570\u636E\u5305\u7684\u5148\u524Diptables\u89C4\u5219\u904D\u5386\u7684\u7ED3\u679C\u65E0\u6548\u3002 \u53E6\u4E00\u79CD\u53EF\u80FD\u7684\u89E3\u51B3\u65B9\u6848\u662F\u5728\u6BCF\u4E2A\u8282\u70B9\u4E0A\u8FD0\u884CDNS\u670D\u52A1\u5668\u5B9E\u4F8B\uFF0C\u5E76\u6309\u7167\u6211\u7684\u540C\u4E8B\u7684\u5EFA\u8BAE\uFF0C\u901A\u8FC7Pod\u67E5\u8BE2\u8FD0\u884C\u5728\u672C\u5730\u8282\u70B9\u4E0A\u7684DNS\u670D\u52A1\u5668\u3002 \u7ED3\u8BBA \u9996\u5148\uFF0C\u6211\u5C55\u793A\u4E86\u201C DNS\u67E5\u627E\u9700\u89815\u79D2\u201D\u95EE\u9898\u7684\u57FA\u672C\u7EC6\u8282\uFF0C\u5E76\u63ED\u793A\u4E86\u7F6A\u9B41\u7978\u9996-Linux conntrack\u5185\u6838\u6A21\u5757\uFF0C\u5B83\u672C\u8D28\u4E0A\u662F\u4E0D\u53D7\u6B22\u8FCE\u7684\u3002\u6709\u5173\u6A21\u5757\u4E2D\u4E5F\u5B58\u5728\u5176\u4ED6\u53EF\u80FD\u7684\u95EE\u9898</p><h2 id="\u89E3\u51B3\u65B9\u6848\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848\u5982\u4E0B" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848\u5982\u4E0B\uFF1A</h2><p><strong>\u65B9\u6848\uFF08\u4E00\uFF09\uFF1A\u4F7F\u7528 TCP \u534F\u8BAE\u53D1\u9001 DNS \u8BF7\u6C42</strong> \u901A\u8FC7resolv.conf\u7684use-vc\u9009\u9879\u6765\u5F00\u542F TCP \u534F\u8BAE \u6D4B\u8BD5 1\u3001\u4FEE\u6539/etc/resolv.conf\u6587\u4EF6\uFF0C\u5728\u6700\u540E\u52A0\u5165\u4E00\u884C\u6587\u672C\uFF1A options use-vc 2\u3001\u6B64\u538B\u6D4B\u53EF\u6839\u636E\u4E0B\u9762\u6D4B\u8BD5\u7684go\u6587\u4EF6\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u7F16\u8BD1\u597D\u540E\u653E\u8FDB\u4E00\u4E2Apod\u4E2D\uFF0C\u8FDB\u884C\u538B\u6D4B\uFF1A #200\u4E2A\u5E76\u53D1,\u6301\u7EED30\u79D2,\u8BB0\u5F55\u8D85\u8FC75s\u7684\u8BF7\u6C42\u4E2A\u6570 ./dns -host {service}.{namespace} -c 200 -d 30 -l 5000</p><p><strong>\u65B9\u6848\uFF08\u4E8C\uFF09\uFF1A\u907F\u514D\u76F8\u540C\u4E94\u5143\u7EC4 DNS \u8BF7\u6C42\u7684\u5E76\u53D1</strong> \u901A\u8FC7resolv.conf\u7684single-request-reopen\u548Csingle-request\u9009\u9879\u6765\u907F\u514D\uFF1A single-request-reopen (glibc&gt;=2.9) \u53D1\u9001 A \u7C7B\u578B\u8BF7\u6C42\u548C AAAA \u7C7B\u578B\u8BF7\u6C42\u4F7F\u7528\u4E0D\u540C\u7684\u6E90\u7AEF\u53E3\u3002\u8FD9\u6837\u4E24\u4E2A\u8BF7\u6C42\u5728 conntrack \u8868\u4E2D\u4E0D\u5360\u7528\u540C\u4E00\u4E2A\u8868\u9879\uFF0C\u4ECE\u800C\u907F\u514D\u51B2\u7A81\u3002 single-request (glibc&gt;=2.10) \u907F\u514D\u5E76\u53D1\uFF0C\u6539\u4E3A\u4E32\u884C\u53D1\u9001 A \u7C7B\u578B\u548C AAAA \u7C7B\u578B\u8BF7\u6C42\uFF0C\u6CA1\u6709\u4E86\u5E76\u53D1\uFF0C\u4ECE\u800C\u4E5F\u907F\u514D\u4E86\u51B2\u7A81\u3002</p><p>\u6D4B\u8BD5 single-request-reopen \u4FEE\u6539/etc/resolv.conf\u6587\u4EF6\uFF0C\u5728\u6700\u540E\u52A0\u5165\u4E00\u884C\u6587\u672C\uFF1A options single-request-reopen \u6B64\u538B\u6D4B\u53EF\u6839\u636E\u4E0B\u9762\u6D4B\u8BD5\u7684go\u6587\u4EF6\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u7F16\u8BD1\u597D\u540E\u653E\u8FDB\u4E00\u4E2Apod\u4E2D\uFF0C\u8FDB\u884C\u538B\u6D4B\uFF1A #200\u4E2A\u5E76\u53D1,\u6301\u7EED30\u79D2,\u8BB0\u5F55\u8D85\u8FC75s\u7684\u8BF7\u6C42\u4E2A\u6570 ./dns -host {service}.{namespace} -c 200 -d 30 -l 5000</p><p>\u6D4B\u8BD5 single-request \u4FEE\u6539/etc/resolv.conf\u6587\u4EF6\uFF0C\u5728\u6700\u540E\u52A0\u5165\u4E00\u884C\u6587\u672C\uFF1A options single-request \u6B64\u538B\u6D4B\u53EF\u6839\u636E\u4E0B\u9762\u6D4B\u8BD5\u7684go\u6587\u4EF6\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u7F16\u8BD1\u597D\u540E\u653E\u8FDB\u4E00\u4E2Apod\u4E2D\uFF0C\u8FDB\u884C\u538B\u6D4B\uFF1A #200\u4E2A\u5E76\u53D1,\u6301\u7EED30\u79D2,\u8BB0\u5F55\u8D85\u8FC75s\u7684\u8BF7\u6C42\u4E2A\u6570 ./dns -host {service}.{namespace} -c 200 -d 30 -l 5000</p><p>\u6700\u540E\u7ED3\u679C\uFF0C\u5982\u679C\u4F60\u6D4B\u8BD5\u8FC7\uFF0C\u76F8\u4FE1coredns\u7684\u6D4B\u8BD5\u5982\u679C\u8FD8\u662F\u589E\u52A0\u4F7F\u7528 TCP \u534F\u8BAE\u53D1\u9001 DNS \u8BF7\u6C42,\u8FD8\u662F\u907F\u514D\u76F8\u540C\u4E94\u5143\u7EC4 DNS \u8BF7\u6C42\u7684\u5E76\u53D1\uFF0C\u90FD\u6CA1\u6709\u663E\u8457\u7684\u89E3\u51B3coredns\u5EF6\u8FDF\u7684\u7ED3\u679C</p><p>\u90A3\u4E48\u5176\u5B9E k8s \u5B98\u65B9\u4E5F\u610F\u8BC6\u5230\u4E86\u8FD9\u4E2A\u95EE\u9898\u6BD4\u8F83\u5E38\u89C1\uFF0C\u6240\u4EE5\u4E5F\u7ED9\u51FA\u4E86 coredns \u4EE5 cache \u6A21\u5F0F\u4F5C\u4E3A daemonset \u90E8\u7F72\u7684\u89E3\u51B3\u65B9\u6848</p><h3 id="\u5728-kubernetes-\u96C6\u7FA4\u4E2D\u4F7F\u7528-nodelocal-dnscache" tabindex="-1"><a class="header-anchor" href="#\u5728-kubernetes-\u96C6\u7FA4\u4E2D\u4F7F\u7528-nodelocal-dnscache" aria-hidden="true">#</a> \u5728 Kubernetes \u96C6\u7FA4\u4E2D\u4F7F\u7528 NodeLocal DNSCache</h3><p>https://github.com/kubernetes/kubernetes/tree/master/cluster/addons/dns/nodelocaldns</p><p>NodeLocal DNSCache \u901A\u8FC7\u5728\u96C6\u7FA4\u8282\u70B9\u4E0A\u4F5C\u4E3A DaemonSet \u8FD0\u884C dns \u7F13\u5B58\u4EE3\u7406\u6765\u63D0\u9AD8\u96C6\u7FA4 DNS \u6027\u80FD\u3002 \u5728\u5F53\u4ECA\u7684\u4F53\u7CFB\u7ED3\u6784\u4E2D\uFF0C\u5904\u4E8E ClusterFirst DNS \u6A21\u5F0F\u7684 Pod \u53EF\u4EE5\u8FDE\u63A5\u5230 kube-dns serviceIP \u8FDB\u884C DNS \u67E5\u8BE2\u3002 \u901A\u8FC7 kube-proxy \u6DFB\u52A0\u7684 iptables \u89C4\u5219\u5C06\u5176\u8F6C\u6362\u4E3A kube-dns/CoreDNS \u7AEF\u70B9\u3002 \u501F\u52A9\u8FD9\u79CD\u65B0\u67B6\u6784\uFF0CPods \u5C06\u53EF\u4EE5\u8BBF\u95EE\u5728\u540C\u4E00\u8282\u70B9\u4E0A\u8FD0\u884C\u7684 dns \u7F13\u5B58\u4EE3\u7406\uFF0C\u4ECE\u800C\u907F\u514D\u4E86 iptables DNAT \u89C4\u5219\u548C\u8FDE\u63A5\u8DDF\u8E2A\u3002 \u672C\u5730\u7F13\u5B58\u4EE3\u7406\u5C06\u67E5\u8BE2 kube-dns \u670D\u52A1\u4EE5\u83B7\u53D6\u96C6\u7FA4\u4E3B\u673A\u540D\u7684\u7F13\u5B58\u7F3A\u5931\uFF08\u9ED8\u8BA4\u4E3A cluster.local \u540E\u7F00\uFF09\uFF0C\u5E76\u6709\u6548\u89E3\u51B35\u79D2\u5EF6\u8FDF\u95EE\u9898</p><h3 id="\u5728\u96C6\u7FA4\u4E2D\u8FD0\u884C-nodelocal-dnscache-\u6709\u5982\u4E0B\u51E0\u4E2A\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#\u5728\u96C6\u7FA4\u4E2D\u8FD0\u884C-nodelocal-dnscache-\u6709\u5982\u4E0B\u51E0\u4E2A\u597D\u5904" aria-hidden="true">#</a> \u5728\u96C6\u7FA4\u4E2D\u8FD0\u884C NodeLocal DNSCache \u6709\u5982\u4E0B\u51E0\u4E2A\u597D\u5904\uFF1A</h3><p>\u5982\u679C\u672C\u5730\u6CA1\u6709 CoreDNS \u5B9E\u4F8B\uFF0C\u5219\u5177\u6709\u6700\u9AD8 DNS QPS \u7684 Pod \u53EF\u80FD\u5FC5\u987B\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u8FDB\u884C\u89E3\u6790\uFF0C\u4F7F\u7528 NodeLocal DNSCache \u540E\uFF0C\u62E5\u6709\u672C\u5730\u7F13\u5B58\u5C06\u6709\u52A9\u4E8E\u6539\u5584\u5EF6\u8FDF \u8DF3\u8FC7 iptables DNAT \u548C\u8FDE\u63A5\u8DDF\u8E2A\u5C06\u6709\u52A9\u4E8E\u51CF\u5C11 conntrack \u7ADE\u4E89\u5E76\u907F\u514D UDP DNS \u6761\u76EE\u586B\u6EE1 conntrack \u8868\u3002\uFF08\u5E38\u89C1\u76845s\u8D85\u65F6\u95EE\u9898\u5C31\u662F\u8FD9\u4E2A\u539F\u56E0\u9020\u6210\u7684\uFF09 \u4ECE\u672C\u5730\u7F13\u5B58\u4EE3\u7406\u5230 kube-dns \u670D\u52A1\u7684\u8FDE\u63A5\u53EF\u4EE5\u5347\u7EA7\u5230 TCP\uFF0CTCP conntrack \u6761\u76EE\u5C06\u5728\u8FDE\u63A5\u5173\u95ED\u65F6\u88AB\u5220\u9664\uFF0C\u800C UDP \u6761\u76EE\u5FC5\u987B\u8D85\u65F6(\u9ED8\u8BA4 nf_conntrack_udp_timeout \u662F 30 \u79D2) \u5C06 DNS \u67E5\u8BE2\u4ECE UDP \u5347\u7EA7\u5230 TCP \u5C06\u51CF\u5C11\u5F52\u56E0\u4E8E\u4E22\u5F03\u7684 UDP \u6570\u636E\u5305\u548C DNS \u8D85\u65F6\u7684\u5C3E\u90E8\u7B49\u5F85\u65F6\u95F4\uFF0C\u901A\u5E38\u957F\u8FBE 30 \u79D2\uFF083 \u6B21\u91CD\u8BD5+ 10 \u79D2\u8D85\u65F6\uFF09\u3002 \u53EF\u4EE5\u91CD\u65B0\u542F\u7528\u8D1F\u7F13\u5B58\uFF0C\u4ECE\u800C\u51CF\u5C11\u5BF9 kube-dns \u670D\u52A1\u7684\u67E5\u8BE2\u6570\u91CF\u3002</p><h4 id="\u67B6\u6784\u56FE" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u56FE" aria-hidden="true">#</a> \u67B6\u6784\u56FE</h4><p>\u542F\u7528 NodeLocal DNSCache \u4E4B\u540E\uFF0C\u8FD9\u662F DNS \u67E5\u8BE2\u6240\u9075\u5FAA\u7684\u8DEF\u5F84\uFF1A <img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/format,png.png" alt="Coredns+Nodelocaldns cache\u89E3\u51B3Coredns\u57DF\u540D\u89E3\u6790\u5EF6\u8FDF" loading="lazy"></p><h4 id="\u73AF\u5883\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u68C0\u67E5" aria-hidden="true">#</a> \u73AF\u5883\u68C0\u67E5</h4><p>\u8BE5\u8D44\u6E90\u6E05\u5355\u6587\u4EF6\u4E2D\u5305\u542B\u51E0\u4E2A\u53D8\u91CF\uFF0C\u5176\u4E2D\uFF1A <strong>PILLAR</strong>DNS<strong>SERVER</strong> \uFF1A\u8868\u793A kube-dns \u8FD9\u4E2A Service \u7684 ClusterIP\uFF0C\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4 kubectl get svc -n A | grep kube-dns | awk &#39;{ print $4 }&#39; \u83B7\u53D6 <strong>PILLAR</strong>LOCAL<strong>DNS</strong>\uFF1A\u8868\u793A DNSCache \u672C\u5730\u7684 IP\uFF0C\u9ED8\u8BA4\u4E3A 169.254.20.10 <strong>PILLAR</strong>DNS<strong>DOMAIN</strong>\uFF1A\u8868\u793A\u96C6\u7FA4\u57DF\uFF0C\u9ED8\u8BA4\u5C31\u662F cluster.local</p><p>\u53E6\u5916\u8FD8\u6709\u4E24\u4E2A\u53C2\u6570 <strong>PILLAR</strong>CLUSTER<strong>DNS</strong> \u548C <strong>PILLAR</strong>UPSTREAM<strong>SERVERS</strong>\uFF0C\u8FD9\u4E24\u4E2A\u53C2\u6570\u4F1A\u901A\u8FC7\u955C\u50CF 1.15.6 \u7248\u672C\u4EE5\u4E0A\u7684\u53BB\u8FDB\u884C\u914D\u7F6E\uFF0C\u5BF9\u5E94\u7684\u503C\u6765\u6E90\u4E8E kube-dns \u7684 ConfigMap \u548C\u5B9A\u5236\u7684 Upstream Server \u914D\u7F6E\u3002\u76F4\u63A5\u6267\u884C\u5982\u4E0B\u6240\u793A\u7684\u547D\u4EE4\u5373\u53EF\u5B89\u88C5\uFF1A</p><p>\u8FD0\u884Cnodelocaldns\u9700\u8981\u8FDB\u884C\u66FF\u6362\u4EE5\u4E0B\u64CD\u4F5C,\u5982\u679C\u4E0B\u8F7D\u8FC7\u6162\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E0B\u9762\u7684yaml\u6765\u4F7F\u7528\uFF0C\u9700\u8981\u66FF\u6362\u7684\u8BDD\uFF0C\u53EA\u670910.96.0.10\uFF0C\u8FD9\u4E2A\u662Fkube-dns service\u7684clusterIP</p><h4 id="\u5F00\u59CB\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u90E8\u7F72" aria-hidden="true">#</a> \u5F00\u59CB\u90E8\u7F72</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget -O nodelocaldns.yaml &quot;https://github.com/kubernetes/kubernetes/raw/master/cluster/addons/dns/nodelocaldns/nodelocaldns.yaml&quot; &amp;&amp; \\
sed -i &#39;s/k8s.gcr.io/zhaocheng172/g&#39; nodelocaldns.yaml &amp;&amp; \\
sed -i &#39;s/__PILLAR__DNS__SERVER__/10.96.0.10/g&#39; nodelocaldns.yaml &amp;&amp; \\
sed -i &#39;s/__PILLAR__LOCAL__DNS__/169.254.20.10/g&#39; nodelocaldns.yaml &amp;&amp; \\
sed -i &#39;s/__PILLAR__DNS__DOMAIN__/cluster.local/g&#39; nodelocaldns.yaml 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6700\u7EC8\u66FF\u6362\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#Copyright 2018 The Kubernetes Authors.
#Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
#you may not use this file except in compliance with the License.
#You may obtain a copy of the License at
#http://www.apache.org/licenses/LICENSE-2.0
#Unless required by applicable law or agreed to in writing, software
#distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
#WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#See the License for the specific language governing permissions and
#limitations under the License.
 
apiVersion: v1
kind: ServiceAccount
metadata:
  name: node-local-dns
  namespace: kube-system
  labels:
    kubernetes.io/cluster-service: &quot;true&quot;
    addonmanager.kubernetes.io/mode: Reconcile
---
apiVersion: v1
kind: Service
metadata:
  name: kube-dns-upstream
  namespace: kube-system
  labels:
    k8s-app: kube-dns
    kubernetes.io/cluster-service: &quot;true&quot;
    addonmanager.kubernetes.io/mode: Reconcile
    kubernetes.io/name: &quot;KubeDNSUpstream&quot;
spec:
  ports:
  - name: dns
    port: 53
    protocol: UDP
    targetPort: 53
  - name: dns-tcp
    port: 53
    protocol: TCP
    targetPort: 53
  selector:
    k8s-app: kube-dns
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: node-local-dns
  namespace: kube-system
  labels:
    addonmanager.kubernetes.io/mode: Reconcile
data:
  Corefile: |
    cluster.local:53 {
        errors
        cache {
                success 9984 30
                denial 9984 5
        }
        reload
        loop
        bind 169.254.20.10 10.96.0.10
        forward . __PILLAR__CLUSTER__DNS__ {
                force_tcp
        }
        prometheus :9253
        health 169.254.20.10:8080
        }
    in-addr.arpa:53 {
        errors
        cache 30
        reload
        loop
        bind 169.254.20.10 10.96.0.10
        forward . __PILLAR__CLUSTER__DNS__ {
                force_tcp
        }
        prometheus :9253
        }
    ip6.arpa:53 {
        errors
        cache 30
        reload
        loop
        bind 169.254.20.10 10.96.0.10
        forward . __PILLAR__CLUSTER__DNS__ {
                force_tcp
        }
        prometheus :9253
        }
    .:53 {
        errors
        cache 30
        reload
        loop
        bind 169.254.20.10 10.96.0.10
        forward . __PILLAR__UPSTREAM__SERVERS__ {
                force_tcp
        }
        prometheus :9253
        }
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: node-local-dns
  namespace: kube-system
  labels:
    k8s-app: node-local-dns
    kubernetes.io/cluster-service: &quot;true&quot;
    addonmanager.kubernetes.io/mode: Reconcile
spec:
  updateStrategy:
    rollingUpdate:
      maxUnavailable: 10%
  selector:
    matchLabels:
      k8s-app: node-local-dns
  template:
    metadata:
      labels:
        k8s-app: node-local-dns
      annotations:
        prometheus.io/port: &quot;9253&quot;
        prometheus.io/scrape: &quot;true&quot;
    spec:
      priorityClassName: system-node-critical
      serviceAccountName: node-local-dns
      hostNetwork: true
      dnsPolicy: Default  # Don&#39;t use cluster DNS.
      tolerations:
      - key: &quot;CriticalAddonsOnly&quot;
        operator: &quot;Exists&quot;
      - effect: &quot;NoExecute&quot;
        operator: &quot;Exists&quot;
      - effect: &quot;NoSchedule&quot;
        operator: &quot;Exists&quot;
      containers:
      - name: node-cache
        image: zhaocheng172/k8s-dns-node-cache:1.15.13
        resources:
          requests:
            cpu: 25m
            memory: 5Mi
        args: [ &quot;-localip&quot;, &quot;169.254.20.10,10.96.0.10&quot;, &quot;-conf&quot;, &quot;/etc/Corefile&quot;, &quot;-upstreamsvc&quot;, &quot;kube-dns-upstream&quot; ]
        securityContext:
          privileged: true
        ports:
        - containerPort: 53
          name: dns
          protocol: UDP
        - containerPort: 53
          name: dns-tcp
          protocol: TCP
        - containerPort: 9253
          name: metrics
          protocol: TCP
        livenessProbe:
          httpGet:
            host: 169.254.20.10
            path: /health
            port: 8080
          initialDelaySeconds: 60
          timeoutSeconds: 5
        volumeMounts:
        - mountPath: /run/xtables.lock
          name: xtables-lock
          readOnly: false
        - name: config-volume
          mountPath: /etc/coredns
        - name: kube-dns-config
          mountPath: /etc/kube-dns
      volumes:
      - name: xtables-lock
        hostPath:
          path: /run/xtables.lock
          type: FileOrCreate
      - name: kube-dns-config
        configMap:
          name: kube-dns
          optional: true
      - name: config-volume
        configMap:
          name: node-local-dns
          items:
            - key: Corefile
              path: Corefile.base
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br></div></div><p>\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u6765\u67E5\u770B\u5BF9\u5E94\u7684 Pod \u662F\u5426\u5DF2\u7ECF\u542F\u52A8\u6210\u529F\uFF1A</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nodelocal1.png" alt="Coredns+Nodelocaldns cache\u89E3\u51B3Coredns\u57DF\u540D\u89E3\u6790\u5EF6\u8FDF" loading="lazy"> \u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD9\u91CC\u4F7F\u7528 DaemonSet \u90E8\u7F72 node-local-dns \u4F7F\u7528\u4E86 hostNetwork=true\uFF0C\u4F1A\u5360\u7528\u5BBF\u4E3B\u673A\u7684 8080 \u7AEF\u53E3\uFF0C\u6240\u4EE5\u9700\u8981\u4FDD\u8BC1\u8BE5\u7AEF\u53E3\u672A\u88AB\u5360\u7528\u3002</p><p>\u53E6\u5916\u6211\u4EEC\u8FD8\u9700\u8981\u4FEE\u6539 kubelet \u7684 --cluster-dns \u53C2\u6570\uFF0C\u5C06\u5176\u6307\u5411 169.254.20.10\uFF0CDaemonset \u4F1A\u5728\u6BCF\u4E2A\u8282\u70B9\u521B\u5EFA\u4E00\u4E2A\u7F51\u5361\u6765\u7ED1\u8FD9\u4E2A IP\uFF0CPod \u5411\u672C\u8282\u70B9\u8FD9\u4E2A IP \u53D1 DNS \u8BF7\u6C42\uFF0C\u7F13\u5B58\u6CA1\u6709\u547D\u4E2D\u7684\u65F6\u5019\u624D\u4F1A\u518D\u4EE3\u7406\u5230\u4E0A\u6E38\u96C6\u7FA4 DNS \u8FDB\u884C\u67E5\u8BE2\u3002</p><h4 id="\u4E24\u79CD\u65B9\u6848\u6D4B\u8BD5nodelocaldns\u5B9E\u6548\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E24\u79CD\u65B9\u6848\u6D4B\u8BD5nodelocaldns\u5B9E\u6548\u6027" aria-hidden="true">#</a> \u4E24\u79CD\u65B9\u6848\u6D4B\u8BD5nodelocaldns\u5B9E\u6548\u6027</h4><p>\u7B2C\u4E00\u79CD\u5C31\u662F\u5B9A\u5236\u4E00\u4E2Apod\uFF0CKubernetes Pod dnsPolicy \u53EF\u4EE5\u9488\u5BF9\u6BCF\u4E2APod\u8BBE\u7F6EDNS\u7684\u7B56\u7565\uFF0C\u901A\u8FC7PodSpec\u4E0B\u7684dnsPolicy\u5B57\u6BB5\u53EF\u4EE5\u6307\u5B9A\u76F8\u5E94\u7684\u7B56\u7565 \u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u76F4\u63A5\u542F\u52A8\u4E00\u4E2Apod\uFF0CPods\u5C06\u76F4\u63A5\u53EF\u4EE5\u8BBF\u95EE\u5728\u540C\u4E00\u8282\u70B9\u4E0A\u8FD0\u884C\u7684 dns \u7F13\u5B58\u4EE3\u7406\uFF0C\u4ECE\u800C\u907F\u514D\u4E86 iptables DNAT \u89C4\u5219\u548C\u8FDE\u63A5\u8DDF\u8E2A\uFF0C\u4F46\u662F\u8FD9\u79CD\u5BF9\u4E8E\u6574\u4F53\u96C6\u7FA4\u6765\u8BB2\u5E76\u4E0D\u9002\u5408\uFF0C\u53EA\u63D0\u9AD8\u4E86\u5F53\u524Dpod\u7684DNScache\u7684\u547D\u4E2D\u7387\uFF0C\u8FD9\u79CD\u9002\u5408\u5B9A\u5236\u4E00\u4E9Bdns\u7B56\u7565</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: web
  name: web
  namespace: kube-system
spec:
  replicas: 1
  selector:
    matchLabels:
      app: web
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: web
    spec:
      containers:
      - image: nginx
        name: nginx
      dnsConfig:
        nameservers:
          - 169.254.20.10
        searches:
          - public.svc.cluster.local
          - svc.cluster.local
          - cluster.local
        options:
          - name: ndots
            value: &quot;5&quot;
      dnsPolicy: None
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u7B2C\u4E8C\u79CD\u5982\u679C\u5BF9\u4E8E\u96C6\u7FA4\u6765\u8BB2\uFF0C\u9700\u8981\u5168\u90E8\u751F\u6548 \u9700\u8981\u66FF\u6362\u6BCF\u4E2A\u8282\u70B9\u7684clusterDNS\u7684\u5730\u5740</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>clusterDNS:
- 10.96.0.10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u66FF\u6362\u7684\u8BDD\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528sed\u76F4\u63A5\u66FF\u6362\uFF0C\u53E6\u5916\u9700\u8981\u6240\u6709\u8282\u70B9\u66FF\u6362\u5E76\u91CD\u542Fkubelet</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s/10.96.0.10/169.254.20.10/g&#39; /var/lib/kubelet/config.yaml
systemctl daemon-reload
systemctl restart kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5F85 node-local-dns \u5B89\u88C5\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u90E8\u7F72\u4E00\u4E2A\u65B0\u7684 Pod \u6765\u9A8C\u8BC1\u4E0B\uFF1A(test-node-local-dns.yaml)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiVersion: v1
kind: Pod
metadata:
  name: test-node-local-dns
spec:
  containers:
  - name: local-dns
    image: busybox
    command: [&quot;/bin/sh&quot;, &quot;-c&quot;, &quot;sleep 60m&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u76F4\u63A5\u90E8\u7F72\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ kubectl apply -f test-node-local-dns.yaml
$ kubectl exec -it test-node-local-dns /bin/sh
/ # cat /etc/resolv.conf
nameserver 169.254.20.10
search default.svc.cluster.local svc.cluster.local cluster.local
options ndots:5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u9700\u8981\u6CE8\u610F \u6211\u4EEC\u73B0\u5728\u5DF2\u7ECF\u53EF\u4EE5\u770B\u5230 nameserver \u5DF2\u7ECF\u53D8\u6210 169.254.20.10 \u4E86\uFF0C\u5F53\u7136\u5BF9\u4E8E\u4E4B\u524D\u7684\u5386\u53F2 Pod \u8981\u60F3\u4F7F\u7528 node-local-dns \u5219\u9700\u8981\u91CD\u5EFA\u6240\u6709\u7684pod</p><p>1\u3001linux \u4E2Dglibc\u7684 resolver \u7684\u7F3A\u7701\u8D85\u65F6\u65F6\u95F4\u662F 5s\uFF0C\u800C\u5BFC\u81F4\u8D85\u65F6\u7684\u539F\u56E0\u662F\u5185\u6838conntrack\u6A21\u5757\u7684 bug\u3002 2\u3001DNS client (glibc \u6216 musl libc) \u4F1A\u5E76\u53D1\u8BF7\u6C42 A \u548C AAAA \u8BB0\u5F55\uFF0C\u8DDF DNS Server \u901A\u4FE1\u81EA\u7136\u4F1A\u5148 connect (\u5EFA\u7ACB fd)\uFF0C\u540E\u9762\u8BF7\u6C42\u62A5\u6587\u4F7F\u7528\u8FD9\u4E2A fd \u6765\u53D1\u9001\uFF0C\u7531\u4E8E UDP \u662F\u65E0\u72B6\u6001\u534F\u8BAE\uFF0C connect \u65F6\u5E76\u4E0D\u4F1A\u53D1\u5305\uFF0C\u4E5F\u5C31\u4E0D\u4F1A\u521B\u5EFA conntrack \u8868\u9879, \u800C\u5E76\u53D1\u8BF7\u6C42\u7684 A \u548C AAAA \u8BB0\u5F55\u9ED8\u8BA4\u4F7F\u7528\u540C\u4E00\u4E2A fd \u53D1\u5305\uFF0Csend \u65F6\u5404\u81EA\u53D1\u7684\u5305\u5B83\u4EEC\u6E90 Port \u76F8\u540C(\u56E0\u4E3A\u7528\u7684\u540C\u4E00\u4E2A socket \u53D1\u9001)\uFF0C\u5F53\u5E76\u53D1\u53D1\u5305\u65F6\uFF0C\u4E24\u4E2A\u5305\u90FD\u8FD8\u6CA1\u6709\u88AB\u63D2\u5165 conntrack \u8868\u9879\uFF0C\u6240\u4EE5 netfilter \u4F1A\u4E3A\u5B83\u4EEC\u5206\u522B\u521B\u5EFA conntrack \u8868\u9879\uFF0C\u800C\u96C6\u7FA4\u5185\u8BF7\u6C42 kube-dns \u6216 coredns \u90FD\u662F\u8BBF\u95EE\u7684 CLUSTER-IP\uFF0C\u62A5\u6587\u6700\u7EC8\u4F1A\u88AB DNAT \u6210\u4E00\u4E2A endpoint \u7684 POD IP\uFF0C\u5F53\u4E24\u4E2A\u5305\u6070\u597D\u53C8\u88AB DNAT \u6210\u540C\u4E00\u4E2A POD IP \u65F6\uFF0C\u5B83\u4EEC\u7684\u4E94\u5143\u7EC4\u5C31\u76F8\u540C\u4E86\uFF0C\u5728\u6700\u7EC8\u63D2\u5165\u7684\u65F6\u5019\u540E\u9762\u90A3\u4E2A\u5305\u5C31\u4F1A\u88AB\u4E22\u6389\uFF0C\u5982\u679C dns \u7684 pod \u526F\u672C\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\u7684\u60C5\u51B5\u5C31\u5F88\u5BB9\u6613\u53D1\u751F(\u59CB\u7EC8\u88AB DNAT \u6210\u540C\u4E00\u4E2A POD IP)\uFF0C\u73B0\u8C61\u5C31\u662F dns \u8BF7\u6C42\u8D85\u65F6\uFF0Cclient \u9ED8\u8BA4\u7B56\u7565\u662F\u7B49\u5F85 5s \u81EA\u52A8\u91CD\u8BD5\uFF0C\u5982\u679C\u91CD\u8BD5\u6210\u529F\uFF0C\u6211\u4EEC\u770B\u5230\u7684\u73B0\u8C61\u5C31\u662F dns \u8BF7\u6C42\u6709 5s \u7684\u5EF6\u65F6\u3002</p><p>\u53E6\u5916\u5982\u679C\u8981\u60F3\u53BB\u8DDF\u8E2A DNS \u7684\u89E3\u6790\u8FC7\u7A0B\u7684\u8BDD\u53EF\u4EE5\u53BB\u901A\u8FC7\u6293\u5305\u6765\u89C2\u5BDF\u5177\u4F53\u8D85\u65F6\u7684\u6700\u5927\u65F6\u95F4\u3002</p><p>\u6D4B\u8BD5coredns+nodelocaldns\u7684\u6548\u679C \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7Go\u7684\u4E00\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u6765\u6D4B\u8BD5DNS\u7684\u89E3\u6790\u662F\u5426\u5F97\u5230\u63D0\u5347</p><p>\u9996\u5148\u5B89\u88C5\u4E00\u4E2AGo\u7684\u73AF\u5883</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#wget   https://dl.google.com/go/go1.12.5.linux-amd64.tar.gz
#tar -zxf go1.12.5.linux-amd64.tar.gz -C /usr/local
#export PATH=$PATH:/usr/local/go/bin
#go version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E3B\u8981\u662F\u8981\u6D4B\u8BD5 dns \u670D\u52A1\u7684\u6027\u80FD\uFF0C\u76F8\u5F53\u4E8E\u538B\u6D4B\u5DE5\u5177\u53EA\u505A\u57DF\u540D\u89E3\u6790\u7684\u8017\u65F6\u65F6\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat dns-test.go
 
package main
 
import (
    &quot;context&quot;
    &quot;flag&quot;
    &quot;fmt&quot;
    &quot;net&quot;
    &quot;sync/atomic&quot;
    &quot;time&quot;
)
 
var host string
var connections int
var duration int64
var limit int64
var timeoutCount int64
 
func main() {
    // os.Args = append(os.Args, &quot;-host&quot;, &quot;www.baidu.com&quot;, &quot;-c&quot;, &quot;200&quot;, &quot;-d&quot;, &quot;30&quot;, &quot;-l&quot;, &quot;5000&quot;)
 
    flag.StringVar(&amp;host, &quot;host&quot;, &quot;&quot;, &quot;Resolve host&quot;)
    flag.IntVar(&amp;connections, &quot;c&quot;, 100, &quot;Connections&quot;)
    flag.Int64Var(&amp;duration, &quot;d&quot;, 0, &quot;Duration(s)&quot;)
    flag.Int64Var(&amp;limit, &quot;l&quot;, 0, &quot;Limit(ms)&quot;)
    flag.Parse()
 
    var count int64 = 0
    var errCount int64 = 0
    pool := make(chan interface{}, connections)
    exit := make(chan bool)
    var (
        min int64 = 0
        max int64 = 0
        sum int64 = 0
    )
 
    go func() {
        time.Sleep(time.Second * time.Duration(duration))
        exit &lt;- true
    }()
endD:
    for {
        select {
        case pool &lt;- nil:
            go func() {
                defer func() {
                    &lt;-pool
                }()
                resolver := &amp;net.Resolver{}
                now := time.Now()
                _, err := resolver.LookupIPAddr(context.Background(), host)
                use := time.Since(now).Nanoseconds() / int64(time.Millisecond)
                if min == 0 || use &lt; min {
                    min = use
                }
                if use &gt; max {
                    max = use
                }
                sum += use
                if limit &gt; 0 &amp;&amp; use &gt;= limit {
                    timeoutCount++
                }
                atomic.AddInt64(&amp;count, 1)
                if err != nil {
                    fmt.Println(err.Error())
                    atomic.AddInt64(&amp;errCount, 1)
                }
            }()
        case &lt;-exit:
            break endD
        }
    }
 
    fmt.Printf(&quot;request count\uFF1A%d\\nerror count\uFF1A%d\\n&quot;, count, errCount)
    fmt.Printf(&quot;request time\uFF1Amin(%dms) max(%dms) avg(%dms) timeout(%dn)\\n&quot;, min, max, sum/count, timeoutCount)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><p>\u76F4\u63A5go build\uFF0C\u4F1A\u6709\u4E00\u4E2Adns-test\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6</p><p>\u5C06\u6B64\u6587\u4EF6\u653E\u5230pod\u91CC\u9762 <code>#kubectl cp /root/dns-test web-7f5df76d5f-r76xx:/root -n kube-system</code> \u4E0B\u9762\u6765\u8FDB\u884C\u6D4B\u8BD5</p><p>\u8FDB\u884C\u538B\u6D4B 200\u4E2A\u5E76\u53D1,\u6301\u7EED30\u79D2,\u8BB0\u5F55\u8D85\u8FC75s\u7684\u8BF7\u6C42\u4E2A\u6570 /dns -host {service}.{namespace} -c 200 -d 30 -l 5000 \u7ED3\u679C\u5982\u4E0B\uFF1A 1.14.3\u7248\u672C\u539F\u751F\u96C6\u7FA4\u4E0D\u52A0\u53C2\u6570\u6D4B\u8BD5\u9ED8\u8BA4\u4F7F\u7528iptables\u6027\u80FD\u65B9\u9762\u53EF\u80FD\u4E0D\u662F\u90A3\u4E48\u597D\uFF0C\u4E0D\u8FC7\u5DF2\u7ECF\u6CA1\u67095s\u5EF6\u8FDF\u60C5\u51B5\u53D1\u751F\uFF0C\u6700\u9AD8\u8017\u65F62.9s <img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nodelocal2.png" alt="Coredns+Nodelocaldns cache\u89E3\u51B3Coredns\u57DF\u540D\u89E3\u6790\u5EF6\u8FDF" loading="lazy"></p><p>1.18.6\u539F\u751F\u96C6\u7FA4\u4E0D\u52A0\u53C2\u6570\u6D4B\u8BD5 \u7ED3\u8BBA\u6CA1\u6709\u5EF6\u8FDF\u64CD\u4F5C\u6700\u5927\u8017\u65F6\u4E3A0.5s\uFF0C\u9ED8\u8BA4\u91C7\u7528ipvs\uFF0C\u6548\u7387\u975E\u5E38\u9AD8 <img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nodelocal3.png" alt="Coredns+Nodelocaldns cache\u89E3\u51B3Coredns\u57DF\u540D\u89E3\u6790\u5EF6\u8FDF" loading="lazy"></p><p>\u6700\u540E\u603B\u7ED3\uFF1A \u901A\u8FC7\u6D4B\u8BD5\u7ED3\u679C\u5F97\u5230\u4EE5\u4E0B\u7ED3\u8BBA 1.14.3\u96C6\u7FA4\u4F7F\u7528coredns+nodelocaldns\u914D\u5408\u4F7F\u7528\u907F\u514D\u76F8\u540C\u4E94\u5143\u7EC4 DNS \u8BF7\u6C42\u7684\u5E76\u53D1\uFF0C\u589E\u52A0options single-request-reopen\uFF0C\u6700\u5927\u8017\u65F6\u964D\u4F4E\u52302.25s\u5DE6\u53F3\uFF0C\u4E0D\u4F1A\u51FA\u73B05s\u8D85\u65F6\u60C5\u51B5\uFF0C\u6548\u679C\u6700\u597D 1.18.6\u96C6\u7FA4\u4F7F\u7528coredns+nodelocaldns\u4E0D\u52A0\u53C2\u6570\u6D4B\u8BD5\u6700\u5927\u8017\u65F6\u964D\u4F4E\u52300.53s\u5DE6\u53F3\uFF0C\u6548\u7387\u660E\u663E\u63D0\u5347\uFF0C\u6548\u679C\u6700\u597D</p>`,78);function h(_,k){const e=r("ExternalLinkIcon");return i(),l(c,null,[o,n("blockquote",null,[n("p",null,[u,n("a",m,[d,p(e)])])]),g],64)}var v=a(t,[["render",h],["__file","nodelocaldns.html.vue"]]);export{v as default};
