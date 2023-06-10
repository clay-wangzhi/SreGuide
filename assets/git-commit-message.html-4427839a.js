import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,b as a,d as e,a as n,e as o}from"./app-1a5afd71.js";const r={},d=o(`<h1 id="commit-message-和-change-log-编写指南" tabindex="-1"><a class="header-anchor" href="#commit-message-和-change-log-编写指南" aria-hidden="true">#</a> Commit message 和 Change log 编写指南</h1><p>Git 每次提交代码，都要写 Commit message（提交说明），否则就不允许提交。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;hello world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>上面代码的<code>-m</code>参数，就是用来指定 commit mesage 的。</p><p>如果一行不够，可以只执行<code>git commit</code>，就会跳出文本编辑器，让你写多行。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>但是，一般来说，commit message 应该清晰明了，说明本次提交的目的。</p>`,7),p={href:"https://github.com/ajoslin/conventional-changelog/blob/master/conventions",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0",target:"_blank",rel:"noopener noreferrer"},u=o(`<h2 id="一、commit-message-的作用" tabindex="-1"><a class="header-anchor" href="#一、commit-message-的作用" aria-hidden="true">#</a> 一、Commit message 的作用</h2><p>格式化的Commit message，有几个好处。</p><p><strong>（1）提供更多的历史信息，方便快速浏览。</strong></p><p>比如，下面的命令显示上次发布后的变动，每个commit占据一行。你只看行首，就知道某次 commit 的目的。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token operator">&lt;</span>last tag<span class="token operator">&gt;</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="http://www.ruanyifeng.com/blogimg/asset/2016/bg2016010604.png" alt="img"></p><p><strong>（2）可以过滤某些commit（比如文档改动），便于快速查找信息。</strong></p><p>比如，下面的命令仅仅显示本次发布新增加的功能。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token operator">&lt;</span>last release<span class="token operator">&gt;</span> HEAD <span class="token parameter variable">--grep</span> feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><strong>（3）可以直接从commit生成Change log。</strong></p><p>Change Log 是发布新版本时，用来说明与上一个版本差异的文档，详见后文。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2016/bg2016010603.png" alt="img"></p><h2 id="二、commit-message-的格式" tabindex="-1"><a class="header-anchor" href="#二、commit-message-的格式" aria-hidden="true">#</a> 二、Commit message 的格式</h2><p>每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
// 空一行
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
// 空一行
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>其中，Header 是必需的，Body 和 Footer 可以省略。</p><p>不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。</p><h3 id="_2-1-header" tabindex="-1"><a class="header-anchor" href="#_2-1-header" aria-hidden="true">#</a> 2.1 Header</h3><p>Header部分只有一行，包括三个字段：<code>type</code>（必需）、<code>scope</code>（可选）和<code>subject</code>（必需）。</p><p><strong>（1）type</strong></p><p><code>type</code>用于说明 commit 的类别，只允许使用下面7个标识。</p><blockquote><ul><li>feat：新功能（feature）</li><li>fix：修补bug</li><li>docs：文档（documentation）</li><li>style： 格式（不影响代码运行的变动）</li><li>refactor：重构（即不是新增功能，也不是修改bug的代码变动）</li><li>test：增加测试</li><li>chore：构建过程或辅助工具的变动</li></ul></blockquote><p>如果<code>type</code>为<code>feat</code>和<code>fix</code>，则该 commit 将肯定出现在 Change log 之中。其他情况（<code>docs</code>、<code>chore</code>、<code>style</code>、<code>refactor</code>、<code>test</code>）由你决定，要不要放入 Change log，建议是不要。</p><p><strong>（2）scope</strong></p><p><code>scope</code>用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。</p><p><strong>（3）subject</strong></p><p><code>subject</code>是 commit 目的的简短描述，不超过50个字符。</p><blockquote><ul><li>以动词开头，使用第一人称现在时，比如<code>change</code>，而不是<code>changed</code>或<code>changes</code></li><li>第一个字母小写</li><li>结尾不加句号（<code>.</code>）</li></ul></blockquote><h3 id="_2-2-body" tabindex="-1"><a class="header-anchor" href="#_2-2-body" aria-hidden="true">#</a> 2.2 Body</h3><p>Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>More detailed explanatory text, <span class="token keyword">if</span> necessary.  Wrap it to 
about <span class="token number">72</span> characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>有两个注意点。</p><p>（1）使用第一人称现在时，比如使用<code>change</code>而不是<code>changed</code>或<code>changes</code>。</p><p>（2）应该说明代码变动的动机，以及与以前行为的对比。</p><h3 id="_2-3-footer" tabindex="-1"><a class="header-anchor" href="#_2-3-footer" aria-hidden="true">#</a> 2.3 Footer</h3><p>Footer 部分只用于两种情况。</p><p><strong>（1）不兼容变动</strong></p><p>如果当前代码与上一个版本不兼容，则 Footer 部分以<code>BREAKING CHANGE</code>开头，后面是对变动的描述、以及变动理由和迁移方法。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: <span class="token punctuation">{</span>
      myAttr: <span class="token string">&#39;attribute&#39;</span>,
    <span class="token punctuation">}</span>

    After:

    scope: <span class="token punctuation">{</span>
      myAttr: <span class="token string">&#39;@&#39;</span>,
    <span class="token punctuation">}</span>

    The removed <span class="token variable"><span class="token variable">\`</span>inject<span class="token variable">\`</span></span> wasn&#39;t generaly useful <span class="token keyword">for</span> directives so there should be no code using it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>（2）关闭 Issue</strong></p><p>如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Closes <span class="token comment">#234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>也可以一次关闭多个 issue 。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Closes <span class="token comment">#123, #245, #992</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="_2-4-revert" tabindex="-1"><a class="header-anchor" href="#_2-4-revert" aria-hidden="true">#</a> 2.4 Revert</h3><p>还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以<code>revert:</code>开头，后面跟着被撤销 Commit 的 Header。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>revert: feat<span class="token punctuation">(</span>pencil<span class="token punctuation">)</span>: <span class="token function">add</span> <span class="token string">&#39;graphiteWidth&#39;</span> option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Body部分的格式是固定的，必须写成<code>This reverts commit &lt;hash&gt;.</code>，其中的<code>hash</code>是被撤销 commit 的 SHA 标识符。</p><p>如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的<code>Reverts</code>小标题下面。</p><h2 id="三、commitizen" tabindex="-1"><a class="header-anchor" href="#三、commitizen" aria-hidden="true">#</a> 三、Commitizen</h2>`,50),g={href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"},b=o(`<p>安装命令如下。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> commitizen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ commitizen init cz-conventional-changelog <span class="token parameter variable">--save</span> --save-exact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>以后，凡是用到<code>git commit</code>命令，一律改为使用<code>git cz</code>。这时，就会出现选项，用来生成符合格式的 Commit message。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2016/bg2016010605.png" alt="img"></p><h2 id="四、validate-commit-msg" tabindex="-1"><a class="header-anchor" href="#四、validate-commit-msg" aria-hidden="true">#</a> 四、validate-commit-msg</h2>`,7),h={href:"https://github.com/kentcdodds/validate-commit-msg",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/kentcdodds/validate-commit-msg/blob/master/index.js",target:"_blank",rel:"noopener noreferrer"},k=a("code",null,"validate-commit-msg.js",-1),f=a("code",null,"package.json",-1),_={href:"http://npm.im/ghooks",target:"_blank",rel:"noopener noreferrer"},q=a("code",null,"commit-msg",-1),C=o(`<blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token string-property property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;ghooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./validate-commit-msg.js&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>然后，每次<code>git commit</code>的时候，这个脚本就会自动检查 Commit message 是否合格。如果不合格，就会报错。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span> 
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;edit markdown&quot;</span> 
INVALID COMMIT MSG: does not match <span class="token string">&quot;&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;&quot;</span> <span class="token operator">!</span> was: edit markdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="五、生成-change-log" tabindex="-1"><a class="header-anchor" href="#五、生成-change-log" aria-hidden="true">#</a> 五、生成 Change log</h2>`,4),x={href:"https://github.com/ajoslin/conventional-changelog/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/karma-runner/karma/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/btford/grunt-conventional-changelog/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},j=a("p",null,"生成的文档包括以下三个部分。",-1),A=a("blockquote",null,[a("ul",null,[a("li",null,"New features"),a("li",null,"Bug fixes"),a("li",null,"Breaking changes.")])],-1),G=a("p",null,"每个部分都会罗列相关的 commit ，并且有指向这些 commit 的链接。当然，生成的文档允许手动修改，所以发布前，你还可以添加其他内容。",-1),N={href:"https://github.com/ajoslin/conventional-changelog",target:"_blank",rel:"noopener noreferrer"},H=o(`<blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> conventional-changelog
$ <span class="token builtin class-name">cd</span> my-project
$ conventional-changelog <span class="token parameter variable">-p</span> angular <span class="token parameter variable">-i</span> CHANGELOG.md <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>上面命令不会覆盖以前的 Change log，只会在<code>CHANGELOG.md</code>的头部加上自从上次发布以来的变动。</p><p>如果你想生成所有发布的 Change log，要改为运行下面的命令。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ conventional-changelog <span class="token parameter variable">-p</span> angular <span class="token parameter variable">-i</span> CHANGELOG.md <span class="token parameter variable">-w</span> <span class="token parameter variable">-r</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>为了方便使用，可以将其写入<code>package.json</code>的<code>scripts</code>字段。</p><blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;changelog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;conventional-changelog -p angular -i CHANGELOG.md -w -r 0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>以后，直接运行下面的命令即可。</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run changelog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><blockquote><p>转载自：阮一峰 Commit message 和 Change log 编写指南</p><p>https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html</p></blockquote>`,9);function E(B,L){const s=i("ExternalLinkIcon");return l(),c("div",null,[d,a("p",null,[e("目前，社区有多种 Commit message 的"),a("a",p,[e("写法规范"),n(s)]),e("。本文介绍"),a("a",m,[e("Angular 规范"),n(s)]),e("（见上图），这是目前使用最广的写法，比较合理和系统化，并且有配套的工具。")]),u,a("p",null,[a("a",g,[e("Commitizen"),n(s)]),e("是一个撰写合格 Commit message 的工具。")]),b,a("p",null,[a("a",h,[e("validate-commit-msg"),n(s)]),e(" 用于检查 Node 项目的 Commit message 是否符合格式。")]),a("p",null,[e("它的安装是手动的。首先，拷贝下面这个"),a("a",v,[e("JS文件"),n(s)]),e("，放入你的代码库。文件名可以取为"),k,e("。")]),a("p",null,[e("接着，把这个脚本加入 Git 的 hook。下面是在"),f,e("里面使用 "),a("a",_,[e("ghooks"),n(s)]),e("，把这个脚本加为"),q,e("时运行。")]),C,a("p",null,[e("如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成（"),a("a",x,[e("例1"),n(s)]),e("，"),a("a",y,[e("例2"),n(s)]),e("，"),a("a",w,[e("例3"),n(s)]),e("）。")]),j,A,G,a("p",null,[a("a",N,[e("conventional-changelog"),n(s)]),e(" 就是生成 Change log 的工具，运行下面的命令即可。")]),H])}const z=t(r,[["render",E],["__file","git-commit-message.html.vue"]]);export{z as default};
