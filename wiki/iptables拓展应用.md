
Netfilter/Iptables
====================================================================

扩展匹配［自修］：
1. iptables库文件
//安装较新版本的iptables
[root@tianyun ~]# iptables -m time -h
[root@tianyun ~]# iptables -m layer7 -h
iptables v1.4.7: Couldn't load match `layer7':/lib64/xtables/libipt_layer7.so: cannot open shared object file: No such file or directory
Try `iptables -h' or 'iptables --help' for more information.

2. 内核模块
//重新编译并增加kernel模块
//使用第三方的模块
[root@tianyun ~]# ls /lib/modules/`uname -r`/kernel/net/netfilter/ |grep time
xt_time.ko
[root@tianyun ~]# ls /lib/modules/`uname -r`/kernel/net/ipv4/netfilter/

作业：
Lab: 支持L7
Lab: 透明网桥

====================================================================
实验：验证各种包的状态：虚拟机
[root@tianyun ~]# iptables -t filter -A INPUT -m state --state NEW -j LOG --log-prefix "INPUT_NEW "
[root@tianyun ~]# iptables -t filter -A INPUT -m state --state ESTABLISHED -j LOG --log-prefix "INPUT_ESTAB "
[root@tianyun ~]# iptables -t filter -A INPUT -m state --state RELATED -j LOG --log-prefix "INPUT_RELATED "
[root@tianyun ~]# iptables -t filter -A INPUT -m state --state INVALID -j LOG --log-prefix "INPUT_INVALIED "
						      ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝						
[root@tianyun ~]# iptables -t filter -A OUTPUT -m state --state NEW -j LOG --log-prefix "OUTPUT_NEW "
[root@tianyun ~]# iptables -t filter -A OUTPUT -m state --state ESTABLISHED -j LOG --log-prefix "OUTPUT_ESTAB "
[root@tianyun ~]# iptables -t filter -A OUTPUT -m state --state RELATED -j LOG --log-prefix "OUTPUT_RELATED "
[root@tianyun ~]# iptables -t filter -A OUTPUT -m state --state INVALID -j LOG --log-prefix "OUTPUT_INVALIED "

[root@tianyun ~]# tail -f /var/log/kernel.log	


lab1: 从远程主机ping
lab2: 从本机ping远程主机，能ping通
lab3: 从本机ping远程主机，未ping通
lab4: 从远程主机访问开启的sshd
lab5: 从远程主机访问未开启的sshd
lab6: 从远程主机 # nmap -sA 192.168.1.250 -p 80 //A, ACK
lab7: 从远程主机 # nmap -sF 192.168.1.250 -p 80 //F, FIN 


[root@tianyun ~]# iptables -nL
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state NEW LOG flags 0 level 4 prefix `eth0_INPUT_NEW ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state ESTABLISHED LOG flags 0 level 4 prefix `eth0_INPUT_ESTAB ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state RELATED LOG flags 0 level 4 prefix `eth0_INPUT_RELATED ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state INVALID LOG flags 0 level 4 prefix `eth0_INPUT_INVALIED ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state NEW LOG flags 0 level 4 prefix `lo_INPUT_NEW ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state ESTABLISHED LOG flags 0 level 4 prefix `lo_INPUT_ESTAB ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state RELATED LOG flags 0 level 4 prefix `lo_INPUT_RELATED ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state INVALID LOG flags 0 level 4 prefix `lo_INPUT_INVALIED ' 

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state NEW LOG flags 0 level 4 prefix `eth0_OUTPUT_NEW ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state ESTABLISHED LOG flags 0 level 4 prefix `eth0_OUTPUT_ESTAB ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state RELATED LOG flags 0 level 4 prefix `eth0_OUTPUT_RELATED ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state INVALID LOG flags 0 level 4 prefix `eth0_OUTPUT_INVALIED ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state NEW LOG flags 0 level 4 prefix `lo_OUTPUT_NEW ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state ESTABLISHED LOG flags 0 level 4 prefix `lo_OUTPUT_ESTAB ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state RELATED LOG flags 0 level 4 prefix `lo_OUTPUT_RELATED ' 
LOG        all  --  0.0.0.0/0            0.0.0.0/0           state INVALID LOG flags 0 level 4 prefix `lo_OUTPUT_INVALIED ' 
====================================================================











