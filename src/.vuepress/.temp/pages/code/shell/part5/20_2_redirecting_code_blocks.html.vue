<template><h1 id="_20-2-重定向代码块" tabindex="-1"><a class="header-anchor" href="#_20-2-重定向代码块" aria-hidden="true">#</a> 20.2 重定向代码块</h1>
<p>有如 <a href="http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF" target="_blank" rel="noopener noreferrer">while<ExternalLinkIcon/></a>, <a href="http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1" target="_blank" rel="noopener noreferrer">until<ExternalLinkIcon/></a>, 和 <a href="http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF" target="_blank" rel="noopener noreferrer">for<ExternalLinkIcon/></a> 循环, 甚至 <a href="http://tldp.org/LDP/abs/html/tests.html#IFTHEN" target="_blank" rel="noopener noreferrer">if/then<ExternalLinkIcon/></a> 也可以重定向 标准输入 测试代码块. 甚至连一个函数都可以用这个方法进行重定向 (见 <a href="http://tldp.org/LDP/abs/html/complexfunct.html#REALNAME" target="_blank" rel="noopener noreferrer">样例 24-11<ExternalLinkIcon/></a>).  代码块的末尾部分的 &quot;&lt;&quot; 就是用来完成这个的.</p>
<p>样例 20-5. while 循环的重定向</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash
# redir2.sh

if [ -z "$1" ]
then
  Filename=names.data       # 如果不指定文件名的默认值.
else
  Filename=$1
fi  
#+ Filename=${1:-names.data}
#  can replace the above test (parameter substitution).

count=0

echo

while [ "$name" != Smith ]  # 为什么变量 "$name" 加引号?
do
  read name                 # 从 $Filename 读取值, 而不是 标准输入.
  echo $name
  let "count += 1"
done &lt;"$Filename"           # 重定向标准输入到文件 $Filename. 
#    ^^^^^^^^^^^^

echo; echo "$count names read"; echo

exit 0

#  注意在一些老的脚本语言中,
#+ 循环的重定向会跑在子 shell 的环境中.
#  因此, $count 返回 0, 在循环外已经初始化过值.
#  Bash 和 ksh *只要可能* 会避免启动子 shell ,
#+ 所以这个脚本作为样例运行成功.
#  (感谢 Heiner Steven 指出这点.)

#  然而 . . .
#  Bash 有时候 *能* 在 "只读的 while" 循环启动子进程 ,
#+ 不同于 "while" 循环的重定向.

abc=hi
echo -e "1\n2\n3" | while read l
     do abc="$l"
        echo $abc
     done
echo $abc

#  感谢, Bruno de Oliveira Schneider 上面的演示代码.
#  也感谢 Brian Onn 纠正了注释的错误.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>样例 20-6. 另一种形式的 while 循环重定向</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash

# 这是之前的另一种形式的脚本.

#  Heiner Steven 提议在重定向循环时候运行在子 shell 可以作为一个变通方案
#+ 因此直到循环终止时循环内部的变量不需要保证他们的值


if [ -z "$1" ]
then
  Filename=names.data     # 如果不指定文件名的默认值.
else
  Filename=$1
fi  


exec 3&lt;&amp;0                 # 保存标准输入到文件描述符 3.
exec 0&lt;"$Filename"        # 重定向标准输入.

count=0
echo


while [ "$name" != Smith ]
do
  read name               # 从重定向的标准输入($Filename)读取值.
  echo $name
  let "count += 1"
done                      #  从 $Filename 循环读
                          #+ 因为第 20 行.

#  这个脚本的早期版本在 "while" 循环 done &lt;"$Filename" 终止
#  练习:
#  为什么这个没必要?


exec 0&lt;&amp;3                 # 恢复早前的标准输入.
exec 3&lt;&amp;-                 # 关闭临时的文件描述符 3.

echo; echo "$count names read"; echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>样例 20-7. until 循环的重定向</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash
# 同先前的脚本一样, 不过用的是 "until" 循环.

if [ -z "$1" ]
then
  Filename=names.data         # 如果不指定文件的默认值.
else
  Filename=$1
fi  

# while [ "$name" != Smith ]
until [ "$name" = Smith ]     # 变  !=  为 =.
do
  read name                   # 从 $Filename 读取值, 而不是标准输入.
  echo $name
done &lt;"$Filename"             # 重定向标准输入到文件 "$Filename". 
#    ^^^^^^^^^^^^

# 和之前的 "while" 循环样例相同的结果.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>样例 20-8. for 循环的重定向</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
#!/bin/bash

if [ -z "$1" ]
then
  Filename=names.data          # 如果不指定文件的默认值.
else
  Filename=$1
fi  

line_count=`wc $Filename | awk '{ print $1 }'`
#           目标文件的行数.
#
#  非常作和不完善, 然而这只是证明 "for" 循环中的重定向标准输入是可行的
#+ 如果你足够聪明的话.
#
# 简介的做法是     line_count=$(wc -l &lt; "$Filename")


for name in `seq $line_count`  # 回忆下 "seq" 可以输入数组序列.
# while [ "$name" != Smith ]   --   比 "while" 循环更复杂的循环   --
do
  read name                    # 从 $Filename 读取值, 而不是标准输入.
  echo $name
  if [ "$name" = Smith ]       # 这需要所有这些额外的设置.
  then
    break
  fi  
done &lt;"$Filename"              # 重定向标准输入到文件 "$Filename". 
#    ^^^^^^^^^^^^

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>我们可以修改先前的样例也可以重定向循环的输出.</p>
<p>样例 20-9. for 循环的重定向 (同时重定向标准输入和标准输出)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash

if [ -z "$1" ]
then
  Filename=names.data          # 如果不指定文件的默认值.
else
  Filename=$1
fi  

Savefile=$Filename.new         # 报错的结果的文件名.
FinalName=Jonah                # 停止 "read" 的终止字符.

line_count=`wc $Filename | awk '{ print $1 }'`  # 目标文件行数.


for name in `seq $line_count`
do
  read name
  echo "$name"
  if [ "$name" = "$FinalName" ]
  then
    break
  fi  
done &lt; "$Filename" > "$Savefile"     # 重定向标准输入到文件 $Filename,
#    ^^^^^^^^^^^^^^^^^^^^^^^^^^^       并且报错结果到备份文件.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>样例 20-10. if/then test的重定向</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash

if [ -z "$1" ]
then
  Filename=names.data   # 如果不指定文件的默认值.
else
  Filename=$1
fi  

TRUE=1

if [ "$TRUE" ]          # if true    和   if :   都可以工作.
then
 read name
 echo $name
fi &lt;"$Filename"
#  ^^^^^^^^^^^^

# 只读取文件的首行.
# "if/then" test 除非嵌入在循环内部否则没办法迭代.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>样例 20-11. 上述样例的数据文件 names.data</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
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

#+ 这是 "redir2.sh", "redir3.sh", "redir4.sh", "redir4a.sh", "redir5.sh" 的数据文件.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>代码块的标准输出的重定向影响了保存到文件的输出. 见样例 <a href="http://tldp.org/LDP/abs/html/special-chars.html#RPMCHECK" target="_blank" rel="noopener noreferrer">样例 3-2<ExternalLinkIcon/></a>.</p>
<p><a href="http://tldp.org/LDP/abs/html/here-docs.html#HEREDOCREF" target="_blank" rel="noopener noreferrer">嵌入文档<ExternalLinkIcon/></a> 是种特别的重定向代码块的方法. 既然如此,它使得在 while 循环的标准输入里传入嵌入文档的输出变得可能.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 这个样例来自 Albert Siersema
# 得到了使用许可 (感谢!).

function doesOutput()
 # 当然这也是个外部命令.
 # 这里用函数进行演示会更好一点.
{
  ls -al *.jpg | awk '{print $5,$9}'
}


nr=0          #  我们希望在 'while' 循环里可以操作这些
totalSize=0   #+ 并且在 'while' 循环结束时看到改变.

while read fileSize fileName ; do
  echo "$fileName is $fileSize bytes"
  let nr++
  totalSize=$((totalSize+fileSize))   # Or: "let totalSize+=fileSize"
done&lt;&lt;EOF
$(doesOutput)
EOF

echo "$nr files totaling $totalSize bytes"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>
