---
icon: ansible
sticky: 51
star: 51
date: 2020-03-20
category: 自动化工具
tag:
  - Ansible
---
# Ansible 学习笔记

## 常用官网

[Ansible Doc](https://docs.ansible.com/)

[Ansible Galaxy](https://galaxy.ansible.com/)



## 推荐教程

[ansible wiki | leops](https://ansible.leops.cn/) :star:

[ansible | breezey | csdn](https://www.cnblogs.com/breezey/tag/ansible/) :star: 

[一步到位玩透 Ansible | 骏马金龙](https://www.junmajinlong.com/ansible/index/) :star:



## 知识体系



![](https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/ansible-com-know.png)

[详细的核心知识点 复习思维导图](https://clay-wangzhi.com/ansible-core-know.png)



## Summary

* [1 初识Ansible](first.md)
* [2 Ansible Inventory 配置详解](inventory.md)
* [3 Ansible Ad-hoc 命令集](ad-hoc.md)
* [3.1 Ansible lineinfile 模块详解](lineinfile.md)
* [4 Ansible Playbook](playbook.md)
    * [4.1 Playbook的结构及handler用法](dir-handler.md)
    * [4.2 Playbook循环语句](playbook-for.md)
    * [4.3 Playbook条件语句](playbook-if.md)
    * [4.4 Playbook高级用法](advanced-playbook.md)
    * [4.5 Playbook之tags](playbook-tags.md)
    * [4.6 巧用Roles](roles.md)
    * [4.7 Jinja2 模板](jinja2.md)
    * [4.8 yaml 语法](yaml.md)
* [5 Ansible变量](var.md)
    * [5.1 自定义变量](custom.md)
    * [5.2 Fact变量](fact.md)
    * [5.3 魔法变量](magic.md)
    * [5.4 使用lookup生成变量](lookup.md)
    * [5.5 使用vault配置加密](vault.md)
* [6 Ansible使用优化](optimize.md)
* [7 常见问题](qa.md)
