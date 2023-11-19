import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as t,b as e,d as n,e as l,a as r}from"./app-e91902ff.js";const a={},o=e("h1",{id:"第二十二章-限制模式的shell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第二十二章-限制模式的shell","aria-hidden":"true"},"#"),n(" 第二十二章. 限制模式的Shell")],-1),v=e("h4",{id:"限制模式下被禁用的命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#限制模式下被禁用的命令","aria-hidden":"true"},"#"),n(" 限制模式下被禁用的命令")],-1),u=e("ul",null,[e("li",null,"在限制模式下运行一个脚本或部分脚本将禁用一些命令，尽管这些命令在正常模式下是可用的。这是个安全措施，可以限制脚本用户的权限，减少运行脚本可能带来的损害。")],-1),h=e("p",null,"被禁用的命令和功能：",-1),b=e("li",null,"使用 cd 来改变工作目录。",-1),m={href:"http://tldp.org/LDP/abs/html/othertypesv.html#ENVREF",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"读取或修改 $SHELLOPTS，shell环境选项。",-1),q=e("li",null,"输出重定向。",-1),p=e("li",null,"调用包含 / 的命令。",-1),L={href:"http://tldp.org/LDP/abs/html/internal.html#EXECREF",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"其他各种会造成混乱或颠覆脚本用途的命令。",-1),E=e("li",null,"在脚本中跳出限制模式。",-1),x=r(`<h4 id="例-22-1-在限制模式运行脚本" tabindex="-1"><a class="header-anchor" href="#例-22-1-在限制模式运行脚本" aria-hidden="true">#</a> 例 22-1. 在限制模式运行脚本</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

#  在脚本开头用&quot;#!/bin/bash -r&quot;
#+ 可以让整个脚本在限制模式运行。

echo

echo &quot;改变目录。&quot;
cd /usr/local
echo &quot;现在是在 \`pwd\`&quot;
echo &quot;回到家目录。&quot;
cd
echo &quot;现在是在 \`pwd\`&quot;
echo

# 到此为止一切都是正常的，非限制模式。

set -r
# set --restricted 效果相同。
echo &quot;==&gt; 现在是限制模式 &lt;==&quot;

echo
echo

echo &quot;在限制模式试图改变目录。&quot;
cd ..
echo &quot;依旧在 \`pwd\`&quot;

echo
echo

echo &quot;\\$SHELL = $SHELL&quot;
echo &quot;试图在限制模式改变Shell 。&quot;
SHELL=&quot;/bin/ash&quot;
echo
echo &quot;\\$SHELL= $SHELL&quot;

echo
echo

echo &quot;试图在限制模式重定向输出内容。&quot;
ls -l /usr/bin &gt; bin.files
ls -l bin.files    # 尝试列出试图创建的文件。

echo

exit 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function S(g,H){const i=d("ExternalLinkIcon");return c(),t("div",null,[o,v,u,h,e("ul",null,[b,e("li",null,[n("修改 $PATH, $SHELL, $BASH_ENV 或 $ENV 等"),e("a",m,[n("环境变量"),l(i)])]),_,q,p,e("li",null,[n("调用 "),e("a",L,[n("exec"),l(i)]),n(" 来替代shell进程。")]),f,E]),x])}const V=s(a,[["render",S],["__file","22_Restricted_Shells.html.vue"]]);export{V as default};
