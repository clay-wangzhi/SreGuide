<template><div><h1 id="_1-5-pypi-配置国内镜像" tabindex="-1"><a class="header-anchor" href="#_1-5-pypi-配置国内镜像" aria-hidden="true">#</a> 1.5 pypi 配置国内镜像</h1>
<blockquote>
<p>转载自：Python | willseecloud | 看云</p>
</blockquote>
<p>pypi 国内镜像目前有：</p>
<ul>
<li>阿里云(aliyun) - https://mirrors.aliyun.com/pypi/simple/</li>
<li>豆瓣(douban) - https://pypi.douban.com/simple/</li>
<li>清华大学(tuna) - <a href="https://pypi.tuna.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">https://pypi.tuna.tsinghua.edu.cn<ExternalLinkIcon/></a></li>
<li>中国科学技术大学 - http://pypi.mirrors.ustc.edu.cn/</li>
</ul>
<p>手动指定源，可以在pip后面跟-i 来指定源，比如用豆瓣的源来安装web.py框架：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pip install -i http://pypi.douban.com/simple/ gevent

pip3 install pip --upgrade -i https://mirrors.aliyun.com/pypi/simple/

pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt

easy_install -i http://pypi.douban.com/simple/ gevent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件指定源，linux下修改~/.pip/pip.conf，如果没这文件则创建。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>mkdir ~/.pip
cat > ~/.pip/pip.conf &lt;&lt; EOF 
[global]
trusted-host=mirrors.aliyun.com
index-url=https://mirrors.aliyun.com/pypi/simple/
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>easy_install配置国内源</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cat > ~/.pydistutils.cfg &lt;&lt; EOF 
[easy_install]
index-url=https://mirrors.aliyun.com/pypi/simple/ 
find-links=https://mirrors.aliyun.com/pypi/simple/
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>windows配置</p>
<p>文件夹窗口输入 ：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>%APPDATA%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建一个pip文件夹，在pip文件夹里面新建一个配置文件<code v-pre>pip.ini</code>：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[global]
trusted-host=mirrors.aliyun.com
index-url=https://mirrors.aliyun.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>清华源</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


