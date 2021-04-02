(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{689:function(s,a,n){"use strict";n.r(a);var e=n(1),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_4-4-playbook高级用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-playbook高级用法"}},[s._v("#")]),s._v(" 4.4 Playbook高级用法")]),s._v(" "),n("h2",{attrs:{id:"_1-本地执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地执行"}},[s._v("#")]),s._v(" 1 本地执行")]),s._v(" "),n("p",[s._v("默认情况下，Ansible使用ssh去连接远程主机，但实际上它提供了多种插件来丰富连接方式：smart、ssh、paramiko、local、docker、winrm，默认为smart。")]),s._v(" "),n("p",[s._v("smart表示智能选择ssh和paramiko(paramiko是Python的一个ssh协议模块)，当Ansible端安装的ssh支持ControlPersist(即持久连接)时自动使用ssh，否则使用paramiko。local和docker是非基于ssh连接的方式，winrm是连接Windows的插件。")]),s._v(" "),n("p",[s._v("可以在命令行选项中使用-c或--connection选项来指定连接方式：")]),s._v(" "),n("p",[s._v("如果希望在控制主机本地运行一个特定的任务，可以使用local_action语句。")]),s._v(" "),n("p",[s._v("假设我们需要配置的远程主机刚刚启动，如果我们直接运行playbook，可能会因为sshd服务尚未开始监听而导致失败，我们可以在控制主机上使用如下示例来等待被控端sshd端口监听：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('- name: wait for ssh server to be running\n  wait_for\n      port: 22 \n      host: "{{ inventory_hostname }}" \n      search_regex: OpenSSH\n  connection: local\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("此外，inventory中也可以通过连接的行为变量ansible_connection指定连接类型：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('192.168.100.101 ansible_connection="smart"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_2-任务委托"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-任务委托"}},[s._v("#")]),s._v(" 2 任务委托")]),s._v(" "),n("p",[s._v("在有些时候，我们希望运行与选定的主机或主机组相关联的task，但是这个task又不需要在选定的主机或主机组上执行，而需要在另一台服务器上执行。")]),s._v(" "),n("p",[s._v("这种特性适用于以下场景：")]),s._v(" "),n("ul",[n("li",[s._v("在告警系统中启用基于主机的告警")]),s._v(" "),n("li",[s._v("向负载均衡器中添加或移除一台主机")]),s._v(" "),n("li",[s._v("在dns上添加或修改针对某个主机的解析")]),s._v(" "),n("li",[s._v("在存储节点上创建一个存储以用于主机挂载")]),s._v(" "),n("li",[s._v("使用一个外部程序来检测主机上的服务是否正常")])]),s._v(" "),n("p",[s._v("可以使用delegate_to语句来在另一台主机上运行task：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('- name: enable alerts for web servers\n  hosts: webservers\n  tasks:\n    - name: enable alerts\n      nagios: action=enable_alerts service=web host="{{ inventory_hostname }}"\n      delegate_to: nagios.example.com\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("blockquote",[n("p",[s._v("如果delegate_to: 127.0.0.1的时候，等价于connection: local")]),s._v(" "),n("p",[s._v("显然connection: local和delegate_to: localhost在功能上是等价的。当然，connection可以定义在play级别或task级别上，而delegate_to只能定义在task级别上。")])]),s._v(" "),n("h2",{attrs:{id:"_3-任务暂停"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-任务暂停"}},[s._v("#")]),s._v(" 3 任务暂停")]),s._v(" "),n("p",[s._v("有些情况下，一些任务的运行需要等待一些状态的恢复，比如某一台主机或者应用刚刚重启，我们需要需要等待它上面的某个端口开启，此时就需要将正在运行的任务暂停，直到其状态满足要求。")]),s._v(" "),n("p",[s._v("Ansible提供了wait_for模块以实现任务暂停的需求")]),s._v(" "),n("p",[s._v("wait_for模块常用参数：")]),s._v(" "),n("ul",[n("li",[s._v("connect_timeout：在下一个任务执行之前等待连接的超时时间")]),s._v(" "),n("li",[s._v("delay：等待一个端口或者文件或者连接到指定的状态时，默认超时时间为300秒，在这等待的300s的时间里，wait_for模块会一直轮询指定的对象是否到达指定的状态，delay即为多长时间轮询一次状态。")]),s._v(" "),n("li",[s._v("host：wait_for模块等待的主机的地址，默认为127.0.0.1")]),s._v(" "),n("li",[s._v("port：wait_for模块待待的主机的端口")]),s._v(" "),n("li",[s._v("path：文件路径，只有当这个文件存在时，下一任务才开始执行，即等待该文件创建完成")]),s._v(" "),n("li",[s._v("state：等待的状态，即等待的文件或端口或者连接状态达到指定的状态时，下一个任务开始执行。当等的对象为端口时，状态有started，stoped，即端口已经监听或者端口已经关闭；当等待的对象为文件时，状态有present或者started，absent，即文件已创建或者删除；当等待的对象为一个连接时，状态有drained，即连接已建立。默认为started")]),s._v(" "),n("li",[s._v("timeout：wait_for的等待的超时时间,默认为300秒")])]),s._v(" "),n("p",[s._v("示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#等待8080端口已正常监听，才开始下一个任务，直到超时\n- wait_for: \n    port: 8080 \n    state: started  \n    \n#等待8000端口正常监听，每隔10s检查一次，直至等待超时\n- wait_for: \n    port: 8000 \n    delay: 10 \n    \n#等待8000端口直至有连接建立\n- wait_for: \n    host: 0.0.0.0 \n    port: 8000 \n    delay: 10 \n    state: drained\n    \n#等待8000端口有连接建立，如果连接来自10.2.1.2或者10.2.1.3，则忽略。\n- wait_for: \n    host: 0.0.0.0 \n    port: 8000 \n    state: drained \n    exclude_hosts: 10.2.1.2,10.2.1.3 \n    \n#等待/tmp/foo文件已创建    \n- wait_for: \n    path: /tmp/foo \n\n#等待/tmp/foo文件已创建，而且该文件中需要包含completed字符串    \n- wait_for: \n    path: /tmp/foo \n    search_regex: completed \n\n#等待/var/lock/file.lock被删除    \n- wait_for: \n    path: /var/lock/file.lock \n    state: absent \n    \n#等待指定的进程被销毁\n- wait_for: \n    path: /proc/3466/status \n    state: absent \n    \n#等待openssh启动，10s检查一次\n- wait_for: \n    port: 22 \n    host: "{{ ansible_ssh_host | default(inventory_hostname) }}" search_regex: OpenSSH \n    delay: 10 \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("h2",{attrs:{id:"_4-滚动执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-滚动执行"}},[s._v("#")]),s._v(" 4 滚动执行")]),s._v(" "),n("p",[s._v("默认情况下，ansible会并行的在所有选定的主机或主机组上执行每一个task，但有的时候，我们会希望能够逐台运行。最典型的例子就是对负载均衡器后面的应用服务器进行更新时。通常来讲，我们会将应用服务器逐台从负载均衡器上摘除，更新，然后再添加回去。我们可以在play中使用serial语句来告诉ansible限制并行执行play的主机数量。")]),s._v(" "),n("p",[s._v("下面是一个在amazon EC2的负载均衡器中移除主机，更新软件包，再添加回负载均衡的配置示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('- name: upgrade pkgs on servers behind load balancer\n  hosts: myhosts\n  serial: 1\n  tasks:\n    - name: get the ec2 instance id and elastic load balancer id\n      ec2_facts:\n\n    - name: take the host out of the elastic load balancer id\n      local_action: ec2_elb\n      args:\n        instance_id: "{{ ansible_ec2_instance_id }}"\n        state: absent\n\n    - name: upgrade pkgs\n      apt: \n          update_cache: yes \n          upgrade: yes\n\n    - name: put the host back n the elastic load balancer\n      local_action: ec2_elb\n      args:\n        instance_id: "{{ ansible_ec2_instance_id }}"\n        state: present\n        ec2_elbs: "{{ items }}"\n      with_items: ec2_elbs\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("在上述示例中，serial的值为1，即表示在某一个时间段内，play只在一台主机上执行。如果为2，则同时有2台主机运行play。")]),s._v(" "),n("p",[s._v("一般来讲，当task失败时，ansible会停止执行失败的那台主机上的任务，但是继续对其他 主机执行。在负载均衡的场景中，我们会更希望ansible在所有主机执行失败之前就让play停止，否则很可能会面临所有主机都从负载均衡器上摘除并且都执行失败导致服务不可用的场景。这个时候，我们可以使用serial语句配合max_fail_percentage语句使用。"),n("code",[s._v("max_fail_percentage")]),s._v("表示当最大失败主机的比例达到多少时，ansible就让整个play失败。示例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("- name: upgrade pkgs on fservers behind load balancer\n  hosts: myhosts\n  serial: 1\n  max_fail_percentage: 25\n  tasks:\n    ......\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("假如负载均衡后面有4台主机，并且有一台主机执行失败，这时ansible还会继续运行，要让Play停止运行，则必须超过25%，所以如果想一台失败就停止执行，我们可以将max_fail_percentage的值设为24。如果我们希望只要有执行失败，就放弃执行，我们可以将max_fail_percentage的值设为0。")]),s._v(" "),n("h2",{attrs:{id:"_5-只执行一次"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-只执行一次"}},[s._v("#")]),s._v(" 5 只执行一次")]),s._v(" "),n("p",[s._v("某些时候，我们希望某个task只执行一次，即使它被绑定到了多个主机上。例如在一个负载均衡器后面有多台应用服务器，我们希望执行一个数据库迁移，只需要在一个应用服务器上执行操作即可。")]),s._v(" "),n("p",[s._v("可以使用run_once语句来处理：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("- name: run the database migrateions\n  command: /opt/run_migrateions\n  run_once: true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("还可以与local_action配合使用，如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("- name: run the task locally, only once\n  command: /opt/my-custom-command\n  connection: local\n  run_once: true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("还可以与delegate_to配合使用，让这个只执行一次的任务在指定的机器上运行：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("- name: run the task locally, only once\n  command: /opt/my-custom-command\n  run_once: true\n  delegate_to: app.a1-61-105.dev.unp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"_6-设置环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-设置环境变量"}},[s._v("#")]),s._v(" 6 设置环境变量")]),s._v(" "),n("p",[s._v("我们在命令行下执行某些命令的时候，这些命令可能会需要依赖环境变量。比如在安装某些包的时候，可能需要通过代理才能完成完装。或者某个脚本可能需要调用某个环境变量才能完成运行。")]),s._v(" "),n("p",[s._v("ansible 支持通过"),n("code",[s._v("environment")]),s._v("关键字来定义一些环境变量。")]),s._v(" "),n("p",[s._v("在如下场景中可能需要用到环境变量：")]),s._v(" "),n("ul",[n("li",[s._v("运行shell的时候，需要设置path变量")]),s._v(" "),n("li",[s._v("需要加载一些库，这些库不在系统的标准库路径当中")])]),s._v(" "),n("p",[s._v("下面是一个简单示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("---\n- name: upload a remote file to aws s3\n  hosts: test\n  tasks:\n    - name: install pip\n      yum:\n        name: python-pip\n        state: installed\n    \n    - name: install the aws tools\n      pip:\n        name: awscli\n        state: present\n    \n    - name upload file to s3\n      shell aws s3 put-object --bucket=my-test-bucket --key={{ ansible_hostname }}/fstab --body=/etc/fstab --region=eu-west-1\n      environment:\n        AWS_ACCESS_KEY_ID: xxxxxx\n        AWS_SECRET_ACCESS_KEY: xxxxxx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("事实上，environment也可以存储在变量当中：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("- hosts: all\n  remote_user: root\n  vars:\n    proxy_env:\n      http_proxy: http://proxy.example.com:8080\n      https_proxy: http://proxy.bos.example.com:8080\n  tasks:\n    - apt: name=cobbler state=installed\n      environment: proxy_env\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_7-交互式提示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-交互式提示"}},[s._v("#")]),s._v(" 7 交互式提示")]),s._v(" "),n("p",[s._v("在少数情况下，ansible任务运行的过程中需要用户输入一些数据，这些数据要么比较秘密不方便，或者数据是动态的，不同的用户有不同的需求，比如输入用户自己的账户和密码或者输入不同的版本号会触发不同的后续操作等。ansible的vars_prompt关键字就是用来处理上述这种与用户交互的情况的。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(' - hosts: all\n   remote_user: root\n   vars_prompt:\n      - name: share_user\n        prompt: "what is your network username?"\n        private: yes\n \n      - name: share_pass\n        prompt: "what is your network password"\n        private: yes\n        \n    tasks:\n      - debug:\n          var: share_user\n      - debug:\n          var: share_pass\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("vars_prompt常用选项说明：")]),s._v(" "),n("ul",[n("li",[s._v("private: 默认为yes，表示用户输入的值在命令行不可见")]),s._v(" "),n("li",[s._v("default：定义默认值，当用户未输入时则使用默认值")]),s._v(" "),n("li",[s._v("confirm：如果设置为yes，则会要求用户输入两次，适合输入密码的情况")])])])}),[],!1,null,null,null);a.default=t.exports}}]);