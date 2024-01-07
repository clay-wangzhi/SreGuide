import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as i,b as n,d as s,e,a as l}from"./app-b89db1c8.js";const c={},u=n("h1",{id:"_4-3-groovy-简明教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-3-groovy-简明教程","aria-hidden":"true"},"#"),s(" 4.3 Groovy 简明教程")],-1),r={href:"https://www.qikqiak.com/post/groovy-simple-tutorial/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"最近一直有很多同学提到不会写 Jenkins Pipeline 脚本，我都是直接摔一个 Jenkins 官方文档给他们，但是当我自己仔细去查看资料的时候发现并非如此简单，无论是声明式还是脚本式的 Pipeline 都依赖了 Groovy 脚本，所以如果要很好的掌握 Pipeline 脚本的用法，我们非常有必要去了解下 Groovy 语言。",-1),k=n("h2",{id:"什么是-groovy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是-groovy","aria-hidden":"true"},"#"),s(" 什么是 Groovy")],-1),v=n("p",null,"Groovy 是跑在 JVM 中的另外一种语言，我们可以用 Groovy 在 Java 平台上进行编程，使用方式基本与使用 Java 代码的方式相同，所以如果你熟悉 Java 代码的话基本上不用花很多精力就可以掌握 Groovy 了，它的语法与 Java 语言的语法很相似，而且完成同样的功能基本上所需要的 Groovy 代码量会比 Java 的代码量少。",-1),m={href:"https://groovy.apache.org/",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2><p>要安装 Groovy 环境非常简单，前往官网网站下载对应的平台安装包一键安装即可：https://groovy.apache.org/download.html，我这里使用的是 Mac，当然也可以使用比较方便的 Homebrew 工具来进行一键安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ brew <span class="token function">install</span> groovy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以使用下面的命令查看 groovy 是否安装成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy <span class="token parameter variable">-v</span>
Groovy Version: <span class="token number">2.5</span>.6 JVM: <span class="token number">1.8</span>.0_05 Vendor: Oracle Corporation OS: Mac OS X
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2><h3 id="运行方法" tabindex="-1"><a class="header-anchor" href="#运行方法" aria-hidden="true">#</a> 运行方法</h3><p>使用编辑器（vscode）新建一个 Groovy 文件 hello.groovy，文件内容如下：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
   <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 println 打印信息到 stdout</span>
        <span class="token comment">/*除了上面的注释方法外，这里没也是注释信息哦*/</span>
        println <span class="token string">&#39;Hello World&#39;</span>
        println <span class="token interpolation-string"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果你对 Java 代码较熟悉的话，可以看到上面的 Groovy 是非常类似的。</p></blockquote><p>然后可以使用 groovy 命令运行上面的程序：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy hello.groovy
Hello World
Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果可以看出了 Groovy 里面支持<code>单引号</code>和<code>双引号</code>两种方式，注释支持<code>//</code>和<code>/**/</code>两种方式，而且不以分号“;”结尾也可以，但是我们还是推荐都带上分号保持代码的一致性。</p><h3 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h3><p><code>标识符</code>被用来定义变量，函数或其他用户定义的变量。标识符以<strong>字母、美元或下划线</strong>开头，不能以数字开头。以下是有效标识符的一些例子 ：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">def</span> employeename 
<span class="token keyword">def</span> student1 
<span class="token keyword">def</span> student_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>其中，<code>def</code>是在 Groovy 中用来定义标识符的关键字。</p></blockquote><p>如下代码：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        String x <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;Hello&quot;</span></span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">def</span> _Name <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;优点知识&quot;</span></span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>_Name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        println <span class="token interpolation-string"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy hello.groovy
Hello
优点知识
Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><p>上述例子中我们定义了一个字符串 x 和一个标识符 _Name。当然除了字符串之外，Groovy 也支持有符号整数、浮点数、字符等：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        String str <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;Hello&quot;</span></span><span class="token punctuation">;</span>  <span class="token comment">// 字符串</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>  <span class="token comment">// 整数</span>
        <span class="token keyword">long</span> y <span class="token operator">=</span> <span class="token number">100L</span><span class="token punctuation">;</span>  <span class="token comment">// 长整型</span>
        <span class="token keyword">float</span> a <span class="token operator">=</span> <span class="token number">10.56f</span><span class="token punctuation">;</span>  <span class="token comment">// 32位浮点数 </span>
        <span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">10.5e40</span><span class="token punctuation">;</span>  <span class="token comment">// 64位浮点数</span>
        <span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 字符</span>
        Boolean l <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// 布尔值，可以是true或false。</span>
        <span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy hello.groovy
Hello
<span class="token number">5</span>
<span class="token number">100</span>
<span class="token number">10.56</span>
<span class="token number">1</span>.05E41
A
<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打印变量" tabindex="-1"><a class="header-anchor" href="#打印变量" aria-hidden="true">#</a> 打印变量</h3><p>上面用 def 关键字来定义变量，当然也可以用一个确定的数据类型来声明一个变量，我们可以用下面的几种方式来打印变量：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始化两个变量</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> 
        <span class="token keyword">int</span> X <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> 
        
        <span class="token comment">// 打印变量值</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;x = &quot;</span></span> <span class="token operator">+</span> x <span class="token operator">+</span> <span class="token interpolation-string"><span class="token string">&quot; and X = &quot;</span></span> <span class="token operator">+</span> X<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;x = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">x</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and X = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">X</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&#39;x = \${x} and X = \${X}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy hello.groovy
x <span class="token operator">=</span> <span class="token number">5</span> and X <span class="token operator">=</span> <span class="token number">6</span>
x <span class="token operator">=</span> <span class="token number">5</span> and X <span class="token operator">=</span> <span class="token number">6</span>
x <span class="token operator">=</span> <span class="token variable">\${x}</span> and X <span class="token operator">=</span> <span class="token variable">\${X}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里我们可以看出 Groovy 在单引号的字符串里面是不支持插值的，这点非常重要，很多同学在使用 Pipeline 脚本的时候经常会混淆。除此之外，还支持三引号：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始化两个变量</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> 
        <span class="token keyword">int</span> X <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> 

println <span class="token interpolation-string"><span class="token string">&quot;&quot;&quot;
x = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">x</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
X = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">X</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
&quot;&quot;&quot;</span></span>

println <span class="token string">&#39;&#39;&#39;
x = \${x}
X = \${X}
&#39;&#39;&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy hello.groovy
x <span class="token operator">=</span> <span class="token number">5</span>
X <span class="token operator">=</span> <span class="token number">6</span>

x <span class="token operator">=</span> <span class="token variable">\${x}</span>
X <span class="token operator">=</span> <span class="token variable">\${X}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出 Groovy 里面三引号支持双引号和单引号两种方式，但是单引号同样不支持插值，要记住。</p><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><p>Groovy 中的函数是使用返回类型或使用 def 关键字定义的，函数可以接收任意数量的参数，定义参数时，不必显式定义类型，可以添加修饰符，如 public，private 和 protected，默认情况下，如果未提供可见性修饰符，则该方法为 public，如下所示：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
   <span class="token keyword">static</span> <span class="token keyword">def</span> <span class="token function">PrintHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;This is a print hello function in groovy&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> 

   <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> d <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token operator">+</span>c<span class="token punctuation">;</span>
      <span class="token keyword">return</span> d<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>  
	
   <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">PrintHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy hello.groovy
This is a print hello <span class="token keyword">function</span> <span class="token keyword">in</span> groovy
<span class="token number">65</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h3><p>在我们日常工作中条件判断语句是必不可少的，即使在 Jenkins Pipeline 脚本中也会经常遇到，Groovy 里面的条件语句和其他语言基本一致，使用 if/else 判断：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span> 
   <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token comment">// 初始化变量值</span>
      <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2</span>
		
      <span class="token comment">// 条件判断</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
         <span class="token comment">// 如果a&lt;100打印下面这句话</span>
         <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;The value is less than 100&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> 
         <span class="token comment">// 如果a&gt;=100打印下面这句话</span>
         <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;The value is greater than 100&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token punctuation">}</span> 
   <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy hello.groovy
The value is <span class="token function">less</span> than <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h3><p>除了条件判断语句之外，循环语句也是非常重要的，Groovy 中可以使用三种方式来进行循环：<code>while、for语句、for-in语句</code>，如下：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
   <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;while循环语句：&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span><span class="token punctuation">(</span>count<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
         count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;for循环语句：&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	     <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;for-in循环语句：&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token keyword">in</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
         <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token punctuation">}</span> 

      <span class="token function">println</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;for-in循环范围：&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">..</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy hello.groovy
while循环语句：
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
for循环语句：
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
for-in循环语句：
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
for-in循环范围：
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是常用的三种循环方式，其中一个比较特殊的地方是我们可以用<code>..</code>来定义一个数据范围，比如<code>1:5</code>表示1到5的数组。</p><p>另外我们还可以使用<code>for-in</code>来循环 Map，Map（字典）是我们在编写程序的过程中会镜像使用到的数据结构，大部分的编程语言都是使用<code>{}</code>来定义 Map，而在 Groovy 中有点不一样的地方，是使用<code>[]</code>来定义的 Map，如下所示：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
   <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 定义一个Map</span>
      <span class="token keyword">def</span> ageMap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token interpolation-string"><span class="token string">&quot;Ken&quot;</span></span> <span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;John&quot;</span></span> <span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;Sally&quot;</span></span> <span class="token punctuation">:</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		
      <span class="token keyword">for</span><span class="token punctuation">(</span>am <span class="token keyword">in</span> ageMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token function">println</span><span class="token punctuation">(</span>am<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ groovy hello.groovy
<span class="token assign-left variable">Ken</span><span class="token operator">=</span><span class="token number">21</span>
<span class="token assign-left variable">John</span><span class="token operator">=</span><span class="token number">25</span>
<span class="token assign-left variable">Sally</span><span class="token operator">=</span><span class="token number">22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上面这些最基本的特性外，Groovy 还支持很多其他的特性，比如异常处理、面向对象设计、正则表达式、泛型、闭包等等，由于我们这里只是为了让大家对 Jenkins Pipeline 的脚本有一个基本的认识，更深层次的用法很少会涉及到，大家如果感兴趣的可以去查阅官方文档了解更多信息。</p>`,57);function g(h,y){const a=t("ExternalLinkIcon");return o(),i("div",null,[u,n("blockquote",null,[n("p",null,[s("转载自："),n("a",r,[s("Groovy 简明教程 | 阳明的博客"),e(a)])])]),d,k,v,n("p",null,[s("官方网站："),n("a",m,[s("https://groovy.apache.org"),e(a)])]),b])}const x=p(c,[["render",g],["__file","groovy-simple-tutorial.html.vue"]]);export{x as default};
