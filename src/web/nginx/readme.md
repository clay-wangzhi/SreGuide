---
sticky: 52
star: 52
time: 2020-03-20
category: web中间件
tags:
  - Nginx
---

# Nginx 学习笔记

## 推荐教程

[nginx核心知识150讲 | 陶辉 | 极客时间](https://github.com/russelltao/geektime-nginx) :star:

> 以下笔记大部分出自以上教程



## 知识体系

Hello Nginx~

![](nginx-com-know.png)

[详细的核心知识点 复习思维导图](https://clay-wangzhi.com/nginx-core-know.png)



## Summary

* [1. 初识Nginx](first.md)
* [2. nginx架构基础](framework.md)
* [3. nginx配置文件详解](config.md)
  * [3.1 nginx全局块和events块配置](global-events.md)
  * [3.2 nginxHTTP块配置](http.md)
  * [3.3 nginxSERVER块配置](server.md)
  * [3.4 nginxLOCATION块配置](location.md)
  * [3.5 nginx常用模块](module.md)
* [4. 内核参数优化](core.md)
* [5. 状态码](status.md)
* [6. nginx的常见问题](qa.md)
  * [6.1 Nginx出现403 forbidden的三种原因](forbidden.md)