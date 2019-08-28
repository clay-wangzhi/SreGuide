##  github向导

Hello World项目是计算机编程的悠久传统。这是一个简单的练习，让你开始学习新的东西。让我们开始使用GitHub！

你将学到如下内容：

1: 创建和使用一个仓库。

2: 开始和管理一个分支。

3: 更改一个文件，然后推送到仓库，并且附带一些注释。

### 创建一个仓库

仓库用来组织一个单一的项目，可以包含目录和文件，图片，视频，表格和数据集等所有项目所需要的内容。建议增加一个README文件用来描述项目相关信息。github可以直接生成一个空的README文件。

1: 进入github，在右上角找到+号，然后选择新建项目。

2: 输入项目名称，比如hello-world。

3: 写一些简短的描述。 

4: 选择可见等级；

5: 单击创建项目，即可完成创建。

创建完成后，如果是空的项目，会显示一个命令列表，以帮助用户通过git进行操作：

命令行指令

Git 全局设置

```
git config --global user.name "clay"
git config --global user.email "clay@clay.com"
```

创建新版本库

```
git clone http://clay.com/clay/hello-world.git
cd hello-world
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

已存在的文件夹

```
cd existing_folder
git init
git remote add origin http://clay.com/clay/hello-world.git
git add .
git commit
git push -u origin master
```

已存在的 Git 版本库

```
cd existing_repo
git remote add origin http://clay.com/clay/hello-world.git
git push -u origin --all
git push -u origin --tags
```



### 合并一个推送请求

经过步骤3之后，项目的所有者或者在上述步骤中指定了指派人，会收到一个合并请求的通知。

当确认后，会进行具体的合并过程。

此过程，也可以通过命令行来完成，具体过程如下

**检出，在本地审查和合并**

**Step 1.** 获取并检出此合并请求的分支

```
git fetch origin
git checkout -b newbranch origin/newbranch
```

**Step 2.** 本地审查变更

**Step 3.** 合并分支并修复出现的任何冲突

**Step 4.** 推送合并的结果到 GitLab

```
git push origin master
```

## 常用的命令行功能

1: 更新

```
$ git fetch origin 更新主分支的更新
$ git fetch 更新所有内容
```

2: 克隆

```
$ git clone http://clay.com/clay/hello-world.git
```

3: 在某个分支上克隆

```
$ git clone -b newbranch http://clay.com/clay/hello-world.git
```

4: 合并

`$ git merge origin/master`

5: 更新，然后合并

`$ git pull`

6: 添加文件

`$ git add [file.name](http://file.name)`

7: 删除文件

`$ git rm [file.name](http://file.name)`

8: 添加注释

`$ git commit -m ‘add a new file’`

9: 推送更改

`$ git push -u origin/master`