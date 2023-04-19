export const data = {
  "key": "v-05e39b32",
  "path": "/cloudnative/kubernetes/k8s-install.html",
  "title": "使用 ansible 快速搭建 k8s 集群",
  "lang": "zh-CN",
  "frontmatter": {
    "category": [
      "云原生"
    ],
    "tag": [
      "Kubernetes"
    ],
    "summary": "使用 ansible 快速搭建 k8s 集群 推荐： kubeadm 安装用：kubespray; 二进制安装用：kubeasz; \" 此安装方式参考上面两个项目创建，如果刚开始搭建，直接使用上面的安装方式即可，可根据实际情况微调\" 项目地址：https://github.com/clay-wangzhi/ansible-collection-k8s 相关支",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://clay-wangzhi.com/cloudnative/kubernetes/k8s-install.html"
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
          "content": "使用 ansible 快速搭建 k8s 集群"
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
      "title": "相关支持",
      "slug": "相关支持",
      "children": []
    },
    {
      "level": 2,
      "title": "快速开始",
      "slug": "快速开始",
      "children": []
    },
    {
      "level": 2,
      "title": "Roles 介绍",
      "slug": "roles-介绍",
      "children": [
        {
          "level": 3,
          "title": "preinstall：安装前准备",
          "slug": "preinstall-安装前准备",
          "children": []
        },
        {
          "level": 3,
          "title": "docker：安装Docker",
          "slug": "docker-安装docker",
          "children": []
        },
        {
          "level": 3,
          "title": "master: 安装 master",
          "slug": "master-安装-master",
          "children": []
        },
        {
          "level": 3,
          "title": "ha：使用 haproxy + keepalived 实现master高可用，负载均衡",
          "slug": "ha-使用-haproxy-keepalived-实现master高可用-负载均衡",
          "children": []
        },
        {
          "level": 3,
          "title": "calico：安装配置 Calico BGP RR模型",
          "slug": "calico-安装配置-calico-bgp-rr模型",
          "children": []
        },
        {
          "level": 3,
          "title": "node：安装 node",
          "slug": "node-安装-node",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 2.3,
    "words": 690
  },
  "filePathRelative": "cloudnative/kubernetes/k8s-install.md"
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
