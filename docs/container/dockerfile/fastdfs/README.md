## 使用方法

需要注意的是 你需要在运行容器的时候制定宿主机的`ip` 用参数`PUBIP` 来指定

```bash
mkdir -p /data/fastdfs
docker pull wangzhichidocker/fastdfs:1.0.0
docker container run -d --name fdfs-test --network host -e PUBIP=xxx --mount type=bind,source=/data/fastdfs,target=/data/fastdfs wangzhichidocker/fastdfs:1.0.0
```

## 客户端测试

拷贝一个图片到容器内

```
docker container cp favicon.png fdfs-test:/tmp
```

进入容器上传图片

```
docker container exec -it fdfs-test /bin/bash
fdfs_upload_file /etc/fdfs/client.conf /tmp/favicon.png 
```

返回值为`group1/M00/00/00/wKh932A9-xCAcK7FAAGO_BH5JHs036.png`

在浏览器访问`http://宿主机IP:8888/group1/M00/00/00/wKh932A9-xCAcK7FAAGO_BH5JHs036.png`，如果访问图片正常，则测试成功