(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1027:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_8-2-数字常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-数字常量"}},[s._v("#")]),s._v(" 8.2. 数字常量")]),s._v(" "),a("p",[s._v("通常情况下，shell脚本会把数字以十进制整数看待(base 10)，除非数字加了特殊的前缀或标记。\n带前缀0的数字是八进制数(base 8)；带前缀0x的数字是十六进制数(base 16)。\n内嵌 # 的数字会以 BASE#NUMBER 的方式进行求值（不能超出当前shell支持整数的范围）。")]),s._v(" "),a("p",[a("strong",[s._v("样例 8-4. 数字常量的表示")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#!/bin/bash\n# numbers.sh: 不同进制数的表示\n\n# 十进制数: 默认\nlet "dec = 32"\necho "decimal number = $dec"             # 32\n# 一切正常。\n\n\n# 八进制数: 带前导\'0\'的数\nlet "oct = 032"\necho "octal number = $oct"               # 26\n# 结果以 十进制 打印输出了。\n# ------ ------ -----------\n\n\n# 十六进制数: 带前导\'0x\'或\'0X\'的数\nlet "hex = 0x32"\necho "hexadecimal number = $hex"         # 50\n\necho $((0x9abc))                         # 39612\n#     ^^      ^^   双圆括号进行表达式求值\n# 结果以十进制打印输出。\n\n\n\n# 其他进制数: BASE#NUMBER\n# BASE 范围:  2 - 64\n# NUMBER 必须以 BASE 规定的正确形式书写，如下:\n\nlet "bin = 2#111100111001101"\necho "binary number = $bin"              # 31181\n\nlet "b32 = 32#77"\necho "base-32 number = $b32"             # 231\n\nlet "b64 = 64#@_"\necho "base-64 number = $b64"             # 4031\n\n# 这种表示法只对进制范围(2 - 64)内的 ASCII 字符有效。\n# 10 数字 + 26 小写字母 + 26 大写字母 + @ + _\n\n\necho\n\necho $((36#zz)) $((2#10101010)) $((16#AF16)) $((53#1aA))\n                                         # 1295 170 44822 3375\n\n#  重要提醒:\n#  ---------\n#  使用超出进制范围以外的符号会报错。\n\nlet "bad_oct = 081"\n\n# (可能的) 报错信息:\n#  bad_oct = 081: value too great for base (error token is "081")\n#              Octal numbers use only digits in the range 0 - 7.\n\nexit $?        # 退出码 = 1 (错误)\n\n# 感谢 Rich Bartell 和 Stephane Chazelas 的说明。\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);