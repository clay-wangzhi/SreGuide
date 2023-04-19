import{_ as t,r,c as i,a as e,b as s,F as l,e as o,d as a,o as u}from"./app.a7ee6068.js";const p={},c=o(`<h1 id="\u5982\u4F55\u66F4\u65B0terminating\u72B6\u6001\u7684\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u66F4\u65B0terminating\u72B6\u6001\u7684\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u5982\u4F55\u66F4\u65B0Terminating\u72B6\u6001\u7684\u547D\u540D\u7A7A\u95F4</h1><p>Kubernetes\u4E2Dnamespace\u6709\u4E24\u79CD\u5E38\u89C1\u7684\u72B6\u6001\uFF0C\u5373Active\u548CTerminating\u72B6\u6001\uFF0C\u5176\u4E2DTerminating\u72B6\u6001\u4E00\u822C\u4F1A\u6BD4\u8F83\u5C11\u89C1\uFF0C\u5F53\u5BF9\u5E94\u7684\u547D\u540D\u7A7A\u95F4\u4E0B\u8FD8\u5B58\u5728\u8FD0\u884C\u7684\u8D44\u6E90\uFF0C\u4F46\u8BE5\u547D\u540D\u7A7A\u95F4\u88AB\u5220\u9664\u65F6\u624D\u4F1A\u51FA\u73B0\u6240\u8C13\u7684Terminating\u72B6\u6001\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u53EA\u8981\u7B49\u5F85Kubernetes\u672C\u8EAB\u5C06\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u8D44\u6E90\u56DE\u6536\u540E\uFF0C\u8BE5\u547D\u540D\u7A7A\u95F4\u5C06\u4F1A\u88AB\u7CFB\u7EDF\u81EA\u52A8\u5220\u9664\u3002</p><p>\u4F46\u662F\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5373\u4F7F\u547D\u540D\u7A7A\u95F4\u4E0B\u6CA1\u6709\u8FD0\u884C\u7684\u8D44\u6E90\uFF0C\u4F46\u4F9D\u7136\u65E0\u6CD5\u5220\u9664Terminating\u72B6\u6001\u7684\u547D\u540D\u7A7A\u95F4\u7684\u60C5\u51B5\uFF0C\u5B83\u4F1A\u4E00\u76F4\u5361\u5728Terminating\u72B6\u6001\u4E0B\u3002</p><p>\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u6B65\u9AA4\u4E3A\uFF1A</p><ol><li><p>\u67E5\u770B\u547D\u540D\u7A7A\u95F4\u8BE6\u60C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ kubectl  get ns  | grep rdb
rdbms                  Terminating   6d21h

$ kubectl  get ns rdbms -o yaml
apiVersion: v1
kind: Namespace
metadata:
  annotations:
    kubectl.kubernetes.io/last-applied-configuration: |
      {&quot;apiVersion&quot;:&quot;v1&quot;,&quot;kind&quot;:&quot;Namespace&quot;,&quot;metadata&quot;:{&quot;annotations&quot;:{},&quot;name&quot;:&quot;rdbms&quot;}}
  creationTimestamp: &quot;2020-05-07T15:19:43Z&quot;
  deletionTimestamp: &quot;2020-05-07T15:33:23Z&quot;
  name: rdbms
  resourceVersion: &quot;84553454&quot;
  selfLink: /api/v1/namespaces/rdbms
  uid: 457788ddf-53d7-4hde-afa3-1fertg21ewe1
spec:
  finalizers:
  - kubernetes
status:
  phase: Terminating
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li><li><p>\u67E5\u770B\u8BE5\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u8D44\u6E90</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u770B\u96C6\u7FA4\u4E2D\u53EF\u4EE5\u4F7F\u7528\u547D\u540D\u7A7A\u95F4\u9694\u79BB\u7684\u8D44\u6E90
$ kubectl api-resources -o name --verbs=list --namespaced | xargs -n 1 kubectl get --show-kind --ignore-not-found -n rdbms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53D1\u73B0rdbms\u547D\u540D\u7A7A\u95F4\u4E0B\u5E76\u65E0\u8D44\u6E90\u5360\u7528\u3002</p></li><li><p>\u5C1D\u8BD5\u5BF9\u547D\u540D\u7A7A\u95F4\u8FDB\u884C\u5220\u9664</p><p>\u76F4\u63A5\u5220\u9664\u547D\u540D\u7A7A\u95F4rdbms</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ kubectl  delete ns rdbms
Error from server (Conflict): Operation cannot be fulfilled on namespaces &quot;rdbms&quot;: The system is ensuring all content is removed from this namespace.  Upon completion, this namespace will automatically be purged by the system.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u63D0\u793A\u5220\u9664\u64CD\u4F5C\u672A\u80FD\u5B8C\u6210\uFF0C\u8BF4\u7CFB\u7EDF\u4F1A\u5728\u786E\u5B9A\u6CA1\u7528\u8D44\u6E90\u540E\u5C06\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002</p></li><li><p>\u4F7F\u7528\u5F3A\u5236\u5220\u9664</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ kubectl  delete ns rdbms --force --grace-period=0
warning: Immediate deletion does not wait for confirmation that the running resource has been terminated. The resource may continue to run on the cluster indefinitely.
Error from server (Conflict): Operation cannot be fulfilled on namespaces &quot;rdbms&quot;: The system is ensuring all content is removed from this namespace.  Upon completion, this namespace will automatically be purged by the system.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F9D\u7136\u65E0\u6CD5\u5220\u9664\u8BE5\u547D\u540D\u7A7A\u95F4\u3002</p></li><li><p>\u4F46\u662F\u5927\u90E8\u5206\u65F6\u5019\uFF0C\u8FD9\u4E9B\u8D44\u6E90\u4E5F\u6740\u4E0D\u6389\uFF0C\u89E3\u51B3\u529E\u6CD5\u662F\u4F7F\u7528\u539F\u751F\u63A5\u53E3\u5220\u9664</p><p>\u83B7\u53D6namespace\u7684\u8BE6\u60C5\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ kubectl  get ns rdbms  -o json &gt; rdbms.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770Bnamespace\u5B9A\u4E49\u7684json\u914D\u7F6E\uFF0C\u7F16\u8F91json\u6587\u4EF6\u5E76\u5220\u9664\u6389spec\u90E8\u5206\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cat rdbms.json
{
    &quot;apiVersion&quot;: &quot;v1&quot;,
    &quot;kind&quot;: &quot;Namespace&quot;,
    &quot;metadata&quot;: {
        &quot;annotations&quot;: {
            &quot;kubectl.kubernetes.io/last-applied-configuration&quot;: &quot;{\\&quot;apiVersion\\&quot;:\\&quot;v1\\&quot;,\\&quot;kind\\&quot;:\\&quot;Namespace\\&quot;,\\&quot;metadata\\&quot;:{\\&quot;annotations\\&quot;:{},\\&quot;name\\&quot;:\\&quot;rdbms\\&quot;}}\\n&quot;
        },
        &quot;creationTimestamp&quot;: &quot;2019-10-14T12:17:44Z&quot;,
        &quot;deletionTimestamp&quot;: &quot;2019-10-14T12:30:27Z&quot;,
        &quot;name&quot;: &quot;rdbms&quot;,
        &quot;resourceVersion&quot;: &quot;8844754&quot;,
        &quot;selfLink&quot;: &quot;/api/v1/namespaces/rdbms&quot;,
        &quot;uid&quot;: &quot;29067ddf-56d7-4cce-afa3-1fbdbb221ab1&quot;
    },
    &quot;spec&quot;: {
        &quot;finalizers&quot;: [
            &quot;kubernetes&quot;
        ]
    },
    &quot;status&quot;: {
        &quot;phase&quot;: &quot;Terminating&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u6267\u884C\u63A5\u53E3PUT\u8BF7\u6C42\u66F4\u65B0\u540E\uFF0C\u547D\u540D\u7A7A\u95F4\u5C06\u81EA\u52A8\u5220\u9664\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl replace --raw &quot;/api/v1/namespaces/&lt;YOUR_NAMESPACE&gt;/finalize&quot; -f ./&lt;YOUR_NAMESPACE&gt;.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4ECD\u7136\u65E0\u6CD5\u5220\u9664\u547D\u540D\u7A7A\u95F4\uFF0C\u8BF7\u67E5\u770Bmetadata\u90E8\u5206\u662F\u5426\u5B58\u5728finalizers\u5B57\u6BB5\uFF0C\u5982\u679C\u5B58\u5728\uFF0C\u9700\u8981\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u8FDB\u5165\u547D\u540D\u7A7A\u95F4\u540E\u5220\u9664\u8BE5\u5B57\u6BB5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl edit ns rdbms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><blockquote><p>tips: \u6211\u4E2A\u4EBA\u4E00\u822C\u76F4\u63A5\u4F7F\u7528\u6B65\u9AA45</p></blockquote><p>\u53C2\u8003\u94FE\u63A5\uFF1A</p>`,7),m={href:"https://support.huaweicloud.com/cce_faq/cce_faq_00277.html",target:"_blank",rel:"noopener noreferrer"},b=a("\u5982\u4F55\u66F4\u65B0Terminating\u72B6\u6001\u7684\u547D\u540D\u7A7A\u95F4 | \u534E\u4E3A\u4E91"),d={href:"https://stackoverflow.com/questions/52369247/namespace-stuck-as-terminating-how-do-i-remove-it",target:"_blank",rel:"noopener noreferrer"},q=a("Namespace \u201Cstuck\u201D as Terminating, How do I remove it? | stackoverflow");function g(v,h){const n=r("ExternalLinkIcon");return u(),i(l,null,[c,e("ul",null,[e("li",null,[e("a",m,[b,s(n)])]),e("li",null,[e("a",d,[q,s(n)])])])],64)}var x=t(p,[["render",g],["__file","namespace-terminating.html.vue"]]);export{x as default};
