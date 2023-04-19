<template><h1 id="日志logrotate" tabindex="-1"><a class="header-anchor" href="#日志logrotate" aria-hidden="true">#</a> 日志logrotate</h1>
<h2 id="logrotate简介" tabindex="-1"><a class="header-anchor" href="#logrotate简介" aria-hidden="true">#</a> logrotate简介</h2>
<p>日志是Linux系统中最重要的部分之一，通过日志可以知道系统中正在发生什么或者发生过什么，极大的方便了系统管理，常见的linux发行版中都自带了logrotate程序来管理系统日志，当然logrotate也可以用来管理软件日志。使用logrotate有以下几点好处：</p>
<p>1.大多数系统自带，不用安装
2.配置简单，功能很强大
3.可靠性高</p>
<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2>
<p>默认的配置文件为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/etc/logrotate.conf
/etc/logratate.d/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>logrotate.conf</code>：为主配置文件</p>
<p><code>logrotate.d</code>：为配置相关子系统，用于隔离每个应用配置（Nginx、PHP、Tomcat...）</p>
<p>Logrotate是基于CRON来运行的，其脚本是/etc/cron.daily/logrotate，日志轮转是系统自动完成的。
实际运行时，Logrotate会调用配置文件/etc/logrotate.conf。</p>
<p>Logrotate可以由自动或者手动触发日志轮转：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>logrotate -f /etc/logrotate.d/nginx
logrotate -f /etc/logrotate.d/php
不过正式执行前最好通过Debug选项来验证一下（-d参数）
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>查看各log文件的具体执行情况</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat /var/lib/logrotate/logrotate.status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>具体logrotate命令格式如下：</p>
<blockquote>
<p>logrotate [OPTION...] <configfile>
-d, --debug ：debug模式，测试配置文件是否有错误。
-f, --force ：强制转储文件。
-m, --mail=command ：压缩日志后，发送日志到指定邮箱。
-s, --state=statefile ：使用指定的状态文件。
-v, --verbose ：显示转储过程。</p>
</blockquote>
<h2 id="切割介绍" tabindex="-1"><a class="header-anchor" href="#切割介绍" aria-hidden="true">#</a> 切割介绍</h2>
<p>比如以系统日志/var/log/message做切割来简单说明下：
第一次执行完rotate(轮转)之后，原本的messages会变成messages.1，而且会制造一个空的messages给系统来储存日志；
第二次执行之后，messages.1会变成messages.2，而messages会变成messages.1，又造成一个空的messages来储存日志！
如果仅设定保留三个日志（即轮转3次）的话，那么执行第三次时，则 messages.3这个档案就会被删除，并由后面的较新的保存日志所取代！也就是会保存最新的几个日志。
日志究竟轮换几次，这个是根据配置文件中的rotate参数来判定的。</p>
<p>看下logrotate.conf配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># cat /etc/logrotate.conf
# 底下的设定是 "logrotate 的默认值" ，如果別的文件设定了其他的值，
# 就会以其它文件的设定为主
weekly          //默认每一周执行一次rotate轮转工作
rotate 4       //保留多少个日志文件(轮转几次).默认保留四个.就是指定日志文件删除之前轮转的次数，0 指没有备份
create         //自动创建新的日志文件，新的日志文件具有和原来的文件相同的权限；因为日志被改名,因此要创建一个新的来继续存储之前的日志
dateext       //这个参数很重要！就是切割后的日志文件以当前日期为格式结尾，如xxx.log-20131216这样,如果注释掉,切割出来是按数字递增,即前面说的 xxx.log-1这种格式
compress      //是否通过gzip压缩转储以后的日志文件，如xxx.log-20131216.gz ；如果不需要压缩，注释掉就行

include /etc/logrotate.d
# 将 /etc/logrotate.d/ 目录中的所有文件都加载进来

/var/log/wtmp {                 //仅针对 /var/log/wtmp 所设定的参数
monthly                    //每月一次切割,取代默认的一周
minsize 1M              //文件大小超过 1M 后才会切割
create 0664 root utmp            //指定新建的日志文件权限以及所属用户和组
rotate 1                    //只保留一个日志.
}
# 这个 wtmp 可记录用户登录系统及系统重启的时间
# 因为有 minsize 的参数，因此不见得每个月一定会执行一次喔.要看文件大小。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="其他重要参数说明" tabindex="-1"><a class="header-anchor" href="#其他重要参数说明" aria-hidden="true">#</a> 其他重要参数说明</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>compress                                   通过gzip 压缩转储以后的日志
nocompress                                不做gzip压缩处理
copytruncate                              用于还在打开中的日志文件，把当前日志备份并截断；是先拷贝再清空的方式，拷贝和清空之间有一个时间差，可能会丢失部分日志数据。
nocopytruncate                           备份日志文件不过不截断
create mode owner group             轮转时指定创建新文件的属性，如create 0777 nobody nobody
nocreate                                    不建立新的日志文件
delaycompress                           和compress 一起使用时，转储的日志文件到下一次转储时才压缩
nodelaycompress                        覆盖 delaycompress 选项，转储同时压缩。
missingok                                 如果日志丢失，不报错继续滚动下一个日志
errors address                           专储时的错误信息发送到指定的Email 地址
ifempty                                    即使日志文件为空文件也做轮转，这个是logrotate的缺省选项。
notifempty                               当日志文件为空时，不进行轮转
mail address                             把转储的日志文件发送到指定的E-mail 地址
nomail                                     转储时不发送日志文件
olddir directory                         转储后的日志文件放入指定的目录，必须和当前日志文件在同一个文件系统
noolddir                                   转储后的日志文件和当前日志文件放在同一个目录下
sharedscripts                           运行postrotate脚本，作用是在所有日志都轮转后统一执行一次脚本。如果没有配置这个，那么每个日志轮转后都会执行一次脚本
prerotate                                 在logrotate转储之前需要执行的指令，例如修改文件的属性等动作；必须独立成行
postrotate                               在logrotate转储之后需要执行的指令，例如重新启动 (kill -HUP) 某个服务！必须独立成行
daily                                       指定转储周期为每天
weekly                                    指定转储周期为每周
monthly                                  指定转储周期为每月
rotate count                            指定日志文件删除之前转储的次数，0 指没有备份，5 指保留5 个备份
dateext                                  使用当期日期作为命名格式
dateformat .%s                       配合dateext使用，紧跟在下一行出现，定义文件切割后的文件名，必须配合dateext使用，只支持 %Y %m %d %s 这四个参数
size(或minsize) log-size            当日志文件到达指定的大小时才转储，log-size能指定bytes(缺省)及KB (sizek)或MB(sizem).
当日志文件 >= log-size 的时候就转储。 以下为合法格式：（其他格式的单位大小写没有试过）
size = 5 或 size 5 （>= 5 个字节就转储）
size = 100k 或 size 100k
size = 100M 或 size 100M
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="logrotate日志切割轮询" tabindex="-1"><a class="header-anchor" href="#logrotate日志切割轮询" aria-hidden="true">#</a> logrotate日志切割轮询</h2>
<p>由于Logrotate是基于CRON运行的，所以这个日志轮转的时间是由CRON控制的，具体可以查询CRON的配置文件/etc/anacrontab，过往的老版本的文件为（/etc/crontab）</p>
<p>查看轮转文件：<code>/etc/anacrontab</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># egrep -v "^$|^#" /etc/anacrontab
SHELL=/bin/sh
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root
RANDOM_DELAY=45
START_HOURS_RANGE=3-22
1	5	cron.daily		nice run-parts /etc/cron.daily
7	25	cron.weekly		nice run-parts /etc/cron.weekly
@monthly 45	cron.monthly		nice run-parts /etc/cron.monthly
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>使用anacrontab轮转的配置文件，日志切割的生效时间是在凌晨3点到22点之间，而且随机延迟时间是45分钟，但是这样配置无法满足我们在现实中的应用</p>
<p>现在的需求是将切割时间调整到每天的晚上12点，即每天切割的日志是前一天的0-24点之间的内容，操作如下：</p>
<p>取消日志自动轮转的设置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mv /etc/anacrontab /etc/anacrontab.bak 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用crontab来作为日志轮转的触发容器来修改Logrotate默认执行时间</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> egrep -v "^$|^#" /etc/crontab 
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root
# run-parts
01 * * * * root run-parts /etc/cron.hourly
59 23 * * * root run-parts /etc/cron.daily
22 4 * * 0 root run-parts /etc/cron.weekly
42 4 1 * * root run-parts /etc/cron.monthly
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="nginx日志配置" tabindex="-1"><a class="header-anchor" href="#nginx日志配置" aria-hidden="true">#</a> nginx日志配置</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># vim /etc/logrotate.d/nginx</span>
/var/log/nginx/*.log <span class="token punctuation">{</span>
		daily
		missingok
		rotate <span class="token number">90</span>
		compress
		delaycompress
		notifempty
		create <span class="token number">640</span> nginx adm
		dateext
		sharedscripts
		postrotate
              <span class="token punctuation">[</span> <span class="token operator">!</span> -f /var/run/nginx.pid <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token function">kill</span> -USR1 <span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> /var/run/nginx.pid<span class="token variable">`</span></span>
         endscript
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="tomcat日志配置" tabindex="-1"><a class="header-anchor" href="#tomcat日志配置" aria-hidden="true">#</a> tomcat日志配置</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/home/tomcat/tomcat/logs/catalina.out {
	su tomcat tomcat
        daily
        rotate 90
        missingok
        notifempty
        dateext
        compress
        delaycompress
        sharedscripts
	copytruncate
        create 644 tomcat tomcat
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="解决logrotate无法自动轮询日志的办法" tabindex="-1"><a class="header-anchor" href="#解决logrotate无法自动轮询日志的办法" aria-hidden="true">#</a> 解决logrotate无法自动轮询日志的办法</h2>
<p>现象说明：
使用logrotate轮询nginx日志，配置好之后，发现nginx日志连续两天没被切割，检查后确定配置文件一切正常，这是为什么呢？？</p>
<p>强行启动记录文件维护操作，纵使logrotate指令认为没有需要，应该有可能是logroate认为nginx日志太小，不进行轮询。
故需要强制轮询，即在/etc/cron.daily/logrotate脚本中将 -t 参数替换成 -f 参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># vim /etc/cron.daily/logrotate 
#!/bin/sh
/usr/sbin/logrotate /etc/logrotate.conf
EXITVALUE=$?
if [ $EXITVALUE != 0 ]; then
    /usr/bin/logger -f logrotate "ALERT exited abnormally with [$EXITVALUE]"
fi
exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>最后最后重启下cron服务：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/etc/init.d/crond restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
