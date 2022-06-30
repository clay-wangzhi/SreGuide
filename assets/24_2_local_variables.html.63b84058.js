import{_ as l,r as p,c as b,a as s,b as e,F as t,d as n,e as r,o as c}from"./app.e53fe3a5.js";const o={},i=s("h1",{id:"_24-2-\u5C40\u90E8\u53D8\u91CF",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_24-2-\u5C40\u90E8\u53D8\u91CF","aria-hidden":"true"},"#"),n(" 24.2 \u5C40\u90E8\u53D8\u91CF")],-1),u=s("p",null,"\u600E\u6837\u4F7F\u4E00\u4E2A\u53D8\u91CF\u53D8\u6210\u201C\u5C40\u90E8\u201D\u53D8\u91CF\uFF1F",-1),m=n("\u5C40\u90E8\u53D8\u91CF \u5982\u679C\u53D8\u91CF\u7528local\u6765\u58F0\u660E\uFF0C\u90A3\u4E48\u5B83\u5C31\u53EA\u80FD\u591F\u5728\u8BE5\u53D8\u91CF\u88AB\u58F0\u660E\u7684"),h={href:"http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF",target:"_blank",rel:"noopener noreferrer"},_=n("\u4EE3\u7801\u5757"),d=n("\u4E2D\u53EF\u89C1\u3002 \u8FD9\u4E2A\u4EE3\u7801\u5757\u5C31\u662F\u5C40\u90E8"),g={href:"http://tldp.org/LDP/abs/html/subshells.html#SCOPEREF",target:"_blank",rel:"noopener noreferrer"},f=n("\u8303\u56F4"),v=n("\u3002 \u5728\u4E00\u4E2A\u51FD\u6570\u4E2D\uFF0C\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u53EA\u6709\u5728\u51FD\u6570\u4EE3\u7801\u4E2D\u624D\u6709\u610F\u4E49."),q={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18568",target:"_blank",rel:"noopener noreferrer"},$=n("[1]"),x=r(`<p>\u4F8B\u5B50 24-12. \u5C40\u90E8\u53D8\u91CF\u7684\u53EF\u89C1\u8303\u56F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# ex62.sh: \u51FD\u6570\u5185\u90E8\u7684\u5C40\u90E8\u53D8\u91CF\u4E0E\u5168\u5C40\u53D8\u91CF\u3002

func () {
    local loc_var=23       # \u58F0\u660E\u4E3A\u5C40\u90E8\u53D8\u91CF\u3002
    echo                   # \u4F7F\u7528&#39;local&#39;\u5185\u5EFA\u547D\u4EE4
    echo &quot;\\&quot;loc_var\\&quot; in function = $loc_var&quot;
    global_var=999         # \u6CA1\u6709\u58F0\u660E\u4E3A\u5C40\u90E8\u53D8\u91CF\u3002
    # \u9ED8\u8BA4\u4E3A\u5168\u5C40\u53D8\u91CF\u3002

    echo &quot;\\&quot;global_var\\&quot; in function = $global_var&quot;
}

func

# \u73B0\u5728\uFF0C\u6765\u770B\u770B\u5C40\u90E8\u53D8\u91CF\u201Cloc_var\u201D\u5728\u51FD\u6570\u5916\u90E8\u662F\u5426\u53EF\u89C1\u3002

echo
echo &quot;\\&quot;loc_var\\&quot; outside function = $loc_var&quot;
                                    # $loc_var outside function =
                                    # \u4E0D\u884C, $loc_var \u4E0D\u662F\u5168\u5C40\u53EF\u89C1\u7684.
echo &quot;\\&quot;global_var\\&quot; outside function = $global_var&quot;
                                    # $\u5728\u51FD\u6570\u5916\u90E8global_var = 999
                                    # $global_var \u662F\u5168\u5C40\u53EF\u89C1\u7684.
echo

exit 0
#  \u4E0EC\u8BED\u8A00\u76F8\u6BD4\uFF0C\u5728\u51FD\u6570\u5185\u58F0\u660E\u7684Bash\u53D8\u91CF
#+ \u9664\u975E\u5B83\u88AB\u660E\u786E\u58F0\u660E\u4E3Alocal\u65F6\uFF0C\u5B83\u624D\u662F\u5C40\u90E8\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice" loading="lazy"> \u5728\u51FD\u6570\u88AB\u8C03\u7528\u4E4B\u524D\uFF0C\u6240\u6709\u5728\u51FD\u6570\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5728\u51FD\u6570\u5916\u90E8\u90FD\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u5F53\u7136\u4E5F\u5305\u62EC\u90A3\u4E9B\u88AB\u660E\u786E\u58F0\u660E\u4E3Alocal\u7684\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

func ()
{
    global_var=37    #  \u53D8\u91CF\u53EA\u5728\u51FD\u6570\u4F53\u5185\u53EF\u89C1
                     #+ \u5728\u51FD\u6570\u88AB\u8C03\u7528\u4E4B\u524D\u3002
}                    #  \u51FD\u6570\u7ED3\u675F

echo &quot;global_var = $global_var&quot;  # global_var =
                                 #  \u51FD\u6570 &quot;func&quot; \u8FD8\u6CA1\u88AB\u8C03\u7528\uFF0C
                                 #+ \u6240\u4EE5$global_var \u5728\u8FD9\u91CC\u8FD8\u4E0D\u662F\u53EF\u89C1\u7684.
func
echo &quot;global_var = $global_var&quot;  # global_var = 37
                                 # \u5DF2\u7ECF\u5728\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019\u8BBE\u7F6E\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,4),E=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"extra",loading:"lazy"},null,-1),N=n(" \u6B63\u5982Evgeniy Ivanov\u6307\u51FA\u7684\u90A3\u6837\uFF0C\u5F53\u5728\u4E00\u6761\u547D\u4EE4\u4E2D\u5B9A\u4E49\u548C\u7ED9\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u8D4B\u503C\u65F6\uFF0C\u663E\u7136\u64CD\u4F5C\u7684\u987A\u5E8F\u9996\u5148\u662F\u7ED9\u53D8\u91CF\u8D4B\u503C\uFF0C\u4E4B\u540E\u9650\u5B9A\u53D8\u91CF\u7684\u5C40\u90E8\u8303\u56F4\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7"),R={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},A=n("\u8FD4\u56DE\u503C"),L=n("\u6765\u53CD\u5E94\u3002"),k=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

echo &quot;==OUTSIDE Function (global)==&quot;
t=$(exit 1)
echo $?     # 1
            # \u5982\u9884\u671F\u4E00\u6837.

echo
function0 ()
{
    echo &quot;==INSIDE Function==&quot;
    echo &quot;Global&quot;
    t0=$(exit 1)
    echo $?      # 1
                 # \u5982\u9884\u671F\u4E00\u6837.

    echo
    echo &quot;Local declared &amp; assigned in same command.&quot;
    local t1=$(exit 1)
    echo $?      # 0
                 # \u610F\u6599\u4E4B\u5916!
#  \u663E\u7136\uFF0C\u53D8\u91CF\u8D4B\u503C\u53D1\u751F\u5728Apparently, 
#+ \u5C40\u90E8\u58F0\u660E\u4E4B\u524D\u3002
#+ \u8FD4\u56DE\u503C\u662F\u4E3A\u4E86latter.

    echo
    echo &quot;Local declared, then assigned (separate commands).&quot;
    local t2
    t2=$(exit 1)
    echo $?
}

function0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="_24-2-1-\u5C40\u90E8\u53D8\u91CF\u548C\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#_24-2-1-\u5C40\u90E8\u53D8\u91CF\u548C\u9012\u5F52" aria-hidden="true">#</a> 24.2.1 \u5C40\u90E8\u53D8\u91CF\u548C\u9012\u5F52</h2>`,2),D=n("\u9012\u5F52\u662F\u4E00\u4E2A\u6709\u8DA3\u5E76\u4E14\u6709\u65F6\u5019\u975E\u5E38\u6709\u7528\u7684\u81EA\u5DF1\u8C03\u7528\u81EA\u5DF1\u7684\u5F62\u5F0F\u3002 "),P={href:"http://tldp.org/LDP/abs/html/biblio.html#MAYERREF",target:"_blank",rel:"noopener noreferrer"},S=n("Herbert Mayer"),F=n(" \u662F\u8FD9\u6837\u5B9A\u4E49\u9012\u5F52\u7684\uFF0C\u201C\u3002\u3002\u3002\u8868\u793A\u4E00\u4E2A\u7B97\u6CD5\u901A\u8FC7\u4F7F\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u76F8\u540C\u7B97\u6CD5\u7248\u672C\u3002\u3002\u3002\u201D"),T=n("\u60F3\u8C61\u4E00\u4E0B\uFF0C\u4E00\u4E2A\u5B9A\u4E49\u662F\u4ECE\u81EA\u8EAB\u8003\u8651\u7684\uFF0C"),I={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18607",target:"_blank",rel:"noopener noreferrer"},C=n("[2]"),G=n(" \u4E00\u4E2A\u8868\u8FBE\u5305\u542B\u4E86\u81EA\u8EAB\u7684\u8868\u8FBE\uFF0C "),O={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18610",target:"_blank",rel:"noopener noreferrer"},B=n("[3]"),y=n(" \u4E00\u6761\u86C7\u541E\u4E0B\u81EA\u5DF1\u7684\u5C3E\u5DF4\uFF0C "),U={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18614",target:"_blank",rel:"noopener noreferrer"},W=n("[4]"),M=n(" \u6216\u8005 \u3002\u3002\u3002 \u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u81EA\u8EAB\u3002"),z={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18617",target:"_blank",rel:"noopener noreferrer"},V=n("[5]"),X=r(`<p>\u4F8B\u5B50 24-13. \u4E00\u4E2A\u7B80\u5355\u7684\u9012\u5F52\u51FD\u6570\u8868\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# recursion-demo.sh
# \u9012\u5F52\u6F14\u793A.

RECURSIONS=9   # \u9012\u5F52\u7684\u6B21\u6570.
r_count=0      # \u5FC5\u987B\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u4E3A\u4EC0\u4E48\uFF1F

recurse ()
{
    var=&quot;$1&quot;

    while [ &quot;$var&quot; -ge 0 ]
    do
        echo &quot;Recursion count = &quot;$r_count&quot;  +-+  \\$var = &quot;$var&quot;&quot;
        (( var-- )); (( r_count++ ))
        recurse &quot;$var&quot;  #  \u51FD\u6570\u8C03\u7528\u81EA\u8EAB(\u9012\u5F52)
    done              #+ \u76F4\u5230\u9047\u5230\u4EC0\u4E48\u6837\u7684\u7EC8\u6B62\u6761\u4EF6\uFF1F
}

recurse $RECURSIONS

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u4F8B\u5B50 24-14. \u53E6\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# recursion-def.sh
# \u53E6\u5916\u4E00\u4E2A\u63CF\u8FF0\u9012\u5F52\u7684\u6BD4\u8F83\u751F\u52A8\u7684\u811A\u672C\u3002

RECURSIONS=10
r_count=0
sp=&quot; &quot;

define_recursion ()
{
    ((r_count++))
    sp=&quot;$sp&quot;&quot; &quot;
    echo -n &quot;$sp&quot;
    echo &quot;\\&quot;The act of recurring ... \\&quot;&quot;        # Per 1913 Webster&#39;s dictionary.

    while [ $r_count -le $RECURSIONS ]
    do
        define_recursion
    done
}

echo
echo &quot;Recursion: &quot;
define_recursion
echo

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,4),w=n("\u5C40\u90E8\u53D8\u91CF\u662F\u4E00\u4E2A\u5199\u9012\u5F52\u4EE3\u7801\u6709\u6548\u7684\u5DE5\u5177\uFF0C\u4F46\u662F\u8FD9\u79CD\u65B9\u6CD5\u4E00\u822C\u4F1A\u5305\u542B\u5927\u91CF\u7684\u8BA1\u7B97\u8D1F\u8F7D\uFF0C\u663E\u7136\u5728shell\u811A\u672C\u4E2D\u5E76\u4E0D\u63A8\u8350\u9012\u5F52."),H={href:"http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18632",target:"_blank",rel:"noopener noreferrer"},K=n("[6]"),Y=r(`<p>\u4F8B\u5B5024-15. \u4F7F\u7528\u5C40\u90E8\u53D8\u91CF\u8FDB\u884C\u9012\u5F52</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u9636\u4E58
# ---------

# Bash\u5141\u8BB8\u9012\u5F52\u4E48\uFF1F
# \u6069\uFF0C\u5141\u8BB8\uFF0C\u4F46\u662F...
# \u4ED6\u592A\u6162\u4E86\uFF0C\u6240\u4EE5\u6050\u6015\u4F60\u96BE\u4EE5\u5FCD\u53D7\u3002

MAX_ARG=5
E_WRONG_ARGS=85
E_RANGE_ERR=86


if [ -z &quot;$1&quot; ]
then
    echo &quot;Usage: \`basename $0\` number&quot;
    exit $E_WRONG_ARGS
fi

if [ &quot;$1&quot; -gt $MAX_ARG ]
then
    echo &quot;Out of range ($MAX_ARG is maximum).&quot;
    #  \u73B0\u5728\u8BA9\u6211\u4EEC\u6765\u4E86\u89E3\u4E00\u4E9B\u5B9E\u9645\u60C5\u51B5\u3002
    #  \u5982\u679C\u4F60\u60F3\u8BA1\u7B97\u6BD4\u8FD9\u4E2A\u66F4\u5927\u7684\u8303\u56F4\u7684\u9636\u4E58\uFF0C
    #+ \u5E94\u8BE5\u7528\u771F\u6B63\u7684\u7F16\u7A0B\u8BED\u8A00\u6765\u91CD\u5199\u5B83\u3002
    exit $E_RANGE_ERR
fi

fact () 
{
    local number=$1
    #  \u53D8\u91CF&quot;number&quot; \u5FC5\u987B\u88AB\u5B9A\u4E49\u4E3A\u5C40\u90E8\u53D8\u91CF\uFF0C
    #+ \u5426\u5219\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002
    if [ &quot;$number&quot; -eq 0 ]
    then
        factorial=1    # 0\u7684\u9636\u4E58\u4E3A1.
    else
        let &quot;decrnum = number - 1&quot;
        fact $decrnum  # \u9012\u5F52\u7684\u51FD\u6570\u8C03\u7528 (\u5C31\u662F\u51FD\u6570\u8C03\u7528\u81EA\u5DF1).
        let &quot;factorial = $number * $?&quot;
    fi
    return $factorial
}

fact $1
echo &quot;Factorial of $1 is $?.&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,2),j=n("\u4E5F\u53EF\u4EE5\u53C2\u8003"),J={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#PRIMES",target:"_blank",rel:"noopener noreferrer"},Q=n("\u4F8B\u5B50 A-15"),Z=n("\uFF0C\u4E00\u4E2A\u5305\u542B\u9012\u5F52\u4F8B\u5B50\u7684\u811A\u672C\u3002\u6211\u4EEC\u610F\u8BC6\u5230\u9012\u5F52\u540C\u65F6\u4E5F\u610F\u5473\u7740\u5DE8\u5927\u7684\u8D44\u6E90\u6D88\u8017\u548C\u7F13\u6162\u7684\u8FD0\u884C\u901F\u5EA6\uFF0C\u56E0\u6B64\u5B83\u5E76\u4E0D\u9002\u5408\u5728\u811A\u672C\u4E2D\u4F7F\u7528\u3002"),nn=s("h2",{id:"\u6CE8\u91CA",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6CE8\u91CA","aria-hidden":"true"},"#"),n(" \u6CE8\u91CA")],-1),sn={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18568",target:"_blank",rel:"noopener noreferrer"},an=n("[1]"),en=n(" \u7136\u800C\uFF0C\u5982Thomas Braunberger \u6307\u51FA\u7684\u90A3\u6837\uFF0C\u4E00\u4E2A\u51FD\u6570\u91CC\u5B9A\u4E49\u7684\u5C40\u90E8\u53D8\u91CF\u5BF9\u4E8E\u8C03\u7528\u5B83\u7684\u7236\u51FD\u6570\u4E5F\u662F\u53EF\u89C1\u7684\u3002"),rn=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

function1 ()
{
  local func1var=20

  echo &quot;Within function1, \\$func1var = $func1var.&quot;

  function2
}

function2 ()
{
  echo &quot;Within function2, \\$func1var = $func1var.&quot;
}

function1

exit 0


# \u811A\u672C\u7684\u8F93\u51FA:

# Within function1, $func1var = 20.
# Within function2, $func1var = 20.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5728Bash\u624B\u518C\u91CC\u662F\u8FD9\u6837\u63CF\u8FF0\u7684\uFF1A</p><blockquote><p>&quot;\u5C40\u90E8\u53D8\u91CF\u53EA\u80FD\u5728\u51FD\u6570\u5185\u90E8\u4F7F\u7528; \u5B83\u8BA9\u53D8\u91CF\u540D\u7684\u53EF\u89C1\u8303\u56F4\u9650\u5236\u5728\u4E86\u51FD\u6570\u5185\u90E8\u4EE5\u53CA\u5B83\u7684\u5B69\u5B50\u91CC&quot; [emphasis added] The ABS Guide\u7684\u4F5C\u8005\u8BA4\u4E3A\u8FD9\u4E2A\u884C\u4E3A\u4E00\u4E2Abug.</p></blockquote>`,3),ln={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18607",target:"_blank",rel:"noopener noreferrer"},pn=n("[2]"),bn=n(" \u88AB\u719F\u77E5\u4E3A\u5197\u4F59\u3002"),tn={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18610",target:"_blank",rel:"noopener noreferrer"},cn=n("[3]"),on=n(" \u88AB\u719F\u77E5\u4E3A\u540C\u4E49\u53CD\u590D\u3002"),un={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18614",target:"_blank",rel:"noopener noreferrer"},mn=n("[4]"),hn=n(" \u88AB\u719F\u77E5\u4E3A\u6697\u55BB\u3002"),_n={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18617",target:"_blank",rel:"noopener noreferrer"},dn=n("[5]"),gn=n(" \u88AB\u719F\u77E5\u4E3A\u9012\u5F52\u51FD\u6570\u3002"),fn={href:"http://tldp.org/LDP/abs/html/localvar.html#AEN18632",target:"_blank",rel:"noopener noreferrer"},vn=n("[6]"),qn=n(" \u592A\u591A\u7684\u9012\u5F52\u5C42\u6B21\u53EF\u80FD\u4F1A\u5F15\u53D1\u4E00\u4E2A\u811A\u672C\u7684\u6BB5\u9519\u8BEF\u3002"),$n=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

#  \u63D0\u9192: \u8FD0\u884C\u8FD9\u4E2A\u811A\u672C\u53EF\u80FD\u4F1A\u8BA9\u4F60\u7684\u7CFB\u7EDF\u5361\u6B7B\u3002
#  \u5982\u679C\u4F60\u591F\u597D\u8FD0\u7684\u8BDD\uFF0C\u5728\u8017\u5C3D\u53EF\u7528\u5185\u5B58\u4E4B\u524D\uFF0C\u5B83\u4F1A\u53D1\u751F\u4E00\u4E2A\u6BB5\u9519\u8BEF\u3002

recursive_function ()		   
{
echo &quot;$1&quot;     # \u8BA9\u51FD\u6570\u505A\u4E00\u4E9B\u4E8B\u60C5\uFF0C\u52A0\u5FEB\u53D1\u751F\u6BB5\u9519\u8BEF\u3002
(( $1 &lt; $2 )) &amp;&amp; recursive_function $(( $1 + 1 )) $2;
#  \u53EA\u8981\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C0F\u4E8E\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C
#+ \u8BA9\u7B2C\u4E00\u4E2A\u53C2\u6570\u52A01\uFF0C\u7136\u540E\u9012\u5F52\u3002
}

recursive_function 1 50000  # \u9012\u5F52 50,000\u5C42!
#  \u5F88\u53EF\u80FD\u53D1\u751F\u6BB5\u9519\u8BEF(\u4F9D\u8D56\u4E8E\u6808\u7684\u5927\u5C0F\uFF0C\u901A\u8FC7ulimit -m\u53EF\u4EE5\u8BBE\u7F6E\u6808\u7684\u5927\u5C0F)

#  \u5373\u4F7F\u662FC\u8BED\u8A00\uFF0C\u9012\u5F52\u8C03\u7528\u8FD9\u4E48\u591A\u5C42\u4E5F\u4F1A\u53D1\u751F\u6BB5\u9519\u8BEF\uFF0C
#+ \u901A\u8FC7\u5206\u914D\u6808\u8017\u5C3D\u6240\u6709\u7684\u5185\u5B58\u3002


echo &quot;This will probably not print.&quot;
exit 0  # \u8FD9\u4E2A\u811A\u672C\u53EF\u80FD\u4E0D\u4F1A\u6B63\u5E38\u9000\u51FA\u3002

#  \u611F\u8C22, St\xE9phane Chazelas.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,1);function xn(En,Nn){const a=p("ExternalLinkIcon");return c(),b(t,null,[i,u,s("p",null,[m,s("a",h,[_,e(a)]),d,s("a",g,[f,e(a)]),v,s("a",q,[$,e(a)])]),x,s("p",null,[E,N,s("a",R,[A,e(a)]),L]),k,s("p",null,[D,s("a",P,[S,e(a)]),F]),s("p",null,[T,s("a",I,[C,e(a)]),G,s("a",O,[B,e(a)]),y,s("a",U,[W,e(a)]),M,s("a",z,[V,e(a)])]),X,s("p",null,[w,s("a",H,[K,e(a)])]),Y,s("p",null,[j,s("a",J,[Q,e(a)]),Z]),nn,s("p",null,[s("a",sn,[an,e(a)]),en]),rn,s("p",null,[s("a",ln,[pn,e(a)]),bn]),s("p",null,[s("a",tn,[cn,e(a)]),on]),s("p",null,[s("a",un,[mn,e(a)]),hn]),s("p",null,[s("a",_n,[dn,e(a)]),gn]),s("p",null,[s("a",fn,[vn,e(a)]),qn]),$n],64)}var An=l(o,[["render",xn],["__file","24_2_local_variables.html.vue"]]);export{An as default};
