import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as t,a as e,b as n,d as s,e as a}from"./app-ff59e76a.js";const v={},c=a(`<h1 id="_30-网络编程" tabindex="-1"><a class="header-anchor" href="#_30-网络编程" aria-hidden="true">#</a> 30 网络编程</h1><blockquote class="blockquote-center">The Net&#39;s a cross between an elephant and a white elephant sale: it never forgets, and it&#39;s always crap.<br>                                                   --Nemo</blockquote><p>Linux系统拥有一系列的工具，用于访问、操作和调解网络连接。我们能够把其中的一部分工具整合到脚本中 -- 这些脚本能扩展我们对网络的认知，有用的脚本还能方便网络管理。</p><p>以下是一个简单的CGI脚本，阐述如何连接到远程服务器。</p><p>例子 30-1. 打印服务器环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# test-cgi.sh
# by Michael Zick
# Used with permission

# 您应该根据您的情况修改相应的Bash路径
# （在ISP的服务器中，Bash一般不会放在正常的位置）
# 其他位置： /usr/bin 或者 /usr/local/bin
# 甚至应该在sha-bang中不用任何路径运行它

# 取消通配符
set -f

# Http Header（译者注：此头信息是告诉浏览器服务器返回的内容格式）
echo Content-type: text/plain
echo

echo CGI/1.0 test script report:
echo

echo environment settings:
set
echo

echo whereis bash?
whereis bash
echo


echo who are we?
echo \${BASH_VERSINFO[*]}
echo

echo argc is $#. argv is &quot;$*&quot;.
echo

# CGI/1.0 预期的环境变量。

echo SERVER_SOFTWARE = $SERVER_SOFTWARE
echo SERVER_NAME = $SERVER_NAME
echo GATEWAY_INTERFACE = $GATEWAY_INTERFACE
echo SERVER_PROTOCOL = $SERVER_PROTOCOL
echo SERVER_PORT = $SERVER_PORT
echo REQUEST_METHOD = $REQUEST_METHOD
echo HTTP_ACCEPT = &quot;$HTTP_ACCEPT&quot;
echo PATH_INFO = &quot;$PATH_INFO&quot;
echo PATH_TRANSLATED = &quot;$PATH_TRANSLATED&quot;
echo SCRIPT_NAME = &quot;$SCRIPT_NAME&quot;
echo QUERY_STRING = &quot;$QUERY_STRING&quot;
echo REMOTE_HOST = $REMOTE_HOST
echo REMOTE_ADDR = $REMOTE_ADDR
echo REMOTE_USER = $REMOTE_USER
echo AUTH_TYPE = $AUTH_TYPE
echo CONTENT_TYPE = $CONTENT_TYPE
echo CONTENT_LENGTH = $CONTENT_LENGTH

exit 0

# 在这里，文档给出一些简短的指令。
:&lt;&lt;-&#39;_test_CGI_&#39;

1) 将此文档放到http://domain.name/cgi-bin的目录。
2) 然后，访问http://domain.name/cgi-bin/test-cgi.sh.

_test_CGI_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出于安全的考虑，确认连接计算机的IP地址是有用的。 例子 30-2. IP地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# ip-addresses.sh
# 列出您的计算机所连接的IP地址。

#  受Greg Bledsoe的ddos.sh脚本所启发，
#  Linux Journal，2011年3月9号。
#    URL:
#  http://www.linuxjournal.com/content/back-dead-simple-bash-complex-ddos
#  Greg licensed his script under the GPL2,
#+ and as a derivative, this script is likewise GPL2.

connection_type=TCP      # 也可以使用UDP
field=2           # Which field of the output we&#39;re interested in.
no_match=LISTEN   # 过滤出包含此字符串的记录，为什么？
lsof_args=-ni     # -i 列出互联网相关的文件。
                  # -n 使用数值IP地址。
		  # 如果不使用-n选项，会发生什么情况？试试看。
router=&quot;[0-9][0-9][0-9][0-9][0-9]-&gt;&quot;
#       删除路由信息。

lsof &quot;$lsof_args&quot; | grep $connection_type | grep -v &quot;$no_match&quot; |
      awk &#39;{print $9}&#39; | cut -d : -f $field | sort | uniq |
      sed s/&quot;^$router&quot;//

#  Bledsoe的脚本将过滤出的IP地址结果赋给一个变量（类似上面的19行到22行）。
#  他检查连接到一个IP地址的多个连接，
#  使用：
#
#    iptables -I INPUT -s $ip -p tcp -j REJECT --reject-with tcp-reset
#
#  ... 在每一次的60秒延迟循环中，拒绝来自DDOS攻击的数据包。


#  练习：
#  --------
#  使用&#39;iptable&#39;命令扩展这个脚本
#+ 来拒绝一些来自垃圾邮件发送者的IP域名的连接请求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>更多网络编程的例子：</p>`,10),o={href:"http://tldp.org/LDP/abs/html/devref1.html#NPREF",target:"_blank",rel:"noopener noreferrer"},m={href:"http://tldp.org/LDP/abs/html/devref1.html#NW001",target:"_blank",rel:"noopener noreferrer"},u={href:"http://tldp.org/LDP/abs/html/system.html#IPSCRIPT0",target:"_blank",rel:"noopener noreferrer"},b={href:"http://tldp.org/LDP/abs/html/communications.html#PING0",target:"_blank",rel:"noopener noreferrer"},h={href:"http://tldp.org/LDP/abs/html/communications.html#ISSPAMMER",target:"_blank",rel:"noopener noreferrer"},_={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#ISSPAMMER2",target:"_blank",rel:"noopener noreferrer"},p={href:"http://tldp.org/LDP/abs/html/contributed-scripts.html#WHX",target:"_blank",rel:"noopener noreferrer"},E={href:"http://tldp.org/LDP/abs/html/devref1.html#DEVTCP",target:"_blank",rel:"noopener noreferrer"},T={href:"http://tldp.org/LDP/abs/html/system.html",target:"_blank",rel:"noopener noreferrer"},g={href:"http://tldp.org/LDP/abs/html/system.html#NETWORKSYS1",target:"_blank",rel:"noopener noreferrer"},R={href:"http://tldp.org/LDP/abs/html/external.html",target:"_blank",rel:"noopener noreferrer"},P={href:"http://tldp.org/LDP/abs/html/communications.html",target:"_blank",rel:"noopener noreferrer"};function f(S,N){const i=r("ExternalLinkIcon");return d(),t("div",null,[c,e("ul",null,[e("li",null,[e("a",o,[n("Getting the time from nist.gov"),s(i)])]),e("li",null,[e("a",m,[n("Downloading a URL"),s(i)])]),e("li",null,[e("a",u,[n("A GRE tunnel"),s(i)])]),e("li",null,[e("a",b,[n("Checking if an Internet server is up"),s(i)])]),e("li",null,[e("a",h,[n("例子 16-41"),s(i)])]),e("li",null,[e("a",_,[n("例子 A-28"),s(i)])]),e("li",null,[e("a",p,[n("例子 A-29"),s(i)])]),e("li",null,[e("a",E,[n("例子 29-1"),s(i)])])]),e("p",null,[n("更多资料请看"),e("a",T,[n("《System and Administrative Commands》"),s(i)]),n("的章节"),e("a",g,[n("“网络命令”"),s(i)]),n("，以及"),e("a",R,[n("《External Filters, Programs and Commands》"),s(i)]),n("的章节"),e("a",P,[n("“通信命令”"),s(i)]),n("。")])])}const O=l(v,[["render",f],["__file","30_network_programming.html.vue"]]);export{O as default};
