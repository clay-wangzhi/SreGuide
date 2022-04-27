<template><h1 id="_10-2-参数替换" tabindex="-1"><a class="header-anchor" href="#_10-2-参数替换" aria-hidden="true">#</a> 10.2 参数替换</h1>
<p>参数替换用来处理或扩展变量。</p>
<h3 id="parameter" tabindex="-1"><a class="header-anchor" href="#parameter" aria-hidden="true">#</a> <code>${parameter}</code></h3>
<p>等同于 <code>$parameter</code>，是变量 parameter 的值。在一些特定的环境下，只允许使用不易混淆的 <code>${parameter}</code> 形式。</p>
<p>可以用于连接变量与字符串。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">your_id</span><span class="token operator">=</span><span class="token variable">${<span class="token environment constant">USER</span>}</span>-on-<span class="token variable">${<span class="token environment constant">HOSTNAME</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$your_id</span>"</span>
<span class="token comment"># </span>
<span class="token builtin class-name">echo</span> <span class="token string">"Old \<span class="token environment constant">$PATH</span> = <span class="token environment constant">$PATH</span>"</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">${<span class="token environment constant">PATH</span>}</span>:/opt/bin  <span class="token comment"># 在脚本执行过程中临时在 $PATH 中加入 /opt/bin。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"New \<span class="token environment constant">$PATH</span> = <span class="token environment constant">$PATH</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="parameter-default-parameter-default" tabindex="-1"><a class="header-anchor" href="#parameter-default-parameter-default" aria-hidden="true">#</a> <code>${parameter-default}, ${parameter:-default}</code></h3>
<p>在没有设置变量的情况下使用缺省值。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token comment"># 没有设置 var3。</span>

<span class="token builtin class-name">echo</span> <span class="token variable">${var1-$var2}</span>   <span class="token comment"># 1</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${var3-$var2}</span>   <span class="token comment"># 2</span>
<span class="token comment">#           ^          注意前面的 $ 前缀。</span>



<span class="token builtin class-name">echo</span> <span class="token variable">${username-`whoami`}</span>
<span class="token comment"># 如果变量 $username 没有被设置，输出 `whoami` 的结果。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> <code>${parameter-default}</code> 与 <code>${parameter:-default}</code> 的作用几乎相同，唯一不同的情况就是当变量 parameter 已经被声明但值为空时。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># param-sub.sh</span>

<span class="token comment"># 无论变量的值是否为空，其是否已被声明决定了缺省设置的触发。</span>

<span class="token assign-left variable">username0</span><span class="token operator">=</span>
<span class="token builtin class-name">echo</span> <span class="token string">"username0 has been declared, but is set to null."</span>
<span class="token builtin class-name">echo</span> <span class="token string">"username0 = <span class="token variable">${username0-`whoami`}</span>"</span>
<span class="token comment"># 将不会输出 `whoami` 的结果。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> username1 has not been declared.
<span class="token builtin class-name">echo</span> <span class="token string">"username1 = <span class="token variable">${username1-`whoami`}</span>"</span>
<span class="token comment"># 将会输出 `whoami` 的结果。</span>

<span class="token assign-left variable">username2</span><span class="token operator">=</span>
<span class="token builtin class-name">echo</span> <span class="token string">"username2 has been declared, but is set to null."</span>
<span class="token builtin class-name">echo</span> <span class="token string">"username2 = <span class="token variable">${username2<span class="token operator">:-</span>`whoami`}</span>"</span>
<span class="token comment">#                            ^</span>
<span class="token comment"># 因为这里是 :- 而不是 -，所以将会输出 `whoami` 的结果。</span>
<span class="token comment"># 与上面的 username0 比较。</span>


<span class="token comment"># </span>

<span class="token comment"># 再来一次：</span>

<span class="token assign-left variable">variable</span><span class="token operator">=</span>
<span class="token comment"># 变量已被声明，但其值为空。</span>

<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${varibale-0}</span>"</span>    <span class="token comment"># 没有输出。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${variable<span class="token operator">:-</span>1}</span>"</span>   <span class="token comment"># 1</span>
<span class="token comment">#               ^</span>

unser variable

<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${variable-2}</span>"</span>    <span class="token comment"># 2</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${variable<span class="token operator">:-</span>3}</span>"</span>   <span class="token comment"># 3</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>当传入的命令行参数的数量不足时，可以使用这种缺省参数结构。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">DEFAULT_FILENAME</span><span class="token operator">=</span>generic.data
<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable">${1<span class="token operator">:-</span>$DEFAULT_FILENAME}</span>
<span class="token comment"># 如果没有其他特殊情况，下面的代码块将会操作文件 "generic.data"。</span>
<span class="token comment"># 代码块开始</span>
<span class="token comment"># ...</span>
<span class="token comment"># ...</span>
<span class="token comment"># ...</span>
<span class="token comment"># 代码块结束</span>



<span class="token comment"># 摘自样例 "hanoi2.bash"：</span>
<span class="token assign-left variable">DISKS</span><span class="token operator">=</span><span class="token variable">${1<span class="token operator">:-</span>E_NOPARAM}</span>   <span class="token comment"># 必须指定碟子的个数。</span>
<span class="token comment">#  将 $DISKS 设置为传入的第一个命令行参数，</span>
<span class="token comment">#+ 如果没有传入第一个参数，则设置为 $E_NOPARAM。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>可以查看 <a href="http://tldp.org/LDP/abs/html/special-chars.html#EX58" target="_blank" rel="noopener noreferrer">样例 3-4<ExternalLinkIcon/></a>，<a href="http://tldp.org/LDP/abs/html/zeros.html#EX73" target="_blank" rel="noopener noreferrer">样例 31-2<ExternalLinkIcon/></a> 和 <a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#COLLATZ" target="_blank" rel="noopener noreferrer">样例 A-6<ExternalLinkIcon/></a>。</p>
<p>可以同 <a href="http://tldp.org/LDP/abs/html/list-cons.html#ANDDEFAULT" target="_blank" rel="noopener noreferrer">使用与链设置缺省命令行参数<ExternalLinkIcon/></a> 做比较。</p>
<h3 id="parameter-default-parameter-default-1" tabindex="-1"><a class="header-anchor" href="#parameter-default-parameter-default-1" aria-hidden="true">#</a> <code>${parameter=default}, ${parameter:=default}</code></h3>
<p>在没有设置变量的情况下，将其设置为缺省值。</p>
<p>两种形式的作用几乎相同，唯一不同的情况与上面类似，就是当变量 parameter 已经被声明但值为空时。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">${var=abc}</span>   <span class="token comment"># abc</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${vat=xyz}</span>   <span class="token comment"># abc</span>
<span class="token comment"># $var 已经在第一条语句中被赋值为 abc，因此第二条语句将不会改变它的值。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="parameter-alt-value-parameter-alt-value" tabindex="-1"><a class="header-anchor" href="#parameter-alt-value-parameter-alt-value" aria-hidden="true">#</a> <code>${parameter+alt_value}, ${parameter:+alt_value}</code></h3>
<p>如果变量已被设置，使用 alt_value，否则使用空值。</p>
<p>两种形式的作用几乎相同，唯一不同的情况就是当变量 parameter 已经被声明但值为空时，看下面的例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"###### \<span class="token variable">${parameter+alt_value}</span> ########"</span>
<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">${param1+xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span>"</span>      <span class="token comment"># a =</span>

<span class="token assign-left variable">param2</span><span class="token operator">=</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">${param2+xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span>"</span>      <span class="token comment"># a = xyz</span>

<span class="token assign-left variable">param3</span><span class="token operator">=</span><span class="token number">123</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">${param3+xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span>"</span>      <span class="token comment"># a = xyz</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">"###### \<span class="token variable">${parameter<span class="token operator">:+</span>alt_value}</span> ########"</span>
<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">${param4<span class="token operator">:+</span>xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span>"</span>      <span class="token comment"># a =</span>

<span class="token assign-left variable">param5</span><span class="token operator">=</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">${param5<span class="token operator">:+</span>xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span>"</span>      <span class="token comment"># a =</span>
<span class="token comment"># 不同于 a=${param5+xyz}</span>

<span class="token assign-left variable">param6</span><span class="token operator">=</span><span class="token number">123</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">${param6<span class="token operator">:+</span>xyz}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span>"</span>      <span class="token comment"># a = xyz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="parameter-err-msg-parameter-err-msg" tabindex="-1"><a class="header-anchor" href="#parameter-err-msg-parameter-err-msg" aria-hidden="true">#</a> <code>${parameter?err_msg}, ${parameter:?err_msg}</code></h3>
<p>如果变量已被设置，那么使用原值，否则输出 err_msg 并且终止脚本，返回 <a href="http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF" target="_blank" rel="noopener noreferrer">错误码<ExternalLinkIcon/></a> 1。</p>
<p>两种形式的作用几乎相同，唯一不同的情况与上面类似，就是当变量 parameter 已经被声明但值为空时。</p>
<p>样例 10-7. 如何使用变量替换和错误信息</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 检查系统环境变量。</span>
<span class="token comment"># 这是一种良好的预防性维护措施。</span>
<span class="token comment"># 如果控制台用户的名称 $USER 没有被设置，那么主机将不能够识别用户。</span>

<span class="token builtin class-name">:</span> <span class="token variable">${<span class="token environment constant">HOSTNAME</span>?}</span> <span class="token variable">${<span class="token environment constant">USER</span>?}</span> <span class="token variable">${<span class="token environment constant">HOME</span>?}</span> <span class="token variable">${MAIL?}</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Name of the machine is <span class="token environment constant">$HOSTNAME</span>."</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"You are <span class="token environment constant">$USER</span>."</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Your home directory is <span class="token environment constant">$HOME</span>."</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Your mail INBOX is located in <span class="token variable">$MAIL</span>."</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"If you are reading this message,"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"critcial environmental variables have been set."</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span>
  
<span class="token comment"># ------------------------------------------------------</span>

<span class="token comment"># ${variablename?} 结构统一可以检查脚本中的变量是否被设置。</span>

<span class="token assign-left variable">ThisVariable</span><span class="token operator">=</span>Value-of-ThisVariable
<span class="token comment"># 顺带一提，这个字符串的值可以被设置成名称中不可以使用的禁用字符。</span>
<span class="token builtin class-name">:</span> <span class="token variable">${ThisVariable?}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Value of ThisVariable is <span class="token variable">$ThisVariable</span>."</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>


<span class="token builtin class-name">:</span> <span class="token variable">${ZZXy23AB?"ZZXy23AB has not been set."}</span>
<span class="token comment"># 因为 ZZXy23AB 没有被设置，所以脚本会终止同时显示错误消息。</span>

<span class="token comment"># 你可以指定错误消息。</span>
<span class="token comment"># : ${variablename?"ERROR MESSAGE"}</span>


<span class="token comment"># 与这些结果相同:  dummy_variable=${ZZXy23AB?}</span>
<span class="token comment">#                 dummy_variable=${ZZXy23AB?"ZZXy23AB has not been set."}</span>
<span class="token comment">#</span>
<span class="token comment">#                 echo ${ZZXy23AB?} >/dev/null</span>

<span class="token comment"># 将上面这些检查变量是否被设置的方法同 "set -u" 作比较。</span>



<span class="token builtin class-name">echo</span> <span class="token string">"You will not see this message, because script already terminated."</span>

<span class="token assign-left variable">HERE</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token builtin class-name">exit</span> <span class="token variable">$HERE</span>   <span class="token comment"># 将不会从这里退出。</span>

<span class="token comment">#  事实上，这个脚本将会返回退出码（echo $?）1。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>样例 10-8. 参数替换与 &quot;usage&quot; 消息</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># usage-message.sh</span>

<span class="token builtin class-name">:</span> <span class="token variable">${1?"Usage<span class="token operator">:</span> $0 ARGUMENT"}</span>
<span class="token comment"># 如果命令行参数缺失，脚本将会在这里结束，并且返回下面的错误信息。</span>
<span class="token comment">#    usage-message.sh: 1: Usage: usage-message.sh ARGUMENT</span>

<span class="token builtin class-name">echo</span> <span class="token string">"These two lines echo only if command-line parameter given."</span>
<span class="token builtin class-name">echo</span> <span class="token string">"command-line parameter = <span class="token entity" title="\&quot;">\"</span><span class="token variable">$1</span><span class="token entity" title="\&quot;">\"</span>"</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>  <span class="token comment"># 仅当命令行参数存在是才会从这里退出。</span>

<span class="token comment"># 在传入和未传入命令行参数的情况下查看退出状态。</span>
<span class="token comment"># 如果传入了命令行参数，那么 "$?" 的结果是0。</span>
<span class="token comment"># 如果没有，那么 "$?" 的结果是1。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>参数替换用来处理或扩展变量。下面的表达式是对 <code>expr</code> 处理字符串的操作的补足（查看样例 16-9）。这些特殊的表达式通常养来解析文件的路径名。</p>
<h3 id="变量长度-删除子串" tabindex="-1"><a class="header-anchor" href="#变量长度-删除子串" aria-hidden="true">#</a> 变量长度 / 删除子串</h3>
<h4 id="var" tabindex="-1"><a class="header-anchor" href="#var" aria-hidden="true">#</a> <code>${#var}</code></h4>
<p>字符串的长度（<code>$var</code> 中字符的个数）。对任意 <a href="http://tldp.org/LDP/abs/html/arrays.html#ARRAYREF" target="_blank" rel="noopener noreferrer">数组<ExternalLinkIcon/></a> array，<code>${#array}</code> 返回数组中第一个元素的长度。</p>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/note.gif" alt="note" loading="lazy"> 以下情况例外：</p>
<ul>
<li><code>${#*}</code> 和 <code>${#@}</code> 返回位置参数的个数。</li>
<li>任意数组 array，<code>${#array[*]}</code> 和 <code>${#array[@]}</code> 返回数组中元素的个数。</li>
</ul>
</blockquote>
<p>样例 10-9. 变量长度</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># length.sh</span>

<span class="token assign-left variable">E_NO_ARGS</span><span class="token operator">=</span><span class="token number">65</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span>  <span class="token comment"># 脚本必须传入参数。</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Please invoke this script with one or more command-line arguments."</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_NO_ARGS</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">var01</span><span class="token operator">=</span>abcdEFGH28ij
<span class="token builtin class-name">echo</span> <span class="token string">"var01 = <span class="token variable">${var01}</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Length of var01 = <span class="token variable">${<span class="token operator">#</span>var01}</span>"</span>
<span class="token comment"># 现在我们尝试加入空格。</span>
<span class="token assign-left variable">var02</span><span class="token operator">=</span><span class="token string">"abcd EFGH28ij"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var02 = <span class="token variable">${var02}</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Length of var02 = <span class="token variable">${<span class="token operator">#</span>var02}</span>"</span>

<span class="token builtin class-name">echo</span> <span class="token string">"Number of command-line arguments passed to script = <span class="token variable">${<span class="token operator">#</span>@}</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Number of command-line arguments passed to script = <span class="token variable">${<span class="token operator">#</span>*}</span>"</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="var-pattern-var-pattern" tabindex="-1"><a class="header-anchor" href="#var-pattern-var-pattern" aria-hidden="true">#</a> <code>${var#Pattern}, ${var##Pattern}</code></h4>
<p><code>${var#Pattern}</code> 删除 <code>$var</code> 前缀部分匹配到的最短长度的 <code>$Pattern</code>。</p>
<p><code>${var##Pattern}</code> 删除 <code>$var</code> 前缀部分匹配到的最长长度的 <code>$Pattern</code>。</p>
<p>摘自 <a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#DAYSBETWEEN" target="_blank" rel="noopener noreferrer">样例 A-7<ExternalLinkIcon/></a> 的例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 函数摘自样例 "day-between.sh"。</span>
<span class="token comment"># 删除传入的参数中的前缀0。</span>

strip_leading_zero <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#  删除传入参数中可能存在的</span>
<span class="token punctuation">{</span>                     <span class="token comment">#+ 前缀0。</span>
  <span class="token assign-left variable">return</span><span class="token operator">=</span><span class="token variable">${1<span class="token operator">#</span>0}</span>       <span class="token comment">#  "1" 代表 "$1"，即传入的参数。</span>
<span class="token punctuation">}</span>                     <span class="token comment">#  从 "$1" 中删除 "0"。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>下面是由 Manfred Schwarb 提供的上述函数的改进版本：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>strip_leading_zero2 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 删除前缀0，</span>
<span class="token punctuation">{</span>                      <span class="token comment"># 否则 Bash 会将其解释为8进制数。</span>
  <span class="token builtin class-name">shopt</span> -s extglob     <span class="token comment"># 启用扩展通配特性。</span>
  <span class="token builtin class-name">local</span> <span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token variable">${1<span class="token operator">##</span>+(0)}</span> <span class="token comment"># 使用本地变量，匹配前缀中所有的0。</span>
  <span class="token builtin class-name">shopt</span> -u extglob     <span class="token comment"># 禁用扩展通配特性。</span>
  <span class="token assign-left variable">_strip_leading_zero2</span><span class="token operator">=</span><span class="token variable">${var<span class="token operator">:-</span>0}</span>
                       <span class="token comment"># 如果输入的为0，那么返回 0 而不是 ""。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>另外一个样例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> <span class="token environment constant">$PWD</span><span class="token variable">`</span></span>        <span class="token comment"># 当前工作目录的目录名。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${<span class="token environment constant">PWD</span><span class="token operator">##</span>*<span class="token operator">/</span>}</span>"</span>           <span class="token comment"># 当前工作目录的目录名。</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span>          <span class="token comment"># 脚本名。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$0</span>                     <span class="token comment"># 脚本名。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${0<span class="token operator">##</span>*<span class="token operator">/</span>}</span>"</span>             <span class="token comment"># 脚本名。</span>
<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">filename</span><span class="token operator">=</span>test.data
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${filename<span class="token operator">##</span>*.}</span>"</span>      <span class="token comment"># data</span>
                            <span class="token comment"># 文件扩展名。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="var-pattern-var-pattern-1" tabindex="-1"><a class="header-anchor" href="#var-pattern-var-pattern-1" aria-hidden="true">#</a> <code>${var%Pattern}, ${var%%Pattern}</code></h4>
<p><code>${var%Pattern}</code> 删除 <code>$var</code> 后缀部分匹配到的最短长度的 <code>$Pattern</code>。</p>
<p><code>${var%%Pattern}</code> 删除 <code>$var</code> 后缀部分匹配到的最长长度的 <code>$Pattern</code>。</p>
<p>在 Bash 的 <a href="http://tldp.org/LDP/abs/html/bashver2.html#BASH2REF" target="_blank" rel="noopener noreferrer">第二个版本<ExternalLinkIcon/></a> 中增加了一些额外的选择。</p>
<p>样例 10-10. 参数替换中的模式匹配</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># patt-matching.sh</span>

<span class="token comment"># 使用 # ## % %% 参数替换操作符进行模式匹配</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span>abcd12345abc6789
<span class="token assign-left variable">pattern1</span><span class="token operator">=</span>a*c  <span class="token comment"># 通配符 * 可以匹配 a 与 c 之间的任意字符</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1 = <span class="token variable">$var1</span>"</span>           <span class="token comment"># abcd12345abc6789</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1 = <span class="token variable">${var1}</span>"</span>         <span class="token comment"># abcd12345abc6789</span>
                              <span class="token comment"># （另一种形式）</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Number of characters in <span class="token variable">${var1}</span> = <span class="token variable">${<span class="token operator">#</span>var1}</span>"</span>
<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">echo</span> <span class="token string">"pattern1 = <span class="token variable">$pattern1</span>"</span>   <span class="token comment"># a*c  (匹配 'a' 与 'c' 之间的一切)</span>
<span class="token builtin class-name">echo</span> <span class="token string">"--------------"</span>
<span class="token builtin class-name">echo</span> <span class="token string">'${var1#$pattern1}  ='</span> <span class="token string">"<span class="token variable">${var1<span class="token operator">#</span>$pattern1}</span>"</span>    <span class="token comment">#         d12345abc6789</span>
<span class="token comment"># 匹配到首部最短的3个字符                                   abcd12345abc6789</span>
<span class="token comment">#             ^                                           |-|</span>
<span class="token builtin class-name">echo</span> <span class="token string">'${var1##$pattern1} ='</span> <span class="token string">"<span class="token variable">${var1<span class="token operator">##</span>$pattern1}</span>"</span>   <span class="token comment">#                  6789</span>
<span class="token comment"># 匹配到首部最长的12个字符                                  abcd12345abc6789</span>
<span class="token comment">#             ^                                           |----------|</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>

<span class="token assign-left variable">pattern2</span><span class="token operator">=</span>b*9            <span class="token comment"># 匹配 'b' 与 '9' 之间的任意字符</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1 = <span class="token variable">$var1</span>"</span>     <span class="token comment"># 仍旧是 abcd12345abc6789</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">"pattern2 = <span class="token variable">$pattern2</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"--------------"</span>
<span class="token builtin class-name">echo</span> <span class="token string">'${var1%pattern2}  ='</span> <span class="token string">"<span class="token variable">${var1<span class="token operator">%</span>$pattern2}</span>"</span>     <span class="token comment">#     abcd12345a</span>
<span class="token comment"># 匹配到尾部最短的6个字符                                  abcd12345abc6789</span>
<span class="token comment">#             ^                                                    |----|</span>
<span class="token builtin class-name">echo</span> <span class="token string">'${var1%%pattern2} ='</span> <span class="token string">"<span class="token variable">${var1<span class="token operator">%%</span>$pattern2}</span>"</span>    <span class="token comment">#     a</span>
<span class="token comment"># 匹配到尾部最长的12个字符                                 abcd12345abc6789</span>
<span class="token comment">#             ^                                           |-------------|</span>

<span class="token comment"># 牢记 # 与 ## 是从字符串左侧开始，</span>
<span class="token comment">#      % 与 %% 是从右侧开始。</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>样例 10-11. 更改文件扩展名：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># rfe.sh: 更改文件扩展名。</span>
<span class="token comment">#</span>
<span class="token comment">#         rfe old_extension new_extension</span>
<span class="token comment">#</span>
<span class="token comment"># 如：</span>
<span class="token comment"># 将当前目录下所有 *.gif 文件重命名为 *.jpg，</span>
<span class="token comment">#         rfe gif jpg</span>


<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">65</span>

<span class="token keyword">case</span> <span class="token variable">$#</span> <span class="token keyword">in</span>
  <span class="token number">0</span><span class="token operator">|</span><span class="token number">1</span><span class="token punctuation">)</span>             <span class="token comment"># 竖线 | 在这里表示逻辑或关系。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Usage: <span class="token variable"><span class="token variable">`</span><span class="token function">basename</span> $0<span class="token variable">`</span></span> old_file_suffix new_file_suffix"</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>  <span class="token comment"># 如果只有0个或1个参数，那么退出脚本。</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>


<span class="token keyword">for</span> <span class="token for-or-select variable">filename</span> <span class="token keyword">in</span> *.<span class="token variable">$1</span>
<span class="token comment"># 遍历以第一个参数作为后缀名的文件列表。</span>
<span class="token keyword">do</span>
  <span class="token function">mv</span> <span class="token variable">$filename</span> <span class="token variable">${filename<span class="token operator">%</span>$1}</span><span class="token variable">$2</span>
  <span class="token comment"># 删除文件后缀名，增加第二个参数作为后缀名。</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="变量扩展-替换子串" tabindex="-1"><a class="header-anchor" href="#变量扩展-替换子串" aria-hidden="true">#</a> 变量扩展 / 替换子串</h3>
<p>下面这些结构采用自 ksh。</p>
<h4 id="var-pos" tabindex="-1"><a class="header-anchor" href="#var-pos" aria-hidden="true">#</a> <code>${var:pos}</code></h4>
<p>扩展为从偏移量 pos 处截取的变量 var。</p>
<h4 id="var-pos-len" tabindex="-1"><a class="header-anchor" href="#var-pos-len" aria-hidden="true">#</a> <code>${var:pos:len}</code></h4>
<p>扩展为从偏移量 pos 处截取变量 var 最大长度为 len 的字符串。</p>
<h4 id="var-pattern-replacement" tabindex="-1"><a class="header-anchor" href="#var-pattern-replacement" aria-hidden="true">#</a> <code>${var/Pattern/Replacement}</code></h4>
<p>替换 var 中第一个匹配到的 Pattern 为 Replacement。</p>
<p>如果 Replacement 被省略，那么匹配到的第一个 Pattern 将被替换为空，即删除。</p>
<h4 id="var-pattern-replacement-1" tabindex="-1"><a class="header-anchor" href="#var-pattern-replacement-1" aria-hidden="true">#</a> <code>${var//Pattern/Replacement}</code></h4>
<p>全局替换。替换 var 中所有匹配到的 Pattern 为 Replacement。</p>
<p>跟上面一样，如果 Replacement 被省略，那么匹配到的所有 Pattern 将被替换为空，即删除。</p>
<p>样例 10-12. 使用模式匹配解析任意字符串</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span>abcd-1234-defg
<span class="token builtin class-name">echo</span> <span class="token string">"var1 = <span class="token variable">$var1</span>"</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${var1<span class="token operator">#</span>*-*}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1 (with everything, up to and including first - stripped out) = <span class="token variable">$t</span>"</span>
<span class="token comment">#  t=${var1#*-} 效果相同，</span>
<span class="token comment">#+ 因为 # 只匹配最短的字符串，</span>
<span class="token comment">#+ 并且 * 可以任意匹配，其中也包括空字符串。</span>
<span class="token comment"># （感谢 Stephane Chazelas 指出这一点。）</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${var<span class="token operator">##</span>*-*}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"If var1 contains a <span class="token entity" title="\&quot;">\"</span>-<span class="token entity" title="\&quot;">\"</span>, returns empty string...   var1 = <span class="token variable">$t</span>"</span>


<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${var1<span class="token operator">%</span>*-*}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"var1 (with everything from the last - on stripped out) = <span class="token variable">$t</span>"</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># -------------------------------------------</span>
<span class="token assign-left variable">path_name</span><span class="token operator">=</span>/home/bozo/ideas/thoughts/for.today
<span class="token comment"># -------------------------------------------</span>
<span class="token builtin class-name">echo</span> <span class="token string">"path_name = <span class="token variable">$path_name</span>"</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${path_name<span class="token operator">##</span><span class="token operator">/</span>*<span class="token operator">/</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"path_name, stripped of prefixes = <span class="token variable">$t</span>"</span>
<span class="token comment"># 在这里与 t=`basename $path_name` 效果相同。</span>
<span class="token comment">#  t=${path_name%/}; t=${t##*/}  是更加通用的方法，</span>
<span class="token comment">#+ 但有时仍旧也会出现问题。</span>
<span class="token comment">#  如果 $path_name 以换行结束，那么 `basename $path_name` 将会失效，</span>
<span class="token comment">#+ 但是上面这种表达式却可以。</span>
<span class="token comment"># （感谢 S.C.）</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${path_name<span class="token operator">%</span><span class="token operator">/</span>*.*}</span>
<span class="token comment"># 同 t=`dirname $path_name` 效果相同。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"path_name, stripped of suffixes = <span class="token variable">$t</span>"</span>
<span class="token comment"># 在一些情况下会失效，比如 "../", "/foo////", # "foo/", "/"。</span>
<span class="token comment">#  在删除后缀时，尤其是当文件名没有后缀，目录名却有后缀时，</span>
<span class="token comment">#+ 事情会变的非常复杂。</span>
<span class="token comment"># （感谢 S.C.）</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${path_name<span class="token operator">:</span>11}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$path_name</span>, with first 11 chars stripped off = <span class="token variable">$t</span>"</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${path_name<span class="token operator">:</span>11<span class="token operator">:</span>5}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$path_name</span>, with first 11 chars stripped off, length 5 = <span class="token variable">$t</span>"</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${path_name<span class="token operator">/</span>bozo<span class="token operator">/</span>clown}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$path_name</span> with <span class="token entity" title="\&quot;">\"</span>bozo<span class="token entity" title="\&quot;">\"</span> replaced by <span class="token entity" title="\&quot;">\"</span>clown<span class="token entity" title="\&quot;">\"</span> = <span class="token variable">$t</span>"</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${path_name<span class="token operator">/</span>today<span class="token operator">/</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$path_name</span> with <span class="token entity" title="\&quot;">\"</span>today<span class="token entity" title="\&quot;">\"</span> deleted = <span class="token variable">$t</span>"</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${path_name<span class="token operator">/</span><span class="token operator">/</span>o<span class="token operator">/</span>O}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$path_name</span> with all o's capitalized = <span class="token variable">$t</span>"</span>
<span class="token assign-left variable">t</span><span class="token operator">=</span><span class="token variable">${path_name<span class="token operator">/</span><span class="token operator">/</span>o<span class="token operator">/</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$path_name</span> with all o's deleted = <span class="token variable">$t</span>"</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h4 id="var-pattern-replacement-2" tabindex="-1"><a class="header-anchor" href="#var-pattern-replacement-2" aria-hidden="true">#</a> <code>${var/#Pattern/Replacement}</code></h4>
<p>替换 var 前缀部分匹配到的 Pattern 为 Replacement。</p>
<h4 id="var-pattern-replacement-3" tabindex="-1"><a class="header-anchor" href="#var-pattern-replacement-3" aria-hidden="true">#</a> <code>${var/%Pattern/Replacement}</code></h4>
<p>替换 var 后缀部分匹配到的 Pattern 为 Replacement。</p>
<p>样例 10-13. 在字符串首部或尾部进行模式匹配</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># var-match.sh:</span>
<span class="token comment"># 演示在字符串首部或尾部进行模式替换。</span>

<span class="token assign-left variable">v0</span><span class="token operator">=</span>abc1234zip1234abc    <span class="token comment"># 初始值。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"v0 = <span class="token variable">$v0</span>"</span>         <span class="token comment"># abc1234zip1234abc</span>
<span class="token builtin class-name">echo</span>

<span class="token comment"># 在字符串首部进行匹配</span>
<span class="token assign-left variable">v1</span><span class="token operator">=</span><span class="token variable">${v0<span class="token operator">/</span><span class="token operator">#</span>abc<span class="token operator">/</span>ABCDEF}</span>    <span class="token comment"># abc1234zip123abc</span>
                        <span class="token comment"># |-|</span>
<span class="token builtin class-name">echo</span> <span class="token string">"v1 = <span class="token variable">$v1</span>"</span>         <span class="token comment"># ABCDEF1234zip1234abc</span>
                        <span class="token comment"># |----|</span>
                        
<span class="token comment"># 在字符串尾部进行匹配</span>
<span class="token assign-left variable">v2</span><span class="token operator">=</span><span class="token variable">${v0<span class="token operator">/</span><span class="token operator">%</span>abc<span class="token operator">/</span>ABCDEF}</span>    <span class="token comment"># abc1234zip123abc</span>
                        <span class="token comment">#              |-|</span>
<span class="token builtin class-name">echo</span> <span class="token string">"v2 = <span class="token variable">$v2</span>"</span>         <span class="token comment"># abc1234zip1234ABCDEF</span>
                        <span class="token comment">#               |----|</span>
                        
<span class="token builtin class-name">echo</span>

<span class="token comment">#  --------------------------------------------</span>
<span class="token comment">#  必须在字符串的最开始或者最末尾的地方进行匹配，</span>
<span class="token comment">#+ 否则将不会发生替换。</span>
<span class="token comment">#  --------------------------------------------</span>
<span class="token assign-left variable">v3</span><span class="token operator">=</span><span class="token variable">${v0<span class="token operator">/</span><span class="token operator">#</span>123<span class="token operator">/</span>000}</span>       <span class="token comment"># 虽然匹配到了，但是不在最开始的地方。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"v3 = <span class="token variable">$v3</span>"</span>         <span class="token comment"># abc1234zip1234abc</span>
                        <span class="token comment"># 没有替换。</span>
<span class="token assign-left variable">v4</span><span class="token operator">=</span><span class="token variable">${v0<span class="token operator">/</span><span class="token operator">%</span>123<span class="token operator">/</span>000}</span>       <span class="token comment"># 虽然匹配到了，但是不在最末尾的地方。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"v4 = <span class="token variable">$v4</span>"</span>         <span class="token comment"># abc1234zip1234abc</span>
                        <span class="token comment"># 没有替换。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h4 id="varprefix-varprefix" tabindex="-1"><a class="header-anchor" href="#varprefix-varprefix" aria-hidden="true">#</a> <code>${!varprefix*}, ${!varprefix@}</code></h4>
<p>匹配先前声明过所有以 varprefix 作为变量名前缀的变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 这是带 * 或 @ 的间接引用的一种变换形式。</span>
<span class="token comment"># 在 Bash 2.04 版本中加入了这个特性。</span>

<span class="token assign-left variable">xyz23</span><span class="token operator">=</span>whatever
<span class="token assign-left variable">xyz23</span><span class="token operator">=</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">${<span class="token operator">!</span>xyz*}</span>         <span class="token comment">#  扩展为声明变量中以 "xyz"</span>
<span class="token comment"># ^ ^   ^           + 开头变量名。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span>"</span>      <span class="token comment">#  a = xyz23 xyz24</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable">${<span class="token operator">!</span>xyz@}</span>         <span class="token comment">#  同上。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span>"</span>      <span class="token comment">#  a = xyz23 xyz24</span>

<span class="token builtin class-name">echo</span> <span class="token string">"---"</span>

<span class="token assign-left variable">abc23</span><span class="token operator">=</span>something_else
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token variable">${<span class="token operator">!</span>abc*}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"b = <span class="token variable">$b</span>"</span>      <span class="token comment">#  b = abc23</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable">${<span class="token operator">!</span>b}</span>            <span class="token comment">#  这是我们熟悉的间接引用的形式。</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$c</span>            <span class="token comment">#  something_else</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>如果在非交互的脚本中，<code>$parameter</code> 为空，那么程序将会终止，并且返回 <a href="http://tldp.org/LDP/abs/html/exitcodes.html#EXITCODESREF" target="_blank" rel="noopener noreferrer">错误码 127<ExternalLinkIcon/></a>（意为“找不到命令”）。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
