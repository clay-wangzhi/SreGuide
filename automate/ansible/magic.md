# 5.3 魔法变量
**魔法变量**

Ansible默认会提供一些内置的变量以实现一些特定的功能，我们称之为魔法变量。下面列举一些常用的魔法变量。

https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html#magic

## 1. hostvars

hostvars变量用于保存所有和主机相关的变量，通常包括inventory中定义的主机变量和gather_facts收集到的主机信息变量。hostvars是一个key/value格式的字典(即hash结构、对象)，key是每个节点的主机名，value是该主机对应的变量数据。

获取某台指定的主机的相关变量。如果有一台web服务器的配置文件中需要指定db服务器的ip地址，我们假定这台db服务器的hostname为db.exmaple.com,ip地址绑定在eth0网卡上，我们可以通过如下方法在web服务器上调用db服务器的ip地址：

```
{{ hostvars['db.example.com'].ansible_eth0.ipv4.address }}
```

> 需要注意的是db.example.com不能使用ip地址来取代，只能使用主机名或别名。

## 2. inventory_hostname

inventory_hostname是Ansible所识别的当前正在运行task的主机的主机名。如果在inventory里定义过别名，那么这里就是那个别名，如果inventory包含如下一行：

```
server1 ansible_ssh_host=192.168.1.1
```

则`inventory_hostname`即为`server1`
利用`hostvars`和`inventory_hostname`变量，可以输出与当前主机相关联的所有变量：

```
- debug: var=hostvars[inventory_hostname]
```

> 与inventory_hostname相近的还有一个inventory_hostname_short，如果一台主机的inventory_hostname为server1.exmaple.com，则inventory_hostname_short的值为server1

## 3. group_names

用于标识当前正在执行task的目标主机位于的主机组。假如我们有三台主机，用来配置成一主二从的mysql服务器。inventory配置如下：

```
[mdb]
db1
[sdb]
db2
db3
```

mysql配置文件my.conf.j2示例如下：

```yaml
#我们知道db1在mdb组，当db1与当前正在执行任务的主机位于同一组时，我们认为当前主机即在mdb组，所以对当前主机应用mysql master的配置
{% if 'db1' in group_names %}
[mysqld]
server-id=1
log-bin=mysql-bin
log-bin-index=mysql-bin.index
sync-binlog=1
innodb_flush_log_at_trx_commit=1
#当db1与当前主机不在同一组时，则认为当前主机不在mdb组，即应用my slave的配置
{% else %}
[mysqld]
server-id=2
relay-log=relay-log
relay-log-index=relay-log.index
read-only = yes
sync_master_info = 1
sync_relay_log = 1
sync_relay_log_info = 1
relay_log_recovery = 1
skip_slave_start    
{% endif %}
```

我们执行如下task:

```
- name: copy config file to mysql master
  template: src=my.conf.j2 dest=/etc/my.cnf
```

## 4. groups

groups是inventory中所有主机组的列表，可用于枚举主机组中的所有主机。

假如我们有一个inventory文件定义如下：

```
[web]
server1
server2
```

在配置一台HAproxy的负载均衡器时，我们的配置文件肯定需要web主机组的所有服务器的IP，配置文件包含如下片段：

```
backend web-backend
{% for host in groups.web%}
    server {{host.inventory_hostname}} {{ host.ansible_default_ipv4.address }}:80
{% endfor %}
```

最终生成的文件如下：

```
backend web-backend
    server server1 192.168.1.1:80
    server server2 192.168.1.2:80
```

再给一个例子，在所有的dbservers组的服务器上创建一个数据库用户kate：

```
- name: Create a user for all db servers
  mysql_user: name=kate password=test host={{ hostvars.[item].ansible_eth0.ipv4.address }} state=present
  with_items: groups['dbservers'] 
```

## 5. ansible_play_batch

 play_hosts 已废弃，等价于ansible_play_batch

ansible_play_hosts等价于ansible_play_batch

它存储当前play所涉及的所有主机列表，但连接失败或执行任务失败的节点不会留在此变量中。

## 6. inventory_dir

主机清单所在目录

## 7. inventory_file

主机清单文件

> 参考链接：
>
> https://www.cnblogs.com/breezey/p/9275763.html
>
> https://blog.51cto.com/cloumn/blog/1544
