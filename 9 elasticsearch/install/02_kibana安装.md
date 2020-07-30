## 安装Kibana

```bash
# 修改ansible主机列表，增加以下内容
cat /etc/ansible/hosts.yml 
```

```
    kibana:
      hosts:
        kibana1:
          ansible_ssh_host: 172.16.91.27
        kibana2:
          ansible_ssh_host: 172.16.91.1
        kibana3:
          ansible_ssh_host: 172.16.91.151
```

```bash
# 下载roles
ansible-galaxy install clay_wangzhi.kibana
# 编写playbook，根据实际情况，填写用户名，密码
cat /etc/ansible/playbook/kibana.yml 
```

```bash
- hosts: kibana
  roles:
    - clay_wangzhi.kibana
  vars:
    kibana_server_host: "{{ansible_ssh_host}}"
    kibana_server_name: "{{inventory_hostname}}"
    kibana_elasticsearch_url: '["http://172.16.91.27:9200", "http://172.16.91.1:9200", "http://172.16.91.151:9200"]'
    kibana_elasticsearch_username: ""
    kibana_	elasticsearch_password: ""
```

```bash
# 安装
ansible-playbook kibana.yml
```

