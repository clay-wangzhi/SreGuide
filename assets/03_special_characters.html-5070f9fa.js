const l=JSON.parse(`{"key":"v-3666da25","path":"/code/shell/part2/03_special_characters.html","title":"第三章 特殊字符","lang":"zh-CN","frontmatter":{"author":"LinuxStory","category":"Linux","tag":["Bash"],"description":"第三章 特殊字符 是什么让一个字符变得特殊呢？如果一个字符不仅具有字面意义，而且具有元意（meta-meaning），我们就称它为特殊字符。特殊字符同命令和关键词（keywords）一样，是bash脚本的组成部分。 你在脚本或其他地方都能够找到特殊字符。 # 注释符。如果一行脚本的开头是#（除了#!），那么代表这一行是注释，不会被执行。 # 这是一行注释","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/shell/part2/03_special_characters.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"第三章 特殊字符"}],["meta",{"property":"og:description","content":"第三章 特殊字符 是什么让一个字符变得特殊呢？如果一个字符不仅具有字面意义，而且具有元意（meta-meaning），我们就称它为特殊字符。特殊字符同命令和关键词（keywords）一样，是bash脚本的组成部分。 你在脚本或其他地方都能够找到特殊字符。 # 注释符。如果一行脚本的开头是#（除了#!），那么代表这一行是注释，不会被执行。 # 这是一行注释"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"LinuxStory"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第三章 特殊字符\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LinuxStory\\"}]}"]]},"headers":[{"level":3,"title":"#","slug":"","link":"#","children":[]},{"level":3,"title":";","slug":"-1","link":"#-1","children":[]},{"level":3,"title":";;","slug":"-2","link":"#-2","children":[]},{"level":3,"title":";;&, ;&","slug":"-3","link":"#-3","children":[]},{"level":3,"title":".","slug":"-4","link":"#-4","children":[]},{"level":3,"title":".","slug":"-5","link":"#-5","children":[]},{"level":3,"title":".","slug":"-6","link":"#-6","children":[]},{"level":3,"title":"\\"","slug":"-7","link":"#-7","children":[]},{"level":3,"title":"'","slug":"-8","link":"#-8","children":[]},{"level":3,"title":",","slug":"-9","link":"#-9","children":[]},{"level":3,"title":",, ,","slug":"-10","link":"#-10","children":[]},{"level":3,"title":"\\\\","slug":"-11","link":"#-11","children":[]},{"level":3,"title":"/","slug":"-12","link":"#-12","children":[]},{"level":3,"title":"\`","slug":"-13","link":"#-13","children":[]},{"level":3,"title":":","slug":"-14","link":"#-14","children":[]},{"level":3,"title":"!","slug":"-15","link":"#-15","children":[]},{"level":3,"title":"*","slug":"-16","link":"#-16","children":[]},{"level":3,"title":"*","slug":"-17","link":"#-17","children":[]},{"level":3,"title":"?","slug":"-18","link":"#-18","children":[]},{"level":3,"title":"?","slug":"-19","link":"#-19","children":[]},{"level":3,"title":"$","slug":"-20","link":"#-20","children":[]},{"level":3,"title":"$","slug":"-21","link":"#-21","children":[]},{"level":3,"title":"\${}","slug":"-22","link":"#-22","children":[]},{"level":3,"title":"$'...'","slug":"-23","link":"#-23","children":[]},{"level":3,"title":"$*, $@","slug":"-24","link":"#-24","children":[]},{"level":3,"title":"$?","slug":"-25","link":"#-25","children":[]},{"level":3,"title":"$$","slug":"-26","link":"#-26","children":[]},{"level":3,"title":"()","slug":"-27","link":"#-27","children":[]},{"level":3,"title":"{xxx,yyy,zzz,...}","slug":"xxx-yyy-zzz","link":"#xxx-yyy-zzz","children":[]},{"level":3,"title":"{a..z}","slug":"a-z","link":"#a-z","children":[]},{"level":3,"title":"{}","slug":"-28","link":"#-28","children":[]},{"level":3,"title":"{}","slug":"-29","link":"#-29","children":[]},{"level":3,"title":"{} ;","slug":"-30","link":"#-30","children":[]},{"level":3,"title":"[ ]","slug":"-31","link":"#-31","children":[]},{"level":3,"title":"[[ ]]","slug":"-32","link":"#-32","children":[]},{"level":3,"title":"[ ]","slug":"-33","link":"#-33","children":[]},{"level":3,"title":"[ ]","slug":"-34","link":"#-34","children":[]},{"level":3,"title":"$[ ... ]","slug":"-35","link":"#-35","children":[]},{"level":3,"title":"(( ))","slug":"-36","link":"#-36","children":[]},{"level":3,"title":"> &> >& >> < <>","slug":"-37","link":"#-37","children":[]},{"level":3,"title":"<<","slug":"-38","link":"#-38","children":[]},{"level":3,"title":"<<<","slug":"-39","link":"#-39","children":[]},{"level":3,"title":"<, >","slug":"-40","link":"#-40","children":[]},{"level":3,"title":"<, >","slug":"-41","link":"#-41","children":[]},{"level":3,"title":"|","slug":"-42","link":"#-42","children":[]},{"level":3,"title":">|","slug":"-43","link":"#-43","children":[]},{"level":3,"title":"||","slug":"-44","link":"#-44","children":[]},{"level":3,"title":"&","slug":"-45","link":"#-45","children":[]},{"level":3,"title":"&&","slug":"-46","link":"#-46","children":[]},{"level":3,"title":"-","slug":"-47","link":"#-47","children":[]},{"level":3,"title":"--","slug":"-48","link":"#-48","children":[]},{"level":3,"title":"-","slug":"-49","link":"#-49","children":[]},{"level":3,"title":"-","slug":"-50","link":"#-50","children":[]},{"level":3,"title":"-","slug":"-51","link":"#-51","children":[]},{"level":3,"title":"=","slug":"-52","link":"#-52","children":[]},{"level":3,"title":"+","slug":"-53","link":"#-53","children":[]},{"level":3,"title":"+","slug":"-54","link":"#-54","children":[]},{"level":3,"title":"%","slug":"-55","link":"#-55","children":[]},{"level":3,"title":"~","slug":"-56","link":"#-56","children":[]},{"level":3,"title":"~+","slug":"-57","link":"#-57","children":[]},{"level":3,"title":"~-","slug":"-58","link":"#-58","children":[]},{"level":3,"title":"=~","slug":"-59","link":"#-59","children":[]},{"level":3,"title":"^","slug":"-60","link":"#-60","children":[]},{"level":3,"title":"^, ^^","slug":"-61","link":"#-61","children":[]},{"level":3,"title":"控制字符","slug":"控制字符","link":"#控制字符","children":[]},{"level":3,"title":"空白符","slug":"空白符","link":"#空白符","children":[]}],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":29.2,"words":8761},"filePathRelative":"code/shell/part2/03_special_characters.md","localizedDate":"2023年4月19日","excerpt":"<h1> 第三章 特殊字符</h1>\\n<p>是什么让一个字符变得<em>特殊</em>呢？如果一个字符不仅具有<em>字面</em>意义，而且具有<em>元意（meta-meaning）</em>，我们就称它为特殊字符。特殊字符同命令和关键词（keywords）一样，是bash脚本的组成部分。</p>\\n<p>你在脚本或其他地方都能够找到特殊字符。</p>\\n<h3> #</h3>\\n<p>注释符。如果一行脚本的开头是#（除了#!），那么代表这一行是注释，不会被执行。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 这是一行注释</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"LinuxStory"},"autoDesc":true}`);export{l as data};
