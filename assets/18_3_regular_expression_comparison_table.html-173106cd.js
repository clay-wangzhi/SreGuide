import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,e as i}from"./app-db2140e1.js";const e={},s=i(`<h1 id="_18-3-正则表达式对照表" tabindex="-1"><a class="header-anchor" href="#_18-3-正则表达式对照表" aria-hidden="true">#</a> 18.3 正则表达式对照表</h1><p>正则表达式分为三类（man grep可以看到，分别是basic RegExs，extended RegExs，perl RegExs）</p><h2 id="正则表达式分类" tabindex="-1"><a class="header-anchor" href="#正则表达式分类" aria-hidden="true">#</a> 正则表达式分类：</h2><ul><li>基本的正则表达式（Basic Regular Expression 又叫 Basic RegEx 简称 BREs）</li><li>扩展的正则表达式（Extended Regular Expression 又叫 Extended RegEx 简称 EREs）</li><li>Perl 的正则表达式（Perl Regular Expression 又叫 Perl RegEx 简称 PREs）</li></ul><h2 id="linux-中常用文本工具与正则表达式的关系" tabindex="-1"><a class="header-anchor" href="#linux-中常用文本工具与正则表达式的关系" aria-hidden="true">#</a> Linux 中常用文本工具与正则表达式的关系</h2><ul><li><p>grep 支持：BREs、EREs、PREs 正则表达式 grep 指令后不跟任何参数，则表示要使用 ”BREs“ grep 指令后跟 ”-E&quot; 参数，则表示要使用 “EREs“ grep 指令后跟 “-P&quot; 参数，则表示要使用 “PREs&quot;</p></li><li><p>egrep 支持：EREs、PREs 正则表达式 egrep 指令后不跟任何参数，则表示要使用 “EREs” egrep 指令后跟 “-P&quot; 参数，则表示要使用 “PREs&quot;</p></li><li><p>sed 正则表达式特点 sed 文本工具支持：BREs、EREs sed 指令默认是使用&quot;BREs&quot; sed 命令参数 “-r ” ，则表示要使用“EREs&quot;</p></li><li><p>Awk（gawk）正则表达式特点 Awk 文本工具支持：EREs awk 指令默认是使用 “EREs&quot;</p></li></ul><h2 id="正则表示式对照表" tabindex="-1"><a class="header-anchor" href="#正则表示式对照表" aria-hidden="true">#</a> 正则表示式对照表</h2><table><thead><tr><th>字符</th><th>说明</th><th>Basic RegEx</th><th>Extended RegEx</th><th>Python RegEx</th><th>Perl regEx</th></tr></thead><tbody><tr><td>转义</td><td></td><td>\\</td><td>\\</td><td>\\</td><td>\\</td></tr><tr><td>^</td><td>匹配行首，例如&#39;^dog&#39;匹配以字符串dog开头的行（注意：awk 指令中，&#39;^&#39;则是匹配字符串的开始）</td><td>^</td><td>^</td><td>^</td><td>^</td></tr><tr><td>$</td><td>匹配行尾</td><td>$</td><td>$</td><td>$</td><td>$</td></tr><tr><td>^$</td><td>匹配空行</td><td>^$</td><td>^$</td><td>^$</td><td>^$</td></tr><tr><td>^string$</td><td>匹配行，例如：&#39;^dog$&#39;匹配只含一个字符串 dog 的行</td><td>^string$</td><td>^string$</td><td>^string$</td><td>^string$</td></tr><tr><td>&lt;</td><td>匹配单词，例如：&#39;&lt;frog&#39; （等价于&#39;\\bfrog&#39;），匹配以 frog 开头的单词</td><td>&lt;</td><td>&lt;</td><td>不支持</td><td>不支持（但可以使用\\b来匹配单词，例如：&#39;\\bfrog&#39;）</td></tr><tr><td>&gt;</td><td>匹配单词，例如：&#39;frog&gt;&#39;（等价于&#39;frog\\b &#39;），匹配以 frog 结尾的单词</td><td>&gt;</td><td>&gt;</td><td>不支持</td><td>不支持（但可以使用\\b来匹配单词，例如：&#39;frog\\b&#39;）</td></tr><tr><td>&lt;x&gt;</td><td>匹配一个单词或者一个特定字符，例如：&#39;&lt;frog&gt;&#39;（等价于&#39;\\bfrog\\b&#39;）、&#39;&lt;G&gt;&#39;</td><td>&lt;x&gt;</td><td>&lt;x&gt;</td><td>不支持</td><td>不支持（但可以使用\\b来匹配单词，例如：&#39;\\bfrog\\b&#39;</td></tr><tr><td>()</td><td>匹配表达式，例如：不支持&#39;（frog）&#39;</td><td>不支持（但可以使用，如：dog</td><td>()</td><td>()</td><td>()</td></tr><tr><td></td><td>匹配表达式，例如：不支持&#39;（frog）&#39;</td><td></td><td>不支持（同())</td><td>不支持（同())</td><td>不支持（同())</td></tr><tr><td>？</td><td>匹配前面的子表达式 0 次或 1 次（等价于{0,1}），例如：where(is)?能匹配&quot;where&quot; 以及&quot;whereis&quot;</td><td>不支持（同?)</td><td>？</td><td>？</td><td>？</td></tr><tr><td>?</td><td>匹配前面的子表达式 0 次或 1 次（等价于&#39;{0,1}&#39;），例如：&#39;whereis? &#39;能匹配 &quot;where&quot;以及&quot;whereis&quot;</td><td>?</td><td>不支持（同?)</td><td>不支持（同?)</td><td>不支持（同?)</td></tr><tr><td>?</td><td>当该字符紧跟在任何一个其他限制符（*, +, ?, {n},{n,}, {n,m}） 后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串 &quot;oooo&quot;，&#39;o+?&#39; 将匹配单个&quot;o&quot;，而 &#39;o+&#39; 将匹配所有 &#39;o&#39;</td><td>不支持</td><td>不支持</td><td>不支持</td><td>不支持</td></tr><tr><td>.</td><td>匹配除换行符（&#39;\\n&#39;）之外的任意单个字符（注意：awk 指令中的句点能匹配换行符）</td><td>.</td><td>.（如果要匹配包括“\\n”在内的任何一个字符，请使用：&#39;(^$)|（.）</td><td>.</td><td>.（如果要匹配包括“\\n”在内的任何一个字符，请使用：&#39; [.\\n] &#39;</td></tr><tr><td>*</td><td>匹配前面的子表达式 0 次或多次（等价于{0, }），例如：zo* 能匹配 &quot;z&quot;以及 &quot;zoo&quot;</td><td>*</td><td>*</td><td>*</td><td>*</td></tr><tr><td>+</td><td>匹配前面的子表达式 1 次或多次（等价于&#39;{1, }&#39;），例如：&#39;whereis+ &#39;能匹配 &quot;whereis&quot;以及&quot;whereisis&quot;</td><td>+</td><td>不支持（同+)</td><td>不支持（同+)</td><td>不支持（同+)</td></tr><tr><td>+</td><td>匹配前面的子表达式 1 次或多次（等价于{1, }），例如：zo+能匹配 &quot;zo&quot;以及 &quot;zoo&quot;，但不能匹配 &quot;z&quot;</td><td>不支持（同+)</td><td>+</td><td>+</td><td>+</td></tr><tr><td>{n}</td><td>n 必须是一个 0 或者正整数，匹配子表达式 n 次，例如：zo{2}能匹配</td><td>不支持（同{n})</td><td>{n}</td><td>{n}</td><td>{n}</td></tr><tr><td>{n,}</td><td>&quot;zooz&quot;，但不能匹配 &quot;Bob&quot;n 必须是一个 0 或者正整数，匹配子表达式大于等于 n次，例如：go{2,}</td><td>不支持（同{n,})</td><td>{n,}</td><td>{n,}</td><td>{n,}</td></tr><tr><td>{n,m}</td><td>能匹配 &quot;good&quot;，但不能匹配 godm 和 n 均为非负整数，其中 n &lt;= m，最少匹配 n 次且最多匹配 m 次 ，例如：o{1,3}将配&quot;fooooood&quot; 中的前三个 o（请注意在逗号和两个数之间不能有空格）</td><td>不支持（同{n,m})</td><td>{n,m}</td><td>{n,m}</td><td>{n,m}</td></tr><tr><td>x|y</td><td>匹配 x 或 y，例如： 不支持&#39;z|（food）&#39; 能匹配 &quot;z&quot; 或&quot;food&quot;；&#39;（z|f）ood&#39; 则匹配&quot;zood&quot; 或 &quot;food&quot;</td><td>不支持（同x|y)</td><td>x|y</td><td>x|y</td><td>x|y</td></tr><tr><td>[0-9]</td><td>匹配从 0 到 9 中的任意一个数字字符（注意：要写成递增）</td><td>[0-9]</td><td>[0-9]</td><td>[0-9]</td><td>[0-9]</td></tr><tr><td>[xyz]</td><td>字符集合，匹配所包含的任意一个字符，例如：&#39;[abc]&#39;可以匹配&quot;lay&quot; 中的 &#39;a&#39;（注意：如果元字符，例如：. *等，它们被放在[ ]中，那么它们将变成一个普通字符）</td><td>[xyz]</td><td>[xyz]</td><td>[xyz]</td><td>[xyz]</td></tr><tr><td>[^xyz]</td><td>负值字符集合，匹配未包含的任意一个字符（注意：不包括换行符），例如：&#39;[^abc]&#39; 可以匹配 &quot;Lay&quot; 中的&#39;L&#39;（注意：[^xyz]在awk 指令中则是匹配未包含的任意一个字符+换行符）</td><td>[^xyz]</td><td>[^xyz]</td><td>[^xyz]</td><td>[^xyz]</td></tr><tr><td>[A-Za-z]</td><td>匹配大写字母或者小写字母中的任意一个字符（注意：要写成递增）</td><td>[A-Za-z]</td><td>[A-Za-z]</td><td>[A-Za-z]</td><td>[A-Za-z]</td></tr><tr><td>[^A-Za-z]</td><td>匹配除了大写与小写字母之外的任意一个字符（注意：写成递增）</td><td>[^A-Za-z]</td><td>[^A-Za-z]</td><td>[^A-Za-z]</td><td>[^A-Za-z]</td></tr><tr><td>\\d</td><td>匹配从 0 到 9 中的任意一个数字字符（等价于 [0-9]）</td><td>不支持</td><td>不支持</td><td>\\d</td><td>\\d</td></tr><tr><td>\\D</td><td>匹配非数字字符（等价于 [^0-9]）</td><td>不支持</td><td>不支持</td><td>\\D</td><td>\\D</td></tr><tr><td>\\S</td><td>匹配任何非空白字符（等价于[^\\f\\n\\r\\t\\v]）</td><td>不支持</td><td>不支持</td><td>\\S</td><td>\\S</td></tr><tr><td>\\s</td><td>匹配任何空白字符，包括空格、制表符、换页符等等（等价于[ \\f\\n\\r\\t\\v]）</td><td>不支持</td><td>不支持</td><td>\\s</td><td>\\s</td></tr><tr><td>\\W</td><td>匹配任何非单词字符 (等价于[^A-Za-z0-9_])</td><td>\\W</td><td>\\W</td><td>\\W</td><td>\\W</td></tr><tr><td>\\w</td><td>匹配包括下划线的任何单词字符（等价于[A-Za-z0-9_]）</td><td>\\w</td><td>\\w</td><td>\\w</td><td>\\w</td></tr><tr><td>\\B</td><td>匹配非单词边界，例如：&#39;er\\B&#39; 能匹配 &quot;verb&quot; 中的&#39;er&#39;，但不能匹配&quot;never&quot; 中的&#39;er&#39;</td><td>\\B</td><td>\\B</td><td>\\B</td><td>\\B</td></tr><tr><td>\\b</td><td>匹配一个单词边界，也就是指单词和空格间的位置，例如： &#39;er\\b&#39; 可以匹配&quot;never&quot; 中的 &#39;er&#39;，但不能匹配 &quot;verb&quot; 中的&#39;er&#39;</td><td>\\b</td><td>\\b</td><td>\\b</td><td>\\b</td></tr><tr><td>\\t</td><td>匹配一个横向制表符（等价于 \\x09和 \\cI）</td><td>不支持</td><td>不支持</td><td>\\t</td><td>\\t</td></tr><tr><td>\\v</td><td>匹配一个垂直制表符（等价于 \\x0b和 \\cK）</td><td>不支持</td><td>不支持</td><td>\\v</td><td>\\v</td></tr><tr><td>\\n</td><td>匹配一个换行符（等价于 \\x0a 和\\cJ）</td><td>不支持</td><td>不支持</td><td>\\n</td><td>\\n</td></tr><tr><td>\\f</td><td>匹配一个换页符（等价于\\x0c 和\\cL）</td><td>不支持</td><td>不支持</td><td>\\f</td><td>\\f</td></tr><tr><td>\\r</td><td>匹配一个回车符（等价于 \\x0d 和\\cM）</td><td>不支持</td><td>不支持</td><td>\\r</td><td>\\r</td></tr><tr><td>\\</td><td>匹配转义字符本身&quot;&quot;</td><td>\\</td><td>\\</td><td>\\</td><td>\\</td></tr><tr><td>\\cx</td><td>匹配由 x 指明的控制字符，例如：\\cM匹配一个Control-M 或回车符，x 的值必须为A-Z 或 a-z 之一，否则，将 c 视为一个原义的 &#39;c&#39; 字符</td><td>不支持</td><td>不支持</td><td></td><td>\\cx</td></tr><tr><td>\\xn</td><td>匹配 n，其中 n 为十六进制转义值。十六进制转义值必须为确定的两个数字长，例如：&#39;\\x41&#39; 匹配 &quot;A&quot;。&#39;\\x041&#39; 则等价于&#39;\\x04&#39; &amp; &quot;1&quot;。正则表达式中可以使用 ASCII 编码</td><td>不支持</td><td>不支持</td><td></td><td>\\xn</td></tr><tr><td>\\num</td><td>匹配 num，其中 num是一个正整数。表示对所获取的匹配的引用</td><td>不支持</td><td>\\num</td><td>\\num</td><td></td></tr><tr><td>[:alnum:]</td><td>匹配任何一个字母或数字（[A-Za-z0-9]），例如：&#39;[[:alnum:]] &#39;</td><td>[:alnum:]</td><td>[:alnum:]</td><td>[:alnum:]</td><td>[:alnum:]</td></tr><tr><td>[:alpha:]</td><td>匹配任何一个字母（[A－Za－z]）， 例如：&#39; [[:alpha:]] &#39;</td><td>[:alpha:]</td><td>[:alpha:]</td><td>[:alpha:]</td><td>[:alpha:]</td></tr><tr><td>[:digit:]</td><td>匹配任何一个数字（[0-9]），例如：&#39;[[:digit:]] &#39;</td><td>[:digit:]</td><td>[:digit:]</td><td>[:digit:]</td><td>[:digit:]</td></tr><tr><td>[:lower:]</td><td>匹配任何一个小写字母（[a-z]）， 例如：&#39; [[:lower:]] &#39;</td><td>[:lower:]</td><td>[:lower:]</td><td>[:lower:]</td><td>[:lower:]</td></tr><tr><td>[:upper:]</td><td>匹配任何一个大写字母（[A-Z]）</td><td>[:upper:]</td><td>[:upper:]</td><td>[:upper:]</td><td>[:upper:]</td></tr><tr><td>[:space:]</td><td>任何一个空白字符： 支持制表符、空格，例如：&#39; [[:space:]] &#39;</td><td>[:space:]</td><td>[:space:]</td><td>[:space:]</td><td>[:space:]</td></tr><tr><td>[:blank:]</td><td>空格和制表符（横向和纵向），例如：&#39;[[:blank:]]&#39;ó&#39;[\\s\\t\\v]&#39;</td><td>[:blank:]</td><td>[:blank:]</td><td>[:blank:]</td><td>[:blank:]</td></tr><tr><td>[:graph:]</td><td>任何一个可以看得见的且可以打印的字符（注意：不包括空格和换行符等），例如：&#39;[[:graph:]] &#39;</td><td>[:graph:]</td><td>[:graph:]</td><td>[:graph:]</td><td>[:graph:]</td></tr><tr><td>[:print:]</td><td>任何一个可以打印的字符（注意：不包括：[:cntrl:]、字符串结束符&#39;\\0&#39;、EOF 文件结束符（-1）， 但包括空格符号），例如：&#39;[[:print:]] &#39;</td><td>[:print:]</td><td>[:print:]</td><td>[:print:]</td><td>[:print:]</td></tr><tr><td>[:cntrl:]</td><td>任何一个控制字符（ASCII 字符集中的前 32 个字符，即：用十进制表示为从 0 到31，例如：换行符、制表符等等），例如：&#39; [[:cntrl:]]&#39;</td><td>[:cntrl:]</td><td>[:cntrl:]</td><td>[:cntrl:]</td><td>[:cntrl:]</td></tr><tr><td>[:punct:]</td><td>任何一个标点符号（不包括：[:alnum:]、[:cntrl:]、[:space:]这些字符集）</td><td>[:punct:]</td><td>[:punct:]</td><td>[:punct:]</td><td>[:punct:]</td></tr><tr><td>[:xdigit:]</td><td>任何一个十六进制数（即：0-9，a-f，A-F）</td><td>[:xdigit:]</td><td>[:xdigit:]</td><td>[:xdigit:]</td><td>[:xdigit:]</td></tr></tbody></table><h2 id="常用正则表达式" tabindex="-1"><a class="header-anchor" href="#常用正则表达式" aria-hidden="true">#</a> 常用正则表达式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.验证用户名和密码：（&quot;^[a-zA-Z]\\w{5,15}$&quot;）正确格式：&quot;[A-Z][a-z]_[0-9]&quot;组成,并且第一个字必须为字母6~16位；
2.验证电话号码：（&quot;^(\\d{3,4}-)\\d{7,8}$&quot;）正确格式：xxx/xxxx-xxxxxxx/xxxxxxxx；
3.验证手机号码：&quot;^1[3|4|5|7|8][0-9]\\\\d{8}$&quot;；
4.验证身份证号（15位或18位数字）：&quot;\\d{14}[[0-9],0-9xX]&quot;；
5.验证Email地址：(&quot;^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$&quot;)；
6.只能输入由数字和26个英文字母组成的字符串：(&quot;^[A-Za-z0-9]+$&quot;)；
7.整数或者小数：^[0-9]+([.][0-9]+){0,1}$
8.只能输入数字：&quot;^[0-9]*$&quot;。
9.只能输入n位的数字：&quot;^\\d{n}$&quot;。
10.只能输入至少n位的数字：&quot;^\\d{n,}$&quot;。
11.只能输入m~n位的数字：&quot;^\\d{m,n}$&quot;。
12.只能输入零和非零开头的数字：&quot;^(0|[1-9][0-9]*)$&quot;。
13.只能输入有两位小数的正实数：&quot;^[0-9]+(\\.[0-9]{2})?$&quot;。
14.只能输入有1~3位小数的正实数：&quot;^[0-9]+(\\.[0-9]{1,3})?$&quot;。
15.只能输入非零的正整数：&quot;^\\+?[1-9][0-9]*$&quot;。
16.只能输入非零的负整数：&quot;^\\-[1-9][0-9]*$&quot;。
17.只能输入长度为3的字符：&quot;^.{3}$&quot;。
18.只能输入由26个英文字母组成的字符串：&quot;^[A-Za-z]+$&quot;。
19.只能输入由26个大写英文字母组成的字符串：&quot;^[A-Z]+$&quot;。
20.只能输入由26个小写英文字母组成的字符串：&quot;^[a-z]+$&quot;。
21.验证是否含有^%&amp;&#39;,;=?$\\&quot;等字符：&quot;[%&amp;&#39;,;=?$\\\\^]+&quot;。
22.验证一年的12个月：&quot;^(0?[1-9]|1[0-2])$&quot;正确格式为：&quot;01&quot;～&quot;09&quot;和&quot;10&quot;～&quot;12&quot;。
23.验证一个月的31天：&quot;^((0?[1-9])|((1|2)[0-9])|30|31)$&quot;正确格式为；&quot;01&quot;～&quot;09&quot;、&quot;10&quot;～&quot;29&quot;和“30”~“31”。
24.获取日期正则表达式：\\\\d{4}[年|\\-|\\.]\\d{\\1-\\12}[月|\\-|\\.]\\d{\\1-\\31}日?评注：可用来匹配大多数年月日信息。
25.匹配空白行的正则表达式：\\n\\s*\\r评注：可以用来删除空白行
26匹配HTML标记的正则表达式：&lt;(\\S*?)\\[^&gt;]*&gt;.*?&lt;/&gt;|&lt;.*? /&gt;评注：网上流传的版本太糟糕，上面这个也仅仅能匹配部分，对于复杂的嵌套标记依旧无能为力
27.匹配首尾空白字符的正则表达式：^\\s*|\\s*$评注：可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式
28.匹配网址URL的正则表达式：[a-zA-z]+://\\[^\\s]*评注：网上流传的版本功能很有限，上面这个基本可以满足需求
29.匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$评注：表单验证时很实用
30.匹配腾讯QQ号：[1-9][0-9]{4,}评注：腾讯QQ号从10 000 开始
31.匹配中国邮政编码：[1-9]\\\\d{5}(?!\\d)评注：中国邮政编码为6位数字
32.匹配ip地址：([0-9]{1,3}\\.){3}[0-9]。评注：提取ip地址时有用
33.匹配MAC地址：([A-Fa-f0-9]{2}\\:){5}[A-Fa-f0-9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一、校验数字的表达式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


• 数字：^[0-9]*$

• n位的数字：^d{n}$

• 至少n位的数字：^d{n,}$

• m-n位的数字：^d{m,n}$

• 零和非零开头的数字：^(0|[1-9][0-9]*)$

• 非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(.[0-9]{1,2})?$

• 带1-2位小数的正数或负数：^(-)?d+(.d{1,2})?$

• 正数、负数、和小数：^(-|+)?d+(.d+)?$

• 有两位小数的正实数：^[0-9]+(.[0-9]{2})?$

• 有1~3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$

• 非零的正整数：^[1-9]d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^+?[1-9][0-9]*$

• 非零的负整数：^-[1-9][]0-9″*$ 或 ^-[1-9]d*$

• 非负整数：^d+$ 或 ^[1-9]d*|0$

• 非正整数：^-[1-9]d*|0$ 或 ^((-d+)|(0+))$

• 非负浮点数：^d+(.d+)?$ 或 ^[1-9]d*.d*|0.d*[1-9]d*|0?.0+|0$

• 非正浮点数：^((-d+(.d+)?)|(0+(.0+)?))$ 或 ^(-([1-9]d*.d*|0.d*[1-9]d*))|0?.0+|0$

• 正浮点数：^[1-9]d*.d*|0.d*[1-9]d*$ 或 ^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$

• 负浮点数：^-([1-9]d*.d*|0.d*[1-9]d*)$ 或 ^(-(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)))$

• 浮点数：^(-?d+)(.d+)?$ 或 ^-?([1-9]d*.d*|0.d*[1-9]d*|0?.0+|0)$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、校验字符的表达式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>• 汉字：^[一-龥]{0,}$

• 英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$

• 长度为3-20的所有字符：^.{3,20}$

• 由26个英文字母组成的字符串：^[A-Za-z]+$

• 由26个大写英文字母组成的字符串：^[A-Z]+$

• 由26个小写英文字母组成的字符串：^[a-z]+$

• 由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$

• 由数字、26个英文字母或者下划线组成的字符串：^w+$ 或 ^w{3,20}$

• 中文、英文、数字包括下划线：^[一-龥A-Za-z0-9_]+$

• 中文、英文、数字但不包括下划线等符号：^[一-龥A-Za-z0-9]+$ 或 ^[一-龥A-Za-z0-9]{2,20}$

• 可以输入含有^%&amp;’,;=?$”等字符：[^%&amp;&#39;,;=?$&quot;]+

• 禁止输入含有~的字符：[^~&quot;]+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三、特殊需求表达式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>


• Email地址：^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$

• 域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?

• InternetURL：[a-zA-z]+://[^s]* 或 ^http://([w-]+.)+[w-]+(/[w-./?%&amp;=]*)?$

• 手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])d{8}$

• 电话号码(“XXX-XXXXXXX”、”XXXX-XXXXXXXX”、”XXX-XXXXXXX”、”XXX-XXXXXXXX”、”XXXXXXX”和”XXXXXXXX)：^($$d{3,4}-)|d{3.4}-)?d{7,8}$

• 国内电话号码(0511-4405222、021-87888822)：d{3}-d{8}|d{4}-d{7}

• 身份证号(15位、18位数字)：^d{15}|d{18}$

• 短身份证号码(数字、字母x结尾)：^([0-9]){7,18}(x|X)?$ 或 ^d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$

• 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$

• 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]w{5,17}$

• 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$

• 日期格式：^d{4}-d{1,2}-d{1,2}

• 一年的12个月(01～09和1～12)：^(0?[1-9]|1[0-2])$

• 一个月的31天(01～09和1～31)：^((0?[1-9])|((1|2)[0-9])|30|31)$

• 钱的输入格式：

• 有四种钱的表示形式我们可以接受:”10000.00″ 和 “10,000.00″, 和没有 “分” 的 “10000″ 和 “10,000″：^[1-9][0-9]*$

• 这表示任意一个不以0开头的数字，但是，这也意味着一个字符”0″不通过，所以我们采用下面的形式：^(0|[1-9][0-9]*)$

• 一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：^(0|-?[1-9][0-9]*)$

• 这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉，因为钱总不能是负的吧.下面我们要加的是说明可能的小数部分：^[0-9]+(.[0-9]+)?$

• 必须说明的是，小数点后面至少应该有1位数，所以”10.”是不通过的，但是 “10″ 和 “10.2″ 是通过的：^[0-9]+(.[0-9]{2})?$

• 这样我们规定小数点后面必须有两位，如果你认为太苛刻了，可以这样：^[0-9]+(.[0-9]{1,2})?$

• 这样就允许用户只写一位小数。下面我们该考虑数字中的逗号了，我们可以这样：^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$

• 1到3个数字，后面跟着任意个 逗号+3个数字，逗号成为可选，而不是必须：^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$

• 备注：这就是最终结果了，别忘了”+”可以用”*”替代。如果你觉得空字符串也可以接受的话(奇怪，为什么?)最后，别忘了在用函数时去掉去掉那个反斜杠，一般的错误都在这里

• xml文件：^([a-zA-Z]+-?)+[a-zA-Z0-9]+.[x|X][m|M][l|L]$

• 中文字符的正则表达式：[一-龥]

• 双字节字符：[^-ÿ] (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))

• 空白行的正则表达式：s* (可以用来删除空白行)

• HTML标记的正则表达式：&lt;(S*?)[^&gt;]*&gt;.*?&lt;/&gt;|&lt;.*? /&gt; (网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)

• 首尾空白字符的正则表达式：^s*|s*$或(^s*)|(s*$) (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)

• 腾讯QQ号：[1-9][0-9]{4,} (腾讯QQ号从10000开始)

• 中国邮政编码：[1-9]d{5}(?!d) (中国邮政编码为6位数字)

• IP地址：d+.d+.d+.d+ (提取IP地址时有用)

• IP地址：((?:(?:25[0-5]|2[0-4]d|[01]?d?d).){3}(?:25[0-5]|2[0-4]d|[01]?d?d))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[s];function r(a,u){return t(),n("div",null,l)}const o=d(e,[["render",r],["__file","18_3_regular_expression_comparison_table.html.vue"]]);export{o as default};
