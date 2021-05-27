(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{956:function(a,t,s){"use strict";s.r(t);var l=s(1),e=Object(l.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ansible-学习笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ansible-学习笔记"}},[a._v("#")]),a._v(" Ansible 学习笔记")]),a._v(" "),s("p",[a._v("Hello Ansible~")]),a._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[a._v("#")]),a._v(" Summary")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/first.html"}},[a._v("1 初识Ansible")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/inventory.html"}},[a._v("2 Ansible Inventory 配置详解")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/ad-hoc.html"}},[a._v("3 Ansible Ad-hoc 命令集")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/lineinfile.html"}},[a._v("3.1 Ansible lineinfile 模块详解")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/playbook.html"}},[a._v("4 Ansible Playbook")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/dir-handler.html"}},[a._v("4.1 Playbook的结构及handler用法")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/playbook-for.html"}},[a._v("4.2 Playbook循环语句")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/playbook-if.html"}},[a._v("4.3 Playbook条件语句")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/advanced-playbook.html"}},[a._v("4.4 Playbook高级用法")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/playbook-tags.html"}},[a._v("4.5 Playbook之tags")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/roles.html"}},[a._v("4.6 巧用Roles")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/jinja2.html"}},[a._v("4.7 Jinja2 模板")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/yaml.html"}},[a._v("4.8 yaml 语法")])],1)])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/var.html"}},[a._v("5 Ansible变量")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/custom.html"}},[a._v("5.1 自定义变量")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/fact.html"}},[a._v("5.2 Fact变量")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/magic.html"}},[a._v("5.3 魔法变量")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/lookup.html"}},[a._v("5.4 使用lookup生成变量")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/vault.html"}},[a._v("5.5 使用vault配置加密")])],1)])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/optimize.html"}},[a._v("6 Ansible使用优化")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/automate/ansible/qa.html"}},[a._v("7 常见问题")])],1)]),a._v(" "),s("h2",{attrs:{id:"核心知识点概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心知识点概览"}},[a._v("#")]),a._v(" 核心知识点概览")]),a._v(" "),s("h3",{attrs:{id:"ansible-playbook-知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ansible-playbook-知识点"}},[a._v("#")]),a._v(" Ansible playbook 知识点")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("playbook 静态加载和动态加载")]),a._v(" "),s("ul",[s("li",[a._v("roles、include、import_xxx同属一类，它们都是静态加载，都在playbook解析阶段加载文件")]),a._v(" "),s("li",[a._v("include_xxx属于另一类，是动态加载，遇到指令的时候临时去加载文件")]),a._v(" "),s("li",[a._v("要对包含的任务列表进行循环操作，则只能使用"),s("code",[a._v("include_tasks")]),a._v("关键字，不能使用"),s("code",[a._v("import_tasks")]),a._v("关键字，"),s("code",[a._v("import_tasks")]),a._v("并不支持循环操作")]),a._v(" "),s("li",[a._v("使用include_tasks时，这个指令自身占用一个任务，使用import_tasks的时候，这个指令自身没有任务，它所在的任务会在解析playbook的时候被其加载的子任务覆盖")]),a._v(" "),s("li",[a._v("无法使用--list-tags列出include_xxx中的tags，无法使用--list-tasks列出include_xxx中的任务，因为它们都是临时动态加载的")])])]),a._v(" "),s("li",[s("p",[a._v("jinja2")])])]),a._v(" "),s("h3",{attrs:{id:"ansible-变量-知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ansible-变量-知识点"}},[a._v("#")]),a._v(" Ansible 变量 知识点")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("变量作用域")]),a._v(" "),s("ul",[s("li",[a._v("全局作用域：Ansible配置文件、环境变量、命令行选项-e,--extra-vars设置的变量都是全局变量")]),a._v(" "),s("li",[a._v("Play作用域：整个Play中都有效的变量，vars_files、vars_prompt、play级别的vars以及Role的变量，它们都是play级别的变量")]),a._v(" "),s("li",[a._v("主机变量：绑定在各主机上的变量，各种方式定义的inventory变量、Facts信息变量(这个就划分在这吧)、set_fact、register、include_vars都是主机变量")]),a._v(" "),s("li",[a._v("任务变量：只在当前任务中生效的变量，task级别的vars定义的变量属于任务变量")]),a._v(" "),s("li",[a._v("block变量：只在当前block内生效，block级别的vars定义的变量属于block变量")]),a._v(" "),s("li",[a._v("预定义特殊变：这些变量由Ansible自身内部维护，有些是全局变量，有些是play变量，有些是主机变量，所以不方便对它们分类")])])]),a._v(" "),s("li",[s("p",[a._v("主机变量")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("内置主机变量"),s("code",[a._v("ansible_host")]),a._v("、"),s("code",[a._v("ansible_port")]),a._v("、"),s("code",[a._v("ansible_user")]),a._v("、"),s("code",[a._v("ansible_password")]),a._v("、"),s("code",[a._v("ansible_connection")]),a._v("等")])]),a._v(" "),s("li",[s("p",[a._v("自定义主机变量，在主机清单中")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("in INI "),s("code",[a._v("hosts1 http_port=80")]),a._v("，")])]),a._v(" "),s("li",[s("p",[a._v("in YAML")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("host1:\n  http_port: 80\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])])]),a._v(" "),s("li",[s("p",[a._v("自定义组变量，在主机清单中")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("in INI")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[atlanta]\nhost1\nhost2\n\n[atlanta:vars]\nntp_server=ntp.aliyun.com\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("in YAML")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("atlanta:\n  hosts:\n    host1:\n    host2:\n  vars:\n    ntp_server: ntp.aliyun.com\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])])])]),a._v(" "),s("li",[s("p",[a._v("通过"),s("code",[a._v("host_vars")]),a._v("和"),s("code",[a._v("group_vars")]),a._v("目录定义变量，需要说明的是，如果主机组定义的变量与主机冲突，主机变量优先级最高")])])])]),a._v(" "),s("li",[s("p",[a._v("play 变量")]),a._v(" "),s("ul",[s("li",[a._v("通过vars关键字定义")]),a._v(" "),s("li",[a._v("通过vars_files关键字引入变量文件")])])]),a._v(" "),s("li",[s("p",[a._v("注册变量 "),s("code",[a._v("register")])])]),a._v(" "),s("li",[s("p",[a._v("Facts 变量")])]),a._v(" "),s("li",[s("p",[a._v("内置变量/魔法变量")]),a._v(" "),s("ul",[s("li",[a._v("hostvars 所有和主机相关的变量")]),a._v(" "),s("li",[a._v("inventory_hostname 当前正在运行task的主机的主机名")]),a._v(" "),s("li",[a._v("group_names 组名")]),a._v(" "),s("li",[a._v("groups 主机组列表")]),a._v(" "),s("li",[a._v("ansible_play_batch（play_hosts/ansible_play_hosts）当前play所涉及的所有主机列表，但连接失败或执行任务失败的节点不会留在此变量中")]),a._v(" "),s("li",[a._v("inventory_dir 主机清单所在目录")]),a._v(" "),s("li",[a._v("inventory_file 主机清单文件")])])]),a._v(" "),s("li",[s("p",[a._v("lookup 生产变量")]),a._v(" "),s("ul",[s("li",[a._v("语法 "),s("code",[a._v("lookup('<plugin_name>', 'plugin_argument')")])]),a._v(" "),s("li",[a._v("从命令执行结果读取(pipe插件)")]),a._v(" "),s("li",[a._v("从磁盘文件读取(file/fileglob插件)")])])])]),a._v(" "),s("h3",{attrs:{id:"ansible-使用优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ansible-使用优化"}},[a._v("#")]),a._v(" Ansible 使用优化")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("加大forks的值")])]),a._v(" "),s("li",[s("p",[a._v("开启ssh长连接为5天 ，要求ssh为5.6版本，查看版本ssh -v")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# cat /etc/ansible/ansible.cfg\nssh_args = -C -o ControlMaster=auto -o ControlPersist=5d \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("Shell层次上的优化：将任务分开执行")])])]),a._v(" "),s("p",[a._v("以下优化，根据实际情况进行修改")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("修改执行策略，改为free")])]),a._v(" "),s("li",[s("p",[a._v("开启pipeling，在不使用sudo的情况下开启pipeling，减少ansible没有传输时的连接数")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("修改ansible.cfg中pipelining=False改为True\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("修改facts收集行为，"),s("code",[a._v("gather_facts: no")]),a._v(" ，或者添加缓存，注意添加缓存后有坑，比如创建带有时间的文件夹")])]),a._v(" "),s("li",[s("p",[a._v("使Ansible异步执行任务，async和poll指令")])]),a._v(" "),s("li",[s("p",[a._v("第三方策略插件：Mitogen for Ansible")])])]),a._v(" "),s("h3",{attrs:{id:"ansible-常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ansible-常见问题"}},[a._v("#")]),a._v(" Ansible 常见问题")]),a._v(" "),s("ul",[s("li",[a._v("server端未安装 sshpass")]),a._v(" "),s("li",[a._v("将host_key_checking设为False，关闭密码检查")])]),a._v(" "),s("h3",{attrs:{id:"yaml-文件知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-文件知识点"}},[a._v("#")]),a._v(" YAML 文件知识点")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("YAML的基本语法规则如下：")]),a._v(" "),s("p",[a._v("(1).使用缩进表示层级关系")]),a._v(" "),s("p",[a._v("(2).缩进时不允许使用Tab键，只允许使用空格")]),a._v(" "),s("p",[a._v("(3).缩进的空格数目不重要，只要相同层级的元素左对齐即可")]),a._v(" "),s("p",[a._v('(4).yaml文件以"---"作为文档的开始，以表明这是一个yaml文件')]),a._v(" "),s("p",[a._v("(5).# 表示注释，从这个字符一直到行尾，都会被解析器忽略")]),a._v(" "),s("p",[a._v("(6).字符串不用加引号，但在可能产生歧义时，需加引号(单双引号皆可)，比如引用变量时")]),a._v(" "),s("p",[a._v("(7).布尔值非常灵活，不分区大小写的true/false、yes/no、on/off、y/n、0和1都允许")])]),a._v(" "),s("li",[s("p",[a._v("YAML支持三种数据结构：")]),a._v(" "),s("p",[a._v("(1).对象：key/value格式，也称为哈希结构、字典结构或关联数组")]),a._v(" "),s("p",[a._v("(2).数组：也称为列表")]),a._v(" "),s("p",[a._v("(3).标量(scalars)：单个值")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);