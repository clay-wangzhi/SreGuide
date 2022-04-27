import{_ as l,r as a,c as o,a as t,b as s,F as r,d as e,e as i,o as d}from"./app.ac0f71d5.js";const _={},c=t("h1",{id:"_33-\u9009\u9879",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_33-\u9009\u9879","aria-hidden":"true"},"#"),e(" 33 \u9009\u9879")],-1),h=t("p",null,"\u9009\u9879\u7528\u6765\u66F4\u6539shell\u548C\u811A\u672C\u7684\u884C\u4E3A.",-1),p={href:"http://tldp.org/LDP/abs/html/internal.html#SETREF",target:"_blank",rel:"noopener noreferrer"},g=e("set"),b=e("\u547D\u4EE4\u7528\u6765\u6253\u5F00\u811A\u672C\u4E2D\u7684\u9009\u9879. \u4F60\u53EF\u4EE5\u5728\u811A\u672C\u4E2D\u4EFB\u4F55\u4F60\u60F3\u8BA9\u9009\u9879\u751F\u6548\u7684\u5730\u65B9\u63D2\u5165"),f=t("strong",null,"set -o option-name",-1),x=e(", \u6216\u8005\u4F7F\u7528\u66F4\u7B80\u5355\u7684\u5F62\u5F0F, "),m=t("strong",null,"set -option-abbrev",-1),u=e(". \u8FD9\u4E24\u79CD\u5F62\u5F0F\u662F\u7B49\u4EF7\u7684."),y=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

set -o verbose
# # \u6253\u5370\u51FA\u6240\u6709\u6267\u884C\u524D\u7684\u547D\u4EE4.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

set -v
# \u4E0E\u4E0A\u8FB9\u7684\u4F8B\u5B50\u5177\u6709\u76F8\u540C\u7684\u6548\u679C.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra" loading="lazy"> \u5982\u679C\u4F60\u60F3\u5728\u811A\u672C\u4E2D\u7981\u7528\u67D0\u4E2A\u9009\u9879, \u53EF\u4EE5\u4F7F\u7528<strong>set +o option-name</strong>\u6216<strong>set +option-abbrev</strong>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
set -o verbose
# \u6FC0\u6D3B\u547D\u4EE4\u56DE\u663E.
command
...
command

set +o verbose
# \u7981\u7528\u547D\u4EE4\u56DE\u663E.
command
# \u6CA1\u6709\u547D\u4EE4\u56DE\u663E\u4E86.

set -v
# \u6FC0\u6D3B\u547D\u4EE4\u56DE\u663E.
command
...
command

set +v
# \u7981\u7528\u547D\u4EE4\u56DE\u663E.
command

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u8FD8\u6709\u53E6\u4E00\u79CD\u53EF\u4EE5\u5728\u811A\u672C\u4E2D\u542F\u7528\u9009\u9879\u7684\u65B9\u6CD5, \u90A3\u5C31\u662F\u5728\u811A\u672C\u5934\u90E8, #!\u7684\u540E\u8FB9\u76F4\u63A5\u6307\u5B9A\u9009\u9879.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash -x
#
# \u4E0B\u8FB9\u662F\u811A\u672C\u7684\u4E3B\u8981\u5185\u5BB9.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u4ECE\u547D\u4EE4\u884C\u4E2D\u6253\u5F00\u811A\u672C\u7684\u9009\u9879. \u67D0\u4E9B\u4E0D\u80FD\u4E0E<strong>set</strong>\u547D\u4EE4\u4E00\u8D77\u7528\u7684\u9009\u9879\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u6765\u6253\u5F00. - i\u5C31\u662F\u5176\u4E2D\u4E4B\u4E00, \u8FD9\u4E2A\u9009\u9879\u7528\u6765\u5F3A\u5236\u811A\u672C\u4EE5\u4EA4\u4E92\u7684\u65B9\u5F0F\u8FD0\u884C.</p><p><strong>bash - v script - name</strong></p><p><strong>bash - o verbose script - name</strong></p><p>\u4E0B\u8868\u5217\u51FA\u4E86\u4E00\u4E9B\u6709\u7528\u7684\u9009\u9879. \u5B83\u4EEC\u90FD\u53EF\u4EE5\u4F7F\u7528\u7F29\u5199\u7684\u5F62\u5F0F\u6765\u6307\u5B9A(\u5F00\u5934\u52A0\u4E00\u4E2A\u7834\u6298\u53F7), \u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B8C\u6574\u540D\u5B57\u6765\u6307\u5B9A(\u5F00\u5934\u52A0\u4E0A\u53CC\u7834\u6298\u53F7, \u6216\u8005\u4F7F\u7528-o\u9009\u9879\u6765\u6307\u5B9A).</p><h2 id="bash-\u9009\u9879\u8868" tabindex="-1"><a class="header-anchor" href="#bash-\u9009\u9879\u8868" aria-hidden="true">#</a> Bash \u9009\u9879\u8868</h2>`,11),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"\u7F29\u5199"),t("th",{style:{"text-align":"left"}},"\u540D\u79F0"),t("th",{style:{"text-align":"left"}},"\u4F5C\u7528")])],-1),L=t("tr",null,[t("td",{style:{"text-align":"left"}},"-B"),t("td",{style:{"text-align":"left"}},"brace expansion"),t("td",{style:{"text-align":"left"}},[e("\u5F00\u542F"),t("a",{href:""},"\u5927\u62EC\u53F7\u5C55\u5F00"),e("(\u9ED8\u8BA4 setting = on)")])],-1),P=t("tr",null,[t("td",{style:{"text-align":"left"}},"+B"),t("td",{style:{"text-align":"left"}},"brace expansion"),t("td",{style:{"text-align":"left"}},"\u5173\u95ED\u5927\u62EC\u53F7\u5C55\u5F00")],-1),k=t("tr",null,[t("td",{style:{"text-align":"left"}},"-C"),t("td",{style:{"text-align":"left"}},"noclobber"),t("td",{style:{"text-align":"left"}},"\u9632\u6B62\u91CD\u5B9A\u5411\u65F6\u8986\u76D6\u6587\u4EF6(\u53EF\u80FD\u4F1A\u88AB>|\u8986\u76D6)")],-1),E=t("tr",null,[t("td",{style:{"text-align":"left"}},"-D"),t("td",{style:{"text-align":"left"}},"(none)"),t("td",{style:{"text-align":"left"}},"\u5217\u51FA\u7528\u53CC\u5F15\u53F7\u5F15\u7528\u8D77\u6765\u7684, \u4EE5$\u4E3A\u524D\u7F00\u7684\u5B57\u7B26\u4E32, \u4F46\u662F\u4E0D\u6267\u884C\u811A\u672C\u4E2D\u7684\u547D\u4EE4")],-1),D=t("tr",null,[t("td",{style:{"text-align":"left"}},"-a"),t("td",{style:{"text-align":"left"}},"all export"),t("td",{style:{"text-align":"left"}},"export(\u5BFC\u51FA)\u6240\u6709\u5B9A\u4E49\u8FC7\u7684\u53D8\u91CF")],-1),S=t("tr",null,[t("td",{style:{"text-align":"left"}},"-b"),t("td",{style:{"text-align":"left"}},"notify"),t("td",{style:{"text-align":"left"}},"\u5F53\u540E\u53F0\u8FD0\u884C\u7684\u4F5C\u4E1A\u7EC8\u6B62\u65F6, \u7ED9\u51FA\u901A\u77E5(\u811A\u672C\u4E2D\u5E76\u4E0D\u5E38\u89C1)")],-1),O=t("tr",null,[t("td",{style:{"text-align":"left"}},"-c ..."),t("td",{style:{"text-align":"left"}},"(none)"),t("td",{style:{"text-align":"left"}},"\u4ECE...\u4E2D\u8BFB\u53D6\u547D\u4EE4")],-1),B=t("td",{style:{"text-align":"left"}},"checkjobs",-1),R=t("td",{style:{"text-align":"left"}},"(none)",-1),F={style:{"text-align":"left"}},T=e("\u901A\u77E5\u6709\u6D3B\u8DC3shell"),N={href:"http://tldp.org/LDP/abs/html/x9644.html#JOBSREF",target:"_blank",rel:"noopener noreferrer"},I=e("\u4EFB\u52A1"),A=e("\u7684\u7528\u6237\u9000\u51FA\u3002"),C={href:"http://tldp.org/LDP/abs/html/bashver4.html#BASH4REF",target:"_blank",rel:"noopener noreferrer"},V=e("Bash 4"),X=e('\u7248\u672C\u4E2D\u5F15\u5165\uFF0C\u4ECD\u7136\u5904\u4E8E"\u5B9E\u9A8C"\u9636\u6BB5. \u7528\u6CD5:shopt -s checkjobs .(\u6CE8\u610F\uFF1A\u53EF\u80FD\u4F1Ahang\uFF01'),H=t("td",{style:{"text-align":"left"}},"-e",-1),U=t("td",{style:{"text-align":"left"}},"errexit",-1),j={style:{"text-align":"left"}},w=e("\u5F53\u811A\u672C\u53D1\u751F\u7B2C\u4E00\u4E2A\u9519\u8BEF\u65F6, \u5C31\u9000\u51FA\u811A\u672C, \u6362\u79CD\u8BF4\u6CD5\u5C31\u662F, \u5F53\u4E00\u4E2A\u547D\u4EE4\u8FD4\u56DE\u975E\u96F6\u503C\u65F6, \u5C31\u9000\u51FA\u811A\u672C(\u9664\u4E86"),z={href:"http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF",target:"_blank",rel:"noopener noreferrer"},G=e("until"),J=e("\u6216"),M={href:"http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF",target:"_blank",rel:"noopener noreferrer"},W=e("while loops"),$=e(", "),q={href:"http://tldp.org/LDP/abs/html/testconstructs.html#TESTCONSTRUCTS1",target:"_blank",rel:"noopener noreferrer"},K=e("if-tests"),Q=e(", "),Y={href:"http://tldp.org/LDP/abs/html/list-cons.html#LCONS1",target:"_blank",rel:"noopener noreferrer"},Z=e("list constructs"),tt=e(")"),et=t("tr",null,[t("td",{style:{"text-align":"left"}},"-f"),t("td",{style:{"text-align":"left"}},"noglob"),t("td",{style:{"text-align":"left"}},"\u7981\u7528\u6587\u4EF6\u540D\u6269\u5C55(\u5C31\u662F\u7981\u7528globbing)")],-1),nt=t("td",{style:{"text-align":"left"}},"globstar",-1),st={style:{"text-align":"left"}},lt={href:"http://tldp.org/LDP/abs/html/bashver4.html#GLOBSTARREF",target:"_blank",rel:"noopener noreferrer"},at=e("globbing star-match"),ot={style:{"text-align":"left"}},rt=e("\u6253\u5F00"),it={href:"http://tldp.org/LDP/abs/html/globbingref.html",target:"_blank",rel:"noopener noreferrer"},dt=e("globbling"),_t=e("\u64CD\u4F5C\u7B26(Bash "),ct={href:"http://tldp.org/LDP/abs/html/bashver4.html#BASH4REF",target:"_blank",rel:"noopener noreferrer"},ht=e("4+"),pt=e("). \u4F7F\u7528\u65B9\u6CD5\uFF1Ashopt -s globstar"),gt=t("tr",null,[t("td",{style:{"text-align":"left"}},"-i"),t("td",{style:{"text-align":"left"}},"interactive"),t("td",{style:{"text-align":"left"}},"\u8BA9\u811A\u672C\u4EE5\u4EA4\u4E92\u6A21\u5F0F\u8FD0\u884C")],-1),bt=t("tr",null,[t("td",{style:{"text-align":"left"}},"-n"),t("td",{style:{"text-align":"left"}},"noexec"),t("td",{style:{"text-align":"left"}},"\u4ECE\u811A\u672C\u4E2D\u8BFB\u53D6\u547D\u4EE4, \u4F46\u662F\u4E0D\u6267\u884C\u5B83\u4EEC(\u505A\u8BED\u6CD5\u68C0\u67E5)")],-1),ft=t("tr",null,[t("td",{style:{"text-align":"left"}},"-o Option-Name"),t("td",{style:{"text-align":"left"}},"(none)"),t("td",{style:{"text-align":"left"}},"\u8C03\u7528Option-Name\u9009\u9879")],-1),xt=t("td",{style:{"text-align":"left"}},"-o posix",-1),mt=t("td",{style:{"text-align":"left"}},"POSIX",-1),ut={style:{"text-align":"left"}},yt=e("\u4FEE\u6539Bash\u6216\u88AB\u8C03\u7528\u811A\u672C\u7684\u884C\u4E3A, \u4F7F\u5176\u7B26\u5408"),vt={href:"http://tldp.org/LDP/abs/html/sha-bang.html#POSIX2REF",target:"_blank",rel:"noopener noreferrer"},Lt=e("POSIX"),Pt=e("\u6807\u51C6."),kt=t("td",{style:{"text-align":"left"}},"-o pipefail",-1),Et=t("td",{style:{"text-align":"left"}},"pipe failure",-1),Dt={style:{"text-align":"left"}},St=e("\u521B\u5EFA\u4E00\u4E2A\u7BA1\u9053\u53BB\u8FD4\u56DE\u6700\u540E\u4E00\u6761\u547D\u4EE4\u7684"),Ot={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},Bt=e("\u9000\u51FA\u72B6\u6001\u7801"),Rt=e("\uFF0C\u8FD9\u4E2A\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u975E0\u7684\u8FD4\u56DE\u503C"),Ft=t("tr",null,[t("td",{style:{"text-align":"left"}},"-p"),t("td",{style:{"text-align":"left"}},"privileged"),t("td",{style:{"text-align":"left"}},'\u4EE5"suid"\u8EAB\u4EFD\u6765\u8FD0\u884C\u811A\u672C(\u5C0F\u5FC3!)')],-1),Tt=t("td",{style:{"text-align":"left"}},"-r",-1),Nt=t("td",{style:{"text-align":"left"}},"restricted",-1),It={style:{"text-align":"left"}},At=e("\u4EE5\u53D7\u9650\u6A21\u5F0F\u6765\u8FD0\u884C\u811A\u672C(\u53C2\u8003 "),Ct={href:"http://tldp.org/LDP/abs/html/restricted-sh.html",target:"_blank",rel:"noopener noreferrer"},Vt=e("22"),Xt=e(")."),Ht=t("tr",null,[t("td",{style:{"text-align":"left"}},"-s"),t("td",{style:{"text-align":"left"}},"stdin"),t("td",{style:{"text-align":"left"}},"\u4ECEstdin \u4E2D\u8BFB\u53D6\u547D\u4EE4")],-1),Ut=t("tr",null,[t("td",{style:{"text-align":"left"}},"-t"),t("td",{style:{"text-align":"left"}},"(none)"),t("td",{style:{"text-align":"left"}},"\u6267\u884C\u5B8C\u7B2C\u4E00\u4E2A\u547D\u4EE4\u4E4B\u540E, \u5C31\u9000\u51FA")],-1),jt=t("tr",null,[t("td",{style:{"text-align":"left"}},"-u"),t("td",{style:{"text-align":"left"}},"nounset"),t("td",{style:{"text-align":"left"}},"\u5982\u679C\u5C1D\u8BD5\u4F7F\u7528\u4E86\u672A\u5B9A\u4E49\u7684\u53D8\u91CF, \u5C31\u4F1A\u8F93\u51FA\u4E00\u4E2A\u9519\u8BEF\u6D88\u606F, \u7136\u540E\u5F3A\u5236\u9000\u51FA")],-1),wt=t("tr",null,[t("td",{style:{"text-align":"left"}},"-v"),t("td",{style:{"text-align":"left"}},"verbose"),t("td",{style:{"text-align":"left"}},"\u5728\u6267\u884C\u6BCF\u4E2A\u547D\u4EE4\u4E4B\u524D, \u628A\u6BCF\u4E2A\u547D\u4EE4\u6253\u5370\u5230stdout\u4E0A")],-1),zt=t("tr",null,[t("td",{style:{"text-align":"left"}},"-x"),t("td",{style:{"text-align":"left"}},"xtrace"),t("td",{style:{"text-align":"left"}},"\u4E0E-v\u9009\u9879\u7C7B\u4F3C, \u4F46\u662F\u4F1A\u6253\u5370\u5B8C\u6574\u547D\u4EE4")],-1),Gt=t("td",{style:{"text-align":"left"}},"-",-1),Jt=t("td",{style:{"text-align":"left"}},"(none)",-1),Mt={style:{"text-align":"left"}},Wt=e("\u9009\u9879\u7ED3\u675F\u6807\u5FD7. \u540E\u9762\u7684\u53C2\u6570\u4E3A"),$t={href:"http://tldp.org/LDP/abs/html/internalvariables.html#POSPARAMREF",target:"_blank",rel:"noopener noreferrer"},qt=e("\u4F4D\u7F6E\u53C2\u6570"),Kt=e("."),Qt=t("tr",null,[t("td",{style:{"text-align":"left"}},"--"),t("td",{style:{"text-align":"left"}},"(none)"),t("td",{style:{"text-align":"left"}},"unset(\u91CA\u653E)\u4F4D\u7F6E\u53C2\u6570. \u5982\u679C\u6307\u5B9A\u4E86\u53C2\u6570\u5217\u8868(-- arg1 arg2), \u90A3\u4E48\u4F4D\u7F6E \u53C2\u6570\u5C06\u4F1A\u4F9D\u6B21\u8BBE\u7F6E\u5230\u53C2\u6570\u5217\u8868\u4E2D.")],-1);function Yt(Zt,te){const n=a("ExternalLinkIcon");return d(),o(r,null,[c,h,t("p",null,[t("a",p,[g,s(n)]),b,f,x,m,u]),y,t("table",null,[v,t("tbody",null,[L,P,k,E,D,S,O,t("tr",null,[B,R,t("td",F,[T,t("a",N,[I,s(n)]),A,t("a",C,[V,s(n)]),X])]),t("tr",null,[H,U,t("td",j,[w,t("a",z,[G,s(n)]),J,t("a",M,[W,s(n)]),$,t("a",q,[K,s(n)]),Q,t("a",Y,[Z,s(n)]),tt])]),et,t("tr",null,[nt,t("td",st,[t("a",lt,[at,s(n)])]),t("td",ot,[rt,t("a",it,[dt,s(n)]),_t,t("a",ct,[ht,s(n)]),pt])]),gt,bt,ft,t("tr",null,[xt,mt,t("td",ut,[yt,t("a",vt,[Lt,s(n)]),Pt])]),t("tr",null,[kt,Et,t("td",Dt,[St,t("a",Ot,[Bt,s(n)]),Rt])]),Ft,t("tr",null,[Tt,Nt,t("td",It,[At,t("a",Ct,[Vt,s(n)]),Xt])]),Ht,Ut,jt,wt,zt,t("tr",null,[Gt,Jt,t("td",Mt,[Wt,t("a",$t,[qt,s(n)]),Kt])]),Qt])])],64)}var ne=l(_,[["render",Yt],["__file","33_options.html.vue"]]);export{ne as default};
