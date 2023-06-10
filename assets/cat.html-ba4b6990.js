import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as d}from"./app-1a5afd71.js";const s={},a=d(`<h1 id="查看文件内容" tabindex="-1"><a class="header-anchor" href="#查看文件内容" aria-hidden="true">#</a> 查看文件内容</h1><h3 id="cat命令" tabindex="-1"><a class="header-anchor" href="#cat命令" aria-hidden="true">#</a> cat命令</h3><p>cat命令的用途是连接文件或标准输入并打印。这个命令常用来显示文件内容，或者将几个文件连接起来显示，或者从标准输入读取内容并显示，它常与重定向符号配合使用。</p><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><p><code>cat(选项)(参数)</code></p><h4 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-A, --show-all           等价于 -vET
-b, --number-nonblank    对非空输出行编号
-e                       等价于 -vE
-E, --show-ends          在每行结束处显示 $
-n, --number     对输出的所有行编号,由1开始对所有输出的行数编号
-s, --squeeze-blank  有连续两行以上的空白行，就代换为一行的空白行 
-t                       与 -vT 等价
-T, --show-tabs          将跳格字符显示为 ^I
-u                       (被忽略)
-v, --show-nonprinting   使用 ^ 和 M- 引用，除了 LFD 和 TAB 之外
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h4><p>1.一次显示整个文件:cat filename</p><p>2.从键盘创建一个文件:cat &gt; filename 只能创建新文件,不能编辑已有文件.</p><p>3.将几个文件合并为一个文件:cat file1 file2 &gt; file</p><h4 id="常用范例" tabindex="-1"><a class="header-anchor" href="#常用范例" aria-hidden="true">#</a> 常用范例</h4><p>1）把 log2012.log 的文件内容加上行号后输入 log.log 这个文件里</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat log.log 
[root@localhost test]# cat -n log2012.log &gt; log.log
# cat -n log.log 
     1  2012-01
     2  2012-02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）使用here doc来生成文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat &gt;log.txt &lt;&lt;EOF
&gt; Hello
&gt; World
&gt; Linux
&gt; PWD=$(pwd)
&gt; EOF
# ls -l log.txt 
-rw-r--r-- 1 root root 37 10-28 17:07 log.txt
# cat log.txt 
Hello
World
Linux
PWD=/opt/soft/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>注意粗体部分，here doc可以进行字符串替换。</p><p>备注：</p><p>tac (反向列示)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># tac log.txt 
PWD=/opt/soft/test
Linux
World
Hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>tac 是将 cat 反写过来，所以他的功能就跟 cat 相反， cat 是由第一行到最后一行连续显示在萤幕上，而 tac 则是由最后一行到第一行反向在萤幕上显示出来！</p><h3 id="less命令" tabindex="-1"><a class="header-anchor" href="#less命令" aria-hidden="true">#</a> less命令</h3><p>less 工具也是对文件或其它输出进行分页显示的工具，应该说是linux正统查看文件内容的工具，功能极其强大。less 的用法比起 more 更加的有弹性。在 more 的时候，我们并没有办法向前面翻， 只能往后面看，但若使用了 less 时，就可以使用 [pageup][pagedown] 等按键的功能来往前往后翻看文件，更容易用来查看一个文件的内容！除此之外，在 less 里头可以拥有更多的搜索功能，不止可以向下搜，也可以向上搜。</p><h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h4><p><code>less(选项)(参数)</code></p><h4 id="选项-1" tabindex="-1"><a class="header-anchor" href="#选项-1" aria-hidden="true">#</a> 选项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-b  &lt;缓冲区大小&gt; 设置缓冲区的大小
-e  当文件显示结束后，自动离开
-f  强迫打开特殊文件，例如外围设备代号、目录和二进制文件
-g  只标志最后搜索的关键词
-i  忽略搜索时的大小写
-m  显示类似more命令的百分比
-N  显示每行的行号
-o &lt;文件名&gt; 将less 输出的内容在指定文件中保存起来
-Q  不使用警告音
-s  显示连续空行为一行
-S  行过长时间将超出部分舍弃
-x &lt;数字&gt; 将“tab”键显示为规定的数字空格
/字符串：向下搜索“字符串”的功能
?字符串：向上搜索“字符串”的功能
n：重复前一个搜索（与 / 或 ? 有关）
N：反向重复前一个搜索（与 / 或 ? 有关）
b  向后翻一页
d  向后翻半页
h  显示帮助界面
Q  退出less 命令
u  向前滚动半页
y  向前滚动一行
空格键 滚动一行
回车键 滚动一页
[pagedown]： 向下翻动一页
[pageup]：   向上翻动一页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="功能-1" tabindex="-1"><a class="header-anchor" href="#功能-1" aria-hidden="true">#</a> 功能</h4><p>less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。</p><h4 id="常用实例" tabindex="-1"><a class="header-anchor" href="#常用实例" aria-hidden="true">#</a> 常用实例</h4><p>1）ps查看进程信息并通过less分页显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps -ef | less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2 ) 查看命令历史使用记录并通过less分页显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>history | less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3）浏览多个文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>less log2013.log log2014.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明：</p><p>输入 ：n后，切换到 log2014.log</p><p>输入 ：p 后，切换到log2013.log</p><h4 id="附加备注" tabindex="-1"><a class="header-anchor" href="#附加备注" aria-hidden="true">#</a> 附加备注</h4><p>1.全屏导航</p><p>ctrl + F - 向前移动一屏</p><p>ctrl + B - 向后移动一屏</p><p>ctrl + D - 向前移动半屏</p><p>ctrl + U - 向后移动半屏</p><p>2.单行导航</p><p>j - 向前移动一行</p><p>k - 向后移动一行</p><p>3.其它导航</p><p>G - 移动到最后一行</p><p>g - 移动到第一行</p><p>q / ZZ - 退出 less 命令</p><p>4.其它有用的命令</p><p>v - 使用配置的编辑器编辑当前文件</p><p>h - 显示 less 的帮助文档</p><p>&amp;pattern - 仅显示匹配模式的行，而不是整个文件</p><p>5.标记导航</p><p>当使用 less 查看大文件时，可以在任何一个位置作标记，可以通过命令导航到标有特定标记的文本位置：</p><p>ma - 使用 a 标记文本的当前位置</p><p>&#39;a - 导航到标记 a 处</p><h3 id="more命令" tabindex="-1"><a class="header-anchor" href="#more命令" aria-hidden="true">#</a> more命令</h3><p>more命令，功能类似 cat ，cat命令是整个文件的内容从上到下显示在屏幕上。 more会以一页一页的显示方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示，而且还有搜寻字串的功能 。more命令从前向后读取文件，因此在启动时就加载整个文件。</p><h4 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h4><p><code>more(语法)(参数)</code></p><h4 id="选项-2" tabindex="-1"><a class="header-anchor" href="#选项-2" aria-hidden="true">#</a> 选项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+n      从笫n行开始显示
-n       定义屏幕大小为n行
+/pattern 在每个档案显示前搜寻该字串（pattern），然后从该字串前两行之后开始显示  
-c       从顶部清屏，然后显示
-d       提示“Press space to continue，’q’ to quit（按空格键继续，按q键退出）”，禁用响铃功能
-l        忽略Ctrl+l（换页）字符
-p       通过清除窗口而不是滚屏来对文件进行换页，与-c选项相似
-s       把连续的多个空行显示为一行
-u       把文件内容中的下画线去掉
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="功能-2" tabindex="-1"><a class="header-anchor" href="#功能-2" aria-hidden="true">#</a> 功能</h4><p>more命令和cat的功能一样都是查看文件里的内容，但有所不同的是more可以按页来查看文件的内容，还支持直接跳转行等功能。</p><h4 id="常用操作命令" tabindex="-1"><a class="header-anchor" href="#常用操作命令" aria-hidden="true">#</a> 常用操作命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Enter    向下n行，需要定义。默认为1行
Ctrl+F   向下滚动一屏
空格键  向下滚动一屏
Ctrl+B  返回上一屏
=       输出当前行的行号
：f    输出文件名和当前行的行号
V      调用vi编辑器
!命令   调用Shell，并执行命令 
q       退出more
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用范例-1" tabindex="-1"><a class="header-anchor" href="#常用范例-1" aria-hidden="true">#</a> 常用范例</h4><p>1）显示文件中从第3行起的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat log2012.log 
2012-01
2012-02
2012-03
2012-04-day1
2012-04-day2
2012-04-day3
# more +3 log2012.log 
2012-03
2012-04-day1
2012-04-day2
2012-04-day3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）从文件中查找第一个出现&quot;day3&quot;字符串的行，并从该处前两行开始显示输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># more +/day3 log2012.log 
...skipping
2012-04-day1
2012-04-day2
2012-04-day3
2012-05
2012-05-day1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）设定每屏显示行数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># more -5 log2012.log 
2012-01
2012-02
2012-03
2012-04-day1
2012-04-day2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）列一个目录下的文件，由于内容太多，我们应该学会用more来分页显示。这得和管道 | 结合起来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#  ls -l  | more -5
总计 36
-rw-r--r-- 1 root root  308 11-01 16:49 log2012.log
-rw-r--r-- 1 root root   33 10-28 16:54 log2013.log
-rw-r--r-- 1 root root  127 10-28 16:51 log2014.log
lrwxrwxrwx 1 root root    7 10-28 15:18 log_link.log -&gt; log.log
-rw-r--r-- 1 root root   25 10-28 17:02 log.log
-rw-r--r-- 1 root root   37 10-28 17:07 log.txt
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxrwxrwx 2 root root 4096 10-28 14:47 test4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>每页显示5个文件信息，按 Ctrl+F 或者 空格键 将会显示下5条文件信息。</p><h3 id="head命令" tabindex="-1"><a class="header-anchor" href="#head命令" aria-hidden="true">#</a> head命令</h3><p>head 与 tail 就像它的名字一样的浅显易懂，它是用来显示开头或结尾某个数量的文字区块，head 用来显示档案的开头至标准输出中，而 tail 想当然尔就是看档案的结尾。</p><h4 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h4><p><code>head(选项)(参数)</code></p><h4 id="选项-3" tabindex="-1"><a class="header-anchor" href="#选项-3" aria-hidden="true">#</a> 选项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-n&lt;数字&gt;：指定显示头部内容的行数；
-c&lt;字符数&gt;：指定显示头部内容的字符数；
-v：总是显示文件名的头信息；
-q：不显示文件名的头信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="功能-3" tabindex="-1"><a class="header-anchor" href="#功能-3" aria-hidden="true">#</a> 功能</h4><p>head 用来显示档案的开头至标准输出中，默认head命令打印其相应文件的开头10行。</p><h4 id="常用范例-2" tabindex="-1"><a class="header-anchor" href="#常用范例-2" aria-hidden="true">#</a> 常用范例</h4><p>1）显示文件的前n行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat log2014.log 
2014-01
2014-02
2014-03
2014-04
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
# head -n 5 log2014.log 
2014-01
2014-02
2014-03
2014-04
2014-05
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）显示文件前n个字节</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># head -c 20 log2014.log
2014-01
2014-02
2014
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）文件的除了最后n个字节以外的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># head -c -32 log2014.log
2014-01
2014-02
2014-03
2014-04
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）输出文件除了最后n行的全部内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># head -n -6 log2014.log
2014-01
2014-02
2014-03
2014-04
2014-05
2014-06
2014-07
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tail命令" tabindex="-1"><a class="header-anchor" href="#tail命令" aria-hidden="true">#</a> tail命令</h3><p>tail 命令从指定点开始将文件写到标准输出.使用tail命令的-f选项可以方便的查阅正在改变的日志文件,tail -f filename会把filename里最尾部的内容显示在屏幕上,并且不断刷新,使你看到最新的文件内容.</p><h4 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4" aria-hidden="true">#</a> 语法</h4><p><code>tail(选项)(参数)</code></p><h4 id="选项-4" tabindex="-1"><a class="header-anchor" href="#选项-4" aria-hidden="true">#</a> 选项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-f 循环读取
-q 不显示处理信息
-v 显示详细的处理信息
-c&lt;数目&gt; 显示的字节数
-n&lt;行数&gt; 显示行数
--pid=PID 与-f合用,表示在进程ID,PID死掉之后结束. 
-q, --quiet, --silent 从不输出给出文件名的首部 
-s, --sleep-interval=S 与-f合用,表示在每次反复的间隔休眠S秒 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="功能-4" tabindex="-1"><a class="header-anchor" href="#功能-4" aria-hidden="true">#</a> 功能</h4><p>用于显示指定文件末尾内容，不指定文件时，作为输入信息进行处理。常用查看日志文件。</p><h4 id="常用范例-3" tabindex="-1"><a class="header-anchor" href="#常用范例-3" aria-hidden="true">#</a> 常用范例</h4><p>1）显示文件末尾内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># tail -n 5 log2014.log 
2014-09
2014-10
2014-11
2014-12
===========================
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>显示文件最后5行内容</p><p>2）循环查看文件内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ping 192.168.120.204 &gt; test.log &amp;
# tail -f test.log 
PING 192.168.120.204 (192.168.120.204) 56(84) bytes of data.
64 bytes from 192.168.120.204: icmp_seq=1 ttl=64 time=0.038 ms
64 bytes from 192.168.120.204: icmp_seq=2 ttl=64 time=0.036 ms
64 bytes from 192.168.120.204: icmp_seq=3 ttl=64 time=0.033 ms
64 bytes from 192.168.120.204: icmp_seq=4 ttl=64 time=0.027 ms
64 bytes from 192.168.120.204: icmp_seq=5 ttl=64 time=0.032 ms
64 bytes from 192.168.120.204: icmp_seq=6 ttl=64 time=0.026 ms
64 bytes from 192.168.120.204: icmp_seq=7 ttl=64 time=0.030 ms
64 bytes from 192.168.120.204: icmp_seq=8 ttl=64 time=0.029 ms
64 bytes from 192.168.120.204: icmp_seq=9 ttl=64 time=0.044 ms
64 bytes from 192.168.120.204: icmp_seq=10 ttl=64 time=0.033 ms
64 bytes from 192.168.120.204: icmp_seq=11 ttl=64 time=0.027 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）从第5行开始显示文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat log2014.log 
2014-01
2014-02
2014-03
2014-04
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
# tail -n +5 log2014.log
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grep命令" tabindex="-1"><a class="header-anchor" href="#grep命令" aria-hidden="true">#</a> grep命令</h3><p><strong>grep</strong>（global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。</p><p>grep可用于shell脚本，因为grep通过返回一个状态值来说明搜索的状态，如果模板搜索成功，则返回0，如果搜索不成功，则返回1，如果搜索的文件不存在，则返回2。我们利用这些返回值就可进行一些自动化的文本处理工作。</p><h4 id="选项-5" tabindex="-1"><a class="header-anchor" href="#选项-5" aria-hidden="true">#</a> 选项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-a 不要忽略二进制数据。
-A&lt;显示列数&gt; 除了显示符合范本样式的那一行之外，并显示该行之后的内容。
-b 在显示符合范本样式的那一行之外，并显示该行之前的内容。
-c 计算符合范本样式的列数。
-C&lt;显示列数&gt;或-&lt;显示列数&gt;  除了显示符合范本样式的那一列之外，并显示该列之前后的内容。
-d&lt;进行动作&gt; 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep命令将回报信息并停止动作。
-e&lt;范本样式&gt; 指定字符串作为查找文件内容的范本样式。
-E 将范本样式为延伸的普通表示法来使用，意味着使用能使用扩展正则表达式。
-f&lt;范本文件&gt; 指定范本文件，其内容有一个或多个范本样式，让grep查找符合范本条件的文件内容，格式为每一列的范本样式。
-F 将范本样式视为固定字符串的列表。
-G 将范本样式视为普通的表示法来使用。
-h 在显示符合范本样式的那一列之前，不标示该列所属的文件名称。
-H 在显示符合范本样式的那一列之前，标示该列的文件名称。
-i 忽略字符大小写的差别。
-l 列出文件内容符合指定的范本样式的文件名称。
-L 列出文件内容不符合指定的范本样式的文件名称。
-n 在显示符合范本样式的那一列之前，标示出该列的编号。
-q 不显示任何信息。
-R/-r 此参数的效果和指定“-d recurse”参数相同。
-s 不显示错误信息。
-v 反转查找。
-w 只显示全字符合的列。
-x 只显示全列符合的列。
-y 此参数效果跟“-i”相同。
-o 只输出文件中匹配到的部分。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="规则表达式" tabindex="-1"><a class="header-anchor" href="#规则表达式" aria-hidden="true">#</a> 规则表达式</h4><p>grep的规则表达式:</p><p>^ #锚定行的开始 如：&#39;^grep&#39;匹配所有以grep开头的行。</p><p>$ #锚定行的结束 如：&#39;grep$&#39;匹配所有以grep结尾的行。</p><p>. #匹配一个非换行符的字符 如：&#39;gr.p&#39;匹配gr后接一个任意字符，然后是p。</p><ul><li>#匹配零个或多个先前字符 如：&#39;*grep&#39;匹配所有一个或多个空格后紧跟grep的行。</li></ul><p>.* #一起用代表任意字符。</p><p>[] #匹配一个指定范围内的字符，如&#39;[Gg]rep&#39;匹配Grep和grep。</p><p>[^] #匹配一个不在指定范围内的字符，如：&#39;[^A-FH-Z]rep&#39;匹配不包含A-F和H-Z的一个字母开头，紧跟rep的行。</p><p>(..) #标记匹配字符，如&#39;(love)&#39;，love被标记为1。</p><p>\\&lt; #锚定单词的开始，如:&#39;&lt;grep&#39;匹配包含以grep开头的单词的行。</p><p>\\&gt; #锚定单词的结束，如&#39;grep&gt;&#39;匹配包含以grep结尾的单词的行。</p><p>x{m} #重复字符x，m次，如：&#39;0{5}&#39;匹配包含5个o的行。</p><p>x{m,} #重复字符x,至少m次，如：&#39;o{5,}&#39;匹配至少有5个o的行。</p><p>x{m,n} #重复字符x，至少m次，不多于n次，如：&#39;o{5,10}&#39;匹配5--10个o的行。</p><p>\\w #匹配文字和数字字符，也就是[A-Za-z0-9]，如：&#39;G\\w*p&#39;匹配以G后跟零个或多个文字或数字字符，然后是p。</p><p>\\W #\\w的反置形式，匹配一个或多个非单词字符，如点号句号等。</p><p>\\b #单词锁定符，如: &#39;\\bgrep\\b&#39;只匹配grep。</p><p>POSIX字符:</p><p>为了在不同国家的字符编码中保持一至，POSIX(The Portable Operating System Interface)增加了特殊的字符类，如[:alnum:]是[A-Za-z0-9]的另一个写法。要把它们放到[]号内才能成为正则表达式，如[A- Za-z0-9]或[[:alnum:]]。在linux下的grep除fgrep外，都支持POSIX的字符类。</p><p>[:alnum:] #文字数字字符</p><p>[:alpha:] #文字字符</p><p>[:digit:] #数字字符</p><p>[:graph:] #非空字符（非空格、控制字符）</p><p>[:lower:] #小写字符</p><p>[:cntrl:] #控制字符</p><p>[:print:] #非空字符（包括空格）</p><p>[:punct:] #标点符号</p><p>[:space:] #所有空白字符（新行，空格，制表符）</p><p>[:upper:] #大写字符</p><p>[:xdigit:] #十六进制数字（0-9，a-f，A-F）</p><h4 id="常用实例-1" tabindex="-1"><a class="header-anchor" href="#常用实例-1" aria-hidden="true">#</a> 常用实例</h4><p>1）查找指定进程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> ps -ef|grep svn
root 4943   1      0  Dec05 ?   00:00:00 svnserve -d -r /opt/svndata/grape/
root 16867 16838  0 19:53 pts/0    00:00:00 grep svn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）查找指定进程个数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ps -ef|grep -c svn 
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3）从文件中读取关键词进行搜索</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat test.txt 
hnlinux
peida.cnblogs.com
ubuntu
ubuntu linux
redhat
Redhat
linuxmint
# cat test2.txt 
linux
Redhat
# cat test.txt | grep -f test2.txt
hnlinux
ubuntu linux
Redhat
linuxmint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>输出test.txt文件中含有从test2.txt文件中读取出的关键词的内容行</p><p>4）从文件中读取关键词进行搜索且显示行号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat test.txt 
hnlinux
peida.cnblogs.com
ubuntu
ubuntu linux
redhat
Redhat
linuxmint
# cat test2.txt 
linux
Redhat
# cat test.txt | grep -nf test2.txt
1:hnlinux
4:ubuntu linux
6:Redhat
7:linuxmint

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>输出test.txt文件中含有从test2.txt文件中读取出的关键词的内容行，并显示每一行的行号</p><p>5）从文件中查找关键词</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># grep &#39;linux&#39; test.txt 
hnlinux
ubuntu linux
linuxmint
# grep -n &#39;linux&#39; test.txt 
1:hnlinux
4:ubuntu linux
7:linuxmint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6）从多个文件中查找关键词</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># grep -n &#39;linux&#39; test.txt test2.txt 
test.txt:1:hnlinux
test.txt:4:ubuntu linux
test.txt:7:linuxmint
test2.txt:1:linux
# grep &#39;linux&#39; test.txt test2.txt 
test.txt:hnlinux
test.txt:ubuntu linux
test.txt:linuxmint
test2.txt:linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>多文件时，输出查询到的信息内容行时，会把文件的命名在行最前面输出并且加上&quot;:&quot;作为标示符</p><p>7）grep不显示本身进程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ps aux|grep ssh
root   2720  0.0  0.0  62656  1212 ?      Ss   Nov02   0:00 /usr/sbin/sshd
root  16834  0.0  0.0  88088  3288 ?      Ss   19:53   0:00 sshd: root@pts/0 
root  16901  0.0  0.0  61180   764 pts/0  S+   20:31   0:00 grep ssh
# ps aux|grep [s]sh
root   2720  0.0  0.0  62656  1212 ?      Ss   Nov02   0:00 /usr/sbin/sshd
root  16834  0.0  0.0  88088  3288 ?      Ss   19:53   0:00 sshd: root@pts/0 
# ps aux | grep ssh | grep -v &quot;grep&quot;
root   2720  0.0  0.0  62656  1212 ?      Ss   Nov02   0:00 /usr/sbin/sshd
root  16834  0.0  0.0  88088  3288 ?      Ss   19:53   0:00 sshd: root@pts/0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8）找出已u开头的行内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat test.txt |grep ^u
ubuntu
ubuntu linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9）输出非u开头的行内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat test.txt |grep ^[^u]
hnlinux
peida.cnblogs.com
redhat
Redhat
linuxmint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10）输出以hat结尾的行内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat test.txt |grep hat$
redhat
Redhat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11）查服务器ip地址所在行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ifconfig eth0|grep &quot;[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}&quot;
          inet addr:192.168.120.204  Bcast:192.168.120.255  Mask:255.255.255.0
# ifconfig eth0|grep -E &quot;([0-9]{1,3}\\.){3}[0-9]&quot;
          inet addr:192.168.120.204  Bcast:192.168.120.255  Mask:255.255.255.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>12）显示包含ed或者at字符的内容行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat test.txt |grep -E &quot;peida|com&quot;
peida.cnblogs.com
# cat test.txt |grep -E &quot;ed|at&quot;
redhat
Redhat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>13）显示当前目录下面以.txt 结尾的文件中的所有包含每个字符串至少有7个连续小写字符的字符串的行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># grep &#39;[a-z]\\{7\\}&#39; *.txt
test.txt:hnlinux
test.txt:peida.cnblogs.com
test.txt:linuxmint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>14）在多级目录中对文本进行递归搜索</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#grep &quot;text&quot; . -r -n   # .表示当前目录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>15）显示过滤注释( # ; 开头) 和空行后的配置信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#  grep -Ev &quot;^$|^[#;]&quot; server.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>16）过滤/etc/passwd文件下，包含root的行，并过滤后两行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep -A 2 root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>17）过滤/etc/passwd文件下，包含root的行，并过滤前两行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep -B 2 root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>18）过滤/etc/passwd文件下，包含root的行，并过滤前后两行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep -C 2 root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>18）过滤/etc/passwd文件下，包含root的行数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep -c root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>19)过滤/etc/passwd文件下，包含root的行，并打印行号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep -n root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>20）过滤/etc/下所有文件，包含root的行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep -r root /etc/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>21)过滤/etc/下所有文件，包含root的行的文件名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep -rl root /etc/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,204),l=[a];function r(t,v){return i(),n("div",null,l)}const m=e(s,[["render",r],["__file","cat.html.vue"]]);export{m as default};
