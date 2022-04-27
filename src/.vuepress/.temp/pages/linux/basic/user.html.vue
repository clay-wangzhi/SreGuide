<template><h1 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h1>
<p>查看当前登录的用户信息：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>id
uid=0(root) gid=0(root) groups=0(root)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>系统约定： RHEL6
uid: 0     	    特权用户
uid: 1~499 	    系统用户
uid: 500+  	    普通用户</p>
<h2 id="给普通用户提权" tabindex="-1"><a class="header-anchor" href="#给普通用户提权" aria-hidden="true">#</a> 给普通用户提权</h2>
<p>1.su</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>su -
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.添加用户至sudoers</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /etc/sudoers
%wheel  ALL=(ALL)       NOPASSWD: ALL
useradd aa -G wheel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>usermod aa -G wheel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
