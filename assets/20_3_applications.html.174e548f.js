import{_ as e,r as l,c as r,a as n,b as p,F as b,d as s,e as c,o as t}from"./app.37ca1d6f.js";const i={},u=n("h1",{id:"_20-3-\u5E94\u7528\u7A0B\u5E8F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_20-3-\u5E94\u7528\u7A0B\u5E8F","aria-hidden":"true"},"#"),s(" 20.3 \u5E94\u7528\u7A0B\u5E8F")],-1),m=s("\u4F7F\u7528 I/O \u91CD\u5B9A\u5411\u53EF\u4EE5\u540C\u65F6\u89E3\u6790\u548C\u56FA\u5B9A\u547D\u4EE4\u8F93\u51FA\u7684\u7247\u6BB5(see "),o={href:"http://tldp.org/LDP/abs/html/internal.html#READREDIR",target:"_blank",rel:"noopener noreferrer"},g=s("\u6837\u4F8B 15-7"),_=s("). \u8FD9\u4E5F\u4F7F\u5F97\u53EF\u4EE5\u751F\u6210\u62A5\u544A\u548C\u65E5\u5FD7\u6587\u4EF6."),d=c(`<p>\u6837\u4F8B 20-12. \u65E5\u5FD7\u8BB0\u5F55\u4E8B\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# logevents.sh
# \u4F5C\u8005: Stephane Chazelas.
# \u7528\u4E8E ABS \u8BB8\u53EF\u6307\u5357.

# \u4E8B\u4EF6\u8BB0\u5F55\u5230\u6587\u4EF6.
# \u5FC5\u987B root \u8EAB\u4EFD\u6267\u884C (\u53EF\u4EE5\u5199\u5165 /var/log).

ROOT_UID=0     # \u53EA\u6709 $UID \u4E3A 0 \u7684\u7528\u6237\u5177\u6709 root \u6743\u9650.
E_NOTROOT=67   # \u975E root \u4F1A\u62A5\u9519.


if [ &quot;$UID&quot; -ne &quot;$ROOT_UID&quot; ]
then
  echo &quot;Must be root to run this script.&quot;
  exit $E_NOTROOT
fi  


FD_DEBUG1=3
FD_DEBUG2=4
FD_DEBUG3=5

# === \u53D6\u6D88\u4E0B\u9762\u4E24\u884C\u6CE8\u91CA\u6765\u6FC0\u6D3B\u811A\u672C. ===
# LOG_EVENTS=1
# LOG_VARS=1


log()  # \u65F6\u95F4\u548C\u65E5\u671F\u5199\u5165\u65E5\u5FD7\u6587\u4EF6.
{
echo &quot;$(date)  $*&quot; &gt;&amp;7     # *\u8FFD\u52A0* \u65E5\u671F\u5230\u6587\u4EF6.
#     ^^^^^^^  \u547D\u4EE4\u66FF\u6362
                           # \u89C1\u4E0B\u6587.
}



case $LOG_LEVEL in
 1) exec 3&gt;&amp;2         4&gt; /dev/null 5&gt; /dev/null;;
 2) exec 3&gt;&amp;2         4&gt;&amp;2         5&gt; /dev/null;;
 3) exec 3&gt;&amp;2         4&gt;&amp;2         5&gt;&amp;2;;
 *) exec 3&gt; /dev/null 4&gt; /dev/null 5&gt; /dev/null;;
esac

FD_LOGVARS=6
if [[ $LOG_VARS ]]
then exec 6&gt;&gt; /var/log/vars.log
else exec 6&gt; /dev/null                     # \u6E05\u7A7A\u8F93\u51FA.
fi

FD_LOGEVENTS=7
if [[ $LOG_EVENTS ]]
then
  # exec 7 &gt;(exec gawk &#39;{print strftime(), $0}&#39; &gt;&gt; /var/log/event.log)
  # \u4E0A\u8FF0\u884C\u5728\u6700\u8FD1\u9AD8\u4E8E bash 2.04 \u7248\u672C\u4F1A\u5931\u8D25\uFF0C\u4E3A\u4EC0\u4E48?
  exec 7&gt;&gt; /var/log/event.log              # \u8FFD\u52A0\u5230 &quot;event.log&quot;.
  log                                      # \u5199\u5165\u65F6\u95F4\u548C\u65E5\u671F.
else exec 7&gt; /dev/null                     # \u6E05\u7A7A\u8F93\u51FA.
fi

echo &quot;DEBUG3: beginning&quot; &gt;&amp;\${FD_DEBUG3}

ls -l &gt;&amp;5 2&gt;&amp;4                             # \u547D\u4EE41 &gt;&amp;5 2&gt;&amp;4

echo &quot;Done&quot;                                # \u547D\u4EE42 

echo &quot;sending mail&quot; &gt;&amp;\${FD_LOGEVENTS}
# \u8F93\u51FA\u4FE1\u606F &quot;sending mail&quot; \u5230\u6587\u4EF6\u63CF\u8FF0\u7B26 #7.


exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div>`,2);function h(v,x){const a=l("ExternalLinkIcon");return t(),r(b,null,[u,n("p",null,[m,n("a",o,[g,p(a)]),_]),d],64)}var D=e(i,[["render",h],["__file","20_3_applications.html.vue"]]);export{D as default};
