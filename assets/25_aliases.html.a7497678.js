import{_ as r,r as l,c as p,a as s,b as e,F as b,d as n,e as t,o as i}from"./app.741e01f1.js";const o={},c=s("h1",{id:"_25-\u522B\u540D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_25-\u522B\u540D","aria-hidden":"true"},"#"),n(" 25. \u522B\u540D")],-1),u=n("Bash "),m=s("code",null,"\u522B\u540D",-1),h=n(" \u672C\u8D28\u4E0A\u4E0D\u5916\u4E4E\u662F\u952E\u76D8\u4E0A\u7684\u5FEB\u6377\u952E\uFF0C\u7F29\u5199\u5462\u662F\u907F\u514D\u8F93\u5165\u5F88\u957F\u7684\u547D\u4EE4\u4E32\u7684\u4E00\u79CD\u624B\u6BB5.\u4E3E\u4E2A\u4F8B\u5B50, \u5728 "),d={href:"http://tldp.org/LDP/abs/html/sample-bashrc.html",target:"_blank",rel:"noopener noreferrer"},_=n("~/.bashrc"),q=n(" \u6587\u4EF6\u4E2D\u5305\u542B\u522B\u540D "),x=s("code",null,'lm="ls -l | more',-1),f=n(", \u800C\u540E\u6BCF\u4E2A\u547D\u4EE4\u884C\u8F93\u5165\u7684 lm "),g={href:"http://tldp.org/LDP/abs/html/aliases.html#FTN.AEN18669",target:"_blank",rel:"noopener noreferrer"},k=n("[1]"),v=n(" \u5C06\u4F1A\u81EA\u52A8\u88AB\u66FF\u6362\u6210 "),N=s("code",null,"ls -l | more",-1),w=n(". \u8FD9\u53EF\u4EE5\u8282\u7701\u5927\u91CF\u7684\u547D\u4EE4\u884C\u8F93\u5165\u548C\u907F\u514D\u8BB0\u4F4F\u590D\u6742\u7684\u547D\u4EE4\u548C\u9009\u9879. \u8BBE\u5B9A\u522B\u540D "),y=s("code",null,'rm="rm -i"',-1),E=n(" (\u4EA4\u4E92\u7684\u5220\u9664\u6A21\u5F0F) \u9632\u6B62\u65E0\u610F\u7684\u5220\u9664\u91CD\u8981\u6587\u4EF6\uFF0C\u4E5F\u8BB8\u53EF\u4EE5\u5C11\u4E9B\u60B2\u75DB."),T=n("\u811A\u672C\u4E2D\u522B\u540D\u4F5C\u7528\u5341\u5206\u6709\u9650. \u5982\u679C\u522B\u540D\u53EF\u4EE5\u6709\u4E00\u4E9B C \u9884\u5904\u7406\u5668\u7684\u529F\u80FD\u4F1A\u66F4\u597D, \u4F8B\u5982\u5B8F\u6269\u5C55, \u4F46\u4E0D\u5E78\u7684\u662F bash \u522B\u540D\u4E2D\u6CA1\u6709\u6269\u5C55\u53C2\u6570. "),F={href:"http://tldp.org/LDP/abs/html/aliases.html#FTN.AEN18676",target:"_blank",rel:"noopener noreferrer"},z=n("[2]"),L=n(' \u53E6\u5916, \u811A\u672C\u5728 "\u590D\u5408\u7ED3\u6784" \u4E2D\u5E76\u4E0D\u80FD\u6269\u5C55\u81EA\u8EAB\u7684\u522B\u540D\uFF0C\u4F8B\u5982 '),R={href:"http://tldp.org/LDP/abs/html/tests.html#IFTHEN",target:"_blank",rel:"noopener noreferrer"},$=n("if/then"),D=n(", \u5FAA\u73AF\u548C\u51FD\u6570. \u53E6\u4E00\u4E2A\u9650\u5236\u662F\uFF0C\u522B\u540D\u4E0D\u80FD\u9012\u5F52\u6269\u5C55. \u57FA\u672C\u4E0A\u662F\u6211\u4EEC\u65E0\u8BBA\u600E\u4E48\u559C\u6B22\u7528\u522B\u540D\u90FD\u4E0D\u5982\u51FD\u6570 "),J={href:"http://tldp.org/LDP/abs/html/functions.html#FUNCTIONREF",target:"_blank",rel:"noopener noreferrer"},P=n("function"),X=n(" \u6765\u7684\u66F4\u6709\u6548."),A=t(`<p>\u6837\u4F8B 25-1. \u811A\u672C\u4E2D\u7684\u522B\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# alias.sh

shopt -s expand_aliases
# \u5FC5\u987B\u8BBE\u7F6E\u6B64\u9009\u9879, \u5426\u5219\u811A\u672C\u4E0D\u80FD\u522B\u540D\u6269\u5C55.


# \u9996\u5148\u6765\u70B9\u597D\u73A9\u7684\u4E1C\u897F.
alias Jesse_James=&#39;echo &quot;\\&quot;Alias Jesse James\\&quot; was a 1959 comedy starring Bob Hope.&quot;&#39;
Jesse_James

echo; echo; echo;

alias ll=&quot;ls -l&quot;
# \u53EF\u4EE5\u4EFB\u610F\u4F7F\u7528\u5355\u5F15\u53F7 (&#39;) \u6216\u53CC\u5F15\u53F7 (&quot;) \u628A\u522B\u540D\u62EC\u8D77\u6765.

echo &quot;Trying aliased \\&quot;ll\\&quot;:&quot;
ll /usr/X11R6/bin/mk*   #* \u522B\u540D\u53EF\u4EE5\u8FD0\u884C.

echo

directory=/usr/X11R6/bin/
prefix=mk*  # See if wild card causes problems.
echo &quot;Variables \\&quot;directory\\&quot; + \\&quot;prefix\\&quot; = $directory$prefix&quot;
echo

alias lll=&quot;ls -l $directory$prefix&quot;

echo &quot;Trying aliased \\&quot;lll\\&quot;:&quot;
lll         # \u6240\u6709 /usr/X11R6/bin \u6587\u4EF6\u6E05\u5355\u4EE5 mk \u5F00\u59CB.
# \u522B\u540D\u53EF\u4EE5\u5904\u7406\u8FDE\u7EED\u7684\u53D8\u91CF -- \u5305\u542B wild card -- o.k.




TRUE=1

echo

if [ TRUE ]
then
  alias rr=&quot;ls -l&quot;
  echo &quot;Trying aliased \\&quot;rr\\&quot; within if/then statement:&quot;
  rr /usr/X11R6/bin/mk*   #* \u7ED3\u679C\u62A5\u9519!
  # \u522B\u540D\u5728\u590D\u5408\u7684\u8868\u8FBE\u5F0F\u4E2D\u5E76\u6CA1\u6709\u751F\u6548.
  echo &quot;However, previously expanded alias still recognized:&quot;
  ll /usr/X11R6/bin/mk*
fi  

echo

count=0
while [ $count -lt 3 ]
do
  alias rrr=&quot;ls -l&quot;
  echo &quot;Trying aliased \\&quot;rrr\\&quot; within \\&quot;while\\&quot; loop:&quot;
  rrr /usr/X11R6/bin/mk*   #* \u8FD9\u91CC\u7684\u522B\u540D\u4E5F\u6CA1\u751F\u6548.
                           #  alias.sh: \u884C 57: rrr: \u547D\u4EE4\u672A\u627E\u5230
  let count+=1
done 

echo; echo

alias xyz=&#39;cat $0&#39;   # \u5217\u51FA\u4E86\u81EA\u8EAB.
                     # \u6CE8\u610F\u5F3A\u5F15.
xyz
#  \u8FD9\u770B\u8D77\u6765\u80FD\u5DE5\u4F5C,
#+ \u5C3D\u7BA1 bash \u6587\u6863\u4E0D\u4ECB\u610F\u8FD9\u4E48\u505A.
#
#  \u7136\u800C, Steve Jacobson \u6307\u51FA,
#+ &quot;$0&quot; \u53C2\u6570\u7684\u6269\u5C55\u5728\u4E0A\u9762\u7684\u522B\u540D\u7533\u660E\u540E\u7ACB\u523B\u751F\u6548.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><p>\u53D6\u6D88\u522B\u540D\u7684\u547D\u4EE4\u5220\u9664\u4E4B\u524D\u8BBE\u7F6E\u7684\u522B\u540D.</p><p>\u6837\u4F8B 25-2. unalias: \u8BBE\u7F6E\u548C\u53D6\u6D88\u4E00\u4E2A\u522B\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# unalias.sh

shopt -s expand_aliases  # \u5F00\u542F\u522B\u540D\u6269\u5C55.

alias llm=&#39;ls -al | more&#39;
llm

echo

unalias llm              # \u53D6\u6D88\u522B\u540D.
llm
# &#39;llm&#39; \u4E0D\u518D\u88AB\u8BC6\u522B\u540E\u7684\u62A5\u9519\u4FE1\u606F.

exit 0
bash$ ./unalias.sh
total 6
drwxrwxr-x    2 bozo     bozo         3072 Feb  6 14:04 .
drwxr-xr-x   40 bozo     bozo         2048 Feb  6 14:04 ..
-rwxr-xr-x    1 bozo     bozo          199 Feb  6 14:04 unalias.sh

./unalias.sh: llm: \u547D\u4EE4\u672A\u627E\u5230
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h4>`,6),B={href:"http://tldp.org/LDP/abs/html/aliases.html#AEN18669",target:"_blank",rel:"noopener noreferrer"},V=n("[1]"),I=n(" ... \u4F5C\u4E3A\u547D\u4EE4\u884C\u7684\u7B2C\u4E00\u4E2A\u8BCD. \u663E\u7136\u522B\u540D\u53EA\u5728\u547D\u4EE4\u7684\u5F00\u59CB\u6709\u610F\u4E49. "),C={href:"http://tldp.org/LDP/abs/html/aliases.html#AEN18676",target:"_blank",rel:"noopener noreferrer"},H=n("[2]"),S=n(" \u7136\u800C, \u522B\u540D\u53EF\u7528\u6765\u6269\u5C55\u4F4D\u7F6E\u53C2\u6570.");function U(O,j){const a=l("ExternalLinkIcon");return i(),p(b,null,[c,s("p",null,[u,m,h,s("a",d,[_,e(a)]),q,x,f,s("a",g,[k,e(a)]),v,N,w,y,E]),s("p",null,[T,s("a",F,[z,e(a)]),L,s("a",R,[$,e(a)]),D,s("a",J,[P,e(a)]),X]),A,s("p",null,[s("a",B,[V,e(a)]),I,s("a",C,[H,e(a)]),S])],64)}var K=r(o,[["render",U],["__file","25_aliases.html.vue"]]);export{K as default};
