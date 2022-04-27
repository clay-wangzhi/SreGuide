import{_ as n,e as a}from"./app.ac0f71d5.js";const s={},e=a(`<h1 id="_4-1-playbook\u7684\u7ED3\u6784\u53CAhandler\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-1-playbook\u7684\u7ED3\u6784\u53CAhandler\u7528\u6CD5" aria-hidden="true">#</a> 4.1 Playbook\u7684\u7ED3\u6784\u53CAhandler\u7528\u6CD5</h1><h2 id="_1-playbook\u7684\u7ED3\u6784\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-playbook\u7684\u7ED3\u6784\u8BF4\u660E" aria-hidden="true">#</a> 1 playbook\u7684\u7ED3\u6784\u8BF4\u660E</h2><p>playbook\u662F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A&quot;play&quot;\u7EC4\u6210\u7684\u5217\u8868\u3002play\u7684\u4E3B\u8981\u529F\u80FD\u5C31\u662F\u5BF9\u4E00\u7EC4\u4E3B\u673A\u5E94\u7528play\u4E2D\u5B9A\u4E49\u597D\u7684task\u3002\u4ECE\u6839\u672C\u4E0A\u6765\u8BB2\u4E00\u4E2Atask\u5C31\u662F\u5BF9ansible\u4E00\u4E2Amodule\u7684\u8C03\u7528\u3002\u800C\u5C06\u591A\u4E2Aplay\u6309\u7167\u4E00\u5B9A\u7684\u987A\u5E8F\u7EC4\u7EC7\u5230\u4E00\u4E2Aplaybook\u4E2D\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u7F16\u6392\u3002</p><p>playbook\u4E3B\u8981\u6709\u4EE5\u4E0B\u56DB\u90E8\u5206\u6784\u6210:</p><ul><li>Target section\uFF1A \u7528\u4E8E\u5B9A\u4E49\u5C06\u8981\u6267\u884Cplaybook\u7684\u8FDC\u7A0B\u4E3B\u673A\u7EC4\u53CA\u8FDC\u7A0B\u4E3B\u673A\u7EC4\u4E0A\u7684\u7528\u6237\uFF0C\u8FD8\u5305\u62EC\u5B9A\u4E49\u901A\u8FC7\u4EC0\u4E48\u6837\u7684\u65B9\u5F0F\u8FDE\u63A5\u8FDC\u7A0B\u4E3B\u673A\uFF08\u9ED8\u8BA4ssh\uFF09</li><li>Variable section\uFF1A \u5B9A\u4E49playbook\u8FD0\u884C\u65F6\u9700\u8981\u4F7F\u7528\u7684\u53D8\u91CF</li><li>Task section\uFF1A \u5B9A\u4E49\u5C06\u8981\u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u6267\u884C\u7684\u4EFB\u52A1\u5217\u8868</li><li>Handler section\uFF1A \u5B9A\u4E49task\u6267\u884C\u5B8C\u6210\u4EE5\u540E\u9700\u8981\u8C03\u7528\u7684\u4EFB\u52A1</li></ul><h2 id="_2-target-section" tabindex="-1"><a class="header-anchor" href="#_2-target-section" aria-hidden="true">#</a> 2 Target section</h2><p>playbook\u4E2D\u7684\u6BCF\u4E00\u4E2Aplay\u7684\u76EE\u7684\u90FD\u662F\u4E3A\u4E86\u8BA9\u67D0\u4E2A\u6216\u67D0\u4E9B\u4E3B\u673A\u4EE5\u67D0\u4E2A\u6307\u5B9A\u7684\u7528\u6237\u8EAB\u4EFD\u6267\u884C\u4EFB\u52A1\u3002</p><h3 id="_2-1-playbook\u4E2D\u7684\u8FDC\u7A0B\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_2-1-playbook\u4E2D\u7684\u8FDC\u7A0B\u7528\u6237" aria-hidden="true">#</a> 2.1 Playbook\u4E2D\u7684\u8FDC\u7A0B\u7528\u6237</h3><p>playbook\u4E2D\u7684\u8FDC\u7A0B\u7528\u6237\u548Cad-hoc\u4E2D\u7684\u4F7F\u7528\u6CA1\u6709\u533A\u522B\uFF0C\u9ED8\u8BA4\u4E0D\u5B9A\u4E49\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528ansible.cfg\u914D\u7F6E\u4E2D\u7684\u7528\u6237\u76F8\u5173\u7684\u914D\u7F6E\u3002\u4E5F\u53EF\u5728playbook\u4E2D\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: /etc/hosts is up to date
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_2-2-playbook\u4E2D\u7684hosts" tabindex="-1"><a class="header-anchor" href="#_2-2-playbook\u4E2D\u7684hosts" aria-hidden="true">#</a> 2.2 Playbook\u4E2D\u7684hosts</h3><p>playbook\u4E2D\u7684hosts\u5373inentory\u4E2D\u7684\u5B9A\u4E49\u4E3B\u673A\u4E0E\u4E3B\u673A\u7EC4\uFF0C\u5728\u300AAnsible Inventory\u300B\u4E2D\u6211\u4EEC\u8BB2\u5230\u4E86\u5982\u4F55\u9009\u62E9\u4E3B\u673A\u4E0E\u4E3B\u673A\u7EC4\uFF0C\u5728\u8FD9\u91CC\u4E5F\u5B8C\u5168\u9002\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: start mariadb
  hosts: db,&amp;london
  tasks:
    - name: start mariadb
      service:
        name: mariadb
        state: started
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-variable-section" tabindex="-1"><a class="header-anchor" href="#_3-variable-section" aria-hidden="true">#</a> 3 Variable section</h2><p>vars\u8BBE\u7F6E\u53D8\u91CFvars\u6307\u4EE4\u53EF\u7528\u4E8E\u8BBE\u7F6E\u53D8\u91CF\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u6216\u591A\u4E2A\u53D8\u91CF\u3002\u4E0B\u9762\u7684\u8BBE\u7F6E\u65B9\u5F0F\u90FD\u662F\u5408\u7406\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8BBE\u7F6E\u5355\u4E2A\u53D8\u91CF
vars:
  var1: value1

vars:
  - var1: value1

# \u8BBE\u7F6E\u591A\u4E2A\u53D8\u91CF\uFF1A
vars:
  var1: value1
  var2: value2

vars:
  - var1: value1
  - var2: value2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>vars\u53EF\u4EE5\u8BBE\u7F6E\u5728play\u7EA7\u522B\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5728task\u7EA7\u522B\uFF1A</p><p>(1).\u8BBE\u7F6E\u5728play\u7EA7\u522B\uFF0C\u8BE5play\u8303\u56F4\u5185\u7684task\u80FD\u8BBF\u95EE\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u5176\u5B83play\u8303\u56F4\u5185\u5219\u65E0\u6CD5\u8BBF\u95EE\uFF1B</p><p>(2).\u8BBE\u7F6E\u5728task\u7EA7\u522B\uFF0C\u53EA\u6709\u8BE5task\u80FD\u8BBF\u95EE\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u5176\u5B83task\u548C\u5176\u5B83play\u5219\u65E0\u6CD5\u8BBF\u95EE\u3002</p><h2 id="_4-task-section" tabindex="-1"><a class="header-anchor" href="#_4-task-section" aria-hidden="true">#</a> 4 Task section</h2><p>play\u7684\u4E3B\u4F53\u90E8\u5206\u662F\u4EFB\u52A1\u5217\u8868\u3002</p><p>\u4EFB\u52A1\u5217\u8868\u4E2D\u7684\u5404\u4EFB\u52A1\u6309\u6B21\u5E8F\u9010\u4E2A\u5728hosts\u4E2D\u6307\u5B9A\u7684\u6240\u6709\u4E3B\u673A\u4E0A\u6267\u884C\uFF0C\u5728\u6240\u6709\u4E3B\u673A\u4E0A\u5B8C\u6210\u7B2C\u4E00\u4E2A\u4EFB\u52A1\u540E\u518D\u5F00\u59CB\u7B2C\u4E8C\u4E2A\u3002\u5728\u81EA\u4E0A\u800C\u4E0B\u8FD0\u884C\u67D0playbook\u65F6\uFF0C\u5982\u679C\u4E2D\u9014\u53D1\u751F\u9519\u8BEF\uFF0C\u5219\u6574\u4E2Aplaybook\u4F1A\u505C\u6B62\u6267\u884C\uFF0C\u7531\u4E8Eplaybook\u7684\u5E42\u7B49\u6027\uFF0Cplaybook\u53EF\u4EE5\u88AB\u53CD\u590D\u6267\u884C\uFF0C\u6240\u4EE5\u5373\u4F7F\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u5728\u4FEE\u590D\u9519\u8BEF\u540E\uFF0C\u518D\u6267\u884C\u4E00\u6B21\u5373\u53EF\u3002</p><p>\u5B9A\u4E49task\u53EF\u4EE5\u4F7F\u7528<code>action: module options</code>\u6216<code>module: options</code>\u7684\u683C\u5F0F\uFF0C\u63A8\u8350\u4F7F\u7528\u540E\u8005\u4EE5\u5B9E\u73B0\u5411\u540E\u517C\u5BB9\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> make sure apache is running
    <span class="token key atrule">service</span><span class="token punctuation">:</span> 
      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
      <span class="token key atrule">state</span><span class="token punctuation">:</span> started
      
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> disable selinux
    <span class="token key atrule">command</span><span class="token punctuation">:</span> /sbin/setenforce 0  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u679C\u547D\u4EE4\u6216\u811A\u672C\u7684\u9000\u51FA\u7801\u4E0D\u4E3A\u96F6\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u66FF\u4EE3\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run this command and ignore the result
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/somecommand <span class="token punctuation">|</span><span class="token punctuation">|</span> /bin/true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53EF\u4EE5\u4F7F\u7528ignore_errors\u6765\u5FFD\u7565\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run this command and ignore the result
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/somecommand
    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_5-handler-section" tabindex="-1"><a class="header-anchor" href="#_5-handler-section" aria-hidden="true">#</a> 5 Handler section</h2><ul><li>\u5728Ansible Playbook\u4E2D\uFF0Chandler\u4E8B\u5B9E\u4E0A\u4E5F\u662F\u4E2Atask\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u4E2Atask\u9ED8\u8BA4\u5E76\u4E0D\u6267\u884C\uFF0C\u53EA\u6709\u5728\u88AB\u89E6\u53D1\u65F6\u624D\u6267\u884C\u3002</li><li>handler\u901A\u8FC7notify\u6765\u76D1\u89C6\u67D0\u4E2A\u6216\u8005\u67D0\u51E0\u4E2Atask\uFF0C\u4E00\u65E6task\u6267\u884C\u7ED3\u679C\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u89E6\u53D1handler\uFF0C\u6267\u884C\u76F8\u5E94\u64CD\u4F5C\u3002</li><li>handler\u4F1A\u5728\u6240\u6709\u7684play\u90FD\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E\u624D\u4F1A\u6267\u884C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u5F53handler\u76D1\u89C6\u7684\u591A\u4E2Atask\u6267\u884C\u7ED3\u679C\u90FD\u53D1\u751F\u4E86\u53D8\u5316\u4E4B\u540E\u800C\u5BFC\u81F4handler\u7684\u91CD\u590D\u6267\u884C\uFF08handler\u53EA\u9700\u8981\u5728\u6700\u540E\u6267\u884C\u4E00\u6B21\u5373\u53EF\uFF09\u3002</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><blockquote><p>\u5728notify\u4E2D\u5B9A\u4E49\u5185\u5BB9\u4E00\u5B9A\u8981\u548Ctasks\u4E2D\u5B9A\u4E49\u7684 - name \u5185\u5BB9\u4E00\u6837\uFF0C\u8FD9\u6837\u624D\u80FD\u8FBE\u5230\u89E6\u53D1\u7684\u6548\u679C\uFF0C\u5426\u5219\u4F1A\u4E0D\u751F\u6548\u3002</p></blockquote><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u4E00\u4E2Aplay\u4E2D\uFF0C\u53EA\u8981\u6709task\u6267\u884C\u5931\u8D25\uFF0C\u5219play\u7EC8\u6B62\uFF0C\u5373\u4F7F\u662F\u4E0Ehandler\u5173\u8054\u7684task\u5728\u5931\u8D25\u7684task\u4E4B\u524D\u8FD0\u884C\u6210\u529F\u4E86\uFF0Chandler\u4E5F\u4E0D\u4F1A\u88AB\u6267\u884C\u3002\u5982\u679C\u5E0C\u671B\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0Bhandler\u4ECD\u7136\u80FD\u591F\u6267\u884C\uFF0C\u5219\u9700\u8981\u4F7F\u7528\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: all
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p>\u5982\u679C\u4E0Ehandler\u5173\u8054\u7684task\u8FD8\u672A\u6267\u884C\uFF0C\u5728\u5176\u524D\u7684task\u5DF2\u7ECF\u5931\u8D25\uFF0C\u6574\u4E2Aplay\u7EC8\u6B62\uFF0C\u5219handler\u672A\u88AB\u89E6\u53D1\uFF0C\u4E5F\u4E0D\u4F1A\u6267\u884C\u3002</p></blockquote><blockquote><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>https://www.cnblogs.com/breezey/p/8811473.html</p><p>https://blog.51cto.com/cloumn/blog/1544</p></blockquote>`,36);function p(l,t){return e}var c=n(s,[["render",p],["__file","dir-handler.html.vue"]]);export{c as default};
