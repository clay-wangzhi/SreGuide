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
    * [4.7 Jinja2 模板](jinja2.md)
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

### Ansible playbook 知识点

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
