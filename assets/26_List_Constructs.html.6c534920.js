import{_ as l,r as t,c as p,a as s,b as a,F as i,d as n,e as r,o as b}from"./app.958f2970.js";const o={},c=s("h1",{id:"_26-\u5217\u8868\u7ED3\u6784",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_26-\u5217\u8868\u7ED3\u6784","aria-hidden":"true"},"#"),n(" 26. \u5217\u8868\u7ED3\u6784")],-1),u=s("em",null,"and \u5217\u8868",-1),m=n(" \u548C "),d=s("em",null,"or \u5217\u8868",-1),h=n(" \u7ED3\u6784\u63D0\u4F9B\u4E86\u8FDE\u7EED\u6267\u884C\u82E5\u5E72\u547D\u4EE4\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6709\u6548\u5730\u66FF\u6362\u590D\u6742\u7684\u5D4C\u5957 "),_={href:"http://tldp.org/LDP/abs/html/testconstructs.html#TESTCONSTRUCTS1",target:"_blank",rel:"noopener noreferrer"},g=n("if/then"),q=n(" \uFF0C\u751A\u81F3 "),f={href:"http://tldp.org/LDP/abs/html/testbranch.html#CASEESAC1",target:"_blank",rel:"noopener noreferrer"},x=n("case"),$=n(" \u8BED\u53E5\u3002"),v=r('<h3 id="\u94FE\u63A5\u591A\u4E2A\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5\u591A\u4E2A\u547D\u4EE4" aria-hidden="true">#</a> \u94FE\u63A5\u591A\u4E2A\u547D\u4EE4</h3><p><strong>and \u5217\u8868</strong></p><p><code>command-1 &amp;&amp; command-2 &amp;&amp; command-3 &amp;&amp; ... command-n</code></p><p>\u53EA\u8981\u524D\u4E00\u4E2A\u547D\u4EE4\u8FD4\u56DE <em>true</em>\uFF08\u5373 0\uFF09\uFF0C\u6BCF\u4E00\u4E2A\u547D\u4EE4\u5C31\u4F9D\u6B21\u6267\u884C\u3002\u5F53\u7B2C\u4E00\u4E2A <em>false</em>\uFF08\u5373 \u975E0\uFF09\u8FD4\u56DE\u65F6\uFF0C\u547D\u4EE4\u94FE\u6761\u5373\u7EC8\u6B62\uFF08\u7B2C\u4E00\u4E2A\u8FD4\u56DE <em>false</em> \u7684\u547D\u4EE4\u662F\u6700\u540E\u4E00\u4E2A\u6267\u884C\u7684\uFF09\u3002</p>',4),A=n("\u5728"),E={href:"https://github.com/yongye",target:"_blank",rel:"noopener noreferrer"},S=n("YongYe"),D=n("\u65E9\u671F\u7248\u672C\u7684"),L={href:"http://bash.deta.in/Tetris_Game.sh",target:"_blank",rel:"noopener noreferrer"},N=n("\u4FC4\u7F57\u65AF\u65B9\u5757\u6E38\u620F"),R=n("\u811A\u672C\u91CC\uFF0C\u4E00\u4E2A\u6709\u8DA3\u7684\u53CC\u6761\u4EF6 "),C=s("em",null,"and \u5217\u8868",-1),T=n(" \u7528\u6CD5\uFF1A"),k=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>equation()

{  # core algorithm used for doubling and halving the coordinates
   [[ \${cdx} ]] &amp;&amp; ((y=cy+(ccy-cdy)\${2}2))
   eval \${1}+=\\&quot;\${x} \${y} \\&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>\u4F8B 26-1. \u4F7F\u7528 <em>and \u5217\u8868</em> \u6765\u6D4B\u8BD5\u547D\u4EE4\u884C\u53C2\u6570</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# and list

if [ ! -z &quot;$1&quot; ] &amp;&amp; echo &quot;Argument #1 = $1&quot; &amp;&amp; [ ! -z &quot;$2&quot; ] &amp;&amp; \\
#                ^^                         ^^               ^^
echo &quot;Argument #2 = $2&quot;
then
  echo &quot;At least 2 arguments passed to script.&quot;
  # \u94FE\u6761\u5185\u7684\u6240\u6709\u547D\u4EE4\u90FD\u8FD4\u56DE true\u3002
else
  echo &quot;Fewer than 2 arguments passed to script.&quot;
  # \u94FE\u6761\u5185\u81F3\u5C11\u6709\u4E00\u4E2A\u547D\u4EE4\u8FD4\u56DE false\u3002
fi  
# \u6CE8\u610F\uFF1A &quot;if [ ! -z $1 ]&quot; \u662F\u597D\u7528\u7684\uFF0C\u4F46\u662F\u5BA3\u4F20\u4E0E\u4E4B\u7B49\u540C\u7684
#   &quot;if [ -n $1 ]&quot; \u5E76\u4E0D\u597D\u7528\u3002
#  \u4E0D\u8FC7\uFF0C\u7528\u5F15\u53F7\u5C31\u80FD\u89E3\u51B3\u95EE\u9898\uFF0C
#   &quot;if [ -n &quot;$1&quot; ]&quot; \u597D\u7528\uFF08\u8BD1\u8005\u6CE8\uFF1A\u539F\u6587\u672C\u884C\u5185\u7B2C\u4E00\u4E2A\u5F15\u53F7\u4F4D\u7F6E\u9519\u4E86\uFF09\u3002
#           ^  ^    \u5C0F\u5FC3!
# \u88AB\u6D4B\u8BD5\u7684\u53D8\u91CF\u653E\u5728\u5F15\u53F7\u5185\u603B\u662F\u6700\u597D\u7684\u9009\u62E9\u3002


# \u4E0B\u9762\u7684\u4EE3\u7801\u529F\u80FD\u4E00\u6837\uFF0C\u7528\u7684\u662F\u201C\u7EAF\u7CB9\u201D\u7684 if/then \u8BED\u53E5\u3002
if [ ! -z &quot;$1&quot; ]
then
  echo &quot;Argument #1 = $1&quot;
fi
if [ ! -z &quot;$2&quot; ]
then
  echo &quot;Argument #2 = $2&quot;
  echo &quot;At least 2 arguments passed to script.&quot;
else
  echo &quot;Fewer than 2 arguments passed to script.&quot;
fi
# \u6BD4\u8D77\u7528\u201Cand \u5217\u8868\u201D\u8981\u66F4\u957F\u3001\u66F4\u7B28\u91CD\u3002


exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p><strong>\u4F8B 26-2. \u4F7F\u7528 <em>and \u5217\u8868</em> \u6765\u6D4B\u8BD5\u547D\u4EE4\u884C\u53C2\u65702</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

ARGS=1        # \u9884\u671F\u7684\u53C2\u6570\u6570\u91CF\u3002
E_BADARGS=85  # \u53C2\u6570\u6570\u91CF\u9519\u8BEF\u65F6\u8FD4\u56DE\u7684\u503C\u3002

test $# -ne $ARGS &amp;&amp; \\
#    ^^^^^^^^^^^^ \u6761\u4EF6 #1
echo &quot;Usage: \`basename $0\` $ARGS argument(s)&quot; &amp;&amp; exit $E_BADARGS
#                                             ^^
#  \u5982\u679C\u6761\u4EF6 #1 \u7ED3\u679C\u4E3A true (\u4F20\u9012\u7ED9\u811A\u672C\u7684\u53C2\u6570\u6570\u91CF\u9519\u8BEF),
#+ \u90A3\u4E48\u6267\u884C\u672C\u884C\u5269\u4F59\u7684\u547D\u4EE4\uFF0C\u811A\u672C\u7EC8\u6B62\u3002

# \u4E0B\u9762\u7684\u4EE3\u7801\u884C\u53EA\u6709\u5728\u4E0A\u9762\u7684\u6D4B\u8BD5\u5931\u8D25\u65F6\u624D\u6267\u884C\u3002
echo &quot;Correct number of arguments passed to this script.&quot;

exit 0

#  \u5982\u679C\u8981\u68C0\u67E5\u9000\u51FA\u503C\uFF0C\u811A\u672C\u7EC8\u6B62\u540E\u8FD0\u884C &quot;echo $?&quot;\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u5F53\u7136\uFF0C<em>and \u5217\u8868</em> \u4E5F\u53EF\u4EE5\u7ED9\u53D8\u91CF\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arg1=$@ &amp;&amp; [ -z &quot;$arg1&quot; ] &amp;&amp; arg1=DEFAULT

              # \u5982\u679C\u6709\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u5219\u628A\u53C2\u6570\u503C\u8D4B\u7ED9 $arg1 \u3002
              # \u4F46\u662F... \u5982\u679C\u6CA1\u6709\u53C2\u6570\uFF0C\u5219\u4F7F\u7528DEFAULT\u7ED9 $arg1 \u8D4B\u503C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>or \u5217\u8868</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>command-1 || command-2 || command-3 || ... command-n
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53EA\u8981\u524D\u4E00\u4E2A\u547D\u4EE4\u8FD4\u56DE_false_\uFF0C\u6BCF\u4E00\u4E2A\u547D\u4EE4\u5C31\u4F9D\u6B21\u6267\u884C\u3002\u5F53\u7B2C\u4E00\u4E2A_true_ \u8FD4\u56DE\u65F6\uFF0C\u547D\u4EE4\u94FE\u6761\u5373\u7EC8\u6B62\uFF08\u7B2C\u4E00\u4E2A\u8FD4\u56DE_true_ \u7684\u547D\u4EE4\u662F\u6700\u540E\u4E00\u4E2A\u6267\u884C\u7684\uFF09\u3002\u5F88\u660E\u663E\u5B83\u4E0E\u201Cand \u5217\u8868\u201D\u76F8\u53CD\u3002</p><p>\u4F8B 26-3. <em>or \u5217\u8868</em> \u4E0E <em>and \u5217\u8868</em> \u7ED3\u5408\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

#  delete.sh, \u4E0D\u90A3\u4E48\u5DE7\u5999\u7684\u6587\u4EF6\u5220\u9664\u5DE5\u5177\u3002
#  \u7528\u6CD5\uFF1A delete \u6587\u4EF6\u540D

E_BADARGS=85

if [ -z &quot;$1&quot; ]
then
  echo &quot;Usage: \`basename $0\` filename&quot;
  exit $E_BADARGS  # No arg? Bail out.
else  
  file=$1          # Set filename.
fi  


[ ! -f &quot;$file&quot; ] &amp;&amp; echo &quot;File \\&quot;$file\\&quot; not found. \\
Cowardly refusing to delete a nonexistent file.&quot;
# AND \u5217\u8868\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u663E\u793A\u51FA\u9519\u4FE1\u606F\u3002
# \u6CE8\u610F\uFF0Cecho \u6D88\u606F\u5185\u5BB9\u5206\u6210\u4E86\u4E24\u884C\uFF0C\u4E2D\u95F4\u901A\u8FC7\u8F6C\u4E49\u7B26\uFF08\\\uFF09\u8FDE\u63A5\u3002

[ ! -f &quot;$file&quot; ] || (rm -f $file; echo &quot;File \\&quot;$file\\&quot; deleted.&quot;)
# OR \u5217\u8868\uFF0C\u5220\u9664\u5B58\u5728\u7684\u6587\u4EF6\u3002

# \u6CE8\u610F\u4E0A\u9762\u7684\u903B\u8F91\u98A0\u5012\u3002 Note logic inversion above.
# \u201CAND \u5217\u8868\u201D \u5728\u5F97\u5230 true \u65F6\u6267\u884C, \u201COR \u5217\u8868\u201D\u5728\u5F97\u5230 false \u65F6\u6267\u884C\u3002

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif"> \u5982\u679C <em>or \u5217\u8868</em> \u7B2C\u4E00\u4E2A\u547D\u4EE4\u8FD4\u56DE true\uFF0C\u5B83<strong>\u4F1A</strong>\u6267\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ==&gt; \u4E0B\u9762\u7684\u4EE3\u7801\u6BB5\u6765\u81EA /etc/rc.d/init.d/single
#+==&gt; \u4F5C\u8005 Miquel van Smoorenburg
#+==&gt; \u8BF4\u660E\u4E86 &quot;and&quot; \u548C &quot;or&quot; \u5217\u8868\u3002
# ==&gt; \u5E26\u7BAD\u5934\u7684\u6CE8\u91CA\u662F\u672C\u6587\u4F5C\u8005\u6DFB\u52A0\u7684\u3002

[ -x /usr/bin/clear ] &amp;&amp; /usr/bin/clear
  # ==&gt; \u5982\u679C /usr/bin/clear \u5B58\u5728, \u5219\u8C03\u7528\u5B83\u3002
  # ==&gt; \u8C03\u7528\u547D\u4EE4\u4E4B\u524D\u68C0\u67E5\u5B83\u662F\u5426\u5B58\u5728\uFF0C
  #+==&gt; \u53EF\u4EE5\u907F\u514D\u51FA\u9519\u6D88\u606F\u548C\u5176\u4ED6\u602A\u5F02\u7684\u7ED3\u679C\u3002

  # ==&gt; . . .

#  If they want to run something in single user mode, might as well run it...
for i in /etc/rc1.d/S[0-9][0-9]* ; do
        # \u68C0\u67E5\u811A\u672C\u662F\u5426\u5B58\u5728\u3002
        [ -x &quot;$i&quot; ] || continue
  # ==&gt; \u5982\u679C\u5BF9\u5E94\u7684\u6587\u4EF6\u5728 $PWD \u91CC*\u6CA1\u6709*\u627E\u5230\uFF0C
  #+==&gt; \u5219\u8DF3\u56DE\u5230\u5FAA\u73AF\u9876\u7AEF\u201C\u7EE7\u7EED\u8FD0\u884C\u201D\u3002

        # \u4E22\u5F03\u5907\u4EFD\u6587\u4EF6\u548C rpm \u751F\u6210\u7684\u6587\u4EF6\u3002
        case &quot;$1&quot; in
                *.rpmsave|*.rpmorig|*.rpmnew|*~|*.orig)
                        continue;;
        esac
        [ &quot;$i&quot; = &quot;/etc/rc1.d/S00single&quot; ] &amp;&amp; continue
  # ==&gt; \u8BBE\u7F6E\u811A\u672C\u540D\uFF0C\u4F46\u5148\u4E0D\u8981\u6267\u884C
        $i start
done

  # ==&gt; . . .
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><img src="http://tldp.org/LDP/abs/images/important.gif"> _and \u5217\u8868_ \u6216 _or \u5217\u8868_ \u7684[\u9000\u51FA\u72B6\u6001](http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF)\u5C31\u662F\u6700\u540E\u4E00\u4E2A\u6267\u884C\u7684\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001\u3002 `,16),P=n("\u806A\u660E\u5730\u7ED3\u5408 "),B=s("em",null,"and \u5217\u8868",-1),y=n(" \u548C "),F=s("em",null,"or \u5217\u8868",-1),G=n(" \u662F\u53EF\u80FD\u7684\uFF0C\u4F46\u662F\u7A0B\u5E8F\u903B\u8F91\u4F1A\u5F88\u5BB9\u6613\u5730\u53D8\u5F97\u4EE4\u4EBA\u8D39\u89E3\uFF0C\u9700\u8981\u5BC6\u5207\u6CE8\u610F"),z={href:"http://tldp.org/LDP/abs/html/opprecedence.html#OPPRECEDENCE1",target:"_blank",rel:"noopener noreferrer"},w=n("\u64CD\u4F5C\u7B26\u4F18\u5148\u89C4\u5219"),U=n("\uFF0C\u800C\u4E14\uFF0C\u4F1A\u5E26\u6765\u5927\u91CF\u7684\u8C03\u8BD5\u5DE5\u4F5C\u3002"),I=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>false &amp;&amp; true || echo false         # false

# \u4E0B\u9762\u7684\u4EE3\u7801\u7ED3\u679C\u76F8\u540C
( false &amp;&amp; true ) || echo false     # false
# \u4F46\u8FD9\u4E2A\u5C31\u4E0D\u540C\u4E86
false &amp;&amp; ( true || echo false )     # (\u4EC0\u4E48\u90FD\u4E0D\u663E\u793A)

#  \u6CE8\u610F\u8BED\u53E5\u662F\u4ECE\u5DE6\u5230\u53F3\u7EC4\u5408\u548C\u89E3\u91CA\u7684\u3002

#  \u901A\u5E38\u60C5\u51B5\u4E0B\u6700\u597D\u907F\u514D\u8FD9\u79CD\u590D\u6742\u6027\u3002

#  \u611F\u8C22, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,1),O={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#DAYSBETWEEN",target:"_blank",rel:"noopener noreferrer"},V=n("\u4F8B A-7"),Y=n(" \u548C "),K={href:"http://tldp.org/LDP/abs/html/fto.html#BROKENLINK",target:"_blank",rel:"noopener noreferrer"},W=n("\u4F8B 7-4"),M=n(" \u89E3\u91CA\u4E86\u7528 "),X=s("em",null,"and \u5217\u8868",-1),j=n(" / "),H=s("em",null,"or \u5217\u8868",-1),J=n(" \u6765\u6D4B\u8BD5\u53D8\u91CF\u3002");function Q(Z,nn){const e=t("ExternalLinkIcon");return b(),p(i,null,[c,s("p",null,[u,m,d,h,s("a",_,[g,a(e)]),q,s("a",f,[x,a(e)]),$]),v,s("p",null,[A,s("a",E,[S,a(e)]),D,s("a",L,[N,a(e)]),R,C,T]),k,s("p",null,[P,B,y,F,G,s("a",z,[w,a(e)]),U]),I,s("p",null,[s("a",O,[V,a(e)]),Y,s("a",K,[W,a(e)]),M,X,j,H,J])],64)}var en=l(o,[["render",Q],["__file","26_List_Constructs.html.vue"]]);export{en as default};
