<template><h1 id="_5-5-使用vault配置加密" tabindex="-1"><a class="header-anchor" href="#_5-5-使用vault配置加密" aria-hidden="true">#</a> 5.5 使用vault配置加密</h1>
<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2>
<p>在使用ansible的过程中，不可避免的会存储一些敏感信息，比如在变量文件中存储帐号密码信息等。</p>
<p>ansible通过ansible-vault命令行工具来提供对敏感文件的加密和解密。</p>
<p>ansible-vault可以创建、加密、解密和查看文件。其可以加密任何ansible使用的文件，包括inventory文件，playbook中调用的变量文件等。</p>
<h2 id="_2-ansible-vault常用操作" tabindex="-1"><a class="header-anchor" href="#_2-ansible-vault常用操作" aria-hidden="true">#</a> 2 Ansible-vault常用操作</h2>
<ol>
<li>创建加密文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-vault create file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>编辑加密文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-vault edit file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>重置密码</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-vault rekey file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4">
<li>加密已有文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-vault encrypt file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5">
<li>解密文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-vault decrypt file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6">
<li>查看文件</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible-vault view file
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-ansible-vault配置示例" tabindex="-1"><a class="header-anchor" href="#_3-ansible-vault配置示例" aria-hidden="true">#</a> 3 Ansible-vault配置示例</h2>
<ol>
<li>创建一个user.yml的变量文件，内容如下:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>username: "user1"
pwhash: "$1$GkTPu7we$ZZtdsLPIHkS.fmoVcn3v51"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2">
<li>加密上面创建的变量文件：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># ansible-vault encrypt user.yml 
New Vault password: 
Confirm New Vault password: 
Encryption successful
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3">
<li>编写playbook文件如下：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- name: create user accounts for all our servers
  hosts: test
  become: True
  remote_user: ansible
  vars_files:
    - user.yml
  tasks:
    - name: Creating user from user.yml
      user:
        name: "{{ username }}"
        password: "{{ pwhash }}"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="4">
<li>执行playbook</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># ansible-playbook create_user.yml --ask-vault-pass
Vault password: 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>也可以通过如下操作执行playbook：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo redhat > vault-pass
chmod 600 vault-pass

ansible-playbook create_user.yml --vault-password-file=vault-pass
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
