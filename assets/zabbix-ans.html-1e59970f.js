import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-d870e103.js";const i={},l=e(`<h1 id="_2-zabbix借助ansible安装" tabindex="-1"><a class="header-anchor" href="#_2-zabbix借助ansible安装" aria-hidden="true">#</a> 2 zabbix借助ansible安装</h1><h2 id="zabbix-server安装" tabindex="-1"><a class="header-anchor" href="#zabbix-server安装" aria-hidden="true">#</a> zabbix-server安装</h2><ol><li>下载roles</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-galaxy <span class="token function">install</span> dj-wasabi.zabbix-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>编写playbook</li></ol><p><code>vim new-zabbix-server.yml</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>---
- hosts: zabbix-server
  become: <span class="token function">yes</span>
  vars:
    <span class="token comment"># mysql</span>
    <span class="token comment"># host memory is 16G</span>
    mysql_thread_cache_size: <span class="token string">&quot;64&quot;</span>
    mysql_query_cache_size: <span class="token string">&quot;128M&quot;</span>
    mysql_innodb_buffer_pool_size: <span class="token string">&quot;4096M&quot;</span>
    mysql_tmp_table_size: <span class="token string">&quot;128M&quot;</span>
    mysql_table_open_cache: <span class="token string">&quot;2048&quot;</span>
    <span class="token comment"># zabbix-server</span>
    zabbix_version: <span class="token number">4.4</span>
    zabbix_repo_yum:
      - name: zabbix
        description: Zabbix Official Repository - <span class="token variable">$basearch</span>
        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/<span class="token punctuation">{</span><span class="token punctuation">{</span> zabbix_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/rhel/<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_distribution_major_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token variable">$basearch</span>/
        gpgcheck: <span class="token number">0</span>
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
      - name: zabbix-supported
        description: Zabbix Official Repository non-supported - <span class="token variable">$basearch</span>
        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_distribution_major_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token variable">$basearch</span>/
        gpgcheck: <span class="token number">0</span>
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
    zabbix_server_startpollers: <span class="token number">12</span>
    zabbix_server_startpollersunreachable: <span class="token number">5</span>
    zabbix_server_starttrappers: <span class="token number">30</span>
    zabbix_server_startdiscoverers: <span class="token number">10</span>
    zabbix_server_housekeepingfrequency: <span class="token number">12</span>
    zabbix_server_maxhousekeeperdelete: <span class="token number">100000</span>
    zabbix_server_cachesize: 4096M
    zabbix_server_startdbsyncers: <span class="token number">20</span>
    zabbix_server_historyindexcachesize: 512M
    zabbix_server_trendcachesize: 256M
    zabbix_server_historytextcachesize: 80M
    zabbix_server_valuecachesize: 4096M
    zabbix_server_timeout: <span class="token number">30</span>
    zabbix_server_database: mysql
    zabbix_server_database_long: mysql 
    <span class="token comment"># zabbi-web</span>
    zabbix_url: <span class="token number">192.168</span>.165.231
    zabbix_timezone: Asia/Shanghai
  roles:
    - role: geerlingguy.mysql
    - role: geerlingguy.apache
    - role: dj-wasabi.zabbix-server
    - role: dj-wasabi.zabbix-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>安装zabbix-server</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook <span class="token parameter variable">-i</span> inventory/zabbix.yml new-zabbix-server.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li><p>优化</p><p>优化磁盘，去除atime</p></li><li><p>注意事项</p><p>zabbix-web，筛选历史问题时，记得选择时间范围</p></li></ol><h2 id="zabbix-proxy安装" tabindex="-1"><a class="header-anchor" href="#zabbix-proxy安装" aria-hidden="true">#</a> zabbix-proxy安装</h2><ol><li>下载roles</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-galaxy <span class="token function">install</span> dj-wasabi.zabbix-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>编写playbook</li></ol><p><code>vim new-zabbix-proxy.yml</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>---
- hosts: zabbix-proxy
  become: <span class="token function">yes</span>
  vars:
    <span class="token comment"># mysql</span>
    <span class="token comment"># host memory is 8G</span>
    mysql_thread_cache_size: <span class="token string">&quot;64&quot;</span>
    mysql_query_cache_size: <span class="token string">&quot;128M&quot;</span>
    mysql_innodb_buffer_pool_size: <span class="token string">&quot;2048M&quot;</span>
    mysql_tmp_table_size: <span class="token string">&quot;64M&quot;</span>
    mysql_table_open_cache: <span class="token string">&quot;1024&quot;</span>

    <span class="token comment"># zabbix-proxy</span>
    zabbix_server_host: <span class="token number">192.168</span>.165.231 
    zabbix_version: <span class="token number">4.4</span>
    zabbix_repo_yum:
      - name: zabbix
        description: Zabbix Official Repository - <span class="token variable">$basearch</span>
        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/<span class="token punctuation">{</span><span class="token punctuation">{</span> zabbix_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/rhel/<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_distribution_major_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token variable">$basearch</span>/
        gpgcheck: <span class="token number">0</span>
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
      - name: zabbix-supported
        description: Zabbix Official Repository non-supported - <span class="token variable">$basearch</span>
        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_distribution_major_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token variable">$basearch</span>/
        gpgcheck: <span class="token number">0</span>
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
    zabbix_proxy_cachesize: <span class="token number">2048</span>
    zabbix_proxy_startpollers: <span class="token number">12</span>
    zabbix_proxy_housekeepingfrequency: <span class="token number">12</span>

  roles:
    - role: geerlingguy.mysql
    - role: dj-wasabi.zabbix-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>安装zabbix-proxy</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook <span class="token parameter variable">-i</span> inventory/zabbix.yml new-zabbix-proxy.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li><p>将zabbix-proxy添加到zabbix-server中</p><ol><li><p>) 进入zabbix的web页面，点击Administrator--&gt;Proxies--&gt;Create proxy；</p></li><li><p>) 填写Proxy name为主机名称，Proxy mode为Active，然后Add。</p><blockquote><p>过几十秒，看看proxy是否添加成功，查看proxy和server日志，如无成功，将proxy和server端重启一下；</p><p>proxy name一定要和配置文件中<code>/etc/zabbix/zabbix_proxy.conf</code>的<code>Hostname</code>一致。</p></blockquote></li></ol></li></ol><h2 id="zabbix-agent安装" tabindex="-1"><a class="header-anchor" href="#zabbix-agent安装" aria-hidden="true">#</a> zabbix-agent安装</h2><ol><li>下载roles</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-galaxy <span class="token function">install</span> dj-wasabi.zabbix-agent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>编写playbook</li></ol><p><code>vim new-zabbix-agent.yml</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>---
- hosts: zabbix-server
  vars:
    zabbix_version: <span class="token number">4.4</span>
    zabbix_repo_yum:
      - name: zabbix
        description: Zabbix Official Repository - <span class="token variable">$basearch</span>
        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/<span class="token punctuation">{</span><span class="token punctuation">{</span> zabbix_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/rhel/<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_distribution_major_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token variable">$basearch</span>/
        gpgcheck: <span class="token number">0</span>
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
      - name: zabbix-supported
        description: Zabbix Official Repository non-supported - <span class="token variable">$basearch</span>
        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_distribution_major_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token variable">$basearch</span>/
        gpgcheck: <span class="token number">0</span>
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
    zabbix_agent_server: <span class="token number">192.168</span>.165.231
    zabbix_agent_serveractive: <span class="token number">192.168</span>.165.231
    zabbix_url: http://192.168.165.231
    zabbix_api_use: <span class="token boolean">true</span>
    zabbix_api_create_hostgroup: <span class="token boolean">true</span>
    zabbix_api_create_hosts: <span class="token boolean">true</span>
    zabbix_api_user: Admin
    zabbix_api_pass: zabbix
    zabbix_create_host: present
    zabbix_host_groups:
      - Zabbix servers
    zabbix_link_templates:
      - Template OS Linux by Zabbix agent active
      - Template App Zabbix Server
  roles:
    - role: dj-wasabi.zabbix-agent

- hosts: hy-bes
  vars:
    zabbix_version: <span class="token number">4.4</span>
    zabbix_repo_yum:
      - name: zabbix
        description: Zabbix Official Repository - <span class="token variable">$basearch</span>
        baseurl: http://mirrors.aliyun.com/zabbix/zabbix/<span class="token punctuation">{</span><span class="token punctuation">{</span> zabbix_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/rhel/<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_distribution_major_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token variable">$basearch</span>/
        gpgcheck: <span class="token number">0</span>
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
      - name: zabbix-supported
        description: Zabbix Official Repository non-supported - <span class="token variable">$basearch</span>
        baseurl: https://mirrors.aliyun.com/zabbix/non-supported/rhel/<span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_distribution_major_version <span class="token punctuation">}</span><span class="token punctuation">}</span>/<span class="token variable">$basearch</span>/
        gpgcheck: <span class="token number">0</span>
        gpgkey: file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX
        state: present
    zabbix_agent_server: <span class="token number">192.168</span>.16.235,192.168.165.232
    zabbix_agent_serveractive: <span class="token number">192.168</span>.16.235,192.168.165.232
    zabbix_proxy: bes.zabbixproxy
    zabbix_url: http://192.168.165.231
    zabbix_api_use: <span class="token boolean">true</span>
    zabbix_api_create_hostgroup: <span class="token boolean">true</span>
    zabbix_api_create_hosts: <span class="token boolean">true</span>
    zabbix_api_user: Admin
    zabbix_api_pass: zabbix
    zabbix_create_host: present
    zabbix_host_groups:
      - hy-bes
    zabbix_link_templates:
      - Template OS Linux by Zabbix agent active
  roles:
    - role: dj-wasabi.zabbix-agent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>修改roles，添加tags</p><p>由于添加监控的主机数以千计，所以必须ansible执行playbook时，必须跳过不必要的判断，这样能大大减少playbook的执行时间，提高执行效率。</p></li></ol><ul><li><p>修改<code>/dj-wasabi.zabbix-agent/tasks/main.yml</code>，给每个操作系统添加tags，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: &quot;Install the correct repository&quot;
  include: &quot;Debian.yml&quot;
  when:
    - zabbix_agent_os_family == &quot;Debian&quot;
    - not (zabbix_agent_docker | bool)
  tags:
    - zabbix-agent
    - init
    - config
    - service
    - debian
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>最后的debian是新增的。</p></blockquote></li><li><p>修改<code>dj-wasabi.zabbix-agent/tasks/Linux.yml</code>，给DOcker增加tags，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: &quot;Install the Docker container&quot;
  include: Docker.yml
  when:
    - zabbix_agent_docker | bool
  tags:
    - docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>最后两行是新增的。</p></blockquote></li></ul><ol start="4"><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> ansible-playbook <span class="token parameter variable">-i</span> inventory/zabbix.yml new-zabbix-agent.yml <span class="token parameter variable">-l</span> <span class="token number">192.168</span>.163.150 --skip-tags <span class="token string">&quot;sangoma,debian,suse,windows,docker&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>每次新增zabbix-agent，最后安装完成，重启一下zabbix-proxy，这样proxy会尽快发现agent节点</p></blockquote><ol start="5"><li><p>监控模块</p><p>我们采用的是zabbix主动式的监控方式，zabbix-agent主动推送数据给proxy或server，以减少server端压力。</p><p>我发现在新的zabbix监控中，还可以检查时间有没有同步。</p><p>而且还有磁盘IO的监控，就问你们棒不棒！！！</p><p>很棒！</p><blockquote><p>4.4中新的主动式模板中，需要将监控项system.localtime 变为enabled，否则主机的可用性为unknown</p></blockquote><p>主动式的缺点，主机宕机，知道的时间不及时，好像是30分钟。</p></li></ol>`,31),r=[l];function b(t,c){return s(),a("div",null,r)}const p=n(i,[["render",b],["__file","zabbix-ans.html.vue"]]);export{p as default};
