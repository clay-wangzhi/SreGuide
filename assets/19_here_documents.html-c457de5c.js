import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as v,c as r,b as i,d as e,e as s,a as l}from"./app-3484c079.js";const t={},u=i("h1",{id:"_19-嵌入文档",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_19-嵌入文档","aria-hidden":"true"},"#"),e(" 19 嵌入文档")],-1),c=i("blockquote",{class:"blockquote-center"},"Here and now, boys.     --Aldous Huxley, Island",-1),m={href:"http://tldp.org/LDP/abs/html/io-redirection.html#IOREDIRREF",target:"_blank",rel:"noopener noreferrer"},o={href:"http://tldp.org/LDP/abs/html/communications.html#FTPREF",target:"_blank",rel:"noopener noreferrer"},b={href:"http://tldp.org/LDP/abs/html/basic.html#CATREF",target:"_blank",rel:"noopener noreferrer"},h=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>COMMAND &lt;&lt;InputComesFromHERE
...
...
...
InputComesFromHERE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌入文档用限定符作为命令列表的边界，在限定符前需要一个指定的标识符 <code>&lt;&lt;</code>，这会将一个程序或命令的标准输入(stdin)进行重定向，它类似 <code>交互程序 &lt; 命令文件</code> 的方式，其中命令文件内容如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>command #1
command #2
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌入文档的格式大致如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interactive-program &lt;&lt;LimitString
command #1
command #2
...
LimitString
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>限定符的选择必须保证特殊以确保不会和命令列表里的内容发生混淆。</p>`,6),p={href:"http://tldp.org/LDP/abs/html/system.html#WALLREF",target:"_blank",rel:"noopener noreferrer"},g=l(`<p>样例 19-1. broadcast: 给每个登陆者发送信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

wall &lt;&lt;zzz23EndOfMessagezzz23
E-mail your noontime orders for pizza to the system administrator.
    (Add an extra dollar for anchovy or mushroom topping.)
# 额外的信息文本.
# 注意: &#39;wall&#39; 会打印注释行.
zzz23EndOfMessagezzz23

# 更有效的做法是通过
#         wall &lt; 信息文本
#  然而, 在脚本里嵌入信息模板不乏是一种迅速而又随性的解决方式.

exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例: 19-2. dummyfile：创建一个有两行内容的虚拟文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

# 非交互的使用 \`vi\` 编辑文件.
# 仿照 &#39;sed&#39;.

E_BADARGS=85

if [ -z &quot;$1&quot; ]
then
  echo &quot;Usage: \`basename $0\` filename&quot;
  exit $E_BADARGS
fi

TARGETFILE=$1

# 插入两行到文件中保存
#--------Begin here document-----------#
vi $TARGETFILE &lt;&lt;x23LimitStringx23
i
This is line 1 of the example file.
This is line 2 of the example file.
^[
ZZ
x23LimitStringx23
#----------End here document-----------#

#  注意 &quot;^&quot; 对 &quot;[&quot; 进行了转义 
#+ 这段起到了和键盘上按下 Control-V &lt;Esc&gt; 相同的效果.

#  Bram Moolenaar 指出这种情况下 &#39;vim&#39; 可能无法正常工作
#+ 因为在与终端交互的过程中可能会出现问题.

exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述脚本实现了 <code>ex</code> 的功能, 而不是 <code>vi</code>. 嵌入文档包含了 <code>ex</code> 足够通用的命令列表来形成自有的类别, 所以又称之为 <code>ex</code> 脚本.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
#  替换所有的以 &quot;.txt&quot; 后缀结尾的文件的 &quot;Smith&quot; 为 &quot;Jones&quot;

ORIGINAL=Smith
REPLACEMENT=Jones

for word in $(fgrep -l $ORIGINAL *.txt)
do
  # -------------------------------------
  ex $word &lt;&lt;EOF
  :%s/$ORIGINAL/$REPLACEMENT/g
  :wq
EOF
  # :%s is the &quot;ex&quot; substitution command.
  # :wq is write-and-quit.
  # -------------------------------------
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似的 <code>ex 脚本</code> 是 <code>cat 脚本</code>.</p><p>样例 19-3. 使用 <code>cat</code> 的多行信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

#  &#39;echo&#39; 可以输出单行信息,
#+  但是如果是输出消息块就有点问题了.
#   &#39;cat&#39; 嵌入文档却能解决这个局限.

cat &lt;&lt;End-of-message
-------------------------------------
This is line 1 of the message.
This is line 2 of the message.
This is line 3 of the message.
This is line 4 of the message.
This is the last line of the message.
-------------------------------------
End-of-message

#  替换上述嵌入文档内的 7 行文本
#+   cat &gt; $Newfile &lt;&lt;End-of-message
#+       ^^^^^^^^^^
#+ 将输出追加到 $Newfile, 而不是标准输出.

exit 0


#--------------------------------------------
# 由于上面的 &quot;exit 0&quot;，下面的代码将不会生效.

# S.C. points out that the following also works.
echo &quot;-------------------------------------
This is line 1 of the message.
This is line 2 of the message.
This is line 3 of the message.
This is line 4 of the message.
This is the last line of the message.
-------------------------------------&quot;
# 然而, 文本可能不包括双引号除非出现了字符串逃逸.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-</code> 的作用是标记了一个嵌入文档限制符 (&lt;&lt;-LimitString) ，它能抑制输出的行首的 <code>tab</code> (非空格). 这在脚本可读性方面可能非常有用.</p><p>样例 19-4. 抑制 tab 的多行信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# 和之前的样例一样, 但...

#  嵌入文档内的 &#39;-&#39; ，也就是 &lt;&lt;-
#+ 抑制了文档行首的 &#39;tab&#39;,
#+ 但 *不是* 空格.

cat &lt;&lt;-ENDOFMESSAGE
	This is line 1 of the message.
	This is line 2 of the message.
	This is line 3 of the message.
	This is line 4 of the message.
	This is the last line of the message.
ENDOFMESSAGE
# 脚本的输出将左对齐.
# 行首的 tab 将不会输出.

# 上面 5 行的 &quot;信息&quot; 以 tab 开始, 不是空格.
# 空格不会受影响 &lt;&lt;- .

# 注意这个选项对 *内嵌的* tab 没有影响.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌入文档支持参数和命令替换. 因此可以向嵌入文档传递不同的参数,变向的改其输出.</p><p>样例 19-5. 可替换参数的嵌入文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# 另一个使用参数替换的 &#39;cat&#39; 嵌入文档.

# 试一试没有命令行参数,   ./scriptname
# 试一试一个命令行参数,   ./scriptname Mortimer
# 试试用一两个单词引用命令行参数,
#                           ./scriptname &quot;Mortimer Jones&quot;

CMDLINEPARAM=1     #  Expect at least command-line parameter.

if [ $# -ge $CMDLINEPARAM ]
then
  NAME=$1          #  If more than one command-line param,
                   #+ then just take the first.
else
  NAME=&quot;John Doe&quot;  #  Default, if no command-line parameter.
fi  

RESPONDENT=&quot;the author of this fine script&quot;  
  

cat &lt;&lt;Endofmessage

Hello, there, $NAME.
Greetings to you, $NAME, from $RESPONDENT.

# 这个注释在输出时显示 (为什么?).

Endofmessage

# 注意输出了空行.
# 所以可以这样注释.

exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个包含参数替换的嵌入文档是相当有用的</p><p>样例 19-6. 上传文件对到 <code>Sunsite</code> 入口目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# upload.sh

#  上传文件对 (Filename.lsm, Filename.tar.gz)
#+ 到 Sunsite/UNC (ibiblio.org) 的入口目录.
#  Filename.tar.gz 是个 tarball.
#  Filename.lsm is 是个描述文件.
#  Sunsite 需要 &quot;lsm&quot; 文件, 否则将会退回给发送者


E_ARGERROR=85

if [ -z &quot;$1&quot; ]
then
  echo &quot;Usage: \`basename $0\` Filename-to-upload&quot;
  exit $E_ARGERROR
fi  


Filename=\`basename $1\`           # Strips pathname out of file name.

Server=&quot;ibiblio.org&quot;
Directory=&quot;/incoming/Linux&quot;
#  脚本里不需要硬编码,
#+ 但最好可以替换命令行参数.

Password=&quot;your.e-mail.address&quot;   # Change above to suit.

ftp -n $Server &lt;&lt;End-Of-Session
# -n 禁用自动登录

user anonymous &quot;$Password&quot;       #  If this doesn&#39;t work, then try:
                                 #  quote user anonymous &quot;$Password&quot;
binary
bell                             # Ring &#39;bell&#39; after each file transfer.
cd $Directory
put &quot;$Filename.lsm&quot;
put &quot;$Filename.tar.gz&quot;
bye
End-Of-Session

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),q=i("code",null,"引用/转义",-1),f={href:"http://tldp.org/LDP/abs/html/escapingsection.html#ESCP",target:"_blank",rel:"noopener noreferrer"},x={href:"http://tldp.org/LDP/abs/html/special-chars.html#SCHARLIST",target:"_blank",rel:"noopener noreferrer"},E=l(`<p>样例 19-7. 禁用参数替换</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
#  A &#39;cat&#39; here-document, but with parameter substitution disabled.

NAME=&quot;John Doe&quot;
RESPONDENT=&quot;the author of this fine script&quot;  

cat &lt;&lt;&#39;Endofmessage&#39;

Hello, there, $NAME.
Greetings to you, $NAME, from $RESPONDENT.

Endofmessage

#   当&#39;限制符&#39;引用或转义时不会有参数替换.
#   下面的嵌入文档也有同样的效果
#   cat &lt;&lt;&quot;Endofmessage&quot;
#   cat &lt;&lt;\\Endofmessage



#   同样的:

cat &lt;&lt;&quot;SpecialCharTest&quot;

Directory listing would follow
if limit string were not quoted.
\`ls -l\`

Arithmetic expansion would take place
if limit string were not quoted.
$((5 + 3))

A a single backslash would echo
if limit string were not quoted.
\\\\

SpecialCharTest


exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成脚本或者程序代码时可以用禁用参数的方式来输出文本.</p><p>样例 19-8. 生成其他脚本的脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# generate-script.sh
# Based on an idea by Albert Reiner.

OUTFILE=generated.sh         # Name of the file to generate.


# -----------------------------------------------------------
# &#39;嵌入文档涵盖了生成脚本的主体部分.
(
cat &lt;&lt;&#39;EOF&#39;
#!/bin/bash

echo &quot;This is a generated shell script.&quot;
#  注意我们现在在一个子 shell 内,
#+ 我们不能访问 &quot;外部&quot; 脚本变量.

echo &quot;Generated file will be named: $OUTFILE&quot;
#  上面这行并不能按照预期的正常工作
#+ 因为参数扩展已被禁用.
#  相反的, 结果是文字输出.

a=7
b=3

let &quot;c = $a * $b&quot;
echo &quot;c = $c&quot;

exit 0
EOF
) &gt; $OUTFILE
# -----------------------------------------------------------

#  在上述的嵌入文档内引用&#39;限制符&#39;防止变量扩展

if [ -f &quot;$OUTFILE&quot; ]
then
  chmod 755 $OUTFILE
  # 生成可执行文件.
else
  echo &quot;Problem in creating file: \\&quot;$OUTFILE\\&quot;&quot;
fi

#  这个方法适用于生成 C, Perl, Python, Makefiles 等等

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),_={href:"http://tldp.org/LDP/abs/html/commandsub.html#COMMANDSUBREF",target:"_blank",rel:"noopener noreferrer"},T=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>variable=$(cat &lt;&lt;SETVAR
This variable
runs over multiple lines.
SETVAR
)

echo &quot;$variable&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的脚本里嵌入文档可以作为函数的输入.</p><p>样例 19-9. 嵌入文档和函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# here-function.sh

GetPersonalData ()
{
  read firstname
  read lastname
  read address
  read city 
  read state 
  read zipcode
} # 可以肯定的是这应该是个交互式的函数, 但 . . .


# 作为函数的输入.
GetPersonalData &lt;&lt;RECORD001
Bozo
Bozeman
2726 Nondescript Dr.
Bozeman
MT
21226
RECORD001


echo
echo &quot;$firstname $lastname&quot;
echo &quot;$address&quot;
echo &quot;$city, $state $zipcode&quot;
echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以这样使用: 作为一个虚构的命令接受嵌入文档的输出. 这样实际上就创建了一个 &quot;匿名&quot; 嵌入文档.</p><p>样例 19-10. &quot;匿名&quot; 嵌入文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

: &lt;&lt;TESTVARIABLES
\${HOSTNAME?}\${USER?}\${MAIL?}  # Print error message if one of the variables not set.
TESTVARIABLES

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>上面技巧的一种变体允许 &quot;可添加注释&quot; 的代码块.</li></ul><p>样例 19-11. 可添加注释的代码块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# commentblock.sh

: &lt;&lt;COMMENTBLOCK
echo &quot;This line will not echo.&quot;
这些注释没有 &quot;#&quot; 前缀.
则是另一种没有 &quot;#&quot; 前缀的注释方法.

&amp;*@!!++=
上面这行不会产生报错信息,
因为 bash 解释器会忽略它.

COMMENTBLOCK

echo &quot;Exit value of above \\&quot;COMMENTBLOCK\\&quot; is $?.&quot;   # 0
# 没有错误输出.
echo

#  上面的技巧经常用于工作代码的注释用作排错目的
#  这省去了在每一行开头加上 &quot;#&quot; 前缀,
#+ 然后调试完不得不删除每行的前缀的重复工作.
#  注意我们用了 &quot;:&quot;, 在这之上，是可选的.

echo &quot;Just before commented-out code block.&quot;
#  下面这个在双破折号之间的代码不会被执行.
#  ===================================================================
: &lt;&lt;DEBUGXXX
for file in *
do
 cat &quot;$file&quot;
done
DEBUGXXX
#  ===================================================================
echo &quot;Just after commented-out code block.&quot;

exit 0



######################################################################
#  注意, 然而, 如果将变量中包含一个注释的代码块将会引发问题
#  例如:


#/!/bin/bash

  : &lt;&lt;COMMENTBLOCK
  echo &quot;This line will not echo.&quot;
  &amp;*@!!++=
  \${foo_bar_bazz?}
  $(rm -rf /tmp/foobar/)
  $(touch my_build_directory/cups/Makefile)
COMMENTBLOCK


$ sh commented-bad.sh
commented-bad.sh: line 3: foo_bar_bazz: parameter null or not set

# 有效的补救办法就是在 49 行的位置加上单引号，变为 &#39;COMMENTBLOCK&#39;.

  : &lt;&lt;&#39;COMMENTBLOCK&#39;

# 感谢 Kurt Pfeifle 指出这一点.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>另一个漂亮的方法使得&quot;自文档化&quot;的脚本成为可能</li></ul><p>样例 19-12. 自文档化的脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# self-document.sh: self-documenting script
# Modification of &quot;colm.sh&quot;.

DOC_REQUEST=70

if [ &quot;$1&quot; = &quot;-h&quot;  -o &quot;$1&quot; = &quot;--help&quot; ]     # 请求帮助.
then
  echo; echo &quot;Usage: $0 [directory-name]&quot;; echo
  sed --silent -e &#39;/DOCUMENTATIONXX$/,/^DOCUMENTATIONXX$/p&#39; &quot;$0&quot; |
  sed -e &#39;/DOCUMENTATIONXX$/d&#39;; exit $DOC_REQUEST; fi


: &lt;&lt;DOCUMENTATIONXX
List the statistics of a specified directory in tabular format.
---------------------------------------------------------------
The command-line parameter gives the directory to be listed.
If no directory specified or directory specified cannot be read,
then list the current working directory.

DOCUMENTATIONXX

if [ -z &quot;$1&quot; -o ! -r &quot;$1&quot; ]
then
  directory=.
else
  directory=&quot;$1&quot;
fi  

echo &quot;Listing of &quot;$directory&quot;:&quot;; echo
(printf &quot;PERMISSIONS LINKS OWNER GROUP SIZE MONTH DAY HH:MM PROG-NAME\\n&quot; \\
; ls -l &quot;$directory&quot; | sed 1d) | column -t

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),$={href:"http://tldp.org/LDP/abs/html/here-docs.html#CATSCRIPTREF",target:"_blank",rel:"noopener noreferrer"},O=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DOC_REQUEST=70

if [ &quot;$1&quot; = &quot;-h&quot;  -o &quot;$1&quot; = &quot;--help&quot; ]     # Request help.
then                                       # Use a &quot;cat script&quot; . . .
  cat &lt;&lt;DOCUMENTATIONXX
List the statistics of a specified directory in tabular format.
---------------------------------------------------------------
The command-line parameter gives the directory to be listed.
If no directory specified or directory specified cannot be read,
then list the current working directory.

DOCUMENTATIONXX
exit $DOC_REQUEST
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),N={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#ISSPAMMER2",target:"_blank",rel:"noopener noreferrer"},A={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#PETALS",target:"_blank",rel:"noopener noreferrer"},M={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#QKY",target:"_blank",rel:"noopener noreferrer"},S={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#NIM",target:"_blank",rel:"noopener noreferrer"},L=l(`<ul><li>嵌入文档创建了临时文件, 但这些文件在打开且不可被其他程序访问后删除.</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ bash -c &#39;lsof -a -p $$ -d0&#39; &lt;&lt; EOF
&gt; EOF
lsof    1213 bozo    0r   REG    3,5    0 30386 /tmp/t1213-0-sh (deleted)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),R=i("li",null,[i("p",null,"某些工具在嵌入文档内部并不能正常运行.")],-1),D={href:"http://tldp.org/LDP/abs/html/here-docs.html#FTN.AEN17822",target:"_blank",rel:"noopener noreferrer"},C=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

echo &quot;----------------------------------------------------------------------&quot;

cat &lt;&lt;LimitString
echo &quot;This is line 1 of the message inside the here document.&quot;
echo &quot;This is line 2 of the message inside the here document.&quot;
echo &quot;This is the final line of the message inside the here document.&quot;
     LimitString
#^^^^限制符的缩进. 出错! 这个脚本将不会如期运行.

echo &quot;----------------------------------------------------------------------&quot;

#  这些评论在嵌入文档范围外并不能输出

echo &quot;Outside the here document.&quot;

exit 0

echo &quot;This line had better not echo.&quot;  # 紧跟着个 &#39;exit&#39; 命令.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>有些人非常聪明的使用了一个单引号(!)做为限制符. 但这并不是个好主意</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 这个可以运行.
cat &lt;&lt;!
Hello!
! Three more exclamations !!!
!


# 但是 . . .
cat &lt;&lt;!
Hello!
Single exclamation point follows!
!
!
# Crashes with an error message.


# 然而, 下面这样也能运行.
cat &lt;&lt;EOF
Hello!
Single exclamation point follows!
!
EOF
# 使用多字符限制符更为安全.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为嵌入文档设置这些任务有些复杂, 可以考虑使用 <code>expect</code>, 一种专门用来和程序进行交互的脚本语言。</p>`,4),I=i("strong",null,"Notes:",-1),y={href:"http://tldp.org/LDP/abs/html/here-docs.html#LIMITSTRDASH",target:"_blank",rel:"noopener noreferrer"};function P(F,w){const n=a("ExternalLinkIcon");return v(),r("div",null,[u,c,i("p",null,[e("嵌入文档是一段有特殊作用的代码块，它用 "),i("a",m,[e("I/O 重定向"),s(n)]),e(" 在交互程序和交互命令中传递和反馈一个命令列表，例如 "),i("a",o,[e("ftp"),s(n)]),e("，"),i("a",b,[e("cat"),s(n)]),e(" 或者是 ex 文本编辑器")]),h,i("p",null,[e("注意嵌入文档有时候用作非交互的工具和命令有着非常好的效果，例如 "),i("a",p,[e("wall"),s(n)])]),g,i("p",null,[e('在嵌入文档头部引用或转义"限制符"来禁用参数替换.原因是 '),q,e(" 限定符能有效的"),i("a",f,[e("转义"),s(n)]),e(' "$", "`", 和 "" 这些'),i("a",x,[e("特殊符号"),s(n)]),e(", 使他们维持字面上的意思. (感谢 Allen Halsey 指出这点.)")]),E,i("p",null,[e("可以从嵌入文档的输出设置一个变量的值. 这实际上是种灵活的 "),i("a",_,[e("命令替换"),s(n)]),e(".")]),T,i("p",null,[e("使用 "),i("a",$,[e("cat script"),s(n)]),e(" 是另一种可行的方法.")]),O,i("blockquote",null,[i("p",null,[e("另请参阅 "),i("a",N,[e("样例 A-28"),s(n)]),e(", "),i("a",A,[e("样例 A-40"),s(n)]),e(", "),i("a",M,[e("样例 A-41"),s(n)]),e(", and "),i("a",S,[e("样例 A-42"),s(n)]),e(" 更多样例请阅读脚本附带的注释文档.")])]),L,i("ul",null,[R,i("li",null,[i("p",null,[e("在嵌入文档的最后关闭限定符必须在起始的第一个字符的位置开始.行首不能是空格. 限制符后尾随空格同样会导致意想不到的行为.空格可以防止限制符被当做其他用途. "),i("a",D,[e("[1]"),s(n)])])])]),C,i("p",null,[I,e("   除此之外, Dennis Benzinger 指出, "),i("a",y,[e("使用 <<- 抑制 tab."),s(n)])])])}const U=d(t,[["render",P],["__file","19_here_documents.html.vue"]]);export{U as default};
