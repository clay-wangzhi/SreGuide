import{_ as n,e as s}from"./app.4792bd1f.js";const a={},e=s(`<p>vmstat\u662FVirtual Meomory Statistics\uFF08\u865A\u62DF\u5185\u5B58\u7EDF\u8BA1\uFF09\u7684\u7F29\u5199\uFF0C\u53EF\u5BF9\u64CD\u4F5C\u7CFB\u7EDF\u7684\u865A\u62DF\u5185\u5B58\u3001\u8FDB\u7A0B\u3001CPU\u6D3B\u52A8\u8FDB\u884C\u76D1\u63A7\u3002\u4ED6\u662F\u5BF9\u7CFB\u7EDF\u6574\u4F53\u60C5\u51B5\u8FDB\u884C\u7EDF\u8BA1\uFF0C\u4E0D\u8DB3\u4E4B\u5904\u662F\u65E0\u6CD5\u5BF9\u67D0\u4E2A\u8FDB\u7A0B\u4ECA\u6B21\u90A3\u4E2A\u6DF1\u5165\u5206\u6790\u3002vmstat\u5DE5\u5177\u63D0\u4F9B\u4E86\u4E00\u79CD\u4F4E\u5F00\u9500\u7684\u7CFB\u7EDF\u6027\u80FD\u89C2\u5BDF\u65B9\u5F0F\u3002\u56E0\u4E3Avmstat\u672C\u8EAB\u5C31\u662F\u4F4E\u5F00\u9500\u5DE5\u5177\uFF0C\u5728\u975E\u5E38\u9AD8\u8D1F\u8377\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u4F60\u9700\u8981\u67E5\u770B\u5E76\u76D1\u63A7\u7CFB\u7EDF\u7684\u5065\u5EB7\u60C5\u51B5\uFF0C\u5728\u63A7\u5236\u7A97\u53E3\u8FD8\u662F\u80FD\u591F\u4F7F\u7528vmstat\u547D\u4EE4\u524D\uFF0C\u6211\u4EEC\u5148\u4E86\u89E3\u4E0BLinux\u7CFB\u7EDF\u4E2D\u5173\u4E8E\u7269\u7406\u5185\u5B58\u548C\u865A\u62DF\u5185\u5B58\u76F8\u5173\u4FE1\u606F\u3002</p><p>\u7269\u7406\u5185\u5B58\u548C\u865A\u62DF\u5185\u5B58\u533A\u522B\uFF1A</p><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u76F4\u63A5\u4ECE\u7269\u7406\u5185\u5B58\u8BFB\u53D6\u6570\u636E\u8981\u6BD4\u4ECE\u786C\u76D8\u8BFB\u5199\u6570\u636E\u8981\u5FEB\u7684\u591A\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u5E0C\u671B\u6240\u6709\u6570\u636E\u7684\u8BFB\u53D6\u548C\u5199\u5165\u90FD\u5728\u5185\u5B58\u5B8C\u6210\uFF0C\u800C\u5185\u5B58\u662F\u6709\u9650\u7684\uFF0C\u8FD9\u6837\u5C31\u5F15\u51FA\u4E86\u7269\u7406\u5185\u5B58\u4E0E\u865A\u62DF\u5185\u5B58\u7684\u6982\u5FF5\u3002</p><p>\u7269\u7406\u5185\u5B58\u5C31\u662F\u7CFB\u7EDF\u786C\u4EF6\u63D0\u4F9B\u7684\u5185\u5B58\u5927\u5C0F\uFF0C\u662F\u771F\u6B63\u7684\u5185\u5B58\uFF0C\u5728linux\u4E0B\u8FD8\u6709\u4E00\u4E2A\u865A\u62DF\u5185\u5B58\u7684\u6982\u5FF5\uFF0C\u865A\u62DF\u5185\u5B58\u5C31\u662F\u4E3A\u4E86\u6EE1\u8DB3\u7269\u7406\u5185\u5B58\u7684\u4E0D\u8DB3\u800C\u63D0\u51FA\u7684\u7B56\u7565\uFF0C\u5B83\u662F\u5229\u7528\u78C1\u76D8\u7A7A\u95F4\u865A\u62DF\u51FA\u7684\u4E00\u5757\u903B\u8F91\u5185\u5B58\uFF0C\u7528\u4F5C\u865A\u62DF\u5185\u5B58\u7684\u78C1\u76D8\u7A7A\u95F4\u88AB\u79F0\u4E3A\u4EA4\u6362\u7A7A\u95F4\uFF08Swap Space\uFF09\u3002</p><p>\u4F5C\u4E3A\u7269\u7406\u5185\u5B58\u7684\u6269\u5C55\uFF0Clinux\u4F1A\u5728\u7269\u7406\u5185\u5B58\u4E0D\u8DB3\u65F6\uFF0C\u4F7F\u7528\u4EA4\u6362\u5206\u533A\u7684\u865A\u62DF\u5185\u5B58\uFF0C\u66F4\u8BE6\u7EC6\u7684\u8BF4\uFF0C\u5C31\u662F\u5185\u6838\u4F1A\u5C06\u6682\u65F6\u4E0D\u7528\u7684\u5185\u5B58\u5757\u4FE1\u606F\u5199\u5230\u4EA4\u6362\u7A7A\u95F4\uFF0C\u8FD9\u6837\u4EE5\u6765\uFF0C\u7269\u7406\u5185\u5B58\u5F97\u5230\u4E86\u91CA\u653E\uFF0C\u8FD9\u5757\u5185\u5B58\u5C31\u662F\u7528\u4E8E\u5176\u76EE\u7684\uFF0C\u5F53\u9700\u8981\u7528\u5230\u539F\u59CB\u7684\u5185\u5BB9\u65F6\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u4F1A\u88AB\u91CD\u65B0\u4ECE\u4EA4\u6362\u7A7A\u95F4\u8BFB\u5165\u7269\u7406\u5185\u5B58\u3002</p><p>linux\u7684\u5185\u5B58\u7BA1\u7406\u91C7\u53D6\u7684\u662F\u5206\u9875\u5B58\u53D6\u673A\u5236\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u7269\u7406\u5185\u5B58\u80FD\u5F97\u5230\u5145\u5206\u7684\u5229\u7528\uFF0C\u5185\u6838\u4F1A\u5728\u9002\u5F53\u7684\u65F6\u5019\u8BB2\u7269\u7406\u5185\u5B58\u4E2D\u4E0D\u7ECF\u5E38\u4F7F\u7528\u7684\u6570\u636E\u5757\u81EA\u52A8\u4EA4\u6362\u5230\u865A\u62DF\u5185\u5B58\u4E2D\uFF0C\u800C\u5C06\u7ECF\u5E38\u4F7F\u7528\u7684\u4FE1\u606F\u4FDD\u7559\u5230\u7269\u7406\u5185\u5B58\u3002</p><p>\u8981\u6DF1\u5165\u4E86\u89E3linux\u5185\u5B58\u8FD0\u884C\u673A\u5236\uFF0C\u9700\u8981\u77E5\u9053\u4E0B\u9762\u63D0\u5230\u7684\u51E0\u4E2A\u65B9\u9762\uFF1A</p><p>\u9996\u5148\uFF0Clinux\u7CFB\u7EDF\u4F1A\u4E0D\u65F6\u7684\u8FDB\u884C\u9875\u9762\uFF0C\u4EE5\u4FDD\u6301\u5C3D\u53EF\u80FD\u591A\u7684\u7A7A\u95F2\u7269\u7406\u5185\u5B58\uFF0C\u5373\u4F7F\u5E76\u6CA1\u6709\u4EC0\u4E48\u4E8B\u60C5\u9700\u8981\u5185\u5B58\uFF0Clinux\u4E5F\u4F1A\u4EA4\u6362\u51FA\u6682\u65F6\u4E0D\u7528\u7684\u5185\u5B58\u9875\u9762\u3002\u8FD9\u53EF\u4EE5\u907F\u514D\u7B49\u5F85\u4EA4\u4E92\u6240\u9700\u7684\u65F6\u95F4\u3002</p><p>\u5176\u6B21\uFF0Clinux\u8FDB\u884C\u9875\u9762\u4EA4\u6362\u662F\u6709\u6761\u4EF6\u7684\uFF0C\u4E0D\u65F6\u6240\u6709\u9875\u9762\u5728\u4E0D\u7528\u65F6\u90FD\u4EA4\u6362\u5230\u865A\u62DF\u5185\u5B58\uFF0Clinux\u5185\u6838\u6839\u636E\u201C\u6700\u8FD1\u6700\u7ECF\u5E38\u4F7F\u7528\u201D\u7B97\u6CD5\uFF0C\u4EC5\u4EC5\u5C06\u4E00\u4E9B\u4E0D\u7ECF\u5E38\u4F7F\u7528\u7684\u9875\u9762\u6587\u4EF6\u4EA4\u6362\u5230\u865A\u62DF\u5185\u5B58\uFF0C\u6709\u65F6\u6211\u4EEC\u4F1A\u770B\u5230\u8FD9\u4E48\u4E00\u4E2A\u73B0\u8C61\uFF1Alinux\u7269\u7406\u5185\u5B58\u8FD8\u6709\u5F88\u591A\uFF0C\u4F46\u662F\u4EA4\u6362\u7A7A\u95F4\u4E5F\u4F7F\u7528\u4E86\u5F88\u591A\u3002\u5176\u5B9E\uFF0C\u8FD9\u5E76\u4E0D\u5947\u602A\uFF0C\u4F8B\u5982\uFF0C\u4E00\u4E2A\u5360\u7528\u5F88\u5927\u5185\u5B58\u7684\u8FDB\u7A0B\u8FD0\u884C\u65F6\uFF0C\u9700\u8981\u8017\u8D39\u5F88\u591A\u5185\u5B58\u8D44\u6E90\uFF0C\u6B64\u65F6\u5C31\u4F1A\u6709\u4E00\u4E9B\u4E0D\u5E38\u7528\u9875\u9762\u6587\u4EF6\u88AB\u4EA4\u6362\u5230\u865A\u62DF\u5185\u5B58\u4E2D\uFF0C\u4F46\u540E\u6765\u8FD9\u4E2A\u5360\u7528\u5F88\u591A\u5185\u5B58\u8D44\u6E90\u7684\u8FDB\u7A0B\u7ED3\u675F\u5E76\u91CA\u653E\u4E86\u5F88\u591A\u5185\u5B58\u662F\uFF0C\u521A\u624D\u88AB\u4EA4\u6362\u51FA\u53BB\u7684\u9875\u9762\u6587\u4EF6\u5E76\u4E0D\u4F1A\u81EA\u52A8\u7684\u4EA4\u6362\u8FDB\u7269\u7406\u5185\u5B58\uFF0C\u9664\u975E\u6709\u8FD9\u4E2A\u5FC5\u8981\uFF0C\u90A3\u4E48\u6B64\u523B\u7CFB\u7EDF\u7269\u7406\u5185\u5B58\u5C31\u4F1A\u7A7A\u95F2\u5F88\u591A\uFF0C\u540C\u65F6\u4EA4\u6362\u7A7A\u95F4\u4E5F\u5728\u88AB\u4F7F\u7528\uFF0C\u5C31\u51FA\u73B0\u4E86\u521A\u624D\u6240\u8BF4\u7684\u73B0\u8C61\u4E86\u3002\u5173\u4E8E\u8FD9\u70B9\uFF0C\u4E0D\u7528\u62C5\u5FC3\u4EC0\u4E48\uFF0C\u53EA\u8981\u77E5\u9053\u662F\u600E\u4E48\u4E00\u56DE\u4E8B\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u6700\u540E\uFF0C\u4EA4\u6362\u7A7A\u95F4\u7684\u9875\u9762\u5728\u4F7F\u7528\u65F6\u4F1A\u9996\u5148\u88AB\u4EA4\u6362\u5230\u7269\u7406\u5185\u5B58\uFF0C\u5982\u679C\u6B64\u65F6\u6CA1\u6709\u8DB3\u591F\u7684\u7269\u7406\u5185\u5B58\u6765\u5BB9\u7EB3\u8FD9\u4E9B\u9875\u9762\uFF0C\u4ED6\u4EEC\u53C8\u4F1A\u88AB\u9A6C\u4E0A\u4EA4\u6362\u51FA\u53BB\uFF0C\u5982\u6B64\u4EE5\u6765\uFF0C\u865A\u62DF\u5185\u5B58\u4E2D\u53EF\u80FD\u6CA1\u6709\u8DB3\u591F\u7A7A\u95F4\u6765\u5B58\u50A8\u8FD9\u4E9B\u4EA4\u6362\u9875\u9762\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4linux\u51FA\u73B0\u5047\u6B7B\u673A\u3001\u670D\u52A1\u5F02\u5E38\u7B49\u95EE\u9898\uFF0Clinux\u867D\u7136\u53EF\u4EE5\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u81EA\u884C\u6062\u590D\uFF0C\u4F46\u662F\u6062\u590D\u540E\u7684\u7CFB\u7EDF\u5DF2\u7ECF\u57FA\u672C\u4E0D\u53EF\u7528\u4E86\u3002</p><p>\u56E0\u6B64\uFF0C\u5408\u7406\u89C4\u5212\u548C\u8BBE\u8BA1linux\u5185\u5B58\u7684\u4F7F\u7528\uFF0C\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002</p><p>\u865A\u62DF\u5185\u5B58\u539F\u7406\uFF1A</p><p>\u5728\u7CFB\u7EDF\u4E2D\u8FD0\u884C\u7684\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u9700\u8981\u4F7F\u7528\u5230\u5185\u5B58\uFF0C\u4F46\u4E0D\u662F\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u9700\u8981\u6BCF\u65F6\u6BCF\u523B\u4F7F\u7528\u7CFB\u7EDF\u5206\u914D\u7684\u5185\u5B58\u7A7A\u95F4\u3002\u5F53\u7CFB\u7EDF\u8FD0\u884C\u6240\u9700\u5185\u5B58\u8D85\u8FC7\u5B9E\u9645\u7684\u7269\u7406\u5185\u5B58\uFF0C\u5185\u6838\u4F1A\u91CA\u653E\u67D0\u4E9B\u8FDB\u7A0B\u6240\u5360\u7528\u4F46\u672A\u4F7F\u7528\u7684\u90E8\u5206\u6216\u6240\u6709\u7269\u7406\u5185\u5B58\uFF0C\u5C06\u8FD9\u90E8\u5206\u8D44\u6599\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A\u76F4\u5230\u8FDB\u7A0B\u4E0B\u4E00\u6B21\u8C03\u7528\uFF0C\u5E76\u5C06\u91CA\u653E\u51FA\u7684\u5185\u5B58\u63D0\u4F9B\u7ED9\u6709\u9700\u8981\u7684\u8FDB\u7A0B\u4F7F\u7528\u3002</p><p>\u5728linux\u5185\u5B58\u7BA1\u7406\u4E2D\uFF0C\u4E3B\u8981\u662F\u901A\u8FC7\u201C\u8C03\u9875Paging\u201D\u548C\u201C\u4EA4\u6362Swapping\u201D\u6765\u5B8C\u6210\u4E0A\u8FF0\u7684\u5185\u5B58\u8C03\u5EA6\u3002\u8C03\u9875\u7B97\u6CD5\u662F\u5C06\u5185\u5B58\u4E2D\u6700\u8FD1\u4E0D\u5E38\u4F7F\u7528\u7684\u9875\u9762\u6362\u5230\u78C1\u76D8\u4E0A\uFF0C\u628A\u6D3B\u52A8\u9875\u9762\u4FDD\u7559\u5728\u5185\u5B58\u4E2D\u4F9B\u8FDB\u7A0B\u4F7F\u7528\u3002\u4EA4\u6362\u6280\u672F\u662F\u5C06\u6574\u4E2A\u8FDB\u7A0B\uFF0C\u800C\u4E0D\u662F\u90E8\u5206\u9875\u9762\uFF0C\u5168\u90E8\u4EA4\u6362\u5230\u78C1\u76D8\u4E0A\u3002</p><p>\u5206\u9875\uFF08Page\uFF09\u5199\u5165\u78C1\u76D8\u7684\u8FC7\u7A0B\u88AB\u79F0\u4F5CPage-Out\uFF0C\u5206\u9875\uFF08Page\uFF09\u4ECE\u78C1\u76D8\u91CD\u65B0\u56DE\u5230\u5185\u5B58\u7684\u8FC7\u7A0B\u88AB\u79F0\u4F5CPage-In\u3002\u5F53\u5185\u6838\u9700\u8981\u4E00\u4E2A\u5206\u9875\u65F6\uFF0C\u4F46\u53D1\u73B0\u6B64\u5206\u9875\u4E0D\u5728\u7269\u7406\u5185\u5B58\u4E2D\uFF08\u56E0\u4E3A\u5DF2\u7ECF\u88ABPage-Out\u4E86\uFF09\uFF0C\u6B64\u65F6\u5C31\u53D1\u751F\u4E86\u5206\u9875\u9519\u8BEF\uFF08Page Fault\uFF09\u3002</p><p>\u5F53\u7CFB\u7EDF\u5185\u6838\u53D1\u73B0\u53EF\u8FD0\u884C\u5185\u5B58\u53D8\u5C11\u65F6\uFF0C\u5C31\u4F1A\u901A\u8FC7Page-Out\u6765\u91CA\u653E\u4E00\u90E8\u5206\u7269\u7406\u5185\u5B58\u3002\u5C3D\u7BA1Page-Out\u4E0D\u662F\u7ECF\u5E38\u53D1\u751F\uFF0C\u4F46\u662F\u5982\u679CPage-out\u9891\u7E41\u4E0D\u65AD\u7684\u53D1\u751F\uFF0C\u76F4\u5230\u5F53\u5185\u6838\u7BA1\u7406\u5206\u9875\u7684\u65F6\u95F4\u8D85\u8FC7\u8FD0\u884C\u7A0B\u5F0F\u7684\u65F6\u95F4\u65F6\uFF0C\u7CFB\u7EDF\u6548\u80FD\u4F1A\u6025\u5267\u4E0B\u964D\u3002\u8FD9\u65F6\u7684\u7CFB\u7EDF\u5DF2\u7ECF\u8FD0\u884C\u975E\u5E38\u6162\u6216\u8FDB\u5165\u6682\u505C\u72B6\u6001\uFF0C\u8FD9\u79CD\u72B6\u6001\u4E5F\u88AB\u79F0\u4F5Cthrashing\uFF08\u98A0\u7C38\uFF09\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p><code>vmstat(\u9009\u9879)(\u53C2\u6570)</code></p><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-a\uFF1A\u663E\u793A\u6D3B\u52A8\u5185\u9875\uFF1B
-f\uFF1A\u663E\u793A\u542F\u52A8\u540E\u521B\u5EFA\u7684\u8FDB\u7A0B\u603B\u6570\uFF1B
-m\uFF1A\u663E\u793Aslab\u4FE1\u606F\uFF1B
-n\uFF1A\u5934\u4FE1\u606F\u4EC5\u663E\u793A\u4E00\u6B21\uFF1B
-s\uFF1A\u4EE5\u8868\u683C\u65B9\u5F0F\u663E\u793A\u4E8B\u4EF6\u8BA1\u6570\u5668\u548C\u5185\u5B58\u72B6\u6001\uFF1B
-d\uFF1A\u62A5\u544A\u78C1\u76D8\u72B6\u6001\uFF1B
-p\uFF1A\u663E\u793A\u6307\u5B9A\u7684\u786C\u76D8\u5206\u533A\u72B6\u6001\uFF1B
-S\uFF1A\u8F93\u51FA\u4FE1\u606F\u7684\u5355\u4F4D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li>\u4E8B\u4EF6\u95F4\u9694\uFF1A\u72B6\u6001\u4FE1\u606F\u5237\u65B0\u7684\u65F6\u95F4\u95F4\u9694\uFF1B</li><li>\u6B21\u6570\uFF1A\u663E\u793A\u62A5\u544A\u7684\u6B21\u6570\u3002</li></ul><h2 id="\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u5B9E\u4F8B</h2><p>1\uFF09\u663E\u793A\u865A\u62DF\u5185\u5B58\u4F7F\u7528\u60C5\u51B5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vmstat 5 6
procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu------
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 0      0 3029876 199616 690980    0    0     0     2    3    2  0  0 100  0  0
 0      0 3029752 199616 690980    0    0     0    41 1009   39  0  0 100  0  0
 0      0 3029752 199616 690980    0    0     0     3 1004   36  0  0 100  0  0
 0      0 3029752 199616 690980    0    0     0     4 1004   36  0  0 100  0  0
 0      0 3029752 199616 690980    0    0     0     6 1003   33  0  0 100  0  0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u5B57\u6BB5\u8BF4\u660E\uFF1A</p><p>Procs\uFF08\u8FDB\u7A0B\uFF09\uFF1A</p><p>r: \u8FD0\u884C\u961F\u5217\u4E2D\u8FDB\u7A0B\u6570\u91CF</p><p>b: \u7B49\u5F85IO\u7684\u8FDB\u7A0B\u6570\u91CF</p><p>Memory\uFF08\u5185\u5B58\uFF09\uFF1A</p><p>swpd: \u4F7F\u7528\u865A\u62DF\u5185\u5B58\u5927\u5C0F</p><p>free: \u53EF\u7528\u5185\u5B58\u5927\u5C0F</p><p>buff: \u7528\u4F5C\u7F13\u51B2\u7684\u5185\u5B58\u5927\u5C0F</p><p>cache: \u7528\u4F5C\u7F13\u5B58\u7684\u5185\u5B58\u5927\u5C0F</p><p>Swap\uFF1A</p><p>si: \u6BCF\u79D2\u4ECE\u4EA4\u6362\u533A\u5199\u5230\u5185\u5B58\u7684\u5927\u5C0F</p><p>so: \u6BCF\u79D2\u5199\u5165\u4EA4\u6362\u533A\u7684\u5185\u5B58\u5927\u5C0F</p><p>IO\uFF1A\uFF08\u73B0\u5728\u7684Linux\u7248\u672C\u5757\u7684\u5927\u5C0F\u4E3A1024bytes\uFF09</p><p>bi: \u6BCF\u79D2\u8BFB\u53D6\u7684\u5757\u6570</p><p>bo: \u6BCF\u79D2\u5199\u5165\u7684\u5757\u6570</p><p>\u7CFB\u7EDF\uFF1A</p><p>in: \u6BCF\u79D2\u4E2D\u65AD\u6570\uFF0C\u5305\u62EC\u65F6\u949F\u4E2D\u65AD\u3002</p><p>cs: \u6BCF\u79D2\u4E0A\u4E0B\u6587\u5207\u6362\u6570\u3002</p><p>CPU\uFF08\u4EE5\u767E\u5206\u6BD4\u8868\u793A\uFF09\uFF1A</p><p>us: \u7528\u6237\u8FDB\u7A0B\u6267\u884C\u65F6\u95F4(user time)</p><p>sy: \u7CFB\u7EDF\u8FDB\u7A0B\u6267\u884C\u65F6\u95F4(system time)</p><p>id: \u7A7A\u95F2\u65F6\u95F4(\u5305\u62ECIO\u7B49\u5F85\u65F6\u95F4),\u4E2D\u592E\u5904\u7406\u5668\u7684\u7A7A\u95F2\u65F6\u95F4 \u3002\u4EE5\u767E\u5206\u6BD4\u8868\u793A\u3002</p><p>wa: \u7B49\u5F85IO\u65F6\u95F4</p><p>\u5907\u6CE8\uFF1A \u5982\u679C r\u7ECF\u5E38\u5927\u4E8E 4 \uFF0C\u4E14id\u7ECF\u5E38\u5C11\u4E8E40\uFF0C\u8868\u793Acpu\u7684\u8D1F\u8377\u5F88\u91CD\u3002\u5982\u679Cpi\uFF0Cpo \u957F\u671F\u4E0D\u7B49\u4E8E0\uFF0C\u8868\u793A\u5185\u5B58\u4E0D\u8DB3\u3002\u5982\u679Cdisk \u7ECF\u5E38\u4E0D\u7B49\u4E8E0\uFF0C \u4E14\u5728 b\u4E2D\u7684\u961F\u5217 \u5927\u4E8E3\uFF0C \u8868\u793A io\u6027\u80FD\u4E0D\u597D\u3002Linux\u5728\u5177\u6709\u9AD8\u7A33\u5B9A\u6027\u3001\u53EF\u9760\u6027\u7684\u540C\u65F6\uFF0C\u5177\u6709\u5F88\u597D\u7684\u53EF\u4F38\u7F29\u6027\u548C\u6269\u5C55\u6027\uFF0C\u80FD\u591F\u9488\u5BF9\u4E0D\u540C\u7684\u5E94\u7528\u548C\u786C\u4EF6\u73AF\u5883\u8C03\u6574\uFF0C\u4F18\u5316\u51FA\u6EE1\u8DB3\u5F53\u524D\u5E94\u7528\u9700\u8981\u7684\u6700\u4F73\u6027\u80FD\u3002\u56E0\u6B64\u4F01\u4E1A\u5728\u7EF4\u62A4Linux\u7CFB\u7EDF\u3001\u8FDB\u884C\u7CFB\u7EDF\u8C03\u4F18\u65F6\uFF0C\u4E86\u89E3\u7CFB\u7EDF\u6027\u80FD\u5206\u6790\u5DE5\u5177\u662F\u81F3\u5173\u91CD\u8981\u7684\u3002</p><p>\u547D\u4EE4\uFF1A</p><p>vmstat 5 5</p><p>\u8868\u793A\u57285\u79D2\u65F6\u95F4\u5185\u8FDB\u884C5\u6B21\u91C7\u6837\u3002\u5C06\u5F97\u5230\u4E00\u4E2A\u6570\u636E\u6C47\u603B\u4ED6\u80FD\u591F\u53CD\u6620\u771F\u6B63\u7684\u7CFB\u7EDF\u60C5\u51B5\u3002</p><p>2\uFF09\u663E\u793A\u6D3B\u8DC3\u548C\u975E\u6D3B\u8DC3\u5185\u5B58</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vmstat -a 2 5
procs -----------memory---------- ---swap-- -----io---- --system-- -----cpu------
 r  b   swpd   free  inact active   si   so    bi    bo   in   cs us sy id wa st
 0  0      0 3029752 387728 513008    0    0     0     2    3    2  0  0 100  0  0
 0  0      0 3029752 387728 513076    0    0     0     0 1005   34  0  0 100  0  0
 0  0      0 3029752 387728 513076    0    0     0    22 1004   36  0  0 100  0  0
 0  0      0 3029752 387728 513076    0    0     0     0 1004   33  0  0 100  0  0
 0  0      0 3029752 387728 513076    0    0     0     0 1003   32  0  0 100  0  0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u4F7F\u7528-a\u9009\u9879\u663E\u793A\u6D3B\u8DC3\u548C\u975E\u6D3B\u8DC3\u5185\u5B58\u65F6\uFF0C\u6240\u663E\u793A\u7684\u5185\u5BB9\u9664\u589E\u52A0inact\u548Cactive\u5916\uFF0C\u5176\u4ED6\u663E\u793A\u5185\u5BB9\u4E0E\u4F8B\u5B501\u76F8\u540C\u3002</p><p>\u5B57\u6BB5\u8BF4\u660E\uFF1A</p><p>Memory\uFF08\u5185\u5B58\uFF09\uFF1A</p><p>inact: \u975E\u6D3B\u8DC3\u5185\u5B58\u5927\u5C0F\uFF08\u5F53\u4F7F\u7528-a\u9009\u9879\u65F6\u663E\u793A\uFF09</p><p>active: \u6D3B\u8DC3\u7684\u5185\u5B58\u5927\u5C0F\uFF08\u5F53\u4F7F\u7528-a\u9009\u9879\u65F6\u663E\u793A\uFF09</p><p>3\uFF09\u67E5\u770B\u7CFB\u7EDF\u5DF2\u7ECFfork\u4E86\u591A\u5C11\u6B21</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vmstat -f
     12744849 forks
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u8FD9\u4E2A\u6570\u636E\u662F\u4ECE/proc/stat\u4E2D\u7684processes\u5B57\u6BB5\u91CC\u53D6\u5F97\u7684</p><p>4\uFF09\u67E5\u770B\u5185\u5B58\u4F7F\u7528\u7684\u8BE6\u7EC6\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vmstat -s
      4043760  total memory
      1013884  used memory
       513012  active memory
       387728  inactive memory
      3029876  free memory
       199616  buffer memory
       690980  swap cache
      6096656  total swap
            0  used swap
      6096656  free swap
        83587 non-nice user cpu ticks
          132 nice user cpu ticks
       278599 system cpu ticks
    913344692 idle cpu ticks
       814550 IO-wait cpu ticks
        10547 IRQ cpu ticks
        21261 softirq cpu ticks
            0 stolen cpu ticks
       310215 pages paged in
     14254652 pages paged out
            0 pages swapped in
            0 pages swapped out
    288374745 interrupts
    146680577 CPU context switches
   1351868832 boot time
       367291 forks 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u8FD9\u4E9B\u4FE1\u606F\u7684\u5206\u522B\u6765\u81EA\u4E8E/proc/meminfo,/proc/stat\u548C/proc/vmstat\u3002</p><p>5\uFF09\u67E5\u770B\u78C1\u76D8\u7684\u8BFB/\u5199</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vmstat -d
disk- ------------reads------------ ------------writes----------- -----IO------
       total merged sectors      ms  total merged sectors      ms    cur    sec
ram0       0      0       0       0      0      0       0       0      0      0
ram1       0      0       0       0      0      0       0       0      0      0
ram2       0      0       0       0      0      0       0       0      0      0
ram3       0      0       0       0      0      0       0       0      0      0
ram4       0      0       0       0      0      0       0       0      0      0
ram5       0      0       0       0      0      0       0       0      0      0
ram6       0      0       0       0      0      0       0       0      0      0
ram7       0      0       0       0      0      0       0       0      0      0
ram8       0      0       0       0      0      0       0       0      0      0
ram9       0      0       0       0      0      0       0       0      0      0
ram10      0      0       0       0      0      0       0       0      0      0
ram11      0      0       0       0      0      0       0       0      0      0
ram12      0      0       0       0      0      0       0       0      0      0
ram13      0      0       0       0      0      0       0       0      0      0
ram14      0      0       0       0      0      0       0       0      0      0
ram15      0      0       0       0      0      0       0       0      0      0
sda    33381   6455  615407   63224 2068111 1495416 28508288 15990289      0  10491
hdc        0      0       0       0      0      0       0       0      0      0
fd0        0      0       0       0      0      0       0       0      0      0
md0        0      0       0       0      0      0       0       0      0      0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u8FD9\u4E9B\u4FE1\u606F\u4E3B\u8981\u6765\u81EA\u4E8E/proc/diskstats.</p><p>merged:\u8868\u793A\u4E00\u6B21\u6765\u81EA\u4E8E\u5408\u5E76\u7684\u5199/\u8BFB\u8BF7\u6C42,\u4E00\u822C\u7CFB\u7EDF\u4F1A\u628A\u591A\u4E2A\u8FDE\u63A5/\u90BB\u8FD1\u7684\u8BFB/\u5199\u8BF7\u6C42\u5408\u5E76\u5230\u4E00\u8D77\u6765\u64CD\u4F5C</p><p>6\uFF09\u67E5\u770B/dev/sda1\u78C1\u76D8\u7684\u8BFB/\u5199</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># df
\u6587\u4EF6\u7CFB\u7EDF                 1K-\u5757      \u5DF2\u7528      \u53EF\u7528 \u5DF2\u7528% \u6302\u8F7D\u70B9
/dev/sda3            1119336548  27642068 1034835500   3% /tmpfs                 32978376         0  32978376   0% /dev/shm
/dev/sda1              1032088     59604    920056   7% /boot
# vmstat -p /dev/sda1
sda1          reads   read sectors  writes    requested writes
               18607    4249978          6         48
# vmstat -p /dev/sda3
sda3          reads   read sectors  writes    requested writes
              429350   35176268   28998789  980301488
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u8FD9\u4E9B\u4FE1\u606F\u4E3B\u8981\u6765\u81EA\u4E8E/proc/diskstats\u3002</p><p>reads:\u6765\u81EA\u4E8E\u8FD9\u4E2A\u5206\u533A\u7684\u8BFB\u7684\u6B21\u6570\u3002</p><p>read sectors:\u6765\u81EA\u4E8E\u8FD9\u4E2A\u5206\u533A\u7684\u8BFB\u6247\u533A\u7684\u6B21\u6570\u3002</p><p>writes:\u6765\u81EA\u4E8E\u8FD9\u4E2A\u5206\u533A\u7684\u5199\u7684\u6B21\u6570\u3002</p><p>requested writes:\u6765\u81EA\u4E8E\u8FD9\u4E2A\u5206\u533A\u7684\u5199\u8BF7\u6C42\u6B21\u6570\u3002</p><p>7\uFF09\u67E5\u770B\u7CFB\u7EDF\u7684slab\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vmstat -m
Cache                       Num  Total   Size  Pages
ip_conntrack_expect           0      0    136     28
ip_conntrack                  3     13    304     13
ip_fib_alias                 11     59     64     59
ip_fib_hash                  11     59     64     59
AF_VMCI                       0      0    960      4
bio_map_info                100    105   1064      7
dm_mpath                      0      0   1064      7
jbd_4k                        0      0   4096      1
dm_uevent                     0      0   2608      3
dm_tio                        0      0     24    144
dm_io                         0      0     48     77
scsi_cmd_cache               10     10    384     10
sgpool-128                   32     32   4096      1
sgpool-64                    32     32   2048      2
sgpool-32                    32     32   1024      4
sgpool-16                    32     32    512      8
sgpool-8                     45     45    256     15
scsi_io_context               0      0    112     34
ext3_inode_cache          51080  51105    760      5
ext3_xattr                   36     88     88     44
journal_handle               18    144     24    144
journal_head                 56     80     96     40
revoke_table                  4    202     16    202
revoke_record                 0      0     32    112
uhci_urb_priv                 0      0     56     67
UNIX                         13     33    704     11
flow_cache                    0      0    128     30
msi_cache                    33     59     64     59
cfq_ioc_pool                 14     90    128     30
cfq_pool                     12     90    216     18
crq_pool                     16     96     80     48
deadline_drq                  0      0     80     48
as_arq                        0      0     96     40
mqueue_inode_cache            1      4    896      4
isofs_inode_cache             0      0    608      6
hugetlbfs_inode_cache         1      7    576      7
Cache                       Num  Total   Size  Pages
ext2_inode_cache              0      0    720      5
ext2_xattr                    0      0     88     44
dnotify_cache                 0      0     40     92
dquot                         0      0    256     15
eventpoll_pwq                 3     53     72     53
eventpoll_epi                 3     20    192     20
inotify_event_cache           0      0     40     92
inotify_watch_cache           1     53     72     53
kioctx                        0      0    320     12
kiocb                         0      0    256     15
fasync_cache                  0      0     24    144
shmem_inode_cache           254    290    768      5
posix_timers_cache            0      0    128     30
uid_cache                     0      0    128     30
ip_mrt_cache                  0      0    128     30
tcp_bind_bucket               3    112     32    112
inet_peer_cache               0      0    128     30
secpath_cache                 0      0     64     59
xfrm_dst_cache                0      0    384     10
ip_dst_cache                  5     10    384     10
arp_cache                     1     15    256     15
RAW                           3      5    768      5
UDP                           5     10    768      5
tw_sock_TCP                   0      0    192     20
request_sock_TCP              0      0    128     30
TCP                           4      5   1600      5
blkdev_ioc                   14    118     64     59
blkdev_queue                 20     30   1576      5
blkdev_requests              13     42    272     14
biovec-256                    7      7   4096      1
biovec-128                    7      8   2048      2
biovec-64                     7      8   1024      4
biovec-16                     7     15    256     15
biovec-4                      7     59     64     59
biovec-1                     23    202     16    202
bio                         270    270    128     30
utrace_engine_cache           0      0     64     59
Cache                       Num  Total   Size  Pages
utrace_cache                  0      0     64     59
sock_inode_cache             33     48    640      6
skbuff_fclone_cache           7      7    512      7
skbuff_head_cache           319    390    256     15
file_lock_cache               1     22    176     22
Acpi-Operand               4136   4248     64     59
Acpi-ParseExt                 0      0     64     59
Acpi-Parse                    0      0     40     92
Acpi-State                    0      0     80     48
Acpi-Namespace             2871   2912     32    112
delayacct_cache              81    295     64     59
taskstats_cache               4     53     72     53
proc_inode_cache           1427   1440    592      6
sigqueue                      0      0    160     24
radix_tree_node           13166  13188    536      7
bdev_cache                   23     24    832      4
sysfs_dir_cache            5370   5412     88     44
mnt_cache                    26     30    256     15
inode_cache                2009   2009    560      7
dentry_cache              60952  61020    216     18
filp                        479   1305    256     15
names_cache                   3      3   4096      1
avc_node                     14     53     72     53
selinux_inode_security      994   1200     80     48
key_jar                       2     20    192     20
idr_layer_cache              74     77    528      7
buffer_head              164045 164800     96     40
mm_struct                    51     56    896      4
vm_area_struct             1142   1958    176     22
fs_cache                     35    177     64     59
files_cache                  36     55    768      5
signal_cache                 72    162    832      9
sighand_cache                68     84   2112      3
task_struct                  76     80   1888      2
anon_vma                    458    864     24    144
pid                          83    295     64     59
shared_policy_node            0      0     48     77
Cache                       Num  Total   Size  Pages
numa_policy                  37    144     24    144
size-131072(DMA)              0      0 131072      1
size-131072                   0      0 131072      1
size-65536(DMA)               0      0  65536      1
size-65536                    1      1  65536      1
size-32768(DMA)               0      0  32768      1
size-32768                    2      2  32768      1
size-16384(DMA)               0      0  16384      1
size-16384                    5      5  16384      1
size-8192(DMA)                0      0   8192      1
size-8192                     7      7   8192      1
size-4096(DMA)                0      0   4096      1
size-4096                   110    111   4096      1
size-2048(DMA)                0      0   2048      2
size-2048                   602    602   2048      2
size-1024(DMA)                0      0   1024      4
size-1024                   344    352   1024      4
size-512(DMA)                 0      0    512      8
size-512                    433    480    512      8
size-256(DMA)                 0      0    256     15
size-256                   1139   1155    256     15
size-128(DMA)                 0      0    128     30
size-64(DMA)                  0      0     64     59
size-64                    5639   5782     64     59
size-32(DMA)                  0      0     32    112
size-128                    801    930    128     30
size-32                    3005   3024     32    112
kmem_cache                  137    137   2688      1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br></div></div><p>\u8FD9\u7EC4\u4FE1\u606F\u6765\u81EA\u4E8E/proc/slabinfo\u3002</p><p>slab:\u7531\u4E8E\u5185\u6838\u4F1A\u6709\u8BB8\u591A\u5C0F\u5BF9\u8C61\uFF0C\u8FD9\u4E9B\u5BF9\u8C61\u6784\u9020\u9500\u6BC1\u5341\u5206\u9891\u7E41\uFF0C\u6BD4\u5982i-node\uFF0Cdentry\uFF0C\u8FD9\u4E9B\u5BF9\u8C61\u5982\u679C\u6BCF\u6B21\u6784\u5EFA\u7684\u65F6\u5019\u5C31\u5411\u5185\u5B58\u8981\u4E00\u4E2A\u9875(4kb)\uFF0C\u800C\u5176\u5B9E\u53EA\u6709\u51E0\u4E2A\u5B57\u8282\uFF0C\u8FD9\u6837\u5C31\u4F1A\u975E\u5E38\u6D6A\u8D39\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5C31\u5F15\u5165\u4E86\u4E00\u79CD\u65B0\u7684\u673A\u5236\u6765\u5904\u7406\u5728\u540C\u4E00\u4E2A\u9875\u6846\u4E2D\u5982\u4F55\u5206\u914D\u5C0F\u5B58\u50A8\u533A\uFF0C\u800Cslab\u53EF\u4EE5\u5BF9\u5C0F\u5BF9\u8C61\u8FDB\u884C\u5206\u914D,\u8FD9\u6837\u5C31\u4E0D\u7528\u4E3A\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u5206\u914D\u9875\u6846\uFF0C\u4ECE\u800C\u8282\u7701\u4E86\u7A7A\u95F4\uFF0C\u5185\u6838\u5BF9\u4E00\u4E9B\u5C0F\u5BF9\u8C61\u521B\u5EFA\u6790\u6784\u5F88\u9891\u7E41\uFF0Cslab\u5BF9\u8FD9\u4E9B\u5C0F\u5BF9\u8C61\u8FDB\u884C\u7F13\u51B2,\u53EF\u4EE5\u91CD\u590D\u5229\u7528,\u51CF\u5C11\u5185\u5B58\u5206\u914D\u6B21\u6570\u3002</p><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p><p>http://www.cnblogs.com/peida/archive/2012/12/25/2833108.html</p><p>http://man.linuxde.net/vmstat</p>`,88);function p(r,l){return e}var i=n(a,[["render",p],["__file","\u6BCF\u5929\u4E00\u4E2Alinux\u547D\u4EE4\uFF0845\uFF09-vmstat.html.vue"]]);export{i as default};
