import{_ as n,e as s}from"./app.53755e41.js";const a={},e=s(`<h1 id="_5-2-fact\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_5-2-fact\u53D8\u91CF" aria-hidden="true">#</a> 5.2 Fact\u53D8\u91CF</h1><h2 id="_1-fact\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-fact\u7B80\u4ECB" aria-hidden="true">#</a> 1 fact\u7B80\u4ECB</h2><p>\u4E3A\u4E86\u8BA9Ansible\u66F4\u4E86\u89E3\u76EE\u6807\u8282\u70B9\uFF0C\u53EF\u4EE5\u8BA9\u5B83\u53BB\u6536\u96C6\u76EE\u6807\u8282\u70B9\u7684\u4FE1\u606F\uFF0C\u6BD4\u5982\u83B7\u53D6\u5BF9\u65B9\u7684\u4E3B\u673A\u540D\u3001\u7CFB\u7EDF\u7248\u672C\u3001IP\u5730\u5740\u6216\u5176\u5B83\u7F51\u5361\u4FE1\u606F\u3001\u5206\u533A\u6302\u8F7D\u4FE1\u606F\u7B49\u7B49\u3002\u5728Ansible\u4E2D\uFF0C\u6536\u96C6\u5230\u7684\u8FD9\u4E9B\u8282\u70B9\u4FE1\u606F\u79F0\u4E3AFacts\u3002</p><p>\u6709\u4E86\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u7528\u6237\u53EF\u4EE5\u66F4\u597D\u7684\u63A7\u5236\u7BA1\u7406\u8282\u70B9\uFF0C\u6BD4\u5982\u5F53IP\u5730\u5740\u4E3Axxx\u65F6\u5C31\u600E\u6837\u600E\u6837\uFF0C\u5F53\u7CFB\u7EDF\u662FCentOS 6\u65F6\u600E\u6837\u600E\u6837\uFF0C\u662FCentOS 7\u65F6\u600E\u6837\u600E\u6837\uFF0C\u7B49\u7B49\u3002</p><p>\u6709\u8FD9\u4E9B\u4FE1\u606F\u5F53\u7136\u597D\uFF0C\u4F46\u662F\u6536\u96C6\u8FD9\u4E9B\u4FE1\u606F\u662F\u6709\u4EE3\u4EF7\u7684\uFF0C\u800C\u4E14\u4EE3\u4EF7\u5F88\u5927\uFF1A\u56E0\u4E3A\u8981\u6536\u96C6\u7684\u4FE1\u606F\u91CF\u5F88\u5927\uFF0C\u6240\u4EE5\u6536\u96C6\u7684\u8FC7\u7A0B\u975E\u5E38\u6162\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u5728playbook\u4E2D\u7528\u4E0D\u4E0A\u8FD9\u4E9B\u4FE1\u606F\u65F6\uFF0C\u5E94\u5F53\u7981\u7528\u6536\u96C6\u884C\u4E3A\uFF0C\u8FD9\u4E5F\u662F\u4E00\u4E2A\u975E\u5E38\u6709\u6548\u7684\u6548\u7387\u4F18\u5316\u624B\u6BB5\u3002</p><p>ansible\u4E24\u4E2A\u6A21\u5757\u53EBsetup\u3001gather_facts\uFF0C\u7528\u4E8E\u83B7\u53D6\u8FDC\u7A0B\u4E3B\u673A\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u5E76\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u4FE1\u606F\u4F5C\u4E3A\u53D8\u91CF\u5728playbook\u91CC\u8FDB\u884C\u8C03\u7528\u3002\u800Csetup\u6A21\u5757\u83B7\u53D6\u8FD9\u4E9B\u4FE1\u606F\u7684\u65B9\u6CD5\u5C31\u662F\u4F9D\u8D56\u4E8Efact\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ansible localhost -m setup
$ ansible localhost -m gather_facts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7B80\u5355\u8BF4\u660E\u4E00\u4E0Bsetup\u6A21\u5757\u548Cgather_facts\u6A21\u5757\u7684\u533A\u522B\u3002setup\u6A21\u5757\u662F\u65E9\u5C31\u5B58\u5728\u7684\u6A21\u5757\uFF0C\u800Cgather_facts\u6A21\u5757\u662FAnsible 2.8\u624D\u63D0\u4F9B\u7684\uFF0C\u5B83\u662F\u4E00\u4E2A\u4E8C\u6B21\u5C01\u88C5\u7684\u6A21\u5757\uFF0C\u5185\u90E8\u5F88\u53EF\u80FD\u5C31\u662F\u8C03\u7528setup\u6A21\u5757\uFF0C\u4F46\u4E3A\u4F55\u8FD8\u8981\u63D0\u4F9Bgather_facts\u6A21\u5757\u5462\uFF1F\u4E5F\u8BB8\u539F\u56E0\u5C31\u5728\u4E8Egather_facts\u6A21\u5757\u76F8\u6BD4setup\u6A21\u5757\u591A\u7684\u4E00\u4E2A\u529F\u80FD\uFF1A\u5E76\u884C\u6536\u96C6\u591A\u4E2A\u8282\u70B9\u7684\u4FE1\u606F\uFF0C\u800C\u4E14\u5728\u63A2\u6D4B\u5230\u8981\u6536\u96C6\u591A\u4E2A\u8282\u70B9\u4FE1\u606F\u65F6\u4F1A\u81EA\u52A8\u5E76\u884C\u3002</p><p>\u65E2\u7136setup\u548Cgather_facts\u662F\u6A21\u5757\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4E5F\u53EF\u4EE5\u5728playbook\u4E2D\u5F53\u4F5C\u4EFB\u52A1\u6765\u6267\u884C\u3002\u4F46\u662Fplaybook\u4E13\u95E8\u4E3A\u6B64\u63D0\u4F9B\u4E86\u4E00\u4E2Aplay\u7EA7\u522B\u7684\u6307\u4EE4\uFF1Agather_facts\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible test -m setup
10.1.61.187 | SUCCESS =&gt; {
    &quot;ansible_facts&quot;: {
        &quot;ansible_all_ipv4_addresses&quot;: [
            &quot;10.1.61.187&quot;
        ],
        &quot;ansible_all_ipv6_addresses&quot;: [
            &quot;fe80::f816:3eff:fe4f:6611&quot;
        ],
        &quot;ansible_apparmor&quot;: {
            &quot;status&quot;: &quot;disabled&quot;
        },
        &quot;ansible_architecture&quot;: &quot;x86_64&quot;,
        &quot;ansible_bios_date&quot;: &quot;04/01/2014&quot;,
        &quot;ansible_bios_version&quot;: &quot;Ubuntu-1.8.2-1ubuntu1~cloud0&quot;,
        
        ...output omitted...
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>setup\u83B7\u53D6\u7684\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u90FD\u662F\u53EF\u7528\u4E8E\u8BE5\u4E3B\u673A\u7684\u53D8\u91CF\u3002</p><h2 id="_2-\u81EA\u5B9A\u4E49fact-local-facts" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u5B9A\u4E49fact-local-facts" aria-hidden="true">#</a> 2 \u81EA\u5B9A\u4E49fact(Local Facts)</h2><h3 id="_2-1-\u624B\u52A8\u8BBE\u7F6Efact" tabindex="-1"><a class="header-anchor" href="#_2-1-\u624B\u52A8\u8BBE\u7F6Efact" aria-hidden="true">#</a> 2.1 \u624B\u52A8\u8BBE\u7F6Efact</h3><p>ansible\u9664\u4E86\u80FD\u83B7\u53D6\u5230\u9884\u5B9A\u4E49\u7684fact\u7684\u5185\u5BB9,\u8FD8\u652F\u6301\u624B\u52A8\u4E3A\u67D0\u4E2A\u4E3B\u673A\u5B9A\u5236fact\u3002\u79F0\u4E4B\u4E3A\u672C\u5730fact\u3002\u672C\u5730fact\u9ED8\u8BA4\u5B58\u653E\u4E8E\u88AB\u63A7\u7AEF\u7684<code>/etc/ansible/facts.d</code>\u76EE\u5F55\u4E0B\uFF0C\u5982\u679C\u6587\u4EF6\u4E3A<code>ini</code>\u683C\u5F0F\u6216\u8005<code>json</code>\u683C\u5F0F\uFF0Cansible\u4F1A\u81EA\u52A8\u8BC6\u522B\u3002\u4EE5\u8FD9\u79CD\u5F62\u5F0F\u52A0\u8F7D\u7684fact\u662Fkey\u4E3A<code>ansible_local</code>\u7684\u7279\u6B8A\u53D8\u91CF\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u5728ansibler\u4E3B\u63A7\u7AEF\u5B9A\u4E49\u4E00\u4E2A<code>ini</code>\u683C\u5F0F\u7684custom.fact\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[general]
package = httpd
service = httpd
state = started
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7136\u540E\u6211\u4EEC\u7F16\u5199\u4E00\u4E2Aplaybook\u6587\u4EF6\u540D\u4E3Asetup_facts.yml\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---
- name: Install remote facts
  hosts: test
  vars: 
    remote_dir: /etc/ansible/facts.d
    facts_file: custom.fact
  tasks:
    - name: Create the remote directory
      file:
        state: directory
        recurse: yes
        path: &quot;{{ remote_dir }}&quot;
    - name: Install the new facts
      copy:
        src: &quot;{{ facts_file }}&quot;
        dest: &quot;{{ remote_dir }}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6267\u884C\u8BE5playbook\uFF0C\u5B8C\u6210facts\u7684\u63A8\u9001\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ansible-playbook setup_facts.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u88AB\u63A7\u7AEF\u770B\u5230\u65B0\u7684facts\u5DF2\u7ECF\u751F\u6210\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible test -m setup        
10.1.61.187 | SUCCESS =&gt; {
    &quot;ansible_facts&quot;: {
    
        ...output omitted...
        
        &quot;ansible_local&quot;: {
            &quot;custom&quot;: {
                &quot;general&quot;: {
                    &quot;package&quot;: &quot;httpd&quot;,
                    &quot;service&quot;: &quot;httpd&quot;,
                    &quot;state&quot;: &quot;started&quot;
                }
            }
        },

        ...output omitted...
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u5199\u4E00\u4E2A\u7B80\u5355\u7684playbook\u6765\u4F7F\u7528\u8FD9\u4E9Bfacts\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: Install Apache and starts the service
  hosts: test
  tasks:
    - name: Install the required package
      yum: 
        name: &quot;{{ ansible_facts.ansible_local.custom.general.package }}&quot;
        state: latest
    - name: Start the service
      service: 
        name: &quot;{{ ansible_facts.ansible_local.custom.general.service }}&quot;
        state: &quot;{{ ansible_facts.ansible_local.custom.general.state }}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_2-2-\u4F7F\u7528set-fact\u6A21\u5757\u5B9A\u4E49\u65B0\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4F7F\u7528set-fact\u6A21\u5757\u5B9A\u4E49\u65B0\u7684\u53D8\u91CF" aria-hidden="true">#</a> 2.2 \u4F7F\u7528set_fact\u6A21\u5757\u5B9A\u4E49\u65B0\u7684\u53D8\u91CF</h3><p><code>set_fact</code>\u6A21\u5757\u53EF\u4EE5\u81EA\u5B9A\u4E49facts\uFF0C\u8FD9\u4E9B\u81EA\u5B9A\u4E49\u7684facts\u53EF\u4EE5\u901A\u8FC7template\u6216\u8005\u53D8\u91CF\u7684\u65B9\u5F0F\u5728playbook\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u4F60\u60F3\u8981\u83B7\u53D6\u4E00\u4E2A\u8FDB\u7A0B\u4F7F\u7528\u7684\u5185\u5B58\u7684\u767E\u5206\u6BD4\uFF0C\u5219\u5FC5\u987B\u901A\u8FC7set_fact\u6765\u8FDB\u884C\u8BA1\u7B97\u4E4B\u540E\u5F97\u51FA\u5176\u503C\uFF0C\u5E76\u5C06\u5176\u503C\u5728playbook\u4E2D\u5F15\u7528\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2Aset_fact\u6A21\u5757\u7684\u5E94\u7528\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: set_fact example
  hosts: test
  tasks:
    - name: Calculate InnoDB buffer pool size
      set_fact: innodb_buffer_pool_size_mb=&quot;{{ ansible_memtotal_mb / 2 |int }}&quot;
      
    - debug: var=innodb_buffer_pool_size_mb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6267\u884Cplaybook\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook set_fact_ex.yaml 

PLAY [set_fact example] *****************************************************************************************************************************************************

TASK [Gathering Facts] ******************************************************************************************************************************************************
ok: [10.1.61.187]

TASK [Calculate InnoDB buffer pool size] ************************************************************************************************************************************
ok: [10.1.61.187]

TASK [debug] ****************************************************************************************************************************************************************
ok: [10.1.61.187] =&gt; {
    &quot;innodb_buffer_pool_size_mb&quot;: &quot;3911.0&quot;
}

PLAY RECAP ******************************************************************************************************************************************************************
10.1.61.187                : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>\u8FD9\u79CD\u8BBE\u7F6E\u65B9\u5F0F\u53EA\u5728\u5F53\u524Dplaybook\u5F53\u4E2D\u6709\u6548</p></blockquote><h2 id="_3-\u624B\u52A8\u91C7\u96C6fact" tabindex="-1"><a class="header-anchor" href="#_3-\u624B\u52A8\u91C7\u96C6fact" aria-hidden="true">#</a> 3 \u624B\u52A8\u91C7\u96C6fact</h2><p>\u6536\u96C6\u5230\u76EE\u6807\u8282\u70B9\u4FE1\u606F\u4E4B\u540E\uFF0C\u5404\u4FE1\u606F\u90FD\u4FDD\u5B58\u5728\u4E00\u4E2A\u540D\u4E3Aansible_facts\u7684\u53D8\u91CF\u4E2D\uFF0C\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5debug\u53BB\u67E5\u770B\u8FD9\u4E2A\u53D8\u91CF\u91CC\u4FDD\u5B58\u4E86\u4EC0\u4E48\u4E1C\u897F\uFF0C\u4E5F\u5373\u6536\u96C6\u4E86\u76EE\u6807\u8282\u70B9\u7684\u54EA\u4E9B\u4FE1\u606F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: info in ansible_facts
  debug:
    var: ansible_facts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u5916\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E0B\u9762\u7684\u65B9\u5F0F\u6765\u67E5\u770BFacts\u4E2D\u6536\u96C6\u4E86\u54EA\u4E9B\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ansible localhost -m &#39;setup&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0B\u9762\u662F\u6536\u96C6\u5230\u7684\u90E8\u5206Facts\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>localhost | SUCCESS =&gt; {
    &quot;ansible_facts&quot;: {
        &quot;ansible_all_ipv4_addresses&quot;: [
            &quot;192.168.135.234&quot;
        ],
        &quot;ansible_all_ipv6_addresses&quot;: [
            &quot;fe80::c38:ea5:1598:8169&quot;
        ],
        &quot;ansible_apparmor&quot;: {
            &quot;status&quot;: &quot;disabled&quot;
        },
        &quot;ansible_architecture&quot;: &quot;x86_64&quot;,
        &quot;ansible_bios_date&quot;: &quot;04/01/2014&quot;,
        &quot;ansible_bios_version&quot;: &quot;1.11.0-2.el7&quot;,
        &quot;ansible_cmdline&quot;: {
            &quot;BOOT_IMAGE&quot;: &quot;/vmlinuz-3.10.0-957.el7.x86_64&quot;,
            &quot;biosdevname&quot;: &quot;0&quot;,
            &quot;crashkernel&quot;: &quot;auto&quot;,
            &quot;net.ifnames&quot;: &quot;0&quot;,
            &quot;quiet&quot;: true,
            &quot;rhgb&quot;: true,
            &quot;ro&quot;: true,
            &quot;root&quot;: &quot;UUID=120cca73-ddab-4aac-b751-7421263b55ad&quot;
        },
        &quot;ansible_date_time&quot;: {
            &quot;date&quot;: &quot;2021-03-16&quot;,
            &quot;day&quot;: &quot;16&quot;,
            &quot;epoch&quot;: &quot;1615886206&quot;,
            &quot;hour&quot;: &quot;17&quot;,
            &quot;iso8601&quot;: &quot;2021-03-16T09:16:46Z&quot;,
            &quot;iso8601_basic&quot;: &quot;20210316T171646952201&quot;,
            &quot;iso8601_basic_short&quot;: &quot;20210316T171646&quot;,
            &quot;iso8601_micro&quot;: &quot;2021-03-16T09:16:46.952201Z&quot;,
            &quot;minute&quot;: &quot;16&quot;,
            &quot;month&quot;: &quot;03&quot;,
            &quot;second&quot;: &quot;46&quot;,
            &quot;time&quot;: &quot;17:16:46&quot;,
            &quot;tz&quot;: &quot;CST&quot;,
            &quot;tz_offset&quot;: &quot;+0800&quot;,
            &quot;weekday&quot;: &quot;Tuesday&quot;,
            &quot;weekday_number&quot;: &quot;2&quot;,
            &quot;weeknumber&quot;: &quot;11&quot;,
            &quot;year&quot;: &quot;2021&quot;
        },
        &quot;ansible_default_ipv4&quot;: {
            &quot;address&quot;: &quot;192.168.135.234&quot;,
            &quot;alias&quot;: &quot;eth0&quot;,
            &quot;broadcast&quot;: &quot;192.168.135.255&quot;,
            &quot;gateway&quot;: &quot;192.168.135.254&quot;,
            &quot;interface&quot;: &quot;eth0&quot;,
            &quot;macaddress&quot;: &quot;fa:16:3e:7e:9b:47&quot;,
            &quot;mtu&quot;: 1500,
            &quot;netmask&quot;: &quot;255.255.255.0&quot;,
            &quot;network&quot;: &quot;192.168.135.0&quot;,
            &quot;type&quot;: &quot;ether&quot;
        },
        &quot;ansible_default_ipv6&quot;: {},
        &quot;ansible_device_links&quot;: {
            &quot;ids&quot;: {
                &quot;sr0&quot;: [
                    &quot;ata-QEMU_DVD-ROM_QM00002&quot;
                ],
                &quot;sr1&quot;: [
                    &quot;ata-QEMU_DVD-ROM_QM00004&quot;
                ],
                &quot;vda&quot;: [
                    &quot;virtio-c1672133-7ae6-4318-8&quot;
                ],
                &quot;vda1&quot;: [
                    &quot;virtio-c1672133-7ae6-4318-8-part1&quot;
                ],
                &quot;vda2&quot;: [
                    &quot;virtio-c1672133-7ae6-4318-8-part2&quot;
                ]
            },
            &quot;labels&quot;: {
                &quot;sr1&quot;: [
                    &quot;config-2&quot;
                ]
            },
            &quot;masters&quot;: {},
            &quot;uuids&quot;: {
                &quot;sr1&quot;: [
                    &quot;2021-03-08-14-55-38-00&quot;
                ],
                &quot;vda1&quot;: [
                    &quot;fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88&quot;
                ],
                &quot;vda2&quot;: [
                    &quot;120cca73-ddab-4aac-b751-7421263b55ad&quot;
                ]
            }
        },
        &quot;ansible_devices&quot;: {
            &quot;sr0&quot;: {
                &quot;holders&quot;: [],
                &quot;host&quot;: &quot;&quot;,
                &quot;links&quot;: {
                    &quot;ids&quot;: [
                        &quot;ata-QEMU_DVD-ROM_QM00002&quot;
                    ],
                    &quot;labels&quot;: [],
                    &quot;masters&quot;: [],
                    &quot;uuids&quot;: []
                },
                &quot;model&quot;: &quot;QEMU DVD-ROM&quot;,
                &quot;partitions&quot;: {},
                &quot;removable&quot;: &quot;1&quot;,
                &quot;rotational&quot;: &quot;1&quot;,
                &quot;sas_address&quot;: null,
                &quot;sas_device_handle&quot;: null,
                &quot;scheduler_mode&quot;: &quot;deadline&quot;,
                &quot;sectors&quot;: &quot;2097151&quot;,
                &quot;sectorsize&quot;: &quot;512&quot;,
                &quot;size&quot;: &quot;1024.00 MB&quot;,
                &quot;support_discard&quot;: &quot;0&quot;,
                &quot;vendor&quot;: &quot;QEMU&quot;,
                &quot;virtual&quot;: 1
            },
            &quot;sr1&quot;: {
                &quot;holders&quot;: [],
                &quot;host&quot;: &quot;&quot;,
                &quot;links&quot;: {
                    &quot;ids&quot;: [
                        &quot;ata-QEMU_DVD-ROM_QM00004&quot;
                    ],
                    &quot;labels&quot;: [
                        &quot;config-2&quot;
                    ],
                    &quot;masters&quot;: [],
                    &quot;uuids&quot;: [
                        &quot;2021-03-08-14-55-38-00&quot;
                    ]
                },
                &quot;model&quot;: &quot;QEMU DVD-ROM&quot;,
                &quot;partitions&quot;: {},
                &quot;removable&quot;: &quot;1&quot;,
                &quot;rotational&quot;: &quot;1&quot;,
                &quot;sas_address&quot;: null,
                &quot;sas_device_handle&quot;: null,
                &quot;scheduler_mode&quot;: &quot;deadline&quot;,
                &quot;sectors&quot;: &quot;964&quot;,
                &quot;sectorsize&quot;: &quot;2048&quot;,
                &quot;size&quot;: &quot;482.00 KB&quot;,
                &quot;support_discard&quot;: &quot;0&quot;,
                &quot;vendor&quot;: &quot;QEMU&quot;,
                &quot;virtual&quot;: 1
            },
            &quot;vda&quot;: {
                &quot;holders&quot;: [],
                &quot;host&quot;: &quot;&quot;,
                &quot;links&quot;: {
                    &quot;ids&quot;: [
                        &quot;virtio-c1672133-7ae6-4318-8&quot;
                    ],
                    &quot;labels&quot;: [],
                    &quot;masters&quot;: [],
                    &quot;uuids&quot;: []
                },
                &quot;model&quot;: null,
                &quot;partitions&quot;: {
                    &quot;vda1&quot;: {
                        &quot;holders&quot;: [],
                        &quot;links&quot;: {
                            &quot;ids&quot;: [
                                &quot;virtio-c1672133-7ae6-4318-8-part1&quot;
                            ],
                            &quot;labels&quot;: [],
                            &quot;masters&quot;: [],
                            &quot;uuids&quot;: [
                                &quot;fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88&quot;
                            ]
                        },
                        &quot;sectors&quot;: &quot;1024000&quot;,
                        &quot;sectorsize&quot;: 512,
                        &quot;size&quot;: &quot;500.00 MB&quot;,
                        &quot;start&quot;: &quot;2048&quot;,
                        &quot;uuid&quot;: &quot;fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88&quot;
                    },
                    &quot;vda2&quot;: {
                        &quot;holders&quot;: [],
                        &quot;links&quot;: {
                            &quot;ids&quot;: [
                                &quot;virtio-c1672133-7ae6-4318-8-part2&quot;
                            ],
                            &quot;labels&quot;: [],
                            &quot;masters&quot;: [],
                            &quot;uuids&quot;: [
                                &quot;120cca73-ddab-4aac-b751-7421263b55ad&quot;
                            ]
                        },
                        &quot;sectors&quot;: &quot;208689152&quot;,
                        &quot;sectorsize&quot;: 512,
                        &quot;size&quot;: &quot;99.51 GB&quot;,
                        &quot;start&quot;: &quot;1026048&quot;,
                        &quot;uuid&quot;: &quot;120cca73-ddab-4aac-b751-7421263b55ad&quot;
                    }
                },
                &quot;removable&quot;: &quot;0&quot;,
                &quot;rotational&quot;: &quot;1&quot;,
                &quot;sas_address&quot;: null,
                &quot;sas_device_handle&quot;: null,
                &quot;scheduler_mode&quot;: &quot;mq-deadline&quot;,
                &quot;sectors&quot;: &quot;209715200&quot;,
                &quot;sectorsize&quot;: &quot;512&quot;,
                &quot;size&quot;: &quot;100.00 GB&quot;,
                &quot;support_discard&quot;: &quot;0&quot;,
                &quot;vendor&quot;: &quot;0x1af4&quot;,
                &quot;virtual&quot;: 1
            }
        },
        &quot;ansible_distribution&quot;: &quot;CentOS&quot;,
        &quot;ansible_distribution_file_parsed&quot;: true,
        &quot;ansible_distribution_file_path&quot;: &quot;/etc/redhat-release&quot;,
        &quot;ansible_distribution_file_variety&quot;: &quot;RedHat&quot;,
        &quot;ansible_distribution_major_version&quot;: &quot;7&quot;,
        &quot;ansible_distribution_release&quot;: &quot;Core&quot;,
        &quot;ansible_distribution_version&quot;: &quot;7.6&quot;,
        &quot;ansible_dns&quot;: {
            &quot;nameservers&quot;: [
                &quot;202.96.209.5&quot;,
                &quot;114.114.114.114&quot;
            ],
            &quot;search&quot;: [
                &quot;openstacklocal&quot;
            ]
        },
        &quot;ansible_domain&quot;: &quot;&quot;,
        &quot;ansible_effective_group_id&quot;: 0,
        &quot;ansible_effective_user_id&quot;: 0,
        &quot;ansible_env&quot;: {
            &quot;CLASSPATH&quot;: &quot;.::/opt/jdk1.8.0_144/lib:/opt/jdk1.8.0_144/jre/lib&quot;,
            &quot;HISTCONTROL&quot;: &quot;ignoredups&quot;,
            &quot;HISTSIZE&quot;: &quot;1000&quot;,
            &quot;HOME&quot;: &quot;/root&quot;,
            &quot;HOSTNAME&quot;: &quot;host-192-168-135-234&quot;,
            &quot;JAVA_HOME&quot;: &quot;/opt/jdk1.8.0_144&quot;,
            &quot;JRE_HOME&quot;: &quot;/opt/jdk1.8.0_144/jre&quot;,
            &quot;LANG&quot;: &quot;en_US.UTF-8&quot;,
            &quot;LESSOPEN&quot;: &quot;||/usr/bin/lesspipe.sh %s&quot;,
            &quot;LOGNAME&quot;: &quot;root&quot;,
            &quot;LS_COLORS&quot;: &quot;rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.axa=01;36:*.oga=01;36:*.spx=01;36:*.xspf=01;36:&quot;,
            &quot;MAIL&quot;: &quot;/var/spool/mail/root&quot;,
            &quot;PATH&quot;: &quot;/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/opt/jdk1.8.0_144/bin:/opt/jdk1.8.0_144/jre/bin:/root/bin&quot;,
            &quot;PWD&quot;: &quot;/etc/ansible/playbooks&quot;,
            &quot;SHELL&quot;: &quot;/bin/bash&quot;,
            &quot;SHLVL&quot;: &quot;3&quot;,
            &quot;SSH_CLIENT&quot;: &quot;192.168.135.72 6220 22&quot;,
            &quot;SSH_CONNECTION&quot;: &quot;192.168.135.72 6220 192.168.135.234 22&quot;,
            &quot;SSH_TTY&quot;: &quot;/dev/pts/0&quot;,
            &quot;TERM&quot;: &quot;xterm&quot;,
            &quot;USER&quot;: &quot;root&quot;,
            &quot;XDG_RUNTIME_DIR&quot;: &quot;/run/user/0&quot;,
            &quot;XDG_SESSION_ID&quot;: &quot;5879&quot;,
            &quot;_&quot;: &quot;/usr/bin/python3&quot;
        },
        &quot;ansible_eth0&quot;: {
            &quot;active&quot;: true,
            &quot;device&quot;: &quot;eth0&quot;,
            &quot;features&quot;: {
                &quot;busy_poll&quot;: &quot;off [fixed]&quot;,
                &quot;fcoe_mtu&quot;: &quot;off [fixed]&quot;,
                &quot;generic_receive_offload&quot;: &quot;on&quot;,
                &quot;generic_segmentation_offload&quot;: &quot;on&quot;,
                &quot;highdma&quot;: &quot;on [fixed]&quot;,
                &quot;hw_tc_offload&quot;: &quot;off [fixed]&quot;,
                &quot;l2_fwd_offload&quot;: &quot;off [fixed]&quot;,
                &quot;large_receive_offload&quot;: &quot;off [fixed]&quot;,
                &quot;loopback&quot;: &quot;off [fixed]&quot;,
                &quot;netns_local&quot;: &quot;off [fixed]&quot;,
                &quot;ntuple_filters&quot;: &quot;off [fixed]&quot;,
                &quot;receive_hashing&quot;: &quot;off [fixed]&quot;,
                &quot;rx_all&quot;: &quot;off [fixed]&quot;,
                &quot;rx_checksumming&quot;: &quot;on [fixed]&quot;,
                &quot;rx_fcs&quot;: &quot;off [fixed]&quot;,
                &quot;rx_gro_hw&quot;: &quot;off [fixed]&quot;,
                &quot;rx_udp_tunnel_port_offload&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_filter&quot;: &quot;on [fixed]&quot;,
                &quot;rx_vlan_offload&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_stag_filter&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_stag_hw_parse&quot;: &quot;off [fixed]&quot;,
                &quot;scatter_gather&quot;: &quot;on&quot;,
                &quot;tcp_segmentation_offload&quot;: &quot;on&quot;,
                &quot;tx_checksum_fcoe_crc&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_ip_generic&quot;: &quot;on&quot;,
                &quot;tx_checksum_ipv4&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_ipv6&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_sctp&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksumming&quot;: &quot;on&quot;,
                &quot;tx_fcoe_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gre_csum_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gre_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gso_partial&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gso_robust&quot;: &quot;off [fixed]&quot;,
                &quot;tx_ipip_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_lockless&quot;: &quot;off [fixed]&quot;,
                &quot;tx_nocache_copy&quot;: &quot;off&quot;,
                &quot;tx_scatter_gather&quot;: &quot;on&quot;,
                &quot;tx_scatter_gather_fraglist&quot;: &quot;off [fixed]&quot;,
                &quot;tx_sctp_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_sit_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_tcp6_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_ecn_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_mangleid_segmentation&quot;: &quot;off&quot;,
                &quot;tx_tcp_segmentation&quot;: &quot;on&quot;,
                &quot;tx_udp_tnl_csum_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_udp_tnl_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_vlan_offload&quot;: &quot;off [fixed]&quot;,
                &quot;tx_vlan_stag_hw_insert&quot;: &quot;off [fixed]&quot;,
                &quot;udp_fragmentation_offload&quot;: &quot;on&quot;,
                &quot;vlan_challenged&quot;: &quot;off [fixed]&quot;
            },
            &quot;hw_timestamp_filters&quot;: [],
            &quot;ipv4&quot;: {
                &quot;address&quot;: &quot;192.168.135.234&quot;,
                &quot;broadcast&quot;: &quot;192.168.135.255&quot;,
                &quot;netmask&quot;: &quot;255.255.255.0&quot;,
                &quot;network&quot;: &quot;192.168.135.0&quot;
            },
            &quot;ipv6&quot;: [
                {
                    &quot;address&quot;: &quot;fe80::c38:ea5:1598:8169&quot;,
                    &quot;prefix&quot;: &quot;64&quot;,
                    &quot;scope&quot;: &quot;link&quot;
                }
            ],
            &quot;macaddress&quot;: &quot;fa:16:3e:7e:9b:47&quot;,
            &quot;module&quot;: &quot;virtio_net&quot;,
            &quot;mtu&quot;: 1500,
            &quot;pciid&quot;: &quot;virtio0&quot;,
            &quot;promisc&quot;: false,
            &quot;timestamping&quot;: [
                &quot;rx_software&quot;,
                &quot;software&quot;
            ],
            &quot;type&quot;: &quot;ether&quot;
        },
        &quot;ansible_fibre_channel_wwn&quot;: [],
        &quot;ansible_fips&quot;: false,
        &quot;ansible_form_factor&quot;: &quot;Other&quot;,
        &quot;ansible_fqdn&quot;: &quot;host-192-168-135-234&quot;,
        &quot;ansible_hostname&quot;: &quot;host-192-168-135-234&quot;,
        &quot;ansible_hostnqn&quot;: &quot;&quot;,
        &quot;ansible_interfaces&quot;: [
            &quot;lo&quot;,
            &quot;eth0&quot;
        ],
        &quot;ansible_is_chroot&quot;: false,
        &quot;ansible_iscsi_iqn&quot;: &quot;&quot;,
        &quot;ansible_kernel&quot;: &quot;3.10.0-957.el7.x86_64&quot;,
        &quot;ansible_kernel_version&quot;: &quot;#1 SMP Thu Nov 8 23:39:32 UTC 2018&quot;,
        &quot;ansible_lo&quot;: {
            &quot;active&quot;: true,
            &quot;device&quot;: &quot;lo&quot;,
            &quot;features&quot;: {
                &quot;busy_poll&quot;: &quot;off [fixed]&quot;,
                &quot;fcoe_mtu&quot;: &quot;off [fixed]&quot;,
                &quot;generic_receive_offload&quot;: &quot;on&quot;,
                &quot;generic_segmentation_offload&quot;: &quot;on&quot;,
                &quot;highdma&quot;: &quot;on [fixed]&quot;,
                &quot;hw_tc_offload&quot;: &quot;off [fixed]&quot;,
                &quot;l2_fwd_offload&quot;: &quot;off [fixed]&quot;,
                &quot;large_receive_offload&quot;: &quot;off [fixed]&quot;,
                &quot;loopback&quot;: &quot;on [fixed]&quot;,
                &quot;netns_local&quot;: &quot;on [fixed]&quot;,
                &quot;ntuple_filters&quot;: &quot;off [fixed]&quot;,
                &quot;receive_hashing&quot;: &quot;off [fixed]&quot;,
                &quot;rx_all&quot;: &quot;off [fixed]&quot;,
                &quot;rx_checksumming&quot;: &quot;on [fixed]&quot;,
                &quot;rx_fcs&quot;: &quot;off [fixed]&quot;,
                &quot;rx_gro_hw&quot;: &quot;off [fixed]&quot;,
                &quot;rx_udp_tunnel_port_offload&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_filter&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_offload&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_stag_filter&quot;: &quot;off [fixed]&quot;,
                &quot;rx_vlan_stag_hw_parse&quot;: &quot;off [fixed]&quot;,
                &quot;scatter_gather&quot;: &quot;on&quot;,
                &quot;tcp_segmentation_offload&quot;: &quot;on&quot;,
                &quot;tx_checksum_fcoe_crc&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_ip_generic&quot;: &quot;on [fixed]&quot;,
                &quot;tx_checksum_ipv4&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_ipv6&quot;: &quot;off [fixed]&quot;,
                &quot;tx_checksum_sctp&quot;: &quot;on [fixed]&quot;,
                &quot;tx_checksumming&quot;: &quot;on&quot;,
                &quot;tx_fcoe_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gre_csum_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gre_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gso_partial&quot;: &quot;off [fixed]&quot;,
                &quot;tx_gso_robust&quot;: &quot;off [fixed]&quot;,
                &quot;tx_ipip_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_lockless&quot;: &quot;on [fixed]&quot;,
                &quot;tx_nocache_copy&quot;: &quot;off [fixed]&quot;,
                &quot;tx_scatter_gather&quot;: &quot;on [fixed]&quot;,
                &quot;tx_scatter_gather_fraglist&quot;: &quot;on [fixed]&quot;,
                &quot;tx_sctp_segmentation&quot;: &quot;on&quot;,
                &quot;tx_sit_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_tcp6_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_ecn_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_mangleid_segmentation&quot;: &quot;on&quot;,
                &quot;tx_tcp_segmentation&quot;: &quot;on&quot;,
                &quot;tx_udp_tnl_csum_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_udp_tnl_segmentation&quot;: &quot;off [fixed]&quot;,
                &quot;tx_vlan_offload&quot;: &quot;off [fixed]&quot;,
                &quot;tx_vlan_stag_hw_insert&quot;: &quot;off [fixed]&quot;,
                &quot;udp_fragmentation_offload&quot;: &quot;on&quot;,
                &quot;vlan_challenged&quot;: &quot;on [fixed]&quot;
            },
            &quot;hw_timestamp_filters&quot;: [],
            &quot;ipv4&quot;: {
                &quot;address&quot;: &quot;127.0.0.1&quot;,
                &quot;broadcast&quot;: &quot;&quot;,
                &quot;netmask&quot;: &quot;255.0.0.0&quot;,
                &quot;network&quot;: &quot;127.0.0.0&quot;
            },
            &quot;ipv6&quot;: [
                {
                    &quot;address&quot;: &quot;::1&quot;,
                    &quot;prefix&quot;: &quot;128&quot;,
                    &quot;scope&quot;: &quot;host&quot;
                }
            ],
            &quot;mtu&quot;: 65536,
            &quot;promisc&quot;: false,
            &quot;timestamping&quot;: [
                &quot;rx_software&quot;,
                &quot;software&quot;
            ],
            &quot;type&quot;: &quot;loopback&quot;
        },
        &quot;ansible_local&quot;: {},
        &quot;ansible_lsb&quot;: {},
        &quot;ansible_machine&quot;: &quot;x86_64&quot;,
        &quot;ansible_machine_id&quot;: &quot;5da37d186bbc4fab946458f383820cc2&quot;,
        &quot;ansible_memfree_mb&quot;: 5793,
        &quot;ansible_memory_mb&quot;: {
            &quot;nocache&quot;: {
                &quot;free&quot;: 6652,
                &quot;used&quot;: 1150
            },
            &quot;real&quot;: {
                &quot;free&quot;: 5793,
                &quot;total&quot;: 7802,
                &quot;used&quot;: 2009
            },
            &quot;swap&quot;: {
                &quot;cached&quot;: 0,
                &quot;free&quot;: 0,
                &quot;total&quot;: 0,
                &quot;used&quot;: 0
            }
        },
        &quot;ansible_memtotal_mb&quot;: 7802,
        &quot;ansible_mounts&quot;: [
            {
                &quot;block_available&quot;: 25154087,
                &quot;block_size&quot;: 4096,
                &quot;block_total&quot;: 26073407,
                &quot;block_used&quot;: 919320,
                &quot;device&quot;: &quot;/dev/vda2&quot;,
                &quot;fstype&quot;: &quot;xfs&quot;,
                &quot;inode_available&quot;: 52034972,
                &quot;inode_total&quot;: 52172288,
                &quot;inode_used&quot;: 137316,
                &quot;mount&quot;: &quot;/&quot;,
                &quot;options&quot;: &quot;rw,relatime,attr2,inode64,noquota&quot;,
                &quot;size_available&quot;: 103031140352,
                &quot;size_total&quot;: 106796675072,
                &quot;uuid&quot;: &quot;120cca73-ddab-4aac-b751-7421263b55ad&quot;
            },
            {
                &quot;block_available&quot;: 93950,
                &quot;block_size&quot;: 4096,
                &quot;block_total&quot;: 127145,
                &quot;block_used&quot;: 33195,
                &quot;device&quot;: &quot;/dev/vda1&quot;,
                &quot;fstype&quot;: &quot;xfs&quot;,
                &quot;inode_available&quot;: 255673,
                &quot;inode_total&quot;: 256000,
                &quot;inode_used&quot;: 327,
                &quot;mount&quot;: &quot;/boot&quot;,
                &quot;options&quot;: &quot;rw,relatime,attr2,inode64,noquota&quot;,
                &quot;size_available&quot;: 384819200,
                &quot;size_total&quot;: 520785920,
                &quot;uuid&quot;: &quot;fef1f8c8-02fb-440c-b8aa-8fec6bfb4a88&quot;
            }
        ],
        &quot;ansible_nodename&quot;: &quot;host-192-168-135-234&quot;,
        &quot;ansible_os_family&quot;: &quot;RedHat&quot;,
        &quot;ansible_pkg_mgr&quot;: &quot;yum&quot;,
        &quot;ansible_proc_cmdline&quot;: {
            &quot;BOOT_IMAGE&quot;: &quot;/vmlinuz-3.10.0-957.el7.x86_64&quot;,
            &quot;biosdevname&quot;: [
                &quot;0&quot;,
                &quot;0&quot;,
                &quot;0&quot;
            ],
            &quot;crashkernel&quot;: &quot;auto&quot;,
            &quot;net.ifnames&quot;: [
                &quot;0&quot;,
                &quot;0&quot;,
                &quot;0&quot;
            ],
            &quot;quiet&quot;: true,
            &quot;rhgb&quot;: true,
            &quot;ro&quot;: true,
            &quot;root&quot;: &quot;UUID=120cca73-ddab-4aac-b751-7421263b55ad&quot;
        },
        &quot;ansible_processor&quot;: [
            &quot;0&quot;,
            &quot;GenuineIntel&quot;,
            &quot;QEMU Virtual CPU version (cpu64-rhel6)&quot;,
            &quot;1&quot;,
            &quot;GenuineIntel&quot;,
            &quot;QEMU Virtual CPU version (cpu64-rhel6)&quot;,
            &quot;2&quot;,
            &quot;GenuineIntel&quot;,
            &quot;QEMU Virtual CPU version (cpu64-rhel6)&quot;,
            &quot;3&quot;,
            &quot;GenuineIntel&quot;,
            &quot;QEMU Virtual CPU version (cpu64-rhel6)&quot;
        ],
        &quot;ansible_processor_cores&quot;: 1,
        &quot;ansible_processor_count&quot;: 4,
        &quot;ansible_processor_threads_per_core&quot;: 1,
        &quot;ansible_processor_vcpus&quot;: 4,
        &quot;ansible_product_name&quot;: &quot;ArStack&quot;,
        &quot;ansible_product_serial&quot;: &quot;ed734a0c-5e92-45e4-8491-1f2882a28b98&quot;,
        &quot;ansible_product_uuid&quot;: &quot;E9D04AFD-381C-4EF2-8523-A5F2177334A9&quot;,
        &quot;ansible_product_version&quot;: &quot;2020.5.15-1.el7.centos&quot;,
        &quot;ansible_python&quot;: {
            &quot;executable&quot;: &quot;/usr/bin/python3&quot;,
            &quot;has_sslcontext&quot;: true,
            &quot;type&quot;: &quot;cpython&quot;,
            &quot;version&quot;: {
                &quot;major&quot;: 3,
                &quot;micro&quot;: 8,
                &quot;minor&quot;: 6,
                &quot;releaselevel&quot;: &quot;final&quot;,
                &quot;serial&quot;: 0
            },
            &quot;version_info&quot;: [
                3,
                6,
                8,
                &quot;final&quot;,
                0
            ]
        },
        &quot;ansible_python_version&quot;: &quot;3.6.8&quot;,
        &quot;ansible_real_group_id&quot;: 0,
        &quot;ansible_real_user_id&quot;: 0,
        &quot;ansible_selinux&quot;: {
            &quot;status&quot;: &quot;Missing selinux Python library&quot;
        },
        &quot;ansible_selinux_python_present&quot;: false,
        &quot;ansible_service_mgr&quot;: &quot;systemd&quot;,
        &quot;ansible_ssh_host_key_ecdsa_public&quot;: &quot;AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBNxkCyohIHmaY5FLaLU4NRenQ6QE9qcjzbs87lvJhhH7TpWKHw3/NOVLks1amivsFJ1CQsgzk+XkU/YLfDFGNRo=&quot;,
        &quot;ansible_ssh_host_key_ed25519_public&quot;: &quot;AAAAC3NzaC1lZDI1NTE5AAAAILGRRrB9EPLkKsnOkyTzCpIyfWuIPEh7Qy9l2H0O+k4U&quot;,
        &quot;ansible_ssh_host_key_rsa_public&quot;: &quot;AAAAB3NzaC1yc2EAAAADAQABAAABAQDXqv9l/aw5jmEeKMRIVCUSUCpAPSUYyiVzfe7MNGDJ/Wd/ZHBMScAKgPq31z5OXJBpzDzIULZ5Di3WwmIdRHU6f4+PQ7E2LHQN4SDQvk7Flz7ivUv/aGtwUft929llVyT7/jrVFzWeR3ABtc6Roux2UMwWZANDwGWLkv+R6qluFNZ4yGTmYr7i/WTa0IXqI0AgZbAjGcSxqwGpgC7+NW8UVn975sz2pBRgCz9PG0mTWLKjcpESPpeypX0D0liq3rkwCjmU3OutwrTOYX1Di5n9miufUvZeSauWfska++t8xSYcOvbkzWidCOWOYtmx6VqrbKSSQiEDAbWJipIGcX+T&quot;,
        &quot;ansible_swapfree_mb&quot;: 0,
        &quot;ansible_swaptotal_mb&quot;: 0,
        &quot;ansible_system&quot;: &quot;Linux&quot;,
        &quot;ansible_system_capabilities&quot;: [
            &quot;cap_chown&quot;,
            &quot;cap_dac_override&quot;,
            &quot;cap_dac_read_search&quot;,
            &quot;cap_fowner&quot;,
            &quot;cap_fsetid&quot;,
            &quot;cap_kill&quot;,
            &quot;cap_setgid&quot;,
            &quot;cap_setuid&quot;,
            &quot;cap_setpcap&quot;,
            &quot;cap_linux_immutable&quot;,
            &quot;cap_net_bind_service&quot;,
            &quot;cap_net_broadcast&quot;,
            &quot;cap_net_admin&quot;,
            &quot;cap_net_raw&quot;,
            &quot;cap_ipc_lock&quot;,
            &quot;cap_ipc_owner&quot;,
            &quot;cap_sys_module&quot;,
            &quot;cap_sys_rawio&quot;,
            &quot;cap_sys_chroot&quot;,
            &quot;cap_sys_ptrace&quot;,
            &quot;cap_sys_pacct&quot;,
            &quot;cap_sys_admin&quot;,
            &quot;cap_sys_boot&quot;,
            &quot;cap_sys_nice&quot;,
            &quot;cap_sys_resource&quot;,
            &quot;cap_sys_time&quot;,
            &quot;cap_sys_tty_config&quot;,
            &quot;cap_mknod&quot;,
            &quot;cap_lease&quot;,
            &quot;cap_audit_write&quot;,
            &quot;cap_audit_control&quot;,
            &quot;cap_setfcap&quot;,
            &quot;cap_mac_override&quot;,
            &quot;cap_mac_admin&quot;,
            &quot;cap_syslog&quot;,
            &quot;35&quot;,
            &quot;36+ep&quot;
        ],
        &quot;ansible_system_capabilities_enforced&quot;: &quot;True&quot;,
        &quot;ansible_system_vendor&quot;: &quot;Huayun&quot;,
        &quot;ansible_uptime_seconds&quot;: 571792,
        &quot;ansible_user_dir&quot;: &quot;/root&quot;,
        &quot;ansible_user_gecos&quot;: &quot;root&quot;,
        &quot;ansible_user_gid&quot;: 0,
        &quot;ansible_user_id&quot;: &quot;root&quot;,
        &quot;ansible_user_shell&quot;: &quot;/bin/bash&quot;,
        &quot;ansible_user_uid&quot;: 0,
        &quot;ansible_userspace_architecture&quot;: &quot;x86_64&quot;,
        &quot;ansible_userspace_bits&quot;: &quot;64&quot;,
        &quot;ansible_virtualization_role&quot;: &quot;guest&quot;,
        &quot;ansible_virtualization_type&quot;: &quot;kvm&quot;,
        &quot;gather_subset&quot;: [
            &quot;all&quot;
        ],
        &quot;module_setup&quot;: true
    },
    &quot;changed&quot;: false
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br><span class="line-number">551</span><br><span class="line-number">552</span><br><span class="line-number">553</span><br><span class="line-number">554</span><br><span class="line-number">555</span><br><span class="line-number">556</span><br><span class="line-number">557</span><br><span class="line-number">558</span><br><span class="line-number">559</span><br><span class="line-number">560</span><br><span class="line-number">561</span><br><span class="line-number">562</span><br><span class="line-number">563</span><br><span class="line-number">564</span><br><span class="line-number">565</span><br><span class="line-number">566</span><br><span class="line-number">567</span><br><span class="line-number">568</span><br><span class="line-number">569</span><br><span class="line-number">570</span><br><span class="line-number">571</span><br><span class="line-number">572</span><br><span class="line-number">573</span><br><span class="line-number">574</span><br><span class="line-number">575</span><br><span class="line-number">576</span><br><span class="line-number">577</span><br><span class="line-number">578</span><br><span class="line-number">579</span><br><span class="line-number">580</span><br><span class="line-number">581</span><br><span class="line-number">582</span><br><span class="line-number">583</span><br><span class="line-number">584</span><br><span class="line-number">585</span><br><span class="line-number">586</span><br><span class="line-number">587</span><br><span class="line-number">588</span><br><span class="line-number">589</span><br><span class="line-number">590</span><br><span class="line-number">591</span><br><span class="line-number">592</span><br><span class="line-number">593</span><br><span class="line-number">594</span><br><span class="line-number">595</span><br><span class="line-number">596</span><br><span class="line-number">597</span><br><span class="line-number">598</span><br><span class="line-number">599</span><br><span class="line-number">600</span><br><span class="line-number">601</span><br><span class="line-number">602</span><br><span class="line-number">603</span><br><span class="line-number">604</span><br><span class="line-number">605</span><br><span class="line-number">606</span><br><span class="line-number">607</span><br><span class="line-number">608</span><br><span class="line-number">609</span><br><span class="line-number">610</span><br><span class="line-number">611</span><br><span class="line-number">612</span><br><span class="line-number">613</span><br><span class="line-number">614</span><br><span class="line-number">615</span><br><span class="line-number">616</span><br><span class="line-number">617</span><br><span class="line-number">618</span><br><span class="line-number">619</span><br><span class="line-number">620</span><br><span class="line-number">621</span><br></div></div><p>\u6536\u96C6\u5230\u7684\u4FE1\u606F\u91CF\u975E\u5E38\u5927\uFF0C\u4F46\u5F88\u5E78\u8FD0\uFF0C\u53EA\u9700\u5173\u6CE8\u5176\u4E2D\u5E38\u89C1\u7684\u51E0\u9879\u5373\u53EF\uFF0C\u6BD4\u5982\u7CFB\u7EDF\u7248\u672C\u53F7\u3001\u4E3B\u673A\u540D\u3001IP\u5730\u5740\u3001\u5206\u533A\u4FE1\u606F\u3001\u6302\u8F7D\u4FE1\u606F\u3002</p><p>\u6709\u4E86\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u53BB\u8BBF\u95EE\u8FD9\u4E9B\u4FE1\u606F\u3002\u7531\u4E8E\u5B83\u4EEC\u90FD\u5B58\u653E\u5728ansible_facts\u53D8\u91CF\u4E2D\uFF0C\u6240\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u53D8\u91CF\u53BB\u8BBF\u95EE\u5373\u53EF\u3002\u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5BF9\u4E8E\u6536\u96C6\u5230\u7684\u7EDD\u5927\u591A\u6570Facts\u4FE1\u606F\uFF0C\u90FD\u6709\u4E24\u79CD\u8BBF\u95EE\u65B9\u5F0F\uFF1A</p><p>(1).\u4E00\u79CD\u662Fdebug\u67E5\u770Bansible_facts\u53D8\u91CF\u5F97\u5230\u7684\u7ED3\u679C\uFF0C\u8FD9\u4E5F\u662F\u771F\u6B63\u5B58\u50A8\u8FD9\u4E9B\u4FE1\u606F\u7684\u65B9\u5F0F</p><p>(2).\u4E00\u79CD\u662F\u547D\u4EE4\u884C\u6267\u884Csetup\u6A21\u5757\u8F93\u51FA\u7684\u65B9\u5F0F</p><p>\u76F4\u63A5\u4F7F\u7528debug\u6A21\u5757\u53BB\u8F93\u51FAansible_facts\u53D8\u91CF\uFF0C\u5373\u53EF\u77E5\u5982\u4F55\u8BBF\u95EE\u8FD9\u4E9B\u4FE1\u606F\u3002\u4F8B\u5982\uFF1A</p><p>\u8981\u83B7\u53D6eth0\u7684ipv4\u5730\u5740\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>debug:
  var: ansible_facts.eth0.ipv4.address
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u518D\u770B\u5728ansible\u547D\u4EE4\u884C\u4E2D\u6267\u884Csetup\u6A21\u5757\u7684\u8F93\u51FA\u4FE1\u606F\uFF0C\u4F1A\u53D1\u73B0\u539F\u672Cansible_facts\u5185\u51E0\u4E4E\u6240\u6709\u9876\u7EA7\u7684key\u73B0\u5728\u90FD\u4EE5ansible_\u5F00\u5934\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>debug:
  var: ansible_all_ipv4_addresses
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E4B\u6240\u4EE5\u53EF\u4EE5\u8FD9\u6837\u76F4\u63A5\u8BBF\u95EE\uFF0C\u662F\u56E0\u4E3AAnsible\u5C06Facts\u4E2D\u7EDD\u5927\u591A\u6570\u7684\u9876\u7EA7key\u90FD\u6CE8\u5165\u5230\u4E86Ansible\u81EA\u8EAB\u7EF4\u62A4\u7684\u53D8\u91CF\u8868(\u5373hostvars)\u4E2D\uFF0C\u8FD9\u6837\u8BBF\u95EE\u5B83\u4EEC\u5C31\u65B9\u4FBF\u7684\u591A\u3002</p><p>\u81F3\u4E8E\u91C7\u7528\u4F55\u79CD\u65B9\u5F0F\u8BBF\u95EE\uFF0C\u8FD9\u65E0\u6240\u8C13\uFF0C\u4F46\u662F\u8981\u77E5\u9053\u7684\u662F\uFF0C\u867D\u7136\u7EDD\u5927\u591A\u6570Facts\u4FE1\u606F\u90FD\u5355\u72EC\u5B9A\u4E49\u4E86\u53D8\u91CF\uFF0C\u4F46\u5E76\u975E\u6240\u6709(\u4E3B\u8981\u662F\u90A3\u4E9B\u53EF\u80FD\u4EA7\u751F\u6B67\u4E49\u6216\u51B2\u7A81\u7684\u53D8\u91CF)\u3002</p><p>\u53E6\u5916\u518D\u591A\u63D0\u9192\u4E00\u53E5\uFF0Cansible_facts\u81EA\u8EAB\u4E5F\u662F\u53D8\u91CF\uFF0C\u5B83\u4E5F\u4FDD\u5B58\u5728\u5404\u81EA\u8282\u70B9\u7684hostvars\u53D8\u91CF\u4E2D\uFF0C\u6240\u4EE5\u4E5F\u53EF\u4EE5\u901A\u8FC7hostvars\u53BB\u8BBF\u95EEFacts\u4FE1\u606F\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>debug:
  var: hostvars[&#39;logstash2&#39;][&#39;ansible_facts&#39;].eth0.ipv4.address
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5728\u8FD0\u884Cplay\u7684\u65F6\u5019\uFF0Cansible\u4F1A\u5148\u5C1D\u8BD5ssh\u5230\u88AB\u63A7\u7AEF\u91C7\u96C6fact\uFF0C\u5982\u679C\u6B64\u65F6\uFF0C\u88AB\u63A7\u5236\u7AEF\u7684ssh\u8FD8\u6CA1\u6709\u5B8C\u5168\u542F\u52A8\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6574\u4E2Aplay\u6267\u884C\u5931\u8D25\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5148\u663E\u793A\u7684\u5173\u95EDfact\u91C7\u96C6\uFF0C\u7136\u540E\u5728task\u4E2D\u901A\u8FC7wait_for\u7B49\u5F85\u88AB\u63A7\u7AEFssh\u7AEF\u53E3\u88AB\u6B63\u5E38\u76D1\u542C\uFF0C\u518D\u5728task\u4E2D\u4F7F\u7528setup\u6A21\u5757\u6765\u624B\u52A8\u91C7\u96C6fact\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: Deploy apps
  hosts: webservers
  gather_facts: false
  tasks\uFF1A
    - name: wait for ssh to be running
      local_action: wait_for port=22 host=&quot;{{ inventory_hostname }}&quot; search_regex=OpenSSH
    - name: gather facts
      setup:
    ......
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-\u542F\u7528fact\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u7528fact\u7F13\u5B58" aria-hidden="true">#</a> 4 \u542F\u7528fact\u7F13\u5B58</h2><p>\u5982\u679C\u5728play\u4E2D\u9700\u8981\u5F15\u5165fact\uFF0C\u5219\u53EF\u4EE5\u5F00\u542Ffact\u7F13\u5B58\u3002fact\u7F13\u5B58\u76EE\u524D\u652F\u6301\u4E09\u79CD\u5B58\u50A8\u65B9\u5F0F\uFF0C\u5206\u522B\u4E3AJSON\u3001memcached\u3001redis\u3002</p><p>redis\uFF1A\u7F13\u5B58\u5728redis\u670D\u52A1\u4E2D\uFF0C\u76F4\u5230\u76EE\u524D(Ansible 2.9)\u4E3A\u6B62\uFF0CAnsible\u8FD8\u4E0D\u652F\u6301\u6307\u5B9A\u8FDE\u63A5redis\u7684\u7AEF\u53E3\u3001\u5BC6\u7801\u7B49</p><p>1.gathering\uFF1A\u63A7\u5236Ansible\u662F\u5426\u81EA\u52A8\u6536\u96C6Facts\uFF0C\u5B83\u6709\u4E09\u79CD\u503C\uFF1A</p><p>(1).implicit\uFF1A\u8FD9\u662F\u9ED8\u8BA4\u503C\uFF0C\u8868\u793A\u6267\u884Cplay\u65F6\u4F1A\u81EA\u52A8\u6536\u96C6Facts\uFF0C\u9664\u975E\u663E\u5F0F\u6307\u5B9Agather_facts: false\u7981\u6B62\u6536\u96C6</p><p>(2).explicit\uFF1A\u4E0D\u81EA\u52A8\u6536\u96C6Facts\uFF0C\u9664\u975E\u663E\u5F0F\u6307\u5B9Agather_facts: true\u5F00\u542F\u6536\u96C6</p><p>(3).smart\uFF1A\u81EA\u52A8\u6536\u96C6Facts\uFF0C\u4F46\u5982\u679C\u5DF2\u5B58\u5728(\u7F13\u5B58)\u5219\u4E0D\u91CD\u590D\u6536\u96C6</p><h3 id="_4-1-json\u6587\u4EF6fact\u7F13\u5B58\u540E\u7AEF" tabindex="-1"><a class="header-anchor" href="#_4-1-json\u6587\u4EF6fact\u7F13\u5B58\u540E\u7AEF" aria-hidden="true">#</a> 4.1 Json\u6587\u4EF6fact\u7F13\u5B58\u540E\u7AEF</h3><p>\u4F7F\u7528JSON\u6587\u4EF6\u4F5C\u4E3Afact\u7F13\u5B58\u540E\u7AEF\u7684\u65F6\u5019\uFF0Cansible\u5C06\u4F1A\u628A\u91C7\u96C6\u7684fact\u5199\u5165\u5230\u63A7\u5236\u4E3B\u673A\u7684\u6587\u4EF6\u4E2D\u3002</p><p>ansible.cfg\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[defaults]
gathering = smart
#\u7F13\u5B58\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2
fact_caching_timeout = 86400    
fact_caching = jsonfile
#\u6307\u5B9Aansible\u5305\u542Bfact\u7684json\u6587\u4EF6\u4F4D\u7F6E\uFF0C\u5982\u679C\u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u4F1A\u81EA\u52A8\u521B\u5EFA
fact_caching_connection = /tmp/ansible_fact_cache    
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_4-2-redis-fact\u7F13\u5B58\u540E\u7AEF" tabindex="-1"><a class="header-anchor" href="#_4-2-redis-fact\u7F13\u5B58\u540E\u7AEF" aria-hidden="true">#</a> 4.2 Redis fact\u7F13\u5B58\u540E\u7AEF</h3><p>\u4F7F\u7528redis\u4F5C\u4E3Afact\u7F13\u5B58\u540E\u7AEF\uFF0C\u9700\u8981\u5728\u63A7\u5236\u4E3B\u673A\u4E0A\u5B89\u88C5redis\u670D\u52A1\u5E76\u4FDD\u6301\u8FD0\u884C\u3002\u9700\u8981\u5B89\u88C5python\u64CD\u4F5Credis\u7684\u8F6F\u4EF6\u5305\u3002</p><p>ansible.cfg\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[defaults]
gathering = smart
fact_caching_timeout = 86400 
fact_caching = redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-3-memcached-fact\u7F13\u5B58\u540E\u7AEF" tabindex="-1"><a class="header-anchor" href="#_4-3-memcached-fact\u7F13\u5B58\u540E\u7AEF" aria-hidden="true">#</a> 4.3 Memcached fact\u7F13\u5B58\u540E\u7AEF</h3><p>\u4F7F\u7528memcached\u4F5C\u4E3Afact\u7F13\u5B58\u540E\u7AEF\uFF0C\u9700\u8981\u5728\u63A7\u5236\u4E3B\u673A\u4E0A\u5B89\u88C5Memcached\u670D\u52A1\u5E76\u4FDD\u6301\u8FD0\u884C\uFF0C\u9700\u8981\u5B89\u88C5python\u64CD\u4F5Cmemcached\u7684\u8F6F\u4EF6\u5305\u3002</p><p>ansible.cfg\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[defaults]
gathering = smart
fact_caching_timeout = 86400 
fact_caching = memcached
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_5-\u5173\u95EDfact" tabindex="-1"><a class="header-anchor" href="#_5-\u5173\u95EDfact" aria-hidden="true">#</a> 5 \u5173\u95EDfact</h2><p>\u5982\u679C\u4E0D\u60F3\u4ECEfact\u4E2D\u83B7\u53D6\u53D8\u91CF\uFF0C\u6216\u8005\u8BF4\u6574\u4E2Aplaybook\u5F53\u4E2D\u90FD\u6CA1\u6709\u4F7F\u7528\u5230fact\u53D8\u91CF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u6CD5\u5173\u95EDfact\u4EE5\u63D0\u5347\u6267\u884C\u6548\u7387\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  gather_facts: false
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u5728ansible.cfg\u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[defaults]
gathering = explicit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6-\u59D4\u6258facts" tabindex="-1"><a class="header-anchor" href="#_6-\u59D4\u6258facts" aria-hidden="true">#</a> 6 \u59D4\u6258Facts</h2><p>\u7565\uFF1A\u6211\u6682\u65F6\u8FD8\u6CA1\u6709\u7528\u5230</p>`,79);function u(t,o){return e}var r=n(a,[["render",u],["__file","fact.html.vue"]]);export{r as default};
