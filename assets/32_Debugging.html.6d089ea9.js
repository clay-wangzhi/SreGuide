import{_ as n,e as s}from"./app.37ca1d6f.js";const e={},a=s(`<h1 id="_32-\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#_32-\u8C03\u8BD5" aria-hidden="true">#</a> 32 \u8C03\u8BD5</h1><blockquote class="blockquote-center"> \u8C03\u8BD5\u4EE3\u7801\u8981\u6BD4\u5199\u4EE3\u7801\u56F0\u96BE\u4E24\u500D\u3002\u56E0\u6B64\uFF0C\u4F60\u5199\u4EE3\u7801\u65F6\u8D8A\u591A\u7684\u4F7F\u7528\u5947\u6280\u6DEB\u5DE7\uFF08\u81EA\u505A\u806A\u660E\uFF09\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u4F60\u8D8A\u96BE\u4EE5\u8C03\u8BD5\u5B83\u3002 --Brian Kernighan </blockquote><p>Bash shell\u4E2D\u4E0D\u5305\u542B\u5185\u7F6E\u7684debug\u5DE5\u5177\uFF0C\u751A\u81F3\u6CA1\u6709\u8C03\u8BD5\u4E13\u7528\u7684\u547D\u4EE4\u548C\u7ED3\u6784\u3002\u5F53\u8C03\u8BD5\u975E\u529F\u80FD\u811A\u672C\uFF0C\u4EA7\u751F\u8BED\u6CD5\u9519\u8BEF\u6216\u8005\u6709\u9519\u522B\u5B57\u65F6\uFF0C\u5F80\u5F80\u662F\u65E0\u7528\u7684\u9519\u8BEF\u63D0\u793A\u6D88\u606F\u3002</p><p>\u4F8B\u5B50 32-1. \u4E00\u4E2A\u9519\u8BEF\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# ex74.sh

# \u8FD9\u662F\u4E00\u4E2A\u9519\u8BEF\u811A\u672C\uFF0C\u4F46\u662F\u5B83\u9519\u5728\u54EA\uFF1F

a=37

if [$a -gt 27 ]
then
  echo $a
fi  

exit $?   # 0! \u4E3A\u4EC0\u4E48?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u811A\u672C\u7684\u8F93\u51FA:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./ex74.sh: [37: command not found
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u8FB9\u7684\u811A\u672C\u7A76\u7ADF\u54EA\u9519\u4E86(\u63D0\u793A: \u6CE8\u610Fif\u7684\u540E\u8FB9)</p><p>\u4F8B\u5B50 32-2. \u7F3A\u5C11\u5173\u952E\u5B57</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# missing-keyword.sh
# \u8FD9\u4E2A\u811A\u672C\u4F1A\u63D0\u793A\u4EC0\u4E48\u9519\u8BEF\u4FE1\u606F\uFF1F

for a in 1 2 3
do
  echo &quot;$a&quot;
# done     #\u6240\u9700\u5173\u952E\u5B57&#39;done&#39;\u5728\u7B2C8\u884C\u88AB\u6CE8\u91CA\u6389.

exit 0     # \u5C06\u4E0D\u4F1A\u5728\u8FD9\u9000\u51FA!

#\u5728\u547D\u4EE4\u884C\u6267\u884C\u5B8C\u6B64\u811A\u672C\u540E
\u8F93\u5165\uFF1Aecho $?    
\u8F93\u51FA\uFF1A2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u811A\u672C\u7684\u8F93\u51FA:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>missing-keyword.sh: line 10: syntax error: unexpected end of file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F, \u5176\u5B9E\u4E0D\u5FC5\u53C2\u8003\u9519\u8BEF\u4FE1\u606F\u4E2D\u6307\u51FA\u7684\u9519\u8BEF\u884C\u53F7. \u8FD9\u884C\u53EA\u4E0D\u8FC7\u662FBash\u89E3\u91CA\u5668\u6700\u7EC8\u8BA4\u5B9A\u9519\u8BEF\u7684\u5730\u65B9. \u51FA\u9519\u4FE1\u606F\u5728\u62A5\u544A\u4EA7\u751F\u8BED\u6CD5\u9519\u8BEF\u7684\u884C\u53F7\u65F6, \u53EF\u80FD\u4F1A\u5FFD\u7565\u811A\u672C\u7684\u6CE8\u91CA\u884C. \u5982\u679C\u811A\u672C\u53EF\u4EE5\u6267\u884C, \u4F46\u5E76\u4E0D\u5982\u4F60\u6240\u671F\u671B\u7684\u90A3\u6837\u5DE5\u4F5C, \u600E\u4E48\u529E? \u901A\u5E38\u60C5\u51B5\u4E0B, \u8FD9\u90FD\u662F\u7531\u5E38\u89C1\u7684\u903B\u8F91\u9519\u8BEF\u6240 \u4EA7\u751F\u7684.</p><p>\u4F8B\u5B50 32-3.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

#  \u8FD9\u4E2A\u811A\u672C\u5E94\u8BE5\u5220\u9664\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u540D\u4E2D\u542B\u6709\u7A7A\u683C\u7684\u6587\u4EF6
#  \u5B83\u4E0D\u80FD\u6B63\u5E38\u8FD0\u884C\uFF0C\u4E3A\u4EC0\u4E48\uFF1F

badname=\`ls | grep &#39; &#39;\`

# Try this:
# echo &quot;$badname&quot;

rm &quot;$badname&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u53EF\u4EE5\u901A\u8FC7\u628Aecho &quot;$badname&quot;\u884C\u7684\u6CE8\u91CA\u7B26\u53BB\u6389\uFF0C\u627E\u51FA\u4F8B\u5B50 29-3\u4E2D\u7684\u9519\u8BEF\uFF0C \u770B\u4E00\u4E0Becho\u51FA\u6765\u7684\u4FE1\u606F\uFF0C\u662F\u5426\u6309\u4F60\u671F\u671B\u7684\u65B9\u5F0F\u8FD0\u884C.</p><p>\u5728\u8FD9\u79CD\u7279\u6B8A\u7684\u60C5\u51B5\u4E0B\uFF0C<code>rm &quot;$badname&quot;</code>\u4E0D\u80FD\u5F97\u5230\u9884\u671F\u7684\u7ED3\u679C\uFF0C\u56E0\u4E3A<code>$badname</code>\u4E0D\u5E94\u8BE5\u52A0\u53CC\u5F15\u53F7\u3002\u52A0\u4E0A\u53CC\u5F15\u53F7\u4F1A\u8BA9rm\u53EA\u6709\u4E00\u4E2A\u53C2\u6570(\u8FD9\u5C31\u53EA\u80FD\u5339\u914D\u4E00\u4E2A\u6587\u4EF6\u540D).\u4E00\u79CD\u4E0D\u5B8C\u5584\u7684\u89E3\u51B3\u529E\u6CD5\u662F\u53BB\u6389<code>$badname</code>\u5916 \u9762\u7684\u5F15\u53F7, \u5E76\u4E14\u91CD\u65B0\u8BBE\u7F6E<code>$IFS</code>, \u8BA9<code>$IFS</code>\u53EA\u5305\u542B\u4E00\u4E2A\u6362\u884C\u7B26, <code>IFS=$&#39;\\n&#39;</code>. \u4F46\u662F, \u4E0B\u9762\u8FD9\u4E2A\u65B9\u6CD5\u66F4\u7B80\u5355.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5220\u9664\u5305\u542B\u7A7A\u683C\u7684\u6587\u4EF6\u7684\u6B63\u786E\u65B9\u6CD5.
rm *\\ *
rm *&quot; &quot;*
rm *&#39; &#39;*
# \u611F\u8C22. S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u603B\u7ED3\u4E00\u4E0B\u8FD9\u4E2A\u95EE\u9898\u811A\u672C\u7684\u75C7\u72B6:</p><blockquote></blockquote><ol><li>\u7531\u4E8E&quot;syntax error&quot;(\u8BED\u6CD5\u9519\u8BEF)\u4F7F\u5F97\u811A\u672C\u505C\u6B62\u8FD0\u884C,</li><li>\u6216\u8005\u811A\u672C\u80FD\u591F\u8FD0\u884C, \u4F46\u662F\u5E76\u4E0D\u662F\u6309\u7167\u6211\u4EEC\u6240\u671F\u671B\u7684\u90A3\u6837\u8FD0\u884C(\u903B\u8F91\u9519\u8BEF).</li><li>\u811A\u672C\u80FD\u591F\u6309\u7167\u6211\u4EEC\u6240\u671F\u671B\u7684\u90A3\u6837\u8FD0\u884C, \u4F46\u662F\u6709\u70E6\u4EBA\u7684\u526F\u4F5C\u7528(\u903B\u8F91\u70B8\u5F39).</li></ol><p>\u5982\u679C\u60F3\u8C03\u8BD5\u811A\u672C, \u53EF\u4EE5\u7528\u4EE5\u4E0B\u65B9\u5F0F:</p><ol><li><p>echo\u8BED\u53E5\u53EF\u4EE5\u653E\u5728\u811A\u672C\u4E2D\u5B58\u5728\u7591\u95EE\u7684\u4F4D\u7F6E\u4E0A, \u89C2\u5BDF\u53D8\u91CF\u7684\u503C, \u6765\u4E86\u89E3\u811A\u672C\u8FD0\u884C\u65F6\u7684\u60C5\u51B5.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>### debecho (debug-echo), by Stefano Falsetto ###
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li><li><p>\u4F7F\u7528\u8FC7\u6EE4\u5668tee\u6765\u68C0\u67E5\u4E34\u754C\u70B9\u4E0A\u7684\u8FDB\u7A0B\u6216\u6570\u636E\u6D41.</p></li><li><p>\u8BBE\u7F6E\u9009\u9879-n -v -x</p><p>sh -n scriptname\u4E0D\u4F1A\u8FD0\u884C\u811A\u672C, \u53EA\u4F1A\u68C0\u67E5\u811A\u672C\u7684\u8BED\u6CD5\u9519\u8BEF. \u8FD9\u7B49\u4EF7\u4E8E\u628Aset -n\u6216set -o noexec\u63D2\u5165\u811A\u672C\u4E2D. \u6CE8\u610F, \u67D0\u4E9B\u7C7B\u578B\u7684\u8BED\u6CD5\u9519\u8BEF\u4E0D\u4F1A\u88AB\u8FD9\u79CD\u65B9\u5F0F\u68C0\u67E5\u51FA\u6765.</p><p>sh -v scriptname\u5C06\u4F1A\u5728\u8FD0\u884C\u811A\u672C\u4E4B\u524D, \u6253\u5370\u51FA\u6BCF\u4E00\u4E2A\u547D\u4EE4. \u8FD9\u7B49\u4EF7\u4E8E\u628Aset -v\u6216set -o verbose\u63D2\u5165\u5230\u811A\u672C\u4E2D.</p><p>\u9009\u9879-n\u548C-v\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528. sh -nv scriptname\u5C06\u4F1A\u7ED9\u51FA\u8BE6\u7EC6\u7684\u8BED\u6CD5\u68C0\u67E5.</p><p>sh -x scriptname\u4F1A\u6253\u5370\u51FA\u6BCF\u4E2A\u547D\u4EE4\u6267\u884C\u7684\u7ED3\u679C, \u4F46\u53EA\u4F7F\u7528\u7F29\u5199\u5F62\u5F0F. \u8FD9\u7B49\u4EF7\u4E8E\u5728\u811A\u672C\u4E2D\u63D2\u5165set -x\u6216set -o xtrace.</p><p>\u628Aset -u\u6216set -o nounset\u63D2\u5165\u5230\u811A\u672C\u4E2D, \u5E76\u8FD0\u884C\u5B83, \u5C31\u4F1A\u5728\u6BCF\u4E2A\u8BD5\u56FE\u4F7F\u7528\u672A\u58F0\u660E\u53D8\u91CF\u7684\u5730\u65B9\u7ED9\u51FA\u4E00\u4E2Aunbound variable\u9519\u8BEF\u4FE1\u606F.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>set -u   # Or   set -o nounset

# Setting a variable to null will not trigger the error/abort.
# unset_var=

echo $unset_var   # Unset (and undeclared) variable.
echo &quot;Should not echo!&quot;

#sh t2.sh
#t2.sh: line 6: unset_var: unbound variable
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>\u4F7F\u7528\u201C\u65AD\u8A00\u201D\u529F\u80FD\u5728\u811A\u672C\u7684\u5173\u952E\u70B9\u8FDB\u884C\u6D4B\u8BD5\u7684\u53D8\u91CF\u6216\u6761\u4EF6\u3002 \uFF08\u8FD9\u662F\u4ECEC\u501F\u6765\u7684\u4E00\u4E2A\u60F3\u6CD5\uFF09</p><p>Example 32-4. Testing a condition with an assert</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div></li><li><p>\u4F7F\u7528\u53D8\u91CF$LINENO\u548C\u5185\u5EFA\u547D\u4EE4caller.</p></li><li><p>\u6355\u83B7exit\u8FD4\u56DE\u503C.</p><p>The exit command in a script triggers a signal 0, terminating the process, that is, the script itself. [1] It is often useful to trap the exit, forcing a &quot;printout&quot; of variables, for example. The trap must be the first command in the script.</p></li></ol><p>\u6355\u83B7\u4FE1\u53F7</p><p>trap Specifies an action on receipt of a signal; also useful for debugging.</p><p>A signal is a message sent to a process, either by the kernel or another process, telling it to take some specified action (usually to terminate). For example, hitting a Control-C sends a user interrupt, an INT signal, to a running program.</p><p>A simple instance:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>trap &#39;&#39; 2
# Ignore interrupt 2 (Control-C), with no action specified. 
	
trap &#39;echo &quot;Control-C disabled.&quot;&#39; 2
# Message when Control-C pressed.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Example 32-5. Trapping at exit</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>Example 32-6. Cleaning up after Control-C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br></div></div><p>Note The DEBUG argument to trap causes a specified action to execute after every command in a script. This permits tracing variables, for example.</p><p>Example 32-8. Tracing a variable</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>Output of script:</p><p>VARIABLE-TRACE&gt; $variable = &quot;&quot; VARIABLE-TRACE&gt; $variable = &quot;29&quot; Just initialized $variable to 29. VARIABLE-TRACE&gt; $variable = &quot;29&quot; VARIABLE-TRACE&gt; $variable = &quot;87&quot; Just multiplied $variable by 3. VARIABLE-TRACE&gt; $variable = &quot;87&quot; Of course, the trap command has other uses aside from debugging, such as disabling certain keystrokes within a script (see Example A-43).</p><p>Example 32-9. Running multiple processes (on an SMP box)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br></div></div><p>Note trap &#39;&#39; SIGNAL (two adjacent apostrophes) disables SIGNAL for the remainder of the script. trap SIGNAL restores the functioning of SIGNAL once more. This is useful to protect a critical portion of a script from an undesirable interrupt.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>trap &#39;&#39; 2  # Signal 2 is Control-C, now disabled.
command
command
command
trap 2     # Reenables Control-C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,41);function r(l,p){return a}var b=n(e,[["render",r],["__file","32_Debugging.html.vue"]]);export{b as default};
