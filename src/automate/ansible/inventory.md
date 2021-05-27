---
time: 2020-03-20
category: 自动化工具
tags:
  - Ansible
---

# 2 Ansible Inventory配置详解

在使用Ansible来批量管理主机的时候，通常我们需要先定义要管理哪些主机或者主机组，而这个用于管理主机与主机组的文件就叫做Inventory，也叫主机清单。

Ansible Inventory 是包含`静态 Inventory` 和`动态 Inventory` 两部分的，静态 Inventory 指的是在文件中指定的主机和组，动态 Inventory 指通过外部脚本获取主机列表，并按照 ansible 所要求的格式返回给 ansilbe 命令的。

## 1 inventory文件路径

默认的inventory文件是`/etc/ansible/hosts`，可以通过Ansible配置文件的inventory配置指令去修改路径。

```
$ grep '/etc/ansible/hosts' /etc/ansible/ansible.cfg
#inventory = /etc/ansible/hosts
```

但通常我们不会去修改这个配置项，如果在其它地方定义了inventory文件，可以直接在ansible的命令行中使用-i选项去指定我们自定义的inventory文件。

**多个inventory文件**

当Ansible要管理的节点非常多时，仅靠分组的逻辑可能也不足够方便管理，这个时候可以定义多个inventory文件并放在一个目录下， 并按一定的命名规则为每 个inventory命名，以便见名知意。

现在要使用多个inventory的功能，需要将inventory指定为目录路径。

例如，Ansible配置文件将inventory指令设置为对应的目录:

```shell
inventory = /etc/ansible/inventorys 
```

inventory指定为目:录时，inventory文件最好不要带有后缀， 就像示例中的a和b文件。因为Ansible当使用目录作为inventory时，默认将忽略一些后缀的文件不去解析。 需要修改配置:文件中的inventory_ ignore_ extensions 项来禁止忽略指定后缀(如ini后缀)的文件。

```shell
#inventory_ ignore_ extensions=~, .orig, .bak, .in, .cfg, .retry, .pyc, .pyo
inventory_ ignore_ extensions = ~, .orig, .bak, .cfg, .retry, .pyC, .pyo
```

## 2 静态Inventory

### 2.1 定义主机和组

> 定义主机清单，有多种格式，常用的有`ini`格式和`YAML`（Ansible 2.4开始支持）格式，我倾向于使用`YAML`格式，下面的举例中，两种格式都会提到。
>
> **Ansible 默认预定义了两个主机组：`all`分组（所有主机）和`ungrouped`分组（不在分组内的主机），两个组都不包括localhost这个特殊的节点**

对于/etc/ansible/hosts最简单的定义格式像下面：

#### 2.1.1 简单的主机和组

In INI:

```sh
# 中括号中的名字代表组名，可以根据自己的需求将庞大的主机分成具有标识的组，如上面分了两个组webservers和dbservers组；  
# 主机(hosts)部分可以使用域名、主机名、IP地址表示；当然使用前两者时，也需要主机能反解析到相应的IP地址，一般此类配置中多使用IP地址；
mail.example.com

[webservers]
foo.example.com
bar.example.com

[dbservers]
one.example.com
two.example.com
three.example.com
```

In YAML:

```
all:
  hosts:
    mail.example.com:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
```

#### 2.1.2  指定主机范围

In INI:

```sh
# 下面指定了从web01到web50，webservers组共计50台主机；databases组有db-a到db-f共6台主机
[webservers]
www[01:50].example.com
[databases]
db-[a:f].example.com
```

In YAML:

```
all:
  children:
  	webservers:
      hosts:
        www[01:50].example.com:
    databases:
      hosts:
        db-[a:f].example.com
```

#### 2.1.3 定义主机组嵌套

一个主机组可以包含若干个子主机组：

In INI:

```sh
# 如下示例中，production组包含两个子组，分别为webservers和dbservers，webservers和dbservers组分别包含若干主机
[webservers]
foo.example.com
bar.example.com

[dbservers]
one.example.com
two.example.com
three.example.com

[production:children]
webservers
dbservers
```

In YAML:

```
all:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
    production:
      children:
        webservers:
        dbservers:
```

#### 2.1.4 添加主机变量

不同ansible版本，行为控制变量名称可能不同，比如以前版本中端口号的行为变量是`ansible_ssh_port`

下面是常见的行为变量：



![image-20210309153531453](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210309153531453.png)

In INI:

```
[atlanta]
host1 http_port=80 maxRequestsPerChild=808 ansible_port=5555 ansible_host=192.0.2.50
host2 http_port=303 maxRequestsPerChild=909
```

In YAML:

```
atlanta:
  host1:
    http_port: 80
    maxRequestsPerChild: 808
    ansible_port: 5555
    ansible_host: 192.0.2.50
  host2:
    http_port: 303
    maxRequestsPerChild: 909
```

#### 2.1.5 添加组变量

In INI:

```
[atlanta]
host1
host2

[atlanta:vars]
ntp_server=ntp.atlanta.example.com
proxy=proxy.atlanta.example.com
```

In YAML:

```
atlanta:
  hosts:
    host1:
    host2:
  vars:
    ntp_server: ntp.atlanta.example.com
    proxy: proxy.atlanta.example.com
```

**集成变量值**

In INI:

```
[atlanta]
host1
host2

[raleigh]
host2
host3

[southeast:children]
atlanta
raleigh

[southeast:vars]
some_server=foo.southeast.example.com
halon_system_timeout=30
self_destruct_countdown=60
escape_pods=2

[usa:children]
southeast
northeast
southwest
northwest
```

In YAML:

```
all:
  children:
    usa:
      children:
        southeast:
          children:
            atlanta:
              hosts:
                host1:
                host2:
            raleigh:
              hosts:
                host2:
                host3:
          vars:
            some_server: foo.southeast.example.com
            halon_system_timeout: 30
            self_destruct_countdown: 60
            escape_pods: 2
        northeast:
        northwest:
        southwest:
```

#### 2.1.6 组织主机和组变量(配置单独变量文件host_vars和group_vars)

尽管可以将变量存储在主清单文件中，但是存储单独的主机变量和组变量文件可以帮助您更轻松地组织变量值。 主机和组变量文件必须使用YAML语法。 有效的文件扩展名包括“ .yml”，“。yaml”，“。json”或没有文件扩展名。 

Ansible通过搜索相对于清单文件或剧本文件的路径来加载主机和组变量文件。 如果`/etc/ansible/hosts`上的清单文件包含名为“ foosball”的主机，该主机属于“ raleigh”和“ webservers”两个组，则该主机将在以下位置的YAML文件中使用变量：

```
/etc/ansible/group_vars/raleigh # can optionally end in '.yml', '.yaml', or '.json'
/etc/ansible/group_vars/webservers
/etc/ansible/host_vars/foosball
```

例如，如果按数据中心将清单中的主机分组，并且每个数据中心使用其自己的NTP服务器和数据库服务器，则可以创建一个名为`/etc/ansible/group_vars/raleigh`的文件来存储raleigh组的变量：

```
---
ntp_server: acme.example.org
database_server: storage.example.org
```

再来总结一下group_vars/, host_vars/的存放位置：

(1).inventory文件的同目录

(2).playbook文件的同目录

### 2.2 选择主机与组(hosts指令)

在前面定义Inventory的时候，我们会把所有被管理主机通过主机组的方式定义到Inventory当中，但是当我们实际使用的时候，可能只需要对某一主机或主机组进行操作，这个时候就需要通过匹配的方式指定某一特定主机或主机组。

在此之间，我们先定义一个主机清单示例：

```sh
srv1.example.com
srv2.example.com
s1.lab.example.com
s2.lab.example.com

[web]
jupiter.lab.example.com
saturn.example.com

[db]
db1.example.com
db2.example.com
db3.example.com

[lb]
lb1.lab.example.com
lb2.lab.example.com

[boston]
db1.example.com
jupiter.lab.example.com
lb2.lab.example.com

[london]
db2.example.com
db3.example.com
file1.lab.example.com
lb1.lab.example.com

[dev]
web1.lab.example.com
db3.example.com

[stage]
file2.example.com
db2.example.com

[prod]
lb2.lab.example.com
db1.example.com
jupiter.lab.example.com

[function:children]
web
db
lb
city

[city:children]
boston
london
environments

[environments:children]
dev
stage
prod
new

[new]
172.25.252.23
172.25.252.44
```

使用更为专业的`ansible-inventory`命令来查看主机组信息

```shell
 # 树状形式展开主机列表
 ansible-inventory all --graph
 # 同时带上变量
 ansible-inventory all --graph --vars
```

#### 2.2.1 匹配所有主机

可以通过`all`或者`*`来指定匹配所有主机，通过如下指令查看`all`匹配到的主机：

```sh
# ansible all --list-hosts
  hosts (16):
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    jupiter.lab.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
    lb1.lab.example.com
    lb2.lab.example.com
    file1.lab.example.com
    web1.lab.example.com
    file2.example.com
    172.25.252.23
    172.25.252.44
    172.25.252.32
```

#### 2.2.2 匹配指定的主机或主机组

1. 匹配单个组

```sh
# ansible prod --list-hosts
  hosts (3):
    lb2.lab.example.com
    db1.example.com
    jupiter.lab.example.com
```

2. 匹配单个主机

```sh
# ansible db2.example.com --list-hosts
  hosts (1):
    db2.example.com
```

3. 匹配多个主机

```
# ansible 'lb1.lab.example.com,s1.lab.example.com,db1.example.com' --list-hosts  
  hosts (3):
    lb1.lab.example.com
    s1.lab.example.com
    db1.example.com
```

4. 匹配多个组

```sh
# ansible 'london,boston' --list-hosts
  hosts (7):
    db2.example.com
    db3.example.com
    file1.lab.example.com
    lb1.lab.example.com
    db1.example.com
    jupiter.lab.example.com
    lb2.lab.example.com
```

5. 匹配不属于任何组的主机

```sh
# ansible ungrouped --list-hosts
  hosts (4):
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
```

#### 2.2.4 通配符匹配

1. 匹配'*.example.com'：

```sh
# ansible '*.example.com' --list-hosts
  hosts (14):
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    jupiter.lab.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
    lb1.lab.example.com
    lb2.lab.example.com
    file1.lab.example.com
    web1.lab.example.com
    file2.example.com
```

2. 匹配`172.25.*`的主机：

```
# ansible '172.25.*' --list-hosts                         
  hosts (3):
    172.25.252.23
    172.25.252.44
    172.25.252.32
```

3. 匹配以`s`开头的主机及主机组：

```
# ansible 's*' --list-hosts
  hosts (7):
    file2.example.com
    db2.example.com
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    saturn.example.com
```

#### 2.2.5  通配符组合匹配

1. 匹配包含`*.example.com`但不包含`*.lab.example.com`的主机：

```
# ansible '*.example.com,!*.lab.example.com' --list-hosts  
  hosts (7):
    srv1.example.com
    srv2.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
    file2.example.com
```

2. 匹配包含prod以及172开头、包含lab关键字的主机或组

```
# ansible 'prod,172*,*lab*' --list-hosts
  hosts (11):
    lb2.lab.example.com
    db1.example.com
    jupiter.lab.example.com
    172.25.252.23
    172.25.252.44
    172.25.252.32
    s1.lab.example.com
    s2.lab.example.com
    lb1.lab.example.com
    file1.lab.example.com
    web1.lab.example.com
```

3. 匹配属于db组同时还属于london组的主机：

```
# ansible 'db,&london' --list-hosts
  hosts (2):
    db2.example.com
    db3.example.com
```

4. 匹配在london组或者boston组，还必须在prod组中且必须不在lb组中的主机：

```sh
# ansible 'boston,london,&prod,!lb' --list-hosts
  hosts (2):
    db1.example.com
    jupiter.lab.example.com
```

#### 2.2.6 正则表达式匹配

在开头的地方使用”~”，用来表示这是一个正则表达式:

```sh
# ansible '~(s|db).*example\.com' --list-hosts
  hosts (8):
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
```

#### 2.2.7 通过`--limit`或`-l`明确指定主机或组

默认情况下，所有被ansible或ansible-playbook选中的主机都会执行任务，但是可以使用命令行的--limit pattern选项来筛选哪些主机执行任务哪些主机不执行任务。

这里需注意一点：即使使用了--limit选项，ansible或ansible-playbook命令也总是会解析Inventory中的所有主机，只不过这两个命令可以从解析的inventory结果中选择部分要执行任务的节点(比如通过hosts指令)。

所以，总结下这里涉及到的解析和筛选节点的过程：

```
解析inventory --> play的hosts指令 --> limit选项
```



1. 通过`--limit`在选定的组中明确指定主机：

```
# ansible ungrouped  --limit srv1.example.com --list-hosts
  hosts (1):
    srv1.example.com
```

2. 通过`--limit`参数，还可以指定一个文件，该文件中定义明确指定的主机的列表，定义一个retry_hosts.txt如下：

```sh
srv1.example.com
```

再次执行ansible指令如下：

```sh
# ansible ungrouped  --limit @retry_hosts.txt --list-hosts
  hosts (1):
    srv1.example.com
```

## 3 动态Inventory

这部分一般会结合 CMDB 资管系统、云计算平台等获取主机信息。由于主机资源一般会动态的进行增减，而这些系统一般会智能更新。我们可以通过这些工具提供的 API 或者接入库查询等方式返回主机列表。

比如为了结合资产管理系统（CMDB），所以要使用到动态获取 inventory 的方法，这样可以省去配置 ansible 服务端的 hosts，所有的客户端 IP、帐号、密码、端口都可以从 CMDB 中获取到。

只要你的脚本输出格式是满足要求的 JSON，这样就可以成为一个动态的资产生成器。

### 3.1 脚本规约

用于生成 JSON 的脚本对实现语言没有要求，它可以是一个可执行脚本、二进制文件，或者其他任何可以运行文件，但是必须输出为 JSON 格式，同时必须支持两个参数：`--list` 和 `--host `。

- `--list`：用于返回所有的主机组信息，每个组所包含的主机列表 `hosts`、所含子组列表 `children`、主机组变量列表 `vars` 都应该是字典形式的，`_meta` 用来存放主机变量。

- `--host `：返回指定主机的变量列表，或者返回一个空的字典脚本实现

### 3.2 脚本实现

一个参考实现框架如下：

```python
#!/usr/bin/env python3
#coding:utf8
import json
import sys
 
def all():
    info_dict = {
    "all":[
        "10.10.0.109",
        "10.10.0.112"]
    }
    print(json.dumps(info_dict,indent=4))
 
def group():
    host1 = ['10.10.0.112']
    host2 = ['10.10.0.112','10.10.0.109']
    group1 = 'test1'
    group2 = 'test2'
    hostdata = {
        group1:{"hosts":host1},
        group2:{"hosts":host2}
    }
    print(json.dumps(hostdata,indent=4))
 
def host(ip):
    info_dict = {
        "10.10.0.112": {
            "ansible_ssh_host":"10.10.0.112",
            "ansible_ssh_port":22,
            "ansible_ssh_user":"root",
            "ansible_ssh_pass":"123457"
        },
        "10.10.0.109": {
            "ansible_ssh_host":"10.10.0.109",
            "ansible_ssh_port":22,
            "ansible_ssh_user":"root",
            "ansible_ssh_pass":"xxxx"
        }
    }
    print(json.dumps(info_dict,indent=4))
 
if len(sys.argv) == 2 and (sys.argv[1] == '--list'):
    group()
elif len(sys.argv) == 3 and (sys.argv[1] == '--host'):
    host(sys.argv[2])
else:
    print("Usage: %s --list or --host <hostname>" % sys.argv[0])
    sys.exit(1)
```

### 3.3 结合CMDB动态获取

这个脚本主要是结合底层为`openstack`的私有云中的mysql实现的

```python
#!/usr/bin/env python3
# coding:utf-8

import pymysql
import json
import sys

conn = pymysql.connect(
    host="192.168.*.*",
    user="root",
    password="****",
    database="***",
    charset="utf8")


def get_result(sql):
    try:
        with conn.cursor() as cursor:
            cursor.execute(sql)
            result = cursor.fetchall()
            return result
    except Exception as e:
        raise e


def get_all_group():
    sql = "SELECT instances.user_id FROM nova.instances GROUP BY instances.user_id"
    group_list = get_result(sql)
    return group_list


def group_sql(group):
    if group == "all":
        sql = """SELECT ipallocations.`ip_address`
        FROM nova.instances JOIN  nova.`instance_system_metadata`  JOIN neutron.`ports` JOIN neutron.`ipallocations` 
        ON instances.uuid=instance_system_metadata.`instance_uuid` AND  instances.uuid=ports.device_id AND ports.id=ipallocations.port_id 
        WHERE  instances.vm_state = 'active' 
        GROUP BY ipallocations.`ip_address` 
        ORDER BY ipallocations.`ip_address`"""
    else:
        sql = """SELECT ipallocations.`ip_address`
        FROM nova.instances JOIN  nova.`instance_system_metadata`  JOIN neutron.`ports` JOIN neutron.`ipallocations` 
        ON instances.uuid=instance_system_metadata.`instance_uuid` AND  instances.uuid=ports.device_id AND ports.id=ipallocations.port_id 
        WHERE instances.user_id = "{}"
        AND instances.vm_state = 'active' 
        GROUP BY ipallocations.`ip_address` 
        ORDER BY ipallocations.`ip_address`
        """.format(group)
    return sql


def group_list():
    big_dict = {}
    groups = get_all_group()
    for group in groups:
        group_name = group[0]
        sql = group_sql(group_name)
        result = get_result(sql)
        host_list = []
        for host in result:
            host_list.append(host[0])
        if group_name == "99de4a68d74748eeb17708ae0d17e386":
            big_dict["bes"] = {"hosts": host_list}
        elif group_name == "103e9393fc1d4b22abf7d15651409396":
            big_dict["csp"] = {"hosts": host_list}
        elif group_name == "364e0a4530f64b7b890856abd93426b6":
            big_dict["h5"] = {"hosts": host_list}
        else:
            big_dict["unknown"] = {"hosts": host_list}

    print(json.dumps(big_dict, indent=4))


def host_list(hostip):
    host_dict = {}
    # sql = """SELECT ip,port,username from nova.instances where ip="{}";""".format(hostip)
    # result = get_result(sql)
    # for host in result:
    #     host_ip = host[0]
    #     ssh_port = host[1]
    #     ssh_user = host[2]
    #     host_dict[hostip] = {"ansible_ssh_host": host_ip,
    #                      "ansible_ssh_port": ssh_port, "ansible_ssh_user": ssh_user}
    host_dict[hostip] = {"ansible_ssh_host": hostip,
                         "ansible_ssh_port": 22, "ansible_ssh_user": "root"}
    print(json.dumps(host_dict, indent=4))


def main():
    if len(sys.argv) == 2 and sys.argv[1] == "--list":
        group_list()
    elif len(sys.argv) == 3 and sys.argv[1] == "--host":
        host_list(sys.argv[2])
    else:
        print("Usage: %s --list or --host <hostname>" % sys.argv[0])
        sys.exit(1)


if __name__ == "__main__":
    main()
    conn.close()
```

### 3.4 使用

使用方法和静态 inventory 类似：

```sh
# 可以指定组
$ ansible -i dynamic_investory.py all --list-hosts
  hosts (3):
    127.0.0.1
    10.10.0.112
    10.10.0.109

# 可以指定主机
$ ansible -i dynamic_investory.py 127.0.0.1 --list-hosts
  hosts (1):
    127.0.0.1
```

## 4 临时添加节点：add_host模块

除了静态和动态inventory可以指定远程被控节点的信息，还有个比较特殊的模块add_host，它可以在任务执行时临时添加主机节点。

add_host用法非常简单，只有两个参数：name和groups，分别定义主机名和所在主机组，其中groups参数可以是一个列表，表示主机可以添加到多个组中。如果还有其它参数，则均被当作变量赋值。

```
- name: add new host to nginx and apache
  add_host:
    name: 192.168.200.34
    groups:
      - nginx
      - apache
    ansible_port: 22
    my_var: "hello world"
```

add_host模块是一个比较特殊的模块，它在playbook运行时添加主机，有以下几个注意事项：

(1).新添加的主机在当前play中无效，只在之后的play中有效

(2).它添加的主机只存在于内存中，Ansible退出之后就消失

## 5 group_by运行时临时设置主机组

group_by和add_host功能是类似的，group_by用于临时设置主机组。

group_by有两个参数：

(1).key：新设置的分组名

(2).parents：(可选参数)新增分组的父组

例如，当前的inventory如下：

```
[nginx]
192.168.200.42

[php]
192.168.200.43

[mysql]
192.168.200.44

[dev:children]
nginx
php
mysql
```

其中并没有"CentOS 7"和"CentOS 6"这两个主机组。现在想要在playbook运行的时候去设置这两个主机组。

```
---
- name: set a new group
  hosts: all
  gather_facts: true
  tasks:
    - name: set new group
      group_by:
        key: "{{ansible_distribution}}_{{ansible_distribution_major_version}}"
        parents: "CentOS"

- name: use new group
  hosts: CentOS
  gather_facts: false
  tasks:
    - name: ping CentOS
      ping:
```

上面示例中gather_facts设置为true，因为group_by任务中使用了两个需要它收集来的变量：ansible_distribution和ansible_distribution_major_version。

ansible_distribution变量保存的是系统的发型名称，比如CentOS、RedHat等。ansible_distribution_major_version变量保存的是系统的主版本号，比如CentOS 7.2时返回主版本号7。关于gather_facts，会在稍后的进阶内容中详细介绍。

所以key参数渲染后的值(也即新增组的组名)应当类似于CentOS_6、CentOS_7，而且它们都是CentOS的子组。

> 参考链接：
>
> https://www.jianshu.com/p/71d6700fbe79
>
> https://blog.csdn.net/qq_23191379/article/details/90416992
>
> https://blog.51cto.com/cloumn/blog/1542
