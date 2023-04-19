<template><h1 id="_4-5-playbook之tags" tabindex="-1"><a class="header-anchor" href="#_4-5-playbook之tags" aria-hidden="true">#</a> 4.5 Playbook之tags</h1>
<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2>
<p>在大型项目当中，通常一个playbook会有非常多的task。而我们每次执行这个playbook时，都会将所有task运行一遍。而事实上，在实际使用过程中，我们可能只是想要执行其中的一部分任务而已，并不想把整个playbook完整跑一遍。这个时候就需要用到tags。</p>
<p>通过tags，我们可以给playbook中的某一些任务打上“标签”，而在执行playbook的时候，我们可以通过选定标签的方式指定只执行哪一些任务或者不执行哪一些任务。</p>
<h2 id="_2-为task打tag" tabindex="-1"><a class="header-anchor" href="#_2-为task打tag" aria-hidden="true">#</a> 2 为task打tag</h2>
<p>下面是一个安装httpd的简单示例：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># cat /etc/ansible/playbook/install_web.yml</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> configure webservers 
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> ansible
  
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install httpd
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> 
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
        <span class="token key atrule">state</span><span class="token punctuation">:</span> present
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> install_httpd
        
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cofiguration httpd
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> 
        <span class="token key atrule">src</span><span class="token punctuation">:</span> /root/httpd.conf 
        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/httpd/conf/httpd.conf
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> conf_httpd   
      <span class="token key atrule">notify</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> restart httpd
        
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Start httpd
      <span class="token key atrule">service</span><span class="token punctuation">:</span> 
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd 
        <span class="token key atrule">state</span><span class="token punctuation">:</span> started 
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> no
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> start_httpd

  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart httpd
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>在上面的示例中，我们为两个task定义了三个tags：<code>install_httpd</code>、<code>conf_httpd</code>以及<code>start_httpd</code>。</p>
<h2 id="_3-使用tag" tabindex="-1"><a class="header-anchor" href="#_3-使用tag" aria-hidden="true">#</a> 3 使用tag</h2>
<h3 id="_3-1-执行指定tag的task" tabindex="-1"><a class="header-anchor" href="#_3-1-执行指定tag的task" aria-hidden="true">#</a> 3.1 执行指定tag的task</h3>
<p>有了tags之后，我们就可以只运行playbook中指定标签的task了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># ansible-playbook  install_web.yml --tags "start_httpd"

PLAY [configure webservers] *************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Start httpd] **********************************************************************************************************************************************************
changed: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=2    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>也可以一次指定多个tag执行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># ansible-playbook install_web.yml     --tags "conf_httpd,start_httpd"

PLAY [configure webservers] *************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Cofiguration httpd] ***************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Start httpd] **********************************************************************************************************************************************************
ok: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_3-2-排除指定tag的task" tabindex="-1"><a class="header-anchor" href="#_3-2-排除指定tag的task" aria-hidden="true">#</a> 3.2 排除指定tag的task</h3>
<p>通过下面的方式可以排除指定了tag的task，即除了指定tag的task不执行，其他task都执行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># ansible-playbook --skip-tags="install_httpd" install_web.yml                           

PLAY [configure webservers] *************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Cofiguration httpd] ***************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Start httpd] **********************************************************************************************************************************************************
ok: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>执行效果跟上面一样。</p>
<h3 id="_3-3-查看playbook中的所有tag" tabindex="-1"><a class="header-anchor" href="#_3-3-查看playbook中的所有tag" aria-hidden="true">#</a> 3.3 查看playbook中的所有tag</h3>
<p>可以通过<code>--list-tags</code>参数列出指定的playbook中所有的tag</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># ansible-playbook --list-tags install_web.yml                          

playbook: install_web.yml

  play #1 (all): configure webservers   TAGS: []
      TASK TAGS: [conf_httpd, install_httpd, start_httpd]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-打tag的几种方式" tabindex="-1"><a class="header-anchor" href="#_4-打tag的几种方式" aria-hidden="true">#</a> 4 打tag的几种方式</h2>
<ol>
<li>为一个任务指定一个标签</li>
</ol>
<p>这种方式就是上面示例中的方法：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">tags</span><span class="token punctuation">:</span> conf_httpd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol>
<li>为一个任务指定多个标签</li>
</ol>
<p>可以通过列表的方式为一个任务指定多个标签：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">tags</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> install_httpd
  <span class="token punctuation">-</span> install_web
  
<span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'install_httpd'</span><span class="token punctuation">,</span><span class="token string">'install_web'</span><span class="token punctuation">]</span>

<span class="token key atrule">tags</span><span class="token punctuation">:</span> install_httpd<span class="token punctuation">,</span>install_web
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol>
<li>为一个play指定一组标签</li>
</ol>
<p>当为一个play指定一组标签后，该play下的所有task都会自动继承该标签，各task也可以自定义自己的标签。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- name: configure webservers 
  hosts: all
  remote_user: ansible
  tags: 
    - httpd
  tasks:
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在静态加载文件的指令上打标签，等价于为所加载文件中所有子任务打标签。</p>
<p>在动态加载文件的指令上打标签，不会为子任务打标签，而是为父任务自身打标签。</p>
<p>现在说结论：</p>
<p>(1).静态加载的指令有：roles、include、import_tasks、import_role</p>
<p>(2).动态加载的指令只有include_xxx，包括include_tasks、include_role</p>
<p>import_playbook和include_playbook因为本身就是play级别或高于play级别，所以不能为这两个指令打标签。</p>
<h2 id="_5-ansible内置tag" tabindex="-1"><a class="header-anchor" href="#_5-ansible内置tag" aria-hidden="true">#</a> 5 ansible内置tag</h2>
<p>除了用户自定义tag，ansible也内置了几个tag，这些tag都包含特殊含义：</p>
<ul>
<li>
<p>always：一旦某个task被打上了always的tag，则无论是playbook的完整执行，还是指定tag执行，不管你指定的tag是啥，该任务总是会被执行。除非明确指定&quot;--skip-tags=always&quot;选项，才不会执行该task。</p>
</li>
<li>
<p>never：该标签与always正好相反，总是不会执行，除非明确指定&quot;--tags=never&quot;选项。</p>
</li>
<li>
<p>tagged：在调用时使用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 所有打了tag的任务都会被执行，包含never tag的除外，没有标签的不会被执行</span>
ansible-playbook --tags tagged install_web.yaml 

<span class="token comment"># 所有打了tag的任务都不会被执行，包括always tag也不会被执行</span>
ansible-playbook --skip-tags tagged install_web.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>untagged：在调用时使用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 所有未打tag的任务都会被执行，打了always tag的也会被执行</span>
ansibl-playbook --tags untagged install_web.yaml

<span class="token comment"># 所有未打tag的任务都不会被执行</span>
ansibl-playbook --skip-tags untagged install_web.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>all：表示所有任务都会被执行，在默认情况下，不指定任何标签，则使用的就是该标签</p>
</li>
</ul>
</template>
