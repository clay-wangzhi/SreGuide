import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as a,c as r,b as e,d as i,e as n,a as t}from"./app-52a338cc.js";const p={},o=e("h1",{id:"_6-2-python-的-setup-py-详解",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_6-2-python-的-setup-py-详解","aria-hidden":"true"},"#"),i(" 6.2 Python 的 setup.py 详解")],-1),u={href:"https://zhuanlan.zhihu.com/p/276461821",target:"_blank",rel:"noopener noreferrer"},c=t(`<h2 id="_1-为什么需要对项目分发打包" tabindex="-1"><a class="header-anchor" href="#_1-为什么需要对项目分发打包" aria-hidden="true">#</a> 1. 为什么需要对项目分发打包？</h2><p>平常我们习惯了使用 pip 来安装一些第三方模块，这个安装过程之所以简单，是因为模块开发者为我们默默地为我们做了所有繁杂的工作，而这个过程就是 <code>打包</code>。</p><p>打包，就是将你的源代码进一步封装，并且将所有的项目部署工作都事先安排好，这样使用者拿到后即装即用，不用再操心如何部署的问题（如果你不想对照着一堆部署文档手工操作的话）。</p><p>不管你是在工作中，还是业余准备自己写一个可以上传到 PyPI 的项目，你都要学会如何打包你的项目。</p><p>Python 发展了这么些年了，项目打包工具也已经很成熟了。他们都有哪些呢？</p><p>你可能听过 <code>disutils</code>、 <code>distutils</code> 、<code>distutils2</code>、<code>setuptools</code>等等，好像很熟悉，却又很陌生，他们都是什么关系呢？</p><h2 id="_2-包分发的始祖-distutils" tabindex="-1"><a class="header-anchor" href="#_2-包分发的始祖-distutils" aria-hidden="true">#</a> 2. 包分发的始祖：distutils</h2><p><code>distutils</code> 是 Python 的一个标准库，从命名上很容易看出它是一个分发（distribute）工具（utlis），它是 Python 官方开发的一个分发打包工具，所有后续的打包工具，全部都是基于它进行开发的。</p><p><code>distutils</code> 的精髓在于编写 setup.py，它是模块分发与安装的指导文件。</p><p>那么如何编写 setup.py 呢？这里面的内容非常多，我会在后面进行详细的解析，请你耐心往下看。</p><p>你有可能没写过 setup.py ，但你绝对使用过 setup.py 来做一些事情，比如下面这条命令，我们经常用它来进行模块的安装。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样的安装方法是通过源码安装，与之对应的是通过二进制软件包的安装，同样我也会在后面进行介绍。</p><h2 id="_3-分发工具升级-setuptools" tabindex="-1"><a class="header-anchor" href="#_3-分发工具升级-setuptools" aria-hidden="true">#</a> 3. 分发工具升级：setuptools</h2><p><code>setuptools</code> 是 distutils 增强版，不包括在标准库中。其扩展了很多功能，能够帮助开发者更好的创建和分发 Python 包。大部分 Python 用户都会使用更先进的 setuptools 模块。</p><p><strong>distribute</strong>，或许你在其他地方也见过它，这里也提一下。</p><p>distribute 是 setuptools 有一个分支版本，分支的原因可能是有一部分开发者认为 setuptools 开发太慢了。但现在，distribute 又合并回了 setuptools 中。因此，我们可以认为它们是同一个东西。</p><p>还有一个大包分发工具是 <strong>distutils2</strong>，其试图尝试充分利用distutils，detuptools 和 distribute 并成为 Python 标准库中的标准工具。但该计划并没有达到预期的目的，且已经是一个废弃的项目。</p><p>因此，setuptools 是一个优秀的，可靠的 Python 包安装与分发工具。</p><p>那么如何在一个干净的环境中安装 setuptools 呢？</p><p>主要有两种方法：</p>`,21),v={href:"https://link.zhihu.com/?target=https%3A//pypi.org/project/setuptools/%23files",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"python setup.py install",-1),b=e("li",null,"通过引导程序安装：下载引导程序，它可以用来下载或者更新最新版本的 setuptools",-1),h=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ wget http://peak.telecommunity.com/dist/ez_setup.py

# 安装
$ python ez_setup.py

# 更新，以下两种任选
$ python ez_setup.py –U setuptools
$ pip install -U setuptools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-easy-install-使用指南" tabindex="-1"><a class="header-anchor" href="#_4-easy-install-使用指南" aria-hidden="true">#</a> 4. easy_install 使用指南</h2><p>当你安装完 setuptools 后，就拥有了一个叫做 <code>easy_install</code> 的第三方管理工具，这也是它区分于 distutils 的一大改进。</p><p>这里简单介绍一下它的用法，虽然它已经用得非常少了。</p><p>先是包的安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 通过包名，从PyPI寻找最新版本，自动下载、编译、安装
$ easy_install pkg_name

# 通过包名从指定下载页寻找链接来安装或升级包
$ easy_install -f http://pythonpaste.org/package_index.html 

# 指定线上的包地址安装
$ easy_install http://example.com/path/to/MyPackage-1.2.3.tgz

# 从本地的 .egg 文件安装
$ easy_install xxx.egg

# 在安装时你可以添加额外的参数
指定安装目录：--install-dir=DIR, -d DIR
指定用户安装：--user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再者是包的升级</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 从 pypi 中搜索并升级包
$ easy_install --upgrade pkg_name

# 指定版本进行升级
$ easy_install &quot;SomePackage==2.0&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后是包的删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ easy_install -m pkg_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，这样的删除，仅是在 easy-install.pth 文件中删除，使其不能在 python 中使用 这个模块，但实际的包还在你的电脑中，若要删除彻底，需要你手动删除相关的 .egg 及 其他文件。</p><p>默认情况下，easy_install 只会从 pypi 上下载相关软件包，由于这个源在国外，下载包的速度并不理想，使用过pip的朋友自然会想，easy_install 是否能指定源进行安装呢？</p><p>答案是，可以的。</p><p>编辑配置文件 <code>/root/.pydistutils.cfg</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[easy_install]
index-url=http://mirrors.aliyun.com/pypi/simple/
find-links=http://mirrors.aliyun.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),g={href:"https://link.zhihu.com/?target=https%3A//setuptools.readthedocs.io/en/latest/easy_install.html",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>总结一句：setuptools 是官方提供的一个专业用于包分发的工具，若只从安装的角度来看，它的功能确实简单。它更大的意义是对包的分发很有用，定制化程序非常高，我们现在也还在用它进行版本包的发布。</p><h2 id="_5-源码包与二进制包什么区别" tabindex="-1"><a class="header-anchor" href="#_5-源码包与二进制包什么区别" aria-hidden="true">#</a> 5. 源码包与二进制包什么区别？</h2><p>Python 包的分发可以分为两种：</p><p>1、以源码包的方式发布</p><p>源码包安装的过程，是先解压，再编译，最后才安装，所以它是跨平台的，由于每次安装都要进行编译，相对二进包安装方式来说安装速度较慢。</p><p>源码包的本质是一个压缩包，其常见的格式有：</p><p><img src="https://pic1.zhimg.com/80/v2-dffd77a245997a841eb426d9c0ce5184_720w.jpg" alt="img"></p><p>2、以二进制包形式发布</p><p>二进制包的安装过程省去了编译的过程，直接进行解压安装，所以安装速度较源码包来说更快。</p><p>由于不同平台的编译出来的包无法通用，所以在发布时，需事先编译好多个平台的包。</p><p>二进制包的常见格式有：</p><p><img src="https://pic4.zhimg.com/80/v2-b0a22d8b82eac1f25bc6a1b95f6e0c2f_720w.jpg" alt="img"></p><h2 id="_6-eggs-与-wheels-有什么区别" tabindex="-1"><a class="header-anchor" href="#_6-eggs-与-wheels-有什么区别" aria-hidden="true">#</a> 6. eggs 与 wheels 有什么区别？</h2><p>Egg 格式是由 setuptools 在 2004 年引入，而 Wheel 格式是由 PEP427 在 2012 年定义。Wheel 的出现是为了替代 Egg，它的本质是一个zip包，其现在被认为是 Python 的二进制包的标准格式。</p><p>以下是 Wheel 和 Egg 的主要区别：</p><ul><li>Wheel 有一个官方的 PEP427 来定义，而 Egg 没有 PEP 定义</li><li>Wheel 是一种分发格式，即打包格式。而 Egg 既是一种分发格式，也是一种运行时安装的格式，并且是可以被直接 import</li><li>Wheel 文件不会包含 .pyc 文件</li><li>Wheel 使用和 PEP376 兼容的 .dist-info 目录，而 Egg 使用 .egg-info 目录</li><li>Wheel 有着更丰富的命名规则。</li><li>Wheel 是有版本的。每个 Wheel 文件都包含 wheel 规范的版本和打包的实现</li><li>Wheel 在内部被 sysconfig path type 管理，因此转向其他格式也更容易</li></ul><p>wheel 包可以通过 pip 来安装，只不过需要先安装 wheel 模块，然后再使用 pip 的命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ pip install wheel
$ pip wheel --wheel-dir=/local/wheels pkg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-超详细讲解-setup-py-的编写" tabindex="-1"><a class="header-anchor" href="#_7-超详细讲解-setup-py-的编写" aria-hidden="true">#</a> 7. 超详细讲解 setup.py 的编写？</h2><p>打包分发最关键的一步是编写 <code>setup.py</code> 文件。</p><p>以下是一个 setup.py 简单的使用示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from setuptools import setup, find_packages

setup(
    name=&quot;mytest&quot;,
    version=&quot;1.0&quot;,
    author=&quot;wangbm&quot;,
    author_email=&quot;wongbingming@163.com&quot;,
    description=&quot;Learn to Pack Python Module  --&gt;公众号：Python编程时光&quot;,

    # 项目主页
    url=&quot;http://iswbm.com/&quot;, 

    # 你要安装的包，通过 setuptools.find_packages 找到当前目录下有哪些包
    packages=find_packages()
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我将慢慢扩充这个setup函数，增加更多的参数，以便你能理解setup函数能做哪些事情。</p><p><strong>程序分类信息</strong></p>`,24),y=e("code",null,"classifiers",-1),_={href:"https://link.zhihu.com/?target=https%3A//pypi.org/pypi%3F%3Aaction%3Dlist_classifiers",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from setuptools import setup, find_packages

setup(
    classifiers = [
        # 发展时期,常见的如下
        #   3 - Alpha
        #   4 - Beta
        #   5 - Production/Stable
        &#39;Development Status :: 3 - Alpha&#39;,

        # 开发的目标用户
        &#39;Intended Audience :: Developers&#39;,

        # 属于什么类型
        &#39;Topic :: Software Development :: Build Tools&#39;,

        # 许可证信息
        &#39;License :: OSI Approved :: MIT License&#39;,

        # 目标 Python 版本
        &#39;Programming Language :: Python :: 2&#39;,
        &#39;Programming Language :: Python :: 2.7&#39;,
        &#39;Programming Language :: Python :: 3&#39;,
        &#39;Programming Language :: Python :: 3.3&#39;,
        &#39;Programming Language :: Python :: 3.4&#39;,
        &#39;Programming Language :: Python :: 3.5&#39;,
    ]
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关于文件的分发</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from setuptools import setup, find_packages


setup(
    name=&quot;mytest&quot;,
    version=&quot;1.0&quot;,
    author=&quot;wangbm&quot;,
    author_email=&quot;wongbingming@163.com&quot;,
    description=&quot;Learn to Pack Python Module&quot;,
    url=&quot;http://iswbm.com/&quot;, 
    packages=find_packages(),

    # 安装过程中，需要安装的静态文件，如配置文件、service文件、图片等
    data_files=[
        (&#39;&#39;, [&#39;conf/*.conf&#39;]),
        (&#39;/usr/lib/systemd/system/&#39;, [&#39;bin/*.service&#39;]),
               ],

    # 希望被打包的文件
    package_data={
        &#39;&#39;:[&#39;*.txt&#39;],
        &#39;bandwidth_reporter&#39;:[&#39;*.txt&#39;]
               },
    # 不打包某些文件
    exclude_package_data={
        &#39;bandwidth_reporter&#39;:[&#39;*.txt&#39;]
               }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了以上的参数配置之外，还可以使用一个叫做 <code>MANIFEST.in</code> 的文件，来控制文件的分发。</p><p>如下这是一个 <code>MANIFEST.in</code> 的样例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>include *.txt
recursive-include examples *.txt *.py
prune examples/sample?/build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些配置，规定了如下几点</p><ul><li>所有根目录下的以 txt 为后缀名的文件，都会分发</li><li>根目录下的 examples 目录 和 txt、py文件都会分发</li><li>路径匹配上 examples/sample?/build 不会分发</li></ul><p><code>MANIFEST.in</code> 需要放在和 setup.py 同级的顶级目录下，setuptools 会自动读取该文件。</p><p><strong>关于依赖包下载安装</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from setuptools import setup, find_packages


setup(
    ...

    # 表明当前模块依赖哪些包，若环境中没有，则会从pypi中下载安装
    install_requires=[&#39;docutils&gt;=0.3&#39;],

    # setup.py 本身要依赖的包，这通常是为一些setuptools的插件准备的配置
    # 这里列出的包，不会自动安装。
    setup_requires=[&#39;pbr&#39;],

    # 仅在测试时需要使用的依赖，在正常发布的代码中是没有用的。
    # 在执行python setup.py test时，可以自动安装这三个库，确保测试的正常运行。
    tests_require=[
        &#39;pytest&gt;=3.3.1&#39;,
        &#39;pytest-cov&gt;=2.5.1&#39;,
    ],

    # 用于安装setup_requires或tests_require里的软件包
    # 这些信息会写入egg的 metadata 信息中
    dependency_links=[
        &quot;http://example2.com/p/foobar-1.0.tar.gz&quot;,
    ],

    # install_requires 在安装模块时会自动安装依赖包
    # 而 extras_require 不会，这里仅表示该模块会依赖这些包
    # 但是这些包通常不会使用到，只有当你深度使用模块时，才会用到，这里需要你手动安装
    extras_require={
        &#39;PDF&#39;:  [&quot;ReportLab&gt;=1.2&quot;, &quot;RXP&quot;],
        &#39;reST&#39;: [&quot;docutils&gt;=0.3&quot;],
    }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于 <code>install_requires</code>， 有以下五种常用的表示方法：</p><ol><li><code>&#39;argparse&#39;</code>，只包含包名。 这种形式只检查包的存在性，不检查版本。 方便，但不利于控制风险。</li><li><code>&#39;setuptools==38.2.4&#39;</code>，指定版本。 这种形式把风险降到了最低，确保了开发、测试与部署的版本一致，不会出现意外。 缺点是不利于更新，每次更新都需要改动代码。</li><li><code>&#39;docutils &gt;= 0.3&#39;</code>，这是比较常用的形式。 当对某个库比较信任时，这种形式可以自动保持版本为最新。</li><li><code>&#39;Django &gt;= 1.11, != 1.11.1, &lt;= 2&#39;</code>，这是比较复杂的形式。 如这个例子，保证了Django的大版本在1.11和2之间，也即1.11.x；并且，排除了已知有问题的版本1.11.1（仅举例）。 对于一些大型、复杂的库，这种形式是最合适的。</li><li><code>&#39;requests[security, socks] &gt;= 2.18.4&#39;</code>，这是包含了额外的可选依赖的形式。 正常安装requests会自动安装它的<code>install_requires</code>中指定的依赖，而不会安装<code>security</code>和<code>socks</code>这两组依赖。 这两组依赖是定义在它的<code>extras_require</code>中。 这种形式，用在深度使用某些库时。</li></ol><p><strong>关于安装环境的限制</strong></p><p>有些库并不是在所以的 Python 版本中都适用的，若一个库安装在一个未兼容的 Python 环境中，理论上不应该在使用时才报错，而应该在安装过程就使其失败，提示禁止安装。</p><p>这样的功能，可以使用 <code>python_requires</code> 来实现。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setup(
    ...
    python_requires=&#39;&gt;=2.7, &lt;=3&#39;,
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>生成可执行文件的分发</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from setuptools import setup, find_packages


setup(
    name=&quot;mytest&quot;,
    version=&quot;1.0&quot;,
    author=&quot;wangbm&quot;,
    author_email=&quot;wongbingming@163.com&quot;,
    description=&quot;Learn to Pack Python Module&quot;,
    url=&quot;http://iswbm.com/&quot;, 
    packages=find_packages(),

    # 用来支持自动生成脚本，安装后会自动生成 /usr/bin/foo 的可执行文件
    # 该文件入口指向 foo/main.py 的main 函数
    entry_points={
        &#39;console_scripts&#39;: [
            &#39;foo = foo.main:main&#39;
        ]
    },

    # 将 bin/foo.sh 和 bar.py 脚本，生成到系统 PATH中
    # 执行 python setup.py install 后
    # 会生成 如 /usr/bin/foo.sh 和 如 /usr/bin/bar.py
    scripts=[&#39;bin/foo.sh&#39;, &#39;bar.py&#39;]
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 scripts 里有的脚本中有 <code>sh</code> 和 <code>py</code> 后缀，那么安装后，setuptools 会原封不动的移动到 /usr/bin 中，并添加可执行权限。</p><p>若你想对这些文件再作一些更改，比如去掉多余的后缀，可以这样做</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from setuptools.command.install_scripts import install_scripts

class InstallScripts(install_scripts):

    def run(self):
        setuptools.command.install_scripts.install_scripts.run(self)

        # Rename some script files
        for script in self.get_outputs():
            if basename.endswith(&quot;.py&quot;) or basename.endswith(&quot;.sh&quot;):
                dest = script[:-3]
            else:
                continue
            print(&quot;moving %s to %s&quot; % (script, dest))
            shutil.move(script, dest)

setup(
    ...
    scripts=[&#39;bin/foo.sh&#39;, &#39;bar.py&#39;],

    cmdclass={
        &quot;install_scripts&quot;: InstallScripts
    }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ext_modules</strong></p><p><code>ext_modules</code> 参数用于构建 C 和 C++ 扩展扩展包。其是 Extension 实例的列表，每一个 Extension 实例描述了一个独立的扩展模块，扩展模块可以设置扩展包名，头文件、源文件、链接库及其路径、宏定义和编辑参数等。如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setup(
    # other arguments here...
    ext_modules=[
        Extension(&#39;foo&#39;,
                  glob(path.join(here, &#39;src&#39;, &#39;*.c&#39;)),
                  libraries = [ &#39;rt&#39; ],
                  include_dirs=[numpy.get_include()])
    ]
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),q={href:"https://link.zhihu.com/?target=https%3A//docs.python.org/3.6/distutils/setupscript.html%23preprocessor-options",target:"_blank",rel:"noopener noreferrer"},P=t(`<p><strong>指定release</strong></p><p>setup.py 里只能指定 version，而不能指定 release，如果你需要变更版本号，可以使用 <code>--release</code> 参数进行指定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python setup.py bdist_rpm --release=20200617
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>setup.py 的参数非常多，能够不借助文档写好一个setup.py好像没那么简单。为了备忘，我整理了 setup 函数常用的一些参数：</p><p><img src="https://pic3.zhimg.com/80/v2-4563e810d05ec25ce283c7f54a271e2e_720w.jpg" alt="img"></p>`,5),k={href:"https://link.zhihu.com/?target=https%3A//setuptools.readthedocs.io/en/latest/setuptools.html",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"_8-打包辅助神器pbr-是什么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-打包辅助神器pbr-是什么","aria-hidden":"true"},"#"),i(" 8. 打包辅助神器PBR 是什么？")],-1),E=e("code",null,"pbr",-1),z={href:"https://link.zhihu.com/?target=https%3A//launchpad.net/pbr",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"d2to1",-1),$=t(`<p><code>pbr</code> 会读取和过滤setup.cfg中的数据，然后将解析后的数据提供给 <code>setup.py</code> 作为参数。包含如下功能：</p><ol><li>从git中获取Version、AUTHORS and ChangeLog信息</li><li>Sphinx Autodoc。pbr 会扫描project，找到所有模块，生成stub files</li><li>Requirements。pbr会读取requirements.txt，生成setup函数需要的<code>install_requires/tests_require/dependency_links</code></li></ol><p>这里需要注意，在 <code>requirements.txt</code> 文件的头部可以使用：<code>--index https://pypi.python.org/simple/</code>，这一行把一个抽象的依赖声明如 requests==1.2.0 转变为一个具体的依赖声明 requests 1.2.0 from pypi.python.org/simple/</p><ol><li>long_description。从README.rst, README.txt or README file中生成<code>long_description</code>参数</li></ol><p>使用pbr很简单：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from setuptools import setup

setup(
    setup_requires=[&#39;pbr&#39;],
    pbr=True,
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用pbr时，setup.cfg中有一些配置。在[files]中，有三个key： <code>packages</code>:指定需要包含的包，行为类似于setuptools.find_packages <code>namespace_packages</code>:指定namespace packages <code>data_files</code>: 指定目的目录和源文件路径，一个示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[files]
data_files =
    etc/pbr = etc/pbr/*
    etc/neutron =
        etc/api-paste.ini
        etc/dhcp-agent.ini
    etc/init.d = neutron.init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>[entry_points]</code> 段跟 setuptools 的方式相同。</p><p>到此，我讲了三种编写使用 setup.py 的方法</p><ul><li>使用命令行参数指定，一个一个将参数传递进去（极不推荐）</li><li>在 setup.py 中的setup函数中指定（推荐使用）</li><li>使用 pbr ，在 setup.cfg 中指定（易于管理，更推荐）</li></ul><h2 id="_9-如何使用-setup-py-构建包" tabindex="-1"><a class="header-anchor" href="#_9-如何使用-setup-py-构建包" aria-hidden="true">#</a> 9. 如何使用 setup.py 构建包</h2><p>1、构建源码发布包。</p><p>用于发布一个 Python 模块或项目，将源码打包成 tar.gz （用于 Linux 环境中）或者 zip 压缩包（用于 Windows 环境中）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py sdist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那这种包如何安装呢</p><p>答案是，使用下一节即将介绍的 <code>setuptools</code> 中提供的 <code>easy_install</code> 工具。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ easy_install xxx.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 sdist 将根据当前平台创建默认格式的存档。在类 Unix 平台上，将创建后缀后为 <code>.tar.gz</code> 的 gzip 压缩的tar文件分发包，而在Windows上为 ZIP 文件。</p><p>当然，你也可以通过指定你要的发布包格式来打破这个默认行为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py sdist --formats=gztar,zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以指定的格式有哪些呢？</p><p>创建一个压缩的tarball和一个zip文件。可用格式为：</p><p><img src="https://pic2.zhimg.com/80/v2-7416d2c5ffd4fde928d7bd214ea59d39_720w.jpg" alt="img"></p><p>对以上的格式，有几点需要注意一下：</p><ul><li>在版本3.5中才添加了对 <code>xztar</code> 格式的支持</li><li>zip 格式需要你事先已安装相应的模块：zip程序或zipfile模块（已成为Python的标准库）</li><li>ztar 格式正在弃用，请尽量不要使用</li></ul><p>另外，如果您希望归档文件的所有文件归root拥有，可以这样指定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python setup.py sdist --owner=root --group=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、构建二进制分发包。</p><p>在windows中我们习惯了双击 exe 进行软件的安装，Python 模块的安装也同样支持 打包成 exe 这样的二进制软件包。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py bdist_wininst
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而在 Linux 中，大家也习惯了使用 rpm 来安装包，对此你可以使用这条命令实现 rpm 包的构建</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py bdist_rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若你喜欢使用 easy_install 或者 pip 来安装离线包。你可以将其打包成 egg 包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py bdist_egg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若你的项目，需要安装多个平台下，既有 Windows 也有 Linux，按照上面的方法，多种格式我们要执行多次命令，为了方便，你可以一步到位，执行如下这条命令，即可生成多个格式的进制</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py bdist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-如何使用-setup-py-安装包" tabindex="-1"><a class="header-anchor" href="#_10-如何使用-setup-py-安装包" aria-hidden="true">#</a> 10. 如何使用 setup.py 安装包</h2><p>正常情况下，我们都是通过以上构建的源码包或者二进制包进行模块的安装。</p><p>但在编写 setup.py 的过程中，可能不能一步到位，需要多次调试，这时候如何测试自己写的 setup.py 文件是可用的呢？</p><p>这时候你可以使用这条命令，它会将你的模块安装至系统全局环境中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如若你的项目还处于开发阶段，频繁的安装模块，也是一个麻烦事。</p><p>这时候你可以使用这条命令安装，该方法不会真正的安装包，而是在系统环境中创建一个软链接指向包实际所在目录。这边在修改包之后不用再安装就能生效，便于调试。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-如何发布包到-pypi" tabindex="-1"><a class="header-anchor" href="#_11-如何发布包到-pypi" aria-hidden="true">#</a> 11. 如何发布包到 PyPi？</h2><p>通过上面的学习，你一定已经学会了如何打包自己的项目，若你觉得自己开发的模块非常不错，想要 share 给其他人使用，你可以将其上传到 PyPi （Python Package Index）上，它是 Python 官方维护的第三方包仓库，用于统一存储和管理开发者发布的 Python 包。</p><p>如果要发布自己的包，需要先到 pypi 上注册账号。然后创建 <code>~/.pypirc</code> 文件，此文件中配置 PyPI 访问地址和账号。如的.pypirc文件内容请根据自己的账号来修改。</p><p>典型的 .pypirc 文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[distutils]
index-servers = pypi

[pypi]
username:xxx
password:xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用这条命令进行信息注册，完成后，你可以在 PyPi 上看到项目信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py register
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注册完了后，你还要上传源码包，别人才使用下载安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ python setup.py upload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,54),L=e("code",null,"twine",-1),I={href:"https://link.zhihu.com/?target=https%3A//www.ctolib.com/twine.html%EF%BC%8C%E8%BF%99%E9%87%8C%E4%B8%8D%E8%AF%A6%E7%BB%86%E8%AE%B2%E4%BA%86%E3%80%82",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"参考文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),i(" 参考文章")],-1),S={href:"https://link.zhihu.com/?target=http%3A//blog.konghy.cn/2018/04/29/setup-dot-py/",target:"_blank",rel:"noopener noreferrer"},W={href:"https://link.zhihu.com/?target=https%3A//note.qidong.name/2018/01/python-setup-requires/",target:"_blank",rel:"noopener noreferrer"};function D(M,R){const s=d("ExternalLinkIcon");return a(),r("div",null,[o,e("blockquote",null,[e("p",null,[i("转载自："),e("a",u,[i("花了两天，终于把 Python 的 setup.py 给整明白了 | Python编程时光| 知乎"),n(s)])])]),c,e("ul",null,[e("li",null,[i("源码安装：在 "),e("a",v,[i("https://pypi.org/project/setuptools/#files"),n(s)]),i(" 中下载 zip 包 解压执行 "),m,i(" 安装")]),b]),h,e("p",null,[i("以上仅介绍了 easy_install 的一些常用的方法，想要了解更多，你可以点击官方文档："),e("a",g,[i("https://setuptools.readthedocs.io/en/latest/easy_install.html"),n(s)])]),x,e("p",null,[y,i(" 参数说明包的分类信息。所有支持的分类列表见："),e("a",_,[i("https://pypi.org/pypi?%3Aaction=list_classifiers"),n(s)])]),f,e("p",null,[i("详细了解可参考："),e("a",q,[i("https://docs.python.org/3.6/distutils/setupscript.html#preprocessor-options"),n(s)])]),P,e("p",null,[i("更多参数可见："),e("a",k,[i("https://setuptools.readthedocs.io/en/latest/setuptools.html"),n(s)])]),w,e("p",null,[E,i(" 是 setuptools 的辅助工具，最初是为 OpenStack 开发("),e("a",z,[i("https://launchpad.net/pbr)，基于"),A,i("。"),n(s)]),i("%EF%BC%8C%E5%9F%BA%E4%BA%8E%60d2to1%60%E3%80%82)")]),$,e("p",null,[i("或者也可以使用 "),L,i(" 工具注册上传，它是一个专门用于与 pypi 进行交互的工具，详情可以参考官网："),e("a",I,[i("https://www.ctolib.com/twine.html，这里不详细讲了。"),n(s)])]),B,e("ul",null,[e("li",null,[e("a",S,[i("http://blog.konghy.cn/2018/04/29/setup-dot-py/"),n(s)])]),e("li",null,[e("a",W,[i("https://note.qidong.name/2018/01/python-setup-requires/"),n(s)])])])])}const F=l(p,[["render",D],["__file","python-setup.html.vue"]]);export{F as default};
