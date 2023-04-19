# 目录结构设计

> 转载自：极客时间|孔令飞

遵循一个好的目录规范，把代码目录设计得可维护、可扩展，甚至比文档规范、Commit 规范来得更加重要。

## 要求

* 命名清晰
* 功能明确
* 全面性：目录结构应该尽可能全面地包含研发过程中需要的功能，例如文档、脚本、源码管理、API 实现、工具、第三方包、测试、编译产物等。
* 可预测性：项目规模一定是从小到大的，所以一个好的目录结构应该能够在项目变大时，仍然保持之前的目录结构
* 可扩展性

## 目录结构

根据功能，我们可以将目录结构分为结构化目录结构和平铺式目录结构两种。结构化目录结构主要用在 Go 应用中，相对来说比较复杂；而平铺式目录结构主要用在 Go 包中，相对来说比较简单。

### 平铺式目录结构

一个 Go 项目可以是一个应用，也可以是一个代码框架 / 库，当项目是代码框架 / 库时，比较适合采用平铺式目录结构。平铺方式就是在项目的根目录下存放项目的代码，整个目录结构看起来更像是一层的，这种方式在很多框架 / 库中存在，使用这种方式的好处是引用路径长度明显减少

### 结构化目录结构

它比较适合 Go 应用，当前 Go 社区比较推荐的结构化目录结构是 [project-layout](https://github.com/golang-standards/project-layout) 。虽然它并不是官方和社区的规范，但因为组织方式比较合理，被很多 Go 开发人员接受。

## 项目目录（结构化）

一个 Go 项目包含 3 大部分：Go 应用 、项目管理和文档

 ![image-20220630151100318](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220630151100318.png)

### Go 应用：主要存放后端代码

1. /cmd

   一个项目有很多组件，可以把组件 main 函数所在的文件夹统一放在/cmd 目录下

   每个组件的目录名应该跟你期望的可执行文件名是一致的。这里要保证 /cmd/<组件名> 目录下不要存放太多的代码，如果你认为代码可以导入并在其他项目中使用，那么它应该位于 /pkg 目录中。如果代码不是可重用的，或者你不希望其他人重用它，请将该代码放到 /internal 目录中。

2. /internal
   存放**私有应用**和库代码。如果一些代码，你不希望在其他应用和库中被导入，可以将这部分代码放在/internal 目录下。

   在引入其它项目 internal 下的包时，Go 语言会在编译时报错：

   ```
   An import of a path containing the element “internal” is disallowed
   if the importing code is outside the tree rooted at the parent of the
   "internal" directory.
   ```

   可以通过 Go 语言本身的机制来约束其他项目 import 项目内部的包。/internal 目录建议包含如下目录：

   * /internal/apiserver：该目录中存放真实的应用代码。这些应用的共享代码存放在/internal/pkg 目录下。
   * /internal/pkg：存放项目内可共享，项目外不共享的包。这些包提供了比较基础、通用的功能，例如工具、错误码、用户验证等功能。

   我的建议是，一开始将所有的共享代码存放在 /internal/pkg 目录下，当该共享代码做好了对外开发的准备后，再转存到/pkg目录下。

3. /pkg

   /pkg 目录是 Go 语言项目中非常常见的目录，我们几乎能够在所有知名的开源项目（非框架）中找到它的身影，例如 Kubernetes、Prometheus、Moby、Knative 等。

   该目录中存放可以被外部应用使用的代码库，其他项目可以直接通过 import 导入这里的代码。所以，我们在将代码库放入该目录时一定要慎重。

4. /vendor

   项目依赖，可通过 go mod vendor 创建。需要注意的是，如果是一个 Go 库，不要提交 vendor 依赖包。

5. /third_party

   外部帮助工具，分支代码或其他第三方应用（例如 Swagger UI）。比如我们 fork 了一个第三方 go 包，并做了一些小的改动，我们可以放在目录 /third_party/forked 下。一方面可以很清楚的知道该包是 fork 第三方的，另一方面又能够方便地和 upstream 同步。

### Go 应用：主要存放测试相关的文件和代码

6. /test

   用于存放其他外部测试应用和测试数据。/test 目录的构建方式比较灵活：对于大的项目，有一个数据子目录是有意义的。例如，如果需要 Go 忽略该目录中的内容，可以使用 /test/data 或 /test/testdata 目录。

   需要注意的是，Go 也会忽略以“.”或 “_” 开头的目录或文件。这样在命名测试数据目录方面，可以具有更大的灵活性。

### Go 应用：存放跟应用部署相关的文件

7. /configs

   这个目录用来配置文件模板或默认配置。例如，可以在这里存放 confd 或 consul-template 模板文件。这里有一点要注意，配置中不能携带敏感信息，这些敏感信息，我们可以用占位符来替代，例如：

   ```yaml
   apiVersion: v1    
   user:    
     username: ${CONFIG_USER_USERNAME} # iam 用户名    
     password: ${CONFIG_USER_PASSWORD} # iam 密码
   ```

8. /deployments

   用来存放 Iaas、PaaS 系统和容器编排部署配置和模板（Docker-Compose，Kubernetes/Helm，Mesos，Terraform，Bosh）。在一些项目，特别是用 Kubernetes 部署的项目中，这个目录可能命名为 deploy。

### 项目管理：存放用来管理 Go 项目的各类文件

9. /Makefile

   虽然 Makefile 是一个很老的项目管理工具，但它仍然是最优秀的项目管理工具。所以，一个 Go 项目在其根目录下应该有一个 Makefile 工具，用来对项目进行管理，Makefile 通常用来执行静态代码检查、单元测试、编译等功能。

10. /scripts

    该目录主要用来存放脚本文件，实现构建、安装、分析等不同功能。不同项目，里面可能存放不同的文件，但通常可以考虑包含以下 3 个目录：

    * /scripts/make-rules：用来存放 makefile 文件，实现 /Makefile 文件中的各个功能。Makefile 有很多功能，为了保持它的简洁，我建议你将各个功能的具体实现放在/scripts/make-rules 文件夹下。
    * /scripts/lib：shell 库，用来存放 shell 脚本。一个大型项目中有很多自动化任务，比如发布、更新文档、生成代码等，所以要写很多 shell 脚本，这些 shell 脚本会有一些通用功能，可以抽象成库，存放在/scripts/lib 目录下，比如 logging.sh，util.sh 等。
    * /scripts/install：如果项目支持自动化部署，可以将自动化部署脚本放在此目录下。如果部署脚本简单，也可以直接放在 /scripts 目录下。

    另外，shell 脚本中的函数名，建议采用语义化的命名方式，例如 iam::log::info 这种语义化的命名方式，可以使调用者轻松的辨别出函数的功能类别，便于函数的管理和引用。在 Kubernetes 的脚本中，就大量采用了这种命名方式。

11. /build

    这里存放安装包和持续集成相关的文件。这个目录下有 3 个大概率会使用到的目录，在设计目录结构时可以考虑进去。

    * /build/package：存放容器（Docker）、系统（deb, rpm, pkg）的包配置和脚本。
    * /build/ci：存放 CI（travis，circle，drone）的配置文件和脚本。
    * /build/docker：存放子项目各个组件的 Dockerfile 文件。

12. /tools

    存放这个项目的支持工具。这些工具可导入来自 /pkg 和 /internal 目录的代码。

13. /githooks

    Git 钩子。比如，我们可以将 commit-msg 存放在该目录。

### 文档：主要存放项目的各类文档

14. /README.md

    项目的 README 文件一般包含了项目的介绍、功能、快速安装和使用指引、详细的文档链接以及开发指引等。

15. /docs

    存放设计文档、开发文档和用户文档等（除了 godoc 生成的文档）。推荐存放以下几个子目录：

    * /docs/devel/{en-US,zh-CN}：存放开发文档、hack 文档等。
    * /docs/guide/{en-US,zh-CN}: 存放用户手册，安装、quickstart、产品文档等，分为中文文档和英文文档。
    * /docs/images：存放图片文件。

