import{_ as t,r as l,c as i,a as n,b as a,F as p,e as r,d as e,o}from"./app.ac0f71d5.js";const c={},u=r('<p>\u200B \u672C\u6587\u4E3B\u8981\u8BB2\u89E3\u535A\u5BA2\u7684\u642D\u5EFA\u8FC7\u7A0B\uFF0Cnext\u4E3B\u9898\u4F18\u5316\uFF0Cnext\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3\u7B49\u3002<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/blogchongjianfengmian.jpg" alt="" loading="lazy"></p><h2 id="hexo-github\u7684\u642D\u5EFA\u8FC7\u7A0B2" tabindex="-1"><a class="header-anchor" href="#hexo-github\u7684\u642D\u5EFA\u8FC7\u7A0B2" aria-hidden="true">#</a> hexo+github\u7684\u642D\u5EFA\u8FC7\u7A0B2</h2><h3 id="\u51C6\u5907\u5B89\u88C5\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5B89\u88C5\u8F6F\u4EF6" aria-hidden="true">#</a> \u51C6\u5907\u5B89\u88C5\u8F6F\u4EF6</h3><p><strong>\u4F9D\u6B21\u5B89\u88C5</strong></p>',4),d={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},b=e("Node.js"),h={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},m=e("Git"),g=n("h3",{id:"\u914D\u7F6E\u548C\u4F7F\u7528github",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u548C\u4F7F\u7528github","aria-hidden":"true"},"#"),e(" \u914D\u7F6E\u548C\u4F7F\u7528github")],-1),_=n("h4",{id:"\u6CE8\u518Cgithub",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6CE8\u518Cgithub","aria-hidden":"true"},"#"),e(" \u6CE8\u518Cgithub")],-1),x=e("\u8BBF\u95EE"),v={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},k=e("github.com"),f=e("\u53F3\u4E0A\u89D2singnup"),y=e("uername \u6700\u597D\u90FD\u7528\u5C0F\u5199\uFF0C\u56E0\u4E3A\u6700\u540E\u5EFA\u7ACB\u7684\u535A\u5BA2\u5730\u5740\u662F\uFF1A"),S={href:"https://link.zhihu.com/?target=http%3A//username.github.io",target:"_blank",rel:"noopener noreferrer"},q=e("http://username.github.io"),C=e("\uFF1B\u90AE\u7BB1\u5341\u5206\u91CD\u8981\uFF0CGitHub \u4E0A\u5F88\u591A\u901A\u77E5\u90FD\u662F\u901A\u8FC7\u90AE\u7BB1\u7684\u3002"),E=n("h4",{id:"\u521B\u5EFArepository",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u521B\u5EFArepository","aria-hidden":"true"},"#"),e(" \u521B\u5EFARepository")],-1),w=e("Repository \u540D\u5B57\u5E94\u8BE5\u662F"),A={href:"https://link.zhihu.com/?target=http%3A//username.github.io",target:"_blank",rel:"noopener noreferrer"},B=e("http://username.github.io"),N=e("\u3002"),D=r(`<p>\u5176\u4ED6\u7684\u53EF\u4EE5\u9009\u62E9\u6DFB\u52A0\u4E00\u4E9B\u63CF\u8FF0\u4E5F\u53EF\u4EE5\u9009\u62E9\u9ED8\u8BA4\u4EC0\u4E48\u4E5F\u4E0D\u6DFB\u52A0 \uFF0C\u70B9\u51FBcreat repository</p><h4 id="\u914D\u7F6Essh-keys" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Essh-keys" aria-hidden="true">#</a> \u914D\u7F6ESSH keys</h4><p>\u8FD0\u884Cgit bash</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen -t rsa -C <span class="token string">&quot;\u90AE\u4EF6\u5730\u5740@youremail.com&quot;</span>
Generating public/private rsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/Users/your_user_directory/.ssh/id_rsa<span class="token punctuation">)</span>:<span class="token operator">&lt;</span>\u56DE\u8F66\u5C31\u597D<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u3010\u63D0\u793A1\u3011\u8FD9\u91CC\u7684\u90AE\u7BB1\u5730\u5740\uFF0C\u8F93\u5165\u6CE8\u518C Github \u7684\u90AE\u7BB1\u5730\u5740\uFF1B</p><p>\u3010\u63D0\u793A2\u3011\u300C-C\u300D\u7684\u662F\u5927\u5199\u7684\u300CC\u300D</p><p>\u7136\u540E\u7CFB\u7EDF\u4F1A\u8981\u4F60\u8F93\u5165\u5BC6\u7801\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>:<span class="token operator">&lt;</span>\u8BBE\u7F6E\u5BC6\u7801<span class="token operator">&gt;</span>
Enter same passphrase again:<span class="token operator">&lt;</span>\u518D\u6B21\u8F93\u5165\u5BC6\u7801<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u56DE\u8F66\u4E2D\u4F1A\u63D0\u793A\u4F60\u8F93\u5165\u4E00\u4E2A\u5BC6\u7801\uFF0C\u8FD9\u4E2A\u5BC6\u7801\u4F1A\u5728\u4F60\u63D0\u4EA4\u9879\u76EE\u65F6\u4F7F\u7528\uFF0C\u5982\u679C\u4E3A\u7A7A\u7684\u8BDD\u63D0\u4EA4\u9879\u76EE\u65F6\u5219\u4E0D\u7528\u8F93\u5165\u3002\u8FD9\u4E2A\u8BBE\u7F6E\u662F\u9632\u6B62\u522B\u4EBA\u5F80\u4F60\u7684\u9879\u76EE\u91CC\u63D0\u4EA4\u5185\u5BB9\u3002</p><p>\u6CE8\u610F\uFF1A\u8F93\u5165\u5BC6\u7801\u7684\u65F6\u5019\u6CA1\u6709\u8F93\u5165\u75D5\u8FF9\u7684\uFF0C\u4E0D\u8981\u4EE5\u4E3A\u4EC0\u4E48\u4E5F\u6CA1\u6709\u8F93\u5165\u3002</p><h4 id="\u6DFB\u52A0ssh-key\u5230github" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0ssh-key\u5230github" aria-hidden="true">#</a> \u6DFB\u52A0SSH Key\u5230GitHub</h4><p>\u5728\u672C\u5730\u6587\u4EF6\u5939\u627E\u5230id_rsa.pub\u6587\u4EF6\uFF0C.ssh\u6587\u4EF6\u5939\u91CC\u8BB0\u4E8B\u672C\u6253\u5F00\u8FD9\u4E2A\u6587\u4EF6\u590D\u5236\u5168\u90E8\u5185\u5BB9\u5230github\u76F8\u5E94\u4F4D\u3002</p><p><strong>\u6D4B\u8BD5</strong></p><p>\u6253\u5F00git bash\uFF0C\u8F93\u5165\u4EE5\u4E0B\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ssh</span> -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u4F55\u8FD4\u56DE\u503C\u4E2D\u6709successfully\u5B57\u6BB5\u4EE3\u8868\u914D\u7F6E\u6210\u529F\u4E86\u3002</p><h4 id="\u8BBE\u7F6E\u7528\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a> \u8BBE\u7F6E\u7528\u6237\u4FE1\u606F</h4><p>\u6253\u5F00git bash\uFF0C\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> config --global user.name <span class="token string">&quot;user&quot;</span> //\u8F93\u5165\u6CE8\u518C\u65F6\u7684username
$ <span class="token function">git</span> config --global user.email  <span class="token string">&quot;email&quot;</span> //\u586B\u5199\u6CE8\u518C\u90AE\u7BB1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u642D\u5EFAhexo\u535A\u5BA2" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFAhexo\u535A\u5BA2" aria-hidden="true">#</a> \u642D\u5EFAhexo\u535A\u5BA2</h3><p>\u5229\u7528npm\u547D\u4EE4\u5B89\u88C5hexo</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm install -g hexo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>\u521B\u5EFA\u72EC\u7ACB\u535A\u5BA2\u9879\u76EE\u6587\u4EF6\u5939</strong></li></ul><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u5173\u6389\u524D\u9762\u90A3\u4E2A Git Bash \u7A97\u53E3\u3002\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u4E0E Repository \u4E2D\u535A\u5BA2\u9879\u76EE\u540C\u540D\u7684\u6587\u4EF6\u5939\uFF08\u5982E:\\username.github.io\uFF09\u5728\u6587\u4EF6\u5939\u4E0A\u70B9\u51FB\u9F20\u6807\u53F3\u952E\uFF0C\u9009\u62E9 Git bash here\uFF1B</p><p>\u3010\u63D0\u793A\u3011\u5728\u8FDB\u884C\u535A\u5BA2\u642D\u5EFA\u5DE5\u4F5C\u65F6\uFF0C\u6BCF\u6B21\u4F7F\u7528\u547D\u4EE4\u90FD\u8981\u5728E:\\username.github.io\u76EE\u5F55\u4E0B\u3002</p><p>\u6267\u884C\u4E0B\u9762\u7684\u6307\u4EE4\uFF0CHexo \u5C31\u4F1A\u81EA\u52A8\u5728 E:\\username.github.io\u6587\u4EF6\u5939\u5EFA\u7ACB\u72EC\u7ACB\u535A\u5BA2\u6240\u9700\u8981\u7684\u6240\u6709\u6587\u4EF6\u5566\uFF01</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ hexo init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>\u5B89\u88C5\u4F9D\u8D56\u5305</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>\u786E\u4FDDgit\u90E8\u7F72</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> hexo-deployer-git --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>\u672C\u5730\u67E5\u770B</strong></li></ul><p>\u73B0\u5728\u5DF2\u7ECF\u642D\u5EFA\u597D\u672C\u5730\u7684 Hexo \u535A\u5BA2\u4E86\uFF0C\u6267\u884C\u5B8C\u4E0B\u9762\u7684\u547D\u4EE4\u5C31\u53EF\u4EE5\u5230\u6D4F\u89C8\u5668\u8F93\u5165 localhost:4000 \u67E5\u770B\u5230\u5566</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ hexo g
$ hexo s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>hexo g \u6BCF\u6B21\u8FDB\u884C\u76F8\u5E94\u6539\u52A8\u90FD\u8981hexo g \u751F\u6210\u4E00\u4E0B</p><p>hexo s \u542F\u52A8\u670D\u52A1\u9884\u89C8</p><p>\u6267\u884C\u5B8C hexo init \u547D\u4EE4\u540E\u4F1A\u7ED9\u4E00\u4E2A\u9ED8\u8BA4\u7684\u4E3B\u9898\uFF1Alandscape</p>`,37),H=e("\u4F60\u53EF\u4EE5\u5230\u5B98\u7F51\u627E\u4F60\u559C\u6B22\u7684\u4E3B\u9898\u8FDB\u884C\u4E0B\u8F7D "),$={href:"https://hexo.io/themes/",target:"_blank",rel:"noopener noreferrer"},M=e("hexo themes"),T=e(),j={href:"https://www.zhihu.com/question/24422335/answer/46357100",target:"_blank",rel:"noopener noreferrer"},z=e("\u77E5\u4E4E\uFF1A\u6709\u54EA\u4E9B\u597D\u770B\u7684 Hexo \u4E3B\u9898\uFF1F"),Y=r(`<p>\u627E\u5230\u5B83\u6240\u5728\u7684 Github Repository \uFF08\u600E\u4E48\u627E\uFF0C\u6211\u559C\u6B22\u7684\u90A3\u4E2A\uFF0C\u6070\u597D\u535A\u4E3B\u653E\u4E86\u4ED6\u7684github\u5730\u5740\uFF09</p><p>\u627E\u5230\u4E4B\u540E\u901A\u8FC7git\u547D\u4EE4\u4E0B\u8F7D</p><p>\u5728\u4E3B\u9898\u7684repository\u70B9\u51FBclone \u590D\u5236\u4E00\u4E0B\u90A3\u4E2A\u5730\u5740</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/theme-next/hexo-theme-next themes/next
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="next\u4E3B\u9898\u4F7F\u7528\u53CA\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#next\u4E3B\u9898\u4F7F\u7528\u53CA\u4F18\u5316" aria-hidden="true">#</a> next\u4E3B\u9898\u4F7F\u7528\u53CA\u4F18\u5316</h2><h3 id="\u542F\u7528\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u4E3B\u9898" aria-hidden="true">#</a> \u542F\u7528\u4E3B\u9898</h3><p>\u4E0E\u6240\u6709 Hexo \u4E3B\u9898\u542F\u7528\u7684\u6A21\u5F0F\u4E00\u6837\u3002 \u5F53 \u514B\u9686/\u4E0B\u8F7D \u5B8C\u6210\u540E\uFF0C\u6253\u5F00 \u7AD9\u70B9\u914D\u7F6E\u6587\u4EF6\uFF0C \u627E\u5230 <code>theme</code> \u5B57\u6BB5\uFF0C\u5E76\u5C06\u5176\u503C\u66F4\u6539\u4E3A <code>next</code>\u3002</p><p>\u542F\u7528 NexT \u4E3B\u9898</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">theme</span><span class="token punctuation">:</span> next
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5230\u6B64\uFF0CNexT \u4E3B\u9898\u5B89\u88C5\u5B8C\u6210\u3002\u4E0B\u4E00\u6B65\u6211\u4EEC\u5C06\u9A8C\u8BC1\u4E3B\u9898\u662F\u5426\u6B63\u786E\u542F\u7528\u3002\u5728\u5207\u6362\u4E3B\u9898\u4E4B\u540E\u3001\u9A8C\u8BC1\u4E4B\u524D\uFF0C \u6211\u4EEC\u6700\u597D\u4F7F\u7528 <code>hexo clean</code> \u6765\u6E05\u9664 Hexo \u7684\u7F13\u5B58\u3002</p><h3 id="\u9009\u62E9-scheme" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9-scheme" aria-hidden="true">#</a> \u9009\u62E9 Scheme</h3><p>Scheme \u662F NexT \u63D0\u4F9B\u7684\u4E00\u79CD\u7279\u6027\uFF0C\u501F\u52A9\u4E8E Scheme\uFF0CNexT \u4E3A\u4F60\u63D0\u4F9B\u591A\u79CD\u4E0D\u540C\u7684\u5916\u89C2\u3002\u540C\u65F6\uFF0C\u51E0\u4E4E\u6240\u6709\u7684\u914D\u7F6E\u90FD\u53EF\u4EE5 \u5728 Scheme \u4E4B\u95F4\u5171\u7528\u3002\u76EE\u524D NexT \u652F\u6301\u4E09\u79CD Scheme\uFF0C\u4ED6\u4EEC\u662F\uFF1A</p><ul><li>Muse - \u9ED8\u8BA4 Scheme\uFF0C\u8FD9\u662F NexT \u6700\u521D\u7684\u7248\u672C\uFF0C\u9ED1\u767D\u4E3B\u8C03\uFF0C\u5927\u91CF\u7559\u767D</li><li>Mist - Muse \u7684\u7D27\u51D1\u7248\u672C\uFF0C\u6574\u6D01\u6709\u5E8F\u7684\u5355\u680F\u5916\u89C2</li><li>Pisces - \u53CC\u680F Scheme\uFF0C\u5C0F\u5BB6\u78A7\u7389\u4F3C\u7684\u6E05\u65B0</li></ul><p>Scheme \u7684\u5207\u6362\u901A\u8FC7\u66F4\u6539 \u4E3B\u9898\u914D\u7F6E\u6587\u4EF6\uFF0C\u641C\u7D22 scheme \u5173\u952E\u5B57\u3002 \u4F60\u4F1A\u770B\u5230\u6709\u4E09\u884C scheme \u7684\u914D\u7F6E\uFF0C\u5C06\u4F60\u9700\u7528\u542F\u7528\u7684 scheme \u524D\u9762\u6CE8\u91CA <code>#</code> \u53BB\u9664\u5373\u53EF\u3002</p><p>\u9009\u62E9 Pisces Scheme</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#scheme: Muse</span>
<span class="token comment">#scheme: Mist</span>
<span class="token key atrule">scheme</span><span class="token punctuation">:</span> Pisces
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u8BBE\u7F6E-\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-\u8BED\u8A00" aria-hidden="true">#</a> \u8BBE\u7F6E \u8BED\u8A00</h3><p>\u7F16\u8F91 \u7AD9\u70B9\u914D\u7F6E\u6587\u4EF6\uFF0C \u5C06 <code>language</code> \u8BBE\u7F6E\u6210\u4F60\u6240\u9700\u8981\u7684\u8BED\u8A00\u3002\u5EFA\u8BAE\u660E\u786E\u8BBE\u7F6E\u4F60\u6240\u9700\u8981\u7684\u8BED\u8A00\uFF0C\u4F8B\u5982\u9009\u7528\u7B80\u4F53\u4E2D\u6587\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">language</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="local-search" tabindex="-1"><a class="header-anchor" href="#local-search" aria-hidden="true">#</a> Local Search</h3><p>\u6DFB\u52A0\u767E\u5EA6/\u8C37\u6B4C/\u672C\u5730 \u81EA\u5B9A\u4E49\u7AD9\u70B9\u5185\u5BB9\u641C\u7D22</p><ol><li>\u5B89\u88C5 <code>hexo-generator-searchdb</code>\uFF0C\u5728\u7AD9\u70B9\u7684\u6839\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> hexo-generator-searchdb --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u7F16\u8F91 \u7AD9\u70B9\u914D\u7F6E\u6587\u4EF6\uFF0C\u65B0\u589E\u4EE5\u4E0B\u5185\u5BB9\u5230\u4EFB\u610F\u4F4D\u7F6E\uFF1A</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">search</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> search.xml
  <span class="token key atrule">field</span><span class="token punctuation">:</span> post
  <span class="token key atrule">format</span><span class="token punctuation">:</span> html
  <span class="token key atrule">limit</span><span class="token punctuation">:</span> <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>\u7F16\u8F91 \u4E3B\u9898\u914D\u7F6E\u6587\u4EF6\uFF0C\u542F\u7528\u672C\u5730\u641C\u7D22\u529F\u80FD\uFF1A</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Local search</span>
<span class="token key atrule">local_search</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6587\u7AE0\u6A21\u5757\u7684\u7F8E\u5316" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u6A21\u5757\u7684\u7F8E\u5316" aria-hidden="true">#</a> \u6587\u7AE0\u6A21\u5757\u7684\u7F8E\u5316</h2><h3 id="\u6587\u7AE0\u5185\u4EE3\u7801\u7F8E\u5316" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u5185\u4EE3\u7801\u7F8E\u5316" aria-hidden="true">#</a> \u6587\u7AE0\u5185\u4EE3\u7801\u7F8E\u5316</h3><ul><li>\u884C\u5185\u4EE3\u7801 \u5728\u4E3B\u9898\u76EE\u5F55\u4E0B\uFF0C\u5C06<code>source/css/_custom/custom.styl</code>\u6587\u4EF6\u4FEE\u6539\u5982\u4E0B\uFF1A</li></ul><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>//\u884C\u5185\u4EE3\u7801\u6837\u5F0F
code {
    color: #ff7600;
    background: #fbf7f8;
    border: 1px solid #d6d6d6;
    padding:1px 4px;
    word-break: break-all;
    border-radius:4px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u533A\u5757\u4EE3\u7801 \u5728\u4E3B\u9898\u76EE\u5F55\u4E0B\uFF0C\u4FEE\u6539<code>config.yml</code>\u6587\u4EF6\uFF1A</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#   \u6837\u5F0F\u53EF\u9009\uFF1A normal | night | night eighties | night blue | night bright</span>
<span class="token key atrule">highlight_theme</span><span class="token punctuation">:</span> night
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u6587\u7AE0\u7ED3\u675F\u8BED" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u7ED3\u675F\u8BED" aria-hidden="true">#</a> \u6587\u7AE0\u7ED3\u675F\u8BED</h3><ul><li>**\u6DFB\u52A0\u6A21\u5757\u6587\u4EF6 **</li></ul><p>\u5728\u4E3B\u9898\u76EE\u5F55\u4E0B<code>layout/_macro</code>\u4E2D\u65B0\u5EFA <code>passage-end-tag.swig</code>\u6587\u4EF6,\u5E76\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>&lt;div&gt;
    {% if not is_index %}
        &lt;div style=&quot;text-align:center;color: #ccc;font-size:14px;&quot;&gt;
              -------------\u672C\u6587\u7ED3\u675F&lt;i class=&quot;fa fa-paw&quot;&gt;&lt;/i&gt;\u611F\u8C22\u60A8\u7684\u9605\u8BFB-------------
        &lt;/div&gt;
    {% endif %}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><strong>\u5BFC\u5165\u6A21\u677F\u6587\u4EF6</strong></li></ul><p>\u5728<code>layout/_macro/post.swig</code>\u6587\u4EF6\u4E2D\uFF0C\u627E\u5230\uFF1A</p><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>{#####################}
{### END POST BODY ###}
{#####################}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728\u4E0A\u9762\u4EE3\u7801\u4E4B\u524D\u6DFB\u52A0\uFF1A</p><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>&lt;div&gt;
      {% if not is_index %}
          {% include &#39;passage-end-tag.swig&#39; %}
      {% endif %}
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><strong>\u914D\u7F6E</strong> \u5728\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0\uFF1A</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u6587\u7AE0\u672B\u5C3E\u6DFB\u52A0\u201C\u672C\u6587\u7ED3\u675F\u201D\u6807\u8BB0</span>
<span class="token key atrule">passage_end_tag</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u589E\u5F3A\u6587\u7AE0\u5E95\u90E8\u7248\u6743\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u589E\u5F3A\u6587\u7AE0\u5E95\u90E8\u7248\u6743\u4FE1\u606F" aria-hidden="true">#</a> \u589E\u5F3A\u6587\u7AE0\u5E95\u90E8\u7248\u6743\u4FE1\u606F</h3><ul><li>\u589E\u52A0\u6587\u7AE0md\u6587\u4EF6\u7684\u5934\u90E8\u4FE1\u606F\u4E2D\u6DFB\u52A0<code>copyright: true</code>\u65F6\uFF0C\u6DFB\u52A0\u7248\u6743\u58F0\u660E</li><li>\u589E\u52A0\u6587\u7AE0\u6807\u9898\u3001\u53D1\u5E03\u65F6\u95F4\u3001\u66F4\u65B0\u65F6\u95F4\u7B49\u4FE1\u606F</li></ul><p>\u5728\u76EE\u5F55 <code>next/layout/_macro/\u4E0B</code>\u6DFB\u52A0 <code>my-copyright.swig</code>\uFF1A</p><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>{% if page.copyright %}
&lt;div class=&quot;my_post_copyright&quot;&gt;
  &lt;script src=&quot;//cdn.bootcss.com/clipboard.js/1.5.10/clipboard.min.js&quot;&gt;&lt;/script&gt;
  
  &lt;!-- JS\u5E93 sweetalert \u53EF\u4FEE\u6539\u8DEF\u5F84 --&gt;
  &lt;script src=&quot;https://cdn.bootcss.com/jquery/2.0.0/jquery.min.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;https://unpkg.com/sweetalert/dist/sweetalert.min.js&quot;&gt;&lt;/script&gt;
  &lt;p&gt;&lt;span&gt;\u672C\u6587\u6807\u9898:&lt;/span&gt;&lt;a href=&quot;{{ url_for(page.path) }}&quot;&gt;{{ page.title }}&lt;/a&gt;&lt;/p&gt;
  &lt;p&gt;&lt;span&gt;\u6587\u7AE0\u4F5C\u8005:&lt;/span&gt;&lt;a href=&quot;/&quot; title=&quot;\u8BBF\u95EE {{ theme.author }} \u7684\u4E2A\u4EBA\u535A\u5BA2&quot;&gt;{{ theme.author }}&lt;/a&gt;&lt;/p&gt;
  &lt;p&gt;&lt;span&gt;\u53D1\u5E03\u65F6\u95F4:&lt;/span&gt;{{ page.date.format(&quot;YYYY\u5E74MM\u6708DD\u65E5 - HH:MM&quot;) }}&lt;/p&gt;
  &lt;p&gt;&lt;span&gt;\u6700\u540E\u66F4\u65B0:&lt;/span&gt;{{ page.updated.format(&quot;YYYY\u5E74MM\u6708DD\u65E5 - HH:MM&quot;) }}&lt;/p&gt;
  &lt;p&gt;&lt;span&gt;\u539F\u59CB\u94FE\u63A5:&lt;/span&gt;&lt;a href=&quot;{{ url_for(page.path) }}&quot; title=&quot;{{ page.title }}&quot;&gt;{{ page.permalink }}&lt;/a&gt;
    &lt;span class=&quot;copy-path&quot;  title=&quot;\u70B9\u51FB\u590D\u5236\u6587\u7AE0\u94FE\u63A5&quot;&gt;&lt;i class=&quot;fa fa-clipboard&quot; data-clipboard-text=&quot;{{ page.permalink }}&quot;  aria-label=&quot;\u590D\u5236\u6210\u529F\uFF01&quot;&gt;&lt;/i&gt;&lt;/span&gt;
  &lt;/p&gt;
  &lt;p&gt;&lt;span&gt;\u8BB8\u53EF\u534F\u8BAE:&lt;/span&gt;&lt;i class=&quot;fa fa-creative-commons&quot;&gt;&lt;/i&gt; &lt;a rel=&quot;license&quot; href=&quot;https://creativecommons.org/licenses/by-nc-nd/4.0/&quot; target=&quot;_blank&quot; title=&quot;Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)&quot;&gt;\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u7981\u6B62\u6F14\u7ECE 4.0 \u56FD\u9645&lt;/a&gt; \u8F6C\u8F7D\u8BF7\u4FDD\u7559\u539F\u6587\u94FE\u63A5\u53CA\u4F5C\u8005\u3002&lt;/p&gt;  
&lt;/div&gt;
&lt;script&gt; 
    var clipboard = new Clipboard(&#39;.fa-clipboard&#39;);
    $(&quot;.fa-clipboard&quot;).click(function(){
      clipboard.on(&#39;success&#39;, function(){
        swal({   
          title: &quot;&quot;,   
          text: &#39;\u590D\u5236\u6210\u529F&#39;,
          icon: &quot;success&quot;, 
          showConfirmButton: true
          });
	});
    });  
&lt;/script&gt;
{% endif %}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u5728\u76EE\u5F55<code>next/source/css/_common/components/post/</code>\u4E0B\u6DFB\u52A0<code>my-post-copyright.styl</code>\uFF1A</p><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>.my_post_copyright {
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u4FEE\u6539<code>next/layout/_macro/post.swig</code>\uFF0C\u5728\u4EE3\u7801</p><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>{#####################}
{### END POST BODY ###}
{#####################}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E4B\u524D\u6DFB\u52A0\u589E\u52A0\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>&lt;div&gt;
      {% if not is_index %}
        {% include &#39;my-copyright.swig&#39; %}
      {% endif %}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4FEE\u6539<code>next/source/css/_common/components/post/post.styl</code>\u6587\u4EF6\uFF0C\u5728\u6700\u540E\u4E00\u884C\u589E\u52A0\u4EE3\u7801\uFF1A</p><div class="language-CSS ext-CSS line-numbers-mode"><pre class="language-CSS"><code>@import &quot;my-post-copyright&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4FDD\u5B58\u91CD\u65B0\u751F\u6210\u5373\u53EF\u3002</p><h2 id="\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u7684\u95EE\u9898</h2><p><code>LaTeX-incompatible input and strict mode is set to &#39;warn&#39;: Unicode text character</code></p><p>\u4EA7\u751F\u7684\u539F\u56E0\uFF1A\u800C\u5728 Markdown \u8BED\u6CD5\u4E2D\uFF0C<strong>\u4E24\u4E2A $ \u7B26\u53F7\u662F\u6570\u5B66\u7B26\u53F7\u548C\u516C\u5F0F</strong>\u7684\u4F7F\u7528\u3002\u8981\u60F3\u4F7F\u7528\u5355\u4E2A $\uFF0C\u8981\u52A0\u4E2A\u8F6C\u4E49\u5B57\u7B26 <code>\\</code>\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,61),G={href:"https://zhuanlan.zhihu.com/p/32957389",target:"_blank",rel:"noopener noreferrer"},L=e("\u6280\u672F\u5C0F\u767D\u642D\u5EFAhexo+github\u535A\u5BA2"),P={href:"https://github.com/theme-next/hexo-theme-next",target:"_blank",rel:"noopener noreferrer"},O=e("next\u6700\u65B0\u7248\u4E3B\u9898\u4E0B\u8F7D\u4F7F\u7528"),R={href:"https://theme-next.iissnan.com",target:"_blank",rel:"noopener noreferrer"},V=e("next\u4E3B\u9898\u5B98\u65B9\u6587\u6863"),F={href:"http://shenzekun.cn/hexo%E7%9A%84next%E4%B8%BB%E9%A2%98%E4%B8%AA%E6%80%A7%E5%8C%96%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B.html",target:"_blank",rel:"noopener noreferrer"},I=e("next\u4E3B\u9898\u4E2A\u6027\u5316\u6559\u7A0B"),U={href:"https://iassas.com/archives/d6a90b9.html",target:"_blank",rel:"noopener noreferrer"},J=e("next\u4E3B\u9898\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3"),K={href:"https://blog.csdn.net/weixin_39345384/article/details/80544660",target:"_blank",rel:"noopener noreferrer"},X=e("NexT v6.0+ \u80CC\u666F\u52A8\u753BCanvas_nest\u8BBE\u7F6E\u65E0\u6548\u7684\u89E3\u51B3\u65B9\u6848"),Q={href:"http://zhuxin.tech/2017/10/20/%E7%BB%99%20Hexo%20%E6%90%AD%E5%BB%BA%E7%9A%84%E5%8D%9A%E5%AE%A2%E5%A2%9E%E5%8A%A0%E7%99%BE%E5%BA%A6%E8%B0%B7%E6%AD%8C%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E9%AA%8C%E8%AF%81/",target:"_blank",rel:"noopener noreferrer"},W=e("\u7ED9Hexo\u642D\u5EFA\u7684\u535A\u5BA2\u589E\u52A0\u767E\u5EA6\u8C37\u6B4C\u641C\u7D22\u5F15\u64CE\u9A8C\u8BC1"),Z={href:"https://github.com/theme-next/hexo-symbols-count-time",target:"_blank",rel:"noopener noreferrer"},nn=e("\u6DFB\u52A0\u6587\u7AE0\u5B57\u6570\u548C\u8BFB\u53D6\u6587\u7AE0\u7684\u65F6\u95F4"),en={href:"https://www.jianshu.com/p/344cf061598d",target:"_blank",rel:"noopener noreferrer"},sn=e("hexo + next\u4E3B\u9898\u9AD8\u7EA7\u914D\u7F6E");function an(rn,tn){const s=l("ExternalLinkIcon");return o(),i(p,null,[u,n("ul",null,[n("li",null,[n("a",d,[b,a(s)])]),n("li",null,[n("a",h,[m,a(s)])])]),g,_,n("p",null,[x,n("a",v,[k,a(s)]),f]),n("p",null,[y,n("a",S,[q,a(s)]),C]),E,n("p",null,[w,n("a",A,[B,a(s)]),N]),D,n("p",null,[H,n("a",$,[M,a(s)]),T,n("a",j,[z,a(s)])]),Y,n("blockquote",null,[n("p",null,[n("a",G,[L,a(s)])]),n("p",null,[n("a",P,[O,a(s)])]),n("p",null,[n("a",R,[V,a(s)])]),n("p",null,[n("a",F,[I,a(s)])]),n("p",null,[n("a",U,[J,a(s)])]),n("p",null,[n("a",K,[X,a(s)])]),n("p",null,[n("a",Q,[W,a(s)])]),n("p",null,[n("a",Z,[nn,a(s)])]),n("p",null,[n("a",en,[sn,a(s)])])])],64)}var pn=t(c,[["render",an],["__file","hexo-blog.html.vue"]]);export{pn as default};
