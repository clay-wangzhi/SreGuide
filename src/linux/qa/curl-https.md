---
category: Linux
tag:
  - 常见问题
---

# 证书相关问题

## curl https报错: curl: (35) SSL connect error

原因：curl默认支持https是nss，而不是openssl，需要换成openss

源码编译curl

```
cd /usr/local/src/
wget http://curl.haxx.se/download/archeology/curl-7.19.7.tar.gz
tar -zxf curl-7.19.7.tar.gz
cd curl-7.19.7
./configure --without-nss --with-ssl
make
make install
```

转载自：<https://blog.csdn.net/qq_34810257/article/details/80885622>

## ca证书过期导致请求错误

1）查看一下时间date

2） 系统 curl 命令不通的时候

更新一下 证书

```
update-ca-trust
```

 ![img](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/QQ截图20210111155232 [1].jpg)

3）更新一下java里面的cacerts

```
cp -a /etc/pki/ca-trust/extracted/java/cacerts /opt/jdk1.8.0_144/jre/lib/security/cacerts
```

## 老交叉根过期

![image-20210407141053673](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210407141053673.png)

解决办法：联系证书供应商更新证书