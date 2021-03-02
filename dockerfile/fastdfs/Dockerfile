FROM debian:buster

LABEL maintainer="clay <clay.wangzhi@gmail.com>"

ARG TZ="Asia/Shanghai"

ENV TZ ${TZ}

ENV FASTDFS_VERSIPN V6.06
ENV LIB_FAST_COMMON_VERSION V1.0.43
ENV FASTDFS_NGINX_MODULE_VERSION V1.22
ENV FASTDFS_DOWNLOAD_URL https://github.com/happyfish100/fastdfs.git
ENV LIB_FAST_COMMON_DOWNLOAD_URL https://github.com/happyfish100/libfastcommon.git
ENV FASTDFS_NGINX_MODULE_DOWNLOAD_URL https://github.com/happyfish100/fastdfs-nginx-module.git

RUN set -ex \
    && sed -i 's#http://deb.debian.org#http://mirrors.aliyun.com#g' /etc/apt/sources.list \
    && apt update -y \
    && apt upgrade -y \
    && apt install -y procps iputils-ping tzdata locales wget \
        git build-essential libpcre3 libpcre3-dev \
    && locale-gen --purge en_US.UTF-8 zh_CN.UTF-8 \
    && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8 \
    && echo 'LANG="en_US.UTF-8"' > /etc/default/locale \
    && echo 'LANGUAGE="en_US:en"' >> /etc/default/locale \
    && ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone \
    && cd /usr/local/src \
    && git clone ${LIB_FAST_COMMON_DOWNLOAD_URL} \
    && (cd libfastcommon && git checkout tags/${LIB_FAST_COMMON_VERSION} \
    && ./make.sh && ./make.sh install) \
    && git clone ${FASTDFS_DOWNLOAD_URL} \
    && (cd fastdfs && git checkout tags/${FASTDFS_VERSIPN} \
    && ./make.sh && ./make.sh install) \
    && git clone ${FASTDFS_NGINX_MODULE_DOWNLOAD_URL} \
    && (cd fastdfs-nginx-module && git checkout tags/${FASTDFS_NGINX_MODULE_VERSION}) \
    && wget http://nginx.org/download/nginx-1.15.4.tar.gz \
    && tar -zxvf nginx-1.15.4.tar.gz \
    && (cd nginx-1.15.4 && ./configure --add-module=/usr/local/src/fastdfs-nginx-module/src/ --without-http_gzip_module \
    && make && make install) \
    && apt remove build-essential libpcre3-dev git wget -y \
    && apt autoremove -y \
    && apt autoclean -y \
    && rm -rf libfastcommon fastdfs fastdfs-nginx-module nginx-1.15.4* /etc/fdfs /var/lib/apt/lists/*

COPY fdfs /etc/fdfs
COPY entrypoint.sh /entrypoint.sh

VOLUME /data/fastdfs

EXPOSE 22122 23000 8888 80

ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "test" ]