import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-4bb5a871.js";const i={},l=e(`<h1 id="_2-ansible-inventory配置详解" tabindex="-1"><a class="header-anchor" href="#_2-ansible-inventory配置详解" aria-hidden="true">#</a> 2 Ansible Inventory配置详解</h1><p>在使用Ansible来批量管理主机的时候，通常我们需要先定义要管理哪些主机或者主机组，而这个用于管理主机与主机组的文件就叫做Inventory，也叫主机清单。</p><p>Ansible Inventory 是包含<code>静态 Inventory</code> 和<code>动态 Inventory</code> 两部分的，静态 Inventory 指的是在文件中指定的主机和组，动态 Inventory 指通过外部脚本获取主机列表，并按照 ansible 所要求的格式返回给 ansilbe 命令的。</p><h2 id="_1-inventory文件路径" tabindex="-1"><a class="header-anchor" href="#_1-inventory文件路径" aria-hidden="true">#</a> 1 inventory文件路径</h2><p>默认的inventory文件是<code>/etc/ansible/hosts</code>，可以通过Ansible配置文件的inventory配置指令去修改路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ grep &#39;/etc/ansible/hosts&#39; /etc/ansible/ansible.cfg
#inventory = /etc/ansible/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但通常我们不会去修改这个配置项，如果在其它地方定义了inventory文件，可以直接在ansible的命令行中使用-i选项去指定我们自定义的inventory文件。</p><p><strong>多个inventory文件</strong></p><p>当Ansible要管理的节点非常多时，仅靠分组的逻辑可能也不足够方便管理，这个时候可以定义多个inventory文件并放在一个目录下， 并按一定的命名规则为每 个inventory命名，以便见名知意。</p><p>现在要使用多个inventory的功能，需要将inventory指定为目录路径。</p><p>例如，Ansible配置文件将inventory指令设置为对应的目录:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>inventory <span class="token operator">=</span> /etc/ansible/inventorys 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>inventory指定为目:录时，inventory文件最好不要带有后缀， 就像示例中的a和b文件。因为Ansible当使用目录作为inventory时，默认将忽略一些后缀的文件不去解析。 需要修改配置:文件中的inventory_ ignore_ extensions 项来禁止忽略指定后缀(如ini后缀)的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#inventory_ ignore_ extensions=~, .orig, .bak, .in, .cfg, .retry, .pyc, .pyo</span>
inventory_ ignore_ extensions <span class="token operator">=</span> ~, .orig, .bak, .cfg, .retry, .pyC, .pyo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-静态inventory" tabindex="-1"><a class="header-anchor" href="#_2-静态inventory" aria-hidden="true">#</a> 2 静态Inventory</h2><h3 id="_2-1-定义主机和组" tabindex="-1"><a class="header-anchor" href="#_2-1-定义主机和组" aria-hidden="true">#</a> 2.1 定义主机和组</h3><blockquote><p>定义主机清单，有多种格式，常用的有<code>ini</code>格式和<code>YAML</code>（Ansible 2.4开始支持）格式，我倾向于使用<code>YAML</code>格式，下面的举例中，两种格式都会提到。</p><p><strong>Ansible 默认预定义了两个主机组：<code>all</code>分组（所有主机）和<code>ungrouped</code>分组（不在分组内的主机），两个组都不包括localhost这个特殊的节点</strong></p></blockquote><p>对于/etc/ansible/hosts最简单的定义格式像下面：</p><h4 id="_2-1-1-简单的主机和组" tabindex="-1"><a class="header-anchor" href="#_2-1-1-简单的主机和组" aria-hidden="true">#</a> 2.1.1 简单的主机和组</h4><p>In INI:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 中括号中的名字代表组名，可以根据自己的需求将庞大的主机分成具有标识的组，如上面分了两个组webservers和dbservers组；  </span>
<span class="token comment"># 主机(hosts)部分可以使用域名、主机名、IP地址表示；当然使用前两者时，也需要主机能反解析到相应的IP地址，一般此类配置中多使用IP地址；</span>
mail.example.com

<span class="token punctuation">[</span>webservers<span class="token punctuation">]</span>
foo.example.com
bar.example.com

<span class="token punctuation">[</span>dbservers<span class="token punctuation">]</span>
one.example.com
two.example.com
three.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In YAML:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>all:
  hosts:
    mail.example.com:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-指定主机范围" tabindex="-1"><a class="header-anchor" href="#_2-1-2-指定主机范围" aria-hidden="true">#</a> 2.1.2 指定主机范围</h4><p>In INI:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下面指定了从web01到web50，webservers组共计50台主机；databases组有db-a到db-f共6台主机</span>
<span class="token punctuation">[</span>webservers<span class="token punctuation">]</span>
www<span class="token punctuation">[</span>01:50<span class="token punctuation">]</span>.example.com
<span class="token punctuation">[</span>databases<span class="token punctuation">]</span>
db-<span class="token punctuation">[</span>a:f<span class="token punctuation">]</span>.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In YAML:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>all:
  children:
  	webservers:
      hosts:
        www[01:50].example.com:
    databases:
      hosts:
        db-[a:f].example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-定义主机组嵌套" tabindex="-1"><a class="header-anchor" href="#_2-1-3-定义主机组嵌套" aria-hidden="true">#</a> 2.1.3 定义主机组嵌套</h4><p>一个主机组可以包含若干个子主机组：</p><p>In INI:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如下示例中，production组包含两个子组，分别为webservers和dbservers，webservers和dbservers组分别包含若干主机</span>
<span class="token punctuation">[</span>webservers<span class="token punctuation">]</span>
foo.example.com
bar.example.com

<span class="token punctuation">[</span>dbservers<span class="token punctuation">]</span>
one.example.com
two.example.com
three.example.com

<span class="token punctuation">[</span>production:children<span class="token punctuation">]</span>
webservers
dbservers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In YAML:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>all:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
    production:
      children:
        webservers:
        dbservers:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-添加主机变量" tabindex="-1"><a class="header-anchor" href="#_2-1-4-添加主机变量" aria-hidden="true">#</a> 2.1.4 添加主机变量</h4><p>不同ansible版本，行为控制变量名称可能不同，比如以前版本中端口号的行为变量是<code>ansible_ssh_port</code></p><p>下面是常见的行为变量：</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210309153531453.png" alt="image-20210309153531453"></p><p>In INI:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[atlanta]
host1 http_port=80 maxRequestsPerChild=808 ansible_port=5555 ansible_host=192.0.2.50
host2 http_port=303 maxRequestsPerChild=909
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In YAML:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>atlanta:
  host1:
    http_port: 80
    maxRequestsPerChild: 808
    ansible_port: 5555
    ansible_host: 192.0.2.50
  host2:
    http_port: 303
    maxRequestsPerChild: 909
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-5-添加组变量" tabindex="-1"><a class="header-anchor" href="#_2-1-5-添加组变量" aria-hidden="true">#</a> 2.1.5 添加组变量</h4><p>In INI:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[atlanta]
host1
host2

[atlanta:vars]
ntp_server=ntp.atlanta.example.com
proxy=proxy.atlanta.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In YAML:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>atlanta:
  hosts:
    host1:
    host2:
  vars:
    ntp_server: ntp.atlanta.example.com
    proxy: proxy.atlanta.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>集成变量值</strong></p><p>In INI:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[atlanta]
host1
host2

[raleigh]
host2
host3

[southeast:children]
atlanta
raleigh

[southeast:vars]
some_server=foo.southeast.example.com
halon_system_timeout=30
self_destruct_countdown=60
escape_pods=2

[usa:children]
southeast
northeast
southwest
northwest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In YAML:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>all:
  children:
    usa:
      children:
        southeast:
          children:
            atlanta:
              hosts:
                host1:
                host2:
            raleigh:
              hosts:
                host2:
                host3:
          vars:
            some_server: foo.southeast.example.com
            halon_system_timeout: 30
            self_destruct_countdown: 60
            escape_pods: 2
        northeast:
        northwest:
        southwest:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-6-组织主机和组变量-配置单独变量文件host-vars和group-vars" tabindex="-1"><a class="header-anchor" href="#_2-1-6-组织主机和组变量-配置单独变量文件host-vars和group-vars" aria-hidden="true">#</a> 2.1.6 组织主机和组变量(配置单独变量文件host_vars和group_vars)</h4><p>尽管可以将变量存储在主清单文件中，但是存储单独的主机变量和组变量文件可以帮助您更轻松地组织变量值。 主机和组变量文件必须使用YAML语法。 有效的文件扩展名包括“ .yml”，“。yaml”，“。json”或没有文件扩展名。</p><p>Ansible通过搜索相对于清单文件或剧本文件的路径来加载主机和组变量文件。 如果<code>/etc/ansible/hosts</code>上的清单文件包含名为“ foosball”的主机，该主机属于“ raleigh”和“ webservers”两个组，则该主机将在以下位置的YAML文件中使用变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/ansible/group_vars/raleigh # can optionally end in &#39;.yml&#39;, &#39;.yaml&#39;, or &#39;.json&#39;
/etc/ansible/group_vars/webservers
/etc/ansible/host_vars/foosball
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，如果按数据中心将清单中的主机分组，并且每个数据中心使用其自己的NTP服务器和数据库服务器，则可以创建一个名为<code>/etc/ansible/group_vars/raleigh</code>的文件来存储raleigh组的变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
ntp_server: acme.example.org
database_server: storage.example.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来总结一下group_vars/, host_vars/的存放位置：</p><p>(1).inventory文件的同目录</p><p>(2).playbook文件的同目录</p><h3 id="_2-2-选择主机与组-hosts指令" tabindex="-1"><a class="header-anchor" href="#_2-2-选择主机与组-hosts指令" aria-hidden="true">#</a> 2.2 选择主机与组(hosts指令)</h3><p>在前面定义Inventory的时候，我们会把所有被管理主机通过主机组的方式定义到Inventory当中，但是当我们实际使用的时候，可能只需要对某一主机或主机组进行操作，这个时候就需要通过匹配的方式指定某一特定主机或主机组。</p><p>在此之间，我们先定义一个主机清单示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>srv1.example.com
srv2.example.com
s1.lab.example.com
s2.lab.example.com

<span class="token punctuation">[</span>web<span class="token punctuation">]</span>
jupiter.lab.example.com
saturn.example.com

<span class="token punctuation">[</span>db<span class="token punctuation">]</span>
db1.example.com
db2.example.com
db3.example.com

<span class="token punctuation">[</span>lb<span class="token punctuation">]</span>
lb1.lab.example.com
lb2.lab.example.com

<span class="token punctuation">[</span>boston<span class="token punctuation">]</span>
db1.example.com
jupiter.lab.example.com
lb2.lab.example.com

<span class="token punctuation">[</span>london<span class="token punctuation">]</span>
db2.example.com
db3.example.com
file1.lab.example.com
lb1.lab.example.com

<span class="token punctuation">[</span>dev<span class="token punctuation">]</span>
web1.lab.example.com
db3.example.com

<span class="token punctuation">[</span>stage<span class="token punctuation">]</span>
file2.example.com
db2.example.com

<span class="token punctuation">[</span>prod<span class="token punctuation">]</span>
lb2.lab.example.com
db1.example.com
jupiter.lab.example.com

<span class="token punctuation">[</span>function:children<span class="token punctuation">]</span>
web
db
lb
city

<span class="token punctuation">[</span>city:children<span class="token punctuation">]</span>
boston
london
environments

<span class="token punctuation">[</span>environments:children<span class="token punctuation">]</span>
dev
stage
prod
new

<span class="token punctuation">[</span>new<span class="token punctuation">]</span>
<span class="token number">172.25</span>.252.23
<span class="token number">172.25</span>.252.44
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用更为专业的<code>ansible-inventory</code>命令来查看主机组信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># 树状形式展开主机列表</span>
 ansible-inventory all <span class="token parameter variable">--graph</span>
 <span class="token comment"># 同时带上变量</span>
 ansible-inventory all <span class="token parameter variable">--graph</span> <span class="token parameter variable">--vars</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-1-匹配所有主机" tabindex="-1"><a class="header-anchor" href="#_2-2-1-匹配所有主机" aria-hidden="true">#</a> 2.2.1 匹配所有主机</h4><p>可以通过<code>all</code>或者<code>*</code>来指定匹配所有主机，通过如下指令查看<code>all</code>匹配到的主机：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ansible all --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>:
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    jupiter.lab.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
    lb1.lab.example.com
    lb2.lab.example.com
    file1.lab.example.com
    web1.lab.example.com
    file2.example.com
    <span class="token number">172.25</span>.252.23
    <span class="token number">172.25</span>.252.44
    <span class="token number">172.25</span>.252.32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-匹配指定的主机或主机组" tabindex="-1"><a class="header-anchor" href="#_2-2-2-匹配指定的主机或主机组" aria-hidden="true">#</a> 2.2.2 匹配指定的主机或主机组</h4><ol><li>匹配单个组</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ansible prod --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>:
    lb2.lab.example.com
    db1.example.com
    jupiter.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>匹配单个主机</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ansible db2.example.com --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
    db2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>匹配多个主机</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible &#39;lb1.lab.example.com,s1.lab.example.com,db1.example.com&#39; --list-hosts  
  hosts (3):
    lb1.lab.example.com
    s1.lab.example.com
    db1.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>匹配多个组</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ansible &#39;london,boston&#39; --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>:
    db2.example.com
    db3.example.com
    file1.lab.example.com
    lb1.lab.example.com
    db1.example.com
    jupiter.lab.example.com
    lb2.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>匹配不属于任何组的主机</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ansible ungrouped --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>:
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-4-通配符匹配" tabindex="-1"><a class="header-anchor" href="#_2-2-4-通配符匹配" aria-hidden="true">#</a> 2.2.4 通配符匹配</h4><ol><li>匹配&#39;*.example.com&#39;：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ansible &#39;*.example.com&#39; --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>:
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    jupiter.lab.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
    lb1.lab.example.com
    lb2.lab.example.com
    file1.lab.example.com
    web1.lab.example.com
    file2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>匹配<code>172.25.*</code>的主机：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible &#39;172.25.*&#39; --list-hosts                         
  hosts (3):
    172.25.252.23
    172.25.252.44
    172.25.252.32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>匹配以<code>s</code>开头的主机及主机组：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible &#39;s*&#39; --list-hosts
  hosts (7):
    file2.example.com
    db2.example.com
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    saturn.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-5-通配符组合匹配" tabindex="-1"><a class="header-anchor" href="#_2-2-5-通配符组合匹配" aria-hidden="true">#</a> 2.2.5 通配符组合匹配</h4><ol><li>匹配包含<code>*.example.com</code>但不包含<code>*.lab.example.com</code>的主机：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible &#39;*.example.com,!*.lab.example.com&#39; --list-hosts  
  hosts (7):
    srv1.example.com
    srv2.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
    file2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>匹配包含prod以及172开头、包含lab关键字的主机或组</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible &#39;prod,172*,*lab*&#39; --list-hosts
  hosts (11):
    lb2.lab.example.com
    db1.example.com
    jupiter.lab.example.com
    172.25.252.23
    172.25.252.44
    172.25.252.32
    s1.lab.example.com
    s2.lab.example.com
    lb1.lab.example.com
    file1.lab.example.com
    web1.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>匹配属于db组同时还属于london组的主机：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible &#39;db,&amp;london&#39; --list-hosts
  hosts (2):
    db2.example.com
    db3.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>匹配在london组或者boston组，还必须在prod组中且必须不在lb组中的主机：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ansible &#39;boston,london,&amp;prod,!lb&#39; --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>:
    db1.example.com
    jupiter.lab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-6-正则表达式匹配" tabindex="-1"><a class="header-anchor" href="#_2-2-6-正则表达式匹配" aria-hidden="true">#</a> 2.2.6 正则表达式匹配</h4><p>在开头的地方使用”~”，用来表示这是一个正则表达式:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ansible &#39;~(s|db).*example\\.com&#39; --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>:
    srv1.example.com
    srv2.example.com
    s1.lab.example.com
    s2.lab.example.com
    saturn.example.com
    db1.example.com
    db2.example.com
    db3.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-7-通过-limit或-l明确指定主机或组" tabindex="-1"><a class="header-anchor" href="#_2-2-7-通过-limit或-l明确指定主机或组" aria-hidden="true">#</a> 2.2.7 通过<code>--limit</code>或<code>-l</code>明确指定主机或组</h4><p>默认情况下，所有被ansible或ansible-playbook选中的主机都会执行任务，但是可以使用命令行的--limit pattern选项来筛选哪些主机执行任务哪些主机不执行任务。</p><p>这里需注意一点：即使使用了--limit选项，ansible或ansible-playbook命令也总是会解析Inventory中的所有主机，只不过这两个命令可以从解析的inventory结果中选择部分要执行任务的节点(比如通过hosts指令)。</p><p>所以，总结下这里涉及到的解析和筛选节点的过程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解析inventory --&gt; play的hosts指令 --&gt; limit选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>通过<code>--limit</code>在选定的组中明确指定主机：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ansible ungrouped  --limit srv1.example.com --list-hosts
  hosts (1):
    srv1.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>通过<code>--limit</code>参数，还可以指定一个文件，该文件中定义明确指定的主机的列表，定义一个retry_hosts.txt如下：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>srv1.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次执行ansible指令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ansible ungrouped  --limit @retry_hosts.txt --list-hosts</span>
  hosts <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
    srv1.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-动态inventory" tabindex="-1"><a class="header-anchor" href="#_3-动态inventory" aria-hidden="true">#</a> 3 动态Inventory</h2><p>这部分一般会结合 CMDB 资管系统、云计算平台等获取主机信息。由于主机资源一般会动态的进行增减，而这些系统一般会智能更新。我们可以通过这些工具提供的 API 或者接入库查询等方式返回主机列表。</p><p>比如为了结合资产管理系统（CMDB），所以要使用到动态获取 inventory 的方法，这样可以省去配置 ansible 服务端的 hosts，所有的客户端 IP、帐号、密码、端口都可以从 CMDB 中获取到。</p><p>只要你的脚本输出格式是满足要求的 JSON，这样就可以成为一个动态的资产生成器。</p><h3 id="_3-1-脚本规约" tabindex="-1"><a class="header-anchor" href="#_3-1-脚本规约" aria-hidden="true">#</a> 3.1 脚本规约</h3><p>用于生成 JSON 的脚本对实现语言没有要求，它可以是一个可执行脚本、二进制文件，或者其他任何可以运行文件，但是必须输出为 JSON 格式，同时必须支持两个参数：<code>--list</code> 和 <code>--host </code>。</p><ul><li><code>--list</code>：用于返回所有的主机组信息，每个组所包含的主机列表 <code>hosts</code>、所含子组列表 <code>children</code>、主机组变量列表 <code>vars</code> 都应该是字典形式的，<code>_meta</code> 用来存放主机变量。</li><li><code>--host </code>：返回指定主机的变量列表，或者返回一个空的字典脚本实现</li></ul><blockquote><p>⚠️ 注意，脚本开头声明 <code>#!</code></p><p>脚本加执行权限</p></blockquote><h3 id="_3-2-脚本实现" tabindex="-1"><a class="header-anchor" href="#_3-2-脚本实现" aria-hidden="true">#</a> 3.2 脚本实现</h3><p>一个参考实现框架如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment">#coding:utf8</span>
<span class="token keyword">import</span> json
<span class="token keyword">import</span> sys
 
<span class="token keyword">def</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    info_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;all&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;10.10.0.109&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;10.10.0.112&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>info_dict<span class="token punctuation">,</span>indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token keyword">def</span> <span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    host1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;10.10.0.112&#39;</span><span class="token punctuation">]</span>
    host2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;10.10.0.112&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;10.10.0.109&#39;</span><span class="token punctuation">]</span>
    group1 <span class="token operator">=</span> <span class="token string">&#39;test1&#39;</span>
    group2 <span class="token operator">=</span> <span class="token string">&#39;test2&#39;</span>
    hostdata <span class="token operator">=</span> <span class="token punctuation">{</span>
        group1<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span>host1<span class="token punctuation">}</span><span class="token punctuation">,</span>
        group2<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span>host2<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>hostdata<span class="token punctuation">,</span>indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token keyword">def</span> <span class="token function">host</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">:</span>
    info_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;10.10.0.112&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;ansible_ssh_host&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;10.10.0.112&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_port&quot;</span><span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_user&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_pass&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;123457&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;10.10.0.109&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;ansible_ssh_host&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;10.10.0.109&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_port&quot;</span><span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_user&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ansible_ssh_pass&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;xxxx&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>info_dict<span class="token punctuation">,</span>indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;--list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    group<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;--host&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    host<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: %s --list or --host &lt;hostname&gt;&quot;</span> <span class="token operator">%</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-结合cmdb动态获取" tabindex="-1"><a class="header-anchor" href="#_3-3-结合cmdb动态获取" aria-hidden="true">#</a> 3.3 结合CMDB动态获取</h3><p>这个脚本主要是结合底层为<code>openstack</code>的私有云中的mysql实现的</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># coding:utf-8</span>

<span class="token keyword">import</span> pymysql
<span class="token keyword">import</span> json
<span class="token keyword">import</span> sys

conn <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&quot;192.168.*.*&quot;</span><span class="token punctuation">,</span>
    user<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
    password<span class="token operator">=</span><span class="token string">&quot;****&quot;</span><span class="token punctuation">,</span>
    database<span class="token operator">=</span><span class="token string">&quot;***&quot;</span><span class="token punctuation">,</span>
    charset<span class="token operator">=</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">get_result</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> cursor<span class="token punctuation">:</span>
            cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
            result <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> result
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">raise</span> e


<span class="token keyword">def</span> <span class="token function">get_all_group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    sql <span class="token operator">=</span> <span class="token string">&quot;SELECT instances.user_id FROM nova.instances GROUP BY instances.user_id&quot;</span>
    group_list <span class="token operator">=</span> get_result<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
    <span class="token keyword">return</span> group_list


<span class="token keyword">def</span> <span class="token function">group_sql</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> group <span class="token operator">==</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">:</span>
        sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;SELECT ipallocations.\`ip_address\`
        FROM nova.instances JOIN  nova.\`instance_system_metadata\`  JOIN neutron.\`ports\` JOIN neutron.\`ipallocations\` 
        ON instances.uuid=instance_system_metadata.\`instance_uuid\` AND  instances.uuid=ports.device_id AND ports.id=ipallocations.port_id 
        WHERE  instances.vm_state = &#39;active&#39; 
        GROUP BY ipallocations.\`ip_address\` 
        ORDER BY ipallocations.\`ip_address\`&quot;&quot;&quot;</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        sql <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;SELECT ipallocations.\`ip_address\`
        FROM nova.instances JOIN  nova.\`instance_system_metadata\`  JOIN neutron.\`ports\` JOIN neutron.\`ipallocations\` 
        ON instances.uuid=instance_system_metadata.\`instance_uuid\` AND  instances.uuid=ports.device_id AND ports.id=ipallocations.port_id 
        WHERE instances.user_id = &quot;{}&quot;
        AND instances.vm_state = &#39;active&#39; 
        GROUP BY ipallocations.\`ip_address\` 
        ORDER BY ipallocations.\`ip_address\`
        &quot;&quot;&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span>
    <span class="token keyword">return</span> sql


<span class="token keyword">def</span> <span class="token function">group_list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    big_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    groups <span class="token operator">=</span> get_all_group<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> group <span class="token keyword">in</span> groups<span class="token punctuation">:</span>
        group_name <span class="token operator">=</span> group<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        sql <span class="token operator">=</span> group_sql<span class="token punctuation">(</span>group_name<span class="token punctuation">)</span>
        result <span class="token operator">=</span> get_result<span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
        host_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> host <span class="token keyword">in</span> result<span class="token punctuation">:</span>
            host_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>host<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> group_name <span class="token operator">==</span> <span class="token string">&quot;99de4a68d74748eeb17708ae0d17e386&quot;</span><span class="token punctuation">:</span>
            big_dict<span class="token punctuation">[</span><span class="token string">&quot;bes&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span> host_list<span class="token punctuation">}</span>
        <span class="token keyword">elif</span> group_name <span class="token operator">==</span> <span class="token string">&quot;103e9393fc1d4b22abf7d15651409396&quot;</span><span class="token punctuation">:</span>
            big_dict<span class="token punctuation">[</span><span class="token string">&quot;csp&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span> host_list<span class="token punctuation">}</span>
        <span class="token keyword">elif</span> group_name <span class="token operator">==</span> <span class="token string">&quot;364e0a4530f64b7b890856abd93426b6&quot;</span><span class="token punctuation">:</span>
            big_dict<span class="token punctuation">[</span><span class="token string">&quot;h5&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span> host_list<span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            big_dict<span class="token punctuation">[</span><span class="token string">&quot;unknown&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;hosts&quot;</span><span class="token punctuation">:</span> host_list<span class="token punctuation">}</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>big_dict<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">host_list</span><span class="token punctuation">(</span>hostip<span class="token punctuation">)</span><span class="token punctuation">:</span>
    host_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment"># sql = &quot;&quot;&quot;SELECT ip,port,username from nova.instances where ip=&quot;{}&quot;;&quot;&quot;&quot;.format(hostip)</span>
    <span class="token comment"># result = get_result(sql)</span>
    <span class="token comment"># for host in result:</span>
    <span class="token comment">#     host_ip = host[0]</span>
    <span class="token comment">#     ssh_port = host[1]</span>
    <span class="token comment">#     ssh_user = host[2]</span>
    <span class="token comment">#     host_dict[hostip] = {&quot;ansible_ssh_host&quot;: host_ip,</span>
    <span class="token comment">#                      &quot;ansible_ssh_port&quot;: ssh_port, &quot;ansible_ssh_user&quot;: ssh_user}</span>
    host_dict<span class="token punctuation">[</span>hostip<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;ansible_ssh_host&quot;</span><span class="token punctuation">:</span> hostip<span class="token punctuation">,</span>
                         <span class="token string">&quot;ansible_ssh_port&quot;</span><span class="token punctuation">:</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&quot;ansible_ssh_user&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">}</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>host_dict<span class="token punctuation">,</span> indent<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token keyword">and</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;--list&quot;</span><span class="token punctuation">:</span>
        group_list<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span> <span class="token keyword">and</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;--host&quot;</span><span class="token punctuation">:</span>
        host_list<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: %s --list or --host &lt;hostname&gt;&quot;</span> <span class="token operator">%</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-使用" tabindex="-1"><a class="header-anchor" href="#_3-4-使用" aria-hidden="true">#</a> 3.4 使用</h3><p>使用方法和静态 inventory 类似：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可以指定组</span>
$ ansible <span class="token parameter variable">-i</span> dynamic_investory.py all --list-hosts
  hosts <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>:
    <span class="token number">127.0</span>.0.1
    <span class="token number">10.10</span>.0.112
    <span class="token number">10.10</span>.0.109

<span class="token comment"># 可以指定主机</span>
$ ansible <span class="token parameter variable">-i</span> dynamic_investory.py <span class="token number">127.0</span>.0.1 --list-hosts
  hosts <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>:
    <span class="token number">127.0</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-临时添加节点-add-host模块" tabindex="-1"><a class="header-anchor" href="#_4-临时添加节点-add-host模块" aria-hidden="true">#</a> 4 临时添加节点：add_host模块</h2><p>除了静态和动态inventory可以指定远程被控节点的信息，还有个比较特殊的模块add_host，它可以在任务执行时临时添加主机节点。</p><p>add_host用法非常简单，只有两个参数：name和groups，分别定义主机名和所在主机组，其中groups参数可以是一个列表，表示主机可以添加到多个组中。如果还有其它参数，则均被当作变量赋值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: add new host to nginx and apache
  add_host:
    name: 192.168.200.34
    groups:
      - nginx
      - apache
    ansible_port: 22
    my_var: &quot;hello world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>add_host模块是一个比较特殊的模块，它在playbook运行时添加主机，有以下几个注意事项：</p><p>(1).新添加的主机在当前play中无效，只在之后的play中有效</p><p>(2).它添加的主机只存在于内存中，Ansible退出之后就消失</p><h2 id="_5-group-by运行时临时设置主机组" tabindex="-1"><a class="header-anchor" href="#_5-group-by运行时临时设置主机组" aria-hidden="true">#</a> 5 group_by运行时临时设置主机组</h2><p>group_by和add_host功能是类似的，group_by用于临时设置主机组。</p><p>group_by有两个参数：</p><p>(1).key：新设置的分组名</p><p>(2).parents：(可选参数)新增分组的父组</p><p>例如，当前的inventory如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[nginx]
192.168.200.42

[php]
192.168.200.43

[mysql]
192.168.200.44

[dev:children]
nginx
php
mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中并没有&quot;CentOS 7&quot;和&quot;CentOS 6&quot;这两个主机组。现在想要在playbook运行的时候去设置这两个主机组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
- name: set a new group
  hosts: all
  gather_facts: true
  tasks:
    - name: set new group
      group_by:
        key: &quot;{{ansible_distribution}}_{{ansible_distribution_major_version}}&quot;
        parents: &quot;CentOS&quot;

- name: use new group
  hosts: CentOS
  gather_facts: false
  tasks:
    - name: ping CentOS
      ping:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中gather_facts设置为true，因为group_by任务中使用了两个需要它收集来的变量：ansible_distribution和ansible_distribution_major_version。</p><p>ansible_distribution变量保存的是系统的发型名称，比如CentOS、RedHat等。ansible_distribution_major_version变量保存的是系统的主版本号，比如CentOS 7.2时返回主版本号7。关于gather_facts，会在稍后的进阶内容中详细介绍。</p><p>所以key参数渲染后的值(也即新增组的组名)应当类似于CentOS_6、CentOS_7，而且它们都是CentOS的子组。</p><blockquote><p>参考链接：</p><p>https://www.jianshu.com/p/71d6700fbe79</p><p>https://blog.csdn.net/qq_23191379/article/details/90416992</p><p>https://blog.51cto.com/cloumn/blog/1542</p></blockquote>`,148),t=[l];function o(p,c){return s(),a("div",null,t)}const r=n(i,[["render",o],["__file","inventory.html.vue"]]);export{r as default};
