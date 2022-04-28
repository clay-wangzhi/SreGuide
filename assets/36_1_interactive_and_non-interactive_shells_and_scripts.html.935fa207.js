import{_ as n,e as s}from"./app.ab95b9c4.js";const e={},a=s(`<h1 id="_36-1-\u4EA4\u4E92\u548C\u975E\u4EA4\u4E92shell\u4EE5\u53CA\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_36-1-\u4EA4\u4E92\u548C\u975E\u4EA4\u4E92shell\u4EE5\u53CA\u811A\u672C" aria-hidden="true">#</a> 36.1 \u4EA4\u4E92\u548C\u975E\u4EA4\u4E92shell\u4EE5\u53CA\u811A\u672C</h1><p>\u4EA4\u4E92shell\u4ECEtty\u8BFB\u53D6\u7528\u6237\u8F93\u5165\u3002shell\u9ED8\u8BA4\u4F1A\u8BFB\u53D6\u542F\u52A8\u6587\u4EF6\uFF0C\u663E\u793A\u63D0\u793A\u7B26\u548C\u6253\u5F00\u4EFB\u52A1\u63A7\u5236\u7B49\u3002\u7528\u6237\u53EF\u4EE5\u548Cshell\u4EA4\u4E92\u3002</p><p>\u811A\u672C\u603B\u662F\u8FD0\u884C\u5728\u975E\u4EA4\u4E92\u7684shell\u4E0A\u3002\u540C\u6837\uFF0C\u811A\u672C\u53EF\u4EE5\u8BBF\u95EE\u5B83\u81EA\u5DF1\u7684tty\uFF0C\u8FD9\u4F7F\u5F97\u5728\u811A\u672C\u4E2D\u4F9D\u7136\u53EF\u4EE5\u6A21\u62DF\u51FA\u4EA4\u4E92\u7684shell\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash
MY_PROMPT=&#39;$ &#39;
while :
    do
        echo -n &quot;$MY_PROMPT&quot;
        read line
        eval &quot;$line&quot;
    done

exit 0

# \u8FD9\u4E2A\u811A\u672C\u4EE5\u53CA\u4EE5\u4E0A\u89E3\u91CA\u662F\u7531St\xE9phane Chazelas\u63D0\u4F9B\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E00\u4E2A\u8981\u6C42\u7528\u6237\u8F93\u5165\u7684\u4EA4\u4E92\u811A\u672C\uFF0C\u901A\u5E38\u4F1A\u7528\u5230read\u8BED\u53E5\uFF08\u8BF7\u770B\u4F8B15-3\uFF09\u3002\u4E0D\u8FC7\u5B9E\u9645\u4E0A\u8981\u590D\u6742\u4E00\u4E9B\uFF0C\u4E00\u4E2A\u88AB\u7528\u6237\u901A\u8FC7console\u6216\u8005xterm\u8C03\u7528\u7684\u811A\u672C\uFF0C\u610F\u5473\u7740\u8FD9\u4E2A\u811A\u672C\u88AB\u7ED1\u5B9A\u5230\u4E86\u4E00\u4E2Atty\u4E0A\u3002</p><p>\u521D\u59CB\u5316\u548C\u542F\u52A8\u811A\u672C\u5FC5\u987B\u662F\u975E\u4EA4\u4E92\u7684\uFF0C\u56E0\u4E3A\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4E0D\u80FD\u8981\u6C42\u4EBA\u7C7B\u7684\u4ECB\u5165\u3002\u8BB8\u591A\u7BA1\u7406\u548C\u7CFB\u7EDF\u7EF4\u62A4\u811A\u672C\u4E5F\u540C\u6837\u662F\u975E\u4EA4\u4E92\u7684\u3002\u8981\u6C42\u81EA\u52A8\u8FD0\u884C\u7684\u91CD\u590D\u6027\u4EFB\u52A1\u4E5F\u662F\u901A\u8FC7\u975E\u4EA4\u4E92\u811A\u672C\u5B9E\u73B0\u7684\u3002</p><p>\u975E\u4EA4\u4E92\u7684\u811A\u672C\u53EF\u4EE5\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u800C\u4EA4\u4E92\u811A\u672C\uFF08\u5728\u540E\u53F0\u8FD0\u884C\uFF09\u5219\u4F1A\u6302\u8D77\uFF0C\u56E0\u4E3A\u8981\u7B49\u5F85\u6C38\u8FDC\u4E0D\u53EF\u80FD\u51FA\u73B0\u7684\u201C\u8F93\u5165\u201D\u3002\u89E3\u51B3\u8FD9\u4E2A\u96BE\u9898\u53EF\u4EE5\u4F7F\u7528\u5E26\u6709expect\u547D\u4EE4\u7684\u811A\u672C\uFF0C\u6216\u8005\u5C06\u6587\u6863\u5D4C\u5165\u5230\u540E\u53F0\u8FD0\u884C\u7684\u4EA4\u4E92\u811A\u672C\u4E2D\u3002\u6700\u7B80\u5355\u7684\u4F8B\u5B50\u5C31\u662F\u5C06\u4E00\u4E2A\u6587\u4EF6\u91CD\u5B9A\u5411\u5230read\u8BED\u53E5\uFF0C\u6765\u63D0\u4F9B\u201C\u8F93\u5165\u201D\u3002(read variable &lt; file) \u8FD9\u53EF\u4EE5\u521B\u9020\u51FA\u4E00\u4E2A\u5728\u4EA4\u4E92\u548C\u975E\u4EA4\u4E92\u4E24\u79CD\u6A21\u5F0F\u4E0B\u901A\u7528\u7684\u811A\u672C\u3002</p><p>\u5982\u679C\u811A\u672C\u9700\u8981\u77E5\u9053\u5B83\u662F\u5426\u8FD0\u884C\u5728\u4EA4\u4E92\u6A21\u5F0F\u4E0B\uFF0C\u7B80\u5355\u7684\u65B9\u6CD5\u5C31\u662F\u770B\u63D0\u793A\u7B26\u53D8\u91CF\u662F\u5426\u5B58\u5728\uFF0C\u5C31\u662F$PS1\u53D8\u91CF\u3002\uFF08\u5982\u679C\u7528\u6237\u901A\u8FC7\u63D0\u793A\u7B26\u8F93\u5165\uFF0C\u90A3\u4E48\u811A\u672C\u5C31\u9700\u8981\u663E\u793A\u63D0\u793A\u7B26\uFF0C\u6240\u4EE5\u811A\u672C\u4E2D$PS1\u53D8\u91CF\u4F1A\u88AB\u8BBE\u7F6E\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if [ -z $PS1 ] # \u662F\u5426\u6709\u63D0\u793A\u7B26\uFF08\u8BD1\u6CE8\uFF1A\u5224\u65AD\u811A\u672C\u662F\u5426\u8FD0\u884C\u5728\u4EA4\u4E92\u6A21\u5F0F\u4E0B\uFF09
### if [ -v PS1 ]   # Bash 4.2+ ...
then
    # \u975E\u4EA4\u4E92\u6A21\u5F0F
    ...
else
    # \u4EA4\u4E92\u6A21\u5F0F
    ...
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u811A\u672C\u4E5F\u53EF\u4EE5\u6D4B\u8BD5$-\u53D8\u91CF\u4E2D\u662F\u5426\u4F7F\u7528\u4E86\u201Ci\u201D\u9009\u9879\u6765\u5224\u8BFB\u662F\u5426\u8FD0\u884C\u5728\u4EA4\u4E92\u6A21\u5F0F\u4E0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>case $- in
    *i*)    # \u4EA4\u4E92shell
    ;;
    *)      # \u975E\u4EA4\u4E92shell
    ;;
# (\u53C2\u89C1 &quot;UNIX F.A.Q.,&quot; 1993)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>John Lange\u63CF\u8FF0\u4E86\u53E6\u4E00\u79CD\u66FF\u4EE3\u65B9\u6CD5\uFF1A\u4F7F\u7528test -t\u6765\u6D4B\u8BD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5173\u4E8E\u7EC8\u7AEF\u7684\u6D4B\u8BD5\uFF01

fd=0   # stdin \u6807\u51C6\u8F93\u5165

# \u4F7F\u7528test -t\u6D4B\u8BD5stdin\u6216\u8005stdout\u662F\u5426\u662F\u4E00\u4E2A\u7EC8\u7AEF\uFF08\u5982\u679C\u662F\u5219\u8BC1\u660E\u8BE5\u811A\u672C\u8FD0\u884C\u4E8E\u4EA4\u4E92\u6A21\u5F0F\uFF09\u3002
if [ -t &quot;$fd&quot; ]
then
    echo interactive # \u8BD1\u6CE8\uFF1A\u4EA4\u4E92\u6A21\u5F0F
else
    echo non-interactive # \u8BD1\u6CE8\uFF1A\u975E\u4EA4\u4E92\u6A21\u5F0F
fi

# \u4F46\u662FJohn\u6307\u51FA\uFF1A
#     if [ -t 0 ] \u4EC5\u5728\u4F60\u672C\u5730\u767B\u5F55\u65F6\u6709\u6548\uFF0C
#     \u5982\u679C\u901A\u8FC7ssh\u8FDC\u7A0B\u8C03\u7528\u5C31\u4F1A\u5931\u6548\uFF0C
#     \u6240\u4EE5\u8FD8\u8981\u52A0\u4E0A\u5BF9socket\u7684\u5224\u65AD\u3002

if [[ -t &quot;$fd&quot; || -p /dev/stdin ]]
then
    echo interactive # \u8BD1\u6CE8\uFF1A\u4EA4\u4E92\u6A21\u5F0F
else
    echo non-interactive # \u8BD1\u6CE8\uFF1A\u975E\u4EA4\u4E92\u6A21\u5F0F
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u7B14\u8BB0</p><p>\u811A\u672C\u53EF\u4EE5\u4F7F\u7528-i\u9009\u9879\u6216\u8005#!/bin/bash -i\u7684\u6587\u4EF6\u5934\u5F3A\u5236\u8FDB\u5165\u4EA4\u4E92\u6A21\u5F0F\u6267\u884C\u3002\u8FD9\u53EF\u80FD\u5BFC\u81F4\u53E4\u602A\u7684\u811A\u672C\u884C\u4E3A\u6216\u8005\u5728\u6CA1\u6709\u9519\u8BEF\u7684\u60C5\u51B5\u4E0B\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u3002</p>`,15);function l(r,p){return a}var b=n(e,[["render",l],["__file","36_1_interactive_and_non-interactive_shells_and_scripts.html.vue"]]);export{b as default};
