(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1210:function(s,r,n){"use strict";n.r(r);var t=n(1),a=Object(t.a)({},(function(){var s=this,r=s.$createElement,n=s._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("在使用 find命令的-exec选项处理匹配到的文件时， find命令将所有匹配到的文件一起传递给exec执行。但有些系统对能够传递给exec的命令长度有限制，这样在find命令运行几分钟之后，就会出现溢出错误。错误信息通常是“参数列太长”或“参数列溢出”。这就是xargs命令的用处所在，特别是与find命令一起使用。")]),s._v(" "),n("p",[s._v("find命令把匹配到的文件传递给xargs命令，而xargs命令每次只获取一部分文件而不是全部，不像-exec选项那样。这样它可以先处理最先获取的一部分文件，然后是下一批，并如此继续下去。")]),s._v(" "),n("p",[s._v("在有些系统中，使用-exec选项会为处理每一个匹配到的文件而发起一个相应的进程，并非将匹配到的文件全部作为参数一次执行；这样在有些情况下就会出现进程过多，系统性能下降的问题，因而效率不高； 而使用xargs命令则只有一个进程。另外，在使用xargs命令时，究竟是一次获取所有的参数，还是分批取得参数，以及每一次获取参数的数目都会根据该命令的选项及系统内核中相应的可调参数来确定。")]),s._v(" "),n("p",[s._v("使用实例：")]),s._v(" "),n("p",[s._v("1） 查找系统中的每一个普通文件，然后使用xargs命令来测试它们分别属于哪类文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#ll\n总计 312\n-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log\n-rw-r--r-- 1 root root      0 11-12 22:25 log2013.log\n-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log\ndrwxr-xr-x 6 root root   4096 10-27 01:58 scf\ndrwxrwxrwx 2 root root   4096 11-12 19:32 test3\ndrwxrwxrwx 2 root root   4096 11-12 19:32 test4\n# find . -type f -print | xargs file\n./log2014.log: empty\n./log2013.log: empty\n./log2012.log: ASCII text\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("2）在整个系统中查找内存信息转储文件(core dump) ，然后把结果保存到/tmp/core.log 文件中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# find / -name "core" -print | xargs echo "" >/tmp/core.log\n# cd /tmp\n# ll\n总计 16\n-rw-r--r-- 1 root root 1524 11-12 22:29 core.log\ndrwx------ 2 root root 4096 11-12 22:24 ssh-TzcZDx1766\ndrwx------ 2 root root 4096 11-12 22:28 ssh-ykiRPk1815\ndrwx------ 2 root root 4096 11-03 07:11 vmware-root\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("3）在当前目录下查找所有用户具有读、写和执行权限的文件，并收回相应的写权限")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# ll\n总计 312\n-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log\n-rw-r--r-- 1 root root      0 11-12 22:25 log2013.log\n-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log\ndrwxr-xr-x 6 root root   4096 10-27 01:58 scf\ndrwxrwxrwx 2 root root   4096 11-12 19:32 test3\ndrwxrwxrwx 2 root root   4096 11-12 19:32 test4\n# find . -perm -7 -print | xargs chmod o-w\n# ll\n总计 312\n-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log\n-rw-r--r-- 1 root root      0 11-12 22:25 log2013.log\n-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log\ndrwxr-xr-x 6 root root   4096 10-27 01:58 scf\ndrwxrwxr-x 2 root root   4096 11-12 19:32 test3\ndrwxrwxr-x 2 root root   4096 11-12 19:32 test4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("说明：")]),s._v(" "),n("p",[s._v("执行命令后，文件夹scf、test3和test4的权限都发生改变")]),s._v(" "),n("p",[s._v("4）用grep命令在所有的普通文件中搜索hostname这个词")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# find . -type f -print | xargs grep "hostname"\n./log2013.log:hostnamebaidu=baidu.com\n./log2013.log:hostnamesina=sina.com\n./log2013.log:hostnames=true\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("5）用grep命令在当前目录下的所有普通文件中搜索hostnames这个词")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# find . -name \\* -type f -print | xargs grep "hostnames"\n./log2013.log:hostnamesina=sina.com\n./log2013.log:hostnames=true\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("说明：")]),s._v(" "),n("p",[s._v("注意，在上面的例子中， \\用来取消find命令中的*在shell中的特殊含义。")]),s._v(" "),n("p",[s._v("6）使用xargs执行mv")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# ll\n总计 316\n-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log\n-rw-r--r-- 1 root root     61 11-12 22:44 log2013.log\n-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log\ndrwxr-xr-x 6 root root   4096 10-27 01:58 scf\ndrwxrwxr-x 2 root root   4096 11-12 22:54 test3\ndrwxrwxr-x 2 root root   4096 11-12 19:32 test4\n# cd test4/\n# ll\n总计 0[root@localhost test4]# cd ..\n# find . -name "*.log" | xargs -i mv {} test4\n# ll\n总计 12drwxr-xr-x 6 root root 4096 10-27 01:58 scf\ndrwxrwxr-x 2 root root 4096 11-13 05:50 test3\ndrwxrwxr-x 2 root root 4096 11-13 05:50 test4\n# cd test4/\n# ll\n总计 304\n-rw-r--r-- 1 root root 302108 11-12 22:54 log2012.log\n-rw-r--r-- 1 root root     61 11-12 22:54 log2013.log\n-rw-r--r-- 1 root root      0 11-12 22:54 log2014.log\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("7）find后执行xargs提示xargs: argument line too long解决方法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#find . -type f -atime +0 -print0 | xargs -0 -l1 -t rm -f\nrm -f \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("说明：")]),s._v(" "),n("p",[s._v("-l1是一次处理一个；-t是处理之前打印出命令")]),s._v(" "),n("p",[s._v("8）使用-i参数默认的前面输出用{}代替，-I参数可以指定其他代替字符，如例子中的[]")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# ll\n总计 12drwxr-xr-x 6 root root 4096 10-27 01:58 scf\ndrwxrwxr-x 2 root root 4096 11-13 05:50 test3\ndrwxrwxr-x 2 root root 4096 11-13 05:50 test4\n# cd test4\n# find . -name "file" | xargs -I [] cp [] ..\n# ll\n总计 304\n-rw-r--r-- 1 root root 302108 11-12 22:54 log2012.log\n-rw-r--r-- 1 root root     61 11-12 22:54 log2013.log\n-rw-r--r-- 1 root root      0 11-12 22:54 log2014.log\n# cd ..\n# ll\n总计 316\n-rw-r--r-- 1 root root 302108 11-13 06:03 log2012.log\n-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log\n-rw-r--r-- 1 root root      0 11-13 06:03 log2014.log\ndrwxr-xr-x 6 root root   4096 10-27 01:58 scf\ndrwxrwxr-x 2 root root   4096 11-13 05:50 test3\ndrwxrwxr-x 2 root root   4096 11-13 05:50 test4\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("说明：")]),s._v(" "),n("p",[s._v("使用-i参数默认的前面输出用{}代替，-I参数可以指定其他代替字符，如例子中的[]")]),s._v(" "),n("p",[s._v("9）xargs的-p参数的使用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# ll\n总计 0\n-rw-r--r-- 1 root root 0 11-13 06:06 log2015.log\n# cd ..\n# ll\n总计 316\n-rw-r--r-- 1 root root 302108 11-13 06:03 log2012.log\n-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log\n-rw-r--r-- 1 root root      0 11-13 06:03 log2014.log\ndrwxr-xr-x 6 root root   4096 10-27 01:58 scf\ndrwxrwxr-x 2 root root   4096 11-13 06:06 test3\ndrwxrwxr-x 2 root root   4096 11-13 05:50 test4\n# cd test3\n#  find . -name "*.log" | xargs -p -i mv {} ..\nmv ./log2015.log .. ?...y\n# ll\n总计 0\n# cd ..\n# ll\n总计 316\n-rw-r--r-- 1 root root 302108 11-13 06:03 log2012.log\n-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log\n-rw-r--r-- 1 root root      0 11-13 06:03 log2014.log\n-rw-r--r-- 1 root root      0 11-13 06:06 log2015.log\ndrwxr-xr-x 6 root root   4096 10-27 01:58 scf\ndrwxrwxr-x 2 root root   4096 11-13 06:08 test3\ndrwxrwxr-x 2 root root   4096 11-13 05:50 test4\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("说明：")]),s._v(" "),n("p",[s._v("-p参数会提示让你确认是否执行后面的命令,y执行，n不执行。")]),s._v(" "),n("p",[s._v("转载链接：")]),s._v(" "),n("p",[s._v("http://www.cnblogs.com/peida/archive/2012/11/15/2770888.html")])])}),[],!1,null,null,null);r.default=a.exports}}]);