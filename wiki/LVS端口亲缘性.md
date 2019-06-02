
​防​火墙标​记 

对于访问同一个IP的80/tcp和443/tcp，应该作为一个虚拟服务
对于访问同一个IP的20-21/tcp和50000-60000/tcp，应该作为一个虚拟服务

例如VIP是192.168.122.100
Web:
[root@tianyun ~]# iptables -t mangle -A PREROUTING -p tcp -d 192.168.122.100 --dport 80 -j MARK --set-mark 80
[root@tianyun ~]# iptables -t mangle -A PREROUTING -p tcp -d 192.168.122.100 --dport 443 -j MARK --set-mark 80

FTP:
[root@tianyun ~]# iptables -t mangle -A PREROUTING -p tcp -d 192.168.122.100 --dport 20:21 -j MARK --set-mark 21
[root@tianyun ~]# iptables -t mangle -A PREROUTING -p tcp -d 192.168.122.100 --dport 50000-60000 -j MARK --set-mark 21
注：FTP须在配置文件中指定被动模式的最小及最大端口
pasv_min_port=50000
pasv_max_port=60000

[root@tianyun ~]# ipvsadm -A -t 192.168.122.100:80 -s rr
[root@tianyun ~]# ipvsadm -A -f 80 -s rr -p 300
[root@tianyun ~]# ipvsadm -a -f 80 -r 192.168.122.10 -g	
[root@tianyun ~]# ipvsadm -a -f 80 -r 192.168.122.20 -g
[root@tianyun ~]# ipvsadm -a -f 80 -r 192.168.122.30 -g

[root@tianyun ~]# ipvsadm -Ln
IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn
FWM  80 rr persistent 300
  -> 192.168.122.10:0             Route   1      0          0         
  -> 192.168.122.20:0             Route   1      0          0         
  -> 192.168.122.30:0             Route   1      0          0      
  
  
keepalived: 
virtual_server fwmark 80 {
    delay_loop 6
    lb_algo rr
    lb_kind DR
    nat_mask 255.255.255.0
    persistence_timeout 50
    protocol TCP
    ......
}




