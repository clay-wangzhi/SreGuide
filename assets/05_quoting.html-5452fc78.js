import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c,a as t,d as r,w as i,b as e,e as a}from"./app-6b705441.js";const h={},u=t("h1",{id:"第五章-引用",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#第五章-引用","aria-hidden":"true"},"#"),e(" 第五章 引用")],-1),b=t("h3",{id:"本章目录",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#本章目录","aria-hidden":"true"},"#"),e(" 本章目录")],-1),v=t("hr",null,null,-1),m={href:"http://tldp.org/LDP/abs/html/special-chars.html",target:"_blank",rel:"noopener noreferrer"},_={href:"http://tldp.org/LDP/abs/html/regexp.html#REGEXREF",target:"_blank",rel:"noopener noreferrer"},p={href:"http://tldp.org/LDP/abs/html/globbingref.html",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ ls -l [Vv]*
-rw-rw-r--    1 bozo  bozo       324 Apr  2 15:05 VIEWDATA.BAT
-rw-rw-r--    1 bozo  bozo       507 May  4 14:25 vartrace.sh
-rw-rw-r--    1 bozo  bozo       539 Apr 14 17:11 viewdata.sh

bash$ ls -l &#39;[Vv]*&#39;
ls: [Vv]*: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以看到，提示不存在该文件。这里的<code>&#39;[Vv]*</code>被当成了文件名。 在日常沟通和写作中，当我们引用一个短语的时候，我们会将它单独隔开并赋予它特殊的意义，而在bash脚本中，当我们<em>引用</em>一个字符串，意味着保留它的<em>字面量</em>。</p></blockquote><p>很多程序和公用代码会展开被引用字符串中的特殊字符。引用的一个重用用途是保护Shell中的命令行参数，但仍然允许调用的程序扩展它。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ grep &#39;[Ff]irst&#39; *.txt
file1.txt:This is the first line of file1.txt.
file2.txt:This is the First line of file2.txt.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在所有.txt文件中找出包含first或者First字符串的行</p></blockquote><p>注意，不加引号的 <code>grep [Ff]irst *.txt</code> 在Bash下也同样有效。[^1]</p>`,6),f={href:"http://tldp.org/LDP/abs/html/internal.html#ECHOREF",target:"_blank",rel:"noopener noreferrer"},x=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ echo $(ls -l)
total 8 -rw-rw-r-- 1 bo bo 13 Aug 21 12:57 t.sh -rw-rw-r-- 1 bo bo 78 Aug 21 12:57 u.sh


bash$ echo &quot;$(ls -l)&quot;
total 8
 -rw-rw-r--  1 bo bo  13 Aug 21 12:57 t.sh
 -rw-rw-r--  1 bo bo  78 Aug 21 12:57 u.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[^1]: 前提是当前目录下有文件名为First或first的文件。这也是使用引用的另一个原因。（感谢 Harald Koenig 指出了这一点）</p>`,2);function w(k,q){const l=s("RouterLink"),n=s("ExternalLinkIcon");return d(),c("div",null,[u,b,t("ul",null,[t("li",null,[r(l,{to:"/code/shell/part2/05_1_quoting_variables.html"},{default:i(()=>[e("5.1 引用变量")]),_:1})]),t("li",null,[r(l,{to:"/code/shell/part2/05_2_escaping.html"},{default:i(()=>[e("5.2 转义")]),_:1})])]),v,t("p",null,[e("引用就是将一个字符串用引号括起来。这样做是为了保护Shell/Shell脚本中被重新解释过或带扩展功能的"),t("a",m,[e("特殊字符"),r(n)]),e("（如果一个字符带有其特殊意义而不仅仅是字面量的话，这个字符就能称为“特殊字符”。比如星号“*”就能表示"),t("a",_,[e("正则表达式"),r(n)]),e("中的一个"),t("a",p,[e("通配符"),r(n)]),e("）。")]),g,t("p",null,[e("引用也可以控制"),t("a",f,[e("echo"),r(n)]),e("命令的断行符。")]),x])}const V=o(h,[["render",w],["__file","05_quoting.html.vue"]]);export{V as default};
