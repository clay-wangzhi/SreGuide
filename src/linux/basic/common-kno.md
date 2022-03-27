---
category: Linux
---
# 常用知识

**如何查看当前服务器内核的版本**

```
uname -r
cat /proc/version
```

**查看当前服务器 cpu 的 core(核心)数**

```
# 总核数 = 物理CPU个数 X 每颗物理CPU的核数 
# 总逻辑CPU数 = 物理CPU个数 X 每颗物理CPU的核数 X 超线程数
# 查看物理CPU个数
cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l
# 查看每个物理CPU中core的个数(即核数)
cat /proc/cpuinfo| grep "cpu cores"| uniq
# 查看逻辑CPU的个数
cat /proc/cpuinfo| grep "processor"| wc -l
查看CPU信息（型号）
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
```

**判断当前机器是虚拟机还是物理机**

```bash
dmidecode -s system-product-name
VMware Virtual Platform  # 包含virtual字样，为虚拟机

dmidecode -s system-product-name
PowerEdge R730  # 不包含virtual字样，为物理机
```

**Linux删除软链接**

```bash
unlink
rm -rf ./test_chk_ln
# 注意目录后面不要跟 / ，会把目录下面的文件删掉
```

