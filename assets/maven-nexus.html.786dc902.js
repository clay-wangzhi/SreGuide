import{_ as t,r,c as p,a as n,b as a,F as i,d as s,e as l,o as g}from"./app.ab95b9c4.js";const c={},b=n("h1",{id:"maven\u79C1\u670Dnexus3-x\u73AF\u5883\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#maven\u79C1\u670Dnexus3-x\u73AF\u5883\u914D\u7F6E","aria-hidden":"true"},"#"),s(" maven\u79C1\u670Dnexus3.x\u73AF\u5883\u914D\u7F6E")],-1),u=s("\u8F6C\u8F7D\u81EA\uFF1A"),o={href:"https://www.xncoding.com/2017/09/02/tool/nexus.html",target:"_blank",rel:"noopener noreferrer"},m=s("maven\u79C1\u670Dnexus3.x\u73AF\u5883\u914D\u7F6E | \u98DE\u6C61\u718A\u535A\u5BA2"),d=l('<p>\u79C1\u670D\u662F\u6307\u79C1\u6709\u670D\u52A1\u5668\uFF0C\u662F\u67B6\u8BBE\u5728\u5C40\u57DF\u7F51\u7684\u4E00\u79CD\u7279\u6B8A\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u76EE\u7684\u662F\u4EE3\u7406\u8FDC\u7A0B\u4ED3\u5E93\u53CA\u90E8\u7F72\u7B2C\u4E09\u65B9\u6784\u5EFA\u3002 \u6709\u4E86\u79C1\u670D\u4E4B\u540E\uFF0C\u5F53 Maven \u9700\u8981\u4E0B\u8F7D\u6784\u4EF6\u65F6\uFF0C\u76F4\u63A5\u8BF7\u6C42\u79C1\u670D\uFF0C\u79C1\u670D\u4E0A\u5B58\u5728\u5219\u4E0B\u8F7D\u5230\u672C\u5730\u4ED3\u5E93\uFF1B \u5426\u5219\uFF0C\u79C1\u670D\u8BF7\u6C42\u5916\u90E8\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5C06\u6784\u4EF6\u4E0B\u8F7D\u5230\u79C1\u670D\uFF0C\u518D\u63D0\u4F9B\u7ED9\u672C\u5730\u4ED3\u5E93\u4E0B\u8F7D\u3002</p><p>Nexus\u662F\u4E00\u4E2A\u5F3A\u5927\u7684Maven\u4ED3\u5E93\u7BA1\u7406\u5668\uFF0C\u5B83\u6781\u5927\u5730\u7B80\u5316\u4E86\u672C\u5730\u5185\u90E8\u4ED3\u5E93\u7684\u7EF4\u62A4\u548C\u5916\u90E8\u4ED3\u5E93\u7684\u8BBF\u95EE\u3002 \u5982\u679C\u4F7F\u7528\u4E86\u516C\u5171\u7684Maven\u4ED3\u5E93\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u4ECEMaven\u4E2D\u592E\u4ED3\u5E93\u4E0B\u8F7D\u6240\u9700\u8981\u7684\u6784\u4EF6\uFF08Artifact\uFF09\uFF0C\u4F46\u8FD9\u901A\u5E38\u4E0D\u662F\u4E00\u4E2A\u597D\u7684\u505A\u6CD5\u3002 \u6B63\u5E38\u505A\u6CD5\u662F\u5728\u672C\u5730\u67B6\u8BBE\u4E00\u4E2A\u672C\u5730Maven\u4ED3\u5E93\u670D\u52A1\u5668\uFF0C\u5229\u7528Nexus\u79C1\u670D\u53EF\u4EE5\u53EA\u5728\u4E00\u4E2A\u5730\u65B9\u5C31\u80FD\u591F\u5B8C\u5168\u63A7\u5236\u8BBF\u95EE\u548C\u90E8\u7F72\u5728\u4F60\u6240\u7EF4\u62A4\u4ED3\u5E93\u4E2D\u7684\u6BCF\u4E2AArtifact\u3002</p><h2 id="nexus\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#nexus\u4F18\u70B9" aria-hidden="true">#</a> Nexus\u4F18\u70B9</h2><p>\u4E3A\u4EC0\u4E48\u8981\u6784\u5EFANexus\u79C1\u670D\uFF1F\u597D\u5904\u6211\u968F\u4FBF\u5217\u51E0\u70B9\uFF1A</p><ul><li>Nexus\u5728\u4EE3\u7406\u8FDC\u7A0B\u4ED3\u5E93\u7684\u540C\u65F6\u7EF4\u62A4\u672C\u5730\u4ED3\u5E93\uFF0C\u4EE5\u964D\u4F4E\u4E2D\u592E\u4ED3\u5E93\u7684\u8D1F\u8377,\u8282\u7701\u5916\u7F51\u5E26\u5BBD\u548C\u65F6\u95F4\uFF0CNexus\u79C1\u670D\u5C31\u53EF\u4EE5\u6EE1\u8DB3\u8FD9\u6837\u7684\u9700\u8981\u3002</li><li>Nexus\u662F\u4E00\u5957\u201D\u5F00\u7BB1\u5373\u7528\u201D\u7684\u7CFB\u7EDF\u4E0D\u9700\u8981\u6570\u636E\u5E93\uFF0C\u5B83\u4F7F\u7528\u6587\u4EF6\u7CFB\u7EDF\u52A0Lucene\u6765\u7EC4\u7EC7\u6570\u636E\u3002</li><li>Nexus\u4F7F\u7528ExtJS\u6765\u5F00\u53D1\u754C\u9762\uFF0C\u5229\u7528Restlet\u6765\u63D0\u4F9B\u5B8C\u6574\u7684REST APIs\uFF0C\u5E76\u80FD\u901A\u8FC7\u63D2\u4EF6\u548C\u5404\u79CDIDE\u96C6\u6210\u3002</li><li>Nexus\u652F\u6301WebDAV\u4E0ELDAP\u5B89\u5168\u8EAB\u4EFD\u8BA4\u8BC1\u3002</li><li>Nexus\u8FD8\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u4ED3\u5E93\u7BA1\u7406\u529F\u80FD\uFF0C\u6784\u4EF6\u641C\u7D22\u529F\u80FD\uFF0C\u5B83\u57FA\u4E8EREST\uFF0C\u63D0\u4F9B\u53CB\u597D\u7684UI\uFF0C\u5360\u7528\u8F83\u5C11\u7684\u5185\u5B58\uFF0C\u57FA\u4E8E\u7B80\u5355\u6587\u4EF6\u7CFB\u7EDF\u800C\u975E\u6570\u636E\u5E93\u3002</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u6211\u7684\u73AF\u5883\u662Fcentos7.2 + JDK8 + Maven3\uFF0C\u9996\u5148\u9700\u8981\u5B89\u88C5 JDK8 \u548C Maven3\uFF0C\u8FD9\u91CC\u4E0D\u591A\u8BB2\u3002</p>',7),h=s("\u53BB\u5B98\u7F51\u4E0B\u8F7D\u6700\u65B0\u7684 "),x={href:"https://www.sonatype.com/download-oss-sonatype",target:"_blank",rel:"noopener noreferrer"},v=s("download nexus"),f=l(`<p>\u4E0B\u8F7D\u6587\u4EF6nexus-3.6.0-02-unix.tar.gz\uFF0C\u89E3\u538B\u7F29\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar zxf nexus-3.6.0-02-unix.tar.gz -C /usr/local/
cd /usr/local/
mv nexus-3.6.0-02/ nexus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u542F\u52A8\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./nexus/bin/nexus start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9ED8\u8BA4\u7AEF\u53E38081\uFF0C\u5982\u679C\u5F00\u4E86\u9632\u706B\u5899\uFF0C\u5C31\u628A\u8FD9\u4E2A\u7AEF\u53E3\u653E\u5F00\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=8081/tcp --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u542F\u52A8\u4E4B\u540E\uFF0C\u8FD0\u884C\u547D\u4EE4<code>lsof -i:8081</code>\u53EF\u67E5\u770B\u662F\u5426\u6210\u529F\u542F\u52A8\u4E86\u3002</p><p>Nexus\u9ED8\u8BA4\u7684\u7AEF\u53E3\u662F8081\uFF0C\u53EF\u4EE5\u5728etc/nexus-default.properties\u914D\u7F6E\u4E2D\u4FEE\u6539\u3002</p><p>Nexus\u9ED8\u8BA4\u7684\u7528\u6237\u540D\u5BC6\u7801\u662Fadmin/admin123</p><p>\u5F53\u9047\u5230\u5947\u602A\u95EE\u9898\u65F6\uFF0C\u91CD\u542Fnexus\uFF0C\u91CD\u542F\u540Eweb\u754C\u9762\u89811\u5206\u949F\u5DE6\u53F3\u540E\u624D\u80FD\u8BBF\u95EE\u3002</p><p>Nexus\u7684\u5DE5\u4F5C\u76EE\u5F55\u662F<code>sonatype-work</code>\uFF08\u8DEF\u5F84\u4E00\u822C\u5728nexus\u540C\u7EA7\u76EE\u5F55\u4E0B\uFF09\uFF0C\u65E5\u5FD7\u6587\u4EF6\u4E5F\u5728\u8FD9\u91CC\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ls sonatype-work/nexus3/
backup  blobs  cache  db  elasticsearch  etc  generated-bundles  
health-check  instances  keystores  lock  log  orient  port  tmp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,12),y=s("\u8BBF\u95EE\uFF1A"),I={href:"http://localhost:8081/",target:"_blank",rel:"noopener noreferrer"},_=s("http://localhost:8081"),w=s("\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A"),j=l(`<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus01.png" alt="img" loading="lazy"></p><p>\u4F7F\u7528\u9ED8\u8BA4\u7684\u7BA1\u7406\u5458admin/admin123\u767B\u5F55\uFF0C\u8FDB\u5165\u7BA1\u7406\u754C\u9762\uFF1A</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus02.png" alt="img" loading="lazy"></p><h2 id="\u7528\u6237\u548C\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u548C\u89D2\u8272" aria-hidden="true">#</a> \u7528\u6237\u548C\u89D2\u8272</h2><p>\u53EF\u4EE5\u70B9\u51FB\u4E0A\u9762\u7684\u201D\u8BBE\u7F6E\u201D\u56FE\u6807\uFF0C\u5728\u201D\u8BBE\u7F6E\u201D\u91CC\u53EF\u4EE5\u6DFB\u52A0\u7528\u6237\u3001\u89D2\u8272\uFF0C\u5BF9\u63A5LDAP\u7B49\u7684\u8BBE\u7F6E\u3002</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus03.png" alt="img" loading="lazy"></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus04.png" alt="img" loading="lazy"></p><h2 id="\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4ED3\u5E93" aria-hidden="true">#</a> \u4ED3\u5E93</h2><p>\u6700\u6838\u5FC3\u7684\u662F\u4ED3\u5E93\u7BA1\u7406</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus05.png" alt="img" loading="lazy"></p><p>\u9ED8\u8BA4\u7684\u8FD9\u51E0\u4E2A\u4ED3\u5E93\u6211\u89E3\u91CA\u4E00\u4E0B\uFF1A</p><ol><li>maven-central\uFF1Amaven\u4E2D\u592E\u5E93\uFF0C\u9ED8\u8BA4\u4ECEhttps://repo1.maven.org/maven2/\u62C9\u53D6jar</li><li>maven-releases\uFF1A\u79C1\u5E93\u53D1\u884C\u7248jar\uFF0C\u521D\u6B21\u5B89\u88C5\u8BF7\u5C06<code>Deployment policy</code>\u8BBE\u7F6E\u4E3A<code>Allow redeploy</code></li><li>maven-snapshots\uFF1A\u79C1\u5E93\u5FEB\u7167\uFF08\u8C03\u8BD5\u7248\u672C\uFF09jar</li><li>maven-public\uFF1A\u4ED3\u5E93\u5206\u7EC4\uFF0C\u628A\u4E0A\u9762\u4E09\u4E2A\u4ED3\u5E93\u7EC4\u5408\u5728\u4E00\u8D77\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u5728\u672C\u5730maven\u57FA\u7840\u914D\u7F6E<code>settings.xml</code>\u4E2D\u4F7F\u7528\u3002</li></ol><p>Nexus\u9ED8\u8BA4\u7684\u4ED3\u5E93\u7C7B\u578B\u6709\u4EE5\u4E0B\u56DB\u79CD\uFF1A</p><ol><li>group(\u4ED3\u5E93\u7EC4\u7C7B\u578B)\uFF1A\u53C8\u53EB\u7EC4\u4ED3\u5E93\uFF0C\u7528\u4E8E\u65B9\u4FBF\u5F00\u53D1\u4EBA\u5458\u81EA\u5DF1\u8BBE\u5B9A\u7684\u4ED3\u5E93\uFF1B</li><li>hosted(\u5BBF\u4E3B\u7C7B\u578B)\uFF1A\u5185\u90E8\u9879\u76EE\u7684\u53D1\u5E03\u4ED3\u5E93\uFF08\u5185\u90E8\u5F00\u53D1\u4EBA\u5458\uFF0C\u53D1\u5E03\u4E0A\u53BB\u5B58\u653E\u7684\u4ED3\u5E93\uFF09\uFF1B</li><li>proxy(\u4EE3\u7406\u7C7B\u578B)\uFF1A\u4ECE\u8FDC\u7A0B\u4E2D\u592E\u4ED3\u5E93\u4E2D\u5BFB\u627E\u6570\u636E\u7684\u4ED3\u5E93\uFF08\u53EF\u4EE5\u70B9\u51FB\u5BF9\u5E94\u7684\u4ED3\u5E93\u7684Configuration\u9875\u7B7E\u4E0BRemote Storage\u5C5E\u6027\u7684\u503C\u5373\u88AB\u4EE3\u7406\u7684\u8FDC\u7A0B\u4ED3\u5E93\u7684\u8DEF\u5F84\uFF09\uFF1B</li><li>virtual(\u865A\u62DF\u7C7B\u578B)\uFF1A\u865A\u62DF\u4ED3\u5E93\uFF08\u8FD9\u4E2A\u57FA\u672C\u7528\u4E0D\u5230\uFF0C\u91CD\u70B9\u5173\u6CE8\u4E0A\u9762\u4E09\u4E2A\u4ED3\u5E93\u7684\u4F7F\u7528\uFF09\uFF1B</li></ol><p>Policy(\u7B56\u7565): \u8868\u793A\u8BE5\u4ED3\u5E93\u4E3A\u53D1\u5E03(Release)\u7248\u672C\u4ED3\u5E93\u8FD8\u662F\u5FEB\u7167(Snapshot)\u7248\u672C\u4ED3\u5E93\uFF1B</p><p>\u7531\u4E8E\u8BBF\u95EE\u4E2D\u592E\u4ED3\u5E93\u6709\u65F6\u5019\u4F1A\u6BD4\u8F83\u6162\uFF0C\u8FD9\u91CC\u6211\u6DFB\u52A0\u4E00\u4E2A\u963F\u91CC\u4E91\u7684\u4EE3\u7406\u4ED3\u5E93\uFF0C\u7136\u540E\u4F18\u5148\u7EA7\u653E\u5230\u9ED8\u8BA4\u4E2D\u592E\u5E93\u4E4B\u524D,\uFF0C \u963F\u91CC\u4E91\u7684maven\u4ED3\u5E93url\u4E3A<code>http://maven.aliyun.com/nexus/content/groups/public</code></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus09.png" alt="img" loading="lazy"></p><p>\u7136\u540E\u518Dpublic\u7EC4\u91CC\u9762\u8BB2\u8FD9\u4E2A<code>aliyun-proxy</code>\u4ED3\u5E93\u52A0\u5165\uFF0C\u6392\u5728<code>maven-central</code>\u4E4B\u524D\u5373\u53EF\u3002</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus10.png" alt="img" loading="lazy"></p><p>** Nexus\u4ED3\u5E93\u5206\u7C7B\u7684\u6982\u5FF5 **</p><p>1\uFF09Maven\u53EF\u76F4\u63A5\u4ECE\u5BBF\u4E3B\u4ED3\u5E93\u4E0B\u8F7D\u6784\u4EF6,\u4E5F\u53EF\u4EE5\u4ECE\u4EE3\u7406\u4ED3\u5E93\u4E0B\u8F7D\u6784\u4EF6,\u800C\u4EE3\u7406\u4ED3\u5E93\u95F4\u63A5\u7684\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u4E0B\u8F7D\u5E76\u7F13\u5B58\u6784\u4EF6</p><p>2\uFF09\u4E3A\u4E86\u65B9\u4FBF,Maven\u53EF\u4EE5\u4ECE\u4ED3\u5E93\u7EC4\u4E0B\u8F7D\u6784\u4EF6,\u800C\u4ED3\u5E93\u7EC4\u5E76\u6CA1\u6709\u65F6\u95F4\u7684\u5185\u5BB9(\u4E0B\u56FE\u4E2D\u7528\u865A\u7EBF\u8868\u793A,\u5B83\u4F1A\u8F6C\u5411\u5305\u542B\u7684\u5BBF\u4E3B\u4ED3\u5E93\u6216\u8005\u4EE3\u7406\u4ED3\u5E93\u83B7\u5F97\u5B9E\u9645\u6784\u4EF6\u7684\u5185\u5BB9)</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus06.png" alt="img" loading="lazy"></p><h2 id="nexus\u7684\u8C03\u5EA6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#nexus\u7684\u8C03\u5EA6\u4EFB\u52A1" aria-hidden="true">#</a> Nexus\u7684\u8C03\u5EA6\u4EFB\u52A1</h2><p>\u9ED8\u8BA4\u5B89\u88C5\u597D\u4E4B\u540E\u662F\u6CA1\u6709\u7D22\u5F15\u548Cjar\u6587\u4EF6\u7684\uFF0C\u56E0\u4E3A\u4F60\u8981\u81EA\u5DF1\u5B9A\u4E49\u4EFB\u52A1\u53BB\u6267\u884C\u3002</p><p>Nexus\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u53EF\u914D\u7F6E\u7684\u8C03\u5EA6\u4EFB\u52A1\u6765\u65B9\u4FBF\u7528\u6237\u7BA1\u7406\u7CFB\u7EDF\u3002\u7528\u6237\u53EF\u4EE5\u8BBE\u5B9A\u8FD9\u4E9B\u4EFB\u52A1\u8FD0\u884C\u7684\u65B9\u5F0F\uFF0C\u4F8B\u5982\u6BCF\u5929\u3001\u6BCF\u5468\u7B49\u3002\u8C03\u5EA6\u4EFB\u52A1\u4F1A\u5728\u9002\u5F53\u7684\u65F6\u5019\u5728\u540E\u53F0\u8FD0\u884C\u3002</p><p>\u8981\u5EFA\u7ACB\u4E00\u4E2A\u8C03\u5EA6\u4EFB\u52A1\uFF0C\u5355\u51FB\u5DE6\u8FB9\u5BFC\u822A\u83DC\u5355\u4E2D\u7684Tasks\uFF0C\u70B9\u51FB<code>Create Task</code>\uFF0C\u7136\u540E\u9009\u62E9\u4E00\u4E2A\u4EFB\u52A1\u7C7B\u578B\u3002</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus11.png" alt="img" loading="lazy"></p><p>\u4EE5\u4E0B\u51E0\u79CD\u5E38\u7528\u7C7B\u578B\u7684\u8C03\u5EA6\u4EFB\u52A1\uFF1A</p><ul><li>Execute script\uFF1A\u6267\u884C\u81EA\u5B9A\u4E49\u811A\u672C</li><li>Purge\u5F00\u5934\uFF1A\u6E05\u7406\u4E00\u4E9B\u4E0D\u4F7F\u7528\u7684\u8D44\u6E90\u3002</li><li>Rebuild repository index\uFF1A\u4E3A\u4ED3\u5E93\u91CD\u65B0\u7F16\u7E82\u7D22\u5F15\uFF0C\u4ECE\u8FDC\u4ED3\u5E93\u4E0B\u8F7D\u6700\u65B0\u7684\u7D22\u5F15\u3002</li><li>Rebuild Maven repository metadata\uFF1A\u57FA\u4E8E\u4ED3\u5E93\u5185\u5BB9\u91CD\u65B0\u521B\u5EFA\u4ED3\u5E93\u5143\u6570\u636E\u6587\u4EF6\uFF0C\u540C\u65F6\u91CD\u65B0\u521B\u5EFA\u6BCF\u4E2A\u6587\u4EF6\u7684\u6821\u9A8C\u548Cmd5\u4E0Esha1\u3002</li><li>Remove snapshots from Maven repository\uFF1A\u628A\u5FEB\u7167\u5220\u4E86\uFF0C\u8FD9\u4E2A\u662F\u5728\u7A33\u5B9A\u7248\u53D1\u5E03\u540E\u6E05\u9664</li></ul><p>\u6BD4\u5982\u6211\u65B0\u5EFA\u4E00\u4E2A\u91CD\u6784\u7D22\u5F15\u7684\u4EFB\u52A1\uFF0C\u7136\u540E\u9009\u62E9aliyun\u4ED3\u5E93\uFF0C\u8BA9\u5B83\u628A\u8FDC\u7A0B\u7D22\u5F15\u53D6\u4E0B\u6765\uFF0C\u624B\u52A8\u6267\u884C\u3002\u4E0D\u8FC7\u6700\u597D\u522B\u8FD9\u6837\u505A\uFF0C\u56E0\u4E3A\u9700\u8981\u5F88\u5927\u7684\u786C\u76D8\u7A7A\u95F4\u3002</p><p>\u6700\u597D\u662F\u8BA9\u5B83\u81EA\u5DF1\u53BB\u7EF4\u62A4\uFF0C\u8BF7\u6C42\u4E00\u4E2A\u4F9D\u8D56\u7684\u65F6\u5019\u5982\u679C\u79C1\u670D\u6CA1\u6709\u4F1A\u81EA\u52A8\u53BB\u8FDC\u4ED3\u5E93\u53D6\u7684\u3002</p><h2 id="nexus\u641C\u7D22\u9875" tabindex="-1"><a class="header-anchor" href="#nexus\u641C\u7D22\u9875" aria-hidden="true">#</a> Nexus\u641C\u7D22\u9875</h2><p>\u8FD9\u4E2A\u4E0D\u9700\u8981\u767B\u5F55\u5C31\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u7528\u6765\u67E5\u8BE2jar\u5305\u3002\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus07.png" alt="img" loading="lazy"></p><h2 id="blob-stores" tabindex="-1"><a class="header-anchor" href="#blob-stores" aria-hidden="true">#</a> Blob Stores</h2><p>\u6587\u4EF6\u5B58\u50A8\u7684\u5730\u65B9\uFF0C\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\u7684\u8BDD\uFF0C\u5BF9\u5E94\u6587\u4EF6\u7CFB\u7EDF\u7684\u4E00\u4E2A\u76EE\u5F55\uFF0C\u53EF\u4F9B\u4ED3\u5E93\u4E0A\u4F20\u6587\u4EF6\u4F7F\u7528\uFF0C\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus08.png" alt="img" loading="lazy"></p><h2 id="\u672C\u5730maven\u4F7F\u7528\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730maven\u4F7F\u7528\u79C1\u670D" aria-hidden="true">#</a> \u672C\u5730Maven\u4F7F\u7528\u79C1\u670D</h2><p>\u5B89\u88C5\u548C\u914D\u7F6E\u597D\u4E4B\u540E\uFF0C\u5728\u5F00\u53D1\u4E2D\u5982\u4F55\u4F7F\u7528\u5462\u3002\u53EF\u5728maven\u7684\u9ED8\u8BA4\u914D\u7F6E<code>settings.xml</code>\u4E2D\u4FEE\u6539\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;servers&gt;
    &lt;server&gt;
        &lt;id&gt;releases&lt;/id&gt;
        &lt;username&gt;admin&lt;/username&gt;
        &lt;password&gt;admin123&lt;/password&gt;
    &lt;/server&gt;
    &lt;server&gt;
        &lt;id&gt;snapshots&lt;/id&gt;
        &lt;username&gt;admin&lt;/username&gt;
        &lt;password&gt;admin123&lt;/password&gt;
    &lt;/server&gt;
&lt;/servers&gt;

&lt;mirrors&gt;
    &lt;mirror&gt;
        &lt;id&gt;nexus&lt;/id&gt;
        &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
        &lt;url&gt;http://123.207.66.156:8081/repository/maven-public/&lt;/url&gt;
    &lt;/mirror&gt;
&lt;/mirrors&gt;

&lt;profiles&gt;
    &lt;profile&gt;  
      &lt;id&gt;dev&lt;/id&gt;
      &lt;repositories&gt;
        &lt;repository&gt;
          &lt;id&gt;Nexus&lt;/id&gt;
          &lt;url&gt;http://123.207.66.156:8081/repository/maven-public/&lt;/url&gt;
          &lt;releases&gt;
            &lt;enabled&gt;true&lt;/enabled&gt;
          &lt;/releases&gt;
          &lt;snapshots&gt;
            &lt;enabled&gt;true&lt;/enabled&gt;
            &lt;updatePolicy&gt;always&lt;/updatePolicy&gt;
          &lt;/snapshots&gt;
        &lt;/repository&gt;
      &lt;/repositories&gt;
      &lt;activation&gt;
        &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;      
        &lt;jdk&gt;1.8&lt;/jdk&gt;
      &lt;/activation&gt;
      &lt;properties&gt;
        &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;
        &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
        &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt;
      &lt;/properties&gt;
    &lt;/profile&gt;
&lt;/profiles&gt;
&lt;activeProfiles&gt;
    &lt;activeProfile&gt;dev&lt;/activeProfile&gt;
&lt;/activeProfiles&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>\u5982\u679C\u8981\u53D1\u5E03\u81EA\u5DF1\u7684jar\u5230\u79C1\u670D\uFF0C\u5C31\u9700\u8981\u4FEE\u6539\u5DE5\u7A0B\u7684<code>pom.xml</code>\uFF0C\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF0C\u5426\u5219\u4EC0\u4E48\u90FD\u4E0D\u7528\u505A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;distributionManagement&gt;
    &lt;repository&gt;
        &lt;id&gt;releases&lt;/id&gt;
        &lt;name&gt;Releases&lt;/name&gt;
        &lt;url&gt;http://123.207.66.156:8081/repository/maven-releases/&lt;/url&gt;
    &lt;/repository&gt;
    &lt;snapshotRepository&gt;
        &lt;id&gt;snapshots&lt;/id&gt;
        &lt;name&gt;Snapshot&lt;/name&gt;
        &lt;url&gt;http://123.207.66.156:8081/repository/maven-snapshots/&lt;/url&gt;
    &lt;/snapshotRepository&gt;
&lt;/distributionManagement&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6CE8\u610F\u4E0A\u9762\u7684repository\u7684id\u503C\u4E00\u5B9A\u8981\u8DDF<code>settings.xml</code>\u6587\u4EF6\u4E2D\u914D\u7F6E\u7684server\u4E00\u81F4\u3002</p><p>\u4E0A\u4F20\u5230Nexus\u4E0A\uFF0C\u4F7F\u7528 <code>mvn deploy</code> \u5373\u53EF\uFF0C\u5F00\u53D1\u7684\u65F6\u5019\u8BF7\u4F7F\u7528snapshot\u7248\u672C\uFF0C\u4E5F\u5C31\u662Fversion\u7684\u540E\u7F00\u5FC5\u987B\u662F<code>-SNAPSHOT</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;groupId&gt;com.enzhico&lt;/groupId&gt;
&lt;artifactId&gt;micro-pay-sdk&lt;/artifactId&gt;
&lt;version&gt;1.2-SNAPSHOT&lt;/version&gt;
&lt;packaging&gt;jar&lt;/packaging&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus12.png" alt="img" loading="lazy"></p><p>\u4E0A\u6B21\u6210\u529F\u540E\u518D\u53BB\u79C1\u670D\u4ED3\u5E93\u67E5\u8BE2\u5FEB\u7167\u7248\u53D1\u73B0\u5DF2\u7ECF\u6210\u529F\u4E0A\u4F20\uFF1A</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus13.png" alt="img" loading="lazy"></p><p>** \u7B2C\u4E09\u65B9Jar\u4E0A\u4F20\u5230Nexus **</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mvn deploy:deploy-file \\
    -DgroupId=&lt;group-id&gt; \\
    -DartifactId=&lt;artifact-id&gt; \\
    -Dversion=&lt;version&gt; \\
    -Dpackaging=&lt;type-of-packaging&gt; \\
    -Dfile=&lt;path-to-file&gt; \\
    -DrepositoryId=&lt;server-id-settings.xml&gt; \\
    -Durl=&lt;url-of-the-repository-to-deploy&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>-DrepositoryId</code>\u7684\u503C\u5373\u4E3A\u5728<code>setttings.xml</code>\u91CC\u9762\u914D\u7F6E\u7684server id\u3002</p><h2 id="\u4E0A\u6B21\u4E0D\u540Cjdk\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u6B21\u4E0D\u540Cjdk\u7248\u672C" aria-hidden="true">#</a> \u4E0A\u6B21\u4E0D\u540CJDK\u7248\u672C</h2><p>pom.xml\u91CC\u9762\u914D\u7F6E\u591A\u4E2Aprofile\uFF0C\u5176\u4E2D\u4E00\u4E2A\u9ED8\u8BA4\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
            &lt;version&gt;3.6.1&lt;/version&gt;
            &lt;configuration&gt;
                &lt;source&gt;\${jar.source}&lt;/source&gt;
                &lt;target&gt;\${jar.target}&lt;/target&gt;
                &lt;encoding&gt;UTF-8&lt;/encoding&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-deploy-plugin&lt;/artifactId&gt;
            &lt;version&gt;2.8.2&lt;/version&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;deploy&lt;/id&gt;
                    &lt;phase&gt;deploy&lt;/phase&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;deploy&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;

&lt;profiles&gt;
    &lt;profile&gt;
        &lt;id&gt;default&lt;/id&gt;
        &lt;activation&gt;
            &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
        &lt;/activation&gt;
        &lt;properties&gt;
            &lt;jar.source&gt;1.8&lt;/jar.source&gt;
            &lt;jar.target&gt;1.8&lt;/jar.target&gt;
        &lt;/properties&gt;
    &lt;/profile&gt;
    &lt;profile&gt;
        &lt;id&gt;jdk16&lt;/id&gt;
        &lt;build&gt;
            &lt;plugins&gt;
                &lt;plugin&gt;
                    &lt;artifactId&gt;maven-jar-plugin&lt;/artifactId&gt;
                    &lt;executions&gt;
                        &lt;execution&gt;
                            &lt;phase&gt;package&lt;/phase&gt;
                            &lt;goals&gt;
                                &lt;goal&gt;jar&lt;/goal&gt;
                            &lt;/goals&gt;
                            &lt;configuration&gt;
                                &lt;classifier&gt;jdk16&lt;/classifier&gt;
                            &lt;/configuration&gt;
                        &lt;/execution&gt;
                    &lt;/executions&gt;
                &lt;/plugin&gt;
            &lt;/plugins&gt;
        &lt;/build&gt;
        &lt;properties&gt;
            &lt;jar.source&gt;1.6&lt;/jar.source&gt;
            &lt;jar.target&gt;1.6&lt;/jar.target&gt;
        &lt;/properties&gt;
    &lt;/profile&gt;
&lt;/profiles&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>\u4E0A\u9762\u6211\u5B9A\u4E49\u4E86\u4E24\u4E2Aprofile\uFF0C\u90A3\u4E48\u6253\u5305\u6216\u8005\u53D1\u5E03\u7684\u65F6\u5019\u53EF\u6307\u5B9A\u4E0D\u540C\u7684JDK\u7248\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u9ED8\u8BA4\u7248\u672CJDK1.8
mvn clean &amp;&amp; mvn deploy
# JDK1.6\u7248\u672C
mvn clean &amp;&amp; mvn deploy -P jdk16
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7B2C\u4E00\u6761\u547D\u4EE4\u6253\u5305\u4F7F\u7528\u9ED8\u8BA4\u7684profile\uFF0C\u7F16\u8BD1\u7684\u7248\u672C\u662F1.8\uFF0C\u751F\u6210\u7684\u6587\u4EF6\u662Fxxx-SNAPSHOT.jar\uFF1B \u800C\u7B2C\u4E8C\u6761\u547D\u4EE4\u6253\u5305\u6307\u5B9A\u4F7F\u7528jdk16\u8FD9\u4E2Aprofile\uFF0C\u7F16\u8BD1\u7248\u672C\u662F1.6\uFF0C\u751F\u6210\u7684\u6587\u4EF6\u662Fxxx-SNAPSHOT-jdk16.jar\u3002</p><p>\u9879\u76EE\u4E2D\u5F15\u7528\u7684\u65F6\u5019\u53EF\u901A\u8FC7\u6307\u5B9Aclassifier\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.enzhico&lt;/groupId&gt;
    &lt;artifactId&gt;adm-traffic-common-model&lt;/artifactId&gt;
    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
    &lt;classifier&gt;jdk16&lt;/classifier&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u53D1\u5E03\u6E90\u7801\u548C\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u6E90\u7801\u548C\u6587\u6863" aria-hidden="true">#</a> \u53D1\u5E03\u6E90\u7801\u548C\u6587\u6863</h2><p>\u5982\u679C\u4F60\u8FD8\u60F3\u53D1\u5E03\u6E90\u7801\u548Cjavadoc\uFF0C\u90A3\u4E48\u9700\u8981\u4F7F\u7528maven\u63D2\u4EF6\uFF0C\u6211\u628A\u63D2\u4EF6\u914D\u7F6E\u5217\u51FA\u6765\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
            &lt;version&gt;3.7.0&lt;/version&gt;
            &lt;configuration&gt;
                &lt;source&gt;1.8&lt;/source&gt;
                &lt;target&gt;1.8&lt;/target&gt;
                &lt;encoding&gt;UTF-8&lt;/encoding&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-resources-plugin&lt;/artifactId&gt;
            &lt;configuration&gt;
                &lt;encoding&gt;UTF-8&lt;/encoding&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-source-plugin&lt;/artifactId&gt;
            &lt;version&gt;3.0.1&lt;/version&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;attach-sources&lt;/id&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;jar&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-javadoc-plugin&lt;/artifactId&gt;
            &lt;version&gt;2.10.4&lt;/version&gt;
            &lt;configuration&gt;
                &lt;encoding&gt;UTF-8&lt;/encoding&gt;
                &lt;aggregate&gt;true&lt;/aggregate&gt;
                &lt;charset&gt;UTF-8&lt;/charset&gt;
                &lt;docencoding&gt;UTF-8&lt;/docencoding&gt;
            &lt;/configuration&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;attach-javadocs&lt;/id&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;jar&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-deploy-plugin&lt;/artifactId&gt;
            &lt;version&gt;2.8.2&lt;/version&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;deploy&lt;/id&gt;
                    &lt;phase&gt;deploy&lt;/phase&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;deploy&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><p>\u53D1\u5E03javadoc\u7684\u65F6\u5019\uFF0C\u6BCF\u4E2A\u65B9\u6CD5\u6CE8\u91CA\u5FC5\u987B\u9075\u5FAA\u89C4\u8303\uFF0C\u6BD4\u5982\u53C2\u6570\u3001\u8FD4\u56DE\u503C\u3001\u5F02\u5E38\u90FD\u5E94\u8BE5\u6709\u8BF4\u660E\u3002</p><p>\u6253\u5305\u6216\u53D1\u5E03\u7684\u65F6\u5019\u5982\u679C\u60F3\u8DF3\u8FC7\u6D4B\u8BD5\uFF0C\u52A0\u4E00\u4E2A\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mvn clean &amp;&amp; mvn deploy -DskipTests=true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,66);function k(z,N){const e=r("ExternalLinkIcon");return g(),p(i,null,[b,n("blockquote",null,[n("p",null,[u,n("a",o,[m,a(e)])])]),d,n("p",null,[h,n("a",x,[v,a(e)])]),f,n("p",null,[y,n("a",I,[_,a(e)]),w]),j],64)}var S=t(c,[["render",k],["__file","maven-nexus.html.vue"]]);export{S as default};
