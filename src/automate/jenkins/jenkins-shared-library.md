---
time: 2020-01-16
category: 自动化工具
tags:
  - Jenkins
---

# Jenkins共享库应用

## 由来与演进

在Jenkins 1.x中，对于job的配置大多是基于图形界面的，也就是说，要在GUI页面手动设置相关的job参数。
随着不同类型和用途的job越来越多，参数越来越复杂，难以有效地管理数量庞大的图形界面配置信息，也无法有效追踪和记录配置的更改。

在Jenkins 2.0中，基于Pipeline，用户可以在一个 JenkinsFile 中快速实现一个项目的从构建、测试以到发布的完整流程，灵活方便地实现持续交付。
并且通过“pipeline script from SCM”方式，可以保存这个流水线的定义，进行版本化管理。

在实际使用中，一开始大都会制作一个尽可能通用的pipeline脚本样例，让搭建者只需要修改几个赋值参数就可以在项目中应用。
但不可避免的是，不同的项目往往有不同的需求，随着定制化需求越来越多，加入了不同的功能实现代码，导致pipeline也会越来越复杂，可读性差，也不利于维护。
而且随着pipeline数目不断的增多，将会发现同一类型和用途的pipeline，它们的很多功能其实是相同的，这时如果对某个功能做改动，往往需要更新数量众多的JenkinsFile。

针对pipeline的扩展和管理问题，共享库功能（Shared Libraries）应运而生。
共享库可以将整个pipeline脚本的实现和复杂度封装到Shared Library中，在各种项目之间共享pipeline核心实现，减少冗余代码。
也就是说，Shared Libraries的方式抽象了各种项目之间共享的代码（甚至整条完整的pipeline），有效降低了使用pipeline的复杂度。
而且通过外部源代码控制（SCM）的方式，保证所有job在构建的时候会调用最新的共享库代码。

## 共享库是什么？

共享库（shared library）是一些**独立的 Groovy 脚本的集合**，我们可以在运行 Pipeline 的时候去获取这些共享库代码。使用共享库最好的方式同样是把代码使用 Git 仓库进行托管，这样我们就可以进行版本化管理了。当然我们也需要一些 Groovy 语言的基础，不过并不需要多深入，基本的语法概念掌握即可，可以查看前面我们的 [Groovy 简明教程](https://www.qikqiak.com/post/groovy-simple-tutorial/) 。

使用共享库一般只需要3个步骤即可：

- 首先创建 Groovy 脚本，添加到 Git 仓库中
- 然后在 Jenkins 中配置将共享库添加到 Jenkins 中来
- 最后，在我们的流水线中导入需要使用的共享库：`@Library('your-shared-library')`，这样就可以使用共享库中的代码了。

## 共享库内容

在共享库中一般会有两种通用的代码：

- **Steps**：这些 Steps 在 Jenkins 中被称为**全局变量**，我们可以在所有的 Jenkins Pipeline 中使用这些自定义的 Steps。

比如，我们可以编写一个标准的 Step 来部署应用或者发送消息通知等，我们就可以将代码添加到 `vars/YourStepName.groovy` 文件中，然后实现一个 `call` 函数即可：

```groovy
#!/usr/bin/env groovy
// vars/YourStepName.groovy

def call() {
  // Do something here...
}
```

- **其他通用代码**：我们可以在这里面添加一些帮助类，还可以定义整个流水线中使用的静态常量等。

这些代码需要放在 `src/your/package/name` 目录下面，然后就可以使用常规的 Groovy 语法了，例如：

```groovy
#!/usr/bin/env groovy
// com/qikqiak/GlobalVars.groovy
package com.qikqiak

class GlobalVars {
   static String foo = "bar"
}
```

我们可以在 Jenkins Pipeline 中使用 `import` 导入上面的类，并引用其中的静态变量，比如 `GlobalVars.foo`。

## 示例

新建一个名为 `pipeline-library-demo` 的文件夹，将该项目加入到 Git 仓库中。首先创建一个名为 `vars` 的目录，自定义一个 step 就是在 `vars` 目录下面的一个 `.groovy` 文件，这些被称为全局变量，比如我们添加一个 `sayHi.groovy` 的文件，代码如下所示：

```groovy
#!/usr/bin/env groovy

def call(String name='QIKQIAK') {
  echo "Hello, ${name}."
}
```

需要注意的是需要实现 call 方法，添加了一个名为 name 的参数，具有默认值 `QIKQIAK`，可以用 `${name}` 来进行访问。

然后创建一个名为 `src/com/qikqiak/GlobalVars.groovy` 的文件，文件内容如下所示：

```groovy
#!/usr/bin/env groovy
package com.qikqiak

class GlobalVars {
  static String foo = "bar"

  // 在 Pipeline 中可以引用这里的静态变量：
  // 
  // import com.qikqiak.GlobalVars
  // println GlobalVars.foo
}
```

完整的代码目录如下所示：

```shell
$ tree .
.
├── README.md
├── src
│   └── com
│       └── qikqiak
│           └── GlobalVars.groovy
└── vars
    └── sayHi.groovy

4 directories, 3 files
```

完整的代码上传到了 GitHub 仓库 https://github.com/cnych/pipeline-library-demo 中。

共享库创建完成后，我们需要让 Jenkins 知道这个共享库，我们可以从 Jenkins 的 Web 页面进行添加。在 Jenkins 首页 -> 系统管理 -> 系统配置，在 `Global Pipeline Libraries` 区域配置共享库：

![Global Pipeline Libraries](https://bxdc-static.oss-cn-beijing.aliyuncs.com/images/20200520174843.png)Global Pipeline Libraries

保存后即可使用配置共享库。接下来新建一个名为 `share-lib-demo` 的流水线项目，在 `Pipeline script` 区域添加如下代码：

```groovy
@Library('pipeline-library-demo')_

import com.qikqiak.GlobalVars

stage('Demo') {
    echo 'Hello world'
    sayHi '阳明'
    println GlobalVars.foo
}
```

![img](https://bxdc-static.oss-cn-beijing.aliyuncs.com/images/20200520175022.png)

需要注意的是 `@Library('pipeline-library-demo')_` 最后有一个下划线 `_`，这个下划线并不是写错了，如果 `@Libray` 后面紧接的一行不是 `import` 语句的话，就需要这个下划线，我们这里后面就是一条 `import` 语句，所以这里可以省略这个下划线。

配置完成后，构建这个 Pipeline，正常就可以看到如下所示的构建结果：

![img](https://bxdc-static.oss-cn-beijing.aliyuncs.com/images/20200520175509.png)

这样我们就完成了一个共享库的编写。

## 参考链接

[Jenkins - 共享库（Shared Libraries）| anliven | 博客园](https://www.cnblogs.com/anliven/p/13693871.html)

[Jenkins 共享库示例 | 阳明的博客](https://www.qikqiak.com/post/jenkins-shared-library-demo/)