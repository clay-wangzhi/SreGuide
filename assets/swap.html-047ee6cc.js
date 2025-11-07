import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as t,a,b as e,d as n,e as l}from"./app-6b705441.js";const c={},o=a("h1",{id:"linux下如何增加swap交换分区",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#linux下如何增加swap交换分区","aria-hidden":"true"},"#"),e(" linux下如何增加swap交换分区")],-1),p={href:"http://www.ttlsa.com/windows/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.ttlsa.com/linux/",target:"_blank",rel:"noopener noreferrer"},u=l(`<p>可以有两种方法来增加swap分区，一种是将新的分区来作为swap，另一种是在磁盘中创建一个大的文件来作swap.</p><h2 id="新分区扩展swap" tabindex="-1"><a class="header-anchor" href="#新分区扩展swap" aria-hidden="true">#</a> 新分区扩展swap</h2><p>假如有一个新的分区/dev/sda3,我们用它来作swap.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># swapon -s                --查看当前swap情况
# mkswap /dev/sda3
# swapon /dev/sda3
# swapon -s
# vi /etc/fstab
/dev/sda3   swap   swap  defaults  0  0    --添加开机自动挂载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大文件扩展swap" tabindex="-1"><a class="header-anchor" href="#大文件扩展swap" aria-hidden="true">#</a> 大文件扩展swap</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cd /var
# dd if=/dev/zero of=file bs=1M count=1000       --生成1G的大文件
# mkswap file
# swapon file
# swapon -s
# vi /etc/fstab
/var/file   swap   swap   defaults  0   0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(m,h){const s=d("ExternalLinkIcon");return r(),t("div",null,[o,a("p",null,[e("swap即交换分区，类似于"),a("a",p,[e("windows"),n(s)]),e("虚拟内存功能，就是在硬盘上分配出一块空间作为虚拟内存来使用.")]),a("p",null,[e("通常swap都是在装系统硬盘分区时设定，这里只是探讨一下系统已经安装好后，扩展swap分区的方法.下面我们来将下如何在安装好的"),a("a",v,[e("linux"),n(s)]),e("下增加swap交换分区.")]),u])}const _=i(c,[["render",w],["__file","swap.html.vue"]]);export{_ as default};
