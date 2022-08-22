import{_ as a,r as i,c as p,a as n,b as l,F as t,d as e,e as r,o as c}from"./app.200bae49.js";const u={},o=n("h1",{id:"_1-5-pypi-\u914D\u7F6E\u56FD\u5185\u955C\u50CF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-5-pypi-\u914D\u7F6E\u56FD\u5185\u955C\u50CF","aria-hidden":"true"},"#"),e(" 1.5 pypi \u914D\u7F6E\u56FD\u5185\u955C\u50CF")],-1),d=n("blockquote",null,[n("p",null,"\u8F6C\u8F7D\u81EA\uFF1APython | willseecloud | \u770B\u4E91")],-1),m=n("p",null,"pypi \u56FD\u5185\u955C\u50CF\u76EE\u524D\u6709\uFF1A",-1),b=n("li",null,"\u963F\u91CC\u4E91(aliyun) - https://mirrors.aliyun.com/pypi/simple/",-1),h=n("li",null,"\u8C46\u74E3(douban) - https://pypi.douban.com/simple/",-1),g=e("\u6E05\u534E\u5927\u5B66(tuna) - "),_={href:"https://pypi.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"},x=e("https://pypi.tuna.tsinghua.edu.cn"),y=n("li",null,"\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66 - http://pypi.mirrors.ustc.edu.cn/",-1),v=r(`<p>\u624B\u52A8\u6307\u5B9A\u6E90\uFF0C\u53EF\u4EE5\u5728pip\u540E\u9762\u8DDF-i \u6765\u6307\u5B9A\u6E90\uFF0C\u6BD4\u5982\u7528\u8C46\u74E3\u7684\u6E90\u6765\u5B89\u88C5web.py\u6846\u67B6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pip install -i http://pypi.douban.com/simple/ gevent

pip3 install pip --upgrade -i https://mirrors.aliyun.com/pypi/simple/

pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt

easy_install -i http://pypi.douban.com/simple/ gevent
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u914D\u7F6E\u6587\u4EF6\u6307\u5B9A\u6E90\uFF0Clinux\u4E0B\u4FEE\u6539~/.pip/pip.conf\uFF0C\u5982\u679C\u6CA1\u8FD9\u6587\u4EF6\u5219\u521B\u5EFA\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir ~/.pip
cat &gt; ~/.pip/pip.conf &lt;&lt; EOF 
[global]
trusted-host=mirrors.aliyun.com
index-url=https://mirrors.aliyun.com/pypi/simple/
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>easy_install\u914D\u7F6E\u56FD\u5185\u6E90</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; ~/.pydistutils.cfg &lt;&lt; EOF 
[easy_install]
index-url=https://mirrors.aliyun.com/pypi/simple/ 
find-links=https://mirrors.aliyun.com/pypi/simple/
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>windows\u914D\u7F6E</p><p>\u6587\u4EF6\u5939\u7A97\u53E3\u8F93\u5165 \uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>%APPDATA%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u65B0\u5EFA\u4E00\u4E2Apip\u6587\u4EF6\u5939\uFF0C\u5728pip\u6587\u4EF6\u5939\u91CC\u9762\u65B0\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6<code>pip.ini</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[global]
trusted-host=mirrors.aliyun.com
index-url=https://mirrors.aliyun.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6E05\u534E\u6E90</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,13);function f(k,E){const s=i("ExternalLinkIcon");return c(),p(t,null,[o,d,m,n("ul",null,[b,h,n("li",null,[g,n("a",_,[x,l(s)])]),y]),v],64)}var w=a(u,[["render",f],["__file","python-pip.html.vue"]]);export{w as default};
