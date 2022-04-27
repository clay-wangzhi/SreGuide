import{_ as a,e as t}from"./app.ac0f71d5.js";const e={},r=t(`<h1 id="tomcat-\u5B66\u4E60\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#tomcat-\u5B66\u4E60\u7B14\u8BB0" aria-hidden="true">#</a> Tomcat \u5B66\u4E60\u7B14\u8BB0</h1><p>Hello everyone, let&#39;s learn tomcat together\uFF01</p><h3 id="tomcat\u7684\u5F00\u5E55\u5F0F" tabindex="-1"><a class="header-anchor" href="#tomcat\u7684\u5F00\u5E55\u5F0F" aria-hidden="true">#</a> Tomcat\u7684\u5F00\u5E55\u5F0F</h3><p>Tomcat\u4EE5Java\u7F16\u5199</p><h4 id="\u5B89\u88C5tomcat" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5tomcat" aria-hidden="true">#</a> \u5B89\u88C5Tomcat</h4><p>\u5B98\u7F51\u5730\u5740\u4E3A\uFF1Ahttps://tomcat.apache.org</p><p>\u5404\u4E2A\u7248\u672C\u7684\u4E0B\u8F7D\u5730\u5740\u4E3A\uFF1Ahttps://archive.apache.org/dist/tomcat/</p><p>\u5B89\u88C5\u65B9\u5F0F</p><p>\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF08\u6587\u4EF6\u4E3Atar.gz\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.23/bin/apache-tomcat-8.5.23.tar.gz
tar -xvf apache-tomcat-8.5.23.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u9700\u63D0\u524D\u914D\u7F6E\u597Djdk\u7684\u73AF\u5883\u53D8\u91CF\uFF0Cjdk\u914D\u7F6E\u8BE6\u89C1\u4E0A\u4E00\u7AE0\u8282</p><h4 id="tomcat\u542F\u52A8\u3001\u505C\u6B62\u3001\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#tomcat\u542F\u52A8\u3001\u505C\u6B62\u3001\u91CD\u542F" aria-hidden="true">#</a> Tomcat\u542F\u52A8\u3001\u505C\u6B62\u3001\u91CD\u542F</h4><p>\u4E3B\u8981\u7528\u5230\u7684\u811A\u672C\u6709</p><p>catalina.sh\u3001shutdown.sh\u3001startup.sh\u3001version.sh</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/tomcat1.png" alt="" loading="lazy"></p><p>catalina\u662Ftomcat\u7684\u4E3B\u8981\u811A\u672C\uFF0C\u5B83\u4F1A\u6267\u884Cjava\u547D\u4EE4\u4EE5\u8C03\u7528Tomcat\u7684\u542F\u52A8\u6216\u505C\u6B62\u7B49</p><p>shutdown\u662F\u505C\u6B62tomcat\u811A\u672C</p><p>startup\u662F\u542F\u52A8tomcat\u811A\u672C</p><p>version\u662F\u67E5\u770Btomcat\u7684\u7248\u672C\u4FE1\u606F</p><ul><li><p>\u5E38\u7528\u7684catalina\u811A\u672C\u542F\u52A8\u53C2\u6570</p><p>config [server.xml file] \u6307\u5B9A\u53E6\u4E00\u4E2Aserver.xml\u914D\u7F6E\u6587\u4EF6\u3002\u9ED8\u8BA4\u662F\u4F7F\u7528\u9A7B\u7559\u5728$CATALINA_BASE/conf\u76EE\u5F55\u4E2D\u7684server.xml</p><p>help \u8F93\u51FA\u547D\u4EE4\u884C\u9009\u9879\u6458\u8981\u8868</p><p>ebug \u4EE5\u8C03\u8BD5\u6A21\u5F0F\u542F\u52A8tomcat</p><p>tart \u542F\u52A8tomcat\uFF0C\u5E76\u5C06\u6807\u51C6\u8F93\u51FA\u4E0E\u9519\u8BEF\u9001\u81F3tomcat\u7684\u65E5\u5FD7\u6587\u4EF6</p><p>top \u505C\u6B62tomcat</p><p>ersion \u8F93\u51FAtomcat\u7684\u7248\u672C\u4FE1\u606F</p></li></ul><h4 id="\u5B89\u88C5\u540E\u7684\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u540E\u7684\u6D4B\u8BD5" aria-hidden="true">#</a> \u5B89\u88C5\u540E\u7684\u6D4B\u8BD5</h4><p>\u5F53\u5B89\u88C5\u4EE5\u53CA\u542F\u52A8tomcat\u540E\uFF0C\u6D4B\u8BD5\u662F\u5426\u6210\u529F\u542F\u52A8\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u7F51\u9875\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u4E3A8080</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/tomcat2.png" alt="" loading="lazy"></p><h3 id="\u914D\u7F6Etomcat" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Etomcat" aria-hidden="true">#</a> \u914D\u7F6Etomcat</h3><h4 id="\u4ECE8080\u6539\u53D8\u7AEF\u53E3\u53F7" tabindex="-1"><a class="header-anchor" href="#\u4ECE8080\u6539\u53D8\u7AEF\u53E3\u53F7" aria-hidden="true">#</a> \u4ECE8080\u6539\u53D8\u7AEF\u53E3\u53F7</h4><p>\u628A\u673A\u5668\u4E0A\u76EE\u7684\u5730\u4E3A80\u7AEF\u53E3\u7684\u6240\u6709\u8FDE\u63A5\u9700\u91CD\u5B9A\u5411\u52308080\u7AEF\u53E3\u7684\u4FE1\u606F\u901A\u77E5\u7ED9\u5185\u6838\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080
iptables -t nat -I OUTPUT -p tcp --dport 80 -j REDIRECT --to-ports 8080
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,27);function c(p,n){return r}var o=a(e,[["render",c],["__file","index.html.vue"]]);export{o as default};
