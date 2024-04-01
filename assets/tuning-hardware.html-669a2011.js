import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e}from"./app-bdb4dd27.js";const c={},i=e(`<h1 id="硬件调优" tabindex="-1"><a class="header-anchor" href="#硬件调优" aria-hidden="true">#</a> 硬件调优</h1><h2 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu" aria-hidden="true">#</a> CPU</h2><p><strong>CPU-动态节能技术</strong></p><p>cpufreq 是一个动态调整 CPU 频率的模块，可支持五种模式。为保证服务性能应选用 performance 模式，将 CPU 频率固定工作在其支持的最高运行频率上，从而获取最佳的性能，一般都是默认 powersave，可以通过 cpupower frequency-set 修改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前 CPU 性能模式</span>
<span class="token function">cat</span> /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
<span class="token comment"># 查看当前 CPU 使用频率</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;cpu mhz&quot;</span>
<span class="token comment"># 综合查看方式</span>
cpupower frequency-info
<span class="token comment"># 设置为 performance 模式</span>
cpupower frequency-set <span class="token parameter variable">-g</span> performance
<span class="token comment"># 注意：如果使用 cpupower frequency-set 设置后，重启物理机后，配置失败，可能是 tuned-adm 的原因</span>
<span class="token comment"># 所以建议使用 tuned-adm 设置 CPU 性能模式</span>
tuned-adm profile latency-performance
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="raid-卡" tabindex="-1"><a class="header-anchor" href="#raid-卡" aria-hidden="true">#</a> RAID 卡</h2><p>写入策略对顺序写入性能影响比较大</p><ul><li><code>Write Policy</code>（写入策略）： <ul><li><code>Write Through</code>（透写）：并不利用 Raid 卡的 Cache，直接与磁盘进行交互。</li><li><code>Write Back</code>（回写）：是先写 Raid 卡缓存，再传入磁盘。因为写入缓存，操作系统就认为成功了，所以测试会发现写入性能非常快。 推荐</li></ul></li><li><code>Read Policy</code> （读取策略）: <ul><li><code>Read-ahead</code> （预读，适合顺序读）</li><li><code>No-Read-Ahead</code>（Normal非预读，一般在 Windows 服务器下推荐）</li></ul></li></ul><p>开启预读对顺序读影响很大测试会差20%-40%性能。</p><blockquote><p><strong>Tips</strong> 在《MySQL 技术内幕-InnoDB存储引擎》 第二版第9章，性能调优部分。有关于 <code>Write Policy</code> 的介绍，根据作者实测 MySQL，<code>Write Back</code> 比 <code>Write Through</code> 快将近 40 倍差距。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 RAID 卡当前读写策略，去带外管理台看会方便一些</span>
<span class="token comment"># 去官网 Broadcom 下载 rpm 包，到服务器上去安装</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> storcli-007.2508.0000.0000-1.noarch.rpm
<span class="token comment"># 写入策略改为 WB</span>
<span class="token comment">## 浪潮机器</span>
<span class="token builtin class-name">cd</span> /opt/MegaRAID/storcli/ <span class="token operator">&amp;&amp;</span>  ./storcli64 /c0 /v0 <span class="token builtin class-name">set</span> <span class="token assign-left variable">wrcache</span><span class="token operator">=</span>WB
<span class="token comment">## H3C 机器</span>
<span class="token builtin class-name">cd</span> /opt/MegaRAID/storcli/ <span class="token operator">&amp;&amp;</span>  ./storcli64 /c0 /v239 <span class="token builtin class-name">set</span> <span class="token assign-left variable">wrcache</span><span class="token operator">=</span>WB
<span class="token comment"># 读取策略改为 RA</span>
<span class="token comment">## 浪潮机器</span>
<span class="token builtin class-name">cd</span> /opt/MegaRAID/storcli/ <span class="token operator">&amp;&amp;</span>  ./storcli64 /c0 /v0 <span class="token builtin class-name">set</span> <span class="token assign-left variable">rdcache</span><span class="token operator">=</span>ra
<span class="token comment">## H3C 机器</span>
<span class="token builtin class-name">cd</span> /opt/MegaRAID/storcli/ <span class="token operator">&amp;&amp;</span>  ./storcli64 /c0 /v239 <span class="token builtin class-name">set</span> <span class="token assign-left variable">rdcache</span><span class="token operator">=</span>ra
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[i];function o(t,r){return a(),n("div",null,l)}const m=s(c,[["render",o],["__file","tuning-hardware.html.vue"]]);export{m as default};
