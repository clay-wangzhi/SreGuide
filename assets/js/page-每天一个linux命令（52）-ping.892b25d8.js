(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1219:function(s,t,e){"use strict";e.r(t);var n=e(1),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Linux系统的ping命令是常用的网络命令，它通常用来测试与目标主机的连通性，我们经常会说“ping一下某机器，看是不是开着”、不能打开网页时会说“你先ping网关地址192.168.1.1试试”。它通过发送ICMP ECHO_REQUEST数据包到网络主机（send ICMP ECHO_REQUEST to network hosts），并显示响应情况，这样我们就可以根据它输出的信息来确定目标主机是否可访问（但这不是绝对的）。有些服务器为了防止通过ping探测到，通过防火墙设置了禁止ping或者在内核参数中禁止ping，这样就不能通过ping确定该主机是否还处于开启状态。")]),s._v(" "),e("p",[s._v("linux下的ping和windows下的ping稍有区别,linux下ping不会自动终止,需要按ctrl+c终止或者用参数-c指定要求完成的回应次数。")]),s._v(" "),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("p",[e("code",[s._v("ping(选项)(参数)")])]),s._v(" "),e("h2",{attrs:{id:"选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-d：使用Socket的SO_DEBUG功能；\n-c<完成次数>：设置完成要求回应的次数；\n-f：极限检测；\n-i<间隔秒数>：指定收发信息的间隔时间；\n-I<网络界面>：使用指定的网络界面送出数据包；\n-l<前置载入>：设置在送出要求信息之前，先行发出的数据包；\n-n：只输出数值；\n-p<范本样式>：设置填满数据包的范本样式；\n-q：不显示指令执行过程，开头和结尾的相关信息除外；\n-r：忽略普通的Routing Table，直接将数据包送到远端主机上；\n-R：记录路由过程；\n-s<数据包大小>：设置数据包的大小；\n-t<存活数值>：设置存活数值TTL的大小；\n-v：详细显示指令的执行过程。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h2",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),e("p",[s._v("目的主机：指定发送ICMP报文的目的主机。")]),s._v(" "),e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[s._v("#")]),s._v(" 功能")]),s._v(" "),e("p",[s._v("ping命令用于：确定网络和各外部主机的状态；跟踪和隔离硬件和软件问题；测试、评估和管理网络。如果主机正在运行并连在网上，它就对回送信号进行响应。每个回送信号请求包含一个网际协议（IP）和 ICMP 头，后面紧跟一个 tim 结构，以及来填写这个信息包的足够的字节。缺省情况是连续发送回送信号请求直到接收到中断信号（Ctrl-C）。")]),s._v(" "),e("p",[s._v("ping 命令每秒发送一个数据报并且为每个接收到的响应打印一行输出。ping 命令计算信号往返时间和(信息)包丢失情况的统计信息，并且在完成之后显示一个简要总结。ping 命令在程序超时或当接收到 SIGINT 信号时结束。Host 参数或者是一个有效的主机名或者是因特网地址。")]),s._v(" "),e("h2",{attrs:{id:"常用实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用实例"}},[s._v("#")]),s._v(" 常用实例")]),s._v(" "),e("p",[s._v("1）ping的通的情况")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# ping 192.168.120.205\nPING 192.168.120.205 (192.168.120.205) 56(84) bytes of data.\n64 bytes from 192.168.120.205: icmp_seq=1 ttl=64 time=0.720 ms\n64 bytes from 192.168.120.205: icmp_seq=2 ttl=64 time=0.181 ms\n--- 192.168.120.205 ping statistics ---\n5 packets transmitted, 5 received, 0% packet loss, time 4000ms\nrtt min/avg/max/mdev = 0.181/0.293/0.720/0.214 ms\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("2）ping不同的情况")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# ping 192.168.120.202\nPING 192.168.120.202 (192.168.120.202) 56(84) bytes of data.\nFrom 192.168.120.204 icmp_seq=1 Destination Host Unreachable\nFrom 192.168.120.204 icmp_seq=2 Destination Host Unreachable\n-- 192.168.120.202 ping statistics ---\n8 packets transmitted, 0 received, +6 errors, 100% packet loss, time 7005ms\n, pipe 4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("3）ping指定次数")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# ping -c 10 192.168.120.206\nPING 192.168.120.206 (192.168.120.206) 56(84) bytes of data.\n64 bytes from 192.168.120.206: icmp_seq=1 ttl=64 time=1.25 ms\n64 bytes from 192.168.120.206: icmp_seq=2 ttl=64 time=0.260 ms\n64 bytes from 192.168.120.206: icmp_seq=3 ttl=64 time=0.242 ms\n64 bytes from 192.168.120.206: icmp_seq=4 ttl=64 time=0.271 ms\n64 bytes from 192.168.120.206: icmp_seq=5 ttl=64 time=0.274 ms\n64 bytes from 192.168.120.206: icmp_seq=6 ttl=64 time=0.295 ms\n64 bytes from 192.168.120.206: icmp_seq=7 ttl=64 time=0.269 ms\n64 bytes from 192.168.120.206: icmp_seq=8 ttl=64 time=0.270 ms\n64 bytes from 192.168.120.206: icmp_seq=9 ttl=64 time=0.253 ms\n64 bytes from 192.168.120.206: icmp_seq=10 ttl=64 time=0.289 ms\n\n--- 192.168.120.206 ping statistics ---\n10 packets transmitted, 10 received, 0% packet loss, time 9000ms\nrtt min/avg/max/mdev = 0.242/0.367/1.251/0.295 ms\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("4）时间间隔和次数限制的ping")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# ping -c 10 -i 0.5 192.168.120.206\nPING 192.168.120.206 (192.168.120.206) 56(84) bytes of data.\n64 bytes from 192.168.120.206: icmp_seq=1 ttl=64 time=1.24 ms\n64 bytes from 192.168.120.206: icmp_seq=2 ttl=64 time=0.235 ms\n64 bytes from 192.168.120.206: icmp_seq=3 ttl=64 time=0.244 ms\n64 bytes from 192.168.120.206: icmp_seq=4 ttl=64 time=0.300 ms\n64 bytes from 192.168.120.206: icmp_seq=5 ttl=64 time=0.255 ms\n64 bytes from 192.168.120.206: icmp_seq=6 ttl=64 time=0.264 ms\n64 bytes from 192.168.120.206: icmp_seq=7 ttl=64 time=0.263 ms\n64 bytes from 192.168.120.206: icmp_seq=8 ttl=64 time=0.331 ms\n64 bytes from 192.168.120.206: icmp_seq=9 ttl=64 time=0.247 ms\n64 bytes from 192.168.120.206: icmp_seq=10 ttl=64 time=0.244 ms\n\n--- 192.168.120.206 ping statistics ---\n10 packets transmitted, 10 received, 0% packet loss, time 4499ms\nrtt min/avg/max/mdev = 0.235/0.362/1.241/0.294 ms\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("5）多参数使用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# ping -i 3 -s 1024 -t 255 192.168.120.206\nPING 192.168.120.206 (192.168.120.206) 1024(1052) bytes of data.\n1032 bytes from 192.168.120.206: icmp_seq=1 ttl=64 time=1.99 ms\n1032 bytes from 192.168.120.206: icmp_seq=2 ttl=64 time=0.694 ms\n1032 bytes from 192.168.120.206: icmp_seq=3 ttl=64 time=0.300 ms\n1032 bytes from 192.168.120.206: icmp_seq=4 ttl=64 time=0.481 ms\n1032 bytes from 192.168.120.206: icmp_seq=5 ttl=64 time=0.415 ms\n1032 bytes from 192.168.120.206: icmp_seq=6 ttl=64 time=0.600 ms\n1032 bytes from 192.168.120.206: icmp_seq=7 ttl=64 time=0.411 ms\n1032 bytes from 192.168.120.206: icmp_seq=8 ttl=64 time=0.281 ms\n1032 bytes from 192.168.120.206: icmp_seq=9 ttl=64 time=0.318 ms\n1032 bytes from 192.168.120.206: icmp_seq=10 ttl=64 time=0.362 ms\n1032 bytes from 192.168.120.206: icmp_seq=11 ttl=64 time=0.408 ms\n1032 bytes from 192.168.120.206: icmp_seq=12 ttl=64 time=0.445 ms\n1032 bytes from 192.168.120.206: icmp_seq=13 ttl=64 time=0.397 ms\n1032 bytes from 192.168.120.206: icmp_seq=14 ttl=64 time=0.406 ms\n1032 bytes from 192.168.120.206: icmp_seq=15 ttl=64 time=0.458 ms\n\n--- 192.168.120.206 ping statistics ---\n15 packets transmitted, 15 received, 0% packet loss, time 41999ms\nrtt min/avg/max/mdev = 0.281/0.531/1.993/0.404 ms\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("说明：")]),s._v(" "),e("p",[s._v("-i 3 发送周期为 3秒 -s 设置发送包的大小为1024 -t 设置TTL值为 255")]),s._v(" "),e("p",[s._v("参考链接：")]),s._v(" "),e("p",[s._v("http://man.linuxde.net/ping")]),s._v(" "),e("p",[s._v("http://www.cnblogs.com/peida/archive/2013/03/06/2945407.html")])])}),[],!1,null,null,null);t.default=a.exports}}]);