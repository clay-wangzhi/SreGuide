

Nginx实现七层的负载均衡

Nginx通过Upstream模块实现负载均衡
=================================================================================

upstream支持的负载均衡算法
轮询（默认）:		可以通过weight指定轮询的权重，权重越大，被调度的次数越多
ip_hash：			可以实现会话保持，将同一客户的IP调度到同一样后端服务器，可以解决session的问题，不能使用weight
fair：					可以根据请求页面的大小和加载时间长短进行调度，使用第三方的upstream_fair模块
url_hash：			按请求的url的hash进行调度，从而使每个url定向到同一服务器，使用第三方的url_hash模块

upstream支持的状态参数（主要用于对后端服务器的健康检查）
down：				暂停对该服务器的调度
backup:			    类似于LVS Sorry Server，当所有的非backup的服务器故障
max_fails:			请求失败的次数，默认为1
fail_timeout:		    在经历max_fails次失败后，暂停服务的时间

upstream tianyun.com {
#      ip_hash;
        server 192.168.122.10 weight=1 max_fails=2 fail_timeout=2;
        server 192.168.122.20  weight=2 max_fails=2 fail_timeout=2;
        server 192.168.122.30 max_fails=2 fail_timeout=5 down;
        server 192.168.122.200 backup;
    }

注：当使用ip_hash时，服务器状态不可使用weight
=================================================================================







