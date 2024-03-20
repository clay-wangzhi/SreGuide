import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as u,c,a as i,b as n,d as e,w as v,e as l}from"./app-b1cf59f4.js";const t={},m=l(`<h1 id="_27-数组" tabindex="-1"><a class="header-anchor" href="#_27-数组" aria-hidden="true">#</a> 27 数组</h1><p>新版本的Bash支持一维数组。 数组元素可以使用符号<strong>variable[xx]</strong> 来初始化。另外，脚本可以使用<strong>declare -a variable</strong>语句来制定一个数组。 如果想引用一个数组元素（也就是取值），可以使用大括号，访问形式为 \${element[xx]} 。</p><p>例子 27-1. 简单的数组使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

area[11]=23
area[13]=37
area[51]=UFOs

#  数组成员不一定非得是相邻或连续的。

#  数组的部分成员可以不被初始化。
#  数组中允许空缺元素。
#  实际上，保存着稀疏数据的数组（“稀疏数组”） 
#+ 在电子表格处理软件中是非常有用的。

echo -n &quot;area[11] = &quot;
echo \${area[11]}    #  需要{大括号}。

echo -n &quot;area[13] = &quot;
echo \${area[13]}

echo &quot;Contents of area[51] are \${area[51]}.&quot;

# 没被初始化的数组成员打印为空值（null变量）。
echo -n &quot;area[43] = &quot;
echo \${area[43]}
echo &quot;(area[43] unassigned)&quot;

echo

# 两个数组元素的和被赋值给另一个数组元素。
area[5]=\`expr \${area[11]} + \${area[13]}\`
echo &quot;area[5] = area[11] + area[13]&quot;
echo -n &quot;area[5] = &quot;
echo \${area[5]}

area[6]=\`expr \${area[11]} + \${area[51]}\`
echo &quot;area[6] = area[11] + area[51]&quot;
echo -n &quot;area[6] = &quot;
echo \${area[6]}
# 这里会失败，是因为不允许整数与字符串相加。

echo; echo; echo

# -----------------------------------------------------------------
# 另一个数组, &quot;area2&quot;.

# 另一种给数组变量赋值的方法...
# array_name=( XXX YYY ZZZ ... )

area2=( zero one two three four )

echo -n &quot;area2[0] = &quot;
echo \${area2[0]}
# 啊哈，从0开始计算数组下标（也就是，数组的第一个元素为[0],而不是[1]).

echo -n &quot;area2[1] = &quot;
echo \${area2[1]}    # [1] 是数组的第二个元素。
# -----------------------------------------------------------------

echo; echo; echo

# -----------------------------------------------
# 第三个数组， &quot;area3&quot;.
# 另外一种给数组元素赋值的方法...
# array_name=([xx]=XXX [yy]=YYY ...)

area3=([17]=seventeen [24]=twenty-four)

echo -n &quot;area3[17] = &quot;
echo \${area3[17]}

echo -n &quot;area3[24] = &quot;
echo \${area3[24]}
# -----------------------------------------------

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看出，初始化整数的一个简单的方法是 array=( element1 element2 ... elementN ) 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>base64_charset=( {A..Z} {a..z} {0..9} + / = )
#  使用扩展的一对范围 Using extended brace expansion
#+ 去初始化数组的元素。to initialize the elements of the array.
# 从 vladz&#39;s &quot;base64.sh&quot; 脚本中摘录过来。
#+ 在&quot;Contributed Scripts&quot; 附录中可以看到.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bash允许把变量当成数据来操作，即使这个变量没有明确地被声明为数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string=abcABC123ABCabc
echo \${string[@]}   # abcABC123ABCabc
echo \${string[*]}   # abcABC123ABCabc
echo \${string[0]}   # abcABC123ABCabc
echo \${string[1]}   # 没有输出！
                    # 为什么?
echo \${#string[@]}  # 1
                    # 数组中只有一个元素。
                    # 就是这个字符串本身。

# 感谢你, Michael Zick, 指出这一点.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),b=l(`<p>例子 27-2. 格式化一首诗</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# poem.sh: 将本书作者非常喜欢的一首诗，漂亮的打印出来。

# 诗的行数 (单节).
Line[1]=&quot;I do not know which to prefer,&quot;
Line[2]=&quot;The beauty of inflections&quot;
Line[3]=&quot;Or the beauty of innuendoes,&quot;
Line[4]=&quot;The blackbird whistling&quot;
Line[5]=&quot;Or just after.&quot;
# 注意 引用允许嵌入的空格。

# 出处.
Attrib[1]=&quot; Wallace Stevens&quot;
Attrib[2]=&quot;\\&quot;Thirteen Ways of Looking at a Blackbird\\&quot;&quot;
# 这首诗已经是公共版权了 (版权已经过期了).

echo

tput bold   # 粗体打印.

for index in 1 2 3 4 5    # 5行.
do
    printf &quot;     %s\\n&quot; &quot;\${Line[index]}&quot;
done

for index in 1 2          # 出处为2行。
do
    printf &quot;        %s\\n&quot; &quot;\${Attrib[index]}&quot;
done

tput sgr0       # 重置终端。Reset terminal.
                # 查看 &#39;tput&#39; 文档.
echo

exit 0

# 练习:
# --------
# 修改这个脚本，使其能够从一个文本数据文件中提取出一首诗的内容，然后将其漂亮的打印出来。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组元素有它们独特的语法，甚至标准Bash命令和操作符，都有特殊的选项用以配合数组操作。</p><p>例子 27-3. 多种数组操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# array-ops.sh: 更多有趣的数组用法.

array=( zero one two three four five )
# 数组元素 0   1   2    3     4    5

echo \${array[0]}        #  0
echo \${array:0}         #  0
                        #  第一个元素的参数扩展,
                        #+ 从位置0(#0)开始（即第一个字符）.
echo \${array:1}         #  ero
                        #  第一个元素的参数扩扎，
                        #+ 从位置1（#1）开始（即第二个字符）。

echo &quot;--------------&quot;

echo \${#array[0]}       #  4
                        # 第一个数组元素的长度。
echo \${#array}          #4
                        # 第一个数组元素的长度。
                        #  (另一种表示形式)

echo \${#array[1]}       # 3
                        # 第二个数组元素的长度。
                        #  Bash中的数组是从0开始索引的。

echo \${#array[*]}       # 6
                        # 数组中的元素个数。
echo \${#array[@]}       # 6
                        # 数组中的元素个数.
echo &quot;--------------&quot;

array2=( [0]=&quot;first element&quot; [1]=&quot;second element&quot; [3]=&quot;fourth element&quot; )
#            ^     ^       ^     ^      ^       ^     ^      ^       ^
# 引用允许嵌入的空格,在每个单独的数组元素中。

echo \${array2[0]}       # 第一个元素
echo \${array2[1]}       # 第二个元素
echo \${array2[2]}       #
                        # 因为并没有被初始化，所以此值为null。
echo \${array2[3]}       # 第四个元素.
echo \${#array2[0]}      # 13    (第一个元素的长度)
echo \${#array2[*]}      # 3     (数组中元素的个数)

exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=l(`<p>例子27-4. 用于数组的字符串操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# array-strops.sh: 用于数组的字符串操作。

# 本脚本由Michael Zick 所编写.
# 通过了授权在本书中使用。
# 修复: 05 May 08, 04 Aug 08.

#  一般来说，任何类似于 \${name ... }(这种形式)的字符串操作
#+ 都能够应用于数组中的所有字符串元素，
#+ 比如说\${name[@] ... } 或者 \${name[*] ...} 这两种形式。 

arrayZ=( one two three four five five )

echo

# 提取尾部的子串。
echo \${arrayZ[@]:0}     # one two three four five five
#                ^       所有元素 

echo \${arrayZ[@]:1} 	# two three four five five
#                ^		element[0]后边的所有元素.

echo \${arrayZ[@]:1:2} 	# two three
#                  ^	只提取element[0]后边的两个元素.

echo &quot;---------&quot;


# 子串删除 

# 从字符串的开头删除最短的匹配。

echo \${arrayZ[@]#f*r}   # one two three five five
#               ^       # 匹配将应用于数组的所有元素。 
                        # 匹配到了&quot;four&quot;,并且将它删除。 

# 从字符串的开头删除最长的匹配
echo \${arrayZ[@]##t*e}  # one two four five five
#               ^^      # 匹配将应用于数组的所有元素
                        # 匹配到了 &quot;three&quot; ,并且将它删除。

# 从字符串的结尾删除最短的匹配
echo \${arrayZ[@]%h*e}   # one two t four five five
#               ^       # 匹配将应用于数组的所有元素
                        # 匹配到了 &quot;hree&quot; ,并且将它删除。
					
# 从字符串的结尾删除最长的匹配
echo \${arrayZ[@]%%t*e}  # one two four five five
#               ^^      # 匹配将应用于数组的所有元素
                        # 匹配到了 &quot;three&quot; ,并且将它删除。
						
echo &quot;----------------------&quot;

# 子串替换

# 第一个匹配到的子串将会被替换。
echo \${arrayZ[@]/fiv/XYZ}   # one two three four XYZe XYZe
#               ^           # 匹配将应用于数组的所有元素

# 所有匹配到的子串将会被替换。
echo \${arrayZ[@]//iv/YY}    # one two three four fYYe fYYe
                            # 匹配将应用于数组的所有元素

# 删除所有的匹配子串
# 如果没有指定替换字符串的话，那就意味着&#39;删除&#39;...
echo \${arrayZ[@]//fi/}      # one two three four ve ve
#               ^^          # 匹配将应用于数组的所有元素

# 替换字符串前端子串
echo \${arrayZ[@]/#fi/XY}    # one two three four XYve XYve
#                ^          # 匹配将应用于数组的所有元素

# 替换字符串后端子串
echo \${arrayZ[@]/%ve/ZZ}	# one two three four fiZZ fiZZ
#                ^			# 匹配将应用于数组的所有元素

echo \${arrayZ[@]/%o/XX}		# one twXX three four five five
#                ^			# 为什么?

echo &quot;-----------------------------&quot;

replacement() {
    echo -n &quot;!!!&quot;
}

echo \${arrayZ[@]/%e/$(replacement)}
#                ^  ^^^^^^^^^^^^^^
# on!!! two thre!!! four fiv!!! fiv!!!
# replacement()的标准输出就是那个替代字符串.
# Q.E.D: 替换动作实际上是一个‘赋值’。

echo &quot;------------------------------------&quot;

#  使用&quot;for-each&quot;之前:
echo \${arrayZ[@]//*/$(replacement optional_arguments)}
#                ^^ ^^^^^^^^^^^^^
# !!! !!! !!! !!! !!! !!!

#  现在，如果Bash只将匹配到的字符串
#+ 传递给被调用的函数...

echo

exit 0

#  在将处理后的结果发送到大工具之前，比如-- Perl, Python, 或者其它工具
#  回忆一下:
#    $( ... ) 是命令替换。
#    一个函数作为子进程运行。
#    一个函数将结果输出到stdout。
#    赋值，结合&quot;echo&quot;和命令替换，
#+   可以读取函数的stdout.
#    使用name[@]表示法指定了一个 &quot;for-each&quot;
#+   操作。
#  Bash比你想象的更加强力.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=l(`<p>例子 27-5. 将脚本中的内容赋值给数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# script-array.sh: 将脚本中的内容赋值给数组。 
# 这个脚本的灵感来自于 Chris Martii 的邮件 (感谢!).

script_contents=( $(cat &quot;$0&quot;) )  # 将这个脚本的内容($0） 
                                 #+ 赋值给数组
for element in $(seq 0 $((\${#script_contents[@]} - 1)))
  do                #  \${#script_contents[@]}
                    #+ 表示数组元素的个数
                    #
                    #  问题:
                    #  为什么必须使用seq 0 ?
                    #  用seq 1来试一下.
  echo -n &quot;\${script_contents[$element]}&quot;
                    # 在同一行上显示脚本中每个域的内容。
# echo -n &quot;\${script_contents[element]}&quot; also works because of \${ ... }.
  echo -n &quot; -- &quot;    # 使用 &quot; -- &quot; 作为域分隔符。
done
echo

exit 0
# 练习:
# --------
#  修改这个脚本，
#+ 让这个脚本能够按照它原本的格式输出，
#+ 连同空格，换行，等等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q={href:"http://tldp.org/LDP/abs/html/internal.html#UNSETREF",target:"_blank",rel:"noopener noreferrer"},$=l(`<p>例子 27-6. 一些数组的专有特性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

declare -a colors
#  脚本中所有的后续命令都会把
#+ &quot;colors&quot; 当做数组 

echo &quot;Enter your favorite colors (separated from each other by a space).&quot;

read -a colors    # 至少需要键入3种颜色，以便于后边的演示。
#  &#39;read&#39;命令的特殊选项 ,
#+ 允许给数组元素赋值。

echo

element_count=\${#colors[@]}
# 提取数组元素个数的特殊语法
#     用element_count=\${#colors[*]} 也可以。
#
#  &quot;@&quot; 变量允许在引用中存在单次分割，
#+ (依靠空白字符来分割变量).
#
#  这就好像&quot;$@&quot; 和 &quot;$*&quot;
#+ 在位置参数中所表现出来的行为一样。

index=0

while [ &quot;$index&quot; -lt &quot;$element_count&quot; ]
do    # 列出数组中的所有元素
  echo \${colors[$index]}
  #    \${colors[index]} 也可以工作，因为它\${ ... }之中.
  let &quot;index = $index + 1&quot;
  # Or:
  #    ((index++))
done
# 每个数组元素被列为单独的一行
# 如果没有这种要求的话，可以使用echo -n &quot;\${colors[$index]} &quot;
#
# 也可以使用“for”循环来做:
#   for i in &quot;\${colors[@]}&quot;
#   do
#     echo &quot;$i&quot;
#   done
# (Thanks, S.C.)

echo

# 再次列出数组中的所有元素，不过这次的做法更为优雅。
  echo \${colors[@]}          # echo \${colors[*]} 也可以工作.

echo

# &quot;unset&quot;命令既可以删除数组数据，也可以删除整个数组。
unset colors[1]			# 删除数组的第2个元素。
						# 作用等同于colors[1]=
echo  \${colors[@]}		# 再次列出数组内容，第2个元素没了。

unset colors			# 删除整个数组。
						#  unset colors[*] 以及
						#+ unset colors[@] 都可以.
echo; echo -n &quot;Colors gone.&quot;
echo \${colors[@]}		# 再次列出数组内容，内容为空。
exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如我们在前面的例子中所看到的，<code>\${array_name[@]}</code> 或者 <code>\${array_name[\\*]}</code> 都与数组中的所有元素相关。同样的，为了计算数组的元素个数，可以使用 <code>\${array_name[@]}</code> 或者 <code>\${array_name[\\*]}</code> 。 <code>\${#array_name}</code> 是数组第一个元素的长度，也就是 <code>\${array_name[0]}</code> 的长度（字符个数）。</p><p>例子 27-7. 空数组与包含空元素的数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# empty-array.sh

#  感谢Stephane Chazelas制作这个例子的原始版本。 
#+ 同时感谢Michael Zick 和 Omair Eshkenazi 对这个例子所作的扩展。
#  以及感谢Nathan Coulter 作的声明和感谢。

# 空数组与包含有空元素的数组，这两个概念不同。
  
array0=( first second third )
array1=( &#39;&#39; )		# &quot;array1&quot; 包含一个空元素.
array2=( )			# 没有元素. . . &quot;array2&quot;为空 
array3=()			# 这个数组呢?

echo
ListArray()
{
	echo
	echo &quot;Elements in array0:  \${array0[@]}&quot;
	echo &quot;Elements in array1:  \${array1[@]}&quot;
	echo &quot;Elements in array2:  \${array2[@]}&quot;
	echo &quot;Elements in array3:  \${array3[@]}&quot;
	echo
	echo &quot;Length of first element in array0 = \${#array0}&quot;
	echo &quot;Length of first element in array1 = \${#array1}&quot;
	echo &quot;Length of first element in array2 = \${#array2}&quot;
	echo &quot;Length of first element in array3 = \${#array3}&quot;
	echo
	echo &quot;Number of elements in array0 = \${#array0[*]}&quot;  # 3
	echo &quot;Number of elements in array1 = \${#array1[*]}&quot;  # 1  (Surprise!)
	echo &quot;Number of elements in array2 = \${#array2[*]}&quot;  # 0
	echo &quot;Number of elements in array3 = \${#array3[*]}&quot;  # 0
}

# ===================================================================

ListArray

# 尝试扩展这些数组。

# 添加一个元素到这个数组。
array0=( &quot;\${array0[@]}&quot; &quot;new1&quot; )
array1=( &quot;\${array1[@]}&quot; &quot;new1&quot; )
array2=( &quot;\${array2[@]}&quot; &quot;new1&quot; )
array3=( &quot;\${array3[@]}&quot; &quot;new1&quot; )

ListArray

# 或者
array0[\${#array0[*]}]=&quot;new2&quot;
array1[\${#array1[*]}]=&quot;new2&quot;
array2[\${#array2[*]}]=&quot;new2&quot;
array3[\${#array3[*]}]=&quot;new2&quot;

ListArray

# 如果你按照上边的方法对数组进行扩展的话，数组比较像‘栈’
# 上边的操作就是‘压栈’
# ‘栈’的高度为：
height=\${#array2[@]}
echo
echo &quot;Stack height for array2 = $height&quot;

# &#39;出栈’就是：
unset array2[\${#array2[@]}-1]   # 数组从0开始索引 
height=\${#array2[@]}            #+ 这就意味着数组的第一个下标是0
echo
echo &quot;POP&quot;
echo &quot;New stack height for array2 = $height&quot;

ListArray

# 只列出数组array0的第二个和第三个元素。
from=1              # 从0开始索引。
to=2
array3=( \${array0[@]:1:2} )
echo
echo &quot;Elements in array3:  \${array3[@]}&quot;

# 处理方式就像是字符串（字符数组）。
# 试试其他的“字符串”形式。

# 替换:
array4=( \${array0[@]/second/2nd} )
echo
echo &quot;Elements in array4:  \${array4[@]}&quot;

# 替换掉所有匹配通配符的字符串
array5=( \${array0[@]//new?/old} )
echo
echo &quot;Elements in array5:  \${array5[@]}&quot;

# 当你觉得对此有把握的时候...
array6=( \${array0[@]#*new} )
echo # This one might surprise you.
echo &quot;Elements in array6:  \${array6[@]}&quot;

array7=( \${array0[@]#new1} )
echo # 数组array6之后就没有惊奇了。
echo &quot;Elements in array7:  \${array7[@]}&quot;

# 看起来非常像...
array8=( \${array0[@]/new1/} )
echo
echo &quot;Elements in array8:  \${array8[@]}&quot;

# 所以，让我们怎么形容呢？

#  对数组var[@]中的每个元素The string operations are performed on
#+ 进行连续的字符串操作。each of the elements in var[@] in succession.
#  因此：Bash支持支持字符串向量操作，
#  如果结果是长度为0的字符串
#+ 元素会在结果赋值中消失不见。
#  然而，如果扩展在引用中，那个空元素会仍然存在。

#  Michael Zick:   问题--这些字符串是强引用还是弱引用？ 
#  Nathan Coulter:  没有像弱引用的东西
#!    真正发生的事情是
#!+   匹配的格式发生在
#!+   [word]的所有其它扩展之后
#!+   比如像\${parameter#word}.

zap=&#39;new*&#39;
array9=( \${array0[@]/$zap/} )
echo
echo &quot;Number of elements in array9:  \${#array9[@]}&quot;
array9=( &quot;\${array0[@]/$zap/}&quot; )
echo &quot;Elements in array9:  \${array9[@]}&quot;
# 此时，空元素仍然存在
echo &quot;Number of elements in array9:  \${#array9[@]}&quot;

# 当你还在认为你身在Kansas州时...
array10=( \${array0[@]#$zap} )
echo
echo &quot;Elements in array10:  \${array10[@]}&quot;
# 但是，如果被引用的话，*号将不会被解释。
array10=( \${array0[@]#&quot;$zap&quot;} )
echo
echo &quot;Elements in array10:  \${array10[@]}&quot;
# 可能，我们仍然在Kansas...
# (上面的代码块Nathan Coulter所修改.)

#  比较 array7 和array10.
#  比较array8 和array9.

#  重申: 所有所谓弱引用的东西
#  Nathan Coulter 这样解释:
#  word在\${parameter#word}中的匹配格式在
#+ 参数扩展之后和引用移除之前已经完成了。
#  在通常情况下，格式匹配在引用移除之后完成。

exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=i("code",null,"${array_name[@]}",-1),y=i("code",null,"${array_name[\\*]}",-1),g={href:"http://tldp.org/LDP/abs/html/internalvariables.html#APPREF",target:"_blank",rel:"noopener noreferrer"},f=i("code",null,"$@ 和$*",-1),_=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 复制一个数组
array2=( &quot;\${array1[@]}&quot; )
# 或者
array2=&quot;\${array1[@]}&quot;
#
# 然而，如果在“缺项”数组中使用的话，将会失败 
#+ 也就是说数组中存在空洞（中间的某个元素没赋值），
#+ 这个问题由Jochen DeSmet 指出.
# ------------------------------------------
  array1[0]=0
# array1[1] not assigned
  array1[2]=2
  array2=( &quot;\${array1[@]}&quot; )       # 拷贝它？
echo \${array2[0]}      # 0
echo \${array2[2]}      # (null), 应该是 2
# ------------------------------------------
# 添加一个元素到数组。
array=( &quot;\${array[@]}&quot; &quot;new element&quot; )
# 或者
array[\${#array[*]}]=&quot;new element&quot;
# 感谢, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=i("img",{src:"http://tldp.org/LDP/abs/images/tip.gif",alt:"info"},null,-1),A=i("strong",null,"array=( element1 element2 ... elementN )",-1),P=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
filename=sample_file
#            cat sample_file
#
# 			1  a  b  c
# 			2  d  e  fg

declare -a array1

array1=( \`cat &quot;$filename&quot;\`)		#  将$filename的内容
#         把文件内容展示到输出	#+ 加载到数组array1.
#
#  array1=( \`cat &quot;$filename&quot; | tr &#39;\\n&#39; &#39; &#39;\`)
#                           把文件中的换行替换为空格 
# 其实这样做是没必要的，因为Bash在做单词分割的时候， 
#+将会把换行转换为空格。

echo \${array1[@]}            # 打印数组
#                              1 a b c 2 d e fg
#
#  文件中每个被空白符分割的“单词”
#+ 都被保存到数组的一个元素中。

element_count=\${#array1[*]}
echo $element_count          # 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出色的技巧使得数组的操作技术又多了一种。</p><p>例子 27-8. 初始化数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#! /bin/bash
# array-assign.bash

# 数组操作是Bash所特有的，
#+ 所以才使用&quot;.bash&quot; 作为脚本扩展名

# Copyright (c) Michael S. Zick, 2003, All rights reserved.
# License: Unrestricted reuse in any form, for any purpose.
# Version: $ID$
#
# 说明与注释由 William Park所添加.

#  基于 Stephane Chazelas所提供的例子
#+ 它是在ABS中的较早版本。

# &#39;times&#39; 命令的输出格式:
# User CPU &lt;space&gt; System CPU
# User CPU of dead children &lt;space&gt; System CPU of dead children

#  Bash有两种方法， 
#+ 可以将一个数组的所有元素都赋值给一个新的数组变量。
#  这两个方法都会丢弃数组中的“空引用“（null值）元素
#+ 在2.04和以后的Bash版本中。
#  另一种给数组赋值的方法将会被添加到新版本的Bash中，
#+ 这种方法采用[subscript]=value 形式，来维护数组下标与元素值之间的关系。 

#  可以使用内部命令来构造一个大数组，
#+ 当然，构造一个包含上千元素数组的其它方法
#+ 也能很好的完成任务

declare -a bigOne=( /dev/* )  # /dev下的所有文件 . . .
echo
echo &#39;Conditions: Unquoted, default IFS, All-Elements-Of&#39;
echo &quot;Number of elements in array is \${#bigOne[@]}&quot;

# set -vx

echo
echo &#39;- - testing: =( \${array[@]} ) - -&#39;
times
declare -a bigTwo=( \${bigOne[@]} )
# 注意括号:    ^              ^
times
echo

echo &#39;- - testing: =\${array[@]} - -&#39;
times
declare -a bigThree=\${bigOne[@]}
# 这次没用括号。
times
#  通过比较，可以发现第二种格式的赋值更快一些，
#+ 正如 Stephane Chazelas指出的那样
#
#  William Park 解释:
#+ bigTwo数组是作为一个单个字符串被赋值的(因为括号)
#+ 而BigThree数组，则是一个元素一个元素进行的赋值。
#  所以，实质上是:
#                   bigTwo=( [0]=&quot;...&quot; [1]=&quot;...&quot; [2]=&quot;...&quot; ... )
#                   bigThree=( [0]=&quot;... ... ...&quot; )
#
#  通过这样确认:  echo \${bigTwo[0]}
#                   echo \${bigThree[0]}
#  在本书的例子中，我还是会继续使用第一种形式， 
#+ 因为，我认为这种形式更有利于将问题阐述清楚。

#  在我所使用的例子中，在其中复用的部分，
#+ 还是使用了第二种形式，那是因为这种形式更快。

# MSZ: 很抱歉早先的疏忽。

#  注意:
#  ----
#  32和44的&quot;declare -a&quot; 语句其实不是必需的， 
#+ 因为Array=(...)形式
#+ 只能用于数组
#  然而，如果省略这些声明的话，
#+ 会导致脚本后边的相关操作变慢。
#  试试看，会发生什么.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra"> 在数组声明的时候添加一个额外的<strong>declare -a</strong>语句，能够加速后续的数组操作速度。</p><p>例子 27-9. 拷贝和连接数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#! /bin/bash
# CopyArray.sh
#
# 这个脚本由Michael Zick所编写.
# 这里已经通过作者的授权

#  如何“通过名字传值&amp;通过名字返回”
#+ 或者“建立自己的赋值语句”。

CpArray_Mac() {
	# 建立赋值命令
	echo -n &#39;eval &#39;
    echo -n &quot;$2&quot;                    # 目的名字
    echo -n &#39;=( \${&#39;
    echo -n &quot;$1&quot;                    # 源名字
    echo -n &#39;[@]} )&#39;

# 上边这些语句会构成一条命令。
# 这仅仅是形式上的问题。
}

declare -f CopyArray
CopyArray=CpArray_Mac

Hype() {
# &quot;Pointer&quot;函数
# 状态产生器
# 需要连接的数组名为$1.
# (把这个数组与字符串&quot;Really Rocks&quot;结合起来，形成一个新数组.)
# 并将结果从数组$2中返回.

    local -a TMP
    local -a hype=( Really Rocks )
    $($CopyArray $1 TMP)
    TMP=( \${TMP[@]} \${hype[@]} )
    $($CopyArray TMP $2)
}

declare -a before=( Advanced Bash Scripting )
declare -a after

echo &quot;Array Before = \${before[@]}&quot;

Hype before after

echo &quot;Array After = \${after[@]}&quot;

# 连接的太多了?

echo &quot;What \${after[@]:3:2}?&quot;
declare -a modest=( \${after[@]:2:1} \${after[@]:3:2} )
#                    ---- 子串提取 ----

echo &quot;Array Modest = \${modest[@]}&quot;

# &#39;before&#39; 发生了什么变化 ?

echo &quot;Array Before = \${before[@]}&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子27-10. 关于串联数组的更多信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#! /bin/bash
# array-append.bash

# Copyright (c) Michael S. Zick, 2003, All rights reserved.
# License: Unrestricted reuse in any form, for any purpose.
# Version: $ID$
#
#  在格式上，由M.C做了一些修改.

# 数组操作是Bash特有的属性。
# 传统的UNIX /bin/sh 缺乏类似的功能。

#  将这个脚本的输出通过管道传递给&#39;more&#39;，
#+ 这样做的目的是放止输出的内容超过终端能够显示的范围，
#  或者，重定向输出到文件中。

declare -a array1=( zero1 one1 two1 )
# 依次使用下标
declare -a array2=( [0]=zero2 [2]=two2 [3]=three2 )
# 数组中存在空缺的元素-- [1] 未定义

echo
echo &#39;- Confirm that the array is really subscript sparse. -&#39;
echo &quot;Number of elements: 4&quot;        # 为了演示，这里作了硬编码
for (( i = 0 ; i &lt; 4 ; i++ ))
do
    echo &quot;Element [$i]: \${array2[$i]}&quot;
done
# 也可以参考一个更通用的例子， basics-reviewed.bash.


declare -a dest

# 将两个数组合并到第3个数组中。
echo
echo &#39;Conditions: Unquoted, default IFS, All-Elements-Of operator&#39;
echo &#39;- Undefined elements not present, subscripts not maintained. -&#39;
# # 那些未定义的元素不会出现；组合时会丢弃这些元素。

dest=( \${array1[@]} \${array2[@]} )
# dest=\${array1[@]}\${array2[@]} 		# 奇怪的结果，可能是个bug。

# 现在，打印结果。
echo
echo &#39;- - Testing Array Append - -&#39;
cnt=\${#dest[@]}

echo &quot;Number of elements: $cnt&quot;
for (( i = 0 ; i &lt; cnt ; i++ ))
do
    echo &quot;Element [$i]: \${dest[$i]}&quot;
done

# 将数组赋值给一个数组中的元素（两次）
dest[0]=\${array1[@]}
dest[1]=\${array2[@]}

# 打印结果
echo
echo &#39;- - Testing modified array - -&#39;
cnt=\${#dest[@]}

echo &quot;Number of elements: $cnt&quot;
for (( i = 0 ; i &lt; cnt ; i++ ))
do
echo &quot;Element [$i]: \${dest[$i]}&quot;
done

# 检查第二个元素的修改状况.
echo
echo &#39;- - Reassign and list second element - -&#39;

declare -a subArray=\${dest[1]}
cnt=\${#subArray[@]}

echo &quot;Number of elements: $cnt&quot;
for (( i = 0 ; i &lt; cnt ; i++ ))
do
    echo &quot;Element [$i]: \${subArray[$i]}&quot;
done

# 如果你使用&#39;=\${ ... }&#39;形式
#+ 将一个数组赋值到另一个数组的一个元素中,
#+ 那么这个数组的所有元素都会被转换为一个字符串,
#+ 这个字符串中的每个数组元素都以空格进行分隔(其实是IFS的第一个字符).

# 如果原来数组中的所有元素都不包含空白符 . . .
# 如果原来的数组下标都是连续的 . . .
# 那么我们就可以将原来的数组进行恢复.

# 从修改过的第二个元素中, 将原来的数组恢复出来.
echo
echo &#39;- - Listing restored element - -&#39;

declare -a subArray=( \${dest[1]} )
cnt=\${#subArray[@]}

echo &quot;Number of elements: $cnt&quot;
for (( i = 0 ; i &lt; cnt ; i++ ))
do
    echo &quot;Element [$i]: \${subArray[$i]}&quot;
done

echo &#39;- - Do not depend on this behavior. - -&#39;
echo &#39;- - This behavior is subject to change - -&#39;
echo &#39;- - in versions of Bash newer than version 2.05b - -&#39;

# MSZ: 抱歉，之前混淆了一些要点。

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>有了数组, 我们就可以在脚本中实现一些比较熟悉的算法. 这么做, 到底是不是一个好主意, 我们在这里不做讨论, 还是留给读者决定吧.</p><p>例子 27-11. 冒泡排序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# bubble.sh: 一种排序方式, 冒泡排序.

# 回忆一下冒泡排序的算法. 我们在这里要实现它...

# 依靠连续的比较数组元素进行排序,
#+ 比较两个相邻元素, 如果顺序不对, 就交换这两个元素的位置.
# 当第一轮比较结束之后, 最&quot;重&quot;的元素就会被移动到最底部.
# 当第二轮比较结束之后, 第二&quot;重&quot;的元素就会被移动到次底部的位置.
# 依此类推.
# 这意味着每轮比较不需要比较之前已经&quot;沉淀&quot;好的数据.
# 因此你会注意到后边的数据在打印的时候会快一些.


exchange() {
  # 交换数组中的两个元素.
  local temp=\${Countries[$1]} #  临时保存
                              #+ 要交换的那个元素 
  Countries[$1]=\${Countries[$2]}
  Countries[$2]=$temp
  
  return 
}

declare -a Countries  #  声明数组,
                      #+ 此处是可选的, 因为数组在下面被初始化
#  我们是否可以使用转义符(\\)
#+ 来将数组元素的值放在不同的行上?
#  可以.

Countries=(Netherlands Ukraine Zaire Turkey Russia Yemen Syria \\
Brazil Argentina Nicaragua Japan Mexico Venezuela Greece England \\
Israel Peru Canada Oman Denmark Wales France Kenya \\
Xanadu Qatar Liechtenstein Hungary)

# &quot;Xanadu&quot; 虚拟出来的世外桃源.
#+ Kubla Khan做了个愉快的决定


clear                      # 开始之前的清屏动作

echo &quot;0: \${Countries[*]}&quot;  # 从索引0开始列出整个数组.

number_of_elements=\${#Countries[@]}
let &quot;comparisons = $number_of_elements - 1&quot;

count=1 # Pass number.

while [ &quot;$comparisons&quot; -gt 0 ]          # 开始外部循环
do

  index=0  # 在每轮循环开始之前，重置索引。

  while [ &quot;$index&quot; -lt &quot;$comparisons&quot; ] # 开始内部循环。
  do
    if [ \${Countries[$index]} \\&gt; \${Countries[\`expr $index + 1\`]} ]
	# 如果原来的排序次序不对...
	# 回想一下, 在单括号中,
	#+ \\&gt;是ASCII码的比较操作符.

	# if [[ \${Countries[$index]} &gt; \${Countries[\`expr $index + 1\`]} ]]
	#+ 这样也行.
    then
      exchange $index \`expr $index + 1\`  # 交换
    fi
    let &quot;index += 1&quot;  #或者, index+=1 在Bash 3.1之后的版本才能这么用.
  done # 内部循环结束

  # ----------------------------------------------------------------------
# Paulo Marcel Coelho Aragao 建议我们可以使用更简单的for循环
#
# for (( last = $number_of_elements - 1 ; last &gt; 0 ; last-- ))
##                     Fix by C.Y. Hunt          ^   (Thanks!)
# do
#     for (( i = 0 ; i &lt; last ; i++ ))
#     do
#		[[ &quot;\${Countries[$i]}&quot; &gt; &quot;\${Countries[$((i+1))]}&quot; ]] \\
#    		&amp;&amp; exchange $i $((i+1))
#     done
# done
# ----------------------------------------------------------------------


let &quot;comparisons -= 1&quot; #  因为最&quot;重&quot;的元素到了底部,
                       #+ 所以每轮我们可以少做一次比较。

echo
echo &quot;$count: \${Countries[@]}&quot;  # 每轮结束后, 都打印一次数组.
echo
let &quot;count += 1&quot;                # 增加传递计数.

done                            # 外部循环结束
                                # 至此, 全部完成.
exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>我们可以在数组中嵌套数组么？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# &quot;嵌套&quot; 数组.

#  Michael Zick 提供了这个用例。
#+ William Park做了一些修正和说明.

AnArray=( $(ls --inode --ignore-backups --almost-all \\
        --directory --full-time --color=none --time=status \\
        --sort=time -l \${PWD} ) )  # Commands and options.

# 空格是有意义的 . . . 并且不要在上边用引号引用任何东西.

SubArray=( \${AnArray[@]:11:1}  \${AnArray[@]:6:5} )
#  这个数组有六个元素:
#+     SubArray=( [0]=\${AnArray[11]} [1]=\${AnArray[6]} [2]=\${AnArray[7]}
#      [3]=\${AnArray[8]} [4]=\${AnArray[9]} [5]=\${AnArray[10]} )
#
#  Bash数组是字符串(char *)类型
#+ 的(循环)链表
#  因此, 这不是真正意义上的嵌套数组,
#+ 只不过功能很相似而已.

echo &quot;Current directory and date of last status change:&quot;
echo &quot;\${SubArray[@]}&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,17),w={href:"http://tldp.org/LDP/abs/html/bashver2.html#VARREFNEW",target:"_blank",rel:"noopener noreferrer"},R=l(`<p>例子 27-12. 嵌套数组与间接引用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# embedded-arrays.sh
# 嵌套数组和间接引用.

# 本脚本由Dennis Leeuw 编写.
# 经过授权, 在本书中使用.
# 本书作者做了少许修改.

ARRAY1=(
        VAR1_1=value11
        VAR1_2=value12
        VAR1_3=value13
)

ARRAY2=(
        VARIABLE=&quot;test&quot;
        STRING=&quot;VAR1=value1 VAR2=value2 VAR3=value3&quot;
        ARRAY21=\${ARRAY1[*]}
)       # 将ARRAY1嵌套到这个数组中.

function print () {
        OLD_IFS=&quot;$IFS&quot;
        IFS=$&#39;\\n&#39;       #  这么做是为了每行
                        #+ 只打印一个数组元素.
        TEST1=&quot;ARRAY2[*]&quot;
        local \${!TEST1} # 删除这一行, 看看会发生什么?
        #  间接引用.
        #  这使得$TEST1
        #+ 只能够在函数内被访问.

        #  让我们看看还能干点什么.

        echo
        echo &quot;\\$TEST1 = $TEST1&quot;       #  仅仅是变量名字.
        echo; echo
        echo &quot;{\\$TEST1} = \${!TEST1}&quot;  #  变量内容.
                                      #  这就是
                                      #+ 间接引用的作用.
        echo
        echo &quot;-------------------------------------------&quot;; echo
        echo

        # 打印变量
        echo &quot;Variable VARIABLE: $VARIABLE&quot;

        # 打印一个字符串元素
        IFS=&quot;$OLD_IFS&quot;
        TEST2=&quot;STRING[*]&quot;
        local \${!TEST2}      # 间接引用(同上).
        echo &quot;String element VAR2: $VAR2 from STRING&quot;

        # Print an array element
        TEST2=&quot;ARRAY21[*]&quot;
		local \${!TEST2}      # 间接引用(同上).
		echo &quot;Array element VAR1_1: $VAR1_1 from ARRAY21&quot;
}

print
echo

exit 0

# 脚本作者注,
#+ &quot;你可以很容易的将其扩展成一个能创建hash 的Bash 脚本.&quot;
# (难) 留给读者的练习: 实现它.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>数组使得埃拉托色尼素数筛子有了shell版本的实现. 当然, 如果你需要的是追求效率的应用, 那么就 应该使用编译行语言来实现, 比如C语言. 因为脚本运行的太慢了.</p><p>例子 27-13. 埃拉托色尼素数筛子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# sieve.sh (ex68.sh)

# 埃拉托色尼素数筛子
# 找素数的经典算法.

# 在同等数值的范围内,
#+ 这个脚本运行的速度比C版本慢的多.

LOWER_LIMIT=1       # 从1开始.
UPPER_LIMIT=1000    # 到1000.
# (如果你时间很多的话 . . . 你可以将这个数值调的很高.)

PRIME=1
NON_PRIME=0

let SPLIT=UPPER_LIMIT/2
# 优化:
# 只需要测试中间到最大的值,为什么?

declare -a Primes
# Primes[] 是个数组.


initialize ()
{
	# 初始化数组.
	i=$LOWER_LIMIT
	until [ &quot;$i&quot; -gt &quot;$UPPER_LIMIT&quot; ]
	do
	  Primes[i]=$PRIME
	  let &quot;i += 1&quot;
	done
	#  假定所有数组成员都是需要检查的(素数)
	#+ 直到检查完成.
}

print_primes ()
{
	# 打印出所有数组Primes[]中被标记为素数的元素.
	
	i=$LOWER_LIMIT

	until [ &quot;$i&quot; -gt &quot;$UPPER_LIMIT&quot; ]
	do
	  if [ &quot;\${Primes[i]}&quot; -eq &quot;$PRIME&quot; ]
	  then
		printf &quot;%8d&quot; $i
		# 每个数字打印前先打印8个空格, 在偶数列才打印.
	  fi

	  let &quot;i += 1&quot;

	done
}

sift () # 查出非素数.
{
	let i=$LOWER_LIMIT+1
	# 我们从2开始.

	until [ &quot;$i&quot; -gt &quot;$UPPER_LIMIT&quot; ]
	do

	if [ &quot;\${Primes[i]}&quot; -eq &quot;$PRIME&quot; ]
	# 不要处理已经过滤过的数字(被标识为非素数).
	then
	  t=$i

	  while [ &quot;$t&quot; -le &quot;$UPPER_LIMIT&quot; ]
	  do
		let &quot;t += $i &quot;
		Primes[t]=$NON_PRIME
		# 标识为非素数.
	  done 
	fi
	 
	let &quot;i += 1&quot;
	done
}

# ==============================================
# main ()
# 继续调用函数.
initialize
sift
print_primes
# 这里就是被称为结构化编程的东西.
# ==============================================
echo

exit 0

# -------------------------------------------------------- #
# 因为前面的&#39;exit&#39;语句, 所以后边的代码不会运行

#  下边的代码, 是由Stephane Chazelas 所编写的埃拉托色尼素数筛子的改进版本,
#+ 这个版本可以运行的快一些.

# 必须在命令行上指定参数(这个参数就是: 寻找素数的限制范围)

UPPER_LIMIT=$1                  # 来自于命令行.
let SPLIT=UPPER_LIMIT/2         # 从中间值到最大值.

Primes=( &#39;&#39; $(seq $UPPER_LIMIT) )

i=1
until (( ( i += 1 ) &gt; SPLIT ))  # 仅需要从中间值检查.
do
  if [[ -n \${Primes[i]} ]]
  then
    t=$i
    until (( ( t += i ) &gt; UPPER_LIMIT ))
    do
      Primes[t]=
    done
  fi 
done
echo \${Primes[*]}

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子 27-14. 埃拉托色尼素数筛子，优化版</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# 优化过的埃拉托色尼素数筛子
# 脚本由Jared Martin编写, ABS Guide 的作者作了少许修改.
# 在ABS Guide 中经过了许可而使用(感谢!).

# 基于Advanced Bash Scripting Guide中的脚本.
# http://tldp.org/LDP/abs/html/arrays.html#PRIMES0 (ex68.sh).

# http://www.cs.hmc.edu/~oneill/papers/Sieve-JFP.pdf (引用)
# Check results against http://primes.utm.edu/lists/small/1000.txt

# Necessary but not sufficient would be, e.g.,
#     (($(sieve 7919 | wc -w) == 1000)) &amp;&amp; echo &quot;7919 is the 1000th prime&quot;

UPPER_LIMIT=\${1:?&quot;Need an upper limit of primes to search.&quot;}

Primes=( &#39;&#39; $(seq \${UPPER_LIMIT}) )

typeset -i i t
Primes[i=1]=&#39;&#39; # 1不是素数 
until (( ( i += 1 ) &gt; (\${UPPER_LIMIT}/i) ))  # 只需要ith-way 检查.
  do                                         # 为什么?
    if ((\${Primes[t=i*(i-1), i]}))
    # 很少见， 但是很有指导意义, 在下标中使用算术扩展。
	then
      until (( ( t += i ) &gt; \${UPPER_LIMIT} ))
        do Primes[t]=; done
    fi
  done

# echo \${Primes[*]}
echo   # 改回原来的脚本，为了漂亮的打印(80-col. 展示).
printf &quot;%8d&quot; \${Primes[*]}
echo; echo

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),I={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#PRIMES",target:"_blank",rel:"noopener noreferrer"},T={href:"http://tldp.org/LDP/abs/html/mathc.html#PRIMES2",target:"_blank",rel:"noopener noreferrer"},E=l(`<hr><p>数组可以进行一定程度上的扩展, 这样就可以模拟一些Bash原本不支持的数据结构.</p><p>例子 27-15. 模拟一个压入栈</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# stack.sh: 模拟压入栈

# 类似于CPU 栈, 压入栈依次保存数据项, 
#+ 但是取数据时, 却反序进行, 后进先出.

BP=100		#  栈数组的基址指针.
			#  从元素100 开始.

SP=$BP		#  栈指针.
			#  将其初始化为栈&quot;基址&quot;(栈底)

Data=		#  当前栈的数据内容.
			#  必须定义为全局变量,
			#+ 因为函数所能够返回的整数存在范围限制.

			# 100	基址				&lt;-- Base Pointer
			#  99	第一个数据元素
			#  98	第二个数据元素
			# ...	更多数据
			#		最后一个数据元素	&lt;-- Stack pointer

declare -a stack

push()		# 压栈
{
	if [ -z &quot;$1&quot; ]		# 没有可压入的数据项?
	then
		return 
	fi

	let &quot;SP -= 1&quot;		# 更新栈指针.
	stack[$SP]=$1
	return 
}

pop()	 #从栈中弹出数据项. 
{ 
	Data=						# 清空保存数据项的中间变量

	if [ &quot;$SP&quot; -eq &quot;$BP&quot; ]		# 栈空?
	then
		return 
	fi						# 这使得SP不会超过100,
							#+ 例如, 这可以防止堆栈失控.


	Data=\${stack[$SP]}
	let &quot;SP += 1&quot;			# 更新栈指针
	return
}

status_report()			# 打印当前状态
{
	echo &quot;-------------------------------------&quot;
	echo &quot;REPORT&quot;
	echo &quot;Stack Pointer = $SP&quot;
	echo &quot;Just popped \\&quot;&quot;$Data&quot;\\&quot; off the stack.&quot;
	echo &quot;-------------------------------------&quot;
	echo
}


# =======================================================
# 现在, 来点乐子.

echo

# 看你是否能从空栈里弹出数据项来.
pop
status_report

echo

push garbage
pop
status_report			# 压入Garbage, 弹出garbage.

value1=23;			push $value1
value2=skidoo;		push $value2
value3=LAST;		push $value3

pop					# LAST
status_report
pop					# skidoo
status_report
pop					# 23
status_report		# 后进，先出!

# 注意: 栈指针在压栈时减,
#+ 在弹出时加.

echo

exit 0


# =======================================================
#
# 练习：
#
# 1) 修改&quot;push()&quot;函数，
# 	+ 使其调用一次就能够压入多个数据项。

# 2) 修改&quot;pop()&quot;函数,
#	+ 使其调用一次就能弹出多个数据项.

# 3) 给那些有临界操作的函数添加出错检查.
#	 说明白一些, 就是让这些函数返回错误码, 
#	+ 返回的错误码依赖于操作是否成功完成, 
#	+ 如果没有成功完成, 那么就需要启动合适的处理动作.

# 4) 以这个脚本为基础,
#	+ 编写一个用栈实现的四则运算计算器.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>如果想对数组&quot;下标&quot;做一些比较诡异的操作, 可能需要使用中间变量. 对于那些有这种需求的项目来说, 还是应该考虑使用功能更加强大的编程语言, 比如Perl或C。</p><p>例子 27-16. 复杂的数组应用: 探索一个神秘的数学序列</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!/bin/bash

# Douglas Hofstadter 的声名狼藉的序列&quot;Q-series&quot;:

# Q(1) = Q(2) = 1
# Q(n) = Q(n - Q(n-1)) + Q(n - Q(n-2)), 当 n&gt;2时

#  这是一个令人感到陌生的, 没有规律的&quot;乱序&quot;整数序列
#+ 并且行为不可预测
#  序列的头20项, 如下所示:
#  1 1 2 3 3 4 5 5 6 6 6 8 8 8 10 9 10 11 11 12

#  请参考相关书籍, Hofstadter的, &quot;_Goedel, Escher, Bach: An Eternal Golden Braid_&quot;,
#+ 第137页.


LIMIT=100     # 需要计算的数列长度.
LINEWIDTH=20  # 每行打印的个数.

Q[1]=1        # 数列的头两项都为1.
Q[2]=1

echo
echo &quot;Q-series [$LIMIT terms]:&quot;
echo -n &quot;\${Q[1]} &quot;             # 输出数列头两项.
echo -n &quot;\${Q[2]} &quot;

for ((n=3; n &lt;= $LIMIT; n++))  # C风格的循环条件.
do   # Q[n] = Q[n - Q[n-1]] + Q[n - Q[n-2]]  for n&gt;2
#    需要将表达式拆开, 分步计算,
#+   因为Bash 不能够很好的处理复杂数组的算术运算.

	let &quot;n1 = $n - 1&quot;        # n-1
	let &quot;n2 = $n - 2&quot;        # n-2

	t0=\`expr $n - \${Q[n1]}\`  # n - Q[n-1]
	t1=\`expr $n - \${Q[n2]}\`  # n - Q[n-2]

	T0=\${Q[t0]}			# Q[n - Q[n-1]]
	T1=\${Q[t1]}			# Q[n - Q[n-2]]


	Q[n]=\`expr $T0 + $T1\`	# Q[n - Q[n-1]] + Q[n - Q[n-2]]
	echo -n &quot;\${Q[n]} &quot;

	if [ \`expr $n % $LINEWIDTH\` -eq 0 ]		# 格式化输出
	then   #      ^ 取模操作
		echo # 把每行都拆为20个数字的小块.
	fi

done

echo

exit 0

# 这是Q-series的一个迭代实现.
# 更直接明了的实现是使用递归, 请读者作为练习完成.
# 警告: 使用递归的方法来计算这个数列的话, 会花费非常长的时间.
#+ C/C++ 将会计算的快一些。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>Bash仅仅支持一维数组, 但是我们可以使用一个小手段, 这样就可以模拟多维数组了.</p><p>例子 27-17. 模拟一个二维数组，并使它倾斜</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# twodim.sh: 模拟一个二维数组.

# 一维数组由单行组成.
# 二维数组由连续的多行组成.

Rows=5
Columns=5
# 5 X 5 的数组.

declare -a alpha		# char alpha [Rows] [Columns];
						# 没必要声明. 为什么?

load_alpha ()
{
	local rc=0
	local index

	for i in A B C D E F G H I J K L M N O P Q R S T U V W X Y
	do     # 你可以随你的心意, 使用任意符号.
	  local row=\`expr $rc / $Columns\`
	  local column=\`expr $rc % $Rows\`
	  let &quot;index = $row * $Rows + $column&quot;
	  alpha[$index]=$i
	# alpha[$row][$column]
	  let &quot;rc += 1&quot;
	done
	# 更简单的方法:
	#+   declare -a alpha=( A B C D E F G H I J K L M N O P Q R S T U V W X Y )
	#+ 但是如果写的话, 就缺乏二维数组的&quot;风味&quot;了.
}

print_alpha ()
{
	local row=0
	local index
	echo
	while [ &quot;$row&quot; -lt &quot;$Rows&quot; ]   #  以&quot;行序为主&quot;进行打印:
	do                             #+ 行号不变(外层循环),							
								   #+ 列号进行增长.
	  local column=0

	  echo -n &quot;       &quot;            #  按照行方向打印&quot;正方形&quot;数组.

	  while [ &quot;$column&quot; -lt &quot;$Columns&quot; ]
	  do
		let &quot;index = $row * $Rows + $column&quot;
		echo -n &quot;\${alpha[index]} &quot;  # alpha[$row][$column]
		let &quot;column += 1&quot;
	  done

	  let &quot;row += 1&quot;
	  echo
	done
	# 更简单的等价写法为:
	#     echo \${alpha[*]} | xargs -n $Columns
	echo 
}

filter ()     # 过滤掉负的数组下标.
{

	echo -n &quot;  &quot;  # 产生倾斜.
				  # 解释一下, 这是怎么做到的.
	if [[ &quot;$1&quot; -ge 0 &amp;&amp;  &quot;$1&quot; -lt &quot;$Rows&quot; &amp;&amp; &quot;$2&quot; -ge 0 &amp;&amp; &quot;$2&quot; -lt &quot;$Columns&quot; ]]
	then
		let &quot;index = $1 * $Rows + $2&quot;
		# 现在, 按照旋转方向进行打印.
		echo -n &quot; \${alpha[index]}&quot;
		#           alpha[$row][$column]
	fi 

}

rotate ()  #  将数组旋转45度 --
{          #+ 从左下角进行&quot;平衡&quot;.
	local row
	local column

	for (( row = Rows; row &gt; -Rows; row-- ))
	  do       # 反向步进数组, 为什么?
	  
	  for (( column = 0; column &lt; Columns; column++ ))
	  do

		if [ &quot;$row&quot; -ge 0 ]
		then
		  let &quot;t1 = $column - $row&quot;
		  let &quot;t2 = $column&quot;
		else
		  let &quot;t1 = $column&quot;
		  let &quot;t2 = $column + $row&quot;
		fi
		filter $t1 $t2			# 将负的数组下标过滤出来.
								# 如果你不做这一步, 将会怎样?
	  done
	  echo; echo

	done

#  数组旋转的灵感来源于Herbert Mayer 所著的
#+ &quot;Advanced C Programming on the IBM PC&quot;的例子(第143-146页)
#+ (参见参考书目).
#  由此可见, C语言能够做到的好多事情,
#+ 用shell 脚本一样能够做到.
}


#--------------- 现在, 让我们开始吧. ------------#
load_alpha			# 加载数组
print_alpha			# 打印数组.
rotate				# 逆时钟旋转45度打印.
#-----------------------------------------------------#

exit 0

# 这有点做作, 不是那么优雅.

# 练习:
# -----
#  1) 重新实现数组加载和打印函数,
#     让其更直观, 可读性更强. 
#
#  2) 详细地描述旋转函数的原理.
#     提示: 思考一下倒序索引数组的实现.
#
#  3) 重写这个脚本, 扩展它, 让不仅仅能够支持非正方形的数组.
#     比如6 X 4的数组.
#     尝试一下, 在数组旋转时, 做到最小&quot;失真&quot;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二维数组本质上其实就是一个一维数组, 只不过是添加了行和列的寻址方式, 来引用和操作数组的元素而已.</p>`,13),C={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#LIFESLOW",target:"_blank",rel:"noopener noreferrer"},L=i("hr",null,null,-1),S=i("p",null,"还有更多使用数组的有趣的脚本，请参考：",-1),M={href:"http://tldp.org/LDP/abs/html/commandsub.html#AGRAM2",target:"_blank",rel:"noopener noreferrer"},k={href:"http://tldp.org/LDP/abs/html/mathc.html#PRIMES2",target:"_blank",rel:"noopener noreferrer"},B={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#HASHEX2",target:"_blank",rel:"noopener noreferrer"},N={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#HOMEWORK",target:"_blank",rel:"noopener noreferrer"},Q={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#QKY",target:"_blank",rel:"noopener noreferrer"},Z={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#NIM",target:"_blank",rel:"noopener noreferrer"};function D(U,Y){const d=a("RouterLink"),s=a("ExternalLinkIcon");return u(),c("div",null,[m,i("p",null,[n("类似的示范可以参考 "),e(d,{to:"/code/shell/part2/04_3_bash_variables_are_untyped.html"},{default:v(()=>[n("Bash变量是无类型的")]),_:1}),n(" 。")]),b,i("p",null,[n("大部分标准"),e(d,{to:"/code/shell/part3/10_1_manipulating_strings.html"},{default:v(()=>[n("字符串操作")]),_:1}),n(" 都可以用于数组中。")]),o,i("p",null,[e(d,{to:"/code/shell/part3/12_command_substitution.html"},{default:v(()=>[n("命令替换")]),_:1}),n(" 可以构造数组的独立元素。")]),h,i("p",null,[n("在数组环境中，某些Bash "),e(d,{to:"/code/shell/part4/15_internal_commands_and_builtins.html"},{default:v(()=>[n("内建命令")]),_:1}),n(" 的含义可能会有些轻微的改变。比如，"),i("a",q,[n("unset"),e(s)]),n(" 命令可以删除数组元素，甚至能够删除整个数组。")]),$,i("p",null,[p,n(" 和 "),y,n(" 的关系非常类似于 "),i("a",g,[f,e(s)]),n("。这种数组用法非常广泛。")]),_,i("p",null,[x,n(),A,n(" 初始化操作，如果有"),e(d,{to:"/code/shell/part3/12_command_substitution.html"},{default:v(()=>[n("命令替换")]),_:1}),n("的帮助，就可以将一个文本文件的内容加载到数组。")]),P,i("p",null,[n("如果将“嵌套数组”与"),i("a",w,[n("间接引用"),e(s)]),n(" 组合起来使用的话，将会产生一些非常有趣的用法。")]),R,i("p",null,[n("上边的这个例子是基于数组的素数产生器, 还有不使用数组的素数产生器"),i("a",I,[n("例子A-15"),e(s)]),n(" 和"),i("a",T,[n("例子 16-46"),e(s)]),n("，让我们来比较一番.")]),E,i("p",null,[n("这里有一个精心制作的模拟二维数组的例子, 请参考"),i("a",C,[n("例子 A-10"),e(s)]),n(".")]),L,S,i("ul",null,[i("li",null,[i("a",M,[n("例子 12-3"),e(s)])]),i("li",null,[i("a",k,[n("例子 16-46"),e(s)])]),i("li",null,[i("a",B,[n("例子 A-22"),e(s)])]),i("li",null,[i("a",N,[n("例子 A-44"),e(s)])]),i("li",null,[i("a",Q,[n("例子 A-41"),e(s)])]),i("li",null,[i("a",Z,[n("例子 A-42"),e(s)])])])])}const X=r(t,[["render",D],["__file","27_arrays.html.vue"]]);export{X as default};
