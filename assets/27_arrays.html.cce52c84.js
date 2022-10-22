import{_ as i,r as b,c as u,a as n,b as a,w as p,F as c,e as r,d as s,o as t}from"./app.cb2299af.js";const m={},o=r(`<h1 id="_27-\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_27-\u6570\u7EC4" aria-hidden="true">#</a> 27 \u6570\u7EC4</h1><p>\u65B0\u7248\u672C\u7684Bash\u652F\u6301\u4E00\u7EF4\u6570\u7EC4\u3002 \u6570\u7EC4\u5143\u7D20\u53EF\u4EE5\u4F7F\u7528\u7B26\u53F7<strong>variable[xx]</strong> \u6765\u521D\u59CB\u5316\u3002\u53E6\u5916\uFF0C\u811A\u672C\u53EF\u4EE5\u4F7F\u7528<strong>declare -a variable</strong>\u8BED\u53E5\u6765\u5236\u5B9A\u4E00\u4E2A\u6570\u7EC4\u3002 \u5982\u679C\u60F3\u5F15\u7528\u4E00\u4E2A\u6570\u7EC4\u5143\u7D20\uFF08\u4E5F\u5C31\u662F\u53D6\u503C\uFF09\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5927\u62EC\u53F7\uFF0C\u8BBF\u95EE\u5F62\u5F0F\u4E3A \${element[xx]} \u3002</p><p>\u4F8B\u5B50 27-1. \u7B80\u5355\u7684\u6570\u7EC4\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

area[11]=23
area[13]=37
area[51]=UFOs

#  \u6570\u7EC4\u6210\u5458\u4E0D\u4E00\u5B9A\u975E\u5F97\u662F\u76F8\u90BB\u6216\u8FDE\u7EED\u7684\u3002

#  \u6570\u7EC4\u7684\u90E8\u5206\u6210\u5458\u53EF\u4EE5\u4E0D\u88AB\u521D\u59CB\u5316\u3002
#  \u6570\u7EC4\u4E2D\u5141\u8BB8\u7A7A\u7F3A\u5143\u7D20\u3002
#  \u5B9E\u9645\u4E0A\uFF0C\u4FDD\u5B58\u7740\u7A00\u758F\u6570\u636E\u7684\u6570\u7EC4\uFF08\u201C\u7A00\u758F\u6570\u7EC4\u201D\uFF09 
#+ \u5728\u7535\u5B50\u8868\u683C\u5904\u7406\u8F6F\u4EF6\u4E2D\u662F\u975E\u5E38\u6709\u7528\u7684\u3002

echo -n &quot;area[11] = &quot;
echo \${area[11]}    #  \u9700\u8981{\u5927\u62EC\u53F7}\u3002

echo -n &quot;area[13] = &quot;
echo \${area[13]}

echo &quot;Contents of area[51] are \${area[51]}.&quot;

# \u6CA1\u88AB\u521D\u59CB\u5316\u7684\u6570\u7EC4\u6210\u5458\u6253\u5370\u4E3A\u7A7A\u503C\uFF08null\u53D8\u91CF\uFF09\u3002
echo -n &quot;area[43] = &quot;
echo \${area[43]}
echo &quot;(area[43] unassigned)&quot;

echo

# \u4E24\u4E2A\u6570\u7EC4\u5143\u7D20\u7684\u548C\u88AB\u8D4B\u503C\u7ED9\u53E6\u4E00\u4E2A\u6570\u7EC4\u5143\u7D20\u3002
area[5]=\`expr \${area[11]} + \${area[13]}\`
echo &quot;area[5] = area[11] + area[13]&quot;
echo -n &quot;area[5] = &quot;
echo \${area[5]}

area[6]=\`expr \${area[11]} + \${area[51]}\`
echo &quot;area[6] = area[11] + area[51]&quot;
echo -n &quot;area[6] = &quot;
echo \${area[6]}
# \u8FD9\u91CC\u4F1A\u5931\u8D25\uFF0C\u662F\u56E0\u4E3A\u4E0D\u5141\u8BB8\u6574\u6570\u4E0E\u5B57\u7B26\u4E32\u76F8\u52A0\u3002

echo; echo; echo

# -----------------------------------------------------------------
# \u53E6\u4E00\u4E2A\u6570\u7EC4, &quot;area2&quot;.

# \u53E6\u4E00\u79CD\u7ED9\u6570\u7EC4\u53D8\u91CF\u8D4B\u503C\u7684\u65B9\u6CD5...
# array_name=( XXX YYY ZZZ ... )

area2=( zero one two three four )

echo -n &quot;area2[0] = &quot;
echo \${area2[0]}
# \u554A\u54C8\uFF0C\u4ECE0\u5F00\u59CB\u8BA1\u7B97\u6570\u7EC4\u4E0B\u6807\uFF08\u4E5F\u5C31\u662F\uFF0C\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A[0],\u800C\u4E0D\u662F[1]).

echo -n &quot;area2[1] = &quot;
echo \${area2[1]}    # [1] \u662F\u6570\u7EC4\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\u3002
# -----------------------------------------------------------------

echo; echo; echo

# -----------------------------------------------
# \u7B2C\u4E09\u4E2A\u6570\u7EC4\uFF0C &quot;area3&quot;.
# \u53E6\u5916\u4E00\u79CD\u7ED9\u6570\u7EC4\u5143\u7D20\u8D4B\u503C\u7684\u65B9\u6CD5...
# array_name=([xx]=XXX [yy]=YYY ...)

area3=([17]=seventeen [24]=twenty-four)

echo -n &quot;area3[17] = &quot;
echo \${area3[17]}

echo -n &quot;area3[24] = &quot;
echo \${area3[24]}
# -----------------------------------------------

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0C\u521D\u59CB\u5316\u6574\u6570\u7684\u4E00\u4E2A\u7B80\u5355\u7684\u65B9\u6CD5\u662F array=( element1 element2 ... elementN ) \u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>base64_charset=( {A..Z} {a..z} {0..9} + / = )
#  \u4F7F\u7528\u6269\u5C55\u7684\u4E00\u5BF9\u8303\u56F4 Using extended brace expansion
#+ \u53BB\u521D\u59CB\u5316\u6570\u7EC4\u7684\u5143\u7D20\u3002to initialize the elements of the array.
# \u4ECE vladz&#39;s &quot;base64.sh&quot; \u811A\u672C\u4E2D\u6458\u5F55\u8FC7\u6765\u3002
#+ \u5728&quot;Contributed Scripts&quot; \u9644\u5F55\u4E2D\u53EF\u4EE5\u770B\u5230.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Bash\u5141\u8BB8\u628A\u53D8\u91CF\u5F53\u6210\u6570\u636E\u6765\u64CD\u4F5C\uFF0C\u5373\u4F7F\u8FD9\u4E2A\u53D8\u91CF\u6CA1\u6709\u660E\u786E\u5730\u88AB\u58F0\u660E\u4E3A\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>string=abcABC123ABCabc
echo \${string[@]}   # abcABC123ABCabc
echo \${string[*]}   # abcABC123ABCabc
echo \${string[0]}   # abcABC123ABCabc
echo \${string[1]}   # \u6CA1\u6709\u8F93\u51FA\uFF01
                    # \u4E3A\u4EC0\u4E48?
echo \${#string[@]}  # 1
                    # \u6570\u7EC4\u4E2D\u53EA\u6709\u4E00\u4E2A\u5143\u7D20\u3002
                    # \u5C31\u662F\u8FD9\u4E2A\u5B57\u7B26\u4E32\u672C\u8EAB\u3002

# \u611F\u8C22\u4F60, Michael Zick, \u6307\u51FA\u8FD9\u4E00\u70B9.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,8),h=s("\u7C7B\u4F3C\u7684\u793A\u8303\u53EF\u4EE5\u53C2\u8003 "),d=s("Bash\u53D8\u91CF\u662F\u65E0\u7C7B\u578B\u7684"),q=s(" \u3002"),$=r(`<p>\u4F8B\u5B50 27-2. \u683C\u5F0F\u5316\u4E00\u9996\u8BD7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# poem.sh: \u5C06\u672C\u4E66\u4F5C\u8005\u975E\u5E38\u559C\u6B22\u7684\u4E00\u9996\u8BD7\uFF0C\u6F02\u4EAE\u7684\u6253\u5370\u51FA\u6765\u3002

# \u8BD7\u7684\u884C\u6570 (\u5355\u8282).
Line[1]=&quot;I do not know which to prefer,&quot;
Line[2]=&quot;The beauty of inflections&quot;
Line[3]=&quot;Or the beauty of innuendoes,&quot;
Line[4]=&quot;The blackbird whistling&quot;
Line[5]=&quot;Or just after.&quot;
# \u6CE8\u610F \u5F15\u7528\u5141\u8BB8\u5D4C\u5165\u7684\u7A7A\u683C\u3002

# \u51FA\u5904.
Attrib[1]=&quot; Wallace Stevens&quot;
Attrib[2]=&quot;\\&quot;Thirteen Ways of Looking at a Blackbird\\&quot;&quot;
# \u8FD9\u9996\u8BD7\u5DF2\u7ECF\u662F\u516C\u5171\u7248\u6743\u4E86 (\u7248\u6743\u5DF2\u7ECF\u8FC7\u671F\u4E86).

echo

tput bold   # \u7C97\u4F53\u6253\u5370.

for index in 1 2 3 4 5    # 5\u884C.
do
    printf &quot;     %s\\n&quot; &quot;\${Line[index]}&quot;
done

for index in 1 2          # \u51FA\u5904\u4E3A2\u884C\u3002
do
    printf &quot;        %s\\n&quot; &quot;\${Attrib[index]}&quot;
done

tput sgr0       # \u91CD\u7F6E\u7EC8\u7AEF\u3002Reset terminal.
                # \u67E5\u770B &#39;tput&#39; \u6587\u6863.
echo

exit 0

# \u7EC3\u4E60:
# --------
# \u4FEE\u6539\u8FD9\u4E2A\u811A\u672C\uFF0C\u4F7F\u5176\u80FD\u591F\u4ECE\u4E00\u4E2A\u6587\u672C\u6570\u636E\u6587\u4EF6\u4E2D\u63D0\u53D6\u51FA\u4E00\u9996\u8BD7\u7684\u5185\u5BB9\uFF0C\u7136\u540E\u5C06\u5176\u6F02\u4EAE\u7684\u6253\u5370\u51FA\u6765\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>\u6570\u7EC4\u5143\u7D20\u6709\u5B83\u4EEC\u72EC\u7279\u7684\u8BED\u6CD5\uFF0C\u751A\u81F3\u6807\u51C6Bash\u547D\u4EE4\u548C\u64CD\u4F5C\u7B26\uFF0C\u90FD\u6709\u7279\u6B8A\u7684\u9009\u9879\u7528\u4EE5\u914D\u5408\u6570\u7EC4\u64CD\u4F5C\u3002</p><p>\u4F8B\u5B50 27-3. \u591A\u79CD\u6570\u7EC4\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# array-ops.sh: \u66F4\u591A\u6709\u8DA3\u7684\u6570\u7EC4\u7528\u6CD5.

array=( zero one two three four five )
# \u6570\u7EC4\u5143\u7D20 0   1   2    3     4    5

echo \${array[0]}        #  0
echo \${array:0}         #  0
                        #  \u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u53C2\u6570\u6269\u5C55,
                        #+ \u4ECE\u4F4D\u7F6E0(#0)\u5F00\u59CB\uFF08\u5373\u7B2C\u4E00\u4E2A\u5B57\u7B26\uFF09.
echo \${array:1}         #  ero
                        #  \u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u53C2\u6570\u6269\u624E\uFF0C
                        #+ \u4ECE\u4F4D\u7F6E1\uFF08#1\uFF09\u5F00\u59CB\uFF08\u5373\u7B2C\u4E8C\u4E2A\u5B57\u7B26\uFF09\u3002

echo &quot;--------------&quot;

echo \${#array[0]}       #  4
                        # \u7B2C\u4E00\u4E2A\u6570\u7EC4\u5143\u7D20\u7684\u957F\u5EA6\u3002
echo \${#array}          #4
                        # \u7B2C\u4E00\u4E2A\u6570\u7EC4\u5143\u7D20\u7684\u957F\u5EA6\u3002
                        #  (\u53E6\u4E00\u79CD\u8868\u793A\u5F62\u5F0F)

echo \${#array[1]}       # 3
                        # \u7B2C\u4E8C\u4E2A\u6570\u7EC4\u5143\u7D20\u7684\u957F\u5EA6\u3002
                        #  Bash\u4E2D\u7684\u6570\u7EC4\u662F\u4ECE0\u5F00\u59CB\u7D22\u5F15\u7684\u3002

echo \${#array[*]}       # 6
                        # \u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u4E2A\u6570\u3002
echo \${#array[@]}       # 6
                        # \u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u4E2A\u6570.
echo &quot;--------------&quot;

array2=( [0]=&quot;first element&quot; [1]=&quot;second element&quot; [3]=&quot;fourth element&quot; )
#            ^     ^       ^     ^      ^       ^     ^      ^       ^
# \u5F15\u7528\u5141\u8BB8\u5D4C\u5165\u7684\u7A7A\u683C,\u5728\u6BCF\u4E2A\u5355\u72EC\u7684\u6570\u7EC4\u5143\u7D20\u4E2D\u3002

echo \${array2[0]}       # \u7B2C\u4E00\u4E2A\u5143\u7D20
echo \${array2[1]}       # \u7B2C\u4E8C\u4E2A\u5143\u7D20
echo \${array2[2]}       #
                        # \u56E0\u4E3A\u5E76\u6CA1\u6709\u88AB\u521D\u59CB\u5316\uFF0C\u6240\u4EE5\u6B64\u503C\u4E3Anull\u3002
echo \${array2[3]}       # \u7B2C\u56DB\u4E2A\u5143\u7D20.
echo \${#array2[0]}      # 13    (\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u957F\u5EA6)
echo \${#array2[*]}      # 3     (\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u4E2A\u6570)

exit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,5),y=s("\u5927\u90E8\u5206\u6807\u51C6"),g=s("\u5B57\u7B26\u4E32\u64CD\u4F5C"),_=s(" \u90FD\u53EF\u4EE5\u7528\u4E8E\u6570\u7EC4\u4E2D\u3002"),f=r(`<p>\u4F8B\u5B5027-4. \u7528\u4E8E\u6570\u7EC4\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# array-strops.sh: \u7528\u4E8E\u6570\u7EC4\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C\u3002

# \u672C\u811A\u672C\u7531Michael Zick \u6240\u7F16\u5199.
# \u901A\u8FC7\u4E86\u6388\u6743\u5728\u672C\u4E66\u4E2D\u4F7F\u7528\u3002
# \u4FEE\u590D: 05 May 08, 04 Aug 08.

#  \u4E00\u822C\u6765\u8BF4\uFF0C\u4EFB\u4F55\u7C7B\u4F3C\u4E8E \${name ... }(\u8FD9\u79CD\u5F62\u5F0F)\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C
#+ \u90FD\u80FD\u591F\u5E94\u7528\u4E8E\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u4E32\u5143\u7D20\uFF0C
#+ \u6BD4\u5982\u8BF4\${name[@] ... } \u6216\u8005 \${name[*] ...} \u8FD9\u4E24\u79CD\u5F62\u5F0F\u3002 

arrayZ=( one two three four five five )

echo

# \u63D0\u53D6\u5C3E\u90E8\u7684\u5B50\u4E32\u3002
echo \${arrayZ[@]:0}     # one two three four five five
#                ^       \u6240\u6709\u5143\u7D20 

echo \${arrayZ[@]:1} 	# two three four five five
#                ^		element[0]\u540E\u8FB9\u7684\u6240\u6709\u5143\u7D20.

echo \${arrayZ[@]:1:2} 	# two three
#                  ^	\u53EA\u63D0\u53D6element[0]\u540E\u8FB9\u7684\u4E24\u4E2A\u5143\u7D20.

echo &quot;---------&quot;


# \u5B50\u4E32\u5220\u9664 

# \u4ECE\u5B57\u7B26\u4E32\u7684\u5F00\u5934\u5220\u9664\u6700\u77ED\u7684\u5339\u914D\u3002

echo \${arrayZ[@]#f*r}   # one two three five five
#               ^       # \u5339\u914D\u5C06\u5E94\u7528\u4E8E\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20\u3002 
                        # \u5339\u914D\u5230\u4E86&quot;four&quot;,\u5E76\u4E14\u5C06\u5B83\u5220\u9664\u3002 

# \u4ECE\u5B57\u7B26\u4E32\u7684\u5F00\u5934\u5220\u9664\u6700\u957F\u7684\u5339\u914D
echo \${arrayZ[@]##t*e}  # one two four five five
#               ^^      # \u5339\u914D\u5C06\u5E94\u7528\u4E8E\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20
                        # \u5339\u914D\u5230\u4E86 &quot;three&quot; ,\u5E76\u4E14\u5C06\u5B83\u5220\u9664\u3002

# \u4ECE\u5B57\u7B26\u4E32\u7684\u7ED3\u5C3E\u5220\u9664\u6700\u77ED\u7684\u5339\u914D
echo \${arrayZ[@]%h*e}   # one two t four five five
#               ^       # \u5339\u914D\u5C06\u5E94\u7528\u4E8E\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20
                        # \u5339\u914D\u5230\u4E86 &quot;hree&quot; ,\u5E76\u4E14\u5C06\u5B83\u5220\u9664\u3002
					
# \u4ECE\u5B57\u7B26\u4E32\u7684\u7ED3\u5C3E\u5220\u9664\u6700\u957F\u7684\u5339\u914D
echo \${arrayZ[@]%%t*e}  # one two four five five
#               ^^      # \u5339\u914D\u5C06\u5E94\u7528\u4E8E\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20
                        # \u5339\u914D\u5230\u4E86 &quot;three&quot; ,\u5E76\u4E14\u5C06\u5B83\u5220\u9664\u3002
						
echo &quot;----------------------&quot;

# \u5B50\u4E32\u66FF\u6362

# \u7B2C\u4E00\u4E2A\u5339\u914D\u5230\u7684\u5B50\u4E32\u5C06\u4F1A\u88AB\u66FF\u6362\u3002
echo \${arrayZ[@]/fiv/XYZ}   # one two three four XYZe XYZe
#               ^           # \u5339\u914D\u5C06\u5E94\u7528\u4E8E\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20

# \u6240\u6709\u5339\u914D\u5230\u7684\u5B50\u4E32\u5C06\u4F1A\u88AB\u66FF\u6362\u3002
echo \${arrayZ[@]//iv/YY}    # one two three four fYYe fYYe
                            # \u5339\u914D\u5C06\u5E94\u7528\u4E8E\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20

# \u5220\u9664\u6240\u6709\u7684\u5339\u914D\u5B50\u4E32
# \u5982\u679C\u6CA1\u6709\u6307\u5B9A\u66FF\u6362\u5B57\u7B26\u4E32\u7684\u8BDD\uFF0C\u90A3\u5C31\u610F\u5473\u7740&#39;\u5220\u9664&#39;...
echo \${arrayZ[@]//fi/}      # one two three four ve ve
#               ^^          # \u5339\u914D\u5C06\u5E94\u7528\u4E8E\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20

# \u66FF\u6362\u5B57\u7B26\u4E32\u524D\u7AEF\u5B50\u4E32
echo \${arrayZ[@]/#fi/XY}    # one two three four XYve XYve
#                ^          # \u5339\u914D\u5C06\u5E94\u7528\u4E8E\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20

# \u66FF\u6362\u5B57\u7B26\u4E32\u540E\u7AEF\u5B50\u4E32
echo \${arrayZ[@]/%ve/ZZ}	# one two three four fiZZ fiZZ
#                ^			# \u5339\u914D\u5C06\u5E94\u7528\u4E8E\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20

echo \${arrayZ[@]/%o/XX}		# one twXX three four five five
#                ^			# \u4E3A\u4EC0\u4E48?

echo &quot;-----------------------------&quot;

replacement() {
    echo -n &quot;!!!&quot;
}

echo \${arrayZ[@]/%e/$(replacement)}
#                ^  ^^^^^^^^^^^^^^
# on!!! two thre!!! four fiv!!! fiv!!!
# replacement()\u7684\u6807\u51C6\u8F93\u51FA\u5C31\u662F\u90A3\u4E2A\u66FF\u4EE3\u5B57\u7B26\u4E32.
# Q.E.D: \u66FF\u6362\u52A8\u4F5C\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u2018\u8D4B\u503C\u2019\u3002

echo &quot;------------------------------------&quot;

#  \u4F7F\u7528&quot;for-each&quot;\u4E4B\u524D:
echo \${arrayZ[@]//*/$(replacement optional_arguments)}
#                ^^ ^^^^^^^^^^^^^
# !!! !!! !!! !!! !!! !!!

#  \u73B0\u5728\uFF0C\u5982\u679CBash\u53EA\u5C06\u5339\u914D\u5230\u7684\u5B57\u7B26\u4E32
#+ \u4F20\u9012\u7ED9\u88AB\u8C03\u7528\u7684\u51FD\u6570...

echo

exit 0

#  \u5728\u5C06\u5904\u7406\u540E\u7684\u7ED3\u679C\u53D1\u9001\u5230\u5927\u5DE5\u5177\u4E4B\u524D\uFF0C\u6BD4\u5982-- Perl, Python, \u6216\u8005\u5176\u5B83\u5DE5\u5177
#  \u56DE\u5FC6\u4E00\u4E0B:
#    $( ... ) \u662F\u547D\u4EE4\u66FF\u6362\u3002
#    \u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u5B50\u8FDB\u7A0B\u8FD0\u884C\u3002
#    \u4E00\u4E2A\u51FD\u6570\u5C06\u7ED3\u679C\u8F93\u51FA\u5230stdout\u3002
#    \u8D4B\u503C\uFF0C\u7ED3\u5408&quot;echo&quot;\u548C\u547D\u4EE4\u66FF\u6362\uFF0C
#+   \u53EF\u4EE5\u8BFB\u53D6\u51FD\u6570\u7684stdout.
#    \u4F7F\u7528name[@]\u8868\u793A\u6CD5\u6307\u5B9A\u4E86\u4E00\u4E2A &quot;for-each&quot;
#+   \u64CD\u4F5C\u3002
#  Bash\u6BD4\u4F60\u60F3\u8C61\u7684\u66F4\u52A0\u5F3A\u529B.

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br></div></div>`,2),x=s("\u547D\u4EE4\u66FF\u6362"),v=s(" \u53EF\u4EE5\u6784\u9020\u6570\u7EC4\u7684\u72EC\u7ACB\u5143\u7D20\u3002"),A=r(`<p>\u4F8B\u5B50 27-5. \u5C06\u811A\u672C\u4E2D\u7684\u5185\u5BB9\u8D4B\u503C\u7ED9\u6570\u7EC4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# script-array.sh: \u5C06\u811A\u672C\u4E2D\u7684\u5185\u5BB9\u8D4B\u503C\u7ED9\u6570\u7EC4\u3002 
# \u8FD9\u4E2A\u811A\u672C\u7684\u7075\u611F\u6765\u81EA\u4E8E Chris Martii \u7684\u90AE\u4EF6 (\u611F\u8C22!).

script_contents=( $(cat &quot;$0&quot;) )  # \u5C06\u8FD9\u4E2A\u811A\u672C\u7684\u5185\u5BB9($0\uFF09 
                                 #+ \u8D4B\u503C\u7ED9\u6570\u7EC4
for element in $(seq 0 $((\${#script_contents[@]} - 1)))
  do                #  \${#script_contents[@]}
                    #+ \u8868\u793A\u6570\u7EC4\u5143\u7D20\u7684\u4E2A\u6570
                    #
                    #  \u95EE\u9898:
                    #  \u4E3A\u4EC0\u4E48\u5FC5\u987B\u4F7F\u7528seq 0 ?
                    #  \u7528seq 1\u6765\u8BD5\u4E00\u4E0B.
  echo -n &quot;\${script_contents[$element]}&quot;
                    # \u5728\u540C\u4E00\u884C\u4E0A\u663E\u793A\u811A\u672C\u4E2D\u6BCF\u4E2A\u57DF\u7684\u5185\u5BB9\u3002
# echo -n &quot;\${script_contents[element]}&quot; also works because of \${ ... }.
  echo -n &quot; -- &quot;    # \u4F7F\u7528 &quot; -- &quot; \u4F5C\u4E3A\u57DF\u5206\u9694\u7B26\u3002
done
echo

exit 0
# \u7EC3\u4E60:
# --------
#  \u4FEE\u6539\u8FD9\u4E2A\u811A\u672C\uFF0C
#+ \u8BA9\u8FD9\u4E2A\u811A\u672C\u80FD\u591F\u6309\u7167\u5B83\u539F\u672C\u7684\u683C\u5F0F\u8F93\u51FA\uFF0C
#+ \u8FDE\u540C\u7A7A\u683C\uFF0C\u6362\u884C\uFF0C\u7B49\u7B49\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,2),P=s("\u5728\u6570\u7EC4\u73AF\u5883\u4E2D\uFF0C\u67D0\u4E9BBash "),w=s("\u5185\u5EFA\u547D\u4EE4"),R=s(" \u7684\u542B\u4E49\u53EF\u80FD\u4F1A\u6709\u4E9B\u8F7B\u5FAE\u7684\u6539\u53D8\u3002\u6BD4\u5982\uFF0C"),I={href:"http://tldp.org/LDP/abs/html/internal.html#UNSETREF",target:"_blank",rel:"noopener noreferrer"},T=s("unset"),E=s(" \u547D\u4EE4\u53EF\u4EE5\u5220\u9664\u6570\u7EC4\u5143\u7D20\uFF0C\u751A\u81F3\u80FD\u591F\u5220\u9664\u6574\u4E2A\u6570\u7EC4\u3002"),L=r(`<p>\u4F8B\u5B50 27-6. \u4E00\u4E9B\u6570\u7EC4\u7684\u4E13\u6709\u7279\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

declare -a colors
#  \u811A\u672C\u4E2D\u6240\u6709\u7684\u540E\u7EED\u547D\u4EE4\u90FD\u4F1A\u628A
#+ &quot;colors&quot; \u5F53\u505A\u6570\u7EC4 

echo &quot;Enter your favorite colors (separated from each other by a space).&quot;

read -a colors    # \u81F3\u5C11\u9700\u8981\u952E\u51653\u79CD\u989C\u8272\uFF0C\u4EE5\u4FBF\u4E8E\u540E\u8FB9\u7684\u6F14\u793A\u3002
#  &#39;read&#39;\u547D\u4EE4\u7684\u7279\u6B8A\u9009\u9879 ,
#+ \u5141\u8BB8\u7ED9\u6570\u7EC4\u5143\u7D20\u8D4B\u503C\u3002

echo

element_count=\${#colors[@]}
# \u63D0\u53D6\u6570\u7EC4\u5143\u7D20\u4E2A\u6570\u7684\u7279\u6B8A\u8BED\u6CD5
#     \u7528element_count=\${#colors[*]} \u4E5F\u53EF\u4EE5\u3002
#
#  &quot;@&quot; \u53D8\u91CF\u5141\u8BB8\u5728\u5F15\u7528\u4E2D\u5B58\u5728\u5355\u6B21\u5206\u5272\uFF0C
#+ (\u4F9D\u9760\u7A7A\u767D\u5B57\u7B26\u6765\u5206\u5272\u53D8\u91CF).
#
#  \u8FD9\u5C31\u597D\u50CF&quot;$@&quot; \u548C &quot;$*&quot;
#+ \u5728\u4F4D\u7F6E\u53C2\u6570\u4E2D\u6240\u8868\u73B0\u51FA\u6765\u7684\u884C\u4E3A\u4E00\u6837\u3002

index=0

while [ &quot;$index&quot; -lt &quot;$element_count&quot; ]
do    # \u5217\u51FA\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5143\u7D20
  echo \${colors[$index]}
  #    \${colors[index]} \u4E5F\u53EF\u4EE5\u5DE5\u4F5C\uFF0C\u56E0\u4E3A\u5B83\${ ... }\u4E4B\u4E2D.
  let &quot;index = $index + 1&quot;
  # Or:
  #    ((index++))
done
# \u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u88AB\u5217\u4E3A\u5355\u72EC\u7684\u4E00\u884C
# \u5982\u679C\u6CA1\u6709\u8FD9\u79CD\u8981\u6C42\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528echo -n &quot;\${colors[$index]} &quot;
#
# \u4E5F\u53EF\u4EE5\u4F7F\u7528\u201Cfor\u201D\u5FAA\u73AF\u6765\u505A:
#   for i in &quot;\${colors[@]}&quot;
#   do
#     echo &quot;$i&quot;
#   done
# (Thanks, S.C.)

echo

# \u518D\u6B21\u5217\u51FA\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5143\u7D20\uFF0C\u4E0D\u8FC7\u8FD9\u6B21\u7684\u505A\u6CD5\u66F4\u4E3A\u4F18\u96C5\u3002
  echo \${colors[@]}          # echo \${colors[*]} \u4E5F\u53EF\u4EE5\u5DE5\u4F5C.

echo

# &quot;unset&quot;\u547D\u4EE4\u65E2\u53EF\u4EE5\u5220\u9664\u6570\u7EC4\u6570\u636E\uFF0C\u4E5F\u53EF\u4EE5\u5220\u9664\u6574\u4E2A\u6570\u7EC4\u3002
unset colors[1]			# \u5220\u9664\u6570\u7EC4\u7684\u7B2C2\u4E2A\u5143\u7D20\u3002
						# \u4F5C\u7528\u7B49\u540C\u4E8Ecolors[1]=
echo  \${colors[@]}		# \u518D\u6B21\u5217\u51FA\u6570\u7EC4\u5185\u5BB9\uFF0C\u7B2C2\u4E2A\u5143\u7D20\u6CA1\u4E86\u3002

unset colors			# \u5220\u9664\u6574\u4E2A\u6570\u7EC4\u3002
						#  unset colors[*] \u4EE5\u53CA
						#+ unset colors[@] \u90FD\u53EF\u4EE5.
echo; echo -n &quot;Colors gone.&quot;
echo \${colors[@]}		# \u518D\u6B21\u5217\u51FA\u6570\u7EC4\u5185\u5BB9\uFF0C\u5185\u5BB9\u4E3A\u7A7A\u3002
exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,2),C=n("p",null,[s("\u6B63\u5982\u6211\u4EEC\u5728\u524D\u9762\u7684\u4F8B\u5B50\u4E2D\u6240\u770B\u5230\u7684\uFF0C"),n("strong",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mrow",null,[n("mi",null,"a"),n("mi",null,"r"),n("mi",null,"r"),n("mi",null,"a"),n("msub",null,[n("mi",null,"y"),n("mi",null,"n")]),n("mi",null,"a"),n("mi",null,"m"),n("mi",null,"e"),n("mo",{stretchy:"false"},"["),n("mi",{mathvariant:"normal"},"@"),n("mo",{stretchy:"false"},"]")]),n("mo",null,"\u2217"),n("mo",null,"\u2217"),n("mtext",null,"\u6216\u8005"),n("mo",null,"\u2217"),n("mo",null,"\u2217")]),n("annotation",{encoding:"application/x-tex"},"{array_name[@]}** \u6216\u8005 **")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"rr"),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.1514em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mord mathnormal"},"am"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mopen"},"["),n("span",{class:"mord"},"@"),n("span",{class:"mclose"},"]")]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"\u2217"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord"},"\u2217"),n("span",{class:"mord cjk_fallback"},"\u6216\u8005"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"\u2217"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4653em"}}),n("span",{class:"mord"},"\u2217")])])]),s("{array_name[*]}")]),s(" \u90FD\u4E0E\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5143\u7D20\u76F8\u5173\u3002\u540C\u6837\u7684\uFF0C\u4E3A\u4E86\u8BA1\u7B97\u6570\u7EC4\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),n("strong",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mrow",null,[n("mi",null,"a"),n("mi",null,"r"),n("mi",null,"r"),n("mi",null,"a"),n("msub",null,[n("mi",null,"y"),n("mi",null,"n")]),n("mi",null,"a"),n("mi",null,"m"),n("mi",null,"e"),n("mo",{stretchy:"false"},"["),n("mi",{mathvariant:"normal"},"@"),n("mo",{stretchy:"false"},"]")]),n("mo",null,"\u2217"),n("mo",null,"\u2217"),n("mtext",null,"\u6216\u8005"),n("mo",null,"\u2217"),n("mo",null,"\u2217")]),n("annotation",{encoding:"application/x-tex"},"{array_name[@]}** \u6216\u8005 **")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"rr"),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.1514em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mord mathnormal"},"am"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mopen"},"["),n("span",{class:"mord"},"@"),n("span",{class:"mclose"},"]")]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"\u2217"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord"},"\u2217"),n("span",{class:"mord cjk_fallback"},"\u6216\u8005"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"\u2217"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4653em"}}),n("span",{class:"mord"},"\u2217")])])]),s("{array_name[*]}")]),s(" \u3002 "),n("strong",null,[n("span",{class:"katex-error",title:"ParseError: KaTeX parse error: Expected '}', got '#' at position 2: {#\u0332array_name}**  \u2026"},"{#array_name}** \u662F\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u957F\u5EA6\uFF0C\u4E5F\u5C31\u662F **"),s("{array_name[0]}")]),s(" \u7684\u957F\u5EA6\uFF08\u5B57\u7B26\u4E2A\u6570\uFF09\u3002")],-1),k=r(`<p>\u4F8B\u5B50 27-7. \u7A7A\u6570\u7EC4\u4E0E\u5305\u542B\u7A7A\u5143\u7D20\u7684\u6570\u7EC4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# empty-array.sh

#  \u611F\u8C22Stephane Chazelas\u5236\u4F5C\u8FD9\u4E2A\u4F8B\u5B50\u7684\u539F\u59CB\u7248\u672C\u3002 
#+ \u540C\u65F6\u611F\u8C22Michael Zick \u548C Omair Eshkenazi \u5BF9\u8FD9\u4E2A\u4F8B\u5B50\u6240\u4F5C\u7684\u6269\u5C55\u3002
#  \u4EE5\u53CA\u611F\u8C22Nathan Coulter \u4F5C\u7684\u58F0\u660E\u548C\u611F\u8C22\u3002

# \u7A7A\u6570\u7EC4\u4E0E\u5305\u542B\u6709\u7A7A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u8FD9\u4E24\u4E2A\u6982\u5FF5\u4E0D\u540C\u3002
  
array0=( first second third )
array1=( &#39;&#39; )		# &quot;array1&quot; \u5305\u542B\u4E00\u4E2A\u7A7A\u5143\u7D20.
array2=( )			# \u6CA1\u6709\u5143\u7D20. . . &quot;array2&quot;\u4E3A\u7A7A 
array3=()			# \u8FD9\u4E2A\u6570\u7EC4\u5462?

echo
ListArray()
{
	echo
	echo &quot;Elements in array0:  \${array0[@]}&quot;
	echo &quot;Elements in array1:  \${array1[@]}&quot;
	echo &quot;Elements in array2:  \${array2[@]}&quot;
	echo &quot;Elements in array3:  \${array3[@]}&quot;
	echo
	echo &quot;Length of first element in array0 = \${#array0}&quot;
	echo &quot;Length of first element in array1 = \${#array1}&quot;
	echo &quot;Length of first element in array2 = \${#array2}&quot;
	echo &quot;Length of first element in array3 = \${#array3}&quot;
	echo
	echo &quot;Number of elements in array0 = \${#array0[*]}&quot;  # 3
	echo &quot;Number of elements in array1 = \${#array1[*]}&quot;  # 1  (Surprise!)
	echo &quot;Number of elements in array2 = \${#array2[*]}&quot;  # 0
	echo &quot;Number of elements in array3 = \${#array3[*]}&quot;  # 0
}

# ===================================================================

ListArray

# \u5C1D\u8BD5\u6269\u5C55\u8FD9\u4E9B\u6570\u7EC4\u3002

# \u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\u5230\u8FD9\u4E2A\u6570\u7EC4\u3002
array0=( &quot;\${array0[@]}&quot; &quot;new1&quot; )
array1=( &quot;\${array1[@]}&quot; &quot;new1&quot; )
array2=( &quot;\${array2[@]}&quot; &quot;new1&quot; )
array3=( &quot;\${array3[@]}&quot; &quot;new1&quot; )

ListArray

# \u6216\u8005
array0[\${#array0[*]}]=&quot;new2&quot;
array1[\${#array1[*]}]=&quot;new2&quot;
array2[\${#array2[*]}]=&quot;new2&quot;
array3[\${#array3[*]}]=&quot;new2&quot;

ListArray

# \u5982\u679C\u4F60\u6309\u7167\u4E0A\u8FB9\u7684\u65B9\u6CD5\u5BF9\u6570\u7EC4\u8FDB\u884C\u6269\u5C55\u7684\u8BDD\uFF0C\u6570\u7EC4\u6BD4\u8F83\u50CF\u2018\u6808\u2019
# \u4E0A\u8FB9\u7684\u64CD\u4F5C\u5C31\u662F\u2018\u538B\u6808\u2019
# \u2018\u6808\u2019\u7684\u9AD8\u5EA6\u4E3A\uFF1A
height=\${#array2[@]}
echo
echo &quot;Stack height for array2 = $height&quot;

# &#39;\u51FA\u6808\u2019\u5C31\u662F\uFF1A
unset array2[\${#array2[@]}-1]   # \u6570\u7EC4\u4ECE0\u5F00\u59CB\u7D22\u5F15 
height=\${#array2[@]}            #+ \u8FD9\u5C31\u610F\u5473\u7740\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u4E0B\u6807\u662F0
echo
echo &quot;POP&quot;
echo &quot;New stack height for array2 = $height&quot;

ListArray

# \u53EA\u5217\u51FA\u6570\u7EC4array0\u7684\u7B2C\u4E8C\u4E2A\u548C\u7B2C\u4E09\u4E2A\u5143\u7D20\u3002
from=1              # \u4ECE0\u5F00\u59CB\u7D22\u5F15\u3002
to=2
array3=( \${array0[@]:1:2} )
echo
echo &quot;Elements in array3:  \${array3[@]}&quot;

# \u5904\u7406\u65B9\u5F0F\u5C31\u50CF\u662F\u5B57\u7B26\u4E32\uFF08\u5B57\u7B26\u6570\u7EC4\uFF09\u3002
# \u8BD5\u8BD5\u5176\u4ED6\u7684\u201C\u5B57\u7B26\u4E32\u201D\u5F62\u5F0F\u3002

# \u66FF\u6362:
array4=( \${array0[@]/second/2nd} )
echo
echo &quot;Elements in array4:  \${array4[@]}&quot;

# \u66FF\u6362\u6389\u6240\u6709\u5339\u914D\u901A\u914D\u7B26\u7684\u5B57\u7B26\u4E32
array5=( \${array0[@]//new?/old} )
echo
echo &quot;Elements in array5:  \${array5[@]}&quot;

# \u5F53\u4F60\u89C9\u5F97\u5BF9\u6B64\u6709\u628A\u63E1\u7684\u65F6\u5019...
array6=( \${array0[@]#*new} )
echo # This one might surprise you.
echo &quot;Elements in array6:  \${array6[@]}&quot;

array7=( \${array0[@]#new1} )
echo # \u6570\u7EC4array6\u4E4B\u540E\u5C31\u6CA1\u6709\u60CA\u5947\u4E86\u3002
echo &quot;Elements in array7:  \${array7[@]}&quot;

# \u770B\u8D77\u6765\u975E\u5E38\u50CF...
array8=( \${array0[@]/new1/} )
echo
echo &quot;Elements in array8:  \${array8[@]}&quot;

# \u6240\u4EE5\uFF0C\u8BA9\u6211\u4EEC\u600E\u4E48\u5F62\u5BB9\u5462\uFF1F

#  \u5BF9\u6570\u7EC4var[@]\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20The string operations are performed on
#+ \u8FDB\u884C\u8FDE\u7EED\u7684\u5B57\u7B26\u4E32\u64CD\u4F5C\u3002each of the elements in var[@] in succession.
#  \u56E0\u6B64\uFF1ABash\u652F\u6301\u652F\u6301\u5B57\u7B26\u4E32\u5411\u91CF\u64CD\u4F5C\uFF0C
#  \u5982\u679C\u7ED3\u679C\u662F\u957F\u5EA6\u4E3A0\u7684\u5B57\u7B26\u4E32
#+ \u5143\u7D20\u4F1A\u5728\u7ED3\u679C\u8D4B\u503C\u4E2D\u6D88\u5931\u4E0D\u89C1\u3002
#  \u7136\u800C\uFF0C\u5982\u679C\u6269\u5C55\u5728\u5F15\u7528\u4E2D\uFF0C\u90A3\u4E2A\u7A7A\u5143\u7D20\u4F1A\u4ECD\u7136\u5B58\u5728\u3002

#  Michael Zick:   \u95EE\u9898--\u8FD9\u4E9B\u5B57\u7B26\u4E32\u662F\u5F3A\u5F15\u7528\u8FD8\u662F\u5F31\u5F15\u7528\uFF1F 
#  Nathan Coulter:  \u6CA1\u6709\u50CF\u5F31\u5F15\u7528\u7684\u4E1C\u897F
#!    \u771F\u6B63\u53D1\u751F\u7684\u4E8B\u60C5\u662F
#!+   \u5339\u914D\u7684\u683C\u5F0F\u53D1\u751F\u5728
#!+   [word]\u7684\u6240\u6709\u5176\u5B83\u6269\u5C55\u4E4B\u540E
#!+   \u6BD4\u5982\u50CF\${parameter#word}.

zap=&#39;new*&#39;
array9=( \${array0[@]/$zap/} )
echo
echo &quot;Number of elements in array9:  \${#array9[@]}&quot;
array9=( &quot;\${array0[@]/$zap/}&quot; )
echo &quot;Elements in array9:  \${array9[@]}&quot;
# \u6B64\u65F6\uFF0C\u7A7A\u5143\u7D20\u4ECD\u7136\u5B58\u5728
echo &quot;Number of elements in array9:  \${#array9[@]}&quot;

# \u5F53\u4F60\u8FD8\u5728\u8BA4\u4E3A\u4F60\u8EAB\u5728Kansas\u5DDE\u65F6...
array10=( \${array0[@]#$zap} )
echo
echo &quot;Elements in array10:  \${array10[@]}&quot;
# \u4F46\u662F\uFF0C\u5982\u679C\u88AB\u5F15\u7528\u7684\u8BDD\uFF0C*\u53F7\u5C06\u4E0D\u4F1A\u88AB\u89E3\u91CA\u3002
array10=( \${array0[@]#&quot;$zap&quot;} )
echo
echo &quot;Elements in array10:  \${array10[@]}&quot;
# \u53EF\u80FD\uFF0C\u6211\u4EEC\u4ECD\u7136\u5728Kansas...
# (\u4E0A\u9762\u7684\u4EE3\u7801\u5757Nathan Coulter\u6240\u4FEE\u6539.)

#  \u6BD4\u8F83 array7 \u548Carray10.
#  \u6BD4\u8F83array8 \u548Carray9.

#  \u91CD\u7533: \u6240\u6709\u6240\u8C13\u5F31\u5F15\u7528\u7684\u4E1C\u897F
#  Nathan Coulter \u8FD9\u6837\u89E3\u91CA:
#  word\u5728\${parameter#word}\u4E2D\u7684\u5339\u914D\u683C\u5F0F\u5728
#+ \u53C2\u6570\u6269\u5C55\u4E4B\u540E\u548C\u5F15\u7528\u79FB\u9664\u4E4B\u524D\u5DF2\u7ECF\u5B8C\u6210\u4E86\u3002
#  \u5728\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u683C\u5F0F\u5339\u914D\u5728\u5F15\u7528\u79FB\u9664\u4E4B\u540E\u5B8C\u6210\u3002

exit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br></div></div>`,2),S=n("strong",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mrow",null,[n("mi",null,"a"),n("mi",null,"r"),n("mi",null,"r"),n("mi",null,"a"),n("msub",null,[n("mi",null,"y"),n("mi",null,"n")]),n("mi",null,"a"),n("mi",null,"m"),n("mi",null,"e"),n("mo",{stretchy:"false"},"["),n("mi",{mathvariant:"normal"},"@"),n("mo",{stretchy:"false"},"]")]),n("mo",null,"\u2217"),n("mo",null,"\u2217"),n("mtext",null,"\u548C"),n("mo",null,"\u2217"),n("mo",null,"\u2217")]),n("annotation",{encoding:"application/x-tex"},"{array_name[@]}** \u548C **")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"rr"),n("span",{class:"mord mathnormal"},"a"),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.1514em"}},[n("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mord mathnormal"},"am"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mopen"},"["),n("span",{class:"mord"},"@"),n("span",{class:"mclose"},"]")]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"\u2217"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord"},"\u2217"),n("span",{class:"mord cjk_fallback"},"\u548C"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"\u2217"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4653em"}}),n("span",{class:"mord"},"\u2217")])])]),s("{array_name[*]}")],-1),M=s(" \u7684\u5173\u7CFB\u975E\u5E38\u7C7B\u4F3C\u4E8E "),B={href:"http://tldp.org/LDP/abs/html/internalvariables.html#APPREF",target:"_blank",rel:"noopener noreferrer"},N=n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",{mathvariant:"normal"},"@"),n("mtext",null,"\u548C")]),n("annotation",{encoding:"application/x-tex"},"@ \u548C")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6944em"}}),n("span",{class:"mord"},"@"),n("span",{class:"mord cjk_fallback"},"\u548C")])])],-1),Q=s("*"),Z=s("\u3002\u8FD9\u79CD\u6570\u7EC4\u7528\u6CD5\u975E\u5E38\u5E7F\u6CDB\u3002"),D=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u590D\u5236\u4E00\u4E2A\u6570\u7EC4
array2=( &quot;\${array1[@]}&quot; )
# \u6216\u8005
array2=&quot;\${array1[@]}&quot;
#
# \u7136\u800C\uFF0C\u5982\u679C\u5728\u201C\u7F3A\u9879\u201D\u6570\u7EC4\u4E2D\u4F7F\u7528\u7684\u8BDD\uFF0C\u5C06\u4F1A\u5931\u8D25 
#+ \u4E5F\u5C31\u662F\u8BF4\u6570\u7EC4\u4E2D\u5B58\u5728\u7A7A\u6D1E\uFF08\u4E2D\u95F4\u7684\u67D0\u4E2A\u5143\u7D20\u6CA1\u8D4B\u503C\uFF09\uFF0C
#+ \u8FD9\u4E2A\u95EE\u9898\u7531Jochen DeSmet \u6307\u51FA.
# ------------------------------------------
  array1[0]=0
# array1[1] not assigned
  array1[2]=2
  array2=( &quot;\${array1[@]}&quot; )       # \u62F7\u8D1D\u5B83\uFF1F
echo \${array2[0]}      # 0
echo \${array2[2]}      # (null), \u5E94\u8BE5\u662F 2
# ------------------------------------------
# \u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\u5230\u6570\u7EC4\u3002
array=( &quot;\${array[@]}&quot; &quot;new element&quot; )
# \u6216\u8005
array[\${#array[*]}]=&quot;new element&quot;
# \u611F\u8C22, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,1),z=n("img",{src:"http://tldp.org/LDP/abs/images/tip.gif",alt:"info",loading:"lazy"},null,-1),U=s(),Y=n("strong",null,"array=( element1 element2 ... elementN )",-1),O=s(" \u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u5982\u679C\u6709"),X=s("\u547D\u4EE4\u66FF\u6362"),V=s("\u7684\u5E2E\u52A9\uFF0C\u5C31\u53EF\u4EE5\u5C06\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\u7684\u5185\u5BB9\u52A0\u8F7D\u5230\u6570\u7EC4\u3002"),F=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
filename=sample_file
#            cat sample_file
#
# 			1  a  b  c
# 			2  d  e  fg

declare -a array1

array1=( \`cat &quot;$filename&quot;\`)		#  \u5C06$filename\u7684\u5185\u5BB9
#         \u628A\u6587\u4EF6\u5185\u5BB9\u5C55\u793A\u5230\u8F93\u51FA	#+ \u52A0\u8F7D\u5230\u6570\u7EC4array1.
#
#  array1=( \`cat &quot;$filename&quot; | tr &#39;\\n&#39; &#39; &#39;\`)
#                           \u628A\u6587\u4EF6\u4E2D\u7684\u6362\u884C\u66FF\u6362\u4E3A\u7A7A\u683C 
# \u5176\u5B9E\u8FD9\u6837\u505A\u662F\u6CA1\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3ABash\u5728\u505A\u5355\u8BCD\u5206\u5272\u7684\u65F6\u5019\uFF0C 
#+\u5C06\u4F1A\u628A\u6362\u884C\u8F6C\u6362\u4E3A\u7A7A\u683C\u3002

echo \${array1[@]}            # \u6253\u5370\u6570\u7EC4
#                              1 a b c 2 d e fg
#
#  \u6587\u4EF6\u4E2D\u6BCF\u4E2A\u88AB\u7A7A\u767D\u7B26\u5206\u5272\u7684\u201C\u5355\u8BCD\u201D
#+ \u90FD\u88AB\u4FDD\u5B58\u5230\u6570\u7EC4\u7684\u4E00\u4E2A\u5143\u7D20\u4E2D\u3002

element_count=\${#array1[*]}
echo $element_count          # 8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u51FA\u8272\u7684\u6280\u5DE7\u4F7F\u5F97\u6570\u7EC4\u7684\u64CD\u4F5C\u6280\u672F\u53C8\u591A\u4E86\u4E00\u79CD\u3002</p><p>\u4F8B\u5B50 27-8. \u521D\u59CB\u5316\u6570\u7EC4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#! /bin/bash
# array-assign.bash

# \u6570\u7EC4\u64CD\u4F5C\u662FBash\u6240\u7279\u6709\u7684\uFF0C
#+ \u6240\u4EE5\u624D\u4F7F\u7528&quot;.bash&quot; \u4F5C\u4E3A\u811A\u672C\u6269\u5C55\u540D

# Copyright (c) Michael S. Zick, 2003, All rights reserved.
# License: Unrestricted reuse in any form, for any purpose.
# Version: $ID$
#
# \u8BF4\u660E\u4E0E\u6CE8\u91CA\u7531 William Park\u6240\u6DFB\u52A0.

#  \u57FA\u4E8E Stephane Chazelas\u6240\u63D0\u4F9B\u7684\u4F8B\u5B50
#+ \u5B83\u662F\u5728ABS\u4E2D\u7684\u8F83\u65E9\u7248\u672C\u3002

# &#39;times&#39; \u547D\u4EE4\u7684\u8F93\u51FA\u683C\u5F0F:
# User CPU &lt;space&gt; System CPU
# User CPU of dead children &lt;space&gt; System CPU of dead children

#  Bash\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C 
#+ \u53EF\u4EE5\u5C06\u4E00\u4E2A\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20\u90FD\u8D4B\u503C\u7ED9\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u53D8\u91CF\u3002
#  \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u4F1A\u4E22\u5F03\u6570\u7EC4\u4E2D\u7684\u201C\u7A7A\u5F15\u7528\u201C\uFF08null\u503C\uFF09\u5143\u7D20
#+ \u57282.04\u548C\u4EE5\u540E\u7684Bash\u7248\u672C\u4E2D\u3002
#  \u53E6\u4E00\u79CD\u7ED9\u6570\u7EC4\u8D4B\u503C\u7684\u65B9\u6CD5\u5C06\u4F1A\u88AB\u6DFB\u52A0\u5230\u65B0\u7248\u672C\u7684Bash\u4E2D\uFF0C
#+ \u8FD9\u79CD\u65B9\u6CD5\u91C7\u7528[subscript]=value \u5F62\u5F0F\uFF0C\u6765\u7EF4\u62A4\u6570\u7EC4\u4E0B\u6807\u4E0E\u5143\u7D20\u503C\u4E4B\u95F4\u7684\u5173\u7CFB\u3002 

#  \u53EF\u4EE5\u4F7F\u7528\u5185\u90E8\u547D\u4EE4\u6765\u6784\u9020\u4E00\u4E2A\u5927\u6570\u7EC4\uFF0C
#+ \u5F53\u7136\uFF0C\u6784\u9020\u4E00\u4E2A\u5305\u542B\u4E0A\u5343\u5143\u7D20\u6570\u7EC4\u7684\u5176\u5B83\u65B9\u6CD5
#+ \u4E5F\u80FD\u5F88\u597D\u7684\u5B8C\u6210\u4EFB\u52A1

declare -a bigOne=( /dev/* )  # /dev\u4E0B\u7684\u6240\u6709\u6587\u4EF6 . . .
echo
echo &#39;Conditions: Unquoted, default IFS, All-Elements-Of&#39;
echo &quot;Number of elements in array is \${#bigOne[@]}&quot;

# set -vx

echo
echo &#39;- - testing: =( \${array[@]} ) - -&#39;
times
declare -a bigTwo=( \${bigOne[@]} )
# \u6CE8\u610F\u62EC\u53F7:    ^              ^
times
echo

echo &#39;- - testing: =\${array[@]} - -&#39;
times
declare -a bigThree=\${bigOne[@]}
# \u8FD9\u6B21\u6CA1\u7528\u62EC\u53F7\u3002
times
#  \u901A\u8FC7\u6BD4\u8F83\uFF0C\u53EF\u4EE5\u53D1\u73B0\u7B2C\u4E8C\u79CD\u683C\u5F0F\u7684\u8D4B\u503C\u66F4\u5FEB\u4E00\u4E9B\uFF0C
#+ \u6B63\u5982 Stephane Chazelas\u6307\u51FA\u7684\u90A3\u6837
#
#  William Park \u89E3\u91CA:
#+ bigTwo\u6570\u7EC4\u662F\u4F5C\u4E3A\u4E00\u4E2A\u5355\u4E2A\u5B57\u7B26\u4E32\u88AB\u8D4B\u503C\u7684(\u56E0\u4E3A\u62EC\u53F7)
#+ \u800CBigThree\u6570\u7EC4\uFF0C\u5219\u662F\u4E00\u4E2A\u5143\u7D20\u4E00\u4E2A\u5143\u7D20\u8FDB\u884C\u7684\u8D4B\u503C\u3002
#  \u6240\u4EE5\uFF0C\u5B9E\u8D28\u4E0A\u662F:
#                   bigTwo=( [0]=&quot;...&quot; [1]=&quot;...&quot; [2]=&quot;...&quot; ... )
#                   bigThree=( [0]=&quot;... ... ...&quot; )
#
#  \u901A\u8FC7\u8FD9\u6837\u786E\u8BA4:  echo \${bigTwo[0]}
#                   echo \${bigThree[0]}
#  \u5728\u672C\u4E66\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u8FD8\u662F\u4F1A\u7EE7\u7EED\u4F7F\u7528\u7B2C\u4E00\u79CD\u5F62\u5F0F\uFF0C 
#+ \u56E0\u4E3A\uFF0C\u6211\u8BA4\u4E3A\u8FD9\u79CD\u5F62\u5F0F\u66F4\u6709\u5229\u4E8E\u5C06\u95EE\u9898\u9610\u8FF0\u6E05\u695A\u3002

#  \u5728\u6211\u6240\u4F7F\u7528\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5728\u5176\u4E2D\u590D\u7528\u7684\u90E8\u5206\uFF0C
#+ \u8FD8\u662F\u4F7F\u7528\u4E86\u7B2C\u4E8C\u79CD\u5F62\u5F0F\uFF0C\u90A3\u662F\u56E0\u4E3A\u8FD9\u79CD\u5F62\u5F0F\u66F4\u5FEB\u3002

# MSZ: \u5F88\u62B1\u6B49\u65E9\u5148\u7684\u758F\u5FFD\u3002

#  \u6CE8\u610F:
#  ----
#  32\u548C44\u7684&quot;declare -a&quot; \u8BED\u53E5\u5176\u5B9E\u4E0D\u662F\u5FC5\u9700\u7684\uFF0C 
#+ \u56E0\u4E3AArray=(...)\u5F62\u5F0F
#+ \u53EA\u80FD\u7528\u4E8E\u6570\u7EC4
#  \u7136\u800C\uFF0C\u5982\u679C\u7701\u7565\u8FD9\u4E9B\u58F0\u660E\u7684\u8BDD\uFF0C
#+ \u4F1A\u5BFC\u81F4\u811A\u672C\u540E\u8FB9\u7684\u76F8\u5173\u64CD\u4F5C\u53D8\u6162\u3002
#  \u8BD5\u8BD5\u770B\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra" loading="lazy"> \u5728\u6570\u7EC4\u58F0\u660E\u7684\u65F6\u5019\u6DFB\u52A0\u4E00\u4E2A\u989D\u5916\u7684<strong>declare -a</strong>\u8BED\u53E5\uFF0C\u80FD\u591F\u52A0\u901F\u540E\u7EED\u7684\u6570\u7EC4\u64CD\u4F5C\u901F\u5EA6\u3002</p><p>\u4F8B\u5B50 27-9. \u62F7\u8D1D\u548C\u8FDE\u63A5\u6570\u7EC4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#! /bin/bash
# CopyArray.sh
#
# \u8FD9\u4E2A\u811A\u672C\u7531Michael Zick\u6240\u7F16\u5199.
# \u8FD9\u91CC\u5DF2\u7ECF\u901A\u8FC7\u4F5C\u8005\u7684\u6388\u6743

#  \u5982\u4F55\u201C\u901A\u8FC7\u540D\u5B57\u4F20\u503C&amp;\u901A\u8FC7\u540D\u5B57\u8FD4\u56DE\u201D
#+ \u6216\u8005\u201C\u5EFA\u7ACB\u81EA\u5DF1\u7684\u8D4B\u503C\u8BED\u53E5\u201D\u3002

CpArray_Mac() {
	# \u5EFA\u7ACB\u8D4B\u503C\u547D\u4EE4
	echo -n &#39;eval &#39;
    echo -n &quot;$2&quot;                    # \u76EE\u7684\u540D\u5B57
    echo -n &#39;=( \${&#39;
    echo -n &quot;$1&quot;                    # \u6E90\u540D\u5B57
    echo -n &#39;[@]} )&#39;

# \u4E0A\u8FB9\u8FD9\u4E9B\u8BED\u53E5\u4F1A\u6784\u6210\u4E00\u6761\u547D\u4EE4\u3002
# \u8FD9\u4EC5\u4EC5\u662F\u5F62\u5F0F\u4E0A\u7684\u95EE\u9898\u3002
}

declare -f CopyArray
CopyArray=CpArray_Mac

Hype() {
# &quot;Pointer&quot;\u51FD\u6570
# \u72B6\u6001\u4EA7\u751F\u5668
# \u9700\u8981\u8FDE\u63A5\u7684\u6570\u7EC4\u540D\u4E3A$1.
# (\u628A\u8FD9\u4E2A\u6570\u7EC4\u4E0E\u5B57\u7B26\u4E32&quot;Really Rocks&quot;\u7ED3\u5408\u8D77\u6765\uFF0C\u5F62\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4.)
# \u5E76\u5C06\u7ED3\u679C\u4ECE\u6570\u7EC4$2\u4E2D\u8FD4\u56DE.

    local -a TMP
    local -a hype=( Really Rocks )
    $($CopyArray $1 TMP)
    TMP=( \${TMP[@]} \${hype[@]} )
    $($CopyArray TMP $2)
}

declare -a before=( Advanced Bash Scripting )
declare -a after

echo &quot;Array Before = \${before[@]}&quot;

Hype before after

echo &quot;Array After = \${after[@]}&quot;

# \u8FDE\u63A5\u7684\u592A\u591A\u4E86?

echo &quot;What \${after[@]:3:2}?&quot;
declare -a modest=( \${after[@]:2:1} \${after[@]:3:2} )
#                    ---- \u5B50\u4E32\u63D0\u53D6 ----

echo &quot;Array Modest = \${modest[@]}&quot;

# &#39;before&#39; \u53D1\u751F\u4E86\u4EC0\u4E48\u53D8\u5316 ?

echo &quot;Array Before = \${before[@]}&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p>\u4F8B\u5B5027-10. \u5173\u4E8E\u4E32\u8054\u6570\u7EC4\u7684\u66F4\u591A\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#! /bin/bash
# array-append.bash

# Copyright (c) Michael S. Zick, 2003, All rights reserved.
# License: Unrestricted reuse in any form, for any purpose.
# Version: $ID$
#
#  \u5728\u683C\u5F0F\u4E0A\uFF0C\u7531M.C\u505A\u4E86\u4E00\u4E9B\u4FEE\u6539.

# \u6570\u7EC4\u64CD\u4F5C\u662FBash\u7279\u6709\u7684\u5C5E\u6027\u3002
# \u4F20\u7EDF\u7684UNIX /bin/sh \u7F3A\u4E4F\u7C7B\u4F3C\u7684\u529F\u80FD\u3002

#  \u5C06\u8FD9\u4E2A\u811A\u672C\u7684\u8F93\u51FA\u901A\u8FC7\u7BA1\u9053\u4F20\u9012\u7ED9&#39;more&#39;\uFF0C
#+ \u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u653E\u6B62\u8F93\u51FA\u7684\u5185\u5BB9\u8D85\u8FC7\u7EC8\u7AEF\u80FD\u591F\u663E\u793A\u7684\u8303\u56F4\uFF0C
#  \u6216\u8005\uFF0C\u91CD\u5B9A\u5411\u8F93\u51FA\u5230\u6587\u4EF6\u4E2D\u3002

declare -a array1=( zero1 one1 two1 )
# \u4F9D\u6B21\u4F7F\u7528\u4E0B\u6807
declare -a array2=( [0]=zero2 [2]=two2 [3]=three2 )
# \u6570\u7EC4\u4E2D\u5B58\u5728\u7A7A\u7F3A\u7684\u5143\u7D20-- [1] \u672A\u5B9A\u4E49

echo
echo &#39;- Confirm that the array is really subscript sparse. -&#39;
echo &quot;Number of elements: 4&quot;        # \u4E3A\u4E86\u6F14\u793A\uFF0C\u8FD9\u91CC\u4F5C\u4E86\u786C\u7F16\u7801
for (( i = 0 ; i &lt; 4 ; i++ ))
do
    echo &quot;Element [$i]: \${array2[$i]}&quot;
done
# \u4E5F\u53EF\u4EE5\u53C2\u8003\u4E00\u4E2A\u66F4\u901A\u7528\u7684\u4F8B\u5B50\uFF0C basics-reviewed.bash.


declare -a dest

# \u5C06\u4E24\u4E2A\u6570\u7EC4\u5408\u5E76\u5230\u7B2C3\u4E2A\u6570\u7EC4\u4E2D\u3002
echo
echo &#39;Conditions: Unquoted, default IFS, All-Elements-Of operator&#39;
echo &#39;- Undefined elements not present, subscripts not maintained. -&#39;
# # \u90A3\u4E9B\u672A\u5B9A\u4E49\u7684\u5143\u7D20\u4E0D\u4F1A\u51FA\u73B0\uFF1B\u7EC4\u5408\u65F6\u4F1A\u4E22\u5F03\u8FD9\u4E9B\u5143\u7D20\u3002

dest=( \${array1[@]} \${array2[@]} )
# dest=\${array1[@]}\${array2[@]} 		# \u5947\u602A\u7684\u7ED3\u679C\uFF0C\u53EF\u80FD\u662F\u4E2Abug\u3002

# \u73B0\u5728\uFF0C\u6253\u5370\u7ED3\u679C\u3002
echo
echo &#39;- - Testing Array Append - -&#39;
cnt=\${#dest[@]}

echo &quot;Number of elements: $cnt&quot;
for (( i = 0 ; i &lt; cnt ; i++ ))
do
    echo &quot;Element [$i]: \${dest[$i]}&quot;
done

# \u5C06\u6570\u7EC4\u8D4B\u503C\u7ED9\u4E00\u4E2A\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\uFF08\u4E24\u6B21\uFF09
dest[0]=\${array1[@]}
dest[1]=\${array2[@]}

# \u6253\u5370\u7ED3\u679C
echo
echo &#39;- - Testing modified array - -&#39;
cnt=\${#dest[@]}

echo &quot;Number of elements: $cnt&quot;
for (( i = 0 ; i &lt; cnt ; i++ ))
do
echo &quot;Element [$i]: \${dest[$i]}&quot;
done

# \u68C0\u67E5\u7B2C\u4E8C\u4E2A\u5143\u7D20\u7684\u4FEE\u6539\u72B6\u51B5.
echo
echo &#39;- - Reassign and list second element - -&#39;

declare -a subArray=\${dest[1]}
cnt=\${#subArray[@]}

echo &quot;Number of elements: $cnt&quot;
for (( i = 0 ; i &lt; cnt ; i++ ))
do
    echo &quot;Element [$i]: \${subArray[$i]}&quot;
done

# \u5982\u679C\u4F60\u4F7F\u7528&#39;=\${ ... }&#39;\u5F62\u5F0F
#+ \u5C06\u4E00\u4E2A\u6570\u7EC4\u8D4B\u503C\u5230\u53E6\u4E00\u4E2A\u6570\u7EC4\u7684\u4E00\u4E2A\u5143\u7D20\u4E2D,
#+ \u90A3\u4E48\u8FD9\u4E2A\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20\u90FD\u4F1A\u88AB\u8F6C\u6362\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32,
#+ \u8FD9\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u90FD\u4EE5\u7A7A\u683C\u8FDB\u884C\u5206\u9694(\u5176\u5B9E\u662FIFS\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26).

# \u5982\u679C\u539F\u6765\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5143\u7D20\u90FD\u4E0D\u5305\u542B\u7A7A\u767D\u7B26 . . .
# \u5982\u679C\u539F\u6765\u7684\u6570\u7EC4\u4E0B\u6807\u90FD\u662F\u8FDE\u7EED\u7684 . . .
# \u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u5C06\u539F\u6765\u7684\u6570\u7EC4\u8FDB\u884C\u6062\u590D.

# \u4ECE\u4FEE\u6539\u8FC7\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4E2D, \u5C06\u539F\u6765\u7684\u6570\u7EC4\u6062\u590D\u51FA\u6765.
echo
echo &#39;- - Listing restored element - -&#39;

declare -a subArray=( \${dest[1]} )
cnt=\${#subArray[@]}

echo &quot;Number of elements: $cnt&quot;
for (( i = 0 ; i &lt; cnt ; i++ ))
do
    echo &quot;Element [$i]: \${subArray[$i]}&quot;
done

echo &#39;- - Do not depend on this behavior. - -&#39;
echo &#39;- - This behavior is subject to change - -&#39;
echo &#39;- - in versions of Bash newer than version 2.05b - -&#39;

# MSZ: \u62B1\u6B49\uFF0C\u4E4B\u524D\u6DF7\u6DC6\u4E86\u4E00\u4E9B\u8981\u70B9\u3002

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br></div></div><hr><p>\u6709\u4E86\u6570\u7EC4, \u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u811A\u672C\u4E2D\u5B9E\u73B0\u4E00\u4E9B\u6BD4\u8F83\u719F\u6089\u7684\u7B97\u6CD5. \u8FD9\u4E48\u505A, \u5230\u5E95\u662F\u4E0D\u662F\u4E00\u4E2A\u597D\u4E3B\u610F, \u6211\u4EEC\u5728\u8FD9\u91CC\u4E0D\u505A\u8BA8\u8BBA, \u8FD8\u662F\u7559\u7ED9\u8BFB\u8005\u51B3\u5B9A\u5427.</p><p>\u4F8B\u5B50 27-11. \u5192\u6CE1\u6392\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# bubble.sh: \u4E00\u79CD\u6392\u5E8F\u65B9\u5F0F, \u5192\u6CE1\u6392\u5E8F.

# \u56DE\u5FC6\u4E00\u4E0B\u5192\u6CE1\u6392\u5E8F\u7684\u7B97\u6CD5. \u6211\u4EEC\u5728\u8FD9\u91CC\u8981\u5B9E\u73B0\u5B83...

# \u4F9D\u9760\u8FDE\u7EED\u7684\u6BD4\u8F83\u6570\u7EC4\u5143\u7D20\u8FDB\u884C\u6392\u5E8F,
#+ \u6BD4\u8F83\u4E24\u4E2A\u76F8\u90BB\u5143\u7D20, \u5982\u679C\u987A\u5E8F\u4E0D\u5BF9, \u5C31\u4EA4\u6362\u8FD9\u4E24\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E.
# \u5F53\u7B2C\u4E00\u8F6E\u6BD4\u8F83\u7ED3\u675F\u4E4B\u540E, \u6700&quot;\u91CD&quot;\u7684\u5143\u7D20\u5C31\u4F1A\u88AB\u79FB\u52A8\u5230\u6700\u5E95\u90E8.
# \u5F53\u7B2C\u4E8C\u8F6E\u6BD4\u8F83\u7ED3\u675F\u4E4B\u540E, \u7B2C\u4E8C&quot;\u91CD&quot;\u7684\u5143\u7D20\u5C31\u4F1A\u88AB\u79FB\u52A8\u5230\u6B21\u5E95\u90E8\u7684\u4F4D\u7F6E.
# \u4F9D\u6B64\u7C7B\u63A8.
# \u8FD9\u610F\u5473\u7740\u6BCF\u8F6E\u6BD4\u8F83\u4E0D\u9700\u8981\u6BD4\u8F83\u4E4B\u524D\u5DF2\u7ECF&quot;\u6C89\u6DC0&quot;\u597D\u7684\u6570\u636E.
# \u56E0\u6B64\u4F60\u4F1A\u6CE8\u610F\u5230\u540E\u8FB9\u7684\u6570\u636E\u5728\u6253\u5370\u7684\u65F6\u5019\u4F1A\u5FEB\u4E00\u4E9B.


exchange() {
  # \u4EA4\u6362\u6570\u7EC4\u4E2D\u7684\u4E24\u4E2A\u5143\u7D20.
  local temp=\${Countries[$1]} #  \u4E34\u65F6\u4FDD\u5B58
                              #+ \u8981\u4EA4\u6362\u7684\u90A3\u4E2A\u5143\u7D20 
  Countries[$1]=\${Countries[$2]}
  Countries[$2]=$temp
  
  return 
}

declare -a Countries  #  \u58F0\u660E\u6570\u7EC4,
                      #+ \u6B64\u5904\u662F\u53EF\u9009\u7684, \u56E0\u4E3A\u6570\u7EC4\u5728\u4E0B\u9762\u88AB\u521D\u59CB\u5316
#  \u6211\u4EEC\u662F\u5426\u53EF\u4EE5\u4F7F\u7528\u8F6C\u4E49\u7B26(\\)
#+ \u6765\u5C06\u6570\u7EC4\u5143\u7D20\u7684\u503C\u653E\u5728\u4E0D\u540C\u7684\u884C\u4E0A?
#  \u53EF\u4EE5.

Countries=(Netherlands Ukraine Zaire Turkey Russia Yemen Syria \\
Brazil Argentina Nicaragua Japan Mexico Venezuela Greece England \\
Israel Peru Canada Oman Denmark Wales France Kenya \\
Xanadu Qatar Liechtenstein Hungary)

# &quot;Xanadu&quot; \u865A\u62DF\u51FA\u6765\u7684\u4E16\u5916\u6843\u6E90.
#+ Kubla Khan\u505A\u4E86\u4E2A\u6109\u5FEB\u7684\u51B3\u5B9A


clear                      # \u5F00\u59CB\u4E4B\u524D\u7684\u6E05\u5C4F\u52A8\u4F5C

echo &quot;0: \${Countries[*]}&quot;  # \u4ECE\u7D22\u5F150\u5F00\u59CB\u5217\u51FA\u6574\u4E2A\u6570\u7EC4.

number_of_elements=\${#Countries[@]}
let &quot;comparisons = $number_of_elements - 1&quot;

count=1 # Pass number.

while [ &quot;$comparisons&quot; -gt 0 ]          # \u5F00\u59CB\u5916\u90E8\u5FAA\u73AF
do

  index=0  # \u5728\u6BCF\u8F6E\u5FAA\u73AF\u5F00\u59CB\u4E4B\u524D\uFF0C\u91CD\u7F6E\u7D22\u5F15\u3002

  while [ &quot;$index&quot; -lt &quot;$comparisons&quot; ] # \u5F00\u59CB\u5185\u90E8\u5FAA\u73AF\u3002
  do
    if [ \${Countries[$index]} \\&gt; \${Countries[\`expr $index + 1\`]} ]
	# \u5982\u679C\u539F\u6765\u7684\u6392\u5E8F\u6B21\u5E8F\u4E0D\u5BF9...
	# \u56DE\u60F3\u4E00\u4E0B, \u5728\u5355\u62EC\u53F7\u4E2D,
	#+ \\&gt;\u662FASCII\u7801\u7684\u6BD4\u8F83\u64CD\u4F5C\u7B26.

	# if [[ \${Countries[$index]} &gt; \${Countries[\`expr $index + 1\`]} ]]
	#+ \u8FD9\u6837\u4E5F\u884C.
    then
      exchange $index \`expr $index + 1\`  # \u4EA4\u6362
    fi
    let &quot;index += 1&quot;  #\u6216\u8005, index+=1 \u5728Bash 3.1\u4E4B\u540E\u7684\u7248\u672C\u624D\u80FD\u8FD9\u4E48\u7528.
  done # \u5185\u90E8\u5FAA\u73AF\u7ED3\u675F

  # ----------------------------------------------------------------------
# Paulo Marcel Coelho Aragao \u5EFA\u8BAE\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u66F4\u7B80\u5355\u7684for\u5FAA\u73AF
#
# for (( last = $number_of_elements - 1 ; last &gt; 0 ; last-- ))
##                     Fix by C.Y. Hunt          ^   (Thanks!)
# do
#     for (( i = 0 ; i &lt; last ; i++ ))
#     do
#		[[ &quot;\${Countries[$i]}&quot; &gt; &quot;\${Countries[$((i+1))]}&quot; ]] \\
#    		&amp;&amp; exchange $i $((i+1))
#     done
# done
# ----------------------------------------------------------------------


let &quot;comparisons -= 1&quot; #  \u56E0\u4E3A\u6700&quot;\u91CD&quot;\u7684\u5143\u7D20\u5230\u4E86\u5E95\u90E8,
                       #+ \u6240\u4EE5\u6BCF\u8F6E\u6211\u4EEC\u53EF\u4EE5\u5C11\u505A\u4E00\u6B21\u6BD4\u8F83\u3002

echo
echo &quot;$count: \${Countries[@]}&quot;  # \u6BCF\u8F6E\u7ED3\u675F\u540E, \u90FD\u6253\u5370\u4E00\u6B21\u6570\u7EC4.
echo
let &quot;count += 1&quot;                # \u589E\u52A0\u4F20\u9012\u8BA1\u6570.

done                            # \u5916\u90E8\u5FAA\u73AF\u7ED3\u675F
                                # \u81F3\u6B64, \u5168\u90E8\u5B8C\u6210.
exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><hr><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u6570\u7EC4\u4E2D\u5D4C\u5957\u6570\u7EC4\u4E48\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# &quot;\u5D4C\u5957&quot; \u6570\u7EC4.

#  Michael Zick \u63D0\u4F9B\u4E86\u8FD9\u4E2A\u7528\u4F8B\u3002
#+ William Park\u505A\u4E86\u4E00\u4E9B\u4FEE\u6B63\u548C\u8BF4\u660E.

AnArray=( $(ls --inode --ignore-backups --almost-all \\
        --directory --full-time --color=none --time=status \\
        --sort=time -l \${PWD} ) )  # Commands and options.

# \u7A7A\u683C\u662F\u6709\u610F\u4E49\u7684 . . . \u5E76\u4E14\u4E0D\u8981\u5728\u4E0A\u8FB9\u7528\u5F15\u53F7\u5F15\u7528\u4EFB\u4F55\u4E1C\u897F.

SubArray=( \${AnArray[@]:11:1}  \${AnArray[@]:6:5} )
#  \u8FD9\u4E2A\u6570\u7EC4\u6709\u516D\u4E2A\u5143\u7D20:
#+     SubArray=( [0]=\${AnArray[11]} [1]=\${AnArray[6]} [2]=\${AnArray[7]}
#      [3]=\${AnArray[8]} [4]=\${AnArray[9]} [5]=\${AnArray[10]} )
#
#  Bash\u6570\u7EC4\u662F\u5B57\u7B26\u4E32(char *)\u7C7B\u578B
#+ \u7684(\u5FAA\u73AF)\u94FE\u8868
#  \u56E0\u6B64, \u8FD9\u4E0D\u662F\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u5D4C\u5957\u6570\u7EC4,
#+ \u53EA\u4E0D\u8FC7\u529F\u80FD\u5F88\u76F8\u4F3C\u800C\u5DF2.

echo &quot;Current directory and date of last status change:&quot;
echo &quot;\${SubArray[@]}&quot;

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><hr>`,17),W=s("\u5982\u679C\u5C06\u201C\u5D4C\u5957\u6570\u7EC4\u201D\u4E0E"),H={href:"http://tldp.org/LDP/abs/html/bashver2.html#VARREFNEW",target:"_blank",rel:"noopener noreferrer"},G=s("\u95F4\u63A5\u5F15\u7528"),K=s(" \u7EC4\u5408\u8D77\u6765\u4F7F\u7528\u7684\u8BDD\uFF0C\u5C06\u4F1A\u4EA7\u751F\u4E00\u4E9B\u975E\u5E38\u6709\u8DA3\u7684\u7528\u6CD5\u3002"),J=r(`<p>\u4F8B\u5B50 27-12. \u5D4C\u5957\u6570\u7EC4\u4E0E\u95F4\u63A5\u5F15\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# embedded-arrays.sh
# \u5D4C\u5957\u6570\u7EC4\u548C\u95F4\u63A5\u5F15\u7528.

# \u672C\u811A\u672C\u7531Dennis Leeuw \u7F16\u5199.
# \u7ECF\u8FC7\u6388\u6743, \u5728\u672C\u4E66\u4E2D\u4F7F\u7528.
# \u672C\u4E66\u4F5C\u8005\u505A\u4E86\u5C11\u8BB8\u4FEE\u6539.

ARRAY1=(
        VAR1_1=value11
        VAR1_2=value12
        VAR1_3=value13
)

ARRAY2=(
        VARIABLE=&quot;test&quot;
        STRING=&quot;VAR1=value1 VAR2=value2 VAR3=value3&quot;
        ARRAY21=\${ARRAY1[*]}
)       # \u5C06ARRAY1\u5D4C\u5957\u5230\u8FD9\u4E2A\u6570\u7EC4\u4E2D.

function print () {
        OLD_IFS=&quot;$IFS&quot;
        IFS=$&#39;\\n&#39;       #  \u8FD9\u4E48\u505A\u662F\u4E3A\u4E86\u6BCF\u884C
                        #+ \u53EA\u6253\u5370\u4E00\u4E2A\u6570\u7EC4\u5143\u7D20.
        TEST1=&quot;ARRAY2[*]&quot;
        local \${!TEST1} # \u5220\u9664\u8FD9\u4E00\u884C, \u770B\u770B\u4F1A\u53D1\u751F\u4EC0\u4E48?
        #  \u95F4\u63A5\u5F15\u7528.
        #  \u8FD9\u4F7F\u5F97$TEST1
        #+ \u53EA\u80FD\u591F\u5728\u51FD\u6570\u5185\u88AB\u8BBF\u95EE.

        #  \u8BA9\u6211\u4EEC\u770B\u770B\u8FD8\u80FD\u5E72\u70B9\u4EC0\u4E48.

        echo
        echo &quot;\\$TEST1 = $TEST1&quot;       #  \u4EC5\u4EC5\u662F\u53D8\u91CF\u540D\u5B57.
        echo; echo
        echo &quot;{\\$TEST1} = \${!TEST1}&quot;  #  \u53D8\u91CF\u5185\u5BB9.
                                      #  \u8FD9\u5C31\u662F
                                      #+ \u95F4\u63A5\u5F15\u7528\u7684\u4F5C\u7528.
        echo
        echo &quot;-------------------------------------------&quot;; echo
        echo

        # \u6253\u5370\u53D8\u91CF
        echo &quot;Variable VARIABLE: $VARIABLE&quot;

        # \u6253\u5370\u4E00\u4E2A\u5B57\u7B26\u4E32\u5143\u7D20
        IFS=&quot;$OLD_IFS&quot;
        TEST2=&quot;STRING[*]&quot;
        local \${!TEST2}      # \u95F4\u63A5\u5F15\u7528(\u540C\u4E0A).
        echo &quot;String element VAR2: $VAR2 from STRING&quot;

        # Print an array element
        TEST2=&quot;ARRAY21[*]&quot;
		local \${!TEST2}      # \u95F4\u63A5\u5F15\u7528(\u540C\u4E0A).
		echo &quot;Array element VAR1_1: $VAR1_1 from ARRAY21&quot;
}

print
echo

exit 0

# \u811A\u672C\u4F5C\u8005\u6CE8,
#+ &quot;\u4F60\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u5C06\u5176\u6269\u5C55\u6210\u4E00\u4E2A\u80FD\u521B\u5EFAhash \u7684Bash \u811A\u672C.&quot;
# (\u96BE) \u7559\u7ED9\u8BFB\u8005\u7684\u7EC3\u4E60: \u5B9E\u73B0\u5B83.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><hr><p>\u6570\u7EC4\u4F7F\u5F97\u57C3\u62C9\u6258\u8272\u5C3C\u7D20\u6570\u7B5B\u5B50\u6709\u4E86shell\u7248\u672C\u7684\u5B9E\u73B0. \u5F53\u7136, \u5982\u679C\u4F60\u9700\u8981\u7684\u662F\u8FFD\u6C42\u6548\u7387\u7684\u5E94\u7528, \u90A3\u4E48\u5C31 \u5E94\u8BE5\u4F7F\u7528\u7F16\u8BD1\u884C\u8BED\u8A00\u6765\u5B9E\u73B0, \u6BD4\u5982C\u8BED\u8A00. \u56E0\u4E3A\u811A\u672C\u8FD0\u884C\u7684\u592A\u6162\u4E86.</p><p>\u4F8B\u5B50 27-13. \u57C3\u62C9\u6258\u8272\u5C3C\u7D20\u6570\u7B5B\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# sieve.sh (ex68.sh)

# \u57C3\u62C9\u6258\u8272\u5C3C\u7D20\u6570\u7B5B\u5B50
# \u627E\u7D20\u6570\u7684\u7ECF\u5178\u7B97\u6CD5.

# \u5728\u540C\u7B49\u6570\u503C\u7684\u8303\u56F4\u5185,
#+ \u8FD9\u4E2A\u811A\u672C\u8FD0\u884C\u7684\u901F\u5EA6\u6BD4C\u7248\u672C\u6162\u7684\u591A.

LOWER_LIMIT=1       # \u4ECE1\u5F00\u59CB.
UPPER_LIMIT=1000    # \u52301000.
# (\u5982\u679C\u4F60\u65F6\u95F4\u5F88\u591A\u7684\u8BDD . . . \u4F60\u53EF\u4EE5\u5C06\u8FD9\u4E2A\u6570\u503C\u8C03\u7684\u5F88\u9AD8.)

PRIME=1
NON_PRIME=0

let SPLIT=UPPER_LIMIT/2
# \u4F18\u5316:
# \u53EA\u9700\u8981\u6D4B\u8BD5\u4E2D\u95F4\u5230\u6700\u5927\u7684\u503C,\u4E3A\u4EC0\u4E48?

declare -a Primes
# Primes[] \u662F\u4E2A\u6570\u7EC4.


initialize ()
{
	# \u521D\u59CB\u5316\u6570\u7EC4.
	i=$LOWER_LIMIT
	until [ &quot;$i&quot; -gt &quot;$UPPER_LIMIT&quot; ]
	do
	  Primes[i]=$PRIME
	  let &quot;i += 1&quot;
	done
	#  \u5047\u5B9A\u6240\u6709\u6570\u7EC4\u6210\u5458\u90FD\u662F\u9700\u8981\u68C0\u67E5\u7684(\u7D20\u6570)
	#+ \u76F4\u5230\u68C0\u67E5\u5B8C\u6210.
}

print_primes ()
{
	# \u6253\u5370\u51FA\u6240\u6709\u6570\u7EC4Primes[]\u4E2D\u88AB\u6807\u8BB0\u4E3A\u7D20\u6570\u7684\u5143\u7D20.
	
	i=$LOWER_LIMIT

	until [ &quot;$i&quot; -gt &quot;$UPPER_LIMIT&quot; ]
	do
	  if [ &quot;\${Primes[i]}&quot; -eq &quot;$PRIME&quot; ]
	  then
		printf &quot;%8d&quot; $i
		# \u6BCF\u4E2A\u6570\u5B57\u6253\u5370\u524D\u5148\u6253\u53708\u4E2A\u7A7A\u683C, \u5728\u5076\u6570\u5217\u624D\u6253\u5370.
	  fi

	  let &quot;i += 1&quot;

	done
}

sift () # \u67E5\u51FA\u975E\u7D20\u6570.
{
	let i=$LOWER_LIMIT+1
	# \u6211\u4EEC\u4ECE2\u5F00\u59CB.

	until [ &quot;$i&quot; -gt &quot;$UPPER_LIMIT&quot; ]
	do

	if [ &quot;\${Primes[i]}&quot; -eq &quot;$PRIME&quot; ]
	# \u4E0D\u8981\u5904\u7406\u5DF2\u7ECF\u8FC7\u6EE4\u8FC7\u7684\u6570\u5B57(\u88AB\u6807\u8BC6\u4E3A\u975E\u7D20\u6570).
	then
	  t=$i

	  while [ &quot;$t&quot; -le &quot;$UPPER_LIMIT&quot; ]
	  do
		let &quot;t += $i &quot;
		Primes[t]=$NON_PRIME
		# \u6807\u8BC6\u4E3A\u975E\u7D20\u6570.
	  done 
	fi
	 
	let &quot;i += 1&quot;
	done
}

# ==============================================
# main ()
# \u7EE7\u7EED\u8C03\u7528\u51FD\u6570.
initialize
sift
print_primes
# \u8FD9\u91CC\u5C31\u662F\u88AB\u79F0\u4E3A\u7ED3\u6784\u5316\u7F16\u7A0B\u7684\u4E1C\u897F.
# ==============================================
echo

exit 0

# -------------------------------------------------------- #
# \u56E0\u4E3A\u524D\u9762\u7684&#39;exit&#39;\u8BED\u53E5, \u6240\u4EE5\u540E\u8FB9\u7684\u4EE3\u7801\u4E0D\u4F1A\u8FD0\u884C

#  \u4E0B\u8FB9\u7684\u4EE3\u7801, \u662F\u7531Stephane Chazelas \u6240\u7F16\u5199\u7684\u57C3\u62C9\u6258\u8272\u5C3C\u7D20\u6570\u7B5B\u5B50\u7684\u6539\u8FDB\u7248\u672C,
#+ \u8FD9\u4E2A\u7248\u672C\u53EF\u4EE5\u8FD0\u884C\u7684\u5FEB\u4E00\u4E9B.

# \u5FC5\u987B\u5728\u547D\u4EE4\u884C\u4E0A\u6307\u5B9A\u53C2\u6570(\u8FD9\u4E2A\u53C2\u6570\u5C31\u662F: \u5BFB\u627E\u7D20\u6570\u7684\u9650\u5236\u8303\u56F4)

UPPER_LIMIT=$1                  # \u6765\u81EA\u4E8E\u547D\u4EE4\u884C.
let SPLIT=UPPER_LIMIT/2         # \u4ECE\u4E2D\u95F4\u503C\u5230\u6700\u5927\u503C.

Primes=( &#39;&#39; $(seq $UPPER_LIMIT) )

i=1
until (( ( i += 1 ) &gt; SPLIT ))  # \u4EC5\u9700\u8981\u4ECE\u4E2D\u95F4\u503C\u68C0\u67E5.
do
  if [[ -n \${Primes[i]} ]]
  then
    t=$i
    until (( ( t += i ) &gt; UPPER_LIMIT ))
    do
      Primes[t]=
    done
  fi 
done
echo \${Primes[*]}

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br></div></div><p>\u4F8B\u5B50 27-14. \u57C3\u62C9\u6258\u8272\u5C3C\u7D20\u6570\u7B5B\u5B50\uFF0C\u4F18\u5316\u7248</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u4F18\u5316\u8FC7\u7684\u57C3\u62C9\u6258\u8272\u5C3C\u7D20\u6570\u7B5B\u5B50
# \u811A\u672C\u7531Jared Martin\u7F16\u5199, ABS Guide \u7684\u4F5C\u8005\u4F5C\u4E86\u5C11\u8BB8\u4FEE\u6539.
# \u5728ABS Guide \u4E2D\u7ECF\u8FC7\u4E86\u8BB8\u53EF\u800C\u4F7F\u7528(\u611F\u8C22!).

# \u57FA\u4E8EAdvanced Bash Scripting Guide\u4E2D\u7684\u811A\u672C.
# http://tldp.org/LDP/abs/html/arrays.html#PRIMES0 (ex68.sh).

# http://www.cs.hmc.edu/~oneill/papers/Sieve-JFP.pdf (\u5F15\u7528)
# Check results against http://primes.utm.edu/lists/small/1000.txt

# Necessary but not sufficient would be, e.g.,
#     (($(sieve 7919 | wc -w) == 1000)) &amp;&amp; echo &quot;7919 is the 1000th prime&quot;

UPPER_LIMIT=\${1:?&quot;Need an upper limit of primes to search.&quot;}

Primes=( &#39;&#39; $(seq \${UPPER_LIMIT}) )

typeset -i i t
Primes[i=1]=&#39;&#39; # 1\u4E0D\u662F\u7D20\u6570 
until (( ( i += 1 ) &gt; (\${UPPER_LIMIT}/i) ))  # \u53EA\u9700\u8981ith-way \u68C0\u67E5.
  do                                         # \u4E3A\u4EC0\u4E48?
    if ((\${Primes[t=i*(i-1), i]}))
    # \u5F88\u5C11\u89C1\uFF0C \u4F46\u662F\u5F88\u6709\u6307\u5BFC\u610F\u4E49, \u5728\u4E0B\u6807\u4E2D\u4F7F\u7528\u7B97\u672F\u6269\u5C55\u3002
	then
      until (( ( t += i ) &gt; \${UPPER_LIMIT} ))
        do Primes[t]=; done
    fi
  done

# echo \${Primes[*]}
echo   # \u6539\u56DE\u539F\u6765\u7684\u811A\u672C\uFF0C\u4E3A\u4E86\u6F02\u4EAE\u7684\u6253\u5370(80-col. \u5C55\u793A).
printf &quot;%8d&quot; \${Primes[*]}
echo; echo

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,8),j=s("\u4E0A\u8FB9\u7684\u8FD9\u4E2A\u4F8B\u5B50\u662F\u57FA\u4E8E\u6570\u7EC4\u7684\u7D20\u6570\u4EA7\u751F\u5668, \u8FD8\u6709\u4E0D\u4F7F\u7528\u6570\u7EC4\u7684\u7D20\u6570\u4EA7\u751F\u5668"),nn={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#PRIMES",target:"_blank",rel:"noopener noreferrer"},sn=s("\u4F8B\u5B50A-15"),an=s(" \u548C"),en={href:"http://tldp.org/LDP/abs/html/mathc.html#PRIMES2",target:"_blank",rel:"noopener noreferrer"},rn=s("\u4F8B\u5B50 16-46"),ln=s("\uFF0C\u8BA9\u6211\u4EEC\u6765\u6BD4\u8F83\u4E00\u756A."),pn=r(`<hr><p>\u6570\u7EC4\u53EF\u4EE5\u8FDB\u884C\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7684\u6269\u5C55, \u8FD9\u6837\u5C31\u53EF\u4EE5\u6A21\u62DF\u4E00\u4E9BBash\u539F\u672C\u4E0D\u652F\u6301\u7684\u6570\u636E\u7ED3\u6784.</p><p>\u4F8B\u5B50 27-15. \u6A21\u62DF\u4E00\u4E2A\u538B\u5165\u6808</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# stack.sh: \u6A21\u62DF\u538B\u5165\u6808

# \u7C7B\u4F3C\u4E8ECPU \u6808, \u538B\u5165\u6808\u4F9D\u6B21\u4FDD\u5B58\u6570\u636E\u9879, 
#+ \u4F46\u662F\u53D6\u6570\u636E\u65F6, \u5374\u53CD\u5E8F\u8FDB\u884C, \u540E\u8FDB\u5148\u51FA.

BP=100		#  \u6808\u6570\u7EC4\u7684\u57FA\u5740\u6307\u9488.
			#  \u4ECE\u5143\u7D20100 \u5F00\u59CB.

SP=$BP		#  \u6808\u6307\u9488.
			#  \u5C06\u5176\u521D\u59CB\u5316\u4E3A\u6808&quot;\u57FA\u5740&quot;(\u6808\u5E95)

Data=		#  \u5F53\u524D\u6808\u7684\u6570\u636E\u5185\u5BB9.
			#  \u5FC5\u987B\u5B9A\u4E49\u4E3A\u5168\u5C40\u53D8\u91CF,
			#+ \u56E0\u4E3A\u51FD\u6570\u6240\u80FD\u591F\u8FD4\u56DE\u7684\u6574\u6570\u5B58\u5728\u8303\u56F4\u9650\u5236.

			# 100	\u57FA\u5740				&lt;-- Base Pointer
			#  99	\u7B2C\u4E00\u4E2A\u6570\u636E\u5143\u7D20
			#  98	\u7B2C\u4E8C\u4E2A\u6570\u636E\u5143\u7D20
			# ...	\u66F4\u591A\u6570\u636E
			#		\u6700\u540E\u4E00\u4E2A\u6570\u636E\u5143\u7D20	&lt;-- Stack pointer

declare -a stack

push()		# \u538B\u6808
{
	if [ -z &quot;$1&quot; ]		# \u6CA1\u6709\u53EF\u538B\u5165\u7684\u6570\u636E\u9879?
	then
		return 
	fi

	let &quot;SP -= 1&quot;		# \u66F4\u65B0\u6808\u6307\u9488.
	stack[$SP]=$1
	return 
}

pop()	 #\u4ECE\u6808\u4E2D\u5F39\u51FA\u6570\u636E\u9879. 
{ 
	Data=						# \u6E05\u7A7A\u4FDD\u5B58\u6570\u636E\u9879\u7684\u4E2D\u95F4\u53D8\u91CF

	if [ &quot;$SP&quot; -eq &quot;$BP&quot; ]		# \u6808\u7A7A?
	then
		return 
	fi						# \u8FD9\u4F7F\u5F97SP\u4E0D\u4F1A\u8D85\u8FC7100,
							#+ \u4F8B\u5982, \u8FD9\u53EF\u4EE5\u9632\u6B62\u5806\u6808\u5931\u63A7.


	Data=\${stack[$SP]}
	let &quot;SP += 1&quot;			# \u66F4\u65B0\u6808\u6307\u9488
	return
}

status_report()			# \u6253\u5370\u5F53\u524D\u72B6\u6001
{
	echo &quot;-------------------------------------&quot;
	echo &quot;REPORT&quot;
	echo &quot;Stack Pointer = $SP&quot;
	echo &quot;Just popped \\&quot;&quot;$Data&quot;\\&quot; off the stack.&quot;
	echo &quot;-------------------------------------&quot;
	echo
}


# =======================================================
# \u73B0\u5728, \u6765\u70B9\u4E50\u5B50.

echo

# \u770B\u4F60\u662F\u5426\u80FD\u4ECE\u7A7A\u6808\u91CC\u5F39\u51FA\u6570\u636E\u9879\u6765.
pop
status_report

echo

push garbage
pop
status_report			# \u538B\u5165Garbage, \u5F39\u51FAgarbage.

value1=23;			push $value1
value2=skidoo;		push $value2
value3=LAST;		push $value3

pop					# LAST
status_report
pop					# skidoo
status_report
pop					# 23
status_report		# \u540E\u8FDB\uFF0C\u5148\u51FA!

# \u6CE8\u610F: \u6808\u6307\u9488\u5728\u538B\u6808\u65F6\u51CF,
#+ \u5728\u5F39\u51FA\u65F6\u52A0.

echo

exit 0


# =======================================================
#
# \u7EC3\u4E60\uFF1A
#
# 1) \u4FEE\u6539&quot;push()&quot;\u51FD\u6570\uFF0C
# 	+ \u4F7F\u5176\u8C03\u7528\u4E00\u6B21\u5C31\u80FD\u591F\u538B\u5165\u591A\u4E2A\u6570\u636E\u9879\u3002

# 2) \u4FEE\u6539&quot;pop()&quot;\u51FD\u6570,
#	+ \u4F7F\u5176\u8C03\u7528\u4E00\u6B21\u5C31\u80FD\u5F39\u51FA\u591A\u4E2A\u6570\u636E\u9879.

# 3) \u7ED9\u90A3\u4E9B\u6709\u4E34\u754C\u64CD\u4F5C\u7684\u51FD\u6570\u6DFB\u52A0\u51FA\u9519\u68C0\u67E5.
#	 \u8BF4\u660E\u767D\u4E00\u4E9B, \u5C31\u662F\u8BA9\u8FD9\u4E9B\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u7801, 
#	+ \u8FD4\u56DE\u7684\u9519\u8BEF\u7801\u4F9D\u8D56\u4E8E\u64CD\u4F5C\u662F\u5426\u6210\u529F\u5B8C\u6210, 
#	+ \u5982\u679C\u6CA1\u6709\u6210\u529F\u5B8C\u6210, \u90A3\u4E48\u5C31\u9700\u8981\u542F\u52A8\u5408\u9002\u7684\u5904\u7406\u52A8\u4F5C.

# 4) \u4EE5\u8FD9\u4E2A\u811A\u672C\u4E3A\u57FA\u7840,
#	+ \u7F16\u5199\u4E00\u4E2A\u7528\u6808\u5B9E\u73B0\u7684\u56DB\u5219\u8FD0\u7B97\u8BA1\u7B97\u5668.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br></div></div><hr><p>\u5982\u679C\u60F3\u5BF9\u6570\u7EC4&quot;\u4E0B\u6807&quot;\u505A\u4E00\u4E9B\u6BD4\u8F83\u8BE1\u5F02\u7684\u64CD\u4F5C, \u53EF\u80FD\u9700\u8981\u4F7F\u7528\u4E2D\u95F4\u53D8\u91CF. \u5BF9\u4E8E\u90A3\u4E9B\u6709\u8FD9\u79CD\u9700\u6C42\u7684\u9879\u76EE\u6765\u8BF4, \u8FD8\u662F\u5E94\u8BE5\u8003\u8651\u4F7F\u7528\u529F\u80FD\u66F4\u52A0\u5F3A\u5927\u7684\u7F16\u7A0B\u8BED\u8A00, \u6BD4\u5982Perl\u6216C\u3002</p><p>\u4F8B\u5B50 27-16. \u590D\u6742\u7684\u6570\u7EC4\u5E94\u7528: \u63A2\u7D22\u4E00\u4E2A\u795E\u79D8\u7684\u6570\u5B66\u5E8F\u5217</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>!/bin/bash

# Douglas Hofstadter \u7684\u58F0\u540D\u72FC\u85C9\u7684\u5E8F\u5217&quot;Q-series&quot;:

# Q(1) = Q(2) = 1
# Q(n) = Q(n - Q(n-1)) + Q(n - Q(n-2)), \u5F53 n&gt;2\u65F6

#  \u8FD9\u662F\u4E00\u4E2A\u4EE4\u4EBA\u611F\u5230\u964C\u751F\u7684, \u6CA1\u6709\u89C4\u5F8B\u7684&quot;\u4E71\u5E8F&quot;\u6574\u6570\u5E8F\u5217
#+ \u5E76\u4E14\u884C\u4E3A\u4E0D\u53EF\u9884\u6D4B
#  \u5E8F\u5217\u7684\u593420\u9879, \u5982\u4E0B\u6240\u793A:
#  1 1 2 3 3 4 5 5 6 6 6 8 8 8 10 9 10 11 11 12

#  \u8BF7\u53C2\u8003\u76F8\u5173\u4E66\u7C4D, Hofstadter\u7684, &quot;_Goedel, Escher, Bach: An Eternal Golden Braid_&quot;,
#+ \u7B2C137\u9875.


LIMIT=100     # \u9700\u8981\u8BA1\u7B97\u7684\u6570\u5217\u957F\u5EA6.
LINEWIDTH=20  # \u6BCF\u884C\u6253\u5370\u7684\u4E2A\u6570.

Q[1]=1        # \u6570\u5217\u7684\u5934\u4E24\u9879\u90FD\u4E3A1.
Q[2]=1

echo
echo &quot;Q-series [$LIMIT terms]:&quot;
echo -n &quot;\${Q[1]} &quot;             # \u8F93\u51FA\u6570\u5217\u5934\u4E24\u9879.
echo -n &quot;\${Q[2]} &quot;

for ((n=3; n &lt;= $LIMIT; n++))  # C\u98CE\u683C\u7684\u5FAA\u73AF\u6761\u4EF6.
do   # Q[n] = Q[n - Q[n-1]] + Q[n - Q[n-2]]  for n&gt;2
#    \u9700\u8981\u5C06\u8868\u8FBE\u5F0F\u62C6\u5F00, \u5206\u6B65\u8BA1\u7B97,
#+   \u56E0\u4E3ABash \u4E0D\u80FD\u591F\u5F88\u597D\u7684\u5904\u7406\u590D\u6742\u6570\u7EC4\u7684\u7B97\u672F\u8FD0\u7B97.

	let &quot;n1 = $n - 1&quot;        # n-1
	let &quot;n2 = $n - 2&quot;        # n-2

	t0=\`expr $n - \${Q[n1]}\`  # n - Q[n-1]
	t1=\`expr $n - \${Q[n2]}\`  # n - Q[n-2]

	T0=\${Q[t0]}			# Q[n - Q[n-1]]
	T1=\${Q[t1]}			# Q[n - Q[n-2]]


	Q[n]=\`expr $T0 + $T1\`	# Q[n - Q[n-1]] + Q[n - Q[n-2]]
	echo -n &quot;\${Q[n]} &quot;

	if [ \`expr $n % $LINEWIDTH\` -eq 0 ]		# \u683C\u5F0F\u5316\u8F93\u51FA
	then   #      ^ \u53D6\u6A21\u64CD\u4F5C
		echo # \u628A\u6BCF\u884C\u90FD\u62C6\u4E3A20\u4E2A\u6570\u5B57\u7684\u5C0F\u5757.
	fi

done

echo

exit 0

# \u8FD9\u662FQ-series\u7684\u4E00\u4E2A\u8FED\u4EE3\u5B9E\u73B0.
# \u66F4\u76F4\u63A5\u660E\u4E86\u7684\u5B9E\u73B0\u662F\u4F7F\u7528\u9012\u5F52, \u8BF7\u8BFB\u8005\u4F5C\u4E3A\u7EC3\u4E60\u5B8C\u6210.
# \u8B66\u544A: \u4F7F\u7528\u9012\u5F52\u7684\u65B9\u6CD5\u6765\u8BA1\u7B97\u8FD9\u4E2A\u6570\u5217\u7684\u8BDD, \u4F1A\u82B1\u8D39\u975E\u5E38\u957F\u7684\u65F6\u95F4.
#+ C/C++ \u5C06\u4F1A\u8BA1\u7B97\u7684\u5FEB\u4E00\u4E9B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><hr><p>Bash\u4EC5\u4EC5\u652F\u6301\u4E00\u7EF4\u6570\u7EC4, \u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u5C0F\u624B\u6BB5, \u8FD9\u6837\u5C31\u53EF\u4EE5\u6A21\u62DF\u591A\u7EF4\u6570\u7EC4\u4E86.</p><p>\u4F8B\u5B50 27-17. \u6A21\u62DF\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u5E76\u4F7F\u5B83\u503E\u659C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# twodim.sh: \u6A21\u62DF\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4.

# \u4E00\u7EF4\u6570\u7EC4\u7531\u5355\u884C\u7EC4\u6210.
# \u4E8C\u7EF4\u6570\u7EC4\u7531\u8FDE\u7EED\u7684\u591A\u884C\u7EC4\u6210.

Rows=5
Columns=5
# 5 X 5 \u7684\u6570\u7EC4.

declare -a alpha		# char alpha [Rows] [Columns];
						# \u6CA1\u5FC5\u8981\u58F0\u660E. \u4E3A\u4EC0\u4E48?

load_alpha ()
{
	local rc=0
	local index

	for i in A B C D E F G H I J K L M N O P Q R S T U V W X Y
	do     # \u4F60\u53EF\u4EE5\u968F\u4F60\u7684\u5FC3\u610F, \u4F7F\u7528\u4EFB\u610F\u7B26\u53F7.
	  local row=\`expr $rc / $Columns\`
	  local column=\`expr $rc % $Rows\`
	  let &quot;index = $row * $Rows + $column&quot;
	  alpha[$index]=$i
	# alpha[$row][$column]
	  let &quot;rc += 1&quot;
	done
	# \u66F4\u7B80\u5355\u7684\u65B9\u6CD5:
	#+   declare -a alpha=( A B C D E F G H I J K L M N O P Q R S T U V W X Y )
	#+ \u4F46\u662F\u5982\u679C\u5199\u7684\u8BDD, \u5C31\u7F3A\u4E4F\u4E8C\u7EF4\u6570\u7EC4\u7684&quot;\u98CE\u5473&quot;\u4E86.
}

print_alpha ()
{
	local row=0
	local index
	echo
	while [ &quot;$row&quot; -lt &quot;$Rows&quot; ]   #  \u4EE5&quot;\u884C\u5E8F\u4E3A\u4E3B&quot;\u8FDB\u884C\u6253\u5370:
	do                             #+ \u884C\u53F7\u4E0D\u53D8(\u5916\u5C42\u5FAA\u73AF),							
								   #+ \u5217\u53F7\u8FDB\u884C\u589E\u957F.
	  local column=0

	  echo -n &quot;       &quot;            #  \u6309\u7167\u884C\u65B9\u5411\u6253\u5370&quot;\u6B63\u65B9\u5F62&quot;\u6570\u7EC4.

	  while [ &quot;$column&quot; -lt &quot;$Columns&quot; ]
	  do
		let &quot;index = $row * $Rows + $column&quot;
		echo -n &quot;\${alpha[index]} &quot;  # alpha[$row][$column]
		let &quot;column += 1&quot;
	  done

	  let &quot;row += 1&quot;
	  echo
	done
	# \u66F4\u7B80\u5355\u7684\u7B49\u4EF7\u5199\u6CD5\u4E3A:
	#     echo \${alpha[*]} | xargs -n $Columns
	echo 
}

filter ()     # \u8FC7\u6EE4\u6389\u8D1F\u7684\u6570\u7EC4\u4E0B\u6807.
{

	echo -n &quot;  &quot;  # \u4EA7\u751F\u503E\u659C.
				  # \u89E3\u91CA\u4E00\u4E0B, \u8FD9\u662F\u600E\u4E48\u505A\u5230\u7684.
	if [[ &quot;$1&quot; -ge 0 &amp;&amp;  &quot;$1&quot; -lt &quot;$Rows&quot; &amp;&amp; &quot;$2&quot; -ge 0 &amp;&amp; &quot;$2&quot; -lt &quot;$Columns&quot; ]]
	then
		let &quot;index = $1 * $Rows + $2&quot;
		# \u73B0\u5728, \u6309\u7167\u65CB\u8F6C\u65B9\u5411\u8FDB\u884C\u6253\u5370.
		echo -n &quot; \${alpha[index]}&quot;
		#           alpha[$row][$column]
	fi 

}

rotate ()  #  \u5C06\u6570\u7EC4\u65CB\u8F6C45\u5EA6 --
{          #+ \u4ECE\u5DE6\u4E0B\u89D2\u8FDB\u884C&quot;\u5E73\u8861&quot;.
	local row
	local column

	for (( row = Rows; row &gt; -Rows; row-- ))
	  do       # \u53CD\u5411\u6B65\u8FDB\u6570\u7EC4, \u4E3A\u4EC0\u4E48?
	  
	  for (( column = 0; column &lt; Columns; column++ ))
	  do

		if [ &quot;$row&quot; -ge 0 ]
		then
		  let &quot;t1 = $column - $row&quot;
		  let &quot;t2 = $column&quot;
		else
		  let &quot;t1 = $column&quot;
		  let &quot;t2 = $column + $row&quot;
		fi
		filter $t1 $t2			# \u5C06\u8D1F\u7684\u6570\u7EC4\u4E0B\u6807\u8FC7\u6EE4\u51FA\u6765.
								# \u5982\u679C\u4F60\u4E0D\u505A\u8FD9\u4E00\u6B65, \u5C06\u4F1A\u600E\u6837?
	  done
	  echo; echo

	done

#  \u6570\u7EC4\u65CB\u8F6C\u7684\u7075\u611F\u6765\u6E90\u4E8EHerbert Mayer \u6240\u8457\u7684
#+ &quot;Advanced C Programming on the IBM PC&quot;\u7684\u4F8B\u5B50(\u7B2C143-146\u9875)
#+ (\u53C2\u89C1\u53C2\u8003\u4E66\u76EE).
#  \u7531\u6B64\u53EF\u89C1, C\u8BED\u8A00\u80FD\u591F\u505A\u5230\u7684\u597D\u591A\u4E8B\u60C5,
#+ \u7528shell \u811A\u672C\u4E00\u6837\u80FD\u591F\u505A\u5230.
}


#--------------- \u73B0\u5728, \u8BA9\u6211\u4EEC\u5F00\u59CB\u5427. ------------#
load_alpha			# \u52A0\u8F7D\u6570\u7EC4
print_alpha			# \u6253\u5370\u6570\u7EC4.
rotate				# \u9006\u65F6\u949F\u65CB\u8F6C45\u5EA6\u6253\u5370.
#-----------------------------------------------------#

exit 0

# \u8FD9\u6709\u70B9\u505A\u4F5C, \u4E0D\u662F\u90A3\u4E48\u4F18\u96C5.

# \u7EC3\u4E60:
# -----
#  1) \u91CD\u65B0\u5B9E\u73B0\u6570\u7EC4\u52A0\u8F7D\u548C\u6253\u5370\u51FD\u6570,
#     \u8BA9\u5176\u66F4\u76F4\u89C2, \u53EF\u8BFB\u6027\u66F4\u5F3A. 
#
#  2) \u8BE6\u7EC6\u5730\u63CF\u8FF0\u65CB\u8F6C\u51FD\u6570\u7684\u539F\u7406.
#     \u63D0\u793A: \u601D\u8003\u4E00\u4E0B\u5012\u5E8F\u7D22\u5F15\u6570\u7EC4\u7684\u5B9E\u73B0.
#
#  3) \u91CD\u5199\u8FD9\u4E2A\u811A\u672C, \u6269\u5C55\u5B83, \u8BA9\u4E0D\u4EC5\u4EC5\u80FD\u591F\u652F\u6301\u975E\u6B63\u65B9\u5F62\u7684\u6570\u7EC4.
#     \u6BD4\u59826 X 4\u7684\u6570\u7EC4.
#     \u5C1D\u8BD5\u4E00\u4E0B, \u5728\u6570\u7EC4\u65CB\u8F6C\u65F6, \u505A\u5230\u6700\u5C0F&quot;\u5931\u771F&quot;.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br></div></div><p>\u4E8C\u7EF4\u6570\u7EC4\u672C\u8D28\u4E0A\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u4E00\u7EF4\u6570\u7EC4, \u53EA\u4E0D\u8FC7\u662F\u6DFB\u52A0\u4E86\u884C\u548C\u5217\u7684\u5BFB\u5740\u65B9\u5F0F, \u6765\u5F15\u7528\u548C\u64CD\u4F5C\u6570\u7EC4\u7684\u5143\u7D20\u800C\u5DF2.</p>`,13),bn=s("\u8FD9\u91CC\u6709\u4E00\u4E2A\u7CBE\u5FC3\u5236\u4F5C\u7684\u6A21\u62DF\u4E8C\u7EF4\u6570\u7EC4\u7684\u4F8B\u5B50, \u8BF7\u53C2\u8003"),un={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#LIFESLOW",target:"_blank",rel:"noopener noreferrer"},cn=s("\u4F8B\u5B50 A-10"),tn=s("."),mn=n("hr",null,null,-1),on=n("p",null,"\u8FD8\u6709\u66F4\u591A\u4F7F\u7528\u6570\u7EC4\u7684\u6709\u8DA3\u7684\u811A\u672C\uFF0C\u8BF7\u53C2\u8003\uFF1A",-1),hn={href:"http://tldp.org/LDP/abs/html/commandsub.html#AGRAM2",target:"_blank",rel:"noopener noreferrer"},dn=s("\u4F8B\u5B50 12-3"),qn={href:"http://tldp.org/LDP/abs/html/mathc.html#PRIMES2",target:"_blank",rel:"noopener noreferrer"},$n=s("\u4F8B\u5B50 16-46"),yn={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#HASHEX2",target:"_blank",rel:"noopener noreferrer"},gn=s("\u4F8B\u5B50 A-22"),_n={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#HOMEWORK",target:"_blank",rel:"noopener noreferrer"},fn=s("\u4F8B\u5B50 A-44"),xn={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#QKY",target:"_blank",rel:"noopener noreferrer"},vn=s("\u4F8B\u5B50 A-41"),An={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#NIM",target:"_blank",rel:"noopener noreferrer"},Pn=s("\u4F8B\u5B50 A-42");function wn(Rn,In){const l=b("RouterLink"),e=b("ExternalLinkIcon");return t(),u(c,null,[o,n("p",null,[h,a(l,{to:"/code/shell/part2/04_3_bash_variables_are_untyped.html"},{default:p(()=>[d]),_:1}),q]),$,n("p",null,[y,a(l,{to:"/code/shell/part3/10_1_manipulating_strings.html"},{default:p(()=>[g]),_:1}),_]),f,n("p",null,[a(l,{to:"/code/shell/part3/12_command_substitution.html"},{default:p(()=>[x]),_:1}),v]),A,n("p",null,[P,a(l,{to:"/code/shell/part4/15_internal_commands_and_builtins.html"},{default:p(()=>[w]),_:1}),R,n("a",I,[T,a(e)]),E]),L,C,k,n("p",null,[S,M,n("a",B,[N,Q,a(e)]),Z]),D,n("p",null,[z,U,Y,O,a(l,{to:"/code/shell/part3/12_command_substitution.html"},{default:p(()=>[X]),_:1}),V]),F,n("p",null,[W,n("a",H,[G,a(e)]),K]),J,n("p",null,[j,n("a",nn,[sn,a(e)]),an,n("a",en,[rn,a(e)]),ln]),pn,n("p",null,[bn,n("a",un,[cn,a(e)]),tn]),mn,on,n("ul",null,[n("li",null,[n("a",hn,[dn,a(e)])]),n("li",null,[n("a",qn,[$n,a(e)])]),n("li",null,[n("a",yn,[gn,a(e)])]),n("li",null,[n("a",_n,[fn,a(e)])]),n("li",null,[n("a",xn,[vn,a(e)])]),n("li",null,[n("a",An,[Pn,a(e)])])])],64)}var En=i(m,[["render",wn],["__file","27_arrays.html.vue"]]);export{En as default};
