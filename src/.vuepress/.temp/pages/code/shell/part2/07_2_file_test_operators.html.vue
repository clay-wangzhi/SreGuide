<template><h1 id="_7-2-文件测试操作" tabindex="-1"><a class="header-anchor" href="#_7-2-文件测试操作" aria-hidden="true">#</a> 7.2 文件测试操作</h1>
<p>下列每一个运算符在满足其下条件时，返回的结果为真。</p>
<h3 id="e" tabindex="-1"><a class="header-anchor" href="#e" aria-hidden="true">#</a> -e</h3>
<p>检测文件是否存在</p>
<h3 id="a" tabindex="-1"><a class="header-anchor" href="#a" aria-hidden="true">#</a> -a</h3>
<p>检测文件是否存在</p>
<p>等价于 <code>-e</code>。不推荐使用，已被弃用<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>。</p>
<h3 id="f" tabindex="-1"><a class="header-anchor" href="#f" aria-hidden="true">#</a> -f</h3>
<p>文件是常规文件(regular file)，而非目录或 <a href="http://tldp.org/LDP/abs/html/devref1.html#DEVFILEREF" target="_blank" rel="noopener noreferrer">设备文件<ExternalLinkIcon/></a></p>
<h3 id="s" tabindex="-1"><a class="header-anchor" href="#s" aria-hidden="true">#</a> -s</h3>
<p>文件大小不为0</p>
<h3 id="d" tabindex="-1"><a class="header-anchor" href="#d" aria-hidden="true">#</a> -d</h3>
<p>文件是一个目录</p>
<h3 id="b" tabindex="-1"><a class="header-anchor" href="#b" aria-hidden="true">#</a> -b</h3>
<p>文件是一个 <a href="http://tldp.org/LDP/abs/html/devref1.html#BLOCKDEVREF" target="_blank" rel="noopener noreferrer">块设备<ExternalLinkIcon/></a></p>
<h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> -c</h3>
<p>文件是一个 <a href="http://tldp.org/LDP/abs/html/devref1.html#CHARDEVREF" target="_blank" rel="noopener noreferrer">字符设备<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">device0</span><span class="token operator">=</span><span class="token string">"/dev/sda2"</span>    <span class="token comment"># /   (根目录)</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -b <span class="token string">"<span class="token variable">$device0</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$device0</span> is a block device."</span>
<span class="token keyword">fi</span>

<span class="token comment"># /dev/sda2 是一个块设备。</span>



<span class="token assign-left variable">device1</span><span class="token operator">=</span><span class="token string">"/dev/ttyS1"</span>   <span class="token comment"># PCMCIA 调制解调卡</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -c <span class="token string">"<span class="token variable">$device1</span>"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$device1</span> is a character device."</span>
<span class="token keyword">fi</span>

<span class="token comment"># /dev/ttyS1 是一个字符设备。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="p" tabindex="-1"><a class="header-anchor" href="#p" aria-hidden="true">#</a> -p</h3>
<p>文件是一个 <a href="http://tldp.org/LDP/abs/html/special-chars.html#PIPEREF" target="_blank" rel="noopener noreferrer">管道设备<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">show_input_type</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token punctuation">[</span> -p /dev/fd/0 <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> PIPE <span class="token operator">||</span> <span class="token builtin class-name">echo</span> STDIN
<span class="token punctuation">}</span>

show_input_type <span class="token string">"Input"</span>                           <span class="token comment"># STDIN</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Input"</span> <span class="token operator">|</span> show_input_type                    <span class="token comment"># PIPE</span>

<span class="token comment"># 这个例子由 Carl Anderson 提供。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="h" tabindex="-1"><a class="header-anchor" href="#h" aria-hidden="true">#</a> -h</h3>
<p>文件是一个 <a href="http://tldp.org/LDP/abs/html/basic.html#SYMLINKREF" target="_blank" rel="noopener noreferrer">符号链接<ExternalLinkIcon/></a></p>
<h3 id="l" tabindex="-1"><a class="header-anchor" href="#l" aria-hidden="true">#</a> -L</h3>
<p>文件是一个符号链接</p>
<h3 id="s-1" tabindex="-1"><a class="header-anchor" href="#s-1" aria-hidden="true">#</a> -S</h3>
<p>文件是一个 <a href="http://tldp.org/LDP/abs/html/devref1.html#SOCKETREF" target="_blank" rel="noopener noreferrer">套接字<ExternalLinkIcon/></a></p>
<h3 id="t" tabindex="-1"><a class="header-anchor" href="#t" aria-hidden="true">#</a> -t</h3>
<p>文件（<a href="http://tldp.org/LDP/abs/html/io-redirection.html#FDREF" target="_blank" rel="noopener noreferrer">文件描述符<ExternalLinkIcon/></a>）与终端设备关联</p>
<p>该选项通常被用于 <a href="http://tldp.org/LDP/abs/html/intandnonint.html#II2TEST" target="_blank" rel="noopener noreferrer">测试<ExternalLinkIcon/></a> 脚本中的 <code>stdin [ -t 0 ]</code> 或 <code>stdout [ -t 1 ]</code> 是否为终端设备。</p>
<h3 id="r" tabindex="-1"><a class="header-anchor" href="#r" aria-hidden="true">#</a> -r</h3>
<p>该文件对执行测试的用户可读</p>
<h3 id="w" tabindex="-1"><a class="header-anchor" href="#w" aria-hidden="true">#</a> -w</h3>
<p>该文件对执行测试的用户可写</p>
<h3 id="x" tabindex="-1"><a class="header-anchor" href="#x" aria-hidden="true">#</a> -x</h3>
<p>该文件可被执行测试的用户所执行</p>
<h3 id="g" tabindex="-1"><a class="header-anchor" href="#g" aria-hidden="true">#</a> -g</h3>
<p>文件或目录设置了 set-group-id <code>sgid</code> 标志</p>
<p>如果一个目录设置了 <code>sgid</code> 标志，那么在该目录中所有的新建文件的权限组都归属于该目录的权限组，而非文件创建者的权限组。该标志对共享文件夹很有用。</p>
<h3 id="u" tabindex="-1"><a class="header-anchor" href="#u" aria-hidden="true">#</a> -u</h3>
<p>文件设置了 set-user-id <code>suid</code> 标志。</p>
<p>一个属于 root 的可执行文件设置了 <code>suid</code> 标志后，即使是一个普通用户执行也拥有 root 权限<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup>。对需要访问硬件设备的可执行文件（例如 <code>pppd</code> 和 <code>cdrecord</code>）很有用。如果没有 <code>suid</code> 标志，这些可执行文件就不能被非 root 用户所调用了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-rwsr-xr-t    1 root       178236 Oct  2  2000 /usr/sbin/pppd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>设置了 <code>suid</code> 标志后，在权限中会显示 <code>s</code>。</p>
<h3 id="k" tabindex="-1"><a class="header-anchor" href="#k" aria-hidden="true">#</a> -k</h3>
<p>设置了粘滞位(sticky bit)。</p>
<p>标志粘滞位是一种特殊的文件权限。如果文件设置了粘滞位，那么该文件将会被存储在高速缓存中以便快速访问<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3" /></sup>。如果目录设置了该标记，那么它将会对目录的写权限进行限制，目录中只有文件的拥有者可以修改或删除文件。设置标记后你可以在权限中看到 <code>t</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>drwxrwxrwt    7 root         1024 May 19 21:26 tmp/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果一个用户不是设置了粘滞位目录的拥有者，但对该目录有写权限，那么他仅仅可以删除目录中他所拥有的文件。这可以防止用户不经意间删除或修改其他人的文件，例如 <code>/tmp</code> 文件夹。（当然目录的所有者可以删除或修改该目录下的所有文件）</p>
<h3 id="o" tabindex="-1"><a class="header-anchor" href="#o" aria-hidden="true">#</a> -O</h3>
<p>执行用户是文件的拥有者</p>
<h3 id="g-1" tabindex="-1"><a class="header-anchor" href="#g-1" aria-hidden="true">#</a> -G</h3>
<p>文件的组与执行用户的组相同</p>
<h3 id="n" tabindex="-1"><a class="header-anchor" href="#n" aria-hidden="true">#</a> -N</h3>
<p>文件在在上次访问后被修改过了</p>
<h3 id="f1-nt-f2" tabindex="-1"><a class="header-anchor" href="#f1-nt-f2" aria-hidden="true">#</a> f1 -nt f2</h3>
<p>文件 f1 比文件 f2 新</p>
<h3 id="f1-ot-f2" tabindex="-1"><a class="header-anchor" href="#f1-ot-f2" aria-hidden="true">#</a> f1 -ot f2</h3>
<p>文件 f1 比文件 f2 旧</p>
<h3 id="f1-ef-f2" tabindex="-1"><a class="header-anchor" href="#f1-ef-f2" aria-hidden="true">#</a> f1 -ef f2</h3>
<p>文件 f1 和文件 f2 硬链接到同一个文件</p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> !</h3>
<p>取反——对测试结果取反(如果条件缺失则返回真)。</p>
<p>样例 7-4. 检测链接是否损坏</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># broken-link.sh</span>
<span class="token comment"># Lee bigelow &lt;ligelowbee@yahoo.com> 编写。</span>
<span class="token comment"># ABS Guide 经许可可以使用。</span>

<span class="token comment">#  该脚本用来发现输出损坏的链接。输出的结果是被引用的，</span>
<span class="token comment">#+ 所以可以直接导到 xargs 中进行处理 ：）</span>
<span class="token comment">#  例如：sh broken-link.sh /somedir /someotherdir|xargs rm</span>
<span class="token comment">#</span>
<span class="token comment">#  更加优雅的方式：</span>
<span class="token comment">#</span>
<span class="token comment">#  find "somedir" -type 1 -print0|\</span>
<span class="token comment">#  xargs -r0 file|\</span>
<span class="token comment">#  grep "broken symbolic"|</span>
<span class="token comment">#  sed -e 's/^\|: *broken symbolic.*$/"/g'</span>
<span class="token comment">#</span>
<span class="token comment">#  但是这种方法不是纯 Bash 写法。</span>
<span class="token comment">#  警告：小心 /proc 文件下的文件和任意循环链接！</span>
<span class="token comment">############################################</span>


<span class="token comment">#  如果不给脚本传任何参数，那么 directories-to-search 设置为当前目录</span>
<span class="token comment">#+ 否则设置为传进的参数</span>
<span class="token comment">#####################</span>

<span class="token punctuation">[</span> <span class="token variable">$#</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">pwd</span><span class="token variable">`</span></span> <span class="token operator">||</span> <span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token variable">$@</span>


<span class="token comment">#  函数 linkchk 是用来检测传入的文件夹中是否包含损坏的链接文件，</span>
<span class="token comment">#+ 并引用输出他们。</span>
<span class="token comment">#  如果文件夹中包含子文件夹，那么将子文件夹继续传给 linkchk 函数进行检测。</span>
<span class="token comment">#################</span>

<span class="token function-name function">linkchk</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">element</span> <span class="token keyword">in</span> <span class="token variable">$1</span>/*<span class="token punctuation">;</span> <span class="token keyword">do</span>
      <span class="token punctuation">[</span> -h <span class="token string">"<span class="token variable">$element</span>"</span> -a <span class="token operator">!</span> -e <span class="token string">"<span class="token variable">$element</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">\</span>"<span class="token variable">$element</span><span class="token punctuation">\</span>"
      <span class="token punctuation">[</span> -d <span class="token string">"<span class="token variable">$element</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> linkchk <span class="token variable">$element</span>
    <span class="token comment"># -h 用来检测是否是链接，-d 用来检测是否是文件夹。</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment">#  检测传递给 linkchk() 函数的参数是否是一个存在的文件夹，</span>
<span class="token comment">#+ 如果不是则报错。</span>
<span class="token comment">################</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">directory</span> <span class="token keyword">in</span> <span class="token variable">$direcotrys</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> -d <span class="token variable">$directory</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span> linkchk <span class="token variable">$directory</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$directory</span> is not a directory"</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"Usage <span class="token variable">$0</span> dir1 dir2 ..."</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p><a href="http://tldp.org/LDP/abs/html/zeros.html#COOKIES" target="_blank" rel="noopener noreferrer">样例 31-1<ExternalLinkIcon/></a>，<a href="http://tldp.org/LDP/abs/html/loops1.html#BINGREP" target="_blank" rel="noopener noreferrer">样例 11-8<ExternalLinkIcon/></a>，<a href="http://tldp.org/LDP/abs/html/loops1.html#FILEINFO" target="_blank" rel="noopener noreferrer">样例 11-3<ExternalLinkIcon/></a>，<a href="http://tldp.org/LDP/abs/html/zeros.html#RAMDISK" target="_blank" rel="noopener noreferrer">样例 31-3<ExternalLinkIcon/></a>和<a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#MAILFORMAT" target="_blank" rel="noopener noreferrer">样例 A-1<ExternalLinkIcon/></a> 也包含了测试运算符的使用。</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>摘自1913年版本的韦氏词典<br><pre>Deprecate<br>...<br><br>To pray against, as an evil;<br>to seek to avert by prayer;<br>to desire the removal of;<br>to seek deliverance from;<br>to express deep regret for;<br>to disapprove of strongly.</pre> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p>注意使用 suid 的可执行文件可能会带来安全问题。suid 标记对 shell 脚本没有影响。 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote3" class="footnote-item"><p>在 Linux 系统中，文件已经不使用粘滞位了, 粘滞位只作用于目录。 <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</template>
