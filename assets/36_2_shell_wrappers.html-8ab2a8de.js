import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-f1a45f61.js";const l={},d=s(`<h1 id="_36-2-shell-wrappers" tabindex="-1"><a class="header-anchor" href="#_36-2-shell-wrappers" aria-hidden="true">#</a> 36.2 shell wrappers</h1><p>wrapper是一个包含系统命令和工具的脚本，脚本会把一些参数传递给这些（脚本内的）命令。将一个复杂的命令封装成一个wrapper是为了调用它时比较简单好记，特别在使用sed和awk命令时会这么做。</p><p>sed或awk脚本通常在命令行下调用时是sed -e &#39;命令&#39;或者awk &#39;命令&#39;。在Bash脚本中嵌入这些命令会让它们在调用时很简单，并且能够被重用。使用这种方法可以将sed和awk的优势统一起来，比如将sed命令处理的结果通过管道传递给awk继续处理。将这些保存成为一个可执行文件，你可以重复调用它的原始版本或者修改版本，而不用在命令行里反复敲冗长的命令。</p><h2 id="example-36-1-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-1-shell-wrapper" aria-hidden="true">#</a> Example 36-1. shell wrapper</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

# 这个脚本功能是去除文件中的空白行
# 没有做参数检查
#
# 也许你想添加下面的内容：
#
# E_NOARGS=85
# if [ -z &quot;$1&quot; ]
# then
#  echo &quot;Usage: \`basename $0\` target-file&quot;
#  exit $E_NOARGS
# fi

sed -e /^$/d &quot;$1&quot;
# 就像这个命令
#    sed -e &#39;/^$/d&#39; filename
# 通过命令行调用

# &#39;-e&#39;意思是后面为编辑命令（这个选项可省略）。
# &#39;^&#39;代表行首，&#39;$&#39;代表行尾。
# 这个正则表达式表示要匹配出所有行首位没有内容的行，就是空白行。
# 是删除命令（译注：就是把刚才选出来的空白行删掉）

# 将文件名中的特殊字符和空白进行转译

# 这个脚本并不会真正的修改目标文件，如果想对目标文件真正的修改，请将输出重定向

exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-36-2-稍微复杂一点的-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-2-稍微复杂一点的-shell-wrapper" aria-hidden="true">#</a> Example 36-2. 稍微复杂一点的 shell wrapper</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

#  subst.sh: 在文件中进行替换字符串的脚本
#  例如 &quot;sh subst.sh Smith Jones letter.txt&quot;
#  letter.txt 中的所有 Jones 都被替换为 Smith。

ARGS=3         # 这个脚本需要三个参数
E_BADARGS=85   # 传给脚本的参数数量不正确

if [ $# -ne &quot;$ARGS&quot; ]
then
    echo &quot;Usage: \`basename $0\` old-pattern new-pattern filename&quot;
    exit $E_BADARGS
fi

old_pattern=$1
new_pattern=$2

if [ -f &quot;$3&quot; ]
then
    file_name=$3
else
    echo &quot;File \\&quot;$3\\&quot; does not exist.&quot;
    exit $E_BADARGS
fi

# -----------------------------------------------
# 这里是最核心的部分
sed -e &quot;s/$old_pattern/$new_pattern/g&quot; $file_name
# -----------------------------------------------

# &#39;s&#39; 是sed中的替换命令
# /pattern/调用地址匹配
# &#39;g&#39; 表示要对文件中的所有匹配项目都进行替换操作，而不是仅对第一个这样干。
# 如果需要深入了解，请阅读sed命令的相关文档。

exit $?  # 将这个脚本的输出重定向到一个文件即可记录真正的结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-36-3-一个通用的写日志文件的-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-3-一个通用的写日志文件的-shell-wrapper" aria-hidden="true">#</a> Example 36-3. 一个通用的写日志文件的 shell wrapper</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
#  logging-wrapper.sh
#  一个通用的shell wrapper，在进行操作的同时对操作进行日志记录

DEFAULT_LOGFILE=logfile.txt

# 设置下面两个变量的值
OPERATION=
# 可以是任意操作，比如一个awk脚本或者用管道连接的复杂命令

LOGFILE=
if [ -z &quot;$LOGFILE&quot; ]
    then     # 如果没有设置日志文件，则使用默认文件名
      LOGFILE=&quot;$DEFAULT_LOGFILE&quot;
      fi

# 对于操作命令的参数（可选）
OPTIONS=&quot;$@&quot;


# 日志记录
echo &quot;\`date\` + \`whoami\` + $OPERATION &quot;$@&quot;&quot; &gt;&gt; $LOGFILE
# 进行操作动作
exec $OPERATION &quot;$@&quot;

# 要在真正执行操作之前写日志
# 思考下为什么要先写日志，后操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-36-4-关于awk脚本的-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-4-关于awk脚本的-shell-wrapper" aria-hidden="true">#</a> Example 36-4. 关于awk脚本的 shell wrapper</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# pr-ascii.sh: 打印ASCII码表格

START=33   # 可打印的ASCII码范围（十进制）
END=127    # 不会输出不可打印的ASCII码

echo &quot; Decimal   Hex     Character&quot;   # 表头
echo &quot; -------   ---     ---------&quot;

for ((i=START; i&lt;=END; i++))
do
    echo $i | awk &#39;{printf(&quot;  %3d       %2x         %c\\n&quot;, $1, $1, $1)}&#39;
# Bash内置的printf命令无法完成下面的操作: （译注：所以这使用awk脚本来实现输出）
#     printf &quot;%c&quot; &quot;$i&quot;
done

exit 0


#  Decimal   Hex     Character
#  -------   ---     ---------
#    33       21         !
#    34       22         &quot;
#    35       23         #
#    36       24         $
#
#    . . .
#
#   122       7a         z
#   123       7b         {
#   124       7c         |
#   125       7d         }


# 将输出重定向到文件
# 或者用管道传递给&quot;more&quot;:  sh pr-asc.sh | more
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-36-5-另一个关于awk的-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-5-另一个关于awk的-shell-wrapper" aria-hidden="true">#</a> Example 36-5. 另一个关于awk的 shell wrapper</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

# 在目标文件中添加一个数字的特殊列
# 十进制浮点数也可以，因为awk可以处理这样的输出。

ARGS=2
E_WRONGARGS=85

if [ $# -ne &quot;$ARGS&quot; ] # Check for proper number of command-line args.
then
    echo &quot;Usage: \`basename $0\` filename column-number&quot;
    exit $E_WRONGARGS
fi

filename=$1
column_number=$2

# 将shell脚本的变量传递给awk有一点难办。
# 第一种方法是用引号将Bash脚本变量在awk脚本中包起来
#     $&#39;$BASH_SCRIPT_VAR&#39;
#      ^                ^
# 下面的awk脚本就是这么干的。
# 详细用法可以查阅awk文档。

# 多行的awk脚本可以写成这样
#   awk &#39;
#   ...
#   ...
#   ...
#   &#39;


# 开始awk脚本
# -----------------------------
awk &#39;

{ total += $&#39;&quot;\${column_number}&quot;&#39; # 译注：这就是那个bash脚本变量
}
END {
print total
}     

&#39; &quot;$filename&quot;
# -----------------------------
# 结束awk脚本


#   将shell变量传递给awk脚本也许是不安全的
#   所以Stephane Chazelas提出了下面的替代方案：
#   ---------------------------------------
#   awk -v column_number=&quot;$column_number&quot; &#39; # 译注：将shell的值赋给一个awk变量
#   { total += $column_number
#   }
#   END {
#       print total
#   }&#39; &quot;$filename&quot;
#   ---------------------------------------


exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能满足那些需要瑞士军刀般全能工具的脚本语言，就只有Perl了。Perl集合了sed和awk的能力，并且比C更加精简。它是模块化的并且能支持包括厨房洗碗槽在内的所有面向对象编程所能涉及的事物。短小的Perl脚本可以嵌入shell脚本中，甚至Perl可以完全替代shell脚本。（本书作者对此仍然抱有怀疑）</p><h2 id="example-36-6-perl嵌入bash脚本" tabindex="-1"><a class="header-anchor" href="#example-36-6-perl嵌入bash脚本" aria-hidden="true">#</a> Example 36-6. Perl嵌入Bash脚本</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

# shell命令先于Perl脚本执行
echo &quot;This precedes the embedded Perl script within \\&quot;$0\\&quot;.&quot;
echo &quot;===============================================================&quot;

perl -e &#39;print &quot;This line prints from an embedded Perl script.\\n&quot;;&#39;
# 像sed命令一样，Perl使用&#39;-e&#39;选项

echo &quot;===============================================================&quot;
echo &quot;However, the script may also contain shell and system commands.&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即使能将Bash脚本和Perl脚本合二为一，先执行Bash部分还是Perl部分仍然要取决于调用脚本的方式。</p><h2 id="example-36-7-bash和perl脚本合并" tabindex="-1"><a class="header-anchor" href="#example-36-7-bash和perl脚本合并" aria-hidden="true">#</a> Example 36-7. Bash和Perl脚本合并</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# bashandperl.sh

echo &quot;Greetings from the Bash part of the script, $0.&quot;
# 这里可以写更多的Bash命令

exit
# Bash脚本部分结束

# =======================================================

#!/usr/bin/perl
# 这部分脚本要像下面这样调用
#    perl -x bashandperl.sh

print &quot;Greetings from the Perl part of the script, $0.\\n&quot;;
# Perl 看起来并不像 “echo” ...
# 这里可以写更多的Perl命令

# Perl命令部分结束
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ bash bashandperl.sh
Greetings from the Bash part of the script.

bash$ perl -x bashandperl.sh
Greetings from the Perl part of the script.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然还可以用shell wrapper嵌入更多的“外来户”，比如Python或者其他的...</p><h2 id="example-36-8-python嵌入bash脚本" tabindex="-1"><a class="header-anchor" href="#example-36-8-python嵌入bash脚本" aria-hidden="true">#</a> Example 36-8. Python嵌入Bash脚本</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# ex56py.sh

# shell脚本先于Python脚本执行
echo &quot;This precedes the embedded Python script within \\&quot;$0.\\&quot;&quot;
echo &quot;===============================================================&quot;

python -c &#39;print &quot;This line prints from an embedded Python script.\\n&quot;;&#39;
# 并不像sed和Perl，Python使用&#39;-c&#39;选项
python -c &#39;k = raw_input( &quot;Hit a key to exit to outer script. &quot; )&#39;

echo &quot;===============================================================&quot;
echo &quot;However, the script may also contain shell and system commands.&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用脚本封装mplayer或者Google翻译服务器的一些功能，你能做出给你反馈一些信息的小东西。</p><h2 id="example-36-9-会讲话的脚本" tabindex="-1"><a class="header-anchor" href="#example-36-9-会讲话的脚本" aria-hidden="true">#</a> Example 36-9. 会讲话的脚本</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
#   参见:
#   http://elinux.org/RPi_Text_to_Speech_(Speech_Synthesis)

# 为了连接Google翻译服务器，这个脚本必须连接到互联网才能工作，
# 而且你的计算机上必须装有mplayer。

speak()
  {
  local IFS=+
  # 先调用mplayer，再连接Google翻译服务器。
  /usr/bin/mplayer -ao alsa -really-quiet -noconsolecontrols \\
  &quot;http://translate.google.com/translate_tts?tl=en&amp;q=&quot;$*&quot;&quot;
  # 可以说话的Google翻译
  }

LINES=4

spk=$(tail -$LINES $0) # 同样的结尾
speak &quot;$spk&quot;
exit
# BRowns 很高兴与你谈话。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有个有趣的shell wrapper例子是Martin Matusiak的undvd，为复杂的mencoder工具提供了一个简单易用的命令行接口。另一个例子是Itzchak Rehberg的Ext3Undel，它为在ext3文件系统上恢复删除的文件提供了一整套工具。</p><p>Notes [1] Linux工具事实上很多是shell wrapper，比如/usr/bin/pdf2ps，/usr/bin/batch和/usr/bin/xmkmf。</p>`,28),a=[d];function v(r,u){return i(),n("div",null,a)}const t=e(l,[["render",v],["__file","36_2_shell_wrappers.html.vue"]]);export{t as default};
