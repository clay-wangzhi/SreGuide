import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as a,b as n,d as e,e as l,a as s}from"./app-fc8cee6e.js";const o={},v=n("h1",{id:"_20-i-o-重定向",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_20-i-o-重定向","aria-hidden":"true"},"#"),e(" 20 I/O 重定向")],-1),u=n("p",null,"目录",-1),c={href:"http://tldp.org/LDP/abs/html/x17974.html",target:"_blank",rel:"noopener noreferrer"},m={href:"http://tldp.org/LDP/abs/html/redircb.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://tldp.org/LDP/abs/html/redirapps.html",target:"_blank",rel:"noopener noreferrer"},h={href:"http://tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17884",target:"_blank",rel:"noopener noreferrer"},p=n("code",null,"stdin",-1),g=n("code",null,"stdout",-1),_=n("code",null,"stderr",-1),q={href:"http://tldp.org/LDP/abs/html/special-chars.html#EX8",target:"_blank",rel:"noopener noreferrer"},f={href:"http://tldp.org/LDP/abs/html/special-chars.html#EX8",target:"_blank",rel:"noopener noreferrer"},E={href:"http://tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17894",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"stdin",-1),L=n("code",null,"stdout",-1),F=n("code",null,"stderr",-1),R=n("code",null,"stdin",-1),I=n("code",null,"stdout",-1),k=n("code",null,"stderr",-1),N={href:"http://tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17906",target:"_blank",rel:"noopener noreferrer"},D={href:"http://tldp.org/LDP/abs/html/x17974.html#REDIR1",target:"_blank",rel:"noopener noreferrer"},O=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   COMMAND_OUTPUT &gt;
      # 重定向标准输出到一个文件.
      # 如果文件不存在则创建，否则覆盖.

      ls -lR &gt; dir-tree.list
      # 创建了一个包含目录树列表的文件.

   : &gt; filename
      # &quot;&gt;&quot; 清空了文件.
      # 如果文件不存在，则创建了个空文件 (效果类似 &#39;touch&#39;).
      # &quot;:&quot; 是个虚拟占位符, 不会有输出.

   &gt; filename    
      # &quot;&gt;&quot; 清空了文件.
      # 如果文件不存在，则创建了个空文件 (效果类似 &#39;touch&#39;).
      # (结果和上述的 &quot;: &gt;&quot; 一样， 但在某些 shell 环境中不能正常运行.)

   COMMAND_OUTPUT &gt;&gt;
      # 重定向标准输出到一个文件.
      # 如果文件不存在则创建，否则新内容在文件末尾追加.


      # 单行重定向命令 (只作用于本身所在的那行):
      # --------------------------------------------------------------------

   1&gt;filename
      # 以覆盖的方式将 标准输出 重定向到文件 &quot;filename.&quot;
   1&gt;&gt;filename
      # 以追加的方式将 标准输出 重定向到文件 &quot;filename.&quot;
   2&gt;filename
      # 以覆盖的方式将 标准错误 重定向到文件 &quot;filename.&quot;
   2&gt;&gt;filename
      # 以追加的方式将 标准错误 重定向到文件 &quot;filename.&quot;
   &amp;&gt;filename
      # 以覆盖的方式将 标准错误 和 标准输出 同时重定向到文件 &quot;filename.&quot;
      # 在 bash 4 中才有这个新功能.

   M&gt;N
     # &quot;M&quot; 是个文件描述符, 如果不明确指定，默认为 1.
     # &quot;N&quot; 是个文件名.
     # 文件描述符 &quot;M&quot; 重定向到文件 &quot;N.&quot;
   M&gt;&amp;N
     # &quot;M&quot; 是个文件描述符, 如果不设置默认为 1.
     # &quot;N&quot; 是另一个文件描述符.

      #==============================================================================

      # 重定向 标准输出，一次一行.
      LOGFILE=script.log

      echo &quot;This statement is sent to the log file, \\&quot;$LOGFILE\\&quot;.&quot; 1&gt;$LOGFILE
      echo &quot;This statement is appended to \\&quot;$LOGFILE\\&quot;.&quot; 1&gt;&gt;$LOGFILE
      echo &quot;This statement is also appended to \\&quot;$LOGFILE\\&quot;.&quot; 1&gt;&gt;$LOGFILE
      echo &quot;This statement is echoed to stdout, and will not appear in \\&quot;$LOGFILE\\&quot;.&quot;
      # 这些重定向命令在每行结束后自动&quot;重置&quot;.



      # 重定向 标准错误，一次一行.
      ERRORFILE=script.errors

      bad_command1 2&gt;$ERRORFILE       #  Error message sent to $ERRORFILE.
      bad_command2 2&gt;&gt;$ERRORFILE      #  Error message appended to $ERRORFILE.
      bad_command3                    #  Error message echoed to stderr,
                                      #+ and does not appear in $ERRORFILE.
      # 这些重定向命令每行结束后会自动“重置”.
	#=======================================================================
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   2&gt;&amp;1
      # 重定向 标准错误 到 标准输出.
      # 错误信息发送到标准输出相同的位置.
        &gt;&gt;filename 2&gt;&amp;1
            bad_command &gt;&gt;filename 2&gt;&amp;1
            # 同时将 标准输出 和 标准错误 追加到文件 &quot;filename&quot; 中 ...
        2&gt;&amp;1 | [command(s)]
            bad_command 2&gt;&amp;1 | awk &#39;{print $5}&#39;   # found
            # 通过管道传递 标准错误.
            # bash 4 中可以将 &quot;2&gt;&amp;1 |&quot; 缩写为 &quot;|&amp;&quot;.

   i&gt;&amp;j
      # 重定向文件描述符 i 到 j.
      # 文件描述符 i 指向的文件输出将会重定向到文件描述符 j 指向的文件

   &gt;&amp;j
      # 默认的标准输出 (stdout) 重定向到 j.
      # 所有的标准输出将会重定向到 j 指向的文件.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   0&lt; FILENAME
    &lt; FILENAME
      # 从文件接收输入.
      # 类似功能命令是 &quot;&gt;&quot;, 经常会组合使用.
      #
      # grep search-word &lt;filename


   [j]&lt;&gt;filename
      #  打开并读写文件 &quot;filename&quot; ,
      #+ 并且分配文件描述符 &quot;j&quot;.
      #  如果 &quot;filename&quot; 不存在则创建.
      #  如果文件描述符 &quot;j&quot; 未指定, 默认分配文件描述符 0, 标准输入.
      #
      #  这是一个写指定文件位置的应用程序. 
      echo 1234567890 &gt; File    # 写字符串到 &quot;File&quot;.
      exec 3&lt;&gt; File             # 打开并分配文件描述符 3 给 &quot;File&quot; .
      read -n 4 &lt;&amp;3             # 读取 4 字符.
      echo -n . &gt;&amp;3             # 写一个小数点.
      exec 3&gt;&amp;-                 # 关闭文件描述符 3.
      cat File                  # ==&gt; 1234.67890
      #  随机访问.



   |
      # 管道.
      # 一般是命令和进程的链接工具.
      # 类似 &quot;&gt;&quot;, 但更一般.
      # 在连接命令，脚本，文件和程序方面非常有用.
      cat *.txt | sort | uniq &gt; result-file
      # 所有 .txt 文件输出进行排序并且删除复制行,
      # 最终保存结果到 &quot;result-file&quot;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以用单个命令行表示输入和输出的多个重定向或管道.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>command &lt; input-file &gt; output-file
# 或者等价:
&lt; input-file command &gt; output-file   # 尽管这不标准.

command1 | command2 | command3 &gt; output-file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P={href:"http://tldp.org/LDP/abs/html/filearchiv.html#DERPM",target:"_blank",rel:"noopener noreferrer"},T={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#FIFO",target:"_blank",rel:"noopener noreferrer"},$=s(`<p>多个输出流可以重定向到一个文件.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls -yz &gt;&gt; command.log 2&gt;&amp;1
#  捕获不合法选项 &quot;yz&quot; 的结果到文件 &quot;command.log.&quot;
#  因为 标准错误输出 被重定向到了文件,
#+ 任何错误信息都会在这.

#  注意, 然而, 接下来的这个案例并 &quot;不能&quot; 同样的结果.
ls -yz 2&gt;&amp;1 &gt;&gt; command.log
#  输出一条错误信息，但是不会写入到文件.
#  恰恰的, 命令输出(这个例子里为空)写入到文件, 但错误信息只会在 标准输出 输出.

#  如果同时重定向 标准输出 和 标准错误输出,
#+ 命令的顺序不同会导致不同.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭文件描述符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>n&lt;&amp;-
	关闭输入文件描述符 n.

0&lt;&amp;-, &lt;&amp;-
	关闭标准输入.

n&gt;&amp;-
	关闭输出文件描述符 n.

1&gt;&amp;-, &gt;&amp;-
	关闭标准输出.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子进程能继承文件描述符.这就是管道符能工作的原因.通过关闭文件描述符来防止继承 .</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 只重定向到 标准错误 到管道.

exec 3&gt;&amp;1                              # 保存当前 标准输出 &quot;值&quot;.

ls -l 2&gt;&amp;1 &gt;&amp;3 3&gt;&amp;- | grep bad 3&gt;&amp;-    # 关闭 &#39;grep&#39; 文件描述符 3 (但不是 &#39;ls&#39;).
#              ^^^^   ^^^^
exec 3&gt;&amp;-                              # 现在关闭它.

# 感谢, S.C.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),A={href:"http://tldp.org/LDP/abs/html/ioredirintro.html",target:"_blank",rel:"noopener noreferrer"},M=n("h4",{id:"注意",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注意","aria-hidden":"true"},"#"),e(" 注意")],-1),j={href:"http://tldp.org/LDP/abs/html/io-redirection.html#AEN17884",target:"_blank",rel:"noopener noreferrer"},C={href:"http://tldp.org/LDP/abs/html/devref1.html#DEVFILEREF",target:"_blank",rel:"noopener noreferrer"},G={href:"http://tldp.org/LDP/abs/html/io-redirection.html#AEN17894",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"文件描述符",-1),V=n("code",null,"文件句柄",-1),w={href:"http://tldp.org/LDP/abs/html/io-redirection.html#AEN17906",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"文件描述符 5",-1),B={href:"http://tldp.org/LDP/abs/html/internal.html#EXECREF",target:"_blank",rel:"noopener noreferrer"},X={href:"https://groups.google.com/forum/#!topic/gnu.bash.bug/E5Vdqv3tO1w",target:"_blank",rel:"noopener noreferrer"};function z(S,J){const i=t("ExternalLinkIcon");return r(),a("div",null,[v,u,n("ul",null,[n("li",null,[n("a",c,[e("20.1 使用 exec"),l(i)])]),n("li",null,[n("a",m,[e("20.2 重定向代码块"),l(i)])]),n("li",null,[n("a",b,[e("20.3 应用程序"),l(i)])])]),n("p",null,[e("有三个默认打开的文件"),n("a",h,[e("[1]"),l(i)]),e(", "),p,e("(标准输入，键盘),"),g,e("(标准输出， 屏幕)和 "),_,e("(标准错误，屏幕上输出的错误信息)。这些和任何其他打开的文件都可以被重定向。重定向仅仅意味着捕获输出文件，命令，脚本，甚至是一个脚本的代码块("),n("a",q,[e("样例 3-1"),l(i)]),e(")和("),n("a",f,[e("样例 3-2"),l(i)]),e(") 作为另一个文件，命令，程序或脚本的输入。")]),n("p",null,[e("每个打开的文件都有特定的文件描述符。"),n("a",E,[e("[2]"),l(i)]),e(",而 "),x,e("，"),L,e("，"),F,e(" 的文件描述符分别为 0,1,2。当然了，还有附件的文件描述符 3 - 9。有时候为"),R,e("，"),I,e("，"),k,e("临时性的复制链接分配这些附加的文件描述符会非常有用."),n("a",N,[e("[3]"),l(i)]),e("。这简化了复杂重定向和重组后的恢复(见"),n("a",D,[e("样例 20-1"),l(i)]),e(")")]),O,n("p",null,[e("更多详情见"),n("a",P,[e("样例 16-31"),l(i)]),e(" and "),n("a",T,[e("样例 A-14"),l(i)]),e(".")]),$,n("p",null,[e("更多关于 I/O 重定向详情见 "),n("a",A,[e("Appendix F"),l(i)]),e(".")]),M,n("p",null,[n("a",j,[e("[1]"),l(i)]),e(" 在 UNIX 和 Linux 中, 数据流和周边外设("),n("a",C,[e("device files"),l(i)]),e(") 都被看做文件.")]),n("p",null,[n("a",G,[e("[2]"),l(i)]),e(),U,e(" 仅仅是操作系统分配的一个可追踪的打开的文件号. 可以认为是一个简化的文件指针. 类似于 C 语言的 "),V,e(".")]),n("p",null,[n("a",w,[e("[3]"),l(i)]),e(" 当 bash 创建一个子进程的时候使用 "),y,e(" 会有问题. 例如 "),n("a",B,[e("exec"),l(i)]),e(", 子进程继承了文件描述符 5 (详情见 Chet Ramey's 归档的 e-mail, "),n("a",X,[e("SUBJECT: RE: File descriptor 5 is held open"),l(i)]),e("). 最好将这个文件描述符单独规避.")])])}const Q=d(o,[["render",z],["__file","20_io_redirection.html.vue"]]);export{Q as default};
