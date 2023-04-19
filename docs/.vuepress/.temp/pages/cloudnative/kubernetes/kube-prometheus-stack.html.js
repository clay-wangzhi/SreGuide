export const data = {
  "key": "v-2b1b7ec1",
  "path": "/cloudnative/kubernetes/kube-prometheus-stack.html",
  "title": "Prometheus Operator 安装配置",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "Prometheus Operator 安装配置 一、概述 首先Prometheus整体监控结构略微复杂，一个个部署并不简单。另外监控Kubernetes就需要访问内部数据，必定需要进行认证、鉴权、准入控制， 那么这一整套下来将变得难上加难，而且还需要花费一定的时间，如果你没有特别高的要求，还是建议选用开源比较好的一些方案。 在k8s初期使用Heapster",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/kube-prometheus-stack.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "SRE运维进阶之路"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Prometheus Operator 安装配置"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Kubernetes"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、概述",
      "slug": "一、概述",
      "children": [
        {
          "level": 3,
          "title": "Prometheus",
          "slug": "prometheus",
          "children": []
        },
        {
          "level": 3,
          "title": "Alertmanager",
          "slug": "alertmanager",
          "children": []
        },
        {
          "level": 3,
          "title": "ThanosRuler",
          "slug": "thanosruler",
          "children": []
        },
        {
          "level": 3,
          "title": "ServiceMonitor",
          "slug": "servicemonitor",
          "children": []
        },
        {
          "level": 3,
          "title": "PodMonitor",
          "slug": "podmonitor",
          "children": []
        },
        {
          "level": 3,
          "title": "Probe",
          "slug": "probe",
          "children": []
        },
        {
          "level": 3,
          "title": "PrometheusRule",
          "slug": "prometheusrule",
          "children": []
        },
        {
          "level": 3,
          "title": "AlertmanagerConfig",
          "slug": "alertmanagerconfig",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "二、安装",
      "slug": "二、安装",
      "children": [
        {
          "level": 3,
          "title": "Helm 安装配置",
          "slug": "helm-安装配置",
          "children": []
        },
        {
          "level": 3,
          "title": "Prometheus 安装配置",
          "slug": "prometheus-安装配置",
          "children": []
        },
        {
          "level": 3,
          "title": "查找 grafana admin 账户密码",
          "slug": "查找-grafana-admin-账户密码",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "三、配置报警",
      "slug": "三、配置报警",
      "children": []
    },
    {
      "level": 2,
      "title": "参考链接",
      "slug": "参考链接",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 7.7,
    "words": 2310
  },
  "filePathRelative": "cloudnative/kubernetes/kube-prometheus-stack.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
