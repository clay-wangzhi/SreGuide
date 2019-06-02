
VS/DR （直接路由模式）
=================================================================================

实验说明：
1.KVM网络使用NAT模式
2.DR模式要求Director DIP 和 所有RealServer RIP必须在同一个网段及广播域
3.所有节点网关均指定真实网关







注：调度器和RealServer必须在同一个LAN, LAN可以使用公网IP，也可以使用private IP
公网IP：　前端路由器工作为路由模式
私网IP：   前端路由器工作为NAT，并将某个公网IP映射到VIP（private）



网络拓朴：
Client：                                  CIP： 192.168.122.1

Director：  							  VIP：192.168.122.100 
											DIP：192.168.122.2                                       
											
Real Server： RIP：	192.168.122.10    192.168.122.20	192.168.122.30
				  VIP：	192.168.122.100  192.168.122.100 192.168.122.100       Nor-arp
						 
DNS Server： www.tianyun.com  ===> 192.168.122.100

一、VS/DR实施
1. 准备工作（集群中所有主机）
IP, hostname, hosts, iptables, firewalld, SELinux, ssh trust, ntp	
[root@tianyun ~]# cat /etc/hosts
127.0.0.1           	    localhost
192.168.122.2		    director1.tianyun.com director1
192.168.122.10	    node1.tianyun.com node1 
192.168.122.20	    node2.tianyun.com node2 
192.168.122.30	    node3.tianyun.com node3 

2. RS配置
配置好网站服务器，测试所有RS												 //为了测试效果，提供不同的页面
[root@tianyun ~]# yum -y install httpd
[root@tianyun ~]# ip addr add dev lo 192.168.122.100/32			    //在lo接口上绑定VIP
[root@tianyun ~]# echo 1 > /proc/sys/net/ipv4/conf/all/arp_ignore	//non-arp
[root@tianyun ~]# echo 2 > /proc/sys/net/ipv4/conf/all/arp_announce	
	
3. Director分发器配置
配置VIP
[root@tianyun ~]# ip addr add dev eth0 192.168.122.100/32			//配置VIP
[root@tianyun ~]# yum -y install ipvsadm										//RHEL确保LoadBalancer仓库可用
	
定义LVS分发策略
[root@tianyun ~]# ipvsadm -C
[root@tianyun ~]# ipvsadm -A -t 192.168.122.100:80 -s rr 
[root@tianyun ~]# ipvsadm -a -t 192.168.122.100:80 -r 192.168.122.10 -g	
[root@tianyun ~]# ipvsadm -a -t 192.168.122.100:80 -r 192.168.122.20 -g
[root@tianyun ~]# ipvsadm -a -t 192.168.122.100:80 -r 192.168.122.30 -g
[root@tianyun ~]# service ipvsadm save
Saving IPVS table to /etc/sysconfig/ipvsadm:               [  OK  ]
[root@tianyun ~]# ipvsadm -Ln
IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  	-> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  192.168.122.100:80 rr
  	-> 192.168.122.10:80              Route   1      0          0
  	-> 192.168.122.20:80              Route   1      0          0
  	-> 192.168.122.30:80              Route   1      0          0


[root@tianyun ~]# ipvsadm -L -n
[root@tianyun ~]# ipvsadm -L -n --stats			
[root@tianyun ~]# ipvsadm -L -n --rate				
[root@tianyun ~]# ipvsadm -Ln -c						
[root@tianyun ~]# watch -n.5 'ipvsadm -Ln -c'
	
4. 测试
[root@client ~]# elinks -dump http://192.168.122.100
[root@client ~]# ab -c 1000 -n 1000 http://192.168.122.100/
	
5. 小结
	VS/DR模式的原理是： 当一个client发送一个请求到VIP，Director根据VIP选择对应的real-server的Pool，根据算法，在Pool中选择一台Real-server，
然后将client的请求包发给选择的Real-server，最后选择的Real-server把应答包直接传给client
=================================================================================	
	
	
	
	
	
	
	