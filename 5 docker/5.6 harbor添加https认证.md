# Configuring Harbor with HTTPS Access

## Getting Certificate Authority

```
# hostnamectl set-hostname sdqcharbor.com
# echo "本机地址 sdqcharbor.com" >> /etc/hosts
# mkdir -p /opt/certs
# cd /opt/certs
# openssl genrsa -out ca.key 4096
# openssl req -x509 -new -nodes -sha512 -days 3650 \
  -subj "/CN=sdqcharbor.com" \
  -key ca.key \
  -out ca.crt

```

## Getting Server Certificate

**1) Create your own Private Key:**

```
openssl genrsa -out sdqcharbor.com.key 4096
```

**2) Generate a Certificate Signing Request:**

```
openssl req -sha512 -new \
  -subj "/CN=sdqcharbor.com" \
  -key sdqcharbor.com.key \
  -out sdqcharbor.com.csr
```

**3) Generate the certificate of your registry host:**

```
cat > v3.ext <<-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth 
subjectAltName = @alt_names

[alt_names]
DNS.1=sdqcharbor.com
DNS.2=192.168.162.45
EOF
```

```
openssl x509 -req -sha512 -days 3650     -extfile v3.ext     -CA ca.crt -CAkey ca.key -CAcreateserial     -in sdqcharbor.com.csr     -out sdqcharbor.com.crt
```

## Configuration and Installation

```
mkdir /data/cert
cp sdqcharbor.com.crt /data/cert/
cp sdqcharbor.com.key /data/cert/
```

**2) Configure Server Certificate, Key and CA for Docker**

```
openssl x509 -inform PEM -in sdqcharbor.com.crt -out sdqcharbor.com.cert
```

Delpoy .com.cert`, `yourdomain.com.key`, and `ca.crt` for Docker:

```
mkdir /etc/docker/certs.d/sdqcharbor.com
cp sdqcharbor.com.cert sdqcharbor.com.key ca.crt /etc/docker/certs.d/sdqcharbor.com
```

**3) Configure Harbor**

vim /usr/local/harbor/harbor.yml

修改为以下内容

```
hostname: sdqcharbor.com
https:
  certificate: /data/cert/sdqcharbor.com.crt
  private_key: /data/cert/sdqcharbor.com.key

```

If Harbor is already running, stop and remove the existing instance. Your image data remain in the file system

```
docker-compose down -v
rm -rf /data/database/
rm -rf /data/registry/
```

编辑docker中配置文件，`daemon.json`，去掉`"insecure-registries": ["sdqcharbor.com"]`这一行

重启docker

```
systemctl daemon-reload
systemctl restart docker
```

预编译

```
./prepare
docker-compose -f ./docker-compose.yml up -d
```

登录

```
docker login sdqcharbor.com
```

上传镜像

```
docker tag centos:latest sdqcharbor.com/library/centos:latest
docker push sdqcharbor.com/library/centos:latest 
```

