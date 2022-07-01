import{_ as n,e as s}from"./app.d503eb7b.js";const a={},e=s(`<h1 id="_2-ansible-inventory\u914D\u7F6E\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-ansible-inventory\u914D\u7F6E\u8BE6\u89E3" aria-hidden="true">#</a> 2 Ansible Inventory\u914D\u7F6E\u8BE6\u89E3</h1><p>\u5728\u4F7F\u7528Ansible\u6765\u6279\u91CF\u7BA1\u7406\u4E3B\u673A\u7684\u65F6\u5019\uFF0C\u901A\u5E38\u6211\u4EEC\u9700\u8981\u5148\u5B9A\u4E49\u8981\u7BA1\u7406\u54EA\u4E9B\u4E3B\u673A\u6216\u8005\u4E3B\u673A\u7EC4\uFF0C\u800C\u8FD9\u4E2A\u7528\u4E8E\u7BA1\u7406\u4E3B\u673A\u4E0E\u4E3B\u673A\u7EC4\u7684\u6587\u4EF6\u5C31\u53EB\u505AInventory\uFF0C\u4E5F\u53EB\u4E3B\u673A\u6E05\u5355\u3002</p><p>Ansible Inventory \u662F\u5305\u542B<code>\u9759\u6001 Inventory</code> \u548C<code>\u52A8\u6001 Inventory</code> \u4E24\u90E8\u5206\u7684\uFF0C\u9759\u6001 Inventory \u6307\u7684\u662F\u5728\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u4E3B\u673A\u548C\u7EC4\uFF0C\u52A8\u6001 Inventory \u6307\u901A\u8FC7\u5916\u90E8\u811A\u672C\u83B7\u53D6\u4E3B\u673A\u5217\u8868\uFF0C\u5E76\u6309\u7167 ansible \u6240\u8981\u6C42\u7684\u683C\u5F0F\u8FD4\u56DE\u7ED9 ansilbe \u547D\u4EE4\u7684\u3002</p><h2 id="_1-inventory\u6587\u4EF6\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_1-inventory\u6587\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a> 1 inventory\u6587\u4EF6\u8DEF\u5F84</h2><p>\u9ED8\u8BA4\u7684inventory\u6587\u4EF6\u662F<code>/etc/ansible/hosts</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7Ansible\u914D\u7F6E\u6587\u4EF6\u7684inventory\u914D\u7F6E\u6307\u4EE4\u53BB\u4FEE\u6539\u8DEF\u5F84\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ grep &#39;/etc/ansible/hosts&#39; /etc/ansible/ansible.cfg
#inventory = /etc/ansible/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F46\u901A\u5E38\u6211\u4EEC\u4E0D\u4F1A\u53BB\u4FEE\u6539\u8FD9\u4E2A\u914D\u7F6E\u9879\uFF0C\u5982\u679C\u5728\u5176\u5B83\u5730\u65B9\u5B9A\u4E49\u4E86inventory\u6587\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728ansible\u7684\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528-i\u9009\u9879\u53BB\u6307\u5B9A\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684inventory\u6587\u4EF6\u3002</p><p><strong>\u591A\u4E2Ainventory\u6587\u4EF6</strong></p><p>\u5F53Ansible\u8981\u7BA1\u7406\u7684\u8282\u70B9\u975E\u5E38\u591A\u65F6\uFF0C\u4EC5\u9760\u5206\u7EC4\u7684\u903B\u8F91\u53EF\u80FD\u4E5F\u4E0D\u8DB3\u591F\u65B9\u4FBF\u7BA1\u7406\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2Ainventory\u6587\u4EF6\u5E76\u653E\u5728\u4E00\u4E2A\u76EE\u5F55\u4E0B\uFF0C \u5E76\u6309\u4E00\u5B9A\u7684\u547D\u540D\u89C4\u5219\u4E3A\u6BCF \u4E2Ainventory\u547D\u540D\uFF0C\u4EE5\u4FBF\u89C1\u540D\u77E5\u610F\u3002</p><p>\u73B0\u5728\u8981\u4F7F\u7528\u591A\u4E2Ainventory\u7684\u529F\u80FD\uFF0C\u9700\u8981\u5C06inventory\u6307\u5B9A\u4E3A\u76EE\u5F55\u8DEF\u5F84\u3002</p><p>\u4F8B\u5982\uFF0CAnsible\u914D\u7F6E\u6587\u4EF6\u5C06inventory\u6307\u4EE4\u8BBE\u7F6E\u4E3A\u5BF9\u5E94\u7684\u76EE\u5F55:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>inventory <span class="token operator">=</span> /etc/ansible/inventorys 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>inventory\u6307\u5B9A\u4E3A\u76EE:\u5F55\u65F6\uFF0Cinventory\u6587\u4EF6\u6700\u597D\u4E0D\u8981\u5E26\u6709\u540E\u7F00\uFF0C \u5C31\u50CF\u793A\u4F8B\u4E2D\u7684a\u548Cb\u6587\u4EF6\u3002\u56E0\u4E3AAnsible\u5F53\u4F7F\u7528\u76EE\u5F55\u4F5C\u4E3Ainventory\u65F6\uFF0C\u9ED8\u8BA4\u5C06\u5FFD\u7565\u4E00\u4E9B\u540E\u7F00\u7684\u6587\u4EF6\u4E0D\u53BB\u89E3\u6790\u3002 \u9700\u8981\u4FEE\u6539\u914D\u7F6E:\u6587\u4EF6\u4E2D\u7684inventory_ ignore_ extensions \u9879\u6765\u7981\u6B62\u5FFD\u7565\u6307\u5B9A\u540E\u7F00(\u5982ini\u540E\u7F00)\u7684\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#inventory_ ignore_ extensions=~, .orig, .bak, .in, .cfg, .retry, .pyc, .pyo</span>
inventory_ ignore_ extensions <span class="token operator">=</span> ~, .orig, .bak, .cfg, .retry, .pyC, .pyo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_2-\u9759\u6001inventory" tabindex="-1"><a class="header-anchor" href="#_2-\u9759\u6001inventory" aria-hidden="true">#</a> 2 \u9759\u6001Inventory</h2><h3 id="_2-1-\u5B9A\u4E49\u4E3B\u673A\u548C\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B9A\u4E49\u4E3B\u673A\u548C\u7EC4" aria-hidden="true">#</a> 2.1 \u5B9A\u4E49\u4E3B\u673A\u548C\u7EC4</h3><blockquote><p>\u5B9A\u4E49\u4E3B\u673A\u6E05\u5355\uFF0C\u6709\u591A\u79CD\u683C\u5F0F\uFF0C\u5E38\u7528\u7684\u6709<code>ini</code>\u683C\u5F0F\u548C<code>YAML</code>\uFF08Ansible 2.4\u5F00\u59CB\u652F\u6301\uFF09\u683C\u5F0F\uFF0C\u6211\u503E\u5411\u4E8E\u4F7F\u7528<code>YAML</code>\u683C\u5F0F\uFF0C\u4E0B\u9762\u7684\u4E3E\u4F8B\u4E2D\uFF0C\u4E24\u79CD\u683C\u5F0F\u90FD\u4F1A\u63D0\u5230\u3002</p><p><strong>Ansible \u9ED8\u8BA4\u9884\u5B9A\u4E49\u4E86\u4E24\u4E2A\u4E3B\u673A\u7EC4\uFF1A<code>all</code>\u5206\u7EC4\uFF08\u6240\u6709\u4E3B\u673A\uFF09\u548C<code>ungrouped</code>\u5206\u7EC4\uFF08\u4E0D\u5728\u5206\u7EC4\u5185\u7684\u4E3B\u673A\uFF09\uFF0C\u4E24\u4E2A\u7EC4\u90FD\u4E0D\u5305\u62EClocalhost\u8FD9\u4E2A\u7279\u6B8A\u7684\u8282\u70B9</strong></p></blockquote><p>\u5BF9\u4E8E/etc/ansible/hosts\u6700\u7B80\u5355\u7684\u5B9A\u4E49\u683C\u5F0F\u50CF\u4E0B\u9762\uFF1A</p><h4 id="_2-1-1-\u7B80\u5355\u7684\u4E3B\u673A\u548C\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u7B80\u5355\u7684\u4E3B\u673A\u548C\u7EC4" aria-hidden="true">#</a> 2.1.1 \u7B80\u5355\u7684\u4E3B\u673A\u548C\u7EC4</h4><p>In INI:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E2D\u62EC\u53F7\u4E2D\u7684\u540D\u5B57\u4EE3\u8868\u7EC4\u540D\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u5C06\u5E9E\u5927\u7684\u4E3B\u673A\u5206\u6210\u5177\u6709\u6807\u8BC6\u7684\u7EC4\uFF0C\u5982\u4E0A\u9762\u5206\u4E86\u4E24\u4E2A\u7EC4webservers\u548Cdbservers\u7EC4\uFF1B  </span>
<span class="token comment"># \u4E3B\u673A(hosts)\u90E8\u5206\u53EF\u4EE5\u4F7F\u7528\u57DF\u540D\u3001\u4E3B\u673A\u540D\u3001IP\u5730\u5740\u8868\u793A\uFF1B\u5F53\u7136\u4F7F\u7528\u524D\u4E24\u8005\u65F6\uFF0C\u4E5F\u9700\u8981\u4E3B\u673A\u80FD\u53CD\u89E3\u6790\u5230\u76F8\u5E94\u7684IP\u5730\u5740\uFF0C\u4E00\u822C\u6B64\u7C7B\u914D\u7F6E\u4E2D\u591A\u4F7F\u7528IP\u5730\u5740\uFF1B</span>
mail.example.com

<span class="token punctuation">[</span>webservers<span class="token punctuation">]</span>
foo.example.com
bar.example.com

<span class="token punctuation">[</span>dbservers<span class="token punctuation">]</span>
one.example.com
two.example.com
three.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>In YAML:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>all:
  hosts:
    mail.example.com:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="_2-1-2-\u6307\u5B9A\u4E3B\u673A\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u6307\u5B9A\u4E3B\u673A\u8303\u56F4" aria-hidden="true">#</a> 2.1.2 \u6307\u5B9A\u4E3B\u673A\u8303\u56F4</h4><p>In INI:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u9762\u6307\u5B9A\u4E86\u4ECEweb01\u5230web50\uFF0Cwebservers\u7EC4\u5171\u8BA150\u53F0\u4E3B\u673A\uFF1Bdatabases\u7EC4\u6709db-a\u5230db-f\u51716\u53F0\u4E3B\u673A</span>
<span class="token punctuation">[</span>webservers<span class="token punctuation">]</span>
www<span class="token punctuation">[</span>01:50<span class="token punctuation">]</span>.example.com
<span class="token punctuation">[</span>databases<span class="token punctuation">]</span>
db-<span class="token punctuation">[</span>a:f<span class="token punctuation">]</span>.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>In YAML:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>all:
  children:
  	webservers:
      hosts:
        www[01:50].example.com:
    databases:
      hosts:
        db-[a:f].example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_2-1-3-\u5B9A\u4E49\u4E3B\u673A\u7EC4\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u5B9A\u4E49\u4E3B\u673A\u7EC4\u5D4C\u5957" aria-hidden="true">#</a> 2.1.3 \u5B9A\u4E49\u4E3B\u673A\u7EC4\u5D4C\u5957</h4><p>\u4E00\u4E2A\u4E3B\u673A\u7EC4\u53EF\u4EE5\u5305\u542B\u82E5\u5E72\u4E2A\u5B50\u4E3B\u673A\u7EC4\uFF1A</p><p>In INI:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u4E0B\u793A\u4F8B\u4E2D\uFF0Cproduction\u7EC4\u5305\u542B\u4E24\u4E2A\u5B50\u7EC4\uFF0C\u5206\u522B\u4E3Awebservers\u548Cdbservers\uFF0Cwebservers\u548Cdbservers\u7EC4\u5206\u522B\u5305\u542B\u82E5\u5E72\u4E3B\u673A</span>
<span class="token punctuation">[</span>webservers<span class="token punctuation">]</span>
foo.example.com
bar.example.com

<span class="token punctuation">[</span>dbservers<span class="token punctuation">]</span>
one.example.com
two.example.com
three.example.com

<span class="token punctuation">[</span>production:children<span class="token punctuation">]</span>
webservers
dbservers
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>In YAML:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>all:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
    production:
      children:
        webservers:
        dbservers:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="_2-1-4-\u6DFB\u52A0\u4E3B\u673A\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-1-4-\u6DFB\u52A0\u4E3B\u673A\u53D8\u91CF" aria-hidden="true">#</a> 2.1.4 \u6DFB\u52A0\u4E3B\u673A\u53D8\u91CF</h4><p>\u4E0D\u540Cansible\u7248\u672C\uFF0C\u884C\u4E3A\u63A7\u5236\u53D8\u91CF\u540D\u79F0\u53EF\u80FD\u4E0D\u540C\uFF0C\u6BD4\u5982\u4EE5\u524D\u7248\u672C\u4E2D\u7AEF\u53E3\u53F7\u7684\u884C\u4E3A\u53D8\u91CF\u662F<code>ansible_ssh_port</code></p><p>\u4E0B\u9762\u662F\u5E38\u89C1\u7684\u884C\u4E3A\u53D8\u91CF\uFF1A</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210309153531453.png" alt="image-20210309153531453" loading="lazy"></p><p>In INI:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[atlanta]
host1 http_port=80 maxRequestsPerChild=808 ansible_port=5555 ansible_host=192.0.2.50
host2 http_port=303 maxRequestsPerChild=909
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>In YAML:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>atlanta:
  host1:
    http_port: 80
    maxRequestsPerChild: 808
    ansible_port: 5555
    ansible_host: 192.0.2.50
  host2:
    http_port: 303
    maxRequestsPerChild: 909
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="_2-1-5-\u6DFB\u52A0\u7EC4\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-1-5-\u6DFB\u52A0\u7EC4\u53D8\u91CF" aria-hidden="true">#</a> 2.1.5 \u6DFB\u52A0\u7EC4\u53D8\u91CF</h4><p>In INI:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[atlanta]
host1
host2

[atlanta:vars]
ntp_server=ntp.atlanta.example.com
proxy=proxy.atlanta.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>In YAML:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>atlanta:
  hosts:
    host1:
    host2:
  vars:
    ntp_server: ntp.atlanta.example.com
    proxy: proxy.atlanta.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u96C6\u6210\u53D8\u91CF\u503C</strong></p><p>In INI:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[atlanta]
host1
host2

[raleigh]
host2
host3

[southeast:children]
atlanta
raleigh

[southeast:vars]
some_server=foo.southeast.example.com
halon_system_timeout=30
self_destruct_countdown=60
escape_pods=2

[usa:children]
southeast
northeast
southwest
northwest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>In YAML:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>all:
  children:
    usa:
      children:
        southeast:
          children:
            atlanta:
              hosts:
                host1:
                host2:
            raleigh:
              hosts:
                host2:
                host3:
          vars:
            some_server: foo.southeast.example.com
            halon_system_timeout: 30
            self_destruct_countdown: 60
            escape_pods: 2
        northeast:
        northwest:
        southwest:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="_2-1-6-\u7EC4\u7EC7\u4E3B\u673A\u548C\u7EC4\u53D8\u91CF-\u914D\u7F6E\u5355\u72EC\u53D8\u91CF\u6587\u4EF6host-vars\u548Cgroup-vars" tabindex="-1"><a class="header-anchor" href="#_2-1-6-\u7EC4\u7EC7\u4E3B\u673A\u548C\u7EC4\u53D8\u91CF-\u914D\u7F6E\u5355\u72EC\u53D8\u91CF\u6587\u4EF6host-vars\u548Cgroup-vars" aria-hidden="true">#</a> 2.1.6 \u7EC4\u7EC7\u4E3B\u673A\u548C\u7EC4\u53D8\u91CF(\u914D\u7F6E\u5355\u72EC\u53D8\u91CF\u6587\u4EF6host_vars\u548Cgroup_vars)</h4><p>\u5C3D\u7BA1\u53EF\u4EE5\u5C06\u53D8\u91CF\u5B58\u50A8\u5728\u4E3B\u6E05\u5355\u6587\u4EF6\u4E2D\uFF0C\u4F46\u662F\u5B58\u50A8\u5355\u72EC\u7684\u4E3B\u673A\u53D8\u91CF\u548C\u7EC4\u53D8\u91CF\u6587\u4EF6\u53EF\u4EE5\u5E2E\u52A9\u60A8\u66F4\u8F7B\u677E\u5730\u7EC4\u7EC7\u53D8\u91CF\u503C\u3002 \u4E3B\u673A\u548C\u7EC4\u53D8\u91CF\u6587\u4EF6\u5FC5\u987B\u4F7F\u7528YAML\u8BED\u6CD5\u3002 \u6709\u6548\u7684\u6587\u4EF6\u6269\u5C55\u540D\u5305\u62EC\u201C .yml\u201D\uFF0C\u201C\u3002yaml\u201D\uFF0C\u201C\u3002json\u201D\u6216\u6CA1\u6709\u6587\u4EF6\u6269\u5C55\u540D\u3002</p><p>Ansible\u901A\u8FC7\u641C\u7D22\u76F8\u5BF9\u4E8E\u6E05\u5355\u6587\u4EF6\u6216\u5267\u672C\u6587\u4EF6\u7684\u8DEF\u5F84\u6765\u52A0\u8F7D\u4E3B\u673A\u548C\u7EC4\u53D8\u91CF\u6587\u4EF6\u3002 \u5982\u679C<code>/etc/ansible/hosts</code>\u4E0A\u7684\u6E05\u5355\u6587\u4EF6\u5305\u542B\u540D\u4E3A\u201C foosball\u201D\u7684\u4E3B\u673A\uFF0C\u8BE5\u4E3B\u673A\u5C5E\u4E8E\u201C raleigh\u201D\u548C\u201C webservers\u201D\u4E24\u4E2A\u7EC4\uFF0C\u5219\u8BE5\u4E3B\u673A\u5C06\u5728\u4EE5\u4E0B\u4F4D\u7F6E\u7684YAML\u6587\u4EF6\u4E2D\u4F7F\u7528\u53D8\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/etc/ansible/group_vars/raleigh # can optionally end in &#39;.yml&#39;, &#39;.yaml&#39;, or &#39;.json&#39;
/etc/ansible/group_vars/webservers
/etc/ansible/host_vars/foosball
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F8B\u5982\uFF0C\u5982\u679C\u6309\u6570\u636E\u4E2D\u5FC3\u5C06\u6E05\u5355\u4E2D\u7684\u4E3B\u673A\u5206\u7EC4\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u6570\u636E\u4E2D\u5FC3\u4F7F\u7528\u5176\u81EA\u5DF1\u7684NTP\u670D\u52A1\u5668\u548C\u6570\u636E\u5E93\u670D\u52A1\u5668\uFF0C\u5219\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>/etc/ansible/group_vars/raleigh</code>\u7684\u6587\u4EF6\u6765\u5B58\u50A8raleigh\u7EC4\u7684\u53D8\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
ntp_server: acme.example.org
database_server: storage.example.org
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u518D\u6765\u603B\u7ED3\u4E00\u4E0Bgroup_vars/, host_vars/\u7684\u5B58\u653E\u4F4D\u7F6E\uFF1A</p><p>(1).inventory\u6587\u4EF6\u7684\u540C\u76EE\u5F55</p><p>(2).playbook\u6587\u4EF6\u7684\u540C\u76EE\u5F55</p><h3 id="_2-2-\u9009\u62E9\u4E3B\u673A\u4E0E\u7EC4-hosts\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-\u9009\u62E9\u4E3B\u673A\u4E0E\u7EC4-hosts\u6307\u4EE4" aria-hidden="true">#</a> 2.2 \u9009\u62E9\u4E3B\u673A\u4E0E\u7EC4(hosts\u6307\u4EE4)</h3><p>\u5728\u524D\u9762\u5B9A\u4E49Inventory\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u628A\u6240\u6709\u88AB\u7BA1\u7406\u4E3B\u673A\u901A\u8FC7\u4E3B\u673A\u7EC4\u7684\u65B9\u5F0F\u5B9A\u4E49\u5230Inventory\u5F53\u4E2D\uFF0C\u4F46\u662F\u5F53\u6211\u4EEC\u5B9E\u9645\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u53EA\u9700\u8981\u5BF9\u67D0\u4E00\u4E3B\u673A\u6216\u4E3B\u673A\u7EC4\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u901A\u8FC7\u5339\u914D\u7684\u65B9\u5F0F\u6307\u5B9A\u67D0\u4E00\u7279\u5B9A\u4E3B\u673A\u6216\u4E3B\u673A\u7EC4\u3002</p><p>\u5728\u6B64\u4E4B\u95F4\uFF0C\u6211\u4EEC\u5148\u5B9A\u4E49\u4E00\u4E2A\u4E3B\u673A\u6E05\u5355\u793A\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>srv1.example.com
srv2.example.com
s1.lab.example.com
s2.lab.example.com

<span class="token punctuation">[</span>web<span class="token punctuation">]</span>
jupiter.lab.example.com
saturn.example.com

<span class="token punctuation">[</span>db<span class="token punctuation">]</span>
db1.example.com
db2.example.com
db3.example.com

<span class="token punctuation">[</span>lb<span class="token punctuation">]</span>
lb1.lab.example.com
lb2.lab.example.com

<span class="token punctuation">[</span>boston<span class="token punctuation">]</span>
db1.example.com
jupiter.lab.example.com
lb2.lab.example.com

<span class="token punctuation">[</span>london<span class="token punctuation">]</span>
db2.example.com
db3.example.com
file1.lab.example.com
lb1.lab.example.com

<span class="token punctuation">[</span>dev<span class="token punctuation">]</span>
web1.lab.example.com
db3.example.com

<span class="token punctuation">[</span>stage<span class="token punctuation">]</span>
file2.example.com
db2.example.com

<span class="token punctuation">[</span>prod<span class="token punctuation">]</span>
lb2.lab.example.com
db1.example.com
jupiter.lab.example.com

<span class="token punctuation">[</span>function:children<span class="token punctuation">]</span>
web
db
lb
city

<span class="token punctuation">[</span>city:children<span class="token punctuation">]</span>
boston
london
environments

<span class="token punctuation">[</span>environments:children<span class="token punctuation">]</span>
dev
stage
prod
new

<span class="token punctuation">[</span>new<span class="token punctuation">]</span>
<span class="token number">172.25</span>.252.23
<span class="token number">172.25</span>.252.44
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p>\u4F7F\u7528\u66F4\u4E3A\u4E13\u4E1A\u7684<code>ansible-inventory</code>\u547D\u4EE4\u6765\u67E5\u770B\u4E3B\u673A\u7EC4\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token comment"># \u6811\u72B6\u5F62\u5F0F\u5C55\u5F00\u4E3B\u673A\u5217\u8868</span>
 ansible-inventory all --graph
 <span class="token comment"># \u540C\u65F6\u5E26\u4E0A\u53D8\u91CF</span>
 ansible-inventory all --graph --vars
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_2-2-1-\u5339\u914D\u6240\u6709\u4E3B\u673A" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u5339\u914D\u6240\u6709\u4E3B\u673A" aria-hidden="true">#</a> 2.2.1 \u5339\u914D\u6240\u6709\u4E3B\u673A</h4><p>\u53EF\u4EE5\u901A\u8FC7<code>all</code>\u6216\u8005<code>*</code>\u6765\u6307\u5B9A\u5339\u914D\u6240\u6709\u4E3B\u673A\uFF0C\u901A\u8FC7\u5982\u4E0B\u6307\u4EE4\u67E5\u770B<code>all</code>\u5339\u914D\u5230\u7684\u4E3B\u673A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible all --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>:
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    jupiter.lab.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
    lb1.lab.example.com
    lb2.lab.example.com
    file1.lab.example.com
    web1.lab.example.com
    file2.example.com
    <span class="token number">172.25</span>.252.23
    <span class="token number">172.25</span>.252.44
    <span class="token number">172.25</span>.252.32
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="_2-2-2-\u5339\u914D\u6307\u5B9A\u7684\u4E3B\u673A\u6216\u4E3B\u673A\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u5339\u914D\u6307\u5B9A\u7684\u4E3B\u673A\u6216\u4E3B\u673A\u7EC4" aria-hidden="true">#</a> 2.2.2 \u5339\u914D\u6307\u5B9A\u7684\u4E3B\u673A\u6216\u4E3B\u673A\u7EC4</h4><ol><li>\u5339\u914D\u5355\u4E2A\u7EC4</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible prod --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>:
    lb2.lab.example.com
    db1.example.com
    jupiter.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u5339\u914D\u5355\u4E2A\u4E3B\u673A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible db2.example.com --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
    db2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u5339\u914D\u591A\u4E2A\u4E3B\u673A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible &#39;lb1.lab.example.com,s1.lab.example.com,db1.example.com&#39; --list-hosts  
  hosts (3):
    lb1.lab.example.com
    s1.lab.example.com
    db1.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="4"><li>\u5339\u914D\u591A\u4E2A\u7EC4</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible &#39;london,boston&#39; --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>:
    db2.example.com
    db3.example.com
    file1.lab.example.com
    lb1.lab.example.com
    db1.example.com
    jupiter.lab.example.com
    lb2.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="5"><li>\u5339\u914D\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u7EC4\u7684\u4E3B\u673A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible ungrouped --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>:
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="_2-2-4-\u901A\u914D\u7B26\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_2-2-4-\u901A\u914D\u7B26\u5339\u914D" aria-hidden="true">#</a> 2.2.4 \u901A\u914D\u7B26\u5339\u914D</h4><ol><li>\u5339\u914D&#39;*.example.com&#39;\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible &#39;*.example.com&#39; --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>:
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    jupiter.lab.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
    lb1.lab.example.com
    lb2.lab.example.com
    file1.lab.example.com
    web1.lab.example.com
    file2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="2"><li>\u5339\u914D<code>172.25.*</code>\u7684\u4E3B\u673A\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible &#39;172.25.*&#39; --list-hosts                         
  hosts (3):
    172.25.252.23
    172.25.252.44
    172.25.252.32
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>\u5339\u914D\u4EE5<code>s</code>\u5F00\u5934\u7684\u4E3B\u673A\u53CA\u4E3B\u673A\u7EC4\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible &#39;s*&#39; --list-hosts
  hosts (7):
    file2.example.com
    db2.example.com
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    saturn.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="_2-2-5-\u901A\u914D\u7B26\u7EC4\u5408\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_2-2-5-\u901A\u914D\u7B26\u7EC4\u5408\u5339\u914D" aria-hidden="true">#</a> 2.2.5 \u901A\u914D\u7B26\u7EC4\u5408\u5339\u914D</h4><ol><li>\u5339\u914D\u5305\u542B<code>*.example.com</code>\u4F46\u4E0D\u5305\u542B<code>*.lab.example.com</code>\u7684\u4E3B\u673A\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible &#39;*.example.com,!*.lab.example.com&#39; --list-hosts  
  hosts (7):
    srv1.example.com
    srv2.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
    file2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2"><li>\u5339\u914D\u5305\u542Bprod\u4EE5\u53CA172\u5F00\u5934\u3001\u5305\u542Blab\u5173\u952E\u5B57\u7684\u4E3B\u673A\u6216\u7EC4</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible &#39;prod,172*,*lab*&#39; --list-hosts
  hosts (11):
    lb2.lab.example.com
    db1.example.com
    jupiter.lab.example.com
    172.25.252.23
    172.25.252.44
    172.25.252.32
    s1.lab.example.com
    s2.lab.example.com
    lb1.lab.example.com
    file1.lab.example.com
    web1.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="3"><li>\u5339\u914D\u5C5E\u4E8Edb\u7EC4\u540C\u65F6\u8FD8\u5C5E\u4E8Elondon\u7EC4\u7684\u4E3B\u673A\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible &#39;db,&amp;london&#39; --list-hosts
  hosts (2):
    db2.example.com
    db3.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="4"><li>\u5339\u914D\u5728london\u7EC4\u6216\u8005boston\u7EC4\uFF0C\u8FD8\u5FC5\u987B\u5728prod\u7EC4\u4E2D\u4E14\u5FC5\u987B\u4E0D\u5728lb\u7EC4\u4E2D\u7684\u4E3B\u673A\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible &#39;boston,london,&amp;prod,!lb&#39; --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>:
    db1.example.com
    jupiter.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_2-2-6-\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#_2-2-6-\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D" aria-hidden="true">#</a> 2.2.6 \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D</h4><p>\u5728\u5F00\u5934\u7684\u5730\u65B9\u4F7F\u7528\u201D~\u201D\uFF0C\u7528\u6765\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible &#39;~(s|db).*example\\.com&#39; --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>:
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_2-2-7-\u901A\u8FC7-limit\u6216-l\u660E\u786E\u6307\u5B9A\u4E3B\u673A\u6216\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-2-7-\u901A\u8FC7-limit\u6216-l\u660E\u786E\u6307\u5B9A\u4E3B\u673A\u6216\u7EC4" aria-hidden="true">#</a> 2.2.7 \u901A\u8FC7<code>--limit</code>\u6216<code>-l</code>\u660E\u786E\u6307\u5B9A\u4E3B\u673A\u6216\u7EC4</h4><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u88ABansible\u6216ansible-playbook\u9009\u4E2D\u7684\u4E3B\u673A\u90FD\u4F1A\u6267\u884C\u4EFB\u52A1\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u884C\u7684--limit pattern\u9009\u9879\u6765\u7B5B\u9009\u54EA\u4E9B\u4E3B\u673A\u6267\u884C\u4EFB\u52A1\u54EA\u4E9B\u4E3B\u673A\u4E0D\u6267\u884C\u4EFB\u52A1\u3002</p><p>\u8FD9\u91CC\u9700\u6CE8\u610F\u4E00\u70B9\uFF1A\u5373\u4F7F\u4F7F\u7528\u4E86--limit\u9009\u9879\uFF0Cansible\u6216ansible-playbook\u547D\u4EE4\u4E5F\u603B\u662F\u4F1A\u89E3\u6790Inventory\u4E2D\u7684\u6240\u6709\u4E3B\u673A\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u4E24\u4E2A\u547D\u4EE4\u53EF\u4EE5\u4ECE\u89E3\u6790\u7684inventory\u7ED3\u679C\u4E2D\u9009\u62E9\u90E8\u5206\u8981\u6267\u884C\u4EFB\u52A1\u7684\u8282\u70B9(\u6BD4\u5982\u901A\u8FC7hosts\u6307\u4EE4)\u3002</p><p>\u6240\u4EE5\uFF0C\u603B\u7ED3\u4E0B\u8FD9\u91CC\u6D89\u53CA\u5230\u7684\u89E3\u6790\u548C\u7B5B\u9009\u8282\u70B9\u7684\u8FC7\u7A0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u89E3\u6790inventory --&gt; play\u7684hosts\u6307\u4EE4 --&gt; limit\u9009\u9879
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>\u901A\u8FC7<code>--limit</code>\u5728\u9009\u5B9A\u7684\u7EC4\u4E2D\u660E\u786E\u6307\u5B9A\u4E3B\u673A\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible ungrouped  --limit srv1.example.com --list-hosts
  hosts (1):
    srv1.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u901A\u8FC7<code>--limit</code>\u53C2\u6570\uFF0C\u8FD8\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u4E2D\u5B9A\u4E49\u660E\u786E\u6307\u5B9A\u7684\u4E3B\u673A\u7684\u5217\u8868\uFF0C\u5B9A\u4E49\u4E00\u4E2Aretry_hosts.txt\u5982\u4E0B\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>srv1.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u518D\u6B21\u6267\u884Cansible\u6307\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ansible ungrouped  --limit @retry_hosts.txt --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
    srv1.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-\u52A8\u6001inventory" tabindex="-1"><a class="header-anchor" href="#_3-\u52A8\u6001inventory" aria-hidden="true">#</a> 3 \u52A8\u6001Inventory</h2><p>\u8FD9\u90E8\u5206\u4E00\u822C\u4F1A\u7ED3\u5408 CMDB \u8D44\u7BA1\u7CFB\u7EDF\u3001\u4E91\u8BA1\u7B97\u5E73\u53F0\u7B49\u83B7\u53D6\u4E3B\u673A\u4FE1\u606F\u3002\u7531\u4E8E\u4E3B\u673A\u8D44\u6E90\u4E00\u822C\u4F1A\u52A8\u6001\u7684\u8FDB\u884C\u589E\u51CF\uFF0C\u800C\u8FD9\u4E9B\u7CFB\u7EDF\u4E00\u822C\u4F1A\u667A\u80FD\u66F4\u65B0\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B\u5DE5\u5177\u63D0\u4F9B\u7684 API \u6216\u8005\u63A5\u5165\u5E93\u67E5\u8BE2\u7B49\u65B9\u5F0F\u8FD4\u56DE\u4E3B\u673A\u5217\u8868\u3002</p><p>\u6BD4\u5982\u4E3A\u4E86\u7ED3\u5408\u8D44\u4EA7\u7BA1\u7406\u7CFB\u7EDF\uFF08CMDB\uFF09\uFF0C\u6240\u4EE5\u8981\u4F7F\u7528\u5230\u52A8\u6001\u83B7\u53D6 inventory \u7684\u65B9\u6CD5\uFF0C\u8FD9\u6837\u53EF\u4EE5\u7701\u53BB\u914D\u7F6E ansible \u670D\u52A1\u7AEF\u7684 hosts\uFF0C\u6240\u6709\u7684\u5BA2\u6237\u7AEF IP\u3001\u5E10\u53F7\u3001\u5BC6\u7801\u3001\u7AEF\u53E3\u90FD\u53EF\u4EE5\u4ECE CMDB \u4E2D\u83B7\u53D6\u5230\u3002</p><p>\u53EA\u8981\u4F60\u7684\u811A\u672C\u8F93\u51FA\u683C\u5F0F\u662F\u6EE1\u8DB3\u8981\u6C42\u7684 JSON\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u6210\u4E3A\u4E00\u4E2A\u52A8\u6001\u7684\u8D44\u4EA7\u751F\u6210\u5668\u3002</p><h3 id="_3-1-\u811A\u672C\u89C4\u7EA6" tabindex="-1"><a class="header-anchor" href="#_3-1-\u811A\u672C\u89C4\u7EA6" aria-hidden="true">#</a> 3.1 \u811A\u672C\u89C4\u7EA6</h3><p>\u7528\u4E8E\u751F\u6210 JSON \u7684\u811A\u672C\u5BF9\u5B9E\u73B0\u8BED\u8A00\u6CA1\u6709\u8981\u6C42\uFF0C\u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u53EF\u6267\u884C\u811A\u672C\u3001\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u6216\u8005\u5176\u4ED6\u4EFB\u4F55\u53EF\u4EE5\u8FD0\u884C\u6587\u4EF6\uFF0C\u4F46\u662F\u5FC5\u987B\u8F93\u51FA\u4E3A JSON \u683C\u5F0F\uFF0C\u540C\u65F6\u5FC5\u987B\u652F\u6301\u4E24\u4E2A\u53C2\u6570\uFF1A<code>--list</code> \u548C <code>--host </code>\u3002</p><ul><li><code>--list</code>\uFF1A\u7528\u4E8E\u8FD4\u56DE\u6240\u6709\u7684\u4E3B\u673A\u7EC4\u4FE1\u606F\uFF0C\u6BCF\u4E2A\u7EC4\u6240\u5305\u542B\u7684\u4E3B\u673A\u5217\u8868 <code>hosts</code>\u3001\u6240\u542B\u5B50\u7EC4\u5217\u8868 <code>children</code>\u3001\u4E3B\u673A\u7EC4\u53D8\u91CF\u5217\u8868 <code>vars</code> \u90FD\u5E94\u8BE5\u662F\u5B57\u5178\u5F62\u5F0F\u7684\uFF0C<code>_meta</code> \u7528\u6765\u5B58\u653E\u4E3B\u673A\u53D8\u91CF\u3002</li><li><code>--host </code>\uFF1A\u8FD4\u56DE\u6307\u5B9A\u4E3B\u673A\u7684\u53D8\u91CF\u5217\u8868\uFF0C\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u7684\u5B57\u5178\u811A\u672C\u5B9E\u73B0</li></ul><blockquote><p>\u26A0\uFE0F \u6CE8\u610F\uFF0C\u811A\u672C\u5F00\u5934\u58F0\u660E <code>#!</code></p><p>\u811A\u672C\u52A0\u6267\u884C\u6743\u9650</p></blockquote><h3 id="_3-2-\u811A\u672C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-2-\u811A\u672C\u5B9E\u73B0" aria-hidden="true">#</a> 3.2 \u811A\u672C\u5B9E\u73B0</h3><p>\u4E00\u4E2A\u53C2\u8003\u5B9E\u73B0\u6846\u67B6\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment">#coding:utf8</span>
<span class="token keyword">import</span> json
<span class="token keyword">import</span> sys
 
<span class="token keyword">def</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    info_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;all&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;10.10.0.109&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;10.10.0.112&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>info_dict<span class="token punctuation">,</span>indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token keyword">def</span> <span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    host1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;10.10.0.112&#39;</span><span class="token punctuation">]</span>
    host2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;10.10.0.112&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;10.10.0.109&#39;</span><span class="token punctuation">]</span>
    group1 <span class="token operator">=</span> <span class="token string">&#39;test1&#39;</span>
    group2 <span class="token operator">=</span> <span class="token string">&#39;test2&#39;</span>
    hostdata <span class="token operator">=</span> <span class="token punctuation">{</span>
        group1<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span>host1<span class="token punctuation">}</span><span class="token punctuation">,</span>
        group2<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span>host2<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>hostdata<span class="token punctuation">,</span>indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token keyword">def</span> <span class="token function">host</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">:</span>
    info_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;10.10.0.112&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;ansible_ssh_host&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;10.10.0.112&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_port&quot;</span><span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_user&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_pass&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;123457&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;10.10.0.109&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;ansible_ssh_host&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;10.10.0.109&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_port&quot;</span><span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_user&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_pass&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;xxxx&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>info_dict<span class="token punctuation">,</span>indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;--list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    group<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;--host&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    host<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: %s --list or --host &lt;hostname&gt;&quot;</span> <span class="token operator">%</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="_3-3-\u7ED3\u5408cmdb\u52A8\u6001\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#_3-3-\u7ED3\u5408cmdb\u52A8\u6001\u83B7\u53D6" aria-hidden="true">#</a> 3.3 \u7ED3\u5408CMDB\u52A8\u6001\u83B7\u53D6</h3><p>\u8FD9\u4E2A\u811A\u672C\u4E3B\u8981\u662F\u7ED3\u5408\u5E95\u5C42\u4E3A<code>openstack</code>\u7684\u79C1\u6709\u4E91\u4E2D\u7684mysql\u5B9E\u73B0\u7684</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># coding:utf-8</span>

<span class="token keyword">import</span> pymysql
<span class="token keyword">import</span> json
<span class="token keyword">import</span> sys

conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&quot;192.168.*.*&quot;</span><span class="token punctuation">,</span>
    user<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
    password<span class="token operator">=</span><span class="token string">&quot;****&quot;</span><span class="token punctuation">,</span>
    database<span class="token operator">=</span><span class="token string">&quot;***&quot;</span><span class="token punctuation">,</span>
    charset<span class="token operator">=</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">get_result</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
            cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
            result <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> result
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> e


<span class="token keyword">def</span> <span class="token function">get_all_group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    sql <span class="token operator">=</span> <span class="token string">&quot;SELECT instances.user_id FROM nova.instances GROUP BY instances.user_id&quot;</span>
    group_list <span class="token operator">=</span> get_result<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
    <span class="token keyword">return</span> group_list


<span class="token keyword">def</span> <span class="token function">group_sql</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> group <span class="token operator">==</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">:</span>
        sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;SELECT ipallocations.\`ip_address\`
        FROM nova.instances JOIN  nova.\`instance_system_metadata\`  JOIN neutron.\`ports\` JOIN neutron.\`ipallocations\` 
        ON instances.uuid=instance_system_metadata.\`instance_uuid\` AND  instances.uuid=ports.device_id AND ports.id=ipallocations.port_id 
        WHERE  instances.vm_state = &#39;active&#39; 
        GROUP BY ipallocations.\`ip_address\` 
        ORDER BY ipallocations.\`ip_address\`&quot;&quot;&quot;</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;SELECT ipallocations.\`ip_address\`
        FROM nova.instances JOIN  nova.\`instance_system_metadata\`  JOIN neutron.\`ports\` JOIN neutron.\`ipallocations\` 
        ON instances.uuid=instance_system_metadata.\`instance_uuid\` AND  instances.uuid=ports.device_id AND ports.id=ipallocations.port_id 
        WHERE instances.user_id = &quot;{}&quot;
        AND instances.vm_state = &#39;active&#39; 
        GROUP BY ipallocations.\`ip_address\` 
        ORDER BY ipallocations.\`ip_address\`
        &quot;&quot;&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span>
    <span class="token keyword">return</span> sql


<span class="token keyword">def</span> <span class="token function">group_list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    big_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    groups <span class="token operator">=</span> get_all_group<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> group <span class="token keyword">in</span> groups<span class="token punctuation">:</span>
        group_name <span class="token operator">=</span> group<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        sql <span class="token operator">=</span> group_sql<span class="token punctuation">(</span>group_name<span class="token punctuation">)</span>
        result <span class="token operator">=</span> get_result<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
        host_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> host <span class="token keyword">in</span> result<span class="token punctuation">:</span>
            host_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>host<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> group_name <span class="token operator">==</span> <span class="token string">&quot;99de4a68d74748eeb17708ae0d17e386&quot;</span><span class="token punctuation">:</span>
            big_dict<span class="token punctuation">[</span><span class="token string">&quot;bes&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span> host_list<span class="token punctuation">}</span>
        <span class="token keyword">elif</span> group_name <span class="token operator">==</span> <span class="token string">&quot;103e9393fc1d4b22abf7d15651409396&quot;</span><span class="token punctuation">:</span>
            big_dict<span class="token punctuation">[</span><span class="token string">&quot;csp&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span> host_list<span class="token punctuation">}</span>
        <span class="token keyword">elif</span> group_name <span class="token operator">==</span> <span class="token string">&quot;364e0a4530f64b7b890856abd93426b6&quot;</span><span class="token punctuation">:</span>
            big_dict<span class="token punctuation">[</span><span class="token string">&quot;h5&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span> host_list<span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            big_dict<span class="token punctuation">[</span><span class="token string">&quot;unknown&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span> host_list<span class="token punctuation">}</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>big_dict<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">host_list</span><span class="token punctuation">(</span>hostip<span class="token punctuation">)</span><span class="token punctuation">:</span>
    host_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment"># sql = &quot;&quot;&quot;SELECT ip,port,username from nova.instances where ip=&quot;{}&quot;;&quot;&quot;&quot;.format(hostip)</span>
    <span class="token comment"># result = get_result(sql)</span>
    <span class="token comment"># for host in result:</span>
    <span class="token comment">#     host_ip = host[0]</span>
    <span class="token comment">#     ssh_port = host[1]</span>
    <span class="token comment">#     ssh_user = host[2]</span>
    <span class="token comment">#     host_dict[hostip] = {&quot;ansible_ssh_host&quot;: host_ip,</span>
    <span class="token comment">#                      &quot;ansible_ssh_port&quot;: ssh_port, &quot;ansible_ssh_user&quot;: ssh_user}</span>
    host_dict<span class="token punctuation">[</span>hostip<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;ansible_ssh_host&quot;</span><span class="token punctuation">:</span> hostip<span class="token punctuation">,</span>
                         <span class="token string">&quot;ansible_ssh_port&quot;</span><span class="token punctuation">:</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&quot;ansible_ssh_user&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>host_dict<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token keyword">and</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;--list&quot;</span><span class="token punctuation">:</span>
        group_list<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span> <span class="token keyword">and</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;--host&quot;</span><span class="token punctuation">:</span>
        host_list<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: %s --list or --host &lt;hostname&gt;&quot;</span> <span class="token operator">%</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div><h3 id="_3-4-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-4-\u4F7F\u7528" aria-hidden="true">#</a> 3.4 \u4F7F\u7528</h3><p>\u4F7F\u7528\u65B9\u6CD5\u548C\u9759\u6001 inventory \u7C7B\u4F3C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u53EF\u4EE5\u6307\u5B9A\u7EC4</span>
$ ansible -i dynamic_investory.py all --list-hosts
  hosts <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>:
    <span class="token number">127.0</span>.0.1
    <span class="token number">10.10</span>.0.112
    <span class="token number">10.10</span>.0.109

<span class="token comment"># \u53EF\u4EE5\u6307\u5B9A\u4E3B\u673A</span>
$ ansible -i dynamic_investory.py <span class="token number">127.0</span>.0.1 --list-hosts
  hosts <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
    <span class="token number">127.0</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-\u4E34\u65F6\u6DFB\u52A0\u8282\u70B9-add-host\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_4-\u4E34\u65F6\u6DFB\u52A0\u8282\u70B9-add-host\u6A21\u5757" aria-hidden="true">#</a> 4 \u4E34\u65F6\u6DFB\u52A0\u8282\u70B9\uFF1Aadd_host\u6A21\u5757</h2><p>\u9664\u4E86\u9759\u6001\u548C\u52A8\u6001inventory\u53EF\u4EE5\u6307\u5B9A\u8FDC\u7A0B\u88AB\u63A7\u8282\u70B9\u7684\u4FE1\u606F\uFF0C\u8FD8\u6709\u4E2A\u6BD4\u8F83\u7279\u6B8A\u7684\u6A21\u5757add_host\uFF0C\u5B83\u53EF\u4EE5\u5728\u4EFB\u52A1\u6267\u884C\u65F6\u4E34\u65F6\u6DFB\u52A0\u4E3B\u673A\u8282\u70B9\u3002</p><p>add_host\u7528\u6CD5\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u6709\u4E24\u4E2A\u53C2\u6570\uFF1Aname\u548Cgroups\uFF0C\u5206\u522B\u5B9A\u4E49\u4E3B\u673A\u540D\u548C\u6240\u5728\u4E3B\u673A\u7EC4\uFF0C\u5176\u4E2Dgroups\u53C2\u6570\u53EF\u4EE5\u662F\u4E00\u4E2A\u5217\u8868\uFF0C\u8868\u793A\u4E3B\u673A\u53EF\u4EE5\u6DFB\u52A0\u5230\u591A\u4E2A\u7EC4\u4E2D\u3002\u5982\u679C\u8FD8\u6709\u5176\u5B83\u53C2\u6570\uFF0C\u5219\u5747\u88AB\u5F53\u4F5C\u53D8\u91CF\u8D4B\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: add new host to nginx and apache
  add_host:
    name: 192.168.200.34
    groups:
      - nginx
      - apache
    ansible_port: 22
    my_var: &quot;hello world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>add_host\u6A21\u5757\u662F\u4E00\u4E2A\u6BD4\u8F83\u7279\u6B8A\u7684\u6A21\u5757\uFF0C\u5B83\u5728playbook\u8FD0\u884C\u65F6\u6DFB\u52A0\u4E3B\u673A\uFF0C\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6CE8\u610F\u4E8B\u9879\uFF1A</p><p>(1).\u65B0\u6DFB\u52A0\u7684\u4E3B\u673A\u5728\u5F53\u524Dplay\u4E2D\u65E0\u6548\uFF0C\u53EA\u5728\u4E4B\u540E\u7684play\u4E2D\u6709\u6548</p><p>(2).\u5B83\u6DFB\u52A0\u7684\u4E3B\u673A\u53EA\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D\uFF0CAnsible\u9000\u51FA\u4E4B\u540E\u5C31\u6D88\u5931</p><h2 id="_5-group-by\u8FD0\u884C\u65F6\u4E34\u65F6\u8BBE\u7F6E\u4E3B\u673A\u7EC4" tabindex="-1"><a class="header-anchor" href="#_5-group-by\u8FD0\u884C\u65F6\u4E34\u65F6\u8BBE\u7F6E\u4E3B\u673A\u7EC4" aria-hidden="true">#</a> 5 group_by\u8FD0\u884C\u65F6\u4E34\u65F6\u8BBE\u7F6E\u4E3B\u673A\u7EC4</h2><p>group_by\u548Cadd_host\u529F\u80FD\u662F\u7C7B\u4F3C\u7684\uFF0Cgroup_by\u7528\u4E8E\u4E34\u65F6\u8BBE\u7F6E\u4E3B\u673A\u7EC4\u3002</p><p>group_by\u6709\u4E24\u4E2A\u53C2\u6570\uFF1A</p><p>(1).key\uFF1A\u65B0\u8BBE\u7F6E\u7684\u5206\u7EC4\u540D</p><p>(2).parents\uFF1A(\u53EF\u9009\u53C2\u6570)\u65B0\u589E\u5206\u7EC4\u7684\u7236\u7EC4</p><p>\u4F8B\u5982\uFF0C\u5F53\u524D\u7684inventory\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[nginx]
192.168.200.42

[php]
192.168.200.43

[mysql]
192.168.200.44

[dev:children]
nginx
php
mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5176\u4E2D\u5E76\u6CA1\u6709&quot;CentOS 7&quot;\u548C&quot;CentOS 6&quot;\u8FD9\u4E24\u4E2A\u4E3B\u673A\u7EC4\u3002\u73B0\u5728\u60F3\u8981\u5728playbook\u8FD0\u884C\u7684\u65F6\u5019\u53BB\u8BBE\u7F6E\u8FD9\u4E24\u4E2A\u4E3B\u673A\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
- name: set a new group
  hosts: all
  gather_facts: true
  tasks:
    - name: set new group
      group_by:
        key: &quot;{{ansible_distribution}}_{{ansible_distribution_major_version}}&quot;
        parents: &quot;CentOS&quot;

- name: use new group
  hosts: CentOS
  gather_facts: false
  tasks:
    - name: ping CentOS
      ping:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2Dgather_facts\u8BBE\u7F6E\u4E3Atrue\uFF0C\u56E0\u4E3Agroup_by\u4EFB\u52A1\u4E2D\u4F7F\u7528\u4E86\u4E24\u4E2A\u9700\u8981\u5B83\u6536\u96C6\u6765\u7684\u53D8\u91CF\uFF1Aansible_distribution\u548Cansible_distribution_major_version\u3002</p><p>ansible_distribution\u53D8\u91CF\u4FDD\u5B58\u7684\u662F\u7CFB\u7EDF\u7684\u53D1\u578B\u540D\u79F0\uFF0C\u6BD4\u5982CentOS\u3001RedHat\u7B49\u3002ansible_distribution_major_version\u53D8\u91CF\u4FDD\u5B58\u7684\u662F\u7CFB\u7EDF\u7684\u4E3B\u7248\u672C\u53F7\uFF0C\u6BD4\u5982CentOS 7.2\u65F6\u8FD4\u56DE\u4E3B\u7248\u672C\u53F77\u3002\u5173\u4E8Egather_facts\uFF0C\u4F1A\u5728\u7A0D\u540E\u7684\u8FDB\u9636\u5185\u5BB9\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\u3002</p><p>\u6240\u4EE5key\u53C2\u6570\u6E32\u67D3\u540E\u7684\u503C(\u4E5F\u5373\u65B0\u589E\u7EC4\u7684\u7EC4\u540D)\u5E94\u5F53\u7C7B\u4F3C\u4E8ECentOS_6\u3001CentOS_7\uFF0C\u800C\u4E14\u5B83\u4EEC\u90FD\u662FCentOS\u7684\u5B50\u7EC4\u3002</p><blockquote><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>https://www.jianshu.com/p/71d6700fbe79</p><p>https://blog.csdn.net/qq_23191379/article/details/90416992</p><p>https://blog.51cto.com/cloumn/blog/1542</p></blockquote>`,148);function p(l,t){return e}var o=n(a,[["render",p],["__file","inventory.html.vue"]]);export{o as default};
