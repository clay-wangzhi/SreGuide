# 内存Available 是怎么计算的

内存 ( memory )是操作系统管理的一项重要指标，对内存使用量进行监控，有助于提前发现内存问题，避免因内存耗尽而造成的故障。

**如果出现内存快被耗尽，一般会出现 OOM 的现象。**

## 虚拟机情况

#### 命令查看

**使用 free 命令查看**

Linux 内核负责统计内存使用量并暴露在 /proc 伪文件系统中，路径是 /proc/meminfo 。一般而言，需要重点关注的指标如下： 内存使用量指标(字节):

* total 表示 物理内存总量 ，单位为 字节 ，对应 /proc/meminfo 的 MemTotal 字段。

* free 表示 空闲内存量 ，单位为 字节 ， 对应 /proc/meminfo 的 MemFree 字段。

* buffers 表示 内核缓冲区 ，单位为 字节 ，对应 /proc/meminfo 的 Buffers 字段。

* cached 表示 文件缓冲页 ，单位为 字节 ，对应 /proc/meminfo 的 Cached 字段。

* slab 表示 内核 slab 数据结构 ，单位为 字节 ，对应 /proc/meminfo 的 Slab 字段。

* cache 与 free 命令中的 cache 相同，即 cached 以及 slab 之和：cache = cached + slab

* g_free 表示 广义空闲内存 ( generalized free )，单位为 字节 ，计算方式如下：g_free = free + buffers + cache
  buffers 和 cache 是系统为了提升性能而使用的缓存，内存紧张时可随时回收另做它用。因此，这部分内存在某种意义上可以认为是空闲的，这就是 广义空闲内存 的由来。

* used 表示 已用内存 ，单位为 字节 ，计算方式如下：used = total - g_free = total - free - buffers - cache

* active 表示 活跃内存 ，单位为 字节 ，对应 /proc/meminfo 的 Active 字段。
  活跃内存 是指最近经常访问的内存，通常不会被重新分配，除非非常必要。

* inactive 表示 非活跃内存 ，单位为 字节 ，对应 /proc/meminfo 的 Inactive 字段。
  非活跃内存 是指最近较少访问的内存，需要新分配内存时，这部分优先选择。

*  available3.14  内核版本开始提供在 /proc/meminfo 的 MemAvailable 字段，available 表示 可用内存 ，单位为 字节。

  计算公式：

  ```bash
  available = free_pages - total_reserved + pagecache + SReclaimable
  # 计算 wmark_low
  wmark_low = awk '/min/ {sum += $2} END {print sum * 4}' /proc/zoneinfo
  # 计算空闲页 free_pages
  free_pages = awk '/free / {sum += $3} END {print sum * 4}' /proc/zoneinfo
  # 计算保留内存
  total_reserved = Σ(min((max(lowmem) + high_watermark), managed))
  max(lowmem) = awk '/protection/ {gsub(/[\(\),]/," "); print $5}' /proc/zoneinfo
  high_watermark = awk '/high / {print $2}' /proc/zoneinfo
  managed = awk '/managed/ {print $2}' /proc/zoneinfo
  paste <(paste <(awk '/protection/ {gsub(/[\(\),]/," "); print $5}' /proc/zoneinfo) <(awk '/high / {print $2}' /proc/zoneinfo) | awk '{print $1+$2}') <(awk '/managed/ {print $2}' /proc/zoneinfo) | awk '{total_reserved += ($1 > $2 ? $2 : $1)} END {print total_reserved * 4}'
  # 计算 pagecache
  pagecache = active file + inactive file
  echo $(($(awk '/nr_inactive_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo) + $(awk '/nr_active_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo)))
  #  pagecache -= min(pagecache / 2, wmark_low)，并不是所有的 pagecache 都被认为是可用的：
  pagecache -= min(pagecache / 2, wmark_low)，并不是所有的 pagecache 都被认为是可用的：
  echo $(($(echo $(($(awk '/nr_inactive_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo) + $(awk '/nr_active_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo)))) - $(paste <(awk '/min/ {sum += $2} END {print sum * 4}' /proc/zoneinfo) <(echo $(($(awk '/nr_inactive_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo) + $(awk '/nr_active_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo)))) | awk '{min =  ($1 > $2/2 ? $2 : $1); print min}')))
  # 计算 SReclaimable
  awk '/nr_slab_reclaimable/ {sum += $2} END {print sum * 4}' /proc/zoneinfo
  # SReclaimable -= min(SReclaimable/2, wmark_low)，和 pagecache 相似，不能全用。
  echo $(($(awk '/nr_slab_reclaimable/ {sum += $2} END {print sum * 4}' /proc/zoneinfo) - $(paste <(awk '/nr_slab_reclaimable/ {sum += $2} END {print sum * 4}' /proc/zoneinfo) <(awk '/min/ {sum += $2} END {print sum * 4}' /proc/zoneinfo) | awk '{min =  ($1 > $2/2 ? $2 : $1); print min}')))
  
  #  available = free_pages - total_reserved + pagecache + SReclaimable
  echo $((($(awk '/free / {sum += $3} END {print sum * 4}' /proc/zoneinfo) - $(paste <(paste <(awk '/protection/ {gsub(/[\(\),]/," "); print $5}' /proc/zoneinfo) <(awk '/high / {print $2}' /proc/zoneinfo) | awk '{print $1+$2}') <(awk '/managed/ {print $2}' /proc/zoneinfo) | awk '{total_reserved += ($1 > $2 ? $2 : $1)} END {print total_reserved * 4}') + $(echo $(($(echo $(($(awk '/nr_inactive_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo) + $(awk '/nr_active_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo)))) - $(paste <(awk '/min/ {sum += $2} END {print sum * 4}' /proc/zoneinfo) <(echo $(($(awk '/nr_inactive_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo) + $(awk '/nr_active_file/{sum += $2} END {print sum * 4}' /proc/zoneinfo)))) | awk '{min =  ($1 > $2/2 ? $2 : $1); print min}')))) + $(echo $(($(awk '/nr_slab_reclaimable/ {sum += $2} END {print sum * 4}' /proc/zoneinfo) - $(paste <(awk '/nr_slab_reclaimable/ {sum += $2} END {print sum * 4}' /proc/zoneinfo) <(awk '/min/ {sum += $2} END {print sum * 4}' /proc/zoneinfo) | awk '{min =  ($1 > $2/2 ? $2 : $1); print min}')))))/1024))
  
  
  ```

  





参考链接：
[Centos7 内存使用率计算_linux内存指标](https://blog.csdn.net/ichen820/article/details/115349836)

[我的内存呢？Linux MemAvailable 如何计算](https://lotabout.me/2021/Linux-Available-Memory/)