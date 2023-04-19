<template><h1 id="linux下如何增加swap交换分区" tabindex="-1"><a class="header-anchor" href="#linux下如何增加swap交换分区" aria-hidden="true">#</a> linux下如何增加swap交换分区</h1>
<p>swap即交换分区，类似于<a href="http://www.ttlsa.com/windows/" target="_blank" rel="noopener noreferrer">windows<ExternalLinkIcon/></a>虚拟内存功能，就是在硬盘上分配出一块空间作为虚拟内存来使用.</p>
<p>通常swap都是在装系统硬盘分区时设定，这里只是探讨一下系统已经安装好后，扩展swap分区的方法.下面我们来将下如何在安装好的<a href="http://www.ttlsa.com/linux/" target="_blank" rel="noopener noreferrer">linux<ExternalLinkIcon/></a>下增加swap交换分区.</p>
<p>可以有两种方法来增加swap分区，一种是将新的分区来作为swap，另一种是在磁盘中创建一个大的文件来作swap.</p>
<h2 id="新分区扩展swap" tabindex="-1"><a class="header-anchor" href="#新分区扩展swap" aria-hidden="true">#</a> 新分区扩展swap</h2>
<p>假如有一个新的分区/dev/sda3,我们用它来作swap.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># swapon -s                --查看当前swap情况
# mkswap /dev/sda3
# swapon /dev/sda3
# swapon -s
# vi /etc/fstab
/dev/sda3   swap   swap  defaults  0  0    --添加开机自动挂载
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="大文件扩展swap" tabindex="-1"><a class="header-anchor" href="#大文件扩展swap" aria-hidden="true">#</a> 大文件扩展swap</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cd /var
# dd if=/dev/zero of=file bs=1M count=1000       --生成1G的大文件
# mkswap file
# swapon file
# swapon -s
# vi /etc/fstab
/var/file   swap   swap   defaults  0   0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
