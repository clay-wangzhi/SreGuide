import{_ as r,r as p,c as b,a as s,b as a,F as i,d as n,e as l,o as t}from"./app.4792bd1f.js";const c={},u=s("h1",{id:"_19-\u5D4C\u5165\u6587\u6863",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_19-\u5D4C\u5165\u6587\u6863","aria-hidden":"true"},"#"),n(" 19 \u5D4C\u5165\u6587\u6863")],-1),o=s("blockquote",{class:"blockquote-center"},"Here and now, boys. \u2003\u2003\u2003\u2003--Aldous Huxley, Island",-1),m=n("\u5D4C\u5165\u6587\u6863\u662F\u4E00\u6BB5\u6709\u7279\u6B8A\u4F5C\u7528\u7684\u4EE3\u7801\u5757\uFF0C\u5B83\u7528 "),d={href:"http://tldp.org/LDP/abs/html/io-redirection.html#IOREDIRREF",target:"_blank",rel:"noopener noreferrer"},h=n("I/O \u91CD\u5B9A\u5411"),g=n(" \u5728\u4EA4\u4E92\u7A0B\u5E8F\u548C\u4EA4\u4E92\u547D\u4EE4\u4E2D\u4F20\u9012\u548C\u53CD\u9988\u4E00\u4E2A\u547D\u4EE4\u5217\u8868\uFF0C\u4F8B\u5982 "),q={href:"http://tldp.org/LDP/abs/html/communications.html#FTPREF",target:"_blank",rel:"noopener noreferrer"},_=n("ftp"),f=n("\uFF0C"),x={href:"http://tldp.org/LDP/abs/html/basic.html#CATREF",target:"_blank",rel:"noopener noreferrer"},E=n("cat"),v=n(" \u6216\u8005\u662F ex \u6587\u672C\u7F16\u8F91\u5668"),T=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>COMMAND &lt;&lt;InputComesFromHERE
...
...
...
InputComesFromHERE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5D4C\u5165\u6587\u6863\u7528\u9650\u5B9A\u7B26\u4F5C\u4E3A\u547D\u4EE4\u5217\u8868\u7684\u8FB9\u754C\uFF0C\u5728\u9650\u5B9A\u7B26\u524D\u9700\u8981\u4E00\u4E2A\u6307\u5B9A\u7684\u6807\u8BC6\u7B26 <code>&lt;&lt;</code>\uFF0C\u8FD9\u4F1A\u5C06\u4E00\u4E2A\u7A0B\u5E8F\u6216\u547D\u4EE4\u7684\u6807\u51C6\u8F93\u5165(stdin)\u8FDB\u884C\u91CD\u5B9A\u5411\uFF0C\u5B83\u7C7B\u4F3C <code>\u4EA4\u4E92\u7A0B\u5E8F &lt; \u547D\u4EE4\u6587\u4EF6</code> \u7684\u65B9\u5F0F\uFF0C\u5176\u4E2D\u547D\u4EE4\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>command #1
command #2
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5D4C\u5165\u6587\u6863\u7684\u683C\u5F0F\u5927\u81F4\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>interactive-program &lt;&lt;LimitString
command #1
command #2
...
LimitString
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u9650\u5B9A\u7B26\u7684\u9009\u62E9\u5FC5\u987B\u4FDD\u8BC1\u7279\u6B8A\u4EE5\u786E\u4FDD\u4E0D\u4F1A\u548C\u547D\u4EE4\u5217\u8868\u91CC\u7684\u5185\u5BB9\u53D1\u751F\u6DF7\u6DC6\u3002</p>`,6),$=n("\u6CE8\u610F\u5D4C\u5165\u6587\u6863\u6709\u65F6\u5019\u7528\u4F5C\u975E\u4EA4\u4E92\u7684\u5DE5\u5177\u548C\u547D\u4EE4\u6709\u7740\u975E\u5E38\u597D\u7684\u6548\u679C\uFF0C\u4F8B\u5982 "),O={href:"http://tldp.org/LDP/abs/html/system.html#WALLREF",target:"_blank",rel:"noopener noreferrer"},N=n("wall"),A=l(`<p>\u6837\u4F8B 19-1. broadcast: \u7ED9\u6BCF\u4E2A\u767B\u9646\u8005\u53D1\u9001\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

wall &lt;&lt;zzz23EndOfMessagezzz23
E-mail your noontime orders for pizza to the system administrator.
    (Add an extra dollar for anchovy or mushroom topping.)
# \u989D\u5916\u7684\u4FE1\u606F\u6587\u672C.
# \u6CE8\u610F: &#39;wall&#39; \u4F1A\u6253\u5370\u6CE8\u91CA\u884C.
zzz23EndOfMessagezzz23

# \u66F4\u6709\u6548\u7684\u505A\u6CD5\u662F\u901A\u8FC7
#         wall &lt; \u4FE1\u606F\u6587\u672C
#  \u7136\u800C, \u5728\u811A\u672C\u91CC\u5D4C\u5165\u4FE1\u606F\u6A21\u677F\u4E0D\u4E4F\u662F\u4E00\u79CD\u8FC5\u901F\u800C\u53C8\u968F\u6027\u7684\u89E3\u51B3\u65B9\u5F0F.

exit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6837\u4F8B: 19-2. dummyfile\uFF1A\u521B\u5EFA\u4E00\u4E2A\u6709\u4E24\u884C\u5185\u5BB9\u7684\u865A\u62DF\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

# \u975E\u4EA4\u4E92\u7684\u4F7F\u7528 \`vi\` \u7F16\u8F91\u6587\u4EF6.
# \u4EFF\u7167 &#39;sed&#39;.

E_BADARGS=85

if [ -z &quot;$1&quot; ]
then
  echo &quot;Usage: \`basename $0\` filename&quot;
  exit $E_BADARGS
fi

TARGETFILE=$1

# \u63D2\u5165\u4E24\u884C\u5230\u6587\u4EF6\u4E2D\u4FDD\u5B58
#--------Begin here document-----------#
vi $TARGETFILE &lt;&lt;x23LimitStringx23
i
This is line 1 of the example file.
This is line 2 of the example file.
^[
ZZ
x23LimitStringx23
#----------End here document-----------#

#  \u6CE8\u610F &quot;^&quot; \u5BF9 &quot;[&quot; \u8FDB\u884C\u4E86\u8F6C\u4E49 
#+ \u8FD9\u6BB5\u8D77\u5230\u4E86\u548C\u952E\u76D8\u4E0A\u6309\u4E0B Control-V &lt;Esc&gt; \u76F8\u540C\u7684\u6548\u679C.

#  Bram Moolenaar \u6307\u51FA\u8FD9\u79CD\u60C5\u51B5\u4E0B &#39;vim&#39; \u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C
#+ \u56E0\u4E3A\u5728\u4E0E\u7EC8\u7AEF\u4EA4\u4E92\u7684\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u51FA\u73B0\u95EE\u9898.

exit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u4E0A\u8FF0\u811A\u672C\u5B9E\u73B0\u4E86 <code>ex</code> \u7684\u529F\u80FD, \u800C\u4E0D\u662F <code>vi</code>. \u5D4C\u5165\u6587\u6863\u5305\u542B\u4E86 <code>ex</code> \u8DB3\u591F\u901A\u7528\u7684\u547D\u4EE4\u5217\u8868\u6765\u5F62\u6210\u81EA\u6709\u7684\u7C7B\u522B, \u6240\u4EE5\u53C8\u79F0\u4E4B\u4E3A <code>ex</code> \u811A\u672C.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
#  \u66FF\u6362\u6240\u6709\u7684\u4EE5 &quot;.txt&quot; \u540E\u7F00\u7ED3\u5C3E\u7684\u6587\u4EF6\u7684 &quot;Smith&quot; \u4E3A &quot;Jones&quot;

ORIGINAL=Smith
REPLACEMENT=Jones

for word in $(fgrep -l $ORIGINAL *.txt)
do
  # -------------------------------------
  ex $word &lt;&lt;EOF
  :%s/$ORIGINAL/$REPLACEMENT/g
  :wq
EOF
  # :%s is the &quot;ex&quot; substitution command.
  # :wq is write-and-quit.
  # -------------------------------------
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u7C7B\u4F3C\u7684 <code>ex \u811A\u672C</code> \u662F <code>cat \u811A\u672C</code>.</p><p>\u6837\u4F8B 19-3. \u4F7F\u7528 <code>cat</code> \u7684\u591A\u884C\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

#  &#39;echo&#39; \u53EF\u4EE5\u8F93\u51FA\u5355\u884C\u4FE1\u606F,
#+  \u4F46\u662F\u5982\u679C\u662F\u8F93\u51FA\u6D88\u606F\u5757\u5C31\u6709\u70B9\u95EE\u9898\u4E86.
#   &#39;cat&#39; \u5D4C\u5165\u6587\u6863\u5374\u80FD\u89E3\u51B3\u8FD9\u4E2A\u5C40\u9650.

cat &lt;&lt;End-of-message
-------------------------------------
This is line 1 of the message.
This is line 2 of the message.
This is line 3 of the message.
This is line 4 of the message.
This is the last line of the message.
-------------------------------------
End-of-message

#  \u66FF\u6362\u4E0A\u8FF0\u5D4C\u5165\u6587\u6863\u5185\u7684 7 \u884C\u6587\u672C
#+   cat &gt; $Newfile &lt;&lt;End-of-message
#+       ^^^^^^^^^^
#+ \u5C06\u8F93\u51FA\u8FFD\u52A0\u5230 $Newfile, \u800C\u4E0D\u662F\u6807\u51C6\u8F93\u51FA.

exit 0


#--------------------------------------------
# \u7531\u4E8E\u4E0A\u9762\u7684 &quot;exit 0&quot;\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u5C06\u4E0D\u4F1A\u751F\u6548.

# S.C. points out that the following also works.
echo &quot;-------------------------------------
This is line 1 of the message.
This is line 2 of the message.
This is line 3 of the message.
This is line 4 of the message.
This is the last line of the message.
-------------------------------------&quot;
# \u7136\u800C, \u6587\u672C\u53EF\u80FD\u4E0D\u5305\u62EC\u53CC\u5F15\u53F7\u9664\u975E\u51FA\u73B0\u4E86\u5B57\u7B26\u4E32\u9003\u9038.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><code>-</code> \u7684\u4F5C\u7528\u662F\u6807\u8BB0\u4E86\u4E00\u4E2A\u5D4C\u5165\u6587\u6863\u9650\u5236\u7B26 (&lt;&lt;-LimitString) \uFF0C\u5B83\u80FD\u6291\u5236\u8F93\u51FA\u7684\u884C\u9996\u7684 <code>tab</code> (\u975E\u7A7A\u683C). \u8FD9\u5728\u811A\u672C\u53EF\u8BFB\u6027\u65B9\u9762\u53EF\u80FD\u975E\u5E38\u6709\u7528.</p><p>\u6837\u4F8B 19-4. \u6291\u5236 tab \u7684\u591A\u884C\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u548C\u4E4B\u524D\u7684\u6837\u4F8B\u4E00\u6837, \u4F46...

#  \u5D4C\u5165\u6587\u6863\u5185\u7684 &#39;-&#39; \uFF0C\u4E5F\u5C31\u662F &lt;&lt;-
#+ \u6291\u5236\u4E86\u6587\u6863\u884C\u9996\u7684 &#39;tab&#39;,
#+ \u4F46 *\u4E0D\u662F* \u7A7A\u683C.

cat &lt;&lt;-ENDOFMESSAGE
	This is line 1 of the message.
	This is line 2 of the message.
	This is line 3 of the message.
	This is line 4 of the message.
	This is the last line of the message.
ENDOFMESSAGE
# \u811A\u672C\u7684\u8F93\u51FA\u5C06\u5DE6\u5BF9\u9F50.
# \u884C\u9996\u7684 tab \u5C06\u4E0D\u4F1A\u8F93\u51FA.

# \u4E0A\u9762 5 \u884C\u7684 &quot;\u4FE1\u606F&quot; \u4EE5 tab \u5F00\u59CB, \u4E0D\u662F\u7A7A\u683C.
# \u7A7A\u683C\u4E0D\u4F1A\u53D7\u5F71\u54CD &lt;&lt;- .

# \u6CE8\u610F\u8FD9\u4E2A\u9009\u9879\u5BF9 *\u5185\u5D4C\u7684* tab \u6CA1\u6709\u5F71\u54CD.

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u5D4C\u5165\u6587\u6863\u652F\u6301\u53C2\u6570\u548C\u547D\u4EE4\u66FF\u6362. \u56E0\u6B64\u53EF\u4EE5\u5411\u5D4C\u5165\u6587\u6863\u4F20\u9012\u4E0D\u540C\u7684\u53C2\u6570,\u53D8\u5411\u7684\u6539\u5176\u8F93\u51FA.</p><p>\u6837\u4F8B 19-5. \u53EF\u66FF\u6362\u53C2\u6570\u7684\u5D4C\u5165\u6587\u6863</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# \u53E6\u4E00\u4E2A\u4F7F\u7528\u53C2\u6570\u66FF\u6362\u7684 &#39;cat&#39; \u5D4C\u5165\u6587\u6863.

# \u8BD5\u4E00\u8BD5\u6CA1\u6709\u547D\u4EE4\u884C\u53C2\u6570,   ./scriptname
# \u8BD5\u4E00\u8BD5\u4E00\u4E2A\u547D\u4EE4\u884C\u53C2\u6570,   ./scriptname Mortimer
# \u8BD5\u8BD5\u7528\u4E00\u4E24\u4E2A\u5355\u8BCD\u5F15\u7528\u547D\u4EE4\u884C\u53C2\u6570,
#                           ./scriptname &quot;Mortimer Jones&quot;

CMDLINEPARAM=1     #  Expect at least command-line parameter.

if [ $# -ge $CMDLINEPARAM ]
then
  NAME=$1          #  If more than one command-line param,
                   #+ then just take the first.
else
  NAME=&quot;John Doe&quot;  #  Default, if no command-line parameter.
fi  

RESPONDENT=&quot;the author of this fine script&quot;  
  

cat &lt;&lt;Endofmessage

Hello, there, $NAME.
Greetings to you, $NAME, from $RESPONDENT.

# \u8FD9\u4E2A\u6CE8\u91CA\u5728\u8F93\u51FA\u65F6\u663E\u793A (\u4E3A\u4EC0\u4E48?).

Endofmessage

# \u6CE8\u610F\u8F93\u51FA\u4E86\u7A7A\u884C.
# \u6240\u4EE5\u53EF\u4EE5\u8FD9\u6837\u6CE8\u91CA.

exit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u8FD9\u4E2A\u5305\u542B\u53C2\u6570\u66FF\u6362\u7684\u5D4C\u5165\u6587\u6863\u662F\u76F8\u5F53\u6709\u7528\u7684</p><p>\u6837\u4F8B 19-6. \u4E0A\u4F20\u6587\u4EF6\u5BF9\u5230 <code>Sunsite</code> \u5165\u53E3\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# upload.sh

#  \u4E0A\u4F20\u6587\u4EF6\u5BF9 (Filename.lsm, Filename.tar.gz)
#+ \u5230 Sunsite/UNC (ibiblio.org) \u7684\u5165\u53E3\u76EE\u5F55.
#  Filename.tar.gz \u662F\u4E2A tarball.
#  Filename.lsm is \u662F\u4E2A\u63CF\u8FF0\u6587\u4EF6.
#  Sunsite \u9700\u8981 &quot;lsm&quot; \u6587\u4EF6, \u5426\u5219\u5C06\u4F1A\u9000\u56DE\u7ED9\u53D1\u9001\u8005


E_ARGERROR=85

if [ -z &quot;$1&quot; ]
then
  echo &quot;Usage: \`basename $0\` Filename-to-upload&quot;
  exit $E_ARGERROR
fi  


Filename=\`basename $1\`           # Strips pathname out of file name.

Server=&quot;ibiblio.org&quot;
Directory=&quot;/incoming/Linux&quot;
#  \u811A\u672C\u91CC\u4E0D\u9700\u8981\u786C\u7F16\u7801,
#+ \u4F46\u6700\u597D\u53EF\u4EE5\u66FF\u6362\u547D\u4EE4\u884C\u53C2\u6570.

Password=&quot;your.e-mail.address&quot;   # Change above to suit.

ftp -n $Server &lt;&lt;End-Of-Session
# -n \u7981\u7528\u81EA\u52A8\u767B\u5F55

user anonymous &quot;$Password&quot;       #  If this doesn&#39;t work, then try:
                                 #  quote user anonymous &quot;$Password&quot;
binary
bell                             # Ring &#39;bell&#39; after each file transfer.
cd $Directory
put &quot;$Filename.lsm&quot;
put &quot;$Filename.tar.gz&quot;
bye
End-Of-Session

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,18),M=n('\u5728\u5D4C\u5165\u6587\u6863\u5934\u90E8\u5F15\u7528\u6216\u8F6C\u4E49"\u9650\u5236\u7B26"\u6765\u7981\u7528\u53C2\u6570\u66FF\u6362.\u539F\u56E0\u662F '),S=s("code",null,"\u5F15\u7528/\u8F6C\u4E49",-1),L=n(" \u9650\u5B9A\u7B26\u80FD\u6709\u6548\u7684"),R={href:"http://tldp.org/LDP/abs/html/escapingsection.html#ESCP",target:"_blank",rel:"noopener noreferrer"},D=n("\u8F6C\u4E49"),C=n(' "$", "`", \u548C "" \u8FD9\u4E9B'),I={href:"http://tldp.org/LDP/abs/html/special-chars.html#SCHARLIST",target:"_blank",rel:"noopener noreferrer"},y=n("\u7279\u6B8A\u7B26\u53F7"),P=n(", \u4F7F\u4ED6\u4EEC\u7EF4\u6301\u5B57\u9762\u4E0A\u7684\u610F\u601D. (\u611F\u8C22 Allen Halsey \u6307\u51FA\u8FD9\u70B9.)"),F=l(`<p>\u6837\u4F8B 19-7. \u7981\u7528\u53C2\u6570\u66FF\u6362</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
#  A &#39;cat&#39; here-document, but with parameter substitution disabled.

NAME=&quot;John Doe&quot;
RESPONDENT=&quot;the author of this fine script&quot;  

cat &lt;&lt;&#39;Endofmessage&#39;

Hello, there, $NAME.
Greetings to you, $NAME, from $RESPONDENT.

Endofmessage

#   \u5F53&#39;\u9650\u5236\u7B26&#39;\u5F15\u7528\u6216\u8F6C\u4E49\u65F6\u4E0D\u4F1A\u6709\u53C2\u6570\u66FF\u6362.
#   \u4E0B\u9762\u7684\u5D4C\u5165\u6587\u6863\u4E5F\u6709\u540C\u6837\u7684\u6548\u679C
#   cat &lt;&lt;&quot;Endofmessage&quot;
#   cat &lt;&lt;\\Endofmessage



#   \u540C\u6837\u7684:

cat &lt;&lt;&quot;SpecialCharTest&quot;

Directory listing would follow
if limit string were not quoted.
\`ls -l\`

Arithmetic expansion would take place
if limit string were not quoted.
$((5 + 3))

A a single backslash would echo
if limit string were not quoted.
\\\\

SpecialCharTest


exit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u751F\u6210\u811A\u672C\u6216\u8005\u7A0B\u5E8F\u4EE3\u7801\u65F6\u53EF\u4EE5\u7528\u7981\u7528\u53C2\u6570\u7684\u65B9\u5F0F\u6765\u8F93\u51FA\u6587\u672C.</p><p>\u6837\u4F8B 19-8. \u751F\u6210\u5176\u4ED6\u811A\u672C\u7684\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# generate-script.sh
# Based on an idea by Albert Reiner.

OUTFILE=generated.sh         # Name of the file to generate.


# -----------------------------------------------------------
# &#39;\u5D4C\u5165\u6587\u6863\u6DB5\u76D6\u4E86\u751F\u6210\u811A\u672C\u7684\u4E3B\u4F53\u90E8\u5206.
(
cat &lt;&lt;&#39;EOF&#39;
#!/bin/bash

echo &quot;This is a generated shell script.&quot;
#  \u6CE8\u610F\u6211\u4EEC\u73B0\u5728\u5728\u4E00\u4E2A\u5B50 shell \u5185,
#+ \u6211\u4EEC\u4E0D\u80FD\u8BBF\u95EE &quot;\u5916\u90E8&quot; \u811A\u672C\u53D8\u91CF.

echo &quot;Generated file will be named: $OUTFILE&quot;
#  \u4E0A\u9762\u8FD9\u884C\u5E76\u4E0D\u80FD\u6309\u7167\u9884\u671F\u7684\u6B63\u5E38\u5DE5\u4F5C
#+ \u56E0\u4E3A\u53C2\u6570\u6269\u5C55\u5DF2\u88AB\u7981\u7528.
#  \u76F8\u53CD\u7684, \u7ED3\u679C\u662F\u6587\u5B57\u8F93\u51FA.

a=7
b=3

let &quot;c = $a * $b&quot;
echo &quot;c = $c&quot;

exit 0
EOF
) &gt; $OUTFILE
# -----------------------------------------------------------

#  \u5728\u4E0A\u8FF0\u7684\u5D4C\u5165\u6587\u6863\u5185\u5F15\u7528&#39;\u9650\u5236\u7B26&#39;\u9632\u6B62\u53D8\u91CF\u6269\u5C55

if [ -f &quot;$OUTFILE&quot; ]
then
  chmod 755 $OUTFILE
  # \u751F\u6210\u53EF\u6267\u884C\u6587\u4EF6.
else
  echo &quot;Problem in creating file: \\&quot;$OUTFILE\\&quot;&quot;
fi

#  \u8FD9\u4E2A\u65B9\u6CD5\u9002\u7528\u4E8E\u751F\u6210 C, Perl, Python, Makefiles \u7B49\u7B49

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div>`,5),w=n("\u53EF\u4EE5\u4ECE\u5D4C\u5165\u6587\u6863\u7684\u8F93\u51FA\u8BBE\u7F6E\u4E00\u4E2A\u53D8\u91CF\u7684\u503C. \u8FD9\u5B9E\u9645\u4E0A\u662F\u79CD\u7075\u6D3B\u7684 "),k={href:"http://tldp.org/LDP/abs/html/commandsub.html#COMMANDSUBREF",target:"_blank",rel:"noopener noreferrer"},z=n("\u547D\u4EE4\u66FF\u6362"),U=n("."),B=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>variable=$(cat &lt;&lt;SETVAR
This variable
runs over multiple lines.
SETVAR
)

echo &quot;$variable&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u540C\u6837\u7684\u811A\u672C\u91CC\u5D4C\u5165\u6587\u6863\u53EF\u4EE5\u4F5C\u4E3A\u51FD\u6570\u7684\u8F93\u5165.</p><p>\u6837\u4F8B 19-9. \u5D4C\u5165\u6587\u6863\u548C\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# here-function.sh

GetPersonalData ()
{
  read firstname
  read lastname
  read address
  read city 
  read state 
  read zipcode
} # \u53EF\u4EE5\u80AF\u5B9A\u7684\u662F\u8FD9\u5E94\u8BE5\u662F\u4E2A\u4EA4\u4E92\u5F0F\u7684\u51FD\u6570, \u4F46 . . .


# \u4F5C\u4E3A\u51FD\u6570\u7684\u8F93\u5165.
GetPersonalData &lt;&lt;RECORD001
Bozo
Bozeman
2726 Nondescript Dr.
Bozeman
MT
21226
RECORD001


echo
echo &quot;$firstname $lastname&quot;
echo &quot;$address&quot;
echo &quot;$city, $state $zipcode&quot;
echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528: \u4F5C\u4E3A\u4E00\u4E2A\u865A\u6784\u7684\u547D\u4EE4\u63A5\u53D7\u5D4C\u5165\u6587\u6863\u7684\u8F93\u51FA. \u8FD9\u6837\u5B9E\u9645\u4E0A\u5C31\u521B\u5EFA\u4E86\u4E00\u4E2A &quot;\u533F\u540D&quot; \u5D4C\u5165\u6587\u6863.</p><p>\u6837\u4F8B 19-10. &quot;\u533F\u540D&quot; \u5D4C\u5165\u6587\u6863</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

: &lt;&lt;TESTVARIABLES
\${HOSTNAME?}\${USER?}\${MAIL?}  # Print error message if one of the variables not set.
TESTVARIABLES

exit $?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u4E0A\u9762\u6280\u5DE7\u7684\u4E00\u79CD\u53D8\u4F53\u5141\u8BB8 &quot;\u53EF\u6DFB\u52A0\u6CE8\u91CA&quot; \u7684\u4EE3\u7801\u5757.</li></ul><p>\u6837\u4F8B 19-11. \u53EF\u6DFB\u52A0\u6CE8\u91CA\u7684\u4EE3\u7801\u5757</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# commentblock.sh

: &lt;&lt;COMMENTBLOCK
echo &quot;This line will not echo.&quot;
\u8FD9\u4E9B\u6CE8\u91CA\u6CA1\u6709 &quot;#&quot; \u524D\u7F00.
\u5219\u662F\u53E6\u4E00\u79CD\u6CA1\u6709 &quot;#&quot; \u524D\u7F00\u7684\u6CE8\u91CA\u65B9\u6CD5.

&amp;*@!!++=
\u4E0A\u9762\u8FD9\u884C\u4E0D\u4F1A\u4EA7\u751F\u62A5\u9519\u4FE1\u606F,
\u56E0\u4E3A bash \u89E3\u91CA\u5668\u4F1A\u5FFD\u7565\u5B83.

COMMENTBLOCK

echo &quot;Exit value of above \\&quot;COMMENTBLOCK\\&quot; is $?.&quot;   # 0
# \u6CA1\u6709\u9519\u8BEF\u8F93\u51FA.
echo

#  \u4E0A\u9762\u7684\u6280\u5DE7\u7ECF\u5E38\u7528\u4E8E\u5DE5\u4F5C\u4EE3\u7801\u7684\u6CE8\u91CA\u7528\u4F5C\u6392\u9519\u76EE\u7684
#  \u8FD9\u7701\u53BB\u4E86\u5728\u6BCF\u4E00\u884C\u5F00\u5934\u52A0\u4E0A &quot;#&quot; \u524D\u7F00,
#+ \u7136\u540E\u8C03\u8BD5\u5B8C\u4E0D\u5F97\u4E0D\u5220\u9664\u6BCF\u884C\u7684\u524D\u7F00\u7684\u91CD\u590D\u5DE5\u4F5C.
#  \u6CE8\u610F\u6211\u4EEC\u7528\u4E86 &quot;:&quot;, \u5728\u8FD9\u4E4B\u4E0A\uFF0C\u662F\u53EF\u9009\u7684.

echo &quot;Just before commented-out code block.&quot;
#  \u4E0B\u9762\u8FD9\u4E2A\u5728\u53CC\u7834\u6298\u53F7\u4E4B\u95F4\u7684\u4EE3\u7801\u4E0D\u4F1A\u88AB\u6267\u884C.
#  ===================================================================
: &lt;&lt;DEBUGXXX
for file in *
do
 cat &quot;$file&quot;
done
DEBUGXXX
#  ===================================================================
echo &quot;Just after commented-out code block.&quot;

exit 0



######################################################################
#  \u6CE8\u610F, \u7136\u800C, \u5982\u679C\u5C06\u53D8\u91CF\u4E2D\u5305\u542B\u4E00\u4E2A\u6CE8\u91CA\u7684\u4EE3\u7801\u5757\u5C06\u4F1A\u5F15\u53D1\u95EE\u9898
#  \u4F8B\u5982:


#/!/bin/bash

  : &lt;&lt;COMMENTBLOCK
  echo &quot;This line will not echo.&quot;
  &amp;*@!!++=
  \${foo_bar_bazz?}
  $(rm -rf /tmp/foobar/)
  $(touch my_build_directory/cups/Makefile)
COMMENTBLOCK


$ sh commented-bad.sh
commented-bad.sh: line 3: foo_bar_bazz: parameter null or not set

# \u6709\u6548\u7684\u8865\u6551\u529E\u6CD5\u5C31\u662F\u5728 49 \u884C\u7684\u4F4D\u7F6E\u52A0\u4E0A\u5355\u5F15\u53F7\uFF0C\u53D8\u4E3A &#39;COMMENTBLOCK&#39;.

  : &lt;&lt;&#39;COMMENTBLOCK&#39;

# \u611F\u8C22 Kurt Pfeifle \u6307\u51FA\u8FD9\u4E00\u70B9.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><ul><li>\u53E6\u4E00\u4E2A\u6F02\u4EAE\u7684\u65B9\u6CD5\u4F7F\u5F97&quot;\u81EA\u6587\u6863\u5316&quot;\u7684\u811A\u672C\u6210\u4E3A\u53EF\u80FD</li></ul><p>\u6837\u4F8B 19-12. \u81EA\u6587\u6863\u5316\u7684\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# self-document.sh: self-documenting script
# Modification of &quot;colm.sh&quot;.

DOC_REQUEST=70

if [ &quot;$1&quot; = &quot;-h&quot;  -o &quot;$1&quot; = &quot;--help&quot; ]     # \u8BF7\u6C42\u5E2E\u52A9.
then
  echo; echo &quot;Usage: $0 [directory-name]&quot;; echo
  sed --silent -e &#39;/DOCUMENTATIONXX$/,/^DOCUMENTATIONXX$/p&#39; &quot;$0&quot; |
  sed -e &#39;/DOCUMENTATIONXX$/d&#39;; exit $DOC_REQUEST; fi


: &lt;&lt;DOCUMENTATIONXX
List the statistics of a specified directory in tabular format.
---------------------------------------------------------------
The command-line parameter gives the directory to be listed.
If no directory specified or directory specified cannot be read,
then list the current working directory.

DOCUMENTATIONXX

if [ -z &quot;$1&quot; -o ! -r &quot;$1&quot; ]
then
  directory=.
else
  directory=&quot;$1&quot;
fi  

echo &quot;Listing of &quot;$directory&quot;:&quot;; echo
(printf &quot;PERMISSIONS LINKS OWNER GROUP SIZE MONTH DAY HH:MM PROG-NAME\\n&quot; \\
; ls -l &quot;$directory&quot; | sed 1d) | column -t

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,13),G=n("\u4F7F\u7528 "),X={href:"http://tldp.org/LDP/abs/html/here-docs.html#CATSCRIPTREF",target:"_blank",rel:"noopener noreferrer"},H=n("cat script"),K=n(" \u662F\u53E6\u4E00\u79CD\u53EF\u884C\u7684\u65B9\u6CD5."),V=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DOC_REQUEST=70

if [ &quot;$1&quot; = &quot;-h&quot;  -o &quot;$1&quot; = &quot;--help&quot; ]     # Request help.
then                                       # Use a &quot;cat script&quot; . . .
  cat &lt;&lt;DOCUMENTATIONXX
List the statistics of a specified directory in tabular format.
---------------------------------------------------------------
The command-line parameter gives the directory to be listed.
If no directory specified or directory specified cannot be read,
then list the current working directory.

DOCUMENTATIONXX
exit $DOC_REQUEST
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,1),J=n("\u53E6\u8BF7\u53C2\u9605 "),Q={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#ISSPAMMER2",target:"_blank",rel:"noopener noreferrer"},Z=n("\u6837\u4F8B A-28"),W=n(", "),Y={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#PETALS",target:"_blank",rel:"noopener noreferrer"},j=n("\u6837\u4F8B A-40"),nn=n(", "),sn={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#QKY",target:"_blank",rel:"noopener noreferrer"},en=n("\u6837\u4F8B A-41"),an=n(", and "),ln={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#NIM",target:"_blank",rel:"noopener noreferrer"},rn=n("\u6837\u4F8B A-42"),pn=n(" \u66F4\u591A\u6837\u4F8B\u8BF7\u9605\u8BFB\u811A\u672C\u9644\u5E26\u7684\u6CE8\u91CA\u6587\u6863."),bn=l(`<ul><li>\u5D4C\u5165\u6587\u6863\u521B\u5EFA\u4E86\u4E34\u65F6\u6587\u4EF6, \u4F46\u8FD9\u4E9B\u6587\u4EF6\u5728\u6253\u5F00\u4E14\u4E0D\u53EF\u88AB\u5176\u4ED6\u7A0B\u5E8F\u8BBF\u95EE\u540E\u5220\u9664.</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash$ bash -c &#39;lsof -a -p $$ -d0&#39; &lt;&lt; EOF
&gt; EOF
lsof    1213 bozo    0r   REG    3,5    0 30386 /tmp/t1213-0-sh (deleted)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,2),tn=s("li",null,[s("p",null,"\u67D0\u4E9B\u5DE5\u5177\u5728\u5D4C\u5165\u6587\u6863\u5185\u90E8\u5E76\u4E0D\u80FD\u6B63\u5E38\u8FD0\u884C.")],-1),cn=n("\u5728\u5D4C\u5165\u6587\u6863\u7684\u6700\u540E\u5173\u95ED\u9650\u5B9A\u7B26\u5FC5\u987B\u5728\u8D77\u59CB\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u7684\u4F4D\u7F6E\u5F00\u59CB.\u884C\u9996\u4E0D\u80FD\u662F\u7A7A\u683C. \u9650\u5236\u7B26\u540E\u5C3E\u968F\u7A7A\u683C\u540C\u6837\u4F1A\u5BFC\u81F4\u610F\u60F3\u4E0D\u5230\u7684\u884C\u4E3A.\u7A7A\u683C\u53EF\u4EE5\u9632\u6B62\u9650\u5236\u7B26\u88AB\u5F53\u505A\u5176\u4ED6\u7528\u9014. "),un={href:"http://tldp.org/LDP/abs/html/here-docs.html#FTN.AEN17822",target:"_blank",rel:"noopener noreferrer"},on=n("[1]"),mn=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

echo &quot;----------------------------------------------------------------------&quot;

cat &lt;&lt;LimitString
echo &quot;This is line 1 of the message inside the here document.&quot;
echo &quot;This is line 2 of the message inside the here document.&quot;
echo &quot;This is the final line of the message inside the here document.&quot;
     LimitString
#^^^^\u9650\u5236\u7B26\u7684\u7F29\u8FDB. \u51FA\u9519! \u8FD9\u4E2A\u811A\u672C\u5C06\u4E0D\u4F1A\u5982\u671F\u8FD0\u884C.

echo &quot;----------------------------------------------------------------------&quot;

#  \u8FD9\u4E9B\u8BC4\u8BBA\u5728\u5D4C\u5165\u6587\u6863\u8303\u56F4\u5916\u5E76\u4E0D\u80FD\u8F93\u51FA

echo &quot;Outside the here document.&quot;

exit 0

echo &quot;This line had better not echo.&quot;  # \u7D27\u8DDF\u7740\u4E2A &#39;exit&#39; \u547D\u4EE4.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>\u6709\u4E9B\u4EBA\u975E\u5E38\u806A\u660E\u7684\u4F7F\u7528\u4E86\u4E00\u4E2A\u5355\u5F15\u53F7(!)\u505A\u4E3A\u9650\u5236\u7B26. \u4F46\u8FD9\u5E76\u4E0D\u662F\u4E2A\u597D\u4E3B\u610F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8FD9\u4E2A\u53EF\u4EE5\u8FD0\u884C.
cat &lt;&lt;!
Hello!
! Three more exclamations !!!
!


# \u4F46\u662F . . .
cat &lt;&lt;!
Hello!
Single exclamation point follows!
!
!
# Crashes with an error message.


# \u7136\u800C, \u4E0B\u9762\u8FD9\u6837\u4E5F\u80FD\u8FD0\u884C.
cat &lt;&lt;EOF
Hello!
Single exclamation point follows!
!
EOF
# \u4F7F\u7528\u591A\u5B57\u7B26\u9650\u5236\u7B26\u66F4\u4E3A\u5B89\u5168.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u4E3A\u5D4C\u5165\u6587\u6863\u8BBE\u7F6E\u8FD9\u4E9B\u4EFB\u52A1\u6709\u4E9B\u590D\u6742, \u53EF\u4EE5\u8003\u8651\u4F7F\u7528 <code>expect</code>, \u4E00\u79CD\u4E13\u95E8\u7528\u6765\u548C\u7A0B\u5E8F\u8FDB\u884C\u4EA4\u4E92\u7684\u811A\u672C\u8BED\u8A00\u3002</p>`,4),dn=s("strong",null,"Notes:",-1),hn=n(" \u2003\u2003\u9664\u6B64\u4E4B\u5916, Dennis Benzinger \u6307\u51FA, "),gn={href:"http://tldp.org/LDP/abs/html/here-docs.html#LIMITSTRDASH",target:"_blank",rel:"noopener noreferrer"},qn=n("\u4F7F\u7528 <<- \u6291\u5236 tab.");function _n(fn,xn){const e=p("ExternalLinkIcon");return t(),b(i,null,[u,o,s("p",null,[m,s("a",d,[h,a(e)]),g,s("a",q,[_,a(e)]),f,s("a",x,[E,a(e)]),v]),T,s("p",null,[$,s("a",O,[N,a(e)])]),A,s("p",null,[M,S,L,s("a",R,[D,a(e)]),C,s("a",I,[y,a(e)]),P]),F,s("p",null,[w,s("a",k,[z,a(e)]),U]),B,s("p",null,[G,s("a",X,[H,a(e)]),K]),V,s("blockquote",null,[s("p",null,[J,s("a",Q,[Z,a(e)]),W,s("a",Y,[j,a(e)]),nn,s("a",sn,[en,a(e)]),an,s("a",ln,[rn,a(e)]),pn])]),bn,s("ul",null,[tn,s("li",null,[s("p",null,[cn,s("a",un,[on,a(e)])])])]),mn,s("p",null,[dn,hn,s("a",gn,[qn,a(e)])])],64)}var vn=r(c,[["render",_n],["__file","19_here_documents.html.vue"]]);export{vn as default};
