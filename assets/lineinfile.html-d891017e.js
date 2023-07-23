import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as s}from"./app-679550bc.js";const i={},l=s(`<h1 id="_3-2-ansible-lineinfile模块详解" tabindex="-1"><a class="header-anchor" href="#_3-2-ansible-lineinfile模块详解" aria-hidden="true">#</a> 3.2 Ansible lineinfile模块详解</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h2><p>之所以专门说一说这个模块，是因为lineinfile在实际使用中非常有用。</p><p>lineinfile模块用于在源文件中插入、删除、替换行，和sed命令的功能类似，也支持正则表达式匹配和替换。</p><p>实际上，在大多数时候，我们在linux上的操作，就是针对文件的操作，通过配置管理工具对配置文件作统一的配置修改是一个非常酷的功能。</p><p>下面是官方针对该模块的说明：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lineinfile - Ensure a particular line is in a file, or replace an existing line using a back-referenced regular expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简单讲，这个模块就是针对一个文件中行内容的操作。</p><p>下面我们详细说一说其具体可以做的事情。</p><h2 id="_2-修改匹配行" tabindex="-1"><a class="header-anchor" href="#_2-修改匹配行" aria-hidden="true">#</a> 2 修改匹配行</h2><p>下面是一个简单的task示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 将/etc/selinux/config中匹配到以&#39;SELINUX=&#39;开头的行，将其替换为&#39;SELINUX=disabled&#39;</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> modify selinux to disabled
  <span class="token key atrule">lineinfile</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/selinux/config
    <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;^SELINUX=&#39;</span>
    <span class="token key atrule">line</span><span class="token punctuation">:</span> <span class="token string">&#39;SELINUX=disabled&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-在匹配行前或后添加内容" tabindex="-1"><a class="header-anchor" href="#_3-在匹配行前或后添加内容" aria-hidden="true">#</a> 3 在匹配行前或后添加内容</h2><blockquote><p>insertbefore和insertafter指定的正则表达式如果匹配了多行，则默认选中最后一个匹配行，然后在被选中的行前、行后插入。如果明确要指定选中第一次匹配的行，则指定参数firstmatch=yes：</p></blockquote><p>示例文件如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cat /etc/http.conf

Listen 127.0.0.1:80
Listen 80
Port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-在匹配行前添加" tabindex="-1"><a class="header-anchor" href="#_3-1-在匹配行前添加" aria-hidden="true">#</a> 3.1 在匹配行前添加</h3><p>在http.conf文件的<code>Listen 80</code>前面添加一行<code>Listen 8080</code>，task示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: add line before Listen 80
  lineinfile:
    dest: /etc/http.conf
    insertbefore: &#39;^Listen 80&#39;
    line: &#39;Listen 8080&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-在匹配行后添加" tabindex="-1"><a class="header-anchor" href="#_3-2-在匹配行后添加" aria-hidden="true">#</a> 3.2 在匹配行后添加</h3><p>在http.conf文件的<code>Port</code>后面添加一行<code>just a test</code>，task示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: add line before Listen 80
  lineinfile:
    dest: /etc/http.conf
    insertafter: &#39;^Port&#39;
    line: &#39;just a test&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-修改文件内容及权限" tabindex="-1"><a class="header-anchor" href="#_4-修改文件内容及权限" aria-hidden="true">#</a> 4 修改文件内容及权限</h2><p>示例文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#cat /etc/hosts</span>

<span class="token number">127.0</span>.0.1       localhost.localdomain localhost ::1       localhost6.localdomain6 localhost6
<span class="token number">10.1</span>.61.130     hub.dz11.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改/etc/hosts，将以<code>127.0.0.1</code>开头的行替换为<code>127.0.0.1 localhost</code>，并将/etc/hosts的属主和属组都修改为root，权限改为644，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: modify hosts
  lineinfile:
    dest: /etc/hosts
    regex: &#39;^127\\.0\\.0\\.1&#39;
    line: &#39;127.0.0.1 localhost&#39;
    owner: root
    group: root
    mode: 0644
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-删除行内容" tabindex="-1"><a class="header-anchor" href="#_5-删除行内容" aria-hidden="true">#</a> 5 删除行内容</h2><p>regexp结合state=absent时，表示删除所有匹配的行。</p><p>示例原文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#cat /etc/hosts</span>

<span class="token number">127.0</span>.0.1       localhost.localdomain localhost ::1       localhost6.localdomain6 localhost6
<span class="token number">10.1</span>.61.130     hub.dz11.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除以<code>10.1.61.130</code>开头的行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: delete a line
  lineinfile:
    dest: /etc/hosts
    regex: &#39;^10\\.1\\.61&#39;
    state: absent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-文件存在则添加一行内容" tabindex="-1"><a class="header-anchor" href="#_6-文件存在则添加一行内容" aria-hidden="true">#</a> 6 文件存在则添加一行内容</h2><p>往/etc/hosts里添加一行<code>10.1.61.131 test.dz11.com</code>（多次执行，不会重复添加），示例如下：</p><p>如果再次执行，则不会再次追加此行。因为lineinfile模块的state参数默认值为present，它能保证幂等性，当要插入的行已经存在时则不会再插入。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add a line
  <span class="token key atrule">lineinfile</span><span class="token punctuation">:</span>
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/hosts
    <span class="token key atrule">line</span><span class="token punctuation">:</span> <span class="token string">&#39;10.1.61.131 test.dz11.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-如果有匹配的行则修改该行-如果不匹配则添加" tabindex="-1"><a class="header-anchor" href="#_7-如果有匹配的行则修改该行-如果不匹配则添加" aria-hidden="true">#</a> 7 如果有匹配的行则修改该行，如果不匹配则添加</h2><p>示例原文件/tmp/test.txt内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># %wheel   ALL=(ALL)   ALL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的示例task中，匹配以<code>%wheel</code>开头的行，匹配到，则执行替换，未匹配，则添加。因为原文件中，没有以<code>%wheel</code>开头的行，所以会添加一行：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add or modify a line
  <span class="token key atrule">lineinfile</span><span class="token punctuation">:</span> 
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /tmp/test.txt
    <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;^%wheel&#39;</span>
    <span class="token key atrule">line</span><span class="token punctuation">:</span> <span class="token string">&#39;%wheel  ALL=(ALL)       NOPASSWD: ALL&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后的文件如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#cat /tmp/text.txt</span>

<span class="token comment"># %wheel   ALL=(ALL)   ALL</span>
%wheel  <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       NOPASSWD: ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-参数backrefs-backup说明" tabindex="-1"><a class="header-anchor" href="#_8-参数backrefs-backup说明" aria-hidden="true">#</a> 8 参数backrefs，backup说明</h2><ul><li>backup： 是否备份原文件，默认为no</li><li>backrefs： <ul><li>当backrefs为no时，如果regex没有匹配到行，则添加一行，如果Regx匹配到行，则修改该行</li><li>当backrefs为yes时，如果regex没有匹配到行，则保持原文件不变，如果regex匹配到行，则修改该行</li><li>backrefs默认为no，所以上面那个示例中，我们没有配置backrefs，而默认没有匹配，则修改。</li></ul></li></ul><p>下面我们看一看backrefs为yes时匹配到行的示例：</p><p>示例原文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cat /tmp/testfile</span>

<span class="token comment"># %wheel   ALL=(ALL)   ALL</span>
%wheel  <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       NOPASSWD: ALL
<span class="token comment">#?bar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>task示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> - name: test backrefs
  lineinfile:
      backup: yes
      state: present
      dest: /tmp/testfile
      regexp: &#39;^#\\?bar&#39;
      backrefs: yes
      line: &#39;bar&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后的文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cat /tmp/testfile</span>

<span class="token comment"># %wheel   ALL=(ALL)   ALL</span>
%wheel  <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       NOPASSWD: ALL
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-使用validate验证文件是否正确修改" tabindex="-1"><a class="header-anchor" href="#_9-使用validate验证文件是否正确修改" aria-hidden="true">#</a> 9 使用validate验证文件是否正确修改</h2><p>在一些场景下，我们修改完文件后，需要对文件做一下测试，用以检查文件修改之后，是否能正常运行。如http.conf、nginx.conf等，一旦改错，而不加以测试，可能会直接导致http服务挂掉。</p><p>可以使用validate关键字，在修改完成以后，对文件执行检测：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: test validate
  lineinfile:
      dest: /etc/sudoers
      state: present
      regexp: &#39;^%ADMIN ALL=&#39;
      line: &#39;%ADMIN ALL=(ALL)&#39;
      validate: &#39;visudo -cf %s&#39;
  tags:
    - testsudo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-regexp和insertxxx结合" tabindex="-1"><a class="header-anchor" href="#_10-regexp和insertxxx结合" aria-hidden="true">#</a> 10 regexp和insertXXX结合</h2><p>lineinfile最后一个比较常用的功能是regepx结合insertbefore或结合insertafter。这时候的行将根据insertXXX的位置来插入，而regexp参数则充当幂等性判断参数：只有regepx匹配失败时，insertXXX才会插入行。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- lineinfile:
path: &quot;a.txt&quot;
line: &quot;hello line&quot;
regexp: &#39;^hello&#39;
insertbefore: &#39;^para.* 2&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这表示将&quot;hello line&quot;插入在paragraph 2行的前面，但如果再次执行，则不会再次插入，因为regexp参数指定的正则表达式已经能够已经存在的&quot;hello line&quot;行。所以，当regepx结合insertXXX使用时，regexp的参数通常都会设置为能够匹配插入之后的行的正则表达式，以便实现幂等性。</p><blockquote><p>参考链接：</p><p>https://www.cnblogs.com/breezey/p/9297252.html</p><p>https://blog.51cto.com/cloumn/blog/1544</p></blockquote>`,63),d=[l];function t(c,r){return n(),a("div",null,d)}const u=e(i,[["render",t],["__file","lineinfile.html.vue"]]);export{u as default};
