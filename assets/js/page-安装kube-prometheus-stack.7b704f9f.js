(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1e3:function(e,s,t){"use strict";t.r(s);var a=t(1),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"安装-kube-prometheus-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-kube-prometheus-stack"}},[e._v("#")]),e._v(" 安装 kube-prometheus-stack")]),e._v(" "),t("h2",{attrs:{id:"helm-安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#helm-安装配置"}},[e._v("#")]),e._v(" Helm 安装配置")]),e._v(" "),t("p",[e._v("下载二进制文件")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("helmversion")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.7")]),e._v(".2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://get.helm.sh/helm-v"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${helmversion}")]),e._v("-linux-amd64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xvf helm-v"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${helmversion}")]),e._v("-linux-amd64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" linux-amd64/helm /usr/bin/\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("设置补全命令")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("helm completion "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/bash_completion.d/helm.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" /etc/bash_completion.d/helm.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"prometheus-安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-安装配置"}},[e._v("#")]),e._v(" Prometheus 安装配置")]),e._v(" "),t("p",[e._v("添加 helm repo")]),e._v(" "),t("blockquote",[t("p",[e._v("之前拉取的最新版本，kube-state-metrisc 的 target 没添加上去，所以用的  23.3.2")])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("helm repo "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" prometheus-community https://prometheus-community.github.io/helm-charts\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("下拉压缩包")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("helm pull prometheus-community/kube-prometheus-stack --version "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("23.3")]),e._v(".2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xvf kube-prometheus-stack-23.3.2.tgz\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("为 prometheus 创建 Namespace")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("kubectl create namespace cattle-prometheus\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("新增 etcd secret")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl create secret generic etcd-certs -n cattle-prometheus --from-file=/etc/kubernetes/pki/etcd/ca.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.key\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("修改 kube-proxy 的configmap")]),e._v(" "),t("blockquote",[t("p",[e._v('将 metricsBindAddress 修改为  "0.0.0.0:10249"')])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("kubectl -n kube-system edit configmaps kube-proxy\nkubectl rollout restart ds kube-proxy -n kube-system\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("注释sha 校验")]),e._v(" "),t("blockquote",[t("p",[e._v("prometheusOperator.admissionWebhooks.patch.image.sha")])]),e._v(" "),t("p",[e._v("部署")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("helm "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" monitoring -n cattle-prometheus --set prometheusOperator.createCustomResource"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false --set kubeEtcd.serviceMonitor.scheme"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https --set kubeEtcd.serviceMonitor.caFile"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/prometheus/secrets/etcd-certs/ca.crt --set kubeEtcd.serviceMonitor.certFile"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/prometheus/secrets/etcd-certs/healthcheck-client.crt --set kubeEtcd.serviceMonitor.keyFile"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/prometheus/secrets/etcd-certs/healthcheck-client.key --set prometheus.prometheusSpec.secrets"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("etcd-certs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" ./\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如何官方镜像拉不下来，可以先从其他源，下载下来，然后改tag")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("k8s.gcr.io/kube-state-metrics/kube-state-metrics:v2.2.4")])]),e._v(" "),t("li",[t("p",[e._v("k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.0")])])]),e._v(" "),t("p",[e._v("参考链接")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1715822973549386399&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("Prometheus定义指南之Operator")]),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);