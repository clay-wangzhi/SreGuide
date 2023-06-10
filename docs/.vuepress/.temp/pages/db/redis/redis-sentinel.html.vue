<template><div><h1 id="redis-6-x-哨兵安装配置" tabindex="-1"><a class="header-anchor" href="#redis-6-x-哨兵安装配置" aria-hidden="true">#</a> Redis 6.x 哨兵安装配置</h1>
<h2 id="_1-升级-gcc" tabindex="-1"><a class="header-anchor" href="#_1-升级-gcc" aria-hidden="true">#</a> 1 升级 gcc</h2>
<p>centos7 默认的 gcc 默认是4.8.5,版本小于 5.3 无法编译,需要先安装gcc新版才能编译</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc-c++
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> centos-release-scl
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
<span class="token builtin class-name">echo</span> <span class="token string">"source /opt/rh/devtoolset-9/enable"</span> <span class="token operator">>></span>/etc/profile 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-用-ansible-安装-redis-哨兵" tabindex="-1"><a class="header-anchor" href="#_2-用-ansible-安装-redis-哨兵" aria-hidden="true">#</a> 2 用 ansible 安装 redis 哨兵</h2>
<p>下载role</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">-b</span> dev-clay https://github.com/clay-wangzhi/Ansible-roles.git
<span class="token function">cp</span> <span class="token parameter variable">-r</span> Ansible-roles/redis5/ /etc/ansible/roles/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Example Playbook</p>
<p><code v-pre>cat /etc/ansible/playbooks/redis_sentinel.yml</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 172.16.xx.xx
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">redis_version</span><span class="token punctuation">:</span> <span class="token string">'6.2.4'</span>
    <span class="token punctuation">-</span> <span class="token key atrule">redis_master_host</span><span class="token punctuation">:</span> <span class="token string">'172.16.xx.xx'</span>
    <span class="token punctuation">-</span> <span class="token key atrule">redis_master_port</span><span class="token punctuation">:</span> <span class="token string">'6380'</span>
    <span class="token punctuation">-</span> <span class="token key atrule">redis_requirepass</span><span class="token punctuation">:</span> <span class="token string">'123456'</span>
    <span class="token punctuation">-</span> <span class="token key atrule">redis_masterauth</span><span class="token punctuation">:</span> <span class="token string">'123456'</span>
    <span class="token punctuation">-</span> <span class="token key atrule">redis_sentinel_monitors</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mymaster
        <span class="token key atrule">ip</span><span class="token punctuation">:</span> 172.16.xx.xx
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6380</span>
        <span class="token key atrule">quorum</span><span class="token punctuation">:</span> <span class="token number">2</span>
        <span class="token key atrule">masterauth</span><span class="token punctuation">:</span> <span class="token string">'123456'</span>
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> redis5<span class="token punctuation">,</span> <span class="token key atrule">redis_port</span><span class="token punctuation">:</span> <span class="token number">6380</span> <span class="token punctuation">}</span>
   <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> redis5<span class="token punctuation">,</span> <span class="token key atrule">redis_port</span><span class="token punctuation">:</span> <span class="token number">6381</span><span class="token punctuation">,</span> <span class="token key atrule">redis_slave</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token punctuation">}</span>
   <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> redis5<span class="token punctuation">,</span> <span class="token key atrule">redis_port</span><span class="token punctuation">:</span> <span class="token number">6382</span><span class="token punctuation">,</span> <span class="token key atrule">redis_slave</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token punctuation">}</span>
   <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> redis5<span class="token punctuation">,</span> <span class="token key atrule">redis_port</span><span class="token punctuation">:</span> <span class="token number">16380</span><span class="token punctuation">,</span> <span class="token key atrule">redis_sentinel</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token punctuation">}</span>
   <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> redis5<span class="token punctuation">,</span> <span class="token key atrule">redis_port</span><span class="token punctuation">:</span> <span class="token number">16381</span><span class="token punctuation">,</span> <span class="token key atrule">redis_sentinel</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token punctuation">}</span>
   <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> redis5<span class="token punctuation">,</span> <span class="token key atrule">redis_port</span><span class="token punctuation">:</span> <span class="token number">16382</span><span class="token punctuation">,</span> <span class="token key atrule">redis_sentinel</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ansible-playbook redis_sentinel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参考链接</p>
<ul>
<li><a href="http://www.phpheidong.com/blog/article/96564/60834d7eff7a49c816b5/" target="_blank" rel="noopener noreferrer">redis6.x哨兵模式安装配置<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/lework/Ansible-roles/blob/master/redis5/README.md" target="_blank" rel="noopener noreferrer">ansible roles redis<ExternalLinkIcon/></a></li>
<li><a href="http://www.manongjc.com/detail/23-xvtvqgqadcuaveg.html" target="_blank" rel="noopener noreferrer">使用Systemd启动Redis<ExternalLinkIcon/></a></li>
</ul>
</div></template>


