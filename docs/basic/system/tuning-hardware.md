---
category: 操作系统
---

# 硬件调优

## CPU

**CPU-动态节能技术**

cpufreq 是一个动态调整 CPU 频率的模块，可支持五种模式。为保证服务性能应选用 performance 模式，将 CPU 频率固定工作在其支持的最高运行频率上，从而获取最佳的性能，一般都是默认 powersave，可以通过 cpupower frequency-set 修改。

```bash
# 查看当前 CPU 性能模式
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
# 查看当前 CPU 使用频率
cat /proc/cpuinfo | grep -i "cpu mhz"
# 综合查看方式
cpupower frequency-info
# 设置为 performance 模式
cpupower frequency-set -g performance
# 注意：如果使用 cpupower frequency-set 设置后，重启物理机后，配置失败，可能是 tuned-adm 的原因
# 所以建议使用 tuned-adm 设置 CPU 性能模式
tuned-adm profile latency-performance
```

## RAID 卡

写入策略对顺序写入性能影响比较大

* `Write Policy`（写入策略）：
  * `Write Through`（透写）：并不利用 Raid 卡的 Cache，直接与磁盘进行交互。
  * `Write Back`（回写）：是先写 Raid 卡缓存，再传入磁盘。因为写入缓存，操作系统就认为成功了，所以测试会发现写入性能非常快。 推荐
* `Read Policy` （读取策略）:
  * `Read-ahead` （预读，适合顺序读）
  * `No-Read-Ahead`（Normal非预读，一般在 Windows 服务器下推荐）

开启预读对顺序读影响很大测试会差20%-40%性能。

> **Tips** 在《MySQL 技术内幕-InnoDB存储引擎》 第二版第9章，性能调优部分。有关于 `Write Policy` 的介绍，根据作者实测 MySQL，`Write Back` 比 `Write Through` 快将近 40 倍差距。

```bash
# 查看 RAID 卡当前读写策略，去带外管理台看会方便一些
# 去官网 Broadcom 下载 rpm 包，到服务器上去安装
rpm -ivh storcli-007.2508.0000.0000-1.noarch.rpm
# 写入策略改为 WB
## 浪潮机器
cd /opt/MegaRAID/storcli/ &&  ./storcli64 /c0 /v0 set wrcache=WB
## H3C 机器
cd /opt/MegaRAID/storcli/ &&  ./storcli64 /c0 /v239 set wrcache=WB
# 读取策略改为 RA
## 浪潮机器
cd /opt/MegaRAID/storcli/ &&  ./storcli64 /c0 /v0 set rdcache=ra
## H3C 机器
cd /opt/MegaRAID/storcli/ &&  ./storcli64 /c0 /v239 set rdcache=ra
```



