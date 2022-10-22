import{_ as n,e as s}from"./app.cb2299af.js";const a={},e=s(`<h1 id="_4-ansible-playbook" tabindex="-1"><a class="header-anchor" href="#_4-ansible-playbook" aria-hidden="true">#</a> 4 Ansible Playbook</h1><h2 id="_1-ansible-playbook\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-ansible-playbook\u7B80\u4ECB" aria-hidden="true">#</a> 1 Ansible Playbook\u7B80\u4ECB</h2><p>Ansible \u9760ansible\u547D\u4EE4\u662F\u6491\u4E0D\u8D77\u81EA\u52A8\u5316\u7BA1\u7406\u8FD9\u628A\u5927\u4F1E\u7684\uFF0CAnsible\u771F\u6B63\u5F3A\u5927\u7684\u662Fplaybook\uFF0C\u5B83\u624D\u662FAnsible\u64AC\u52A8\u81EA\u52A8\u5316\u7BA1\u7406\u7684\u7ED3\u5B9E\u6760\u6746\u3002</p><p>ansbile-playbook\u662F\u4E00\u7CFB\u5217ansible\u547D\u4EE4\u7684\u96C6\u5408\uFF0C\u5229\u7528yaml \u8BED\u8A00\u7F16\u5199\u3002playbook\u547D\u4EE4\u6839\u636E\u81EA\u4E0A\u800C\u4E0B\u7684\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u3002\u540C\u65F6\uFF0Cplaybook\u5F00\u521B\u4E86\u5F88\u591A\u7279\u6027,\u5B83\u53EF\u4EE5\u5141\u8BB8\u4F60\u4F20\u8F93\u67D0\u4E2A\u547D\u4EE4\u7684\u72B6\u6001\u5230\u540E\u9762\u7684\u6307\u4EE4,\u5982\u4F60\u53EF\u4EE5\u4ECE\u4E00\u53F0\u673A\u5668\u7684\u6587\u4EF6\u4E2D\u6293\u53D6\u5185\u5BB9\u5E76\u9644\u4E3A\u53D8\u91CF,\u7136\u540E\u5728\u53E6\u4E00\u53F0\u673A\u5668\u4E2D\u4F7F\u7528,\u8FD9\u4F7F\u5F97\u4F60\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u590D\u6742\u7684\u90E8\u7F72\u673A\u5236,\u8FD9\u662Fansible\u547D\u4EE4\u65E0\u6CD5\u5B9E\u73B0\u7684\u3002</p><p>playbook\u901A\u8FC7ansible-playbook\u547D\u4EE4\u4F7F\u7528,\u5B83\u7684\u53C2\u6570\u548Cansible\u547D\u4EE4\u7C7B\u4F3C,\u5982\u53C2\u6570-k(\u2013ask-pass) \u548C -K (\u2013ask-sudo) \u6765\u8BE2\u95EEssh\u5BC6\u7801\u548Csudo\u5BC6\u7801,-u\u6307\u5B9A\u7528\u6237,\u8FD9\u4E9B\u6307\u4EE4\u4E5F\u53EF\u4EE5\u901A\u8FC7\u89C4\u5B9A\u7684\u5355\u5143\u5199\u5728playbook \u3002</p><p>ansible-playbook\u7684\u7B80\u5355\u4F7F\u7528\u65B9\u6CD5: ansible-playbook example-play.yml \u3002</p><h3 id="playbook\u3001play\u548Ctask\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#playbook\u3001play\u548Ctask\u7684\u5173\u7CFB" aria-hidden="true">#</a> playbook\u3001play\u548Ctask\u7684\u5173\u7CFB</h3><ul><li>playbook\u4E2D\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6216\u591A\u4E2Aplay</li><li>\u6BCF\u4E2Aplay\u4E2D\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6216\u591A\u4E2Atask</li><li>\u6BCF\u4E2Aplay\u90FD\u9700\u8981\u901A\u8FC7hosts\u6307\u4EE4\u6307\u5B9A\u8981\u6267\u884C\u6539play\u7684\u76EE\u6807\u4E3B\u673A</li><li>\u6BCF\u4E2Aplay\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E9B\u8BE5play\u7684\u73AF\u5883\u63A7\u5236\u884C\u4E3A\uFF0C\u6BD4\u5982\u5B9A\u4E49play\u7EA7\u522B\u7684\u53D8\u91CF</li></ul><blockquote><p>\u5176\u4E2D\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u4E24\u7C7B\u7279\u6B8A\u7684task\uFF1Apre_tasks\u548Cpost_tasks</p><ul><li>pre_tasks\u8868\u793A\u6267\u884C\u6267\u884C\u666E\u901A\u4EFB\u52A1\u4E4B\u524D\u6267\u884C\u7684\u4EFB\u52A1\u5217\u8868</li><li>post_tasks\u8868\u793A\u666E\u901A\u4EFB\u52A1\u6267\u884C\u5B8C\u4E4B\u540E\u6267\u884C\u7684\u4EFB\u52A1\u5217\u8868</li></ul></blockquote><h2 id="_2-playbook\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-playbook\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> 2 Playbook\u57FA\u672C\u8BED\u6CD5</h2><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684ansible-playbook\u793A\u4F8B\uFF0C\u53EF\u4EE5\u4E86\u89E3\u5176\u6784\u6210:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># cat user.yml</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create user
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    user<span class="token punctuation">:</span><span class="token string">&quot;test&quot;</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create  user
      <span class="token key atrule">user</span><span class="token punctuation">:</span> name=&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u914D\u7F6E\u9879\u8BF4\u660E\uFF1A</p><ul><li><p><code>name</code>\uFF1A\u5BF9\u8BE5playbook\u5B9E\u73B0\u7684\u529F\u80FD\u505A\u4E00\u4E2A\u6982\u8FF0\uFF0C\u540E\u9762\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u6253\u5370 name\u53D8\u91CF\u7684\u503C</p></li><li><p><code>hosts</code>\uFF1A\u6307\u5B9A\u5BF9\u54EA\u4E9B\u88AB\u7BA1\u7406\u673A\u8FDB\u884C\u64CD\u4F5C\uFF1B</p></li><li><p><code>remote_user</code>\uFF1A\u6307\u5B9A\u5728\u8FDC\u7A0B\u88AB\u7BA1\u7406\u673A\u4E0A\u6267\u884C\u64CD\u4F5C\u65F6\u4F7F\u7528\u4EC0\u4E48\u7528\u6237\uFF0C\u5982\u4E0D\u6307\u5B9A\uFF0C\u5219\u4F7F\u7528ansible.cfg\u4E2D\u914D\u7F6E\u7684remote_user</p></li><li><p><code>gather_facts</code>\uFF1A\u6307\u5B9A\u5728\u6267\u884C\u4EFB\u52A1\u4E4B\u524D\uFF0C\u662F\u5426\u5148\u6267\u884Csetup\u6A21\u5757\u83B7\u53D6\u4E3B\u673A\u76F8\u5173\u4FE1\u606F\uFF0C\u5982\u672A\u7528\u5230\uFF0C\u53EF\u4E0D\u6307\u5B9A</p></li><li><p><code>vars</code>\uFF1A\u5B9A\u4E49\u540E\u7EED\u4EFB\u52A1\u4E2D\u4F1A\u4F7F\u7528\u5230\u7684\u53D8\u91CF\uFF0C\u5982\u672A\u7528\u5230\uFF0C\u53EF\u4E0D\u6307\u5B9A</p></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\uFF1A\u5B9A\u4E49\u5177\u4F53\u9700\u8981\u6267\u884C\u7684\u4EFB\u52A1</p><ul><li>name\uFF1A\u5BF9\u4EFB\u52A1\u7684\u63CF\u8FF0\uFF0C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u4F1A\u6253\u5370\u51FA\u6765\u3002</li><li>user\uFF1A\u6307\u5B9A\u8C03\u7528user\u6A21\u5757\uFF1B <ul><li>name\uFF1Auser\u6A21\u5757\u91CC\u7684\u4E00\u4E2A\u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u521B\u5EFA\u7684\u7528\u6237\u540D\u79F0</li></ul></li></ul></li></ul><p>\u540C\u6837\uFF0C\u5982\u679C\u60F3\u5B9E\u73B0\u628A\u8FD9\u4E2A\u65B0\u589E\u7684\u7528\u6237\u5220\u9664\uFF0C\u53EA\u9700\u5C06\u8BE5playbook\u6587\u4EF6\u7684\u6700\u540E\u4E00\u884C\u66FF\u6362\u4E3A\u5982\u4E0B\u884C\u518D\u6267\u884C\u76F8\u5E94\u7684playbook\u5373\u53EF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user: name=&quot;{{ user }}&quot; state=absent remove=yes
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-playbook\u7B80\u5355\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-playbook\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a> 3 Playbook\u7B80\u5355\u793A\u4F8B</h2><p>\u4E0B\u9762\u901A\u8FC7playbook\u7BA1\u7406\u4E00\u4E2Ahttpd\u670D\u52A1\u5668\u6765\u7B80\u5355\u4E86\u89E3\u4E0Bplaybook\u7684\u5E94\u7528\uFF1A</p><ol><li>\u521B\u5EFAplaybook</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># cat manage_apache.yml</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol><li>\u6267\u884Cplaybook</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook  manage_apache.yml 

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_4-ansible-playbook\u5E38\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#_4-ansible-playbook\u5E38\u7528\u9009\u9879" aria-hidden="true">#</a> 4 ansible-playbook\u5E38\u7528\u9009\u9879</h2><h3 id="_4-1-\u6253\u5370\u8BE6\u7EC6\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6253\u5370\u8BE6\u7EC6\u4FE1\u606F" aria-hidden="true">#</a> 4.1 \u6253\u5370\u8BE6\u7EC6\u4FE1\u606F</h3><ul><li>-v\uFF1A\u6253\u5370\u4EFB\u52A1\u8FD0\u884C\u7ED3\u679C</li><li>-vv\uFF1A\u6253\u5370\u4EFB\u52A1\u8FD0\u884C\u7ED3\u679C\u4EE5\u53CA\u4EFB\u52A1\u7684\u914D\u7F6E\u4FE1\u606F</li><li>-vvv\uFF1A\u5305\u542B\u4E86\u8FDC\u7A0B\u8FDE\u63A5\u7684\u4E00\u4E9B\u4FE1\u606F</li><li>-vvvv\uFF1AAdds extra verbosity options to the connection plug-ins,including the users being used in the managed hosts to execute scripts, and what scripts have been executed</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook  manage_apache.yml  -vv
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-2-\u6821\u9A8Cplaybook\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6821\u9A8Cplaybook\u8BED\u6CD5" aria-hidden="true">#</a> 4.2 \u6821\u9A8Cplaybook\u8BED\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook --syntax-check  manage_apache.yml   

playbook: manage_apache.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4-3-\u6D4B\u8BD5\u8FD0\u884Cplaybook" tabindex="-1"><a class="header-anchor" href="#_4-3-\u6D4B\u8BD5\u8FD0\u884Cplaybook" aria-hidden="true">#</a> 4.3 \u6D4B\u8BD5\u8FD0\u884Cplaybook</h3><p>\u901A\u8FC7-C\u9009\u9879\u53EF\u4EE5\u6D4B\u8BD5playbook\u7684\u6267\u884C\u60C5\u51B5\uFF0C\u4F46\u4E0D\u4F1A\u771F\u7684\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook -C  manage_apache.yml  

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_4-4-playbook\u6A21\u5757\u53C2\u6570\u7684\u4F20\u9012\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-4-playbook\u6A21\u5757\u53C2\u6570\u7684\u4F20\u9012\u65B9\u5F0F" aria-hidden="true">#</a> 4.4 playbook\u6A21\u5757\u53C2\u6570\u7684\u4F20\u9012\u65B9\u5F0F</h3><p>copy\u6A21\u5757\u7684\u53C2\u6570\u4F20\u9012\u65B9\u5F0F\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks:
  - name: copy /etc/passwd to /tmp
    copy: src=/etc/passwd dest=/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u662F\u6807\u51C6\u7684yaml\u8BED\u6CD5\uFF0C\u53C2\u6570\u90E8\u5206src=/etc/passwd dest=/tmp\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5F53\u4F5Ccopy\u5BF9\u5E94\u7684\u503C\u3002\u6839\u636E4_8 yaml\u4ECB\u7ECD\u7684yaml\u8BED\u6CD5\uFF0C\u8FD8\u53EF\u4EE5\u6362\u884C\u4E66\u5199\u3002\u6709\u4EE5\u4E0B\u51E0\u79CD\u65B9\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u9664\u6B64\u4E4B\u5916\uFF0CAnsible\u8FD8\u63D0\u4F9B\u4E86\u53E6\u5916\u4E24\u79CD\u4F20\u9012\u53C2\u6570\u7684\u65B9\u5F0F\uFF1A</p><p>(1).\u5C06\u53C2\u6570\u548C\u53C2\u6570\u503C\u5199\u6210key: value\u7684\u65B9\u5F0F</p><p>(2).\u4F7F\u7528args\u53C2\u6570\u58F0\u660E\u63A5\u4E0B\u6765\u7684\u662F\u53C2\u6570</p><p>\u901A\u8FC7\u793A\u4F8B\u4FBF\u53EF\u5BF9\u5176\u7528\u6CD5\u4E00\u76EE\u4E86\u7136\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5927\u591A\u6570\u65F6\u5019\uFF0C\u4F7F\u7528\u4F55\u79CD\u65B9\u5F0F\u4F20\u9012\u53C2\u6570\u5E76\u65E0\u5173\u7D27\u8981\uFF0C\u53EA\u8981\u4E2A\u4EBA\u89C9\u5F97\u53EF\u8BFB\u6027\u9AD8\u3001\u65B9\u4FBF\u3001\u7F8E\u89C2\u5373\u53EF\u3002</p><h2 id="_5-multiple-plays" tabindex="-1"><a class="header-anchor" href="#_5-multiple-plays" aria-hidden="true">#</a> 5 Multiple Plays</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># This is a simple playbook with two plays

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><blockquote><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>https://www.cnblogs.com/breezey/p/8811250.html</p><p>https://blog.51cto.com/cloumn/blog/1544</p></blockquote>`,45);function l(p,r){return e}var i=n(a,[["render",l],["__file","playbook.html.vue"]]);export{i as default};
