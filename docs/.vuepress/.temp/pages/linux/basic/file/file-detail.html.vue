<template><h1 id="查看文件详细属性" tabindex="-1"><a class="header-anchor" href="#查看文件详细属性" aria-hidden="true">#</a> 查看文件详细属性</h1>
<h3 id="stat命令" tabindex="-1"><a class="header-anchor" href="#stat命令" aria-hidden="true">#</a> stat命令</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># stat a.go 
  File: a.go
  Size: 63        	Blocks: 0          IO Block: 512    regular file
Device: 2h/2d	Inode: 19140298416386648  Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2018-10-09 12:42:07.978765400 +0800
Modify: 2018-10-09 12:42:07.980763600 +0800
Change: 2018-10-09 12:42:07.982774800 +0800
 Birth: -
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>访问时间：atime，查看内容<br>
修改时间：mtime，修改内容
改变时间：ctime，文件属性，比如权限
删除时间：dtime，文件被删除的时间</p>
</template>
