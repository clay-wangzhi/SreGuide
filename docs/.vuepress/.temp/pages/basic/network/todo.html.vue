<template><h2 id="传输层" tabindex="-1"><a class="header-anchor" href="#传输层" aria-hidden="true">#</a> 传输层</h2>
<p><strong>TCP 路径可达性测试</strong></p>
<ul>
<li>
<p><code>telnet</code>、<code>nc</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>telnet www.baidu.com <span class="token number">443</span>
<span class="token function">nc</span> -w <span class="token number">2</span> -zv www.baidu.com <span class="token number">443</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
<p><strong>查看当前连接的传输速率</strong></p>
<ul>
<li><code>iftop</code></li>
</ul>
<p><strong>查看丢包和乱序等的统计</strong></p>
<ul>
<li>
<p><code>netstat -s</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">watch</span> --diff <span class="token function">netstat</span> -s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p><code>ss -s</code></p>
</li>
</ul>
<h2 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h2>
<p><strong>查看网络路径状况</strong></p>
<ul>
<li>
<p><code>traceroute</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">traceroute</span> -I www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ul>
<p>traceroute 也有一个明显的不足：它不能对这个路径做连续多次的探测</p>
<ul>
<li>
<p><code>mtr</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mtr</span> www.baidu.com -r -c <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ul>
<p><strong>查看路由表</strong></p>
<ul>
<li>
<p><code>route -n</code></p>
</li>
<li>
<p><code>netstat -r</code></p>
</li>
<li>
<p><code>ip route</code></p>
</li>
</ul>
<h2 id="数据链路层和物理层" tabindex="-1"><a class="header-anchor" href="#数据链路层和物理层" aria-hidden="true">#</a> 数据链路层和物理层</h2>
<p>一个稳定的数据链路层乃至物理层，是网络可靠性的基石</p>
<ul>
<li><code>ethtool -S eth0</code></li>
</ul>
</template>
