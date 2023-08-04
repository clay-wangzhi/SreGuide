const e=JSON.parse('{"key":"v-0bbd8b32","path":"/cloudnative/best-practice/hpa.html","title":"HPA 弹性伸缩","lang":"zh-CN","frontmatter":{"order":2,"category":"云原生","tag":["Kubernetes"],"description":"HPA 弹性伸缩 概念 什么是 HPA ? HPA（Horizontal Pod Autoscaler）是 Kubernetes 中的一种资源自动伸缩机制，用于根据某些指标动态调整 Pod 的副本数量。 价值 生产环境中，业务面临的负载压力变化是不定的，为了保障业务的稳定性，需要根据负载大小的变化调整应用实例的数量或资源规格，同时从资源成本角度考虑，需要在保障业务稳定性的同时，尽量减少不必要的资源占用。 定时弹性：大促期间，设置开始和结束时间，自动弹性扩缩容，不用人工干预，提高效率 基于资源的弹性：根据 cpu，mem 等资源使用率，自动扩缩容，低负载缩容，减小不必要资源占用，高负载自动扩容，保证应用有足够的资源使用，防止应用等待资源调度 基于业务指标的弹性：上 生产前，在 ut 环境压测，确定 最大 QPS、最高接受的 RT、最大接受 消息积压数等，监控平台提供接口，根据阀值，自动扩容，自动应对突然流量或压力，保障应用质量 基于事件的弹性：实际生产中，时间因素、资源使用率、业务指标 不是互斥的，通常是混合出现。如在业务潮汐流量阶段，会出现资源使用率、业务指标飙升情况，此时需要更为灵敏的基于资源的弹性策略和基于业务指标的弹性策略。 这种场景可以将时间、资源使用率、业务指标作为无差别的事件，根据事件做弹性行为触发的判断，即基于事件的弹性。","head":[["meta",{"property":"og:url","content":"https://clay-wangzhi.com/cloudnative/best-practice/hpa.html"}],["meta",{"property":"og:site_name","content":"SRE运维进阶之路"}],["meta",{"property":"og:title","content":"HPA 弹性伸缩"}],["meta",{"property":"og:description","content":"HPA 弹性伸缩 概念 什么是 HPA ? HPA（Horizontal Pod Autoscaler）是 Kubernetes 中的一种资源自动伸缩机制，用于根据某些指标动态调整 Pod 的副本数量。 价值 生产环境中，业务面临的负载压力变化是不定的，为了保障业务的稳定性，需要根据负载大小的变化调整应用实例的数量或资源规格，同时从资源成本角度考虑，需要在保障业务稳定性的同时，尽量减少不必要的资源占用。 定时弹性：大促期间，设置开始和结束时间，自动弹性扩缩容，不用人工干预，提高效率 基于资源的弹性：根据 cpu，mem 等资源使用率，自动扩缩容，低负载缩容，减小不必要资源占用，高负载自动扩容，保证应用有足够的资源使用，防止应用等待资源调度 基于业务指标的弹性：上 生产前，在 ut 环境压测，确定 最大 QPS、最高接受的 RT、最大接受 消息积压数等，监控平台提供接口，根据阀值，自动扩容，自动应对突然流量或压力，保障应用质量 基于事件的弹性：实际生产中，时间因素、资源使用率、业务指标 不是互斥的，通常是混合出现。如在业务潮汐流量阶段，会出现资源使用率、业务指标飙升情况，此时需要更为灵敏的基于资源的弹性策略和基于业务指标的弹性策略。 这种场景可以将时间、资源使用率、业务指标作为无差别的事件，根据事件做弹性行为触发的判断，即基于事件的弹性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-04T10:28:48.000Z"}],["meta",{"property":"article:author","content":"Clay"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:modified_time","content":"2023-08-04T10:28:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HPA 弹性伸缩\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-04T10:28:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Clay\\",\\"url\\":\\"https://clay-wangzhi.com\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"价值","slug":"价值","link":"#价值","children":[]},{"level":2,"title":"具体方案","slug":"具体方案","link":"#具体方案","children":[]},{"level":2,"title":"KEDA 的工作原理","slug":"keda-的工作原理","link":"#keda-的工作原理","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}],"git":{"createdTime":1691144928000,"updatedTime":1691144928000,"contributors":[{"name":"clay-wangzhi","email":"clay.wangzhi@gmail.com","commits":1}]},"readingTime":{"minutes":2.94,"words":882},"filePathRelative":"cloudnative/best-practice/hpa.md","localizedDate":"2023年8月4日","excerpt":"<h1> HPA 弹性伸缩</h1>\\n<h2> 概念</h2>\\n<p><strong>什么是 HPA ?</strong></p>\\n<p>HPA（Horizontal Pod Autoscaler）是 Kubernetes 中的一种资源自动伸缩机制，用于根据某些指标动态调整 Pod 的副本数量。</p>\\n<h2> 价值</h2>\\n<p>生产环境中，业务面临的负载压力变化是不定的，为了保障业务的稳定性，需要根据负载大小的变化调整应用实例的数量或资源规格，同时从资源成本角度考虑，需要在保障业务稳定性的同时，尽量减少不必要的资源占用。</p>\\n<ul>\\n<li>定时弹性：大促期间，设置开始和结束时间，自动弹性扩缩容，不用人工干预，提高效率</li>\\n<li>基于资源的弹性：根据 cpu，mem 等资源使用率，自动扩缩容，低负载缩容，减小不必要资源占用，高负载自动扩容，保证应用有足够的资源使用，防止应用等待资源调度</li>\\n<li>基于业务指标的弹性：上 生产前，在 ut 环境压测，确定 最大 QPS、最高接受的 RT、最大接受 消息积压数等，监控平台提供接口，根据阀值，自动扩容，自动应对突然流量或压力，保障应用质量</li>\\n<li>基于事件的弹性：实际生产中，时间因素、资源使用率、业务指标 不是互斥的，通常是混合出现。如在业务潮汐流量阶段，会出现资源使用率、业务指标飙升情况，此时需要更为灵敏的基于资源的弹性策略和基于业务指标的弹性策略。\\n这种场景可以将时间、资源使用率、业务指标作为无差别的事件，根据事件做弹性行为触发的判断，即基于事件的弹性。</li>\\n</ul>","copyright":{"author":"Clay"},"autoDesc":true}');export{e as data};
