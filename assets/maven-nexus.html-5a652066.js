import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as d,c as r,b as e,d as i,e as l,a as t}from"./app-4800435f.js";const v={},g=e("h1",{id:"maven私服nexus3-x环境配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#maven私服nexus3-x环境配置","aria-hidden":"true"},"#"),i(" maven私服nexus3.x环境配置")],-1),c={href:"https://www.xncoding.com/2017/09/02/tool/nexus.html",target:"_blank",rel:"noopener noreferrer"},u=t('<p>私服是指私有服务器，是架设在局域网的一种特殊的远程仓库，目的是代理远程仓库及部署第三方构建。 有了私服之后，当 Maven 需要下载构件时，直接请求私服，私服上存在则下载到本地仓库； 否则，私服请求外部的远程仓库，将构件下载到私服，再提供给本地仓库下载。</p><p>Nexus是一个强大的Maven仓库管理器，它极大地简化了本地内部仓库的维护和外部仓库的访问。 如果使用了公共的Maven仓库服务器，可以从Maven中央仓库下载所需要的构件（Artifact），但这通常不是一个好的做法。 正常做法是在本地架设一个本地Maven仓库服务器，利用Nexus私服可以只在一个地方就能够完全控制访问和部署在你所维护仓库中的每个Artifact。</p><h2 id="nexus优点" tabindex="-1"><a class="header-anchor" href="#nexus优点" aria-hidden="true">#</a> Nexus优点</h2><p>为什么要构建Nexus私服？好处我随便列几点：</p><ul><li>Nexus在代理远程仓库的同时维护本地仓库，以降低中央仓库的负荷,节省外网带宽和时间，Nexus私服就可以满足这样的需要。</li><li>Nexus是一套”开箱即用”的系统不需要数据库，它使用文件系统加Lucene来组织数据。</li><li>Nexus使用ExtJS来开发界面，利用Restlet来提供完整的REST APIs，并能通过插件和各种IDE集成。</li><li>Nexus支持WebDAV与LDAP安全身份认证。</li><li>Nexus还提供了强大的仓库管理功能，构件搜索功能，它基于REST，提供友好的UI，占用较少的内存，基于简单文件系统而非数据库。</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>我的环境是centos7.2 + JDK8 + Maven3，首先需要安装 JDK8 和 Maven3，这里不多讲。</p>',7),o={href:"https://www.sonatype.com/download-oss-sonatype",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>下载文件nexus-3.6.0-02-unix.tar.gz，解压缩。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar zxf nexus-3.6.0-02-unix.tar.gz -C /usr/local/
cd /usr/local/
mv nexus-3.6.0-02/ nexus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./nexus/bin/nexus start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认端口8081，如果开了防火墙，就把这个端口放开：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=8081/tcp --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动之后，运行命令<code>lsof -i:8081</code>可查看是否成功启动了。</p><p>Nexus默认的端口是8081，可以在etc/nexus-default.properties配置中修改。</p><p>Nexus默认的用户名密码是admin/admin123</p><p>当遇到奇怪问题时，重启nexus，重启后web界面要1分钟左右后才能访问。</p><p>Nexus的工作目录是<code>sonatype-work</code>（路径一般在nexus同级目录下），日志文件也在这里。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls sonatype-work/nexus3/
backup  blobs  cache  db  elasticsearch  etc  generated-bundles  
health-check  instances  keystores  lock  log  orient  port  tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p={href:"http://localhost:8081/",target:"_blank",rel:"noopener noreferrer"},b=t(`<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus01.png" alt="img"></p><p>使用默认的管理员admin/admin123登录，进入管理界面：</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus02.png" alt="img"></p><h2 id="用户和角色" tabindex="-1"><a class="header-anchor" href="#用户和角色" aria-hidden="true">#</a> 用户和角色</h2><p>可以点击上面的”设置”图标，在”设置”里可以添加用户、角色，对接LDAP等的设置。</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus03.png" alt="img"></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus04.png" alt="img"></p><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h2><p>最核心的是仓库管理</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus05.png" alt="img"></p><p>默认的这几个仓库我解释一下：</p><ol><li>maven-central：maven中央库，默认从https://repo1.maven.org/maven2/拉取jar</li><li>maven-releases：私库发行版jar，初次安装请将<code>Deployment policy</code>设置为<code>Allow redeploy</code></li><li>maven-snapshots：私库快照（调试版本）jar</li><li>maven-public：仓库分组，把上面三个仓库组合在一起对外提供服务，在本地maven基础配置<code>settings.xml</code>中使用。</li></ol><p>Nexus默认的仓库类型有以下四种：</p><ol><li>group(仓库组类型)：又叫组仓库，用于方便开发人员自己设定的仓库；</li><li>hosted(宿主类型)：内部项目的发布仓库（内部开发人员，发布上去存放的仓库）；</li><li>proxy(代理类型)：从远程中央仓库中寻找数据的仓库（可以点击对应的仓库的Configuration页签下Remote Storage属性的值即被代理的远程仓库的路径）；</li><li>virtual(虚拟类型)：虚拟仓库（这个基本用不到，重点关注上面三个仓库的使用）；</li></ol><p>Policy(策略): 表示该仓库为发布(Release)版本仓库还是快照(Snapshot)版本仓库；</p><p>由于访问中央仓库有时候会比较慢，这里我添加一个阿里云的代理仓库，然后优先级放到默认中央库之前,， 阿里云的maven仓库url为<code>http://maven.aliyun.com/nexus/content/groups/public</code></p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus09.png" alt="img"></p><p>然后再public组里面讲这个<code>aliyun-proxy</code>仓库加入，排在<code>maven-central</code>之前即可。</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus10.png" alt="img"></p><p>** Nexus仓库分类的概念 **</p><p>1）Maven可直接从宿主仓库下载构件,也可以从代理仓库下载构件,而代理仓库间接的从远程仓库下载并缓存构件</p><p>2）为了方便,Maven可以从仓库组下载构件,而仓库组并没有时间的内容(下图中用虚线表示,它会转向包含的宿主仓库或者代理仓库获得实际构件的内容)</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus06.png" alt="img"></p><h2 id="nexus的调度任务" tabindex="-1"><a class="header-anchor" href="#nexus的调度任务" aria-hidden="true">#</a> Nexus的调度任务</h2><p>默认安装好之后是没有索引和jar文件的，因为你要自己定义任务去执行。</p><p>Nexus提供了一系列可配置的调度任务来方便用户管理系统。用户可以设定这些任务运行的方式，例如每天、每周等。调度任务会在适当的时候在后台运行。</p><p>要建立一个调度任务，单击左边导航菜单中的Tasks，点击<code>Create Task</code>，然后选择一个任务类型。</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus11.png" alt="img"></p><p>以下几种常用类型的调度任务：</p><ul><li>Execute script：执行自定义脚本</li><li>Purge开头：清理一些不使用的资源。</li><li>Rebuild repository index：为仓库重新编纂索引，从远仓库下载最新的索引。</li><li>Rebuild Maven repository metadata：基于仓库内容重新创建仓库元数据文件，同时重新创建每个文件的校验和md5与sha1。</li><li>Remove snapshots from Maven repository：把快照删了，这个是在稳定版发布后清除</li></ul><p>比如我新建一个重构索引的任务，然后选择aliyun仓库，让它把远程索引取下来，手动执行。不过最好别这样做，因为需要很大的硬盘空间。</p><p>最好是让它自己去维护，请求一个依赖的时候如果私服没有会自动去远仓库取的。</p><h2 id="nexus搜索页" tabindex="-1"><a class="header-anchor" href="#nexus搜索页" aria-hidden="true">#</a> Nexus搜索页</h2><p>这个不需要登录就可以访问，用来查询jar包。支持模糊查询</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus07.png" alt="img"></p><h2 id="blob-stores" tabindex="-1"><a class="header-anchor" href="#blob-stores" aria-hidden="true">#</a> Blob Stores</h2><p>文件存储的地方，创建一个目录的话，对应文件系统的一个目录，可供仓库上传文件使用，如图所示：</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus08.png" alt="img"></p><h2 id="本地maven使用私服" tabindex="-1"><a class="header-anchor" href="#本地maven使用私服" aria-hidden="true">#</a> 本地Maven使用私服</h2><p>安装和配置好之后，在开发中如何使用呢。可在maven的默认配置<code>settings.xml</code>中修改如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;servers&gt;
    &lt;server&gt;
        &lt;id&gt;releases&lt;/id&gt;
        &lt;username&gt;admin&lt;/username&gt;
        &lt;password&gt;admin123&lt;/password&gt;
    &lt;/server&gt;
    &lt;server&gt;
        &lt;id&gt;snapshots&lt;/id&gt;
        &lt;username&gt;admin&lt;/username&gt;
        &lt;password&gt;admin123&lt;/password&gt;
    &lt;/server&gt;
&lt;/servers&gt;

&lt;mirrors&gt;
    &lt;mirror&gt;
        &lt;id&gt;nexus&lt;/id&gt;
        &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
        &lt;url&gt;http://123.207.66.156:8081/repository/maven-public/&lt;/url&gt;
    &lt;/mirror&gt;
&lt;/mirrors&gt;

&lt;profiles&gt;
    &lt;profile&gt;  
      &lt;id&gt;dev&lt;/id&gt;
      &lt;repositories&gt;
        &lt;repository&gt;
          &lt;id&gt;Nexus&lt;/id&gt;
          &lt;url&gt;http://123.207.66.156:8081/repository/maven-public/&lt;/url&gt;
          &lt;releases&gt;
            &lt;enabled&gt;true&lt;/enabled&gt;
          &lt;/releases&gt;
          &lt;snapshots&gt;
            &lt;enabled&gt;true&lt;/enabled&gt;
            &lt;updatePolicy&gt;always&lt;/updatePolicy&gt;
          &lt;/snapshots&gt;
        &lt;/repository&gt;
      &lt;/repositories&gt;
      &lt;activation&gt;
        &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;      
        &lt;jdk&gt;1.8&lt;/jdk&gt;
      &lt;/activation&gt;
      &lt;properties&gt;
        &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;
        &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
        &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt;
      &lt;/properties&gt;
    &lt;/profile&gt;
&lt;/profiles&gt;
&lt;activeProfiles&gt;
    &lt;activeProfile&gt;dev&lt;/activeProfile&gt;
&lt;/activeProfiles&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要发布自己的jar到私服，就需要修改工程的<code>pom.xml</code>，添加如下内容，否则什么都不用做：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;distributionManagement&gt;
    &lt;repository&gt;
        &lt;id&gt;releases&lt;/id&gt;
        &lt;name&gt;Releases&lt;/name&gt;
        &lt;url&gt;http://123.207.66.156:8081/repository/maven-releases/&lt;/url&gt;
    &lt;/repository&gt;
    &lt;snapshotRepository&gt;
        &lt;id&gt;snapshots&lt;/id&gt;
        &lt;name&gt;Snapshot&lt;/name&gt;
        &lt;url&gt;http://123.207.66.156:8081/repository/maven-snapshots/&lt;/url&gt;
    &lt;/snapshotRepository&gt;
&lt;/distributionManagement&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上面的repository的id值一定要跟<code>settings.xml</code>文件中配置的server一致。</p><p>上传到Nexus上，使用 <code>mvn deploy</code> 即可，开发的时候请使用snapshot版本，也就是version的后缀必须是<code>-SNAPSHOT</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;groupId&gt;com.enzhico&lt;/groupId&gt;
&lt;artifactId&gt;micro-pay-sdk&lt;/artifactId&gt;
&lt;version&gt;1.2-SNAPSHOT&lt;/version&gt;
&lt;packaging&gt;jar&lt;/packaging&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus12.png" alt="img"></p><p>上次成功后再去私服仓库查询快照版发现已经成功上传：</p><p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/nexus13.png" alt="img"></p><p>** 第三方Jar上传到Nexus **</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn deploy:deploy-file \\
    -DgroupId=&lt;group-id&gt; \\
    -DartifactId=&lt;artifact-id&gt; \\
    -Dversion=&lt;version&gt; \\
    -Dpackaging=&lt;type-of-packaging&gt; \\
    -Dfile=&lt;path-to-file&gt; \\
    -DrepositoryId=&lt;server-id-settings.xml&gt; \\
    -Durl=&lt;url-of-the-repository-to-deploy&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-DrepositoryId</code>的值即为在<code>setttings.xml</code>里面配置的server id。</p><h2 id="上次不同jdk版本" tabindex="-1"><a class="header-anchor" href="#上次不同jdk版本" aria-hidden="true">#</a> 上次不同JDK版本</h2><p>pom.xml里面配置多个profile，其中一个默认的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
            &lt;version&gt;3.6.1&lt;/version&gt;
            &lt;configuration&gt;
                &lt;source&gt;\${jar.source}&lt;/source&gt;
                &lt;target&gt;\${jar.target}&lt;/target&gt;
                &lt;encoding&gt;UTF-8&lt;/encoding&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-deploy-plugin&lt;/artifactId&gt;
            &lt;version&gt;2.8.2&lt;/version&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;deploy&lt;/id&gt;
                    &lt;phase&gt;deploy&lt;/phase&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;deploy&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;

&lt;profiles&gt;
    &lt;profile&gt;
        &lt;id&gt;default&lt;/id&gt;
        &lt;activation&gt;
            &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
        &lt;/activation&gt;
        &lt;properties&gt;
            &lt;jar.source&gt;1.8&lt;/jar.source&gt;
            &lt;jar.target&gt;1.8&lt;/jar.target&gt;
        &lt;/properties&gt;
    &lt;/profile&gt;
    &lt;profile&gt;
        &lt;id&gt;jdk16&lt;/id&gt;
        &lt;build&gt;
            &lt;plugins&gt;
                &lt;plugin&gt;
                    &lt;artifactId&gt;maven-jar-plugin&lt;/artifactId&gt;
                    &lt;executions&gt;
                        &lt;execution&gt;
                            &lt;phase&gt;package&lt;/phase&gt;
                            &lt;goals&gt;
                                &lt;goal&gt;jar&lt;/goal&gt;
                            &lt;/goals&gt;
                            &lt;configuration&gt;
                                &lt;classifier&gt;jdk16&lt;/classifier&gt;
                            &lt;/configuration&gt;
                        &lt;/execution&gt;
                    &lt;/executions&gt;
                &lt;/plugin&gt;
            &lt;/plugins&gt;
        &lt;/build&gt;
        &lt;properties&gt;
            &lt;jar.source&gt;1.6&lt;/jar.source&gt;
            &lt;jar.target&gt;1.6&lt;/jar.target&gt;
        &lt;/properties&gt;
    &lt;/profile&gt;
&lt;/profiles&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我定义了两个profile，那么打包或者发布的时候可指定不同的JDK版本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 默认版本JDK1.8
mvn clean &amp;&amp; mvn deploy
# JDK1.6版本
mvn clean &amp;&amp; mvn deploy -P jdk16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一条命令打包使用默认的profile，编译的版本是1.8，生成的文件是xxx-SNAPSHOT.jar； 而第二条命令打包指定使用jdk16这个profile，编译版本是1.6，生成的文件是xxx-SNAPSHOT-jdk16.jar。</p><p>项目中引用的时候可通过指定classifier：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.enzhico&lt;/groupId&gt;
    &lt;artifactId&gt;adm-traffic-common-model&lt;/artifactId&gt;
    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
    &lt;classifier&gt;jdk16&lt;/classifier&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布源码和文档" tabindex="-1"><a class="header-anchor" href="#发布源码和文档" aria-hidden="true">#</a> 发布源码和文档</h2><p>如果你还想发布源码和javadoc，那么需要使用maven插件，我把插件配置列出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
            &lt;version&gt;3.7.0&lt;/version&gt;
            &lt;configuration&gt;
                &lt;source&gt;1.8&lt;/source&gt;
                &lt;target&gt;1.8&lt;/target&gt;
                &lt;encoding&gt;UTF-8&lt;/encoding&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-resources-plugin&lt;/artifactId&gt;
            &lt;configuration&gt;
                &lt;encoding&gt;UTF-8&lt;/encoding&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-source-plugin&lt;/artifactId&gt;
            &lt;version&gt;3.0.1&lt;/version&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;attach-sources&lt;/id&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;jar&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-javadoc-plugin&lt;/artifactId&gt;
            &lt;version&gt;2.10.4&lt;/version&gt;
            &lt;configuration&gt;
                &lt;encoding&gt;UTF-8&lt;/encoding&gt;
                &lt;aggregate&gt;true&lt;/aggregate&gt;
                &lt;charset&gt;UTF-8&lt;/charset&gt;
                &lt;docencoding&gt;UTF-8&lt;/docencoding&gt;
            &lt;/configuration&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;attach-javadocs&lt;/id&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;jar&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-deploy-plugin&lt;/artifactId&gt;
            &lt;version&gt;2.8.2&lt;/version&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;deploy&lt;/id&gt;
                    &lt;phase&gt;deploy&lt;/phase&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;deploy&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发布javadoc的时候，每个方法注释必须遵循规范，比如参数、返回值、异常都应该有说明。</p><p>打包或发布的时候如果想跳过测试，加一个参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean &amp;&amp; mvn deploy -DskipTests=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,66);function x(h,f){const n=a("ExternalLinkIcon");return d(),r("div",null,[g,e("blockquote",null,[e("p",null,[i("转载自："),e("a",c,[i("maven私服nexus3.x环境配置 | 飞污熊博客"),l(n)])])]),u,e("p",null,[i("去官网下载最新的 "),e("a",o,[i("download nexus"),l(n)])]),m,e("p",null,[i("访问："),e("a",p,[i("http://localhost:8081"),l(n)]),i("，效果如下：")]),b])}const w=s(v,[["render",x],["__file","maven-nexus.html.vue"]]);export{w as default};
