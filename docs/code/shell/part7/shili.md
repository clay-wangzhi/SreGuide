---
author: LinuxStory
category: Linux
tag:
  - Bash
---
## 开机集成zabbix和jumpserver脚本

```bash
#!/bin/bash
LOCAL_PASS="****"
ANS_PASS="****"
INVENTORY_FILE="/etc/ansible/playbook/zabbix/inventory/zabbix.yml"
ZABBIX_PALYBOOK_FILE="/etc/ansible/playbook/zabbix/new-zabbix-agent.yml"
IP=$(ifconfig | grep broadcast | awk '{ print $2 }')
LAST_TWO_IP=$(echo $IP | cut -d. -f3-4)

node="f6d2228f-c474-4b1e-ac8b-5c7d10e63b53"

update_ssh() {
  sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
  systemctl restart sshd > /dev/null 2>&1
  echo "${LOCAL_PASS}" | passwd root --stdin  > /dev/null 2>&1
}

integrate_jms() {
  if [[ "${1}" == "csp" ]]; then
    node="b256f30b-896e-44cd-90f0-0fc28984afe9"
  elif [[ "${1}" == "bes" ]]; then
    node="b594957e-d6e8-4c85-92e6-b89757792e1a"
  fi 
  curl -XPOST -H 'Authorization: Token d54c30e98f49de8e4e75bd3c28f214d0dea761ca' \
    -H "Content-Type:application/json" http://192.168.162.10/api/v1/assets/assets/ \
    -d "{ \"ip\": \"${IP}\", \"hostname\": \"${LAST_TWO_IP}-${2}\", 
        \"protocol\": \"ssh\", \"port\": 22, \"protocols\": [ \"ssh/22\" ], 
        \"platform\": \"Linux\", \"is_active\": true, 
        \"admin_user\": \"59bb8ee8-98ad-4aac-a1a7-3e1b2b83f38f\", 
        \"nodes\": [ \"${node}\" ]}"
}

integrate_ans_zbx() {
  /usr/bin/expect <<EOF
  set timeout 180
  spawn ssh root@192.168.162.1
  expect {
    "(yes/no)?" {
      send "yes\r";
      expect "password:";
      send "${ANS_PASS}\r";
      exp_continue;
    }
    "password:" {
      send "${ANS_PASS}\r";
      exp_continue;
    }
    "*#" {
      send "sed -i '/# ${1} insert/i\  ${IP}:' ${INVENTORY_FILE}\r";
      send "sed -i 's/${IP}/        ${IP}/g' ${INVENTORY_FILE}\r";
      send " ansible-playbook -i ${INVENTORY_FILE} ${ZABBIX_PALYBOOK_FILE} \
             -l ${IP} --skip-tags 'sangoma,debian,suse,windows,docker'\r";
    }
  }
  expect eof
EOF
}

main() {
  update_ssh
  integrate_jms "$@"
  integrate_ans_zbx "$@" 
}

main "$@"
```

