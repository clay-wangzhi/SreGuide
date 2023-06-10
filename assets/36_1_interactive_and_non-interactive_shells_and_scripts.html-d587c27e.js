const e=JSON.parse(`{"key":"v-6bf8603e","path":"/code/shell/part5/36_1_interactive_and_non-interactive_shells_and_scripts.html","title":"36.1 交互和非交互shell以及脚本","lang":"zh-CN","frontmatter":{"author":"LinuxStory","category":"Linux","tag":["Bash"],"description":"36.1 交互和非交互shell以及脚本 交互shell从tty读取用户输入。shell默认会读取启动文件，显示提示符和打开任务控制等。用户可以和shell交互。 脚本总是运行在非交互的shell上。同样，脚本可以访问它自己的tty，这使得在脚本中依然可以模拟出交互的shell。 #!/bin/bash MY_PROMPT='$ ' while : do echo -n \\"$MY_PROMPT\\" read line eval \\"$line\\" done exit 0 # 这个脚本以及以上解释是由Stéphane Chazelas提供的","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/shell/part5/36_1_interactive_and_non-interactive_shells_and_scripts.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"36.1 交互和非交互shell以及脚本"}],["meta",{"property":"og:description","content":"36.1 交互和非交互shell以及脚本 交互shell从tty读取用户输入。shell默认会读取启动文件，显示提示符和打开任务控制等。用户可以和shell交互。 脚本总是运行在非交互的shell上。同样，脚本可以访问它自己的tty，这使得在脚本中依然可以模拟出交互的shell。 #!/bin/bash MY_PROMPT='$ ' while : do echo -n \\"$MY_PROMPT\\" read line eval \\"$line\\" done exit 0 # 这个脚本以及以上解释是由Stéphane Chazelas提供的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"LinuxStory"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"36.1 交互和非交互shell以及脚本\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LinuxStory\\"}]}"]]},"headers":[],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":2.64,"words":792},"filePathRelative":"code/shell/part5/36_1_interactive_and_non-interactive_shells_and_scripts.md","localizedDate":"2023年4月19日","excerpt":"<h1> 36.1 交互和非交互shell以及脚本</h1>\\n<p>交互shell从tty读取用户输入。shell默认会读取启动文件，显示提示符和打开任务控制等。用户可以和shell交互。</p>\\n<p>脚本总是运行在非交互的shell上。同样，脚本可以访问它自己的tty，这使得在脚本中依然可以模拟出交互的shell。</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>#!/bin/bash\\nMY_PROMPT='$ '\\nwhile :\\n    do\\n        echo -n \\"$MY_PROMPT\\"\\n        read line\\n        eval \\"$line\\"\\n    done\\n\\nexit 0\\n\\n# 这个脚本以及以上解释是由Stéphane Chazelas提供的\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"LinuxStory"},"autoDesc":true}`);export{e as data};
