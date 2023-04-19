<template><h1 id="k8s-更改apiserver使用强加密算法" tabindex="-1"><a class="header-anchor" href="#k8s-更改apiserver使用强加密算法" aria-hidden="true">#</a> k8s 更改apiserver使用强加密算法</h1>
<p>apiserver 新增一行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    - --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
