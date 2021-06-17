---
category: Python
---

# 5.1 Python 模块常用的几种安装方式

## 单文件模块

直接把文件拷贝到 `$python_dir/Lib`

## 多文件模块，带setup.py

下载模块包，进行解压，进入模块文件夹，执行：

```shell
python setup.py install
```

## easy_install 方式

先下载 ez_setup.py，运行 python ez_setup 进行 easy_install 工具的安装，之后就可以使用 easy_install 进行安装 package 了。

```shell
easy_install  packageNameeasy_install  package.egg
```

## pip 方式

先进行pip工具的安裝：easy_install pip（pip 可以通过easy_install 安裝，而且也会装到 Scripts 文件夹下。）

```shell
pip install PackageName # 安裝
pip install -U PackageName # 更新
pip uninstall PackageName # 移除
pip search PackageName # 搜索
pip help # 帮助
```

注：虽然Python的模块可以拷贝安装，但是一般情况下推荐制作一个安装包，即写一个setup.py文件来安装。setup.py文件的使用如下:

```shell
python setup.py build     #编译
python setup.py install   #安装
python setup.py sdist     #制作分发包
python setup.py bdist_wininst    #制作windows下的分发包
python setup.py bdist_rpm
```

