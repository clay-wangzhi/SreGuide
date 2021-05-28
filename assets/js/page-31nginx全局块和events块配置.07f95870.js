(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1233:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_3-1-nginx全局块和events块配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-nginx全局块和events块配置"}},[s._v("#")]),s._v(" 3.1 nginx全局块和events块配置")]),s._v(" "),a("h2",{attrs:{id:"_1-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-example"}},[s._v("#")]),s._v(" 1 example")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行Nginx进程的用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_cpu_affinity")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义存储某类型的全局错误的日志位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx日志分为很多级别 [debug | info | notice | warn | error | crit | alert | emerg]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_log")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log  error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定进程ID（pid）存放的路径 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pid")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个nginx进程打开的最多文件描述符数目，理论值应该是系统的最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n的值保持一致。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_rlimit_nofile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("events")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用epoll的I/O模型，用这个模型来高效处理异步事件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" epoll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为worker_processes*worker_connections。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_connections")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20480")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"_2-配置cpu参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置cpu参数"}},[s._v("#")]),s._v(" 2 配置CPU参数")]),s._v(" "),a("p",[s._v("Nginx默认没有开启利用多核cpu，我们可以通过增加worker_cpu_affinity配置参数来充分利用多核cpu的性能。cpu是任务处理，计算最关键的资源，cpu核越多，性能就越好。")]),s._v(" "),a("h3",{attrs:{id:"_2-1-nginx-worker-processes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-nginx-worker-processes"}},[s._v("#")]),s._v(" 2.1 nginx worker_processes")]),s._v(" "),a("p",[s._v("worker_processes最多开启8个，8个以上性能就不会再提升了，而且稳定性会变的更低，因此8个进程够用了；")]),s._v(" "),a("h3",{attrs:{id:"_2-2-nginx-worker-cpu-affinity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-nginx-worker-cpu-affinity"}},[s._v("#")]),s._v(" 2.2 nginx worker_cpu_affinity")]),s._v(" "),a("p",[s._v("cpu有多少个核？就有几位数，1代表内核开启，0代表内核关闭；")]),s._v(" "),a("p",[s._v("例如：我有一个服务器是最低配，8核CPU，nginx配置信息则如下：")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_cpu_affinity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00000001")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00000010")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00000100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00001000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00010000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00100000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01000000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面的配置表示：8核CPU，开启8个进程。")]),s._v(" "),a("blockquote",[a("p",[s._v("我其实把"),a("code",[s._v("nginx worker_cpu_affinity")]),s._v("参数通常设置为"),a("code",[s._v("auto")])])]),s._v(" "),a("h3",{attrs:{id:"_2-3-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-实例"}},[s._v("#")]),s._v(" 2.3 实例")]),s._v(" "),a("p",[a("strong",[s._v("2核CPU，开启2个进程")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_cpu_affinity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("2核CPU，开启4进程")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_cpu_affinity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("2核CPU，开启8进程")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_cpu_affinity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("8核CPU，开启2进程")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_cpu_affinity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10101010")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01010101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("10101010表示开启了第2,4,6,8内核，01010101表示开始了1,3,5,7内核；")]),s._v(" "),a("p",[s._v("如果多个CPU内核的利用率都相差不多，证明nginx己经成功的利用了多核CPU。")]),s._v(" "),a("p",[s._v("测试结束后，CPU内核的负载应该都同时降低。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);