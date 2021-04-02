## 1 简介

我们在编写playbook的时候，不可避免的要执行一些重复性操作，比如指安装软件包，批量创建用户，操作某个目录下的所有文件等。正如我们所说，ansible一门简单的自动化语言，所以流程控制、循环语句这些编程语言的基本元素它同样都具备。

loop循环，它是在Ansible 2.5版本中新添加的循环结构，等价于with_list。大多数时候，with_xxx的循环都可以通过一定的手段转换成loop循环，所以从Ansible 2.5版本之后，原来经常使用的with_items循环都可以尝试转换成loop。

下面我们简单的说一说Playbook中循环语句。

## 2 loop关键字说明

在playbook中使用循环，直接使用loop关键字即可。

如下示例，启动httpd和postfilx服务：

```
tasks:
  - name: postfix and httpd are running
    service:
      name: "{{ item }}"
      state: started
    loop:
      - postfix
      - httpd
```

也可以将loop循环的列表提前赋值给一个变量，然后在循环语句中调用：

```
#cat test_services.yml
test_services:
  - postfix
  - httpd

# cat install_pkgs.yml 
- name: start services
  hosts: test
  vars_files:
    - test_services.yml
  tasks:
    - name: postfix and httpd are running
      service:
        name: "{{ item }}"
        state: started
      loop: "{{ test_services }}"
```

下面是一个循环更复杂类型数据的示例：

```
# cat test_loop.yml 
- name: test loop
  hosts: test
  tasks:
  - name: add www group
    group: 
      name: www
  - name: add several users
    user: 
      name: "{{ item.name }}"
      state: present 
      groups: "{{ item.groups }}"
    loop:
      - { name: 'testuser1', groups: 'wheel' }
      - { name: 'testuser2', groups: 'www' }
```

## 3 循环的控制：loop_control

后续补充

## 3 在循环语句中注册变量

下面是一个register的变量在循环中使用的例子：

```
# cat register_loop.yml 
- name: registered variable usage as a loop list
  hosts: test
  tasks:
      - name: ensure /mnt/bkspool exists
        file:
          path: /mnt/bkspool
          state: directory
      - name: retrieve the list of home directories
        command: ls /home
        register: home_dirs
      - name: Show home_dirs results
        debug:
          var: home_dirs.stdout_lines
      - name: add home dirs to the backup spooler
        file: 
          path: /mnt/bkspool/{{ item }}
          src: /home/{{ item }}
          state: link
          force: yes
        loop: "{{ home_dirs.stdout_lines }}"
```

在循环语句中注册变量：

```
- name: Loop Register test
  gather_facts: no
  hosts: test
  tasks:
    - name: Looping Echo Task
      shell: "echo this is my item: {{ item }}"
      loop:
        - one
        - two
      register: echo_results
    - name: Show echo_results variable
      debug:
        var: echo_results
```

执行语句，可以看到变量的返回结果为一个字典列表：

```
ok: [10.1.61.187] => {
    "echo_results": {
        "changed": true,
        "msg": "All items completed",
        "results": [
            {
                "ansible_loop_var": "item",
                "changed": true,
                "cmd": "echo this is my item: one",
                "delta": "0:00:00.004905",
                "end": "2019-06-10 00:23:51.814151",
                "failed": false,
                "invocation": {
                    "module_args": {
                        "_raw_params": "echo this is my item: one",
                        "_uses_shell": true,
                        "argv": null,
                        "chdir": null,
                        "creates": null,
                        "executable": null,
                        "removes": null,
                        "stdin": null,
                        "stdin_add_newline": true,
                        "strip_empty_ends": true,
                        "warn": true
                    }
                },
                "item": "one",
                "rc": 0,
                "start": "2019-06-10 00:23:51.809246",
                "stderr": "",
                "stderr_lines": [],
                "stdout": "this is my item: one",
                "stdout_lines": [
                    "this is my item: one"
                ]
            },
            {
                "ansible_loop_var": "item",
                "changed": true,
                "cmd": "echo this is my item: two",
                "delta": "0:00:00.004736",
                "end": "2019-06-10 00:23:52.008981",
                "failed": false,
                "invocation": {
                    "module_args": {
                        "_raw_params": "echo this is my item: two",
                        "_uses_shell": true,
                        "argv": null,
                        "chdir": null,
                        "creates": null,
                        "executable": null,
                        "removes": null,
                        "stdin": null,
                        "stdin_add_newline": true,
                        "strip_empty_ends": true,
                        "warn": true
                    }
                },
                "item": "two",
                "rc": 0,
                "start": "2019-06-10 00:23:52.004245",
                "stderr": "",
                "stderr_lines": [],
                "stdout": "this is my item: two",
                "stdout_lines": [
                    "this is my item: two"
                ]
            }
        ]
    }
}
```

## 4 旧循环语句

在Ansible 2.5以前，playbook通过不同的循环语句以实现不同的循环，这些语句使用`with_`作为前缀。这些语法目前仍然兼容，但在未来的某个时间点，会逐步废弃。

| 循环语句关键字  | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| with_items      | 简单的列表循环                                               |
| with_nested     | 嵌套循环                                                     |
| with_dict       | 循环字典                                                     |
| with_fileglob   | 循环指定目录中的所有文件                                     |
| with_lines      | 循环一个文件中的所有行                                       |
| with_sequence   | 生成一个自增的整数序列，可以指定起始值和结束值以及步长。参数以key=value的形式指定，format指定输出的格式。数字可以是十进制、十六进制、八进制 |
| with_subelement | 遍历子元素                                                   |
| with_together   | 遍历数据并行集合                                             |

### 4.1 with_items

```
- hosts: test
  vars:
    data:
      - user0
      - user1
      - user2
  tasks:
    - name: "with_items"
      debug:
        msg: "{{ item }}"
      with_items: "{{ data }}"
```

### 4.2 with_nested

```
tasks: 
  - name: debug loops
    debug: msg="name is {{ item[0] }}  vaule is {{ item[1] }} num is {{ item[2] }}"
    with_nested:
      - ['alice','bob']
      - ['a','b','c']
      - ['1','2','3']
```

item[0]是循环的第一个列表的值['alice','bob']。item[1]是第二个列表的值；item[2]则是第三个列表的值，以上的执行输出如下：

```
# ansible-playbook with_nested_ex.yml 

PLAY [with_nested test] ******************************************************************************************

TASK [Gathering Facts] *******************************************************************************************
ok: [10.1.61.187]

TASK [debug loops] ***********************************************************************************************
ok: [10.1.61.187] => (item=['alice', 'a', '1']) => {
    "msg": "name is alice  vaule is a num is 1"
}
ok: [10.1.61.187] => (item=['alice', 'a', '2']) => {
    "msg": "name is alice  vaule is a num is 2"
}
ok: [10.1.61.187] => (item=['alice', 'a', '3']) => {
    "msg": "name is alice  vaule is a num is 3"
}
ok: [10.1.61.187] => (item=['alice', 'b', '1']) => {
    "msg": "name is alice  vaule is b num is 1"
}
ok: [10.1.61.187] => (item=['alice', 'b', '2']) => {
    "msg": "name is alice  vaule is b num is 2"
}
ok: [10.1.61.187] => (item=['alice', 'b', '3']) => {
    "msg": "name is alice  vaule is b num is 3"
}
ok: [10.1.61.187] => (item=['alice', 'c', '1']) => {
    "msg": "name is alice  vaule is c num is 1"
}
ok: [10.1.61.187] => (item=['alice', 'c', '2']) => {
    "msg": "name is alice  vaule is c num is 2"
}
ok: [10.1.61.187] => (item=['alice', 'c', '3']) => {
    "msg": "name is alice  vaule is c num is 3"
}
ok: [10.1.61.187] => (item=['bob', 'a', '1']) => {
    "msg": "name is bob  vaule is a num is 1"
}
ok: [10.1.61.187] => (item=['bob', 'a', '2']) => {
    "msg": "name is bob  vaule is a num is 2"
}
ok: [10.1.61.187] => (item=['bob', 'a', '3']) => {
    "msg": "name is bob  vaule is a num is 3"
}
ok: [10.1.61.187] => (item=['bob', 'b', '1']) => {
    "msg": "name is bob  vaule is b num is 1"
}
ok: [10.1.61.187] => (item=['bob', 'b', '2']) => {
    "msg": "name is bob  vaule is b num is 2"
}
ok: [10.1.61.187] => (item=['bob', 'b', '3']) => {
    "msg": "name is bob  vaule is b num is 3"
}
ok: [10.1.61.187] => (item=['bob', 'c', '1']) => {
    "msg": "name is bob  vaule is c num is 1"
}
ok: [10.1.61.187] => (item=['bob', 'c', '2']) => {
    "msg": "name is bob  vaule is c num is 2"
}
ok: [10.1.61.187] => (item=['bob', 'c', '3']) => {
    "msg": "name is bob  vaule is c num is 3"
}

PLAY RECAP *******************************************************************************************************
10.1.61.187 
```

### 4.3 with_dict

```yaml
# 假如有如下变量内容：
users:
  alice:
    name: Alice Appleworth
    telephone: 123-456-7890
  bob:
    name: Bob Bananarama
    telephone: 987-654-3210

# 现在需要输出每个用户的用户名和手机号：
tasks:
  - name: Print phone records
    debug: msg="User {{ item.key }} is {{ item.value.name }} ({{ item.value.telephone }})"
    with_dict: "{{ users }}"
```

### 4.4 with_fileglob

```
- hosts: test
  tasks:
    - name: Make key directory     
      file: 
        path: /root/.sshkeys 
        state: directory 
        mode: 0700 
        owner: root 
        group: root 
        
    - name: Upload public keys     
      copy: 
        src: "{{ item }}"
        dest: /root/.sshkeys
        mode: 0600 
        owner: root 
        group: root  
      with_fileglob:
        - /root/.ssh/*.pub 
        
    - name: Assemble keys into authorized_keys file     
      assemble: 
        src: /root/.sshkeys 
        dest: /root/.ssh/authorized_keys
        mode: 0600 
        owner: root 
        group: root
```

### 4.5 with_lines

with_lines循环结构会让你在控制主机上执行任意命令，并对命令的输出进行逐行迭代。假设我们有一个 文件test.txt包含如下行：

```
Breeze Yan
Bernie Yang
jerry Qing
```

我们可以通过如下方法进行逐行输出：

```
- name: print all names
  debug: msg="{{ item }}"
  with_lines:
    - cat test.txt
```

### 4.6 with_subelement

假如现在需要遍历一个用户列表，并创建每个用户，而且还需要为每个用户配置以特定的SSH key登录。变量文件内容如下：

```
users:
  - name: alice
    authorized:
      - /tmp/alice/onekey.pub
      - /tmp/alice/twokey.pub
    mysql:
        password: mysql-password
        hosts:
          - "%"
          - "127.0.0.1"
          - "::1"
          - "localhost"
        privs:
          - "*.*:SELECT"
          - "DB1.*:ALL"
  - name: bob
    authorized:
      - /tmp/bob/id_rsa.pub
    mysql:
        password: other-mysql-password
        hosts:
          - "db1"
        privs:
          - "*.*:SELECT"
          - "DB2.*:ALL"
```

playbook中定义如下：

```
tasks:
  - user: name={{ item.name }} state=present generate_ssh_key=yes
    with_items: "{{users}}"
  - authorized_key: "user={{ item.0.name }} key='{{ lookup('file', item.1) }}'"
    with_subelements:
     - users
     - authorized
```

也可以遍历嵌套的子列表：

```
- name: Setup MySQL users
  mysql_user: name={{ item.0.name }} password={{ item.0.mysql.password }} host={{ item.1 }} priv={{ item.0.mysql.privs | join('/') }}
  with_subelements:
    - users
    - mysql.hosts
```

### 4.7 with_sequence

```
- hosts: all
  tasks:
    # create groups
    - group: name=evens state=present
    - group: name=odds state=present
    # create some test users
    - user: name={{ item }} state=present groups=evens
      with_sequence: start=0 end=32 format=testuser%02d
    # create a series of directories with even numbers for some reason
    - file: dest=/var/stuff/{{ item }} state=directory
      with_sequence: start=4 end=16 stride=2    # stride用于指定步长
    # a simpler way to use the sequence plugin
    # create 4 groups
    - group: name=group{{ item }} state=present
      with_sequence: count=4
```

### 4.8 with_random_choice

从列表中随机取一个值：

```
- debug: msg={{ item }}
  with_random_choice:
     - "go through the door"
     - "drink from the goblet"
     - "press the red button"
     - "do nothing"
```

### 4.9 do-Util循环

```
- action: shell /usr/bin/foo
  register: result
  until: result.stdout.find("all systems go") != -1
  retries: 5
  delay: 10
```

重复执行shell模块，当shell模块执行的命令输出内容包含"all systems go"的时候停止。重试5次，延迟时间10秒。retries默认值为3，delay默认值为5。任务的返回值为最后一次循环的返回结果。

### 4.10 with_together

示例：

```
- hosts: webservers
  remote_user: root
  vars:
    alpha: [ 'a','b','c','d']
    numbers: [ 1,2,3,4 ]
  tasks:
    - debug: msg="{{ item.0 }} and {{ item.1 }}"
      with_together:
         - "{{ alpha }}"
         - "{{ numbers }}"
# 输出的结果为：
ok: [192.168.1.65] => (item=['a', 1]) => {
    "item": [
        "a",
        1
    ],
    "msg": "a and 1"
}
ok: [192.168.1.65] => (item=['b', 2]) => {
    "item": [
        "b",
        2
    ],
    "msg": "b and 2"
}
ok: [192.168.1.65] => (item=['c', 3]) => {
    "item": [
        "c",
        3
    ],
    "msg": "c and 3"
}
ok: [192.168.1.65] => (item=['d', 4]) => {
    "item": [
        "d",
        4
    ],
    "msg": "d and 4"
}
```

> 参考链接：
>
> https://www.cnblogs.com/breezey/p/10996629.html
>
> https://blog.51cto.com/cloumn/blog/1544