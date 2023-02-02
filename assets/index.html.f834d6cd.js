import{_ as u,r as s,c as d,a as l,b as n,w as i,F as _,d as e,e as o,o as a}from"./app.f4c852e1.js";const c={},h=l("h1",{id:"kubernetes-\u5B66\u4E60\u7B14\u8BB0",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#kubernetes-\u5B66\u4E60\u7B14\u8BB0","aria-hidden":"true"},"#"),e(" Kubernetes \u5B66\u4E60\u7B14\u8BB0")],-1),r=l("h2",{id:"summary",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#summary","aria-hidden":"true"},"#"),e(" Summary")],-1),k=e("\u96C6\u7FA4\u642D\u5EFA "),m=e("\u4F7F\u7528 ansible \u5FEB\u901F\u642D\u5EFA k8s \u96C6\u7FA4"),b=e("\u5E38\u89C1\u5E94\u7528\u5B89\u88C5\u914D\u7F6E "),f=e("harbor \u5B89\u88C5\u914D\u7F6E(k8s)"),v=e("harbor \u9AD8\u53EF\u7528\u5B89\u88C5(docker-compose)"),p=e("rancher \u5B89\u88C5\u914D\u7F6E"),g=e("helm \u5B89\u88C5\u914D\u7F6E"),x=e("\u5BB9\u5668\u8FD0\u884C\u65F6 "),C=e("GPU \u9002\u914D"),P=e("Kata Container"),N=e("\u5B58\u50A8 "),y=e("longhorn \u5B89\u88C5\u914D\u7F6E"),L=e("\u4F7F\u7528 Rook \u5FEB\u901F\u642D\u5EFA Ceph \u96C6\u7FA4"),w=e("\u670D\u52A1\u53D1\u73B0\u4E0E\u8DEF\u7531 "),R=e("ingress-nginx \u5B89\u88C5\u914D\u7F6E"),S=e("\u96C6\u7FA4\u7F51\u7EDC "),V=e("\u7406\u89E3CNI\u548CCNI\u63D2\u4EF6"),B=e("calico \u5B89\u88C5\u914D\u7F6E"),D=e("\u76D1\u63A7\u544A\u8B66 "),F=e("Prometheus Operator \u5B89\u88C5\u914D\u7F6E"),I=l("li",null,[e("\u5B9E\u7528\u6280\u5DE7 "),l("ul",null,[l("li",null,"\u9AD8\u6548\u5B9E\u7528 kubectl")])],-1),T=e("\u8FD0\u7EF4\u624B\u518C "),E=e("etcd \u5907\u4EFD\u6062\u590D"),K=e("velero \u5907\u4EFD\u6062\u590D"),U=e("k8s \u5F00\u542F\u5BA1\u8BA1\u65E5\u5FD7"),q=e("\u5185\u6838\u7248\u672C\u5347\u7EA7"),G=e("\u4F7F\u7528 kubeadm \u624B\u52A8\u66F4\u65B0\u8BC1\u4E66"),J=e("\u4E3A k8s node \u914D\u7F6E\u8D44\u6E90\u9884\u7559"),O=e("\u5229\u7528LXCFS\u63D0\u5347\u5BB9\u5668\u8D44\u6E90\u53EF\u89C1\u6027"),X=e("\u6700\u4F73\u5B9E\u8DF5 "),j=l("li",null,"\u4F18\u96C5\u7EC8\u6B62",-1),z=e("k8s node \u914D\u7F6E\u8D44\u6E90\u9884\u7559"),A=e("\u6027\u80FD\u538B\u6D4B\u6307\u6807\u53CA\u65B9\u6CD5"),H=l("li",null,"\u5065\u5EB7\u68C0\u67E5\u914D\u7F6E",-1),M=l("li",null,"\u5408\u7406\u8BBE\u7F6E Request \u4E0E Limit",-1),Q=e("Pod \u6027\u80FD\u4F18\u5316 "),W=e("CPU \u7ED1\u6838"),Y=o("<li>\u9AD8\u53EF\u7528\u90E8\u7F72 <ul><li>Pod \u6253\u6563\u8C03\u5EA6</li><li>\u5DE5\u4F5C\u8D1F\u8F7D\u5E73\u6ED1\u5347\u7EA7</li></ul></li><li>DNS <ul><li>Coredns \u6027\u80FD\u4F18\u5316</li></ul></li><li>\u5F39\u6027\u4F38\u7F29 <ul><li>\u81EA\u5B9A\u4E49\u6307\u6807\u8FDB\u884C\u5F39\u6027\u4F38\u7F29</li></ul></li><li>Java \u5E94\u7528\u5BB9\u5668\u5316</li><li>\u96C6\u7FA4\u8FD0\u7EF4 <ul><li>ETCD \u4F18\u5316</li><li>\u5927\u89C4\u6A21\u96C6\u7FA4\u4F18\u5316</li></ul></li><li>\u65E5\u5FD7\u6536\u96C6</li><li>\u957F\u8FDE\u63A5\u670D\u52A1 <ul><li>istio \u89E3\u51B3 grpc \u8D1F\u8F7D\u5747\u8861</li></ul></li>",7),Z=e("\u6545\u969C\u6392\u67E5 "),$=o("<li>\u6392\u969C\u6280\u80FD <ul><li>Linux \u5E38\u7528\u6392\u67E5\u547D\u4EE4</li><li>\u4F7F\u7528 nsenter \u8FDB\u5165 netns \u6392\u67E5\u7F51\u7EDC\u95EE\u9898</li><li>\u4F7F\u7528 tcpdump \u6293\u5305\u5206\u6790</li><li>\u4F7F\u7528 wireshark \u5206\u6790\u6570\u636E\u5305</li></ul></li><li>Pod \u6392\u969C <ul><li>Pod \u72B6\u6001\u5F02\u5E38</li><li>\u5065\u5EB7\u68C0\u67E5\u5931\u8D25</li></ul></li><li>\u8282\u70B9\u6392\u969C <ul><li>\u8282\u70B9\u9AD8\u8D1F\u8F7D</li><li>\u5185\u5B58\u788E\u7247\u5316</li><li>\u78C1\u76D8\u7206\u6EE1</li><li>PID \u7206\u6EE1</li><li>inotify \u8D44\u6E90\u8017\u5C3D</li></ul></li><li>\u7F51\u7EDC\u6392\u969C <ul><li>\u7F51\u7EDC\u8D85\u65F6</li><li>\u7F51\u7EDC\u4E22\u5305</li></ul></li>",4),ll=e("\u96C6\u7FA4\u6392\u969C "),el=e("\u5982\u4F55\u66F4\u65B0Terminating\u72B6\u6001\u7684\u547D\u540D\u7A7A\u95F4"),tl=e("\u6545\u969C\u590D\u76D8\u6A21\u7248"),nl=e("\u6392\u969C\u6848\u4F8B "),il=e("\u5378\u8F7D rancher \u5BFC\u81F4 node \u88AB\u6E05\u7A7A"),ol=e("lvs \u5065\u5EB7\u68C0\u67E5 k8s apiserver"),ul=e("\u5B89\u5168\u52A0\u56FA "),sl=e("k8s \u66F4\u6539apiserver\u4F7F\u7528\u5F3A\u52A0\u5BC6\u7B97\u6CD5"),dl=e("\u6559\u7A0B|\u9879\u76EE|\u535A\u5BA2|\u6587\u7AE0\u63A8\u8350"),_l=e("\u9644\u5F55 "),al=e("kubectl \u901F\u67E5\u624B\u518C");function cl(hl,rl){const t=s("RouterLink");return a(),d(_,null,[h,r,l("ul",null,[l("li",null,[k,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/k8s-install.html"},{default:i(()=>[m]),_:1})])])]),l("li",null,[b,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/harbor.html"},{default:i(()=>[f]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/docker-harbor-ha.html"},{default:i(()=>[v]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/rancher-install.html"},{default:i(()=>[p]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/helm.html"},{default:i(()=>[g]),_:1})])])]),l("li",null,[x,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/k8s-gpu.html"},{default:i(()=>[C]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/kata.html"},{default:i(()=>[P]),_:1})])])]),l("li",null,[N,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/longhorn.html"},{default:i(()=>[y]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/deploy-ceph-cluster-with-rook.html"},{default:i(()=>[L]),_:1})])])]),l("li",null,[w,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/ingress-nginx.html"},{default:i(()=>[R]),_:1})])])]),l("li",null,[S,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/cni.html"},{default:i(()=>[V]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/calico.html"},{default:i(()=>[B]),_:1})])])]),l("li",null,[D,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/kube-prometheus-stack.html"},{default:i(()=>[F]),_:1})])])]),I,l("li",null,[T,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/etcd-backup-restore.html"},{default:i(()=>[E]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/velero.html"},{default:i(()=>[K]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/k8s-audit.html"},{default:i(()=>[U]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/kernel-upgrade.html"},{default:i(()=>[q]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/cert-update.html"},{default:i(()=>[G]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/k8s-allocatable.html"},{default:i(()=>[J]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/lxcfs.html"},{default:i(()=>[O]),_:1})])])]),l("li",null,[X,l("ul",null,[j,l("li",null,[n(t,{to:"/cloudnative/kubernetes/kube-reserved.html"},{default:i(()=>[z]),_:1})]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/sysbench.html"},{default:i(()=>[A]),_:1})]),H,M,l("li",null,[Q,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/numa.html"},{default:i(()=>[W]),_:1})])])]),Y])]),l("li",null,[Z,l("ul",null,[$,l("li",null,[ll,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/namespace-terminating.html"},{default:i(()=>[el]),_:1})])])]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/fault.html"},{default:i(()=>[tl]),_:1})]),l("li",null,[nl,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/delete-rancher-causing-node-disappear.html"},{default:i(()=>[il]),_:1})])])]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/lvs-health-check.html"},{default:i(()=>[ol]),_:1})])])]),l("li",null,[ul,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/apiserver-tls.html"},{default:i(()=>[sl]),_:1})])])]),l("li",null,[n(t,{to:"/cloudnative/kubernetes/recommend.html"},{default:i(()=>[dl]),_:1})]),l("li",null,[_l,l("ul",null,[l("li",null,[n(t,{to:"/cloudnative/kubernetes/kubectl-cheatsheet.html"},{default:i(()=>[al]),_:1})])])])])],64)}var ml=u(c,[["render",cl],["__file","index.html.vue"]]);export{ml as default};
