#!/usr/bin/env bash

MODE=$1

start_nginx() {
    sed -i "s@{{TRACKER_IP}}@${PUBIP}@g" /etc/fdfs/*.conf
    mv /usr/local/nginx/conf/nginx.conf /usr/local/nginx/conf/nginx.conf.t
    cp /etc/fdfs/nginx.conf /usr/local/nginx/conf
    /usr/local/nginx/sbin/nginx
}

if [ "${MODE}" == "trackerd" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] INFO: container run as trackerd mode."
    /etc/init.d/fdfs_trackerd start
    start_nginx
    while true; do
        if [ -z "$(pgrep fdfs_trackerd)" ]; then
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: fdfs health check failed, container exit!"
            exit 1
        fi
        sleep 1
    done
elif [ "${MODE}" == "storaged" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] INFO: container run as storaged mode."
    
    if [ -z "${PUBIP}" ]; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: Environment variable \"PUBIP\" is not set!"
        exit 1
    fi

    echo "[$(date '+%Y-%m-%d %H:%M:%S')] INFO: use ${PUBIP} as fastdfs ip."
    sed -i "s@{{TRACKER_IP}}@${PUBIP}@g" /etc/fdfs/*.conf

    /etc/init.d/fdfs_storaged start
    while true; do
        if [ -z "$(pgrep fdfs_storaged)" ]; then
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: fdfs health check failed, container exit!"
            exit 1
        fi
        sleep 1
    done
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] INFO: container run as test mode."
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] WARN: fastdfs container must use host network mode."

    if [ -z "${PUBIP}" ]; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: Environment variable \"PUBIP\" is not set!"
        exit 1
    fi

    echo "[$(date '+%Y-%m-%d %H:%M:%S')] INFO: use ${PUBIP} as fastdfs ip."

    /etc/init.d/fdfs_trackerd start
    start_nginx
    /etc/init.d/fdfs_storaged start

    while true; do
        if [ -z "$(pgrep fdfs_trackerd)" ] || \
            [ -z "$(pgrep fdfs_storaged)" ]; then
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: fdfs health check failed, container exit!"
            exit 1
        fi
        sleep 1
    done
fi