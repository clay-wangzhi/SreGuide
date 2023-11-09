---
category: 云原生
tag:
  - Kubernetes
---

# 性能压测指标及方法

## 一、基础性能测试

### CPU 性能

#### Super_Pi

在计算性能测试中，我们使用linux下的bc计算器程序通过反正切函数计算5000位圆周率的cpu耗时来对主机进行测试。

```bash
# 安装 bc
yum -y install bc
# 单核计算性能测试
time echo "scale=5000; 4*a(1)" | bc -l -q &>1
# 多核计算性能测试
for i in `seq 1 2`; do (time echo "scale=5000; 4*a(1)" | bc -l -q &>1) & done ; wait 2>/dev/null
for i in `seq 1 4`; do (time echo "scale=5000; 4*a(1)" | bc -l -q &>1) & done ; wait 2>/dev/null
```

#### CPU调度延时

```bash
git clone https://github.com/rgushchin/schbench.git
make
./schbench -t 4 -m 1
# -t 线程数
# -m 每个线程产生的信息数
 
注意： CPU调度延迟一般情况下，是负载的关键指标，本次压测需要KVM，TXY空负载。当资源还没有在使用时，容器正常申请对应配置压测即可。
```

#### sysbench 素数计算

```bash
# 单线程素数运算，最大素数10000，计算10000 events结束为止
sysbench --threads=1 --events=10000 --time=0 cpu run
```

### 内存性能

#### 内存带宽(stream)

Stream测试是内存测试中业界公认的内存带宽性能测试基准工具

```bash
yum -y install gcc gcc-gfortran
git clone https://github.com/jeffhammond/STREAM.git
cd STREAM/
make
# 指定线程数
export OMP_NUM_THREADS=1
./stream_c.exe
```

#### 内存时延(mlc)

官网下载：https://www.intel.com/content/www/us/en/developer/articles/tool/intelr-memory-latency-checker.html#inpage-nav-9

```bash
mkdir mlc
tar -xvf mlc_v3.9a.tgz -C mlc
cd mlc/Linux/
./mlc --latency_matrix
```

#### sysbench 连续读写或者随机读写操作

```bash
# 写操作
## 线程数=4  内存块大小=8K 传输数据总量=100G 内存操作=写 内存访问模式=顺序访问
sysbench memory --threads=4 --memory-block-size=8K --memory-total-size=100G --memory-oper=write --memory-access-mode=seq run
## 线程数=4  内存块大小=8K 传输数据总量=100G 内存操作=写 内存访问模式=随机访问
sysbench memory --threads=4 --memory-block-size=8K --memory-total-size=100G --memory-oper=write --memory-access-mode=rnd run
  
# 读操作
## 线程数=4  内存块大小=8K 传输数据总量=100G 内存操作=读 内存访问模式=顺序访问
sysbench memory --threads=4 --memory-block-size=8K --memory-total-size=100G --memory-oper=read --memory-access-mode=seq run
## 线程数=4  内存块大小=8K 传输数据总量=100G 内存操作=读 内存访问模式=随机访问
sysbench memory --threads=4 --memory-block-size=8K --memory-total-size=100G --memory-oper=read --memory-access-mode=rnd run
```

### 磁盘 I/O 性能

> :warning: 测试时请准备裸的数据盘，测试完成后请重新格式化磁盘

#### 磁盘读、写iops

iops：磁盘的每秒读写次数，这个是随机读写考察的重点

```bash
yum install -y fio
# filename 为数据盘名称,注意修改，测试硬盘性能时，建议直接测试裸数据盘，不要使用系统盘或带有业务数据的数据盘，可得造成磁盘损坏
# 随机读
fio --ioengine=libaio --bs=4k --direct=1 --thread --time_based --rw=randread --filename=/dev/sda --runtime=60 --numjobs=1 --iodepth=1 --group_reporting --name=randread-dep1 --size=1g
# 随机写 IOPS
fio --ioengine=libaio --bs=4k --direct=1 --thread --time_based --rw=randwrite --filename=/dev/sda --runtime=60 --numjobs=1 --iodepth=1 --group_reporting --name=randread-dep1 --size=1g
```

#### 磁盘读、写带宽

bw：磁盘的吞吐量，这个是顺序读写考察的重点

```bash
# 顺序读
fio --ioengine=libaio --bs=4k --direct=1 --thread --time_based --rw=read --filename=/dev/sda --runtime=60 --numjobs=1 --iodepth=1 --group_reporting --name=randread-dep1 --size=1g
# 顺序写
fio --ioengine=libaio --bs=4k --direct=1 --thread --time_based --rw=write --filename=/dev/sda --runtime=60 --numjobs=1 --iodepth=1 --group_reporting --name=randread-dep1 --size=1g
```

#### 存储性能——磁盘时延

依据上面结果看 clat

### 文件 I/O 性能

> sysbench 压文件不准，建议还是用 fio 压文件，filename 指定文件即可

#### fio 方式

```bash
fio --ioengine=libaio --bs=4k --direct=1 --thread --time_based --rw=randread --filename=/home/a.txt --runtime=60 --numjobs=1 --iodepth=1 --group_reporting --name=randread-dep1 --size=1g
fio --ioengine=libaio --bs=4k --direct=1 --thread --time_based --rw=randwrite --filename=/home/b.txt --runtime=60 --numjobs=1 --iodepth=1 --group_reporting --name=randread-dep1 --size=1g
fio --ioengine=libaio --bs=4k --direct=1 --thread --time_based --rw=read --filename=/home/c.txt --runtime=60 --numjobs=1 --iodepth=1 --group_reporting --name=randread-dep1 --size=1g
fio --ioengine=libaio --bs=4k --direct=1 --thread --time_based --rw=write --filename=/home/d.txt --runtime=60 --numjobs=1 --iodepth=1 --group_reporting --name=randread-dep1 --size=1g
```

#### sysbench 文件随机读写速度、顺序读写吞吐率

```bash
# 线程数=4 每隔4s输出一次结果 测试时间=60s
# 文件数=2 文件总大小=4G 文件操作模式=随机读写
# 块大小 16384
sysbench --threads=4 --report-interval=4 --time=60 --test=fileio --file-num=2 --file-total-size=4G --file-test-mode=rndrw prepare
sysbench --threads=4 --report-interval=4 --time=60 --test=fileio --file-num=2 --file-total-size=4G --file-test-mode=rndrw run
sysbench --threads=4 --report-interval=4 --time=60 --test=fileio --file-num=2 --file-total-size=4G --file-test-mode=rndrw cleanup
# 顺序写
sysbench --threads=4 --report-interval=4 --time=60 --test=fileio --file-num=2 --file-total-size=4G --file-test-mode=seqwr prepare
sysbench --threads=4 --report-interval=4 --time=60 --test=fileio --file-num=2 --file-total-size=4G --file-test-mode=seqwr run
sysbench --threads=4 --report-interval=4 --time=60 --test=fileio --file-num=2 --file-total-size=4G --file-test-mode=seqwr cleanup
# 顺序读
sysbench --threads=4 --report-interval=4 --time=60 --test=fileio --file-num=2 --file-total-size=4G --file-test-mode=seqrd prepare
sysbench --threads=4 --report-interval=4 --time=60 --test=fileio --file-num=2 --file-total-size=4G --file-test-mode=seqrd run
sysbench --threads=4 --report-interval=4 --time=60 --test=fileio --file-num=2 --file-total-size=4G --file-test-mode=seqrd cleanup
```

#### dd 顺序写

```bash
dd if=/dev/zero of=benchtest_$$ bs=512k count=2048 conv=fdatasync && rm -f benchtest_$$
```

### 网络性能

#### 传输速率(pps)

```bash
# server端：
yum install -y sysstat
 
netserver -p 12345(启动)
 
sar -n DEV 1
 
#client端
wget -c "https://codeload.github.com/HewlettPackard/netperf/tar.gz/netperf-2.5.0" -O netperf-2.5.0.tar.gz
tar zxvf netperf-2.5.0.tar.gz
cd netperf-netperf-2.5.0
yum install gcc cc -y && ./configure && make && make install
netperf -H $server_ip -p $port -t UDP_STREAM -l 300 -- -m 1 -R 1
```

#### 网络带宽

```bash
# server端：
yum install -y sysstat
 
netserver -p 12345(启动)
 
sar -n DEV 1
 
#client端
wget -c "https://codeload.github.com/HewlettPackard/netperf/tar.gz/netperf-2.5.0" -O netperf-2.5.0.tar.gz
tar zxvf netperf-2.5.0.tar.gz
cd netperf-netperf-2.5.0
yum install gcc cc -y && ./configure && make && make install
netperf -t TCP_STREAM -H $server_ip -p $port -l 60s -- -m 32k "MAX_LATENCY,MEAN_LATENCY,P90_LATENCY,P99_LATENCY,P999_LATENCY,P9999_LATENCY,STDDEV_LATENCY,THROUGHPUT,THROUGHPUT_UNITS"
```

#### 单向时延

```bash
服务端：
yum install -y sockperf
sockperf sr --daemonize > /dev/null 2>&1
 
客户端：
sockperf under-load -i serverip  --mps=100000 -t 300 -m 14 --reply-every=50 --full-log=sockperf.out
 
# mps: 每秒多少请求   -t 测试时间 -m 每个请求大小(默认14byte)
```

#### ping时延

```bash
ping -c 30 同网段其他主机
```

## 二、应用性能测试

### 1、Nginx

```bash
wrk:
git clone https://github.com/wg/wrk.git
make && make install
 
## his runs a benchmark for 30 seconds, using 12 threads, and keeping 400 HTTP connections open
wrk -t12 -c400 -d30s http://127.0.0.1:8080/index.html
 
#默认长连接，短链接：-H “Connection:Close”
 
ab:
ab -c 400 -n 1000000
 
推荐ab测试
```

### 2、MySQL

```bash
安装
yum install -y mariadb-server
create database pressure
grant all on pressure.* to 'pressure'@'127.0.0.1' identified by 'pressure';
 
yum install -y sysbench
造数据：
sysbench --db-driver=mysql --time=300 --threads=10 --report-interval=1 --mysql-host=127.0.0.1 --mysql-port=3306 --mysql-user=pressure --mysql-password=pressure --mysql-db=pressure --tables=20 --table_size=1000000 oltp_read_write --db-ps-mode=disable prepare
 
常规压测（包含读写）
sysbench --db-driver=mysql --time=300 --threads=10 --report-interval=1 --mysql-host=127.0.0.1 --mysql-port=3306 --mysql-user=pressure --mysql-password=pressure --mysql-db=pressure --tables=20 --table_size=1000000 oltp_read_write --db-ps-mode=disable run
 
 
 
 
# 基于mysql的驱动去连接mysql数据库，如果是oracle、SQLserver就是用对应的数据库驱动
--db-driver=mysql
# 连续访问300秒
--time=300
# 10个线程模拟并发访问
--threads=10
# 每隔1秒输出一下压测情况
--report-interval=1
# 数据库所在机器的IP地址
--mysql-host=127.0.0.1
# 端口号：3306
--mysql-port=3306
# 用户名
--mysql-user=test_user
# 密码
--mysql-password=12345678
# 压测数据库
--mysql-db=test_db
# 模拟构造20个测试表
--tables=20
# 每个表构造100万条测试数据，测试表的名字会是类似于sbtest1，sbtest2这样
--table_size=1000000 
# 执行oltp数据库的读写测试
oltp_read_write
# 禁止ps模式
--db-ps-mode=disable
# 参照这个命令的设置去构造出来我们需要的数据库里的数据
# 自动创建20个测试表，每个表里创建100万条测试数据
prepare
```

参考：https://blog.csdn.net/aiyowei1106/article/details/117359969

### 3、Redis

```bash
yum install -y redis
service redis start
 
压测：
redis-benchmark -t set,get -n 1000000
```

## 三、压测脚本

压测需要大量采样，并实时观察

```bash
git clone https://github.com/clay-wangzhi/bench.git
bash bench.sh
```

