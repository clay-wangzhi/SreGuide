---
title: 如何查看已经安装的nginx、apache、mysql和php的编译参数
tag: 运维常见问题
abbrlink: 458895b7
date: 2017-09-02 21:00:00
---

如何查看已经安装的nginx、apache、mysql和php的编译参数

<!--more-->

## nginx编译参数：

```
nginx -V(大写)
```

## apache编译参数

```
cat your_apache_dir/build/config.nice
```

## php编译参数

```
php -i |grep configure
```

## mysql编译参数

```
cat /user/local/mysql/bin/mysqlbug |grep configure
```

