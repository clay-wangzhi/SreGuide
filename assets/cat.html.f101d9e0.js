import{_ as n,e as s}from"./app.189b7edd.js";const e={},a=s(`<h1 id="\u67E5\u770B\u6587\u4EF6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a> \u67E5\u770B\u6587\u4EF6\u5185\u5BB9</h1><h3 id="cat\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#cat\u547D\u4EE4" aria-hidden="true">#</a> cat\u547D\u4EE4</h3><p>cat\u547D\u4EE4\u7684\u7528\u9014\u662F\u8FDE\u63A5\u6587\u4EF6\u6216\u6807\u51C6\u8F93\u5165\u5E76\u6253\u5370\u3002\u8FD9\u4E2A\u547D\u4EE4\u5E38\u7528\u6765\u663E\u793A\u6587\u4EF6\u5185\u5BB9\uFF0C\u6216\u8005\u5C06\u51E0\u4E2A\u6587\u4EF6\u8FDE\u63A5\u8D77\u6765\u663E\u793A\uFF0C\u6216\u8005\u4ECE\u6807\u51C6\u8F93\u5165\u8BFB\u53D6\u5185\u5BB9\u5E76\u663E\u793A\uFF0C\u5B83\u5E38\u4E0E\u91CD\u5B9A\u5411\u7B26\u53F7\u914D\u5408\u4F7F\u7528\u3002</p><h4 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>cat(\u9009\u9879)(\u53C2\u6570)</code></p><h4 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-A, --show-all           \u7B49\u4EF7\u4E8E -vET
-b, --number-nonblank    \u5BF9\u975E\u7A7A\u8F93\u51FA\u884C\u7F16\u53F7
-e                       \u7B49\u4EF7\u4E8E -vE
-E, --show-ends          \u5728\u6BCF\u884C\u7ED3\u675F\u5904\u663E\u793A $
-n, --number     \u5BF9\u8F93\u51FA\u7684\u6240\u6709\u884C\u7F16\u53F7,\u75311\u5F00\u59CB\u5BF9\u6240\u6709\u8F93\u51FA\u7684\u884C\u6570\u7F16\u53F7
-s, --squeeze-blank  \u6709\u8FDE\u7EED\u4E24\u884C\u4EE5\u4E0A\u7684\u7A7A\u767D\u884C\uFF0C\u5C31\u4EE3\u6362\u4E3A\u4E00\u884C\u7684\u7A7A\u767D\u884C 
-t                       \u4E0E -vT \u7B49\u4EF7
-T, --show-tabs          \u5C06\u8DF3\u683C\u5B57\u7B26\u663E\u793A\u4E3A ^I
-u                       (\u88AB\u5FFD\u7565)
-v, --show-nonprinting   \u4F7F\u7528 ^ \u548C M- \u5F15\u7528\uFF0C\u9664\u4E86 LFD \u548C TAB \u4E4B\u5916
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h4><p>1.\u4E00\u6B21\u663E\u793A\u6574\u4E2A\u6587\u4EF6:cat filename</p><p>2.\u4ECE\u952E\u76D8\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6:cat &gt; filename \u53EA\u80FD\u521B\u5EFA\u65B0\u6587\u4EF6,\u4E0D\u80FD\u7F16\u8F91\u5DF2\u6709\u6587\u4EF6.</p><p>3.\u5C06\u51E0\u4E2A\u6587\u4EF6\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6:cat file1 file2 &gt; file</p><h4 id="\u5E38\u7528\u8303\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09\u628A log2012.log \u7684\u6587\u4EF6\u5185\u5BB9\u52A0\u4E0A\u884C\u53F7\u540E\u8F93\u5165 log.log \u8FD9\u4E2A\u6587\u4EF6\u91CC</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat log.log 
[root@localhost test]# cat -n log2012.log &gt; log.log
# cat -n log.log 
     1  2012-01
     2  2012-02
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2\uFF09\u4F7F\u7528here doc\u6765\u751F\u6210\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat &gt;log.txt &lt;&lt;EOF
&gt; Hello
&gt; World
&gt; Linux
&gt; PWD=$(pwd)
&gt; EOF
# ls -l log.txt 
-rw-r--r-- 1 root root 37 10-28 17:07 log.txt
# cat log.txt 
Hello
World
Linux
PWD=/opt/soft/test
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u6CE8\u610F\u7C97\u4F53\u90E8\u5206\uFF0Chere doc\u53EF\u4EE5\u8FDB\u884C\u5B57\u7B26\u4E32\u66FF\u6362\u3002</p><p>\u5907\u6CE8\uFF1A</p><p>tac (\u53CD\u5411\u5217\u793A)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># tac log.txt 
PWD=/opt/soft/test
Linux
World
Hello
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>tac \u662F\u5C06 cat \u53CD\u5199\u8FC7\u6765\uFF0C\u6240\u4EE5\u4ED6\u7684\u529F\u80FD\u5C31\u8DDF cat \u76F8\u53CD\uFF0C cat \u662F\u7531\u7B2C\u4E00\u884C\u5230\u6700\u540E\u4E00\u884C\u8FDE\u7EED\u663E\u793A\u5728\u8424\u5E55\u4E0A\uFF0C\u800C tac \u5219\u662F\u7531\u6700\u540E\u4E00\u884C\u5230\u7B2C\u4E00\u884C\u53CD\u5411\u5728\u8424\u5E55\u4E0A\u663E\u793A\u51FA\u6765\uFF01</p><h3 id="less\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#less\u547D\u4EE4" aria-hidden="true">#</a> less\u547D\u4EE4</h3><p>less \u5DE5\u5177\u4E5F\u662F\u5BF9\u6587\u4EF6\u6216\u5176\u5B83\u8F93\u51FA\u8FDB\u884C\u5206\u9875\u663E\u793A\u7684\u5DE5\u5177\uFF0C\u5E94\u8BE5\u8BF4\u662Flinux\u6B63\u7EDF\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\u7684\u5DE5\u5177\uFF0C\u529F\u80FD\u6781\u5176\u5F3A\u5927\u3002less \u7684\u7528\u6CD5\u6BD4\u8D77 more \u66F4\u52A0\u7684\u6709\u5F39\u6027\u3002\u5728 more \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E76\u6CA1\u6709\u529E\u6CD5\u5411\u524D\u9762\u7FFB\uFF0C \u53EA\u80FD\u5F80\u540E\u9762\u770B\uFF0C\u4F46\u82E5\u4F7F\u7528\u4E86 less \u65F6\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 [pageup][pagedown] \u7B49\u6309\u952E\u7684\u529F\u80FD\u6765\u5F80\u524D\u5F80\u540E\u7FFB\u770B\u6587\u4EF6\uFF0C\u66F4\u5BB9\u6613\u7528\u6765\u67E5\u770B\u4E00\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\uFF01\u9664\u6B64\u4E4B\u5916\uFF0C\u5728 less \u91CC\u5934\u53EF\u4EE5\u62E5\u6709\u66F4\u591A\u7684\u641C\u7D22\u529F\u80FD\uFF0C\u4E0D\u6B62\u53EF\u4EE5\u5411\u4E0B\u641C\uFF0C\u4E5F\u53EF\u4EE5\u5411\u4E0A\u641C\u3002</p><h4 id="\u8BED\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-1" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>less(\u9009\u9879)(\u53C2\u6570)</code></p><h4 id="\u9009\u9879-1" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-1" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-b  &lt;\u7F13\u51B2\u533A\u5927\u5C0F&gt; \u8BBE\u7F6E\u7F13\u51B2\u533A\u7684\u5927\u5C0F
-e  \u5F53\u6587\u4EF6\u663E\u793A\u7ED3\u675F\u540E\uFF0C\u81EA\u52A8\u79BB\u5F00
-f  \u5F3A\u8FEB\u6253\u5F00\u7279\u6B8A\u6587\u4EF6\uFF0C\u4F8B\u5982\u5916\u56F4\u8BBE\u5907\u4EE3\u53F7\u3001\u76EE\u5F55\u548C\u4E8C\u8FDB\u5236\u6587\u4EF6
-g  \u53EA\u6807\u5FD7\u6700\u540E\u641C\u7D22\u7684\u5173\u952E\u8BCD
-i  \u5FFD\u7565\u641C\u7D22\u65F6\u7684\u5927\u5C0F\u5199
-m  \u663E\u793A\u7C7B\u4F3Cmore\u547D\u4EE4\u7684\u767E\u5206\u6BD4
-N  \u663E\u793A\u6BCF\u884C\u7684\u884C\u53F7
-o &lt;\u6587\u4EF6\u540D&gt; \u5C06less \u8F93\u51FA\u7684\u5185\u5BB9\u5728\u6307\u5B9A\u6587\u4EF6\u4E2D\u4FDD\u5B58\u8D77\u6765
-Q  \u4E0D\u4F7F\u7528\u8B66\u544A\u97F3
-s  \u663E\u793A\u8FDE\u7EED\u7A7A\u884C\u4E3A\u4E00\u884C
-S  \u884C\u8FC7\u957F\u65F6\u95F4\u5C06\u8D85\u51FA\u90E8\u5206\u820D\u5F03
-x &lt;\u6570\u5B57&gt; \u5C06\u201Ctab\u201D\u952E\u663E\u793A\u4E3A\u89C4\u5B9A\u7684\u6570\u5B57\u7A7A\u683C
/\u5B57\u7B26\u4E32\uFF1A\u5411\u4E0B\u641C\u7D22\u201C\u5B57\u7B26\u4E32\u201D\u7684\u529F\u80FD
?\u5B57\u7B26\u4E32\uFF1A\u5411\u4E0A\u641C\u7D22\u201C\u5B57\u7B26\u4E32\u201D\u7684\u529F\u80FD
n\uFF1A\u91CD\u590D\u524D\u4E00\u4E2A\u641C\u7D22\uFF08\u4E0E / \u6216 ? \u6709\u5173\uFF09
N\uFF1A\u53CD\u5411\u91CD\u590D\u524D\u4E00\u4E2A\u641C\u7D22\uFF08\u4E0E / \u6216 ? \u6709\u5173\uFF09
b  \u5411\u540E\u7FFB\u4E00\u9875
d  \u5411\u540E\u7FFB\u534A\u9875
h  \u663E\u793A\u5E2E\u52A9\u754C\u9762
Q  \u9000\u51FAless \u547D\u4EE4
u  \u5411\u524D\u6EDA\u52A8\u534A\u9875
y  \u5411\u524D\u6EDA\u52A8\u4E00\u884C
\u7A7A\u683C\u952E \u6EDA\u52A8\u4E00\u884C
\u56DE\u8F66\u952E \u6EDA\u52A8\u4E00\u9875
[pagedown]\uFF1A \u5411\u4E0B\u7FFB\u52A8\u4E00\u9875
[pageup]\uFF1A   \u5411\u4E0A\u7FFB\u52A8\u4E00\u9875
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="\u529F\u80FD-1" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-1" aria-hidden="true">#</a> \u529F\u80FD</h4><p>less \u4E0E more \u7C7B\u4F3C\uFF0C\u4F46\u4F7F\u7528 less \u53EF\u4EE5\u968F\u610F\u6D4F\u89C8\u6587\u4EF6\uFF0C\u800C more \u4EC5\u80FD\u5411\u524D\u79FB\u52A8\uFF0C\u5374\u4E0D\u80FD\u5411\u540E\u79FB\u52A8\uFF0C\u800C\u4E14 less \u5728\u67E5\u770B\u4E4B\u524D\u4E0D\u4F1A\u52A0\u8F7D\u6574\u4E2A\u6587\u4EF6\u3002</p><h4 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h4><p>1\uFF09ps\u67E5\u770B\u8FDB\u7A0B\u4FE1\u606F\u5E76\u901A\u8FC7less\u5206\u9875\u663E\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ps -ef | less
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2 ) \u67E5\u770B\u547D\u4EE4\u5386\u53F2\u4F7F\u7528\u8BB0\u5F55\u5E76\u901A\u8FC7less\u5206\u9875\u663E\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>history | less
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3\uFF09\u6D4F\u89C8\u591A\u4E2A\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>less log2013.log log2014.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u8F93\u5165 \uFF1An\u540E\uFF0C\u5207\u6362\u5230 log2014.log</p><p>\u8F93\u5165 \uFF1Ap \u540E\uFF0C\u5207\u6362\u5230log2013.log</p><h4 id="\u9644\u52A0\u5907\u6CE8" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u5907\u6CE8" aria-hidden="true">#</a> \u9644\u52A0\u5907\u6CE8</h4><p>1.\u5168\u5C4F\u5BFC\u822A</p><p>ctrl + F - \u5411\u524D\u79FB\u52A8\u4E00\u5C4F</p><p>ctrl + B - \u5411\u540E\u79FB\u52A8\u4E00\u5C4F</p><p>ctrl + D - \u5411\u524D\u79FB\u52A8\u534A\u5C4F</p><p>ctrl + U - \u5411\u540E\u79FB\u52A8\u534A\u5C4F</p><p>2.\u5355\u884C\u5BFC\u822A</p><p>j - \u5411\u524D\u79FB\u52A8\u4E00\u884C</p><p>k - \u5411\u540E\u79FB\u52A8\u4E00\u884C</p><p>3.\u5176\u5B83\u5BFC\u822A</p><p>G - \u79FB\u52A8\u5230\u6700\u540E\u4E00\u884C</p><p>g - \u79FB\u52A8\u5230\u7B2C\u4E00\u884C</p><p>q / ZZ - \u9000\u51FA less \u547D\u4EE4</p><p>4.\u5176\u5B83\u6709\u7528\u7684\u547D\u4EE4</p><p>v - \u4F7F\u7528\u914D\u7F6E\u7684\u7F16\u8F91\u5668\u7F16\u8F91\u5F53\u524D\u6587\u4EF6</p><p>h - \u663E\u793A less \u7684\u5E2E\u52A9\u6587\u6863</p><p>&amp;pattern - \u4EC5\u663E\u793A\u5339\u914D\u6A21\u5F0F\u7684\u884C\uFF0C\u800C\u4E0D\u662F\u6574\u4E2A\u6587\u4EF6</p><p>5.\u6807\u8BB0\u5BFC\u822A</p><p>\u5F53\u4F7F\u7528 less \u67E5\u770B\u5927\u6587\u4EF6\u65F6\uFF0C\u53EF\u4EE5\u5728\u4EFB\u4F55\u4E00\u4E2A\u4F4D\u7F6E\u4F5C\u6807\u8BB0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u5BFC\u822A\u5230\u6807\u6709\u7279\u5B9A\u6807\u8BB0\u7684\u6587\u672C\u4F4D\u7F6E\uFF1A</p><p>ma - \u4F7F\u7528 a \u6807\u8BB0\u6587\u672C\u7684\u5F53\u524D\u4F4D\u7F6E</p><p>&#39;a - \u5BFC\u822A\u5230\u6807\u8BB0 a \u5904</p><h3 id="more\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#more\u547D\u4EE4" aria-hidden="true">#</a> more\u547D\u4EE4</h3><p>more\u547D\u4EE4\uFF0C\u529F\u80FD\u7C7B\u4F3C cat \uFF0Ccat\u547D\u4EE4\u662F\u6574\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u4ECE\u4E0A\u5230\u4E0B\u663E\u793A\u5728\u5C4F\u5E55\u4E0A\u3002 more\u4F1A\u4EE5\u4E00\u9875\u4E00\u9875\u7684\u663E\u793A\u65B9\u4FBF\u4F7F\u7528\u8005\u9010\u9875\u9605\u8BFB\uFF0C\u800C\u6700\u57FA\u672C\u7684\u6307\u4EE4\u5C31\u662F\u6309\u7A7A\u767D\u952E\uFF08space\uFF09\u5C31\u5F80\u4E0B\u4E00\u9875\u663E\u793A\uFF0C\u6309 b \u952E\u5C31\u4F1A\u5F80\u56DE\uFF08back\uFF09\u4E00\u9875\u663E\u793A\uFF0C\u800C\u4E14\u8FD8\u6709\u641C\u5BFB\u5B57\u4E32\u7684\u529F\u80FD \u3002more\u547D\u4EE4\u4ECE\u524D\u5411\u540E\u8BFB\u53D6\u6587\u4EF6\uFF0C\u56E0\u6B64\u5728\u542F\u52A8\u65F6\u5C31\u52A0\u8F7D\u6574\u4E2A\u6587\u4EF6\u3002</p><h4 id="\u8BED\u6CD5-2" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-2" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>more(\u8BED\u6CD5)(\u53C2\u6570)</code></p><h4 id="\u9009\u9879-2" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-2" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>+n      \u4ECE\u7B2Bn\u884C\u5F00\u59CB\u663E\u793A
-n       \u5B9A\u4E49\u5C4F\u5E55\u5927\u5C0F\u4E3An\u884C
+/pattern \u5728\u6BCF\u4E2A\u6863\u6848\u663E\u793A\u524D\u641C\u5BFB\u8BE5\u5B57\u4E32\uFF08pattern\uFF09\uFF0C\u7136\u540E\u4ECE\u8BE5\u5B57\u4E32\u524D\u4E24\u884C\u4E4B\u540E\u5F00\u59CB\u663E\u793A  
-c       \u4ECE\u9876\u90E8\u6E05\u5C4F\uFF0C\u7136\u540E\u663E\u793A
-d       \u63D0\u793A\u201CPress space to continue\uFF0C\u2019q\u2019 to quit\uFF08\u6309\u7A7A\u683C\u952E\u7EE7\u7EED\uFF0C\u6309q\u952E\u9000\u51FA\uFF09\u201D\uFF0C\u7981\u7528\u54CD\u94C3\u529F\u80FD
-l        \u5FFD\u7565Ctrl+l\uFF08\u6362\u9875\uFF09\u5B57\u7B26
-p       \u901A\u8FC7\u6E05\u9664\u7A97\u53E3\u800C\u4E0D\u662F\u6EDA\u5C4F\u6765\u5BF9\u6587\u4EF6\u8FDB\u884C\u6362\u9875\uFF0C\u4E0E-c\u9009\u9879\u76F8\u4F3C
-s       \u628A\u8FDE\u7EED\u7684\u591A\u4E2A\u7A7A\u884C\u663E\u793A\u4E3A\u4E00\u884C
-u       \u628A\u6587\u4EF6\u5185\u5BB9\u4E2D\u7684\u4E0B\u753B\u7EBF\u53BB\u6389
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u529F\u80FD-2" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-2" aria-hidden="true">#</a> \u529F\u80FD</h4><p>more\u547D\u4EE4\u548Ccat\u7684\u529F\u80FD\u4E00\u6837\u90FD\u662F\u67E5\u770B\u6587\u4EF6\u91CC\u7684\u5185\u5BB9\uFF0C\u4F46\u6709\u6240\u4E0D\u540C\u7684\u662Fmore\u53EF\u4EE5\u6309\u9875\u6765\u67E5\u770B\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u8FD8\u652F\u6301\u76F4\u63A5\u8DF3\u8F6C\u884C\u7B49\u529F\u80FD\u3002</p><h4 id="\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u64CD\u4F5C\u547D\u4EE4</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Enter    \u5411\u4E0Bn\u884C\uFF0C\u9700\u8981\u5B9A\u4E49\u3002\u9ED8\u8BA4\u4E3A1\u884C
Ctrl+F   \u5411\u4E0B\u6EDA\u52A8\u4E00\u5C4F
\u7A7A\u683C\u952E  \u5411\u4E0B\u6EDA\u52A8\u4E00\u5C4F
Ctrl+B  \u8FD4\u56DE\u4E0A\u4E00\u5C4F
=       \u8F93\u51FA\u5F53\u524D\u884C\u7684\u884C\u53F7
\uFF1Af    \u8F93\u51FA\u6587\u4EF6\u540D\u548C\u5F53\u524D\u884C\u7684\u884C\u53F7
V      \u8C03\u7528vi\u7F16\u8F91\u5668
!\u547D\u4EE4   \u8C03\u7528Shell\uFF0C\u5E76\u6267\u884C\u547D\u4EE4 
q       \u9000\u51FAmore
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u5E38\u7528\u8303\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B-1" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09\u663E\u793A\u6587\u4EF6\u4E2D\u4ECE\u7B2C3\u884C\u8D77\u7684\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat log2012.log 
2012-01
2012-02
2012-03
2012-04-day1
2012-04-day2
2012-04-day3
# more +3 log2012.log 
2012-03
2012-04-day1
2012-04-day2
2012-04-day3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>2\uFF09\u4ECE\u6587\u4EF6\u4E2D\u67E5\u627E\u7B2C\u4E00\u4E2A\u51FA\u73B0&quot;day3&quot;\u5B57\u7B26\u4E32\u7684\u884C\uFF0C\u5E76\u4ECE\u8BE5\u5904\u524D\u4E24\u884C\u5F00\u59CB\u663E\u793A\u8F93\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># more +/day3 log2012.log 
...skipping
2012-04-day1
2012-04-day2
2012-04-day3
2012-05
2012-05-day1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>3\uFF09\u8BBE\u5B9A\u6BCF\u5C4F\u663E\u793A\u884C\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># more -5 log2012.log 
2012-01
2012-02
2012-03
2012-04-day1
2012-04-day2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>4\uFF09\u5217\u4E00\u4E2A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF0C\u7531\u4E8E\u5185\u5BB9\u592A\u591A\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5B66\u4F1A\u7528more\u6765\u5206\u9875\u663E\u793A\u3002\u8FD9\u5F97\u548C\u7BA1\u9053 | \u7ED3\u5408\u8D77\u6765</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#  ls -l  | more -5
\u603B\u8BA1 36
-rw-r--r-- 1 root root  308 11-01 16:49 log2012.log
-rw-r--r-- 1 root root   33 10-28 16:54 log2013.log
-rw-r--r-- 1 root root  127 10-28 16:51 log2014.log
lrwxrwxrwx 1 root root    7 10-28 15:18 log_link.log -&gt; log.log
-rw-r--r-- 1 root root   25 10-28 17:02 log.log
-rw-r--r-- 1 root root   37 10-28 17:07 log.txt
drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxrwx 2 root root 4096 10-28 14:47 test3
drwxrwxrwx 2 root root 4096 10-28 14:47 test4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u6BCF\u9875\u663E\u793A5\u4E2A\u6587\u4EF6\u4FE1\u606F\uFF0C\u6309 Ctrl+F \u6216\u8005 \u7A7A\u683C\u952E \u5C06\u4F1A\u663E\u793A\u4E0B5\u6761\u6587\u4EF6\u4FE1\u606F\u3002</p><h3 id="head\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#head\u547D\u4EE4" aria-hidden="true">#</a> head\u547D\u4EE4</h3><p>head \u4E0E tail \u5C31\u50CF\u5B83\u7684\u540D\u5B57\u4E00\u6837\u7684\u6D45\u663E\u6613\u61C2\uFF0C\u5B83\u662F\u7528\u6765\u663E\u793A\u5F00\u5934\u6216\u7ED3\u5C3E\u67D0\u4E2A\u6570\u91CF\u7684\u6587\u5B57\u533A\u5757\uFF0Chead \u7528\u6765\u663E\u793A\u6863\u6848\u7684\u5F00\u5934\u81F3\u6807\u51C6\u8F93\u51FA\u4E2D\uFF0C\u800C tail \u60F3\u5F53\u7136\u5C14\u5C31\u662F\u770B\u6863\u6848\u7684\u7ED3\u5C3E\u3002</p><h4 id="\u8BED\u6CD5-3" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-3" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>head(\u9009\u9879)(\u53C2\u6570)</code></p><h4 id="\u9009\u9879-3" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-3" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-n&lt;\u6570\u5B57&gt;\uFF1A\u6307\u5B9A\u663E\u793A\u5934\u90E8\u5185\u5BB9\u7684\u884C\u6570\uFF1B
-c&lt;\u5B57\u7B26\u6570&gt;\uFF1A\u6307\u5B9A\u663E\u793A\u5934\u90E8\u5185\u5BB9\u7684\u5B57\u7B26\u6570\uFF1B
-v\uFF1A\u603B\u662F\u663E\u793A\u6587\u4EF6\u540D\u7684\u5934\u4FE1\u606F\uFF1B
-q\uFF1A\u4E0D\u663E\u793A\u6587\u4EF6\u540D\u7684\u5934\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u529F\u80FD-3" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-3" aria-hidden="true">#</a> \u529F\u80FD</h4><p>head \u7528\u6765\u663E\u793A\u6863\u6848\u7684\u5F00\u5934\u81F3\u6807\u51C6\u8F93\u51FA\u4E2D\uFF0C\u9ED8\u8BA4head\u547D\u4EE4\u6253\u5370\u5176\u76F8\u5E94\u6587\u4EF6\u7684\u5F00\u593410\u884C\u3002</p><h4 id="\u5E38\u7528\u8303\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B-2" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09\u663E\u793A\u6587\u4EF6\u7684\u524Dn\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat log2014.log 
2014-01
2014-02
2014-03
2014-04
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
# head -n 5 log2014.log 
2014-01
2014-02
2014-03
2014-04
2014-05
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>2\uFF09\u663E\u793A\u6587\u4EF6\u524Dn\u4E2A\u5B57\u8282</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># head -c 20 log2014.log
2014-01
2014-02
2014
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>3\uFF09\u6587\u4EF6\u7684\u9664\u4E86\u6700\u540En\u4E2A\u5B57\u8282\u4EE5\u5916\u7684\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># head -c -32 log2014.log
2014-01
2014-02
2014-03
2014-04
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>4\uFF09\u8F93\u51FA\u6587\u4EF6\u9664\u4E86\u6700\u540En\u884C\u7684\u5168\u90E8\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># head -n -6 log2014.log
2014-01
2014-02
2014-03
2014-04
2014-05
2014-06
2014-07
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="tail\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#tail\u547D\u4EE4" aria-hidden="true">#</a> tail\u547D\u4EE4</h3><p>tail \u547D\u4EE4\u4ECE\u6307\u5B9A\u70B9\u5F00\u59CB\u5C06\u6587\u4EF6\u5199\u5230\u6807\u51C6\u8F93\u51FA.\u4F7F\u7528tail\u547D\u4EE4\u7684-f\u9009\u9879\u53EF\u4EE5\u65B9\u4FBF\u7684\u67E5\u9605\u6B63\u5728\u6539\u53D8\u7684\u65E5\u5FD7\u6587\u4EF6,tail -f filename\u4F1A\u628Afilename\u91CC\u6700\u5C3E\u90E8\u7684\u5185\u5BB9\u663E\u793A\u5728\u5C4F\u5E55\u4E0A,\u5E76\u4E14\u4E0D\u65AD\u5237\u65B0,\u4F7F\u4F60\u770B\u5230\u6700\u65B0\u7684\u6587\u4EF6\u5185\u5BB9.</p><h4 id="\u8BED\u6CD5-4" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-4" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p><code>tail(\u9009\u9879)(\u53C2\u6570)</code></p><h4 id="\u9009\u9879-4" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-4" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-f \u5FAA\u73AF\u8BFB\u53D6
-q \u4E0D\u663E\u793A\u5904\u7406\u4FE1\u606F
-v \u663E\u793A\u8BE6\u7EC6\u7684\u5904\u7406\u4FE1\u606F
-c&lt;\u6570\u76EE&gt; \u663E\u793A\u7684\u5B57\u8282\u6570
-n&lt;\u884C\u6570&gt; \u663E\u793A\u884C\u6570
--pid=PID \u4E0E-f\u5408\u7528,\u8868\u793A\u5728\u8FDB\u7A0BID,PID\u6B7B\u6389\u4E4B\u540E\u7ED3\u675F. 
-q, --quiet, --silent \u4ECE\u4E0D\u8F93\u51FA\u7ED9\u51FA\u6587\u4EF6\u540D\u7684\u9996\u90E8 
-s, --sleep-interval=S \u4E0E-f\u5408\u7528,\u8868\u793A\u5728\u6BCF\u6B21\u53CD\u590D\u7684\u95F4\u9694\u4F11\u7720S\u79D2 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="\u529F\u80FD-4" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-4" aria-hidden="true">#</a> \u529F\u80FD</h4><p>\u7528\u4E8E\u663E\u793A\u6307\u5B9A\u6587\u4EF6\u672B\u5C3E\u5185\u5BB9\uFF0C\u4E0D\u6307\u5B9A\u6587\u4EF6\u65F6\uFF0C\u4F5C\u4E3A\u8F93\u5165\u4FE1\u606F\u8FDB\u884C\u5904\u7406\u3002\u5E38\u7528\u67E5\u770B\u65E5\u5FD7\u6587\u4EF6\u3002</p><h4 id="\u5E38\u7528\u8303\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8303\u4F8B-3" aria-hidden="true">#</a> \u5E38\u7528\u8303\u4F8B</h4><p>1\uFF09\u663E\u793A\u6587\u4EF6\u672B\u5C3E\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># tail -n 5 log2014.log 
2014-09
2014-10
2014-11
2014-12
===========================
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u663E\u793A\u6587\u4EF6\u6700\u540E5\u884C\u5185\u5BB9</p><p>2\uFF09\u5FAA\u73AF\u67E5\u770B\u6587\u4EF6\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ping 192.168.120.204 &gt; test.log &amp;
# tail -f test.log 
PING 192.168.120.204 (192.168.120.204) 56(84) bytes of data.
64 bytes from 192.168.120.204: icmp_seq=1 ttl=64 time=0.038 ms
64 bytes from 192.168.120.204: icmp_seq=2 ttl=64 time=0.036 ms
64 bytes from 192.168.120.204: icmp_seq=3 ttl=64 time=0.033 ms
64 bytes from 192.168.120.204: icmp_seq=4 ttl=64 time=0.027 ms
64 bytes from 192.168.120.204: icmp_seq=5 ttl=64 time=0.032 ms
64 bytes from 192.168.120.204: icmp_seq=6 ttl=64 time=0.026 ms
64 bytes from 192.168.120.204: icmp_seq=7 ttl=64 time=0.030 ms
64 bytes from 192.168.120.204: icmp_seq=8 ttl=64 time=0.029 ms
64 bytes from 192.168.120.204: icmp_seq=9 ttl=64 time=0.044 ms
64 bytes from 192.168.120.204: icmp_seq=10 ttl=64 time=0.033 ms
64 bytes from 192.168.120.204: icmp_seq=11 ttl=64 time=0.027 ms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>3\uFF09\u4ECE\u7B2C5\u884C\u5F00\u59CB\u663E\u793A\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat log2014.log 
2014-01
2014-02
2014-03
2014-04
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
# tail -n +5 log2014.log
2014-05
2014-06
2014-07
2014-08
2014-09
2014-10
2014-11
2014-12
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="grep\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#grep\u547D\u4EE4" aria-hidden="true">#</a> grep\u547D\u4EE4</h3><p><strong>grep</strong>\uFF08global search regular expression(RE) and print out the line\uFF0C\u5168\u9762\u641C\u7D22\u6B63\u5219\u8868\u8FBE\u5F0F\u5E76\u628A\u884C\u6253\u5370\u51FA\u6765\uFF09\u662F\u4E00\u79CD\u5F3A\u5927\u7684\u6587\u672C\u641C\u7D22\u5DE5\u5177\uFF0C\u5B83\u80FD\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u641C\u7D22\u6587\u672C\uFF0C\u5E76\u628A\u5339\u914D\u7684\u884C\u6253\u5370\u51FA\u6765\u3002</p><p>grep\u53EF\u7528\u4E8Eshell\u811A\u672C\uFF0C\u56E0\u4E3Agrep\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A\u72B6\u6001\u503C\u6765\u8BF4\u660E\u641C\u7D22\u7684\u72B6\u6001\uFF0C\u5982\u679C\u6A21\u677F\u641C\u7D22\u6210\u529F\uFF0C\u5219\u8FD4\u56DE0\uFF0C\u5982\u679C\u641C\u7D22\u4E0D\u6210\u529F\uFF0C\u5219\u8FD4\u56DE1\uFF0C\u5982\u679C\u641C\u7D22\u7684\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE2\u3002\u6211\u4EEC\u5229\u7528\u8FD9\u4E9B\u8FD4\u56DE\u503C\u5C31\u53EF\u8FDB\u884C\u4E00\u4E9B\u81EA\u52A8\u5316\u7684\u6587\u672C\u5904\u7406\u5DE5\u4F5C\u3002</p><h4 id="\u9009\u9879-5" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-5" aria-hidden="true">#</a> \u9009\u9879</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-a \u4E0D\u8981\u5FFD\u7565\u4E8C\u8FDB\u5236\u6570\u636E\u3002
-A&lt;\u663E\u793A\u5217\u6570&gt; \u9664\u4E86\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u884C\u4E4B\u5916\uFF0C\u5E76\u663E\u793A\u8BE5\u884C\u4E4B\u540E\u7684\u5185\u5BB9\u3002
-b \u5728\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u884C\u4E4B\u5916\uFF0C\u5E76\u663E\u793A\u8BE5\u884C\u4E4B\u524D\u7684\u5185\u5BB9\u3002
-c \u8BA1\u7B97\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u5217\u6570\u3002
-C&lt;\u663E\u793A\u5217\u6570&gt;\u6216-&lt;\u663E\u793A\u5217\u6570&gt;  \u9664\u4E86\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u5217\u4E4B\u5916\uFF0C\u5E76\u663E\u793A\u8BE5\u5217\u4E4B\u524D\u540E\u7684\u5185\u5BB9\u3002
-d&lt;\u8FDB\u884C\u52A8\u4F5C&gt; \u5F53\u6307\u5B9A\u8981\u67E5\u627E\u7684\u662F\u76EE\u5F55\u800C\u975E\u6587\u4EF6\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528\u8FD9\u9879\u53C2\u6570\uFF0C\u5426\u5219grep\u547D\u4EE4\u5C06\u56DE\u62A5\u4FE1\u606F\u5E76\u505C\u6B62\u52A8\u4F5C\u3002
-e&lt;\u8303\u672C\u6837\u5F0F&gt; \u6307\u5B9A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u67E5\u627E\u6587\u4EF6\u5185\u5BB9\u7684\u8303\u672C\u6837\u5F0F\u3002
-E \u5C06\u8303\u672C\u6837\u5F0F\u4E3A\u5EF6\u4F38\u7684\u666E\u901A\u8868\u793A\u6CD5\u6765\u4F7F\u7528\uFF0C\u610F\u5473\u7740\u4F7F\u7528\u80FD\u4F7F\u7528\u6269\u5C55\u6B63\u5219\u8868\u8FBE\u5F0F\u3002
-f&lt;\u8303\u672C\u6587\u4EF6&gt; \u6307\u5B9A\u8303\u672C\u6587\u4EF6\uFF0C\u5176\u5185\u5BB9\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u8303\u672C\u6837\u5F0F\uFF0C\u8BA9grep\u67E5\u627E\u7B26\u5408\u8303\u672C\u6761\u4EF6\u7684\u6587\u4EF6\u5185\u5BB9\uFF0C\u683C\u5F0F\u4E3A\u6BCF\u4E00\u5217\u7684\u8303\u672C\u6837\u5F0F\u3002
-F \u5C06\u8303\u672C\u6837\u5F0F\u89C6\u4E3A\u56FA\u5B9A\u5B57\u7B26\u4E32\u7684\u5217\u8868\u3002
-G \u5C06\u8303\u672C\u6837\u5F0F\u89C6\u4E3A\u666E\u901A\u7684\u8868\u793A\u6CD5\u6765\u4F7F\u7528\u3002
-h \u5728\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u5217\u4E4B\u524D\uFF0C\u4E0D\u6807\u793A\u8BE5\u5217\u6240\u5C5E\u7684\u6587\u4EF6\u540D\u79F0\u3002
-H \u5728\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u5217\u4E4B\u524D\uFF0C\u6807\u793A\u8BE5\u5217\u7684\u6587\u4EF6\u540D\u79F0\u3002
-i \u5FFD\u7565\u5B57\u7B26\u5927\u5C0F\u5199\u7684\u5DEE\u522B\u3002
-l \u5217\u51FA\u6587\u4EF6\u5185\u5BB9\u7B26\u5408\u6307\u5B9A\u7684\u8303\u672C\u6837\u5F0F\u7684\u6587\u4EF6\u540D\u79F0\u3002
-L \u5217\u51FA\u6587\u4EF6\u5185\u5BB9\u4E0D\u7B26\u5408\u6307\u5B9A\u7684\u8303\u672C\u6837\u5F0F\u7684\u6587\u4EF6\u540D\u79F0\u3002
-n \u5728\u663E\u793A\u7B26\u5408\u8303\u672C\u6837\u5F0F\u7684\u90A3\u4E00\u5217\u4E4B\u524D\uFF0C\u6807\u793A\u51FA\u8BE5\u5217\u7684\u7F16\u53F7\u3002
-q \u4E0D\u663E\u793A\u4EFB\u4F55\u4FE1\u606F\u3002
-R/-r \u6B64\u53C2\u6570\u7684\u6548\u679C\u548C\u6307\u5B9A\u201C-d recurse\u201D\u53C2\u6570\u76F8\u540C\u3002
-s \u4E0D\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u3002
-v \u53CD\u8F6C\u67E5\u627E\u3002
-w \u53EA\u663E\u793A\u5168\u5B57\u7B26\u5408\u7684\u5217\u3002
-x \u53EA\u663E\u793A\u5168\u5217\u7B26\u5408\u7684\u5217\u3002
-y \u6B64\u53C2\u6570\u6548\u679C\u8DDF\u201C-i\u201D\u76F8\u540C\u3002
-o \u53EA\u8F93\u51FA\u6587\u4EF6\u4E2D\u5339\u914D\u5230\u7684\u90E8\u5206\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="\u89C4\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u89C4\u5219\u8868\u8FBE\u5F0F</h4><p>grep\u7684\u89C4\u5219\u8868\u8FBE\u5F0F:</p><p>^ #\u951A\u5B9A\u884C\u7684\u5F00\u59CB \u5982\uFF1A&#39;^grep&#39;\u5339\u914D\u6240\u6709\u4EE5grep\u5F00\u5934\u7684\u884C\u3002</p><p>$ #\u951A\u5B9A\u884C\u7684\u7ED3\u675F \u5982\uFF1A&#39;grep$&#39;\u5339\u914D\u6240\u6709\u4EE5grep\u7ED3\u5C3E\u7684\u884C\u3002</p><p>. #\u5339\u914D\u4E00\u4E2A\u975E\u6362\u884C\u7B26\u7684\u5B57\u7B26 \u5982\uFF1A&#39;gr.p&#39;\u5339\u914Dgr\u540E\u63A5\u4E00\u4E2A\u4EFB\u610F\u5B57\u7B26\uFF0C\u7136\u540E\u662Fp\u3002</p><ul><li>#\u5339\u914D\u96F6\u4E2A\u6216\u591A\u4E2A\u5148\u524D\u5B57\u7B26 \u5982\uFF1A&#39;*grep&#39;\u5339\u914D\u6240\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u7A7A\u683C\u540E\u7D27\u8DDFgrep\u7684\u884C\u3002</li></ul><p>.* #\u4E00\u8D77\u7528\u4EE3\u8868\u4EFB\u610F\u5B57\u7B26\u3002</p><p>[] #\u5339\u914D\u4E00\u4E2A\u6307\u5B9A\u8303\u56F4\u5185\u7684\u5B57\u7B26\uFF0C\u5982&#39;[Gg]rep&#39;\u5339\u914DGrep\u548Cgrep\u3002</p><p>[^] #\u5339\u914D\u4E00\u4E2A\u4E0D\u5728\u6307\u5B9A\u8303\u56F4\u5185\u7684\u5B57\u7B26\uFF0C\u5982\uFF1A&#39;[^A-FH-Z]rep&#39;\u5339\u914D\u4E0D\u5305\u542BA-F\u548CH-Z\u7684\u4E00\u4E2A\u5B57\u6BCD\u5F00\u5934\uFF0C\u7D27\u8DDFrep\u7684\u884C\u3002</p><p>(..) #\u6807\u8BB0\u5339\u914D\u5B57\u7B26\uFF0C\u5982&#39;(love)&#39;\uFF0Clove\u88AB\u6807\u8BB0\u4E3A1\u3002</p><p>\\&lt; #\u951A\u5B9A\u5355\u8BCD\u7684\u5F00\u59CB\uFF0C\u5982:&#39;&lt;grep&#39;\u5339\u914D\u5305\u542B\u4EE5grep\u5F00\u5934\u7684\u5355\u8BCD\u7684\u884C\u3002</p><p>\\&gt; #\u951A\u5B9A\u5355\u8BCD\u7684\u7ED3\u675F\uFF0C\u5982&#39;grep&gt;&#39;\u5339\u914D\u5305\u542B\u4EE5grep\u7ED3\u5C3E\u7684\u5355\u8BCD\u7684\u884C\u3002</p><p>x{m} #\u91CD\u590D\u5B57\u7B26x\uFF0Cm\u6B21\uFF0C\u5982\uFF1A&#39;0{5}&#39;\u5339\u914D\u5305\u542B5\u4E2Ao\u7684\u884C\u3002</p><p>x{m,} #\u91CD\u590D\u5B57\u7B26x,\u81F3\u5C11m\u6B21\uFF0C\u5982\uFF1A&#39;o{5,}&#39;\u5339\u914D\u81F3\u5C11\u67095\u4E2Ao\u7684\u884C\u3002</p><p>x{m,n} #\u91CD\u590D\u5B57\u7B26x\uFF0C\u81F3\u5C11m\u6B21\uFF0C\u4E0D\u591A\u4E8En\u6B21\uFF0C\u5982\uFF1A&#39;o{5,10}&#39;\u5339\u914D5--10\u4E2Ao\u7684\u884C\u3002</p><p>\\w #\u5339\u914D\u6587\u5B57\u548C\u6570\u5B57\u5B57\u7B26\uFF0C\u4E5F\u5C31\u662F[A-Za-z0-9]\uFF0C\u5982\uFF1A&#39;G\\w*p&#39;\u5339\u914D\u4EE5G\u540E\u8DDF\u96F6\u4E2A\u6216\u591A\u4E2A\u6587\u5B57\u6216\u6570\u5B57\u5B57\u7B26\uFF0C\u7136\u540E\u662Fp\u3002</p><p>\\W #\\w\u7684\u53CD\u7F6E\u5F62\u5F0F\uFF0C\u5339\u914D\u4E00\u4E2A\u6216\u591A\u4E2A\u975E\u5355\u8BCD\u5B57\u7B26\uFF0C\u5982\u70B9\u53F7\u53E5\u53F7\u7B49\u3002</p><p>\\b #\u5355\u8BCD\u9501\u5B9A\u7B26\uFF0C\u5982: &#39;\\bgrep\\b&#39;\u53EA\u5339\u914Dgrep\u3002</p><p>POSIX\u5B57\u7B26:</p><p>\u4E3A\u4E86\u5728\u4E0D\u540C\u56FD\u5BB6\u7684\u5B57\u7B26\u7F16\u7801\u4E2D\u4FDD\u6301\u4E00\u81F3\uFF0CPOSIX(The Portable Operating System Interface)\u589E\u52A0\u4E86\u7279\u6B8A\u7684\u5B57\u7B26\u7C7B\uFF0C\u5982[:alnum:]\u662F[A-Za-z0-9]\u7684\u53E6\u4E00\u4E2A\u5199\u6CD5\u3002\u8981\u628A\u5B83\u4EEC\u653E\u5230[]\u53F7\u5185\u624D\u80FD\u6210\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5982[A- Za-z0-9]\u6216[[:alnum:]]\u3002\u5728linux\u4E0B\u7684grep\u9664fgrep\u5916\uFF0C\u90FD\u652F\u6301POSIX\u7684\u5B57\u7B26\u7C7B\u3002</p><p>[:alnum:] #\u6587\u5B57\u6570\u5B57\u5B57\u7B26</p><p>[:alpha:] #\u6587\u5B57\u5B57\u7B26</p><p>[:digit:] #\u6570\u5B57\u5B57\u7B26</p><p>[:graph:] #\u975E\u7A7A\u5B57\u7B26\uFF08\u975E\u7A7A\u683C\u3001\u63A7\u5236\u5B57\u7B26\uFF09</p><p>[:lower:] #\u5C0F\u5199\u5B57\u7B26</p><p>[:cntrl:] #\u63A7\u5236\u5B57\u7B26</p><p>[:print:] #\u975E\u7A7A\u5B57\u7B26\uFF08\u5305\u62EC\u7A7A\u683C\uFF09</p><p>[:punct:] #\u6807\u70B9\u7B26\u53F7</p><p>[:space:] #\u6240\u6709\u7A7A\u767D\u5B57\u7B26\uFF08\u65B0\u884C\uFF0C\u7A7A\u683C\uFF0C\u5236\u8868\u7B26\uFF09</p><p>[:upper:] #\u5927\u5199\u5B57\u7B26</p><p>[:xdigit:] #\u5341\u516D\u8FDB\u5236\u6570\u5B57\uFF080-9\uFF0Ca-f\uFF0CA-F\uFF09</p><h4 id="\u5E38\u7528\u5B9E\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B-1" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h4><p>1\uFF09\u67E5\u627E\u6307\u5B9A\u8FDB\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> ps -ef|grep svn
root 4943   1      0  Dec05 ?   00:00:00 svnserve -d -r /opt/svndata/grape/
root 16867 16838  0 19:53 pts/0    00:00:00 grep svn
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>2\uFF09\u67E5\u627E\u6307\u5B9A\u8FDB\u7A0B\u4E2A\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ps -ef|grep -c svn 
2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>3\uFF09\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u5173\u952E\u8BCD\u8FDB\u884C\u641C\u7D22</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat test.txt 
hnlinux
peida.cnblogs.com
ubuntu
ubuntu linux
redhat
Redhat
linuxmint
# cat test2.txt 
linux
Redhat
# cat test.txt | grep -f test2.txt
hnlinux
ubuntu linux
Redhat
linuxmint
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u8F93\u51FAtest.txt\u6587\u4EF6\u4E2D\u542B\u6709\u4ECEtest2.txt\u6587\u4EF6\u4E2D\u8BFB\u53D6\u51FA\u7684\u5173\u952E\u8BCD\u7684\u5185\u5BB9\u884C</p><p>4\uFF09\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u5173\u952E\u8BCD\u8FDB\u884C\u641C\u7D22\u4E14\u663E\u793A\u884C\u53F7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat test.txt 
hnlinux
peida.cnblogs.com
ubuntu
ubuntu linux
redhat
Redhat
linuxmint
# cat test2.txt 
linux
Redhat
# cat test.txt | grep -nf test2.txt
1:hnlinux
4:ubuntu linux
6:Redhat
7:linuxmint

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u8F93\u51FAtest.txt\u6587\u4EF6\u4E2D\u542B\u6709\u4ECEtest2.txt\u6587\u4EF6\u4E2D\u8BFB\u53D6\u51FA\u7684\u5173\u952E\u8BCD\u7684\u5185\u5BB9\u884C\uFF0C\u5E76\u663E\u793A\u6BCF\u4E00\u884C\u7684\u884C\u53F7</p><p>5\uFF09\u4ECE\u6587\u4EF6\u4E2D\u67E5\u627E\u5173\u952E\u8BCD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># grep &#39;linux&#39; test.txt 
hnlinux
ubuntu linux
linuxmint
# grep -n &#39;linux&#39; test.txt 
1:hnlinux
4:ubuntu linux
7:linuxmint
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>6\uFF09\u4ECE\u591A\u4E2A\u6587\u4EF6\u4E2D\u67E5\u627E\u5173\u952E\u8BCD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># grep -n &#39;linux&#39; test.txt test2.txt 
test.txt:1:hnlinux
test.txt:4:ubuntu linux
test.txt:7:linuxmint
test2.txt:1:linux
# grep &#39;linux&#39; test.txt test2.txt 
test.txt:hnlinux
test.txt:ubuntu linux
test.txt:linuxmint
test2.txt:linux
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u591A\u6587\u4EF6\u65F6\uFF0C\u8F93\u51FA\u67E5\u8BE2\u5230\u7684\u4FE1\u606F\u5185\u5BB9\u884C\u65F6\uFF0C\u4F1A\u628A\u6587\u4EF6\u7684\u547D\u540D\u5728\u884C\u6700\u524D\u9762\u8F93\u51FA\u5E76\u4E14\u52A0\u4E0A&quot;:&quot;\u4F5C\u4E3A\u6807\u793A\u7B26</p><p>7\uFF09grep\u4E0D\u663E\u793A\u672C\u8EAB\u8FDB\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ps aux|grep ssh
root   2720  0.0  0.0  62656  1212 ?      Ss   Nov02   0:00 /usr/sbin/sshd
root  16834  0.0  0.0  88088  3288 ?      Ss   19:53   0:00 sshd: root@pts/0 
root  16901  0.0  0.0  61180   764 pts/0  S+   20:31   0:00 grep ssh
# ps aux|grep [s]sh
root   2720  0.0  0.0  62656  1212 ?      Ss   Nov02   0:00 /usr/sbin/sshd
root  16834  0.0  0.0  88088  3288 ?      Ss   19:53   0:00 sshd: root@pts/0 
# ps aux | grep ssh | grep -v &quot;grep&quot;
root   2720  0.0  0.0  62656  1212 ?      Ss   Nov02   0:00 /usr/sbin/sshd
root  16834  0.0  0.0  88088  3288 ?      Ss   19:53   0:00 sshd: root@pts/0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>8\uFF09\u627E\u51FA\u5DF2u\u5F00\u5934\u7684\u884C\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat test.txt |grep ^u
ubuntu
ubuntu linux
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>9\uFF09\u8F93\u51FA\u975Eu\u5F00\u5934\u7684\u884C\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat test.txt |grep ^[^u]
hnlinux
peida.cnblogs.com
redhat
Redhat
linuxmint
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>10\uFF09\u8F93\u51FA\u4EE5hat\u7ED3\u5C3E\u7684\u884C\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat test.txt |grep hat$
redhat
Redhat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>11\uFF09\u67E5\u670D\u52A1\u5668ip\u5730\u5740\u6240\u5728\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ifconfig eth0|grep &quot;[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}&quot;
          inet addr:192.168.120.204  Bcast:192.168.120.255  Mask:255.255.255.0
# ifconfig eth0|grep -E &quot;([0-9]{1,3}\\.){3}[0-9]&quot;
          inet addr:192.168.120.204  Bcast:192.168.120.255  Mask:255.255.255.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>12\uFF09\u663E\u793A\u5305\u542Bed\u6216\u8005at\u5B57\u7B26\u7684\u5185\u5BB9\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat test.txt |grep -E &quot;peida|com&quot;
peida.cnblogs.com
# cat test.txt |grep -E &quot;ed|at&quot;
redhat
Redhat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>13\uFF09\u663E\u793A\u5F53\u524D\u76EE\u5F55\u4E0B\u9762\u4EE5.txt \u7ED3\u5C3E\u7684\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u5305\u542B\u6BCF\u4E2A\u5B57\u7B26\u4E32\u81F3\u5C11\u67097\u4E2A\u8FDE\u7EED\u5C0F\u5199\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\u7684\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># grep &#39;[a-z]\\{7\\}&#39; *.txt
test.txt:hnlinux
test.txt:peida.cnblogs.com
test.txt:linuxmint
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>14\uFF09\u5728\u591A\u7EA7\u76EE\u5F55\u4E2D\u5BF9\u6587\u672C\u8FDB\u884C\u9012\u5F52\u641C\u7D22</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#grep &quot;text&quot; . -r -n   # .\u8868\u793A\u5F53\u524D\u76EE\u5F55\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>15\uFF09\u663E\u793A\u8FC7\u6EE4\u6CE8\u91CA( # ; \u5F00\u5934) \u548C\u7A7A\u884C\u540E\u7684\u914D\u7F6E\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#  grep -Ev &quot;^$|^[#;]&quot; server.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>16\uFF09\u8FC7\u6EE4/etc/passwd\u6587\u4EF6\u4E0B\uFF0C\u5305\u542Broot\u7684\u884C\uFF0C\u5E76\u8FC7\u6EE4\u540E\u4E24\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep -A 2 root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>17\uFF09\u8FC7\u6EE4/etc/passwd\u6587\u4EF6\u4E0B\uFF0C\u5305\u542Broot\u7684\u884C\uFF0C\u5E76\u8FC7\u6EE4\u524D\u4E24\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep -B 2 root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>18\uFF09\u8FC7\u6EE4/etc/passwd\u6587\u4EF6\u4E0B\uFF0C\u5305\u542Broot\u7684\u884C\uFF0C\u5E76\u8FC7\u6EE4\u524D\u540E\u4E24\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep -C 2 root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>18\uFF09\u8FC7\u6EE4/etc/passwd\u6587\u4EF6\u4E0B\uFF0C\u5305\u542Broot\u7684\u884C\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep -c root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>19)\u8FC7\u6EE4/etc/passwd\u6587\u4EF6\u4E0B\uFF0C\u5305\u542Broot\u7684\u884C\uFF0C\u5E76\u6253\u5370\u884C\u53F7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep -n root /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>20\uFF09\u8FC7\u6EE4/etc/\u4E0B\u6240\u6709\u6587\u4EF6\uFF0C\u5305\u542Broot\u7684\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep -r root /etc/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>21)\u8FC7\u6EE4/etc/\u4E0B\u6240\u6709\u6587\u4EF6\uFF0C\u5305\u542Broot\u7684\u884C\u7684\u6587\u4EF6\u540D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep -rl root /etc/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,204);function r(l,p){return a}var t=n(e,[["render",r],["__file","cat.html.vue"]]);export{t as default};
