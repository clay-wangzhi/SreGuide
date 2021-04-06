---
category: 监控
tags:
  - ELK
---

# Kibana的安装和界面快速浏览

## 安装运行

下载地址：

> https://www.elastic.co/cn/downloads/kibana

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567761679082.png)

解压并安装运行

![](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/1567761719575.png)

## Kibana Console

* Dev Tool
* Search Profiler
* Help + 一些快捷键
  * cmd + / (查看API帮助文档)
  * cmd + option + I
  * cmd + option + 0
  * cmd + option + shift + 0

## Kibana Pulgins

常用命令

```shell
bin/kibana-plugin install /usr/plugin_location
bin/kibana-plugin list
bin/kibana remove
```

## 用Kibana解决日志时间乱序问题

可以按照偏移量，和主机名进行排序