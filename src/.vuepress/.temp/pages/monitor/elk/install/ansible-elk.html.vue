<template><h1 id="elk借助安装ansible" tabindex="-1"><a class="header-anchor" href="#elk借助安装ansible" aria-hidden="true">#</a> elk借助安装ansible</h1>
<h2 id="ansible配置" tabindex="-1"><a class="header-anchor" href="#ansible配置" aria-hidden="true">#</a> ansible配置</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 修改主机名</span>
hostnamectl set-hostname elk_ans
<span class="token comment"># 生产密钥对，生成后将公钥导入到私有云主机中，创建新主机时使用</span>
ssh-keygen -t rsa -f ~/.ssh/id_rsa -N <span class="token string">''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># yum 安装</span>
yum -y <span class="token function">install</span> ansible
<span class="token comment"># 修改主机列表为yaml格式</span>
<span class="token function">mv</span> /etc/ansible/hosts<span class="token punctuation">{</span>,.yml<span class="token punctuation">}</span>
<span class="token comment"># 优化配置</span>
<span class="token function">cp</span> /etc/ansible/ansible.cfg<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/ansible.cfg <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[defaults]
inventory      = /etc/ansible/hosts.yml
roles_path    = /etc/ansible/roles
host_key_checking = False
deprecation_warnings = False
retry_files_enabled = False
[inventory]
[privilege_escalation]
[paramiko_connection]
[ssh_connection]
ssh_args = -C -o ControlMaster=auto -o ControlPersist=5d
[persistent_connection]
[accelerate]
[selinux]
[colors]
[diff]
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 编写ansible主机清单</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">es_master1</span><span class="token operator">=</span><span class="token number">192.168</span>.135.125 <span class="token assign-left variable">es_master2</span><span class="token operator">=</span><span class="token number">192.168</span>.135.214 <span class="token assign-left variable">es_master3</span><span class="token operator">=</span><span class="token number">192.168</span>.135.62 <span class="token assign-left variable">es_data1</span><span class="token operator">=</span><span class="token number">192.168</span>.135.160 <span class="token assign-left variable">es_data2</span><span class="token operator">=</span><span class="token number">192.168</span>.135.73 <span class="token assign-left variable">es_data3</span><span class="token operator">=</span><span class="token number">192.168</span>.135.105 <span class="token assign-left variable">es_ingest1</span><span class="token operator">=</span><span class="token number">192.168</span>.135.8 <span class="token assign-left variable">es_ingest2</span><span class="token operator">=</span><span class="token number">192.168</span>.135.187 <span class="token assign-left variable">es_ingest3</span><span class="token operator">=</span><span class="token number">192.168</span>.135.189 <span class="token assign-left variable">kibana1</span><span class="token operator">=</span><span class="token number">192.168</span>.135.178 <span class="token assign-left variable">kibana2</span><span class="token operator">=</span><span class="token number">192.168</span>.135.196 <span class="token assign-left variable">kibana3</span><span class="token operator">=</span><span class="token number">192.168</span>.135.198 <span class="token assign-left variable">logstash1</span><span class="token operator">=</span><span class="token number">192.168</span>.135.89 <span class="token assign-left variable">logstash2</span><span class="token operator">=</span><span class="token number">192.168</span>.135.30 <span class="token assign-left variable">logstash3</span><span class="token operator">=</span><span class="token number">192.168</span>.135.96 <span class="token assign-left variable">kafka1</span><span class="token operator">=</span><span class="token number">192.168</span>.135.32 <span class="token assign-left variable">kafka2</span><span class="token operator">=</span><span class="token number">192.168</span>.135.22 <span class="token assign-left variable">kafka3</span><span class="token operator">=</span><span class="token number">192.168</span>.135.51
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/hosts.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
all:
  children:
    elasticsearch:
      children:
        es_master:
        es_data:
        es_ingest:
    es_master:
      hosts:
        es_master1:
          ansible_host: <span class="token variable">${es_master1}</span>
        es_master2:
          ansible_host: <span class="token variable">${es_master2}</span>
        es_master3:
          ansible_host: <span class="token variable">${es_master3}</span>
    es_data:
      hosts:
        es_data1:
          ansible_host: <span class="token variable">${es_data1}</span>
        es_data2:
          ansible_host: <span class="token variable">${es_data2}</span>
        es_data3:
          ansible_host: <span class="token variable">${es_data3}</span>
    es_ingest:
      hosts:
        es_ingest1:
          ansible_host: <span class="token variable">${es_ingest1}</span>
        es_ingest2:
          ansible_host: <span class="token variable">${es_ingest2}</span>
        es_ingest3:
          ansible_host: <span class="token variable">${es_ingest3}</span>
    kibana:
      hosts:
        kibana1:
          ansible_host: <span class="token variable">${kibana1}</span>
        kibana2:
          ansible_host: <span class="token variable">${kibana2}</span>
        kibana3:
          ansible_host: <span class="token variable">${kibana3}</span>
    logstash:
      hosts:
        logstash1:
          ansible_host: <span class="token variable">${logstash1}</span>
        logstash2:
          ansible_host: <span class="token variable">${logstash2}</span>
        logstash3:
          ansible_host: <span class="token variable">${logstash3}</span>
    kafka:
      hosts:
        kafka1:
          ansible_host: <span class="token variable">${kafka1}</span>
          zookeeper_id: 1
        kafka2:
          ansible_host: <span class="token variable">${kafka2}</span>
          zookeeper_id: 2
        kafka3:
          ansible_host: <span class="token variable">${kafka3}</span>
          zookeeper_id: 3
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 镜像yum源有问题得，替换下yum源</span>
ansible-galaxy <span class="token function">install</span> clay_wangzhi.sysinit
<span class="token function">mkdir</span> -p /etc/ansible/playbooks/vars
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/playbooks/sysinit.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
---
- hosts: all
  roles:
    - clay_wangzhi.sysinit
EOF</span>
ansible all -m shell -a <span class="token string">"rm -rf /etc/yum.repos.d/bak/"</span>
ansible-playbook /etc/ansible/playbooks/sysinit.yml --tags upgrade_repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="安装-elasticsearch" tabindex="-1"><a class="header-anchor" href="#安装-elasticsearch" aria-hidden="true">#</a> 安装 Elasticsearch</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载roles</span>
ansible-galaxy <span class="token function">install</span> elastic.elasticsearch,v7.11.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 编写playbook</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/playbooks/elasticsearch.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
---
# 注意修改yum源为清华源
- hosts: es_master
  roles:
    - role: elastic.elasticsearch
  vars:
    node_master: true
    node_data: false
  vars_files:
    - vars/es_vars.yml

- hosts: es_data
  roles:
    - role: elastic.elasticsearch
  vars:
    node_master: false
    node_data: true
  vars_files:
    - vars/es_vars.yml

- hosts: es_ingest
  roles:
    - role: elastic.elasticsearch
  vars:
    node_master: false
    node_data: false
  vars_files:
    - vars/es_vars.yml
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 新增var_files</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/playbooks/vars/es_vars.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
es_heap_size: "4g"
es_api_host: "{{ansible_ssh_host}}"
es_data_dirs:
  - "/opt/elasticsearch/data"
es_log_dir: "/opt/elasticsearch/logs"
es_config:
  cluster.name: "suncar-es"
  node.name: "{{inventory_hostname}}"
  network.host: "{{ansible_ssh_host}}"
  cluster.initial_master_nodes: '["{{hostvars[groups["es_master"][0]].ansible_host}}"{% for host in groups["es_master"][1:] %}, "{{hostvars[host].ansible_host}}"{% endfor %}]'
  discovery.seed_hosts: '["{{hostvars[groups["es_master"][0]].ansible_host}}:9300"{% for host in groups["es_master"][1:] %}, "{{hostvars[host].ansible_host}}:9300"{% endfor %}]'
  http.port: 9200
  node.master: "{{node_master}}"
  node.data: "{{node_data}}"
  bootstrap.memory_lock: true
  gateway.recover_after_nodes: 2
  xpack.monitoring.collection.enabled: true
  http.cors.enabled: true
  http.cors.allow-origin: "*"
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 修改roles文件，修改yum源为清华源</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/roles/elastic.elasticsearch/templates/elasticsearch.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[elasticsearch-7.x]
name=Elasticsearch repository for 7.x packages
baseurl=https://mirrors.tuna.tsinghua.edu.cn/elasticstack/yum/elastic-7.x/
gpgcheck=0
enabled=1
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 修改es yml配置文件,将安全功能开启，并自己设置密码</span>
<span class="token function">vim</span> /etc/ansible/roles/elastic.elasticsearch/templates/elasticsearch.yml.j2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{% if es_enable_xpack and es_api_basic_auth_username is defined and es_api_basic_auth_password is defined %}   #将这一行改为下面
{% if not oss_version %}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>执行playbook前，首先要进行数据磁盘的挂载，挂载到数据目录，es数据节点磁盘占用很大</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
ansible-playbook /etc/ansible/playbooks/elasticsearch.yml 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ansible安装完成后，初始化es通信的密码，在任意es_master1节点执行</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/share/elasticsearch/jdk/
<span class="token builtin class-name">cd</span> /usr/share/elasticsearch/
bin/elasticsearch-setup-passwords interactive
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>配置Node间SSL</strong></p>
<p>注意：这里是指配置ES集群节点间transport的SSL认证，对于ES节点的HTTP API接口并没有配置，所以通过API访问ES时不需要提供证书。</p>
<p>参考官网:</p>
<p>https://www.elastic.co/guide/en/elasticsearch/reference/current/ssl-tls.html</p>
<p>https://www.elastic.co/guide/en/elasticsearch/reference/7.4/configuring-tls.html</p>
<p>创建SSL/TLS证书：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/share/elasticsearch/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/share/elasticsearch/jdk/
./elasticsearch-certutil ca -v   //一路回车
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
./bin/elasticsearch-certutil cert --ca elastic-stack-ca.p12  //一路回车
<span class="token function">mv</span> elastic-* /etc/elasticsearch/
<span class="token builtin class-name">cd</span> /etc/elasticsearch/
<span class="token function">chown</span> elasticsearch.elasticsearch *.p12
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>操作完成后，把证书传到剩余节点，修改剩余节点的配置文件，并重启</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 将证书传到 ansible /tmp 目录下</span>
ansible elasticsearch -m copy -a <span class="token string">"src=/tmp/elastic-certificates.p12 dest=/etc/elasticsearch/ owner=elasticsearch group=elasticsearch"</span> 
ansible elasticsearch -m copy -a <span class="token string">"src=/tmp/elastic-stack-ca.p12 dest=/etc/elasticsearch/ owner=elasticsearch group=elasticsearch"</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 修改/etc/elasticsearch/elasticsearch.yml 配置文件</span>
ansible elasticsearch -m lineinfile -a <span class="token string">"path=/etc/elasticsearch/elasticsearch.yml line='xpack.security.transport.ssl.enabled: true<span class="token entity" title="\n">\n</span>xpack.security.transport.ssl.verification_mode: certificate<span class="token entity" title="\n">\n</span>xpack.security.transport.ssl.keystore.path: /etc/elasticsearch/elastic-certificates.p12<span class="token entity" title="\n">\n</span>xpack.security.transport.ssl.truststore.path: /etc/elasticsearch/elastic-certificates.p12'"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 重启es</span>
ansible elasticsearch -m <span class="token function">service</span> -a <span class="token string">"name=elasticsearch state=restarted"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>在此过程中，所有节点必须全部更新完，否则之前的用户名和密码将会认证失败</p>
<p>更新完成之后，集群的健康检查为yellow，不要着急，等待它自己自动恢复成green，当es中数据较多时会出现</p>
</blockquote>
<blockquote>
<p>Kibana，logstash，kafka的安装可以同时进行，提高效率</p>
</blockquote>
<h2 id="安装-kibana" tabindex="-1"><a class="header-anchor" href="#安装-kibana" aria-hidden="true">#</a> 安装 Kibana</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载roles</span>
ansible-galaxy <span class="token function">install</span> clay_wangzhi.kibana
<span class="token comment"># 编写playbook，根据实际情况，填写用户名，密码</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">k_username</span><span class="token operator">=</span>elastic <span class="token assign-left variable">k_pass</span><span class="token operator">=</span>E<span class="token comment">#2021</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/playbooks/kibana.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
- hosts: kibana
  roles:
    - clay_wangzhi.kibana
  vars:
    kibana_version: "7.x"
    kibana_dversion: "7.11.2"
    kibana_server_host: "{{ansible_ssh_host}}"
    kibana_server_name: "{{inventory_hostname}}"
    kibana_elasticsearch_url: '["http://{{hostvars[groups["es_ingest"][0]].ansible_host}}:9200"{% for host in groups["es_ingest"][1:] %}, "http://{{hostvars[host].ansible_host}}:9200"{% endfor %}]'
    kibana_elasticsearch_username: "<span class="token variable">${k_username}</span>"
    kibana_elasticsearch_password: "<span class="token variable">${k_pass}</span>"
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
ansible-playbook /etc/ansible/playbooks/kibana.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>TODO：Kibana7.11.x 版本具有告警功能，已经GA了，后续可以看一下</p>
</blockquote>
<h2 id="安装-logstash" tabindex="-1"><a class="header-anchor" href="#安装-logstash" aria-hidden="true">#</a> 安装 logstash</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载roles</span>
ansible-galaxy <span class="token function">install</span> clay_wangzhi.logstash
<span class="token comment"># 编写playbook，根据实际情况，填写用户名，密码</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">l_username</span><span class="token operator">=</span>elastic <span class="token assign-left variable">l_pass</span><span class="token operator">=</span>E<span class="token comment">#2021</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/playbooks/logstash.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
- hosts: logstash
  roles:
    - clay_wangzhi.logstash
  vars:
    logstash_version: '7.x'
    logstash_dversion: '7.11.2'
    logstash_elasticsearch_hosts: '["http://{{hostvars[groups["es_ingest"][0]].ansible_host}}:9200"{% for host in groups["es_ingest"][1:] %}, "http://{{hostvars[host].ansible_host}}:9200"{% endfor %}]'
    es_user: "<span class="token variable">${l_username}</span>"
    es_pass: "<span class="token variable">${l_pass}</span>"
    kafka_topic: "h5-jar"
    kafka_group_id: "suncar-h5"
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
ansible-playbook /etc/ansible/playbooks/logstash.yml 
<span class="token comment"># kafka 还未安装，先停止logstash</span>
ansible logstash -m <span class="token function">service</span> -a <span class="token string">"name=logstash state=stopped"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>TODO: logstash 的playbook后期有空，可以优化一下</p>
</blockquote>
<h2 id="安装-kafka" tabindex="-1"><a class="header-anchor" href="#安装-kafka" aria-hidden="true">#</a> 安装 kafka</h2>
<p>kafka集群依赖zookeeper，先安装zookeeper集群</p>
<blockquote>
<p>由于下载源有问题，需要手工注释掉了下载的task，我事先把压缩包下载到了ansible控制节点，先传到各个客户端</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible kafka -m copy -a "src=/tmp/zookeeper-3.4.14.tar.gz dest=/tmp/"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote>
<p><strong>安装zookeeper</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载roles</span>
ansible-galaxy <span class="token function">install</span> clay_wangzhi.zookeeper
<span class="token comment"># 编写playbook</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/playbooks/zookeeper.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
---
- hosts: kafka
  roles:
  - role: clay_wangzhi.zookeeper
    zookeeper_version: 3.4.14
    zookeeper_mirror: "https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper"
    zookeeper_servers: "{{groups['kafka']}}"
    zookeeper_environment:
      "JAVA_HOME": "/opt/jdk1.8.0_144"
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
ansible-playbook /etc/ansible/playbooks/zookeeper.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>安装kafka</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载roles</span>
ansible-galaxy <span class="token function">install</span> clay_wangzhi.kafka
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/playbooks/kafka.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
---
- hosts: kafka
  roles:
    - clay_wangzhi.kafka
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote>
<p>执行playbook前，首先要进行数据磁盘的挂载，挂载到数据目录，kafka数据节点磁盘占用很大</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
ansible-playbook /etc/ansible/playbooks/kafka.yml
<span class="token comment"># 启动logstash，上面停止了</span>
ansible logstash -m <span class="token function">service</span> -a <span class="token string">"name=logstash state=started"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="安装-filebeat" tabindex="-1"><a class="header-anchor" href="#安装-filebeat" aria-hidden="true">#</a> 安装 filebeat</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 添加filebeat主机到主机清单
    filebeat:
      hosts:
        192.168.124.3:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载roles</span>
ansible-galaxy <span class="token function">install</span> elastic.beats,v7.11.2
<span class="token comment"># 编写playbook，beat_conf 请根据实际情况来填写</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/playbooks/filebeat.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
---
- hosts: filebeat
  roles:
    - elastic.beats
  vars:
    beat: filebeat
    beat_conf:
      filebeat:
        inputs:
          - type: log
            enabled: true
            paths:
              - /home/ncar/service/webapps/logs/ShengDaGFHD/ShengDaGFHD.log
            multiline.pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}'
            multiline.negate: true
            multiline.match: after
            tags: ["jar"]
            fields:
              type: h5-jar
              ip: "{{inventory_hostname}}"
              service_name: shengdasxgh
      processors:
        - drop_fields:
            fields: ["agent", "ecs.version", "host.name"]
    
    output_conf:
      kafka:
        hosts: '["{{hostvars[groups["kafka"][0]].ansible_host}}:9092"{% for host in groups["kafka"][1:] %}, "{{hostvars[host].ansible_host}}:9092"{% endfor %}]'
        topic: 'h5-jar'
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 修改roles文件，修改yum源为清华源</span>
<span class="token function">cat</span> <span class="token operator">></span> /etc/ansible/roles/elastic.beats/templates/beats.repo.j2 <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[filebeat-7.x]
name=Elasticsearch repository for 7.x packages
baseurl=https://mirrors.tuna.tsinghua.edu.cn/elasticstack/yum/elastic-7.x/
gpgcheck=0
enabled=1
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装</span>
ansible-playbook /etc/ansible/playbooks/filebeat.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
