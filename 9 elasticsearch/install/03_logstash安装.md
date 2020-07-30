## 安装logstash

```bash
# 修改ansible主机列表，增加以下内容
cat /etc/ansible/hosts.yml 
```

```
    logstash:
      hosts:
        logstash1:
          ansible_ssh_host: 172.16.91.197
        logstash2:
          ansible_ssh_host: 172.16.91.2
        logstash3:
          ansible_ssh_host: 172.16.91.7
```

```bash
# 下载roles
ansible-galaxy install clay_wangzhi.logstash
# 编写playbook，根据实际情况，填写用户名，密码
cat /etc/ansible/playbook/logstash.yml 
```

```bash
- hosts: logstash
  roles:
    - clay_wangzhi.logstash
  vars:
    logstash_elasticsearch_hosts: '["http://172.16.91.27:9200", "http://172.16.91.1:9200", "http://172.16.91.151:9200"]'
    es_user: "elastic"
    es_pass: "***"
```

```bash
# 安装
ansible-playbook logstash.yml 
```

