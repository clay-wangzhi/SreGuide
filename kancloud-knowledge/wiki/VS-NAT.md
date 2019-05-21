
VS/NAT
=================================================================================

实验说明：
1. KVM网络使用NAT模式
2. client、调度器、Real Server都使用虚拟机或使用真实服务器
3. 虚拟机上网卡使用半虚拟化驱动，如果半虚拟化驱动异常，可以使用default/rtl8139






网络拓朴：
Client:									    CIP: 192.168.122.0/24                                        

Director：  						  eth0: VIP：192.168.122.100                                      
----------------------------------------------------------------------------------------------------------------------------
        							  eth1: DIP: 10.10.10.1                                              
				                                                                                                         
Real Server： 	RIP: 10.10.10.10	10.10.10.20    10.10.10.30                                  
                                                                                                                          
DNS Server： 	www.tianyun.com  ===> 192.168.122.100                                
----------------------------------------------------------------------------------------------------------------------------
建议：先在Real Server安装如httpd

一、VS/NAT实施
1. 准备工作（集群中所有主机）［可选］
IP, hostname, hosts, NetworkManager, iptables, firewalld, SELinux, ssh trust, ntp	
[root@tianyun ~]# cat /etc/hosts
127.0.0.1      	localhost
10.10.10.1		director1.tianyun.com director1
10.10.10.10	    node1.tianyun.com node1 
10.10.10.20	    node2.tianyun.com node2 
10.10.10.30	    node3.tianyun.com node3 

2. RS配置
配置好网站服务器，测试所有RS						//为了看到测试效果，建议提供不同的页面
默认网关均指向Directory的DIP
	
3. Director分发器配置
配置VIP
[root@tianyun ~]# ip addr add dev eth0 192.168.122.100/24								
[root@tianyun ~]# vim /etc/sysctl.conf
net.ipv4.ip_forward = 1
[root@tianyun ~]# sysctl -p								//确保打开路由转发
	
定义LVS的分发策略
[root@tianyun ~]# yum -y install ipvsadm		        //RHEL确保LoadBalancer仓库可用
[root@tianyun ~]# ipvsadm -A -t 192.168.122.100:80 -s rr
[root@tianyun ~]# ipvsadm -a -t 192.168.122.100:80 -r 10.10.10.10 -m		//-m masquerading (NAT)
[root@tianyun ~]# ipvsadm -a -t 192.168.122.100:80 -r 10.10.10.20 -m
[root@tianyun ~]# ipvsadm -a -t 192.168.122.100:80 -r 10.10.10.30 -m
[root@tianyun ~]# service ipvsadm save

[root@tianyun ~]# ipvsadm -L
[root@tianyun ~]# ipvsadm -Ln
IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  192.168.122.100:80 rr
  -> 10.10.10.10:80                 Masq        1      0          1         
  -> 10.10.10.20:80                 Masq        1      0          1         
  -> 10.10.10.30:80                 Masq        1      0          1    

[root@tianyun ~]# ipvsadm -L -n --stats			
[root@tianyun ~]# ipvsadm -L -n --rate				//看速率
[root@tianyun ~]# ipvsadm -Ln -c					    //查看LVS的连接条目
[root@tianyun ~]# watch -n.5 'ipvsadm -Ln -c'
	
4. 测试
[root@client ~]# elinks -dump http://192.168.122.100/
[root@client ~]# ab -c 1000 -n 1000 http://192.168.122.100/
	
5. 小结
VS/NAT模式的原理是：当Director收到Client请求时，Director将数据包的目标IP由VIP转换为选中的Real Server的RIP来实现分发，
要求RS将网关指	向Director的DIP。
特点是：配置简单，所有的入站、出站数据包都经过分发器。当数据量比较大时，分发器可能会出现网络瓶颈！因而支持的RS数量少。
	
Director必须开启kernel ip_forward
所有RealServer默认网关指向DIP
Director使用DIP和RealServer RIP通信

[root@director1 ~]# watch -n.5 'ipvsadm -Ln -c'
Every 0.5s: ipvsadm -Ln -c                            Tue Dec 29 06:41:15 2015

IPVS connection entries
pro expire state       source             virtual            destination
TCP 00:32  SYN_RECV    192.168.122.1:55989 192.168.122.100:80 10.10.10.10:80
TCP 00:42  SYN_RECV    192.168.122.1:55991 192.168.122.100:80 10.10.10.20:80
TCP 00:41  SYN_RECV    192.168.122.1:55990 192.168.122.100:80 10.10.10.30:80
TCP 00:29  SYN_RECV    192.168.122.1:55988 192.168.122.100:80 10.10.10.20:80
TCP 00:59  SYN_RECV    192.168.122.1:55993 192.168.122.100:80 10.10.10.30:80
TCP 00:42  SYN_RECV    192.168.122.1:55992 192.168.122.100:80 10.10.10.10:80
=================================================================================












