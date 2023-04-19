---
category: 监控
tag:
  - Zabbix
---

# 1 zabbix4.4新功能

探索Zabbix4.4新功能

>  https://www.zabbix.com/cn/whats_new_4_4 

* 新一代的Zabbix Agent

  * Go语言编写
  *  用于监控各种服务和应用的插件框架 
  *  并发检查时确保状态正常(例如，保持持续的DB连接) 
  *  内置时间调度器（scheduler ），支持灵活的时间间隔 
  *  使用批量数据传输的高效的网络使用 
  *  用即将支持的更多平台嵌入式替换Linux上现有的代理 

* 活动和告警功能升级：应用Webhooks和可编程逻辑

  * 该功能简化了与外部系统的双向集成，允许从Zabbix UI一键访问工单系统中的case，在聊天中创建消息等等。可使用内置的JavaScript引擎定义所有处理逻辑，与外部通知和工单系统集成得到了极大的改进。

* 为Zabbix模板设置标准

  * 我们为模板引入了一组标准和定义明确的 [准则](https://www.zabbix.com/documentation/guidelines/templates)。 对于所有模板的创建者和维护者以及所有Zabbix用户来说，统一标准非常重要。

    对XML/JSON文件的结构进行了极大的简化，仅使用文本编辑器即可手动编辑模板。大多数现有的模板都经过了改进以适应新的标准。

* 官方支持TimescaleDB

  * 除了MySQL、PostgreSQL、Oracle和DB2之外，我们现在正式宣布官方支持TimescaleDB。 与传统的关系数据库相比，TimescaleDB有诸多有点：近乎线性的性能水平， 支持自动即时删除旧的历史数据，更容易维护等等。

* 监控项和触发器的知识库

  *  Zabbix 4.4提供了对监控项和触发器的更直观的描述。这些信息为工程师提供了巨大的帮助， 为他们提供了关于收集监控项的意义和目的、问题细节和触发器的解决指令等所有可能的细节。 

* 高级可视化功能

  * 仪表板和相关的小工具在许多方面得到了改进，简化了创建和管理的过程， 增加了只需单击鼠标即可修改小工具参数的功能。现在仪表板网格尺寸极佳可支持超宽屏幕和大屏幕墙。

    问题视图小工具增强支持聚合视图，并引入了一个新的小工具来显示图形原型。

    此外，所有小工具现在都可以在无标题模式下显示。

* 条形图和聚合

  *  Zabbix 4.4提供了条形图，graph widget现在支持使用各种聚合函数进行数据聚合。 这两个特性的结合使得长期数据分析和容量规划变得更加容易。 

* 官方支持更多新平台

  * SUSE Linux Enterprise Server 15
  * Debian 10
  * Raspbian 10
  * Mac OS/X
  * RHEL 8
  * 用于Windows agent的MSI

  请参阅[下载](https://www.zabbix.com/cn/download) 页面中的所有可用平台

* 云端一键部署

  Zabbix容器或镜像已经上线以下国际主流云平台，国内版本即将依次上线：

  - [AWS](https://aws.amazon.com/marketplace/pp/B07YLKJTZQ?qid=1570610512988&sr=0-6&ref_=srh_res_product_title)

  - [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/zabbix.zabbix_vm1?tab=Overview)

  - Google Cloud Platform

  - [Digital Ocean](https://marketplace.digitalocean.com/apps/zabbix)

  - [Docker](https://www.zabbix.com/cn/whats_new_4_4)

* 安全的自动注册功能

  * Zabbix的新版本支持可选的PSK加密，用于自动注册，并为添加的主机提供自动加密设置。 现在您可以将Zabbix设置为仅使用PSK，未加密或两者都允许自动注册网络设备。

* 预处理功能升级：高级JSONPath

  * Zabbix现在支持JSONPath的高级排列，允许对JSON数据进行复杂的预处理，包括聚合和搜索。 预处理还可以用于低等级发现，这使得它成为一个非常强大的自动化发现工具。

* 用户宏的描述

  * 用户宏命令是一个非常好的功能，它简化了Zabbix的配置，使大量的配置变得轻而易举。 对用户宏命令的描述支持将有助于记录每个宏命令的用途，使宏命令的管理更加容易。

* 更高效高级的数据收集
  
  * 通过新的JSON格式的返回对象数组检查，WMI、JMX和ODBC相关项的数据收集和发现得到了改进。 我们还为VMWare监控增加了VMWare数据存储，为Linux平台增加了系统服务，为CSV到JSON的转换增加了新的预处理类型。

**Zabbix 4.4的更多新功能一览**

- 来自LLD的XML数据的预处理
- 监控依赖项最大值增加到10K
- JSONPatch预处理中增加了类型自动转换
- 主机名包含在实时导出文件中
- Windows agent扩展到支持语言无关的性能计数器
- 在预处理错误时忽略值
- 对最新数据进行了扩展，增加了监控项操作数据
- 去除了编辑触发器描述的功能，访问更加简单

 

- 取消对内置媒体类型Jabber和Eztexting的支持，转而使用webhook或外部脚本
- 更新了默认仪表板
- 自动注册的主机可以指定“连接到dns”或“连接到IP”选项
- 增加了对{EVENT.ID}宏的支持，用于触发器URL的命令
- “screen”功能取消
- 最新创建的仪表板小工具类型记忆功能，可用于后续的创建
- 每个小工具都可以配置小工具标题的可见性

 

还有更多新功能! 有关新功能的完整列表，请参阅[发布说明](https://www.zabbix.com/rn/rn4.4.0).