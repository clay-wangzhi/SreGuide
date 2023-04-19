import{_ as l,r,c as t,a as n,b as a,F as c,d as s,e as o,o as i}from"./app.89bc646c.js";const p={},b=n("h1",{id:"\u7B2C\u4E8C\u5341\u4E8C\u7AE0-\u9650\u5236\u6A21\u5F0F\u7684shell",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C\u4E8C\u5341\u4E8C\u7AE0-\u9650\u5236\u6A21\u5F0F\u7684shell","aria-hidden":"true"},"#"),s(" \u7B2C\u4E8C\u5341\u4E8C\u7AE0. \u9650\u5236\u6A21\u5F0F\u7684Shell")],-1),u=n("h4",{id:"\u9650\u5236\u6A21\u5F0F\u4E0B\u88AB\u7981\u7528\u7684\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9650\u5236\u6A21\u5F0F\u4E0B\u88AB\u7981\u7528\u7684\u547D\u4EE4","aria-hidden":"true"},"#"),s(" \u9650\u5236\u6A21\u5F0F\u4E0B\u88AB\u7981\u7528\u7684\u547D\u4EE4")],-1),h=n("ul",null,[n("li",null,"\u5728\u9650\u5236\u6A21\u5F0F\u4E0B\u8FD0\u884C\u4E00\u4E2A\u811A\u672C\u6216\u90E8\u5206\u811A\u672C\u5C06\u7981\u7528\u4E00\u4E9B\u547D\u4EE4\uFF0C\u5C3D\u7BA1\u8FD9\u4E9B\u547D\u4EE4\u5728\u6B63\u5E38\u6A21\u5F0F\u4E0B\u662F\u53EF\u7528\u7684\u3002\u8FD9\u662F\u4E2A\u5B89\u5168\u63AA\u65BD\uFF0C\u53EF\u4EE5\u9650\u5236\u811A\u672C\u7528\u6237\u7684\u6743\u9650\uFF0C\u51CF\u5C11\u8FD0\u884C\u811A\u672C\u53EF\u80FD\u5E26\u6765\u7684\u635F\u5BB3\u3002")],-1),m=n("p",null,"\u88AB\u7981\u7528\u7684\u547D\u4EE4\u548C\u529F\u80FD\uFF1A",-1),d=n("li",null,"\u4F7F\u7528 cd \u6765\u6539\u53D8\u5DE5\u4F5C\u76EE\u5F55\u3002",-1),_=s("\u4FEE\u6539 $PATH, $SHELL, $BASH_ENV \u6216 $ENV \u7B49"),q={href:"http://tldp.org/LDP/abs/html/othertypesv.html#ENVREF",target:"_blank",rel:"noopener noreferrer"},L=s("\u73AF\u5883\u53D8\u91CF"),E=n("li",null,"\u8BFB\u53D6\u6216\u4FEE\u6539 $SHELLOPTS\uFF0Cshell\u73AF\u5883\u9009\u9879\u3002",-1),f=n("li",null,"\u8F93\u51FA\u91CD\u5B9A\u5411\u3002",-1),x=n("li",null,"\u8C03\u7528\u5305\u542B / \u7684\u547D\u4EE4\u3002",-1),S=s("\u8C03\u7528 "),g={href:"http://tldp.org/LDP/abs/html/internal.html#EXECREF",target:"_blank",rel:"noopener noreferrer"},H=s("exec"),$=s(" \u6765\u66FF\u4EE3shell\u8FDB\u7A0B\u3002"),v=n("li",null,"\u5176\u4ED6\u5404\u79CD\u4F1A\u9020\u6210\u6DF7\u4E71\u6216\u98A0\u8986\u811A\u672C\u7528\u9014\u7684\u547D\u4EE4\u3002",-1),N=n("li",null,"\u5728\u811A\u672C\u4E2D\u8DF3\u51FA\u9650\u5236\u6A21\u5F0F\u3002",-1),V=o(`<h4 id="\u4F8B-22-1-\u5728\u9650\u5236\u6A21\u5F0F\u8FD0\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u4F8B-22-1-\u5728\u9650\u5236\u6A21\u5F0F\u8FD0\u884C\u811A\u672C" aria-hidden="true">#</a> \u4F8B 22-1. \u5728\u9650\u5236\u6A21\u5F0F\u8FD0\u884C\u811A\u672C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

#  \u5728\u811A\u672C\u5F00\u5934\u7528&quot;#!/bin/bash -r&quot;
#+ \u53EF\u4EE5\u8BA9\u6574\u4E2A\u811A\u672C\u5728\u9650\u5236\u6A21\u5F0F\u8FD0\u884C\u3002

echo

echo &quot;\u6539\u53D8\u76EE\u5F55\u3002&quot;
cd /usr/local
echo &quot;\u73B0\u5728\u662F\u5728 \`pwd\`&quot;
echo &quot;\u56DE\u5230\u5BB6\u76EE\u5F55\u3002&quot;
cd
echo &quot;\u73B0\u5728\u662F\u5728 \`pwd\`&quot;
echo

# \u5230\u6B64\u4E3A\u6B62\u4E00\u5207\u90FD\u662F\u6B63\u5E38\u7684\uFF0C\u975E\u9650\u5236\u6A21\u5F0F\u3002

set -r
# set --restricted \u6548\u679C\u76F8\u540C\u3002
echo &quot;==&gt; \u73B0\u5728\u662F\u9650\u5236\u6A21\u5F0F &lt;==&quot;

echo
echo

echo &quot;\u5728\u9650\u5236\u6A21\u5F0F\u8BD5\u56FE\u6539\u53D8\u76EE\u5F55\u3002&quot;
cd ..
echo &quot;\u4F9D\u65E7\u5728 \`pwd\`&quot;

echo
echo

echo &quot;\\$SHELL = $SHELL&quot;
echo &quot;\u8BD5\u56FE\u5728\u9650\u5236\u6A21\u5F0F\u6539\u53D8Shell \u3002&quot;
SHELL=&quot;/bin/ash&quot;
echo
echo &quot;\\$SHELL= $SHELL&quot;

echo
echo

echo &quot;\u8BD5\u56FE\u5728\u9650\u5236\u6A21\u5F0F\u91CD\u5B9A\u5411\u8F93\u51FA\u5185\u5BB9\u3002&quot;
ls -l /usr/bin &gt; bin.files
ls -l bin.files    # \u5C1D\u8BD5\u5217\u51FA\u8BD5\u56FE\u521B\u5EFA\u7684\u6587\u4EF6\u3002

echo

exit 0

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,2);function k(B,F){const e=r("ExternalLinkIcon");return i(),t(c,null,[b,u,h,m,n("ul",null,[d,n("li",null,[_,n("a",q,[L,a(e)])]),E,f,x,n("li",null,[S,n("a",g,[H,a(e)]),$]),v,N]),V],64)}var R=l(p,[["render",k],["__file","22_Restricted_Shells.html.vue"]]);export{R as default};
