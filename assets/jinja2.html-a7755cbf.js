import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as u,b as e,d as s,e as i,t as c,a as n}from"./app-576e160e.js";const r={},o=n('<h1 id="_4-7-jinja2-模板" tabindex="-1"><a class="header-anchor" href="#_4-7-jinja2-模板" aria-hidden="true">#</a> 4.7 Jinja2 模板</h1><h2 id="jinja2-简介" tabindex="-1"><a class="header-anchor" href="#jinja2-简介" aria-hidden="true">#</a> Jinja2 简介</h2><h3 id="jinja2-是什么-模板是什么" tabindex="-1"><a class="header-anchor" href="#jinja2-是什么-模板是什么" aria-hidden="true">#</a> Jinja2 是什么？模板是什么？</h3><p>Jinja2 是基于 python 的模板引擎。那么什么是模板？</p><p>所谓模板，是可以在纯文本字符串中嵌入一些特殊语法格式的表达式，然后使用模板引擎去解析整个模板，将其中嵌入的特殊语法部分解析替换成对应的结果字符串。其中，解析并替换模板表达式的过程称为渲染。</p><p>为了让模板引擎只替换模板表达式而不操作普通字符串，所以模板引擎需要能够区分模板表达式和普通字符串，所以模板表达式通常会使用特殊符号包围起来。</p><p>模板更多用在 web 编程中来生成 HTML 页面，但绝不限于 web 编程，它可以用在很多方面，比如 Ansible 就使用 Jinja2 模板引擎来解析 YAML 中的字符串，也用在 template 模块渲染模板文件。</p><p>Jinja2 模板引擎提供了三种特殊符号来包围模板表达式：</p><ul><li><p><code>{{xxx}}</code>：双大括号包围变量或表达式( Ansible 中的变量就是它包围的)</p></li><li><p><code>{#xxx#}</code>：Jinja2 的注释符号</p></li><li><p><code>{%xxx%}</code>：Jinja2 的一些特殊关键字标签，比如 if 语句、for 循环语句等等</p></li></ul><p>Jinja2 的内容较多，但对于学习 Ansible 来说，只需要学习其中和 template 相关的一部分(其它的都和开发有关或 Ansible 中用不上)以及 Ansible 对 Jinja2 的扩展功能即可。</p>',10),p={href:"https://jinja.palletsprojects.com/en/2.10.x/templates/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_templating.html",target:"_blank",rel:"noopener noreferrer"},m=n(`<h3 id="ansible-哪里使用了-jinja2" tabindex="-1"><a class="header-anchor" href="#ansible-哪里使用了-jinja2" aria-hidden="true">#</a> Ansible 哪里使用了 Jinja2</h3><p>严格地说，playbook 中所有地方都使用了 Jinja2，包括几乎所有指令的值、template 模板文件、copy 模块的 content 指令的值、lookup 的 template 插件，等等。它们会先经过 Jinja2 渲染，然后再执行相关任务。</p><p>例如，下面的playbook中分别使用了三种Jinja2特殊符号。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> no
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
      <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;hello world, {{inventory_hostname}}&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
      <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;hello world{# comment #}&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
      <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{% if True %}hello world{% endif %}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>⚠️ 注：jinja2原生的布尔值应当是小写的true和false，但也支持首字母大写形式的True和False。</p></blockquote><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TASK [debug] ************************
ok: [localhost] =&gt; {
&quot;msg&quot;: &quot;hello world, localhost&quot;
}

TASK [debug] ************************
ok: [localhost] =&gt; {
&quot;msg&quot;: &quot;hello world&quot;
}

TASK [debug] ************************
ok: [localhost] =&gt; {
&quot;msg&quot;: &quot;hello world&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再比如模板文件 a.conf.j2 中使用这三种特殊语法：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">{</span><span class="token comment"># Comment this line #}</span>
<span class="token key atrule">variable value</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>inventory_hostname<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>% if True %<span class="token punctuation">}</span>
<span class="token key atrule">in if tag code</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>inventory_hostname<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>% endif %<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的模板渲染任务：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> a.conf.j2
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /tmp/a.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后，将在<code>/tmp/a.conf</code>中生成如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>variable value: localhost
in if tag code: localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>有些指令比较特殊，它们已经使用隐式的<code>{{}}</code>进行了预包围，例如 debug 模块的 var 参数、条件判断 when 指令，所以这时就不要手动使用<code>{{}}</code>再包围指令的值。例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
    <span class="token key atrule">var</span><span class="token punctuation">:</span> inventory_hostname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jinja2-访问元素的两种方式" tabindex="-1"><a class="header-anchor" href="#jinja2-访问元素的两种方式" aria-hidden="true">#</a> Jinja2 访问元素的两种方式</h3><p>Jinja2 模板引擎允许使用点.来访问列表或字典元素，比如 <code>mylist=[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;] </code>列表，在 Jinja2 中既可以使用<code>mylist[1]</code>来访问第二个元素，也可以使用<code>mylist.1</code>来访问它。</p><p>在之前的文章中曾解释过这两种访问方式的区别，这里再重复一遍：</p><ul><li>使用<code>X.Y</code> 时，先搜索 Python 对象的属性名或方法名，搜索不到时再搜索 Jinja2 变量</li><li>使用<code>X[&quot;Y&quot;]</code>时，先搜索Jinja2变量，搜索失败时再搜索Python对象的属性名或方法名</li></ul><p>所以，使用<code>X.Y</code>方式时需要小心一些，使用<code>X[&quot;Y&quot;]</code>更保险。当然，使用哪种方式都无所谓，出错了也知道如何去调整。</p><h3 id="jinja2-条件判断" tabindex="-1"><a class="header-anchor" href="#jinja2-条件判断" aria-hidden="true">#</a> Jinja2 条件判断</h3><h4 id="if-语句块" tabindex="-1"><a class="header-anchor" href="#if-语句块" aria-hidden="true">#</a> if 语句块</h4><p>Jinja2 中可以使用if语句进行条件判断。</p><p>其语法为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% if CONDITION1 %}
string_or_expression1
{% elif CONDITION2 %}
string_or_expression2
{% elif CONDITION3 %}
string_or_expression3
{% else %}
string_or_expression4
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 elif 和 else 分支都是可省略的。CONDITION 部分是条件表达式，关于 Jinja2 支持的条件表达式，后面会介绍。</p><p>例如，模板文件<code>a.txt.j2</code>内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>今天星期几：
{% if whatday == &quot;0&quot; %}
星期日
{% elif whatday == &quot;1&quot; %}
星期一
{% elif whatday == &quot;2&quot; %}
星期二
{% elif whatday == &quot;3&quot; %}
星期三
{% elif whatday == &quot;4&quot; %}
星期四
{% elif whatday == &quot;5&quot; %}
星期五
{% elif whatday == &quot;6&quot; %}
星期六
{% else %}
错误数值
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面判断变量<code>whatday</code>的值，然后输出对应的星期几。因为<code>whatday</code>变量的值是字符串，所以让它和字符串形式的数值进行等值比较。当然，也可以使用筛选器将字符串转换为数值后进行数值比较：<code>whatday|int == 0</code>。</p><p>playbook 内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- hosts: localhost
  gather_facts: no
  vars_prompt:
    - name: whatday
      default: 0
      prompt: &quot;星期几(0-&gt;星期日,1-&gt;星期一...):&quot;
      private: no
  tasks:
    - template:
        src: a.txt.j2
        dest: /tmp/a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="行内-if-表达式" tabindex="-1"><a class="header-anchor" href="#行内-if-表达式" aria-hidden="true">#</a> 行内 if 表达式</h4><p>如果if语句的分支比较简单(没有elif逻辑)，那么可以使用行内if表达式。</p><p>其语法格式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string_or_expr1 if CONDITION else string_or_expr2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35),b=n(`<p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- debug:
    msg: &quot;{{&#39;周末&#39; if whatday|int &gt; 5 else &#39;工作日&#39;}}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h3><h4 id="for迭代列表" tabindex="-1"><a class="header-anchor" href="#for迭代列表" aria-hidden="true">#</a> for迭代列表</h4><p>for循环的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% for i in LIST %}
string_or_expression
{% endfor %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还支持直接条件判断筛选要参与迭代的元素：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% for i in LIST if CONDITION %}
string_or_expression
{% endfor %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，Jinja2 的 for 语句还允许使用 else 分支，如果 for 所迭代的列表 LIST 是空列表(或没有元素可迭代)，则会执行 else 分支。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% for i in LIST %}
string_or_expression
{% else %}
string_or_expression
{% endfor %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，在模板文件<code>a.txt.j2</code>中有如下内容：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">{</span>% for file in files %<span class="token punctuation">}</span>
&lt;<span class="token punctuation">{</span><span class="token punctuation">{</span>file<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">&gt;</span>
<span class="token punctuation">{</span>% else %<span class="token punctuation">}</span>
no file in files
<span class="token punctuation">{</span>% endfor %<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>playbook 文件内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> no
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">files</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /tmp/a1
      <span class="token punctuation">-</span> /tmp/a2
      <span class="token punctuation">-</span> /tmp/a3
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">template</span><span class="token punctuation">:</span>
        <span class="token key atrule">src</span><span class="token punctuation">:</span> a.txt.j2
        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /tmp/a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 playbook 之后，将生成包含如下内容的<code>/tmp/a.txt</code>文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;/tmp/a1&gt;
&lt;/tmp/a2&gt;
&lt;/tmp/a3&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果将 playbook 中的 files 变量设置为空列表，则会执行 else 分支，所以生成的<code>/tmp/a.txt</code>的内容为：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>no file in files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果files变量未定义或变量类型不是list，则默认会报错。针对未定义变量，可采用如下策略提供默认空列表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% for file in (files|default([])) %}
&lt;{{file}}&gt;
{% else %}
no file in files
{% endfor %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不想迭代文件列表中的<code>/tmp/a3</code>，则可以加上条件判断：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% for file in (files|default([])) if file != &quot;/tmp/a3&quot; %}
&lt;{{file}}&gt;
{% else %}
no file in files
{% endfor %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jinja2 的 for 循环没有提供 break 和 continue 的功能，所以只能通过<code>{% for...if...%}</code>来间接实现类似功能。</p><h4 id="for迭代字典" tabindex="-1"><a class="header-anchor" href="#for迭代字典" aria-hidden="true">#</a> for迭代字典</h4><p>默认情况下，Jinja2 的 for 语句只能迭代列表。</p><p>如果要迭代字典结构，需要先使用字典的 items() 方法进行转换。如果没有学过 python，我下面做个简单解释：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p:
  name: junmajinlong
  age: 18
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用<code>p.items()</code>，将计算得到如下结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[(&#39;name&#39;, &#39;junmajinlong&#39;), (&#39;age&#39;, 18)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后 for 语句中使用两个迭代变量分别保存各列表元素中的子元素即可。下面设置了两个迭代变量 key 和 value：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% for key,value in p.items() %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么第一轮迭代时，key 变量保存的是 name 字符串，value 变量保存的是 junmajinlong 字符串，那么第二轮迭代时，key 变量保存的是 age 字符串，value 变量保存的是 18 数值。</p><p>如果 for 迭代时不想要 key 或不想要 value，则使用_来丢弃对应的值。也可以使用<code>keys()</code>方法和<code>values()</code>方法分别获取字典的key组成的列表、字典的value组成的列表。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% for key,_ in p.items() %}
{% for _,values in p.items() %}
{% for key in p.keys() %}
{% for value in p.values() %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的解释整理成下面的示例。playbook 内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: localhost
  gather_facts: no
  vars:
    p1:
      name: &quot;junmajinlong&quot;
      age: 18
  tasks:
    - template:
        src: a.txt.j2
        dest: /tmp/a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板文件<code>a.txt.j2</code>内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{% for key,value in p1.items() %}
key: {{key}}, value: {{value}}
{% endfor %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>key: name, value: junmajinlong
key: age, value: 18
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="for的特殊控制变量" tabindex="-1"><a class="header-anchor" href="#for的特殊控制变量" aria-hidden="true">#</a> for的特殊控制变量</h4><p>在for循环内部，可以使用一些特殊变量，如下：</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210527143348798.png" alt="image-20210527143348798"></p><p>详解 ，略</p><h3 id="macro" tabindex="-1"><a class="header-anchor" href="#macro" aria-hidden="true">#</a> Macro</h3><p>后续补充</p><h3 id="block" tabindex="-1"><a class="header-anchor" href="#block" aria-hidden="true">#</a> block</h3><p>后续补充</p><h3 id="变量赋值和作用域" tabindex="-1"><a class="header-anchor" href="#变量赋值和作用域" aria-hidden="true">#</a> 变量赋值和作用域</h3><p>后续补充</p><h3 id="jinja2的空白处理" tabindex="-1"><a class="header-anchor" href="#jinja2的空白处理" aria-hidden="true">#</a> Jinja2的空白处理</h3><p>后续补充</p><h2 id="jinja2-基础补充" tabindex="-1"><a class="header-anchor" href="#jinja2-基础补充" aria-hidden="true">#</a> jinja2 基础补充</h2><h3 id="基本运算符" tabindex="-1"><a class="header-anchor" href="#基本运算符" aria-hidden="true">#</a> 基本运算符</h3><ul><li><p>算术类操作符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+
-
*
/
//
%
**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明几点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+操作符也可用于字符串串联、列表相加，例如&quot;a&quot;+&quot;b&quot;得到&quot;ab&quot;，[1,2]+[3,4]得到[1,2,3,4]
/是浮点数除法，例如3/2得到1.5
//是截断式整除法，例如20/7得到2
*也可用于重复字符串，例如&quot;-&quot; * 10得到10个连续的短横线
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>比较类操作符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;
&lt;
&gt;=
&lt;=
==
!=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明一点：比较操作不仅仅只能比较数值，也能比较其它对象，比如字符串。</p><p>例如&quot;hey&quot; &gt; &quot;hello&quot; 返回True。</p></li><li><p>逻辑运算符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>not
and
or
(expr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其它操作符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>in：成员测试，测试是否在容器内
is：做is测试，参见后文
|：筛选器，参见后文
~：字符串串联
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明几点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>in操作符可测试多种容器，常见的包括：列表测试3 in [1,2,3]、字符串测试&quot;h&quot; in &quot;hey&quot;和字典测试&quot;name&quot; in {&quot;name&quot;:&quot;junma&quot;,&quot;age&quot;:28}都返回True
is可以做很多测试，比如测试是否是数值，是否是字符串等等，具体内容后面会完整介绍
+可以做字符串串联，~也可以做字符串串联，例如&quot;ab&quot; ~ &quot;cd&quot;得到&quot;abcd&quot;
not操作符和is、in结合时，可以放在两个位置。例如not (&quot;h&quot; in &quot;hey&quot;)、&quot;h&quot; not in &quot;hey&quot;都可以，not (3 is number())和3 is not number()都可以
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="jinja2-内置的-is-测试函数" tabindex="-1"><a class="header-anchor" href="#jinja2-内置的-is-测试函数" aria-hidden="true">#</a> Jinja2 内置的 is 测试函数</h3><p>jinja2 的 is 操作符可以做很多测试操作，比如测试是否是数值，是否是字符串等等。下表列出了所有 Jinja2 内置的测试函数。</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210527144740868.png" alt="image-20210527144740868"></p><p>详解；略</p><h3 id="ansible-扩展的测试函数" tabindex="-1"><a class="header-anchor" href="#ansible-扩展的测试函数" aria-hidden="true">#</a> Ansible 扩展的测试函数</h3><p>模板引擎是多功能的，可以用在很多方面，所以 Jinja2 自身置的大多数功能都是通用功能。使用 Jinja2 的工具可能会对 Jinja2 进行功能扩展，比如 Flask扩 展了一些功能，Ansible 也对 Jinja2 扩展了一些功能。</p><p>Ansible 扩展的测试函数官方手册：https://docs.ansible.com/ansible/latest/user_guide/playbooks_tests.html 。</p><h4 id="测试字符串" tabindex="-1"><a class="header-anchor" href="#测试字符串" aria-hidden="true">#</a> 测试字符串</h4><p>Ansible 提供了三个正则测试函数：</p><ul><li>match()</li><li>search()</li><li>regex()</li></ul><p>它们都返回布尔值，匹配成功时返回true。</p><p>其中，match()要求从字符串的首字符开始匹配成功。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;hello123world&quot; is match(&quot;\\d+&quot;) -&gt; False
&quot;hello123world&quot; is match(&quot;.*\\d+&quot;) -&gt; True
&quot;hello123world&quot; is search(&quot;\\d+&quot;) -&gt; True
&quot;hello123world&quot; is regex(&quot;\\d+&quot;) -&gt; True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="版本号大小比较" tabindex="-1"><a class="header-anchor" href="#版本号大小比较" aria-hidden="true">#</a> 版本号大小比较</h4><p>Ansible作为配置服务、程序的配置管理工具，经常需要比较版本号的大小是否符合要求。Ansible 提供了一个<code>version</code>测试函数可以用来测试版本号是否大于、小于、等于、不等于给定的版本号。</p><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version(&#39;VERSION&#39;,CMP)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 CMP 可以是如下几种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;, lt, &lt;=, le, &gt;, gt, &gt;=, ge, ==, =, eq, !=, &lt;&gt;, ne
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ ansible_facts[&quot;distribution_version&quot;] is version(&quot;7.5&quot;,&quot;&lt;=&quot;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>判断操作系统版本号是否小于等于7.5。</p><h4 id="子集、父集测试" tabindex="-1"><a class="header-anchor" href="#子集、父集测试" aria-hidden="true">#</a> 子集、父集测试</h4><ul><li><code>A is subset(B)</code>测试 A 是否是 B 的子集</li><li><code>A is superset(B)</code>测试 A 是否是 B 的父集</li></ul><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- debug:
    msg: &#39;{{[1,2,3] is subset([1,2,3,4])}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="成员测试" tabindex="-1"><a class="header-anchor" href="#成员测试" aria-hidden="true">#</a> 成员测试</h4><p>Jinja2 自己有一个 in 操作符可以做成员测试，Ansible 另外还实现了一个 contains 测试函数，主要目的是为了结合 select、reject、selectattr 和 rejectattr 筛选器。</p><p>详解；略</p><h4 id="测试文件" tabindex="-1"><a class="header-anchor" href="#测试文件" aria-hidden="true">#</a> 测试文件</h4><p>Ansible 提供了测试文件的相关函数：</p><ul><li>is exists：是否存在</li><li>is directory：是否是目录</li><li>is file：是否是普通文件</li><li>is link：是否是软链接</li><li>is abs：是否是绝对路径</li><li>is same_file(F)：是否和F是硬链接关系</li><li>is mount：是否是挂载点</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- debug:
    msg: &quot;path is a directory&quot;
  when: mypath is directory

# 如果mypath是绝对路径，即is测试返回true，
# 则筛选器返回absolute，否则返回relative
- debug:
    msg: &quot;path is {{ (mypath is abs)|ternary(&#39;absolute&#39;,&#39;relative&#39;)}}&quot;

- debug:
    msg: &quot;path is the same file as path2&quot;
  when: mypath is same_file(path2)

- debug:
    msg: &quot;path is a mount&quot;
  when: mypath is mount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试任务的执行状态" tabindex="-1"><a class="header-anchor" href="#测试任务的执行状态" aria-hidden="true">#</a> 测试任务的执行状态</h4><p>每个任务的执行结果都有4种状态：成功、失败、changed、跳过。</p><p>Ansible 提供了相关的测试函数：</p><ul><li>succeeded、success</li><li>failed、failure</li><li>changed、change</li><li>skipped、skip</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/foo
  <span class="token key atrule">register</span><span class="token punctuation">:</span> result
  <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>

<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;it failed&quot;</span>
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result is failed

<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;it changed&quot;</span>
  <span class="token key atrule">when</span><span class="token punctuation">:</span> result is changed

<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;it succeeded in Ansible &gt;= 2.1&quot;</span>
  <span class="token key atrule">when</span><span class="token punctuation">:</span> result is succeeded

<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;it succeeded&quot;</span>
  <span class="token key atrule">when</span><span class="token punctuation">:</span> result is success

<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;it was skipped&quot;</span>
  <span class="token key atrule">when</span><span class="token punctuation">:</span> result is skipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jinja2-内置-filter" tabindex="-1"><a class="header-anchor" href="#jinja2-内置-filter" aria-hidden="true">#</a> Jinja2 内置 Filter</h3><p>通常，模板语言都会带有筛选器，JinJa2 也不例外，每个筛选器函数都是一个功能，作用就类似于函数，而且它也可以接参数。</p><p>Jinja2 的筛选器使用方式非常简单，直接使用一根竖线<code>|</code>，在模板解析时，Jinja2 会将竖线左边的返回值或计算结果当作隐式参数传递给竖线右边的筛选器函数。另外，筛选器是一个表达式，所以写在<code>{{}}</code>内部。</p><p>例如，Jinja2 有一个内置 lower() 筛选器函数，可以将字符串全部转化成小写字母。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;{{&#39;HELLO WORLD&#39;|lower()}}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>JinJa2 内置了50多个筛选器函数，Ansible 自身也扩展了一些方便的筛选器函数，所以数量非常多。如下：</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210527150327795.png" alt="image-20210527150327795"></p><p>详解；略</p><blockquote><p>Qa: template error while templating string: no filter named &#39;failed&#39;</p><p>Using tests as filters was deprecated in Ansible 2.5 and removed in 2.9.</p><p>可以将 | 替换为 is</p></blockquote><h3 id="ansible-扩展的-filter" tabindex="-1"><a class="header-anchor" href="#ansible-扩展的-filter" aria-hidden="true">#</a> Ansible 扩展的 Filter</h3><h4 id="类型转换类筛选器" tabindex="-1"><a class="header-anchor" href="#类型转换类筛选器" aria-hidden="true">#</a> 类型转换类筛选器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{&quot;123&quot;|int}}
{{&quot;123&quot;|float}}
{{123|string}}
{{range(1,6)|list}}
{{123|bool}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，没有dict筛选器转换成字典类型。</p><h4 id="获取当前时间点" tabindex="-1"><a class="header-anchor" href="#获取当前时间点" aria-hidden="true">#</a> 获取当前时间点</h4><p>Ansible 提供的 now() 可以获取当前时间点。</p><p>可以指定输出的格式化字符串，支持的格式化字符串参考python官方手册：https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior 。</p><p>详解；略</p><h4 id="yaml、json-格式化" tabindex="-1"><a class="header-anchor" href="#yaml、json-格式化" aria-hidden="true">#</a> YAML、JSON 格式化</h4><p>Ansible 提供了几个和 YAML、JSON 格式化相关的 Filter：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>to_yaml
to_json
to_nice_yaml
to_nice_json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它们都可使用 indent 参数指定缩进的层次。</p><p><code>to_yaml</code>和<code>to_json</code>适用于调试，<code>to_nice_yaml</code>和<code>to_nice_json</code>适用于用户查看。</p><p>例如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&#39;{{f1|to_nice_json(indent=2)}}&#39;</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">f1</span><span class="token punctuation">:</span>
      <span class="token key atrule">father</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span>
      <span class="token key atrule">mother</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span>
      <span class="token key atrule">Children</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> Judy
        <span class="token punctuation">-</span> Tedy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数忽略" tabindex="-1"><a class="header-anchor" href="#参数忽略" aria-hidden="true">#</a> 参数忽略</h4><p>Ansible 提供了一个特殊变量 omit ，可以用来忽略模块的参数效果。</p><p>官方手册给了一个非常有代表性的示例，如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> touch files with an optional mode
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ item.path }}&quot;</span>
    <span class="token key atrule">state</span><span class="token punctuation">:</span> touch
    <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ item.mode | default(omit) }}&quot;</span>
  <span class="token key atrule">loop</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /tmp/foo
    <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /tmp/bar
    <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /tmp/baz
  <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token string">&quot;0444&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当所迭代的元素中不存在 mode 项，则使用默认值，默认值设置为特殊变量 omit，使得 file 模块的 mode 参数被忽略，相当于未书写该参数。只有给定了 mode 项时，mode 参数才生效。</p><h4 id="列表元素连接" tabindex="-1"><a class="header-anchor" href="#列表元素连接" aria-hidden="true">#</a> 列表元素连接</h4><p><code>join</code>可以将列表各个元素根据指定的连接符连接起来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ [1,2,3] | join(&quot;-&quot;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="json-query" tabindex="-1"><a class="header-anchor" href="#json-query" aria-hidden="true">#</a> json_query</h4><p>可查询 Json 格式的数据，json_query 在 Ansible 中非常实用，是必学 Filter 之一。</p><p>Ansible 的 json_query 基于 jmespath，所以需要先安装 jmespath：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip3 install jmespath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>详解；后续补充</p><h4 id="文件名处理" tabindex="-1"><a class="header-anchor" href="#文件名处理" aria-hidden="true">#</a> 文件名处理</h4><ul><li>basename：获取字符串中的文件名部分</li><li>dirname：获取字符串中目录名部分</li><li>expanduser：扩展家目录，即将~替换为家目录</li><li>realpath：获取软链接的原始路径</li><li>splitext：扩展名分离</li></ul><h4 id="后续补充" tabindex="-1"><a class="header-anchor" href="#后续补充" aria-hidden="true">#</a> 后续补充</h4><ul><li>列表压平</li><li>并集、交集、差集</li><li>dict 和 list 转换</li><li>zip 和 zip_longest</li><li>子元素 subelements</li><li>random 生成随机数</li><li>shuffle 打乱顺序</li><li>ip地址筛选</li><li>正则表达式筛选器</li><li>URL处理筛选器</li><li>extract 提取元素</li><li>dict 合并</li><li>hash 值计算</li><li>base64 编解码筛选器</li><li>日期时间类处理</li><li>human_to_bytes和human_readable</li></ul><blockquote><p>转载自：</p><p>https://blog.51cto.com/cloumn/blog/1592</p><p>https://blog.51cto.com/cloumn/blog/1593</p></blockquote>`,136);function h(g,k){const a=t("ExternalLinkIcon");return d(),u("div",null,[o,e("ul",null,[e("li",null,[e("p",null,[e("a",p,[s("Jinja2 的官方手册"),i(a)])])]),e("li",null,[e("p",null,[e("a",v,[s("Ansible Jinja2的官方手册"),i(a)])])])]),m,e("p",null,"因为行内if是表达式而不是语句块，所以不使用{%%}符号，而使用"+c()+"。",1),b])}const y=l(r,[["render",h],["__file","jinja2.html.vue"]]);export{y as default};
