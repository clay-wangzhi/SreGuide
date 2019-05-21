
基于LVS LB集群解决方案一：LVS + KeepAlived

KeepAlived在该项目中的功能：
1. 实现调度器的HA
2. 对RealServer做健康检查
3. 动态维护IPVS路由表
http://www.keepalived.org
=================================================================================

拓扑结构：
Client：                                   CIP： 192.168.122.1

Director：  							  VIP：192.168.122.100  
					 DIP:     director1 192.168.122.2   director2 192.168.122.3                                      
											
Real Server： RIP：	192.168.122.10    192.168.122.20	192.168.122.30
				   VIP：	192.168.122.100  192.168.122.100 192.168.122.100 
						 
DNS Server： www.tianyun.com  ===> 192.168.122.100
注：主/备Directory VIP由高可用软件添加


一、实施步骤
1. 准备工作（集群中所有主机）
IP, hostname, hosts, iptables, SELinux, ssh trust, ntp	
[root@tianyun ~]# cat /etc/hosts
127.0.0.1           	    localhost
192.168.122.2		    director1.tianyun.com director1
192.168.122.3		    director2.tianyun.com director1
192.168.122.10	    node1.tianyun.com node1 
192.168.122.20	    node2.tianyun.com node2 
192.168.122.30	    node3.tianyun.com node3 

2. RS配置
配置好网站服务器，测试所有RS												//为了测试效果，提供不同的页面
[root@tianyun ~]# ip addr add dev lo 192.168.122.100/32				//在lo接口上绑定VIP

方法一：不对VIP的ARP请求响应
[root@tianyun ~]# echo 1 > /proc/sys/net/ipv4/conf/all/arp_ignore	//non-arp
[root@tianyun ~]# echo 2 > /proc/sys/net/ipv4/conf/all/arp_announce	

方法二：不对VIP的ARP请求响应
[root@tianyun ~]# arptables -A IN -d 192.168.122.100 -j DROP									        
[root@tianyun ~]# arptables -A OUT -s 192.168.122.100 -j mangle --mangle-ip-s <real_ip>	
[root@tianyun ~]# service arptables_jf save																            
[root@tianyun ~]# chkconfig arptables_jf on																        


3. 主/备调度器安装软件
[root@master ~]# yum -y install ipvsadm keepalived 
[root@backup ~]# yum -y install ipvsadm keepalived

=================================================================================
源码安装方法
ipvsadm
[root@tianyun ~]# yum -y install ipvsadm kernel-headers kernel-devel openssl-devel popt-devel

KeepAlived
[root@tianyun keepalived-1.2.1]#  ./configure --prefix=/ --with-kernel-dir=/usr/src/kernels/2.6.32-358.el6.x86_64/
Keepalived configuration
---------------------------------------------
Keepalived version   	: 1.2.1
Compiler                 	: gcc
Compiler flags         	: -g -O2 -DETHERTYPE_IPV6=0x86dd
Extra Lib                	: -lpopt -lssl -lcrypto
Use IPVS Framework  : Yes
IPVS sync daemon support : Yes
Use VRRP Framework       	: Yes
Use Debug flags          	: No
[root@tianyun keepalived-1.2.1]# make
[root@tianyun keepalived-1.2.1]# make install
=================================================================================


4. 主/备调度器Keepalived配置
Master 
获得Real Server测试页面的MD5SUM值　<用于对Real Server健康检查>
[root@tianyun ~]# genhash -s 192.168.122.10 -p 80 -u /test.html             //RS网站的主目录
MD5SUM = c5f42eddf777ef2d2b0f7263c094c20e
keepalived.conf
! Configuration File for keepalived
[root@tianyun ~]# vim /etc/keepalived/keepalived.conf
! Configuration File for keepalived

global_defs {
   router_id director1			//辅助改为director2
}

vrrp_instance VI_1 {
    state MASTER				//辅助改为BACKUP
    interface eth0				//VIP绑定的接口
   virtual_router_id 80		//MASTER,BACKUP一致
    priority 100					//辅助改为50
    advert_int 1                         //间隔时间
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.122.100
    }
}

virtual_server 192.168.122.100 80 {
    delay_loop 6
    lb_algo rr
    lb_kind DR
    nat_mask 255.255.255.0
    persistence_timeout 50
    protocol TCP
  
    real_server 192.168.122.10 80 {                                                             
        weight 1                                                                                            
        TCP_CHECK {
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
            connect_port 80
        }
    }

    real_server 192.168.122.20 80 {
        weight 1
        TCP_CHECK {
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
            connect_port 80
        }
    }
     
    real_server 192.168.122.30 80 {
        weight 1
        TCP_CHECK {
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
            connect_port 80
        }
     }
}

BACKUP


5. 启动KeepAlived（主备均启动）
[root@tianyun ~]# chkconfig keepalived on
[root@tianyun ~]# service keepalived start
[root@tianyun ~]# tail -f /var/log/messages

[root@tianyun ~]# ipvsadm -Ln
IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  192.168.122.100:80 wrr
  -> 192.168.122.10:80               Route   1      0          0         
  -> 192.168.122.20:80               Route   3      0          0   
  -> 192.168.122.30:80               Route   3      0          0 

[root@tianyun ~]# ipvsadm -Ln -c
IPVS connection entries
pro expire state       source             virtual            destination
TCP 01:57  FIN_WAIT    192.168.1.254:58698 192.168.122.100:80    192.168.122.10:80
TCP 01:57  FIN_WAIT    192.168.1.254:58699 192.168.122.100:80    192.168.122.20:80
TCP 01:57  FIN_WAIT    192.168.1.254:58695 192.168.122.100:80    192.168.122.20:80
TCP 01:56  FIN_WAIT    192.168.1.254:58691 192.168.122.100:80    192.168.122.20:80
TCP 01:58  FIN_WAIT    192.168.1.254:58700 192.168.122.100:80    192.168.122.20:80
TCP 01:58  FIN_WAIT    192.168.1.254:58702 192.168.122.100:80    192.168.122.10:80
TCP 01:58  FIN_WAIT    192.168.1.254:58703 192.168.122.100:80    192.168.122.20:80
TCP 01:57  FIN_WAIT    192.168.1.254:58696 192.168.122.100:80    192.168.122.20:80
TCP 01:57  FIN_WAIT    192.168.1.254:58693 192.168.122.100:80    192.168.122.20:80



二、测试
所有分发器和Real Server都正常

主分发器故障及恢复

Real Server故障及恢复


三、Keepalived不抢占
nopreempt		仅针对BACKUP


亲缘性
iptables -t mangle -A PREROUTING -p tcp -d 192.168.122.100 --dport 80 -j MARK --set-mark 80

vim /etc/keepalived/keepalived.conf
virtual_server fwmark 80 {
    delay_loop 6
    lb_algo rr
    lb_kind DR
    nat_mask 255.255.255.0
   !persistence_timeout 50
    protocol TCP









