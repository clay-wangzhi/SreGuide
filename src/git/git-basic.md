---
tags:
  - Git
---

# git的基本使用

## 由来

![git](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/git.png)

> 要不说人家是大佬呢，一言不合就自己写一个:+1:

## 安装

下载对应操作系统的 Git 客户端版本 https://git-scm.com/downloads

### Linux

在`centos`上安装

```bash
$ yum install git
```

### windows

下载对应的32位或者64位版本，点击安装即可

```bash
$ git --version # 查看版本号
```

### Mac

用`homebrew`命令安装

```bash
$ brew install git
```

## 核心概念

![git基本流程](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/git基本流程.png)

| 名称        | 释义                                                         |
| ----------- | ------------------------------------------------------------ |
| Workspace   | 工作区：`.git`文件所在的目录就是工作区，一般是项目的根目录   |
| Index/Stage | 暂存区：介于工作区和仓库区之间，暂存修改的                   |
| Repository  | 仓库区/本地仓库：git初始化后，会在当前目录生成一个`.git`目录，这就是版本库 |
| Remote      | 远程仓库：网络上的另一个版本库，可以和本地库交互             |

### git 的基本工作流程

1. 在工作目录中修改文件。
2. 暂存文件，将文件的快照放入暂存区域。
3. 提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。

### git 文件的生命周期

![git文件的生命周期2](https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/git文件的生命周期2.png)

1. 未追踪的文件（Untracked）在 `git add` 之后会变成已暂存（staged）状态。

2. 未修改的文件（Unmodified）在被修改编辑之后会变成已修改（modified）状态。

3. 已修改（modified）的文件在 `git add`之后会变成已暂存（staged）状态。

4. 已暂存的文件（staged）在 `git commit` 之后会变成未修改（Unmodified）状态。

5. 未修改的文件（Unmodified）在 `git rm` 之后会变成未跟踪（Untracked）状态(注意git rm会删除掉指定的文件)。

### git 的三种状态

- 已修改（modified） 表示修改了文件，但还没保存到数据库中，目前在工作目录（Workspace）
- 已暂存（staged） 表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中，目前在暂存区域（Index）
- 已提交（committed） 表示数据已经安全的保存在本地仓库中，目前在本地仓库（Repository）

### git 的文件分类

* 追踪的 Tracked，已经加入版本库中的文件
* 未追踪的 Untracked，未加入到版本库中的，未被管理的文件
* 忽略的 Ignored， git 不再关注的文件，例如一些临时文件

**`.gitignore`文件**

书写格式规范

- 所有空行或者以 `＃` 开头的行都会被 Git 忽略。
- 可以使用标准的 glob 模式匹配。
- 匹配模式可以以（`/`）开头防止递归。
- 匹配模式可以以（`/`）结尾指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（`!`）取反。

> 详解参考 https://github.com/github/gitignore

**glob模式**

所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。

星号（`*`）匹配零个或多个任意字符；

`[abc]` 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；

问号（`?`）只匹配一个任意字符；

如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 `[0-9]` 表示匹配所有 0 到 9 的数字）;

使用两个星号（`*`) 表示匹配任意中间目录，比如`a/**/z` 可以匹配 `a/z`, `a/b/z` 或 `a/b/c/z`等。

## git基本操作

### 新建代码仓库

```bash
# 在当前目录新建一个Git代码库
$ git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]
```

### 设置用户信息

Git的设置文件为`.gitconfig`，它可以在用户主目录下(全局配置)，也可以在项目目录下(项目配置)

```bash
# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"

# 显示当前的Git配置
$ git config --list

# 编辑Git配置文件
$ git config -e [--global]
```

### 添加/删除文件

```bash
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

> :warning: 这一步是把文件的当前变化增加到暂存区中，也就是以后这个文件那需要版本库来跟踪管理，注意这不是提交。

```bash
# 将文件从暂存转成未暂存，从版本库中删除，但不删除工作目录的该文件，即文件恢复成不追踪的状态
$ git rm --cached file
```

### 代码提交

git的提交分为两个步骤：

1. 暂存变更：add作用是把新文件或者文件新的改动添加到一个暂存区stage，也就是加入到index中
2. 提交变更：commit提交的是暂存区中的改动，而不是物理文件目前的改动，提交到当前分支，默认是master

```bash
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 将add和commit合为一步
$ git commit -am 'message'

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

### 远程同步

```bash
# 从远程仓库中抓取和拉取， 它并不会自动合并或修改你当前的工作，要手动合并入你的工作
$ git fetch [remote]

# 列出所有远程仓库
$ git remote

# 详细列出所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull  [remote] [branch]

# 上传本地指定分支到远程仓库
# -u 第一次远程推送的时候加上，以后就可以不使用 -u 参数，可以 git push origin master,也可以 git push都使用默认
$ git push [-u] [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

> 远程版本库名`origin`，这是个习惯用法，将建立origin和后面url的映射，这些信息保存在`.git/config`文件的`[remote "origin"]`端中。

分支

## 分支/标签

### 分支

```bash
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [newbranch]

# 新建一个本地分支，并切换到该分支
# 等价于这两个命令合在一起 git branch newbranch; git checkout newbranch
$ git checkout -b [newbranch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除本地分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]

# 检出版本v2.0
$ git checkout v2.0

# 从远程分支develop创建新本地分支devel并检出
$ git checkout -b devel origin/develop

# 检出head版本的README文件（可用于修改错误回退）
$ git checkout -- README     
```

### 标签

```bash
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```

## 查看信息

```bash
# 显示有变更的文件
$ git status

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

### `diff` 比较

```bash
# 显示暂存区和工作区的差异
$ git diff [file]

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD [file]

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"
```

**HEAD**
HEAD 可以看做是一个游标，一般是指向当前分支最后一次提交。

HEAD 的值存储在`.git/HEAD`中。

| 表示   | 说明                |
| ------ | ------------------- |
| HEAD   | 指代最后一次 commit |
| HEAD^  | 指代上一次提交      |
| HEAD^^ | 指代上上一次提交    |
| HEAD~n | 表示倒数第n次提交   |

`log` 提交历史

```bash
# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

```

## 撤销

* checkout 检出

  checkout 用于创建、切换分支，或恢复工作区文件。

  注意，checkout 会重写工作区，这个命令还是有危险性的。

* reset 重置

  reset 操作，要慎重，用于版本回滚，再恢复，但也要慎重使用。

* revert 撤销

  revert 主要用在主分支上，保留信息。在工作分支上，可以采用 reset 。

```bash
# 列出暂存区可以被检出的文件
$ git checkout

# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 显示 commit 的信息，只要HEAD发生变化，就可以在这里看到
$ git reflog

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变
$ git reset --soft commit

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

## 其他

```bash
git config --global color.ui true                         # git status等命令自动着色
git config --global color.status auto
git config --global color.diff auto
git config --global color.branch auto
git config --global color.interactive auto
git config --global --unset http.proxy                    # remove  proxy configuration on git
git clone git+ssh://git@192.168.53.168/VT.git             # clone远程仓库
git clone -b <指定分支名> <远程仓库地址>                      # clone远程指定 分支
git log -p -m
git show dfb02e6e4f2f7b573337763e5c0013802e392818         # 显示某个提交的详细内容
git show dfb02                                            # 可只用commitid的前几位
git show HEAD                                             # 显示HEAD提交日志
git show HEAD^                                            # 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本
git tag -a v2.0 -m 'xxx'                                  # 增加v2.0的tag
git show v2.0                                             # 显示v2.0的日志及详细内容
git log v2.0                                              # 显示v2.0的日志
git diff HEAD -- ./lib                                    # 比较与HEAD版本lib目录的差异
git diff origin/master..master                            # 比较远程分支master上有本地分支master上没有的
git diff origin/master..master --stat                     # 只显示差异的文件，不显示具体内容
git remote add origin git+ssh://git@192.168.53.168/VT.git # 增加远程定义（用于push/pull/fetch）
git branch --contains 50089                               # 显示包含提交50089的分支
git branch --merged                                       # 显示所有已合并到当前分支的分支
git branch --no-merged                                    # 显示所有未合并到当前分支的分支
git branch -m master master_copy                          # 本地分支改名
git checkout -b master_copy                               # 从当前分支创建新分支master_copy并检出
git checkout -b master master_copy                        # 上面的完整版
git checkout features/performance                         # 检出已存在的features/performance分支
git checkout --track hotfixes/BJVEP933                    # 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支
git checkout -b devel origin/develop                      # 从远程分支develop创建新本地分支devel并检出
git checkout -- README                                    # 检出head版本的README文件（可用于修改错误回退）
git merge origin/master                                   # 合并远程master分支至当前分支
git cherry-pick ff44785404a8e                             # 合并提交ff44785404a8e的修改
git push origin :hotfixes/BJVEP933                        # 删除远程仓库的hotfixes/BJVEP933分支
git fetch                                                 # 获取所有远程分支（不更新本地分支，另需merge）
git fetch --prune                                         # 获取所有原创分支并清除服务器上已删掉的分支
git mv README README2                                     # 重命名文件README为README2
git reset --hard HEAD                                     # 将当前版本重置为HEAD（通常用于merge失败回退）
git rebase
git branch -d hotfixes/BJVEP933                           # 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）
git branch -D hotfixes/BJVEP933                           # 强制删除分支hotfixes/BJVEP933
git ls-files                                              # 列出git index包含的文件
git show-branch                                           # 图示当前分支历史
git show-branch --all                                     # 图示所有分支历史
git whatchanged                                           # 显示提交历史对应的文件修改
git revert dfb02e6e4f2f7b573337763e5c0013802e392818       # 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818
git ls-tree HEAD                                          # 内部命令：显示某个git对象
git rev-parse v2.0                                        # 内部命令：显示某个ref对于的SHA1 HASH
git reflog                                                # 显示所有提交，包括孤立节点
git show HEAD@{5}
git show master@{yesterday}                               # 显示master分支昨天的状态
git log --pretty=format:'%h %s' --graph                   # 图示提交日志
git show HEAD~3
git show -s --pretty=raw 2be7fcb476
git stash                                                 # 暂存当前修改，将所有至为HEAD状态
git stash list                                            # 查看所有暂存
git stash show -p stash@{0}                               # 参考第一次暂存
git stash apply stash@{0}                                 # 应用第一次暂存
git grep "delete from"                                    # 文件中搜索文本“delete from”
git grep -e '#define' --and -e SORT_DIRENT
git gc
git fsck
# 生成一个可供发布的压缩包
$ git archive
```

## 参考链接

* 杰哥的IT之旅：常用的 Git 命令清单
* 马哥教育：Git基本操作