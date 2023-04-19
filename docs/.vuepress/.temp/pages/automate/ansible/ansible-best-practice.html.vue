<template><h1 id="ansible-使用中的一些实践" tabindex="-1"><a class="header-anchor" href="#ansible-使用中的一些实践" aria-hidden="true">#</a> Ansible 使用中的一些实践</h1>
<h2 id="本地执行-记录-输出结果" tabindex="-1"><a class="header-anchor" href="#本地执行-记录-输出结果" aria-hidden="true">#</a> 本地执行 记录 输出结果</h2>
<p>样例一</p>
<p><code>cat check_app.yaml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> no
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">script</span><span class="token punctuation">:</span> port_check.sh
      <span class="token key atrule">register</span><span class="token punctuation">:</span> netstat

    <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> source /etc/profile <span class="token important">&amp;&amp;</span> jps <span class="token punctuation">|</span> grep <span class="token punctuation">-</span>v Jps <span class="token punctuation">|</span> awk '<span class="token punctuation">{</span>print $2<span class="token punctuation">}</span>'
      <span class="token key atrule">register</span><span class="token punctuation">:</span> java

    <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> echo <span class="token punctuation">{</span><span class="token punctuation">{</span>ansible_ssh_host<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>netstat.stdout_lines<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>java.stdout_lines<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">></span><span class="token punctuation">></span> /home/clay/result.txt
      <span class="token key atrule">connection</span><span class="token punctuation">:</span> local
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>cat files/port_check.sh</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function">netstat</span> -npltu <span class="token operator">|</span> <span class="token function">egrep</span> -v <span class="token string">"sshd|zabbix_agentd|ntpd|chronyd"</span> <span class="token operator">|</span> <span class="token function">awk</span> -F/ <span class="token string">'NR>2{ print $2 }'</span> <span class="token operator">|</span> <span class="token function">tr</span> -d <span class="token string">" "</span> <span class="token operator">|</span> <span class="token function">sort</span> -nr <span class="token operator">|</span> <span class="token function">uniq</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>样例二</p>
<p>执行结果返回较多（含换行符），分割成多个文件</p>
<p><code>cat sec_log4j.yml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment">#serial: 1</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> bash sec script
    <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token string">"log4j_scan.sh"</span>
    <span class="token key atrule">register</span><span class="token punctuation">:</span> sec_q
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy output to local file
    <span class="token key atrule">copy</span><span class="token punctuation">:</span>
      <span class="token key atrule">content</span><span class="token punctuation">:</span> <span class="token string">"{{ sec_q.stdout}}"</span>
      <span class="token key atrule">dest</span><span class="token punctuation">:</span> <span class="token string">"/tmp/sec_log4j2/{{ inventory_hostname }}.log"</span>
    <span class="token key atrule">delegate_to</span><span class="token punctuation">:</span> localhost
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
