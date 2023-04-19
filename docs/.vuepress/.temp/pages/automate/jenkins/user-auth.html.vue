<template><h1 id="_5-2-用户认证系统集成" tabindex="-1"><a class="header-anchor" href="#_5-2-用户认证系统集成" aria-hidden="true">#</a> 5.2 用户认证系统集成</h1>
<blockquote>
<p>转载自：<a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/" target="_blank" rel="noopener noreferrer">用户认证系统集成 | 泽阳<ExternalLinkIcon/></a></p>
</blockquote>
<p>您好，本章主要讲解与jenkins与用户认证系统集成 例如：LDAP Gitlab GitHub 。我们做实验的过程中建议先开启匿名模式，防止配置错误导致无法直接登录。 😀</p>
<hr>
<p>Jenkins默认使用自带数据库模式存储用户，在企业中一般都会有统一的认证中心，例如 LDAP、ActiveDirectory中管理用户。可以配置Jenkins集成实现统一用户管理。</p>
<h2 id="ldap系统集成" tabindex="-1"><a class="header-anchor" href="#ldap系统集成" aria-hidden="true">#</a> ldap系统集成</h2>
<p>LDAP系统是用于用户管理，在配置集成的时候我们只需要以下信息：</p>
<ul>
<li>服务器地址： ldap://192.168.1.200</li>
<li>服务器端口: 389</li>
<li>组织OU: ou=jenkins,dc=devops,dc=com</li>
<li>管理员账号和密码: cn=admin,dc=devops,dc=com</li>
</ul>
<p>首先，我需要在Jenkins系统中安装<code>LDAP</code>插件，然后进入 系统管理 -&gt; <code>全局安全配置</code>页面中。</p>
<p><a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/01.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/01.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<p>填写好信息之后，我们可以点击测试按钮进行测试。会模拟用户登录，成功后再保存配置即可。</p>
<p><a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/02.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/02.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h2 id="gitlab单点登录" tabindex="-1"><a class="header-anchor" href="#gitlab单点登录" aria-hidden="true">#</a> gitlab单点登录</h2>
<p>一般我们会配置Gitlab系统与LDAP系统做用户认证集成，开发人员登录gitlab系统的频率还是很多的，今天我们的配置效果是：当用户已经登录了gitlab，再次打开Jenkins会自动登入。</p>
<h3 id="gitlab配置" tabindex="-1"><a class="header-anchor" href="#gitlab配置" aria-hidden="true">#</a> gitlab配置</h3>
<p>首先，我们需要在Gitlab中添加一个应用。系统设置 -&gt; 应用管理</p>
<p>填写Jenkins回调地址<code>http://jenkinsserver:8080/securityRealm/finishLogin</code>,勾选权限默认具有<code>read_user</code>权限即可。</p>
<p><a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/03.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/03.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<p>保存配置，会提示以下信息，这些信息需要填写到Jenkins中。<code>ApplicationId</code> <code>secret</code><a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/04.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/04.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="jenkins配置" tabindex="-1"><a class="header-anchor" href="#jenkins配置" aria-hidden="true">#</a> jenkins配置</h3>
<p>我们需要在Jenkins系统中安装插件<code>Gitlab Authentication</code>， 然后导航到<code>全局安全配置</code>。 填写Gitlab系统地址和上面在Gitlab创建的应用的<code>ApplicationId</code> <code>secret</code>。<a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/05.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/05.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<p>注意：当Jenkins前面有代理的时候可能会出现跳转错误的问题。这时候需要看下提示错误的redirect URL地址,检查下图配置。 如果下图配置没有问题，请检查代理的配置问题。另外要注意是<code>http</code>模式哦</p>
<p><a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/06.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/06.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h2 id="github单点登录" tabindex="-1"><a class="header-anchor" href="#github单点登录" aria-hidden="true">#</a> github单点登录</h2>
<p>如果你用过GitLab，你会发现与GitHub很类似。这里我们要配置的GitHub集成与GitLab配置很类似。</p>
<h3 id="github配置" tabindex="-1"><a class="header-anchor" href="#github配置" aria-hidden="true">#</a> github配置</h3>
<p>首先登录GitHub, settings -&gt; Developer Settings -&gt; Oauth Apps。<a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/07.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/07.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<p>新建应用：填写Jenkins回调地址<code>http://jenkinsserver:8080/securityRealm/finishLogin</code>。<a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/08.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/08.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<p>保存，获取应用ID和secret<a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/09.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/09.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="配置jenkins" tabindex="-1"><a class="header-anchor" href="#配置jenkins" aria-hidden="true">#</a> 配置jenkins</h3>
<p>我们需要在Jenkins系统中安装插件<code>Github Authentication</code>， 然后导航到<code>全局安全配置</code>。 填写Gitlab系统地址和上面在Gitlab创建的应用的<code>ApplicationId</code> <code>secret</code>。</p>
<p><a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/10.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/10.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
<p>效果：<a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/11.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/images/11.png" alt="images" loading="lazy"><ExternalLinkIcon/></a></p>
</template>
