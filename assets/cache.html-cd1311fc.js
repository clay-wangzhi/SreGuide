import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as n,c as r,b as t,d as e,a,e as c}from"./app-1a5afd71.js";const l={},d=t("h1",{id:"tomcat-缓存-清理",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tomcat-缓存-清理","aria-hidden":"true"},"#"),e(" Tomcat “缓存”清理")],-1),i={href:"https://blog.51cto.com/ycgit/1692886",target:"_blank",rel:"noopener noreferrer"},m=c("<p><strong>一、关于Tomcat“缓存”的介绍</strong></p><p>很多时候大家喜欢把tomcat的work目录里的东西叫做缓存，其实那不是很恰当，work目录只是tomcat的工作目录，也就是tomcat把jsp转换为class文件的工作目录，这也正是为什么它叫work目录而不是cache目录的原因。 　　jsp，tomcat的工作原理是当浏览器访问某个jsp页面时，tomcat会在work目录里把这个jsp页面转换成.java文件，比如将index.jsp转换为index_jsp.java文件，而后编译为index_jsp.class文件，最后tomcat容器通过ClassLoader类把这个index_jsp.class类装载入内存，进行响应客户端的工作。 　　tomcat会定时稍描容器内的jsp文件，读取每个文件的属性，当发现某个jsp文件发生改变时（文件的最后修改时间与上次稍描时不相同时），tomcat会重新转换、编译这个jsp文件。但是tomcat的稍描是定时的不是实时的，这也正是为什么jsp文件修改后需要几分钟的时间来等修改过的jsp生效。当然为了即刻生效，很多老前辈都会建议在修改jsp页面后立即清除work目录里的文件。 　　另外，tomcat容器中，对转换后的java文件（比如：index_jsp.java）的编译最大只支持64k，所以在其他容器中的jsp移植到tomcat容器中时会遇到大jsp文件会发生无法编译的情况，所以建议把jsp中的业务逻辑写入单独的类，在jsp中通过调用这个类的静态方法来执行，并将jsp页面中的js提取出来放到单独的js文件内。</p><p><strong>二、Tomcat“缓存”的清理</strong></p><p>由于很多时候我们在修改jsp的内容后，希望能立即生效，自然就不愿意等几分钟让tomcat自动刷新了（根据本人以往的经验，大部分情况下还是能马上生效的）。那么下面还是来介绍三种清理的方法：</p><p>方法1：</p><p>conf/server.xml文件</p><p>Context path中间加上reloadable=&quot;true&quot;</p><p>例如：<code>&lt;Context path=&quot;&quot; docBase=&quot;&quot; reloadable=&quot;true&quot;&gt; </code></p>",8),u={href:"http://ycgit.blog.51cto.com/8590215/1688579",target:"_blank",rel:"noopener noreferrer"},j=c(`<p>方法2：</p><p>删除work目录下的缓存文件</p><p>可以把Catalina目录删除；</p><p>注意：不能把work整个目录删除，不然重启tomcat 时，会把conf/web.xml删除掉，这样在启动时，日志 会提示：No Default web .xml，且访问页面会显示404错误；</p><p>方法3：</p><p>在jsp页面上方加上如下代码，这样的也可以使该jsp能实时加载，每次访问都会重新把这个jsp页面转换成.java文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;meta http-equiv=&quot;Expires&quot; content=&quot;0&quot;&gt;  
&lt;meta http-equiv=&quot;kiben&quot; content=&quot;no-cache&quot;&gt;   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p></p>`,8);function _(h,x){const o=p("ExternalLinkIcon");return n(),r("div",null,[d,t("blockquote",null,[t("p",null,[e("转载自："),t("a",i,[e("Tomcat “缓存”清理"),a(o)])])]),m,t("p",null,[e("path、docBase、reloadable属性举例说明： "),t("a",u,[e(" http://ycgit.blog.51cto.com/8590215/1688579"),a(o)])]),j])}const v=s(l,[["render",_],["__file","cache.html.vue"]]);export{v as default};
