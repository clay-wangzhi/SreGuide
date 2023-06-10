import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,e as i}from"./app-1a5afd71.js";const s={},n=i(`<h1 id="软件包管理" tabindex="-1"><a class="header-anchor" href="#软件包管理" aria-hidden="true">#</a> 软件包管理</h1><h2 id="yum管理rpm包" tabindex="-1"><a class="header-anchor" href="#yum管理rpm包" aria-hidden="true">#</a> yum管理RPM包</h2><p>清空缓存及其它文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum clean all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>建立缓存数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询可用的仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum repolist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum list mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>升级</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询指定的文件属于哪个包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum provides */httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>卸载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y remove mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用rpm工具管理rpm包" tabindex="-1"><a class="header-anchor" href="#使用rpm工具管理rpm包" aria-hidden="true">#</a> 使用RPM工具管理RPM包</h2><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -ivh xxx.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>升级</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -Uvh xxx.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -q xxx //查询指定包是否安装
rpm -ql xxx //查询xxx安装的文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -e xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,25),t=[n];function r(l,c){return a(),d("div",null,t)}const v=e(s,[["render",r],["__file","rpm.html.vue"]]);export{v as default};
