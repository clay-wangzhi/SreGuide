const n=JSON.parse(`{"key":"v-835049c4","path":"/code/shell/part3/09_3_random_generate_random_integer.html","title":"9.3 $RANDOM：生成随机数","lang":"zh-CN","frontmatter":{"author":"LinuxStory","category":"Linux","tag":["Bash"],"description":"9.3 $RANDOM：生成随机数 任何试图通过确定性方法生成随机数的行为都是在犯罪。 —— 约翰·冯·诺伊曼 $RANDOM 是 Bash 中用来生成 0 至 32767 之间随机整数[^1]的一个内置 函数（而非常量）。其不应被用于生成密钥。 样例 9-11. 生成随机数 #!/bin/bash # $RANDOM 每一次调用都会返回一个随机的不同的整数。 # 随机数的标称范围为 0 - 32767（16位有符号整型）。 MAXCOUNT=10 count=1 echo echo \\"$MAXCOUNT random numbers:\\" echo \\"-----------------\\" while [ \\"$count\\" -le $MAXCOUNT ] # 生成 10 ($MAXCOUNT) 个随机整数。 do number=$RANDOM echo $number let \\"count += 1\\" # 增加计数。 done echo \\"-----------------\\" # 如果你需要一个小于指定上界的随机数，可以使用 'modulo' 操作符。 # 该操作符可以返回除法后的余数。 RANGE=500 echo number=$RANDOM let \\"number %= $RANGE\\" # ^^ echo \\"Random number less than $RANGE --- $number\\" echo # 如果你需要生成的随机数大于一个指定的下界， #+ 可以增加一步判断，判别并丢弃所有小于下界的数。 FLOOR=200 number=0 # 初始化 while [ \\"$number\\" -le $FLOOR ] do number=$RANDOM done echo \\"Random number greater than $FLOOR --- $number\\" echo # 现在来看一种可以代替上面循环的更简单的方式，也就是 # let \\"number = $RANDOM + $FLOOR\\" # 该方式可以不使用 while 循环，效率更高。 # 但是，该方法可能会产生一些问题，是什么呢？ # 通过结合上面的两种方法，可以获得一个特定范围内的随机数。 number=0 # 初始化 while [ \\"$number\\" -le $FLOOR ] do number=$RANDOM let \\"number %= $RANGE\\" # 将 $number 缩小至 $RANGE 的范围内。 done echo \\"Random number between $FLOOR and $RANGE --- $number\\" echo # 生成二元选择值，即真(true)或假(false)。 BINARY=2 T=1 number=$RANDOM let \\"number %= $BINARY\\" # 如果使用 let \\"number &gt;&gt;= 14\\" 可以获得更优的随机分布 #+ （除了最低位，其余二进制位都右移）。 if [ \\"$number\\" -eq $T ] then echo \\"TRUE\\" else echo \\"FALSE\\" fi echo # 扔一个骰子。 SPOTS=6 # 模 6 的余数范围为 0 - 5。 # 然后加 1 就可以得到期望的范围 1 - 6。 # 感谢 Paulo Marcel Coelho Aragao 简化了代码。 die1=0 die2=0 # 如果设置 SPOTS=7 就可以不用加 1 得到值。这是不是一种更好的方法，为什么？ # 为了保证公平，独立的投每一个骰子。 let \\"die1 = $RANDOM % $SPOTS + 1\\" # 投第一个骰子。 let \\"die2 = $RANDOM % $SPOTS + 1\\" # 投第二个骰子。 # 哪一种运算符有更高的优先级， #+ 取余(%)还是加法(+)？ let \\"throw = $die1 + $die2\\" echo \\"Throw of the dice = $throw\\" echo exit 0","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/shell/part3/09_3_random_generate_random_integer.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"9.3 $RANDOM：生成随机数"}],["meta",{"property":"og:description","content":"9.3 $RANDOM：生成随机数 任何试图通过确定性方法生成随机数的行为都是在犯罪。 —— 约翰·冯·诺伊曼 $RANDOM 是 Bash 中用来生成 0 至 32767 之间随机整数[^1]的一个内置 函数（而非常量）。其不应被用于生成密钥。 样例 9-11. 生成随机数 #!/bin/bash # $RANDOM 每一次调用都会返回一个随机的不同的整数。 # 随机数的标称范围为 0 - 32767（16位有符号整型）。 MAXCOUNT=10 count=1 echo echo \\"$MAXCOUNT random numbers:\\" echo \\"-----------------\\" while [ \\"$count\\" -le $MAXCOUNT ] # 生成 10 ($MAXCOUNT) 个随机整数。 do number=$RANDOM echo $number let \\"count += 1\\" # 增加计数。 done echo \\"-----------------\\" # 如果你需要一个小于指定上界的随机数，可以使用 'modulo' 操作符。 # 该操作符可以返回除法后的余数。 RANGE=500 echo number=$RANDOM let \\"number %= $RANGE\\" # ^^ echo \\"Random number less than $RANGE --- $number\\" echo # 如果你需要生成的随机数大于一个指定的下界， #+ 可以增加一步判断，判别并丢弃所有小于下界的数。 FLOOR=200 number=0 # 初始化 while [ \\"$number\\" -le $FLOOR ] do number=$RANDOM done echo \\"Random number greater than $FLOOR --- $number\\" echo # 现在来看一种可以代替上面循环的更简单的方式，也就是 # let \\"number = $RANDOM + $FLOOR\\" # 该方式可以不使用 while 循环，效率更高。 # 但是，该方法可能会产生一些问题，是什么呢？ # 通过结合上面的两种方法，可以获得一个特定范围内的随机数。 number=0 # 初始化 while [ \\"$number\\" -le $FLOOR ] do number=$RANDOM let \\"number %= $RANGE\\" # 将 $number 缩小至 $RANGE 的范围内。 done echo \\"Random number between $FLOOR and $RANGE --- $number\\" echo # 生成二元选择值，即真(true)或假(false)。 BINARY=2 T=1 number=$RANDOM let \\"number %= $BINARY\\" # 如果使用 let \\"number &gt;&gt;= 14\\" 可以获得更优的随机分布 #+ （除了最低位，其余二进制位都右移）。 if [ \\"$number\\" -eq $T ] then echo \\"TRUE\\" else echo \\"FALSE\\" fi echo # 扔一个骰子。 SPOTS=6 # 模 6 的余数范围为 0 - 5。 # 然后加 1 就可以得到期望的范围 1 - 6。 # 感谢 Paulo Marcel Coelho Aragao 简化了代码。 die1=0 die2=0 # 如果设置 SPOTS=7 就可以不用加 1 得到值。这是不是一种更好的方法，为什么？ # 为了保证公平，独立的投每一个骰子。 let \\"die1 = $RANDOM % $SPOTS + 1\\" # 投第一个骰子。 let \\"die2 = $RANDOM % $SPOTS + 1\\" # 投第二个骰子。 # 哪一种运算符有更高的优先级， #+ 取余(%)还是加法(+)？ let \\"throw = $die1 + $die2\\" echo \\"Throw of the dice = $throw\\" echo exit 0"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"LinuxStory"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9.3 $RANDOM：生成随机数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LinuxStory\\"}]}"]]},"headers":[{"level":2,"title":"注记","slug":"注记","link":"#注记","children":[]}],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":13.61,"words":4082},"filePathRelative":"code/shell/part3/09_3_random_generate_random_integer.md","localizedDate":"2023年4月19日","excerpt":"<h1> 9.3 <code>$RANDOM</code>：生成随机数</h1>\\n<blockquote>\\n<p>任何试图通过确定性方法生成随机数的行为都是在犯罪。</p>\\n<p>—— 约翰·冯·诺伊曼</p>\\n</blockquote>\\n<p><code>$RANDOM</code> 是 Bash 中用来生成 0 至 32767 之间随机整数[^1]的一个内置 <a href=\\"\\">函数</a>（而非常量）。其<strong>不应</strong>被用于生成密钥。</p>\\n<h4> 样例 9-11. 生成随机数</h4>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash</span>\\n\\n<span class=\\"token comment\\"># $RANDOM 每一次调用都会返回一个随机的不同的整数。</span>\\n<span class=\\"token comment\\"># 随机数的标称范围为 0 - 32767（16位有符号整型）。</span>\\n\\n<span class=\\"token assign-left variable\\">MAXCOUNT</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span>\\n<span class=\\"token assign-left variable\\">count</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>\\n\\n<span class=\\"token builtin class-name\\">echo</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$MAXCOUNT</span> random numbers:\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"-----------------\\"</span>\\n<span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$count</span>\\"</span> <span class=\\"token parameter variable\\">-le</span> <span class=\\"token variable\\">$MAXCOUNT</span> <span class=\\"token punctuation\\">]</span>      <span class=\\"token comment\\"># 生成 10 ($MAXCOUNT) 个随机整数。</span>\\n<span class=\\"token keyword\\">do</span>\\n  <span class=\\"token assign-left variable\\">number</span><span class=\\"token operator\\">=</span><span class=\\"token environment constant\\">$RANDOM</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token variable\\">$number</span>\\n  <span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"count += 1\\"</span>  <span class=\\"token comment\\"># 增加计数。</span>\\n<span class=\\"token keyword\\">done</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"-----------------\\"</span>\\n\\n<span class=\\"token comment\\"># 如果你需要一个小于指定上界的随机数，可以使用 'modulo' 操作符。</span>\\n<span class=\\"token comment\\"># 该操作符可以返回除法后的余数。</span>\\n\\n<span class=\\"token assign-left variable\\">RANGE</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">500</span>\\n\\n<span class=\\"token builtin class-name\\">echo</span>\\n\\n<span class=\\"token assign-left variable\\">number</span><span class=\\"token operator\\">=</span><span class=\\"token environment constant\\">$RANDOM</span>\\n<span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"number %= <span class=\\"token variable\\">$RANGE</span>\\"</span>\\n<span class=\\"token comment\\">#           ^^</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Random number less than <span class=\\"token variable\\">$RANGE</span> --- <span class=\\"token variable\\">$number</span>\\"</span>\\n\\n<span class=\\"token builtin class-name\\">echo</span>\\n\\n\\n\\n<span class=\\"token comment\\">#  如果你需要生成的随机数大于一个指定的下界，</span>\\n<span class=\\"token comment\\">#+ 可以增加一步判断，判别并丢弃所有小于下界的数。</span>\\n\\n<span class=\\"token assign-left variable\\">FLOOR</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">200</span>\\n\\n<span class=\\"token assign-left variable\\">number</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>   <span class=\\"token comment\\"># 初始化</span>\\n<span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$number</span>\\"</span> <span class=\\"token parameter variable\\">-le</span> <span class=\\"token variable\\">$FLOOR</span> <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">do</span>\\n  <span class=\\"token assign-left variable\\">number</span><span class=\\"token operator\\">=</span><span class=\\"token environment constant\\">$RANDOM</span>\\n<span class=\\"token keyword\\">done</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Random number greater than <span class=\\"token variable\\">$FLOOR</span> --- <span class=\\"token variable\\">$number</span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span>\\n\\n   <span class=\\"token comment\\"># 现在来看一种可以代替上面循环的更简单的方式，也就是</span>\\n   <span class=\\"token comment\\">#       let \\"number = $RANDOM + $FLOOR\\"</span>\\n   <span class=\\"token comment\\"># 该方式可以不使用 while 循环，效率更高。</span>\\n   <span class=\\"token comment\\"># 但是，该方法可能会产生一些问题，是什么呢？</span>\\n\\n\\n\\n<span class=\\"token comment\\"># 通过结合上面的两种方法，可以获得一个特定范围内的随机数。</span>\\n<span class=\\"token assign-left variable\\">number</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>   <span class=\\"token comment\\"># 初始化</span>\\n<span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$number</span>\\"</span> <span class=\\"token parameter variable\\">-le</span> <span class=\\"token variable\\">$FLOOR</span> <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">do</span>\\n  <span class=\\"token assign-left variable\\">number</span><span class=\\"token operator\\">=</span><span class=\\"token environment constant\\">$RANDOM</span>\\n  <span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"number %= <span class=\\"token variable\\">$RANGE</span>\\"</span>  <span class=\\"token comment\\"># 将 $number 缩小至 $RANGE 的范围内。</span>\\n<span class=\\"token keyword\\">done</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Random number between <span class=\\"token variable\\">$FLOOR</span> and <span class=\\"token variable\\">$RANGE</span> --- <span class=\\"token variable\\">$number</span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span>\\n\\n\\n\\n<span class=\\"token comment\\"># 生成二元选择值，即真(true)或假(false)。</span>\\n<span class=\\"token assign-left variable\\">BINARY</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span>\\n<span class=\\"token assign-left variable\\">T</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>\\n<span class=\\"token assign-left variable\\">number</span><span class=\\"token operator\\">=</span><span class=\\"token environment constant\\">$RANDOM</span>\\n\\n<span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"number %= <span class=\\"token variable\\">$BINARY</span>\\"</span>\\n<span class=\\"token comment\\">#  如果使用    let \\"number &gt;&gt;= 14\\"    可以获得更优的随机分布</span>\\n<span class=\\"token comment\\">#+ （除了最低位，其余二进制位都右移）。</span>\\n<span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">$number</span>\\"</span> <span class=\\"token parameter variable\\">-eq</span> <span class=\\"token variable\\">$T</span> <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">then</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"TRUE\\"</span>\\n<span class=\\"token keyword\\">else</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"FALSE\\"</span>\\n<span class=\\"token keyword\\">fi</span>\\n\\n<span class=\\"token builtin class-name\\">echo</span>\\n\\n\\n<span class=\\"token comment\\"># 扔一个骰子。</span>\\n<span class=\\"token assign-left variable\\">SPOTS</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">6</span>   <span class=\\"token comment\\"># 模 6 的余数范围为 0 - 5。</span>\\n          <span class=\\"token comment\\"># 然后加 1 就可以得到期望的范围 1 - 6。</span>\\n          <span class=\\"token comment\\"># 感谢 Paulo Marcel Coelho Aragao 简化了代码。</span>\\n<span class=\\"token assign-left variable\\">die1</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n<span class=\\"token assign-left variable\\">die2</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span>\\n<span class=\\"token comment\\"># 如果设置 SPOTS=7 就可以不用加 1 得到值。这是不是一种更好的方法，为什么？</span>\\n\\n<span class=\\"token comment\\"># 为了保证公平，独立的投每一个骰子。</span>\\n\\n    <span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"die1 = <span class=\\"token environment constant\\">$RANDOM</span> % <span class=\\"token variable\\">$SPOTS</span> + 1\\"</span> <span class=\\"token comment\\"># 投第一个骰子。</span>\\n    <span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"die2 = <span class=\\"token environment constant\\">$RANDOM</span> % <span class=\\"token variable\\">$SPOTS</span> + 1\\"</span> <span class=\\"token comment\\"># 投第二个骰子。</span>\\n    <span class=\\"token comment\\">#  哪一种运算符有更高的优先级，</span>\\n    <span class=\\"token comment\\">#+ 取余(%)还是加法(+)？</span>\\n\\n\\n<span class=\\"token builtin class-name\\">let</span> <span class=\\"token string\\">\\"throw = <span class=\\"token variable\\">$die1</span> + <span class=\\"token variable\\">$die2</span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Throw of the dice = <span class=\\"token variable\\">$throw</span>\\"</span>\\n<span class=\\"token builtin class-name\\">echo</span>\\n\\n\\n<span class=\\"token builtin class-name\\">exit</span> <span class=\\"token number\\">0</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"LinuxStory"},"autoDesc":true}`);export{n as data};
