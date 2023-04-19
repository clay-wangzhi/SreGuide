import{_ as n,e as s}from"./app.89bc646c.js";const a={},e=s(`<h1 id="_36-2-shell-wrappers" tabindex="-1"><a class="header-anchor" href="#_36-2-shell-wrappers" aria-hidden="true">#</a> 36.2 shell wrappers</h1><p>wrapper\u662F\u4E00\u4E2A\u5305\u542B\u7CFB\u7EDF\u547D\u4EE4\u548C\u5DE5\u5177\u7684\u811A\u672C\uFF0C\u811A\u672C\u4F1A\u628A\u4E00\u4E9B\u53C2\u6570\u4F20\u9012\u7ED9\u8FD9\u4E9B\uFF08\u811A\u672C\u5185\u7684\uFF09\u547D\u4EE4\u3002\u5C06\u4E00\u4E2A\u590D\u6742\u7684\u547D\u4EE4\u5C01\u88C5\u6210\u4E00\u4E2Awrapper\u662F\u4E3A\u4E86\u8C03\u7528\u5B83\u65F6\u6BD4\u8F83\u7B80\u5355\u597D\u8BB0\uFF0C\u7279\u522B\u5728\u4F7F\u7528sed\u548Cawk\u547D\u4EE4\u65F6\u4F1A\u8FD9\u4E48\u505A\u3002</p><p>sed\u6216awk\u811A\u672C\u901A\u5E38\u5728\u547D\u4EE4\u884C\u4E0B\u8C03\u7528\u65F6\u662Fsed -e &#39;\u547D\u4EE4&#39;\u6216\u8005awk &#39;\u547D\u4EE4&#39;\u3002\u5728Bash\u811A\u672C\u4E2D\u5D4C\u5165\u8FD9\u4E9B\u547D\u4EE4\u4F1A\u8BA9\u5B83\u4EEC\u5728\u8C03\u7528\u65F6\u5F88\u7B80\u5355\uFF0C\u5E76\u4E14\u80FD\u591F\u88AB\u91CD\u7528\u3002\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5C06sed\u548Cawk\u7684\u4F18\u52BF\u7EDF\u4E00\u8D77\u6765\uFF0C\u6BD4\u5982\u5C06sed\u547D\u4EE4\u5904\u7406\u7684\u7ED3\u679C\u901A\u8FC7\u7BA1\u9053\u4F20\u9012\u7ED9awk\u7EE7\u7EED\u5904\u7406\u3002\u5C06\u8FD9\u4E9B\u4FDD\u5B58\u6210\u4E3A\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u91CD\u590D\u8C03\u7528\u5B83\u7684\u539F\u59CB\u7248\u672C\u6216\u8005\u4FEE\u6539\u7248\u672C\uFF0C\u800C\u4E0D\u7528\u5728\u547D\u4EE4\u884C\u91CC\u53CD\u590D\u6572\u5197\u957F\u7684\u547D\u4EE4\u3002</p><h2 id="example-36-1-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-1-shell-wrapper" aria-hidden="true">#</a> Example 36-1. shell wrapper</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u8FD9\u4E2A\u811A\u672C\u529F\u80FD\u662F\u53BB\u9664\u6587\u4EF6\u4E2D\u7684\u7A7A\u767D\u884C
# \u6CA1\u6709\u505A\u53C2\u6570\u68C0\u67E5
#
# \u4E5F\u8BB8\u4F60\u60F3\u6DFB\u52A0\u4E0B\u9762\u7684\u5185\u5BB9\uFF1A
#
# E_NOARGS=85
# if [ -z &quot;$1&quot; ]
# then
#  echo &quot;Usage: \`basename $0\` target-file&quot;
#  exit $E_NOARGS
# fi

sed -e /^$/d &quot;$1&quot;
# \u5C31\u50CF\u8FD9\u4E2A\u547D\u4EE4
#    sed -e &#39;/^$/d&#39; filename
# \u901A\u8FC7\u547D\u4EE4\u884C\u8C03\u7528

# &#39;-e&#39;\u610F\u601D\u662F\u540E\u9762\u4E3A\u7F16\u8F91\u547D\u4EE4\uFF08\u8FD9\u4E2A\u9009\u9879\u53EF\u7701\u7565\uFF09\u3002
# &#39;^&#39;\u4EE3\u8868\u884C\u9996\uFF0C&#39;$&#39;\u4EE3\u8868\u884C\u5C3E\u3002
# \u8FD9\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u8868\u793A\u8981\u5339\u914D\u51FA\u6240\u6709\u884C\u9996\u4F4D\u6CA1\u6709\u5185\u5BB9\u7684\u884C\uFF0C\u5C31\u662F\u7A7A\u767D\u884C\u3002
# \u662F\u5220\u9664\u547D\u4EE4\uFF08\u8BD1\u6CE8\uFF1A\u5C31\u662F\u628A\u521A\u624D\u9009\u51FA\u6765\u7684\u7A7A\u767D\u884C\u5220\u6389\uFF09

# \u5C06\u6587\u4EF6\u540D\u4E2D\u7684\u7279\u6B8A\u5B57\u7B26\u548C\u7A7A\u767D\u8FDB\u884C\u8F6C\u8BD1

# \u8FD9\u4E2A\u811A\u672C\u5E76\u4E0D\u4F1A\u771F\u6B63\u7684\u4FEE\u6539\u76EE\u6807\u6587\u4EF6\uFF0C\u5982\u679C\u60F3\u5BF9\u76EE\u6807\u6587\u4EF6\u771F\u6B63\u7684\u4FEE\u6539\uFF0C\u8BF7\u5C06\u8F93\u51FA\u91CD\u5B9A\u5411

exit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="example-36-2-\u7A0D\u5FAE\u590D\u6742\u4E00\u70B9\u7684-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-2-\u7A0D\u5FAE\u590D\u6742\u4E00\u70B9\u7684-shell-wrapper" aria-hidden="true">#</a> Example 36-2. \u7A0D\u5FAE\u590D\u6742\u4E00\u70B9\u7684 shell wrapper</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

#  subst.sh: \u5728\u6587\u4EF6\u4E2D\u8FDB\u884C\u66FF\u6362\u5B57\u7B26\u4E32\u7684\u811A\u672C
#  \u4F8B\u5982 &quot;sh subst.sh Smith Jones letter.txt&quot;
#  letter.txt \u4E2D\u7684\u6240\u6709 Jones \u90FD\u88AB\u66FF\u6362\u4E3A Smith\u3002

ARGS=3         # \u8FD9\u4E2A\u811A\u672C\u9700\u8981\u4E09\u4E2A\u53C2\u6570
E_BADARGS=85   # \u4F20\u7ED9\u811A\u672C\u7684\u53C2\u6570\u6570\u91CF\u4E0D\u6B63\u786E

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
# \u8FD9\u91CC\u662F\u6700\u6838\u5FC3\u7684\u90E8\u5206
sed -e &quot;s/$old_pattern/$new_pattern/g&quot; $file_name
# -----------------------------------------------

# &#39;s&#39; \u662Fsed\u4E2D\u7684\u66FF\u6362\u547D\u4EE4
# /pattern/\u8C03\u7528\u5730\u5740\u5339\u914D
# &#39;g&#39; \u8868\u793A\u8981\u5BF9\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u5339\u914D\u9879\u76EE\u90FD\u8FDB\u884C\u66FF\u6362\u64CD\u4F5C\uFF0C\u800C\u4E0D\u662F\u4EC5\u5BF9\u7B2C\u4E00\u4E2A\u8FD9\u6837\u5E72\u3002
# \u5982\u679C\u9700\u8981\u6DF1\u5165\u4E86\u89E3\uFF0C\u8BF7\u9605\u8BFBsed\u547D\u4EE4\u7684\u76F8\u5173\u6587\u6863\u3002

exit $?  # \u5C06\u8FD9\u4E2A\u811A\u672C\u7684\u8F93\u51FA\u91CD\u5B9A\u5411\u5230\u4E00\u4E2A\u6587\u4EF6\u5373\u53EF\u8BB0\u5F55\u771F\u6B63\u7684\u7ED3\u679C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="example-36-3-\u4E00\u4E2A\u901A\u7528\u7684\u5199\u65E5\u5FD7\u6587\u4EF6\u7684-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-3-\u4E00\u4E2A\u901A\u7528\u7684\u5199\u65E5\u5FD7\u6587\u4EF6\u7684-shell-wrapper" aria-hidden="true">#</a> Example 36-3. \u4E00\u4E2A\u901A\u7528\u7684\u5199\u65E5\u5FD7\u6587\u4EF6\u7684 shell wrapper</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
#  logging-wrapper.sh
#  \u4E00\u4E2A\u901A\u7528\u7684shell wrapper\uFF0C\u5728\u8FDB\u884C\u64CD\u4F5C\u7684\u540C\u65F6\u5BF9\u64CD\u4F5C\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55

DEFAULT_LOGFILE=logfile.txt

# \u8BBE\u7F6E\u4E0B\u9762\u4E24\u4E2A\u53D8\u91CF\u7684\u503C
OPERATION=
# \u53EF\u4EE5\u662F\u4EFB\u610F\u64CD\u4F5C\uFF0C\u6BD4\u5982\u4E00\u4E2Aawk\u811A\u672C\u6216\u8005\u7528\u7BA1\u9053\u8FDE\u63A5\u7684\u590D\u6742\u547D\u4EE4

LOGFILE=
if [ -z &quot;$LOGFILE&quot; ]
    then     # \u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u6587\u4EF6\u540D
      LOGFILE=&quot;$DEFAULT_LOGFILE&quot;
      fi

# \u5BF9\u4E8E\u64CD\u4F5C\u547D\u4EE4\u7684\u53C2\u6570\uFF08\u53EF\u9009\uFF09
OPTIONS=&quot;$@&quot;


# \u65E5\u5FD7\u8BB0\u5F55
echo &quot;\`date\` + \`whoami\` + $OPERATION &quot;$@&quot;&quot; &gt;&gt; $LOGFILE
# \u8FDB\u884C\u64CD\u4F5C\u52A8\u4F5C
exec $OPERATION &quot;$@&quot;

# \u8981\u5728\u771F\u6B63\u6267\u884C\u64CD\u4F5C\u4E4B\u524D\u5199\u65E5\u5FD7
# \u601D\u8003\u4E0B\u4E3A\u4EC0\u4E48\u8981\u5148\u5199\u65E5\u5FD7\uFF0C\u540E\u64CD\u4F5C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="example-36-4-\u5173\u4E8Eawk\u811A\u672C\u7684-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-4-\u5173\u4E8Eawk\u811A\u672C\u7684-shell-wrapper" aria-hidden="true">#</a> Example 36-4. \u5173\u4E8Eawk\u811A\u672C\u7684 shell wrapper</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# pr-ascii.sh: \u6253\u5370ASCII\u7801\u8868\u683C

START=33   # \u53EF\u6253\u5370\u7684ASCII\u7801\u8303\u56F4\uFF08\u5341\u8FDB\u5236\uFF09
END=127    # \u4E0D\u4F1A\u8F93\u51FA\u4E0D\u53EF\u6253\u5370\u7684ASCII\u7801

echo &quot; Decimal   Hex     Character&quot;   # \u8868\u5934
echo &quot; -------   ---     ---------&quot;

for ((i=START; i&lt;=END; i++))
do
    echo $i | awk &#39;{printf(&quot;  %3d       %2x         %c\\n&quot;, $1, $1, $1)}&#39;
# Bash\u5185\u7F6E\u7684printf\u547D\u4EE4\u65E0\u6CD5\u5B8C\u6210\u4E0B\u9762\u7684\u64CD\u4F5C: \uFF08\u8BD1\u6CE8\uFF1A\u6240\u4EE5\u8FD9\u4F7F\u7528awk\u811A\u672C\u6765\u5B9E\u73B0\u8F93\u51FA\uFF09
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


# \u5C06\u8F93\u51FA\u91CD\u5B9A\u5411\u5230\u6587\u4EF6
# \u6216\u8005\u7528\u7BA1\u9053\u4F20\u9012\u7ED9&quot;more&quot;:  sh pr-asc.sh | more
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="example-36-5-\u53E6\u4E00\u4E2A\u5173\u4E8Eawk\u7684-shell-wrapper" tabindex="-1"><a class="header-anchor" href="#example-36-5-\u53E6\u4E00\u4E2A\u5173\u4E8Eawk\u7684-shell-wrapper" aria-hidden="true">#</a> Example 36-5. \u53E6\u4E00\u4E2A\u5173\u4E8Eawk\u7684 shell wrapper</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u5728\u76EE\u6807\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6570\u5B57\u7684\u7279\u6B8A\u5217
# \u5341\u8FDB\u5236\u6D6E\u70B9\u6570\u4E5F\u53EF\u4EE5\uFF0C\u56E0\u4E3Aawk\u53EF\u4EE5\u5904\u7406\u8FD9\u6837\u7684\u8F93\u51FA\u3002

ARGS=2
E_WRONGARGS=85

if [ $# -ne &quot;$ARGS&quot; ] # Check for proper number of command-line args.
then
    echo &quot;Usage: \`basename $0\` filename column-number&quot;
    exit $E_WRONGARGS
fi

filename=$1
column_number=$2

# \u5C06shell\u811A\u672C\u7684\u53D8\u91CF\u4F20\u9012\u7ED9awk\u6709\u4E00\u70B9\u96BE\u529E\u3002
# \u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u7528\u5F15\u53F7\u5C06Bash\u811A\u672C\u53D8\u91CF\u5728awk\u811A\u672C\u4E2D\u5305\u8D77\u6765
#     $&#39;$BASH_SCRIPT_VAR&#39;
#      ^                ^
# \u4E0B\u9762\u7684awk\u811A\u672C\u5C31\u662F\u8FD9\u4E48\u5E72\u7684\u3002
# \u8BE6\u7EC6\u7528\u6CD5\u53EF\u4EE5\u67E5\u9605awk\u6587\u6863\u3002

# \u591A\u884C\u7684awk\u811A\u672C\u53EF\u4EE5\u5199\u6210\u8FD9\u6837
#   awk &#39;
#   ...
#   ...
#   ...
#   &#39;


# \u5F00\u59CBawk\u811A\u672C
# -----------------------------
awk &#39;

{ total += $&#39;&quot;\${column_number}&quot;&#39; # \u8BD1\u6CE8\uFF1A\u8FD9\u5C31\u662F\u90A3\u4E2Abash\u811A\u672C\u53D8\u91CF
}
END {
print total
}     

&#39; &quot;$filename&quot;
# -----------------------------
# \u7ED3\u675Fawk\u811A\u672C


#   \u5C06shell\u53D8\u91CF\u4F20\u9012\u7ED9awk\u811A\u672C\u4E5F\u8BB8\u662F\u4E0D\u5B89\u5168\u7684
#   \u6240\u4EE5Stephane Chazelas\u63D0\u51FA\u4E86\u4E0B\u9762\u7684\u66FF\u4EE3\u65B9\u6848\uFF1A
#   ---------------------------------------
#   awk -v column_number=&quot;$column_number&quot; &#39; # \u8BD1\u6CE8\uFF1A\u5C06shell\u7684\u503C\u8D4B\u7ED9\u4E00\u4E2Aawk\u53D8\u91CF
#   { total += $column_number
#   }
#   END {
#       print total
#   }&#39; &quot;$filename&quot;
#   ---------------------------------------


exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p>\u80FD\u6EE1\u8DB3\u90A3\u4E9B\u9700\u8981\u745E\u58EB\u519B\u5200\u822C\u5168\u80FD\u5DE5\u5177\u7684\u811A\u672C\u8BED\u8A00\uFF0C\u5C31\u53EA\u6709Perl\u4E86\u3002Perl\u96C6\u5408\u4E86sed\u548Cawk\u7684\u80FD\u529B\uFF0C\u5E76\u4E14\u6BD4C\u66F4\u52A0\u7CBE\u7B80\u3002\u5B83\u662F\u6A21\u5757\u5316\u7684\u5E76\u4E14\u80FD\u652F\u6301\u5305\u62EC\u53A8\u623F\u6D17\u7897\u69FD\u5728\u5185\u7684\u6240\u6709\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u6240\u80FD\u6D89\u53CA\u7684\u4E8B\u7269\u3002\u77ED\u5C0F\u7684Perl\u811A\u672C\u53EF\u4EE5\u5D4C\u5165shell\u811A\u672C\u4E2D\uFF0C\u751A\u81F3Perl\u53EF\u4EE5\u5B8C\u5168\u66FF\u4EE3shell\u811A\u672C\u3002\uFF08\u672C\u4E66\u4F5C\u8005\u5BF9\u6B64\u4ECD\u7136\u62B1\u6709\u6000\u7591\uFF09</p><h2 id="example-36-6-perl\u5D4C\u5165bash\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#example-36-6-perl\u5D4C\u5165bash\u811A\u672C" aria-hidden="true">#</a> Example 36-6. Perl\u5D4C\u5165Bash\u811A\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# shell\u547D\u4EE4\u5148\u4E8EPerl\u811A\u672C\u6267\u884C
echo &quot;This precedes the embedded Perl script within \\&quot;$0\\&quot;.&quot;
echo &quot;===============================================================&quot;

perl -e &#39;print &quot;This line prints from an embedded Perl script.\\n&quot;;&#39;
# \u50CFsed\u547D\u4EE4\u4E00\u6837\uFF0CPerl\u4F7F\u7528&#39;-e&#39;\u9009\u9879

echo &quot;===============================================================&quot;
echo &quot;However, the script may also contain shell and system commands.&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5373\u4F7F\u80FD\u5C06Bash\u811A\u672C\u548CPerl\u811A\u672C\u5408\u4E8C\u4E3A\u4E00\uFF0C\u5148\u6267\u884CBash\u90E8\u5206\u8FD8\u662FPerl\u90E8\u5206\u4ECD\u7136\u8981\u53D6\u51B3\u4E8E\u8C03\u7528\u811A\u672C\u7684\u65B9\u5F0F\u3002</p><h2 id="example-36-7-bash\u548Cperl\u811A\u672C\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#example-36-7-bash\u548Cperl\u811A\u672C\u5408\u5E76" aria-hidden="true">#</a> Example 36-7. Bash\u548CPerl\u811A\u672C\u5408\u5E76</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# bashandperl.sh

echo &quot;Greetings from the Bash part of the script, $0.&quot;
# \u8FD9\u91CC\u53EF\u4EE5\u5199\u66F4\u591A\u7684Bash\u547D\u4EE4

exit
# Bash\u811A\u672C\u90E8\u5206\u7ED3\u675F

# =======================================================

#!/usr/bin/perl
# \u8FD9\u90E8\u5206\u811A\u672C\u8981\u50CF\u4E0B\u9762\u8FD9\u6837\u8C03\u7528
#    perl -x bashandperl.sh

print &quot;Greetings from the Perl part of the script, $0.\\n&quot;;
# Perl \u770B\u8D77\u6765\u5E76\u4E0D\u50CF \u201Cecho\u201D ...
# \u8FD9\u91CC\u53EF\u4EE5\u5199\u66F4\u591A\u7684Perl\u547D\u4EE4

# Perl\u547D\u4EE4\u90E8\u5206\u7ED3\u675F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash$ bash bashandperl.sh
Greetings from the Bash part of the script.

bash$ perl -x bashandperl.sh
Greetings from the Perl part of the script.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5F53\u7136\u8FD8\u53EF\u4EE5\u7528shell wrapper\u5D4C\u5165\u66F4\u591A\u7684\u201C\u5916\u6765\u6237\u201D\uFF0C\u6BD4\u5982Python\u6216\u8005\u5176\u4ED6\u7684...</p><h2 id="example-36-8-python\u5D4C\u5165bash\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#example-36-8-python\u5D4C\u5165bash\u811A\u672C" aria-hidden="true">#</a> Example 36-8. Python\u5D4C\u5165Bash\u811A\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# ex56py.sh

# shell\u811A\u672C\u5148\u4E8EPython\u811A\u672C\u6267\u884C
echo &quot;This precedes the embedded Python script within \\&quot;$0.\\&quot;&quot;
echo &quot;===============================================================&quot;

python -c &#39;print &quot;This line prints from an embedded Python script.\\n&quot;;&#39;
# \u5E76\u4E0D\u50CFsed\u548CPerl\uFF0CPython\u4F7F\u7528&#39;-c&#39;\u9009\u9879
python -c &#39;k = raw_input( &quot;Hit a key to exit to outer script. &quot; )&#39;

echo &quot;===============================================================&quot;
echo &quot;However, the script may also contain shell and system commands.&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4F7F\u7528\u811A\u672C\u5C01\u88C5mplayer\u6216\u8005Google\u7FFB\u8BD1\u670D\u52A1\u5668\u7684\u4E00\u4E9B\u529F\u80FD\uFF0C\u4F60\u80FD\u505A\u51FA\u7ED9\u4F60\u53CD\u9988\u4E00\u4E9B\u4FE1\u606F\u7684\u5C0F\u4E1C\u897F\u3002</p><h2 id="example-36-9-\u4F1A\u8BB2\u8BDD\u7684\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#example-36-9-\u4F1A\u8BB2\u8BDD\u7684\u811A\u672C" aria-hidden="true">#</a> Example 36-9. \u4F1A\u8BB2\u8BDD\u7684\u811A\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
#   \u53C2\u89C1:
#   http://elinux.org/RPi_Text_to_Speech_(Speech_Synthesis)

# \u4E3A\u4E86\u8FDE\u63A5Google\u7FFB\u8BD1\u670D\u52A1\u5668\uFF0C\u8FD9\u4E2A\u811A\u672C\u5FC5\u987B\u8FDE\u63A5\u5230\u4E92\u8054\u7F51\u624D\u80FD\u5DE5\u4F5C\uFF0C
# \u800C\u4E14\u4F60\u7684\u8BA1\u7B97\u673A\u4E0A\u5FC5\u987B\u88C5\u6709mplayer\u3002

speak()
  {
  local IFS=+
  # \u5148\u8C03\u7528mplayer\uFF0C\u518D\u8FDE\u63A5Google\u7FFB\u8BD1\u670D\u52A1\u5668\u3002
  /usr/bin/mplayer -ao alsa -really-quiet -noconsolecontrols \\
  &quot;http://translate.google.com/translate_tts?tl=en&amp;q=&quot;$*&quot;&quot;
  # \u53EF\u4EE5\u8BF4\u8BDD\u7684Google\u7FFB\u8BD1
  }

LINES=4

spk=$(tail -$LINES $0) # \u540C\u6837\u7684\u7ED3\u5C3E
speak &quot;$spk&quot;
exit
# BRowns \u5F88\u9AD8\u5174\u4E0E\u4F60\u8C08\u8BDD\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u6709\u4E2A\u6709\u8DA3\u7684shell wrapper\u4F8B\u5B50\u662FMartin Matusiak\u7684undvd\uFF0C\u4E3A\u590D\u6742\u7684mencoder\u5DE5\u5177\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5355\u6613\u7528\u7684\u547D\u4EE4\u884C\u63A5\u53E3\u3002\u53E6\u4E00\u4E2A\u4F8B\u5B50\u662FItzchak Rehberg\u7684Ext3Undel\uFF0C\u5B83\u4E3A\u5728ext3\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u6062\u590D\u5220\u9664\u7684\u6587\u4EF6\u63D0\u4F9B\u4E86\u4E00\u6574\u5957\u5DE5\u5177\u3002</p><p>Notes [1] Linux\u5DE5\u5177\u4E8B\u5B9E\u4E0A\u5F88\u591A\u662Fshell wrapper\uFF0C\u6BD4\u5982/usr/bin/pdf2ps\uFF0C/usr/bin/batch\u548C/usr/bin/xmkmf\u3002</p>`,28);function r(l,p){return e}var i=n(a,[["render",r],["__file","36_2_shell_wrappers.html.vue"]]);export{i as default};
