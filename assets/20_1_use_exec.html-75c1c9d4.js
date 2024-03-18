import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as v,o as a,c,a as n,b as e,d as l,e as s}from"./app-d870e103.js";const u={},r=n("h1",{id:"_20-1-使用-exec",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_20-1-使用-exec","aria-hidden":"true"},"#"),e(" 20.1 使用 exec")],-1),t=n("code",null,"exec < filename",-1),m=n("code",null,"标准输入",-1),o=n("code",null,"标准输入",-1),b={href:"http://tldp.org/LDP/abs/html/sedawk.html#SEDREF",target:"_blank",rel:"noopener noreferrer"},h={href:"http://tldp.org/LDP/abs/html/awk.html#AWKREF",target:"_blank",rel:"noopener noreferrer"},p=s(`<p>样例 20-1. 使用 <code>exec</code> 重定向 标准输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# 使用 &#39;exec&#39; 重定向 标准输入 .


exec 6&lt;&amp;0          # 链接文件描述符 #6 到标准输入.
                   # .

exec &lt; data-file   # 标准输入被文件 &quot;data-file&quot; 替换

read a1            # 读取文件 &quot;data-file&quot; 首行.
read a2            # 读取文件 &quot;data-file&quot; 第二行

echo
echo &quot;Following lines read from file.&quot;
echo &quot;-------------------------------&quot;
echo $a1
echo $a2

echo; echo; echo

exec 0&lt;&amp;6 6&lt;&amp;-
#  现在在之前保存的位置将从文件描述符 #6 将 标准输出 恢复.
#+ 且关闭文件描述符 #6 ( 6&lt;&amp;- ) 让其他程序正常使用.
#
# &lt;&amp;6 6&lt;&amp;-    also works.

echo -n &quot;Enter data  &quot;
read b1  # 现在按预期的，从正常的标准输入 &quot;read&quot;.
echo &quot;Input read from stdin.&quot;
echo &quot;----------------------&quot;
echo &quot;b1 = $b1&quot;

echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理, <code>exec &gt;filename</code> 重定向 标准输出 到指定文件. 他将所有的命令输出通常是 标准输出 重定向到指定的位置.</p>`,3),q=n("code",null,"exec N > filename",-1),_={href:"http://tldp.org/LDP/abs/html/special-chars.html#PROCESSIDREF",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"N > filename",-1),f=s(`<p>样例 20-2. 使用 exec 重定向标准输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# reassign-stdout.sh

LOGFILE=logfile.txt

exec 6&gt;&amp;1           # 链接文件描述符 #6 到标准输出.
                    # 保存标准输出.

exec &gt; $LOGFILE     # 标准输出被文件 &quot;logfile.txt&quot; 替换.

# ----------------------------------------------------------- #
# 所有在这个块里的命令的输出都会发送到文件 $LOGFILE.

echo -n &quot;Logfile: &quot;
date
echo &quot;-------------------------------------&quot;
echo

echo &quot;Output of \\&quot;ls -al\\&quot; command&quot;
echo
ls -al
echo; echo
echo &quot;Output of \\&quot;df\\&quot; command&quot;
echo
df

# ----------------------------------------------------------- #

exec 1&gt;&amp;6 6&gt;&amp;-      # 关闭文件描述符 #6 恢复 标准输出.

echo
echo &quot;== stdout now restored to default == &quot;
echo
ls -al
echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 20-3. 用 exec 在一个脚本里同时重定向 标准输入 和 标准输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# upperconv.sh
# 转化指定的输入文件成大写.

E_FILE_ACCESS=70
E_WRONG_ARGS=71

if [ ! -r &quot;$1&quot; ]     # 指定的输入文件是否可读?
then
  echo &quot;Can&#39;t read from input file!&quot;
  echo &quot;Usage: $0 input-file output-file&quot;
  exit $E_FILE_ACCESS
fi                   #  同样的错误退出
                     #+ 等同如果输入文件 ($1) 未指定 (为什么?).

if [ -z &quot;$2&quot; ]
then
  echo &quot;Need to specify output file.&quot;
  echo &quot;Usage: $0 input-file output-file&quot;
  exit $E_WRONG_ARGS
fi


exec 4&lt;&amp;0
exec &lt; $1            # 将从输入文件读取.

exec 7&gt;&amp;1
exec &gt; $2            # 将写入输出文件.
                     # 假定输出文件可写 (增加检测?).

# -----------------------------------------------
    cat - | tr a-z A-Z   # 转化大写.
#   ^^^^^                # 读取标准输入.
#           ^^^^^^^^^^   # 写到标准输出.
# 然而标准输入和标准输出都会被重定向.
# 注意 &#39;cat&#39; 可能会被遗漏.
# -----------------------------------------------

exec 1&gt;&amp;7 7&gt;&amp;-       # 恢复标准输出.
exec 0&lt;&amp;4 4&lt;&amp;-       # 恢复标准输入.

# 恢复后, 下面这行会预期从标准输出打印.
echo &quot;File \\&quot;$1\\&quot; written to \\&quot;$2\\&quot; as uppercase conversion.&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={href:"http://tldp.org/LDP/abs/html/subshells.html#PARVIS",target:"_blank",rel:"noopener noreferrer"},L=s(`<p>样例 20-4. 规避子 shell</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
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

echo &quot;Number of lines read = $Lines&quot;     # 0
                                         # 报错!

echo &quot;------------------------&quot;


exec 3&lt;&gt; myfile.txt
while read line &lt;&amp;3
do {
  echo &quot;$line&quot;
  (( Lines++ ));                   #  递增变量的值趋近外层循环.
                                   #  没有子 shell，就不会有问题.
}
done
exec 3&gt;&amp;-

echo &quot;Number of lines read = $Lines&quot;     # 8

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function $(E,k){const i=v("ExternalLinkIcon");return a(),c("div",null,[r,n("p",null,[e("一个 "),t,e(" 命令重定向了 "),m,e(" 到一个文件。自此所有 "),o,e(" 都来自该文件而不是默认来源(通常是键盘输入)。在使用 "),n("a",b,[e("sed"),l(i)]),e(" 和 "),n("a",h,[e("awk"),l(i)]),e(" 时候这种方式可以逐行读文件并逐行解析。")]),p,n("p",null,[q,e(" 影响整个脚本或当前 shell。"),n("a",_,[e("PID"),l(i)]),e(" 从重定向脚本或 shell 的那时候已经发生了改变. 然而 "),x,e(" 影响的就是新派生的进程，而不是整个脚本或 shell。")]),f,n("p",null,[e("I/O 重定向是种明智的规避 "),n("a",g,[e("inaccessible variables within a subshell"),l(i)]),e(" 问题的方法.")]),L])}const N=d(u,[["render",$],["__file","20_1_use_exec.html.vue"]]);export{N as default};
