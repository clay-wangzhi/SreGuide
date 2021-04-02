---
time: 2020-03-20
category: 自动化工具
tags:
  - Ansible
---

# 7 常见问题

### 4.3 关于ssh连接一些常见的错误说明

1. `ERROR! to use the 'ssh' connection type with passwords, you must install the sshpass program`

完整错误示例如下：

```
root@ctnr:/etc/ansible# ansible '*.a32-168-1.*' -m ping
ctnr.a32-168-1.prod.yiz | FAILED! => {
    "failed": true, 
    "msg": "ERROR! to use the 'ssh' connection type with passwords, you must install the sshpass program"
}
```

一般出现这种错误，是在通过密码验证远程被管理机的时候，需要在server端安装sshpass：

```
yum install sshpass -y 
```

1. `Using a SSH password instead of a key is not possible because Host Key checking is enabled and sshpass does not support this. Please add this host's fingerprint to your known_hosts file to manage this host`

完整错误如下：

```
ansible test -a 'uptime'

192.168.1.1| FAILED =>Using a SSH password instead of a key is not possible because HostKey checking is enabled and sshpass does not support this.Please add this host's fingerprint to your known_hosts file to manage this host.
192.168.1.2 | FAILED => Using a SSH password instead of a key is not possible because Host Key checking is enabled and sshpass does not support this.  Please add this host's fingerprint to your known_hosts file to manage this host.
```

这种错误通常就出现在server端第一次连接被管理机的时候，就是上面说到的需要通过输入yes/no进行确认将key字符串加入到`~/.ssh/known_hosts`文件中。

解决办法有两个：

- 通过修改上面提到的host_key_checking，将其设置为false
- 通过修改ssh_args参数，修改如下：

```
ssh_args = -C -o ControlMaster=auto -o ControlPersist=60s -o StrictHostKeyChecking=no 
```

