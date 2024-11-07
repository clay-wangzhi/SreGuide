---
isOriginal: true
category: 云原生
tag:
  - Kubernetes
---

# K8s 开启审计日志

## 一、背景

- 应安全规范，对 apiserver 核心组件，需要记录，"谁在什么时候操作了什么"
- 方便故障排查

## 二、操作步骤

### apiserver 开启审计日志 

在所有 master 节点执行

1. 备份 配置文件

   ```bash
   mkdir -p /home/clay/bak$(date +%F)
   cp /etc/kubernetes/manifests/kube-apiserver.yaml /home/clay/bak$(date +%F)
   ```

2. 创建审计策略

   ```bash
   mkdir /etc/kubernetes/audit/
   ```

   `vim /etc/kubernetes/audit/audit-policy.yaml`

   ```yaml
   apiVersion: audit.k8s.io/v1beta1 # This is required.
   kind: Policy
   omitStages:
     - "RequestReceived"
   rules:
     - level: None
       users: ["system:kube-proxy"]
       verbs: ["watch"]
       resources:
         - group: "" # core
           resources: ["endpoints", "services"]
     - level: None
       users: ["system:unsecured"]
       namespaces: ["kube-system"]
       verbs: ["get"]
       resources:
         - group: "" # core
           resources: ["configmaps"]
     - level: None
       users: ["system:serviceaccount:kube-system:calico-node"]
       verbs: ["get","list"]
     - level: None
       users: ["kubelet"] # legacy kubelet identity
       verbs: ["get"]
       resources:
         - group: "" # core
           resources: ["nodes"]
     - level: None
       userGroups: ["system:nodes"]
       verbs: ["get"]
       resources:
         - group: "" # core
           resources: ["nodes"]
     - level: None
       users:
         - system:kube-controller-manager
         - system:kube-scheduler
         - system:serviceaccount:kube-system:endpoint-controller
       verbs: ["get", "update"]
       namespaces: ["kube-system"]
       resources:
         - group: "" # core
           resources: ["endpoints"]
     - level: None
       users: ["system:apiserver"]
       verbs: ["get"]
       resources:
         - group: "" # core
           resources: ["namespaces"]
     - level: None
       nonResourceURLs:
         - /healthz*
         - /version
         - /swagger*
     - level: None
       resources:
         - group: "" # core
           resources: ["events"]
     - level: Metadata
       resources:
         - group: "" # core
           resources: ["secrets", "configmaps"]
         - group: authentication.k8s.io
           resources: ["tokenreviews"]
     - level: Metadata
   ```

3. 修改apiserver 配置文件
   `vim /etc/kubernetes/manifests/kube-apiserver.yaml`

   ```yaml
   # 在spec.containers.command 最后新增
       - --audit-policy-file=/etc/kubernetes/audit/audit-policy.yaml
       - --audit-log-maxage=7
       - --audit-log-maxsize=200
       - --audit-log-path=/var/log/apiserver/audit.log
   # 在spec.containers.volumeMounts 最后新增
       - mountPath: /etc/kubernetes/audit
         name: audit
         readOnly: true
       - mountPath: /var/log/apiserver/
         name: log
   # 在spec.volumes 最后新增
     - hostPath:
         path: /etc/kubernetes/audit
         type: DirectoryOrCreate
       name: audit
     - hostPath:
         path: /var/log/apiserver
         type: DirectoryOrCreate
       name: log
   ```

### 使用 filebeat 收集审计日志到 elk 中

编写 yaml 文件

`vim filebeat-configmap.yaml`

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: filebeat-config
  namespace: audit
  labels:
    k8s-app: filebeat
    kubernetes.io/cluster-service: "true"
    app: filebeat-config
data:
  filebeat.yml: |
    filebeat.prospectors:
    - input_type: log
      enabled: true
      tail_files: true
      paths:
        - /var/log/apiserver/*.log

    output.kafka:
      hosts: ["xxx:9092"]
      topic: 'test_k8s_audit_log'
      required_acks: 1
      partition.round_robin:
        reachable_only: false
      compression: gzip
      max_message_bytes: 10000000
```

`vim filebeat-ds.yaml`

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: filebeat
  namespace: audit
  labels:
    k8s-app: filebeat
spec:
  selector:
    matchLabels:
      app: filebeat
      k8s-app: filebeat
  template:
    metadata:
      name: filebeat
      labels:
        app: filebeat
        k8s-app: filebeat
    spec:
      tolerations:
      - effect: NoSchedule
        key: node-role.kubernetes.io/master
      nodeSelector:
        node-role.kubernetes.io/master-select: master
      containers:
      - image: docker.elastic.co/beats/filebeat:6.4.0
        name: filebeat
        args: [
            "-c", "/home/filebeat-config/filebeat.yml",
            "-e",
        ]
        securityContext:
          runAsUser: 0
        volumeMounts:
        - name: log
          mountPath: /var/log/apiserver
        - name: "filebeat-volume"
          mountPath: "/home/filebeat-config"
      volumes:
        - name: filebeat-volume
          configMap:
            name: filebeat-config
        - hostPath:
            path: /var/log/apiserver
            type: DirectoryOrCreate
          name: log
```

master 节点打标签，部署

```bash
kubectl label node masternamexxx node-role.kubernetes.io/master-select=master
kubectl create ns audit
kubectl apply -f filebeat-configmap.yaml
kubectl apply -f filebeat-ds.yaml
```

