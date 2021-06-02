---
category: 自动化工具
tags:
  - Jenkins
---

# 3.1 Jenkins用户权限管理

> 转载自：[Jenkins用户权限管理 | 泽阳](http://docs.idevops.site/jenkins/basics/userandpermissions/)

Jenkins默认使用的是自带的数据库管理用户，支持同步LDAP、Github等认证集成。关于用户与权限管理是Jenkins比较弱的一点，当大规模授权的时候建议使用API接口授权，否则当你打开web页面授权时，会很乱加载缓慢，最终导致保存失败权限丢失。

## 用户管理

- 配置用户接入入口: 系统管理->全局安全配置。
- 默认使用的是Jenkins数据库存储。
- 可以选择集成LDAP服务或者是GItlab服务（需要安装插件后才能使用，后面会讲解）。

[![images](http://docs.idevops.site/jenkins/basics/userandpermissions/images/01-configglobal.png)](http://docs.idevops.site/jenkins/basics/userandpermissions/images/01-configglobal.png)

### 查看用户

以使用Jenkins专有数据库为例，用户管理入口: 系统管理-> 管理用户

### 新建用户

[![images](http://docs.idevops.site/jenkins/basics/userandpermissions/images/02-createuser.png)](http://docs.idevops.site/jenkins/basics/userandpermissions/images/02-createuser.png)

### 删除用户

[![images](http://docs.idevops.site/jenkins/basics/userandpermissions/images/03-deleuser.png)](http://docs.idevops.site/jenkins/basics/userandpermissions/images/03-deleuser.png)

### 更新用户

[![images](http://docs.idevops.site/jenkins/basics/userandpermissions/images/04-updateuser.png)](http://docs.idevops.site/jenkins/basics/userandpermissions/images/04-updateuser.png)

------

## 权限管理

> 注意安装插件: 权限默认使用 Role-Based Strategy,其他方式如图所示。

[![images](http://docs.idevops.site/jenkins/basics/userandpermissions/images/11-quanxian-type.png)](http://docs.idevops.site/jenkins/basics/userandpermissions/images/11-quanxian-type.png)

### 管理权限

- 系统设置->Manage and Assign Roles->Manage Roles
- Global roles：添加用户和用户组，分配某个用户属于哪个用户组。
- Project roles：添加某个工程或某一组工程的用户或用户组
- Slave roles：添加某个节点或某一组节点的用户或用户组

[![images](http://docs.idevops.site/jenkins/basics/userandpermissions/images/12-manage.png)](http://docs.idevops.site/jenkins/basics/userandpermissions/images/12-manage.png)

### 全局权限

[![images](http://docs.idevops.site/jenkins/basics/userandpermissions/images/13-global.png)](http://docs.idevops.site/jenkins/basics/userandpermissions/images/13-global.png)

### 项目权限

[![images](http://docs.idevops.site/jenkins/basics/userandpermissions/images/14-project.png)](http://docs.idevops.site/jenkins/basics/userandpermissions/images/14-project.png)

### 权限授权

[![images](http://docs.idevops.site/jenkins/basics/userandpermissions/images/15-assign.png)](http://docs.idevops.site/jenkins/basics/userandpermissions/images/15-assign.png)

