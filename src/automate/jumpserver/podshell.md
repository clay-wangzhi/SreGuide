---
category: 自动化工具
tag:
  - jumpserver
---

## 二开 jumpserver  podshell 登录

目的： 控制开发人员可以登录的权限

版本： **v2.19.2**

修改如下文件内容

```python
diff -r old-apps/apps/applications/api/mixin.py new-apps/apps/applications/api/mixin.py
42c42
<     def serialize_applications_with_org(self, applications, tree_id, parent_info, user):
---
>     def serialize_applications_with_org(self, applications, tree_id, parent_info, user, login_username):
84c84
<         tree_nodes = KubernetesTree(tree_id).async_tree_node(parent_info)
---
>         tree_nodes = KubernetesTree(tree_id).async_tree_node(parent_info, login_username)

diff -r old-apps/apps/applications/utils/kubernetes_util.py new-apps/apps/applications/utils/kubernetes_util.py
14a15,16
> import requests
> import json
59,60c61,92
<     def get_pods(self):
<         api = self.get_api()
---
>     #def get_pods(self):
>     #    api = self.get_api()
>     #    try:
>     #        ret = api.list_pod_for_all_namespaces(watch=False, _request_timeout=(3, 3))
>     #    except MaxRetryError:
>     #        logger.warning('Kubernetes connection timed out')
>     #        return
>     #    except ApiException as e:
>     #        if e.status == 401:
>     #            logger.warning('Kubernetes User not authenticated')
>     #        else:
>     #            logger.warning(e)
>     #        return
>     #    data = {}
>     #    for i in ret.items:
>     #        namespace = i.metadata.namespace
>     #        pod_info = {
>     #            'pod_name': i.metadata.name,
>     #            'containers': [j.name for j in i.spec.containers]
>     #        }
>     #        if namespace in data:
>     #            data[namespace].append(pod_info)
>     #        else:
>     #            data[namespace] = [pod_info, ]
>     #    return data
>     def get_pods(self, login_username):
>         # 调用 外部系统，查看 用户具有 appid 的权限列表
>         xxx_api = "https://xxx/xxx_api/v1/auth/user/"
>         xxx_auth = "xxx"
>
>         res = requests.get(xxx_api+login_username+"/appid", headers={"Authorization": xxx_auth})
>         xxx_apps = []
62,64c94,102
<             ret = api.list_pod_for_all_namespaces(watch=False, _request_timeout=(3, 3))
<         except MaxRetryError:
<             logger.warning('Kubernetes connection timed out')
---
>             body = json.loads(res.text)
>             data = body["data"]
>             msg = body["message"]
>             code = body["code"]
>             if code != 200:
>                 print("调用 xxx 返回异常")
>                 return
>         except Exception as e:
>             print("调用 xxx 获取appid列表解析失败:"+str(e))
66,70c104,118
<         except ApiException as e:
<             if e.status == 401:
<                 logger.warning('Kubernetes User not authenticated')
<             else:
<                 logger.warning(e)
---
>         finally:
>             res.close()
>         for app in data:
>             xxx_apps.append(app["id"])
>
>         # 调用k8s-resource-apis, 自封装的 api 接口
>         res_apps = set()
>         k8s_resource_api = "http://xxxx"
>         res = requests.get(k8s_resource_api+"/get-all-app-list/")
>         try:
>             body = json.loads(res.text)
>             data = body["data"]
>             msg = body["msg"]
>         except Exception as e:
>             print("调用k8sResourceApi获取appid列表解析失败:"+str(e))
72,80c120,157
<         data = {}
<         for i in ret.items:
<             namespace = i.metadata.namespace
<             pod_info = {
<                 'pod_name': i.metadata.name,
<                 'containers': [j.name for j in i.spec.containers]
<             }
<             if namespace in data:
<                 data[namespace].append(pod_info)
---
>         finally:
>             res.close()
>
>         if res.status_code == 200:
>             for item in data:
>                 res_apps.add(item)
>
>         # apps
>         apps = []
>         for item in xxx_apps:
>             if item in res_apps:
>                 apps.append(item)
>
>         # get pods
>         ctx = {}    # {"namespace": [{podname:aaaa, containers}]}
>         for appid in apps:
>             res = requests.get(k8s_resource_api+"/get-pods-by-app/"+appid+"/")
>             try:
>                 body = json.loads(res.text)
>                 data = body["data"]
>                 msg = body["msg"]
>             except Exception as e:
>                 print("调用k8sResourceApis获取appid-pods列表解析失败:"+str(e), appid)
>             finally:
>                 res.close()
>
>             if res.status_code == 200:
>                 try:
>                     for pod in data:            # key: pod-name, 原始data结构：{"pod-name": {"Ns": "xxx", "Containers": {"c-name": "c-id"}}}
>                         ns = data[pod]["Ns"]    # ns == "xxx"
>                         if ns not in ctx:
>                             ctx[ns] = []
>                         containers = []
>                         for c in data[pod]["Containers"]:
>                             containers.append(c)
>                         ctx[ns].append({"pod_name": pod, "containers": containers})
>                 except Exception as e:
>                     print("解析重组pod列表信息异常:"+str(e))
82,83c159,160
<                 data[namespace] = [pod_info, ]
<         return data
---
>                 print("调用k8sResourceApis获取pod列表返回状态异常:"+str(res.status_code)+" "+msg)
>         return ctx
86c163
<     def get_kubernetes_data(app_id, system_user_id):
---
>     def get_kubernetes_data(app_id, system_user_id, login_username):
91c168
<         return k8s.get_pods()
---
>         return k8s.get_pods(login_username)
153c230
<     def async_tree_node(self, parent_info):
---
>     def async_tree_node(self, parent_info, login_username):
160c237
<         data = KubernetesClient.get_kubernetes_data(app_id, system_user_id)
---
>         data = KubernetesClient.get_kubernetes_data(app_id, system_user_id, login_username)

diff -r old-apps/apps/perms/api/application/user_permission/user_permission_applications.py new-apps/apps/perms/api/application/user_permission/user_permission_applications.py
59a60,64
>         login_username = ""
>         login_user = str(request.__dict__.get("_user", ""))
>         lft = login_user.split('(')
>         if len(lft) == 2:
>            login_username = lft[1].split(')')[0]
64c69
<             queryset, tree_id, parent_info, self.user
---
>             queryset, tree_id, parent_info, self.user, login_username
```

