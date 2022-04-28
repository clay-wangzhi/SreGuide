import{_ as e,d}from"./app.e298a435.js";const a={},r=d('<h1 id="linux-du\u3001df\u7EDF\u8BA1\u7684\u786C\u76D8\u4F7F\u7528\u60C5\u51B5\u4E0D\u4E00\u81F4\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#linux-du\u3001df\u7EDF\u8BA1\u7684\u786C\u76D8\u4F7F\u7528\u60C5\u51B5\u4E0D\u4E00\u81F4\u95EE\u9898" aria-hidden="true">#</a> Linux\uFF0Cdu\u3001df\u7EDF\u8BA1\u7684\u786C\u76D8\u4F7F\u7528\u60C5\u51B5\u4E0D\u4E00\u81F4\u95EE\u9898</h1><p>\u5728\u8FD0\u7EF4Linux\u670D\u52A1\u5668\u65F6\uFF0C\u4F1A\u78B0\u5230\u9700\u8981\u67E5\u770B\u786C\u76D8\u7A7A\u95F4\u7684\u60C5\u51B5\uFF0C\u8FD9\u65F6\u5019\uFF0C\u901A\u5E38\u4F1A\u4F7F\u7528<code>df -lh</code>\u547D\u4EE4\u6765\u68C0\u67E5\u6BCF\u4E2A\u6302\u8F7D\u4E86\u6587\u4EF6\u7CFB\u7EDF\u7684\u786C\u76D8\u7684\u603B\u91CF\u548C\u5DF2\u4F7F\u7528\u91CF\uFF0C\u6216\u8005\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>du -sh [directory]</code>\u547D\u4EE4\u6765\u7EDF\u8BA1\u67D0\u4E2A\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u7684\u7A7A\u95F4\u5360\u7528\u3002</p><p>\u5728\u4F7F\u7528<code>df\u3001du</code>\u547D\u4EE4\u65F6\uFF0C\u5E38\u5E38\u4F1A\u9047\u5230\u7EDF\u8BA1\u7684\u786C\u76D8\u4F7F\u7528\u60C5\u51B5\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002\u6BD4\u5982du\u7EDF\u8BA1\u6839\u76EE\u5F55\u4E0B\u6587\u4EF6\u603B\u5171\u5927\u5C0F\u4E3A2G\uFF0C\u800Cdf\u5224\u65AD\u6302\u8F7D\u5728\u6839\u76EE\u5F55\u7684\u786C\u76D8\u5DF2\u7528\u7A7A\u95F4\u8FBE\u5230\u4E863G\uFF0C20G\u751A\u81F3\u66F4\u591A\u3002\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6709\u4EE5\u4E0B\u4E09\u79CD\u539F\u56E0\uFF1A</p><h2 id="\u9884\u7559\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u9884\u7559\u7A7A\u95F4" aria-hidden="true">#</a> \u9884\u7559\u7A7A\u95F4</h2><p>\u4E3A\u4E86\u9884\u9632\u7D27\u6025\u60C5\u51B5\uFF0Clinux ext\u6587\u4EF6\u7CFB\u7EDF\u4F1A\u9884\u7559\u90E8\u5206\u786C\u76D8\u7A7A\u95F4\uFF0C\u5177\u4F53\u9884\u7559\u7684\u6570\u503C\u53EF\u4EE5\u901A\u8FC7tune2fs -l [dev_name] | grep \u201CReserved block count\u201D\u67E5\u770B\u5230\uFF08dev_name\u662F\u8BBE\u5907\u540D\uFF09\uFF0C\u8FD9\u91CC\u9884\u7559\u7684\u7A7A\u95F4\u4F1A\u88ABdf\u8BA1\u7B97\u5230\u5DF2\u7528\u7A7A\u95F4\u4E2D\uFF0C\u4ECE\u800C\u5BFC\u81F4df\u548Cdu\u7EDF\u8BA1\u4E0D\u4E00\u81F4\u3002\u5982\u679C\u9700\u8981\u8C03\u6574\u9884\u7559\u7A7A\u95F4\u5927\u5C0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528tune2fs -m [size][dev_name]\u6765\u8FDB\u884C\u8C03\u6574\u3002</p><h2 id="\u5E7B\u5F71\u6587\u4EF6-phantom-file" tabindex="-1"><a class="header-anchor" href="#\u5E7B\u5F71\u6587\u4EF6-phantom-file" aria-hidden="true">#</a> \u5E7B\u5F71\u6587\u4EF6\uFF08phantom file\uFF09</h2><p>du\u662F\u7EDF\u8BA1\u88AB\u6587\u4EF6\u7CFB\u7EDF\u8BB0\u5F55\u5230\u7684\u6BCF\u4E2A\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u7136\u540E\u8FDB\u884C\u7D2F\u52A0\u5F97\u5230\u7684\u5927\u5C0F\uFF0C\u8FD9\u662F\u901A\u8FC7\u6587\u4EF6\u7CFB\u7EDF\u83B7\u53D6\u5230\u7684\u3002\u800Cdf\u4E3B\u8981\u662F\u4ECE\u8D85\u7EA7\u5757\uFF08superblock\uFF09\u4E2D\u8BFB\u5165\u786C\u76D8\u4F7F\u7528\u4FE1\u606F\uFF0Cdf\u83B7\u53D6\u5230\u7684\u662F\u78C1\u76D8\u5757\u88AB\u4F7F\u7528\u7684\u60C5\u51B5\u3002\u5F53\u4E00\u4E2A\u6587\u4EF6\u88AB\u5220\u9664\u65F6\uFF0C\u5982\u679C\u6709\u522B\u7684\u8FDB\u7A0B\u6B63\u5728\u4F7F\u7528\u5B83\uFF08\u5360\u6709\u53E5\u67C4\uFF09\uFF0C \u8FD9\u4E2A\u6587\u4EF6\u5C06\u4E0D\u4F1A\u88ABdu\u7EDF\u8BA1\u5230\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6587\u4EF6\u88AB\u5360\u7528\u7684\u78C1\u76D8\u7A7A\u95F4\u5374\u4F9D\u7136\u4F1A\u88ABdf\u7EDF\u8BA1\u5230\u3002\u8FD9\u4E9B\u6587\u4EF6\uFF0C\u4EE5\u53CA\u6B63\u5728\u4F7F\u7528\u8FD9\u4E9B\u6587\u4EF6\u7684\u8FDB\u7A0B\u53EF\u4EE5\u901A\u8FC7lsof | grep deleted\u67E5\u5230\u3002\u5F53\u8FDB\u7A0B\u505C\u6B62\u6216\u8005\u88ABkill\u65F6\uFF0C\u8FD9\u4E9B\u7A7A\u95F4\u5C06\u88AB\u91CA\u653E\u3002</p><h2 id="\u672A\u7EDF\u8BA1\u5230\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u672A\u7EDF\u8BA1\u5230\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u672A\u7EDF\u8BA1\u5230\u7684\u6587\u4EF6</h2><p>\u5982\u679C\u4E0A\u9762\u4E24\u79CD\u60C5\u51B5\u90FD\u6392\u9664\u4E86\uFF0C\u4F46\u662F\u6570\u636E\u8FD8\u662F\u4E0D\u4E00\u81F4\uFF0C\u90A3\u662F\u600E\u4E48\u56DE\u4E8B\uFF1F\u8FD9\u91CC\u9690\u85CF\u7740\u4E00\u79CD\u60C5\u51B5\uFF1A\u5F53\u6211\u4EEC\u5C06\u4E00\u4E2A\u76EE\u5F55\u6302\u5728\u5230\u4E00\u4E2A\u65B0\u7684\u8BBE\u5907\uFF08\u786C\u76D8\uFF09\u4E0A\u4E4B\u524D\uFF0C\u5982\u679C\u8FD9\u4E2A\u76EE\u5F55\u91CC\u9762\u5DF2\u7ECF\u6709\u6570\u636E\uFF0C\u90A3\u4E48\u8FD9\u4E00\u90E8\u5206\u6570\u636E\u4E0D\u4F1A\u88ABdu\u611F\u77E5\uFF0C\u5728\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u4E5F\u770B\u4E0D\u5230\u8FD9\u4E9B\u6570\u636E\uFF0C\u4F46\u662F\u8FD9\u4E9B\u6570\u636E\u53C8\u662F\u786E\u5B9E\u5360\u7528\u4E86\u78C1\u76D8\u7A7A\u95F4\uFF0C\u662F\u80FD\u591F\u88ABdf\u6240\u7EDF\u8BA1\u5230\u7684\u3002\u8FD9\u65F6\u5019\u901A\u8FC7du/df\u7EDF\u8BA1\u539F\u8BBE\u5907\u7684\u7A7A\u95F4\u4F7F\u7528\u60C5\u51B5\uFF0C\u5C31\u4F1A\u53D1\u73B0df\u7EDF\u8BA1\u5230\u7684\u6BD4du\u8981\u591A\u3002\u9047\u5230\u8FD9\u6837\u7684\u60C5\u51B5\u65F6\uFF0C\u4F7F\u7528fuser -km [directory]\u6740\u6B7B\u5360\u7528\u8BE5\u76EE\u5F55\u7684\u6240\u6709\u8FDB\u7A0B\uFF08\u5C0F\u5FC3\u64CD\u4F5C\uFF01\uFF09\uFF0C\u7136\u540E\u4F7F\u7528umount [directory]\u5C06\u8BE5\u76EE\u5F55\u6302\u8F7D\u7684\u8BBE\u5907\u5378\u8F7D\uFF0C\u8FD9\u65F6\uFF0C\u76EE\u5F55\u91CC\u9762\u539F\u6765\u5DF2\u6709\u7684\u6570\u636E\u5C31\u4F1A\u51FA\u73B0\uFF0C\u6211\u4EEC\u5C06\u5176\u5220\u9664\u4E4B\u540E\uFF0C\u518D\u91CD\u65B0\u6302\u8F7D\u8BBE\u5907\uFF08mount -t [type][dev] [directory]\uFF09\u5373\u53EF\u3002</p>',9);function t(f,i){return r}var u=e(a,[["render",t],["__file","du-df-diff.html.vue"]]);export{u as default};
