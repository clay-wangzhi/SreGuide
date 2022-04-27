<template><h1 id="证书相关问题" tabindex="-1"><a class="header-anchor" href="#证书相关问题" aria-hidden="true">#</a> 证书相关问题</h1>
<h2 id="curl-https报错-curl-35-ssl-connect-error" tabindex="-1"><a class="header-anchor" href="#curl-https报错-curl-35-ssl-connect-error" aria-hidden="true">#</a> curl https报错: curl: (35) SSL connect error</h2>
<p>原因：curl默认支持https是nss，而不是openssl，需要换成openss</p>
<p>源码编译curl</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /usr/local/src/
wget http://curl.haxx.se/download/archeology/curl-7.19.7.tar.gz
tar -zxf curl-7.19.7.tar.gz
cd curl-7.19.7
./configure --without-nss --with-ssl
make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>转载自：<a href="https://blog.csdn.net/qq_34810257/article/details/80885622" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_34810257/article/details/80885622<ExternalLinkIcon/></a></p>
<h2 id="ca证书过期导致请求错误" tabindex="-1"><a class="header-anchor" href="#ca证书过期导致请求错误" aria-hidden="true">#</a> ca证书过期导致请求错误</h2>
<p>1）查看一下时间date</p>
<p>2） 系统 curl 命令不通的时候</p>
<p>更新一下 证书</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>update-ca-trust
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/QQ截图20210111155232 [1].jpg)</p>
<p>3）更新一下java里面的cacerts</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cp -a /etc/pki/ca-trust/extracted/java/cacerts /opt/jdk1.8.0_144/jre/lib/security/cacerts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="老交叉根过期" tabindex="-1"><a class="header-anchor" href="#老交叉根过期" aria-hidden="true">#</a> 老交叉根过期</h2>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210407141053673.png" alt="image-20210407141053673" loading="lazy"></p>
<p>解决办法：联系证书供应商更新证书</p>
</template>
