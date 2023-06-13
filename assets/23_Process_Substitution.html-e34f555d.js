import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as v,c as r,b as n,d as e,a as l,e as d}from"./app-a7feade7.js";const t={},c=n("h1",{id:"第二十三章-进程替换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第二十三章-进程替换","aria-hidden":"true"},"#"),e(" 第二十三章. 进程替换")],-1),u={href:"http://tldp.org/LDP/abs/html/special-chars.html#PIPEREF",target:"_blank",rel:"noopener noreferrer"},o=n("code",null,"标准输出",-1),m=n("code",null,"标准输入",-1),b=n("code",null,"标准输出",-1),h=n("em",null,"进程替换",-1),p=n("em",null,"进程替换",-1),g={href:"http://tldp.org/LDP/abs/html/special-chars.html#PROCESSREF",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"标准输入",-1),_=d(`<p><strong>样板</strong> 命令列表要用括号括起来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;(command_list)
&lt;(command_list)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进程替换使用 <code>/dev/fd/&lt;n&gt;</code> 文件发送括号内进程的结果到另一个进程。[1]</p><p><img src="http://tldp.org/LDP/abs/images/caution.gif">&quot;&lt;&quot;或&quot;&gt;&quot;与括号之间没有空格，加上空格或报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ echo &gt;(true)
/dev/fd/63

bash$ echo &lt;(true)
/dev/fd/63

bash$ echo &gt;(true) &lt;(true)
/dev/fd/63 /dev/fd/62

bash$ wc &lt;(cat /usr/share/dict/linux.words)
 483523  483523 4992010 /dev/fd/63

bash$ grep script /usr/share/dict/linux.words | wc
    262     262    3601

bash$ wc &lt;(grep script /usr/share/dict/linux.words)
    262     262    3601 /dev/fd/63
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),f=n("img",{src:"http://tldp.org/LDP/abs/images/note.gif"},null,-1),$=n("code",null,"--fIn 和 fOut--",-1),q={href:"http://tldp.org/LDP/abs/html/internal.html#TRUEREF",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"标准输入",-1),z=n("code",null,"/dev/fd/fIn",-1),y=n("strong",null,"echo",-1),P=n("code",null,"/dev/fd/<n>",-1),k=d(`<p>进程替换可以比较两个不同命令的输出，或者同一个命令使用不同选项的输出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ comm &lt;(ls -l) &lt;(ls -al)
total 12
-rw-rw-r--    1 bozo bozo       78 Mar 10 12:58 File0
-rw-rw-r--    1 bozo bozo       42 Mar 10 12:58 File2
-rw-rw-r--    1 bozo bozo      103 Mar 10 12:58 t2.sh
        total 20
        drwxrwxrwx    2 bozo bozo     4096 Mar 10 18:10 .
        drwx------   72 bozo bozo     4096 Mar 10 17:58 ..
        -rw-rw-r--    1 bozo bozo       78 Mar 10 12:58 File0
        -rw-rw-r--    1 bozo bozo       42 Mar 10 12:58 File2
        -rw-rw-r--    1 bozo bozo      103 Mar 10 12:58 t2.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进程替换可以比较两个目录的内容——来检查哪些文件在这个目录而不在那个目录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>diff &lt;(ls $first_directory) &lt;(ls $second_directory)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进程替换的一些其他用法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>read -a list &lt; &lt;( od -Ad -w24 -t u2 /dev/urandom )
#  从 /dev/urandom 读取一个随机数列表
#+ 用 &quot;od&quot; 处理
#+ 输送到 &quot;read&quot; 的标准输入. . .
#  来自 &quot;insertion-sort.bash&quot; 示例脚本。
#  致谢：JuanJo Ciarlante。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PORT=6881   # bittorrent（BT端口）

#  扫描端口，确保没有恶意行为
netcat -l $PORT | tee&gt;(md5sum -&gt;mydata-orig.md5) |
gzip | tee&gt;(md5sum - | sed &#39;s/-$/mydata.lz2/&#39;&gt;mydata-gz.md5)&gt;mydata.gz

#  检查解压缩结果：
  gzip -d&lt;mydata.gz | md5sum -c mydata-orig.md5)
#  对原件的MD5校验用来检查标准输入，并且探测压缩当中出现的问题。

#  Bill Davidsen 贡献了这个例子
#+ （ABS指南作者做了轻微修改）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &lt;(ls -l)
# 等价于	ls -l | cat

sort -k 9 &lt;(ls -l /bin) &lt;(ls -l /usr/bin) &lt;(ls -l /usr/X11R6/bin)
#  列出 3 个主要 &#39;bin&#39; 目录的文件，按照文件名排序。
#  注意，有三个（数一下）单独的命令输送给了 &#39;sort&#39;。

diff &lt;(command1) &lt;(command2)    # 比较命令输出结果的不同之处。

tar cf &gt;(bzip2 -c &gt; file.tar.bz2) $directory_name

#  调用 &quot;tar cf /dev/fd/?? $directory_name&quot;，然后 &quot;bzip2 -c &gt; file.tar.bz2&quot;。
#
#  因为 /dev/fd/&lt;n&gt; 系统特性
#  不需要在两个命令之间使用管道符
#
#  这个可以模拟
#
bzip2 -c &lt; pipe &gt; file.tar.bz2&amp;
tar cf pipe $directory_name
rm pipe
#	或者
exec 3&gt;&amp;1
tar cf /dev/fd/4 $directory_name 4&gt;&amp;1 &gt;&amp;3 3&gt;&amp;- | bzip2 -c &gt; file.tar.bz2 3&gt;&amp;-
exec 3&gt;&amp;-

# 致谢：Stéphane Chazelas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),S={href:"http://tldp.org/LDP/abs/html/gotchas.html#BADREAD0",target:"_blank",rel:"noopener noreferrer"},D=d(`<p><strong>例23-1 不用 fork 的代码块重定向。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

#  wr-ps.bash: 使用进程替换的 while-read 循环。

#  示例由 Tomas Pospisek 贡献。
# （ABS指南作者做了大量改动。）

echo

echo &quot;random input&quot; | while read i
do
  global=3D&quot;: Not available outside the loop.&quot;
  # ... 因为在子 shell 中运行。
done

echo &quot;\\$global (从子进程之外) = $global&quot;
# $global (从子进程之外) =

echo; echo &quot;--&quot;; echo

while read i
do
  echo $i
  global=3D&quot;: Available outside the loop.&quot;
  # ... 因为没有在子 shell 中运行。
done &lt; &lt;( echo &quot;random input&quot; )
#    ^ ^

echo &quot;\\$global (使用进程替换) = $global&quot;
#  随机输入
#  $global (使用进程替换)= 3D: Available outside the loop.


echo; echo &quot;##########&quot;; echo



# 同样道理 . . .

declare -a inloop
index=0
cat $0 | while read line
do
  inloop[$index]=&quot;$line&quot;
  ((index++))
  # 在子 shell 中运行，所以 ...
done
echo &quot;OUTPUT = &quot;
echo \${inloop[*]}           # ... 什么也没有显示。


echo; echo &quot;--&quot;; echo


declare -a outloop
index=0
while read line
do
  outloop[$index]=&quot;$line&quot;
  ((index++))
  # 没有在子 shell 中运行，所以 ...
done &lt; &lt;( cat $0 )
echo &quot;OUTPUT = &quot;
echo \${outloop[*]}          # ... 整个脚本的结果显示出来。

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是个类似的例子。</p><p><strong>例 23-2. 重定向进程替换的输出到一个循环内</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# psub.bash
#  受 Diego Molina 启发（感谢！）。

declare -a array0
while read
do
  array0[\${#array0[@]}]=&quot;$REPLY&quot;
done &lt; &lt;( sed -e &#39;s/bash/CRASH-BANG!/&#39; $0 | grep bin | awk &#39;{print $1}&#39; )
#  由进程替换来设置&#39;read&#39;默认变量（$REPLY）。
#+ 然后将变量复制到一个数组。

echo &quot;\${array0[@]}&quot;

exit $?

# ====================================== #
# 运行结果：
bash psub.bash

#!/bin/CRASH-BANG! done #!/bin/CRASH-BANG!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个读者发来一个有趣的进程替换例子，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># SuSE 发行版中提取的脚本片段：

# --------------------------------------------------------------#
while read  des what mask iface; do
# 一些命令 ...
done &lt; &lt;(route -n)  
#    ^ ^  第一个 &lt; 是重定向，第二个是进程替换。

#  为了测试，我们让它来做点儿事情。
while read  des what mask iface; do
  echo $des $what $mask $iface
done &lt; &lt;(route -n)  

# 输出内容:
# Kernel IP routing table
# Destination Gateway Genmask Flags Metric Ref Use Iface
# 127.0.0.0 0.0.0.0 255.0.0.0 U 0 0 0 lo
# --------------------------------------------------------------#

#  正如 Stéphane Chazelas 指出的,
#+ 一个更容易理解的等价代码如下：
route -n |
  while read des what mask iface; do   # 通过管道输出设置的变量
    echo $des $what $mask $iface
  done  #  这段代码的结果更上面的相同。
        #  但是，Ulrich Gayer 指出 . . .
        #+ 这段简化版等价代码在 while 循环里用了子 shell，
        #+ 因此当管道终止时变量都消失了。

# --------------------------------------------------------------#

#  然而，Filip Moritz 说上面的两个例子有一个微妙的区别，
#+ 见下面的代码

(
route -n | while read x; do ((y++)); done
echo $y # $y is still unset

while read x; do ((y++)); done &lt; &lt;(route -n)
echo $y # $y has the number of lines of output of route -n
)

#  更通俗地说（译者注：原文本行少了注释符）
(
: | x=x
# 似乎启动了子 shell ，就像
: | ( x=x )
# 而
x=x &lt; &lt;(:)
# 并没有。
)
#  这个方法在解析 csv 和类似格式时很有用。
#  也就是在效果上，原始 SuSE 系统的代码片段就是做这个用的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注解 [1] 这个与命名管道（使用临时文件）的效果相同，而且事实上，进程替换也曾经用过命名管道。</p>`,8);function R(B,E){const i=a("ExternalLinkIcon");return v(),r("div",null,[c,n("p",null,[e("用"),n("a",u,[e("管道"),l(i)]),e(" 将一个命令的 "),o,e(" 输送到另一个命令的 "),m,e(" 是个强大的技术。但是如果你需要用管道输送多个命令的 "),b,e(" 怎么办？这时候 "),h,e(" 就派上用场了。")]),n("p",null,[p,e(" 把一个（或多个）"),n("a",g,[e("进程"),l(i)]),e(" 的输出送到另一个进程的 "),x,e("。")]),_,n("p",null,[f,e("Bash用两个文件描述符创建管道，"),$,e(" 。"),n("a",q,[e("true"),l(i)]),e(" 的"),w,e("连接 fOut(dup2(fOut, 0))，然后Bash 传递一个 "),z,e(" 参数给 "),y,e(" 。在不使用 "),P,e(" 的系统里，Bash可以用临时文件（感谢 S.C. 指出这点）。")]),k,n("p",null,[e("在子shell中 "),n("a",S,[e("echo 命令用管道输送给 while-read 循环"),l(i)]),e("时会出现问题，下面是避免的方法：")]),D])}const L=s(t,[["render",R],["__file","23_Process_Substitution.html.vue"]]);export{L as default};
