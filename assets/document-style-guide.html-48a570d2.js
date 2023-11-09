import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as t,b as e,d as n,e as a,a as d}from"./app-bdbc0a84.js";const c={},u=d(`<h1 id="中文技术文档的写作规范" tabindex="-1"><a class="header-anchor" href="#中文技术文档的写作规范" aria-hidden="true">#</a> 中文技术文档的写作规范</h1><blockquote><p>转载自：https://github.com/ruanyf/document-style-guide</p></blockquote><h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2><h3 id="层级" tabindex="-1"><a class="header-anchor" href="#层级" aria-hidden="true">#</a> 层级</h3><p>标题分为四级。</p><ul><li>一级标题：文章的标题</li><li>二级标题：文章主要部分的大标题</li><li>三级标题：二级标题下面一级的小标题</li><li>四级标题：三级标题下面某一方面的小标题</li></ul><p>下面是示例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 一级标题

## 二级标题

### 三级标题

#### 四级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原则" tabindex="-1"><a class="header-anchor" href="#原则" aria-hidden="true">#</a> 原则</h3><p>（1）一级标题下，不能直接出现三级标题。</p><p>示例：下面的文章结构，缺少二级标题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 一级标题

### 三级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）标题要避免孤立编号（即同级标题只有一个）。</p><p>示例：下面的文章结构，<code>二级标题 A</code>只包含一个三级标题，完全可以省略<code>三级标题 A</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 二级标题 A

### 三级标题 A

## 二级标题 B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）下级标题不重复上一级标题的名字。</p><p>示例：下面的文章结构，二级标题与下属的三级标题同名，建议避免。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 概述

### 概述
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）谨慎使用四级标题，尽量避免出现，保持层级的简单，防止出现过于复杂的章节。</p><p>如果三级标题下有并列性的内容，建议只使用项目列表（Item list）。</p><p>示例：下面的结构二要好于结构一。结构一适用的场景，主要是较长篇幅的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>结构一

### 三级标题

#### 四级标题 A

#### 四级标题 B

#### 四级标题 C

结构二

### 三级标题

**（1）A**

**（2）B**

**（3）C**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本</h2><h3 id="字间距" tabindex="-1"><a class="header-anchor" href="#字间距" aria-hidden="true">#</a> 字间距</h3><p>（1）全角中文字符与半角英文字符之间，应有一个半角空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>错误：本文介绍如何快速启动Windows系统。

正确：本文介绍如何快速启动 Windows 系统。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）全角中文字符与半角阿拉伯数字之间，有没有半角空格都可，但必须保证风格统一，不能两种风格混杂。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>正确：2011年5月15日，我订购了5台笔记本电脑与10台平板电脑。

正确：2011 年 5 月 15 日，我订购了 5 台笔记本电脑与 10 台平板电脑。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）半角英文字符和半角阿拉伯数字，与全角标点符号之间不留空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>错误：他的电脑是 MacBook Air 。

正确：他的电脑是 MacBook Air。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="句子" tabindex="-1"><a class="header-anchor" href="#句子" aria-hidden="true">#</a> 句子</h3><p>（1）避免使用长句。</p><p>不包含任何标点符号的单个句子，或者以逗号分隔的句子构件，长度尽量保持在 20 个字以内；20～29 个字的句子，可以接受；30～39 个字的句子，语义必须明确，才能接受；多于 40 个字的句子，任何情况下都不能接受。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>错误：本产品适用于从由一台服务器进行动作控制的单一节点结构到由多台服务器进行动作控制的并行处理程序结构等多种体系结构。

正确：本产品适用于多种体系结构。无论是由一台服务器（单一节点结构），还是由多台服务器（并行处理结构）进行动作控制，均可以使用本产品。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逗号分割的长句，总长度不应该超过 100 字或者正文的 3 行。</p><h2 id="段落" tabindex="-1"><a class="header-anchor" href="#段落" aria-hidden="true">#</a> 段落</h2><h3 id="原则-1" tabindex="-1"><a class="header-anchor" href="#原则-1" aria-hidden="true">#</a> 原则</h3><ul><li>一个段落只能有一个主题，或一个中心句子。</li><li>段落的中心句子放在段首，对全段内容进行概述。后面陈述的句子为核心句服务。</li><li>一个段落的长度不能超过七行，最佳段落长度小于等于四行。</li><li>段落的句子语气要使用陈述和肯定语气，避免使用感叹语气。</li><li>段落之间使用一个空行隔开。</li><li>段落开头不要留出空白字符。</li></ul><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3><p>如果是全篇转载，请在全文开头显著位置注明作者和出处，并链接至原文。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>本文转载自 WikiQuote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="标点符号" tabindex="-1"><a class="header-anchor" href="#标点符号" aria-hidden="true">#</a> 标点符号</h2><h3 id="原则-2" tabindex="-1"><a class="header-anchor" href="#原则-2" aria-hidden="true">#</a> 原则</h3><p>（1）中文语句的标点符号，均应该采取全角符号，这样可以与全角文字保持视觉的一致。</p><p>（2）如果整句为英文，则该句使用英文/半角标点。</p><h3 id="句号" tabindex="-1"><a class="header-anchor" href="#句号" aria-hidden="true">#</a> 句号</h3><p>中文语句的结尾处应该用全角句号（<code>。</code>）。</p><h3 id="括号" tabindex="-1"><a class="header-anchor" href="#括号" aria-hidden="true">#</a> 括号</h3><p>（1）补充说明时，使用全角圆括号（<code>（）</code>），括号前后不加空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例句：请确认所有的连接（电缆和接插件）均安装牢固。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文档体系" tabindex="-1"><a class="header-anchor" href="#文档体系" aria-hidden="true">#</a> 文档体系</h2><h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h3><p>软件手册是一部完整的书，建议采用下面的结构。</p><ul><li><p><strong>简介</strong>（Introduction）： [必备] [文件] 提供对产品和文档本身的总体的、扼要的说明</p></li><li><p><strong>快速上手</strong>（Getting Started）：[可选] [文件] 如何最快速地使用产品</p></li><li><p>入门篇</p><p>（Basics）： [必备] [目录] 又称”使用篇“，提供初级的使用教程</p><ul><li><strong>环境准备</strong>（Prerequisite）：[必备] [文件] 软件使用需要满足的前置条件</li><li><strong>安装</strong>（Installation）：[可选] [文件] 软件的安装方法</li><li><strong>设置</strong>（Configuration）：[必备] [文件] 软件的设置</li></ul></li><li><p><strong>进阶篇</strong>（Advanced)：[可选] [目录] 又称”开发篇“，提供中高级的开发教程</p></li><li><p><strong>API</strong>（Reference）：[可选] [目录|文件] 软件 API 的逐一介绍</p></li><li><p><strong>FAQ</strong>：[可选] [文件] 常见问题解答</p></li><li><p>附录</p><p>（Appendix）：[可选] [目录] 不属于教程本身、但对阅读教程有帮助的内容</p><ul><li><strong>Glossary</strong>：[可选] [文件] 名词解释</li><li><strong>Recipes</strong>：[可选] [文件] 最佳实践</li><li><strong>Troubleshooting</strong>：[可选] [文件] 故障处理</li><li><strong>ChangeLog</strong>：[可选] [文件] 版本说明</li><li><strong>Feedback</strong>：[可选] [文件] 反馈方式</li></ul></li></ul><p>下面是两个真实范例，可参考。</p>`,55),v={href:"https://redux.js.org/introduction/getting-started",target:"_blank",rel:"noopener noreferrer"},o={href:"http://flight-manual.atom.io/",target:"_blank",rel:"noopener noreferrer"},h=d(`<h3 id="文件名" tabindex="-1"><a class="header-anchor" href="#文件名" aria-hidden="true">#</a> 文件名</h3><p>文档的文件名不得含有空格。</p><p>文件名必须使用半角字符，不得使用全角字符。这也意味着，中文不能用于文件名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>错误： 名词解释.md

正确： glossary.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件名建议只使用小写字母，不使用大写字母。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>错误：TroubleShooting.md

正确：troubleshooting.md 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了醒目，某些说明文件的文件名，可以使用大写字母，比如<code>README</code>、<code>LICENSE</code>。</p><p>文件名包含多个单词时，单词之间建议使用半角的连词线（<code>-</code>）分隔。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不佳：advanced_usage.md

正确：advanced-usage.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(p,b){const i=l("ExternalLinkIcon");return r(),t("div",null,[u,e("ul",null,[e("li",null,[e("a",v,[n("Redux 手册"),a(i)])]),e("li",null,[e("a",o,[n("Atom 手册"),a(i)])])]),h])}const f=s(c,[["render",m],["__file","document-style-guide.html.vue"]]);export{f as default};
