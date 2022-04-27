import{_ as t,r as o,c,a as n,b as a,F as r,e as p,d as s,o as l}from"./app.ac0f71d5.js";const i={},d=p(`<h1 id="_7-5-\u725B\u5200\u5C0F\u8BD5" tabindex="-1"><a class="header-anchor" href="#_7-5-\u725B\u5200\u5C0F\u8BD5" aria-hidden="true">#</a> 7.5 \u725B\u5200\u5C0F\u8BD5</h1><p>\u7CFB\u7EDF\u6587\u4EF6 <code>xinitrc</code> \u53EF\u4EE5\u7528\u6765\u542F\u52A8\u8F6F\u4EF6 X Server\u3002\u8BE5\u6587\u4EF6\u5305\u542B\u4E86\u8BB8\u591A <code>if/then</code> \u6D4B\u8BD5\u7ED3\u6784\u3002\u4E0B\u9762\u7684\u4EE3\u7801\u6458\u5F55\u81EA\u8F83\u65E9\u7248\u672C\u7684 <code>xinitrc</code>\uFF08\u5927\u7EA6\u5728 Red Hat 7.1 \u7248\u672C\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> -f <span class="token environment constant">$HOME</span>/.Xclients <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">exec</span> <span class="token environment constant">$HOME</span>/.Xclients
<span class="token keyword">elif</span> <span class="token punctuation">[</span> -f /etc/X11/xinit/Xclients <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">exec</span> /etc/X11/xinit/Xclients
<span class="token keyword">else</span>
    <span class="token comment"># \u5B89\u5168\u5206\u652F\u3002\u5C3D\u7BA1\u7A0B\u5E8F\u4E0D\u4F1A\u6267\u884C\u8FD9\u4E2A\u5206\u652F\u3002</span>
    <span class="token comment"># \uFF08\u6211\u4EEC\u5728 Xclients \u4E2D\u4E5F\u63D0\u4F9B\u4E86\u76F8\u540C\u7684\u673A\u5236\uFF09\u589E\u5F3A\u7A0B\u5E8F\u53EF\u9760\u6027\u3002</span>
    xclock -geometry 100x100-5+5 <span class="token operator">&amp;</span>
    xterm -geometry 80x50-50+150 <span class="token operator">&amp;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> -f /usr/bin/netscape -a -f /usr/share/doc/HTML/index.html <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            netscape /usr/share/doc/HTML/index.html
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,3),_=s("\u8BD5\u7740\u89E3\u91CA\u4EE3\u7801\u7247\u6BB5\u4E2D\u7684\u6761\u4EF6\u6D4B\u8BD5\u7ED3\u6784, \u7136\u540E\u8BD5\u7740\u5728 /etc/X11/xinit/xinitrc \u67E5\u770B\u6700\u65B0\u7248\u672C\uFF0C\u5E76\u4E14\u5206\u6790\u5176\u4E2D\u7684 if/then \u6761\u4EF6\u6D4B\u8BD5\u7ED3\u6784\u3002\u4E3A\u4E86\u66F4\u597D\u7684\u8FDB\u884C\u5206\u6790\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u7EE7\u7EED\u9605\u8BFB\u540E\u9762\u7AE0\u8282\u4E2D\u5BF9 "),u={href:"http://tldp.org/LDP/abs/html/textproc.html#GREPREF",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"grep",-1),m=s("\uFF0C"),h={href:"http://tldp.org/LDP/abs/html/sedawk.html#SEDREF",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"sed",-1),f=s(" \u548C "),x={href:"http://tldp.org/LDP/abs/html/regexp.html#REGEXREF",target:"_blank",rel:"noopener noreferrer"},g=s("\u6B63\u5219\u8868\u8FBE\u5F0F"),y=s(" \u7684\u8BA8\u8BBA\u3002");function w(E,v){const e=o("ExternalLinkIcon");return l(),c(r,null,[d,n("p",null,[_,n("a",u,[k,a(e)]),m,n("a",h,[b,a(e)]),f,n("a",x,[g,a(e)]),y])],64)}var L=t(i,[["render",w],["__file","07_5_testing_your_knowledge_of_tests.html.vue"]]);export{L as default};
