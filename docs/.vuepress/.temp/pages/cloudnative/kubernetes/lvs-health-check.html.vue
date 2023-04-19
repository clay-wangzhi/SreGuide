<template><h1 id="lvs-健康检查-k8s-apiserver" tabindex="-1"><a class="header-anchor" href="#lvs-健康检查-k8s-apiserver" aria-hidden="true">#</a> lvs 健康检查 k8s apiserver</h1>
<p>apiserver前面如果有lvs做高可用，lvs对apiserver做健康检测要注意不能使用tcp check,否则会触发报错</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220930112754483.png" alt="image-20220930112754483" loading="lazy"></p>
<p>改为SSL_GET</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>        SSL_GET {
          url {
          	path /healthz
          	status_code 200      
          }
          connect_timeout 3
          nb_get_retry 3
          delay_before_retry 3
          connect_port 6443
        }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
