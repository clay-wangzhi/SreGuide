<template><h1 id="_4-4-特殊的变量类型" tabindex="-1"><a class="header-anchor" href="#_4-4-特殊的变量类型" aria-hidden="true">#</a> 4.4 特殊的变量类型</h1>
<h3 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h3>
<p>仅在代码块或函数中才可见的变量（参考函数章节的局部变量部分）。</p>
<h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3>
<p>会影响用户及shell行为的变量。</p>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra" loading="lazy"> 一般情况下，每一个进程都有自己的“环境”（environment），也就是一组该进程可以访问到的变量。从这个意义上来说，shell表现出与其他进程一样的行为。</p>
<p>每当shell启动时，都会创建出与其环境对应的shell环境变量。改变或增加shell环境变量会使shell更新其自身的环境。<em>子进程</em>（由父进程执行产生）会继承<em>父进程</em>的环境变量。</p>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice" loading="lazy"> 分配给环境变量的空间是有限的。创建过多环境变量或占用空间过大的环境变量有可能会造成问题。</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash$ eval "`seq 10000 | sed -e 's/.*/export var&amp;=ZZZZZZZZZZZZZZ/'`"
>
bash$ du
bash: /usr/bin/du: Argument list too long
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>注意，上面的&quot;错误&quot;已经在Linux内核版本号为2.6.23的系统中修复了。</p>
<p>（感谢 Stéphane Chazelas 对此问题的解释并提供了上面的例子。）</p>
</blockquote>
<p>如果在脚本中设置了环境变量，那么这些环境变量需要被“导出”，也就是通知脚本所在的<em>环境</em>做出相应的更新。这个“导出”操作就是 <code>export</code> 命令。</p>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra" loading="lazy"> 脚本只能将变量导出到子进程，即在这个脚本中所调用的命令或程序。在命令行中调用的脚本不能够将变量回传给命令行环境，即<em>子进程不能将变量回传给父进程</em>。</p>
<p><strong>定义：</strong> 子进程（child process）是由另一个进程，即其父进程（parent process）所启动的子程序。</p>
</blockquote>
<h3 id="位置参数" tabindex="-1"><a class="header-anchor" href="#位置参数" aria-hidden="true">#</a> 位置参数</h3>
<p>从命令行中传递给脚本的参数<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>：<code>$0, $1, $2, $3 ...</code>
即<strong>命令行参数</strong>。</p>
<p><code>$0</code> 代表脚本名称，<code>$1</code> 代表第一个参数，<code>$2</code> 代表第二个，<code>$3</code> 代表第三个，以此类推<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup>。在 <code>$9</code> 之后的参数必须被包含在大括号中，如 <code>${10}, ${11}, ${12}</code>。</p>
<p>特殊变量 <code>$*</code> 与 <code>$@</code> 代表所有位置参数。</p>
<p>样例 4-5. 位置参数</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 调用脚本时使用至少10个参数，例如</span>
<span class="token comment"># ./scriptname 1 2 3 4 5 6 7 8 9 10</span>
<span class="token assign-left variable">MINPARAMS</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"The name of this script is <span class="token entity" title="\&quot;">\"</span><span class="token variable">$0</span><span class="token entity" title="\&quot;">\"</span>."</span>
<span class="token comment"># 附带 ./ 代表当前目录</span>
<span class="token builtin class-name">echo</span> <span class="token string">"The name of this script is <span class="token entity" title="\&quot;">\"</span><span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span><span class="token entity" title="\&quot;">\"</span>."</span>
<span class="token comment"># 除去路径信息（查看 'basename'）</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token punctuation">]</span>              <span class="token comment"># 测试变量是否存在</span>
<span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"Parameter #1 is <span class="token variable">$1</span>"</span>  <span class="token comment"># 使用引号转义#</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">$2</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"Parameter #2 is <span class="token variable">$2</span>"</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">$3</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"Parameter #3 is <span class="token variable">$3</span>"</span>
<span class="token keyword">fi</span>

<span class="token comment"># ...</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">${10}</span>"</span> <span class="token punctuation">]</span>  <span class="token comment"># 大于 $9 的参数必须被放在大括号中</span>
<span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"Parameter #10 is <span class="token variable">${10}</span>"</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">"-----------------------------------"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"All the command-line parameters are: "</span><span class="token variable">$*</span><span class="token string">""</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -lt <span class="token string">"<span class="token variable">$MINPARAMS</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"This script needs at least <span class="token variable">$MINPARAMS</span> command-line arguments!"</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>在位置参数中使用大括号助记符提供了一种非常简单的方式来访问传入脚本的最后一个参数。在其中会使用到间接引用。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">args</span><span class="token operator">=</span><span class="token variable">$#</span>           <span class="token comment"># 传入参数的个数</span>
<span class="token assign-left variable">lastarg</span><span class="token operator">=</span><span class="token variable">${<span class="token operator">!</span>args}</span>
<span class="token comment"># 这是 $args 的一种间接引用方式</span>

<span class="token comment"># 也可以使用:       lastarg=${!#}             (感谢 Chris Monson.)</span>
<span class="token comment"># 这是 $# 的一种间接引用方式。</span>
<span class="token comment"># 注意 lastarg=${!$#} 是无效的。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>一些脚本能够根据调用时文件名的不同来执行不同的操作。要达到这样的效果，脚本需要检测 <code>$0</code>，也就是调用时的文件名<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3" /></sup>。同时，也必须存在指向这个脚本所有别名的符号链接文件（symbolic links）。详情查看样例 16-2。</p>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/tip.gif" alt="info" loading="lazy"> 如果一个脚本需要一个命令行参数但是在调用的时候却没有传入，那么这将会造成一个空变量赋值。这通常不是我们想要的。一种避免的方法是，在使用期望的位置参数时候，在赋值语句两侧添加一个额外的字符。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">variable1_</span><span class="token operator">=</span><span class="token variable">$1_</span>  <span class="token comment"># 而不是 variable1=$1</span>
<span class="token comment"># 使用这种方法可以在没有位置参数的情况下避免产生错误。</span>

<span class="token assign-left variable">critical_argument01</span><span class="token operator">=</span><span class="token variable">$variable1_</span>

<span class="token comment"># 多余的字符可以被去掉，就像下面这样：</span>
<span class="token assign-left variable">variable1</span><span class="token operator">=</span><span class="token variable">${variable1_<span class="token operator">/</span>_<span class="token operator">/</span>}</span>
<span class="token comment"># 仅仅当 $variable1_ 是以下划线开头时候才会有一些副作用。</span>
<span class="token comment"># 这里使用了我们稍后会介绍的参数替换模板中的一种。</span>
<span class="token comment"># （将替换模式设为空等价于删除。）</span>

<span class="token comment"># 更直接的处理方法就是先检测预期的位置参数是否被传入。</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token variable">$1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_MISSING_POS_PARAM</span>
<span class="token keyword">fi</span>


<span class="token comment">#  但是，正如 Fabin Kreutz 指出的，</span>
<span class="token comment">#+ 上面的方法会有一些意想不到的副作用。</span>
<span class="token comment">#  更好的方法是使用参数替换：</span>
<span class="token comment">#         ${1:-$DefaultVal}</span>
<span class="token comment">#  详情查看第十章“操作变量”的第二节“变量替换”。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>样例 4-6. <em>wh</em>, <em>whois</em> 域名查询</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># ex18.sh</span>

<span class="token comment"># 在下面三个可选的服务器中进行 whois 域名查询：</span>
<span class="token comment"># ripe.net, cw.net, radb.net</span>

<span class="token comment"># 将这个脚本重命名为 'wh' 后放在 /usr/local/bin 目录下</span>

<span class="token comment"># 这个脚本需要进行符号链接：</span>
<span class="token comment"># ln -s /usr/local/bin/wh /usr/local/bin/wh-ripe</span>
<span class="token comment"># ln -s /usr/local/bin/wh /usr/local/bin/wh-apnic</span>
<span class="token comment"># ln -s /usr/local/bin/wh /usr/local/bin/wh-tucows</span>

<span class="token assign-left variable">E_NOARGS</span><span class="token operator">=</span><span class="token number">75</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Usage: <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span> [domain-name]"</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NOARGS</span>
<span class="token keyword">fi</span>

<span class="token comment"># 检查脚本名，访问对应服务器进行查询。</span>
<span class="token keyword">case</span> <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span> <span class="token keyword">in</span>    <span class="token comment"># 也可以写:    case ${0##*/} in</span>
    <span class="token string">"wh"</span>       <span class="token punctuation">)</span> whois <span class="token variable">$1</span>@whois.tucows.com<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">"wh-ripe"</span>  <span class="token punctuation">)</span> whois <span class="token variable">$1</span>@whois.ripe.net<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">"wh-apnic"</span> <span class="token punctuation">)</span> whois <span class="token variable">$1</span>@whois.apnic.net<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">"wh-cw"</span>    <span class="token punctuation">)</span> whois <span class="token variable">$1</span>@whois.cw.net<span class="token punctuation">;</span><span class="token punctuation">;</span>
    *          <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">"Usage: <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span> [domain-name]"</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>使用 <code>shift</code> 命令可以将全体位置参数向左移一位, 重新赋值。</p>
<p><code>$1 &lt;--- $2</code>, <code>$2 &lt;--- $3</code>, <code>$3 &lt;--- $4</code>，以此类推。</p>
<p>原先的 <code>$1</code> 将会消失，而 <code>$0</code>（脚本名称）不会有任何改变。如果你在脚本中使用了大量的位置参数，<code>shift</code> 可以让你不使用{大括号}助记法也可以访问超过10个的位置参数。</p>
<p>样例 4-7. 使用 <code>shift</code> 命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># shft.sh: 使用 `shift` 命令步进访问所有的位置参数。</span>

<span class="token comment"># 将这个脚本命名为 shft.sh，然后在调用时跟上一些参数。</span>
<span class="token comment"># 例如：</span>
<span class="token comment">#    sh shft.sh a b c def 83 barndoor</span>

<span class="token keyword">until</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token punctuation">]</span>  <span class="token comment"># 直到访问完所有的参数</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> -n <span class="token string">"<span class="token variable">$1</span> "</span>
  <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>               <span class="token comment"># 换行。</span>

<span class="token comment"># 那些被访问完的参数又会怎样呢？</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$2</span>"</span>
<span class="token comment"># 什么都不会被打印出来。</span>
<span class="token comment"># 当 $2 被移动到 $1 且没有 $3 时，$2 将会保持空。</span>
<span class="token comment"># 因此 shift 是移动参数而非复制参数。</span>

<span class="token builtin class-name">exit</span>

<span class="token comment">#  可以参考 echo-params.sh 脚本，在不使用 shift 命令的情况下，</span>
<span class="token comment">#+ 步进访问所有位置参数。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><code>shift</code> 命令也可以带一个参数来指明一次移动多少位。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># shift-past.sh</span>

<span class="token builtin class-name">shift</span> <span class="token number">3</span>    <span class="token comment"># 移动3位。</span>
<span class="token comment"># 与 n=3; shift $n 效果相同。</span>

<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$1</span>"</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># ======================== #</span>


$ <span class="token function">sh</span> shift-past.sh <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token number">4</span>

<span class="token comment">#  但是就像 Eleni Fragkiadaki 指出的那样，</span>
<span class="token comment">#  如果尝试将位置参数（$#）传给 'shift'，</span>
<span class="token comment">#  将会导致脚本错误的结束，同时位置参数也不会发送改变。</span>
<span class="token comment">#  这也许是因为陷入了一个死循环...</span>
<span class="token comment">#  比如：</span>
<span class="token comment">#      until [ -z "$1" ]</span>
<span class="token comment">#      do</span>
<span class="token comment">#         echo -n "$1 "</span>
<span class="token comment">#         shift 20    #  如果少于20个位置参数，</span>
<span class="token comment">#      done           #+ 那么循环将永远不会结束。</span>
<span class="token comment">#</span>
<span class="token comment">#  当你不确定是否有这么多的参数时，你可以加入一个测试：</span>
<span class="token comment">#      shift 20 || break</span>
<span class="token comment">#               ^^^^^^^^</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="extra" loading="lazy"> 使用 <code>shift</code> 命令同给函数传参相类似。详情查看样例 36-18。</p>
</blockquote>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>函数同样也可以接受与使用位置参数。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p>是调用脚本的进程设置了 $0 参数。就是脚本的文件名。详情可以查看 <code>execv</code> 的使用手册。<br>在命令行中，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn><mtext>是</mtext><mi>s</mi><mi>h</mi><mi>e</mi><mi>l</mi><mi>l</mi><mtext>的名称。</mtext><mo>&lt;</mo><mi>p</mi><mi>r</mi><mi>e</mi><mo>&gt;</mo><mi>b</mi><mi>a</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding="application/x-tex">0 是shell的名称。&lt;pre&gt;bash</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord">0</span><span class="mord cjk_fallback">是</span><span class="mord mathnormal">s</span><span class="mord mathnormal">h</span><span class="mord mathnormal">e</span><span class="mord mathnormal" style="margin-right:0.01968em;">ll</span><span class="mord cjk_fallback">的名称。</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal">re</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">ba</span><span class="mord mathnormal">s</span><span class="mord mathnormal">h</span></span></span></span> echo $0<br>bash<br><br>tcsh% echo $0<br>tcsh</pre> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote3" class="footnote-item"><p>如果脚本被引用（sourced）执行或者被链接（symlinked）执行时会失效。安全的方法是检测变量 <code>$BASH_Source</code>。 <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
