import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as o,b as e,d as s,a as i}from"./app-1a5afd71.js";const d={},l=e("h1",{id:"_3-1-jenkins用户权限管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-1-jenkins用户权限管理","aria-hidden":"true"},"#"),s(" 3.1 Jenkins用户权限管理")],-1),c={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"Jenkins默认使用的是自带的数据库管理用户，支持同步LDAP、Github等认证集成。关于用户与权限管理是Jenkins比较弱的一点，当大规模授权的时候建议使用API接口授权，否则当你打开web页面授权时，会很乱加载缓慢，最终导致保存失败权限丢失。",-1),p=e("h2",{id:"用户管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#用户管理","aria-hidden":"true"},"#"),s(" 用户管理")],-1),_=e("ul",null,[e("li",null,"配置用户接入入口: 系统管理->全局安全配置。"),e("li",null,"默认使用的是Jenkins数据库存储。"),e("li",null,"可以选择集成LDAP服务或者是GItlab服务（需要安装插件后才能使用，后面会讲解）。")],-1),u={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/01-configglobal.png",target:"_blank",rel:"noopener noreferrer"},g=e("img",{src:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/01-configglobal.png",alt:"images"},null,-1),m=e("h3",{id:"查看用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#查看用户","aria-hidden":"true"},"#"),s(" 查看用户")],-1),b=e("p",null,"以使用Jenkins专有数据库为例，用户管理入口: 系统管理-> 管理用户",-1),k=e("h3",{id:"新建用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#新建用户","aria-hidden":"true"},"#"),s(" 新建用户")],-1),f={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/02-createuser.png",target:"_blank",rel:"noopener noreferrer"},j=e("img",{src:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/02-createuser.png",alt:"images"},null,-1),v=e("h3",{id:"删除用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#删除用户","aria-hidden":"true"},"#"),s(" 删除用户")],-1),x={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/03-deleuser.png",target:"_blank",rel:"noopener noreferrer"},J=e("img",{src:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/03-deleuser.png",alt:"images"},null,-1),q=e("h3",{id:"更新用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#更新用户","aria-hidden":"true"},"#"),s(" 更新用户")],-1),A={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/04-updateuser.png",target:"_blank",rel:"noopener noreferrer"},B=e("img",{src:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/04-updateuser.png",alt:"images"},null,-1),I=e("hr",null,null,-1),L=e("h2",{id:"权限管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#权限管理","aria-hidden":"true"},"#"),s(" 权限管理")],-1),P=e("blockquote",null,[e("p",null,"注意安装插件: 权限默认使用 Role-Based Strategy,其他方式如图所示。")],-1),y={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/11-quanxian-type.png",target:"_blank",rel:"noopener noreferrer"},E=e("img",{src:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/11-quanxian-type.png",alt:"images"},null,-1),G=e("h3",{id:"管理权限",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#管理权限","aria-hidden":"true"},"#"),s(" 管理权限")],-1),N=e("ul",null,[e("li",null,"系统设置->Manage and Assign Roles->Manage Roles"),e("li",null,"Global roles：添加用户和用户组，分配某个用户属于哪个用户组。"),e("li",null,"Project roles：添加某个工程或某一组工程的用户或用户组"),e("li",null,"Slave roles：添加某个节点或某一组节点的用户或用户组")],-1),R={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/12-manage.png",target:"_blank",rel:"noopener noreferrer"},V=e("img",{src:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/12-manage.png",alt:"images"},null,-1),D=e("h3",{id:"全局权限",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#全局权限","aria-hidden":"true"},"#"),s(" 全局权限")],-1),M={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/13-global.png",target:"_blank",rel:"noopener noreferrer"},S=e("img",{src:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/13-global.png",alt:"images"},null,-1),w=e("h3",{id:"项目权限",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目权限","aria-hidden":"true"},"#"),s(" 项目权限")],-1),C={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/14-project.png",target:"_blank",rel:"noopener noreferrer"},T=e("img",{src:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/14-project.png",alt:"images"},null,-1),z=e("h3",{id:"权限授权",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#权限授权","aria-hidden":"true"},"#"),s(" 权限授权")],-1),F={href:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/15-assign.png",target:"_blank",rel:"noopener noreferrer"},H=e("img",{src:"http://docs.idevops.site/jenkins/basics/userandpermissions/images/15-assign.png",alt:"images"},null,-1);function K(O,Q){const n=r("ExternalLinkIcon");return t(),o("div",null,[l,e("blockquote",null,[e("p",null,[s("转载自："),e("a",c,[s("Jenkins用户权限管理 | 泽阳"),i(n)])])]),h,p,_,e("p",null,[e("a",u,[g,i(n)])]),m,b,k,e("p",null,[e("a",f,[j,i(n)])]),v,e("p",null,[e("a",x,[J,i(n)])]),q,e("p",null,[e("a",A,[B,i(n)])]),I,L,P,e("p",null,[e("a",y,[E,i(n)])]),G,N,e("p",null,[e("a",R,[V,i(n)])]),D,e("p",null,[e("a",M,[S,i(n)])]),w,e("p",null,[e("a",C,[T,i(n)])]),z,e("p",null,[e("a",F,[H,i(n)])])])}const X=a(d,[["render",K],["__file","userandpermissions.html.vue"]]);export{X as default};
