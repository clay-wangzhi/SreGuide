import{_ as s,e as n}from"./app.ac0f71d5.js";const a={},o=n(`<h1 id="_7-1-jenkins-job\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#_7-1-jenkins-job\u8FC1\u79FB" aria-hidden="true">#</a> 7.1 Jenkins Job\u8FC1\u79FB</h1><p>\u5728\u5DE5\u4F5C\u4E2D\u53EF\u80FD\u4F1A\u9047\u5230\u8FD9\u6837\u7684\u573A\u666F\uFF0C\u5373\u9700\u8981\u628A\u4E00\u4E2AJenkins Master\u4E0A\u7684job\u8FC1\u79FB\u5230\u53E6\u5916\u4E00\u53F0Jenkins Master\u4E0A\uFF0C\u90A3\u600E\u4E48\u505A\u6BD4\u8F83\u597D\u5462\uFF1F</p><p>\u5982\u679C\u53EA\u662F\u5355\u72EC\u7684\u4E00\u4E2Ajob\u4E14\u8FD9\u4E2Ajob\u7684\u8BBE\u7F6E\u5F88\u7B80\u5355\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5F53\u7136\u53EF\u4EE5\u76F4\u63A5\u5728\u65B0\u7684Jenkins Master\u4E0A\u76F4\u63A5\u521B\u5EFAjob\u7136\u540E\u4ECE\u65E7\u7684job\u62F7\u8D1D\u4E0B\u914D\u7F6E\u5373\u53EF\u3002\u4F46\u5982\u679Cjob\u5F88\u591A\uFF0C\u6216\u8005job\u7684\u914D\u7F6E\u9879\u8F83\u591A\u90A3\u624B\u52A8\u590D\u5236\u914D\u7F6E\u80AF\u5B9A\u662F\u6BD4\u8F83\u50BB\u7684\u884C\u4E3A\u3002\u90A3\u6211\u4EEC\u73B0\u5728\u6765\u4ECB\u7ECD\u4E0B\u8FD9\u79CD\u914D\u7F6E\u9879\u8F83\u591A\u3001job\u6BD4\u8F83\u591A\u7684\u60C5\u51B5\u4E0B\u600E\u4E48\u6765\u8FC1\u79FB\u8FD9\u4E9Bjob\u3002</p><p>\u73B0\u5728\u6211\u642D\u5EFA\u4E86\u4E24\u53F0Jenkins\u6765\u8FDB\u884C\u8BF4\u660E\u3002IP\u5206\u522B\u4E3A192.168.9.9\u548C192.168.9.8\uFF0C\u73B0\u5728\u6211\u5728.10\u4E0A\u521B\u5EFA\u4E00\u4E2Ajob\uFF0C\u5982test\uFF0C\u7136\u540E\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/g62phjjstk.jpeg" alt="img" loading="lazy"></p><p>\u73B0\u5728\u5177\u4F53\u6765\u770B\u4E0B\u5982\u4F55\u5C06\u4E0A\u9762\u7684\u914D\u7F6E\u7684job\u4ECE192.168.9.10\u7684Jenkins\u4E0A\u8FC1\u79FB\u5230192.168.9.8\u7684\u673A\u5668\u4E0A\u3002</p><h2 id="job-import-plugin\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#job-import-plugin\u5BFC\u5165" aria-hidden="true">#</a> <strong>Job Import Plugin\u5BFC\u5165</strong></h2><p>\u73B0\u5728\u5148\u4ECB\u7ECD\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF0C\u901A\u8FC7Job Import Plugin\u65B9\u5F0F\u6765\u8FDB\u884Cjob\u7684\u8FC1\u79FB\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u6BD4\u8F83\u65B9\u4FBF\uFF0C\u9996\u5148\u5230\u65B0\u7684Jenkins\u4E0A\uFF0C\u4E5F\u5C31\u662F192.168.9.8\u4E0A\uFF0C\u5728192.168.9.8\u4E0A\u63D2\u4EF6\u7BA1\u7406\u91CC\u5148\u5B89\u88C5\u4E0BJob Import Plugin\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/jf3clczyv2.jpeg" alt="img" loading="lazy"></p><p>\u5B89\u88C5\u5B8C\u540E\u8FDB\u5165\u201CManage Jenkins\u201D -&gt; &quot;Configure System&quot;\u4E0B\uFF0C\u627E\u5230Job Import Pluguin\u914D\u7F6E\u7684\u5730\u65B9\uFF0C\u8FDB\u884C\u5982\u4E0B\u8BBE\u7F6E\uFF1A</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/eug932owyp.jpeg" alt="img" loading="lazy"></p><p><strong>name</strong>: \u8FD9\u4E2A\u53EF\u4EE5\u4EFB\u610F\u547D\u540D\uFF0C\u8FD9\u91CC\u6211\u547D\u540D\u6210\u8981\u62F7\u8D1D\u7684Jenkins\u7684IP</p><p><strong>Url</strong>: \u6307\u8981\u4ECE\u54EA\u91CC\u62F7\u8D1D\u7684Jenkins\u7684URL\uFF0C\u73B0\u5728\u6211\u4EEC\u8981\u4ECE192.168.9.10\u62F7\u8D1Djob\uFF0C\u56E0\u6B64\u8FD9\u91CC\u8981\u8BBE\u7F6E\u6210192.168.9.10\u7684Jenkins\u7684URL</p><p><strong>Credentials</strong>\uFF1A\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u65E7Jenkins\u7684\u8D26\u53F7\uFF08\u4E5F\u5C31\u662F192.168.9.10\u7684\u8D26\u53F7\uFF09\uFF0C\u6CA1\u6709\u6DFB\u52A0\u7684\u65F6\u5019\u70B9\u51FBAdd\u624B\u52A8\u6DFB\u52A0\u4E0B\uFF0C\u5C31\u53EF\u4EE5\u50CF\u4E0A\u9762\u7684\u622A\u56FE\u4E00\u6837\u4E0B\u62C9\u9009\u62E9\u5230\u8FD9\u4E2A\u8D26\u53F7\u4E86</p><p>\u8BBE\u7F6E\u5B8C\u540E\u70B9\u51FB\u4FDD\u5B58\u4E0B\uFF0C\u56DE\u5230Jenkins\u9996\u9875\u70B9\u51FBJob Import Plugin\u5C31\u53EF\u4EE5\u8FDB\u884CJob\u7684\u8FC1\u79FB\u4E86\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/uov6bpo6hk.jpeg" alt="img" loading="lazy"></p><p>\u5728Job Import Plugin\u754C\u9762\uFF0C\u4E0B\u62C9\u9009\u62E9\u521A\u624D\u6DFB\u52A0\u7684\u914D\u7F6E\uFF0C\u7136\u540E\u70B9\u51FBQuery\u6309\u94AE\u5C31\u53EF\u4EE5\u641C\u7D22\u51FA\u914D\u7F6E\u7684Jenkins\u4E0B\u7684job\u4E86\uFF0C\u7136\u540E\u9009\u62E9\u9700\u8981\u7684job\u8FDB\u884C\u8FC1\u79FB\u5BFC\u5165\u5373\u53EF\uFF1A</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/v71i68ivlj.jpeg" alt="img" loading="lazy"></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/o6jxwkuuba.jpeg" alt="img" loading="lazy"></p><p>\u56E0\u4E3A\u6709\u65F6\u5019\u65E7\u7684Jenkins\u4E0A\u7684\u63D2\u4EF6\u65B0Jenkins\u4E0A\u672A\u5FC5\u6709\uFF0C\u56E0\u6B64\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u52FE\u9009\u662F\u5426\u9700\u8981\u5B89\u88C5\u5FC5\u8981\u7684\u63D2\u4EF6\uFF0C\u5982\u4E0A\u9762\u7684\u622A\u56FE\u6240\u793A\uFF0C\u9700\u4E0D\u9700\u8981\u8986\u76D6\u5DF2\u6709\u7684job\u4E5F\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u52FE\u9009\u4E0B\u3002\u5BFC\u5165\u6210\u529F\u4F1A\u6709\u5982\u4E0B\u7684\u63D0\u793A\uFF1A</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/sqfvrcd932.jpeg" alt="img" loading="lazy"></p><p>\u6709\u4E86\u4E0A\u9762\u7684\u63D0\u793A\u540E\u5C31\u53EF\u4EE5\u4F1A\u5230\u65B0\u7684Jenkins\u7684\u9996\u9875\uFF0C\u67E5\u770BJob\u6709\u6CA1\u6709\u6210\u529F\u8FDB\u5165\uFF0C\u5E76\u8FDB\u5165\u5BFC\u5165\u7684job\u67E5\u770B\u8BBE\u7F6E\u6709\u6CA1\u6709\u6210\u529F\u7684\u590D\u5236\u8FC7\u6765\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/7j29p9rg9g.jpeg" alt="img" loading="lazy"></p><p>\u53EF\u4EE5\u770B\u5230job\u53CA\u5176\u8BBE\u7F6E\u6210\u529F\u7684\u88AB\u5BFC\u5165\u5230\u65B0\u7684job\u4E86\u3002</p><p>Job Import Pugin\u4E5F\u652F\u6301\u591A\u4E2Ajob\u540C\u65F6\u62F7\u8D1D\uFF0C\u5982\u679C\u65E7\u7684Job\u91CC\u6709\u591A\u4E2Ajob\uFF0C\u5982\u4E0A\u9762\u7684\u6B65\u9AA4\u91CC\u6240\u793A\uFF0Cquery\u51FA\u6765\u5C31\u6709\u5F88\u591Ajob\u53EF\u4F9B\u9009\u62E9\uFF0C\u53EA\u9700\u8981\u52FE\u9009\u591A\u4E2A\u5373\u53EF\u540C\u65F6\u8FDB\u884C\u591A\u4E2Ajob\u7684\u5BFC\u5165\u4E86\u3002</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/dg1ouhsl9j.jpeg" alt="img" loading="lazy"></p><h2 id="jenkins-cli\u65B9\u5F0F\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#jenkins-cli\u65B9\u5F0F\u5BFC\u5165" aria-hidden="true">#</a> <strong>Jenkins CLI\u65B9\u5F0F\u5BFC\u5165</strong></h2><p>\u6709\u65F6\u5019\u5728\u516C\u53F8\u5185\u90E8Jenkins\u90E8\u7F72\u5230\u4E0D\u540C\u7684\u7F51\u6BB5\u91CC\uFF0C\u4E0D\u540C\u7F51\u6BB5\u95F4\u53EF\u80FD\u4F1A\u9650\u5236\u65E0\u6CD5\u76F8\u4E92\u8BBF\u95EE\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u901A\u8FC7Job Import Plugin\u8FDB\u884Cjob\u5BFC\u5165\u7684\u65B9\u5F0F\u5C31\u884C\u4E0D\u901A\u4E86\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7Jenkins CLI\u65B9\u5F0F\u8FDB\u884Cjob\u914D\u7F6E\u5BFC\u51FA\uFF0C\u7136\u540E\u65B0Jenkins\u5728\u6839\u636E\u5BFC\u51FA\u7684\u914D\u7F6E\u8FDB\u884C\u518D\u5BFC\u5165\u64CD\u4F5C\uFF0C\u5B8C\u6210job\u7684\u914D\u7F6E\u8FC1\u79FB \u3002\u4E0B\u9762\u6211\u4EEC\u6765\u5177\u4F53\u8BB2\u89E3\u4E0B\u3002</p><p>\u73B0\u5230\u65E7Jenkins\u4E0B\u7684Jenkins\u7BA1\u7406\u9875\u9762\u627E\u5230Jenkins CLI\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/2yywfzeqrj.jpeg" alt="img" loading="lazy"></p><p>\u70B9\u51FB\u8FDB\u5165Jenkins CLI\uFF0C\u53EF\u4EE5\u770B\u5230Jenkins\u547D\u4EE4\u884C\u63A5\u53E3\u63D0\u4F9B\u5F88\u591A\u547D\u4EE4\u53EF\u4EE5\u7528\u6765\u8FDB\u884CJenkins\u7684\u76F8\u5173\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u770B\u5230\u6709\u63D0\u4F9B\u4E86get-job\u8FD9\u6837\u4E00\u4E2A\u547D\u4EE4\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u53EF\u4EE5\u5C06job\u7684\u5B9A\u4E49\u5BFC\u51FA\u5230xml\u7684\u683C\u5F0F\u5230\u8F93\u51FA\u6D41\uFF0C\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u547D\u4EE4\u5C06\u65E7Jenkins\u4E0A\u7684job\u5BFC\u51FA\u5230\u5916\u90E8\u6587\u4EF6\uFF0C\u7136\u540E\u8FD8\u53EF\u4EE5\u770B\u5230\u6709\u53E6\u5916\u4E00\u4E2A\u547D\u4EE4create-job\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u53EF\u4EE5\u6839\u636E\u5DF2\u6709\u7684xml\u914D\u7F6E\u6587\u4EF6\u8FDB\u884Cjob\u521B\u5EFA\uFF0C\u90A3\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u4ECE\u65E7job\u5BFC\u51FA\u7684job\u914D\u7F6E\u6587\u4EF6\u505A\u4E3A\u8F93\u5165\u8FDB\u884Cjob\u7684\u521B\u5EFA\u4E86\u3002</p><p>\u9996\u5148\u5728\u65E7\u7684Jenkins\u4E0A\u7684cli\u9875\u9762\u70B9\u51FBjenkins-cli.jar\u5C31\u53EF\u4EE5\u4E0B\u8F7D\u8FD9\u4E2Ajar\u5230\u672C\u5730\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/g1ltwl2a3o.jpeg" alt="img" loading="lazy"></p><p>\u63A5\u7740\u70B9\u51FB\u4E0BJenkins\u53F3\u4E0A\u89D2\u7684\u8D26\u53F7\uFF0C\u9009\u62E9Configure\uFF0C\u7136\u540E\u70B9\u51FBShow API Token\uFF0C\u62F7\u8D1Dtoken\uFF0C\u8FD9\u4E2Atoken\u53EF\u4EE5\u7528\u6765\u8FDB\u884C\u914D\u7F6E\u5BFC\u51FA\u7684\u65F6\u5019\u505A\u4E3A\u8BA4\u8BC1\u4F7F\u7528</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/u30td2vuwj.jpeg" alt="img" loading="lazy"></p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/yrwhwenjqe.jpeg" alt="img" loading="lazy"></p><p>\u5728jenkins-cli.jar\u4E0B\u8F7D\u7684\u6839\u76EE\u5F55\u4E0B\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u8FDB\u884Cjob\u5BFC\u51FA\uFF0C\u8FD9\u91CC\u6211\u65B0\u5EFA\u4E86\u4E2Ajob\uFF0C\u547D\u540D\u4E3Atest4\uFF0C\u73B0\u5728\u6267\u884C\u4E0B\u5982\u4E0B\u547D\u4EE4\u8FDB\u884Ctest4\u8FD9\u4E2Ajob\u914D\u7F6E\u7684\u5BFC\u51FA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> java <span class="token operator">-</span>jar jenkins<span class="token operator">-</span>cli<span class="token punctuation">.</span>jar <span class="token operator">-</span>s http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.9</span><span class="token number">.10</span><span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>jenkins <span class="token operator">-</span>auth admin<span class="token operator">:</span>493375c06bc0006a455005804796c989 get<span class="token operator">-</span>job <span class="token string">&quot;test4&quot;</span> <span class="token operator">&gt;</span> test4<span class="token punctuation">.</span>xml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>http://192.168.9.10:8080/jenkins:</strong> \u5C31Job\u7684Jenkins\u5730\u5740</p><p><strong>admin\uFF1A</strong> \u4E0A\u9762\u622A\u56FE\u83B7\u53D6Show API Token\u4E0B\u7684User ID</p><p>**493375c06bc0006a455005804796c989\uFF1A**\u4E0A\u9762\u622A\u56FE\u83B7\u53D6API Token\u7684\u503C</p><p><strong>test4:</strong> \u9700\u8981\u5BFC\u51FA\u914D\u7F6E\u7684job\u540D</p><p><strong>test4.xml:</strong> \u5BFC\u51FA\u7684\u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u53EF\u4EFB\u610F</p><p>\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u66FF\u6362\u4E0B\u4E0A\u9762\u7684\u56DB\u4E2A\u503C\u5373\u53EF</p><p>\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u547D\u4EE4\u5C31\u53EF\u4EE5\u770B\u5230test4.xml\u6587\u4EF6\u751F\u6210\u4E86</p><p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/xf64g5cl00.jpeg" alt="img" loading="lazy"></p><p>\u63A5\u7740\u5728\u65B0\u7684Jenkins\u4E0B\u540C\u6837\u5148\u4E0B\u8F7D\u4E0Bjenkins-cli.jar\uFF0C\u7136\u540E\u5C06\u4E0A\u9762\u751F\u6210\u7684test4.xml\u62F7\u8D1D\u5230\u65B0\u7684Jenkins\u673A\u5668\u4E0B\uFF0C\u540C\u6837\u83B7\u53D6\u4E0B\u65B0Jenkins\u767B\u5F55\u8D26\u53F7\u7684API Token\u548CUser ID\uFF0C\u6267\u884C\u4E0B\u5982\u4E0B\u547D\u4EE4\u5C31\u53EF\u4EE5\u8FDB\u884Cjob\u5BFC\u5165\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>java <span class="token operator">-</span>jar jenkins<span class="token operator">-</span>cli<span class="token punctuation">.</span>jar <span class="token operator">-</span>s http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.9</span><span class="token number">.8</span><span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>jenkins <span class="token operator">-</span>auth admin<span class="token operator">:</span>51964e7b89a427be5dd2a28f38c86eff create<span class="token operator">-</span>job test4 <span class="token operator">&lt;</span>  test4<span class="token punctuation">.</span>xml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8BB0\u5F97\u5C06URL\u66FF\u6362\u6210\u65B0Jenkins\u7684URL\uFF0CUser ID\u548Ctoken\u4E5F\u66FF\u6362\u4E0B</p><p>\u4E0A\u9762\u7684\u547D\u4EE4\u6267\u884C\u5B8C\u540E\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u5728\u65B0\u7684Jenkins\u4E0B\u65B0job\u88AB\u6210\u529F\u5BFC\u5165\u4E86</p><blockquote><p>\u8F6C\u8F7D\u94FE\u63A5\uFF1Ahttps://cloud.tencent.com/developer/article/1470433</p></blockquote>`,51);function p(e,t){return o}var l=s(a,[["render",p],["__file","migrate-job.html.vue"]]);export{l as default};
