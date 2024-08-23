import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,f as i,a as l,e as o}from"./app-ff59e76a.js";const s={},d=l("p",null,"在使用 find命令的-exec选项处理匹配到的文件时， find命令将所有匹配到的文件一起传递给exec执行。但有些系统对能够传递给exec的命令长度有限制，这样在find命令运行几分钟之后，就会出现溢出错误。错误信息通常是“参数列太长”或“参数列溢出”。这就是xargs命令的用处所在，特别是与find命令一起使用。",-1),t=o(`<p>find命令把匹配到的文件传递给xargs命令，而xargs命令每次只获取一部分文件而不是全部，不像-exec选项那样。这样它可以先处理最先获取的一部分文件，然后是下一批，并如此继续下去。</p><p>在有些系统中，使用-exec选项会为处理每一个匹配到的文件而发起一个相应的进程，并非将匹配到的文件全部作为参数一次执行；这样在有些情况下就会出现进程过多，系统性能下降的问题，因而效率不高； 而使用xargs命令则只有一个进程。另外，在使用xargs命令时，究竟是一次获取所有的参数，还是分批取得参数，以及每一次获取参数的数目都会根据该命令的选项及系统内核中相应的可调参数来确定。</p><p>使用实例：</p><p>1） 查找系统中的每一个普通文件，然后使用xargs命令来测试它们分别属于哪类文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#ll
总计 312
-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxrwx 2 root root   4096 11-12 19:32 test3
drwxrwxrwx 2 root root   4096 11-12 19:32 test4
# find . -type f -print | xargs file
./log2014.log: empty
./log2013.log: empty
./log2012.log: ASCII text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）在整个系统中查找内存信息转储文件(core dump) ，然后把结果保存到/tmp/core.log 文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># find / -name &quot;core&quot; -print | xargs echo &quot;&quot; &gt;/tmp/core.log
# cd /tmp
# ll
总计 16
-rw-r--r-- 1 root root 1524 11-12 22:29 core.log
drwx------ 2 root root 4096 11-12 22:24 ssh-TzcZDx1766
drwx------ 2 root root 4096 11-12 22:28 ssh-ykiRPk1815
drwx------ 2 root root 4096 11-03 07:11 vmware-root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）在当前目录下查找所有用户具有读、写和执行权限的文件，并收回相应的写权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ll
总计 312
-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxrwx 2 root root   4096 11-12 19:32 test3
drwxrwxrwx 2 root root   4096 11-12 19:32 test4
# find . -perm -7 -print | xargs chmod o-w
# ll
总计 312
-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-12 19:32 test3
drwxrwxr-x 2 root root   4096 11-12 19:32 test4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>执行命令后，文件夹scf、test3和test4的权限都发生改变</p><p>4）用grep命令在所有的普通文件中搜索hostname这个词</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># find . -type f -print | xargs grep &quot;hostname&quot;
./log2013.log:hostnamebaidu=baidu.com
./log2013.log:hostnamesina=sina.com
./log2013.log:hostnames=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5）用grep命令在当前目录下的所有普通文件中搜索hostnames这个词</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># find . -name \\* -type f -print | xargs grep &quot;hostnames&quot;
./log2013.log:hostnamesina=sina.com
./log2013.log:hostnames=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>注意，在上面的例子中， \\用来取消find命令中的*在shell中的特殊含义。</p><p>6）使用xargs执行mv</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ll
总计 316
-rw-r--r-- 1 root root 302108 11-03 06:19 log2012.log
-rw-r--r-- 1 root root     61 11-12 22:44 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:25 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-12 22:54 test3
drwxrwxr-x 2 root root   4096 11-12 19:32 test4
# cd test4/
# ll
总计 0[root@localhost test4]# cd ..
# find . -name &quot;*.log&quot; | xargs -i mv {} test4
# ll
总计 12drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxr-x 2 root root 4096 11-13 05:50 test3
drwxrwxr-x 2 root root 4096 11-13 05:50 test4
# cd test4/
# ll
总计 304
-rw-r--r-- 1 root root 302108 11-12 22:54 log2012.log
-rw-r--r-- 1 root root     61 11-12 22:54 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:54 log2014.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7）find后执行xargs提示xargs: argument line too long解决方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#find . -type f -atime +0 -print0 | xargs -0 -l1 -t rm -f
rm -f 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>-l1是一次处理一个；-t是处理之前打印出命令</p><p>8）使用-i参数默认的前面输出用{}代替，-I参数可以指定其他代替字符，如例子中的[]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ll
总计 12drwxr-xr-x 6 root root 4096 10-27 01:58 scf
drwxrwxr-x 2 root root 4096 11-13 05:50 test3
drwxrwxr-x 2 root root 4096 11-13 05:50 test4
# cd test4
# find . -name &quot;file&quot; | xargs -I [] cp [] ..
# ll
总计 304
-rw-r--r-- 1 root root 302108 11-12 22:54 log2012.log
-rw-r--r-- 1 root root     61 11-12 22:54 log2013.log
-rw-r--r-- 1 root root      0 11-12 22:54 log2014.log
# cd ..
# ll
总计 316
-rw-r--r-- 1 root root 302108 11-13 06:03 log2012.log
-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log
-rw-r--r-- 1 root root      0 11-13 06:03 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-13 05:50 test3
drwxrwxr-x 2 root root   4096 11-13 05:50 test4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>使用-i参数默认的前面输出用{}代替，-I参数可以指定其他代替字符，如例子中的[]</p><p>9）xargs的-p参数的使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ll
总计 0
-rw-r--r-- 1 root root 0 11-13 06:06 log2015.log
# cd ..
# ll
总计 316
-rw-r--r-- 1 root root 302108 11-13 06:03 log2012.log
-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log
-rw-r--r-- 1 root root      0 11-13 06:03 log2014.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-13 06:06 test3
drwxrwxr-x 2 root root   4096 11-13 05:50 test4
# cd test3
#  find . -name &quot;*.log&quot; | xargs -p -i mv {} ..
mv ./log2015.log .. ?...y
# ll
总计 0
# cd ..
# ll
总计 316
-rw-r--r-- 1 root root 302108 11-13 06:03 log2012.log
-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log
-rw-r--r-- 1 root root      0 11-13 06:03 log2014.log
-rw-r--r-- 1 root root      0 11-13 06:06 log2015.log
drwxr-xr-x 6 root root   4096 10-27 01:58 scf
drwxrwxr-x 2 root root   4096 11-13 06:08 test3
drwxrwxr-x 2 root root   4096 11-13 05:50 test4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>-p参数会提示让你确认是否执行后面的命令,y执行，n不执行。</p><p>转载链接：</p><p>http://www.cnblogs.com/peida/archive/2012/11/15/2770888.html</p>`,33);function a(v,c){return e(),n("div",null,[d,i("more"),t])}const x=r(s,[["render",a],["__file","每天一个linux命令（21）-find.html.vue"]]);export{x as default};
