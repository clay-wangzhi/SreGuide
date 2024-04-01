import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-bdb4dd27.js";const t={},l=s(`<h1 id="_4-2-playbook循环语句" tabindex="-1"><a class="header-anchor" href="#_4-2-playbook循环语句" aria-hidden="true">#</a> 4.2 Playbook循环语句</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2><p>我们在编写playbook的时候，不可避免的要执行一些重复性操作，比如指安装软件包，批量创建用户，操作某个目录下的所有文件等。正如我们所说，ansible一门简单的自动化语言，所以流程控制、循环语句这些编程语言的基本元素它同样都具备。</p><p>loop循环，它是在Ansible 2.5版本中新添加的循环结构，等价于with_list。大多数时候，with_xxx的循环都可以通过一定的手段转换成loop循环，所以从Ansible 2.5版本之后，原来经常使用的with_items循环都可以尝试转换成loop。</p><p>下面我们简单的说一说Playbook中循环语句。</p><h2 id="_2-loop关键字说明" tabindex="-1"><a class="header-anchor" href="#_2-loop关键字说明" aria-hidden="true">#</a> 2 loop关键字说明</h2><p>在playbook中使用循环，直接使用loop关键字即可。</p><p>如下示例，启动httpd和postfilx服务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tasks:
  - name: postfix and httpd are running
    service:
      name: &quot;{{ item }}&quot;
      state: started
    loop:
      - postfix
      - httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以将loop循环的列表提前赋值给一个变量，然后在循环语句中调用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#cat test_services.yml
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个循环更复杂类型数据的示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat test_loop.yml 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-循环的控制-loop-control" tabindex="-1"><a class="header-anchor" href="#_3-循环的控制-loop-control" aria-hidden="true">#</a> 3 循环的控制：loop_control</h2><p>后续补充</p><h2 id="_3-在循环语句中注册变量" tabindex="-1"><a class="header-anchor" href="#_3-在循环语句中注册变量" aria-hidden="true">#</a> 3 在循环语句中注册变量</h2><p>下面是一个register的变量在循环中使用的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat register_loop.yml 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在循环语句中注册变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: Loop Register test
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行语句，可以看到变量的返回结果为一个字典列表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ok: [10.1.61.187] =&gt; {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-旧循环语句" tabindex="-1"><a class="header-anchor" href="#_4-旧循环语句" aria-hidden="true">#</a> 4 旧循环语句</h2><p>在Ansible 2.5以前，playbook通过不同的循环语句以实现不同的循环，这些语句使用<code>with_</code>作为前缀。这些语法目前仍然兼容，但在未来的某个时间点，会逐步废弃。</p><table><thead><tr><th>循环语句关键字</th><th>描述</th></tr></thead><tbody><tr><td>with_items</td><td>简单的列表循环</td></tr><tr><td>with_nested</td><td>嵌套循环</td></tr><tr><td>with_dict</td><td>循环字典</td></tr><tr><td>with_fileglob</td><td>循环指定目录中的所有文件</td></tr><tr><td>with_lines</td><td>循环一个文件中的所有行</td></tr><tr><td>with_sequence</td><td>生成一个自增的整数序列，可以指定起始值和结束值以及步长。参数以key=value的形式指定，format指定输出的格式。数字可以是十进制、十六进制、八进制</td></tr><tr><td>with_subelement</td><td>遍历子元素</td></tr><tr><td>with_together</td><td>遍历数据并行集合</td></tr></tbody></table><h3 id="_4-1-with-items" tabindex="-1"><a class="header-anchor" href="#_4-1-with-items" aria-hidden="true">#</a> 4.1 with_items</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-with-nested" tabindex="-1"><a class="header-anchor" href="#_4-2-with-nested" aria-hidden="true">#</a> 4.2 with_nested</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tasks: 
  - name: debug loops
    debug: msg=&quot;name is {{ item[0] }}  vaule is {{ item[1] }} num is {{ item[2] }}&quot;
    with_nested:
      - [&#39;alice&#39;,&#39;bob&#39;]
      - [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]
      - [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>item[0]是循环的第一个列表的值[&#39;alice&#39;,&#39;bob&#39;]。item[1]是第二个列表的值；item[2]则是第三个列表的值，以上的执行输出如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible-playbook with_nested_ex.yml 

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-with-dict" tabindex="-1"><a class="header-anchor" href="#_4-3-with-dict" aria-hidden="true">#</a> 4.3 with_dict</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 假如有如下变量内容：</span>
<span class="token key atrule">users</span><span class="token punctuation">:</span>
  <span class="token key atrule">alice</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Alice Appleworth
    <span class="token key atrule">telephone</span><span class="token punctuation">:</span> 123<span class="token punctuation">-</span>456<span class="token punctuation">-</span><span class="token number">7890</span>
  <span class="token key atrule">bob</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Bob Bananarama
    <span class="token key atrule">telephone</span><span class="token punctuation">:</span> 987<span class="token punctuation">-</span>654<span class="token punctuation">-</span><span class="token number">3210</span>

<span class="token comment"># 现在需要输出每个用户的用户名和手机号：</span>
<span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Print phone records
    <span class="token key atrule">debug</span><span class="token punctuation">:</span> msg=&quot;User <span class="token punctuation">{</span><span class="token punctuation">{</span> item.key <span class="token punctuation">}</span><span class="token punctuation">}</span> is <span class="token punctuation">{</span><span class="token punctuation">{</span> item.value.name <span class="token punctuation">}</span><span class="token punctuation">}</span> (<span class="token punctuation">{</span><span class="token punctuation">{</span> item.value.telephone <span class="token punctuation">}</span><span class="token punctuation">}</span>)&quot;
    <span class="token key atrule">with_dict</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ users }}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-with-fileglob" tabindex="-1"><a class="header-anchor" href="#_4-4-with-fileglob" aria-hidden="true">#</a> 4.4 with_fileglob</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-with-lines" tabindex="-1"><a class="header-anchor" href="#_4-5-with-lines" aria-hidden="true">#</a> 4.5 with_lines</h3><p>with_lines循环结构会让你在控制主机上执行任意命令，并对命令的输出进行逐行迭代。假设我们有一个 文件test.txt包含如下行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Breeze Yan
Bernie Yang
jerry Qing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以通过如下方法进行逐行输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: print all names
  debug: msg=&quot;{{ item }}&quot;
  with_lines:
    - cat test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-with-subelement" tabindex="-1"><a class="header-anchor" href="#_4-6-with-subelement" aria-hidden="true">#</a> 4.6 with_subelement</h3><p>假如现在需要遍历一个用户列表，并创建每个用户，而且还需要为每个用户配置以特定的SSH key登录。变量文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>users:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>playbook中定义如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tasks:
  - user: name={{ item.name }} state=present generate_ssh_key=yes
    with_items: &quot;{{users}}&quot;
  - authorized_key: &quot;user={{ item.0.name }} key=&#39;{{ lookup(&#39;file&#39;, item.1) }}&#39;&quot;
    with_subelements:
     - users
     - authorized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以遍历嵌套的子列表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: Setup MySQL users
  mysql_user: name={{ item.0.name }} password={{ item.0.mysql.password }} host={{ item.1 }} priv={{ item.0.mysql.privs | join(&#39;/&#39;) }}
  with_subelements:
    - users
    - mysql.hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-7-with-sequence" tabindex="-1"><a class="header-anchor" href="#_4-7-with-sequence" aria-hidden="true">#</a> 4.7 with_sequence</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: all
  tasks:
    # create groups
    - group: name=evens state=present
    - group: name=odds state=present
    # create some test users
    - user: name={{ item }} state=present groups=evens
      with_sequence: start=0 end=32 format=testuser%02d
    # create a series of directories with even numbers for some reason
    - file: dest=/var/stuff/{{ item }} state=directory
      with_sequence: start=4 end=16 stride=2    # stride用于指定步长
    # a simpler way to use the sequence plugin
    # create 4 groups
    - group: name=group{{ item }} state=present
      with_sequence: count=4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-8-with-random-choice" tabindex="-1"><a class="header-anchor" href="#_4-8-with-random-choice" aria-hidden="true">#</a> 4.8 with_random_choice</h3><p>从列表中随机取一个值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- debug: msg={{ item }}
  with_random_choice:
     - &quot;go through the door&quot;
     - &quot;drink from the goblet&quot;
     - &quot;press the red button&quot;
     - &quot;do nothing&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-9-do-util循环" tabindex="-1"><a class="header-anchor" href="#_4-9-do-util循环" aria-hidden="true">#</a> 4.9 do-Util循环</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- action: shell /usr/bin/foo
  register: result
  until: result.stdout.find(&quot;all systems go&quot;) != -1
  retries: 5
  delay: 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重复执行shell模块，当shell模块执行的命令输出内容包含&quot;all systems go&quot;的时候停止。重试5次，延迟时间10秒。retries默认值为3，delay默认值为5。任务的返回值为最后一次循环的返回结果。</p><h3 id="_4-10-with-together" tabindex="-1"><a class="header-anchor" href="#_4-10-with-together" aria-hidden="true">#</a> 4.10 with_together</h3><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: webservers
  remote_user: root
  vars:
    alpha: [ &#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;]
    numbers: [ 1,2,3,4 ]
  tasks:
    - debug: msg=&quot;{{ item.0 }} and {{ item.1 }}&quot;
      with_together:
         - &quot;{{ alpha }}&quot;
         - &quot;{{ numbers }}&quot;
# 输出的结果为：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考链接：</p><p>https://www.cnblogs.com/breezey/p/10996629.html</p><p>https://blog.51cto.com/cloumn/blog/1544</p></blockquote>`,59),d=[l];function a(u,v){return i(),n("div",null,d)}const c=e(t,[["render",a],["__file","playbook-for.html.vue"]]);export{c as default};
