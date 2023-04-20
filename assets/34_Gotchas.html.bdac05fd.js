import{_ as s,e as n}from"./app.37ca1d6f.js";const a={},e=n(`<h1 id="\u7B2C34\u7AE0-\u9677\u9631" tabindex="-1"><a class="header-anchor" href="#\u7B2C34\u7AE0-\u9677\u9631" aria-hidden="true">#</a> \u7B2C34\u7AE0 \u9677\u9631</h1><blockquote><p>Turandot: Gli enigmi sono tre, la morte una! Caleph: No, no! Gli enigmi sono tre, una la vita!</p></blockquote><blockquote><p>\u2014\u2014Puccini</p></blockquote><h3 id="\u4EE5\u4E0B\u7684\u505A\u6CD5-\u975E\u63A8\u8350-\u5C06\u8BA9\u4F60\u539F\u672C\u5E73\u6DE1\u65E0\u5947\u7684\u751F\u6D3B\u6FC0\u52A8\u4E0D\u5DF2\u3002" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u4E0B\u7684\u505A\u6CD5-\u975E\u63A8\u8350-\u5C06\u8BA9\u4F60\u539F\u672C\u5E73\u6DE1\u65E0\u5947\u7684\u751F\u6D3B\u6FC0\u52A8\u4E0D\u5DF2\u3002" aria-hidden="true">#</a> \u4EE5\u4E0B\u7684\u505A\u6CD5\uFF08\u975E\u63A8\u8350\uFF09\u5C06\u8BA9\u4F60\u539F\u672C\u5E73\u6DE1\u65E0\u5947\u7684\u751F\u6D3B\u6FC0\u52A8\u4E0D\u5DF2\u3002</h3><ul><li>\u5C06\u4FDD\u7559\u5B57\u6216\u7279\u6B8A\u5B57\u7B26\u58F0\u660E\u4E3A\u53D8\u91CF\u540D\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">case</span><span class="token operator">=</span>value0       <span class="token comment"># \u5F15\u53D1\u9519\u8BEF\u3002</span>
<span class="token assign-left variable">23skidoo</span><span class="token operator">=</span>value1   <span class="token comment"># \u4E5F\u4F1A\u5F15\u53D1\u9519\u8BEF\u3002</span>
<span class="token comment"># \u4EE5\u6570\u5B57\u5F00\u5934\u7684\u53D8\u91CF\u540D\u662F\u88ABshell\u4FDD\u7559\u4F7F\u7528\u7684\u3002</span>
<span class="token comment"># \u8BD5\u8BD5_23skidoo=value1\u3002\u4EE5\u4E0B\u5212\u7EBF\u5F00\u5934\u7684\u53D8\u91CF\u540D\u5C31\u6CA1\u95EE\u9898.</span>

<span class="token comment"># \u7136\u800C . . .   \u53EA\u7528\u4E00\u4E2A\u4E0B\u5212\u7EBF\u4F5C\u4E3A\u53D8\u91CF\u540D\u5C31\u4E0D\u884C\u3002</span>
<span class="token assign-left variable">_</span><span class="token operator">=</span><span class="token number">25</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>           <span class="token comment"># $_\u662F\u4E00\u4E2A\u7279\u6B8A\u53D8\u91CF, \u4EE3\u8868\u6700\u540E\u4E00\u4E2A\u547D\u4EE4\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002</span>
<span class="token comment"># \u4F46\u662F\uFF0C_\u662F\u4E00\u4E2A\u6709\u6548\u7684\u51FD\u6570\u540D\uFF01</span>

xyz<span class="token punctuation">((</span><span class="token operator">!</span>*<span class="token operator">=</span>value2    <span class="token comment"># \u5F15\u8D77\u4E25\u91CD\u7684\u9519\u8BEF\u3002</span>
<span class="token comment"># Bash3.0\u4E4B\u540E\uFF0C\u6807\u70B9\u4E0D\u80FD\u51FA\u73B0\u5728\u53D8\u91CF\u540D\u4E2D\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u4F7F\u7528\u8FDE\u5B57\u7B26\u6216\u5176\u4ED6\u4FDD\u7559\u5B57\u7B26\u6765\u505A\u53D8\u91CF\u540D\uFF08\u6216\u51FD\u6570\u540D\uFF09\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>var-1<span class="token operator">=</span><span class="token number">23</span>
<span class="token comment"># \u7528 &#39;var_1 \u4EE3\u66FF\u3002</span>

function-whatever <span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># \u9519\u8BEF</span>
<span class="token comment"># \u7528 \u2018function_whatever ()\u2019 \u4EE3\u66FF\u3002</span>

 
<span class="token comment"># Bash3.0\u4E4B\u540E\uFF0C\u6807\u70B9\u4E0D\u80FD\u51FA\u73B0\u5728\u51FD\u6570\u540D\u4E2D\u3002</span>
function.whatever <span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># \u9519\u8BEF</span>
<span class="token comment"># \u7528 \u2018functionWhatever ()\u2019 \u4EE3\u66FF\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u8BA9\u53D8\u91CF\u540D\u4E0E\u51FD\u6570\u540D\u76F8\u540C\u3002 \u8FD9\u4F1A\u4F7F\u5F97\u811A\u672C\u7684\u53EF\u8BFB\u6027\u53D8\u5F97\u5F88\u5DEE\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">do_something</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;This function does something with <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$1</span><span class="token entity" title="\\&quot;">\\&quot;</span>.&quot;</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">do_something</span><span class="token operator">=</span>do_something

do_something do_something

<span class="token comment"># \u8FD9\u4E48\u505A\u662F\u5408\u6CD5\u7684\uFF0C\u4F46\u4F1A\u8BA9\u4EBA\u6DF7\u6DC6\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u4E0D\u5408\u65F6\u5B9C\u7684\u4F7F\u7528[\u7A7A\u767D\u7B26][1]\u3002\u4E0E\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u76F8\u6BD4\uFF0CBash\u975E\u5E38\u8BB2\u7A76\u7A7A\u767D\u7B26\u7684\u4F7F\u7528\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>var1 <span class="token operator">=</span> <span class="token number">23</span>   <span class="token comment"># \u2018var1=23\u2019\u624D\u662F\u6B63\u786E\u7684\u3002</span>
<span class="token comment"># \u5BF9\u4E8E\u4E0A\u8FB9\u8FD9\u4E00\u884C\u6765\u8BF4\uFF0CBash\u4F1A\u628A\u201Cvar1\u201D\u5F53\u4F5C\u547D\u4EE4\u6765\u6267\u884C\uFF0C</span>
<span class="token comment"># \u201C=\u201D\u548C\u201C23\u201D\u4F1A\u88AB\u770B\u4F5C\u201C\u547D\u4EE4\u201D\u201Cvar1\u201D\u7684\u53C2\u6570\u3002</span>
	
<span class="token builtin class-name">let</span> c <span class="token operator">=</span> <span class="token variable">$a</span> - <span class="token variable">$b</span>   <span class="token comment"># \u2018let c=$a-$b\u2019\u6216\u2018let &quot;c = $a - $b&quot;\u2019\u624D\u662F\u6B63\u786E\u7684\u3002</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> -le <span class="token number">5</span><span class="token punctuation">]</span>    <span class="token comment"># if [ $a -le 5 ]   \u662F\u6B63\u786E\u7684\u3002</span>
<span class="token comment">#           ^^      if [ &quot;$a&quot; -le 5 ]   \u8FD9\u4E48\u5199\u66F4\u597D\u3002</span>
                  <span class="token comment"># [[ $a -le 5 ]] \u4E5F\u884C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u5728[\u5927\u62EC\u53F7\u5305\u542B\u7684\u4EE3\u7801\u5757][2]\u4E2D\uFF0C\u6700\u540E\u4E00\u6761\u547D\u4EE4\u6CA1\u6709\u4EE5[\u5206\u53F7][3]\u7ED3\u5C3E\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span> <span class="token function">ls</span> -l<span class="token punctuation">;</span> <span class="token function">df</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Done.&quot;</span> <span class="token punctuation">}</span>
<span class="token comment"># bash: syntax error: unexpected end of file</span>

<span class="token punctuation">{</span> <span class="token function">ls</span> -l<span class="token punctuation">;</span> <span class="token function">df</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Done.&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">#                        ^     ### \u6700\u540E\u7684\u8FD9\u6761\u547D\u4EE4\u5FC5\u987B\u4EE5\u5206\u53F7\u7ED3\u5C3E\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u5047\u5B9A\u672A\u88AB\u521D\u59CB\u5316\u7684\u53D8\u91CF\uFF08\u8D4B\u503C\u524D\u7684\u53D8\u91CF\uFF09\u88AB\u201C\u6E050\u201D\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u672A\u521D\u59CB\u5316\u7684\u53D8\u91CF\u503C\u4E3A\u201Cnull\u201D\uFF0C\u800C\u4E0D\u662F0\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;uninitialized_var = <span class="token variable">$uninitialized_var</span>&quot;</span>
<span class="token comment"># uninitialized_var =</span>

<span class="token comment"># \u4F46\u662F . . .</span>
<span class="token comment"># if $BASH_VERSION \u2265 4.2; then</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> -v uninitialized_var <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token assign-left variable">uninitialized_var</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># Initialize it to zero!</span>
<span class="token keyword">fi</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>\u6DF7\u6DC6\u6D4B\u8BD5\u7B26\u53F7=\u548C-ep\u3002\u8BF7\u8BB0\u4F4F\uFF0C=\u7528\u4E8E\u6BD4\u8F83\u5B57\u7B26\u53D8\u91CF\uFF0C\u800C-ep\u7528\u6765\u6BD4\u8F83\u6574\u6570\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token operator">=</span> <span class="token number">273</span> <span class="token punctuation">]</span>      <span class="token comment"># $a\u662F\u6574\u6570\u8FD8\u662F\u5B57\u7B26\u4E32\uFF1F</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> -eq <span class="token number">273</span> <span class="token punctuation">]</span>    <span class="token comment"># $a\u4E3A\u6574\u6570\u3002</span>

<span class="token comment"># \u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5373\u4F7F\u4F60\u6DF7\u7528-ep\u548C=\uFF0C\u4E5F\u4E0D\u4F1A\u4EA7\u751F\u9519\u8BEF\u7684\u7ED3\u679C\u3002</span>
<span class="token comment"># \u7136\u800C . . .</span>


<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">273.0</span>   <span class="token comment"># \u4E0D\u662F\u4E00\u4E2A\u6574\u6570\u3002</span>
	   
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> <span class="token operator">=</span> <span class="token number">273</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Comparison works.&quot;</span>
<span class="token keyword">else</span>  
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Comparison does not work.&quot;</span>
<span class="token keyword">fi</span>    <span class="token comment"># Comparison does not work.</span>

<span class="token comment"># \u4E0Ea=&quot; 273&quot;\u548Ca=&quot;0273&quot;\u76F8\u540C\u3002</span>


<span class="token comment"># \u7C7B\u4F3C\u7684\uFF0C \u5982\u679C\u5BF9\u975E\u6574\u6570\u503C\u4F7F\u7528\u201C-ep\u201D\u7684\u8BDD\uFF0C\u5C31\u4F1A\u4EA7\u751F\u95EE\u9898\u3002</span>
	   
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span> -eq <span class="token number">273.0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>
<span class="token keyword">fi</span>  <span class="token comment"># \u4EA7\u751F\u4E86\u9519\u8BEF\u6D88\u606F\u800C\u9000\u51FA\u3002</span>
<span class="token comment"># test.sh: [: 273.0: integer expression expected</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul><li>\u8BEF\u7528\u4E86[\u5B57\u7B26\u4E32\u6BD4\u8F83][4]\u64CD\u4F5C\u7B26\u3002</li></ul><p>\u6837\u4F8B 34-1. \u6570\u5B57\u6BD4\u8F83\u4E0E\u5B57\u7B26\u4E32\u6BD4\u8F83\u5E76\u4E0D\u76F8\u540C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># bad-op.sh: \u5C1D\u8BD5\u4E00\u4E0B\u5BF9\u6574\u6570\u4F7F\u7528\u5B57\u7B26\u4E32\u6BD4\u8F83\u3002</span>

<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">#  \u4E0B\u9762\u7684&quot;while\u5FAA\u73AF&quot;\u6709\u4E24\u4E2A\u8FC7\u9519\u8BEF:</span>
<span class="token comment">#+ \u4E00\u4E2A\u6BD4\u8F83\u660E\u663E\uFF0C\u800C\u53E6\u4E00\u4E2A\u6BD4\u8F83\u9690\u853D\u3002</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">]</span>    <span class="token comment"># \u9519\uFF01\u5E94\u8BE5\u662F:  while [ &quot;$number&quot; -lt 5 ]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$number</span> &quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;number += 1&quot;</span>
<span class="token keyword">done</span>  
<span class="token comment">#  \u5982\u679C\u8BD5\u56FE\u8FD0\u884C\u8FD9\u4E2A\u9519\u8BEF\u7684\u811A\u672C\uFF0C\u5C31\u4F1A\u5F97\u5230\u4E00\u4E2A\u9519\u8BEF\u4FE1\u606F:</span>
<span class="token comment">#+ bad-op.sh: line 10: 5: No such file or directory</span>
<span class="token comment">#  \u5728\u5355\u4E2D\u62EC\u53F7\u7ED3\u6784\uFF08[ ]\uFF09\u4E2D\uFF0C&quot;&lt;&quot;\u5FC5\u987B\u88AB\u8F6C\u4E49\uFF0C</span>
<span class="token comment">#+ \u5373\u4FBF\u5982\u6B64\uFF0C\u6BD4\u8F83\u4E24\u4E2A\u6574\u6570\u4ECD\u662F\u9519\u8BEF\u7684\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------&quot;</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token punctuation">\\</span><span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">]</span>    <span class="token comment">#  1 2 3 4</span>
<span class="token keyword">do</span>                          <span class="token comment">#</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;<span class="token variable">$number</span> &quot;</span>        <span class="token comment">#  \u770B\u8D77\u6765\u597D\u50CF\u53EF\u4EE5\u5DE5\u4F5C\uFF0C\u4F46\u662F . . .</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;number += 1&quot;</span>         <span class="token comment">#+ \u4E8B\u5B9E\u4E0A\u662F\u6BD4\u8F83ASCII\u7801\uFF0C</span>
  <span class="token keyword">done</span>                      <span class="token comment">#+ \u800C\u4E0D\u662F\u6574\u6570\u6BD4\u8F83\u3002</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------&quot;</span>

<span class="token comment"># \u8FD9\u4E48\u505A\u4F1A\u4EA7\u751F\u95EE\u9898\u3002\u6BD4\u5982:</span>

<span class="token assign-left variable">lesser</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">greater</span><span class="token operator">=</span><span class="token number">105</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$greater</span>&quot;</span> <span class="token punctuation">\\</span><span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$lesser</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$greater</span> is less than <span class="token variable">$lesser</span>&quot;</span>
<span class="token keyword">fi</span>                          <span class="token comment"># 105 is less than 5</span>
<span class="token comment">#  \u4E8B\u5B9E\u4E0A\uFF0C\u5728\u5B57\u7B26\u4E32\u6BD4\u8F83\u4E2D\uFF08\u6309\u7167ASCII\u7801\u7684\u987A\u5E8F\uFF09</span>
<span class="token comment">#+ &quot;105&quot;\u5C0F\u4E8E&quot;5&quot;\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><ul><li>\u8BD5\u56FE\u7528[let][5]\u6765\u8BBE\u7F6E\u5B57\u7B26\u4E32\u53D8\u91CF\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">let</span> <span class="token string">&quot;a = hello, you&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$a</span>&quot;</span>   <span class="token comment"># 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>\u6709\u65F6\u5019\u5728\u201Ctest\u201D\u4E2D\u62EC\u53F7\uFF08[ ]\uFF09\u7ED3\u6784\u91CC\u7684\u53D8\u91CF\u9700\u8981\u88AB\u5F15\u7528\u8D77\u6765\uFF08\u53CC\u5F15\u53F7\uFF09\u3002\u5982\u679C\u4E0D\u8FD9\u4E48\u505A\u7684\u8BDD\uFF0C\u53EF\u80FD\u4F1A\u5F15\u8D77\u4E0D\u53EF\u9884\u6599\u7684\u7ED3\u679C\u3002\u8BF7\u53C2\u8003[\u4F8B\u5B50 7-6][6]\uFF0C[\u4F8B\u5B50 16-5][7]\uFF0C[\u4F8B\u5B50 9-6][8]\u3002</p></li><li><p>[\u4E3A\u9632\u5206\u9694][9]\uFF0C\u7528\u53CC\u5F15\u53F7\u5F15\u7528\u4E00\u4E2A\u5305\u542B\u7A7A\u767D\u7B26\u7684\u53D8\u91CF\u3002 \u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4F1A\u4EA7\u751F[\u610F\u60F3\u4E0D\u5230\u7684\u540E\u679C][10]\u3002</p></li><li><p>\u811A\u672C\u4E2D\u7684\u547D\u4EE4\u53EF\u80FD\u4F1A\u56E0\u4E3A\u811A\u672C\u5BBF\u4E3B\u4E0D\u5177\u5907\u76F8\u5E94\u7684\u8FD0\u884C\u6743\u9650\u800C\u5BFC\u81F4\u8FD0\u884C\u5931\u8D25\u3002\u5982\u679C\u7528\u6237\u5728\u547D\u4EE4\u884C\u4E2D\u4E0D\u80FD\u8C03\u7528\u8FD9\u4E2A\u547D\u4EE4\u7684\u8BDD\uFF0C\u90A3\u4E48\u5373\u4F7F\u628A\u5B83\u653E\u5230\u811A\u672C\u4E2D\u6765\u8FD0\u884C\uFF0C\u4E5F\u8FD8\u662F\u4F1A\u5931\u8D25\u3002\u8FD9\u65F6\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u547D\u4EE4\u7684\u5C5E\u6027\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6709\u65F6\u5019\u751A\u81F3\u8981\u7ED9\u5B83\u8BBE\u7F6Esuid\u4F4D(\u5F53\u7136, \u8981\u4EE5root\u8EAB\u4EFD\u6765\u8BBE\u7F6E)\u3002</p></li><li><p>\u8BD5\u56FE\u4F7F\u7528-\u4F5C\u4E3A\u4F5C\u4E3A\u91CD\u5B9A\u5411\u64CD\u4F5C\u7B26\uFF08\u4E8B\u5B9E\u4E0A\u5B83\u4E0D\u662F\uFF09\uFF0C\u901A\u5E38\u90FD\u4F1A\u5BFC\u81F4\u4EE4\u4EBA\u4E0D\u5FEB\u7684\u7ED3\u679C\u3002</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>command1 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> - <span class="token operator">|</span> command2
<span class="token comment"># \u8BD5\u56FE\u5C06command1\u7684\u9519\u8BEF\u8F93\u51FA\u91CD\u5B9A\u5411\u5230\u4E00\u4E2A\u7BA1\u9053\u4E2D . . .</span>
<span class="token comment"># . . . \u4E0D\u4F1A\u5DE5\u4F5C\u3002</span>

command1 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;&amp;</span> - <span class="token operator">|</span> command2  <span class="token comment"># \u4E5F\u6CA1\u6548\u679C\u3002</span>

\u611F\u8C22\uFF0CS.C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u4F7F\u7528[Bash 2.0\u6216\u66F4\u9AD8\u7248\u672C][11]\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u5728\u4EA7\u751F\u9519\u8BEF\u4FE1\u606F\u7684\u65F6\u5019\uFF0C\u5F15\u53D1\u4FEE\u590D\u52A8\u4F5C\u3002\u4F46\u662F\u6BD4\u8F83\u8001\u7684Linux\u673A\u5668\u9ED8\u8BA4\u5B89\u88C5\u7684\u53EF\u80FD\u662FBash 1.XX\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">minimum_version</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token comment"># \u56E0\u4E3AChet Ramey\u7ECF\u5E38\u7ED9Bash\u6DFB\u52A0\u4E00\u4E9B\u65B0\u7684\u7279\u5F81\uFF0C</span>
<span class="token comment"># \u6240\u4EE5\u4F60\u6700\u597D\u5C06$minimum_version\u8BBE\u7F6E\u4E3A2.XX\uFF0C3.XX\uFF0C\u6216\u662F\u5176\u4ED6\u4F60\u8BA4\u4E3A\u6BD4\u8F83\u5408\u9002\u7684\u503C\u3002</span>
<span class="token assign-left variable">E_BAD_VERSION</span><span class="token operator">=</span><span class="token number">80</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$BASH_VERSION</span>&quot;</span> <span class="token punctuation">\\</span><span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$minimum_version</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;This script works only with Bash, version <span class="token variable">$minimum</span> or greater.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Upgrade strongly recommended.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BAD_VERSION</span>
<span class="token keyword">fi</span>

<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li><p>\u5728\u975ELinux\u673A\u5668\u4E0A\u7684[Bourne shell][12]\u811A\u672C( <strong>#!/bin/sh</strong> )\u4E2D\u4F7F\u7528Bash\u7279\u6709\u7684\u529F\u80FD\uFF0C[\u53EF\u80FD\u4F1A\u5F15\u8D77\u4E0D\u53EF\u9884\u6599\u7684\u884C\u4E3A][13]\u3002Linux\u7CFB\u7EDF\u901A\u5E38\u90FD\u4F1A\u628A<strong>bash</strong>\u522B\u540D\u5316\u4E3A<strong>sh</strong>\uFF0C\u4F46\u662F\u5728\u4E00\u822C\u7684UNIX\u673A\u5668\u4E0A\u5374\u4E0D\u4E00\u5B9A\u4F1A\u8FD9\u4E48\u505A\u3002</p></li><li><p>\u4F7F\u7528Bash\u672A\u6587\u6863\u5316\u7684\u7279\u5F81\uFF0C\u5C06\u662F\u4E00\u79CD\u5371\u9669\u7684\u4E3E\u52A8\u3002\u672C\u4E66\u4E4B\u524D\u7684\u51E0\u4E2A\u7248\u672C\u5C31\u4F9D\u8D56\u4E00\u4E2A\u8FD9\u79CD\u201C\u7279\u5F81\u201D\uFF0C\u4E0B\u9762\u8BF4\u660E\u4E00\u4E0B\u8FD9\u4E2A\u201C\u7279\u5F81\u201D\uFF0C\u867D\u7136[exit][14]\u6216[return][15]\u6240\u80FD\u8FD4\u56DE\u7684\u6700\u5927\u6B63\u503C\u4E3A255\uFF0C\u4F46\u662F\u5E76\u6CA1\u6709\u9650\u5236\u6211\u4EEC\u4F7F\u7528\u8D1F\u6574\u6570\u3002\u4E0D\u5E78\u7684\u662F, Bash 2.05b\u4E4B\u540E\u7684\u7248\u672C\uFF0C\u8FD9\u4E2A\u6F0F\u6D1E\u6D88\u5931\u4E86\u3002\u8BF7\u53C2\u8003[\u4F8B\u5B50 24-9][16]\u3002</p></li><li><p>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u8BEF\u5BFC\u6027\u7684[\u9000\u51FA\u72B6\u6001][17]\u3002[\u8BBE\u7F6E\u4E00\u4E2A\u51FD\u6570\u5185\u7684\u5C40\u90E8\u53D8\u91CF][18]\u6216[\u5206\u914D\u4E00\u4E2A\u7B97\u672F\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF][19]\u65F6\uFF0C\u5C31\u6709\u53EF\u80FD\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\u3002</p></li><li><p>[\u7B97\u672F\u8868\u8FBE\u5F0F\u7684\u9000\u51FA\u72B6\u6001][20]\u4E0D\u7B49\u540C\u4E8E\u4E00\u4E2A\u9519\u8BEF\u4EE3\u7801\u3002</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token variable"><span class="token punctuation">((</span><span class="token operator">--</span>var<span class="token punctuation">))</span></span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$var</span>
<span class="token comment">#        ^^^^^^^^^ \u5728\u8FD9\u91CC\uFF0C\u8FD9\u4E2A\u4E0E\u5217\u8868\u8FD4\u56DE\u9519\u8BEF\u4EE3\u78011\u800C\u7EC8\u6B62\u3002</span>
<span class="token comment">#                     \u4E0D\u4F1A\u6253\u5370$var\u7684\u503C\uFF01</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>   <span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u4E00\u4E2A\u5E26\u6709DOS\u98CE\u683C\u6362\u884C\u7B26(\\r\\n)\u7684\u811A\u672C\u5C06\u4F1A\u8FD0\u884C\u5931\u8D25\uFF0C\u56E0\u4E3A**#!/bin/bash\\r\\n<strong>\u662F\u4E0D\u5408\u6CD5\u7684\uFF0C\u4E0E\u6211\u4EEC\u6240\u671F\u671B\u7684</strong>#!/bin/bash\\n**\u4E0D\u540C\uFF0C\u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u5C06\u8FD9\u4E2A\u811A\u672C\u8F6C\u6362\u4E3AUNIX\u98CE\u683C\u7684\u6362\u884C\u7B26\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Here&quot;</span>

unix2dos <span class="token variable">$0</span>    <span class="token comment"># \u811A\u672C\u5148\u5C06\u81EA\u5DF1\u6539\u4E3ADOS\u683C\u5F0F\u3002</span>
<span class="token function">chmod</span> <span class="token number">755</span> <span class="token variable">$0</span>   <span class="token comment"># \u66F4\u6539\u53EF\u6267\u884C\u6743\u9650\u3002</span>
               <span class="token comment"># &#39;unix2dos&#39;\u4F1A\u5220\u9664\u53EF\u6267\u884C\u6743\u9650</span>

./<span class="token variable">$0</span>           <span class="token comment"># \u811A\u672C\u5C1D\u8BD5\u518D\u6B21\u8FD0\u884C\u81EA\u5DF1\u3002</span>
               <span class="token comment"># \u4F46\u5B83\u4F5C\u4E3A\u4E00\u4E2ADOS\u6587\u4EF6\uFF0C\u5DF2\u7ECF\u4E0D\u80FD\u8FD0\u884C\u4E86\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;There&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li><p>\u4EE5**#!/bin/sh<strong>\u5F00\u5934\u7684Bash\u811A\u672C\uFF0C\u4E0D\u80FD\u5728\u5B8C\u6574\u7684Bash\u517C\u5BB9\u6A21\u5F0F\u4E0B\u8FD0\u884C\u3002\u67D0\u4E9BBash\u7279\u5B9A\u7684\u529F\u80FD\u53EF\u80FD\u4F1A\u88AB\u7981\u7528\u3002\u5982\u679C\u811A\u672C\u9700\u8981\u5B8C\u6574\u7684\u8BBF\u95EE\u6240\u6709Bash\u4E13\u6709\u6269\u5C55\uFF0C\u90A3\u4E48\u5B83\u9700\u8981\u4F7F\u7528</strong>#!/bin/bash**\u4F5C\u4E3A\u5F00\u5934\u3002</p></li><li><p>\u5982\u679C\u5728[here document][21]\u4E2D\uFF0C[\u7ED3\u5C3E\u7684limit string\u4E4B\u524D\u52A0\u4E0A\u7A7A\u767D\u5B57\u7B26][22]\u7684\u8BDD\uFF0C\u5C06\u4F1A\u5BFC\u81F4\u811A\u672C\u7684\u5F02\u5E38\u884C\u4E3A\u3002</p></li><li><p>\u5728\u4E00\u4E2A[\u8F93\u51FA\u88AB\u6355\u83B7][23]\u7684\u51FD\u6570\u4E2D\u653E\u7F6E\u4E86\u4E0D\u6B62\u4E00\u4E2Aecho\u8BED\u53E5\u3002</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">add2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Whatever ... &quot;</span>   <span class="token comment"># \u5220\u6389zhehan</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;retval = <span class="token variable">$1</span> + <span class="token variable">$2</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$retval</span>
    <span class="token punctuation">}</span>

    <span class="token assign-left variable">num1</span><span class="token operator">=</span><span class="token number">12</span>
    <span class="token assign-left variable">num2</span><span class="token operator">=</span><span class="token number">43</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sum of <span class="token variable">$num1</span> and <span class="token variable">$num2</span> = <span class="token variable"><span class="token variable">$(</span>add2 $num1 $num2<span class="token variable">)</span></span>&quot;</span>

<span class="token comment">#   Sum of 12 and 43 = Whatever ... </span>
<span class="token comment">#   55</span>

<span class="token comment">#        \u8FD9\u4E9Becho\u8FDE\u5728\u4E00\u8D77\u4E86\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8FD9\u662F[\u884C\u4E0D\u901A][24]\u7684\u3002</p><ul><li>\u811A\u672C\u4E0D\u80FD\u5C06\u53D8\u91CFexport\u5230\u5B83\u7684[\u7236\u8FDB\u7A0B]<a href="%E5%8D%B3%E8%B0%83%E7%94%A8%E8%BF%99%E4%B8%AA%E8%84%9A%E6%9C%AC%E7%9A%84shell">25</a>\uFF0C\u6216\u7236\u8FDB\u7A0B\u7684\u73AF\u5883\u4E2D\u3002\u5C31\u597D\u6BD4\u6211\u4EEC\u5728\u751F\u7269\u5B66\u4E2D\u6240\u5B66\u5230\u7684\u90A3\u6837\uFF0C\u5B50\u8FDB\u7A0B\u53EA\u4F1A\u7EE7\u627F\u7236\u8FDB\u7A0B, \u53CD\u8FC7\u6765\u5219\u4E0D\u884C\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">WHATEVER</span><span class="token operator">=</span>/home/bozo
<span class="token builtin class-name">export</span> WHATEVER
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token variable">$WHATEVER</span>
bash$
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>\u53EF\u4EE5\u786E\u5B9A\u7684\u662F\uFF0C\u5373\u4F7F\u56DE\u5230\u547D\u4EE4\u884C\u63D0\u793A\u7B26\uFF0C\u53D8\u91CF$WHATEVER\u4ECD\u7136\u6CA1\u6709\u88AB\u8BBE\u7F6E\u3002</p></li><li><p>\u5728[\u5B50shell][26]\u4E2D\u8BBE\u7F6E\u548C\u64CD\u4F5C\u53D8\u91CF\u4E4B\u540E\uFF0C\u5982\u679C\u5C1D\u8BD5\u5728\u5B50shell\u4F5C\u7528\u57DF\u4E4B\u5916\u4F7F\u7528\u540C\u540D\u53D8\u91CF\u7684\u8BDD, \u5C06\u4F1A\u4EA7\u751F\u4EE4\u4EBA\u4E0D\u5FEB\u7684\u7ED3\u679C\u3002</p></li></ul><p>\u6837\u4F8B 34-2. \u5B50shell\u7F3A\u9677</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u5B50shell\u4E2D\u7684\u53D8\u91CF\u7F3A\u9677\u3002</span>

<span class="token assign-left variable">outer_variable</span><span class="token operator">=</span>outer
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;outer_variable = <span class="token variable">$outer_variable</span>&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token punctuation">(</span>
<span class="token comment"># \u5F00\u59CB\u5B50shell</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;outer_variable inside subshell = <span class="token variable">$outer_variable</span>&quot;</span>
<span class="token assign-left variable">inner_variable</span><span class="token operator">=</span>inner  <span class="token comment"># Set</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;inner_variable inside subshell = <span class="token variable">$inner_variable</span>&quot;</span>
<span class="token assign-left variable">outer_variable</span><span class="token operator">=</span>inner  <span class="token comment"># \u4F1A\u4FEE\u6539\u5168\u5C40\u53D8\u91CF\u5417\uFF1F</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;outer_variable inside subshell = <span class="token variable">$outer_variable</span>&quot;</span>

<span class="token comment"># \u5982\u679C\u5C06\u53D8\u91CF\u2018\u5BFC\u51FA\u2019\u4F1A\u4EA7\u751F\u4E0D\u540C\u7684\u7ED3\u679C\u4E48\uFF1F</span>
<span class="token comment">#    export inner_variable</span>
<span class="token comment">#    export outer_variable</span>
<span class="token comment"># \u8BD5\u8BD5\u770B\u3002</span>

<span class="token comment"># \u7ED3\u675F\u5B50shell</span>
<span class="token punctuation">)</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;inner_variable outside subshell = <span class="token variable">$inner_variable</span>&quot;</span>  <span class="token comment"># Unset.</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;outer_variable outside subshell = <span class="token variable">$outer_variable</span>&quot;</span>  <span class="token comment"># Unchanged.</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># \u5982\u679C\u4F60\u53BB\u6389\u7B2C19\u548C\u7B2C20\u884C\u7684\u6CE8\u91CA\u4F1A\u600E\u6837\uFF1F</span>
<span class="token comment"># \u4F1A\u4EA7\u751F\u4E0D\u540C\u7684\u7ED3\u679C\u5417\uFF1F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ul><li>\u5C06echo\u7684\u8F93\u51FA\u901A\u8FC7[\u7BA1\u9053][27]\u4F20\u9012\u7ED9[read][28]\u547D\u4EE4\u53EF\u80FD\u4F1A\u4EA7\u751F\u4E0D\u53EF\u9884\u6599\u7684\u7ED3\u679C\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0Cread\u547D\u4EE4\u7684\u884C\u4E3A\u5C31\u597D\u50CF\u5B83\u5728\u5B50shell\u4E2D\u8FD0\u884C\u4E00\u6837\u3002\u53EF\u4EE5\u4F7F\u7528[set][29]\u547D\u4EE4\u6765\u4EE3\u66FF(\u5C31\u597D\u50CF[\u4F8B\u5B5015-18][30]\u4E00\u6837)\u3002</li></ul><p>\u6837\u4F8B 34-3. \u5C06echo\u7684\u8F93\u51FA\u901A\u8FC7\u7BA1\u9053\u4F20\u9012\u7ED9read\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#  badread.sh:</span>
<span class="token comment">#  \u5C1D\u8BD5\u4F7F\u7528&#39;echo&#39;\u548C&#39;read&#39;\u547D\u4EE4</span>
<span class="token comment">#+ \u975E\u4EA4\u4E92\u7684\u7ED9\u53D8\u91CF\u8D4B\u503C\u3002</span>

<span class="token comment">#   shopt -s lastpipe</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span>aaa
<span class="token assign-left variable">b</span><span class="token operator">=</span>bbb
<span class="token assign-left variable">c</span><span class="token operator">=</span>ccc

<span class="token builtin class-name">echo</span> <span class="token string">&quot;one two three&quot;</span> <span class="token operator">|</span> <span class="token builtin class-name">read</span> a b c
<span class="token comment"># \u5C1D\u8BD5\u91CD\u65B0\u7ED9\u53D8\u91CFa\uFF0Cb\uFF0C\u548Cc\u8D4B\u503C\u3002</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>  <span class="token comment"># a = aaa</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>  <span class="token comment"># b = bbb</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;c = <span class="token variable">$c</span>&quot;</span>  <span class="token comment"># c = ccc</span>
<span class="token comment"># \u91CD\u65B0\u8D4B\u503C\u5931\u8D25\u3002</span>

<span class="token comment">### \u4F46\u5982\u679C . . .</span>
<span class="token comment">##  \u53BB\u6389\u7B2C6\u884C\u7684\u6CE8\u91CA:</span>
<span class="token comment">#   shopt -s lastpipe</span>
<span class="token comment">##+ \u5C31\u80FD\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF01</span>
<span class="token comment">### \u8FD9\u662FBash 4.2\u7248\u672C\u7684\u65B0\u7279\u6027\u3002</span>

<span class="token comment"># ------------------------------</span>

<span class="token comment"># \u8BD5\u8BD5\u4E0B\u8FB9\u8FD9\u79CD\u65B9\u6CD5\u3002</span>

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;one two three&quot;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">set</span> -- <span class="token variable">$var</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">$1</span><span class="token punctuation">;</span> <span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token variable">$2</span><span class="token punctuation">;</span> <span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;-------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>  <span class="token comment"># a = one</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>  <span class="token comment"># b = two</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;c = <span class="token variable">$c</span>&quot;</span>  <span class="token comment"># c = three </span>
<span class="token comment"># \u91CD\u65B0\u8D4B\u503C\u6210\u529F\u3002</span>

<span class="token comment"># ------------------------------</span>

<span class="token comment">#  \u4E5F\u8BF7\u6CE8\u610F\uFF0Cecho\u5230&#39;read&#39;\u7684\u503C\u53EA\u4F1A\u5728\u5B50shell\u4E2D\u8D77\u4F5C\u7528\u3002</span>
<span class="token comment">#  \u6240\u4EE5\uFF0C\u53D8\u91CF\u7684\u503C*\u53EA*\u4F1A\u5728\u5B50shell\u4E2D\u88AB\u4FEE\u6539\u3002</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span>aaa          <span class="token comment"># \u91CD\u65B0\u5F00\u59CB\u3002</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span>bbb
<span class="token assign-left variable">c</span><span class="token operator">=</span>ccc

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;one two three&quot;</span> <span class="token operator">|</span> <span class="token punctuation">(</span> <span class="token builtin class-name">read</span> a b c<span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Inside subshell: &quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;c = <span class="token variable">$c</span>&quot;</span> <span class="token punctuation">)</span>
<span class="token comment"># a = one</span>
<span class="token comment"># b = two</span>
<span class="token comment"># c = three</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----------------&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Outside subshell: &quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a = <span class="token variable">$a</span>&quot;</span>  <span class="token comment"># a = aaa</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b = <span class="token variable">$b</span>&quot;</span>  <span class="token comment"># b = bbb</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;c = <span class="token variable">$c</span>&quot;</span>  <span class="token comment"># c = ccc</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><p>\u4E8B\u5B9E\u4E0A\uFF0C\u4E5F\u6B63\u5982Anthony Richardson\u6307\u51FA\u7684\u90A3\u6837\uFF0C\u901A\u8FC7\u7BA1\u9053\u5C06\u8F93\u51FA\u4F20\u9012\u5230\u4EFB\u4F55\u5FAA\u73AF\u4E2D, \u90FD\u4F1A\u5F15\u8D77\u7C7B\u4F3C\u7684\u95EE\u9898\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5FAA\u73AF\u7684\u7BA1\u9053\u95EE\u9898\u3002</span>
<span class="token comment">#  \u8FD9\u4E2A\u4F8B\u5B50\u7531Anthony Richardson\u7F16\u5199\uFF0C</span>
<span class="token comment">#+ \u7531Wilbert Berendsen\u8865\u9057\u3002</span>


<span class="token assign-left variable">foundone</span><span class="token operator">=</span>false
<span class="token function">find</span> <span class="token environment constant">$HOME</span> -type f -atime +30 -size 100k <span class="token operator">|</span>
<span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
   <span class="token builtin class-name">read</span> f
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$f</span> is over 100KB and has not been accessed in over 30 days&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Consider moving the file to archives.&quot;</span>
   <span class="token assign-left variable">foundone</span><span class="token operator">=</span>true
   <span class="token comment"># ------------------------------------</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;Subshell level = <span class="token variable">$BASH_SUBSHELL</span>&quot;</span>
   <span class="token comment"># Subshell level = 1</span>
   <span class="token comment"># \u6CA1\u9519, \u73B0\u5728\u662F\u5728\u5B50shell\u4E2D\u8FD0\u884C\u3002</span>
   <span class="token comment"># ------------------------------------</span>
<span class="token keyword">done</span>
   
<span class="token comment">#  \u53D8\u91CFfoundone\u5728\u8FD9\u91CC\u80AF\u5B9A\u662Ffalse\uFF0C</span>
<span class="token comment">#+ \u56E0\u4E3A\u5B83\u662F\u5728\u5B50shell\u4E2D\u88AB\u8BBE\u7F6E\u4E3Atrue\u7684\u3002</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$foundone</span> <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;No files need archiving.&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># =====================\u73B0\u5728\uFF0C\u4E0B\u8FB9\u662F\u6B63\u786E\u7684\u65B9\u6CD5:=================</span>

<span class="token assign-left variable">foundone</span><span class="token operator">=</span>false
<span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> <span class="token environment constant">$HOME</span> -type f -atime +30 -size 100k<span class="token variable">)</span></span>  <span class="token comment"># \u8FD9\u91CC\u6CA1\u4F7F\u7528\u7BA1\u9053\u3002</span>
<span class="token keyword">do</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$f</span> is over 100KB and has not been accessed in over 30 days&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Consider moving the file to archives.&quot;</span>
   <span class="token assign-left variable">foundone</span><span class="token operator">=</span>true
<span class="token keyword">done</span>
   
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$foundone</span> <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;No files need archiving.&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># ==================\u8FD9\u91CC\u662F\u53E6\u4E00\u79CD\u65B9\u6CD5==================</span>

<span class="token comment">#  \u5C06\u811A\u672C\u4E2D\u8BFB\u53D6\u53D8\u91CF\u7684\u90E8\u5206\u653E\u5230\u4E00\u4E2A\u4EE3\u7801\u5757\u4E2D\uFF0C</span>
<span class="token comment">#+ \u8FD9\u6837\u4E00\u6765\uFF0C\u5B83\u4EEC\u5C31\u80FD\u5728\u76F8\u540C\u7684\u5B50shell\u4E2D\u5171\u4EAB\u4E86\u3002</span>
<span class="token comment">#  \u611F\u8C22\uFF0CW.B\u3002</span>

<span class="token function">find</span> <span class="token environment constant">$HOME</span> -type f -atime +30 -size 100k <span class="token operator">|</span> <span class="token punctuation">{</span>
     <span class="token assign-left variable">foundone</span><span class="token operator">=</span>false
     <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f
     <span class="token keyword">do</span>
       <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$f</span> is over 100KB and has not been accessed in over 30 days&quot;</span>
       <span class="token builtin class-name">echo</span> <span class="token string">&quot;Consider moving the file to archives.&quot;</span>
       <span class="token assign-left variable">foundone</span><span class="token operator">=</span>true
     <span class="token keyword">done</span>

     <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token variable">$foundone</span>
     <span class="token keyword">then</span>
       <span class="token builtin class-name">echo</span> <span class="token string">&quot;No files need archiving.&quot;</span>
     <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><ul><li>\u4E00\u4E2A\u76F8\u5173\u7684\u95EE\u9898\uFF1A\u5F53\u4F60\u5C1D\u8BD5\u5C06tail -f\u7684stdout\u901A\u8FC7\u7BA1\u9053\u4F20\u9012\u7ED9[grep][31]\u65F6\uFF0C\u4F1A\u4EA7\u751F\u95EE\u9898\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tail</span> -f /var/log/messages <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable">$ERROR_MSG</span>&quot;</span> <span class="token operator">&gt;&gt;</span> error.log
<span class="token comment">#  \u201Cerror.log\u201D\u6587\u4EF6\u5C06\u4E0D\u4F1A\u5199\u5165\u4EFB\u4F55\u4E1C\u897F\u3002</span>
<span class="token comment">#  \u6B63\u5982Samuli Kaipiainen\u6307\u51FA\u7684\u90A3\u6837\uFF0C</span>
<span class="token comment">#+ \u8FD9\u4E00\u7ED3\u679C\u662F\u4ECEgrep\u7684\u7F13\u51B2\u533A\u8F93\u51FA\u7684\u3002</span>
<span class="token comment">#  \u89E3\u51B3\u7684\u529E\u6CD5\u5C31\u662F\u628A\u201C--line-buffered\u201D\u53C2\u6570\u6DFB\u52A0\u5230grep\u4E2D\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>\u5728\u811A\u672C\u4E2D\u4F7F\u7528\u201Csuid\u201D\u547D\u4EE4\u662F\u975E\u5E38\u5371\u9669\u7684\uFF0C\u56E0\u4E3A\u8FD9\u4F1A\u5371\u53CA\u7CFB\u7EDF\u5B89\u5168\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></li><li><p>\u4F7F\u7528shell\u811A\u672C\u6765\u7F16\u5199CGI\u7A0B\u5E8F\u662F\u503C\u5F97\u5546\u69B7\u7684\u3002\u56E0\u4E3AShell\u811A\u672C\u7684\u53D8\u91CF\u4E0D\u662F\u201C\u7C7B\u578B\u5B89\u5168\u201D\u7684\uFF0C\u5F53CGI\u88AB\u5173\u8054\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u4F1A\u4EA7\u751F\u4EE4\u4EBA\u4E0D\u5FEB\u7684\u884C\u4E3A\u3002\u6B64\u5916\uFF0C\u5B83\u8FD8\u5F88\u96BE\u62B5\u6321\u4F4F\u201C\u7834\u89E3\u7684\u8003\u9A8C\u201D\u3002</p></li><li><p>Bash\u4E0D\u80FD\u6B63\u786E\u5730\u5904\u7406[\u53CC\u659C\u7EBF(//)\u5B57\u7B26\u4E32][32]\u3002</p></li><li><p>\u5728Linux\u6216BSD\u4E0A\u7F16\u5199\u7684Bash\u811A\u672C\uFF0C\u53EF\u80FD\u9700\u8981\u4FEE\u6539\u4E00\u4E0B\uFF0C\u624D\u80FD\u4F7F\u5B83\u4EEC\u8FD0\u884C\u5728\u5546\u4E1A\u7684UNIX\u673A\u5668\u4E0A\u3002\u8FD9\u4E9B\u811A\u672C\u901A\u5E38\u90FD\u4F7F\u7528GNU\u547D\u4EE4\u548C\u8FC7\u6EE4\u5DE5\u5177\uFF0CGNU\u5DE5\u5177\u901A\u5E38\u90FD\u6BD4\u4E00\u822C\u7684UNIX\u4E0A\u7684\u540C\u7C7B\u5DE5\u5177\u66F4\u52A0\u5F3A\u5927\u3002\u8FD9\u65B9\u9762\u7684\u4E00\u4E2A\u975E\u5E38\u660E\u663E\u7684\u4F8B\u5B50\u5C31\u662F\uFF0C\u6587\u672C\u5904\u7406\u5DE5\u5177[tr][33]\u3002</p></li><li><p>\u9057\u61BE\u7684\u662F\uFF0C\u66F4\u65B0Bash\u672C\u8EAB\u5C31\u4F1A\u7834\u574F[\u8FC7\u53BB\u5DE5\u4F5C\u5B8C\u5168\u6B63\u5E38][34]\u7684\u811A\u672C\u3002\u8BA9\u6211\u4EEC\u56DE\u987E\u4E00\u4E0B[\u4F7F\u7528\u65E0\u6B63\u5F0F\u6587\u4EF6\u7684Bash\u529F\u80FD\u6709\u591A\u5371\u9669][35]\u3002</p></li></ul><blockquote><p>\u5371\u9669\u6B63\u5728\u63A5\u8FD1\u4F60 -- \u5C0F\u5FC3\uFF0C\u5C0F\u5FC3\uFF0C\u5C0F\u5FC3\uFF0C\u5C0F\u5FC3\u3002 \u8BB8\u591A\u52C7\u6562\u7684\u5FC3\u90FD\u5728\u6C89\u7761\u3002 \u6240\u4EE5\u4E00\u5B9A\u8981\u5C0F\u5FC3 -- \u5C0F\u5FC3\u3002</p></blockquote><blockquote><p>\u2014\u2014A.J. Lamb and H.W. Petrie [1]: http://tldp.org/LDP/abs/html/special-chars.html#WHITESPACEREF [2]: http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF [3]: http://tldp.org/LDP/abs/html/special-chars.html#SEMICOLONREF [4]: http://tldp.org/LDP/abs/html/comparison-ops.html#SCOMPARISON1 [5]: http://tldp.org/LDP/abs/html/internal.html#LETREF [6]: http://tldp.org/LDP/abs/html/comparison-ops.html#STRTEST [7]: http://tldp.org/LDP/abs/html/redircb.html#REDIR2 [8]: http://tldp.org/LDP/abs/html/internalvariables.html#ARGLIST [9]: http://tldp.org/LDP/abs/html/quotingvar.html#WSQUO [10]: http://tldp.org/LDP/abs/html/quotingvar.html#VARSPLITTING [11]: http://tldp.org/LDP/abs/html/bashver2.html#BASH2REF [12]: http://tldp.org/LDP/abs/html/why-shell.html#BASHDEF [13]: http://tldp.org/LDP/abs/html/gotchas.html#BINSH [14]: http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF [15]: http://tldp.org/LDP/abs/html/complexfunct.html#RETURNREF [16]: http://tldp.org/LDP/abs/html/complexfunct.html#RETURNTEST [17]: http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF [18]: http://tldp.org/LDP/abs/html/localvar.html#EXITVALANOMALY01 [19]: http://tldp.org/LDP/abs/html/internal.html#EXITVALANOMALY02 [20]: http://tldp.org/LDP/abs/html/testconstructs.html#ARXS [21]: http://tldp.org/LDP/abs/html/here-docs.html#HEREDOCREF [22]: http://tldp.org/LDP/abs/html/here-docs.html#INDENTEDLS [23]: http://tldp.org/LDP/abs/html/assortedtips.html#RVT [24]: http://tldp.org/LDP/abs/html/assortedtips.html#RVTCAUTION [25]: http://tldp.org/LDP/abs/html/internal.html#FORKREF [26]: http://tldp.org/LDP/abs/html/subshells.html#SUBSHELLSREF [27]: http://tldp.org/LDP/abs/html/special-chars.html#PIPEREF [28]: http://tldp.org/LDP/abs/html/internal.html#READREF [29]: http://tldp.org/LDP/abs/html/internal.html#SETREF [30]: http://tldp.org/LDP/abs/html/internal.html#SETPOS [31]: http://tldp.org/LDP/abs/html/textproc.html#GREPREF [32]: http://tldp.org/LDP/abs/html/internal.html#DOUBLESLASHREF [33]: http://tldp.org/LDP/abs/html/textproc.html#TRREF [34]: http://tldp.org/LDP/abs/html/string-manipulation.html#PARAGRAPHSPACE [35]: http://tldp.org/LDP/abs/html/gotchas.html#UNDOCF [36]: http://tldp.org/LDP/abs/html/fto.html#SUIDREF</p></blockquote><h4 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h4><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>\u5728Linux\u548C\u7EDD\u5927\u591A\u6570\u7684UNIX\u673A\u5668\u4E0A\uFF0C\u7ED9\u811A\u672C\u8BBE\u7F6E[suid][36]\u6743\u9650\u662F\u6CA1\u7528\u7684\u3002 <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,53);function p(l,t){return e}var c=s(a,[["render",p],["__file","34_Gotchas.html.vue"]]);export{c as default};
