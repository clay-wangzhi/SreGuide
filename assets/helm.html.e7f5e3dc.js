import{_ as n,e as s}from"./app.bb7a353b.js";const a={},e=s(`<h1 id="helm-\u5B89\u88C5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#helm-\u5B89\u88C5\u914D\u7F6E" aria-hidden="true">#</a> Helm \u5B89\u88C5\u914D\u7F6E</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">helmversion</span><span class="token operator">=</span><span class="token number">3.7</span>.2
<span class="token function">wget</span> https://get.helm.sh/helm-v<span class="token variable">\${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">tar</span> -xvf helm-v<span class="token variable">\${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">mv</span> linux-amd64/helm /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8BBE\u7F6E\u8865\u5168\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>helm completion <span class="token function">bash</span>
<span class="token comment"># \u5C06\u8F93\u51FA\u7684\u6587\u4EF6\u62F7\u8D1D\u5230 \`\`/etc/bash_completion.d/helm.sh\`\` \u6587\u4EF6\u4E2D</span>
<span class="token builtin class-name">source</span> /etc/bash_completion.d/helm.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06 helm charts \u8F6C\u6362\u4E3A yaml \u6587\u4EF6 apply</span>
helm xxx xxx  --dry-run  <span class="token operator">|</span> kubectl apply -f -
helm template xxx xxx --output-dir <span class="token builtin class-name">.</span>
<span class="token comment"># helm \u5B89\u88C5 charts \u5305\u65F6\u6307\u5B9A\u7248\u672C</span>
helm <span class="token function">install</span> xxx --version<span class="token operator">=</span>xxx
<span class="token comment"># \u5B89\u88C5</span>
helm <span class="token function">install</span> xxx ./ -n xxx
<span class="token comment"># \u5347\u7EA7</span>
helm upgrade xxx ./ -n xxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,8);function l(r,p){return e}var i=n(a,[["render",l],["__file","helm.html.vue"]]);export{i as default};
