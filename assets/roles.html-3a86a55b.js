import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,b as e,t as l,e as n}from"./app-f1a45f61.js";const r={},v=n(`<h1 id="_4-6-巧用roles" tabindex="-1"><a class="header-anchor" href="#_4-6-巧用roles" aria-hidden="true">#</a> 4.6 巧用Roles</h1><h2 id="_1-如何重用playbook" tabindex="-1"><a class="header-anchor" href="#_1-如何重用playbook" aria-hidden="true">#</a> 1 如何重用Playbook</h2><p>不能站在巨人肩膀上的编程语言不是好语言，支持重用机制会节省重复的调研工作上浪费大量的时间，当然也会提高可维护性。</p><p>Playbook支持两种重用机制，一种是重用静态Playbook脚本，另外一种是类似于编程语言中函数的机制。</p><ul><li>include语句 - 重用静态的Playbook脚本，使用起来简单、直接。</li><li>role语言 - Playbook的“函数机制”，使用方法稍复杂、功能强大。是Playbook脚本的共享平台ansible galaxy主要的分享方式</li></ul><p>组织文件的方式均使用include指令，但随着版本的更迭，Ansible对这方面做了更为细致的区分。虽然目前仍然支持include，但早已纳入废弃的计划，所以现在不要再使用include指令。</p><ul><li><p>对于playbook(或play)或task，可以使用include_xxx或import_xxx指令：</p><p>(1).include_tasks和import_tasks用于引入外部任务文件；</p><p>(2).import_playbook用于引入playbook文件；</p><p>(3).include可用于引入几乎所有内容文件，但建议不要使用它；</p></li><li><p>对于handler，因为它本身也是task，所以它也能使用include_tasks、import_tasks来引入，但是这并不是想象中那么简单，后文再细说。</p></li><li><p>对于variable，使用include_vars(这是核心模块提供的功能)或其它组织方式(如vars_files)，没有对应的import_vars。</p></li></ul><p>后文要介绍的Role，使用include_role或import_role或roles指令。</p><p>既然某类内容文件既可以使用include_xxx引入，也可以使用import_xxx引入，对于我们来说，就有必要去搞清楚它们有什么区别。</p><p>本文最后我会详细解释它们，现在我先把结论写在这：</p><p>(1).include_xxx指令是在遇到它的时候才加载文件并解析执行，所以它是动态解析的；</p><p>(2).import_xxx是在解析playbook的时候解析的，也就是说在执行playbook之前就已经解析好了，所以它也称为静态加载。</p><h2 id="_2-roles目录结构" tabindex="-1"><a class="header-anchor" href="#_2-roles目录结构" aria-hidden="true">#</a> 2 roles目录结构</h2><p>Role可以组织任务、变量、handler以及其它一些内容，所以一个完整的Role里包含的目录和文件可能较多，手动去创建所有这些目录和文件是一件比较烦人的事，好在可以使用ansible-galaxy init ROLE_NAME命令来快速创建一个符合Role文件组织规范的框架。</p><p>例如，下面创建了一个名为first_role的Role：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ansible-galaxy init first_role
$ tree first_role/
first_role/            \\\\ 角色名称
├── defaults           \\\\ 为当前角色设定默认变量时使用此目录，应当包含一个main.yml文件；
│   └── main.yml        
├── files              \\\\ 存放有copy或script等模块调用的文件
├── handlers           \\\\ 此目录应当包含一个main.yml文件，用于定义各角色用到的各handler
│   └── main.yml
├── meta               \\\\ 应当包含一个main.yml，用于定义角色的特殊设定及其依赖关系；1.3及以后版本支持
│   └── main.yml
├── README.md
├── tasks              \\\\ 至少包含一个名为main.yml的文件，定义了此角色的任务列表
│   └── main.yml
├── templates          \\\\ template模块会自动在此目录中寻找Jinja2模板文件
├── tests
│   ├── inventory
│   └── test.yml
└── vars              \\\\ 应当包含一个main.yml，用于定义此角色用到的变量
    └── main.yml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Role中有两个地方可以定义变量：</p><p>(1).roles/xxx/vars/main.yml</p><p>(2).roles/xxx/defaults/main.yml</p><p>从目录名称中可以看出，defaults/main.yml中用于定义Role的默认变量，那么显然，vars/main.yml用于定义其它变量。这两个文件之间的区别在于，defaults/main.yml中定义的变量优先级低于vars/main.yml中定义的变量。事实上，defaults/main.yml中的变量优先级几乎是最低的，基本上其它任何地方定义的变量都可以覆盖它。</p><blockquote><p>通常会将每个Role放在一个称为roles的目录下。</p></blockquote><p>可以使用ansible-galaxy init --help查看更多选项。比如，使用--init-path选项指定创建的Role路径：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible-galaxy init --init-path /etc/ansible/roles first_role
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不难发现文件大多命名为main.yml，这是Role在使用到它们的时候默认加载的文件名，如果换成其它名称，则需要手动使用include_xxx或import_xxx去加载。另一方面，这些目录下可能还包含其它yml文件，比如tasks目录下有多个任务文件，那么需要在这些main.yml文件中使用include_xxx或import_xxx去加载其它外部文件。</p><p>有了Role之后，就可以将Role当作一个不可分割的任务整体来对待，一个Role相当于是一个完整的功能。但在此需要明确一个层次上的概念，Role只是用于组织一个或多个任务，原来在play级别中使用tasks指令来定义任务，现在使用roles指令来引入Role中定义的任务。当然，roles指令和tasks指令并不冲突，它们可以共存。通过下面的图，应能帮助理解Role的角色。</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210316113538941.png" alt="image-20210316113538941"></p><p>既然Role是一个完整的任务体系，拥有Role之后就可以去使用它，或者也可以分发给别人使用，但是一个Role仅仅只是目录而已，如何去使用这个Role呢？</p><h2 id="_3-组织-task" tabindex="-1"><a class="header-anchor" href="#_3-组织-task" aria-hidden="true">#</a> 3 组织 task</h2><p>在此前的所有示例中，一直都是将所有任务编写在单个playbook文件中。但Ansible允许我们将任务分离到不同的文件中，然后去引入外部任务文件。</p><p>用示例来解释会非常简单。</p><p>假设，两个playbook文件pb1.yml和pb2.yml。pb1.yml文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: play1
  hosts: localhost
  gather_facts: false
  tasks:
    - name: task1 in play1
      debug:
        msg: &quot;task1 in play1&quot;

  # - include_tasks: pb2.yml
    - import_tasks: pb2.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pb2.yml文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: task2 in play1
  debug:
    msg: &quot;task2 in play1&quot;

- name: task3 in play1
  debug:
    msg: &quot;task3 in play1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是在pb1.yml文件中通过import_tasks引入了额外的任务文件pb2.yml，对于此处来说，将import_tasks替换成include_tasks也能正确工作，不会有任何影响。</p><blockquote><p>执行结果有差别：import_tasks，相当于有三个task，include_tasks，相当于有四个task，多了一个included的任务</p></blockquote><p>但如果是在循环中(比如loop)，则只能使用include_tasks而不能再使用import_tasks。</p><p><strong>在循环中include文件</strong></p><p>修改pb1.yml和pb2.yml文件内容：</p><p>pb1.yml内容如下，注意该文件中的include_tasks指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: play1
  hosts: localhost
  gather_facts: false
  tasks:
    - name: task1 in play1
      debug:
        msg: &quot;task1 in play1&quot;

    - name: include two times
      include_tasks: pb2.yml
      loop:
        - ONE
        - TWO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),t=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: task2 in play1
  debug:
    msg: &quot;task2 in {{item}}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行pb1.yml文件，观察执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PLAY [play1] *****************************************************************************************************************************************************************************************************************************

TASK [task1 in play1] ********************************************************************************************************************************************************************************************************************
ok: [localhost] =&gt; {
    &quot;msg&quot;: &quot;task1 in play1&quot;
}

TASK [include two times] *****************************************************************************************************************************************************************************************************************
included: /etc/ansible/playbooks/pb2.yml for localhost
included: /etc/ansible/playbooks/pb2.yml for localhost

TASK [task2 in play1] ********************************************************************************************************************************************************************************************************************
ok: [localhost] =&gt; {
    &quot;msg&quot;: &quot;task2 in ONE&quot;
}

TASK [task2 in play1] ********************************************************************************************************************************************************************************************************************
ok: [localhost] =&gt; {
    &quot;msg&quot;: &quot;task2 in TWO&quot;
}

PLAY RECAP *******************************************************************************************************************************************************************************************************************************
localhost                  : ok=5    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u=e("p",null,"分析一下上面的执行流程：",-1),o=e("p",null,"(1).解析playbook文件pb1.yml",-1),c=e("p",null,"(2).执行第一个play",-1),m=e("p",null,"(3).当执行到pb1.yml中的第二个任务时，该任务在循环中，且其作用是加载外部任务文件pb2.yml",-1),b=e("p",null,"(4).开始循环，每轮循环都加载、解析并执行pb2.yml文件中的所有任务",-1),p=n(`<p>如果将上面loop循环中的include_tasks换成import_tasks呢？语法会报错，后面我会详细解释。</p><h2 id="_4-组织handler" tabindex="-1"><a class="header-anchor" href="#_4-组织handler" aria-hidden="true">#</a> 4 组织handler</h2><p>handler其本质也是task，所以也可以使用include_tasks或import_tasks来加载外部任务文件。但是它们引入handler任务文件的方式有很大的差别。</p><p>先看include_tasks引入handler任务文件的示例：</p><p>pb1.yml的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: play1
  hosts: localhost
  gather_facts: false
  handlers:
    - name: h1
      include_tasks: handler1.yml

  tasks:
    - name: task1 in play1
      debug:
        msg: &quot;task1 in play1&quot;
      changed_when: true
      notify:
        - h1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意在tasks的任务中加了一个指令changed_when: true，它用来强制指定它所在任务的changed状态，如果条件为真，则changed=1，否则changed=0。使用这个指令是因为debug模块默认不会引起changed=1行为，所以只能使用该指令来强制其状态为changed=1。</p><p>当Ansible监控到了changed=1，notify指令会生效，它会去触发对应的handler，它触发的handler的名称是handler1，其作用是使用include_tasks指令引入handler1.yml文件。</p><p>下面是handler1.yml文件的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: h11
  debug:
    msg: &quot;task h11&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意两个名称，一个是notify触发handler的任务名称(&quot;h1&quot;)，一个是引入文件中任务的名称(&quot;h11&quot;)，它们是两个任务。再来看import_tasks引入handler文件的示例，注意观察名称的不同点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: play1
  hosts: localhost
  gather_facts: false
  handlers:
    - name: h2
      import_tasks: handler2.yml

  tasks:
    - name: task1 in play1
      debug:
        msg: &quot;task1 in play1&quot;
      changed_when: true
      notify:
        - h22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是使用import_tasks引入的handler2.yml文件的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: h22
  debug:
    msg: &quot;task h22&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引入handler任务文件的时候，include_tasks和import_tasks的区别表现在：</p><p>(1).使用include_tasks时，notify指令触发的handler名称是include_tasks任务本身的名称</p><p>(2).使用import_tasks时，notify指令触发的handler名称是import_tasks所引入文件内的任务名称</p><p>其实分析一下就很容易理解为什么notify触发的名称要不同：</p><p>(1).include_tasks是在遇到这个指令的时候才引入文件的，所以notify不可能去触发外部handler文件里的名称(h11)，外部handler文件中的名称在其引入之前根本就不存在</p><p>(2).import_tasks是在解析playbook的时候引入的，换句话说，在执行play之前就已经把外部handler文件的内容引入并替换在handler的位置处，而原来的名称(h2)则被覆盖了</p><p>最后，不要忘了import_tasks或include_tasks自身也是任务，既然是任务，就能使用task层次的指令。</p><p>但这两个指令对task层次指令的处理方式不同，相关细节仍然保留到后文统一解释。</p><h2 id="_5-组织变量" tabindex="-1"><a class="header-anchor" href="#_5-组织变量" aria-hidden="true">#</a> 5 组织变量</h2><p>在Ansible中有很多种定义变量的方式，想要搞清楚所有这些散布各个角落的知识，是一个很大的难点。好在，我们没必要去过多关注，只需要掌握几个常用的变量定义和应用的方式即可。此处我要介绍的是将变量定义在外部文件中，然后去引入这些外部文件中的变量。</p><p>引入保存了变量的文件有两种方式：include_vars和vars_files。此外，还可以在命令行中使用-e或--extra-vars选项来引入。</p><h3 id="_5-1-vars-files" tabindex="-1"><a class="header-anchor" href="#_5-1-vars-files" aria-hidden="true">#</a> 5.1 vars_files</h3><p>先介绍vars_files，它是一个play级别的指令，可用于在解析playbook的阶段引入一个或多个保存了变量的外部文件。</p><p>例如，pb.yml文件如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: play1
  hosts: localhost
  gather_facts: false
  vars_files:
    - varfile1.yml
    - varfile2.yml
  tasks:
    - debug:
        msg: &quot;var in varfile1: {{var1}}&quot;
    - debug:
        msg: &quot;var in varfile2: {{var2}}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pb.yml文件通过vars_files引入了两个变量文件，变量文件的写法要求遵守YAML或JSON格式。下面是这两个文件的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下面是varfile1.yml文件的内容
---
var1: &quot;value1&quot;
var11: &quot;value11&quot;

# 下面是varfile2.yml文件的内容
---
var2: &quot;value2&quot;
var22: &quot;value22&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是，vars_files指令是play级别的指令，且是在解析playbook的时候加载并解析的，所以所引入变量的变量是play范围内可用的，其它play不可使用这些变量。</p><h3 id="_5-2-include-vars" tabindex="-1"><a class="header-anchor" href="#_5-2-include-vars" aria-hidden="true">#</a> 5.2 include_vars</h3><p>include_vars指令也可用于引入外部变量文件，它和vars_files不同。一方面，include_vars是模块提供的功能，它是一个实实在在的任务，所以在这个任务执行之后才会创建变量。另一方面，既然include_vars是一个任务，它就可以被一些task级别的指令控制，如when指令。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: play1
  hosts: localhost
  gather_facts: false
  tasks:
    - name: include vars from files
      include_vars: varfile1.yml
      when: 3 &gt; 2
       
    - debug:
        msg: &quot;var in varfile1: {{var1}}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中引入变量文件的方式是直接指定文件名include_vars: varfile1.yml，也可以明确使用file参数来指定路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: include vars from files
  include_vars:
    file: varfile1.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要引入多个文件，可以使用循环的方式。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: include two var files
  include_vars:
    file: &quot;{{item}}&quot;
  loop:
    - varfile1.yml
    - varfile2.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意，include_vars在引入文件的时候要求文件已经存在，如果有多个可能的文件但不确定文件是否已经存在，可以使用with_first_found指令或lookup的first_found插件，它们作用相同，都用于从文件列表中找出存在的文件，找到后立即停止，之前就曾提到过with_xxx的本质是调用lookup对应的插件。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tasks:
  - name: include vars from files
    include_vars:
      file: &quot;{{item}}&quot;
    with_first_found:
      - varfile1.yml
      - varfile2.yml
      - default.yml

# 等价于：
tasks:
  - name: include vars from files
    include_vars:
      file: &quot;{{ lookup(&#39;first_found&#39;,any_files) }}&quot;
    vars:
      any_files:
        - varfile1.yml
        - varfile2.yml
        - default.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，include_vars还能从目录中导入多个文件，默认会递归到子目录中。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: Include all files in vars/all
  include_vars:
    dir: vars/all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-extra-vars选项" tabindex="-1"><a class="header-anchor" href="#_5-3-extra-vars选项" aria-hidden="true">#</a> 5.3 --extra-vars选项</h3><p>ansible-playbook命令的-e选项或--extra-vars选项也可以用来定义变量或引入变量文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 定义单个变量
$ ansible-playbook -e &#39;var1=&quot;value1&quot;&#39; xxx.yml

# 定义多个变量
$ ansible-playbook -e &#39;var1=&quot;value1&quot; var2=&quot;value2&quot;&#39; xxx.yml

# 引入单个变量文件
$ ansible-playbook -e &#39;@varfile1.yml&#39; xxx.yml

# 引入多个变量文件
$ ansible-playbook -e &#39;@varfile1.yml&#39; -e &#39;@varfile2.yml&#39; xxx.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为是通过选项的方式来定义变量的，所以它所定义的变量是全局的，对所有play都有效。</p><p>通常来说不建议使用-e选项，因为这对用户来说是不透明也不友好的，要求用户记住要定义哪些变量。</p><h2 id="_6-组织playbook文件" tabindex="-1"><a class="header-anchor" href="#_6-组织playbook文件" aria-hidden="true">#</a> 6 组织playbook文件</h2><p>当单个playbook文件中的任务过多时，或许就是将任务划分到多个文件中的时刻。</p><p>import_playbook指令可用于引入playbook文件，它是一个play级别的指令，其本质是引入外部文件中的一个或多个play。</p><p>例如，pb.yml是入口playbook文件，此文件中引入了其它playbook文件，其内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
# 引入其它playbook文件
- import_playbook: pb1.yml
- import_playbook: pb2.yml

# 文件本身的play
- name: play in self
  hosts: localhost
  gather_facts: false
  tasks:
    - debug: &#39;msg=&quot;file pb.yml&quot;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pb1.yml，pb2.yml文件都是一个完整的playbook，它可以包含一个或多个play</p><h2 id="_7-playbook-调用" tabindex="-1"><a class="header-anchor" href="#_7-playbook-调用" aria-hidden="true">#</a> 7 playbook 调用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible-playbook -i /root/xxx.yml  /root/app/main.yml  --limit &quot;lala_xxx&quot; -e &quot;user=wawo&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析： -i 指定要运行的主机清单 --limit 指定运行的ip地址 -e 指定运行的外部参数</p><p>运行的控制 YAML 文件为： <code>/root/app/main.yml</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- hosts: all
  roles:
    - xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hosts指定所有(all)的主机，但是由于在外部已经指定了主机的配置，所以all由外部指定参数来进行</p><p>roles指定要执行的具体剧本</p><p>**roles **</p><ol><li><p>首先执行meta下的main.yml文件内容 可以设置该role和其它role之前的关联关系。 dependencies</p></li><li><p>gather_facts任务</p></li><li><p>pre_tasks指令中的任务</p></li><li><p>pre_tasks中触发的所有handler</p></li><li><p>roles指令加载的Role,执行tasks下的main.yml文件内容</p></li><li><p>tasks指令中的任务</p></li><li><p>roles和tasks中触发的所有handler, 使用了notify后，会调用 handlers 目录下的main.yml文件</p></li><li><p>post_tasks指令中的任务</p></li><li><p>post_tasks中触发的所有handler</p></li></ol><blockquote><p>用到的变量，会直接加载defaults目录下的main.yml文件,或者vars目录下,</p><p>用到的需要拷贝到远程机器的文件，会放到files目录下,</p><p>用到模板文件，会放到 templates 目录下</p></blockquote><p><strong>写好Role之后就是使用Role，即在一个入口playbook文件中去加载Role。</strong></p><p>加载Role的方式有多种：</p><p>(1).roles指令：play级别的指令，在playbook解析阶段加载对应文件，这是传统的引入Role的方式</p><p>(2).import_role指令：task级别的指令，在playbook解析阶段加载对应文件</p><p>(3).include_role指令：task级别的指令，在遇到该指令的时候才加载Role对应文件</p><p>上面通过roles指令来定义要解析和执行的Role，可以同时指定多个Role，且也可以加上role:参数，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>roles:
  - first_role
  - role: seconde_role
  - role: third_role
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用include_role和import_role来引入Role，但需注意，这两个指令是tasks级别的，也正因为它们是task级别，使得它们可以和其它task共存。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- hosts: localhost
  gather_facts: false
  tasks:
    - debug:
        msg: &quot;before first role&quot;
    - import_role:
         name: first_role
    - include_role:
      name: second_role
    - debug:
       msg: &quot;after second role&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这三种引入Role的方式都可以为对应的Role传递参数，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- hosts: localhost
  gather_facts: false
  roles:
    - role: first_role
      varvar: &quot;valuevalue&quot;
      vars:
        var1: value1

tasks:
- import_role:
    name: second_role
  vars:
    var1: value1
- include_role:
    name: third_role
  vars:
    var1: value1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候需要让某个Role按需执行，比如对于目标节点是CentOS 7时执行Role7而不执行Role6，目标节点是CentOS 6时执行Role6而不是Role7，这可以使用when指令来控制。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- hosts: localhost
  gather_facts: false
  roles:
  # 下面是等价的，分别采用YAML和Json语法书写
    - role: first_role
      when: xxx
    - {role: ffirst_role, when: xxx}
  tasks:
  - import_role:
      name: second_role
    when: xxx
  - include_role:
      name: third_role
    when: xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，在roles、import_role和include_role三种方式中，when指令的层次。</p><p>通常来说，无论使用哪种方式来引入Role都可以，只是某些场景下需要小心一些陷阱。</p><h2 id="_8-playbook解析、动态加载和静态加载" tabindex="-1"><a class="header-anchor" href="#_8-playbook解析、动态加载和静态加载" aria-hidden="true">#</a> 8 playbook解析、动态加载和静态加载</h2><p>还是这个结论：</p><ol><li><p>import_xxx是在playbook的解析阶段加载文件</p></li><li><p>include_xxx是遇到指令的时候加载文件</p></li></ol><p>只要理解了这两个结论，所有相关的现象都能理解。</p><p>那么playbook的解析是什么意思，它做了什么事呢？</p><p>第一个要明确的是playbook解析处于哪个阶段执行：inventory解析完成后、play开始执行前的阶段。</p><p>第二个要明确的是playbook解析做了哪些哪些事。一个简单又直观的描述是，playbook解析过程中，会扫描playbook文件中的内容，然后检查语法并转换成Ansible认识的内部格式，以便让Ansible去执行。</p><p>更具体一点，在解析playbook期间：</p><p>1.当在playbook文件中遇到了roles、include、import_xxx指令，则会将它们指定的文件内容&quot;插入到&quot;指令位置处，也即原文替换，这个过程对我们来说是透明的。实际上并非真的会插入替换，稍后我会再补充，但这样理解会更容易些；</p><ul><li><p>(1).roles、include、import_xxx同属一类，它们都是静态加载，都在playbook解析阶段加载文件，而include_xxx属于另一类，是动态加载，遇到指令的时候临时去加载文件；</p></li><li><p>(2).之所以有这么多看似功能重复的指令，这和Ansible版本的发展有关，不同的版本可能会小有区别；</p></li><li><p>(3).早期版本只有include指令，所以它的行为有些混乱，建议不要对其做太多考究，也尽量不要使用该指令；</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、ansible中的include, include_tasks 和 import_tasks 的差别
include 被 deprecated（不建议使用）了. 建议使用 include_tasks 和 import_tasks

include_tasks
是动态的: 在运行时展开. when只应用一次. 被include的文件名可以使用变量.

import_tasks
是静态的: 在加载时展开. when在被import的文件里的每个task, 都会重新检查一次. 因为是加载时展开的, 文件名的变量不能是动态设定的.
请确保文件名中使用到的变量被定义在vars中、vars_files中、或者extra-vars中，静态的import不支持其他方式传入的变量。

When using static includes, ensure that any variables used in their names are defined in vars/vars_files or extra-vars passed in from the command line. Static includes cannot use variables from inventory sources like group or host vars.
除了上述不同之处，在使用&quot;循环操作&quot;和&quot;条件判断&quot;时，&quot;include_tasks&quot;和&quot;import_tasks&quot;也有很多不同点需要注意，注意点如下。
如果想要对包含的任务列表进行循环操作，则只能使用&quot;include_tasks&quot;关键字，不能使用&quot;import_tasks&quot;关键字，&quot;import_tasks&quot;并不支持循环操作，
也就是说，使用&quot;loop&quot;关键字或&quot;with_items&quot;关键字对include文件进行循环操作时，只能配合&quot;include_tasks&quot;才能正常运行。
when关键字对&quot;include_tasks&quot;和&quot;import_tasks&quot;的实际操作有着本质区别，区别如下：
当对&quot;include_tasks&quot;使用when进行条件判断时，when对应的条件只会应用于&quot;include_tasks&quot;任务本身，当执行被包含的任务时，不会对这些被包含的任务重新进行条件判断。
当对&quot;import_tasks&quot;使用when进行条件判断时，when对应的条件会应用于被include的文件中的每一个任务，当执行被包含的任务时，会对每一个被包含的任务进行同样的条件判断。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我想各位已经意识到了，使用include_tasks时，这个指令自身占用一个任务，使用import_tasks的时候，这个指令自身没有任务，它所在的任务会在解析playbook的时候被其加载的子任务覆盖。</p><ul><li>无法使用--list-tags列出include_xxx中的tags，无法使用--list-tasks列出include_xxx中的任务，因为它们都是临时动态加载的。</li></ul><h2 id="_9-ansible-galaxy和collection" tabindex="-1"><a class="header-anchor" href="#_9-ansible-galaxy和collection" aria-hidden="true">#</a> 9 Ansible Galaxy和Collection</h2><p>很多时候我们想要实现的Ansible部署需求其实别人已经写好了，所以我们自己不用再动手写(甚至不应该自己写)，直接去网上找别人已经写好的轮子即可。</p><p>Ansible Galaxy(https://galaxy.ansible.com/ )是一个Ansible官方的Role仓库，世界各地的人都在里面分享自己写好的Role，我们可以直接去Galaxy上搜索是否有自己想要的Role，如果有符合自己心意的，直接安装便可。当然，我们也可以将写好的Role分享出去给别人使用。</p><p>Ansible提供了一个ansible-galaxy命令行工具，可以快速创建、安装、管理由该工具维护的Role。它常用的命令有：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装Role:
ansible-galaxy install username.role_name

# 移除Role:
ansible-galaxy remove username.role_name

# 列出已安装的Role:
ansible-galaxy list

# 查看Role信息:
ansible-galaxy info username.role_name

# 搜索Role:
ansible-galaxy search role_name

# 创建Role
ansible-galaxy init role_name

# 此外还有：&#39;delete&#39;,&#39;import&#39;, &#39;setup&#39;, &#39;login&#39;
# 它们都用于管理galaxy.ansible.com个人账户或里面的Role
# 无视它们
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然Ansible Galaxy中有大量的Role，但有时候我们也会在Github上搜索Role，而且Galaxy仓库上的Role大多也都在Github上。ansible-galaxy install也可以直接从git上下载安装Role。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible-galaxy install -p roles/ git+https://github.com/chusiang/helloworld.ansible.role.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Ansible Collection</strong></p><p>对于文件组织结构，在Ansible 2.8以前只支持Role的概念，但Ansible 2.8中添加了一项目前仍处于实验性的功能Collection，它以包的管理模式来结构化管理Ansible playbook涉及到的各个文件。</p><p>比如，我们可以将整个写好的功能构建、打包，然后分发出去，别人就可以使用ansible-galaxy(要求Ansible 2.9)去安装这个打包好的文件，这为自动化构建和部署带来了很大的便利。</p><blockquote><p>参考链接：</p><p>https://blog.51cto.com/cloumn/blog/1567</p></blockquote>`,107);function h(i,x){return a(),d("div",null,[v,e("p",null,"pb2.yml内容如下，注意该文件中的"+l(i.item)+"变量引用：",1),t,e("p",null,"上面是在loop循环中加载两次pb2.yml文件，该文件中的任务被执行了两次，并且在pb2.yml中能够引用外部文件(pb1.yml)中定义的变量"+l(i.item)+"。",1),u,o,c,m,b,e("p",null,"(5).退出正是因为include_tasks指令是在遇到它的时候才进行加载解析以及执行，所以在pb2.yml中才能使用变量"+l(i.item)+"。",1),p])}const _=s(r,[["render",h],["__file","roles.html.vue"]]);export{_ as default};
