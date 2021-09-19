(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1264:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Let’s learn keepalived together！")]),s._v(" "),e("h2",{attrs:{id:"keepalived介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keepalived介绍"}},[s._v("#")]),s._v(" keepalived介绍")]),s._v(" "),e("p",[s._v("keepalived观察其名可知，保持存活，在网络里面就是保持在线了，也就是所谓的高可用或热备，它集群管理中保证集群高可用的一个服务软件，其功能类似于heartbeat，用来防止单点故障(单点故障是指一旦某一点出现故障就会导致整个系统架构的不可用)的发生。说到keepalived就不得不说VRRP协议，可以说这个协议就是keepalived实现的基础，那么首先我们来看看VRRP协议。")]),s._v(" "),e("h2",{attrs:{id:"vrrp协议介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vrrp协议介绍"}},[s._v("#")]),s._v(" VRRP协议介绍")]),s._v(" "),e("p",[s._v("学过网络的朋友都知道，网络在设计的时候必须考虑到冗余容灾，包括线路冗余，设备冗余等，防止网络存在单点故障，那在路由器或三层交换机处实现冗余就显得尤为重要。")]),s._v(" "),e("p",[s._v("在网络里面有个协议就是来做这事的，这个协议就是VRRP协议，Keepalived就是巧用VRRP协议来实现高可用性(HA)的发生。")]),s._v(" "),e("p",[s._v("VRRP全称Virtual Router Redundancy Protocol，即虚拟路由冗余协议。对于VRRP，需要清楚知道的是：")]),s._v(" "),e("p",[s._v("1）VRRP是用来实现路由器冗余的协议。\n2）VRRP协议是为了消除在静态缺省路由环境下路由器单点故障引起的网络失效而设计的主备模式的协议，使得发生故障而进行设计设备功能切换时可以不影响内外数据通信，不需要再修改内部网络的网络参数。\n3）VRRP协议需要具有IP备份，优先路由选择，减少不必要的路由器通信等功能。\n4）VRRP协议将两台或多台路由器设备虚拟成一个设备，对外提供虚拟路由器IP（一个或多个）。然而，在路由器组内部，如果实际拥有这个对外IP的路由器如果工作正常的话，就是master，或者是通过算法选举产生的，MASTER实现针对虚拟路由器IP的各种网络功能，如ARP请求，ICMP，以及数据的转发等，其他设备不具有该IP，状态是BACKUP。除了接收MASTER的VRRP状态通告信息外，不执行对外的网络功能，当主级失效时，BACKUP将接管原先MASTER的网络功能。\n5）VRRP协议配置时，需要配置每个路由器的虚拟路由ID(VRID)和优先权值，使用VRID将路由器进行分组，具有相同VRID值的路由器为同一个组，VRID是一个0-255的整整数，；同一个组中的路由器通过使用优先权值来选举MASTER。，优先权大者为MASTER，优先权也是一个0-255的正整数。")]),s._v(" "),e("h2",{attrs:{id:"keepalived工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keepalived工作原理"}},[s._v("#")]),s._v(" keepalived工作原理")]),s._v(" "),e("p",[s._v("keepalived可提供vrrp以及health-check功能，可以只用它提供双机浮动的vip（vrrp虚拟路由功能），这一样可以简单实现一个双机热备高可用的功能：keepalived是以VRRP虚拟路由冗余协议为基础实现高可用的，可以认为是现实路由高可用的协议，即将N台提供相同功能的路由器组成一个路由器组，这个组里面有一个master和多个backup，master上面有一个对外提供服务的vip（该路由器所在局域网内其他机器的默认路由为该vip），master会发组播，当backup收不到VRRP包时就认为master宕掉了，这时就需要根据VRRP的优先级来选举一个backup当master。这样的话就可以保证路由器的高可用了。")]),s._v(" "),e("p",[s._v("下图是keepalived的组件图")]),s._v(" "),e("p",[e("img",{attrs:{src:a(694),alt:""}})]),s._v(" "),e("p",[s._v("keepalived也是模块化设计，不同模块负责不同的功能，它主要有三个模块，分别是core、check和VRRP，其中：")]),s._v(" "),e("p",[s._v("core模块：为keepalived的核心组件，负责主进程的启动、维护以及全局配置文件的加载和解析；")]),s._v(" "),e("p",[s._v("check：负责健康检查，包括常见的各种检查方式；")]),s._v(" "),e("p",[s._v("VRRP模块：是来实现VRRP协议的。")]),s._v(" "),e("p",[s._v("system call：系统调用")]),s._v(" "),e("p",[s._v("watch dog：监控check和vrrp进程的看管者，check负责检测子进程的健康状态，当其检测到master上的服务不可用时则通告vrrp将其转移至backup服务器上。")]),s._v(" "),e("p",[s._v("除此之外，keepalived还有下面两个组件：")]),s._v(" "),e("p",[s._v("libipfwc:iptables（ipchains）库，配置LVS会用到")]),s._v(" "),e("p",[s._v("libipvs*：配置LVS会用到")]),s._v(" "),e("p",[s._v("注意，keepalived和LVS完全是两码事，只不过他们各负其责相互配合而已。")]),s._v(" "),e("p",[s._v("keepalived正常启动的时候，共启动3个进程：\n一个是父进程，负责监控其子进程；一个是VRRP子进程，另外一个是checkers子进程；\n两个子进程都被系统watchlog看管，两个子进程各自负责复杂自己的事。\nHealthcheck子进程检查各自服务器的健康状况，，例如http,lvs。如果healthchecks进程检查到master上服务不可用了，就会通知本机上的VRRP子进程，让他删除通告，并且去掉虚拟IP，转换为BACKUP状态。")]),s._v(" "),e("h2",{attrs:{id:"keepalived作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keepalived作用"}},[s._v("#")]),s._v(" Keepalived作用")]),s._v(" "),e("p",[s._v("Keepalived主要用作RealServer的健康状态检查以及LoadBalance主机和BackUP主机之间failover的实现。Keepalived的作用是检测web服务器的状态，如果有一台web服务器死机，或工作出现故障，Keepalived将检测到，并将有故障的web服务器从系统中剔除，当web服务器工作正常后Keepalived自动将web服务器加入到服务器群中，这些工作全部自动完成，不需要人工干涉，需要人工做的只是修复故障的web服务器。")]),s._v(" "),e("p",[s._v("----------------------------------------------------------------------------------------------------------------------------\nKeepalived和Heartbeat之间的对比\n1）Keepalived使用更简单：从安装、配置、使用、维护等角度上对比，Keepalived都比Heartbeat要简单得多，尤其是Heartbeat2.1.4后拆分成3个子项目，安装、配置、使用都比较复杂，尤其是出问题的时候，都不知道具体是哪个子系统出问题了；而Keepalived只有1个安装文件、1个配置文件，配置文件也简单很多；\n2）Heartbeat功能更强大：Heartbeat虽然复杂，但功能更强大，配套工具更全，适合做大型集群管理，而Keepalived主要用于集群倒换，基本没有管理功能；\n3）协议不同：Keepalived使用VRRP协议进行通信和选举，Heartbeat使用心跳进行通信和选举；Heartbeat除了走网络外，还可以通过串口通信，貌似更可靠；\nKeepalived使用的vrrp协议方式，虚拟路由冗余协议 ；Heartbeat是基于主机或网络的服务的高可用方式；\nKeepalived的目的是模拟路由器的双机；Heartbeat的目的是用户service的双机\n4）使用方式基本类似：如果要基于两者设计高可用方案，最终都要根据业务需要写自定义的脚本，Keepalived的脚本没有任何约束，随便怎么写都可以；Heartbeat的脚本有约束，即要支持service\nstart/stop/restart这种方式，而且Heartbeart提供了很多默认脚本，简单的绑定ip，启动apache等操作都已经有了；")]),s._v(" "),e("p",[s._v("使用建议：\n优先使用Keepalived，当Keepalived不够用的时候才选择Heartbeat\nlvs的高可用建议用Keepavlived\n业务的高可用用Heartbeat\n--------------------------------------------------------------------------------------------------------------------------")]),s._v(" "),e("h2",{attrs:{id:"keepalived的配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keepalived的配置文件"}},[s._v("#")]),s._v(" Keepalived的配置文件")]),s._v(" "),e("p",[s._v("keepalived只有一个配置文件keepalived.conf，配置文件里面主要包括以下几个配置项，分别是global_defs、static_ipaddress、static_routes、VRRP_script、VRRP_instance和virtual_server。")]),s._v(" "),e("p",[s._v("总的来说，keepalived主要有三类区域配置，注意不是三种配置文件，是一个配置文件里面三种不同类别的配置区域：\n1）全局配置(Global Configuration)\n2）VRRPD配置\n3）LVS配置")]),s._v(" "),e("p",[s._v("下面就重点来说说这三类区域的配置：")]),s._v(" "),e("p",[s._v("1）全局配置\n全局配置又包括两个子配置：\n全局定义(global definition)\n静态路由配置(static ipaddress/routes)")]),s._v(" "),e("p",[s._v("1--全局定义(global definition)配置范例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("global_defs\n{\nnotification_email\n{\nadmin@example.com\n}\nnotification_email_from admin@example.com\nsmtp_server 127.0.0.1\nstmp_connect_timeout 30\nrouter_id node1\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("全局配置解析\nglobal_defs全局配置标识，表面这个区域{}是全局配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("notification_email\n{\nadmin@example.com\nadmin@ywlm.net\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("表示keepalived在发生诸如切换操作时需要发送email通知，以及email发送给哪些邮件地址，邮件地址可以多个，每行一个\nnotification_email_from admin@example.com\n表示发送通知邮件时邮件源地址是谁\nsmtp_server 127.0.0.1\n表示发送email时使用的smtp服务器地址，这里可以用本地的sendmail来实现\nsmtp_connect_timeout 30\n连接smtp连接超时时间\nrouter_id node1\n机器标识")]),s._v(" "),e("p",[s._v("2--静态地址和路由配置范例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("static_ipaddress\n{\n192.168.1.1/24 brd + dev eth0 scope global\n192.168.1.2/24 brd + dev eth1 scope global\n}\nstatic_routes\n{\nsrc $SRC_IP to $DST_IP dev $SRC_DEVICE\nsrc $SRC_IP to $DST_IP via $GW dev $SRC_DEVICE\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("这里实际上和系统里面用命令配置IP地址和路由的曹一样，例如：\n192.168.1.1/24 brd + dev eth0 scope global 相当于: ip addr add 192.168.1.1/24 brd + dev eth0 scope global\n就是给eth0配置IP地址\n路由同理\n一般这个区域不需要配置\n这里实际上就是给服务器配置真实的IP地址和路由的，在复杂的环境下可能需要配置，一般不会用这个来配置，我们可以直接用vi /etc/sysconfig/network-script/ifcfg-eth1来配置，切记这里可不是VIP哦，不要搞混淆了，切记切记！")]),s._v(" "),e("p",[s._v("2）VRRPD配置\nVRRPD配置包括三个类：\nVRRP同步组(synchroization group)\nVRRP实例(VRRP Instance)\nVRRP脚本")]),s._v(" "),e("p",[s._v("1--VRRP同步组(synchroization group)配置范例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vrrp_sync_group VG_1 {\ngroup {\nhttp\nmysql\n}\nnotify_master /path/to/to_master.sh\nnotify_backup /path_to/to_backup.sh\nnotify_fault “/path/fault.sh VG_1”\nnotify /path/to/notify.sh\nsmtp_alert\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("其中：\ngroup {\nhttp\nmysql\n}\nhttp和mysql是实例名和下面的实例名一致")]),s._v(" "),e("p",[s._v("notify_master /path/to/to_master.sh：表示当切换到master状态时，要执行的脚本\nnotify_backup /path_to/to_backup.sh：表示当切换到backup状态时，要执行的脚本\nnotify_fault “/path/fault.sh VG_1”\nnotify /path/to/notify.sh：\nsmtp alter表示切换时给global defs中定义的邮件地址发送右键通知")]),s._v(" "),e("p",[s._v("2--VRRP实例(instance)配置范例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vrrp_instance http {\nstate MASTER\ninterface eth0\ndont_track_primary\ntrack_interface {\neth0\neth1\n}\nmcast_src_ip <IPADDR>\ngarp_master_delay 10\nvirtual_router_id 51\npriority 100\nadvert_int 1\nauthentication {\nauth_type PASS\nautp_pass 1234\n}\nvirtual_ipaddress {\n#<IPADDR>/<MASK> brd <IPADDR> dev <STRING> scope <SCOPT> label <LABEL>\n192.168.200.17/24 dev eth1\n192.168.200.18/24 dev eth2 label eth2:1\n}\nvirtual_routes {\n# src <IPADDR> [to] <IPADDR>/<MASK> via|gw <IPADDR> dev <STRING> scope <SCOPE> tab\nsrc 192.168.100.1 to 192.168.109.0/24 via 192.168.200.254 dev eth1\n192.168.110.0/24 via 192.168.200.254 dev eth1\n192.168.111.0/24 dev eth2\n192.168.112.0/24 via 192.168.100.254\n}\nnopreempt\npreemtp_delay 300\ndebug\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br")])]),e("p",[s._v("state：state指定instance(Initial)的初始状态，就是说在配置好后，这台服务器的初始状态就是这里指定的，但这里指定的不算，还是得要通过竞选通过优先级来确定，里如果这里设置为master，但如若他的优先级不及另外一台，那么这台在发送通告时，会发送自己的优先级，另外一台发现优先级不如自己的高，那么他会就回抢占为master\ninterface：实例绑定的网卡，因为在配置虚拟IP的时候必须是在已有的网卡上添加的\ndont track primary：忽略VRRP的interface错误\ntrack interface：跟踪接口，设置额外的监控，里面任意一块网卡出现问题，都会进入故障(FAULT)状态，例如，用nginx做均衡器的时候，内网必须正常工作，如果内网出问题了，这个均衡器也就无法运作了，所以必须对内外网同时做健康检查\nmcast\nsrc\nip：发送多播数据包时的源IP地址，这里注意了，这里实际上就是在那个地址上发送VRRP通告，这个非常重要，一定要选择稳定的网卡端口来发送，这里相当于heartbeat的心跳端口，如果没有设置那么就用默认的绑定的网卡的IP，也就是interface指定的IP地址\ngarp master delay：在切换到master状态后，延迟进行免费的ARP(gratuitous ARP)请求\nvirtual router id：这里设置VRID，这里非常重要，相同的VRID为一个组，他将决定多播的MAC地址\npriority 100：设置本节点的优先级，优先级高的为master\nadvert int：检查间隔，默认为1秒\nvirtual")]),s._v(" "),e("p",[s._v("ipaddress：这里设置的就是VIP，也就是虚拟IP地址，他随着state的变化而增加删除，当state为master的时候就添加，当state为backup的时候删除，这里主要是有优先级来决定的，和state设置的值没有多大关系，这里可以设置多个IP地址\nvirtual routes：原理和virtual ipaddress一样，只不过这里是增加和删除路由\nlvs sync daemon interface：lvs syncd绑定的网卡\nauthentication：这里设置认证\nauth type：认证方式，可以是PASS或AH两种认证方式\nauth pass：认证密码\nnopreempt：设置不抢占，这里只能设置在state为backup的节点上，而且这个节点的优先级必须别另外的高\npreempt delay：抢占延迟\ndebug：debug级别\nnotify master：和sync group这里设置的含义一样，可以单独设置，例如不同的实例通知不同的管理人员，http实例发给网站管理员，mysql的就发邮件给DBA")]),s._v(" "),e("p",[s._v("3--VRRP脚本范例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vrrp_script check_running {\n   script “/usr/local/bin/check_running”\n   interval 10\n   weight 10\n}\nvrrp_instance http {\n   state BACKUP\n   smtp_alert\n   interface eth0\n   virtual_router_id 101\n   priority 90\n   advert_int 3\n   authentication {\n   auth_type PASS\n   auth_pass whatever\n   }\n   virtual_ipaddress {\n   1.1.1.1\n   }\n   track_script {\n   check_running weight 20\n   }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[s._v("首先在vrrp_script区域定义脚本名字和脚本执行的间隔和脚本执行的优先级变更")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vrrp_script check_running {\nscript “/usr/local/bin/check_running”\ninterval 10     #脚本执行间隔\nweight 10      #脚本结果导致的优先级变更：10表示优先级+10；-10则表示优先级-10\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("然后在实例(vrrp_instance)里面引用，有点类似脚本里面的函数引用一样：先定义，后引用函数名")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("track_script {\ncheck_running weight 20\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("注意：VRRP脚本(vrrp_script)和VRRP实例(vrrp_instance)属于同一个级别")]),s._v(" "),e("p",[s._v("3)LVS配置\n如果你没有配置LVS+keepalived，那么无需配置这段区域，如果你用的是nginx来代替LVS，这无需配置这款，这里的LVS配置是专门为keepalived+LVS集成准备的。\n注意了，这里LVS配置并不是指真的安装LVS然后用ipvsadm来配置它，而是用keepalived的配置文件来代替ipvsadm来配置LVS，这样会方便很多，一个配置文件搞定这些，维护方便，配置方便是也！\n这里LVS配置也有两个配置\n一个是虚拟主机组配置\n一个是虚拟主机配置")]),s._v(" "),e("p",[s._v("1--虚拟主机组配置文件详解\n这个配置是可选的，根据需求来配置吧，这里配置主要是为了让一台realserver上的某个服务可以属于多个Virtual Server，并且只做一次健康检查:\nvirtual_server_group "),e("STRING",[s._v(" { # VIP port "),e("IPADDR",[e("PORT",[e("IPADDR",[e("PORT",[s._v(" fwmark "),e("INT",[s._v(" }")])],1)],1)],1)],1)],1)],1),s._v(" "),e("p",[s._v("2--虚拟主机配置\nvirtual server可以以下面三种的任意一种来配置:\na）virtual server IP port\nb）virtual server fwmark int\nc）virtual server group string")]),s._v(" "),e("p",[s._v("下面以第一种比较常用的方式来配详细解说一下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("virtual_server 192.168.1.2 80 {                     #设置一个virtual server: VIP:Vport\ndelay_loop 3                                                  # service polling的delay时间，即服务轮询的时间间隔\n \nlb_algo rr|wrr|lc|wlc|lblc|sh|dh                        #LVS调度算法\nlb_kind NAT|DR|TUN                                      #LVS集群模式                     \npersistence_timeout 120                                #会话保持时间（秒为单位），即以用户在120秒内被分配到同一个后端realserver\npersistence_granularity <NETMASK>              #LVS会话保持粒度，ipvsadm中的-M参数，默认是0xffffffff，即每个客户端都做会话保持\nprotocol TCP                                                  #健康检查用的是TCP还是UDP\nha_suspend                                                   #suspendhealthchecker’s activity\nvirtualhost <string>                                       #HTTP_GET做健康检查时，检查的web服务器的虚拟主机（即host：头）\n \nsorry_server <IPADDR> <PORT>                 #备用机，就是当所有后端realserver节点都不可用时，就用这里设置的，也就是临时把所有的请求都发送到这里啦\n \nreal_server <IPADDR> <PORT>                    #后端真实节点主机的权重等设置，主要，后端有几台这里就要设置几个\n{\nweight 1                                                         #给每台的权重，0表示失效(不知给他转发请求知道他恢复正常)，默认是1\ninhibit_on_failure                                            #表示在节点失败后，把他权重设置成0，而不是冲IPVS中删除\n \nnotify_up <STRING> | <QUOTED-STRING>  #检查服务器正常(UP)后，要执行的脚本\nnotify_down <STRING> | <QUOTED-STRING> #检查服务器失败(down)后，要执行的脚本\nHTTP_GET                                                     #健康检查方式\n{\nurl {                                                                #要坚持的URL，可以有多个\npath /                                                             #具体路径\ndigest <STRING>                                           \nstatus_code 200                                            #返回状态码\n}\nconnect_port 80                                            #监控检查的端口\n \nbindto <IPADD>                                             #健康检查的IP地址\nconnect_timeout   3                                       #连接超时时间\nnb_get_retry 3                                               #重连次数\ndelay_before_retry 2                                      #重连间隔\n} # END OF HTTP_GET|SSL_GET\n \n#下面是常用的健康检查方式，健康检查方式一共有HTTP_GET|SSL_GET|TCP_CHECK|SMTP_CHECK|MISC_CHECK这些\n#TCP方式\nTCP_CHECK {\nconnect_port 80\nbindto 192.168.1.1\nconnect_timeout 4\n} # TCP_CHECK\n \n# SMTP方式，这个可以用来给邮件服务器做集群\nSMTP_CHECK\nhost {\nconnect_ip <IP ADDRESS>\nconnect_port <PORT>                                     #默认检查25端口\n14 KEEPALIVED\nbindto <IP ADDRESS>\n}\nconnect_timeout <INTEGER>\nretry <INTEGER>\ndelay_before_retry <INTEGER>\n# “smtp HELO\nhelo_name <STRING>|<QUOTED-STRING>\n} #SMTP_CHECK\n \n#MISC方式，这个可以用来检查很多服务器只需要自己会些脚本即可\nMISC_CHECK\n{\nmisc_path <STRING>|<QUOTED-STRING> #外部程序或脚本\nmisc_timeout <INT>                                    #脚本或程序执行超时时间\n \nmisc_dynamic                                               #这个就很好用了，可以非常精确的来调整权重，是后端每天服务器的压力都能均衡调配，这个主要是通过执行的程序或脚本返回的状态代码来动态调整weight值，使权重根据真实的后端压力来适当调整，不过这需要有过硬的脚本功夫才行哦\n#返回0：健康检查没问题，不修改权重\n#返回1：健康检查失败，权重设置为0\n#返回2-255：健康检查没问题，但是权重却要根据返回代码修改为返回码-2，例如如果程序或脚本执行后返回的代码为200，#那么权重这回被修改为 200-2\n}\n} # Realserver\n} # Virtual Server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br")])]),e("p",[s._v("转载地址：")]),s._v(" "),e("p",[s._v("https://www.cnblogs.com/kevingrace/p/6248941.html")])])}),[],!1,null,null,null);n.default=t.exports},694:function(s,n,a){s.exports=a.p+"assets/img/keepalived1.07d0ab36.png"}}]);