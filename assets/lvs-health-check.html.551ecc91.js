import{_ as e,e as s}from"./app.bb7a353b.js";const n={},a=s(`<h1 id="lvs-\u5065\u5EB7\u68C0\u67E5-k8s-apiserver" tabindex="-1"><a class="header-anchor" href="#lvs-\u5065\u5EB7\u68C0\u67E5-k8s-apiserver" aria-hidden="true">#</a> lvs \u5065\u5EB7\u68C0\u67E5 k8s apiserver</h1><p>apiserver\u524D\u9762\u5982\u679C\u6709lvs\u505A\u9AD8\u53EF\u7528\uFF0Clvs\u5BF9apiserver\u505A\u5065\u5EB7\u68C0\u6D4B\u8981\u6CE8\u610F\u4E0D\u80FD\u4F7F\u7528tcp check\uFF0C\u5426\u5219\u4F1A\u89E6\u53D1\u62A5\u9519</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220930112754483.png" alt="image-20220930112754483" loading="lazy"></p><p>\u6539\u4E3ASSL_GET</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        SSL_GET {
          url {
          	path /healthz
          	status_code 200      
          }
          connect_timeout 3
          nb_get_retry 3
          delay_before_retry 3
          connect_port 6443
        }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,5);function r(l,t){return a}var i=e(n,[["render",r],["__file","lvs-health-check.html.vue"]]);export{i as default};
