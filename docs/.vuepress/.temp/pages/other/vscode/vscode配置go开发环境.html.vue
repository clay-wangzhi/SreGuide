<template><div><ol>
<li>安装<code v-pre>go</code>插件</li>
<li>安装插件提供的工具
<ul>
<li><code v-pre>ctrl+shift+p</code>,  选择  <code v-pre>Go: Install/Update tools</code>，勾选全部工具进行安装</li>
<li>额外安装<code v-pre>gopls</code>工具，<code v-pre>Go modules</code>需要</li>
</ul>
</li>
<li>设置
<ul>
<li><code v-pre>settings.json</code>增加一行<code v-pre>&quot;go.formatTool&quot;: &quot;goimports&quot;</code>，也是<code v-pre>Go modules</code>的影响</li>
<li>增加一行<code v-pre>&quot;go.lintFlags&quot;: [&quot;--disable=all&quot;, &quot;--enable=errcheck&quot;],</code>代码规范检查</li>
</ul>
</li>
</ol>
</div></template>


