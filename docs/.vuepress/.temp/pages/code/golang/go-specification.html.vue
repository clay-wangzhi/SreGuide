<template><h1 id="go中的命名规范" tabindex="-1"><a class="header-anchor" href="#go中的命名规范" aria-hidden="true">#</a> Go中的命名规范</h1>
<blockquote>
<p>转载自：<a href="https://www.cnblogs.com/rickiyang/p/11074174.html" target="_blank" rel="noopener noreferrer">Go中的命名规范<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="_1-命名规范" tabindex="-1"><a class="header-anchor" href="#_1-命名规范" aria-hidden="true">#</a> 1.命名规范</h2>
<h3 id="_1-1-go是一门区分大小写的语言。" tabindex="-1"><a class="header-anchor" href="#_1-1-go是一门区分大小写的语言。" aria-hidden="true">#</a> 1.1 Go是一门区分大小写的语言。</h3>
<p>命名规则涉及变量、常量、全局函数、结构、接口、方法等的命名。 Go语言从语法层面进行了以下限定：任何需要对外暴露的名字必须以大写字母开头，不需要对外暴露的则应该以小写字母开头。</p>
<ol>
<li>当命名（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Analysize，那么使用这种形式的标识符的对象就<strong>可以被外部包的代码所使用</strong>（客户端程序需要先导入这个包），这被称为导出（像面向对象语言中的 public）；</li>
<li><strong>命名如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的</strong>（像面向对象语言中的 private ）</li>
</ol>
<h3 id="_1-2-包名称" tabindex="-1"><a class="header-anchor" href="#_1-2-包名称" aria-hidden="true">#</a> 1.2 包名称</h3>
<p>保持package的名字和目录保持一致，尽量采取有意义的包名，简短，有意义，尽量和标准库不要冲突。包名应该为<strong>小写</strong>单词，不要使用下划线或者混合大小写。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> domain
<span class="token keyword">package</span> main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-3-文件命名" tabindex="-1"><a class="header-anchor" href="#_1-3-文件命名" aria-hidden="true">#</a> 1.3 文件命名</h3>
<p>尽量采取有意义的文件名，简短，有意义，应该为<strong>小写</strong>单词，使用<strong>下划线</strong>分隔各个单词。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>approve_service<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-4-结构体命名" tabindex="-1"><a class="header-anchor" href="#_1-4-结构体命名" aria-hidden="true">#</a> 1.4 结构体命名</h3>
<ul>
<li>
<p>采用驼峰命名法，首字母根据访问控制大写或者小写</p>
</li>
<li>
<p>struct 申明和初始化格式采用多行，例如下面：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> MainConfig <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Port <span class="token builtin">string</span> <span class="token string">`json:"port"`</span>
    Address <span class="token builtin">string</span> <span class="token string">`json:"address"`</span>
<span class="token punctuation">}</span>
config <span class="token operator">:=</span> MainConfig<span class="token punctuation">{</span><span class="token string">"1234"</span><span class="token punctuation">,</span> <span class="token string">"123.221.134"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ul>
<h3 id="_1-5-接口命名" tabindex="-1"><a class="header-anchor" href="#_1-5-接口命名" aria-hidden="true">#</a> 1.5 接口命名</h3>
<ul>
<li>
<p>命名规则基本和上面的结构体类型</p>
</li>
<li>
<p>单个函数的结构名以 “er” 作为后缀，例如 Reader , Writer 。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Reader <span class="token keyword">interface</span> <span class="token punctuation">{</span>
        <span class="token function">Read</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ul>
<h3 id="_1-6-变量命名" tabindex="-1"><a class="header-anchor" href="#_1-6-变量命名" aria-hidden="true">#</a> 1.6 变量命名</h3>
<p>和结构体类似，变量名称一般遵循驼峰法，首字母根据访问控制原则大写或者小写，但遇到特有名词时，需要遵循以下规则：</p>
<ul>
<li>如果变量为私有，且特有名词为首个单词，则使用小写，如 appService</li>
<li>若变量类型为 bool 类型，则名称应以 Has, Is, Can 或 Allow 开头</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> isExist <span class="token builtin">bool</span>
<span class="token keyword">var</span> hasConflict <span class="token builtin">bool</span>
<span class="token keyword">var</span> canManage <span class="token builtin">bool</span>
<span class="token keyword">var</span> allowGitHook <span class="token builtin">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-7常量命名" tabindex="-1"><a class="header-anchor" href="#_1-7常量命名" aria-hidden="true">#</a> 1.7常量命名</h3>
<p>常量均需使用全部大写字母组成，并使用下划线分词</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const APP_URL = "https://www.baidu.com"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果是枚举类型的常量，需要先创建相应类型：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type Scheme string

const (
    HTTP  Scheme = "http"
    HTTPS Scheme = "https"
)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_2-错误处理" tabindex="-1"><a class="header-anchor" href="#_2-错误处理" aria-hidden="true">#</a> 2. 错误处理</h2>
<ul>
<li>错误处理的原则就是不能丢弃任何有返回err的调用，不要使用 _ 丢弃，必须全部处理。接收到错误，要么返回err，或者使用log记录下来</li>
<li>尽早return：一旦有错误发生，马上返回</li>
<li>尽量不要使用panic，除非你知道你在做什么</li>
<li>错误描述如果是英文必须为小写，不需要标点结尾</li>
<li>采用独立的错误流进行处理</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 错误写法</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// error handling</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// normal code</span>
<span class="token punctuation">}</span>

<span class="token comment">// 正确写法</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// error handling</span>
    <span class="token keyword">return</span> <span class="token comment">// or continue, etc.</span>
<span class="token punctuation">}</span>
<span class="token comment">// normal code</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_3-单元测试" tabindex="-1"><a class="header-anchor" href="#_3-单元测试" aria-hidden="true">#</a> 3. 单元测试</h2>
<p>单元测试文件名命名规范为 example_test.go 测试用例的函数名称必须以 Test 开头，例如：TestExample 每个重要的函数都要首先编写测试用例，测试用例和正规代码一起提交方便进行回归测试 。</p>
</template>
