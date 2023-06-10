import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as l,b as e,d as n,a as o,e as p}from"./app-1a5afd71.js";const r={},d=e("h1",{id:"_1-3-python-虚拟环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-3-python-虚拟环境","aria-hidden":"true"},"#"),n(" 1.3 Python 虚拟环境")],-1),c={href:"http://www.justdopython.com/2020/05/26/python-virtualenv/",target:"_blank",rel:"noopener noreferrer"},h=p(`<p>Python 之所以强大，除了语言本身的特性外，更重要的是拥有无所不及的第三方库。强大的软件库，让开发者将精力集中在业务上，而避免重复造轮子的浪费。但众多的软件库，形成了复杂的依赖关系，加上 Python2 和 Python3 旷日持久之争，对采用 Python 开发的项目造成了不少困扰，所以 Python 建议，通过<code>虚拟环境</code>工具为项目创建纯净的依赖环境，今天我们就来了解下 Python 虚拟环境</p><h2 id="一些概念" tabindex="-1"><a class="header-anchor" href="#一些概念" aria-hidden="true">#</a> 一些概念</h2><p>Python 虚拟环境，涉及到很多概念和工具，会对使用造成孔娆和障碍，所以我们先了解一些概念和与之相关的工具</p><h3 id="python-版本" tabindex="-1"><a class="header-anchor" href="#python-版本" aria-hidden="true">#</a> python 版本</h3><p>Python 版本指得是 Python 解析器本身的版本。由于 Python3 不能与 Python2 兼容，而且两大正营之争持续了很长时间，导致一些软件库需要设配两种版本的 Python，同时开发者可能需要在一个环境中，部署不同版本的 Python，对开发和维护造成了麻烦。因此出现了版本管理器 Pyenv，类似于 nodejs 的 nvm，可以创建出相互隔离的 Python 环境，并且可以方便的切换环境中的 Python 版本，但和 Python 虚拟环境关系不大</p><h3 id="python-包库" tabindex="-1"><a class="header-anchor" href="#python-包库" aria-hidden="true">#</a> python 包库</h3><p>包库或者叫软件源是 Python 第三方软件的库的集合，或者市场，可以发布、下载和管理软件包，其中 pypi (Python Package Index) https://pypi.org/ 是官方指定的软件包库，基于其上的 pip 工具就是从这里查找、下载安装软件包的。为了提高下载速度，世界上有很多 Pypi 的镜像服务器，在国内也有多个软件源，例如阿里的软件源是：http://mirrors.aliyun.com/pypi/simple/。 除此之外，还有其他软件源，如正对科学计算的 anaconda 的软件源 https://repo.anaconda.com/</p><h3 id="python-包管理器" tabindex="-1"><a class="header-anchor" href="#python-包管理器" aria-hidden="true">#</a> python 包管理器</h3><p>软件包源中的软件包数量巨大，版本多样，所以需要借助于软件源管理工具，例如 pip、conda、Pipenv、Poetry 等</p><ul><li>pip 是最常用的包管理工具，通过 <code>pip install &lt;packagename&gt;</code> 命令格式来安装软件包，使用的是 pypi 软件包源</li><li>conda 多用作科学计算领域的包管理工具，功能丰富且强大，使用的软件包源是 Anaconda repository 和 Anaconda Cloud，conda 不仅支持 Python 软件包，还可以安装 C、C++ 、R 以及其他语言的二定制软件包。除了软件包管理外，还能提供相互隔离的软件环境。</li><li>Pipenv 是 Kenneth Reitz 在2017年1月发布的Python依赖管理工具，现在由PyPA维护。Pipenv 会自动帮你管理虚拟环境和依赖文件，并且提供了一系列命令和选项来帮助你实现各种依赖和环境管理相关的操作</li><li>Poetry 和 Pipenv 类似，是一个 Python 虚拟环境和依赖管理工具，另外它还提供了包管理功能，比如打包和发布。你可以把它看做是 Pipenv 和 Flit 这些工具的超集。它可以让你用 Poetry 来同时管理 Python 库和 Python 程序</li></ul><p>很多包管理工具不仅提供了基本的包管理功能，还提供了虚拟环境构建，程序管理的等功能</p><h3 id="python-虚拟环境" tabindex="-1"><a class="header-anchor" href="#python-虚拟环境" aria-hidden="true">#</a> Python 虚拟环境</h3><p>Python 应用经常需要使用一些包第三方包或者模块，有时需要依赖特定的包或者库的版本，所以不能有一个能适应所有 Python 应用的软件环境，很多时候不同的 Python 应用所依赖的版本是冲突的，满足了其中一个，另一个则无法运行，解决这一问题的方法是 虚拟环境。 虚拟环境是一个包含了特定 Python 解析器以及一些软件包的自包含目录，不同的应用程序可以使用不同的虚拟环境，从而解决了依赖冲突问题，而且虚拟环境中只需要安装应用相关的包或者模块，可以给部署提供便利</p><h2 id="pyenv多版本" tabindex="-1"><a class="header-anchor" href="#pyenv多版本" aria-hidden="true">#</a> pyenv多版本</h2><p>官网 https://github.com/pyenv/pyenv</p><p>快捷安装 https://github.com/pyenv/pyenv#the-automatic-installer</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># yum install git curl</span>
python编译依赖如下
<span class="token comment"># yum install gcc make patch gdbm-devel openssl-devel sqlite-devel readline-devel</span>
zlib-devel bzip2-devel
创建普通用户
<span class="token comment"># useradd python</span>
<span class="token comment"># su - python</span>
在python用户下安装
$ <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer <span class="token operator">|</span> <span class="token function">bash</span>
<span class="token comment"># 由于某些原因，浏览器可以访问，大家自行下载保存为shell脚本执行</span>
<span class="token comment"># https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer</span>
<span class="token comment"># 或者使用项目源码文件</span>
<span class="token comment"># https://github.com/pyenv/pyenv-installer/blob/master/bin/pyenv-installer</span>
<span class="token comment"># 以后更新pyenv使用</span>
$ pyenv update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装完，按照提示处理，把下面的脚本放到当前用户的.bashrc文件末尾</span>
<span class="token comment"># the following to ~/.bashrc:</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/home/python/.pyenv/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>pyenv init -<span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>pyenv virtualenv-init -<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体步骤，略</p><h2 id="构建虚拟环境" tabindex="-1"><a class="header-anchor" href="#构建虚拟环境" aria-hidden="true">#</a> 构建虚拟环境</h2><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><p>虚拟环境并不是什么新技术，主要是利用了操作系统中环境变量以及进程间环境隔离的特性</p><p>操作系统的环境变量可以为程序提供信息和做信息交换介质，进程可以共享操作系统中的环境变量，也可以为进程指定环境变量，其中 PATH 是很重要的环境变量，用于为操作系统和程序提供可执行文件的访问路径，例如写一个程序 a.exe，存放在 D:\\MyProgram 中，在命令行中执行 a.exe ，会得到提示“ 无法找到程序 a.exe”，为了让系统找到，可以将 D:\\MyProgram 路径加入到 PATH 环境变量中，当输入 a.exe 时，操作系统就会从 PATH 所提供的路径中逐个查找，这时就可以找到了。Linux 和 MacOS 具有相似的特性，甚至比 Windows 的功能更丰富。</p><p>Python 虚拟环境就是利用这个特性构建的，在激活虚拟环境之时，激活脚本会将当前命令行程序的 PATH 修改为虚拟环境的，这样执行命令就会在被修改的 PATH 中查找，从而避免了原本 PATH 可以找到的命令，从而实现了 Python 环境的隔离。</p><p>为了让开发这容易区分当前环境是否虚拟环境以及是那个虚拟环境，命令提示符前会加上特殊标记，例如:</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/justdopython01.png" alt="Python 虚拟环境"></p><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><h4 id="virtualenv-工具" tabindex="-1"><a class="header-anchor" href="#virtualenv-工具" aria-hidden="true">#</a> virtualenv 工具</h4><p>在 python3.3 之前，只能通过 virtualenv 创建虚拟环境，首先需要安装 virtualenv</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install virtualenv 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完后，在当前目录下创建一个名为 myvenv 的虚拟环境:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>virtualenv --no-site-packages myvenv 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数 <code>--no-site-packages</code> 的意思是创建虚拟环境时，不复制主环境中安装的第三方包，也就是创建一个 “干净的” 虚拟环境</p><p>virtualenv 还有很多参数，用于不同的使用场景，例如:</p><ul><li>-p: 用于指定 Python 解析器，就是安装好的 Python 应用程序，默认为当前环境中的 Python</li><li>–no-pip：不需要安装 pip，默认为安装</li><li>–clear：如果创建虚拟环境的目录已经有了其他虚拟环境，清楚重建</li></ul><h4 id="venv-模块" tabindex="-1"><a class="header-anchor" href="#venv-模块" aria-hidden="true">#</a> venv 模块</h4><p>Python3.3 之后，可以用模块 venv 代替 virtualenv 工具，好处时不用单独安装，3.3 及之后的版本，都可以通过安装好的 Python 来创建虚拟环境:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python -m venv myvenv 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以在当前目录创建一个名为 myvenv 的虚拟环境</p><p>venv 有些才参数，不过相比 virtualenv 少了些，这里简单介绍几个：</p><ul><li>–without-pip: 不需要安装 pip，默认为安装</li><li>–clear：如果创建虚拟环境的目录已经有了其他虚拟环境，清楚重建</li></ul><p>因为 venv 是依附于一个 Python 解析器创建的，所以不需要指定 Python 解释器版本</p><h3 id="激活" tabindex="-1"><a class="header-anchor" href="#激活" aria-hidden="true">#</a> 激活</h3><p>虚拟环境创建好后，需要激活才能在当前命令行中使用，可以理解成将当前命令行环境中 PATH 变量的值替换掉</p><p>通过 virtualenv 和 模块 venv 创建的虚拟环境，激活方式是一样的，即运行激活脚本</p><ul><li><p>Windows 系统中，激活脚本路径是 <code>&lt;myvenv&gt;\\Scripts\\activate.bat</code>，如果是 powershell 命令行，脚本换成 <code>Activate.ps1</code> , 注意将 <code>&lt;myvenv&gt;</code> 换成你自己的虚拟环境目录</p></li><li><p>Linux 系统中，激活脚本路径是 <code>&lt;myvenv&gt;/bin/activate</code>，默认脚本没有执行权限，要么设置脚本为可执行，要么用 <code>source</code> 命令执行，例如</p><p><code>$ source myvenv/bin/activate </code></p></li></ul><p>激活后，可以在命令行中看到虚拟环境标记，如上图</p><p>打印 PATH，命令如下：</p><p>Linux 下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo $PATH 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows 下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo %PATH% 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到创建的虚拟环境脚本目录被加载了最前面</p><h3 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h3><p>退出虚拟环境很简单，只需要执行 <code>deactivate</code> 命令就行，这个命令也在虚拟环境的脚本目录下，因为激活时，将脚本目录设置到 PATH 中了，所以可以直接使用</p><p>退出虚拟环境相当于将 PATH 恢复成原来的</p><h2 id="与开发工具配合" tabindex="-1"><a class="header-anchor" href="#与开发工具配合" aria-hidden="true">#</a> 与开发工具配合</h2><p>虽然通过激活脚本，很容易切换到虚拟环境，但是在实际开发中，还是不够方便，而且现在很多开发工具，特别是提供 Python 解析环境的开发工具，都可以和虚拟环境配合，在开发过程中几乎无感，对开发工作是很大的帮助</p><h3 id="visual-studio-code" tabindex="-1"><a class="header-anchor" href="#visual-studio-code" aria-hidden="true">#</a> Visual Studio Code</h3><p>VS Code 是个后起之秀，功能强大且具有丰富的插件资源，无疑是这两年发展最快的综合开发工具。现在的版本配置 Python 虚拟环境很简单，只需要选择一个 Python 解释器就好了</p><p>同时按下 Ctrl+Shift+P, 在弹出的命令窗口中输入 “解析器”，然后在下拉列表中选择 “Python:选择解析器”，这里会缓存一些已经创建好的解析器，如果没有想要的，可以选择 “Enter interpreter path” 来选择解析器路径，即已经创建好的虚拟环境脚本文件夹中的 Python 程序，就可以创建一个新的解析器</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/justdoPython02.png" alt="选择 Python 解析器"></p><p>如果编辑的是 Python 代码文件，在状态栏中也可以选择和切换解释器，更为方便</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/justdopython03.png" alt="选择 Python 解析器"></p><h3 id="pycharm" tabindex="-1"><a class="header-anchor" href="#pycharm" aria-hidden="true">#</a> Pycharm</h3><p>Pycharm 应该是功能最好的 Python 开发工具，转为 Python 开发而生，除了基本的开发功能外，还提供项目创建、打包、测试等丰富功能，有很大的市场占有率</p><p>创建项目时，在项目创建对话框中，可以创建或者选择已经已有的解析器</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/justdopython04.png" alt="选择 Python 解析器"></p><p>选择创建新的解析器时，需要选择创建虚拟环境的工具，如 virtualenv；指定虚拟环境的目录；选择 Python 基础解析器，同 virtualenv 工具的 -p 参数的效果；以及是否要继承基础解析器的第三方库 和 是否将这个虚拟环境作为默认环境，即创建其他项目时默认选择</p><p>如果选择已存在的解析器，和 VS Code 差不多，可以选择已经缓存的或者指定解析器的路径</p><h2 id="部署虚拟环境" tabindex="-1"><a class="header-anchor" href="#部署虚拟环境" aria-hidden="true">#</a> 部署虚拟环境</h2><p>之所以在开发时选择虚拟环境，除了避免库之间的冲突，还有重要的原因时方便部署，因为虚拟环境时独立的，仅包含了项目相关的依赖库，所以部署的效率更高，风险更小</p><p>一般部署流程是：</p><ol><li>开发完成后，使用 <code>pip freeze &gt; requirements.txt</code> 命令将项目的库依赖导出，作为代码的一部分</li><li>将代码上传到服务器</li><li>在服务器上创建一个虚拟环境</li><li>激活虚拟环境，执行 <code>pip install -r requirements.txt</code>，安装项目依赖</li></ol><p>怎么运行项目，需要看项目的具体情况</p><ul><li>Web 项目 Web 项目一般使用 Django、Flask 的 Web 开发的提供 Web 服务的项目，部署时需要一个 Web 容器，作为程序的运行环境，容器的配置中都有一个虚拟环境的设置，其实是指定 Python 解析器的路径，将其设置为虚拟环境的目录或者 Python 解析器就可以了，启动时就用使用虚拟环境，并与其他环境隔离。例如 uWSGI 配置文件中 home 参数是用来指定解析器的。</li><li>服务类项目 服务类项目就是需要以服务的形式长时间运行的，例如之前介绍的 公交闹钟，或者一些定时爬虫之类的，对于 Linux 而言，当前主流的服务方式是 Systemd，是一种比 init 更先进的服务管理工具，在服务脚本中， 设置 ExecStart 执行命令为全路径的虚拟环境的 Python 解析器，服务启动时，使用独立的虚拟环境了。 Windows 服务，对于达成 EXE 包的，不需要配置虚拟环境，因为打包时已经考虑了环境问题了，如果时脚本运行的话，需要指定全路径的 Python 解析器</li><li>单次运行项目 对于一些测试或者实验性质的项目，大多数情况下手动执行，只要在激活的虚拟环境下，或者用特定的 Python 解析器运行就好了，和在开发过程中运行区别不大</li></ul><h2 id="其他虚拟环境管理工具" tabindex="-1"><a class="header-anchor" href="#其他虚拟环境管理工具" aria-hidden="true">#</a> 其他虚拟环境管理工具</h2><ul><li>virtualenvwrapper： 是对 virtualenv 的一个封装，还有针对 vim 用户和 emacs 用户的 扩展，能支持 bash/ksh/zsh</li><li>virtualenvwrapper-win： 针对 Windows batch shell 的 virtualenvwrapper</li><li>pyenv： 用来解决这类问题。它可以安装、卸载、编译、管理多个 python 版本，并随时将其中一个设置为工作环境</li><li>pyenv-win： 针对 Windows 的 pyenv</li></ul><p>有兴趣的话可以试用一下</p><h2 id="自动加载python虚拟环境" tabindex="-1"><a class="header-anchor" href="#自动加载python虚拟环境" aria-hidden="true">#</a> 自动加载Python虚拟环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/hyperupcall/autoenv.git ~/.autoenv
<span class="token builtin class-name">echo</span> <span class="token string">&#39;source ~/.autoenv/activate.sh&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc
<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token comment"># 在需要切换虚拟环境目录下，添加 .env 配置文件，如</span>
<span class="token builtin class-name">cd</span> xxx
<span class="token builtin class-name">echo</span> <span class="token string">&#39;source /opt/python3.7.0/bin/activate&#39;</span> <span class="token operator">&gt;</span> .env
<span class="token builtin class-name">source</span> .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>今天主要了解了 Python 虚拟环境的相关概念和工具，并简单描述了实际工作中的一些使用方式，以便能在开发过程中使用。限于篇幅，没法就更多的内容详细展开，需要在实践中多试多用，Just DO It！</p>`,83);function v(u,m){const a=t("ExternalLinkIcon");return i(),l("div",null,[d,e("blockquote",null,[e("p",null,[n("转载自："),e("a",c,[n("Python 虚拟环境 看这一篇就够了 | Python 技术"),o(a)])])]),h])}const g=s(r,[["render",v],["__file","python-virtualenv.html.vue"]]);export{g as default};
