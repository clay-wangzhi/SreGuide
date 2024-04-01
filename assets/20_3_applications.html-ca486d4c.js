import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as v,a as e,b as n,d as a,e as r}from"./app-bdb4dd27.js";const c={},t=e("h1",{id:"_20-3-应用程序",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_20-3-应用程序","aria-hidden":"true"},"#"),n(" 20.3 应用程序")],-1),u={href:"http://tldp.org/LDP/abs/html/internal.html#READREDIR",target:"_blank",rel:"noopener noreferrer"},m=r(`<p>样例 20-12. 日志记录事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# logevents.sh
# 作者: Stephane Chazelas.
# 用于 ABS 许可指南.

# 事件记录到文件.
# 必须 root 身份执行 (可以写入 /var/log).

ROOT_UID=0     # 只有 $UID 为 0 的用户具有 root 权限.
E_NOTROOT=67   # 非 root 会报错.


if [ &quot;$UID&quot; -ne &quot;$ROOT_UID&quot; ]
then
  echo &quot;Must be root to run this script.&quot;
  exit $E_NOTROOT
fi  


FD_DEBUG1=3
FD_DEBUG2=4
FD_DEBUG3=5

# === 取消下面两行注释来激活脚本. ===
# LOG_EVENTS=1
# LOG_VARS=1


log()  # 时间和日期写入日志文件.
{
echo &quot;$(date)  $*&quot; &gt;&amp;7     # *追加* 日期到文件.
#     ^^^^^^^  命令替换
                           # 见下文.
}



case $LOG_LEVEL in
 1) exec 3&gt;&amp;2         4&gt; /dev/null 5&gt; /dev/null;;
 2) exec 3&gt;&amp;2         4&gt;&amp;2         5&gt; /dev/null;;
 3) exec 3&gt;&amp;2         4&gt;&amp;2         5&gt;&amp;2;;
 *) exec 3&gt; /dev/null 4&gt; /dev/null 5&gt; /dev/null;;
esac

FD_LOGVARS=6
if [[ $LOG_VARS ]]
then exec 6&gt;&gt; /var/log/vars.log
else exec 6&gt; /dev/null                     # 清空输出.
fi

FD_LOGEVENTS=7
if [[ $LOG_EVENTS ]]
then
  # exec 7 &gt;(exec gawk &#39;{print strftime(), $0}&#39; &gt;&gt; /var/log/event.log)
  # 上述行在最近高于 bash 2.04 版本会失败，为什么?
  exec 7&gt;&gt; /var/log/event.log              # 追加到 &quot;event.log&quot;.
  log                                      # 写入时间和日期.
else exec 7&gt; /dev/null                     # 清空输出.
fi

echo &quot;DEBUG3: beginning&quot; &gt;&amp;\${FD_DEBUG3}

ls -l &gt;&amp;5 2&gt;&amp;4                             # 命令1 &gt;&amp;5 2&gt;&amp;4

echo &quot;Done&quot;                                # 命令2 

echo &quot;sending mail&quot; &gt;&amp;\${FD_LOGEVENTS}
# 输出信息 &quot;sending mail&quot; 到文件描述符 #7.


exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function o(b,g){const i=s("ExternalLinkIcon");return d(),v("div",null,[t,e("p",null,[n("使用 I/O 重定向可以同时解析和固定命令输出的片段(see "),e("a",u,[n("样例 15-7"),a(i)]),n("). 这也使得可以生成报告和日志文件.")]),m])}const h=l(c,[["render",o],["__file","20_3_applications.html.vue"]]);export{h as default};
