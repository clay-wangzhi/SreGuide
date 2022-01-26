(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{989:function(e,s,t){"use strict";t.r(s);var a=t(1),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"etcd-磁盘空间爆满解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etcd-磁盘空间爆满解决方案"}},[e._v("#")]),e._v(" ETCD 磁盘空间爆满解决方案")]),e._v(" "),t("blockquote",[t("p",[e._v("etcd默认的空间配额限制为2G，超出空间配额限制就会影响服务，所以需要定期清理")])]),e._v(" "),t("h2",{attrs:{id:"查看集群状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看集群状态"}},[e._v("#")]),e._v(" 查看集群状态")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" etcdctl --cacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.crt --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.key --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://10.100.142.163:2379 --write-out"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("table endpoint status\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("查看ETCD集群报警情况")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" etcdctl --cacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.crt --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.key --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://10.100.142.163:2379 alarm list\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("输出为：")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("meberID:XXXXXXXXXXXXXXX alarm:NOSPACE\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("blockquote",[t("p",[e._v("此处 "),t("code",[e._v("alarm")]),e._v(" 提示 "),t("code",[e._v("NOSPACE")]),e._v("，需要升级 ETCD 集群的空间（默认为2G的磁盘使用空间），或者压缩老数据，升级空间后，需要使用 etcd命令，取消此报警信息，否则集群依旧无法使用")])]),e._v(" "),t("h2",{attrs:{id:"增加etcd的容量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增加etcd的容量"}},[e._v("#")]),e._v(" 增加etcd的容量")]),e._v(" "),t("p",[e._v("修改 etcd.yaml 文件，由2G--\x3e8G,增加以下三个参数")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("- --auto-compaction-mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("revision\n- --auto-compaction-retention"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v("\n- --quota-backend-bytes"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8589934592")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("blockquote",[t("p",[e._v("auto-compaction-mode=revision 按版本号压缩")]),e._v(" "),t("p",[e._v("auto-compaction-retention=1000 保留近1000个revision，每5分钟自动压缩 ”latest revision” - 1000")]),e._v(" "),t("p",[e._v("quota-backend-bytes 设置etcd最大容量为8G")])]),e._v(" "),t("h2",{attrs:{id:"压缩老数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩老数据"}},[e._v("#")]),e._v(" 压缩老数据")]),e._v(" "),t("ul",[t("li",[e._v("获取当前etcd数据的修订版本(revision)")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("rev")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" etcdctl  --cacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.crt --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.key --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://10.100.142.163:2379 endpoint status --write-out"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"json"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("egrep")]),e._v(" -o "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'\"revision\":[0-9]*'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("egrep")]),e._v(" -o "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'[0-9].*'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$rev")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("整合压缩旧版本数据")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" etcdctl --cacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.crt --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.key --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://10.100.142.163:2379 compact "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$rev")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("执行碎片整理")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" etcdctl --cacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.crt --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.key --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://10.100.142.163:2379 defrag\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"解除告警"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解除告警"}},[e._v("#")]),e._v(" 解除告警")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" etcdctl --cacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.crt --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.key --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://10.100.142.163:2379 alarm disarm\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"验证可以添加新数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证可以添加新数据"}},[e._v("#")]),e._v(" 验证可以添加新数据")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" etcdctl --cacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/ca.crt --cert"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.crt --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/pki/etcd/server.key --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://10.100.142.163:2379 put newkeytestfornospace "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("blockquote",[t("p",[e._v("⚠️ auto compact只会压缩key space，不会释放物理存储空间。所以需要定期的执行defrag")])])])}),[],!1,null,null,null);s.default=r.exports}}]);