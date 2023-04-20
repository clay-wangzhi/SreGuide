import{_ as n,e as s}from"./app.37ca1d6f.js";const a={},e=s(`<h1 id="_4-2-playbook\u5FAA\u73AF\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_4-2-playbook\u5FAA\u73AF\u8BED\u53E5" aria-hidden="true">#</a> 4.2 Playbook\u5FAA\u73AF\u8BED\u53E5</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1 \u7B80\u4ECB</h2><p>\u6211\u4EEC\u5728\u7F16\u5199playbook\u7684\u65F6\u5019\uFF0C\u4E0D\u53EF\u907F\u514D\u7684\u8981\u6267\u884C\u4E00\u4E9B\u91CD\u590D\u6027\u64CD\u4F5C\uFF0C\u6BD4\u5982\u6307\u5B89\u88C5\u8F6F\u4EF6\u5305\uFF0C\u6279\u91CF\u521B\u5EFA\u7528\u6237\uFF0C\u64CD\u4F5C\u67D0\u4E2A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u7B49\u3002\u6B63\u5982\u6211\u4EEC\u6240\u8BF4\uFF0Cansible\u4E00\u95E8\u7B80\u5355\u7684\u81EA\u52A8\u5316\u8BED\u8A00\uFF0C\u6240\u4EE5\u6D41\u7A0B\u63A7\u5236\u3001\u5FAA\u73AF\u8BED\u53E5\u8FD9\u4E9B\u7F16\u7A0B\u8BED\u8A00\u7684\u57FA\u672C\u5143\u7D20\u5B83\u540C\u6837\u90FD\u5177\u5907\u3002</p><p>loop\u5FAA\u73AF\uFF0C\u5B83\u662F\u5728Ansible 2.5\u7248\u672C\u4E2D\u65B0\u6DFB\u52A0\u7684\u5FAA\u73AF\u7ED3\u6784\uFF0C\u7B49\u4EF7\u4E8Ewith_list\u3002\u5927\u591A\u6570\u65F6\u5019\uFF0Cwith_xxx\u7684\u5FAA\u73AF\u90FD\u53EF\u4EE5\u901A\u8FC7\u4E00\u5B9A\u7684\u624B\u6BB5\u8F6C\u6362\u6210loop\u5FAA\u73AF\uFF0C\u6240\u4EE5\u4ECEAnsible 2.5\u7248\u672C\u4E4B\u540E\uFF0C\u539F\u6765\u7ECF\u5E38\u4F7F\u7528\u7684with_items\u5FAA\u73AF\u90FD\u53EF\u4EE5\u5C1D\u8BD5\u8F6C\u6362\u6210loop\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u7B80\u5355\u7684\u8BF4\u4E00\u8BF4Playbook\u4E2D\u5FAA\u73AF\u8BED\u53E5\u3002</p><h2 id="_2-loop\u5173\u952E\u5B57\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-loop\u5173\u952E\u5B57\u8BF4\u660E" aria-hidden="true">#</a> 2 loop\u5173\u952E\u5B57\u8BF4\u660E</h2><p>\u5728playbook\u4E2D\u4F7F\u7528\u5FAA\u73AF\uFF0C\u76F4\u63A5\u4F7F\u7528loop\u5173\u952E\u5B57\u5373\u53EF\u3002</p><p>\u5982\u4E0B\u793A\u4F8B\uFF0C\u542F\u52A8httpd\u548Cpostfilx\u670D\u52A1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks:
  - name: postfix and httpd are running
    service:
      name: &quot;{{ item }}&quot;
      state: started
    loop:
      - postfix
      - httpd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u5C06loop\u5FAA\u73AF\u7684\u5217\u8868\u63D0\u524D\u8D4B\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF\uFF0C\u7136\u540E\u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\u8C03\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#cat test_services.yml
test_services:
  - postfix
  - httpd

# cat install_pkgs.yml 
- name: start services
  hosts: test
  vars_files:
    - test_services.yml
  tasks:
    - name: postfix and httpd are running
      service:
        name: &quot;{{ item }}&quot;
        state: started
      loop: &quot;{{ test_services }}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5FAA\u73AF\u66F4\u590D\u6742\u7C7B\u578B\u6570\u636E\u7684\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat test_loop.yml 
- name: test loop
  hosts: test
  tasks:
  - name: add www group
    group: 
      name: www
  - name: add several users
    user: 
      name: &quot;{{ item.name }}&quot;
      state: present 
      groups: &quot;{{ item.groups }}&quot;
    loop:
      - { name: &#39;testuser1&#39;, groups: &#39;wheel&#39; }
      - { name: &#39;testuser2&#39;, groups: &#39;www&#39; }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_3-\u5FAA\u73AF\u7684\u63A7\u5236-loop-control" tabindex="-1"><a class="header-anchor" href="#_3-\u5FAA\u73AF\u7684\u63A7\u5236-loop-control" aria-hidden="true">#</a> 3 \u5FAA\u73AF\u7684\u63A7\u5236\uFF1Aloop_control</h2><p>\u540E\u7EED\u8865\u5145</p><h2 id="_3-\u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\u6CE8\u518C\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-\u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\u6CE8\u518C\u53D8\u91CF" aria-hidden="true">#</a> 3 \u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\u6CE8\u518C\u53D8\u91CF</h2><p>\u4E0B\u9762\u662F\u4E00\u4E2Aregister\u7684\u53D8\u91CF\u5728\u5FAA\u73AF\u4E2D\u4F7F\u7528\u7684\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cat register_loop.yml 
- name: registered variable usage as a loop list
  hosts: test
  tasks:
      - name: ensure /mnt/bkspool exists
        file:
          path: /mnt/bkspool
          state: directory
      - name: retrieve the list of home directories
        command: ls /home
        register: home_dirs
      - name: Show home_dirs results
        debug:
          var: home_dirs.stdout_lines
      - name: add home dirs to the backup spooler
        file: 
          path: /mnt/bkspool/{{ item }}
          src: /home/{{ item }}
          state: link
          force: yes
        loop: &quot;{{ home_dirs.stdout_lines }}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u5728\u5FAA\u73AF\u8BED\u53E5\u4E2D\u6CE8\u518C\u53D8\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: Loop Register test
  gather_facts: no
  hosts: test
  tasks:
    - name: Looping Echo Task
      shell: &quot;echo this is my item: {{ item }}&quot;
      loop:
        - one
        - two
      register: echo_results
    - name: Show echo_results variable
      debug:
        var: echo_results
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6267\u884C\u8BED\u53E5\uFF0C\u53EF\u4EE5\u770B\u5230\u53D8\u91CF\u7684\u8FD4\u56DE\u7ED3\u679C\u4E3A\u4E00\u4E2A\u5B57\u5178\u5217\u8868\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ok: [10.1.61.187] =&gt; {
    &quot;echo_results&quot;: {
        &quot;changed&quot;: true,
        &quot;msg&quot;: &quot;All items completed&quot;,
        &quot;results&quot;: [
            {
                &quot;ansible_loop_var&quot;: &quot;item&quot;,
                &quot;changed&quot;: true,
                &quot;cmd&quot;: &quot;echo this is my item: one&quot;,
                &quot;delta&quot;: &quot;0:00:00.004905&quot;,
                &quot;end&quot;: &quot;2019-06-10 00:23:51.814151&quot;,
                &quot;failed&quot;: false,
                &quot;invocation&quot;: {
                    &quot;module_args&quot;: {
                        &quot;_raw_params&quot;: &quot;echo this is my item: one&quot;,
                        &quot;_uses_shell&quot;: true,
                        &quot;argv&quot;: null,
                        &quot;chdir&quot;: null,
                        &quot;creates&quot;: null,
                        &quot;executable&quot;: null,
                        &quot;removes&quot;: null,
                        &quot;stdin&quot;: null,
                        &quot;stdin_add_newline&quot;: true,
                        &quot;strip_empty_ends&quot;: true,
                        &quot;warn&quot;: true
                    }
                },
                &quot;item&quot;: &quot;one&quot;,
                &quot;rc&quot;: 0,
                &quot;start&quot;: &quot;2019-06-10 00:23:51.809246&quot;,
                &quot;stderr&quot;: &quot;&quot;,
                &quot;stderr_lines&quot;: [],
                &quot;stdout&quot;: &quot;this is my item: one&quot;,
                &quot;stdout_lines&quot;: [
                    &quot;this is my item: one&quot;
                ]
            },
            {
                &quot;ansible_loop_var&quot;: &quot;item&quot;,
                &quot;changed&quot;: true,
                &quot;cmd&quot;: &quot;echo this is my item: two&quot;,
                &quot;delta&quot;: &quot;0:00:00.004736&quot;,
                &quot;end&quot;: &quot;2019-06-10 00:23:52.008981&quot;,
                &quot;failed&quot;: false,
                &quot;invocation&quot;: {
                    &quot;module_args&quot;: {
                        &quot;_raw_params&quot;: &quot;echo this is my item: two&quot;,
                        &quot;_uses_shell&quot;: true,
                        &quot;argv&quot;: null,
                        &quot;chdir&quot;: null,
                        &quot;creates&quot;: null,
                        &quot;executable&quot;: null,
                        &quot;removes&quot;: null,
                        &quot;stdin&quot;: null,
                        &quot;stdin_add_newline&quot;: true,
                        &quot;strip_empty_ends&quot;: true,
                        &quot;warn&quot;: true
                    }
                },
                &quot;item&quot;: &quot;two&quot;,
                &quot;rc&quot;: 0,
                &quot;start&quot;: &quot;2019-06-10 00:23:52.004245&quot;,
                &quot;stderr&quot;: &quot;&quot;,
                &quot;stderr_lines&quot;: [],
                &quot;stdout&quot;: &quot;this is my item: two&quot;,
                &quot;stdout_lines&quot;: [
                    &quot;this is my item: two&quot;
                ]
            }
        ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h2 id="_4-\u65E7\u5FAA\u73AF\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_4-\u65E7\u5FAA\u73AF\u8BED\u53E5" aria-hidden="true">#</a> 4 \u65E7\u5FAA\u73AF\u8BED\u53E5</h2><p>\u5728Ansible 2.5\u4EE5\u524D\uFF0Cplaybook\u901A\u8FC7\u4E0D\u540C\u7684\u5FAA\u73AF\u8BED\u53E5\u4EE5\u5B9E\u73B0\u4E0D\u540C\u7684\u5FAA\u73AF\uFF0C\u8FD9\u4E9B\u8BED\u53E5\u4F7F\u7528<code>with_</code>\u4F5C\u4E3A\u524D\u7F00\u3002\u8FD9\u4E9B\u8BED\u6CD5\u76EE\u524D\u4ECD\u7136\u517C\u5BB9\uFF0C\u4F46\u5728\u672A\u6765\u7684\u67D0\u4E2A\u65F6\u95F4\u70B9\uFF0C\u4F1A\u9010\u6B65\u5E9F\u5F03\u3002</p><table><thead><tr><th>\u5FAA\u73AF\u8BED\u53E5\u5173\u952E\u5B57</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>with_items</td><td>\u7B80\u5355\u7684\u5217\u8868\u5FAA\u73AF</td></tr><tr><td>with_nested</td><td>\u5D4C\u5957\u5FAA\u73AF</td></tr><tr><td>with_dict</td><td>\u5FAA\u73AF\u5B57\u5178</td></tr><tr><td>with_fileglob</td><td>\u5FAA\u73AF\u6307\u5B9A\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6</td></tr><tr><td>with_lines</td><td>\u5FAA\u73AF\u4E00\u4E2A\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u884C</td></tr><tr><td>with_sequence</td><td>\u751F\u6210\u4E00\u4E2A\u81EA\u589E\u7684\u6574\u6570\u5E8F\u5217\uFF0C\u53EF\u4EE5\u6307\u5B9A\u8D77\u59CB\u503C\u548C\u7ED3\u675F\u503C\u4EE5\u53CA\u6B65\u957F\u3002\u53C2\u6570\u4EE5key=value\u7684\u5F62\u5F0F\u6307\u5B9A\uFF0Cformat\u6307\u5B9A\u8F93\u51FA\u7684\u683C\u5F0F\u3002\u6570\u5B57\u53EF\u4EE5\u662F\u5341\u8FDB\u5236\u3001\u5341\u516D\u8FDB\u5236\u3001\u516B\u8FDB\u5236</td></tr><tr><td>with_subelement</td><td>\u904D\u5386\u5B50\u5143\u7D20</td></tr><tr><td>with_together</td><td>\u904D\u5386\u6570\u636E\u5E76\u884C\u96C6\u5408</td></tr></tbody></table><h3 id="_4-1-with-items" tabindex="-1"><a class="header-anchor" href="#_4-1-with-items" aria-hidden="true">#</a> 4.1 with_items</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  vars:
    data:
      - user0
      - user1
      - user2
  tasks:
    - name: &quot;with_items&quot;
      debug:
        msg: &quot;{{ item }}&quot;
      with_items: &quot;{{ data }}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_4-2-with-nested" tabindex="-1"><a class="header-anchor" href="#_4-2-with-nested" aria-hidden="true">#</a> 4.2 with_nested</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks: 
  - name: debug loops
    debug: msg=&quot;name is {{ item[0] }}  vaule is {{ item[1] }} num is {{ item[2] }}&quot;
    with_nested:
      - [&#39;alice&#39;,&#39;bob&#39;]
      - [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]
      - [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>item[0]\u662F\u5FAA\u73AF\u7684\u7B2C\u4E00\u4E2A\u5217\u8868\u7684\u503C[&#39;alice&#39;,&#39;bob&#39;]\u3002item[1]\u662F\u7B2C\u4E8C\u4E2A\u5217\u8868\u7684\u503C\uFF1Bitem[2]\u5219\u662F\u7B2C\u4E09\u4E2A\u5217\u8868\u7684\u503C\uFF0C\u4EE5\u4E0A\u7684\u6267\u884C\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ansible-playbook with_nested_ex.yml 

PLAY [with_nested test] ******************************************************************************************

TASK [Gathering Facts] *******************************************************************************************
ok: [10.1.61.187]

TASK [debug loops] ***********************************************************************************************
ok: [10.1.61.187] =&gt; (item=[&#39;alice&#39;, &#39;a&#39;, &#39;1&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is alice  vaule is a num is 1&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;alice&#39;, &#39;a&#39;, &#39;2&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is alice  vaule is a num is 2&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;alice&#39;, &#39;a&#39;, &#39;3&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is alice  vaule is a num is 3&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;alice&#39;, &#39;b&#39;, &#39;1&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is alice  vaule is b num is 1&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;alice&#39;, &#39;b&#39;, &#39;2&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is alice  vaule is b num is 2&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;alice&#39;, &#39;b&#39;, &#39;3&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is alice  vaule is b num is 3&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;alice&#39;, &#39;c&#39;, &#39;1&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is alice  vaule is c num is 1&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;alice&#39;, &#39;c&#39;, &#39;2&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is alice  vaule is c num is 2&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;alice&#39;, &#39;c&#39;, &#39;3&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is alice  vaule is c num is 3&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;bob&#39;, &#39;a&#39;, &#39;1&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is bob  vaule is a num is 1&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;bob&#39;, &#39;a&#39;, &#39;2&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is bob  vaule is a num is 2&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;bob&#39;, &#39;a&#39;, &#39;3&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is bob  vaule is a num is 3&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;bob&#39;, &#39;b&#39;, &#39;1&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is bob  vaule is b num is 1&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;bob&#39;, &#39;b&#39;, &#39;2&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is bob  vaule is b num is 2&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;bob&#39;, &#39;b&#39;, &#39;3&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is bob  vaule is b num is 3&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;bob&#39;, &#39;c&#39;, &#39;1&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is bob  vaule is c num is 1&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;bob&#39;, &#39;c&#39;, &#39;2&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is bob  vaule is c num is 2&quot;
}
ok: [10.1.61.187] =&gt; (item=[&#39;bob&#39;, &#39;c&#39;, &#39;3&#39;]) =&gt; {
    &quot;msg&quot;: &quot;name is bob  vaule is c num is 3&quot;
}

PLAY RECAP *******************************************************************************************************
10.1.61.187 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><h3 id="_4-3-with-dict" tabindex="-1"><a class="header-anchor" href="#_4-3-with-dict" aria-hidden="true">#</a> 4.3 with_dict</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u5047\u5982\u6709\u5982\u4E0B\u53D8\u91CF\u5185\u5BB9\uFF1A</span>
<span class="token key atrule">users</span><span class="token punctuation">:</span>
  <span class="token key atrule">alice</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Alice Appleworth
    <span class="token key atrule">telephone</span><span class="token punctuation">:</span> 123<span class="token punctuation">-</span>456<span class="token punctuation">-</span><span class="token number">7890</span>
  <span class="token key atrule">bob</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Bob Bananarama
    <span class="token key atrule">telephone</span><span class="token punctuation">:</span> 987<span class="token punctuation">-</span>654<span class="token punctuation">-</span><span class="token number">3210</span>

<span class="token comment"># \u73B0\u5728\u9700\u8981\u8F93\u51FA\u6BCF\u4E2A\u7528\u6237\u7684\u7528\u6237\u540D\u548C\u624B\u673A\u53F7\uFF1A</span>
<span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Print phone records
    <span class="token key atrule">debug</span><span class="token punctuation">:</span> msg=&quot;User <span class="token punctuation">{</span><span class="token punctuation">{</span> item.key <span class="token punctuation">}</span><span class="token punctuation">}</span> is <span class="token punctuation">{</span><span class="token punctuation">{</span> item.value.name <span class="token punctuation">}</span><span class="token punctuation">}</span> (<span class="token punctuation">{</span><span class="token punctuation">{</span> item.value.telephone <span class="token punctuation">}</span><span class="token punctuation">}</span>)&quot;
    <span class="token key atrule">with_dict</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ users }}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_4-4-with-fileglob" tabindex="-1"><a class="header-anchor" href="#_4-4-with-fileglob" aria-hidden="true">#</a> 4.4 with_fileglob</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: test
  tasks:
    - name: Make key directory     
      file: 
        path: /root/.sshkeys 
        state: directory 
        mode: 0700 
        owner: root 
        group: root 
        
    - name: Upload public keys     
      copy: 
        src: &quot;{{ item }}&quot;
        dest: /root/.sshkeys
        mode: 0600 
        owner: root 
        group: root  
      with_fileglob:
        - /root/.ssh/*.pub 
        
    - name: Assemble keys into authorized_keys file     
      assemble: 
        src: /root/.sshkeys 
        dest: /root/.ssh/authorized_keys
        mode: 0600 
        owner: root 
        group: root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_4-5-with-lines" tabindex="-1"><a class="header-anchor" href="#_4-5-with-lines" aria-hidden="true">#</a> 4.5 with_lines</h3><p>with_lines\u5FAA\u73AF\u7ED3\u6784\u4F1A\u8BA9\u4F60\u5728\u63A7\u5236\u4E3B\u673A\u4E0A\u6267\u884C\u4EFB\u610F\u547D\u4EE4\uFF0C\u5E76\u5BF9\u547D\u4EE4\u7684\u8F93\u51FA\u8FDB\u884C\u9010\u884C\u8FED\u4EE3\u3002\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A \u6587\u4EF6test.txt\u5305\u542B\u5982\u4E0B\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Breeze Yan
Bernie Yang
jerry Qing
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u6CD5\u8FDB\u884C\u9010\u884C\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: print all names
  debug: msg=&quot;{{ item }}&quot;
  with_lines:
    - cat test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-6-with-subelement" tabindex="-1"><a class="header-anchor" href="#_4-6-with-subelement" aria-hidden="true">#</a> 4.6 with_subelement</h3><p>\u5047\u5982\u73B0\u5728\u9700\u8981\u904D\u5386\u4E00\u4E2A\u7528\u6237\u5217\u8868\uFF0C\u5E76\u521B\u5EFA\u6BCF\u4E2A\u7528\u6237\uFF0C\u800C\u4E14\u8FD8\u9700\u8981\u4E3A\u6BCF\u4E2A\u7528\u6237\u914D\u7F6E\u4EE5\u7279\u5B9A\u7684SSH key\u767B\u5F55\u3002\u53D8\u91CF\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>users:
  - name: alice
    authorized:
      - /tmp/alice/onekey.pub
      - /tmp/alice/twokey.pub
    mysql:
        password: mysql-password
        hosts:
          - &quot;%&quot;
          - &quot;127.0.0.1&quot;
          - &quot;::1&quot;
          - &quot;localhost&quot;
        privs:
          - &quot;*.*:SELECT&quot;
          - &quot;DB1.*:ALL&quot;
  - name: bob
    authorized:
      - /tmp/bob/id_rsa.pub
    mysql:
        password: other-mysql-password
        hosts:
          - &quot;db1&quot;
        privs:
          - &quot;*.*:SELECT&quot;
          - &quot;DB2.*:ALL&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>playbook\u4E2D\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tasks:
  - user: name={{ item.name }} state=present generate_ssh_key=yes
    with_items: &quot;{{users}}&quot;
  - authorized_key: &quot;user={{ item.0.name }} key=&#39;{{ lookup(&#39;file&#39;, item.1) }}&#39;&quot;
    with_subelements:
     - users
     - authorized
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u904D\u5386\u5D4C\u5957\u7684\u5B50\u5217\u8868\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- name: Setup MySQL users
  mysql_user: name={{ item.0.name }} password={{ item.0.mysql.password }} host={{ item.1 }} priv={{ item.0.mysql.privs | join(&#39;/&#39;) }}
  with_subelements:
    - users
    - mysql.hosts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-7-with-sequence" tabindex="-1"><a class="header-anchor" href="#_4-7-with-sequence" aria-hidden="true">#</a> 4.7 with_sequence</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: all
  tasks:
    # create groups
    - group: name=evens state=present
    - group: name=odds state=present
    # create some test users
    - user: name={{ item }} state=present groups=evens
      with_sequence: start=0 end=32 format=testuser%02d
    # create a series of directories with even numbers for some reason
    - file: dest=/var/stuff/{{ item }} state=directory
      with_sequence: start=4 end=16 stride=2    # stride\u7528\u4E8E\u6307\u5B9A\u6B65\u957F
    # a simpler way to use the sequence plugin
    # create 4 groups
    - group: name=group{{ item }} state=present
      with_sequence: count=4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_4-8-with-random-choice" tabindex="-1"><a class="header-anchor" href="#_4-8-with-random-choice" aria-hidden="true">#</a> 4.8 with_random_choice</h3><p>\u4ECE\u5217\u8868\u4E2D\u968F\u673A\u53D6\u4E00\u4E2A\u503C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- debug: msg={{ item }}
  with_random_choice:
     - &quot;go through the door&quot;
     - &quot;drink from the goblet&quot;
     - &quot;press the red button&quot;
     - &quot;do nothing&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4-9-do-util\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_4-9-do-util\u5FAA\u73AF" aria-hidden="true">#</a> 4.9 do-Util\u5FAA\u73AF</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- action: shell /usr/bin/foo
  register: result
  until: result.stdout.find(&quot;all systems go&quot;) != -1
  retries: 5
  delay: 10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u91CD\u590D\u6267\u884Cshell\u6A21\u5757\uFF0C\u5F53shell\u6A21\u5757\u6267\u884C\u7684\u547D\u4EE4\u8F93\u51FA\u5185\u5BB9\u5305\u542B&quot;all systems go&quot;\u7684\u65F6\u5019\u505C\u6B62\u3002\u91CD\u8BD55\u6B21\uFF0C\u5EF6\u8FDF\u65F6\u95F410\u79D2\u3002retries\u9ED8\u8BA4\u503C\u4E3A3\uFF0Cdelay\u9ED8\u8BA4\u503C\u4E3A5\u3002\u4EFB\u52A1\u7684\u8FD4\u56DE\u503C\u4E3A\u6700\u540E\u4E00\u6B21\u5FAA\u73AF\u7684\u8FD4\u56DE\u7ED3\u679C\u3002</p><h3 id="_4-10-with-together" tabindex="-1"><a class="header-anchor" href="#_4-10-with-together" aria-hidden="true">#</a> 4.10 with_together</h3><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- hosts: webservers
  remote_user: root
  vars:
    alpha: [ &#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;]
    numbers: [ 1,2,3,4 ]
  tasks:
    - debug: msg=&quot;{{ item.0 }} and {{ item.1 }}&quot;
      with_together:
         - &quot;{{ alpha }}&quot;
         - &quot;{{ numbers }}&quot;
# \u8F93\u51FA\u7684\u7ED3\u679C\u4E3A\uFF1A
ok: [192.168.1.65] =&gt; (item=[&#39;a&#39;, 1]) =&gt; {
    &quot;item&quot;: [
        &quot;a&quot;,
        1
    ],
    &quot;msg&quot;: &quot;a and 1&quot;
}
ok: [192.168.1.65] =&gt; (item=[&#39;b&#39;, 2]) =&gt; {
    &quot;item&quot;: [
        &quot;b&quot;,
        2
    ],
    &quot;msg&quot;: &quot;b and 2&quot;
}
ok: [192.168.1.65] =&gt; (item=[&#39;c&#39;, 3]) =&gt; {
    &quot;item&quot;: [
        &quot;c&quot;,
        3
    ],
    &quot;msg&quot;: &quot;c and 3&quot;
}
ok: [192.168.1.65] =&gt; (item=[&#39;d&#39;, 4]) =&gt; {
    &quot;item&quot;: [
        &quot;d&quot;,
        4
    ],
    &quot;msg&quot;: &quot;d and 4&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><blockquote><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>https://www.cnblogs.com/breezey/p/10996629.html</p><p>https://blog.51cto.com/cloumn/blog/1544</p></blockquote>`,59);function r(l,t){return e}var u=n(a,[["render",r],["__file","playbook-for.html.vue"]]);export{u as default};
