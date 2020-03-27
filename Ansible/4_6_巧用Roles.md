```
roles/             \\ ansible所有的信息都放到此目录下面对应的目录中
└── nginx          \\ 角色名称
    ├── default    \\ 为当前角色设定默认变量时使用此目录，应当包含一个main.yml文件；
    ├── files      \\ 存放有copy或script等模块调用的文件
    ├── handlers   \\ 此目录应当包含一个main.yml文件，用于定义各角色用到的各handler
    ├── meta       \\ 应当包含一个main.yml，用于定义角色的特殊设定及其依赖关系；1.3及以后版本支持
    ├── tasks      \\ 至少包含一个名为main.yml的文件，定义了此角色的任务列表，可使用include指令
    ├── templates  \\ template模块会自动在此目录中寻找Jinja2模板文件
    └── vars       \\ 用于定义此角色用到的变量
```

```
ansible-playbook -i /root/xxx.cfg  /root/app/main.yml  --limit "lala_xxx" -e "user=wawo"

解析：
-i         指定要运行的配置文件
--limit    指定运行的ip地址
-e         指定运行的外部参数
运行的控制 YAML 文件为： /root/app/main.yml
---
- hosts: all
  roles:
    - xxx

hosts指定所有(all)的主机，但是由于在外部已经指定了主机的配置，所以all由外部指定参数来进行
roles指定要执行的具体剧本
roles的任务执行顺序
### 首先执行meta下的main.yml文件内容     可以设置该role和其它role之前的关联关系。 dependencies
### 然后执行tasks下的main.yml文件内容
### 用到的变量，会直接加载defaults/vars目录下的main.yml文件
### 用到的需要拷贝到远程机器的文件，会放到files目录下
### 用到模板文件，会放到 templates 目录下
### 在执行的task中，使用了notify后，会调用 handlers 目录下的main.yml文件
```

```
记录一些基本的使用模块
1、ansible中的include, include_tasks 和 import_tasks 的差别
include 被 deprecated（不建议使用）了. 建议使用 include_tasks 和 import_tasks

include_tasks
是动态的: 在运行时展开. when只应用一次. 被include的文件名可以使用变量.

import_tasks
是静态的: 在加载时展开. when在被import的文件里的每个task, 都会重新检查一次. 因为是加载时展开的, 文件名的变量不能是动态设定的.
请确保文件名中使用到的变量被定义在vars中、vars_files中、或者extra-vars中，静态的import不支持其他方式传入的变量。

When using static includes, ensure that any variables used in their names are defined in vars/vars_files or extra-vars passed in from the command line. Static includes cannot use variables from inventory sources like group or host vars.
除了上述不同之处，在使用"循环操作"和"条件判断"时，"include_tasks"和"import_tasks"也有很多不同点需要注意，注意点如下。
如果想要对包含的任务列表进行循环操作，则只能使用"include_tasks"关键字，不能使用"import_tasks"关键字，"import_tasks"并不支持循环操作，
也就是说，使用"loop"关键字或"with_items"关键字对include文件进行循环操作时，只能配合"include_tasks"才能正常运行。
when关键字对"include_tasks"和"import_tasks"的实际操作有着本质区别，区别如下：
当对"include_tasks"使用when进行条件判断时，when对应的条件只会应用于"include_tasks"任务本身，当执行被包含的任务时，不会对这些被包含的任务重新进行条件判断。
当对"import_tasks"使用when进行条件判断时，when对应的条件会应用于被include的文件中的每一个任务，当执行被包含的任务时，会对每一个被包含的任务进行同样的条件判断。
```

```
15、pre_tasks/post_tasks
用来设置在执行roles模块之前和之后需要执行的任务
```

# 如何重用Playbook

不能站在巨人肩膀上的编程语言不是好语言，支持重用机制会节省重复的调研工作上浪费大量的时间，当然也会提高可维护性。

Playbook支持两种重用机制，一种是重用静态Playbook脚本，另外一种是类似于编程语言中函数的机制。

- include语句 - 重用静态的Playbook脚本，使用起来简单、直接。
- role语言 - Playbook的“函数机制”，使用方法稍复杂、功能强大。是Playbook脚本的共享平台ansible galaxy主要的分享方式。