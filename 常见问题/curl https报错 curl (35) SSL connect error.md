## curl https报错: curl: (35) SSL connect error

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