
iptables高级部分
====================================================================
扩展匹配            man iptables 	    /MATCH EXTENSIONS
扩展动作            man iptables     /TARGET EXTENSIONS


netfilter不只是包过滤防火墙（四层）
netfilter同样是状态防火墙

一、扩展匹配 MATCH EXTENSIONS
获得帮助：
[root@tianyun ~]# iptables -m icmp -h		        //从后往前查看
[root@tianyun ~]# iptables -m iprange -h            	//从后往前查看

[root@tianyun ~]# yum -y install vsftpd httpd 
[root@tianyun ~]# service httpd start; service vsftpd start; service sshd start
[root@tianyun ~]# iptables -F
[root@tianyun ~]# iptables -A INPUT -j REJECT

-m icmp
[root@tianyun ~]# iptables -t filter -I INPUT -p icmp -m icmp --icmp-type echo-reply -j ACCEPT		    //回应

-m iprange
[root@tianyun ~]# iptables -t filter -I INPUT -m iprange --src-range 192.168.2.20-192.168.2.100 -j REJECT

-m multiport
[root@tianyun ~]# iptables -m multiport -h
[root@tianyun ~]# iptables -t filter -I INPUT -p tcp -m multiport --dports 20,21,22,25,80,110 -j ACCEPT

-m state	
跟TCP中的状态没有关系
NEW				    新生态
ESTABLISHED	连接态
RELATED		    衍生态
INVALID			无效态
[root@tianyun ~]# iptables -t filter -I INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

==================================================================
lab1： 使用状态防火墙，放行本机FTP服务[被动模式]
[root@tianyun ~]# iptables -t filter -I INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
[root@tianyun ~]# iptables -t filter -I INPUT -p tcp --dport 20:21 -j ACCEPT
[root@tianyun ~]# iptables -t filter -A INPUT -j REJECT							
[root@tianyun ~]# modprobe nf_conntrack_ftp 
[root@tianyun ~]# vim /etc/sysconfig/iptables-config
IPTABLES_MODULES="nf_conntrack_ftp"
小结： 该内核模块的作用是在<连接数据端口时>，将第一次握手的数据包状态由原来的 NEW 识别成 RELATED
==================================================================

-m tos	 //ip协议头部type of service
[root@tianyun ~]# iptables -F
[root@tianyun ~]# tcpdump -i eth0 -nn port 22 -vvv	//抓取远程主机访问本机ssh数据包，分别于输入密码前和后观察TOS值
[root@tianyun ~]# tcpdump -i eth0 -nn port 22 -vvv	//抓取远程从本机rsync或scp复制文件，分别于输入密码前和后观察TOS值
小结：都是使用22/tcp，但可以通过IP报文中的TOS值来区分应用
ssh： tos 0x0  0x10
scp： tos 0x0  0x8
rsync: tos 0x0  0x8
[root@tianyun ~]# iptables -m tos -h
[root@tianyun ~]# iptables -t filter -A INPUT -p tcp --dport 22 -m tos ! --tos 0x10 -j ACCEPT	//仅拒绝客户端ssh到本机
[root@tianyun ~]# iptables -t filter -A INPUT -j REJECT

-m tcp
按TCP标记匹配
Flags are:  SYN  ACK  FIN  RST  URG  PSH    ALL  NONE
[root@tianyun ~]# iptables -t filter -A INPUT -p tcp -m tcp --tcp-flags SYN,ACK,FIN,RST SYN --dport 80 -j ACCEPT 
[root@tianyun ~]# iptables -t filter -A INPUT -p tcp --syn --dport 80 -j ACCEPT

--tcp-flags SYN,ACK,FIN,RST SYN		检查四个标记位SYN,ACK,FIN,RST   但只有SYN标记位才匹配
													    则允许三次握手中的第一次握手，等价于 --syn
====================================================================

-m limit [要命不要脸]
[root@tianyun ~]# iptables -F
实验：从客户端ping本机，观察序列号
[root@tianyun ~]# iptables -t filter -A INPUT -p icmp  -m limit --limit 20/minute -j ACCEPT
[root@tianyun ~]# iptables -t filter -A INPUT -j REJECT
进入本机INPUT链的ICMP，如果匹配第一条则放行，不匹配的将被第二条拒绝，默认前5个不限
16/second
16/minute
16/hour
16/day
[root@tianyun ~]# iptables -t filter -A INPUT  -p tcp --syn --dport 80  -m limit --limit 50/second -j ACCEPT
[root@tianyun ~]# iptables -t filter -A INPUT -j REJECT

-m connlimit 限同一IP最大连接数
[root@tianyun ~]# iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
[root@tianyun ~]# iptables -A INPUT -p tcp --syn --dport 22 -m connlimit ! --connlimit-above 2 -j ACCEPT 	
//仅允许每个客户端有两个ssh连接
====================================================================
等价于：
[root@tianyun ~]# iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 -j REJECT
//超过两个连接拒绝
====================================================================

[root@tianyun ~]# iptables -A INPUT -p tcp --syn --dport 80 -m connlimit ! --connlimit-above 100 -j ACCEPT
//仅允许每个客户端有100个requests
[root@tianyun ~]# iptables -A INPUT -j REJECT

-m time
[root@tianyun ~]# iptables -A INPUT -m time --timestart 12:00 --timestop 13:00 -j ACCEPT
[root@tianyun ~]# iptables -A INPUT -p tcp --syn --dport 22 -m time --timestart 12:00 --timestop 13:00 -j ACCEPT
[root@tianyun ~]# iptables -A INPUT -j REJECT

-m comment
[root@tianyun ~]# iptables -A INPUT -s 172.16.130.7 -m comment --comment "cloud class" -j REJECT

-m mark
[root@tianyun ~]# iptables -t filter -A INPUT -m mark --mark 2 -j REJECT


二、动作扩展 TARGET EXTENSIONS
filter:
-j ACCEPT
-j DROP
-j REJECT
-j LOG

nat:
-j SNAT                            //转换源地址
-j MASQUERADE               //转换源地址
-j DNAT                           //转换目标地址及端口
-j REDIRECT                    //转换目标端口（重定向）

mangle:
-j MARK
====================================================================

-j LOG
[root@tianyun ~]# grep 'kern.*' /etc/rsyslog.conf
kern.*		/var/log/kernel.log
[root@tianyun ~]# service rsyslog restart

[root@tianyun ~]# iptables -j LOG  -h
[root@tianyun ~]# iptables -t filter -A INPUT -p tcp --syn --dport 22 -j LOG  --log-prefix " tianyun_ssh "		
[root@tianyun ~]# iptables -t filter -A INPUT -p tcp --syn --dport 22 -j ACCEPT
[root@tianyun ~]# iptables -t filter -A INPUT -j REJECT

-j REJECT
当访问一个未开启的TCP端口时，应该返回一个带有RST标记的数据包
当访问一个未开启的UDP端口，结果返回port xxx unreachable
当访问一个开启的TCP端口，但被防火墙REJECT，结果返回port xxx unreachable
[root@tianyun ~]# iptables -j REJECT -h
[root@tianyun ~]# iptables -t filter -A  INPUT -p tcp --dport 22  -j REJECT --reject-with tcp-reset		 //返回一个自定义消息类型

-j MARK
[root@tianyun ~]# iptables -t mangle -L
[root@tianyun ~]# iptables -j MARK -h
[root@tianyun ~]# iptables -t mangle -A PREROUTING -s 192.168.2.110 -j MARK --set-mark 1
[root@tianyun ~]# iptables -t mangle -A PREROUTING -s 192.168.2.25 -j MARK --set-mark 2
[root@tianyun ~]# iptables -t filter -A INPUT -m mark --mark 1 -j ACCEPT		                                //按照标记匹配
[root@tianyun ~]# iptables -t filter -A INPUT -m mark --mark 2 -j REJECT


NAT表：
====================================================================
POSTROUTING：	SNAT, MASQUERADE
PRETROUTING： 	DNAT, REDIRECT
OUTPUT：	  			DNAT,针对本机
====================================================================

让KVM虚拟机访问外部网络（默认）：
-j SNAT/MASQUERADE  [必须开启kernel ip_forward]
[root@tianyun ~]# iptables -t nat -F
[root@tianyun ~]# iptables -F
[root@tianyun ~]# iptables -t nat -A POSTROUTING -s 192.168.122.0/24 ! -d 192.168.122.0/24 -j SNAT --to 外部地址
[root@tianyun ~]# iptables -t nat -A POSTROUTING -s 192.168.122.0/24 ! -d 192.168.122.0/24 -j MASQUERADE

暴露KVM虚拟机的服务（端口映射）：
-j DNAT  [必须开启kernel ip_forward]
[root@tianyun ~]# iptables -t nat -A PREROUTING -d 172.16.30.30 -p tcp --dport 80 -j DNAT --to  192.168.122.66:80
[root@tianyun ~]# iptables -t nat -A PREROUTING -d 172.16.30.30 -p tcp --dport 8080 -j DNAT --to  192.168.122.77:80
[root@tianyun ~]# iptables -t nat -A PREROUTING -p tcp --dport 2222 -j DNAT --to 192.168.122.66:22

[root@tianyun ~]# iptables -t nat -A PREROUTING -d 172.16.30.240 -p tcp --dport 80 -j DNAT --to 192.168.122.66
[root@tianyun ~]# iptables -t nat -A PREROUTING -d 172.16.30.240 -p tcp --dport 22 -j DNAT --to 192.168.122.66
[root@tianyun ~]# iptables -t nat -A PREROUTING -d 172.16.30.241 -p tcp --dport 80 -j DNAT --to 192.168.122.67
[root@tianyun ~]# iptables -t nat -A PREROUTING -d 172.16.30.241 -p tcp --dport 22 -j DNAT --to 192.168.122.67

为接口绑定地址
[root@tianyun ~]# ip addr add dev eth0 172.16.30.240/24
[root@tianyun ~]# ip addr add dev eth0 172.16.30.241/24
[root@tianyun ~]# ip a s eth0
3: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 3c:97:0e:54:c5:82 brd ff:ff:ff:ff:ff:ff
    inet 172.16.30.30/24 brd 172.16.30.255 scope global eth0
    inet 172.16.30.240/24 scope global secondary eth0
    inet 172.16.30.241/24 scope global secondary eth0
    inet6 fe80::3e97:eff:fe54:c582/64 scope link 
    valid_lft forever preferred_lft forever

[root@tianyun ~]# cat /etc/sysconfig/network-scripts/ifcfg-eth0
IPADDR=172.16.30.30
PREFIX=24
IPADDR1=172.16.30.240
PREFIX1=24
IPADDR2=172.16.30.241
PREFIX2=24
GATEWAY=172.16.30.254

-j REDIRECT   //本地端口转发
[root@nat_server ~]# iptables -t nat -A PREROUTING -s 172.16.130.0/24 -p tcp --dport 8888 -j REDIRECT --to-ports 22
====================================================================
抓包软件


