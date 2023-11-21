import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,f as l,b as d,a as s}from"./app-2878b4b3.js";const v={},a=d("p",null,"diff 命令是 linux上非常重要的工具，用于比较文件的内容，特别是比较两个版本不同的文件以找到改动的地方。diff在命令行中打印每一个行的改动。最新版本的diff还支持二进制文件。diff程序的输出被称为补丁 (patch)，因为Linux系统中还有一个patch程序，可以根据diff的输出将a.c的文件内容更新为b.c。diff是svn、cvs、git等版本控制工具不可或缺的一部分。",-1),r=s(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p><code>diff(选项)(参数)</code></p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-&lt;行数&gt;：指定要显示多少行的文本。此参数必须与-c或-u参数一并使用；
-a或——text：diff预设只会逐行比较文本文件；
-b或--ignore-space-change：不检查空格字符的不同；
-B或--ignore-blank-lines：不检查空白行；
-c：显示全部内容，并标出不同之处；
-C&lt;行数&gt;或--context&lt;行数&gt;：与执行“-c-&lt;行数&gt;”指令相同；
-d或——minimal：使用不同的演算法，以小的单位来做比较；
-D&lt;巨集名称&gt;或ifdef&lt;巨集名称&gt;：此参数的输出格式可用于前置处理器巨集；
-e或——ed：此参数的输出格式可用于ed的script文件；
-f或-forward-ed：输出的格式类似ed的script文件，但按照原来文件的顺序来显示不同处；
-H或--speed-large-files：比较大文件时，可加快速度；
-l&lt;字符或字符串&gt;或--ignore-matching-lines&lt;字符或字符串&gt;：若两个文件在某几行有所不同，而之际航同时都包含了选项中指定的字符或字符串，则不显示这两个文件的差异；
-i或--ignore-case：不检查大小写的不同；
-l或——paginate：将结果交由pr程序来分页；
-n或——rcs：将比较结果以RCS的格式来显示；
-N或--new-file：在比较目录时，若文件A仅出现在某个目录中，预设会显示：Only in目录，文件A 若使用-N参数，则diff会将文件A 与一个空白的文件比较；
-p：若比较的文件为C语言的程序码文件时，显示差异所在的函数名称；
-P或--unidirectional-new-file：与-N类似，但只有当第二个目录包含了第一个目录所没有的文件时，才会将这个文件与空白的文件做比较；
-q或--brief：仅显示有无差异，不显示详细的信息；
-r或——recursive：比较子目录中的文件；
-s或--report-identical-files：若没有发现任何差异，仍然显示信息；
-S&lt;文件&gt;或--starting-file&lt;文件&gt;：在比较目录时，从指定的文件开始比较；
-t或--expand-tabs：在输出时，将tab字符展开；
-T或--initial-tab：在每行前面加上tab字符以便对齐；
-u，-U&lt;列数&gt;或--unified=&lt;列数&gt;：以合并的方式来显示文件内容的不同；
-v或——version：显示版本信息；
-w或--ignore-all-space：忽略全部的空格字符；
-W&lt;宽度&gt;或--width&lt;宽度&gt;：在使用-y参数时，指定栏宽；
-x&lt;文件名或目录&gt;或--exclude&lt;文件名或目录&gt;：不比较选项中所指定的文件或目录；
-X&lt;文件&gt;或--exclude-from&lt;文件&gt;；您可以将文件或目录类型存成文本文件，然后在=&lt;文件&gt;中指定此文本文件；
-y或--side-by-side：以并列的方式显示文件的异同之处；
--help：显示帮助；
--left-column：在使用-y参数时，若两个文件某一行内容相同，则仅在左侧的栏位显示该行内容；
--suppress-common-lines：在使用-y参数时，仅显示不同之处。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li>文件1：指定要比较的第一个文件；</li><li>文件2：指定要比较的第二个文件。</li></ul><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><p>diff命令能比较单个文件或者目录内容。如果指定比较的是文件，则只有当输入为文本文件时才有效。以逐行的方式，比较文本文件的异同处。如果指定比较的是目录的时候，diff命令会比较两个目录下名字相同的文本文件。列出不同的二进制文件、公共子目录和只在一个目录出现的文件。</p><h2 id="常用实例" tabindex="-1"><a class="header-anchor" href="#常用实例" aria-hidden="true">#</a> 常用实例</h2><p>1）比较两个文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># diff log2014.log log2013.log 
3c3
&lt; 2014-03
---
&gt; 2013-03
8c8
&lt; 2013-07
---
&gt; 2013-08
11,12d10
&lt; 2013-11
&lt; 2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>上面的“3c3”和“8c8”表示log2014.log和log20143log文件在3行和第8行内容有所不同；&quot;11,12d10&quot;表示第一个文件比第二个文件多了第11和12行。</p><p>diff 的normal 显示格式有三种提示:</p><p>a - add</p><p>c - change</p><p>d - delete</p><p>2）并排格式输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># diff log2014.log log2013.log  -y -W 50
2013-01                 2013-01
2013-02                 2013-02
2014-03               | 2013-03
2013-04                 2013-04
2013-05                 2013-05
2013-06                 2013-06
2013-07                 2013-07
2013-07               | 2013-08
2013-09                 2013-09
2013-10                 2013-10
2013-11               &lt;
2013-12               &lt;
# diff log2013.log log2014.log  -y -W 50
2013-01                 2013-01
2013-02                 2013-02
2013-03               | 2014-03
2013-04                 2013-04
2013-05                 2013-05
2013-06                 2013-06
2013-07                 2013-07
2013-08               | 2013-07
2013-09                 2013-09
                      &gt; 2013-11
                      &gt; 2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>“|”表示前后2个文件内容有不同</p><p>“&lt;”表示后面文件比前面文件少了1行内容</p><p>“&gt;”表示后面文件比前面文件多了1行内容</p><p>3）上下文输出格式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># diff log2013.log log2014.log  -c
*** log2013.log 2012-12-07 16:36:26.000000000 +0800
--- log2014.log 2012-12-07 18:01:54.000000000 +0800
***************
*** 1,10 ****
  2013-01
  2013-02
! 2013-03
  2013-04
  2013-05
  2013-06
  2013-07
! 2013-08
  2013-09
  2013-10
--- 1,12 ----
  2013-01
  2013-02
! 2014-03
  2013-04
  2013-05
  2013-06
  2013-07
! 2013-07
  2013-09
  2013-10
+ 2013-11
+ 2013-12
# diff log2014.log log2013.log  -c
*** log2014.log 2012-12-07 18:01:54.000000000 +0800
--- log2013.log 2012-12-07 16:36:26.000000000 +0800
***************
*** 1,12 ****
  2013-01
  2013-02
! 2014-03
  2013-04
  2013-05
  2013-06
  2013-07
! 2013-07
  2013-09
  2013-10
- 2013-11
- 2013-12
--- 1,10 ----
  2013-01
  2013-02
! 2013-03
  2013-04
  2013-05
  2013-06
  2013-07
! 2013-08
  2013-09
  2013-10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>这种方式在开头两行作了比较文件的说明，这里有三中特殊字符：</p><p>“＋” 比较的文件的后者比前着多一行</p><p>“－” 比较的文件的后者比前着少一行</p><p>“！” 比较的文件两者有差别的行</p><p>4）统一格式输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># diff log2014.log log2013.log  -u
--- log2014.log 2012-12-07 18:01:54.000000000 +0800
+++ log2013.log 2012-12-07 16:36:26.000000000 +0800
@@ -1,12 +1,10 @@
 2013-01
 2013-02
-2014-03
+2013-03
 2013-04
 2013-05
 2013-06
 2013-07
-2013-07
+2013-08
 2013-09
 2013-10
-2013-11
-2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>它的第一部分，也是文件的基本信息：</p><p>--- log2014.log 2012-12-07 18:01:54.000000000 +0800</p><p>+++ log2013.log 2012-12-07 16:36:26.000000000 +0800</p><p>&quot;---&quot;表示变动前的文件，&quot;+++&quot;表示变动后的文件。</p><p>第二部分，变动的位置用两个@作为起首和结束。</p><p>@@ -1,12 +1,10 @@</p><p>前面的&quot;-1,12&quot;分成三个部分：减号表示第一个文件（即log2014.log），&quot;1&quot;表示第1行，&quot;12&quot;表示连续12行。合在一起，就表示下面是第一个文件从第1行开始的连续12行。同样的，&quot;+1,10&quot;表示变动后，成为第二个文件从第1行开始的连续10行。</p><p>5）比较文件夹不同</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># diff test3 test6
Only in test6: linklog.log
Only in test6: log2012.log
diff test3/log2013.log test6/log2013.log
1,10c1,3
&lt; 2013-01
&lt; 2013-02
&lt; 2013-03
&lt; 2013-04
&lt; 2013-05
&lt; 2013-06
&lt; 2013-07
&lt; 2013-08
&lt; 2013-09
&lt; 2013-10
---
&gt; hostnamebaidu=baidu.com
&gt; hostnamesina=sina.com
&gt; hostnames=true
diff test3/log2014.log test6/log2014.log
1,12d0
&lt; 2013-01
&lt; 2013-02
&lt; 2014-03
&lt; 2013-04
&lt; 2013-05
&lt; 2013-06
&lt; 2013-07
&lt; 2013-07
&lt; 2013-09
&lt; 2013-10
&lt; 2013-11
&lt; 2013-12
Only in test6: log2015.log
Only in test6: log2016.log
Only in test6: log2017.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6）比较两个文件不同，并生产补丁</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># diff -ruN log2013.log log2014.log &gt;patch.log
# ll
总计 12
-rw-r--r-- 2 root root  80 12-07 16:36 log2013.log
-rw-r--r-- 1 root root  96 12-07 18:01 log2014.log
-rw-r--r-- 1 root root 248 12-07 21:33 patch.log
# cat patch.log 
--- log2013.log 2012-12-07 16:36:26.000000000 +0800
+++ log2014.log 2012-12-07 18:01:54.000000000 +0800
@@ -1,10 +1,12 @@
 2013-01
 2013-02
-2013-03
+2014-03
 2013-04
 2013-05
 2013-06
 2013-07
-2013-08
+2013-07
 2013-09
 2013-10
+2013-11
+2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7）打补丁</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat log2013.log
2013-01
2013-02
2013-03
2013-04
2013-05
2013-06
2013-07
2013-08
2013-09
2013-10
# patch log2013.log patch.log 
patching file log2013.log
# cat log2013.log 
2013-01
2013-02
2014-03
2013-04
2013-05
2013-06
2013-07
2013-07
2013-09
2013-10
2013-11
2013-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p><p>http://www.cnblogs.com/peida/archive/2012/12/12/2814048.html</p><p>http://man.linuxde.net/diff</p>`,49);function c(u,m){return n(),e("div",null,[a,l("more"),r])}const o=i(v,[["render",c],["__file","每天一个linux命令（35）-diff.html.vue"]]);export{o as default};
