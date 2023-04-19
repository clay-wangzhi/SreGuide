<template><h1 id="etc-security-limits-conf-详解与配置" tabindex="-1"><a class="header-anchor" href="#etc-security-limits-conf-详解与配置" aria-hidden="true">#</a> /etc/security/limits.conf 详解与配置</h1>
<h2 id="一、-etc-security-limits-conf-详解" tabindex="-1"><a class="header-anchor" href="#一、-etc-security-limits-conf-详解" aria-hidden="true">#</a> 一、 /etc/security/limits.conf 详解</h2>
<p><code>/etc/security/limits.conf</code> 文件实际是 Linux PAM（插入式认证模块，Pluggable Authentication Modules）中 <code>pam_limits.so</code> 的配置文件，而且只针对于单个会话。 该设置不会影响系统服务的资源限制。还要注意 <code>/etc/security/limits.d/</code> 的这个目录，</p>
<h3 id="etc-security-limits-conf-配置解析" tabindex="-1"><a class="header-anchor" href="#etc-security-limits-conf-配置解析" aria-hidden="true">#</a> /etc/security/limits.conf 配置解析</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># /etc/security/limits.conf
#
#This file sets the resource limits for the users logged in via PAM.
该文件为通过PAM登录的用户设置资源限制。
#It does not affect resource limits of the system services.
#它不影响系统服务的资源限制。
#Also note that configuration files in /etc/security/limits.d directory,
#which are read in alphabetical order, override the settings in this
#file in case the domain is the same or more specific.
请注意/etc/security/limits.d下按照字母顺序排列的配置文件会覆盖 /etc/security/limits.conf中的
domain相同的的配置
#That means for example that setting a limit for wildcard domain here
#can be overriden with a wildcard setting in a config file in the
#subdirectory, but a user specific setting here can be overriden only
#with a user specific setting in the subdirectory.
这意味着，例如使用通配符的domain会被子目录中相同的通配符配置所覆盖，但是某一用户的特定配置
只能被字母路中用户的配置所覆盖。其实就是某一用户A如果在/etc/security/limits.conf有配置，当
/etc/security/limits.d子目录下配置文件也有用户A的配置时，那么A中某些配置会被覆盖。最终取的值是 /etc/security/limits.d 下的配置文件的配置。

#
#Each line describes a limit for a user in the form:
#每一行描述一个用户配置
#&lt;domain> &lt;type> &lt;item> &lt;value>

#Where:
#&lt;domain> can be:
# - a user name    一个用户名
# - a group name, with @group syntax    用户组格式为@GROUP_NAME
# - the wildcard *, for default entry    默认配置为*，代表所有用户
# - the wildcard %, can be also used with %group syntax,
# for maxlogin limit 
#
#&lt;type> can have the two values:
# - "soft" for enforcing the soft limits 
# - "hard" for enforcing hard limits
有soft，hard和-，soft指的是当前系统生效的设置值，软限制也可以理解为警告值。
hard表名系统中所能设定的最大值。soft的限制不能比hard限制高，用-表名同时设置了soft和hard的值。
#&lt;item> can be one of the following:    &lt;item>可以使以下选项中的一个
# - core - limits the core file size (KB)    限制内核文件的大小。
# - data - max data size (KB)    最大数据大小
# - fsize - maximum filesize (KB)    最大文件大小
# - memlock - max locked-in-memory address space (KB)    最大锁定内存地址空间
# - nofile - max number of open file descriptors 最大打开的文件数(以文件描叙符，file descripter计数) 
# - rss - max resident set size (KB) 最大持久设置大小
# - stack - max stack size (KB) 最大栈大小
# - cpu - max CPU time (MIN)    最多CPU占用时间，单位为MIN分钟
# - nproc - max number of processes 进程的最大数目
# - as - address space limit (KB) 地址空间限制 
# - maxlogins - max number of logins for this user    此用户允许登录的最大数目
# - maxsyslogins - max number of logins on the system    系统最大同时在线用户数
# - priority - the priority to run user process with    运行用户进程的优先级
# - locks - max number of file locks the user can hold    用户可以持有的文件锁的最大数量
# - sigpending - max number of pending signals
# - msgqueue - max memory used by POSIX message queues (bytes)
# - nice - max nice priority allowed to raise to values: [-20, 19] max nice优先级允许提升到值
# - rtprio - max realtime pr iority
#
#&lt;domain> &lt;type> &lt;item> &lt;value>
#

#* soft core 0
#* hard rss 10000
#@student hard nproc 20
#@faculty soft nproc 20
#@faculty hard nproc 50
#ftp hard nproc 0
#@st
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h3 id="etc-security-limits-d-目录" tabindex="-1"><a class="header-anchor" href="#etc-security-limits-d-目录" aria-hidden="true">#</a> /etc/security/limits.d/目录</h3>
<ul>
<li>
<p><code>/etc/security/limits.d/</code>目录</p>
<p>该目录下默认有<code>*-nproc.conf</code>文件，该文件是用于限制用户的线程限制。我们也可以在该目录创建配置文件</p>
<p>在<code>/etc/security/limits.d/</code>下，以 .conf 结尾。</p>
<ul>
<li>
<p>centos 7</p>
<p>在CentOS 7版本中为<code>/etc/security/limits.d/20-nproc.conf</code>，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># Default limit for number of user's processes to prevent
# accidental fork bombs.
# See rhbz #432903 for reasoning.

*          soft    nproc     4096 # 所有的用户默认可以打开最大的进程数为 4096
root       soft    nproc     unlimited # root 用户默认可以打开最大的进程数 无限制的。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>CentOS 6</p>
<p>在CentOS 6版本中为<code>/etc/security/limits.d/90-nproc.conf</code></p>
</li>
</ul>
</li>
</ul>
<h2 id="二、-ulimit-如何配置" tabindex="-1"><a class="header-anchor" href="#二、-ulimit-如何配置" aria-hidden="true">#</a> 二、 ulimit 如何配置</h2>
<h3 id="配置注意事项" tabindex="-1"><a class="header-anchor" href="#配置注意事项" aria-hidden="true">#</a> 配置注意事项</h3>
<p>注意不能设置 <code>nofile</code>不能设置 <code>unlimited</code>，<code>noproc</code>可以.
当我们设置了 <code>nofile</code>不能设置 <code>unlimited</code> 后，我们进行 ssh 登录，是登录不了的，并且报错下面的内容。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Dec  1 14:57:57 localhost sshd[1543]: pam_limits(sshd:session): Could not set limit for 'nofile': Operation not permitted
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当我们设置的 <code>nofile</code> 的值可以设置的最大值为 1048576(2**20)，设置的值大于该数，就会进行登录不了。也会显示上面的登录错误。(亲测)</p>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h3>
<p>我们不将所有的配置配置在<code>/etc/security/limits.conf</code> 而是将配置放在 <code>/etc/security/limits.d/</code> 下。
比如我们将 nofile的配置放在 <code>/etc/security/limits.d/20-nofile.conf</code> ，nproc 的配置放在 <code>/etc/security/limits.d/20-nproc.conf</code>.</p>
<p>一般我们需要配置的 <code>/etc/security/limits.d/20-nofile.conf</code> 为。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root soft nofile 65535
root hard nofile 65535
* soft nofile 65535
* hard nofile 65535
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>/etc/security/limits.d/20-nproc.conf</code> 设置为</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>*    -     nproc   65535
root soft  nproc  unlimited
root hard  nproc  unlimited
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="注意覆盖点的问题。" tabindex="-1"><a class="header-anchor" href="#注意覆盖点的问题。" aria-hidden="true">#</a> 注意覆盖点的问题。</h3>
<p><strong>示例一：</strong>
当 <code>/etc/security/limits.conf</code> 配置了:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root soft nofile 65538
root hard nofile 65538
* soft nofile 65539
* hard nofile 65539
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这个root 用户的 默认取值是 65538 ，* 统配符虽然在 root 配置后面，但是 root 的配置只能被 root 进行覆盖。</p>
<p>我们看下这个配置，当这样配置的时候</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root soft nofile 65538
root hard nofile 65538
* soft nofile 65539
* hard nofile 65539
root soft nofile 65539
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这个的 root 用户的取值还是 65538 ，因为虽然 <code>root soft nofile 65539</code> 会覆盖我们之前的配置，但是这个配置是不生效的。因为 <code>root soft nofile 65539</code> 配置的值大于<code>root hard nofile 65538</code> , <code>soft</code> 配置的值不能大于 <code>hard</code>.</p>
<p><strong>示例二：</strong>
当我们在 <code>/etc/security/limits.conf</code> 配置了:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root soft nofile 65538
root hard nofile 65538
* soft nofile 65539
* hard nofile 65539
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>然后我们在 <code>/etc/security/limits.d/20-nofile.conf</code> 配置了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root soft nofile 65536
root hard nofile 65536
* soft nofile 65540
* hard nofile 65540
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>最后的取值是会取 <code>/etc/security/limits.d/20-nofile.conf</code> 里面的值。</p>
<blockquote>
<ol>
<li>配置，只能被特定覆盖。</li>
<li><code>/etc/security/limits.d/</code> 下文件的相同配置可以覆盖 <code>/etc/security/limits.conf</code></li>
<li><code>soft</code>和<code>hard</code>需要都进行设置,才能生效。</li>
<li><code>nofile</code>不能设置 <code>unlimited</code></li>
<li><code>nofile</code>可以设置的最大值为 1048576(2**20)，设置的值大于该数，就会进行登录不了。</li>
<li>soft 设置的值 一定要小于或等于 hard 的值。</li>
</ol>
</blockquote>
<p>具体详细配置根据应用情况进行配置。</p>
<h2 id="三、ulimit-配置后生效" tabindex="-1"><a class="header-anchor" href="#三、ulimit-配置后生效" aria-hidden="true">#</a> 三、ulimit 配置后生效</h2>
<h3 id="临时配置" tabindex="-1"><a class="header-anchor" href="#临时配置" aria-hidden="true">#</a> 临时配置</h3>
<p>设置可以打开文件的最大数为 65536</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ulimit  -SHn  65536
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启后失效。</p>
<h3 id="永久配置" tabindex="-1"><a class="header-anchor" href="#永久配置" aria-hidden="true">#</a> 永久配置</h3>
<p>配置到配置文件<code>/etc/security/limits.conf</code>或者 <code>/etc/security/limits.d/</code> 中。
然后退出当前会话，重新登录。 即可生效，重启配置也会保留。</p>
<h3 id="配置不生效的问题" tabindex="-1"><a class="header-anchor" href="#配置不生效的问题" aria-hidden="true">#</a> 配置不生效的问题</h3>
<p>按照上面的配置好了之后，我们进行设置登录到服务器，我发现是配置没有生效的，但是我使用 su - root 之后，发现配置是生效的。 很怪异。
设备环境： Centos6.</p>
<h4 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因" aria-hidden="true">#</a> 问题原因</h4>
<p>主要是 Centos6 的原因，我们排查到 sshd 服务的 PAM 模块是没有开启的，而<code>/etc/security/limits.conf</code> 文件实际是 Linux PAM（插入式认证模块，Pluggable Authentication Modules）中 <code>pam_limits.so</code> 的配置文件，我们没有开启 PAM 模块，最终也就没有读取到 <code>/etc/security/limits.conf</code> 的内容。 而 su 进行切换的时候使用的是 终端tty登陆(默认使用PAM模块),</p>
<h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4>
<p>在 <code>/etc/ssh/sshd_config</code> 将 <code>UsePAM no</code> 更改为 <code>UsePAM yes</code>, 然后重启 sshd 服务。</p>
<h2 id="四、ulimit-常用命令" tabindex="-1"><a class="header-anchor" href="#四、ulimit-常用命令" aria-hidden="true">#</a> 四、ulimit 常用命令</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>      -S	use the `soft' resource limit # 设置软限制
      -H	use the `hard' resource limit # 设置硬限制
      -a	all current limits are reported# 显示所有的配置。
      -b	the socket buffer size # 设置socket buffer 的最大值。
      -c	the maximum size of core files created # 设置core文件的最大值.
      -d	the maximum size of a process's data segment  # 设置线程数据段的最大值
      -e	the maximum scheduling priority (`nice') # 设置最大调度优先级
      -f	the maximum size of files written by the shell and its children # 创建文件的最大值。
      -i	the maximum number of pending signals # 设置最大的等待信号
      -l	the maximum size a process may lock into memory #设置在内存中锁定进程的最大值
      -m	the maximum resident set size 
      -n	the maximum number of open file descriptors # 设置最大可以的打开文件描述符。
      -p	the pipe buffer size
      -q	the maximum number of bytes in POSIX message queues
      -r	the maximum real-time scheduling priority
      -s	the maximum stack size
      -t	the maximum amount of cpu time in seconds
      -u	the maximum number of user processes  # 设置用户可以创建的最大进程数。
      -v	the size of virtual memory  # 设置虚拟内存的最大值
      -x	the maximum number of file locks
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="查看配置" tabindex="-1"><a class="header-anchor" href="#查看配置" aria-hidden="true">#</a> 查看配置</h3>
<p>查看所有的配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ulimit  -a
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看配置的最大打开文件数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ulimit  -n
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>更改配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ulimit  -SHn  65536
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>转载链接：https://www.cnblogs.com/operationhome/p/11966041.html</p>
</blockquote>
</template>
