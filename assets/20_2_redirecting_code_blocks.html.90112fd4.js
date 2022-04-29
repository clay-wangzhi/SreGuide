import{_ as r,r as p,c as b,a as s,b as a,F as i,d as n,e as l,o as u}from"./app.e34c9e1b.js";const t={},c=s("h1",{id:"_20-2-\u91CD\u5B9A\u5411\u4EE3\u7801\u5757",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_20-2-\u91CD\u5B9A\u5411\u4EE3\u7801\u5757","aria-hidden":"true"},"#"),n(" 20.2 \u91CD\u5B9A\u5411\u4EE3\u7801\u5757")],-1),m=n("\u6709\u5982 "),o={href:"http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF",target:"_blank",rel:"noopener noreferrer"},d=n("while"),h=n(", "),q={href:"http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1",target:"_blank",rel:"noopener noreferrer"},_=n("until"),$=n(", \u548C "),f={href:"http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF",target:"_blank",rel:"noopener noreferrer"},g=n("for"),x=n(" \u5FAA\u73AF, \u751A\u81F3 "),F={href:"http://tldp.org/LDP/abs/html/tests.html#IFTHEN",target:"_blank",rel:"noopener noreferrer"},v=n("if/then"),w=n(" \u4E5F\u53EF\u4EE5\u91CD\u5B9A\u5411 \u6807\u51C6\u8F93\u5165 \u6D4B\u8BD5\u4EE3\u7801\u5757. \u751A\u81F3\u8FDE\u4E00\u4E2A\u51FD\u6570\u90FD\u53EF\u4EE5\u7528\u8FD9\u4E2A\u65B9\u6CD5\u8FDB\u884C\u91CD\u5B9A\u5411 (\u89C1 "),S={href:"http://tldp.org/LDP/abs/html/complexfunct.html#REALNAME",target:"_blank",rel:"noopener noreferrer"},k=n("\u6837\u4F8B 24-11"),E=n('). \u4EE3\u7801\u5757\u7684\u672B\u5C3E\u90E8\u5206\u7684 "<" \u5C31\u662F\u7528\u6765\u5B8C\u6210\u8FD9\u4E2A\u7684.'),z=l(`<p>\u6837\u4F8B 20-5. while \u5FAA\u73AF\u7684\u91CD\u5B9A\u5411</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# redir2.sh

if [ -z &quot;$1&quot; ]
then
  Filename=names.data       # \u5982\u679C\u4E0D\u6307\u5B9A\u6587\u4EF6\u540D\u7684\u9ED8\u8BA4\u503C.
else
  Filename=$1
fi  
#+ Filename=\${1:-names.data}
#  can replace the above test (parameter substitution).

count=0

echo

while [ &quot;$name&quot; != Smith ]  # \u4E3A\u4EC0\u4E48\u53D8\u91CF &quot;$name&quot; \u52A0\u5F15\u53F7?
do
  read name                 # \u4ECE $Filename \u8BFB\u53D6\u503C, \u800C\u4E0D\u662F \u6807\u51C6\u8F93\u5165.
  echo $name
  let &quot;count += 1&quot;
done &lt;&quot;$Filename&quot;           # \u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165\u5230\u6587\u4EF6 $Filename. 
#    ^^^^^^^^^^^^

echo; echo &quot;$count names read&quot;; echo

exit 0

#  \u6CE8\u610F\u5728\u4E00\u4E9B\u8001\u7684\u811A\u672C\u8BED\u8A00\u4E2D,
#+ \u5FAA\u73AF\u7684\u91CD\u5B9A\u5411\u4F1A\u8DD1\u5728\u5B50 shell \u7684\u73AF\u5883\u4E2D.
#  \u56E0\u6B64, $count \u8FD4\u56DE 0, \u5728\u5FAA\u73AF\u5916\u5DF2\u7ECF\u521D\u59CB\u5316\u8FC7\u503C.
#  Bash \u548C ksh *\u53EA\u8981\u53EF\u80FD* \u4F1A\u907F\u514D\u542F\u52A8\u5B50 shell ,
#+ \u6240\u4EE5\u8FD9\u4E2A\u811A\u672C\u4F5C\u4E3A\u6837\u4F8B\u8FD0\u884C\u6210\u529F.
#  (\u611F\u8C22 Heiner Steven \u6307\u51FA\u8FD9\u70B9.)

#  \u7136\u800C . . .
#  Bash \u6709\u65F6\u5019 *\u80FD* \u5728 &quot;\u53EA\u8BFB\u7684 while&quot; \u5FAA\u73AF\u542F\u52A8\u5B50\u8FDB\u7A0B ,
#+ \u4E0D\u540C\u4E8E &quot;while&quot; \u5FAA\u73AF\u7684\u91CD\u5B9A\u5411.

abc=hi
echo -e &quot;1\\n2\\n3&quot; | while read l
     do abc=&quot;$l&quot;
        echo $abc
     done
echo $abc

#  \u611F\u8C22, Bruno de Oliveira Schneider \u4E0A\u9762\u7684\u6F14\u793A\u4EE3\u7801.
#  \u4E5F\u611F\u8C22 Brian Onn \u7EA0\u6B63\u4E86\u6CE8\u91CA\u7684\u9519\u8BEF.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u6837\u4F8B 20-6. \u53E6\u4E00\u79CD\u5F62\u5F0F\u7684 while \u5FAA\u73AF\u91CD\u5B9A\u5411</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u8FD9\u662F\u4E4B\u524D\u7684\u53E6\u4E00\u79CD\u5F62\u5F0F\u7684\u811A\u672C.

#  Heiner Steven \u63D0\u8BAE\u5728\u91CD\u5B9A\u5411\u5FAA\u73AF\u65F6\u5019\u8FD0\u884C\u5728\u5B50 shell \u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u53D8\u901A\u65B9\u6848
#+ \u56E0\u6B64\u76F4\u5230\u5FAA\u73AF\u7EC8\u6B62\u65F6\u5FAA\u73AF\u5185\u90E8\u7684\u53D8\u91CF\u4E0D\u9700\u8981\u4FDD\u8BC1\u4ED6\u4EEC\u7684\u503C


if [ -z &quot;$1&quot; ]
then
  Filename=names.data     # \u5982\u679C\u4E0D\u6307\u5B9A\u6587\u4EF6\u540D\u7684\u9ED8\u8BA4\u503C.
else
  Filename=$1
fi  


exec 3&lt;&amp;0                 # \u4FDD\u5B58\u6807\u51C6\u8F93\u5165\u5230\u6587\u4EF6\u63CF\u8FF0\u7B26 3.
exec 0&lt;&quot;$Filename&quot;        # \u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165.

count=0
echo


while [ &quot;$name&quot; != Smith ]
do
  read name               # \u4ECE\u91CD\u5B9A\u5411\u7684\u6807\u51C6\u8F93\u5165($Filename)\u8BFB\u53D6\u503C.
  echo $name
  let &quot;count += 1&quot;
done                      #  \u4ECE $Filename \u5FAA\u73AF\u8BFB
                          #+ \u56E0\u4E3A\u7B2C 20 \u884C.

#  \u8FD9\u4E2A\u811A\u672C\u7684\u65E9\u671F\u7248\u672C\u5728 &quot;while&quot; \u5FAA\u73AF done &lt;&quot;$Filename&quot; \u7EC8\u6B62
#  \u7EC3\u4E60:
#  \u4E3A\u4EC0\u4E48\u8FD9\u4E2A\u6CA1\u5FC5\u8981?


exec 0&lt;&amp;3                 # \u6062\u590D\u65E9\u524D\u7684\u6807\u51C6\u8F93\u5165.
exec 3&lt;&amp;-                 # \u5173\u95ED\u4E34\u65F6\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26 3.

echo; echo &quot;$count names read&quot;; echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>\u6837\u4F8B 20-7. until \u5FAA\u73AF\u7684\u91CD\u5B9A\u5411</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u540C\u5148\u524D\u7684\u811A\u672C\u4E00\u6837, \u4E0D\u8FC7\u7528\u7684\u662F &quot;until&quot; \u5FAA\u73AF.

if [ -z &quot;$1&quot; ]
then
  Filename=names.data         # \u5982\u679C\u4E0D\u6307\u5B9A\u6587\u4EF6\u7684\u9ED8\u8BA4\u503C.
else
  Filename=$1
fi  

# while [ &quot;$name&quot; != Smith ]
until [ &quot;$name&quot; = Smith ]     # \u53D8  !=  \u4E3A =.
do
  read name                   # \u4ECE $Filename \u8BFB\u53D6\u503C, \u800C\u4E0D\u662F\u6807\u51C6\u8F93\u5165.
  echo $name
done &lt;&quot;$Filename&quot;             # \u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165\u5230\u6587\u4EF6 &quot;$Filename&quot;. 
#    ^^^^^^^^^^^^

# \u548C\u4E4B\u524D\u7684 &quot;while&quot; \u5FAA\u73AF\u6837\u4F8B\u76F8\u540C\u7684\u7ED3\u679C.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u6837\u4F8B 20-8. for \u5FAA\u73AF\u7684\u91CD\u5B9A\u5411</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
#!/bin/bash

if [ -z &quot;$1&quot; ]
then
  Filename=names.data          # \u5982\u679C\u4E0D\u6307\u5B9A\u6587\u4EF6\u7684\u9ED8\u8BA4\u503C.
else
  Filename=$1
fi  

line_count=\`wc $Filename | awk &#39;{ print $1 }&#39;\`
#           \u76EE\u6807\u6587\u4EF6\u7684\u884C\u6570.
#
#  \u975E\u5E38\u4F5C\u548C\u4E0D\u5B8C\u5584, \u7136\u800C\u8FD9\u53EA\u662F\u8BC1\u660E &quot;for&quot; \u5FAA\u73AF\u4E2D\u7684\u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165\u662F\u53EF\u884C\u7684
#+ \u5982\u679C\u4F60\u8DB3\u591F\u806A\u660E\u7684\u8BDD.
#
# \u7B80\u4ECB\u7684\u505A\u6CD5\u662F     line_count=$(wc -l &lt; &quot;$Filename&quot;)


for name in \`seq $line_count\`  # \u56DE\u5FC6\u4E0B &quot;seq&quot; \u53EF\u4EE5\u8F93\u5165\u6570\u7EC4\u5E8F\u5217.
# while [ &quot;$name&quot; != Smith ]   --   \u6BD4 &quot;while&quot; \u5FAA\u73AF\u66F4\u590D\u6742\u7684\u5FAA\u73AF   --
do
  read name                    # \u4ECE $Filename \u8BFB\u53D6\u503C, \u800C\u4E0D\u662F\u6807\u51C6\u8F93\u5165.
  echo $name
  if [ &quot;$name&quot; = Smith ]       # \u8FD9\u9700\u8981\u6240\u6709\u8FD9\u4E9B\u989D\u5916\u7684\u8BBE\u7F6E.
  then
    break
  fi  
done &lt;&quot;$Filename&quot;              # \u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165\u5230\u6587\u4EF6 &quot;$Filename&quot;. 
#    ^^^^^^^^^^^^

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u4FEE\u6539\u5148\u524D\u7684\u6837\u4F8B\u4E5F\u53EF\u4EE5\u91CD\u5B9A\u5411\u5FAA\u73AF\u7684\u8F93\u51FA.</p><p>\u6837\u4F8B 20-9. for \u5FAA\u73AF\u7684\u91CD\u5B9A\u5411 (\u540C\u65F6\u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165\u548C\u6807\u51C6\u8F93\u51FA)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

if [ -z &quot;$1&quot; ]
then
  Filename=names.data          # \u5982\u679C\u4E0D\u6307\u5B9A\u6587\u4EF6\u7684\u9ED8\u8BA4\u503C.
else
  Filename=$1
fi  

Savefile=$Filename.new         # \u62A5\u9519\u7684\u7ED3\u679C\u7684\u6587\u4EF6\u540D.
FinalName=Jonah                # \u505C\u6B62 &quot;read&quot; \u7684\u7EC8\u6B62\u5B57\u7B26.

line_count=\`wc $Filename | awk &#39;{ print $1 }&#39;\`  # \u76EE\u6807\u6587\u4EF6\u884C\u6570.


for name in \`seq $line_count\`
do
  read name
  echo &quot;$name&quot;
  if [ &quot;$name&quot; = &quot;$FinalName&quot; ]
  then
    break
  fi  
done &lt; &quot;$Filename&quot; &gt; &quot;$Savefile&quot;     # \u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165\u5230\u6587\u4EF6 $Filename,
#    ^^^^^^^^^^^^^^^^^^^^^^^^^^^       \u5E76\u4E14\u62A5\u9519\u7ED3\u679C\u5230\u5907\u4EFD\u6587\u4EF6.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u6837\u4F8B 20-10. if/then test\u7684\u91CD\u5B9A\u5411</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

if [ -z &quot;$1&quot; ]
then
  Filename=names.data   # \u5982\u679C\u4E0D\u6307\u5B9A\u6587\u4EF6\u7684\u9ED8\u8BA4\u503C.
else
  Filename=$1
fi  

TRUE=1

if [ &quot;$TRUE&quot; ]          # if true    \u548C   if :   \u90FD\u53EF\u4EE5\u5DE5\u4F5C.
then
 read name
 echo $name
fi &lt;&quot;$Filename&quot;
#  ^^^^^^^^^^^^

# \u53EA\u8BFB\u53D6\u6587\u4EF6\u7684\u9996\u884C.
# &quot;if/then&quot; test \u9664\u975E\u5D4C\u5165\u5728\u5FAA\u73AF\u5185\u90E8\u5426\u5219\u6CA1\u529E\u6CD5\u8FED\u4EE3.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u6837\u4F8B 20-11. \u4E0A\u8FF0\u6837\u4F8B\u7684\u6570\u636E\u6587\u4EF6 names.data</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
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

#+ \u8FD9\u662F &quot;redir2.sh&quot;, &quot;redir3.sh&quot;, &quot;redir4.sh&quot;, &quot;redir4a.sh&quot;, &quot;redir5.sh&quot; \u7684\u6570\u636E\u6587\u4EF6.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,15),L=n("\u4EE3\u7801\u5757\u7684\u6807\u51C6\u8F93\u51FA\u7684\u91CD\u5B9A\u5411\u5F71\u54CD\u4E86\u4FDD\u5B58\u5230\u6587\u4EF6\u7684\u8F93\u51FA. \u89C1\u6837\u4F8B "),O={href:"http://tldp.org/LDP/abs/html/special-chars.html#RPMCHECK",target:"_blank",rel:"noopener noreferrer"},P=n("\u6837\u4F8B 3-2"),N=n("."),R={href:"http://tldp.org/LDP/abs/html/here-docs.html#HEREDOCREF",target:"_blank",rel:"noopener noreferrer"},B=n("\u5D4C\u5165\u6587\u6863"),D=n(" \u662F\u79CD\u7279\u522B\u7684\u91CD\u5B9A\u5411\u4EE3\u7801\u5757\u7684\u65B9\u6CD5. \u65E2\u7136\u5982\u6B64,\u5B83\u4F7F\u5F97\u5728 while \u5FAA\u73AF\u7684\u6807\u51C6\u8F93\u5165\u91CC\u4F20\u5165\u5D4C\u5165\u6587\u6863\u7684\u8F93\u51FA\u53D8\u5F97\u53EF\u80FD."),H=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8FD9\u4E2A\u6837\u4F8B\u6765\u81EA Albert Siersema
# \u5F97\u5230\u4E86\u4F7F\u7528\u8BB8\u53EF (\u611F\u8C22!).

function doesOutput()
 # \u5F53\u7136\u8FD9\u4E5F\u662F\u4E2A\u5916\u90E8\u547D\u4EE4.
 # \u8FD9\u91CC\u7528\u51FD\u6570\u8FDB\u884C\u6F14\u793A\u4F1A\u66F4\u597D\u4E00\u70B9.
{
  ls -al *.jpg | awk &#39;{print $5,$9}&#39;
}


nr=0          #  \u6211\u4EEC\u5E0C\u671B\u5728 &#39;while&#39; \u5FAA\u73AF\u91CC\u53EF\u4EE5\u64CD\u4F5C\u8FD9\u4E9B
totalSize=0   #+ \u5E76\u4E14\u5728 &#39;while&#39; \u5FAA\u73AF\u7ED3\u675F\u65F6\u770B\u5230\u6539\u53D8.

while read fileSize fileName ; do
  echo &quot;$fileName is $fileSize bytes&quot;
  let nr++
  totalSize=$((totalSize+fileSize))   # Or: &quot;let totalSize+=fileSize&quot;
done&lt;&lt;EOF
$(doesOutput)
EOF

echo &quot;$nr files totaling $totalSize bytes&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,1);function T(A,C){const e=p("ExternalLinkIcon");return u(),b(i,null,[c,s("p",null,[m,s("a",o,[d,a(e)]),h,s("a",q,[_,a(e)]),$,s("a",f,[g,a(e)]),x,s("a",F,[v,a(e)]),w,s("a",S,[k,a(e)]),E]),z,s("p",null,[L,s("a",O,[P,a(e)]),N]),s("p",null,[s("a",R,[B,a(e)]),D]),H],64)}var V=r(t,[["render",T],["__file","20_2_redirecting_code_blocks.html.vue"]]);export{V as default};
