const s=JSON.parse('{"key":"v-79bd1f4a","path":"/code/shell/part7/shili.html","title":"","lang":"zh-CN","frontmatter":{"author":"LinuxStory","category":"Linux","tag":["Bash"],"description":"开机集成zabbix和jumpserver脚本 #!/bin/bash LOCAL_PASS=\\"****\\" ANS_PASS=\\"****\\" INVENTORY_FILE=\\"/etc/ansible/playbook/zabbix/inventory/zabbix.yml\\" ZABBIX_PALYBOOK_FILE=\\"/etc/ansible/playbook/zabbix/new-zabbix-agent.yml\\" IP=$(ifconfig | grep broadcast | awk \'{ print $2 }\') LAST_TWO_IP=$(echo $IP | cut -d. -f3-4) node=\\"f6d2228f-c474-4b1e-ac8b-5c7d10e63b53\\" update_ssh() { sed -i \'s/PasswordAuthentication no/PasswordAuthentication yes/g\' /etc/ssh/sshd_config systemctl restart sshd &gt; /dev/null 2&gt;&amp;1 echo \\"${LOCAL_PASS}\\" | passwd root --stdin &gt; /dev/null 2&gt;&amp;1 } integrate_jms() { if [[ \\"${1}\\" == \\"csp\\" ]]; then node=\\"b256f30b-896e-44cd-90f0-0fc28984afe9\\" elif [[ \\"${1}\\" == \\"bes\\" ]]; then node=\\"b594957e-d6e8-4c85-92e6-b89757792e1a\\" fi curl -XPOST -H \'Authorization: Token d54c30e98f49de8e4e75bd3c28f214d0dea761ca\' \\\\ -H \\"Content-Type:application/json\\" http://192.168.162.10/api/v1/assets/assets/ \\\\ -d \\"{ \\\\\\"ip\\\\\\": \\\\\\"${IP}\\\\\\", \\\\\\"hostname\\\\\\": \\\\\\"${LAST_TWO_IP}-${2}\\\\\\", \\\\\\"protocol\\\\\\": \\\\\\"ssh\\\\\\", \\\\\\"port\\\\\\": 22, \\\\\\"protocols\\\\\\": [ \\\\\\"ssh/22\\\\\\" ], \\\\\\"platform\\\\\\": \\\\\\"Linux\\\\\\", \\\\\\"is_active\\\\\\": true, \\\\\\"admin_user\\\\\\": \\\\\\"59bb8ee8-98ad-4aac-a1a7-3e1b2b83f38f\\\\\\", \\\\\\"nodes\\\\\\": [ \\\\\\"${node}\\\\\\" ]}\\" } integrate_ans_zbx() { /usr/bin/expect &lt;&lt;EOF set timeout 180 spawn ssh root@192.168.162.1 expect { \\"(yes/no)?\\" { send \\"yes\\\\r\\"; expect \\"password:\\"; send \\"${ANS_PASS}\\\\r\\"; exp_continue; } \\"password:\\" { send \\"${ANS_PASS}\\\\r\\"; exp_continue; } \\"*#\\" { send \\"sed -i \'/# ${1} insert/i\\\\ ${IP}:\' ${INVENTORY_FILE}\\\\r\\"; send \\"sed -i \'s/${IP}/ ${IP}/g\' ${INVENTORY_FILE}\\\\r\\"; send \\" ansible-playbook -i ${INVENTORY_FILE} ${ZABBIX_PALYBOOK_FILE} \\\\ -l ${IP} --skip-tags \'sangoma,debian,suse,windows,docker\'\\\\r\\"; } } expect eof EOF } main() { update_ssh integrate_jms \\"$@\\" integrate_ans_zbx \\"$@\\" } main \\"$@\\"","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/shell/part7/shili.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:description","content":"开机集成zabbix和jumpserver脚本 #!/bin/bash LOCAL_PASS=\\"****\\" ANS_PASS=\\"****\\" INVENTORY_FILE=\\"/etc/ansible/playbook/zabbix/inventory/zabbix.yml\\" ZABBIX_PALYBOOK_FILE=\\"/etc/ansible/playbook/zabbix/new-zabbix-agent.yml\\" IP=$(ifconfig | grep broadcast | awk \'{ print $2 }\') LAST_TWO_IP=$(echo $IP | cut -d. -f3-4) node=\\"f6d2228f-c474-4b1e-ac8b-5c7d10e63b53\\" update_ssh() { sed -i \'s/PasswordAuthentication no/PasswordAuthentication yes/g\' /etc/ssh/sshd_config systemctl restart sshd &gt; /dev/null 2&gt;&amp;1 echo \\"${LOCAL_PASS}\\" | passwd root --stdin &gt; /dev/null 2&gt;&amp;1 } integrate_jms() { if [[ \\"${1}\\" == \\"csp\\" ]]; then node=\\"b256f30b-896e-44cd-90f0-0fc28984afe9\\" elif [[ \\"${1}\\" == \\"bes\\" ]]; then node=\\"b594957e-d6e8-4c85-92e6-b89757792e1a\\" fi curl -XPOST -H \'Authorization: Token d54c30e98f49de8e4e75bd3c28f214d0dea761ca\' \\\\ -H \\"Content-Type:application/json\\" http://192.168.162.10/api/v1/assets/assets/ \\\\ -d \\"{ \\\\\\"ip\\\\\\": \\\\\\"${IP}\\\\\\", \\\\\\"hostname\\\\\\": \\\\\\"${LAST_TWO_IP}-${2}\\\\\\", \\\\\\"protocol\\\\\\": \\\\\\"ssh\\\\\\", \\\\\\"port\\\\\\": 22, \\\\\\"protocols\\\\\\": [ \\\\\\"ssh/22\\\\\\" ], \\\\\\"platform\\\\\\": \\\\\\"Linux\\\\\\", \\\\\\"is_active\\\\\\": true, \\\\\\"admin_user\\\\\\": \\\\\\"59bb8ee8-98ad-4aac-a1a7-3e1b2b83f38f\\\\\\", \\\\\\"nodes\\\\\\": [ \\\\\\"${node}\\\\\\" ]}\\" } integrate_ans_zbx() { /usr/bin/expect &lt;&lt;EOF set timeout 180 spawn ssh root@192.168.162.1 expect { \\"(yes/no)?\\" { send \\"yes\\\\r\\"; expect \\"password:\\"; send \\"${ANS_PASS}\\\\r\\"; exp_continue; } \\"password:\\" { send \\"${ANS_PASS}\\\\r\\"; exp_continue; } \\"*#\\" { send \\"sed -i \'/# ${1} insert/i\\\\ ${IP}:\' ${INVENTORY_FILE}\\\\r\\"; send \\"sed -i \'s/${IP}/ ${IP}/g\' ${INVENTORY_FILE}\\\\r\\"; send \\" ansible-playbook -i ${INVENTORY_FILE} ${ZABBIX_PALYBOOK_FILE} \\\\ -l ${IP} --skip-tags \'sangoma,debian,suse,windows,docker\'\\\\r\\"; } } expect eof EOF } main() { update_ssh integrate_jms \\"$@\\" integrate_ans_zbx \\"$@\\" } main \\"$@\\""}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"LinuxStory"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LinuxStory\\"}]}"]]},"headers":[{"level":2,"title":"开机集成zabbix和jumpserver脚本","slug":"开机集成zabbix和jumpserver脚本","link":"#开机集成zabbix和jumpserver脚本","children":[]}],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":0.65,"words":195},"filePathRelative":"code/shell/part7/shili.md","localizedDate":"2023年4月19日","excerpt":"<h2> 开机集成zabbix和jumpserver脚本</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash</span>\\n<span class=\\"token assign-left variable\\">LOCAL_PASS</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"****\\"</span>\\n<span class=\\"token assign-left variable\\">ANS_PASS</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"****\\"</span>\\n<span class=\\"token assign-left variable\\">INVENTORY_FILE</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/etc/ansible/playbook/zabbix/inventory/zabbix.yml\\"</span>\\n<span class=\\"token assign-left variable\\">ZABBIX_PALYBOOK_FILE</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"/etc/ansible/playbook/zabbix/new-zabbix-agent.yml\\"</span>\\n<span class=\\"token assign-left variable\\">IP</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">ifconfig</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> broadcast <span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">\'{ print $2 }\'</span><span class=\\"token variable\\">)</span></span>\\n<span class=\\"token assign-left variable\\">LAST_TWO_IP</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token builtin class-name\\">echo</span> $IP <span class=\\"token operator\\">|</span> <span class=\\"token function\\">cut</span> -d. -f3-4<span class=\\"token variable\\">)</span></span>\\n\\n<span class=\\"token assign-left variable\\">node</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"f6d2228f-c474-4b1e-ac8b-5c7d10e63b53\\"</span>\\n\\n<span class=\\"token function-name function\\">update_ssh</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">sed</span> <span class=\\"token parameter variable\\">-i</span> <span class=\\"token string\\">\'s/PasswordAuthentication no/PasswordAuthentication yes/g\'</span> /etc/ssh/sshd_config\\n  systemctl restart sshd <span class=\\"token operator\\">&gt;</span> /dev/null <span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">2</span>&gt;</span><span class=\\"token file-descriptor important\\">&amp;1</span>\\n  <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">${LOCAL_PASS}</span>\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">passwd</span> root <span class=\\"token parameter variable\\">--stdin</span>  <span class=\\"token operator\\">&gt;</span> /dev/null <span class=\\"token operator\\"><span class=\\"token file-descriptor important\\">2</span>&gt;</span><span class=\\"token file-descriptor important\\">&amp;1</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function-name function\\">integrate_jms</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">${1}</span>\\"</span> <span class=\\"token operator\\">==</span> <span class=\\"token string\\">\\"csp\\"</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n    <span class=\\"token assign-left variable\\">node</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"b256f30b-896e-44cd-90f0-0fc28984afe9\\"</span>\\n  <span class=\\"token keyword\\">elif</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\">${1}</span>\\"</span> <span class=\\"token operator\\">==</span> <span class=\\"token string\\">\\"bes\\"</span> <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span> <span class=\\"token keyword\\">then</span>\\n    <span class=\\"token assign-left variable\\">node</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"b594957e-d6e8-4c85-92e6-b89757792e1a\\"</span>\\n  <span class=\\"token keyword\\">fi</span> \\n  <span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-XPOST</span> <span class=\\"token parameter variable\\">-H</span> <span class=\\"token string\\">\'Authorization: Token d54c30e98f49de8e4e75bd3c28f214d0dea761ca\'</span> <span class=\\"token punctuation\\">\\\\</span>\\n    <span class=\\"token parameter variable\\">-H</span> <span class=\\"token string\\">\\"Content-Type:application/json\\"</span> http://192.168.162.10/api/v1/assets/assets/ <span class=\\"token punctuation\\">\\\\</span>\\n    <span class=\\"token parameter variable\\">-d</span> <span class=\\"token string\\">\\"{ <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>ip<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>: <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span><span class=\\"token variable\\">${IP}</span><span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>, <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>hostname<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>: <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span><span class=\\"token variable\\">${LAST_TWO_IP}</span>-<span class=\\"token variable\\">${2}</span><span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>, \\n        <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>protocol<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>: <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>ssh<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>, <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>port<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>: 22, <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>protocols<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>: [ <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>ssh/22<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span> ], \\n        <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>platform<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>: <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>Linux<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>, <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>is_active<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>: true, \\n        <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>admin_user<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>: <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>59bb8ee8-98ad-4aac-a1a7-3e1b2b83f38f<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>, \\n        <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>nodes<span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span>: [ <span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span><span class=\\"token variable\\">${node}</span><span class=\\"token entity\\" title=\\"\\\\&quot;\\">\\\\\\"</span> ]}\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function-name function\\">integrate_ans_zbx</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  /usr/bin/expect <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF\\n  set timeout 180\\n  spawn ssh root@192.168.162.1\\n  expect {\\n    \\"(yes/no)?\\" {\\n      send \\"yes<span class=\\"token entity\\" title=\\"\\\\r\\">\\\\r</span>\\";\\n      expect \\"password:\\";\\n      send \\"<span class=\\"token variable\\">${ANS_PASS}</span><span class=\\"token entity\\" title=\\"\\\\r\\">\\\\r</span>\\";\\n      exp_continue;\\n    }\\n    \\"password:\\" {\\n      send \\"<span class=\\"token variable\\">${ANS_PASS}</span><span class=\\"token entity\\" title=\\"\\\\r\\">\\\\r</span>\\";\\n      exp_continue;\\n    }\\n    \\"*#\\" {\\n      send \\"sed -i \'/# <span class=\\"token variable\\">${1}</span> insert/i\\\\  <span class=\\"token variable\\">${IP}</span>:\' <span class=\\"token variable\\">${INVENTORY_FILE}</span><span class=\\"token entity\\" title=\\"\\\\r\\">\\\\r</span>\\";\\n      send \\"sed -i \'s/<span class=\\"token variable\\">${IP}</span>/        <span class=\\"token variable\\">${IP}</span>/g\' <span class=\\"token variable\\">${INVENTORY_FILE}</span><span class=\\"token entity\\" title=\\"\\\\r\\">\\\\r</span>\\";\\n      send \\" ansible-playbook -i <span class=\\"token variable\\">${INVENTORY_FILE}</span> <span class=\\"token variable\\">${ZABBIX_PALYBOOK_FILE}</span> \\\\\\n             -l <span class=\\"token variable\\">${IP}</span> --skip-tags \'sangoma,debian,suse,windows,docker\'<span class=\\"token entity\\" title=\\"\\\\r\\">\\\\r</span>\\";\\n    }\\n  }\\n  expect eof\\nEOF</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function-name function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  update_ssh\\n  integrate_jms <span class=\\"token string\\">\\"<span class=\\"token variable\\">$@</span>\\"</span>\\n  integrate_ans_zbx <span class=\\"token string\\">\\"<span class=\\"token variable\\">$@</span>\\"</span> \\n<span class=\\"token punctuation\\">}</span>\\n\\nmain <span class=\\"token string\\">\\"<span class=\\"token variable\\">$@</span>\\"</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"LinuxStory"},"autoDesc":true}');export{s as data};
