---
home: true
icon: home
title: 主页
heroImage: /Kubernetes.svg
heroText: Keep Learning
heroFullScreen: true
tagline: 专注于 SRE 运维、云原生、稳定性、高可用性、可观测性、DevOps 等技术
actions:
  - text: 开始阅读
    link: /cloudnative/kubernetes/
    type: primary

  - text: SRE RoadMap
    link: /#sre-roadmap
    type: default

footer: '<a href="http://beian.miit.gov.cn/" target="_blank">冀ICP备2021007336号</a>|主题: <a href="https://vuepress-theme-hope.github.io/v2/" target="_blank">VuePress Theme Hope</a>'
---

## SRE RoadMap

### SRE 职责

**SRE**（Site Reliability Engineering）站点可靠性工程是一种结合软件工程和运维运营原则的角色和方法论，旨在在系统、服务或产品的设计、开发、部署和运维过程中，采取一系列措施来确保其持续稳定运行、可靠性和可用性。

**SRE/稳定性保障**具体措施包括但不限于：

1. **高可用性：** 确保系统能够在大部分时间内持续提供服务，即使在出现故障或意外情况下也能够快速恢复。常见的高可用性措施包括冗余设计、故障转移、负载均衡和容错机制。
2. **监控与警报：** 设置全面的监控系统来实时跟踪关键指标、日志、事件和服务性能。监控可以包括服务器资源利用率、请求响应时间、错误率、数据库性能等。当指标超出预定的阈值时，自动触发警报通知相关团队，以便及时采取措施。
3. **自动化平台/工具开发**：利用自动化工具和流程，简化系统部署、配置管理、更新、扩容、维护和故障恢复等操作，减少人工操作的错误和复杂性，缩短故障恢复时间，提高效率和稳定性。
4. **故障排查与问题解决：** 对系统故障进行深入的分析和排查，追踪问题根因，并采取措施解决问题，以防止类似问题再次发生。
5. **预案和演练**：制定应急预案和灾难恢复计划，并定期进行演练和测试，以确保在紧急情况下能够快速响应和恢复系统正常运行。
6. **备份与容灾恢复**：制定完备的数据备份和容灾方案，确保在出现故障或灾难时，系统能够快速切换到备用设备或利用备份数据进行恢复，保证业务的连续性和数据的安全性。
7. **容量规划：** 定期评估服务的容量需求，确保系统具备足够的资源（例如计算、存储、网络等）来满足需求，避免资源瓶颈导致系统性能下降。他们必须确保服务能够应对未来的用户增长和流量峰值。
8. **性能优化：** 定期对系统进行性能分析，识别性能瓶颈，并采取措施优化系统性能，提高响应时间和吞吐量。
9. **安全和权限控制**：实施适当的安全措施，包括访问控制、身份验证、数据加密、安全审计等，以保护系统免受恶意攻击、数据泄露或未授权访问的风险。
10. **发布/回滚策略：** 参与制定发布/回滚策略，确保新版本的软件能够平稳地上线，同时减少对现有系统的影响，新版本发生问题时，能快速回滚。
11. **文档和知识共享**：记录系统的配置、架构和故障处理经验，以便团队成员之间进行知识共享和技能传承。

### SRE稳定性保障体系

![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/sre.png)



### SRE 技能列表

- 学习云原生技术为企业降本增效、提高稳定性
  - Kubernetes
  - Etcd
  - Docker/Containerd
  - Calico
  - Ceph
- 学习 Linux 运维进行问题排查、性能优化、指标分析、故障演练
  - 学习一些性能分析、问题排查工具
  - 学习一些文本处理工具
  - 学习 Bash 脚本
- 学习一门语言进行自动化平台/工具的开发
  - Go
  - Python
- 维护管理一些高可用服务
  - Nginx
  - Haproxy
  - LVS
  - Keepalived
- 熟练使用 DevOps 工具实现自动化，提高效率
  - Git
  - Ansible
  - Argo Workflows/Rollouts/CD
  - Gitlab CI
  - Jenkins
- 探索可观测性，减少故障定位时间
  - 指标类（Metrics）数据收集：Prometheus/VictoriaMetrics/Zabbix
  - 日志类（Logs）数据收集：ELK/Fluentd/Clickhouse
  - 链路类（Tracing）数据收集：OpenTelemetry/CAT
  - 图表展示汇聚分析：Grafana

