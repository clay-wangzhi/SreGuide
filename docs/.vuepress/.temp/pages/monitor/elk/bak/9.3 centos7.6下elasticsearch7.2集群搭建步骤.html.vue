<template><h2 id="centos7-6下elasticseatch7-2集群搭建步骤" tabindex="-1"><a class="header-anchor" href="#centos7-6下elasticseatch7-2集群搭建步骤" aria-hidden="true">#</a> Centos7.6下Elasticseatch7.2集群搭建步骤</h2>
<h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h3>
<ul>
<li>云主机：3台</li>
<li>linux系统版本：centos7.6.1810</li>
<li>配置：4核 8G</li>
</ul>
<h4 id="主机名解析" tabindex="-1"><a class="header-anchor" href="#主机名解析" aria-hidden="true">#</a> 主机名解析</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hostnamectl set-hostname es01.csp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将三台主机的主机名加入到<code>/etc/hosts</code>文件中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo "xxx.xxx.xxx.xxx es01.csp" /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="安装依赖环境" tabindex="-1"><a class="header-anchor" href="#安装依赖环境" aria-hidden="true">#</a> 安装依赖环境</h4>
<h5 id="安装jdk11和shasum" tabindex="-1"><a class="header-anchor" href="#安装jdk11和shasum" aria-hidden="true">#</a> 安装JDK11和shasum</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install java-11-openjdk.x86_64 1:perl-Digest-SHA-5.85-4.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h5>
<h6 id="uninstall-old-versions" tabindex="-1"><a class="header-anchor" href="#uninstall-old-versions" aria-hidden="true">#</a> Uninstall old versions</h6>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum remove docker \
  docker-client \
  docker-client-latest \
  docker-common \
  docker-latest \
  docker-latest-logrotate \
  docker-logrotate \
  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h6 id="install-using-the-repository" tabindex="-1"><a class="header-anchor" href="#install-using-the-repository" aria-hidden="true">#</a> Install using the repository</h6>
<ol>
<li>Install required packages. <code>yum-utils</code> provides the <code>yum-config-manager</code> utility, and <code>device-mapper-persistent-data</code> and <code>lvm2</code>are required by the <code>devicemapper</code> storage driver.</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li>Use the following command to set up the <strong>stable</strong> repository.</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h6 id="install-docker-ce" tabindex="-1"><a class="header-anchor" href="#install-docker-ce" aria-hidden="true">#</a> INSTALL DOCKER CE</h6>
<ol>
<li>Install the <em>latest version</em> of Docker CE and containerd, or go to the next step to install a specific version:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum -y install docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.Start Docker.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl enable docker
systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h6 id="configure-the-docker-accelerator" tabindex="-1"><a class="header-anchor" href="#configure-the-docker-accelerator" aria-hidden="true">#</a> Configure the docker accelerator</h6>
<ul>
<li>Docker中国区官方镜像</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>加入下面的数据：</p>
<p>docker-cn镜像：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>或者</p>
<ul>
<li>阿里云容器  服务（推荐）</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tee /etc/docker/daemon.json &lt;&lt;-'EOF'
{
  "registry-mirrors": ["https://pclhthp0.mirror.aliyuncs.com"]
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="新增防火墙策略" tabindex="-1"><a class="header-anchor" href="#新增防火墙策略" aria-hidden="true">#</a> 新增防火墙策略</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>iptables -t filter -I INPUT 5 -m state --state NEW -m tcp -p tcp --dport 9200 -j ACCEPT 
iptables -t filter -I INPUT 6 -m state --state NEW -m tcp -p tcp --dport 9300 -j ACCEPT
iptables-save > /etc/sysconfig/iptables
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="安装elasticsearch" tabindex="-1"><a class="header-anchor" href="#安装elasticsearch" aria-hidden="true">#</a> 安装Elasticsearch</h3>
<ul>
<li>自己手动安装Elasticsearch</li>
</ul>
<p>Elasticsearch以以下包格式提供：</p>
<table>
<thead>
<tr>
<th>Linux和MacOS <code>tar.gz</code>档案</th>
<th>这些<code>tar.gz</code>存档可以在任何Linux发行版和MacOS上安装。<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/targz.html" target="_blank" rel="noopener noreferrer">在Linux或MacOS上从归档安装Elasticsearch<ExternalLinkIcon/></a></th>
</tr>
</thead>
<tbody>
<tr>
<td>Windows <code>.zip</code>档案</td>
<td>该<code>zip</code>存档适合在Windows上安装。<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/zip-windows.html" target="_blank" rel="noopener noreferrer"><code>.zip</code>在Windows上安装Elasticsearch<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><code>deb</code></td>
<td>该<code>deb</code>软件包适用于Debian，Ubuntu和其他基于Debian的系统。Debian软件包可以从Elasticsearch网站或我们的Debian存储库下载。<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/deb.html" target="_blank" rel="noopener noreferrer">使用Debian软件包安装Elasticsearch<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><code>rpm</code></td>
<td>该<code>rpm</code>软件包适合安装在Red Hat，Centos，SLES，OpenSuSE和其他基于RPM的系统上。RPM可以从Elasticsearch网站或我们的RPM存储库下载。<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/rpm.html" target="_blank" rel="noopener noreferrer">使用RPM安装Elasticsearch<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><code>msi</code></td>
<td>[ beta ] 此功能处于测试版状态，可能会发生变化。设计和代码不如官方GA功能成熟，并且按原样提供，不提供任何保证。测试版功能不受官方GA功能支持SLA的约束。该<code>msi</code>软件包适合安装在至少安装了.NET 4.5框架的Windows 64位系统上，并且是在Windows上开始使用Elasticsearch的最简单选择。MSI可以从Elasticsearch网站下载。<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/windows.html" target="_blank" rel="noopener noreferrer">使用Windows MSI安装程序安装Elasticsearch<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><code>docker</code></td>
<td>图像可用于将Elasticsearch作为Docker容器运行。它们可以从Elastic Docker Registry下载。<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/docker.html" target="_blank" rel="noopener noreferrer">使用Docker安装Elasticsearch<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><code>brew</code></td>
<td>可以从Elastic Homebrew tap获得公式，以便使用Homebrew包管理器在macOS上安装Elasticsearch。<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/brew.html" target="_blank" rel="noopener noreferrer">使用Homebrew在macOS上安装Elasticsearch<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<ul>
<li>配置管理工具</li>
</ul>
<p>我们还提供以下配置管理工具来帮助进行大型部署：</p>
<table>
<thead>
<tr>
<th>Puppet</th>
<th><a href="https://github.com/elastic/puppet-elasticsearch" target="_blank" rel="noopener noreferrer">puppet-elasticsearch<ExternalLinkIcon/></a></th>
</tr>
</thead>
<tbody>
<tr>
<td>Chef</td>
<td><a href="https://github.com/elastic/cookbook-elasticsearch" target="_blank" rel="noopener noreferrer">cookbook-elasticsearch<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>Ansible</td>
<td><a href="https://github.com/elastic/ansible-elasticsearch" target="_blank" rel="noopener noreferrer">ansible-elasticsearch<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h4 id="使用rmp安装elasticsearch" tabindex="-1"><a class="header-anchor" href="#使用rmp安装elasticsearch" aria-hidden="true">#</a> 使用RMP安装Elasticsearch</h4>
<h5 id="手动下载并安装rpm包" tabindex="-1"><a class="header-anchor" href="#手动下载并安装rpm包" aria-hidden="true">#</a> 手动下载并安装RPM包</h5>
<p>可以从网站下载Elasticsearch v7.2.0的RPM并按如下方式安装：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.2.0-x86_64.rpm
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.2.0-x86_64.rpm.sha512
shasum -a 512 -c elasticsearch-7.2.0-x86_64.rpm.sha512 
rpm --install elasticsearch-7.2.0-x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="用systemd运行elasticsearch" tabindex="-1"><a class="header-anchor" href="#用systemd运行elasticsearch" aria-hidden="true">#</a> 用systemd运行Elasticsearch</h5>
<p>要将Elasticsearch配置为在系统启动时自动启动，请运行以下命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload
systemctl enable elasticsearch.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Elasticsearch可以按如下方式启动和停止：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl start elasticsearch.service
systemctl stop elasticsearch.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>！！！请改好配置文件后，再启动</p>
</blockquote>
<p>这些命令不提供有关Elasticsearch是否成功启动的反馈。相反，此信息将写入位于的日志文件中<code>/var/log/elasticsearch/</code>。</p>
<p>默认情况下，Elasticsearch服务不会在<code>systemd</code> 日记中记录信息。要启用<code>journalctl</code>日志记录，<code>--quiet</code>必须从文件中的<code>ExecStart</code>命令行中删除该选项<code>elasticsearch.service</code>。</p>
<h5 id="当systemd启用了日志记录-日志信息使用可用journalctl的命令" tabindex="-1"><a class="header-anchor" href="#当systemd启用了日志记录-日志信息使用可用journalctl的命令" aria-hidden="true">#</a> 当<code>systemd</code>启用了日志记录，日志信息使用可用<code>journalctl</code>的命令：</h5>
<p>To tail the journal:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>journalctl -f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>To list journal entries for the elasticsearch service:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>journalctl --unit elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>To list journal entries for the elasticsearch service starting from a given time:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>journalctl --unit elasticsearch --since  "2016-10-30 18:17:16"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="检查elasticsearch是否在正常运行" tabindex="-1"><a class="header-anchor" href="#检查elasticsearch是否在正常运行" aria-hidden="true">#</a> 检查Elasticsearch是否在正常运行</h5>
<p>您可以测试你的Elasticsearch节点通过发送一个HTTP请求的端口上运行<code>9200</code>上<code>localhost</code>：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>正常情况下会收到类似下面这样的回复</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h5 id="配置elasticsearch" tabindex="-1"><a class="header-anchor" href="#配置elasticsearch" aria-hidden="true">#</a> 配置Elasticsearch</h5>
<p>Elasticsearch默认使用<code>/etc/elasticsearch</code>运行时配置。此目录的所有权和此目录中的所有文件都设置为 <code>root:elasticsearch</code>打包安装，并且目录<code>setgid</code> 设置了标志，以便创建的所有文件和子目录<code>/etc/elasticsearch</code> 也使用此所有权创建（例如，如果使用密钥库创建<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/secure-settings.html" target="_blank" rel="noopener noreferrer">密钥库）工具<ExternalLinkIcon/></a>）。预计会对此进行维护，以便Elasticsearch进程可以通过组权限读取此目录下的文件。</p>
<p><code>/etc/elasticsearch/elasticsearch.yml</code>默认情况下，Elasticsearch从文件加载其配置 。<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/settings.html" target="_blank" rel="noopener noreferrer"><em>配置Elasticsearch中</em><ExternalLinkIcon/></a>介绍了此配置文件的格式。</p>
<p>RPM还有一个系统配置文件（<code>/etc/sysconfig/elasticsearch</code>），允许您设置以下参数：</p>
<table>
<thead>
<tr>
<th><code>JAVA_HOME</code></th>
<th>设置要使用的自定义Java路径。</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>MAX_OPEN_FILES</code></td>
<td>最大打开文件数，默认为<code>65535</code>。</td>
</tr>
<tr>
<td><code>MAX_LOCKED_MEMORY</code></td>
<td>最大锁定内存大小。<code>unlimited</code>如果您使用<code>bootstrap.memory_lock</code>elasticsearch.yml中的选项，则 设置为。</td>
</tr>
<tr>
<td><code>MAX_MAP_COUNT</code></td>
<td>进程可能具有的最大内存映射区域数。如果您使用<code>mmapfs</code> 索引存储类型，请确保将其设置为较高的值。欲了解更多信息，请查看 <a href="https://github.com/torvalds/linux/blob/master/Documentation/sysctl/vm.txt" target="_blank" rel="noopener noreferrer">Linux内核文件<ExternalLinkIcon/></a> 有关<code>max_map_count</code>。这是<code>sysctl</code>在启动Elasticsearch之前设置的。默认为<code>262144</code>。</td>
</tr>
<tr>
<td><code>ES_PATH_CONF</code></td>
<td>配置文件目录（其中必须包括<code>elasticsearch.yml</code>，<code>jvm.options</code>，和<code>log4j2.properties</code>文件）; 默认为<code>/etc/elasticsearch</code>。</td>
</tr>
<tr>
<td><code>ES_JAVA_OPTS</code></td>
<td>您可能想要应用的任何其他JVM系统属性。</td>
</tr>
<tr>
<td><code>RESTART_ON_UPGRADE</code></td>
<td>在程序包升级时配置重新启动，默认为<code>false</code>。这意味着您必须在手动安装软件包后重新启动Elasticsearch实例。这样做的原因是为了确保群集中的升级不会导致连续的分片重新分配，从而导致高网络流量并缩短群集的响应时间。</td>
</tr>
</tbody>
</table>
<blockquote>
<p>使用的分发<code>systemd</code>要求通过<code>systemd</code>而不是通过<code>/etc/sysconfig/elasticsearch</code> 文件来配置系统资源限制。有关更多信息，请参阅<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#systemd" target="_blank" rel="noopener noreferrer">Systemd配置<ExternalLinkIcon/></a>。</p>
</blockquote>
<h5 id="rpm目录布局" tabindex="-1"><a class="header-anchor" href="#rpm目录布局" aria-hidden="true">#</a> RPM目录布局</h5>
<p>RPM将配置文件，日志和数据目录放置在基于RPM的系统的适当位置：</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
<th>默认位置</th>
<th>设置</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>home</strong></td>
<td>Elasticsearch主目录或 <code>$ES_HOME</code></td>
<td><code>/usr/share/elasticsearch</code></td>
<td></td>
</tr>
<tr>
<td><strong>bin</strong></td>
<td>二进制脚本，包括<code>elasticsearch</code>启动节点和<code>elasticsearch-plugin</code>安装插件</td>
<td><code>/usr/share/elasticsearch/bin</code></td>
<td></td>
</tr>
<tr>
<td><strong>conf</strong></td>
<td>配置文件包括 <code>elasticsearch.yml</code></td>
<td><code>/etc/elasticsearch</code></td>
<td><code>ES_PATH_CONF</code></td>
</tr>
<tr>
<td><strong>conf</strong></td>
<td>环境变量，包括堆大小，文件描述符。</td>
<td><code>/etc/sysconfig/elasticsearch</code></td>
<td></td>
</tr>
<tr>
<td><strong>data</strong></td>
<td>节点上分配的每个索引/分片的数据文件的位置。可以容纳多个位置。</td>
<td><code>/var/lib/elasticsearch</code></td>
<td><code>path.data</code></td>
</tr>
<tr>
<td><strong>logs</strong></td>
<td>日志文件位置。</td>
<td><code>/var/log/elasticsearch</code></td>
<td><code>path.logs</code></td>
</tr>
<tr>
<td><strong>plugins</strong></td>
<td>插件文件位置。每个插件都将包含在一个子目录中。</td>
<td><code>/usr/share/elasticsearch/plugins</code></td>
<td></td>
</tr>
<tr>
<td><strong>repo</strong></td>
<td>共享文件系统存储库位置。可以容纳多个位置。文件系统存储库可以放在此处指定的任何目录的任何子目录中。</td>
<td>未配置</td>
<td><code>path.repo</code></td>
</tr>
</tbody>
</table>
<h3 id="配置elasticsearch-1" tabindex="-1"><a class="header-anchor" href="#配置elasticsearch-1" aria-hidden="true">#</a> 配置Elasticsearch</h3>
<p>Elasticsearch具有良好的默认值，只需要很少的配置。可以使用<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/cluster-update-settings.html" target="_blank" rel="noopener noreferrer"><em>Cluster Update Settings</em><ExternalLinkIcon/></a> API 在正在运行的群集上更改大多数设置 。</p>
<p>配置文件应包含特定于节点的设置（例如<code>node.name</code>和路径），或节点为了能够加入群集而需要的设置，例如<code>cluster.name</code>和<code>network.host</code>。</p>
<ul>
<li>配置文件位置</li>
</ul>
<p>Elasticsearch有三个配置文件：</p>
<p>​	*  <code>elasticsearch.yml</code> 用于配置Elasticsearch</p>
<p>​	* <code>jvm.options</code> 用于配置Elasticsearch JVM设置</p>
<p>​	* <code>log4j2.properties</code> 用于配置Elasticsearch日志记录</p>
<p>这些文件位于config目录中，其默认位置取决于安装是来自存档分发（<code>tar.gz</code>或<code>zip</code>）还是包分发（Debian或RPM软件包）。</p>
<p>对于包分发，config目录位置默认为 <code>/etc/elasticsearch</code>。config目录的位置也可以通过<code>ES_PATH_CONF</code>环境变量进行更改，但请注意，在shell中设置它是不够的。相反，此变量来自 <code>/etc/default/elasticsearch</code>（对于Debian软件包）和<code>/etc/sysconfig/elasticsearch</code>（对于RPM软件包）。您需要相应地编辑<code>ES_PATH_CONF=/etc/elasticsearch</code>其中一个文件中的 条目以更改配置目录位置。</p>
<ul>
<li>配置文件格式</li>
</ul>
<p>配置格式为<a href="http://www.yaml.org/" target="_blank" rel="noopener noreferrer">YAML<ExternalLinkIcon/></a>。以下是更改数据路径和日志目录的示例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>path:
    data: /var/lib/elasticsearch
    logs: /var/log/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>设置也可以按如下方式展平：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>path.data: /var/lib/elasticsearch
path.logs: /var/log/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>环境变量替换</li>
</ul>
<p>使用<code>${...}</code>配置文件中的符号引用的环境变量将替换为环境变量的值，例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>node.name:    ${HOSTNAME}
network.host: ${ES_NETWORK_HOST}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="path-data和path-logs" tabindex="-1"><a class="header-anchor" href="#path-data和path-logs" aria-hidden="true">#</a> <code>path.data</code>和<code>path.logs</code></h4>
<p>如果您使用<code>.zip</code>或<code>.tar.gz</code>存档，则<code>data</code>和<code>logs</code> 目录是子文件夹<code>$ES_HOME</code>。如果这些重要文件夹保留在其默认位置，则在将Elasticsearch升级到新版本时，存在删除它们的高风险。</p>
<p>在生产使用中，您几乎肯定会想要更改数据和日志文件夹的位置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>path:
  logs: /var/log/elasticsearch
  data: /var/data/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>该RPM和Debian发行版已经使用自定义路径，<code>data</code>和<code>logs</code>。</p>
<p>该<code>path.data</code>设置可以被设置为多条路径，在这种情况下，所有的路径将被用于存储数据（虽然属于单个碎片文件将全部存储相同的数据路径上）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>path:
  data:
    - /mnt/elasticsearch_1
    - /mnt/elasticsearch_2
    - /mnt/elasticsearch_3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="cluster-name" tabindex="-1"><a class="header-anchor" href="#cluster-name" aria-hidden="true">#</a> <code>cluster.name</code></h4>
<p>节点只能<code>cluster.name</code>在与群集中的所有其他节点共享群集时才能加入群集。默认名称是<code>elasticsearch</code>，但您应将其更改为适当的名称，该名称描述了群集的用途。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cluster.name: logging-prod
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>确保不要在不同的环境中重用相同的群集名称，否则最终会导致节点加入错误的群集。</p>
<h4 id="node-name" tabindex="-1"><a class="header-anchor" href="#node-name" aria-hidden="true">#</a> <code>node.name</code></h4>
<p>Elasticsearch使用Elasticsearch <code>node.name</code>的特定实例作为人类可读标识符，因此它包含在许多API的响应中。它默认为Elasticsearch启动时机器具有的主机名，但可以<code>elasticsearch.yml</code>按如下方式显式配置 ：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>node.name: es01.csp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="network-host" tabindex="-1"><a class="header-anchor" href="#network-host" aria-hidden="true">#</a> <code>network.host</code></h4>
<p>默认情况下，Elasticsearch仅绑定到环回地址 - 例如<code>127.0.0.1</code> 和<code>[::1]</code>。这足以在服务器上运行单个开发节点。</p>
<blockquote>
<p>实际上，可以从<code>$ES_HOME</code> 单个节点上的相同位置启动多个节点。这对于测试Elasticsearch形成集群的能力非常有用，但它不是推荐用于生产的配置。</p>
</blockquote>
<p>为了在其他服务器上形成包含节点的集群，您的节点将需要绑定到非环回地址。虽然有许多 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-network.html" target="_blank" rel="noopener noreferrer">网络设置<ExternalLinkIcon/></a>，但通常您需要配置的是 <code>network.host</code>：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>network.host: 192.168.1.10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该<code>network.host</code>设置也了解一些特殊的值，比如 <code>_local_</code>，<code>_site_</code>，<code>_global_</code>。</p>
<h4 id="发现和集群形成设置" tabindex="-1"><a class="header-anchor" href="#发现和集群形成设置" aria-hidden="true">#</a> 发现和集群形成设置</h4>
<p>在开始生产之前，应该配置两个重要的发现和集群形成设置，以便群集中的节点可以相互发现并选择主节点。</p>
<h5 id="discovery-seed-hosts" tabindex="-1"><a class="header-anchor" href="#discovery-seed-hosts" aria-hidden="true">#</a> <code>discovery.seed_hosts</code></h5>
<p>开箱即用，没有任何网络配置，Elasticsearch将绑定到可用的环回地址，并将扫描本地端口9300到9305以尝试连接到在同一服务器上运行的其他节点。这提供了自动集群体验，无需进行任何配置。</p>
<p>如果要在其他主机上形成包含节点的群集，则必须使用该 <code>discovery.seed_hosts</code>设置提供群集中其他节点的列表，这些节点符合主要条件且可能是实时且可联系的，以便为<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-hosts-providers.html" target="_blank" rel="noopener noreferrer">发现过程设定<ExternalLinkIcon/></a>种子。此设置通常应包含群集中所有符合主节点的节点的地址。此设置包含主机数组或逗号分隔的字符串。每个值应采用<code>host:port</code>或的形式<code>host</code>（如果未设置，则<code>port</code> 默认为设置<code>transport.profiles.default.port</code>回落<code>transport.port</code>）。请注意，必须将IPv6主机置于括号内。此设置的默认值为<code>127.0.0.1, [::1]</code>。</p>
<h5 id="cluster-initial-master-nodes" tabindex="-1"><a class="header-anchor" href="#cluster-initial-master-nodes" aria-hidden="true">#</a> <code>cluster.initial_master_nodes</code></h5>
<p>当您第一次启动全新的Elasticsearch集群时，会出现一个<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-bootstrap-cluster.html" target="_blank" rel="noopener noreferrer">集群引导<ExternalLinkIcon/></a>步骤，该步骤确定在第一次选举中计票的主要合格节点集。在<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/bootstrap-checks.html#dev-vs-prod-mode" target="_blank" rel="noopener noreferrer">开发模式下<ExternalLinkIcon/></a>，如果未配置发现设置，则此步骤由节点本身自动执行。由于此自动引导<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-quorums.html" target="_blank" rel="noopener noreferrer">本质上<ExternalLinkIcon/></a>是<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-quorums.html" target="_blank" rel="noopener noreferrer">不安全的<ExternalLinkIcon/></a>，因此当您在<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/bootstrap-checks.html#dev-vs-prod-mode" target="_blank" rel="noopener noreferrer">生产模式下<ExternalLinkIcon/></a>启动全新集群时，必须明确列出符合主要条件的节点，这些节点的投票应在第一次选举中计算。使用该<code>cluster.initial_master_nodes</code>设置设置此列表 。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>discovery.seed_hosts:
   - 192.168.1.10:9300
   - 192.168.1.11 ###1
   - seeds.mydomain.com  ###2
cluster.initial_master_nodes: ###3
   - master-node-a
   - master-node-b
   - master-node-c
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>###1 如果未指定，端口将默认为<code>transport.profiles.default.port</code>和回退<code>transport.port</code>。</p>
<p>###2 如果主机名解析为多个IP地址，则该节点将尝试发现所有已解析地址的其他节点。</p>
<p>###3 初始主节点应由其标识 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/node.name.html" target="_blank" rel="noopener noreferrer"><code>node.name</code><ExternalLinkIcon/></a>，默认为其主机名。确保值<code>cluster.initial_master_nodes</code>与<code>node.name</code> 确切匹配。如果使用完全限定的域名（例如 <code>master-node-a.example.com</code>节点名称），则必须在此列表中使用完全限定名称; 相反，如果<code>node.name</code>是一个没有任何尾随限定符的裸主机名，那么你还必须省略尾随限定符<code>cluster.initial_master_nodes</code>。</p>
<p>有关更多信息，请参阅<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-bootstrap-cluster.html" target="_blank" rel="noopener noreferrer">引导群集<ExternalLinkIcon/></a>以及 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-discovery-settings.html" target="_blank" rel="noopener noreferrer">发现和群集形成设置<ExternalLinkIcon/></a>。</p>
<blockquote>
<p>如果在未配置这些设置的情况下启动Elasticsearch节点，则它将以开发模式启动并自动引导至新集群。如果您在不同的主机上启动某些Elasticsearch节点，则默认情况下它们不会相互发现，并且会在每个主机上形成不同的群集。即使您随后尝试将所有节点配置到单个群集中，Elasticsearch也不会在它们形成后将单独的群集合并在一起。这是因为没有办法将这些单独的集群合并在一起而没有数据丢失的风险。您可以通过检查<code>GET /</code>每个节点上报告的群集UUID来判断您是否已形成单独的群集。如果您打算组建一个群集，那么您应该重新开始：</p>
<ul>
<li>如果您不想丢失任何数据，请拍摄每个单主机群集的<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-snapshots.html" target="_blank" rel="noopener noreferrer">快照<ExternalLinkIcon/></a>。请注意，每个群集必须使用自己的快照存储库。</li>
<li>关闭所有节点。</li>
<li>通过删除其<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-node.html#data-path" target="_blank" rel="noopener noreferrer">数据文件夹<ExternalLinkIcon/></a>的内容完全擦除每个节点 。</li>
<li><code>cluster.initial_master_nodes</code>如上所述配置。</li>
<li>重新启动所有节点并验证它们是否已形成单个群集。</li>
<li>根据需要<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/modules-snapshots.html" target="_blank" rel="noopener noreferrer">还原<ExternalLinkIcon/></a>所有快照。</li>
</ul>
</blockquote>
<h4 id="设置堆大小" tabindex="-1"><a class="header-anchor" href="#设置堆大小" aria-hidden="true">#</a> 设置堆大小</h4>
<p>默认情况下，Elasticsearch告诉JVM使用最小和最大大小为1 GB的堆。迁移到生产环境时，配置堆大小以确保Elasticsearch有足够的可用堆是很重要的。</p>
<p>Elasticsearch将通过（最小堆大小）和（最大堆大小）设置分配<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html" target="_blank" rel="noopener noreferrer">jvm.options中<ExternalLinkIcon/></a>指定的整个堆 。您应该将这两个设置设置为彼此相等。<code>Xms</code> <code>Xmx</code></p>
<ul>
<li>设置<code>Xmx</code>并且<code>Xms</code>不超过物理RAM的50％。Elasticsearch需要内存用于JVM堆以外的其他目的，为此留出空间很重要。例如，Elasticsearch使用堆外缓冲区进行有效的网络通信，依赖操作系统的文件系统缓存来有效访问文件，而JVM本身也需要一些内存。使用比使用该<code>Xmx</code>设置配置的限制更多的内存来观察Elasticsearch进程是正常的。</li>
<li>设置<code>Xmx</code>并且<code>Xms</code>不超过JVM用于压缩对象指针的阈值（压缩oops）; 确切的阈值变化但接近32 GB。您可以通过在日志中查找如下所示的行来验证您是否低于阈值：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>heap size [1.9gb], compressed ordinary object pointers [true]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>以下是如何通过jvm.options文件设置堆大小的示例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-Xms4g ###1
-Xmx4g ###2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>###1 将最小堆大小设置为4g。</p>
<p>###2 将最大堆大小设置为4g。</p>
<p>也可以通过环境变量设置堆大小。这可以通过注释掉来完成<code>Xms</code>，并<code>Xmx</code>设置在<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html" target="_blank" rel="noopener noreferrer"><code>jvm.options</code><ExternalLinkIcon/></a>文件中，并通过设置这些值<code>ES_JAVA_OPTS</code>：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ES_JAVA_OPTS="-Xms2g -Xmx2g" ./bin/elasticsearch ###1
ES_JAVA_OPTS="-Xms4000m -Xmx4000m" ./bin/elasticsearch ###2 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>###1 将最小和最大堆大小设置为2 GB。</p>
<p>###2 将最小和最大堆大小设置为4000 MB。</p>
<h4 id="jvm堆存储路径" tabindex="-1"><a class="header-anchor" href="#jvm堆存储路径" aria-hidden="true">#</a> JVM堆存储路径</h4>
<p>默认情况下，Elasticsearch将JVM配置为将内存异常转储到默认数据目录（这<code>/var/lib/elasticsearch</code>适用于<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/rpm.html" target="_blank" rel="noopener noreferrer">RPM<ExternalLinkIcon/></a>和<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/deb.html" target="_blank" rel="noopener noreferrer">Debian<ExternalLinkIcon/></a>软件包发行版，以及<code>data</code>用于<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/targz.html" target="_blank" rel="noopener noreferrer">tar<ExternalLinkIcon/></a>和<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/zip-windows.html" target="_blank" rel="noopener noreferrer">zip<ExternalLinkIcon/></a>归档文件分发的Elasticsearch安装根目录下的目录） 。</p>
<p>如果这个路径是不适合接受堆转储，您应该修改的条目<code>-XX:HeapDumpPath=...</code>在 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html" target="_blank" rel="noopener noreferrer"><code>jvm.options</code><ExternalLinkIcon/></a>。</p>
<p>如果指定目录，JVM将根据正在运行的实例的PID为堆转储生成文件名。</p>
<p>如果指定固定文件名而不是目录，则当JVM需要在内存不足异常上执行堆转储时，该文件不能存在，否则堆转储将失败。</p>
<h4 id="gc日志" tabindex="-1"><a class="header-anchor" href="#gc日志" aria-hidden="true">#</a> GC日志</h4>
<p>默认情况下，Elasticsearch启用GC日志。</p>
<p>这些配置在 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html" target="_blank" rel="noopener noreferrer"><code>jvm.options</code><ExternalLinkIcon/></a>默认位置和默认位置与Elasticsearch日志相同。</p>
<p>默认配置每64 MB轮换一次日志，最多可占用2 GB的磁盘空间。</p>
<h4 id="临时目录" tabindex="-1"><a class="header-anchor" href="#临时目录" aria-hidden="true">#</a> 临时目录</h4>
<p>默认情况下，Elasticsearch使用启动脚本在系统临时目录下创建的专用临时目录。</p>
<p>在某些Linux发行版上，系统实用程序将清除文件和目录（<code>/tmp</code>如果它们最近未被访问过）。如果长时间不使用需要临时目录的功能，则可能导致在Elasticsearch运行时删除专用临时目录。如果随后使用需要临时目录的功能，则会导致问题。</p>
<p>如果使用<code>.deb</code>或<code>.rpm</code>包安装Elasticsearch 并在其下运行，<code>systemd</code>那么Elasticsearch使用的专用临时目录将从定期清理中排除。</p>
<p>但是，如果您打算<code>.tar.gz</code>在Linux 上运行分发一段时间，那么您应该考虑为Elasticsearch创建一个专用的临时目录，该目录不在将从中清除旧文件和目录的路径下。此目录应具有权限集，以便只有运行Elasticsearch的用户才能访问它。然后<code>$ES_TMPDIR</code>在启动Elasticsearch之前将环境变量设置 为指向它。</p>
<h4 id="jvm致命错误日志" tabindex="-1"><a class="header-anchor" href="#jvm致命错误日志" aria-hidden="true">#</a> JVM致命错误日志</h4>
<p>默认情况下，Elasticsearch将JVM配置为将致命错误日志写入默认日志记录目录（这<code>/var/log/elasticsearch</code>适用于<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/rpm.html" target="_blank" rel="noopener noreferrer">RPM<ExternalLinkIcon/></a>和<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/deb.html" target="_blank" rel="noopener noreferrer">Debian<ExternalLinkIcon/></a>软件包发行版，以及<code>logs</code> 针对<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/targz.html" target="_blank" rel="noopener noreferrer">tar<ExternalLinkIcon/></a>和<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/zip-windows.html" target="_blank" rel="noopener noreferrer">zip<ExternalLinkIcon/></a>归档文件分发的Elasticsearch安装根目录下的目录 ）。</p>
<p>这些是JVM在遇到致命错误（例如，分段错误）时生成的日志。如果该路径不适合于接收的日志，则应修改条目<code>-XX:ErrorFile=...</code>中 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/jvm-options.html" target="_blank" rel="noopener noreferrer"><code>jvm.options</code><ExternalLinkIcon/></a>到备用路径。</p>
<h3 id="系统配置调优" tabindex="-1"><a class="header-anchor" href="#系统配置调优" aria-hidden="true">#</a> 系统配置调优</h3>
<h4 id="配置系统设置" tabindex="-1"><a class="header-anchor" href="#配置系统设置" aria-hidden="true">#</a> 配置系统设置</h4>
<p>配置系统设置的位置取决于您用于安装Elasticsearch的软件包以及您使用的操作系统。</p>
<p>使用<code>.zip</code>或<code>.tar.gz</code>包时，可以配置系统设置：</p>
<ul>
<li>暂时用<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#ulimit" target="_blank" rel="noopener noreferrer"><code>ulimit</code><ExternalLinkIcon/></a>，或</li>
<li>永久地<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#limits.conf" target="_blank" rel="noopener noreferrer"><code>/etc/security/limits.conf</code><ExternalLinkIcon/></a>。</li>
</ul>
<p>使用RPM或Debian软件包时，大多数系统设置都在<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#sysconfig" target="_blank" rel="noopener noreferrer">系统配置文件<ExternalLinkIcon/></a>中设置 。但是，使用systemd的系统要求在<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#systemd" target="_blank" rel="noopener noreferrer">systemd配置文件<ExternalLinkIcon/></a>中指定系统限制 。</p>
<h5 id="ulimit" tabindex="-1"><a class="header-anchor" href="#ulimit" aria-hidden="true">#</a> <code>ulimit</code></h5>
<p>在Linux系统上，<code>ulimit</code>可以用于临时更改资源限制。通常需要<code>root</code>在切换到将运行Elasticsearch的用户之前设置限制。例如，要将打开文件句柄（<code>ulimit -n</code>）的数量设置为65,536，您可以执行以下操作：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ulimit -n 65535 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>新限制仅在当前会话期间应用。</p>
<p>您可以查询所有当前应用的限制<code>ulimit -a</code>。</p>
<h5 id="etc-security-limits-conf" tabindex="-1"><a class="header-anchor" href="#etc-security-limits-conf" aria-hidden="true">#</a> <code>/etc/security/limits.conf</code></h5>
<p>在Linux系统上，可以通过编辑<code>/etc/security/limits.conf</code>文件为特定用户设置持久限制。要将用户的最大打开文件数设置<code>elasticsearch</code>为65,536，请将以下行添加到<code>limits.conf</code>文件中：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>elasticsearch  -  nofile 65535
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此更改仅在<code>elasticsearch</code>用户下次打开新会话时生效。</p>
<blockquote>
<p>通常在开机以优化<code>/etc/security/limits.conf</code>配置文件</p>
<p>在最后加入下面内容</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>* hard nofile 65535
* soft nofile 65535
* soft nproc 65535
* hard nproc 65535
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果已经设置上述参数，则无需调整</p>
<ul>
<li>hard 硬限制</li>
<li>soft 软限制</li>
<li>nofile 最大打开文件数（文件描述符）</li>
<li>nproc 最大线程数</li>
</ul>
</blockquote>
<h5 id="sysconfig文件" tabindex="-1"><a class="header-anchor" href="#sysconfig文件" aria-hidden="true">#</a> Sysconfig文件</h5>
<p>使用RPM或Debian软件包时，可以在系统配置文件中指定系统设置和环境变量，该文件位于：</p>
<table>
<thead>
<tr>
<th>RPM</th>
<th><code>/etc/sysconfig/elasticsearch</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>Debian的</td>
<td><code>/etc/default/elasticsearch</code></td>
</tr>
</tbody>
</table>
<p>但是，对于使用的<code>systemd</code>系统，需要通过<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#systemd" target="_blank" rel="noopener noreferrer">systemd<ExternalLinkIcon/></a>指定系统限制。</p>
<h5 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置" aria-hidden="true">#</a> 系统配置</h5>
<p>在使用<a href="https://en.wikipedia.org/wiki/Systemd" target="_blank" rel="noopener noreferrer">systemd的<ExternalLinkIcon/></a>系统上使用RPM或Debian软件包时 ，必须通过systemd指定系统限制。</p>
<p>systemd服务文件（<code>/usr/lib/systemd/system/elasticsearch.service</code>）包含默认应用的限制。</p>
<p>要覆盖它们，请添加一个名为的文件<code>/etc/systemd/system/elasticsearch.service.d/override.conf</code>（或者，您可以运行<code>systemctl edit elasticsearch</code>它在默认编辑器中自动打开文件）。设置此文件中的任何更改，例如</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Service]
LimitMEMLOCK=infinity
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>完成后，运行以下命令重新加载：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="禁用交换" tabindex="-1"><a class="header-anchor" href="#禁用交换" aria-hidden="true">#</a> 禁用交换</h4>
<p>大多数操作系统尝试使用尽可能多的内存来存储文件系统缓存，并急切地交换掉未使用的应用程序内存。这可能导致部分JVM堆甚至其可执行页面被换出到磁盘。</p>
<p>交换对性能，节点稳定性非常不利，应该不惜一切代价避免。它可能导致垃圾收集持续<strong>数分钟</strong>而不是毫秒，并且可能导致节点响应缓慢甚至断开与群集的连接。在弹性分布式系统中，让操作系统终止节点更有效。</p>
<p>有三种禁用交换的方法。首选选项是完全禁用交换。如果这不是一个选项，是否更喜欢最小化swappiness与内存锁定取决于您的环境。</p>
<h5 id="禁用所有交换文件" tabindex="-1"><a class="header-anchor" href="#禁用所有交换文件" aria-hidden="true">#</a> 禁用所有交换文件</h5>
<p>通常Elasticsearch是在盒子上运行的唯一服务，其内存使用量由JVM选项控制。应该没有必要启用交换。</p>
<p>在Linux系统上，您可以通过运行以下命令暂时禁用交换：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>swapoff -a
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这不需要重新启动Elasticsearch。</p>
<p>要永久禁用它，您需要编辑<code>/etc/fstab</code>文件并注释掉包含该单词的任何行<code>swap</code>。</p>
<h5 id="配置swappiness" tabindex="-1"><a class="header-anchor" href="#配置swappiness" aria-hidden="true">#</a> 配置<code>swappiness</code></h5>
<p>Linux系统上可用的另一个选项是确保将sysctl值 <code>vm.swappiness</code>设置为<code>1</code>。这降低了内核交换的倾向，在正常情况下不应导致交换，同时仍允许整个系统在紧急情况下交换。</p>
<h5 id="启用bootstrap-memory-lock" tabindex="-1"><a class="header-anchor" href="#启用bootstrap-memory-lock" aria-hidden="true">#</a> 启用<code>bootstrap.memory_lock</code></h5>
<p>另一种选择是在Linux / Unix系统上使用<a href="http://opengroup.org/onlinepubs/007908799/xsh/mlockall.html" target="_blank" rel="noopener noreferrer">mlockall<ExternalLinkIcon/></a>，或 在Windows 上 使用 <a href="https://msdn.microsoft.com/en-us/library/windows/desktop/aa366895%28v=vs.85%29.aspx" target="_blank" rel="noopener noreferrer">VirtualLock<ExternalLinkIcon/></a>，以尝试将进程地址空间锁定到RAM中，从而防止任何Elasticsearch内存被换出。这可以通过将此行添加到<code>config/elasticsearch.yml</code>文件来完成：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bootstrap.memory_lock: true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p><code>mlockall</code> 如果尝试分配的内存超过可用内存，可能会导致JVM或shell会话退出！</p>
</blockquote>
<p>启动Elasticsearch后，您可以通过检查<code>mlockall</code>此请求的输出中的值来查看是否已成功应用此设置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET _nodes?filter_path=**.mlockall
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果你看到<code>mlockall</code>的<code>false</code>，那么就意味着该<code>mlockall</code> 请求失败。您还会在日志中看到包含更多信息的行<code>Unable to lock JVM Memory</code>。</p>
<p>在Linux / Unix系统上，最可能的原因是运行Elasticsearch的用户没有锁定内存的权限。这可以授予如下：</p>
<ul>
<li>
<p><strong><code>.zip</code> 和 <code>.tar.gz</code></strong></p>
<p><a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#ulimit" target="_blank" rel="noopener noreferrer"><code>ulimit -l unlimited</code><ExternalLinkIcon/></a>在启动Elasticsearch之前设置为root，或设置<code>memlock</code>为<code>unlimited</code>in <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#limits.conf" target="_blank" rel="noopener noreferrer"><code>/etc/security/limits.conf</code><ExternalLinkIcon/></a>。</p>
</li>
<li>
<p><strong>RPM和Debian</strong></p>
<p>设置<code>MAX_LOCKED_MEMORY</code>到<code>unlimited</code>了在 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#sysconfig" target="_blank" rel="noopener noreferrer">系统配置文件<ExternalLinkIcon/></a>（或见下文使用系统<code>systemd</code>）。</p>
</li>
<li>
<p><strong>系统使用 <code>systemd</code></strong></p>
<p>设置<code>LimitMEMLOCK</code>于<code>infinity</code>在<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#systemd" target="_blank" rel="noopener noreferrer">systemd配置<ExternalLinkIcon/></a>。</p>
</li>
</ul>
<p>可能<code>mlockall</code>失败的另一个可能原因是 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/executable-jna-tmpdir.html" target="_blank" rel="noopener noreferrer">JNA临时目录（通常是子目录 <code>/tmp</code>）随<code>noexec</code>选项一起安装<ExternalLinkIcon/></a>。这可以通过使用<code>ES_JAVA_OPTS</code>环境变量为JNA指定新的临时目录来解决：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> ES_JAVA_OPTS <span class="token operator">=</span>“$ ES_JAVA_OPTS -Djna.tmpdir <span class="token operator">=</span> <span class="token operator">&lt;</span>path<span class="token operator">></span>”
./bin/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者在jvm.options配置文件中设置此JVM标志。</p>
<h4 id="文件描述符" tabindex="-1"><a class="header-anchor" href="#文件描述符" aria-hidden="true">#</a> 文件描述符</h4>
<p>Elasticsearch使用大量文件描述符或文件句柄。用完文件描述符可能是灾难性的，最有可能导致数据丢失。确保将运行Elasticsearch的用户的打开文件描述符数量限制增加到65,536或更高。</p>
<p>对于<code>.zip</code>and <code>.tar.gz</code>packages，<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#ulimit" target="_blank" rel="noopener noreferrer"><code>ulimit -n 65535</code><ExternalLinkIcon/></a>在启动Elasticsearch之前设置为root，或设置<code>nofile</code>为<code>65535</code>in <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#limits.conf" target="_blank" rel="noopener noreferrer"><code>/etc/security/limits.conf</code><ExternalLinkIcon/></a>。</p>
<p>RPM和Debian软件包已将文件描述符的最大数量默认为65535，无需进一步配置。</p>
<p>您可以<code>max_file_descriptors</code>使用<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/cluster-nodes-stats.html" target="_blank" rel="noopener noreferrer"><em>Nodes Stats</em><ExternalLinkIcon/></a> API 检查每个节点的配置，包括：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET _nodes/stats/process?filter_path=**.max_file_descriptors
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="虚拟内存" tabindex="-1"><a class="header-anchor" href="#虚拟内存" aria-hidden="true">#</a> 虚拟内存</h4>
<p>Elasticsearch <a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/index-modules-store.html#mmapfs" target="_blank" rel="noopener noreferrer"><code>mmapfs</code><ExternalLinkIcon/></a>默认使用目录来存储其索引。mmap计数的默认操作系统限制可能太低，这可能导致内存不足异常。</p>
<p>在Linux上，您可以通过运行以下命令来增加限制 <code>root</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sysctl -w vm.max_map_count <span class="token operator">=</span> <span class="token number">262144</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>要永久设置此值，请更新<code>vm.max_map_count</code>设置 <code>/etc/sysctl.conf</code>。要在重新启动后进行验证，请运行<code>sysctl vm.max_map_count</code>。</p>
<p>RPM和Debian软件包将自动配置此设置。无需进一步配置。</p>
<h4 id="线程数" tabindex="-1"><a class="header-anchor" href="#线程数" aria-hidden="true">#</a> 线程数</h4>
<p>Elasticsearch为不同类型的操作使用许多线程池。重要的是它能够在需要时创建新线程。确保Elasticsearch用户可以创建的线程数至少为4096。</p>
<p>这可以通过<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#ulimit" target="_blank" rel="noopener noreferrer"><code>ulimit -u 4096</code><ExternalLinkIcon/></a>在启动Elasticsearch之前设置为root或通过设置<code>nproc</code>为<code>4096</code>in来完成<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/setting-system-settings.html#limits.conf" target="_blank" rel="noopener noreferrer"><code>/etc/security/limits.conf</code><ExternalLinkIcon/></a>。</p>
<p>作为服务运行时的程序包分发<code>systemd</code>将自动配置Elasticsearch进程的线程数。无需其他配置。</p>
<h3 id="检测集群状态" tabindex="-1"><a class="header-anchor" href="#检测集群状态" aria-hidden="true">#</a> 检测集群状态</h3>
<p>让我们从基本运行状况检查开始，我们可以使用它来查看集群的运行情况。我们将使用curl来执行此操作，但您可以使用任何允许您进行HTTP / REST调用的工具。假设我们仍然在我们启动Elasticsearch的同一节点上打开另一个命令shell窗口。</p>
<h4 id="健康状态" tabindex="-1"><a class="header-anchor" href="#健康状态" aria-hidden="true">#</a> 健康状态</h4>
<p>要检查群集运行状况，我们将使用<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/cat.html" target="_blank" rel="noopener noreferrer"><code>_cat</code>API<ExternalLinkIcon/></a>。您可以 通过单击“查看控制台”或单击下面的“COPY AS CURL”链接并将其粘贴到终端中，在<a href="https://www.elastic.co/guide/en/kibana/7.2/console-kibana.html" target="_blank" rel="noopener noreferrer">Kibana控制台中<ExternalLinkIcon/></a>运行以下命令<code>curl</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /_cat/health?v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>并回应：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>epoch      timestamp cluster      status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent
1564125184 07:13:04  logging-prod green           3         3      0   0    0    0        0             0                  -                100.0%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>我们可以看到名为“elasticsearch”的群集处于绿色状态。</p>
<p>每当我们要求群集健康时，我们要么获得绿色，黄色或红色。</p>
<ul>
<li>绿色 - 一切都很好（集群功能齐全）</li>
<li>黄色 - 所有数据都可用，但尚未分配一些副本（群集功能齐全）</li>
<li>红色 - 某些数据由于某种原因不可用（群集部分功能）</li>
</ul>
<p>**注意：**当群集为红色时，它将继续提供来自可用分片的搜索请求，但您可能需要尽快修复它，因为存在未分配的分片。</p>
<p>同样从上面的响应中，我们可以看到总共3个节点，并且我们有0个分片，因为我们还没有数据。请注意，由于我们使用默认群集名称（elasticsearch），并且由于Elasticsearch默认使用单播网络发现来查找同一台计算机上的其他节点，因此您可能会意外启动计算机上的多个节点并拥有它们所有人都加入一个集群。在这种情况下，您可能会在上面的响应中看到多个节点。</p>
<h4 id="节点列表" tabindex="-1"><a class="header-anchor" href="#节点列表" aria-hidden="true">#</a> 节点列表</h4>
<p>我们还可以获得群集中的节点列表，如下所示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /_cat/nodes?v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>并回应：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ip             heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name
192.168.165.59           10          79   0    0.00    0.03     0.06 mdi       -      es01.csp
192.168.165.60           10          76   0    0.00    0.01     0.05 mdi       -      es02.csp
192.168.165.61           10          76   0    0.00    0.02     0.05 mdi       *      es03.csp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在这里，我们可以看到一个名为“es03.csp”的节点，它是我们集群中当前的主节点。</p>
<h4 id="列出所有指数" tabindex="-1"><a class="header-anchor" href="#列出所有指数" aria-hidden="true">#</a> 列出所有指数</h4>
<p>现在让我们来看看我们的指数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /_cat/indices?v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>并回应：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>health status index uuid pri rep docs.count docs.deleted store.size pri.store.size
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这仅仅意味着我们在集群中还没有索引。</p>
<h3 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装" aria-hidden="true">#</a> 插件安装</h3>
<h4 id="中文分词" tabindex="-1"><a class="header-anchor" href="#中文分词" aria-hidden="true">#</a> 中文分词</h4>
<h5 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h5>
<p>elasticsearch在分词方面，需要添加中文分词的插件。在其安装代码的plugins目录，即<code>/usr/share/elasticsearch/plugins</code>，需要增加中文分词插件。</p>
<p>download pre-build package from here: <a href="https://github.com/medcl/elasticsearch-analysis-ik/releases" target="_blank" rel="noopener noreferrer">https://github.com/medcl/elasticsearch-analysis-ik/releases<ExternalLinkIcon/></a></p>
<p>create plugin folder <code>cd your-es-root/plugins/ &amp;&amp; mkdir ik</code></p>
<p>unzip plugin to folder <code>your-es-root/plugins/ik</code></p>
<h5 id="quick-example" tabindex="-1"><a class="header-anchor" href="#quick-example" aria-hidden="true">#</a> Quick Example</h5>
<p>1.create a index</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>curl -XPUT http://localhost:9200/index
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.create a mapping</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>curl -XPOST http://localhost:9200/index/_mapping -H 'Content-Type:application/json' -d'
{
        "properties": {
            "content": {
                "type": "text",
                "analyzer": "ik_max_word",
                "search_analyzer": "ik_smart"
            }
        }

}'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>3.index some docs</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>curl -XPOST http://localhost:9200/index/_create/1 -H 'Content-Type:application/json' -d'
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>4.query with highlighting</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>curl -XPOST http://localhost:9200/index/_search  -H 'Content-Type:application/json' -d'
{
    "query" : { "match" : { "content" : "中国" }},
    "highlight" : {
        "pre_tags" : ["&lt;tag1>", "&lt;tag2>"],
        "post_tags" : ["&lt;/tag1>", "&lt;/tag2>"],
        "fields" : {
            "content" : {}
        }
    }
}
'
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Result</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
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
                        "&lt;tag1>中国&lt;/tag1>驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首 "
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
                        "均每天扣1艘&lt;tag1>中国&lt;/tag1>渔船 "
                    ]
                }
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h4 id="elasticsearch-head" tabindex="-1"><a class="header-anchor" href="#elasticsearch-head" aria-hidden="true">#</a> elasticsearch-head</h4>
<h5 id="running-with-docker" tabindex="-1"><a class="header-anchor" href="#running-with-docker" aria-hidden="true">#</a> Running with docker</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 9100:9100 mobz/elasticsearch-head:5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>由于elasticsearch-head:5镜像对elasticsearch的7版本好像适配性不够，所以部分显示可能会有空白</p>
</blockquote>
<h5 id="connecting-to-elasticsearch" tabindex="-1"><a class="header-anchor" href="#connecting-to-elasticsearch" aria-hidden="true">#</a> Connecting to elasticsearch</h5>
<p>By default elasticsearch exposes a http rest API on port 9200 which elasticsearch-head connects to.</p>
<h6 id="enable-cors-in-elasticsearch" tabindex="-1"><a class="header-anchor" href="#enable-cors-in-elasticsearch" aria-hidden="true">#</a> Enable CORS in elasticsearch</h6>
<p>When not running as a plugin of elasticsearch (which is not even possible from version 5) you must enable <a href="http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/modules-http.html" target="_blank" rel="noopener noreferrer">CORS<ExternalLinkIcon/></a> in elasticsearch otherwise your browser will rejects requests which appear insecure.</p>
<p>In elasticsearch configuration;</p>
<ul>
<li>add <code>http.cors.enabled: true</code></li>
<li>you must also set <code>http.cors.allow-origin</code> because no origin allowed by default. <code>http.cors.allow-origin: &quot;*&quot;</code> is valid value, however it’s considered as a security risk as your cluster is open to cross origin from <strong>anywhere</strong>.</li>
</ul>
<p>改完配置后，重启Elasticsearch服务</p>
<p><img src="images/1.png" alt="" loading="lazy"></p>
<h4 id="cerebro" tabindex="-1"><a class="header-anchor" href="#cerebro" aria-hidden="true">#</a> cerebro</h4>
<h6 id="runnging-with-docker" tabindex="-1"><a class="header-anchor" href="#runnging-with-docker" aria-hidden="true">#</a> Runnging with docker</h6>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 9000:9000  lmenezes/cerebro
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="images/2.png" alt="" loading="lazy"></p>
<p>参考链接：</p>
<blockquote>
<p>官方文档：<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.2/getting-started.html" target="_blank" rel="noopener noreferrer">https://www.elastic.co/guide/en/elasticsearch/reference/7.2/getting-started.html<ExternalLinkIcon/></a></p>
<p>中文分词器elasticsearch-analysis-ik: <a href="https://github.com/medcl/elasticsearch-analysis-ik" target="_blank" rel="noopener noreferrer">https://github.com/medcl/elasticsearch-analysis-ik<ExternalLinkIcon/></a></p>
<p>elasticsearch-head：<a href="https://github.com/mobz/elasticsearch-head" target="_blank" rel="noopener noreferrer">https://github.com/mobz/elasticsearch-head<ExternalLinkIcon/></a></p>
<p>cerebro: <a href="https://github.com/lmenezes/cerebro" target="_blank" rel="noopener noreferrer">https://github.com/lmenezes/cerebro<ExternalLinkIcon/></a></p>
</blockquote>
</template>
