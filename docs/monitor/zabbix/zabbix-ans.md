---
category: 监控
tag:
  - Zabbix
---

# 2 zabbix借助ansible安装

## zabbix-server安装

1. 下载roles

```shell
ansible-galaxy install dj-wasabi.zabbix-server
```

2. 编写playbook

`vim new-zabbix-server.yml`

```shell
---
- hosts: zabbix-server
  become: yes
  vars:
    # mysql
    # host memory is 16G
    mysql_thread_cache_size: "64"
    mysql_query_cache_size: "128M"
    mysql_innodb_buffer_pool_size: "4096M"
    mysql_tmp_table_size: "128M"
    mysql_table_open_cache: "2048"
    # zabbix-server
    zabbix_version: 4.4
    zabbix_repo_yum:
      - name: zabbix
        description: Zabbix Official Repository - $basearch
        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/{{ zabbix_version }}/rhel/{{ ansible_distribution_major_version }}/$basearch/
        gpgcheck: 0
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
      - name: zabbix-supported
        description: Zabbix Official Repository non-supported - $basearch
        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/{{ ansible_distribution_major_version }}/$basearch/
        gpgcheck: 0
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
    zabbix_server_startpollers: 12
    zabbix_server_startpollersunreachable: 5
    zabbix_server_starttrappers: 30
    zabbix_server_startdiscoverers: 10
    zabbix_server_housekeepingfrequency: 12
    zabbix_server_maxhousekeeperdelete: 100000
    zabbix_server_cachesize: 4096M
    zabbix_server_startdbsyncers: 20
    zabbix_server_historyindexcachesize: 512M
    zabbix_server_trendcachesize: 256M
    zabbix_server_historytextcachesize: 80M
    zabbix_server_valuecachesize: 4096M
    zabbix_server_timeout: 30
    zabbix_server_database: mysql
    zabbix_server_database_long: mysql 
    # zabbi-web
    zabbix_url: 192.168.165.231
    zabbix_timezone: Asia/Shanghai
  roles:
    - role: geerlingguy.mysql
    - role: geerlingguy.apache
    - role: dj-wasabi.zabbix-server
    - role: dj-wasabi.zabbix-web
```

3. 安装zabbix-server

```shell
ansible-playbook -i inventory/zabbix.yml new-zabbix-server.yml
```

4. 优化

   优化磁盘，去除atime

5. 注意事项

   zabbix-web，筛选历史问题时，记得选择时间范围

## zabbix-proxy安装

1. 下载roles

```shell
ansible-galaxy install dj-wasabi.zabbix-proxy
```

2. 编写playbook

`vim new-zabbix-proxy.yml`

```shell
---
- hosts: zabbix-proxy
  become: yes
  vars:
    # mysql
    # host memory is 8G
    mysql_thread_cache_size: "64"
    mysql_query_cache_size: "128M"
    mysql_innodb_buffer_pool_size: "2048M"
    mysql_tmp_table_size: "64M"
    mysql_table_open_cache: "1024"

    # zabbix-proxy
    zabbix_server_host: 192.168.165.231 
    zabbix_version: 4.4
    zabbix_repo_yum:
      - name: zabbix
        description: Zabbix Official Repository - $basearch
        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/{{ zabbix_version }}/rhel/{{ ansible_distribution_major_version }}/$basearch/
        gpgcheck: 0
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
      - name: zabbix-supported
        description: Zabbix Official Repository non-supported - $basearch
        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/{{ ansible_distribution_major_version }}/$basearch/
        gpgcheck: 0
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
    zabbix_proxy_cachesize: 2048
    zabbix_proxy_startpollers: 12
    zabbix_proxy_housekeepingfrequency: 12

  roles:
    - role: geerlingguy.mysql
    - role: dj-wasabi.zabbix-proxy
```

3. 安装zabbix-proxy

```shell
ansible-playbook -i inventory/zabbix.yml new-zabbix-proxy.yml
```

4. 将zabbix-proxy添加到zabbix-server中

   1. ) 进入zabbix的web页面，点击Administrator-->Proxies-->Create proxy；

   2. ) 填写Proxy name为主机名称，Proxy mode为Active，然后Add。

      >过几十秒，看看proxy是否添加成功，查看proxy和server日志，如无成功，将proxy和server端重启一下；
      >
      >proxy name一定要和配置文件中`/etc/zabbix/zabbix_proxy.conf`的`Hostname`一致。

## zabbix-agent安装

1. 下载roles

```shell
ansible-galaxy install dj-wasabi.zabbix-agent
```

2. 编写playbook

`vim new-zabbix-agent.yml`

```shell
---
- hosts: zabbix-server
  vars:
    zabbix_version: 4.4
    zabbix_repo_yum:
      - name: zabbix
        description: Zabbix Official Repository - $basearch
        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/{{ zabbix_version }}/rhel/{{ ansible_distribution_major_version }}/$basearch/
        gpgcheck: 0
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
      - name: zabbix-supported
        description: Zabbix Official Repository non-supported - $basearch
        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/{{ ansible_distribution_major_version }}/$basearch/
        gpgcheck: 0
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
    zabbix_agent_server: 192.168.165.231
    zabbix_agent_serveractive: 192.168.165.231
    zabbix_url: http://192.168.165.231
    zabbix_api_use: true
    zabbix_api_create_hostgroup: true
    zabbix_api_create_hosts: true
    zabbix_api_user: Admin
    zabbix_api_pass: zabbix
    zabbix_create_host: present
    zabbix_host_groups:
      - Zabbix servers
    zabbix_link_templates:
      - Template OS Linux by Zabbix agent active
      - Template App Zabbix Server
  roles:
    - role: dj-wasabi.zabbix-agent

- hosts: hy-bes
  vars:
    zabbix_version: 4.4
    zabbix_repo_yum:
      - name: zabbix
        description: Zabbix Official Repository - $basearch
        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/{{ zabbix_version }}/rhel/{{ ansible_distribution_major_version }}/$basearch/
        gpgcheck: 0
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
      - name: zabbix-supported
        description: Zabbix Official Repository non-supported - $basearch
        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/{{ ansible_distribution_major_version }}/$basearch/
        gpgcheck: 0
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
    zabbix_agent_server: 192.168.16.235,192.168.165.232
    zabbix_agent_serveractive: 192.168.16.235,192.168.165.232
    zabbix_proxy: bes.zabbixproxy
    zabbix_url: http://192.168.165.231
    zabbix_api_use: true
    zabbix_api_create_hostgroup: true
    zabbix_api_create_hosts: true
    zabbix_api_user: Admin
    zabbix_api_pass: zabbix
    zabbix_create_host: present
    zabbix_host_groups:
      - hy-bes
    zabbix_link_templates:
      - Template OS Linux by Zabbix agent active
  roles:
    - role: dj-wasabi.zabbix-agent
```

3. 修改roles，添加tags

   由于添加监控的主机数以千计，所以必须ansible执行playbook时，必须跳过不必要的判断，这样能大大减少playbook的执行时间，提高执行效率。

* 修改`/dj-wasabi.zabbix-agent/tasks/main.yml`，给每个操作系统添加tags，例如

  ```
  - name: "Install the correct repository"
    include: "Debian.yml"
    when:
      - zabbix_agent_os_family == "Debian"
      - not (zabbix_agent_docker | bool)
    tags:
      - zabbix-agent
      - init
      - config
      - service
      - debian
  ```

  > 最后的debian是新增的。

* 修改`dj-wasabi.zabbix-agent/tasks/Linux.yml`，给DOcker增加tags，如下：

  ```
  - name: "Install the Docker container"
    include: Docker.yml
    when:
      - zabbix_agent_docker | bool
    tags:
      - docker
  ```

  > 最后两行是新增的。

4. 安装

```shell
 ansible-playbook -i inventory/zabbix.yml new-zabbix-agent.yml -l 192.168.163.150 --skip-tags "sangoma,debian,suse,windows,docker"
```

> 每次新增zabbix-agent，最后安装完成，重启一下zabbix-proxy，这样proxy会尽快发现agent节点

5. 监控模块

   我们采用的是zabbix主动式的监控方式，zabbix-agent主动推送数据给proxy或server，以减少server端压力。

   我发现在新的zabbix监控中，还可以检查时间有没有同步。

   而且还有磁盘IO的监控，就问你们棒不棒！！！

   很棒！
   
   > 4.4中新的主动式模板中，需要将监控项system.localtime	变为enabled，否则主机的可用性为unknown
   
   主动式的缺点，主机宕机，知道的时间不及时，好像是30分钟。