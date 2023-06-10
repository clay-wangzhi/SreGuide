const n=JSON.parse(`{"key":"v-7d04115f","path":"/code/shell/part3/10_1_1_manipulating_strings_using_awk.html","title":"10.1.1 使用 awk 处理字符串","lang":"zh-CN","frontmatter":{"author":"LinuxStory","category":"Linux","tag":["Bash"],"description":"10.1.1 使用 awk 处理字符串 在 Bash 脚本中可以调用字符串处理工具 awk 来替换内置的字符串处理操作。 样例 10-6. 使用另一种方式来截取和定位子字符串 #!/bin/bash # substring-extraction.sh String=23skidoo1 # 012345678 Bash # 123456789 awk # 注意不同字符串索引系统： # Bash 中第一个字符的位置为0。 # Awk 中第一个字符的位置为1。 echo \${String:2:4} # 从第3位开始（0-1-2），4个字符的长度 # skid # Awk 中与 \${string:pos:length} 等价的是 substr(string,pos,length)。 echo | awk ' { print substr(\\"'\\"\${String}\\"'\\",3,4) # skid } ' # 将空的 \\"echo\\" 通过管道传递给 awk 作为一个模拟输入， #+ 这样就不需要提供一个文件名来操作 awk 了。 echo \\"----\\" # 同样的： echo | awk ' { print index(\\"'\\"\${String}\\"'\\", \\"skid\\") # 3 } # （skid 从第3位开始） ' # 这里使用 awk 等价于 \\"expr index\\"。 exit 0","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/shell/part3/10_1_1_manipulating_strings_using_awk.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"10.1.1 使用 awk 处理字符串"}],["meta",{"property":"og:description","content":"10.1.1 使用 awk 处理字符串 在 Bash 脚本中可以调用字符串处理工具 awk 来替换内置的字符串处理操作。 样例 10-6. 使用另一种方式来截取和定位子字符串 #!/bin/bash # substring-extraction.sh String=23skidoo1 # 012345678 Bash # 123456789 awk # 注意不同字符串索引系统： # Bash 中第一个字符的位置为0。 # Awk 中第一个字符的位置为1。 echo \${String:2:4} # 从第3位开始（0-1-2），4个字符的长度 # skid # Awk 中与 \${string:pos:length} 等价的是 substr(string,pos,length)。 echo | awk ' { print substr(\\"'\\"\${String}\\"'\\",3,4) # skid } ' # 将空的 \\"echo\\" 通过管道传递给 awk 作为一个模拟输入， #+ 这样就不需要提供一个文件名来操作 awk 了。 echo \\"----\\" # 同样的： echo | awk ' { print index(\\"'\\"\${String}\\"'\\", \\"skid\\") # 3 } # （skid 从第3位开始） ' # 这里使用 awk 等价于 \\"expr index\\"。 exit 0"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"LinuxStory"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10.1.1 使用 awk 处理字符串\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LinuxStory\\"}]}"]]},"headers":[],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"code/shell/part3/10_1_1_manipulating_strings_using_awk.md","localizedDate":"2023年4月19日","excerpt":"<h1> 10.1.1 使用 <code>awk</code> 处理字符串</h1>\\n<p>在 Bash 脚本中可以调用字符串处理工具 <code>awk</code> 来替换内置的字符串处理操作。</p>\\n<p>样例 10-6. 使用另一种方式来截取和定位子字符串</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash</span>\\n<span class=\\"token comment\\"># substring-extraction.sh</span>\\n\\n<span class=\\"token assign-left variable\\">String</span><span class=\\"token operator\\">=</span>23skidoo1\\n<span class=\\"token comment\\">#      012345678    Bash</span>\\n<span class=\\"token comment\\">#      123456789    awk</span>\\n<span class=\\"token comment\\"># 注意不同字符串索引系统：</span>\\n<span class=\\"token comment\\"># Bash 中第一个字符的位置为0。</span>\\n<span class=\\"token comment\\"># Awk 中第一个字符的位置为1。</span>\\n\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token variable\\">\${String<span class=\\"token operator\\">:</span>2<span class=\\"token operator\\">:</span>4}</span> <span class=\\"token comment\\"># 从第3位开始（0-1-2），4个字符的长度</span>\\n                                         <span class=\\"token comment\\"># skid</span>\\n\\n<span class=\\"token comment\\"># Awk 中与 \${string:pos:length} 等价的是 substr(string,pos,length)。</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'\\n{ print substr(\\"'</span>\\"<span class=\\"token variable\\">\${String}</span><span class=\\"token string\\">\\"'\\"</span>,3,4<span class=\\"token punctuation\\">)</span>      <span class=\\"token comment\\"># skid</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token string\\">'\\n#  将空的 \\"echo\\" 通过管道传递给 awk 作为一个模拟输入，\\n#+ 这样就不需要提供一个文件名来操作 awk 了。\\n\\necho \\"----\\"\\n\\n# 同样的：\\n\\necho | awk '</span>\\n<span class=\\"token punctuation\\">{</span> print index<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"'\\"</span><span class=\\"token variable\\">\${String}</span><span class=\\"token string\\">\\"'\\"</span>, <span class=\\"token string\\">\\"skid\\"</span><span class=\\"token punctuation\\">)</span>      <span class=\\"token comment\\"># 3</span>\\n<span class=\\"token punctuation\\">}</span>                                           <span class=\\"token comment\\"># （skid 从第3位开始）</span>\\n'   <span class=\\"token comment\\"># 这里使用 awk 等价于 \\"expr index\\"。</span>\\n\\n<span class=\\"token builtin class-name\\">exit</span> <span class=\\"token number\\">0</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"LinuxStory"},"autoDesc":true}`);export{n as data};
