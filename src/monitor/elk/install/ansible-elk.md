---
category: 监控
tag:
  - ELK
---

# elk借助安装ansible

## ansible配置

```bash
# 修改主机名
hostnamectl set-hostname elk_ans
# 生产密钥对，生成后将公钥导入到私有云主机中，创建新主机时使用
ssh-keygen -t rsa -f ~/.ssh/id_rsa -N ''
```

```bash
# yum 安装
yum -y install ansible
# 修改主机列表为yaml格式
mv /etc/ansible/hosts{,.yml}
# 优化配置
cp /etc/ansible/ansible.cfg{,.bak}
cat > /etc/ansible/ansible.cfg <<EOF
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
EOF
```

```bash
# 编写ansible主机清单
export es_master1=192.168.135.125 es_master2=192.168.135.214 es_master3=192.168.135.62 es_data1=192.168.135.160 es_data2=192.168.135.73 es_data3=192.168.135.105 es_ingest1=192.168.135.8 es_ingest2=192.168.135.187 es_ingest3=192.168.135.189 kibana1=192.168.135.178 kibana2=192.168.135.196 kibana3=192.168.135.198 logstash1=192.168.135.89 logstash2=192.168.135.30 logstash3=192.168.135.96 kafka1=192.168.135.32 kafka2=192.168.135.22 kafka3=192.168.135.51
cat > /etc/ansible/hosts.yml <<EOF
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
          ansible_host: ${es_master1}
        es_master2:
          ansible_host: ${es_master2}
        es_master3:
          ansible_host: ${es_master3}
    es_data:
      hosts:
        es_data1:
          ansible_host: ${es_data1}
        es_data2:
          ansible_host: ${es_data2}
        es_data3:
          ansible_host: ${es_data3}
    es_ingest:
      hosts:
        es_ingest1:
          ansible_host: ${es_ingest1}
        es_ingest2:
          ansible_host: ${es_ingest2}
        es_ingest3:
          ansible_host: ${es_ingest3}
    kibana:
      hosts:
        kibana1:
          ansible_host: ${kibana1}
        kibana2:
          ansible_host: ${kibana2}
        kibana3:
          ansible_host: ${kibana3}
    logstash:
      hosts:
        logstash1:
          ansible_host: ${logstash1}
        logstash2:
          ansible_host: ${logstash2}
        logstash3:
          ansible_host: ${logstash3}
    kafka:
      hosts:
        kafka1:
          ansible_host: ${kafka1}
          zookeeper_id: 1
        kafka2:
          ansible_host: ${kafka2}
          zookeeper_id: 2
        kafka3:
          ansible_host: ${kafka3}
          zookeeper_id: 3
EOF
```

```bash
# 镜像yum源有问题得，替换下yum源
ansible-galaxy install clay_wangzhi.sysinit
mkdir -p /etc/ansible/playbooks/vars
cat > /etc/ansible/playbooks/sysinit.yml << EOF
---
- hosts: all
  roles:
    - clay_wangzhi.sysinit
EOF
ansible all -m shell -a "rm -rf /etc/yum.repos.d/bak/"
ansible-playbook /etc/ansible/playbooks/sysinit.yml --tags upgrade_repo
```

## 安装 Elasticsearch

```bash
# 下载roles
ansible-galaxy install elastic.elasticsearch,v7.11.2
```

```bash
# 编写playbook
cat > /etc/ansible/playbooks/elasticsearch.yml << EOF
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
EOF
```

```bash
# 新增var_files
cat > /etc/ansible/playbooks/vars/es_vars.yml << EOF
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
EOF
```

```bash
# 修改roles文件，修改yum源为清华源
cat > /etc/ansible/roles/elastic.elasticsearch/templates/elasticsearch.repo << EOF
[elasticsearch-7.x]
name=Elasticsearch repository for 7.x packages
baseurl=https://mirrors.tuna.tsinghua.edu.cn/elasticstack/yum/elastic-7.x/
gpgcheck=0
enabled=1
EOF
```

```bash
# 修改es yml配置文件,将安全功能开启，并自己设置密码
vim /etc/ansible/roles/elastic.elasticsearch/templates/elasticsearch.yml.j2
```

```
{% if es_enable_xpack and es_api_basic_auth_username is defined and es_api_basic_auth_password is defined %}   #将这一行改为下面
{% if not oss_version %}
```

> 执行playbook前，首先要进行数据磁盘的挂载，挂载到数据目录，es数据节点磁盘占用很大

```bash
# 安装
ansible-playbook /etc/ansible/playbooks/elasticsearch.yml 
```

```bash
# ansible安装完成后，初始化es通信的密码，在任意es_master1节点执行
export JAVA_HOME=/usr/share/elasticsearch/jdk/
cd /usr/share/elasticsearch/
bin/elasticsearch-setup-passwords interactive
```

**配置Node间SSL**

注意：这里是指配置ES集群节点间transport的SSL认证，对于ES节点的HTTP API接口并没有配置，所以通过API访问ES时不需要提供证书。

参考官网:

https://www.elastic.co/guide/en/elasticsearch/reference/current/ssl-tls.html

https://www.elastic.co/guide/en/elasticsearch/reference/7.4/configuring-tls.html

创建SSL/TLS证书：

```bash
cd /usr/share/elasticsearch/bin
export JAVA_HOME=/usr/share/elasticsearch/jdk/
./elasticsearch-certutil ca -v   //一路回车
cd ..
./bin/elasticsearch-certutil cert --ca elastic-stack-ca.p12  //一路回车
mv elastic-* /etc/elasticsearch/
cd /etc/elasticsearch/
chown elasticsearch.elasticsearch *.p12
```

操作完成后，把证书传到剩余节点，修改剩余节点的配置文件，并重启

```bash
# 将证书传到 ansible /tmp 目录下
ansible elasticsearch -m copy -a "src=/tmp/elastic-certificates.p12 dest=/etc/elasticsearch/ owner=elasticsearch group=elasticsearch" 
ansible elasticsearch -m copy -a "src=/tmp/elastic-stack-ca.p12 dest=/etc/elasticsearch/ owner=elasticsearch group=elasticsearch" 
```

```bash
# 修改/etc/elasticsearch/elasticsearch.yml 配置文件
ansible elasticsearch -m lineinfile -a "path=/etc/elasticsearch/elasticsearch.yml line='xpack.security.transport.ssl.enabled: true\nxpack.security.transport.ssl.verification_mode: certificate\nxpack.security.transport.ssl.keystore.path: /etc/elasticsearch/elastic-certificates.p12\nxpack.security.transport.ssl.truststore.path: /etc/elasticsearch/elastic-certificates.p12'"
```

```bash
# 重启es
ansible elasticsearch -m service -a "name=elasticsearch state=restarted"
```

> 在此过程中，所有节点必须全部更新完，否则之前的用户名和密码将会认证失败
>
> 更新完成之后，集群的健康检查为yellow，不要着急，等待它自己自动恢复成green，当es中数据较多时会出现

> Kibana，logstash，kafka的安装可以同时进行，提高效率

## 安装 Kibana

```bash
# 下载roles
ansible-galaxy install clay_wangzhi.kibana
# 编写playbook，根据实际情况，填写用户名，密码
export k_username=elastic k_pass=E#2021
cat > /etc/ansible/playbooks/kibana.yml << EOF
- hosts: kibana
  roles:
    - clay_wangzhi.kibana
  vars:
    kibana_version: "7.x"
    kibana_dversion: "7.11.2"
    kibana_server_host: "{{ansible_ssh_host}}"
    kibana_server_name: "{{inventory_hostname}}"
    kibana_elasticsearch_url: '["http://{{hostvars[groups["es_ingest"][0]].ansible_host}}:9200"{% for host in groups["es_ingest"][1:] %}, "http://{{hostvars[host].ansible_host}}:9200"{% endfor %}]'
    kibana_elasticsearch_username: "${k_username}"
    kibana_elasticsearch_password: "${k_pass}"
EOF
```

```bash
# 安装
ansible-playbook /etc/ansible/playbooks/kibana.yml
```

> TODO：Kibana7.11.x 版本具有告警功能，已经GA了，后续可以看一下

## 安装 logstash

```bash
# 下载roles
ansible-galaxy install clay_wangzhi.logstash
# 编写playbook，根据实际情况，填写用户名，密码
export l_username=elastic l_pass=E#2021
cat > /etc/ansible/playbooks/logstash.yml << EOF
- hosts: logstash
  roles:
    - clay_wangzhi.logstash
  vars:
    logstash_version: '7.x'
    logstash_dversion: '7.11.2'
    logstash_elasticsearch_hosts: '["http://{{hostvars[groups["es_ingest"][0]].ansible_host}}:9200"{% for host in groups["es_ingest"][1:] %}, "http://{{hostvars[host].ansible_host}}:9200"{% endfor %}]'
    es_user: "${l_username}"
    es_pass: "${l_pass}"
    kafka_topic: "h5-jar"
    kafka_group_id: "suncar-h5"
EOF
```

```bash
# 安装
ansible-playbook /etc/ansible/playbooks/logstash.yml 
# kafka 还未安装，先停止logstash
ansible logstash -m service -a "name=logstash state=stopped"
```

> TODO: logstash 的playbook后期有空，可以优化一下

## 安装 kafka

kafka集群依赖zookeeper，先安装zookeeper集群

> 由于下载源有问题，需要手工注释掉了下载的task，我事先把压缩包下载到了ansible控制节点，先传到各个客户端
>
> ```
> ansible kafka -m copy -a "src=/tmp/zookeeper-3.4.14.tar.gz dest=/tmp/"
> ```

**安装zookeeper**

```bash
# 下载roles
ansible-galaxy install clay_wangzhi.zookeeper
# 编写playbook
cat > /etc/ansible/playbooks/zookeeper.yml << EOF
---
- hosts: kafka
  roles:
  - role: clay_wangzhi.zookeeper
    zookeeper_version: 3.4.14
    zookeeper_mirror: "https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper"
    zookeeper_servers: "{{groups['kafka']}}"
    zookeeper_environment:
      "JAVA_HOME": "/opt/jdk1.8.0_144"
EOF
```

```bash
# 安装
ansible-playbook /etc/ansible/playbooks/zookeeper.yml
```

**安装kafka**

```bash
# 下载roles
ansible-galaxy install clay_wangzhi.kafka
cat > /etc/ansible/playbooks/kafka.yml << EOF
---
- hosts: kafka
  roles:
    - clay_wangzhi.kafka
EOF
```

> 执行playbook前，首先要进行数据磁盘的挂载，挂载到数据目录，kafka数据节点磁盘占用很大

```bash
# 安装
ansible-playbook /etc/ansible/playbooks/kafka.yml
# 启动logstash，上面停止了
ansible logstash -m service -a "name=logstash state=started"
```

## 安装 filebeat

```
# 添加filebeat主机到主机清单
    filebeat:
      hosts:
        192.168.124.3:
```

```bash
# 下载roles
ansible-galaxy install elastic.beats,v7.11.2
# 编写playbook，beat_conf 请根据实际情况来填写
cat > /etc/ansible/playbooks/filebeat.yml << EOF
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
EOF
```

```bash
# 修改roles文件，修改yum源为清华源
cat > /etc/ansible/roles/elastic.beats/templates/beats.repo.j2 << EOF
[filebeat-7.x]
name=Elasticsearch repository for 7.x packages
baseurl=https://mirrors.tuna.tsinghua.edu.cn/elasticstack/yum/elastic-7.x/
gpgcheck=0
enabled=1
EOF
```

```bash
# 安装
ansible-playbook /etc/ansible/playbooks/filebeat.yml
```

