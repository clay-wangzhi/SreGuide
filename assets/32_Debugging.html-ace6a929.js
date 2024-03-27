import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-a3d23ff5.js";const l={},d=s(`<h1 id="_32-调试" tabindex="-1"><a class="header-anchor" href="#_32-调试" aria-hidden="true">#</a> 32 调试</h1><blockquote class="blockquote-center"> 调试代码要比写代码困难两倍。因此，你写代码时越多的使用奇技淫巧（自做聪明），顾名思义，你越难以调试它。 --Brian Kernighan </blockquote><p>Bash shell中不包含内置的debug工具，甚至没有调试专用的命令和结构。当调试非功能脚本，产生语法错误或者有错别字时，往往是无用的错误提示消息。</p><p>例子 32-1. 一个错误脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# ex74.sh

# 这是一个错误脚本，但是它错在哪？

a=37

if [$a -gt 27 ]
then
  echo $a
fi  

exit $?   # 0! 为什么?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本的输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./ex74.sh: [37: command not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上边的脚本究竟哪错了(提示: 注意if的后边)</p><p>例子 32-2. 缺少关键字</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# missing-keyword.sh
# 这个脚本会提示什么错误信息？

for a in 1 2 3
do
  echo &quot;$a&quot;
# done     #所需关键字&#39;done&#39;在第8行被注释掉.

exit 0     # 将不会在这退出!

#在命令行执行完此脚本后
输入：echo $?    
输出：2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本的输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>missing-keyword.sh: line 10: syntax error: unexpected end of file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意, 其实不必参考错误信息中指出的错误行号. 这行只不过是Bash解释器最终认定错误的地方. 出错信息在报告产生语法错误的行号时, 可能会忽略脚本的注释行. 如果脚本可以执行, 但并不如你所期望的那样工作, 怎么办? 通常情况下, 这都是由常见的逻辑错误所 产生的.</p><p>例子 32-3.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

#  这个脚本应该删除在当前目录下所有文件名中含有空格的文件
#  它不能正常运行，为什么？

badname=\`ls | grep &#39; &#39;\`

# Try this:
# echo &quot;$badname&quot;

rm &quot;$badname&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过把echo &quot;$badname&quot;行的注释符去掉，找出例子 29-3中的错误， 看一下echo出来的信息，是否按你期望的方式运行.</p><p>在这种特殊的情况下，<code>rm &quot;$badname&quot;</code>不能得到预期的结果，因为<code>$badname</code>不应该加双引号。加上双引号会让rm只有一个参数(这就只能匹配一个文件名).一种不完善的解决办法是去掉<code>$badname</code>外 面的引号, 并且重新设置<code>$IFS</code>, 让<code>$IFS</code>只包含一个换行符, <code>IFS=$&#39;\\n&#39;</code>. 但是, 下面这个方法更简单.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 删除包含空格的文件的正确方法.
rm *\\ *
rm *&quot; &quot;*
rm *&#39; &#39;*
# 感谢. S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结一下这个问题脚本的症状:</p><blockquote></blockquote><ol><li>由于&quot;syntax error&quot;(语法错误)使得脚本停止运行,</li><li>或者脚本能够运行, 但是并不是按照我们所期望的那样运行(逻辑错误).</li><li>脚本能够按照我们所期望的那样运行, 但是有烦人的副作用(逻辑炸弹).</li></ol><p>如果想调试脚本, 可以用以下方式:</p><ol><li><p>echo语句可以放在脚本中存在疑问的位置上, 观察变量的值, 来了解脚本运行时的情况.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>### debecho (debug-echo), by Stefano Falsetto ###
### Will echo passed parameters only if DEBUG is set to a value. ###
debecho () {

	if [ ! -z &quot;$DEBUG&quot; ]; then
 		echo &quot;$1&quot; &gt;&amp;2
 		# ^^^ to stderr
	fi
}

DEBUG=on
Whatever=whatnot
debecho $Whatever   # whatnot

DEBUG=
Whatever=notwhat
debecho $Whatever   # (Will not echo.)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用过滤器tee来检查临界点上的进程或数据流.</p></li><li><p>设置选项-n -v -x</p><p>sh -n scriptname不会运行脚本, 只会检查脚本的语法错误. 这等价于把set -n或set -o noexec插入脚本中. 注意, 某些类型的语法错误不会被这种方式检查出来.</p><p>sh -v scriptname将会在运行脚本之前, 打印出每一个命令. 这等价于把set -v或set -o verbose插入到脚本中.</p><p>选项-n和-v可以同时使用. sh -nv scriptname将会给出详细的语法检查.</p><p>sh -x scriptname会打印出每个命令执行的结果, 但只使用缩写形式. 这等价于在脚本中插入set -x或set -o xtrace.</p><p>把set -u或set -o nounset插入到脚本中, 并运行它, 就会在每个试图使用未声明变量的地方给出一个unbound variable错误信息.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set -u   # Or   set -o nounset

# Setting a variable to null will not trigger the error/abort.
# unset_var=

echo $unset_var   # Unset (and undeclared) variable.
echo &quot;Should not echo!&quot;

#sh t2.sh
#t2.sh: line 6: unset_var: unbound variable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用“断言”功能在脚本的关键点进行测试的变量或条件。 （这是从C借来的一个想法）</p><p>Example 32-4. Testing a condition with an assert</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# assert.sh

#######################################################################
assert ()                 #  If condition false,
{                         #+ exit from script
                          #+ with appropriate error message.
  E_PARAM_ERR=98
  E_ASSERT_FAILED=99


  if [ -z &quot;$2&quot; ]          #  Not enough parameters passed
  then                    #+ to assert() function.
    return $E_PARAM_ERR   #  No damage done.
  fi

  lineno=$2

  if [ ! $1 ] 
  then
    echo &quot;Assertion failed:  \\&quot;$1\\&quot;&quot;
    echo &quot;File \\&quot;$0\\&quot;, line $lineno&quot;    # Give name of file and line number.
    exit $E_ASSERT_FAILED
  # else
  #   return
  #   and continue executing the script.
  fi  
} # Insert a similar assert() function into a script you need to debug.    
#######################################################################


a=5
b=4
condition=&quot;$a -lt $b&quot;     #  Error message and exit from script.
                          #  Try setting &quot;condition&quot; to something else
                          #+ and see what happens.

assert &quot;$condition&quot; $LINENO
# The remainder of the script executes only if the &quot;assert&quot; does not fail.


# Some commands.
# Some more commands . . .
echo &quot;This statement echoes only if the \\&quot;assert\\&quot; does not fail.&quot;
# . . .
# More commands . . .

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用变量$LINENO和内建命令caller.</p></li><li><p>捕获exit返回值.</p><p>The exit command in a script triggers a signal 0, terminating the process, that is, the script itself. [1] It is often useful to trap the exit, forcing a &quot;printout&quot; of variables, for example. The trap must be the first command in the script.</p></li></ol><p>捕获信号</p><p>trap Specifies an action on receipt of a signal; also useful for debugging.</p><p>A signal is a message sent to a process, either by the kernel or another process, telling it to take some specified action (usually to terminate). For example, hitting a Control-C sends a user interrupt, an INT signal, to a running program.</p><p>A simple instance:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>trap &#39;&#39; 2
# Ignore interrupt 2 (Control-C), with no action specified. 
	
trap &#39;echo &quot;Control-C disabled.&quot;&#39; 2
# Message when Control-C pressed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example 32-5. Trapping at exit</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# Hunting variables with a trap.

trap &#39;echo Variable Listing --- a = $a  b = $b&#39; EXIT
#  EXIT is the name of the signal generated upon exit from a script.
#
#  The command specified by the &quot;trap&quot; doesn&#39;t execute until
#+ the appropriate signal is sent.

echo &quot;This prints before the \\&quot;trap\\&quot; --&quot;
echo &quot;even though the script sees the \\&quot;trap\\&quot; first.&quot;
echo

a=39
b=36

exit 0


#  Note that commenting out the &#39;exit&#39; command makes no difference,
#+ since the script exits in any case after running out of commands.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example 32-6. Cleaning up after Control-C</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# logon.sh: A quick &#39;n dirty script to check whether you are on-line yet.

umask 177  # Make sure temp files are not world readable.


TRUE=1
LOGFILE=/var/log/messages
#  Note that $LOGFILE must be readable
#+ (as root, chmod 644 /var/log/messages).
TEMPFILE=temp.$$
#  Create a &quot;unique&quot; temp file name, using process id of the script.
#     Using &#39;mktemp&#39; is an alternative.
#     For example:
#     TEMPFILE=\`mktemp temp.XXXXXX\`
KEYWORD=address
#  At logon, the line &quot;remote IP address xxx.xxx.xxx.xxx&quot;
#                      appended to /var/log/messages.
ONLINE=22
USER_INTERRUPT=13
CHECK_LINES=100
#  How many lines in log file to check.

trap &#39;rm -f $TEMPFILE; exit $USER_INTERRUPT&#39; TERM INT
#  Cleans up the temp file if script interrupted by control-c.

echo

while [ $TRUE ]  #Endless loop.
do
  tail -n $CHECK_LINES $LOGFILE&gt; $TEMPFILE
  #  Saves last 100 lines of system log file as temp file.
  #  Necessary, since newer kernels generate many log messages at log on.
  search=\`grep $KEYWORD $TEMPFILE\`
  #  Checks for presence of the &quot;IP address&quot; phrase,
  #+ indicating a successful logon.

  if [ ! -z &quot;$search&quot; ] #  Quotes necessary because of possible spaces.
  then
     echo &quot;On-line&quot;
     rm -f $TEMPFILE    #  Clean up temp file.
     exit $ONLINE
  else
     echo -n &quot;.&quot;        #  The -n option to echo suppresses newline,
                        #+ so you get continuous rows of dots.
  fi

  sleep 1  
done  


#  Note: if you change the KEYWORD variable to &quot;Exit&quot;,
#+ this script can be used while on-line
#+ to check for an unexpected logoff.

# Exercise: Change the script, per the above note,
#           and prettify it.

exit 0


# Nick Drage suggests an alternate method:

while true
  do ifconfig ppp0 | grep UP 1&gt; /dev/null &amp;&amp; echo &quot;connected&quot; &amp;&amp; exit 0
  echo -n &quot;.&quot;   # Prints dots (.....) until connected.
  sleep 2
done

# Problem: Hitting Control-C to terminate this process may be insufficient.
#+         (Dots may keep on echoing.)
# Exercise: Fix this.



# Stephane Chazelas has yet another alternative:

CHECK_INTERVAL=1

while ! tail -n 1 &quot;$LOGFILE&quot; | grep -q &quot;$KEYWORD&quot;
do echo -n .
   sleep $CHECK_INTERVAL
done
echo &quot;On-line&quot;

# Exercise: Discuss the relative strengths and weaknesses
#           of each of these various approaches.
Example 32-7. A Simple Implementation of a Progress Bar

#! /bin/bash
# progress-bar2.sh
# Author: Graham Ewart (with reformatting by ABS Guide author).
# Used in ABS Guide with permission (thanks!).

# Invoke this script with bash. It doesn&#39;t work with sh.

interval=1
long_interval=10

{
     trap &quot;exit&quot; SIGUSR1
     sleep $interval; sleep $interval
     while true
     do
       echo -n &#39;.&#39;     # Use dots.
       sleep $interval
     done; } &amp;         # Start a progress bar as a background process.

pid=$!
trap &quot;echo !; kill -USR1 $pid; wait $pid&quot;  EXIT        # To handle ^C.

echo -n &#39;Long-running process &#39;
sleep $long_interval
echo &#39; Finished!&#39;

kill -USR1 $pid
wait $pid              # Stop the progress bar.
trap EXIT

exit $?

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note The DEBUG argument to trap causes a specified action to execute after every command in a script. This permits tracing variables, for example.</p><p>Example 32-8. Tracing a variable</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
#!/bin/bash

trap &#39;echo &quot;VARIABLE-TRACE&gt; \\$variable = \\&quot;$variable\\&quot;&quot;&#39; DEBUG
# Echoes the value of $variable after every command.

variable=29; line=$LINENO

echo &quot;  Just initialized \\$variable to $variable in line number $line.&quot;

let &quot;variable *= 3&quot;; line=$LINENO
echo &quot;  Just multiplied \\$variable by 3 in line number $line.&quot;

exit 0

#  The &quot;trap &#39;command1 . . . command2 . . .&#39; DEBUG&quot; construct is
#+ more appropriate in the context of a complex script,
#+ where inserting multiple &quot;echo $variable&quot; statements might be
#+ awkward and time-consuming.

# Thanks, Stephane Chazelas for the pointer.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output of script:</p><p>VARIABLE-TRACE&gt; $variable = &quot;&quot; VARIABLE-TRACE&gt; $variable = &quot;29&quot; Just initialized $variable to 29. VARIABLE-TRACE&gt; $variable = &quot;29&quot; VARIABLE-TRACE&gt; $variable = &quot;87&quot; Just multiplied $variable by 3. VARIABLE-TRACE&gt; $variable = &quot;87&quot; Of course, the trap command has other uses aside from debugging, such as disabling certain keystrokes within a script (see Example A-43).</p><p>Example 32-9. Running multiple processes (on an SMP box)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
#!/bin/bash
# parent.sh
# Running multiple processes on an SMP box.
# Author: Tedman Eng

#  This is the first of two scripts,
#+ both of which must be present in the current working directory.




LIMIT=$1         # Total number of process to start
NUMPROC=4        # Number of concurrent threads (forks?)
PROCID=1         # Starting Process ID
echo &quot;My PID is $$&quot;

function start_thread() {
        if [ $PROCID -le $LIMIT ] ; then
                ./child.sh $PROCID&amp;
                let &quot;PROCID++&quot;
        else
           echo &quot;Limit reached.&quot;
           wait
           exit
        fi
}

while [ &quot;$NUMPROC&quot; -gt 0 ]; do
        start_thread;
        let &quot;NUMPROC--&quot;
done


while true
do

trap &quot;start_thread&quot; SIGRTMIN

done

exit 0



# ======== Second script follows ========


#!/bin/bash
# child.sh
# Running multiple processes on an SMP box.
# This script is called by parent.sh.
# Author: Tedman Eng

temp=$RANDOM
index=$1
shift
let &quot;temp %= 5&quot;
let &quot;temp += 4&quot;
echo &quot;Starting $index  Time:$temp&quot; &quot;$@&quot;
sleep \${temp}
echo &quot;Ending $index&quot;
kill -s SIGRTMIN $PPID

exit 0


# ======================= SCRIPT AUTHOR&#39;S NOTES ======================= #
#  It&#39;s not completely bug free.
#  I ran it with limit = 500 and after the first few hundred iterations,
#+ one of the concurrent threads disappeared!
#  Not sure if this is collisions from trap signals or something else.
#  Once the trap is received, there&#39;s a brief moment while executing the
#+ trap handler but before the next trap is set.  During this time, it may
#+ be possible to miss a trap signal, thus miss spawning a child process.

#  No doubt someone may spot the bug and will be writing 
#+ . . . in the future.



# ===================================================================== #



# ----------------------------------------------------------------------#



#################################################################
# The following is the original script written by Vernia Damiano.
# Unfortunately, it doesn&#39;t work properly.
#################################################################

#!/bin/bash

#  Must call script with at least one integer parameter
#+ (number of concurrent processes).
#  All other parameters are passed through to the processes started.


INDICE=8        # Total number of process to start
TEMPO=5         # Maximum sleep time per process
E_BADARGS=65    # No arg(s) passed to script.

if [ $# -eq 0 ] # Check for at least one argument passed to script.
then
  echo &quot;Usage: \`basename $0\` number_of_processes [passed params]&quot;
  exit $E_BADARGS
fi

NUMPROC=$1              # Number of concurrent process
shift
PARAMETRI=( &quot;$@&quot; )      # Parameters of each process

function avvia() {
         local temp
         local index
         temp=$RANDOM
         index=$1
         shift
         let &quot;temp %= $TEMPO&quot;
         let &quot;temp += 1&quot;
         echo &quot;Starting $index Time:$temp&quot; &quot;$@&quot;
         sleep \${temp}
         echo &quot;Ending $index&quot;
         kill -s SIGRTMIN $$
}

function parti() {
         if [ $INDICE -gt 0 ] ; then
              avvia $INDICE &quot;\${PARAMETRI[@]}&quot; &amp;
                let &quot;INDICE--&quot;
         else
                trap : SIGRTMIN
         fi
}

trap parti SIGRTMIN

while [ &quot;$NUMPROC&quot; -gt 0 ]; do
         parti;
         let &quot;NUMPROC--&quot;
done

wait
trap - SIGRTMIN

exit $?

: &lt;&lt;SCRIPT_AUTHOR_COMMENTS
I had the need to run a program, with specified options, on a number of
different files, using a SMP machine. So I thought [I&#39;d] keep running
a specified number of processes and start a new one each time . . . one
of these terminates.

The &quot;wait&quot; instruction does not help, since it waits for a given process
or *all* process started in background. So I wrote [this] bash script
that can do the job, using the &quot;trap&quot; instruction.
  --Vernia Damiano
SCRIPT_AUTHOR_COMMENTS

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note trap &#39;&#39; SIGNAL (two adjacent apostrophes) disables SIGNAL for the remainder of the script. trap SIGNAL restores the functioning of SIGNAL once more. This is useful to protect a critical portion of a script from an undesirable interrupt.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>trap &#39;&#39; 2  # Signal 2 is Control-C, now disabled.
command
command
command
trap 2     # Reenables Control-C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),a=[d];function v(r,t){return i(),n("div",null,a)}const m=e(l,[["render",v],["__file","32_Debugging.html.vue"]]);export{m as default};
