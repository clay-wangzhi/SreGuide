import{_ as n,e as s}from"./app.bb7a353b.js";const a={},e=s(`<h1 id="k8s-\u9002\u914D-gpu" tabindex="-1"><a class="header-anchor" href="#k8s-\u9002\u914D-gpu" aria-hidden="true">#</a> k8s \u9002\u914D GPU</h1><h2 id="gpu-\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#gpu-\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> GPU \u5B89\u88C5\u6B65\u9AA4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># centos7 \u5185\u6838\u5347\u7EA7\u540E   GPU \u5B89\u88C5\u6B65\u9AA4</span>

<span class="token comment"># 1.  \u52A0\u8F7D \u65B0 \u5185\u6838</span>
<span class="token comment"># \u67E5\u770B\u5185\u6838\u5217\u8868</span>
<span class="token function">awk</span> -F<span class="token punctuation">\\</span>&#39; <span class="token string">&#39;$1==&quot;menuentry &quot; {print $2}&#39;</span> /etc/grub2.cfg
<span class="token comment"># \u6307\u5B9A\u65B0\u5185\u6838\u542F\u52A8</span>
grub2-set-default <span class="token string">&#39;CentOS Linux (5.4.186-1.el7.elrepo.x86_64) 7 (Core)&#39;</span>
<span class="token function">reboot</span>

<span class="token comment"># 2. \u51C6\u5907GPU\u9A71\u52A8\u5B89\u88C5\u73AF\u5883</span>
<span class="token comment"># \u5378\u8F7D\u539F\u6709\u5185\u6838\u7684header\u4E0Edevel\u6A21\u5757</span>
yum -y remove kernel-headers kernel-devel
<span class="token comment"># \u5B89\u88C5\u73B0\u6709\u5185\u6838headers\u548Cdevel\u6A21\u5757\uFF08\u5FC5\u987B\uFF0C\u663E\u5361\u7F16\u8BD1\u9700\u8981\uFF09</span>
yum --enablerepo<span class="token operator">=</span>elrepo-kernel <span class="token function">install</span> -y kernel-lt-devel-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -r<span class="token variable">)</span></span> kernel-lt-headers-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -r<span class="token variable">)</span></span>
<span class="token comment"># \u5378\u8F7D\u65E7\u7684\u5B89\u88C5\u5305 cd \u76EE\u5F55\u9632\u6B62 \u5F53\u524D\u76EE\u5F55\u6709\u76F8\u5173\u5B89\u88C5\u5305\uFF0C\u5378\u8F7D\u4E0D\u5E72\u51C0</span>
<span class="token builtin class-name">cd</span> /opt
yum -y remove nvidia*
<span class="token comment"># \u5B89\u88C5\u65B0\u7248\u672C gcc \uFF0C\u5E76\u4F7F\u7528\u65B0\u7248\u672Cgcc\uFF0C\u6CE8\u610F\u9700\u8981\u5F53\u524D\u4F1A\u8BDD\u64CD\u4F5C\uFF0C\u4E34\u65F6\u751F\u6548</span>
yum <span class="token function">install</span> centos-release-scl -y
yum <span class="token function">install</span> devtoolset-8-gcc* -y
scl <span class="token builtin class-name">enable</span> devtoolset-8 <span class="token function">bash</span>
<span class="token comment"># \u5B89\u88C5\u76F8\u5173\u4F9D\u8D56</span>
yum -y <span class="token function">install</span> libglvnd*

<span class="token comment"># 3. \u7F16\u8BD1\u5B89\u88C5GPU\u9A71\u52A8</span>
<span class="token comment"># \u4ECE\u5B98\u7F51\u4E0B\u8F7D .run \u6587\u4EF6\uFF0C\u6211\u653E\u5728\u4E86xxx /home/clay/NVIDIA-Linux-x86_64-510.54.run , \u53EF\u4EE5\u76F4\u63A5\u53BB\u670D\u52A1\u5668\u62FF</span>
<span class="token comment"># \u6267\u884C\u5B89\u88C5\u547D\u4EE4\uFF08/usr/src/kernels\u76EE\u5F55\u4E0B\u6587\u4EF6\u9700\u8981\u5B89\u88C5kernel-devel\u5305\u540E\u624D\u4F1A\u51FA\u73B0\uFF09\uFF0C\u5177\u4F53\u7684\u5B89\u88C5\u5305\u4E0E\u5185\u6838\u8DEF\u5F84\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u586B\u5199</span>
./NVIDIA-Linux-x86_64-510.54.run --kernel-source-path<span class="token operator">=</span>/usr/src/kernels/5.4.186-1.el7.elrepo.x86_64 -k <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -r<span class="token variable">)</span></span> -s
<span class="token comment"># \u67E5\u770B\u663E\u5361\u9A71\u52A8\u662F\u5426\u5B89\u88C5\u6210\u529F</span>
nvidia-smi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="nvidia-docker-2-0-\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#nvidia-docker-2-0-\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> nvidia-docker 2.0 \u5B89\u88C5\u6B65\u9AA4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># nvidia-docker 2.0 \u5B89\u88C5\u6B65\u9AA4</span>
<span class="token assign-left variable">distribution</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> $ID$VERSION_ID<span class="token variable">)</span></span>    <span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> -s -L https://nvidia.github.io/libnvidia-container/<span class="token variable">$distribution</span>/libnvidia-container.repo <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/nvidia-container-toolkit.repo
yum-config-manager --enable libnvidia-container-experimental
<span class="token function">sudo</span> yum clean expire-cache
<span class="token function">sudo</span> yum <span class="token function">install</span> -y nvidia-docker2
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5);function l(p,c){return e}var t=n(a,[["render",l],["__file","k8s-gpu.html.vue"]]);export{t as default};
