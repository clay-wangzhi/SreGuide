import{_ as r,r as p,c as b,b as s,a,F as c,d as n,e as l,o as i}from"./app.53755e41.js";const t={},u=s("h1",{id:"_20-1-\u4F7F\u7528-exec",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_20-1-\u4F7F\u7528-exec","aria-hidden":"true"},"#"),n(" 20.1 \u4F7F\u7528 exec")],-1),o=n("\u4E00\u4E2A "),m=s("code",null,"exec < filename",-1),d=n(" \u547D\u4EE4\u91CD\u5B9A\u5411\u4E86 "),h=s("code",null,"\u6807\u51C6\u8F93\u5165",-1),_=n(" \u5230\u4E00\u4E2A\u6587\u4EF6\u3002\u81EA\u6B64\u6240\u6709 "),q=s("code",null,"\u6807\u51C6\u8F93\u5165",-1),x=n(" \u90FD\u6765\u81EA\u8BE5\u6587\u4EF6\u800C\u4E0D\u662F\u9ED8\u8BA4\u6765\u6E90(\u901A\u5E38\u662F\u952E\u76D8\u8F93\u5165)\u3002\u5728\u4F7F\u7528 "),f={href:"http://tldp.org/LDP/abs/html/sedawk.html#SEDREF",target:"_blank",rel:"noopener noreferrer"},g=n("sed"),L=n(" \u548C "),v={href:"http://tldp.org/LDP/abs/html/awk.html#AWKREF",target:"_blank",rel:"noopener noreferrer"},$=n("awk"),E=n(" \u65F6\u5019\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u9010\u884C\u8BFB\u6587\u4EF6\u5E76\u9010\u884C\u89E3\u6790\u3002"),k=l(`<p>\u6837\u4F8B 20-1. \u4F7F\u7528 <code>exec</code> \u91CD\u5B9A\u5411 \u6807\u51C6\u8F93\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u4F7F\u7528 &#39;exec&#39; \u91CD\u5B9A\u5411 \u6807\u51C6\u8F93\u5165 .


exec 6&lt;&amp;0          # \u94FE\u63A5\u6587\u4EF6\u63CF\u8FF0\u7B26 #6 \u5230\u6807\u51C6\u8F93\u5165.
                   # .

exec &lt; data-file   # \u6807\u51C6\u8F93\u5165\u88AB\u6587\u4EF6 &quot;data-file&quot; \u66FF\u6362

read a1            # \u8BFB\u53D6\u6587\u4EF6 &quot;data-file&quot; \u9996\u884C.
read a2            # \u8BFB\u53D6\u6587\u4EF6 &quot;data-file&quot; \u7B2C\u4E8C\u884C

echo
echo &quot;Following lines read from file.&quot;
echo &quot;-------------------------------&quot;
echo $a1
echo $a2

echo; echo; echo

exec 0&lt;&amp;6 6&lt;&amp;-
#  \u73B0\u5728\u5728\u4E4B\u524D\u4FDD\u5B58\u7684\u4F4D\u7F6E\u5C06\u4ECE\u6587\u4EF6\u63CF\u8FF0\u7B26 #6 \u5C06 \u6807\u51C6\u8F93\u51FA \u6062\u590D.
#+ \u4E14\u5173\u95ED\u6587\u4EF6\u63CF\u8FF0\u7B26 #6 ( 6&lt;&amp;- ) \u8BA9\u5176\u4ED6\u7A0B\u5E8F\u6B63\u5E38\u4F7F\u7528.
#
# &lt;&amp;6 6&lt;&amp;-    also works.

echo -n &quot;Enter data  &quot;
read b1  # \u73B0\u5728\u6309\u9884\u671F\u7684\uFF0C\u4ECE\u6B63\u5E38\u7684\u6807\u51C6\u8F93\u5165 &quot;read&quot;.
echo &quot;Input read from stdin.&quot;
echo &quot;----------------------&quot;
echo &quot;b1 = $b1&quot;

echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u540C\u7406, <code>exec &gt;filename</code> \u91CD\u5B9A\u5411 \u6807\u51C6\u8F93\u51FA \u5230\u6307\u5B9A\u6587\u4EF6. \u4ED6\u5C06\u6240\u6709\u7684\u547D\u4EE4\u8F93\u51FA\u901A\u5E38\u662F \u6807\u51C6\u8F93\u51FA \u91CD\u5B9A\u5411\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E.</p>`,3),F=s("code",null,"exec N > filename",-1),I=n(" \u5F71\u54CD\u6574\u4E2A\u811A\u672C\u6216\u5F53\u524D shell\u3002"),w={href:"http://tldp.org/LDP/abs/html/special-chars.html#PROCESSIDREF",target:"_blank",rel:"noopener noreferrer"},N=n("PID"),S=n(" \u4ECE\u91CD\u5B9A\u5411\u811A\u672C\u6216 shell \u7684\u90A3\u65F6\u5019\u5DF2\u7ECF\u53D1\u751F\u4E86\u6539\u53D8. \u7136\u800C "),O=s("code",null,"N > filename",-1),R=n(" \u5F71\u54CD\u7684\u5C31\u662F\u65B0\u6D3E\u751F\u7684\u8FDB\u7A0B\uFF0C\u800C\u4E0D\u662F\u6574\u4E2A\u811A\u672C\u6216 shell\u3002"),A=l(`<p>\u6837\u4F8B 20-2. \u4F7F\u7528 exec \u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# reassign-stdout.sh

LOGFILE=logfile.txt

exec 6&gt;&amp;1           # \u94FE\u63A5\u6587\u4EF6\u63CF\u8FF0\u7B26 #6 \u5230\u6807\u51C6\u8F93\u51FA.
                    # \u4FDD\u5B58\u6807\u51C6\u8F93\u51FA.

exec &gt; $LOGFILE     # \u6807\u51C6\u8F93\u51FA\u88AB\u6587\u4EF6 &quot;logfile.txt&quot; \u66FF\u6362.

# ----------------------------------------------------------- #
# \u6240\u6709\u5728\u8FD9\u4E2A\u5757\u91CC\u7684\u547D\u4EE4\u7684\u8F93\u51FA\u90FD\u4F1A\u53D1\u9001\u5230\u6587\u4EF6 $LOGFILE.

echo -n &quot;Logfile: &quot;
date
echo &quot;-------------------------------------&quot;
echo

echo &quot;Output of \\&quot;ls -al\\&quot; command&quot;
echo
ls -al
echo; echo
echo &quot;Output of \\&quot;df\\&quot; command&quot;
echo
df

# ----------------------------------------------------------- #

exec 1&gt;&amp;6 6&gt;&amp;-      # \u5173\u95ED\u6587\u4EF6\u63CF\u8FF0\u7B26 #6 \u6062\u590D \u6807\u51C6\u8F93\u51FA.

echo
echo &quot;== stdout now restored to default == &quot;
echo
ls -al
echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u6837\u4F8B 20-3. \u7528 exec \u5728\u4E00\u4E2A\u811A\u672C\u91CC\u540C\u65F6\u91CD\u5B9A\u5411 \u6807\u51C6\u8F93\u5165 \u548C \u6807\u51C6\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# upperconv.sh
# \u8F6C\u5316\u6307\u5B9A\u7684\u8F93\u5165\u6587\u4EF6\u6210\u5927\u5199.

E_FILE_ACCESS=70
E_WRONG_ARGS=71

if [ ! -r &quot;$1&quot; ]     # \u6307\u5B9A\u7684\u8F93\u5165\u6587\u4EF6\u662F\u5426\u53EF\u8BFB?
then
  echo &quot;Can&#39;t read from input file!&quot;
  echo &quot;Usage: $0 input-file output-file&quot;
  exit $E_FILE_ACCESS
fi                   #  \u540C\u6837\u7684\u9519\u8BEF\u9000\u51FA
                     #+ \u7B49\u540C\u5982\u679C\u8F93\u5165\u6587\u4EF6 ($1) \u672A\u6307\u5B9A (\u4E3A\u4EC0\u4E48?).

if [ -z &quot;$2&quot; ]
then
  echo &quot;Need to specify output file.&quot;
  echo &quot;Usage: $0 input-file output-file&quot;
  exit $E_WRONG_ARGS
fi


exec 4&lt;&amp;0
exec &lt; $1            # \u5C06\u4ECE\u8F93\u5165\u6587\u4EF6\u8BFB\u53D6.

exec 7&gt;&amp;1
exec &gt; $2            # \u5C06\u5199\u5165\u8F93\u51FA\u6587\u4EF6.
                     # \u5047\u5B9A\u8F93\u51FA\u6587\u4EF6\u53EF\u5199 (\u589E\u52A0\u68C0\u6D4B?).

# -----------------------------------------------
    cat - | tr a-z A-Z   # \u8F6C\u5316\u5927\u5199.
#   ^^^^^                # \u8BFB\u53D6\u6807\u51C6\u8F93\u5165.
#           ^^^^^^^^^^   # \u5199\u5230\u6807\u51C6\u8F93\u51FA.
# \u7136\u800C\u6807\u51C6\u8F93\u5165\u548C\u6807\u51C6\u8F93\u51FA\u90FD\u4F1A\u88AB\u91CD\u5B9A\u5411.
# \u6CE8\u610F &#39;cat&#39; \u53EF\u80FD\u4F1A\u88AB\u9057\u6F0F.
# -----------------------------------------------

exec 1&gt;&amp;7 7&gt;&amp;-       # \u6062\u590D\u6807\u51C6\u8F93\u51FA.
exec 0&lt;&amp;4 4&lt;&amp;-       # \u6062\u590D\u6807\u51C6\u8F93\u5165.

# \u6062\u590D\u540E, \u4E0B\u9762\u8FD9\u884C\u4F1A\u9884\u671F\u4ECE\u6807\u51C6\u8F93\u51FA\u6253\u5370.
echo &quot;File \\&quot;$1\\&quot; written to \\&quot;$2\\&quot; as uppercase conversion.&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,4),C=n("I/O \u91CD\u5B9A\u5411\u662F\u79CD\u660E\u667A\u7684\u89C4\u907F "),D={href:"http://tldp.org/LDP/abs/html/subshells.html#PARVIS",target:"_blank",rel:"noopener noreferrer"},G=n("inaccessible variables within a subshell"),P=n(" \u95EE\u9898\u7684\u65B9\u6CD5."),V=l(`<p>\u6837\u4F8B 20-4. \u89C4\u907F\u5B50 shell</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# avoid-subshell.sh
# Matthew Walker \u7684\u5EFA\u8BAE.

Lines=0

echo

cat myfile.txt | while read line;
                 do {
                   echo $line
                   (( Lines++ ));  #  \u9012\u589E\u53D8\u91CF\u7684\u503C\u8D8B\u8FD1\u5916\u5C42\u5FAA\u73AF
                                   #  \u4F7F\u7528\u5B50 shell \u4F1A\u6709\u95EE\u9898.
                 }
                 done

echo &quot;Number of lines read = $Lines&quot;     # 0
                                         # \u62A5\u9519!

echo &quot;------------------------&quot;


exec 3&lt;&gt; myfile.txt
while read line &lt;&amp;3
do {
  echo &quot;$line&quot;
  (( Lines++ ));                   #  \u9012\u589E\u53D8\u91CF\u7684\u503C\u8D8B\u8FD1\u5916\u5C42\u5FAA\u73AF.
                                   #  \u6CA1\u6709\u5B50 shell\uFF0C\u5C31\u4E0D\u4F1A\u6709\u95EE\u9898.
}
done
exec 3&gt;&amp;-

echo &quot;Number of lines read = $Lines&quot;     # 8

echo

exit 0

# \u4E0B\u9762\u7684\u884C\u5E76\u4E0D\u5728\u811A\u672C\u91CC.

$ cat myfile.txt

Line 1.
Line 2.
Line 3.
Line 4.
Line 5.
Line 6.
Line 7.
Line 8.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,2);function y(W,B){const e=p("ExternalLinkIcon");return i(),b(c,null,[u,s("p",null,[o,m,d,h,_,q,x,s("a",f,[g,a(e)]),L,s("a",v,[$,a(e)]),E]),k,s("p",null,[F,I,s("a",w,[N,a(e)]),S,O,R]),A,s("p",null,[C,s("a",D,[G,a(e)]),P]),V],64)}var U=r(t,[["render",y],["__file","20_1_use_exec.html.vue"]]);export{U as default};
