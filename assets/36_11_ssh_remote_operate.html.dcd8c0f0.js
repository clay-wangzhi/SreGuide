import{_ as s,e as n}from"./app.958f2970.js";const a={},e=n(`<p>sh\u8FDC\u7A0B\u811A\u672C expect\u975E\u4EA4\u4E92\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/expect  
set timeout 30  
spawn ssh -l username 192.168.1.1  
expect &quot;password:&quot;  
send &quot;ispass\\r&quot;  
interact  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\uFF3B#!/usr/bin/expect\uFF3D \u8FD9\u4E00\u884C\u544A\u8BC9\u64CD\u4F5C\u7CFB\u7EDF\u811A\u672C\u91CC\u7684\u4EE3\u7801\u4F7F\u7528\u90A3\u4E00\u4E2Ashell\u6765\u6267\u884C\u3002\u8FD9\u91CC\u7684expect\u5176\u5B9E\u548Clinux\u4E0B\u7684bash\u3001windows\u4E0B\u7684cmd\u662F\u4E00\u7C7B\u4E1C\u897F\u3002</p><p>\u6CE8\u610F\uFF1A\u8FD9\u4E00\u884C\u9700\u8981\u5728\u811A\u672C\u7684\u7B2C\u4E00\u884C\u3002</p><p>\uFF3Bset timeout 30\uFF3D</p><p>\u57FA\u672C\u4E0A\u8BA4\u8BC6\u82F1\u6587\u7684\u90FD\u77E5\u9053\u8FD9\u662F\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u7684\uFF0C\u73B0\u5728\u4F60\u53EA\u8981\u8BB0\u4F4F\u4ED6\u7684\u8BA1\u65F6\u5355\u4F4D\u662F\uFF1A\u79D2</p><p>[spawn ssh -l username 192.168.1.1\uFF3D</p><p>spawn\u662F\u8FDB\u5165expect\u73AF\u5883\u540E\u624D\u53EF\u4EE5\u6267\u884C\u7684expect\u5185\u90E8\u547D\u4EE4\uFF0C\u5982\u679C\u6CA1\u6709\u88C5expect\u6216\u8005\u76F4\u63A5\u5728\u9ED8\u8BA4\u7684SHELL\u4E0B\u6267\u884C\u662F</p><p>\u627E\u4E0D\u5230spawn\u547D\u4EE4\u7684\u3002</p><p>\u6240\u4EE5\u4E0D\u8981\u7528 \u201Cwhich spawn\u201C\u4E4B\u7C7B\u7684\u547D\u4EE4\u53BB\u627Espawn\u547D\u4EE4\u3002\u597D\u6BD4windows\u91CC\u7684dir\u5C31\u662F\u4E00\u4E2A\u5185\u90E8\u547D\u4EE4\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u7531</p><p>shell\u81EA\u5E26\uFF0C\u4F60\u65E0\u6CD5\u627E\u5230\u4E00\u4E2Adir.com \u6216 dir.exe \u7684\u53EF\u6267\u884C\u6587\u4EF6\u3002</p><p>\u5B83\u4E3B\u8981\u7684\u529F\u80FD\u662F\u7ED9ssh\u8FD0\u884C\u8FDB\u7A0B\u52A0\u4E2A\u58F3\uFF0C\u7528\u6765\u4F20\u9012\u4EA4\u4E92\u6307\u4EE4\u3002</p><p>[expect &quot;password:&quot;\uFF3D \u8FD9\u91CC\u7684expect\u4E5F\u662Fexpect\u7684\u4E00\u4E2A\u5185\u90E8\u547D\u4EE4\uFF0C\u6709\u70B9\u6655\u5427\uFF0Cexpect\u7684shell\u547D\u4EE4\u548C\u5185\u90E8\u547D\u4EE4\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u4E0D\u662F\u4E00\u4E2A\u529F\u80FD\uFF0C\u4E60\u60EF\u5C31\u597D\u4E86\u3002</p><p>\u8FD9\u4E2A\u547D\u4EE4\u7684\u610F\u601D\u662F\u5224\u65AD\u4E0A\u6B21\u8F93\u51FA\u7ED3\u679C\u91CC\u662F\u5426\u5305\u542B\u201Cpassword:\u201D\u7684\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u6709\u5219\u7ACB\u5373\u8FD4\u56DE\uFF0C\u5426\u5219\u5C31\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u540E\u8FD4\u56DE\uFF0C\u8FD9\u91CC\u7B49\u5F85\u65F6\u957F\u5C31\u662F\u524D\u9762\u8BBE\u7F6E\u768430\u79D2 \u3002</p><p>\uFF3Bsend &quot;ispass\\r&quot;\uFF3D<br> \u8FD9\u91CC\u5C31\u662F\u6267\u884C\u4EA4\u4E92\u52A8\u4F5C\uFF0C\u4E0E\u624B\u5DE5\u8F93\u5165\u5BC6\u7801\u7684\u52A8\u4F5C\u7B49\u6548\u3002</p><p>\u6E29\u99A8\u63D0\u793A\uFF1A \u547D\u4EE4\u5B57\u7B26\u4E32\u7ED3\u5C3E\u522B\u5FD8\u8BB0\u52A0\u4E0A \u201C\\r\u201D\uFF0C\u5982\u679C\u51FA\u73B0\u5F02\u5E38\u7B49\u5F85\u7684\u72B6\u6001\u53EF\u4EE5\u6838\u67E5\u4E00\u4E0B\u3002</p><p>[interact\uFF3D \u6267\u884C\u5B8C\u6210\u540E\u4FDD\u6301\u4EA4\u4E92\u72B6\u6001\uFF0C\u628A\u63A7\u5236\u6743\u4EA4\u7ED9\u63A7\u5236\u53F0\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u624B\u5DE5\u64CD\u4F5C\u4E86\u3002</p><p>\u5982\u679C\u6CA1\u6709\u8FD9\u4E00\u53E5\u767B\u5F55\u5B8C\u6210\u540E\u4F1A\u9000\u51FA\uFF0C\u800C\u4E0D\u662F\u7559\u5728\u8FDC\u7A0B\u7EC8\u7AEF\u4E0A\u3002\u5982\u679C\u4F60\u53EA\u662F\u767B\u5F55\u8FC7\u53BB\u6267\u884C\u4E00\u6BB5\u547D\u4EE4\u5C31\u9000\u51FA\uFF0C\u53EF\u6539\u4E3A\uFF3Bexpect eof\uFF3D</p><p>shell\u811A\u672C\u5D4C\u5957expect\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">pass</span><span class="token operator">=</span><span class="token number">123</span>
/usr/bin/expect <span class="token operator">&lt;&lt;</span><span class="token string">EOF
set timeout 30
spawn scp /root/install.log 192.168.1.1:/home
expect &quot;password:&quot;
send &quot;<span class="token variable">$pass</span><span class="token entity" title="\\r">\\r</span>&quot;
expect eof
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function-name function">integrate_ans_zbx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  /usr/bin/expect <span class="token operator">&lt;&lt;</span><span class="token string">EOF
  set timeout 180
  spawn ssh root@192.168.162.119
  expect {
    &quot;(yes/no)?&quot; {
      send &quot;yes<span class="token entity" title="\\r">\\r</span>&quot;;
      expect &quot;password:&quot;;
      send &quot;<span class="token variable">\${ANS_PASS}</span><span class="token entity" title="\\r">\\r</span>&quot;;
      exp_continue;
    }
    &quot;password:&quot; {
      send &quot;<span class="token variable">\${ANS_PASS}</span><span class="token entity" title="\\r">\\r</span>&quot;;
      exp_continue;
    }
    &quot;*#&quot; {
      send &quot;sed -i &#39;/# <span class="token variable">\${1}</span> insert/i\\  <span class="token variable">\${IP}</span>:&#39; <span class="token variable">\${INVENTORY_FILE}</span><span class="token entity" title="\\r">\\r</span>&quot;;
      send &quot;sed -i &#39;s/<span class="token variable">\${IP}</span>/        <span class="token variable">\${IP}</span>/g&#39; <span class="token variable">\${INVENTORY_FILE}</span><span class="token entity" title="\\r">\\r</span>&quot;;
      send &quot; ansible-playbook -i <span class="token variable">\${INVENTORY_FILE}</span> <span class="token variable">\${ZABBIX_PALYBOOK_FILE}</span> \\
             -l <span class="token variable">\${IP}</span> --skip-tags &#39;sangoma,debian,suse,windows,docker&#39;<span class="token entity" title="\\r">\\r</span>&quot;;
    }
  }
  expect eof
EOF</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  update_ssh
  integrate_jms <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
  integrate_ans_zbx <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

main <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,21);function p(t,l){return e}var i=s(a,[["render",p],["__file","36_11_ssh_remote_operate.html.vue"]]);export{i as default};
