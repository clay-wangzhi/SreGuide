---
isOriginal: true
category: 云原生
tag:
  - Kubernetes
---

# 我们的虚拟化变革之旅

> 译自：https://blog.taboola.com/our-journey-of-virtualization-change/

## 黑暗时代

我们最初采用oVirt作为我们的虚拟化平台，事实证明它是一个很好的产品，具有几个显着的优势。其开源性质使我们能够利用广泛的功能和定制选项。

然而，尽管它具有优势，我们还是遇到了一些缺点和问题，迫使我们寻求更好的虚拟化解决方案。两个主要缺点是它没有任何可用的 DFS 和库存管理问题。此外，我们偶尔会遇到 oVirt 的性能问题和稳定性问题。一些资源密集型工作负载出现延迟或意外行为，影响了虚拟化环境的整体性能。随着我们的基础设施的发展，这些问题变得更加明显，导致生产力和用户满意度下降。

如您所知，我们需要为我们的研发团队提供更好的解决方案，并为我们提供更容易/更好的产品来管理和维护。

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1_ms8Xl7A9Ro-N38e7fOdqzA.webp)



## Kubevirt 拯救了我们

KubeVirt 是一种开源虚拟化解决方案，可在 Kubernetes 集群之上运行虚拟机 (VM)。它允许用户利用容器和虚拟机的优势，从而更轻松地在单个平台中管理传统和云原生工作负载。

KubeVirt 使用自定义资源定义 (CRD) 将虚拟机定义为 Kubernetes 对象，使它们成为 Kubernetes 生态系统中的一等公民。

这意味着可以使用 Kubernetes 原生工具和 API 来管理虚拟机，从而更轻松地实现自动化和编排。

KubeVirt 还提供虚拟化 API，允许创建虚拟设备和驱动程序，使用户能够配置和自定义虚拟机以满足其特定需求。

此外，KubeVirt 还与流行的虚拟化技术集成，例如 QEMU 和 libvirt，使得在 Kubernetes 中使用现有的 VM 映像和模板成为可能（这使我们更容易从 Ovirt 迁移）。

总体而言，KubeVirt 为管理 Kubernetes 中的虚拟工作负载提供了强大且灵活的解决方案，从而可以采用更简化、更高效的方法来管理混合工作负载。

## KubeVirt vs ????

与虚拟化领域的其他产品相比，KubeVirt 具有多项优势。以下是 KubeVirt 的一些好处：

1. 与 Kubernetes 无缝集成：KubeVirt 旨在与 Kubernetes 无缝集成，允许虚拟机作为 Kubernetes 对象进行管理。这意味着用户可以利用现有的 Kubernetes 技能和工具来管理虚拟机，从而更轻松地管理混合工作负载。

2. 可定制的虚拟化：KubeVirt提供了虚拟化API，允许创建定制的虚拟设备和驱动程序。这意味着用户可以自定义虚拟机以满足其特定需求，从而更轻松地在现代基础设施上运行遗留工作负载 (ahm ahm ovirt)。

3. 开源和社区驱动：KubeVirt 是一个开源项目，拥有活跃的贡献者社区。这意味着我们可以受益于社区贡献的广泛功能和集成，以及获得支持和资源。

4. 灵活性：KubeVirt在使用的虚拟化技术方面提供了灵活性，因为它可以与 QEMU 和 libvirt 等流行技术集成。这意味着用户可以将现有的虚拟机镜像和模板与 Kubernetes 结合使用，从而更轻松地将工作负载迁移到 Kubernetes（虚拟机迁移）。

综上所述，KubeVirt 为管理 Kubernetes 中的虚拟工作负载提供了强大而灵活的解决方案，具有无缝集成、定制、开源社区支持、虚拟化技术的灵活性以及资源利用的效率，使其成为虚拟化领域非常强大的竞争对手。

## 一切都在迷雾中

确定了解决方案之后，接下来的设计呢？我们先从我们的需求出发：

1. 多区域 DC
2. 管理集群
3. 维护方便



我们拥有多区域数据中心，这意味着解决方案的设计应能够跨多个地理位置无缝运行。这意味着在每个区域部署 Kubevirt 集群。

管理集群应该用于管理位于不同区域的多个Kubevirt集群，为整个虚拟化基础设施提供集中的控制平面。

Kubevirt 解决方案的设计应考虑到维护。这可能涉及使用 Kubernetes Operator 等工具来自动执行常见维护任务，或者设计基础设施的方式允许轻松升级和更新，而不会中断服务可用性。

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/2.png)

## 我们的技术栈

这里不会详细介绍，因为有关于我们的技术栈的非常好的文章：

- Calico – Kubernetes 的网络解决方案，提供网络策略实施、安全网络通信和网络隔离。它使用 BGP 路由，可以与其他网络插件集成。
- Rook-Ceph – 使用 Ceph 分布式存储系统的 Kubernetes 存储解决方案。它为 Kubernetes 工作负载提供持久存储，可用于存储块、文件和对象数据。
- Velero – Kubernetes 的备份和恢复解决方案，可用于保护和迁移 Kubernetes 工作负载和资源。它可用于创建和恢复整个集群或单个资源的备份。
- VictoriaMetrics – Kubernetes 的时间序列数据库和监控解决方案，可用于收集、存储和分析来自 Kubernetes 工作负载和资源的指标和日志。它支持各种数据源，可用于创建自定义仪表板和警报。
- CDK8s（Kubernetes 云开发套件）——一种开源软件开发框架，使开发人员能够使用熟悉的编程语言（如 TypeScript、Python 和 Java）定义 Kubernetes 资源。
- Argo Events 是一个基于事件的开源系统，允许您触发操作以响应特定事件。

## Fries 和 DNS 委托

在我们的多区域环境中，DNS 架构由主 DNS 服务器和每个区域的雾名称服务器组成。主 DNS 服务器处理不同类型的 DNS 查询，如 PTR、CNAME 和 A 记录，而雾名称服务器则负责处理特定区域的 DNS 查询。

Kubernetes 使用 kube-dns 作为其默认 DNS 服务器。不过，我们决定使用 CoreDNS。

CoreDNS 是一个灵活且可扩展的 DNS 服务器，旨在与 Kubernetes 良好配合。它支持各种插件和中间件，可用于自定义其行为以满足您的需求。

当进行与 Kubernetes 集群相关的 DNS 查询时，主 DNS 服务器会将查询委托给相关的雾名称服务器，该服务器负责处理该特定 Kubernetes 集群的 DNS 查询。然后，雾名称服务器使用 CoreDNS 将服务名称解析为 IP 地址。

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/3.png)

使用 Kubernetes 和 CoreDNS 在多区域环境中管理 DNS 可能具有挑战性，但与传统 DNS 架构相比，它具有多种优势。通过使用 CoreDNS 作为 Kubernetes 中的 DNS 服务器并将 DNS 查询委托给适当的雾名称服务器，您可以简化 DNS 架构、提高可靠性和可用性，

并自定义 DNS 行为以满足您的特定需求。

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/4.png)

## 迁移游戏的乐趣

从 oVirt 迁移到 KubeVirt 涉及将虚拟机从一个平台迁移到另一个平台。迁移过程需要仔细规划，因为它涉及评估虚拟机与 KubeVirt 的兼容性，并确保必要的工具和配置到位，并且 Ovirt 是一个生产系统。为了简化流程，我们创建了一个自定义脚本，可以自动将虚拟机从 oVirt 迁移到 KubeVirt。该脚本考虑到

考虑我们的特定需求，例如与 Foreman、模板的集成，并确保平稳高效的迁移过程。

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/5.png)

## 持续部署的挑战

一切都很有趣，但我们如何管理这个怪物呢？ ArgoCD 来救援！

随着 Kubernetes 的日益普及，出现了许多 CD 系统来支持容器化工作负载。这些系统中包括 ArgoCD，这是一个开源项目，为 Kubernetes 提供基于 GitOps 的持续交付。

与其他 CD 系统相比，ArgoCD 具有多种优势，包括：

- GitOps：ArgoCD 使用基于 GitOps 的方法来管理 Kubernetes 资源，这意味着所有更改都会提交到 Git 存储库并自动部署到集群。这种方法为整个基础设施提供了单一事实来源，使跟踪更改、回滚和安全合规性变得更加容易。

- 声明式配置：ArgoCD 允许用户使用 YAML 文件定义 Kubernetes 资源的所需状态，从而实现声明式配置管理。这种方法简化了复杂 Kubernetes 环境的管理，使跨多个集群的配置管理变得更加容易。

- 多集群支持：ArgoCD 提供单个控制平面来管理多个集群，从而更轻松地跨多个环境部署应用程序。此功能对于拥有大量集群的组织特别有用，因为它简化了跨多个 Kubernetes 集群的资源管理。

- 高级回滚功能：ArgoCD 支持高级回滚功能，使用户能够轻松回滚到应用程序或基础设施的先前版本。此功能对于确保高可用性和最大限度地减少停机时间至关重要。

- 可扩展性：ArgoCD 具有高度可扩展性，非常适合管理大型且复杂的 Kubernetes 环境。它旨在与 Helm、Kustomize 和 Jsonnet 等 Kubernetes 原生工具配合使用，使用户能够根据需要自定义部署过程。

在我们的组织中，我们使用 ArgoCD 来管理 KubeVirt 环境和基础设施，其中包括 Calico、Rook-Ceph、Velero、Victoria Metrics 和 CDK8。借助 ArgoCD，我们可以从单个控制平面管理所有 Kubernetes 资源，使我们能够快速、大规模地部署应用程序。我们还可以使用ArgoCD的声明式配置管理来简化复杂Kubernetes环境的管理，从而更轻松地管理跨多个集群的配置。

此外，ArgoCD 的高级回滚功能和多集群支持确保我们能够在出现问题时保持高可用性并最大限度地减少停机时间。借助 ArgoCD 的可扩展性，我们可以轻松管理不断增长的基础设施，而不会影响性能。

总之，与其他 CD 系统相比，ArgoCD 具有多种优势，使其成为管理多区域环境和基础设施的理想选择。其基于 GitOps 的方法、声明式配置管理、多集群支持、高级回滚功能和可扩展性使其成为快速大规模部署应用程序的强大工具。

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/6.png)



## 事件管理

如果您仔细阅读，我们正在使用工头作为我们的库存管理。

Argo Events 是一个基于事件的开源系统，允许您触发操作以响应特定事件。它使您能够使用声明性语法轻松定义、路由和过滤事件。借助 Argo Events，您可以创建事件驱动的工作流程来执行各种任务，例如运行作业、部署应用程序或发送通知。我们的 Argo Events 用例是删除 foreman 对象。我们使用传感器来监听事件，并在特定事件发生时自动删除 Foreman 对象。例如，当删除主机时，Argo Events 可以触发工作流程来删除相应的 Foreman 对象，这有助于保持 Foreman 清单最新且干净。总体而言，Argo Events 提供了一种强大而灵活的方式来自动化基于事件的任务和工作流程，这可以大大提高效率并减少手动工作量。

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/7.png)

## 模版

定制 Kubernetes 对象是管理 Kubernetes 基础设施的一项关键任务。

Kustomize 是用于此目的的流行工具，但它有其局限性。特别是，随着项目变得越来越复杂，生成的 YAML 文件可能会变得难以管理且难以使用。这可能会导致部署过程中出现错误和不一致。

为了解决这个问题，许多团队转而使用 cdk8s 作为 Kustomize 的替代方案。 cdk8s 是一个框架，允许我们使用熟悉的编程语言（例如 Python）以更灵活和模块化的方法为对象定义 Kubernetes 资源。它允许创建更小、更易于管理、更易于阅读和编辑的 YAML 文件。

虽然 cdk8s 提供了很多好处，但一个缺点是它没有得到 ArgoCD 的正式支持，为了克服这一限制，我们创建了一个自定义 docker 镜像来确保 cdk8s 和 ArgoCD 之间的兼容性。

 ![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/8.png)

通过这样做，我们可以继续受益于 cdk8s 的优势，同时也确保我们的部署过程可靠且一致。

现在，添加虚拟机就像 1-2-3 一样简单：

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/9.png)

暂时就这样了

我要感谢我出色的团队，没有他们，这一切都是不可能的， [Alex Bulatov ](mailto:alexander.b@taboola.com) [Gal Beniluz ](mailto:gal.beniluz@taboola.com) [Tarek Shama ](mailto:tarek.s@taboola.com) [Maher Odeh](mailto:maher.o@taboola.com)。