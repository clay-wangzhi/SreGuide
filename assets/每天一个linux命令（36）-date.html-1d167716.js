import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as n,f as i,b as a,a as s}from"./app-52a338cc.js";const l={},t=a("p",null,"在linux环境中，不管是编程还是其他维护，时间是必不可少的，也经常会用到时间的运算，熟练运用date命令来表示自己想要表示的时间，肯定可以给自己的工作带来诸多方便。",-1),r=s(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p><code>date(选项)(参数)</code></p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-d&lt;字符串&gt;：显示字符串所指的日期与时间。字符串前后必须加上双引号；
-s&lt;字符串&gt;：根据字符串来设置日期与时间。字符串前后必须加上双引号；
-u：显示GMT；
--help：在线帮助；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>&lt;+时间日期格式&gt;：指定显示时使用的日期时间格式。</p><h2 id="日期格式字符串列表" tabindex="-1"><a class="header-anchor" href="#日期格式字符串列表" aria-hidden="true">#</a> 日期格式字符串列表</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%H 小时，24小时制（00~23）
%I 小时，12小时制（01~12）
%k 小时，24小时制（0~23）
%l 小时，12小时制（1~12）
%M 分钟（00~59）
%p 显示出AM或PM
%r 显示时间，12小时制（hh:mm:ss %p）
%s 从1970年1月1日00:00:00到目前经历的秒数
%S 显示秒（00~59）
%T 显示时间，24小时制（hh:mm:ss）
%X 显示时间的格式（%H:%M:%S）
%Z 显示时区，日期域（CST）
%a 星期的简称（Sun~Sat）
%A 星期的全称（Sunday~Saturday）
%h,%b 月的简称（Jan~Dec）
%B 月的全称（January~December）
%c 日期和时间（Tue Nov 20 14:12:58 2012）
%d 一个月的第几天（01~31）
%x,%D 日期（mm/dd/yy）
%j 一年的第几天（001~366）
%m 月份（01~12）
%w 一个星期的第几天（0代表星期天）
%W 一年的第几个星期（00~53，星期一为第一天）
%y 年的最后两个数字（1999则是99）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用实例" tabindex="-1"><a class="header-anchor" href="#常用实例" aria-hidden="true">#</a> 常用实例</h2><p>1）格式化输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#date +&quot;%Y-%m-%d&quot;
2018-03-29
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2）输出昨天日期：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#date -d &quot;1 day ago&quot; +&quot;%Y-%m-%d&quot;
2018-03-28
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3）2秒后输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#date -d &quot;2 second&quot; +&quot;%Y-%m-%d %H:%M:%S&quot; 
2018-03-29 10:08:37
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4）apache格式转换：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date -d &quot;Dec 5, 2009 12:00:37 AM&quot; +&quot;%Y-%m-%d %H:%M.%S&quot;
2009-12-05 00:00.37
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5）格式转换后时间游走：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date -d &quot;Dec 5, 2009 12:00:37 AM 2 year ago&quot; +&quot;%Y-%m-%d %H:%M.%S&quot;
2007-12-05 00:00.37
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6）加减操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date +%Y%m%d                   //显示前天年月日
date -d &quot;+1 day&quot; +%Y%m%d       //显示前一天的日期
date -d &quot;-1 day&quot; +%Y%m%d       //显示后一天的日期
date -d &quot;-1 month&quot; +%Y%m%d     //显示上一月的日期
date -d &quot;+1 month&quot; +%Y%m%d     //显示下一月的日期
date -d &quot;-1 year&quot; +%Y%m%d      //显示前一年的日期
date -d &quot;+1 year&quot; +%Y%m%d      //显示下一年的日期
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7）设定时间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date -s                        //设置当前时间，只有root权限才能设置，其他只能查看
date -s 20120523               //设置成20120523，这样会把具体时间设置成空00:00:00
date -s 01:01:01               //设置具体时间，不会对日期做更改
date -s &quot;01:01:01 2012-05-23&quot;  //这样可以设置全部时间
date -s &quot;01:01:01 20120523&quot;    //这样可以设置全部时间
date -s &quot;2012-05-23 01:01:01&quot;  //这样可以设置全部时间
date -s &quot;20120523 01:01:01&quot;    //这样可以设置全部时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8）有时需要检查一组命令花费的时间，举例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

start=$(date +%s)
nmap man.linuxde.net &amp;&gt; /dev/null

end=$(date +%s)
difference=$(( end - start ))
echo $difference seconds.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p><p>http://man.linuxde.net/date</p><p>http://www.cnblogs.com/peida/archive/2012/12/13/2815687.html</p>`,28);function u(v,c){return d(),n("div",null,[t,i("more"),r])}const b=e(l,[["render",u],["__file","每天一个linux命令（36）-date.html.vue"]]);export{b as default};
