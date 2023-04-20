---
date: 2020-03-20
category: 自动化工具
tag:
  - Ansible
---

# 4 Ansible Playbook

## 1 Ansible Playbook简介

Ansible 靠ansible命令是撑不起自动化管理这把大伞的，Ansible真正强大的是playbook，它才是Ansible撬动自动化管理的结实杠杆。

ansbile-playbook是一系列ansible命令的集合，利用yaml 语言编写。playbook命令根据自上而下的顺序依次执行。同时，playbook开创了很多特性,它可以允许你传输某个命令的状态到后面的指令,如你可以从一台机器的文件中抓取内容并附为变量,然后在另一台机器中使用,这使得你可以实现一些复杂的部署机制,这是ansible命令无法实现的。

playbook通过ansible-playbook命令使用,它的参数和ansible命令类似,如参数-k(–ask-pass) 和 -K (–ask-sudo) 来询问ssh密码和sudo密码,-u指定用户,这些指令也可以通过规定的单元写在playbook 。

ansible-playbook的简单使用方法: ansible-playbook example-play.yml 。

### playbook、play和task的关系

* playbook中可以定义一个或多个play
* 每个play中可以定义一个或多个task
* 每个play都需要通过hosts指令指定要执行改play的目标主机
* 每个play都可以设置一些该play的环境控制行为，比如定义play级别的变量

> 其中还可以定义两类特殊的task：pre_tasks和post_tasks
>
> * pre_tasks表示执行执行普通任务之前执行的任务列表
> *  post_tasks表示普通任务执行完之后执行的任务列表

## 2 Playbook基本语法

下面是一个简单的ansible-playbook示例，可以了解其构成:

```yaml
# cat user.yml
- name: create user
  hosts: all
  remote_user: root
  gather_facts: false
  vars:
    user:"test"
  tasks:
    - name: create  user
      user: name="{{ user }}"
```

配置项说明：

- `name`：对该playbook实现的功能做一个概述，后面执行过程中，会打印 name变量的值

- `hosts`：指定对哪些被管理机进行操作；

- `remote_user`：指定在远程被管理机上执行操作时使用什么用户，如不指定，则使用ansible.cfg中配置的remote_user

- `gather_facts`：指定在执行任务之前，是否先执行setup模块获取主机相关信息，如未用到，可不指定

- `vars`：定义后续任务中会使用到的变量，如未用到，可不指定

- ```
  tasks
  ```

  ：定义具体需要执行的任务

  - name：对任务的描述，在执行过程中会打印出来。
  - user：指定调用user模块；
    - name：user模块里的一个参数，用于指定创建的用户名称

同样，如果想实现把这个新增的用户删除，只需将该playbook文件的最后一行替换为如下行再执行相应的playbook即可：

```
user: name="{{ user }}" state=absent remove=yes
```

## 3 Playbook简单示例

下面通过playbook管理一个httpd服务器来简单了解下playbook的应用：

1. 创建playbook

```yaml
# cat manage_apache.yml
- name: play to setup web server
  hosts: all
  tasks:
    - name: latest httpd version installed
      yum:
        name: httpd
        state: latest
        
    - name: correct index.html is present
      copy: 
        src: files/index.html
        dest: /var/www/html/index.html
        
    - name: start httpd service
      service:
        name: httpd
        state: started
        enabled: true
```

1. 执行playbook

```
# ansible-playbook  manage_apache.yml 

PLAY [play to setup web server] *********************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [latest httpd version installed] ***************************************************************************************************************************************
changed: [10.1.61.187]

TASK [correct index.html is present] ****************************************************************************************************************************************
changed: [10.1.61.187]

TASK [start httpd service] **************************************************************************************************************************************************
changed: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=4    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  
```

## 4 ansible-playbook常用选项

### 4.1 打印详细信息

- -v：打印任务运行结果
- -vv：打印任务运行结果以及任务的配置信息
- -vvv：包含了远程连接的一些信息
- -vvvv：Adds extra verbosity options to the connection plug-ins,including the users being used in the managed hosts to execute scripts, and what scripts have been executed

```
# ansible-playbook  manage_apache.yml  -vv
```

### 4.2  校验playbook语法

```
# ansible-playbook --syntax-check  manage_apache.yml   

playbook: manage_apache.yml
```

> Todo: 测试使用 ansible-lint

### 4.3 测试运行playbook

通过-C选项可以测试playbook的执行情况，但不会真的执行：

```
# ansible-playbook -C  manage_apache.yml  

PLAY [play to setup web server] *********************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [latest httpd version installed] ***************************************************************************************************************************************
ok: [10.1.61.187]

TASK [correct index.html is present] ****************************************************************************************************************************************
ok: [10.1.61.187]

TASK [start httpd service] **************************************************************************************************************************************************
ok: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=4    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
```

### 4.4 playbook模块参数的传递方式

copy模块的参数传递方式如下

```
tasks:
  - name: copy /etc/passwd to /tmp
    copy: src=/etc/passwd dest=/tmp
```

这是标准的yaml语法，参数部分src=/etc/passwd dest=/tmp是一个字符串，当作copy对应的值。根据4_8 yaml介绍的yaml语法，还可以换行书写。有以下几种方式：

```
---
- name: first play
  hosts: nginx
  gather_facts: false
  tasks:
  - copy:
    src=/etc/passwd dest=/tmp

  - copy:
    src=/etc/passwd
    dest=/tmp

  - copy: >
    src=/etc/passwd
    dest=/tmp

  - copy: |
    src=/etc/passwd
    dest=/tmp
```

除此之外，Ansible还提供了另外两种传递参数的方式：

(1).将参数和参数值写成key: value的方式

(2).使用args参数声明接下来的是参数

通过示例便可对其用法一目了然：

```
---
- name: first play
  hosts: nginx
  gather_facts: false
  tasks:
  - name: copy1
    copy:
      src: /etc/passwd
      dest: /tmp

  - name: copy2
    copy:
    args:
      src: /etc/passwd
      dest: /tmp
```

大多数时候，使用何种方式传递参数并无关紧要，只要个人觉得可读性高、方便、美观即可。

## 5 Multiple Plays

```
# This is a simple playbook with two plays

- name: first play
  hosts: web.example.com
  tasks:
    - name: first task
      yum:
        name: httpd
        status: present
    - name: second task
      service:
        name: httpd
        state: started
    
- name: second play
  hosts: db.example.com
  tasks:
    - name: first task
      yum:
        name: mariadb-server
        status: present
    - name: second task
      service:
        name: mariadb
        state: started
```

> 参考链接：
>
> https://www.cnblogs.com/breezey/p/8811250.html
>
> https://blog.51cto.com/cloumn/blog/1544
