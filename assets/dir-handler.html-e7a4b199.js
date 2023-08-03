import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a as e}from"./app-95912f92.js";const l={},i=e(`<h1 id="_4-1-playbook的结构及handler用法" tabindex="-1"><a class="header-anchor" href="#_4-1-playbook的结构及handler用法" aria-hidden="true">#</a> 4.1 Playbook的结构及handler用法</h1><h2 id="_1-playbook的结构说明" tabindex="-1"><a class="header-anchor" href="#_1-playbook的结构说明" aria-hidden="true">#</a> 1 playbook的结构说明</h2><p>playbook是由一个或多个&quot;play&quot;组成的列表。play的主要功能就是对一组主机应用play中定义好的task。从根本上来讲一个task就是对ansible一个module的调用。而将多个play按照一定的顺序组织到一个playbook中，我们称之为编排。</p><p>playbook主要有以下四部分构成:</p><ul><li>Target section： 用于定义将要执行playbook的远程主机组及远程主机组上的用户，还包括定义通过什么样的方式连接远程主机（默认ssh）</li><li>Variable section： 定义playbook运行时需要使用的变量</li><li>Task section： 定义将要在远程主机上执行的任务列表</li><li>Handler section： 定义task执行完成以后需要调用的任务</li></ul><h2 id="_2-target-section" tabindex="-1"><a class="header-anchor" href="#_2-target-section" aria-hidden="true">#</a> 2 Target section</h2><p>playbook中的每一个play的目的都是为了让某个或某些主机以某个指定的用户身份执行任务。</p><h3 id="_2-1-playbook中的远程用户" tabindex="-1"><a class="header-anchor" href="#_2-1-playbook中的远程用户" aria-hidden="true">#</a> 2.1 Playbook中的远程用户</h3><p>playbook中的远程用户和ad-hoc中的使用没有区别，默认不定义，则直接使用ansible.cfg配置中的用户相关的配置。也可在playbook中定义如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: /etc/hosts is up to date
  hosts: datacenter
  remote_user: automation
  become: yes
  become_mothod: sudo
  become_user: root
  
  tasks:
    - name: server.example.com in /etc/hosts
      lineinfile:
        path: /etc/hosts
        line: &#39;192.168.0.200 server.exmaple.com server&#39;
        state: present
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-playbook中的hosts" tabindex="-1"><a class="header-anchor" href="#_2-2-playbook中的hosts" aria-hidden="true">#</a> 2.2 Playbook中的hosts</h3><p>playbook中的hosts即inentory中的定义主机与主机组，在《Ansible Inventory》中我们讲到了如何选择主机与主机组，在这里也完全适用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: start mariadb
  hosts: db,&amp;london
  tasks:
    - name: start mariadb
      service:
        name: mariadb
        state: started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-variable-section" tabindex="-1"><a class="header-anchor" href="#_3-variable-section" aria-hidden="true">#</a> 3 Variable section</h2><p>vars设置变量vars指令可用于设置变量，可以设置一个或多个变量。下面的设置方式都是合理的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 设置单个变量
vars:
  var1: value1

vars:
  - var1: value1

# 设置多个变量：
vars:
  var1: value1
  var2: value2

vars:
  - var1: value1
  - var2: value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vars可以设置在play级别，也可以设置在task级别：</p><p>(1).设置在play级别，该play范围内的task能访问这些变量，其它play范围内则无法访问；</p><p>(2).设置在task级别，只有该task能访问这些变量，其它task和其它play则无法访问。</p><h2 id="_4-task-section" tabindex="-1"><a class="header-anchor" href="#_4-task-section" aria-hidden="true">#</a> 4 Task section</h2><p>play的主体部分是任务列表。</p><p>任务列表中的各任务按次序逐个在hosts中指定的所有主机上执行，在所有主机上完成第一个任务后再开始第二个。在自上而下运行某playbook时，如果中途发生错误，则整个playbook会停止执行，由于playbook的幂等性，playbook可以被反复执行，所以即使发生了错误，在修复错误后，再执行一次即可。</p><p>定义task可以使用<code>action: module options</code>或<code>module: options</code>的格式，推荐使用后者以实现向后兼容。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> make sure apache is running
    <span class="token key atrule">service</span><span class="token punctuation">:</span> 
      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
      <span class="token key atrule">state</span><span class="token punctuation">:</span> started
      
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> disable selinux
    <span class="token key atrule">command</span><span class="token punctuation">:</span> /sbin/setenforce 0  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果命令或脚本的退出码不为零可以使用如下方式替代：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run this command and ignore the result
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/somecommand <span class="token punctuation">|</span><span class="token punctuation">|</span> /bin/true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用ignore_errors来忽略错误信息：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run this command and ignore the result
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/somecommand
    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-handler-section" tabindex="-1"><a class="header-anchor" href="#_5-handler-section" aria-hidden="true">#</a> 5 Handler section</h2><ul><li>在Ansible Playbook中，handler事实上也是个task，只不过这个task默认并不执行，只有在被触发时才执行。</li><li>handler通过notify来监视某个或者某几个task，一旦task执行结果发生变化，则触发handler，执行相应操作。</li><li>handler会在所有的play都执行完毕之后才会执行，这样可以避免当handler监视的多个task执行结果都发生了变化之后而导致handler的重复执行（handler只需要在最后执行一次即可）。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> template configuration file
    <span class="token key atrule">template</span><span class="token punctuation">:</span> 
      <span class="token key atrule">src</span><span class="token punctuation">:</span> template.j2 
      <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/foo.conf
    <span class="token key atrule">notify</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> restart memcached
      <span class="token punctuation">-</span> restart apache
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start memcached
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> memcached
      <span class="token key atrule">state</span><span class="token punctuation">:</span> started
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start apache
    service
      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
      <span class="token key atrule">state</span><span class="token punctuation">:</span> started
<span class="token key atrule">handlers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart memcached
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> memcached
      <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
      <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在notify中定义内容一定要和tasks中定义的 - name 内容一样，这样才能达到触发的效果，否则会不生效。</p></blockquote><p>默认情况下，在一个play中，只要有task执行失败，则play终止，即使是与handler关联的task在失败的task之前运行成功了，handler也不会被执行。如果希望在这种情况下handler仍然能够执行，则需要使用如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: all
  force_handlers: yes
  tasks:
    - name: a task which always notifies its handler
      command: /bin/true
      notify: restart the database
    - name: a task which fails because the package doesn&#39;t exist
      yum:
        name: notapkg
        state: latest
      
  handlers:
    - name: restart the database
      service:
        name: mariadb
        state: restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果与handler关联的task还未执行，在其前的task已经失败，整个play终止，则handler未被触发，也不会执行。</p></blockquote><blockquote><p>参考链接：</p><p>https://www.cnblogs.com/breezey/p/8811473.html</p><p>https://blog.51cto.com/cloumn/blog/1544</p></blockquote>`,36),t=[i];function d(c,r){return n(),s("div",null,t)}const u=a(l,[["render",d],["__file","dir-handler.html.vue"]]);export{u as default};
