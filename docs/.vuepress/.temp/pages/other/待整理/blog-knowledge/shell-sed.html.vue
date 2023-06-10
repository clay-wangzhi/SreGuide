<template><div><p>Let's learn the sed command together！</p>
<!--more-->
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>sed是stream editor的简称，也就是流编辑器。它一次处理一行内容，处理是，当前处理的行存储在临时缓冲区中，成为“pattern space”,接着用sed命令处理缓冲区中的内容，处理完后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，知道文件末尾。文件内容并没有改变，除非你使用重定向存储输出。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2>
<h3 id="命令格式" tabindex="-1"><a class="header-anchor" href="#命令格式" aria-hidden="true">#</a> 命令格式</h3>
<p>sed [option] 'command' input_file</p>
<h3 id="常用选项" tabindex="-1"><a class="header-anchor" href="#常用选项" aria-hidden="true">#</a> 常用选项</h3>
<ul>
<li>-n 使用安静silent模式。在一般sed的用法中，所有来自stdin的内容一般都会列出到屏幕上。但如果加上-n参数后，则只有经过sed特殊处理的那一行（或者动作）才会被列出来</li>
<li>-e 进行多项编辑，即对输入行应用多条sed命令时使用</li>
<li>-f 指定sed脚本的文件名</li>
<li>-i 直接修改读取的文件内容，而不是由屏幕输出</li>
<li>-r 让sed命令支持扩展的正则表达式（默认是基础正则表达式）</li>
</ul>
<h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3>
<ul>
<li>
<p><code v-pre>a\</code>：追加行，<code v-pre>a\</code>的后面跟上字符串<code v-pre>s</code>（多行字符串可以用<code v-pre>\n</code>分隔），则会在当前选择的行的后面都加上字符串<code v-pre>s</code></p>
</li>
<li>
<p><code v-pre>c\：</code>替换行，<code v-pre>c\</code>后面跟上字符串<code v-pre>s</code>（多行字符串可以用<code v-pre>\n</code>分隔），则会将当前选中的行替换成字符串<code v-pre>s</code></p>
</li>
<li>
<p><code v-pre>i\</code>：插入行，<code v-pre>i\</code>后面跟上字符串<code v-pre>s</code>(多行字符串可以用<code v-pre>\n</code>分隔)，则会在当前选中的行的前面都插入字符串<code v-pre>s</code></p>
</li>
<li>
<p><code v-pre>d</code>：删除行<code v-pre>delete</code>，该命令会将当前选中的行删除</p>
</li>
<li>
<p><code v-pre>p</code>：打印<code v-pre>print</code>，该命令会打印当前选择的行到屏幕上</p>
</li>
<li>
<p><code v-pre>y</code>：替换字符，通常<code v-pre>y</code>命令的用法是这样的：<code v-pre>y/Source-chars/Dest-chars/</code>，分割字符<code v-pre>/</code>可以用任意单字符代替，用<code v-pre>Dest-chars</code>中对应位置的字符替换掉<code v-pre>Soutce-chars</code>中对应位置的字符</p>
</li>
<li>
<p><code v-pre>s</code>：替换字符串，通常<code v-pre>s</code>命令的用法是这样的：<code v-pre>1,$s/Regexp/Replacement/Flags</code>，分隔字符<code v-pre>/</code>可以用其他任意单字符代替，用<code v-pre>Replacement</code>替换掉匹配字符串</p>
</li>
</ul>
<h3 id="替换选项" tabindex="-1"><a class="header-anchor" href="#替换选项" aria-hidden="true">#</a> 替换选项</h3>
<ul>
<li>
<p><code v-pre>\digit</code>：<code v-pre>Replacement</code>中可含有后向引用中的<code v-pre>\digit</code>(<code v-pre>digit</code>是<code v-pre>1</code>至<code v-pre>9</code>)，引用前面定义的子表达</p>
</li>
<li>
<p><code v-pre>&amp;</code>：代表模版空间中的整个匹配部分</p>
</li>
<li>
<p><code v-pre>\L</code>：将在其后的替换部分转换成小写字母，直到发现一个<code v-pre>\U</code>或<code v-pre>\E</code>，<code v-pre>GNU</code>扩展功能</p>
</li>
<li>
<p><code v-pre>\l</code>：将下一个字符转换成小写字母，<code v-pre>GNU</code>扩展功能</p>
</li>
<li>
<p><code v-pre>\U</code>：将在其后的替换部分转换成大写字母，直到发现一个<code v-pre>\L</code>或<code v-pre>\E</code>，<code v-pre>GNU</code>扩展功能</p>
</li>
<li>
<p><code v-pre>\u</code>：将下一个字符转换成大写字母，<code v-pre>GNU</code>扩展功能</p>
</li>
<li>
<p><code v-pre>\E</code>：停止由<code v-pre>\L</code>或<code v-pre>\U</code>指示开始的大小写转换，<code v-pre>GNU</code>扩展功能</p>
</li>
</ul>
<h3 id="标记选项" tabindex="-1"><a class="header-anchor" href="#标记选项" aria-hidden="true">#</a> 标记选项</h3>
<ul>
<li>
<p><code v-pre>g</code>：将用<code v-pre>Replacement</code>替换模版空间中所有匹配<code v-pre>Regexp</code>的部分，则不仅仅是第一个匹配部分</p>
</li>
<li>
<p><code v-pre>digit</code>：只用<code v-pre>Replacement</code>替换模版空间中第<code v-pre>digit</code>(<code v-pre>digit</code>是<code v-pre>1</code>至<code v-pre>9</code>)个匹配<code v-pre>Regexp</code>的部分</p>
</li>
<li>
<p><code v-pre>p</code>：若发生了替换操作，指示显示模版空间中新的数据</p>
</li>
<li>
<p><code v-pre>w file-name</code>：若发生了替换操作，指示将模版空间中新的数据写入指定的文件<code v-pre>file-name</code>中</p>
</li>
<li>
<p><code v-pre>i</code>：表示进行<code v-pre>Regexp</code>匹配时，是不区分大小写字母的</p>
</li>
</ul>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<h3 id="a命令" tabindex="-1"><a class="header-anchor" href="#a命令" aria-hidden="true">#</a> <code v-pre>a</code>命令</h3>
<ul>
<li><code v-pre>sed '1,$a\add one' test.txt</code> 从第一行到最后一行所有行后追加<code v-pre>&quot;add one&quot;</code>字符串行</li>
<li><code v-pre>sed '/first/a\add one' test.txt</code> 在匹配到<code v-pre>first</code>行追加<code v-pre>&quot;add one&quot;</code>字符串行</li>
</ul>
<h3 id="c命令" tabindex="-1"><a class="header-anchor" href="#c命令" aria-hidden="true">#</a> <code v-pre>c</code>命令</h3>
<ul>
<li>
<p><code v-pre>sed '1,$c\add one' test.txt</code> 从第一行到最后一行所有行替换为<code v-pre>&quot;add one&quot;</code>字符串行</p>
</li>
<li>
<p><code v-pre>sed '/first/c\add one' test.txt</code> 将匹配到<code v-pre>first</code>行替换为<code v-pre>&quot;add one&quot;</code>字符串行</p>
</li>
</ul>
<h3 id="i命令" tabindex="-1"><a class="header-anchor" href="#i命令" aria-hidden="true">#</a> <code v-pre>i</code>命令</h3>
<p>与<code v-pre>a</code>命令类似，只不过在匹配的行前面插入字符串行，不举例了。</p>
<h3 id="d命令" tabindex="-1"><a class="header-anchor" href="#d命令" aria-hidden="true">#</a> <code v-pre>d</code>命令</h3>
<ul>
<li><code v-pre>sed '4,$d' test.txt</code> 从第四行到最后一行全部删除</li>
</ul>
<h3 id="p命令" tabindex="-1"><a class="header-anchor" href="#p命令" aria-hidden="true">#</a> <code v-pre>p</code>命令</h3>
<ul>
<li><code v-pre>sed -n '/^first.*end$/p' test.txt</code> 以<code v-pre>first</code>开头<code v-pre>end</code>结尾的所有行全部打印，<strong>-n选项</strong>和<strong>p命令</strong>一起使用表示只打印那些发生替换的行</li>
</ul>
<h3 id="s命令" tabindex="-1"><a class="header-anchor" href="#s命令" aria-hidden="true">#</a> <code v-pre>s</code>命令</h3>
<ul>
<li><code v-pre>sed 's/line/text/g' test.txt</code> 将所有行的<code v-pre>line</code>替换为<code v-pre>text</code>，<code v-pre>g</code>代表全局选项，没有<code v-pre>g</code>只替换所有行的第一个匹配项</li>
<li><code v-pre>sed '/^first.*end$/s/line/text/g' test.txt</code> 匹配以<code v-pre>first</code>开头<code v-pre>end</code>结尾的所有行，然后将<code v-pre>line</code>全部替换为<code v-pre>text</code></li>
<li><code v-pre>sed 's/\(.*\)line$/\1/g' test.txt</code> 本例中的<code v-pre>\(\)</code>中包裹的内容表示正则表达式的第<code v-pre>n</code>部分，<code v-pre>.*</code>表示任意字符串，所以此例相当于删除所有行末的<code v-pre>line</code></li>
<li><code v-pre>sed -i 's/book/books/g' test.txt</code> 直接编辑文件<strong>选项-i</strong>，会匹配file文件中每一行的第一个book替换为books</li>
</ul>
<h3 id="e命令" tabindex="-1"><a class="header-anchor" href="#e命令" aria-hidden="true">#</a> <code v-pre>e</code>命令</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed -e '1,5d' -e 's/test/check/' file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面sed表达式的第一条命令删除1至5行，第二条命令用check替换test。命令的执行顺序对结果有影响。如果两个命令都是替换命令，那么第一个替换命令将影响第二个替换命令的结果。</p>
<h3 id="n命令" tabindex="-1"><a class="header-anchor" href="#n命令" aria-hidden="true">#</a> <code v-pre>n</code>命令</h3>
<p>如果test被匹配，则移动到匹配行的下一行，替换这一行的aa，变为bb，并打印该行，然后继续：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed '/test/{ n; s/aa/bb/; }' file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="q命令" tabindex="-1"><a class="header-anchor" href="#q命令" aria-hidden="true">#</a> <code v-pre>q</code>命令</h3>
<p>打印完第10行后，退出sed</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed '10q' file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="w命令" tabindex="-1"><a class="header-anchor" href="#w命令" aria-hidden="true">#</a> <code v-pre>w</code>命令</h3>
<p>在example中所有包含test的行都被写入file里：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed -n '/test/w file' example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="已匹配字符串标记" tabindex="-1"><a class="header-anchor" href="#已匹配字符串标记" aria-hidden="true">#</a> 已匹配字符串标记&amp;</h3>
<p>正则表达式 \w+ 匹配每一个单词，使用 [&amp;] 替换它，&amp; 对应于之前所匹配到的单词：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>echo this is a test line | sed 's/\w\+/[&amp;]/g'
[this] [is] [a] [test] [line]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>所有以192.168.0.1开头的行都会被替换成它自已加localhost：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed 's/^192.168.0.1/&amp;localhost/' file
192.168.0.1localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子串匹配标记-1" tabindex="-1"><a class="header-anchor" href="#子串匹配标记-1" aria-hidden="true">#</a> 子串匹配标记\1</h3>
<p>匹配给定样式的其中一部分：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>echo this is digit 7 in a number | sed 's/digit \([0-9]\)/\1/'
this is 7 in a number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>命令中 digit 7，被替换成了 7。样式匹配到的子串是 7，(..) 用于匹配子串，对于匹配到的第一个子串就标记为 <strong>\1</strong>，依此类推匹配到的第二个结果就是 <strong>\2</strong>，例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>echo aaa BBB | sed 's/\([a-z]\+\) \([A-Z]\+\)/\2 \1/'
BBB aaa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>love被标记为1，所有loveable会被替换成lovers，并打印出来：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed -n 's/\(love\)able/\1rs/p' file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选定行的范围-逗号" tabindex="-1"><a class="header-anchor" href="#选定行的范围-逗号" aria-hidden="true">#</a> 选定行的范围：,（逗号）</h3>
<p>所有在模板test和check所确定的范围内的行都被打印：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed -n '/test/,/check/p' file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打印从第5行开始到第一个包含以test开始的行之间的所有行：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed -n '5,/^test/p' file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于模板test和west之间的行，每行的末尾用字符串aaa bbb替换：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed '/test/,/west/s/$/aaa bbb/' file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="打印奇数行或偶数行" tabindex="-1"><a class="header-anchor" href="#打印奇数行或偶数行" aria-hidden="true">#</a> 打印奇数行或偶数行</h3>
<p>方法1：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed -n 'p;n' test.txt  #奇数行
sed -n 'n;p' test.txt  #偶数行

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法2：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sed -n '1~2p' test.txt  #奇数行
sed -n '2~2p' test.txt  #偶数行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本正则表达式" tabindex="-1"><a class="header-anchor" href="#基本正则表达式" aria-hidden="true">#</a> 基本正则表达式</h2>
<table>
<thead>
<tr>
<th>元字符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>*</code></td>
<td>将<code v-pre>*</code>前面的正则表达式匹配的结果重复任意次(含<code v-pre>0</code>次)。</td>
</tr>
<tr>
<td><code v-pre>\+</code></td>
<td>与星号(<code v-pre>*</code>)相同，只是至少重复<code v-pre>1</code>次，<code v-pre>GNU</code>的扩展功能。</td>
</tr>
<tr>
<td><code v-pre>\?</code></td>
<td>与星号(<code v-pre>*</code>)相同，只是最多重复<code v-pre>1</code>次，<code v-pre>GNU</code>的扩展功能。</td>
</tr>
<tr>
<td><code v-pre>\{i\}</code></td>
<td>与星号(<code v-pre>*</code>)相同，只是重复指定的<code v-pre>i</code>次。</td>
</tr>
<tr>
<td><code v-pre>\{i,j\}</code></td>
<td>与星号(<code v-pre>*</code>)相同，只是重复<code v-pre>i</code>至<code v-pre>j</code>次。</td>
</tr>
<tr>
<td><code v-pre>\{i, \}</code></td>
<td>与星号(<code v-pre>*</code>)相同，只是至少重复<code v-pre>i</code>次。</td>
</tr>
<tr>
<td><code v-pre>\(regexp\)</code></td>
<td>将<code v-pre>regexp</code>看作一个整体，用于后向引用，与<code v-pre>\digit</code>配合使用。</td>
</tr>
<tr>
<td><code v-pre>.</code></td>
<td>匹配任意单个字符。</td>
</tr>
<tr>
<td><code v-pre>^</code></td>
<td>匹配模版空间开始处的<code v-pre>NULL</code>字符串。</td>
</tr>
<tr>
<td><code v-pre>$</code></td>
<td>匹配的是模版空间结束处的<code v-pre>NULL</code>字符串。</td>
</tr>
<tr>
<td><code v-pre>[list]</code></td>
<td>匹配方括号中的字符列表中的任意一个。</td>
</tr>
<tr>
<td><code v-pre>[^list]</code></td>
<td>否定匹配方括号中的字符列表中的任意一个。</td>
</tr>
<tr>
<td><code v-pre>regexp1|regexp2</code></td>
<td>用在相邻的正则表达式之间，表示匹配这些正则表达式中任一个都可以。匹配是从左向右开始的，一旦匹配成功就停止匹配。</td>
</tr>
<tr>
<td><code v-pre>regexp1regexp2</code></td>
<td>匹配<code v-pre>regexp1</code>和<code v-pre>regexp2</code>的连接结果。</td>
</tr>
<tr>
<td><code v-pre>\digit</code></td>
<td>匹配正则表达式前半部分定义的后向引用的第<code v-pre>digit</code>个子表达式。<code v-pre>digit</code>为<code v-pre>1</code>至<code v-pre>9</code>的数字, <code v-pre>1</code>为从左开始。</td>
</tr>
<tr>
<td><code v-pre>\n</code></td>
<td>匹配换行符。</td>
</tr>
<tr>
<td><code v-pre>\meta</code></td>
<td>将元字符<code v-pre>meta</code>转换成普通字符，以便匹配该字符本身，有<code v-pre>$</code>、 <code v-pre>*</code>、 <code v-pre>.</code>、 <code v-pre>[</code>、 <code v-pre>\</code> 和 <code v-pre>^</code>。</td>
</tr>
</tbody>
</table>
<h2 id="扩展正则表达式" tabindex="-1"><a class="header-anchor" href="#扩展正则表达式" aria-hidden="true">#</a> 扩展正则表达式</h2>
<p>扩展正则表达式除了以下元字符与基本正则表达式不同外，其余相似。</p>
<table>
<thead>
<tr>
<th>基本正则表达式</th>
<th>扩展正则表达式</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>\?</code></td>
<td><code v-pre>?</code></td>
</tr>
<tr>
<td><code v-pre>\+</code></td>
<td><code v-pre>+</code></td>
</tr>
<tr>
<td><code v-pre>|</code></td>
<td>`</td>
</tr>
<tr>
<td><code v-pre>\{ \}</code></td>
<td><code v-pre>{ }</code></td>
</tr>
<tr>
<td><code v-pre>\( \)</code></td>
<td><code v-pre>( )</code></td>
</tr>
</tbody>
</table>
<h2 id="常用转义字符" tabindex="-1"><a class="header-anchor" href="#常用转义字符" aria-hidden="true">#</a> 常用转义字符</h2>
<table>
<thead>
<tr>
<th>转义字符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>\a</code></td>
<td>匹配一个<code v-pre>BEL</code>字符。</td>
</tr>
<tr>
<td><code v-pre>\f</code></td>
<td>匹配一个换页字符。</td>
</tr>
<tr>
<td><code v-pre>\n</code></td>
<td>匹配一个换行字符。</td>
</tr>
<tr>
<td><code v-pre>\r</code></td>
<td>匹配一个回车字符。</td>
</tr>
<tr>
<td><code v-pre>\t</code></td>
<td>匹配一个水平<code v-pre>Tab</code>字符。</td>
</tr>
<tr>
<td><code v-pre>\v</code></td>
<td>匹配一个垂直<code v-pre>Tab</code>字符。</td>
</tr>
<tr>
<td><code v-pre>\cX</code></td>
<td>匹配<code v-pre>Control+X</code>，<code v-pre>X</code>是任意字符。</td>
</tr>
<tr>
<td><code v-pre>\dXXX</code></td>
<td>匹配一个<code v-pre>ASCII</code>码是十进制<code v-pre>XXX</code>的字符。</td>
</tr>
<tr>
<td><code v-pre>\oXXX</code></td>
<td>匹配一个<code v-pre>ASCII</code>码是八进制<code v-pre>XXX</code>的字符。</td>
</tr>
<tr>
<td><code v-pre>\xXX</code></td>
<td>匹配一个<code v-pre>ASCII</code>码是十六进制<code v-pre>XX</code>的字符。</td>
</tr>
<tr>
<td><code v-pre>\w</code></td>
<td>匹配任意一个单词字符(字母、数字和下划线)。</td>
</tr>
<tr>
<td><code v-pre>\W</code></td>
<td>匹配任意一个非单词字符。</td>
</tr>
<tr>
<td><code v-pre>\b</code></td>
<td>匹配一个单词的边界符：字符的左边是一个单词字符，并且右边是一个非单词字符，反之亦然。</td>
</tr>
<tr>
<td><code v-pre>\B</code></td>
<td>匹配除单词边界符外所有字符：字符的左边和右边同时是单词字符或非单词字符。</td>
</tr>
</tbody>
</table>
<h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<p>https://qianngchn.github.io/wiki/4.html#s%E5%91%BD%E4%BB%A4</p>
<p>http://man.linuxde.net/sed</p>
<p>https://www.cnblogs.com/edwardlost/archive/2010/09/17/1829145.html</p>
</div></template>


