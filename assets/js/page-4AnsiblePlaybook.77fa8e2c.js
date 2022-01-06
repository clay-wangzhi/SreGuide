(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{938:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_4-ansible-playbook"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-ansible-playbook"}},[s._v("#")]),s._v(" 4 Ansible Playbook")]),s._v(" "),n("h2",{attrs:{id:"_1-ansible-playbook简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-ansible-playbook简介"}},[s._v("#")]),s._v(" 1 Ansible Playbook简介")]),s._v(" "),n("p",[s._v("Ansible 靠ansible命令是撑不起自动化管理这把大伞的，Ansible真正强大的是playbook，它才是Ansible撬动自动化管理的结实杠杆。")]),s._v(" "),n("p",[s._v("ansbile-playbook是一系列ansible命令的集合，利用yaml 语言编写。playbook命令根据自上而下的顺序依次执行。同时，playbook开创了很多特性,它可以允许你传输某个命令的状态到后面的指令,如你可以从一台机器的文件中抓取内容并附为变量,然后在另一台机器中使用,这使得你可以实现一些复杂的部署机制,这是ansible命令无法实现的。")]),s._v(" "),n("p",[s._v("playbook通过ansible-playbook命令使用,它的参数和ansible命令类似,如参数-k(–ask-pass) 和 -K (–ask-sudo) 来询问ssh密码和sudo密码,-u指定用户,这些指令也可以通过规定的单元写在playbook 。")]),s._v(" "),n("p",[s._v("ansible-playbook的简单使用方法: ansible-playbook example-play.yml 。")]),s._v(" "),n("h3",{attrs:{id:"playbook、play和task的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#playbook、play和task的关系"}},[s._v("#")]),s._v(" playbook、play和task的关系")]),s._v(" "),n("ul",[n("li",[s._v("playbook中可以定义一个或多个play")]),s._v(" "),n("li",[s._v("每个play中可以定义一个或多个task")]),s._v(" "),n("li",[s._v("每个play都需要通过hosts指令指定要执行改play的目标主机")]),s._v(" "),n("li",[s._v("每个play都可以设置一些该play的环境控制行为，比如定义play级别的变量")])]),s._v(" "),n("blockquote",[n("p",[s._v("其中还可以定义两类特殊的task：pre_tasks和post_tasks")]),s._v(" "),n("ul",[n("li",[s._v("pre_tasks表示执行执行普通任务之前执行的任务列表")]),s._v(" "),n("li",[s._v("post_tasks表示普通任务执行完之后执行的任务列表")])])]),s._v(" "),n("h2",{attrs:{id:"_2-playbook基本语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-playbook基本语法"}},[s._v("#")]),s._v(" 2 Playbook基本语法")]),s._v(" "),n("p",[s._v("下面是一个简单的ansible-playbook示例，可以了解其构成:")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat user.yml")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" create user\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" all\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("remote_user")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gather_facts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("vars")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tasks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" create  user\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' name="'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" user "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("配置项说明：")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("name")]),s._v("：对该playbook实现的功能做一个概述，后面执行过程中，会打印 name变量的值")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("hosts")]),s._v("：指定对哪些被管理机进行操作；")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("remote_user")]),s._v("：指定在远程被管理机上执行操作时使用什么用户，如不指定，则使用ansible.cfg中配置的remote_user")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("gather_facts")]),s._v("：指定在执行任务之前，是否先执行setup模块获取主机相关信息，如未用到，可不指定")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("vars")]),s._v("：定义后续任务中会使用到的变量，如未用到，可不指定")])]),s._v(" "),n("li",[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("tasks\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("：定义具体需要执行的任务")]),s._v(" "),n("ul",[n("li",[s._v("name：对任务的描述，在执行过程中会打印出来。")]),s._v(" "),n("li",[s._v("user：指定调用user模块；\n"),n("ul",[n("li",[s._v("name：user模块里的一个参数，用于指定创建的用户名称")])])])])])]),s._v(" "),n("p",[s._v("同样，如果想实现把这个新增的用户删除，只需将该playbook文件的最后一行替换为如下行再执行相应的playbook即可：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('user: name="{{ user }}" state=absent remove=yes\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_3-playbook简单示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-playbook简单示例"}},[s._v("#")]),s._v(" 3 Playbook简单示例")]),s._v(" "),n("p",[s._v("下面通过playbook管理一个httpd服务器来简单了解下playbook的应用：")]),s._v(" "),n("ol",[n("li",[s._v("创建playbook")])]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat manage_apache.yml")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" play to setup web server\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" all\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tasks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" latest httpd version installed\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("yum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" httpd\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("state")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" latest\n        \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" correct index.html is present\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("copy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("src")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" files/index.html\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/www/html/index.html\n        \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" start httpd service\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" httpd\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("state")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" started\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("ol",[n("li",[s._v("执行playbook")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# ansible-playbook  manage_apache.yml \n\nPLAY [play to setup web server] *********************************************************************************************************************************************\n\nTASK [Gathering Facts] ******************************************************************************************************************************************************\nok: [10.1.61.187]\n\nTASK [latest httpd version installed] ***************************************************************************************************************************************\nchanged: [10.1.61.187]\n\nTASK [correct index.html is present] ****************************************************************************************************************************************\nchanged: [10.1.61.187]\n\nTASK [start httpd service] **************************************************************************************************************************************************\nchanged: [10.1.61.187]\n\nPLAY RECAP ******************************************************************************************************************************************************************\n10.1.61.187                : ok=4    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h2",{attrs:{id:"_4-ansible-playbook常用选项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-ansible-playbook常用选项"}},[s._v("#")]),s._v(" 4 ansible-playbook常用选项")]),s._v(" "),n("h3",{attrs:{id:"_4-1-打印详细信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-打印详细信息"}},[s._v("#")]),s._v(" 4.1 打印详细信息")]),s._v(" "),n("ul",[n("li",[s._v("-v：打印任务运行结果")]),s._v(" "),n("li",[s._v("-vv：打印任务运行结果以及任务的配置信息")]),s._v(" "),n("li",[s._v("-vvv：包含了远程连接的一些信息")]),s._v(" "),n("li",[s._v("-vvvv：Adds extra verbosity options to the connection plug-ins,including the users being used in the managed hosts to execute scripts, and what scripts have been executed")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# ansible-playbook  manage_apache.yml  -vv\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_4-2-校验playbook语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-校验playbook语法"}},[s._v("#")]),s._v(" 4.2  校验playbook语法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# ansible-playbook --syntax-check  manage_apache.yml   \n\nplaybook: manage_apache.yml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_4-3-测试运行playbook"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-测试运行playbook"}},[s._v("#")]),s._v(" 4.3 测试运行playbook")]),s._v(" "),n("p",[s._v("通过-C选项可以测试playbook的执行情况，但不会真的执行：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# ansible-playbook -C  manage_apache.yml  \n\nPLAY [play to setup web server] *********************************************************************************************************************************************\n\nTASK [Gathering Facts] ******************************************************************************************************************************************************\nok: [10.1.61.187]\n\nTASK [latest httpd version installed] ***************************************************************************************************************************************\nok: [10.1.61.187]\n\nTASK [correct index.html is present] ****************************************************************************************************************************************\nok: [10.1.61.187]\n\nTASK [start httpd service] **************************************************************************************************************************************************\nok: [10.1.61.187]\n\nPLAY RECAP ******************************************************************************************************************************************************************\n10.1.61.187                : ok=4    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"_4-4-playbook模块参数的传递方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-playbook模块参数的传递方式"}},[s._v("#")]),s._v(" 4.4 playbook模块参数的传递方式")]),s._v(" "),n("p",[s._v("copy模块的参数传递方式如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("tasks:\n  - name: copy /etc/passwd to /tmp\n    copy: src=/etc/passwd dest=/tmp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这是标准的yaml语法，参数部分src=/etc/passwd dest=/tmp是一个字符串，当作copy对应的值。根据4_8 yaml介绍的yaml语法，还可以换行书写。有以下几种方式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\n- name: first play\n  hosts: nginx\n  gather_facts: false\n  tasks:\n  - copy:\n    src=/etc/passwd dest=/tmp\n\n  - copy:\n    src=/etc/passwd\n    dest=/tmp\n\n  - copy: >\n    src=/etc/passwd\n    dest=/tmp\n\n  - copy: |\n    src=/etc/passwd\n    dest=/tmp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("除此之外，Ansible还提供了另外两种传递参数的方式：")]),s._v(" "),n("p",[s._v("(1).将参数和参数值写成key: value的方式")]),s._v(" "),n("p",[s._v("(2).使用args参数声明接下来的是参数")]),s._v(" "),n("p",[s._v("通过示例便可对其用法一目了然：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\n- name: first play\n  hosts: nginx\n  gather_facts: false\n  tasks:\n  - name: copy1\n    copy:\n      src: /etc/passwd\n      dest: /tmp\n\n  - name: copy2\n    copy:\n    args:\n      src: /etc/passwd\n      dest: /tmp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("大多数时候，使用何种方式传递参数并无关紧要，只要个人觉得可读性高、方便、美观即可。")]),s._v(" "),n("h2",{attrs:{id:"_5-multiple-plays"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-multiple-plays"}},[s._v("#")]),s._v(" 5 Multiple Plays")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# This is a simple playbook with two plays\n\n- name: first play\n  hosts: web.example.com\n  tasks:\n    - name: first task\n      yum:\n        name: httpd\n        status: present\n    - name: second task\n      service:\n        name: httpd\n        state: started\n    \n- name: second play\n  hosts: db.example.com\n  tasks:\n    - name: first task\n      yum:\n        name: mariadb-server\n        status: present\n    - name: second task\n      service:\n        name: mariadb\n        state: started\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("blockquote",[n("p",[s._v("参考链接：")]),s._v(" "),n("p",[s._v("https://www.cnblogs.com/breezey/p/8811250.html")]),s._v(" "),n("p",[s._v("https://blog.51cto.com/cloumn/blog/1544")])])])}),[],!1,null,null,null);a.default=e.exports}}]);