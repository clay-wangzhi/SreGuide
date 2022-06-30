import{_ as t,r as e,c,a as n,b as p,w as r,F as i,e as a,d as s,o as b}from"./app.e53fe3a5.js";const u={},m=a(`<h1 id="_9-1-\u5185\u90E8\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_9-1-\u5185\u90E8\u53D8\u91CF" aria-hidden="true">#</a> 9.1 \u5185\u90E8\u53D8\u91CF</h1><h2 id="\u5185\u5EFA\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5185\u5EFA\u53D8\u91CF" aria-hidden="true">#</a> \u5185\u5EFA\u53D8\u91CF</h2><p>\u5F71\u54CD Bash \u811A\u672C\u884C\u4E3A\u7684\u53D8\u91CF\u3002</p><h3 id="bash" tabindex="-1"><a class="header-anchor" href="#bash" aria-hidden="true">#</a> $BASH</h3><p>Bash\u7A0B\u5E8F\u7684\u8DEF\u5F84\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH</span>
/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="bash-env" tabindex="-1"><a class="header-anchor" href="#bash-env" aria-hidden="true">#</a> $BASH_ENV</h3><p>\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\u4F1A\u6307\u5411\u4E00\u4E2A Bash \u542F\u52A8\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u5728\u811A\u672C\u88AB\u8C03\u7528\u65F6\u4F1A\u88AB\u8BFB\u53D6\u3002</p><h3 id="bash-subshell" tabindex="-1"><a class="header-anchor" href="#bash-subshell" aria-hidden="true">#</a> $BASH_SUBSHELL</h3><p>\u8BE5\u53D8\u91CF\u7528\u4E8E\u63D0\u793A\u6240\u5904\u7684 subshell \u5C42\u7EA7\u3002\u8FD9\u662F\u5728 Bash version 3 \u4E2D\u88AB\u5F15\u5165\u7684\u65B0\u7279\u6027\u3002</p>`,10),k=s("\u5177\u4F53\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003 "),d={href:"http://tldp.org/LDP/abs/html/subshells.html#SUBSHELL",target:"_blank",rel:"noopener noreferrer"},h=s("\u6837\u4F8B21-1"),v=s("\u3002"),g=a(`<h3 id="bashpid" tabindex="-1"><a class="header-anchor" href="#bashpid" aria-hidden="true">#</a> $BASHPID</h3><p>\u5F53\u524D Bash \u8FDB\u7A0B\u5B9E\u4F8B\u7684\u8FDB\u7A0BID\u53F7\u3002\u867D\u7136\u4E0E <code>$$</code> \u53D8\u91CF\u4E0D\u4E00\u6837\uFF0C\u4F46\u662F\u901A\u5E38\u5B83\u4EEC\u4F1A\u7ED9\u51FA\u76F8\u540C\u7684\u7ED3\u679C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash4$ <span class="token builtin class-name">echo</span> <span class="token variable">$$</span>
<span class="token number">11015</span>


bash4$ <span class="token builtin class-name">echo</span> <span class="token variable">$BASHPID</span>
<span class="token number">11015</span>


bash4$ <span class="token function">ps</span> ax <span class="token operator">|</span> <span class="token function">grep</span> bash4
<span class="token number">11015</span> pts/2    R      <span class="token number">0</span>:00 bash4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u7136\u800C...</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash4</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\$\\$ outside of subshell = <span class="token variable">$$</span>&quot;</span>                              <span class="token comment"># 9602</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$BASH_SUBSHELL</span>  outside of subshell = <span class="token variable">$BASH_SUBSHELL</span>&quot;</span>      <span class="token comment"># 0</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$BASHPID</span> outside of subshell = <span class="token variable">$BASHPID</span>&quot;</span>                   <span class="token comment"># 9602</span>

<span class="token builtin class-name">echo</span>

<span class="token punctuation">(</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\$\\$ inside of subshell = <span class="token variable">$$</span>&quot;</span>                             <span class="token comment"># 9602</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$BASH_SUBSHELL</span> inside of subshell = <span class="token variable">$BASH_SUBSHELL</span>&quot;</span>      <span class="token comment"># 1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$BASHPID</span> inside of subshell = <span class="token variable">$BASHPID</span>&quot;</span> <span class="token punctuation">)</span>                <span class="token comment"># 9603</span>
  <span class="token comment">#  \u6CE8\u610F $$ \u603B\u662F\u8FD4\u56DE\u7236\u8FDB\u7A0B\u7684 PID\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="bash-versinfo-n" tabindex="-1"><a class="header-anchor" href="#bash-versinfo-n" aria-hidden="true">#</a> $BASH_VERSINFO[n]</h3><p>\u8FD9\u662F\u4E00\u4E2A6\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u5DF2\u7ECF\u5B89\u88C5\u7684 Bash \u7684\u7248\u672C\u4FE1\u606F\u3002\u8BE5\u53D8\u91CF\u4E0E\u53D8\u91CF <code>$BASH_VERSION</code> \u7C7B\u4F3C\uFF0C\u4F46\u662F\u66F4\u52A0\u8BE6\u7EC6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Bash \u7248\u672C\u4FE1\u606F\uFF1A</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;BASH_VERSINFO[<span class="token variable">$n</span>] = <span class="token variable">\${<span class="token environment constant">BASH_VERSINFO</span><span class="token punctuation">[</span>$n<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># BASH_VERSINFO[0] = 3                      # \u4E3B\u7248\u672C\u53F7</span>
<span class="token comment"># BASH_VERSINFO[1] = 00                     # \u6B21\u7248\u672C\u53F7</span>
<span class="token comment"># BASH_VERSINFO[2] = 14                     # \u8865\u4E01\u53F7</span>
<span class="token comment"># BASH_VERSINFO[3] = 1                      # \u6784\u5EFA\u7248\u672C\u53F7</span>
<span class="token comment"># BASH_VERSINFO[4] = release                # \u53D1\u884C\u72B6\u6001</span>
<span class="token comment"># BASH_VERSINFO[5] = i386-redhat-linux-gnu  # \u67B6\u6784</span>
                                            <span class="token comment"># (\u4E0E $MACHTYPE \u76F8\u540C)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="bash-version" tabindex="-1"><a class="header-anchor" href="#bash-version" aria-hidden="true">#</a> $BASH_VERSION</h3><p>\u5DF2\u7ECF\u5B89\u88C5\u7684 Bash \u7684\u7248\u672C\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH_VERSION</span>
<span class="token number">3.2</span>.25<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>-release
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcsh% <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH_VERSION</span>
<span class="token environment constant">BASH_VERSION</span><span class="token builtin class-name">:</span> Undefined variable.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5229\u7528 <code>$BASH_VERSION</code> \u6765\u5224\u65AD\u8FD0\u884C\u7684\u662F\u54EA\u4E2A shell \u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u53D8\u91CF <code>$SHELL</code> \u5E76\u4E0D\u603B\u662F\u80FD\u591F\u7ED9\u51FA\u6B63\u786E\u7684\u7B54\u6848\u3002</p><h3 id="cdpath" tabindex="-1"><a class="header-anchor" href="#cdpath" aria-hidden="true">#</a> $CDPATH</h3><p>\u53D8\u91CF\u6307\u5B9A <code>cd</code> \u547D\u4EE4\u53EF\u4EE5\u641C\u7D22\u7684\u8DEF\u5F84\uFF0C\u8DEF\u5F84\u4E4B\u95F4\u7528\u5192\u53F7\u8FDB\u884C\u5206\u9694\u3002\u8BE5\u53D8\u91CF\u7684\u529F\u80FD\u7C7B\u4F3C\u4E8E\u6307\u5B9A\u53EF\u6267\u884C\u6587\u4EF6\u641C\u7D22\u8DEF\u5F84\u7684\u53D8\u91CF <code>$PATH</code>\u3002\u53EF\u4EE5\u5728\u672C\u5730\u6587\u4EF6 <code>~/.bashrc</code> \u4E2D\u8BBE\u7F6E\u8BE5\u53D8\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">cd</span> bash-doc
bash: <span class="token builtin class-name">cd</span> <span class="token builtin class-name">:</span> bash-doc: No such <span class="token function">file</span> or directory


bash$ <span class="token assign-left variable">CDPATH</span><span class="token operator">=</span>/usr/share/doc
bash$ <span class="token builtin class-name">cd</span> bash-doc
/usr/share/doc/bash-doc


bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PWD</span>
/usr/share/doc/bash-doc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="dirstack" tabindex="-1"><a class="header-anchor" href="#dirstack" aria-hidden="true">#</a> $DIRSTACK</h3><p>\u6307\u4EE3\u76EE\u5F55\u6808\u4E2D\u9876\u90E8\u7684\u503C<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>\uFF0C\u76EE\u5F55\u6808\u7531\u547D\u4EE4 <code>pushd</code> \u548C <code>popd</code> \u63A7\u5236\u3002</p><p>\u8BE5\u53D8\u91CF\u76F8\u5F53\u4E8E\u547D\u4EE4 <code>dirs</code>\uFF0C\u4F46\u662F <code>dirs</code> \u547D\u4EE4\u4F1A\u663E\u793A\u6574\u4E2A\u76EE\u5F55\u6808\u3002</p><h3 id="editor" tabindex="-1"><a class="header-anchor" href="#editor" aria-hidden="true">#</a> $EDITOR</h3><p>\u811A\u672C\u6240\u8C03\u7528\u7684\u9ED8\u8BA4\u7F16\u8F91\u5668\uFF0C\u901A\u5E38\u662F <code>vi</code> \u6216\u662F <code>emcas</code>\u3002</p><h3 id="euid" tabindex="-1"><a class="header-anchor" href="#euid" aria-hidden="true">#</a> $EUID</h3><p>\u6709\u6548\u7528\u6237ID\u3002</p><p>\u6709\u6548\u7528\u6237ID\uFF08EUID\uFF09\u662F\u6307\u5F53\u524D\u7528\u6237\u6B63\u5728\u4F7F\u7528\u7684\u7528\u6237ID\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>su</code> \u547D\u4EE4\u4FEE\u6539\u3002</p><p>{% hint style=&quot;warning&quot; %}</p><p><code>$EUID</code> \u4E0E <code>$UID</code> \u5E76\u4E0D\u603B\u662F\u76F8\u540C\u7684\u3002</p><p>{% endhint %}</p><h3 id="funcname" tabindex="-1"><a class="header-anchor" href="#funcname" aria-hidden="true">#</a> $FUNCNAME</h3><p>\u5F53\u524D\u8FD0\u884C\u51FD\u6570\u7684\u51FD\u6570\u540D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">xyz23</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$FUNCNAME</span> now executing.&quot;</span>  <span class="token comment"># xyz2 now executing.</span>
<span class="token punctuation">}</span>

xyz23

<span class="token builtin class-name">echo</span> <span class="token string">&quot;FUNCNAME = <span class="token variable">$FUNCNAME</span>&quot;</span>        <span class="token comment"># FUNCNAME =</span>
                                   <span class="token comment"># \u5982\u679C\u5728\u51FD\u6570\u5916\u5219\u4E3A\u7A7A\u503C\u3002 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u53EF\u4EE5\u53C2\u8003 <a href="">\u6837\u4F8B A-50</a>\u3002</p><h3 id="globignore" tabindex="-1"><a class="header-anchor" href="#globignore" aria-hidden="true">#</a> $GLOBIGNORE</h3>`,32),f=s("\u5728"),q=s("\u6587\u4EF6\u5339\u914D"),$=s("\u65F6\u6240\u5FFD\u7565\u7684\u6587\u4EF6\u540D\u6A21\u5F0F\u5217\u8868\u3002"),y=a(`<h3 id="groups" tabindex="-1"><a class="header-anchor" href="#groups" aria-hidden="true">#</a> $GROUPS</h3><p>\u5F53\u524D\u7528\u6237\u6240\u5C5E\u7684\u7528\u6237\u7EC4\u3002</p><p>\u8BE5\u53D8\u91CF\u5B58\u50A8\u4E86\u5F53\u524D\u7528\u6237\u6240\u5F52\u5C5E\u7684\u7528\u6237\u7EC4ID\u5217\u8868\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\u3002\u5185\u5BB9\u4E0E\u8BB0\u5F55\u5728\u6587\u4EF6 <code>/etc/passwd</code> \u548C\u6587\u4EF6 <code>/etc/group</code> \u4E2D\u7684\u4E00\u81F4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root<span class="token comment"># echo $GROUPS</span>
<span class="token number">0</span>


root<span class="token comment"># echo \${GROUPS[1]}</span>
<span class="token number">1</span>


root<span class="token comment"># echo \${GROUPS[5]}</span>
<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> $HOME</h3><p>\u5F53\u524D\u7528\u6237\u7684\u4E3B\u76EE\u5F55\uFF0C\u5176\u503C\u901A\u5E38\u4E3A <code>/home/username</code> \uFF08\u53C2\u8003 <a href="">\u6837\u4F8B 10-7</a>\uFF09\u3002</p><h3 id="homename" tabindex="-1"><a class="header-anchor" href="#homename" aria-hidden="true">#</a> $HOMENAME</h3><p>\u7CFB\u7EDF\u542F\u52A8\u7684\u521D\u59CB\u5316\u811A\u672C\u901A\u8FC7\u547D\u4EE4 <code>hostname</code> \u7ED9\u7CFB\u7EDF\u5206\u914D\u4E3B\u673A\u540D\u3002\u800C\u51FD\u6570 <code>gethostname()</code> \u5219\u662F\u7ED9 Bash \u7684\u5185\u90E8\u53D8\u91CF <code>$HOSTNAME</code> \u8D4B\u503C\u3002\u53EF\u4EE5\u53C2\u8003 <a href="">\u6837\u4F8B 10-7</a>\u3002</p><h3 id="hosttype" tabindex="-1"><a class="header-anchor" href="#hosttype" aria-hidden="true">#</a> $HOSTTYPE</h3><p>\u4E3B\u673A\u7C7B\u578B\u3002</p><p>\u7C7B\u4F3C\u53D8\u91CF <a href=""><code>$MACHTYPE</code></a>\uFF0C\u7528\u4E8E\u8BC6\u522B\u7CFB\u7EDF\u786C\u4EF6\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$HOSTTYPE</span>
i686
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="ifs" tabindex="-1"><a class="header-anchor" href="#ifs" aria-hidden="true">#</a> $IFS</h3><p>\u5185\u90E8\u5B57\u6BB5\u5206\u9694\u7B26\u3002</p><p>\u8BE5\u53D8\u91CF\u51B3\u5B9A\u4E86 Bash \u5728\u89E3\u6790\u5B57\u7B26\u4E32\u65F6\u5982\u4F55\u53BB\u8BC6\u522B <a href="">\u5B57\u6BB5</a> \u6216\u5355\u8BCD\u8FB9\u754C\u3002</p><p><code>$IFS</code> \u7684\u7F3A\u7701\u503C\u662F\u7A7A\u767D\u7B26\uFF08\u7A7A\u683C\uFF0C\u5236\u8868\u7B26\u4EE5\u53CA\u6362\u884C\u7B26\uFF09\uFF0C\u4F46\u5176\u53EF\u4EE5\u88AB\u4FEE\u6539\u3002\u4F8B\u5982\u4F60\u5728\u5904\u7406\u9017\u53F7\u5206\u9694\u7684\u6587\u4EF6\u65F6\u53EF\u4EE5\u5C06\u5176\u8BBE\u7F6E\u4E3A\u9017\u53F7\u3002\u9700\u8981\u6CE8\u610F <a href=""><code>$*</code></a> \u4F7F\u7528\u4FDD\u5B58\u5728 <code>$IFS</code> \u4E2D\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u3002\u53EF\u4EE5\u53C2\u8003 <a href="">\u6837\u4F8B 5-1</a>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token environment constant">$IFS</span>&quot;</span>

<span class="token punctuation">(</span>\u5F53 <span class="token environment constant">$IFS</span> \u8BBE\u7F6E\u4E3A\u7F3A\u7701\u503C\u65F6\uFF0C\u663E\u793A\u7A7A\u884C\u3002<span class="token punctuation">)</span>


bash$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token environment constant">$IFS</span>&quot;</span> <span class="token operator">|</span> <span class="token function">cat</span> -vte
 ^I$
 $
<span class="token punctuation">(</span>\u663E\u793A\u7A7A\u767D\u7B26\uFF1A\u9996\u5148\u662F\u4E00\u4E2A\u7A7A\u683C\uFF0C\u7136\u540E\u662F ^I <span class="token punctuation">[</span>\u6C34\u5E73\u5236\u8868\u7B26<span class="token punctuation">]</span>\uFF0C
 \u7136\u540E\u662F\u6362\u884C\u7B26\uFF0C\u6700\u540E\u5728\u672B\u5C3E\u663E\u793A <span class="token string">&quot;$&quot;</span>\u3002<span class="token punctuation">)</span>


bash$ <span class="token function">bash</span> -c <span class="token string">&#39;set w x y z; IFS=&quot;:-;&quot;; echo &quot;$*&quot;&#39;</span>
w:x:y:z
<span class="token punctuation">(</span>\u4ECE\u5B57\u7B26\u4E32\u4E2D\u89E3\u6790\u547D\u4EE4\uFF0C\u7136\u540E\u5C06\u547D\u4EE4\u53C2\u6570\u5206\u914D\u7ED9\u4F4D\u7F6E\u53C2\u6570\u3002<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u901A\u8FC7\u8BBE\u7F6E <code>$IFS</code> \u6765\u5FFD\u7565\u6587\u4EF6\u8DEF\u5F84\u540D\u4E2D\u7A7A\u683C\u5E26\u6765\u7684\u5F71\u54CD\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">printf</span> <span class="token string">&#39;\\n\\t&#39;</span><span class="token variable">)</span></span>&quot;</span>   <span class="token comment"># \u6309 David Wheeler \u6240\u8FF0\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>{% hint style=&quot;warning&quot; %}</p><p>\u76F8\u6BD4\u4E8E\u5176\u4ED6\u5B57\u7B26\uFF0C\u53D8\u91CF <code>$IFS</code> \u5728\u5904\u7406\u7A7A\u767D\u7B26\u65F6\u6709\u6240\u4E0D\u540C\u3002</p><h4 id="\u6837\u4F8B-9-1-ifs-\u4E0E\u7A7A\u767D\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-1-ifs-\u4E0E\u7A7A\u767D\u7B26" aria-hidden="true">#</a> \u6837\u4F8B 9-1. $IFS \u4E0E\u7A7A\u767D\u7B26</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># ifs.sh</span>


<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token string">&quot;a+b+c&quot;</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token string">&quot;d-e-f&quot;</span>
<span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token string">&quot;g,h,i&quot;</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>+
<span class="token comment"># \u52A0\u53F7\u4F1A\u88AB\u89E3\u6790\u6210\u5206\u9694\u7B26\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>     <span class="token comment"># a b c</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>     <span class="token comment"># d-e-f</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>     <span class="token comment"># g,h,i</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;-&quot;</span>
<span class="token comment"># \u6062\u590D\u5BF9\u52A0\u53F7\u7684\u9ED8\u8BA4\u89E3\u6790\u3002</span>
<span class="token comment"># \u73B0\u5728\u51CF\u53F7\u4F1A\u88AB\u89E3\u6790\u6210\u5206\u9694\u7B26\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>     <span class="token comment"># a+b+c</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>     <span class="token comment"># d e f</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>     <span class="token comment"># g,h,i</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span>
<span class="token comment"># \u73B0\u5728\u9017\u53F7\u4F1A\u88AB\u89E3\u6790\u6210\u5206\u9694\u7B26\u3002</span>
<span class="token comment"># \u6062\u590D\u5BF9\u51CF\u53F7\u7684\u9ED8\u8BA4\u89E3\u6790\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>     <span class="token comment"># a+b+c</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>     <span class="token comment"># d-e-f</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>     <span class="token comment"># g h i</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot; &quot;</span>
<span class="token comment"># \u73B0\u5728\u7A7A\u683C\u4F1A\u88AB\u89E3\u6790\u6210\u5206\u9694\u7B26\u3002</span>
<span class="token comment"># \u9017\u53F7\u6062\u590D\u6210\u9ED8\u8BA4\u89E3\u6790\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>     <span class="token comment"># a+b+c</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var2</span>     <span class="token comment"># d-e-f</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>     <span class="token comment"># g,h,i</span>

<span class="token comment"># ======================================================== #</span>

<span class="token comment"># \u7136\u800C...</span>
<span class="token comment"># $IFS \u5904\u7406\u7A7A\u767D\u7B26\u7684\u65B9\u5F0F\u4E0D\u540C\u5176\u4ED6\u5B57\u7B26\u3002</span>

<span class="token function-name function">output_args_one_per_line</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">for</span> arg
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable">$arg</span>]&quot;</span>
  <span class="token keyword">done</span> <span class="token comment">#  ^    ^   \u4E3A\u4E86\u83B7\u5F97\u66F4\u597D\u7684\u89C6\u89C9\u4F53\u9A8C\uFF0C\u628A\u53C2\u6570\u653E\u5230\u4E86\u62EC\u53F7\u91CC\u3002</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;IFS=<span class="token entity" title="\\&quot;">\\&quot;</span>  <span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-------&quot;</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot; &quot;</span>
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot; a  b c   &quot;</span>
<span class="token comment">#    ^ ^^   ^^^</span>
output_args_one_per_line <span class="token variable">$var</span>  <span class="token comment"># output_args_one_per_line \`echo &quot; a  b c   &quot;\`</span>
<span class="token comment"># [a]</span>
<span class="token comment"># [b]</span>
<span class="token comment"># [c]</span>


<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;IFS=:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----&quot;</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot;:a::b:c:::&quot;</span>               <span class="token comment"># \u4E0E\u4E0A\u9762\u4E00\u6837\u7684\u6A21\u5F0F\uFF0C</span>
<span class="token comment">#    ^ ^^   ^^^                #+ \u4EC5\u4EC5\u662F\u5C06 &quot; &quot; \u66FF\u6362\u6210\u4E86 &quot;:&quot; ...</span>
output_args_one_per_line <span class="token variable">$var</span>
<span class="token comment"># []</span>
<span class="token comment"># [a]</span>
<span class="token comment"># []</span>
<span class="token comment"># [b]</span>
<span class="token comment"># [c]</span>
<span class="token comment"># []</span>
<span class="token comment"># []</span>

<span class="token comment"># \u6CE8\u610F\u90A3\u4E9B\u201C\u7A7A\u7684\u201D\u62EC\u53F7\u3002</span>
<span class="token comment"># \u540C\u6837\u7684\u60C5\u51B5\u4E5F\u4F1A\u51FA\u73B0\u5728 awk \u547D\u4EE4\u6240\u4F7F\u7528\u7684 &quot;FS&quot; \u5B57\u6BB5\u5206\u9694\u7B26\u4E2D\u3002</span>


<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><p>{% endhint %}</p><p>\uFF08\u975E\u5E38\u611F\u8C22 St\xE9phane Chazelas \u63D0\u4F9B\u4E86\u4E0A\u9762\u7684\u6837\u4F8B\u5E76\u505A\u51FA\u7684\u8BE6\u7EC6\u8BF4\u660E\u3002\uFF09</p><p>\u4E5F\u53EF\u4EE5\u53C2\u8003 <a href="">\u6837\u4F8B 16-41</a>\uFF0C<a href="">\u6837\u4F8B 11-8</a> \u548C <a href="">\u6837\u4F8B19-14</a>\uFF0C\u83B7\u53D6\u66F4\u591A\u4F7F\u7528 <code>$IFS</code> \u7684\u6280\u5DE7\u3002</p><h3 id="ignoreeof" tabindex="-1"><a class="header-anchor" href="#ignoreeof" aria-hidden="true">#</a> $IGNOREEOF</h3><p>\u5FFD\u7565 EOF\uFF1A\u7528\u4E8E\u6307\u793A Shell \u5728\u6CE8\u9500\u524D\u9700\u8981\u5FFD\u7565\u591A\u5C11\u4E2A\u6587\u4EF6\u7ED3\u675F\u7B26(EOF\uFF0Ccontrl-D)\u3002</p><h3 id="lc-collate" tabindex="-1"><a class="header-anchor" href="#lc-collate" aria-hidden="true">#</a> $LC_COLLATE</h3><p>\u7ECF\u5E38\u4F1A\u5728\u6587\u4EF6 <a href=""><code>.bashrc</code></a> \u6216\u662F\u6587\u4EF6 <code>/etc/profile</code> \u4E2D\u88AB\u8BBE\u7F6E\u3002\u8BE5\u53D8\u91CF\u63A7\u5236\u6587\u4EF6\u540D\u6269\u5C55\u548C\u6A21\u5F0F\u5339\u914D\u4E2D\u7684\u6392\u5E8F\u987A\u5E8F\u3002\u5982\u679C\u8BBE\u7F6E\u4E0D\u5F97\u5F53\uFF0C<code>LC_COLLATE</code> \u5C06\u4F1A\u5BFC\u81F4 <a href="">\u6587\u4EF6\u540D\u5339\u914D</a> \u4E2D\u51FA\u73B0\u975E\u9884\u671F\u7ED3\u679C\u3002</p><p>{% hint style=&quot;info&quot; %}</p><p>\u5728 Bash 2.05 \u7248\u672C\u4E4B\u540E\uFF0C\u6587\u4EF6\u540D\u5339\u914D\u5728\u4E0D\u518D\u533A\u5206\u4E2D\u62EC\u53F7\u4E2D\u5B57\u6BCD\u7684\u5927\u5C0F\u5199\u3002\u4F8B\u5982 <code>ls [A-M]*</code> \u5C06\u4F1A\u540C\u65F6\u5339\u914D <code>File1.txt</code> \u548C <code>file1.txt</code> \u4E24\u4E2A\u6587\u4EF6\u3002\u5982\u679C\u60F3\u8981\u6062\u590D\u6210\u4E4B\u524D\u7684\u6A21\u5F0F\uFF0C\u5219\u9700\u8981\u5728\u6587\u4EF6 <code>/etc/profile</code> \u6216\u6587\u4EF6 <code>~/.bashrc</code> \u4E2D\u901A\u8FC7\u8BED\u53E5 <code>export LC_COLLATE=C</code> \u8BBE\u7F6E <code>LC_COLLATE</code> \u7684\u503C\u4E3A <code>C</code>\u3002</p><p>{% endhint %}</p><h3 id="lc-ctype" tabindex="-1"><a class="header-anchor" href="#lc-ctype" aria-hidden="true">#</a> $LC_CTYPE</h3><p>\u8FD9\u4E2A\u5185\u90E8\u53D8\u91CF\u63A7\u5236\u5728 <a href="">\u6587\u4EF6\u5339\u914D</a> \u548C\u6A21\u5F0F\u5339\u914D\u4E2D\u7684\u5B57\u7B26\u89E3\u6790\u884C\u4E3A\u3002</p><h3 id="lineno" tabindex="-1"><a class="header-anchor" href="#lineno" aria-hidden="true">#</a> $LINENO</h3><p>\u8BE5\u53D8\u91CF\u8BB0\u5F55\u4E86\u5176\u5728\u811A\u672C\u4E2D\u88AB\u4F7F\u7528\u65F6\u6240\u5904\u884C\u7684\u884C\u53F7\u3002\u8BE5\u53D8\u91CF\u53EA\u6709\u5728\u88AB\u4F7F\u7528\u65F6\u624D\u6709\u610F\u4E49\uFF0C\u5728\u8C03\u8BD5\u8FC7\u7A0B\u4E2D\u975E\u5E38\u6709\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># *** \u8C03\u8BD5\u90E8\u5206\u8D77\u59CB ***</span>
<span class="token assign-left variable">last_cmd_arg</span><span class="token operator">=</span><span class="token variable">$_</span>  <span class="token comment"># \u4FDD\u5B58\u6700\u540E\u7684\u547D\u4EE4\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;At line number <span class="token variable">$LINENO</span>, variable <span class="token entity" title="\\&quot;">\\&quot;</span>v1<span class="token entity" title="\\&quot;">\\&quot;</span> = <span class="token variable">$v1</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Last command argument processed = <span class="token variable">$last_cmd_arg</span>&quot;</span>
<span class="token comment"># *** \u8C03\u8BD5\u90E8\u5206\u7EC8\u6B62 ***</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="machtype" tabindex="-1"><a class="header-anchor" href="#machtype" aria-hidden="true">#</a> $MACHTYPE</h3><p>\u8BBE\u5907\u7C7B\u578B\u3002</p><p>\u8BC6\u522B\u7CFB\u7EDF\u786C\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$MACHTYPE</span>
i686
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="oldpwd" tabindex="-1"><a class="header-anchor" href="#oldpwd" aria-hidden="true">#</a> $OLDPWD</h3><p>\u4E0A\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55(OLD-Print-Working-Directory)\uFF0C\u4E5F\u5C31\u662F\u4E4B\u524D\u6240\u5728\u7684\u76EE\u5F55\u3002</p><h3 id="ostype" tabindex="-1"><a class="header-anchor" href="#ostype" aria-hidden="true">#</a> $OSTYPE</h3><p>\u64CD\u4F5C\u7CFB\u7EDF\u7C7B\u578B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$OSTYPE</span>
linux
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> $PATH</h3><p>\u53EF\u6267\u884C\u6587\u4EF6\u641C\u7D22\u8DEF\u5F84\uFF0C\u5176\u503C\u901A\u5E38\u5305\u542B <code>/usr/bin</code>\uFF0C<code>/usr/X11R6/bin/</code>\uFF0C<code>/usr/local/bin</code> \u7B49\u8DEF\u5F84\u3002</p><p>\u7ED9\u5B9A\u4E00\u4E2A\u547D\u4EE4\uFF0Cshell\u5C31\u4F1A\u81EA\u52A8\u4ECE\u641C\u7D22\u8DEF\u5F84\u5305\u542B\u7684\u76EE\u5F55\u4E2D\u5229\u7528\u54C8\u5E0C\u8868\u641C\u7D22\u8BE5\u53EF\u6267\u884C\u547D\u4EE4\u3002\u800C\u641C\u7D22\u8DEF\u5F84\u5C31\u4FDD\u5B58\u5728 <a href="">\u73AF\u5883\u53D8\u91CF</a> <code>$PATH</code> \u4E2D\uFF0C\u5176\u4E2D\u5305\u542B\u7684\u4E00\u7CFB\u5217\u76EE\u5F55\u5219\u901A\u8FC7\u5192\u53F7\u8FDB\u884C\u5206\u9694\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C<code>$PATH</code> \u4F1A\u5B9A\u4E49\u5728\u6587\u4EF6 <code>/etc/profile</code> \u6216\u6587\u4EF6 <a href=""><code>~/.bashrc</code></a> \u4E2D\uFF08\u53C2\u8003 <a href="">\u9644\u5F55 H</a>\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
/bin:/usr/bin:/usr/local/bin/:/usr/X11R6/bin:/sbin:/usr/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>PATH=\${PATH}:/opt/bin</code> \u8868\u793A\u6DFB\u52A0\u76EE\u5F55 <code>/opt/bin</code> \u5230\u5F53\u524D\u7684\u641C\u7D22\u8DEF\u5F84\u4E2D\u3002\u5728\u811A\u672C\u4E2D\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u4E34\u65F6\u6DFB\u52A0\u76EE\u5F55\u5230\u641C\u7D22\u8DEF\u5F84\u3002\u800C\u5F53\u811A\u672C\u7ED3\u675F\u65F6\uFF0C<code>$PATH</code> \u5C31\u4F1A\u6062\u590D\u5230\u539F\u59CB\u503C\uFF08\u7C7B\u4F3C\u4E8E\u811A\u672C\u8FD9\u6837\u7684\u5B50\u8FDB\u7A0B\u6240\u4F5C\u51FA\u7684\u4FEE\u6539\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u4F8B\u5982 shell \u8FD9\u6837\u7684\u7236\u8FDB\u7A0B\u7684\u73AF\u5883\uFF09\u3002</p><p>{% hint style=&quot;info&quot; %}</p><p>\u57FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u901A\u5E38\u5728 <code>$PATH</code> \u4E2D\u4F1A\u7701\u7565\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55 <code>./</code>\u3002</p><p>{% endhint %}</p><h3 id="pipestatus" tabindex="-1"><a class="header-anchor" href="#pipestatus" aria-hidden="true">#</a> $PIPESTATUS</h3><p>\u8BE5 <a href="">\u6570\u7EC4</a> \u53D8\u91CF\u4FDD\u5B58\u4E86\u6700\u540E\u8FD0\u884C\u7684\u524D\u53F0 <a href="">\u7BA1\u9053</a> \u7684 <a href="">\u9000\u51FA\u72B6\u6001(es)</a>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PIPESTATUS</span>
<span class="token number">0</span>

bash$ <span class="token function">ls</span> -al <span class="token operator">|</span> bogus_command
bash: bogus_command: <span class="token builtin class-name">command</span> not found
bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>
<span class="token number">127</span>

bash$ <span class="token function">ls</span> -al <span class="token operator">|</span> bogus_command
bash: bogus_command: <span class="token builtin class-name">command</span> not found
bash$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">127</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>$PIPESTATUS</code> \u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u90FD\u4EE3\u8868\u4E86\u8BE5\u7BA1\u9053\u4E2D\u76F8\u5BF9\u5E94\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001\u3002<code>$PIPESTATUS[0]</code> \u8868\u793A\u7BA1\u9053\u4E2D\u7B2C\u4E00\u4E2A\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001\uFF0C<code>$PIPESTATUS[1]</code> \u8868\u793A\u7B2C\u4E8C\u4E2A\u547D\u4EE4\u7684\u9000\u51FA\u72B6\u6001\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>{% hint style=&quot;warning&quot; %}</p><p>\u5728Bash 3.0 \u4EE5\u4E0B\u7248\u672C\u7684\u767B\u5F55shell\u4E2D\uFF0C\u53D8\u91CF <code>$PIPESTATUS</code> \u53EF\u80FD\u4F1A\u5305\u542B\u4E00\u4E2A\u4E0D\u6B63\u786E\u7684 0 \u503C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcsh% <span class="token function">bash</span>

bash$ <span class="token function">who</span> <span class="token operator">|</span> <span class="token function">grep</span> nobody <span class="token operator">|</span> <span class="token function">sort</span>
bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u811A\u672C\u5305\u542B\u4E86\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u5E94\u8BE5\u5F97\u5230\u671F\u671B\u7684\u8F93\u51FA\u662F 0 1 0\u3002</p><p>\u611F\u8C22 Wayne Pollock \u6307\u51FA\u4E86\u8FD9\u4E2A\u95EE\u9898\u5E76\u63D0\u4F9B\u4E86\u4E0A\u8FF0\u7684\u6837\u4F8B\u3002</p><p>{% endhint %}</p><p>{% hint style=&quot;info&quot; %}</p><p>\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C<code>$PIPESTATUS</code> \u53D8\u91CF\u5C06\u4F1A\u4EA7\u751F\u975E\u9884\u671F\u7ED3\u679C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH_VERSION</span>
<span class="token number">3.00</span>.14<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>-release

bash$ <span class="token function">ls</span> <span class="token operator">|</span> bogus_command <span class="token operator">|</span> <span class="token function">wc</span>
bash: bogus_command: <span class="token builtin class-name">command</span> not found
 <span class="token number">0</span>       <span class="token number">0</span>       <span class="token number">0</span>

bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">141</span> <span class="token number">127</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Chet Ramey \u628A\u4E0A\u8FF0\u975E\u9884\u671F\u7ED3\u679C\u7684\u539F\u56E0\u5F52\u548E\u4E8E <a href=""><code>ls</code></a> \u547D\u4EE4\u7684\u884C\u4E3A\u3002\u5982\u679C <code>ls</code> \u5C06\u7ED3\u679C\u8F93\u51FA\u5230\u6CA1\u6709\u88AB\u8BFB\u53D6\u7684\u7BA1\u9053\u4E0A\uFF0C\u4EA7\u751F\u7684 SIGPIPE \u4FE1\u53F7\u5C06\u4F1A\u7EC8\u6B62 <code>ls</code> \u547D\u4EE4\uFF0C\u540C\u65F6\u5176 <a href="">\u9000\u51FA\u72B6\u6001</a> \u4ECE\u671F\u671B\u7684 0 \u53D8\u4E3A 141\u3002\u800C\u540C\u6837\u7684\u60C5\u51B5\u4E5F\u4F1A\u53D1\u751F\u5728\u547D\u4EE4 <code>tr</code> \u4E2D\u3002</p><p>{% endhint %}</p><p>{% hint style=&quot;info&quot; %}</p><p><code>$PIPESTATUS</code> \u662F\u4E00\u4E2A\u6613\u5931\u7684\u53D8\u91CF\u3002\u8BE5\u53D8\u91CF\u9700\u8981\u5728\u76EE\u6807\u7BA1\u9053\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4E14\u5176\u4ED6\u4EFB\u4F55\u547D\u4EE4\u6267\u884C\u4E4B\u524D\u53BB\u6355\u83B7\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token function">ls</span> <span class="token operator">|</span> bogus_command <span class="token operator">|</span> <span class="token function">wc</span>
bash: bogus_command: <span class="token builtin class-name">command</span> not found
 <span class="token number">0</span>       <span class="token number">0</span>                <span class="token number">0</span>

bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">0</span> <span class="token number">127</span> <span class="token number">0</span>

bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">PIPESTATUS</span><span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>{% endhint %}</p><p>{% hint style=&quot;info&quot; %}</p><p>\u5728 <code>$PIPESTATUS</code> \u4E0D\u80FD\u7ED9\u51FA\u6240\u671F\u671B\u7684\u4FE1\u606F\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528 <a href="">pipeline \u9009\u9879</a> \u53EF\u80FD\u4F1A\u6709\u5E2E\u52A9\u3002</p><p>{% endhint %}</p><h3 id="ppid" tabindex="-1"><a class="header-anchor" href="#ppid" aria-hidden="true">#</a> $PPID</h3><p>\u4E00\u4E2A\u8FDB\u7A0B\u7684 <code>$PPID</code> \u5373\u8BE5\u8FDB\u7A0B\u7684\u7236\u8FDB\u7A0B\u7684\u8FDB\u7A0BID(pid)\u3002<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>\u53EF\u4EE5\u4E0E\u547D\u4EE4 <a href=""><code>pidof</code></a> \u8FDB\u884C\u6BD4\u8F83\u3002</p><h3 id="prompt-command" tabindex="-1"><a class="header-anchor" href="#prompt-command" aria-hidden="true">#</a> $PROMPT_COMMAND</h3><p>\u8BE5\u53D8\u91CF\u5B58\u50A8\u5728\u4E3B\u63D0\u793A\u7B26 <code>$PS1</code> \u663E\u793A\u4E4B\u524D\u6240\u9700\u8981\u6267\u884C\u7684\u547D\u4EE4\u3002</p><h3 id="ps1" tabindex="-1"><a class="header-anchor" href="#ps1" aria-hidden="true">#</a> $PS1</h3><p>\u4E3B\u63D0\u793A\u7B26\uFF0C\u5373\u5728\u547D\u4EE4\u884C\u4E2D\u663E\u793A\u7684\u63D0\u793A\u7B26\u3002</p><h3 id="ps2" tabindex="-1"><a class="header-anchor" href="#ps2" aria-hidden="true">#</a> $PS2</h3><p>\u6B21\u8981\u63D0\u793A\u7B26\uFF0C\u5F53\u9700\u8981\u989D\u5916\u8F93\u5165\u65F6\u51FA\u73B0\u7684\u63D0\u793A\u7B26\u3002\u9ED8\u8BA4\u663E\u793A\u4E3A <code>&gt;</code>\u3002</p><h3 id="ps3" tabindex="-1"><a class="header-anchor" href="#ps3" aria-hidden="true">#</a> $PS3</h3><p>\u4E09\u7EA7\u63D0\u793A\u7B26\uFF0C\u663E\u793A\u5728 <code>select</code> \u5FAA\u73AF\u4E2D\uFF08\u53C2\u8003 <a href="">\u6837\u4F8B 11-30</a>\uFF09\u3002</p><h3 id="ps4" tabindex="-1"><a class="header-anchor" href="#ps4" aria-hidden="true">#</a> $PS4</h3><p>\u56DB\u7EA7\u63D0\u793A\u7B26\uFF0C\u5F53\u4F7F\u7528 <code>-x [verbose trace]</code> <a href="">\u9009\u9879</a> \u8C03\u7528\u811A\u672C\u65F6\u663E\u793A\u7684\u63D0\u793A\u7B26\u3002\u9ED8\u8BA4\u663E\u793A\u4E3A <code>+</code>\u3002</p><p>\u5176\u53EF\u4EE5\u4F5C\u4E3A\u8C03\u8BD5\u7684\u8F85\u52A9\u624B\u6BB5\uFF0C\u628A\u4E00\u4E9B\u8BCA\u65AD\u4FE1\u606F\u663E\u793A\u5728 <code>$PS4</code> \u4E2D\u53EF\u80FD\u4F1A\u6709\u5E2E\u52A9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PS4</span></span><span class="token operator">=</span><span class="token string">&#39;$(read time junk &lt; /proc/$$/schedstat; echo &quot;@@@ $time @@@ &quot; )&#39;</span>
<span class="token comment"># \u6839\u636E Erik Brandsberg \u63D0\u4F9B\u7684\u5EFA\u8BAE\u3002</span>
<span class="token builtin class-name">set</span> -x
<span class="token comment"># \u53EF\u4EE5\u5728\u540E\u9762\u5199\u5404\u79CD\u547D\u4EE4...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="pwd" tabindex="-1"><a class="header-anchor" href="#pwd" aria-hidden="true">#</a> $PWD</h3><p>\u5DE5\u4F5C\u76EE\u5F55\uFF08\u4F60\u5F53\u524D\u6240\u5728\u7684\u76EE\u5F55\uFF09\u3002</p><p>\u8BE5\u53D8\u91CF\u662F\u5185\u5EFA\u547D\u4EE4 <a href=""><code>pwd</code></a> \u7684\u7FFB\u7248\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">E_WRONG_DIRECTORY</span><span class="token operator">=</span><span class="token number">85</span>

<span class="token function">clear</span> <span class="token comment"># \u6E05\u7A7A\u5C4F\u5E55\u3002</span>

<span class="token assign-left variable">TargetDirectory</span><span class="token operator">=</span>/home/bozo/projects/GreatAmericanNovel

<span class="token builtin class-name">cd</span> <span class="token variable">$TargetDirectory</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Deleting stale files in <span class="token variable">$TargetDirectory</span>.&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$PWD</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;<span class="token variable">$TargetDirectory</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>    <span class="token comment"># \u5C0F\u5FC3\u4E0D\u8981\u5076\u7136\u6E05\u7A7A\u4E86\u9519\u8BEF\u7684\u76EE\u5F55\u3002</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Wrong directory!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;In <span class="token environment constant">$PWD</span>, rather than <span class="token variable">$TargetDirectory</span>!&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Bailing out!&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_WRONG_DIRECTORY</span>
<span class="token keyword">fi</span>

<span class="token function">rm</span> -rf *
<span class="token function">rm</span> .<span class="token punctuation">[</span>A-Za-z0-9<span class="token punctuation">]</span>*    <span class="token comment"># \u5220\u9664\u9690\u85CF\u6587\u4EF6\u3002</span>
<span class="token comment"># rm -f .[^.]* ..?*   \u5220\u9664\u90A3\u4E9B\u4EE5\u591A\u4E2A\u70B9\u5F00\u5934\u7684\u6587\u4EF6\u3002</span>
<span class="token comment"># (shopt -s dotglob; rm -f *)   \u8FD9\u6837\u5199\u4E5F\u53EF\u4EE5\u3002</span>
<span class="token comment"># \u611F\u8C22 S.C. \u63D0\u51FA\u8FD9\u70B9\u3002</span>

<span class="token comment">#  \u6587\u4EF6\u540D\u53EF\u4EE5\u5305\u542BASCII\u7801\u4E2D\u8303\u56F4\u4E3A 0-255 \u7684\u6240\u6709\u5B57\u7B26\uFF0C</span>
<span class="token comment">#+ \u9664\u4E86\u5B57\u7B26 &quot;/&quot;\u3002</span>
<span class="token comment">#  \u5220\u9664\u4EE5\u4E00\u4E9B\u7279\u6B8A\u5B57\u7B26\u5F00\u5934\u7684\u6587\u4EF6\uFF0C\u4F8B\u5982 -</span>
<span class="token comment">#+ \u7559\u4F5C\u7EC3\u4E60\u3002\uFF08\u63D0\u793A\uFF1A rm ./-weirdname \u6216\u8005 rm -- -weirdname\uFF09</span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable">$?</span>   <span class="token comment"># \u5220\u9664\u64CD\u4F5C\u7684\u7ED3\u679C\u3002\u5982\u679C\u5220\u9664\u6210\u529F\uFF0C\u503C\u4E3A0\u3002</span>

<span class="token builtin class-name">echo</span>
<span class="token function">ls</span> -al              <span class="token comment"># \u662F\u4E0D\u662F\u8FD8\u6709\u5269\u4F59\u6CA1\u6709\u5220\u9664\u7684\u6587\u4EF6\uFF1F</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Done.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Old files deleted in <span class="token variable">$TargetDirectory</span>.&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token comment"># \u5982\u679C\u6709\u5176\u4ED6\u9700\u8981\uFF0C\u5728\u8FD9\u91CC\u5B8C\u6210\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$result</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="reply" tabindex="-1"><a class="header-anchor" href="#reply" aria-hidden="true">#</a> $REPLY</h3><p>\u5F53\u6CA1\u6709\u7ED9 <a href=""><code>read</code></a> \u547D\u4EE4\u63D0\u4F9B\u63A5\u6536\u53C2\u6570\u65F6\u7684\u9ED8\u8BA4\u63A5\u6536\u53C2\u6570\u3002\u8BE5\u53D8\u91CF\u540C\u6837\u9002\u7528\u4E8E <a href=""><code>select</code></a> \u83DC\u5355\u63A5\u6536\u7528\u6237\u8F93\u5165\u503C\u7684\u573A\u666F\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7528\u6237\u53EA\u9700\u8981\u8F93\u5165\u83DC\u5355\u9879\u7684\u7F16\u53F7\uFF0C\u800C\u4E0D\u9700\u8981\u8F93\u5165\u5B8C\u6574\u7684\u83DC\u5355\u9879\u5185\u5BB9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># reply.sh</span>

<span class="token comment"># REPLY \u662F &#39;read&#39; \u547D\u4EE4\u7684\u9ED8\u8BA4\u63A5\u6536\u53C2\u6570\u3002</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;What is your favorite vegetable? &quot;</span>
<span class="token builtin class-name">read</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite vegetable is <span class="token environment constant">$REPLY</span>.&quot;</span>
<span class="token comment">#  \u5F53\u4E14\u4EC5\u5F53 &#39;read&#39; \u547D\u4EE4\u6CA1\u6709\u63A5\u6536\u53C2\u6570\u7684\u65F6\u5019\uFF0C</span>
<span class="token comment">#+ REPLY \u624D\u80FD\u4FDD\u5B58\u6700\u8FD1\u4E00\u6B21 &#39;read&#39; \u547D\u4EE4\u63A5\u6536\u7684\u503C\u3002</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;What is your favorite fruit? &quot;</span>
<span class="token builtin class-name">read</span> fruit
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite fruit is <span class="token variable">$fruit</span>.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;but...&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Value of \\<span class="token environment constant">$REPLY</span> is still <span class="token environment constant">$REPLY</span>.&quot;</span>
<span class="token comment">#  \u56E0\u4E3A\u53D8\u91CF $fruit \u63A5\u6536\u4E86\u65B0\u4E00\u6B21 &quot;read&quot; \u547D\u4EE4\u6240\u8BFB\u5165\u7684\u503C\uFF0C</span>
<span class="token comment">#+ \u6240\u4EE5 $REPLY \u4ECD\u65E7\u5B58\u50A8\u7684\u662F\u4E0A\u4E00\u6B21\u63A5\u6536\u7684\u503C\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="seconds" tabindex="-1"><a class="header-anchor" href="#seconds" aria-hidden="true">#</a> $SECONDS</h3><p>\u8BE5\u53D8\u91CF\u8BB0\u5F55\u5230\u76EE\u524D\u4E3A\u6B62\u811A\u672C\u6267\u884C\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">TIME_LIMIT</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">INTERVAL</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hit Control-C to exit before <span class="token variable">$TIME_LIMIT</span> seconds.&quot;</span>
<span class="token builtin class-name">echo</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$SECONDS</span>&quot;</span> -le <span class="token string">&quot;<span class="token variable">$TIME_LIMIT</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>   <span class="token comment">#   $SECONDS \u662F\u4E00\u4E2A shell \u7684\u5185\u90E8\u53D8\u91CF\u3002</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$SECONDS</span>&quot;</span> -eq <span class="token number">1</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token assign-left variable">units</span><span class="token operator">=</span>second
  <span class="token keyword">else</span>
    <span class="token assign-left variable">units</span><span class="token operator">=</span>seconds
  <span class="token keyword">fi</span>
  
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;This script has been running <span class="token environment constant">$SECONDS</span> <span class="token variable">$units</span>.&quot;</span>
  <span class="token comment">#  \u5728\u4E00\u53F0\u6027\u80FD\u8F83\u5DEE\u6216\u8D1F\u8F7D\u8FC7\u91CD\u7684\u8BBE\u5907\u4E0A\uFF0C</span>
  <span class="token comment">#+ \u8FD9\u4E2A\u811A\u672C\u53EF\u80FD\u4F1A\u5076\u5C14\u8DF3\u8FC7\u51E0\u4E2A\u8BA1\u6570\u3002</span>
  <span class="token function">sleep</span> <span class="token variable">$INTERVAL</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\a">\\a</span>&quot;</span>  <span class="token comment"># \u53D1\u51FA\u8702\u9E23\u58F0\uFF01</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="shellopts" tabindex="-1"><a class="header-anchor" href="#shellopts" aria-hidden="true">#</a> $SHELLOPTS</h3><p>\u8BE5\u53EA\u8BFB\u53D8\u91CF\u8BB0\u5F55\u4E86 shell \u4E2D\u5DF2\u542F\u7528\u7684 <a href="">\u9009\u9879</a> \u5217\u8868\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELLOPTS</span>
braceexpand:hashall:histexpand:monitor:history:interactive-comments:emacs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="shlvl" tabindex="-1"><a class="header-anchor" href="#shlvl" aria-hidden="true">#</a> $SHLVL</h3><p>\u5F53\u524D shell \u7684\u5C42\u7EA7\uFF0C\u5373\u5D4C\u5957\u4E86\u591A\u5C11\u5C42 Bash <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup>\u3002\u5982\u679C\u547D\u4EE4\u884C\u7684\u5C42\u7EA7 <code>$SHLVL</code> \u4E3A 1\uFF0C\u90A3\u4E48\u5728\u5176\u4E2D\u6267\u884C\u7684\u811A\u672C\u5C42\u7EA7\u5219\u589E\u52A0\u5230 2\u3002</p><p>{% hint style=&quot;info&quot; %}</p><p>\u8BE5\u53D8\u91CF <a href="">\u4E0D\u53D7 subshell \u5F71\u54CD</a>\u3002\u5F53\u4F60\u9700\u8981\u6307\u51FA\u5D4C\u5957\u4E86\u591A\u5C11\u5C42 subshell \u65F6\uFF0C\u9700\u8981\u4F7F\u7528\u53D8\u91CF <a href="#$BASH_SUBSHELL"><code>$BASH_SUBSHELL</code></a>\u3002</p><p>{% endhint %}</p><h3 id="tmout" tabindex="-1"><a class="header-anchor" href="#tmout" aria-hidden="true">#</a> $TMOUT</h3><p>\u5982\u679C <code>$TMOUT</code> \u88AB\u8BBE\u4E3A\u975E 0 \u503C <code>time</code>\uFF0C\u90A3\u4E48 shell \u4F1A\u5728 <code>$time</code> \u79D2\u540E\u8D85\u65F6\uFF0C\u7136\u540E\u5BFC\u81F4 shell \u767B\u51FA\u3002</p><p>\u5728 Bash 2.05b \u7248\u672C\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u811A\u672C\u4E2D\u5C06 <code>read</code> \u547D\u4EE4\u4E0E <code>$TMOUT</code> \u53D8\u91CF\u8FDB\u884C\u7ED3\u5408\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u53EA\u80FD\u5728 Bash 2.05b \u53CA\u4E4B\u540E\u7684\u7248\u672C\u4E2D\u6210\u529F\u6267\u884C\u3002</span>

<span class="token assign-left variable">TMOUT</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token comment"># \u63D0\u793A\u4F1A\u5728 3 \u79D2\u540E\u8D85\u65F6\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;What is your favorite song?&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Quickly now, you only have <span class="token variable">$TMOUT</span> seconds to answer!&quot;</span>
<span class="token builtin class-name">read</span> song

<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$song</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token assign-left variable">song</span><span class="token operator">=</span><span class="token string">&quot;(no answer)&quot;</span>
  <span class="token comment"># \u9ED8\u8BA4\u503C\u3002</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite song is <span class="token variable">$song</span>.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5728\u811A\u672C\u4E2D\uFF0C\u540C\u6837\u4E5F\u5B58\u5728\u5176\u4ED6\u4E00\u4E9B\u5B9E\u73B0\u8D85\u65F6\u529F\u80FD\u7684\u66F4\u590D\u6742\u7684\u65B9\u6CD5\u3002\u5176\u4E2D\u4E00\u4E2A\u65B9\u6CD5\u662F\u8BBE\u7F6E\u4E00\u4E2A\u5FAA\u73AF\u7684\u8BA1\u65F6\u5668\uFF0C\u5F53\u811A\u672C\u8D85\u65F6\u7684\u65F6\u5019\uFF0C\u8BA1\u65F6\u5668\u4F1A\u7ED9\u811A\u672C\u53D1\u9001\u4E00\u4E2A\u4FE1\u53F7\u3002\u540C\u65F6\uFF0C\u4E5F\u9700\u8981\u4E00\u4E2A\u5904\u7406\u4FE1\u53F7\u7684\u7A0B\u5E8F\u6765 <a href="">\u6355\u83B7</a>\uFF08\u53C2\u8003 <a href="">\u6837\u4F8B 32-5</a>\uFF09\u7531\u5FAA\u73AF\u8BA1\u65F6\u5668\u4EA7\u751F\u7684\u4E2D\u65AD\u3002</p><h4 id="\u6837\u4F8B-9-2-\u9650\u65F6\u8F93\u5165" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-2-\u9650\u65F6\u8F93\u5165" aria-hidden="true">#</a> \u6837\u4F8B 9-2. \u9650\u65F6\u8F93\u5165</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># timed-input.sh</span>

<span class="token comment"># TMOUT=3    \u5728\u65B0\u7248\u672C\u7684 Bash \u4E2D\u8D77\u6548\u3002</span>

<span class="token assign-left variable">TIMER_INTERRUPT</span><span class="token operator">=</span><span class="token number">14</span>
<span class="token assign-left variable">TIMELIMIT</span><span class="token operator">=</span><span class="token number">3</span>  <span class="token comment"># \u5728\u8BE5\u5B9E\u4F8B\u4E2D\u8BBE\u7F6E\u4E3A 3 \u79D2\u3002</span>
             <span class="token comment"># \u540C\u6837\u53EF\u4EE5\u8BBE\u7F6E\u6210\u5176\u4ED6\u503C\u3002</span>
             
<span class="token function-name function">PrintAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$answer</span>&quot;</span> <span class="token operator">=</span> TIMEOUT <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$answer</span>
  <span class="token keyword">else</span>       <span class="token comment"># \u4E0D\u8981\u6DF7\u6DC6\u4E86\u8FD9\u4E24\u4E2A\u5B9E\u4F8B\u3002</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your favorite veggie is <span class="token variable">$answer</span>&quot;</span>
    <span class="token function">kill</span> <span class="token variable">$!</span>  <span class="token comment">#  \u7EC8\u6B62\u5728\u540E\u53F0\u8FD0\u884C\u7684</span>
             <span class="token comment">#+ \u4E0D\u518D\u88AB\u9700\u8981\u7684 TimerOn \u51FD\u6570\u3002</span>
             <span class="token comment">#  $! \u4EE3\u8868\u6700\u540E\u4E00\u4E2A\u5728\u540E\u53F0\u8FD0\u884C\u7684\u4F5C\u4E1A\u7684\u8FDB\u7A0BID\u3002</span>
  <span class="token keyword">fi</span>

<span class="token punctuation">}</span>
                
                
<span class="token function-name function">TimerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token function">sleep</span> <span class="token variable">$TIMELIMIT</span> <span class="token operator">&amp;&amp;</span> <span class="token function">kill</span> -s <span class="token number">14</span> <span class="token variable">$$</span> <span class="token operator">&amp;</span>
  <span class="token comment"># \u7B49\u5F85 3 \u79D2\uFF0C\u7136\u540E\u7ED9\u811A\u672C\u53D1\u9001\u4E00\u4E2A\u4FE1\u53F7\u3002</span>
<span class="token punctuation">}</span>


<span class="token function-name function">Int14Vector</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token assign-left variable">answer</span><span class="token operator">=</span><span class="token string">&quot;TIMEOUT&quot;</span>
  PrintAnswer
  <span class="token builtin class-name">exit</span> <span class="token variable">$TIMER_INTERRUPT</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">trap</span> Int14Vector <span class="token variable">$TIMER_INTERRUPT</span>
<span class="token comment"># \u6211\u4EEC\u7684\u76EE\u7684\u5C31\u662F\u901A\u8FC7\u65F6\u95F4\u4E2D\u65AD (14) \u7EC8\u6B62\u7A0B\u5E8F\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;What is your favorite vegetable &quot;</span>
TimerOn
<span class="token builtin class-name">read</span> answer
PrintAnswer


<span class="token comment">#  \u5FC5\u987B\u627F\u8BA4\uFF0C\u8FD9\u4E2A\u5B9E\u73B0\u9650\u65F6\u8F93\u5165\u7684\u65B9\u6CD5\u5E76\u4E0D\u4F18\u96C5\u3002</span>
<span class="token comment">#  \u4F46\u5229\u7528 &quot;read&quot; \u547D\u4EE4\u7684 &quot;-t&quot; \u9009\u9879\u53EF\u4EE5\u7B80\u5316\u8FD9\u4E2A\u64CD\u4F5C\u3002</span>
<span class="token comment">#  \u53C2\u8003\u811A\u672C &quot;t-out.sh&quot;\u3002</span>
<span class="token comment">#  \u601D\u8003\u4E00\u4E0B\uFF0C\u5982\u679C\u4E0D\u662F\u5BF9\u7528\u6237\u7684\u5355\u6B21\u8F93\u5165\u65F6\u95F4\u8FDB\u884C\u9650\u5236\uFF0C</span>
<span class="token comment">#+ \u800C\u662F\u5BF9\u6574\u4E2A\u811A\u672C\u7684\u8FD0\u884C\u65F6\u95F4\u8FDB\u884C\u9650\u5236\uFF0C\u5E94\u8BE5\u600E\u4E48\u505A\uFF1F</span>

<span class="token comment">#  \u5982\u679C\u4F60\u9700\u8981\u66F4\u4F18\u96C5\u7684\u5199\u6CD5 ...</span>
<span class="token comment">#+ \u53EF\u4EE5\u8003\u8651\u7528 C \u6216\u8005 C++ \u6765\u7F16\u5199\u5E94\u7528\uFF0C</span>
<span class="token comment">#+ \u5E76\u4F7F\u7528\u5176\u4E2D\u5305\u542B\u7684\u7C7B\u4F3C &#39;alarm&#39; \u6216\u662F \u2018setitimer&#39; \u7B49\u5408\u9002\u7684\u5E93\u51FD\u6570\u6765\u5B9E\u73B0\u8BA1\u65F6\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>\u8FD8\u6709\u4E00\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528 <a href=""><code>stty</code></a>\u3002</p><h4 id="\u6837\u4F8B-9-3-\u518D\u6765\u4E00\u6B21-\u9650\u65F6\u8F93\u5165" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-3-\u518D\u6765\u4E00\u6B21-\u9650\u65F6\u8F93\u5165" aria-hidden="true">#</a> \u6837\u4F8B 9-3. \u518D\u6765\u4E00\u6B21\uFF0C\u9650\u65F6\u8F93\u5165</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># timeout.sh</span>

<span class="token comment">#  \u8BE5\u811A\u672C\u7531 Stephane Chazelas \u7F16\u5199\uFF0C</span>
<span class="token comment">#+ \u5E76\u7531\u672C\u4E66\u4F5C\u8005\u4FEE\u6539\u3002</span>

<span class="token assign-left variable">INTERVAL</span><span class="token operator">=</span><span class="token number">5</span>                <span class="token comment"># \u8D85\u65F6\u6240\u9700\u7684\u65F6\u95F4\u95F4\u9694</span>

<span class="token function-name function">timedout_read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">timeout</span><span class="token operator">=</span><span class="token variable">$1</span>
  <span class="token assign-left variable">varname</span><span class="token operator">=</span><span class="token variable">$2</span>
  <span class="token assign-left variable">old_tty_settings</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>stty -g<span class="token variable">\`</span></span>
  stty -icanon min <span class="token number">0</span> <span class="token function">time</span> <span class="token variable">\${timeout}</span><span class="token number">0</span>
  <span class="token builtin class-name">eval</span> <span class="token builtin class-name">read</span> <span class="token variable">$varname</span>      <span class="token comment"># \u6216\u8005\u76F4\u63A5\u5199\u6210 read $varname</span>
  stty <span class="token string">&quot;<span class="token variable">$old_tty_settings</span>&quot;</span>
  <span class="token comment"># \u53C2\u8003 &quot;stty&quot; \u7684\u5E2E\u52A9\u9875\u9762 (man)\u3002</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;What&#39;s your name? Quick! &quot;</span>
timedout_read <span class="token variable">$INTERVAL</span> your_name

<span class="token comment">#  \u8BE5\u811A\u672C\u4E5F\u8BB8\u5E76\u4E0D\u80FD\u5728\u6240\u6709\u7C7B\u578B\u7684\u7EC8\u7AEF\u4E0A\u6B63\u5E38\u8FD0\u884C\u3002</span>
<span class="token comment">#  \u6700\u5927\u7684\u8D85\u65F6\u65F6\u95F4\u95F4\u9694\u4F9D\u8D56\u4E8E\u7EC8\u7AEF\u3002</span>
<span class="token comment">#+ \uFF08\u901A\u5E38\u662F 25.5 \u79D2\uFF09\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -z <span class="token string">&quot;<span class="token variable">$your_name</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment"># \u5982\u679C\u5728\u8D85\u65F6\u524D\u8F93\u5165\u4E86\u59D3\u540D ...</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your name is <span class="token variable">$your_name</span>.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Timed out.&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># \u8BE5\u811A\u672C\u7684\u8BA1\u65F6\u884C\u4E3A\u4E0E &quot;timed-input.sh&quot; \u4E2D\u7684\u8BA1\u65F6\u884C\u4E3A\u6709\u6240\u4E0D\u540C\uFF0C</span>
<span class="token comment"># \u8BE5\u811A\u672C\u7684\u8BA1\u65F6\u5668\u4F1A\u5728\u6BCF\u6B21\u6309\u952E\u540E\u88AB\u91CD\u7F6E\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u53EF\u80FD\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u5C31\u662F\u5229\u7528 <a href=""><code>read</code></a> \u547D\u4EE4\u7684 <code>-t</code> \u9009\u9879\u3002</p><h4 id="\u6837\u4F8B-9-4-\u9650\u65F6-read" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-4-\u9650\u65F6-read" aria-hidden="true">#</a> \u6837\u4F8B 9-4. \u9650\u65F6 read</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># t-out.sh [time-out]</span>
<span class="token comment"># \u4ECE &quot;syngin seven&quot; \u7684\u5EFA\u8BAE\u4E2D\u6240\u6C72\u53D6\u7684\u7075\u611F\uFF0C\u8C22\u8C22\u4F60\u4EEC\u3002</span>


<span class="token assign-left variable">TIMELIMIT</span><span class="token operator">=</span><span class="token number">4</span>         <span class="token comment"># 4 \u79D2</span>

<span class="token builtin class-name">read</span> -t <span class="token variable">$TIMELIMIT</span> variable <span class="token operator">&lt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token comment">#                           ^^^</span>
<span class="token comment">#  \u5728\u8FD9\u4E2A\u5B9E\u4F8B\u4E2D\uFF0C\u53EA\u6709 Bash 1.x \u6216 Bash 2.x \u7248\u672C\u9700\u8981 &quot;&lt;&amp;1&quot;\uFF0C</span>
<span class="token comment">#  \u800C\u5728 Bash 3 \u53CA\u66F4\u9AD8\u7248\u672C\u5219\u4E0D\u9700\u8981\u3002</span>

<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment"># \u5224\u65AD\u662F\u5426\u4E3A\u7A7A\u3002</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Timed out, variable still unset.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;variable = <span class="token variable">$variable</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="uid" tabindex="-1"><a class="header-anchor" href="#uid" aria-hidden="true">#</a> $UID</h3><p>\u7528\u6237 ID\u3002</p><p>\u8BB0\u5F55\u5728\u6587\u4EF6 <a href=""><code>/etc/passwd</code></a> \u4E2D\u5F53\u524D\u7528\u6237\u7684\u7528\u6237\u6807\u8BC6\u53F7\u3002</p><p>\u8BE5 ID \u8868\u793A\u7684\u662F\u5F53\u524D\u7528\u6237\u7684\u771F\u5B9E ID\uFF0C\u5373\u4F7F\u7528\u6237\u901A\u8FC7 <code>su</code> \u547D\u4EE4\u4E34\u65F6\u5207\u6362\u81F3\u53E6\u4E00\u4E2A\u7528\u6237\uFF0C\u8FD9\u4E2A ID \u4E5F\u4E0D\u4F1A\u6539\u53D8\u3002<code>$UID</code> \u662F\u4E00\u4E2A\u53EA\u8BFB\u53D8\u91CF\uFF0C\u4E0D\u80FD\u591F\u88AB\u547D\u4EE4\u884C\u6216\u662F\u811A\u672C\u4E2D\u7684\u547D\u4EE4\u6240\u4FEE\u6539\uFF0C\u5E76\u4E0E\u5185\u5EFA\u547D\u4EE4 <a href=""><code>id</code></a> \u76F8\u5BF9\u5E94\u3002</p><h4 id="\u6837\u4F8B-9-5-\u6211\u662F-root-\u7528\u6237\u5417" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-5-\u6211\u662F-root-\u7528\u6237\u5417" aria-hidden="true">#</a> \u6837\u4F8B 9-5. \u6211\u662F root \u7528\u6237\u5417\uFF1F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># am-i-root.sh:   \u6211\u662F\u5426\u662F root \u7528\u6237\uFF1F</span>

<span class="token assign-left variable">ROOT_UID</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># Root \u7528\u6237\u7684 $UID \u4E3A 0\u3002</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$UID</span>&quot;</span> -eq <span class="token string">&quot;<span class="token variable">$ROOT_UID</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment"># \u53EA\u6709\u771F\u6B63\u7684 &quot;root&quot; \u7528\u6237\u624D\u80FD\u7ECF\u53D7\u5F97\u4F4F\u8003\u7814\u3002</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;You are root.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;You are just an ordinary user (but mom loves you just the same).&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>


<span class="token comment"># ============================================================= #</span>
<span class="token comment"># \u4E0B\u9762\u7684\u4EE3\u7801\u5C06\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u56E0\u4E3A\u811A\u672C\u5DF2\u7ECF\u9000\u51FA\u4E86\u3002</span>

<span class="token comment"># \u53E6\u5916\u4E00\u79CD\u5224\u65AD\u662F\u5426\u662F root \u7528\u6237\u7684\u65B9\u6CD5\uFF1A</span>

<span class="token assign-left variable">ROOTUSER_NAME</span><span class="token operator">=</span>root

<span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">id</span> -nu<span class="token variable">\`</span></span>              <span class="token comment"># \u6216\u662F...  username=\`whoami\`</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$username</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">$ROOTUSER_NAME</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Rooty, toot, toot. You are root.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;You are just a regular fella.&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u53C2\u8003 <a href="">\u6837\u4F8B2-3</a>\u3002</p><p>{% hint style=&quot;info&quot; %}</p><p>\u53D8\u91CF <code>$ENV</code>\uFF0C<code>$LOGNAME</code>\uFF0C<code>$MAIL</code>\uFF0C<code>$TERM</code>\uFF0C<code>$USER</code> \u4EE5\u53CA <code>$USERNAME</code> \u5E76\u4E0D\u662F Bash \u7684 <a href="">\u5185\u5EFA\u53D8\u91CF</a>\uFF0C\u800C\u662F\u5728 <a href=""><code>Bash</code></a> \u6216\u7CFB\u7EDF\u7684\u67D0\u4E2A\u542F\u52A8\u6587\u4EF6\u4E2D\uFF0C\u88AB\u8BBE\u7F6E\u800C\u6210\u7684 <a href="">\u73AF\u5883\u53D8\u91CF</a>\u3002\u4EE3\u8868\u5F53\u524D\u7528\u6237\u767B\u5F55 shell \u540D\u79F0\u7684\u53D8\u91CF <code>$SHELL</code> \u662F\u5728\u6587\u4EF6 <code>/etc/password</code> \u6216\u662F\u67D0\u4E2A\u521D\u59CB\u5316\u811A\u672C\u4E2D\u88AB\u8BBE\u5B9A\u7684\uFF0C\u5B83\u4E5F\u4E0D\u662F\u4E00\u4E2A Bash \u7684\u5185\u5EFA\u53D8\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcsh% <span class="token builtin class-name">echo</span> <span class="token environment constant">$LOGNAME</span>
bozo
tcsh% <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/bin/tcsh
tcsh% <span class="token builtin class-name">echo</span> <span class="token environment constant">$TERM</span>
rxvt

bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$LOGNAME</span>
bozo
bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/bin/tcsh
bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$TERM</span>
rxvt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>{% endhint %}</p><h2 id="\u4F4D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u4F4D\u7F6E\u53C2\u6570</h2><h3 id="_0-1-2-\u7B49" tabindex="-1"><a class="header-anchor" href="#_0-1-2-\u7B49" aria-hidden="true">#</a> $0, $1, $2 \u7B49</h3><p>\u4F4D\u7F6E\u53C2\u6570\u3002\u51FA\u73B0\u5728\u4ECE\u547D\u4EE4\u884C\u4F20\u9012\u7ED9\u811A\u672C\u3001\u51FD\u6570\u6216\u662F\u901A\u8FC7\u5185\u5EFA\u547D\u4EE4 <a href=""><code>set</code></a> \u8BBE\u7F6E\u53D8\u91CF\u65F6\uFF08\u53C2\u8003 <a href="">\u6837\u4F8B 4-5</a> \u6216\u662F <a href="">\u6837\u4F8B 15-16</a>\uFF09\u3002</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $#</h3><p>\u547D\u4EE4\u884C\u53C2\u6570<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup>\u6216\u662F\u4F4D\u7F6E\u53C2\u6570\u7684\u4E2A\u6570\uFF08\u53C2\u8003 <a href="">\u6837\u4F8B 36-2</a>\uFF09\u3002</p><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> $*</h3><p>\u5C06\u6240\u6709\u7684\u4F4D\u7F6E\u53C2\u6570\u6574\u5408\uFF0C\u89C6\u4F5C\u4E00\u4E2A\u5355\u8BCD\u3002</p><p>{% hint style=&quot;info&quot; %}</p><p>\u8BE5\u53C2\u6570\u5FC5\u987B\u662F\u88AB\u5F15\u7528\u7684\u72B6\u6001\uFF0C<code>&quot;$*&quot;</code>\u3002</p><p>{% endhint %}</p><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> $@</h3><p>\u8BE5\u53C2\u6570\u7B49\u540C\u4E8E <code>$*</code>\uFF0C\u4F46\u5176\u4E2D\u6BCF\u4E2A\u53C2\u6570\u90FD\u662F\u72EC\u7ACB\u7684\u88AB\u5F15\u7528\u7684\u5B57\u7B26\u4E32\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6240\u6709\u7684\u53C2\u6570\u90FD\u662F\u88AB\u539F\u5C01\u4E0D\u52A8\u7684\u8FDB\u884C\u4F20\u9012\uFF0C\u5E76\u6CA1\u6709\u88AB\u89E3\u6790\u6216\u662F\u6269\u5C55\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u53C2\u6570\u5217\u8868\u4E2D\u7684\u6BCF\u4E00\u4E2A\u53C2\u6570\u90FD\u88AB\u72EC\u7ACB\u89C6\u4E3A\u4E00\u4E2A\u5355\u8BCD\u3002</p><p>{% hint style=&quot;info&quot; %}</p><p>\u540C\u6837\uFF0C\u8BE5\u53C2\u6570\u5FC5\u987B\u662F\u88AB\u5F15\u7528\u7684\u72B6\u6001\uFF0C<code>&quot;$@&quot;</code>\u3002</p><p>{% endhint %}</p><h4 id="\u6837\u4F8B-9-6-\u53C2\u6570\u5217\u8868-\u5229\u7528-\u548C-\u5217\u51FA\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-6-\u53C2\u6570\u5217\u8868-\u5229\u7528-\u548C-\u5217\u51FA\u53C2\u6570" aria-hidden="true">#</a> \u6837\u4F8B 9-6. \u53C2\u6570\u5217\u8868\uFF1A\u5229\u7528 $* \u548C $@ \u5217\u51FA\u53C2\u6570</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># arglist.sh</span>
<span class="token comment"># \u5728\u8C03\u7528\u8BE5\u811A\u672C\u65F6\u9700\u8981\u8DDF\u4E0A\u4E00\u4E9B\u53C2\u6570\uFF0C\u4F8B\u5982 &quot;one two three&quot; ...</span>

<span class="token assign-left variable">E_BADARGS</span><span class="token operator">=</span><span class="token number">85</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -n <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $0<span class="token variable">\`</span></span> argument1 argument2 etc.&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token variable">$E_BADARGS</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">index</span><span class="token operator">=</span><span class="token number">1</span>          <span class="token comment"># \u521D\u59CB\u5316\u8BA1\u6570\u5668\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing args with <span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$*</span><span class="token entity" title="\\&quot;">\\&quot;</span>:&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>  <span class="token comment"># \u5982\u679C\u8FD9\u91CC\u6CA1\u6709\u5F15\u7528 &quot;$*&quot;\uFF0C\u811A\u672C\u5C06\u4E0D\u4F1A\u6B63\u5E38\u8FD0\u884C\u3002</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg #<span class="token variable">$index</span> = <span class="token variable">$arg</span>&quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;index+=1&quot;</span>
<span class="token keyword">done</span>             <span class="token comment"># $* \u5C06\u6240\u6709\u53C2\u6570\u89C6\u4F5C\u4E00\u4E2A\u5355\u8BCD\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Entire arg list seen as single word.&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">index</span><span class="token operator">=</span><span class="token number">1</span>          <span class="token comment"># \u91CD\u7F6E\u8BA1\u6570\u5668\u3002</span>
                 <span class="token comment"># \u5982\u679C\u5FD8\u4E86\u8FD9\u4E00\u6B65\u5C06\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</span>
                 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing args with <span class="token entity" title="\\&quot;">\\&quot;</span>\\<span class="token variable">$@</span><span class="token entity" title="\\&quot;">\\&quot;</span>:&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg #<span class="token variable">$index</span> = <span class="token variable">$arg</span>&quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;index+=1&quot;</span>
<span class="token keyword">done</span>             <span class="token comment"># $@ \u5C06\u6240\u6709\u53C2\u6570\u89C6\u4F5C\u72EC\u7ACB\u7684\u5355\u8BCD\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg list seen as separate words.&quot;</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">index</span><span class="token operator">=</span><span class="token number">1</span>          <span class="token comment"># \u91CD\u7F6E\u8BA1\u6570\u5668\u3002</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing args with \\<span class="token variable">$*</span> (unquoted):&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token variable">$*</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg #<span class="token variable">$index</span> = <span class="token variable">$arg</span>&quot;</span>
  <span class="token builtin class-name">let</span> <span class="token string">&quot;index+=1&quot;</span>
<span class="token keyword">done</span>             <span class="token comment"># \u672A\u88AB\u5F15\u7528\u7684 $* \u5C06\u6240\u6709\u53C2\u6570\u89C6\u4F5C\u72EC\u7ACB\u7684\u5355\u8BCD\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Arg list seen as separate words.&quot;</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>\u5728 <code>shift</code> \u547D\u4EE4\u6267\u884C\u540E\uFF0C<code>$@</code> \u5C06\u4F1A\u4FDD\u7559\u9664\u4E86 <code>$1</code> \u4E4B\u5916\u7684\u5269\u4F59\u7684\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u800C <code>$1</code> \u5219\u4F1A\u88AB\u4E22\u5F03\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u4F7F\u7528 ./scriptname 1 2 3 4 5 \u8C03\u7528\u811A\u672C</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>    <span class="token comment"># 1 2 3 4 5</span>
<span class="token builtin class-name">shift</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>    <span class="token comment"># 2 3 4 5</span>
<span class="token builtin class-name">shift</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>    <span class="token comment"># 3 4 5</span>

<span class="token comment"># \u6BCF\u4E00\u6B21 &quot;shift&quot; \u90FD\u4F1A\u4E22\u5F03\u53C2\u6570 $1\u3002</span>
<span class="token comment"># &quot;$@&quot; \u5219\u5305\u542B\u4E86\u5269\u4F59\u7684\u6240\u6709\u53C2\u6570\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u53C2\u6570 <code>$@</code> \u4E5F\u53EF\u88AB\u7528\u4F5C\u8FC7\u6EE4 shell \u811A\u672C\u8F93\u5165\u7684\u5DE5\u5177\u3002\u7ED3\u6784 <code>cat &quot;$@&quot;</code> \u53EF\u4EE5\u63A5\u53D7\u6765\u81EA\u6807\u51C6\u8F93\u5165 <code>stdin</code> \u7684\u8F93\u5165\uFF0C\u4E5F\u53EF\u4EE5\u63A5\u53D7\u4F20\u9012\u7ED9\u811A\u672C\u7684\u53C2\u6570\u4E2D\u7684\u6587\u4EF6\u4E2D\u7684\u8F93\u5165\u3002\u53C2\u8003 <a href="">\u6837\u4F8B 16-24</a> \u548C <a href="">\u6837\u4F8B 16-25</a>\u3002</p><p>{% hint style=&quot;warning&quot; %}</p><p>\u6839\u636E\u5206\u9694\u7B26 <a href=""><code>$IFS</code></a> \u8BBE\u7F6E\u7684\u4E0D\u540C\uFF0C<code>$*</code> \u548C <code>$@</code> \u6709\u65F6\u4F1A\u51FA\u73B0\u4E0D\u4E00\u81F4\u6216\u975E\u9884\u671F\u884C\u4E3A\u3002</p><p>{% endhint %}</p><h4 id="\u6837\u4F8B-9-7-\u548C-\u7684\u4E0D\u4E00\u81F4\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-7-\u548C-\u7684\u4E0D\u4E00\u81F4\u884C\u4E3A" aria-hidden="true">#</a> \u6837\u4F8B 9-7. $* \u548C $@ \u7684\u4E0D\u4E00\u81F4\u884C\u4E3A</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#  Bash \u7684\u5185\u90E8\u53D8\u91CF &quot;$*&quot; \u548C &quot;$@&quot; \u62E5\u6709\u4E0D\u7A33\u5B9A\u7684\u884C\u4E3A\uFF0C</span>
<span class="token comment">#+ \u8FD9\u4E9B\u884C\u4E3A\u662F\u5426\u51FA\u73B0\u901A\u5E38\u4F9D\u8D56\u4E8E\u5B83\u4EEC\u662F\u5426\u662F\u88AB\u5F15\u7528\u7684\u72B6\u6001\u3002</span>
<span class="token comment">#  \u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u6F14\u793A\u5728\u5206\u8BCD\u548C\u6362\u884C\u65F6\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u6240\u4F1A\u51FA\u73B0\u7684\u4E00\u4E9B\u4E0D\u4E00\u81F4\u7684\u5904\u7406\u65B9\u5F0F\u3002</span>


<span class="token builtin class-name">set</span> -- <span class="token string">&quot;First one&quot;</span> <span class="token string">&quot;second&quot;</span> <span class="token string">&quot;third:one&quot;</span> <span class="token string">&quot;&quot;</span> <span class="token string">&quot;Fifth: :one&quot;</span>
<span class="token comment"># \u8BBE\u7F6E\u811A\u672C\u53C2\u6570\uFF0C$1, $2, $3 \u7B49\u7B49\u3002</span>

<span class="token builtin class-name">echo</span> 

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS unchanged, using &quot;$*&quot;&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>               <span class="token comment"># \u88AB\u5F15\u7528\u72B6\u6001\u3002</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>   <span class="token comment"># \u8FD9\u4E00\u884C\u5728\u4E0B\u9762\u6240\u6709\u7684\u4F8B\u5B50\u4E2D\u90FD\u4FDD\u6301\u4E0D\u53D8\u3002</span>
                            <span class="token comment"># \u8F93\u51FA\u53C2\u6570\u3002</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS unchanged, using $*&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$*</span>                 <span class="token comment"># \u672A\u88AB\u5F15\u7528\u72B6\u6001\u3002</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS unchanged, using &quot;$@&quot;&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS unchanged, using $@&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$*&quot;&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $*&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$*</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token variable">$*</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$var&quot; (var=$*)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $var (var=$*)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$var</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $var (var=&quot;$*&quot;)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$var</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$var&quot; (var=&quot;$*&quot;)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$@&quot;&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $@&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token variable">$@</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $var (var=$@)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$var</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$var&quot; (var=$@)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using &quot;$var&quot; (var=&quot;$@&quot;)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ---

<span class="token builtin class-name">echo</span> <span class="token string">&#39;IFS=&quot;:&quot;, using $var (var=&quot;$@&quot;)&#39;</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$var</span>
<span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>c<span class="token operator">+=</span><span class="token number">1</span><span class="token variable">))</span></span>: [<span class="token variable">$i</span>]&quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># \u5C1D\u8BD5\u5728 ksh \u6216\u662F zsh -y \u4E0B\u6267\u884C\u8FD9\u4E2A\u811A\u672C\u3002</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment">#  \u8FD9\u4E2A\u6837\u4F8B\u662F\u7531 Stephane Chazelas \u6240\u7F16\u5199\uFF0C</span>
<span class="token comment">#+ \u7531\u672C\u4E66\u4F5C\u8005\u8F7B\u5FAE\u6539\u52A8\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br></div></div><p>{% hint style=&quot;info&quot; %}</p><p><code>$@</code> \u548C <code>$*</code> \u4EC5\u5728\u88AB\u53CC\u5F15\u53F7\u5F15\u7528\u65F6\u624D\u4F1A\u8868\u73B0\u51FA\u4E0D\u540C\u3002</p><p>{% endhint %}</p><h4 id="\u6837\u4F8B-9-8-\u5F53-ifs-\u4E3A\u7A7A\u65F6-\u548C-\u7684\u8868\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-8-\u5F53-ifs-\u4E3A\u7A7A\u65F6-\u548C-\u7684\u8868\u73B0" aria-hidden="true">#</a> \u6837\u4F8B 9-8. \u5F53 $IFS \u4E3A\u7A7A\u65F6 $* \u548C $@ \u7684\u8868\u73B0</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#  \u5982\u679C $IFS \u88AB\u8BBE\u7F6E\u4E3A\u7A7A\uFF0C</span>
<span class="token comment">#+ \u90A3\u4E48 &quot;$*&quot; \u548C &quot;$@&quot; \u5C06\u4E0D\u4F1A\u50CF\u671F\u671B\u7684\u90A3\u6837\u8F93\u51FA\u4F4D\u7F6E\u53C2\u6570\u3002</span>

mecho <span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># \u8F93\u51FA\u4F4D\u7F6E\u53C2\u6570\u3002</span>
<span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span>,<span class="token variable">$2</span>,<span class="token variable">$3</span>&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>         <span class="token comment"># \u8BBE\u7F6E\u4E3A\u7A7A\u3002</span>
<span class="token builtin class-name">set</span> a b c      <span class="token comment"># \u4F4D\u7F6E\u53C2\u6570\u3002</span>

mecho <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>     <span class="token comment"># abc,,</span>
<span class="token comment">#                   ^^</span>
mecho <span class="token variable">$*</span>       <span class="token comment"># a,b,c</span>

mecho <span class="token variable">$@</span>       <span class="token comment"># a,b,c</span>
mecho <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>     <span class="token comment"># a,b,c</span>

<span class="token comment">#  \u5F53 $IFS \u4E3A\u7A7A\u65F6 $* \u548C $@ \u7684\u884C\u4E3A</span>
<span class="token comment">#+ \u4F9D\u8D56\u4E8E Bash \u6216\u662F sh \u6240\u8FD0\u884C\u7684\u7248\u672C\u3002</span>
<span class="token comment">#  \u56E0\u6B64\u4E0D\u5B9C\u5728\u811A\u672C\u4E2D\u4F7F\u7528\u8FD9\u4E2A\u201C\u7279\u6027\u201D\u3002</span>


<span class="token comment"># \u611F\u8C22 Stephane Chazelas\u3002</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u5176\u4ED6\u7279\u6B8A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u7279\u6B8A\u53C2\u6570" aria-hidden="true">#</a> \u5176\u4ED6\u7279\u6B8A\u53C2\u6570</h2><h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> $-</h3><p>\u4F7F\u7528 <a href=""><code>set</code></a> \u547D\u4EE4\u8BBE\u7F6E\u7684\u811A\u672C\u6807\u8BB0\u3002\u53C2\u8003 <a href="">\u6837\u4F8B 15-16</a>\u3002</p><p>{% hint style=&quot;warning&quot; %}</p><p>\u8FD9\u4E2A\u53C2\u6570\u6700\u5F00\u59CB\u662F\u4ECE ksh \u5F15\u5165\u5230 Bash\u4E2D\u7684\u3002\u4F46\u5F88\u9057\u61BE\u7684\u662F\uFF0C\u8BE5\u53C2\u6570\u5728 Bash \u811A\u672C\u4E2D\u5E76\u4E0D\u80FD\u53EF\u9760\u5730\u8FD0\u884C\u3002\u8BE5\u53C2\u6570\u53EF\u80FD\u7684\u4E00\u4E2A\u7528\u6CD5\u662F\u7528\u4E8E <a href="">\u81EA\u68C0\u811A\u672C\u662F\u5426\u53EF\u4EA4\u4E92</a>\u3002</p><p>{% endhint %}</p><h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> $!</h3><p>\u8FD0\u884C\u5728\u540E\u53F0\u7684\u6700\u540E\u4E00\u4E2A\u4EFB\u52A1\u7684 <a href="">\u8FDB\u7A0BID</a>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">LOG</span><span class="token operator">=</span><span class="token variable">$0</span>.log

<span class="token assign-left variable">COMMAND1</span><span class="token operator">=</span><span class="token string">&quot;sleep 100&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Logging PIDs background commands for script: <span class="token variable">$0</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$LOG</span>&quot;</span>
<span class="token comment"># \u8FD9\u6837\u5C31\u53EF\u4EE5\u76D1\u63A7\u547D\u4EE4\uFF0C\u5E76\u5728\u5FC5\u8981\u7684\u65F6\u5019\u7EC8\u6B62\u5B83\u4EEC\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$LOG</span>&quot;</span>

<span class="token comment"># \u8BB0\u5F55\u547D\u4EE4\u3002</span>

<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;PID of <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$COMMAND1</span><span class="token entity" title="\\&quot;">\\&quot;</span>:  &quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$LOG</span>&quot;</span>
<span class="token variable">\${COMMAND1}</span> <span class="token operator">&amp;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$!</span> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">$LOG</span>&quot;</span>
<span class="token comment"># &quot;sleep 100&quot; \u7684 PID \u662F 1506</span>

<span class="token comment"># \u611F\u8C22 Jacques Lederer \u63D0\u51FA\u7684\u8BE5\u5EFA\u8BAE\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5C06 <code>$!</code> \u7528\u4E8E\u63A7\u5236\u4EFB\u52A1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>possibly_hanging_job <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token function">sleep</span> <span class="token variable">\${TIMEOUT}</span><span class="token punctuation">;</span> <span class="token builtin class-name">eval</span> <span class="token string">&#39;kill -9 $!&#39;</span> <span class="token operator">&amp;&gt;</span> /dev/null<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment"># \u5F3A\u5236\u7EC8\u6B62\u4E00\u4E2A\u51FA\u9519\u7684\u7A0B\u5E8F\u3002</span>
<span class="token comment"># \u975E\u5E38\u6709\u7528\uFF0C\u4F8B\u5982\u53EF\u4EE5\u7528\u5728\u542F\u52A8\u811A\u672C\u4E2D\u3002</span>

<span class="token comment"># \u611F\u8C22 Sylvain Fourmanoit \u63D0\u51FA\u7684\u8FD9\u4E2A\u5229\u7528\u53D8\u91CF &quot;$!&quot; \u7684\u521B\u9020\u6027\u7528\u6CD5\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u8FD9\u4E48\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BE5\u6837\u4F8B\u7531 Matthew Sage \u7F16\u5199\u3002</span>
<span class="token comment"># \u672C\u4E66\u7ECF\u6388\u6743\u540E\u4F7F\u7528\u3002</span>

<span class="token assign-left variable">TIMEOUT</span><span class="token operator">=</span><span class="token number">30</span>   <span class="token comment"># \u4EE5\u79D2\u4E3A\u5355\u4F4D\u7684\u8D85\u65F6\u65F6\u95F4\u503C\u3002</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>

possibly_hanging_job <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span>count <span class="token operator">&lt;</span> TIMEOUT <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
                <span class="token builtin class-name">eval</span> <span class="token string">&#39;[ ! -d &quot;/proc/$!&quot; ] &amp;&amp; ((count = TIMEOUT))&#39;</span>
                <span class="token comment"># \u5F53\u524D\u8FD0\u884C\u8FDB\u7A0B\u7684\u8BE6\u7EC6\u4FE1\u606F\u90FD\u53EF\u4EE5\u5728 /proc \u4E2D\u627E\u5230\u3002</span>
                <span class="token comment"># &quot;-d&quot; \u7528\u4E8E\u6D4B\u8BD5\u8FDB\u7A0B\u662F\u5426\u5B58\u5728\uFF08\u5373\u5728 /proc \u6587\u4EF6\u5939\u4E0B\u8BE5\u8FDB\u7A0B\u7684\u6587\u4EF6\u5939\u662F\u5426\u5B58\u5728\uFF09\u3002</span>
                <span class="token comment"># \u6211\u4EEC\u5728\u7B49\u5F85\u51FA\u95EE\u9898\u7684\u4EFB\u52A1\u51FA\u73B0\u3002</span>
                <span class="token variable"><span class="token punctuation">((</span>count<span class="token operator">++</span><span class="token punctuation">))</span></span>
                <span class="token function">sleep</span> <span class="token number">1</span>
        <span class="token keyword">done</span>
        <span class="token builtin class-name">eval</span> <span class="token string">&#39;[ -d &quot;/proc/$!&quot; ] &amp;&amp; kill -15 $!&#39;</span>
        <span class="token comment"># \u5982\u679C\u88AB\u6302\u8D77\u7684\u4EFB\u52A1\u6B63\u5728\u8FD0\u884C\u5C31\u7EC8\u6B62\u5B83\u3002</span>
<span class="token punctuation">}</span>

<span class="token comment">#  -------------------------------------------------------------- #</span>

<span class="token comment">#  \u7136\u800C\uFF0C\u5982\u679C\u53E6\u5916\u4E00\u4E2A\u8FDB\u7A0B\u5728 &quot;hanging_job&quot; \u4E4B\u540E\u5F00\u59CB\u8FD0\u884C</span>
<span class="token comment">#+ \u8BE5\u51FD\u6570\u53EF\u80FD\u4E0D\u80FD\u6B63\u5E38\u8FD0\u884C ...</span>
<span class="token comment">#  \u5728\u90A3\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A\u975E\u6211\u4EEC\u9884\u671F\u7684\u4EFB\u52A1\u4F1A\u88AB\u7EC8\u6B62\u3002</span>
<span class="token comment">#  Ariel Meragelman \u63D0\u51FA\u4E86\u5982\u4E0B\u7684\u89E3\u51B3\u65B9\u6848\u3002</span>

<span class="token assign-left variable">TIMEOUT</span><span class="token operator">=</span><span class="token number">30</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>

possibly_hanging_job <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span>count <span class="token operator">&lt;</span> TIMEOUT <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
            <span class="token builtin class-name">eval</span> <span class="token string">&#39;[ !-d &quot;/proc/$lastjob&quot; ] &amp;&amp; ((count = TIMEOUT))&#39;</span>
            <span class="token assign-left variable">lastjob</span><span class="token operator">=</span><span class="token variable">$!</span>
            <span class="token variable"><span class="token punctuation">((</span>count<span class="token operator">++</span><span class="token punctuation">))</span></span>
            <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">eval</span> <span class="token string">&#39;[ -d &quot;/proc/$lastjob&quot; ] &amp;&amp; kill -15 $lastjob&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5" aria-hidden="true">#</a> $_</h3><p>\u8BE5\u53D8\u91CF\u88AB\u8BBE\u7F6E\u4E3A\u4E0A\u4E00\u4E2A\u6267\u884C\u7684\u547D\u4EE4\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002</p><h4 id="\u6837\u4F8B-9-9-\u4E0B\u5212\u7EBF\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6837\u4F8B-9-9-\u4E0B\u5212\u7EBF\u53D8\u91CF" aria-hidden="true">#</a> \u6837\u4F8B 9-9. \u4E0B\u5212\u7EBF\u53D8\u91CF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>              <span class="token comment">#  /bin/bash</span>
                     <span class="token comment">#  \u4EC5\u901A\u8FC7\u8C03\u7528 /bin/bash \u6267\u884C\u8BE5\u811A\u672C\u3002</span>
                     <span class="token comment">#  \u6CE8\u610F\u8FD9\u4E2A\u7ED3\u679C\u4F1A\u6839\u636E\u811A\u672C\u5982\u4F55\u88AB\u8C03\u7528</span>
                     <span class="token comment">#+ \u800C\u6709\u6240\u4E0D\u540C\u3002</span>

<span class="token function">du</span> <span class="token operator">&gt;</span>/dev/null        <span class="token comment">#  \u8FD9\u6837\u547D\u4EE4\u5C31\u4E0D\u4F1A\u5728\u547D\u4EE4\u884C\u4E0A\u6709\u4EFB\u4F55\u8F93\u51FA\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>              <span class="token comment">#  du</span>

<span class="token function">ls</span> -al <span class="token operator">&gt;</span>/dev/null    <span class="token comment">#  \u8FD9\u6837\u547D\u4EE4\u5C31\u4E0D\u4F1A\u5728\u547D\u4EE4\u884C\u4E0A\u6709\u4EFB\u4F55\u8F93\u51FA\u3002</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>              <span class="token comment">#  -al (\u6700\u540E\u4E00\u4E2A\u53C2\u6570)</span>

<span class="token builtin class-name">:</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>              <span class="token comment">#  :</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6" aria-hidden="true">#</a> $?</h3><p>\u547D\u4EE4\u3001<a href="">\u51FD\u6570</a> \u6216\u662F\u811A\u672C\u81EA\u8EAB\u7684 <a href="">\u9000\u51FA\u72B6\u6001</a>\u3002\u53C2\u8003 <a href="">\u6837\u4F8B 24-7</a>\u3002</p><h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7" aria-hidden="true">#</a> $$</h3><p>\u811A\u672C\u81EA\u8EAB\u7684\u8FDB\u7A0B ID<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup>\u3002\u8BE5\u53D8\u91CF <code>$$</code> \u901A\u5E38\u5728\u811A\u672C\u6784\u5EFA\u72EC\u6709\u7684\u4E34\u65F6\u6587\u4EF6\u65F6\u88AB\u4F7F\u7528\uFF08\u53C2\u8003 <a href="">\u6837\u4F8B 32-6</a>\uFF0C<a href="">\u6837\u4F8B 16-31</a>\uFF0C\u4EE5\u53CA <a href="">\u6837\u4F8B 15-27</a>\uFF09\u3002\u8BE5\u65B9\u6CD5\u901A\u5E38\u6BD4\u8C03\u7528 <a href=""><code>mktemp</code></a> \u547D\u4EE4\u66F4\u7B80\u5355\u3002</p><h2 id="\u6CE8\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u8BB0" aria-hidden="true">#</a> \u6CE8\u8BB0</h2><p>{% hint style=&quot;info&quot; %} \u6808\u5BC4\u5B58\u5668\u662F\u4E00\u6BB5\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u5728\u8BE5\u7A7A\u95F4\u4E2D\uFF0C\u5B58\u5165\uFF08\u538B\u6808\uFF09\u7684\u503C\u662F\u4EE5\u5012\u5E8F\u7684\u65B9\u5F0F\u53D6\u51FA\uFF08\u51FA\u6808\uFF09\u7684\u3002\u6700\u540E\u4E00\u4E2A\u5B58\u5165\u7684\u503C\u88AB\u6700\u5148\u53D6\u51FA\u3002\u5176\u901A\u5E38\u53C8\u88AB\u79F0\u4E3A\u540E\u8FDB\u5148\u51FA(LIFO)\u6216\u662F\u4E0B\u5806\u6808\u3002 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} \u5F53\u524D\u8FD0\u884C\u811A\u672C\u7684\u8FDB\u7A0B ID \u5C31\u662F <code>$$</code>\u3002 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} \u7C7B\u4F3C\u4E8E <a href="">\u9012\u5F52</a>\u3002\u5728\u672C\u6587\u4E2D\uFF0C\u5D4C\u5957\u662F\u6307\u4EE3\u4E00\u79CD\u6A21\u5F0F\u88AB\u5D4C\u5165\u5728\u4E00\u79CD\u66F4\u5927\u7684\u6A21\u5F0F\u4E2D\u3002\u5728 1913 \u5E74\u51FA\u7248\u7684\u97E6\u4F2F\u65AF\u7279\u5927\u8F9E\u5178\u4E2D\u7528\u4E00\u79CD\u66F4\u52A0\u4F18\u96C5\u7684\u65B9\u5F0F\u89E3\u91CA\u4E86\u4EC0\u4E48\u662F\u5D4C\u5957\uFF1A\u201C\u4E00\u7EC4\u6309\u4F53\u79EF\u5927\u5C0F\u6392\u5217\u7684\u76D2\u5B50\u3001\u7BB1\u5B50\u6216\u662F\u7C7B\u4F3C\u7684\u4E1C\u897F\uFF0C\u5B83\u4EEC\u4E2D\u7684\u6BCF\u4E00\u4E2A\u90FD\u88AB\u653E\u5165\u5230\u53E6\u4E00\u4E2A\u66F4\u5927\u7684\u7BB1\u5B50\u4E2D\u3002(A collection of boxes, cases, or the like, of graduated size, each put within the one next larger.)\u201D\u3002 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} \u672F\u8BED\u201C\u53D8\u91CF(argument)\u201D\u548C\u201C\u53C2\u6570(parameter)\u201D\u901A\u5E38\u60C5\u51B5\u4E0B\u662F\u53EF\u4EE5\u4E92\u76F8\u4EA4\u6362\u4F7F\u7528\u7684\u3002\u5728\u672C\u4E66\u4E2D\uFF0C\u5B83\u4EEC\u5177\u6709\u76F8\u540C\u7684\u542B\u4E49\uFF1A\u4F20\u5165\u811A\u672C\u6216\u51FD\u6570\u7684\u53D8\u91CF\u3002 {% endhint %}</p><p>{% hint style=&quot;info&quot; %} \u5728 subshell \u4E2D\u8FD0\u884C\u7684\u811A\u672C\uFF0C<code>$$</code> <a href="">\u8FD4\u56DE\u811A\u672C\u7684\u8FDB\u7A0B ID</a> \u800C\u975E subshell \u7684\u3002 {% endhint %}</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>Footnotes placeholder <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="footnote2" class="footnote-item"><p>Footnotes placeholder <a href="#footnote-ref2" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="footnote3" class="footnote-item"><p>Footnotes placeholder <a href="#footnote-ref3" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="footnote4" class="footnote-item"><p>Footnotes placeholder <a href="#footnote-ref4" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="footnote5" class="footnote-item"><p>Footnotes placeholder <a href="#footnote-ref5" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,193);function S(w,I){const l=e("ExternalLinkIcon"),o=e("RouterLink");return b(),c(i,null,[m,n("p",null,[k,n("a",d,[h,p(l)]),v]),g,n("p",null,[f,p(o,{to:"/code/shell/part5/18_2_globbing.html"},{default:r(()=>[q]),_:1}),$]),y],64)}var _=t(u,[["render",S],["__file","09_1_internal_variables.html.vue"]]);export{_ as default};
