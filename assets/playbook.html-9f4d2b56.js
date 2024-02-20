import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e as a}from"./app-0d7f3073.js";const i={},l=a(`<h1 id="_4-ansible-playbook" tabindex="-1"><a class="header-anchor" href="#_4-ansible-playbook" aria-hidden="true">#</a> 4 Ansible Playbook</h1><h2 id="_1-ansible-playbook简介" tabindex="-1"><a class="header-anchor" href="#_1-ansible-playbook简介" aria-hidden="true">#</a> 1 Ansible Playbook简介</h2><p>Ansible 靠ansible命令是撑不起自动化管理这把大伞的，Ansible真正强大的是playbook，它才是Ansible撬动自动化管理的结实杠杆。</p><p>ansbile-playbook是一系列ansible命令的集合，利用yaml 语言编写。playbook命令根据自上而下的顺序依次执行。同时，playbook开创了很多特性,它可以允许你传输某个命令的状态到后面的指令,如你可以从一台机器的文件中抓取内容并附为变量,然后在另一台机器中使用,这使得你可以实现一些复杂的部署机制,这是ansible命令无法实现的。</p><p>playbook通过ansible-playbook命令使用,它的参数和ansible命令类似,如参数-k(–ask-pass) 和 -K (–ask-sudo) 来询问ssh密码和sudo密码,-u指定用户,这些指令也可以通过规定的单元写在playbook 。</p><p>ansible-playbook的简单使用方法: ansible-playbook example-play.yml 。</p><h3 id="playbook、play和task的关系" tabindex="-1"><a class="header-anchor" href="#playbook、play和task的关系" aria-hidden="true">#</a> playbook、play和task的关系</h3><ul><li>playbook中可以定义一个或多个play</li><li>每个play中可以定义一个或多个task</li><li>每个play都需要通过hosts指令指定要执行改play的目标主机</li><li>每个play都可以设置一些该play的环境控制行为，比如定义play级别的变量</li></ul><blockquote><p>其中还可以定义两类特殊的task：pre_tasks和post_tasks</p><ul><li>pre_tasks表示执行执行普通任务之前执行的任务列表</li><li>post_tasks表示普通任务执行完之后执行的任务列表</li></ul></blockquote><h2 id="_2-playbook基本语法" tabindex="-1"><a class="header-anchor" href="#_2-playbook基本语法" aria-hidden="true">#</a> 2 Playbook基本语法</h2><p>下面是一个简单的ansible-playbook示例，可以了解其构成:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># cat user.yml</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create user
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    user<span class="token punctuation">:</span><span class="token string">&quot;test&quot;</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create  user
      <span class="token key atrule">user</span><span class="token punctuation">:</span> name=&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置项说明：</p><ul><li><p><code>name</code>：对该playbook实现的功能做一个概述，后面执行过程中，会打印 name变量的值</p></li><li><p><code>hosts</code>：指定对哪些被管理机进行操作；</p></li><li><p><code>remote_user</code>：指定在远程被管理机上执行操作时使用什么用户，如不指定，则使用ansible.cfg中配置的remote_user</p></li><li><p><code>gather_facts</code>：指定在执行任务之前，是否先执行setup模块获取主机相关信息，如未用到，可不指定</p></li><li><p><code>vars</code>：定义后续任务中会使用到的变量，如未用到，可不指定</p></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tasks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：定义具体需要执行的任务</p><ul><li>name：对任务的描述，在执行过程中会打印出来。</li><li>user：指定调用user模块； <ul><li>name：user模块里的一个参数，用于指定创建的用户名称</li></ul></li></ul></li></ul><p>同样，如果想实现把这个新增的用户删除，只需将该playbook文件的最后一行替换为如下行再执行相应的playbook即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user: name=&quot;{{ user }}&quot; state=absent remove=yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-playbook简单示例" tabindex="-1"><a class="header-anchor" href="#_3-playbook简单示例" aria-hidden="true">#</a> 3 Playbook简单示例</h2><p>下面通过playbook管理一个httpd服务器来简单了解下playbook的应用：</p><ol><li>创建playbook</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># cat manage_apache.yml</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> play to setup web server
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> latest httpd version installed
      <span class="token key atrule">yum</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
        <span class="token key atrule">state</span><span class="token punctuation">:</span> latest
        
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> correct index.html is present
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> 
        <span class="token key atrule">src</span><span class="token punctuation">:</span> files/index.html
        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /var/www/html/index.html
        
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start httpd service
      <span class="token key atrule">service</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
        <span class="token key atrule">state</span><span class="token punctuation">:</span> started
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>执行playbook</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible-playbook  manage_apache.yml 

PLAY [play to setup web server] *********************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [latest httpd version installed] ***************************************************************************************************************************************
changed: [10.1.61.187]

TASK [correct index.html is present] ****************************************************************************************************************************************
changed: [10.1.61.187]

TASK [start httpd service] **************************************************************************************************************************************************
changed: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=4    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-ansible-playbook常用选项" tabindex="-1"><a class="header-anchor" href="#_4-ansible-playbook常用选项" aria-hidden="true">#</a> 4 ansible-playbook常用选项</h2><h3 id="_4-1-打印详细信息" tabindex="-1"><a class="header-anchor" href="#_4-1-打印详细信息" aria-hidden="true">#</a> 4.1 打印详细信息</h3><ul><li>-v：打印任务运行结果</li><li>-vv：打印任务运行结果以及任务的配置信息</li><li>-vvv：包含了远程连接的一些信息</li><li>-vvvv：Adds extra verbosity options to the connection plug-ins,including the users being used in the managed hosts to execute scripts, and what scripts have been executed</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible-playbook  manage_apache.yml  -vv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-校验playbook语法" tabindex="-1"><a class="header-anchor" href="#_4-2-校验playbook语法" aria-hidden="true">#</a> 4.2 校验playbook语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible-playbook --syntax-check  manage_apache.yml   

playbook: manage_apache.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Todo: 测试使用 ansible-lint</p></blockquote><h3 id="_4-3-测试运行playbook" tabindex="-1"><a class="header-anchor" href="#_4-3-测试运行playbook" aria-hidden="true">#</a> 4.3 测试运行playbook</h3><p>通过-C选项可以测试playbook的执行情况，但不会真的执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible-playbook -C  manage_apache.yml  

PLAY [play to setup web server] *********************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [latest httpd version installed] ***************************************************************************************************************************************
ok: [10.1.61.187]

TASK [correct index.html is present] ****************************************************************************************************************************************
ok: [10.1.61.187]

TASK [start httpd service] **************************************************************************************************************************************************
ok: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=4    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-playbook模块参数的传递方式" tabindex="-1"><a class="header-anchor" href="#_4-4-playbook模块参数的传递方式" aria-hidden="true">#</a> 4.4 playbook模块参数的传递方式</h3><p>copy模块的参数传递方式如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tasks:
  - name: copy /etc/passwd to /tmp
    copy: src=/etc/passwd dest=/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是标准的yaml语法，参数部分src=/etc/passwd dest=/tmp是一个字符串，当作copy对应的值。根据4_8 yaml介绍的yaml语法，还可以换行书写。有以下几种方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: first play
  hosts: nginx
  gather_facts: false
  tasks:
  - copy:
    src=/etc/passwd dest=/tmp

  - copy:
    src=/etc/passwd
    dest=/tmp

  - copy: &gt;
    src=/etc/passwd
    dest=/tmp

  - copy: |
    src=/etc/passwd
    dest=/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，Ansible还提供了另外两种传递参数的方式：</p><p>(1).将参数和参数值写成key: value的方式</p><p>(2).使用args参数声明接下来的是参数</p><p>通过示例便可对其用法一目了然：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: first play
  hosts: nginx
  gather_facts: false
  tasks:
  - name: copy1
    copy:
      src: /etc/passwd
      dest: /tmp

  - name: copy2
    copy:
    args:
      src: /etc/passwd
      dest: /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大多数时候，使用何种方式传递参数并无关紧要，只要个人觉得可读性高、方便、美观即可。</p><h2 id="_5-multiple-plays" tabindex="-1"><a class="header-anchor" href="#_5-multiple-plays" aria-hidden="true">#</a> 5 Multiple Plays</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># This is a simple playbook with two plays

- name: first play
  hosts: web.example.com
  tasks:
    - name: first task
      yum:
        name: httpd
        status: present
    - name: second task
      service:
        name: httpd
        state: started
    
- name: second play
  hosts: db.example.com
  tasks:
    - name: first task
      yum:
        name: mariadb-server
        status: present
    - name: second task
      service:
        name: mariadb
        state: started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考链接：</p><p>https://www.cnblogs.com/breezey/p/8811250.html</p><p>https://blog.51cto.com/cloumn/blog/1544</p></blockquote>`,46),d=[l];function t(c,p){return n(),s("div",null,d)}const u=e(i,[["render",t],["__file","playbook.html.vue"]]);export{u as default};
