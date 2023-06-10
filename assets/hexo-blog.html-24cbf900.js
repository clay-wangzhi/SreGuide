import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as d,f as o,b as e,d as n,a as s,e as i}from"./app-f536079c.js";const c={},u=e("p",null,[n("​ 本文主要讲解博客的搭建过程，next主题优化，next配置文件详解等。"),e("img",{src:"https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/blogchongjianfengmian.jpg",alt:""})],-1),p=e("h2",{id:"hexo-github的搭建过程2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hexo-github的搭建过程2","aria-hidden":"true"},"#"),n(" hexo+github的搭建过程2")],-1),h=e("h3",{id:"准备安装软件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备安装软件","aria-hidden":"true"},"#"),n(" 准备安装软件")],-1),v=e("p",null,[e("strong",null,"依次安装")],-1),m={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"配置和使用github",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置和使用github","aria-hidden":"true"},"#"),n(" 配置和使用github")],-1),x=e("h4",{id:"注册github",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注册github","aria-hidden":"true"},"#"),n(" 注册github")],-1),k={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://link.zhihu.com/?target=http%3A//username.github.io",target:"_blank",rel:"noopener noreferrer"},f=e("h4",{id:"创建repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建repository","aria-hidden":"true"},"#"),n(" 创建Repository")],-1),y={href:"https://link.zhihu.com/?target=http%3A//username.github.io",target:"_blank",rel:"noopener noreferrer"},S=i(`<p>其他的可以选择添加一些描述也可以选择默认什么也不添加 ，点击creat repository</p><h4 id="配置ssh-keys" tabindex="-1"><a class="header-anchor" href="#配置ssh-keys" aria-hidden="true">#</a> 配置SSH keys</h4><p>运行git bash</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;邮件地址@youremail.com&quot;</span>
Generating public/private rsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/Users/your_user_directory/.ssh/id_rsa<span class="token punctuation">)</span>:<span class="token operator">&lt;</span>回车就好<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【提示1】这里的邮箱地址，输入注册 Github 的邮箱地址；</p><p>【提示2】「-C」的是大写的「C」</p><p>然后系统会要你输入密码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>:<span class="token operator">&lt;</span>设置密码<span class="token operator">&gt;</span>
Enter same passphrase again:<span class="token operator">&lt;</span>再次输入密码<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在回车中会提示你输入一个密码，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入。这个设置是防止别人往你的项目里提交内容。</p><p>注意：输入密码的时候没有输入痕迹的，不要以为什么也没有输入。</p><h4 id="添加ssh-key到github" tabindex="-1"><a class="header-anchor" href="#添加ssh-key到github" aria-hidden="true">#</a> 添加SSH Key到GitHub</h4><p>在本地文件夹找到id_rsa.pub文件，.ssh文件夹里记事本打开这个文件复制全部内容到github相应位。</p><p><strong>测试</strong></p><p>打开git bash，输入以下代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如何返回值中有successfully字段代表配置成功了。</p><h4 id="设置用户信息" tabindex="-1"><a class="header-anchor" href="#设置用户信息" aria-hidden="true">#</a> 设置用户信息</h4><p>打开git bash，完善个人信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;user&quot;</span> //输入注册时的username
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email  <span class="token string">&quot;email&quot;</span> //填写注册邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搭建hexo博客" tabindex="-1"><a class="header-anchor" href="#搭建hexo博客" aria-hidden="true">#</a> 搭建hexo博客</h3><p>利用npm命令安装hexo</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ npm install -g hexo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>创建独立博客项目文件夹</strong></li></ul><p>安装完成后，关掉前面那个 Git Bash 窗口。在本地创建一个与 Repository 中博客项目同名的文件夹（如E:\\username.github.io）在文件夹上点击鼠标右键，选择 Git bash here；</p><p>【提示】在进行博客搭建工作时，每次使用命令都要在E:\\username.github.io目录下。</p><p>执行下面的指令，Hexo 就会自动在 E:\\username.github.io文件夹建立独立博客所需要的所有文件啦！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ hexo init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>安装依赖包</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>确保git部署</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> hexo-deployer-git <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>本地查看</strong></li></ul><p>现在已经搭建好本地的 Hexo 博客了，执行完下面的命令就可以到浏览器输入 localhost:4000 查看到啦</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ hexo g
$ hexo s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>hexo g 每次进行相应改动都要hexo g 生成一下</p><p>hexo s 启动服务预览</p><p>执行完 hexo init 命令后会给一个默认的主题：landscape</p>`,37),q={href:"https://hexo.io/themes/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.zhihu.com/question/24422335/answer/46357100",target:"_blank",rel:"noopener noreferrer"},E=i(`<p>找到它所在的 Github Repository （怎么找，我喜欢的那个，恰好博主放了他的github地址）</p><p>找到之后通过git命令下载</p><p>在主题的repository点击clone 复制一下那个地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/theme-next/hexo-theme-next themes/next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="next主题使用及优化" tabindex="-1"><a class="header-anchor" href="#next主题使用及优化" aria-hidden="true">#</a> next主题使用及优化</h2><h3 id="启用主题" tabindex="-1"><a class="header-anchor" href="#启用主题" aria-hidden="true">#</a> 启用主题</h3><p>与所有 Hexo 主题启用的模式一样。 当 克隆/下载 完成后，打开 站点配置文件， 找到 <code>theme</code> 字段，并将其值更改为 <code>next</code>。</p><p>启用 NexT 主题</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">theme</span><span class="token punctuation">:</span> next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>到此，NexT 主题安装完成。下一步我们将验证主题是否正确启用。在切换主题之后、验证之前， 我们最好使用 <code>hexo clean</code> 来清除 Hexo 的缓存。</p><h3 id="选择-scheme" tabindex="-1"><a class="header-anchor" href="#选择-scheme" aria-hidden="true">#</a> 选择 Scheme</h3><p>Scheme 是 NexT 提供的一种特性，借助于 Scheme，NexT 为你提供多种不同的外观。同时，几乎所有的配置都可以 在 Scheme 之间共用。目前 NexT 支持三种 Scheme，他们是：</p><ul><li>Muse - 默认 Scheme，这是 NexT 最初的版本，黑白主调，大量留白</li><li>Mist - Muse 的紧凑版本，整洁有序的单栏外观</li><li>Pisces - 双栏 Scheme，小家碧玉似的清新</li></ul><p>Scheme 的切换通过更改 主题配置文件，搜索 scheme 关键字。 你会看到有三行 scheme 的配置，将你需用启用的 scheme 前面注释 <code>#</code> 去除即可。</p><p>选择 Pisces Scheme</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#scheme: Muse</span>
<span class="token comment">#scheme: Mist</span>
<span class="token key atrule">scheme</span><span class="token punctuation">:</span> Pisces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置-语言" tabindex="-1"><a class="header-anchor" href="#设置-语言" aria-hidden="true">#</a> 设置 语言</h3><p>编辑 站点配置文件， 将 <code>language</code> 设置成你所需要的语言。建议明确设置你所需要的语言，例如选用简体中文，配置如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">language</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="local-search" tabindex="-1"><a class="header-anchor" href="#local-search" aria-hidden="true">#</a> Local Search</h3><p>添加百度/谷歌/本地 自定义站点内容搜索</p><ol><li>安装 <code>hexo-generator-searchdb</code>，在站点的根目录下执行以下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> hexo-generator-searchdb <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>编辑 站点配置文件，新增以下内容到任意位置：</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">search</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> search.xml
  <span class="token key atrule">field</span><span class="token punctuation">:</span> post
  <span class="token key atrule">format</span><span class="token punctuation">:</span> html
  <span class="token key atrule">limit</span><span class="token punctuation">:</span> <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>编辑 主题配置文件，启用本地搜索功能：</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Local search</span>
<span class="token key atrule">local_search</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文章模块的美化" tabindex="-1"><a class="header-anchor" href="#文章模块的美化" aria-hidden="true">#</a> 文章模块的美化</h2><h3 id="文章内代码美化" tabindex="-1"><a class="header-anchor" href="#文章内代码美化" aria-hidden="true">#</a> 文章内代码美化</h3><ul><li>行内代码 在主题目录下，将<code>source/css/_custom/custom.styl</code>文件修改如下：</li></ul><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>//行内代码样式
code {
    color: #ff7600;
    background: #fbf7f8;
    border: 1px solid #d6d6d6;
    padding:1px 4px;
    word-break: break-all;
    border-radius:4px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>区块代码 在主题目录下，修改<code>config.yml</code>文件：</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#   样式可选： normal | night | night eighties | night blue | night bright</span>
<span class="token key atrule">highlight_theme</span><span class="token punctuation">:</span> night
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文章结束语" tabindex="-1"><a class="header-anchor" href="#文章结束语" aria-hidden="true">#</a> 文章结束语</h3><ul><li>**添加模块文件 **</li></ul><p>在主题目录下<code>layout/_macro</code>中新建 <code>passage-end-tag.swig</code>文件,并添加以下内容：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>&lt;div&gt;
    {% if not is_index %}
        &lt;div style=&quot;text-align:center;color: #ccc;font-size:14px;&quot;&gt;
              -------------本文结束&lt;i class=&quot;fa fa-paw&quot;&gt;&lt;/i&gt;感谢您的阅读-------------
        &lt;/div&gt;
    {% endif %}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>导入模板文件</strong></li></ul><p>在<code>layout/_macro/post.swig</code>文件中，找到：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>{#####################}
{### END POST BODY ###}
{#####################}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面代码之前添加：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>&lt;div&gt;
      {% if not is_index %}
          {% include &#39;passage-end-tag.swig&#39; %}
      {% endif %}
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>配置</strong> 在主题配置文件中添加：</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 文章末尾添加“本文结束”标记</span>
<span class="token key atrule">passage_end_tag</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增强文章底部版权信息" tabindex="-1"><a class="header-anchor" href="#增强文章底部版权信息" aria-hidden="true">#</a> 增强文章底部版权信息</h3><ul><li>增加文章md文件的头部信息中添加<code>copyright: true</code>时，添加版权声明</li><li>增加文章标题、发布时间、更新时间等信息</li></ul><p>在目录 <code>next/layout/_macro/下</code>添加 <code>my-copyright.swig</code>：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>{% if page.copyright %}
&lt;div class=&quot;my_post_copyright&quot;&gt;
  &lt;script src=&quot;//cdn.bootcss.com/clipboard.js/1.5.10/clipboard.min.js&quot;&gt;&lt;/script&gt;
  
  &lt;!-- JS库 sweetalert 可修改路径 --&gt;
  &lt;script src=&quot;https://cdn.bootcss.com/jquery/2.0.0/jquery.min.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;https://unpkg.com/sweetalert/dist/sweetalert.min.js&quot;&gt;&lt;/script&gt;
  &lt;p&gt;&lt;span&gt;本文标题:&lt;/span&gt;&lt;a href=&quot;{{ url_for(page.path) }}&quot;&gt;{{ page.title }}&lt;/a&gt;&lt;/p&gt;
  &lt;p&gt;&lt;span&gt;文章作者:&lt;/span&gt;&lt;a href=&quot;/&quot; title=&quot;访问 {{ theme.author }} 的个人博客&quot;&gt;{{ theme.author }}&lt;/a&gt;&lt;/p&gt;
  &lt;p&gt;&lt;span&gt;发布时间:&lt;/span&gt;{{ page.date.format(&quot;YYYY年MM月DD日 - HH:MM&quot;) }}&lt;/p&gt;
  &lt;p&gt;&lt;span&gt;最后更新:&lt;/span&gt;{{ page.updated.format(&quot;YYYY年MM月DD日 - HH:MM&quot;) }}&lt;/p&gt;
  &lt;p&gt;&lt;span&gt;原始链接:&lt;/span&gt;&lt;a href=&quot;{{ url_for(page.path) }}&quot; title=&quot;{{ page.title }}&quot;&gt;{{ page.permalink }}&lt;/a&gt;
    &lt;span class=&quot;copy-path&quot;  title=&quot;点击复制文章链接&quot;&gt;&lt;i class=&quot;fa fa-clipboard&quot; data-clipboard-text=&quot;{{ page.permalink }}&quot;  aria-label=&quot;复制成功！&quot;&gt;&lt;/i&gt;&lt;/span&gt;
  &lt;/p&gt;
  &lt;p&gt;&lt;span&gt;许可协议:&lt;/span&gt;&lt;i class=&quot;fa fa-creative-commons&quot;&gt;&lt;/i&gt; &lt;a rel=&quot;license&quot; href=&quot;https://creativecommons.org/licenses/by-nc-nd/4.0/&quot; target=&quot;_blank&quot; title=&quot;Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)&quot;&gt;署名-非商业性使用-禁止演绎 4.0 国际&lt;/a&gt; 转载请保留原文链接及作者。&lt;/p&gt;  
&lt;/div&gt;
&lt;script&gt; 
    var clipboard = new Clipboard(&#39;.fa-clipboard&#39;);
    $(&quot;.fa-clipboard&quot;).click(function(){
      clipboard.on(&#39;success&#39;, function(){
        swal({   
          title: &quot;&quot;,   
          text: &#39;复制成功&#39;,
          icon: &quot;success&quot;, 
          showConfirmButton: true
          });
	});
    });  
&lt;/script&gt;
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在目录<code>next/source/css/_common/components/post/</code>下添加<code>my-post-copyright.styl</code>：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.my_post_copyright {
  width: 85%;
  max-width: 45em;
  margin: 2.8em auto 0;
  padding: 0.5em 1.0em;
  border: 1px solid #d3d3d3;
  font-size: 0.93rem;
  line-height: 1.6em;
  word-break: break-all;
  background: rgba(255,255,255,0.4);
}
.my_post_copyright p{margin:0;}
.my_post_copyright span {
  display: inline-block;
  width: 5.2em;
  color: #b5b5b5;
  font-weight: bold;
}
.my_post_copyright .raw {
  margin-left: 1em;
  width: 5em;
}
.my_post_copyright a {
  color: #808080;
  border-bottom:0;
}
.my_post_copyright a:hover {
  color: #a3d2a3;
  text-decoration: underline;
}
.my_post_copyright:hover .fa-clipboard {
  color: #000;
}
.my_post_copyright .post-url:hover {
  font-weight: normal;
}
.my_post_copyright .copy-path {
  margin-left: 1em;
  width: 1em;
  +mobile(){display:none;}
}
.my_post_copyright .copy-path:hover {
  color: #808080;
  cursor: pointer;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>next/layout/_macro/post.swig</code>，在代码</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>{#####################}
{### END POST BODY ###}
{#####################}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之前添加增加如下代码：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>&lt;div&gt;
      {% if not is_index %}
        {% include &#39;my-copyright.swig&#39; %}
      {% endif %}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>next/source/css/_common/components/post/post.styl</code>文件，在最后一行增加代码：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>@import &quot;my-post-copyright&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存重新生成即可。</p><h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2><p><code>LaTeX-incompatible input and strict mode is set to &#39;warn&#39;: Unicode text character</code></p><p>产生的原因：而在 Markdown 语法中，<strong>两个 $ 符号是数学符号和公式</strong>的使用。要想使用单个 $，要加个转义字符 <code>\\</code>。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,61),w={href:"https://zhuanlan.zhihu.com/p/32957389",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/theme-next/hexo-theme-next",target:"_blank",rel:"noopener noreferrer"},B={href:"https://theme-next.iissnan.com",target:"_blank",rel:"noopener noreferrer"},N={href:"http://shenzekun.cn/hexo%E7%9A%84next%E4%B8%BB%E9%A2%98%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://iassas.com/archives/d6a90b9.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://blog.csdn.net/weixin_39345384/article/details/80544660",target:"_blank",rel:"noopener noreferrer"},$={href:"http://zhuxin.tech/2017/10/20/%E7%BB%99%20Hexo%20%E6%90%AD%E5%BB%BA%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%A2%9E%E5%8A%A0%E7%99%BE%E5%BA%A6%E8%B0%B7%E6%AD%8C%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E9%AA%8C%E8%AF%81/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/theme-next/hexo-symbols-count-time",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.jianshu.com/p/344cf061598d",target:"_blank",rel:"noopener noreferrer"};function j(Y,z){const a=t("ExternalLinkIcon");return r(),d("div",null,[u,o("more"),p,h,v,e("ul",null,[e("li",null,[e("a",m,[n("Node.js"),s(a)])]),e("li",null,[e("a",b,[n("Git"),s(a)])])]),g,x,e("p",null,[n("访问"),e("a",k,[n("github.com"),s(a)]),n("右上角singnup")]),e("p",null,[n("uername 最好都用小写，因为最后建立的博客地址是："),e("a",_,[n("http://username.github.io"),s(a)]),n("；邮箱十分重要，GitHub 上很多通知都是通过邮箱的。")]),f,e("p",null,[n("Repository 名字应该是"),e("a",y,[n("http://username.github.io"),s(a)]),n("。")]),S,e("p",null,[n("你可以到官网找你喜欢的主题进行下载 "),e("a",q,[n("hexo themes"),s(a)]),n(),e("a",C,[n("知乎：有哪些好看的 Hexo 主题？"),s(a)])]),E,e("blockquote",null,[e("p",null,[e("a",w,[n("技术小白搭建hexo+github博客"),s(a)])]),e("p",null,[e("a",A,[n("next最新版主题下载使用"),s(a)])]),e("p",null,[e("a",B,[n("next主题官方文档"),s(a)])]),e("p",null,[e("a",N,[n("next主题个性化教程"),s(a)])]),e("p",null,[e("a",D,[n("next主题配置文件详解"),s(a)])]),e("p",null,[e("a",H,[n("NexT v6.0+ 背景动画Canvas_nest设置无效的解决方案"),s(a)])]),e("p",null,[e("a",$,[n("给Hexo搭建的博客增加百度谷歌搜索引擎验证"),s(a)])]),e("p",null,[e("a",M,[n("添加文章字数和读取文章的时间"),s(a)])]),e("p",null,[e("a",T,[n("hexo + next主题高级配置"),s(a)])])])])}const P=l(c,[["render",j],["__file","hexo-blog.html.vue"]]);export{P as default};
