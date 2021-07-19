---
category: 云原生
tags:
  - Kubernetes
---

# 如何更新Terminating状态的命名空间

Kubernetes中namespace有两种常见的状态，即Active和Terminating状态，其中Terminating状态一般会比较少见，当对应的命名空间下还存在运行的资源，但该命名空间被删除时才会出现所谓的Terminating状态，这种情况下只要等待Kubernetes本身将命名空间下的资源回收后，该命名空间将会被系统自动删除。

但是在某些情况下，即使命名空间下没有运行的资源，但依然无法删除Terminating状态的命名空间的情况，它会一直卡在Terminating状态下。

解决这个问题的步骤为：

1. 查看命名空间详情

   ```
   $ kubectl  get ns  | grep rdb
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
   ```

2. 查看该命名空间下的资源

   ```
   # 查看集群中可以使用命名空间隔离的资源
   $ kubectl api-resources -o name --verbs=list --namespaced | xargs -n 1 kubectl get --show-kind --ignore-not-found -n rdbms
   ```

   发现rdbms命名空间下并无资源占用。

3. 尝试对命名空间进行删除

   直接删除命名空间rdbms

   ```
   $ kubectl  delete ns rdbms
   Error from server (Conflict): Operation cannot be fulfilled on namespaces "rdbms": The system is ensuring all content is removed from this namespace.  Upon completion, this namespace will automatically be purged by the system.
   ```

   提示删除操作未能完成，说系统会在确定没用资源后将会被自动删除。

4. 使用强制删除

   ```
   $ kubectl  delete ns rdbms --force --grace-period=0
   warning: Immediate deletion does not wait for confirmation that the running resource has been terminated. The resource may continue to run on the cluster indefinitely.
   Error from server (Conflict): Operation cannot be fulfilled on namespaces "rdbms": The system is ensuring all content is removed from this namespace.  Upon completion, this namespace will automatically be purged by the system.
   ```

   依然无法删除该命名空间。

5. 但是大部分时候，这些资源也杀不掉，解决办法是使用原生接口删除

   获取namespace的详情信息

   ```
   $ kubectl  get ns rdbms  -o json > rdbms.json
   ```

   查看namespace定义的json配置，编辑json文件并删除掉spec部分。

   ```
   $ cat rdbms.json
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
   ```

   执行接口PUT请求更新后，命名空间将自动删除。

   ```
   kubectl replace --raw "/api/v1/namespaces/<YOUR_NAMESPACE>/finalize" -f ./<YOUR_NAMESPACE>.json
   ```

   如果仍然无法删除命名空间，请查看metadata部分是否存在finalizers字段，如果存在，需要通过如下命令进入命名空间后删除该字段：

   ```
   kubectl edit ns rdbms
   ```

> tips:  我个人一般直接使用步骤5

参考链接：

* [如何更新Terminating状态的命名空间 | 华为云](https://support.huaweicloud.com/cce_faq/cce_faq_00277.html)
* [Namespace “stuck” as Terminating, How do I remove it? | stackoverflow](https://stackoverflow.com/questions/52369247/namespace-stuck-as-terminating-how-do-i-remove-it)

