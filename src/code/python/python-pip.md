---
category: Python
---

# 1.4 pypi 配置国内镜像

> 转载自：Python | willseecloud | 看云

pypi 国内镜像目前有：

- 阿里云(aliyun) - https://mirrors.aliyun.com/pypi/simple/
- 豆瓣(douban) - https://pypi.douban.com/simple/
- 清华大学(tuna) - [https://pypi.tuna.tsinghua.edu.cn](https://pypi.tuna.tsinghua.edu.cn/)
- 中国科学技术大学 - http://pypi.mirrors.ustc.edu.cn/

手动指定源，可以在pip后面跟-i 来指定源，比如用豆瓣的源来安装web.py框架：

```
pip install -i http://pypi.douban.com/simple/ gevent

pip3 install pip --upgrade -i https://mirrors.aliyun.com/pypi/simple/

pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt

easy_install -i http://pypi.douban.com/simple/ gevent
```

配置文件指定源，linux下修改~/.pip/pip.conf，如果没这文件则创建。

```
mkdir ~/.pip
cat > ~/.pip/pip.conf << EOF 
[global]
trusted-host=mirrors.aliyun.com
index-url=https://mirrors.aliyun.com/pypi/simple/
EOF
```

easy_install配置国内源

```
cat > ~/.pydistutils.cfg << EOF 
[easy_install]
index-url=https://mirrors.aliyun.com/pypi/simple/ 
find-links=https://mirrors.aliyun.com/pypi/simple/
EOF
```

windows配置

文件夹窗口输入 ：

```
%APPDATA%
```

新建一个pip文件夹，在pip文件夹里面新建一个配置文件`pip.ini`：

```
[global]
trusted-host=mirrors.aliyun.com
index-url=https://mirrors.aliyun.com/pypi/simple/
```

清华源

```
[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
```