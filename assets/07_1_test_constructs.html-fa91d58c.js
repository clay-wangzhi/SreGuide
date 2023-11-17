import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as p,b as s,d as n,e,a as t}from"./app-a087e768.js";const c={},r=s("h1",{id:"_7-1-测试结构",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_7-1-测试结构","aria-hidden":"true"},"#"),n(" 7.1 测试结构")],-1),u=s("code",null,"if/then",-1),d={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"[",-1),v={href:"http://tldp.org/LDP/abs/html/special-chars.html#LEFTBRACKET",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"test",-1),b={href:"http://tldp.org/LDP/abs/html/internal.html#BUILTINREF",target:"_blank",rel:"noopener noreferrer"},h={href:"http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS",target:"_blank",rel:"noopener noreferrer"},q=s("code",null,"[[...]]",-1),g=s("code",null,"[[",-1),f={href:"http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF",target:"_blank",rel:"noopener noreferrer"},y=s("p",null,[n("Bash 将 "),s("code",null,"[[ $a -lt $b ]]"),n(" 视为一整条语句，执行并返回退出状态。")],-1),_={href:"http://tldp.org/LDP/abs/html/dblparens.html",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"(( ... ))",-1),$={href:"http://tldp.org/LDP/abs/html/internal.html#LETREF",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"let ...",-1),E={href:"http://tldp.org/LDP/abs/html/arithexp.html#ARITHEXPREF",target:"_blank",rel:"noopener noreferrer"},L={href:"http://tldp.org/LDP/abs/html/comparison-ops.html#ICOMPARISON1",target:"_blank",rel:"noopener noreferrer"},T=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token punctuation">))</span></span>                 <span class="token comment"># 逻辑与</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>     <span class="token comment"># 1     ***</span>
<span class="token comment"># 然后 ...</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token punctuation">))</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>   <span class="token comment"># 0</span>
<span class="token comment"># 然而 ...</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token punctuation">))</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>     <span class="token comment"># 1     ***</span>


<span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">||</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>              <span class="token comment"># 逻辑或</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>     <span class="token comment"># 0     ***</span>
<span class="token comment"># ...</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">||</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>   <span class="token comment"># 1</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">||</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>     <span class="token comment"># 0     ***</span>


<span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">|</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>               <span class="token comment"># 按位或</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                      <span class="token comment"># 0     ***</span>
<span class="token comment"># ...</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">|</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>                    <span class="token comment"># 203</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;num = <span class="token variable"><span class="token punctuation">((</span> <span class="token number">200</span> <span class="token operator">|</span> <span class="token number">11</span> <span class="token punctuation">))</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                      <span class="token comment"># 0     ***</span>

<span class="token comment"># &quot;let&quot; 结构的退出状态与双括号算术扩展的退出状态是相同的。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="caution"> 注意，双括号算术扩展表达式的退出状态码不是一个错误的值。算术表达式为0，返回1；算术表达式不为0，返回0。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">var</span><span class="token operator">=</span>-2 <span class="token operator">&amp;&amp;</span> <span class="token variable"><span class="token punctuation">((</span> var<span class="token operator">+=</span><span class="token number">2</span> <span class="token punctuation">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>                   <span class="token comment"># 1</span>

<span class="token assign-left variable">var</span><span class="token operator">=</span>-2 <span class="token operator">&amp;&amp;</span> <span class="token variable"><span class="token punctuation">((</span> var<span class="token operator">+=</span><span class="token number">2</span> <span class="token punctuation">))</span></span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$var</span>
                          <span class="token comment"># 并不会输出 $var, 因为((var+=2))的状态码为1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>if</code> 不仅可以用来测试括号内的条件表达式，还可以用来测试其他任何命令。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token function">cmp</span> a b <span class="token operator">&amp;&gt;</span> /dev/null  <span class="token comment"># 消去输出结果</span>
<span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Files a and b are identical.&quot;</span>
<span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Files a and b differ.&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># 下面介绍一个非常实用的 “if-grep&quot; 结构：</span>
<span class="token comment"># -----------------------------------</span>
<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> Bash <span class="token function">file</span>
  <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;File contains at least one occurrence of Bash.&quot;</span>
<span class="token keyword">fi</span>
    
<span class="token assign-left variable">word</span><span class="token operator">=</span>Linux
<span class="token assign-left variable">letter_sequence</span><span class="token operator">=</span>inu
<span class="token keyword">if</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$word</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-q</span> <span class="token string">&quot;<span class="token variable">$letter_sequence</span>&quot;</span>
<span class="token comment"># 使用 -q 选项消去 grep 的输出结果</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$letter_sequence</span> found in &quot;</span><span class="token variable">$word</span><span class="token string">&quot;
else
  echo &quot;</span><span class="token variable">$letter_sequence</span> not found <span class="token keyword">in</span> <span class="token variable">$word</span><span class="token string">&quot;
fi


if COMMAND_WHOSE_EXIT_STATUS_IS_0_UNLESS_ERROR_OCCURRED
  then echo &quot;</span>Command succeed.<span class="token string">&quot;
  else echo &quot;</span>Command failed.&quot;
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>感谢 Stéphane Chazelas 提供了后两个例子。</li></ul><p>样例 7-1. 什么才是真？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 提示：</span>
<span class="token comment"># 如果你不确定某个表达式的布尔值，可以用 if 结构进行测试。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span>0<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;0 is true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;0 is false.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># 0 为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span>1<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;1 is true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;1 is false.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># 1 为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span>-1<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;-1 is true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;-1 is false.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># -1 为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span>NULL<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>        <span class="token comment"># NULL, 空</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;NULL is true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;NULL is false.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># NULL 为假。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span>xyz<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> xyz <span class="token punctuation">]</span>    <span class="token comment"># 字符串</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Random string is true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Random string is false.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># 随机字符串为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$xyz</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$xyz</span> <span class="token punctuation">]</span>   <span class="token comment"># 原意是测试 $xyz 是否为空，但是</span>
              <span class="token comment"># 现在 $xyz 只是一个没有初始化的变量。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Uninitialized variable is true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Uninitialized variable is flase.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># 未初始化变量含有null空值，为假。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span>-n \\<span class="token variable">$xyz</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$xyz</span>&quot;</span> <span class="token punctuation">]</span>            <span class="token comment"># 更加准确的写法。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Uninitialized variable is true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Uninitialized variable is false.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># 未初始化变量为假。</span>

<span class="token builtin class-name">echo</span>


<span class="token assign-left variable">xyz</span><span class="token operator">=</span>          <span class="token comment"># 初始化为空。</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span>-n \\<span class="token variable">$xyz</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$xyz</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Null variable is true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Null variable is false.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># 空变量为假。</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 什么时候 &quot;false&quot; 为真？</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span>false<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;false&quot;</span> <span class="token punctuation">]</span>              <span class="token comment">#  看起来 &quot;false&quot; 只是一个字符串</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>false<span class="token entity" title="\\&quot;">\\&quot;</span> is true.&quot;</span> <span class="token comment">#+ 测试结果为真。</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>false<span class="token entity" title="\\&quot;">\\&quot;</span> is false.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># &quot;false&quot; 为真。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing <span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$false</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>  <span class="token comment"># 未初始化的变量。</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$false</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$false</span><span class="token entity" title="\\&quot;">\\&quot;</span> is true.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$false</span><span class="token entity" title="\\&quot;">\\&quot;</span> is false.&quot;</span>
<span class="token keyword">fi</span>            <span class="token comment"># &quot;$false&quot; 为假。</span>
              <span class="token comment"># 得到了我们想要的结果。</span>

<span class="token comment"># 如果测试空变量 &quot;$true&quot; 会有什么样的结果？</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),D={href:"http://tldp.org/LDP/abs/html/testconstructs.html#EX10",target:"_blank",rel:"noopener noreferrer"},N=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition-true <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">command</span> <span class="token number">1</span>
   <span class="token builtin class-name">command</span> <span class="token number">2</span>
   <span class="token punctuation">..</span>.
<span class="token keyword">else</span>  <span class="token comment"># 如果测试条件为假，则执行 else 后面的代码段</span>
   <span class="token builtin class-name">command</span> <span class="token number">3</span>
   <span class="token builtin class-name">command</span> <span class="token number">4</span>
   <span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),z=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"note"},null,-1),P=s("code",null,"if",-1),R=s("code",null,"then",-1),B=s("code",null,"if",-1),F=s("code",null,"if",-1),U=s("code",null,"then",-1),I={href:"http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;<span class="token variable">$filename</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="else-if-与-elif" tabindex="-1"><a class="header-anchor" href="#else-if-与-elif" aria-hidden="true">#</a> Else if 与 elif</h3><p>elif</p><p><code>elif</code> 是 <code>else if</code> 的缩写。可以把多个 <code>if/then</code> 语句连到外边去，更加简洁明了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition1 <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   command1
   command2
   command3
<span class="token keyword">elif</span> <span class="token punctuation">[</span>condition2 <span class="token punctuation">]</span>
<span class="token comment"># 等价于 else if</span>
<span class="token keyword">then</span>
   command4
   command5
<span class="token keyword">else</span>
   default-command
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if test condition-true</code> 完全等价于 <code>if [ condition-true ]</code>。当语句开始执行时，左括号 <code>[</code> 是作为调用 <code>test</code> 命令的标记[^1]，而右括号则不严格要求，但在新版本的 Bash 里，右括号必须补上。</p>`,6),C=s("img",{src:"http://tldp.org/LDP/abs/images/note.gif",alt:"note"},null,-1),A=s("code",null,"test",-1),O={href:"http://tldp.org/LDP/abs/html/internal.html#BUILTINREF",target:"_blank",rel:"noopener noreferrer"},M=s("code",null,"test",-1),X=s("code",null,"sh-utils",-1),K=s("code",null,"/usr/bin/test",-1),V=s("code",null,"[",-1),W=s("code",null,"/usr/bin/test",-1),G=s("code",null,"/usr/bin/[",-1),H=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ type test
test is a shell builtin
bash$ type &#39;[&#39;
[ is a shell builtin
bash$ type &#39;[[&#39;
[[ is a shell keyword
bash$ type &#39;]]&#39;
]] is a shell keyword
bash$ type &#39;]&#39;
bash: type: ]: not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想在 Bash 脚本中使用 <code>/usr/bin/test</code>，那你必须把路径写全。</p><p>样例 7-2. <code>test</code>，<code>/usr/bin/test</code>，<code>[]</code> 和 <code>/usr/bin/[</code> 的等价性</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No command-line arguments.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;First command-line argument is <span class="token variable">$1</span>.&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> /usr/bin/test <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>      <span class="token comment"># 等价于内建命令 &quot;test&quot;</span>
<span class="token comment">#  ^^^^^^^^^^^^^              # 指定全路径</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No command-line arguments.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;First command-line argument is <span class="token variable">$1</span>.&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>                <span class="token comment"># 功能和上面的代码相同。</span>
<span class="token comment">#   if [ -z &quot;$1&quot;                理论上可行，但是 Bash 会提示缺失右括号</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No command-line arguments.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;First command-line argument is <span class="token variable">$1</span>.&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>


<span class="token keyword">if</span> /usr/bin/<span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>       <span class="token comment"># 功能和上面的代码相同。</span>
<span class="token comment"># if /usr/bin/[ -z &quot;$1&quot;       # 理论上可行，但是会报错</span>
<span class="token comment">#                             # 已经在 Bash 3.x 版本被修复了</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No command-line arguments.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;First command-line argument is <span class="token variable">$1</span>.&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Bash 里，<code>[[ ]]</code> 是比 <code>[ ]</code> 更加通用的写法。其作为扩展<code>test</code> 命令从 ksh88 中被继承了过来。</p><p>在 <code>[[</code> 和 <code>]]</code> 中不会进行文件名扩展或字符串分割，但是可以进行参数扩展和命令替换。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">file</span><span class="token operator">=</span>/etc/passwd

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token variable">$file</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Password file exists.&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>[[...]]</code> 代替 <code>[...]</code>可以避免很多逻辑错误。比如可以在 <code>[[]]</code> 中使用 <code>&amp;&amp;</code>，<code>||</code>，<code>&lt;</code> 和 <code>&gt;</code> 运算符，而在 <code>[]</code> 中使用会报错。</p><p>在 <code>[[]]</code> 中会自动执行八进制和十六进制的进制转换操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># [[ 八进制和十六进制进制转换 ]]</span>
<span class="token comment"># 感谢 Moritz Gronbach 提出。</span>


<span class="token assign-left variable">decimal</span><span class="token operator">=</span><span class="token number">15</span>
<span class="token assign-left variable">octal</span><span class="token operator">=</span>017   <span class="token comment"># = 15 (十进制)</span>
<span class="token assign-left variable">hex</span><span class="token operator">=</span>0x0f    <span class="token comment"># = 15 (十进制)</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$decimal</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token string">&quot;<span class="token variable">$octal</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$decimal</span> equals <span class="token variable">$octal</span>&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$decimal</span> is not equal to <span class="token variable">$octal</span>&quot;</span>       <span class="token comment"># 15 不等于 017</span>
<span class="token keyword">fi</span>      <span class="token comment"># 在单括号 [ ] 之间不会进行进制转换。</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$decimal</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token string">&quot;<span class="token variable">$octal</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$decimal</span> equals <span class="token variable">$octal</span>&quot;</span>                <span class="token comment"># 15 等于 017</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$decimal</span> is not equal to <span class="token variable">$octal</span>&quot;</span>
<span class="token keyword">fi</span>      <span class="token comment"># 在双括号 [[ ]] 之间会进行进制转换。</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$decimal</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token string">&quot;<span class="token variable">$hex</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$decimal</span> equals <span class="token variable">$hex</span>&quot;</span>                  <span class="token comment"># 15 等于 0x0f</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$decimal</span> is not equal to <span class="token variable">$hex</span>&quot;</span>
<span class="token keyword">fi</span>      <span class="token comment"># 十六进制也可以进行转换。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note"> 语法上并不严格要求在 <code>if</code> 之后一定要写 <code>test</code> 命令或者测试结构（<code>[]</code> 或 <code>[[]]</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">dir</span><span class="token operator">=</span>/home/bozo

<span class="token keyword">if</span> <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable">$dir</span>&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>   <span class="token comment"># &quot;2&gt;/dev/null&quot; 重定向消去错误输出。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Now in <span class="token variable">$dir</span>.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Can&#39;t change to <span class="token variable">$dir</span>.&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if COMMAND</code> 的退出状态就是<code>COMMAND</code> 的退出状态。</p>`,13),Y=s("code",null,"if",-1),j={href:"http://tldp.org/LDP/abs/html/list-cons.html#LISTCONSREF",target:"_blank",rel:"noopener noreferrer"},J=s("code",null,"if",-1),Q=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">22</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var1</span>&quot;</span> <span class="token parameter variable">-ne</span> <span class="token string">&quot;<span class="token variable">$var2</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var1</span> is not equal to <span class="token variable">$var2</span>&quot;</span>

<span class="token assign-left variable">home</span><span class="token operator">=</span>/home/bozo
<span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$home</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$home</span> directory does not exist.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Z={href:"http://tldp.org/LDP/abs/html/dblparens.html",target:"_blank",rel:"noopener noreferrer"},ss=s("code",null,"(( ))",-1),ns={href:"http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF",target:"_blank",rel:"noopener noreferrer"},as=s("code",null,"test",-1),es=s("code",null,"[ ]",-1),ts=t(`<p>样例 7-3. 使用 <code>(( ))</code> 进行算术测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># arith-tests.sh</span>
<span class="token comment"># 算术测试。</span>

<span class="token comment"># (( ... )) 结构执行并测试算术表达式。</span>
<span class="token comment"># 与 [ ... ] 结构的退出状态正好相反。</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token punctuation">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Exit status of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">0</span> <span class="token punctuation">))</span></span><span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$?</span>.&quot;</span>         <span class="token comment"># 1</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token punctuation">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Exit status of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token punctuation">))</span></span><span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$?</span>.&quot;</span>         <span class="token comment"># 0</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 真</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Exit status of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token punctuation">))</span></span><span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$?</span>.&quot;</span>     <span class="token comment"># 0</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">9</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 假</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Exit status of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">9</span> <span class="token punctuation">))</span></span><span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$?</span>.&quot;</span>     <span class="token comment"># 1</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">))</span></span>                                     <span class="token comment"># 真</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Exit status of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">))</span></span><span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$?</span>.&quot;</span>    <span class="token comment"># 0</span>
<span class="token comment"># (( 5 = 5 )) 会报错。</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">-</span> <span class="token number">5</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 0</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Exit status of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">-</span> <span class="token number">5</span> <span class="token punctuation">))</span></span><span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$?</span>.&quot;</span>     <span class="token comment"># 1</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">4</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 合法</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Exit status of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">5</span> <span class="token operator">/</span> <span class="token number">4</span> <span class="token punctuation">))</span></span><span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$?</span>.&quot;</span>     <span class="token comment"># 0 </span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">))</span></span>                                      <span class="token comment"># 结果小于1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Exit status of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">))</span></span><span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$?</span>.&quot;</span>     <span class="token comment"># 舍入至0。</span>
                                                 <span class="token comment"># 1</span>

<span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token punctuation">))</span></span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null                          <span class="token comment"># 除0，非法</span>
<span class="token comment">#           ^^^^^^^^^^^</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Exit status of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable"><span class="token punctuation">((</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token punctuation">))</span></span><span class="token entity" title="\\&quot;">\\&quot;</span> is <span class="token variable">$?</span>.&quot;</span>     <span class="token comment"># 1</span>

<span class="token comment"># &quot;2&gt;/dev/null&quot; 的作用是什么？</span>
<span class="token comment"># 如果将其移除会发生什么？</span>
<span class="token comment"># 尝试移除这条语句并重新执行脚本。</span>

<span class="token comment"># ======================================= #</span>

<span class="token comment"># (( ... )) 在 if-then 中也非常有用</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">4</span>

<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> var1 <span class="token operator">&gt;</span> var2 <span class="token punctuation">))</span></span>
<span class="token keyword">then</span> <span class="token comment">#^      ^      注意不是 $var1 和 $var2，为什么？</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$var1</span> is greater then <span class="token variable">$var2</span>&quot;</span>
<span class="token keyword">fi</span>     <span class="token comment"># 5 大于 4</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ls={href:"http://tldp.org/LDP/abs/html/x17129.html#METAMEANINGREF",target:"_blank",rel:"noopener noreferrer"},is=s("code",null,"[",-1),os={href:"http://tldp.org/LDP/abs/html/special-chars.html#DOTREF",target:"_blank",rel:"noopener noreferrer"},ps=s("code",null,".（点命令）",-1);function cs(rs,us){const a=i("ExternalLinkIcon");return o(),p("div",null,[r,s("ul",null,[s("li",null,[s("p",null,[u,n(" 结构是用来检测一系列命令的 "),s("a",d,[n("退出状态"),e(a)]),n(" 是否为0（按 UNIX 惯例,退出码 0 表示命令执行成功），如果为0，则执行接下来的一个或多个命令。")])]),s("li",null,[s("p",null,[n("测试结构会使用一个特殊的命令 "),k,n("（参看特殊字符章节 "),s("a",v,[n("左方括号"),e(a)]),n("）。等同于 "),m,n(" 命令，它是一个"),s("a",b,[n("内建命令"),e(a)]),n("，写法更加简洁高效。该命令将其参数视为比较表达式或文件测试，以比较结果作为其退出状态码返回（0 为真，1 为假）。")])]),s("li",null,[s("p",null,[n("Bash 在 2.02 版本中引入了扩展测试命令 "),s("a",h,[q,e(a)]),n("，它提供了一种与其他语言语法更为相似的方式进行比较操作。注意， "),g,n(" 是一个 "),s("a",f,[n("关键字"),e(a)]),n(" 而非一个命令。")]),y]),s("li",null,[s("p",null,[n("结构 "),s("a",_,[w,e(a)]),n(" 和 "),s("a",$,[x,e(a)]),n(" 根据其执行的算术表达式的结果决定退出状态码。这样的 "),s("a",E,[n("算术扩展"),e(a)]),n(" 结构可以用来进行 "),s("a",L,[n("数值比较"),e(a)]),n("。")])])]),T,s("p",null,[n("练习：理解 "),s("a",D,[n("样例 7-1"),e(a)])]),N,s("p",null,[z,n(" 如果把 "),P,n(" 和 "),R,n(" 写在同一行时，则必须在 "),B,n(" 语句后加上一个分号来结束语句。因为 "),F,n(" 和 "),U,n(" 都是 "),s("a",I,[n("关键字"),e(a)]),n("。以关键字（或者命令）开头的语句，必须先结束该语句(分号;)，才能执行下一条语句。")]),S,s("p",null,[C,n(),A,n(" 命令是 Bash 的 "),s("a",O,[n("内建命令"),e(a)]),n("，可以用来检测文件类型和比较字符串。在 Bash 脚本中，"),M,n(" 不调用 "),X,n(" 包下的文件 "),K,n("。同样，"),V,n(" 也不会调用链接到 "),W,n(" 的 "),G,n(" 文件。")]),H,s("p",null,[n("同样的，测试括号也不一定需要与 "),Y,n(" 一起使用。其可以同 "),s("a",j,[n("列表结构"),e(a)]),n(" 结合而不需要 "),J,n("。")]),Q,s("p",null,[s("a",Z,[ss,n(" 结构"),e(a)]),n(" 扩展和执行算术表达式。如果执行结果为0，其返回的 "),s("a",ns,[n("退出状态码"),e(a)]),n(" 为1（假）。非0表达式返回的退出状态为0（真）。这与上述所使用的 "),as,n(" 和 "),es,n(" 结构形成鲜明的对比。")]),ts,s("p",null,[n("[^1]: 标记是一个具有特殊意义（"),s("a",ls,[n("元语义"),e(a)]),n("）的符号或者短字符串。在 Bash 里像 "),is,n(" 和 "),s("a",os,[ps,e(a)]),n(" 这样的标记可以扩展成关键字和命令。")])])}const vs=l(c,[["render",cs],["__file","07_1_test_constructs.html.vue"]]);export{vs as default};
