---
time: 2020-03-20
category: 自动化工具
tags:
  - Ansible
---
# Ansible 学习笔记

Hello Ansible~



## Summary

* [1 初识Ansible](first.md)
* [2 Ansible Inventory 配置详解](inventory.md)
* [3 Ansible Ad-hoc 命令集](ad-hoc.md)
* [3.1 Ansible lineinfile 模块详解](lineinfile.md)
* [4 Ansible Playbook](playbook.md)
    * [4.1 Playbook的结构及handler用法](dir-handler.md)
    * [4.2 Playbook循环语句](playbook-for.md)
    * [4.3 Playbook条件语句](playbook-if.md)
    * [4.4 Playbook高级用法](advanced-playbook.md)
    * [4.5 Playbook之tags](playbook-tags.md)
    * [4.6 巧用Roles](roles.md)
    * [4.7 文件管理模块及Jinja2过滤器](.md)
    * [4.8 yaml 语法](yaml.md)
* [5 Ansible变量](var.md)
    * [5.1 自定义变量](custom.md)
    * [5.2 Fact变量](fact.md)
    * [5.3 魔法变量](magic.md)
    * [5.4 使用lookup生成变量](lookup.md)
    * [5.5 使用vault配置加密](vault.md)
* [6 Ansible使用优化](optimize.md)
* [7 常见问题](qa.md)


## 核心知识点概览

### 目前生产中ansible 的使用场景

* [系统初始化](https://github.com/clay-wangzhi/ansible-role-sysinit)

* [安装配置zabbix](https://wiki.clay-wangzhi.com/10-zabbix/10.2-zabbix-jie-zhu-ansible-an-zhuang)
* [安装配置elk]()
* [安装配置tomcat](https://github.com/clay-wangzhi/ansible-role-tomcat)
* [安装配置mysql](https://github.com/clay-wangzhi/ansible-role-mysql)
* [安装配置jenkins](https://github.com/clay-wangzhi/ansible-role-jenkins)
* [安装配置zookeeper集群](https://github.com/clay-wangzhi/ansible-role-zookeeper)
* [项目升级发布]()
* [安装配置二进制的kubernetes集群](https://github.com/easzlab/kubeasz)

### Ansible 有哪些特性

* Agentless，无客户端
* Serverless，在服务端无需启动任何服务，只需执行命令即可
* 默认使用ssh控制各节点
* 基于模块工作，可以使用任何语言编写模块
* 使用yaml语言定制playbook
* 幂等性，多次操作或多次执行不影响结果

### Ansible 配置文件解析优先级，由高到低依次为

1. ANSIBLE_CONFIG 环境变量指定的配置文件
2. 当前目录下的的ansible.cfg
3. 家目录下的ansible.cfg
4. /etc/ansible/ansible.cfg

### Ansible inventory 知识点

* inventory 主机清单，包含静态inventory和动态inventory
* 要使用多个inventory的功能，需将inventory指定为文件目录（默认为/etc/ansible/hosts文件）
* inventory指定目录时，目录下文件最好不要带有后缀名
* Ansible 默认预定义了两个主机组：`all`分组（所有主机）和`ungrouped`分组（不在分组内的主机）
* inventory可以配置单独的变量文件（host_vars和group_vars）
* hosts指令，匹配主机，匹配多个用''单引号括起来，用逗号分隔，通配符（*，&, !）,正则匹配，以'~'开头
* ansible-inventory命令
  * 树状形式展开主机列表`ansible-inventory all --graph`
  * 同时带上变量`ansible-inventory all --graph --vars`
* 通过`--limit`或`-l`明确指定主机或组
* 临时添加节点`add_host`，临时设置主机组`group_by`

### Ansible-hoc（点对点模式）知识点

* `ansible-doc -l`查看有哪些模块，`ansible-doc -s moudle `查看某个模块的参数，`ansible-doc module`查看该模块更详细的信息

* 命令格式`ansible 主机或组 -m 模块名 -a '模块参数'  ansible参数`

* 4个命令执行模块的区别：

  - command模块：该模块通过-a跟上要执行的命令可以直接执行，不过命令里如果有带有如下字符部分则执行不成功 “ "<", ">", "|", "&" 
  - shell 模块：用法基本和command一样，不和command相同，但是支持解析特殊shell符号
  - raw模块：执行底层shell命令。command和shell模块都是通过目标主机上的python代码启动/bin/sh来执行命令的，raw模块在远程主机上直接启动/bin/sh来执行命令
  - script模块：在远程主机上执行脚本文件，其原理是先将shell 复制到远程主机，再在远程主机上执行

* 常用模块

  * command
  * shell
  * script
  * ping
  * file
  * copy
  * service
  * lineinfile
  * cron
  * debug
  * template

* debug 模块

  用于输出调试一些数据，模块包含如下选项：

  * msg：可以输出字符串，可以输出变量的值，变量调用需加"{{}}"
  * var：只能输出变量的值，变量调用无需加任何东西，只需数据变量名称

  > 注意格式，=号左右没有空格

* lineinfile 模块

  lineinfile模块用于在源文件中插入、删除、替换行，和sed命令的功能类似，也支持正则表达式匹配和替换。

  * path 指定文件
  * line  行内容
  * regexp 正则匹配
  * insertbefore，insertafter 匹配的行前后插入
  * state 状态
  * validate 校验文件格式是否正确
  * regexp和insertXXX结合，regexp参数则充当幂等性判断参数：只有regepx匹配失败时，insertXXX才会插入行

### Ansible playbook 知识点

* playbook、play和task的关系

  * playbook中可以定义一个或多个play
  * 每个play中可以定义一个或多个task

* 可以定义两类特殊的task：pre_tasks和post_tasks

  * pre_tasks表示执行执行普通任务之前执行的任务列表
  * post_tasks表示普通任务执行完之后执行的任务列表

* playbook主要有以下四部分构成

  * Target：用于定义将要执行playbook的远程主机组及远程主机组上的用户，还包括定义通过什么样的方式连接远程主机
  * Variable：定义playbook运行时需要使用的变量
  * Task：定义将要在远程主机上执行的任务列表
  * Handler：定义task执行完成以后需要调用的任务

* 常用命令

  * 校验playbook语法 `ansible-playbook --syntax-check xxx.yml`
  * 测试运行playbook `ansible-playbook -C xxx.yml  `

* 循环语句

  * loop关键字，等价于`with_list`循环列表

* 条件语句

  * when关键字，block关键字，rescue关键字，always关键字
  * fail模块，filed_when，ignore_errors，change_when，assert断言模块
  * any_errors_fatal，max_fail_percentage

* 高级用法

  * 本地执行 `connection: local`
  * 任务委托 `delegate_to`
  * 任务暂停 `wait_for`
  * 滚动执行 `serial`
  * 执行一次 `run_once`
  * 设置环境变量 `environment`
  * 交互式提示 `vars_prompt`

* tag

  * 打tag `tags:`
  * 指定tag执行 `--tags "xxx,xxx"`
  * 排除指定的tag执行 `--skip-tags "xxx,xxx"`
  * 查看所有tag `--list-tags`

* roles目录结构

  ```
  $ ansible-galaxy init first_role
  $ tree first_role/
  first_role/            \\ 角色名称
  ├── defaults           \\ 为当前角色设定默认变量时使用此目录，应当包含一个main.yml文件；
  │   └── main.yml        
  ├── files              \\ 存放有copy或script等模块调用的文件
  ├── handlers           \\ 此目录应当包含一个main.yml文件，用于定义各角色用到的各handler
  │   └── main.yml
  ├── meta               \\ 应当包含一个main.yml，用于定义角色的特殊设定及其依赖关系；1.3及以后版本支持
  │   └── main.yml
  ├── README.md
  ├── tasks              \\ 至少包含一个名为main.yml的文件，定义了此角色的任务列表
  │   └── main.yml
  ├── templates          \\ template模块会自动在此目录中寻找Jinja2模板文件
  ├── tests
  │   ├── inventory
  │   └── test.yml
  └── vars              \\ 应当包含一个main.yml，用于定义此角色用到的变量
      └── main.yml
  ```

* playbook 调用格式 `ansible-playbook -i /etc/ansible/xxx.yml  /etc/ansbile/playbooks/xx.yml  --limit "xxx" -e "key=xxx"`

* roles 的任务执行顺序

  1. 首先执行meta下的main.yml文件内容     可以设置该role和其它role之前的关联关系。 dependencies
  2. gather_facts任务
  3. pre_tasks指令中的任务
  4. pre_tasks中触发的所有handler
  5. roles指令加载的Role,执行tasks下的main.yml文件内容
  6. tasks指令中的任务
  7. roles和tasks中触发的所有handler, 使用了notify后，会调用 handlers 目录下的main.yml文件
  8. post_tasks指令中的任务
  9. post_tasks中触发的所有handler

* playbook 静态加载和动态加载

  * roles、include、import_xxx同属一类，它们都是静态加载，都在playbook解析阶段加载文件
  * include_xxx属于另一类，是动态加载，遇到指令的时候临时去加载文件
  * 要对包含的任务列表进行循环操作，则只能使用`include_tasks`关键字，不能使用`import_tasks`关键字，`import_tasks`并不支持循环操作
  * 使用include_tasks时，这个指令自身占用一个任务，使用import_tasks的时候，这个指令自身没有任务，它所在的任务会在解析playbook的时候被其加载的子任务覆盖
  * 无法使用--list-tags列出include_xxx中的tags，无法使用--list-tasks列出include_xxx中的任务，因为它们都是临时动态加载的

* jinja2

### Ansible 变量 知识点

* 变量作用域

  * 全局作用域：Ansible配置文件、环境变量、命令行选项-e,--extra-vars设置的变量都是全局变量
  * Play作用域：整个Play中都有效的变量，vars_files、vars_prompt、play级别的vars以及Role的变量，它们都是play级别的变量
  * 主机变量：绑定在各主机上的变量，各种方式定义的inventory变量、Facts信息变量(这个就划分在这吧)、set_fact、register、include_vars都是主机变量
  * 任务变量：只在当前任务中生效的变量，task级别的vars定义的变量属于任务变量
  * block变量：只在当前block内生效，block级别的vars定义的变量属于block变量
  * 预定义特殊变：这些变量由Ansible自身内部维护，有些是全局变量，有些是play变量，有些是主机变量，所以不方便对它们分类

* 主机变量

  * 内置主机变量`ansible_host`、`ansible_port`、`ansible_user	`、`ansible_password`、`ansible_connection`等

  * 自定义主机变量，在主机清单中

    * in INI `hosts1 http_port=80`，

    * in YAML 

      ```
      host1:
        http_port: 80
      ```

  * 自定义组变量，在主机清单中

    * in INI 

      ```
      [atlanta]
      host1
      host2
      
      [atlanta:vars]
      ntp_server=ntp.aliyun.com
      ```

    * in YAML

      ```
      atlanta:
        hosts:
          host1:
          host2:
        vars:
          ntp_server: ntp.aliyun.com
      ```

  * 通过`host_vars`和`group_vars`目录定义变量，需要说明的是，如果主机组定义的变量与主机冲突，主机变量优先级最高

* play 变量

  * 通过vars关键字定义
  * 通过vars_files关键字引入变量文件

* 注册变量 `register`

* Facts 变量

* 内置变量/魔法变量

  * hostvars 所有和主机相关的变量
  * inventory_hostname 当前正在运行task的主机的主机名
  * group_names 组名
  * groups 主机组列表
  * ansible_play_batch（play_hosts/ansible_play_hosts）当前play所涉及的所有主机列表，但连接失败或执行任务失败的节点不会留在此变量中
  * inventory_dir 主机清单所在目录
  * inventory_file 主机清单文件

* lookup 生产变量

  * 语法 `lookup('<plugin_name>', 'plugin_argument')`
  * 从命令执行结果读取(pipe插件)
  * 从磁盘文件读取(file/fileglob插件)

### Ansible 使用优化

* 加大forks的值

* 开启ssh长连接为5天 ，要求ssh为5.6版本，查看版本ssh -v

  ```
  # cat /etc/ansible/ansible.cfg
  ssh_args = -C -o ControlMaster=auto -o ControlPersist=5d 
  ```

* Shell层次上的优化：将任务分开执行

以下优化，根据实际情况进行修改

* 修改执行策略，改为free 

* 开启pipeling，在不使用sudo的情况下开启pipeling，减少ansible没有传输时的连接数

  ```
  修改ansible.cfg中pipelining=False改为True
  ```

* 修改facts收集行为，`gather_facts: no` ，或者添加缓存，注意添加缓存后有坑，比如创建带有时间的文件夹

* 使Ansible异步执行任务，async和poll指令

* 第三方策略插件：Mitogen for Ansible

### Ansible 常见问题

* server端未安装 sshpass
* 将host_key_checking设为False，关闭密码检查

### YAML 文件知识点

* YAML的基本语法规则如下：

  (1).使用缩进表示层级关系

  (2).缩进时不允许使用Tab键，只允许使用空格

  (3).缩进的空格数目不重要，只要相同层级的元素左对齐即可

  (4).yaml文件以"---"作为文档的开始，以表明这是一个yaml文件

  (5).# 表示注释，从这个字符一直到行尾，都会被解析器忽略

  (6).字符串不用加引号，但在可能产生歧义时，需加引号(单双引号皆可)，比如引用变量时

  (7).布尔值非常灵活，不分区大小写的true/false、yes/no、on/off、y/n、0和1都允许

* YAML支持三种数据结构：

  (1).对象：key/value格式，也称为哈希结构、字典结构或关联数组

  (2).数组：也称为列表

  (3).标量(scalars)：单个值
