import{_ as e,e as n}from"./app.cb2299af.js";const s={},a=n(`<h2 id="centos7\u4E0B\u65F6\u533A\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#centos7\u4E0B\u65F6\u533A\u95EE\u9898" aria-hidden="true">#</a> centos7\u4E0B\u65F6\u533A\u95EE\u9898</h2><p>centos7\u65F6\u533A\u540C\u6837, \u5728 CentOS 7 \u4E2D, \u5F15\u5165\u4E86\u4E00\u4E2A\u53EB <strong>timedatectl</strong> \u7684\u8BBE\u7F6E\u8BBE\u7F6E\u7A0B\u5E8F\u3002</p><p>\u7528\u6CD5\u5F88\u7B80\u5355\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># timedatectl # \u67E5\u770B\u7CFB\u7EDF\u65F6\u95F4\u65B9\u9762\u7684\u5404\u79CD\u72B6\u6001
      Local time: \u56DB 2014-12-25 10:52:10 CST
  Universal time: \u56DB 2014-12-25 02:52:10 UTC
        RTC time: \u56DB 2014-12-25 02:52:10
        Timezone: Asia/Shanghai (CST, +0800)
     NTP enabled: yes
NTP synchronized: yes
 RTC in local TZ: no
      DST active: n/a
# timedatectl list-timezones # \u5217\u51FA\u6240\u6709\u65F6\u533A
# timedatectl set-local-rtc 1 # \u5C06\u786C\u4EF6\u65F6\u949F\u8C03\u6574\u4E3A\u4E0E\u672C\u5730\u65F6\u949F\u4E00\u81F4, 0 \u4E3A\u8BBE\u7F6E\u4E3A UTC \u65F6\u95F4
# timedatectl set-timezone Asia/Shanghai # \u8BBE\u7F6E\u7CFB\u7EDF\u65F6\u533A\u4E3A\u4E0A\u6D77
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5176\u5B9E\u4E0D\u8003\u8651\u5404\u4E2A\u53D1\u884C\u7248\u7684\u5DEE\u5F02\u5316, \u4ECE\u66F4\u5E95\u5C42\u51FA\u53D1\u7684\u8BDD, \u4FEE\u6539\u65F6\u95F4\u65F6\u533A\u6BD4\u60F3\u8C61\u4E2D\u8981\u7B80\u5355:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,6);function t(i,r){return a}var c=e(s,[["render",t],["__file","centos-time.html.vue"]]);export{c as default};
