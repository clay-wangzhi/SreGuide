import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,a}from"./app-e91902ff.js";const i={},t=a(`<p>sh远程脚本 expect非交互式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/expect  
set timeout 30  
spawn ssh -l username 192.168.1.1  
expect &quot;password:&quot;  
send &quot;ispass\\r&quot;  
interact  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>［#!/usr/bin/expect］ 这一行告诉操作系统脚本里的代码使用那一个shell来执行。这里的expect其实和linux下的bash、windows下的cmd是一类东西。</p><p>注意：这一行需要在脚本的第一行。</p><p>［set timeout 30］</p><p>基本上认识英文的都知道这是设置超时时间的，现在你只要记住他的计时单位是：秒</p><p>[spawn ssh -l username 192.168.1.1］</p><p>spawn是进入expect环境后才可以执行的expect内部命令，如果没有装expect或者直接在默认的SHELL下执行是</p><p>找不到spawn命令的。</p><p>所以不要用 “which spawn“之类的命令去找spawn命令。好比windows里的dir就是一个内部命令，这个命令由</p><p>shell自带，你无法找到一个dir.com 或 dir.exe 的可执行文件。</p><p>它主要的功能是给ssh运行进程加个壳，用来传递交互指令。</p><p>[expect &quot;password:&quot;］ 这里的expect也是expect的一个内部命令，有点晕吧，expect的shell命令和内部命令是一样的，但不是一个功能，习惯就好了。</p><p>这个命令的意思是判断上次输出结果里是否包含“password:”的字符串，如果有则立即返回，否则就等待一段时间后返回，这里等待时长就是前面设置的30秒 。</p><p>［send &quot;ispass\\r&quot;］<br> 这里就是执行交互动作，与手工输入密码的动作等效。</p><p>温馨提示： 命令字符串结尾别忘记加上 “\\r”，如果出现异常等待的状态可以核查一下。</p><p>[interact］ 执行完成后保持交互状态，把控制权交给控制台，这个时候就可以手工操作了。</p><p>如果没有这一句登录完成后会退出，而不是留在远程终端上。如果你只是登录过去执行一段命令就退出，可改为［expect eof］</p><p>shell脚本嵌套expect脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">pass</span><span class="token operator">=</span><span class="token number">123</span>
/usr/bin/expect <span class="token operator">&lt;&lt;</span><span class="token string">EOF
set timeout 30
spawn scp /root/install.log 192.168.1.1:/home
expect &quot;password:&quot;
send &quot;<span class="token variable">$pass</span><span class="token entity" title="\\r">\\r</span>&quot;
expect eof
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),l=[t];function p(c,o){return n(),e("div",null,l)}const u=s(i,[["render",p],["__file","36_11_ssh_remote_operate.html.vue"]]);export{u as default};
