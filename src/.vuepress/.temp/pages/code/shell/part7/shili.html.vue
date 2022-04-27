<template><h2 id="开机集成zabbix和jumpserver脚本" tabindex="-1"><a class="header-anchor" href="#开机集成zabbix和jumpserver脚本" aria-hidden="true">#</a> 开机集成zabbix和jumpserver脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">LOCAL_PASS</span><span class="token operator">=</span><span class="token string">"****"</span>
<span class="token assign-left variable">ANS_PASS</span><span class="token operator">=</span><span class="token string">"****"</span>
<span class="token assign-left variable">INVENTORY_FILE</span><span class="token operator">=</span><span class="token string">"/etc/ansible/playbook/zabbix/inventory/zabbix.yml"</span>
<span class="token assign-left variable">ZABBIX_PALYBOOK_FILE</span><span class="token operator">=</span><span class="token string">"/etc/ansible/playbook/zabbix/new-zabbix-agent.yml"</span>
<span class="token assign-left variable">IP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ifconfig</span> <span class="token operator">|</span> <span class="token function">grep</span> broadcast <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{ print $2 }'</span><span class="token variable">)</span></span>
<span class="token assign-left variable">LAST_TWO_IP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $IP <span class="token operator">|</span> <span class="token function">cut</span> -d. -f3-4<span class="token variable">)</span></span>

<span class="token assign-left variable">node</span><span class="token operator">=</span><span class="token string">"f6d2228f-c474-4b1e-ac8b-5c7d10e63b53"</span>

<span class="token function-name function">update_ssh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">sed</span> -i <span class="token string">'s/PasswordAuthentication no/PasswordAuthentication yes/g'</span> /etc/ssh/sshd_config
  systemctl restart sshd <span class="token operator">></span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${LOCAL_PASS}</span>"</span> <span class="token operator">|</span> <span class="token function">passwd</span> root --stdin  <span class="token operator">></span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">}</span>

<span class="token function-name function">integrate_jms</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">${1}</span>"</span> <span class="token operator">==</span> <span class="token string">"csp"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">node</span><span class="token operator">=</span><span class="token string">"b256f30b-896e-44cd-90f0-0fc28984afe9"</span>
  <span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">${1}</span>"</span> <span class="token operator">==</span> <span class="token string">"bes"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">node</span><span class="token operator">=</span><span class="token string">"b594957e-d6e8-4c85-92e6-b89757792e1a"</span>
  <span class="token keyword">fi</span> 
  <span class="token function">curl</span> -XPOST -H <span class="token string">'Authorization: Token d54c30e98f49de8e4e75bd3c28f214d0dea761ca'</span> <span class="token punctuation">\</span>
    -H <span class="token string">"Content-Type:application/json"</span> http://192.168.162.10/api/v1/assets/assets/ <span class="token punctuation">\</span>
    -d <span class="token string">"{ <span class="token entity" title="\&quot;">\"</span>ip<span class="token entity" title="\&quot;">\"</span>: <span class="token entity" title="\&quot;">\"</span><span class="token variable">${IP}</span><span class="token entity" title="\&quot;">\"</span>, <span class="token entity" title="\&quot;">\"</span>hostname<span class="token entity" title="\&quot;">\"</span>: <span class="token entity" title="\&quot;">\"</span><span class="token variable">${LAST_TWO_IP}</span>-<span class="token variable">${2}</span><span class="token entity" title="\&quot;">\"</span>, 
        <span class="token entity" title="\&quot;">\"</span>protocol<span class="token entity" title="\&quot;">\"</span>: <span class="token entity" title="\&quot;">\"</span>ssh<span class="token entity" title="\&quot;">\"</span>, <span class="token entity" title="\&quot;">\"</span>port<span class="token entity" title="\&quot;">\"</span>: 22, <span class="token entity" title="\&quot;">\"</span>protocols<span class="token entity" title="\&quot;">\"</span>: [ <span class="token entity" title="\&quot;">\"</span>ssh/22<span class="token entity" title="\&quot;">\"</span> ], 
        <span class="token entity" title="\&quot;">\"</span>platform<span class="token entity" title="\&quot;">\"</span>: <span class="token entity" title="\&quot;">\"</span>Linux<span class="token entity" title="\&quot;">\"</span>, <span class="token entity" title="\&quot;">\"</span>is_active<span class="token entity" title="\&quot;">\"</span>: true, 
        <span class="token entity" title="\&quot;">\"</span>admin_user<span class="token entity" title="\&quot;">\"</span>: <span class="token entity" title="\&quot;">\"</span>59bb8ee8-98ad-4aac-a1a7-3e1b2b83f38f<span class="token entity" title="\&quot;">\"</span>, 
        <span class="token entity" title="\&quot;">\"</span>nodes<span class="token entity" title="\&quot;">\"</span>: [ <span class="token entity" title="\&quot;">\"</span><span class="token variable">${node}</span><span class="token entity" title="\&quot;">\"</span> ]}"</span>
<span class="token punctuation">}</span>

<span class="token function-name function">integrate_ans_zbx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  /usr/bin/expect <span class="token operator">&lt;&lt;</span><span class="token string">EOF
  set timeout 180
  spawn ssh root@192.168.162.1
  expect {
    "(yes/no)?" {
      send "yes<span class="token entity" title="\r">\r</span>";
      expect "password:";
      send "<span class="token variable">${ANS_PASS}</span><span class="token entity" title="\r">\r</span>";
      exp_continue;
    }
    "password:" {
      send "<span class="token variable">${ANS_PASS}</span><span class="token entity" title="\r">\r</span>";
      exp_continue;
    }
    "*#" {
      send "sed -i '/# <span class="token variable">${1}</span> insert/i\  <span class="token variable">${IP}</span>:' <span class="token variable">${INVENTORY_FILE}</span><span class="token entity" title="\r">\r</span>";
      send "sed -i 's/<span class="token variable">${IP}</span>/        <span class="token variable">${IP}</span>/g' <span class="token variable">${INVENTORY_FILE}</span><span class="token entity" title="\r">\r</span>";
      send " ansible-playbook -i <span class="token variable">${INVENTORY_FILE}</span> <span class="token variable">${ZABBIX_PALYBOOK_FILE}</span> \
             -l <span class="token variable">${IP}</span> --skip-tags 'sangoma,debian,suse,windows,docker'<span class="token entity" title="\r">\r</span>";
    }
  }
  expect eof
EOF</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  update_ssh
  integrate_jms <span class="token string">"<span class="token variable">$@</span>"</span>
  integrate_ans_zbx <span class="token string">"<span class="token variable">$@</span>"</span> 
<span class="token punctuation">}</span>

main <span class="token string">"<span class="token variable">$@</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div></template>
