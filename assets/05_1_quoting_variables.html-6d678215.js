const e=JSON.parse('{"key":"v-51c96f18","path":"/code/shell/part2/05_1_quoting_variables.html","title":"5.1 引用变量","lang":"zh-CN","frontmatter":{"author":"LinuxStory","category":"Linux","tag":["Bash"],"description":"5.1 引用变量 引用变量时，通常建议将变量包含在双引号中。因为这样可以防止除 $，`（反引号）和\\\\（转义符）之外的其他特殊字符被重新解释。[^1]在双引号中仍然可以使用$引用变量（\\"$variable\\"），也就是将变量名替换为变量值（详情查看样例 4-1）。 使用双引号可以防止字符串被分割。[^2]即使参数中拥有很多空白分隔符，被包在双引号中后依旧是算作单一字符。 List=\\"one two three\\" for a in $List # 空白符将变量分成几个部分。 do echo \\"$a\\" done # one # two # three echo \\"---\\" for a in \\"$List\\" # 在单一变量中保留所有空格。 do # ^ ^ echo \\"$a\\" done # one two three","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/shell/part2/05_1_quoting_variables.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"5.1 引用变量"}],["meta",{"property":"og:description","content":"5.1 引用变量 引用变量时，通常建议将变量包含在双引号中。因为这样可以防止除 $，`（反引号）和\\\\（转义符）之外的其他特殊字符被重新解释。[^1]在双引号中仍然可以使用$引用变量（\\"$variable\\"），也就是将变量名替换为变量值（详情查看样例 4-1）。 使用双引号可以防止字符串被分割。[^2]即使参数中拥有很多空白分隔符，被包在双引号中后依旧是算作单一字符。 List=\\"one two three\\" for a in $List # 空白符将变量分成几个部分。 do echo \\"$a\\" done # one # two # three echo \\"---\\" for a in \\"$List\\" # 在单一变量中保留所有空格。 do # ^ ^ echo \\"$a\\" done # one two three"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"LinuxStory"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.1 引用变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LinuxStory\\"}]}"]]},"headers":[],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":3.21,"words":963},"filePathRelative":"code/shell/part2/05_1_quoting_variables.md","localizedDate":"2023年4月19日","excerpt":"<h1> 5.1 引用变量</h1>\\n<p>引用变量时，通常建议将变量包含在双引号中。因为这样可以防止除 <code>$</code>，<code>`</code>（反引号）和<code>\\\\</code>（转义符）之外的其他特殊字符被重新解释。[^1]在双引号中仍然可以使用<code>$</code>引用变量（<code>\\"$variable\\"</code>），也就是将变量名替换为变量值（详情查看样例 4-1）。</p>\\n<p>使用双引号可以防止字符串被分割。[^2]即使参数中拥有很多空白分隔符，被包在双引号中后依旧是算作单一字符。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token assign-left variable\\">List</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"one two three\\"</span>\\n\\n<span class=\\"token keyword\\">for</span> <span class=\\"token for-or-select variable\\">a</span> <span class=\\"token keyword\\">in</span> <span class=\\"token variable\\">$List</span>     <span class=\\"token comment\\"># 空白符将变量分成几个部分。</span>\\n<span class=\\"token keyword\\">do</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$a</span>\\"</span>\\n<span class=\\"token keyword\\">done</span>\\n<span class=\\"token comment\\"># one</span>\\n<span class=\\"token comment\\"># two</span>\\n<span class=\\"token comment\\"># three</span>\\n\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"---\\"</span>\\n\\n<span class=\\"token keyword\\">for</span> <span class=\\"token for-or-select variable\\">a</span> <span class=\\"token keyword\\">in</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$List</span>\\"</span>   <span class=\\"token comment\\"># 在单一变量中保留所有空格。</span>\\n<span class=\\"token keyword\\">do</span> <span class=\\"token comment\\">#     ^     ^</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$a</span>\\"</span>\\n<span class=\\"token keyword\\">done</span>\\n<span class=\\"token comment\\"># one two three</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"LinuxStory"},"autoDesc":true}');export{e as data};
