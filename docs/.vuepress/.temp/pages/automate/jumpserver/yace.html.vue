<template><h2 id="控制资产登录时间" tabindex="-1"><a class="header-anchor" href="#控制资产登录时间" aria-hidden="true">#</a> 控制资产登录时间</h2>
<p>创建 修改 登录时间的脚步 <code>jump.sh</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#pro-jumpserver</span>
<span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">"root"</span>
<span class="token assign-left variable">passwd</span><span class="token operator">=</span><span class="token string">"xxx"</span>
<span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">"localhost"</span>
<span class="token assign-left variable">dbname</span><span class="token operator">=</span><span class="token string">"jumpserver"</span>

<span class="token assign-left variable">date1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">`</span></span>
<span class="token assign-left variable">date2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">date</span> +%Y-%m-%d --date<span class="token operator">=</span><span class="token string">"+1 day"</span><span class="token variable">`</span></span>
<span class="token assign-left variable">date_start</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$date1</span> 12:00:00"</span>
<span class="token assign-left variable">date_expired</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$date2</span> 00:00:00"</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">"xx-xx;xx-xx"</span>

<span class="token assign-left variable">OLDIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$';'</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">name</span> <span class="token keyword">in</span> <span class="token variable">$NAME</span>
<span class="token keyword">do</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -i jms_mysql mysql -u<span class="token variable">$username</span> -h<span class="token variable">$host</span> -p<span class="token variable">$passwd</span> <span class="token variable">$dbname</span> -e <span class="token string">"update perms_assetpermission set date_start=STR_TO_DATE('<span class="token variable">$date_start</span>','%Y-%m-%d %H:%i:%s') where name='<span class="token variable">$name</span>';"</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -i jms_mysql mysql -u<span class="token variable">$username</span> -h<span class="token variable">$host</span> -p<span class="token variable">$passwd</span> <span class="token variable">$dbname</span> -e <span class="token string">"update perms_assetpermission set date_expired=STR_TO_DATE('<span class="token variable">$date_expired</span>','%Y-%m-%d %H:%i:%s') where name='<span class="token variable">$name</span>';"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote>
<p>Tips: 通过计划任务执行脚本 使用 docker exec -i ，不要分配 tty, -it</p>
<p>思考：直接修改数据库 合适，还是调用 api 修改 合适</p>
</blockquote>
</template>
