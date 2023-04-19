import{_ as n,e as s}from"./app.958f2970.js";const a={},e=s(`<h1 id="_9-3-random-\u751F\u6210\u968F\u673A\u6570" tabindex="-1"><a class="header-anchor" href="#_9-3-random-\u751F\u6210\u968F\u673A\u6570" aria-hidden="true">#</a> 9.3 <code>$RANDOM</code>\uFF1A\u751F\u6210\u968F\u673A\u6570</h1><blockquote><p>\u4EFB\u4F55\u8BD5\u56FE\u901A\u8FC7\u786E\u5B9A\u6027\u65B9\u6CD5\u751F\u6210\u968F\u673A\u6570\u7684\u884C\u4E3A\u90FD\u662F\u5728\u72AF\u7F6A\u3002</p><p>\u2014\u2014 \u7EA6\u7FF0\xB7\u51AF\xB7\u8BFA\u4F0A\u66FC</p></blockquote><p><code>$RANDOM</code> \u662F Bash \u4E2D\u7528\u6765\u751F\u6210 0 \u81F3 32767 \u4E4B\u95F4\u968F\u673A\u6574\u6570<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>\u7684\u4E00\u4E2A\u5185\u7F6E <a href="">\u51FD\u6570</a>\uFF08\u800C\u975E\u5E38\u91CF\uFF09\u3002\u5176<strong>\u4E0D\u5E94</strong>\u88AB\u7528\u4E8E\u751F\u6210\u5BC6\u94A5\u3002</p><h4 id="\u6837\u4F8B-9-11-\u751F\u6210\u968F\u673A\u6570" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-11-\u751F\u6210\u968F\u673A\u6570" aria-hidden="true">#</a> \u6837\u4F8B 9-11. \u751F\u6210\u968F\u673A\u6570</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># $RANDOM \u6BCF\u4E00\u6B21\u8C03\u7528\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u968F\u673A\u7684\u4E0D\u540C\u7684\u6574\u6570\u3002</span>
<span class="token comment"># \u968F\u673A\u6570\u7684\u6807\u79F0\u8303\u56F4\u4E3A 0 - 32767\uFF0816\u4F4D\u6709\u7B26\u53F7\u6574\u578B\uFF09\u3002</span>

<span class="token assign-left variable">MAXCOUNT</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$MAXCOUNT</span> random numbers:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----------------&quot;</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$count</span>&quot;</span> -le <span class="token variable">$MAXCOUNT</span> <span class="token punctuation">]</span>      <span class="token comment"># \u751F\u6210 10 ($MAXCOUNT) \u4E2A\u968F\u673A\u6574\u6570\u3002</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$number</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;count += 1&quot;</span>  <span class="token comment"># \u589E\u52A0\u8BA1\u6570\u3002</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----------------&quot;</span>

<span class="token comment"># \u5982\u679C\u4F60\u9700\u8981\u4E00\u4E2A\u5C0F\u4E8E\u6307\u5B9A\u4E0A\u754C\u7684\u968F\u673A\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528 &#39;modulo&#39; \u64CD\u4F5C\u7B26\u3002</span>
<span class="token comment"># \u8BE5\u64CD\u4F5C\u7B26\u53EF\u4EE5\u8FD4\u56DE\u9664\u6CD5\u540E\u7684\u4F59\u6570\u3002</span>

<span class="token assign-left variable">RANGE</span><span class="token operator">=</span><span class="token number">500</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;number %= <span class="token variable">$RANGE</span>&quot;</span>
<span class="token comment">#           ^^</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random number less than <span class="token variable">$RANGE</span> --- <span class="token variable">$number</span>&quot;</span>

<span class="token builtin class-name">echo</span>



<span class="token comment">#  \u5982\u679C\u4F60\u9700\u8981\u751F\u6210\u7684\u968F\u673A\u6570\u5927\u4E8E\u4E00\u4E2A\u6307\u5B9A\u7684\u4E0B\u754C\uFF0C</span>
<span class="token comment">#+ \u53EF\u4EE5\u589E\u52A0\u4E00\u6B65\u5224\u65AD\uFF0C\u5224\u522B\u5E76\u4E22\u5F03\u6240\u6709\u5C0F\u4E8E\u4E0B\u754C\u7684\u6570\u3002</span>

<span class="token assign-left variable">FLOOR</span><span class="token operator">=</span><span class="token number">200</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># \u521D\u59CB\u5316</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> -le <span class="token variable">$FLOOR</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random number greater than <span class="token variable">$FLOOR</span> --- <span class="token variable">$number</span>&quot;</span>
<span class="token builtin class-name">echo</span>

   <span class="token comment"># \u73B0\u5728\u6765\u770B\u4E00\u79CD\u53EF\u4EE5\u4EE3\u66FF\u4E0A\u9762\u5FAA\u73AF\u7684\u66F4\u7B80\u5355\u7684\u65B9\u5F0F\uFF0C\u4E5F\u5C31\u662F</span>
   <span class="token comment">#       let &quot;number = $RANDOM + $FLOOR&quot;</span>
   <span class="token comment"># \u8BE5\u65B9\u5F0F\u53EF\u4EE5\u4E0D\u4F7F\u7528 while \u5FAA\u73AF\uFF0C\u6548\u7387\u66F4\u9AD8\u3002</span>
   <span class="token comment"># \u4F46\u662F\uFF0C\u8BE5\u65B9\u6CD5\u53EF\u80FD\u4F1A\u4EA7\u751F\u4E00\u4E9B\u95EE\u9898\uFF0C\u662F\u4EC0\u4E48\u5462\uFF1F</span>



<span class="token comment"># \u901A\u8FC7\u7ED3\u5408\u4E0A\u9762\u7684\u4E24\u79CD\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u83B7\u5F97\u4E00\u4E2A\u7279\u5B9A\u8303\u56F4\u5185\u7684\u968F\u673A\u6570\u3002</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># \u521D\u59CB\u5316</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> -le <span class="token variable">$FLOOR</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;number %= <span class="token variable">$RANGE</span>&quot;</span>  <span class="token comment"># \u5C06 $number \u7F29\u5C0F\u81F3 $RANGE \u7684\u8303\u56F4\u5185\u3002</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random number between <span class="token variable">$FLOOR</span> and <span class="token variable">$RANGE</span> --- <span class="token variable">$number</span>&quot;</span>
<span class="token builtin class-name">echo</span>



<span class="token comment"># \u751F\u6210\u4E8C\u5143\u9009\u62E9\u503C\uFF0C\u5373\u771F(true)\u6216\u5047(false)\u3002</span>
<span class="token assign-left variable">BINARY</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">T</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>

<span class="token builtin class-name">let</span> <span class="token string">&quot;number %= <span class="token variable">$BINARY</span>&quot;</span>
<span class="token comment">#  \u5982\u679C\u4F7F\u7528    let &quot;number &gt;&gt;= 14&quot;    \u53EF\u4EE5\u83B7\u5F97\u66F4\u4F18\u7684\u968F\u673A\u5206\u5E03</span>
<span class="token comment">#+ \uFF08\u9664\u4E86\u6700\u4F4E\u4F4D\uFF0C\u5176\u4F59\u4E8C\u8FDB\u5236\u4F4D\u90FD\u53F3\u79FB\uFF09\u3002</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> -eq <span class="token variable">$T</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;TRUE&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;FALSE&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>


<span class="token comment"># \u6254\u4E00\u4E2A\u9AB0\u5B50\u3002</span>
<span class="token assign-left variable">SPOTS</span><span class="token operator">=</span><span class="token number">6</span>   <span class="token comment"># \u6A21 6 \u7684\u4F59\u6570\u8303\u56F4\u4E3A 0 - 5\u3002</span>
          <span class="token comment"># \u7136\u540E\u52A0 1 \u5C31\u53EF\u4EE5\u5F97\u5230\u671F\u671B\u7684\u8303\u56F4 1 - 6\u3002</span>
          <span class="token comment"># \u611F\u8C22 Paulo Marcel Coelho Aragao \u7B80\u5316\u4E86\u4EE3\u7801\u3002</span>
<span class="token assign-left variable">die1</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">die2</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment"># \u5982\u679C\u8BBE\u7F6E SPOTS=7 \u5C31\u53EF\u4EE5\u4E0D\u7528\u52A0 1 \u5F97\u5230\u503C\u3002\u8FD9\u662F\u4E0D\u662F\u4E00\u79CD\u66F4\u597D\u7684\u65B9\u6CD5\uFF0C\u4E3A\u4EC0\u4E48\uFF1F</span>

<span class="token comment"># \u4E3A\u4E86\u4FDD\u8BC1\u516C\u5E73\uFF0C\u72EC\u7ACB\u7684\u6295\u6BCF\u4E00\u4E2A\u9AB0\u5B50\u3002</span>

    <span class="token builtin class-name">let</span> <span class="token string">&quot;die1 = <span class="token environment constant">$RANDOM</span> % <span class="token variable">$SPOTS</span> + 1&quot;</span> <span class="token comment"># \u6295\u7B2C\u4E00\u4E2A\u9AB0\u5B50\u3002</span>
    <span class="token builtin class-name">let</span> <span class="token string">&quot;die2 = <span class="token environment constant">$RANDOM</span> % <span class="token variable">$SPOTS</span> + 1&quot;</span> <span class="token comment"># \u6295\u7B2C\u4E8C\u4E2A\u9AB0\u5B50\u3002</span>
    <span class="token comment">#  \u54EA\u4E00\u79CD\u8FD0\u7B97\u7B26\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\uFF0C</span>
    <span class="token comment">#+ \u53D6\u4F59(%)\u8FD8\u662F\u52A0\u6CD5(+)\uFF1F</span>


<span class="token builtin class-name">let</span> <span class="token string">&quot;throw = <span class="token variable">$die1</span> + <span class="token variable">$die2</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Throw of the dice = <span class="token variable">$throw</span>&quot;</span>
<span class="token builtin class-name">echo</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><h4 id="\u6837\u4F8B-9-12-\u4ECE\u724C\u7EC4\u4E2D\u968F\u673A\u9009\u724C" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-12-\u4ECE\u724C\u7EC4\u4E2D\u968F\u673A\u9009\u724C" aria-hidden="true">#</a> \u6837\u4F8B 9-12. \u4ECE\u724C\u7EC4\u4E2D\u968F\u673A\u9009\u724C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># pick-card.sh</span>

<span class="token comment"># \u8BE5\u6837\u4F8B\u6F14\u793A\u4E86\u5982\u4F55\u4ECE\u6570\u7EC4\u4E2D\u968F\u673A\u9009\u62E9\u5143\u7D20\u3002</span>


<span class="token comment"># \u968F\u673A\u9009\u62E9\u4EFB\u610F\u4E00\u5F20\u724C\u3002</span>

<span class="token assign-left variable">Suites</span><span class="token operator">=</span><span class="token string">&quot;Clubs
Diamonds
Hearts
Spades&quot;</span>

<span class="token assign-left variable">Denominations</span><span class="token operator">=</span><span class="token string">&quot;2
3
4
5
6
7
8
9
10
Jack
Queen
King
Ace&quot;</span>

<span class="token comment"># \u6CE8\u610F\u4E00\u4E2A\u53D8\u91CF\u5360\u4E86\u591A\u884C\u3002</span>


<span class="token assign-left variable">suite</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">$Suites</span><span class="token punctuation">)</span>                <span class="token comment"># \u8BFB\u5165\u6570\u7EC4\u53D8\u91CF\u3002</span>
<span class="token assign-left variable">denomination</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">$Denominations</span><span class="token punctuation">)</span>

<span class="token assign-left variable">num_suites</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>suite<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>        <span class="token comment"># \u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u6570\u91CF\u3002</span>
<span class="token assign-left variable">num_denominations</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>denomination<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>

<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">\${denomination<span class="token punctuation">[</span>$((RANDOM<span class="token operator">%</span>num_denominations))<span class="token punctuation">]</span>}</span> of &quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${suite<span class="token punctuation">[</span>$((RANDOM<span class="token operator">%</span>num_suites))<span class="token punctuation">]</span>}</span>


<span class="token comment"># $bozo sh pick-cards.sh</span>
<span class="token comment"># Jack of Clubs</span>


<span class="token comment"># \u611F\u8C22 jipe \u6307\u51FA\u53EF\u4EE5\u7528 $RANDOM \u968F\u673A\u9009\u724C\u3002</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h4 id="example-9-13-\u6A21\u62DF\u5E03\u6717\u8FD0\u52A8" tabindex="-1"><a class="header-anchor" href="#example-9-13-\u6A21\u62DF\u5E03\u6717\u8FD0\u52A8" aria-hidden="true">#</a> Example 9-13. \u6A21\u62DF\u5E03\u6717\u8FD0\u52A8</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># brownian.sh</span>
<span class="token comment"># \u4F5C\u8005\uFF1AMendel Cooper</span>
<span class="token comment"># \u53D1\u5E03\u65E5\u671F\uFF1A10/26/07</span>
<span class="token comment"># \u5F00\u6E90\u534F\u8BAE\uFF1AGPL3</span>

<span class="token comment">#  ----------------------------------------------------------------</span>
<span class="token comment">#  \u8BE5\u811A\u672C\u6A21\u62DF\u4E86\u5E03\u6717\u8FD0\u52A8\u3002</span>
<span class="token comment">#+ \u5E03\u6717\u8FD0\u52A8\u662F\u6307\u5FAE\u5C0F\u7C92\u5B50\u53D7\u5230\u6D41\u4F53\u7C92\u5B50\u968F\u673A\u78B0\u649E\uFF0C</span>
<span class="token comment">#+ \u800C\u5728\u6D41\u4F53\u4E2D\u505A\u7684\u65E0\u89C4\u5219\u968F\u673A\u8FD0\u52A8\u3002</span>
<span class="token comment">#+ \u4E5F\u5C31\u662F\u4FD7\u79F0\u7684\u201C\u9189\u6C49\u8D70\u8DEF\u201D\u3002</span>

<span class="token comment">#  \u5E03\u6717\u8FD0\u52A8\u4E5F\u53EF\u4EE5\u88AB\u89C6\u4F5C\u662F\u4E00\u4E2A\u7B80\u5316\u7684\u9AD8\u5C14\u987F\u677F\u3002</span>
<span class="token comment">#+ \u9AD8\u5C14\u987F\u677F\u662F\u4E00\u4E2A\u6709\u7740\u4EA4\u9519\u6392\u5217\u7684\u9489\u5B50\u7684\u503E\u659C\u677F\u5B50\uFF0C</span>
<span class="token comment">#+ \u6BCF\u6B21\u53EF\u4EE5\u4ECE\u4E2D\u5411\u4E0B\u6EDA\u52A8\u4E00\u5806\u77F3\u5B50\u3002</span>
<span class="token comment">#+ \u5728\u677F\u5B50\u5E95\u7AEF\u662F\u4E00\u6392\u69FD\u4F4D\uFF0C</span>
<span class="token comment">#+ \u77F3\u5B50\u6700\u540E\u4F1A\u843D\u5728\u69FD\u4F4D\u4E2D\u3002</span>
<span class="token comment">#  \u628A\u5B83\u60F3\u8C61\u6210\u4E00\u4E2A\u7B80\u5355\u7684\u5F39\u73E0\u6E38\u620F\u5C31\u53EF\u4EE5\u4E86\u3002</span>
<span class="token comment">#  \u5F53\u8FD0\u884C\u8FD9\u4E2A\u811A\u672C\u4E4B\u540E\uFF0C</span>
<span class="token comment">#+ \u4F60\u5C31\u4F1A\u53D1\u73B0\u5927\u90E8\u5206\u7684\u77F3\u5B50\u90FD\u805A\u96C6\u5728\u4E2D\u95F4\u7684\u69FD\u4F4D\u91CC\u3002</span>
<span class="token comment">#+ \u8FD9\u4E0E\u9884\u671F\u7684\u4E8C\u9879\u5206\u5E03\u76F8\u7B26\u3002</span>
<span class="token comment">#  \u4F5C\u4E3A\u6A21\u62DF\u9AD8\u5C14\u987F\u677F\u7684\u7A0B\u5E8F\uFF0C</span>
<span class="token comment">#+ \u811A\u672C\u5FFD\u7565\u4E86\u8BB8\u591A\u53C2\u6570\uFF0C</span>
<span class="token comment">#+ \u4F8B\u5982\u677F\u5B50\u7684\u503E\u659C\u89D2\u5EA6\u3001\u77F3\u5B50\u6EDA\u52A8\u7684\u6469\u64E6\u7CFB\u6570\u3001</span>
<span class="token comment">#+ \u51B2\u51FB\u89D2\u5EA6\u4EE5\u53CA\u9489\u5B50\u7684\u5F39\u6027\u7CFB\u6570\u7B49\u7B49\u3002</span>
<span class="token comment">#  \u5FFD\u7565\u7684\u8FD9\u4E9B\u53C2\u6570\u80FD\u591F\u5728\u591A\u5927\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u6A21\u62DF\u7684\u7CBE\u5EA6\uFF1F</span>
<span class="token comment">#  -------------------------------------------------------------</span>

<span class="token assign-left variable">PASSES</span><span class="token operator">=</span><span class="token number">500</span>            <span class="token comment">#  \u7C92\u5B50\u4F5C\u7528\u6570 / \u77F3\u5B50\u6570\u3002</span>
<span class="token assign-left variable">ROWS</span><span class="token operator">=</span><span class="token number">10</span>               <span class="token comment">#  \u78B0\u649E\u6570 / \u6BCF\u4E00\u6392\u9489\u5B50\u7684\u6570\u91CF\u3002</span>
<span class="token assign-left variable">RANGE</span><span class="token operator">=</span><span class="token number">3</span>               <span class="token comment">#  $RANDOM \u7684\u8F93\u51FA\u8303\u56F4\u4E3A 0 - 2\u3002</span>
<span class="token assign-left variable">POS</span><span class="token operator">=</span><span class="token number">0</span>                 <span class="token comment">#  \u6EDA\u843D\u5DE6\u4FA7\u6216\u662F\u53F3\u4FA7\u3002</span>
<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$$</span>             <span class="token comment">#  \u5C06\u811A\u672C\u7684\u8FDB\u7A0B ID \u4F5C\u4E3A</span>
                      <span class="token comment">#+ \u751F\u6210\u968F\u673A\u6570\u7684\u79CD\u5B50\u3002</span>

<span class="token builtin class-name">declare</span> -a Slots      <span class="token comment"># \u7528\u4E8E\u50A8\u5B58\u843D\u5165\u6BCF\u4E00\u4E2A\u69FD\u4F4D\u7684\u77F3\u5B50\u6570\u91CF\u3002</span>
<span class="token assign-left variable">NUMSLOTS</span><span class="token operator">=</span><span class="token number">21</span>           <span class="token comment"># \u5E95\u90E8\u69FD\u4F4D\u7684\u6570\u91CF\u3002</span>


<span class="token function-name function">Initialize_Slots</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment"># \u521D\u59CB\u5316\u6570\u7EC4\u3002</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">seq</span> $NUMSLOTS <span class="token variable">)</span></span>
<span class="token keyword">do</span>
  Slots<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>                  <span class="token comment"># \u5728\u6B63\u5F0F\u6A21\u62DF\u5F00\u59CB\u4E4B\u524D\u5148\u8F93\u51FA\u7A7A\u884C\u3002</span>
  <span class="token punctuation">}</span>


<span class="token function-name function">Show_Slots</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">&quot; &quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">seq</span> $NUMSLOTS <span class="token variable">)</span></span>   <span class="token comment"># \u66F4\u7CBE\u81F4\u5730\u8F93\u51FA\u6570\u7EC4\u4E2D\u7684\u6240\u6709\u5143\u7D20\u3002</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">printf</span> <span class="token string">&quot;%3d&quot;</span> <span class="token variable">\${Slots<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>   <span class="token comment"># \u6BCF\u4E2A\u7ED3\u679C\u90FD\u5360\u4E09\u4E2A\u5B57\u7B26\u7684\u5BBD\u5EA6\u3002</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token comment"># \u69FD\u4F4D\uFF1A</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; |__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;                                ||&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token comment">#  \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u4EFB\u610F\u4E00\u4E2A\u69FD\u4F4D\u4E2D\u77F3\u5B50\u7684\u6570\u91CF\u8D85\u8FC7 99\uFF0C</span>
     <span class="token comment">#+ \u5C06\u4F1A\u6253\u4E71\u6574\u4E2A\u7A0B\u5E8F\u7684\u663E\u793A\u6548\u679C\u3002</span>
     <span class="token comment">#  \u5982\u679C\u53EA\u8FD0\u884C 500 \u6B21\u901A\u5E38\u53EF\u4EE5\u907F\u514D\u8FD9\u4E2A\u95EE\u9898\u3002</span>
  <span class="token punctuation">}</span>


<span class="token function-name function">Move</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>              <span class="token comment"># \u5C06\u4E00\u4E2A\u5355\u4F4D\u5DE6\u79FB\u3001\u53F3\u79FB\u6216\u4FDD\u6301\u539F\u5730\u4E0D\u52A8\u3002</span>
  <span class="token assign-left variable">Move</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>         <span class="token comment"># $RANDOM \u5230\u5E95\u6709\u591A\u968F\u673A\uFF1F\u8BA9\u6211\u4EEC\u770B\u770B...</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;Move %= RANGE&quot;</span>  <span class="token comment"># \u6807\u51C6\u5316\u81F3\u8303\u56F4 0 - 2\u3002</span>
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$Move</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>                   <span class="token comment"># \u4EC0\u4E48\u4E5F\u4E0D\u505A\uFF0C\u4E5F\u5C31\u662F\u539F\u5730\u4E0D\u52A8\u3002</span>
    <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>POS<span class="token operator">--</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>          <span class="token comment"># \u5DE6\u79FB\u3002</span>
    <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>POS<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>          <span class="token comment"># \u53F3\u79FB\u3002</span>
    * <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Error &quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>   <span class="token comment"># \u51FA\u73B0\u5F02\u5E38\uFF01\uFF08\u5E94\u8BE5\u6C38\u8FDC\u4E0D\u4F1A\u53D1\u751F\uFF09</span>
  <span class="token keyword">esac</span>
  <span class="token punctuation">}</span>


<span class="token function-name function">Play</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                    <span class="token comment"># \u6A21\u62DF\u5355\u6B21\u8FD0\u884C\uFF08\u5185\u90E8\u5FAA\u73AF\uFF09\u3002</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$i</span>&quot;</span> -lt <span class="token string">&quot;<span class="token variable">$ROWS</span>&quot;</span> <span class="token punctuation">]</span>   <span class="token comment"># \u6BCF\u4E00\u6392\u9489\u5B50\u7ECF\u8FC7\u4E14\u4EC5\u7ECF\u8FC7\u4E00\u6B21\u77F3\u5B50\u3002</span>
<span class="token keyword">do</span>
  Move
  <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span>
<span class="token keyword">done</span>

<span class="token assign-left variable">SHIFT</span><span class="token operator">=</span><span class="token number">11</span>                     <span class="token comment"># \u4E3A\u4EC0\u4E48\u662F 11 \u800C\u4E0D\u662F 10\uFF1F</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;POS += <span class="token variable">$SHIFT</span>&quot;</span>          <span class="token comment"># \u5C06\u539F\u70B9\u79FB\u5230\u4E2D\u95F4\u3002</span>
<span class="token variable"><span class="token punctuation">((</span> Slots[$POS]<span class="token operator">++</span> <span class="token punctuation">))</span></span>          <span class="token comment"># \u8C03\u8BD5\uFF1Aecho $POS</span>

<span class="token comment"># echo -n &quot;$POS &quot;</span>

  <span class="token punctuation">}</span>


<span class="token function-name function">Run</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                     <span class="token comment"># \u5916\u90E8\u5FAA\u73AF\u3002</span>
<span class="token assign-left variable">p</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$p</span>&quot;</span> -lt &quot;<span class="token variable">$PASSES</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  Play
  <span class="token variable"><span class="token punctuation">((</span> p<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token assign-left variable">POS</span><span class="token operator">=</span><span class="token number">0</span>                      <span class="token comment"># \u91CD\u7F6E\u4E3A 0\u3002\u4E3A\u4EC0\u4E48\u8981\u8FD9\u4E48\u505A\uFF1F</span>
<span class="token keyword">done</span>
  <span class="token punctuation">}</span>


<span class="token comment"># --------------</span>
<span class="token comment"># main ()</span>
Initialize_Slots
Run
Show_Slots
<span class="token comment"># --------------</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment">#  \u7EC3\u4E60\uFF1A</span>
<span class="token comment">#  ---------</span>
<span class="token comment">#  1) \u5C06\u7ED3\u679C\u663E\u793A\u4E3A\u4E00\u5F20\u76F4\u65B9\u56FE\uFF0C</span>
<span class="token comment">#+    \u6216\u8005\u662F\u4E00\u5F20\u6563\u70B9\u56FE\u3002</span>
<span class="token comment">#  2) \u4FEE\u6539\u811A\u672C\uFF0C\u4F7F\u7528 /dev/urandom \u63D0\u5230 $RANDOM\u3002</span>
<span class="token comment">#     \u8FD9\u4F1A\u4F7F\u811A\u672C\u66F4\u52A0\u7684\u968F\u673A\u5316\u4E48\uFF1F</span>
<span class="token comment">#  3) \u5F53\u6BCF\u4E00\u4E2A\u77F3\u5B50\u843D\u4E0B\u7684\u65F6\u5019\uFF0C</span>
<span class="token comment">#+    \u5C1D\u8BD5\u6DFB\u52A0\u4E00\u4E9B\u52A8\u753B\u6548\u679C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br></div></div><p>Jipe \u63D0\u4F9B\u4E86\u4E00\u4E9B\u751F\u6210\u6307\u5B9A\u8303\u56F4\u5185\u968F\u673A\u6570\u7684\u65B9\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#  \u751F\u6210\u8303\u56F4\u4E3A 6 \u5230 30 \u7684\u968F\u673A\u6570\u3002</span>
   <span class="token assign-left variable">rnumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>RANDOM<span class="token operator">%</span><span class="token number">25</span><span class="token operator">+</span><span class="token number">6</span><span class="token variable">))</span></span>

<span class="token comment">#  \u751F\u6210\u8303\u56F4\u4E3A 6 \u5230 30 \u7684\u968F\u673A\u6570\uFF0C</span>
<span class="token comment">#+ \u5E76\u4E14\u8BE5\u968F\u673A\u6570\u80FD\u88AB 3 \u6574\u9664\u3002</span>
   <span class="token assign-left variable">rnumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">(</span>RANDOM<span class="token operator">%</span><span class="token number">30</span><span class="token operator">/</span><span class="token number">3</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span><span class="token variable">))</span></span>

<span class="token comment">#  \u9700\u8981\u6CE8\u610F\u8FD9\u79CD\u65B9\u6CD5\u5E76\u4E0D\u662F\u5728\u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u80FD\u8D77\u6548\u3002</span>
<span class="token comment">#  \u4F1A\u5728 $RANDOM%30 \u4E3A 0 \u65F6\u5931\u6548\u3002</span>

<span class="token comment">#  Frank Wang \u5EFA\u8BAE\u53EF\u4EE5\u6362\u7528\u4E0B\u9762\u7684\u65B9\u6CD5\uFF1A</span>
   <span class="token assign-left variable">rnumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> RANDOM<span class="token operator">%</span><span class="token number">27</span><span class="token operator">/</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">3</span><span class="token operator">+</span><span class="token number">6</span> <span class="token variable">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Bill Gradwohl \u63D0\u51FA\u4E86\u4E00\u79CD\u6539\u826F\u540E\u7684\u4EC5\u9002\u7528\u4E8E\u6B63\u6570\u7684\u516C\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">rnumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">(</span>RANDOM<span class="token operator">%</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token operator">+</span>divisibleBy<span class="token variable">))</span></span>/divisibleBy*divisibleBy+min<span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Bill \u5728\u8FD9\u8FD8\u7ED9\u51FA\u4E86\u4E00\u4E2A\u751F\u6210\u6307\u5B9A\u8303\u56F4\u5185\u968F\u673A\u6570\u7684\u901A\u7528\u51FD\u6570\u3002</p><h4 id="\u6837\u4F8B-9-14-\u6307\u5B9A\u8303\u56F4\u968F\u673A\u6570" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-14-\u6307\u5B9A\u8303\u56F4\u968F\u673A\u6570" aria-hidden="true">#</a> \u6837\u4F8B 9-14. \u6307\u5B9A\u8303\u56F4\u968F\u673A\u6570</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># random-between.sh</span>
<span class="token comment"># \u751F\u6210\u6307\u5B9A\u8303\u56F4\u5185\u7684\u968F\u673A\u6570\u3002</span>
<span class="token comment"># \u672C\u4E66\u4F5C\u8005\u5728 Bill Gradwhol \u6240\u63D0\u4F9B\u7684\u811A\u672C\u7684\u57FA\u7840\u4E0A\u4F5C\u4E86\u4E9B\u7EC6\u5FAE\u4FEE\u6539\u3002</span>
<span class="token comment"># Anthony Le Clezio \u4FEE\u6B63\u4E86 187 \u884C\u548C 189 \u884C\u3002</span>
<span class="token comment"># \u672C\u4E66\u88AB\u6388\u6743\u4F7F\u7528\u8BE5\u811A\u672C\u3002</span>


<span class="token function-name function">randomBetween</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">#  \u751F\u6210\u4E00\u4E2A\u8303\u56F4\u5728 $min \u548C $max \u4E4B\u95F4\uFF0C</span>
   <span class="token comment">#+ \u5E76\u4E14\u80FD\u88AB $divisibleBy \u6574\u9664\u7684</span>
   <span class="token comment">#+ \u968F\u673A\u6B63\u6570\u6216\u8D1F\u6570\u3002</span>
   <span class="token comment">#  \u8FD4\u56DE\u7684\u968F\u673A\u6570\u9075\u5FAA\u5408\u7406\u7684\u968F\u673A\u5206\u5E03\u3002</span>
   
   <span class="token comment">#  Bill Gradwohl - Oct 1, 2003</span>
   
   <span class="token function-name function">syntax</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment"># \u5D4C\u5957\u51FD\u6570\u3002</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;Syntax: randomBetween [min] [max] [multiple]&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Expects up to 3 passed parameters, &quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;but all are completely optional.&quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;min is the minimum value&quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;max is the maximum value&quot;</span>
      <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;multiple specifies that the answer must be &quot;</span>
      <span class="token builtin class-name">echo</span>     <span class="token string">&quot;a multiple of this value.&quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;    i.e. answer must be evenly divisible by this number.&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;If any value is missing, defaults area supplied as: 0 32767 1&quot;</span>
      <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Successful completion returns 0, &quot;</span>
      <span class="token builtin class-name">echo</span>      <span class="token string">&quot;unsuccessful completion returns&quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;function syntax and 1.&quot;</span>
      <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;The answer is returned in the global variable &quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;randomBetweenAnswer&quot;</span>
      <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Negative values for any passed parameter are &quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;handled correctly.&quot;</span>
   <span class="token punctuation">}</span>
   
   <span class="token builtin class-name">local</span> <span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">:-</span>0}</span>
   <span class="token builtin class-name">local</span> <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token variable">\${2<span class="token operator">:-</span>32767}</span>
   <span class="token builtin class-name">local</span> <span class="token assign-left variable">divisibleBy</span><span class="token operator">=</span><span class="token variable">\${3<span class="token operator">:-</span>1}</span>
   <span class="token comment"># \u8003\u8651\u5230\u6CA1\u6709\u7ED9\u51FD\u6570\u4F20\u53C2\u7684\u60C5\u51B5\uFF0C\u7ED9\u53D8\u91CF\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u3002</span>
   
   <span class="token builtin class-name">local</span> x
   <span class="token builtin class-name">local</span> spread
   
   <span class="token comment"># \u786E\u4FDD divisibleBy \u7684\u503C\u4E3A\u6B63\u6570\u3002</span>
   <span class="token punctuation">[</span> <span class="token variable">\${divisibleBy}</span> -lt <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">divisibleBy</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">0</span><span class="token operator">-</span>divisibleBy<span class="token variable">))</span></span>
   
   <span class="token comment"># \u5408\u89C4\u6821\u9A8C\u3002</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -gt <span class="token number">3</span> -o <span class="token variable">\${divisibleBy}</span> -eq <span class="token number">0</span> -o  <span class="token variable">\${min}</span> -eq <span class="token variable">\${max}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      syntax
      <span class="token builtin class-name">return</span> <span class="token number">1</span>
   <span class="token keyword">fi</span>
   
   <span class="token comment"># \u68C0\u67E5 min \u548C max \u7684\u503C\u662F\u5426\u98A0\u5012\u3002</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${min}</span> -gt <span class="token variable">\${max}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token comment"># \u4EA4\u6362\u5B83\u4EEC\u3002</span>
      <span class="token assign-left variable">x</span><span class="token operator">=</span><span class="token variable">\${min}</span>
      <span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token variable">\${max}</span>
      <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token variable">\${x}</span>
   <span class="token keyword">fi</span>
   
   <span class="token comment">#  \u5982\u679C min \u503C\u672C\u8EAB\u4E0D\u80FD\u88AB $divisibleBy \u6574\u9664\uFF0C</span>
   <span class="token comment">#+ \u5219\u5C06\u5176\u4FEE\u6B63\u5230\u8303\u56F4\u5185\u3002</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>min<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span> -ne <span class="token variable">\${min}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${min}</span> -lt <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>min<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">else</span>
         <span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">((</span>min<span class="token operator">/</span>divisibleBy<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">fi</span>
   <span class="token keyword">fi</span>
   
   <span class="token comment">#  \u5982\u679C max \u503C\u672C\u8EAB\u4E0D\u80FD\u88AB $divisibleBy \u6574\u9664\uFF0C</span>
   <span class="token comment">#+ \u5219\u5C06\u5176\u4FEE\u6B63\u5230\u8303\u56F4\u5185\u3002</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>max<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span> -ne <span class="token variable">\${max}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${max}</span> -lt <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">((</span>max<span class="token operator">/</span>divisibleBy<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">else</span>
         <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>max<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">fi</span>
   <span class="token keyword">fi</span>

   <span class="token comment">#  ---------------------------------------------------------------------</span>
   <span class="token comment">#  \u63A5\u4E0B\u6765\u5F00\u59CB\u771F\u6B63\u7684\u5185\u5BB9\u3002</span>
   
   <span class="token comment">#  \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E3A\u4E86\u5F97\u5230\u7AEF\u70B9\u95F4\u5408\u7406\u7684\u968F\u673A\u5206\u5E03\uFF0C</span>
   <span class="token comment">#+ \u968F\u673A\u6570\u7684\u53D6\u503C\u8303\u56F4\u5E94\u662F 0 \u81F3 abs(max-min)+divisibleBy\uFF0C</span>
   <span class="token comment">#+ \u800C\u4E0D\u662F\u7B80\u5355\u7684 abs(max-min)+1\u3002</span>
   
   <span class="token comment">#  \u5C11\u91CF\u7684\u589E\u957F\u5C06\u4F1A\u5E26\u6765\u7AEF\u70B9\u95F4</span>
   <span class="token comment">#+ \u5408\u7406\u7684\u968F\u673A\u5206\u5E03\u3002</span>
   
   <span class="token comment">#  \u5C06\u516C\u5F0F\u4FEE\u6539\u4E3A\u4F7F\u7528 abs(max-min)+1 \u4ECD\u7136\u53EF\u4EE5\u5F97\u5230\u6B63\u786E\u7684\u7B54\u6848\uFF0C</span>
   <span class="token comment">#+ \u4F46\u662F\u83B7\u5F97\u7684\u8FD9\u4E9B\u968F\u673A\u6570\u7684\u968F\u673A\u6027\u662F\u6709\u7F3A\u9677\u7684\uFF0C</span>
   <span class="token comment">#+ \u56E0\u4E3A\u8FD9\u79CD\u60C5\u51B5\u4E0B\u8FD4\u56DE\u7684\u7AEF\u70B9\u503C ($min \u548C $max) \u7684\u6B21\u6570\u8FDC\u5C11\u4E8E</span>
   <span class="token comment">#+ \u4F7F\u7528\u6B63\u786E\u516C\u5F0F\u65F6\u6240\u8FD4\u56DE\u7684\u6B21\u6570\u3002</span>
   <span class="token comment">#  ---------------------------------------------------------------------</span>

   <span class="token assign-left variable">spread</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>max<span class="token operator">-</span>min<span class="token variable">))</span></span>
   <span class="token comment">#  Omair Eshkenazi \u6307\u51FA\u5728\u8FD9\u91CC\u6CA1\u6709\u5FC5\u8981\u8FDB\u884C\u6821\u9A8C\uFF0C</span>
   <span class="token comment">#+ \u56E0\u4E3A max \u548C min \u7684\u503C\u5DF2\u7ECF\u88AB\u4EA4\u6362\u4E86\u3002</span>
   <span class="token punctuation">[</span> <span class="token variable">\${spread}</span> -lt <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">spread</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">0</span><span class="token operator">-</span>spread<span class="token variable">))</span></span>
   <span class="token builtin class-name">let</span> <span class="token assign-left variable">spread</span><span class="token operator">+=</span>divisibleBy
   <span class="token assign-left variable">randomBetweenAnswer</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">(</span>RANDOM<span class="token operator">%</span>spread<span class="token punctuation">)</span><span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token operator">+</span>min<span class="token variable">))</span></span>
   
   <span class="token builtin class-name">return</span> <span class="token number">0</span>
   
   <span class="token comment">#  \u4F46\u662F Paulo Marcel Coelho Aragao \u6307\u51FA</span>
   <span class="token comment">#+ \u5F53 $max \u548C $min \u4E0D\u80FD\u88AB $divisibleBy \u6574\u9664\u65F6\uFF0C</span>
   <span class="token comment">#+ \u8BE5\u516C\u5F0F\u5C31\u4F1A\u5931\u6548\u3002</span>
   <span class="token comment">#</span>
   <span class="token comment">#  \u4ED6\u5EFA\u8BAE\u66FF\u6362\u4E3A\u4E0B\u9762\u7684\u516C\u5F0F\uFF1A</span>
   <span class="token comment">#    rnumber = $(((RANDOM%(max-min+1)+min)/divisibleBy*divisibleBy))</span>
   
<span class="token punctuation">}</span>

<span class="token comment"># \u63A5\u4E0B\u6765\u6D4B\u8BD5\u51FD\u6570\u3002</span>
<span class="token assign-left variable">min</span><span class="token operator">=</span>-14
<span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token assign-left variable">divisibleBy</span><span class="token operator">=</span><span class="token number">3</span>


<span class="token comment">#  \u5FAA\u73AF\u6267\u884C\u8DB3\u591F\u591A\u6B21\u6570\u7684\u51FD\u6570\uFF0C\u751F\u6210\u5305\u542B\u8FD9\u4E9B\u968F\u673A\u6570\u7684\u6570\u7EC4\uFF0C</span>
<span class="token comment">#+ \u7136\u540E\u6821\u9A8C\u6570\u7EC4\u4E2D\u662F\u5426\u5305\u542B\u4E86\u7AEF\u70B9\u8303\u56F4\u5185\u7684\u6BCF\u4E00\u4E2A\u6570\u5B57\u3002</span>

<span class="token builtin class-name">declare</span> -a answer
<span class="token assign-left variable">minimum</span><span class="token operator">=</span><span class="token variable">\${min}</span>
<span class="token assign-left variable">maximum</span><span class="token operator">=</span><span class="token variable">\${max}</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>minimum<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span> -ne <span class="token variable">\${minimum}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${minimum}</span> -lt <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token assign-left variable">minimum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>minimum<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">else</span>
         <span class="token assign-left variable">minimum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">((</span>minimum<span class="token operator">/</span>divisibleBy<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">fi</span>
   <span class="token keyword">fi</span>
   
   
   <span class="token comment">#  \u5982\u679C max \u503C\u672C\u8EAB\u4E0D\u80FD\u88AB $divisibleBy \u6574\u9664\uFF0C</span>
   <span class="token comment">#+ \u5219\u5C06\u5176\u4FEE\u6B63\u5230\u8303\u56F4\u5185\u3002</span>
   
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>maximum<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span> -ne <span class="token variable">\${maximum}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${maximum}</span> -lt <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token assign-left variable">maximum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">((</span>maximum<span class="token operator">/</span>divisibleBy<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">else</span>
         <span class="token assign-left variable">maximum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>maximum<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">fi</span>
   <span class="token keyword">fi</span>


<span class="token comment">#  \u9700\u8981\u4FDD\u8BC1\u6570\u7EC4\u7684\u4E0B\u6807\u53EA\u80FD\u4E3A\u6B63\u6570\uFF0C</span>
<span class="token comment">#+ \u56E0\u6B64\u8FD9\u91CC\u9700\u8981\u901A\u8FC7\u4F4D\u79FB\u6765\u4FDD\u8BC1</span>
<span class="token comment">#+ \u7ED3\u679C\u4E3A\u6B63\u3002</span>

<span class="token assign-left variable">disp</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">0</span><span class="token operator">-</span>minimum<span class="token variable">))</span></span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span>\${minimum}<span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>\${maximum}<span class="token punctuation">;</span> i<span class="token operator">+=</span>divisibleBy<span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
   answer<span class="token punctuation">[</span>i+disp<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">done</span>


<span class="token comment"># \u73B0\u5728\u5F00\u59CB\u5FAA\u73AF\u6267\u884C\u51FD\u6570\u4EE5\u83B7\u5F97\u5927\u91CF\u7684\u968F\u673A\u6570\u3002</span>
<span class="token assign-left variable">loopIt</span><span class="token operator">=</span><span class="token number">1000</span>   <span class="token comment">#  \u811A\u672C\u7684\u4F5C\u8005\u5EFA\u8BAE\u4F7F\u7528 100000\uFF0C</span>
              <span class="token comment">#+ \u4F46\u662F\u8FD9\u4F1A\u82B1\u8D39\u5927\u91CF\u7684\u65F6\u95F4\u3002</span>
              
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>\${loopIt}<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>

   <span class="token comment">#  \u6CE8\u610F\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u98A0\u5012\u4E86 min \u548C max \u7684\u503C\uFF0C</span>
   <span class="token comment">#+ \u4E3A\u7684\u662F\u6821\u9A8C\u51FD\u6570\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u662F\u5426\u80FD\u6B63\u5E38\u6267\u884C\u3002</span>
   
   randomBetween <span class="token variable">\${max}</span> <span class="token variable">\${min}</span> <span class="token variable">\${divisibleBy}</span>
   
   <span class="token comment"># \u5982\u679C\u83B7\u5F97\u4E86\u975E\u9884\u671F\u7684\u7B54\u6848\uFF0C\u5219\u62A5\u9519\u3002</span>
   <span class="token punctuation">[</span> <span class="token variable">\${randomBetweenAnswer}</span> -lt <span class="token variable">\${min}</span> -o <span class="token variable">\${randomBetweenAnswer}</span> -gt <span class="token variable">\${max}</span> <span class="token punctuation">]</span> <span class="token punctuation">\\</span>
   <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> MIN or MAX error - <span class="token variable">\${randomBetweenAnswer}</span><span class="token operator">!</span>
   <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>randomBetweenAnswer<span class="token operator">%</span>\${divisibleBy}<span class="token variable">))</span></span> -ne <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">\\</span>
   <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> DIVISIBLE BY error - <span class="token variable">\${randomBetweenAnswer}</span><span class="token operator">!</span>
   
   <span class="token comment"># \u4FDD\u5B58\u7EDF\u8BA1\u7ED3\u679C\u3002</span>
   answer<span class="token punctuation">[</span>randomBetweenAnswer+disp<span class="token punctuation">]</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>answer[randomBetweenAnswer<span class="token operator">+</span>disp]<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
<span class="token keyword">done</span>



<span class="token comment"># \u6821\u9A8C\u6700\u7EC8\u7ED3\u679C\u3002</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span>\${minimum}<span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>\${maximum}<span class="token punctuation">;</span> i<span class="token operator">+=</span>divisibleBy<span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
   <span class="token punctuation">[</span> <span class="token variable">\${answer<span class="token punctuation">[</span>i+disp<span class="token punctuation">]</span>}</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">\\</span>
   <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;We never got an answer of <span class="token variable">$i</span>.&quot;</span> <span class="token punctuation">\\</span>
   <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${i}</span> occurred <span class="token variable">\${answer<span class="token punctuation">[</span>i+disp<span class="token punctuation">]</span>}</span> times.&quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br></div></div><p>\u90A3\u4E48 <code>$RANDOM</code> \u5230\u5E95\u6709\u591A\u968F\u673A\uFF1F\u6700\u597D\u7684\u6D4B\u8BD5\u65B9\u6CD5\u5C31\u662F\u5199\u4E00\u4E2A\u811A\u672C\u8DDF\u8E2A\u7531 <code>$RANDOM</code> \u751F\u6210\u7684\u968F\u673A\u6570\u7684\u5206\u5E03\u3002\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u591A\u6295\u51E0\u6B21\u7531 <code>$RANDOM</code> \u505A\u7684\u9AB0\u5B50...</p><h4 id="\u6837\u4F8B-9-15-\u7528-random-\u6295\u9AB0\u5B50" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-15-\u7528-random-\u6295\u9AB0\u5B50" aria-hidden="true">#</a> \u6837\u4F8B 9-15. \u7528 <code>RANDOM</code> \u6295\u9AB0\u5B50</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># RANDOM \u6709\u591A\u968F\u673A\uFF1F</span>

<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$$</span>       <span class="token comment"># \u7528\u811A\u672C\u7684\u8FDB\u7A0B ID \u91CD\u7F6E\u968F\u673A\u6570\u751F\u6210\u5668\u79CD\u5B50\u3002</span>

<span class="token assign-left variable">PIPS</span><span class="token operator">=</span><span class="token number">6</span>          <span class="token comment"># \u9AB0\u5B50\u6709 6 \u4E2A\u70B9\u3002</span>
<span class="token assign-left variable">MAXTHORWS</span><span class="token operator">=</span><span class="token number">600</span>   <span class="token comment"># \u5982\u679C\u4F60\u6CA1\u6709\u66F4\u597D\u6D88\u78E8\u65F6\u95F4\u7684\u529E\u6CD5\uFF0C\u5C31\u589E\u52A0\u8FD9\u4E2A\u503C\u3002</span>
                <span class="token comment"># \u6295\u9AB0\u5B50\u7684\u6B21\u6570\u3002</span>

<span class="token assign-left variable">ones</span><span class="token operator">=</span><span class="token number">0</span>          <span class="token comment">#  \u5FC5\u987B\u521D\u59CB\u5316\u8BA1\u6570\u5668\u7684\u503C\u4E3A 0\uFF0C</span>
<span class="token assign-left variable">twos</span><span class="token operator">=</span><span class="token number">0</span>          <span class="token comment">#+ \u56E0\u4E3A\u672A\u521D\u59CB\u5316\u7684\u53D8\u91CF\u7684\u503C\u4E3A null \u800C\u975E 0\u3002</span>
<span class="token assign-left variable">threes</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">fours</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">fives</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">sixes</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token function-name function">print_result</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ones =   <span class="token variable">$ones</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;twos =   <span class="token variable">$twos</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;threes = <span class="token variable">$threes</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;fours =  <span class="token variable">$fours</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;fives =  <span class="token variable">$fives</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;sixes =  <span class="token variable">$sixes</span>&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token punctuation">}</span>

<span class="token function-name function">update_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token number">0</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>ones<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>   <span class="token comment"># \u56E0\u4E3A\u9AB0\u5B50\u6CA1\u6709 0 \u70B9\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u5176\u5B9E\u5BF9\u5E94\u7684\u662F 1 \u70B9\u3002</span>
  <span class="token number">1</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>twos<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>   <span class="token comment"># \u8FD9\u4E2A\u5BF9\u5E94 2 \u70B9\u3002</span>
  <span class="token number">2</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>threes<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token comment"># \u4EE5\u6B64\u7C7B\u63A8\u3002</span>
  <span class="token number">3</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>fours<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token number">4</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>fives<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token number">5</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>sixes<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span>


<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$throw</span>&quot;</span> -lt <span class="token string">&quot;<span class="token variable">$MAXTHROWS</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;die1 = RANDOM % <span class="token variable">$PIPS</span>&quot;</span>
  update_count <span class="token variable">$die1</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;throw += 1&quot;</span>
<span class="token keyword">done</span>

print_result

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment">#  \u5047\u8BBE RANDOM \u662F\u771F\u968F\u673A\uFF0C\u90A3\u4E48\u8BA1\u6570\u7ED3\u679C\u5E94\u8BE5\u5747\u5300\u5206\u5E03\u3002</span>
<span class="token comment">#  \u5F53 $MAXTHROWS \u7684\u503C\u4E3A 600 \u65F6\uFF0C\u6BCF\u4E00\u4E2A\u8BA1\u6570\u5668\u7684\u503C\u90FD\u5E94\u8BE5\u5728 100 \u5DE6\u53F3\uFF0C</span>
<span class="token comment">#+ \u4E0A\u4E0B\u6D6E\u52A8\u5927\u7EA6 20\u3002</span>
<span class="token comment">#</span>
<span class="token comment">#  \u8BB0\u4F4F RANDOM \u662F\u4E00\u4E2A ***\u4F2A\u968F\u673A*** \u751F\u6210\u5668\uFF0C</span>
<span class="token comment">#+ \u5E76\u4E14\u4E5F\u4E0D\u662F\u5176\u4E2D\u6700\u4F18\u79C0\u7684\u90A3\u4E00\u4E2A\u3002</span>

<span class="token comment">#  \u968F\u673A\u5316\u662F\u4E00\u4E2A\u5F88\u6DF1\u5965\u4E14\u590D\u6742\u7684\u8BDD\u9898\u3002</span>
<span class="token comment">#  \u8DB3\u591F\u957F\u7684\u201C\u968F\u673A\u201D\u5E8F\u5217\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E00\u4E9B</span>
<span class="token comment">#+ \u6DF7\u4E71\u6216\u5176\u4ED6\u975E\u968F\u673A\u5316\u7684\u8868\u73B0\u3002</span>

<span class="token comment"># \u7EC3\u4E60\uFF08\u7B80\u5355\uFF09\uFF1A</span>
<span class="token comment"># ---------------</span>
<span class="token comment"># \u91CD\u5199\u811A\u672C\uFF0C\u4FEE\u6539\u4E3A\u6295\u63B7\u786C\u5E01 1000 \u6B21\u3002</span>
<span class="token comment"># \u663E\u793A\u4E3A\u6B63\u9762 &quot;HEADS&quot; \u548C\u80CC\u9762 &quot;TAILS&quot;\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><p>\u4ECE\u4E0A\u4E00\u4E2A\u6837\u4F8B\u4E2D\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u5728\u6BCF\u6B21\u8C03\u7528 <code>RANDOM</code> \u751F\u6210\u5668\u65F6\uFF0C\u6700\u597D\u5229\u7528\u91CD\u7F6E\u751F\u6210\u5668\u79CD\u5B50\u3002\u5728 <code>RANDOM</code> \u751F\u6210\u5668\u4E2D\u4F7F\u7528\u76F8\u540C\u7684\u79CD\u5B50\u4F1A\u751F\u6210\u76F8\u540C\u5E8F\u5217\u7684\u968F\u673A\u6570\u3002<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>\uFF08\u4E0E C \u8BED\u8A00\u4E2D\u7684 <code>random()</code> \u51FD\u6570\u7684\u884C\u4E3A\u4E00\u81F4\uFF09</p><h4 id="\u6837\u4F8B-9-16-\u91CD\u7F6E-random-\u79CD\u5B50" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-16-\u91CD\u7F6E-random-\u79CD\u5B50" aria-hidden="true">#</a> \u6837\u4F8B 9-16. \u91CD\u7F6E <code>RANDOM</code> \u79CD\u5B50</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># seeding-random.sh: \u8BBE\u7F6E RANDOM \u53D8\u91CF\u7684\u79CD\u5B50\u3002</span>
<span class="token comment"># \u7248\u672C\u53F7 1.1, \u53D1\u5E03\u65E5\u671F 09 Feb 2013</span>

<span class="token assign-left variable">MAXCOUNT</span><span class="token operator">=</span><span class="token number">25</span>       <span class="token comment"># \u751F\u6210\u968F\u673A\u6570\u7684\u4E2A\u6570\u3002</span>
<span class="token assign-left variable">SEED</span><span class="token operator">=</span>

<span class="token function-name function">random_numbers</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token builtin class-name">local</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token builtin class-name">local</span> number

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$count</span>&quot;</span> -lt <span class="token string">&quot;<span class="token variable">$MAXCOUNT</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$number</span> &quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;count++&quot;</span>
<span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">SEED</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$SEED</span>      <span class="token comment"># \u8BBE\u7F6E\u53D8\u91CF RANDOM \u4F1A\u4E3A\u968F\u673A\u6570\u751F\u6210\u5668\u8BBE\u7F6E\u79CD\u5B50\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random seed = <span class="token variable">$SEED</span>&quot;</span>
random_numbers

<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$SEED</span>      <span class="token comment"># \u540C\u6837\u7684\u79CD\u5B50 ...</span>
<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Again, with same random seed ...&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random seed = <span class="token variable">$SEED</span>&quot;</span>
random_numbers    <span class="token comment"># ... \u751F\u6210\u4E86\u540C\u6837\u7684\u6570\u5B57\u5E8F\u5217\u3002</span>
                  <span class="token comment">#</span>
                  <span class="token comment"># \u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\u91CD\u590D\u4E00\u4E2A\u968F\u673A\u5316\u5E8F\u5217\u4F1A\u6709\u7528\uFF1F</span>
                  
<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">SEED</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$SEED</span>      <span class="token comment"># \u7528\u4E0D\u540C\u7684\u79CD\u5B50\u518D\u8BD5\u4E00\u6B21 ...</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random seed = <span class="token variable">$SEED</span>&quot;</span>
random_numbers    <span class="token comment"># ... \u751F\u6210\u4E86\u4E0D\u540C\u7684\u6570\u5B57\u5E8F\u5217\u3002</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># RANDOM=$$  \u5229\u7528\u811A\u672C\u7684\u8FDB\u7A0B ID \u8BBE\u7F6E RANDOM \u7684\u79CD\u5B50\u3002</span>
<span class="token comment"># \u540C\u6837\u4E5F\u53EF\u4EE5\u5229\u7528 &#39;time&#39; \u6216\u662F &#39;date&#39; \u547D\u4EE4\u8BBE\u7F6E RANDOM \u7684\u79CD\u5B50\u3002</span>

<span class="token comment"># \u66F4\u82B1\u54E8\u4E00\u70B9\u7684 ...</span>
<span class="token assign-left variable">SEED</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">head</span> -1 /dev/urandom <span class="token operator">|</span> od -N <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $2 }&#39;</span><span class="token operator">|</span> <span class="token function">sed</span> s/^0*//<span class="token variable">)</span></span>
<span class="token comment">#  \u4ECE /dev/urandom \uFF08\u7CFB\u7EDF\u7684\u4F2A\u968F\u673A\u8BBE\u5907\u6587\u4EF6\uFF09\u4E2D</span>
<span class="token comment">#+ \u83B7\u53D6\u4F2A\u968F\u673A\u8F93\u51FA\uFF0C</span>
<span class="token comment">#+ \u7136\u540E\u901A\u8FC7 &quot;od&quot; \u8F6C\u6362\u4E3A\u53EF\u6253\u5370\u516B\u8FDB\u5236\u5B57\u7B26\u884C\uFF0C</span>
<span class="token comment">#+ \u7136\u540E &quot;awk&quot; \u547D\u4EE4\u4F1A\u68C0\u7D22\u51FA\u4E00\u4E2A\u6570\u5B57\u4F5C\u4E3A\u79CD\u5B50\uFF0C</span>
<span class="token comment">#+ \u6700\u540E\u7528 &quot;sed&quot; \u547D\u4EE4\u5220\u9664\u6570\u5B57\u524D\u9762\u6240\u6709\u7684\u524D\u7F6E 0\u3002</span>
<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$SEED</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random seed = <span class="token variable">$SEED</span>&quot;</span>
random_numbers

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p>{% hint style=&quot;info&quot; %}</p><p>\u4F2A\u8BBE\u5907\u6587\u4EF6 <code>/dev/urandom</code> \u63D0\u4F9B\u4E86\u6BD4 <code>$RANDOM</code> \u53D8\u91CF\u66F4\u968F\u673A\u5316\u7684\u4F2A\u968F\u673A\u6570\u3002\u547D\u4EE4 <code>dd if=/dev/urandom of=targetfile bs=1 count=XXX</code> \u5C06\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u5747\u5300\u5206\u5E03\u7684\u4F2A\u968F\u673A\u6570\u7684\u6587\u4EF6\u3002\u4F46\u662F\u60F3\u8981\u5728\u811A\u672C\u4E2D\u5C06\u8FD9\u4E9B\u968F\u673A\u6570\u8D4B\u503C\u7ED9\u53D8\u91CF\u9700\u8981\u505A\u4E00\u4E9B\u53D8\u901A\uFF0C\u6BD4\u5982\u4F7F\u7528\u547D\u4EE4 <a href=""><code>od</code></a> \u8FDB\u884C\u8FC7\u6EE4\uFF08\u53C2\u7167\u4E0A\u9762\u7684\u6837\u4F8B\u4EE5\u53CA <a href="">\u6837\u4F8B 16-14</a> \u548C <a href="">\u6837\u4F8B A-36</a>\uFF09\u6216\u8005\u4F7F\u7528\u7BA1\u9053\u5BFC\u5165\u547D\u4EE4 <a href="">md5sum</a> \u4E2D\uFF08\u53C2\u7167 <a href="">\u6837\u4F8B 36-16</a>\uFF09\u3002</p><p>\u5F53\u7136\u4E5F\u6709\u5176\u4ED6\u5728\u811A\u672C\u4E2D\u751F\u6210\u4F2A\u968F\u673A\u6570\u7684\u65B9\u6CD5\u3002\u6BD4\u5982 <code>Awk</code> \u547D\u4EE4\u5C31\u63D0\u4F9B\u4E86\u8FD9\u6837\u4E00\u79CD\u975E\u5E38\u7B80\u6613\u7684\u65B9\u6CD5\u3002</p><h4 id="\u6837\u4F8B-9-17-\u4F7F\u7528-awk-\u547D\u4EE4\u751F\u6210\u4F2A\u968F\u673A\u6570" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-17-\u4F7F\u7528-awk-\u547D\u4EE4\u751F\u6210\u4F2A\u968F\u673A\u6570" aria-hidden="true">#</a> \u6837\u4F8B 9-17. \u4F7F\u7528 <a href=""><code>awk</code></a> \u547D\u4EE4\u751F\u6210\u4F2A\u968F\u673A\u6570</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#  random2.sh: \u8FD4\u56DE\u5927\u5C0F\u5728 0 - 1 \u5185\uFF0C</span>
<span class="token comment">#+ \u7CBE\u5EA6\u4E3A\u5C0F\u6570\u70B9\u540E 6 \u4F4D\u7684\u4F2A\u968F\u673A\u6570\u3002\u4F8B\u5982\uFF1A0.822725</span>
<span class="token comment">#  \u4F7F\u7528 awk rand() \u51FD\u6570\u3002</span>

<span class="token assign-left variable">AWKSCRIPT</span><span class="token operator">=</span><span class="token string">&#39; { srand(); print rand() } &#39;</span>
<span class="token comment">#           \u4F20\u9012\u7ED9 awk \u7684\u547D\u4EE4\u6216\u53C2\u6570</span>
<span class="token comment"># \u6CE8\u610F srand() \u91CD\u7F6E\u4E86 awk \u7684\u968F\u673A\u6570\u751F\u6210\u79CD\u5B50\u3002</span>


<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Random number between 0 and 1 = &quot;</span>

<span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&quot;<span class="token variable">$AWKSCRIPT</span>&quot;</span>
<span class="token comment"># \u5982\u679C\u7701\u7565 &#39;echo&#39; \u5C06\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>


<span class="token comment"># \u7EC3\u4E60\uFF1A</span>
<span class="token comment"># ---------</span>

<span class="token comment"># 1) \u4F7F\u7528\u5FAA\u73AF\u7ED3\u6784\uFF0C\u8F93\u51FA 10 \u4E2A\u4E0D\u540C\u7684\u968F\u673A\u6570\u3002</span>
<span class="token comment">#      \uFF08\u63D0\u793A\uFF1A\u4F60\u5FC5\u987B\u5728\u6BCF\u6B21\u5FAA\u73AF\u4E2D\u4F7F\u7528 srand() \u51FD\u6570\u91CD\u7F6E\u79CD\u5B50\u4EE5\u83B7\u5F97\u4E0D\u540C\u7684\u968F\u673A\u6570\u79CD\u5B50\u3002</span>
<span class="token comment">#+       \u5982\u679C\u4F60\u7701\u7565\u4E86\u8FD9\u4E00\u6B65\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F\uFF09</span>

<span class="token comment"># 2) \u5229\u7528\u6574\u578B\u4E58\u6570\u4F5C\u4E3A\u968F\u673A\u6570\u7684\u7F29\u653E\u56E0\u5B50\uFF0C</span>
<span class="token comment">#+   \u751F\u6210\u5927\u5C0F\u5728 10 \u5230 100 \u4E4B\u95F4\u7684\u968F\u673A\u6570\u3002</span>

<span class="token comment"># 3) \u5185\u5BB9\u4E0E\u7EC3\u4E60 #2 \u76F8\u540C\uFF0C\u53EA\u662F\u8FD9\u6B21\u751F\u6210\u968F\u673A\u6574\u6570\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u540C\u6837\uFF0C\u547D\u4EE4 <a href=""><code>date</code></a> \u53EF\u4EE5\u7528\u4E8E <a href="">\u751F\u6210\u6574\u578B\u968F\u673A\u6570\u5E8F\u5217</a>\u3002</p><p>{% endhint %}</p><h2 id="\u6CE8\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u8BB0" aria-hidden="true">#</a> \u6CE8\u8BB0</h2><p>{% hint style=&quot;info&quot; %} \u771F\u6B63\u7684\u201C\u968F\u673A\u6027\u201D\uFF0C\u5C31\u5176\u5B58\u5728\u800C\u8A00\uFF0C\u53EA\u5B58\u5728\u4E8E\u4E00\u4E9B\u7C7B\u4F3C\u653E\u5C04\u6027\u8870\u53D8\u8FD9\u6837\u8FD8\u672A\u88AB\u5B8C\u5168\u7406\u89E3\u7684\u81EA\u7136\u73B0\u8C61\u4E2D\u3002\u8BA1\u7B97\u673A\u53EA\u80FD\u6A21\u62DF\u8FD9\u6837\u7684\u968F\u673A\u6027\uFF0C\u56E0\u6B64\u8BA1\u7B97\u673A\u751F\u6210\u7684\u201C\u968F\u673A\u6570\u201D\u5E8F\u5217\u88AB\u79F0\u4F5C\u4F2A\u968F\u673A\u6570\u3002 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} \u8BA1\u7B97\u673A\u7528\u4E8E\u751F\u6210\u4F2A\u968F\u673A\u6570\u7684\u79CD\u5B50\u53EF\u4EE5\u88AB\u89C6\u4F5C\u4E00\u4E2A\u6807\u8BC6\u6807\u7B7E\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u5C06\u7528\u79CD\u5B50 23 \u751F\u6210\u7684\u968F\u673A\u6570\u5E8F\u5217\u89C6\u4F5C\u7B2C23\u53F7\u5E8F\u5217\u3002</p><p>\u4F2A\u968F\u673A\u6570\u5E8F\u5217\u7684\u4E00\u4E2A\u5C5E\u6027\u662F\u8BE5\u5E8F\u5217\u5728\u5F00\u59CB\u91CD\u590D\u4E4B\u524D\u7684\u5468\u671F\u957F\u5EA6\u3002\u4E00\u4E2A\u597D\u7684\u4F2A\u968F\u673A\u6570\u751F\u6210\u5668\u80FD\u591F\u751F\u6210\u5468\u671F\u975E\u5E38\u957F\u7684\u5E8F\u5217\u3002 {% endhint %}</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>Footnote Placeholder <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="footnote2" class="footnote-item"><p>Footnote Placeholder <a href="#footnote-ref2" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,35);function p(l,t){return e}var c=n(a,[["render",p],["__file","09_3_random_generate_random_integer.html.vue"]]);export{c as default};
