---
isOriginal: true
category: 云原生
tag:
  - Kubernetes
---

# 巧用 shell-operator 配置 K8s Pod 保护策略

保障 Pod 高可用分为以下几个方面

* 资源池划分 ：打污点、独占、隔离
* Qos 分级 & 优先级：按应用等级保障稳定性
* [自动弹性伸缩 HPA](https://clay-wangzhi.com/cloudnative/best-practice/hpa.html)
* Pod 干扰预算 PDB

本篇主要介绍第四点： 巧用  Shell-operator 配置 K8s Pod 保护策略



## 什么是 Shell-operator ？

Shell-operator 是一个在 Kubernetes 集群中运行事件驱动脚本的工具。

该操作器不是针对特定软件产品的操作器，例如 prometheus-operator 或 kafka-operator。Shell-operator 通过将脚本视为由事件触发的钩子，提供了 Kubernetes 集群事件和 Shell 脚本之间的集成层。您可以将其视为 operator-sdk，但用于脚本。

Shell-operator 用作更高级的 addon-operator 的基础，该 operator 支持 Helm charts 和值存储。

Shell-operator 提供了以下功能：

* Kubernetes 集群的简易管理：使用运维人员熟悉的工具。可以是 bash、python、kubectl 等，真是运维人的实用工具👍👍👍。

* Kubernetes 对象事件：钩子可以由添加、更新或删除事件触发。

* 对象选择器和属性过滤器：shell-operator 可以监视特定的对象集，并检测其属性的更改。

* 简单的配置：钩子绑定定义是脚本的标准输出中的 JSON 或 YAML 文档。

* 验证 Webhook 机制：钩子可以处理 Kubernetes 资源的验证。

* 转换 Webhook 机制：钩子可以处理 Kubernetes 资源的版本转换。



## 借助  Shell-operator 配置 PDB

> 👉 说明：以下是变量，可结合自身需要进行修改
>
> 配置 PDB 需要用到便签选择器  selector，示例中选择 AppID 作为标签匹配
>
> Shell-operator 需要监控一个对象的时间，来更新 PDB 的状态，示例中选择 rollouts.argoproj.io 对象
>
> namespace 选择 prod

1. 创建基础模版 `pdb-init.sh`

   ```bash
   #!/usr/bin/env bash
   
   NAMESPACE="prod"
   
   pdb_templates() {
     cat <<EOF
   apiVersion: policy/v1beta1
   kind: PodDisruptionBudget
   metadata:
     name: clay-test
     namespace: ${NAMESPACE}
   spec:
     minAvailable: 1
     selector:
       matchLabels:
         appid: clay-test
   EOF
   }
   
   replace_or_create() {
     object=$(cat)
   
     if ! kubectl get -f - <<< "$object" >/dev/null 2>/dev/null; then
       kubectl create -f - <<< "$object" >/dev/null
     else
       kubectl replace --force -f - <<< "$object" >/dev/null
     fi
   }
   
   init() {
     echo "Init PDB templates"
     pdb_templates | replace_or_create
     for resourceName in $(kubectl -n ${NAMESPACE} get rollouts.argoproj.io | grep default | awk '{print $1}'); do
       appid=${resourceName%-default} 
       echo "Init Add PDB '${appid}'"
       kubectl -n ${NAMESPACE} get pdb clay-test -o json | \
         jq -r ".metadata.name=\"${appid}\" | .spec.selector.matchLabels[\"appid\"]=\"${appid}\" |
                 .metadata |= with_entries(select([.key] | inside([\"name\", \"namespace\", \"labels\"])))" \
         | replace_or_create
     done
   }
   
   init "$@"
   ```

   ```bash
   bash pdb-init.sh
   ```

2. 编写钩子脚本`pdb-hooks.sh`

   ```bash
   #!/usr/bin/env bash
   
   NAMESPACE="prod"
   ARRAY_COUNT=$(jq -r '. | length-1' $BINDING_CONTEXT_PATH)
   
   run_hook() {
     if [[ $1 == "--config" ]] ; then
       config
     else
       trigger
     fi
   }
   
   config() {
     cat <<EOF
   configVersion: v1
   kubernetes:
   - apiVersion: argoproj.io/v1alpha1
     kind: Rollout
     executeHookOnEvent:
     - Added
     - Deleted
     namespace:
       nameSelector:
         matchNames:
         - ${NAMESPACE}
   EOF
   }
   
   trigger() {
     for IND in `seq 0 $ARRAY_COUNT`; do
       resourceEvent=$(jq -r ".[$IND].watchEvent" $BINDING_CONTEXT_PATH)
       resourceName=$(jq -r ".[$IND].object.metadata.name" $BINDING_CONTEXT_PATH)
       appid=${resourceName%-default}
       if [[ $resourceEvent == "Added" ]] ; then
         echo "Add PDB '${appid}'"
         kubectl -n ${NAMESPACE} get pdb clay-test -o json | \
           jq -r ".metadata.name=\"${appid}\" | .spec.selector.matchLabels[\"appid\"]=\"${appid}\" |
                   .metadata |= with_entries(select([.key] | inside([\"name\", \"namespace\", \"labels\"])))" \
           | replace_or_create
       elif [[ $resourceEvent == "Deleted" ]]; then
         echo "Delete PDB '${appid}'"
         kubectl -n ${NAMESPACE} delete pdb ${appid}
       else
         echo "Do nothing"
       fi
     done
   }
   
   replace_or_create() {
     object=$(cat)
   
     if ! kubectl get -f - <<< "$object" >/dev/null 2>/dev/null; then
       kubectl create -f - <<< "$object" >/dev/null
     else
       kubectl replace --force -f - <<< "$object" >/dev/null
     fi
   }
   
   run_hook "$@"
   ```

3. 打包镜像，Dockerfile 如下
   ```dockerfile
   FROM ghcr.io/flant/shell-operator:latest
   ADD pdb-hooks.sh /hooks
   ```

   ```bash
   # 打包上传镜像
   docker build -t wangzhichidocker/shell-operator-pdb:v1.0 .
   docker push wangzhichidocker/shell-operator-pdb:v1.0
   ```

4. 编写 RBAC、Deployment等`shell-operator-pdb.yaml`，部署到 K8s 集群中

   ```yaml
   apiVersion: v1
   kind: ServiceAccount
   metadata:
     name: shell-operator-pdb
     namespace: monitor
     labels:
       app: shell-operator-pdb
       appid: shell-operator-pdb
   
   
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRole
   metadata:
     labels:
       app: shell-operator-pdb
       appid: shell-operator-pdb
     name: shell-operator-pdb
   rules:
   - apiGroups:
     - ""
     resources:
     - pods
     verbs:
     - get
     - watch
     - list
   - apiGroups:
     - argoproj.io
     resources:
     - '*'
     verbs:
     - get
     - list
     - watch
   - apiGroups:
     - policy
     resources:
     - poddisruptionbudgets
     verbs:
     - get
     - create
     - patch
     - update
     - delete
   
   
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRoleBinding
   metadata:
     name: shell-operator-pdb
     labels:
       app: shell-operator-pdb
       appid: shell-operator-pdb
   roleRef:
     apiGroup: rbac.authorization.k8s.io
     kind: ClusterRole
     name: shell-operator-pdb
   subjects:
   - kind: ServiceAccount
     name: shell-operator-pdb
     namespace: monitor
   
   
   ---
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: shell-operator-pdb
     labels:
       app: shell-operator-pdb
       appid: shell-operator-pdb
     namespace: monitor
   spec:
     replicas: 1
     selector:
       matchLabels:
         app: shell-operator-pdb
     strategy:
       rollingUpdate:
         maxSurge: 25%
         maxUnavailable: 1
       type: RollingUpdate
     template:
       metadata:
         labels:
           app: shell-operator-pdb
           appid: shell-operator-pdb
       spec:
         containers:
         - image: wangzhichidocker/shell-operator-pdb:v1.0
           imagePullPolicy: IfNotPresent
           name: shell-operator-pdb
           resources:
             limits:
               cpu: 500m
               memory: 1000Mi
             requests:
               cpu: 100m
               memory: 200Mi
         dnsPolicy: ClusterFirst
         nodeSelector:
           kubernetes.io/os: linux
         serviceAccountName: shell-operator-pdb
   ```

   ```bash
   # 部署
   kubectl apply -f deploy/shell-operator-pdb.yaml
   ```

5. 观察日志查看运行状态 `kubectl -n monitor  logs -f shell-operator-pdb-xxx`

   ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240318133056140.png)

   ![image-20240318133226486](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20240318133226486.png)



快捷体验：

```bash
git clone https://github.com/clay-wangzhi/shell-operator-pdb
bash pdb-init.sh
kubectl apply -f deploy/shell-operator-pdb.yaml
```

详见：https://github.com/clay-wangzhi/shell-operator-pdb





参考链接：

* shell-operator：https://github.com/flant/shell-operator





我是 Clay，下期见  👋

---



> * 欢迎订阅我的公众号「SRE运维进阶之路」或关注我的 Github https://github.com/clay-wangzhi/wiki  查看最新文章
>
> * 欢迎加我微信`sre-k8s-ai`，与我讨论云原生、稳定性相关内容



<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/weixin-20240220180036567.png" alt="weixin" style="zoom: 50%;" />

