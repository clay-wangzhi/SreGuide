import{_ as r,r as l,c as o,a as s,b as a,F as p,d as n,e as t,o as i}from"./app.be088d1f.js";const b={},c=s("h1",{id:"_20-i-o-\u91CD\u5B9A\u5411",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_20-i-o-\u91CD\u5B9A\u5411","aria-hidden":"true"},"#"),n(" 20 I/O \u91CD\u5B9A\u5411")],-1),u=s("p",null,"\u76EE\u5F55",-1),m={href:"http://tldp.org/LDP/abs/html/x17974.html",target:"_blank",rel:"noopener noreferrer"},d=n("20.1 \u4F7F\u7528 exec"),_={href:"http://tldp.org/LDP/abs/html/redircb.html",target:"_blank",rel:"noopener noreferrer"},h=n("20.2 \u91CD\u5B9A\u5411\u4EE3\u7801\u5757"),g={href:"http://tldp.org/LDP/abs/html/redirapps.html",target:"_blank",rel:"noopener noreferrer"},q=n("20.3 \u5E94\u7528\u7A0B\u5E8F"),f=n("\u6709\u4E09\u4E2A\u9ED8\u8BA4\u6253\u5F00\u7684\u6587\u4EF6"),E={href:"http://tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17884",target:"_blank",rel:"noopener noreferrer"},x=n("[1]"),L=n(", "),v=s("code",null,"stdin",-1),F=n("(\u6807\u51C6\u8F93\u5165\uFF0C\u952E\u76D8),"),R=s("code",null,"stdout",-1),I=n("(\u6807\u51C6\u8F93\u51FA\uFF0C \u5C4F\u5E55)\u548C "),k=s("code",null,"stderr",-1),N=n("(\u6807\u51C6\u9519\u8BEF\uFF0C\u5C4F\u5E55\u4E0A\u8F93\u51FA\u7684\u9519\u8BEF\u4FE1\u606F)\u3002\u8FD9\u4E9B\u548C\u4EFB\u4F55\u5176\u4ED6\u6253\u5F00\u7684\u6587\u4EF6\u90FD\u53EF\u4EE5\u88AB\u91CD\u5B9A\u5411\u3002\u91CD\u5B9A\u5411\u4EC5\u4EC5\u610F\u5473\u7740\u6355\u83B7\u8F93\u51FA\u6587\u4EF6\uFF0C\u547D\u4EE4\uFF0C\u811A\u672C\uFF0C\u751A\u81F3\u662F\u4E00\u4E2A\u811A\u672C\u7684\u4EE3\u7801\u5757("),D={href:"http://tldp.org/LDP/abs/html/special-chars.html#EX8",target:"_blank",rel:"noopener noreferrer"},O=n("\u6837\u4F8B 3-1"),P=n(")\u548C("),T={href:"http://tldp.org/LDP/abs/html/special-chars.html#EX8",target:"_blank",rel:"noopener noreferrer"},$=n("\u6837\u4F8B 3-2"),A=n(") \u4F5C\u4E3A\u53E6\u4E00\u4E2A\u6587\u4EF6\uFF0C\u547D\u4EE4\uFF0C\u7A0B\u5E8F\u6216\u811A\u672C\u7684\u8F93\u5165\u3002"),M=n("\u6BCF\u4E2A\u6253\u5F00\u7684\u6587\u4EF6\u90FD\u6709\u7279\u5B9A\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002"),j={href:"http://tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17894",target:"_blank",rel:"noopener noreferrer"},C=n("[2]"),G=n(",\u800C "),U=s("code",null,"stdin",-1),V=n("\uFF0C"),w=s("code",null,"stdout",-1),y=n("\uFF0C"),B=s("code",null,"stderr",-1),X=n(" \u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u5206\u522B\u4E3A 0,1,2\u3002\u5F53\u7136\u4E86\uFF0C\u8FD8\u6709\u9644\u4EF6\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26 3 - 9\u3002\u6709\u65F6\u5019\u4E3A"),z=s("code",null,"stdin",-1),S=n("\uFF0C"),J=s("code",null,"stdout",-1),H=n("\uFF0C"),K=s("code",null,"stderr",-1),Q=n("\u4E34\u65F6\u6027\u7684\u590D\u5236\u94FE\u63A5\u5206\u914D\u8FD9\u4E9B\u9644\u52A0\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u4F1A\u975E\u5E38\u6709\u7528."),W={href:"http://tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17906",target:"_blank",rel:"noopener noreferrer"},Y=n("[3]"),Z=n("\u3002\u8FD9\u7B80\u5316\u4E86\u590D\u6742\u91CD\u5B9A\u5411\u548C\u91CD\u7EC4\u540E\u7684\u6062\u590D(\u89C1"),nn={href:"http://tldp.org/LDP/abs/html/x17974.html#REDIR1",target:"_blank",rel:"noopener noreferrer"},sn=n("\u6837\u4F8B 20-1"),en=n(")"),an=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   COMMAND_OUTPUT &gt;
      # \u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u51FA\u5230\u4E00\u4E2A\u6587\u4EF6.
      # \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\uFF0C\u5426\u5219\u8986\u76D6.

      ls -lR &gt; dir-tree.list
      # \u521B\u5EFA\u4E86\u4E00\u4E2A\u5305\u542B\u76EE\u5F55\u6811\u5217\u8868\u7684\u6587\u4EF6.

   : &gt; filename
      # &quot;&gt;&quot; \u6E05\u7A7A\u4E86\u6587\u4EF6.
      # \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u4E86\u4E2A\u7A7A\u6587\u4EF6 (\u6548\u679C\u7C7B\u4F3C &#39;touch&#39;).
      # &quot;:&quot; \u662F\u4E2A\u865A\u62DF\u5360\u4F4D\u7B26, \u4E0D\u4F1A\u6709\u8F93\u51FA.

   &gt; filename    
      # &quot;&gt;&quot; \u6E05\u7A7A\u4E86\u6587\u4EF6.
      # \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u4E86\u4E2A\u7A7A\u6587\u4EF6 (\u6548\u679C\u7C7B\u4F3C &#39;touch&#39;).
      # (\u7ED3\u679C\u548C\u4E0A\u8FF0\u7684 &quot;: &gt;&quot; \u4E00\u6837\uFF0C \u4F46\u5728\u67D0\u4E9B shell \u73AF\u5883\u4E2D\u4E0D\u80FD\u6B63\u5E38\u8FD0\u884C.)

   COMMAND_OUTPUT &gt;&gt;
      # \u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u51FA\u5230\u4E00\u4E2A\u6587\u4EF6.
      # \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\uFF0C\u5426\u5219\u65B0\u5185\u5BB9\u5728\u6587\u4EF6\u672B\u5C3E\u8FFD\u52A0.


      # \u5355\u884C\u91CD\u5B9A\u5411\u547D\u4EE4 (\u53EA\u4F5C\u7528\u4E8E\u672C\u8EAB\u6240\u5728\u7684\u90A3\u884C):
      # --------------------------------------------------------------------

   1&gt;filename
      # \u4EE5\u8986\u76D6\u7684\u65B9\u5F0F\u5C06 \u6807\u51C6\u8F93\u51FA \u91CD\u5B9A\u5411\u5230\u6587\u4EF6 &quot;filename.&quot;
   1&gt;&gt;filename
      # \u4EE5\u8FFD\u52A0\u7684\u65B9\u5F0F\u5C06 \u6807\u51C6\u8F93\u51FA \u91CD\u5B9A\u5411\u5230\u6587\u4EF6 &quot;filename.&quot;
   2&gt;filename
      # \u4EE5\u8986\u76D6\u7684\u65B9\u5F0F\u5C06 \u6807\u51C6\u9519\u8BEF \u91CD\u5B9A\u5411\u5230\u6587\u4EF6 &quot;filename.&quot;
   2&gt;&gt;filename
      # \u4EE5\u8FFD\u52A0\u7684\u65B9\u5F0F\u5C06 \u6807\u51C6\u9519\u8BEF \u91CD\u5B9A\u5411\u5230\u6587\u4EF6 &quot;filename.&quot;
   &amp;&gt;filename
      # \u4EE5\u8986\u76D6\u7684\u65B9\u5F0F\u5C06 \u6807\u51C6\u9519\u8BEF \u548C \u6807\u51C6\u8F93\u51FA \u540C\u65F6\u91CD\u5B9A\u5411\u5230\u6587\u4EF6 &quot;filename.&quot;
      # \u5728 bash 4 \u4E2D\u624D\u6709\u8FD9\u4E2A\u65B0\u529F\u80FD.

   M&gt;N
     # &quot;M&quot; \u662F\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26, \u5982\u679C\u4E0D\u660E\u786E\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4E3A 1.
     # &quot;N&quot; \u662F\u4E2A\u6587\u4EF6\u540D.
     # \u6587\u4EF6\u63CF\u8FF0\u7B26 &quot;M&quot; \u91CD\u5B9A\u5411\u5230\u6587\u4EF6 &quot;N.&quot;
   M&gt;&amp;N
     # &quot;M&quot; \u662F\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26, \u5982\u679C\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A 1.
     # &quot;N&quot; \u662F\u53E6\u4E00\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26.

      #==============================================================================

      # \u91CD\u5B9A\u5411 \u6807\u51C6\u8F93\u51FA\uFF0C\u4E00\u6B21\u4E00\u884C.
      LOGFILE=script.log

      echo &quot;This statement is sent to the log file, \\&quot;$LOGFILE\\&quot;.&quot; 1&gt;$LOGFILE
      echo &quot;This statement is appended to \\&quot;$LOGFILE\\&quot;.&quot; 1&gt;&gt;$LOGFILE
      echo &quot;This statement is also appended to \\&quot;$LOGFILE\\&quot;.&quot; 1&gt;&gt;$LOGFILE
      echo &quot;This statement is echoed to stdout, and will not appear in \\&quot;$LOGFILE\\&quot;.&quot;
      # \u8FD9\u4E9B\u91CD\u5B9A\u5411\u547D\u4EE4\u5728\u6BCF\u884C\u7ED3\u675F\u540E\u81EA\u52A8&quot;\u91CD\u7F6E&quot;.



      # \u91CD\u5B9A\u5411 \u6807\u51C6\u9519\u8BEF\uFF0C\u4E00\u6B21\u4E00\u884C.
      ERRORFILE=script.errors

      bad_command1 2&gt;$ERRORFILE       #  Error message sent to $ERRORFILE.
      bad_command2 2&gt;&gt;$ERRORFILE      #  Error message appended to $ERRORFILE.
      bad_command3                    #  Error message echoed to stderr,
                                      #+ and does not appear in $ERRORFILE.
      # \u8FD9\u4E9B\u91CD\u5B9A\u5411\u547D\u4EE4\u6BCF\u884C\u7ED3\u675F\u540E\u4F1A\u81EA\u52A8\u201C\u91CD\u7F6E\u201D.
	#=======================================================================
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   2&gt;&amp;1
      # \u91CD\u5B9A\u5411 \u6807\u51C6\u9519\u8BEF \u5230 \u6807\u51C6\u8F93\u51FA.
      # \u9519\u8BEF\u4FE1\u606F\u53D1\u9001\u5230\u6807\u51C6\u8F93\u51FA\u76F8\u540C\u7684\u4F4D\u7F6E.
        &gt;&gt;filename 2&gt;&amp;1
            bad_command &gt;&gt;filename 2&gt;&amp;1
            # \u540C\u65F6\u5C06 \u6807\u51C6\u8F93\u51FA \u548C \u6807\u51C6\u9519\u8BEF \u8FFD\u52A0\u5230\u6587\u4EF6 &quot;filename&quot; \u4E2D ...
        2&gt;&amp;1 | [command(s)]
            bad_command 2&gt;&amp;1 | awk &#39;{print $5}&#39;   # found
            # \u901A\u8FC7\u7BA1\u9053\u4F20\u9012 \u6807\u51C6\u9519\u8BEF.
            # bash 4 \u4E2D\u53EF\u4EE5\u5C06 &quot;2&gt;&amp;1 |&quot; \u7F29\u5199\u4E3A &quot;|&amp;&quot;.

   i&gt;&amp;j
      # \u91CD\u5B9A\u5411\u6587\u4EF6\u63CF\u8FF0\u7B26 i \u5230 j.
      # \u6587\u4EF6\u63CF\u8FF0\u7B26 i \u6307\u5411\u7684\u6587\u4EF6\u8F93\u51FA\u5C06\u4F1A\u91CD\u5B9A\u5411\u5230\u6587\u4EF6\u63CF\u8FF0\u7B26 j \u6307\u5411\u7684\u6587\u4EF6

   &gt;&amp;j
      # \u9ED8\u8BA4\u7684\u6807\u51C6\u8F93\u51FA (stdout) \u91CD\u5B9A\u5411\u5230 j.
      # \u6240\u6709\u7684\u6807\u51C6\u8F93\u51FA\u5C06\u4F1A\u91CD\u5B9A\u5411\u5230 j \u6307\u5411\u7684\u6587\u4EF6.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   0&lt; FILENAME
    &lt; FILENAME
      # \u4ECE\u6587\u4EF6\u63A5\u6536\u8F93\u5165.
      # \u7C7B\u4F3C\u529F\u80FD\u547D\u4EE4\u662F &quot;&gt;&quot;, \u7ECF\u5E38\u4F1A\u7EC4\u5408\u4F7F\u7528.
      #
      # grep search-word &lt;filename


   [j]&lt;&gt;filename
      #  \u6253\u5F00\u5E76\u8BFB\u5199\u6587\u4EF6 &quot;filename&quot; ,
      #+ \u5E76\u4E14\u5206\u914D\u6587\u4EF6\u63CF\u8FF0\u7B26 &quot;j&quot;.
      #  \u5982\u679C &quot;filename&quot; \u4E0D\u5B58\u5728\u5219\u521B\u5EFA.
      #  \u5982\u679C\u6587\u4EF6\u63CF\u8FF0\u7B26 &quot;j&quot; \u672A\u6307\u5B9A, \u9ED8\u8BA4\u5206\u914D\u6587\u4EF6\u63CF\u8FF0\u7B26 0, \u6807\u51C6\u8F93\u5165.
      #
      #  \u8FD9\u662F\u4E00\u4E2A\u5199\u6307\u5B9A\u6587\u4EF6\u4F4D\u7F6E\u7684\u5E94\u7528\u7A0B\u5E8F. 
      echo 1234567890 &gt; File    # \u5199\u5B57\u7B26\u4E32\u5230 &quot;File&quot;.
      exec 3&lt;&gt; File             # \u6253\u5F00\u5E76\u5206\u914D\u6587\u4EF6\u63CF\u8FF0\u7B26 3 \u7ED9 &quot;File&quot; .
      read -n 4 &lt;&amp;3             # \u8BFB\u53D6 4 \u5B57\u7B26.
      echo -n . &gt;&amp;3             # \u5199\u4E00\u4E2A\u5C0F\u6570\u70B9.
      exec 3&gt;&amp;-                 # \u5173\u95ED\u6587\u4EF6\u63CF\u8FF0\u7B26 3.
      cat File                  # ==&gt; 1234.67890
      #  \u968F\u673A\u8BBF\u95EE.



   |
      # \u7BA1\u9053.
      # \u4E00\u822C\u662F\u547D\u4EE4\u548C\u8FDB\u7A0B\u7684\u94FE\u63A5\u5DE5\u5177.
      # \u7C7B\u4F3C &quot;&gt;&quot;, \u4F46\u66F4\u4E00\u822C.
      # \u5728\u8FDE\u63A5\u547D\u4EE4\uFF0C\u811A\u672C\uFF0C\u6587\u4EF6\u548C\u7A0B\u5E8F\u65B9\u9762\u975E\u5E38\u6709\u7528.
      cat *.txt | sort | uniq &gt; result-file
      # \u6240\u6709 .txt \u6587\u4EF6\u8F93\u51FA\u8FDB\u884C\u6392\u5E8F\u5E76\u4E14\u5220\u9664\u590D\u5236\u884C,
      # \u6700\u7EC8\u4FDD\u5B58\u7ED3\u679C\u5230 &quot;result-file&quot;.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u53EF\u4EE5\u7528\u5355\u4E2A\u547D\u4EE4\u884C\u8868\u793A\u8F93\u5165\u548C\u8F93\u51FA\u7684\u591A\u4E2A\u91CD\u5B9A\u5411\u6216\u7BA1\u9053.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>command &lt; input-file &gt; output-file
# \u6216\u8005\u7B49\u4EF7:
&lt; input-file command &gt; output-file   # \u5C3D\u7BA1\u8FD9\u4E0D\u6807\u51C6.

command1 | command2 | command3 &gt; output-file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5),tn=n("\u66F4\u591A\u8BE6\u60C5\u89C1"),rn={href:"http://tldp.org/LDP/abs/html/filearchiv.html#DERPM",target:"_blank",rel:"noopener noreferrer"},ln=n("\u6837\u4F8B 16-31"),on=n(" and "),pn={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#FIFO",target:"_blank",rel:"noopener noreferrer"},bn=n("\u6837\u4F8B A-14"),cn=n("."),un=t(`<p>\u591A\u4E2A\u8F93\u51FA\u6D41\u53EF\u4EE5\u91CD\u5B9A\u5411\u5230\u4E00\u4E2A\u6587\u4EF6.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ls -yz &gt;&gt; command.log 2&gt;&amp;1
#  \u6355\u83B7\u4E0D\u5408\u6CD5\u9009\u9879 &quot;yz&quot; \u7684\u7ED3\u679C\u5230\u6587\u4EF6 &quot;command.log.&quot;
#  \u56E0\u4E3A \u6807\u51C6\u9519\u8BEF\u8F93\u51FA \u88AB\u91CD\u5B9A\u5411\u5230\u4E86\u6587\u4EF6,
#+ \u4EFB\u4F55\u9519\u8BEF\u4FE1\u606F\u90FD\u4F1A\u5728\u8FD9.

#  \u6CE8\u610F, \u7136\u800C, \u63A5\u4E0B\u6765\u7684\u8FD9\u4E2A\u6848\u4F8B\u5E76 &quot;\u4E0D\u80FD&quot; \u540C\u6837\u7684\u7ED3\u679C.
ls -yz 2&gt;&amp;1 &gt;&gt; command.log
#  \u8F93\u51FA\u4E00\u6761\u9519\u8BEF\u4FE1\u606F\uFF0C\u4F46\u662F\u4E0D\u4F1A\u5199\u5165\u5230\u6587\u4EF6.
#  \u6070\u6070\u7684, \u547D\u4EE4\u8F93\u51FA(\u8FD9\u4E2A\u4F8B\u5B50\u91CC\u4E3A\u7A7A)\u5199\u5165\u5230\u6587\u4EF6, \u4F46\u9519\u8BEF\u4FE1\u606F\u53EA\u4F1A\u5728 \u6807\u51C6\u8F93\u51FA \u8F93\u51FA.

#  \u5982\u679C\u540C\u65F6\u91CD\u5B9A\u5411 \u6807\u51C6\u8F93\u51FA \u548C \u6807\u51C6\u9519\u8BEF\u8F93\u51FA,
#+ \u547D\u4EE4\u7684\u987A\u5E8F\u4E0D\u540C\u4F1A\u5BFC\u81F4\u4E0D\u540C.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5173\u95ED\u6587\u4EF6\u63CF\u8FF0\u7B26</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>n&lt;&amp;-
	\u5173\u95ED\u8F93\u5165\u6587\u4EF6\u63CF\u8FF0\u7B26 n.

0&lt;&amp;-, &lt;&amp;-
	\u5173\u95ED\u6807\u51C6\u8F93\u5165.

n&gt;&amp;-
	\u5173\u95ED\u8F93\u51FA\u6587\u4EF6\u63CF\u8FF0\u7B26 n.

1&gt;&amp;-, &gt;&amp;-
	\u5173\u95ED\u6807\u51C6\u8F93\u51FA.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5B50\u8FDB\u7A0B\u80FD\u7EE7\u627F\u6587\u4EF6\u63CF\u8FF0\u7B26.\u8FD9\u5C31\u662F\u7BA1\u9053\u7B26\u80FD\u5DE5\u4F5C\u7684\u539F\u56E0.\u901A\u8FC7\u5173\u95ED\u6587\u4EF6\u63CF\u8FF0\u7B26\u6765\u9632\u6B62\u7EE7\u627F .</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u53EA\u91CD\u5B9A\u5411\u5230 \u6807\u51C6\u9519\u8BEF \u5230\u7BA1\u9053.

exec 3&gt;&amp;1                              # \u4FDD\u5B58\u5F53\u524D \u6807\u51C6\u8F93\u51FA &quot;\u503C&quot;.

ls -l 2&gt;&amp;1 &gt;&amp;3 3&gt;&amp;- | grep bad 3&gt;&amp;-    # \u5173\u95ED &#39;grep&#39; \u6587\u4EF6\u63CF\u8FF0\u7B26 3 (\u4F46\u4E0D\u662F &#39;ls&#39;).
#              ^^^^   ^^^^
exec 3&gt;&amp;-                              # \u73B0\u5728\u5173\u95ED\u5B83.

# \u611F\u8C22, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,6),mn=n("\u66F4\u591A\u5173\u4E8E I/O \u91CD\u5B9A\u5411\u8BE6\u60C5\u89C1 "),dn={href:"http://tldp.org/LDP/abs/html/ioredirintro.html",target:"_blank",rel:"noopener noreferrer"},_n=n("Appendix F"),hn=n("."),gn=s("h4",{id:"\u6CE8\u610F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6CE8\u610F","aria-hidden":"true"},"#"),n(" \u6CE8\u610F")],-1),qn={href:"http://tldp.org/LDP/abs/html/io-redirection.html#AEN17884",target:"_blank",rel:"noopener noreferrer"},fn=n("[1]"),En=n(" \u5728 UNIX \u548C Linux \u4E2D, \u6570\u636E\u6D41\u548C\u5468\u8FB9\u5916\u8BBE("),xn={href:"http://tldp.org/LDP/abs/html/devref1.html#DEVFILEREF",target:"_blank",rel:"noopener noreferrer"},Ln=n("device files"),vn=n(") \u90FD\u88AB\u770B\u505A\u6587\u4EF6."),Fn={href:"http://tldp.org/LDP/abs/html/io-redirection.html#AEN17894",target:"_blank",rel:"noopener noreferrer"},Rn=n("[2]"),In=n(),kn=s("code",null,"\u6587\u4EF6\u63CF\u8FF0\u7B26",-1),Nn=n(" \u4EC5\u4EC5\u662F\u64CD\u4F5C\u7CFB\u7EDF\u5206\u914D\u7684\u4E00\u4E2A\u53EF\u8FFD\u8E2A\u7684\u6253\u5F00\u7684\u6587\u4EF6\u53F7. \u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E00\u4E2A\u7B80\u5316\u7684\u6587\u4EF6\u6307\u9488. \u7C7B\u4F3C\u4E8E C \u8BED\u8A00\u7684 "),Dn=s("code",null,"\u6587\u4EF6\u53E5\u67C4",-1),On=n("."),Pn={href:"http://tldp.org/LDP/abs/html/io-redirection.html#AEN17906",target:"_blank",rel:"noopener noreferrer"},Tn=n("[3]"),$n=n(" \u5F53 bash \u521B\u5EFA\u4E00\u4E2A\u5B50\u8FDB\u7A0B\u7684\u65F6\u5019\u4F7F\u7528 "),An=s("code",null,"\u6587\u4EF6\u63CF\u8FF0\u7B26 5",-1),Mn=n(" \u4F1A\u6709\u95EE\u9898. \u4F8B\u5982 "),jn={href:"http://tldp.org/LDP/abs/html/internal.html#EXECREF",target:"_blank",rel:"noopener noreferrer"},Cn=n("exec"),Gn=n(", \u5B50\u8FDB\u7A0B\u7EE7\u627F\u4E86\u6587\u4EF6\u63CF\u8FF0\u7B26 5 (\u8BE6\u60C5\u89C1 Chet Ramey's \u5F52\u6863\u7684 e-mail, "),Un={href:"https://groups.google.com/forum/#!topic/gnu.bash.bug/E5Vdqv3tO1w",target:"_blank",rel:"noopener noreferrer"},Vn=n("SUBJECT: RE: File descriptor 5 is held open"),wn=n("). \u6700\u597D\u5C06\u8FD9\u4E2A\u6587\u4EF6\u63CF\u8FF0\u7B26\u5355\u72EC\u89C4\u907F.");function yn(Bn,Xn){const e=l("ExternalLinkIcon");return i(),o(p,null,[c,u,s("ul",null,[s("li",null,[s("a",m,[d,a(e)])]),s("li",null,[s("a",_,[h,a(e)])]),s("li",null,[s("a",g,[q,a(e)])])]),s("p",null,[f,s("a",E,[x,a(e)]),L,v,F,R,I,k,N,s("a",D,[O,a(e)]),P,s("a",T,[$,a(e)]),A]),s("p",null,[M,s("a",j,[C,a(e)]),G,U,V,w,y,B,X,z,S,J,H,K,Q,s("a",W,[Y,a(e)]),Z,s("a",nn,[sn,a(e)]),en]),an,s("p",null,[tn,s("a",rn,[ln,a(e)]),on,s("a",pn,[bn,a(e)]),cn]),un,s("p",null,[mn,s("a",dn,[_n,a(e)]),hn]),gn,s("p",null,[s("a",qn,[fn,a(e)]),En,s("a",xn,[Ln,a(e)]),vn]),s("p",null,[s("a",Fn,[Rn,a(e)]),In,kn,Nn,Dn,On]),s("p",null,[s("a",Pn,[Tn,a(e)]),$n,An,Mn,s("a",jn,[Cn,a(e)]),Gn,s("a",Un,[Vn,a(e)]),wn])],64)}var Sn=r(b,[["render",yn],["__file","20_io_redirection.html.vue"]]);export{Sn as default};
