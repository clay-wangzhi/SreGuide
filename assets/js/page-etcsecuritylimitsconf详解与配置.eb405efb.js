(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1133:function(s,e,t){"use strict";t.r(e);var n=t(1),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"etc-security-limits-conf-详解与配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-security-limits-conf-详解与配置"}},[s._v("#")]),s._v(" /etc/security/limits.conf 详解与配置")]),s._v(" "),t("h2",{attrs:{id:"一、-etc-security-limits-conf-详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、-etc-security-limits-conf-详解"}},[s._v("#")]),s._v(" 一、 /etc/security/limits.conf 详解")]),s._v(" "),t("p",[t("code",[s._v("/etc/security/limits.conf")]),s._v(" 文件实际是 Linux PAM（插入式认证模块，Pluggable Authentication Modules）中 "),t("code",[s._v("pam_limits.so")]),s._v(" 的配置文件，而且只针对于单个会话。 该设置不会影响系统服务的资源限制。还要注意 "),t("code",[s._v("/etc/security/limits.d/")]),s._v(" 的这个目录，")]),s._v(" "),t("h3",{attrs:{id:"etc-security-limits-conf-配置解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-security-limits-conf-配置解析"}},[s._v("#")]),s._v(" /etc/security/limits.conf 配置解析")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# /etc/security/limits.conf\n#\n#This file sets the resource limits for the users logged in via PAM.\n该文件为通过PAM登录的用户设置资源限制。\n#It does not affect resource limits of the system services.\n#它不影响系统服务的资源限制。\n#Also note that configuration files in /etc/security/limits.d directory,\n#which are read in alphabetical order, override the settings in this\n#file in case the domain is the same or more specific.\n请注意/etc/security/limits.d下按照字母顺序排列的配置文件会覆盖 /etc/security/limits.conf中的\ndomain相同的的配置\n#That means for example that setting a limit for wildcard domain here\n#can be overriden with a wildcard setting in a config file in the\n#subdirectory, but a user specific setting here can be overriden only\n#with a user specific setting in the subdirectory.\n这意味着，例如使用通配符的domain会被子目录中相同的通配符配置所覆盖，但是某一用户的特定配置\n只能被字母路中用户的配置所覆盖。其实就是某一用户A如果在/etc/security/limits.conf有配置，当\n/etc/security/limits.d子目录下配置文件也有用户A的配置时，那么A中某些配置会被覆盖。最终取的值是 /etc/security/limits.d 下的配置文件的配置。\n\n#\n#Each line describes a limit for a user in the form:\n#每一行描述一个用户配置\n#<domain> <type> <item> <value>\n\n#Where:\n#<domain> can be:\n# - a user name    一个用户名\n# - a group name, with @group syntax    用户组格式为@GROUP_NAME\n# - the wildcard *, for default entry    默认配置为*，代表所有用户\n# - the wildcard %, can be also used with %group syntax,\n# for maxlogin limit \n#\n#<type> can have the two values:\n# - "soft" for enforcing the soft limits \n# - "hard" for enforcing hard limits\n有soft，hard和-，soft指的是当前系统生效的设置值，软限制也可以理解为警告值。\nhard表名系统中所能设定的最大值。soft的限制不能比hard限制高，用-表名同时设置了soft和hard的值。\n#<item> can be one of the following:    <item>可以使以下选项中的一个\n# - core - limits the core file size (KB)    限制内核文件的大小。\n# - data - max data size (KB)    最大数据大小\n# - fsize - maximum filesize (KB)    最大文件大小\n# - memlock - max locked-in-memory address space (KB)    最大锁定内存地址空间\n# - nofile - max number of open file descriptors 最大打开的文件数(以文件描叙符，file descripter计数) \n# - rss - max resident set size (KB) 最大持久设置大小\n# - stack - max stack size (KB) 最大栈大小\n# - cpu - max CPU time (MIN)    最多CPU占用时间，单位为MIN分钟\n# - nproc - max number of processes 进程的最大数目\n# - as - address space limit (KB) 地址空间限制 \n# - maxlogins - max number of logins for this user    此用户允许登录的最大数目\n# - maxsyslogins - max number of logins on the system    系统最大同时在线用户数\n# - priority - the priority to run user process with    运行用户进程的优先级\n# - locks - max number of file locks the user can hold    用户可以持有的文件锁的最大数量\n# - sigpending - max number of pending signals\n# - msgqueue - max memory used by POSIX message queues (bytes)\n# - nice - max nice priority allowed to raise to values: [-20, 19] max nice优先级允许提升到值\n# - rtprio - max realtime pr iority\n#\n#<domain> <type> <item> <value>\n#\n\n#* soft core 0\n#* hard rss 10000\n#@student hard nproc 20\n#@faculty soft nproc 20\n#@faculty hard nproc 50\n#ftp hard nproc 0\n#@st\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br")])]),t("h3",{attrs:{id:"etc-security-limits-d-目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-security-limits-d-目录"}},[s._v("#")]),s._v(" /etc/security/limits.d/目录")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("/etc/security/limits.d/")]),s._v("目录")]),s._v(" "),t("p",[s._v("该目录下默认有"),t("code",[s._v("*-nproc.conf")]),s._v("文件，该文件是用于限制用户的线程限制。我们也可以在该目录创建配置文件")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("/etc/security/limits.d/")]),s._v("下，以 .conf 结尾。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("centos 7")]),s._v(" "),t("p",[s._v("在CentOS 7版本中为"),t("code",[s._v("/etc/security/limits.d/20-nproc.conf")]),s._v("，")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# Default limit for number of user's processes to prevent\n# accidental fork bombs.\n# See rhbz #432903 for reasoning.\n\n*          soft    nproc     4096 # 所有的用户默认可以打开最大的进程数为 4096\nroot       soft    nproc     unlimited # root 用户默认可以打开最大的进程数 无限制的。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("CentOS 6")]),s._v(" "),t("p",[s._v("在CentOS 6版本中为"),t("code",[s._v("/etc/security/limits.d/90-nproc.conf")])])])])])]),s._v(" "),t("h2",{attrs:{id:"二、-ulimit-如何配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、-ulimit-如何配置"}},[s._v("#")]),s._v(" 二、 ulimit 如何配置")]),s._v(" "),t("h3",{attrs:{id:"配置注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置注意事项"}},[s._v("#")]),s._v(" 配置注意事项")]),s._v(" "),t("p",[s._v("注意不能设置 "),t("code",[s._v("nofile")]),s._v("不能设置 "),t("code",[s._v("unlimited")]),s._v("，"),t("code",[s._v("noproc")]),s._v("可以.\n当我们设置了 "),t("code",[s._v("nofile")]),s._v("不能设置 "),t("code",[s._v("unlimited")]),s._v(" 后，我们进行 ssh 登录，是登录不了的，并且报错下面的内容。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Dec  1 14:57:57 localhost sshd[1543]: pam_limits(sshd:session): Could not set limit for 'nofile': Operation not permitted\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当我们设置的 "),t("code",[s._v("nofile")]),s._v(" 的值可以设置的最大值为 1048576(2**20)，设置的值大于该数，就会进行登录不了。也会显示上面的登录错误。(亲测)")]),s._v(" "),t("h3",{attrs:{id:"基础配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[s._v("#")]),s._v(" 基础配置")]),s._v(" "),t("p",[s._v("我们不将所有的配置配置在"),t("code",[s._v("/etc/security/limits.conf")]),s._v(" 而是将配置放在 "),t("code",[s._v("/etc/security/limits.d/")]),s._v(" 下。\n比如我们将 nofile的配置放在 "),t("code",[s._v("/etc/security/limits.d/20-nofile.conf")]),s._v(" ，nproc 的配置放在 "),t("code",[s._v("/etc/security/limits.d/20-nproc.conf")]),s._v(".")]),s._v(" "),t("p",[s._v("一般我们需要配置的 "),t("code",[s._v("/etc/security/limits.d/20-nofile.conf")]),s._v(" 为。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("root soft nofile 65535\nroot hard nofile 65535\n* soft nofile 65535\n* hard nofile 65535\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("code",[s._v("/etc/security/limits.d/20-nproc.conf")]),s._v(" 设置为")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*    -     nproc   65535\nroot soft  nproc  unlimited\nroot hard  nproc  unlimited\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"注意覆盖点的问题。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意覆盖点的问题。"}},[s._v("#")]),s._v(" 注意覆盖点的问题。")]),s._v(" "),t("p",[t("strong",[s._v("示例一：")]),s._v("\n当 "),t("code",[s._v("/etc/security/limits.conf")]),s._v(" 配置了:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("root soft nofile 65538\nroot hard nofile 65538\n* soft nofile 65539\n* hard nofile 65539\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("这个root 用户的 默认取值是 65538 ，* 统配符虽然在 root 配置后面，但是 root 的配置只能被 root 进行覆盖。")]),s._v(" "),t("p",[s._v("我们看下这个配置，当这样配置的时候")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("root soft nofile 65538\nroot hard nofile 65538\n* soft nofile 65539\n* hard nofile 65539\nroot soft nofile 65539\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这个的 root 用户的取值还是 65538 ，因为虽然 "),t("code",[s._v("root soft nofile 65539")]),s._v(" 会覆盖我们之前的配置，但是这个配置是不生效的。因为 "),t("code",[s._v("root soft nofile 65539")]),s._v(" 配置的值大于"),t("code",[s._v("root hard nofile 65538")]),s._v(" , "),t("code",[s._v("soft")]),s._v(" 配置的值不能大于 "),t("code",[s._v("hard")]),s._v(".")]),s._v(" "),t("p",[t("strong",[s._v("示例二：")]),s._v("\n当我们在 "),t("code",[s._v("/etc/security/limits.conf")]),s._v(" 配置了:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("root soft nofile 65538\nroot hard nofile 65538\n* soft nofile 65539\n* hard nofile 65539\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("然后我们在 "),t("code",[s._v("/etc/security/limits.d/20-nofile.conf")]),s._v(" 配置了：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("root soft nofile 65536\nroot hard nofile 65536\n* soft nofile 65540\n* hard nofile 65540\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("最后的取值是会取 "),t("code",[s._v("/etc/security/limits.d/20-nofile.conf")]),s._v(" 里面的值。")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("配置，只能被特定覆盖。")]),s._v(" "),t("li",[t("code",[s._v("/etc/security/limits.d/")]),s._v(" 下文件的相同配置可以覆盖 "),t("code",[s._v("/etc/security/limits.conf")])]),s._v(" "),t("li",[t("code",[s._v("soft")]),s._v("和"),t("code",[s._v("hard")]),s._v("需要都进行设置,才能生效。")]),s._v(" "),t("li",[t("code",[s._v("nofile")]),s._v("不能设置 "),t("code",[s._v("unlimited")])]),s._v(" "),t("li",[t("code",[s._v("nofile")]),s._v("可以设置的最大值为 1048576(2**20)，设置的值大于该数，就会进行登录不了。")]),s._v(" "),t("li",[s._v("soft 设置的值 一定要小于或等于 hard 的值。")])])]),s._v(" "),t("p",[s._v("具体详细配置根据应用情况进行配置。")]),s._v(" "),t("h2",{attrs:{id:"三、ulimit-配置后生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、ulimit-配置后生效"}},[s._v("#")]),s._v(" 三、ulimit 配置后生效")]),s._v(" "),t("h3",{attrs:{id:"临时配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#临时配置"}},[s._v("#")]),s._v(" 临时配置")]),s._v(" "),t("p",[s._v("设置可以打开文件的最大数为 65536")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ulimit  -SHn  65536\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("重启后失效。")]),s._v(" "),t("h3",{attrs:{id:"永久配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#永久配置"}},[s._v("#")]),s._v(" 永久配置")]),s._v(" "),t("p",[s._v("配置到配置文件"),t("code",[s._v("/etc/security/limits.conf")]),s._v("或者 "),t("code",[s._v("/etc/security/limits.d/")]),s._v(" 中。\n然后退出当前会话，重新登录。 即可生效，重启配置也会保留。")]),s._v(" "),t("h3",{attrs:{id:"配置不生效的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置不生效的问题"}},[s._v("#")]),s._v(" 配置不生效的问题")]),s._v(" "),t("p",[s._v("按照上面的配置好了之后，我们进行设置登录到服务器，我发现是配置没有生效的，但是我使用 su - root 之后，发现配置是生效的。 很怪异。\n设备环境： Centos6.")]),s._v(" "),t("h4",{attrs:{id:"问题原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题原因"}},[s._v("#")]),s._v(" 问题原因")]),s._v(" "),t("p",[s._v("主要是 Centos6 的原因，我们排查到 sshd 服务的 PAM 模块是没有开启的，而"),t("code",[s._v("/etc/security/limits.conf")]),s._v(" 文件实际是 Linux PAM（插入式认证模块，Pluggable Authentication Modules）中 "),t("code",[s._v("pam_limits.so")]),s._v(" 的配置文件，我们没有开启 PAM 模块，最终也就没有读取到 "),t("code",[s._v("/etc/security/limits.conf")]),s._v(" 的内容。 而 su 进行切换的时候使用的是 终端tty登陆(默认使用PAM模块),")]),s._v(" "),t("h4",{attrs:{id:"解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("/etc/ssh/sshd_config")]),s._v(" 将 "),t("code",[s._v("UsePAM no")]),s._v(" 更改为 "),t("code",[s._v("UsePAM yes")]),s._v(", 然后重启 sshd 服务。")]),s._v(" "),t("h2",{attrs:{id:"四、ulimit-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、ulimit-常用命令"}},[s._v("#")]),s._v(" 四、ulimit 常用命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("      -S\tuse the `soft' resource limit # 设置软限制\n      -H\tuse the `hard' resource limit # 设置硬限制\n      -a\tall current limits are reported# 显示所有的配置。\n      -b\tthe socket buffer size # 设置socket buffer 的最大值。\n      -c\tthe maximum size of core files created # 设置core文件的最大值.\n      -d\tthe maximum size of a process's data segment  # 设置线程数据段的最大值\n      -e\tthe maximum scheduling priority (`nice') # 设置最大调度优先级\n      -f\tthe maximum size of files written by the shell and its children # 创建文件的最大值。\n      -i\tthe maximum number of pending signals # 设置最大的等待信号\n      -l\tthe maximum size a process may lock into memory #设置在内存中锁定进程的最大值\n      -m\tthe maximum resident set size \n      -n\tthe maximum number of open file descriptors # 设置最大可以的打开文件描述符。\n      -p\tthe pipe buffer size\n      -q\tthe maximum number of bytes in POSIX message queues\n      -r\tthe maximum real-time scheduling priority\n      -s\tthe maximum stack size\n      -t\tthe maximum amount of cpu time in seconds\n      -u\tthe maximum number of user processes  # 设置用户可以创建的最大进程数。\n      -v\tthe size of virtual memory  # 设置虚拟内存的最大值\n      -x\tthe maximum number of file locks\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"查看配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看配置"}},[s._v("#")]),s._v(" 查看配置")]),s._v(" "),t("p",[s._v("查看所有的配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ulimit  -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看配置的最大打开文件数")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ulimit  -n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("更改配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ulimit  -SHn  65536\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("转载链接：https://www.cnblogs.com/operationhome/p/11966041.html")])])])}),[],!1,null,null,null);e.default=a.exports}}]);