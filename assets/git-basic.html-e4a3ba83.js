import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-3cf8be0b.js";const i={},t=e(`<h1 id="git的基本使用" tabindex="-1"><a class="header-anchor" href="#git的基本使用" aria-hidden="true">#</a> git的基本使用</h1><h2 id="由来" tabindex="-1"><a class="header-anchor" href="#由来" aria-hidden="true">#</a> 由来</h2><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/git.png" alt="git"></p><blockquote><p>要不说人家是大佬呢，一言不合就自己写一个👍</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>下载对应操作系统的 Git 客户端版本 https://git-scm.com/downloads</p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><p>在<code>centos</code>上安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ yum <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h3><p>下载对应的32位或者64位版本，点击安装即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token parameter variable">--version</span> <span class="token comment"># 查看版本号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h3><p>用<code>homebrew</code>命令安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ brew <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/git基本流程.png" alt="git基本流程"></p><table><thead><tr><th>名称</th><th>释义</th></tr></thead><tbody><tr><td>Workspace</td><td>工作区：<code>.git</code>文件所在的目录就是工作区，一般是项目的根目录</td></tr><tr><td>Index/Stage</td><td>暂存区：介于工作区和仓库区之间，暂存修改的</td></tr><tr><td>Repository</td><td>仓库区/本地仓库：git初始化后，会在当前目录生成一个<code>.git</code>目录，这就是版本库</td></tr><tr><td>Remote</td><td>远程仓库：网络上的另一个版本库，可以和本地库交互</td></tr></tbody></table><h3 id="git-的基本工作流程" tabindex="-1"><a class="header-anchor" href="#git-的基本工作流程" aria-hidden="true">#</a> git 的基本工作流程</h3><ol><li>在工作目录中修改文件。</li><li>暂存文件，将文件的快照放入暂存区域。</li><li>提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。</li></ol><h3 id="git-文件的生命周期" tabindex="-1"><a class="header-anchor" href="#git-文件的生命周期" aria-hidden="true">#</a> git 文件的生命周期</h3><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/git文件的生命周期2.png" alt="git文件的生命周期2"></p><ol><li><p>未追踪的文件（Untracked）在 <code>git add</code> 之后会变成已暂存（staged）状态。</p></li><li><p>未修改的文件（Unmodified）在被修改编辑之后会变成已修改（modified）状态。</p></li><li><p>已修改（modified）的文件在 <code>git add</code>之后会变成已暂存（staged）状态。</p></li><li><p>已暂存的文件（staged）在 <code>git commit</code> 之后会变成未修改（Unmodified）状态。</p></li><li><p>未修改的文件（Unmodified）在 <code>git rm</code> 之后会变成未跟踪（Untracked）状态(注意git rm会删除掉指定的文件)。</p></li></ol><h3 id="git-的三种状态" tabindex="-1"><a class="header-anchor" href="#git-的三种状态" aria-hidden="true">#</a> git 的三种状态</h3><ul><li>已修改（modified） 表示修改了文件，但还没保存到数据库中，目前在工作目录（Workspace）</li><li>已暂存（staged） 表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中，目前在暂存区域（Index）</li><li>已提交（committed） 表示数据已经安全的保存在本地仓库中，目前在本地仓库（Repository）</li></ul><h3 id="git-的文件分类" tabindex="-1"><a class="header-anchor" href="#git-的文件分类" aria-hidden="true">#</a> git 的文件分类</h3><ul><li>追踪的 Tracked，已经加入版本库中的文件</li><li>未追踪的 Untracked，未加入到版本库中的，未被管理的文件</li><li>忽略的 Ignored， git 不再关注的文件，例如一些临时文件</li></ul><p><strong><code>.gitignore</code>文件</strong></p><p>书写格式规范</p><ul><li>所有空行或者以 <code>＃</code> 开头的行都会被 Git 忽略。</li><li>可以使用标准的 glob 模式匹配。</li><li>匹配模式可以以（<code>/</code>）开头防止递归。</li><li>匹配模式可以以（<code>/</code>）结尾指定目录。</li><li>要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（<code>!</code>）取反。</li></ul><blockquote><p>详解参考 https://github.com/github/gitignore</p></blockquote><p><strong>glob模式</strong></p><p>所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。</p><p>星号（<code>*</code>）匹配零个或多个任意字符；</p><p><code>[abc]</code> 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；</p><p>问号（<code>?</code>）只匹配一个任意字符；</p><p>如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 <code>[0-9]</code> 表示匹配所有 0 到 9 的数字）;</p><p>使用两个星号（<code>*</code>) 表示匹配任意中间目录，比如<code>a/**/z</code> 可以匹配 <code>a/z</code>, <code>a/b/z</code> 或 <code>a/b/c/z</code>等。</p><h2 id="git基本操作" tabindex="-1"><a class="header-anchor" href="#git基本操作" aria-hidden="true">#</a> git基本操作</h2><h3 id="新建代码仓库" tabindex="-1"><a class="header-anchor" href="#新建代码仓库" aria-hidden="true">#</a> 新建代码仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在当前目录新建一个Git代码库</span>
$ <span class="token function">git</span> init

<span class="token comment"># 新建一个目录，将其初始化为Git代码库</span>
$ <span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

<span class="token comment"># 下载一个项目和它的整个代码历史</span>
$ <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置用户信息" tabindex="-1"><a class="header-anchor" href="#设置用户信息" aria-hidden="true">#</a> 设置用户信息</h3><p>Git的设置文件为<code>.gitconfig</code>，它可以在用户主目录下(全局配置)，也可以在项目目录下(项目配置)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置提交代码时的用户信息</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span>

<span class="token comment"># 显示当前的Git配置</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token comment"># 编辑Git配置文件</span>
$ <span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>--global<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-删除文件" tabindex="-1"><a class="header-anchor" href="#添加-删除文件" aria-hidden="true">#</a> 添加/删除文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加指定文件到暂存区</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># 添加指定目录到暂存区，包括子目录</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>

<span class="token comment"># 添加当前目录的所有文件到暂存区</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 删除工作区文件，并且将这次删除放入暂存区</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># 改名文件，并且将这个改名放入暂存区</span>
$ <span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>⚠️ 这一步是把文件的当前变化增加到暂存区中，也就是以后这个文件那需要版本库来跟踪管理，注意这不是提交。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将文件从暂存转成未暂存，从版本库中删除，但不删除工作目录的该文件，即文件恢复成不追踪的状态</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交" aria-hidden="true">#</a> 代码提交</h3><p>git的提交分为两个步骤：</p><ol><li>暂存变更：add作用是把新文件或者文件新的改动添加到一个暂存区stage，也就是加入到index中</li><li>提交变更：commit提交的是暂存区中的改动，而不是物理文件目前的改动，提交到当前分支，默认是master</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提交暂存区到仓库区</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交暂存区的指定文件到仓库区</span>
$ <span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交工作区自上次commit之后的变化，直接到仓库区</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-a</span>

<span class="token comment"># 提交时显示所有diff信息</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-v</span>

<span class="token comment"># 将add和commit合为一步</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&#39;message&#39;</span>

<span class="token comment"># 使用一次新的commit，替代上一次提交</span>
<span class="token comment"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 重做上一次commit，并包括指定文件的新变化</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程同步" tabindex="-1"><a class="header-anchor" href="#远程同步" aria-hidden="true">#</a> 远程同步</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从远程仓库中抓取和拉取， 它并不会自动合并或修改你当前的工作，要手动合并入你的工作</span>
$ <span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 列出所有远程仓库</span>
$ <span class="token function">git</span> remote

<span class="token comment"># 详细列出所有远程仓库</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 显示某个远程仓库的信息</span>
$ <span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 增加一个新的远程仓库，并命名</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># 取回远程仓库的变化，并与本地分支合并</span>
$ <span class="token function">git</span> pull  <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 上传本地指定分支到远程仓库</span>
<span class="token comment"># -u 第一次远程推送的时候加上，以后就可以不使用 -u 参数，可以 git push origin master,也可以 git push都使用默认</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>-u<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--force</span>

<span class="token comment"># 推送所有分支到远程仓库</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>远程版本库名<code>origin</code>，这是个习惯用法，将建立origin和后面url的映射，这些信息保存在<code>.git/config</code>文件的<code>[remote &quot;origin&quot;]</code>端中。</p></blockquote><p>分支</p><h2 id="分支-标签" tabindex="-1"><a class="header-anchor" href="#分支-标签" aria-hidden="true">#</a> 分支/标签</h2><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有本地分支</span>
$ <span class="token function">git</span> branch

<span class="token comment"># 列出所有远程分支</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-r</span>

<span class="token comment"># 列出所有本地分支和远程分支</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 新建一个分支，但依然停留在当前分支</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>newbranch<span class="token punctuation">]</span>

<span class="token comment"># 新建一个本地分支，并切换到该分支</span>
<span class="token comment"># 等价于这两个命令合在一起 git branch newbranch; git checkout newbranch</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>newbranch<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，指向指定commit</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，与指定的远程分支建立追踪关系</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">--track</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># 切换到指定分支，并更新工作区</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 切换到上一个分支</span>
$ <span class="token function">git</span> checkout -

<span class="token comment"># 建立追踪关系，在现有分支与指定的远程分支之间</span>
$ <span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># 合并指定分支到当前分支</span>
$ <span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 选择一个commit，合并进当前分支</span>
$ <span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 删除本地分支</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 删除远程分支</span>
$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-dr</span> <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>

<span class="token comment"># 检出版本v2.0</span>
$ <span class="token function">git</span> checkout v2.0

<span class="token comment"># 从远程分支develop创建新本地分支devel并检出</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> devel origin/develop

<span class="token comment"># 检出head版本的README文件（可用于修改错误回退）</span>
$ <span class="token function">git</span> checkout -- README     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有tag</span>
$ <span class="token function">git</span> tag

<span class="token comment"># 新建一个tag在当前commit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 新建一个tag在指定commit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 删除本地tag</span>
$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 删除远程tag</span>
$ <span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>

<span class="token comment"># 查看tag信息</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交指定tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交所有tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--tags</span>

<span class="token comment"># 新建一个分支，指向某个tag</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看信息" tabindex="-1"><a class="header-anchor" href="#查看信息" aria-hidden="true">#</a> 查看信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示有变更的文件</span>
$ <span class="token function">git</span> status

<span class="token comment"># 显示指定文件是什么人在什么时间修改过</span>
$ <span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交的元数据和内容变化</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交发生变化的文件</span>
$ <span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交时，某个文件的内容</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># 显示当前分支的最近几次提交</span>
$ <span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="diff-比较" tabindex="-1"><a class="header-anchor" href="#diff-比较" aria-hidden="true">#</a> <code>diff</code> 比较</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示暂存区和工作区的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示暂存区和上一个commit的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示工作区与当前分支最新commit之间的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示两次提交之间的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>

<span class="token comment"># 显示今天你写了多少行代码</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--shortstat</span> <span class="token string">&quot;@{0 day ago}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>HEAD</strong> HEAD 可以看做是一个游标，一般是指向当前分支最后一次提交。</p><p>HEAD 的值存储在<code>.git/HEAD</code>中。</p><table><thead><tr><th>表示</th><th>说明</th></tr></thead><tbody><tr><td>HEAD</td><td>指代最后一次 commit</td></tr><tr><td>HEAD^</td><td>指代上一次提交</td></tr><tr><td>HEAD^^</td><td>指代上上一次提交</td></tr><tr><td>HEAD~n</td><td>表示倒数第n次提交</td></tr></tbody></table><p><code>log</code> 提交历史</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前分支的版本历史</span>
$ <span class="token function">git</span> log

<span class="token comment"># 显示commit历史，以及每次commit发生变更的文件</span>
$ <span class="token function">git</span> log <span class="token parameter variable">--stat</span>

<span class="token comment"># 搜索提交历史，根据关键词</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-S</span> <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>

<span class="token comment"># 显示某个commit之后的所有变动，每个commit占据一行</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s

<span class="token comment"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--grep</span> feature

<span class="token comment"># 显示某个文件的版本历史，包括文件改名</span>
$ <span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
$ <span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示指定文件相关的每一次diff</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示过去5次提交</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--oneline</span>

<span class="token comment"># 显示所有提交过的用户，按提交次数排序</span>
$ <span class="token function">git</span> shortlog <span class="token parameter variable">-sn</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h2><ul><li><p>checkout 检出</p><p>checkout 用于创建、切换分支，或恢复工作区文件。</p><p>注意，checkout 会重写工作区，这个命令还是有危险性的。</p></li><li><p>reset 重置</p><p>reset 操作，要慎重，用于版本回滚，再恢复，但也要慎重使用。</p></li><li><p>revert 撤销</p><p>revert 主要用在主分支上，保留信息。在工作分支上，可以采用 reset 。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出暂存区可以被检出的文件</span>
$ <span class="token function">git</span> checkout

<span class="token comment"># 恢复暂存区的指定文件到工作区</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复某个commit的指定文件到暂存区和工作区</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复暂存区的所有文件到工作区</span>
$ <span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 重置暂存区与工作区，与上一次commit保持一致</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># 显示 commit 的信息，只要HEAD发生变化，就可以在这里看到</span>
$ <span class="token function">git</span> reflog

<span class="token comment"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--soft</span> commit

<span class="token comment"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--keep</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个commit，用来撤销指定commit</span>
<span class="token comment"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span>
$ <span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 暂时将未提交的变化移除，稍后再移入</span>
$ <span class="token function">git</span> stash
$ <span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>                         <span class="token comment"># git status等命令自动着色</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.status auto
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.diff auto
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.branch auto
<span class="token function">git</span> config <span class="token parameter variable">--global</span> color.interactive auto
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy                    <span class="token comment"># remove  proxy configuration on git</span>
<span class="token function">git</span> clone git+ssh://git@192.168.53.168/VT.git             <span class="token comment"># clone远程仓库</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>指定分支名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>远程仓库地址<span class="token operator">&gt;</span>                      <span class="token comment"># clone远程指定 分支</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token parameter variable">-m</span>
<span class="token function">git</span> show dfb02e6e4f2f7b573337763e5c0013802e392818         <span class="token comment"># 显示某个提交的详细内容</span>
<span class="token function">git</span> show dfb02                                            <span class="token comment"># 可只用commitid的前几位</span>
<span class="token function">git</span> show HEAD                                             <span class="token comment"># 显示HEAD提交日志</span>
<span class="token function">git</span> show HEAD^                                            <span class="token comment"># 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> v2.0 <span class="token parameter variable">-m</span> <span class="token string">&#39;xxx&#39;</span>                                  <span class="token comment"># 增加v2.0的tag</span>
<span class="token function">git</span> show v2.0                                             <span class="token comment"># 显示v2.0的日志及详细内容</span>
<span class="token function">git</span> log v2.0                                              <span class="token comment"># 显示v2.0的日志</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD -- ./lib                                    <span class="token comment"># 比较与HEAD版本lib目录的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> origin/master<span class="token punctuation">..</span>master                            <span class="token comment"># 比较远程分支master上有本地分支master上没有的</span>
<span class="token function">git</span> <span class="token function">diff</span> origin/master<span class="token punctuation">..</span>master <span class="token parameter variable">--stat</span>                     <span class="token comment"># 只显示差异的文件，不显示具体内容</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git+ssh://git@192.168.53.168/VT.git <span class="token comment"># 增加远程定义（用于push/pull/fetch）</span>
<span class="token function">git</span> branch <span class="token parameter variable">--contains</span> <span class="token number">50089</span>                               <span class="token comment"># 显示包含提交50089的分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">--merged</span>                                       <span class="token comment"># 显示所有已合并到当前分支的分支</span>
<span class="token function">git</span> branch --no-merged                                    <span class="token comment"># 显示所有未合并到当前分支的分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> master master_copy                          <span class="token comment"># 本地分支改名</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> master_copy                               <span class="token comment"># 从当前分支创建新分支master_copy并检出</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> master master_copy                        <span class="token comment"># 上面的完整版</span>
<span class="token function">git</span> checkout features/performance                         <span class="token comment"># 检出已存在的features/performance分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">--track</span> hotfixes/BJVEP933                    <span class="token comment"># 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> devel origin/develop                      <span class="token comment"># 从远程分支develop创建新本地分支devel并检出</span>
<span class="token function">git</span> checkout -- README                                    <span class="token comment"># 检出head版本的README文件（可用于修改错误回退）</span>
<span class="token function">git</span> merge origin/master                                   <span class="token comment"># 合并远程master分支至当前分支</span>
<span class="token function">git</span> cherry-pick ff44785404a8e                             <span class="token comment"># 合并提交ff44785404a8e的修改</span>
<span class="token function">git</span> push origin :hotfixes/BJVEP933                        <span class="token comment"># 删除远程仓库的hotfixes/BJVEP933分支</span>
<span class="token function">git</span> fetch                                                 <span class="token comment"># 获取所有远程分支（不更新本地分支，另需merge）</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--prune</span>                                         <span class="token comment"># 获取所有原创分支并清除服务器上已删掉的分支</span>
<span class="token function">git</span> <span class="token function">mv</span> README README2                                     <span class="token comment"># 重命名文件README为README2</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD                                     <span class="token comment"># 将当前版本重置为HEAD（通常用于merge失败回退）</span>
<span class="token function">git</span> rebase
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> hotfixes/BJVEP933                           <span class="token comment"># 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> hotfixes/BJVEP933                           <span class="token comment"># 强制删除分支hotfixes/BJVEP933</span>
<span class="token function">git</span> ls-files                                              <span class="token comment"># 列出git index包含的文件</span>
<span class="token function">git</span> show-branch                                           <span class="token comment"># 图示当前分支历史</span>
<span class="token function">git</span> show-branch <span class="token parameter variable">--all</span>                                     <span class="token comment"># 图示所有分支历史</span>
<span class="token function">git</span> whatchanged                                           <span class="token comment"># 显示提交历史对应的文件修改</span>
<span class="token function">git</span> revert dfb02e6e4f2f7b573337763e5c0013802e392818       <span class="token comment"># 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818</span>
<span class="token function">git</span> ls-tree HEAD                                          <span class="token comment"># 内部命令：显示某个git对象</span>
<span class="token function">git</span> rev-parse v2.0                                        <span class="token comment"># 内部命令：显示某个ref对于的SHA1 HASH</span>
<span class="token function">git</span> reflog                                                <span class="token comment"># 显示所有提交，包括孤立节点</span>
<span class="token function">git</span> show HEAD@<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>
<span class="token function">git</span> show master@<span class="token punctuation">{</span>yesterday<span class="token punctuation">}</span>                               <span class="token comment"># 显示master分支昨天的状态</span>
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&#39;%h %s&#39;</span> <span class="token parameter variable">--graph</span>                   <span class="token comment"># 图示提交日志</span>
<span class="token function">git</span> show HEAD~3
<span class="token function">git</span> show <span class="token parameter variable">-s</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>raw 2be7fcb476
<span class="token function">git</span> stash                                                 <span class="token comment"># 暂存当前修改，将所有至为HEAD状态</span>
<span class="token function">git</span> stash list                                            <span class="token comment"># 查看所有暂存</span>
<span class="token function">git</span> stash show <span class="token parameter variable">-p</span> stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>                               <span class="token comment"># 参考第一次暂存</span>
<span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>                                 <span class="token comment"># 应用第一次暂存</span>
<span class="token function">git</span> <span class="token function">grep</span> <span class="token string">&quot;delete from&quot;</span>                                    <span class="token comment"># 文件中搜索文本“delete from”</span>
<span class="token function">git</span> <span class="token function">grep</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;#define&#39;</span> <span class="token parameter variable">--and</span> <span class="token parameter variable">-e</span> SORT_DIRENT
<span class="token function">git</span> gc
<span class="token function">git</span> <span class="token function">fsck</span>
<span class="token comment"># 生成一个可供发布的压缩包</span>
$ <span class="token function">git</span> archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2><ul><li>杰哥的IT之旅：常用的 Git 命令清单</li><li>马哥教育：Git基本操作</li></ul>`,77),c=[t];function l(p,o){return s(),a("div",null,c)}const r=n(i,[["render",l],["__file","git-basic.html.vue"]]);export{r as default};
