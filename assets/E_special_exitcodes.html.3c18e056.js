import{_ as t,e as d}from"./app.250f2715.js";const e={},r=d("<table><thead><tr><th>\u9000\u51FA\u4EE3\u7801</th><th>\u8868\u610F</th><th>\u793A\u4F8B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>1</td><td>\u901A\u7528\u9519\u8BEF</td><td>let &quot;var1 = 1/0&quot;</td><td>\u5176\u4ED6\u9519\u8BEF\uFF0C\u5982\u9664\u4EE5\u96F6\u9519\u8BEF\u53CA\u5176\u4ED6\u65E0\u6743\u9650\u64CD\u4F5C\u3002</td></tr><tr><td>2</td><td>(\u636E Bash \u6587\u6863) \u8BEF\u7528 Shell builtins</td><td>empty_function() {}</td><td>\u7F3A\u5931\u5173\u952E\u8BCD\u6216\u6307\u4EE4\uFF0C\u6216\u6743\u9650\u95EE\u9898 (\u53CA diff \u5728\u4E8C\u8FDB\u5236\u6587\u4EF6\u6BD4\u8F83\u65F6\u7684\u8FD4\u56DE\u503C)</td></tr><tr><td>126</td><td>\u8C03\u7528\u7684\u6307\u4EE4\u65E0\u6CD5\u6267\u884C</td><td>/dev/null</td><td>\u6743\u9650\u95EE\u9898\u6216\u547D\u4EE4\u4E0D\u53EF\u6267\u884C</td></tr><tr><td>127</td><td>\u300C\u672A\u627E\u5230\u6307\u4EE4\u300D</td><td>illegal_command</td><td>\u53EF\u80FD\u662F $PATH \u6709\u95EE\u9898\u6216\u8F93\u5165\u6709\u8BEF\u3002</td></tr><tr><td>128</td><td>exit \u7684\u53C2\u6570\u6709\u8BEF</td><td>exit 3.14159</td><td>exit \u53EA\u63A5\u53D7\u8303\u56F4\u5728 0 - 255 \u7684\u6574\u6570 (\u89C1\u7B2C\u4E00\u4E2A\u811A\u6CE8)</td></tr><tr><td>128+n</td><td>\u9519\u8BEF\u4FE1\u53F7 \u201Cn\u201D</td><td>\u811A\u672C\u7684 kill -9 $PPID</td><td>$? \u8FD4\u56DE 137 (128 + 9)</td></tr><tr><td>130</td><td>\u811A\u672C\u88AB Control-C \u7EC8\u6B62</td><td>Ctl-C</td><td>Control-C \u662F\u9519\u8BEF\u4FE1\u53F7 2 (130 = 128 + 2, \u89C1\u4E0A)</td></tr><tr><td>255*</td><td>\u9519\u8BEF\u72B6\u6001\u8D85\u8303\u56F4</td><td>exit -1</td><td>exit \u53EA\u63A5\u53D7\u8303\u56F4\u5728 0 - 255 \u7684\u6574\u6570</td></tr></tbody></table><p>\u6839\u636E\u4E0A\u8868\uFF0C\u9000\u51FA\u4EE3\u7801 1 - 2\uFF0C126 - 165 \u53CA 255 \u6709\u7279\u522B\u542B\u4E49\uFF0C\u5E76\u56E0\u6B64\u5E94\u907F\u514D\u7528\u4E8E\u7528\u6237\u5B9A\u4E49\u7684\u9000\u51FA\u4EE3\u7801\u3002\u4EE5 <em>exit 127</em> \u7ED3\u675F\u4EE3\u7801\u4E00\u5B9A\u4F1A\u5728\u8C03\u8BD5\u65F6\u5BFC\u81F4\u6DF7\u4E71 (\u8FD9\u662F\u300C\u547D\u4EE4\u672A\u627E\u5230\u300D\u7684\u9519\u8BEF\u4EE3\u7801\u8FD8\u662F\u7528\u6237\u5B9A\u4E49\u7684\uFF1F)\u3002\u7136\u800C\uFF0C\u8BB8\u591A\u811A\u672C\u628A <em>exit 1</em> \u5F53\u4F5C\u51FA\u9519\u901A\u7528\u9000\u51FA\u6307\u4EE4\u3002\u56E0\u4E3A\u9000\u51FA\u4EE3\u7801 1 \u8868\u793A\u8BB8\u591A\u53EF\u80FD\u7684\u9519\u8BEF\uFF0C\u8FD9\u5BF9\u8C03\u8BD5\u4E0D\u662F\u5F88\u6709\u7528\u3002</p><p>\u5BF9\u6B64\u66FE\u6709\u8FC7\u7CFB\u7EDF\u5316\u9000\u51FA\u4EE3\u7801\u7684\u5C1D\u8BD5 (\u89C1 <code>/usr/include/sysexits.h</code>)\uFF0C\u4F46\u8FD9\u662F\u4E3A\u4E86 C/C++ \u7A0B\u5E8F\u5458\u7684\u3002\u811A\u672C\u4E2D\u7C7B\u4F3C\u7684\u6807\u51C6\u53EF\u80FD\u6BD4\u8F83\u6070\u5F53\u3002\u6587\u6863\u4F5C\u8005\u63D0\u8BAE\u9650\u5236\u7528\u6237\u5B9A\u4E49\u7684\u9519\u8BEF\u4EE3\u7801\u4E3A 64 - 113 (\u5305\u62EC\u8868\u793A\u6210\u529F\u7684 0)\uFF0C\u4EE5\u7B26\u5408 C/C++ \u6807\u51C6\u3002\u8FD9\u4F1A\u5206\u914D 50 \u4E2A\u53EF\u7528\u4EE3\u7801\uFF0C\u4E5F\u4F1A\u4F7F\u811A\u672C\u6392\u9519\u66F4\u76F4\u89C2\u3002\u672C\u6587\u6863\u4E2D\u6240\u6709\u811A\u672C\u793A\u4F8B\u7B26\u5408\u8FD9\u4E2A\u6807\u51C6\uFF0C\u9664\u4E86\u9700\u8981\u8FDD\u53CD\u8FD9\u4E00\u70B9\u7684\u60C5\u51B5\uFF0C\u5982 \u4F8B 9-2\u3002</p><p>{% hint style=&quot;info&quot; %} \u53EA\u6709\u5728 Bash \u6216 <em>sh</em> \u63D0\u793A\u7B26\u4E2D\uFF0CShell \u811A\u672C\u9000\u51FA\u540E\u5728\u547D\u4EE4\u884C\u6267\u884C $? \u624D\u4F1A\u7ED9\u51FA\u4E0E\u4E0A\u8868\u4E00\u81F4\u7684\u7ED3\u679C\uFF0C\u8FD0\u884C <em>C-shell</em> \u6216 <em>tcsh</em> \u6709\u65F6\u4F1A\u7ED9\u51FA\u4E0D\u540C\u7684\u7ED3\u679C\u3002 {% endhint %}</p>",4);function i(l,o){return r}var s=t(e,[["render",i],["__file","E_special_exitcodes.html.vue"]]);export{s as default};
