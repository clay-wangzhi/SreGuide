
LVS

Linux Virtual Server，Linux虚拟服务器
基于四层的LB
=================================================================================
Lvs+keepalived Web Server    80/tcp
Lvs+keepalived Galera MySQL/MySQL Cluster   3306/tcp


一、LVS 概述
LVS是Linux内核的一部分，因此性能较高
Linux虚拟服务器（即分发器或调度器）： 不真正提供服务，但接受客户的访问，为整个集群提供一个唯一的入口
														   虚拟服务器和真实服务器（Real Server）通信
真实服务器（Real Server）：				   真正提供服务，集群中每个Real Server可以是物理机，也可以是虚拟机
	
二、LVS三种基本模式



注：Server为Real Server
VS/NAT:
any:        Linux/Windows
private:    私有网络
low:        10 ~20
gateway: 所有real server网关必须指向调度器

VS/NAT：	网络地址转换模式， 进站/出站的数据流量经过分发器



VS/DR：	直接路由模式，只有进站的数据流量经过分发器
				调度器和真实服务器必须在同一网段


VS/TUN：  隧道模式，只有进站的数据流量经过分发器


=================================================================================





