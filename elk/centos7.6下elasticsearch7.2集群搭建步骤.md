## Centos7.6下Elasticseatch7.2集群搭建步骤

### 环境准备

* 云主机：3台
* linux系统版本：centos7.6.1810
* 配置：4核 8G

#### 主机名解析

```
hostnamectl set-hostname es01.csp
```

将三台主机的主机名加入到`/etc/hosts`文件中

```
echo "xxx.xxx.xxx.xxx es01.csp" /etc/hosts
```

#### 安装依赖环境

##### 安装JDK11和shasum

```
yum -y install java-11-openjdk.x86_64 1:perl-Digest-SHA-5.85-4.el7.x86_64
```

##### 安装docker

###### Uninstall old versions

```
yum remove docker \
  docker-client \
  docker-client-latest \
  docker-common \
  docker-latest \
  docker-latest-logrotate \
  docker-logrotate \
  docker-engine
```

###### Install using the repository

1. Install required packages. `yum-utils` provides the `yum-config-manager` utility, and `device-mapper-persistent-data` and `lvm2`are required by the `devicemapper` storage driver.

```
yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

2. Use the following command to set up the **stable** repository.

```
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

###### INSTALL DOCKER CE

1. Install the *latest version* of Docker CE and containerd, or go to the next step to install a specific version:

```
yum -y install docker-ce docker-ce-cli containerd.io
```

2.Start Docker.

```
systemctl enable docker
systemctl start docker
```

###### Configure the docker accelerator

- Docker中国区官方镜像

```
vim /etc/docker/daemon.json
```

加入下面的数据：

docker-cn镜像：

```
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

或者

- 阿里云容器  服务（推荐）

```
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://pclhthp0.mirror.aliyuncs.com"]
}
EOF
```

```
systemctl restart docker
```



#### 新增防火墙策略

```
iptables -t filter -I INPUT 5 -m state --state NEW -m tcp -p tcp --dport 9200 -j ACCEPT 
iptables -t filter -I INPUT 6 -m state --state NEW -m tcp -p tcp --dport 9300 -j ACCEPT
iptables-save > /etc/sysconfig/iptables
```

### 安装Elasticsearch

* 自己手动安装Elasticsearch

Elasticsearch以以下包格式提供：

| Linux和MacOS `tar.gz`档案 | 这些`tar.gz`存档可以在任何Linux发行版和MacOS上安装。[在Linux或MacOS上从归档安装Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/targz.html) |
| ------------------------- | ------------------------------------------------------------ |
| Windows `.zip`档案        | 该`zip`存档适合在Windows上安装。[`.zip`在Windows上安装Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/zip-windows.html) |
| `deb`                     | 该`deb`软件包适用于Debian，Ubuntu和其他基于Debian的系统。Debian软件包可以从Elasticsearch网站或我们的Debian存储库下载。[使用Debian软件包安装Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/deb.html) |
| `rpm`                     | 该`rpm`软件包适合安装在Red Hat，Centos，SLES，OpenSuSE和其他基于RPM的系统上。RPM可以从Elasticsearch网站或我们的RPM存储库下载。[使用RPM安装Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/rpm.html) |
| `msi`                     | [ beta ] 此功能处于测试版状态，可能会发生变化。设计和代码不如官方GA功能成熟，并且按原样提供，不提供任何保证。测试版功能不受官方GA功能支持SLA的约束。该`msi`软件包适合安装在至少安装了.NET 4.5框架的Windows 64位系统上，并且是在Windows上开始使用Elasticsearch的最简单选择。MSI可以从Elasticsearch网站下载。[使用Windows MSI安装程序安装Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/windows.html) |
| `docker`                  | 图像可用于将Elasticsearch作为Docker容器运行。它们可以从Elastic Docker Registry下载。[使用Docker安装Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/docker.html) |
| `brew`                    | 可以从Elastic Homebrew tap获得公式，以便使用Homebrew包管理器在macOS上安装Elasticsearch。[使用Homebrew在macOS上安装Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/brew.html) |

* 配置管理工具

我们还提供以下配置管理工具来帮助进行大型部署：

| Puppet  | [puppet-elasticsearch](https://github.com/elastic/puppet-elasticsearch) |
| ------- | ------------------------------------------------------------ |
| Chef    | [cookbook-elasticsearch](https://github.com/elastic/cookbook-elasticsearch) |
| Ansible | [ansible-elasticsearch](https://github.com/elastic/ansible-elasticsearch) |

#### 使用RMP安装Elasticsearch

##### 手动下载并安装RPM包

可以从网站下载Elasticsearch v7.2.0的RPM并按如下方式安装：

```
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.2.0-x86_64.rpm
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.2.0-x86_64.rpm.sha512
shasum -a 512 -c elasticsearch-7.2.0-x86_64.rpm.sha512 
rpm --install elasticsearch-7.2.0-x86_64.rpm
```

##### 用systemd运行Elasticsearch

要将Elasticsearch配置为在系统启动时自动启动，请运行以下命令：

```
systemctl daemon-reload
systemctl enable elasticsearch.service
```

Elasticsearch可以按如下方式启动和停止：

```
systemctl start elasticsearch.service
systemctl stop elasticsearch.service
```

> ！！！请改好配置文件后，再启动

这些命令不提供有关Elasticsearch是否成功启动的反馈。相反，此信息将写入位于的日志文件中`/var/log/elasticsearch/`。

默认情况下，Elasticsearch服务不会在`systemd` 日记中记录信息。要启用`journalctl`日志记录，`--quiet`必须从文件中的`ExecStart`命令行中删除该选项`elasticsearch.service`。

##### 当`systemd`启用了日志记录，日志信息使用可用`journalctl`的命令：

To tail the journal:

```
journalctl -f
```

To list journal entries for the elasticsearch service:

```
journalctl --unit elasticsearch
```

To list journal entries for the elasticsearch service starting from a given time:

```
journalctl --unit elasticsearch --since  "2016-10-30 18:17:16"
```

##### 检查Elasticsearch是否在正常运行

您可以测试你的Elasticsearch节点通过发送一个HTTP请求的端口上运行`9200`上`localhost`：

```
GET /
```

正常情况下会收到类似下面这样的回复

```
{
  "name" : "es01.csp",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "wdgCotLlSOGt_zwv_69CIw",
  "version" : {
    "number" : "7.2.0",
    "build_flavor" : "default",
    "build_type" : "rpm",
    "build_hash" : "508c38a",
    "build_date" : "2019-06-20T15:54:18.811730Z",
    "build_snapshot" : false,
    "lucene_version" : "8.0.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

##### 配置Elasticsearch

Elasticsearch默认使用`/etc/elasticsearch`运行时配置。此目录的所有权和此目录中的所有文件都设置为 `root:elasticsearch`打包安装，并且目录`setgid` 设置了标志，以便创建的所有文件和子目录`/etc/elasticsearch` 也使用此所有权创建（例如，如果使用密钥库创建[密钥库）工具](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/secure-settings.html)）。预计会对此进行维护，以便Elasticsearch进程可以通过组权限读取此目录下的文件。

`/etc/elasticsearch/elasticsearch.yml`默认情况下，Elasticsearch从文件加载其配置 。[*配置Elasticsearch中*](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/settings.html)介绍了此配置文件的格式。

RPM还有一个系统配置文件（`/etc/sysconfig/elasticsearch`），允许您设置以下参数：

| `JAVA_HOME`          | 设置要使用的自定义Java路径。                                 |
| -------------------- | ------------------------------------------------------------ |
| `MAX_OPEN_FILES`     | 最大打开文件数，默认为`65535`。                              |
| `MAX_LOCKED_MEMORY`  | 最大锁定内存大小。`unlimited`如果您使用`bootstrap.memory_lock`elasticsearch.yml中的选项，则 设置为。 |
| `MAX_MAP_COUNT`      | 进程可能具有的最大内存映射区域数。如果您使用`mmapfs` 索引存储类型，请确保将其设置为较高的值。欲了解更多信息，请查看 [Linux内核文件](https://github.com/torvalds/linux/blob/master/Documentation/sysctl/vm.txt) 有关`max_map_count`。这是`sysctl`在启动Elasticsearch之前设置的。默认为`262144`。 |
| `ES_PATH_CONF`       | 配置文件目录（其中必须包括`elasticsearch.yml`，`jvm.options`，和`log4j2.properties`文件）; 默认为`/etc/elasticsearch`。 |
| `ES_JAVA_OPTS`       | 您可能想要应用的任何其他JVM系统属性。                        |
| `RESTART_ON_UPGRADE` | 在程序包升级时配置重新启动，默认为`false`。这意味着您必须在手动安装软件包后重新启动Elasticsearch实例。这样做的原因是为了确保群集中的升级不会导致连续的分片重新分配，从而导致高网络流量并缩短群集的响应时间。 |

> 使用的分发`systemd`要求通过`systemd`而不是通过`/etc/sysconfig/elasticsearch` 文件来配置系统资源限制。有关更多信息，请参阅[Systemd配置](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#systemd)。

##### RPM目录布局

RPM将配置文件，日志和数据目录放置在基于RPM的系统的适当位置：

| 类型        | 描述                                                         | 默认位置                           | 设置           |
| ----------- | ------------------------------------------------------------ | ---------------------------------- | -------------- |
| **home**    | Elasticsearch主目录或 `$ES_HOME`                             | `/usr/share/elasticsearch`         |                |
| **bin**     | 二进制脚本，包括`elasticsearch`启动节点和`elasticsearch-plugin`安装插件 | `/usr/share/elasticsearch/bin`     |                |
| **conf**    | 配置文件包括 `elasticsearch.yml`                             | `/etc/elasticsearch`               | `ES_PATH_CONF` |
| **conf**    | 环境变量，包括堆大小，文件描述符。                           | `/etc/sysconfig/elasticsearch`     |                |
| **data**    | 节点上分配的每个索引/分片的数据文件的位置。可以容纳多个位置。 | `/var/lib/elasticsearch`           | `path.data`    |
| **logs**    | 日志文件位置。                                               | `/var/log/elasticsearch`           | `path.logs`    |
| **plugins** | 插件文件位置。每个插件都将包含在一个子目录中。               | `/usr/share/elasticsearch/plugins` |                |
| **repo**    | 共享文件系统存储库位置。可以容纳多个位置。文件系统存储库可以放在此处指定的任何目录的任何子目录中。 | 未配置                             | `path.repo`    |

### 配置Elasticsearch

Elasticsearch具有良好的默认值，只需要很少的配置。可以使用[*Cluster Update Settings*](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/cluster-update-settings.html) API 在正在运行的群集上更改大多数设置 。

配置文件应包含特定于节点的设置（例如`node.name`和路径），或节点为了能够加入群集而需要的设置，例如`cluster.name`和`network.host`。

* 配置文件位置

Elasticsearch有三个配置文件：

​	*  `elasticsearch.yml` 用于配置Elasticsearch

​	* `jvm.options` 用于配置Elasticsearch JVM设置

​	* `log4j2.properties` 用于配置Elasticsearch日志记录

这些文件位于config目录中，其默认位置取决于安装是来自存档分发（`tar.gz`或`zip`）还是包分发（Debian或RPM软件包）。

对于包分发，config目录位置默认为 `/etc/elasticsearch`。config目录的位置也可以通过`ES_PATH_CONF`环境变量进行更改，但请注意，在shell中设置它是不够的。相反，此变量来自 `/etc/default/elasticsearch`（对于Debian软件包）和`/etc/sysconfig/elasticsearch`（对于RPM软件包）。您需要相应地编辑`ES_PATH_CONF=/etc/elasticsearch`其中一个文件中的 条目以更改配置目录位置。

* 配置文件格式

配置格式为[YAML](http://www.yaml.org/)。以下是更改数据路径和日志目录的示例：

```
path:
    data: /var/lib/elasticsearch
    logs: /var/log/elasticsearch
```

设置也可以按如下方式展平：

```
path.data: /var/lib/elasticsearch
path.logs: /var/log/elasticsearch
```

* 环境变量替换

使用`${...}`配置文件中的符号引用的环境变量将替换为环境变量的值，例如：

```
node.name:    ${HOSTNAME}
network.host: ${ES_NETWORK_HOST}
```

#### `path.data`和`path.logs`

如果您使用`.zip`或`.tar.gz`存档，则`data`和`logs` 目录是子文件夹`$ES_HOME`。如果这些重要文件夹保留在其默认位置，则在将Elasticsearch升级到新版本时，存在删除它们的高风险。

在生产使用中，您几乎肯定会想要更改数据和日志文件夹的位置：

```
path:
  logs: /var/log/elasticsearch
  data: /var/data/elasticsearch
```

该RPM和Debian发行版已经使用自定义路径，`data`和`logs`。

该`path.data`设置可以被设置为多条路径，在这种情况下，所有的路径将被用于存储数据（虽然属于单个碎片文件将全部存储相同的数据路径上）：

```
path:
  data:
    - /mnt/elasticsearch_1
    - /mnt/elasticsearch_2
    - /mnt/elasticsearch_3
```

#### `cluster.name`

节点只能`cluster.name`在与群集中的所有其他节点共享群集时才能加入群集。默认名称是`elasticsearch`，但您应将其更改为适当的名称，该名称描述了群集的用途。

```
cluster.name: logging-prod
```

确保不要在不同的环境中重用相同的群集名称，否则最终会导致节点加入错误的群集。

#### `node.name`

Elasticsearch使用Elasticsearch `node.name`的特定实例作为人类可读标识符，因此它包含在许多API的响应中。它默认为Elasticsearch启动时机器具有的主机名，但可以`elasticsearch.yml`按如下方式显式配置 ：

```
node.name: es01.csp
```

#### `network.host`

默认情况下，Elasticsearch仅绑定到环回地址 - 例如`127.0.0.1` 和`[::1]`。这足以在服务器上运行单个开发节点。

> 实际上，可以从`$ES_HOME` 单个节点上的相同位置启动多个节点。这对于测试Elasticsearch形成集群的能力非常有用，但它不是推荐用于生产的配置。

为了在其他服务器上形成包含节点的集群，您的节点将需要绑定到非环回地址。虽然有许多 [网络设置](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-network.html)，但通常您需要配置的是 `network.host`：

```
network.host: 192.168.1.10
```

该`network.host`设置也了解一些特殊的值，比如 `_local_`，`_site_`，`_global_`。

#### 发现和集群形成设置

在开始生产之前，应该配置两个重要的发现和集群形成设置，以便群集中的节点可以相互发现并选择主节点。

##### `discovery.seed_hosts`

开箱即用，没有任何网络配置，Elasticsearch将绑定到可用的环回地址，并将扫描本地端口9300到9305以尝试连接到在同一服务器上运行的其他节点。这提供了自动集群体验，无需进行任何配置。

如果要在其他主机上形成包含节点的群集，则必须使用该 `discovery.seed_hosts`设置提供群集中其他节点的列表，这些节点符合主要条件且可能是实时且可联系的，以便为[发现过程设定](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-hosts-providers.html)种子。此设置通常应包含群集中所有符合主节点的节点的地址。此设置包含主机数组或逗号分隔的字符串。每个值应采用`host:port`或的形式`host`（如果未设置，则`port` 默认为设置`transport.profiles.default.port`回落`transport.port`）。请注意，必须将IPv6主机置于括号内。此设置的默认值为`127.0.0.1, [::1]`。

##### `cluster.initial_master_nodes`

当您第一次启动全新的Elasticsearch集群时，会出现一个[集群引导](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-bootstrap-cluster.html)步骤，该步骤确定在第一次选举中计票的主要合格节点集。在[开发模式下](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/bootstrap-checks.html#dev-vs-prod-mode)，如果未配置发现设置，则此步骤由节点本身自动执行。由于此自动引导[本质上](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-quorums.html)是[不安全的](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-quorums.html)，因此当您在[生产模式下](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/bootstrap-checks.html#dev-vs-prod-mode)启动全新集群时，必须明确列出符合主要条件的节点，这些节点的投票应在第一次选举中计算。使用该`cluster.initial_master_nodes`设置设置此列表 。

```
discovery.seed_hosts:
   - 192.168.1.10:9300
   - 192.168.1.11 ###1
   - seeds.mydomain.com  ###2
cluster.initial_master_nodes: ###3
   - master-node-a
   - master-node-b
   - master-node-c
```

###1 如果未指定，端口将默认为`transport.profiles.default.port`和回退`transport.port`。

###2 如果主机名解析为多个IP地址，则该节点将尝试发现所有已解析地址的其他节点。

###3 初始主节点应由其标识 [`node.name`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/node.name.html)，默认为其主机名。确保值`cluster.initial_master_nodes`与`node.name` 确切匹配。如果使用完全限定的域名（例如 `master-node-a.example.com`节点名称），则必须在此列表中使用完全限定名称; 相反，如果`node.name`是一个没有任何尾随限定符的裸主机名，那么你还必须省略尾随限定符`cluster.initial_master_nodes`。

有关更多信息，请参阅[引导群集](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-bootstrap-cluster.html)以及 [发现和群集形成设置](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-settings.html)。

>
> 如果在未配置这些设置的情况下启动Elasticsearch节点，则它将以开发模式启动并自动引导至新集群。如果您在不同的主机上启动某些Elasticsearch节点，则默认情况下它们不会相互发现，并且会在每个主机上形成不同的群集。即使您随后尝试将所有节点配置到单个群集中，Elasticsearch也不会在它们形成后将单独的群集合并在一起。这是因为没有办法将这些单独的集群合并在一起而没有数据丢失的风险。您可以通过检查`GET /`每个节点上报告的群集UUID来判断您是否已形成单独的群集。如果您打算组建一个群集，那么您应该重新开始：
>
> - 如果您不想丢失任何数据，请拍摄每个单主机群集的[快照](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-snapshots.html)。请注意，每个群集必须使用自己的快照存储库。
> - 关闭所有节点。
> - 通过删除其[数据文件夹](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-node.html#data-path)的内容完全擦除每个节点 。
> - `cluster.initial_master_nodes`如上所述配置。
> - 重新启动所有节点并验证它们是否已形成单个群集。
> - 根据需要[还原](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-snapshots.html)所有快照。

#### 设置堆大小

默认情况下，Elasticsearch告诉JVM使用最小和最大大小为1 GB的堆。迁移到生产环境时，配置堆大小以确保Elasticsearch有足够的可用堆是很重要的。

Elasticsearch将通过（最小堆大小）和（最大堆大小）设置分配[jvm.options中](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html)指定的整个堆 。您应该将这两个设置设置为彼此相等。`Xms` `Xmx`

- 设置`Xmx`并且`Xms`不超过物理RAM的50％。Elasticsearch需要内存用于JVM堆以外的其他目的，为此留出空间很重要。例如，Elasticsearch使用堆外缓冲区进行有效的网络通信，依赖操作系统的文件系统缓存来有效访问文件，而JVM本身也需要一些内存。使用比使用该`Xmx`设置配置的限制更多的内存来观察Elasticsearch进程是正常的。
- 设置`Xmx`并且`Xms`不超过JVM用于压缩对象指针的阈值（压缩oops）; 确切的阈值变化但接近32 GB。您可以通过在日志中查找如下所示的行来验证您是否低于阈值：

```
heap size [1.9gb], compressed ordinary object pointers [true]
```

以下是如何通过jvm.options文件设置堆大小的示例：

```
-Xms4g ###1
-Xmx4g ###2
```

###1 将最小堆大小设置为4g。

###2 将最大堆大小设置为4g。

也可以通过环境变量设置堆大小。这可以通过注释掉来完成`Xms`，并`Xmx`设置在[`jvm.options`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html)文件中，并通过设置这些值`ES_JAVA_OPTS`：

```
ES_JAVA_OPTS="-Xms2g -Xmx2g" ./bin/elasticsearch ###1
ES_JAVA_OPTS="-Xms4000m -Xmx4000m" ./bin/elasticsearch ###2 
```

###1 将最小和最大堆大小设置为2 GB。

###2 将最小和最大堆大小设置为4000 MB。

#### JVM堆存储路径

默认情况下，Elasticsearch将JVM配置为将内存异常转储到默认数据目录（这`/var/lib/elasticsearch`适用于[RPM](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/rpm.html)和[Debian](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/deb.html)软件包发行版，以及`data`用于[tar](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/targz.html)和[zip](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/zip-windows.html)归档文件分发的Elasticsearch安装根目录下的目录） 。

如果这个路径是不适合接受堆转储，您应该修改的条目`-XX:HeapDumpPath=...`在 [`jvm.options`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html)。

如果指定目录，JVM将根据正在运行的实例的PID为堆转储生成文件名。

如果指定固定文件名而不是目录，则当JVM需要在内存不足异常上执行堆转储时，该文件不能存在，否则堆转储将失败。

#### GC日志

默认情况下，Elasticsearch启用GC日志。

这些配置在 [`jvm.options`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html)默认位置和默认位置与Elasticsearch日志相同。

默认配置每64 MB轮换一次日志，最多可占用2 GB的磁盘空间。

#### 临时目录

默认情况下，Elasticsearch使用启动脚本在系统临时目录下创建的专用临时目录。

在某些Linux发行版上，系统实用程序将清除文件和目录（`/tmp`如果它们最近未被访问过）。如果长时间不使用需要临时目录的功能，则可能导致在Elasticsearch运行时删除专用临时目录。如果随后使用需要临时目录的功能，则会导致问题。

如果使用`.deb`或`.rpm`包安装Elasticsearch 并在其下运行，`systemd`那么Elasticsearch使用的专用临时目录将从定期清理中排除。

但是，如果您打算`.tar.gz`在Linux 上运行分发一段时间，那么您应该考虑为Elasticsearch创建一个专用的临时目录，该目录不在将从中清除旧文件和目录的路径下。此目录应具有权限集，以便只有运行Elasticsearch的用户才能访问它。然后`$ES_TMPDIR`在启动Elasticsearch之前将环境变量设置 为指向它。

#### JVM致命错误日志

默认情况下，Elasticsearch将JVM配置为将致命错误日志写入默认日志记录目录（这`/var/log/elasticsearch`适用于[RPM](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/rpm.html)和[Debian](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/deb.html)软件包发行版，以及`logs` 针对[tar](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/targz.html)和[zip](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/zip-windows.html)归档文件分发的Elasticsearch安装根目录下的目录 ）。

这些是JVM在遇到致命错误（例如，分段错误）时生成的日志。如果该路径不适合于接收的日志，则应修改条目`-XX:ErrorFile=...`中 [`jvm.options`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html)到备用路径。

### 系统配置调优

#### 配置系统设置

配置系统设置的位置取决于您用于安装Elasticsearch的软件包以及您使用的操作系统。

使用`.zip`或`.tar.gz`包时，可以配置系统设置：

- 暂时用[`ulimit`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#ulimit)，或
- 永久地[`/etc/security/limits.conf`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#limits.conf)。

使用RPM或Debian软件包时，大多数系统设置都在[系统配置文件](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#sysconfig)中设置 。但是，使用systemd的系统要求在[systemd配置文件](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#systemd)中指定系统限制 。

##### `ulimit`

在Linux系统上，`ulimit`可以用于临时更改资源限制。通常需要`root`在切换到将运行Elasticsearch的用户之前设置限制。例如，要将打开文件句柄（`ulimit -n`）的数量设置为65,536，您可以执行以下操作：

```
ulimit -n 65535 
```

新限制仅在当前会话期间应用。

您可以查询所有当前应用的限制`ulimit -a`。

##### `/etc/security/limits.conf`

在Linux系统上，可以通过编辑`/etc/security/limits.conf`文件为特定用户设置持久限制。要将用户的最大打开文件数设置`elasticsearch`为65,536，请将以下行添加到`limits.conf`文件中：

```
elasticsearch  -  nofile 65535
```

此更改仅在`elasticsearch`用户下次打开新会话时生效。

> 通常在开机以优化`/etc/security/limits.conf`配置文件
>
> 在最后加入下面内容
>
> ```
> * hard nofile 65535
> * soft nofile 65535
> * soft nproc 65535
> * hard nproc 65535
> ```
>
> 如果已经设置上述参数，则无需调整
>
> * hard 硬限制
> * soft 软限制
> * nofile 最大打开文件数（文件描述符）
> * nproc 最大线程数

##### Sysconfig文件

使用RPM或Debian软件包时，可以在系统配置文件中指定系统设置和环境变量，该文件位于：

| RPM      | `/etc/sysconfig/elasticsearch` |
| -------- | ------------------------------ |
| Debian的 | `/etc/default/elasticsearch`   |

但是，对于使用的`systemd`系统，需要通过[systemd](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#systemd)指定系统限制。

#####  系统配置

在使用[systemd的](https://en.wikipedia.org/wiki/Systemd)系统上使用RPM或Debian软件包时 ，必须通过systemd指定系统限制。

systemd服务文件（`/usr/lib/systemd/system/elasticsearch.service`）包含默认应用的限制。

要覆盖它们，请添加一个名为的文件`/etc/systemd/system/elasticsearch.service.d/override.conf`（或者，您可以运行`systemctl edit elasticsearch`它在默认编辑器中自动打开文件）。设置此文件中的任何更改，例如

```
[Service]
LimitMEMLOCK=infinity
```

完成后，运行以下命令重新加载：

```
systemctl daemon-reload
```

#### 禁用交换

大多数操作系统尝试使用尽可能多的内存来存储文件系统缓存，并急切地交换掉未使用的应用程序内存。这可能导致部分JVM堆甚至其可执行页面被换出到磁盘。

交换对性能，节点稳定性非常不利，应该不惜一切代价避免。它可能导致垃圾收集持续**数分钟**而不是毫秒，并且可能导致节点响应缓慢甚至断开与群集的连接。在弹性分布式系统中，让操作系统终止节点更有效。

有三种禁用交换的方法。首选选项是完全禁用交换。如果这不是一个选项，是否更喜欢最小化swappiness与内存锁定取决于您的环境。

#####  禁用所有交换文件

通常Elasticsearch是在盒子上运行的唯一服务，其内存使用量由JVM选项控制。应该没有必要启用交换。

在Linux系统上，您可以通过运行以下命令暂时禁用交换：

```sh
swapoff -a
```

这不需要重新启动Elasticsearch。

要永久禁用它，您需要编辑`/etc/fstab`文件并注释掉包含该单词的任何行`swap`。

#####  配置`swappiness`

Linux系统上可用的另一个选项是确保将sysctl值 `vm.swappiness`设置为`1`。这降低了内核交换的倾向，在正常情况下不应导致交换，同时仍允许整个系统在紧急情况下交换。

##### 启用`bootstrap.memory_lock`

另一种选择是在Linux / Unix系统上使用[mlockall](http://opengroup.org/onlinepubs/007908799/xsh/mlockall.html)，或 在Windows 上 使用 [VirtualLock](https://msdn.microsoft.com/en-us/library/windows/desktop/aa366895%28v=vs.85%29.aspx)，以尝试将进程地址空间锁定到RAM中，从而防止任何Elasticsearch内存被换出。这可以通过将此行添加到`config/elasticsearch.yml`文件来完成：

```
bootstrap.memory_lock: true
```

> `mlockall` 如果尝试分配的内存超过可用内存，可能会导致JVM或shell会话退出！

启动Elasticsearch后，您可以通过检查`mlockall`此请求的输出中的值来查看是否已成功应用此设置：

```
GET _nodes?filter_path=**.mlockall
```

如果你看到`mlockall`的`false`，那么就意味着该`mlockall` 请求失败。您还会在日志中看到包含更多信息的行`Unable to lock JVM Memory`。

在Linux / Unix系统上，最可能的原因是运行Elasticsearch的用户没有锁定内存的权限。这可以授予如下：

- **`.zip` 和 `.tar.gz`**

  [`ulimit -l unlimited`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#ulimit)在启动Elasticsearch之前设置为root，或设置`memlock`为`unlimited`in [`/etc/security/limits.conf`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#limits.conf)。

- **RPM和Debian**

  设置`MAX_LOCKED_MEMORY`到`unlimited`了在 [系统配置文件](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#sysconfig)（或见下文使用系统`systemd`）。

- **系统使用 `systemd`**

  设置`LimitMEMLOCK`于`infinity`在[systemd配置](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#systemd)。

可能`mlockall`失败的另一个可能原因是 [JNA临时目录（通常是子目录 `/tmp`）随`noexec`选项一起安装](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/executable-jna-tmpdir.html)。这可以通过使用`ES_JAVA_OPTS`环境变量为JNA指定新的临时目录来解决：

```sh
export ES_JAVA_OPTS =“$ ES_JAVA_OPTS -Djna.tmpdir = <path>”
./bin/elasticsearch
```

或者在jvm.options配置文件中设置此JVM标志。

#### 文件描述符

Elasticsearch使用大量文件描述符或文件句柄。用完文件描述符可能是灾难性的，最有可能导致数据丢失。确保将运行Elasticsearch的用户的打开文件描述符数量限制增加到65,536或更高。

对于`.zip`and `.tar.gz`packages，[`ulimit -n 65535`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#ulimit)在启动Elasticsearch之前设置为root，或设置`nofile`为`65535`in [`/etc/security/limits.conf`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#limits.conf)。

RPM和Debian软件包已将文件描述符的最大数量默认为65535，无需进一步配置。

您可以`max_file_descriptors`使用[*Nodes Stats*](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/cluster-nodes-stats.html) API 检查每个节点的配置，包括：

```
GET _nodes/stats/process?filter_path=**.max_file_descriptors
```

#### 虚拟内存

Elasticsearch [`mmapfs`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/index-modules-store.html#mmapfs)默认使用目录来存储其索引。mmap计数的默认操作系统限制可能太低，这可能导致内存不足异常。

在Linux上，您可以通过运行以下命令来增加限制 `root`：

```sh
sysctl -w vm.max_map_count = 262144
```

要永久设置此值，请更新`vm.max_map_count`设置 `/etc/sysctl.conf`。要在重新启动后进行验证，请运行`sysctl vm.max_map_count`。

RPM和Debian软件包将自动配置此设置。无需进一步配置。

#### 线程数

Elasticsearch为不同类型的操作使用许多线程池。重要的是它能够在需要时创建新线程。确保Elasticsearch用户可以创建的线程数至少为4096。

这可以通过[`ulimit -u 4096`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#ulimit)在启动Elasticsearch之前设置为root或通过设置`nproc`为`4096`in来完成[`/etc/security/limits.conf`](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#limits.conf)。

作为服务运行时的程序包分发`systemd`将自动配置Elasticsearch进程的线程数。无需其他配置。

### 检测集群状态

让我们从基本运行状况检查开始，我们可以使用它来查看集群的运行情况。我们将使用curl来执行此操作，但您可以使用任何允许您进行HTTP / REST调用的工具。假设我们仍然在我们启动Elasticsearch的同一节点上打开另一个命令shell窗口。

#### 健康状态

要检查群集运行状况，我们将使用[`_cat`API](https://www.elastic.co/guide/en/elasticsearch/reference/7.2/cat.html)。您可以 通过单击“查看控制台”或单击下面的“COPY AS CURL”链接并将其粘贴到终端中，在[Kibana控制台中](https://www.elastic.co/guide/en/kibana/7.2/console-kibana.html)运行以下命令`curl`。

```
GET /_cat/health?v
```

并回应：

```
epoch      timestamp cluster      status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent
1564125184 07:13:04  logging-prod green           3         3      0   0    0    0        0             0                  -                100.0%
```

我们可以看到名为“elasticsearch”的群集处于绿色状态。

每当我们要求群集健康时，我们要么获得绿色，黄色或红色。

- 绿色 - 一切都很好（集群功能齐全）
- 黄色 - 所有数据都可用，但尚未分配一些副本（群集功能齐全）
- 红色 - 某些数据由于某种原因不可用（群集部分功能）

**注意：**当群集为红色时，它将继续提供来自可用分片的搜索请求，但您可能需要尽快修复它，因为存在未分配的分片。

同样从上面的响应中，我们可以看到总共3个节点，并且我们有0个分片，因为我们还没有数据。请注意，由于我们使用默认群集名称（elasticsearch），并且由于Elasticsearch默认使用单播网络发现来查找同一台计算机上的其他节点，因此您可能会意外启动计算机上的多个节点并拥有它们所有人都加入一个集群。在这种情况下，您可能会在上面的响应中看到多个节点。

#### 节点列表

我们还可以获得群集中的节点列表，如下所示：

```
GET /_cat/nodes?v
```

并回应：

```
ip             heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name
192.168.165.59           10          79   0    0.00    0.03     0.06 mdi       -      es01.csp
192.168.165.60           10          76   0    0.00    0.01     0.05 mdi       -      es02.csp
192.168.165.61           10          76   0    0.00    0.02     0.05 mdi       *      es03.csp
```

在这里，我们可以看到一个名为“es03.csp”的节点，它是我们集群中当前的主节点。

#### 列出所有指数

现在让我们来看看我们的指数：

```
GET /_cat/indices?v
```

并回应：

```
health status index uuid pri rep docs.count docs.deleted store.size pri.store.size
```

这仅仅意味着我们在集群中还没有索引。

### 插件安装

#### 中文分词

##### Install

elasticsearch在分词方面，需要添加中文分词的插件。在其安装代码的plugins目录，即`/usr/share/elasticsearch/plugins`，需要增加中文分词插件。

 download pre-build package from here: <https://github.com/medcl/elasticsearch-analysis-ik/releases>

create plugin folder `cd your-es-root/plugins/ && mkdir ik`

unzip plugin to folder `your-es-root/plugins/ik`

##### Quick Example

1.create a index

```
curl -XPUT http://localhost:9200/index
```

2.create a mapping

```
curl -XPOST http://localhost:9200/index/_mapping -H 'Content-Type:application/json' -d'
{
        "properties": {
            "content": {
                "type": "text",
                "analyzer": "ik_max_word",
                "search_analyzer": "ik_smart"
            }
        }

}'
```

3.index some docs

```
curl -XPOST http://localhost:9200/index/_create/1 -H 'Content-Type:application/json' -d'
{"content":"美国留给伊拉克的是个烂摊子吗"}
'
curl -XPOST http://localhost:9200/index/_create/2 -H 'Content-Type:application/json' -d'
{"content":"公安部：各地校车将享最高路权"}
'
curl -XPOST http://localhost:9200/index/_create/3 -H 'Content-Type:application/json' -d'
{"content":"中韩渔警冲突调查：韩警平均每天扣1艘中国渔船"}
'
curl -XPOST http://localhost:9200/index/_create/4 -H 'Content-Type:application/json' -d'
{"content":"中国驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首"}
'
```

4.query with highlighting

```
curl -XPOST http://localhost:9200/index/_search  -H 'Content-Type:application/json' -d'
{
    "query" : { "match" : { "content" : "中国" }},
    "highlight" : {
        "pre_tags" : ["<tag1>", "<tag2>"],
        "post_tags" : ["</tag1>", "</tag2>"],
        "fields" : {
            "content" : {}
        }
    }
}
'
```

Result

```
{
    "took": 14,
    "timed_out": false,
    "_shards": {
        "total": 5,
        "successful": 5,
        "failed": 0
    },
    "hits": {
        "total": 2,
        "max_score": 2,
        "hits": [
            {
                "_index": "index",
                "_type": "fulltext",
                "_id": "4",
                "_score": 2,
                "_source": {
                    "content": "中国驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首"
                },
                "highlight": {
                    "content": [
                        "<tag1>中国</tag1>驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首 "
                    ]
                }
            },
            {
                "_index": "index",
                "_type": "fulltext",
                "_id": "3",
                "_score": 2,
                "_source": {
                    "content": "中韩渔警冲突调查：韩警平均每天扣1艘中国渔船"
                },
                "highlight": {
                    "content": [
                        "均每天扣1艘<tag1>中国</tag1>渔船 "
                    ]
                }
            }
        ]
    }
}
```

#### elasticsearch-head

##### Running with docker

```
docker run -d -p 9100:9100 mobz/elasticsearch-head:5
```

>由于elasticsearch-head:5镜像对elasticsearch的7版本好像适配性不够，所以部分显示可能会有空白

##### Connecting to elasticsearch

By default elasticsearch exposes a http rest API on port 9200 which elasticsearch-head connects to.

###### Enable CORS in elasticsearch

When not running as a plugin of elasticsearch (which is not even possible from version 5) you must enable [CORS](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/modules-http.html) in elasticsearch otherwise your browser will rejects requests which appear insecure.

In elasticsearch configuration;

- add `http.cors.enabled: true`
- you must also set `http.cors.allow-origin` because no origin allowed by default. `http.cors.allow-origin: "*"` is valid value, however it’s considered as a security risk as your cluster is open to cross origin from **anywhere**.

改完配置后，重启Elasticsearch服务

![](images/1.png)

#### cerebro

###### Runnging with docker

```
docker run -d -p 9000:9000  lmenezes/cerebro
```

![](images/2.png)

参考链接：

> 官方文档：<https://www.elastic.co/guide/en/elasticsearch/reference/7.2/getting-started.html>
>
> 中文分词器elasticsearch-analysis-ik: <https://github.com/medcl/elasticsearch-analysis-ik>
>
> elasticsearch-head：<https://github.com/mobz/elasticsearch-head>
>
> cerebro: <https://github.com/lmenezes/cerebro>

