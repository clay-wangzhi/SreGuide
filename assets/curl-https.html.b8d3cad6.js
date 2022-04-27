import{_ as r,r as t,c,a as e,b as l,F as i,e as a,d as s,o as d}from"./app.ac0f71d5.js";const o={},p=a(`<h1 id="\u8BC1\u4E66\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u8BC1\u4E66\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> \u8BC1\u4E66\u76F8\u5173\u95EE\u9898</h1><h2 id="curl-https\u62A5\u9519-curl-35-ssl-connect-error" tabindex="-1"><a class="header-anchor" href="#curl-https\u62A5\u9519-curl-35-ssl-connect-error" aria-hidden="true">#</a> curl https\u62A5\u9519: curl: (35) SSL connect error</h2><p>\u539F\u56E0\uFF1Acurl\u9ED8\u8BA4\u652F\u6301https\u662Fnss\uFF0C\u800C\u4E0D\u662Fopenssl\uFF0C\u9700\u8981\u6362\u6210openss</p><p>\u6E90\u7801\u7F16\u8BD1curl</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/local/src/
wget http://curl.haxx.se/download/archeology/curl-7.19.7.tar.gz
tar -zxf curl-7.19.7.tar.gz
cd curl-7.19.7
./configure --without-nss --with-ssl
make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5),u=s("\u8F6C\u8F7D\u81EA\uFF1A"),h={href:"https://blog.csdn.net/qq_34810257/article/details/80885622",target:"_blank",rel:"noopener noreferrer"},m=s("https://blog.csdn.net/qq_34810257/article/details/80885622"),g=a(`<h2 id="ca\u8BC1\u4E66\u8FC7\u671F\u5BFC\u81F4\u8BF7\u6C42\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#ca\u8BC1\u4E66\u8FC7\u671F\u5BFC\u81F4\u8BF7\u6C42\u9519\u8BEF" aria-hidden="true">#</a> ca\u8BC1\u4E66\u8FC7\u671F\u5BFC\u81F4\u8BF7\u6C42\u9519\u8BEF</h2><p>1\uFF09\u67E5\u770B\u4E00\u4E0B\u65F6\u95F4date</p><p>2\uFF09 \u7CFB\u7EDF curl \u547D\u4EE4\u4E0D\u901A\u7684\u65F6\u5019</p><p>\u66F4\u65B0\u4E00\u4E0B \u8BC1\u4E66</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>update-ca-trust
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/QQ\u622A\u56FE20210111155232 [1].jpg)</p><p>3\uFF09\u66F4\u65B0\u4E00\u4E0Bjava\u91CC\u9762\u7684cacerts</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp -a /etc/pki/ca-trust/extracted/java/cacerts /opt/jdk1.8.0_144/jre/lib/security/cacerts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u8001\u4EA4\u53C9\u6839\u8FC7\u671F" tabindex="-1"><a class="header-anchor" href="#\u8001\u4EA4\u53C9\u6839\u8FC7\u671F" aria-hidden="true">#</a> \u8001\u4EA4\u53C9\u6839\u8FC7\u671F</h2><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210407141053673.png" alt="image-20210407141053673" loading="lazy"></p><p>\u89E3\u51B3\u529E\u6CD5\uFF1A\u8054\u7CFB\u8BC1\u4E66\u4F9B\u5E94\u5546\u66F4\u65B0\u8BC1\u4E66</p>`,11);function b(_,x){const n=t("ExternalLinkIcon");return d(),c(i,null,[p,e("p",null,[u,e("a",h,[m,l(n)])]),g],64)}var f=r(o,[["render",b],["__file","curl-https.html.vue"]]);export{f as default};
