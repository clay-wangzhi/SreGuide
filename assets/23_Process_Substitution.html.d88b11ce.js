import{_ as r,r as p,c as b,a as s,b as e,F as i,d as n,e as l,o as t}from"./app.cb2299af.js";const c={},o=s("h1",{id:"\u7B2C\u4E8C\u5341\u4E09\u7AE0-\u8FDB\u7A0B\u66FF\u6362",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7B2C\u4E8C\u5341\u4E09\u7AE0-\u8FDB\u7A0B\u66FF\u6362","aria-hidden":"true"},"#"),n(" \u7B2C\u4E8C\u5341\u4E09\u7AE0. \u8FDB\u7A0B\u66FF\u6362")],-1),u=n("\u7528"),m={href:"http://tldp.org/LDP/abs/html/special-chars.html#PIPEREF",target:"_blank",rel:"noopener noreferrer"},d=n("\u7BA1\u9053"),h=n(" \u5C06\u4E00\u4E2A\u547D\u4EE4\u7684 "),_=s("code",null,"\u6807\u51C6\u8F93\u51FA",-1),g=n(" \u8F93\u9001\u5230\u53E6\u4E00\u4E2A\u547D\u4EE4\u7684 "),x=s("code",null,"\u6807\u51C6\u8F93\u5165",-1),v=n(" \u662F\u4E2A\u5F3A\u5927\u7684\u6280\u672F\u3002\u4F46\u662F\u5982\u679C\u4F60\u9700\u8981\u7528\u7BA1\u9053\u8F93\u9001\u591A\u4E2A\u547D\u4EE4\u7684 "),f=s("code",null,"\u6807\u51C6\u8F93\u51FA",-1),$=n(" \u600E\u4E48\u529E\uFF1F\u8FD9\u65F6\u5019 "),q=s("em",null,"\u8FDB\u7A0B\u66FF\u6362",-1),w=n(" \u5C31\u6D3E\u4E0A\u7528\u573A\u4E86\u3002"),z=s("em",null,"\u8FDB\u7A0B\u66FF\u6362",-1),y=n(" \u628A\u4E00\u4E2A\uFF08\u6216\u591A\u4E2A\uFF09"),P={href:"http://tldp.org/LDP/abs/html/special-chars.html#PROCESSREF",target:"_blank",rel:"noopener noreferrer"},k=n("\u8FDB\u7A0B"),S=n(" \u7684\u8F93\u51FA\u9001\u5230\u53E6\u4E00\u4E2A\u8FDB\u7A0B\u7684 "),D=s("code",null,"\u6807\u51C6\u8F93\u5165",-1),R=n("\u3002"),B=l(`<p><strong>\u6837\u677F</strong> \u547D\u4EE4\u5217\u8868\u8981\u7528\u62EC\u53F7\u62EC\u8D77\u6765</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt;(command_list)
&lt;(command_list)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FDB\u7A0B\u66FF\u6362\u4F7F\u7528 <code>/dev/fd/&lt;n&gt;</code> \u6587\u4EF6\u53D1\u9001\u62EC\u53F7\u5185\u8FDB\u7A0B\u7684\u7ED3\u679C\u5230\u53E6\u4E00\u4E2A\u8FDB\u7A0B\u3002[1]</p><p><img src="http://tldp.org/LDP/abs/images/caution.gif">&quot;&lt;&quot;\u6216&quot;&gt;&quot;\u4E0E\u62EC\u53F7\u4E4B\u95F4\u6CA1\u6709\u7A7A\u683C\uFF0C\u52A0\u4E0A\u7A7A\u683C\u6216\u62A5\u9519\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash$ echo &gt;(true)
/dev/fd/63

bash$ echo &lt;(true)
/dev/fd/63

bash$ echo &gt;(true) &lt;(true)
/dev/fd/63 /dev/fd/62

bash$ wc &lt;(cat /usr/share/dict/linux.words)
 483523  483523 4992010 /dev/fd/63

bash$ grep script /usr/share/dict/linux.words | wc
    262     262    3601

bash$ wc &lt;(grep script /usr/share/dict/linux.words)
    262     262    3601 /dev/fd/63
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,5),E=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif"},null,-1),A=n("Bash\u7528\u4E24\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26\u521B\u5EFA\u7BA1\u9053\uFF0C"),M=s("code",null,"--fIn \u548C fOut--",-1),F=n(" \u3002"),L={href:"http://tldp.org/LDP/abs/html/internal.html#TRUEREF",target:"_blank",rel:"noopener noreferrer"},T=n("true"),C=n(" \u7684"),N=s("code",null,"\u6807\u51C6\u8F93\u5165",-1),O=n("\u8FDE\u63A5 fOut(dup2(fOut, 0))\uFF0C\u7136\u540EBash \u4F20\u9012\u4E00\u4E2A "),U=s("code",null,"/dev/fd/fIn",-1),I=n(" \u53C2\u6570\u7ED9 "),G=s("strong",null,"echo",-1),V=n(" \u3002\u5728\u4E0D\u4F7F\u7528 "),H=s("code",null,"/dev/fd/<n>",-1),J=n(" \u7684\u7CFB\u7EDF\u91CC\uFF0CBash\u53EF\u4EE5\u7528\u4E34\u65F6\u6587\u4EF6\uFF08\u611F\u8C22 S.C. \u6307\u51FA\u8FD9\u70B9\uFF09\u3002"),Y=l(`<p>\u8FDB\u7A0B\u66FF\u6362\u53EF\u4EE5\u6BD4\u8F83\u4E24\u4E2A\u4E0D\u540C\u547D\u4EE4\u7684\u8F93\u51FA\uFF0C\u6216\u8005\u540C\u4E00\u4E2A\u547D\u4EE4\u4F7F\u7528\u4E0D\u540C\u9009\u9879\u7684\u8F93\u51FA\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash$ comm &lt;(ls -l) &lt;(ls -al)
total 12
-rw-rw-r--    1 bozo bozo       78 Mar 10 12:58 File0
-rw-rw-r--    1 bozo bozo       42 Mar 10 12:58 File2
-rw-rw-r--    1 bozo bozo      103 Mar 10 12:58 t2.sh
        total 20
        drwxrwxrwx    2 bozo bozo     4096 Mar 10 18:10 .
        drwx------   72 bozo bozo     4096 Mar 10 17:58 ..
        -rw-rw-r--    1 bozo bozo       78 Mar 10 12:58 File0
        -rw-rw-r--    1 bozo bozo       42 Mar 10 12:58 File2
        -rw-rw-r--    1 bozo bozo      103 Mar 10 12:58 t2.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FDB\u7A0B\u66FF\u6362\u53EF\u4EE5\u6BD4\u8F83\u4E24\u4E2A\u76EE\u5F55\u7684\u5185\u5BB9\u2014\u2014\u6765\u68C0\u67E5\u54EA\u4E9B\u6587\u4EF6\u5728\u8FD9\u4E2A\u76EE\u5F55\u800C\u4E0D\u5728\u90A3\u4E2A\u76EE\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>diff &lt;(ls $first_directory) &lt;(ls $second_directory)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FDB\u7A0B\u66FF\u6362\u7684\u4E00\u4E9B\u5176\u4ED6\u7528\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>read -a list &lt; &lt;( od -Ad -w24 -t u2 /dev/urandom )
#  \u4ECE /dev/urandom \u8BFB\u53D6\u4E00\u4E2A\u968F\u673A\u6570\u5217\u8868
#+ \u7528 &quot;od&quot; \u5904\u7406
#+ \u8F93\u9001\u5230 &quot;read&quot; \u7684\u6807\u51C6\u8F93\u5165. . .
#  \u6765\u81EA &quot;insertion-sort.bash&quot; \u793A\u4F8B\u811A\u672C\u3002
#  \u81F4\u8C22\uFF1AJuanJo Ciarlante\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PORT=6881   # bittorrent\uFF08BT\u7AEF\u53E3\uFF09

#  \u626B\u63CF\u7AEF\u53E3\uFF0C\u786E\u4FDD\u6CA1\u6709\u6076\u610F\u884C\u4E3A
netcat -l $PORT | tee&gt;(md5sum -&gt;mydata-orig.md5) |
gzip | tee&gt;(md5sum - | sed &#39;s/-$/mydata.lz2/&#39;&gt;mydata-gz.md5)&gt;mydata.gz

#  \u68C0\u67E5\u89E3\u538B\u7F29\u7ED3\u679C\uFF1A
  gzip -d&lt;mydata.gz | md5sum -c mydata-orig.md5)
#  \u5BF9\u539F\u4EF6\u7684MD5\u6821\u9A8C\u7528\u6765\u68C0\u67E5\u6807\u51C6\u8F93\u5165\uFF0C\u5E76\u4E14\u63A2\u6D4B\u538B\u7F29\u5F53\u4E2D\u51FA\u73B0\u7684\u95EE\u9898\u3002

#  Bill Davidsen \u8D21\u732E\u4E86\u8FD9\u4E2A\u4F8B\u5B50
#+ \uFF08ABS\u6307\u5357\u4F5C\u8005\u505A\u4E86\u8F7B\u5FAE\u4FEE\u6539\uFF09\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &lt;(ls -l)
# \u7B49\u4EF7\u4E8E	ls -l | cat

sort -k 9 &lt;(ls -l /bin) &lt;(ls -l /usr/bin) &lt;(ls -l /usr/X11R6/bin)
#  \u5217\u51FA 3 \u4E2A\u4E3B\u8981 &#39;bin&#39; \u76EE\u5F55\u7684\u6587\u4EF6\uFF0C\u6309\u7167\u6587\u4EF6\u540D\u6392\u5E8F\u3002
#  \u6CE8\u610F\uFF0C\u6709\u4E09\u4E2A\uFF08\u6570\u4E00\u4E0B\uFF09\u5355\u72EC\u7684\u547D\u4EE4\u8F93\u9001\u7ED9\u4E86 &#39;sort&#39;\u3002

diff &lt;(command1) &lt;(command2)    # \u6BD4\u8F83\u547D\u4EE4\u8F93\u51FA\u7ED3\u679C\u7684\u4E0D\u540C\u4E4B\u5904\u3002

tar cf &gt;(bzip2 -c &gt; file.tar.bz2) $directory_name

#  \u8C03\u7528 &quot;tar cf /dev/fd/?? $directory_name&quot;\uFF0C\u7136\u540E &quot;bzip2 -c &gt; file.tar.bz2&quot;\u3002
#
#  \u56E0\u4E3A /dev/fd/&lt;n&gt; \u7CFB\u7EDF\u7279\u6027
#  \u4E0D\u9700\u8981\u5728\u4E24\u4E2A\u547D\u4EE4\u4E4B\u95F4\u4F7F\u7528\u7BA1\u9053\u7B26
#
#  \u8FD9\u4E2A\u53EF\u4EE5\u6A21\u62DF
#
bzip2 -c &lt; pipe &gt; file.tar.bz2&amp;
tar cf pipe $directory_name
rm pipe
#	\u6216\u8005
exec 3&gt;&amp;1
tar cf /dev/fd/4 $directory_name 4&gt;&amp;1 &gt;&amp;3 3&gt;&amp;- | bzip2 -c &gt; file.tar.bz2 3&gt;&amp;-
exec 3&gt;&amp;-

# \u81F4\u8C22\uFF1ASt\xE9phane Chazelas
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,8),K=n("\u5728\u5B50shell\u4E2D "),X={href:"http://tldp.org/LDP/abs/html/gotchas.html#BADREAD0",target:"_blank",rel:"noopener noreferrer"},j=n("echo \u547D\u4EE4\u7528\u7BA1\u9053\u8F93\u9001\u7ED9 while-read \u5FAA\u73AF"),Q=n("\u65F6\u4F1A\u51FA\u73B0\u95EE\u9898\uFF0C\u4E0B\u9762\u662F\u907F\u514D\u7684\u65B9\u6CD5\uFF1A"),W=l(`<p><strong>\u4F8B23-1 \u4E0D\u7528 fork \u7684\u4EE3\u7801\u5757\u91CD\u5B9A\u5411\u3002</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

#  wr-ps.bash: \u4F7F\u7528\u8FDB\u7A0B\u66FF\u6362\u7684 while-read \u5FAA\u73AF\u3002

#  \u793A\u4F8B\u7531 Tomas Pospisek \u8D21\u732E\u3002
# \uFF08ABS\u6307\u5357\u4F5C\u8005\u505A\u4E86\u5927\u91CF\u6539\u52A8\u3002\uFF09

echo

echo &quot;random input&quot; | while read i
do
  global=3D&quot;: Not available outside the loop.&quot;
  # ... \u56E0\u4E3A\u5728\u5B50 shell \u4E2D\u8FD0\u884C\u3002
done

echo &quot;\\$global (\u4ECE\u5B50\u8FDB\u7A0B\u4E4B\u5916) = $global&quot;
# $global (\u4ECE\u5B50\u8FDB\u7A0B\u4E4B\u5916) =

echo; echo &quot;--&quot;; echo

while read i
do
  echo $i
  global=3D&quot;: Available outside the loop.&quot;
  # ... \u56E0\u4E3A\u6CA1\u6709\u5728\u5B50 shell \u4E2D\u8FD0\u884C\u3002
done &lt; &lt;( echo &quot;random input&quot; )
#    ^ ^

echo &quot;\\$global (\u4F7F\u7528\u8FDB\u7A0B\u66FF\u6362) = $global&quot;
#  \u968F\u673A\u8F93\u5165
#  $global (\u4F7F\u7528\u8FDB\u7A0B\u66FF\u6362)= 3D: Available outside the loop.


echo; echo &quot;##########&quot;; echo



# \u540C\u6837\u9053\u7406 . . .

declare -a inloop
index=0
cat $0 | while read line
do
  inloop[$index]=&quot;$line&quot;
  ((index++))
  # \u5728\u5B50 shell \u4E2D\u8FD0\u884C\uFF0C\u6240\u4EE5 ...
done
echo &quot;OUTPUT = &quot;
echo \${inloop[*]}           # ... \u4EC0\u4E48\u4E5F\u6CA1\u6709\u663E\u793A\u3002


echo; echo &quot;--&quot;; echo


declare -a outloop
index=0
while read line
do
  outloop[$index]=&quot;$line&quot;
  ((index++))
  # \u6CA1\u6709\u5728\u5B50 shell \u4E2D\u8FD0\u884C\uFF0C\u6240\u4EE5 ...
done &lt; &lt;( cat $0 )
echo &quot;OUTPUT = &quot;
echo \${outloop[*]}          # ... \u6574\u4E2A\u811A\u672C\u7684\u7ED3\u679C\u663E\u793A\u51FA\u6765\u3002

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>\u4E0B\u9762\u662F\u4E2A\u7C7B\u4F3C\u7684\u4F8B\u5B50\u3002</p><p><strong>\u4F8B 23-2. \u91CD\u5B9A\u5411\u8FDB\u7A0B\u66FF\u6362\u7684\u8F93\u51FA\u5230\u4E00\u4E2A\u5FAA\u73AF\u5185</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# psub.bash
#  \u53D7 Diego Molina \u542F\u53D1\uFF08\u611F\u8C22\uFF01\uFF09\u3002

declare -a array0
while read
do
  array0[\${#array0[@]}]=&quot;$REPLY&quot;
done &lt; &lt;( sed -e &#39;s/bash/CRASH-BANG!/&#39; $0 | grep bin | awk &#39;{print $1}&#39; )
#  \u7531\u8FDB\u7A0B\u66FF\u6362\u6765\u8BBE\u7F6E&#39;read&#39;\u9ED8\u8BA4\u53D8\u91CF\uFF08$REPLY\uFF09\u3002
#+ \u7136\u540E\u5C06\u53D8\u91CF\u590D\u5236\u5230\u4E00\u4E2A\u6570\u7EC4\u3002

echo &quot;\${array0[@]}&quot;

exit $?

# ====================================== #
# \u8FD0\u884C\u7ED3\u679C\uFF1A
bash psub.bash

#!/bin/CRASH-BANG! done #!/bin/CRASH-BANG!
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u4E00\u4E2A\u8BFB\u8005\u53D1\u6765\u4E00\u4E2A\u6709\u8DA3\u7684\u8FDB\u7A0B\u66FF\u6362\u4F8B\u5B50\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># SuSE \u53D1\u884C\u7248\u4E2D\u63D0\u53D6\u7684\u811A\u672C\u7247\u6BB5\uFF1A

# --------------------------------------------------------------#
while read  des what mask iface; do
# \u4E00\u4E9B\u547D\u4EE4 ...
done &lt; &lt;(route -n)  
#    ^ ^  \u7B2C\u4E00\u4E2A &lt; \u662F\u91CD\u5B9A\u5411\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u8FDB\u7A0B\u66FF\u6362\u3002

#  \u4E3A\u4E86\u6D4B\u8BD5\uFF0C\u6211\u4EEC\u8BA9\u5B83\u6765\u505A\u70B9\u513F\u4E8B\u60C5\u3002
while read  des what mask iface; do
  echo $des $what $mask $iface
done &lt; &lt;(route -n)  

# \u8F93\u51FA\u5185\u5BB9:
# Kernel IP routing table
# Destination Gateway Genmask Flags Metric Ref Use Iface
# 127.0.0.0 0.0.0.0 255.0.0.0 U 0 0 0 lo
# --------------------------------------------------------------#

#  \u6B63\u5982 St\xE9phane Chazelas \u6307\u51FA\u7684,
#+ \u4E00\u4E2A\u66F4\u5BB9\u6613\u7406\u89E3\u7684\u7B49\u4EF7\u4EE3\u7801\u5982\u4E0B\uFF1A
route -n |
  while read des what mask iface; do   # \u901A\u8FC7\u7BA1\u9053\u8F93\u51FA\u8BBE\u7F6E\u7684\u53D8\u91CF
    echo $des $what $mask $iface
  done  #  \u8FD9\u6BB5\u4EE3\u7801\u7684\u7ED3\u679C\u66F4\u4E0A\u9762\u7684\u76F8\u540C\u3002
        #  \u4F46\u662F\uFF0CUlrich Gayer \u6307\u51FA . . .
        #+ \u8FD9\u6BB5\u7B80\u5316\u7248\u7B49\u4EF7\u4EE3\u7801\u5728 while \u5FAA\u73AF\u91CC\u7528\u4E86\u5B50 shell\uFF0C
        #+ \u56E0\u6B64\u5F53\u7BA1\u9053\u7EC8\u6B62\u65F6\u53D8\u91CF\u90FD\u6D88\u5931\u4E86\u3002

# --------------------------------------------------------------#

#  \u7136\u800C\uFF0CFilip Moritz \u8BF4\u4E0A\u9762\u7684\u4E24\u4E2A\u4F8B\u5B50\u6709\u4E00\u4E2A\u5FAE\u5999\u7684\u533A\u522B\uFF0C
#+ \u89C1\u4E0B\u9762\u7684\u4EE3\u7801

(
route -n | while read x; do ((y++)); done
echo $y # $y is still unset

while read x; do ((y++)); done &lt; &lt;(route -n)
echo $y # $y has the number of lines of output of route -n
)

#  \u66F4\u901A\u4FD7\u5730\u8BF4\uFF08\u8BD1\u8005\u6CE8\uFF1A\u539F\u6587\u672C\u884C\u5C11\u4E86\u6CE8\u91CA\u7B26\uFF09
(
: | x=x
# \u4F3C\u4E4E\u542F\u52A8\u4E86\u5B50 shell \uFF0C\u5C31\u50CF
: | ( x=x )
# \u800C
x=x &lt; &lt;(:)
# \u5E76\u6CA1\u6709\u3002
)
#  \u8FD9\u4E2A\u65B9\u6CD5\u5728\u89E3\u6790 csv \u548C\u7C7B\u4F3C\u683C\u5F0F\u65F6\u5F88\u6709\u7528\u3002
#  \u4E5F\u5C31\u662F\u5728\u6548\u679C\u4E0A\uFF0C\u539F\u59CB SuSE \u7CFB\u7EDF\u7684\u4EE3\u7801\u7247\u6BB5\u5C31\u662F\u505A\u8FD9\u4E2A\u7528\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>\u6CE8\u89E3 [1] \u8FD9\u4E2A\u4E0E\u547D\u540D\u7BA1\u9053\uFF08\u4F7F\u7528\u4E34\u65F6\u6587\u4EF6\uFF09\u7684\u6548\u679C\u76F8\u540C\uFF0C\u800C\u4E14\u4E8B\u5B9E\u4E0A\uFF0C\u8FDB\u7A0B\u66FF\u6362\u4E5F\u66FE\u7ECF\u7528\u8FC7\u547D\u540D\u7BA1\u9053\u3002</p>`,8);function Z(nn,sn){const a=p("ExternalLinkIcon");return t(),b(i,null,[o,s("p",null,[u,s("a",m,[d,e(a)]),h,_,g,x,v,f,$,q,w]),s("p",null,[z,y,s("a",P,[k,e(a)]),S,D,R]),B,s("p",null,[E,A,M,F,s("a",L,[T,e(a)]),C,N,O,U,I,G,V,H,J]),Y,s("p",null,[K,s("a",X,[j,e(a)]),Q]),W],64)}var en=r(c,[["render",Z],["__file","23_Process_Substitution.html.vue"]]);export{en as default};
