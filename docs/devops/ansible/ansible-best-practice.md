---
category: 自动化工具
tag:
  - Ansible
---

# Ansible 使用中的一些实践

## 本地执行 记录 输出结果

样例一

`cat check_app.yaml`

```yaml
- hosts: all
  gather_facts: no
  tasks:
    - script: port_check.sh
      register: netstat

    - shell: source /etc/profile && jps | grep -v Jps | awk '{print $2}'
      register: java

    - shell: echo {{ansible_ssh_host}} {{netstat.stdout_lines}} {{java.stdout_lines}} >> /home/clay/result.txt
      connection: local
```

`cat files/port_check.sh`

```bash
#!/bin/bash

netstat -npltu | egrep -v "sshd|zabbix_agentd|ntpd|chronyd" | awk -F/ 'NR>2{ print $2 }' | tr -d " " | sort -nr | uniq
```

样例二

执行结果返回较多（含换行符），分割成多个文件

`cat sec_log4j.yml`

```yaml
---
- hosts: all
  remote_user: root
  gather_facts: false
  #serial: 1
  tasks:
  - name: bash sec script
    script: "log4j_scan.sh"
    register: sec_q
  - name: copy output to local file
    copy:
      content: "{{ sec_q.stdout}}"
      dest: "/tmp/sec_log4j2/{{ inventory_hostname }}.log"
    delegate_to: localhost
```

