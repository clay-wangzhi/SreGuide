import{_ as n,e as a}from"./app.f4c852e1.js";const s={},e=a(`<h1 id="_4-5-playbook\u4E4Btags" tabindex="-1"><a class="header-anchor" href="#_4-5-playbook\u4E4Btags" aria-hidden="true">#</a> 4.5 Playbook\u4E4Btags</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1 \u7B80\u4ECB</h2><p>\u5728\u5927\u578B\u9879\u76EE\u5F53\u4E2D\uFF0C\u901A\u5E38\u4E00\u4E2Aplaybook\u4F1A\u6709\u975E\u5E38\u591A\u7684task\u3002\u800C\u6211\u4EEC\u6BCF\u6B21\u6267\u884C\u8FD9\u4E2Aplaybook\u65F6\uFF0C\u90FD\u4F1A\u5C06\u6240\u6709task\u8FD0\u884C\u4E00\u904D\u3002\u800C\u4E8B\u5B9E\u4E0A\uFF0C\u5728\u5B9E\u9645\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u53EA\u662F\u60F3\u8981\u6267\u884C\u5176\u4E2D\u7684\u4E00\u90E8\u5206\u4EFB\u52A1\u800C\u5DF2\uFF0C\u5E76\u4E0D\u60F3\u628A\u6574\u4E2Aplaybook\u5B8C\u6574\u8DD1\u4E00\u904D\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u7528\u5230tags\u3002</p><p>\u901A\u8FC7tags\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7ED9playbook\u4E2D\u7684\u67D0\u4E00\u4E9B\u4EFB\u52A1\u6253\u4E0A\u201C\u6807\u7B7E\u201D\uFF0C\u800C\u5728\u6267\u884Cplaybook\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u9009\u5B9A\u6807\u7B7E\u7684\u65B9\u5F0F\u6307\u5B9A\u53EA\u6267\u884C\u54EA\u4E00\u4E9B\u4EFB\u52A1\u6216\u8005\u4E0D\u6267\u884C\u54EA\u4E00\u4E9B\u4EFB\u52A1\u3002</p><h2 id="_2-\u4E3Atask\u6253tag" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3Atask\u6253tag" aria-hidden="true">#</a> 2 \u4E3Atask\u6253tag</h2><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5B89\u88C5httpd\u7684\u7B80\u5355\u793A\u4F8B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># cat /etc/ansible/playbook/install_web.yml</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4E3A\u4E24\u4E2Atask\u5B9A\u4E49\u4E86\u4E09\u4E2Atags\uFF1A<code>install_httpd</code>\u3001<code>conf_httpd</code>\u4EE5\u53CA<code>start_httpd</code>\u3002</p><h2 id="_3-\u4F7F\u7528tag" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528tag" aria-hidden="true">#</a> 3 \u4F7F\u7528tag</h2><h3 id="_3-1-\u6267\u884C\u6307\u5B9Atag\u7684task" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6267\u884C\u6307\u5B9Atag\u7684task" aria-hidden="true">#</a> 3.1 \u6267\u884C\u6307\u5B9Atag\u7684task</h3><p>\u6709\u4E86tags\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u53EA\u8FD0\u884Cplaybook\u4E2D\u6307\u5B9A\u6807\u7B7E\u7684task\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook  install_web.yml --tags &quot;start_httpd&quot;

PLAY [configure webservers] *************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Start httpd] **********************************************************************************************************************************************************
changed: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=2    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u4E00\u6B21\u6307\u5B9A\u591A\u4E2Atag\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook install_web.yml     --tags &quot;conf_httpd,start_httpd&quot;

PLAY [configure webservers] *************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Cofiguration httpd] ***************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Start httpd] **********************************************************************************************************************************************************
ok: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_3-2-\u6392\u9664\u6307\u5B9Atag\u7684task" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6392\u9664\u6307\u5B9Atag\u7684task" aria-hidden="true">#</a> 3.2 \u6392\u9664\u6307\u5B9Atag\u7684task</h3><p>\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u53EF\u4EE5\u6392\u9664\u6307\u5B9A\u4E86tag\u7684task\uFF0C\u5373\u9664\u4E86\u6307\u5B9Atag\u7684task\u4E0D\u6267\u884C\uFF0C\u5176\u4ED6task\u90FD\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook --skip-tags=&quot;install_httpd&quot; install_web.yml                           

PLAY [configure webservers] *************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Cofiguration httpd] ***************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Start httpd] **********************************************************************************************************************************************************
ok: [10.1.61.187]

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6267\u884C\u6548\u679C\u8DDF\u4E0A\u9762\u4E00\u6837\u3002</p><h3 id="_3-3-\u67E5\u770Bplaybook\u4E2D\u7684\u6240\u6709tag" tabindex="-1"><a class="header-anchor" href="#_3-3-\u67E5\u770Bplaybook\u4E2D\u7684\u6240\u6709tag" aria-hidden="true">#</a> 3.3 \u67E5\u770Bplaybook\u4E2D\u7684\u6240\u6709tag</h3><p>\u53EF\u4EE5\u901A\u8FC7<code>--list-tags</code>\u53C2\u6570\u5217\u51FA\u6307\u5B9A\u7684playbook\u4E2D\u6240\u6709\u7684tag</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook --list-tags install_web.yml                          

playbook: install_web.yml

  play #1 (all): configure webservers   TAGS: []
      TASK TAGS: [conf_httpd, install_httpd, start_httpd]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-\u6253tag\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-\u6253tag\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 4 \u6253tag\u7684\u51E0\u79CD\u65B9\u5F0F</h2><ol><li>\u4E3A\u4E00\u4E2A\u4EFB\u52A1\u6307\u5B9A\u4E00\u4E2A\u6807\u7B7E</li></ol><p>\u8FD9\u79CD\u65B9\u5F0F\u5C31\u662F\u4E0A\u9762\u793A\u4F8B\u4E2D\u7684\u65B9\u6CD5\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tags</span><span class="token punctuation">:</span> conf_httpd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>\u4E3A\u4E00\u4E2A\u4EFB\u52A1\u6307\u5B9A\u591A\u4E2A\u6807\u7B7E</li></ol><p>\u53EF\u4EE5\u901A\u8FC7\u5217\u8868\u7684\u65B9\u5F0F\u4E3A\u4E00\u4E2A\u4EFB\u52A1\u6307\u5B9A\u591A\u4E2A\u6807\u7B7E\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">tags</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> install_httpd
  <span class="token punctuation">-</span> install_web
  
<span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;install_httpd&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;install_web&#39;</span><span class="token punctuation">]</span>

<span class="token key atrule">tags</span><span class="token punctuation">:</span> install_httpd<span class="token punctuation">,</span>install_web
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol><li>\u4E3A\u4E00\u4E2Aplay\u6307\u5B9A\u4E00\u7EC4\u6807\u7B7E</li></ol><p>\u5F53\u4E3A\u4E00\u4E2Aplay\u6307\u5B9A\u4E00\u7EC4\u6807\u7B7E\u540E\uFF0C\u8BE5play\u4E0B\u7684\u6240\u6709task\u90FD\u4F1A\u81EA\u52A8\u7EE7\u627F\u8BE5\u6807\u7B7E\uFF0C\u5404task\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u6807\u7B7E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: configure webservers 
  hosts: all
  remote_user: ansible
  tags: 
    - httpd
  tasks:
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5728\u9759\u6001\u52A0\u8F7D\u6587\u4EF6\u7684\u6307\u4EE4\u4E0A\u6253\u6807\u7B7E\uFF0C\u7B49\u4EF7\u4E8E\u4E3A\u6240\u52A0\u8F7D\u6587\u4EF6\u4E2D\u6240\u6709\u5B50\u4EFB\u52A1\u6253\u6807\u7B7E\u3002</p><p>\u5728\u52A8\u6001\u52A0\u8F7D\u6587\u4EF6\u7684\u6307\u4EE4\u4E0A\u6253\u6807\u7B7E\uFF0C\u4E0D\u4F1A\u4E3A\u5B50\u4EFB\u52A1\u6253\u6807\u7B7E\uFF0C\u800C\u662F\u4E3A\u7236\u4EFB\u52A1\u81EA\u8EAB\u6253\u6807\u7B7E\u3002</p><p>\u73B0\u5728\u8BF4\u7ED3\u8BBA\uFF1A</p><p>(1).\u9759\u6001\u52A0\u8F7D\u7684\u6307\u4EE4\u6709\uFF1Aroles\u3001include\u3001import_tasks\u3001import_role</p><p>(2).\u52A8\u6001\u52A0\u8F7D\u7684\u6307\u4EE4\u53EA\u6709include_xxx\uFF0C\u5305\u62ECinclude_tasks\u3001include_role</p><p>import_playbook\u548Cinclude_playbook\u56E0\u4E3A\u672C\u8EAB\u5C31\u662Fplay\u7EA7\u522B\u6216\u9AD8\u4E8Eplay\u7EA7\u522B\uFF0C\u6240\u4EE5\u4E0D\u80FD\u4E3A\u8FD9\u4E24\u4E2A\u6307\u4EE4\u6253\u6807\u7B7E\u3002</p><h2 id="_5-ansible\u5185\u7F6Etag" tabindex="-1"><a class="header-anchor" href="#_5-ansible\u5185\u7F6Etag" aria-hidden="true">#</a> 5 ansible\u5185\u7F6Etag</h2><p>\u9664\u4E86\u7528\u6237\u81EA\u5B9A\u4E49tag\uFF0Cansible\u4E5F\u5185\u7F6E\u4E86\u51E0\u4E2Atag\uFF0C\u8FD9\u4E9Btag\u90FD\u5305\u542B\u7279\u6B8A\u542B\u4E49\uFF1A</p><ul><li><p>always\uFF1A\u4E00\u65E6\u67D0\u4E2Atask\u88AB\u6253\u4E0A\u4E86always\u7684tag\uFF0C\u5219\u65E0\u8BBA\u662Fplaybook\u7684\u5B8C\u6574\u6267\u884C\uFF0C\u8FD8\u662F\u6307\u5B9Atag\u6267\u884C\uFF0C\u4E0D\u7BA1\u4F60\u6307\u5B9A\u7684tag\u662F\u5565\uFF0C\u8BE5\u4EFB\u52A1\u603B\u662F\u4F1A\u88AB\u6267\u884C\u3002\u9664\u975E\u660E\u786E\u6307\u5B9A&quot;--skip-tags=always&quot;\u9009\u9879\uFF0C\u624D\u4E0D\u4F1A\u6267\u884C\u8BE5task\u3002</p></li><li><p>never\uFF1A\u8BE5\u6807\u7B7E\u4E0Ealways\u6B63\u597D\u76F8\u53CD\uFF0C\u603B\u662F\u4E0D\u4F1A\u6267\u884C\uFF0C\u9664\u975E\u660E\u786E\u6307\u5B9A&quot;--tags=never&quot;\u9009\u9879\u3002</p></li><li><p>tagged\uFF1A\u5728\u8C03\u7528\u65F6\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6240\u6709\u6253\u4E86tag\u7684\u4EFB\u52A1\u90FD\u4F1A\u88AB\u6267\u884C\uFF0C\u5305\u542Bnever tag\u7684\u9664\u5916\uFF0C\u6CA1\u6709\u6807\u7B7E\u7684\u4E0D\u4F1A\u88AB\u6267\u884C</span>
ansible-playbook --tags tagged install_web.yaml 

<span class="token comment"># \u6240\u6709\u6253\u4E86tag\u7684\u4EFB\u52A1\u90FD\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u5305\u62ECalways tag\u4E5F\u4E0D\u4F1A\u88AB\u6267\u884C</span>
ansible-playbook --skip-tags tagged install_web.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>untagged\uFF1A\u5728\u8C03\u7528\u65F6\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6240\u6709\u672A\u6253tag\u7684\u4EFB\u52A1\u90FD\u4F1A\u88AB\u6267\u884C\uFF0C\u6253\u4E86always tag\u7684\u4E5F\u4F1A\u88AB\u6267\u884C</span>
ansibl-playbook --tags untagged install_web.yaml

<span class="token comment"># \u6240\u6709\u672A\u6253tag\u7684\u4EFB\u52A1\u90FD\u4E0D\u4F1A\u88AB\u6267\u884C</span>
ansibl-playbook --skip-tags untagged install_web.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>all\uFF1A\u8868\u793A\u6240\u6709\u4EFB\u52A1\u90FD\u4F1A\u88AB\u6267\u884C\uFF0C\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u6307\u5B9A\u4EFB\u4F55\u6807\u7B7E\uFF0C\u5219\u4F7F\u7528\u7684\u5C31\u662F\u8BE5\u6807\u7B7E</p></li></ul>`,40);function l(p,t){return e}var i=n(s,[["render",l],["__file","playbook-tags.html.vue"]]);export{i as default};
