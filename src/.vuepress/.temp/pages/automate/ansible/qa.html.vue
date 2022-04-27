<template><h1 id="_7-常见问题" tabindex="-1"><a class="header-anchor" href="#_7-常见问题" aria-hidden="true">#</a> 7 常见问题</h1>
<h3 id="_4-3-关于ssh连接一些常见的错误说明" tabindex="-1"><a class="header-anchor" href="#_4-3-关于ssh连接一些常见的错误说明" aria-hidden="true">#</a> 4.3 关于ssh连接一些常见的错误说明</h3>
<ol>
<li><code>ERROR! to use the 'ssh' connection type with passwords, you must install the sshpass program</code></li>
</ol>
<p>完整错误示例如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ctnr:/etc/ansible# ansible '*.a32-168-1.*' -m ping
ctnr.a32-168-1.prod.yiz | FAILED! => {
    "failed": true, 
    "msg": "ERROR! to use the 'ssh' connection type with passwords, you must install the sshpass program"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>一般出现这种错误，是在通过密码验证远程被管理机的时候，需要在server端安装sshpass：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum install sshpass -y 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol>
<li><code>Using a SSH password instead of a key is not possible because Host Key checking is enabled and sshpass does not support this. Please add this host's fingerprint to your known_hosts file to manage this host</code></li>
</ol>
<p>完整错误如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ansible test -a 'uptime'

192.168.1.1| FAILED =>Using a SSH password instead of a key is not possible because HostKey checking is enabled and sshpass does not support this.Please add this host's fingerprint to your known_hosts file to manage this host.
192.168.1.2 | FAILED => Using a SSH password instead of a key is not possible because Host Key checking is enabled and sshpass does not support this.  Please add this host's fingerprint to your known_hosts file to manage this host.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这种错误通常就出现在server端第一次连接被管理机的时候，就是上面说到的需要通过输入yes/no进行确认将key字符串加入到<code>~/.ssh/known_hosts</code>文件中。</p>
<p>解决办法有两个：</p>
<ul>
<li>通过修改上面提到的host_key_checking，将其设置为false</li>
<li>通过修改ssh_args参数，修改如下：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh_args = -C -o ControlMaster=auto -o ControlPersist=60s -o StrictHostKeyChecking=no 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
