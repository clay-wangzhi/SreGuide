
持久性连接主要解决的是会话保持的问题

SSL  or  FTP  保证会话在的持久性
-w 加权重
定义LVS的分发策略
[root@tianyun ~]# ipvsadm -C
[root@tianyun ~]# ipvsadm -A -t 192.168.122.100:80 -s rr -p 300
[root@tianyun ~]# ipvsadm -a -t 192.168.122.100:80 -r 192.168.122.10 -g	//gatewaying (direct routing)
[root@tianyun ~]# ipvsadm -a -t 192.168.122.100:80 -r 192.168.122.20 -g
[root@tianyun ~]# ipvsadm -a -t 192.168.122.100:80 -r 192.168.122.30 -g
[root@tianyun ~]# service ipvsadm save
Saving IPVS table to /etc/sysconfig/ipvsadm:               [  OK  ]

[root@tianyun ~]# ipvsadm -Ln
IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  	-> RemoteAddress:Port      Forward Weight ActiveConn InActConn
TCP  192.168.122.100:80 rr persistent 300
  	-> 192.168.122.10:80              Route   1      0          0
  	-> 192.168.122.20:80              Route   1      0          0
  	-> 192.168.122.30:80              Route   1      0          0

[root@tianyun ~]# ipvsadm -Ln -c				
IPVS connection entries
pro expire state           source                    virtual                       destination
TCP 04:09  NONE        192.168.122.1:0    192.168.122.100:80 192.168.122.30:80
TCP 00:10  FIN_WAIT  192.168.122.1:37155 192.168.122.100:80 192.168.122.20:80













