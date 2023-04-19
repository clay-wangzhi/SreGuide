---
category: Redis
---

# Redis 6.x 哨兵安装配置

## 1 升级 gcc

centos7 默认的 gcc 默认是4.8.5,版本小于 5.3 无法编译,需要先安装gcc新版才能编译

```shell
yum -y install gcc-c++
yum -y install centos-release-scl
yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
echo "source /opt/rh/devtoolset-9/enable" >>/etc/profile 
```

## 2 用 ansible 安装 redis 哨兵

下载role

```shell
git clone -b dev-clay https://github.com/clay-wangzhi/Ansible-roles.git
cp -r Ansible-roles/redis5/ /etc/ansible/roles/
```

Example Playbook

`cat /etc/ansible/playbooks/redis_sentinel.yml`

```yaml
 hosts: 172.16.xx.xx
  vars:
    - redis_version: '6.2.4'
    - redis_master_host: '172.16.xx.xx'
    - redis_master_port: '6380'
    - redis_requirepass: '123456'
    - redis_masterauth: '123456'
    - redis_sentinel_monitors:
      - name: mymaster
        ip: 172.16.xx.xx
        port: 6380
        quorum: 2
        masterauth: '123456'
  roles:
   - { role: redis5, redis_port: 6380 }
   - { role: redis5, redis_port: 6381, redis_slave: true }
   - { role: redis5, redis_port: 6382, redis_slave: true }
   - { role: redis5, redis_port: 16380, redis_sentinel: true }
   - { role: redis5, redis_port: 16381, redis_sentinel: true }
   - { role: redis5, redis_port: 16382, redis_sentinel: true }
```

安装

```shell
ansible-playbook redis_sentinel.yml
```



参考链接

* [redis6.x哨兵模式安装配置](http://www.phpheidong.com/blog/article/96564/60834d7eff7a49c816b5/)
* [ansible roles redis](https://github.com/lework/Ansible-roles/blob/master/redis5/README.md)
* [使用Systemd启动Redis](http://www.manongjc.com/detail/23-xvtvqgqadcuaveg.html)