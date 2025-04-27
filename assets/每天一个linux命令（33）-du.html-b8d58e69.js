import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as a,a as i,b as e,d as t,f as r,e as c}from"./app-b3d3ed0d.js";const v={},u=i("strong",null,"du命令",-1),m={href:"http://man.linuxde.net/df",target:"_blank",rel:"noopener noreferrer"},o=c(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p><code>du [选项][文件]</code></p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-a或-all 显示目录中个别文件的大小。
-b或-bytes 显示目录或文件大小时，以byte为单位。
-c或--total 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。
-k或--kilobytes 以KB(1024bytes)为单位输出。
-m或--megabytes 以MB为单位输出。
-s或--summarize 仅显示总计，只列出最后加总的值。
-h或--human-readable 以K，M，G为单位，提高信息的可读性。
-x或--one-file-xystem 以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。
-L&lt;符号链接&gt;或--dereference&lt;符号链接&gt; 显示选项中所指定符号链接的源文件大小。
-S或--separate-dirs 显示个别目录的大小时，并不含其子目录的大小。
-X&lt;文件&gt;或--exclude-from=&lt;文件&gt; 在&lt;文件&gt;指定目录或文件。
--exclude=&lt;目录或文件&gt; 略过指定的目录或文件。
-D或--dereference-args 显示指定符号链接的源文件大小。
-H或--si 与-h参数相同，但是K，M，G是以1000为换算单位。
-l或--count-links 重复计算硬件链接的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用实例" tabindex="-1"><a class="header-anchor" href="#常用实例" aria-hidden="true">#</a> 常用实例</h2><p>1）显示目录或者文件所占空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du
608     ./test6
308     ./test4
4       ./scf/lib
4       ./scf/service/deploy/product
4       ./scf/service/deploy/info
12      ./scf/service/deploy
16      ./scf/service
4       ./scf/doc
4       ./scf/bin
32      ./scf
8       ./test3
1288    .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>只显示当前目录下面的子目录的目录大小和当前目录的总的大小，最下面的1288为当前目录的总大小</p><p>2）显示指定文件所占空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du log2012.log 
300     log2012.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3）查看指定目录的所占空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du scf
4       scf/lib
4       scf/service/deploy/product
4       scf/service/deploy/info
12      scf/service/deploy
16      scf/service
4       scf/doc
4       scf/bin
32      scf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）显示多个文件所占空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du log30.tar.gz log31.tar.gz 
4       log30.tar.gz
4       log31.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5）只显示总和的大小</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du -s
1288    .
# du -s scf
32      scf
# cd ..
# du -s test
1288    test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6）方便阅读的格式显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du -h test
608K    test/test6
308K    test/test4
4.0K    test/scf/lib
4.0K    test/scf/service/deploy/product
4.0K    test/scf/service/deploy/info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7）文件和目录都显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du -ah test
4.0K    test/log31.tar.gz
4.0K    test/test13.tar.gz
0       test/linklog.log
0       test/test6/log2014.log
300K    test/test6/linklog.log
0       test/test6/log2015.log
4.0K    test/test6/log2013.log
300K    test/test6/log2012.log
0       test/test6/log2017.log
0       test/test6/log2016.log
608K    test/test6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8）显示几个文件或目录各自占用磁盘空间的大小，还统计它们的总和</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du -c log30.tar.gz log31.tar.gz 
4       log30.tar.gz
4       log31.tar.gz
8       总计
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>加上-c选项后，du不仅显示两个目录各自占用磁盘空间的大小，还在最后一行统计它们的总和。</p><p>9）按照空间大小排序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du|sort -nr|more
1288    .
608     ./test6
308     ./test4
32      ./scf
16      ./scf/service
12      ./scf/service/deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10）输出当前目录下各个子目录所使用的空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># du -h  --max-depth=1
608K    ./test6
308K    ./test4
32K     ./scf
8.0K    ./test3
1.3M    .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p><p>http://www.cnblogs.com/peida/archive/2012/12/10/2810755.html</p><p>http://man.linuxde.net/du</p>`,32);function b(g,p){const n=d("ExternalLinkIcon");return l(),a("div",null,[i("p",null,[u,e("也是查看使用空间的，但是与"),i("a",m,[e("df"),t(n)]),e("命令不同的是Linux du命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的。")]),r("more"),o])}const h=s(v,[["render",b],["__file","每天一个linux命令（33）-du.html.vue"]]);export{h as default};
