<template><h1 id="_3-1-jenkins用户权限管理" tabindex="-1"><a class="header-anchor" href="#_3-1-jenkins用户权限管理" aria-hidden="true">#</a> 3.1 Jenkins用户权限管理</h1>
<blockquote>
<p>转载自：<a href="http://docs.idevops.site/jenkins/basics/userandpermissions/" target="_blank" rel="noopener noreferrer">Jenkins用户权限管理 | 泽阳<ExternalLinkIcon/></a></p>
</blockquote>
<p>Jenkins默认使用的是自带的数据库管理用户，支持同步LDAP、Github等认证集成。关于用户与权限管理是Jenkins比较弱的一点，当大规模授权的时候建议使用API接口授权，否则当你打开web页面授权时，会很乱加载缓慢，最终导致保存失败权限丢失。</p>
<h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h2>
<ul>
<li>配置用户接入入口: 系统管理-&gt;全局安全配置。</li>
<li>默认使用的是Jenkins数据库存储。</li>
<li>可以选择集成LDAP服务或者是GItlab服务（需要安装插件后才能使用，后面会讲解）。</li>
</ul>
<p><a href="http://docs.idevops.site/jenkins/basics/userandpermissions/images/01-configglobal.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/basics/userandpermissions/images/01-configglobal.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="查看用户" tabindex="-1"><a class="header-anchor" href="#查看用户" aria-hidden="true">#</a> 查看用户</h3>
<p>以使用Jenkins专有数据库为例，用户管理入口: 系统管理-&gt; 管理用户</p>
<h3 id="新建用户" tabindex="-1"><a class="header-anchor" href="#新建用户" aria-hidden="true">#</a> 新建用户</h3>
<p><a href="http://docs.idevops.site/jenkins/basics/userandpermissions/images/02-createuser.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/basics/userandpermissions/images/02-createuser.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h3>
<p><a href="http://docs.idevops.site/jenkins/basics/userandpermissions/images/03-deleuser.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/basics/userandpermissions/images/03-deleuser.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="更新用户" tabindex="-1"><a class="header-anchor" href="#更新用户" aria-hidden="true">#</a> 更新用户</h3>
<p><a href="http://docs.idevops.site/jenkins/basics/userandpermissions/images/04-updateuser.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/basics/userandpermissions/images/04-updateuser.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<hr>
<h2 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理" aria-hidden="true">#</a> 权限管理</h2>
<blockquote>
<p>注意安装插件: 权限默认使用 Role-Based Strategy,其他方式如图所示。</p>
</blockquote>
<p><a href="http://docs.idevops.site/jenkins/basics/userandpermissions/images/11-quanxian-type.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/basics/userandpermissions/images/11-quanxian-type.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="管理权限" tabindex="-1"><a class="header-anchor" href="#管理权限" aria-hidden="true">#</a> 管理权限</h3>
<ul>
<li>系统设置-&gt;Manage and Assign Roles-&gt;Manage Roles</li>
<li>Global roles：添加用户和用户组，分配某个用户属于哪个用户组。</li>
<li>Project roles：添加某个工程或某一组工程的用户或用户组</li>
<li>Slave roles：添加某个节点或某一组节点的用户或用户组</li>
</ul>
<p><a href="http://docs.idevops.site/jenkins/basics/userandpermissions/images/12-manage.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/basics/userandpermissions/images/12-manage.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="全局权限" tabindex="-1"><a class="header-anchor" href="#全局权限" aria-hidden="true">#</a> 全局权限</h3>
<p><a href="http://docs.idevops.site/jenkins/basics/userandpermissions/images/13-global.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/basics/userandpermissions/images/13-global.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="项目权限" tabindex="-1"><a class="header-anchor" href="#项目权限" aria-hidden="true">#</a> 项目权限</h3>
<p><a href="http://docs.idevops.site/jenkins/basics/userandpermissions/images/14-project.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/basics/userandpermissions/images/14-project.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="权限授权" tabindex="-1"><a class="header-anchor" href="#权限授权" aria-hidden="true">#</a> 权限授权</h3>
<p><a href="http://docs.idevops.site/jenkins/basics/userandpermissions/images/15-assign.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/basics/userandpermissions/images/15-assign.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
</template>
