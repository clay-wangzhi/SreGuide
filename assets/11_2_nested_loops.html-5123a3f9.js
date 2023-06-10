const n=JSON.parse('{"key":"v-18a04a46","path":"/code/shell/part3/11_2_nested_loops.html","title":"11.2 嵌套循环","lang":"zh-CN","frontmatter":{"author":"LinuxStory","category":"Linux","tag":["Bash"],"description":"11.2 嵌套循环 嵌套循环，顾名思义就是在循环里面还有循环。外层循环会不断的触发内层循环直到外层循环结束。当然，你仍然可以使用 break 可以终止外层或内层的循环。 样例 11-20. 嵌套循环 #!/bin/bash # nested-loop.sh: 嵌套 \\"for\\" 循环。 outer=1 # 设置外层循环计数器。 # 外层循环。 for a in 1 2 3 4 5 do echo \\"Pass $outer in outer loop.\\" echo \\"---------------------\\" inner=1 # 重设内层循环计数器。 # ===================================== # 内层循环。 for b in 1 2 3 4 5 do echo \\"Pass $inner in inner loop.\\" let \\"inner+=1\\" # 增加内层循环计数器。 done # 内层循环结束。 # ===================================== let \\"outer+=1\\" # 增加外层循环计数器。 echo # 在每次外层循环输出中加入空行。 done # 外层循环结束。 exit 0","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/shell/part3/11_2_nested_loops.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"11.2 嵌套循环"}],["meta",{"property":"og:description","content":"11.2 嵌套循环 嵌套循环，顾名思义就是在循环里面还有循环。外层循环会不断的触发内层循环直到外层循环结束。当然，你仍然可以使用 break 可以终止外层或内层的循环。 样例 11-20. 嵌套循环 #!/bin/bash # nested-loop.sh: 嵌套 \\"for\\" 循环。 outer=1 # 设置外层循环计数器。 # 外层循环。 for a in 1 2 3 4 5 do echo \\"Pass $outer in outer loop.\\" echo \\"---------------------\\" inner=1 # 重设内层循环计数器。 # ===================================== # 内层循环。 for b in 1 2 3 4 5 do echo \\"Pass $inner in inner loop.\\" let \\"inner+=1\\" # 增加内层循环计数器。 done # 内层循环结束。 # ===================================== let \\"outer+=1\\" # 增加外层循环计数器。 echo # 在每次外层循环输出中加入空行。 done # 外层循环结束。 exit 0"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"LinuxStory"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"11.2 嵌套循环\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LinuxStory\\"}]}"]]},"headers":[],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":0.83,"words":249},"filePathRelative":"code/shell/part3/11_2_nested_loops.md","localizedDate":"2023年4月19日","excerpt":"<h1> 11.2 嵌套循环</h1>\\n<p>嵌套循环，顾名思义就是在循环里面还有循环。外层循环会不断的触发内层循环直到外层循环结束。当然，你仍然可以使用 <code>break</code> 可以终止外层或内层的循环。</p>\\n<p>样例 11-20. 嵌套循环</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash</span>\\n<span class=\\"token comment\\"># nested-loop.sh: 嵌套 \\"for\\" 循环。</span>\\n\\n<span class=\\"token assign-left variable\\">outer</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>             <span class=\\"token comment\\"># 设置外层循环计数器。</span>\\n\\n<span class=\\"token comment\\"># 外层循环。</span>\\n<span class=\\"token keyword\\">for</span> <span class=\\"token for-or-select variable\\">a</span> <span class=\\"token keyword\\">in</span> <span class=\\"token number\\">1</span> <span class=\\"token number\\">2</span> <span class=\\"token number\\">3</span> <span class=\\"token number\\">4</span> <span class=\\"token number\\">5</span> \\n<span class=\\"token keyword\\">do</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Pass <span class=\\"token variable\\">$outer</span> in outer loop.\\"</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"---------------------\\"</span>\\n  <span class=\\"token assign-left variable\\">inner</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>           <span class=\\"token comment\\"># 重设内层循环计数器。</span>\\n  \\n  <span class=\\"token comment\\"># =====================================</span>\\n  <span class=\\"token comment\\"># 内层循环。</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token for-or-select variable\\">b</span> <span class=\\"token keyword\\">in</span> <span class=\\"token number\\">1</span> <span class=\\"token number\\">2</span> <span class=\\"token number\\">3</span> <span class=\\"token number\\">4</span> <span class=\\"token number\\">5</span>\\n  <span class=\\"token keyword\\">do</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Pass <span class=\\"token variable\\">$inner</span> in inner loop.\\"</span>\\n    <span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"inner+=1\\"</span>  <span class=\\"token comment\\"># 增加内层循环计数器。</span>\\n  <span class=\\"token keyword\\">done</span>\\n  <span class=\\"token comment\\"># 内层循环结束。</span>\\n  <span class=\\"token comment\\"># =====================================</span>\\n  \\n  <span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"outer+=1\\"</span>    <span class=\\"token comment\\"># 增加外层循环计数器。</span>\\n  <span class=\\"token builtin class-name\\">echo</span>              <span class=\\"token comment\\"># 在每次外层循环输出中加入空行。</span>\\n<span class=\\"token keyword\\">done</span>\\n<span class=\\"token comment\\"># 外层循环结束。</span>\\n\\n<span class=\\"token builtin class-name\\">exit</span> <span class=\\"token number\\">0</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"LinuxStory"},"autoDesc":true}');export{n as data};
