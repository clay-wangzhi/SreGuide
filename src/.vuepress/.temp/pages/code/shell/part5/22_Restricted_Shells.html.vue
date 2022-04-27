<template><h1 id="第二十二章-限制模式的shell" tabindex="-1"><a class="header-anchor" href="#第二十二章-限制模式的shell" aria-hidden="true">#</a> 第二十二章. 限制模式的Shell</h1>
<h4 id="限制模式下被禁用的命令" tabindex="-1"><a class="header-anchor" href="#限制模式下被禁用的命令" aria-hidden="true">#</a> 限制模式下被禁用的命令</h4>
<ul>
<li>在限制模式下运行一个脚本或部分脚本将禁用一些命令，尽管这些命令在正常模式下是可用的。这是个安全措施，可以限制脚本用户的权限，减少运行脚本可能带来的损害。</li>
</ul>
<p>被禁用的命令和功能：</p>
<ul>
<li>使用 cd 来改变工作目录。</li>
<li>修改 $PATH, $SHELL, $BASH_ENV 或 $ENV 等<a href="http://tldp.org/LDP/abs/html/othertypesv.html#ENVREF" target="_blank" rel="noopener noreferrer">环境变量<ExternalLinkIcon/></a></li>
<li>读取或修改 $SHELLOPTS，shell环境选项。</li>
<li>输出重定向。</li>
<li>调用包含 / 的命令。</li>
<li>调用 <a href="http://tldp.org/LDP/abs/html/internal.html#EXECREF" target="_blank" rel="noopener noreferrer">exec<ExternalLinkIcon/></a> 来替代shell进程。</li>
<li>其他各种会造成混乱或颠覆脚本用途的命令。</li>
<li>在脚本中跳出限制模式。</li>
</ul>
<h4 id="例-22-1-在限制模式运行脚本" tabindex="-1"><a class="header-anchor" href="#例-22-1-在限制模式运行脚本" aria-hidden="true">#</a> 例 22-1. 在限制模式运行脚本</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#!/bin/bash

#  在脚本开头用"#!/bin/bash -r"
#+ 可以让整个脚本在限制模式运行。

echo

echo "改变目录。"
cd /usr/local
echo "现在是在 `pwd`"
echo "回到家目录。"
cd
echo "现在是在 `pwd`"
echo

# 到此为止一切都是正常的，非限制模式。

set -r
# set --restricted 效果相同。
echo "==> 现在是限制模式 &lt;=="

echo
echo

echo "在限制模式试图改变目录。"
cd ..
echo "依旧在 `pwd`"

echo
echo

echo "\$SHELL = $SHELL"
echo "试图在限制模式改变Shell 。"
SHELL="/bin/ash"
echo
echo "\$SHELL= $SHELL"

echo
echo

echo "试图在限制模式重定向输出内容。"
ls -l /usr/bin > bin.files
ls -l bin.files    # 尝试列出试图创建的文件。

echo

exit 0

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div></template>
