import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as t,a as n,b as e,d as r,e as i}from"./app-691f2d69.js";const u={},v=i('<h1 id="_4-8-yaml语法" tabindex="-1"><a class="header-anchor" href="#_4-8-yaml语法" aria-hidden="true">#</a> 4.8 yaml语法</h1><h2 id="playbook的语法-yaml" tabindex="-1"><a class="header-anchor" href="#playbook的语法-yaml" aria-hidden="true">#</a> playbook的语法：YAML</h2><p>ansible的playbook采用yaml语法，它以非常简洁的方式实现了json格式的事件描述。</p><p>yaml之于json就像markdown之于html一样，极度简化了json的书写。</p><p>YAML文件后缀通常为.yaml或.yml。</p><p>YAML在不少工具里都使用，学习它是&quot;一次学习、终生受益&quot;的，所以很有必要把yaml的语法格式做个梳理，系统性地去学一学。</p><p><strong>YAML的基本语法规则如下：</strong></p><p>(1).使用缩进表示层级关系</p><p>(2).缩进时不允许使用Tab键，只允许使用空格</p><p>(3).缩进的空格数目不重要，只要相同层级的元素左对齐即可</p><p>(4).yaml文件以&quot;---&quot;作为文档的开始，以表明这是一个yaml文件</p><blockquote><p>即使没有使用<code>---</code>开头，也不会有什么影响</p></blockquote><p>(5).# 表示注释，从这个字符一直到行尾，都会被解析器忽略</p><p>(6).字符串不用加引号，但在可能产生歧义时，需加引号(单双引号皆可)，比如引用变量时</p><p>(7).布尔值非常灵活，不分区大小写的true/false、yes/no、on/off、y/n、0和1都允许</p><p><strong>YAML支持三种数据结构：</strong></p><p>(1).对象：key/value格式，也称为哈希结构、字典结构或关联数组</p><p>(2).数组：也称为列表</p><p>(3).标量(scalars)：单个值</p>',19),o={href:"http://yaml-online-parser.appspot.com/",target:"_blank",rel:"noopener noreferrer"},c=i(`<h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><p>一组键值对，使用冒号隔开key和value。注意，冒号后必须至少一个空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: clay
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等价于json：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;name&quot;: &quot;clay&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- Shell
- Perl
- Python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于json：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&quot;Shell&quot;,&quot;Perl&quot;,&quot;Python&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以使用行内数组(内联语法)的写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
[&quot;Shell&quot;,&quot;Perl&quot;,&quot;Python&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- lang1: Shell
- lang2: Perl
- lang3: Python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于json：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
    {&quot;lang1&quot;: &quot;Shell&quot;},
    {&quot;lang2&quot;: &quot;Perl&quot;},
    {&quot;lang3&quot;: &quot;Python&quot;}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将对象和数组混合：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
languages:
  - Shell
  - Perl
  - Python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于json：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;languages&quot;: [&quot;Shell&quot;,&quot;Perl&quot;,&quot;Python&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
person1:
  name: clay
  age: 18
  gender: male

person2:
  name: wangchi
  age: 19
  gender: female
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于json：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;person2&quot;: {
    &quot;gender&quot;: &quot;female&quot;,
    &quot;age&quot;: 19,
    &quot;name&quot;: &quot;clay&quot;
  },
  &quot;person1&quot;: {
    &quot;gender&quot;: &quot;male&quot;,
    &quot;age&quot;: 18,
    &quot;name&quot;: &quot;wangchi&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用行内对象的写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
person1: {name: clay, age: 18, gender: male}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复合结构" tabindex="-1"><a class="header-anchor" href="#复合结构" aria-hidden="true">#</a> 复合结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- person1:
  name: clay
  age: 18
  langs:
    - Perl
    - Ruby
    - Shell

- person2:
  name: xiaofanggao
  age: 19
  langs:
    - Python
    - Javascript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于json：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
    {
        &quot;langs&quot;: [
        &quot;Perl&quot;,
        &quot;Ruby&quot;,
        &quot;Shell&quot;
        ],
        &quot;person1&quot;: null,
        &quot;age&quot;: 18,
        &quot;name&quot;: &quot;clay&quot;
    },
    {
        &quot;person2&quot;: null,
        &quot;age&quot;: 19,
        &quot;langs&quot;: [
        &quot;Python&quot;,
        &quot;Javascript&quot;
        ],
        &quot;name&quot;: &quot;xiaofanggao&quot;
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串续行" tabindex="-1"><a class="header-anchor" href="#字符串续行" aria-hidden="true">#</a> 字符串续行</h3><p>字符串可以写成多行，从第二行开始，必须至少有一个单空格缩进。换行符会被转为空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str: hello
  world
  hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于json：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;str&quot;: &quot;hello world hello world&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 &gt; 换行，它类似于上面的多层缩进写法。此外，还可以使用|在换行时保留换行符。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>that: &gt;
  Foo
  Bar
this: |
  Foo
  Bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于json：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&#39;that&#39;: &#39;Foo Bar&#39;, &#39;this&#39;: &#39;Foo\\nBar\\n&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>参考链接：</p><p>https://blog.51cto.com/cloumn/blog/1543</p></blockquote>`,39);function m(b,p){const a=d("ExternalLinkIcon");return s(),t("div",null,[v,n("p",null,[e("可以去找一些在线YAML转换JSON网站，比如 "),n("a",o,[e("http://yaml-online-parser.appspot.com"),r(a)]),e(" 通过在线转换可以验证或查看自己所写的YAML是否出错以及哪里出错。")]),c])}const h=l(u,[["render",m],["__file","yaml.html.vue"]]);export{h as default};
