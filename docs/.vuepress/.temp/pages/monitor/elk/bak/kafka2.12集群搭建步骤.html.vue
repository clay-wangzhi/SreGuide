<template><h2 id="kafka2-12集群搭建步骤" tabindex="-1"><a class="header-anchor" href="#kafka2-12集群搭建步骤" aria-hidden="true">#</a> kafka2.12集群搭建步骤</h2>
<h3 id="下载解压" tabindex="-1"><a class="header-anchor" href="#下载解压" aria-hidden="true">#</a> 下载解压</h3>
<p>从官网下载最新的tgz包</p>
<p>下载地址为：</p>
<p>http://mirror.bit.edu.cn/apache/kafka/2.3.0/kafka_2.12-2.3.0.tgz</p>
<p>下载完成后上传到服务器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /opt/
scp 192.168.165.46:/opt/kafka_2.12-2.3.0.tgz  .
mv kafka_2.12-2.3.0.tgz /usr/local/
cd /usr/local/
tar -xvf kafka_2.12-2.3.0.tgz 
mv kafka_2.12-2.3.0 kafka
rm -f *.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># egrep -v "^$|^#" /usr/local/kafka/config/server.properties 
broker.id=45
listeners=PLAINTEXT://192.168.165.45:9092
num.network.threads=3
num.io.threads=8
socket.send.buffer.bytes=102400
socket.receive.buffer.bytes=102400
socket.request.max.bytes=104857600
log.dirs=/opt/kafka-logs
num.partitions=3
num.recovery.threads.per.data.dir=1
offsets.topic.replication.factor=3
transaction.state.log.replication.factor=3
transaction.state.log.min.isr=3
log.retention.hours=168
log.segment.bytes=1073741824
log.retention.check.interval.ms=300000
zookeeper.connect=192.168.165.44:2181,192.168.165.45:2181,192.168.165.46:2181
zookeeper.connection.timeout.ms=6000
group.initial.rebalance.delay.ms=0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><blockquote>
<p>服务器标识不能相同 broker.id</p>
<p>不同服务器的ip不同 listeners=PLAINTEXT://192.168.165.45:9092</p>
<p>设置zookeeper的连接地址 zookeeper.connect=192.168.165.44:2181,192.168.165.45:2181,192.168.165.46:2181</p>
</blockquote>
<h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/usr/local/kafka/bin/kafka-server-start.sh -daemon /usr/local/kafka/config/server.properties

创建topic（其中一台执行）
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 3 --partitions 3 --topic test


查看 Topic describe
bin/kafka-topics.sh --describe --zookeeper localhost:2181 --topic test

在其中一台服务器启动consumer
bin/kafka-console-consumer.sh --bootstrap-server 192.168.165.44:9092,192.168.165.45:9092,192.168.165.46:9092 --topic test --from-beginning

在任意议一台服务器启动producer
bin/kafka-console-producer.sh --broker-list 192.168.165.44:9092,192.168.165.45:9092,192.168.165.46:9092 --topic test
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>如果<code>consumer</code>服务器接收到<code>producer</code>服务器输入的内容，则启动集群成功.</p>
<p>参考链接：</p>
<blockquote>
<p><a href="https://blog.csdn.net/Cocktail_py/article/details/89877741" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/Cocktail_py/article/details/89877741<ExternalLinkIcon/></a></p>
<p><a href="https://www.jianshu.com/p/5297773fcc1b" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/5297773fcc1b<ExternalLinkIcon/></a>、、</p>
</blockquote>
<p>JVM，参数得调整一下</p>
</template>
