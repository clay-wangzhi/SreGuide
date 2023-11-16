import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-6e2a3b53.js";const l={},i=e(`<h1 id="_9-3-random-生成随机数" tabindex="-1"><a class="header-anchor" href="#_9-3-random-生成随机数" aria-hidden="true">#</a> 9.3 <code>$RANDOM</code>：生成随机数</h1><blockquote><p>任何试图通过确定性方法生成随机数的行为都是在犯罪。</p><p>—— 约翰·冯·诺伊曼</p></blockquote><p><code>$RANDOM</code> 是 Bash 中用来生成 0 至 32767 之间随机整数[^1]的一个内置 <a href="">函数</a>（而非常量）。其<strong>不应</strong>被用于生成密钥。</p><h4 id="样例-9-11-生成随机数" tabindex="-1"><a class="header-anchor" href="#样例-9-11-生成随机数" aria-hidden="true">#</a> 样例 9-11. 生成随机数</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># $RANDOM 每一次调用都会返回一个随机的不同的整数。</span>
<span class="token comment"># 随机数的标称范围为 0 - 32767（16位有符号整型）。</span>

<span class="token assign-left variable">MAXCOUNT</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$MAXCOUNT</span> random numbers:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----------------&quot;</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$count</span>&quot;</span> <span class="token parameter variable">-le</span> <span class="token variable">$MAXCOUNT</span> <span class="token punctuation">]</span>      <span class="token comment"># 生成 10 ($MAXCOUNT) 个随机整数。</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$number</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;count += 1&quot;</span>  <span class="token comment"># 增加计数。</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----------------&quot;</span>

<span class="token comment"># 如果你需要一个小于指定上界的随机数，可以使用 &#39;modulo&#39; 操作符。</span>
<span class="token comment"># 该操作符可以返回除法后的余数。</span>

<span class="token assign-left variable">RANGE</span><span class="token operator">=</span><span class="token number">500</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;number %= <span class="token variable">$RANGE</span>&quot;</span>
<span class="token comment">#           ^^</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random number less than <span class="token variable">$RANGE</span> --- <span class="token variable">$number</span>&quot;</span>

<span class="token builtin class-name">echo</span>



<span class="token comment">#  如果你需要生成的随机数大于一个指定的下界，</span>
<span class="token comment">#+ 可以增加一步判断，判别并丢弃所有小于下界的数。</span>

<span class="token assign-left variable">FLOOR</span><span class="token operator">=</span><span class="token number">200</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># 初始化</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token parameter variable">-le</span> <span class="token variable">$FLOOR</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random number greater than <span class="token variable">$FLOOR</span> --- <span class="token variable">$number</span>&quot;</span>
<span class="token builtin class-name">echo</span>

   <span class="token comment"># 现在来看一种可以代替上面循环的更简单的方式，也就是</span>
   <span class="token comment">#       let &quot;number = $RANDOM + $FLOOR&quot;</span>
   <span class="token comment"># 该方式可以不使用 while 循环，效率更高。</span>
   <span class="token comment"># 但是，该方法可能会产生一些问题，是什么呢？</span>



<span class="token comment"># 通过结合上面的两种方法，可以获得一个特定范围内的随机数。</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># 初始化</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token parameter variable">-le</span> <span class="token variable">$FLOOR</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;number %= <span class="token variable">$RANGE</span>&quot;</span>  <span class="token comment"># 将 $number 缩小至 $RANGE 的范围内。</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random number between <span class="token variable">$FLOOR</span> and <span class="token variable">$RANGE</span> --- <span class="token variable">$number</span>&quot;</span>
<span class="token builtin class-name">echo</span>



<span class="token comment"># 生成二元选择值，即真(true)或假(false)。</span>
<span class="token assign-left variable">BINARY</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">T</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>

<span class="token builtin class-name">let</span> <span class="token string">&quot;number %= <span class="token variable">$BINARY</span>&quot;</span>
<span class="token comment">#  如果使用    let &quot;number &gt;&gt;= 14&quot;    可以获得更优的随机分布</span>
<span class="token comment">#+ （除了最低位，其余二进制位都右移）。</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token variable">$T</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;TRUE&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;FALSE&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>


<span class="token comment"># 扔一个骰子。</span>
<span class="token assign-left variable">SPOTS</span><span class="token operator">=</span><span class="token number">6</span>   <span class="token comment"># 模 6 的余数范围为 0 - 5。</span>
          <span class="token comment"># 然后加 1 就可以得到期望的范围 1 - 6。</span>
          <span class="token comment"># 感谢 Paulo Marcel Coelho Aragao 简化了代码。</span>
<span class="token assign-left variable">die1</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">die2</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment"># 如果设置 SPOTS=7 就可以不用加 1 得到值。这是不是一种更好的方法，为什么？</span>

<span class="token comment"># 为了保证公平，独立的投每一个骰子。</span>

    <span class="token builtin class-name">let</span> <span class="token string">&quot;die1 = <span class="token environment constant">$RANDOM</span> % <span class="token variable">$SPOTS</span> + 1&quot;</span> <span class="token comment"># 投第一个骰子。</span>
    <span class="token builtin class-name">let</span> <span class="token string">&quot;die2 = <span class="token environment constant">$RANDOM</span> % <span class="token variable">$SPOTS</span> + 1&quot;</span> <span class="token comment"># 投第二个骰子。</span>
    <span class="token comment">#  哪一种运算符有更高的优先级，</span>
    <span class="token comment">#+ 取余(%)还是加法(+)？</span>


<span class="token builtin class-name">let</span> <span class="token string">&quot;throw = <span class="token variable">$die1</span> + <span class="token variable">$die2</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Throw of the dice = <span class="token variable">$throw</span>&quot;</span>
<span class="token builtin class-name">echo</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="样例-9-12-从牌组中随机选牌" tabindex="-1"><a class="header-anchor" href="#样例-9-12-从牌组中随机选牌" aria-hidden="true">#</a> 样例 9-12. 从牌组中随机选牌</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># pick-card.sh</span>

<span class="token comment"># 该样例演示了如何从数组中随机选择元素。</span>


<span class="token comment"># 随机选择任意一张牌。</span>

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

<span class="token comment"># 注意一个变量占了多行。</span>


<span class="token assign-left variable">suite</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">$Suites</span><span class="token punctuation">)</span>                <span class="token comment"># 读入数组变量。</span>
<span class="token assign-left variable">denomination</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">$Denominations</span><span class="token punctuation">)</span>

<span class="token assign-left variable">num_suites</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>suite<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>        <span class="token comment"># 数组中的元素数量。</span>
<span class="token assign-left variable">num_denominations</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>denomination<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">\${denomination<span class="token punctuation">[</span>$((RANDOM<span class="token operator">%</span>num_denominations))<span class="token punctuation">]</span>}</span> of &quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${suite<span class="token punctuation">[</span>$((RANDOM<span class="token operator">%</span>num_suites))<span class="token punctuation">]</span>}</span>


<span class="token comment"># $bozo sh pick-cards.sh</span>
<span class="token comment"># Jack of Clubs</span>


<span class="token comment"># 感谢 jipe 指出可以用 $RANDOM 随机选牌。</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-9-13-模拟布朗运动" tabindex="-1"><a class="header-anchor" href="#example-9-13-模拟布朗运动" aria-hidden="true">#</a> Example 9-13. 模拟布朗运动</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># brownian.sh</span>
<span class="token comment"># 作者：Mendel Cooper</span>
<span class="token comment"># 发布日期：10/26/07</span>
<span class="token comment"># 开源协议：GPL3</span>

<span class="token comment">#  ----------------------------------------------------------------</span>
<span class="token comment">#  该脚本模拟了布朗运动。</span>
<span class="token comment">#+ 布朗运动是指微小粒子受到流体粒子随机碰撞，</span>
<span class="token comment">#+ 而在流体中做的无规则随机运动。</span>
<span class="token comment">#+ 也就是俗称的“醉汉走路”。</span>

<span class="token comment">#  布朗运动也可以被视作是一个简化的高尔顿板。</span>
<span class="token comment">#+ 高尔顿板是一个有着交错排列的钉子的倾斜板子，</span>
<span class="token comment">#+ 每次可以从中向下滚动一堆石子。</span>
<span class="token comment">#+ 在板子底端是一排槽位，</span>
<span class="token comment">#+ 石子最后会落在槽位中。</span>
<span class="token comment">#  把它想象成一个简单的弹珠游戏就可以了。</span>
<span class="token comment">#  当运行这个脚本之后，</span>
<span class="token comment">#+ 你就会发现大部分的石子都聚集在中间的槽位里。</span>
<span class="token comment">#+ 这与预期的二项分布相符。</span>
<span class="token comment">#  作为模拟高尔顿板的程序，</span>
<span class="token comment">#+ 脚本忽略了许多参数，</span>
<span class="token comment">#+ 例如板子的倾斜角度、石子滚动的摩擦系数、</span>
<span class="token comment">#+ 冲击角度以及钉子的弹性系数等等。</span>
<span class="token comment">#  忽略的这些参数能够在多大程度上影响模拟的精度？</span>
<span class="token comment">#  -------------------------------------------------------------</span>

<span class="token assign-left variable">PASSES</span><span class="token operator">=</span><span class="token number">500</span>            <span class="token comment">#  粒子作用数 / 石子数。</span>
<span class="token assign-left variable">ROWS</span><span class="token operator">=</span><span class="token number">10</span>               <span class="token comment">#  碰撞数 / 每一排钉子的数量。</span>
<span class="token assign-left variable">RANGE</span><span class="token operator">=</span><span class="token number">3</span>               <span class="token comment">#  $RANDOM 的输出范围为 0 - 2。</span>
<span class="token assign-left variable">POS</span><span class="token operator">=</span><span class="token number">0</span>                 <span class="token comment">#  滚落左侧或是右侧。</span>
<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$$</span>             <span class="token comment">#  将脚本的进程 ID 作为</span>
                      <span class="token comment">#+ 生成随机数的种子。</span>

<span class="token builtin class-name">declare</span> <span class="token parameter variable">-a</span> Slots      <span class="token comment"># 用于储存落入每一个槽位的石子数量。</span>
<span class="token assign-left variable">NUMSLOTS</span><span class="token operator">=</span><span class="token number">21</span>           <span class="token comment"># 底部槽位的数量。</span>


<span class="token function-name function">Initialize_Slots</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment"># 初始化数组。</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">seq</span> $NUMSLOTS <span class="token variable">)</span></span>
<span class="token keyword">do</span>
  Slots<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>                  <span class="token comment"># 在正式模拟开始之前先输出空行。</span>
  <span class="token punctuation">}</span>


<span class="token function-name function">Show_Slots</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot; &quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span> <span class="token function">seq</span> $NUMSLOTS <span class="token variable">)</span></span>   <span class="token comment"># 更精致地输出数组中的所有元素。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">printf</span> <span class="token string">&quot;%3d&quot;</span> <span class="token variable">\${Slots<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>   <span class="token comment"># 每个结果都占三个字符的宽度。</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token comment"># 槽位：</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; |__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;                                ||&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token comment">#  需要注意的是，如果任意一个槽位中石子的数量超过 99，</span>
     <span class="token comment">#+ 将会打乱整个程序的显示效果。</span>
     <span class="token comment">#  如果只运行 500 次通常可以避免这个问题。</span>
  <span class="token punctuation">}</span>


<span class="token function-name function">Move</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>              <span class="token comment"># 将一个单位左移、右移或保持原地不动。</span>
  <span class="token assign-left variable">Move</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>         <span class="token comment"># $RANDOM 到底有多随机？让我们看看...</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;Move %= RANGE&quot;</span>  <span class="token comment"># 标准化至范围 0 - 2。</span>
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$Move</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>                   <span class="token comment"># 什么也不做，也就是原地不动。</span>
    <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>POS<span class="token operator">--</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>          <span class="token comment"># 左移。</span>
    <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>POS<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>          <span class="token comment"># 右移。</span>
    * <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Error &quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>   <span class="token comment"># 出现异常！（应该永远不会发生）</span>
  <span class="token keyword">esac</span>
  <span class="token punctuation">}</span>


<span class="token function-name function">Play</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                    <span class="token comment"># 模拟单次运行（内部循环）。</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$i</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token string">&quot;<span class="token variable">$ROWS</span>&quot;</span> <span class="token punctuation">]</span>   <span class="token comment"># 每一排钉子经过且仅经过一次石子。</span>
<span class="token keyword">do</span>
  Move
  <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span>
<span class="token keyword">done</span>

<span class="token assign-left variable">SHIFT</span><span class="token operator">=</span><span class="token number">11</span>                     <span class="token comment"># 为什么是 11 而不是 10？</span>
<span class="token builtin class-name">let</span> <span class="token string">&quot;POS += <span class="token variable">$SHIFT</span>&quot;</span>          <span class="token comment"># 将原点移到中间。</span>
<span class="token variable"><span class="token punctuation">((</span> Slots[$POS]<span class="token operator">++</span> <span class="token punctuation">))</span></span>          <span class="token comment"># 调试：echo $POS</span>

<span class="token comment"># echo -n &quot;$POS &quot;</span>

  <span class="token punctuation">}</span>


<span class="token function-name function">Run</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                     <span class="token comment"># 外部循环。</span>
<span class="token assign-left variable">p</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$p</span>&quot;</span> <span class="token parameter variable">-lt</span> &quot;<span class="token variable">$PASSES</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  Play
  <span class="token variable"><span class="token punctuation">((</span> p<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token assign-left variable">POS</span><span class="token operator">=</span><span class="token number">0</span>                      <span class="token comment"># 重置为 0。为什么要这么做？</span>
<span class="token keyword">done</span>
  <span class="token punctuation">}</span>


<span class="token comment"># --------------</span>
<span class="token comment"># main ()</span>
Initialize_Slots
Run
Show_Slots
<span class="token comment"># --------------</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment">#  练习：</span>
<span class="token comment">#  ---------</span>
<span class="token comment">#  1) 将结果显示为一张直方图，</span>
<span class="token comment">#+    或者是一张散点图。</span>
<span class="token comment">#  2) 修改脚本，使用 /dev/urandom 提到 $RANDOM。</span>
<span class="token comment">#     这会使脚本更加的随机化么？</span>
<span class="token comment">#  3) 当每一个石子落下的时候，</span>
<span class="token comment">#+    尝试添加一些动画效果。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jipe 提供了一些生成指定范围内随机数的方法。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  生成范围为 6 到 30 的随机数。</span>
   <span class="token assign-left variable">rnumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>RANDOM<span class="token operator">%</span><span class="token number">25</span><span class="token operator">+</span><span class="token number">6</span><span class="token variable">))</span></span>

<span class="token comment">#  生成范围为 6 到 30 的随机数，</span>
<span class="token comment">#+ 并且该随机数能被 3 整除。</span>
   <span class="token assign-left variable">rnumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">(</span>RANDOM<span class="token operator">%</span><span class="token number">30</span><span class="token operator">/</span><span class="token number">3</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span><span class="token variable">))</span></span>

<span class="token comment">#  需要注意这种方法并不是在所有情况下都能起效。</span>
<span class="token comment">#  会在 $RANDOM%30 为 0 时失效。</span>

<span class="token comment">#  Frank Wang 建议可以换用下面的方法：</span>
   <span class="token assign-left variable">rnumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> RANDOM<span class="token operator">%</span><span class="token number">27</span><span class="token operator">/</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">3</span><span class="token operator">+</span><span class="token number">6</span> <span class="token variable">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bill Gradwohl 提出了一种改良后的仅适用于正数的公式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">rnumber</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">(</span>RANDOM<span class="token operator">%</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token operator">+</span>divisibleBy<span class="token variable">))</span></span>/divisibleBy*divisibleBy+min<span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Bill 在这还给出了一个生成指定范围内随机数的通用函数。</p><h4 id="样例-9-14-指定范围随机数" tabindex="-1"><a class="header-anchor" href="#样例-9-14-指定范围随机数" aria-hidden="true">#</a> 样例 9-14. 指定范围随机数</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># random-between.sh</span>
<span class="token comment"># 生成指定范围内的随机数。</span>
<span class="token comment"># 本书作者在 Bill Gradwhol 所提供的脚本的基础上作了些细微修改。</span>
<span class="token comment"># Anthony Le Clezio 修正了 187 行和 189 行。</span>
<span class="token comment"># 本书被授权使用该脚本。</span>


<span class="token function-name function">randomBetween</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">#  生成一个范围在 $min 和 $max 之间，</span>
   <span class="token comment">#+ 并且能被 $divisibleBy 整除的</span>
   <span class="token comment">#+ 随机正数或负数。</span>
   <span class="token comment">#  返回的随机数遵循合理的随机分布。</span>
   
   <span class="token comment">#  Bill Gradwohl - Oct 1, 2003</span>
   
   <span class="token function-name function">syntax</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment"># 嵌套函数。</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;Syntax: randomBetween [min] [max] [multiple]&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Expects up to 3 passed parameters, &quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;but all are completely optional.&quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;min is the minimum value&quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;max is the maximum value&quot;</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;multiple specifies that the answer must be &quot;</span>
      <span class="token builtin class-name">echo</span>     <span class="token string">&quot;a multiple of this value.&quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;    i.e. answer must be evenly divisible by this number.&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;If any value is missing, defaults area supplied as: 0 32767 1&quot;</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Successful completion returns 0, &quot;</span>
      <span class="token builtin class-name">echo</span>      <span class="token string">&quot;unsuccessful completion returns&quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;function syntax and 1.&quot;</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;The answer is returned in the global variable &quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;randomBetweenAnswer&quot;</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Negative values for any passed parameter are &quot;</span>
      <span class="token builtin class-name">echo</span>    <span class="token string">&quot;handled correctly.&quot;</span>
   <span class="token punctuation">}</span>
   
   <span class="token builtin class-name">local</span> <span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">:-</span>0}</span>
   <span class="token builtin class-name">local</span> <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token variable">\${2<span class="token operator">:-</span>32767}</span>
   <span class="token builtin class-name">local</span> <span class="token assign-left variable">divisibleBy</span><span class="token operator">=</span><span class="token variable">\${3<span class="token operator">:-</span>1}</span>
   <span class="token comment"># 考虑到没有给函数传参的情况，给变量设置默认值。</span>
   
   <span class="token builtin class-name">local</span> x
   <span class="token builtin class-name">local</span> spread
   
   <span class="token comment"># 确保 divisibleBy 的值为正数。</span>
   <span class="token punctuation">[</span> <span class="token variable">\${divisibleBy}</span> <span class="token parameter variable">-lt</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">divisibleBy</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">0</span><span class="token operator">-</span>divisibleBy<span class="token variable">))</span></span>
   
   <span class="token comment"># 合规校验。</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-gt</span> <span class="token number">3</span> <span class="token parameter variable">-o</span> <span class="token variable">\${divisibleBy}</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token parameter variable">-o</span>  <span class="token variable">\${min}</span> <span class="token parameter variable">-eq</span> <span class="token variable">\${max}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      syntax
      <span class="token builtin class-name">return</span> <span class="token number">1</span>
   <span class="token keyword">fi</span>
   
   <span class="token comment"># 检查 min 和 max 的值是否颠倒。</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${min}</span> <span class="token parameter variable">-gt</span> <span class="token variable">\${max}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token comment"># 交换它们。</span>
      <span class="token assign-left variable">x</span><span class="token operator">=</span><span class="token variable">\${min}</span>
      <span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token variable">\${max}</span>
      <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token variable">\${x}</span>
   <span class="token keyword">fi</span>
   
   <span class="token comment">#  如果 min 值本身不能被 $divisibleBy 整除，</span>
   <span class="token comment">#+ 则将其修正到范围内。</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>min<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span> <span class="token parameter variable">-ne</span> <span class="token variable">\${min}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${min}</span> <span class="token parameter variable">-lt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>min<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">else</span>
         <span class="token assign-left variable">min</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">((</span>min<span class="token operator">/</span>divisibleBy<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">fi</span>
   <span class="token keyword">fi</span>
   
   <span class="token comment">#  如果 max 值本身不能被 $divisibleBy 整除，</span>
   <span class="token comment">#+ 则将其修正到范围内。</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>max<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span> <span class="token parameter variable">-ne</span> <span class="token variable">\${max}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${max}</span> <span class="token parameter variable">-lt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">((</span>max<span class="token operator">/</span>divisibleBy<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">else</span>
         <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>max<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">fi</span>
   <span class="token keyword">fi</span>

   <span class="token comment">#  ---------------------------------------------------------------------</span>
   <span class="token comment">#  接下来开始真正的内容。</span>
   
   <span class="token comment">#  需要注意的是，为了得到端点间合理的随机分布，</span>
   <span class="token comment">#+ 随机数的取值范围应是 0 至 abs(max-min)+divisibleBy，</span>
   <span class="token comment">#+ 而不是简单的 abs(max-min)+1。</span>
   
   <span class="token comment">#  少量的增长将会带来端点间</span>
   <span class="token comment">#+ 合理的随机分布。</span>
   
   <span class="token comment">#  将公式修改为使用 abs(max-min)+1 仍然可以得到正确的答案，</span>
   <span class="token comment">#+ 但是获得的这些随机数的随机性是有缺陷的，</span>
   <span class="token comment">#+ 因为这种情况下返回的端点值 ($min 和 $max) 的次数远少于</span>
   <span class="token comment">#+ 使用正确公式时所返回的次数。</span>
   <span class="token comment">#  ---------------------------------------------------------------------</span>

   <span class="token assign-left variable">spread</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>max<span class="token operator">-</span>min<span class="token variable">))</span></span>
   <span class="token comment">#  Omair Eshkenazi 指出在这里没有必要进行校验，</span>
   <span class="token comment">#+ 因为 max 和 min 的值已经被交换了。</span>
   <span class="token punctuation">[</span> <span class="token variable">\${spread}</span> <span class="token parameter variable">-lt</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">spread</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">0</span><span class="token operator">-</span>spread<span class="token variable">))</span></span>
   <span class="token builtin class-name">let</span> <span class="token assign-left variable">spread</span><span class="token operator">+=</span>divisibleBy
   <span class="token assign-left variable">randomBetweenAnswer</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">(</span>RANDOM<span class="token operator">%</span>spread<span class="token punctuation">)</span><span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token operator">+</span>min<span class="token variable">))</span></span>
   
   <span class="token builtin class-name">return</span> <span class="token number">0</span>
   
   <span class="token comment">#  但是 Paulo Marcel Coelho Aragao 指出</span>
   <span class="token comment">#+ 当 $max 和 $min 不能被 $divisibleBy 整除时，</span>
   <span class="token comment">#+ 该公式就会失效。</span>
   <span class="token comment">#</span>
   <span class="token comment">#  他建议替换为下面的公式：</span>
   <span class="token comment">#    rnumber = $(((RANDOM%(max-min+1)+min)/divisibleBy*divisibleBy))</span>
   
<span class="token punctuation">}</span>

<span class="token comment"># 接下来测试函数。</span>
<span class="token assign-left variable">min</span><span class="token operator">=</span>-14
<span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token assign-left variable">divisibleBy</span><span class="token operator">=</span><span class="token number">3</span>


<span class="token comment">#  循环执行足够多次数的函数，生成包含这些随机数的数组，</span>
<span class="token comment">#+ 然后校验数组中是否包含了端点范围内的每一个数字。</span>

<span class="token builtin class-name">declare</span> <span class="token parameter variable">-a</span> answer
<span class="token assign-left variable">minimum</span><span class="token operator">=</span><span class="token variable">\${min}</span>
<span class="token assign-left variable">maximum</span><span class="token operator">=</span><span class="token variable">\${max}</span>
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>minimum<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span> <span class="token parameter variable">-ne</span> <span class="token variable">\${minimum}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${minimum}</span> <span class="token parameter variable">-lt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token assign-left variable">minimum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>minimum<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">else</span>
         <span class="token assign-left variable">minimum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">((</span>minimum<span class="token operator">/</span>divisibleBy<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">fi</span>
   <span class="token keyword">fi</span>
   
   
   <span class="token comment">#  如果 max 值本身不能被 $divisibleBy 整除，</span>
   <span class="token comment">#+ 则将其修正到范围内。</span>
   
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>maximum<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span> <span class="token parameter variable">-ne</span> <span class="token variable">\${maximum}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${maximum}</span> <span class="token parameter variable">-lt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token assign-left variable">maximum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token punctuation">((</span>maximum<span class="token operator">/</span>divisibleBy<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">else</span>
         <span class="token assign-left variable">maximum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>maximum<span class="token operator">/</span>divisibleBy<span class="token operator">*</span>divisibleBy<span class="token variable">))</span></span>
      <span class="token keyword">fi</span>
   <span class="token keyword">fi</span>


<span class="token comment">#  需要保证数组的下标只能为正数，</span>
<span class="token comment">#+ 因此这里需要通过位移来保证</span>
<span class="token comment">#+ 结果为正。</span>

<span class="token assign-left variable">disp</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">0</span><span class="token operator">-</span>minimum<span class="token variable">))</span></span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span>\${minimum}<span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>\${maximum}<span class="token punctuation">;</span> i<span class="token operator">+=</span>divisibleBy<span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
   answer<span class="token punctuation">[</span>i+disp<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">done</span>


<span class="token comment"># 现在开始循环执行函数以获得大量的随机数。</span>
<span class="token assign-left variable">loopIt</span><span class="token operator">=</span><span class="token number">1000</span>   <span class="token comment">#  脚本的作者建议使用 100000，</span>
              <span class="token comment">#+ 但是这会花费大量的时间。</span>
              
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>\${loopIt}<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>

   <span class="token comment">#  注意，我们在这里颠倒了 min 和 max 的值，</span>
   <span class="token comment">#+ 为的是校验函数在这种情况下是否能正常执行。</span>
   
   randomBetween <span class="token variable">\${max}</span> <span class="token variable">\${min}</span> <span class="token variable">\${divisibleBy}</span>
   
   <span class="token comment"># 如果获得了非预期的答案，则报错。</span>
   <span class="token punctuation">[</span> <span class="token variable">\${randomBetweenAnswer}</span> <span class="token parameter variable">-lt</span> <span class="token variable">\${min}</span> <span class="token parameter variable">-o</span> <span class="token variable">\${randomBetweenAnswer}</span> <span class="token parameter variable">-gt</span> <span class="token variable">\${max}</span> <span class="token punctuation">]</span> <span class="token punctuation">\\</span>
   <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> MIN or MAX error - <span class="token variable">\${randomBetweenAnswer}</span><span class="token operator">!</span>
   <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>randomBetweenAnswer<span class="token operator">%</span>\${divisibleBy}<span class="token variable">))</span></span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">\\</span>
   <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> DIVISIBLE BY error - <span class="token variable">\${randomBetweenAnswer}</span><span class="token operator">!</span>
   
   <span class="token comment"># 保存统计结果。</span>
   answer<span class="token punctuation">[</span>randomBetweenAnswer+disp<span class="token punctuation">]</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>answer[randomBetweenAnswer<span class="token operator">+</span>disp]<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
<span class="token keyword">done</span>



<span class="token comment"># 校验最终结果。</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span>\${minimum}<span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>\${maximum}<span class="token punctuation">;</span> i<span class="token operator">+=</span>divisibleBy<span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
   <span class="token punctuation">[</span> <span class="token variable">\${answer<span class="token punctuation">[</span>i+disp<span class="token punctuation">]</span>}</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">\\</span>
   <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;We never got an answer of <span class="token variable">$i</span>.&quot;</span> <span class="token punctuation">\\</span>
   <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${i}</span> occurred <span class="token variable">\${answer<span class="token punctuation">[</span>i+disp<span class="token punctuation">]</span>}</span> times.&quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么 <code>$RANDOM</code> 到底有多随机？最好的测试方法就是写一个脚本跟踪由 <code>$RANDOM</code> 生成的随机数的分布。接下来让我们多投几次由 <code>$RANDOM</code> 做的骰子...</p><h4 id="样例-9-15-用-random-投骰子" tabindex="-1"><a class="header-anchor" href="#样例-9-15-用-random-投骰子" aria-hidden="true">#</a> 样例 9-15. 用 <code>RANDOM</code> 投骰子</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># RANDOM 有多随机？</span>

<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$$</span>       <span class="token comment"># 用脚本的进程 ID 重置随机数生成器种子。</span>

<span class="token assign-left variable">PIPS</span><span class="token operator">=</span><span class="token number">6</span>          <span class="token comment"># 骰子有 6 个点。</span>
<span class="token assign-left variable">MAXTHORWS</span><span class="token operator">=</span><span class="token number">600</span>   <span class="token comment"># 如果你没有更好消磨时间的办法，就增加这个值。</span>
                <span class="token comment"># 投骰子的次数。</span>

<span class="token assign-left variable">ones</span><span class="token operator">=</span><span class="token number">0</span>          <span class="token comment">#  必须初始化计数器的值为 0，</span>
<span class="token assign-left variable">twos</span><span class="token operator">=</span><span class="token number">0</span>          <span class="token comment">#+ 因为未初始化的变量的值为 null 而非 0。</span>
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
  <span class="token number">0</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>ones<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>   <span class="token comment"># 因为骰子没有 0 点，所以这个其实对应的是 1 点。</span>
  <span class="token number">1</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>twos<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>   <span class="token comment"># 这个对应 2 点。</span>
  <span class="token number">2</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>threes<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token comment"># 以此类推。</span>
  <span class="token number">3</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>fours<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token number">4</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>fives<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token number">5</span><span class="token punctuation">)</span> <span class="token variable"><span class="token punctuation">((</span>sixes<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span>


<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$throw</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token string">&quot;<span class="token variable">$MAXTHROWS</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;die1 = RANDOM % <span class="token variable">$PIPS</span>&quot;</span>
  update_count <span class="token variable">$die1</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;throw += 1&quot;</span>
<span class="token keyword">done</span>

print_result

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment">#  假设 RANDOM 是真随机，那么计数结果应该均匀分布。</span>
<span class="token comment">#  当 $MAXTHROWS 的值为 600 时，每一个计数器的值都应该在 100 左右，</span>
<span class="token comment">#+ 上下浮动大约 20。</span>
<span class="token comment">#</span>
<span class="token comment">#  记住 RANDOM 是一个 ***伪随机*** 生成器，</span>
<span class="token comment">#+ 并且也不是其中最优秀的那一个。</span>

<span class="token comment">#  随机化是一个很深奥且复杂的话题。</span>
<span class="token comment">#  足够长的“随机”序列可能会出现一些</span>
<span class="token comment">#+ 混乱或其他非随机化的表现。</span>

<span class="token comment"># 练习（简单）：</span>
<span class="token comment"># ---------------</span>
<span class="token comment"># 重写脚本，修改为投掷硬币 1000 次。</span>
<span class="token comment"># 显示为正面 &quot;HEADS&quot; 和背面 &quot;TAILS&quot;。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上一个样例中我们可以发现，在每次调用 <code>RANDOM</code> 生成器时，最好利用重置生成器种子。在 <code>RANDOM</code> 生成器中使用相同的种子会生成相同序列的随机数。[^2]（与 C 语言中的 <code>random()</code> 函数的行为一致）</p><h4 id="样例-9-16-重置-random-种子" tabindex="-1"><a class="header-anchor" href="#样例-9-16-重置-random-种子" aria-hidden="true">#</a> 样例 9-16. 重置 <code>RANDOM</code> 种子</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># seeding-random.sh: 设置 RANDOM 变量的种子。</span>
<span class="token comment"># 版本号 1.1, 发布日期 09 Feb 2013</span>

<span class="token assign-left variable">MAXCOUNT</span><span class="token operator">=</span><span class="token number">25</span>       <span class="token comment"># 生成随机数的个数。</span>
<span class="token assign-left variable">SEED</span><span class="token operator">=</span>

<span class="token function-name function">random_numbers</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token builtin class-name">local</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token builtin class-name">local</span> number

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$count</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token string">&quot;<span class="token variable">$MAXCOUNT</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$number</span> &quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;count++&quot;</span>
<span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">SEED</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$SEED</span>      <span class="token comment"># 设置变量 RANDOM 会为随机数生成器设置种子。</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random seed = <span class="token variable">$SEED</span>&quot;</span>
random_numbers

<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$SEED</span>      <span class="token comment"># 同样的种子 ...</span>
<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Again, with same random seed ...&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random seed = <span class="token variable">$SEED</span>&quot;</span>
random_numbers    <span class="token comment"># ... 生成了同样的数字序列。</span>
                  <span class="token comment">#</span>
                  <span class="token comment"># 在什么情况下重复一个随机化序列会有用？</span>
                  
<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">SEED</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$SEED</span>      <span class="token comment"># 用不同的种子再试一次 ...</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random seed = <span class="token variable">$SEED</span>&quot;</span>
random_numbers    <span class="token comment"># ... 生成了不同的数字序列。</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token comment"># RANDOM=$$  利用脚本的进程 ID 设置 RANDOM 的种子。</span>
<span class="token comment"># 同样也可以利用 &#39;time&#39; 或是 &#39;date&#39; 命令设置 RANDOM 的种子。</span>

<span class="token comment"># 更花哨一点的 ...</span>
<span class="token assign-left variable">SEED</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">head</span> <span class="token parameter variable">-1</span> /dev/urandom <span class="token operator">|</span> od <span class="token parameter variable">-N</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $2 }&#39;</span><span class="token operator">|</span> <span class="token function">sed</span> s/^0*//<span class="token variable">)</span></span>
<span class="token comment">#  从 /dev/urandom （系统的伪随机设备文件）中</span>
<span class="token comment">#+ 获取伪随机输出，</span>
<span class="token comment">#+ 然后通过 &quot;od&quot; 转换为可打印八进制字符行，</span>
<span class="token comment">#+ 然后 &quot;awk&quot; 命令会检索出一个数字作为种子，</span>
<span class="token comment">#+ 最后用 &quot;sed&quot; 命令删除数字前面所有的前置 0。</span>
<span class="token assign-left variable"><span class="token environment constant">RANDOM</span></span><span class="token operator">=</span><span class="token variable">$SEED</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Random seed = <span class="token variable">$SEED</span>&quot;</span>
random_numbers

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{% hint style=&quot;info&quot; %}</p><p>伪设备文件 <code>/dev/urandom</code> 提供了比 <code>$RANDOM</code> 变量更随机化的伪随机数。命令 <code>dd if=/dev/urandom of=targetfile bs=1 count=XXX</code> 将会创建一个包含均匀分布的伪随机数的文件。但是想要在脚本中将这些随机数赋值给变量需要做一些变通，比如使用命令 <a href=""><code>od</code></a> 进行过滤（参照上面的样例以及 <a href="">样例 16-14</a> 和 <a href="">样例 A-36</a>）或者使用管道导入命令 <a href="">md5sum</a> 中（参照 <a href="">样例 36-16</a>）。</p><p>当然也有其他在脚本中生成伪随机数的方法。比如 <code>Awk</code> 命令就提供了这样一种非常简易的方法。</p><h4 id="样例-9-17-使用-awk-命令生成伪随机数" tabindex="-1"><a class="header-anchor" href="#样例-9-17-使用-awk-命令生成伪随机数" aria-hidden="true">#</a> 样例 9-17. 使用 <a href=""><code>awk</code></a> 命令生成伪随机数</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#  random2.sh: 返回大小在 0 - 1 内，</span>
<span class="token comment">#+ 精度为小数点后 6 位的伪随机数。例如：0.822725</span>
<span class="token comment">#  使用 awk rand() 函数。</span>

<span class="token assign-left variable">AWKSCRIPT</span><span class="token operator">=</span><span class="token string">&#39; { srand(); print rand() } &#39;</span>
<span class="token comment">#           传递给 awk 的命令或参数</span>
<span class="token comment"># 注意 srand() 重置了 awk 的随机数生成种子。</span>


<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Random number between 0 and 1 = &quot;</span>

<span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&quot;<span class="token variable">$AWKSCRIPT</span>&quot;</span>
<span class="token comment"># 如果省略 &#39;echo&#39; 将会发生什么？</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>


<span class="token comment"># 练习：</span>
<span class="token comment"># ---------</span>

<span class="token comment"># 1) 使用循环结构，输出 10 个不同的随机数。</span>
<span class="token comment">#      （提示：你必须在每次循环中使用 srand() 函数重置种子以获得不同的随机数种子。</span>
<span class="token comment">#+       如果你省略了这一步会发生什么？）</span>

<span class="token comment"># 2) 利用整型乘数作为随机数的缩放因子，</span>
<span class="token comment">#+   生成大小在 10 到 100 之间的随机数。</span>

<span class="token comment"># 3) 内容与练习 #2 相同，只是这次生成随机整数。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，命令 <a href=""><code>date</code></a> 可以用于 <a href="">生成整型随机数序列</a>。</p><p>{% endhint %}</p><h2 id="注记" tabindex="-1"><a class="header-anchor" href="#注记" aria-hidden="true">#</a> 注记</h2><p>{% hint style=&quot;info&quot; %} 真正的“随机性”，就其存在而言，只存在于一些类似放射性衰变这样还未被完全理解的自然现象中。计算机只能模拟这样的随机性，因此计算机生成的“随机数”序列被称作伪随机数。 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} 计算机用于生成伪随机数的种子可以被视作一个标识标签。例如，你可以将用种子 23 生成的随机数序列视作第23号序列。</p><p>伪随机数序列的一个属性是该序列在开始重复之前的周期长度。一个好的伪随机数生成器能够生成周期非常长的序列。 {% endhint %}</p><p>[^1]: Footnote Placeholder [^2]: Footnote Placeholder</p>`,34),p=[i];function t(o,c){return s(),a("div",null,p)}const v=n(l,[["render",t],["__file","09_3_random_generate_random_integer.html.vue"]]);export{v as default};
