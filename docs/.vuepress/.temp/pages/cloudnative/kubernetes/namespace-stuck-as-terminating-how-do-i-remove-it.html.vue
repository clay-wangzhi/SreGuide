<template><h1 id="如何更新terminating状态的命名空间" tabindex="-1"><a class="header-anchor" href="#如何更新terminating状态的命名空间" aria-hidden="true">#</a> 如何更新Terminating状态的命名空间</h1>
<p>Kubernetes中namespace有两种常见的状态，即Active和Terminating状态，其中Terminating状态一般会比较少见，当对应的命名空间下还存在运行的资源，但该命名空间被删除时才会出现所谓的Terminating状态，这种情况下只要等待Kubernetes本身将命名空间下的资源回收后，该命名空间将会被系统自动删除。</p>
<p>但是在某些情况下，即使命名空间下没有运行的资源，但依然无法删除Terminating状态的命名空间的情况，它会一直卡在Terminating状态下。</p>
<p>解决这个问题的步骤为：</p>
<ol>
<li>
<p>查看命名空间详情</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ kubectl  get ns  | grep rdb
rdbms                  Terminating   6d21h

$ kubectl  get ns rdbms -o yaml
apiVersion: v1
kind: Namespace
metadata:
  annotations:
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{},"name":"rdbms"}}
  creationTimestamp: "2020-05-07T15:19:43Z"
  deletionTimestamp: "2020-05-07T15:33:23Z"
  name: rdbms
  resourceVersion: "84553454"
  selfLink: /api/v1/namespaces/rdbms
  uid: 457788ddf-53d7-4hde-afa3-1fertg21ewe1
spec:
  finalizers:
  - kubernetes
status:
  phase: Terminating
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li>
<li>
<p>查看该命名空间下的资源</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 查看集群中可以使用命名空间隔离的资源
$ kubectl api-resources -o name --verbs=list --namespaced | xargs -n 1 kubectl get --show-kind --ignore-not-found -n rdbms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>发现rdbms命名空间下并无资源占用。</p>
</li>
<li>
<p>尝试对命名空间进行删除</p>
<p>直接删除命名空间rdbms</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ kubectl  delete ns rdbms
Error from server (Conflict): Operation cannot be fulfilled on namespaces "rdbms": The system is ensuring all content is removed from this namespace.  Upon completion, this namespace will automatically be purged by the system.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>提示删除操作未能完成，说系统会在确定没用资源后将会被自动删除。</p>
</li>
<li>
<p>使用强制删除</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ kubectl  delete ns rdbms --force --grace-period=0
warning: Immediate deletion does not wait for confirmation that the running resource has been terminated. The resource may continue to run on the cluster indefinitely.
Error from server (Conflict): Operation cannot be fulfilled on namespaces "rdbms": The system is ensuring all content is removed from this namespace.  Upon completion, this namespace will automatically be purged by the system.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>依然无法删除该命名空间。</p>
</li>
<li>
<p>但是大部分时候，这些资源也杀不掉，解决办法是使用原生接口删除</p>
<p>获取namespace的详情信息</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ kubectl  get ns rdbms  -o json > rdbms.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看namespace定义的json配置，编辑json文件并删除掉spec部分。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ cat rdbms.json
{
    "apiVersion": "v1",
    "kind": "Namespace",
    "metadata": {
        "annotations": {
            "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"v1\",\"kind\":\"Namespace\",\"metadata\":{\"annotations\":{},\"name\":\"rdbms\"}}\n"
        },
        "creationTimestamp": "2019-10-14T12:17:44Z",
        "deletionTimestamp": "2019-10-14T12:30:27Z",
        "name": "rdbms",
        "resourceVersion": "8844754",
        "selfLink": "/api/v1/namespaces/rdbms",
        "uid": "29067ddf-56d7-4cce-afa3-1fbdbb221ab1"
    },
    "spec": {
        "finalizers": [
            "kubernetes"
        ]
    },
    "status": {
        "phase": "Terminating"
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>执行接口PUT请求更新后，命名空间将自动删除。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl replace --raw "/api/v1/namespaces/&lt;YOUR_NAMESPACE>/finalize" -f ./&lt;YOUR_NAMESPACE>.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果仍然无法删除命名空间，请查看metadata部分是否存在finalizers字段，如果存在，需要通过如下命令进入命名空间后删除该字段：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kubectl edit ns rdbms
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ol>
<blockquote>
<p>tips:  我个人一般直接使用步骤5</p>
</blockquote>
<p>参考链接：</p>
<ul>
<li><a href="https://support.huaweicloud.com/cce_faq/cce_faq_00277.html" target="_blank" rel="noopener noreferrer">如何更新Terminating状态的命名空间 | 华为云<ExternalLinkIcon/></a></li>
<li><a href="https://stackoverflow.com/questions/52369247/namespace-stuck-as-terminating-how-do-i-remove-it" target="_blank" rel="noopener noreferrer">Namespace “stuck” as Terminating, How do I remove it? | stackoverflow<ExternalLinkIcon/></a></li>
</ul>
</template>
