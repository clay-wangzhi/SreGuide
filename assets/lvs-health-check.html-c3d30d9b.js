import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as i,e as n}from"./app-d870e103.js";const a={},l=n(`<h1 id="lvs-健康检查-k8s-apiserver" tabindex="-1"><a class="header-anchor" href="#lvs-健康检查-k8s-apiserver" aria-hidden="true">#</a> lvs 健康检查 k8s apiserver</h1><p>apiserver前面如果有lvs做高可用，lvs对apiserver做健康检测要注意不能使用tcp check，否则会触发报错</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220930112754483.png" alt="image-20220930112754483"></p><p>改为SSL_GET</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        SSL_GET {
          url {
          	path /healthz
          	status_code 200      
          }
          connect_timeout 3
          nb_get_retry 3
          delay_before_retry 3
          connect_port 6443
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[l];function t(c,d){return s(),i("div",null,r)}const m=e(a,[["render",t],["__file","lvs-health-check.html.vue"]]);export{m as default};
