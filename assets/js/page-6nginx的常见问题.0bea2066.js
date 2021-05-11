(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1232:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_6-nginx的常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-nginx的常见问题"}},[s._v("#")]),s._v(" 6. nginx的常见问题")]),s._v(" "),a("h2",{attrs:{id:"nginx前面有多个反向代理时-proxy的正确设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx前面有多个反向代理时-proxy的正确设置"}},[s._v("#")]),s._v(" nginx前面有多个反向代理时，proxy的正确设置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#proxy_redirect off;\n#proxy_set_header Host $host\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("注释掉这两行，让它使用默认配置")]),s._v(" "),a("h2",{attrs:{id:"nginx解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx解决跨域问题"}},[s._v("#")]),s._v(" nginx解决跨域问题")]),s._v(" "),a("p",[s._v("在nginx.conf中编辑")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("   html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("允许cros跨域访问\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_header")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Origin'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"从http跳转到https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从http跳转到https"}},[s._v("#")]),s._v(" 从http跳转到https")]),s._v(" "),a("p",[s._v("项目前期使用http，后期为了安全方面的考虑，启用了https。\n项目架构：前端使用nginx作为多个tomcat实例的反向代理和负载均衡。\n实际上只需要在nginx上启用https即可，使客户端与nginx之后使用https方式通信，而nginx与tomcat之间依然以http方式通信。")]),s._v(" "),a("p",[s._v("现在需要将之前客户端所有的http请求全部都自动重定向为https，只需要在nginx上添加相应配置即可。")]),s._v(" "),a("h3",{attrs:{id:"使用rewrite指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用rewrite指令"}},[s._v("#")]),s._v(" 使用rewrite指令")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rewrite")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" permanent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),s._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# other")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("如果此时nginx作为Tomcat的前端反向代理的话，需要将相应配置放在配置ssl的server块中。")]),s._v(" "),a("h3",{attrs:{id:"使用return指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用return指令"}},[s._v("#")]),s._v(" 使用return指令")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),s._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# other")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("如果此时nginx作为Tomcat的前端反向代理的话，需要将相应配置放在配置ssl的server块中。")]),s._v(" "),a("h3",{attrs:{id:"使用error-page指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用error-page指令"}},[s._v("#")]),s._v(" 使用error_page指令")]),s._v(" "),a("p",[s._v("只允许HTTP来访问时，用HTTP访问会让Nginx报497错误，然后利用error_page将链接重定向至HTTPS上。")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),s._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# other")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("497")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("使用error_page指令时，将http和https的监听配置写在同一个server块中，对应的其他配置也需要在该server配置块中完成。")]),s._v(" "),a("p",[s._v("需要注意的是，此时需要将"),a("code",[s._v("error_page")]),s._v("指令语句写在最后，否则不能生效。")]),s._v(" "),a("h2",{attrs:{id:"nginx出现403的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx出现403的原因"}},[s._v("#")]),s._v(" nginx出现403的原因")]),s._v(" "),a("h3",{attrs:{id:"缺少index-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺少index-html"}},[s._v("#")]),s._v(" 缺少index.html")]),s._v(" "),a("p",[s._v("缺少index.html或者index.php文件，就是配置文件中index index.html index.htm这行中的指定的文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {  \n      listen       80;  \n      server_name  localhost;  \n      index  index.php index.html;  \n      root  /data/www/;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("如果在/data/www/下面没有index.php,index.html的时候，直接文件，会报403 forbidden。")]),s._v(" "),a("h3",{attrs:{id:"权限问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限问题"}},[s._v("#")]),s._v(" 权限问题")]),s._v(" "),a("p",[s._v("1）查看nginx的启动用户")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ps aux | grep "nginx: worker process" | grep -v "grep" | awk \'{ print $1 }\'\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("index")]),s._v("文件的权限，"),a("code",[s._v("nginx")]),s._v("启动用户要有读的权限，"),a("code",[s._v("index")]),s._v("所在的目录要有可以访问目录内容的权限（递归都要有，每一级）")]),s._v(" "),a("p",[s._v("如果nginx没有web目录的操作权限，也会出现403错误。上一级目录权限，有读的权限就行，不必要改为777")]),s._v(" "),a("p",[s._v("解决办法：修改web目录的读写权限，或者是把nginx的启动用户改成目录的所属用户，重启Nginx即可解决")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chmod -R 777 /data\nchmod -R 777 /data/www/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"selinux设置问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selinux设置问题"}},[s._v("#")]),s._v(" SELinux设置问题")]),s._v(" "),a("p",[s._v("设置为："),a("code",[s._v("SELINUX=disabled")])]),s._v(" "),a("h2",{attrs:{id:"通过nginx实现蓝绿发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过nginx实现蓝绿发布"}},[s._v("#")]),s._v(" 通过nginx实现蓝绿发布")]),s._v(" "),a("p",[s._v("样例")]),s._v(" "),a("p",[a("code",[s._v("nginx.conf")]),s._v("通过两个子配置文件来实现")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#include conf.d/v2.conf")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("v1.conf")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" app_v1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" app_v2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app_v1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[a("code",[s._v("v2.conf")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" app_v1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" app_v2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app_v2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("有的时候还是结合cookie进行使用")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_cookie")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version=V1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$group")]),s._v(" app_v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"nginx-allow-多个ip-ipv4的网段表示方法解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-allow-多个ip-ipv4的网段表示方法解析"}},[s._v("#")]),s._v(" nginx allow 多个ip & ipv4的网段表示方法解析")]),s._v(" "),a("p",[s._v("单看"),a("a",{attrs:{href:"http://www.ttlsa.com/nginx/",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx"),a("OutboundLink")],1),s._v("模块名"),a("code",[s._v("ngx_http_access_module")]),s._v(",很多人一定很陌生，但是deny和allow相比没一个人不知道的，实际上deny和allow指令属于ngx_http_access_module.我们想控制某个uri或者一个路径不让人访问，在nginx就得靠它了。")]),s._v(" "),a("p",[s._v("nginx的访问控制模块语法很简单，至少比apache好理解，apache的allow和deny的顺序让很多初学者抓头.好了具体看下这个插件的使用方法吧。")]),s._v(" "),a("h3",{attrs:{id:"_1、安装模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装模块"}},[s._v("#")]),s._v(" 1、安装模块")]),s._v(" "),a("p",[s._v("这个模块内置在了nginx中，除非你安装中使用了--without-http_access_module。如果你还没安装过nginx，那么请参考下ttlsa之前写的"),a("a",{attrs:{href:"http://www.ttlsa.com/html/1548.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx安装"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"_2、指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、指令"}},[s._v("#")]),s._v(" 2、指令")]),s._v(" "),a("p",[s._v("allow\n语法:    allow address | CIDR | unix: | all;\n默认值:    —\n配置段:    http, server, location, limit_except")]),s._v(" "),a("p",[s._v("允许某个ip或者一个ip段访问.如果指定unix:,那将允许socket的访问.注意：unix在1.5.1中新加入的功能，如果你的版本比这个低，请不要使用这个方法。")]),s._v(" "),a("p",[s._v("deny\n语法:    deny address | CIDR | unix: | all;\n默认值:    —\n配置段:    http, server, location, limit_except")]),s._v(" "),a("p",[s._v("禁止某个ip或者一个ip段访问.如果指定unix:,那将禁止socket的访问.注意：unix在1.5.1中新加入的功能，如果你的版本比这个低，请不要使用这个方法。")]),s._v(" "),a("h3",{attrs:{id:"_3-allow、deny实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-allow、deny实例"}},[s._v("#")]),s._v(" 3. allow、deny实例")]),s._v(" "),a("p",[s._v("location / {\ndeny 192.168.1.1;\nallow 192.168.1.0/24;\nallow 10.1.1.0/16;\nallow 2001:0db8::/32;\ndeny all;\n}")]),s._v(" "),a("p",[s._v("从上到下的顺序，类似iptables。匹配到了便跳出。如上的例子先禁止了192.16.1.1，接下来允许了3个网段，其中包含了一个ipv6，最后未匹配的IP全部禁止访问. 在实际生产环境中，我们也会使用nginx 的geo模块配合使用，有兴趣的请参考ttlsa相关文章"),a("a",{attrs:{href:"http://www.ttlsa.com/html/3203.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx geo使用方法"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("p",[s._v("nginx访问控制模块要数nginx里面最简单的指令，只要记住你想禁止谁访问就deny加上IP，想允许则加上allow ip，想禁止或者允许所有，那么allow all或者deny all即可.")]),s._v(" "),a("p",[s._v("但是具体的配置出现很多问题")]),s._v(" "),a("p",[s._v("简单一点举例说明：\nip段：10.0.0.1-10.0.0.255        的表示方法：10.0.0.0/24\nip段：10.0.0.1-10.0.255.255     的表示方法：10.0.0.0/16\nip段：10.0.0.1-10.255.255.255    的表示方法：10.0.0.0/8")]),s._v(" "),a("p",[s._v("利用主机数来计算")]),s._v(" "),a("p",[s._v("1)将主机数目转化为二进制来表示")]),s._v(" "),a("p",[s._v("2)如果主机数小于或等于254（注意去掉保留的两个IP地址），则取得该主机的二进制位数，为 N，这里肯定 N<8。如果大于254，则 N>8，这就是说主机地址将占据不止8位。")]),s._v(" "),a("p",[s._v("3)使用255.255.255.255来将该类IP地址的主机地址位数全部置1，然后从后向前的将N位全部置为 0，即为子网掩码值。")]),s._v(" "),a("p",[s._v("如欲将B类IP地址168.195.0.0划分成若干子网，每个子网内有主机700台：")]),s._v(" "),a("ol",[a("li",[s._v("700=1010111100")]),s._v(" "),a("li",[s._v("该二进制为十位数，N = 10")]),s._v(" "),a("li",[s._v("将该B类地址的子网掩码255.255.0.0的主机地址全部置 1，得到255.255.255.255 然后再从后向前将后 10位置0,即为： 11111111.11111111.11111100.00000000 即255.255.252.0。这就是该欲划分成主机为700台的B类IP地址 168.195.0.0的子网掩码。")])]),s._v(" "),a("p",[s._v("二进制表（表1）")]),s._v(" "),a("p",[s._v("0  0  0  0   0  0  0 0")]),s._v(" "),a("p",[s._v("128 64 32 16  8  4   2 1")]),s._v(" "),a("p",[s._v("CIDR值（表2）")]),s._v(" "),a("p",[s._v("子网掩码           CIDR值")]),s._v(" "),a("p",[s._v("255.0.0.0           /8")]),s._v(" "),a("p",[s._v("255.128.0.0          /9")]),s._v(" "),a("p",[s._v("255.192.0.0          /10")]),s._v(" "),a("p",[s._v("255.224.0.0          /11")]),s._v(" "),a("p",[s._v("255.240.0.0          /12")]),s._v(" "),a("p",[s._v("255.248.0.0          /13")]),s._v(" "),a("p",[s._v("255.252.0.0          /14")]),s._v(" "),a("p",[s._v("255.254.0.0          /15")]),s._v(" "),a("p",[s._v("255.255.0.0          /16")]),s._v(" "),a("p",[s._v("255.255.128.0        /17")]),s._v(" "),a("p",[s._v("255.255.192.0        /18")]),s._v(" "),a("p",[s._v("255.255.224.0        /19")]),s._v(" "),a("p",[s._v("255.255.240.0        /20")]),s._v(" "),a("p",[s._v("255.255.248.0        /21")]),s._v(" "),a("p",[s._v("255.255.252.0        /22")]),s._v(" "),a("p",[s._v("255.255.254.0        /23")]),s._v(" "),a("p",[s._v("255.255.255.0        /24")]),s._v(" "),a("p",[s._v("255.255.255.128       /25")]),s._v(" "),a("p",[s._v("255.255.255.192       /26")]),s._v(" "),a("p",[s._v("255.255.255.224       /27")]),s._v(" "),a("p",[s._v("255.255.255.240       /28")]),s._v(" "),a("p",[s._v("255.255.255.248       /29")]),s._v(" "),a("p",[s._v("255.255.255.252       /30")])])}),[],!1,null,null,null);t.default=e.exports}}]);