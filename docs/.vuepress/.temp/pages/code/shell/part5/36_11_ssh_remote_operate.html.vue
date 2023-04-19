<template><p>sh远程脚本
expect非交互式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/usr/bin/expect  
set timeout 30  
spawn ssh -l username 192.168.1.1  
expect "password:"  
send "ispass\r"  
interact  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>［#!/usr/bin/expect］
这一行告诉操作系统脚本里的代码使用那一个shell来执行。这里的expect其实和linux下的bash、windows下的cmd是一类东西。</p>
<p>注意：这一行需要在脚本的第一行。</p>
<p>［set timeout 30］</p>
<p>基本上认识英文的都知道这是设置超时时间的，现在你只要记住他的计时单位是：秒</p>
<p>[spawn ssh -l username 192.168.1.1］</p>
<p>spawn是进入expect环境后才可以执行的expect内部命令，如果没有装expect或者直接在默认的SHELL下执行是</p>
<p>找不到spawn命令的。</p>
<p>所以不要用 “which spawn“之类的命令去找spawn命令。好比windows里的dir就是一个内部命令，这个命令由</p>
<p>shell自带，你无法找到一个dir.com 或 dir.exe 的可执行文件。</p>
<p>它主要的功能是给ssh运行进程加个壳，用来传递交互指令。</p>
<p>[expect &quot;password:&quot;］
这里的expect也是expect的一个内部命令，有点晕吧，expect的shell命令和内部命令是一样的，但不是一个功能，习惯就好了。</p>
<p>这个命令的意思是判断上次输出结果里是否包含“password:”的字符串，如果有则立即返回，否则就等待一段时间后返回，这里等待时长就是前面设置的30秒  。</p>
<p>［send &quot;ispass\r&quot;］<br>
这里就是执行交互动作，与手工输入密码的动作等效。</p>
<p>温馨提示： 命令字符串结尾别忘记加上 “\r”，如果出现异常等待的状态可以核查一下。</p>
<p>[interact］
执行完成后保持交互状态，把控制权交给控制台，这个时候就可以手工操作了。</p>
<p>如果没有这一句登录完成后会退出，而不是留在远程终端上。如果你只是登录过去执行一段命令就退出，可改为［expect eof］</p>
<p>shell脚本嵌套expect脚本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">pass</span><span class="token operator">=</span><span class="token number">123</span>
/usr/bin/expect <span class="token operator">&lt;&lt;</span><span class="token string">EOF
set timeout 30
spawn scp /root/install.log 192.168.1.1:/home
expect "password:"
send "<span class="token variable">$pass</span><span class="token entity" title="\r">\r</span>"
expect eof
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function-name function">integrate_ans_zbx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  /usr/bin/expect <span class="token operator">&lt;&lt;</span><span class="token string">EOF
  set timeout 180
  spawn ssh root@192.168.162.119
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></template>
