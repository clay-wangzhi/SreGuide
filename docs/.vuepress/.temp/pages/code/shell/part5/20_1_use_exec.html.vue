<template><div><h1 id="_20-1-使用-exec" tabindex="-1"><a class="header-anchor" href="#_20-1-使用-exec" aria-hidden="true">#</a> 20.1 使用 exec</h1>
<p>一个 <code v-pre>exec &lt; filename</code> 命令重定向了 <code v-pre>标准输入</code> 到一个文件。自此所有 <code v-pre>标准输入</code> 都来自该文件而不是默认来源(通常是键盘输入)。在使用 <a href="http://tldp.org/LDP/abs/html/sedawk.html#SEDREF" target="_blank" rel="noopener noreferrer">sed<ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/awk.html#AWKREF" target="_blank" rel="noopener noreferrer">awk<ExternalLinkIcon/></a> 时候这种方式可以逐行读文件并逐行解析。</p>
<p>样例 20-1. 使用 <code v-pre>exec</code> 重定向 标准输入</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash
# 使用 'exec' 重定向 标准输入 .


exec 6&lt;&amp;0          # 链接文件描述符 #6 到标准输入.
                   # .

exec &lt; data-file   # 标准输入被文件 "data-file" 替换

read a1            # 读取文件 "data-file" 首行.
read a2            # 读取文件 "data-file" 第二行

echo
echo "Following lines read from file."
echo "-------------------------------"
echo $a1
echo $a2

echo; echo; echo

exec 0&lt;&amp;6 6&lt;&amp;-
#  现在在之前保存的位置将从文件描述符 #6 将 标准输出 恢复.
#+ 且关闭文件描述符 #6 ( 6&lt;&amp;- ) 让其他程序正常使用.
#
# &lt;&amp;6 6&lt;&amp;-    also works.

echo -n "Enter data  "
read b1  # 现在按预期的，从正常的标准输入 "read".
echo "Input read from stdin."
echo "----------------------"
echo "b1 = $b1"

echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理, <code v-pre>exec &gt;filename</code> 重定向 标准输出 到指定文件. 他将所有的命令输出通常是 标准输出 重定向到指定的位置.</p>
<p><code v-pre>exec N &gt; filename</code> 影响整个脚本或当前 shell。<a href="http://tldp.org/LDP/abs/html/special-chars.html#PROCESSIDREF" target="_blank" rel="noopener noreferrer">PID<ExternalLinkIcon/></a> 从重定向脚本或 shell 的那时候已经发生了改变. 然而 <code v-pre>N &gt; filename</code> 影响的就是新派生的进程，而不是整个脚本或 shell。</p>
<p>样例 20-2. 使用 exec 重定向标准输出</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash
# reassign-stdout.sh

LOGFILE=logfile.txt

exec 6>&amp;1           # 链接文件描述符 #6 到标准输出.
                    # 保存标准输出.

exec > $LOGFILE     # 标准输出被文件 "logfile.txt" 替换.

# ----------------------------------------------------------- #
# 所有在这个块里的命令的输出都会发送到文件 $LOGFILE.

echo -n "Logfile: "
date
echo "-------------------------------------"
echo

echo "Output of \"ls -al\" command"
echo
ls -al
echo; echo
echo "Output of \"df\" command"
echo
df

# ----------------------------------------------------------- #

exec 1>&amp;6 6>&amp;-      # 关闭文件描述符 #6 恢复 标准输出.

echo
echo "== stdout now restored to default == "
echo
ls -al
echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 20-3. 用 exec 在一个脚本里同时重定向 标准输入 和 标准输出</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash
# upperconv.sh
# 转化指定的输入文件成大写.

E_FILE_ACCESS=70
E_WRONG_ARGS=71

if [ ! -r "$1" ]     # 指定的输入文件是否可读?
then
  echo "Can't read from input file!"
  echo "Usage: $0 input-file output-file"
  exit $E_FILE_ACCESS
fi                   #  同样的错误退出
                     #+ 等同如果输入文件 ($1) 未指定 (为什么?).

if [ -z "$2" ]
then
  echo "Need to specify output file."
  echo "Usage: $0 input-file output-file"
  exit $E_WRONG_ARGS
fi


exec 4&lt;&amp;0
exec &lt; $1            # 将从输入文件读取.

exec 7>&amp;1
exec > $2            # 将写入输出文件.
                     # 假定输出文件可写 (增加检测?).

# -----------------------------------------------
    cat - | tr a-z A-Z   # 转化大写.
#   ^^^^^                # 读取标准输入.
#           ^^^^^^^^^^   # 写到标准输出.
# 然而标准输入和标准输出都会被重定向.
# 注意 'cat' 可能会被遗漏.
# -----------------------------------------------

exec 1>&amp;7 7>&amp;-       # 恢复标准输出.
exec 0&lt;&amp;4 4&lt;&amp;-       # 恢复标准输入.

# 恢复后, 下面这行会预期从标准输出打印.
echo "File \"$1\" written to \"$2\" as uppercase conversion."

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>I/O 重定向是种明智的规避 <a href="http://tldp.org/LDP/abs/html/subshells.html#PARVIS" target="_blank" rel="noopener noreferrer">inaccessible variables within a subshell<ExternalLinkIcon/></a> 问题的方法.</p>
<p>样例 20-4. 规避子 shell</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#!/bin/bash
# avoid-subshell.sh
# Matthew Walker 的建议.

Lines=0

echo

cat myfile.txt | while read line;
                 do {
                   echo $line
                   (( Lines++ ));  #  递增变量的值趋近外层循环
                                   #  使用子 shell 会有问题.
                 }
                 done

echo "Number of lines read = $Lines"     # 0
                                         # 报错!

echo "------------------------"


exec 3&lt;> myfile.txt
while read line &lt;&amp;3
do {
  echo "$line"
  (( Lines++ ));                   #  递增变量的值趋近外层循环.
                                   #  没有子 shell，就不会有问题.
}
done
exec 3>&amp;-

echo "Number of lines read = $Lines"     # 8

echo

exit 0

# 下面的行并不在脚本里.

$ cat myfile.txt

Line 1.
Line 2.
Line 3.
Line 4.
Line 5.
Line 6.
Line 7.
Line 8.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


