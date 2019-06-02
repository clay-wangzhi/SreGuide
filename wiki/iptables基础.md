
iptables 基础部分

Netfilter/Iptables
====================================================================

一、iptables基础
iptables语法
iptables [-t 要操作的表] <操作命令> [要操作的链] [规则号码] [匹配条件] [-j 匹配后的动作]
                  小写             大写              大写                             小写               大写

表及应用顺序
raw ---> mangle ---> nat ---> filter

常见的操作命令
-L		查看,v详细,n不反解   --line-number
-A		追加，放置最后一条
-I		插入，默认插入成第一条
-D		删除
-F		清空flush
-X		删除空的自定义链
-P		设置默认策略
-Z     计数器归零

要操作的链
INPUT
OUTPUT
FORWARD
PREROUTING
POSTROUTING

基本匹配
-s 192.168.2.0/24  	源地址
-d 192.168.2.1	    目标地址
-p tcp|upd|icmp     	协议
-i eth0		    		input 从eth0接口进入的数据包
-o eth0                  output 从eth0出去的数据包
-p tcp --sport 80    	源端口是80的数据包
-p tcp --dport 80   	目标端口是80,必须和-p tcp|udp 连用

基本动作Target
-j ACCEPT		    	接受				filter
-j REJECT		    	拒绝				filter
-j DROP		    		丢弃				filter
-j LOG                   记录日志       filter
-j SNAT		    	    源地址转换	nat
-j MASQUERADE    伪装				nat     
-j DNAT		    	    目标地址转换	nat     目标地址及端口映射（转换）
-j REDIRECT          端口转换       nat     本地端口转换（本机）
-j MARK		    	    标记				mangle
====================================================================


二、iptables基本应用
netfilter: 
[root@tianyun ~]# cat iptables.sh
#!/bin/bash
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -s 192.168.2.0/24 -j ACCEPT
iptables -A INPUT -s 192.168.3.0/24 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
# iptables -A INPUT -p tcp --dport 25 -j ACCEPT
# iptables -A INPUT -p tcp --dport 110 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
# iptables -A INPUT -p tcp --dport 20 -j ACCEPT					       
# iptables -A INPUT -p tcp --dport 21 -j ACCEPT					        //对外开放FTP控制端口 (command port)
# iptables -A INPUT -p tcp --dport 50000:60000 -j ACCEPT	        //对外开放FTP数据端口 (data port)
iptables -A INPUT -j REJECT
[root@tianyun ~]# iptables -vnL INPUT

ftp:
[root@tianyun ~]# tail -2 /etc/vsftpd/vsftpd.conf
pasv_min_port=50000
pasv_max_port=60000

员工出差：
上海（上网）－－－拨号到－－－> 公司VPN服务器 －－－访问－－－>  公司内网服务器（samba,nfs,ftp,oa）


注： 
从INPUT链进来的包包括
其它主机访问本机的数据包
本机访问其它主机时，其它主机给本机回的数据包

从OUTPUT链出去的包包括
本机访问访其它主机的数据包
其它主机访问本机时，本机给其它主机回的数据包

1. 如何实现?
Client ------------rsync------- 22/tcp Server		ACCEPT
Client ------------ssh----------22/tcp Server   	REJECT

2. 允许主机192.168.1.2 - 192.168.1.50访问网站?

3. 如果客户端发给服务器的第一个包只带有ACK或FIN怎么办?

4. 如果只允许在某些时间段如23:00-23:05访问sshd?
====================================================================







