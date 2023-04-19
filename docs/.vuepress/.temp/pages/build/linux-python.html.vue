<template><p>centos6.5下安装python3.6、pip、ipython</p>
<!--more-->
<h2 id="安装依赖包" tabindex="-1"><a class="header-anchor" href="#安装依赖包" aria-hidden="true">#</a> 安装依赖包</h2>
<p>test</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>开始下载、编译、安装python3.6</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># wget https://www.python.org/ftp/python/3.6.1/Python-3.6.1.tgz
# tar vxf Python-3.6.1.tgz
# cd Python-3.6.1.tgz
# ./configure --prefix=/usr/local   #编译，自定义安装目录，如果自定目录不在环境变量重要，要把安装的目录加入到环境变量中
# make &amp;&amp; make install  #这个过程会非常慢 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>检查是否安装成功</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># python3
Python 3.6.1 (default, May 12 2017, 00:21:59) 
[GCC 4.4.7 20120313 (Red Hat 4.4.7-4)] on linux
Type "help", "copyright", "credits" or "license" for more information.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="安装pip-pip-9-0" tabindex="-1"><a class="header-anchor" href="#安装pip-pip-9-0" aria-hidden="true">#</a> 安装pip（pip-9.0）</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># wget https://pypi.python.org/packages/11/b6/abcb525026a4be042b486df43905d6893fb04f05aac21c32c638e939e447/pip-9.0.1.tar.gz#md5=35f01da33009719497f01a4ba69d63c9  #pip下载，官网去下载。
# tar zxf pip-9.0.1.tar.gz 
# cd pip-9.0.1
# python3 setup.py install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="安装ipython" tabindex="-1"><a class="header-anchor" href="#安装ipython" aria-hidden="true">#</a> 安装ipython</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># pip install ipython
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="设置-3-x-为默认版本" tabindex="-1"><a class="header-anchor" href="#设置-3-x-为默认版本" aria-hidden="true">#</a> 设置 3.x 为默认版本</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rm -f /usr/bin/python
ln -s /usr/local/bin/python3 /usr/bin/python
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="配置yum" tabindex="-1"><a class="header-anchor" href="#配置yum" aria-hidden="true">#</a> 配置yum</h2>
<p>升级 Python 之后，由于将默认的 python 指向了 python3，yum 不能正常使用，需要编辑 yum 的配置文件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /usr/bin/yum
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>同时修改：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /usr/libexec/urlgrabber-ext-down
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将 #!/usr/bin/python 改为 #!/usr/bin/python2.7，保存退出即可。</p>
<p>参考链接；</p>
<p>https://www.cnblogs.com/thong2006/p/6843633.html</p>
</template>
