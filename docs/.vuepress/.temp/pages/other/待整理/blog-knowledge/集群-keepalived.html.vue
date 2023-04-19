<template><p>Let’s learn keepalived together！</p>
<!--more-->
<h2 id="keepalived介绍" tabindex="-1"><a class="header-anchor" href="#keepalived介绍" aria-hidden="true">#</a> keepalived介绍</h2>
<p>keepalived观察其名可知，保持存活，在网络里面就是保持在线了，也就是所谓的高可用或热备，它集群管理中保证集群高可用的一个服务软件，其功能类似于heartbeat，用来防止单点故障(单点故障是指一旦某一点出现故障就会导致整个系统架构的不可用)的发生。说到keepalived就不得不说VRRP协议，可以说这个协议就是keepalived实现的基础，那么首先我们来看看VRRP协议。</p>
<h2 id="vrrp协议介绍" tabindex="-1"><a class="header-anchor" href="#vrrp协议介绍" aria-hidden="true">#</a> VRRP协议介绍</h2>
<p>学过网络的朋友都知道，网络在设计的时候必须考虑到冗余容灾，包括线路冗余，设备冗余等，防止网络存在单点故障，那在路由器或三层交换机处实现冗余就显得尤为重要。</p>
<p>在网络里面有个协议就是来做这事的，这个协议就是VRRP协议，Keepalived就是巧用VRRP协议来实现高可用性(HA)的发生。</p>
<p>VRRP全称Virtual Router Redundancy Protocol，即虚拟路由冗余协议。对于VRRP，需要清楚知道的是：</p>
<p>1）VRRP是用来实现路由器冗余的协议。
2）VRRP协议是为了消除在静态缺省路由环境下路由器单点故障引起的网络失效而设计的主备模式的协议，使得发生故障而进行设计设备功能切换时可以不影响内外数据通信，不需要再修改内部网络的网络参数。
3）VRRP协议需要具有IP备份，优先路由选择，减少不必要的路由器通信等功能。
4）VRRP协议将两台或多台路由器设备虚拟成一个设备，对外提供虚拟路由器IP（一个或多个）。然而，在路由器组内部，如果实际拥有这个对外IP的路由器如果工作正常的话，就是master，或者是通过算法选举产生的，MASTER实现针对虚拟路由器IP的各种网络功能，如ARP请求，ICMP，以及数据的转发等，其他设备不具有该IP，状态是BACKUP。除了接收MASTER的VRRP状态通告信息外，不执行对外的网络功能，当主级失效时，BACKUP将接管原先MASTER的网络功能。
5）VRRP协议配置时，需要配置每个路由器的虚拟路由ID(VRID)和优先权值，使用VRID将路由器进行分组，具有相同VRID值的路由器为同一个组，VRID是一个0-255的整整数，；同一个组中的路由器通过使用优先权值来选举MASTER。，优先权大者为MASTER，优先权也是一个0-255的正整数。</p>
<h2 id="keepalived工作原理" tabindex="-1"><a class="header-anchor" href="#keepalived工作原理" aria-hidden="true">#</a> keepalived工作原理</h2>
<p>keepalived可提供vrrp以及health-check功能，可以只用它提供双机浮动的vip（vrrp虚拟路由功能），这一样可以简单实现一个双机热备高可用的功能：keepalived是以VRRP虚拟路由冗余协议为基础实现高可用的，可以认为是现实路由高可用的协议，即将N台提供相同功能的路由器组成一个路由器组，这个组里面有一个master和多个backup，master上面有一个对外提供服务的vip（该路由器所在局域网内其他机器的默认路由为该vip），master会发组播，当backup收不到VRRP包时就认为master宕掉了，这时就需要根据VRRP的优先级来选举一个backup当master。这样的话就可以保证路由器的高可用了。</p>
<p>下图是keepalived的组件图</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/keepalived1.png" alt="" loading="lazy"></p>
<p>keepalived也是模块化设计，不同模块负责不同的功能，它主要有三个模块，分别是core、check和VRRP，其中：</p>
<p>core模块：为keepalived的核心组件，负责主进程的启动、维护以及全局配置文件的加载和解析；</p>
<p>check：负责健康检查，包括常见的各种检查方式；</p>
<p>VRRP模块：是来实现VRRP协议的。</p>
<p>system call：系统调用</p>
<p>watch dog：监控check和vrrp进程的看管者，check负责检测子进程的健康状态，当其检测到master上的服务不可用时则通告vrrp将其转移至backup服务器上。</p>
<p>除此之外，keepalived还有下面两个组件：</p>
<p>libipfwc:iptables（ipchains）库，配置LVS会用到</p>
<p>libipvs*：配置LVS会用到</p>
<p>注意，keepalived和LVS完全是两码事，只不过他们各负其责相互配合而已。</p>
<p>keepalived正常启动的时候，共启动3个进程：
一个是父进程，负责监控其子进程；一个是VRRP子进程，另外一个是checkers子进程；
两个子进程都被系统watchlog看管，两个子进程各自负责复杂自己的事。
Healthcheck子进程检查各自服务器的健康状况，，例如http,lvs。如果healthchecks进程检查到master上服务不可用了，就会通知本机上的VRRP子进程，让他删除通告，并且去掉虚拟IP，转换为BACKUP状态。</p>
<h2 id="keepalived作用" tabindex="-1"><a class="header-anchor" href="#keepalived作用" aria-hidden="true">#</a> Keepalived作用</h2>
<p>Keepalived主要用作RealServer的健康状态检查以及LoadBalance主机和BackUP主机之间failover的实现。Keepalived的作用是检测web服务器的状态，如果有一台web服务器死机，或工作出现故障，Keepalived将检测到，并将有故障的web服务器从系统中剔除，当web服务器工作正常后Keepalived自动将web服务器加入到服务器群中，这些工作全部自动完成，不需要人工干涉，需要人工做的只是修复故障的web服务器。</p>
<p>----------------------------------------------------------------------------------------------------------------------------
Keepalived和Heartbeat之间的对比
1）Keepalived使用更简单：从安装、配置、使用、维护等角度上对比，Keepalived都比Heartbeat要简单得多，尤其是Heartbeat2.1.4后拆分成3个子项目，安装、配置、使用都比较复杂，尤其是出问题的时候，都不知道具体是哪个子系统出问题了；而Keepalived只有1个安装文件、1个配置文件，配置文件也简单很多；
2）Heartbeat功能更强大：Heartbeat虽然复杂，但功能更强大，配套工具更全，适合做大型集群管理，而Keepalived主要用于集群倒换，基本没有管理功能；
3）协议不同：Keepalived使用VRRP协议进行通信和选举，Heartbeat使用心跳进行通信和选举；Heartbeat除了走网络外，还可以通过串口通信，貌似更可靠；
Keepalived使用的vrrp协议方式，虚拟路由冗余协议 ；Heartbeat是基于主机或网络的服务的高可用方式；
Keepalived的目的是模拟路由器的双机；Heartbeat的目的是用户service的双机
4）使用方式基本类似：如果要基于两者设计高可用方案，最终都要根据业务需要写自定义的脚本，Keepalived的脚本没有任何约束，随便怎么写都可以；Heartbeat的脚本有约束，即要支持service
start/stop/restart这种方式，而且Heartbeart提供了很多默认脚本，简单的绑定ip，启动apache等操作都已经有了；</p>
<p>使用建议：
优先使用Keepalived，当Keepalived不够用的时候才选择Heartbeat
lvs的高可用建议用Keepavlived
业务的高可用用Heartbeat
--------------------------------------------------------------------------------------------------------------------------</p>
<h2 id="keepalived的配置文件" tabindex="-1"><a class="header-anchor" href="#keepalived的配置文件" aria-hidden="true">#</a> Keepalived的配置文件</h2>
<p>keepalived只有一个配置文件keepalived.conf，配置文件里面主要包括以下几个配置项，分别是global_defs、static_ipaddress、static_routes、VRRP_script、VRRP_instance和virtual_server。</p>
<p>总的来说，keepalived主要有三类区域配置，注意不是三种配置文件，是一个配置文件里面三种不同类别的配置区域：
1）全局配置(Global Configuration)
2）VRRPD配置
3）LVS配置</p>
<p>下面就重点来说说这三类区域的配置：</p>
<p>1）全局配置
全局配置又包括两个子配置：
全局定义(global definition)
静态路由配置(static ipaddress/routes)</p>
<p>1--全局定义(global definition)配置范例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>global_defs
{
notification_email
{
admin@example.com
}
notification_email_from admin@example.com
smtp_server 127.0.0.1
stmp_connect_timeout 30
router_id node1
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>全局配置解析
global_defs全局配置标识，表面这个区域{}是全局配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>notification_email
{
admin@example.com
admin@ywlm.net
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>表示keepalived在发生诸如切换操作时需要发送email通知，以及email发送给哪些邮件地址，邮件地址可以多个，每行一个
notification_email_from admin@example.com
表示发送通知邮件时邮件源地址是谁
smtp_server 127.0.0.1
表示发送email时使用的smtp服务器地址，这里可以用本地的sendmail来实现
smtp_connect_timeout 30
连接smtp连接超时时间
router_id node1
机器标识</p>
<p>2--静态地址和路由配置范例</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>static_ipaddress
{
192.168.1.1/24 brd + dev eth0 scope global
192.168.1.2/24 brd + dev eth1 scope global
}
static_routes
{
src $SRC_IP to $DST_IP dev $SRC_DEVICE
src $SRC_IP to $DST_IP via $GW dev $SRC_DEVICE
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这里实际上和系统里面用命令配置IP地址和路由的曹一样，例如：
192.168.1.1/24 brd + dev eth0 scope global 相当于: ip addr add 192.168.1.1/24 brd + dev eth0 scope global
就是给eth0配置IP地址
路由同理
一般这个区域不需要配置
这里实际上就是给服务器配置真实的IP地址和路由的，在复杂的环境下可能需要配置，一般不会用这个来配置，我们可以直接用vi /etc/sysconfig/network-script/ifcfg-eth1来配置，切记这里可不是VIP哦，不要搞混淆了，切记切记！</p>
<p>2）VRRPD配置
VRRPD配置包括三个类：
VRRP同步组(synchroization group)
VRRP实例(VRRP Instance)
VRRP脚本</p>
<p>1--VRRP同步组(synchroization group)配置范例</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vrrp_sync_group VG_1 {
group {
http
mysql
}
notify_master /path/to/to_master.sh
notify_backup /path_to/to_backup.sh
notify_fault “/path/fault.sh VG_1”
notify /path/to/notify.sh
smtp_alert
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其中：
group {
http
mysql
}
http和mysql是实例名和下面的实例名一致</p>
<p>notify_master /path/to/to_master.sh：表示当切换到master状态时，要执行的脚本
notify_backup /path_to/to_backup.sh：表示当切换到backup状态时，要执行的脚本
notify_fault “/path/fault.sh VG_1”
notify /path/to/notify.sh：
smtp alter表示切换时给global defs中定义的邮件地址发送右键通知</p>
<p>2--VRRP实例(instance)配置范例</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vrrp_instance http {
state MASTER
interface eth0
dont_track_primary
track_interface {
eth0
eth1
}
mcast_src_ip &lt;IPADDR>
garp_master_delay 10
virtual_router_id 51
priority 100
advert_int 1
authentication {
auth_type PASS
autp_pass 1234
}
virtual_ipaddress {
#&lt;IPADDR>/&lt;MASK> brd &lt;IPADDR> dev &lt;STRING> scope &lt;SCOPT> label &lt;LABEL>
192.168.200.17/24 dev eth1
192.168.200.18/24 dev eth2 label eth2:1
}
virtual_routes {
# src &lt;IPADDR> [to] &lt;IPADDR>/&lt;MASK> via|gw &lt;IPADDR> dev &lt;STRING> scope &lt;SCOPE> tab
src 192.168.100.1 to 192.168.109.0/24 via 192.168.200.254 dev eth1
192.168.110.0/24 via 192.168.200.254 dev eth1
192.168.111.0/24 dev eth2
192.168.112.0/24 via 192.168.100.254
}
nopreempt
preemtp_delay 300
debug
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>state：state指定instance(Initial)的初始状态，就是说在配置好后，这台服务器的初始状态就是这里指定的，但这里指定的不算，还是得要通过竞选通过优先级来确定，里如果这里设置为master，但如若他的优先级不及另外一台，那么这台在发送通告时，会发送自己的优先级，另外一台发现优先级不如自己的高，那么他会就回抢占为master
interface：实例绑定的网卡，因为在配置虚拟IP的时候必须是在已有的网卡上添加的
dont track primary：忽略VRRP的interface错误
track interface：跟踪接口，设置额外的监控，里面任意一块网卡出现问题，都会进入故障(FAULT)状态，例如，用nginx做均衡器的时候，内网必须正常工作，如果内网出问题了，这个均衡器也就无法运作了，所以必须对内外网同时做健康检查
mcast
src
ip：发送多播数据包时的源IP地址，这里注意了，这里实际上就是在那个地址上发送VRRP通告，这个非常重要，一定要选择稳定的网卡端口来发送，这里相当于heartbeat的心跳端口，如果没有设置那么就用默认的绑定的网卡的IP，也就是interface指定的IP地址
garp master delay：在切换到master状态后，延迟进行免费的ARP(gratuitous ARP)请求
virtual router id：这里设置VRID，这里非常重要，相同的VRID为一个组，他将决定多播的MAC地址
priority 100：设置本节点的优先级，优先级高的为master
advert int：检查间隔，默认为1秒
virtual</p>
<p>ipaddress：这里设置的就是VIP，也就是虚拟IP地址，他随着state的变化而增加删除，当state为master的时候就添加，当state为backup的时候删除，这里主要是有优先级来决定的，和state设置的值没有多大关系，这里可以设置多个IP地址
virtual routes：原理和virtual ipaddress一样，只不过这里是增加和删除路由
lvs sync daemon interface：lvs syncd绑定的网卡
authentication：这里设置认证
auth type：认证方式，可以是PASS或AH两种认证方式
auth pass：认证密码
nopreempt：设置不抢占，这里只能设置在state为backup的节点上，而且这个节点的优先级必须别另外的高
preempt delay：抢占延迟
debug：debug级别
notify master：和sync group这里设置的含义一样，可以单独设置，例如不同的实例通知不同的管理人员，http实例发给网站管理员，mysql的就发邮件给DBA</p>
<p>3--VRRP脚本范例</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vrrp_script check_running {
   script “/usr/local/bin/check_running”
   interval 10
   weight 10
}
vrrp_instance http {
   state BACKUP
   smtp_alert
   interface eth0
   virtual_router_id 101
   priority 90
   advert_int 3
   authentication {
   auth_type PASS
   auth_pass whatever
   }
   virtual_ipaddress {
   1.1.1.1
   }
   track_script {
   check_running weight 20
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>首先在vrrp_script区域定义脚本名字和脚本执行的间隔和脚本执行的优先级变更</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vrrp_script check_running {
script “/usr/local/bin/check_running”
interval 10     #脚本执行间隔
weight 10      #脚本结果导致的优先级变更：10表示优先级+10；-10则表示优先级-10
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后在实例(vrrp_instance)里面引用，有点类似脚本里面的函数引用一样：先定义，后引用函数名</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>track_script {
check_running weight 20
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注意：VRRP脚本(vrrp_script)和VRRP实例(vrrp_instance)属于同一个级别</p>
<p>3)LVS配置
如果你没有配置LVS+keepalived，那么无需配置这段区域，如果你用的是nginx来代替LVS，这无需配置这款，这里的LVS配置是专门为keepalived+LVS集成准备的。
注意了，这里LVS配置并不是指真的安装LVS然后用ipvsadm来配置它，而是用keepalived的配置文件来代替ipvsadm来配置LVS，这样会方便很多，一个配置文件搞定这些，维护方便，配置方便是也！
这里LVS配置也有两个配置
一个是虚拟主机组配置
一个是虚拟主机配置</p>
<p>1--虚拟主机组配置文件详解
这个配置是可选的，根据需求来配置吧，这里配置主要是为了让一台realserver上的某个服务可以属于多个Virtual Server，并且只做一次健康检查:
virtual_server_group <STRING> { # VIP port <IPADDR> <PORT> <IPADDR> <PORT> fwmark <INT> }</p>
<p>2--虚拟主机配置
virtual server可以以下面三种的任意一种来配置:
a）virtual server IP port
b）virtual server fwmark int
c）virtual server group string</p>
<p>下面以第一种比较常用的方式来配详细解说一下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>virtual_server 192.168.1.2 80 {                     #设置一个virtual server: VIP:Vport
delay_loop 3                                                  # service polling的delay时间，即服务轮询的时间间隔
 
lb_algo rr|wrr|lc|wlc|lblc|sh|dh                        #LVS调度算法
lb_kind NAT|DR|TUN                                      #LVS集群模式                     
persistence_timeout 120                                #会话保持时间（秒为单位），即以用户在120秒内被分配到同一个后端realserver
persistence_granularity &lt;NETMASK>              #LVS会话保持粒度，ipvsadm中的-M参数，默认是0xffffffff，即每个客户端都做会话保持
protocol TCP                                                  #健康检查用的是TCP还是UDP
ha_suspend                                                   #suspendhealthchecker’s activity
virtualhost &lt;string>                                       #HTTP_GET做健康检查时，检查的web服务器的虚拟主机（即host：头）
 
sorry_server &lt;IPADDR> &lt;PORT>                 #备用机，就是当所有后端realserver节点都不可用时，就用这里设置的，也就是临时把所有的请求都发送到这里啦
 
real_server &lt;IPADDR> &lt;PORT>                    #后端真实节点主机的权重等设置，主要，后端有几台这里就要设置几个
{
weight 1                                                         #给每台的权重，0表示失效(不知给他转发请求知道他恢复正常)，默认是1
inhibit_on_failure                                            #表示在节点失败后，把他权重设置成0，而不是冲IPVS中删除
 
notify_up &lt;STRING> | &lt;QUOTED-STRING>  #检查服务器正常(UP)后，要执行的脚本
notify_down &lt;STRING> | &lt;QUOTED-STRING> #检查服务器失败(down)后，要执行的脚本
HTTP_GET                                                     #健康检查方式
{
url {                                                                #要坚持的URL，可以有多个
path /                                                             #具体路径
digest &lt;STRING>                                           
status_code 200                                            #返回状态码
}
connect_port 80                                            #监控检查的端口
 
bindto &lt;IPADD>                                             #健康检查的IP地址
connect_timeout   3                                       #连接超时时间
nb_get_retry 3                                               #重连次数
delay_before_retry 2                                      #重连间隔
} # END OF HTTP_GET|SSL_GET
 
#下面是常用的健康检查方式，健康检查方式一共有HTTP_GET|SSL_GET|TCP_CHECK|SMTP_CHECK|MISC_CHECK这些
#TCP方式
TCP_CHECK {
connect_port 80
bindto 192.168.1.1
connect_timeout 4
} # TCP_CHECK
 
# SMTP方式，这个可以用来给邮件服务器做集群
SMTP_CHECK
host {
connect_ip &lt;IP ADDRESS>
connect_port &lt;PORT>                                     #默认检查25端口
14 KEEPALIVED
bindto &lt;IP ADDRESS>
}
connect_timeout &lt;INTEGER>
retry &lt;INTEGER>
delay_before_retry &lt;INTEGER>
# “smtp HELO
helo_name &lt;STRING>|&lt;QUOTED-STRING>
} #SMTP_CHECK
 
#MISC方式，这个可以用来检查很多服务器只需要自己会些脚本即可
MISC_CHECK
{
misc_path &lt;STRING>|&lt;QUOTED-STRING> #外部程序或脚本
misc_timeout &lt;INT>                                    #脚本或程序执行超时时间
 
misc_dynamic                                               #这个就很好用了，可以非常精确的来调整权重，是后端每天服务器的压力都能均衡调配，这个主要是通过执行的程序或脚本返回的状态代码来动态调整weight值，使权重根据真实的后端压力来适当调整，不过这需要有过硬的脚本功夫才行哦
#返回0：健康检查没问题，不修改权重
#返回1：健康检查失败，权重设置为0
#返回2-255：健康检查没问题，但是权重却要根据返回代码修改为返回码-2，例如如果程序或脚本执行后返回的代码为200，#那么权重这回被修改为 200-2
}
} # Realserver
} # Virtual Server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><p>转载地址：</p>
<p>https://www.cnblogs.com/kevingrace/p/6248941.html</p>
</template>
