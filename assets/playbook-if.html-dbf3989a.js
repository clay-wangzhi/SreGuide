import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-54f39dde.js";const a={},l=s(`<h1 id="_4-3-playbook条件语句" tabindex="-1"><a class="header-anchor" href="#_4-3-playbook条件语句" aria-hidden="true">#</a> 4.3 Playbook条件语句</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2><p>在有的时候play的结果依赖于变量、fact或者是前一个任务的执行结果，或者有的时候，我们会基于上一个task执行返回的结果而决定如何执行后续的task。这个时候就需要用到条件判断。</p><p>条件语句在Ansible中的使用场景：</p><ul><li>在目标主机上定义了一个硬限制，比如目标主机的最小内存必须达到多少，才能执行该task</li><li>捕获一个命令的输出，根据命令输出结果的不同以触发不同的task</li><li>根据不同目标主机的facts，以定义不同的task</li><li>根据目标机的cpu的大小，以调优相关应用性能</li><li>用于判断某个服务的配置文件是否发生变更，以确定是否需要重启服务</li></ul><h2 id="_2-when关键字" tabindex="-1"><a class="header-anchor" href="#_2-when关键字" aria-hidden="true">#</a> 2 when关键字</h2><h3 id="_2-1-when基本使用" tabindex="-1"><a class="header-anchor" href="#_2-1-when基本使用" aria-hidden="true">#</a> 2.1 when基本使用</h3><p>在ansible中，使用条件判断的关键字就是when。</p><p>如在安装包的时候，需要指定主机的操作系统类型，或者是当操作系统的硬盘满了之后，需要清空文件等,可以使用when语句来做判断 。when关键字后面跟着的是python的表达式,在表达式中你能够使用任何的变量或者fact,当表达式的结果返回的是false,便会跳过本次的任务</p><p>下面是一个基本的用法示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: Install vim
  hosts: all
  tasks:
    - name:Install VIM via yum
      yum: 
        name: vim-enhanced 
        state: installed
      when: ansible_os_family ==&quot;RedHat&quot;
      
    - name:Install VIM via apt
      apt: 
        name: vim 
        state: installed
      when: ansible_os_family ==&quot;Debian&quot;
      
    - name: Unexpected OS family
      debug: msg=&quot;OS Family {{ ansible_os_family }} is not supported&quot; fail=yes
      when: not ansible_os_family ==&quot;RedHat&quot; or ansible_os_family ==&quot;Debian&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-比较运算符" tabindex="-1"><a class="header-anchor" href="#_2-2-比较运算符" aria-hidden="true">#</a> 2.2 比较运算符</h3><p>在上面的示例当中，我们使用了&quot;==&quot;的比较运算符，在ansible中，还支持如下比较运算符：</p><ul><li><code>==</code>：比较两个对象是否相等，相等则返回真。可用于比较字符串和数字</li><li><code>!=</code>：比较两个对象是否不等，不等则为真。</li><li><code>&gt;</code>：比较两个对象的大小，左边的值大于右边的值，则为真</li><li><code>&lt;</code>：比较两个对象的大小，左边的值小于右边的值，则为真</li><li><code>&gt;=</code>：比较两个对象的大小，左边的值大于等于右边的值，则为真</li><li><code>&lt;=</code>：比较两个对象的大小，左边的值小于等于右边的值，则为真</li></ul><p>下面是一些简单的示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>when: ansible_machine == &quot;x86_64&quot; 

when: max_memory &lt;= 512
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_2-3-逻辑运算符" aria-hidden="true">#</a> 2.3 逻辑运算符</h3><p>在Ansible中，除了比较运算符，还支持逻辑运算符：</p><ul><li>and：逻辑与，当左边和右边两个表达式同时为真，则返回真</li><li>or：逻辑或，当左右和右边两个表达式任意一个为真，则返回真</li><li>not：逻辑否，对表达式取反</li><li>()：当一组表达式组合在一起，形成一个更大的表达式，组合内的所有表达式都是逻辑与的关系</li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 逻辑或
when: ansible_distribution == &quot;RedHat&quot; or ansible_distribution == &quot;Fedora&quot;

# 逻辑与
when: ansible_distribution_version == &quot;7.5&quot; and ansible_kernel == &quot;3.10.0-327.el7.x86_64&quot;

when:
  - ansible_distribution_version == &quot;7.5&quot;
  - ansible_kernel == &quot;3.10.0-327.el7.x86_64&quot;
  
# 组合

when: =&gt; 
  ( ansible_distribution == &quot;RedHat&quot; and ansible_distribution_major_version == &quot;7&quot; )
  or
  ( ansible_distribution == &quot;Fedora&quot; and ansible_distribution_major_version == &quot;28&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个完整的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 判断register注册变量的返回结果
- name: restart httpd if postfix is running
  hosts: test
  tasks:
    - name: get postfix server status
      command: /usr/bin/systemctl is-active postfix
      ignore_errors: yes
      register: result
      
    - name: restart apache httpd based on postfix status
      service:
        name: httpd
        state: restarted
      when: result.rc == 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-条件判断与tests" tabindex="-1"><a class="header-anchor" href="#_3-条件判断与tests" aria-hidden="true">#</a> 3 条件判断与tests</h2><p>在shell当中，我们可使用test命令来进行一些常用的判断操作，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 判断/test文件是否存在
test -e /test

# 判断/testdir是否存在且为一个目录
test -d /testdir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，在ansible中也有类似的用法，只不过ansible没有使用linux的test命令，而是jinja2模板的tests。</p><p>下面是一个简单示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 通过条件语句判断testpath的路径是否存在
- hosts: test
  vars:
    testpath: /testdir
  tasks:
    - debug:
        msg: &quot;file exist&quot;
      when: testpath is exists
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例中，我们使用了<code>is exists</code>用于路径存在时返回真，也可以使用<code>is not exists</code>用于路径不存在时返回真。也可以在整个条件表达式的前面使用not以取反：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  vars:
    testpath: /testdir1
  tasks:
    - debug:
        msg: &quot;file not exist&quot;
      when: not testpath is exists
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ansible中，除了能够使用exists这种tests之外，还有一些别的tests。接下来我们详细说一说。</p><h3 id="_3-1-判断变量" tabindex="-1"><a class="header-anchor" href="#_3-1-判断变量" aria-hidden="true">#</a> 3.1 判断变量</h3><ul><li>defined：判断变量是否已定义，已定义则返回真</li><li>undefined：判断变量是否未定义，未定义则返回真</li><li>none：判断变量的值是否为空，如果变量已定义且值为空，则返回真</li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    testvar: &quot;test&quot;
    testvar1:
  tasks:
    - debug:
        msg: &quot;testvar is defined&quot;
      when: testvar is defined
    - debug:
        msg: &quot;testvar2 is undefined&quot;
      when: testvar2 is undefined
    - debug:
        msg: &quot;testvar1 is none&quot;
      when: testvar1 is none
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-判断执行结果" tabindex="-1"><a class="header-anchor" href="#_3-2-判断执行结果" aria-hidden="true">#</a> 3.2 判断执行结果</h3><ul><li>sucess或succeeded：通过任务执行结果返回的信息判断任务的执行状态，任务执行成功则返回true</li><li>failure或failed：任务执行失败则返回true</li><li>change或changed：任务执行状态为changed则返回true</li><li>skip或skipped：任务被跳过则返回true</li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    doshell: true
  tasks:
    - shell: &#39;cat /testdir/aaa&#39;
      when: doshell
      register: result
      ignore_errors: true
    - debug:
        msg: &quot;success&quot;
      when: result is success
      
    - debug:
        msg: &quot;failed&quot;
      when: result is failure
      
    - debug:
        msg: &quot;changed&quot;
      when: result is change
      
    - debug:
        msg: &quot;skip&quot;
      when: result is skip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-判断路径" tabindex="-1"><a class="header-anchor" href="#_3-3-判断路径" aria-hidden="true">#</a> 3.3 判断路径</h3><ul><li>file：判断指定路径是否为一个文件，是则为真</li><li>directory：判断指定路径是否为一个目录，是则为真</li><li>link：判断指定路径是否为一个软链接，是则为真</li><li>mount：判断指定路径是否为一个挂载点，是则为真</li><li>exists：判断指定路径是否存在，存在则为真</li></ul><blockquote><p>特别注意：关于路径的所有判断均是判断主控端上的路径，而非被控端上的路径</p></blockquote><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    testpath1: &quot;/testdir/test&quot;
    testpath2: &quot;/testdir&quot;
  tasks:
    - debug:
        msg: &quot;file&quot;
      when: testpath1 is file
    - debug:
        msg: &quot;directory&quot;
      when: testpath2 is directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-判断字符串" tabindex="-1"><a class="header-anchor" href="#_3-4-判断字符串" aria-hidden="true">#</a> 3.4 判断字符串</h3><ul><li>lower：判断字符串中的所有字母是否都是小写，是则为真</li><li>upper：判断字符串中的所有字母是否都是大写，是则为真</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars: 
    str1: &quot;abc&quot;
    str2: &quot;ABC&quot;
  tasks:
    - debug:
        msg: &quot;str1 is all lowercase&quot;
      when: str1 is lower
    - debug:
        msg: &quot;str2 is all uppercase&quot;
      when: str2 is upper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-判断整除" tabindex="-1"><a class="header-anchor" href="#_3-5-判断整除" aria-hidden="true">#</a> 3.5 判断整除</h3><ul><li>even：判断数值是否为偶数，是则为真</li><li>odd：判断数值是否为奇数，是则为真</li><li>divisibleby(num)：判断是否可以整除指定的数值，是则为真</li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars: 
    num1: 6
    num2: 8 
    num3: 15
  tasks:
    - debug: 
        msg: &quot;num1 is an even number&quot;
      when: num1 is even
    - debug:
        msg: &quot;num2 is an odd number&quot;
      when: num2 is odd
    - debug:
        msg: &quot;num3 can be divided exactly by&quot;
      when: num3 is divisibleby(3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-其他tests" tabindex="-1"><a class="header-anchor" href="#_3-6-其他tests" aria-hidden="true">#</a> 3.6 其他tests</h3><ol><li><p>version</p><p>可用于对比两个版本号的大小，或者与指定的版本号进行对比，使用语法为version(&quot;版本号&quot;,&quot;比较操作符&quot;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  vars:
    ver1: 1.2
    ver2: 1.3
  tasks:
    - debug:
        msg: &quot;ver1 is greater than ver2&quot;
      when: ver1 is version(ver2,&quot;&gt;&quot;)
    - debug:
        msg: &quot;system version {{ ansible_distribution_version }} greater than 7.3&quot;
      when: ansible_distribution_version is version(&quot;7.3&quot;,&quot;gt&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>version中使用的比较运算符说明：</p><ul><li>大于： &gt;, gt</li><li>大于等于： &gt;=, ge</li><li>小于： &lt;, lt</li><li>小于等于： &lt;=, le</li><li>等于： =, ==, eq</li><li>不等于： !=, &lt;&gt;, ne</li></ul></li><li><p>subset 判断一个list是不是另一个list的子集</p></li><li><p>superset 判断一个list是不是另一个list的父集&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    a:
      - 2
      - 5
    b: [1,2,3,4,5]
  tasks:
    - debug:
        msg: &quot;A is a subset of B&quot;
      when: a is subset(b)
    - debug:
        msg: &quot;B is the parent set of A&quot;
      when: b is superset(a)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>in 判断一个字符串是否存在于另一个字符串中，也可用于判断某个特定的值是否存在于列表中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  vars:
    supported_distros:
      - RedHat
      - CentOS
  tasks:
    - debug:
        msg: &quot;{{ ansible_distribution }} in supported_distros&quot;
      when: ansible_distribution in supported_distros
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>string 判断对象是否为一个字符串，是则为真</p></li><li><p>number 判断对象是否为一个数字，是则为真</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  gather_facts: no
  vars:
    var1: 1
    var2: &quot;1&quot;
    var3: a
  tasks:
    - debug:
        msg: &quot;var1 is a number&quot;
      when: var1 is number
    - debug:
        msg: &quot;var2 is a string&quot;
      when: var2 is string
    - debug:
        msg: &quot;var3 is a string&quot;
      when: var3 is string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-条件判断与block" tabindex="-1"><a class="header-anchor" href="#_4-条件判断与block" aria-hidden="true">#</a> 4 条件判断与block</h2><h3 id="_4-1-block" tabindex="-1"><a class="header-anchor" href="#_4-1-block" aria-hidden="true">#</a> 4.1 block</h3><p>我们在前面使用when做条件判断时，如果条件成立则执行对应的任务。但这就面临一个问题，当我们要使用同一个条件判断执行多个任务的时候，就意味着我们要在某一个任务下面都写一下when语句，而且判断条件完全一样。这种方式不仅麻烦而且显得low。Ansible提供了一种更好的方式来解决这个问题，即block。</p><p>在ansible中，使用block将多个任务进行组合，当作一个整体。我们可以对这一个整体做条件判断，当条件成立时，则执行块中的所有任务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  tasks:
    - debug:
        msg: &quot;task1 not in block&quot;
    - block:
        - debug:
            msg: &quot;task2 in block1&quot;
        - debug:
            msg: &quot;task3 in block1&quot;
      when: 2 &gt; 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个稍微有用点儿的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  tasks:
    - name: set /etc/resolv.conf
      template: 
        src: resolv.conf.j2 
        dest: /etc/resolv.conf 
        owner: root 
        group: root 
        mode: 0644
    - block:
        - name: ensure /etc/resolvconf/resolv.conf.d/base file for ubuntu 16.04
          template: 
            src: resolv.conf.j2
            dest: /etc/resolvconf/resolv.conf.d/base
       
        - name: config dns for ubuntu 16.04
          template: 
            src: resolv.conf.j2
            dest: /etc/resolv.conf
      when: ansible_distribution == &quot;Ubuntu&quot; and ansible_distribution_major_version == &quot;16&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用block注意事项：</p><ol><li>可以为block定义name（ansible 2.3增加的特性）</li><li>可以直接对block使用when，但不能直接对block使用loop</li></ol><h3 id="_4-2-rescue" tabindex="-1"><a class="header-anchor" href="#_4-2-rescue" aria-hidden="true">#</a> 4.2 rescue</h3><p>block除了能和when一起使用之外，还能作错误处理。这个时候就需要用到rescue关键字：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  tasks:
    - block:
        - shell: &#39;ls /testdir&#39;
      rescue:
        - debug:
            msg: &#39;/testdir is not exists&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，当block中的任务执行失败时，则运行rescue中的任务。如果block中的任务正常执行，则rescue的任务就不会被执行。如果block中有多个任务，则任何一个任务执行失败，都会执行rescue。block中可以定义多个任务，同样rescue当中也可以定义多个任务。</p><h3 id="_4-3-always" tabindex="-1"><a class="header-anchor" href="#_4-3-always" aria-hidden="true">#</a> 4.3 always</h3><p>当block执行失败时，rescue中的任务才会被执行；而无论block执行成功还是失败，always中的任务都会被执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- hosts: test
  tasks:
    - block:
        - shell: &#39;ls /testdir&#39;
      rescue:
        - debug:
            msg: &#39;/testdir is not exists&#39;
      always:
        - debug:
            msg: &#39;This task always executes&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-条件判断与错误处理" tabindex="-1"><a class="header-anchor" href="#_5-条件判断与错误处理" aria-hidden="true">#</a> 5 条件判断与错误处理</h2><p>在上面讲block的使用方法的时候，我们说block除了可以将多个任务组合到一起，还有错误处理的功能。接下来我们继续说一说错误处理。</p><h3 id="_5-1-fail模块" tabindex="-1"><a class="header-anchor" href="#_5-1-fail模块" aria-hidden="true">#</a> 5.1 fail模块</h3><p>在shell中，可能会有这样的需求：当脚本执行至某个阶段时，需要对某个条件进行判断，如果条件成立，则立即终止脚本的运行。在shell中，可以直接调用&quot;exit&quot;即可执行退出。事实上，在playbook中也有类似的模块可以做这件事。即fail模块。</p><p>fail模块用于终止当前playbook的执行，通常与条件语句组合使用，当满足条件时，终止当前play的运行。</p><p>选项只有一个：</p><ul><li>msg：终止前打印出信息</li></ul><p>示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 使用fail模块中断playbook输出</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> test
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> echo &quot;Just a test<span class="token punctuation">-</span><span class="token punctuation">-</span>error&quot; 
      <span class="token key atrule">register</span><span class="token punctuation">:</span> result
    <span class="token punctuation">-</span> <span class="token key atrule">fail</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;Conditions established,Interrupt running playbook&quot;</span>
      <span class="token key atrule">when</span><span class="token punctuation">:</span> <span class="token string">&quot;&#39;error&#39; in result.stdout&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span>
        <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;Inever execute,Because the playbook has stopped&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-failed-when" tabindex="-1"><a class="header-anchor" href="#_5-2-failed-when" aria-hidden="true">#</a> 5.2 failed_when</h3><p>事实上，当fail和when组合使用的时候，还有一个更简单的写法，即<code>failed_when</code>，当满足某个条件时，ansible主动触发失败。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 如果在command_result存在错误输出，且错误输出中，包含了\`FAILED\`字串，即返回失败状态：
- name: this command prints FAILED when it fails
  command: /usr/bin/example-command -x -y -z
  register: command_result
  failed_when: &quot;&#39;FAILED&#39; in command_result.stderr&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以直接通过<code>fail</code>模块和<code>when</code>条件语句，写成如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: this command prints FAILED when it fails
  command: /usr/bin/example-command -x -y -z
  register: command_result
  ignore_errors: True

- name: fail the play if the previous command did not succeed
  fail: msg=&quot;the command failed&quot;
  when: &quot; command_result.stderr and &#39;FAILED&#39; in command_result.stderr&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ansible一旦执行返回失败，后续操作就会中止，所以failed_when通常可以用于满足某种条件时主动中止playbook运行的一种方式。</p></blockquote><blockquote><p>ansible默认处理错误的机制是遇到错误就停止执行。但有些时候，有些错误是计划之中的。我们希望忽略这些错误，以让playbook继续往下执行。这个时候就可以使用<code>ignore_errors</code>忽略错误，从而让playbook继续往下执行。</p></blockquote><h3 id="_5-3-changed-when" tabindex="-1"><a class="header-anchor" href="#_5-3-changed-when" aria-hidden="true">#</a> 5.3 changed_when</h3><p>当我们控制一些远程主机执行某些任务时，当任务在远程主机上成功执行，状态发生更改时，会返回changed状态响应，状态未发生更改时，会返回OK状态响应，当任务被跳过时，会返回skipped状态响应。我们可以通过<code>changed_when</code>来手动更改<code>changed</code>响应状态。示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- shell: /usr/bin/billybass --mode=&quot;take me to the river&quot;
register: bass_result
changed_when: &quot;bass_result.rc != 2&quot;    #只有该条task执行以后，bass_result.rc的值不为2时，才会返回changed状态

# this will never report &#39;changed&#39; status
- shell: wall &#39;beep&#39;
  changed_when: False    #当changed_when为false时，该条task在执行以后，永远不会返回changed状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-断言-assert模块" tabindex="-1"><a class="header-anchor" href="#_5-4-断言-assert模块" aria-hidden="true">#</a> 5.4 断言：assert模块</h3><p>对于当满足某某条件时就失败的逻辑，可以使用fail模块加when指令来实现，也可使用更为直接的assert模块进行断言。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- hosts: localhost
  gather_facts: no
  tasks:
    - assert:
        that:
          - 100 &gt; 20
          - 200 &gt; 200
      fail_msg: &quot;oh, not me&quot;
      success_msg: &quot;oh, it&#39;s me&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中that参数接收一个列表，用于定义一个或多个条件，如果条件全为true，则任务成功，只要有一个条件为false，则任务失败。fail_msg(或其别名参数msg)定义任务失败时的信息，success_msg定义任务成功时的信息。</p><h3 id="_5-5-any-errors-fatal" tabindex="-1"><a class="header-anchor" href="#_5-5-any-errors-fatal" aria-hidden="true">#</a> 5.5 any_errors_fatal</h3><p>如果想让某个失败的任务直接导致整个play的失败，可在play级别使用any_errors_fatal指令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- hosts: nginx
  gather_facts: no
  any_errors_fatal: true
  tasks:
    - fail:
        msg: &quot;oh, not me&quot;
      when: inventory_hostname == groups[&#39;nginx&#39;][0]
    - debug:
        msg: &quot;hello&quot;

- hosts: localhost
  gather_facts: no
  tasks:
    - debug:
        msg: &quot;HELLO WORLD&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将any_errors_fatal设置为true后，nginx组第一个节点只要一开始执行fail任务，整个playbook中所有后续任务都将不再执行，就连其它play也一样不执行。</p><p>注意观察playbook的执行结果，它将提示&quot;NO MORE HOSTS LEFT&quot;：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>........
TASK [fail] *********************
fatal: [192.168.200.42]: FAILED! =&gt; {&quot;changed&quot;: false, &quot;msg&quot;: &quot;oh, not me&quot;}
skipping: [192.168.200.43]
skipping: [192.168.200.44]

NO MORE HOSTS LEFT **************

PLAY RECAP *************
.........
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-max-fail-percentage" tabindex="-1"><a class="header-anchor" href="#_5-6-max-fail-percentage" aria-hidden="true">#</a> 5.6 max_fail_percentage</h3><p>略</p><h2 id="_6-在循环语句中使用条件语句" tabindex="-1"><a class="header-anchor" href="#_6-在循环语句中使用条件语句" aria-hidden="true">#</a> 6 在循环语句中使用条件语句</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 只打印大于5的值
tasks:
    - command: echo {{ item }}
      loop: [ 0, 2, 4, 6, 8, 10 ]
      when: item &gt; 5
# 确保将mariadb-server安装到根分区且根分区的可用空间要大于300M
- name: install mariadb-server if enough space on root
  yum: 
    name: mariadb-server
    state；拉特st
  loop: &quot;{{ ansible_mounts }}&quot;
  when: item.mount == &quot;/&quot; and item.size_available &gt; 300000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>转载链接：https://www.cnblogs.com/breezey/p/10996632.html</p></blockquote>`,106),d=[l];function t(r,u){return i(),n("div",null,d)}const o=e(a,[["render",t],["__file","playbook-if.html.vue"]]);export{o as default};
