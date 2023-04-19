import{_ as n,e as s}from"./app.a7ee6068.js";const a={},e=s(`<h1 id="_5-1-\u81EA\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_5-1-\u81EA\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> 5.1 \u81EA\u5B9A\u4E49\u53D8\u91CF</h1><p><strong>\u7B80\u5355\u8BF4\u660E</strong></p><p>ansible\u652F\u6301\u53D8\u91CF\uFF0C\u7528\u4E8E\u5B58\u50A8\u4F1A\u5728\u6574\u4E2A\u9879\u76EE\u4E2D\u91CD\u590D\u4F7F\u7528\u5230\u7684\u4E00\u4E9B\u503C\u3002\u4EE5\u7B80\u5316\u9879\u76EE\u7684\u521B\u5EFA\u4E0E\u7EF4\u62A4\uFF0C\u964D\u4F4E\u51FA\u9519\u7684\u673A\u7387\u3002</p><p>\u53D8\u91CF\u7684\u5B9A\u4E49\uFF1A</p><ul><li>\u53D8\u91CF\u540D\u5E94\u8BE5\u7531\u5B57\u6BCD\u3001\u6570\u5B57\u4E0B\u5212\u6570\u7EC4\u6210</li><li>\u53D8\u91CF\u540D\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5F00\u5934</li><li>ansible\u5185\u7F6E\u5173\u952E\u5B57\u4E0D\u80FD\u4F5C\u4E3A\u53D8\u91CF\u540D</li></ul><h1 id="_1-\u5728inventory\u4E2D\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-\u5728inventory\u4E2D\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> 1. \u5728Inventory\u4E2D\u5B9A\u4E49\u53D8\u91CF</h1><h2 id="_1-1-\u5B9A\u4E49\u4E3B\u673A\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B9A\u4E49\u4E3B\u673A\u53D8\u91CF" aria-hidden="true">#</a> 1.1. \u5B9A\u4E49\u4E3B\u673A\u53D8\u91CF</h2><h3 id="_1-1-1-\u5185\u7F6E\u4E3B\u673A\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u5185\u7F6E\u4E3B\u673A\u53D8\u91CF" aria-hidden="true">#</a> 1.1.1. \u5185\u7F6E\u4E3B\u673A\u53D8\u91CF</h3><p>\u6240\u8C13\u5185\u7F6E\u53D8\u91CF\u5176\u5B9E\u5C31\u662Fansible.cfg\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u9009\u9879\uFF0C\u5728\u5176\u524D\u52A0\u4E0A<code>ansible_</code>\u5373\u6210\u4E3A\u5185\u7F6E\u53D8\u91CF\u3002\u5F53\u7136\u5185\u7F6E\u53D8\u62E5\u6709\u6BD4ansible.cfg\u4E2D\u9009\u9879\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\uFF0C\u800C\u4E14\u9488\u5BF9\u4E0D\u540C\u7684\u4E3B\u673A\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4E0D\u540C\u7684\u503C\u3002</p><p>\u5B98\u65B9\u94FE\u63A5\uFF1Ahttps://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#connecting-to-hosts-behavioral-inventory-parameters</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210309153531453.png" alt="image-20210309153531453" loading="lazy"></p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6307\u5B9A\u4E86\u4E09\u53F0\u4E3B\u673A\uFF0C\u4E09\u53F0\u4E3B\u673A\u7684\u7528\u5BC6\u7801\u5206\u522B\u662FP@ssw0rd\u3001123456\u300145789\uFF0C\u6307\u5B9A\u7684ssh\u8FDE\u63A5\u7684\u7528\u6237\u540D\u5206\u522B\u4E3Aroot\u3001breeze\u3001bernie\uFF0Cssh \u7AEF\u53E3\u5206\u522B\u4E3A22\u300122\u30013055 \uFF0C\u8FD9\u6837\u5728ansible\u547D\u4EE4\u6267\u884C\u7684\u65F6\u5019\u5C31\u4E0D\u7528\u518D\u6307\u4EE4\u7528\u6237\u548C\u5BC6\u7801\u7B49\u4E86</span>

<span class="token punctuation">[</span>test<span class="token punctuation">]</span>
<span class="token number">192.168</span>.1.1 <span class="token assign-left variable">ansible_user</span><span class="token operator">=</span>root <span class="token assign-left variable">ansible_password</span><span class="token operator">=</span><span class="token string">&#39;P@ssw0rd&#39;</span>
<span class="token number">192.168</span>.1.2 <span class="token assign-left variable">ansible_user</span><span class="token operator">=</span>breeze <span class="token assign-left variable">ansible_password</span><span class="token operator">=</span><span class="token string">&#39;123456&#39;</span>
<span class="token number">192.168</span>.1.3 <span class="token assign-left variable">ansible_user</span><span class="token operator">=</span>bernie <span class="token assign-left variable">ansible_port</span><span class="token operator">=</span><span class="token number">3055</span> <span class="token assign-left variable">ansible_password</span><span class="token operator">=</span><span class="token string">&#39;456789&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_1-2-\u5B9A\u4E49\u4E3B\u673A\u7EC4\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5B9A\u4E49\u4E3B\u673A\u7EC4\u53D8\u91CF" aria-hidden="true">#</a> 1.2. \u5B9A\u4E49\u4E3B\u673A\u7EC4\u53D8\u91CF</h2><p>\u53D8\u91CF\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7EC4\u540D\uFF0C\u5E94\u7528\u5230\u7EC4\u5185\u7684\u6240\u6709\u6210\u5458\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># test\u7EC4\u4E2D\u5305\u542B\u4E24\u53F0\u4E3B\u673A\uFF0C\u901A\u8FC7\u5BF9test\u7EC4\u6307\u5B9Avars\u53D8\u66F4\uFF0C\u76F8\u5E94\u7684host1\u548Chost2\u76F8\u5F53\u4E8E\u76F8\u5E94\u7684\u6307\u5B9A\u4E86ntp_server\u548Cproxy\u53D8\u91CF\u53C2\u6570\u503C</span>

<span class="token punctuation">[</span>test<span class="token punctuation">]</span>
host1
host2
<span class="token punctuation">[</span>test:vars<span class="token punctuation">]</span>
<span class="token assign-left variable">ntp_server</span><span class="token operator">=</span><span class="token number">192.168</span>.1.10
<span class="token assign-left variable">proxy</span><span class="token operator">=</span><span class="token number">192.168</span>.1.20
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E3B\u673A\u7EC4\u53D8\u91CF\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF0C\u6307\u5B9A\u4E86\u4E00\u4E2A\u6B66\u6C49\u7EC4\u6709web1\u3001web2\uFF1B\u968F\u5DDE\u7EC4\u6709web3\u3001web4\u4E3B\u673A\uFF1B\u53C8\u6307\u5B9A\u4E86\u4E00\u4E2A\u6E56\u5317\u7EC4\uFF0C\u540C\u65F6\u5305\u542B\u6B66\u6C49\u548C\u968F\u5DDE\uFF1B\u540C\u65F6\u4E3A\u8BE5\u7EC4\u5185\u7684\u6240\u6709\u4E3B\u673A\u6307\u5B9A\u4E862\u4E2Avars\u53D8\u91CF\u3002\u8BBE\u5B9A\u4E86\u4E00\u4E2A\u7EC4\u4E2D\u56FD\u7EC4\uFF0C\u5305\u542B\u6E56\u5317\u3001\u6E56\u5357\u3002

[wuhan]
web1
web2

[suizhou]
web4
web3

[hubei:children]
wuhan
suizhou

[hubei:vars]
ntp_server=192.168.1.10
zabbix_server=192.168.1.10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h1 id="_2-\u5728playbook\u4E2D\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-\u5728playbook\u4E2D\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> 2. \u5728Playbook\u4E2D\u5B9A\u4E49\u53D8\u91CF</h1><h2 id="_2-1-\u53D8\u91CF\u7684\u5B9A\u4E49\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u53D8\u91CF\u7684\u5B9A\u4E49\u65B9\u5F0F" aria-hidden="true">#</a> 2.1. \u53D8\u91CF\u7684\u5B9A\u4E49\u65B9\u5F0F</h2><h3 id="_2-1-1-\u901A\u8FC7vars\u5173\u952E\u5B57\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u901A\u8FC7vars\u5173\u952E\u5B57\u5B9A\u4E49" aria-hidden="true">#</a> 2.1.1. \u901A\u8FC7vars\u5173\u952E\u5B57\u5B9A\u4E49</h3><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> name\uFF1A use vars define invrionmemnt
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> test
  <span class="token key atrule">user</span><span class="token punctuation">:</span> ansible
  <span class="token key atrule">vars</span><span class="token punctuation">:</span> 
    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">server_name</span><span class="token punctuation">:</span> localhost
    <span class="token key atrule">conf_file</span><span class="token punctuation">:</span> /etc/nginx/conf/default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-1-2-\u901A\u8FC7vars-files\u5173\u952E\u5B57\u5F15\u5165\u53D8\u91CF\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u901A\u8FC7vars-files\u5173\u952E\u5B57\u5F15\u5165\u53D8\u91CF\u6587\u4EF6" aria-hidden="true">#</a> 2.1.2. \u901A\u8FC7vars_files\u5173\u952E\u5B57\u5F15\u5165\u53D8\u91CF\u6587\u4EF6</h3><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">favcolor</span><span class="token punctuation">:</span> blue
  <span class="token key atrule">vars_files</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> vars/external_vars.yml
    <span class="token punctuation">-</span> vars/user_vars.yml

<span class="token comment"># vars/user_vars.yml\u793A\u4F8B\uFF1A</span>

<span class="token key atrule">users</span><span class="token punctuation">:</span>
  <span class="token key atrule">bjones</span><span class="token punctuation">:</span>
    <span class="token key atrule">first_name</span><span class="token punctuation">:</span> Bob
    <span class="token key atrule">last_name</span><span class="token punctuation">:</span> Jones
    <span class="token key atrule">home_dirs</span><span class="token punctuation">:</span> /users/bjones
  <span class="token key atrule">acook</span><span class="token punctuation">:</span>
    <span class="token key atrule">first_name</span><span class="token punctuation">:</span> Anne
    <span class="token key atrule">last_name</span><span class="token punctuation">:</span> Cook
    <span class="token key atrule">home_dirs</span><span class="token punctuation">:</span> /users/acook
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><blockquote><p>\u53D8\u91CF\u7684\u5B9A\u4E49\u683C\u5F0F\u662F\u6210\u952E\u503C\u5BF9\u51FA\u73B0\u7684\uFF0C\u952E\u503C\u5BF9\u4E4B\u95F4\u53EF\u4EE5\u5D4C\u5957\uFF0C\u6700\u7EC8\u5F62\u6210\u4E00\u4E2A\u5927\u5B57\u5178</p></blockquote><p>\u548Cvars\u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u5B83\u662F\u5C06\u53D8\u91CF\u4EE5\u5B57\u5178\u683C\u5F0F\u5B9A\u4E49\u5728\u72EC\u7ACB\u7684\u6587\u4EF6\u4E2D\uFF0C\u4E14<code>vars_files</code>\u4E0D\u80FD\u5B9A\u4E49\u5728task\u5C42\u6B21\uFF0C\u53EA\u80FD\u5B9A\u4E49\u5728play\u5C42\u6B21\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
    - hosts: localhost
      vars_files: 
        - /tmp/var_file1.yml
        - var_file2.yml
      tasks: 
         - debug: msg=&quot;{{var1}} {{var2}}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762var_file2.yml\u4F7F\u7528\u7684\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u57FA\u4E8Eplaybook\u6240\u5728\u7684\u8DEF\u5F84\u3002\u4F8B\u5982\u8BE5playbook\u4E3A/tmp/x.yml\uFF0C\u5219var_file2.yml\u4E5F\u5E94\u8BE5\u5728/tmp\u4E0B\u3002\u5F53\u7136\uFF0C\u5B8C\u5168\u53EF\u4EE5\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u3002</p><h3 id="_2-1-3-\u5728playbook\u4E2D\u901A\u8FC7host-vars\u548Cgroup-vars\u76EE\u5F55\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u5728playbook\u4E2D\u901A\u8FC7host-vars\u548Cgroup-vars\u76EE\u5F55\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> 2.1.3. \u5728playbook\u4E2D\u901A\u8FC7host_vars\u548Cgroup_vars\u76EE\u5F55\u5B9A\u4E49\u53D8\u91CF</h3><p>\u4E0B\u9762\u8FD9\u662F\u4E00\u4E2A\u9879\u76EE\u7684playbook\u76EE\u5F55\u7ED3\u6784\u3002\u8FD9\u4E2A\u9879\u76EE\u4E2D\uFF0C\u5305\u542B\u4E00\u4E2Aansible.cfg\u6587\u4EF6\uFF0C\u4E00\u4E2Ainventory\u6587\u4EF6\uFF0C\u4E00\u4E2Aplaybook.yml\u6587\u4EF6\uFF0C\u4E00\u4E2A<code>group_vars</code>\u76EE\u5F55\u548C\u4E00\u4E2A<code>host_vars</code>\u76EE\u5F55:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># tree /etc/ansible/playbooks/project
/etc/ansible/playbooks/project
\u251C\u2500\u2500 ansible.cfg
\u251C\u2500\u2500 group_vars
\u2502   \u251C\u2500\u2500 datacenter1
\u2502   \u251C\u2500\u2500 datacenter2
\u2502   \u2514\u2500\u2500 datacenters
\u251C\u2500\u2500 host_vars
\u2502   \u251C\u2500\u2500 demo1.example.com
\u2502   \u251C\u2500\u2500 demo2.example.com
\u2502   \u251C\u2500\u2500 demo3.example.com
\u2502   \u2514\u2500\u2500 demo4.example.com
\u251C\u2500\u2500 inventory
\u2514\u2500\u2500 playbook.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5176\u4E2Dinventory\u6587\u4EF6\u7684\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[datacenter1]
demo1.example.com
demo2.example.com

[datacenter2]
demo3.example.com
demo4.example.com

[datacenters:children]
datacenter1
datacenter2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230group_vars\u76EE\u5F55\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E09\u4E2A\u6587\u4EF6\uFF0C\u5206\u522B\u4EE5inventory\u6587\u4EF6\u4E2D\u7684\u4E09\u4E2A\u4E3B\u673A\u7EC4\u547D\u540D\uFF0C\u6240\u4EE5\u8FD9\u4E09\u4E2A\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u5C31\u5206\u522B\u662F\u8FD9\u4E09\u4E2A\u7EC4\u53EF\u4EE5\u4F7F\u7528\u7684\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat datacenter1
package: httpd

# cat datacenter2 
package: apache

# cat datacenters 
package: httpd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5728host_vars\u76EE\u5F55\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E09\u4E2A\u6587\u4EF6\uFF0C\u5206\u522B\u4EE5inventory\u6587\u4EF6\u4E2D\u7684\u56DB\u4E2A\u4E3B\u673A\u547D\u540D\uFF0C\u6240\u4EE5\u8FD9\u56DB\u4E2A\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u5C31\u5206\u522B\u662F\u8FD9\u56DB\u4E2A\u4E3B\u673A\u53EF\u4EE5\u4F7F\u7528\u7684\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat demo1.example.com 
package: httpd

# cat demo2.example.com 
package: apache

# cat demo3.example.com 
package: mariadb-server

# cat demo4.example.com 
package: mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>\u9700\u8981\u8BF4\u660E\u7684\u662F\uFF0C\u5982\u679C\u4E3B\u673A\u7EC4\u5B9A\u4E49\u7684\u53D8\u91CF\u4E0E\u4E3B\u673A\u51B2\u7A81\uFF0C\u4E3B\u673A\u53D8\u91CF\u4F18\u5148\u7EA7\u6700\u9AD8</p></blockquote><h3 id="_2-1-4-\u6CE8\u518C\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-1-4-\u6CE8\u518C\u53D8\u91CF" aria-hidden="true">#</a> 2.1.4. \u6CE8\u518C\u53D8\u91CF</h3><p>\u5728\u6709\u4E9B\u65F6\u5019\uFF0C\u53EF\u80FD\u9700\u8981\u5C06\u67D0\u4E00\u6761\u4EFB\u52A1\u6267\u884C\u7684\u7ED3\u679C\u4FDD\u5B58\u4E0B\u6765\uFF0C\u4EE5\u4FBF\u5728\u63A5\u4E0B\u7684\u4EFB\u52A1\u4E2D\u8C03\u7528\u6216\u8005\u505A\u4E9B\u5224\u65AD\u3002\u53EF\u4EE5\u901A\u8FC7register\u5173\u952E\u5B57\u6765\u5B9E\u73B0\u5C06\u67D0\u4E00\u4EFB\u52A1\u7ED3\u679C\u4FDD\u5B58\u4E3A\u4E00\u4E2A\u53D8\u91CF\u3002</p><p>\u4E0B\u9762\u662F\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5C06whoami\u547D\u4EE4\u6267\u884C\u7684\u7ED3\u679C\u6CE8\u518C\u5230\u53D8\u91CFlogin\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: register variables
  hosts: test
  tasks:
    - name: capture output of whoami command
      command: whoami
      register: login
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6CE8\u518C\u53D8\u91CF\u7684\u5E94\u7528\u573A\u666F\uFF1A</p><ul><li>\u5728\u4E00\u53F0\u8FDC\u7AEF\u7684\u670D\u52A1\u5668\u83B7\u53D6\u4E00\u4E2A\u76EE\u5F55\u4E0B\u7684\u4E00\u5217\u8868\u7684\u6587\u4EF6,\u7136\u540E\u4E0B\u8F7D\u8FD9\u4E9B\u6587\u4EF6</li><li>\u5728handler\u6267\u884C\u4E4B\u524D,\u53D1\u73B0\u524D\u9762\u4E00\u4E2Atask\u53D1\u751F\u4E86changed,\u7136\u540E\u6267\u884C\u4E00\u4E2A\u6307\u5B9A\u7684task</li><li>\u83B7\u53D6\u8FDC\u7AEF\u670D\u52A1\u5668\u7684ssh key\u7684\u5185\u5BB9,\u6784\u5EFA\u51FAknown_hosts\u6587\u4EF6</li></ul><h3 id="_2-1-5-\u901A\u8FC7\u547D\u4EE4\u884C\u8BBE\u7F6E\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-1-5-\u901A\u8FC7\u547D\u4EE4\u884C\u8BBE\u7F6E\u53D8\u91CF" aria-hidden="true">#</a> 2.1.5. \u901A\u8FC7\u547D\u4EE4\u884C\u8BBE\u7F6E\u53D8\u91CF</h3><p>\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
- hosts: &#39;{{ hosts }}&#39;
  remote_user: &#39;{{ user }}&#39;
  tasks:
     - ...
     
ansible-playbook release.yml --extra-vars &quot;hosts=vipers user=starbuck&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u5199\u6210\u7C7B\u4F3C\u5982\u4E0B\u65B9\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--extra-vars &#39;{&quot;hosts&quot;:&quot;vipers&quot;,&quot;user&quot;:&quot;starbuck&quot;}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-2-\u4F7F\u7528\u4E0E\u8C03\u8BD5\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4F7F\u7528\u4E0E\u8C03\u8BD5\u53D8\u91CF" aria-hidden="true">#</a> 2.2 \u4F7F\u7528\u4E0E\u8C03\u8BD5\u53D8\u91CF</h2><p>\u6211\u4EEC\u901A\u8FC7\u4EE5\u4E0A5\u79CD\u65B9\u5F0F\u5728playbook\u4E2D\u5B9A\u4E49\u4E86\u5404\u79CD\u53D8\u91CF\u3002\u8BF4\u5230\u5E95\uFF0C\u6700\u7EC8\u7684\u76EE\u7684\uFF0C\u8FD8\u662F\u4E3A\u4E86\u65B9\u4FBF\u4F7F\u7528\u3002\u4E0B\u9762\u6211\u4EEC\u5C31\u770B\u4E00\u770B\u5177\u4F53\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\u3002</p><h3 id="_2-2-1-\u53D8\u91CF\u7684\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u53D8\u91CF\u7684\u5F15\u7528" aria-hidden="true">#</a> 2.2.1. \u53D8\u91CF\u7684\u5F15\u7528</h3><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u53D8\u91CF\u7684\u57FA\u672C\u4F7F\u7528\u793A\u4F8B\uFF0C\u524D\u9762\u7684\u53D8\u91CF\u5B9A\u4E49\u90E8\u5206\uFF0C\u76F4\u63A5\u4F7F\u7528\u76842.1.1\u4E2D\u7684\u53D8\u91CF\u793A\u4F8B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> use vars define variables
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> test
  <span class="token key atrule">vars</span><span class="token punctuation">:</span> 
    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">server_name</span><span class="token punctuation">:</span> localhost
    <span class="token key atrule">conf_file</span><span class="token punctuation">:</span> /etc/nginx/conf/default.conf
    
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> print variables
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> echo &quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> http_port <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> server_name <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> conf_file <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;  <span class="token punctuation">&gt;</span> /tmp/text.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u57282.1.2\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7<code>vars_files</code>\u5F15\u7528\u4E86\u4E00\u4E2A\u6587\u4EF6<code>user_vars.yml</code>\uFF0C\u5728\u8BE5\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7A0D\u5FAE\u590D\u6742\u7684\u5B57\u5178\u53D8\u91CF\uFF0C\u73B0\u5728\u6211\u60F3\u8981\u83B7\u53D6<code>users</code>\u4E2D<code>bjones</code>\u7528\u6237\u7684<code>first_name</code>\u548C<code>acook</code>\u7528\u6237\u7684<code>home_dirs</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{ users.bjones.first_name }}
{{ users.acook.home_dirs }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6216\u8005\u5982\u4E0B\u5199\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{ users[&#39;bjones&#39;][&#39;first_name&#39;] }}
{{ users[&#39;acook&#39;][&#39;home_dirs&#39;] }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-2-2-\u53D8\u91CF\u7684\u8C03\u8BD5\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u53D8\u91CF\u7684\u8C03\u8BD5\u8F93\u51FA" aria-hidden="true">#</a> 2.2.2. \u53D8\u91CF\u7684\u8C03\u8BD5\u8F93\u51FA</h3><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u5728\u5F15\u7528\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u9700\u8981\u77E5\u9053\u53D8\u91CF\u4E2D\u5305\u542B\u54EA\u4E9B\u4FE1\u606F\uFF0C\u4EE5\u65B9\u4FBF\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5BF9\u53D8\u91CF\u505A\u4E9B\u5904\u7406\u3002ansible\u63D0\u4F9B\u4E00\u4E2Adebug\u6A21\u5757\u7528\u4E8E\u8C03\u8BD5\u53D8\u91CF\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: register variables
  hosts: test
  tasks:
    - name: capture output of whoami command
      command: whoami
      register: login
    - debug: var=login
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6267\u884C\u540E\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook register.yml 

PLAY [register variables] ***************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [capture output of whoami command] *************************************************************************************************************************************
changed: [10.1.61.187]

TASK [debug] ****************************************************************************************************************************************************************
ok: [10.1.61.187] =&gt; {
    &quot;login&quot;: {
        &quot;changed&quot;: true,
        &quot;cmd&quot;: [
            &quot;whoami&quot;
        ],
        &quot;delta&quot;: &quot;0:00:00.004279&quot;,
        &quot;end&quot;: &quot;2019-05-24 00:41:43.710398&quot;,
        &quot;failed&quot;: false,
        &quot;rc&quot;: 0,
        &quot;start&quot;: &quot;2019-05-24 00:41:43.706119&quot;,
        &quot;stderr&quot;: &quot;&quot;,
        &quot;stderr_lines&quot;: [],
        &quot;stdout&quot;: &quot;root&quot;,
        &quot;stdout_lines&quot;: [
            &quot;root&quot;
        ]
    }
}

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=3    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u5173\u4E8E\u8F93\u51FA\u7684debug\u90E8\u5206\u91CD\u70B9\u8BF4\u660E\u5982\u4E0B\uFF1A</p><ul><li>login\uFF1A \u53D8\u91CF\u540D\uFF0C\u5176\u503C\u4E3A\u4E00\u4E2A\u5B57\u5178</li><li>changed\uFF1Aansible\u57FA\u4E8E\u6B64\u6765\u5224\u65AD\u662F\u5426\u53D1\u751F\u4E86\u72B6\u6001\u6539\u53D8</li><li>cmd\uFF1A\u88AB\u8C03\u7528\u7684\u547D\u4EE4</li><li>failed\uFF1A\u662F\u5426\u8FD0\u884C\u5931\u8D25</li><li>rc\uFF1A\u8FD4\u56DE\u503C\uFF0C0\u4EE3\u8868\u6B63\u5E38\uFF0C\u975E0\u4EE3\u8868\u5F02\u5E38</li><li>stderr\uFF1A\u5982\u679C\u51FA\u73B0\u5F02\u5E38\uFF0C\u4F1A\u5728\u8FD9\u91CC\u663E\u793A\u9519\u8BEF\u8F93\u51FA</li><li>stderr_lines\uFF1A\u6309\u884C\u5206\u5272\u7684\u9519\u8BEF\u8F93\u51FA</li><li>stdout\uFF1A\u5982\u679C\u6307\u4EE4\u6B63\u5E38\u8FD0\u884C\uFF0C\u5219\u5728\u8FD9\u91CC\u8F93\u51FA\u8FD4\u56DE\u7ED3\u679C</li><li>stdout\uFF1A\u6309\u884C\u5206\u5272\u7684\u8FD4\u56DE\u7ED3\u679C</li></ul><blockquote><p>\u9700\u8981\u8BF4\u660E\u7684\u662F\uFF0C\u901A\u8FC7register\u6CE8\u518C\u7684\u53D8\u91CF\u7684\u7ED3\u679C\u5E76\u4E0D\u662F\u4E00\u6210\u4E0D\u53D8\u7684\uFF0C\u5728\u4E0D\u786E\u5B9A\u8FD4\u56DE\u503C\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C3D\u91CF\u8C03\u8BD5\u770B\u770B\u8F93\u51FA\u7ED3\u679C\u3002</p></blockquote><p>\u5173\u4E8Edebug\u7684\u66F4\u591A\u7528\u6CD5\u8BF4\u660E\uFF1A</p><p>\u8C03\u8BD5\u6A21\u5757\uFF0C\u7528\u4E8E\u5728\u8C03\u8BD5\u4E2D\u8F93\u51FA\u4FE1\u606F \u5E38\u7528\u53C2\u6570\uFF1A</p><ul><li>msg\uFF1A\u8C03\u8BD5\u8F93\u51FA\u7684\u6D88\u606F</li><li>var\uFF1A\u5C06\u67D0\u4E2A\u53D8\u91CF\u4F20\u9012\u7ED9debug\u6A21\u5757\uFF0Cdebug\u4F1A\u76F4\u63A5\u5C06\u5176\u6253\u5370\u8F93\u51FA</li><li>verbosity\uFF1Adebug\u7684\u7EA7\u522B</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Example that prints the loopback address and gateway for each host</span>
<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span> msg=&quot;System <span class="token punctuation">{</span><span class="token punctuation">{</span> inventory_hostname <span class="token punctuation">}</span><span class="token punctuation">}</span> has uuid <span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_product_uuid <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;

<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span> msg=&quot;System <span class="token punctuation">{</span><span class="token punctuation">{</span> inventory_hostname <span class="token punctuation">}</span><span class="token punctuation">}</span> has gateway <span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_default_ipv4.gateway <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_default_ipv4.gateway is defined

<span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/uptime
  <span class="token key atrule">register</span><span class="token punctuation">:</span> result

<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span> var=result verbosity=2    <span class="token comment">#\u76F4\u63A5\u5C06\u4E0A\u4E00\u6761\u6307\u4EE4\u7684\u7ED3\u679C\u4F5C\u4E3A\u53D8\u91CF\u4F20\u9012\u7ED9var\uFF0C\u7531debug\u6253\u5370\u51FAresult\u7684\u503C</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Display all variables/facts known for a host
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> var=hostvars<span class="token punctuation">[</span>inventory_hostname<span class="token punctuation">]</span> verbosity=4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>\u6CE8\u610F\u683C\u5F0F\uFF0C=\u53F7\u5DE6\u53F3\u6CA1\u6709\u7A7A\u683C</p></blockquote>`,74);function p(l,r){return e}var c=n(a,[["render",p],["__file","custom.html.vue"]]);export{c as default};
