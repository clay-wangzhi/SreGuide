---
category: Linux
tag:
  - 常见问题
---

## centos7下时区问题

centos7时区同样, 在
CentOS 7 中, 引入了一个叫 **timedatectl** 的设置设置程序。

用法很简单：

```
# timedatectl # 查看系统时间方面的各种状态
      Local time: 四 2014-12-25 10:52:10 CST
  Universal time: 四 2014-12-25 02:52:10 UTC
        RTC time: 四 2014-12-25 02:52:10
        Timezone: Asia/Shanghai (CST, +0800)
     NTP enabled: yes
NTP synchronized: yes
 RTC in local TZ: no
      DST active: n/a
# timedatectl list-timezones # 列出所有时区
# timedatectl set-local-rtc 1 # 将硬件时钟调整为与本地时钟一致, 0 为设置为 UTC 时间
# timedatectl set-timezone Asia/Shanghai # 设置系统时区为上海
```

其实不考虑各个发行版的差异化, 从更底层出发的话, 修改时间时区比想象中要简单:

```
# cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```
