<template><h1 id="_20-i-o-重定向" tabindex="-1"><a class="header-anchor" href="#_20-i-o-重定向" aria-hidden="true">#</a> 20 I/O 重定向</h1>
<p>目录</p>
<ul>
<li><a href="http://tldp.org/LDP/abs/html/x17974.html" target="_blank" rel="noopener noreferrer">20.1 使用 exec<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/redircb.html" target="_blank" rel="noopener noreferrer">20.2 重定向代码块<ExternalLinkIcon/></a></li>
<li><a href="http://tldp.org/LDP/abs/html/redirapps.html" target="_blank" rel="noopener noreferrer">20.3 应用程序<ExternalLinkIcon/></a></li>
</ul>
<p>有三个默认打开的文件<a href="http://tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17884" target="_blank" rel="noopener noreferrer">[1]<ExternalLinkIcon/></a>, <code>stdin</code>(标准输入，键盘),<code>stdout</code>(标准输出， 屏幕)和 <code>stderr</code>(标准错误，屏幕上输出的错误信息)。这些和任何其他打开的文件都可以被重定向。重定向仅仅意味着捕获输出文件，命令，脚本，甚至是一个脚本的代码块(<a href="http://tldp.org/LDP/abs/html/special-chars.html#EX8" target="_blank" rel="noopener noreferrer">样例 3-1<ExternalLinkIcon/></a>)和(<a href="http://tldp.org/LDP/abs/html/special-chars.html#EX8" target="_blank" rel="noopener noreferrer">样例 3-2<ExternalLinkIcon/></a>) 作为另一个文件，命令，程序或脚本的输入。</p>
<p>每个打开的文件都有特定的文件描述符。<a href="http://tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17894" target="_blank" rel="noopener noreferrer">[2]<ExternalLinkIcon/></a>,而 <code>stdin</code>，<code>stdout</code>，<code>stderr</code> 的文件描述符分别为 0,1,2。当然了，还有附件的文件描述符 3 - 9。有时候为<code>stdin</code>，<code>stdout</code>，<code>stderr</code>临时性的复制链接分配这些附加的文件描述符会非常有用.<a href="http://tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17906" target="_blank" rel="noopener noreferrer">[3]<ExternalLinkIcon/></a>。这简化了复杂重定向和重组后的恢复(见<a href="http://tldp.org/LDP/abs/html/x17974.html#REDIR1" target="_blank" rel="noopener noreferrer">样例 20-1<ExternalLinkIcon/></a>)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   COMMAND_OUTPUT >
      # 重定向标准输出到一个文件.
      # 如果文件不存在则创建，否则覆盖.

      ls -lR > dir-tree.list
      # 创建了一个包含目录树列表的文件.

   : > filename
      # ">" 清空了文件.
      # 如果文件不存在，则创建了个空文件 (效果类似 'touch').
      # ":" 是个虚拟占位符, 不会有输出.

   > filename    
      # ">" 清空了文件.
      # 如果文件不存在，则创建了个空文件 (效果类似 'touch').
      # (结果和上述的 ": >" 一样， 但在某些 shell 环境中不能正常运行.)

   COMMAND_OUTPUT >>
      # 重定向标准输出到一个文件.
      # 如果文件不存在则创建，否则新内容在文件末尾追加.


      # 单行重定向命令 (只作用于本身所在的那行):
      # --------------------------------------------------------------------

   1>filename
      # 以覆盖的方式将 标准输出 重定向到文件 "filename."
   1>>filename
      # 以追加的方式将 标准输出 重定向到文件 "filename."
   2>filename
      # 以覆盖的方式将 标准错误 重定向到文件 "filename."
   2>>filename
      # 以追加的方式将 标准错误 重定向到文件 "filename."
   &amp;>filename
      # 以覆盖的方式将 标准错误 和 标准输出 同时重定向到文件 "filename."
      # 在 bash 4 中才有这个新功能.

   M>N
     # "M" 是个文件描述符, 如果不明确指定，默认为 1.
     # "N" 是个文件名.
     # 文件描述符 "M" 重定向到文件 "N."
   M>&amp;N
     # "M" 是个文件描述符, 如果不设置默认为 1.
     # "N" 是另一个文件描述符.

      #==============================================================================

      # 重定向 标准输出，一次一行.
      LOGFILE=script.log

      echo "This statement is sent to the log file, \"$LOGFILE\"." 1>$LOGFILE
      echo "This statement is appended to \"$LOGFILE\"." 1>>$LOGFILE
      echo "This statement is also appended to \"$LOGFILE\"." 1>>$LOGFILE
      echo "This statement is echoed to stdout, and will not appear in \"$LOGFILE\"."
      # 这些重定向命令在每行结束后自动"重置".



      # 重定向 标准错误，一次一行.
      ERRORFILE=script.errors

      bad_command1 2>$ERRORFILE       #  Error message sent to $ERRORFILE.
      bad_command2 2>>$ERRORFILE      #  Error message appended to $ERRORFILE.
      bad_command3                    #  Error message echoed to stderr,
                                      #+ and does not appear in $ERRORFILE.
      # 这些重定向命令每行结束后会自动“重置”.
	#=======================================================================
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   2>&amp;1
      # 重定向 标准错误 到 标准输出.
      # 错误信息发送到标准输出相同的位置.
        >>filename 2>&amp;1
            bad_command >>filename 2>&amp;1
            # 同时将 标准输出 和 标准错误 追加到文件 "filename" 中 ...
        2>&amp;1 | [command(s)]
            bad_command 2>&amp;1 | awk '{print $5}'   # found
            # 通过管道传递 标准错误.
            # bash 4 中可以将 "2>&amp;1 |" 缩写为 "|&amp;".

   i>&amp;j
      # 重定向文件描述符 i 到 j.
      # 文件描述符 i 指向的文件输出将会重定向到文件描述符 j 指向的文件

   >&amp;j
      # 默认的标准输出 (stdout) 重定向到 j.
      # 所有的标准输出将会重定向到 j 指向的文件.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>   0&lt; FILENAME
    &lt; FILENAME
      # 从文件接收输入.
      # 类似功能命令是 ">", 经常会组合使用.
      #
      # grep search-word &lt;filename


   [j]&lt;>filename
      #  打开并读写文件 "filename" ,
      #+ 并且分配文件描述符 "j".
      #  如果 "filename" 不存在则创建.
      #  如果文件描述符 "j" 未指定, 默认分配文件描述符 0, 标准输入.
      #
      #  这是一个写指定文件位置的应用程序. 
      echo 1234567890 > File    # 写字符串到 "File".
      exec 3&lt;> File             # 打开并分配文件描述符 3 给 "File" .
      read -n 4 &lt;&amp;3             # 读取 4 字符.
      echo -n . >&amp;3             # 写一个小数点.
      exec 3>&amp;-                 # 关闭文件描述符 3.
      cat File                  # ==> 1234.67890
      #  随机访问.



   |
      # 管道.
      # 一般是命令和进程的链接工具.
      # 类似 ">", 但更一般.
      # 在连接命令，脚本，文件和程序方面非常有用.
      cat *.txt | sort | uniq > result-file
      # 所有 .txt 文件输出进行排序并且删除复制行,
      # 最终保存结果到 "result-file".
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>可以用单个命令行表示输入和输出的多个重定向或管道.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>command &lt; input-file > output-file
# 或者等价:
&lt; input-file command > output-file   # 尽管这不标准.

command1 | command2 | command3 > output-file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>更多详情见<a href="http://tldp.org/LDP/abs/html/filearchiv.html#DERPM" target="_blank" rel="noopener noreferrer">样例 16-31<ExternalLinkIcon/></a> and <a href="http://tldp.org/LDP/abs/html/contributed-scripts.html#FIFO" target="_blank" rel="noopener noreferrer">样例 A-14<ExternalLinkIcon/></a>.</p>
<p>多个输出流可以重定向到一个文件.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ls -yz >> command.log 2>&amp;1
#  捕获不合法选项 "yz" 的结果到文件 "command.log."
#  因为 标准错误输出 被重定向到了文件,
#+ 任何错误信息都会在这.

#  注意, 然而, 接下来的这个案例并 "不能" 同样的结果.
ls -yz 2>&amp;1 >> command.log
#  输出一条错误信息，但是不会写入到文件.
#  恰恰的, 命令输出(这个例子里为空)写入到文件, 但错误信息只会在 标准输出 输出.

#  如果同时重定向 标准输出 和 标准错误输出,
#+ 命令的顺序不同会导致不同.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>关闭文件描述符</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>n&lt;&amp;-
	关闭输入文件描述符 n.

0&lt;&amp;-, &lt;&amp;-
	关闭标准输入.

n>&amp;-
	关闭输出文件描述符 n.

1>&amp;-, >&amp;-
	关闭标准输出.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>子进程能继承文件描述符.这就是管道符能工作的原因.通过关闭文件描述符来防止继承 .</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 只重定向到 标准错误 到管道.

exec 3>&amp;1                              # 保存当前 标准输出 "值".

ls -l 2>&amp;1 >&amp;3 3>&amp;- | grep bad 3>&amp;-    # 关闭 'grep' 文件描述符 3 (但不是 'ls').
#              ^^^^   ^^^^
exec 3>&amp;-                              # 现在关闭它.

# 感谢, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>更多关于 I/O 重定向详情见 <a href="http://tldp.org/LDP/abs/html/ioredirintro.html" target="_blank" rel="noopener noreferrer">Appendix F<ExternalLinkIcon/></a>.</p>
<h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4>
<p><a href="http://tldp.org/LDP/abs/html/io-redirection.html#AEN17884" target="_blank" rel="noopener noreferrer">[1]<ExternalLinkIcon/></a>	 在 UNIX 和 Linux 中, 数据流和周边外设(<a href="http://tldp.org/LDP/abs/html/devref1.html#DEVFILEREF" target="_blank" rel="noopener noreferrer">device files<ExternalLinkIcon/></a>) 都被看做文件.</p>
<p><a href="http://tldp.org/LDP/abs/html/io-redirection.html#AEN17894" target="_blank" rel="noopener noreferrer">[2]<ExternalLinkIcon/></a>	 <code>文件描述符</code> 仅仅是操作系统分配的一个可追踪的打开的文件号. 可以认为是一个简化的文件指针. 类似于 C 语言的 <code>文件句柄</code>.</p>
<p><a href="http://tldp.org/LDP/abs/html/io-redirection.html#AEN17906" target="_blank" rel="noopener noreferrer">[3]<ExternalLinkIcon/></a>	当 bash 创建一个子进程的时候使用 <code>文件描述符 5</code> 会有问题. 例如 <a href="http://tldp.org/LDP/abs/html/internal.html#EXECREF" target="_blank" rel="noopener noreferrer">exec<ExternalLinkIcon/></a>, 子进程继承了文件描述符 5 (详情见 Chet Ramey's 归档的 e-mail, <a href="https://groups.google.com/forum/#!topic/gnu.bash.bug/E5Vdqv3tO1w" target="_blank" rel="noopener noreferrer">SUBJECT: RE: File descriptor 5 is held open<ExternalLinkIcon/></a>). 最好将这个文件描述符单独规避.</p>
</template>
