import{_ as n,e as s}from"./app.4803ddbb.js";const a={},e=s(`<h1 id="_2-zabbix\u501F\u52A9ansible\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-zabbix\u501F\u52A9ansible\u5B89\u88C5" aria-hidden="true">#</a> 2 zabbix\u501F\u52A9ansible\u5B89\u88C5</h1><h2 id="zabbix-server\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#zabbix-server\u5B89\u88C5" aria-hidden="true">#</a> zabbix-server\u5B89\u88C5</h2><ol><li>\u4E0B\u8F7Droles</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ansible-galaxy <span class="token function">install</span> dj-wasabi.zabbix-server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u7F16\u5199playbook</li></ol><p><code>vim new-zabbix-server.yml</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>---
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><ol start="3"><li>\u5B89\u88C5zabbix-server</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ansible-playbook -i inventory/zabbix.yml new-zabbix-server.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li><p>\u4F18\u5316</p><p>\u4F18\u5316\u78C1\u76D8\uFF0C\u53BB\u9664atime</p></li><li><p>\u6CE8\u610F\u4E8B\u9879</p><p>zabbix-web\uFF0C\u7B5B\u9009\u5386\u53F2\u95EE\u9898\u65F6\uFF0C\u8BB0\u5F97\u9009\u62E9\u65F6\u95F4\u8303\u56F4</p></li></ol><h2 id="zabbix-proxy\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#zabbix-proxy\u5B89\u88C5" aria-hidden="true">#</a> zabbix-proxy\u5B89\u88C5</h2><ol><li>\u4E0B\u8F7Droles</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ansible-galaxy <span class="token function">install</span> dj-wasabi.zabbix-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u7F16\u5199playbook</li></ol><p><code>vim new-zabbix-proxy.yml</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>---
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><ol start="3"><li>\u5B89\u88C5zabbix-proxy</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ansible-playbook -i inventory/zabbix.yml new-zabbix-proxy.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li><p>\u5C06zabbix-proxy\u6DFB\u52A0\u5230zabbix-server\u4E2D</p><ol><li><p>) \u8FDB\u5165zabbix\u7684web\u9875\u9762\uFF0C\u70B9\u51FBAdministrator--&gt;Proxies--&gt;Create proxy\uFF1B</p></li><li><p>) \u586B\u5199Proxy name\u4E3A\u4E3B\u673A\u540D\u79F0\uFF0CProxy mode\u4E3AActive\uFF0C\u7136\u540EAdd\u3002</p><blockquote><p>\u8FC7\u51E0\u5341\u79D2\uFF0C\u770B\u770Bproxy\u662F\u5426\u6DFB\u52A0\u6210\u529F\uFF0C\u67E5\u770Bproxy\u548Cserver\u65E5\u5FD7\uFF0C\u5982\u65E0\u6210\u529F\uFF0C\u5C06proxy\u548Cserver\u7AEF\u91CD\u542F\u4E00\u4E0B\uFF1B</p><p>proxy name\u4E00\u5B9A\u8981\u548C\u914D\u7F6E\u6587\u4EF6\u4E2D<code>/etc/zabbix/zabbix_proxy.conf</code>\u7684<code>Hostname</code>\u4E00\u81F4\u3002</p></blockquote></li></ol></li></ol><h2 id="zabbix-agent\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#zabbix-agent\u5B89\u88C5" aria-hidden="true">#</a> zabbix-agent\u5B89\u88C5</h2><ol><li>\u4E0B\u8F7Droles</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ansible-galaxy <span class="token function">install</span> dj-wasabi.zabbix-agent
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u7F16\u5199playbook</li></ol><p><code>vim new-zabbix-agent.yml</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>---
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><ol start="3"><li><p>\u4FEE\u6539roles\uFF0C\u6DFB\u52A0tags</p><p>\u7531\u4E8E\u6DFB\u52A0\u76D1\u63A7\u7684\u4E3B\u673A\u6570\u4EE5\u5343\u8BA1\uFF0C\u6240\u4EE5\u5FC5\u987Bansible\u6267\u884Cplaybook\u65F6\uFF0C\u5FC5\u987B\u8DF3\u8FC7\u4E0D\u5FC5\u8981\u7684\u5224\u65AD\uFF0C\u8FD9\u6837\u80FD\u5927\u5927\u51CF\u5C11playbook\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u63D0\u9AD8\u6267\u884C\u6548\u7387\u3002</p></li></ol><ul><li><p>\u4FEE\u6539<code>/dj-wasabi.zabbix-agent/tasks/main.yml</code>\uFF0C\u7ED9\u6BCF\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u6DFB\u52A0tags\uFF0C\u4F8B\u5982</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: &quot;Install the correct repository&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>\u6700\u540E\u7684debian\u662F\u65B0\u589E\u7684\u3002</p></blockquote></li><li><p>\u4FEE\u6539<code>dj-wasabi.zabbix-agent/tasks/Linux.yml</code>\uFF0C\u7ED9DOcker\u589E\u52A0tags\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: &quot;Install the Docker container&quot;
  include: Docker.yml
  when:
    - zabbix_agent_docker | bool
  tags:
    - docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>\u6700\u540E\u4E24\u884C\u662F\u65B0\u589E\u7684\u3002</p></blockquote></li></ul><ol start="4"><li>\u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> ansible-playbook -i inventory/zabbix.yml new-zabbix-agent.yml -l <span class="token number">192.168</span>.163.150 --skip-tags <span class="token string">&quot;sangoma,debian,suse,windows,docker&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u6BCF\u6B21\u65B0\u589Ezabbix-agent\uFF0C\u6700\u540E\u5B89\u88C5\u5B8C\u6210\uFF0C\u91CD\u542F\u4E00\u4E0Bzabbix-proxy\uFF0C\u8FD9\u6837proxy\u4F1A\u5C3D\u5FEB\u53D1\u73B0agent\u8282\u70B9</p></blockquote><ol start="5"><li><p>\u76D1\u63A7\u6A21\u5757</p><p>\u6211\u4EEC\u91C7\u7528\u7684\u662Fzabbix\u4E3B\u52A8\u5F0F\u7684\u76D1\u63A7\u65B9\u5F0F\uFF0Czabbix-agent\u4E3B\u52A8\u63A8\u9001\u6570\u636E\u7ED9proxy\u6216server\uFF0C\u4EE5\u51CF\u5C11server\u7AEF\u538B\u529B\u3002</p><p>\u6211\u53D1\u73B0\u5728\u65B0\u7684zabbix\u76D1\u63A7\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u68C0\u67E5\u65F6\u95F4\u6709\u6CA1\u6709\u540C\u6B65\u3002</p><p>\u800C\u4E14\u8FD8\u6709\u78C1\u76D8IO\u7684\u76D1\u63A7\uFF0C\u5C31\u95EE\u4F60\u4EEC\u68D2\u4E0D\u68D2\uFF01\uFF01\uFF01</p><p>\u5F88\u68D2\uFF01</p><blockquote><p>4.4\u4E2D\u65B0\u7684\u4E3B\u52A8\u5F0F\u6A21\u677F\u4E2D\uFF0C\u9700\u8981\u5C06\u76D1\u63A7\u9879system.localtime \u53D8\u4E3Aenabled\uFF0C\u5426\u5219\u4E3B\u673A\u7684\u53EF\u7528\u6027\u4E3Aunknown</p></blockquote><p>\u4E3B\u52A8\u5F0F\u7684\u7F3A\u70B9\uFF0C\u4E3B\u673A\u5B95\u673A\uFF0C\u77E5\u9053\u7684\u65F6\u95F4\u4E0D\u53CA\u65F6\uFF0C\u597D\u50CF\u662F30\u5206\u949F\u3002</p></li></ol>`,31);function p(b,r){return e}var i=n(a,[["render",p],["__file","zabbix-ans.html.vue"]]);export{i as default};
