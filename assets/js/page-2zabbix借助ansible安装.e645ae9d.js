(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1179:function(s,a,n){"use strict";n.r(a);var e=n(1),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_2-zabbix借助ansible安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-zabbix借助ansible安装"}},[s._v("#")]),s._v(" 2 zabbix借助ansible安装")]),s._v(" "),n("h2",{attrs:{id:"zabbix-server安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-server安装"}},[s._v("#")]),s._v(" zabbix-server安装")]),s._v(" "),n("ol",[n("li",[s._v("下载roles")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ansible-galaxy "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dj-wasabi.zabbix-server\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("编写playbook")])]),s._v(" "),n("p",[n("code",[s._v("vim new-zabbix-server.yml")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("---\n- hosts: zabbix-server\n  become: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n  vars:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# host memory is 16G")]),s._v("\n    mysql_thread_cache_size: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"64"')]),s._v("\n    mysql_query_cache_size: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"128M"')]),s._v("\n    mysql_innodb_buffer_pool_size: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4096M"')]),s._v("\n    mysql_tmp_table_size: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"128M"')]),s._v("\n    mysql_table_open_cache: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2048"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zabbix-server")]),s._v("\n    zabbix_version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v("\n    zabbix_repo_yum:\n      - name: zabbix\n        description: Zabbix Official Repository - "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" zabbix_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/rhel/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ansible_distribution_major_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n        gpgcheck: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX\n        state: present\n      - name: zabbix-supported\n        description: Zabbix Official Repository non-supported - "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ansible_distribution_major_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n        gpgcheck: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX\n        state: present\n    zabbix_server_startpollers: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n    zabbix_server_startpollersunreachable: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    zabbix_server_starttrappers: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n    zabbix_server_startdiscoverers: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n    zabbix_server_housekeepingfrequency: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n    zabbix_server_maxhousekeeperdelete: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),s._v("\n    zabbix_server_cachesize: 4096M\n    zabbix_server_startdbsyncers: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n    zabbix_server_historyindexcachesize: 512M\n    zabbix_server_trendcachesize: 256M\n    zabbix_server_historytextcachesize: 80M\n    zabbix_server_valuecachesize: 4096M\n    zabbix_server_timeout: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n    zabbix_server_database: mysql\n    zabbix_server_database_long: mysql \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zabbi-web")]),s._v("\n    zabbix_url: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".165.231\n    zabbix_timezone: Asia/Shanghai\n  roles:\n    - role: geerlingguy.mysql\n    - role: geerlingguy.apache\n    - role: dj-wasabi.zabbix-server\n    - role: dj-wasabi.zabbix-web\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("安装zabbix-server")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ansible-playbook -i inventory/zabbix.yml new-zabbix-server.yml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[s._v("优化")]),s._v(" "),n("p",[s._v("优化磁盘，去除atime")])]),s._v(" "),n("li",[n("p",[s._v("注意事项")]),s._v(" "),n("p",[s._v("zabbix-web，筛选历史问题时，记得选择时间范围")])])]),s._v(" "),n("h2",{attrs:{id:"zabbix-proxy安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-proxy安装"}},[s._v("#")]),s._v(" zabbix-proxy安装")]),s._v(" "),n("ol",[n("li",[s._v("下载roles")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ansible-galaxy "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dj-wasabi.zabbix-proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("编写playbook")])]),s._v(" "),n("p",[n("code",[s._v("vim new-zabbix-proxy.yml")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("---\n- hosts: zabbix-proxy\n  become: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n  vars:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# host memory is 8G")]),s._v("\n    mysql_thread_cache_size: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"64"')]),s._v("\n    mysql_query_cache_size: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"128M"')]),s._v("\n    mysql_innodb_buffer_pool_size: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2048M"')]),s._v("\n    mysql_tmp_table_size: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"64M"')]),s._v("\n    mysql_table_open_cache: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1024"')]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zabbix-proxy")]),s._v("\n    zabbix_server_host: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".165.231 \n    zabbix_version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v("\n    zabbix_repo_yum:\n      - name: zabbix\n        description: Zabbix Official Repository - "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" zabbix_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/rhel/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ansible_distribution_major_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n        gpgcheck: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX\n        state: present\n      - name: zabbix-supported\n        description: Zabbix Official Repository non-supported - "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ansible_distribution_major_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n        gpgcheck: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX\n        state: present\n    zabbix_proxy_cachesize: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n    zabbix_proxy_startpollers: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n    zabbix_proxy_housekeepingfrequency: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n\n  roles:\n    - role: geerlingguy.mysql\n    - role: dj-wasabi.zabbix-proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("安装zabbix-proxy")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ansible-playbook -i inventory/zabbix.yml new-zabbix-proxy.yml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[s._v("将zabbix-proxy添加到zabbix-server中")]),s._v(" "),n("ol",[n("li",[n("p",[s._v(") 进入zabbix的web页面，点击Administrator--\x3eProxies--\x3eCreate proxy；")])]),s._v(" "),n("li",[n("p",[s._v(") 填写Proxy name为主机名称，Proxy mode为Active，然后Add。")]),s._v(" "),n("blockquote",[n("p",[s._v("过几十秒，看看proxy是否添加成功，查看proxy和server日志，如无成功，将proxy和server端重启一下；")]),s._v(" "),n("p",[s._v("proxy name一定要和配置文件中"),n("code",[s._v("/etc/zabbix/zabbix_proxy.conf")]),s._v("的"),n("code",[s._v("Hostname")]),s._v("一致。")])])])])])]),s._v(" "),n("h2",{attrs:{id:"zabbix-agent安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-agent安装"}},[s._v("#")]),s._v(" zabbix-agent安装")]),s._v(" "),n("ol",[n("li",[s._v("下载roles")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ansible-galaxy "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dj-wasabi.zabbix-agent\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("编写playbook")])]),s._v(" "),n("p",[n("code",[s._v("vim new-zabbix-agent.yml")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("---\n- hosts: zabbix-server\n  vars:\n    zabbix_version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v("\n    zabbix_repo_yum:\n      - name: zabbix\n        description: Zabbix Official Repository - "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" zabbix_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/rhel/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ansible_distribution_major_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n        gpgcheck: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX\n        state: present\n      - name: zabbix-supported\n        description: Zabbix Official Repository non-supported - "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ansible_distribution_major_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n        gpgcheck: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX\n        state: present\n    zabbix_agent_server: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".165.231\n    zabbix_agent_serveractive: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".165.231\n    zabbix_url: http://192.168.165.231\n    zabbix_api_use: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    zabbix_api_create_hostgroup: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    zabbix_api_create_hosts: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    zabbix_api_user: Admin\n    zabbix_api_pass: zabbix\n    zabbix_create_host: present\n    zabbix_host_groups:\n      - Zabbix servers\n    zabbix_link_templates:\n      - Template OS Linux by Zabbix agent active\n      - Template App Zabbix Server\n  roles:\n    - role: dj-wasabi.zabbix-agent\n\n- hosts: hy-bes\n  vars:\n    zabbix_version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v("\n    zabbix_repo_yum:\n      - name: zabbix\n        description: Zabbix Official Repository - "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" zabbix_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/rhel/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ansible_distribution_major_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n        gpgcheck: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX\n        state: present\n      - name: zabbix-supported\n        description: Zabbix Official Repository non-supported - "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\n        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ansible_distribution_major_version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n        gpgcheck: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX\n        state: present\n    zabbix_agent_server: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.235,192.168.165.232\n    zabbix_agent_serveractive: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".16.235,192.168.165.232\n    zabbix_proxy: bes.zabbixproxy\n    zabbix_url: http://192.168.165.231\n    zabbix_api_use: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    zabbix_api_create_hostgroup: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    zabbix_api_create_hosts: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    zabbix_api_user: Admin\n    zabbix_api_pass: zabbix\n    zabbix_create_host: present\n    zabbix_host_groups:\n      - hy-bes\n    zabbix_link_templates:\n      - Template OS Linux by Zabbix agent active\n  roles:\n    - role: dj-wasabi.zabbix-agent\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[s._v("修改roles，添加tags")]),s._v(" "),n("p",[s._v("由于添加监控的主机数以千计，所以必须ansible执行playbook时，必须跳过不必要的判断，这样能大大减少playbook的执行时间，提高执行效率。")])])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("修改"),n("code",[s._v("/dj-wasabi.zabbix-agent/tasks/main.yml")]),s._v("，给每个操作系统添加tags，例如")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('- name: "Install the correct repository"\n  include: "Debian.yml"\n  when:\n    - zabbix_agent_os_family == "Debian"\n    - not (zabbix_agent_docker | bool)\n  tags:\n    - zabbix-agent\n    - init\n    - config\n    - service\n    - debian\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("blockquote",[n("p",[s._v("最后的debian是新增的。")])])]),s._v(" "),n("li",[n("p",[s._v("修改"),n("code",[s._v("dj-wasabi.zabbix-agent/tasks/Linux.yml")]),s._v("，给DOcker增加tags，如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('- name: "Install the Docker container"\n  include: Docker.yml\n  when:\n    - zabbix_agent_docker | bool\n  tags:\n    - docker\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("blockquote",[n("p",[s._v("最后两行是新增的。")])])])]),s._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[s._v("安装")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v(" ansible-playbook -i inventory/zabbix.yml new-zabbix-agent.yml -l "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".163.150 --skip-tags "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sangoma,debian,suse,windows,docker"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("每次新增zabbix-agent，最后安装完成，重启一下zabbix-proxy，这样proxy会尽快发现agent节点")])]),s._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[n("p",[s._v("监控模块")]),s._v(" "),n("p",[s._v("我们采用的是zabbix主动式的监控方式，zabbix-agent主动推送数据给proxy或server，以减少server端压力。")]),s._v(" "),n("p",[s._v("我发现在新的zabbix监控中，还可以检查时间有没有同步。")]),s._v(" "),n("p",[s._v("而且还有磁盘IO的监控，就问你们棒不棒！！！")]),s._v(" "),n("p",[s._v("很棒！")]),s._v(" "),n("blockquote",[n("p",[s._v("4.4中新的主动式模板中，需要将监控项system.localtime\t变为enabled，否则主机的可用性为unknown")])]),s._v(" "),n("p",[s._v("主动式的缺点，主机宕机，知道的时间不及时，好像是30分钟。")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);