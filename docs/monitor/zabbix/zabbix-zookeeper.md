---
category: 监控
tag:
  - Zabbix
---

# 9 zookeeper集群监控

> zabbix旧版本可以用，新版本建议用官方模板

# Zabbix-Zookeper-Template

## System requirements

- [zabbix](http://www.zabbix.com/downloads/) >= 3.4 (preprocessing used by this template)
- [zookeeper](https://zookeeper.apache.org/releases.html) >= 3.4 (mntr stats)
- netcat 
- zookeeper监控模板，被监控主机，记得添加nc命令

## Features

- ruok check
- mntr stats :
  - zk_num_alive_connections
  - zk_approximate_data_size
  - zk_ephemerals_count
  - zk_min_latency
  - zk_avg_latency
  - zk_max_latency
  - zk_max_file_descriptor_count
  - zk_open_file_descriptor_count
  - zk_outstanding_requests
  - zk_packets_received
  - zk_packets_sent
  - zk_server_state
  - zk_version
  - zk_znode_count

- graphs
- screen


## Zabbix Macros

- {$ZOO_IP} : IP of the Zookeeper Instance (default : 127.0.0.1)
- {$ZOO_PORT} : Port of the Zookeeper Instance (default : 2181)


## Zabbix Configuration

1) Copy `UserParameter_Zookeeper.conf` to `/etc/zabbix/zabbix_agentd.d` folder (or whatever is default and/or configured on your system).

2) Restart your Zabbix Agent

3) Import XML template file (`zookeeper.xml`) into Zabbix via Web GUI (Configuration -> Templates -> Import).

4) Assign the imported template to a host, change MACROS if needed in the host parameters and enjoy!