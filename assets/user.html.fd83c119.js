import{_ as e,e as a}from"./app.ac0f71d5.js";const s={},n=a(`<h1 id="\u7528\u6237\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u7BA1\u7406" aria-hidden="true">#</a> \u7528\u6237\u7BA1\u7406</h1><p>\u67E5\u770B\u5F53\u524D\u767B\u5F55\u7684\u7528\u6237\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>id
uid=0(root) gid=0(root) groups=0(root)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7CFB\u7EDF\u7EA6\u5B9A\uFF1A RHEL6 uid: 0 \u7279\u6743\u7528\u6237 uid: 1~499 \u7CFB\u7EDF\u7528\u6237 uid: 500+ \u666E\u901A\u7528\u6237</p><h2 id="\u7ED9\u666E\u901A\u7528\u6237\u63D0\u6743" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u666E\u901A\u7528\u6237\u63D0\u6743" aria-hidden="true">#</a> \u7ED9\u666E\u901A\u7528\u6237\u63D0\u6743</h2><p>1.su</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>su -
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.\u6DFB\u52A0\u7528\u6237\u81F3sudoers</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/sudoers
%wheel  ALL=(ALL)       NOPASSWD: ALL
useradd aa -G wheel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>usermod aa -G wheel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10);function r(d,i){return n}var l=e(s,[["render",r],["__file","user.html.vue"]]);export{l as default};
