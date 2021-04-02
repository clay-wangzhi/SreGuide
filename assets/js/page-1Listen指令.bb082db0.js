(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{677:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-listen-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-listen-指令"}},[t._v("#")]),t._v(" 1 Listen 指令")]),t._v(" "),a("p",[a("strong",[t._v("Example Configuration")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317093603705.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("Directives")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317093633095.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_2-server-name指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-server-name指令"}},[t._v("#")]),t._v(" 2 server_name指令")]),t._v(" "),a("h3",{attrs:{id:"_2-1-规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-规则"}},[t._v("#")]),t._v(" 2.1 规则")]),t._v(" "),a("ul",[a("li",[t._v("指令后可以跟多个域名，第一个是主域名")]),t._v(" "),a("li",[t._v("*泛域名：进支持在最前或最后（"),a("code",[t._v("server_name *.baiud.com;")]),t._v("）")]),t._v(" "),a("li",[t._v("正则表达式：加"),a("code",[t._v("~")]),t._v("前缀 ("),a("code",[t._v("server_name www.taohui.tech ~^www\\d+\\.taohui\\.tech$;")]),t._v(")")])]),t._v(" "),a("p",[a("strong",[t._v("用正则表达式创建变量：用小括号()")])]),t._v(" "),a("p",[t._v("示例")]),t._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("www\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sites"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("www\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("domain"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    locatoin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sites"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$domain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("strong",[t._v("其他")])]),t._v(" "),a("ul",[a("li",[t._v(".taohui.tech 可以匹配 taohui.tech *.taohui.tech")]),t._v(" "),a("li",[t._v("_ 匹配所有")]),t._v(" "),a("li",[t._v("“” 匹配没有传递Host头部")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-匹配顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-匹配顺序"}},[t._v("#")]),t._v(" 2.2 匹配顺序")]),t._v(" "),a("p",[t._v("1）精准匹配")]),t._v(" "),a("p",[t._v("2）*在前的泛域名")]),t._v(" "),a("p",[t._v("3）*在后的泛域名")]),t._v(" "),a("p",[t._v("4）按文件中的顺序匹配正则表达式域名")]),t._v(" "),a("p",[t._v("5）default server 匹配第1个，listen指定default")])])}),[],!1,null,null,null);s.default=e.exports}}]);