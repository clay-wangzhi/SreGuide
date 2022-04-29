import{_ as n,e as s}from"./app.189b7edd.js";const a={},e=s(`<h1 id="_8-2-\u6570\u5B57\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#_8-2-\u6570\u5B57\u5E38\u91CF" aria-hidden="true">#</a> 8.2 \u6570\u5B57\u5E38\u91CF</h1><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0Cshell\u811A\u672C\u4F1A\u628A\u6570\u5B57\u4EE5\u5341\u8FDB\u5236\u6574\u6570\u770B\u5F85(base 10)\uFF0C\u9664\u975E\u6570\u5B57\u52A0\u4E86\u7279\u6B8A\u7684\u524D\u7F00\u6216\u6807\u8BB0\u3002 \u5E26\u524D\u7F000\u7684\u6570\u5B57\u662F\u516B\u8FDB\u5236\u6570(base 8)\uFF1B\u5E26\u524D\u7F000x\u7684\u6570\u5B57\u662F\u5341\u516D\u8FDB\u5236\u6570(base 16)\u3002 \u5185\u5D4C # \u7684\u6570\u5B57\u4F1A\u4EE5 BASE#NUMBER \u7684\u65B9\u5F0F\u8FDB\u884C\u6C42\u503C\uFF08\u4E0D\u80FD\u8D85\u51FA\u5F53\u524Dshell\u652F\u6301\u6574\u6570\u7684\u8303\u56F4\uFF09\u3002</p><p><strong>\u6837\u4F8B 8-4. \u6570\u5B57\u5E38\u91CF\u7684\u8868\u793A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
# numbers.sh: \u4E0D\u540C\u8FDB\u5236\u6570\u7684\u8868\u793A

# \u5341\u8FDB\u5236\u6570: \u9ED8\u8BA4
let &quot;dec = 32&quot;
echo &quot;decimal number = $dec&quot;             # 32
# \u4E00\u5207\u6B63\u5E38\u3002


# \u516B\u8FDB\u5236\u6570: \u5E26\u524D\u5BFC&#39;0&#39;\u7684\u6570
let &quot;oct = 032&quot;
echo &quot;octal number = $oct&quot;               # 26
# \u7ED3\u679C\u4EE5 \u5341\u8FDB\u5236 \u6253\u5370\u8F93\u51FA\u4E86\u3002
# ------ ------ -----------


# \u5341\u516D\u8FDB\u5236\u6570: \u5E26\u524D\u5BFC&#39;0x&#39;\u6216&#39;0X&#39;\u7684\u6570
let &quot;hex = 0x32&quot;
echo &quot;hexadecimal number = $hex&quot;         # 50

echo $((0x9abc))                         # 39612
#     ^^      ^^   \u53CC\u5706\u62EC\u53F7\u8FDB\u884C\u8868\u8FBE\u5F0F\u6C42\u503C
# \u7ED3\u679C\u4EE5\u5341\u8FDB\u5236\u6253\u5370\u8F93\u51FA\u3002



# \u5176\u4ED6\u8FDB\u5236\u6570: BASE#NUMBER
# BASE \u8303\u56F4:  2 - 64
# NUMBER \u5FC5\u987B\u4EE5 BASE \u89C4\u5B9A\u7684\u6B63\u786E\u5F62\u5F0F\u4E66\u5199\uFF0C\u5982\u4E0B:

let &quot;bin = 2#111100111001101&quot;
echo &quot;binary number = $bin&quot;              # 31181

let &quot;b32 = 32#77&quot;
echo &quot;base-32 number = $b32&quot;             # 231

let &quot;b64 = 64#@_&quot;
echo &quot;base-64 number = $b64&quot;             # 4031

# \u8FD9\u79CD\u8868\u793A\u6CD5\u53EA\u5BF9\u8FDB\u5236\u8303\u56F4(2 - 64)\u5185\u7684 ASCII \u5B57\u7B26\u6709\u6548\u3002
# 10 \u6570\u5B57 + 26 \u5C0F\u5199\u5B57\u6BCD + 26 \u5927\u5199\u5B57\u6BCD + @ + _


echo

echo $((36#zz)) $((2#10101010)) $((16#AF16)) $((53#1aA))
                                         # 1295 170 44822 3375

#  \u91CD\u8981\u63D0\u9192:
#  ---------
#  \u4F7F\u7528\u8D85\u51FA\u8FDB\u5236\u8303\u56F4\u4EE5\u5916\u7684\u7B26\u53F7\u4F1A\u62A5\u9519\u3002

let &quot;bad_oct = 081&quot;

# (\u53EF\u80FD\u7684) \u62A5\u9519\u4FE1\u606F:
#  bad_oct = 081: value too great for base (error token is &quot;081&quot;)
#              Octal numbers use only digits in the range 0 - 7.

exit $?        # \u9000\u51FA\u7801 = 1 (\u9519\u8BEF)

# \u611F\u8C22 Rich Bartell \u548C Stephane Chazelas \u7684\u8BF4\u660E\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,4);function r(l,b){return e}var u=n(a,[["render",r],["__file","08_2_numerical_constants.html.vue"]]);export{u as default};
