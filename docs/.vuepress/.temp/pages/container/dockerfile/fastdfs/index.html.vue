<template><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<p>需要注意的是 你需要在运行容器的时候制定宿主机的<code>ip</code> 用参数<code>PUBIP</code> 来指定</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p /data/fastdfs
<span class="token function">docker</span> pull wangzhichidocker/fastdfs:1.0.0
<span class="token function">docker</span> container run -d --name fdfs-test --network <span class="token function">host</span> -e <span class="token assign-left variable">PUBIP</span><span class="token operator">=</span>xxx --mount <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/data/fastdfs,target<span class="token operator">=</span>/data/fastdfs wangzhichidocker/fastdfs:1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="客户端测试" tabindex="-1"><a class="header-anchor" href="#客户端测试" aria-hidden="true">#</a> 客户端测试</h2>
<p>拷贝一个图片到容器内</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker container cp favicon.png fdfs-test:/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>进入容器上传图片</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker container exec -it fdfs-test /bin/bash
fdfs_upload_file /etc/fdfs/client.conf /tmp/favicon.png 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>返回值为<code>group1/M00/00/00/wKh932A9-xCAcK7FAAGO_BH5JHs036.png</code></p>
<p>在浏览器访问<code>http://宿主机IP:8888/group1/M00/00/00/wKh932A9-xCAcK7FAAGO_BH5JHs036.png</code>，如果访问图片正常，则测试成功</p>
</template>
