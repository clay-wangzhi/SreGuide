import{_ as n,e as s}from"./app.e53fe3a5.js";const e={},a=s(`<h1 id="_4-3-playbook\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_4-3-playbook\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> 4.3 Playbook\u6761\u4EF6\u8BED\u53E5</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1 \u7B80\u4ECB</h2><p>\u5728\u6709\u7684\u65F6\u5019play\u7684\u7ED3\u679C\u4F9D\u8D56\u4E8E\u53D8\u91CF\u3001fact\u6216\u8005\u662F\u524D\u4E00\u4E2A\u4EFB\u52A1\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u6216\u8005\u6709\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u57FA\u4E8E\u4E0A\u4E00\u4E2Atask\u6267\u884C\u8FD4\u56DE\u7684\u7ED3\u679C\u800C\u51B3\u5B9A\u5982\u4F55\u6267\u884C\u540E\u7EED\u7684task\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u7528\u5230\u6761\u4EF6\u5224\u65AD\u3002</p><p>\u6761\u4EF6\u8BED\u53E5\u5728Ansible\u4E2D\u7684\u4F7F\u7528\u573A\u666F\uFF1A</p><ul><li>\u5728\u76EE\u6807\u4E3B\u673A\u4E0A\u5B9A\u4E49\u4E86\u4E00\u4E2A\u786C\u9650\u5236\uFF0C\u6BD4\u5982\u76EE\u6807\u4E3B\u673A\u7684\u6700\u5C0F\u5185\u5B58\u5FC5\u987B\u8FBE\u5230\u591A\u5C11\uFF0C\u624D\u80FD\u6267\u884C\u8BE5task</li><li>\u6355\u83B7\u4E00\u4E2A\u547D\u4EE4\u7684\u8F93\u51FA\uFF0C\u6839\u636E\u547D\u4EE4\u8F93\u51FA\u7ED3\u679C\u7684\u4E0D\u540C\u4EE5\u89E6\u53D1\u4E0D\u540C\u7684task</li><li>\u6839\u636E\u4E0D\u540C\u76EE\u6807\u4E3B\u673A\u7684facts\uFF0C\u4EE5\u5B9A\u4E49\u4E0D\u540C\u7684task</li><li>\u6839\u636E\u76EE\u6807\u673A\u7684cpu\u7684\u5927\u5C0F\uFF0C\u4EE5\u8C03\u4F18\u76F8\u5173\u5E94\u7528\u6027\u80FD</li><li>\u7528\u4E8E\u5224\u65AD\u67D0\u4E2A\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u53D1\u751F\u53D8\u66F4\uFF0C\u4EE5\u786E\u5B9A\u662F\u5426\u9700\u8981\u91CD\u542F\u670D\u52A1</li></ul><h2 id="_2-when\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_2-when\u5173\u952E\u5B57" aria-hidden="true">#</a> 2 when\u5173\u952E\u5B57</h2><h3 id="_2-1-when\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-1-when\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 2.1 when\u57FA\u672C\u4F7F\u7528</h3><p>\u5728ansible\u4E2D\uFF0C\u4F7F\u7528\u6761\u4EF6\u5224\u65AD\u7684\u5173\u952E\u5B57\u5C31\u662Fwhen\u3002</p><p>\u5982\u5728\u5B89\u88C5\u5305\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6307\u5B9A\u4E3B\u673A\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7C7B\u578B\uFF0C\u6216\u8005\u662F\u5F53\u64CD\u4F5C\u7CFB\u7EDF\u7684\u786C\u76D8\u6EE1\u4E86\u4E4B\u540E\uFF0C\u9700\u8981\u6E05\u7A7A\u6587\u4EF6\u7B49,\u53EF\u4EE5\u4F7F\u7528when\u8BED\u53E5\u6765\u505A\u5224\u65AD \u3002when\u5173\u952E\u5B57\u540E\u9762\u8DDF\u7740\u7684\u662Fpython\u7684\u8868\u8FBE\u5F0F,\u5728\u8868\u8FBE\u5F0F\u4E2D\u4F60\u80FD\u591F\u4F7F\u7528\u4EFB\u4F55\u7684\u53D8\u91CF\u6216\u8005fact,\u5F53\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u8FD4\u56DE\u7684\u662Ffalse,\u4FBF\u4F1A\u8DF3\u8FC7\u672C\u6B21\u7684\u4EFB\u52A1</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u57FA\u672C\u7684\u7528\u6CD5\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
- name: Install vim
  hosts: all
  tasks:
    - name:Install VIM via yum
      yum: 
        name: vim-enhanced 
        state: installed
      when: ansible_os_family ==&quot;RedHat&quot;
      
    - name:Install VIM via apt
      apt: 
        name: vim 
        state: installed
      when: ansible_os_family ==&quot;Debian&quot;
      
    - name: Unexpected OS family
      debug: msg=&quot;OS Family {{ ansible_os_family }} is not supported&quot; fail=yes
      when: not ansible_os_family ==&quot;RedHat&quot; or ansible_os_family ==&quot;Debian&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_2-2-\u6BD4\u8F83\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6BD4\u8F83\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 2.2 \u6BD4\u8F83\u8FD0\u7B97\u7B26</h3><p>\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u5F53\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86&quot;==&quot;\u7684\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF0C\u5728ansible\u4E2D\uFF0C\u8FD8\u652F\u6301\u5982\u4E0B\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF1A</p><ul><li><code>==</code>\uFF1A\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u662F\u5426\u76F8\u7B49\uFF0C\u76F8\u7B49\u5219\u8FD4\u56DE\u771F\u3002\u53EF\u7528\u4E8E\u6BD4\u8F83\u5B57\u7B26\u4E32\u548C\u6570\u5B57</li><li><code>!=</code>\uFF1A\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u662F\u5426\u4E0D\u7B49\uFF0C\u4E0D\u7B49\u5219\u4E3A\u771F\u3002</li><li><code>&gt;</code>\uFF1A\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u5927\u5C0F\uFF0C\u5DE6\u8FB9\u7684\u503C\u5927\u4E8E\u53F3\u8FB9\u7684\u503C\uFF0C\u5219\u4E3A\u771F</li><li><code>&lt;</code>\uFF1A\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u5927\u5C0F\uFF0C\u5DE6\u8FB9\u7684\u503C\u5C0F\u4E8E\u53F3\u8FB9\u7684\u503C\uFF0C\u5219\u4E3A\u771F</li><li><code>&gt;=</code>\uFF1A\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u5927\u5C0F\uFF0C\u5DE6\u8FB9\u7684\u503C\u5927\u4E8E\u7B49\u4E8E\u53F3\u8FB9\u7684\u503C\uFF0C\u5219\u4E3A\u771F</li><li><code>&lt;=</code>\uFF1A\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u5927\u5C0F\uFF0C\u5DE6\u8FB9\u7684\u503C\u5C0F\u4E8E\u7B49\u4E8E\u53F3\u8FB9\u7684\u503C\uFF0C\u5219\u4E3A\u771F</li></ul><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u7B80\u5355\u7684\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>when: ansible_machine == &quot;x86_64&quot; 

when: max_memory &lt;= 512
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-3-\u903B\u8F91\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-3-\u903B\u8F91\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 2.3 \u903B\u8F91\u8FD0\u7B97\u7B26</h3><p>\u5728Ansible\u4E2D\uFF0C\u9664\u4E86\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF0C\u8FD8\u652F\u6301\u903B\u8F91\u8FD0\u7B97\u7B26\uFF1A</p><ul><li>and\uFF1A\u903B\u8F91\u4E0E\uFF0C\u5F53\u5DE6\u8FB9\u548C\u53F3\u8FB9\u4E24\u4E2A\u8868\u8FBE\u5F0F\u540C\u65F6\u4E3A\u771F\uFF0C\u5219\u8FD4\u56DE\u771F</li><li>or\uFF1A\u903B\u8F91\u6216\uFF0C\u5F53\u5DE6\u53F3\u548C\u53F3\u8FB9\u4E24\u4E2A\u8868\u8FBE\u5F0F\u4EFB\u610F\u4E00\u4E2A\u4E3A\u771F\uFF0C\u5219\u8FD4\u56DE\u771F</li><li>not\uFF1A\u903B\u8F91\u5426\uFF0C\u5BF9\u8868\u8FBE\u5F0F\u53D6\u53CD</li><li>()\uFF1A\u5F53\u4E00\u7EC4\u8868\u8FBE\u5F0F\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u5F62\u6210\u4E00\u4E2A\u66F4\u5927\u7684\u8868\u8FBE\u5F0F\uFF0C\u7EC4\u5408\u5185\u7684\u6240\u6709\u8868\u8FBE\u5F0F\u90FD\u662F\u903B\u8F91\u4E0E\u7684\u5173\u7CFB</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u903B\u8F91\u6216
when: ansible_distribution == &quot;RedHat&quot; or ansible_distribution == &quot;Fedora&quot;

# \u903B\u8F91\u4E0E
when: ansible_distribution_version == &quot;7.5&quot; and ansible_kernel == &quot;3.10.0-327.el7.x86_64&quot;

when:
  - ansible_distribution_version == &quot;7.5&quot;
  - ansible_kernel == &quot;3.10.0-327.el7.x86_64&quot;
  
# \u7EC4\u5408

when: =&gt; 
  ( ansible_distribution == &quot;RedHat&quot; and ansible_distribution_major_version == &quot;7&quot; )
  or
  ( ansible_distribution == &quot;Fedora&quot; and ansible_distribution_major_version == &quot;28&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E00\u4E2A\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5224\u65ADregister\u6CE8\u518C\u53D8\u91CF\u7684\u8FD4\u56DE\u7ED3\u679C
- name: restart httpd if postfix is running
  hosts: test
  tasks:
    - name: get postfix server status
      command: /usr/bin/systemctl is-active postfix
      ignore_errors: yes
      register: result
      
    - name: restart apache httpd based on postfix status
      service:
        name: httpd
        state: restarted
      when: result.rc == 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_3-\u6761\u4EF6\u5224\u65AD\u4E0Etests" tabindex="-1"><a class="header-anchor" href="#_3-\u6761\u4EF6\u5224\u65AD\u4E0Etests" aria-hidden="true">#</a> 3 \u6761\u4EF6\u5224\u65AD\u4E0Etests</h2><p>\u5728shell\u5F53\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4F7F\u7528test\u547D\u4EE4\u6765\u8FDB\u884C\u4E00\u4E9B\u5E38\u7528\u7684\u5224\u65AD\u64CD\u4F5C\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5224\u65AD/test\u6587\u4EF6\u662F\u5426\u5B58\u5728
test -e /test

# \u5224\u65AD/testdir\u662F\u5426\u5B58\u5728\u4E14\u4E3A\u4E00\u4E2A\u76EE\u5F55
test -d /testdir
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E8B\u5B9E\u4E0A\uFF0C\u5728ansible\u4E2D\u4E5F\u6709\u7C7B\u4F3C\u7684\u7528\u6CD5\uFF0C\u53EA\u4E0D\u8FC7ansible\u6CA1\u6709\u4F7F\u7528linux\u7684test\u547D\u4EE4\uFF0C\u800C\u662Fjinja2\u6A21\u677F\u7684tests\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u901A\u8FC7\u6761\u4EF6\u8BED\u53E5\u5224\u65ADtestpath\u7684\u8DEF\u5F84\u662F\u5426\u5B58\u5728
- hosts: test
  vars:
    testpath: /testdir
  tasks:
    - debug:
        msg: &quot;file exist&quot;
      when: testpath is exists
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86<code>is exists</code>\u7528\u4E8E\u8DEF\u5F84\u5B58\u5728\u65F6\u8FD4\u56DE\u771F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>is not exists</code>\u7528\u4E8E\u8DEF\u5F84\u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE\u771F\u3002\u4E5F\u53EF\u4EE5\u5728\u6574\u4E2A\u6761\u4EF6\u8868\u8FBE\u5F0F\u7684\u524D\u9762\u4F7F\u7528not\u4EE5\u53D6\u53CD\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  vars:
    testpath: /testdir1
  tasks:
    - debug:
        msg: &quot;file not exist&quot;
      when: not testpath is exists
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5728ansible\u4E2D\uFF0C\u9664\u4E86\u80FD\u591F\u4F7F\u7528exists\u8FD9\u79CDtests\u4E4B\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u522B\u7684tests\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u8BE6\u7EC6\u8BF4\u4E00\u8BF4\u3002</p><h3 id="_3-1-\u5224\u65AD\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5224\u65AD\u53D8\u91CF" aria-hidden="true">#</a> 3.1 \u5224\u65AD\u53D8\u91CF</h3><ul><li>defined\uFF1A\u5224\u65AD\u53D8\u91CF\u662F\u5426\u5DF2\u5B9A\u4E49\uFF0C\u5DF2\u5B9A\u4E49\u5219\u8FD4\u56DE\u771F</li><li>undefined\uFF1A\u5224\u65AD\u53D8\u91CF\u662F\u5426\u672A\u5B9A\u4E49\uFF0C\u672A\u5B9A\u4E49\u5219\u8FD4\u56DE\u771F</li><li>none\uFF1A\u5224\u65AD\u53D8\u91CF\u7684\u503C\u662F\u5426\u4E3A\u7A7A\uFF0C\u5982\u679C\u53D8\u91CF\u5DF2\u5B9A\u4E49\u4E14\u503C\u4E3A\u7A7A\uFF0C\u5219\u8FD4\u56DE\u771F</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    testvar: &quot;test&quot;
    testvar1:
  tasks:
    - debug:
        msg: &quot;testvar is defined&quot;
      when: testvar is defined
    - debug:
        msg: &quot;testvar2 is undefined&quot;
      when: testvar2 is undefined
    - debug:
        msg: &quot;testvar1 is none&quot;
      when: testvar1 is none
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_3-2-\u5224\u65AD\u6267\u884C\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5224\u65AD\u6267\u884C\u7ED3\u679C" aria-hidden="true">#</a> 3.2 \u5224\u65AD\u6267\u884C\u7ED3\u679C</h3><ul><li>sucess\u6216succeeded\uFF1A\u901A\u8FC7\u4EFB\u52A1\u6267\u884C\u7ED3\u679C\u8FD4\u56DE\u7684\u4FE1\u606F\u5224\u65AD\u4EFB\u52A1\u7684\u6267\u884C\u72B6\u6001\uFF0C\u4EFB\u52A1\u6267\u884C\u6210\u529F\u5219\u8FD4\u56DEtrue</li><li>failure\u6216failed\uFF1A\u4EFB\u52A1\u6267\u884C\u5931\u8D25\u5219\u8FD4\u56DEtrue</li><li>change\u6216changed\uFF1A\u4EFB\u52A1\u6267\u884C\u72B6\u6001\u4E3Achanged\u5219\u8FD4\u56DEtrue</li><li>skip\u6216skipped\uFF1A\u4EFB\u52A1\u88AB\u8DF3\u8FC7\u5219\u8FD4\u56DEtrue</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    doshell: true
  tasks:
    - shell: &#39;cat /testdir/aaa&#39;
      when: doshell
      register: result
      ignore_errors: true
    - debug:
        msg: &quot;success&quot;
      when: result is success
      
    - debug:
        msg: &quot;failed&quot;
      when: result is failure
      
    - debug:
        msg: &quot;changed&quot;
      when: result is change
      
    - debug:
        msg: &quot;skip&quot;
      when: result is skip
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_3-3-\u5224\u65AD\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5224\u65AD\u8DEF\u5F84" aria-hidden="true">#</a> 3.3 \u5224\u65AD\u8DEF\u5F84</h3><ul><li>file\uFF1A\u5224\u65AD\u6307\u5B9A\u8DEF\u5F84\u662F\u5426\u4E3A\u4E00\u4E2A\u6587\u4EF6\uFF0C\u662F\u5219\u4E3A\u771F</li><li>directory\uFF1A\u5224\u65AD\u6307\u5B9A\u8DEF\u5F84\u662F\u5426\u4E3A\u4E00\u4E2A\u76EE\u5F55\uFF0C\u662F\u5219\u4E3A\u771F</li><li>link\uFF1A\u5224\u65AD\u6307\u5B9A\u8DEF\u5F84\u662F\u5426\u4E3A\u4E00\u4E2A\u8F6F\u94FE\u63A5\uFF0C\u662F\u5219\u4E3A\u771F</li><li>mount\uFF1A\u5224\u65AD\u6307\u5B9A\u8DEF\u5F84\u662F\u5426\u4E3A\u4E00\u4E2A\u6302\u8F7D\u70B9\uFF0C\u662F\u5219\u4E3A\u771F</li><li>exists\uFF1A\u5224\u65AD\u6307\u5B9A\u8DEF\u5F84\u662F\u5426\u5B58\u5728\uFF0C\u5B58\u5728\u5219\u4E3A\u771F</li></ul><blockquote><p>\u7279\u522B\u6CE8\u610F\uFF1A\u5173\u4E8E\u8DEF\u5F84\u7684\u6240\u6709\u5224\u65AD\u5747\u662F\u5224\u65AD\u4E3B\u63A7\u7AEF\u4E0A\u7684\u8DEF\u5F84\uFF0C\u800C\u975E\u88AB\u63A7\u7AEF\u4E0A\u7684\u8DEF\u5F84</p></blockquote><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    testpath1: &quot;/testdir/test&quot;
    testpath2: &quot;/testdir&quot;
  tasks:
    - debug:
        msg: &quot;file&quot;
      when: testpath1 is file
    - debug:
        msg: &quot;directory&quot;
      when: testpath2 is directory
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_3-4-\u5224\u65AD\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5224\u65AD\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 3.4 \u5224\u65AD\u5B57\u7B26\u4E32</h3><ul><li>lower\uFF1A\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u7684\u6240\u6709\u5B57\u6BCD\u662F\u5426\u90FD\u662F\u5C0F\u5199\uFF0C\u662F\u5219\u4E3A\u771F</li><li>upper\uFF1A\u5224\u65AD\u5B57\u7B26\u4E32\u4E2D\u7684\u6240\u6709\u5B57\u6BCD\u662F\u5426\u90FD\u662F\u5927\u5199\uFF0C\u662F\u5219\u4E3A\u771F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars: 
    str1: &quot;abc&quot;
    str2: &quot;ABC&quot;
  tasks:
    - debug:
        msg: &quot;str1 is all lowercase&quot;
      when: str1 is lower
    - debug:
        msg: &quot;str2 is all uppercase&quot;
      when: str2 is upper
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_3-5-\u5224\u65AD\u6574\u9664" tabindex="-1"><a class="header-anchor" href="#_3-5-\u5224\u65AD\u6574\u9664" aria-hidden="true">#</a> 3.5 \u5224\u65AD\u6574\u9664</h3><ul><li>even\uFF1A\u5224\u65AD\u6570\u503C\u662F\u5426\u4E3A\u5076\u6570\uFF0C\u662F\u5219\u4E3A\u771F</li><li>odd\uFF1A\u5224\u65AD\u6570\u503C\u662F\u5426\u4E3A\u5947\u6570\uFF0C\u662F\u5219\u4E3A\u771F</li><li>divisibleby(num)\uFF1A\u5224\u65AD\u662F\u5426\u53EF\u4EE5\u6574\u9664\u6307\u5B9A\u7684\u6570\u503C\uFF0C\u662F\u5219\u4E3A\u771F</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars: 
    num1: 6
    num2: 8 
    num3: 15
  tasks:
    - debug: 
        msg: &quot;num1 is an even number&quot;
      when: num1 is even
    - debug:
        msg: &quot;num2 is an odd number&quot;
      when: num2 is odd
    - debug:
        msg: &quot;num3 can be divided exactly by&quot;
      when: num3 is divisibleby(3)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_3-6-\u5176\u4ED6tests" tabindex="-1"><a class="header-anchor" href="#_3-6-\u5176\u4ED6tests" aria-hidden="true">#</a> 3.6 \u5176\u4ED6tests</h3><ol><li><p>version</p><p>\u53EF\u7528\u4E8E\u5BF9\u6BD4\u4E24\u4E2A\u7248\u672C\u53F7\u7684\u5927\u5C0F\uFF0C\u6216\u8005\u4E0E\u6307\u5B9A\u7684\u7248\u672C\u53F7\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u4F7F\u7528\u8BED\u6CD5\u4E3Aversion(&quot;\u7248\u672C\u53F7&quot;,&quot;\u6BD4\u8F83\u64CD\u4F5C\u7B26&quot;)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  vars:
    ver1: 1.2
    ver2: 1.3
  tasks:
    - debug:
        msg: &quot;ver1 is greater than ver2&quot;
      when: ver1 is version(ver2,&quot;&gt;&quot;)
    - debug:
        msg: &quot;system version {{ ansible_distribution_version }} greater than 7.3&quot;
      when: ansible_distribution_version is version(&quot;7.3&quot;,&quot;gt&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>version\u4E2D\u4F7F\u7528\u7684\u6BD4\u8F83\u8FD0\u7B97\u7B26\u8BF4\u660E\uFF1A</p><ul><li>\u5927\u4E8E\uFF1A &gt;, gt</li><li>\u5927\u4E8E\u7B49\u4E8E\uFF1A &gt;=, ge</li><li>\u5C0F\u4E8E\uFF1A &lt;, lt</li><li>\u5C0F\u4E8E\u7B49\u4E8E\uFF1A &lt;=, le</li><li>\u7B49\u4E8E\uFF1A =, ==, eq</li><li>\u4E0D\u7B49\u4E8E\uFF1A !=, &lt;&gt;, ne</li></ul></li><li><p>subset \u5224\u65AD\u4E00\u4E2Alist\u662F\u4E0D\u662F\u53E6\u4E00\u4E2Alist\u7684\u5B50\u96C6</p></li><li><p>superset \u5224\u65AD\u4E00\u4E2Alist\u662F\u4E0D\u662F\u53E6\u4E00\u4E2Alist\u7684\u7236\u96C6&quot;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    a:
      - 2
      - 5
    b: [1,2,3,4,5]
  tasks:
    - debug:
        msg: &quot;A is a subset of B&quot;
      when: a is subset(b)
    - debug:
        msg: &quot;B is the parent set of A&quot;
      when: b is superset(a)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li><li><p>in \u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u5B58\u5728\u4E8E\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\uFF0C\u4E5F\u53EF\u7528\u4E8E\u5224\u65AD\u67D0\u4E2A\u7279\u5B9A\u7684\u503C\u662F\u5426\u5B58\u5728\u4E8E\u5217\u8868\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  vars:
    supported_distros:
      - RedHat
      - CentOS
  tasks:
    - debug:
        msg: &quot;{{ ansible_distribution }} in supported_distros&quot;
      when: ansible_distribution in supported_distros
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>string \u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u662F\u5219\u4E3A\u771F</p></li><li><p>number \u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF0C\u662F\u5219\u4E3A\u771F</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    var1: 1
    var2: &quot;1&quot;
    var3: a
  tasks:
    - debug:
        msg: &quot;var1 is a number&quot;
      when: var1 is number
    - debug:
        msg: &quot;var2 is a string&quot;
      when: var2 is string
    - debug:
        msg: &quot;var3 is a string&quot;
      when: var3 is string
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_4-\u6761\u4EF6\u5224\u65AD\u4E0Eblock" tabindex="-1"><a class="header-anchor" href="#_4-\u6761\u4EF6\u5224\u65AD\u4E0Eblock" aria-hidden="true">#</a> 4 \u6761\u4EF6\u5224\u65AD\u4E0Eblock</h2><h3 id="_4-1-block" tabindex="-1"><a class="header-anchor" href="#_4-1-block" aria-hidden="true">#</a> 4.1 block</h3><p>\u6211\u4EEC\u5728\u524D\u9762\u4F7F\u7528when\u505A\u6761\u4EF6\u5224\u65AD\u65F6\uFF0C\u5982\u679C\u6761\u4EF6\u6210\u7ACB\u5219\u6267\u884C\u5BF9\u5E94\u7684\u4EFB\u52A1\u3002\u4F46\u8FD9\u5C31\u9762\u4E34\u4E00\u4E2A\u95EE\u9898\uFF0C\u5F53\u6211\u4EEC\u8981\u4F7F\u7528\u540C\u4E00\u4E2A\u6761\u4EF6\u5224\u65AD\u6267\u884C\u591A\u4E2A\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u5C31\u610F\u5473\u7740\u6211\u4EEC\u8981\u5728\u67D0\u4E00\u4E2A\u4EFB\u52A1\u4E0B\u9762\u90FD\u5199\u4E00\u4E0Bwhen\u8BED\u53E5\uFF0C\u800C\u4E14\u5224\u65AD\u6761\u4EF6\u5B8C\u5168\u4E00\u6837\u3002\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u4EC5\u9EBB\u70E6\u800C\u4E14\u663E\u5F97low\u3002Ansible\u63D0\u4F9B\u4E86\u4E00\u79CD\u66F4\u597D\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5373block\u3002</p><p>\u5728ansible\u4E2D\uFF0C\u4F7F\u7528block\u5C06\u591A\u4E2A\u4EFB\u52A1\u8FDB\u884C\u7EC4\u5408\uFF0C\u5F53\u4F5C\u4E00\u4E2A\u6574\u4F53\u3002\u6211\u4EEC\u53EF\u4EE5\u5BF9\u8FD9\u4E00\u4E2A\u6574\u4F53\u505A\u6761\u4EF6\u5224\u65AD\uFF0C\u5F53\u6761\u4EF6\u6210\u7ACB\u65F6\uFF0C\u5219\u6267\u884C\u5757\u4E2D\u7684\u6240\u6709\u4EFB\u52A1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  tasks:
    - debug:
        msg: &quot;task1 not in block&quot;
    - block:
        - debug:
            msg: &quot;task2 in block1&quot;
        - debug:
            msg: &quot;task3 in block1&quot;
      when: 2 &gt; 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7A0D\u5FAE\u6709\u7528\u70B9\u513F\u7684\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  tasks:
    - name: set /etc/resolv.conf
      template: 
        src: resolv.conf.j2 
        dest: /etc/resolv.conf 
        owner: root 
        group: root 
        mode: 0644
    - block:
        - name: ensure /etc/resolvconf/resolv.conf.d/base file for ubuntu 16.04
          template: 
            src: resolv.conf.j2
            dest: /etc/resolvconf/resolv.conf.d/base
       
        - name: config dns for ubuntu 16.04
          template: 
            src: resolv.conf.j2
            dest: /etc/resolv.conf
      when: ansible_distribution == &quot;Ubuntu&quot; and ansible_distribution_major_version == &quot;16&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4F7F\u7528block\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ol><li>\u53EF\u4EE5\u4E3Ablock\u5B9A\u4E49name\uFF08ansible 2.3\u589E\u52A0\u7684\u7279\u6027\uFF09</li><li>\u53EF\u4EE5\u76F4\u63A5\u5BF9block\u4F7F\u7528when\uFF0C\u4F46\u4E0D\u80FD\u76F4\u63A5\u5BF9block\u4F7F\u7528loop</li></ol><h3 id="_4-2-rescue" tabindex="-1"><a class="header-anchor" href="#_4-2-rescue" aria-hidden="true">#</a> 4.2 rescue</h3><p>block\u9664\u4E86\u80FD\u548Cwhen\u4E00\u8D77\u4F7F\u7528\u4E4B\u5916\uFF0C\u8FD8\u80FD\u4F5C\u9519\u8BEF\u5904\u7406\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u7528\u5230rescue\u5173\u952E\u5B57\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  tasks:
    - block:
        - shell: &#39;ls /testdir&#39;
      rescue:
        - debug:
            msg: &#39;/testdir is not exists&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5F53block\u4E2D\u7684\u4EFB\u52A1\u6267\u884C\u5931\u8D25\u65F6\uFF0C\u5219\u8FD0\u884Crescue\u4E2D\u7684\u4EFB\u52A1\u3002\u5982\u679Cblock\u4E2D\u7684\u4EFB\u52A1\u6B63\u5E38\u6267\u884C\uFF0C\u5219rescue\u7684\u4EFB\u52A1\u5C31\u4E0D\u4F1A\u88AB\u6267\u884C\u3002\u5982\u679Cblock\u4E2D\u6709\u591A\u4E2A\u4EFB\u52A1\uFF0C\u5219\u4EFB\u4F55\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\u5931\u8D25\uFF0C\u90FD\u4F1A\u6267\u884Crescue\u3002block\u4E2D\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\u4EFB\u52A1\uFF0C\u540C\u6837rescue\u5F53\u4E2D\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\u4EFB\u52A1\u3002</p><h3 id="_4-3-always" tabindex="-1"><a class="header-anchor" href="#_4-3-always" aria-hidden="true">#</a> 4.3 always</h3><p>\u5F53block\u6267\u884C\u5931\u8D25\u65F6\uFF0Crescue\u4E2D\u7684\u4EFB\u52A1\u624D\u4F1A\u88AB\u6267\u884C\uFF1B\u800C\u65E0\u8BBAblock\u6267\u884C\u6210\u529F\u8FD8\u662F\u5931\u8D25\uFF0Calways\u4E2D\u7684\u4EFB\u52A1\u90FD\u4F1A\u88AB\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  tasks:
    - block:
        - shell: &#39;ls /testdir&#39;
      rescue:
        - debug:
            msg: &#39;/testdir is not exists&#39;
      always:
        - debug:
            msg: &#39;This task always executes&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_5-\u6761\u4EF6\u5224\u65AD\u4E0E\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_5-\u6761\u4EF6\u5224\u65AD\u4E0E\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> 5 \u6761\u4EF6\u5224\u65AD\u4E0E\u9519\u8BEF\u5904\u7406</h2><p>\u5728\u4E0A\u9762\u8BB2block\u7684\u4F7F\u7528\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8BF4block\u9664\u4E86\u53EF\u4EE5\u5C06\u591A\u4E2A\u4EFB\u52A1\u7EC4\u5408\u5230\u4E00\u8D77\uFF0C\u8FD8\u6709\u9519\u8BEF\u5904\u7406\u7684\u529F\u80FD\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u7EE7\u7EED\u8BF4\u4E00\u8BF4\u9519\u8BEF\u5904\u7406\u3002</p><h3 id="_5-1-fail\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_5-1-fail\u6A21\u5757" aria-hidden="true">#</a> 5.1 fail\u6A21\u5757</h3><p>\u5728shell\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u6709\u8FD9\u6837\u7684\u9700\u6C42\uFF1A\u5F53\u811A\u672C\u6267\u884C\u81F3\u67D0\u4E2A\u9636\u6BB5\u65F6\uFF0C\u9700\u8981\u5BF9\u67D0\u4E2A\u6761\u4EF6\u8FDB\u884C\u5224\u65AD\uFF0C\u5982\u679C\u6761\u4EF6\u6210\u7ACB\uFF0C\u5219\u7ACB\u5373\u7EC8\u6B62\u811A\u672C\u7684\u8FD0\u884C\u3002\u5728shell\u4E2D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528&quot;exit&quot;\u5373\u53EF\u6267\u884C\u9000\u51FA\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u5728playbook\u4E2D\u4E5F\u6709\u7C7B\u4F3C\u7684\u6A21\u5757\u53EF\u4EE5\u505A\u8FD9\u4EF6\u4E8B\u3002\u5373fail\u6A21\u5757\u3002</p><p>fail\u6A21\u5757\u7528\u4E8E\u7EC8\u6B62\u5F53\u524Dplaybook\u7684\u6267\u884C\uFF0C\u901A\u5E38\u4E0E\u6761\u4EF6\u8BED\u53E5\u7EC4\u5408\u4F7F\u7528\uFF0C\u5F53\u6EE1\u8DB3\u6761\u4EF6\u65F6\uFF0C\u7EC8\u6B62\u5F53\u524Dplay\u7684\u8FD0\u884C\u3002</p><p>\u9009\u9879\u53EA\u6709\u4E00\u4E2A\uFF1A</p><ul><li>msg\uFF1A\u7EC8\u6B62\u524D\u6253\u5370\u51FA\u4FE1\u606F</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u4F7F\u7528fail\u6A21\u5757\u4E2D\u65ADplaybook\u8F93\u51FA</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> test
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> echo &quot;Just a test<span class="token punctuation">-</span><span class="token punctuation">-</span>error&quot; 
      <span class="token key atrule">register</span><span class="token punctuation">:</span> result
    <span class="token punctuation">-</span> <span class="token key atrule">fail</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;Conditions established,Interrupt running playbook&quot;</span>
      <span class="token key atrule">when</span><span class="token punctuation">:</span> <span class="token string">&quot;&#39;error&#39; in result.stdout&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;Inever execute,Because the playbook has stopped&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_5-2-failed-when" tabindex="-1"><a class="header-anchor" href="#_5-2-failed-when" aria-hidden="true">#</a> 5.2 failed_when</h3><p>\u4E8B\u5B9E\u4E0A\uFF0C\u5F53fail\u548Cwhen\u7EC4\u5408\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u8FD8\u6709\u4E00\u4E2A\u66F4\u7B80\u5355\u7684\u5199\u6CD5\uFF0C\u5373<code>failed_when</code>\uFF0C\u5F53\u6EE1\u8DB3\u67D0\u4E2A\u6761\u4EF6\u65F6\uFF0Cansible\u4E3B\u52A8\u89E6\u53D1\u5931\u8D25\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5982\u679C\u5728command_result\u5B58\u5728\u9519\u8BEF\u8F93\u51FA\uFF0C\u4E14\u9519\u8BEF\u8F93\u51FA\u4E2D\uFF0C\u5305\u542B\u4E86\`FAILED\`\u5B57\u4E32\uFF0C\u5373\u8FD4\u56DE\u5931\u8D25\u72B6\u6001\uFF1A
- name: this command prints FAILED when it fails
  command: /usr/bin/example-command -x -y -z
  register: command_result
  failed_when: &quot;&#39;FAILED&#39; in command_result.stderr&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7<code>fail</code>\u6A21\u5757\u548C<code>when</code>\u6761\u4EF6\u8BED\u53E5\uFF0C\u5199\u6210\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: this command prints FAILED when it fails
  command: /usr/bin/example-command -x -y -z
  register: command_result
  ignore_errors: True

- name: fail the play if the previous command did not succeed
  fail: msg=&quot;the command failed&quot;
  when: &quot; command_result.stderr and &#39;FAILED&#39; in command_result.stderr&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>ansible\u4E00\u65E6\u6267\u884C\u8FD4\u56DE\u5931\u8D25\uFF0C\u540E\u7EED\u64CD\u4F5C\u5C31\u4F1A\u4E2D\u6B62\uFF0C\u6240\u4EE5failed_when\u901A\u5E38\u53EF\u4EE5\u7528\u4E8E\u6EE1\u8DB3\u67D0\u79CD\u6761\u4EF6\u65F6\u4E3B\u52A8\u4E2D\u6B62playbook\u8FD0\u884C\u7684\u4E00\u79CD\u65B9\u5F0F\u3002</p></blockquote><blockquote><p>ansible\u9ED8\u8BA4\u5904\u7406\u9519\u8BEF\u7684\u673A\u5236\u662F\u9047\u5230\u9519\u8BEF\u5C31\u505C\u6B62\u6267\u884C\u3002\u4F46\u6709\u4E9B\u65F6\u5019\uFF0C\u6709\u4E9B\u9519\u8BEF\u662F\u8BA1\u5212\u4E4B\u4E2D\u7684\u3002\u6211\u4EEC\u5E0C\u671B\u5FFD\u7565\u8FD9\u4E9B\u9519\u8BEF\uFF0C\u4EE5\u8BA9playbook\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528<code>ignore_errors</code>\u5FFD\u7565\u9519\u8BEF\uFF0C\u4ECE\u800C\u8BA9playbook\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\u3002</p></blockquote><h3 id="_5-3-changed-when" tabindex="-1"><a class="header-anchor" href="#_5-3-changed-when" aria-hidden="true">#</a> 5.3 changed_when</h3><p>\u5F53\u6211\u4EEC\u63A7\u5236\u4E00\u4E9B\u8FDC\u7A0B\u4E3B\u673A\u6267\u884C\u67D0\u4E9B\u4EFB\u52A1\u65F6\uFF0C\u5F53\u4EFB\u52A1\u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u6210\u529F\u6267\u884C\uFF0C\u72B6\u6001\u53D1\u751F\u66F4\u6539\u65F6\uFF0C\u4F1A\u8FD4\u56DEchanged\u72B6\u6001\u54CD\u5E94\uFF0C\u72B6\u6001\u672A\u53D1\u751F\u66F4\u6539\u65F6\uFF0C\u4F1A\u8FD4\u56DEOK\u72B6\u6001\u54CD\u5E94\uFF0C\u5F53\u4EFB\u52A1\u88AB\u8DF3\u8FC7\u65F6\uFF0C\u4F1A\u8FD4\u56DEskipped\u72B6\u6001\u54CD\u5E94\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>changed_when</code>\u6765\u624B\u52A8\u66F4\u6539<code>changed</code>\u54CD\u5E94\u72B6\u6001\u3002\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- shell: /usr/bin/billybass --mode=&quot;take me to the river&quot;
register: bass_result
changed_when: &quot;bass_result.rc != 2&quot;    #\u53EA\u6709\u8BE5\u6761task\u6267\u884C\u4EE5\u540E\uFF0Cbass_result.rc\u7684\u503C\u4E0D\u4E3A2\u65F6\uFF0C\u624D\u4F1A\u8FD4\u56DEchanged\u72B6\u6001

# this will never report &#39;changed&#39; status
- shell: wall &#39;beep&#39;
  changed_when: False    #\u5F53changed_when\u4E3Afalse\u65F6\uFF0C\u8BE5\u6761task\u5728\u6267\u884C\u4EE5\u540E\uFF0C\u6C38\u8FDC\u4E0D\u4F1A\u8FD4\u56DEchanged\u72B6\u6001
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_5-4-\u65AD\u8A00-assert\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_5-4-\u65AD\u8A00-assert\u6A21\u5757" aria-hidden="true">#</a> 5.4 \u65AD\u8A00\uFF1Aassert\u6A21\u5757</h3><p>\u5BF9\u4E8E\u5F53\u6EE1\u8DB3\u67D0\u67D0\u6761\u4EF6\u65F6\u5C31\u5931\u8D25\u7684\u903B\u8F91\uFF0C\u53EF\u4EE5\u4F7F\u7528fail\u6A21\u5757\u52A0when\u6307\u4EE4\u6765\u5B9E\u73B0\uFF0C\u4E5F\u53EF\u4F7F\u7528\u66F4\u4E3A\u76F4\u63A5\u7684assert\u6A21\u5757\u8FDB\u884C\u65AD\u8A00\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
- hosts: localhost
  gather_facts: no
  tasks:
    - assert:
        that:
          - 100 &gt; 20
          - 200 &gt; 200
      fail_msg: &quot;oh, not me&quot;
      success_msg: &quot;oh, it&#39;s me&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5176\u4E2Dthat\u53C2\u6570\u63A5\u6536\u4E00\u4E2A\u5217\u8868\uFF0C\u7528\u4E8E\u5B9A\u4E49\u4E00\u4E2A\u6216\u591A\u4E2A\u6761\u4EF6\uFF0C\u5982\u679C\u6761\u4EF6\u5168\u4E3Atrue\uFF0C\u5219\u4EFB\u52A1\u6210\u529F\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u6761\u4EF6\u4E3Afalse\uFF0C\u5219\u4EFB\u52A1\u5931\u8D25\u3002fail_msg(\u6216\u5176\u522B\u540D\u53C2\u6570msg)\u5B9A\u4E49\u4EFB\u52A1\u5931\u8D25\u65F6\u7684\u4FE1\u606F\uFF0Csuccess_msg\u5B9A\u4E49\u4EFB\u52A1\u6210\u529F\u65F6\u7684\u4FE1\u606F\u3002</p><h3 id="_5-5-any-errors-fatal" tabindex="-1"><a class="header-anchor" href="#_5-5-any-errors-fatal" aria-hidden="true">#</a> 5.5 any_errors_fatal</h3><p>\u5982\u679C\u60F3\u8BA9\u67D0\u4E2A\u5931\u8D25\u7684\u4EFB\u52A1\u76F4\u63A5\u5BFC\u81F4\u6574\u4E2Aplay\u7684\u5931\u8D25\uFF0C\u53EF\u5728play\u7EA7\u522B\u4F7F\u7528any_errors_fatal\u6307\u4EE4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
- hosts: nginx
  gather_facts: no
  any_errors_fatal: true
  tasks:
    - fail:
        msg: &quot;oh, not me&quot;
      when: inventory_hostname == groups[&#39;nginx&#39;][0]
    - debug:
        msg: &quot;hello&quot;

- hosts: localhost
  gather_facts: no
  tasks:
    - debug:
        msg: &quot;HELLO WORLD&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5C06any_errors_fatal\u8BBE\u7F6E\u4E3Atrue\u540E\uFF0Cnginx\u7EC4\u7B2C\u4E00\u4E2A\u8282\u70B9\u53EA\u8981\u4E00\u5F00\u59CB\u6267\u884Cfail\u4EFB\u52A1\uFF0C\u6574\u4E2Aplaybook\u4E2D\u6240\u6709\u540E\u7EED\u4EFB\u52A1\u90FD\u5C06\u4E0D\u518D\u6267\u884C\uFF0C\u5C31\u8FDE\u5176\u5B83play\u4E5F\u4E00\u6837\u4E0D\u6267\u884C\u3002</p><p>\u6CE8\u610F\u89C2\u5BDFplaybook\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u5B83\u5C06\u63D0\u793A&quot;NO MORE HOSTS LEFT&quot;\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>........
TASK [fail] *********************
fatal: [192.168.200.42]: FAILED! =&gt; {&quot;changed&quot;: false, &quot;msg&quot;: &quot;oh, not me&quot;}
skipping: [192.168.200.43]
skipping: [192.168.200.44]

NO MORE HOSTS LEFT **************

PLAY RECAP *************
.........
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_5-6-max-fail-percentage" tabindex="-1"><a class="header-anchor" href="#_5-6-max-fail-percentage" aria-hidden="true">#</a> 5.6 max_fail_percentage</h3><p>\u7565</p><h2 id="_6-\u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\u4F7F\u7528\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_6-\u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\u4F7F\u7528\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> 6 \u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\u4F7F\u7528\u6761\u4EF6\u8BED\u53E5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u53EA\u6253\u5370\u5927\u4E8E5\u7684\u503C
tasks:
    - command: echo {{ item }}
      loop: [ 0, 2, 4, 6, 8, 10 ]
      when: item &gt; 5
# \u786E\u4FDD\u5C06mariadb-server\u5B89\u88C5\u5230\u6839\u5206\u533A\u4E14\u6839\u5206\u533A\u7684\u53EF\u7528\u7A7A\u95F4\u8981\u5927\u4E8E300M
- name: install mariadb-server if enough space on root
  yum: 
    name: mariadb-server
    state\uFF1B\u62C9\u7279st
  loop: &quot;{{ ansible_mounts }}&quot;
  when: item.mount == &quot;/&quot; and item.size_available &gt; 300000000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>\u8F6C\u8F7D\u94FE\u63A5\uFF1Ahttps://www.cnblogs.com/breezey/p/10996632.html</p></blockquote>`,106);function l(r,i){return a}var p=n(e,[["render",l],["__file","playbook-if.html.vue"]]);export{p as default};
