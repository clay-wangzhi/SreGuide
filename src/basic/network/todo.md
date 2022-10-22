---
category: 计算机网络
---

## 传输层

**TCP 路径可达性测试**

* `telnet`、`nc`

  ```bash
  telnet www.baidu.com 443
  nc -w 2 -zv www.baidu.com 443
  ```

**查看当前连接的传输速率**

* `iftop`

**查看丢包和乱序等的统计**

* `netstat -s`

  ```bash
  watch --diff netstat -s
  ```

* `ss -s`

## 网络层

**查看网络路径状况**

* `traceroute`

  ```bash
  traceroute -I www.baidu.com
  ```

traceroute 也有一个明显的不足：它不能对这个路径做连续多次的探测

* `mtr`

  ```bash
  mtr www.baidu.com -r -c 10
  ```

**查看路由表**

* `route -n`

* `netstat -r`

* `ip route`

## 数据链路层和物理层

一个稳定的数据链路层乃至物理层，是网络可靠性的基石

* `ethtool -S eth0`