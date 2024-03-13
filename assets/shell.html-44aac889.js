import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-54f39dde.js";const i={},l=e(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> Shell</h1><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/shell.png" style="zoom:50%;"><h2 id="青铜" tabindex="-1"><a class="header-anchor" href="#青铜" aria-hidden="true">#</a> 青铜</h2><h3 id="什么时候使用shell" tabindex="-1"><a class="header-anchor" href="#什么时候使用shell" aria-hidden="true">#</a> 什么时候使用shell</h3><ul><li>自动化常用命令</li><li>执行系统管理和故障排除</li><li>创建简单的应用程序</li><li>处理文本或文件</li></ul><h3 id="什么是-sha-bang" tabindex="-1"><a class="header-anchor" href="#什么是-sha-bang" aria-hidden="true">#</a> 什么是 Sha-bang</h3><p>脚本起始行 Sha-bang：系统这个脚本文件需要使用指定的命令解释器来执行<code>#!/bin/bash</code> 或 <code>#!/usr/bin/env bash</code></p><h3 id="shell-脚本如何调用" tabindex="-1"><a class="header-anchor" href="#shell-脚本如何调用" aria-hidden="true">#</a> shell 脚本如何调用</h3><ul><li>bash 或 sh 脚本名称</li><li>给脚本加执行权限 <code>chmod +x 脚本名称</code>，然后<code>./脚本名称</code> 执行</li></ul><h3 id="shell-是什么语言类型" tabindex="-1"><a class="header-anchor" href="#shell-是什么语言类型" aria-hidden="true">#</a> shell 是什么语言类型</h3><p>shell是解释型、弱类型、面向过程的语言 过程式：以指令为中心，数据服务于指令，shell脚本程序提供了编程能力，解释执行</p><h2 id="白银" tabindex="-1"><a class="header-anchor" href="#白银" aria-hidden="true">#</a> 白银</h2><h3 id="if-判断" tabindex="-1"><a class="header-anchor" href="#if-判断" aria-hidden="true">#</a> if 判断</h3><h4 id="文件测试" tabindex="-1"><a class="header-anchor" href="#文件测试" aria-hidden="true">#</a> 文件测试</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-e：检测文件是否存在
-f：检测是否为常规文件，非目录等
-s：文件大小不为0
-d：文件是一个目录
-l：文件是一个符号链接
-r：该文件对执行测试的用户可读
-w：该文件对执行测试的用户可写
-x：该文件可被执行测试的用户所执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="整数比较" tabindex="-1"><a class="header-anchor" href="#整数比较" aria-hidden="true">#</a> 整数比较</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-eq：等于
-ne：不等于
-gt：大于
-ge：大于等于
-lt：小于
-le：小于等于
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串比较" tabindex="-1"><a class="header-anchor" href="#字符串比较" aria-hidden="true">#</a> 字符串比较</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">=</span>：等于
<span class="token operator">==</span>：和等号同义
<span class="token operator">!=</span>：不等于
-z：字符串为空，即字符串长度为0
-n：字符串非空（null）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复合比较" tabindex="-1"><a class="header-anchor" href="#复合比较" aria-hidden="true">#</a> 复合比较</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a：逻辑与
-o：逻辑或
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><h4 id="变量赋值" tabindex="-1"><a class="header-anchor" href="#变量赋值" aria-hidden="true">#</a> 变量赋值</h4><blockquote><p>⚠️ 用 <code>=</code> 机型变量赋值，注意在其前后没有空白符</p></blockquote><h4 id="内建变量" tabindex="-1"><a class="header-anchor" href="#内建变量" aria-hidden="true">#</a> 内建变量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token environment constant">$IFS</span>：内部字段分隔符，默认为空白符
<span class="token environment constant">$PS2</span>：次要提示符，当需要额外输入时出现的提示符，默认显示为 <span class="token operator">&gt;</span>
<span class="token environment constant">$PS3</span>：三级提示符，显示在 <span class="token keyword">select</span> 循环中
<span class="token environment constant">$PS4</span>：四级提示符，当使用 <span class="token parameter variable">-x</span> <span class="token punctuation">[</span>verbose trace<span class="token punctuation">]</span> 选项 调用脚本时显示的提示符。默认显示为 +
<span class="token environment constant">$PWD</span>：工作目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="位置参数" tabindex="-1"><a class="header-anchor" href="#位置参数" aria-hidden="true">#</a> 位置参数</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$0</span>：代表脚本名称
<span class="token variable">$1</span>：代表第一个参数
<span class="token variable">$2</span>：代表第二个参数
依次类推
<span class="token variable">$9</span> 之后的参数必须被包含在大括号之中：<span class="token variable">\${10}</span>，<span class="token variable">\${11}</span>
<span class="token variable">$#</span>：命令行参数或是位置参数的个数
<span class="token variable">$*</span>：将所有的位置参数整合，视作一个单词，该参数必须是被引用的状态，<span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token variable">$@</span>：该参数等同于 <span class="token variable">$*</span>，但其中每个参数都是独立的被引用的字符串，该参数必须是被引用的状态，<span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特殊参数" tabindex="-1"><a class="header-anchor" href="#特殊参数" aria-hidden="true">#</a> 特殊参数</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$?</span>：命令、函数或脚本自身的退出状态
		<span class="token number">0</span>：表示执行成功
		非0：错误退出
<span class="token variable">$$</span>：脚本自身的进程 ID
<span class="token variable">$!</span>：运行在后台的最后一个任务的进程 ID
<span class="token variable">$_</span>：该变量被设置为上一个执行命令的最后一个参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑处理" tabindex="-1"><a class="header-anchor" href="#逻辑处理" aria-hidden="true">#</a> 逻辑处理</h3><h4 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">elif</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
else:
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">arg</span> <span class="token keyword">in</span> <span class="token punctuation">[</span>list<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>循环控制 break [N]：提前结束第N层整个循环，最内层为第1层 continue [N]：提前结束第N层的本轮循环，而直接进入下一轮判断；最内层为第1层</p></blockquote><h4 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="util" tabindex="-1"><a class="header-anchor" href="#util" aria-hidden="true">#</a> util</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>util <span class="token punctuation">[</span> condition-is-true <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  command<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">..</span>.
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> case</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$variable</span>&quot;</span> <span class="token keyword">in</span>
  <span class="token string">&quot;<span class="token variable">$condition1</span>&quot;</span> <span class="token punctuation">)</span>
    command<span class="token punctuation">..</span>.
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token string">&quot;<span class="token variable">$condition2</span>&quot;</span> <span class="token punctuation">)</span>
    command<span class="token punctuation">..</span>.
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">select</span> variable <span class="token punctuation">[</span>in list<span class="token punctuation">]</span>
<span class="token keyword">do</span>
 command<span class="token punctuation">..</span>.
 <span class="token builtin class-name">break</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方式一</span>
<span class="token keyword">function</span> <span class="token function-name function">function_name</span> <span class="token punctuation">{</span>
  command<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token comment"># 方式二</span>
<span class="token function-name function">function_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  command<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token comment"># 方式三</span>
<span class="token keyword">function</span> <span class="token function-name function">function_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  command<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="黄金" tabindex="-1"><a class="header-anchor" href="#黄金" aria-hidden="true">#</a> 黄金</h2><h3 id="字符串处理" tabindex="-1"><a class="header-anchor" href="#字符串处理" aria-hidden="true">#</a> 字符串处理</h3><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> \${}</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>字符串处理
	字符串长度：<span class="token variable">\${<span class="token operator">#</span>string}</span>
	起始部分字符串匹配长度
		<span class="token function">expr</span> match <span class="token string">&quot;<span class="token variable">$string</span>&quot;</span> <span class="token string">&#39;$substring&#39;</span>
		<span class="token function">expr</span> <span class="token string">&quot;<span class="token variable">$string</span>&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;$substring&#39;</span>
	索引：expr index <span class="token variable">$string</span> <span class="token variable">$substring</span>
	截取字符串
		<span class="token variable">\${string<span class="token operator">:</span>position}</span>：在 <span class="token variable">$string</span> 中截取自 <span class="token variable">$position</span> 起的字符串
		<span class="token variable">\${string<span class="token operator">:</span>position<span class="token operator">:</span>length}</span>：在 <span class="token variable">$string</span> 中截取自 <span class="token variable">$position</span> 起，长度为 <span class="token variable">$length</span> 的字符串
	删除子串
		<span class="token variable">\${string<span class="token operator">#</span>substring}</span>：删除从 <span class="token variable">$string</span> 起始部分起，匹配到的最短的 <span class="token variable">$substring</span>
		<span class="token variable">\${string<span class="token operator">##</span>substring}</span>：删除从 <span class="token variable">$string</span> 起始部分起，匹配到的最长的 <span class="token variable">$substring</span>
	子串替换
		<span class="token variable">\${string<span class="token operator">/</span>substring<span class="token operator">/</span>replacement}</span>：替换匹配到的第一个 <span class="token variable">$substring</span> 为 <span class="token variable">$replacement</span>
		<span class="token variable">\${string<span class="token operator">/</span><span class="token operator">/</span>substring<span class="token operator">/</span>replacement}</span>：替换匹配到的所有 <span class="token variable">$substring</span> 为 <span class="token variable">$replacement</span>
		<span class="token variable">\${string<span class="token operator">/</span><span class="token operator">#</span>substring<span class="token operator">/</span>replacement}</span>：替换 <span class="token variable">$string</span> 中最前端匹配到的 <span class="token variable">$substring</span> 为 <span class="token variable">$replacement</span>
		<span class="token variable">\${string<span class="token operator">/</span><span class="token operator">%</span>substring<span class="token operator">/</span>replacement}</span>：替换 <span class="token variable">$string</span> 中最末端匹配到的 <span class="token variable">$substring</span> 为 <span class="token variable">$replacement</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h4><h4 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h4><h3 id="命令替换" tabindex="-1"><a class="header-anchor" href="#命令替换" aria-hidden="true">#</a> 命令替换</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方式一 推荐</span>
<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">command</span><span class="token variable">)</span></span>

<span class="token comment"># 方式二</span>
<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">command</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌入文档" tabindex="-1"><a class="header-anchor" href="#嵌入文档" aria-hidden="true">#</a> 嵌入文档</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># &lt;&lt;- 会抑制tab 但空格不会影响</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> <span class="token variable">$Newfile</span> <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
	strings...
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="i-o-重定向" tabindex="-1"><a class="header-anchor" href="#i-o-重定向" aria-hidden="true">#</a> I/O 重定向</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>特定的文件描述符
	<span class="token number">0</span>：stdin（标准输入，键盘）
	<span class="token number">1</span>：stdout（标准输出， 屏幕）
	<span class="token number">2</span>：stderr（标准错误，屏幕上输出的错误信息）
	<span class="token number">3</span>-9：附件的文件描述符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>常见重定向例子
	清空了文件
		:<span class="token operator">&gt;</span> filename
		<span class="token operator">&gt;</span> filename
	重定向标准输出或标准错误到一个文件
		COMMAND_OUTPUT <span class="token operator">&gt;&gt;</span> filename
		<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>filename：以覆盖的方式将 标准输出 重定向到文件 <span class="token string">&quot;filename&quot;</span>
		<span class="token operator"><span class="token file-descriptor important">1</span>&gt;&gt;</span>filename： 以追加的方式将 标准输出 重定向到文件 <span class="token string">&quot;filename&quot;</span>
		<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>filename：以覆盖的方式将 标准错误 重定向到文件 <span class="token string">&quot;filename&quot;</span>
		<span class="token operator"><span class="token file-descriptor important">2</span>&gt;&gt;</span>filename：以追加的方式将 标准错误 重定向到文件 <span class="token string">&quot;filename&quot;</span>
		<span class="token operator">&amp;&gt;</span>filename：以覆盖的方式将 标准错误 和 标准输出 同时重定向到文件 <span class="token string">&quot;filename&quot;</span>
		<span class="token operator">&gt;</span>filename <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> ：以覆盖的方式将 标准错误 和 标准输出 同时重定向到文件 <span class="token string">&quot;filename&quot;</span>
在 <span class="token function">bash</span> <span class="token number">4</span> 中才有这个新功能
		M<span class="token operator">&gt;</span>N（M如果不设置默认为 <span class="token number">1</span>）：文件描述符 <span class="token string">&quot;M&quot;</span> 重定向到文件 <span class="token string">&quot;N&quot;</span>
		M<span class="token operator">&gt;&amp;</span>N（M如果不设置默认为 <span class="token number">1</span>）： 文件描述符 <span class="token string">&quot;M&quot;</span> 重定向到文件描述符 <span class="token string">&quot;N&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>使用 <span class="token builtin class-name">exec</span>
	<span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span> filename：重定向了 标准输入 到一个文件，所有 标准输入 都来自该文件而不是默认来源<span class="token punctuation">(</span>通常是键盘输入<span class="token punctuation">)</span>
	<span class="token builtin class-name">exec</span> <span class="token operator">&gt;</span>filename：重定向 标准输出 到指定文件
	<span class="token builtin class-name">exec</span> N <span class="token operator">&gt;</span> filename：影响整个脚本或当前 shell
	常用例子：在脚本中将标准输出和标准错误重定向到指定文件
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token string">&quot;<span class="token variable">$LOGFILE</span>&quot;</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方式一</span>
<span class="token builtin class-name">set</span> 命令
	启用某个选项
		<span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> option-name
		<span class="token builtin class-name">set</span> -option-abbrev
	禁用某个选项
		<span class="token builtin class-name">set</span> +o option-name
		<span class="token builtin class-name">set</span> +option-abbrev
	常用选项
    当脚本发生第一个错误时, 就退出脚本
      <span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>
      <span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> errexit	
		如果尝试使用了未定义的变量, 就会输出一个错误消息, 然后强制退出
      <span class="token builtin class-name">set</span> <span class="token parameter variable">-u</span>
      <span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> nounset
<span class="token comment"># 方式二</span>
在脚本头部, <span class="token comment">#!的后边直接指定选项</span>
例如：<span class="token comment">#!/bin/bash -x</span>

<span class="token comment"># 方式三</span>
从命令行中打开脚本的选项
例如：bash <span class="token parameter variable">-x</span> script-name <span class="token comment"># 打印完整命令</span>
     <span class="token function">bash</span> <span class="token parameter variable">-n</span> script-name <span class="token comment"># 做语法检查</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62),t=[l];function c(r,d){return a(),s("div",null,t)}const u=n(i,[["render",c],["__file","shell.html.vue"]]);export{u as default};
