import{_ as l,r,c as p,a as e,b as t,F as u,e as a,d as n,o as i}from"./app.af130410.js";const o={},b=a('<h1 id="_4-8-yaml\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-8-yaml\u8BED\u6CD5" aria-hidden="true">#</a> 4.8 yaml\u8BED\u6CD5</h1><h2 id="playbook\u7684\u8BED\u6CD5-yaml" tabindex="-1"><a class="header-anchor" href="#playbook\u7684\u8BED\u6CD5-yaml" aria-hidden="true">#</a> playbook\u7684\u8BED\u6CD5\uFF1AYAML</h2><p>ansible\u7684playbook\u91C7\u7528yaml\u8BED\u6CD5\uFF0C\u5B83\u4EE5\u975E\u5E38\u7B80\u6D01\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E86json\u683C\u5F0F\u7684\u4E8B\u4EF6\u63CF\u8FF0\u3002</p><p>yaml\u4E4B\u4E8Ejson\u5C31\u50CFmarkdown\u4E4B\u4E8Ehtml\u4E00\u6837\uFF0C\u6781\u5EA6\u7B80\u5316\u4E86json\u7684\u4E66\u5199\u3002</p><p>YAML\u6587\u4EF6\u540E\u7F00\u901A\u5E38\u4E3A.yaml\u6216.yml\u3002</p><p>YAML\u5728\u4E0D\u5C11\u5DE5\u5177\u91CC\u90FD\u4F7F\u7528\uFF0C\u5B66\u4E60\u5B83\u662F&quot;\u4E00\u6B21\u5B66\u4E60\u3001\u7EC8\u751F\u53D7\u76CA&quot;\u7684\uFF0C\u6240\u4EE5\u5F88\u6709\u5FC5\u8981\u628Ayaml\u7684\u8BED\u6CD5\u683C\u5F0F\u505A\u4E2A\u68B3\u7406\uFF0C\u7CFB\u7EDF\u6027\u5730\u53BB\u5B66\u4E00\u5B66\u3002</p><p><strong>YAML\u7684\u57FA\u672C\u8BED\u6CD5\u89C4\u5219\u5982\u4E0B\uFF1A</strong></p><p>(1).\u4F7F\u7528\u7F29\u8FDB\u8868\u793A\u5C42\u7EA7\u5173\u7CFB</p><p>(2).\u7F29\u8FDB\u65F6\u4E0D\u5141\u8BB8\u4F7F\u7528Tab\u952E\uFF0C\u53EA\u5141\u8BB8\u4F7F\u7528\u7A7A\u683C</p><p>(3).\u7F29\u8FDB\u7684\u7A7A\u683C\u6570\u76EE\u4E0D\u91CD\u8981\uFF0C\u53EA\u8981\u76F8\u540C\u5C42\u7EA7\u7684\u5143\u7D20\u5DE6\u5BF9\u9F50\u5373\u53EF</p><p>(4).yaml\u6587\u4EF6\u4EE5&quot;---&quot;\u4F5C\u4E3A\u6587\u6863\u7684\u5F00\u59CB\uFF0C\u4EE5\u8868\u660E\u8FD9\u662F\u4E00\u4E2Ayaml\u6587\u4EF6</p><blockquote><p>\u5373\u4F7F\u6CA1\u6709\u4F7F\u7528<code>---</code>\u5F00\u5934\uFF0C\u4E5F\u4E0D\u4F1A\u6709\u4EC0\u4E48\u5F71\u54CD</p></blockquote><p>(5).# \u8868\u793A\u6CE8\u91CA\uFF0C\u4ECE\u8FD9\u4E2A\u5B57\u7B26\u4E00\u76F4\u5230\u884C\u5C3E\uFF0C\u90FD\u4F1A\u88AB\u89E3\u6790\u5668\u5FFD\u7565</p><p>(6).\u5B57\u7B26\u4E32\u4E0D\u7528\u52A0\u5F15\u53F7\uFF0C\u4F46\u5728\u53EF\u80FD\u4EA7\u751F\u6B67\u4E49\u65F6\uFF0C\u9700\u52A0\u5F15\u53F7(\u5355\u53CC\u5F15\u53F7\u7686\u53EF)\uFF0C\u6BD4\u5982\u5F15\u7528\u53D8\u91CF\u65F6</p><p>(7).\u5E03\u5C14\u503C\u975E\u5E38\u7075\u6D3B\uFF0C\u4E0D\u5206\u533A\u5927\u5C0F\u5199\u7684true/false\u3001yes/no\u3001on/off\u3001y/n\u30010\u548C1\u90FD\u5141\u8BB8</p><p><strong>YAML\u652F\u6301\u4E09\u79CD\u6570\u636E\u7ED3\u6784\uFF1A</strong></p><p>(1).\u5BF9\u8C61\uFF1Akey/value\u683C\u5F0F\uFF0C\u4E5F\u79F0\u4E3A\u54C8\u5E0C\u7ED3\u6784\u3001\u5B57\u5178\u7ED3\u6784\u6216\u5173\u8054\u6570\u7EC4</p><p>(2).\u6570\u7EC4\uFF1A\u4E5F\u79F0\u4E3A\u5217\u8868</p><p>(3).\u6807\u91CF(scalars)\uFF1A\u5355\u4E2A\u503C</p>',19),c=n("\u53EF\u4EE5\u53BB\u627E\u4E00\u4E9B\u5728\u7EBFYAML\u8F6C\u6362JSON\u7F51\u7AD9\uFF0C\u6BD4\u5982 "),d={href:"http://yaml-online-parser.appspot.com/",target:"_blank",rel:"noopener noreferrer"},m=n("http://yaml-online-parser.appspot.com"),g=n(" \u901A\u8FC7\u5728\u7EBF\u8F6C\u6362\u53EF\u4EE5\u9A8C\u8BC1\u6216\u67E5\u770B\u81EA\u5DF1\u6240\u5199\u7684YAML\u662F\u5426\u51FA\u9519\u4EE5\u53CA\u54EA\u91CC\u51FA\u9519\u3002"),h=a(`<h3 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h3><p>\u4E00\u7EC4\u952E\u503C\u5BF9\uFF0C\u4F7F\u7528\u5192\u53F7\u9694\u5F00key\u548Cvalue\u3002\u6CE8\u610F\uFF0C\u5192\u53F7\u540E\u5FC5\u987B\u81F3\u5C11\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>name: clay
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7B49\u4EF7\u4E8Ejson\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
	&quot;name&quot;: &quot;clay&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
- Shell
- Perl
- Python
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7B49\u4EF7\u4E8Ejson\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&quot;Shell&quot;,&quot;Perl&quot;,&quot;Python&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u884C\u5185\u6570\u7EC4(\u5185\u8054\u8BED\u6CD5)\u7684\u5199\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
[&quot;Shell&quot;,&quot;Perl&quot;,&quot;Python&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u518D\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
- lang1: Shell
- lang2: Perl
- lang3: Python
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7B49\u4EF7\u4E8Ejson\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[
    {&quot;lang1&quot;: &quot;Shell&quot;},
    {&quot;lang2&quot;: &quot;Perl&quot;},
    {&quot;lang3&quot;: &quot;Python&quot;}
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5C06\u5BF9\u8C61\u548C\u6570\u7EC4\u6DF7\u5408\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
languages:
  - Shell
  - Perl
  - Python
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7B49\u4EF7\u4E8Ejson\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
	&quot;languages&quot;: [&quot;Shell&quot;,&quot;Perl&quot;,&quot;Python&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5B57\u5178" tabindex="-1"><a class="header-anchor" href="#\u5B57\u5178" aria-hidden="true">#</a> \u5B57\u5178</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
person1:
  name: clay
  age: 18
  gender: male

person2:
  name: wangchi
  age: 19
  gender: female
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u7B49\u4EF7\u4E8Ejson\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u884C\u5185\u5BF9\u8C61\u7684\u5199\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
person1: {name: clay, age: 18, gender: male}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u590D\u5408\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u590D\u5408\u7ED3\u6784" aria-hidden="true">#</a> \u590D\u5408\u7ED3\u6784</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u7B49\u4EF7\u4E8Ejson\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u5B57\u7B26\u4E32\u7EED\u884C" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7EED\u884C" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7EED\u884C</h3><p>\u5B57\u7B26\u4E32\u53EF\u4EE5\u5199\u6210\u591A\u884C\uFF0C\u4ECE\u7B2C\u4E8C\u884C\u5F00\u59CB\uFF0C\u5FC5\u987B\u81F3\u5C11\u6709\u4E00\u4E2A\u5355\u7A7A\u683C\u7F29\u8FDB\u3002\u6362\u884C\u7B26\u4F1A\u88AB\u8F6C\u4E3A\u7A7A\u683C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>str: hello
  world
  hello world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7B49\u4EF7\u4E8Ejson\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;str&quot;: &quot;hello world hello world&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 &gt; \u6362\u884C\uFF0C\u5B83\u7C7B\u4F3C\u4E8E\u4E0A\u9762\u7684\u591A\u5C42\u7F29\u8FDB\u5199\u6CD5\u3002\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528|\u5728\u6362\u884C\u65F6\u4FDD\u7559\u6362\u884C\u7B26\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>that: &gt;
  Foo
  Bar
this: |
  Foo
  Bar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7B49\u4EF7\u4E8Ejson\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{&#39;that&#39;: &#39;Foo Bar&#39;, &#39;this&#39;: &#39;Foo\\nBar\\n&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>https://blog.51cto.com/cloumn/blog/1543</p></blockquote>`,39);function q(x,v){const s=r("ExternalLinkIcon");return i(),p(u,null,[b,e("p",null,[c,e("a",d,[m,t(s)]),g]),h],64)}var _=l(o,[["render",q],["__file","yaml.html.vue"]]);export{_ as default};
