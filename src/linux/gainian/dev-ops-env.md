---
tag:
  - 概念
---

# DEV SIT UAT PET SIM PRD PROD常见环境英文缩写含义

英文缩写 英文 中文
DEV development 开发
SIT System Integrate Test 系统整合测试（内测）
UAT User Acceptance Test 用户验收测试
PET Performance Evaluation Test 性能评估测试（压测）
SIM simulation 仿真
PRD/PROD production 产品/正式/生产

今天给大家介绍一下开发过程中，四个环境以及各自的功能特点，四个环境分别是：pro、pre、test、dev环境，中文名字：生产环境、灰度环境、测试环境、开发环境，其实大家看英文应该就差不多可以看出来对应的是什么环境。

环境介绍：

pro环境：生产环境，面向外部用户的环境，连接上互联网即可访问的正式环境。

pre环境：灰度环境，外部用户可以访问，但是服务器配置相对低，其它和生产一样。

test环境：测试环境，外部用户无法访问，专门给测试人员使用的，版本相对稳定。

dev环境：开发环境，外部用户无法访问，开发人员使用，版本变动很大。