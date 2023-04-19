<template><h1 id="第五章-引用" tabindex="-1"><a class="header-anchor" href="#第五章-引用" aria-hidden="true">#</a> 第五章 引用</h1>
<h3 id="本章目录" tabindex="-1"><a class="header-anchor" href="#本章目录" aria-hidden="true">#</a> 本章目录</h3>
<ul>
<li><RouterLink to="/code/shell/part2/05_1_quoting_variables.html">5.1 引用变量</RouterLink></li>
<li><RouterLink to="/code/shell/part2/05_2_escaping.html">5.2 转义</RouterLink></li>
</ul>
<hr>
<p>引用就是将一个字符串用引号括起来。这样做是为了保护Shell/Shell脚本中被重新解释过或带扩展功能的<a href="http://tldp.org/LDP/abs/html/special-chars.html" target="_blank" rel="noopener noreferrer">特殊字符<ExternalLinkIcon/></a>（如果一个字符带有其特殊意义而不仅仅是字面量的话，这个字符就能称为“特殊字符”。比如星号“*”就能表示<a href="http://tldp.org/LDP/abs/html/regexp.html#REGEXREF" target="_blank" rel="noopener noreferrer">正则表达式<ExternalLinkIcon/></a>中的一个<a href="http://tldp.org/LDP/abs/html/globbingref.html" target="_blank" rel="noopener noreferrer">通配符<ExternalLinkIcon/></a>）。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash$ ls -l [Vv]*
-rw-rw-r--    1 bozo  bozo       324 Apr  2 15:05 VIEWDATA.BAT
-rw-rw-r--    1 bozo  bozo       507 May  4 14:25 vartrace.sh
-rw-rw-r--    1 bozo  bozo       539 Apr 14 17:11 viewdata.sh

bash$ ls -l '[Vv]*'
ls: [Vv]*: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p>可以看到，提示不存在该文件。这里的<code>'[Vv]*</code>被当成了文件名。
在日常沟通和写作中，当我们引用一个短语的时候，我们会将它单独隔开并赋予它特殊的意义，而在bash脚本中，当我们<em>引用</em>一个字符串，意味着保留它的<em>字面量</em>。</p>
</blockquote>
<p>很多程序和公用代码会展开被引用字符串中的特殊字符。引用的一个重用用途是保护Shell中的命令行参数，但仍然允许调用的程序扩展它。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash$ grep '[Ff]irst' *.txt
file1.txt:This is the first line of file1.txt.
file2.txt:This is the First line of file2.txt.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>在所有.txt文件中找出包含first或者First字符串的行</p>
</blockquote>
<p>注意，不加引号的 <code>grep [Ff]irst *.txt</code> 在Bash下也同样有效。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<p>引用也可以控制<a href="http://tldp.org/LDP/abs/html/internal.html#ECHOREF" target="_blank" rel="noopener noreferrer">echo<ExternalLinkIcon/></a>命令的断行符。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash$ echo $(ls -l)
total 8 -rw-rw-r-- 1 bo bo 13 Aug 21 12:57 t.sh -rw-rw-r-- 1 bo bo 78 Aug 21 12:57 u.sh


bash$ echo "$(ls -l)"
total 8
 -rw-rw-r--  1 bo bo  13 Aug 21 12:57 t.sh
 -rw-rw-r--  1 bo bo  78 Aug 21 12:57 u.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>前提是当前目录下有文件名为First或first的文件。这也是使用引用的另一个原因。（感谢 Harald Koenig 指出了这一点） <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
