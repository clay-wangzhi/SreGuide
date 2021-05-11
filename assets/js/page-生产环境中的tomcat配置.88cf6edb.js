(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{1238:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"生产环境中的tomcat配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生产环境中的tomcat配置"}},[a._v("#")]),a._v(" 生产环境中的tomcat配置")]),a._v(" "),e("h2",{attrs:{id:"tomcat安全配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tomcat安全配置"}},[a._v("#")]),a._v(" tomcat安全配置")]),a._v(" "),e("h3",{attrs:{id:"版本安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本安全"}},[a._v("#")]),a._v(" 版本安全")]),a._v(" "),e("p",[a._v("升级当前tomcat版本为最新稳定版本。")]),a._v(" "),e("p",[a._v("在升级版本中，需要注意两点：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("尽量避免跨大版本的升级")])]),a._v(" "),e("li",[e("p",[a._v("将当前老版本的server.xml , catalina.sh, web.xml和tomcat-users.xml进行备份，然后部署完新的tomcat")]),a._v(" "),e("p",[a._v("后，将这些配置文件覆盖过去。")])])]),a._v(" "),e("h3",{attrs:{id:"隐藏版本信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隐藏版本信息"}},[a._v("#")]),a._v(" 隐藏版本信息")]),a._v(" "),e("p",[a._v("当tomcat出现404或其它错误时，就会显示当前版本信息，为避免针对某一版本的攻击，我们应该将其隐藏或伪装")]),a._v(" "),e("p",[e("img",{attrs:{src:s(740),alt:"image"}})]),a._v(" "),e("p",[a._v("版本信息的显示是由一个jar包控制的，该jar包存放在tomcat安装目录下的lib目录下，名称为catalina.jar.")]),a._v(" "),e("ol",[e("li",[a._v("通过jar xf命令解压这个jar包会得到两个目录META-INF和org, 通过修改")])]),a._v(" "),e("p",[e("code",[a._v("org/apache/catalina/util/ServerInfo.properties")]),a._v("文件中的"),e("code",[a._v("serverinfo")]),a._v("字段来实现更改tomcat版本信息：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@localhost ~]# cat org/apache/catalina/util/SererInfo.properties | grep -v '^$|#'\nserver.info=Apache Tomcat/7.0.53\nserver.number=7.0.53.0\nserer.built=Mar 25 2014 06:20:16\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("当然还有另外一种方法来隐藏或伪装版本信息，这两种方法本质是一样的：")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@localhost ~]# cd /usr/local/apache-tomcat-7.0.53/lib\n[root@localhost lib]# mkdir -p org/apache/catalina/util\n[root@localhost lib]# cd org/apache/catalina/util\n[root@localhost util]# vim ServerInfo.properties\nserver.info=nolinux        # 如果想修改成其它版本号，把这个地方的值改成其它值就行了\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("修改完成之后，重启tomcat即可看到效果！")]),a._v(" "),e("h2",{attrs:{id:"tomcat的配置优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tomcat的配置优化"}},[a._v("#")]),a._v(" tomcat的配置优化")]),a._v(" "),e("h3",{attrs:{id:"优化web-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化web-xml"}},[a._v("#")]),a._v(" 优化web.xml")]),a._v(" "),e("p",[a._v("servlet与其它适用于整个Web应用程序设置的配置文件，必须符合servlet规范的标准格式。通过它可以配置你")]),a._v(" "),e("p",[a._v("web应用的相关选项，tomcat在启动的时候会读取这个文件，完成你开发的系统的一些初始化操作。")]),a._v(" "),e("p",[a._v("它可以做如下事情：")]),a._v(" "),e("ul",[e("li",[a._v("提供基于servlet的相关配置")]),a._v(" "),e("li",[a._v("增加监听器，监控session或在tomcat启动时，加载一些你希望加载的资源。比如创建数据库连接池等")]),a._v(" "),e("li",[a._v("设置session过期时间，tomcat默认是30分钟")]),a._v(" "),e("li",[a._v("更改应用的默认页面，通常为index.html/index.jsp等")]),a._v(" "),e("li",[a._v("增加过滤器， 做一些你希望的过滤操作，比如敏感词汇的过滤")]),a._v(" "),e("li",[a._v("增加一些jstl（标准标签库）的定义，方便在jsp中直接include进来")]),a._v(" "),e("li",[a._v("struts, spring或hibernate的一些配置等")])]),a._v(" "),e("p",[a._v("由于在生产环境中，tomcat不会直接对公网提供服务，前端肯定有apache或nginx，因此，默认主页或自定义错")]),a._v(" "),e("p",[a._v("误页，我们都在前端的apache或nginx中完成；另外也有可能是由程序员在项目内的WEB-INF/web.xml中去做定")]),a._v(" "),e("p",[a._v("义。")]),a._v(" "),e("p",[a._v("在tomcat新版本中，默认已经禁止列目录功能。")]),a._v(" "),e("p",[a._v("下面是几种觉的功能，在web.xml中的表现形式：")]),a._v(" "),e("p",[e("strong",[a._v("站点默认主页：")])]),a._v(" "),e("p",[e("img",{attrs:{src:s(741),alt:"image"}})]),a._v(" "),e("p",[e("strong",[a._v("自定义错误页：")])]),a._v(" "),e("p",[e("img",{attrs:{src:s(742),alt:"image"}})]),a._v(" "),e("p",[e("strong",[a._v("定义会话超时时间：")])]),a._v(" "),e("p",[e("img",{attrs:{src:s(743),alt:"image"}})]),a._v(" "),e("p",[e("strong",[a._v("禁止列目录：")])]),a._v(" "),e("p",[e("img",{attrs:{src:s(744),alt:"image"}})]),a._v(" "),e("h3",{attrs:{id:"优化-tomcat-user-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化-tomcat-user-xml"}},[a._v("#")]),a._v(" 优化 tomcat-user.xml")]),a._v(" "),e("p",[a._v("该文件中包含用户名，角色及密码。 负责提供webapps下manager项目的登录认证管理。")]),a._v(" "),e("p",[a._v("在生产环境中，我们需要将该文件全部注释。")]),a._v(" "),e("p",[e("img",{attrs:{src:s(745),alt:"image"}})]),a._v(" "),e("h3",{attrs:{id:"优化server-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化server-xml"}},[a._v("#")]),a._v(" 优化server.xml")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("maxThreads连接数限制：")]),a._v(" "),e("p",[a._v("maxThreads是tomcat所能接受的最大连接数。 一般设置不要超过8000， 如果你的网站访问量非常大可使用")]),a._v(" "),e("p",[a._v("多个tomcat实例的方法，即在一个服务器上启动多个tomcat，然后做负载均衡。")])]),a._v(" "),e("li",[e("p",[a._v("tomcat和php不同，php可以按照cpu和内存的情况去配置连接数，所以上万很正常。 但java还需要注意jvm")])]),a._v(" "),e("li",[e("p",[a._v("的参数配置。如果不注意就会因为jvm参数过小而崩溃。")])]),a._v(" "),e("li",[e("p",[a._v("不要多个虚拟主机：")]),a._v(" "),e("p",[a._v("强烈建议不要使用tomcat的虚拟主机功能，推荐一个tomcat实例启动一个站点。即，可以启动多个tomcat，而不是一个tomcat里包含多个虚拟主机。 因为tomcat是多线程，共享内存，任何一个虚拟主机中的应用崩溃，都会影响到所有的应用程序。")])]),a._v(" "),e("li",[e("p",[a._v("压缩传输：")]),a._v(" "),e("p",[a._v("tomcat也支持gzip压缩功能。 可以在server.xml配置文件中的Connector节点中配置如下参数，来实现对指定资源类型进行压缩。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('compression="on"             # 打开压缩功能 \ncompressionMinSize="50"      # 启用压缩的输出内容大小，默认为2KB \nnoCompressionUserAgents="gozilla, traviata"      # 对于以下的浏览器，不启用压缩 \ncompressableMimeType="text/html,text/xml,text/javascript,text/css,text/plain"　# 哪些资源类型需要压缩\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("要注意的是，对于文本信息比如txt, html, css,javascript进行压缩，效果非常好。而对文件，图片，视频不要压缩。")])]),a._v(" "),e("li",[e("p",[a._v("Connector 连接器的配置")]),a._v(" "),e("p",[a._v("bio、nio 和 apr，三种方式性能差别很大，apr 的性能最优， bio 的性能最差。而 Tomcat 7 使用的 Connector 默认就启用的 Apr 协议，但需要系统安装 Apr 库，否则就会使用 bio 方式。")])])]),a._v(" "),e("p",[a._v("配置文件样例，connector连接器设置为bio")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('   <Executor name="tomcatThreadPool" namePrefix="catalina-exec-"\n        maxThreads="2000" minSpareThreads="4"/>\n        \n    <Connector executor="tomcatThreadPool"\n         port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol" \n               connectionTimeout="20000" \n               redirectPort="8443"\n         \t   maxHeaderCount="64"  \n               maxParameterCount="64"  \n               maxHttpHeaderSize="8192"  \n               URIEncoding="UTF-8"  \n               useBodyEncodingForURI="false"  \n               maxThreads="2048"  \n               minSpareThreads="12"  \n               acceptCount="2048"  \n               connectionLinger="-1"  \n               keepAliveTimeout="60"  \n               maxKeepAliveRequests="32"  \n               maxConnections="1000"  \n               acceptorThreadCount="1"  \n               pollerThreadCount="2"  \n               selectorTimeout="1000"  \n               enableLookups="false"\n               useSendfile="true"  \n               selectorPool.maxSelectors="128"  />\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br")])]),e("h3",{attrs:{id:"管理ajp端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#管理ajp端口"}},[a._v("#")]),a._v(" 管理AJP端口")]),a._v(" "),e("p",[a._v("AJP是为tomcat与HTTP服务器之间通信而定制的协议，能提供较高的通信速度和效率。如果前端是apache的话，")]),a._v(" "),e("p",[a._v("会使用到AJP这个连接器，如果是nginx，就用不上了，因此需要注销掉：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('\x3c!--\n    <Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />\n--\x3e\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"更改关闭tomcat实例的指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更改关闭tomcat实例的指令"}},[a._v("#")]),a._v(" 更改关闭tomcat实例的指令")]),a._v(" "),e("p",[a._v("server.xml中定义了可以直接关闭tomcat实例的管理端口。 我们通过 telnet连接上该端口之后，输入shutdown")]),a._v(" "),e("p",[a._v("即可关闭。值得注意的是，虽然实例关闭了，但是进程还是存在的。由于默认的端口和指令都很简单，默认端口是")]),a._v(" "),e("p",[a._v("8005， 指令为SHUTDOWN. 因此我们要改得复杂一点（当然，新版本的tomcat管理端口监听在127.0.0.1）：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<Server port="8005" shutdown="9SDKJ29jksjf23sjf0LSDF92JKS9DKkjsd">\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"更改tomcat服务监听端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更改tomcat服务监听端口"}},[a._v("#")]),a._v(" 更改tomcat服务监听端口")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<Connector port="8080" address="172.16.100.1" />\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"关闭war自动部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭war自动部署"}},[a._v("#")]),a._v(" 关闭war自动部署")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<Host name="localhost"  appBase=""\n      unpackWARs="false" autoDeploy="false">\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"禁用tomcat管理页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#禁用tomcat管理页面"}},[a._v("#")]),a._v(" 禁用tomcat管理页面")]),a._v(" "),e("p",[a._v("删除webapps目录下的所有文件，还涉及到管理页面的2个配置文件host-manager.xml和manager.xml也要删")]),a._v(" "),e("p",[a._v("除，这两个文件在tomcat安装 目录下的conf/Catalina/localhost目录下。")]),a._v(" "),e("h3",{attrs:{id:"使用普通用户启动tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用普通用户启动tomcat"}},[a._v("#")]),a._v(" 使用普通用户启动tomcat")]),a._v(" "),e("p",[a._v("在启动之前需要将tomcat安装目录下所有文件的属主和属组都设置为指定的用户。")]),a._v(" "),e("h2",{attrs:{id:"tomcat生产服务器性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tomcat生产服务器性能优化"}},[a._v("#")]),a._v(" tomcat生产服务器性能优化")]),a._v(" "),e("h3",{attrs:{id:"tomcat内存优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tomcat内存优化"}},[a._v("#")]),a._v(" tomcat内存优化")]),a._v(" "),e("p",[a._v("tomcat内存优化主要是对tomcat启动参数优化，我们可以在tomcat启动脚本catalina.sh中设置JAVA——OPTS参")]),a._v(" "),e("p",[a._v("数。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("JAVA_OPTS='-server -Xms2048m -Xmx2048m -XX:PermSize=256M -XX:MaxNewSize=256m -XX:MaxPermSize=256m'\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("参数说明：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-server  启用jdk 的 server 版；  \n-Xms    java虚拟机初始化时的最小内存；  \n-Xmx   java虚拟机可使用的最大内存；  \n-XX:PermSize    内存永久保留区域  \n-XX:MaxPermSize   内存最大永久保留区域\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("-Xmx 默认为物理内存的1/4， 实际建议不大于4GB；一般建议设置-Xms = -Xmx")]),a._v(" "),e("p",[a._v("-server  一定要作为第一个参数，在多个cpu时性能 佳")]),a._v(" "),e("p",[a._v("-Xms  初始heap大小，使用的最小内存，cpu性能 高时可以设置的大一些")]),a._v(" "),e("blockquote",[e("p",[a._v("参考链接:")]),a._v(" "),e("p",[a._v("https://www.cnblogs.com/huangxm/p/6524968.html")]),a._v(" "),e("p",[a._v("https://blog.csdn.net/ljj_9/article/details/79145324")]),a._v(" "),e("p",[a._v("https://blog.csdn.net/loyachen/article/details/47280237")])])])}),[],!1,null,null,null);t.default=r.exports},740:function(a,t,s){a.exports=s.p+"assets/img/883007-20170309115431516-1104120437.f2f82d7b.png"},741:function(a,t,s){a.exports=s.p+"assets/img/883007-20170309115432875-139916481.1d93214b.png"},742:function(a,t,s){a.exports=s.p+"assets/img/883007-20170309115433984-443260669.344bd4f7.png"},743:function(a,t,s){a.exports=s.p+"assets/img/883007-20170309115435516-1709051054.a623a8f8.png"},744:function(a,t,s){a.exports=s.p+"assets/img/883007-20170309115437047-1295899737.b454616f.png"},745:function(a,t,s){a.exports=s.p+"assets/img/883007-20170309115438797-1710834528.13ff3583.png"}}]);