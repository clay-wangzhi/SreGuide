(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{1058:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第二十二章-限制模式的shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二十二章-限制模式的shell"}},[s._v("#")]),s._v(" 第二十二章. 限制模式的Shell")]),s._v(" "),a("h4",{attrs:{id:"限制模式下被禁用的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制模式下被禁用的命令"}},[s._v("#")]),s._v(" 限制模式下被禁用的命令")]),s._v(" "),a("ul",[a("li",[s._v("在限制模式下运行一个脚本或部分脚本将禁用一些命令，尽管这些命令在正常模式下是可用的。这是个安全措施，可以限制脚本用户的权限，减少运行脚本可能带来的损害。")])]),s._v(" "),a("p",[s._v("被禁用的命令和功能：")]),s._v(" "),a("ul",[a("li",[s._v("使用 "),a("em",[s._v("cd")]),s._v(" 来改变工作目录。")]),s._v(" "),a("li",[s._v("修改 "),a("em",[a("span",{staticClass:"katex-error",attrs:{title:"ParseError: KaTeX parse error: Double subscript at position 8: PATH_, _̲"}},[s._v("PATH_, _")]),s._v("SHELL")]),s._v(", *"),a("span",{staticClass:"katex-error",attrs:{title:"ParseError: KaTeX parse error: Expected group after &#039;_&#039; at position 13: BASH_ENV* 或 _̲"}},[s._v("BASH_ENV* 或 _")]),s._v("ENV_ 等"),a("a",{attrs:{href:"http://tldp.org/LDP/abs/html/othertypesv.html#ENVREF",target:"_blank",rel:"noopener noreferrer"}},[s._v("环境变量"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("读取或修改 "),a("em",[s._v("$SHELLOPTS")]),s._v("，shell环境选项。")]),s._v(" "),a("li",[s._v("输出重定向。")]),s._v(" "),a("li",[s._v("调用包含 / 的命令。")]),s._v(" "),a("li",[s._v("调用 "),a("a",{attrs:{href:"http://tldp.org/LDP/abs/html/internal.html#EXECREF",target:"_blank",rel:"noopener noreferrer"}},[s._v("exec"),a("OutboundLink")],1),s._v(" 来替代shell进程。")]),s._v(" "),a("li",[s._v("其他各种会造成混乱或颠覆脚本用途的命令。")]),s._v(" "),a("li",[s._v("在脚本中跳出限制模式。")])]),s._v(" "),a("h4",{attrs:{id:"例-22-1-在限制模式运行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例-22-1-在限制模式运行脚本"}},[s._v("#")]),s._v(" 例 22-1. 在限制模式运行脚本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#!/bin/bash\n\n#  在脚本开头用"#!/bin/bash -r"\n#+ 可以让整个脚本在限制模式运行。\n\necho\n\necho "改变目录。"\ncd /usr/local\necho "现在是在 `pwd`"\necho "回到家目录。"\ncd\necho "现在是在 `pwd`"\necho\n\n# 到此为止一切都是正常的，非限制模式。\n\nset -r\n# set --restricted 效果相同。\necho "==> 现在是限制模式 <=="\n\necho\necho\n\necho "在限制模式试图改变目录。"\ncd ..\necho "依旧在 `pwd`"\n\necho\necho\n\necho "\\$SHELL = $SHELL"\necho "试图在限制模式改变Shell 。"\nSHELL="/bin/ash"\necho\necho "\\$SHELL= $SHELL"\n\necho\necho\n\necho "试图在限制模式重定向输出内容。"\nls -l /usr/bin > bin.files\nls -l bin.files    # 尝试列出试图创建的文件。\n\necho\n\nexit 0\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);