import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as v,c as r,a as n,b as e,d as l,e as s}from"./app-be40ec11.js";const u={},t=n("h1",{id:"_20-2-重定向代码块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_20-2-重定向代码块","aria-hidden":"true"},"#"),e(" 20.2 重定向代码块")],-1),c={href:"http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF",target:"_blank",rel:"noopener noreferrer"},m={href:"http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1",target:"_blank",rel:"noopener noreferrer"},b={href:"http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF",target:"_blank",rel:"noopener noreferrer"},o={href:"http://tldp.org/LDP/abs/html/tests.html#IFTHEN",target:"_blank",rel:"noopener noreferrer"},h={href:"http://tldp.org/LDP/abs/html/complexfunct.html#REALNAME",target:"_blank",rel:"noopener noreferrer"},q=s(`<p>样例 20-5. while 循环的重定向</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# redir2.sh

if [ -z &quot;$1&quot; ]
then
  Filename=names.data       # 如果不指定文件名的默认值.
else
  Filename=$1
fi  
#+ Filename=\${1:-names.data}
#  can replace the above test (parameter substitution).

count=0

echo

while [ &quot;$name&quot; != Smith ]  # 为什么变量 &quot;$name&quot; 加引号?
do
  read name                 # 从 $Filename 读取值, 而不是 标准输入.
  echo $name
  let &quot;count += 1&quot;
done &lt;&quot;$Filename&quot;           # 重定向标准输入到文件 $Filename. 
#    ^^^^^^^^^^^^

echo; echo &quot;$count names read&quot;; echo

exit 0

#  注意在一些老的脚本语言中,
#+ 循环的重定向会跑在子 shell 的环境中.
#  因此, $count 返回 0, 在循环外已经初始化过值.
#  Bash 和 ksh *只要可能* 会避免启动子 shell ,
#+ 所以这个脚本作为样例运行成功.
#  (感谢 Heiner Steven 指出这点.)

#  然而 . . .
#  Bash 有时候 *能* 在 &quot;只读的 while&quot; 循环启动子进程 ,
#+ 不同于 &quot;while&quot; 循环的重定向.

abc=hi
echo -e &quot;1\\n2\\n3&quot; | while read l
     do abc=&quot;$l&quot;
        echo $abc
     done
echo $abc

#  感谢, Bruno de Oliveira Schneider 上面的演示代码.
#  也感谢 Brian Onn 纠正了注释的错误.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 20-6. 另一种形式的 while 循环重定向</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

# 这是之前的另一种形式的脚本.

#  Heiner Steven 提议在重定向循环时候运行在子 shell 可以作为一个变通方案
#+ 因此直到循环终止时循环内部的变量不需要保证他们的值


if [ -z &quot;$1&quot; ]
then
  Filename=names.data     # 如果不指定文件名的默认值.
else
  Filename=$1
fi  


exec 3&lt;&amp;0                 # 保存标准输入到文件描述符 3.
exec 0&lt;&quot;$Filename&quot;        # 重定向标准输入.

count=0
echo


while [ &quot;$name&quot; != Smith ]
do
  read name               # 从重定向的标准输入($Filename)读取值.
  echo $name
  let &quot;count += 1&quot;
done                      #  从 $Filename 循环读
                          #+ 因为第 20 行.

#  这个脚本的早期版本在 &quot;while&quot; 循环 done &lt;&quot;$Filename&quot; 终止
#  练习:
#  为什么这个没必要?


exec 0&lt;&amp;3                 # 恢复早前的标准输入.
exec 3&lt;&amp;-                 # 关闭临时的文件描述符 3.

echo; echo &quot;$count names read&quot;; echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 20-7. until 循环的重定向</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# 同先前的脚本一样, 不过用的是 &quot;until&quot; 循环.

if [ -z &quot;$1&quot; ]
then
  Filename=names.data         # 如果不指定文件的默认值.
else
  Filename=$1
fi  

# while [ &quot;$name&quot; != Smith ]
until [ &quot;$name&quot; = Smith ]     # 变  !=  为 =.
do
  read name                   # 从 $Filename 读取值, 而不是标准输入.
  echo $name
done &lt;&quot;$Filename&quot;             # 重定向标准输入到文件 &quot;$Filename&quot;. 
#    ^^^^^^^^^^^^

# 和之前的 &quot;while&quot; 循环样例相同的结果.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 20-8. for 循环的重定向</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
#!/bin/bash

if [ -z &quot;$1&quot; ]
then
  Filename=names.data          # 如果不指定文件的默认值.
else
  Filename=$1
fi  

line_count=\`wc $Filename | awk &#39;{ print $1 }&#39;\`
#           目标文件的行数.
#
#  非常作和不完善, 然而这只是证明 &quot;for&quot; 循环中的重定向标准输入是可行的
#+ 如果你足够聪明的话.
#
# 简介的做法是     line_count=$(wc -l &lt; &quot;$Filename&quot;)


for name in \`seq $line_count\`  # 回忆下 &quot;seq&quot; 可以输入数组序列.
# while [ &quot;$name&quot; != Smith ]   --   比 &quot;while&quot; 循环更复杂的循环   --
do
  read name                    # 从 $Filename 读取值, 而不是标准输入.
  echo $name
  if [ &quot;$name&quot; = Smith ]       # 这需要所有这些额外的设置.
  then
    break
  fi  
done &lt;&quot;$Filename&quot;              # 重定向标准输入到文件 &quot;$Filename&quot;. 
#    ^^^^^^^^^^^^

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以修改先前的样例也可以重定向循环的输出.</p><p>样例 20-9. for 循环的重定向 (同时重定向标准输入和标准输出)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

if [ -z &quot;$1&quot; ]
then
  Filename=names.data          # 如果不指定文件的默认值.
else
  Filename=$1
fi  

Savefile=$Filename.new         # 报错的结果的文件名.
FinalName=Jonah                # 停止 &quot;read&quot; 的终止字符.

line_count=\`wc $Filename | awk &#39;{ print $1 }&#39;\`  # 目标文件行数.


for name in \`seq $line_count\`
do
  read name
  echo &quot;$name&quot;
  if [ &quot;$name&quot; = &quot;$FinalName&quot; ]
  then
    break
  fi  
done &lt; &quot;$Filename&quot; &gt; &quot;$Savefile&quot;     # 重定向标准输入到文件 $Filename,
#    ^^^^^^^^^^^^^^^^^^^^^^^^^^^       并且报错结果到备份文件.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 20-10. if/then test的重定向</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

if [ -z &quot;$1&quot; ]
then
  Filename=names.data   # 如果不指定文件的默认值.
else
  Filename=$1
fi  

TRUE=1

if [ &quot;$TRUE&quot; ]          # if true    和   if :   都可以工作.
then
 read name
 echo $name
fi &lt;&quot;$Filename&quot;
#  ^^^^^^^^^^^^

# 只读取文件的首行.
# &quot;if/then&quot; test 除非嵌入在循环内部否则没办法迭代.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例 20-11. 上述样例的数据文件 names.data</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
Aristotle
Arrhenius
Belisarius
Capablanca
Dickens
Euler
Goethe
Hegel
Jonah
Laplace
Maroczy
Purcell
Schmidt
Schopenhauer
Semmelweiss
Smith
Steinmetz
Tukhashevsky
Turing
Venn
Warshawski
Znosko-Borowski

#+ 这是 &quot;redir2.sh&quot;, &quot;redir3.sh&quot;, &quot;redir4.sh&quot;, &quot;redir4a.sh&quot;, &quot;redir5.sh&quot; 的数据文件.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),p={href:"http://tldp.org/LDP/abs/html/special-chars.html#RPMCHECK",target:"_blank",rel:"noopener noreferrer"},$={href:"http://tldp.org/LDP/abs/html/here-docs.html#HEREDOCREF",target:"_blank",rel:"noopener noreferrer"},f=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 这个样例来自 Albert Siersema
# 得到了使用许可 (感谢!).

function doesOutput()
 # 当然这也是个外部命令.
 # 这里用函数进行演示会更好一点.
{
  ls -al *.jpg | awk &#39;{print $5,$9}&#39;
}


nr=0          #  我们希望在 &#39;while&#39; 循环里可以操作这些
totalSize=0   #+ 并且在 &#39;while&#39; 循环结束时看到改变.

while read fileSize fileName ; do
  echo &quot;$fileName is $fileSize bytes&quot;
  let nr++
  totalSize=$((totalSize+fileSize))   # Or: &quot;let totalSize+=fileSize&quot;
done&lt;&lt;EOF
$(doesOutput)
EOF

echo &quot;$nr files totaling $totalSize bytes&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function _(g,x){const i=a("ExternalLinkIcon");return v(),r("div",null,[t,n("p",null,[e("有如 "),n("a",c,[e("while"),l(i)]),e(", "),n("a",m,[e("until"),l(i)]),e(", 和 "),n("a",b,[e("for"),l(i)]),e(" 循环, 甚至 "),n("a",o,[e("if/then"),l(i)]),e(" 也可以重定向 标准输入 测试代码块. 甚至连一个函数都可以用这个方法进行重定向 (见 "),n("a",h,[e("样例 24-11"),l(i)]),e('). 代码块的末尾部分的 "<" 就是用来完成这个的.')]),q,n("p",null,[e("代码块的标准输出的重定向影响了保存到文件的输出. 见样例 "),n("a",p,[e("样例 3-2"),l(i)]),e(".")]),n("p",null,[n("a",$,[e("嵌入文档"),l(i)]),e(" 是种特别的重定向代码块的方法. 既然如此,它使得在 while 循环的标准输入里传入嵌入文档的输出变得可能.")]),f])}const S=d(u,[["render",_],["__file","20_2_redirecting_code_blocks.html.vue"]]);export{S as default};
