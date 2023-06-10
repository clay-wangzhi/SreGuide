import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,e as a}from"./app-1a5afd71.js";const n={},d=a(`<h1 id="查看文件类型" tabindex="-1"><a class="header-anchor" href="#查看文件类型" aria-hidden="true">#</a> 查看文件类型</h1><h3 id="ls命令" tabindex="-1"><a class="header-anchor" href="#ls命令" aria-hidden="true">#</a> ls命令</h3><p>ls命令时linux下最常用的命令。ls命令就是list的缩写，缺省下ls用来打印出当前目录的清单，如果ls指定其他目录，那么就会显示指定目录里的文件及文件夹清单。</p><p>通过ls命令不仅可以查看linux文件夹包含的文件，而且可以查看文件权限（包括目录、文件夹、文件权限），查看目录信息等等。</p><h4 id="常用选项" tabindex="-1"><a class="header-anchor" href="#常用选项" aria-hidden="true">#</a> 常用选项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-a：显示所有档案及目录（ls内定将档案名或目录名称为“.”的视为影藏，不会列出）；
-l：以长格式显示目录下的内容列表。输出的信息从左到右依次包括文件名，文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后修改时间等；
-h:–human-readable 以容易理解的格式列出文件大小 (例如 1K 234M 2G);
-s：显示文件和目录的大小，以区块为单位；
-t：用文件和目录的更改时间排序；
-r：以文件名反序排列并输出目录内容列表；
-d：仅显示目录名，而不显示目录下的内容列表。显示符号链接文件本身，而不显示其所指向的目录列表；
-R：递归处理，将指定目录下的所有文件及子目录一并处理；
--color[=WHEN]：使用不同的颜色高亮显示不同类型的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用范例" tabindex="-1"><a class="header-anchor" href="#常用范例" aria-hidden="true">#</a> 常用范例</h4><ol><li>列出/opt文件夹下的所有文件和目录的详细资料</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls -lR /opt/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/opt/:
total 124188
-rw-r--r-- 1 root root 127163815 Aug 25 06:10 go1.11.linux-amd64.tar.gz
-rw-r--r-- 1 root root      1003 Sep 11 14:16 setup.sh
drwxr-xr-x 1 root root       512 Jan 28 22:17 test

/opt/test:
total 0
-rw-r--r-- 1 root root 0 Jan 28 22:17 test.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>列出当前目录中所有以“t”开头的目录的详细内容，可以使用如下命令：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls -l t*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>total 0
-rw-r--r-- 1 root root 0 Jan 28 22:17 test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>列出目前工作目录下所有名称是s 开头的档案，越新的排越后面，可以使用如下命令：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls -ltr s*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-rw-r--r-- 1 root root 1003 Sep 11 14:16 setup.sh
-rw-r--r-- 1 root root    0 Jan 28 22:21 s.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h4><p>蓝色—–目录</p><p>绿色—–可执行文件</p><p>白色—–一般性文件，如文本文件，配置文件等</p><p>红色—–压缩文件或归档文件</p><p>浅蓝色—-链接文件</p><p>红色闪烁—-链接文件存在问题</p><p>黄色—–设备文件</p><p>青黄色—-管道文件</p><h3 id="file命令" tabindex="-1"><a class="header-anchor" href="#file命令" aria-hidden="true">#</a> file命令</h3><p>用来探测给定文件的类型。</p><h4 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h4><p><strong>file命令</strong> 用来探测给定文件的类型。file命令对文件的检查分为文件系统、魔法幻数检查和语言检查3个过程。</p><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>file(选项)(参数)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-b：列出辨识结果时，不显示文件名称；
-c：详细显示指令执行过程，便于排错或分析程序执行的情形；
-f&lt;名称文件&gt;：指定名称文件，其内容有一个或多个文件名称时，让file依序辨识这些文件，格式为每列一个文件名称；
-L：直接显示符号连接所指向的文件类别；
-m&lt;魔法数字文件&gt;：指定魔法数字文件；
-v：显示版本信息；
-z：尝试去解读压缩文件的内容。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><p>文件：要确定类型的文件列表，多个文件之间使用空格分开，可以使用shell通配符匹配多个文件。</p><h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h4><p>显示文件类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# file install.log
install.log: UTF-8 Unicode text

[root@localhost ~]# file -b install.log      &lt;== 不显示文件名称
UTF-8 Unicode text

[root@localhost ~]# file -i install.log      &lt;== 显示MIME类别。
install.log: text/plain; charset=utf-8

[root@localhost ~]# file -b -i install.log
text/plain; charset=utf-8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示符号链接的文件类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# ls -l /var/mail
lrwxrwxrwx 1 root root 10 08-13 00:11 /var/mail -&gt; spool/mail

[root@localhost ~]# file /var/mail
/var/mail: symbolic link to \`spool/mail&#39;

[root@localhost ~]# file -L /var/mail
/var/mail: directory

[root@localhost ~]# file /var/spool/mail
/var/spool/mail: directory

[root@localhost ~]# file -L /var/spool/mail
/var/spool/mail: directory

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),s=[d];function r(t,v){return i(),l("div",null,s)}const u=e(n,[["render",r],["__file","file-type.html.vue"]]);export{u as default};
