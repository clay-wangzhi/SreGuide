import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-de4b287a.js";const i={},l=e(`<h1 id="_5-1-自定义变量" tabindex="-1"><a class="header-anchor" href="#_5-1-自定义变量" aria-hidden="true">#</a> 5.1 自定义变量</h1><p><strong>简单说明</strong></p><p>ansible支持变量，用于存储会在整个项目中重复使用到的一些值。以简化项目的创建与维护，降低出错的机率。</p><p>变量的定义：</p><ul><li>变量名应该由字母、数字下划数组成</li><li>变量名必须以字母开头</li><li>ansible内置关键字不能作为变量名</li></ul><h1 id="_1-在inventory中定义变量" tabindex="-1"><a class="header-anchor" href="#_1-在inventory中定义变量" aria-hidden="true">#</a> 1. 在Inventory中定义变量</h1><h2 id="_1-1-定义主机变量" tabindex="-1"><a class="header-anchor" href="#_1-1-定义主机变量" aria-hidden="true">#</a> 1.1. 定义主机变量</h2><h3 id="_1-1-1-内置主机变量" tabindex="-1"><a class="header-anchor" href="#_1-1-1-内置主机变量" aria-hidden="true">#</a> 1.1.1. 内置主机变量</h3><p>所谓内置变量其实就是ansible.cfg配置文件中的选项，在其前加上<code>ansible_</code>即成为内置变量。当然内置变拥有比ansible.cfg中选项更高的优先级，而且针对不同的主机，可以定义不同的值。</p><p>官方链接：https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#connecting-to-hosts-behavioral-inventory-parameters</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210309153531453.png" alt="image-20210309153531453"></p><p>下面是一个简单的示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定了三台主机，三台主机的用密码分别是P@ssw0rd、123456、45789，指定的ssh连接的用户名分别为root、breeze、bernie，ssh 端口分别为22、22、3055 ，这样在ansible命令执行的时候就不用再指令用户和密码等了</span>

<span class="token punctuation">[</span>test<span class="token punctuation">]</span>
<span class="token number">192.168</span>.1.1 <span class="token assign-left variable">ansible_user</span><span class="token operator">=</span>root <span class="token assign-left variable">ansible_password</span><span class="token operator">=</span><span class="token string">&#39;P@ssw0rd&#39;</span>
<span class="token number">192.168</span>.1.2 <span class="token assign-left variable">ansible_user</span><span class="token operator">=</span>breeze <span class="token assign-left variable">ansible_password</span><span class="token operator">=</span><span class="token string">&#39;123456&#39;</span>
<span class="token number">192.168</span>.1.3 <span class="token assign-left variable">ansible_user</span><span class="token operator">=</span>bernie <span class="token assign-left variable">ansible_port</span><span class="token operator">=</span><span class="token number">3055</span> <span class="token assign-left variable">ansible_password</span><span class="token operator">=</span><span class="token string">&#39;456789&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-定义主机组变量" tabindex="-1"><a class="header-anchor" href="#_1-2-定义主机组变量" aria-hidden="true">#</a> 1.2. 定义主机组变量</h2><p>变量也可以通过组名，应用到组内的所有成员：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># test组中包含两台主机，通过对test组指定vars变更，相应的host1和host2相当于相应的指定了ntp_server和proxy变量参数值</span>

<span class="token punctuation">[</span>test<span class="token punctuation">]</span>
host1
host2
<span class="token punctuation">[</span>test:vars<span class="token punctuation">]</span>
<span class="token assign-left variable">ntp_server</span><span class="token operator">=</span><span class="token number">192.168</span>.1.10
<span class="token assign-left variable">proxy</span><span class="token operator">=</span><span class="token number">192.168</span>.1.20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主机组变量示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下面是一个示例，指定了一个武汉组有web1、web2；随州组有web3、web4主机；又指定了一个湖北组，同时包含武汉和随州；同时为该组内的所有主机指定了2个vars变量。设定了一个组中国组，包含湖北、湖南。

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-在playbook中定义变量" tabindex="-1"><a class="header-anchor" href="#_2-在playbook中定义变量" aria-hidden="true">#</a> 2. 在Playbook中定义变量</h1><h2 id="_2-1-变量的定义方式" tabindex="-1"><a class="header-anchor" href="#_2-1-变量的定义方式" aria-hidden="true">#</a> 2.1. 变量的定义方式</h2><h3 id="_2-1-1-通过vars关键字定义" tabindex="-1"><a class="header-anchor" href="#_2-1-1-通过vars关键字定义" aria-hidden="true">#</a> 2.1.1. 通过vars关键字定义</h3><p>下面是一个简单示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> name： use vars define invrionmemnt
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> test
  <span class="token key atrule">user</span><span class="token punctuation">:</span> ansible
  <span class="token key atrule">vars</span><span class="token punctuation">:</span> 
    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">server_name</span><span class="token punctuation">:</span> localhost
    <span class="token key atrule">conf_file</span><span class="token punctuation">:</span> /etc/nginx/conf/default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-2-通过vars-files关键字引入变量文件" tabindex="-1"><a class="header-anchor" href="#_2-1-2-通过vars-files关键字引入变量文件" aria-hidden="true">#</a> 2.1.2. 通过vars_files关键字引入变量文件</h3><p>下面是一个简单示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">favcolor</span><span class="token punctuation">:</span> blue
  <span class="token key atrule">vars_files</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> vars/external_vars.yml
    <span class="token punctuation">-</span> vars/user_vars.yml

<span class="token comment"># vars/user_vars.yml示例：</span>

<span class="token key atrule">users</span><span class="token punctuation">:</span>
  <span class="token key atrule">bjones</span><span class="token punctuation">:</span>
    <span class="token key atrule">first_name</span><span class="token punctuation">:</span> Bob
    <span class="token key atrule">last_name</span><span class="token punctuation">:</span> Jones
    <span class="token key atrule">home_dirs</span><span class="token punctuation">:</span> /users/bjones
  <span class="token key atrule">acook</span><span class="token punctuation">:</span>
    <span class="token key atrule">first_name</span><span class="token punctuation">:</span> Anne
    <span class="token key atrule">last_name</span><span class="token punctuation">:</span> Cook
    <span class="token key atrule">home_dirs</span><span class="token punctuation">:</span> /users/acook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>变量的定义格式是成键值对出现的，键值对之间可以嵌套，最终形成一个大字典</p></blockquote><p>和vars一样，只不过它是将变量以字典格式定义在独立的文件中，且<code>vars_files</code>不能定义在task层次，只能定义在play层次。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
    - hosts: localhost
      vars_files: 
        - /tmp/var_file1.yml
        - var_file2.yml
      tasks: 
         - debug: msg=&quot;{{var1}} {{var2}}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面var_file2.yml使用的是相对路径，基于playbook所在的路径。例如该playbook为/tmp/x.yml，则var_file2.yml也应该在/tmp下。当然，完全可以使用绝对路径。</p><h3 id="_2-1-3-在playbook中通过host-vars和group-vars目录定义变量" tabindex="-1"><a class="header-anchor" href="#_2-1-3-在playbook中通过host-vars和group-vars目录定义变量" aria-hidden="true">#</a> 2.1.3. 在playbook中通过host_vars和group_vars目录定义变量</h3><p>下面这是一个项目的playbook目录结构。这个项目中，包含一个ansible.cfg文件，一个inventory文件，一个playbook.yml文件，一个<code>group_vars</code>目录和一个<code>host_vars</code>目录:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># tree /etc/ansible/playbooks/project
/etc/ansible/playbooks/project
├── ansible.cfg
├── group_vars
│   ├── datacenter1
│   ├── datacenter2
│   └── datacenters
├── host_vars
│   ├── demo1.example.com
│   ├── demo2.example.com
│   ├── demo3.example.com
│   └── demo4.example.com
├── inventory
└── playbook.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中inventory文件的示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[datacenter1]
demo1.example.com
demo2.example.com

[datacenter2]
demo3.example.com
demo4.example.com

[datacenters:children]
datacenter1
datacenter2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到group_vars目录中，定义了三个文件，分别以inventory文件中的三个主机组命名，所以这三个文件中定义的就分别是这三个组可以使用的变量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat datacenter1
package: httpd

# cat datacenter2 
package: apache

# cat datacenters 
package: httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在host_vars目录中，定义了三个文件，分别以inventory文件中的四个主机命名，所以这四个文件中定义的就分别是这四个主机可以使用的变量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat demo1.example.com 
package: httpd

# cat demo2.example.com 
package: apache

# cat demo3.example.com 
package: mariadb-server

# cat demo4.example.com 
package: mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>需要说明的是，如果主机组定义的变量与主机冲突，主机变量优先级最高</p></blockquote><h3 id="_2-1-4-注册变量" tabindex="-1"><a class="header-anchor" href="#_2-1-4-注册变量" aria-hidden="true">#</a> 2.1.4. 注册变量</h3><p>在有些时候，可能需要将某一条任务执行的结果保存下来，以便在接下的任务中调用或者做些判断。可以通过register关键字来实现将某一任务结果保存为一个变量。</p><p>下面是个简单的例子，将whoami命令执行的结果注册到变量login：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: register variables
  hosts: test
  tasks:
    - name: capture output of whoami command
      command: whoami
      register: login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册变量的应用场景：</p><ul><li>在一台远端的服务器获取一个目录下的一列表的文件,然后下载这些文件</li><li>在handler执行之前,发现前面一个task发生了changed,然后执行一个指定的task</li><li>获取远端服务器的ssh key的内容,构建出known_hosts文件</li></ul><h3 id="_2-1-5-通过命令行设置变量" tabindex="-1"><a class="header-anchor" href="#_2-1-5-通过命令行设置变量" aria-hidden="true">#</a> 2.1.5. 通过命令行设置变量</h3><p>示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- hosts: &#39;{{ hosts }}&#39;
  remote_user: &#39;{{ user }}&#39;
  tasks:
     - ...
     
ansible-playbook release.yml --extra-vars &quot;hosts=vipers user=starbuck&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以写成类似如下方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--extra-vars &#39;{&quot;hosts&quot;:&quot;vipers&quot;,&quot;user&quot;:&quot;starbuck&quot;}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-2-使用与调试变量" tabindex="-1"><a class="header-anchor" href="#_2-2-使用与调试变量" aria-hidden="true">#</a> 2.2 使用与调试变量</h2><p>我们通过以上5种方式在playbook中定义了各种变量。说到底，最终的目的，还是为了方便使用。下面我们就看一看具体如何使用这些变量。</p><h3 id="_2-2-1-变量的引用" tabindex="-1"><a class="header-anchor" href="#_2-2-1-变量的引用" aria-hidden="true">#</a> 2.2.1. 变量的引用</h3><p>下面是一个变量的基本使用示例，前面的变量定义部分，直接使用的2.1.1中的变量示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> use vars define variables
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> test
  <span class="token key atrule">vars</span><span class="token punctuation">:</span> 
    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">server_name</span><span class="token punctuation">:</span> localhost
    <span class="token key atrule">conf_file</span><span class="token punctuation">:</span> /etc/nginx/conf/default.conf
    
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> print variables
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> echo &quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> http_port <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> server_name <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> conf_file <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;  <span class="token punctuation">&gt;</span> /tmp/text.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在2.1.2中，我们通过<code>vars_files</code>引用了一个文件<code>user_vars.yml</code>，在该文件中定义了一个稍微复杂的字典变量，现在我想要获取<code>users</code>中<code>bjones</code>用户的<code>first_name</code>和<code>acook</code>用户的<code>home_dirs</code>，可以使用如下方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ users.bjones.first_name }}
{{ users.acook.home_dirs }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者如下写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ users[&#39;bjones&#39;][&#39;first_name&#39;] }}
{{ users[&#39;acook&#39;][&#39;home_dirs&#39;] }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-变量的调试输出" tabindex="-1"><a class="header-anchor" href="#_2-2-2-变量的调试输出" aria-hidden="true">#</a> 2.2.2. 变量的调试输出</h3><p>有些时候，我们在引用变量的时候，可能需要知道变量中包含哪些信息，以方便在执行过程中，对变量做些处理。ansible提供一个debug模块用于调试变量输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: register variables
  hosts: test
  tasks:
    - name: capture output of whoami command
      command: whoami
      register: login
    - debug: var=login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后输出如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible-playbook register.yml 

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于输出的debug部分重点说明如下：</p><ul><li>login： 变量名，其值为一个字典</li><li>changed：ansible基于此来判断是否发生了状态改变</li><li>cmd：被调用的命令</li><li>failed：是否运行失败</li><li>rc：返回值，0代表正常，非0代表异常</li><li>stderr：如果出现异常，会在这里显示错误输出</li><li>stderr_lines：按行分割的错误输出</li><li>stdout：如果指令正常运行，则在这里输出返回结果</li><li>stdout：按行分割的返回结果</li></ul><blockquote><p>需要说明的是，通过register注册的变量的结果并不是一成不变的，在不确定返回值的情况下，尽量调试看看输出结果。</p></blockquote><p>关于debug的更多用法说明：</p><p>调试模块，用于在调试中输出信息 常用参数：</p><ul><li>msg：调试输出的消息</li><li>var：将某个变量传递给debug模块，debug会直接将其打印输出</li><li>verbosity：debug的级别</li></ul><p>示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Example that prints the loopback address and gateway for each host</span>
<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span> msg=&quot;System <span class="token punctuation">{</span><span class="token punctuation">{</span> inventory_hostname <span class="token punctuation">}</span><span class="token punctuation">}</span> has uuid <span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_product_uuid <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;

<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span> msg=&quot;System <span class="token punctuation">{</span><span class="token punctuation">{</span> inventory_hostname <span class="token punctuation">}</span><span class="token punctuation">}</span> has gateway <span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_default_ipv4.gateway <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_default_ipv4.gateway is defined

<span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> /usr/bin/uptime
  <span class="token key atrule">register</span><span class="token punctuation">:</span> result

<span class="token punctuation">-</span> <span class="token key atrule">debug</span><span class="token punctuation">:</span> var=result verbosity=2    <span class="token comment">#直接将上一条指令的结果作为变量传递给var，由debug打印出result的值</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Display all variables/facts known for a host
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> var=hostvars<span class="token punctuation">[</span>inventory_hostname<span class="token punctuation">]</span> verbosity=4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意格式，=号左右没有空格</p></blockquote>`,74),t=[l];function d(c,r){return s(),a("div",null,t)}const p=n(i,[["render",d],["__file","custom.html.vue"]]);export{p as default};
