---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# 2.3 使用 ansible 安装 jenkins

> 经实验：ansible 2.7.10版本可以安装 jenkins 2.210版本
>
> 安装更高版本，请一并升级ansible，低版本ansible在安装插件时会报如下错误：
>
> ```
> {"attempts": 5, "changed": false, "details": "HTTP Error 403: Forbidden", "item": "ansible", "msg": "Cannot install plugin."}
> ```

**ansible安装jenkins**

```shell
ansible-galaxy install clay_wangzhi.jenkins
```

galaxy中有详细的文档说明：

> 链接地址：https://galaxy.ansible.com/clay_wangzhi/jenkins

额外注意一些插件的安装：

```
Role-based Authorization Strategy  #权限控制插件
git-parameter
Publish Over SSH
DIngDIng
git-parameter #选项参数增加，git-brach选项
```

## 