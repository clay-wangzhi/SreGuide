import{_ as n,e as s}from"./app.741e01f1.js";const a={},e=s(`<h1 id="_8-3-\u53CC\u5706\u62EC\u53F7\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_8-3-\u53CC\u5706\u62EC\u53F7\u7ED3\u6784" aria-hidden="true">#</a> 8.3 \u53CC\u5706\u62EC\u53F7\u7ED3\u6784</h1><p>\u4E0E<code>let</code>\u547D\u4EE4\u7C7B\u4F3C\uFF0C<code>(( ... ))</code> \u7ED3\u6784\u5141\u8BB8\u5BF9\u7B97\u672F\u8868\u8FBE\u5F0F\u7684\u6269\u5C55\u548C\u6C42\u503C\u3002\u5B83\u662F<code>let</code>\u547D\u4EE4\u7684\u7B80\u5316\u5F62\u5F0F\u3002\u4F8B\u5982\uFF0Ca=$(( 5 + 3 )) \u4F1A\u5C06\u53D8\u91CFa\u8D4B\u503C\u6210 5 + 3\uFF0C\u4E5F\u5C31\u662F8\u3002\u5728Bash\u4E2D\uFF0C\u53CC\u5706\u62EC\u53F7\u7ED3\u6784\u4E5F\u5141\u8BB8\u4EE5C\u98CE\u683C\u7684\u65B9\u5F0F\u64CD\u4F5C\u53D8\u91CF\u3002\u4F8B\u5982\uFF0C(( var++ ))\u3002</p><p><strong>\u6837\u4F8B 8-5. \u4EE5C\u98CE\u683C\u7684\u65B9\u5F0F\u64CD\u4F5C\u53D8\u91CF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# c-vars.sh
# \u4EE5C\u98CE\u683C\u7684\u65B9\u5F0F\u64CD\u4F5C\u53D8\u91CF\uFF0C\u4F7F\u7528(( ... ))\u7ED3\u6784


echo

(( a = 23 ))  #  C\u98CE\u683C\u7684\u53D8\u91CF\u8D4B\u503C\uFF0C\u6CE8\u610F&quot;=&quot;\u7B49\u53F7\u524D\u540E\u90FD\u6709\u7A7A\u683C

echo &quot;a (initial value) = $a&quot;   # 23

(( a++ ))     #  \u540E\u7F00\u81EA\u589E&#39;a&#39;\uFF0CC-style.
echo &quot;a (after a++) = $a&quot;       # 24

(( a-- ))     #  \u540E\u7F00\u81EA\u51CF&#39;a&#39;, C-style.
echo &quot;a (after a--) = $a&quot;       # 23


(( ++a ))     #  \u524D\u7F00\u81EA\u589E&#39;a&#39;, C-style.
echo &quot;a (after ++a) = $a&quot;       # 24

(( --a ))     #  \u524D\u7F00\u81EA\u51CF&#39;a&#39;, C-style.
echo &quot;a (after --a) = $a&quot;       # 23

echo

########################################################
#  \u6CE8\u610F\uFF0CC\u98CE\u683C\u7684++\uFF0C--\u8FD0\u7B97\u7B26\uFF0C\u524D\u7F00\u5F62\u5F0F\u4E0E\u540E\u7F00\u5F62\u5F0F\u6709\u4E0D\u540C\u7684
#+ \u526F\u4F5C\u7528\u3002

n=1; let --n &amp;&amp; echo &quot;True&quot; || echo &quot;False&quot;  # False
n=1; let n-- &amp;&amp; echo &quot;True&quot; || echo &quot;False&quot;  # True

#  \u611F\u8C22 Jeroen Domburg\u3002
########################################################

echo

(( t = a&lt;45?7:11 ))   # C\u98CE\u683C\u4E09\u76EE\u8FD0\u7B97\u7B26\u3002
#       ^  ^ ^
echo &quot;If a &lt; 45, then t = 7, else t = 11.&quot;  # a = 23
echo &quot;t = $t &quot;                              # t = 7

echo


# -----------
# \u590D\u6D3B\u8282\u5F69\u86CB!
# -----------
#  Chet Ramey \u5077\u5077\u5F80Bash\u91CC\u52A0\u5165\u4E86C\u98CE\u683C\u7684\u8BED\u53E5\u7ED3\u6784\uFF0C
#  \u8FD8\u6CA1\u5199\u6587\u6863\u8BF4\u660E (\u5B9E\u9645\u4E0A\u5F88\u591A\u662F\u4ECEksh\u4E2D\u7EE7\u627F\u8FC7\u6765\u7684)\u3002
#  \u5728Bash \u6587\u6863\u4E2D\uFF0CRamey\u628A (( ... ))\u7ED3\u6784\u79F0\u4E3Ashell \u7B97\u672F\u8FD0\u7B97\uFF0C
#  \u4F46\u662F\u8FD9\u79CD\u8868\u8FF0\u5E76\u4E0D\u51C6\u786E...
#  \u62B1\u6B49\u554A\uFF0CChet\uFF0C\u628A\u4F60\u7684\u79D8\u5BC6\u6296\u51FA\u6765\u4E86\u3002

#  \u53C2\u770B &quot;for&quot; \u548C &quot;while&quot; \u5FAA\u73AF\u7AE0\u8282\u5173\u4E8E (( ... )) \u7ED3\u6784\u7684\u90E8\u5206\u3002

#  (( ... )) \u7ED3\u6784\u5728Bash 2.04\u7248\u672C\u4E4B\u540E\u624D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002

exit

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u53C2\u770B <strong>\u6837\u4F8B 11-13</strong> \u4E0E <strong>\u6837\u4F8B 8-4</strong>\u3002</p>`,5);function r(l,p){return e}var u=n(a,[["render",r],["__file","08_3_the_double_parentheses_construct.html.vue"]]);export{u as default};
