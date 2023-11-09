import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a}from"./app-92a149ab.js";const i={},t=a(`<h1 id="_5-3-魔法变量" tabindex="-1"><a class="header-anchor" href="#_5-3-魔法变量" aria-hidden="true">#</a> 5.3 魔法变量</h1><p><strong>魔法变量</strong></p><p>Ansible默认会提供一些内置的变量以实现一些特定的功能，我们称之为魔法变量。下面列举一些常用的魔法变量。</p><p>https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html#magic</p><h2 id="_1-hostvars" tabindex="-1"><a class="header-anchor" href="#_1-hostvars" aria-hidden="true">#</a> 1. hostvars</h2><p>hostvars变量用于保存所有和主机相关的变量，通常包括inventory中定义的主机变量和gather_facts收集到的主机信息变量。hostvars是一个key/value格式的字典(即hash结构、对象)，key是每个节点的主机名，value是该主机对应的变量数据。</p><p>获取某台指定的主机的相关变量。如果有一台web服务器的配置文件中需要指定db服务器的ip地址，我们假定这台db服务器的hostname为db.exmaple.com,ip地址绑定在eth0网卡上，我们可以通过如下方法在web服务器上调用db服务器的ip地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ hostvars[&#39;db.example.com&#39;].ansible_eth0.ipv4.address }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>需要注意的是db.example.com不能使用ip地址来取代，只能使用主机名或别名。</p></blockquote><h2 id="_2-inventory-hostname" tabindex="-1"><a class="header-anchor" href="#_2-inventory-hostname" aria-hidden="true">#</a> 2. inventory_hostname</h2><p>inventory_hostname是Ansible所识别的当前正在运行task的主机的主机名。如果在inventory里定义过别名，那么这里就是那个别名，如果inventory包含如下一行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server1 ansible_ssh_host=192.168.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>则<code>inventory_hostname</code>即为<code>server1</code> 利用<code>hostvars</code>和<code>inventory_hostname</code>变量，可以输出与当前主机相关联的所有变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- debug: var=hostvars[inventory_hostname]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>与inventory_hostname相近的还有一个inventory_hostname_short，如果一台主机的inventory_hostname为server1.exmaple.com，则inventory_hostname_short的值为server1</p></blockquote><h2 id="_3-group-names" tabindex="-1"><a class="header-anchor" href="#_3-group-names" aria-hidden="true">#</a> 3. group_names</h2><p>用于标识当前正在执行task的目标主机位于的主机组。假如我们有三台主机，用来配置成一主二从的mysql服务器。inventory配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mdb]
db1
[sdb]
db2
db3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql配置文件my.conf.j2示例如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#我们知道db1在mdb组，当db1与当前正在执行任务的主机位于同一组时，我们认为当前主机即在mdb组，所以对当前主机应用mysql master的配置</span>
<span class="token punctuation">{</span>% if &#39;db1&#39; in group_names %<span class="token punctuation">}</span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
server<span class="token punctuation">-</span>id=1
log<span class="token punctuation">-</span>bin=mysql<span class="token punctuation">-</span>bin
log<span class="token punctuation">-</span>bin<span class="token punctuation">-</span>index=mysql<span class="token punctuation">-</span>bin.index
sync<span class="token punctuation">-</span>binlog=1
innodb_flush_log_at_trx_commit=1
<span class="token comment">#当db1与当前主机不在同一组时，则认为当前主机不在mdb组，即应用my slave的配置</span>
<span class="token punctuation">{</span>% else %<span class="token punctuation">}</span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
server<span class="token punctuation">-</span>id=2
relay<span class="token punctuation">-</span>log=relay<span class="token punctuation">-</span>log
relay<span class="token punctuation">-</span>log<span class="token punctuation">-</span>index=relay<span class="token punctuation">-</span>log.index
read<span class="token punctuation">-</span>only = yes
sync_master_info = 1
sync_relay_log = 1
sync_relay_log_info = 1
relay_log_recovery = 1
skip_slave_start    
<span class="token punctuation">{</span>% endif %<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们执行如下task:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: copy config file to mysql master
  template: src=my.conf.j2 dest=/etc/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-groups" tabindex="-1"><a class="header-anchor" href="#_4-groups" aria-hidden="true">#</a> 4. groups</h2><p>groups是inventory中所有主机组的列表，可用于枚举主机组中的所有主机。</p><p>假如我们有一个inventory文件定义如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[web]
server1
server2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置一台HAproxy的负载均衡器时，我们的配置文件肯定需要web主机组的所有服务器的IP，配置文件包含如下片段：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>backend web-backend
{% for host in groups.web%}
    server {{host.inventory_hostname}} {{ host.ansible_default_ipv4.address }}:80
{% endfor %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终生成的文件如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>backend web-backend
    server server1 192.168.1.1:80
    server server2 192.168.1.2:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再给一个例子，在所有的dbservers组的服务器上创建一个数据库用户kate：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: Create a user for all db servers
  mysql_user: name=kate password=test host={{ hostvars.[item].ansible_eth0.ipv4.address }} state=present
  with_items: groups[&#39;dbservers&#39;] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-ansible-play-batch" tabindex="-1"><a class="header-anchor" href="#_5-ansible-play-batch" aria-hidden="true">#</a> 5. ansible_play_batch</h2><p>play_hosts 已废弃，等价于ansible_play_batch</p><p>ansible_play_hosts等价于ansible_play_batch</p><p>它存储当前play所涉及的所有主机列表，但连接失败或执行任务失败的节点不会留在此变量中。</p><h2 id="_6-inventory-dir" tabindex="-1"><a class="header-anchor" href="#_6-inventory-dir" aria-hidden="true">#</a> 6. inventory_dir</h2><p>主机清单所在目录</p><h2 id="_7-inventory-file" tabindex="-1"><a class="header-anchor" href="#_7-inventory-file" aria-hidden="true">#</a> 7. inventory_file</h2><p>主机清单文件</p><blockquote><p>参考链接：</p><p>https://www.cnblogs.com/breezey/p/9275763.html</p><p>https://blog.51cto.com/cloumn/blog/1544</p></blockquote>`,41),d=[t];function l(r,o){return n(),s("div",null,d)}const v=e(i,[["render",l],["__file","magic.html.vue"]]);export{v as default};
