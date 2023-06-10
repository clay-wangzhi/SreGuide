const e=JSON.parse('{"key":"v-2b64c83c","path":"/code/shell/part4-command.html","title":"第四部分 命令","lang":"zh-CN","frontmatter":{"author":"LinuxStory","category":"Linux","tag":["Bash"],"description":"第四部分 命令 掌握 Linux 命令是编写有效的 shell 脚本必不可少的序曲。 本章节涉及了下列的命令： .（参照 source） ac adduser agetty agrep ar arch at autoload awk（参考 使用 awk 进行数学运算） badblocks banner basename batch bc bg bind bison builtin bzgrep bzip2 cal caller cat cd chattr chfn chgrp chkconfig chmod chown chroot cksum clear clock cmp col colrm column comm command compgen complete compress coproc cp cpio cron crypt csplit cu cut date dc dd debugfs declare depmod df dialog diff diff3 diffstat dig dirname dirs disown dmesg doexec dos2unix du dump dumpe2fs e2fsck echo egrep enable enscript env eqn eval exec exit（相关话题：退出状态） expand export expr factor false fdformat fdisk fg fgrep file find finger flex flock fmt fold free fsck ftp fuser getfacl getopt getopts gettext getty gnome-mount grep groff groupmod groups（相关话题：变量 $GROUPS） gs gzip halt hash hdparm head help hexdump host hostid hostname（相关话题：变量 $HOSTNAME） hwclock iconv id（相关话题：变量 $UID） ifconfig info infocmp init insmod install ip ipcalc iptables iwconfig jobs join jot kill killall last lastcomm lastlog ldd less let lex lid ln locate lockfile logger logname logout logrotate look losetup lp ls lsdev lsmod lsof lspci lsusb ltrace lynx lzcat lzma m4 mail mailstats mailto make MAKEDEV man mapfile mcookie md5sum merge mesg mimencode mkbootdisk mkdir mkdosfs mke2fs mkfifo mkisofs mknod mkswap mktemp mmencode modinfo modprobe more mount msgfmt mv nc netconfig netstat newgrp nice nl nm nmap nohup nslookup objdump od openssl passwd paste patch（相关话题：diff） pathchk pax pgrep pidof ping pkill popd pr printenv printf procinfo ps pstree ptx pushd pwd（相关话题：变量 $PWD） quota rcp rdev rdist read readelf readlink readonly reboot recode renice reset resize restore rev rlogin rm rmdir rmmod route rpm rpm2cpio rsh rsync runlevel run-parts rx rz sar scp script sdiff sed seq service set setfacl setquota setserial setterm sha1sum shar shopt shred shutdown size skill sleep slocate snice sort source sox split sq ssh stat strace strings strip stty su sudo sum suspend swapoff swapon sx sync sz tac tail tar tbl tcpdump tee telinit telnet Tex texexec time times tmpwatch top touch tput tr traceroute true tset tsort tty tune2fs type typeset ulimit umask umount uname unarc unarj uncompress unexpand uniq units unlzma unrar unset unsq unzip uptime usbmodules useradd userdel usermod users usleep uucp uudecode uuencode uux vacation vdir vmstat vrfy w wait wall watch wc wget whatis whereis which who whoami whois write xargs xrandr xz yacc yes zcat zdiff zdump zegrep zfgrep zgrep zip","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/code/shell/part4-command.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"第四部分 命令"}],["meta",{"property":"og:description","content":"第四部分 命令 掌握 Linux 命令是编写有效的 shell 脚本必不可少的序曲。 本章节涉及了下列的命令： .（参照 source） ac adduser agetty agrep ar arch at autoload awk（参考 使用 awk 进行数学运算） badblocks banner basename batch bc bg bind bison builtin bzgrep bzip2 cal caller cat cd chattr chfn chgrp chkconfig chmod chown chroot cksum clear clock cmp col colrm column comm command compgen complete compress coproc cp cpio cron crypt csplit cu cut date dc dd debugfs declare depmod df dialog diff diff3 diffstat dig dirname dirs disown dmesg doexec dos2unix du dump dumpe2fs e2fsck echo egrep enable enscript env eqn eval exec exit（相关话题：退出状态） expand export expr factor false fdformat fdisk fg fgrep file find finger flex flock fmt fold free fsck ftp fuser getfacl getopt getopts gettext getty gnome-mount grep groff groupmod groups（相关话题：变量 $GROUPS） gs gzip halt hash hdparm head help hexdump host hostid hostname（相关话题：变量 $HOSTNAME） hwclock iconv id（相关话题：变量 $UID） ifconfig info infocmp init insmod install ip ipcalc iptables iwconfig jobs join jot kill killall last lastcomm lastlog ldd less let lex lid ln locate lockfile logger logname logout logrotate look losetup lp ls lsdev lsmod lsof lspci lsusb ltrace lynx lzcat lzma m4 mail mailstats mailto make MAKEDEV man mapfile mcookie md5sum merge mesg mimencode mkbootdisk mkdir mkdosfs mke2fs mkfifo mkisofs mknod mkswap mktemp mmencode modinfo modprobe more mount msgfmt mv nc netconfig netstat newgrp nice nl nm nmap nohup nslookup objdump od openssl passwd paste patch（相关话题：diff） pathchk pax pgrep pidof ping pkill popd pr printenv printf procinfo ps pstree ptx pushd pwd（相关话题：变量 $PWD） quota rcp rdev rdist read readelf readlink readonly reboot recode renice reset resize restore rev rlogin rm rmdir rmmod route rpm rpm2cpio rsh rsync runlevel run-parts rx rz sar scp script sdiff sed seq service set setfacl setquota setserial setterm sha1sum shar shopt shred shutdown size skill sleep slocate snice sort source sox split sq ssh stat strace strings strip stty su sudo sum suspend swapoff swapon sx sync sz tac tail tar tbl tcpdump tee telinit telnet Tex texexec time times tmpwatch top touch tput tr traceroute true tset tsort tty tune2fs type typeset ulimit umask umount uname unarc unarj uncompress unexpand uniq units unlzma unrar unset unsq unzip uptime usbmodules useradd userdel usermod users usleep uucp uudecode uuencode uux vacation vdir vmstat vrfy w wait wall watch wc wget whatis whereis which who whoami whois write xargs xrandr xz yacc yes zcat zdiff zdump zegrep zfgrep zgrep zip"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-19T13:08:31.000Z"}],["meta",{"property":"article:author","content":"LinuxStory"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:modified_time","content":"2023-04-19T13:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第四部分 命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-19T13:08:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LinuxStory\\"}]}"]]},"headers":[{"level":3,"title":"目录","slug":"目录","link":"#目录","children":[]}],"git":{"createdTime":1681909711000,"updatedTime":1681909711000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":1.93,"words":579},"filePathRelative":"code/shell/part4-command.md","localizedDate":"2023年4月19日","excerpt":"<h1> 第四部分 命令</h1>\\n<p>掌握 Linux 命令是编写有效的 shell 脚本必不可少的序曲。</p>\\n<p>本章节涉及了下列的命令：</p>\\n<ul>\\n<li><a href=\\"\\"><code>.</code></a>（参照 <a href=\\"\\"><code>source</code></a>）</li>\\n<li><a href=\\"\\"><code>ac</code></a></li>\\n<li><a href=\\"\\"><code>adduser</code></a></li>\\n<li><a href=\\"\\"><code>agetty</code></a></li>\\n<li><a href=\\"\\"><code>agrep</code></a></li>\\n<li><a href=\\"\\"><code>ar</code></a></li>\\n<li><a href=\\"\\"><code>arch</code></a></li>\\n<li><a href=\\"\\"><code>at</code></a></li>\\n<li><a href=\\"\\"><code>autoload</code></a></li>\\n<li><a href=\\"\\"><code>awk</code></a>（参考 <a href=\\"\\">使用 <code>awk</code> 进行数学运算</a>）</li>\\n<li><a href=\\"\\"><code>badblocks</code></a></li>\\n<li><a href=\\"\\"><code>banner</code></a></li>\\n<li><a href=\\"\\"><code>basename</code></a></li>\\n<li><a href=\\"\\"><code>batch</code></a></li>\\n<li><a href=\\"\\"><code>bc</code></a></li>\\n<li><a href=\\"\\"><code>bg</code></a></li>\\n<li><a href=\\"\\"><code>bind</code></a></li>\\n<li><a href=\\"\\"><code>bison</code></a></li>\\n<li><a href=\\"\\"><code>builtin</code></a></li>\\n<li><a href=\\"\\"><code>bzgrep</code></a></li>\\n<li><a href=\\"\\"><code>bzip2</code></a></li>\\n<li><a href=\\"\\"><code>cal</code></a></li>\\n<li><a href=\\"\\"><code>caller</code></a></li>\\n<li><a href=\\"\\"><code>cat</code></a></li>\\n<li><a href=\\"\\"><code>cd</code></a></li>\\n<li><a href=\\"\\"><code>chattr</code></a></li>\\n<li><a href=\\"\\"><code>chfn</code></a></li>\\n<li><a href=\\"\\"><code>chgrp</code></a></li>\\n<li><a href=\\"\\"><code>chkconfig</code></a></li>\\n<li><a href=\\"\\"><code>chmod</code></a></li>\\n<li><a href=\\"\\"><code>chown</code></a></li>\\n<li><a href=\\"\\"><code>chroot</code></a></li>\\n<li><a href=\\"\\"><code>cksum</code></a></li>\\n<li><a href=\\"\\"><code>clear</code></a></li>\\n<li><a href=\\"\\"><code>clock</code></a></li>\\n<li><a href=\\"\\"><code>cmp</code></a></li>\\n<li><a href=\\"\\"><code>col</code></a></li>\\n<li><a href=\\"\\"><code>colrm</code></a></li>\\n<li><a href=\\"\\"><code>column</code></a></li>\\n<li><a href=\\"\\"><code>comm</code></a></li>\\n<li><a href=\\"\\"><code>command</code></a></li>\\n<li><a href=\\"\\"><code>compgen</code></a></li>\\n<li><a href=\\"\\"><code>complete</code></a></li>\\n<li><a href=\\"\\"><code>compress</code></a></li>\\n<li><a href=\\"\\"><code>coproc</code></a></li>\\n<li><a href=\\"\\"><code>cp</code></a></li>\\n<li><a href=\\"\\"><code>cpio</code></a></li>\\n<li><a href=\\"\\"><code>cron</code></a></li>\\n<li><a href=\\"\\"><code>crypt</code></a></li>\\n<li><a href=\\"\\"><code>csplit</code></a></li>\\n<li><a href=\\"\\"><code>cu</code></a></li>\\n<li><a href=\\"\\"><code>cut</code></a></li>\\n<li><a href=\\"\\"><code>date</code></a></li>\\n<li><a href=\\"\\"><code>dc</code></a></li>\\n<li><a href=\\"\\"><code>dd</code></a></li>\\n<li><a href=\\"\\"><code>debugfs</code></a></li>\\n<li><a href=\\"\\"><code>declare</code></a></li>\\n<li><a href=\\"\\"><code>depmod</code></a></li>\\n<li><a href=\\"\\"><code>df</code></a></li>\\n<li><a href=\\"\\"><code>dialog</code></a></li>\\n<li><a href=\\"\\"><code>diff</code></a></li>\\n<li><a href=\\"\\"><code>diff3</code></a></li>\\n<li><a href=\\"\\"><code>diffstat</code></a></li>\\n<li><a href=\\"\\"><code>dig</code></a></li>\\n<li><a href=\\"\\"><code>dirname</code></a></li>\\n<li><a href=\\"\\"><code>dirs</code></a></li>\\n<li><a href=\\"\\"><code>disown</code></a></li>\\n<li><a href=\\"\\"><code>dmesg</code></a></li>\\n<li><a href=\\"\\"><code>doexec</code></a></li>\\n<li><a href=\\"\\"><code>dos2unix</code></a></li>\\n<li><a href=\\"\\"><code>du</code></a></li>\\n<li><a href=\\"\\"><code>dump</code></a></li>\\n<li><a href=\\"\\"><code>dumpe2fs</code></a></li>\\n<li><a href=\\"\\"><code>e2fsck</code></a></li>\\n<li><a href=\\"\\"><code>echo</code></a></li>\\n<li><a href=\\"\\"><code>egrep</code></a></li>\\n<li><a href=\\"\\"><code>enable</code></a></li>\\n<li><a href=\\"\\"><code>enscript</code></a></li>\\n<li><a href=\\"\\"><code>env</code></a></li>\\n<li><a href=\\"\\"><code>eqn</code></a></li>\\n<li><a href=\\"\\"><code>eval</code></a></li>\\n<li><a href=\\"\\"><code>exec</code></a></li>\\n<li><a href=\\"\\"><code>exit</code></a>（相关话题：<a href=\\"\\">退出状态</a>）</li>\\n<li><a href=\\"\\"><code>expand</code></a></li>\\n<li><a href=\\"\\"><code>export</code></a></li>\\n<li><a href=\\"\\"><code>expr</code></a></li>\\n<li><a href=\\"\\"><code>factor</code></a></li>\\n<li><a href=\\"\\"><code>false</code></a></li>\\n<li><a href=\\"\\"><code>fdformat</code></a></li>\\n<li><a href=\\"\\"><code>fdisk</code></a></li>\\n<li><a href=\\"\\"><code>fg</code></a></li>\\n<li><a href=\\"\\"><code>fgrep</code></a></li>\\n<li><a href=\\"\\"><code>file</code></a></li>\\n<li><a href=\\"\\"><code>find</code></a></li>\\n<li><a href=\\"\\"><code>finger</code></a></li>\\n<li><a href=\\"\\"><code>flex</code></a></li>\\n<li><a href=\\"\\"><code>flock</code></a></li>\\n<li><a href=\\"\\"><code>fmt</code></a></li>\\n<li><a href=\\"\\"><code>fold</code></a></li>\\n<li><a href=\\"\\"><code>free</code></a></li>\\n<li><a href=\\"\\"><code>fsck</code></a></li>\\n<li><a href=\\"\\"><code>ftp</code></a></li>\\n<li><a href=\\"\\"><code>fuser</code></a></li>\\n<li><a href=\\"\\"><code>getfacl</code></a></li>\\n<li><a href=\\"\\"><code>getopt</code></a></li>\\n<li><a href=\\"\\"><code>getopts</code></a></li>\\n<li><a href=\\"\\"><code>gettext</code></a></li>\\n<li><a href=\\"\\"><code>getty</code></a></li>\\n<li><a href=\\"\\"><code>gnome-mount</code></a></li>\\n<li><a href=\\"\\"><code>grep</code></a></li>\\n<li><a href=\\"\\"><code>groff</code></a></li>\\n<li><a href=\\"\\"><code>groupmod</code></a></li>\\n<li><a href=\\"\\"><code>groups</code></a>（相关话题：变量 <a href=\\"\\"><code>$GROUPS</code></a>）</li>\\n<li><a href=\\"\\"><code>gs</code></a></li>\\n<li><a href=\\"\\"><code>gzip</code></a></li>\\n<li><a href=\\"\\"><code>halt</code></a></li>\\n<li><a href=\\"\\"><code>hash</code></a></li>\\n<li><a href=\\"\\"><code>hdparm</code></a></li>\\n<li><a href=\\"\\"><code>head</code></a></li>\\n<li><a href=\\"\\"><code>help</code></a></li>\\n<li><a href=\\"\\"><code>hexdump</code></a></li>\\n<li><a href=\\"\\"><code>host</code></a></li>\\n<li><a href=\\"\\"><code>hostid</code></a></li>\\n<li><a href=\\"\\"><code>hostname</code></a>（相关话题：变量 <a href=\\"\\"><code>$HOSTNAME</code></a>）</li>\\n<li><a href=\\"\\"><code>hwclock</code></a></li>\\n<li><a href=\\"\\"><code>iconv</code></a></li>\\n<li><a href=\\"\\"><code>id</code></a>（相关话题：变量 <a href=\\"\\"><code>$UID</code></a>）</li>\\n<li><a href=\\"\\"><code>ifconfig</code></a></li>\\n<li><a href=\\"\\"><code>info</code></a></li>\\n<li><a href=\\"\\"><code>infocmp</code></a></li>\\n<li><a href=\\"\\"><code>init</code></a></li>\\n<li><a href=\\"\\"><code>insmod</code></a></li>\\n<li><a href=\\"\\"><code>install</code></a></li>\\n<li><a href=\\"\\"><code>ip</code></a></li>\\n<li><a href=\\"\\"><code>ipcalc</code></a></li>\\n<li><a href=\\"\\"><code>iptables</code></a></li>\\n<li><a href=\\"\\"><code>iwconfig</code></a></li>\\n<li><a href=\\"\\"><code>jobs</code></a></li>\\n<li><a href=\\"\\"><code>join</code></a></li>\\n<li><a href=\\"\\"><code>jot</code></a></li>\\n<li><a href=\\"\\"><code>kill</code></a></li>\\n<li><a href=\\"\\"><code>killall</code></a></li>\\n<li><a href=\\"\\"><code>last</code></a></li>\\n<li><a href=\\"\\"><code>lastcomm</code></a></li>\\n<li><a href=\\"\\"><code>lastlog</code></a></li>\\n<li><a href=\\"\\"><code>ldd</code></a></li>\\n<li><a href=\\"\\"><code>less</code></a></li>\\n<li><a href=\\"\\"><code>let</code></a></li>\\n<li><a href=\\"\\"><code>lex</code></a></li>\\n<li><a href=\\"\\"><code>lid</code></a></li>\\n<li><a href=\\"\\"><code>ln</code></a></li>\\n<li><a href=\\"\\"><code>locate</code></a></li>\\n<li><a href=\\"\\"><code>lockfile</code></a></li>\\n<li><a href=\\"\\"><code>logger</code></a></li>\\n<li><a href=\\"\\"><code>logname</code></a></li>\\n<li><a href=\\"\\"><code>logout</code></a></li>\\n<li><a href=\\"\\"><code>logrotate</code></a></li>\\n<li><a href=\\"\\"><code>look</code></a></li>\\n<li><a href=\\"\\"><code>losetup</code></a></li>\\n<li><a href=\\"\\"><code>lp</code></a></li>\\n<li><a href=\\"\\"><code>ls</code></a></li>\\n<li><a href=\\"\\"><code>lsdev</code></a></li>\\n<li><a href=\\"\\"><code>lsmod</code></a></li>\\n<li><a href=\\"\\"><code>lsof</code></a></li>\\n<li><a href=\\"\\"><code>lspci</code></a></li>\\n<li><a href=\\"\\"><code>lsusb</code></a></li>\\n<li><a href=\\"\\"><code>ltrace</code></a></li>\\n<li><a href=\\"\\"><code>lynx</code></a></li>\\n<li><a href=\\"\\"><code>lzcat</code></a></li>\\n<li><a href=\\"\\"><code>lzma</code></a></li>\\n<li><a href=\\"\\"><code>m4</code></a></li>\\n<li><a href=\\"\\"><code>mail</code></a></li>\\n<li><a href=\\"\\"><code>mailstats</code></a></li>\\n<li><a href=\\"\\"><code>mailto</code></a></li>\\n<li><a href=\\"\\"><code>make</code></a></li>\\n<li><a href=\\"\\"><code>MAKEDEV</code></a></li>\\n<li><a href=\\"\\"><code>man</code></a></li>\\n<li><a href=\\"\\"><code>mapfile</code></a></li>\\n<li><a href=\\"\\"><code>mcookie</code></a></li>\\n<li><a href=\\"\\"><code>md5sum</code></a></li>\\n<li><a href=\\"\\"><code>merge</code></a></li>\\n<li><a href=\\"\\"><code>mesg</code></a></li>\\n<li><a href=\\"\\"><code>mimencode</code></a></li>\\n<li><a href=\\"\\"><code>mkbootdisk</code></a></li>\\n<li><a href=\\"\\"><code>mkdir</code></a></li>\\n<li><a href=\\"\\"><code>mkdosfs</code></a></li>\\n<li><a href=\\"\\"><code>mke2fs</code></a></li>\\n<li><a href=\\"\\"><code>mkfifo</code></a></li>\\n<li><a href=\\"\\"><code>mkisofs</code></a></li>\\n<li><a href=\\"\\"><code>mknod</code></a></li>\\n<li><a href=\\"\\"><code>mkswap</code></a></li>\\n<li><a href=\\"\\"><code>mktemp</code></a></li>\\n<li><a href=\\"\\"><code>mmencode</code></a></li>\\n<li><a href=\\"\\"><code>modinfo</code></a></li>\\n<li><a href=\\"\\"><code>modprobe</code></a></li>\\n<li><a href=\\"\\"><code>more</code></a></li>\\n<li><a href=\\"\\"><code>mount</code></a></li>\\n<li><a href=\\"\\"><code>msgfmt</code></a></li>\\n<li><a href=\\"\\"><code>mv</code></a></li>\\n<li><a href=\\"\\"><code>nc</code></a></li>\\n<li><a href=\\"\\"><code>netconfig</code></a></li>\\n<li><a href=\\"\\"><code>netstat</code></a></li>\\n<li><a href=\\"\\"><code>newgrp</code></a></li>\\n<li><a href=\\"\\"><code>nice</code></a></li>\\n<li><a href=\\"\\"><code>nl</code></a></li>\\n<li><a href=\\"\\"><code>nm</code></a></li>\\n<li><a href=\\"\\"><code>nmap</code></a></li>\\n<li><a href=\\"\\"><code>nohup</code></a></li>\\n<li><a href=\\"\\"><code>nslookup</code></a></li>\\n<li><a href=\\"\\"><code>objdump</code></a></li>\\n<li><a href=\\"\\"><code>od</code></a></li>\\n<li><a href=\\"\\"><code>openssl</code></a></li>\\n<li><a href=\\"\\"><code>passwd</code></a></li>\\n<li><a href=\\"\\"><code>paste</code></a></li>\\n<li><a href=\\"\\"><code>patch</code></a>（相关话题：<a href=\\"\\"><code>diff</code></a>）</li>\\n<li><a href=\\"\\"><code>pathchk</code></a></li>\\n<li><a href=\\"\\"><code>pax</code></a></li>\\n<li><a href=\\"\\"><code>pgrep</code></a></li>\\n<li><a href=\\"\\"><code>pidof</code></a></li>\\n<li><a href=\\"\\"><code>ping</code></a></li>\\n<li><a href=\\"\\"><code>pkill</code></a></li>\\n<li><a href=\\"\\"><code>popd</code></a></li>\\n<li><a href=\\"\\"><code>pr</code></a></li>\\n<li><a href=\\"\\"><code>printenv</code></a></li>\\n<li><a href=\\"\\"><code>printf</code></a></li>\\n<li><a href=\\"\\"><code>procinfo</code></a></li>\\n<li><a href=\\"\\"><code>ps</code></a></li>\\n<li><a href=\\"\\"><code>pstree</code></a></li>\\n<li><a href=\\"\\"><code>ptx</code></a></li>\\n<li><a href=\\"\\"><code>pushd</code></a></li>\\n<li><a href=\\"\\"><code>pwd</code></a>（相关话题：变量 <a href=\\"\\"><code>$PWD</code></a>）</li>\\n<li><a href=\\"\\"><code>quota</code></a></li>\\n<li><a href=\\"\\"><code>rcp</code></a></li>\\n<li><a href=\\"\\"><code>rdev</code></a></li>\\n<li><a href=\\"\\"><code>rdist</code></a></li>\\n<li><a href=\\"\\"><code>read</code></a></li>\\n<li><a href=\\"\\"><code>readelf</code></a></li>\\n<li><a href=\\"\\"><code>readlink</code></a></li>\\n<li><a href=\\"\\"><code>readonly</code></a></li>\\n<li><a href=\\"\\"><code>reboot</code></a></li>\\n<li><a href=\\"\\"><code>recode</code></a></li>\\n<li><a href=\\"\\"><code>renice</code></a></li>\\n<li><a href=\\"\\"><code>reset</code></a></li>\\n<li><a href=\\"\\"><code>resize</code></a></li>\\n<li><a href=\\"\\"><code>restore</code></a></li>\\n<li><a href=\\"\\"><code>rev</code></a></li>\\n<li><a href=\\"\\"><code>rlogin</code></a></li>\\n<li><a href=\\"\\"><code>rm</code></a></li>\\n<li><a href=\\"\\"><code>rmdir</code></a></li>\\n<li><a href=\\"\\"><code>rmmod</code></a></li>\\n<li><a href=\\"\\"><code>route</code></a></li>\\n<li><a href=\\"\\"><code>rpm</code></a></li>\\n<li><a href=\\"\\"><code>rpm2cpio</code></a></li>\\n<li><a href=\\"\\"><code>rsh</code></a></li>\\n<li><a href=\\"\\"><code>rsync</code></a></li>\\n<li><a href=\\"\\"><code>runlevel</code></a></li>\\n<li><a href=\\"\\"><code>run-parts</code></a></li>\\n<li><a href=\\"\\"><code>rx</code></a></li>\\n<li><a href=\\"\\"><code>rz</code></a></li>\\n<li><a href=\\"\\"><code>sar</code></a></li>\\n<li><a href=\\"\\"><code>scp</code></a></li>\\n<li><a href=\\"\\"><code>script</code></a></li>\\n<li><a href=\\"\\"><code>sdiff</code></a></li>\\n<li><a href=\\"\\"><code>sed</code></a></li>\\n<li><a href=\\"\\"><code>seq</code></a></li>\\n<li><a href=\\"\\"><code>service</code></a></li>\\n<li><a href=\\"\\"><code>set</code></a></li>\\n<li><a href=\\"\\"><code>setfacl</code></a></li>\\n<li><a href=\\"\\"><code>setquota</code></a></li>\\n<li><a href=\\"\\"><code>setserial</code></a></li>\\n<li><a href=\\"\\"><code>setterm</code></a></li>\\n<li><a href=\\"\\"><code>sha1sum</code></a></li>\\n<li><a href=\\"\\"><code>shar</code></a></li>\\n<li><a href=\\"\\"><code>shopt</code></a></li>\\n<li><a href=\\"\\"><code>shred</code></a></li>\\n<li><a href=\\"\\"><code>shutdown</code></a></li>\\n<li><a href=\\"\\"><code>size</code></a></li>\\n<li><a href=\\"\\"><code>skill</code></a></li>\\n<li><a href=\\"\\"><code>sleep</code></a></li>\\n<li><a href=\\"\\"><code>slocate</code></a></li>\\n<li><a href=\\"\\"><code>snice</code></a></li>\\n<li><a href=\\"\\"><code>sort</code></a></li>\\n<li><a href=\\"\\"><code>source</code></a></li>\\n<li><a href=\\"\\"><code>sox</code></a></li>\\n<li><a href=\\"\\"><code>split</code></a></li>\\n<li><a href=\\"\\"><code>sq</code></a></li>\\n<li><a href=\\"\\"><code>ssh</code></a></li>\\n<li><a href=\\"\\"><code>stat</code></a></li>\\n<li><a href=\\"\\"><code>strace</code></a></li>\\n<li><a href=\\"\\"><code>strings</code></a></li>\\n<li><a href=\\"\\"><code>strip</code></a></li>\\n<li><a href=\\"\\"><code>stty</code></a></li>\\n<li><a href=\\"\\"><code>su</code></a></li>\\n<li><a href=\\"\\"><code>sudo</code></a></li>\\n<li><a href=\\"\\"><code>sum</code></a></li>\\n<li><a href=\\"\\"><code>suspend</code></a></li>\\n<li><a href=\\"\\"><code>swapoff</code></a></li>\\n<li><a href=\\"\\"><code>swapon</code></a></li>\\n<li><a href=\\"\\"><code>sx</code></a></li>\\n<li><a href=\\"\\"><code>sync</code></a></li>\\n<li><a href=\\"\\"><code>sz</code></a></li>\\n<li><a href=\\"\\"><code>tac</code></a></li>\\n<li><a href=\\"\\"><code>tail</code></a></li>\\n<li><a href=\\"\\"><code>tar</code></a></li>\\n<li><a href=\\"\\"><code>tbl</code></a></li>\\n<li><a href=\\"\\"><code>tcpdump</code></a></li>\\n<li><a href=\\"\\"><code>tee</code></a></li>\\n<li><a href=\\"\\"><code>telinit</code></a></li>\\n<li><a href=\\"\\"><code>telnet</code></a></li>\\n<li><a href=\\"\\"><code>Tex</code></a></li>\\n<li><a href=\\"\\"><code>texexec</code></a></li>\\n<li><a href=\\"\\"><code>time</code></a></li>\\n<li><a href=\\"\\"><code>times</code></a></li>\\n<li><a href=\\"\\"><code>tmpwatch</code></a></li>\\n<li><a href=\\"\\"><code>top</code></a></li>\\n<li><a href=\\"\\"><code>touch</code></a></li>\\n<li><a href=\\"\\"><code>tput</code></a></li>\\n<li><a href=\\"\\"><code>tr</code></a></li>\\n<li><a href=\\"\\"><code>traceroute</code></a></li>\\n<li><a href=\\"\\"><code>true</code></a></li>\\n<li><a href=\\"\\"><code>tset</code></a></li>\\n<li><a href=\\"\\"><code>tsort</code></a></li>\\n<li><a href=\\"\\"><code>tty</code></a></li>\\n<li><a href=\\"\\"><code>tune2fs</code></a></li>\\n<li><a href=\\"\\"><code>type</code></a></li>\\n<li><a href=\\"\\"><code>typeset</code></a></li>\\n<li><a href=\\"\\"><code>ulimit</code></a></li>\\n<li><a href=\\"\\"><code>umask</code></a></li>\\n<li><a href=\\"\\"><code>umount</code></a></li>\\n<li><a href=\\"\\"><code>uname</code></a></li>\\n<li><a href=\\"\\"><code>unarc</code></a></li>\\n<li><a href=\\"\\"><code>unarj</code></a></li>\\n<li><a href=\\"\\"><code>uncompress</code></a></li>\\n<li><a href=\\"\\"><code>unexpand</code></a></li>\\n<li><a href=\\"\\"><code>uniq</code></a></li>\\n<li><a href=\\"\\"><code>units</code></a></li>\\n<li><a href=\\"\\"><code>unlzma</code></a></li>\\n<li><a href=\\"\\"><code>unrar</code></a></li>\\n<li><a href=\\"\\"><code>unset</code></a></li>\\n<li><a href=\\"\\"><code>unsq</code></a></li>\\n<li><a href=\\"\\"><code>unzip</code></a></li>\\n<li><a href=\\"\\"><code>uptime</code></a></li>\\n<li><a href=\\"\\"><code>usbmodules</code></a></li>\\n<li><a href=\\"\\"><code>useradd</code></a></li>\\n<li><a href=\\"\\"><code>userdel</code></a></li>\\n<li><a href=\\"\\"><code>usermod</code></a></li>\\n<li><a href=\\"\\"><code>users</code></a></li>\\n<li><a href=\\"\\"><code>usleep</code></a></li>\\n<li><a href=\\"\\"><code>uucp</code></a></li>\\n<li><a href=\\"\\"><code>uudecode</code></a></li>\\n<li><a href=\\"\\"><code>uuencode</code></a></li>\\n<li><a href=\\"\\"><code>uux</code></a></li>\\n<li><a href=\\"\\"><code>vacation</code></a></li>\\n<li><a href=\\"\\"><code>vdir</code></a></li>\\n<li><a href=\\"\\"><code>vmstat</code></a></li>\\n<li><a href=\\"\\"><code>vrfy</code></a></li>\\n<li><a href=\\"\\"><code>w</code></a></li>\\n<li><a href=\\"\\"><code>wait</code></a></li>\\n<li><a href=\\"\\"><code>wall</code></a></li>\\n<li><a href=\\"\\"><code>watch</code></a></li>\\n<li><a href=\\"\\"><code>wc</code></a></li>\\n<li><a href=\\"\\"><code>wget</code></a></li>\\n<li><a href=\\"\\"><code>whatis</code></a></li>\\n<li><a href=\\"\\"><code>whereis</code></a></li>\\n<li><a href=\\"\\"><code>which</code></a></li>\\n<li><a href=\\"\\"><code>who</code></a></li>\\n<li><a href=\\"\\"><code>whoami</code></a></li>\\n<li><a href=\\"\\"><code>whois</code></a></li>\\n<li><a href=\\"\\"><code>write</code></a></li>\\n<li><a href=\\"\\"><code>xargs</code></a></li>\\n<li><a href=\\"\\"><code>xrandr</code></a></li>\\n<li><a href=\\"\\"><code>xz</code></a></li>\\n<li><a href=\\"\\"><code>yacc</code></a></li>\\n<li><a href=\\"\\"><code>yes</code></a></li>\\n<li><a href=\\"\\"><code>zcat</code></a></li>\\n<li><a href=\\"\\"><code>zdiff</code></a></li>\\n<li><a href=\\"\\"><code>zdump</code></a></li>\\n<li><a href=\\"\\"><code>zegrep</code></a></li>\\n<li><a href=\\"\\"><code>zfgrep</code></a></li>\\n<li><a href=\\"\\"><code>zgrep</code></a></li>\\n<li><a href=\\"\\"><code>zip</code></a></li>\\n</ul>","copyright":{"author":"LinuxStory"},"autoDesc":true}');export{e as data};
